---
name: julilaoshi-design
description: Public-safe julilaoshi-design workflow for official Pencil MCP execution and the free browser-first julilaoshi-design Web 2.0 editor. Use when a task needs Pencil handshake/canvas edits, .pen execution, screenshot review, or lightweight HTML design-to-web tweaking without redistributing official Pencil or leaking private assets.
---

# julilaoshi-design

## Overview

- This is a public-safe execution skill for official Pencil users.
- It also includes julilaoshi-design Web 2.0, a small free static HTML editor for browser-first visual tweaking.
- It is unofficial and does not grant redistribution rights for Pencil.
- Pencil MCP mode assumes every user installs Pencil from the official source on their own machine.
- Web 2.0 mode does not require official Pencil, npm installs, or a build step.
- It handles execution discipline, not whole-page design strategy.
- It becomes much stronger when paired with `takeaway-skill` and enough reference data.

## Use This Skill When

- the user says `Pencil`, `.pen`, `Pencil MCP`, `screenshot review`, or `continue in Pencil`
- the user says `julilaoshi-design Web`, `Web 2.0`, `HTML editor`, `design-to-HTML`, or asks for browser-based visual tweaking
- a task has already entered `.pen` editing, canvas changes, or Pencil MCP execution
- a task needs a lightweight public HTML editor with right-side controls, drag/resize/rotate, and export
- you need public-safe handshake, canvas reads, batch edits, screenshot review, or lock-safe patches
- you are releasing a public repo and need the Pencil layer to stay useful without leaking private assets

## Do Not Use This Skill For

- deciding the whole page concept, page skeleton, or product architecture
- deciding what a reference is worth taking without upstream distillation
- bundling or redistributing official Pencil
- promising the Web 2.0 editor is a full Figma, Illustrator, or internal julilaoshi-design replacement
- shipping activation files, tokens, or account state
- leaking internal benchmark packs or private case libraries
- redistributing third-party paid tools without clear permission
- presenting an unofficial repo as if it were the official Pencil project

## Core Rules

1. Keep the official dependency external.
2. Choose the mode first: `Pencil MCP` or `julilaoshi-design Web 2.0`.
3. If the user has not clearly chosen a mode, ask the mode question before editing anything.
4. Reply in the user's language unless they ask otherwise.
5. In Pencil MCP mode, handshake first, then work.
6. In Web 2.0 mode, verify the static HTML opens locally before editing behavior.
7. Read structure before editing.
8. Batch when possible, do not fragment edits.
9. Locked pages get only surgical changes.
10. Always verify with a screenshot or equivalent review step.
11. Public repos ship method, templates, and checks, not the whole moat.
12. Never commit tokens, local paths, machine-specific state, or private screenshots.
13. Third-party tools and assets must follow their own licenses.
14. When references matter, use `takeaway-skill` first instead of guessing strategy inside the execution layer.

## Default Workflow

### 0. Choose the mode

- Use `Pencil MCP` mode when the task is inside official Pencil, `.pen` files, or Pencil MCP tooling.
- Use `julilaoshi-design Web 2.0` mode when the user wants a free browser-based editor, HTML landing page tweaking, or a Windows-friendly public path.
- If the user only wants a public starter that ordinary people can open, prefer Web 2.0.
- If no mode has been chosen, ask exactly one short mode question and wait:

```text
Which mode do you want to use?

A. Pencil MCP Mode
Use official Pencil + MCP. Best if you already installed Pencil and want to edit .pen files.

B. Web Editor Mode
Use the free browser editor. Best for Windows users, beginners, or HTML export.
```

Chinese version when the user is writing in Chinese:

```text
你想使用哪种模式？

A. Pencil MCP 模式
使用官方 Pencil + MCP。适合已经安装 Pencil、想编辑 .pen 文件的用户。

B. Web Editor 模式
使用免费的浏览器编辑器。适合 Windows 用户、初学者，或想导出 HTML 的用户。
```

- Do not run a Pencil MCP handshake before the user chooses `A`.
- Do not open or edit `web/index.html` before the user chooses `B`, unless the user has already clearly asked for the Web editor.

## julilaoshi-design Web 2.0 Workflow

### 1. Verify the static editor

- Open `web/index.html` directly, or serve the repo with a small static server.
- The editor must work under both:
  - `file://` through `default-design.js`
  - `http://localhost/...` through `design.json`
- If `fetch()` fails under `file://`, do not treat it as a bug if the embedded default design still loads.

### 2. Use the compact right-side editor

Expected public controls:

- top commands: undo, redo, copy, delete, export
- tools: select, text, frame, pill
- transform: x, y, width, height, rotate, nudge
- align: icon-first alignment controls
- style: font size, text color, fill, radius, lock
- panel states: `Hide`, bubble reopen, `Done` confirmation

### 3. Keep the public 2.0 feature set small

The free public editor should focus on:

- moving and resizing elements
- editing text
- changing common styles
- exporting a final HTML snapshot
- leaving a clear note that Codex can reopen edit mode later

Do not turn public 2.0 into the full internal product. Advanced component systems, private style packs, benchmark packs, and commercial automation can remain outside the free layer.

### 4. Verify before reporting

- Run a syntax check for changed JavaScript.
- Validate JSON if `design.json` changes.
- Preview the editor in a browser or static server when possible.
- Confirm the final page can enter `Done` mode without leaving editor UI visible.

## Pencil MCP Workflow

### 1. Verify the official dependency

- Make sure Pencil was installed from the official source.
- Make sure Pencil is running locally.
- Make sure Pencil tools appear in the MCP tool list.

If that is not true, stop and hand the user to the official install path first.

### 2. Clarify the brief

- Before editing, clarify:
  - what this round changes
  - what this round does not change
  - whether the page is still in build mode or already locked
  - whether `takeaway-skill` has already locked the reference route
  - whether there is enough reference data to justify the requested similarity

If those are unclear, slow down and clarify the brief before touching the canvas.

### 2.5 Verify upstream inputs

- If the task is reference-driven, confirm there is enough evidence first:
  - screenshots
  - recordings
  - prior distilled notes
  - locked reference decisions
- If that evidence is missing, do not pretend the Pencil layer can independently produce the strongest result.
- Route the task back to `takeaway-skill` or ask for more reference data.

### 3. Verify the public-safe boundary

Before working, confirm the repo does not contain:

- official Pencil binaries
- activation state
- tokens or credentials
- private benchmark packs
- private case libraries
- third-party screenshots or recordings that should not ship publicly

### 4. Handshake

- Explain that you will front-load a small batch of high-frequency Pencil permissions to reduce repeated popups later.
- Prefer these tools first:
  - `batch_get`
  - `batch_design`
  - `get_screenshot`
- If the permission dialog includes `Allow for this chat` or an equivalent chat-wide option, prefer the largest safe scope for the current chat.

### 5. Read the canvas before editing

- Use `batch_get` or an equivalent read step first.
- Inspect:
  - current structure
  - main anchor lines
  - current lock level
  - whether the canvas still looks like an editable draft

### 6. Choose the stage

- `Reference Build`
  - still learning from a reference and building the broad structure
- `Layout Build`
  - still adjusting modules, proportions, and alignment
- `Manual Lock`
  - the page is mostly approved and only named fixes should move

If the user has already hand-tuned the layout, default to `Manual Lock`.

### 7. Make changes in bounded batches

- Prefer one bounded change set at a time.
- Say what this round changes.
- Say what this round does not change.
- Prefer `batch_design` for grouped changes.
- In `Manual Lock`:
  - only change named targets
  - do not move unrelated blocks
  - do not use "more unified" as an excuse to rebuild the whole page

### 8. Review visually

- Always verify the result with a screenshot or equivalent review step.
- Confirm:
  - the named issue was addressed
  - unrelated areas were not unintentionally moved

### 9. Finish cleanly

- If the canvas still shows a blue outline, placeholder state, or a fully blue page, check the top-level container first.
- Do not leave obvious edit-state visuals as if they were final output.

### 10. Publish only safe outputs

Allowed public outputs usually include:

- workflow docs
- templates
- public-safe starter files
- neutral screenshots
- landing pages

Disallowed public outputs usually include:

- internal research archives
- private case packs
- third-party capture archives
- premium prompt choreography

## Escalation Boundaries

If the problem has become one of these, do not pretend execution alone can solve it:

- page skeleton
- information hierarchy
- visual strategy
- reference distillation
- product UI states
- navigation logic
- web runtime or code implementation

Move the task back to the appropriate upstream design, product, or implementation layer.

## Public / Private Split

### Public layer

- framework
- workflow
- templates
- docs
- public-safe starter templates
- release checks

### Private layer

- internal prompt chains
- premium benchmark packs
- private style guides
- private assets
- private case libraries
- partner or client material

## Minimum Response Contract

When reporting work, include:

- current stage
- what changed
- what stayed untouched
- how the result was verified
- whether any compliance or license boundary is still open
- whether the result depended on `takeaway-skill` or missing reference data

## Copyable Starter Prompt

```text
Read skill/SKILL.md first.
Use julilaoshi-design.

Before editing anything, ask me to choose:
A. Pencil MCP Mode
B. Web Editor Mode

If I choose A, verify official Pencil and MCP tools first. If anything is missing, tell me what is missing and stop. Do not fake the handshake.

If I choose B, open or guide me to web/index.html, explain the right-side editor, and help me edit or export the page.

Reply in my language.
Do not run npm install, pip install, build commands, or long setup scripts.
Do not modify the core rules of this Skill.
```

## Read These References When Needed

- `../references/install_from_official.md`
- `../references/official_dependency_boundary.md`
- `../references/public_private_split.md`
