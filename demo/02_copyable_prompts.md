# Copyable Demo Prompts

下面这三条 prompt 都是给公众版 Pencil skill 用的。

默认用途：

- 第一条：从头开始
- 第二条：锁版点修
- 第三条：只做复核

---

## P01 从头开始做一版

```text
Read skill/SKILL.md first.
Use the Pencil public skill for this .pen task.
Start with a lightweight Pencil handshake.
Then read the canvas before editing.
Use demo/01_public_demo_brief.md as the brief.
Tell me what this round will change and what it will not change.
Build a clean first-pass layout with stable hierarchy and spacing.
Finish with a screenshot review.
```

## P02 锁版后只做点修

```text
Read skill/SKILL.md first.
Use the Pencil public skill for this .pen task.
Assume the page is already hand-tuned and should be treated as Manual Lock.
Do not rebuild the layout.
Only patch the named targets I mention.
Before editing, restate what this round changes and what it does not change.
Finish with a screenshot review and tell me whether anything else was moved.
```

## P03 只做截图复核

```text
Read skill/SKILL.md first.
Use the Pencil public skill in review mode.
Do not redesign the page yet.
Read the current canvas and take a screenshot review pass.
Tell me:
1. what looks fixed
2. what still looks off
3. whether any unrelated module was unintentionally moved
4. whether the page still looks like it is in an editable placeholder state
```

