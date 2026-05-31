# Public Release Checklist

## 1. README First Screen

- [ ] 第一屏是否有明确钩子，而不是直接写说明书
- [ ] 是否有视频、截图或 demo 入口
- [ ] CTA 是否清楚
- [ ] 中英文分工是否合理
- [ ] 默认 GitHub 首页 `README.md` 是否是目标默认语言
- [ ] 是否存在语言切换行，且链接真实可点
- [ ] 是否明确 public 版本与 internal workflow 的差别
- [ ] `Install / How To Install` 是否没有抢掉首页前半段的传播位
- [ ] 是否对比过线上已发布页面，不只看本地草稿

## 2. Pencil Boundary

- [ ] 是否明确本仓不包含官方 Pencil app
- [ ] 是否明确本仓不重新分发官方 MCP、激活状态、token 或账号信息
- [ ] 是否保留官方安装文档链接
- [ ] 是否保留官方 Terms / EULA 链接
- [ ] 是否避免让用户误以为这是 Pencil 官方仓库
- [ ] 是否说明 Open Pencil 是公开执行层，不是完整内部自动设计系统

## 3. Privacy

- [ ] 没有本地绝对路径
- [ ] 没有私人邮箱、电话、住址
- [ ] 没有激活状态、账号、token、API key
- [ ] 没有内部 prompt chains
- [ ] 没有私有 benchmarks
- [ ] 没有私有 case libraries 或 premium asset packs
- [ ] 没有第三方截图、录屏或研究归档

## 4. Brand Boundary

- [ ] 是否保留 `BRAND_NOTICE.md`
- [ ] 是否明确 MIT 只覆盖 reusable framework material
- [ ] 是否明确 `Juli Laoshi` / `居里老师` 个人身份不自动授权
- [ ] 是否明确个人照片、肖像、banner、handle 不自动授权
- [ ] 是否避免衍生项目看起来像本人官方发布或背书

## 5. Skill Files

- [ ] 是否有 `skill/SKILL.md`
- [ ] 是否有 `agents/openai.yaml`
- [ ] `skill/SKILL.md` 是否只写工作流，不写成 README
- [ ] `agents/openai.yaml` 是否与 Open Pencil 名称和用途一致
- [ ] 安装说明是否提醒用户先安装官方 Pencil
- [ ] 安装说明是否提醒安装后重启 Codex 或对应 coding agent

## 6. Links

- [ ] 官方 Pencil 安装链接可点
- [ ] 官方 Terms / EULA 链接可点
- [ ] 视频链接可点
- [ ] README 内部锚点可点
- [ ] 不确定的链接没有乱挂

## 7. Push Before Publish

- [ ] 本地工作区干净
- [ ] GitHub remote 正确
- [ ] `.DS_Store` 等系统文件未进入提交
- [ ] 推送后做一次真实页面肉眼复查
- [ ] 推送后检查 raw `README.md`
- [ ] 修复 README 后是否再次 commit + push
