module.exports = {
  root: true, // ESLint will stop looking for configuration files in parent directories.
  env: { browser: true, es2020: true }, //The  env  property is an object that sets the environment for the code to be analyzed. In this case, it sets the environment to be a browser and to use ECMAScript 2020 features. 
  extends: [ // The  extends  property is an array of configurations that extend the basic ESLint rules.
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'], //to ignore when analyzing the code
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'], //hot reloading of React components without losing their state. This allows developers to see the changes they make to their React components in real-time without having to manually refresh the browser.
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/prop-types": 0
  },
}


// VITE TELLS US


// ## Expanding the ESLint configuration

// If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

// - Configure the top-level `parserOptions` property like this:

// ```js
//    parserOptions: {
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//     project: ['./tsconfig.json', './tsconfig.node.json'],
//     tsconfigRootDir: __dirname,
//    },
// ```

// - Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
// - Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
// - Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
