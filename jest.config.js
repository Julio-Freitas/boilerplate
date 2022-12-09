module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/*.d.ts',
    '!src/**/mock.ts',
    '!src/**/types.ts',
    '!src/**/*.enum.ts',
    '!src/**/types/*'
  ],
  setupFilesAfterEnv: [
    '<rootDir>/.jest/jest.setup.ts',
    'react-intersection-observer/test-utils'
  ]
};
