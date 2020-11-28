// ? See: conventional-changelog/conventional-changelog-writer#options

const changelogTitle =
  `# Changelog\n\n` +
  `All notable changes to this project will be documented in this file.\n\n` +
  `The format is based on [Conventional Commits](https://conventionalcommits.org),\n` +
  `and this project adheres to [Semantic Versioning](https://semver.org).`;

module.exports = {
  changelogTitle,
  mergePattern: /^Merge pull request #(\d+) from (.*)$/,
  mergeCorrespondence: ['id', 'source'],
  noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
  // eslint-disable-next-line no-console
  warn: console.warn.bind(console),
  transform: {
    subject: (s) => s.charAt(0).toUpperCase() + s.slice(1)
  }
};
