import css from "@eslint/css";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

const eslintConfig = [
  {
    files: ["**/*.module.css"],
    language: "css/css",
    ...css.configs.recommended,
  },
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "prettier",
      "plugin:jsx-a11y/recommended",
      "plugin:prettier/recommended",
    ],
    plugins: ["jsx-a11y", "prettier", "simple-import-sort"],
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  }),
];

export default eslintConfig;
