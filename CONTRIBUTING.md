# Contributing

Hi there! First off, we're thrilled 🤩 you want contribute to this project!

First time contributor to a GitHub project? If you could use some help getting
started, [take a look at this quick and easy guide][1]. 💜

## Submitting a Pull Request (PR)

> Be aware: all contributions to this project, regardless of committer, origin,
> or context and immediately upon push to this repository, are [released][2] in
> accordance with [this project's license][3].

> See also: [CODE_OF_CONDUCT.md][4]

This repository uses a [fully automated][5] [continuous linting][6] (CL),
[integration testing][7] (CI), and [deployment][7] (CD)
[semantic-release][8]-based pipeline for integrating PRs and publishing
releases. The nice thing about a fully automated CL/CI/CD pipeline is that
anyone anywhere can make a contribution quickly and with minimal tedium all
around!

The ideal contributor flow is as follows:

1.  [Fork][9] this repository and [clone it locally][10]

2.  Configure and install dependencies: `npm ci`

    - You use `npm ci` here instead of `npm install` to [prevent unnecessary
      updates to `package.json` and `package-lock.json`][40], but if it makes
      more sense to use `npm install` feel free to use that instead

    - If `.env.example` exists, consider copying it to `.env` and configuring
      sensible defaults

3.  Before making any changes, ensure all unit tests are passing: `npm run test`

4.  _(optional but recommended)_ Create a new branch, usually off `main`: e.g.
    `git checkout -b contrib-feature-1`

5.  Make your changes and commit. Thanks to CL, your work will be checked as you
    commit it; any problems will abort the commit attempt

6.  Push your commits to your fork and, when you're ready, [_fearlessly_ submit
    your PR][11]! Your changes will be tested in our CI pipeline

7.  Pat your self on the back! Your hard work is well on its way to being
    reviewed and, if everything looks good, merged and released 🚀

Additionally, there are a few things you can do to increase the likelihood your
PR passes review:

- **Do** [open an issue][12] and discuss your proposed changes (to prevent
  wasting your valuable time, e.g. _maybe we're already working on a fix!_), and
  [search][13] to see if there are any existing issues related to your concerns
- **Do** practice [atomic committing][14]
- **Do not** reduce code coverage ([codecov][15] checks are performed during CI)
- **Do** [follow convention][16] when coming up with your commit messages
- **Do not** circumvent CL, i.e. automated pre-commit linting, formatting, and
  unit testing
- **Do** ensure `README.md` and other documentation is kept consistent with your
  changes
- **Do not** create a PR to introduce [_purely_ cosmetic commits][17]
  - Code de-duplication and other potential optimizations we **do not** consider
    _purely_ cosmetic 🙂
- **Do** keep your PR as narrow and focused as possible
  - If you ran `npm install` instead of `npm ci` and it updated `package.json`
    or `package-lock.json` and those updates have nothing to do with your PR
    (e.g. random nested deps were updated), **do not** stage changes to those
    files
  - If there are multiple related changes to be made but (1) they do not
    immediately depend on one another or (2) one implements extended/alternative
    functionality based on the other, consider submitting them as separate PRs
    instead 👍🏿

---

At this point, you're ready to create your PR and ✨ contribute ✨. What follows
is a description of this project's automated [CL][6]/[CI/CD][7] pipeline and NPM
scripts; **this is optional reading for external collaborators.** You're done!

---

## The Build-Test-Deploy Pipeline

Development in this repository adheres to [Trunk Based Development][18]
principles, specifically leveraging [_short-lived feature branches_][19] (SLFB)
and [CL][6]/[CI/CD][7]. Broadly speaking, this pipeline consists of three
"sub-pipelines" put together front to back:

- First, the so-called "Continuous Linting" pipeline, which automatically runs
  formatting, linting, and unit testing locally on the developer's machine
  _before every commit_. This [tightens the developer feedback loop][20] and
  [saves money][21].

- Once one or more commits are pushed to remote, the [Continuous
  Integration][22] (CI) pipeline runs next, which runs unit tests, project-wide
  integration tests, and project-wide linting concurrently upon every triggering
  event (below).

- Finally, if the CI pipeline terminates successfully (and other conditions are
  met), the [Continuous Deployment][23] (CD) pipeline runs. It builds, formats,
  versions, and ships to production on every commit. Production releases only
  occur on the addition of features, fixes, build system changes, or breaking
  changes.

These pipelines are situated one after the other such that the CD pipeline
always fails to publish when the CI pipeline check fails. Further, the CL
pipeline will reject local commits that fail to pass unit testing before they
even reach the remote CI pipeline.

### Pipeline Structure

- `main` is the only permanent branch, all other branches are automatically
  deleted after being merged into `main`
  - The term "merged" as used here and elsewhere in this document connotes a
    [non-ff merge][41] operation. Note that [ff merge][41], [rebase][24], and
    [squash][42] operations can be used as well **except when merging between
    release branches (like `main` and `canary`); [only non-ff merge operations
    should be used to merge between release branches][43]; any other operation
    (_[including force pushing][25]_) risks damaging `semantic-release`'s
    version tracking metadata**!
  - Technically, there are also [maintenance branches][26], which are
    semi-permanent
  - For NPM package projects, this also means `latest` is the only permanent
    [dist-tag][27]
- Changes are committed directly to `main`, to a SLFB that is eventually merged
  into `main`, or through a PR that is eventually merged into `main` from an
  external repository
- `canary` is a special SLFB used to publish commits on the canary release
  channel before before they're merged into `main` (useful to combine multiple
  features as a single testable release)
  - For projects that are deployed (e.g. Vercel, web push, etc), `canary` may be
    used as a permanent preview branch in addition to the permanent `main`
    branch
- Pushing a commit to any branch, opening a PR against `main`/`canary`, or
  synchronizing a PR made against `main`/`canary` will trigger the CI pipeline
- Pushing a commit directly to `main` or `canary` will trigger the CI pipeline
  and, if all tests pass, also trigger the [semantic-release][28]-based CD
  pipeline where:
  - Commits pushed to `main` are released on the [default release channel][29]
  - Commits pushed to `canary` are released on the [prerelease channel][30]
  - Commits pushed to `N.x`/`N.x.x` and `N.N.x` branches are released on their
    respective [maintenance channels][26]
  - Commits pushed to other release branches will also generate a release
    depending on [custom configuration][31]
  - Commits pushed to branches that aren't the above will never cause the CD
    pipeline to generate a release even if all tests pass
- Force pushing to `main` and `canary` will always fail (unless temporarily
  allowed)
- PRs only trigger the CI pipeline and _never_ the CD pipeline
- The CD pipeline never runs in forks of this repository, even when GitHub
  Actions are explicitly enabled (this can be overridden)
- All tags created through this pipeline are annotated and automatically signed

### Pipeline Events

The CI/CD pipeline is triggered by two [events][32]:

- `push` events that:
  - Are of non-tag refs (pushed tags are ignored by CI/CD)
  - Are of refs with names not starting with `dependabot/`, `snyk-`, or `no-ci/`
- `pull_request` events that:
  - Are of type `synchronize` or `opened`
  - Compare against branches `main` or `canary`

> For NPM packages, the `cleanup` workflow prunes [dist-tags][27] associated
> with deleted branches and is triggered by the `delete` event.

> The units that make up the pipeline can usually be triggered manually. For
> workflows, manual invocations are treated as `push`/`delete` events.

This is further described by the following flow chart of events:

    pushed `main` ==> [run CI] ==> tested ==> [run CD if CI passed] ==> released vx.y.z
    pushed `canary` ==> [run CI] ==> tested ==> [run CD if CI passed] ==> released vx.y.z-canary.N
    pushed any other SLFB* ==> [run CI] ==> tested
    PR opened against `main`/`canary` ==> [run CI] ==> tested
    PR synchronized against `main`/`canary` ==> [run CI] ==> tested

<small>\* Excluding branches with names starting with `dependabot/`, `snyk-`, or
`no-ci/`</small>

When the CI/CD pipeline is triggered, jobs are executed according to the
following chronology:

    gather metadata ==> [CI] security audit
                        [CI] linters
                        [CI] unit tests
                        [CI] integration tests
                        [CD] install, build, format, sort ==> [CD] release

Jobs in the same column are executed concurrently. A job failing in one column
prevents the pipeline from proceeding to the next column.

This pipeline supports four suites of integration tests: _node_, _externals_,
_browser_, and _webpack_. The presence of these test suites is picked up by
`grep`-ing the output of `npm run list-tasks` to search for the presence of the
script keys `test-integration-node`, `test-integration-externals`,
`test-integration-browser`, or `test-integration-webpack` respectively.

This pipeline also supports an optional documentation build step via the
`build-docs` key. A warning will be generated for projects that lack this key.
Similarly, the pipeline will fail if there is a `build-externals` key without a
`test-integration-externals` key or vice-versa.

Note that internal PRs to `main`/`canary` made from pushing to internal branches
**whose names do not begin with `no-ci/`** will trigger two CI runs: one on the
`push` event generated by pushing to said branch and the other on the subsequent
`pull_request` event when the PR is opened (type: `opened`) or its merge commit
is updated (type: `synchronize`). If this is a problem (i.e. wasting money),
prepend `no-ci/` to the internal branch name or transition to a _clone-and-pull_
workflow instead of _branch-and-pull_.

### Pipeline Commands

There are several commands that can affect the behavior of the pipeline. To use
them, include them as part of the top commit's message when pushing to remote.
When a single push consists of multiple commits, only the very top commit's
message is parsed for commands.

> Currently, there is only a single supported pipeline command: the ability to
> skip running the CI/CD pipeline for a given commit

| Command     | Alias(es)                                     | Description                           | Usage Example                              |
| ----------- | --------------------------------------------- | ------------------------------------- | ------------------------------------------ |
| `[skip ci]` | `[ci skip]`, `[skip github]`, `[github skip]` | Skip all GitHub-based CI/CD workflows | `git commit -m 'release: 6.3.5 [skip ci]'` |

## NPM Scripts

This project ships with several [NPM scripts][33]. Use `npm run list-tasks` to
see which of the following scripts are available for this project.

> Using these scripts requires a linux-like development environment. None of the
> scripts are likely to work on non-POSIX environments. If you're on Windows,
> use [WSL][34].

### Developing

- `npm run dev` to start a development server or instance
- `npm run lint` to run a project-wide type check (handled by CL/CI)
- `npm run test` (or `npm test`, `npm run test-unit`) to run the unit tests
  (handled by CL/CI)
  - Also [gathers test coverage data][35] as HTML files (under `coverage/`)
  - Can also run `npm run test-integration` to run all the integration tests
- `npm run test-integration-node` to run integration tests on the last three LTS
  Node versions (handled by CI)
- `npm run test-integration-browser` to run browser integration tests with
  [puppeteer][36] (handled by CI)
- `npm run test-integration-webpack` to run tests verifying the distributable
  can be bundled with Webpack 4 and 5 (as ESM, CJS, or both) (handled by CI)
- `npm run test-integration-externals` to run tests on compiled external
  executables (under `external-scripts/bin/`) (handled by CI)

#### Other Development Scripts

- `npm run test-repeat` to run the entire test suite 100 times
  - Good for spotting bad async code and heisenbugs
  - Uses `__test-repeat` NPM script under the hood
- `npm run generate` to transpile config files (under `config/`) from scratch
- `npm run regenerate` to quickly re-transpile config files (under `config/`)
- `npm run postinstall` to (re-)install [Husky Git hooks][37] if not in a CI
  environment (handled by NPM)

### Building and Deploying

- `npm run build` (alias: `npm run build-dist`) to compile `src/` into `dist/`
  (or `build/`), which is what ships to production (handled by CI/CD)
- `npm run format` to run source formatting over the codebase (handled by
  CL/CI/CD)
- `npm run start` to deploy a _local production mode_ instance
- `npm run deploy` to deploy to production (bring your own auth tokens) (handled
  by CD)

#### Other Build Scripts

- `npm run clean` to delete all build process artifacts (except `node_modules/`)
- `npm run build-changelog` to re-build the changelog (handled by CI/CD)
  - You can run this as `CHANGELOG_SKIP_TITLE=true npm run build-changelog` to
    skip prepending the header
- `npm run build-docs` to re-build the documentation (handled by CI/CD)
- `npm run build-externals` to compile `external-scripts/` into
  `external-scripts/bin/`
- `npm run build-stats` to gather statistics about Webpack (look for
  `bundle-stats.json`)

### NPX Scripts

> These commands might be installed as a project dependency but are expected to
> be run using [`npx X`][38] instead of `npm run X` regardless.

- `npx npm-force-resolutions` to forcefully patch security audit problems
- `npx semantic-release -d` to run the CD pipeline locally (in [dry-run
  mode][39])

[1]: https://www.dataschool.io/how-to-contribute-on-github
[2]:
  https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license
[3]: LICENSE
[4]: /.github/CODE_OF_CONDUCT.md
[5]: https://github.com/features/actions
[6]: https://github.com/Xunnamius/workflow-playground/tree/main/.husky
[7]: .github/workflows/build-test-deploy.yml
[8]: https://github.com/semantic-release/semantic-release#readme
[9]: https://github.com/Xunnamius/workflow-playground/fork
[10]:
  https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository
[11]: https://github.com/Xunnamius/workflow-playground/compare
[12]: https://github.com/Xunnamius/workflow-playground/issues/new/choose
[13]: https://github.com/Xunnamius/workflow-playground/issues?q=
[14]: https://www.codewithjason.com/atomic-commits-testing/
[15]: https://about.codecov.io/
[16]: https://www.conventionalcommits.org/en/v1.0.0/#summary
[17]: https://github.com/rails/rails/pull/13771#issuecomment-32746700
[18]: https://trunkbaseddevelopment.com/
[19]: https://trunkbaseddevelopment.com/#scaled-trunk-based-development
[20]:
  https://blog.nelhage.com/post/testing-and-feedback-loops/#invest-in-regression-testing
[21]: https://github.com/pricing
[22]: https://en.wikipedia.org/wiki/Continuous_integration
[23]: https://en.wikipedia.org/wiki/Continuous_deployment
[24]: https://git-scm.com/docs/git-rebase
[25]:
  https://semantic-release.gitbook.io/semantic-release/support/troubleshooting#release-not-found-release-branch-after-git-push-force
[26]:
  https://semantic-release.gitbook.io/semantic-release/usage/workflow-configuration#maintenance-branches
[27]: https://docs.npmjs.com/cli/v6/commands/npm-dist-tag#purpose
[28]: https://www.npmjs.com/package/semantic-release
[29]:
  https://semantic-release.gitbook.io/semantic-release/usage/workflow-configuration#release-branches
[30]:
  https://semantic-release.gitbook.io/semantic-release/usage/workflow-configuration#pre-release-branches
[31]: release.config.js
[32]:
  https://docs.github.com/en/free-pro-team@latest/actions/reference/events-that-trigger-workflows
[33]: https://docs.npmjs.com/cli/v6/commands/npm-run-script
[34]: https://docs.microsoft.com/en-us/windows/wsl/install-win10
[35]: https://jestjs.io/docs/en/cli.html#--coverageboolean
[36]: https://github.com/puppeteer/puppeteer
[37]: https://github.com/typicode/husky
[38]: https://www.npmjs.com/package/npx
[39]:
  https://semantic-release.gitbook.io/semantic-release/usage/configuration#dryrun
[40]: https://docs.npmjs.com/cli/v6/commands/npm-ci
[41]: https://git-scm.com/docs/git-merge#Documentation/git-merge.txt---no-ff
[42]: https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History#_squashing
[43]:
  https://github.com/semantic-release/git#merging-between-semantic-release-branches
