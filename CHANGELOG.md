# Changelog

> [See a summary of upcoming changes](https://github.com/Xunnamius/workflow-playground/compare/main...develop)

All notable changes to this project will be documented in this file.

The format is based on [Conventional Commits](https://conventionalcommits.org),
and this project adheres to [Semantic Versioning](https://semver.org).



## [2.0.1](https://github.com/Xunnamius/workflow-playground/compare/v2.0.0...v2.0.1) (2020-11-24)


### Bug Fixes

* **actions:** add git author and commiter env vars for semantic-release signed commits ([f01d16b](https://github.com/Xunnamius/workflow-playground/commit/f01d16b51e444eb801121e81718994b4add18799))
* **dependabot:** ensure dependabot formats GitHub Actions PRs correctly ([bcdbd0e](https://github.com/Xunnamius/workflow-playground/commit/bcdbd0e1c23786185cd43b11d9ce18d3498e9ff5))
* add build commits to release rule ([3124ab0](https://github.com/Xunnamius/workflow-playground/commit/3124ab0500924ce75f3387d59d5d60ea3e77c827))

# [2.0.0](https://github.com/Xunnamius/workflow-playground/compare/v1.0.15...v2.0.0) (2020-11-22)


### Bug Fixes

* **actions:** add install-dependencies to semantic-release needs ([d8cc836](https://github.com/Xunnamius/workflow-playground/commit/d8cc83611de2a595631f42bee0f10591b11bc59c))
* **actions:** deps caching done properly ([bbe0416](https://github.com/Xunnamius/workflow-playground/commit/bbe0416125a303076bc3f8a5a96c9669db926b46))
* **actions:** ensure repo is always checked out first ([65e5d46](https://github.com/Xunnamius/workflow-playground/commit/65e5d463925b888e08dd69a9da7f4e9f4c9be872))
* **actions:** removed signed pushes ([f621f76](https://github.com/Xunnamius/workflow-playground/commit/f621f76895e6a0749f76a6a1abd90253b8694717))
* **package.json:** do not guess error codes ([f5428c8](https://github.com/Xunnamius/workflow-playground/commit/f5428c87836552db96d40310c52abd47e593e729))
* **package.json:** ensure machine-friendly run-script syntax ([7af5e45](https://github.com/Xunnamius/workflow-playground/commit/7af5e45eb0712da5d80022cedd535a673082d195))
* **package.json:** ensure set +e used in run-scripts when necessary ([6d86c0b](https://github.com/Xunnamius/workflow-playground/commit/6d86c0b4ce2218a93f9919a256a89a04af83a9d1))
* **package.json:** precedence error caused bad return value in lint ([e8bfbc5](https://github.com/Xunnamius/workflow-playground/commit/e8bfbc590ec8ac73071ae61708c1ca29f2beee36))


### Features

* added diff to take the difference ([5e40deb](https://github.com/Xunnamius/workflow-playground/commit/5e40deb020c4bafb103a6bc78fbeecb266a5c983))


### Performance Improvements

* **actions:** better caching ([6da0a65](https://github.com/Xunnamius/workflow-playground/commit/6da0a656aba20f022d26335ec33c9c4c4ea37c02))
* **actions:** made test-integration-chrome independent ([d489cfa](https://github.com/Xunnamius/workflow-playground/commit/d489cfacd8514a210ec0b570ab3c5a283cf5bc19))
* **actions:** only cache node_modules ([57775c9](https://github.com/Xunnamius/workflow-playground/commit/57775c9cc3ffdad94f09b23923785a081e2a08ee))


### Reverts

* "debug: added debug step" ([1741cde](https://github.com/Xunnamius/workflow-playground/commit/1741cde56623bdb6e3e0c1dc95dcbe094b197ebe))
* db6a70c ([d826682](https://github.com/Xunnamius/workflow-playground/commit/d826682b112381f0f2be55b31a1c7e0f1e8f5fea))


### BREAKING CHANGES

* switch to semantic-release CI/CD pipeline
Moved away from publish-please to a fully automated build-test-deploy release cycle based on semantic-release.

# Changelog

> [See a summary of upcoming changes](https://github.com/Xunnamius/isomorphic-json-fetch/compare/main...develop)

All notable changes to this project will be documented in this file.

The format is based on [Conventional Commits](https://conventionalcommits.org),
and this project adheres to [Semantic Versioning](https://semver.org).
