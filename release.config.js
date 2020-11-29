const SHOULD_UPDATE_CHANGELOG = process.env.SHOULD_UPDATE_CHANGELOG;

// eslint-disable-next-line no-console
console.info(
  `SHOULD_UPDATE_CHANGELOG=${SHOULD_UPDATE_CHANGELOG} (${typeof SHOULD_UPDATE_CHANGELOG})`
);

const options = require('./changelog.config.js');
const { changelogTitle, parserOpts, writerOpts } = options;

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
        parserOpts,
        // ! If you change releaseRules, you should also take a look at:
        // !   - dependabot.yml
        // !   - changelog.config.js
        releaseRules: [{ type: 'build', release: 'patch' }]
      }
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'angular',
        parserOpts,
        writerOpts
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
