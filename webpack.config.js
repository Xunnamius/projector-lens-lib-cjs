// This webpack config is used for helping transpile src/ => dist/ as dual
// UMD/CJS2+ES2015

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

  resolve: { extensions: ['.ts', '.wasm', '.mjs', '.cjs', '.js', '.json'] },
  module: {
    rules: [
      { test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  optimization: { usedExports: true },
  ignoreWarnings: [/critical dependency:/i]
};
