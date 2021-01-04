// This webpack config is used to transpile src to dist, compile externals, etc

const debug = require('debug')(`${require('./package.json').name}:webpack-config`);

module.exports = {
  name: 'main',
  mode: 'production',
  target: 'node',
  node: false,

  entry: `${__dirname}/src/index.ts`,

  output: {
    filename: 'index.js',
    path: `${__dirname}/dist/lib`,
    globalObject: 'this',
    libraryTarget: 'umd'
  },

  stats: {
    orphanModules: true,
    providedExports: true,
    usedExports: true
  },

  //externals: [nodeExternals()],
  //externalsPresets: { node: true },

  resolve: { extensions: ['.ts', '.wasm', '.mjs', '.cjs', '.js', '.json'] },
  module: {
    rules: [{ test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/ }]
  },
  optimization: { usedExports: true },
  ignoreWarnings: [/critical dependency:/i]
};

debug('exports = %O', module.exports);
