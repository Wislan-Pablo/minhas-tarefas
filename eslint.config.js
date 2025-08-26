import js from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'

/** @type {import("eslint").FlatConfig[]} */
export default [
  js.configs.recommended,

  {
    ignores: ['node_modules/**', 'dist/**', 'build/**']
  },

  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser // ⬅ isso ativa todos os globals do navegador
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react,
      'react-hooks': reactHooks,
      prettier
    },
    rules: {
      // TypeScript
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      // React
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',

      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Prettier
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          jsxSingleQuote: true,
          semi: false,
          trailingComma: 'none',
          endOfLine: 'auto'
        }
      ]
    }
  },

  {
    files: ['src/**/*.test.{ts,tsx}'],
    languageOptions: {
      globals: {
        test: true,
        expect: true,
        describe: true,
        beforeEach: true,
        afterEach: true
      }
    }
  },

  {
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
]
