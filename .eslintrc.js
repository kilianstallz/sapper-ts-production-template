module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
      tsconfigRootDir: __dirname,
      project: ["./tsconfig.json"],
    },
    rules: {
      "import/prefer-default-export":"off",
      "no-await-in-loop": "warn",
      "promise/always-return": "warn",
      "@typescript-eslint/ban-ts-comment": 'off',
      "no-restricted-globals": "off",
      "import/no-extraneous-dependencies": ["warn", { devDependencies: true }],
      "import/no-mutable-exports": 0,
      "no-labels": 0,
      "no-restricted-syntax": 0,
    },
    plugins: ["@typescript-eslint", "svelte3"],
    extends: [
      "airbnb-typescript",
      "plugin:@typescript-eslint/recommended",
      "plugin:eslint-comments/recommended",
      "plugin:promise/recommended",
      "prettier",
      "prettier/@typescript-eslint",
    ],
    overrides: [
      {
        files: ["src/**/*.svelte"],
        processor: "svelte3/svelte3",
      },
    ],
  };