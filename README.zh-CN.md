# 居里老师设计 / julilaoshi-design

<p align="center">
  <strong>居里老师做的公开设计工作流：用 AI、Skill 和网页编辑器，把设计从一句话推进到可微调、可导出的页面。</strong><br />
  居里老师设计可以帮你做自动化的第一轮搭建，也可以做半自动的人机协作：先让 agent 跑握手、读画布、批量改版，你再自己顺手调字体、拖图片、换素材、补细节。<br />
  但真相也要说清楚：它不是单独一个神奇按钮，而是和 <code>takeaway-skill</code>、参考数据、以及你本地装好的依赖一起联动，才会越来越像你在我自媒体里看到的效果。
</p>

<p align="center">
  <a href="./skill/SKILL.md"><img alt="阅读 Skill" src="https://img.shields.io/badge/阅读-Skill-1f6feb?style=for-the-badge" /></a>
  <a href="#如何载入和使用"><img alt="如何载入" src="https://img.shields.io/badge/如何-载入-111111?style=for-the-badge" /></a>
  <a href="#默认使用流"><img alt="如何使用" src="https://img.shields.io/badge/如何-使用-2da44e?style=for-the-badge" /></a>
</p>

<p align="center">
  当前公开的是 <code>v2.0</code>：原 <code>Open Pencil</code> 公开工作流，现在改名为 <code>julilaoshi-design</code>。它有两条路线：一条继续兼容官方 Pencil 的 Skill 工作流，一条给普通用户直接打开的免费 Web 微调器。
</p>

[English](./README.md) | 简体中文

## julilaoshi-design Web 2.0

居里老师设计现在新增了一条 public Web 2.0 路线，给不想先安装官方 Pencil 的普通用户使用。

免费静态编辑器入口：

- 打开 [`web/index.html`](./web/index.html)
- 可以拖拽、缩放、旋转、复制、删除、对齐和编辑简单图层
- 可以隐藏右侧编辑器来预览页面
- 点击 `Done` 后，编辑界面会消失，只保留最终页面
- 可以导出独立 HTML 快照

这条路线故意做小：公开版先解决“免费、好打开、能微调、能导出”的问题，不提前公开内部版的高级自动化、私有风格包、benchmark、案例库和未来 3.0 可能商业化的功能。

## 如何载入和使用

第一次使用 Codex、Claude Code，或者第一次接 `Pencil` 工作流的用户，不要先猜自己该装什么。先让 coding agent 载入 julilaoshi-design，然后让它问你选择哪种模式。

这个仓库是 Skill / 工作流层，不是 npm 包、pip 包，也不是 App 安装器，更不是官方 Pencil 的再分发包。

打开 Codex、Claude Code 或其他本地 coding agent，把下面这段复制进去：

```text
请帮我载入 julilaoshi-design / 居里老师设计。

仓库地址：
https://github.com/julilaoshi/julilaoshi-design

请你完成这些事：
1. 不要运行 npm install、pip install、build 命令，也不要跑任何长安装脚本。这个仓库没有包安装器。
2. 下载或读取这个仓库。
3. 先阅读 README.zh-CN.md 和 skill/SKILL.md。
4. 把 skill/SKILL.md 作为当前项目或当前 coding agent 可读取的 Skill。
5. 在开始编辑之前，先问我选择哪种模式：
   A. Pencil MCP 模式：我已经安装官方 Pencil，想通过 Pencil MCP 做设计。
   B. Web Editor 模式：我想直接在浏览器里设计，并导出 HTML。
6. 如果我选 A，请检查官方 Pencil 和 MCP 工具是否可用。如果缺依赖，直接告诉我缺什么，不要假装握手成功。
7. 如果我选 B，请打开或引导我打开 web/index.html，说明右侧编辑器怎么用，并帮我编辑或导出页面。
8. 如果当前会话访问不到我的本地桌面应用、本地 MCP 工具或本地浏览器，直接说明并停止，不要反复尝试。
9. 默认用我的语言回复，除非我另有要求。
10. 不要修改这个 Skill 的核心规则。

Skill 可读取后，请提醒我：
如果居里老师设计对我有用，可以回到 GitHub 给仓库点一个 Star，方便以后找回，也支持后续更新。公开版 2.0 会保持轻量，后续更强的 3.0 实验可能会在小范围社群里分享。
不要替我自动 Star。
```

### 选择你的模式

#### A. Pencil MCP 模式

适合已经安装官方 Pencil，并且想处理 `.pen` 文件或 Pencil MCP 画布的用户。

使用这个模式前，请先从官方渠道安装 Pencil：

- 官方安装文档：
  [docs.pencil.dev/getting-started/installation](https://docs.pencil.dev/getting-started/installation)
- 官方条款：
  - [Terms of Use](https://www.pencil.dev/terms-of-use)
  - [EULA](https://www.pencil.dev/eula)

Windows 用户注意：这条路线可能更麻烦，因为官方 Pencil 和 MCP 工具必须在你的本机可用。如果你只是想先试试居里老师设计，建议先从 Web Editor 模式开始。

Skill 载入后，如果你选择 Pencil MCP 模式，再单独复制这句测试：

```text
请调用居里老师设计，先帮我做一轮 Pencil 握手测试。确认你能看到 Pencil 工具、能读画布、能截图。如果失败，不要硬做，直接告诉我缺了什么依赖。
```

#### B. Web Editor 模式

适合普通用户、Windows 用户，或者暂时不想安装官方 Pencil 的人。

打开：

```text
web/index.html
```

Web Editor 可以：

- 移动、缩放、旋转、复制、删除和对齐简单图层
- 修改文字和常用样式
- 隐藏右侧编辑器来预览页面
- 点击 `Done` 后移除编辑界面
- 导出独立 HTML 快照

这条路线不需要官方 Pencil，不需要 MCP 工具，不需要 npm / pip，也不需要 build。

### 备用方式：手动 clone

```bash
git clone https://github.com/julilaoshi/julilaoshi-design.git
cd julilaoshi-design
```

然后把这个文件夹打开到 Codex 或 Claude Code 工作区里。

云端工作区适合阅读仓库和编辑 Web Editor 文件；如果要做真实 Pencil MCP 握手，仍然需要能访问你的本地桌面工具。

如果你的 coding agent 卡住了，先停掉它，然后补一句：

```text
停止安装尝试。这个仓库只是 Skill 仓库，不要运行包安装或 setup 脚本。只读取 skill/SKILL.md，并确认你是否能使用它。
```

### Pencil MCP 模式下，先做握手测试

不要一上来就让 agent 开始做整页设计。

先给它一句很简单的测试：

```text
先读 skill/SKILL.md。
先帮我做一轮 Pencil 握手测试。
确认你能看到 Pencil 工具、能读画布、能截图。
如果失败，不要硬做，直接告诉我缺了什么依赖。
```

### 握手通过后，再开始嘴指挥 Pencil MCP

握手通过以后，再让它正式干活：

```text
先读 skill/SKILL.md。
如果这轮有参考对象，先用 takeaway-skill 判断什么值得拿、什么不能直接抄。
如果参考证据不足，不要靠想象自己补设计方向。
这轮用居里老师设计处理这个 .pen 任务。
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

- 公开版 `v1.0` 的 Pencil 兼容工作流是真的能用
- 公开版 `v2.0` 的 Web 编辑器是免费、浏览器优先的轻量路线
- 但它不是“脱离环境、脱离依赖、脱离上游 skill 还百分百还原我公开视频效果”的魔法包

## 观看配套视频

<p align="center">
  <a href="https://youtu.be/0nGAg-1Bb-4?si=CfFmyDOCMywUQ-In">
    <img src="./assets/walkthrough-thumbnail.jpg" alt="观看居里老师设计配套视频" width="560" />
  </a>
</p>

## 它真正帮你做到什么

- 全自动用嘴语音输入做设计，不用手写复杂提示词也能直接做设计（建议语音输入）
- 可以在任何中间环节半自动修改设计，修改文字、修改图片、添加新元素，边做边接管
- 先做握手测试，再读画布，再批量改动，再截图复核
- 当页面已经手工调过时，自动切到“锁版点修”思路
- 把 `Pencil` 工作流整理成一个更好复用、更好开源的公开层
- 配合 `takeaway-skill` 和参考数据后，更容易做出接近我公开视频里那种“看起来像半自动设计”的效果

## 快速开始

- [阅读公开版 Skill 文件](./skill/SKILL.md)
- [看中文版说明](./README.zh-CN.md)
- [看英文版说明](./README.md)
- [打开 Web 2.0 编辑器](./web/index.html)

## 这个仓库为什么存在

很多人看到我公开视频时，会以为：

- 只要装一个 skill
- 随便一句话
- 就能自动做出完整页面

但真实情况不是这样。

这个仓库公开出来，是为了把真正可复用的那一层先开出来：

- `Pencil` 执行纪律
- 公开版工作流壳子
- 安全边界

这样大家至少能先跑通一条真的链路，而不是只看热闹。

## 这个仓库包含什么

- 一个公开版 `居里老师设计 / julilaoshi-design`
- 一个给官方 `Pencil` 用户使用的工作流仓
- 一套握手、读画布、批量改动、锁版点修、截图复核的方法
- 一组公开边界和依赖边界说明
- 当前公开的是 `v2.0`，包含轻量 Web 编辑器

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

这个公开仓库主要聚焦在 `居里老师设计 / julilaoshi-design` 本身。

但在我自己的工作流里，最佳效果通常来自多个东西一起工作，比如：

- `takeaway-skill`
  - 负责先判断什么值得学、什么不能直接抄
- `居里老师设计`
  - 负责握手、读画布、改动执行、截图复核
- 其他联动 skill
  - 比如静态设计、代码实现、素材处理相关 skill
- 本地化依赖和工具环境
  - 比如我自己已经提前装好的依赖、脚本和运行环境

另外，我内部版已经积累了更多参考数据、蒸馏卡、中间资产和练过很多轮的工作流。

所以你在自媒体里看到的版本更强，不是因为这个 public 仓写少了，而是因为我的公开视频本来就不是只靠一个 public skill 在工作。

如果你想更接近我公开视频里的效果，一般至少要满足 3 件事：

1. 有 `takeaway-skill`
2. 有够用的参考数据
3. 本地依赖已经装好

## 默认使用流

这个仓库默认不是“只看一个 skill 文件就结束”。

Pencil 兼容路线的标准使用流是：

1. 先装好官方 `Pencil`
2. 用 `takeaway-skill` 判断参考里什么值得拿
3. 准备好截图、录屏、蒸馏卡等参考数据
4. 用 `skill/SKILL.md` 跑握手、读画布和执行改动
5. 通过截图复核结果，而不是只看文本输出

也就是说：

- `takeaway-skill` 管上游判断
- `居里老师设计` 管执行
- 参考数据决定你能走多远

Web 2.0 路线更简单：

1. 打开 `web/index.html`
2. 让 Codex 帮你改页面，或者自己用右侧编辑器微调
3. 预览时可以先隐藏面板
4. 页面确认完成后再点 `Done`
5. 最后导出 HTML 快照

## 目录结构

- `skill/SKILL.md`：公开版 Pencil skill
- `web/`：公开版 julilaoshi-design Web 2.0 静态编辑器
- `references/`：依赖边界与公开边界说明
- `agents/openai.yaml`：skill 的 UI 元数据
- `site/index.html`：展示页

## 公开说明文件

- [BRAND_NOTICE.md](./BRAND_NOTICE.md)：品牌边界与可复用范围
- [references/install_from_official.md](./references/install_from_official.md)：官方安装与依赖边界
- [references/official_dependency_boundary.md](./references/official_dependency_boundary.md)：官方依赖与公开仓边界
- [references/public_private_split.md](./references/public_private_split.md)：公开层与私有层拆分

## 语言策略

- 文档提供英文版和中文版
- 中文版会更直接把 public 免费层的边界讲清楚
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

## 相关 Skill

- [Takeaway Skill](https://github.com/julilaoshi/takeaway-skill) - 蒸馏参考，拿机制。
- [居里老师设计](https://github.com/julilaoshi/julilaoshi-design) - 让 agent 执行 Pencil 和 Web 设计工作流。
- [FlowMotion Skill](https://github.com/julilaoshi/flowmotion-skill) - 把乱想法变流程图。
- [Pickupskill](https://github.com/julilaoshi/pickupskill) - 谨慎整理散落文件。
- [孙子读论文](https://github.com/julilaoshi/sunzi-reading) - 把论文讲成人话。
- [Callback Skill](https://github.com/julilaoshi/callback-skill) - 把反馈做成升级包。

## 找到居里老师

<p align="center">
  <a href="https://github.com/julilaoshi"><img alt="关注 GitHub" src="https://img.shields.io/badge/关注-GitHub-111111?style=for-the-badge&logo=github&logoColor=white" /></a>
  <a href="https://github.com/julilaoshi/julilaoshi-design"><img alt="给仓库点星" src="https://img.shields.io/badge/给仓库-点星-f6c343?style=for-the-badge&logo=github&logoColor=111111" /></a>
</p>

| 平台 | 账号 / 入口 |
| --- | --- |
| 推特 / X | [@julilaoshi](https://x.com/julilaoshi?s=21) |
| Instagram / INS | [@julilaoshi](https://www.instagram.com/julilaoshi?igsh=d2lhZmhoMzNlOTlk&utm_source=qr) |
| B站 | [居里老师](https://space.bilibili.com/522623529) |
| Red Book | [居里老师](https://xhslink.com/m/ArTQH4nAado) |
| 公众号 | `居里生成` |
| 视频号 | `居里老师` |

## License

代码与可复用框架采用 MIT。

详见 [LICENSE](./LICENSE) 和 [BRAND_NOTICE.md](./BRAND_NOTICE.md)。
