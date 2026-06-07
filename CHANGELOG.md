# Changelog

All notable public changes to `julilaoshi-design` are documented here.

This repository is maintained as a lightweight public workflow. Private workflows, private assets, and advanced internal experiments are intentionally not included.

## v2.0.1

Maintenance release focused on clearer first-run guidance.

### Changed

- Clarified the first-run mode selection prompt.
- Improved the distinction between `Pencil MCP Mode` and `Web Editor Mode`.
- Made it clearer that users should choose a mode before any Pencil MCP handshake is attempted.
- Added contributing guidelines in English and Chinese.

### Maintenance Notes

Early user feedback showed that the first screen could be confusing. Some users were not sure whether they should start with official Pencil, Pencil MCP, or the browser-based editor.

This release makes the first step simpler:

- choose `Pencil MCP Mode` only when official Pencil and MCP access are available
- choose `Web Editor Mode` when the user wants a browser-first path without installing an app or creating a `.pen` file

## v2.0.0

Public 2.0 release.

### Added

- Added two public usage paths:
  - `Pencil MCP Mode`
  - `Web Editor Mode`
- Added a browser-first Web Editor for lightweight HTML editing.
- Added right-side editor controls for common visual edits.
- Added support for moving, resizing, rotating, duplicating, deleting, and aligning simple layers.
- Added editor panel states including `Hide`, reopen bubble, and `Done`.
- Added HTML export support for the public Web Editor.
- Added walkthrough materials for easier first-time use.

### Changed

- Renamed and clarified the public workflow as `julilaoshi-design`.
- Clarified that the public version is lightweight and does not include private assets, private prompt chains, or internal advanced workflows.
- Clarified that Windows users and beginners may prefer `Web Editor Mode` because official Pencil and Pencil MCP access may not be available on every machine.

### Maintenance Notes

Before v2.0, the workflow could feel too dependent on official Pencil and Pencil MCP. Feedback from non-Mac and beginner users showed that a lighter public path was needed.

The Web Editor path was added so users can try the workflow in a browser without installing official Pencil, setting up MCP tools, or creating a `.pen` file first.

## Earlier Public Updates

Earlier updates focused on:

- public-safe README cleanup
- loading instructions
- installation wording
- repository boundary clarification
- public/private workflow separation
