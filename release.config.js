const SHOULD_UPDATE_CHANGELOG = process.env.SHOULD_UPDATE_CHANGELOG;

// eslint-disable-next-line no-console
console.info(
  `SHOULD_UPDATE_CHANGELOG=${SHOULD_UPDATE_CHANGELOG} (${typeof SHOULD_UPDATE_CHANGELOG})`
);

const parserOpts = require('./changelog.config.js');
const { changelogTitle, ...remainingOpts } = parserOpts;
const { transform: _, ...caParserOpts } = remainingOpts;
const { warn: __, ...rngParserOpts } = remainingOpts;

module.exports = {
  //extends: '@xunnamius/semantic-release-config',
  branches: [
    '+([0-9])?(.{+([0-9]),x}).x',
    'main',
    {
      name: 'canary',
      channel: 'canary',
      prerelease: true
    }
  ],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [{ type: 'build', release: 'patch' }],
        parserOpts: caParserOpts
      }
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'angular',
        parserOpts: rngParserOpts
      }
    ],
    ...(SHOULD_UPDATE_CHANGELOG === 'true'
      ? [['@semantic-release/changelog', { ...changelogTitle }]]
      : []),
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: [
          'package.json',
          'package-lock.json',
          'npm-shrinkwrap.json',
          'CHANGELOG.md',
          'docs'
        ],
        message:
          'release: ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      }
    ],
    '@semantic-release/github'
  ]
};
