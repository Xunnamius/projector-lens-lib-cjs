# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Conventional Commits](https://conventionalcommits.org),
and this project adheres to [Semantic Versioning](https://semver.org).

# [4.0.0](https://github.com/Xunnamius/workflow-playground/compare/v3.0.1...v4.0.0) (2020-12-29)

### Bug Fixes

- **.changelogrc.js:** remove BC capitalization and sentence-case code
  ([02662fc](https://github.com/Xunnamius/workflow-playground/commit/02662fcac7c02ac3f5a32dba750e00d23d6c88f2))

### chore

- update comment language
  ([5a2aef4](https://github.com/Xunnamius/workflow-playground/commit/5a2aef4cebc6ed136fa3fb5015f38f47de8ce781))

### BREAKING CHANGES

- dummy BC 1
- dummy BC 2
- dummy BCs 3, 4, and 5

## [3.0.1](https://github.com/Xunnamius/workflow-playground/compare/v3.0.0...v3.0.1) (2020-12-28)

### Bug Fixes

- **.github:** update ci committer name and email to xunn-bot
  ([b151491](https://github.com/Xunnamius/workflow-playground/commit/b15149139462980707fc8ec6d7d67414ac207e6e))
- **package.json:** update typedoc to latest beta and fix npmbd
  ([783ba76](https://github.com/Xunnamius/workflow-playground/commit/783ba76db816b0cc391450d442c708420203c46c))

### Build System

- **package.json:** update deps
  ([a876517](https://github.com/Xunnamius/workflow-playground/commit/a876517a6ea8b339e8c0eca9f7763bcc85919f87))

# [3.0.0](https://github.com/Xunnamius/workflow-playground/compare/v2.3.4...v3.0.0) (2020-12-07)

# 3.0.0-canary.7 (2020-12-07)

### Build System

- **package-lock.json:** fix syntax error
  ([4fd2952](https://github.com/Xunnamius/workflow-playground/commit/4fd2952e78b5cfda17a84a538bcc382d06621926))

# 3.0.0-canary.6 (2020-12-07)

### Bug Fixes

- **.github/workflows:** fix syntax: "no-ci/\*\*"
  ([b060d3e](https://github.com/Xunnamius/workflow-playground/commit/b060d3ec78744b72bd53450ecd1664110cdebda8))

### Build System

- **.github/workflows:** build system now ignores branches with names that begin
  with "no-ci/"
  ([3a4bdff](https://github.com/Xunnamius/workflow-playground/commit/3a4bdff03f0d8ea450f53aebceb33525801b3c34))

# 3.0.0-canary.5 (2020-12-07)

### Build System

- **.github/workflows:** workflow no longer triggered on tag push,
  dependabot/snyk push
  ([1096e6f](https://github.com/Xunnamius/workflow-playground/commit/1096e6fbfff5fd399c2f1af5fe2b6496c5ca3cfe))

# 3.0.0-canary.4 (2020-12-06)

### Build System

- **package.json:** add semver devdep
  ([4a50ecd](https://github.com/Xunnamius/workflow-playground/commit/4a50ecd7eb03eafebc2412de7a556d319c39bc0e))

# 3.0.0-canary.3 (2020-12-06)

### debug

- update semantic-release to Xunnamius/semantic-release#contrib-holistic
  ([446e961](https://github.com/Xunnamius/workflow-playground/commit/446e961cee1326be7db4085f118447ac30f15078))

### BREAKING CHANGES

- another simulated breaking change!

It works a little like this and that and some of this

- and a second breaking change too

# 3.0.0-canary.2 (2020-12-05)

### Bug Fixes

- **config:** rename changelog.config.js to .changelogrc.js
  ([d5dfc50](https://github.com/Xunnamius/workflow-playground/commit/d5dfc506c9d68a0f299559b5e76c92630c9edf0a))
- **package.json:** use @xunnamius/semantic-release
  ([0447d59](https://github.com/Xunnamius/workflow-playground/commit/0447d5959113f033e2ed5644efdb4c80c4fe5085))

### BREAKING CHANGES

- **config:** breaking change 1
- **config:** breaking change 2
- **config:** breaking change 3

Ack: Tre Signed: Yup!

# 3.0.0-canary.1 (2020-12-03)

### Features

- added mult function
  ([e537358](https://github.com/Xunnamius/workflow-playground/commit/e537358218a8abcc97008f5460b37a1949dd0681))

### BREAKING CHANGES

- simulated breaking change

This is a simulated breaking change.

## [2.3.4](https://github.com/Xunnamius/workflow-playground/compare/v2.3.3...v2.3.4) (2020-12-03)

### Build System

- **commitlint:** add debug type to type-enum
  ([10c71bf](https://github.com/Xunnamius/workflow-playground/commit/10c71bf50522ae3902f84cf6171b9fce4d1470f4))
- **config:** fix changelog.config.js bug when subject is undefined
  ([57e0c16](https://github.com/Xunnamius/workflow-playground/commit/57e0c162e73d5850807e9f496df0aa6203834f4c))
- **package.json:** downgrade puppeteer and upgrade other deps
  ([e5d6d42](https://github.com/Xunnamius/workflow-playground/commit/e5d6d42ad230f45b0239bcec671a18a2789ae8f2))
- added .env.example and env-expect
  ([efb29c5](https://github.com/Xunnamius/workflow-playground/commit/efb29c5c991d58ae8aa684159f4db0d3f8f6dbbe))

## [2.3.3](https://github.com/Xunnamius/workflow-playground/compare/v2.3.2...v2.3.3) (2020-11-30)

### Bug Fixes

- **spellcheck:** fix incorrect parsing of global cspell vscode settings
  ([c2789bf](https://github.com/Xunnamius/workflow-playground/commit/c2789bfd8f43bb9fc60316131c4e6d17dd2c1de8))

### Build System

- **release:** fix changelogTitle skip title
  ([1dcdcc1](https://github.com/Xunnamius/workflow-playground/commit/1dcdcc1cac342f9bdca71e49f9cc332e9118932f))

## [2.3.2](https://github.com/Xunnamius/workflow-playground/compare/v2.3.1...v2.3.2) (2020-11-30)

### Build System

- **release:** fix changelogTitle spread bug
  ([598a396](https://github.com/Xunnamius/workflow-playground/commit/598a3966ce1d85c6dcc2945878ebd3ba2c969654))

## [2.3.1](https://github.com/Xunnamius/workflow-playground/compare/v2.3.0...v2.3.1) (2020-11-30)

### Build System

- install @semantic-release/changelog
  ([022603b](https://github.com/Xunnamius/workflow-playground/commit/022603bbe50298a8e7500a77cb77ce5aae4b45f7))
- **release:** fix changelogTitle bug
  ([0d181ea](https://github.com/Xunnamius/workflow-playground/commit/0d181ea032a9f5322137dacf5ee97e6a28acd035))
- **release:** fix SHOULD_UPDATE_CHANGELOG conditional
  ([ec632ad](https://github.com/Xunnamius/workflow-playground/commit/ec632ad52472184edbed16111b4a5b306ae6f7ed))

# [2.3.0](https://github.com/Xunnamius/workflow-playground/compare/v2.2.2...v2.3.0) (2020-11-30)

### Features

- **tooling:** spellcheck now ignores camelCase et al
  ([d921382](https://github.com/Xunnamius/workflow-playground/commit/d9213827f9448a93affcab8ca652e37f24b247b9))

### Performance Improvements

- better faster spellchecking
  ([c44c310](https://github.com/Xunnamius/workflow-playground/commit/c44c310f01d78798c5a13213dafeef5e1f25b25f))

## [2.2.2](https://github.com/Xunnamius/workflow-playground/compare/v2.2.1...v2.2.2) (2020-11-29)

### Build System

- **changelog:** changelog now includes relevant build-type commits
  ([d630264](https://github.com/Xunnamius/workflow-playground/commit/d630264d1ee046ddf943ad287b15f5308ce4c224))

## [2.2.1](https://github.com/Xunnamius/workflow-playground/compare/v2.2.0...v2.2.1) (2020-11-29)

### Build System

- **changelog:** changelog now includes relevant reverts
  ([d4ccacb](https://github.com/Xunnamius/workflow-playground/commit/d4ccacb6533b04c4889b909ecd2bffd4c7b5fa79))

# [2.2.0](https://github.com/Xunnamius/workflow-playground/compare/v2.1.4...v2.2.0) (2020-11-29)

### Bug Fixes

- **actions:** bring metadata collection in-line with new format
  ([a62380b](https://github.com/Xunnamius/workflow-playground/commit/a62380bc4f75c42d74640916fde44fb5811f150d))
- **config:** changelog config honors skip commands, leaves reverts alone
  ([823f8b5](https://github.com/Xunnamius/workflow-playground/commit/823f8b5434e07250b8aefbd9f4a49e0ea05cc9e5))
- **config:** fix broken changelog.config.js structure
  ([bd10f44](https://github.com/Xunnamius/workflow-playground/commit/bd10f4414522a0c6b406adb2fba9d58abee6830e))
- **package.json:** downgrade typedoc and assoc plugins
  ([46db2ee](https://github.com/Xunnamius/workflow-playground/commit/46db2ee7335e9b37cfafce98776171304f0072b7))
- **package.json:** install lint-staged dep and script
  ([f3800e4](https://github.com/Xunnamius/workflow-playground/commit/f3800e471e93308b37eb2668dd5c4bfde9e7b88e))
- **package.json:** install spellcheck dependencies
  ([9a7adb4](https://github.com/Xunnamius/workflow-playground/commit/9a7adb4fb9592328efd3b33bc156b87f89a59ffb))
- **spellcheck:** change "contains" to "includes"
  ([af76dbe](https://github.com/Xunnamius/workflow-playground/commit/af76dbe52921aed27c4cf275875de9c1194561d4))
- **spellcheck:** fix bug where spellcheck reads from wrong message source
  ([69a25ba](https://github.com/Xunnamius/workflow-playground/commit/69a25baa21133345e2a2baffd2f69d0abe950c02))
- **spellcheck:** spellcheck now leverages assorted knowledge
  ([14b86ae](https://github.com/Xunnamius/workflow-playground/commit/14b86ae815f2c24aef82dcad41b0ead036a2f4c4))

### Build System

- install @semantic-release/exec
  ([cc94940](https://github.com/Xunnamius/workflow-playground/commit/cc94940e7b903a141f4e16a4169411c0a45bfb96))
- **config:** fix changelog.config.js operating on individual releases
  ([66adf2f](https://github.com/Xunnamius/workflow-playground/commit/66adf2f3d8ea4bd1813fac4c704ff327ac175855))
- **config:** fix husky pre-commit hook
  ([f0d0032](https://github.com/Xunnamius/workflow-playground/commit/f0d0032fb51ddb98b2f35b229c9d1873c00264f7))
- **config:** generate CHANGELOG.md beautifully
  ([2fa4aa9](https://github.com/Xunnamius/workflow-playground/commit/2fa4aa962a17c6075d28af876f67fe98d0f519b6))
- **config:** retire @semantic-release/changelog
  ([787a281](https://github.com/Xunnamius/workflow-playground/commit/787a28144826609ddffb5e0d1937f314b1039ab6))

### Features

- add build-changelog to npm scripts
  ([8393a87](https://github.com/Xunnamius/workflow-playground/commit/8393a87974cea60087a8d11fc9b0bac0f7ecc6e2))

## [2.1.4](https://github.com/Xunnamius/workflow-playground/compare/v2.1.3...v2.1.4) (2020-11-28)

### Bug Fixes

- **actions:** ensure metadata is gathered properly
  ([31ece1c](https://github.com/Xunnamius/workflow-playground/commit/31ece1cb7d0b91bbc38b1c3eb6366c13d1da7fd2))
- **release:** remove extra newlines during changelogs generation
  ([72acb24](https://github.com/Xunnamius/workflow-playground/commit/72acb24c0c521217fb8eebb5204ddf1591808326))

## [2.1.3](https://github.com/Xunnamius/workflow-playground/compare/v2.1.2...v2.1.3) (2020-11-28)

### Bug Fixes

- **release:** update how changelogs are generated
  ([8ce1760](https://github.com/Xunnamius/workflow-playground/commit/8ce176044293af0ac3b5dd2495d7d0eb580bbede))

## [2.1.2](https://github.com/Xunnamius/workflow-playground/compare/v2.1.1...v2.1.2) (2020-11-28)

### Bug Fixes

- **actions:** remove erroneous build-dist from lint job
  ([2cdd373](https://github.com/Xunnamius/workflow-playground/commit/2cdd373974fdc62480e5681813c09cba98aebddc))
- **actions:** remove erroneous build-dist from test-unit job
  ([fcb2232](https://github.com/Xunnamius/workflow-playground/commit/fcb2232cf6e628f58033a78a0d6aa107f9794589))
- **config:** fix babel.config.js with NODE_LTS
  ([cdf4610](https://github.com/Xunnamius/workflow-playground/commit/cdf46102e7d5b590bd153d2444cb13c24d4170b3))

## [2.1.1](https://github.com/Xunnamius/workflow-playground/compare/v2.1.0...v2.1.1) (2020-11-26)

### Bug Fixes

- **actions:** update gather-metadata with more accurate grep
  ([961ecef](https://github.com/Xunnamius/workflow-playground/commit/961ecef3555403928cf319012ca6bd40093da66e))

# [2.1.0](https://github.com/Xunnamius/workflow-playground/compare/v2.0.1...v2.1.0) (2020-11-25)

### Bug Fixes

- **actions:** gather-metadata steps gather and skip properly
  ([97682f4](https://github.com/Xunnamius/workflow-playground/commit/97682f434acc501e4964c31770472acae0320ad5))
- **actions:** if statements now use | instead of >
  ([24e3739](https://github.com/Xunnamius/workflow-playground/commit/24e373907b23a68627fe535049f603c93bfa1361))
- **actions:** move comments out of multiline statements
  ([874f8d6](https://github.com/Xunnamius/workflow-playground/commit/874f8d65aff5d8e27e14e8d9e4a0e37450713ce0))

### Features

- **actions:** introduce new streamlined workflow job configuration
  ([4bb9d94](https://github.com/Xunnamius/workflow-playground/commit/4bb9d94050d1b8fb164bdf04b1bffa10705aa0a2))

## [2.0.1](https://github.com/Xunnamius/workflow-playground/compare/v2.0.0...v2.0.1) (2020-11-24)

### Bug Fixes

- **actions:** add git author and commiter env vars for semantic-release signed
  commits
  ([f01d16b](https://github.com/Xunnamius/workflow-playground/commit/f01d16b51e444eb801121e81718994b4add18799))
- **dependabot:** ensure dependabot formats GitHub Actions PRs correctly
  ([bcdbd0e](https://github.com/Xunnamius/workflow-playground/commit/bcdbd0e1c23786185cd43b11d9ce18d3498e9ff5))
- add build commits to release rule
  ([3124ab0](https://github.com/Xunnamius/workflow-playground/commit/3124ab0500924ce75f3387d59d5d60ea3e77c827))

# [2.0.0](https://github.com/Xunnamius/workflow-playground/compare/v1.0.15...v2.0.0) (2020-11-24)

### Bug Fixes

- **actions:** add install-dependencies to semantic-release needs
  ([d8cc836](https://github.com/Xunnamius/workflow-playground/commit/d8cc83611de2a595631f42bee0f10591b11bc59c))
- **actions:** deps caching done properly
  ([bbe0416](https://github.com/Xunnamius/workflow-playground/commit/bbe0416125a303076bc3f8a5a96c9669db926b46))
- **actions:** ensure repo is always checked out first
  ([65e5d46](https://github.com/Xunnamius/workflow-playground/commit/65e5d463925b888e08dd69a9da7f4e9f4c9be872))
- **actions:** removed signed pushes
  ([f621f76](https://github.com/Xunnamius/workflow-playground/commit/f621f76895e6a0749f76a6a1abd90253b8694717))
- **package.json:** do not guess error codes
  ([f5428c8](https://github.com/Xunnamius/workflow-playground/commit/f5428c87836552db96d40310c52abd47e593e729))
- **package.json:** ensure machine-friendly run-script syntax
  ([7af5e45](https://github.com/Xunnamius/workflow-playground/commit/7af5e45eb0712da5d80022cedd535a673082d195))
- **package.json:** ensure set +e used in run-scripts when necessary
  ([6d86c0b](https://github.com/Xunnamius/workflow-playground/commit/6d86c0b4ce2218a93f9919a256a89a04af83a9d1))
- **package.json:** precedence error caused bad return value in lint
  ([e8bfbc5](https://github.com/Xunnamius/workflow-playground/commit/e8bfbc590ec8ac73071ae61708c1ca29f2beee36))

### Features

- added diff to take the difference
  ([5e40deb](https://github.com/Xunnamius/workflow-playground/commit/5e40deb020c4bafb103a6bc78fbeecb266a5c983))

### Performance Improvements

- **actions:** better caching
  ([6da0a65](https://github.com/Xunnamius/workflow-playground/commit/6da0a656aba20f022d26335ec33c9c4c4ea37c02))
- **actions:** made test-integration-chrome independent
  ([d489cfa](https://github.com/Xunnamius/workflow-playground/commit/d489cfacd8514a210ec0b570ab3c5a283cf5bc19))
- **actions:** only cache node_modules
  ([57775c9](https://github.com/Xunnamius/workflow-playground/commit/57775c9cc3ffdad94f09b23923785a081e2a08ee))

### BREAKING CHANGES

- switch to semantic-release CI/CD pipeline Moved away from publish-please to a
  fully automated build-test-deploy release cycle based on semantic-release.

# Archived Releases (pre-CI/CD)

- Version 1.0.15
  ([57faa2c](https://github.com/Xunnamius/workflow-playground/commit/57faa2cc448f39383b56db04ec06b1093f5f7bcd))

* Version 1.0.7
  ([5ced626](https://github.com/Xunnamius/workflow-playground/commit/5ced6267d44731337fe5e0a69776dd5642d8a54d))

* Version 1.0.0
  ([df91d82](https://github.com/Xunnamius/workflow-playground/commit/df91d8298edd2d756f732b2245ba086e91197505))
