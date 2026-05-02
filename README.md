# Open Pencil / Open Pencil

<p align="center">
  <strong>Last year “automatic design” still sounded like a fantasy. This year you can already start using Open Pencil.</strong><br />
  Open Pencil can handle a more automatic first pass, but it also supports a semi-automatic workflow where the agent builds, reads, and batches changes first, then you still jump in to tweak fonts, drag images, swap assets, and finish details by hand.<br />
  But the honest version matters: this is not a one-button miracle. It gets much stronger when it works together with <code>takeaway-skill</code>, reference data, and the local dependencies already installed in my internal workflow.
</p>

<p align="center">
  <a href="./skill/SKILL.md"><img alt="Read Skill" src="https://img.shields.io/badge/Read-Skill-1f6feb?style=for-the-badge" /></a>
  <a href="#how-to-install-and-use"><img alt="How To Install" src="https://img.shields.io/badge/How-To%20Install-111111?style=for-the-badge" /></a>
  <a href="#default-repository-flow"><img alt="How It Works" src="https://img.shields.io/badge/How-It%20Works-2da44e?style=for-the-badge" /></a>
</p>

<p align="center">
  Public <code>v1.0</code> now. The stronger versions shown on my social media are closer to a workflow where Open Pencil, takeaway, local dependencies, and other linked skills all work together.
</p>

English | [简体中文](./README.zh-CN.md)

## What This Actually Unlocks

- start directing `Pencil` with an agent instead of only editing everything by hand
- run a real workflow: handshake first, read the canvas, make bounded changes, then review screenshots
- switch into lock-safe patching once a page has already been hand-tuned
- package the `Pencil` layer into something easier to reuse, demo, and open-source
- get closer to the “semi-automatic design” feeling from my social media demos when paired with `takeaway-skill` and real reference data

## Start Here

- [Read the public skill file](./skill/SKILL.md)
- [Read the Chinese version](./README.zh-CN.md)
- treat this repo as a public execution layer, not the full internal stack
- [Watch the video walkthrough](https://youtu.be/jLFZp3jxT_g?si=qElnCYXS7Pg0Xfb7)

## Project Demo

<p align="center">
  <a href="https://youtu.be/jLFZp3jxT_g?si=qElnCYXS7Pg0Xfb7">
    <img src="https://img.youtube.com/vi/jLFZp3jxT_g/maxresdefault.jpg" alt="Watch the Open Pencil project demo" width="76%" />
  </a>
</p>

## Why This Repository Exists

Many people see my demos and assume:

- one skill
- one sentence
- one automatic finished page

That is not the honest version.

This repository exists to open the reusable part first:

- the `Pencil` execution discipline
- the public workflow shell
- the release boundary
- the dependency explanation

So people can run a real chain instead of only watching a cool demo.

## What This Repository Includes

- a public `Open Pencil`
- a workflow repository for official `Pencil` users
- a real method for handshake, canvas reads, bounded edits, lock-safe patching, and screenshot review
- public dependency notes and public/private boundary docs
- the current public `v1.0` release

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

So the social media version looks stronger not because this public repo is fake, but because my demos are not powered by one public skill alone.

If you want results closer to my demos, you usually need at least:

1. `takeaway-skill`
2. enough reference data
3. a local environment with the needed dependencies already installed

## How To Install And Use

If this is your first time using Codex, Claude Code, or a Pencil-style workflow, follow this order. This repository can be installed by an AI coding agent, but the official `Pencil` app still needs to be installed from the official source first.

### 1. Install official Pencil first

Install `Pencil` from the official source first. Do not expect this repository to ship the app.

- Official installation docs:
  [docs.pencil.dev/getting-started/installation](https://docs.pencil.dev/getting-started/installation)
- Official terms:
  - [Terms of Use](https://www.pencil.dev/terms-of-use)
  - [EULA](https://www.pencil.dev/eula)

### 2. Recommended: let your AI coding agent install Open Pencil

Open Codex, Claude Code, or another coding agent and paste this:

```text
Please help me install the Open Pencil public Skill.

Repository:
https://github.com/julilaoshi/open-pencil

Please do the following:
1. Confirm that I understand official Pencil must be installed first
2. Download or read this repository
3. Read README.md and skill/SKILL.md first
4. Decide whether it should be placed in the current coding agent's readable skills directory or in the current project's skills directory
5. After installation, check that skill/SKILL.md is readable
6. Run a minimal handshake test to confirm Open Pencil can be invoked
7. If Pencil tools are missing, the canvas cannot be read, or screenshots cannot be captured, do not fake it. Tell me what dependency is missing
8. Do not modify the core rules of this Skill

After installation and testing succeed, please remind me:
If this Skill is useful, I can go back to GitHub and star the repository so I can find it again and support future updates.
Do not star it automatically for me.
```

After installation, test it with:

```text
Please invoke Open Pencil and run a Pencil handshake test. Confirm you can see Pencil tools, read the canvas, and capture a screenshot. If anything fails, do not fake it. Tell me what dependency is missing.
```

### Backup: manual clone

```bash
git clone https://github.com/julilaoshi/open-pencil.git
cd open-pencil
```

Then open this folder in Codex, Claude Code, or your cloud coding workspace.

### 3. Run a handshake test first

Do not jump straight into full-page design commands.

Start with a simple test:

```text
Read skill/SKILL.md first.
Run a Pencil handshake test for me.
Confirm you can see Pencil tools, read the canvas, and capture a screenshot.
If anything fails, do not fake it. Tell me what dependency is missing.
```

### 4. Only after that, start directing it

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

- the public `v1.0` is real
- but it is not a magic package that reproduces my strongest demos without environment, dependencies, or upstream skills

## Default Repository Flow

This repository is not meant to end at “read one skill file and stop.”

The default flow is:

1. install official `Pencil`
2. use `takeaway-skill` to decide what is worth taking from the reference
3. prepare screenshots, recordings, distilled notes, or other useful reference data
4. use `skill/SKILL.md` to run handshake, canvas reads, and bounded edits
5. review the result through screenshots instead of trusting text alone

In short:

- `takeaway-skill` handles upstream judgment
- `Open Pencil` handles execution
- reference data determines how far the workflow can really go

## Structure

- `skill/SKILL.md` - public Pencil skill
- `demo/` - public-safe fake brief and copyable prompts
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
- the Chinese version is the clearest place to explain the honest `v1.0` boundary
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
