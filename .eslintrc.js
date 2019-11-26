module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  plugins: ['vue', 'import'],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
  // add your custom rules here
  rules: {
    'import/prefer-default-export': 'off',
    // don't require .vue extension when importing
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        vue: 'never',
      },
    ],
    'max-len': 'off',
    'import/no-webpack-loader-syntax': 'off',
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // set default spacing to 4 spaces
    indent: ['error', 2],
    'no-param-reassign': ['error', { props: false }],
    'no-shadow': 'off',
    'vue/require-prop-types': 'off',
    'no-unused-vars': 0,
    'no-console': 0,
    'import/prefer-default-export': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'import/no-dynamic-require': 'off',
    'no-useless-escape': 'off',
    // 'vue/attribute-hyphenation': [2, 'never', { ignore: ['custom-prop'] }]
  },
};
