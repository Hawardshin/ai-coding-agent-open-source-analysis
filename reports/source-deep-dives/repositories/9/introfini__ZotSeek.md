# introfini/ZotSeek 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

AI semantic search for Zotero, with a built-in MCP server for AI agents (Claude Code, Codex). Find papers by meaning. 100% local and private.

## 요약

- 조사 단위: `sources/introfini__ZotSeek` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 96 files, 23 directories, depth score 82, key references 9개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=src/server/mcp-endpoint.ts, src/dev/suites/mcp-server.ts, docs/MCP.md이고, 의존성 단서는 transformers, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | introfini/ZotSeek |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 128 |
| Forks | 8 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/introfini__ZotSeek](../../../../sources/introfini__ZotSeek) |
| 기존 보고서 | [reports/global-trending/repositories/introfini__ZotSeek.md](../../../global-trending/repositories/introfini__ZotSeek.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 96 / 23 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | content, docs, locale, scripts, skin, src |
| 상위 확장자 | .ts: 45, .png: 9, .json: 8, .md: 7, .xhtml: 6, .dtd: 4, .ftl: 4, .js: 4, (none): 3, .css: 2, .mjs: 1, .onnx: 1 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 18 |
| src | source boundary | 10 |
| content | top-level component | 1 |
| locale | top-level component | 1 |
| scripts | top-level component | 1 |
| skin | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | node scripts/build.js |
| serve-dev | package.json | build:dev | node scripts/build.js --dev |
| serve-dev | package.json | watch | node scripts/build.js --watch |
| serve-dev | package.json | start | npm run build && npm run start:zotero |
| serve-dev | package.json | start:zotero | open -a Zotero --args -purgecaches -ZoteroDebugText -jsconsole |
| build | package.json | release | node scripts/release.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | transformers |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [src/server/mcp-endpoint.ts](../../../../sources/introfini__ZotSeek/src/server/mcp-endpoint.ts) | mcp signal |
| mcp | [src/dev/suites/mcp-server.ts](../../../../sources/introfini__ZotSeek/src/dev/suites/mcp-server.ts) | mcp signal |
| mcp | [docs/MCP.md](../../../../sources/introfini__ZotSeek/docs/MCP.md) | mcp signal |
| agentRuntime | [docs/images/context-menu-pdf-find-similar.png](../../../../sources/introfini__ZotSeek/docs/images/context-menu-pdf-find-similar.png) | agentRuntime signal |
| agentRuntime | [docs/images/context-menu.png](../../../../sources/introfini__ZotSeek/docs/images/context-menu.png) | agentRuntime signal |
| entrypoints | [src/index.ts](../../../../sources/introfini__ZotSeek/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/introfini__ZotSeek/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/introfini__ZotSeek/tsconfig.json) | config signal |
| eval | [src/dev/self-test.ts](../../../../sources/introfini__ZotSeek/src/dev/self-test.ts) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.ts](../../../../sources/introfini__ZotSeek/src/index.ts) |
| agentRuntime | 2 | [docs/images/context-menu-pdf-find-similar.png](../../../../sources/introfini__ZotSeek/docs/images/context-menu-pdf-find-similar.png)<br>[docs/images/context-menu.png](../../../../sources/introfini__ZotSeek/docs/images/context-menu.png) |
| mcp | 3 | [src/server/mcp-endpoint.ts](../../../../sources/introfini__ZotSeek/src/server/mcp-endpoint.ts)<br>[src/dev/suites/mcp-server.ts](../../../../sources/introfini__ZotSeek/src/dev/suites/mcp-server.ts)<br>[docs/MCP.md](../../../../sources/introfini__ZotSeek/docs/MCP.md) |
| retrieval | 9 | [src/index.ts](../../../../sources/introfini__ZotSeek/src/index.ts)<br>[src/worker/embedding-worker.ts](../../../../sources/introfini__ZotSeek/src/worker/embedding-worker.ts)<br>[src/core/auto-index-manager.ts](../../../../sources/introfini__ZotSeek/src/core/auto-index-manager.ts)<br>[src/core/embedding-pipeline.ts](../../../../sources/introfini__ZotSeek/src/core/embedding-pipeline.ts)<br>[src/core/vector-store-sqlite.ts](../../../../sources/introfini__ZotSeek/src/core/vector-store-sqlite.ts)<br>[content/models/Xenova/nomic-embed-text-v1.5/config.json](../../../../sources/introfini__ZotSeek/content/models/Xenova/nomic-embed-text-v1.5/config.json)<br>[content/models/Xenova/nomic-embed-text-v1.5/tokenizer_config.json](../../../../sources/introfini__ZotSeek/content/models/Xenova/nomic-embed-text-v1.5/tokenizer_config.json)<br>[content/models/Xenova/nomic-embed-text-v1.5/tokenizer.json](../../../../sources/introfini__ZotSeek/content/models/Xenova/nomic-embed-text-v1.5/tokenizer.json) |
| spec | 2 | [docs/ROADMAP.md](../../../../sources/introfini__ZotSeek/docs/ROADMAP.md)<br>[docs/SEARCH_ARCHITECTURE.md](../../../../sources/introfini__ZotSeek/docs/SEARCH_ARCHITECTURE.md) |
| eval | 1 | [src/dev/self-test.ts](../../../../sources/introfini__ZotSeek/src/dev/self-test.ts) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 13 | [README.md](../../../../sources/introfini__ZotSeek/README.md)<br>[docs/API.md](../../../../sources/introfini__ZotSeek/docs/API.md)<br>[docs/DEVELOPMENT.md](../../../../sources/introfini__ZotSeek/docs/DEVELOPMENT.md)<br>[docs/MCP.md](../../../../sources/introfini__ZotSeek/docs/MCP.md)<br>[docs/ROADMAP.md](../../../../sources/introfini__ZotSeek/docs/ROADMAP.md)<br>[docs/SEARCH_ARCHITECTURE.md](../../../../sources/introfini__ZotSeek/docs/SEARCH_ARCHITECTURE.md)<br>[docs/images/context-menu-pdf-find-similar.png](../../../../sources/introfini__ZotSeek/docs/images/context-menu-pdf-find-similar.png)<br>[docs/images/context-menu.png](../../../../sources/introfini__ZotSeek/docs/images/context-menu.png) |
| config | 2 | [package.json](../../../../sources/introfini__ZotSeek/package.json)<br>[tsconfig.json](../../../../sources/introfini__ZotSeek/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1 | [src/dev/self-test.ts](../../../../sources/introfini__ZotSeek/src/dev/self-test.ts) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/server/mcp-endpoint.ts`, `src/dev/suites/mcp-server.ts`, `docs/MCP.md`.
2. entrypoint를 따라 실행 흐름 확인: `src/index.ts`.
3. agent/tool runtime 매핑: `docs/images/context-menu-pdf-find-similar.png`, `docs/images/context-menu.png`.
4. retrieval/memory/indexing 확인: `src/index.ts`, `src/worker/embedding-worker.ts`, `src/core/auto-index-manager.ts`.
5. test/eval 파일로 동작 검증: `src/dev/self-test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 AI semantic search for Zotero, with a built in MCP server for AI agents Claude Code, Codex . Find papers by meaning. 100. 핵심 구조 신호는 TypeScript, package.json, README.md, transformers, docs, spec-artifacts이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
