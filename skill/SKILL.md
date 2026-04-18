---
name: pencil-compatible-skill
description: Public-safe Pencil execution skill for creators using official Pencil and its local MCP tools. Use when a task has already entered Pencil, .pen, or Pencil MCP execution and you need handshake, canvas reads, batch edits, screenshot review, lock-safe patches, and public-safe release boundaries without redistributing official Pencil or leaking private assets.
---

# Open Pencil

## Overview

- This is a public-safe execution skill for official Pencil users.
- It is unofficial and does not grant redistribution rights for Pencil.
- It assumes every user installs Pencil from the official source on their own machine.
- It handles execution discipline, not whole-page design strategy.
- It becomes much stronger when paired with `takeaway-skill` and enough reference data.

## Use This Skill When

- the user says `Pencil`, `.pen`, `Pencil MCP`, `screenshot review`, or `continue in Pencil`
- a task has already entered `.pen` editing, canvas changes, or Pencil MCP execution
- you need public-safe handshake, canvas reads, batch edits, screenshot review, or lock-safe patches
- you are releasing a public repo and need the Pencil layer to stay useful without leaking private assets

## Do Not Use This Skill For

- deciding the whole page concept, page skeleton, or product architecture
- deciding what a reference is worth taking without upstream distillation
- bundling or redistributing official Pencil
- shipping activation files, tokens, or account state
- leaking internal benchmark packs or private case libraries
- redistributing third-party paid tools without clear permission
- presenting an unofficial repo as if it were the official Pencil project

## Core Rules

1. Keep the official dependency external.
2. Handshake first, then work.
3. Read structure before editing.
4. Batch when possible, do not fragment edits.
5. Locked pages get only surgical changes.
6. Always verify with a screenshot or equivalent review step.
7. Public repos ship method, templates, and checks, not the whole moat.
8. Never commit tokens, local paths, machine-specific state, or private screenshots.
9. Third-party tools and assets must follow their own licenses.
10. When references matter, use `takeaway-skill` first instead of guessing strategy inside the execution layer.

## Default Workflow

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
- public-safe demo files
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
- public-safe demos
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
Use the Pencil public skill for this .pen task.
If there is a reference target, use takeaway-skill first and bring me the locked reference decisions.
If reference evidence is weak, say so before editing.
Start with a lightweight Pencil handshake, then read the canvas before editing.
Tell me what this round will change and what it will not change.
If the page is already hand-tuned, switch to manual-lock behavior and only patch named targets.
Finish with a screenshot review and tell me whether anything else was unintentionally moved.
```

## Read These References When Needed

- `../references/install_from_official.md`
- `../references/official_dependency_boundary.md`
- `../references/public_private_split.md`
