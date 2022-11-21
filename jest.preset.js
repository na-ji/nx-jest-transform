const nxPreset = require('@nrwl/jest/preset').default;

module.exports = { ...nxPreset, transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$|ky-universal|ky)'] };
