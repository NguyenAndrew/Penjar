# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [0.7.0] - 2020-10-27
### Added
- Support for linux and mac

### Changed
- Some commands related to running locally and on the cloud, to know if you are using commands related to windows, linux, or mac

### Fixed
- Removed duplicate changelog version numbers, and adjusted current numbers to relfect change

## [0.6.0] - 2020-10-27
### Changed
- When running locally on back end, watch all files regardless of extension, but don't watch build directory

### Fixed
- Non ts files are copied over from src to build (example: json)

## [0.5.0] - 2020-10-27
### Changed
- Use `npm install` with `npm postinstall` instead of `npm install:all` when running locally
- Use `npm run start` instead of `npm run start:all` when running locally

## [0.4.0] - 2020-10-27
### Changed
- Compile to a separate 'build' directory on backend, instead of in src, to make it more convenient to develop when running locally

## [0.3.0] - 2020-10-27
### Added
- Abstract calls to load host information on the back end

## [0.2.0] - 2020-10-27
### Added
- Abstract calls to load host information on the back end

### Fixed
- Recompiling with tsc when running locally on the the back end

## [0.1.0] - 2020-10-27
### Added
- Use TypeScript on frontend and backend
- Add Changelog