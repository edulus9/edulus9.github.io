import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginImport from "eslint-plugin-import";

export default defineConfig([
  { files: ["**/*.{js,ts,jsx,tsx}"] },
  { files: ["**/*.{js,ts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        node: {
          "extensions": [".js", ".jsx", ".ts", ".tsx"]
        }
      }
    },
    plugins: {
      js,
      "react-hooks": pluginReactHooks,
      import: pluginImport,
    }, extends: ["js/recommended"],
    rules: {
      // React-specific rules
      "react/jsx-uses-react": "off", // Not needed with React 17+
      "react/react-in-jsx-scope": "off", // Not needed with React 17+
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/no-unknown-property": "error",

      // Import sorting & best practices
      "import/order": [
        "error",
        {
          "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
        },
      ],
      "import/no-unresolved": "error",
      "import/no-duplicates": "error",
      "semi": ["error", "always"],

      // TypeScript improvements
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-empty-object-type": "off"
    },
  },
]);
