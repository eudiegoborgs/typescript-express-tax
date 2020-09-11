module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  "collectCoverageFrom": [
    "**/*.ts",
    "!**/node_modules/**",
    "!**/infrastructure/**",
    "!**/vendor/**",
    "!src/index.ts"
  ],
  coverageDirectory: 'coverage-report',
  testMatch: [ "**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)" ]
};