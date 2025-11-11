import css from "@eslint/css";
import next from "eslint-config-next";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import prettierPlugin from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const eslintConfig = [
  {
    files: ["**/*.module.css"],
    language: "css/css",
    ...css.configs.recommended,
  },
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    ignores: [".next/**", "node_modules/**"],
  },
  ...next,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
      prettier: prettierPlugin,
      css: css,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "prettier/prettier": "error",
      "react-hooks/set-state-in-effect": "off",
      "css/no-invalid-properties": "off",
    },
  },
];

export default eslintConfig;
