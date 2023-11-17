module.exports = {
  ...require('@cubik/presets/eslint-server'),
  root: true,
  parserOptions: {
    project: './apps/backend/tsconfig.json',
    sourceType: 'module',
    ecmaVersion: 2020,
  },
};
