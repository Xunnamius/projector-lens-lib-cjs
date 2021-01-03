# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Conventional Commits][214], and this project adheres to
[Semantic Versioning][215].

# [7.2.0][216] (2021-01-03)

### Bug Fixes

- **changelog.md:** conclude tests _breaks champagne glass_ ([864253c][217])
- **workflows:** actually fix should-skip determination algo ([bf8c76b][218])
- **workflows:** fix should-skip determination algo ([f7d1256][219])

# [7.1.0][1] (2021-01-03)

### Bug Fixes

- **.github:** add set +e to should-skip ([27c9750][2])
- **readme.md:** complete skip test ([67264ed][3])
- **workflows:** replace should-skip determination algo ([cd6236a][4])

# [7.0.0][5] (2021-01-03)

### Features

- **changelog.md:** add skip cd/cd skip pipeline commands ([5765c02][6])

### BREAKING CHANGES

- **changelog.md:** **skip github/github skip options were removed**

## [6.7.3][7] (2021-01-03)

### Bug Fixes

- **.changelogrc.js:** show reverts in changelog ([ec26302][8])

### Reverts

- _"chore(changelog.md): update pipeline usage bullets"_ ([6e9fb73][9])

## [6.7.2][10] (2021-01-03)

### Reverts

- _"chore(readme.md): debug chore"_ ([38bfb77][11])
- _"debug(readme.md): debug debug"_ ([aff005d][12])

## [6.7.1][13] (2021-01-02)

### Bug Fixes

- **.changelogrc.js:** exclude pre-releases ([c24773e][14])
- **.changelogrc.js:** fix bad type bug ([ff94fe1][15])
- **.changelogrc.js:** several writer glitches fixed ([717ffdb][16])

### Build System

- **package.json:** better build-changelog ([f2e971e][17])

# [6.7.0][18] (2021-01-02)

### Features

- **.changelogrc.js:** reintroduced selective capitalization ([1fdcb9c][19])

# [6.6.0][20] (2021-01-02)

### Bug Fixes

- **.changelogrc.js:** correct improper array access ([0cb2645][21])

### Build System

- **.changelogrc.js:** fix revision filtering during generation ([ac06b33][22])
- **.changelogrc.js:** fix spread bug ([c6a3cd6][23])

### Features

- **.changelogrc.js:** centralize release rules ([69ec71f][24])
- **release.config.js:** use imported releaseRules ([2fe163c][25])

## [6.5.1][26] (2021-01-02)

### Bug Fixes

- **release.config.js:** add title to releaseRules objects ([99c2868][27])

### Build System

- **.changelogrc.js:** add debug output to .changelogrc.js ([d47c48b][28])

# [6.5.0][29] (2021-01-02)

### Features

- **.changelogrc.js:** add debug to all javascript ([54488d9][30])

## [6.4.3][31] (2021-01-02)

### Bug Fixes

- **build-test-deploy.yml:** debug pipeline statements always return true
  ([b759c31][32])

### Build System

- **.github:** fix debug scope name (leave / alone) ([de2c7b1][33])
- **package.json:** remove deploy test script ([4fb641c][34])

## [6.4.2][35] (2021-01-02)

### Build System

- **.github:** add DEBUG support to metadata gathering steps ([6b2e238][36])

## [6.4.1][37] (2021-01-02)

### Build System

- **.github/workflows/build-test-deploy.yml:** add DEBUG support ([de7ef33][38])
- **release.config.js:** fix bracket scoping issue ([c8ef15e][39])
- **release.config.js:** fix deploy to run at success step; add debug output
  ([b9e8cc5][40])

# [6.4.0][41] (2021-01-02)

### Features

- **package.json:** vercel deploy test ([ed73fc3][42])

## [6.3.8][43] (2021-01-02)

### Build System

- **build-test-deploy.yml:** add awareness of deploy npm script to pipeline
  ([d923b29][44])

## [6.3.7][45] (2021-01-02)

### Build System

- **.github/workflows/cleanup.yml:** fix metadata gathering step ([44dd462][46])

## [6.3.6][47] (2021-01-01)

### Build System

- **.github/workflows/cleanup.yml:** add metadata filtering step ([6667075][48])

## [6.3.5][49] (2021-01-01)

### Build System

- **.github:** fix hardcoded package name ([a10bac3][50])

## [6.3.4][51] (2021-01-01)

### Build System

- Move npm lint step before lint-staged in husky hook ([e8bac90][52])
- Update remark linting to exit 1 on error, quiet on success ([077abce][53])
- Update sort-package-json to contrib-env-expect ([6885a34][54])
- **pre-commit:** decentralize remark; more resilient build system
  ([ba0ef58][55])

## [6.3.3][56] (2021-01-01)

### Build System

- **pre-commit:** centralize remark; add markdown and eslint linting to CL
  ([772dee1][57])
- **pre-commit:** move eslint (and tsc) CL linting out of lint-staged and
  directly into husky ([e38af90][58])

## [6.3.2][59] (2021-01-01)

### Build System

- **.github:** fix pre/post formatting steps ([f757db8][60])

## [6.3.1][61] (2021-01-01)

### Bug Fixes

- **test:** improve test coverage ([7f4a70a][62])

# [6.3.0][63] (2021-01-01)

### Build System

- **package.json:** simplify lint ([dda943e][64])

### Features

- **src:** add div function ([636c353][65])

# [6.2.0][66] (2021-01-01)

### Build System

- **.github/workflows/build-test-deploy.yml:** add remark and formatting steps
  ([e16cd8b][67])
- **.husky:** remove verbose flag ([538c374][68])
- **package.json:** fix lint-staged remark and prettier ([6fbd1df][69])
- **package.json:** remove debug echo ([33a510d][70])
- **release.config.js:** fix to use gfm ([db4c284][71])

### Features

- **package.json:** add remark-gfm; test lint-staged ([bcbf3f5][72])

## [6.1.7][73] (2020-12-31)

### Bug Fixes

- **README.md:** simulated external-PR fix ([8a7fc06][74])

### Reverts

- _"chore(readme.md): format husky test"_ ([9675eeb][75])

## [6.1.6][76] (2020-12-30)

### Build System

- **package.json:** conclude dynamic continuous integration tests
  ([828751d][77])

## [6.1.5][78] (2020-12-30)

### Bug Fixes

- **build-test-deploy.yml:** clearer error language with invalid externals
  config ([d8ed033][79])

## [6.1.4][80] (2020-12-30)

### Reverts

- _"build(build-test-deploy.yml): debug should warn"_ ([44f5cd4][81])

## [6.1.3][82] (2020-12-30)

### Build System

- **build-test-deploy.yml:** debug should warn ([55e1235][83])
- **build-test-deploy.yml:** fix syntax error ([5448960][84])

## [6.1.2][85] (2020-12-30)

### Build System

- **.github:** better snyk ignore ([5921653][86])
- **package.json:** remove high audit CI failure ([b2ea6f1][87])
- **package.json:** test high audit CI failure ([03825f0][88])

## [6.1.1][89] (2020-12-30)

### Bug Fixes

- **readme.md:** dummy fix ([bda2d5e][90])

# [6.1.0][91] (2020-12-30)

### Bug Fixes

- **readme.md:** dummy fix ([b9d92fd][92])

### Features

- **readme.md:** dummy feat ([f90dde3][93])

## [6.0.5][94] (2020-12-30)

### Bug Fixes

- **readme.md:** add codecov badge ([4b6c84c][95])

## [6.0.4][96] (2020-12-30)

### Build System

- **.github:** more resilient cleanup routine ([85b8e12][97])

## [6.0.3][98] (2020-12-30)

### Build System

- **.github:** better cleanup caching ([02746df][99])
- **.github:** fix cleanup ([7520e0f][100])

## [6.0.2][101] (2020-12-30)

### Build System

- **cleanup.yml:** add cleanup workflow ([747a674][102])
- **release.config.js:** remove console.info ([b374296][103])

## [6.0.1][104] (2020-12-30)

### Build System

- **.github:** ensure deploy stage is using latest node and npm ([d40192b][105])

# [6.0.0][106] (2020-12-30)

### Features

- **readme.md:** fake feature ([95a13d2][107])

### BREAKING CHANGES

- **readme.md:** **fake breaking change**

## [5.0.3][108] (2020-12-29)

### Build System

- **.github:** loosen CD pipeline launch check: run CD on all branches
  ([0a91fad][109])

### Reverts

- _"chore(.gitignore): ignore coverage"_ ([4aab0bd][110])

## [5.0.2][111] (2020-12-29)

### Build System

- **.github:** add codecov config and add fetch-depth to test-unit
  ([e62c5b4][112])

## [5.0.1][113] (2020-12-29)

### Build System

- **.github:** add codecov-action to test-unit job ([2ef6297][114])
- **package.json:** add codecov package ([d73cac9][115])
- **package.json:** remove codecov package ([da477b7][116])

# [5.0.0][117] (2020-12-29)

### Chore

- Fix capitalization of non-release commit types ([7391321][118])

### BREAKING CHANGES

- **Dummy BC 7**
- **Dummy BC 9**
- **Dummy BCs 10, 8, and 6**

# [4.0.0][119] (2020-12-29)

### Bug Fixes

- **.changelogrc.js:** remove BC capitalization and sentence-case code
  ([02662fc][120])

### Chore

- Update comment language ([5a2aef4][121])

### BREAKING CHANGES

- **Dummy BC 1**
- **Dummy BC 2**
- **Dummy BCs 3, 4, and 5**

## [3.0.1][122] (2020-12-28)

### Bug Fixes

- **.github:** update ci committer name and email to xunn-bot ([b151491][123])
- **package.json:** update typedoc to latest beta and fix npmbd ([783ba76][124])

### Build System

- **package.json:** update deps ([a876517][125])

# [3.0.0][126] (2020-12-07)

### Bug Fixes

- **.github/workflows:** fix syntax: "no-ci/\*\*" ([b060d3e][127])
- **config:** rename changelog.config.js to .changelogrc.js ([d5dfc50][128])
- **package.json:** use @xunnamius/semantic-release ([0447d59][129])

### Build System

- **.github/workflows:** build system now ignores branches with names that begin
  with "no-ci/" ([3a4bdff][130])
- **.github/workflows:** workflow no longer triggered on tag push,
  dependabot/snyk push ([1096e6f][131])
- **package-lock.json:** fix syntax error ([4fd2952][132])

### Debug

- Update semantic-release to Xunnamius/semantic-release#contrib-holistic
  ([446e961][133])

### Features

- Added mult function ([e537358][134])

### Reverts

- _"chore(.github/workflows): exclude ./.git from build caching"_
  ([b75d8ac][135])
- _"debug(.github/workflows): fake change"_ ([d59bb1a][136])
- _"debug(.github/workflows): test force push protection"_ ([4cc6ee6][137])

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

## [2.3.4][138] (2020-12-03)

### Build System

- **commitlint:** add debug type to type-enum ([10c71bf][139])
- **config:** fix changelog.config.js bug when subject is undefined
  ([57e0c16][140])
- **package.json:** downgrade puppeteer and upgrade other deps ([e5d6d42][141])
- Added .env.example and env-expect ([efb29c5][142])

### Reverts

- revert "debug: switch actions ci to install" ([f9a3e23][143])

## [2.3.3][144] (2020-11-30)

### Bug Fixes

- **spellcheck:** fix incorrect parsing of global cspell vscode settings
  ([c2789bf][145])

### Build System

- **release:** fix changelogTitle skip title ([1dcdcc1][146])

## [2.3.2][147] (2020-11-30)

### Build System

- **release:** fix changelogTitle spread bug ([598a396][148])

## [2.3.1][149] (2020-11-30)

### Build System

- Install @semantic-release/changelog ([022603b][150])
- **release:** fix changelogTitle bug ([0d181ea][151])
- **release:** fix SHOULD_UPDATE_CHANGELOG conditional ([ec632ad][152])

# [2.3.0][153] (2020-11-30)

### Features

- **tooling:** spellcheck now ignores camelCase et al ([d921382][154])

### Performance Improvements

- Better faster spellchecking ([c44c310][155])

## [2.2.2][156] (2020-11-29)

### Build System

- **changelog:** changelog now includes relevant build-type commits
  ([d630264][157])

## [2.2.1][158] (2020-11-29)

### Build System

- **changelog:** changelog now includes relevant reverts ([d4ccacb][159])

# [2.2.0][160] (2020-11-29)

### Bug Fixes

- **actions:** bring metadata collection in-line with new format
  ([a62380b][161])
- **config:** changelog config honors skip commands, leaves reverts alone
  ([823f8b5][162])
- **config:** fix broken changelog.config.js structure ([bd10f44][163])
- **package.json:** downgrade typedoc and assoc plugins ([46db2ee][164])
- **package.json:** install lint-staged dep and script ([f3800e4][165])
- **package.json:** install spellcheck dependencies ([9a7adb4][166])
- **spellcheck:** change "contains" to "includes" ([af76dbe][167])
- **spellcheck:** fix bug where spellcheck reads from wrong message source
  ([69a25ba][168])
- **spellcheck:** spellcheck now leverages assorted knowledge ([14b86ae][169])

### Build System

- Install @semantic-release/exec ([cc94940][170])
- **config:** fix changelog.config.js operating on individual releases
  ([66adf2f][171])
- **config:** fix husky pre-commit hook ([f0d0032][172])
- **config:** generate CHANGELOG.md beautifully ([2fa4aa9][173])
- **config:** retire @semantic-release/changelog ([787a281][174])

### Features

- Add build-changelog to npm scripts ([8393a87][175])

## [2.1.4][176] (2020-11-28)

### Bug Fixes

- **actions:** ensure metadata is gathered properly ([31ece1c][177])
- **release:** remove extra newlines during changelogs generation
  ([72acb24][178])

## [2.1.3][179] (2020-11-28)

### Bug Fixes

- **release:** update how changelogs are generated ([8ce1760][180])

## [2.1.2][181] (2020-11-28)

### Bug Fixes

- **actions:** remove erroneous build-dist from lint job ([2cdd373][182])
- **actions:** remove erroneous build-dist from test-unit job ([fcb2232][183])
- **config:** fix babel.config.js with NODE_LTS ([cdf4610][184])

## [2.1.1][185] (2020-11-26)

### Bug Fixes

- **actions:** update gather-metadata with more accurate grep ([961ecef][186])

# [2.1.0][187] (2020-11-25)

### Bug Fixes

- **actions:** gather-metadata steps gather and skip properly ([97682f4][188])
- **actions:** if statements now use | instead of > ([24e3739][189])
- **actions:** move comments out of multiline statements ([874f8d6][190])

### Features

- **actions:** introduce new streamlined workflow job configuration
  ([4bb9d94][191])

## [2.0.1][192] (2020-11-24)

### Bug Fixes

- **actions:** add git author and commiter env vars for semantic-release signed
  commits ([f01d16b][193])
- **dependabot:** ensure dependabot formats GitHub Actions PRs correctly
  ([bcdbd0e][194])
- Add build commits to release rule ([3124ab0][195])

# [2.0.0][196] (2020-11-24)

### Bug Fixes

- **actions:** add install-dependencies to semantic-release needs
  ([d8cc836][197])
- **actions:** deps caching done properly ([bbe0416][198])
- **actions:** ensure repo is always checked out first ([65e5d46][199])
- **actions:** removed signed pushes ([f621f76][200])
- **package.json:** do not guess error codes ([f5428c8][201])
- **package.json:** ensure machine-friendly run-script syntax ([7af5e45][202])
- **package.json:** ensure set +e used in run-scripts when necessary
  ([6d86c0b][203])
- **package.json:** precedence error caused bad return value in lint
  ([e8bfbc5][204])

### Features

- Added diff to take the difference ([5e40deb][205])

### Performance Improvements

- **actions:** better caching ([6da0a65][206])
- **actions:** made test-integration-chrome independent ([d489cfa][207])
- **actions:** only cache node_modules ([57775c9][208])

### Reverts

- _"debug: added debug step"_ ([1741cde][209])
- _"debug: debug cache miss"_ ([42af347][210])

### BREAKING CHANGES

- **Switch to semantic-release CI/CD pipeline**

Moved away from publish-please to a fully automated build-test-deploy release
cycle based on semantic-release.

# Archived Releases (pre-CI/CD)

- Version 1.0.15 ([57faa2c][211])

<!---->

- Version 1.0.7 ([5ced626][212])

- Version 1.0.0 ([df91d82][213])

[1]: https://github.com/Xunnamius/workflow-playground/compare/v7.0.0...v7.1.0
[2]:
  https://github.com/Xunnamius/workflow-playground/commit/27c97500ced2ef3085ce5bf984ccfa3e2bf5e04f
[3]:
  https://github.com/Xunnamius/workflow-playground/commit/67264ed159f3686a5f89fda5cec5f07d465af49e
[4]:
  https://github.com/Xunnamius/workflow-playground/commit/cd6236ad92608b126f7b8df52693f75db28b488d
[5]: https://github.com/Xunnamius/workflow-playground/compare/v6.7.3...v7.0.0
[6]:
  https://github.com/Xunnamius/workflow-playground/commit/5765c024e82c3e7e0c77808e3860c85fb8c8d759
[7]: https://github.com/Xunnamius/workflow-playground/compare/v6.7.2...v6.7.3
[8]:
  https://github.com/Xunnamius/workflow-playground/commit/ec263026c77f36f1b15c67e102f42300108a43ce
[9]:
  https://github.com/Xunnamius/workflow-playground/commit/6e9fb7333b29c973517b6c2813c162f0c00c0f4b
[10]: https://github.com/Xunnamius/workflow-playground/compare/v6.7.1...v6.7.2
[11]:
  https://github.com/Xunnamius/workflow-playground/commit/38bfb775cde6952a35a7daca6ad3e191cc0fa37b
[12]:
  https://github.com/Xunnamius/workflow-playground/commit/aff005d252799e06e7a84aab1b5f88af62cf8901
[13]: https://github.com/Xunnamius/workflow-playground/compare/v6.7.0...v6.7.1
[14]:
  https://github.com/Xunnamius/workflow-playground/commit/c24773e0265cc559ad8b6596dd3d97740f18e64f
[15]:
  https://github.com/Xunnamius/workflow-playground/commit/ff94fe15bb18f2cc1d545a0b7948d0e818b48ae9
[16]:
  https://github.com/Xunnamius/workflow-playground/commit/717ffdb672294ccca92a87d368777e09d35a2ab6
[17]:
  https://github.com/Xunnamius/workflow-playground/commit/f2e971ece7f3b60647ab3584db988dd8cbfd5d97
[18]: https://github.com/Xunnamius/workflow-playground/compare/v6.6.0...v6.7.0
[19]:
  https://github.com/Xunnamius/workflow-playground/commit/1fdcb9c6c500f88fbc2b7b6ec7f427f0a4995080
[20]: https://github.com/Xunnamius/workflow-playground/compare/v6.5.1...v6.6.0
[21]:
  https://github.com/Xunnamius/workflow-playground/commit/0cb26453351737c2ff0476b02f76ca82e3087f88
[22]:
  https://github.com/Xunnamius/workflow-playground/commit/ac06b3300ed526f58f26a18e4a5465f9e6ee8f13
[23]:
  https://github.com/Xunnamius/workflow-playground/commit/c6a3cd632cf814ca9d103bb4868ecafd032ed527
[24]:
  https://github.com/Xunnamius/workflow-playground/commit/69ec71f088e1e162cf7695940b92e3637941e452
[25]:
  https://github.com/Xunnamius/workflow-playground/commit/2fe163c01107f6a1a31fddb871a6eae27f07fd3f
[26]: https://github.com/Xunnamius/workflow-playground/compare/v6.5.0...v6.5.1
[27]:
  https://github.com/Xunnamius/workflow-playground/commit/99c2868b2682621a350c02665199a6132c3a8ec8
[28]:
  https://github.com/Xunnamius/workflow-playground/commit/d47c48bccb6110aca895d2472d611cd95134e156
[29]: https://github.com/Xunnamius/workflow-playground/compare/v6.4.3...v6.5.0
[30]:
  https://github.com/Xunnamius/workflow-playground/commit/54488d92317360c2e358bca9238e60e2daca64dd
[31]: https://github.com/Xunnamius/workflow-playground/compare/v6.4.2...v6.4.3
[32]:
  https://github.com/Xunnamius/workflow-playground/commit/b759c31195eb816c8c7fec1d18f89d85ed437ff1
[33]:
  https://github.com/Xunnamius/workflow-playground/commit/de2c7b1582b0ea20213ab5f761e7dc9994183f50
[34]:
  https://github.com/Xunnamius/workflow-playground/commit/4fb641cc202f3a510389566ce55415686bbc6a4e
[35]: https://github.com/Xunnamius/workflow-playground/compare/v6.4.1...v6.4.2
[36]:
  https://github.com/Xunnamius/workflow-playground/commit/6b2e2383ef2b54a56a665e6b9ecef7d93e5fec2e
[37]: https://github.com/Xunnamius/workflow-playground/compare/v6.4.0...v6.4.1
[38]:
  https://github.com/Xunnamius/workflow-playground/commit/de7ef33e1d74831b441e909c4e628527ed2900c0
[39]:
  https://github.com/Xunnamius/workflow-playground/commit/c8ef15e813811f037acd12133f485bd8435ac9cc
[40]:
  https://github.com/Xunnamius/workflow-playground/commit/b9e8cc58ea93099742c91d7431687965e131a3df
[41]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.8...v6.4.0
[42]:
  https://github.com/Xunnamius/workflow-playground/commit/ed73fc3e5c9c7f0f621802e9ea429dcfca36bf52
[43]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.7...v6.3.8
[44]:
  https://github.com/Xunnamius/workflow-playground/commit/d923b299e05789a20a08dc2e4059e5e6e1099658
[45]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.6...v6.3.7
[46]:
  https://github.com/Xunnamius/workflow-playground/commit/44dd46246911a9cb58baf0ec0b84aa5093f2628e
[47]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.5...v6.3.6
[48]:
  https://github.com/Xunnamius/workflow-playground/commit/66670754987250b92806dfa7d94c1cb46349f07f
[49]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.4...v6.3.5
[50]:
  https://github.com/Xunnamius/workflow-playground/commit/a10bac3efbce2b4bd511420fd4d7466c288d9706
[51]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.3...v6.3.4
[52]:
  https://github.com/Xunnamius/workflow-playground/commit/e8bac90bb68b79d4c4ab1853bdd4c45dddef44fe
[53]:
  https://github.com/Xunnamius/workflow-playground/commit/077abcea8df04b8b6cf292f97d0e4b37cda28f7b
[54]:
  https://github.com/Xunnamius/workflow-playground/commit/6885a3467c42b61e1edb93fed363ceca6ff15b28
[55]:
  https://github.com/Xunnamius/workflow-playground/commit/ba0ef5863ce550a6988ce259d7500807bdaa5db8
[56]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.2...v6.3.3
[57]:
  https://github.com/Xunnamius/workflow-playground/commit/772dee15ff4eaeba84f8327f30c69868c5e514c8
[58]:
  https://github.com/Xunnamius/workflow-playground/commit/e38af90e7720f08f46d6220168226336e6c040d4
[59]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.1...v6.3.2
[60]:
  https://github.com/Xunnamius/workflow-playground/commit/f757db8f0e97286abda30b825de9f803cd63c097
[61]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.0...v6.3.1
[62]:
  https://github.com/Xunnamius/workflow-playground/commit/7f4a70af17528c36e80440827663251f79c9c1be
[63]: https://github.com/Xunnamius/workflow-playground/compare/v6.2.0...v6.3.0
[64]:
  https://github.com/Xunnamius/workflow-playground/commit/dda943e24fcd164ae850feb1f1bd16924b773773
[65]:
  https://github.com/Xunnamius/workflow-playground/commit/636c35303cb5d04d239b13e89a3040e483c81cf7
[66]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.7...v6.2.0
[67]:
  https://github.com/Xunnamius/workflow-playground/commit/e16cd8b559096a076739d79a15ff79e5efa7f581
[68]:
  https://github.com/Xunnamius/workflow-playground/commit/538c374e597751bc198b6d52bc0a8fa41de6494d
[69]:
  https://github.com/Xunnamius/workflow-playground/commit/6fbd1df74d4bc1a7ad852e76e8fa805138d95657
[70]:
  https://github.com/Xunnamius/workflow-playground/commit/33a510dce4dcaf004732e739e3e9c3d12518646a
[71]:
  https://github.com/Xunnamius/workflow-playground/commit/db4c284e914688911f1b0d75c569b83a198113c2
[72]:
  https://github.com/Xunnamius/workflow-playground/commit/bcbf3f5cc2d0bba5f282de657977ab44c70b1bfe
[73]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.6...v6.1.7
[74]:
  https://github.com/Xunnamius/workflow-playground/commit/8a7fc06df25ffa5381bb5d771eb6e5a619fcbf64
[75]:
  https://github.com/Xunnamius/workflow-playground/commit/9675eeb1a06b715fea6cd9024cf94aa31d44943c
[76]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.5...v6.1.6
[77]:
  https://github.com/Xunnamius/workflow-playground/commit/828751d051d5cff15c5d1315fc9729d82cab985f
[78]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.4...v6.1.5
[79]:
  https://github.com/Xunnamius/workflow-playground/commit/d8ed033ead9608349f2d876c4cecebecd65dc47f
[80]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.3...v6.1.4
[81]:
  https://github.com/Xunnamius/workflow-playground/commit/44f5cd4c3c6adeb548ba89adba8e884336f41520
[82]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.2...v6.1.3
[83]:
  https://github.com/Xunnamius/workflow-playground/commit/55e1235d39714dd00c146549f630ec62f4952e2d
[84]:
  https://github.com/Xunnamius/workflow-playground/commit/5448960531a3bd19cc38de44f13519a8888e342a
[85]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.1...v6.1.2
[86]:
  https://github.com/Xunnamius/workflow-playground/commit/5921653ac2c26273eace14aa3e4994960be521a0
[87]:
  https://github.com/Xunnamius/workflow-playground/commit/b2ea6f13a5c7d7c8d89f76b6ced72c938448a235
[88]:
  https://github.com/Xunnamius/workflow-playground/commit/03825f051d3ed50dad916f0e3f3993a0fb3c51ce
[89]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.0...v6.1.1
[90]:
  https://github.com/Xunnamius/workflow-playground/commit/bda2d5ea408563874429d8ed8e30455d5e717a54
[91]: https://github.com/Xunnamius/workflow-playground/compare/v6.0.5...v6.1.0
[92]:
  https://github.com/Xunnamius/workflow-playground/commit/b9d92fdd4f2d594a62fce6d16299152c79a43566
[93]:
  https://github.com/Xunnamius/workflow-playground/commit/f90dde35c32e676c765b131ddfa135246ad7f7eb
[94]: https://github.com/Xunnamius/workflow-playground/compare/v6.0.4...v6.0.5
[95]:
  https://github.com/Xunnamius/workflow-playground/commit/4b6c84c788c4105db8a1ddd10ecb044be31876f9
[96]: https://github.com/Xunnamius/workflow-playground/compare/v6.0.3...v6.0.4
[97]:
  https://github.com/Xunnamius/workflow-playground/commit/85b8e12e1bce4baa22bd301da9dda21ea289fd9d
[98]: https://github.com/Xunnamius/workflow-playground/compare/v6.0.2...v6.0.3
[99]:
  https://github.com/Xunnamius/workflow-playground/commit/02746df97d17f717de608d4b5cc3838e2992a150
[100]:
  https://github.com/Xunnamius/workflow-playground/commit/7520e0fc29f22ef537fc947a5f32d6b6bc762cc5
[101]: https://github.com/Xunnamius/workflow-playground/compare/v6.0.1...v6.0.2
[102]:
  https://github.com/Xunnamius/workflow-playground/commit/747a6742dabcc6cdc8fd835b2f673e355f212cdf
[103]:
  https://github.com/Xunnamius/workflow-playground/commit/b3742961a2824618bf68953c532055a04ef03920
[104]: https://github.com/Xunnamius/workflow-playground/compare/v6.0.0...v6.0.1
[105]:
  https://github.com/Xunnamius/workflow-playground/commit/d40192bd13d9b301e09723cdca68be60b44b5d82
[106]: https://github.com/Xunnamius/workflow-playground/compare/v5.0.3...v6.0.0
[107]:
  https://github.com/Xunnamius/workflow-playground/commit/95a13d21dd902a490d445d3c8aee89c59b2131f1
[108]: https://github.com/Xunnamius/workflow-playground/compare/v5.0.2...v5.0.3
[109]:
  https://github.com/Xunnamius/workflow-playground/commit/0a91fad0d4f6c41c600294b8ecfc84b16e906980
[110]:
  https://github.com/Xunnamius/workflow-playground/commit/4aab0bda87d426f81663773342f77bf661c79ce0
[111]: https://github.com/Xunnamius/workflow-playground/compare/v5.0.1...v5.0.2
[112]:
  https://github.com/Xunnamius/workflow-playground/commit/e62c5b42ca2b43326cc9eec8db248020b2d90ec8
[113]: https://github.com/Xunnamius/workflow-playground/compare/v5.0.0...v5.0.1
[114]:
  https://github.com/Xunnamius/workflow-playground/commit/2ef6297d257bcd1661093eed5069714382f01f36
[115]:
  https://github.com/Xunnamius/workflow-playground/commit/d73cac91012e0a32ee1f52a3b476b8639f325ca2
[116]:
  https://github.com/Xunnamius/workflow-playground/commit/da477b770bc7b17db8eb474eb523e8468881e447
[117]: https://github.com/Xunnamius/workflow-playground/compare/v4.0.0...v5.0.0
[118]:
  https://github.com/Xunnamius/workflow-playground/commit/7391321c8da14ed35a865a4e245db2ae3b72a606
[119]: https://github.com/Xunnamius/workflow-playground/compare/v3.0.1...v4.0.0
[120]:
  https://github.com/Xunnamius/workflow-playground/commit/02662fcac7c02ac3f5a32dba750e00d23d6c88f2
[121]:
  https://github.com/Xunnamius/workflow-playground/commit/5a2aef4cebc6ed136fa3fb5015f38f47de8ce781
[122]: https://github.com/Xunnamius/workflow-playground/compare/v3.0.0...v3.0.1
[123]:
  https://github.com/Xunnamius/workflow-playground/commit/b15149139462980707fc8ec6d7d67414ac207e6e
[124]:
  https://github.com/Xunnamius/workflow-playground/commit/783ba76db816b0cc391450d442c708420203c46c
[125]:
  https://github.com/Xunnamius/workflow-playground/commit/a876517a6ea8b339e8c0eca9f7763bcc85919f87
[126]: https://github.com/Xunnamius/workflow-playground/compare/v2.3.4...v3.0.0
[127]:
  https://github.com/Xunnamius/workflow-playground/commit/b060d3ec78744b72bd53450ecd1664110cdebda8
[128]:
  https://github.com/Xunnamius/workflow-playground/commit/d5dfc506c9d68a0f299559b5e76c92630c9edf0a
[129]:
  https://github.com/Xunnamius/workflow-playground/commit/0447d5959113f033e2ed5644efdb4c80c4fe5085
[130]:
  https://github.com/Xunnamius/workflow-playground/commit/3a4bdff03f0d8ea450f53aebceb33525801b3c34
[131]:
  https://github.com/Xunnamius/workflow-playground/commit/1096e6fbfff5fd399c2f1af5fe2b6496c5ca3cfe
[132]:
  https://github.com/Xunnamius/workflow-playground/commit/4fd2952e78b5cfda17a84a538bcc382d06621926
[133]:
  https://github.com/Xunnamius/workflow-playground/commit/446e961cee1326be7db4085f118447ac30f15078
[134]:
  https://github.com/Xunnamius/workflow-playground/commit/e537358218a8abcc97008f5460b37a1949dd0681
[135]:
  https://github.com/Xunnamius/workflow-playground/commit/b75d8ac9bb35a28aa8ebbe8dc52589bc7783d0cd
[136]:
  https://github.com/Xunnamius/workflow-playground/commit/d59bb1a385279427ee93ac6babbc2a8f7544e599
[137]:
  https://github.com/Xunnamius/workflow-playground/commit/4cc6ee68cec6500f99e918443fee5deae32a9f0a
[138]: https://github.com/Xunnamius/workflow-playground/compare/v2.3.3...v2.3.4
[139]:
  https://github.com/Xunnamius/workflow-playground/commit/10c71bf50522ae3902f84cf6171b9fce4d1470f4
[140]:
  https://github.com/Xunnamius/workflow-playground/commit/57e0c162e73d5850807e9f496df0aa6203834f4c
[141]:
  https://github.com/Xunnamius/workflow-playground/commit/e5d6d42ad230f45b0239bcec671a18a2789ae8f2
[142]:
  https://github.com/Xunnamius/workflow-playground/commit/efb29c5c991d58ae8aa684159f4db0d3f8f6dbbe
[143]:
  https://github.com/Xunnamius/workflow-playground/commit/f9a3e231bf5b99619d5aabccdba6f6299642b6e9
[144]: https://github.com/Xunnamius/workflow-playground/compare/v2.3.2...v2.3.3
[145]:
  https://github.com/Xunnamius/workflow-playground/commit/c2789bfd8f43bb9fc60316131c4e6d17dd2c1de8
[146]:
  https://github.com/Xunnamius/workflow-playground/commit/1dcdcc1cac342f9bdca71e49f9cc332e9118932f
[147]: https://github.com/Xunnamius/workflow-playground/compare/v2.3.1...v2.3.2
[148]:
  https://github.com/Xunnamius/workflow-playground/commit/598a3966ce1d85c6dcc2945878ebd3ba2c969654
[149]: https://github.com/Xunnamius/workflow-playground/compare/v2.3.0...v2.3.1
[150]:
  https://github.com/Xunnamius/workflow-playground/commit/022603bbe50298a8e7500a77cb77ce5aae4b45f7
[151]:
  https://github.com/Xunnamius/workflow-playground/commit/0d181ea032a9f5322137dacf5ee97e6a28acd035
[152]:
  https://github.com/Xunnamius/workflow-playground/commit/ec632ad52472184edbed16111b4a5b306ae6f7ed
[153]: https://github.com/Xunnamius/workflow-playground/compare/v2.2.2...v2.3.0
[154]:
  https://github.com/Xunnamius/workflow-playground/commit/d9213827f9448a93affcab8ca652e37f24b247b9
[155]:
  https://github.com/Xunnamius/workflow-playground/commit/c44c310f01d78798c5a13213dafeef5e1f25b25f
[156]: https://github.com/Xunnamius/workflow-playground/compare/v2.2.1...v2.2.2
[157]:
  https://github.com/Xunnamius/workflow-playground/commit/d630264d1ee046ddf943ad287b15f5308ce4c224
[158]: https://github.com/Xunnamius/workflow-playground/compare/v2.2.0...v2.2.1
[159]:
  https://github.com/Xunnamius/workflow-playground/commit/d4ccacb6533b04c4889b909ecd2bffd4c7b5fa79
[160]: https://github.com/Xunnamius/workflow-playground/compare/v2.1.4...v2.2.0
[161]:
  https://github.com/Xunnamius/workflow-playground/commit/a62380bc4f75c42d74640916fde44fb5811f150d
[162]:
  https://github.com/Xunnamius/workflow-playground/commit/823f8b5434e07250b8aefbd9f4a49e0ea05cc9e5
[163]:
  https://github.com/Xunnamius/workflow-playground/commit/bd10f4414522a0c6b406adb2fba9d58abee6830e
[164]:
  https://github.com/Xunnamius/workflow-playground/commit/46db2ee7335e9b37cfafce98776171304f0072b7
[165]:
  https://github.com/Xunnamius/workflow-playground/commit/f3800e471e93308b37eb2668dd5c4bfde9e7b88e
[166]:
  https://github.com/Xunnamius/workflow-playground/commit/9a7adb4fb9592328efd3b33bc156b87f89a59ffb
[167]:
  https://github.com/Xunnamius/workflow-playground/commit/af76dbe52921aed27c4cf275875de9c1194561d4
[168]:
  https://github.com/Xunnamius/workflow-playground/commit/69a25baa21133345e2a2baffd2f69d0abe950c02
[169]:
  https://github.com/Xunnamius/workflow-playground/commit/14b86ae815f2c24aef82dcad41b0ead036a2f4c4
[170]:
  https://github.com/Xunnamius/workflow-playground/commit/cc94940e7b903a141f4e16a4169411c0a45bfb96
[171]:
  https://github.com/Xunnamius/workflow-playground/commit/66adf2f3d8ea4bd1813fac4c704ff327ac175855
[172]:
  https://github.com/Xunnamius/workflow-playground/commit/f0d0032fb51ddb98b2f35b229c9d1873c00264f7
[173]:
  https://github.com/Xunnamius/workflow-playground/commit/2fa4aa962a17c6075d28af876f67fe98d0f519b6
[174]:
  https://github.com/Xunnamius/workflow-playground/commit/787a28144826609ddffb5e0d1937f314b1039ab6
[175]:
  https://github.com/Xunnamius/workflow-playground/commit/8393a87974cea60087a8d11fc9b0bac0f7ecc6e2
[176]: https://github.com/Xunnamius/workflow-playground/compare/v2.1.3...v2.1.4
[177]:
  https://github.com/Xunnamius/workflow-playground/commit/31ece1cb7d0b91bbc38b1c3eb6366c13d1da7fd2
[178]:
  https://github.com/Xunnamius/workflow-playground/commit/72acb24c0c521217fb8eebb5204ddf1591808326
[179]: https://github.com/Xunnamius/workflow-playground/compare/v2.1.2...v2.1.3
[180]:
  https://github.com/Xunnamius/workflow-playground/commit/8ce176044293af0ac3b5dd2495d7d0eb580bbede
[181]: https://github.com/Xunnamius/workflow-playground/compare/v2.1.1...v2.1.2
[182]:
  https://github.com/Xunnamius/workflow-playground/commit/2cdd373974fdc62480e5681813c09cba98aebddc
[183]:
  https://github.com/Xunnamius/workflow-playground/commit/fcb2232cf6e628f58033a78a0d6aa107f9794589
[184]:
  https://github.com/Xunnamius/workflow-playground/commit/cdf46102e7d5b590bd153d2444cb13c24d4170b3
[185]: https://github.com/Xunnamius/workflow-playground/compare/v2.1.0...v2.1.1
[186]:
  https://github.com/Xunnamius/workflow-playground/commit/961ecef3555403928cf319012ca6bd40093da66e
[187]: https://github.com/Xunnamius/workflow-playground/compare/v2.0.1...v2.1.0
[188]:
  https://github.com/Xunnamius/workflow-playground/commit/97682f434acc501e4964c31770472acae0320ad5
[189]:
  https://github.com/Xunnamius/workflow-playground/commit/24e373907b23a68627fe535049f603c93bfa1361
[190]:
  https://github.com/Xunnamius/workflow-playground/commit/874f8d65aff5d8e27e14e8d9e4a0e37450713ce0
[191]:
  https://github.com/Xunnamius/workflow-playground/commit/4bb9d94050d1b8fb164bdf04b1bffa10705aa0a2
[192]: https://github.com/Xunnamius/workflow-playground/compare/v2.0.0...v2.0.1
[193]:
  https://github.com/Xunnamius/workflow-playground/commit/f01d16b51e444eb801121e81718994b4add18799
[194]:
  https://github.com/Xunnamius/workflow-playground/commit/bcdbd0e1c23786185cd43b11d9ce18d3498e9ff5
[195]:
  https://github.com/Xunnamius/workflow-playground/commit/3124ab0500924ce75f3387d59d5d60ea3e77c827
[196]: https://github.com/Xunnamius/workflow-playground/compare/v1.0.15...v2.0.0
[197]:
  https://github.com/Xunnamius/workflow-playground/commit/d8cc83611de2a595631f42bee0f10591b11bc59c
[198]:
  https://github.com/Xunnamius/workflow-playground/commit/bbe0416125a303076bc3f8a5a96c9669db926b46
[199]:
  https://github.com/Xunnamius/workflow-playground/commit/65e5d463925b888e08dd69a9da7f4e9f4c9be872
[200]:
  https://github.com/Xunnamius/workflow-playground/commit/f621f76895e6a0749f76a6a1abd90253b8694717
[201]:
  https://github.com/Xunnamius/workflow-playground/commit/f5428c87836552db96d40310c52abd47e593e729
[202]:
  https://github.com/Xunnamius/workflow-playground/commit/7af5e45eb0712da5d80022cedd535a673082d195
[203]:
  https://github.com/Xunnamius/workflow-playground/commit/6d86c0b4ce2218a93f9919a256a89a04af83a9d1
[204]:
  https://github.com/Xunnamius/workflow-playground/commit/e8bfbc590ec8ac73071ae61708c1ca29f2beee36
[205]:
  https://github.com/Xunnamius/workflow-playground/commit/5e40deb020c4bafb103a6bc78fbeecb266a5c983
[206]:
  https://github.com/Xunnamius/workflow-playground/commit/6da0a656aba20f022d26335ec33c9c4c4ea37c02
[207]:
  https://github.com/Xunnamius/workflow-playground/commit/d489cfacd8514a210ec0b570ab3c5a283cf5bc19
[208]:
  https://github.com/Xunnamius/workflow-playground/commit/57775c9cc3ffdad94f09b23923785a081e2a08ee
[209]:
  https://github.com/Xunnamius/workflow-playground/commit/1741cde56623bdb6e3e0c1dc95dcbe094b197ebe
[210]:
  https://github.com/Xunnamius/workflow-playground/commit/42af3470f3e91e5d359d995888c83534b8d32060
[211]:
  https://github.com/Xunnamius/workflow-playground/commit/57faa2cc448f39383b56db04ec06b1093f5f7bcd
[212]:
  https://github.com/Xunnamius/workflow-playground/commit/5ced6267d44731337fe5e0a69776dd5642d8a54d
[213]:
  https://github.com/Xunnamius/workflow-playground/commit/df91d8298edd2d756f732b2245ba086e91197505
[214]: https://conventionalcommits.org
[215]: https://semver.org
[216]: https://github.com/Xunnamius/workflow-playground/compare/v7.1.0...v7.2.0
[217]:
  https://github.com/Xunnamius/workflow-playground/commit/864253c3a63de8cbb6577244c8a419ea8a97decd
[218]:
  https://github.com/Xunnamius/workflow-playground/commit/bf8c76bc12c51476719204c44b25c361b7258e90
[219]:
  https://github.com/Xunnamius/workflow-playground/commit/f7d12565f96e1626ffa393ba4ac39786197818e7
