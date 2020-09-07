module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:wdio/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'wdio'
  ],
  rules: {
    'semi': 0,
    'yoda': 0,
    'no-console': 0,
    'no-unused-vars': 1,
    'comma-dangle': 0,
    'space-before-function-paren': 0,
    'eol-last': 1,
    'no-mixed-operators': 0,
    'vue/mustache-interpolation-spacing': 1,
    'handle-callback-err': 0,
  }
}
