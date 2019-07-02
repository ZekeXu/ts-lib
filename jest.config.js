const path = require('path');

module.exports = {
  "roots": [
    "<rootDir>/__test__"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "moduleNameMapper": {
    '.*\\.(scss|sass|less|css)$': path.join(__dirname, 'config', 'jest-style.ts'),
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': path.join(__dirname, 'config', 'jest-style.ts'),
  },
  collectCoverageFrom: [
    '<rootDir>/__test__/**/*.{ts|tsx}',
  ],
}
