// This webpack config is used to transpile src to dist, compile externals, etc

const { EnvironmentPlugin, DefinePlugin } = require('webpack');
const { config: populateEnv } = require('dotenv');
const { verifyEnvironment } = require('./env-expect');
const nodeExternals = require('webpack-node-externals');
const debug = require('debug')(`${require('./package.json').name}:webpack-config`);

const dotenv = populateEnv();
debug('saw dotenv result => %O', dotenv);
const env = dotenv.parsed || {};
debug('got env => %O', env);
verifyEnvironment();

const plugins = [
  // ? Load our .env results as the defaults (overridden by process.env)
  new EnvironmentPlugin({ ...env, ...process.env }),
  // ? Create shim for process.env (per my tastes!)
  new DefinePlugin({ 'process.env': '{}' })
];

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

debug('exports = %O', module.exports);
