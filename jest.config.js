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
    '!src/**/types/*',
    '!src/**/stories.tsx',
    '!src/pages/_app.tsx',
    '!src/pages/_document.tsx',
    '!src/pages/index.tsx'
  ],
  setupFilesAfterEnv: [
    '<rootDir>/.jest/jest.setup.ts',
    'react-intersection-observer/test-utils'
  ],
  moduleNameMapper: {
    '^styled-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
  }
};
