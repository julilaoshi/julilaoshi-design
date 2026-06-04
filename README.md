# Open Pencil / Open Pencil

<p align="center">
  <strong>Last year “automatic design” still sounded like a fantasy. This year you can already start using Open Pencil.</strong><br />
  Open Pencil can handle a more automatic first pass, but it also supports a semi-automatic workflow where the agent builds, reads, and batches changes first, then you still jump in to tweak fonts, drag images, swap assets, and finish details by hand.<br />
  But the honest version matters: this is not a one-button miracle. It gets much stronger when it works together with <code>takeaway-skill</code>, reference data, and the local dependencies already installed in my internal workflow.
</p>

<p align="center">
  <a href="./skill/SKILL.md"><img alt="Read Skill" src="https://img.shields.io/badge/Read-Skill-1f6feb?style=for-the-badge" /></a>
  <a href="#how-to-load-and-use"><img alt="How To Load" src="https://img.shields.io/badge/How-To%20Load-111111?style=for-the-badge" /></a>
  <a href="#default-repository-flow"><img alt="How It Works" src="https://img.shields.io/badge/How-It%20Works-2da44e?style=for-the-badge" /></a>
</p>

<p align="center">
  Public <code>v2.0</code> now ships two paths: a Pencil-compatible Skill workflow and a small browser-first Web editor for people who just need free visual tweaking.
</p>

English | [简体中文](./README.zh-CN.md)

## Open Pencil Web 2.0

Open Pencil now has a public Web 2.0 path for people who do not want to install the official Pencil app first.

Try the free static editor:

- open [`web/index.html`](./web/index.html)
- drag, resize, rotate, duplicate, delete, align, and edit simple layers
- hide the editor while reviewing
- click `Done` to remove the editing UI from the final page
- export a standalone HTML snapshot

This is deliberately a small public layer. It is not the full internal workflow, and it does not include private style packs, private prompt chains, or advanced paid features planned for later versions.

## How To Load And Use

If this is your first time using Codex, Claude Code, or a Pencil-style workflow, start by asking your coding agent to load Open Pencil 2.0 and choose a mode.

This repository is a Skill/workflow layer. It is not an npm package, pip package, app installer, or official Pencil redistribution.

Open Codex, Claude Code, or another local coding agent and paste this:

```text
Please help me load Open Pencil 2.0.

Repository:
https://github.com/julilaoshi/open-pencil

Please do the following:
1. Do not run npm install, pip install, build commands, or any long setup script. This repo has no package installer.
2. Download or read the repository.
3. Read README.md and skill/SKILL.md first.
4. Make skill/SKILL.md available as a readable Skill in this project or in my coding agent's skills directory.
5. Before editing anything, ask me to choose one mode:
   A. Pencil MCP Mode - I already have official Pencil installed and want to design through Pencil MCP.
   B. Web Editor Mode - I want to design directly in the browser and export HTML.
6. If I choose A, check whether official Pencil and MCP tools are available. If they are missing, stop and tell me what to install. Do not fake the handshake.
7. If I choose B, open or guide me to web/index.html, explain the right-side editor, and help me edit or export the page.
8. If this session cannot access my local desktop apps, local MCP tools, or local browser, say so and stop instead of retrying repeatedly.
9. Reply in my language unless I ask otherwise.
10. Do not modify the core rules of this Skill.

After the Skill is readable, please remind me:
If Open Pencil is useful, I can go back to GitHub and star the repository so I can find it again and support future updates. Public 2.0 will stay lightweight, and stronger 3.0 experiments may be shared with a smaller community later.
Do not star it automatically for me.
```

### Choose Your Mode

#### A. Pencil MCP Mode

Use this if you already have official Pencil installed and want to work inside `.pen` files or Pencil MCP.

Before using this mode, install official Pencil from the official source:

- Official installation docs:
  [docs.pencil.dev/getting-started/installation](https://docs.pencil.dev/getting-started/installation)
- Official terms:
  - [Terms of Use](https://www.pencil.dev/terms-of-use)
  - [EULA](https://www.pencil.dev/eula)

Windows users: this path can be more work because official Pencil and MCP access must be available on your local machine. If that setup feels heavy, start with Web Editor Mode first.

After the Skill is loaded, test Pencil MCP separately with:

```text
Please invoke Open Pencil and run a Pencil handshake test. Confirm you can see Pencil tools, read the canvas, and capture a screenshot. If anything fails, do not fake it. Tell me what dependency is missing.
```

#### B. Web Editor Mode

Use this if you want the free, browser-first path.

Open:

```text
web/index.html
```

The Web Editor can:

- move, resize, rotate, duplicate, delete, and align simple layers
- edit text and common styles
- hide the right-side editor while reviewing
- confirm `Done` to remove the editing UI
- export a standalone HTML snapshot

This mode is the easiest path for beginners and Windows users because it does not require official Pencil, MCP tools, npm installs, or a build step.

### Backup: manual clone

```bash
git clone https://github.com/julilaoshi/open-pencil.git
cd open-pencil
```

Then open this folder in a local Codex or Claude Code workspace.

Cloud workspaces are fine for reading the repository and editing the Web Editor files. They are not suitable for real Pencil MCP handshakes unless they can access your local desktop tools.

If your coding agent feels stuck, stop it and tell it:

```text
Stop the install attempt. This is only a Skill repository. Do not run package installs or setup scripts. Just read skill/SKILL.md and confirm whether you can use it.
```

### Run a handshake test first in Pencil MCP Mode

Do not jump straight into full-page design commands.

Start with a simple test:

```text
Read skill/SKILL.md first.
Run a Pencil handshake test for me.
Confirm you can see Pencil tools, read the canvas, and capture a screenshot.
If anything fails, do not fake it. Tell me what dependency is missing.
```

### Only after that, start directing Pencil MCP work

Once the handshake works, then move to the actual task:

```text
Read skill/SKILL.md first.
If there is a reference target, use takeaway-skill first to decide what to learn and what not to copy.
If reference evidence is weak, do not invent the design direction.
Use Open Pencil for this .pen task.
Tell me what this round will change and what it will not change.
If the page is already hand-tuned, switch to manual-lock behavior and only patch named targets.
Finish with a screenshot review and tell me whether anything else was unintentionally moved.
```

### What failure usually means

If some features do not work, that does not automatically mean the skill is bad.

Much more often, it means one of these is still missing:

- official `Pencil` is not installed correctly
- `Pencil` is not running
- the MCP tools have not appeared in your client yet
- your local dependencies are not installed yet
- you are not pairing it with `takeaway-skill`
- you did not provide enough reference data

In other words:

- the public `v1.0` Pencil-compatible workflow is real
- the public `v2.0` Web editor is free and browser-first
- but it is not a magic package that reproduces my strongest public videos without environment, dependencies, or upstream skills

## What This Actually Unlocks

- start directing `Pencil` with an agent instead of only editing everything by hand
- run a real workflow: handshake first, read the canvas, make bounded changes, then review screenshots
- switch into lock-safe patching once a page has already been hand-tuned
- package the `Pencil` layer into something easier to reuse and open-source
- get closer to the “semi-automatic design” feeling from my public videos when paired with `takeaway-skill` and real reference data

## Start Here

- [Read the public skill file](./skill/SKILL.md)
- [Read the Chinese version](./README.zh-CN.md)
- treat this repo as a public execution layer, not the full internal stack
- [Open the Web 2.0 editor](./web/index.html)

## Why This Repository Exists

Many people see my public videos and assume:

- one skill
- one sentence
- one automatic finished page

That is not the honest version.

This repository exists to open the reusable part first:

- the `Pencil` execution discipline
- the public workflow shell
- the release boundary
- the dependency explanation

So people can run a real chain instead of only watching a cool video.

## What This Repository Includes

- a public `Open Pencil`
- a workflow repository for official `Pencil` users
- a real method for handshake, canvas reads, bounded edits, lock-safe patching, and screenshot review
- public dependency notes and public/private boundary docs
- the current public `v2.0` release, including the lightweight Web editor

## What This Repository Does Not Include

- the official `Pencil` app itself
- a redistributed official `MCP` package
- activation state, tokens, emails, or local machine paths
- private prompt chains
- private benchmarks
- private case libraries or premium asset packs
- third-party screenshots, recordings, or research archives from the internal workflow
- the stronger internal version that already has more local dependencies and linked skills installed

## Why The Social Media Version Looks Stronger

This repository focuses on `Open Pencil` itself.

But in my real workflow, the strongest results usually come from several parts working together:

- `takeaway-skill`
  - decides what is worth learning from a reference and what must not be copied directly
- `Open Pencil`
  - handles handshake, canvas reads, execution, and screenshot review
- other linked skills
  - such as static design, coding, or asset-processing layers
- local dependencies and tools
  - the scripts, runtimes, and setup I already prepared on my own machine

I also already have more reference data, distilled notes, intermediate assets, and repeated workflow practice inside the internal version.

So the social media version looks stronger not because this public repo is fake, but because my public videos are not powered by one public skill alone.

If you want results closer to my public videos, you usually need at least:

1. `takeaway-skill`
2. enough reference data
3. a local environment with the needed dependencies already installed

## Default Repository Flow

This repository is not meant to end at “read one skill file and stop.”

The default Pencil-compatible flow is:

1. install official `Pencil`
2. use `takeaway-skill` to decide what is worth taking from the reference
3. prepare screenshots, recordings, distilled notes, or other useful reference data
4. use `skill/SKILL.md` to run handshake, canvas reads, and bounded edits
5. review the result through screenshots instead of trusting text alone

In short:

- `takeaway-skill` handles upstream judgment
- `Open Pencil` handles execution
- reference data determines how far the workflow can really go

The default Web 2.0 flow is simpler:

1. open `web/index.html`
2. ask Codex to adjust the page or use the right-side editor by hand
3. hide the panel while reviewing
4. click `Done` only when the page is ready
5. export a final HTML snapshot

## Structure

- `skill/SKILL.md` - public Pencil skill
- `web/` - public Open Pencil Web 2.0 static editor
- `references/` - dependency notes and public boundary docs
- `agents/openai.yaml` - skill UI metadata
- `site/index.html` - landing page

## Public References

- [BRAND_NOTICE.md](./BRAND_NOTICE.md) - brand boundary and reuse scope
- [references/install_from_official.md](./references/install_from_official.md) - official install and dependency boundary
- [references/official_dependency_boundary.md](./references/official_dependency_boundary.md) - official dependency vs public repo scope
- [references/public_private_split.md](./references/public_private_split.md) - public layer vs private layer split

## Language Strategy

- the repo ships with both English and Chinese docs
- the Chinese version is the clearest place to explain the honest public/free boundary
- the English version is optimized for GitHub visitors

## License And Brand Boundary

The reusable code, docs, and framework are released under the MIT License.

However, brand-facing identity and endorsement implications are not automatically transferred with that license. See [BRAND_NOTICE.md](./BRAND_NOTICE.md).

In short:

- learn the method
- reuse the framework
- build your own version
- do not package a derivative as if it were the official Pencil project
- do not package it as if it were my full internal version either

## Internal vs Public Boundary

The internal version keeps more layers, such as:

- private prompt chains
- private benchmarks
- reference-data packs
- local dependencies
- third-party study archives
- a fuller multi-skill workflow

The public version keeps:

- method
- docs
- placeholders
- reusable framework

The public version does not keep:

- third-party screenshot archives
- third-party recording archives
- private identity sync
- private internal traces copied directly out of the internal workflow

## Related Skills

- [Takeaway Skill](https://github.com/julilaoshi/takeaway-skill) - distill references into reusable mechanisms.
- [Open Pencil](https://github.com/julilaoshi/open-pencil) - run Pencil workflows with agents.
- [FlowMotion Skill](https://github.com/julilaoshi/flowmotion-skill) - turn messy notes into motion flows.
- [Pickupskill](https://github.com/julilaoshi/pickupskill) - organize messy folders safely.
- [Sunzi Reading](https://github.com/julilaoshi/sunzi-reading) - explain papers in plain language.
- [Callback Skill](https://github.com/julilaoshi/callback-skill) - package feedback for Skill upgrades.

## Find Julilaoshi

<p align="center">
  <a href="https://github.com/julilaoshi"><img alt="Follow Juli on GitHub" src="https://img.shields.io/badge/Follow%20Juli-on%20GitHub-111111?style=for-the-badge&logo=github&logoColor=white" /></a>
  <a href="https://github.com/julilaoshi/open-pencil"><img alt="Star Open Pencil" src="https://img.shields.io/badge/Star-Open%20Pencil-f6c343?style=for-the-badge&logo=github&logoColor=111111" /></a>
</p>

| Platform | Identity |
| --- | --- |
| X / Twitter | [@julilaoshi](https://x.com/julilaoshi?s=21) |
| Instagram | [@julilaoshi](https://www.instagram.com/julilaoshi?igsh=d2lhZmhoMzNlOTlk&utm_source=qr) |
| YouTube | [@julilaoshi](https://www.youtube.com/@julilaoshi) |
| Red Book | [居里老师](https://xhslink.com/m/ArTQH4nAado) |

## License

MIT for the reusable framework.

See [LICENSE](./LICENSE) and [BRAND_NOTICE.md](./BRAND_NOTICE.md).
