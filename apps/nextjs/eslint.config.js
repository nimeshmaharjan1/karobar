import baseConfig, { restrictEnvAccess } from "@karobar/eslint-config/base";
import nextjsConfig from "@karobar/eslint-config/nextjs";
import reactConfig from "@karobar/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
