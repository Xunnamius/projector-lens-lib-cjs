# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Conventional Commits][355], and this project adheres to
[Semantic Versioning][356].

## [7.8.8][357] (2021-02-20)

### Build System

- **deps:** bump object-path from 0.11.3 to 0.11.5 ([d284401][358])
- **deps:** bump object-path from 0.11.3 to 0.11.5 ([95c974a][359])

## [7.8.7][1] (2021-02-20)

### Bug Fixes

- Package.json & package-lock.json to reduce vulnerabilities ([41de5ce][2])

## [7.8.6][3] (2021-02-20)

### Bug Fixes

- **build-test-deploy.yml:** even more resilient error checking ([b050bba][4])

### Build System

- **deps:** bump object-path from 0.11.3 to 0.11.5 ([981229a][5])

## [7.8.5][6] (2021-02-20)

### Build System

- **build-test-deploy.yml:** better error handling and debug messaging for
  auto-merge job ([2dee6f6][7])
- **deps:** bump object-path from 0.11.3 to 0.11.5 ([1667e70][8])

## [7.8.4][9] (2021-02-20)

### Bug Fixes

- **build-test-deploy.yml:** auto-merge checks PR data before attempting merge
  ([1c8044e][10])

### Build System

- **deps:** bump object-path from 0.11.3 to 0.11.5 ([e9e3ca1][11])

## [7.8.3][12] (2021-02-20)

### Bug Fixes

- **build-test-deploy.yml:** resolve rejections from merge function
  ([33f983f][13])

### Build System

- **build-test-deploy.yml:** better error messages ([6d5573e][14])
- **deps:** bump object-path from 0.11.3 to 0.11.5 ([c493a8c][15])

## [7.8.2][16] (2021-02-20)

### Build System

- **deps:** bump object-path from 0.11.4 to 0.11.5 ([aaf7665][17])

## [7.8.1][18] (2021-02-20)

### Bug Fixes

- **build-test-deploy.yml:** store and use proper result ([09d35d7][19])

### Build System

- **deps:** bump object-path from 0.11.4 to 0.11.5 ([658f591][20])
- **package.json:** bump jest timeout to 1 minute ([cb59af2][21])

# [7.8.0][22] (2021-02-20)

### Features

- **build-test-deploy.yml:** add auto-merge job and functionality
  ([4b22c20][23])

## [7.7.1][24] (2021-02-19)

### Bug Fixes

- **build-test-deploy.yml:** whitelist is again case-insensitive ([c034e86][25])

### Build System

- **build-test-deploy.yml:** also run on reopened PRs ([ece78e3][26])
- **build-test-deploy.yml:** codecov failures no longer fail the whole pipeline
  ([a111d7f][27])
- **build-test-deploy.yml:** restructure env w/ comments ([b980cbe][28])
- **build-test-deploy.yml:** update repo owner whitelist step ([b4f89cf][29])

# [7.7.0][30] (2021-02-19)

### Bug Fixes

- Account for node 12 ([4cdb325][31])
- **.eslintrc.js:** ensure eslint plays nice with fs/dns promise interface
  ([4209e51][32])

### Build System

- **package.json:** external integration test runs w/ proper prefix
  ([5056c05][33])
- **package.json:** update deps ([4ef9c1b][34])

### Features

- **external-scripts:** reorganize externals; rename external to dummy
  ([efc916e][35])
- **test:** externalize jest helper proto-packages ([2dbfb8e][36])

## [7.6.5][37] (2021-02-15)

### Build System

- **package.json:** add private:false ([090cdfe][38])

## [7.6.4][39] (2021-02-14)

### Bug Fixes

- **webpack.config.js:** call dotenv properly ([22a8424][40])

## [7.6.3][41] (2021-02-14)

### Bug Fixes

- Incorrect package name ([bbbd58d][42])

### Build System

- **package.json:** update deps ([599b6c2][43])
- **webpack.config.js:** backport updates from projector-lens-cli
  ([312a2ef][44])

## [7.6.2][45] (2021-02-11)

### Bug Fixes

- **package.json:** account for new ./dist organization ([99a01ea][46])

### Build System

- **test:** complete testing suite ([35da4c3][47])
- **webpack.config.js:** add externals ([7a8f54b][48])
- Move debug to deps, update dependencies ([6587184][49])
- **.eslintrc.js:** false env browser/webextensions ([71809e9][50])
- **integration-client.test.ts:** removed ([f080ad0][51])
- Normalize across repos ([2020d61][52])
- **webpack.config.js:** normalize webpack configuration across repos
  ([8a3bc81][53])
- **webpack.config.js:** remove ES6 syntax from JS file ([dd2b254][54])

## [7.6.1][55] (2021-01-30)

### Build System

- **babel.config.js:** add babel-plugin-transform-default-named-imports
  ([720dc20][56])
- **package.json:** update deps ([26a8371][57])
- **post-release-check.yml:** add five minute wait for npm updates
  ([411fd7d][58])

# [7.6.0][59] (2021-01-29)

### Features

- **post-release-check.yml:** run executables as part of check ([31bdc0c][60])

## [7.5.18][61] (2021-01-29)

### Build System

- **build-test-deploy.yml:** drop support for webpack 4 ([e7f2bbb][62])
- **cleanup.yml:** fix bug for new package repos ([8d16630][63])

## [7.5.17][64] (2021-01-29)

### Build System

- **babel.config.js:** add plugin-rename-imports ([c59e45c][65])
- **build-test-deploy.yml:** remove externals exception ([3addf11][66])
- **test:** drop support for 10.x ([fb18856][67])
- **test:** standardize imports ([4f23d4e][68])

## [7.5.16][69] (2021-01-23)

### Build System

- **package.json:** nicer destructured vals in docs ([3b81944][70])

## [7.5.15][71] (2021-01-23)

### Build System

- Backport/normalize across packages ([85881f7][72])

## [7.5.14][73] (2021-01-22)

### Build System

- Update debug statement syntax ([107b953][74])

## [7.5.13][75] (2021-01-21)

### Build System

- **.github/workflows/build-test-deploy.yml:** fix peer dependency installation
  ([2dce9c4][76])

## [7.5.12][77] (2021-01-17)

### Build System

- Backport changes from gac ([172fa77][78])

## [7.5.11][79] (2021-01-12)

### Build System

- Rebuild lockfile ([fef7222][80])
- Update babel-plugin-transform-mjs-imports ([16a597d][81])

## [7.5.10][82] (2021-01-12)

### Build System

- Update -browser to -client everywhere ([597d6c5][83])

## [7.5.9][84] (2021-01-10)

### Bug Fixes

- **webpack.config.js:** better process.env support ([25db498][85])

## [7.5.8][86] (2021-01-06)

### Build System

- **webpack.config.js:** process.env shim ([3973279][87])

## [7.5.7][88] (2021-01-06)

### Build System

- **.github/workflows/post-release-check.yml:** fix post-release-check?2
  ([51123db][89])

## [7.5.6][90] (2021-01-06)

### Build System

- **.github/workflows/post-release-check.yml:** fix post-release-check?2
  ([31f61f5][91])

## [7.5.5][92] (2021-01-06)

### Build System

- **.github/workflows/post-release-check.yml:** fix post-release-check?
  ([7212561][93])

## [7.5.4][94] (2021-01-06)

### Build System

- **.github/workflows/post-release-check.yml:** add new post-release-check
  ([ed31f79][95])

## [7.5.3][96] (2021-01-05)

### Build System

- **package.json:** backported updates ([8a051d1][97])

## [7.5.2][98] (2021-01-05)

### Build System

- **package.json:** backported updates ([2cf6e46][99])

## [7.5.1][100] (2021-01-05)

### Bug Fixes

- **env-expect.js:** use syntax for node 10 ([cb77d20][101])
- **package.json:** return browser test ([6c1c4d4][102])

### Build System

- **.github:** add INCLUDE_EXTERNALS ([c755631][103])
- **build-test-deploy.yml:** remove codecov upload for externals integration
  tests ([3fdd509][104])
- **package.json:** backports from the wild ([eda277e][105])
- **webpack.config.js:** add env-expect ([0f401ff][106])

# [7.5.0][107] (2021-01-05)

### Features

- **package-lock.json:** add unique-filename ([77c033f][108])

## [7.4.5][109] (2021-01-05)

### Bug Fixes

- **package.json:** order of items in exports objects are VERY IMPORTANT
  ([677b4ce][110])

## [7.4.4][111] (2021-01-04)

### Build System

- **.github/workflows/build-test-deploy.yml:** move webpack install
  responsibility to integration ([5c8fefa][112])

## [7.4.3][113] (2021-01-04)

### Build System

- **.github/workflows/build-test-deploy.yml:** add debug output to npm ci
  ([09304d7][114])
- **.github/workflows/build-test-deploy.yml:** fix debug output ([c247c7a][115])
- **.github/workflows/build-test-deploy.yml:** fix debug output ([6eb7d41][116])
- **.github/workflows/build-test-deploy.yml:** fix debug output (normalize node
  support) ([0528db6][117])

## [7.4.2][118] (2021-01-04)

### Build System

- **.github/workflows/build-test-deploy.yml:** do not run npm install when stdin
  is empty ([2842a31][119])
- **package.json:** revert "test: peer dep install" ([4c174fe][120])
- **package.json:** test: peer dep install ([6c00005][121])

## [7.4.1][122] (2021-01-04)

### Bug Fixes

- **env-expect.js:** improve RegExp support; better debugging experience
  ([aff191d][123])

### Build System

- **.github/workflows/build-test-deploy.yml:** add improved npm install step
  ([e9b9e49][124])

# [7.4.0][125] (2021-01-04)

### Features

- **.github:** add codecov to externals; add flags to codecov ([e47160b][126])

# [7.3.0][127] (2021-01-04)

### Bug Fixes

- **env-expect.js:** simple RegExp names no longer error ([a576d0b][128])

### Build System

- **package.json:** better lint output ([0dc7c4e][129])

### Features

- **.github:** backport env matrix hint ([c01b325][130])
- **readme.md:** add NPM7 warning ([24f0888][131])

## [7.2.3][132] (2021-01-04)

### Build System

- Updates back-ported from package migration ([7869420][133])

## [7.2.2][134] (2021-01-03)

### Bug Fixes

- Add remark frontmatter support ([a8cd378][135])

## [7.2.1][136] (2021-01-03)

### Bug Fixes

- **templates:** fix strange issue template problems ([73edb9a][137])

# [7.2.0][138] (2021-01-03)

### Bug Fixes

- **changelog.md:** conclude tests _breaks champagne glass_ ([864253c][139])
- **workflows:** actually fix should-skip determination algo ([bf8c76b][140])
- **workflows:** fix should-skip determination algo ([f7d1256][141])

# [7.1.0][142] (2021-01-03)

### Bug Fixes

- **.github:** add set +e to should-skip ([27c9750][143])
- **readme.md:** complete skip test ([67264ed][144])
- **workflows:** replace should-skip determination algo ([cd6236a][145])

# [7.0.0][146] (2021-01-03)

### Features

- **changelog.md:** add skip cd/cd skip pipeline commands ([5765c02][147])

### BREAKING CHANGES

- **changelog.md:** **skip github/github skip options were removed**

## [6.7.3][148] (2021-01-03)

### Bug Fixes

- **.changelogrc.js:** show reverts in changelog ([ec26302][149])

### Reverts

- _"chore(changelog.md): update pipeline usage bullets"_ ([6e9fb73][150])

## [6.7.2][151] (2021-01-03)

### Reverts

- _"chore(readme.md): debug chore"_ ([38bfb77][152])
- _"debug(readme.md): debug debug"_ ([aff005d][153])

## [6.7.1][154] (2021-01-02)

### Bug Fixes

- **.changelogrc.js:** exclude pre-releases ([c24773e][155])
- **.changelogrc.js:** fix bad type bug ([ff94fe1][156])
- **.changelogrc.js:** several writer glitches fixed ([717ffdb][157])

### Build System

- **package.json:** better build-changelog ([f2e971e][158])

# [6.7.0][159] (2021-01-02)

### Features

- **.changelogrc.js:** reintroduced selective capitalization ([1fdcb9c][160])

# [6.6.0][161] (2021-01-02)

### Bug Fixes

- **.changelogrc.js:** correct improper array access ([0cb2645][162])

### Build System

- **.changelogrc.js:** fix revision filtering during generation ([ac06b33][163])
- **.changelogrc.js:** fix spread bug ([c6a3cd6][164])

### Features

- **.changelogrc.js:** centralize release rules ([69ec71f][165])
- **release.config.js:** use imported releaseRules ([2fe163c][166])

## [6.5.1][167] (2021-01-02)

### Bug Fixes

- **release.config.js:** add title to releaseRules objects ([99c2868][168])

### Build System

- **.changelogrc.js:** add debug output to .changelogrc.js ([d47c48b][169])

# [6.5.0][170] (2021-01-02)

### Features

- **.changelogrc.js:** add debug to all javascript ([54488d9][171])

## [6.4.3][172] (2021-01-02)

### Bug Fixes

- **build-test-deploy.yml:** debug pipeline statements always return true
  ([b759c31][173])

### Build System

- **.github:** fix debug scope name (leave / alone) ([de2c7b1][174])
- **package.json:** remove deploy test script ([4fb641c][175])

## [6.4.2][176] (2021-01-02)

### Build System

- **.github:** add DEBUG support to metadata gathering steps ([6b2e238][177])

## [6.4.1][178] (2021-01-02)

### Build System

- **.github/workflows/build-test-deploy.yml:** add DEBUG support
  ([de7ef33][179])
- **release.config.js:** fix bracket scoping issue ([c8ef15e][180])
- **release.config.js:** fix deploy to run at success step; add debug output
  ([b9e8cc5][181])

# [6.4.0][182] (2021-01-02)

### Features

- **package.json:** vercel deploy test ([ed73fc3][183])

## [6.3.8][184] (2021-01-02)

### Build System

- **build-test-deploy.yml:** add awareness of deploy npm script to pipeline
  ([d923b29][185])

## [6.3.7][186] (2021-01-02)

### Build System

- **.github/workflows/cleanup.yml:** fix metadata gathering step
  ([44dd462][187])

## [6.3.6][188] (2021-01-01)

### Build System

- **.github/workflows/cleanup.yml:** add metadata filtering step
  ([6667075][189])

## [6.3.5][190] (2021-01-01)

### Build System

- **.github:** fix hardcoded package name ([a10bac3][191])

## [6.3.4][192] (2021-01-01)

### Build System

- Move npm lint step before lint-staged in husky hook ([e8bac90][193])
- Update remark linting to exit 1 on error, quiet on success ([077abce][194])
- Update sort-package-json to contrib-env-expect ([6885a34][195])
- **pre-commit:** decentralize remark; more resilient build system
  ([ba0ef58][196])

## [6.3.3][197] (2021-01-01)

### Build System

- **pre-commit:** centralize remark; add markdown and eslint linting to CL
  ([772dee1][198])
- **pre-commit:** move eslint (and tsc) CL linting out of lint-staged and
  directly into husky ([e38af90][199])

## [6.3.2][200] (2021-01-01)

### Build System

- **.github:** fix pre/post formatting steps ([f757db8][201])

## [6.3.1][202] (2021-01-01)

### Bug Fixes

- **test:** improve test coverage ([7f4a70a][203])

# [6.3.0][204] (2021-01-01)

### Build System

- **package.json:** simplify lint ([dda943e][205])

### Features

- **src:** add div function ([636c353][206])

# [6.2.0][207] (2021-01-01)

### Build System

- **.github/workflows/build-test-deploy.yml:** add remark and formatting steps
  ([e16cd8b][208])
- **.husky:** remove verbose flag ([538c374][209])
- **package.json:** fix lint-staged remark and prettier ([6fbd1df][210])
- **package.json:** remove debug echo ([33a510d][211])
- **release.config.js:** fix to use gfm ([db4c284][212])

### Features

- **package.json:** add remark-gfm; test lint-staged ([bcbf3f5][213])

## [6.1.7][214] (2020-12-31)

### Bug Fixes

- **README.md:** simulated external-PR fix ([8a7fc06][215])

### Reverts

- _"chore(readme.md): format husky test"_ ([9675eeb][216])

## [6.1.6][217] (2020-12-30)

### Build System

- **package.json:** conclude dynamic continuous integration tests
  ([828751d][218])

## [6.1.5][219] (2020-12-30)

### Bug Fixes

- **build-test-deploy.yml:** clearer error language with invalid externals
  config ([d8ed033][220])

## [6.1.4][221] (2020-12-30)

### Reverts

- _"build(build-test-deploy.yml): debug should warn"_ ([44f5cd4][222])

## [6.1.3][223] (2020-12-30)

### Build System

- **build-test-deploy.yml:** debug should warn ([55e1235][224])
- **build-test-deploy.yml:** fix syntax error ([5448960][225])

## [6.1.2][226] (2020-12-30)

### Build System

- **.github:** better snyk ignore ([5921653][227])
- **package.json:** remove high audit CI failure ([b2ea6f1][228])
- **package.json:** test high audit CI failure ([03825f0][229])

## [6.1.1][230] (2020-12-30)

### Bug Fixes

- **readme.md:** dummy fix ([bda2d5e][231])

# [6.1.0][232] (2020-12-30)

### Bug Fixes

- **readme.md:** dummy fix ([b9d92fd][233])

### Features

- **readme.md:** dummy feat ([f90dde3][234])

## [6.0.5][235] (2020-12-30)

### Bug Fixes

- **readme.md:** add codecov badge ([4b6c84c][236])

## [6.0.4][237] (2020-12-30)

### Build System

- **.github:** more resilient cleanup routine ([85b8e12][238])

## [6.0.3][239] (2020-12-30)

### Build System

- **.github:** better cleanup caching ([02746df][240])
- **.github:** fix cleanup ([7520e0f][241])

## [6.0.2][242] (2020-12-30)

### Build System

- **cleanup.yml:** add cleanup workflow ([747a674][243])
- **release.config.js:** remove console.info ([b374296][244])

## [6.0.1][245] (2020-12-30)

### Build System

- **.github:** ensure deploy stage is using latest node and npm ([d40192b][246])

# [6.0.0][247] (2020-12-30)

### Features

- **readme.md:** fake feature ([95a13d2][248])

### BREAKING CHANGES

- **readme.md:** **fake breaking change**

## [5.0.3][249] (2020-12-29)

### Build System

- **.github:** loosen CD pipeline launch check: run CD on all branches
  ([0a91fad][250])

### Reverts

- _"chore(.gitignore): ignore coverage"_ ([4aab0bd][251])

## [5.0.2][252] (2020-12-29)

### Build System

- **.github:** add codecov config and add fetch-depth to test-unit
  ([e62c5b4][253])

## [5.0.1][254] (2020-12-29)

### Build System

- **.github:** add codecov-action to test-unit job ([2ef6297][255])
- **package.json:** add codecov package ([d73cac9][256])
- **package.json:** remove codecov package ([da477b7][257])

# [5.0.0][258] (2020-12-29)

### Chore

- Fix capitalization of non-release commit types ([7391321][259])

### BREAKING CHANGES

- **Dummy BC 7**
- **Dummy BC 9**
- **Dummy BCs 10, 8, and 6**

# [4.0.0][260] (2020-12-29)

### Bug Fixes

- **.changelogrc.js:** remove BC capitalization and sentence-case code
  ([02662fc][261])

### Chore

- Update comment language ([5a2aef4][262])

### BREAKING CHANGES

- **Dummy BC 1**
- **Dummy BC 2**
- **Dummy BCs 3, 4, and 5**

## [3.0.1][263] (2020-12-28)

### Bug Fixes

- **.github:** update ci committer name and email to xunn-bot ([b151491][264])
- **package.json:** update typedoc to latest beta and fix npmbd ([783ba76][265])

### Build System

- **package.json:** update deps ([a876517][266])

# [3.0.0][267] (2020-12-07)

### Bug Fixes

- **.github/workflows:** fix syntax: "no-ci/\*\*" ([b060d3e][268])
- **config:** rename changelog.config.js to .changelogrc.js ([d5dfc50][269])
- **package.json:** use @xunnamius/semantic-release ([0447d59][270])

### Build System

- **.github/workflows:** build system now ignores branches with names that begin
  with "no-ci/" ([3a4bdff][271])
- **.github/workflows:** workflow no longer triggered on tag push,
  dependabot/snyk push ([1096e6f][272])
- **package-lock.json:** fix syntax error ([4fd2952][273])

### Debug

- Update semantic-release to Xunnamius/semantic-release#contrib-holistic
  ([446e961][274])

### Features

- Added mult function ([e537358][275])

### Reverts

- _"chore(.github/workflows): exclude ./.git from build caching"_
  ([b75d8ac][276])
- _"debug(.github/workflows): fake change"_ ([d59bb1a][277])
- _"debug(.github/workflows): test force push protection"_ ([4cc6ee6][278])

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

## [2.3.4][279] (2020-12-03)

### Build System

- **commitlint:** add debug type to type-enum ([10c71bf][280])
- **config:** fix changelog.config.js bug when subject is undefined
  ([57e0c16][281])
- **package.json:** downgrade puppeteer and upgrade other deps ([e5d6d42][282])
- Added .env.example and env-expect ([efb29c5][283])

### Reverts

- revert "debug: switch actions ci to install" ([f9a3e23][284])

## [2.3.3][285] (2020-11-30)

### Bug Fixes

- **spellcheck:** fix incorrect parsing of global cspell vscode settings
  ([c2789bf][286])

### Build System

- **release:** fix changelogTitle skip title ([1dcdcc1][287])

## [2.3.2][288] (2020-11-30)

### Build System

- **release:** fix changelogTitle spread bug ([598a396][289])

## [2.3.1][290] (2020-11-30)

### Build System

- Install @semantic-release/changelog ([022603b][291])
- **release:** fix changelogTitle bug ([0d181ea][292])
- **release:** fix SHOULD_UPDATE_CHANGELOG conditional ([ec632ad][293])

# [2.3.0][294] (2020-11-30)

### Features

- **tooling:** spellcheck now ignores camelCase et al ([d921382][295])

### Performance Improvements

- Better faster spellchecking ([c44c310][296])

## [2.2.2][297] (2020-11-29)

### Build System

- **changelog:** changelog now includes relevant build-type commits
  ([d630264][298])

## [2.2.1][299] (2020-11-29)

### Build System

- **changelog:** changelog now includes relevant reverts ([d4ccacb][300])

# [2.2.0][301] (2020-11-29)

### Bug Fixes

- **actions:** bring metadata collection in-line with new format
  ([a62380b][302])
- **config:** changelog config honors skip commands, leaves reverts alone
  ([823f8b5][303])
- **config:** fix broken changelog.config.js structure ([bd10f44][304])
- **package.json:** downgrade typedoc and assoc plugins ([46db2ee][305])
- **package.json:** install lint-staged dep and script ([f3800e4][306])
- **package.json:** install spellcheck dependencies ([9a7adb4][307])
- **spellcheck:** change "contains" to "includes" ([af76dbe][308])
- **spellcheck:** fix bug where spellcheck reads from wrong message source
  ([69a25ba][309])
- **spellcheck:** spellcheck now leverages assorted knowledge ([14b86ae][310])

### Build System

- Install @semantic-release/exec ([cc94940][311])
- **config:** fix changelog.config.js operating on individual releases
  ([66adf2f][312])
- **config:** fix husky pre-commit hook ([f0d0032][313])
- **config:** generate CHANGELOG.md beautifully ([2fa4aa9][314])
- **config:** retire @semantic-release/changelog ([787a281][315])

### Features

- Add build-changelog to npm scripts ([8393a87][316])

## [2.1.4][317] (2020-11-28)

### Bug Fixes

- **actions:** ensure metadata is gathered properly ([31ece1c][318])
- **release:** remove extra newlines during changelogs generation
  ([72acb24][319])

## [2.1.3][320] (2020-11-28)

### Bug Fixes

- **release:** update how changelogs are generated ([8ce1760][321])

## [2.1.2][322] (2020-11-28)

### Bug Fixes

- **actions:** remove erroneous build-dist from lint job ([2cdd373][323])
- **actions:** remove erroneous build-dist from test-unit job ([fcb2232][324])
- **config:** fix babel.config.js with NODE_LTS ([cdf4610][325])

## [2.1.1][326] (2020-11-26)

### Bug Fixes

- **actions:** update gather-metadata with more accurate grep ([961ecef][327])

# [2.1.0][328] (2020-11-25)

### Bug Fixes

- **actions:** gather-metadata steps gather and skip properly ([97682f4][329])
- **actions:** if statements now use | instead of > ([24e3739][330])
- **actions:** move comments out of multiline statements ([874f8d6][331])

### Features

- **actions:** introduce new streamlined workflow job configuration
  ([4bb9d94][332])

## [2.0.1][333] (2020-11-24)

### Bug Fixes

- **actions:** add git author and commiter env vars for semantic-release signed
  commits ([f01d16b][334])
- **dependabot:** ensure dependabot formats GitHub Actions PRs correctly
  ([bcdbd0e][335])
- Add build commits to release rule ([3124ab0][336])

# [2.0.0][337] (2020-11-24)

### Bug Fixes

- **actions:** add install-dependencies to semantic-release needs
  ([d8cc836][338])
- **actions:** deps caching done properly ([bbe0416][339])
- **actions:** ensure repo is always checked out first ([65e5d46][340])
- **actions:** removed signed pushes ([f621f76][341])
- **package.json:** do not guess error codes ([f5428c8][342])
- **package.json:** ensure machine-friendly run-script syntax ([7af5e45][343])
- **package.json:** ensure set +e used in run-scripts when necessary
  ([6d86c0b][344])
- **package.json:** precedence error caused bad return value in lint
  ([e8bfbc5][345])

### Features

- Added diff to take the difference ([5e40deb][346])

### Performance Improvements

- **actions:** better caching ([6da0a65][347])
- **actions:** made test-integration-chrome independent ([d489cfa][348])
- **actions:** only cache node_modules ([57775c9][349])

### Reverts

- _"debug: added debug step"_ ([1741cde][350])
- _"debug: debug cache miss"_ ([42af347][351])

### BREAKING CHANGES

- **Switch to semantic-release CI/CD pipeline**

Moved away from publish-please to a fully automated build-test-deploy release
cycle based on semantic-release.

# Archived Releases (pre-CI/CD)

- Version 1.0.15 ([57faa2c][352])

<!---->

- Version 1.0.7 ([5ced626][353])

- Version 1.0.0 ([df91d82][354])

[1]: https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.8.6...v7.8.7
[2]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/41de5cee6a6e5c56366a62d556f0c7f14b4bfc39
[3]: https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.8.5...v7.8.6
[4]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/b050bbaea56e30caf4c6beccdaf6ce7eebbc3df9
[5]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/981229a5664e10200bd50d70f40650b4782e4740
[6]: https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.8.4...v7.8.5
[7]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/2dee6f61fb2af699216a052cbef74be04fcf7248
[8]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/1667e70b88284725de91a1f5b701f1b6f0dfad3a
[9]: https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.8.3...v7.8.4
[10]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/1c8044eb6d28ae182b4d7cdfde25712096c09d82
[11]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/e9e3ca1b9c95e06d2bc66defbe76ad2060f06711
[12]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.8.2...v7.8.3
[13]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/33f983f774533369a569a4a02ddba260b5af44e9
[14]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/6d5573edb539232a11a81003beb287216c307716
[15]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/c493a8c37f694376b30ff35b7850a9e178da1b45
[16]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.8.1...v7.8.2
[17]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/aaf76651b7632f7f9ac6c957c0d8e74ddd0099ac
[18]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.8.0...v7.8.1
[19]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/09d35d7379f73a4af8fc8c89bcd81e828e7fe8a7
[20]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/658f59103f46992cd0fed413bdf4bb0d5be4d995
[21]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/cb59af2d8c68c03bbc8d834a0384670c71a5e0ec
[22]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.7.1...v7.8.0
[23]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/4b22c20a232710bb98836a42d374b844b785373b
[24]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.7.0...v7.7.1
[25]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/c034e8683db76f52b1ba6dd80c30e896bc9f3618
[26]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/ece78e30af62e095b238fddd25ce33282e1b031c
[27]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/a111d7fd12173ae42d8d4ce711713040de7e7ccf
[28]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/b980cbe95af63586284fbea254921f12fbefa95f
[29]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/b4f89cf2b39bef5519981df54f03b95048b00208
[30]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.6.5...v7.7.0
[31]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/4cdb325a19edeb2338fc27d19a1c6b5af2dda81b
[32]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/4209e5163df6c2cfca6b3fae2e676c535cce8a9b
[33]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/5056c05dfef6039e4c2e47c08fcaf08f056458e9
[34]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/4ef9c1b43fa79224c518cec35c8f3b39b735e95d
[35]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/efc916efbf1e1367614fa9136044e21024b901dc
[36]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/2dbfb8e654b50f9c94cb413a2bbb6cf51e0f1409
[37]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.6.4...v7.6.5
[38]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/090cdfe5bba623bcf93e99a6167d077cb1f50efe
[39]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.6.3...v7.6.4
[40]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/22a8424d3c39befa850235defdd1c2844e1b557f
[41]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.6.2...v7.6.3
[42]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/bbbd58dcfd0cf3718d433e9a7f72f98d8391db31
[43]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/599b6c2e3b8f9d5ab030582fb6252402b70e76f4
[44]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/312a2efe1bff6497a0459ca0b84b2130f73ff630
[45]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.6.1...v7.6.2
[46]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/99a01ea12f1fc45c3e1b8ea6b84067436855aea9
[47]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/35da4c355197c0a7c25b8c98919884c19e198f8a
[48]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/7a8f54b6afb44c6ca81c75919dc002f408f3379d
[49]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/658718435a782393ae188425d51a5c17a1bc4be5
[50]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/71809e9a866f33d107b1481997e4810ea58869a7
[51]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/f080ad03de773df842dc48731abd547c00b38b24
[52]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/2020d61075fb2ae5905d1e5b46f6fc6dbde9f690
[53]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/8a3bc8145ad10ed4f49f954dde4af2210177a43b
[54]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/dd2b25492a971573cea5ed3c5139388c72857a85
[55]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.6.0...v7.6.1
[56]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/720dc20d162a2421e6008f995feda7bb94166a17
[57]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/26a83711815c8a18343fb296e0c03619d2f46198
[58]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/411fd7d704e0fd0eb365fb2ef776e994c99d7884
[59]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.18...v7.6.0
[60]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/31bdc0c22f3ffe3fa2a4b3efd08b75e68a5b8443
[61]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.17...v7.5.18
[62]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/e7f2bbb7c066e4fadb2484f938353456e2312c8e
[63]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/8d16630dd5a5d092d1e74c385e582c0a592ee20e
[64]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.16...v7.5.17
[65]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/c59e45c31b71404ede66de65a20befd7fc62f392
[66]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/3addf1183dafdd2ae6f38151f84877e015703d37
[67]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/fb18856babb2be3d69030629173b94deb134a0a8
[68]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/4f23d4ee5fb37e220072dcf76ebc81f6f84b22cf
[69]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.15...v7.5.16
[70]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/3b81944504da09657d3232b437c4d04ba9fa95a4
[71]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.14...v7.5.15
[72]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/85881f72411301a06791be63c76a67fbff45d3fd
[73]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.13...v7.5.14
[74]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/107b953b834fb54bb2ee1c418d5bb8119fabe3ac
[75]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.12...v7.5.13
[76]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/2dce9c47d069b05df41481678a967dccc4637ead
[77]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.11...v7.5.12
[78]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/172fa775e677fe977d2b8265460ec192818b1996
[79]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.10...v7.5.11
[80]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/fef722214527e07c51c47fd635a24f0be4a4f839
[81]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/16a597d7a2eb2ee07543c382844e18cb7ce363e6
[82]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.9...v7.5.10
[83]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/597d6c58440c5e7aac53fbbe23b57e6c19125ad2
[84]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.8...v7.5.9
[85]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/25db498808da4891f7f40b8a04b09e68b920d130
[86]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.7...v7.5.8
[87]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/3973279927772eea45ac8573c1a91dea3635c6eb
[88]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.6...v7.5.7
[89]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/51123db7bc0a158d3849f99de64fbe1691011fdd
[90]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.5...v7.5.6
[91]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/31f61f5dc94357a5950d2b2fe90ef9e6268e4ee4
[92]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.4...v7.5.5
[93]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/7212561b4cf094f47169b7b38e9ae4a9550e569b
[94]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.3...v7.5.4
[95]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/ed31f79e0ebe97823e2a62b9e6aa7b3e2355ff7c
[96]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.2...v7.5.3
[97]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/8a051d1222ed6df2d1c9e1f2e2eb890d763a6333
[98]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.1...v7.5.2
[99]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/2cf6e46a6fe59b8a47123f2215ba8caf7976ad87
[100]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.5.0...v7.5.1
[101]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/cb77d20313504c4cb25f082680fe321d6409a421
[102]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/6c1c4d48ea0ca4b60135976a0186152b97a31ec7
[103]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/c7556314894b98e9d727c27096e69695b5eb46fa
[104]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/3fdd509eac028d1eecd953ba4bc0931460aafeb9
[105]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/eda277e8f0a37e171bc329c9c6fc2e8c2d028396
[106]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/0f401ffec3ebdd4736b3ef0aa52419293f5ad599
[107]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.4.5...v7.5.0
[108]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/77c033ff143dff64455049b8314cd528bae4e198
[109]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.4.4...v7.4.5
[110]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/677b4cedff4d3e4541736e612035d909a0df6131
[111]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.4.3...v7.4.4
[112]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/5c8fefa330e31620fe2af848d42eb2c5ab881d02
[113]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.4.2...v7.4.3
[114]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/09304d7cbeea2f0b6f938a907fa1f2351ae51a5b
[115]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/c247c7a353a522de79dcf677994c278dfc993d65
[116]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/6eb7d4120f89cd1aaa0f0be2216ae327c66546cb
[117]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/0528db62704fb9d6a5139c60f131c432a23eeaa0
[118]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.4.1...v7.4.2
[119]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/2842a3173829dc06bef77cb0b039ad584681f414
[120]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/4c174fe72d1a8f7e731b0a78d713223308015256
[121]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/6c000053c1b04088ed83b5690b4317bfa56e8d39
[122]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.4.0...v7.4.1
[123]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/aff191d1d036b9098493a3057927d24b3a175f1f
[124]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/e9b9e49f60737401c2d524ef21674a75d89f02a4
[125]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.3.0...v7.4.0
[126]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/e47160b09b956e69f0d9eb0cab01a3440bb66645
[127]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.2.3...v7.3.0
[128]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/a576d0b3e2a3e3f3cd4b0007ccd024f206877fbe
[129]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/0dc7c4eef97a021462e54b1d00cd789544202d9e
[130]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/c01b325ea28e7b4cf940e622faf7c805e42c5880
[131]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/24f088811ed253dac8791e85d27aa2c194111328
[132]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.2.2...v7.2.3
[133]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/786942001834cb5337fabf921cbc14ea4cc04d2f
[134]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.2.1...v7.2.2
[135]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/a8cd37812dc9e304bf813c742b2d4d54c1c9c183
[136]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.2.0...v7.2.1
[137]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/73edb9a864bbc4b7d5a7eb1d03ca4ce3b8e02e95
[138]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.1.0...v7.2.0
[139]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/864253c3a63de8cbb6577244c8a419ea8a97decd
[140]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/bf8c76bc12c51476719204c44b25c361b7258e90
[141]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/f7d12565f96e1626ffa393ba4ac39786197818e7
[142]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.0.0...v7.1.0
[143]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/27c97500ced2ef3085ce5bf984ccfa3e2bf5e04f
[144]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/67264ed159f3686a5f89fda5cec5f07d465af49e
[145]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/cd6236ad92608b126f7b8df52693f75db28b488d
[146]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.7.3...v7.0.0
[147]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/5765c024e82c3e7e0c77808e3860c85fb8c8d759
[148]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.7.2...v6.7.3
[149]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/ec263026c77f36f1b15c67e102f42300108a43ce
[150]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/6e9fb7333b29c973517b6c2813c162f0c00c0f4b
[151]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.7.1...v6.7.2
[152]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/38bfb775cde6952a35a7daca6ad3e191cc0fa37b
[153]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/aff005d252799e06e7a84aab1b5f88af62cf8901
[154]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.7.0...v6.7.1
[155]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/c24773e0265cc559ad8b6596dd3d97740f18e64f
[156]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/ff94fe15bb18f2cc1d545a0b7948d0e818b48ae9
[157]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/717ffdb672294ccca92a87d368777e09d35a2ab6
[158]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/f2e971ece7f3b60647ab3584db988dd8cbfd5d97
[159]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.6.0...v6.7.0
[160]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/1fdcb9c6c500f88fbc2b7b6ec7f427f0a4995080
[161]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.5.1...v6.6.0
[162]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/0cb26453351737c2ff0476b02f76ca82e3087f88
[163]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/ac06b3300ed526f58f26a18e4a5465f9e6ee8f13
[164]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/c6a3cd632cf814ca9d103bb4868ecafd032ed527
[165]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/69ec71f088e1e162cf7695940b92e3637941e452
[166]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/2fe163c01107f6a1a31fddb871a6eae27f07fd3f
[167]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.5.0...v6.5.1
[168]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/99c2868b2682621a350c02665199a6132c3a8ec8
[169]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/d47c48bccb6110aca895d2472d611cd95134e156
[170]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.4.3...v6.5.0
[171]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/54488d92317360c2e358bca9238e60e2daca64dd
[172]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.4.2...v6.4.3
[173]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/b759c31195eb816c8c7fec1d18f89d85ed437ff1
[174]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/de2c7b1582b0ea20213ab5f761e7dc9994183f50
[175]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/4fb641cc202f3a510389566ce55415686bbc6a4e
[176]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.4.1...v6.4.2
[177]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/6b2e2383ef2b54a56a665e6b9ecef7d93e5fec2e
[178]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.4.0...v6.4.1
[179]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/de7ef33e1d74831b441e909c4e628527ed2900c0
[180]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/c8ef15e813811f037acd12133f485bd8435ac9cc
[181]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/b9e8cc58ea93099742c91d7431687965e131a3df
[182]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.3.8...v6.4.0
[183]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/ed73fc3e5c9c7f0f621802e9ea429dcfca36bf52
[184]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.3.7...v6.3.8
[185]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/d923b299e05789a20a08dc2e4059e5e6e1099658
[186]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.3.6...v6.3.7
[187]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/44dd46246911a9cb58baf0ec0b84aa5093f2628e
[188]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.3.5...v6.3.6
[189]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/66670754987250b92806dfa7d94c1cb46349f07f
[190]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.3.4...v6.3.5
[191]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/a10bac3efbce2b4bd511420fd4d7466c288d9706
[192]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.3.3...v6.3.4
[193]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/e8bac90bb68b79d4c4ab1853bdd4c45dddef44fe
[194]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/077abcea8df04b8b6cf292f97d0e4b37cda28f7b
[195]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/6885a3467c42b61e1edb93fed363ceca6ff15b28
[196]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/ba0ef5863ce550a6988ce259d7500807bdaa5db8
[197]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.3.2...v6.3.3
[198]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/772dee15ff4eaeba84f8327f30c69868c5e514c8
[199]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/e38af90e7720f08f46d6220168226336e6c040d4
[200]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.3.1...v6.3.2
[201]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/f757db8f0e97286abda30b825de9f803cd63c097
[202]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.3.0...v6.3.1
[203]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/7f4a70af17528c36e80440827663251f79c9c1be
[204]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.2.0...v6.3.0
[205]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/dda943e24fcd164ae850feb1f1bd16924b773773
[206]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/636c35303cb5d04d239b13e89a3040e483c81cf7
[207]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.1.7...v6.2.0
[208]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/e16cd8b559096a076739d79a15ff79e5efa7f581
[209]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/538c374e597751bc198b6d52bc0a8fa41de6494d
[210]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/6fbd1df74d4bc1a7ad852e76e8fa805138d95657
[211]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/33a510dce4dcaf004732e739e3e9c3d12518646a
[212]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/db4c284e914688911f1b0d75c569b83a198113c2
[213]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/bcbf3f5cc2d0bba5f282de657977ab44c70b1bfe
[214]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.1.6...v6.1.7
[215]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/8a7fc06df25ffa5381bb5d771eb6e5a619fcbf64
[216]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/9675eeb1a06b715fea6cd9024cf94aa31d44943c
[217]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.1.5...v6.1.6
[218]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/828751d051d5cff15c5d1315fc9729d82cab985f
[219]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.1.4...v6.1.5
[220]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/d8ed033ead9608349f2d876c4cecebecd65dc47f
[221]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.1.3...v6.1.4
[222]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/44f5cd4c3c6adeb548ba89adba8e884336f41520
[223]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.1.2...v6.1.3
[224]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/55e1235d39714dd00c146549f630ec62f4952e2d
[225]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/5448960531a3bd19cc38de44f13519a8888e342a
[226]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.1.1...v6.1.2
[227]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/5921653ac2c26273eace14aa3e4994960be521a0
[228]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/b2ea6f13a5c7d7c8d89f76b6ced72c938448a235
[229]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/03825f051d3ed50dad916f0e3f3993a0fb3c51ce
[230]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.1.0...v6.1.1
[231]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/bda2d5ea408563874429d8ed8e30455d5e717a54
[232]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.0.5...v6.1.0
[233]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/b9d92fdd4f2d594a62fce6d16299152c79a43566
[234]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/f90dde35c32e676c765b131ddfa135246ad7f7eb
[235]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.0.4...v6.0.5
[236]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/4b6c84c788c4105db8a1ddd10ecb044be31876f9
[237]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.0.3...v6.0.4
[238]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/85b8e12e1bce4baa22bd301da9dda21ea289fd9d
[239]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.0.2...v6.0.3
[240]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/02746df97d17f717de608d4b5cc3838e2992a150
[241]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/7520e0fc29f22ef537fc947a5f32d6b6bc762cc5
[242]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.0.1...v6.0.2
[243]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/747a6742dabcc6cdc8fd835b2f673e355f212cdf
[244]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/b3742961a2824618bf68953c532055a04ef03920
[245]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v6.0.0...v6.0.1
[246]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/d40192bd13d9b301e09723cdca68be60b44b5d82
[247]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v5.0.3...v6.0.0
[248]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/95a13d21dd902a490d445d3c8aee89c59b2131f1
[249]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v5.0.2...v5.0.3
[250]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/0a91fad0d4f6c41c600294b8ecfc84b16e906980
[251]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/4aab0bda87d426f81663773342f77bf661c79ce0
[252]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v5.0.1...v5.0.2
[253]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/e62c5b42ca2b43326cc9eec8db248020b2d90ec8
[254]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v5.0.0...v5.0.1
[255]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/2ef6297d257bcd1661093eed5069714382f01f36
[256]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/d73cac91012e0a32ee1f52a3b476b8639f325ca2
[257]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/da477b770bc7b17db8eb474eb523e8468881e447
[258]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v4.0.0...v5.0.0
[259]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/7391321c8da14ed35a865a4e245db2ae3b72a606
[260]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v3.0.1...v4.0.0
[261]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/02662fcac7c02ac3f5a32dba750e00d23d6c88f2
[262]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/5a2aef4cebc6ed136fa3fb5015f38f47de8ce781
[263]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v3.0.0...v3.0.1
[264]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/b15149139462980707fc8ec6d7d67414ac207e6e
[265]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/783ba76db816b0cc391450d442c708420203c46c
[266]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/a876517a6ea8b339e8c0eca9f7763bcc85919f87
[267]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v2.3.4...v3.0.0
[268]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/b060d3ec78744b72bd53450ecd1664110cdebda8
[269]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/d5dfc506c9d68a0f299559b5e76c92630c9edf0a
[270]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/0447d5959113f033e2ed5644efdb4c80c4fe5085
[271]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/3a4bdff03f0d8ea450f53aebceb33525801b3c34
[272]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/1096e6fbfff5fd399c2f1af5fe2b6496c5ca3cfe
[273]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/4fd2952e78b5cfda17a84a538bcc382d06621926
[274]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/446e961cee1326be7db4085f118447ac30f15078
[275]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/e537358218a8abcc97008f5460b37a1949dd0681
[276]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/b75d8ac9bb35a28aa8ebbe8dc52589bc7783d0cd
[277]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/d59bb1a385279427ee93ac6babbc2a8f7544e599
[278]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/4cc6ee68cec6500f99e918443fee5deae32a9f0a
[279]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v2.3.3...v2.3.4
[280]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/10c71bf50522ae3902f84cf6171b9fce4d1470f4
[281]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/57e0c162e73d5850807e9f496df0aa6203834f4c
[282]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/e5d6d42ad230f45b0239bcec671a18a2789ae8f2
[283]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/efb29c5c991d58ae8aa684159f4db0d3f8f6dbbe
[284]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/f9a3e231bf5b99619d5aabccdba6f6299642b6e9
[285]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v2.3.2...v2.3.3
[286]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/c2789bfd8f43bb9fc60316131c4e6d17dd2c1de8
[287]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/1dcdcc1cac342f9bdca71e49f9cc332e9118932f
[288]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v2.3.1...v2.3.2
[289]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/598a3966ce1d85c6dcc2945878ebd3ba2c969654
[290]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v2.3.0...v2.3.1
[291]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/022603bbe50298a8e7500a77cb77ce5aae4b45f7
[292]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/0d181ea032a9f5322137dacf5ee97e6a28acd035
[293]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/ec632ad52472184edbed16111b4a5b306ae6f7ed
[294]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v2.2.2...v2.3.0
[295]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/d9213827f9448a93affcab8ca652e37f24b247b9
[296]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/c44c310f01d78798c5a13213dafeef5e1f25b25f
[297]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v2.2.1...v2.2.2
[298]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/d630264d1ee046ddf943ad287b15f5308ce4c224
[299]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v2.2.0...v2.2.1
[300]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/d4ccacb6533b04c4889b909ecd2bffd4c7b5fa79
[301]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v2.1.4...v2.2.0
[302]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/a62380bc4f75c42d74640916fde44fb5811f150d
[303]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/823f8b5434e07250b8aefbd9f4a49e0ea05cc9e5
[304]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/bd10f4414522a0c6b406adb2fba9d58abee6830e
[305]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/46db2ee7335e9b37cfafce98776171304f0072b7
[306]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/f3800e471e93308b37eb2668dd5c4bfde9e7b88e
[307]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/9a7adb4fb9592328efd3b33bc156b87f89a59ffb
[308]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/af76dbe52921aed27c4cf275875de9c1194561d4
[309]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/69a25baa21133345e2a2baffd2f69d0abe950c02
[310]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/14b86ae815f2c24aef82dcad41b0ead036a2f4c4
[311]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/cc94940e7b903a141f4e16a4169411c0a45bfb96
[312]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/66adf2f3d8ea4bd1813fac4c704ff327ac175855
[313]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/f0d0032fb51ddb98b2f35b229c9d1873c00264f7
[314]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/2fa4aa962a17c6075d28af876f67fe98d0f519b6
[315]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/787a28144826609ddffb5e0d1937f314b1039ab6
[316]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/8393a87974cea60087a8d11fc9b0bac0f7ecc6e2
[317]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v2.1.3...v2.1.4
[318]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/31ece1cb7d0b91bbc38b1c3eb6366c13d1da7fd2
[319]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/72acb24c0c521217fb8eebb5204ddf1591808326
[320]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v2.1.2...v2.1.3
[321]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/8ce176044293af0ac3b5dd2495d7d0eb580bbede
[322]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v2.1.1...v2.1.2
[323]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/2cdd373974fdc62480e5681813c09cba98aebddc
[324]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/fcb2232cf6e628f58033a78a0d6aa107f9794589
[325]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/cdf46102e7d5b590bd153d2444cb13c24d4170b3
[326]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v2.1.0...v2.1.1
[327]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/961ecef3555403928cf319012ca6bd40093da66e
[328]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v2.0.1...v2.1.0
[329]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/97682f434acc501e4964c31770472acae0320ad5
[330]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/24e373907b23a68627fe535049f603c93bfa1361
[331]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/874f8d65aff5d8e27e14e8d9e4a0e37450713ce0
[332]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/4bb9d94050d1b8fb164bdf04b1bffa10705aa0a2
[333]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v2.0.0...v2.0.1
[334]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/f01d16b51e444eb801121e81718994b4add18799
[335]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/bcdbd0e1c23786185cd43b11d9ce18d3498e9ff5
[336]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/3124ab0500924ce75f3387d59d5d60ea3e77c827
[337]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v1.0.15...v2.0.0
[338]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/d8cc83611de2a595631f42bee0f10591b11bc59c
[339]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/bbe0416125a303076bc3f8a5a96c9669db926b46
[340]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/65e5d463925b888e08dd69a9da7f4e9f4c9be872
[341]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/f621f76895e6a0749f76a6a1abd90253b8694717
[342]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/f5428c87836552db96d40310c52abd47e593e729
[343]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/7af5e45eb0712da5d80022cedd535a673082d195
[344]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/6d86c0b4ce2218a93f9919a256a89a04af83a9d1
[345]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/e8bfbc590ec8ac73071ae61708c1ca29f2beee36
[346]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/5e40deb020c4bafb103a6bc78fbeecb266a5c983
[347]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/6da0a656aba20f022d26335ec33c9c4c4ea37c02
[348]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/d489cfacd8514a210ec0b570ab3c5a283cf5bc19
[349]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/57775c9cc3ffdad94f09b23923785a081e2a08ee
[350]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/1741cde56623bdb6e3e0c1dc95dcbe094b197ebe
[351]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/42af3470f3e91e5d359d995888c83534b8d32060
[352]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/57faa2cc448f39383b56db04ec06b1093f5f7bcd
[353]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/5ced6267d44731337fe5e0a69776dd5642d8a54d
[354]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/df91d8298edd2d756f732b2245ba086e91197505
[355]: https://conventionalcommits.org
[356]: https://semver.org
[357]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/compare/v7.8.7...v7.8.8
[358]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/d284401b4eb06ebacb4137670266a3e8a84a981b
[359]:
  https://github.com/Xunnamius/projector-lens-lib-cjs/commit/95c974a66a381da546dc9e810d04f22f565a557c
