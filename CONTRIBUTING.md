# Contributing

Hi there! First off, we're thrilled 🤩 you want contribute to this project!

First time contributor to a GitHub project? If you could use some help getting
started, [take a look at this quick and easy
guide](https://www.dataschool.io/how-to-contribute-on-github). 💜

## Submitting a Pull Request (PR)

> Be aware: all contributions to this project, regardless of committer, origin,
or context and immediately upon push to this repository, are legally
[released](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license)
(or not released) to the public pursuant to [this project's license](LICENSE).

This repository uses a fully automated CI/CD
[semantic-release](https://github.com/semantic-release/semantic-release#readme)
pipeline for vetting PRs and publishing releases. The nice thing about a fully
automated pipeline is that anyone anywhere can make a contribution quickly and
with minimal tedium all around!

The ideal contributor flow is as follows:

1. [Fork](https://github.com/Xunnamius/workflow-playground/fork) this repository
   and [clone it
   locally](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

2. Configure and install dependencies: `npm install`

3. Before making any changes, ensure all unit tests are passing: `npm run test`

4. Create a new branch off main: `git checkout -b contrib`

5. Make your changes and commit. Your work will be checked as you commit it; any
   problems will be brought to your attention

6. Push your commits to your fork and, when you're ready, [*fearlessly* submit
   your PR](https://github.com/Xunnamius/workflow-playground/compare)!

7. Pat your self on the back! Your hard work is well on its way to being
   reviewed and merged 🚀

Additionally, there are a few things you can do to increase the likelihood your
PR passes review:

- **Do** practice [atomic
  committing](https://www.codewithjason.com/atomic-commits-testing/)
- **Do not** reduce code coverage
- **Do** [follow
  convention](https://www.conventionalcommits.org/en/v1.0.0/#summary) when
  coming up with your commit messages
- **Do not** circumvent automated linting, formatting, or unit testing
- **Do** ensure `README.md` and other documentation is kept consistent with your
  changes
- **Do** keep your PR as narrow and focused as possible
    - If there are multiple related changes to be made but they do not
      immediately depend on one another, submit them as separate PRs instead
      👍🏿

## Pipeline Details

TODO

### NPM Scripts

This project ships with several [NPM run
scripts](https://docs.npmjs.com/cli/v6/commands/npm-run-script) to assist DX.
Use `npm run list-tasks` to see which of the following scripts are available for
this project.

> Using these scripts requires a linux-like development environment. None of the
> scripts are likely to work on non-POSIX environments. If you're on Windows,
> use [WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10).

#### Developing

- `npm run dev` to start a development server or instance
- `npm run lint` to run a project-wide type check
- `npm run test` (or `npm test`, `npm run test-unit`) to run the unit tests
    - Also [gathers test coverage
      data](https://jestjs.io/docs/en/cli.html#--coverageboolean) as HTML files
      under `coverage/`
- `npm run test-integration-node` to run integration tests on the last three LTS
  Node versions
- `npm run test-integration-chrome` to run integration tests (usually with
  [puppeteer](https://github.com/puppeteer/puppeteer))
- `npm run test-integration-webpack` to run integration tests verifying the
  distributable can be bundled with Webpack 4 and 5 (as ESM, CJS, or both)
- `npm run test-integration-externals` to run integration tests on compiled
  external executables under `external-scripts/bin/`

##### Other Development Scripts
- `npm run test-repeat` to run the entire test suite 100 times
    - Good for spotting bad async code and heisenbugs
    - Uses `__test-repeat` NPM script under the hood
- `npm run repl` to run a buffered TypeScript-Babel REPL
- `npm run generate` to transpile config files (under `config/`) from scratch
- `npm run regenerate` to quickly re-transpile config files (under `config/`)

#### Building

- `npm run clean` to delete all build process artifacts (except `node_modules/`)
- `npm run build` to compile `src/` into `dist/` (or `build/`), which is what
  makes it into the published package
- `npm run build-docs` to re-build the documentation (usually called
  automatically)

##### Other Build Scripts
- `npm run build-externals` to compile `external-scripts/` into
  `external-scripts/bin/`
- `npm run build-stats` to gather statistics about Webpack (look for
  `bundle-stats.json`)

#### Deploying

- `npm run start` to start a production instance

#### NPX-only Scripts

- `npx sort-package-json` to consistently sort `package.json`
- `npx npm-force-resolutions` to forcefully patch security audit problems
