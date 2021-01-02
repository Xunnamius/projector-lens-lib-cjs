# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Conventional Commits][1], and this project adheres to
[Semantic Versioning][2].

## [6.4.2][3] (2021-01-02)

### Build System

- **.github:** add DEBUG support to metadata gathering steps ([6b2e238][4])

## [6.4.1][5] (2021-01-02)

### Build System

- **.github/workflows/build-test-deploy.yml:** add DEBUG support ([de7ef33][6])
- **release.config.js:** fix bracket scoping issue ([c8ef15e][7])
- **release.config.js:** fix deploy to run at success step; add debug output
  ([b9e8cc5][8])

# [6.4.0][9] (2021-01-02)

### Features

- **package.json:** vercel deploy test ([ed73fc3][10])

## [6.3.8][11] (2021-01-02)

### Build System

- **build-test-deploy.yml:** add awareness of deploy npm script to pipeline
  ([d923b29][12])

## [6.3.7][13] (2021-01-02)

### Build System

- **.github/workflows/cleanup.yml:** fix metadata gathering step ([44dd462][14])

## [6.3.6][15] (2021-01-01)

### Build System

- **.github/workflows/cleanup.yml:** add metadata filtering step ([6667075][16])

## [6.3.5][17] (2021-01-01)

### Build System

- **.github:** fix hardcoded package name ([a10bac3][18])

## [6.3.4][19] (2021-01-01)

### Build System

- move npm lint step before lint-staged in husky hook ([e8bac90][20])
- update remark linting to exit 1 on error, quiet on success ([077abce][21])
- update sort-package-json to contrib-env-expect ([6885a34][22])
- **pre-commit:** decentralize remark; more resilient build system
  ([ba0ef58][23])

## [6.3.3][24] (2021-01-01)

### Build System

- **pre-commit:** centralize remark; add markdown and eslint linting to CL
  ([772dee1][25])
- **pre-commit:** move eslint (and tsc) CL linting out of lint-staged and
  directly into husky ([e38af90][26])

## [6.3.2][27] (2021-01-01)

### Build System

- **.github:** fix pre/post formatting steps ([f757db8][28])

## [6.3.1][29] (2021-01-01)

### Bug Fixes

- **test:** improve test coverage ([7f4a70a][30])

# [6.3.0][31] (2021-01-01)

### Build System

- **package.json:** simplify lint ([dda943e][32])

### Features

- **src:** add div function ([636c353][33])

# [6.2.0][34] (2021-01-01)

### Build System

- **.github/workflows/build-test-deploy.yml:** add remark and formatting steps
  ([e16cd8b][35])
- **.husky:** remove verbose flag ([538c374][36])
- **package.json:** fix lint-staged remark and prettier ([6fbd1df][37])
- **package.json:** remove debug echo ([33a510d][38])
- **release.config.js:** fix to use gfm ([db4c284][39])

### Features

- **package.json:** add remark-gfm; test lint-staged ([bcbf3f5][40])

## [6.1.7][41] (2020-12-31)

### Bug Fixes

- **README.md:** simulated external-PR fix ([8a7fc06][42])

## [6.1.6][43] (2020-12-30)

### Build System

- **package.json:** conclude dynamic continuous integration tests
  ([828751d][44])

## [6.1.5][45] (2020-12-30)

### Bug Fixes

- **build-test-deploy.yml:** clearer error language with invalid externals
  config ([d8ed033][46])

## [6.1.4][47] (2020-12-30)

## [6.1.3][48] (2020-12-30)

### Build System

- **build-test-deploy.yml:** debug should warn ([55e1235][49])
- **build-test-deploy.yml:** fix syntax error ([5448960][50])

## [6.1.2][51] (2020-12-30)

### Build System

- **.github:** better snyk ignore ([5921653][52])
- **package.json:** remove high audit CI failure ([b2ea6f1][53])
- **package.json:** test high audit CI failure ([03825f0][54])

## [6.1.1][55] (2020-12-30)

### Bug Fixes

- **readme.md:** dummy fix ([bda2d5e][56])

# [6.1.0][57] (2020-12-30)

# 6.1.0-canary.1 (2020-12-30)

### Features

- **readme.md:** dummy feat ([f90dde3][58])

## 6.0.6-canary.1 (2020-12-30)

### Bug Fixes

- **readme.md:** dummy fix ([b9d92fd][59])

## [6.0.5][60] (2020-12-30)

### Bug Fixes

- **readme.md:** add codecov badge ([4b6c84c][61])

## [6.0.4][62] (2020-12-30)

### Build System

- **.github:** more resilient cleanup routine ([85b8e12][63])

## [6.0.3][64] (2020-12-30)

### Build System

- **.github:** better cleanup caching ([02746df][65])
- **.github:** fix cleanup ([7520e0f][66])

## [6.0.2][67] (2020-12-30)

### Build System

- **cleanup.yml:** add cleanup workflow ([747a674][68])
- **release.config.js:** remove console.info ([b374296][69])

## [6.0.1][70] (2020-12-30)

### Build System

- **.github:** ensure deploy stage is using latest node and npm ([d40192b][71])

# [6.0.0][72] (2020-12-30)

### Features

- **readme.md:** fake feature ([95a13d2][73])

### BREAKING CHANGES

- **readme.md:** fake breaking change

## [5.0.3][74] (2020-12-29)

### Build System

- **.github:** loosen CD pipeline launch check: run CD on all branches
  ([0a91fad][75])

## [5.0.2][76] (2020-12-29)

### Build System

- **.github:** add codecov config and add fetch-depth to test-unit
  ([e62c5b4][77])

## [5.0.1][78] (2020-12-29)

### Build System

- **.github:** add codecov-action to test-unit job ([2ef6297][79])
- **package.json:** add codecov package ([d73cac9][80])
- **package.json:** remove codecov package ([da477b7][81])

# [5.0.0][82] (2020-12-29)

### Chore

- fix capitalization of non-release commit types ([7391321][83])

### BREAKING CHANGES

- dummy BC 7
- dummy BC 9
- dummy BCs 10, 8, and 6

# [4.0.0][84] (2020-12-29)

### Bug Fixes

- **.changelogrc.js:** remove BC capitalization and sentence-case code
  ([02662fc][85])

### Chore

- update comment language ([5a2aef4][86])

### BREAKING CHANGES

- dummy BC 1
- dummy BC 2
- dummy BCs 3, 4, and 5

## [3.0.1][87] (2020-12-28)

### Bug Fixes

- **.github:** update ci committer name and email to xunn-bot ([b151491][88])
- **package.json:** update typedoc to latest beta and fix npmbd ([783ba76][89])

### Build System

- **package.json:** update deps ([a876517][90])

# [3.0.0][91] (2020-12-07)

# 3.0.0-canary.7 (2020-12-07)

### Build System

- **package-lock.json:** fix syntax error ([4fd2952][92])

# 3.0.0-canary.6 (2020-12-07)

### Bug Fixes

- **.github/workflows:** fix syntax: "no-ci/\*\*" ([b060d3e][93])

### Build System

- **.github/workflows:** build system now ignores branches with names that begin
  with "no-ci/" ([3a4bdff][94])

# 3.0.0-canary.5 (2020-12-07)

### Build System

- **.github/workflows:** workflow no longer triggered on tag push,
  dependabot/snyk push ([1096e6f][95])

# 3.0.0-canary.4 (2020-12-06)

### Build System

- **package.json:** add semver devdep ([4a50ecd][96])

# 3.0.0-canary.3 (2020-12-06)

### Debug

- update semantic-release to Xunnamius/semantic-release#contrib-holistic
  ([446e961][97])

### BREAKING CHANGES

- another simulated breaking change!

It works a little like this and that and some of this

- and a second breaking change too

# 3.0.0-canary.2 (2020-12-05)

### Bug Fixes

- **config:** rename changelog.config.js to .changelogrc.js ([d5dfc50][98])
- **package.json:** use @xunnamius/semantic-release ([0447d59][99])

### BREAKING CHANGES

- **config:** breaking change 1
- **config:** breaking change 2
- **config:** breaking change 3

Ack: Tre Signed: Yup!

# 3.0.0-canary.1 (2020-12-03)

### Features

- added mult function ([e537358][100])

### BREAKING CHANGES

- simulated breaking change

This is a simulated breaking change.

## [2.3.4][101] (2020-12-03)

### Build System

- **commitlint:** add debug type to type-enum ([10c71bf][102])
- **config:** fix changelog.config.js bug when subject is undefined
  ([57e0c16][103])
- **package.json:** downgrade puppeteer and upgrade other deps ([e5d6d42][104])
- added .env.example and env-expect ([efb29c5][105])

## [2.3.3][106] (2020-11-30)

### Bug Fixes

- **spellcheck:** fix incorrect parsing of global cspell vscode settings
  ([c2789bf][107])

### Build System

- **release:** fix changelogTitle skip title ([1dcdcc1][108])

## [2.3.2][109] (2020-11-30)

### Build System

- **release:** fix changelogTitle spread bug ([598a396][110])

## [2.3.1][111] (2020-11-30)

### Build System

- install @semantic-release/changelog ([022603b][112])
- **release:** fix changelogTitle bug ([0d181ea][113])
- **release:** fix SHOULD_UPDATE_CHANGELOG conditional ([ec632ad][114])

# [2.3.0][115] (2020-11-30)

### Features

- **tooling:** spellcheck now ignores camelCase et al ([d921382][116])

### Performance Improvements

- better faster spellchecking ([c44c310][117])

## [2.2.2][118] (2020-11-29)

### Build System

- **changelog:** changelog now includes relevant build-type commits
  ([d630264][119])

## [2.2.1][120] (2020-11-29)

### Build System

- **changelog:** changelog now includes relevant reverts ([d4ccacb][121])

# [2.2.0][122] (2020-11-29)

### Bug Fixes

- **actions:** bring metadata collection in-line with new format
  ([a62380b][123])
- **config:** changelog config honors skip commands, leaves reverts alone
  ([823f8b5][124])
- **config:** fix broken changelog.config.js structure ([bd10f44][125])
- **package.json:** downgrade typedoc and assoc plugins ([46db2ee][126])
- **package.json:** install lint-staged dep and script ([f3800e4][127])
- **package.json:** install spellcheck dependencies ([9a7adb4][128])
- **spellcheck:** change "contains" to "includes" ([af76dbe][129])
- **spellcheck:** fix bug where spellcheck reads from wrong message source
  ([69a25ba][130])
- **spellcheck:** spellcheck now leverages assorted knowledge ([14b86ae][131])

### Build System

- install @semantic-release/exec ([cc94940][132])
- **config:** fix changelog.config.js operating on individual releases
  ([66adf2f][133])
- **config:** fix husky pre-commit hook ([f0d0032][134])
- **config:** generate CHANGELOG.md beautifully ([2fa4aa9][135])
- **config:** retire @semantic-release/changelog ([787a281][136])

### Features

- add build-changelog to npm scripts ([8393a87][137])

## [2.1.4][138] (2020-11-28)

### Bug Fixes

- **actions:** ensure metadata is gathered properly ([31ece1c][139])
- **release:** remove extra newlines during changelogs generation
  ([72acb24][140])

## [2.1.3][141] (2020-11-28)

### Bug Fixes

- **release:** update how changelogs are generated ([8ce1760][142])

## [2.1.2][143] (2020-11-28)

### Bug Fixes

- **actions:** remove erroneous build-dist from lint job ([2cdd373][144])
- **actions:** remove erroneous build-dist from test-unit job ([fcb2232][145])
- **config:** fix babel.config.js with NODE_LTS ([cdf4610][146])

## [2.1.1][147] (2020-11-26)

### Bug Fixes

- **actions:** update gather-metadata with more accurate grep ([961ecef][148])

# [2.1.0][149] (2020-11-25)

### Bug Fixes

- **actions:** gather-metadata steps gather and skip properly ([97682f4][150])
- **actions:** if statements now use | instead of > ([24e3739][151])
- **actions:** move comments out of multiline statements ([874f8d6][152])

### Features

- **actions:** introduce new streamlined workflow job configuration
  ([4bb9d94][153])

## [2.0.1][154] (2020-11-24)

### Bug Fixes

- **actions:** add git author and commiter env vars for semantic-release signed
  commits ([f01d16b][155])
- **dependabot:** ensure dependabot formats GitHub Actions PRs correctly
  ([bcdbd0e][156])
- add build commits to release rule ([3124ab0][157])

# [2.0.0][158] (2020-11-24)

### Bug Fixes

- **actions:** add install-dependencies to semantic-release needs
  ([d8cc836][159])
- **actions:** deps caching done properly ([bbe0416][160])
- **actions:** ensure repo is always checked out first ([65e5d46][161])
- **actions:** removed signed pushes ([f621f76][162])
- **package.json:** do not guess error codes ([f5428c8][163])
- **package.json:** ensure machine-friendly run-script syntax ([7af5e45][164])
- **package.json:** ensure set +e used in run-scripts when necessary
  ([6d86c0b][165])
- **package.json:** precedence error caused bad return value in lint
  ([e8bfbc5][166])

### Features

- added diff to take the difference ([5e40deb][167])

### Performance Improvements

- **actions:** better caching ([6da0a65][168])
- **actions:** made test-integration-chrome independent ([d489cfa][169])
- **actions:** only cache node_modules ([57775c9][170])

### BREAKING CHANGES

- switch to semantic-release CI/CD pipeline Moved away from publish-please to a
  fully automated build-test-deploy release cycle based on semantic-release.

# Archived Releases (pre-CI/CD)

- Version 1.0.15 ([57faa2c][171])

<!---->

- Version 1.0.7 ([5ced626][172])

- Version 1.0.0 ([df91d82][173])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/workflow-playground/compare/v6.4.1...v6.4.2
[4]:
  https://github.com/Xunnamius/workflow-playground/commit/6b2e2383ef2b54a56a665e6b9ecef7d93e5fec2e
[5]: https://github.com/Xunnamius/workflow-playground/compare/v6.4.0...v6.4.1
[6]:
  https://github.com/Xunnamius/workflow-playground/commit/de7ef33e1d74831b441e909c4e628527ed2900c0
[7]:
  https://github.com/Xunnamius/workflow-playground/commit/c8ef15e813811f037acd12133f485bd8435ac9cc
[8]:
  https://github.com/Xunnamius/workflow-playground/commit/b9e8cc58ea93099742c91d7431687965e131a3df
[9]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.8...v6.4.0
[10]:
  https://github.com/Xunnamius/workflow-playground/commit/ed73fc3e5c9c7f0f621802e9ea429dcfca36bf52
[11]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.7...v6.3.8
[12]:
  https://github.com/Xunnamius/workflow-playground/commit/d923b299e05789a20a08dc2e4059e5e6e1099658
[13]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.6...v6.3.7
[14]:
  https://github.com/Xunnamius/workflow-playground/commit/44dd46246911a9cb58baf0ec0b84aa5093f2628e
[15]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.5...v6.3.6
[16]:
  https://github.com/Xunnamius/workflow-playground/commit/66670754987250b92806dfa7d94c1cb46349f07f
[17]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.4...v6.3.5
[18]:
  https://github.com/Xunnamius/workflow-playground/commit/a10bac3efbce2b4bd511420fd4d7466c288d9706
[19]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.3...v6.3.4
[20]:
  https://github.com/Xunnamius/workflow-playground/commit/e8bac90bb68b79d4c4ab1853bdd4c45dddef44fe
[21]:
  https://github.com/Xunnamius/workflow-playground/commit/077abcea8df04b8b6cf292f97d0e4b37cda28f7b
[22]:
  https://github.com/Xunnamius/workflow-playground/commit/6885a3467c42b61e1edb93fed363ceca6ff15b28
[23]:
  https://github.com/Xunnamius/workflow-playground/commit/ba0ef5863ce550a6988ce259d7500807bdaa5db8
[24]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.2...v6.3.3
[25]:
  https://github.com/Xunnamius/workflow-playground/commit/772dee15ff4eaeba84f8327f30c69868c5e514c8
[26]:
  https://github.com/Xunnamius/workflow-playground/commit/e38af90e7720f08f46d6220168226336e6c040d4
[27]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.1...v6.3.2
[28]:
  https://github.com/Xunnamius/workflow-playground/commit/f757db8f0e97286abda30b825de9f803cd63c097
[29]: https://github.com/Xunnamius/workflow-playground/compare/v6.3.0...v6.3.1
[30]:
  https://github.com/Xunnamius/workflow-playground/commit/7f4a70af17528c36e80440827663251f79c9c1be
[31]: https://github.com/Xunnamius/workflow-playground/compare/v6.2.0...v6.3.0
[32]:
  https://github.com/Xunnamius/workflow-playground/commit/dda943e24fcd164ae850feb1f1bd16924b773773
[33]:
  https://github.com/Xunnamius/workflow-playground/commit/636c35303cb5d04d239b13e89a3040e483c81cf7
[34]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.7...v6.2.0
[35]:
  https://github.com/Xunnamius/workflow-playground/commit/e16cd8b559096a076739d79a15ff79e5efa7f581
[36]:
  https://github.com/Xunnamius/workflow-playground/commit/538c374e597751bc198b6d52bc0a8fa41de6494d
[37]:
  https://github.com/Xunnamius/workflow-playground/commit/6fbd1df74d4bc1a7ad852e76e8fa805138d95657
[38]:
  https://github.com/Xunnamius/workflow-playground/commit/33a510dce4dcaf004732e739e3e9c3d12518646a
[39]:
  https://github.com/Xunnamius/workflow-playground/commit/db4c284e914688911f1b0d75c569b83a198113c2
[40]:
  https://github.com/Xunnamius/workflow-playground/commit/bcbf3f5cc2d0bba5f282de657977ab44c70b1bfe
[41]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.6...v6.1.7
[42]:
  https://github.com/Xunnamius/workflow-playground/commit/8a7fc06df25ffa5381bb5d771eb6e5a619fcbf64
[43]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.5...v6.1.6
[44]:
  https://github.com/Xunnamius/workflow-playground/commit/828751d051d5cff15c5d1315fc9729d82cab985f
[45]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.4...v6.1.5
[46]:
  https://github.com/Xunnamius/workflow-playground/commit/d8ed033ead9608349f2d876c4cecebecd65dc47f
[47]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.3...v6.1.4
[48]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.2...v6.1.3
[49]:
  https://github.com/Xunnamius/workflow-playground/commit/55e1235d39714dd00c146549f630ec62f4952e2d
[50]:
  https://github.com/Xunnamius/workflow-playground/commit/5448960531a3bd19cc38de44f13519a8888e342a
[51]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.1...v6.1.2
[52]:
  https://github.com/Xunnamius/workflow-playground/commit/5921653ac2c26273eace14aa3e4994960be521a0
[53]:
  https://github.com/Xunnamius/workflow-playground/commit/b2ea6f13a5c7d7c8d89f76b6ced72c938448a235
[54]:
  https://github.com/Xunnamius/workflow-playground/commit/03825f051d3ed50dad916f0e3f3993a0fb3c51ce
[55]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.0...v6.1.1
[56]:
  https://github.com/Xunnamius/workflow-playground/commit/bda2d5ea408563874429d8ed8e30455d5e717a54
[57]: https://github.com/Xunnamius/workflow-playground/compare/v6.0.5...v6.1.0
[58]:
  https://github.com/Xunnamius/workflow-playground/commit/f90dde35c32e676c765b131ddfa135246ad7f7eb
[59]:
  https://github.com/Xunnamius/workflow-playground/commit/b9d92fdd4f2d594a62fce6d16299152c79a43566
[60]: https://github.com/Xunnamius/workflow-playground/compare/v6.0.4...v6.0.5
[61]:
  https://github.com/Xunnamius/workflow-playground/commit/4b6c84c788c4105db8a1ddd10ecb044be31876f9
[62]: https://github.com/Xunnamius/workflow-playground/compare/v6.0.3...v6.0.4
[63]:
  https://github.com/Xunnamius/workflow-playground/commit/85b8e12e1bce4baa22bd301da9dda21ea289fd9d
[64]: https://github.com/Xunnamius/workflow-playground/compare/v6.0.2...v6.0.3
[65]:
  https://github.com/Xunnamius/workflow-playground/commit/02746df97d17f717de608d4b5cc3838e2992a150
[66]:
  https://github.com/Xunnamius/workflow-playground/commit/7520e0fc29f22ef537fc947a5f32d6b6bc762cc5
[67]: https://github.com/Xunnamius/workflow-playground/compare/v6.0.1...v6.0.2
[68]:
  https://github.com/Xunnamius/workflow-playground/commit/747a6742dabcc6cdc8fd835b2f673e355f212cdf
[69]:
  https://github.com/Xunnamius/workflow-playground/commit/b3742961a2824618bf68953c532055a04ef03920
[70]: https://github.com/Xunnamius/workflow-playground/compare/v6.0.0...v6.0.1
[71]:
  https://github.com/Xunnamius/workflow-playground/commit/d40192bd13d9b301e09723cdca68be60b44b5d82
[72]: https://github.com/Xunnamius/workflow-playground/compare/v5.0.3...v6.0.0
[73]:
  https://github.com/Xunnamius/workflow-playground/commit/95a13d21dd902a490d445d3c8aee89c59b2131f1
[74]: https://github.com/Xunnamius/workflow-playground/compare/v5.0.2...v5.0.3
[75]:
  https://github.com/Xunnamius/workflow-playground/commit/0a91fad0d4f6c41c600294b8ecfc84b16e906980
[76]: https://github.com/Xunnamius/workflow-playground/compare/v5.0.1...v5.0.2
[77]:
  https://github.com/Xunnamius/workflow-playground/commit/e62c5b42ca2b43326cc9eec8db248020b2d90ec8
[78]: https://github.com/Xunnamius/workflow-playground/compare/v5.0.0...v5.0.1
[79]:
  https://github.com/Xunnamius/workflow-playground/commit/2ef6297d257bcd1661093eed5069714382f01f36
[80]:
  https://github.com/Xunnamius/workflow-playground/commit/d73cac91012e0a32ee1f52a3b476b8639f325ca2
[81]:
  https://github.com/Xunnamius/workflow-playground/commit/da477b770bc7b17db8eb474eb523e8468881e447
[82]: https://github.com/Xunnamius/workflow-playground/compare/v4.0.0...v5.0.0
[83]:
  https://github.com/Xunnamius/workflow-playground/commit/7391321c8da14ed35a865a4e245db2ae3b72a606
[84]: https://github.com/Xunnamius/workflow-playground/compare/v3.0.1...v4.0.0
[85]:
  https://github.com/Xunnamius/workflow-playground/commit/02662fcac7c02ac3f5a32dba750e00d23d6c88f2
[86]:
  https://github.com/Xunnamius/workflow-playground/commit/5a2aef4cebc6ed136fa3fb5015f38f47de8ce781
[87]: https://github.com/Xunnamius/workflow-playground/compare/v3.0.0...v3.0.1
[88]:
  https://github.com/Xunnamius/workflow-playground/commit/b15149139462980707fc8ec6d7d67414ac207e6e
[89]:
  https://github.com/Xunnamius/workflow-playground/commit/783ba76db816b0cc391450d442c708420203c46c
[90]:
  https://github.com/Xunnamius/workflow-playground/commit/a876517a6ea8b339e8c0eca9f7763bcc85919f87
[91]: https://github.com/Xunnamius/workflow-playground/compare/v2.3.4...v3.0.0
[92]:
  https://github.com/Xunnamius/workflow-playground/commit/4fd2952e78b5cfda17a84a538bcc382d06621926
[93]:
  https://github.com/Xunnamius/workflow-playground/commit/b060d3ec78744b72bd53450ecd1664110cdebda8
[94]:
  https://github.com/Xunnamius/workflow-playground/commit/3a4bdff03f0d8ea450f53aebceb33525801b3c34
[95]:
  https://github.com/Xunnamius/workflow-playground/commit/1096e6fbfff5fd399c2f1af5fe2b6496c5ca3cfe
[96]:
  https://github.com/Xunnamius/workflow-playground/commit/4a50ecd7eb03eafebc2412de7a556d319c39bc0e
[97]:
  https://github.com/Xunnamius/workflow-playground/commit/446e961cee1326be7db4085f118447ac30f15078
[98]:
  https://github.com/Xunnamius/workflow-playground/commit/d5dfc506c9d68a0f299559b5e76c92630c9edf0a
[99]:
  https://github.com/Xunnamius/workflow-playground/commit/0447d5959113f033e2ed5644efdb4c80c4fe5085
[100]:
  https://github.com/Xunnamius/workflow-playground/commit/e537358218a8abcc97008f5460b37a1949dd0681
[101]: https://github.com/Xunnamius/workflow-playground/compare/v2.3.3...v2.3.4
[102]:
  https://github.com/Xunnamius/workflow-playground/commit/10c71bf50522ae3902f84cf6171b9fce4d1470f4
[103]:
  https://github.com/Xunnamius/workflow-playground/commit/57e0c162e73d5850807e9f496df0aa6203834f4c
[104]:
  https://github.com/Xunnamius/workflow-playground/commit/e5d6d42ad230f45b0239bcec671a18a2789ae8f2
[105]:
  https://github.com/Xunnamius/workflow-playground/commit/efb29c5c991d58ae8aa684159f4db0d3f8f6dbbe
[106]: https://github.com/Xunnamius/workflow-playground/compare/v2.3.2...v2.3.3
[107]:
  https://github.com/Xunnamius/workflow-playground/commit/c2789bfd8f43bb9fc60316131c4e6d17dd2c1de8
[108]:
  https://github.com/Xunnamius/workflow-playground/commit/1dcdcc1cac342f9bdca71e49f9cc332e9118932f
[109]: https://github.com/Xunnamius/workflow-playground/compare/v2.3.1...v2.3.2
[110]:
  https://github.com/Xunnamius/workflow-playground/commit/598a3966ce1d85c6dcc2945878ebd3ba2c969654
[111]: https://github.com/Xunnamius/workflow-playground/compare/v2.3.0...v2.3.1
[112]:
  https://github.com/Xunnamius/workflow-playground/commit/022603bbe50298a8e7500a77cb77ce5aae4b45f7
[113]:
  https://github.com/Xunnamius/workflow-playground/commit/0d181ea032a9f5322137dacf5ee97e6a28acd035
[114]:
  https://github.com/Xunnamius/workflow-playground/commit/ec632ad52472184edbed16111b4a5b306ae6f7ed
[115]: https://github.com/Xunnamius/workflow-playground/compare/v2.2.2...v2.3.0
[116]:
  https://github.com/Xunnamius/workflow-playground/commit/d9213827f9448a93affcab8ca652e37f24b247b9
[117]:
  https://github.com/Xunnamius/workflow-playground/commit/c44c310f01d78798c5a13213dafeef5e1f25b25f
[118]: https://github.com/Xunnamius/workflow-playground/compare/v2.2.1...v2.2.2
[119]:
  https://github.com/Xunnamius/workflow-playground/commit/d630264d1ee046ddf943ad287b15f5308ce4c224
[120]: https://github.com/Xunnamius/workflow-playground/compare/v2.2.0...v2.2.1
[121]:
  https://github.com/Xunnamius/workflow-playground/commit/d4ccacb6533b04c4889b909ecd2bffd4c7b5fa79
[122]: https://github.com/Xunnamius/workflow-playground/compare/v2.1.4...v2.2.0
[123]:
  https://github.com/Xunnamius/workflow-playground/commit/a62380bc4f75c42d74640916fde44fb5811f150d
[124]:
  https://github.com/Xunnamius/workflow-playground/commit/823f8b5434e07250b8aefbd9f4a49e0ea05cc9e5
[125]:
  https://github.com/Xunnamius/workflow-playground/commit/bd10f4414522a0c6b406adb2fba9d58abee6830e
[126]:
  https://github.com/Xunnamius/workflow-playground/commit/46db2ee7335e9b37cfafce98776171304f0072b7
[127]:
  https://github.com/Xunnamius/workflow-playground/commit/f3800e471e93308b37eb2668dd5c4bfde9e7b88e
[128]:
  https://github.com/Xunnamius/workflow-playground/commit/9a7adb4fb9592328efd3b33bc156b87f89a59ffb
[129]:
  https://github.com/Xunnamius/workflow-playground/commit/af76dbe52921aed27c4cf275875de9c1194561d4
[130]:
  https://github.com/Xunnamius/workflow-playground/commit/69a25baa21133345e2a2baffd2f69d0abe950c02
[131]:
  https://github.com/Xunnamius/workflow-playground/commit/14b86ae815f2c24aef82dcad41b0ead036a2f4c4
[132]:
  https://github.com/Xunnamius/workflow-playground/commit/cc94940e7b903a141f4e16a4169411c0a45bfb96
[133]:
  https://github.com/Xunnamius/workflow-playground/commit/66adf2f3d8ea4bd1813fac4c704ff327ac175855
[134]:
  https://github.com/Xunnamius/workflow-playground/commit/f0d0032fb51ddb98b2f35b229c9d1873c00264f7
[135]:
  https://github.com/Xunnamius/workflow-playground/commit/2fa4aa962a17c6075d28af876f67fe98d0f519b6
[136]:
  https://github.com/Xunnamius/workflow-playground/commit/787a28144826609ddffb5e0d1937f314b1039ab6
[137]:
  https://github.com/Xunnamius/workflow-playground/commit/8393a87974cea60087a8d11fc9b0bac0f7ecc6e2
[138]: https://github.com/Xunnamius/workflow-playground/compare/v2.1.3...v2.1.4
[139]:
  https://github.com/Xunnamius/workflow-playground/commit/31ece1cb7d0b91bbc38b1c3eb6366c13d1da7fd2
[140]:
  https://github.com/Xunnamius/workflow-playground/commit/72acb24c0c521217fb8eebb5204ddf1591808326
[141]: https://github.com/Xunnamius/workflow-playground/compare/v2.1.2...v2.1.3
[142]:
  https://github.com/Xunnamius/workflow-playground/commit/8ce176044293af0ac3b5dd2495d7d0eb580bbede
[143]: https://github.com/Xunnamius/workflow-playground/compare/v2.1.1...v2.1.2
[144]:
  https://github.com/Xunnamius/workflow-playground/commit/2cdd373974fdc62480e5681813c09cba98aebddc
[145]:
  https://github.com/Xunnamius/workflow-playground/commit/fcb2232cf6e628f58033a78a0d6aa107f9794589
[146]:
  https://github.com/Xunnamius/workflow-playground/commit/cdf46102e7d5b590bd153d2444cb13c24d4170b3
[147]: https://github.com/Xunnamius/workflow-playground/compare/v2.1.0...v2.1.1
[148]:
  https://github.com/Xunnamius/workflow-playground/commit/961ecef3555403928cf319012ca6bd40093da66e
[149]: https://github.com/Xunnamius/workflow-playground/compare/v2.0.1...v2.1.0
[150]:
  https://github.com/Xunnamius/workflow-playground/commit/97682f434acc501e4964c31770472acae0320ad5
[151]:
  https://github.com/Xunnamius/workflow-playground/commit/24e373907b23a68627fe535049f603c93bfa1361
[152]:
  https://github.com/Xunnamius/workflow-playground/commit/874f8d65aff5d8e27e14e8d9e4a0e37450713ce0
[153]:
  https://github.com/Xunnamius/workflow-playground/commit/4bb9d94050d1b8fb164bdf04b1bffa10705aa0a2
[154]: https://github.com/Xunnamius/workflow-playground/compare/v2.0.0...v2.0.1
[155]:
  https://github.com/Xunnamius/workflow-playground/commit/f01d16b51e444eb801121e81718994b4add18799
[156]:
  https://github.com/Xunnamius/workflow-playground/commit/bcdbd0e1c23786185cd43b11d9ce18d3498e9ff5
[157]:
  https://github.com/Xunnamius/workflow-playground/commit/3124ab0500924ce75f3387d59d5d60ea3e77c827
[158]: https://github.com/Xunnamius/workflow-playground/compare/v1.0.15...v2.0.0
[159]:
  https://github.com/Xunnamius/workflow-playground/commit/d8cc83611de2a595631f42bee0f10591b11bc59c
[160]:
  https://github.com/Xunnamius/workflow-playground/commit/bbe0416125a303076bc3f8a5a96c9669db926b46
[161]:
  https://github.com/Xunnamius/workflow-playground/commit/65e5d463925b888e08dd69a9da7f4e9f4c9be872
[162]:
  https://github.com/Xunnamius/workflow-playground/commit/f621f76895e6a0749f76a6a1abd90253b8694717
[163]:
  https://github.com/Xunnamius/workflow-playground/commit/f5428c87836552db96d40310c52abd47e593e729
[164]:
  https://github.com/Xunnamius/workflow-playground/commit/7af5e45eb0712da5d80022cedd535a673082d195
[165]:
  https://github.com/Xunnamius/workflow-playground/commit/6d86c0b4ce2218a93f9919a256a89a04af83a9d1
[166]:
  https://github.com/Xunnamius/workflow-playground/commit/e8bfbc590ec8ac73071ae61708c1ca29f2beee36
[167]:
  https://github.com/Xunnamius/workflow-playground/commit/5e40deb020c4bafb103a6bc78fbeecb266a5c983
[168]:
  https://github.com/Xunnamius/workflow-playground/commit/6da0a656aba20f022d26335ec33c9c4c4ea37c02
[169]:
  https://github.com/Xunnamius/workflow-playground/commit/d489cfacd8514a210ec0b570ab3c5a283cf5bc19
[170]:
  https://github.com/Xunnamius/workflow-playground/commit/57775c9cc3ffdad94f09b23923785a081e2a08ee
[171]:
  https://github.com/Xunnamius/workflow-playground/commit/57faa2cc448f39383b56db04ec06b1093f5f7bcd
[172]:
  https://github.com/Xunnamius/workflow-playground/commit/5ced6267d44731337fe5e0a69776dd5642d8a54d
[173]:
  https://github.com/Xunnamius/workflow-playground/commit/df91d8298edd2d756f732b2245ba086e91197505
