# matevip/mateclaw 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

🤖 MateClaw — Your second brain with Multi-Agent Orchestration, MCP Protocol, Skills & Memory, Dream, and Multi-Channel Support. Built on Spring AI Alibaba.

## 요약

- 조사 단위: `sources/matevip__mateclaw` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,899 files, 705 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mateclaw-ui/src/views/mcp/catalog.ts, mateclaw-ui/src/views/mcp/icons.ts, mateclaw-ui/src/views/mcp/McpCard.vue이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | matevip/mateclaw |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Java |
| Stars | 624 |
| Forks | 199 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/matevip__mateclaw](../../../../sources/matevip__mateclaw) |
| 기존 보고서 | [reports/global-trending/repositories/matevip__mateclaw.md](../../../global-trending/repositories/matevip__mateclaw.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2899 / 705 |
| 관측 최대 깊이 | 11 |
| 상위 디렉터리 | .github, assets, docker, docs, mateclaw-plugin-api, mateclaw-plugin-sample, mateclaw-server, mateclaw-ui, mateclaw-webchat |
| 상위 확장자 | .java: 1660, .sql: 447, .md: 310, .vue: 164, .ts: 90, .txt: 59, .svg: 54, .json: 26, .sty: 13, .tex: 11, .yml: 11, .png: 9 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [mateclaw-webchat/src/index.ts](../../../../sources/matevip__mateclaw/mateclaw-webchat/src/index.ts)<br>[mateclaw-ui/src/App.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/App.vue)<br>[mateclaw-ui/src/main.ts](../../../../sources/matevip__mateclaw/mateclaw-ui/src/main.ts) |
| agentRuntime | 1143 | [mateclaw-ui/src/views/Agents.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Agents.vue)<br>[mateclaw-ui/src/views/Tools.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Tools.vue)<br>[mateclaw-ui/src/views/Memory/index.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Memory/index.vue)<br>[mateclaw-ui/src/views/Memory/components/FactList.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Memory/components/FactList.vue)<br>[mateclaw-ui/src/views/Memory/components/FactTrustBar.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Memory/components/FactTrustBar.vue)<br>[mateclaw-ui/src/views/Memory/components/icons.ts](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Memory/components/icons.ts)<br>[mateclaw-ui/src/views/Memory/components/MemoryBrowser.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Memory/components/MemoryBrowser.vue)<br>[mateclaw-ui/src/views/Memory/components/MemoryEmptyState.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Memory/components/MemoryEmptyState.vue) |
| mcp | 67 | [mateclaw-ui/src/views/mcp/catalog.ts](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/mcp/catalog.ts)<br>[mateclaw-ui/src/views/mcp/icons.ts](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/mcp/icons.ts)<br>[mateclaw-ui/src/views/mcp/McpCard.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/mcp/McpCard.vue)<br>[mateclaw-ui/src/views/mcp/McpEmptyState.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/mcp/McpEmptyState.vue)<br>[mateclaw-ui/src/views/mcp/McpFormModal.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/mcp/McpFormModal.vue)<br>[mateclaw-ui/src/views/mcp/McpKvEditor.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/mcp/McpKvEditor.vue)<br>[mateclaw-ui/src/views/mcp/McpServerIcon.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/mcp/McpServerIcon.vue)<br>[mateclaw-ui/src/views/mcp/types.ts](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/mcp/types.ts) |
| retrieval | 668 | [mateclaw-webchat/index.html](../../../../sources/matevip__mateclaw/mateclaw-webchat/index.html)<br>[mateclaw-webchat/src/index.ts](../../../../sources/matevip__mateclaw/mateclaw-webchat/src/index.ts)<br>[mateclaw-ui/index.html](../../../../sources/matevip__mateclaw/mateclaw-ui/index.html)<br>[mateclaw-ui/src/views/Wiki/index.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Wiki/index.vue)<br>[mateclaw-ui/src/views/Wiki/utils/kbVisual.ts](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Wiki/utils/kbVisual.ts)<br>[mateclaw-ui/src/views/Wiki/components/CitationDrawer.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Wiki/components/CitationDrawer.vue)<br>[mateclaw-ui/src/views/Wiki/components/HotCachePanel.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Wiki/components/HotCachePanel.vue)<br>[mateclaw-ui/src/views/Wiki/components/ImageLightbox.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Wiki/components/ImageLightbox.vue) |
| spec | 18 | [mateclaw-server/src/test/java/vip/mate/architecture/GoalStateKeyDoubleRegistrationTest.java](../../../../sources/matevip__mateclaw/mateclaw-server/src/test/java/vip/mate/architecture/GoalStateKeyDoubleRegistrationTest.java)<br>[mateclaw-server/src/test/java/vip/mate/architecture/SkillStateKeyDoubleRegistrationTest.java](../../../../sources/matevip__mateclaw/mateclaw-server/src/test/java/vip/mate/architecture/SkillStateKeyDoubleRegistrationTest.java)<br>[mateclaw-server/src/test/java/vip/mate/architecture/StateKeyRegistrationCoverageTest.java](../../../../sources/matevip__mateclaw/mateclaw-server/src/test/java/vip/mate/architecture/StateKeyRegistrationCoverageTest.java)<br>[mateclaw-server/src/test/java/vip/mate/architecture/ToolCallbackToolContextForwardArchTest.java](../../../../sources/matevip__mateclaw/mateclaw-server/src/test/java/vip/mate/architecture/ToolCallbackToolContextForwardArchTest.java)<br>[mateclaw-server/src/main/resources/skills/design-md/SKILL.md](../../../../sources/matevip__mateclaw/mateclaw-server/src/main/resources/skills/design-md/SKILL.md)<br>[mateclaw-server/src/main/resources/skills/design-md/templates/starter.md](../../../../sources/matevip__mateclaw/mateclaw-server/src/main/resources/skills/design-md/templates/starter.md)<br>[mateclaw-server/src/main/resources/skills/claude-design/SKILL.md](../../../../sources/matevip__mateclaw/mateclaw-server/src/main/resources/skills/claude-design/SKILL.md)<br>[mateclaw-server/src/main/resources/skills/baoyu-infographic/references/layouts/winding-roadmap.md](../../../../sources/matevip__mateclaw/mateclaw-server/src/main/resources/skills/baoyu-infographic/references/layouts/winding-roadmap.md) |
| eval | 485 | [mateclaw-ui/TEST_CASES.md](../../../../sources/matevip__mateclaw/mateclaw-ui/TEST_CASES.md)<br>[mateclaw-ui/test/agentBindingSearch.test.ts](../../../../sources/matevip__mateclaw/mateclaw-ui/test/agentBindingSearch.test.ts)<br>[mateclaw-ui/src/composables/__tests__/product-cards.test.ts](../../../../sources/matevip__mateclaw/mateclaw-ui/src/composables/__tests__/product-cards.test.ts)<br>[mateclaw-ui/src/composables/__tests__/streaming-render.test.ts](../../../../sources/matevip__mateclaw/mateclaw-ui/src/composables/__tests__/streaming-render.test.ts)<br>[mateclaw-ui/src/composables/__tests__/wikilink.test.ts](../../../../sources/matevip__mateclaw/mateclaw-ui/src/composables/__tests__/wikilink.test.ts)<br>[mateclaw-server/src/test/resources/test-bundles/sample/SKILL.md](../../../../sources/matevip__mateclaw/mateclaw-server/src/test/resources/test-bundles/sample/SKILL.md)<br>[mateclaw-server/src/test/resources/test-bundles/sample/references/notes.md](../../../../sources/matevip__mateclaw/mateclaw-server/src/test/resources/test-bundles/sample/references/notes.md)<br>[mateclaw-server/src/test/resources/fixtures/llm-responses.json](../../../../sources/matevip__mateclaw/mateclaw-server/src/test/resources/fixtures/llm-responses.json) |
| security | 129 | [mateclaw-ui/src/views/Security/Layout.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Security/Layout.vue)<br>[mateclaw-ui/src/views/Security/shared.css](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Security/shared.css)<br>[mateclaw-ui/src/views/Security/Workspaces/index.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Security/Workspaces/index.vue)<br>[mateclaw-ui/src/views/Security/ToolGuard/index.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Security/ToolGuard/index.vue)<br>[mateclaw-ui/src/views/Security/Members/index.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Security/Members/index.vue)<br>[mateclaw-ui/src/views/Security/FileGuard/index.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Security/FileGuard/index.vue)<br>[mateclaw-ui/src/views/Security/composables/helpers.ts](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Security/composables/helpers.ts)<br>[mateclaw-ui/src/views/Security/AutoApproveGrants/index.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Security/AutoApproveGrants/index.vue) |
| ci | 0 | 명확하지 않음 |
| container | 3 | [docker-compose.yml](../../../../sources/matevip__mateclaw/docker-compose.yml)<br>[mateclaw-server/Dockerfile](../../../../sources/matevip__mateclaw/mateclaw-server/Dockerfile)<br>[docker/searxng/Dockerfile](../../../../sources/matevip__mateclaw/docker/searxng/Dockerfile) |
| instruction | 2 | [mateclaw-server/src/main/resources/docs/zh/agents.md](../../../../sources/matevip__mateclaw/mateclaw-server/src/main/resources/docs/zh/agents.md)<br>[mateclaw-server/src/main/resources/docs/en/agents.md](../../../../sources/matevip__mateclaw/mateclaw-server/src/main/resources/docs/en/agents.md) |
| docs | 82 | [README_zh.md](../../../../sources/matevip__mateclaw/README_zh.md)<br>[README.md](../../../../sources/matevip__mateclaw/README.md)<br>[mateclaw-ui/src/views/Docs/index.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Docs/index.vue)<br>[mateclaw-server/src/main/resources/skills/research-paper-writing/templates/README.md](../../../../sources/matevip__mateclaw/mateclaw-server/src/main/resources/skills/research-paper-writing/templates/README.md)<br>[mateclaw-server/src/main/resources/skills/research-paper-writing/templates/colm2025/README.md](../../../../sources/matevip__mateclaw/mateclaw-server/src/main/resources/skills/research-paper-writing/templates/colm2025/README.md)<br>[mateclaw-server/src/main/resources/skills/research-paper-writing/templates/acl/README.md](../../../../sources/matevip__mateclaw/mateclaw-server/src/main/resources/skills/research-paper-writing/templates/acl/README.md)<br>[mateclaw-server/src/main/resources/skills/research-paper-writing/templates/aaai2026/README.md](../../../../sources/matevip__mateclaw/mateclaw-server/src/main/resources/skills/research-paper-writing/templates/aaai2026/README.md)<br>[mateclaw-server/src/main/resources/skills/p5js/README.md](../../../../sources/matevip__mateclaw/mateclaw-server/src/main/resources/skills/p5js/README.md) |
| config | 5 | [mateclaw-webchat/package.json](../../../../sources/matevip__mateclaw/mateclaw-webchat/package.json)<br>[mateclaw-webchat/tsconfig.json](../../../../sources/matevip__mateclaw/mateclaw-webchat/tsconfig.json)<br>[mateclaw-ui/package.json](../../../../sources/matevip__mateclaw/mateclaw-ui/package.json)<br>[mateclaw-ui/tsconfig.json](../../../../sources/matevip__mateclaw/mateclaw-ui/tsconfig.json)<br>[mateclaw-server/src/main/resources/skills/research-paper-writing/templates/neurips2025/Makefile](../../../../sources/matevip__mateclaw/mateclaw-server/src/main/resources/skills/research-paper-writing/templates/neurips2025/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 485 | [mateclaw-ui/TEST_CASES.md](../../../../sources/matevip__mateclaw/mateclaw-ui/TEST_CASES.md)<br>[mateclaw-ui/test/agentBindingSearch.test.ts](../../../../sources/matevip__mateclaw/mateclaw-ui/test/agentBindingSearch.test.ts)<br>[mateclaw-ui/src/composables/__tests__/product-cards.test.ts](../../../../sources/matevip__mateclaw/mateclaw-ui/src/composables/__tests__/product-cards.test.ts)<br>[mateclaw-ui/src/composables/__tests__/streaming-render.test.ts](../../../../sources/matevip__mateclaw/mateclaw-ui/src/composables/__tests__/streaming-render.test.ts)<br>[mateclaw-ui/src/composables/__tests__/wikilink.test.ts](../../../../sources/matevip__mateclaw/mateclaw-ui/src/composables/__tests__/wikilink.test.ts)<br>[mateclaw-server/src/test/resources/test-bundles/sample/SKILL.md](../../../../sources/matevip__mateclaw/mateclaw-server/src/test/resources/test-bundles/sample/SKILL.md) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 3 | [docker-compose.yml](../../../../sources/matevip__mateclaw/docker-compose.yml)<br>[mateclaw-server/Dockerfile](../../../../sources/matevip__mateclaw/mateclaw-server/Dockerfile)<br>[docker/searxng/Dockerfile](../../../../sources/matevip__mateclaw/docker/searxng/Dockerfile) |
| 보안/정책 | 129 | [mateclaw-ui/src/views/Security/Layout.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Security/Layout.vue)<br>[mateclaw-ui/src/views/Security/shared.css](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Security/shared.css)<br>[mateclaw-ui/src/views/Security/Workspaces/index.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Security/Workspaces/index.vue)<br>[mateclaw-ui/src/views/Security/ToolGuard/index.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Security/ToolGuard/index.vue)<br>[mateclaw-ui/src/views/Security/Members/index.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Security/Members/index.vue)<br>[mateclaw-ui/src/views/Security/FileGuard/index.vue](../../../../sources/matevip__mateclaw/mateclaw-ui/src/views/Security/FileGuard/index.vue) |
| 에이전트 지시문 | 2 | [mateclaw-server/src/main/resources/docs/zh/agents.md](../../../../sources/matevip__mateclaw/mateclaw-server/src/main/resources/docs/zh/agents.md)<br>[mateclaw-server/src/main/resources/docs/en/agents.md](../../../../sources/matevip__mateclaw/mateclaw-server/src/main/resources/docs/en/agents.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `mateclaw-ui/src/views/mcp/catalog.ts`, `mateclaw-ui/src/views/mcp/icons.ts`, `mateclaw-ui/src/views/mcp/McpCard.vue`.
2. entrypoint를 따라 실행 흐름 확인: `mateclaw-webchat/src/index.ts`, `mateclaw-ui/src/App.vue`, `mateclaw-ui/src/main.ts`.
3. agent/tool runtime 매핑: `mateclaw-ui/src/views/Agents.vue`, `mateclaw-ui/src/views/Tools.vue`, `mateclaw-ui/src/views/Memory/index.vue`.
4. retrieval/memory/indexing 확인: `mateclaw-webchat/index.html`, `mateclaw-webchat/src/index.ts`, `mateclaw-ui/index.html`.
5. test/eval 파일로 동작 검증: `mateclaw-ui/TEST_CASES.md`, `mateclaw-ui/test/agentBindingSearch.test.ts`, `mateclaw-ui/src/composables/__tests__/product-cards.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 🤖 MateClaw — Your second brain with Multi Agent Orchestration, MCP Protocol, Skills & Memory, Dream, and Multi Channel . 핵심 구조 신호는 Java, pom.xml, docker-compose.yml, README.md, LICENSE, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
