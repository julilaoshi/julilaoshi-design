# Open Pencil Web 2.0

Open Pencil Web 2.0 is the public, free, browser-first companion to the Pencil-compatible workflow.

It is intentionally small:

- open `index.html` directly in a browser
- move, resize, rotate, duplicate, delete, and align simple layers
- edit text and common style values
- hide the editor when reviewing the page
- confirm `Done` to remove the editor UI
- export a standalone HTML snapshot

## Why this exists

The original public Open Pencil workflow depends on the official Pencil app and local MCP tools. That is powerful, but it is not friendly enough for every Windows or non-technical user.

The 2.0 public direction adds a lightweight HTML path:

- no app installer
- no npm package
- no build step
- no official Pencil redistribution
- no private assets

## How to try it

Open:

```text
web/index.html
```

For the most reliable local preview, a tiny static server is also fine:

```bash
python3 -m http.server 4177
```

Then visit:

```text
http://localhost:4177/web/
```

## Data model

The editor starts from:

- `default-design.js` for direct `file://` browser opens
- `design.json` for server-based previews

This dual path avoids the common browser issue where local `fetch()` calls are blocked for `file://` pages.

## Public boundary

This is not the full internal Open Pencil system. The public 2.0 layer stays focused on a small, inspectable design-to-HTML editor. Advanced automation, richer component systems, private style packs, benchmark packs, and commercial workflow features belong outside this free public layer.
