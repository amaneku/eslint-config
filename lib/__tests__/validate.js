const path = require('node:path');
const { Linter } = require('eslint');
const ConfigValidator = require(`${path.resolve()}/node_modules/eslint/lib/shared/config-validator`);
const eslintPluginPrettier = require('eslint-plugin-prettier');
const replacements = require(`${path.resolve()}/node_modules/eslint/conf/replacements.json`);
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');


const coreRules = new Linter().getRules();
const allRules = new Map([
  ...coreRules,
  ...Object.entries(typescriptEslintPlugin.configs.all.rules),
  ...Object.entries(eslintPluginPrettier.configs.recommended.rules)
]);

const deprecatedRuleNames = new Set(
  Array.from(allRules)
    .filter(([, rule]) => rule && rule.meta && rule.meta.deprecated)
    .map(([ruleId]) => ruleId)
);
const removedRuleNames = new Set(Object.keys(replacements.rules));

describe('should be a valid config.', () => {
  function validate(name) {
    const config = require(`../${name}`);

    test(name, () => {
      ConfigValidator.validate(config, name, (ruleId) => allRules.get(ruleId));

      for (const ruleId of [].concat(
        Object.keys(config.rules || {}),
        ...(config.overrides || []).map((c) => Object.keys(c.rules || {}))
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
  validate('typescript');
});
