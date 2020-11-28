// ? See: conventional-changelog/conventional-changelog-writer#options

const sjx = require('shelljs');
const EXCLUDE_SCOPES = ['reverts'];

// ! These also have to be updated in build-test-deploy.yml
const SKIP_COMMANDS = '[skip ci], [ci skip], [skip github], [github skip]'.split(
  ', '
);

sjx.config.silent = true;

// ! XXX: dark magic to synchronously deal with this async package
const wait = sjx.exec(
  `node -e 'require("conventional-changelog-angular").then(o => console.log(o.writerOpts.transform.toString()));'`
);

if (wait.code != 0) throw new Error('failed to acquire angular transformation');

const transform = Function(`"use strict";return (${wait.stdout})`)();
const sentenceCase = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const changelogTitle =
  `# Changelog\n\n` +
  `All notable changes to this project will be documented in this file.\n\n` +
  `The format is based on [Conventional Commits](https://conventionalcommits.org),\n` +
  `and this project adheres to [Semantic Versioning](https://semver.org).`;

module.exports = {
  changelogTitle,
  parserOpts: {
    mergePattern: /^Merge pull request #(\d+) from (.*)$/,
    mergeCorrespondence: ['id', 'source'],
    noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
    // eslint-disable-next-line no-console
    warn: console.warn.bind(console)
  },
  writerOpts: {
    transform: (commit, context) => {
      commit = transform(commit, context);

      // ? Make the scope/subject upper case in the changelog (per my tastes)
      if (commit) {
        if (SKIP_COMMANDS.some((cmd) => commit.subject.includes(cmd)))
          return null;

        commit.scope && !EXCLUDE_SCOPES.includes(commit.scope)
          ? (commit.scope = sentenceCase(commit.scope))
          : (commit.subject = sentenceCase(commit.subject));
      }

      return commit;
    }
  }
};
