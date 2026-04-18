# internal_to_public_sync_whitelist

用途：

- 这份表专门用于把 internal `pencil-execution-skill` 往 public `pencil-compatible-workflow` 同步时做白名单判断。
- 目标不是“internal 有什么就往外搬什么”，而是“只同步可公开的方法层，保留私有护城河和内部链路指纹”。
- 默认基准：
  - internal 源：`/Users/awholiu/Desktop/coco/skills/pencil-execution-skill/SKILL.md`
  - public 目标：`/Users/awholiu/Desktop/coco/13_coding/julilaoshi-lab/works/open-pencil/skill/SKILL.md`

## 判定图例

沿用旧规则：

- 不靠 HTML 真颜色做主标记
- 优先用 Markdown 自带显著样式
- 原句统一用引用块，减少横向扫表的负担

这份表现在这样读：

- 🟢 **白名单｜可直接公开**
  - 这类句子属于通用执行纪律，公开后不会明显泄露私有护城河。
- 🟡 *灰名单｜改写后公开*
  - 概念可以公开，但原句带有 internal 指纹、内部生态名、过强方法树，或容易让人误解成官方/完整版。
- 🔴 `红线｜必须删除`
  - 不要进 public；即使概念相关，也只保留抽象结果，不保留原句或原始结构。

阅读方式：

- `> internal 原句：...`
  - 这是 internal 里的原句或原句群
- `公开建议：...`
  - 这是 public 版更适合保留的写法
- `说明：...`
  - 这是为什么这么判

## 同步总原则

1. public 先写清“非官方、官方依赖外置、用户自行安装官方 Pencil”。
2. public 只开放执行方法，不开放 internal 多 skill 路由图。
3. public 只给通用规则，不把 internal 阶段树、提示词编排、案例库、benchmark 包一起抬出去。
4. public 可以写官方公开可见的工具名；但不要暗示你获得了官方再分发权。
5. 只要一句话会让陌生人更容易 fork 出你 70% 的真实竞争力，就不要直接同步。

## 🟢 **白名单｜可直接公开**

### 1. 执行层定位

> internal 原句：`这个 skill 是 Pencil MCP 的工具执行层，不是新的设计主 Skill。`

公开建议：`这是官方 Pencil 之上的执行层，不负责主设计判断。`

说明：这是通用定位，不是护城河。

### 2. 负责范围

> internal 原句：`它负责：预握手 / 常用工具调用顺序 / 读画布、批量改、截图复核 / 锁版后只做最小执行，不顺手重排`

公开建议：保留原意即可。

说明：这是执行纪律，公开后价值在“会用”，不在“偷走核心”。

### 3. 不负责设计判断

> internal 原句：`它不负责：决定页面骨架 / 决定设计方向`

公开建议：保留原意即可。

说明：这是边界说明，公开后会减少误用。

### 4. 触发词和触发场景

> internal 原句：`用户明确说 Pencil / .pen / Pencil MCP / 截图 review / 在 Pencil 里继续做 / MCP握手测试`

> internal 原句：`打开现有 .pen / 在画布里改稿 / 用 MCP 做批量修改 / 用截图做终稿复核`

公开建议：这两组都可以直接保留。

说明：这是公开可理解的触发条件，不构成私有指纹。

### 5. 核心执行纪律

> internal 原句：`1. 先握手，再开工。2. 先读结构，再批量改。3. 一轮尽量批量，不碎改。4. 锁版后只做点修，不顺手重排。5. 任何执行结果都要用截图复核。`

公开建议：可以直接作为 public 核心规则。

说明：这是最值得公开的方法层。

### 6. 高价值工具提示

> internal 原句：`默认先说明：要集中跑一轮高频 Pencil 工具，是为了减少后续重复弹窗。`

> internal 原句：`默认优先覆盖：batch_get / batch_design / get_screenshot`

> internal 原句：`若弹窗里有 Allow for this chat 或更大范围许可，默认提醒用户优先选当前聊天可用范围最大的选项。`

公开建议：三条都可以直接保留。

说明：这些属于公开执行经验，不是私有秘密。

### 7. 读画布纪律

> internal 原句：`开头优先做一次 batch_get 或等价读取，先看当前结构 / 当前锚线 / 当前锁版程度`

公开建议：保留原意即可。

说明：这是画布读取纪律，属于可公开方法层。

### 8. 锁版后的点修纪律

> internal 原句：`如果当前已进入 Manual Lock：一次只改点名对象 / 不顺手移动别的模块 / 不以更统一为名回退用户手工摆位`

公开建议：保留原意即可。

说明：这是非常适合 public 的执行纪律。

### 9. 截图复核要求

> internal 原句：`每轮收尾至少做一次 get_screenshot 或等价截图复核。必须明确两件事：点名问题有没有修到；其他模块有没有被意外带动。`

公开建议：保留原意即可。

说明：这是高价值但非敏感的公开规则。

### 10. 蓝框 / placeholder 排错经验

> internal 原句：`若画布还保留编辑态蓝框、placeholder 或整页发蓝，默认先检查最外层容器是否仍在编辑态。`

公开建议：保留原意即可。

说明：这是具体排错经验，公开后会显著提升可用性。

## 🟡 *灰名单｜改写后公开*

### 1. internal skill 名不要直接抬出去

> internal 原句：`它不负责替代 static-design-skill、appskill 或 codingskill`

公开建议：`它不替代上游设计判断、产品 UI 判断或网页实现判断。`

说明：direct 点名 internal skill 名会暴露你的内部技能生态结构。

### 2. 上下游关系保留概念，不保留命名体系

> internal 原句：`static-design-skill 负责静态设计主判断，本 skill 负责把该判断落到 Pencil`

公开建议：`若上游已经锁了版式和优先级，这一层只负责把判断落到画布。`

说明：可以公开“先有上游 brief，再执行”，但不要公开 internal 技能命名体系。

### 3. `上游主 Skill` 改成 `brief`

> internal 原句：`开工前至少明确：这轮上游主 Skill 是谁 / 这轮允许改什么 / 这轮不改什么`

公开建议：`开工前先确认：这轮允许改什么，这轮不改什么，上游 brief 是什么。`

说明：`上游主 Skill` 是 internal 语境词，改成 `brief` 更适合 public。

### 4. 阶段概念能公开，exact 术语组不必整套搬

> internal 原句：`先判断当前轮属于 Reference Build / Layout Build / Manual Lock`

公开建议：`先判断当前是在参考搭建、布局搭建，还是锁版点修阶段。`

说明：阶段思想可以公开，但 exact internal taxonomy 不必完整搬出。

### 5. 设计层升级边界

> internal 原句：`如果问题变成骨架不对 / 信息层级不对 / 图片主导策略不对 / 该不该删导语，默认交回 static-design-skill。`

公开建议：`如果问题已经回到骨架、信息层级或视觉策略，就不该继续停留在执行层。`

说明：边界可公开，但不必暴露 internal handoff 名称。

### 6. 产品层升级边界

> internal 原句：`如果问题变成 App 状态流 / 组件交互 / 导航结构，默认交回 appskill。`

公开建议：`如果问题升级成产品 UI、交互状态或导航结构，应切回产品层判断。`

说明：保留角色，不保留 internal skill 名。

### 7. 实现层升级边界

> internal 原句：`如果问题变成网页代码实现 / 站点 runtime / 交互动效落地，默认交回 codingskill。`

公开建议：`如果问题升级成网页实现或运行时落地，应切回代码实现层。`

说明：保留角色，不保留 internal skill 名。

### 8. 最低回执要去 internal 术语

> internal 原句：`最低回执：本轮上游主 Skill / 本轮执行阶段 / 本轮改了什么 / 本轮没改什么 / 截图复核结果`

公开建议：`回执至少要写：当前阶段、这轮改了什么、这轮没改什么、怎么验证的。`

说明：`上游主 Skill` 属于 internal 术语，其他字段都可保留。

## 🔴 `红线｜必须删除`

### 1. internal 多 skill 编排图

> internal 原句：`appskill / codingskill / takeaway-skill / visual-extraction-skill` 的直接点名关系

公开建议：不要直接同步。

说明：这些名称串在一起，会暴露 internal 多 skill 编排图。

### 2. 未来即使新增，也不要同步的内容

以下内容以后即使出现在 internal `pencil-execution-skill`，默认也不要进 public：

1. 本地绝对路径
2. internal benchmark 名称、编号、判分口径
3. private case library 名称或真实案例指纹
4. 第三方截图、录屏、采样档案的归档能力说明
5. 能直接暴露你内部 prompt choreography 的完整句群
6. 你自己的高级模板包、私有设计库、私有 style guide 名
7. 任何真实客户、合作方、课程、研究项目名字
8. 任何会让 public 仓看起来像官方发行版的表述

## 推荐同步顺序

每次从 internal 往 public 搬内容，按这个顺序：

1. 先补 public 边界前言
   - 非官方
   - 官方依赖外置
   - 用户自行安装官方 Pencil
2. 再同步 `白` 项
   - 执行层定位
   - 核心规则
   - 握手、读画布、截图复核
3. 再改写 `灰` 项
   - 去 internal skill 名
   - 去 internal taxonomy 指纹
   - 去 internal 术语
4. 最后复查 `红` 项
   - 一旦命中，直接删，不做“稍微改一点继续留”

## 一句话判断口径

- `方法可以公开，命名体系要收。`
- `执行纪律可以公开，内部链路图不要公开。`
- `工具名可以公开，护城河拼装方式不要公开。`
- `能帮别人用起来的句子可以留，能帮别人直接抄走你的句子不能留。`
