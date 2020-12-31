<!-- prettier-ignore-start -->
<!-- badges-start -->
[![Black Lives Matter!][1]][2]
[![Maintenance status][3]][4]
[![Last commit timestamp][5]][4]
[![Open issues][6]][7]
[![Pull requests][8]][9]
[![codecov][10]][11]
[![Source license][12]][13]
[![NPM version][14]][15]
[![semantic-release][16]][17]
<!-- badges-end -->
<!-- prettier-ignore-end -->

# do-not-install 🤔🤯☠️

Proving grounds for my GitHub webhook, Action workflows, NPM publishing
automation scripts and the like.

> Not meant for public consumption! Do not install this!

## Install

```shell
npm install @xunnamius/do-not-install
```

<details><summary><strong>[additional details]</strong></summary>

> Note: **typical users don't need to read through this!** This information is
> primarily useful for those attempting to bundle this package or for those who
> have an opinion on ESM versus CJS.

This is a [dual UMD (CJS2)/ES module][dual-module] package. That means this
package exposes both UMD+CJS2 and ESM entry points and can be used in most
JavaScript environments (browsers, any current or LTS Node version, etc).

Loading this package via `require(...)` will cause Node and modern browsers to
use the [CJS2 bundle][cjs2] entry point, disable [tree shaking][tree-shaking] in
Webpack 4, and lead to larger bundles in Webpack 5. Alternatively, loading this
package via `import { ... } from ...` or `import(...)` will cause Node and
modern browsers to use the ESM entry point in [versions that support
it][node-esm-support], in Webpack, and in the browser. Using the `import` syntax
is the modern, preferred choice.

For backwards compatibility with Webpack 4 and Node versions < 14,
[`package.json`][18] retains the [`module`][module-key] key, which points to the
ESM entry point, and the [`main`][exports-main-key] key, which points to both
the ESM and CJS2 entry points implicitly (no file extension). For Webpack 5 and
Node versions >= 14, [`package.json`][18] includes the
[`exports`][exports-main-key] key, which points to both entry points explicitly.

Though [`package.json`][18] includes [`{ "type": "commonjs"}`][local-pkg], note
that the ESM entry points are ES module (`.mjs`) files. [`package.json`][18]
also includes the [`sideEffects`][side-effects-key] key, which is `false` for
[optimal tree shaking][tree-shaking], and the `types` key, which points to a
TypeScript declarations file.

Additionally, this package does not maintain shared state and so does not
exhibit the [dual package hazard][hazard]. However, setting global configuration
may not actually be "globally" recognized by third-party code importing this
package.

</details>

## Quick Start

```typescript
import { sum } from '@xunnamius/do-not-install';

sum(2, 2); // = 4
```

## Documentation

Project documentation can be found under [`docs/`][19].

## Contributing and Support

**[New issues][20] and [pull requests][21] are always welcome and greatly
appreciated! 🤩** Just as well, you can star 🌟 this project to let me know you
found it useful! ✊🏿 Thank you!

See [CONTRIBUTING.md][22] and [SUPPORT.md][23] for more information.

s source license"

[1]: https://api.ergodark.com/badges/blm 'Join the movement!'
[2]: https://secure.actblue.com/donate/ms_blm_homepage_2019
[3]:
  https://img.shields.io/maintenance/active/2020
  'Is this package maintained?'
[4]: https://github.com/xunnamius/workflow-playground
[5]:
  https://img.shields.io/github/last-commit/xunnamius/workflow-playground
  'When was the last commit to the official repo?'
[6]:
  https://img.shields.io/github/issues/xunnamius/workflow-playground
  'Number of known issues with this package'
[7]: https://github.com/xunnamius/workflow-playground/issues
[8]:
  https://img.shields.io/github/issues-pr/xunnamius/workflow-playground
  'Number of open pull requests'
[9]: https://github.com/xunnamius/workflow-playground/pulls
[10]:
  https://codecov.io/gh/Xunnamius/workflow-playground/branch/main/graph/badge.svg?token=HWRIOBAAPW
  'Is this package well-tested?'
[11]: https://codecov.io/gh/Xunnamius/workflow-playground

[12]: https://img.shields.io/npm/l/@xunnamius/do-not-install "This package'
[13]: https://github.com/Xunnamius/workflow-playground/blob/main/LICENSE [14]:
https://api.ergodark.com/badges/npm-pkg-version/@xunnamius/do-not-install
'Install this package using npm or yarn!' [15]:
https://www.npmjs.com/package/@xunnamius/do-not-install [16]:
https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
'This repo practices continuous integration and deployment!' [17]:
https://github.com/semantic-release/semantic-release [18]: package.json [19]:
docs [20]: https://github.com/Xunnamius/workflow-playground/issues/new/choose
[21]: https://github.com/Xunnamius/workflow-playground/compare [22]:
CONTRIBUTING.md [23]: .github/SUPPORT.md [cjs2]:
https://webpack.js.org/configuration/output/#module-definition-systems
[dual-module]:
https://github.com/nodejs/node/blob/8d8e06a345043bec787e904edc9a2f5c5e9c275f/doc/api/packages.md#dual-commonjses-module-packages
[exports-main-key]:
https://github.com/nodejs/node/blob/8d8e06a345043bec787e904edc9a2f5c5e9c275f/doc/api/packages.md#package-entry-points
[hazard]:
https://github.com/nodejs/node/blob/8d8e06a345043bec787e904edc9a2f5c5e9c275f/doc/api/packages.md#dual-package-hazard
[local-pkg]:
https://github.com/nodejs/node/blob/8d8e06a345043bec787e904edc9a2f5c5e9c275f/doc/api/packages.md#type
[module-key]: https://webpack.js.org/guides/author-libraries/#final-steps
[node-esm-support]:
https://medium.com/%40nodejs/node-js-version-14-available-now-8170d384567e#2368
[side-effects-key]:
https://webpack.js.org/guides/tree-shaking/#mark-the-file-as-side-effect-free
[tree-shaking]: https://webpack.js.org/guides/tree-shaking
