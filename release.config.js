module.exports = {
    //extends: '@xunnamius/semantic-release-config',
    branches: [
        'main',
        '+([0-9])?(.{+([0-9]),x}).x',
        {
            name: 'develop',
            channel: 'next',
            prerelease: 'canary',
        }
    ],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        ['@semantic-release/changelog', {
            changelogTitle: `# Changelog\n\n> [See a summary of upcoming changes](${require('./package.json').repository.url}/compare/main...develop)\n\nAll notable changes to this project will be documented in this file.\n\nThe format is based on [Conventional Commits](https://conventionalcommits.org),\nand this project adheres to [Semantic Versioning](https://semver.org).\n\n`,
        }],
        '@semantic-release/npm',
        ['@semantic-release/git', {
            assets: ['package.json', 'package-lock.json', 'npm-shrinkwrap.json', 'CHANGELOG.md', 'docs'],
        }],
        '@semantic-release/github',
    ],
};
