/* eslint-disable */

module.exports = {
    preset: 'ts-jest',
    "testEnvironment": 'jsdom',
    transform: {
        '^.+\\.ts?$': 'ts-jest'
    },
    moduleNameMapper: {
        "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/mocks/fileMock.js",
    },
    moduleDirectories: ['node_modules', 'src'],
    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
    coverageDirectory: 'coverage',
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    // setupFilesAfterEnv: ['<rootDir>/jest-setup.ts']
};
