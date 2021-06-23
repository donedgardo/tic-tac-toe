const baseConfig = require('./jest.config')
module.exports = {
  ...baseConfig,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/../../node_modules/jest-css-modules',
  },
  testEnvironment:"jsdom",
  moduleFileExtensions: ['ts', 'js', 'tsx', 'json'],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.tsx',
    '<rootDir>/pages/**/*.tsx',
  ],
};