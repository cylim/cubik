module.exports = 
{
  // Configuration for JavaScript files
  "extends": [
    "airbnb-base",
    "next/core-web-vitals", // Needed to avoid warning in next.js build: 'The Next.js plugin was not detected in your ESLint configuration'
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "endOfLine": "auto"
      }
    ]
  },
  "overrides": [
    // Configuration for TypeScript files
    {
      "files": ["**/*.ts", "**/*.tsx"],
      "plugins": [
        "@typescript-eslint",
        "unused-imports",
      ],
      "extends": [
        "airbnb-typescript",
        "next/core-web-vitals",
        "plugin:prettier/recommended"
      ],
      "parserOptions": {
        "project": "./tsconfig.json"
      },
      "rules": {
        "prettier/prettier": [
          "error",
          {
            "singleQuote": true,
            "endOfLine": "auto"
          }
        ],
        "import/no-extraneous-dependencies": "off", // Allow import devDependencies
        "react/destructuring-assignment": "off", // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
        "react/require-default-props": "off", // Allow non-defined react props as undefined
        "react/jsx-props-no-spreading": "off", // _app.tsx uses spread operator and also, react-hook-form
        "react-hooks/exhaustive-deps": "off", // Incorrectly report needed dependency with Next.js router
        "@next/next/no-img-element": "off", // We currently not using next/image because it isn't supported with SSG mode
        "@typescript-eslint/comma-dangle": "off", // Avoid conflict rule between Eslint and Prettier
        "import/prefer-default-export": "off", // Named export is easier to refactor automatically
        "@typescript-eslint/no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
          "error",
          { "argsIgnorePattern": "^_" }
        ],
      }
    },
  
   
  ]
}

