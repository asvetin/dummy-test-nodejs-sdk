module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'project': './tsconfig.json',
    'sourceType': 'module'
  },
  plugins: [
    '@globalid',
  ],
  extends: [
    'plugin:@globalid/node-svc',
    'plugin:@globalid/mocha',
  ],
  ignorePatterns: ['*.pem', '*.enc'],
};
