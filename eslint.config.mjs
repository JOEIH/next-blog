import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"
import eslintPluginPrettierRecommended from "eslint-config-prettier"

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  eslintPluginPrettierRecommended,

  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "dist/**",
    "public/**",
    "assets/**",
    ".DS_Store",
    "._.DS_Store",
    "**/.DS_Store",
    "**/._.DS_Store"
  ]),
  {
    rules: {
      "no-console": ["warn", { allow: ["warn", "error", "info"] }],
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" }
      ],
      "@typescript-eslint/no-explicit-any": "warn"
    }
  }
])

export default eslintConfig
