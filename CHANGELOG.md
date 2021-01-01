# Changelog

All notable changes to this project will be documented in this file. The format
is based on [Conventional Commits][1], and this project adheres to [Semantic
Versioning][2].

## [6.1.7][135] (2020-12-31)

### Bug Fixes

- **README.md:** simulated external-PR fix ([1c35aa4][136])
- **README.md:** simulated external-PR fix ([8a7fc06][137])

## [6.1.6][3] (2020-12-30)

### Build System

- **package.json:** conclude dynamic continuous integration tests ([828751d][4])

## [6.1.5][6] (2020-12-30)

### Bug Fixes

- **build-test-deploy.yml:** clearer error language with invalid externals
  config ([d8ed033][7])

## [6.1.4][8] (2020-12-30)

## [6.1.3][9] (2020-12-30)

### Build System

- **build-test-deploy.yml:** debug should warn ([55e1235][10])
- **build-test-deploy.yml:** fix syntax error ([5448960][11])

## [6.1.2][12] (2020-12-30)

### Build System

- **.github:** better snyk ignore ([5921653][13])
- **package.json:** remove high audit CI failure ([b2ea6f1][14])
- **package.json:** test high audit CI failure ([03825f0][15])

## [6.1.1][16] (2020-12-30)

### Bug Fixes

- **readme.md:** dummy fix ([bda2d5e][17])

# [6.1.0][18] (2020-12-30)

# 6.1.0-canary.1 (2020-12-30)

### Features

- **readme.md:** dummy feat ([f90dde3][19])

## 6.0.6-canary.1 (2020-12-30)

### Bug Fixes

- **readme.md:** dummy fix ([b9d92fd][20])

## [6.0.5][21] (2020-12-30)

### Bug Fixes

- **readme.md:** add codecov badge ([4b6c84c][22])

## [6.0.4][23] (2020-12-30)

### Build System

- **.github:** more resilient cleanup routine ([85b8e12][24])

## [6.0.3][25] (2020-12-30)

### Build System

- **.github:** better cleanup caching ([02746df][26])
- **.github:** fix cleanup ([7520e0f][27])

## [6.0.2][28] (2020-12-30)

### Build System

- **cleanup.yml:** add cleanup workflow ([747a674][29])
- **release.config.js:** remove console.info ([b374296][30])

## [6.0.1][31] (2020-12-30)

### Build System

- **.github:** ensure deploy stage is using latest node and npm ([d40192b][32])

# [6.0.0][33] (2020-12-30)

### Features

- **readme.md:** fake feature ([95a13d2][34])

### BREAKING CHANGES

- **readme.md:** fake breaking change

## [5.0.3][35] (2020-12-29)

### Build System

- **.github:** loosen CD pipeline launch check: run CD on all branches
  ([0a91fad][36])

## [5.0.2][37] (2020-12-29)

### Build System

- **.github:** add codecov config and add fetch-depth to test-unit
  ([e62c5b4][38])

## [5.0.1][39] (2020-12-29)

### Build System

- **.github:** add codecov-action to test-unit job ([2ef6297][40])
- **package.json:** add codecov package ([d73cac9][41])
- **package.json:** remove codecov package ([da477b7][42])

# [5.0.0][43] (2020-12-29)

### Chore

- fix capitalization of non-release commit types ([7391321][44])

### BREAKING CHANGES

- dummy BC 7
- dummy BC 9
- dummy BCs 10, 8, and 6

# [4.0.0][45] (2020-12-29)

### Bug Fixes

- **.changelogrc.js:** remove BC capitalization and sentence-case code
  ([02662fc][46])

### Chore

- update comment language ([5a2aef4][47])

### BREAKING CHANGES

- dummy BC 1
- dummy BC 2
- dummy BCs 3, 4, and 5

## [3.0.1][48] (2020-12-28)

### Bug Fixes

- **.github:** update ci committer name and email to xunn-bot ([b151491][49])
- **package.json:** update typedoc to latest beta and fix npmbd ([783ba76][50])

### Build System

- **package.json:** update deps ([a876517][51])

# [3.0.0][52] (2020-12-07)

# 3.0.0-canary.7 (2020-12-07)

### Build System

- **package-lock.json:** fix syntax error ([4fd2952][53])

# 3.0.0-canary.6 (2020-12-07)

### Bug Fixes

- **.github/workflows:** fix syntax: "no-ci/\*\*" ([b060d3e][54])

### Build System

- **.github/workflows:** build system now ignores branches with names that begin
  with "no-ci/" ([3a4bdff][55])

# 3.0.0-canary.5 (2020-12-07)

### Build System

- **.github/workflows:** workflow no longer triggered on tag push,
  dependabot/snyk push ([1096e6f][56])

# 3.0.0-canary.4 (2020-12-06)

### Build System

- **package.json:** add semver devdep ([4a50ecd][57])

# 3.0.0-canary.3 (2020-12-06)

### Debug

- update semantic-release to Xunnamius/semantic-release#contrib-holistic
  ([446e961][58])

### BREAKING CHANGES

- another simulated breaking change!

It works a little like this and that and some of this

- and a second breaking change too

# 3.0.0-canary.2 (2020-12-05)

### Bug Fixes

- **config:** rename changelog.config.js to .changelogrc.js ([d5dfc50][59])
- **package.json:** use @xunnamius/semantic-release ([0447d59][60])

### BREAKING CHANGES

- **config:** breaking change 1
- **config:** breaking change 2
- **config:** breaking change 3

Ack: Tre Signed: Yup!

# 3.0.0-canary.1 (2020-12-03)

### Features

- added mult function ([e537358][61])

### BREAKING CHANGES

- simulated breaking change

This is a simulated breaking change.

## [2.3.4][62] (2020-12-03)

### Build System

- **commitlint:** add debug type to type-enum ([10c71bf][63])
- **config:** fix changelog.config.js bug when subject is undefined
  ([57e0c16][64])
- **package.json:** downgrade puppeteer and upgrade other deps ([e5d6d42][65])
- added .env.example and env-expect ([efb29c5][66])

## [2.3.3][67] (2020-11-30)

### Bug Fixes

- **spellcheck:** fix incorrect parsing of global cspell vscode settings
  ([c2789bf][68])

### Build System

- **release:** fix changelogTitle skip title ([1dcdcc1][69])

## [2.3.2][70] (2020-11-30)

### Build System

- **release:** fix changelogTitle spread bug ([598a396][71])

## [2.3.1][72] (2020-11-30)

### Build System

- install @semantic-release/changelog ([022603b][73])
- **release:** fix changelogTitle bug ([0d181ea][74])
- **release:** fix SHOULD_UPDATE_CHANGELOG conditional ([ec632ad][75])

# [2.3.0][76] (2020-11-30)

### Features

- **tooling:** spellcheck now ignores camelCase et al ([d921382][77])

### Performance Improvements

- better faster spellchecking ([c44c310][78])

## [2.2.2][79] (2020-11-29)

### Build System

- **changelog:** changelog now includes relevant build-type commits
  ([d630264][80])

## [2.2.1][81] (2020-11-29)

### Build System

- **changelog:** changelog now includes relevant reverts ([d4ccacb][82])

# [2.2.0][83] (2020-11-29)

### Bug Fixes

- **actions:** bring metadata collection in-line with new format ([a62380b][84])
- **config:** changelog config honors skip commands, leaves reverts alone
  ([823f8b5][85])
- **config:** fix broken changelog.config.js structure ([bd10f44][86])
- **package.json:** downgrade typedoc and assoc plugins ([46db2ee][87])
- **package.json:** install lint-staged dep and script ([f3800e4][88])
- **package.json:** install spellcheck dependencies ([9a7adb4][89])
- **spellcheck:** change "contains" to "includes" ([af76dbe][90])
- **spellcheck:** fix bug where spellcheck reads from wrong message source
  ([69a25ba][91])
- **spellcheck:** spellcheck now leverages assorted knowledge ([14b86ae][92])

### Build System

- install @semantic-release/exec ([cc94940][93])
- **config:** fix changelog.config.js operating on individual releases
  ([66adf2f][94])
- **config:** fix husky pre-commit hook ([f0d0032][95])
- **config:** generate CHANGELOG.md beautifully ([2fa4aa9][96])
- **config:** retire @semantic-release/changelog ([787a281][97])

### Features

- add build-changelog to npm scripts ([8393a87][98])

## [2.1.4][99] (2020-11-28)

### Bug Fixes

- **actions:** ensure metadata is gathered properly ([31ece1c][100])
- **release:** remove extra newlines during changelogs generation
  ([72acb24][101])

## [2.1.3][102] (2020-11-28)

### Bug Fixes

- **release:** update how changelogs are generated ([8ce1760][103])

## [2.1.2][104] (2020-11-28)

### Bug Fixes

- **actions:** remove erroneous build-dist from lint job ([2cdd373][105])
- **actions:** remove erroneous build-dist from test-unit job ([fcb2232][106])
- **config:** fix babel.config.js with NODE_LTS ([cdf4610][107])

## [2.1.1][108] (2020-11-26)

### Bug Fixes

- **actions:** update gather-metadata with more accurate grep ([961ecef][109])

# [2.1.0][110] (2020-11-25)

### Bug Fixes

- **actions:** gather-metadata steps gather and skip properly ([97682f4][111])
- **actions:** if statements now use | instead of > ([24e3739][112])
- **actions:** move comments out of multiline statements ([874f8d6][113])

### Features

- **actions:** introduce new streamlined workflow job configuration
  ([4bb9d94][114])

## [2.0.1][115] (2020-11-24)

### Bug Fixes

- **actions:** add git author and commiter env vars for semantic-release signed
  commits ([f01d16b][116])
- **dependabot:** ensure dependabot formats GitHub Actions PRs correctly
  ([bcdbd0e][117])
- add build commits to release rule ([3124ab0][118])

# [2.0.0][119] (2020-11-24)

### Bug Fixes

- **actions:** add install-dependencies to semantic-release needs
  ([d8cc836][120])
- **actions:** deps caching done properly ([bbe0416][121])
- **actions:** ensure repo is always checked out first ([65e5d46][122])
- **actions:** removed signed pushes ([f621f76][123])
- **package.json:** do not guess error codes ([f5428c8][124])
- **package.json:** ensure machine-friendly run-script syntax ([7af5e45][125])
- **package.json:** ensure set +e used in run-scripts when necessary
  ([6d86c0b][126])
- **package.json:** precedence error caused bad return value in lint
  ([e8bfbc5][127])

### Features

- added diff to take the difference ([5e40deb][128])

### Performance Improvements

- **actions:** better caching ([6da0a65][129])
- **actions:** made test-integration-chrome independent ([d489cfa][130])
- **actions:** only cache node_modules ([57775c9][131])

### BREAKING CHANGES

- switch to semantic-release CI/CD pipeline Moved away from publish-please to a
  fully automated build-test-deploy release cycle based on semantic-release.

# Archived Releases (pre-CI/CD)

- Version 1.0.15 ([57faa2c][132])

<!---->

- Version 1.0.7 ([5ced626][133])

- Version 1.0.0 ([df91d82][134])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.5...v6.1.6
[4]:
  https://github.com/Xunnamius/workflow-playground/commit/828751d051d5cff15c5d1315fc9729d82cab985f
[5]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.5...v6.1.4
[6]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.4...v6.1.5
[7]:
  https://github.com/Xunnamius/workflow-playground/commit/d8ed033ead9608349f2d876c4cecebecd65dc47f
[8]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.3...v6.1.4
[9]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.2...v6.1.3
[10]:
  https://github.com/Xunnamius/workflow-playground/commit/55e1235d39714dd00c146549f630ec62f4952e2d
[11]:
  https://github.com/Xunnamius/workflow-playground/commit/5448960531a3bd19cc38de44f13519a8888e342a
[12]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.1...v6.1.2
[13]:
  https://github.com/Xunnamius/workflow-playground/commit/5921653ac2c26273eace14aa3e4994960be521a0
[14]:
  https://github.com/Xunnamius/workflow-playground/commit/b2ea6f13a5c7d7c8d89f76b6ced72c938448a235
[15]:
  https://github.com/Xunnamius/workflow-playground/commit/03825f051d3ed50dad916f0e3f3993a0fb3c51ce
[16]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.0...v6.1.1
[17]:
  https://github.com/Xunnamius/workflow-playground/commit/bda2d5ea408563874429d8ed8e30455d5e717a54
[18]: https://github.com/Xunnamius/workflow-playground/compare/v6.0.5...v6.1.0
[19]:
  https://github.com/Xunnamius/workflow-playground/commit/f90dde35c32e676c765b131ddfa135246ad7f7eb
[20]:
  https://github.com/Xunnamius/workflow-playground/commit/b9d92fdd4f2d594a62fce6d16299152c79a43566
[21]: https://github.com/Xunnamius/workflow-playground/compare/v6.0.4...v6.0.5
[22]:
  https://github.com/Xunnamius/workflow-playground/commit/4b6c84c788c4105db8a1ddd10ecb044be31876f9
[23]: https://github.com/Xunnamius/workflow-playground/compare/v6.0.3...v6.0.4
[24]:
  https://github.com/Xunnamius/workflow-playground/commit/85b8e12e1bce4baa22bd301da9dda21ea289fd9d
[25]: https://github.com/Xunnamius/workflow-playground/compare/v6.0.2...v6.0.3
[26]:
  https://github.com/Xunnamius/workflow-playground/commit/02746df97d17f717de608d4b5cc3838e2992a150
[27]:
  https://github.com/Xunnamius/workflow-playground/commit/7520e0fc29f22ef537fc947a5f32d6b6bc762cc5
[28]: https://github.com/Xunnamius/workflow-playground/compare/v6.0.1...v6.0.2
[29]:
  https://github.com/Xunnamius/workflow-playground/commit/747a6742dabcc6cdc8fd835b2f673e355f212cdf
[30]:
  https://github.com/Xunnamius/workflow-playground/commit/b3742961a2824618bf68953c532055a04ef03920
[31]: https://github.com/Xunnamius/workflow-playground/compare/v6.0.0...v6.0.1
[32]:
  https://github.com/Xunnamius/workflow-playground/commit/d40192bd13d9b301e09723cdca68be60b44b5d82
[33]: https://github.com/Xunnamius/workflow-playground/compare/v5.0.3...v6.0.0
[34]:
  https://github.com/Xunnamius/workflow-playground/commit/95a13d21dd902a490d445d3c8aee89c59b2131f1
[35]: https://github.com/Xunnamius/workflow-playground/compare/v5.0.2...v5.0.3
[36]:
  https://github.com/Xunnamius/workflow-playground/commit/0a91fad0d4f6c41c600294b8ecfc84b16e906980
[37]: https://github.com/Xunnamius/workflow-playground/compare/v5.0.1...v5.0.2
[38]:
  https://github.com/Xunnamius/workflow-playground/commit/e62c5b42ca2b43326cc9eec8db248020b2d90ec8
[39]: https://github.com/Xunnamius/workflow-playground/compare/v5.0.0...v5.0.1
[40]:
  https://github.com/Xunnamius/workflow-playground/commit/2ef6297d257bcd1661093eed5069714382f01f36
[41]:
  https://github.com/Xunnamius/workflow-playground/commit/d73cac91012e0a32ee1f52a3b476b8639f325ca2
[42]:
  https://github.com/Xunnamius/workflow-playground/commit/da477b770bc7b17db8eb474eb523e8468881e447
[43]: https://github.com/Xunnamius/workflow-playground/compare/v4.0.0...v5.0.0
[44]:
  https://github.com/Xunnamius/workflow-playground/commit/7391321c8da14ed35a865a4e245db2ae3b72a606
[45]: https://github.com/Xunnamius/workflow-playground/compare/v3.0.1...v4.0.0
[46]:
  https://github.com/Xunnamius/workflow-playground/commit/02662fcac7c02ac3f5a32dba750e00d23d6c88f2
[47]:
  https://github.com/Xunnamius/workflow-playground/commit/5a2aef4cebc6ed136fa3fb5015f38f47de8ce781
[48]: https://github.com/Xunnamius/workflow-playground/compare/v3.0.0...v3.0.1
[49]:
  https://github.com/Xunnamius/workflow-playground/commit/b15149139462980707fc8ec6d7d67414ac207e6e
[50]:
  https://github.com/Xunnamius/workflow-playground/commit/783ba76db816b0cc391450d442c708420203c46c
[51]:
  https://github.com/Xunnamius/workflow-playground/commit/a876517a6ea8b339e8c0eca9f7763bcc85919f87
[52]: https://github.com/Xunnamius/workflow-playground/compare/v2.3.4...v3.0.0
[53]:
  https://github.com/Xunnamius/workflow-playground/commit/4fd2952e78b5cfda17a84a538bcc382d06621926
[54]:
  https://github.com/Xunnamius/workflow-playground/commit/b060d3ec78744b72bd53450ecd1664110cdebda8
[55]:
  https://github.com/Xunnamius/workflow-playground/commit/3a4bdff03f0d8ea450f53aebceb33525801b3c34
[56]:
  https://github.com/Xunnamius/workflow-playground/commit/1096e6fbfff5fd399c2f1af5fe2b6496c5ca3cfe
[57]:
  https://github.com/Xunnamius/workflow-playground/commit/4a50ecd7eb03eafebc2412de7a556d319c39bc0e
[58]:
  https://github.com/Xunnamius/workflow-playground/commit/446e961cee1326be7db4085f118447ac30f15078
[59]:
  https://github.com/Xunnamius/workflow-playground/commit/d5dfc506c9d68a0f299559b5e76c92630c9edf0a
[60]:
  https://github.com/Xunnamius/workflow-playground/commit/0447d5959113f033e2ed5644efdb4c80c4fe5085
[61]:
  https://github.com/Xunnamius/workflow-playground/commit/e537358218a8abcc97008f5460b37a1949dd0681
[62]: https://github.com/Xunnamius/workflow-playground/compare/v2.3.3...v2.3.4
[63]:
  https://github.com/Xunnamius/workflow-playground/commit/10c71bf50522ae3902f84cf6171b9fce4d1470f4
[64]:
  https://github.com/Xunnamius/workflow-playground/commit/57e0c162e73d5850807e9f496df0aa6203834f4c
[65]:
  https://github.com/Xunnamius/workflow-playground/commit/e5d6d42ad230f45b0239bcec671a18a2789ae8f2
[66]:
  https://github.com/Xunnamius/workflow-playground/commit/efb29c5c991d58ae8aa684159f4db0d3f8f6dbbe
[67]: https://github.com/Xunnamius/workflow-playground/compare/v2.3.2...v2.3.3
[68]:
  https://github.com/Xunnamius/workflow-playground/commit/c2789bfd8f43bb9fc60316131c4e6d17dd2c1de8
[69]:
  https://github.com/Xunnamius/workflow-playground/commit/1dcdcc1cac342f9bdca71e49f9cc332e9118932f
[70]: https://github.com/Xunnamius/workflow-playground/compare/v2.3.1...v2.3.2
[71]:
  https://github.com/Xunnamius/workflow-playground/commit/598a3966ce1d85c6dcc2945878ebd3ba2c969654
[72]: https://github.com/Xunnamius/workflow-playground/compare/v2.3.0...v2.3.1
[73]:
  https://github.com/Xunnamius/workflow-playground/commit/022603bbe50298a8e7500a77cb77ce5aae4b45f7
[74]:
  https://github.com/Xunnamius/workflow-playground/commit/0d181ea032a9f5322137dacf5ee97e6a28acd035
[75]:
  https://github.com/Xunnamius/workflow-playground/commit/ec632ad52472184edbed16111b4a5b306ae6f7ed
[76]: https://github.com/Xunnamius/workflow-playground/compare/v2.2.2...v2.3.0
[77]:
  https://github.com/Xunnamius/workflow-playground/commit/d9213827f9448a93affcab8ca652e37f24b247b9
[78]:
  https://github.com/Xunnamius/workflow-playground/commit/c44c310f01d78798c5a13213dafeef5e1f25b25f
[79]: https://github.com/Xunnamius/workflow-playground/compare/v2.2.1...v2.2.2
[80]:
  https://github.com/Xunnamius/workflow-playground/commit/d630264d1ee046ddf943ad287b15f5308ce4c224
[81]: https://github.com/Xunnamius/workflow-playground/compare/v2.2.0...v2.2.1
[82]:
  https://github.com/Xunnamius/workflow-playground/commit/d4ccacb6533b04c4889b909ecd2bffd4c7b5fa79
[83]: https://github.com/Xunnamius/workflow-playground/compare/v2.1.4...v2.2.0
[84]:
  https://github.com/Xunnamius/workflow-playground/commit/a62380bc4f75c42d74640916fde44fb5811f150d
[85]:
  https://github.com/Xunnamius/workflow-playground/commit/823f8b5434e07250b8aefbd9f4a49e0ea05cc9e5
[86]:
  https://github.com/Xunnamius/workflow-playground/commit/bd10f4414522a0c6b406adb2fba9d58abee6830e
[87]:
  https://github.com/Xunnamius/workflow-playground/commit/46db2ee7335e9b37cfafce98776171304f0072b7
[88]:
  https://github.com/Xunnamius/workflow-playground/commit/f3800e471e93308b37eb2668dd5c4bfde9e7b88e
[89]:
  https://github.com/Xunnamius/workflow-playground/commit/9a7adb4fb9592328efd3b33bc156b87f89a59ffb
[90]:
  https://github.com/Xunnamius/workflow-playground/commit/af76dbe52921aed27c4cf275875de9c1194561d4
[91]:
  https://github.com/Xunnamius/workflow-playground/commit/69a25baa21133345e2a2baffd2f69d0abe950c02
[92]:
  https://github.com/Xunnamius/workflow-playground/commit/14b86ae815f2c24aef82dcad41b0ead036a2f4c4
[93]:
  https://github.com/Xunnamius/workflow-playground/commit/cc94940e7b903a141f4e16a4169411c0a45bfb96
[94]:
  https://github.com/Xunnamius/workflow-playground/commit/66adf2f3d8ea4bd1813fac4c704ff327ac175855
[95]:
  https://github.com/Xunnamius/workflow-playground/commit/f0d0032fb51ddb98b2f35b229c9d1873c00264f7
[96]:
  https://github.com/Xunnamius/workflow-playground/commit/2fa4aa962a17c6075d28af876f67fe98d0f519b6
[97]:
  https://github.com/Xunnamius/workflow-playground/commit/787a28144826609ddffb5e0d1937f314b1039ab6
[98]:
  https://github.com/Xunnamius/workflow-playground/commit/8393a87974cea60087a8d11fc9b0bac0f7ecc6e2
[99]: https://github.com/Xunnamius/workflow-playground/compare/v2.1.3...v2.1.4
[100]:
  https://github.com/Xunnamius/workflow-playground/commit/31ece1cb7d0b91bbc38b1c3eb6366c13d1da7fd2
[101]:
  https://github.com/Xunnamius/workflow-playground/commit/72acb24c0c521217fb8eebb5204ddf1591808326
[102]: https://github.com/Xunnamius/workflow-playground/compare/v2.1.2...v2.1.3
[103]:
  https://github.com/Xunnamius/workflow-playground/commit/8ce176044293af0ac3b5dd2495d7d0eb580bbede
[104]: https://github.com/Xunnamius/workflow-playground/compare/v2.1.1...v2.1.2
[105]:
  https://github.com/Xunnamius/workflow-playground/commit/2cdd373974fdc62480e5681813c09cba98aebddc
[106]:
  https://github.com/Xunnamius/workflow-playground/commit/fcb2232cf6e628f58033a78a0d6aa107f9794589
[107]:
  https://github.com/Xunnamius/workflow-playground/commit/cdf46102e7d5b590bd153d2444cb13c24d4170b3
[108]: https://github.com/Xunnamius/workflow-playground/compare/v2.1.0...v2.1.1
[109]:
  https://github.com/Xunnamius/workflow-playground/commit/961ecef3555403928cf319012ca6bd40093da66e
[110]: https://github.com/Xunnamius/workflow-playground/compare/v2.0.1...v2.1.0
[111]:
  https://github.com/Xunnamius/workflow-playground/commit/97682f434acc501e4964c31770472acae0320ad5
[112]:
  https://github.com/Xunnamius/workflow-playground/commit/24e373907b23a68627fe535049f603c93bfa1361
[113]:
  https://github.com/Xunnamius/workflow-playground/commit/874f8d65aff5d8e27e14e8d9e4a0e37450713ce0
[114]:
  https://github.com/Xunnamius/workflow-playground/commit/4bb9d94050d1b8fb164bdf04b1bffa10705aa0a2
[115]: https://github.com/Xunnamius/workflow-playground/compare/v2.0.0...v2.0.1
[116]:
  https://github.com/Xunnamius/workflow-playground/commit/f01d16b51e444eb801121e81718994b4add18799
[117]:
  https://github.com/Xunnamius/workflow-playground/commit/bcdbd0e1c23786185cd43b11d9ce18d3498e9ff5
[118]:
  https://github.com/Xunnamius/workflow-playground/commit/3124ab0500924ce75f3387d59d5d60ea3e77c827
[119]: https://github.com/Xunnamius/workflow-playground/compare/v1.0.15...v2.0.0
[120]:
  https://github.com/Xunnamius/workflow-playground/commit/d8cc83611de2a595631f42bee0f10591b11bc59c
[121]:
  https://github.com/Xunnamius/workflow-playground/commit/bbe0416125a303076bc3f8a5a96c9669db926b46
[122]:
  https://github.com/Xunnamius/workflow-playground/commit/65e5d463925b888e08dd69a9da7f4e9f4c9be872
[123]:
  https://github.com/Xunnamius/workflow-playground/commit/f621f76895e6a0749f76a6a1abd90253b8694717
[124]:
  https://github.com/Xunnamius/workflow-playground/commit/f5428c87836552db96d40310c52abd47e593e729
[125]:
  https://github.com/Xunnamius/workflow-playground/commit/7af5e45eb0712da5d80022cedd535a673082d195
[126]:
  https://github.com/Xunnamius/workflow-playground/commit/6d86c0b4ce2218a93f9919a256a89a04af83a9d1
[127]:
  https://github.com/Xunnamius/workflow-playground/commit/e8bfbc590ec8ac73071ae61708c1ca29f2beee36
[128]:
  https://github.com/Xunnamius/workflow-playground/commit/5e40deb020c4bafb103a6bc78fbeecb266a5c983
[129]:
  https://github.com/Xunnamius/workflow-playground/commit/6da0a656aba20f022d26335ec33c9c4c4ea37c02
[130]:
  https://github.com/Xunnamius/workflow-playground/commit/d489cfacd8514a210ec0b570ab3c5a283cf5bc19
[131]:
  https://github.com/Xunnamius/workflow-playground/commit/57775c9cc3ffdad94f09b23923785a081e2a08ee
[132]:
  https://github.com/Xunnamius/workflow-playground/commit/57faa2cc448f39383b56db04ec06b1093f5f7bcd
[133]:
  https://github.com/Xunnamius/workflow-playground/commit/5ced6267d44731337fe5e0a69776dd5642d8a54d
[134]:
  https://github.com/Xunnamius/workflow-playground/commit/df91d8298edd2d756f732b2245ba086e91197505
[135]: https://github.com/Xunnamius/workflow-playground/compare/v6.1.6...v6.1.7
[136]:
  https://github.com/Xunnamius/workflow-playground/commit/1c35aa4aad597e8e25f937c7aba25ec83905f631
[137]:
  https://github.com/Xunnamius/workflow-playground/commit/8a7fc06df25ffa5381bb5d771eb6e5a619fcbf64
