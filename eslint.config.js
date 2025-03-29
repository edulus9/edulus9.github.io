import { defineConfig } from '@eslint/config-helpers';
import js from '@eslint/js';
import pluginImport from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
// eslint-disable-next-line import/no-unresolved
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    ignores: ['**/node_modules/**', '**/dist/**'],
    languageOptions: {
      globals: { ...globals.browser, process: true },
    },
    settings: {
      'react': {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          moduleDirectory: ['src', 'node_modules'],
        },
      },
    },
    plugins: {
      js,
      'react-hooks': pluginReactHooks,
      'import': pluginImport,
    },
    extends: [
      tseslint.configs.recommended,
      pluginReact.configs.flat.recommended,
      eslintPluginPrettierRecommended,
      'js/recommended',
    ],
    rules: {
      // React-specific rules
      'react/jsx-uses-react': 'off', // Not needed with React 17+
      'react/react-in-jsx-scope': 'off', // Not needed with React 17+
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/no-unknown-property': 'error',

      // Import sorting & best practices
      'import/order': [
        'error',
        {
          'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'never',
          'alphabetize': { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/no-unresolved': 'error',
      'import/no-duplicates': 'error',
      'semi': ['error', 'always'],

      // TS stuff
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-empty-object-type': 'off',
      'no-empty-pattern': 'off',
    },
  },
]);
