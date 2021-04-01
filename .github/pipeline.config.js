// TODO: configure the pipeline if necessary; this entire file is optional
/**
 * This object is used to configure the GitHub Actions that comprise the
 * build-test-deploy pipeline. Each property is optional.
 */
module.exports = {
  // * The name and email used to author commits and interact with GitHub
  // ! This should correspond to the identity associated with the GH_TOKEN secret
  // committer: {
  //   name: 'xunn-bot',
  //   email: 'bot@xunn.io'
  // },
  //
  // * Selectively enable debugger verbose output in the pipeline
  // ? see also: https://www.npmjs.com/package/debug#wildcards
  // debug: '@xunnamius/dummy-pkg-1:*',
  //
  // * The version of node to load into each job. Must NOT be quoted!
  // nodeCurrentVersion: ['15.x'],
  //
  // * Node versions to test against (NODE_CURRENT_VERSION included
  // * automatically). Must be quoted!
  // nodeTestVersions: ['12.x', '14.x'],
  //
  // * Webpack versions to test against. Must be quoted!
  // webpackTestVersions: ['5.x'],
  //
  // * Regular expressions (w/ proper escaping) for skipping CI/CD
  // ! These also have to be updated in .changelogrc.js and cleanup.yml
  // ciSkipRegex: '\\[skip ci\\]|\\[ci skip\\]',
  // cdSkipRegex: '\\[skip cd\\]|\\[cd skip\\]',
  //
  // * Should auto-merge be retried on failure even when the PR appears
  // * unmergeable?
  // ! WARNING: setting this to true might waste Actions minutes and $$$!
  // automergeCanRetry: true,
  //
  // * NPM audit will fail upon encountering problems of at least this severity
  // npmAuditFailLevel: 'high',
  //
  // * Attempt to upload project coverage data to codecov
  // uploadCodeCoverage: true,
  //
  // * How many days GitHub should keep uploaded artifacts around (90 is
  // * GitHub's default)
  // artifactRetentionDays: 90
};
