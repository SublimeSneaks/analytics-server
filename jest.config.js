module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  roots: ['<rootDir>/src/'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/dist/', '/node_modules/', '/node_modules.nosync/'],
}
