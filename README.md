[![Black Lives Matter!](https://api.ergodark.com/badges/blm 'Join the movement!')](https://secure.actblue.com/donate/ms_blm_homepage_2019)
[![Maintenance status](https://img.shields.io/maintenance/active/2020 'Is this package maintained?')](https://www.npmjs.com/package/@xunnamius/do-not-install)
[![Last commit timestamp](https://img.shields.io/github/last-commit/xunnamius/workflow-playground 'When was the last commit to the official repo?')](https://www.npmjs.com/package/@xunnamius/do-not-install)
[![Open issues](https://img.shields.io/github/issues/xunnamius/workflow-playground 'Number of known issues with this package')](https://www.npmjs.com/package/@xunnamius/do-not-install)
[![Pull requests](https://img.shields.io/github/issues-pr/xunnamius/workflow-playground 'Number of open pull requests')](https://www.npmjs.com/package/@xunnamius/do-not-install)
[![Source license](https://img.shields.io/npm/l/@xunnamius/do-not-install "This package's source license")](https://www.npmjs.com/package/@xunnamius/do-not-install)
[![NPM version](https://api.ergodark.com/badges/npm-pkg-version/@xunnamius/do-not-install 'Install this package using npm or yarn!')](https://www.npmjs.com/package/@xunnamius/do-not-install)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# do-not-install 🤔🤯☠️

Proving grounds for my GitHub webhook, Action workflows, NPM publishing
automation scripts and the like.

> Not meant for public consumption! Do not install this!

## Install

```bash
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
[`package.json`](package.json) retains the [`module`][module-key] key, which
points to the ESM entry point, and the [`main`][exports-main-key] key, which
points to both the ESM and CJS2 entry points implicitly (no file extension). For
Webpack 5 and Node versions >= 14, [`package.json`](package.json) includes the
[`exports`][exports-main-key] key, which points to both entry points explicitly.

Though [`package.json`](package.json) includes
[`{ "type": "commonjs"}`][local-pkg], note that the ESM entry points are ES
module (`.mjs`) files. [`package.json`](package.json) also includes the
[`sideEffects`][side-effects-key] key, which is `false` for [optimal tree
shaking][tree-shaking], and the `types` key, which points to a TypeScript
declarations file.

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

Project documentation can be found under [`docs/`](docs/README.md).

## Contributing and Support

**[New issues](https://github.com/Xunnamius/workflow-playground/issues/new/choose)
and [pull requests](https://github.com/Xunnamius/workflow-playground/compare)
are always welcome and greatly appreciated! 🤩** Just as well, you can star 🌟
this project to let me know you found it useful! ✊🏿 Thank you!

See [CONTRIBUTING.md](CONTRIBUTING.md) and [SUPPORT.md](.github/SUPPORT.md) for
more information.

[module-key]: https://webpack.js.org/guides/author-libraries/#final-steps
[side-effects-key]:
  https://webpack.js.org/guides/tree-shaking/#mark-the-file-as-side-effect-free
[dual-module]:
  https://github.com/nodejs/node/blob/8d8e06a345043bec787e904edc9a2f5c5e9c275f/doc/api/packages.md#dual-commonjses-module-packages
[exports-main-key]:
  https://github.com/nodejs/node/blob/8d8e06a345043bec787e904edc9a2f5c5e9c275f/doc/api/packages.md#package-entry-points
[hazard]:
  https://github.com/nodejs/node/blob/8d8e06a345043bec787e904edc9a2f5c5e9c275f/doc/api/packages.md#dual-package-hazard
[cjs2]: https://webpack.js.org/configuration/output/#module-definition-systems
[tree-shaking]: https://webpack.js.org/guides/tree-shaking
[local-pkg]:
  https://github.com/nodejs/node/blob/8d8e06a345043bec787e904edc9a2f5c5e9c275f/doc/api/packages.md#type
[node-esm-support]:
  https://medium.com/%40nodejs/node-js-version-14-available-now-8170d384567e#2368
