module.exports = {
  env: {
    node: true,
  },
  extends: [
    // 'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
    'plugin:vue-scoped-css/vue3-recommended'
  ],
  rules: {
    'semi': 1,
    'no-console': 'warn',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 4
      },
      'multiline': {
        'max': 1
      }
    }],
    'vue/script-indent': ['error', 2, {
      'baseIndent': 1,
    }],
  }
};
