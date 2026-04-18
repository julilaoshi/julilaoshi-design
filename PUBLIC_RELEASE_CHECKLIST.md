# PUBLIC_RELEASE_CHECKLIST

用途：

- 每次从 internal 版同步到 public 版前，先过这张表
- 目标不是“能发出去”，而是“发出去后不误导、不越界、不漏隐私”

使用方式：

1. 发布前逐项检查
2. 任一高风险项没过，就先不发
3. 勾完后，再看一次 `README`、`BRAND_NOTICE` 和 `references/official_dependency_boundary.md`

---

## A. 官方依赖边界

- [ ] 没有打包官方 Pencil 二进制
- [ ] 没有打包官方 Pencil 扩展安装包
- [ ] 没有打包官方 MCP 可执行体
- [ ] 没有写出任何与官方 EULA 冲突的“可再分发”表述
- [ ] README 已明确写清“用户需自行安装官方 Pencil”

未通过时怎么改：

- 删除官方本体文件
- 删除二次分发暗示
- 把依赖关系改成“官方安装在外部，本仓只给 workflow”

## B. 隐私与本机信息

- [ ] 没有真实邮箱、token、激活态文件
- [ ] 没有本地绝对路径
- [ ] 没有设备名、账号名、私有 workspace 路径
- [ ] 没有带个人信息的截图
- [ ] 没有 MCP 调试日志里泄露机器环境信息

未通过时怎么改：

- 删除或脱敏
- 改成占位值
- 重截演示图

## C. 第三方工具与资产

- [ ] 第三方工具若要写入文档，已确认许可或至少明确“不随仓库再分发”
- [ ] 没有把第三方付费工具脚本直接打包出来
- [ ] 没有把第三方截图、录屏、案例档案带进 public
- [ ] 若出现第三方 design assets，已确认许可来源和使用范围

未通过时怎么改：

- 删除未确认许可的内容
- 改成文字说明和外链
- 把真正资产留在 private overlay

## D. 私有护城河

- [ ] 没有完整公开高级 prompt 链
- [ ] 没有公开 private benchmark 包
- [ ] 没有公开 private case library
- [ ] 没有公开高价值风格资产、模板包或内部规则树
- [ ] 没有出现“一 fork 就能复刻主竞争力”的关键拼图

未通过时怎么改：

- 降成公开版壳子
- 留方法，不留全量资产
- 把强规则、强案例、强素材退回 internal

## E. 仓库口径与诚实性

- [ ] 没有把本仓写成官方项目
- [ ] 没有暗示官方背书
- [ ] 没有把“兼容”写成“官方内置”
- [ ] 没有用夸张措辞把 public v1.0 写成 internal 完整版
- [ ] README 已明确写清“Unofficial”与“Bring your own Pencil install”

未通过时怎么改：

- 改标题
- 改副标题
- 补官方依赖声明

## F. 最后 30 秒复核

- [ ] 我能一句话说清：这个仓到底开放了什么
- [ ] 我能一句话说清：这个仓明确没有开放什么
- [ ] 陌生人只看首页，也不会误以为这里附带官方 Pencil
- [ ] 陌生人只看首页，也不会误以为这里就是我的 private full stack

推荐收口句：

- Open the workflow layer.
- Keep the official dependency external.
- Reserve the private moat.

