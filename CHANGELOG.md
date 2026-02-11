# Changelog

## [v0.5.2] - 2026-02-11

- Change: current zaak process step should be checked, next is current step
- Chore: update deps

## [v0.5.1] - 2026-02-09

- Change: use native array_map instead of Illuminate collection map
- Change: show general message when retrieving 'zaken' failed

## [v0.5.0] - 2026-02-04

- Added: implement kvk usage
- Chore: chore: add OpenWave
- Fix: custom error message when no 'zaken' found for current logged in user

## [v0.4.4] - 2026-01-08

- Fix: handle unhandled exception thrown after failing retrieving 'zaken'
- Change: gatekeeper session type metabox option name

## [v0.4.3] - 2026-01-06

- Fix: on change event when one client is configured as option in block settings

## [v0.4.2] - 2026-01-06

- Added: use dynamic client options in block attributes and add order attributes

## [v0.4.1] - 2025-12-12

- Change: use DigiD auth class instead of container defintion

## [v0.4.0] - 2025-11-24

- Added: gatekeeper page protection by enforcing specific authentication methods

## [v0.3.0] - 2025-11-05

- Added: implement frontend components using NLDS Den Haag design system

## [v0.2.0] - 2025-11-05

- Added: flush rewrite rules after custom rules are registered
- Fix: switch to MODE_AUTO to ensure Blade views are compiled on first load

## [v0.1.0] - 2025-10-22

- Added: First commit
