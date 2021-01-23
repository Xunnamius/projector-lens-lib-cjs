// This webpack config is used to transpile src to dist, compile externals, etc

const { EnvironmentPlugin, DefinePlugin, BannerPlugin } = require('webpack');
const { config: populateEnv } = require('dotenv');
const { verifyEnvironment } = require('./env-expect');
const nodeExternals = require('webpack-node-externals');
const debug = require('debug')(`${require('./package.json').name}:webpack-config`);

const dotenv = populateEnv();
debug('saw dotenv result: %O', dotenv);
const env = dotenv.parsed || {};
debug('saw env: %O', env);
verifyEnvironment();

const plugins = [
  // ? Load our .env results as the defaults (overridden by process.env)
  new EnvironmentPlugin({ ...env, ...process.env }),
  // ? Create shim process.env for undefined vars (per my tastes!)
  new DefinePlugin({ 'process.env': '{}' }),
  // ? Add text to the top of the entry file (if necessary)
  // * ▼ For bundled CLI applications
  //new BannerPlugin({ banner: '#!/usr/bin/env node', raw: true, entryOnly: true })
  // * ▼ For UMD libraries
  new BannerPlugin({
    banner: '"undefined"!=typeof window&&(window.global=window);',
    raw: true,
    entryOnly: true
  })
];

module.exports = {
  name: 'main',
  mode: 'production',
  target: 'node',
  node: false,

  entry: `${__dirname}/src/index.ts`,

  output: {
    filename: 'index.js',
    path: `${__dirname}/dist`,
    // ! ▼ Only required for libraries (CJS2/UMD/etc)
    // ! Note: ESM outputs are handled by Babel ONLY!
    libraryTarget: 'umd',
    // ! ▼ Only required for when libraryTarget is UMD (to help globals work)
    globalObject: 'this'
  },

  stats: {
    orphanModules: true,
    providedExports: true,
    usedExports: true
  },

  externals: [nodeExternals()],
  externalsPresets: { node: true },

  resolve: { extensions: ['.ts', '.wasm', '.mjs', '.cjs', '.js', '.json'] },
  module: {
    rules: [{ test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/ }]
  },
  optimization: { usedExports: true },
  ignoreWarnings: [/critical dependency:/i],
  plugins
};

debug('exports: %O', module.exports);
