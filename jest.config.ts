const nextJest = require('next/jest');

const create = nextJest({
  dir: './',
});

const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['<rootDir>/src/**/**.spec.tsx', '<rootDir>/src/**/**.spec.ts'],
};

module.exports = create(config);
