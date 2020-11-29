// ? See: conventional-changelog GitHub repository

const semverValid = require('semver').valid;
const sjx = require('shelljs');

// ? Commit types that will not be capitalized
// ! Note: uses the post-angular-transform commit types
const NO_CAPITALIZE_TYPES = ['Reverts'];

// ? Commit types whose reversions are added to the changelog (releasers only!)
// ! If you change this, you should also take a look at releaseRules in
// ! release.config.js
const SHOW_REVERSION_TYPES = ['feat', 'fix', 'perf', 'build'];

const changelogTitle =
  `# Changelog\n\n` +
  `All notable changes to this project will be documented in this file.\n\n` +
  `The format is based on [Conventional Commits](https://conventionalcommits.org),\n` +
  `and this project adheres to [Semantic Versioning](https://semver.org).`;

// ? Strings in commit messages that, when found, are skipped
// ! These also have to be updated in build-test-deploy.yml when changed
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

// ? Releases made before this repo adopted semantic-release. They will be
// ? collected together under a single header
const legacyReleases = [];
let shouldGenerate = true;

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
    generateOn: (commit) => {
      const decision =
        shouldGenerate === 'always' ||
        (shouldGenerate && !!semverValid(commit.version));
      shouldGenerate = true;
      return decision;
    },
    transform: (commit, context) => {
      const version = commit.version || null;
      const firstRelease =
        version === context.gitSemverTags.slice(-1)[0].slice(1);

      if (!firstRelease && version && !commit.type) {
        // ? This commit does not have a type, but has a version. It must be a
        // ? legacy release!
        legacyReleases.push(commit);
        commit = null;
        shouldGenerate = false;
      } else if (!firstRelease) {
        commit = transform(commit, context);

        if (commit) {
          // ? Ignore any commits with commands like [skip ci] in them
          if (SKIP_COMMANDS.some((cmd) => commit.subject.includes(cmd)))
            return null;

          if (!NO_CAPITALIZE_TYPES.some((type) => commit.type === type)) {
            // ? Make the scope/subject upper case in the changelog (per my tastes)
            commit.scope
              ? (commit.scope = sentenceCase(commit.scope))
              : (commit.subject = sentenceCase(commit.subject));
          }

          if (commit.type == 'Reverts') {
            // ? Ignore reverts that didn't trigger releases
            if (!SHOW_REVERSION_TYPES.includes(commit.subject)) return null;

            commit.subject = `*${commit.subject}*`;
          }

          commit.notes.forEach((note) => {
            note.text = sentenceCase(note.text.trim());

            // ? If the text has a line break in it, make the first line bold and
            // ? add a period before the line break unless there's a symbol
            // ? already there
            if (/\n/.test(note.text)) {
              const [firstLine, ...remainder] = note.text.split('\n');
              const addPeriod = !firstLine.endsWith('.');

              note.text = `**${firstLine}${
                addPeriod ? '.' : ''
              }**\n${sentenceCase(remainder.join('\n'))}`;
            }
          });
        }
      }

      // ? If this is the commit representing the earliest release (and there
      // ? are legacy releases), use this commit to report collected legacy
      // ? releases
      if (firstRelease) {
        shouldGenerate = 'always';

        const getShortHash = (h) => h.substring(0, 7);
        const shortHash = getShortHash(commit.hash);
        const url = context.repository
          ? `${context.host}/${context.owner}/${context.repository}`
          : context.repoUrl;

        const subject = legacyReleases
          .reverse()
          .map(({ hash, version }) => ({
            url: `[${getShortHash(hash)}](${url}/commit/${hash})`,
            version
          }))
          .reduce(
            (subject, { url, version }) =>
              `Version ${version} (${url})\n\n- ${subject}`,
            `Version ${commit.version}`
          );

        commit = {
          type: null,
          scope: null,
          subject,
          id: null,
          source: null,
          merge: null,
          header: null,
          body: null,
          footer: null,
          notes: [],
          references: [],
          mentions: [],
          revert: null,
          hash: commit.hash,
          shortHash,
          gitTags: null,
          committerDate: 'pre-CI/CD',
          version: 'Archived Releases'
        };
      }

      return commit;
    }
  }
};
