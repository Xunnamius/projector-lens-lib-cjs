const SHOULD_UPDATE_CHANGELOG = process.env.SHOULD_UPDATE_CHANGELOG === 'true';
const SHOULD_DEPLOY = process.env.SHOULD_DEPLOY === 'true';

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
              prepareCmd: 'remark -o --use reference-links --use gfm CHANGELOG.md'
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
    '@semantic-release/github',
    ...(SHOULD_DEPLOY
      ? [
          '@semantic-release/exec',
          {
            prepareCmd: 'npm run deploy'
          }
        ]
      : [])
  ]
};
