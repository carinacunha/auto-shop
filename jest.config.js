/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: './__tests__',
  setupFilesAfterEnv: ['./setup.js'],
  testSequencer: './testSequencer.js',
  modulePathIgnorePatterns: [
    '<rootDir>/utils',
    '<rootDir>/sources',
    '<rootDir>/setup.js',
    '<rootDir>/testSequencer.js',
  ],
  testTimeout: 60000,
};