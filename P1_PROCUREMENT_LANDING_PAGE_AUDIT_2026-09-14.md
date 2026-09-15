# LONGRICH POWER P1 采购落地页审计与执行记录

日期：2026-09-14

## 结论摘要

- `travel-adapter-manufacturer.html`：**小改，不重写**。标题/H1 牢牢锁定 `travel adapter manufacturer`，ICP、FAQ、RFQ 已有；缺认证证据层、实测数据和具体 SKU 入口，Resources 导流数量也不足。
- `oem-odm-travel-adapter.html`：**小改，不重写**。页面已具备完整 OEM/ODM 采购流程与 RFQ，标题意图明确；H1 可进一步补回 `manufacturer`，并补实测证据、具体 SKU 和认证文件边界。
- `power strip manufacturer` 与 `wall outlet extender manufacturer`：**不拆**。保持 `power-strips-wall-outlets.html` 集中权重，不新建第 5 页。
- `gan-travel-adapter-manufacturer.html`：已新建采购向页面；保留 `gan-travel-adapter.html` 作为技术教育页，两者定位不同。

## TASK-01｜travel-adapter-manufacturer.html

对照 NT011-US 基准：

| 检查项 | 状态 | 证据 / 缺口 |
|---|---|---|
| ICP | ✅ | 首屏与 Buyer Summary 明确面向 brands、distributors、retailers、e-commerce sellers，覆盖 US/UK/EU/AU。 |
| 认证 | ⚠️ | 有 grounding、safety、flame-retardant 等工程主题，但没有清晰的“按市场/最终配置确认认证范围”段落，也没有证书/报告入口。 |
| 实测数据 | ❌ | 未引用 NT011 的 70W × 1 hour、72°C surface temperature，也未链接具体测试记录。 |
| FAQ | ✅ | 4 个采购问题，覆盖 MOQ、ODM、功率档、市场。 |
| 产品链接 | ⚠️ | 有 Universal/GaN/country-specific 分类入口，但缺 NT009、NT010、NT011 等具体 SKU 入口。 |
| RFQ | ✅ | 首屏、Buyer Summary 均有明确 RFQ CTA。 |
| Title/H1 | ✅ | Title 以 `Travel Adapter Manufacturer` 起始；H1 为 `Travel Adapter Manufacturer for OEM & ODM Projects.`，主题未被稀释。 |
| Resources 导流 | ⚠️ | 目前明确导流的内容页主要是 `how-to-choose-travel-adapter-manufacturer.html` 与 `engineering-resources.html`；不足 3 篇。 |

判定：**小改**。建议只新增一段“认证范围 + 已公开测试证据”、3 个具体 SKU 卡片，并从质量控制/测试类 Resources 再补至少 1 条导流。

## TASK-02｜oem-odm-travel-adapter.html

| 检查项 | 状态 | 证据 / 缺口 |
|---|---|---|
| ICP | ✅ | 首屏明确面向 brands、distributors、retailers、e-commerce sellers，并区分 OEM 与 ODM 两条路径。 |
| 认证 | ⚠️ | 流程中有 Compliance，列出 CE/UKCA/FCC/RoHS，但属于能力描述；缺“最终配置适用性”与可核验文档入口。 |
| 实测数据 | ❌ | Validation 只描述 full-load、temperature、retention、reliability，没有发布数据或测试页证据。 |
| FAQ | ✅ | 采购 FAQ 完整，覆盖 MOQ、全新开发、USB-C、接地、周期、来图制造。 |
| 产品链接 | ⚠️ | 有平台分类与工程主题入口，但没有把 NT009/NT010/NT011 作为 OEM 起点直接列出。 |
| RFQ | ✅ | 首屏和页尾都有项目提交 CTA，并列出 RFQ 所需输入。 |
| Title/H1 | ⚠️ | Title 为 `OEM Travel Adapter Manufacturer & ODM Development`，意图明确；H1 为 `OEM & ODM Travel Adapter Development...`，建议小改为包含 `Manufacturer` 的单一采购主题表达。 |
| Resources 导流 | ✅ | 已有多个工程/买家内容页导入，包括功率选择、flat、grounded、review mining、wall stability、manufacturer guide 等。 |

判定：**小改**。页面信息架构已经完整，不需要重写；补“可核验证据 + 具体平台入口”，并收紧 H1 即可。

## TASK-03｜拆分决策

### 数据事实

| 维度 | power strip manufacturer | wall outlet extender manufacturer |
|---|---|---|
| 可核验精确月搜量 | 公开网页无法可靠取得；需 Google Ads/Semrush/Ahrefs 账户导出后才能给精确数值 | 同左；不得把不含 `manufacturer` 的消费词量冒充该 B2B 精确词量 |
| 站内 GSC 信号 | 现有资料记录 `/power-strips-wall-outlets.html` 44 次页面曝光，相关 market queries 合计 28 次；说明组合页已有实际发现信号 | 项目现有 GSC/关键词文件没有该 exact phrase 的可见信号 |
| 类目需求旁证 | `power strip` 是稳定的大类词，公开行业资料也显示其相对需求高于 extension socket / socket | 不带 `manufacturer` 的 `wall outlet extender` 在 Amazon US 曾有约 6,884/周的消费端搜索，但这不能证明 B2B manufacturer 词有同等需求 |
| SERP 竞争形态 | 制造商、供应商目录、平台型结果并存；竞争中高，且更依赖域名权威度 | exact B2B 词结果稀疏但被供应商目录/平台页占据；低量不等于值得单独建页 |

### 决策

**不拆。** 原因：

1. 只有 `power strip` 采购主题出现了可见的站内搜索信号；`wall outlet extender manufacturer` 没有独立 GSC 证据。
2. 消费端 `wall outlet extender` 的类目需求不能直接转化成 manufacturer 采购词的独立页面价值。
3. 当前域名权威度和首批外链仍是瓶颈，拆页会把内容、内链与外链信号分散。
4. 等 GSC 出现该 exact phrase，或第三方工具确认其独立月搜量达到可持续页面门槛后再复审。建议门槛：连续 8–12 周有独立查询曝光，且能形成与 power-strip 明确不同的产品/认证/FAQ 内容。

## TASK-04｜已实施

- 新建 `gan-travel-adapter-manufacturer.html`。
- Title/H1 锁定 `GaN Travel Adapter Manufacturer`。
- 页面包含 ICP、45W/70W 选型、GaN 技术价值、认证范围、NT011 实测数据、OEM/ODM、FAQ、产品链接与 RFQ。
- 保留 `gan-travel-adapter.html` 为技术教育页，并在新页做角色清晰的内链。
- 3 篇内容已导流到新采购页：
  - `70w-gan-travel-adapter-full-load-test.html`
  - `can-70w-travel-adapter-charge-laptop.html`
  - `20w-vs-45w-vs-70w-travel-adapter.html`
- 新 URL 已加入 `sitemap.xml`。

## TASK-05｜GSC 执行记录

以下线上 URL 在 2026-09-14 均显示“网址已收录到 Google”，并已点击“请求编入索引”重新提交：

- `https://www.longrichpower.com/request-a-quote.html`
- `https://www.longrichpower.com/travel-adapter-manufacturer.html`
- `https://www.longrichpower.com/oem-odm-travel-adapter.html`
- `https://www.longrichpower.com/power-strips-wall-outlets.html`

`gan-travel-adapter-manufacturer.html` 已在 2026-09-15 发布到生产域名。线上 HTML 已确认 Title、H1、canonical、3 条 Resources 导入内链及 sitemap 条目均生效；GSC 初次检查显示“网址尚未收录到 Google”，随后已执行“请求编入索引”并完成实际网址测试流程。

同轮线上复核确认 `request-a-quote.html` 当前表单以 `POST /api/rfq` 提交，按钮文案为 `Submit RFQ Online`，生产 HTML 中不再出现 `Prepare RFQ Email`。公开搜索快照若仍显示旧文案，属于 Google 抓取缓存尚未刷新。建议 2026-09-21 复查搜索快照与线上表单是否一致。

## TASK-06｜外链状态与边界

- 第一轮目标 URL 统一为 `https://www.longrichpower.com/travel-adapter-manufacturer.html`。
- 当前项目记录显示：机会清单已建立，但 **earned placements = 0**；不得把候选目录或待联系媒体写成已获得反链。
- GSC“链接数量”报告当前显示“正在处理数据，请过 1 天左右再来查看”，因此本轮无法用 GSC 验证历史外链。
- 真实落地需要现有平台管理员、公司身份验证或真实工程作者出面，包括 HKTDC 资料更新、LinkedIn 公司页网址更新、供应商目录认领及工程媒体投稿。
- 首批验证标准：目标页 HTTP 200、来源页公开可访问、链接可抓取、不是站内自链，并在反链 tracker 中记录 live source URL 与验证日期。

## 验证

运行 `scripts/validate-site.mjs`：66 pages、64 indexable pages、64 unique canonicals、80 sitemap URLs、0 errors。生产部署已通过 Vercel Ready 状态，并绑定 `https://www.longrichpower.com`。
