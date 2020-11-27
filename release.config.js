const SHOULD_UPDATE_CHANGELOG = process.env.SHOULD_UPDATE_CHANGELOG;
// eslint-disable-next-line no-console
console.info(
  `SHOULD_UPDATE_CHANGELOG=${SHOULD_UPDATE_CHANGELOG} (${typeof SHOULD_UPDATE_CHANGELOG})`
);

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
        releaseRules: [{ type: 'build', release: 'patch' }]
      }
    ],
    '@semantic-release/release-notes-generator',
    ...(SHOULD_UPDATE_CHANGELOG === 'true'
      ? [
          [
            '@semantic-release/changelog',
            {
              changelogTitle: `# Changelog\n\n> [See a summary of upcoming changes](${
                require('./package.json').repository.url
              }/compare/main...develop)\n\nAll notable changes to this project will be documented in this file.\n\nThe format is based on [Conventional Commits](https://conventionalcommits.org),\nand this project adheres to [Semantic Versioning](https://semver.org).\n\n`
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
        message:
          'release: ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      }
    ],
    '@semantic-release/github'
  ]
};
