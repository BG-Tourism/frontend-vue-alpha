process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    jest: true,
    node: true,
  },
  extends: ['@antfu/eslint-config', 'eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  root: true,
  rules: {
    'no-console': 'off',
    'prettier/prettier': 'off',
  },
}
