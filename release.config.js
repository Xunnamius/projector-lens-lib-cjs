const SHOULD_UPDATE_CHANGELOG = process.env.SHOULD_UPDATE_CHANGELOG === 'true';

const options = require('./.changelogrc.js');
const { changelogTitle, parserOpts, writerOpts } = options;

module.exports = {
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
        // !   - .changelogrc.js
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
    ...(SHOULD_UPDATE_CHANGELOG
      ? [
          [
            '@semantic-release/exec',
            {
              prepareCmd: 'CHANGELOG_SKIP_TITLE=true npm run build-changelog'
            }
          ],
          ['@semantic-release/changelog', { changelogTitle }],
          [
            '@semantic-release/exec',
            {
              prepareCmd: 'npx remark -o --use reference-links CHANGELOG.md'
            }
          ],
          [
            '@semantic-release/exec',
            {
              prepareCmd: 'npx prettier --write CHANGELOG.md'
            }
          ]
        ]
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
        message: 'release: ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      }
    ],
    '@semantic-release/github'
  ]
};
