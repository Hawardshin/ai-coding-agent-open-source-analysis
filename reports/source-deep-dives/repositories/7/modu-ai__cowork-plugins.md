# modu-ai/cowork-plugins Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

모두의 AI (MoAI) — Claude Cowork & Claude Code 한국 실무 도메인 AI 하네스·플러그인 마켓플레이스. 사업계획서·세무·법률·HR·마케팅·커머스·BI·콘텐츠 도메인 스킬·에이전트·워크플로우. Korean B2B + office docs (HWPX/DOCX/XLSX/PPTX/PDF) + AI media (image/video/voice). AI-slop 검수 + humanize-korean 내장.

## 요약

- 조사 단위: `sources/modu-ai__cowork-plugins` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,286 files, 545 directories, depth score 122, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=moai-tutor/.mcp.json, moai-media/.mcp.json, moai-marketing/.mcp.json이고, 의존성 단서는 playwright, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | modu-ai/cowork-plugins |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | HTML |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/modu-ai__cowork-plugins](../../../../sources/modu-ai__cowork-plugins) |
| Existing report | [reports/korea-trending/repositories/modu-ai__cowork-plugins.md](../../../korea-trending/repositories/modu-ai__cowork-plugins.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1286 / 545 |
| Max observed depth | 7 |
| Top directories | .claude-plugin, .git_hooks, .github, diagrams, docs, docs-site, e2e, mcp-servers, moai-bi, moai-book, moai-business, moai-career, moai-commerce, moai-comms, moai-content, moai-core, moai-data, moai-design, moai-education, moai-finance |
| Top extensions | .md: 762, .png: 93, .html: 88, .js: 55, .py: 53, .json: 50, .yaml: 46, .woff: 27, .woff2: 27, .sh: 21, .yml: 10, (none): 9 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 5 |
| .github | ci surface | 1 |
| diagrams | top-level component | 1 |
| docs-site | documentation surface | 1 |
| e2e | validation surface | 1 |
| mcp-servers | source boundary | 1 |
| moai-bi | top-level component | 1 |
| moai-book | top-level component | 1 |
| moai-business | top-level component | 1 |
| moai-career | top-level component | 1 |
| moai-commerce | top-level component | 1 |
| moai-comms | top-level component | 1 |
| moai-content | top-level component | 1 |
| moai-core | top-level component | 1 |
| moai-data | top-level component | 1 |
| moai-design | top-level component | 1 |
| moai-education | top-level component | 1 |
| moai-finance | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| test | package.json | test | echo no-unit-tests-configured-e2e-via-playwright |
| test | package.json | test:e2e | playwright test |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | ci-local | make ci-local |
| utility | Makefile | pr-merge | make pr-merge |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [moai-tutor/.mcp.json](../../../../sources/modu-ai__cowork-plugins/moai-tutor/.mcp.json) | mcp signal |
| mcp | [moai-media/.mcp.json](../../../../sources/modu-ai__cowork-plugins/moai-media/.mcp.json) | mcp signal |
| mcp | [moai-marketing/.mcp.json](../../../../sources/modu-ai__cowork-plugins/moai-marketing/.mcp.json) | mcp signal |
| mcp | [moai-legal/.mcp.json](../../../../sources/modu-ai__cowork-plugins/moai-legal/.mcp.json) | mcp signal |
| agentRuntime | [scripts/skill-lint.sh](../../../../sources/modu-ai__cowork-plugins/scripts/skill-lint.sh) | agentRuntime signal |
| agentRuntime | [scripts/skill-test-runner.sh](../../../../sources/modu-ai__cowork-plugins/scripts/skill-test-runner.sh) | agentRuntime signal |
| agentRuntime | [moai-wealth/skills/wealth-roadmap/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-wealth/skills/wealth-roadmap/SKILL.md) | agentRuntime signal |
| agentRuntime | [moai-wealth/skills/personal-tax-saver/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-wealth/skills/personal-tax-saver/SKILL.md) | agentRuntime signal |
| entrypoints | [mcp-servers/moai-ads-audit/src/moai_ads_audit/__main__.py](../../../../sources/modu-ai__cowork-plugins/mcp-servers/moai-ads-audit/src/moai_ads_audit/__main__.py) | entrypoints signal |
| entrypoints | [mcp-servers/moai-ads-audit/src/moai_ads_audit/server.py](../../../../sources/modu-ai__cowork-plugins/mcp-servers/moai-ads-audit/src/moai_ads_audit/server.py) | entrypoints signal |
| instruction | [moai-core/skills/project/references/templates/CLAUDE.md.tmpl](../../../../sources/modu-ai__cowork-plugins/moai-core/skills/project/references/templates/CLAUDE.md.tmpl) | instruction signal |
| config | [Makefile](../../../../sources/modu-ai__cowork-plugins/Makefile) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [mcp-servers/moai-ads-audit/src/moai_ads_audit/__main__.py](../../../../sources/modu-ai__cowork-plugins/mcp-servers/moai-ads-audit/src/moai_ads_audit/__main__.py)<br>[mcp-servers/moai-ads-audit/src/moai_ads_audit/server.py](../../../../sources/modu-ai__cowork-plugins/mcp-servers/moai-ads-audit/src/moai_ads_audit/server.py) |
| agentRuntime | 656 | [scripts/skill-lint.sh](../../../../sources/modu-ai__cowork-plugins/scripts/skill-lint.sh)<br>[scripts/skill-test-runner.sh](../../../../sources/modu-ai__cowork-plugins/scripts/skill-test-runner.sh)<br>[moai-wealth/skills/wealth-roadmap/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-wealth/skills/wealth-roadmap/SKILL.md)<br>[moai-wealth/skills/personal-tax-saver/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-wealth/skills/personal-tax-saver/SKILL.md)<br>[moai-wealth/skills/invest-primer/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-wealth/skills/invest-primer/SKILL.md)<br>[moai-wealth/skills/insurance-fit/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-wealth/skills/insurance-fit/SKILL.md)<br>[moai-wealth/skills/household-budget/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-wealth/skills/household-budget/SKILL.md)<br>[moai-wealth/skills/econ-literacy/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-wealth/skills/econ-literacy/SKILL.md) |
| mcp | 40 | [moai-tutor/.mcp.json](../../../../sources/modu-ai__cowork-plugins/moai-tutor/.mcp.json)<br>[moai-media/.mcp.json](../../../../sources/modu-ai__cowork-plugins/moai-media/.mcp.json)<br>[moai-marketing/.mcp.json](../../../../sources/modu-ai__cowork-plugins/moai-marketing/.mcp.json)<br>[moai-legal/.mcp.json](../../../../sources/modu-ai__cowork-plugins/moai-legal/.mcp.json)<br>[moai-core/skills/mcp-connector-setup/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-core/skills/mcp-connector-setup/SKILL.md)<br>[moai-content/.mcp.json](../../../../sources/modu-ai__cowork-plugins/moai-content/.mcp.json)<br>[moai-business/.mcp.json](../../../../sources/modu-ai__cowork-plugins/moai-business/.mcp.json)<br>[mcp-servers/moai-ads-audit/CONNECTORS.md](../../../../sources/modu-ai__cowork-plugins/mcp-servers/moai-ads-audit/CONNECTORS.md) |
| retrieval | 74 | [playwright-report/index.html](../../../../sources/modu-ai__cowork-plugins/playwright-report/index.html)<br>[moai-core/skills/project/references/core/INDEX.md](../../../../sources/modu-ai__cowork-plugins/moai-core/skills/project/references/core/INDEX.md)<br>[docs-site/themes/hugo-geekdoc/static/js/1226-93ad04cb.chunk.min.js](../../../../sources/modu-ai__cowork-plugins/docs-site/themes/hugo-geekdoc/static/js/1226-93ad04cb.chunk.min.js)<br>[docs-site/themes/hugo-geekdoc/static/js/1550-fa53e251.chunk.min.js](../../../../sources/modu-ai__cowork-plugins/docs-site/themes/hugo-geekdoc/static/js/1550-fa53e251.chunk.min.js)<br>[docs-site/themes/hugo-geekdoc/static/js/1587-cd1c2b30.chunk.min.js](../../../../sources/modu-ai__cowork-plugins/docs-site/themes/hugo-geekdoc/static/js/1587-cd1c2b30.chunk.min.js)<br>[docs-site/themes/hugo-geekdoc/static/js/165-4408c937.chunk.min.js](../../../../sources/modu-ai__cowork-plugins/docs-site/themes/hugo-geekdoc/static/js/165-4408c937.chunk.min.js)<br>[docs-site/themes/hugo-geekdoc/static/js/165-4408c937.chunk.min.js.LICENSE.txt](../../../../sources/modu-ai__cowork-plugins/docs-site/themes/hugo-geekdoc/static/js/165-4408c937.chunk.min.js.LICENSE.txt)<br>[docs-site/themes/hugo-geekdoc/static/js/1947-58c2d85f.chunk.min.js](../../../../sources/modu-ai__cowork-plugins/docs-site/themes/hugo-geekdoc/static/js/1947-58c2d85f.chunk.min.js) |
| spec | 113 | [moai-wealth/skills/wealth-roadmap/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-wealth/skills/wealth-roadmap/SKILL.md)<br>[moai-wealth/agents/wealth-roadmap-coordinator.md](../../../../sources/modu-ai__cowork-plugins/moai-wealth/agents/wealth-roadmap-coordinator.md)<br>[moai-product/skills/spec-writer/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-product/skills/spec-writer/SKILL.md)<br>[moai-product/skills/spec-writer/references/ai-strategy.md](../../../../sources/modu-ai__cowork-plugins/moai-product/skills/spec-writer/references/ai-strategy.md)<br>[moai-product/skills/spec-writer/references/product-manager.md](../../../../sources/modu-ai__cowork-plugins/moai-product/skills/spec-writer/references/product-manager.md)<br>[moai-product/skills/roadmap-manager/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-product/skills/roadmap-manager/SKILL.md)<br>[moai-product/skills/roadmap-manager/references/diversity-inclusion.md](../../../../sources/modu-ai__cowork-plugins/moai-product/skills/roadmap-manager/references/diversity-inclusion.md)<br>[moai-product/skills/roadmap-manager/references/partnership-development.md](../../../../sources/modu-ai__cowork-plugins/moai-product/skills/roadmap-manager/references/partnership-development.md) |
| eval | 61 | [test-results/.last-run.json](../../../../sources/modu-ai__cowork-plugins/test-results/.last-run.json)<br>[scripts/skill-test-runner.sh](../../../../sources/modu-ai__cowork-plugins/scripts/skill-test-runner.sh)<br>[moai-sales/skills/proposal-writer/tests/test-cases.yaml](../../../../sources/modu-ai__cowork-plugins/moai-sales/skills/proposal-writer/tests/test-cases.yaml)<br>[moai-product/skills/ux-designer/tests/test-cases.yaml](../../../../sources/modu-ai__cowork-plugins/moai-product/skills/ux-designer/tests/test-cases.yaml)<br>[moai-product/skills/spec-writer/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-product/skills/spec-writer/SKILL.md)<br>[moai-product/skills/spec-writer/references/ai-strategy.md](../../../../sources/modu-ai__cowork-plugins/moai-product/skills/spec-writer/references/ai-strategy.md)<br>[moai-product/skills/spec-writer/references/product-manager.md](../../../../sources/modu-ai__cowork-plugins/moai-product/skills/spec-writer/references/product-manager.md)<br>[moai-pm/skills/weekly-report/tests/test-cases.yaml](../../../../sources/modu-ai__cowork-plugins/moai-pm/skills/weekly-report/tests/test-cases.yaml) |
| security | 51 | [moai-product/skills/roadmap-manager/references/sustainability-audit.md](../../../../sources/modu-ai__cowork-plugins/moai-product/skills/roadmap-manager/references/sustainability-audit.md)<br>[moai-product/agents/product-ux-audit-coordinator.md](../../../../sources/modu-ai__cowork-plugins/moai-product/agents/product-ux-audit-coordinator.md)<br>[moai-marketing/skills/seo-audit/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-marketing/skills/seo-audit/SKILL.md)<br>[moai-marketing/skills/pixel-audit/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-marketing/skills/pixel-audit/SKILL.md)<br>[moai-marketing/skills/landing-page-conversion-audit/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-marketing/skills/landing-page-conversion-audit/SKILL.md)<br>[moai-marketing/agents/marketing-audit-coordinator.md](../../../../sources/modu-ai__cowork-plugins/moai-marketing/agents/marketing-audit-coordinator.md)<br>[moai-legal/skills/compliance-check/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-legal/skills/compliance-check/SKILL.md)<br>[moai-legal/skills/compliance-check/references/2026-law-changes.md](../../../../sources/modu-ai__cowork-plugins/moai-legal/skills/compliance-check/references/2026-law-changes.md) |
| ci | 7 | [.github/workflows/claude-code-review.yml](../../../../sources/modu-ai__cowork-plugins/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/modu-ai__cowork-plugins/.github/workflows/claude.yml)<br>[.github/workflows/codex-review.yml](../../../../sources/modu-ai__cowork-plugins/.github/workflows/codex-review.yml)<br>[.github/workflows/docs-site-sync.yml](../../../../sources/modu-ai__cowork-plugins/.github/workflows/docs-site-sync.yml)<br>[.github/workflows/gemini-review.yml](../../../../sources/modu-ai__cowork-plugins/.github/workflows/gemini-review.yml)<br>[.github/workflows/glm-review.yml](../../../../sources/modu-ai__cowork-plugins/.github/workflows/glm-review.yml)<br>[.github/workflows/llm-panel.yml](../../../../sources/modu-ai__cowork-plugins/.github/workflows/llm-panel.yml) |
| container | 0 | not obvious |
| instruction | 1 | [moai-core/skills/project/references/templates/CLAUDE.md.tmpl](../../../../sources/modu-ai__cowork-plugins/moai-core/skills/project/references/templates/CLAUDE.md.tmpl) |
| docs | 43 | [README.md](../../../../sources/modu-ai__cowork-plugins/README.md)<br>[moai-wealth/README.md](../../../../sources/modu-ai__cowork-plugins/moai-wealth/README.md)<br>[moai-tutor/README.md](../../../../sources/modu-ai__cowork-plugins/moai-tutor/README.md)<br>[moai-support/README.md](../../../../sources/modu-ai__cowork-plugins/moai-support/README.md)<br>[moai-sales/README.md](../../../../sources/modu-ai__cowork-plugins/moai-sales/README.md)<br>[moai-research/README.md](../../../../sources/modu-ai__cowork-plugins/moai-research/README.md)<br>[moai-public-data/README.md](../../../../sources/modu-ai__cowork-plugins/moai-public-data/README.md)<br>[moai-productivity/README.md](../../../../sources/modu-ai__cowork-plugins/moai-productivity/README.md) |
| config | 5 | [Makefile](../../../../sources/modu-ai__cowork-plugins/Makefile)<br>[package.json](../../../../sources/modu-ai__cowork-plugins/package.json)<br>[mcp-servers/moai-ads-audit/pyproject.toml](../../../../sources/modu-ai__cowork-plugins/mcp-servers/moai-ads-audit/pyproject.toml)<br>[mcp-servers/moai-ads-audit/uv.lock](../../../../sources/modu-ai__cowork-plugins/mcp-servers/moai-ads-audit/uv.lock)<br>[docs-site/scripts/render/package.json](../../../../sources/modu-ai__cowork-plugins/docs-site/scripts/render/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 61 | [test-results/.last-run.json](../../../../sources/modu-ai__cowork-plugins/test-results/.last-run.json)<br>[scripts/skill-test-runner.sh](../../../../sources/modu-ai__cowork-plugins/scripts/skill-test-runner.sh)<br>[moai-sales/skills/proposal-writer/tests/test-cases.yaml](../../../../sources/modu-ai__cowork-plugins/moai-sales/skills/proposal-writer/tests/test-cases.yaml)<br>[moai-product/skills/ux-designer/tests/test-cases.yaml](../../../../sources/modu-ai__cowork-plugins/moai-product/skills/ux-designer/tests/test-cases.yaml)<br>[moai-product/skills/spec-writer/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-product/skills/spec-writer/SKILL.md)<br>[moai-product/skills/spec-writer/references/ai-strategy.md](../../../../sources/modu-ai__cowork-plugins/moai-product/skills/spec-writer/references/ai-strategy.md) |
| CI workflows | 7 | [.github/workflows/claude-code-review.yml](../../../../sources/modu-ai__cowork-plugins/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/modu-ai__cowork-plugins/.github/workflows/claude.yml)<br>[.github/workflows/codex-review.yml](../../../../sources/modu-ai__cowork-plugins/.github/workflows/codex-review.yml)<br>[.github/workflows/docs-site-sync.yml](../../../../sources/modu-ai__cowork-plugins/.github/workflows/docs-site-sync.yml)<br>[.github/workflows/gemini-review.yml](../../../../sources/modu-ai__cowork-plugins/.github/workflows/gemini-review.yml)<br>[.github/workflows/glm-review.yml](../../../../sources/modu-ai__cowork-plugins/.github/workflows/glm-review.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 51 | [moai-product/skills/roadmap-manager/references/sustainability-audit.md](../../../../sources/modu-ai__cowork-plugins/moai-product/skills/roadmap-manager/references/sustainability-audit.md)<br>[moai-product/agents/product-ux-audit-coordinator.md](../../../../sources/modu-ai__cowork-plugins/moai-product/agents/product-ux-audit-coordinator.md)<br>[moai-marketing/skills/seo-audit/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-marketing/skills/seo-audit/SKILL.md)<br>[moai-marketing/skills/pixel-audit/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-marketing/skills/pixel-audit/SKILL.md)<br>[moai-marketing/skills/landing-page-conversion-audit/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-marketing/skills/landing-page-conversion-audit/SKILL.md)<br>[moai-marketing/agents/marketing-audit-coordinator.md](../../../../sources/modu-ai__cowork-plugins/moai-marketing/agents/marketing-audit-coordinator.md) |
| Agent instructions | 1 | [moai-core/skills/project/references/templates/CLAUDE.md.tmpl](../../../../sources/modu-ai__cowork-plugins/moai-core/skills/project/references/templates/CLAUDE.md.tmpl) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `moai-tutor/.mcp.json`, `moai-media/.mcp.json`, `moai-marketing/.mcp.json`.
2. Trace execution through entrypoints: `mcp-servers/moai-ads-audit/src/moai_ads_audit/__main__.py`, `mcp-servers/moai-ads-audit/src/moai_ads_audit/server.py`.
3. Map agent/tool runtime through: `scripts/skill-lint.sh`, `scripts/skill-test-runner.sh`, `moai-wealth/skills/wealth-roadmap/SKILL.md`.
4. Inspect retrieval/memory/indexing through: `playwright-report/index.html`, `moai-core/skills/project/references/core/INDEX.md`, `docs-site/themes/hugo-geekdoc/static/js/1226-93ad04cb.chunk.min.js`.
5. Verify behavior through test/eval files: `test-results/.last-run.json`, `scripts/skill-test-runner.sh`, `moai-sales/skills/proposal-writer/tests/test-cases.yaml`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 모두의 AI MoAI — Claude Cowork & Claude Code 한국 실무 도메인 AI 하네스·플러그인 마켓플레이스. 사업계획서·세무·법률·HR·마케팅·커머스·BI·콘텐츠 도메인 스킬·에이전트·워크플로우.. 핵심 구조 신호는 HTML, package.json, Makefile, README.md, LICENSE, playwright이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
