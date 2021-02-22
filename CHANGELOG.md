# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Conventional Commits][383], and this project adheres to
[Semantic Versioning][384].

## [7.8.20][385] (2021-02-22)

### Build System

- Update sort-package-json ([9d52947][386])

## [7.8.19][1] (2021-02-22)

### Bug Fixes

- **integration-external-dummy.test.ts:** ensure proper cwd is used for
  executing externals ([99d175e][2])

## [7.8.18][3] (2021-02-22)

### Bug Fixes

- **.changelogrc.js:** fix dark magic ([6a3007d][4])

### Build System

- **package-lock.json:** remove shelljs ([92a2b23][5])
- Spellcheck-commit and .changelogrc no longer use shelljs ([b3633c3][6])
- **setup.ts:** update with new lib-pkg tools ([e77df0b][7])

## [7.8.17][8] (2021-02-22)

### Build System

- **externals:** update expected exit code to 2 ([fb22498][9])

## [7.8.16][10] (2021-02-21)

### Build System

- **unit-external-dummy.test.ts:** upgrade to protectedImportFactory
  ([8f8fe26][11])

## [7.8.15][12] (2021-02-21)

### Build System

- **unit-external-dummy.test.ts:** protect against process exit in first test
  ([e5f17e4][13])

## [7.8.14][14] (2021-02-21)

### Build System

- **build-test-deploy.yml:** reduce retries to 6, timeout to 10 minutes
  ([e748b1f][15])

## [7.8.13][16] (2021-02-21)

### Bug Fixes

- **setup.ts:** backport setup fix ([ee1aca2][17])

## [7.8.12][18] (2021-02-21)

### Build System

- **package.json:** chmod cli during build-dist step ([d6f8cc3][19])

## [7.8.11][20] (2021-02-21)

### Build System

- **expect-env.js:** rename from env-expect.js ([aa14ed9][21])

## [7.8.10][22] (2021-02-21)

### Bug Fixes

- **build-test-deploy.yml:** check real exit code ([4ff058e][23])

## [7.8.9][24] (2021-02-20)

### Build System

- **package-lock.json:** make consistent with package.json ([8a63ac7][25])
- **package.json:** remove extraneous module ([1012053][26])

## [7.8.8][27] (2021-02-20)

### Build System

- **deps:** bump object-path from 0.11.3 to 0.11.5 ([95c974a][28])

## [7.8.7][29] (2021-02-20)

### Bug Fixes

- Package.json & package-lock.json to reduce vulnerabilities ([41de5ce][30])

## [7.8.6][31] (2021-02-20)

### Bug Fixes

- **build-test-deploy.yml:** even more resilient error checking ([b050bba][32])

### Build System

- **deps:** bump object-path from 0.11.3 to 0.11.5 ([981229a][33])

## [7.8.5][34] (2021-02-20)

### Build System

- **build-test-deploy.yml:** better error handling and debug messaging for
  auto-merge job ([2dee6f6][35])
- **deps:** bump object-path from 0.11.3 to 0.11.5 ([1667e70][36])

## [7.8.4][37] (2021-02-20)

### Bug Fixes

- **build-test-deploy.yml:** auto-merge checks PR data before attempting merge
  ([1c8044e][38])

### Build System

- **deps:** bump object-path from 0.11.3 to 0.11.5 ([e9e3ca1][39])

## [7.8.3][40] (2021-02-20)

### Bug Fixes

- **build-test-deploy.yml:** resolve rejections from merge function
  ([33f983f][41])

### Build System

- **build-test-deploy.yml:** better error messages ([6d5573e][42])
- **deps:** bump object-path from 0.11.3 to 0.11.5 ([c493a8c][43])

## [7.8.2][44] (2021-02-20)

### Build System

- **deps:** bump object-path from 0.11.4 to 0.11.5 ([aaf7665][45])

## [7.8.1][46] (2021-02-20)

### Bug Fixes

- **build-test-deploy.yml:** store and use proper result ([09d35d7][47])

### Build System

- **deps:** bump object-path from 0.11.4 to 0.11.5 ([658f591][48])
- **package.json:** bump jest timeout to 1 minute ([cb59af2][49])

# [7.8.0][50] (2021-02-20)

### Features

- **build-test-deploy.yml:** add auto-merge job and functionality
  ([4b22c20][51])

## [7.7.1][52] (2021-02-19)

### Bug Fixes

- **build-test-deploy.yml:** whitelist is again case-insensitive ([c034e86][53])

### Build System

- **build-test-deploy.yml:** also run on reopened PRs ([ece78e3][54])
- **build-test-deploy.yml:** codecov failures no longer fail the whole pipeline
  ([a111d7f][55])
- **build-test-deploy.yml:** restructure env w/ comments ([b980cbe][56])
- **build-test-deploy.yml:** update repo owner whitelist step ([b4f89cf][57])

# [7.7.0][58] (2021-02-19)

### Bug Fixes

- Account for node 12 ([4cdb325][59])
- **.eslintrc.js:** ensure eslint plays nice with fs/dns promise interface
  ([4209e51][60])

### Build System

- **package.json:** external integration test runs w/ proper prefix
  ([5056c05][61])
- **package.json:** update deps ([4ef9c1b][62])

### Features

- **external-scripts:** reorganize externals; rename external to dummy
  ([efc916e][63])
- **test:** externalize jest helper proto-packages ([2dbfb8e][64])

## [7.6.5][65] (2021-02-15)

### Build System

- **package.json:** add private:false ([090cdfe][66])

## [7.6.4][67] (2021-02-14)

### Bug Fixes

- **webpack.config.js:** call dotenv properly ([22a8424][68])

## [7.6.3][69] (2021-02-14)

### Bug Fixes

- Incorrect package name ([bbbd58d][70])

### Build System

- **package.json:** update deps ([599b6c2][71])
- **webpack.config.js:** backport updates from projector-lens-cli
  ([312a2ef][72])

## [7.6.2][73] (2021-02-11)

### Bug Fixes

- **package.json:** account for new ./dist organization ([99a01ea][74])

### Build System

- **test:** complete testing suite ([35da4c3][75])
- **webpack.config.js:** add externals ([7a8f54b][76])
- Move debug to deps, update dependencies ([6587184][77])
- **.eslintrc.js:** false env browser/webextensions ([71809e9][78])
- **integration-client.test.ts:** removed ([f080ad0][79])
- Normalize across repos ([2020d61][80])
- **webpack.config.js:** normalize webpack configuration across repos
  ([8a3bc81][81])
- **webpack.config.js:** remove ES6 syntax from JS file ([dd2b254][82])

## [7.6.1][83] (2021-01-30)

### Build System

- **babel.config.js:** add babel-plugin-transform-default-named-imports
  ([720dc20][84])
- **package.json:** update deps ([26a8371][85])
- **post-release-check.yml:** add five minute wait for npm updates
  ([411fd7d][86])

# [7.6.0][87] (2021-01-29)

### Features

- **post-release-check.yml:** run executables as part of check ([31bdc0c][88])

## [7.5.18][89] (2021-01-29)

### Build System

- **build-test-deploy.yml:** drop support for webpack 4 ([e7f2bbb][90])
- **cleanup.yml:** fix bug for new package repos ([8d16630][91])

## [7.5.17][92] (2021-01-29)

### Build System

- **babel.config.js:** add plugin-rename-imports ([c59e45c][93])
- **build-test-deploy.yml:** remove externals exception ([3addf11][94])
- **test:** drop support for 10.x ([fb18856][95])
- **test:** standardize imports ([4f23d4e][96])

## [7.5.16][97] (2021-01-23)

### Build System

- **package.json:** nicer destructured vals in docs ([3b81944][98])

## [7.5.15][99] (2021-01-23)

### Build System

- Backport/normalize across packages ([85881f7][100])

## [7.5.14][101] (2021-01-22)

### Build System

- Update debug statement syntax ([107b953][102])

## [7.5.13][103] (2021-01-21)

### Build System

- **.github/workflows/build-test-deploy.yml:** fix peer dependency installation
  ([2dce9c4][104])

## [7.5.12][105] (2021-01-17)

### Build System

- Backport changes from gac ([172fa77][106])

## [7.5.11][107] (2021-01-12)

### Build System

- Rebuild lockfile ([fef7222][108])
- Update babel-plugin-transform-mjs-imports ([16a597d][109])

## [7.5.10][110] (2021-01-12)

### Build System

- Update -browser to -client everywhere ([597d6c5][111])

## [7.5.9][112] (2021-01-10)

### Bug Fixes

- **webpack.config.js:** better process.env support ([25db498][113])

## [7.5.8][114] (2021-01-06)

### Build System

- **webpack.config.js:** process.env shim ([3973279][115])

## [7.5.7][116] (2021-01-06)

### Build System

- **.github/workflows/post-release-check.yml:** fix post-release-check?2
  ([51123db][117])

## [7.5.6][118] (2021-01-06)

### Build System

- **.github/workflows/post-release-check.yml:** fix post-release-check?2
  ([31f61f5][119])

## [7.5.5][120] (2021-01-06)

### Build System

- **.github/workflows/post-release-check.yml:** fix post-release-check?
  ([7212561][121])

## [7.5.4][122] (2021-01-06)

### Build System

- **.github/workflows/post-release-check.yml:** add new post-release-check
  ([ed31f79][123])

## [7.5.3][124] (2021-01-05)

### Build System

- **package.json:** backported updates ([8a051d1][125])

## [7.5.2][126] (2021-01-05)

### Build System

- **package.json:** backported updates ([2cf6e46][127])

## [7.5.1][128] (2021-01-05)

### Bug Fixes

- **env-expect.js:** use syntax for node 10 ([cb77d20][129])
- **package.json:** return browser test ([6c1c4d4][130])

### Build System

- **.github:** add INCLUDE_EXTERNALS ([c755631][131])
- **build-test-deploy.yml:** remove codecov upload for externals integration
  tests ([3fdd509][132])
- **package.json:** backports from the wild ([eda277e][133])
- **webpack.config.js:** add env-expect ([0f401ff][134])

# [7.5.0][135] (2021-01-05)

### Features

- **package-lock.json:** add unique-filename ([77c033f][136])

## [7.4.5][137] (2021-01-05)

### Bug Fixes

- **package.json:** order of items in exports objects are VERY IMPORTANT
  ([677b4ce][138])

## [7.4.4][139] (2021-01-04)

### Build System

- **.github/workflows/build-test-deploy.yml:** move webpack install
  responsibility to integration ([5c8fefa][140])

## [7.4.3][141] (2021-01-04)

### Build System

- **.github/workflows/build-test-deploy.yml:** add debug output to npm ci
  ([09304d7][142])
- **.github/workflows/build-test-deploy.yml:** fix debug output ([c247c7a][143])
- **.github/workflows/build-test-deploy.yml:** fix debug output ([6eb7d41][144])
- **.github/workflows/build-test-deploy.yml:** fix debug output (normalize node
  support) ([0528db6][145])

## [7.4.2][146] (2021-01-04)

### Build System

- **.github/workflows/build-test-deploy.yml:** do not run npm install when stdin
  is empty ([2842a31][147])
- **package.json:** revert "test: peer dep install" ([4c174fe][148])
- **package.json:** test: peer dep install ([6c00005][149])

## [7.4.1][150] (2021-01-04)

### Bug Fixes

- **env-expect.js:** improve RegExp support; better debugging experience
  ([aff191d][151])

### Build System

- **.github/workflows/build-test-deploy.yml:** add improved npm install step
  ([e9b9e49][152])

# [7.4.0][153] (2021-01-04)

### Features

- **.github:** add codecov to externals; add flags to codecov ([e47160b][154])

# [7.3.0][155] (2021-01-04)

### Bug Fixes

- **env-expect.js:** simple RegExp names no longer error ([a576d0b][156])

### Build System

- **package.json:** better lint output ([0dc7c4e][157])

### Features

- **.github:** backport env matrix hint ([c01b325][158])
- **readme.md:** add NPM7 warning ([24f0888][159])

## [7.2.3][160] (2021-01-04)

### Build System

- Updates back-ported from package migration ([7869420][161])

## [7.2.2][162] (2021-01-03)

### Bug Fixes

- Add remark frontmatter support ([a8cd378][163])

## [7.2.1][164] (2021-01-03)

### Bug Fixes

- **templates:** fix strange issue template problems ([73edb9a][165])

# [7.2.0][166] (2021-01-03)

### Bug Fixes

- **changelog.md:** conclude tests _breaks champagne glass_ ([864253c][167])
- **workflows:** actually fix should-skip determination algo ([bf8c76b][168])
- **workflows:** fix should-skip determination algo ([f7d1256][169])

# [7.1.0][170] (2021-01-03)

### Bug Fixes

- **.github:** add set +e to should-skip ([27c9750][171])
- **readme.md:** complete skip test ([67264ed][172])
- **workflows:** replace should-skip determination algo ([cd6236a][173])

# [7.0.0][174] (2021-01-03)

### Features

- **changelog.md:** add skip cd/cd skip pipeline commands ([5765c02][175])

### BREAKING CHANGES

- **changelog.md:** **skip github/github skip options were removed**

## [6.7.3][176] (2021-01-03)

### Bug Fixes

- **.changelogrc.js:** show reverts in changelog ([ec26302][177])

### Reverts

- _"chore(changelog.md): update pipeline usage bullets"_ ([6e9fb73][178])

## [6.7.2][179] (2021-01-03)

### Reverts

- _"chore(readme.md): debug chore"_ ([38bfb77][180])
- _"debug(readme.md): debug debug"_ ([aff005d][181])

## [6.7.1][182] (2021-01-02)

### Bug Fixes

- **.changelogrc.js:** exclude pre-releases ([c24773e][183])
- **.changelogrc.js:** fix bad type bug ([ff94fe1][184])
- **.changelogrc.js:** several writer glitches fixed ([717ffdb][185])

### Build System

- **package.json:** better build-changelog ([f2e971e][186])

# [6.7.0][187] (2021-01-02)

### Features

- **.changelogrc.js:** reintroduced selective capitalization ([1fdcb9c][188])

# [6.6.0][189] (2021-01-02)

### Bug Fixes

- **.changelogrc.js:** correct improper array access ([0cb2645][190])

### Build System

- **.changelogrc.js:** fix revision filtering during generation ([ac06b33][191])
- **.changelogrc.js:** fix spread bug ([c6a3cd6][192])

### Features

- **.changelogrc.js:** centralize release rules ([69ec71f][193])
- **release.config.js:** use imported releaseRules ([2fe163c][194])

## [6.5.1][195] (2021-01-02)

### Bug Fixes

- **release.config.js:** add title to releaseRules objects ([99c2868][196])

### Build System

- **.changelogrc.js:** add debug output to .changelogrc.js ([d47c48b][197])

# [6.5.0][198] (2021-01-02)

### Features

- **.changelogrc.js:** add debug to all javascript ([54488d9][199])

## [6.4.3][200] (2021-01-02)

### Bug Fixes

- **build-test-deploy.yml:** debug pipeline statements always return true
  ([b759c31][201])

### Build System

- **.github:** fix debug scope name (leave / alone) ([de2c7b1][202])
- **package.json:** remove deploy test script ([4fb641c][203])

## [6.4.2][204] (2021-01-02)

### Build System

- **.github:** add DEBUG support to metadata gathering steps ([6b2e238][205])

## [6.4.1][206] (2021-01-02)

### Build System

- **.github/workflows/build-test-deploy.yml:** add DEBUG support
  ([de7ef33][207])
- **release.config.js:** fix bracket scoping issue ([c8ef15e][208])
- **release.config.js:** fix deploy to run at success step; add debug output
  ([b9e8cc5][209])

# [6.4.0][210] (2021-01-02)

### Features

- **package.json:** vercel deploy test ([ed73fc3][211])

## [6.3.8][212] (2021-01-02)

### Build System

- **build-test-deploy.yml:** add awareness of deploy npm script to pipeline
  ([d923b29][213])

## [6.3.7][214] (2021-01-02)

### Build System

- **.github/workflows/cleanup.yml:** fix metadata gathering step
  ([44dd462][215])

## [6.3.6][216] (2021-01-01)

### Build System

- **.github/workflows/cleanup.yml:** add metadata filtering step
  ([6667075][217])

## [6.3.5][218] (2021-01-01)

### Build System

- **.github:** fix hardcoded package name ([a10bac3][219])

## [6.3.4][220] (2021-01-01)

### Build System

- Move npm lint step before lint-staged in husky hook ([e8bac90][221])
- Update remark linting to exit 1 on error, quiet on success ([077abce][222])
- Update sort-package-json to contrib-env-expect ([6885a34][223])
- **pre-commit:** decentralize remark; more resilient build system
  ([ba0ef58][224])

## [6.3.3][225] (2021-01-01)

### Build System

- **pre-commit:** centralize remark; add markdown and eslint linting to CL
  ([772dee1][226])
- **pre-commit:** move eslint (and tsc) CL linting out of lint-staged and
  directly into husky ([e38af90][227])

## [6.3.2][228] (2021-01-01)

### Build System

- **.github:** fix pre/post formatting steps ([f757db8][229])

## [6.3.1][230] (2021-01-01)

### Bug Fixes

- **test:** improve test coverage ([7f4a70a][231])

# [6.3.0][232] (2021-01-01)

### Build System

- **package.json:** simplify lint ([dda943e][233])

### Features

- **src:** add div function ([636c353][234])

# [6.2.0][235] (2021-01-01)

### Build System

- **.github/workflows/build-test-deploy.yml:** add remark and formatting steps
  ([e16cd8b][236])
- **.husky:** remove verbose flag ([538c374][237])
- **package.json:** fix lint-staged remark and prettier ([6fbd1df][238])
- **package.json:** remove debug echo ([33a510d][239])
- **release.config.js:** fix to use gfm ([db4c284][240])

### Features

- **package.json:** add remark-gfm; test lint-staged ([bcbf3f5][241])

## [6.1.7][242] (2020-12-31)

### Bug Fixes

- **README.md:** simulated external-PR fix ([8a7fc06][243])

### Reverts

- _"chore(readme.md): format husky test"_ ([9675eeb][244])

## [6.1.6][245] (2020-12-30)

### Build System

- **package.json:** conclude dynamic continuous integration tests
  ([828751d][246])

## [6.1.5][247] (2020-12-30)

### Bug Fixes

- **build-test-deploy.yml:** clearer error language with invalid externals
  config ([d8ed033][248])

## [6.1.4][249] (2020-12-30)

### Reverts

- _"build(build-test-deploy.yml): debug should warn"_ ([44f5cd4][250])

## [6.1.3][251] (2020-12-30)

### Build System

- **build-test-deploy.yml:** debug should warn ([55e1235][252])
- **build-test-deploy.yml:** fix syntax error ([5448960][253])

## [6.1.2][254] (2020-12-30)

### Build System

- **.github:** better snyk ignore ([5921653][255])
- **package.json:** remove high audit CI failure ([b2ea6f1][256])
- **package.json:** test high audit CI failure ([03825f0][257])

## [6.1.1][258] (2020-12-30)

### Bug Fixes

- **readme.md:** dummy fix ([bda2d5e][259])

# [6.1.0][260] (2020-12-30)

### Bug Fixes

- **readme.md:** dummy fix ([b9d92fd][261])

### Features

- **readme.md:** dummy feat ([f90dde3][262])

## [6.0.5][263] (2020-12-30)

### Bug Fixes

- **readme.md:** add codecov badge ([4b6c84c][264])

## [6.0.4][265] (2020-12-30)

### Build System

- **.github:** more resilient cleanup routine ([85b8e12][266])

## [6.0.3][267] (2020-12-30)

### Build System

- **.github:** better cleanup caching ([02746df][268])
- **.github:** fix cleanup ([7520e0f][269])

## [6.0.2][270] (2020-12-30)

### Build System

- **cleanup.yml:** add cleanup workflow ([747a674][271])
- **release.config.js:** remove console.info ([b374296][272])

## [6.0.1][273] (2020-12-30)

### Build System

- **.github:** ensure deploy stage is using latest node and npm ([d40192b][274])

# [6.0.0][275] (2020-12-30)

### Features

- **readme.md:** fake feature ([95a13d2][276])

### BREAKING CHANGES

- **readme.md:** **fake breaking change**

## [5.0.3][277] (2020-12-29)

### Build System

- **.github:** loosen CD pipeline launch check: run CD on all branches
  ([0a91fad][278])

### Reverts

- _"chore(.gitignore): ignore coverage"_ ([4aab0bd][279])

## [5.0.2][280] (2020-12-29)

### Build System

- **.github:** add codecov config and add fetch-depth to test-unit
  ([e62c5b4][281])

## [5.0.1][282] (2020-12-29)

### Build System

- **.github:** add codecov-action to test-unit job ([2ef6297][283])
- **package.json:** add codecov package ([d73cac9][284])
- **package.json:** remove codecov package ([da477b7][285])

# [5.0.0][286] (2020-12-29)

### Chore

- Fix capitalization of non-release commit types ([7391321][287])

### BREAKING CHANGES

- **Dummy BC 7**
- **Dummy BC 9**
- **Dummy BCs 10, 8, and 6**

# [4.0.0][288] (2020-12-29)

### Bug Fixes

- **.changelogrc.js:** remove BC capitalization and sentence-case code
  ([02662fc][289])

### Chore

- Update comment language ([5a2aef4][290])

### BREAKING CHANGES

- **Dummy BC 1**
- **Dummy BC 2**
- **Dummy BCs 3, 4, and 5**

## [3.0.1][291] (2020-12-28)

### Bug Fixes

- **.github:** update ci committer name and email to xunn-bot ([b151491][292])
- **package.json:** update typedoc to latest beta and fix npmbd ([783ba76][293])

### Build System

- **package.json:** update deps ([a876517][294])

# [3.0.0][295] (2020-12-07)

### Bug Fixes

- **.github/workflows:** fix syntax: "no-ci/\*\*" ([b060d3e][296])
- **config:** rename changelog.config.js to .changelogrc.js ([d5dfc50][297])
- **package.json:** use @xunnamius/semantic-release ([0447d59][298])

### Build System

- **.github/workflows:** build system now ignores branches with names that begin
  with "no-ci/" ([3a4bdff][299])
- **.github/workflows:** workflow no longer triggered on tag push,
  dependabot/snyk push ([1096e6f][300])
- **package-lock.json:** fix syntax error ([4fd2952][301])

### Debug

- Update semantic-release to Xunnamius/semantic-release#contrib-holistic
  ([446e961][302])

### Features

- Added mult function ([e537358][303])

### Reverts

- _"chore(.github/workflows): exclude ./.git from build caching"_
  ([b75d8ac][304])
- _"debug(.github/workflows): fake change"_ ([d59bb1a][305])
- _"debug(.github/workflows): test force push protection"_ ([4cc6ee6][306])

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

## [2.3.4][307] (2020-12-03)

### Build System

- **commitlint:** add debug type to type-enum ([10c71bf][308])
- **config:** fix changelog.config.js bug when subject is undefined
  ([57e0c16][309])
- **package.json:** downgrade puppeteer and upgrade other deps ([e5d6d42][310])
- Added .env.example and env-expect ([efb29c5][311])

### Reverts

- revert "debug: switch actions ci to install" ([f9a3e23][312])

## [2.3.3][313] (2020-11-30)

### Bug Fixes

- **spellcheck:** fix incorrect parsing of global cspell vscode settings
  ([c2789bf][314])

### Build System

- **release:** fix changelogTitle skip title ([1dcdcc1][315])

## [2.3.2][316] (2020-11-30)

### Build System

- **release:** fix changelogTitle spread bug ([598a396][317])

## [2.3.1][318] (2020-11-30)

### Build System

- Install @semantic-release/changelog ([022603b][319])
- **release:** fix changelogTitle bug ([0d181ea][320])
- **release:** fix SHOULD_UPDATE_CHANGELOG conditional ([ec632ad][321])

# [2.3.0][322] (2020-11-30)

### Features

- **tooling:** spellcheck now ignores camelCase et al ([d921382][323])

### Performance Improvements

- Better faster spellchecking ([c44c310][324])

## [2.2.2][325] (2020-11-29)

### Build System

- **changelog:** changelog now includes relevant build-type commits
  ([d630264][326])

## [2.2.1][327] (2020-11-29)

### Build System

- **changelog:** changelog now includes relevant reverts ([d4ccacb][328])

# [2.2.0][329] (2020-11-29)

### Bug Fixes

- **actions:** bring metadata collection in-line with new format
  ([a62380b][330])
- **config:** changelog config honors skip commands, leaves reverts alone
  ([823f8b5][331])
- **config:** fix broken changelog.config.js structure ([bd10f44][332])
- **package.json:** downgrade typedoc and assoc plugins ([46db2ee][333])
- **package.json:** install lint-staged dep and script ([f3800e4][334])
- **package.json:** install spellcheck dependencies ([9a7adb4][335])
- **spellcheck:** change "contains" to "includes" ([af76dbe][336])
- **spellcheck:** fix bug where spellcheck reads from wrong message source
  ([69a25ba][337])
- **spellcheck:** spellcheck now leverages assorted knowledge ([14b86ae][338])

### Build System

- Install @semantic-release/exec ([cc94940][339])
- **config:** fix changelog.config.js operating on individual releases
  ([66adf2f][340])
- **config:** fix husky pre-commit hook ([f0d0032][341])
- **config:** generate CHANGELOG.md beautifully ([2fa4aa9][342])
- **config:** retire @semantic-release/changelog ([787a281][343])

### Features

- Add build-changelog to npm scripts ([8393a87][344])

## [2.1.4][345] (2020-11-28)

### Bug Fixes

- **actions:** ensure metadata is gathered properly ([31ece1c][346])
- **release:** remove extra newlines during changelogs generation
  ([72acb24][347])

## [2.1.3][348] (2020-11-28)

### Bug Fixes

- **release:** update how changelogs are generated ([8ce1760][349])

## [2.1.2][350] (2020-11-28)

### Bug Fixes

- **actions:** remove erroneous build-dist from lint job ([2cdd373][351])
- **actions:** remove erroneous build-dist from test-unit job ([fcb2232][352])
- **config:** fix babel.config.js with NODE_LTS ([cdf4610][353])

## [2.1.1][354] (2020-11-26)

### Bug Fixes

- **actions:** update gather-metadata with more accurate grep ([961ecef][355])

# [2.1.0][356] (2020-11-25)

### Bug Fixes

- **actions:** gather-metadata steps gather and skip properly ([97682f4][357])
- **actions:** if statements now use | instead of > ([24e3739][358])
- **actions:** move comments out of multiline statements ([874f8d6][359])

### Features

- **actions:** introduce new streamlined workflow job configuration
  ([4bb9d94][360])

## [2.0.1][361] (2020-11-24)

### Bug Fixes

- **actions:** add git author and commiter env vars for semantic-release signed
  commits ([f01d16b][362])
- **dependabot:** ensure dependabot formats GitHub Actions PRs correctly
  ([bcdbd0e][363])
- Add build commits to release rule ([3124ab0][364])

# [2.0.0][365] (2020-11-24)

### Bug Fixes

- **actions:** add install-dependencies to semantic-release needs
  ([d8cc836][366])
- **actions:** deps caching done properly ([bbe0416][367])
- **actions:** ensure repo is always checked out first ([65e5d46][368])
- **actions:** removed signed pushes ([f621f76][369])
- **package.json:** do not guess error codes ([f5428c8][370])
- **package.json:** ensure machine-friendly run-script syntax ([7af5e45][371])
- **package.json:** ensure set +e used in run-scripts when necessary
  ([6d86c0b][372])
- **package.json:** precedence error caused bad return value in lint
  ([e8bfbc5][373])

### Features

- Added diff to take the difference ([5e40deb][374])

### Performance Improvements

- **actions:** better caching ([6da0a65][375])
- **actions:** made test-integration-chrome independent ([d489cfa][376])
- **actions:** only cache node_modules ([57775c9][377])

### Reverts

- _"debug: added debug step"_ ([1741cde][378])
- _"debug: debug cache miss"_ ([42af347][379])

### BREAKING CHANGES

- **Switch to semantic-release CI/CD pipeline**

Moved away from publish-please to a fully automated build-test-deploy release
cycle based on semantic-release.

# Archived Releases (pre-CI/CD)

- Version 1.0.15 ([57faa2c][380])

<!---->

- Version 1.0.7 ([5ced626][381])

- Version 1.0.0 ([df91d82][382])

[1]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.8.18...v7.8.19
[2]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/99d175e562e3b017b840feb5ccb1e807f247bc57
[3]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.8.17...v7.8.18
[4]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/6a3007d9eba09e81c9e1eaeca446554c58f5da92
[5]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/92a2b2380d4612071e828822b5e52b414401b145
[6]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/b3633c39b0e4cde9ee17f8853bff96b2e1d5af42
[7]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/e77df0b20196eb41c37926417630bb6af48aea05
[8]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.8.16...v7.8.17
[9]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/fb224981a2308e2801b816fd7478528f7e63cf09
[10]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.8.15...v7.8.16
[11]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/8f8fe26094296807b7c25802f4d84de99dd38268
[12]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.8.14...v7.8.15
[13]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/e5f17e471e5b0779232d36918e78759e4399cd20
[14]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.8.13...v7.8.14
[15]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/e748b1fec952f9ed8649a56d4a7fc408708cc5e8
[16]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.8.12...v7.8.13
[17]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/ee1aca29d73d090e50cdaa89d06bcaf7c0fe4b8b
[18]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.8.11...v7.8.12
[19]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/d6f8cc3acf88211e671b2671c73966db887bcc13
[20]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.8.10...v7.8.11
[21]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/aa14ed93521522f56e4988066baa0a4de2630ea2
[22]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.8.9...v7.8.10
[23]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/4ff058e05dc82f22a42b51e3609720fd20f0a569
[24]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.8.8...v7.8.9
[25]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/8a63ac708322bd88630f11bd0cb658ba26506e8c
[26]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/1012053f234ef093dbd1949939fddcb0f2b3bed4
[27]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.8.7...v7.8.8
[28]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/95c974a66a381da546dc9e810d04f22f565a557c
[29]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.8.6...v7.8.7
[30]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/41de5cee6a6e5c56366a62d556f0c7f14b4bfc39
[31]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.8.5...v7.8.6
[32]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/b050bbaea56e30caf4c6beccdaf6ce7eebbc3df9
[33]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/981229a5664e10200bd50d70f40650b4782e4740
[34]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.8.4...v7.8.5
[35]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/2dee6f61fb2af699216a052cbef74be04fcf7248
[36]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/1667e70b88284725de91a1f5b701f1b6f0dfad3a
[37]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.8.3...v7.8.4
[38]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/1c8044eb6d28ae182b4d7cdfde25712096c09d82
[39]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/e9e3ca1b9c95e06d2bc66defbe76ad2060f06711
[40]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.8.2...v7.8.3
[41]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/33f983f774533369a569a4a02ddba260b5af44e9
[42]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/6d5573edb539232a11a81003beb287216c307716
[43]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/c493a8c37f694376b30ff35b7850a9e178da1b45
[44]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.8.1...v7.8.2
[45]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/aaf76651b7632f7f9ac6c957c0d8e74ddd0099ac
[46]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.8.0...v7.8.1
[47]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/09d35d7379f73a4af8fc8c89bcd81e828e7fe8a7
[48]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/658f59103f46992cd0fed413bdf4bb0d5be4d995
[49]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/cb59af2d8c68c03bbc8d834a0384670c71a5e0ec
[50]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.7.1...v7.8.0
[51]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/4b22c20a232710bb98836a42d374b844b785373b
[52]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.7.0...v7.7.1
[53]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/c034e8683db76f52b1ba6dd80c30e896bc9f3618
[54]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/ece78e30af62e095b238fddd25ce33282e1b031c
[55]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/a111d7fd12173ae42d8d4ce711713040de7e7ccf
[56]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/b980cbe95af63586284fbea254921f12fbefa95f
[57]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/b4f89cf2b39bef5519981df54f03b95048b00208
[58]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.6.5...v7.7.0
[59]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/4cdb325a19edeb2338fc27d19a1c6b5af2dda81b
[60]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/4209e5163df6c2cfca6b3fae2e676c535cce8a9b
[61]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/5056c05dfef6039e4c2e47c08fcaf08f056458e9
[62]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/4ef9c1b43fa79224c518cec35c8f3b39b735e95d
[63]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/efc916efbf1e1367614fa9136044e21024b901dc
[64]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/2dbfb8e654b50f9c94cb413a2bbb6cf51e0f1409
[65]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.6.4...v7.6.5
[66]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/090cdfe5bba623bcf93e99a6167d077cb1f50efe
[67]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.6.3...v7.6.4
[68]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/22a8424d3c39befa850235defdd1c2844e1b557f
[69]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.6.2...v7.6.3
[70]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/bbbd58dcfd0cf3718d433e9a7f72f98d8391db31
[71]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/599b6c2e3b8f9d5ab030582fb6252402b70e76f4
[72]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/312a2efe1bff6497a0459ca0b84b2130f73ff630
[73]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.6.1...v7.6.2
[74]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/99a01ea12f1fc45c3e1b8ea6b84067436855aea9
[75]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/35da4c355197c0a7c25b8c98919884c19e198f8a
[76]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/7a8f54b6afb44c6ca81c75919dc002f408f3379d
[77]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/658718435a782393ae188425d51a5c17a1bc4be5
[78]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/71809e9a866f33d107b1481997e4810ea58869a7
[79]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/f080ad03de773df842dc48731abd547c00b38b24
[80]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/2020d61075fb2ae5905d1e5b46f6fc6dbde9f690
[81]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/8a3bc8145ad10ed4f49f954dde4af2210177a43b
[82]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/dd2b25492a971573cea5ed3c5139388c72857a85
[83]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.6.0...v7.6.1
[84]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/720dc20d162a2421e6008f995feda7bb94166a17
[85]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/26a83711815c8a18343fb296e0c03619d2f46198
[86]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/411fd7d704e0fd0eb365fb2ef776e994c99d7884
[87]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.18...v7.6.0
[88]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/31bdc0c22f3ffe3fa2a4b3efd08b75e68a5b8443
[89]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.17...v7.5.18
[90]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/e7f2bbb7c066e4fadb2484f938353456e2312c8e
[91]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/8d16630dd5a5d092d1e74c385e582c0a592ee20e
[92]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.16...v7.5.17
[93]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/c59e45c31b71404ede66de65a20befd7fc62f392
[94]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/3addf1183dafdd2ae6f38151f84877e015703d37
[95]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/fb18856babb2be3d69030629173b94deb134a0a8
[96]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/4f23d4ee5fb37e220072dcf76ebc81f6f84b22cf
[97]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.15...v7.5.16
[98]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/3b81944504da09657d3232b437c4d04ba9fa95a4
[99]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.14...v7.5.15
[100]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/85881f72411301a06791be63c76a67fbff45d3fd
[101]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.13...v7.5.14
[102]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/107b953b834fb54bb2ee1c418d5bb8119fabe3ac
[103]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.12...v7.5.13
[104]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/2dce9c47d069b05df41481678a967dccc4637ead
[105]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.11...v7.5.12
[106]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/172fa775e677fe977d2b8265460ec192818b1996
[107]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.10...v7.5.11
[108]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/fef722214527e07c51c47fd635a24f0be4a4f839
[109]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/16a597d7a2eb2ee07543c382844e18cb7ce363e6
[110]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.9...v7.5.10
[111]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/597d6c58440c5e7aac53fbbe23b57e6c19125ad2
[112]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.8...v7.5.9
[113]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/25db498808da4891f7f40b8a04b09e68b920d130
[114]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.7...v7.5.8
[115]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/3973279927772eea45ac8573c1a91dea3635c6eb
[116]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.6...v7.5.7
[117]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/51123db7bc0a158d3849f99de64fbe1691011fdd
[118]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.5...v7.5.6
[119]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/31f61f5dc94357a5950d2b2fe90ef9e6268e4ee4
[120]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.4...v7.5.5
[121]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/7212561b4cf094f47169b7b38e9ae4a9550e569b
[122]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.3...v7.5.4
[123]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/ed31f79e0ebe97823e2a62b9e6aa7b3e2355ff7c
[124]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.2...v7.5.3
[125]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/8a051d1222ed6df2d1c9e1f2e2eb890d763a6333
[126]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.1...v7.5.2
[127]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/2cf6e46a6fe59b8a47123f2215ba8caf7976ad87
[128]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.0...v7.5.1
[129]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/cb77d20313504c4cb25f082680fe321d6409a421
[130]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/6c1c4d48ea0ca4b60135976a0186152b97a31ec7
[131]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/c7556314894b98e9d727c27096e69695b5eb46fa
[132]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/3fdd509eac028d1eecd953ba4bc0931460aafeb9
[133]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/eda277e8f0a37e171bc329c9c6fc2e8c2d028396
[134]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/0f401ffec3ebdd4736b3ef0aa52419293f5ad599
[135]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.4.5...v7.5.0
[136]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/77c033ff143dff64455049b8314cd528bae4e198
[137]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.4.4...v7.4.5
[138]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/677b4cedff4d3e4541736e612035d909a0df6131
[139]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.4.3...v7.4.4
[140]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/5c8fefa330e31620fe2af848d42eb2c5ab881d02
[141]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.4.2...v7.4.3
[142]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/09304d7cbeea2f0b6f938a907fa1f2351ae51a5b
[143]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/c247c7a353a522de79dcf677994c278dfc993d65
[144]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/6eb7d4120f89cd1aaa0f0be2216ae327c66546cb
[145]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/0528db62704fb9d6a5139c60f131c432a23eeaa0
[146]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.4.1...v7.4.2
[147]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/2842a3173829dc06bef77cb0b039ad584681f414
[148]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/4c174fe72d1a8f7e731b0a78d713223308015256
[149]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/6c000053c1b04088ed83b5690b4317bfa56e8d39
[150]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.4.0...v7.4.1
[151]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/aff191d1d036b9098493a3057927d24b3a175f1f
[152]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/e9b9e49f60737401c2d524ef21674a75d89f02a4
[153]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.3.0...v7.4.0
[154]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/e47160b09b956e69f0d9eb0cab01a3440bb66645
[155]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.2.3...v7.3.0
[156]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/a576d0b3e2a3e3f3cd4b0007ccd024f206877fbe
[157]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/0dc7c4eef97a021462e54b1d00cd789544202d9e
[158]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/c01b325ea28e7b4cf940e622faf7c805e42c5880
[159]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/24f088811ed253dac8791e85d27aa2c194111328
[160]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.2.2...v7.2.3
[161]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/786942001834cb5337fabf921cbc14ea4cc04d2f
[162]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.2.1...v7.2.2
[163]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/a8cd37812dc9e304bf813c742b2d4d54c1c9c183
[164]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.2.0...v7.2.1
[165]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/73edb9a864bbc4b7d5a7eb1d03ca4ce3b8e02e95
[166]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.1.0...v7.2.0
[167]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/864253c3a63de8cbb6577244c8a419ea8a97decd
[168]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/bf8c76bc12c51476719204c44b25c361b7258e90
[169]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/f7d12565f96e1626ffa393ba4ac39786197818e7
[170]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.0.0...v7.1.0
[171]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/27c97500ced2ef3085ce5bf984ccfa3e2bf5e04f
[172]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/67264ed159f3686a5f89fda5cec5f07d465af49e
[173]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/cd6236ad92608b126f7b8df52693f75db28b488d
[174]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.7.3...v7.0.0
[175]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/5765c024e82c3e7e0c77808e3860c85fb8c8d759
[176]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.7.2...v6.7.3
[177]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/ec263026c77f36f1b15c67e102f42300108a43ce
[178]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/6e9fb7333b29c973517b6c2813c162f0c00c0f4b
[179]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.7.1...v6.7.2
[180]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/38bfb775cde6952a35a7daca6ad3e191cc0fa37b
[181]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/aff005d252799e06e7a84aab1b5f88af62cf8901
[182]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.7.0...v6.7.1
[183]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/c24773e0265cc559ad8b6596dd3d97740f18e64f
[184]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/ff94fe15bb18f2cc1d545a0b7948d0e818b48ae9
[185]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/717ffdb672294ccca92a87d368777e09d35a2ab6
[186]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/f2e971ece7f3b60647ab3584db988dd8cbfd5d97
[187]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.6.0...v6.7.0
[188]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/1fdcb9c6c500f88fbc2b7b6ec7f427f0a4995080
[189]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.5.1...v6.6.0
[190]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/0cb26453351737c2ff0476b02f76ca82e3087f88
[191]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/ac06b3300ed526f58f26a18e4a5465f9e6ee8f13
[192]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/c6a3cd632cf814ca9d103bb4868ecafd032ed527
[193]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/69ec71f088e1e162cf7695940b92e3637941e452
[194]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/2fe163c01107f6a1a31fddb871a6eae27f07fd3f
[195]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.5.0...v6.5.1
[196]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/99c2868b2682621a350c02665199a6132c3a8ec8
[197]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/d47c48bccb6110aca895d2472d611cd95134e156
[198]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.4.3...v6.5.0
[199]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/54488d92317360c2e358bca9238e60e2daca64dd
[200]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.4.2...v6.4.3
[201]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/b759c31195eb816c8c7fec1d18f89d85ed437ff1
[202]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/de2c7b1582b0ea20213ab5f761e7dc9994183f50
[203]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/4fb641cc202f3a510389566ce55415686bbc6a4e
[204]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.4.1...v6.4.2
[205]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/6b2e2383ef2b54a56a665e6b9ecef7d93e5fec2e
[206]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.4.0...v6.4.1
[207]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/de7ef33e1d74831b441e909c4e628527ed2900c0
[208]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/c8ef15e813811f037acd12133f485bd8435ac9cc
[209]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/b9e8cc58ea93099742c91d7431687965e131a3df
[210]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.3.8...v6.4.0
[211]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/ed73fc3e5c9c7f0f621802e9ea429dcfca36bf52
[212]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.3.7...v6.3.8
[213]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/d923b299e05789a20a08dc2e4059e5e6e1099658
[214]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.3.6...v6.3.7
[215]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/44dd46246911a9cb58baf0ec0b84aa5093f2628e
[216]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.3.5...v6.3.6
[217]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/66670754987250b92806dfa7d94c1cb46349f07f
[218]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.3.4...v6.3.5
[219]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/a10bac3efbce2b4bd511420fd4d7466c288d9706
[220]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.3.3...v6.3.4
[221]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/e8bac90bb68b79d4c4ab1853bdd4c45dddef44fe
[222]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/077abcea8df04b8b6cf292f97d0e4b37cda28f7b
[223]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/6885a3467c42b61e1edb93fed363ceca6ff15b28
[224]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/ba0ef5863ce550a6988ce259d7500807bdaa5db8
[225]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.3.2...v6.3.3
[226]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/772dee15ff4eaeba84f8327f30c69868c5e514c8
[227]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/e38af90e7720f08f46d6220168226336e6c040d4
[228]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.3.1...v6.3.2
[229]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/f757db8f0e97286abda30b825de9f803cd63c097
[230]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.3.0...v6.3.1
[231]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/7f4a70af17528c36e80440827663251f79c9c1be
[232]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.2.0...v6.3.0
[233]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/dda943e24fcd164ae850feb1f1bd16924b773773
[234]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/636c35303cb5d04d239b13e89a3040e483c81cf7
[235]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.1.7...v6.2.0
[236]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/e16cd8b559096a076739d79a15ff79e5efa7f581
[237]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/538c374e597751bc198b6d52bc0a8fa41de6494d
[238]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/6fbd1df74d4bc1a7ad852e76e8fa805138d95657
[239]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/33a510dce4dcaf004732e739e3e9c3d12518646a
[240]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/db4c284e914688911f1b0d75c569b83a198113c2
[241]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/bcbf3f5cc2d0bba5f282de657977ab44c70b1bfe
[242]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.1.6...v6.1.7
[243]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/8a7fc06df25ffa5381bb5d771eb6e5a619fcbf64
[244]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/9675eeb1a06b715fea6cd9024cf94aa31d44943c
[245]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.1.5...v6.1.6
[246]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/828751d051d5cff15c5d1315fc9729d82cab985f
[247]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.1.4...v6.1.5
[248]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/d8ed033ead9608349f2d876c4cecebecd65dc47f
[249]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.1.3...v6.1.4
[250]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/44f5cd4c3c6adeb548ba89adba8e884336f41520
[251]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.1.2...v6.1.3
[252]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/55e1235d39714dd00c146549f630ec62f4952e2d
[253]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/5448960531a3bd19cc38de44f13519a8888e342a
[254]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.1.1...v6.1.2
[255]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/5921653ac2c26273eace14aa3e4994960be521a0
[256]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/b2ea6f13a5c7d7c8d89f76b6ced72c938448a235
[257]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/03825f051d3ed50dad916f0e3f3993a0fb3c51ce
[258]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.1.0...v6.1.1
[259]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/bda2d5ea408563874429d8ed8e30455d5e717a54
[260]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.0.5...v6.1.0
[261]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/b9d92fdd4f2d594a62fce6d16299152c79a43566
[262]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/f90dde35c32e676c765b131ddfa135246ad7f7eb
[263]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.0.4...v6.0.5
[264]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/4b6c84c788c4105db8a1ddd10ecb044be31876f9
[265]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.0.3...v6.0.4
[266]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/85b8e12e1bce4baa22bd301da9dda21ea289fd9d
[267]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.0.2...v6.0.3
[268]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/02746df97d17f717de608d4b5cc3838e2992a150
[269]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/7520e0fc29f22ef537fc947a5f32d6b6bc762cc5
[270]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.0.1...v6.0.2
[271]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/747a6742dabcc6cdc8fd835b2f673e355f212cdf
[272]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/b3742961a2824618bf68953c532055a04ef03920
[273]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.0.0...v6.0.1
[274]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/d40192bd13d9b301e09723cdca68be60b44b5d82
[275]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v5.0.3...v6.0.0
[276]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/95a13d21dd902a490d445d3c8aee89c59b2131f1
[277]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v5.0.2...v5.0.3
[278]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/0a91fad0d4f6c41c600294b8ecfc84b16e906980
[279]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/4aab0bda87d426f81663773342f77bf661c79ce0
[280]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v5.0.1...v5.0.2
[281]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/e62c5b42ca2b43326cc9eec8db248020b2d90ec8
[282]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v5.0.0...v5.0.1
[283]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/2ef6297d257bcd1661093eed5069714382f01f36
[284]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/d73cac91012e0a32ee1f52a3b476b8639f325ca2
[285]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/da477b770bc7b17db8eb474eb523e8468881e447
[286]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v4.0.0...v5.0.0
[287]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/7391321c8da14ed35a865a4e245db2ae3b72a606
[288]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v3.0.1...v4.0.0
[289]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/02662fcac7c02ac3f5a32dba750e00d23d6c88f2
[290]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/5a2aef4cebc6ed136fa3fb5015f38f47de8ce781
[291]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v3.0.0...v3.0.1
[292]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/b15149139462980707fc8ec6d7d67414ac207e6e
[293]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/783ba76db816b0cc391450d442c708420203c46c
[294]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/a876517a6ea8b339e8c0eca9f7763bcc85919f87
[295]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v2.3.4...v3.0.0
[296]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/b060d3ec78744b72bd53450ecd1664110cdebda8
[297]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/d5dfc506c9d68a0f299559b5e76c92630c9edf0a
[298]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/0447d5959113f033e2ed5644efdb4c80c4fe5085
[299]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/3a4bdff03f0d8ea450f53aebceb33525801b3c34
[300]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/1096e6fbfff5fd399c2f1af5fe2b6496c5ca3cfe
[301]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/4fd2952e78b5cfda17a84a538bcc382d06621926
[302]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/446e961cee1326be7db4085f118447ac30f15078
[303]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/e537358218a8abcc97008f5460b37a1949dd0681
[304]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/b75d8ac9bb35a28aa8ebbe8dc52589bc7783d0cd
[305]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/d59bb1a385279427ee93ac6babbc2a8f7544e599
[306]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/4cc6ee68cec6500f99e918443fee5deae32a9f0a
[307]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v2.3.3...v2.3.4
[308]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/10c71bf50522ae3902f84cf6171b9fce4d1470f4
[309]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/57e0c162e73d5850807e9f496df0aa6203834f4c
[310]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/e5d6d42ad230f45b0239bcec671a18a2789ae8f2
[311]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/efb29c5c991d58ae8aa684159f4db0d3f8f6dbbe
[312]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/f9a3e231bf5b99619d5aabccdba6f6299642b6e9
[313]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v2.3.2...v2.3.3
[314]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/c2789bfd8f43bb9fc60316131c4e6d17dd2c1de8
[315]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/1dcdcc1cac342f9bdca71e49f9cc332e9118932f
[316]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v2.3.1...v2.3.2
[317]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/598a3966ce1d85c6dcc2945878ebd3ba2c969654
[318]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v2.3.0...v2.3.1
[319]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/022603bbe50298a8e7500a77cb77ce5aae4b45f7
[320]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/0d181ea032a9f5322137dacf5ee97e6a28acd035
[321]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/ec632ad52472184edbed16111b4a5b306ae6f7ed
[322]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v2.2.2...v2.3.0
[323]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/d9213827f9448a93affcab8ca652e37f24b247b9
[324]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/c44c310f01d78798c5a13213dafeef5e1f25b25f
[325]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v2.2.1...v2.2.2
[326]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/d630264d1ee046ddf943ad287b15f5308ce4c224
[327]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v2.2.0...v2.2.1
[328]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/d4ccacb6533b04c4889b909ecd2bffd4c7b5fa79
[329]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v2.1.4...v2.2.0
[330]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/a62380bc4f75c42d74640916fde44fb5811f150d
[331]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/823f8b5434e07250b8aefbd9f4a49e0ea05cc9e5
[332]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/bd10f4414522a0c6b406adb2fba9d58abee6830e
[333]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/46db2ee7335e9b37cfafce98776171304f0072b7
[334]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/f3800e471e93308b37eb2668dd5c4bfde9e7b88e
[335]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/9a7adb4fb9592328efd3b33bc156b87f89a59ffb
[336]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/af76dbe52921aed27c4cf275875de9c1194561d4
[337]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/69a25baa21133345e2a2baffd2f69d0abe950c02
[338]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/14b86ae815f2c24aef82dcad41b0ead036a2f4c4
[339]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/cc94940e7b903a141f4e16a4169411c0a45bfb96
[340]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/66adf2f3d8ea4bd1813fac4c704ff327ac175855
[341]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/f0d0032fb51ddb98b2f35b229c9d1873c00264f7
[342]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/2fa4aa962a17c6075d28af876f67fe98d0f519b6
[343]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/787a28144826609ddffb5e0d1937f314b1039ab6
[344]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/8393a87974cea60087a8d11fc9b0bac0f7ecc6e2
[345]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v2.1.3...v2.1.4
[346]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/31ece1cb7d0b91bbc38b1c3eb6366c13d1da7fd2
[347]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/72acb24c0c521217fb8eebb5204ddf1591808326
[348]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v2.1.2...v2.1.3
[349]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/8ce176044293af0ac3b5dd2495d7d0eb580bbede
[350]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v2.1.1...v2.1.2
[351]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/2cdd373974fdc62480e5681813c09cba98aebddc
[352]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/fcb2232cf6e628f58033a78a0d6aa107f9794589
[353]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/cdf46102e7d5b590bd153d2444cb13c24d4170b3
[354]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v2.1.0...v2.1.1
[355]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/961ecef3555403928cf319012ca6bd40093da66e
[356]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v2.0.1...v2.1.0
[357]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/97682f434acc501e4964c31770472acae0320ad5
[358]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/24e373907b23a68627fe535049f603c93bfa1361
[359]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/874f8d65aff5d8e27e14e8d9e4a0e37450713ce0
[360]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/4bb9d94050d1b8fb164bdf04b1bffa10705aa0a2
[361]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v2.0.0...v2.0.1
[362]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/f01d16b51e444eb801121e81718994b4add18799
[363]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/bcdbd0e1c23786185cd43b11d9ce18d3498e9ff5
[364]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/3124ab0500924ce75f3387d59d5d60ea3e77c827
[365]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v1.0.15...v2.0.0
[366]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/d8cc83611de2a595631f42bee0f10591b11bc59c
[367]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/bbe0416125a303076bc3f8a5a96c9669db926b46
[368]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/65e5d463925b888e08dd69a9da7f4e9f4c9be872
[369]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/f621f76895e6a0749f76a6a1abd90253b8694717
[370]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/f5428c87836552db96d40310c52abd47e593e729
[371]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/7af5e45eb0712da5d80022cedd535a673082d195
[372]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/6d86c0b4ce2218a93f9919a256a89a04af83a9d1
[373]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/e8bfbc590ec8ac73071ae61708c1ca29f2beee36
[374]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/5e40deb020c4bafb103a6bc78fbeecb266a5c983
[375]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/6da0a656aba20f022d26335ec33c9c4c4ea37c02
[376]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/d489cfacd8514a210ec0b570ab3c5a283cf5bc19
[377]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/57775c9cc3ffdad94f09b23923785a081e2a08ee
[378]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/1741cde56623bdb6e3e0c1dc95dcbe094b197ebe
[379]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/42af3470f3e91e5d359d995888c83534b8d32060
[380]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/57faa2cc448f39383b56db04ec06b1093f5f7bcd
[381]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/5ced6267d44731337fe5e0a69776dd5642d8a54d
[382]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/df91d8298edd2d756f732b2245ba086e91197505
[383]: https://conventionalcommits.org
[384]: https://semver.org
[385]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.8.19...v7.8.20
[386]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/9d5294707831599fc5ad181dd0ca497bfffce19c
