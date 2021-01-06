# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Conventional Commits][268], and this project adheres to
[Semantic Versioning][269].

## [7.5.8][270] (2021-01-06)

### Build System

- **webpack.config.js:** process.env shim ([3973279][271])

## [7.5.7][1] (2021-01-06)

### Build System

- **.github/workflows/post-release-check.yml:** fix post-release-check?2
  ([51123db][2])

## [7.5.6][3] (2021-01-06)

### Build System

- **.github/workflows/post-release-check.yml:** fix post-release-check?2
  ([31f61f5][4])

## [7.5.5][5] (2021-01-06)

### Build System

- **.github/workflows/post-release-check.yml:** fix post-release-check?
  ([7212561][6])

## [7.5.4][7] (2021-01-06)

### Build System

- **.github/workflows/post-release-check.yml:** add new post-release-check
  ([ed31f79][8])

## [7.5.3][9] (2021-01-05)

### Build System

- **package.json:** backported updates ([8a051d1][10])

## [7.5.2][11] (2021-01-05)

### Build System

- **package.json:** backported updates ([2cf6e46][12])

## [7.5.1][13] (2021-01-05)

### Bug Fixes

- **env-expect.js:** use syntax for node 10 ([cb77d20][14])
- **package.json:** return browser test ([6c1c4d4][15])

### Build System

- **.github:** add INCLUDE_EXTERNALS ([c755631][16])
- **build-test-deploy.yml:** remove codecov upload for externals integration
  tests ([3fdd509][17])
- **package.json:** backports from the wild ([eda277e][18])
- **webpack.config.js:** add env-expect ([0f401ff][19])

# [7.5.0][20] (2021-01-05)

### Features

- **package-lock.json:** add unique-filename ([77c033f][21])

## [7.4.5][22] (2021-01-05)

### Bug Fixes

- **package.json:** order of items in exports objects are VERY IMPORTANT
  ([677b4ce][23])

## [7.4.4][24] (2021-01-04)

### Build System

- **.github/workflows/build-test-deploy.yml:** move webpack install
  responsibility to integration ([5c8fefa][25])

## [7.4.3][26] (2021-01-04)

### Build System

- **.github/workflows/build-test-deploy.yml:** add debug output to npm ci
  ([09304d7][27])
- **.github/workflows/build-test-deploy.yml:** fix debug output ([c247c7a][28])
- **.github/workflows/build-test-deploy.yml:** fix debug output ([6eb7d41][29])
- **.github/workflows/build-test-deploy.yml:** fix debug output (normalize node
  support) ([0528db6][30])

## [7.4.2][31] (2021-01-04)

### Build System

- **.github/workflows/build-test-deploy.yml:** do not run npm install when stdin
  is empty ([2842a31][32])
- **package.json:** revert "test: peer dep install" ([4c174fe][33])
- **package.json:** test: peer dep install ([6c00005][34])

## [7.4.1][35] (2021-01-04)

### Bug Fixes

- **env-expect.js:** improve RegExp support; better debugging experience
  ([aff191d][36])

### Build System

- **.github/workflows/build-test-deploy.yml:** add improved npm install step
  ([e9b9e49][37])

# [7.4.0][38] (2021-01-04)

### Features

- **.github:** add codecov to externals; add flags to codecov ([e47160b][39])

# [7.3.0][40] (2021-01-04)

### Bug Fixes

- **env-expect.js:** simple RegExp names no longer error ([a576d0b][41])

### Build System

- **package.json:** better lint output ([0dc7c4e][42])

### Features

- **.github:** backport env matrix hint ([c01b325][43])
- **readme.md:** add NPM7 warning ([24f0888][44])

## [7.2.3][45] (2021-01-04)

### Build System

- Updates back-ported from package migration ([7869420][46])

## [7.2.2][47] (2021-01-03)

### Bug Fixes

- Add remark frontmatter support ([a8cd378][48])

## [7.2.1][49] (2021-01-03)

### Bug Fixes

- **templates:** fix strange issue template problems ([73edb9a][50])

# [7.2.0][51] (2021-01-03)

### Bug Fixes

- **changelog.md:** conclude tests _breaks champagne glass_ ([864253c][52])
- **workflows:** actually fix should-skip determination algo ([bf8c76b][53])
- **workflows:** fix should-skip determination algo ([f7d1256][54])

# [7.1.0][55] (2021-01-03)

### Bug Fixes

- **.github:** add set +e to should-skip ([27c9750][56])
- **readme.md:** complete skip test ([67264ed][57])
- **workflows:** replace should-skip determination algo ([cd6236a][58])

# [7.0.0][59] (2021-01-03)

### Features

- **changelog.md:** add skip cd/cd skip pipeline commands ([5765c02][60])

### BREAKING CHANGES

- **changelog.md:** **skip github/github skip options were removed**

## [6.7.3][61] (2021-01-03)

### Bug Fixes

- **.changelogrc.js:** show reverts in changelog ([ec26302][62])

### Reverts

- _"chore(changelog.md): update pipeline usage bullets"_ ([6e9fb73][63])

## [6.7.2][64] (2021-01-03)

### Reverts

- _"chore(readme.md): debug chore"_ ([38bfb77][65])
- _"debug(readme.md): debug debug"_ ([aff005d][66])

## [6.7.1][67] (2021-01-02)

### Bug Fixes

- **.changelogrc.js:** exclude pre-releases ([c24773e][68])
- **.changelogrc.js:** fix bad type bug ([ff94fe1][69])
- **.changelogrc.js:** several writer glitches fixed ([717ffdb][70])

### Build System

- **package.json:** better build-changelog ([f2e971e][71])

# [6.7.0][72] (2021-01-02)

### Features

- **.changelogrc.js:** reintroduced selective capitalization ([1fdcb9c][73])

# [6.6.0][74] (2021-01-02)

### Bug Fixes

- **.changelogrc.js:** correct improper array access ([0cb2645][75])

### Build System

- **.changelogrc.js:** fix revision filtering during generation ([ac06b33][76])
- **.changelogrc.js:** fix spread bug ([c6a3cd6][77])

### Features

- **.changelogrc.js:** centralize release rules ([69ec71f][78])
- **release.config.js:** use imported releaseRules ([2fe163c][79])

## [6.5.1][80] (2021-01-02)

### Bug Fixes

- **release.config.js:** add title to releaseRules objects ([99c2868][81])

### Build System

- **.changelogrc.js:** add debug output to .changelogrc.js ([d47c48b][82])

# [6.5.0][83] (2021-01-02)

### Features

- **.changelogrc.js:** add debug to all javascript ([54488d9][84])

## [6.4.3][85] (2021-01-02)

### Bug Fixes

- **build-test-deploy.yml:** debug pipeline statements always return true
  ([b759c31][86])

### Build System

- **.github:** fix debug scope name (leave / alone) ([de2c7b1][87])
- **package.json:** remove deploy test script ([4fb641c][88])

## [6.4.2][89] (2021-01-02)

### Build System

- **.github:** add DEBUG support to metadata gathering steps ([6b2e238][90])

## [6.4.1][91] (2021-01-02)

### Build System

- **.github/workflows/build-test-deploy.yml:** add DEBUG support ([de7ef33][92])
- **release.config.js:** fix bracket scoping issue ([c8ef15e][93])
- **release.config.js:** fix deploy to run at success step; add debug output
  ([b9e8cc5][94])

# [6.4.0][95] (2021-01-02)

### Features

- **package.json:** vercel deploy test ([ed73fc3][96])

## [6.3.8][97] (2021-01-02)

### Build System

- **build-test-deploy.yml:** add awareness of deploy npm script to pipeline
  ([d923b29][98])

## [6.3.7][99] (2021-01-02)

### Build System

- **.github/workflows/cleanup.yml:** fix metadata gathering step
  ([44dd462][100])

## [6.3.6][101] (2021-01-01)

### Build System

- **.github/workflows/cleanup.yml:** add metadata filtering step
  ([6667075][102])

## [6.3.5][103] (2021-01-01)

### Build System

- **.github:** fix hardcoded package name ([a10bac3][104])

## [6.3.4][105] (2021-01-01)

### Build System

- Move npm lint step before lint-staged in husky hook ([e8bac90][106])
- Update remark linting to exit 1 on error, quiet on success ([077abce][107])
- Update sort-package-json to contrib-env-expect ([6885a34][108])
- **pre-commit:** decentralize remark; more resilient build system
  ([ba0ef58][109])

## [6.3.3][110] (2021-01-01)

### Build System

- **pre-commit:** centralize remark; add markdown and eslint linting to CL
  ([772dee1][111])
- **pre-commit:** move eslint (and tsc) CL linting out of lint-staged and
  directly into husky ([e38af90][112])

## [6.3.2][113] (2021-01-01)

### Build System

- **.github:** fix pre/post formatting steps ([f757db8][114])

## [6.3.1][115] (2021-01-01)

### Bug Fixes

- **test:** improve test coverage ([7f4a70a][116])

# [6.3.0][117] (2021-01-01)

### Build System

- **package.json:** simplify lint ([dda943e][118])

### Features

- **src:** add div function ([636c353][119])

# [6.2.0][120] (2021-01-01)

### Build System

- **.github/workflows/build-test-deploy.yml:** add remark and formatting steps
  ([e16cd8b][121])
- **.husky:** remove verbose flag ([538c374][122])
- **package.json:** fix lint-staged remark and prettier ([6fbd1df][123])
- **package.json:** remove debug echo ([33a510d][124])
- **release.config.js:** fix to use gfm ([db4c284][125])

### Features

- **package.json:** add remark-gfm; test lint-staged ([bcbf3f5][126])

## [6.1.7][127] (2020-12-31)

### Bug Fixes

- **README.md:** simulated external-PR fix ([8a7fc06][128])

### Reverts

- _"chore(readme.md): format husky test"_ ([9675eeb][129])

## [6.1.6][130] (2020-12-30)

### Build System

- **package.json:** conclude dynamic continuous integration tests
  ([828751d][131])

## [6.1.5][132] (2020-12-30)

### Bug Fixes

- **build-test-deploy.yml:** clearer error language with invalid externals
  config ([d8ed033][133])

## [6.1.4][134] (2020-12-30)

### Reverts

- _"build(build-test-deploy.yml): debug should warn"_ ([44f5cd4][135])

## [6.1.3][136] (2020-12-30)

### Build System

- **build-test-deploy.yml:** debug should warn ([55e1235][137])
- **build-test-deploy.yml:** fix syntax error ([5448960][138])

## [6.1.2][139] (2020-12-30)

### Build System

- **.github:** better snyk ignore ([5921653][140])
- **package.json:** remove high audit CI failure ([b2ea6f1][141])
- **package.json:** test high audit CI failure ([03825f0][142])

## [6.1.1][143] (2020-12-30)

### Bug Fixes

- **readme.md:** dummy fix ([bda2d5e][144])

# [6.1.0][145] (2020-12-30)

### Bug Fixes

- **readme.md:** dummy fix ([b9d92fd][146])

### Features

- **readme.md:** dummy feat ([f90dde3][147])

## [6.0.5][148] (2020-12-30)

### Bug Fixes

- **readme.md:** add codecov badge ([4b6c84c][149])

## [6.0.4][150] (2020-12-30)

### Build System

- **.github:** more resilient cleanup routine ([85b8e12][151])

## [6.0.3][152] (2020-12-30)

### Build System

- **.github:** better cleanup caching ([02746df][153])
- **.github:** fix cleanup ([7520e0f][154])

## [6.0.2][155] (2020-12-30)

### Build System

- **cleanup.yml:** add cleanup workflow ([747a674][156])
- **release.config.js:** remove console.info ([b374296][157])

## [6.0.1][158] (2020-12-30)

### Build System

- **.github:** ensure deploy stage is using latest node and npm ([d40192b][159])

# [6.0.0][160] (2020-12-30)

### Features

- **readme.md:** fake feature ([95a13d2][161])

### BREAKING CHANGES

- **readme.md:** **fake breaking change**

## [5.0.3][162] (2020-12-29)

### Build System

- **.github:** loosen CD pipeline launch check: run CD on all branches
  ([0a91fad][163])

### Reverts

- _"chore(.gitignore): ignore coverage"_ ([4aab0bd][164])

## [5.0.2][165] (2020-12-29)

### Build System

- **.github:** add codecov config and add fetch-depth to test-unit
  ([e62c5b4][166])

## [5.0.1][167] (2020-12-29)

### Build System

- **.github:** add codecov-action to test-unit job ([2ef6297][168])
- **package.json:** add codecov package ([d73cac9][169])
- **package.json:** remove codecov package ([da477b7][170])

# [5.0.0][171] (2020-12-29)

### Chore

- Fix capitalization of non-release commit types ([7391321][172])

### BREAKING CHANGES

- **Dummy BC 7**
- **Dummy BC 9**
- **Dummy BCs 10, 8, and 6**

# [4.0.0][173] (2020-12-29)

### Bug Fixes

- **.changelogrc.js:** remove BC capitalization and sentence-case code
  ([02662fc][174])

### Chore

- Update comment language ([5a2aef4][175])

### BREAKING CHANGES

- **Dummy BC 1**
- **Dummy BC 2**
- **Dummy BCs 3, 4, and 5**

## [3.0.1][176] (2020-12-28)

### Bug Fixes

- **.github:** update ci committer name and email to xunn-bot ([b151491][177])
- **package.json:** update typedoc to latest beta and fix npmbd ([783ba76][178])

### Build System

- **package.json:** update deps ([a876517][179])

# [3.0.0][180] (2020-12-07)

### Bug Fixes

- **.github/workflows:** fix syntax: "no-ci/\*\*" ([b060d3e][181])
- **config:** rename changelog.config.js to .changelogrc.js ([d5dfc50][182])
- **package.json:** use @xunnamius/semantic-release ([0447d59][183])

### Build System

- **.github/workflows:** build system now ignores branches with names that begin
  with "no-ci/" ([3a4bdff][184])
- **.github/workflows:** workflow no longer triggered on tag push,
  dependabot/snyk push ([1096e6f][185])
- **package-lock.json:** fix syntax error ([4fd2952][186])

### Debug

- Update semantic-release to Xunnamius/semantic-release#contrib-holistic
  ([446e961][187])

### Features

- Added mult function ([e537358][188])

### Reverts

- _"chore(.github/workflows): exclude ./.git from build caching"_
  ([b75d8ac][189])
- _"debug(.github/workflows): fake change"_ ([d59bb1a][190])
- _"debug(.github/workflows): test force push protection"_ ([4cc6ee6][191])

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

## [2.3.4][192] (2020-12-03)

### Build System

- **commitlint:** add debug type to type-enum ([10c71bf][193])
- **config:** fix changelog.config.js bug when subject is undefined
  ([57e0c16][194])
- **package.json:** downgrade puppeteer and upgrade other deps ([e5d6d42][195])
- Added .env.example and env-expect ([efb29c5][196])

### Reverts

- revert "debug: switch actions ci to install" ([f9a3e23][197])

## [2.3.3][198] (2020-11-30)

### Bug Fixes

- **spellcheck:** fix incorrect parsing of global cspell vscode settings
  ([c2789bf][199])

### Build System

- **release:** fix changelogTitle skip title ([1dcdcc1][200])

## [2.3.2][201] (2020-11-30)

### Build System

- **release:** fix changelogTitle spread bug ([598a396][202])

## [2.3.1][203] (2020-11-30)

### Build System

- Install @semantic-release/changelog ([022603b][204])
- **release:** fix changelogTitle bug ([0d181ea][205])
- **release:** fix SHOULD_UPDATE_CHANGELOG conditional ([ec632ad][206])

# [2.3.0][207] (2020-11-30)

### Features

- **tooling:** spellcheck now ignores camelCase et al ([d921382][208])

### Performance Improvements

- Better faster spellchecking ([c44c310][209])

## [2.2.2][210] (2020-11-29)

### Build System

- **changelog:** changelog now includes relevant build-type commits
  ([d630264][211])

## [2.2.1][212] (2020-11-29)

### Build System

- **changelog:** changelog now includes relevant reverts ([d4ccacb][213])

# [2.2.0][214] (2020-11-29)

### Bug Fixes

- **actions:** bring metadata collection in-line with new format
  ([a62380b][215])
- **config:** changelog config honors skip commands, leaves reverts alone
  ([823f8b5][216])
- **config:** fix broken changelog.config.js structure ([bd10f44][217])
- **package.json:** downgrade typedoc and assoc plugins ([46db2ee][218])
- **package.json:** install lint-staged dep and script ([f3800e4][219])
- **package.json:** install spellcheck dependencies ([9a7adb4][220])
- **spellcheck:** change "contains" to "includes" ([af76dbe][221])
- **spellcheck:** fix bug where spellcheck reads from wrong message source
  ([69a25ba][222])
- **spellcheck:** spellcheck now leverages assorted knowledge ([14b86ae][223])

### Build System

- Install @semantic-release/exec ([cc94940][224])
- **config:** fix changelog.config.js operating on individual releases
  ([66adf2f][225])
- **config:** fix husky pre-commit hook ([f0d0032][226])
- **config:** generate CHANGELOG.md beautifully ([2fa4aa9][227])
- **config:** retire @semantic-release/changelog ([787a281][228])

### Features

- Add build-changelog to npm scripts ([8393a87][229])

## [2.1.4][230] (2020-11-28)

### Bug Fixes

- **actions:** ensure metadata is gathered properly ([31ece1c][231])
- **release:** remove extra newlines during changelogs generation
  ([72acb24][232])

## [2.1.3][233] (2020-11-28)

### Bug Fixes

- **release:** update how changelogs are generated ([8ce1760][234])

## [2.1.2][235] (2020-11-28)

### Bug Fixes

- **actions:** remove erroneous build-dist from lint job ([2cdd373][236])
- **actions:** remove erroneous build-dist from test-unit job ([fcb2232][237])
- **config:** fix babel.config.js with NODE_LTS ([cdf4610][238])

## [2.1.1][239] (2020-11-26)

### Bug Fixes

- **actions:** update gather-metadata with more accurate grep ([961ecef][240])

# [2.1.0][241] (2020-11-25)

### Bug Fixes

- **actions:** gather-metadata steps gather and skip properly ([97682f4][242])
- **actions:** if statements now use | instead of > ([24e3739][243])
- **actions:** move comments out of multiline statements ([874f8d6][244])

### Features

- **actions:** introduce new streamlined workflow job configuration
  ([4bb9d94][245])

## [2.0.1][246] (2020-11-24)

### Bug Fixes

- **actions:** add git author and commiter env vars for semantic-release signed
  commits ([f01d16b][247])
- **dependabot:** ensure dependabot formats GitHub Actions PRs correctly
  ([bcdbd0e][248])
- Add build commits to release rule ([3124ab0][249])

# [2.0.0][250] (2020-11-24)

### Bug Fixes

- **actions:** add install-dependencies to semantic-release needs
  ([d8cc836][251])
- **actions:** deps caching done properly ([bbe0416][252])
- **actions:** ensure repo is always checked out first ([65e5d46][253])
- **actions:** removed signed pushes ([f621f76][254])
- **package.json:** do not guess error codes ([f5428c8][255])
- **package.json:** ensure machine-friendly run-script syntax ([7af5e45][256])
- **package.json:** ensure set +e used in run-scripts when necessary
  ([6d86c0b][257])
- **package.json:** precedence error caused bad return value in lint
  ([e8bfbc5][258])

### Features

- Added diff to take the difference ([5e40deb][259])

### Performance Improvements

- **actions:** better caching ([6da0a65][260])
- **actions:** made test-integration-chrome independent ([d489cfa][261])
- **actions:** only cache node_modules ([57775c9][262])

### Reverts

- _"debug: added debug step"_ ([1741cde][263])
- _"debug: debug cache miss"_ ([42af347][264])

### BREAKING CHANGES

- **Switch to semantic-release CI/CD pipeline**

Moved away from publish-please to a fully automated build-test-deploy release
cycle based on semantic-release.

# Archived Releases (pre-CI/CD)

- Version 1.0.15 ([57faa2c][265])

<!---->

- Version 1.0.7 ([5ced626][266])

- Version 1.0.0 ([df91d82][267])

[1]: https://github.com/Xunnamius/workflow-playground/compare/v7.5.6...v7.5.7
[2]:
  https://github.com/Xunnamius/workflow-playground/commit/51123db7bc0a158d3849f99de64fbe1691011fdd
[3]: https://github.com/Xunnamius/workflow-playground/compare/v7.5.5...v7.5.6
[4]:
  https://github.com/Xunnamius/workflow-playground/commit/31f61f5dc94357a5950d2b2fe90ef9e6268e4ee4
[5]: https://github.com/Xunnamius/workflow-playground/compare/v7.5.4...v7.5.5
[6]:
  https://github.com/Xunnamius/workflow-playground/commit/7212561b4cf094f47169b7b38e9ae4a9550e569b
[7]: https://github.com/Xunnamius/workflow-playground/compare/v7.5.3...v7.5.4
[8]:
  https://github.com/Xunnamius/workflow-playground/commit/ed31f79e0ebe97823e2a62b9e6aa7b3e2355ff7c
[9]: https://github.com/Xunnamius/workflow-playground/compare/v7.5.2...v7.5.3
[10]:
  https://github.com/Xunnamius/workflow-playground/commit/8a051d1222ed6df2d1c9e1f2e2eb890d763a6333
[11]: https://github.com/Xunnamius/workflow-playground/compare/v7.5.1...v7.5.2
[12]:
  https://github.com/Xunnamius/workflow-playground/commit/2cf6e46a6fe59b8a47123f2215ba8caf7976ad87
[13]: https://github.com/Xunnamius/workflow-playground/compare/v7.5.0...v7.5.1
[14]:
  https://github.com/Xunnamius/workflow-playground/commit/cb77d20313504c4cb25f082680fe321d6409a421
[15]:
  https://github.com/Xunnamius/workflow-playground/commit/6c1c4d48ea0ca4b60135976a0186152b97a31ec7
[16]:
  https://github.com/Xunnamius/workflow-playground/commit/c7556314894b98e9d727c27096e69695b5eb46fa
[17]:
  https://github.com/Xunnamius/workflow-playground/commit/3fdd509eac028d1eecd953ba4bc0931460aafeb9
[18]:
  https://github.com/Xunnamius/workflow-playground/commit/eda277e8f0a37e171bc329c9c6fc2e8c2d028396
[19]:
  https://github.com/Xunnamius/workflow-playground/commit/0f401ffec3ebdd4736b3ef0aa52419293f5ad599
[20]: https://github.com/Xunnamius/workflow-playground/compare/v7.4.5...v7.5.0
[21]:
  https://github.com/Xunnamius/workflow-playground/commit/77c033ff143dff64455049b8314cd528bae4e198
[22]: https://github.com/Xunnamius/workflow-playground/compare/v7.4.4...v7.4.5
[23]:
  https://github.com/Xunnamius/workflow-playground/commit/677b4cedff4d3e4541736e612035d909a0df6131
[24]: https://github.com/Xunnamius/workflow-playground/compare/v7.4.3...v7.4.4
[25]:
  https://github.com/Xunnamius/workflow-playground/commit/5c8fefa330e31620fe2af848d42eb2c5ab881d02
[26]: https://github.com/Xunnamius/workflow-playground/compare/v7.4.2...v7.4.3
[27]:
  https://github.com/Xunnamius/workflow-playground/commit/09304d7cbeea2f0b6f938a907fa1f2351ae51a5b
[28]:
  https://github.com/Xunnamius/workflow-playground/commit/c247c7a353a522de79dcf677994c278dfc993d65
[29]:
  https://github.com/Xunnamius/workflow-playground/commit/6eb7d4120f89cd1aaa0f0be2216ae327c66546cb
[30]:
  https://github.com/Xunnamius/workflow-playground/commit/0528db62704fb9d6a5139c60f131c432a23eeaa0
[31]: https://github.com/Xunnamius/workflow-playground/compare/v7.4.1...v7.4.2
[32]:
  https://github.com/Xunnamius/workflow-playground/commit/2842a3173829dc06bef77cb0b039ad584681f414
[33]:
  https://github.com/Xunnamius/workflow-playground/commit/4c174fe72d1a8f7e731b0a78d713223308015256
[34]:
  https://github.com/Xunnamius/workflow-playground/commit/6c000053c1b04088ed83b5690b4317bfa56e8d39
[35]: https://github.com/Xunnamius/workflow-playground/compare/v7.4.0...v7.4.1
[36]:
  https://github.com/Xunnamius/workflow-playground/commit/aff191d1d036b9098493a3057927d24b3a175f1f
[37]:
  https://github.com/Xunnamius/workflow-playground/commit/e9b9e49f60737401c2d524ef21674a75d89f02a4
[38]: https://github.com/Xunnamius/workflow-playground/compare/v7.3.0...v7.4.0
[39]:
  https://github.com/Xunnamius/workflow-playground/commit/e47160b09b956e69f0d9eb0cab01a3440bb66645
[40]: https://github.com/Xunnamius/workflow-playground/compare/v7.2.3...v7.3.0
[41]:
  https://github.com/Xunnamius/workflow-playground/commit/a576d0b3e2a3e3f3cd4b0007ccd024f206877fbe
[42]:
  https://github.com/Xunnamius/workflow-playground/commit/0dc7c4eef97a021462e54b1d00cd789544202d9e
[43]:
  https://github.com/Xunnamius/workflow-playground/commit/c01b325ea28e7b4cf940e622faf7c805e42c5880
[44]:
  https://github.com/Xunnamius/workflow-playground/commit/24f088811ed253dac8791e85d27aa2c194111328
[45]: https://github.com/Xunnamius/workflow-playground/compare/v7.2.2...v7.2.3
[46]:
  https://github.com/Xunnamius/workflow-playground/commit/786942001834cb5337fabf921cbc14ea4cc04d2f
[47]: https://github.com/Xunnamius/workflow-playground/compare/v7.2.1...v7.2.2
[48]:
  https://github.com/Xunnamius/workflow-playground/commit/a8cd37812dc9e304bf813c742b2d4d54c1c9c183
[49]: https://github.com/Xunnamius/workflow-playground/compare/v7.2.0...v7.2.1
[50]:
  https://github.com/Xunnamius/workflow-playground/commit/73edb9a864bbc4b7d5a7eb1d03ca4ce3b8e02e95
[51]: https://github.com/Xunnamius/workflow-playground/compare/v7.1.0...v7.2.0
[52]:
  https://github.com/Xunnamius/workflow-playground/commit/864253c3a63de8cbb6577244c8a419ea8a97decd
[53]:
  https://github.com/Xunnamius/workflow-playground/commit/bf8c76bc12c51476719204c44b25c361b7258e90
[54]:
  https://github.com/Xunnamius/workflow-playground/commit/f7d12565f96e1626ffa393ba4ac39786197818e7
[55]: https://github.com/Xunnamius/workflow-playground/compare/v7.0.0...v7.1.0
[56]:
  https://github.com/Xunnamius/workflow-playground/commit/27c97500ced2ef3085ce5bf984ccfa3e2bf5e04f
[57]:
  https://github.com/Xunnamius/workflow-playground/commit/67264ed159f3686a5f89fda5cec5f07d465af49e
[58]:
  https://github.com/Xunnamius/workflow-playground/commit/cd6236ad92608b126f7b8df52693f75db28b488d
[59]: https://github.com/Xunnamius/workflow-playground/compare/v6.7.3...v7.0.0
[60]:
  https://github.com/Xunnamius/workflow-playground/commit/5765c024e82c3e7e0c77808e3860c85fb8c8d759
[61]: https://github.com/Xunnamius/workflow-playground/compare/v6.7.2...v6.7.3
[62]:
  https://github.com/Xunnamius/workflow-playground/commit/ec263026c77f36f1b15c67e102f42300108a43ce
[63]:
  https://github.com/Xunnamius/workflow-playground/commit/6e9fb7333b29c973517b6c2813c162f0c00c0f4b
[64]: https://github.com/Xunnamius/workflow-playground/compare/v6.7.1...v6.7.2
[65]:
  https://github.com/Xunnamius/workflow-playground/commit/38bfb775cde6952a35a7daca6ad3e191cc0fa37b
[66]:
  https://github.com/Xunnamius/workflow-playground/commit/aff005d252799e06e7a84aab1b5f88af62cf8901
[67]: https://github.com/Xunnamius/workflow-playground/compare/v6.7.0...v6.7.1
[68]:
  https://github.com/Xunnamius/workflow-playground/commit/c24773e0265cc559ad8b6596dd3d97740f18e64f
[69]:
  https://github.com/Xunnamius/workflow-playground/commit/ff94fe15bb18f2cc1d545a0b7948d0e818b48ae9
[70]:
  https://github.com/Xunnamius/workflow-playground/commit/717ffdb672294ccca92a87d368777e09d35a2ab6
[71]:
  https://github.com/Xunnamius/workflow-playground/commit/f2e971ece7f3b60647ab3584db988dd8cbfd5d97
[72]: https://github.com/Xunnamius/workflow-playground/compare/v6.6.0...v6.7.0
[73]:
  https://github.com/Xunnamius/workflow-playground/commit/1fdcb9c6c500f88fbc2b7b6ec7f427f0a4995080
[74]: https://github.com/Xunnamius/workflow-playground/compare/v6.5.1...v6.6.0
[75]:
  https://github.com/Xunnamius/workflow-playground/commit/0cb26453351737c2ff0476b02f76ca82e3087f88
[76]:
  https://github.com/Xunnamius/workflow-playground/commit/ac06b3300ed526f58f26a18e4a5465f9e6ee8f13
[77]:
  https://github.com/Xunnamius/workflow-playground/commit/c6a3cd632cf814ca9d103bb4868ecafd032ed527
[78]:
  https://github.com/Xunnamius/workflow-playground/commit/69ec71f088e1e162cf7695940b92e3637941e452
[79]:
  https://github.com/Xunnamius/workflow-playground/commit/2fe163c01107f6a1a31fddb871a6eae27f07fd3f
[80]: https://github.com/Xunnamius/workflow-playground/compare/v6.5.0...v6.5.1
[81]:
  https://github.com/Xunnamius/workflow-playground/commit/99c2868b2682621a350c02665199a6132c3a8ec8
[82]:
  https://github.com/Xunnamius/workflow-playground/commit/d47c48bccb6110aca895d2472d611cd95134e156
[83]: https://github.com/Xunnamius/workflow-playground/compare/v6.4.3...v6.5.0
[84]:
  https://github.com/Xunnamius/workflow-playground/commit/54488d92317360c2e358bca9238e60e2daca64dd
[85]: https://github.com/Xunnamius/workflow-playground/compare/v6.4.2...v6.4.3
[86]:
  https://github.com/Xunnamius/workflow-playground/commit/b759c31195eb816c8c7fec1d18f89d85ed437ff1
[87]:
  https://github.com/Xunnamius/workflow-playground/commit/de2c7b1582b0ea20213ab5f761e7dc9994183f50
[88]:
  https://github.com/Xunnamius/workflow-playground/commit/4fb641cc202f3a510389566ce55415686bbc6a4e
[89]: https://github.com/Xunnamius/workflow-playground/compare/v6.4.1...v6.4.2
[90]:
  https://github.com/Xunnamius/workflow-playground/commit/6b2e2383ef2b54a56a665e6b9ecef7d93e5fec2e
[91]: https://github.com/Xunnamius/workflow-playground/compare/v6.4.0...v6.4.1
[92]:
  https://github.com/Xunnamius/workflow-playground/commit/de7ef33e1d74831b441e909c4e628527ed2900c0
[93]:
  https://github.com/Xunnamius/workflow-playground/commit/c8ef15e813811f037acd12133f485bd8435ac9cc
[94]:
  https://github.com/Xunnamius/workflow-playground/commit/b9e8cc58ea93099742c91d7431687965e131a3df
[95]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.8...v6.4.0
[96]:
  https://github.com/Xunnamius/workflow-playground/commit/ed73fc3e5c9c7f0f621802e9ea429dcfca36bf52
[97]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.7...v6.3.8
[98]:
  https://github.com/Xunnamius/workflow-playground/commit/d923b299e05789a20a08dc2e4059e5e6e1099658
[99]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.6...v6.3.7
[100]:
  https://github.com/Xunnamius/workflow-playground/commit/44dd46246911a9cb58baf0ec0b84aa5093f2628e
[101]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.5...v6.3.6
[102]:
  https://github.com/Xunnamius/workflow-playground/commit/66670754987250b92806dfa7d94c1cb46349f07f
[103]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.4...v6.3.5
[104]:
  https://github.com/Xunnamius/workflow-playground/commit/a10bac3efbce2b4bd511420fd4d7466c288d9706
[105]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.3...v6.3.4
[106]:
  https://github.com/Xunnamius/workflow-playground/commit/e8bac90bb68b79d4c4ab1853bdd4c45dddef44fe
[107]:
  https://github.com/Xunnamius/workflow-playground/commit/077abcea8df04b8b6cf292f97d0e4b37cda28f7b
[108]:
  https://github.com/Xunnamius/workflow-playground/commit/6885a3467c42b61e1edb93fed363ceca6ff15b28
[109]:
  https://github.com/Xunnamius/workflow-playground/commit/ba0ef5863ce550a6988ce259d7500807bdaa5db8
[110]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.2...v6.3.3
[111]:
  https://github.com/Xunnamius/workflow-playground/commit/772dee15ff4eaeba84f8327f30c69868c5e514c8
[112]:
  https://github.com/Xunnamius/workflow-playground/commit/e38af90e7720f08f46d6220168226336e6c040d4
[113]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.1...v6.3.2
[114]:
  https://github.com/Xunnamius/workflow-playground/commit/f757db8f0e97286abda30b825de9f803cd63c097
[115]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.0...v6.3.1
[116]:
  https://github.com/Xunnamius/workflow-playground/commit/7f4a70af17528c36e80440827663251f79c9c1be
[117]: https://github.com/Xunnamius/workflow-playground/compare/v6.2.0...v6.3.0
[118]:
  https://github.com/Xunnamius/workflow-playground/commit/dda943e24fcd164ae850feb1f1bd16924b773773
[119]:
  https://github.com/Xunnamius/workflow-playground/commit/636c35303cb5d04d239b13e89a3040e483c81cf7
[120]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.7...v6.2.0
[121]:
  https://github.com/Xunnamius/workflow-playground/commit/e16cd8b559096a076739d79a15ff79e5efa7f581
[122]:
  https://github.com/Xunnamius/workflow-playground/commit/538c374e597751bc198b6d52bc0a8fa41de6494d
[123]:
  https://github.com/Xunnamius/workflow-playground/commit/6fbd1df74d4bc1a7ad852e76e8fa805138d95657
[124]:
  https://github.com/Xunnamius/workflow-playground/commit/33a510dce4dcaf004732e739e3e9c3d12518646a
[125]:
  https://github.com/Xunnamius/workflow-playground/commit/db4c284e914688911f1b0d75c569b83a198113c2
[126]:
  https://github.com/Xunnamius/workflow-playground/commit/bcbf3f5cc2d0bba5f282de657977ab44c70b1bfe
[127]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.6...v6.1.7
[128]:
  https://github.com/Xunnamius/workflow-playground/commit/8a7fc06df25ffa5381bb5d771eb6e5a619fcbf64
[129]:
  https://github.com/Xunnamius/workflow-playground/commit/9675eeb1a06b715fea6cd9024cf94aa31d44943c
[130]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.5...v6.1.6
[131]:
  https://github.com/Xunnamius/workflow-playground/commit/828751d051d5cff15c5d1315fc9729d82cab985f
[132]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.4...v6.1.5
[133]:
  https://github.com/Xunnamius/workflow-playground/commit/d8ed033ead9608349f2d876c4cecebecd65dc47f
[134]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.3...v6.1.4
[135]:
  https://github.com/Xunnamius/workflow-playground/commit/44f5cd4c3c6adeb548ba89adba8e884336f41520
[136]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.2...v6.1.3
[137]:
  https://github.com/Xunnamius/workflow-playground/commit/55e1235d39714dd00c146549f630ec62f4952e2d
[138]:
  https://github.com/Xunnamius/workflow-playground/commit/5448960531a3bd19cc38de44f13519a8888e342a
[139]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.1...v6.1.2
[140]:
  https://github.com/Xunnamius/workflow-playground/commit/5921653ac2c26273eace14aa3e4994960be521a0
[141]:
  https://github.com/Xunnamius/workflow-playground/commit/b2ea6f13a5c7d7c8d89f76b6ced72c938448a235
[142]:
  https://github.com/Xunnamius/workflow-playground/commit/03825f051d3ed50dad916f0e3f3993a0fb3c51ce
[143]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.0...v6.1.1
[144]:
  https://github.com/Xunnamius/workflow-playground/commit/bda2d5ea408563874429d8ed8e30455d5e717a54
[145]: https://github.com/Xunnamius/workflow-playground/compare/v6.0.5...v6.1.0
[146]:
  https://github.com/Xunnamius/workflow-playground/commit/b9d92fdd4f2d594a62fce6d16299152c79a43566
[147]:
  https://github.com/Xunnamius/workflow-playground/commit/f90dde35c32e676c765b131ddfa135246ad7f7eb
[148]: https://github.com/Xunnamius/workflow-playground/compare/v6.0.4...v6.0.5
[149]:
  https://github.com/Xunnamius/workflow-playground/commit/4b6c84c788c4105db8a1ddd10ecb044be31876f9
[150]: https://github.com/Xunnamius/workflow-playground/compare/v6.0.3...v6.0.4
[151]:
  https://github.com/Xunnamius/workflow-playground/commit/85b8e12e1bce4baa22bd301da9dda21ea289fd9d
[152]: https://github.com/Xunnamius/workflow-playground/compare/v6.0.2...v6.0.3
[153]:
  https://github.com/Xunnamius/workflow-playground/commit/02746df97d17f717de608d4b5cc3838e2992a150
[154]:
  https://github.com/Xunnamius/workflow-playground/commit/7520e0fc29f22ef537fc947a5f32d6b6bc762cc5
[155]: https://github.com/Xunnamius/workflow-playground/compare/v6.0.1...v6.0.2
[156]:
  https://github.com/Xunnamius/workflow-playground/commit/747a6742dabcc6cdc8fd835b2f673e355f212cdf
[157]:
  https://github.com/Xunnamius/workflow-playground/commit/b3742961a2824618bf68953c532055a04ef03920
[158]: https://github.com/Xunnamius/workflow-playground/compare/v6.0.0...v6.0.1
[159]:
  https://github.com/Xunnamius/workflow-playground/commit/d40192bd13d9b301e09723cdca68be60b44b5d82
[160]: https://github.com/Xunnamius/workflow-playground/compare/v5.0.3...v6.0.0
[161]:
  https://github.com/Xunnamius/workflow-playground/commit/95a13d21dd902a490d445d3c8aee89c59b2131f1
[162]: https://github.com/Xunnamius/workflow-playground/compare/v5.0.2...v5.0.3
[163]:
  https://github.com/Xunnamius/workflow-playground/commit/0a91fad0d4f6c41c600294b8ecfc84b16e906980
[164]:
  https://github.com/Xunnamius/workflow-playground/commit/4aab0bda87d426f81663773342f77bf661c79ce0
[165]: https://github.com/Xunnamius/workflow-playground/compare/v5.0.1...v5.0.2
[166]:
  https://github.com/Xunnamius/workflow-playground/commit/e62c5b42ca2b43326cc9eec8db248020b2d90ec8
[167]: https://github.com/Xunnamius/workflow-playground/compare/v5.0.0...v5.0.1
[168]:
  https://github.com/Xunnamius/workflow-playground/commit/2ef6297d257bcd1661093eed5069714382f01f36
[169]:
  https://github.com/Xunnamius/workflow-playground/commit/d73cac91012e0a32ee1f52a3b476b8639f325ca2
[170]:
  https://github.com/Xunnamius/workflow-playground/commit/da477b770bc7b17db8eb474eb523e8468881e447
[171]: https://github.com/Xunnamius/workflow-playground/compare/v4.0.0...v5.0.0
[172]:
  https://github.com/Xunnamius/workflow-playground/commit/7391321c8da14ed35a865a4e245db2ae3b72a606
[173]: https://github.com/Xunnamius/workflow-playground/compare/v3.0.1...v4.0.0
[174]:
  https://github.com/Xunnamius/workflow-playground/commit/02662fcac7c02ac3f5a32dba750e00d23d6c88f2
[175]:
  https://github.com/Xunnamius/workflow-playground/commit/5a2aef4cebc6ed136fa3fb5015f38f47de8ce781
[176]: https://github.com/Xunnamius/workflow-playground/compare/v3.0.0...v3.0.1
[177]:
  https://github.com/Xunnamius/workflow-playground/commit/b15149139462980707fc8ec6d7d67414ac207e6e
[178]:
  https://github.com/Xunnamius/workflow-playground/commit/783ba76db816b0cc391450d442c708420203c46c
[179]:
  https://github.com/Xunnamius/workflow-playground/commit/a876517a6ea8b339e8c0eca9f7763bcc85919f87
[180]: https://github.com/Xunnamius/workflow-playground/compare/v2.3.4...v3.0.0
[181]:
  https://github.com/Xunnamius/workflow-playground/commit/b060d3ec78744b72bd53450ecd1664110cdebda8
[182]:
  https://github.com/Xunnamius/workflow-playground/commit/d5dfc506c9d68a0f299559b5e76c92630c9edf0a
[183]:
  https://github.com/Xunnamius/workflow-playground/commit/0447d5959113f033e2ed5644efdb4c80c4fe5085
[184]:
  https://github.com/Xunnamius/workflow-playground/commit/3a4bdff03f0d8ea450f53aebceb33525801b3c34
[185]:
  https://github.com/Xunnamius/workflow-playground/commit/1096e6fbfff5fd399c2f1af5fe2b6496c5ca3cfe
[186]:
  https://github.com/Xunnamius/workflow-playground/commit/4fd2952e78b5cfda17a84a538bcc382d06621926
[187]:
  https://github.com/Xunnamius/workflow-playground/commit/446e961cee1326be7db4085f118447ac30f15078
[188]:
  https://github.com/Xunnamius/workflow-playground/commit/e537358218a8abcc97008f5460b37a1949dd0681
[189]:
  https://github.com/Xunnamius/workflow-playground/commit/b75d8ac9bb35a28aa8ebbe8dc52589bc7783d0cd
[190]:
  https://github.com/Xunnamius/workflow-playground/commit/d59bb1a385279427ee93ac6babbc2a8f7544e599
[191]:
  https://github.com/Xunnamius/workflow-playground/commit/4cc6ee68cec6500f99e918443fee5deae32a9f0a
[192]: https://github.com/Xunnamius/workflow-playground/compare/v2.3.3...v2.3.4
[193]:
  https://github.com/Xunnamius/workflow-playground/commit/10c71bf50522ae3902f84cf6171b9fce4d1470f4
[194]:
  https://github.com/Xunnamius/workflow-playground/commit/57e0c162e73d5850807e9f496df0aa6203834f4c
[195]:
  https://github.com/Xunnamius/workflow-playground/commit/e5d6d42ad230f45b0239bcec671a18a2789ae8f2
[196]:
  https://github.com/Xunnamius/workflow-playground/commit/efb29c5c991d58ae8aa684159f4db0d3f8f6dbbe
[197]:
  https://github.com/Xunnamius/workflow-playground/commit/f9a3e231bf5b99619d5aabccdba6f6299642b6e9
[198]: https://github.com/Xunnamius/workflow-playground/compare/v2.3.2...v2.3.3
[199]:
  https://github.com/Xunnamius/workflow-playground/commit/c2789bfd8f43bb9fc60316131c4e6d17dd2c1de8
[200]:
  https://github.com/Xunnamius/workflow-playground/commit/1dcdcc1cac342f9bdca71e49f9cc332e9118932f
[201]: https://github.com/Xunnamius/workflow-playground/compare/v2.3.1...v2.3.2
[202]:
  https://github.com/Xunnamius/workflow-playground/commit/598a3966ce1d85c6dcc2945878ebd3ba2c969654
[203]: https://github.com/Xunnamius/workflow-playground/compare/v2.3.0...v2.3.1
[204]:
  https://github.com/Xunnamius/workflow-playground/commit/022603bbe50298a8e7500a77cb77ce5aae4b45f7
[205]:
  https://github.com/Xunnamius/workflow-playground/commit/0d181ea032a9f5322137dacf5ee97e6a28acd035
[206]:
  https://github.com/Xunnamius/workflow-playground/commit/ec632ad52472184edbed16111b4a5b306ae6f7ed
[207]: https://github.com/Xunnamius/workflow-playground/compare/v2.2.2...v2.3.0
[208]:
  https://github.com/Xunnamius/workflow-playground/commit/d9213827f9448a93affcab8ca652e37f24b247b9
[209]:
  https://github.com/Xunnamius/workflow-playground/commit/c44c310f01d78798c5a13213dafeef5e1f25b25f
[210]: https://github.com/Xunnamius/workflow-playground/compare/v2.2.1...v2.2.2
[211]:
  https://github.com/Xunnamius/workflow-playground/commit/d630264d1ee046ddf943ad287b15f5308ce4c224
[212]: https://github.com/Xunnamius/workflow-playground/compare/v2.2.0...v2.2.1
[213]:
  https://github.com/Xunnamius/workflow-playground/commit/d4ccacb6533b04c4889b909ecd2bffd4c7b5fa79
[214]: https://github.com/Xunnamius/workflow-playground/compare/v2.1.4...v2.2.0
[215]:
  https://github.com/Xunnamius/workflow-playground/commit/a62380bc4f75c42d74640916fde44fb5811f150d
[216]:
  https://github.com/Xunnamius/workflow-playground/commit/823f8b5434e07250b8aefbd9f4a49e0ea05cc9e5
[217]:
  https://github.com/Xunnamius/workflow-playground/commit/bd10f4414522a0c6b406adb2fba9d58abee6830e
[218]:
  https://github.com/Xunnamius/workflow-playground/commit/46db2ee7335e9b37cfafce98776171304f0072b7
[219]:
  https://github.com/Xunnamius/workflow-playground/commit/f3800e471e93308b37eb2668dd5c4bfde9e7b88e
[220]:
  https://github.com/Xunnamius/workflow-playground/commit/9a7adb4fb9592328efd3b33bc156b87f89a59ffb
[221]:
  https://github.com/Xunnamius/workflow-playground/commit/af76dbe52921aed27c4cf275875de9c1194561d4
[222]:
  https://github.com/Xunnamius/workflow-playground/commit/69a25baa21133345e2a2baffd2f69d0abe950c02
[223]:
  https://github.com/Xunnamius/workflow-playground/commit/14b86ae815f2c24aef82dcad41b0ead036a2f4c4
[224]:
  https://github.com/Xunnamius/workflow-playground/commit/cc94940e7b903a141f4e16a4169411c0a45bfb96
[225]:
  https://github.com/Xunnamius/workflow-playground/commit/66adf2f3d8ea4bd1813fac4c704ff327ac175855
[226]:
  https://github.com/Xunnamius/workflow-playground/commit/f0d0032fb51ddb98b2f35b229c9d1873c00264f7
[227]:
  https://github.com/Xunnamius/workflow-playground/commit/2fa4aa962a17c6075d28af876f67fe98d0f519b6
[228]:
  https://github.com/Xunnamius/workflow-playground/commit/787a28144826609ddffb5e0d1937f314b1039ab6
[229]:
  https://github.com/Xunnamius/workflow-playground/commit/8393a87974cea60087a8d11fc9b0bac0f7ecc6e2
[230]: https://github.com/Xunnamius/workflow-playground/compare/v2.1.3...v2.1.4
[231]:
  https://github.com/Xunnamius/workflow-playground/commit/31ece1cb7d0b91bbc38b1c3eb6366c13d1da7fd2
[232]:
  https://github.com/Xunnamius/workflow-playground/commit/72acb24c0c521217fb8eebb5204ddf1591808326
[233]: https://github.com/Xunnamius/workflow-playground/compare/v2.1.2...v2.1.3
[234]:
  https://github.com/Xunnamius/workflow-playground/commit/8ce176044293af0ac3b5dd2495d7d0eb580bbede
[235]: https://github.com/Xunnamius/workflow-playground/compare/v2.1.1...v2.1.2
[236]:
  https://github.com/Xunnamius/workflow-playground/commit/2cdd373974fdc62480e5681813c09cba98aebddc
[237]:
  https://github.com/Xunnamius/workflow-playground/commit/fcb2232cf6e628f58033a78a0d6aa107f9794589
[238]:
  https://github.com/Xunnamius/workflow-playground/commit/cdf46102e7d5b590bd153d2444cb13c24d4170b3
[239]: https://github.com/Xunnamius/workflow-playground/compare/v2.1.0...v2.1.1
[240]:
  https://github.com/Xunnamius/workflow-playground/commit/961ecef3555403928cf319012ca6bd40093da66e
[241]: https://github.com/Xunnamius/workflow-playground/compare/v2.0.1...v2.1.0
[242]:
  https://github.com/Xunnamius/workflow-playground/commit/97682f434acc501e4964c31770472acae0320ad5
[243]:
  https://github.com/Xunnamius/workflow-playground/commit/24e373907b23a68627fe535049f603c93bfa1361
[244]:
  https://github.com/Xunnamius/workflow-playground/commit/874f8d65aff5d8e27e14e8d9e4a0e37450713ce0
[245]:
  https://github.com/Xunnamius/workflow-playground/commit/4bb9d94050d1b8fb164bdf04b1bffa10705aa0a2
[246]: https://github.com/Xunnamius/workflow-playground/compare/v2.0.0...v2.0.1
[247]:
  https://github.com/Xunnamius/workflow-playground/commit/f01d16b51e444eb801121e81718994b4add18799
[248]:
  https://github.com/Xunnamius/workflow-playground/commit/bcdbd0e1c23786185cd43b11d9ce18d3498e9ff5
[249]:
  https://github.com/Xunnamius/workflow-playground/commit/3124ab0500924ce75f3387d59d5d60ea3e77c827
[250]: https://github.com/Xunnamius/workflow-playground/compare/v1.0.15...v2.0.0
[251]:
  https://github.com/Xunnamius/workflow-playground/commit/d8cc83611de2a595631f42bee0f10591b11bc59c
[252]:
  https://github.com/Xunnamius/workflow-playground/commit/bbe0416125a303076bc3f8a5a96c9669db926b46
[253]:
  https://github.com/Xunnamius/workflow-playground/commit/65e5d463925b888e08dd69a9da7f4e9f4c9be872
[254]:
  https://github.com/Xunnamius/workflow-playground/commit/f621f76895e6a0749f76a6a1abd90253b8694717
[255]:
  https://github.com/Xunnamius/workflow-playground/commit/f5428c87836552db96d40310c52abd47e593e729
[256]:
  https://github.com/Xunnamius/workflow-playground/commit/7af5e45eb0712da5d80022cedd535a673082d195
[257]:
  https://github.com/Xunnamius/workflow-playground/commit/6d86c0b4ce2218a93f9919a256a89a04af83a9d1
[258]:
  https://github.com/Xunnamius/workflow-playground/commit/e8bfbc590ec8ac73071ae61708c1ca29f2beee36
[259]:
  https://github.com/Xunnamius/workflow-playground/commit/5e40deb020c4bafb103a6bc78fbeecb266a5c983
[260]:
  https://github.com/Xunnamius/workflow-playground/commit/6da0a656aba20f022d26335ec33c9c4c4ea37c02
[261]:
  https://github.com/Xunnamius/workflow-playground/commit/d489cfacd8514a210ec0b570ab3c5a283cf5bc19
[262]:
  https://github.com/Xunnamius/workflow-playground/commit/57775c9cc3ffdad94f09b23923785a081e2a08ee
[263]:
  https://github.com/Xunnamius/workflow-playground/commit/1741cde56623bdb6e3e0c1dc95dcbe094b197ebe
[264]:
  https://github.com/Xunnamius/workflow-playground/commit/42af3470f3e91e5d359d995888c83534b8d32060
[265]:
  https://github.com/Xunnamius/workflow-playground/commit/57faa2cc448f39383b56db04ec06b1093f5f7bcd
[266]:
  https://github.com/Xunnamius/workflow-playground/commit/5ced6267d44731337fe5e0a69776dd5642d8a54d
[267]:
  https://github.com/Xunnamius/workflow-playground/commit/df91d8298edd2d756f732b2245ba086e91197505
[268]: https://conventionalcommits.org
[269]: https://semver.org
[270]: https://github.com/Xunnamius/workflow-playground/compare/v7.5.7...v7.5.8
[271]:
  https://github.com/Xunnamius/workflow-playground/commit/3973279927772eea45ac8573c1a91dea3635c6eb
