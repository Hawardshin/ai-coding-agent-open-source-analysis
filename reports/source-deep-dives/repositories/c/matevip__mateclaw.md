# matevip/mateclaw Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

🤖 MateClaw — Your second brain with Multi-Agent Orchestration, MCP Protocol, Skills & Memory, Dream, and Multi-Channel Support. Built on Spring AI Alibaba.

## 요약

- 조사 단위: `sources/matevip__mateclaw` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,899 files, 705 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mateclaw-ui/src/views/mcp/catalog.ts, mateclaw-ui/src/views/mcp/icons.ts, mateclaw-ui/src/views/mcp/McpCard.vue이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | matevip/mateclaw |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Java |
| Stars | 624 |
| Forks | 199 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/matevip__mateclaw](../../../../sources/matevip__mateclaw) |
| Existing report | [reports/global-trending/repositories/matevip__mateclaw.md](../../../global-trending/repositories/matevip__mateclaw.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2899 / 705 |
| Max observed depth | 11 |
| Top directories | .github, assets, docker, docs, mateclaw-plugin-api, mateclaw-plugin-sample, mateclaw-server, mateclaw-ui, mateclaw-webchat |
| Top extensions | .java: 1660, .sql: 447, .md: 310, .vue: 164, .ts: 90, .txt: 59, .svg: 54, .json: 26, .sty: 13, .tex: 11, .yml: 11, .png: 9 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| docker | documentation surface | 1 |
| docs | documentation surface | 1 |
| mateclaw-plugin-api | source boundary | 1 |
| mateclaw-plugin-sample | top-level component | 1 |
| mateclaw-server | source boundary | 1 |
| mateclaw-ui | top-level component | 1 |
| mateclaw-webchat | source boundary | 1 |


## How It Runs

_No command surface extracted from root manifests._


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
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [mateclaw-ui/src/views/mcp/catalog.ts](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/mcp/catalog.ts) | mcp signal |
| mcp | [mateclaw-ui/src/views/mcp/icons.ts](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/mcp/icons.ts) | mcp signal |
| mcp | [mateclaw-ui/src/views/mcp/McpCard.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/mcp/McpCard.vue) | mcp signal |
| mcp | [mateclaw-ui/src/views/mcp/McpEmptyState.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/mcp/McpEmptyState.vue) | mcp signal |
| agentRuntime | [mateclaw-ui/src/views/Agents.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Agents.vue) | agentRuntime signal |
| agentRuntime | [mateclaw-ui/src/views/Tools.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Tools.vue) | agentRuntime signal |
| agentRuntime | [mateclaw-ui/src/views/Memory/index.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Memory/index.vue) | agentRuntime signal |
| agentRuntime | [mateclaw-ui/src/views/Memory/components/FactList.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Memory/components/FactList.vue) | agentRuntime signal |
| entrypoints | [mateclaw-webchat/src/index.ts](../../../../sources/matevip__mateclaw/mateclaw-webchat/src/index.ts) | entrypoints signal |
| entrypoints | [mateclaw-ui/src/App.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/App.vue) | entrypoints signal |
| entrypoints | [mateclaw-ui/src/main.ts](../../../../sources/matevip__mateclaw/mateclaw-ui/src/main.ts) | entrypoints signal |
| instruction | [mateclaw-server/src/main/resources/docs/zh/agents.md](../../../../sources/matevip__mateclaw/mateclaw-server/src/main/resources/docs/zh/agents.md) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [mateclaw-webchat/src/index.ts](../../../../sources/matevip__mateclaw/mateclaw-webchat/src/index.ts)<br>[mateclaw-ui/src/App.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/App.vue)<br>[mateclaw-ui/src/main.ts](../../../../sources/matevip__mateclaw/mateclaw-ui/src/main.ts) |
| agentRuntime | 1143 | [mateclaw-ui/src/views/Agents.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Agents.vue)<br>[mateclaw-ui/src/views/Tools.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Tools.vue)<br>[mateclaw-ui/src/views/Memory/index.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Memory/index.vue)<br>[mateclaw-ui/src/views/Memory/components/FactList.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Memory/components/FactList.vue)<br>[mateclaw-ui/src/views/Memory/components/FactTrustBar.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Memory/components/FactTrustBar.vue)<br>[mateclaw-ui/src/views/Memory/components/icons.ts](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Memory/components/icons.ts)<br>[mateclaw-ui/src/views/Memory/components/MemoryBrowser.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Memory/components/MemoryBrowser.vue)<br>[mateclaw-ui/src/views/Memory/components/MemoryEmptyState.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Memory/components/MemoryEmptyState.vue) |
| mcp | 67 | [mateclaw-ui/src/views/mcp/catalog.ts](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/mcp/catalog.ts)<br>[mateclaw-ui/src/views/mcp/icons.ts](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/mcp/icons.ts)<br>[mateclaw-ui/src/views/mcp/McpCard.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/mcp/McpCard.vue)<br>[mateclaw-ui/src/views/mcp/McpEmptyState.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/mcp/McpEmptyState.vue)<br>[mateclaw-ui/src/views/mcp/McpFormModal.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/mcp/McpFormModal.vue)<br>[mateclaw-ui/src/views/mcp/McpKvEditor.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/mcp/McpKvEditor.vue)<br>[mateclaw-ui/src/views/mcp/McpServerIcon.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/mcp/McpServerIcon.vue)<br>[mateclaw-ui/src/views/mcp/types.ts](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/mcp/types.ts) |
| retrieval | 668 | [mateclaw-webchat/index.html](../../../../sources/matevip__mateclaw/mateclaw-webchat/index.html)<br>[mateclaw-webchat/src/index.ts](../../../../sources/matevip__mateclaw/mateclaw-webchat/src/index.ts)<br>[mateclaw-ui/index.html](../../../../sources/matevip__mateclaw/mateclaw-ui/index.html)<br>[mateclaw-ui/src/views/Wiki/index.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Wiki/index.vue)<br>[mateclaw-ui/src/views/Wiki/utils/kbVisual.ts](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Wiki/utils/kbVisual.ts)<br>[mateclaw-ui/src/views/Wiki/components/CitationDrawer.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Wiki/components/CitationDrawer.vue)<br>[mateclaw-ui/src/views/Wiki/components/HotCachePanel.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Wiki/components/HotCachePanel.vue)<br>[mateclaw-ui/src/views/Wiki/components/ImageLightbox.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Wiki/components/ImageLightbox.vue) |
| spec | 18 | [mateclaw-server/src/test/java/vip/mate/architecture/GoalStateKeyDoubleRegistrationTest.java](../../../../sources/matevip__mateclaw/mateclaw-server/src/test/java/vip/mate/architecture/GoalStateKeyDoubleRegistrationTest.java)<br>[mateclaw-server/src/test/java/vip/mate/architecture/SkillStateKeyDoubleRegistrationTest.java](../../../../sources/matevip__mateclaw/mateclaw-server/src/test/java/vip/mate/architecture/SkillStateKeyDoubleRegistrationTest.java)<br>[mateclaw-server/src/test/java/vip/mate/architecture/StateKeyRegistrationCoverageTest.java](../../../../sources/matevip__mateclaw/mateclaw-server/src/test/java/vip/mate/architecture/StateKeyRegistrationCoverageTest.java)<br>[mateclaw-server/src/test/java/vip/mate/architecture/ToolCallbackToolContextForwardArchTest.java](../../../../sources/matevip__mateclaw/mateclaw-server/src/test/java/vip/mate/architecture/ToolCallbackToolContextForwardArchTest.java)<br>[mateclaw-server/src/main/resources/skills/design-md/SKILL.md](../../../../sources/matevip__mateclaw/mateclaw-server/src/main/resources/skills/design-md/SKILL.md)<br>[mateclaw-server/src/main/resources/skills/design-md/templates/starter.md](../../../../sources/matevip__mateclaw/mateclaw-server/src/main/resources/skills/design-md/templates/starter.md)<br>[mateclaw-server/src/main/resources/skills/claude-design/SKILL.md](../../../../sources/matevip__mateclaw/mateclaw-server/src/main/resources/skills/claude-design/SKILL.md)<br>[mateclaw-server/src/main/resources/skills/baoyu-infographic/references/layouts/winding-roadmap.md](../../../../sources/matevip__mateclaw/mateclaw-server/src/main/resources/skills/baoyu-infographic/references/layouts/winding-roadmap.md) |
| eval | 485 | [mateclaw-ui/TEST_CASES.md](../../../../sources/matevip__mateclaw/mateclaw-ui/TEST_CASES.md)<br>[mateclaw-ui/test/agentBindingSearch.test.ts](../../../../sources/matevip__mateclaw/mateclaw-ui/test/agentBindingSearch.test.ts)<br>[mateclaw-ui/src/composables/__tests__/product-cards.test.ts](../../../../sources/matevip__mateclaw/mateclaw-ui/src/composables/__tests__/product-cards.test.ts)<br>[mateclaw-ui/src/composables/__tests__/streaming-render.test.ts](../../../../sources/matevip__mateclaw/mateclaw-ui/src/composables/__tests__/streaming-render.test.ts)<br>[mateclaw-ui/src/composables/__tests__/wikilink.test.ts](../../../../sources/matevip__mateclaw/mateclaw-ui/src/composables/__tests__/wikilink.test.ts)<br>[mateclaw-server/src/test/resources/test-bundles/sample/SKILL.md](../../../../sources/matevip__mateclaw/mateclaw-server/src/test/resources/test-bundles/sample/SKILL.md)<br>[mateclaw-server/src/test/resources/test-bundles/sample/references/notes.md](../../../../sources/matevip__mateclaw/mateclaw-server/src/test/resources/test-bundles/sample/references/notes.md)<br>[mateclaw-server/src/test/resources/fixtures/llm-responses.json](../../../../sources/matevip__mateclaw/mateclaw-server/src/test/resources/fixtures/llm-responses.json) |
| security | 129 | [mateclaw-ui/src/views/Security/Layout.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Security/Layout.vue)<br>[mateclaw-ui/src/views/Security/shared.css](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Security/shared.css)<br>[mateclaw-ui/src/views/Security/Workspaces/index.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Security/Workspaces/index.vue)<br>[mateclaw-ui/src/views/Security/ToolGuard/index.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Security/ToolGuard/index.vue)<br>[mateclaw-ui/src/views/Security/Members/index.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Security/Members/index.vue)<br>[mateclaw-ui/src/views/Security/FileGuard/index.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Security/FileGuard/index.vue)<br>[mateclaw-ui/src/views/Security/composables/helpers.ts](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Security/composables/helpers.ts)<br>[mateclaw-ui/src/views/Security/AutoApproveGrants/index.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Security/AutoApproveGrants/index.vue) |
| ci | 0 | not obvious |
| container | 3 | [docker-compose.yml](../../../../sources/matevip__mateclaw/docker-compose.yml)<br>[mateclaw-server/Dockerfile](../../../../sources/matevip__mateclaw/mateclaw-server/Dockerfile)<br>[docker/searxng/Dockerfile](../../../../sources/matevip__mateclaw/docker/searxng/Dockerfile) |
| instruction | 2 | [mateclaw-server/src/main/resources/docs/zh/agents.md](../../../../sources/matevip__mateclaw/mateclaw-server/src/main/resources/docs/zh/agents.md)<br>[mateclaw-server/src/main/resources/docs/en/agents.md](../../../../sources/matevip__mateclaw/mateclaw-server/src/main/resources/docs/en/agents.md) |
| docs | 82 | [README_zh.md](../../../../sources/matevip__mateclaw/README_zh.md)<br>[README.md](../../../../sources/matevip__mateclaw/README.md)<br>[mateclaw-ui/src/views/Docs/index.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Docs/index.vue)<br>[mateclaw-server/src/main/resources/skills/research-paper-writing/templates/README.md](../../../../sources/matevip__mateclaw/mateclaw-server/src/main/resources/skills/research-paper-writing/templates/README.md)<br>[mateclaw-server/src/main/resources/skills/research-paper-writing/templates/colm2025/README.md](../../../../sources/matevip__mateclaw/mateclaw-server/src/main/resources/skills/research-paper-writing/templates/colm2025/README.md)<br>[mateclaw-server/src/main/resources/skills/research-paper-writing/templates/acl/README.md](../../../../sources/matevip__mateclaw/mateclaw-server/src/main/resources/skills/research-paper-writing/templates/acl/README.md)<br>[mateclaw-server/src/main/resources/skills/research-paper-writing/templates/aaai2026/README.md](../../../../sources/matevip__mateclaw/mateclaw-server/src/main/resources/skills/research-paper-writing/templates/aaai2026/README.md)<br>[mateclaw-server/src/main/resources/skills/p5js/README.md](../../../../sources/matevip__mateclaw/mateclaw-server/src/main/resources/skills/p5js/README.md) |
| config | 5 | [mateclaw-webchat/package.json](../../../../sources/matevip__mateclaw/mateclaw-webchat/package.json)<br>[mateclaw-webchat/tsconfig.json](../../../../sources/matevip__mateclaw/mateclaw-webchat/tsconfig.json)<br>[mateclaw-ui/package.json](../../../../sources/matevip__mateclaw/mateclaw-ui/package.json)<br>[mateclaw-ui/tsconfig.json](../../../../sources/matevip__mateclaw/mateclaw-ui/tsconfig.json)<br>[mateclaw-server/src/main/resources/skills/research-paper-writing/templates/neurips2025/Makefile](../../../../sources/matevip__mateclaw/mateclaw-server/src/main/resources/skills/research-paper-writing/templates/neurips2025/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 485 | [mateclaw-ui/TEST_CASES.md](../../../../sources/matevip__mateclaw/mateclaw-ui/TEST_CASES.md)<br>[mateclaw-ui/test/agentBindingSearch.test.ts](../../../../sources/matevip__mateclaw/mateclaw-ui/test/agentBindingSearch.test.ts)<br>[mateclaw-ui/src/composables/__tests__/product-cards.test.ts](../../../../sources/matevip__mateclaw/mateclaw-ui/src/composables/__tests__/product-cards.test.ts)<br>[mateclaw-ui/src/composables/__tests__/streaming-render.test.ts](../../../../sources/matevip__mateclaw/mateclaw-ui/src/composables/__tests__/streaming-render.test.ts)<br>[mateclaw-ui/src/composables/__tests__/wikilink.test.ts](../../../../sources/matevip__mateclaw/mateclaw-ui/src/composables/__tests__/wikilink.test.ts)<br>[mateclaw-server/src/test/resources/test-bundles/sample/SKILL.md](../../../../sources/matevip__mateclaw/mateclaw-server/src/test/resources/test-bundles/sample/SKILL.md) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 3 | [docker-compose.yml](../../../../sources/matevip__mateclaw/docker-compose.yml)<br>[mateclaw-server/Dockerfile](../../../../sources/matevip__mateclaw/mateclaw-server/Dockerfile)<br>[docker/searxng/Dockerfile](../../../../sources/matevip__mateclaw/docker/searxng/Dockerfile) |
| Security / policy | 129 | [mateclaw-ui/src/views/Security/Layout.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Security/Layout.vue)<br>[mateclaw-ui/src/views/Security/shared.css](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Security/shared.css)<br>[mateclaw-ui/src/views/Security/Workspaces/index.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Security/Workspaces/index.vue)<br>[mateclaw-ui/src/views/Security/ToolGuard/index.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Security/ToolGuard/index.vue)<br>[mateclaw-ui/src/views/Security/Members/index.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Security/Members/index.vue)<br>[mateclaw-ui/src/views/Security/FileGuard/index.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Security/FileGuard/index.vue) |
| Agent instructions | 2 | [mateclaw-server/src/main/resources/docs/zh/agents.md](../../../../sources/matevip__mateclaw/mateclaw-server/src/main/resources/docs/zh/agents.md)<br>[mateclaw-server/src/main/resources/docs/en/agents.md](../../../../sources/matevip__mateclaw/mateclaw-server/src/main/resources/docs/en/agents.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `mateclaw-ui/src/views/mcp/catalog.ts`, `mateclaw-ui/src/views/mcp/icons.ts`, `mateclaw-ui/src/views/mcp/McpCard.vue`.
2. Trace execution through entrypoints: `mateclaw-webchat/src/index.ts`, `mateclaw-ui/src/App.vue`, `mateclaw-ui/src/main.ts`.
3. Map agent/tool runtime through: `mateclaw-ui/src/views/Agents.vue`, `mateclaw-ui/src/views/Tools.vue`, `mateclaw-ui/src/views/Memory/index.vue`.
4. Inspect retrieval/memory/indexing through: `mateclaw-webchat/index.html`, `mateclaw-webchat/src/index.ts`, `mateclaw-ui/index.html`.
5. Verify behavior through test/eval files: `mateclaw-ui/TEST_CASES.md`, `mateclaw-ui/test/agentBindingSearch.test.ts`, `mateclaw-ui/src/composables/__tests__/product-cards.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 🤖 MateClaw — Your second brain with Multi Agent Orchestration, MCP Protocol, Skills & Memory, Dream, and Multi Channel . 핵심 구조 신호는 Java, pom.xml, docker-compose.yml, README.md, LICENSE, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
