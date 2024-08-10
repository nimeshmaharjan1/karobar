import baseConfig from "@karobar/eslint-config/base";
import reactConfig from "@karobar/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [],
  },
  ...baseConfig,
  ...reactConfig,
];
