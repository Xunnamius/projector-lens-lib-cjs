# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Conventional Commits][292], and this project adheres to
[Semantic Versioning][293].

## [7.5.18][294] (2021-01-29)

### Build System

- **build-test-deploy.yml:** drop support for webpack 4 ([e7f2bbb][295])
- **cleanup.yml:** fix bug for new package repos ([8d16630][296])

## [7.5.17][1] (2021-01-29)

### Build System

- **babel.config.js:** add plugin-rename-imports ([c59e45c][2])
- **build-test-deploy.yml:** remove externals exception ([3addf11][3])
- **test:** drop support for 10.x ([fb18856][4])
- **test:** standardize imports ([4f23d4e][5])

## [7.5.16][6] (2021-01-23)

### Build System

- **package.json:** nicer destructured vals in docs ([3b81944][7])

## [7.5.15][8] (2021-01-23)

### Build System

- Backport/normalize across packages ([85881f7][9])

## [7.5.14][10] (2021-01-22)

### Build System

- Update debug statement syntax ([107b953][11])

## [7.5.13][12] (2021-01-21)

### Build System

- **.github/workflows/build-test-deploy.yml:** fix peer dependency installation
  ([2dce9c4][13])

## [7.5.12][14] (2021-01-17)

### Build System

- Backport changes from gac ([172fa77][15])

## [7.5.11][16] (2021-01-12)

### Build System

- Rebuild lockfile ([fef7222][17])
- Update babel-plugin-transform-mjs-imports ([16a597d][18])

## [7.5.10][19] (2021-01-12)

### Build System

- Update -browser to -client everywhere ([597d6c5][20])

## [7.5.9][21] (2021-01-10)

### Bug Fixes

- **webpack.config.js:** better process.env support ([25db498][22])

## [7.5.8][23] (2021-01-06)

### Build System

- **webpack.config.js:** process.env shim ([3973279][24])

## [7.5.7][25] (2021-01-06)

### Build System

- **.github/workflows/post-release-check.yml:** fix post-release-check?2
  ([51123db][26])

## [7.5.6][27] (2021-01-06)

### Build System

- **.github/workflows/post-release-check.yml:** fix post-release-check?2
  ([31f61f5][28])

## [7.5.5][29] (2021-01-06)

### Build System

- **.github/workflows/post-release-check.yml:** fix post-release-check?
  ([7212561][30])

## [7.5.4][31] (2021-01-06)

### Build System

- **.github/workflows/post-release-check.yml:** add new post-release-check
  ([ed31f79][32])

## [7.5.3][33] (2021-01-05)

### Build System

- **package.json:** backported updates ([8a051d1][34])

## [7.5.2][35] (2021-01-05)

### Build System

- **package.json:** backported updates ([2cf6e46][36])

## [7.5.1][37] (2021-01-05)

### Bug Fixes

- **env-expect.js:** use syntax for node 10 ([cb77d20][38])
- **package.json:** return browser test ([6c1c4d4][39])

### Build System

- **.github:** add INCLUDE_EXTERNALS ([c755631][40])
- **build-test-deploy.yml:** remove codecov upload for externals integration
  tests ([3fdd509][41])
- **package.json:** backports from the wild ([eda277e][42])
- **webpack.config.js:** add env-expect ([0f401ff][43])

# [7.5.0][44] (2021-01-05)

### Features

- **package-lock.json:** add unique-filename ([77c033f][45])

## [7.4.5][46] (2021-01-05)

### Bug Fixes

- **package.json:** order of items in exports objects are VERY IMPORTANT
  ([677b4ce][47])

## [7.4.4][48] (2021-01-04)

### Build System

- **.github/workflows/build-test-deploy.yml:** move webpack install
  responsibility to integration ([5c8fefa][49])

## [7.4.3][50] (2021-01-04)

### Build System

- **.github/workflows/build-test-deploy.yml:** add debug output to npm ci
  ([09304d7][51])
- **.github/workflows/build-test-deploy.yml:** fix debug output ([c247c7a][52])
- **.github/workflows/build-test-deploy.yml:** fix debug output ([6eb7d41][53])
- **.github/workflows/build-test-deploy.yml:** fix debug output (normalize node
  support) ([0528db6][54])

## [7.4.2][55] (2021-01-04)

### Build System

- **.github/workflows/build-test-deploy.yml:** do not run npm install when stdin
  is empty ([2842a31][56])
- **package.json:** revert "test: peer dep install" ([4c174fe][57])
- **package.json:** test: peer dep install ([6c00005][58])

## [7.4.1][59] (2021-01-04)

### Bug Fixes

- **env-expect.js:** improve RegExp support; better debugging experience
  ([aff191d][60])

### Build System

- **.github/workflows/build-test-deploy.yml:** add improved npm install step
  ([e9b9e49][61])

# [7.4.0][62] (2021-01-04)

### Features

- **.github:** add codecov to externals; add flags to codecov ([e47160b][63])

# [7.3.0][64] (2021-01-04)

### Bug Fixes

- **env-expect.js:** simple RegExp names no longer error ([a576d0b][65])

### Build System

- **package.json:** better lint output ([0dc7c4e][66])

### Features

- **.github:** backport env matrix hint ([c01b325][67])
- **readme.md:** add NPM7 warning ([24f0888][68])

## [7.2.3][69] (2021-01-04)

### Build System

- Updates back-ported from package migration ([7869420][70])

## [7.2.2][71] (2021-01-03)

### Bug Fixes

- Add remark frontmatter support ([a8cd378][72])

## [7.2.1][73] (2021-01-03)

### Bug Fixes

- **templates:** fix strange issue template problems ([73edb9a][74])

# [7.2.0][75] (2021-01-03)

### Bug Fixes

- **changelog.md:** conclude tests _breaks champagne glass_ ([864253c][76])
- **workflows:** actually fix should-skip determination algo ([bf8c76b][77])
- **workflows:** fix should-skip determination algo ([f7d1256][78])

# [7.1.0][79] (2021-01-03)

### Bug Fixes

- **.github:** add set +e to should-skip ([27c9750][80])
- **readme.md:** complete skip test ([67264ed][81])
- **workflows:** replace should-skip determination algo ([cd6236a][82])

# [7.0.0][83] (2021-01-03)

### Features

- **changelog.md:** add skip cd/cd skip pipeline commands ([5765c02][84])

### BREAKING CHANGES

- **changelog.md:** **skip github/github skip options were removed**

## [6.7.3][85] (2021-01-03)

### Bug Fixes

- **.changelogrc.js:** show reverts in changelog ([ec26302][86])

### Reverts

- _"chore(changelog.md): update pipeline usage bullets"_ ([6e9fb73][87])

## [6.7.2][88] (2021-01-03)

### Reverts

- _"chore(readme.md): debug chore"_ ([38bfb77][89])
- _"debug(readme.md): debug debug"_ ([aff005d][90])

## [6.7.1][91] (2021-01-02)

### Bug Fixes

- **.changelogrc.js:** exclude pre-releases ([c24773e][92])
- **.changelogrc.js:** fix bad type bug ([ff94fe1][93])
- **.changelogrc.js:** several writer glitches fixed ([717ffdb][94])

### Build System

- **package.json:** better build-changelog ([f2e971e][95])

# [6.7.0][96] (2021-01-02)

### Features

- **.changelogrc.js:** reintroduced selective capitalization ([1fdcb9c][97])

# [6.6.0][98] (2021-01-02)

### Bug Fixes

- **.changelogrc.js:** correct improper array access ([0cb2645][99])

### Build System

- **.changelogrc.js:** fix revision filtering during generation ([ac06b33][100])
- **.changelogrc.js:** fix spread bug ([c6a3cd6][101])

### Features

- **.changelogrc.js:** centralize release rules ([69ec71f][102])
- **release.config.js:** use imported releaseRules ([2fe163c][103])

## [6.5.1][104] (2021-01-02)

### Bug Fixes

- **release.config.js:** add title to releaseRules objects ([99c2868][105])

### Build System

- **.changelogrc.js:** add debug output to .changelogrc.js ([d47c48b][106])

# [6.5.0][107] (2021-01-02)

### Features

- **.changelogrc.js:** add debug to all javascript ([54488d9][108])

## [6.4.3][109] (2021-01-02)

### Bug Fixes

- **build-test-deploy.yml:** debug pipeline statements always return true
  ([b759c31][110])

### Build System

- **.github:** fix debug scope name (leave / alone) ([de2c7b1][111])
- **package.json:** remove deploy test script ([4fb641c][112])

## [6.4.2][113] (2021-01-02)

### Build System

- **.github:** add DEBUG support to metadata gathering steps ([6b2e238][114])

## [6.4.1][115] (2021-01-02)

### Build System

- **.github/workflows/build-test-deploy.yml:** add DEBUG support
  ([de7ef33][116])
- **release.config.js:** fix bracket scoping issue ([c8ef15e][117])
- **release.config.js:** fix deploy to run at success step; add debug output
  ([b9e8cc5][118])

# [6.4.0][119] (2021-01-02)

### Features

- **package.json:** vercel deploy test ([ed73fc3][120])

## [6.3.8][121] (2021-01-02)

### Build System

- **build-test-deploy.yml:** add awareness of deploy npm script to pipeline
  ([d923b29][122])

## [6.3.7][123] (2021-01-02)

### Build System

- **.github/workflows/cleanup.yml:** fix metadata gathering step
  ([44dd462][124])

## [6.3.6][125] (2021-01-01)

### Build System

- **.github/workflows/cleanup.yml:** add metadata filtering step
  ([6667075][126])

## [6.3.5][127] (2021-01-01)

### Build System

- **.github:** fix hardcoded package name ([a10bac3][128])

## [6.3.4][129] (2021-01-01)

### Build System

- Move npm lint step before lint-staged in husky hook ([e8bac90][130])
- Update remark linting to exit 1 on error, quiet on success ([077abce][131])
- Update sort-package-json to contrib-env-expect ([6885a34][132])
- **pre-commit:** decentralize remark; more resilient build system
  ([ba0ef58][133])

## [6.3.3][134] (2021-01-01)

### Build System

- **pre-commit:** centralize remark; add markdown and eslint linting to CL
  ([772dee1][135])
- **pre-commit:** move eslint (and tsc) CL linting out of lint-staged and
  directly into husky ([e38af90][136])

## [6.3.2][137] (2021-01-01)

### Build System

- **.github:** fix pre/post formatting steps ([f757db8][138])

## [6.3.1][139] (2021-01-01)

### Bug Fixes

- **test:** improve test coverage ([7f4a70a][140])

# [6.3.0][141] (2021-01-01)

### Build System

- **package.json:** simplify lint ([dda943e][142])

### Features

- **src:** add div function ([636c353][143])

# [6.2.0][144] (2021-01-01)

### Build System

- **.github/workflows/build-test-deploy.yml:** add remark and formatting steps
  ([e16cd8b][145])
- **.husky:** remove verbose flag ([538c374][146])
- **package.json:** fix lint-staged remark and prettier ([6fbd1df][147])
- **package.json:** remove debug echo ([33a510d][148])
- **release.config.js:** fix to use gfm ([db4c284][149])

### Features

- **package.json:** add remark-gfm; test lint-staged ([bcbf3f5][150])

## [6.1.7][151] (2020-12-31)

### Bug Fixes

- **README.md:** simulated external-PR fix ([8a7fc06][152])

### Reverts

- _"chore(readme.md): format husky test"_ ([9675eeb][153])

## [6.1.6][154] (2020-12-30)

### Build System

- **package.json:** conclude dynamic continuous integration tests
  ([828751d][155])

## [6.1.5][156] (2020-12-30)

### Bug Fixes

- **build-test-deploy.yml:** clearer error language with invalid externals
  config ([d8ed033][157])

## [6.1.4][158] (2020-12-30)

### Reverts

- _"build(build-test-deploy.yml): debug should warn"_ ([44f5cd4][159])

## [6.1.3][160] (2020-12-30)

### Build System

- **build-test-deploy.yml:** debug should warn ([55e1235][161])
- **build-test-deploy.yml:** fix syntax error ([5448960][162])

## [6.1.2][163] (2020-12-30)

### Build System

- **.github:** better snyk ignore ([5921653][164])
- **package.json:** remove high audit CI failure ([b2ea6f1][165])
- **package.json:** test high audit CI failure ([03825f0][166])

## [6.1.1][167] (2020-12-30)

### Bug Fixes

- **readme.md:** dummy fix ([bda2d5e][168])

# [6.1.0][169] (2020-12-30)

### Bug Fixes

- **readme.md:** dummy fix ([b9d92fd][170])

### Features

- **readme.md:** dummy feat ([f90dde3][171])

## [6.0.5][172] (2020-12-30)

### Bug Fixes

- **readme.md:** add codecov badge ([4b6c84c][173])

## [6.0.4][174] (2020-12-30)

### Build System

- **.github:** more resilient cleanup routine ([85b8e12][175])

## [6.0.3][176] (2020-12-30)

### Build System

- **.github:** better cleanup caching ([02746df][177])
- **.github:** fix cleanup ([7520e0f][178])

## [6.0.2][179] (2020-12-30)

### Build System

- **cleanup.yml:** add cleanup workflow ([747a674][180])
- **release.config.js:** remove console.info ([b374296][181])

## [6.0.1][182] (2020-12-30)

### Build System

- **.github:** ensure deploy stage is using latest node and npm ([d40192b][183])

# [6.0.0][184] (2020-12-30)

### Features

- **readme.md:** fake feature ([95a13d2][185])

### BREAKING CHANGES

- **readme.md:** **fake breaking change**

## [5.0.3][186] (2020-12-29)

### Build System

- **.github:** loosen CD pipeline launch check: run CD on all branches
  ([0a91fad][187])

### Reverts

- _"chore(.gitignore): ignore coverage"_ ([4aab0bd][188])

## [5.0.2][189] (2020-12-29)

### Build System

- **.github:** add codecov config and add fetch-depth to test-unit
  ([e62c5b4][190])

## [5.0.1][191] (2020-12-29)

### Build System

- **.github:** add codecov-action to test-unit job ([2ef6297][192])
- **package.json:** add codecov package ([d73cac9][193])
- **package.json:** remove codecov package ([da477b7][194])

# [5.0.0][195] (2020-12-29)

### Chore

- Fix capitalization of non-release commit types ([7391321][196])

### BREAKING CHANGES

- **Dummy BC 7**
- **Dummy BC 9**
- **Dummy BCs 10, 8, and 6**

# [4.0.0][197] (2020-12-29)

### Bug Fixes

- **.changelogrc.js:** remove BC capitalization and sentence-case code
  ([02662fc][198])

### Chore

- Update comment language ([5a2aef4][199])

### BREAKING CHANGES

- **Dummy BC 1**
- **Dummy BC 2**
- **Dummy BCs 3, 4, and 5**

## [3.0.1][200] (2020-12-28)

### Bug Fixes

- **.github:** update ci committer name and email to xunn-bot ([b151491][201])
- **package.json:** update typedoc to latest beta and fix npmbd ([783ba76][202])

### Build System

- **package.json:** update deps ([a876517][203])

# [3.0.0][204] (2020-12-07)

### Bug Fixes

- **.github/workflows:** fix syntax: "no-ci/\*\*" ([b060d3e][205])
- **config:** rename changelog.config.js to .changelogrc.js ([d5dfc50][206])
- **package.json:** use @xunnamius/semantic-release ([0447d59][207])

### Build System

- **.github/workflows:** build system now ignores branches with names that begin
  with "no-ci/" ([3a4bdff][208])
- **.github/workflows:** workflow no longer triggered on tag push,
  dependabot/snyk push ([1096e6f][209])
- **package-lock.json:** fix syntax error ([4fd2952][210])

### Debug

- Update semantic-release to Xunnamius/semantic-release#contrib-holistic
  ([446e961][211])

### Features

- Added mult function ([e537358][212])

### Reverts

- _"chore(.github/workflows): exclude ./.git from build caching"_
  ([b75d8ac][213])
- _"debug(.github/workflows): fake change"_ ([d59bb1a][214])
- _"debug(.github/workflows): test force push protection"_ ([4cc6ee6][215])

### BREAKING CHANGES

- **Another simulated breaking change!**

It works a little like this and that and some of this

- **And a second breaking change too**
- **config:** **breaking change 1**
- **config:** **breaking change 2**
- **config:** **breaking change 3**

Ack: Tre Signed: Yup!

- **Simulated breaking change**

This is a simulated breaking change.

## [2.3.4][216] (2020-12-03)

### Build System

- **commitlint:** add debug type to type-enum ([10c71bf][217])
- **config:** fix changelog.config.js bug when subject is undefined
  ([57e0c16][218])
- **package.json:** downgrade puppeteer and upgrade other deps ([e5d6d42][219])
- Added .env.example and env-expect ([efb29c5][220])

### Reverts

- revert "debug: switch actions ci to install" ([f9a3e23][221])

## [2.3.3][222] (2020-11-30)

### Bug Fixes

- **spellcheck:** fix incorrect parsing of global cspell vscode settings
  ([c2789bf][223])

### Build System

- **release:** fix changelogTitle skip title ([1dcdcc1][224])

## [2.3.2][225] (2020-11-30)

### Build System

- **release:** fix changelogTitle spread bug ([598a396][226])

## [2.3.1][227] (2020-11-30)

### Build System

- Install @semantic-release/changelog ([022603b][228])
- **release:** fix changelogTitle bug ([0d181ea][229])
- **release:** fix SHOULD_UPDATE_CHANGELOG conditional ([ec632ad][230])

# [2.3.0][231] (2020-11-30)

### Features

- **tooling:** spellcheck now ignores camelCase et al ([d921382][232])

### Performance Improvements

- Better faster spellchecking ([c44c310][233])

## [2.2.2][234] (2020-11-29)

### Build System

- **changelog:** changelog now includes relevant build-type commits
  ([d630264][235])

## [2.2.1][236] (2020-11-29)

### Build System

- **changelog:** changelog now includes relevant reverts ([d4ccacb][237])

# [2.2.0][238] (2020-11-29)

### Bug Fixes

- **actions:** bring metadata collection in-line with new format
  ([a62380b][239])
- **config:** changelog config honors skip commands, leaves reverts alone
  ([823f8b5][240])
- **config:** fix broken changelog.config.js structure ([bd10f44][241])
- **package.json:** downgrade typedoc and assoc plugins ([46db2ee][242])
- **package.json:** install lint-staged dep and script ([f3800e4][243])
- **package.json:** install spellcheck dependencies ([9a7adb4][244])
- **spellcheck:** change "contains" to "includes" ([af76dbe][245])
- **spellcheck:** fix bug where spellcheck reads from wrong message source
  ([69a25ba][246])
- **spellcheck:** spellcheck now leverages assorted knowledge ([14b86ae][247])

### Build System

- Install @semantic-release/exec ([cc94940][248])
- **config:** fix changelog.config.js operating on individual releases
  ([66adf2f][249])
- **config:** fix husky pre-commit hook ([f0d0032][250])
- **config:** generate CHANGELOG.md beautifully ([2fa4aa9][251])
- **config:** retire @semantic-release/changelog ([787a281][252])

### Features

- Add build-changelog to npm scripts ([8393a87][253])

## [2.1.4][254] (2020-11-28)

### Bug Fixes

- **actions:** ensure metadata is gathered properly ([31ece1c][255])
- **release:** remove extra newlines during changelogs generation
  ([72acb24][256])

## [2.1.3][257] (2020-11-28)

### Bug Fixes

- **release:** update how changelogs are generated ([8ce1760][258])

## [2.1.2][259] (2020-11-28)

### Bug Fixes

- **actions:** remove erroneous build-dist from lint job ([2cdd373][260])
- **actions:** remove erroneous build-dist from test-unit job ([fcb2232][261])
- **config:** fix babel.config.js with NODE_LTS ([cdf4610][262])

## [2.1.1][263] (2020-11-26)

### Bug Fixes

- **actions:** update gather-metadata with more accurate grep ([961ecef][264])

# [2.1.0][265] (2020-11-25)

### Bug Fixes

- **actions:** gather-metadata steps gather and skip properly ([97682f4][266])
- **actions:** if statements now use | instead of > ([24e3739][267])
- **actions:** move comments out of multiline statements ([874f8d6][268])

### Features

- **actions:** introduce new streamlined workflow job configuration
  ([4bb9d94][269])

## [2.0.1][270] (2020-11-24)

### Bug Fixes

- **actions:** add git author and commiter env vars for semantic-release signed
  commits ([f01d16b][271])
- **dependabot:** ensure dependabot formats GitHub Actions PRs correctly
  ([bcdbd0e][272])
- Add build commits to release rule ([3124ab0][273])

# [2.0.0][274] (2020-11-24)

### Bug Fixes

- **actions:** add install-dependencies to semantic-release needs
  ([d8cc836][275])
- **actions:** deps caching done properly ([bbe0416][276])
- **actions:** ensure repo is always checked out first ([65e5d46][277])
- **actions:** removed signed pushes ([f621f76][278])
- **package.json:** do not guess error codes ([f5428c8][279])
- **package.json:** ensure machine-friendly run-script syntax ([7af5e45][280])
- **package.json:** ensure set +e used in run-scripts when necessary
  ([6d86c0b][281])
- **package.json:** precedence error caused bad return value in lint
  ([e8bfbc5][282])

### Features

- Added diff to take the difference ([5e40deb][283])

### Performance Improvements

- **actions:** better caching ([6da0a65][284])
- **actions:** made test-integration-chrome independent ([d489cfa][285])
- **actions:** only cache node_modules ([57775c9][286])

### Reverts

- _"debug: added debug step"_ ([1741cde][287])
- _"debug: debug cache miss"_ ([42af347][288])

### BREAKING CHANGES

- **Switch to semantic-release CI/CD pipeline**

Moved away from publish-please to a fully automated build-test-deploy release
cycle based on semantic-release.

# Archived Releases (pre-CI/CD)

- Version 1.0.15 ([57faa2c][289])

<!---->

- Version 1.0.7 ([5ced626][290])

- Version 1.0.0 ([df91d82][291])

[1]: https://github.com/Xunnamius/workflow-playground/compare/v7.5.16...v7.5.17
[2]:
  https://github.com/Xunnamius/workflow-playground/commit/c59e45c31b71404ede66de65a20befd7fc62f392
[3]:
  https://github.com/Xunnamius/workflow-playground/commit/3addf1183dafdd2ae6f38151f84877e015703d37
[4]:
  https://github.com/Xunnamius/workflow-playground/commit/fb18856babb2be3d69030629173b94deb134a0a8
[5]:
  https://github.com/Xunnamius/workflow-playground/commit/4f23d4ee5fb37e220072dcf76ebc81f6f84b22cf
[6]: https://github.com/Xunnamius/workflow-playground/compare/v7.5.15...v7.5.16
[7]:
  https://github.com/Xunnamius/workflow-playground/commit/3b81944504da09657d3232b437c4d04ba9fa95a4
[8]: https://github.com/Xunnamius/workflow-playground/compare/v7.5.14...v7.5.15
[9]:
  https://github.com/Xunnamius/workflow-playground/commit/85881f72411301a06791be63c76a67fbff45d3fd
[10]: https://github.com/Xunnamius/workflow-playground/compare/v7.5.13...v7.5.14
[11]:
  https://github.com/Xunnamius/workflow-playground/commit/107b953b834fb54bb2ee1c418d5bb8119fabe3ac
[12]: https://github.com/Xunnamius/workflow-playground/compare/v7.5.12...v7.5.13
[13]:
  https://github.com/Xunnamius/workflow-playground/commit/2dce9c47d069b05df41481678a967dccc4637ead
[14]: https://github.com/Xunnamius/workflow-playground/compare/v7.5.11...v7.5.12
[15]:
  https://github.com/Xunnamius/workflow-playground/commit/172fa775e677fe977d2b8265460ec192818b1996
[16]: https://github.com/Xunnamius/workflow-playground/compare/v7.5.10...v7.5.11
[17]:
  https://github.com/Xunnamius/workflow-playground/commit/fef722214527e07c51c47fd635a24f0be4a4f839
[18]:
  https://github.com/Xunnamius/workflow-playground/commit/16a597d7a2eb2ee07543c382844e18cb7ce363e6
[19]: https://github.com/Xunnamius/workflow-playground/compare/v7.5.9...v7.5.10
[20]:
  https://github.com/Xunnamius/workflow-playground/commit/597d6c58440c5e7aac53fbbe23b57e6c19125ad2
[21]: https://github.com/Xunnamius/workflow-playground/compare/v7.5.8...v7.5.9
[22]:
  https://github.com/Xunnamius/workflow-playground/commit/25db498808da4891f7f40b8a04b09e68b920d130
[23]: https://github.com/Xunnamius/workflow-playground/compare/v7.5.7...v7.5.8
[24]:
  https://github.com/Xunnamius/workflow-playground/commit/3973279927772eea45ac8573c1a91dea3635c6eb
[25]: https://github.com/Xunnamius/workflow-playground/compare/v7.5.6...v7.5.7
[26]:
  https://github.com/Xunnamius/workflow-playground/commit/51123db7bc0a158d3849f99de64fbe1691011fdd
[27]: https://github.com/Xunnamius/workflow-playground/compare/v7.5.5...v7.5.6
[28]:
  https://github.com/Xunnamius/workflow-playground/commit/31f61f5dc94357a5950d2b2fe90ef9e6268e4ee4
[29]: https://github.com/Xunnamius/workflow-playground/compare/v7.5.4...v7.5.5
[30]:
  https://github.com/Xunnamius/workflow-playground/commit/7212561b4cf094f47169b7b38e9ae4a9550e569b
[31]: https://github.com/Xunnamius/workflow-playground/compare/v7.5.3...v7.5.4
[32]:
  https://github.com/Xunnamius/workflow-playground/commit/ed31f79e0ebe97823e2a62b9e6aa7b3e2355ff7c
[33]: https://github.com/Xunnamius/workflow-playground/compare/v7.5.2...v7.5.3
[34]:
  https://github.com/Xunnamius/workflow-playground/commit/8a051d1222ed6df2d1c9e1f2e2eb890d763a6333
[35]: https://github.com/Xunnamius/workflow-playground/compare/v7.5.1...v7.5.2
[36]:
  https://github.com/Xunnamius/workflow-playground/commit/2cf6e46a6fe59b8a47123f2215ba8caf7976ad87
[37]: https://github.com/Xunnamius/workflow-playground/compare/v7.5.0...v7.5.1
[38]:
  https://github.com/Xunnamius/workflow-playground/commit/cb77d20313504c4cb25f082680fe321d6409a421
[39]:
  https://github.com/Xunnamius/workflow-playground/commit/6c1c4d48ea0ca4b60135976a0186152b97a31ec7
[40]:
  https://github.com/Xunnamius/workflow-playground/commit/c7556314894b98e9d727c27096e69695b5eb46fa
[41]:
  https://github.com/Xunnamius/workflow-playground/commit/3fdd509eac028d1eecd953ba4bc0931460aafeb9
[42]:
  https://github.com/Xunnamius/workflow-playground/commit/eda277e8f0a37e171bc329c9c6fc2e8c2d028396
[43]:
  https://github.com/Xunnamius/workflow-playground/commit/0f401ffec3ebdd4736b3ef0aa52419293f5ad599
[44]: https://github.com/Xunnamius/workflow-playground/compare/v7.4.5...v7.5.0
[45]:
  https://github.com/Xunnamius/workflow-playground/commit/77c033ff143dff64455049b8314cd528bae4e198
[46]: https://github.com/Xunnamius/workflow-playground/compare/v7.4.4...v7.4.5
[47]:
  https://github.com/Xunnamius/workflow-playground/commit/677b4cedff4d3e4541736e612035d909a0df6131
[48]: https://github.com/Xunnamius/workflow-playground/compare/v7.4.3...v7.4.4
[49]:
  https://github.com/Xunnamius/workflow-playground/commit/5c8fefa330e31620fe2af848d42eb2c5ab881d02
[50]: https://github.com/Xunnamius/workflow-playground/compare/v7.4.2...v7.4.3
[51]:
  https://github.com/Xunnamius/workflow-playground/commit/09304d7cbeea2f0b6f938a907fa1f2351ae51a5b
[52]:
  https://github.com/Xunnamius/workflow-playground/commit/c247c7a353a522de79dcf677994c278dfc993d65
[53]:
  https://github.com/Xunnamius/workflow-playground/commit/6eb7d4120f89cd1aaa0f0be2216ae327c66546cb
[54]:
  https://github.com/Xunnamius/workflow-playground/commit/0528db62704fb9d6a5139c60f131c432a23eeaa0
[55]: https://github.com/Xunnamius/workflow-playground/compare/v7.4.1...v7.4.2
[56]:
  https://github.com/Xunnamius/workflow-playground/commit/2842a3173829dc06bef77cb0b039ad584681f414
[57]:
  https://github.com/Xunnamius/workflow-playground/commit/4c174fe72d1a8f7e731b0a78d713223308015256
[58]:
  https://github.com/Xunnamius/workflow-playground/commit/6c000053c1b04088ed83b5690b4317bfa56e8d39
[59]: https://github.com/Xunnamius/workflow-playground/compare/v7.4.0...v7.4.1
[60]:
  https://github.com/Xunnamius/workflow-playground/commit/aff191d1d036b9098493a3057927d24b3a175f1f
[61]:
  https://github.com/Xunnamius/workflow-playground/commit/e9b9e49f60737401c2d524ef21674a75d89f02a4
[62]: https://github.com/Xunnamius/workflow-playground/compare/v7.3.0...v7.4.0
[63]:
  https://github.com/Xunnamius/workflow-playground/commit/e47160b09b956e69f0d9eb0cab01a3440bb66645
[64]: https://github.com/Xunnamius/workflow-playground/compare/v7.2.3...v7.3.0
[65]:
  https://github.com/Xunnamius/workflow-playground/commit/a576d0b3e2a3e3f3cd4b0007ccd024f206877fbe
[66]:
  https://github.com/Xunnamius/workflow-playground/commit/0dc7c4eef97a021462e54b1d00cd789544202d9e
[67]:
  https://github.com/Xunnamius/workflow-playground/commit/c01b325ea28e7b4cf940e622faf7c805e42c5880
[68]:
  https://github.com/Xunnamius/workflow-playground/commit/24f088811ed253dac8791e85d27aa2c194111328
[69]: https://github.com/Xunnamius/workflow-playground/compare/v7.2.2...v7.2.3
[70]:
  https://github.com/Xunnamius/workflow-playground/commit/786942001834cb5337fabf921cbc14ea4cc04d2f
[71]: https://github.com/Xunnamius/workflow-playground/compare/v7.2.1...v7.2.2
[72]:
  https://github.com/Xunnamius/workflow-playground/commit/a8cd37812dc9e304bf813c742b2d4d54c1c9c183
[73]: https://github.com/Xunnamius/workflow-playground/compare/v7.2.0...v7.2.1
[74]:
  https://github.com/Xunnamius/workflow-playground/commit/73edb9a864bbc4b7d5a7eb1d03ca4ce3b8e02e95
[75]: https://github.com/Xunnamius/workflow-playground/compare/v7.1.0...v7.2.0
[76]:
  https://github.com/Xunnamius/workflow-playground/commit/864253c3a63de8cbb6577244c8a419ea8a97decd
[77]:
  https://github.com/Xunnamius/workflow-playground/commit/bf8c76bc12c51476719204c44b25c361b7258e90
[78]:
  https://github.com/Xunnamius/workflow-playground/commit/f7d12565f96e1626ffa393ba4ac39786197818e7
[79]: https://github.com/Xunnamius/workflow-playground/compare/v7.0.0...v7.1.0
[80]:
  https://github.com/Xunnamius/workflow-playground/commit/27c97500ced2ef3085ce5bf984ccfa3e2bf5e04f
[81]:
  https://github.com/Xunnamius/workflow-playground/commit/67264ed159f3686a5f89fda5cec5f07d465af49e
[82]:
  https://github.com/Xunnamius/workflow-playground/commit/cd6236ad92608b126f7b8df52693f75db28b488d
[83]: https://github.com/Xunnamius/workflow-playground/compare/v6.7.3...v7.0.0
[84]:
  https://github.com/Xunnamius/workflow-playground/commit/5765c024e82c3e7e0c77808e3860c85fb8c8d759
[85]: https://github.com/Xunnamius/workflow-playground/compare/v6.7.2...v6.7.3
[86]:
  https://github.com/Xunnamius/workflow-playground/commit/ec263026c77f36f1b15c67e102f42300108a43ce
[87]:
  https://github.com/Xunnamius/workflow-playground/commit/6e9fb7333b29c973517b6c2813c162f0c00c0f4b
[88]: https://github.com/Xunnamius/workflow-playground/compare/v6.7.1...v6.7.2
[89]:
  https://github.com/Xunnamius/workflow-playground/commit/38bfb775cde6952a35a7daca6ad3e191cc0fa37b
[90]:
  https://github.com/Xunnamius/workflow-playground/commit/aff005d252799e06e7a84aab1b5f88af62cf8901
[91]: https://github.com/Xunnamius/workflow-playground/compare/v6.7.0...v6.7.1
[92]:
  https://github.com/Xunnamius/workflow-playground/commit/c24773e0265cc559ad8b6596dd3d97740f18e64f
[93]:
  https://github.com/Xunnamius/workflow-playground/commit/ff94fe15bb18f2cc1d545a0b7948d0e818b48ae9
[94]:
  https://github.com/Xunnamius/workflow-playground/commit/717ffdb672294ccca92a87d368777e09d35a2ab6
[95]:
  https://github.com/Xunnamius/workflow-playground/commit/f2e971ece7f3b60647ab3584db988dd8cbfd5d97
[96]: https://github.com/Xunnamius/workflow-playground/compare/v6.6.0...v6.7.0
[97]:
  https://github.com/Xunnamius/workflow-playground/commit/1fdcb9c6c500f88fbc2b7b6ec7f427f0a4995080
[98]: https://github.com/Xunnamius/workflow-playground/compare/v6.5.1...v6.6.0
[99]:
  https://github.com/Xunnamius/workflow-playground/commit/0cb26453351737c2ff0476b02f76ca82e3087f88
[100]:
  https://github.com/Xunnamius/workflow-playground/commit/ac06b3300ed526f58f26a18e4a5465f9e6ee8f13
[101]:
  https://github.com/Xunnamius/workflow-playground/commit/c6a3cd632cf814ca9d103bb4868ecafd032ed527
[102]:
  https://github.com/Xunnamius/workflow-playground/commit/69ec71f088e1e162cf7695940b92e3637941e452
[103]:
  https://github.com/Xunnamius/workflow-playground/commit/2fe163c01107f6a1a31fddb871a6eae27f07fd3f
[104]: https://github.com/Xunnamius/workflow-playground/compare/v6.5.0...v6.5.1
[105]:
  https://github.com/Xunnamius/workflow-playground/commit/99c2868b2682621a350c02665199a6132c3a8ec8
[106]:
  https://github.com/Xunnamius/workflow-playground/commit/d47c48bccb6110aca895d2472d611cd95134e156
[107]: https://github.com/Xunnamius/workflow-playground/compare/v6.4.3...v6.5.0
[108]:
  https://github.com/Xunnamius/workflow-playground/commit/54488d92317360c2e358bca9238e60e2daca64dd
[109]: https://github.com/Xunnamius/workflow-playground/compare/v6.4.2...v6.4.3
[110]:
  https://github.com/Xunnamius/workflow-playground/commit/b759c31195eb816c8c7fec1d18f89d85ed437ff1
[111]:
  https://github.com/Xunnamius/workflow-playground/commit/de2c7b1582b0ea20213ab5f761e7dc9994183f50
[112]:
  https://github.com/Xunnamius/workflow-playground/commit/4fb641cc202f3a510389566ce55415686bbc6a4e
[113]: https://github.com/Xunnamius/workflow-playground/compare/v6.4.1...v6.4.2
[114]:
  https://github.com/Xunnamius/workflow-playground/commit/6b2e2383ef2b54a56a665e6b9ecef7d93e5fec2e
[115]: https://github.com/Xunnamius/workflow-playground/compare/v6.4.0...v6.4.1
[116]:
  https://github.com/Xunnamius/workflow-playground/commit/de7ef33e1d74831b441e909c4e628527ed2900c0
[117]:
  https://github.com/Xunnamius/workflow-playground/commit/c8ef15e813811f037acd12133f485bd8435ac9cc
[118]:
  https://github.com/Xunnamius/workflow-playground/commit/b9e8cc58ea93099742c91d7431687965e131a3df
[119]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.8...v6.4.0
[120]:
  https://github.com/Xunnamius/workflow-playground/commit/ed73fc3e5c9c7f0f621802e9ea429dcfca36bf52
[121]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.7...v6.3.8
[122]:
  https://github.com/Xunnamius/workflow-playground/commit/d923b299e05789a20a08dc2e4059e5e6e1099658
[123]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.6...v6.3.7
[124]:
  https://github.com/Xunnamius/workflow-playground/commit/44dd46246911a9cb58baf0ec0b84aa5093f2628e
[125]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.5...v6.3.6
[126]:
  https://github.com/Xunnamius/workflow-playground/commit/66670754987250b92806dfa7d94c1cb46349f07f
[127]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.4...v6.3.5
[128]:
  https://github.com/Xunnamius/workflow-playground/commit/a10bac3efbce2b4bd511420fd4d7466c288d9706
[129]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.3...v6.3.4
[130]:
  https://github.com/Xunnamius/workflow-playground/commit/e8bac90bb68b79d4c4ab1853bdd4c45dddef44fe
[131]:
  https://github.com/Xunnamius/workflow-playground/commit/077abcea8df04b8b6cf292f97d0e4b37cda28f7b
[132]:
  https://github.com/Xunnamius/workflow-playground/commit/6885a3467c42b61e1edb93fed363ceca6ff15b28
[133]:
  https://github.com/Xunnamius/workflow-playground/commit/ba0ef5863ce550a6988ce259d7500807bdaa5db8
[134]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.2...v6.3.3
[135]:
  https://github.com/Xunnamius/workflow-playground/commit/772dee15ff4eaeba84f8327f30c69868c5e514c8
[136]:
  https://github.com/Xunnamius/workflow-playground/commit/e38af90e7720f08f46d6220168226336e6c040d4
[137]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.1...v6.3.2
[138]:
  https://github.com/Xunnamius/workflow-playground/commit/f757db8f0e97286abda30b825de9f803cd63c097
[139]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.0...v6.3.1
[140]:
  https://github.com/Xunnamius/workflow-playground/commit/7f4a70af17528c36e80440827663251f79c9c1be
[141]: https://github.com/Xunnamius/workflow-playground/compare/v6.2.0...v6.3.0
[142]:
  https://github.com/Xunnamius/workflow-playground/commit/dda943e24fcd164ae850feb1f1bd16924b773773
[143]:
  https://github.com/Xunnamius/workflow-playground/commit/636c35303cb5d04d239b13e89a3040e483c81cf7
[144]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.7...v6.2.0
[145]:
  https://github.com/Xunnamius/workflow-playground/commit/e16cd8b559096a076739d79a15ff79e5efa7f581
[146]:
  https://github.com/Xunnamius/workflow-playground/commit/538c374e597751bc198b6d52bc0a8fa41de6494d
[147]:
  https://github.com/Xunnamius/workflow-playground/commit/6fbd1df74d4bc1a7ad852e76e8fa805138d95657
[148]:
  https://github.com/Xunnamius/workflow-playground/commit/33a510dce4dcaf004732e739e3e9c3d12518646a
[149]:
  https://github.com/Xunnamius/workflow-playground/commit/db4c284e914688911f1b0d75c569b83a198113c2
[150]:
  https://github.com/Xunnamius/workflow-playground/commit/bcbf3f5cc2d0bba5f282de657977ab44c70b1bfe
[151]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.6...v6.1.7
[152]:
  https://github.com/Xunnamius/workflow-playground/commit/8a7fc06df25ffa5381bb5d771eb6e5a619fcbf64
[153]:
  https://github.com/Xunnamius/workflow-playground/commit/9675eeb1a06b715fea6cd9024cf94aa31d44943c
[154]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.5...v6.1.6
[155]:
  https://github.com/Xunnamius/workflow-playground/commit/828751d051d5cff15c5d1315fc9729d82cab985f
[156]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.4...v6.1.5
[157]:
  https://github.com/Xunnamius/workflow-playground/commit/d8ed033ead9608349f2d876c4cecebecd65dc47f
[158]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.3...v6.1.4
[159]:
  https://github.com/Xunnamius/workflow-playground/commit/44f5cd4c3c6adeb548ba89adba8e884336f41520
[160]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.2...v6.1.3
[161]:
  https://github.com/Xunnamius/workflow-playground/commit/55e1235d39714dd00c146549f630ec62f4952e2d
[162]:
  https://github.com/Xunnamius/workflow-playground/commit/5448960531a3bd19cc38de44f13519a8888e342a
[163]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.1...v6.1.2
[164]:
  https://github.com/Xunnamius/workflow-playground/commit/5921653ac2c26273eace14aa3e4994960be521a0
[165]:
  https://github.com/Xunnamius/workflow-playground/commit/b2ea6f13a5c7d7c8d89f76b6ced72c938448a235
[166]:
  https://github.com/Xunnamius/workflow-playground/commit/03825f051d3ed50dad916f0e3f3993a0fb3c51ce
[167]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.0...v6.1.1
[168]:
  https://github.com/Xunnamius/workflow-playground/commit/bda2d5ea408563874429d8ed8e30455d5e717a54
[169]: https://github.com/Xunnamius/workflow-playground/compare/v6.0.5...v6.1.0
[170]:
  https://github.com/Xunnamius/workflow-playground/commit/b9d92fdd4f2d594a62fce6d16299152c79a43566
[171]:
  https://github.com/Xunnamius/workflow-playground/commit/f90dde35c32e676c765b131ddfa135246ad7f7eb
[172]: https://github.com/Xunnamius/workflow-playground/compare/v6.0.4...v6.0.5
[173]:
  https://github.com/Xunnamius/workflow-playground/commit/4b6c84c788c4105db8a1ddd10ecb044be31876f9
[174]: https://github.com/Xunnamius/workflow-playground/compare/v6.0.3...v6.0.4
[175]:
  https://github.com/Xunnamius/workflow-playground/commit/85b8e12e1bce4baa22bd301da9dda21ea289fd9d
[176]: https://github.com/Xunnamius/workflow-playground/compare/v6.0.2...v6.0.3
[177]:
  https://github.com/Xunnamius/workflow-playground/commit/02746df97d17f717de608d4b5cc3838e2992a150
[178]:
  https://github.com/Xunnamius/workflow-playground/commit/7520e0fc29f22ef537fc947a5f32d6b6bc762cc5
[179]: https://github.com/Xunnamius/workflow-playground/compare/v6.0.1...v6.0.2
[180]:
  https://github.com/Xunnamius/workflow-playground/commit/747a6742dabcc6cdc8fd835b2f673e355f212cdf
[181]:
  https://github.com/Xunnamius/workflow-playground/commit/b3742961a2824618bf68953c532055a04ef03920
[182]: https://github.com/Xunnamius/workflow-playground/compare/v6.0.0...v6.0.1
[183]:
  https://github.com/Xunnamius/workflow-playground/commit/d40192bd13d9b301e09723cdca68be60b44b5d82
[184]: https://github.com/Xunnamius/workflow-playground/compare/v5.0.3...v6.0.0
[185]:
  https://github.com/Xunnamius/workflow-playground/commit/95a13d21dd902a490d445d3c8aee89c59b2131f1
[186]: https://github.com/Xunnamius/workflow-playground/compare/v5.0.2...v5.0.3
[187]:
  https://github.com/Xunnamius/workflow-playground/commit/0a91fad0d4f6c41c600294b8ecfc84b16e906980
[188]:
  https://github.com/Xunnamius/workflow-playground/commit/4aab0bda87d426f81663773342f77bf661c79ce0
[189]: https://github.com/Xunnamius/workflow-playground/compare/v5.0.1...v5.0.2
[190]:
  https://github.com/Xunnamius/workflow-playground/commit/e62c5b42ca2b43326cc9eec8db248020b2d90ec8
[191]: https://github.com/Xunnamius/workflow-playground/compare/v5.0.0...v5.0.1
[192]:
  https://github.com/Xunnamius/workflow-playground/commit/2ef6297d257bcd1661093eed5069714382f01f36
[193]:
  https://github.com/Xunnamius/workflow-playground/commit/d73cac91012e0a32ee1f52a3b476b8639f325ca2
[194]:
  https://github.com/Xunnamius/workflow-playground/commit/da477b770bc7b17db8eb474eb523e8468881e447
[195]: https://github.com/Xunnamius/workflow-playground/compare/v4.0.0...v5.0.0
[196]:
  https://github.com/Xunnamius/workflow-playground/commit/7391321c8da14ed35a865a4e245db2ae3b72a606
[197]: https://github.com/Xunnamius/workflow-playground/compare/v3.0.1...v4.0.0
[198]:
  https://github.com/Xunnamius/workflow-playground/commit/02662fcac7c02ac3f5a32dba750e00d23d6c88f2
[199]:
  https://github.com/Xunnamius/workflow-playground/commit/5a2aef4cebc6ed136fa3fb5015f38f47de8ce781
[200]: https://github.com/Xunnamius/workflow-playground/compare/v3.0.0...v3.0.1
[201]:
  https://github.com/Xunnamius/workflow-playground/commit/b15149139462980707fc8ec6d7d67414ac207e6e
[202]:
  https://github.com/Xunnamius/workflow-playground/commit/783ba76db816b0cc391450d442c708420203c46c
[203]:
  https://github.com/Xunnamius/workflow-playground/commit/a876517a6ea8b339e8c0eca9f7763bcc85919f87
[204]: https://github.com/Xunnamius/workflow-playground/compare/v2.3.4...v3.0.0
[205]:
  https://github.com/Xunnamius/workflow-playground/commit/b060d3ec78744b72bd53450ecd1664110cdebda8
[206]:
  https://github.com/Xunnamius/workflow-playground/commit/d5dfc506c9d68a0f299559b5e76c92630c9edf0a
[207]:
  https://github.com/Xunnamius/workflow-playground/commit/0447d5959113f033e2ed5644efdb4c80c4fe5085
[208]:
  https://github.com/Xunnamius/workflow-playground/commit/3a4bdff03f0d8ea450f53aebceb33525801b3c34
[209]:
  https://github.com/Xunnamius/workflow-playground/commit/1096e6fbfff5fd399c2f1af5fe2b6496c5ca3cfe
[210]:
  https://github.com/Xunnamius/workflow-playground/commit/4fd2952e78b5cfda17a84a538bcc382d06621926
[211]:
  https://github.com/Xunnamius/workflow-playground/commit/446e961cee1326be7db4085f118447ac30f15078
[212]:
  https://github.com/Xunnamius/workflow-playground/commit/e537358218a8abcc97008f5460b37a1949dd0681
[213]:
  https://github.com/Xunnamius/workflow-playground/commit/b75d8ac9bb35a28aa8ebbe8dc52589bc7783d0cd
[214]:
  https://github.com/Xunnamius/workflow-playground/commit/d59bb1a385279427ee93ac6babbc2a8f7544e599
[215]:
  https://github.com/Xunnamius/workflow-playground/commit/4cc6ee68cec6500f99e918443fee5deae32a9f0a
[216]: https://github.com/Xunnamius/workflow-playground/compare/v2.3.3...v2.3.4
[217]:
  https://github.com/Xunnamius/workflow-playground/commit/10c71bf50522ae3902f84cf6171b9fce4d1470f4
[218]:
  https://github.com/Xunnamius/workflow-playground/commit/57e0c162e73d5850807e9f496df0aa6203834f4c
[219]:
  https://github.com/Xunnamius/workflow-playground/commit/e5d6d42ad230f45b0239bcec671a18a2789ae8f2
[220]:
  https://github.com/Xunnamius/workflow-playground/commit/efb29c5c991d58ae8aa684159f4db0d3f8f6dbbe
[221]:
  https://github.com/Xunnamius/workflow-playground/commit/f9a3e231bf5b99619d5aabccdba6f6299642b6e9
[222]: https://github.com/Xunnamius/workflow-playground/compare/v2.3.2...v2.3.3
[223]:
  https://github.com/Xunnamius/workflow-playground/commit/c2789bfd8f43bb9fc60316131c4e6d17dd2c1de8
[224]:
  https://github.com/Xunnamius/workflow-playground/commit/1dcdcc1cac342f9bdca71e49f9cc332e9118932f
[225]: https://github.com/Xunnamius/workflow-playground/compare/v2.3.1...v2.3.2
[226]:
  https://github.com/Xunnamius/workflow-playground/commit/598a3966ce1d85c6dcc2945878ebd3ba2c969654
[227]: https://github.com/Xunnamius/workflow-playground/compare/v2.3.0...v2.3.1
[228]:
  https://github.com/Xunnamius/workflow-playground/commit/022603bbe50298a8e7500a77cb77ce5aae4b45f7
[229]:
  https://github.com/Xunnamius/workflow-playground/commit/0d181ea032a9f5322137dacf5ee97e6a28acd035
[230]:
  https://github.com/Xunnamius/workflow-playground/commit/ec632ad52472184edbed16111b4a5b306ae6f7ed
[231]: https://github.com/Xunnamius/workflow-playground/compare/v2.2.2...v2.3.0
[232]:
  https://github.com/Xunnamius/workflow-playground/commit/d9213827f9448a93affcab8ca652e37f24b247b9
[233]:
  https://github.com/Xunnamius/workflow-playground/commit/c44c310f01d78798c5a13213dafeef5e1f25b25f
[234]: https://github.com/Xunnamius/workflow-playground/compare/v2.2.1...v2.2.2
[235]:
  https://github.com/Xunnamius/workflow-playground/commit/d630264d1ee046ddf943ad287b15f5308ce4c224
[236]: https://github.com/Xunnamius/workflow-playground/compare/v2.2.0...v2.2.1
[237]:
  https://github.com/Xunnamius/workflow-playground/commit/d4ccacb6533b04c4889b909ecd2bffd4c7b5fa79
[238]: https://github.com/Xunnamius/workflow-playground/compare/v2.1.4...v2.2.0
[239]:
  https://github.com/Xunnamius/workflow-playground/commit/a62380bc4f75c42d74640916fde44fb5811f150d
[240]:
  https://github.com/Xunnamius/workflow-playground/commit/823f8b5434e07250b8aefbd9f4a49e0ea05cc9e5
[241]:
  https://github.com/Xunnamius/workflow-playground/commit/bd10f4414522a0c6b406adb2fba9d58abee6830e
[242]:
  https://github.com/Xunnamius/workflow-playground/commit/46db2ee7335e9b37cfafce98776171304f0072b7
[243]:
  https://github.com/Xunnamius/workflow-playground/commit/f3800e471e93308b37eb2668dd5c4bfde9e7b88e
[244]:
  https://github.com/Xunnamius/workflow-playground/commit/9a7adb4fb9592328efd3b33bc156b87f89a59ffb
[245]:
  https://github.com/Xunnamius/workflow-playground/commit/af76dbe52921aed27c4cf275875de9c1194561d4
[246]:
  https://github.com/Xunnamius/workflow-playground/commit/69a25baa21133345e2a2baffd2f69d0abe950c02
[247]:
  https://github.com/Xunnamius/workflow-playground/commit/14b86ae815f2c24aef82dcad41b0ead036a2f4c4
[248]:
  https://github.com/Xunnamius/workflow-playground/commit/cc94940e7b903a141f4e16a4169411c0a45bfb96
[249]:
  https://github.com/Xunnamius/workflow-playground/commit/66adf2f3d8ea4bd1813fac4c704ff327ac175855
[250]:
  https://github.com/Xunnamius/workflow-playground/commit/f0d0032fb51ddb98b2f35b229c9d1873c00264f7
[251]:
  https://github.com/Xunnamius/workflow-playground/commit/2fa4aa962a17c6075d28af876f67fe98d0f519b6
[252]:
  https://github.com/Xunnamius/workflow-playground/commit/787a28144826609ddffb5e0d1937f314b1039ab6
[253]:
  https://github.com/Xunnamius/workflow-playground/commit/8393a87974cea60087a8d11fc9b0bac0f7ecc6e2
[254]: https://github.com/Xunnamius/workflow-playground/compare/v2.1.3...v2.1.4
[255]:
  https://github.com/Xunnamius/workflow-playground/commit/31ece1cb7d0b91bbc38b1c3eb6366c13d1da7fd2
[256]:
  https://github.com/Xunnamius/workflow-playground/commit/72acb24c0c521217fb8eebb5204ddf1591808326
[257]: https://github.com/Xunnamius/workflow-playground/compare/v2.1.2...v2.1.3
[258]:
  https://github.com/Xunnamius/workflow-playground/commit/8ce176044293af0ac3b5dd2495d7d0eb580bbede
[259]: https://github.com/Xunnamius/workflow-playground/compare/v2.1.1...v2.1.2
[260]:
  https://github.com/Xunnamius/workflow-playground/commit/2cdd373974fdc62480e5681813c09cba98aebddc
[261]:
  https://github.com/Xunnamius/workflow-playground/commit/fcb2232cf6e628f58033a78a0d6aa107f9794589
[262]:
  https://github.com/Xunnamius/workflow-playground/commit/cdf46102e7d5b590bd153d2444cb13c24d4170b3
[263]: https://github.com/Xunnamius/workflow-playground/compare/v2.1.0...v2.1.1
[264]:
  https://github.com/Xunnamius/workflow-playground/commit/961ecef3555403928cf319012ca6bd40093da66e
[265]: https://github.com/Xunnamius/workflow-playground/compare/v2.0.1...v2.1.0
[266]:
  https://github.com/Xunnamius/workflow-playground/commit/97682f434acc501e4964c31770472acae0320ad5
[267]:
  https://github.com/Xunnamius/workflow-playground/commit/24e373907b23a68627fe535049f603c93bfa1361
[268]:
  https://github.com/Xunnamius/workflow-playground/commit/874f8d65aff5d8e27e14e8d9e4a0e37450713ce0
[269]:
  https://github.com/Xunnamius/workflow-playground/commit/4bb9d94050d1b8fb164bdf04b1bffa10705aa0a2
[270]: https://github.com/Xunnamius/workflow-playground/compare/v2.0.0...v2.0.1
[271]:
  https://github.com/Xunnamius/workflow-playground/commit/f01d16b51e444eb801121e81718994b4add18799
[272]:
  https://github.com/Xunnamius/workflow-playground/commit/bcdbd0e1c23786185cd43b11d9ce18d3498e9ff5
[273]:
  https://github.com/Xunnamius/workflow-playground/commit/3124ab0500924ce75f3387d59d5d60ea3e77c827
[274]: https://github.com/Xunnamius/workflow-playground/compare/v1.0.15...v2.0.0
[275]:
  https://github.com/Xunnamius/workflow-playground/commit/d8cc83611de2a595631f42bee0f10591b11bc59c
[276]:
  https://github.com/Xunnamius/workflow-playground/commit/bbe0416125a303076bc3f8a5a96c9669db926b46
[277]:
  https://github.com/Xunnamius/workflow-playground/commit/65e5d463925b888e08dd69a9da7f4e9f4c9be872
[278]:
  https://github.com/Xunnamius/workflow-playground/commit/f621f76895e6a0749f76a6a1abd90253b8694717
[279]:
  https://github.com/Xunnamius/workflow-playground/commit/f5428c87836552db96d40310c52abd47e593e729
[280]:
  https://github.com/Xunnamius/workflow-playground/commit/7af5e45eb0712da5d80022cedd535a673082d195
[281]:
  https://github.com/Xunnamius/workflow-playground/commit/6d86c0b4ce2218a93f9919a256a89a04af83a9d1
[282]:
  https://github.com/Xunnamius/workflow-playground/commit/e8bfbc590ec8ac73071ae61708c1ca29f2beee36
[283]:
  https://github.com/Xunnamius/workflow-playground/commit/5e40deb020c4bafb103a6bc78fbeecb266a5c983
[284]:
  https://github.com/Xunnamius/workflow-playground/commit/6da0a656aba20f022d26335ec33c9c4c4ea37c02
[285]:
  https://github.com/Xunnamius/workflow-playground/commit/d489cfacd8514a210ec0b570ab3c5a283cf5bc19
[286]:
  https://github.com/Xunnamius/workflow-playground/commit/57775c9cc3ffdad94f09b23923785a081e2a08ee
[287]:
  https://github.com/Xunnamius/workflow-playground/commit/1741cde56623bdb6e3e0c1dc95dcbe094b197ebe
[288]:
  https://github.com/Xunnamius/workflow-playground/commit/42af3470f3e91e5d359d995888c83534b8d32060
[289]:
  https://github.com/Xunnamius/workflow-playground/commit/57faa2cc448f39383b56db04ec06b1093f5f7bcd
[290]:
  https://github.com/Xunnamius/workflow-playground/commit/5ced6267d44731337fe5e0a69776dd5642d8a54d
[291]:
  https://github.com/Xunnamius/workflow-playground/commit/df91d8298edd2d756f732b2245ba086e91197505
[292]: https://conventionalcommits.org
[293]: https://semver.org
[294]:
  https://github.com/Xunnamius/workflow-playground/compare/v7.5.17...v7.5.18
[295]:
  https://github.com/Xunnamius/workflow-playground/commit/e7f2bbb7c066e4fadb2484f938353456e2312c8e
[296]:
  https://github.com/Xunnamius/workflow-playground/commit/8d16630dd5a5d092d1e74c385e582c0a592ee20e
