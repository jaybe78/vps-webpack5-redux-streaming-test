module.exports = {
    verbose: true,
  //   globals: {
  //   extensionsToTreatAsEsm: ['.ts', '.js'],
  //   'ts-jest': {
  //     useESM: true,
  //     isolatedModules: true
  //   }
  // },
  // transform: {
  //   '^.+\\.tsx?$': 'babel-jest',
  //   '^.+\\.ts?$': 'babel-jest',
  // },
  preset: 'ts-jest/presets/js-with-ts-esm',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx)?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  collectCoverage: true,
  clearMocks: true,
  coverageDirectory: "coverage",
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    },
    setupFilesAfterEnv: ['<rootDir>/testing/setupJest.js'],
    moduleDirectories: [
        'node_modules',
        'testing',
        'dist'
    ],
    testEnvironment: 'jsdom'
};