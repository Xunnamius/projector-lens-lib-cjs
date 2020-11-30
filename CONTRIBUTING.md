# Contributing

Hi there! First off, we're thrilled 🤩 you want contribute to this project!

First time contributor to a GitHub project? If you could use some help getting started,
[take a look at this quick and easy guide](https://www.dataschool.io/how-to-contribute-on-github).
💜

## Submitting a Pull Request (PR)

> Be aware: all contributions to this project, regardless of committer, origin, or context
> and immediately upon push to this repository, are
> [released](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license)
> pursuant to [this project's license](LICENSE).

> See also: [CODE_OF_CONDUCT.md](.github/CODE_OF_CONDUCT.md)

This repository uses a [fully automated](https://github.com/features/actions) CI/CD
[semantic-release](https://github.com/semantic-release/semantic-release#readme) pipeline
for vetting PRs and publishing releases. The nice thing about a fully automated pipeline
is that anyone anywhere can make a contribution quickly and with minimal tedium all
around!

The ideal contributor flow is as follows:

1. [Fork](https://github.com/Xunnamius/workflow-playground/fork) this repository and
   [clone it locally](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

2. Configure and install dependencies: `npm install`

3. Before making any changes, ensure all unit tests are passing: `npm run test`

4. Create a new branch off main: `git checkout -b contrib`

5. Make your changes and commit. Your work will be checked as you commit it; any problems
   will be brought to your attention via CLI

6. Push your commits to your fork and, when you're ready,
   [_fearlessly_ submit your PR](https://github.com/Xunnamius/workflow-playground/compare)!

7. Pat your self on the back! Your hard work is well on its way to being reviewed and
   merged 🚀

Additionally, there are a few things you can do to increase the likelihood your PR passes
review:

- **Do** practice
  [atomic committing](https://www.codewithjason.com/atomic-commits-testing/)
- **Do not** reduce code coverage
- **Do** [follow convention](https://www.conventionalcommits.org/en/v1.0.0/#summary) when
  coming up with your commit messages
- **Do not** circumvent automated linting, formatting, or unit testing
- **Do** ensure `README.md` and other documentation is kept consistent with your changes
- **Do not** create a PR to introduce
  [_purely_ cosmetic commits](https://github.com/rails/rails/pull/13771#issuecomment-32746700)
  - Code de-duplication and other potential optimizations we **do not** consider _purely_
    cosmetic 🙂
- **Do** keep your PR as narrow and focused as possible
  - If there are multiple related changes to be made but they do not immediately depend on
    one another, submit them as separate PRs instead 👍🏿

---

At this point, you're ready to create your PR and contribute. What follows is a
description of this project's automated
[CI/CD pipeline](.github/workflows/build-test-deploy.yml) and NPM run scripts; **this is
optional reading for external collaborators.**

---

## The Build-Test-Deploy Pipeline

Development in this repository adheres to
[Trunk Based Development](https://trunkbaseddevelopment.com/) principles, specifically
leveraging _short-lived feature branches_ (SLFB). Broadly speaking, this pipeline consists
of two "sub-pipelines" put together front to back:

- First, the
  [Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration) (CI)
  pipeline, which runs unit tests, project-wide integration tests, and project-wide
  linting concurrently upon every triggering event (below).

- If the CI pipeline terminates successfully (and other conditions are met), the
  [Continuous Deployment](https://en.wikipedia.org/wiki/Continuous_deployment) (CD)
  pipeline runs next. It builds, pretties up, versions, and ships to production on every
  commit (production releases occur only when necessary).

These pipelines are situated one after the other such that the CD pipeline always fails to
publish when a CI pipeline check fails.

### Pipeline Structure

- `main` is the only permanent branch, all other branches are automatically deleted after
  being merged into `main`
  - Though the term "merged" is used here and throughout this document, usually branches
    are merged via [rebase](https://git-scm.com/docs/git-rebase) rather than an actual
    `git merge`.
  - Technically, there are also
    [maintenance branches](https://semantic-release.gitbook.io/semantic-release/usage/workflow-configuration#maintenance-branches),
    which are semi-permanent
- Changes are committed directly to `main`, to a SLFB that is eventually merged into
  `main`, or through a PR that is eventually merged into `main` from an external
  repository
- `canary` is a special SLFB used to publish commits on the canary release channel before
  eventually merging `canary` into `main` (useful to combine multiple features as a single
  testable release)
- Pushing a commit to any branch, opening a PR against `main`/`canary`, or synchronizing a
  PR made against `main`/`canary` will trigger the CI pipeline
- Pushing a commit directly to `main` or `canary` will trigger the CI pipeline and, if all
  tests pass, also trigger the
  [semantic-release](https://www.npmjs.com/package/semantic-release)-based CD pipeline
  where:
  - Commits pushed to `main` are released on the
    [default release channel](https://semantic-release.gitbook.io/semantic-release/usage/workflow-configuration#release-branches)
  - Commits pushed to `canary` are released on the
    [prerelease channel](https://semantic-release.gitbook.io/semantic-release/usage/workflow-configuration#pre-release-branches)
  - Commits pushed to `N.x`/`N.N.x` branches are released on their respective
    [maintenance channels](https://semantic-release.gitbook.io/semantic-release/usage/workflow-configuration#maintenance-branches)
  - Commits pushed to branches that aren't the above will not trigger the CD pipeline even
    if all tests pass
- Force pushing to `main` and `canary` will always fail
- PRs only trigger the CI pipeline and _never_ the CD pipeline
- The CD pipeline never runs in forks of this repository, even when GitHub Actions are
  explicitly enabled (this can be overridden)

### Pipeline Events

The CI/CD pipeline is triggered by two
[events](https://docs.github.com/en/free-pro-team@latest/actions/reference/events-that-trigger-workflows):

- `push` events
- `pull_request` events that:
  - Are of type `synchronize` or `opened`
  - Compare against branches `main` or `canary`

```
pushed `main` ==> [run CI] ==> tested ==> [run CD if CI passed] ==> released vx.y.z
pushed `canary` ==> [run CI] ==> tested ==> [run CD if CI passed] ==> released vx.y.z-canary.N
pushed any other SLFB ==> [run CI] ==> tested
PR opened against `main`/`canary` ==> [run CI] ==> tested
PR synchronized against `main`/`canary` ==> [run CI] ==> tested
```

When the CI/CD pipeline is triggered, jobs are executed according to the following
chronology:

```
gather metadata ==> [CI] security audit
                    [CI] linters
                    [CI] unit tests
                    [CI] integration tests
                    [CD] install, build, format, sort ==> [CD] release
```

Jobs in the same column are executed concurrently. A job failing in one column prevents
the pipeline from proceeding to the next column.

This pipeline supports four suites of integration tests: _node_, _externals_, _browser_,
and _webpack_. The presence of these test suites is picked up by `grep`-ing the output of
`npm run list-tasks` to search for the presence of the script keys
`test-integration-node`, `test-integration-externals`, `test-integration-browser`, or
`test-integration-webpack` respectively.

This pipeline also supports an optional documentation build step via the `build-docs` key.
A warning will be generated for projects that lack this key. On the other hand, the
pipeline will fail if there is a `build-externals` key without a
`test-integration-externals` key or vice-versa.

Note that internal PRs to `main`/`canary` (like from dependabot) will sometimes trigger
two CI runs: one on the `push` event when the branch is pushed and the other on the
subsequent `pull_request` event (type: `synchronize`) when the internal PR is opened or
its merge commit is updated. This is expected behavior.

## NPM Scripts

This project ships with several
[NPM run scripts](https://docs.npmjs.com/cli/v6/commands/npm-run-script). Use
`npm run list-tasks` to see which of the following scripts are available for this project.

> Using these scripts requires a linux-like development environment. None of the scripts
> are likely to work on non-POSIX environments. If you're on Windows, use
> [WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10).

### Developing

- `npm run dev` to start a development server or instance
- `npm run lint` to run a project-wide type check
- `npm run test` (or `npm test`, `npm run test-unit`) to run the unit tests
  - Also
    [gathers test coverage data](https://jestjs.io/docs/en/cli.html#--coverageboolean) as
    HTML files (under `coverage/`)
  - Can also run `npm run test-integration` to run all the integration tests
- `npm run test-integration-node` to run integration tests on the last three LTS Node
  versions
- `npm run test-integration-browser` to run browser integration tests with
  [puppeteer](https://github.com/puppeteer/puppeteer)
- `npm run test-integration-webpack` to run tests verifying the distributable can be
  bundled with Webpack 4 and 5 (as ESM, CJS, or both)
- `npm run test-integration-externals` to run tests on compiled external executables
  (under `external-scripts/bin/`)

#### Other Development Scripts

- `npm run test-repeat` to run the entire test suite 100 times
  - Good for spotting bad async code and heisenbugs
  - Uses `__test-repeat` NPM script under the hood
- `npm run repl` to run a buffered TypeScript-Babel REPL
- `npm run generate` to transpile config files (under `config/`) from scratch
- `npm run regenerate` to quickly re-transpile config files (under `config/`)

### Building and Deploying

- `npm run build` (or `npm run build-dist`) to compile `src/` into `dist/` (or `build/`),
  which is what ships to production
- `npm run format` to run a formatter over the codebase
- `npm run start` to deploy a _local_ production instance

#### Other Build Scripts

- `npm run clean` to delete all build process artifacts (except `node_modules/`)
- `npm run build-changelog` to re-build the changelog (handled by pipeline)
  - You can run this as `CHANGELOG_SKIP_TITLE=true npm run build-changelog` to skip prepending the header
- `npm run build-docs` to re-build the documentation (handled by pipeline)
- `npm run build-externals` to compile `external-scripts/` into `external-scripts/bin/`
- `npm run build-stats` to gather statistics about Webpack (look for `bundle-stats.json`)

### NPX Scripts

> These commands might be installed as a project dependency but are expected to be run
> using [`npx X`](https://www.npmjs.com/package/npx) instead of `npm run X` regardless.

- `npx sort-package-json` to consistently sort `package.json`
- `npx npm-force-resolutions` to forcefully patch security audit problems
