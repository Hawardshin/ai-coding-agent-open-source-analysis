# nex-crm/wuphf 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

YC S26 | WUPHF is a collaborative office of AI employees who build and maintain their own knowledge base to never lose context for the tasks you give them. Supports Claude Code, Codex, OpenClaw and local LLMs via OpenCode.

## 요약

- 조사 단위: `sources/nex-crm__wuphf` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,546 files, 215 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 retrieval=DESIGN-WIKI.md, embed.go, templates_embed_test.go이고, 의존성 단서는 modelcontextprotocol, chroma, faiss, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | nex-crm/wuphf |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Go |
| Stars | 1190 |
| Forks | 86 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/nex-crm__wuphf](../../../../sources/nex-crm__wuphf) |
| 기존 보고서 | [reports/global-trending/repositories/nex-crm__wuphf.md](../../../global-trending/repositories/nex-crm__wuphf.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2546 / 215 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .cursor, .github, .windsurf, assets, bench, brand, claude-code-plugin, cmd, desktop, docs, evals, internal, landing, mcp, npm, packages, prompts, scripts, templates, testdata |
| 상위 확장자 | .go: 1220, .tsx: 545, .ts: 331, .md: 132, .sh: 54, .json: 41, .mjs: 40, .png: 33, .css: 30, .yaml: 20, .yml: 17, .txt: 15 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| web | source boundary | 143 |
| packages/protocol | packages workspace | 41 |
| cmd/wuphf | cmd workspace | 4 |
| cmd/wuphf-oc-probe | cmd workspace | 4 |
| tests | validation surface | 3 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| bench | validation surface | 1 |
| brand | top-level component | 1 |
| claude-code-plugin | top-level component | 1 |
| cmd | source boundary | 1 |
| cmd/bench-slice-1 | cmd workspace | 1 |
| cmd/eval-prompts | cmd workspace | 1 |
| cmd/office-eval | cmd workspace | 1 |
| cmd/review-bundle-handoff | cmd workspace | 1 |
| cmd/wuphf-seed | cmd workspace | 1 |
| cmd/wuphfbench | cmd workspace | 1 |
| cmd/youtube-script-packet | cmd workspace | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | chroma, faiss |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [DESIGN-WIKI.md](../../../../sources/nex-crm__wuphf/DESIGN-WIKI.md) | retrieval signal |
| retrieval | [embed.go](../../../../sources/nex-crm__wuphf/embed.go) | retrieval signal |
| retrieval | [templates_embed_test.go](../../../../sources/nex-crm__wuphf/templates_embed_test.go) | retrieval signal |
| retrieval | [templates_embed.go](../../../../sources/nex-crm__wuphf/templates_embed.go) | retrieval signal |
| entrypoints | [web/src/main.test.tsx](../../../../sources/nex-crm__wuphf/web/src/main.test.tsx) | entrypoints signal |
| entrypoints | [web/src/main.tsx](../../../../sources/nex-crm__wuphf/web/src/main.tsx) | entrypoints signal |
| entrypoints | [web/.storybook/main.ts](../../../../sources/nex-crm__wuphf/web/.storybook/main.ts) | entrypoints signal |
| entrypoints | [packages/protocol/src/index.ts](../../../../sources/nex-crm__wuphf/packages/protocol/src/index.ts) | entrypoints signal |
| docs | [README.md](../../../../sources/nex-crm__wuphf/README.md) | docs signal |
| docs | [website/apple-touch-icon.png](../../../../sources/nex-crm__wuphf/website/apple-touch-icon.png) | docs signal |
| docs | [website/CNAME](../../../../sources/nex-crm__wuphf/website/CNAME) | docs signal |
| docs | [website/download.html](../../../../sources/nex-crm__wuphf/website/download.html) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 21 | [web/src/main.test.tsx](../../../../sources/nex-crm__wuphf/web/src/main.test.tsx)<br>[web/src/main.tsx](../../../../sources/nex-crm__wuphf/web/src/main.tsx)<br>[web/.storybook/main.ts](../../../../sources/nex-crm__wuphf/web/.storybook/main.ts)<br>[packages/protocol/src/index.ts](../../../../sources/nex-crm__wuphf/packages/protocol/src/index.ts)<br>[npm/bin/wuphf.js](../../../../sources/nex-crm__wuphf/npm/bin/wuphf.js)<br>[mcp/src/server.ts](../../../../sources/nex-crm__wuphf/mcp/src/server.ts)<br>[internal/testing/mlx-stub/main.go](../../../../sources/nex-crm__wuphf/internal/testing/mlx-stub/main.go)<br>[internal/teammcp/server.go](../../../../sources/nex-crm__wuphf/internal/teammcp/server.go) |
| agentRuntime | 163 | [web/src/styles/agents.css](../../../../sources/nex-crm__wuphf/web/src/styles/agents.css)<br>[web/src/hooks/useAgentEventPeek.test.ts](../../../../sources/nex-crm__wuphf/web/src/hooks/useAgentEventPeek.test.ts)<br>[web/src/hooks/useAgentEventPeek.ts](../../../../sources/nex-crm__wuphf/web/src/hooks/useAgentEventPeek.ts)<br>[web/src/hooks/useAgentStream.test.ts](../../../../sources/nex-crm__wuphf/web/src/hooks/useAgentStream.test.ts)<br>[web/src/hooks/useAgentStream.ts](../../../../sources/nex-crm__wuphf/web/src/hooks/useAgentStream.ts)<br>[web/src/hooks/useBrokerEvents.test.tsx](../../../../sources/nex-crm__wuphf/web/src/hooks/useBrokerEvents.test.tsx)<br>[web/src/hooks/useBrokerEvents.ts](../../../../sources/nex-crm__wuphf/web/src/hooks/useBrokerEvents.ts)<br>[web/src/hooks/useChannels.ts](../../../../sources/nex-crm__wuphf/web/src/hooks/useChannels.ts) |
| mcp | 7 | [mcp/src/server.ts](../../../../sources/nex-crm__wuphf/mcp/src/server.ts)<br>[mcp/src/tools/skill-sync.ts](../../../../sources/nex-crm__wuphf/mcp/src/tools/skill-sync.ts)<br>[mcp/src/tools/skills.ts](../../../../sources/nex-crm__wuphf/mcp/src/tools/skills.ts)<br>[internal/team/headless_openai_compat_mcp_test.go](../../../../sources/nex-crm__wuphf/internal/team/headless_openai_compat_mcp_test.go)<br>[internal/team/headless_openai_compat_mcp.go](../../../../sources/nex-crm__wuphf/internal/team/headless_openai_compat_mcp.go)<br>[internal/team/headless_opencode_mcp.go](../../../../sources/nex-crm__wuphf/internal/team/headless_opencode_mcp.go)<br>[internal/team/mcp_config.go](../../../../sources/nex-crm__wuphf/internal/team/mcp_config.go) |
| retrieval | 396 | [DESIGN-WIKI.md](../../../../sources/nex-crm__wuphf/DESIGN-WIKI.md)<br>[embed.go](../../../../sources/nex-crm__wuphf/embed.go)<br>[templates_embed_test.go](../../../../sources/nex-crm__wuphf/templates_embed_test.go)<br>[templates_embed.go](../../../../sources/nex-crm__wuphf/templates_embed.go)<br>[TESTING-WIKI.md](../../../../sources/nex-crm__wuphf/TESTING-WIKI.md)<br>[website/index.html](../../../../sources/nex-crm__wuphf/website/index.html)<br>[web/index.html](../../../../sources/nex-crm__wuphf/web/index.html)<br>[web/src/styles/wiki-shell.css](../../../../sources/nex-crm__wuphf/web/src/styles/wiki-shell.css) |
| spec | 55 | [ARCHITECTURE.md](../../../../sources/nex-crm__wuphf/ARCHITECTURE.md)<br>[DESIGN-NOTEBOOK.md](../../../../sources/nex-crm__wuphf/DESIGN-NOTEBOOK.md)<br>[DESIGN-WIKI.md](../../../../sources/nex-crm__wuphf/DESIGN-WIKI.md)<br>[DESIGN.md](../../../../sources/nex-crm__wuphf/DESIGN.md)<br>[web/DESIGN.md](../../../../sources/nex-crm__wuphf/web/DESIGN.md)<br>[web/e2e/tests/app-routes.spec.ts](../../../../sources/nex-crm__wuphf/web/e2e/tests/app-routes.spec.ts)<br>[web/e2e/tests/chat.spec.ts](../../../../sources/nex-crm__wuphf/web/e2e/tests/chat.spec.ts)<br>[web/e2e/tests/interview.spec.ts](../../../../sources/nex-crm__wuphf/web/e2e/tests/interview.spec.ts) |
| eval | 849 | [templates_embed_test.go](../../../../sources/nex-crm__wuphf/templates_embed_test.go)<br>[web/tests/setup.ts](../../../../sources/nex-crm__wuphf/web/tests/setup.ts)<br>[web/tests/fixtures/wikilinks.json](../../../../sources/nex-crm__wuphf/web/tests/fixtures/wikilinks.json)<br>[web/src/main.test.tsx](../../../../sources/nex-crm__wuphf/web/src/main.test.tsx)<br>[web/src/stores/app.test.ts](../../../../sources/nex-crm__wuphf/web/src/stores/app.test.ts)<br>[web/src/routes/RootRoute.test.tsx](../../../../sources/nex-crm__wuphf/web/src/routes/RootRoute.test.tsx)<br>[web/src/routes/routeRegistry.test.ts](../../../../sources/nex-crm__wuphf/web/src/routes/routeRegistry.test.ts)<br>[web/src/routes/useCurrentRoute.test.ts](../../../../sources/nex-crm__wuphf/web/src/routes/useCurrentRoute.test.ts) |
| security | 25 | [web/src/api/audit.ts](../../../../sources/nex-crm__wuphf/web/src/api/audit.ts)<br>[web/e2e/screenshots/integrations-composio-audit.mjs](../../../../sources/nex-crm__wuphf/web/e2e/screenshots/integrations-composio-audit.mjs)<br>[packages/protocol/tests/audit-event.spec.ts](../../../../sources/nex-crm__wuphf/packages/protocol/tests/audit-event.spec.ts)<br>[packages/protocol/testdata/audit-event-vectors.json](../../../../sources/nex-crm__wuphf/packages/protocol/testdata/audit-event-vectors.json)<br>[packages/protocol/src/audit-event.ts](../../../../sources/nex-crm__wuphf/packages/protocol/src/audit-event.ts)<br>[packages/protocol/docs/modules/audit-event.md](../../../../sources/nex-crm__wuphf/packages/protocol/docs/modules/audit-event.md)<br>[internal/teammcp/actions_audit.go](../../../../sources/nex-crm__wuphf/internal/teammcp/actions_audit.go)<br>[internal/teammcp/policy_tools.go](../../../../sources/nex-crm__wuphf/internal/teammcp/policy_tools.go) |
| ci | 13 | [.github/workflows/approve-on-comment.yml](../../../../sources/nex-crm__wuphf/.github/workflows/approve-on-comment.yml)<br>[.github/workflows/auto-release.yml](../../../../sources/nex-crm__wuphf/.github/workflows/auto-release.yml)<br>[.github/workflows/ci.yml](../../../../sources/nex-crm__wuphf/.github/workflows/ci.yml)<br>[.github/workflows/commitlint.yml](../../../../sources/nex-crm__wuphf/.github/workflows/commitlint.yml)<br>[.github/workflows/desktop-build-check.yml](../../../../sources/nex-crm__wuphf/.github/workflows/desktop-build-check.yml)<br>[.github/workflows/desktop-release.yml](../../../../sources/nex-crm__wuphf/.github/workflows/desktop-release.yml)<br>[.github/workflows/desktop-webview-probe.yml](../../../../sources/nex-crm__wuphf/.github/workflows/desktop-webview-probe.yml)<br>[.github/workflows/docs-link-check.yml](../../../../sources/nex-crm__wuphf/.github/workflows/docs-link-check.yml) |
| container | 1 | [desktop/oswails/derisk-linux/Dockerfile](../../../../sources/nex-crm__wuphf/desktop/oswails/derisk-linux/Dockerfile) |
| instruction | 2 | [packages/protocol/AGENTS.md](../../../../sources/nex-crm__wuphf/packages/protocol/AGENTS.md)<br>[.cursor/rules/nex.md](../../../../sources/nex-crm__wuphf/.cursor/rules/nex.md) |
| docs | 119 | [README.md](../../../../sources/nex-crm__wuphf/README.md)<br>[website/apple-touch-icon.png](../../../../sources/nex-crm__wuphf/website/apple-touch-icon.png)<br>[website/CNAME](../../../../sources/nex-crm__wuphf/website/CNAME)<br>[website/download.html](../../../../sources/nex-crm__wuphf/website/download.html)<br>[website/favicon-32.png](../../../../sources/nex-crm__wuphf/website/favicon-32.png)<br>[website/favicon.svg](../../../../sources/nex-crm__wuphf/website/favicon.svg)<br>[website/hn-badge.svg](../../../../sources/nex-crm__wuphf/website/hn-badge.svg)<br>[website/index.html](../../../../sources/nex-crm__wuphf/website/index.html) |
| config | 8 | [go.mod](../../../../sources/nex-crm__wuphf/go.mod)<br>[package.json](../../../../sources/nex-crm__wuphf/package.json)<br>[web/package.json](../../../../sources/nex-crm__wuphf/web/package.json)<br>[web/tsconfig.json](../../../../sources/nex-crm__wuphf/web/tsconfig.json)<br>[web/e2e/package.json](../../../../sources/nex-crm__wuphf/web/e2e/package.json)<br>[packages/protocol/package.json](../../../../sources/nex-crm__wuphf/packages/protocol/package.json)<br>[packages/protocol/tsconfig.json](../../../../sources/nex-crm__wuphf/packages/protocol/tsconfig.json)<br>[npm/package.json](../../../../sources/nex-crm__wuphf/npm/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 849 | [templates_embed_test.go](../../../../sources/nex-crm__wuphf/templates_embed_test.go)<br>[web/tests/setup.ts](../../../../sources/nex-crm__wuphf/web/tests/setup.ts)<br>[web/tests/fixtures/wikilinks.json](../../../../sources/nex-crm__wuphf/web/tests/fixtures/wikilinks.json)<br>[web/src/main.test.tsx](../../../../sources/nex-crm__wuphf/web/src/main.test.tsx)<br>[web/src/stores/app.test.ts](../../../../sources/nex-crm__wuphf/web/src/stores/app.test.ts)<br>[web/src/routes/RootRoute.test.tsx](../../../../sources/nex-crm__wuphf/web/src/routes/RootRoute.test.tsx) |
| CI workflow | 13 | [.github/workflows/approve-on-comment.yml](../../../../sources/nex-crm__wuphf/.github/workflows/approve-on-comment.yml)<br>[.github/workflows/auto-release.yml](../../../../sources/nex-crm__wuphf/.github/workflows/auto-release.yml)<br>[.github/workflows/ci.yml](../../../../sources/nex-crm__wuphf/.github/workflows/ci.yml)<br>[.github/workflows/commitlint.yml](../../../../sources/nex-crm__wuphf/.github/workflows/commitlint.yml)<br>[.github/workflows/desktop-build-check.yml](../../../../sources/nex-crm__wuphf/.github/workflows/desktop-build-check.yml)<br>[.github/workflows/desktop-release.yml](../../../../sources/nex-crm__wuphf/.github/workflows/desktop-release.yml) |
| 컨테이너/배포 | 1 | [desktop/oswails/derisk-linux/Dockerfile](../../../../sources/nex-crm__wuphf/desktop/oswails/derisk-linux/Dockerfile) |
| 보안/정책 | 25 | [web/src/api/audit.ts](../../../../sources/nex-crm__wuphf/web/src/api/audit.ts)<br>[web/e2e/screenshots/integrations-composio-audit.mjs](../../../../sources/nex-crm__wuphf/web/e2e/screenshots/integrations-composio-audit.mjs)<br>[packages/protocol/tests/audit-event.spec.ts](../../../../sources/nex-crm__wuphf/packages/protocol/tests/audit-event.spec.ts)<br>[packages/protocol/testdata/audit-event-vectors.json](../../../../sources/nex-crm__wuphf/packages/protocol/testdata/audit-event-vectors.json)<br>[packages/protocol/src/audit-event.ts](../../../../sources/nex-crm__wuphf/packages/protocol/src/audit-event.ts)<br>[packages/protocol/docs/modules/audit-event.md](../../../../sources/nex-crm__wuphf/packages/protocol/docs/modules/audit-event.md) |
| 에이전트 지시문 | 2 | [packages/protocol/AGENTS.md](../../../../sources/nex-crm__wuphf/packages/protocol/AGENTS.md)<br>[.cursor/rules/nex.md](../../../../sources/nex-crm__wuphf/.cursor/rules/nex.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `DESIGN-WIKI.md`, `embed.go`, `templates_embed_test.go`.
2. entrypoint를 따라 실행 흐름 확인: `web/src/main.test.tsx`, `web/src/main.tsx`, `web/.storybook/main.ts`.
3. agent/tool runtime 매핑: `web/src/styles/agents.css`, `web/src/hooks/useAgentEventPeek.test.ts`, `web/src/hooks/useAgentEventPeek.ts`.
4. retrieval/memory/indexing 확인: `DESIGN-WIKI.md`, `embed.go`, `templates_embed_test.go`.
5. test/eval 파일로 동작 검증: `templates_embed_test.go`, `web/tests/setup.ts`, `web/tests/fixtures/wikilinks.json`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 YC S26 WUPHF is a collaborative office of AI employees who build and maintain their own knowledge base to never lose con. 핵심 구조 신호는 Go, package.json, go.mod, README.md, LICENSE, modelcontextprotocol이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
