module.exports = {
  extends: 'airbnb-base',
  env: {
    jest: true,
  },
  rules: {
    'indent': ['error', 4],
    'max-lines': 'error',
    'guard-for-in': 'off',
    'comma-dangle': [
      'error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      }],
  },
};
