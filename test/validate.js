const { Linter } = require('eslint');
const Validator = require('eslint/lib/shared/config-validator');

const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');
const eslintPluginFlowtype = require('eslint-plugin-flowtype');
const eslintPluginPrettier = require('eslint-plugin-prettier');

const coreRules = new Linter().getRules();
const allRules = new Map([
  ...coreRules,
  ...Object.entries(typescriptEslintPlugin.configs.all.rules),
  ...Object.entries(eslintPluginFlowtype.configs.recommended.rules),
  ...Object.entries(eslintPluginPrettier.configs.recommended.rules)
]);

const deprecatedRuleNames = new Set(
  Array.from(allRules)
    .filter(([, rule]) => rule && rule.meta && rule.meta.deprecated)
    .map(([ruleId]) => ruleId)
);
const removedRuleNames = new Set(Object.keys(require('eslint/conf/replacements.json').rules));

describe('should be a valid config.', () => {
  function validate(name) {
    const config = require(`../lib/${name}`);

    it(name, () => {
      Validator.validate(config, name, ruleId => allRules.get(ruleId));

      for (const ruleId of [].concat(
        Object.keys(config.rules || {}),
        ...(config.overrides || []).map(c => Object.keys(c.rules || {}))
      )) {
        const rule = allRules.get(ruleId);
        if (!rule) {
          throw new Error(`The '${ruleId}' rule does not exist.`);
        }
        if (deprecatedRuleNames.has(ruleId)) {
          throw new Error(`The '${ruleId}' rule was deprecated.`);
        }
        if (removedRuleNames.has(ruleId)) {
          throw new Error(`The '${ruleId}' rule was removed.`);
        }
      }
    });
  }

  validate('base');
  validate('esnext');
  validate('flowtype');
  validate('typescript');
});
