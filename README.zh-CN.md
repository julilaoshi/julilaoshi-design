# Pencil Public Skill / Pencil 公众版 skill

<p align="center">
  <strong>去年全自动设计还像幻想，今年你已经能开始用上 Pencil Public Skill 了。</strong><br />
  但真相也要说清楚：它不是单独一个神奇按钮，而是和 <code>takeaway-skill</code>、参考数据、以及你本地装好的依赖一起联动，才会越来越像你在我自媒体里看到的效果。
</p>

<p align="center">
  <a href="./skill/SKILL.md"><img alt="阅读 Skill" src="https://img.shields.io/badge/阅读-Skill-1f6feb?style=for-the-badge" /></a>
  <a href="#如何安装和使用"><img alt="如何安装" src="https://img.shields.io/badge/如何-安装-111111?style=for-the-badge" /></a>
  <a href="#默认使用流"><img alt="如何使用" src="https://img.shields.io/badge/如何-使用-2da44e?style=for-the-badge" /></a>
  <a href="./references/internal_value_assessment.md"><img alt="内部判断" src="https://img.shields.io/badge/内部-判断-f6c343?style=for-the-badge" /></a>
</p>

<p align="center">
  当前公开的是 <code>v1.0</code>。我社交媒体里展示的版本，更接近“Pencil + takeaway + 本地化依赖 + 其他联动 skill”一起工作的内部流程。
</p>

[English](./README.md) | 简体中文

## 它真正帮你做到什么

- 让你开始真正用 agent 指挥 `Pencil`，而不是只会手工一点点改
- 先做握手测试，再读画布，再批量改动，再截图复核
- 当页面已经手工调过时，自动切到“锁版点修”思路
- 把 `Pencil` 工作流整理成一个更好复用、更好演示、更好开源的公开层
- 配合 `takeaway-skill` 和参考数据后，更容易做出接近我自媒体里那种“看起来像半自动设计”的效果

## 快速开始

- [阅读公开版 Skill 文件](./skill/SKILL.md)
- [看中文版说明](./README.zh-CN.md)
- [看英文版说明](./README.md)
- [看内部价值判断](./references/internal_value_assessment.md)

## 这个仓库为什么存在

很多人看到我演示时，会以为：

- 只要装一个 skill
- 随便一句话
- 就能自动做出完整页面

但真实情况不是这样。

这个仓库公开出来，是为了把真正可复用的那一层先开出来：

- `Pencil` 执行纪律
- 公开版工作流壳子
- 安全边界
- 发布检查表

这样大家至少能先跑通一条真的链路，而不是只看热闹。

## 这个仓库包含什么

- 一个公开版 `Pencil Public Skill`
- 一个给官方 `Pencil` 用户使用的工作流仓
- 一套握手、读画布、批量改动、锁版点修、截图复核的方法
- 一组公开边界、依赖边界和发布检查说明
- 当前公开的是 `v1.0`

## 这个仓库不包含什么

- 官方 `Pencil` 本体
- 官方 `MCP` 的再分发包
- 账号、token、激活状态、本机路径
- 私有提示词链
- 私有 benchmark
- 私有案例库和高级素材包
- internal 里积累的第三方截图、录屏、研究档案
- 那套已经装了很多本地依赖和联动 skill 的内部增强版

## 为什么我自媒体里的版本看起来更强

这个公开仓库主要聚焦在 `Pencil Public Skill` 本身。

但在我自己的工作流里，最佳效果通常来自多个东西一起工作，比如：

- `takeaway-skill`
  - 负责先判断什么值得学、什么不能直接抄
- `Pencil Public Skill`
  - 负责握手、读画布、改动执行、截图复核
- 其他联动 skill
  - 比如静态设计、代码实现、素材处理相关 skill
- 本地化依赖和工具环境
  - 比如我自己已经提前装好的依赖、脚本和运行环境

另外，我内部版已经积累了更多参考数据、蒸馏卡、中间资产和练过很多轮的工作流。

所以你在自媒体里看到的版本更强，不是因为这个 public 仓写少了，而是因为我演示时本来就不是只靠一个 public skill 在工作。

如果你想更接近我演示里的效果，一般至少要满足 3 件事：

1. 有 `takeaway-skill`
2. 有够用的参考数据
3. 本地依赖已经装好

## 如何安装和使用

第一次使用 Codex、Claude Code，或者第一次接 `Pencil` 工作流的用户，建议按下面顺序来。

### 第一步：先装官方 Pencil

先从官方渠道安装 `Pencil`，不要从这个仓库里找安装包。

- 官方安装文档：
  [docs.pencil.dev/getting-started/installation](https://docs.pencil.dev/getting-started/installation)
- 官方条款：
  - [Terms of Use](https://www.pencil.dev/terms-of-use)
  - [EULA](https://www.pencil.dev/eula)

### 第二步：把仓库拉到本地

```bash
git clone https://github.com/julilaoshi/pencil-compatible-workflow-kit.git
cd pencil-compatible-workflow-kit
```

然后把这个文件夹打开到 Codex、Claude Code，或者你的 cloud coding 工作区里。

### 第三步：先做握手测试

不要一上来就让 agent 开始做整页设计。

先给它一句很简单的测试：

```text
先读 skill/SKILL.md。
先帮我做一轮 Pencil 握手测试。
确认你能看到 Pencil 工具、能读画布、能截图。
如果失败，不要硬做，直接告诉我缺了什么依赖。
```

### 第四步：握手通过后，再开始嘴指挥

握手通过以后，再让它正式干活：

```text
先读 skill/SKILL.md。
如果这轮有参考对象，先用 takeaway-skill 判断什么值得拿、什么不能直接抄。
如果参考证据不足，不要靠想象自己补设计方向。
这轮用 Pencil Public Skill 处理这个 .pen 任务。
先告诉我这轮改什么、不改什么。
如果当前页面已经手工调过，就自动切到锁版点修模式，只改点名对象。
最后一定做截图复核，并告诉我有没有带动其他模块。
```

### 如果失败了，通常说明什么

如果有些功能跑不起来，不一定是这个 skill 不好，更常见的是你还缺下面这些东西：

- 官方 `Pencil` 没装好
- `Pencil` 没启动
- MCP 工具还没在客户端里出现
- 你的本地依赖还没装齐
- 你没有接上 `takeaway-skill`
- 你没有给够参考数据

也就是说：

- 公开版 `v1.0` 是真的能用
- 但它不是“脱离环境、脱离依赖、脱离上游 skill 还百分百还原我演示效果”的魔法包

## 默认使用流

这个仓库默认不是“只看一个 skill 文件就结束”。

标准使用流是：

1. 先装好官方 `Pencil`
2. 用 `takeaway-skill` 判断参考里什么值得拿
3. 准备好截图、录屏、蒸馏卡等参考数据
4. 用 `skill/SKILL.md` 跑握手、读画布和执行改动
5. 通过截图复核结果，而不是只看文本输出

也就是说：

- `takeaway-skill` 管上游判断
- `Pencil Public Skill` 管执行
- 参考数据决定你能走多远

## 目录结构

- `skill/SKILL.md`：公开版 Pencil skill
- `demo/`：公开安全假案例和可复制 prompt
- `references/`：依赖边界、公开边界和内部判断
- `agents/openai.yaml`：skill 的 UI 元数据
- `site/index.html`：展示页

## 发布辅助

- [GITHUB_ABOUT_SUGGESTION.md](./GITHUB_ABOUT_SUGGESTION.md)：GitHub description 与 topics 建议
- [PUBLIC_RELEASE_CHECKLIST.md](./PUBLIC_RELEASE_CHECKLIST.md)：发布前最终检查表
- [RELEASE_V1_0.md](./RELEASE_V1_0.md)：首发说明草稿

## 语言策略

- 文档提供英文版和中文版
- 中文版会更直接把 `v1.0` 的边界讲清楚
- 英文版更适合给 GitHub 公共访客快速理解

## License 与品牌边界

本仓库里可复用的代码、文档和框架，按 MIT License 公开。

但品牌身份、个人形象、背书关系，不会因为 MIT 自动一起开放。详见 [BRAND_NOTICE.md](./BRAND_NOTICE.md)。

简单说就是：

- 方法可以学
- 框架可以复用
- 但不要把衍生作品包装成官方 Pencil 项目
- 也不要包装成作者本人内部完整版

## 内部版与公开版边界

内部版会保留更多东西，比如：

- 私有提示词链
- 私有 benchmark
- 参考数据包
- 本地化依赖
- 第三方研究档案
- 多 skill 联动后的完整流程

公开版保留的是：

- 方法
- 说明
- 占位模板
- 可复用框架

公开版不保留的是：

- 第三方截图归档
- 第三方录屏归档
- 私有身份同步
- 从 internal 直接搬出来的私有研究痕迹

## License

代码与可复用框架采用 MIT。

详见 [LICENSE](./LICENSE) 和 [BRAND_NOTICE.md](./BRAND_NOTICE.md)。
