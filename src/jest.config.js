module.exports = {
    roots: ['<rootDir>/src'],
    testRegex: '(/.*\\.test)\\.(ts|tsx|js|jsx?)$',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testEnvironment: "jsdom"
}