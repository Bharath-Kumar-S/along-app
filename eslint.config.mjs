import antfu from "@antfu/eslint-config";

// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  antfu(
    {
      typescript: true,
      formatters: true,
      type: "app",
      vue: true,
      stylistic: {
        indent: 2,
        semi: true,
        quotes: "double",
      },
    },
    {
      rules: {
        "ts/consistent-type-definitions": ["error", "type"],
        "no-console": "warn",
        "antfu/no-top-level-await": "off",
        "node/prefer-global/process": ["off"],
        "node/no-process-env": ["error"],
        "perfectionist/sort-imports": [
          "error",
          {
            tsconfig: {
              rootDir: "./",
            },
          },
        ],
        "unicorn/filename-case": [
          "error",
          {
            cases: {
              kebabCase: true,
            },
            ignore: ["README.md"],
          },
        ],
      },
    },
  ),
);
