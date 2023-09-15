/* eslint-env node */

const deepMerge = require('deepmerge');

/** @type {import("eslint").Linter.Config} */
const library = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'simple-import-sort',
    'import',
    'small-import',
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict',
    'plugin:@typescript-eslint/stylistic',
    '@frontside/eslint-config',
    'plugin:eslint-comments/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',

    // Base rules
    'prefer-let/prefer-let': 0,
    'eslint-comments/no-unused-disable': 'error',

    // TypeScript rules
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    '@typescript-eslint/consistent-type-assertions': 'warn',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true },
    ],
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': [
      'error',
      {
        ignoreConditionalTests: true,
        ignoreMixedLogicalExpressions: true,
        ignoreTernaryTests: false,
      },
    ],
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',

    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['enumMember'],
        format: ['PascalCase'],
      },
    ],

    // Import related rules
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-namespace': 'error',
    'import/no-default-export': 'error',

    'small-import/no-full-import': 'error',
  },
  ignorePatterns: [
    '**/dist',
    '**/node_modules',
    '**/build',
    '**/out',
    '**/.next',
    'playwright.config.ts',
    'vite.config.ts',
    'tailwind.config.js',
    'postcss.config.js',
    '*.d.ts',
  ],
};

const reactLibrary = deepMerge(library, {
  settings: {
    react: { version: 'detect' },
    'import/extensions': ['.ts', '.tsx'],
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/strict',
  ],
  rules: {
    'react/prop-types': 0,
  },
});

const reactUILibrary = deepMerge(reactLibrary, {
  plugins: ['formatjs', '@calm/react-intl'],
  rules: {
    'formatjs/enforce-default-message': ['error', 'literal'],
    'formatjs/enforce-id': [
      'error',
      { idInterpolationPattern: '[sha512:contenthash:base64:6]' },
    ],
    'formatjs/no-multiple-whitespaces': ['error'],
    '@calm/react-intl/missing-formatted-message': [
      2,
      {
        noTrailingWhitespace: true,
        ignoreLinks: true,
        enforceLabels: false,
        enforceImageAlts: false,
        enforceInputProps: false,
      },
    ],
    '@calm/react-intl/missing-attribute': [
      2,
      {
        noTrailingWhitespace: true,
        noSpreadOperator: true,
        requireDescription: false,
        formatDefineMessages: false,
        requireIdAsString: true,
        requireDefaultMessage: true,
      },
    ],
    '@calm/react-intl/missing-values': 2,
  },
});

/** @type {import("eslint").Linter.Config} */
module.exports = {
  configs: {
    library,
    reactLibrary,
    reactUILibrary,
    app: deepMerge(reactUILibrary, {
      extends: ['plugin:playwright/playwright-test'],
    }),
  },
};
