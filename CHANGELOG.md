# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Conventional Commits](https://conventionalcommits.org),
and this project adheres to [Semantic Versioning](https://semver.org).

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

# [2.0.0](https://github.com/Xunnamius/workflow-playground/compare/v1.0.15...v2.0.0) (2020-11-22)

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

### Reverts

- "debug: added debug step"
  ([1741cde](https://github.com/Xunnamius/workflow-playground/commit/1741cde56623bdb6e3e0c1dc95dcbe094b197ebe))
- db6a70c
  ([d826682](https://github.com/Xunnamius/workflow-playground/commit/d826682b112381f0f2be55b31a1c7e0f1e8f5fea))

### BREAKING CHANGES

- switch to semantic-release CI/CD pipeline Moved away from publish-please to a
  fully automated build-test-deploy release cycle based on semantic-release.
