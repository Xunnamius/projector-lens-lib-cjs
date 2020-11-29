# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Conventional Commits](https://conventionalcommits.org),
and this project adheres to [Semantic Versioning](https://semver.org).

# [2.2.0](https://github.com/Xunnamius/workflow-playground/compare/v2.1.4...v2.2.0) (2020-11-29)

### Bug Fixes

- **Actions:** bring metadata collection in-line with new format
  ([a62380b](https://github.com/Xunnamius/workflow-playground/commit/a62380bc4f75c42d74640916fde44fb5811f150d))
- **Config:** changelog config honors skip commands, leaves reverts alone
  ([823f8b5](https://github.com/Xunnamius/workflow-playground/commit/823f8b5434e07250b8aefbd9f4a49e0ea05cc9e5))
- **Config:** fix broken changelog.config.js structure
  ([bd10f44](https://github.com/Xunnamius/workflow-playground/commit/bd10f4414522a0c6b406adb2fba9d58abee6830e))
- **Package.json:** downgrade typedoc and assoc plugins
  ([46db2ee](https://github.com/Xunnamius/workflow-playground/commit/46db2ee7335e9b37cfafce98776171304f0072b7))
- **Package.json:** install lint-staged dep and script
  ([f3800e4](https://github.com/Xunnamius/workflow-playground/commit/f3800e471e93308b37eb2668dd5c4bfde9e7b88e))
- **Package.json:** install spellcheck dependencies
  ([9a7adb4](https://github.com/Xunnamius/workflow-playground/commit/9a7adb4fb9592328efd3b33bc156b87f89a59ffb))
- **Spellcheck:** change "contains" to "includes"
  ([af76dbe](https://github.com/Xunnamius/workflow-playground/commit/af76dbe52921aed27c4cf275875de9c1194561d4))
- **Spellcheck:** fix bug where spellcheck reads from wrong message source
  ([69a25ba](https://github.com/Xunnamius/workflow-playground/commit/69a25baa21133345e2a2baffd2f69d0abe950c02))
- **Spellcheck:** spellcheck now leverages assorted knowledge
  ([14b86ae](https://github.com/Xunnamius/workflow-playground/commit/14b86ae815f2c24aef82dcad41b0ead036a2f4c4))

### Features

- Add build-changelog to npm scripts
  ([8393a87](https://github.com/Xunnamius/workflow-playground/commit/8393a87974cea60087a8d11fc9b0bac0f7ecc6e2))

### Reverts

- _"build: bad fix"_
  ([48394bc](https://github.com/Xunnamius/workflow-playground/commit/48394bc497dc39046ae8ed815db335fe83fde335))

## [2.1.4](https://github.com/Xunnamius/workflow-playground/compare/v2.1.3...v2.1.4) (2020-11-28)

### Bug Fixes

- **Actions:** ensure metadata is gathered properly
  ([31ece1c](https://github.com/Xunnamius/workflow-playground/commit/31ece1cb7d0b91bbc38b1c3eb6366c13d1da7fd2))
- **Release:** remove extra newlines during changelogs generation
  ([72acb24](https://github.com/Xunnamius/workflow-playground/commit/72acb24c0c521217fb8eebb5204ddf1591808326))

## [2.1.3](https://github.com/Xunnamius/workflow-playground/compare/v2.1.2...v2.1.3) (2020-11-28)

### Bug Fixes

- **Release:** update how changelogs are generated
  ([8ce1760](https://github.com/Xunnamius/workflow-playground/commit/8ce176044293af0ac3b5dd2495d7d0eb580bbede))

## [2.1.2](https://github.com/Xunnamius/workflow-playground/compare/v2.1.1...v2.1.2) (2020-11-28)

### Bug Fixes

- **Actions:** remove erroneous build-dist from lint job
  ([2cdd373](https://github.com/Xunnamius/workflow-playground/commit/2cdd373974fdc62480e5681813c09cba98aebddc))
- **Actions:** remove erroneous build-dist from test-unit job
  ([fcb2232](https://github.com/Xunnamius/workflow-playground/commit/fcb2232cf6e628f58033a78a0d6aa107f9794589))
- **Config:** fix babel.config.js with NODE_LTS
  ([cdf4610](https://github.com/Xunnamius/workflow-playground/commit/cdf46102e7d5b590bd153d2444cb13c24d4170b3))

## [2.1.1](https://github.com/Xunnamius/workflow-playground/compare/v2.1.0...v2.1.1) (2020-11-26)

### Bug Fixes

- **Actions:** update gather-metadata with more accurate grep
  ([961ecef](https://github.com/Xunnamius/workflow-playground/commit/961ecef3555403928cf319012ca6bd40093da66e))

# [2.1.0](https://github.com/Xunnamius/workflow-playground/compare/v2.0.1...v2.1.0) (2020-11-25)

### Bug Fixes

- **Actions:** gather-metadata steps gather and skip properly
  ([97682f4](https://github.com/Xunnamius/workflow-playground/commit/97682f434acc501e4964c31770472acae0320ad5))
- **Actions:** if statements now use | instead of >
  ([24e3739](https://github.com/Xunnamius/workflow-playground/commit/24e373907b23a68627fe535049f603c93bfa1361))
- **Actions:** move comments out of multiline statements
  ([874f8d6](https://github.com/Xunnamius/workflow-playground/commit/874f8d65aff5d8e27e14e8d9e4a0e37450713ce0))

### Features

- **Actions:** introduce new streamlined workflow job configuration
  ([4bb9d94](https://github.com/Xunnamius/workflow-playground/commit/4bb9d94050d1b8fb164bdf04b1bffa10705aa0a2))

## [2.0.1](https://github.com/Xunnamius/workflow-playground/compare/v2.0.0...v2.0.1) (2020-11-24)

### Bug Fixes

- **Actions:** add git author and commiter env vars for semantic-release signed
  commits
  ([f01d16b](https://github.com/Xunnamius/workflow-playground/commit/f01d16b51e444eb801121e81718994b4add18799))
- **Dependabot:** ensure dependabot formats GitHub Actions PRs correctly
  ([bcdbd0e](https://github.com/Xunnamius/workflow-playground/commit/bcdbd0e1c23786185cd43b11d9ce18d3498e9ff5))
- Add build commits to release rule
  ([3124ab0](https://github.com/Xunnamius/workflow-playground/commit/3124ab0500924ce75f3387d59d5d60ea3e77c827))

# [2.0.0](https://github.com/Xunnamius/workflow-playground/compare/v1.0.15...v2.0.0) (2020-11-24)

### Bug Fixes

- **Actions:** add install-dependencies to semantic-release needs
  ([d8cc836](https://github.com/Xunnamius/workflow-playground/commit/d8cc83611de2a595631f42bee0f10591b11bc59c))
- **Actions:** deps caching done properly
  ([bbe0416](https://github.com/Xunnamius/workflow-playground/commit/bbe0416125a303076bc3f8a5a96c9669db926b46))
- **Actions:** ensure repo is always checked out first
  ([65e5d46](https://github.com/Xunnamius/workflow-playground/commit/65e5d463925b888e08dd69a9da7f4e9f4c9be872))
- **Actions:** removed signed pushes
  ([f621f76](https://github.com/Xunnamius/workflow-playground/commit/f621f76895e6a0749f76a6a1abd90253b8694717))
- **Package.json:** do not guess error codes
  ([f5428c8](https://github.com/Xunnamius/workflow-playground/commit/f5428c87836552db96d40310c52abd47e593e729))
- **Package.json:** ensure machine-friendly run-script syntax
  ([7af5e45](https://github.com/Xunnamius/workflow-playground/commit/7af5e45eb0712da5d80022cedd535a673082d195))
- **Package.json:** ensure set +e used in run-scripts when necessary
  ([6d86c0b](https://github.com/Xunnamius/workflow-playground/commit/6d86c0b4ce2218a93f9919a256a89a04af83a9d1))
- **Package.json:** precedence error caused bad return value in lint
  ([e8bfbc5](https://github.com/Xunnamius/workflow-playground/commit/e8bfbc590ec8ac73071ae61708c1ca29f2beee36))

### Features

- Added diff to take the difference
  ([5e40deb](https://github.com/Xunnamius/workflow-playground/commit/5e40deb020c4bafb103a6bc78fbeecb266a5c983))

### Performance Improvements

- **Actions:** better caching
  ([6da0a65](https://github.com/Xunnamius/workflow-playground/commit/6da0a656aba20f022d26335ec33c9c4c4ea37c02))
- **Actions:** made test-integration-chrome independent
  ([d489cfa](https://github.com/Xunnamius/workflow-playground/commit/d489cfacd8514a210ec0b570ab3c5a283cf5bc19))
- **Actions:** only cache node_modules
  ([57775c9](https://github.com/Xunnamius/workflow-playground/commit/57775c9cc3ffdad94f09b23923785a081e2a08ee))

### BREAKING CHANGES

- **Switch to semantic-release CI/CD pipeline.** Moved away from publish-please
  to a fully automated build-test-deploy release cycle based on
  semantic-release.

# Archived Releases (pre-CI/CD)

- Version 1.0.15
  ([57faa2c](https://github.com/Xunnamius/workflow-playground/commit/57faa2cc448f39383b56db04ec06b1093f5f7bcd))

* Version 1.0.7
  ([5ced626](https://github.com/Xunnamius/workflow-playground/commit/5ced6267d44731337fe5e0a69776dd5642d8a54d))

* Version 1.0.0
  ([df91d82](https://github.com/Xunnamius/workflow-playground/commit/df91d8298edd2d756f732b2245ba086e91197505))
