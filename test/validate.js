const assert = require('assert');
const Validator = require('eslint/lib/config/config-validator');
const Environments = require('eslint/lib/config/environments');
const Plugins = require('eslint/lib/config/plugins');
const Rules = require('eslint/lib/rules');

const environments = new Environments();
const allRules = new Rules();
const removedRules = Object.keys(require('eslint/conf/replacements.json').rules);
const plugins = new Plugins(environments, allRules);

plugins.loadAll(['eslint-comments', 'prettier', 'flowtype']);

function validate(name) {
  describe(`${name}`, () => {
    const config = require(`../lib/${name}`);
    const rules = config.rules;

    it(`valid rule options.`, () => {
      for (const rule of Object.keys(rules)) {
        Validator.validateRuleOptions(allRules.get(rule), rule, rules[rule], `${name}.js`);
      }
    });

    it('should not include removed rules', () => {
      for (const rule of removedRules) {
        assert(rule in rules === false, `'${rule}' is removed rule.`);
      }
    });

    it('should not include deprecated rules', () => {
      for (const rule of Object.keys(rules)) {
        const def = allRules.get(rule);
        assert(Boolean(def && def.meta && def.meta.deprecated) === false, `'${rule}' is deprecated rule.`);
      }
    });
  });
}

validate('base');
validate('esnext');
validate('flowtype');
