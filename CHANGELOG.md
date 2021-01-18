# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.16.0] - 2021-1-18
### Added
- Added lormat command to the frontend, which run lint and format in a single command
- Sensible default start command to frontend

## [0.15.0] - 2021-1-18
### Added
- Sensible default commands for format and lint on frontend

### Changed
- Linted and formatted frontend

## [0.14.0] - 2021-1-17
### Added
- ESLint linting and Prettier formatting to frontend

### Changed
- Updated Axios dependency on frontend

## [0.13.0] - 2020-12-19
### Changed
- Updated dependencies on backend and frontend to their latest version

## [0.12.0] - 2020-12-19
### Fixed
- Being able to run on docker, by changing to the correct relative paths when running application from build folder

## [0.11.0] - 2020-11-13
### Added
- Jest testing on the backend
- Added commands for running tests for both back end and front end for running locally or on the cloud

## [0.10.0] - 2020-10-29
### Changed
- Make docker commands more specific in README
- Let ci commands when running on cloud or docker install the devDependencies, so that builds can be made using tsc
- Change ports to 8080 when running on cloud or docker to match default expected CloudFoundry diego port 

### Fixed
- Fix changelog dates

## [0.9.0] - 2020-10-29
### Added
- Added prune commands to remove devDependencies when running on the cloud or docker 

### Changed
- Let ci commands when running on cloud or docker install the devDependencies, so that builds can be made using tsc

## [0.8.0] - 2020-10-28
### Added
- Support for docker
- Add more 

### Changed
- Fixed dates on changelog

## [0.7.0] - 2020-10-28
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