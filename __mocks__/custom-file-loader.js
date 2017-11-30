// https://facebook.github.io/jest/docs/webpack.html#handling-static-assets
// fileTransformer.js
module.exports = {
  process (src, filename) {
    return 'module.exports = ' + JSON.stringify(filename) + ';';
  },
};
