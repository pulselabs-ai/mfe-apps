const stylelint = require("stylelint");
require("dotenv").config();

const {
  createPlugin,
  utils: { ruleMessages, validateOptions, report },
} = stylelint;

const ruleName = "custom/parent-selector-prefix-check";
const messages = ruleMessages(ruleName, {
  expected: (selector, filePath) =>
    `Expected "${selector}" to start with ${process.env.REACT_APP_CSS_CLASS_SELECTOR_PREFIX} only in parent selectors (File: ${filePath}).`,
});

module.exports = createPlugin(ruleName, (primaryOption) => {
  return (root, result) => {
    const validOptions = validateOptions(result, ruleName, {
      actual: primaryOption,
      possible: [true],
    });

    if (!validOptions) return;

    root.walkRules((rule) => {
      const isNestedSelector = rule.parent && rule.parent.type !== "root";
      if (isNestedSelector) return;

      const classSelectors = rule.selector.split(",");

      const filePath = result.opts.from || "unknown file";

      classSelectors.forEach((selector) => {
        if (
          !selector.startsWith(process.env.REACT_APP_CSS_CLASS_SELECTOR_PREFIX)
        ) {
          report({
            message: messages.expected(selector, filePath),
            node: rule,
            result,
            ruleName,
            word: selector,
          });
        }
      });
    });
  };
});

module.exports.ruleName = ruleName;
module.exports.messages = messages;
