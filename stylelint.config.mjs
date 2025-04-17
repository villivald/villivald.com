/** @type {import('stylelint').Config} */
const config = {
  extends: "stylelint-config-standard",
  rules: {
    "block-no-empty": true,
    "selector-class-pattern": "(.*?)",
    "selector-id-pattern": "(.*?)",
    "custom-property-pattern": "(.*?)",
    "keyframes-name-pattern": "(.*?)",
  },
};

export default config;
