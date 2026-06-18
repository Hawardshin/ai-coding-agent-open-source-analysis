# PurpleDoubleD/locally-uncensored 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Local AI desktop app — chat, agent mode, image gen, video gen. Supports Ollama, Gemma 4, Llama, Qwen, OpenAI, Anthropic. Single .exe, no Docker.

## 요약

- 조사 단위: `sources/PurpleDoubleD__locally-uncensored` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 549 files, 56 directories, depth score 108, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src-tauri/src/main.rs, src/App.tsx, src/index.css이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | PurpleDoubleD/locally-uncensored |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | TypeScript |
| Stars | 720 |
| Forks | 101 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/PurpleDoubleD__locally-uncensored](../../../../sources/PurpleDoubleD__locally-uncensored) |
| 기존 보고서 | [reports/global-trending/repositories/PurpleDoubleD__locally-uncensored.md](../../../global-trending/repositories/PurpleDoubleD__locally-uncensored.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 549 / 56 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, docs, logos, public, scripts, src, src-tauri |
| 상위 확장자 | .ts: 294, .tsx: 97, .png: 34, .html: 31, .rs: 23, .json: 12, .md: 7, .yml: 7, .mjs: 6, .svg: 6, .txt: 5, (none): 5 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 105 |
| docs | documentation surface | 45 |
| .github | ci surface | 1 |
| logos | top-level component | 1 |
| public | top-level component | 1 |
| scripts | top-level component | 1 |
| src-tauri | source boundary | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | vite |
| serve-dev | package.json | build | vite build |
| quality | package.json | lint | eslint . |
| serve-dev | package.json | preview | vite preview |
| utility | package.json | tauri | tauri |
| serve-dev | package.json | tauri:dev | tauri dev |
| build | package.json | tauri:build | tauri build |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | react |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [src-tauri/src/main.rs](../../../../sources/PurpleDoubleD__locally-uncensored/src-tauri/src/main.rs) | entrypoints signal |
| entrypoints | [src/App.tsx](../../../../sources/PurpleDoubleD__locally-uncensored/src/App.tsx) | entrypoints signal |
| entrypoints | [src/index.css](../../../../sources/PurpleDoubleD__locally-uncensored/src/index.css) | entrypoints signal |
| entrypoints | [src/main.tsx](../../../../sources/PurpleDoubleD__locally-uncensored/src/main.tsx) | entrypoints signal |
| config | [package.json](../../../../sources/PurpleDoubleD__locally-uncensored/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/PurpleDoubleD__locally-uncensored/tsconfig.json) | config signal |
| config | [src-tauri/Cargo.lock](../../../../sources/PurpleDoubleD__locally-uncensored/src-tauri/Cargo.lock) | config signal |
| config | [src-tauri/Cargo.toml](../../../../sources/PurpleDoubleD__locally-uncensored/src-tauri/Cargo.toml) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/PurpleDoubleD__locally-uncensored/.github/workflows/ci.yml) | ci signal |
| ci | [.github/workflows/discord-announce.yml](../../../../sources/PurpleDoubleD__locally-uncensored/.github/workflows/discord-announce.yml) | ci signal |
| ci | [.github/workflows/release.yml](../../../../sources/PurpleDoubleD__locally-uncensored/.github/workflows/release.yml) | ci signal |
| eval | [src/types/__tests__/message-types.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/types/__tests__/message-types.test.ts) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [src-tauri/src/main.rs](../../../../sources/PurpleDoubleD__locally-uncensored/src-tauri/src/main.rs)<br>[src/App.tsx](../../../../sources/PurpleDoubleD__locally-uncensored/src/App.tsx)<br>[src/index.css](../../../../sources/PurpleDoubleD__locally-uncensored/src/index.css)<br>[src/main.tsx](../../../../sources/PurpleDoubleD__locally-uncensored/src/main.tsx) |
| agentRuntime | 107 | [src-tauri/src/commands/agent.rs](../../../../sources/PurpleDoubleD__locally-uncensored/src-tauri/src/commands/agent.rs)<br>[src/types/agent-mode.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/types/agent-mode.ts)<br>[src/types/agent-workflows.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/types/agent-workflows.ts)<br>[src/types/agent-workspace.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/types/agent-workspace.ts)<br>[src/types/agents.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/types/agents.ts)<br>[src/stores/__tests__/memory-tool-result-filter.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/stores/__tests__/memory-tool-result-filter.test.ts)<br>[src/lib/agent-commands.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/lib/agent-commands.ts)<br>[src/lib/agent-strategy.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/lib/agent-strategy.ts) |
| mcp | 8 | [src/api/tool-registry.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/api/tool-registry.ts)<br>[src/api/mcp/builtin-tools.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/api/mcp/builtin-tools.ts)<br>[src/api/mcp/external-client.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/api/mcp/external-client.ts)<br>[src/api/mcp/index.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/api/mcp/index.ts)<br>[src/api/mcp/tool-registry.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/api/mcp/tool-registry.ts)<br>[src/api/mcp/types.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/api/mcp/types.ts)<br>[src/api/mcp/__tests__/tool-registry-external.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/api/mcp/__tests__/tool-registry-external.test.ts)<br>[src/api/__tests__/tool-registry.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/api/__tests__/tool-registry.test.ts) |
| retrieval | 20 | [index.html](../../../../sources/PurpleDoubleD__locally-uncensored/index.html)<br>[src/index.css](../../../../sources/PurpleDoubleD__locally-uncensored/src/index.css)<br>[src/types/rag.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/types/rag.ts)<br>[src/stores/__tests__/memory-tool-result-filter.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/stores/__tests__/memory-tool-result-filter.test.ts)<br>[src/lib/memory-extraction.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/lib/memory-extraction.ts)<br>[src/lib/memory-retrieval.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/lib/memory-retrieval.ts)<br>[src/lib/__tests__/memory-e2e.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/lib/__tests__/memory-e2e.test.ts)<br>[src/lib/__tests__/memory-extraction.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/lib/__tests__/memory-extraction.test.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 147 | [src/types/__tests__/message-types.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/types/__tests__/message-types.test.ts)<br>[src/stores/__tests__/agentStore.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/stores/__tests__/agentStore.test.ts)<br>[src/stores/__tests__/agentWorkflowStore.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/stores/__tests__/agentWorkflowStore.test.ts)<br>[src/stores/__tests__/benchmarkStore.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/stores/__tests__/benchmarkStore.test.ts)<br>[src/stores/__tests__/chatStore-migration.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/stores/__tests__/chatStore-migration.test.ts)<br>[src/stores/__tests__/chatStore-operations.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/stores/__tests__/chatStore-operations.test.ts)<br>[src/stores/__tests__/cloudTeaserStore.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/stores/__tests__/cloudTeaserStore.test.ts)<br>[src/stores/__tests__/compareStore.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/stores/__tests__/compareStore.test.ts) |
| security | 1 | [SECURITY.md](../../../../sources/PurpleDoubleD__locally-uncensored/SECURITY.md) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/PurpleDoubleD__locally-uncensored/.github/workflows/ci.yml)<br>[.github/workflows/discord-announce.yml](../../../../sources/PurpleDoubleD__locally-uncensored/.github/workflows/discord-announce.yml)<br>[.github/workflows/release.yml](../../../../sources/PurpleDoubleD__locally-uncensored/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 62 | [README.md](../../../../sources/PurpleDoubleD__locally-uncensored/README.md)<br>[docs/404.html](../../../../sources/PurpleDoubleD__locally-uncensored/docs/404.html)<br>[docs/64c8084e74dd0e16c6152f82363537ad.txt](../../../../sources/PurpleDoubleD__locally-uncensored/docs/64c8084e74dd0e16c6152f82363537ad.txt)<br>[docs/CNAME](../../../../sources/PurpleDoubleD__locally-uncensored/docs/CNAME)<br>[docs/demo.gif](../../../../sources/PurpleDoubleD__locally-uncensored/docs/demo.gif)<br>[docs/favicon.png](../../../../sources/PurpleDoubleD__locally-uncensored/docs/favicon.png)<br>[docs/favicon.svg](../../../../sources/PurpleDoubleD__locally-uncensored/docs/favicon.svg)<br>[docs/index.html](../../../../sources/PurpleDoubleD__locally-uncensored/docs/index.html) |
| config | 4 | [package.json](../../../../sources/PurpleDoubleD__locally-uncensored/package.json)<br>[tsconfig.json](../../../../sources/PurpleDoubleD__locally-uncensored/tsconfig.json)<br>[src-tauri/Cargo.lock](../../../../sources/PurpleDoubleD__locally-uncensored/src-tauri/Cargo.lock)<br>[src-tauri/Cargo.toml](../../../../sources/PurpleDoubleD__locally-uncensored/src-tauri/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 147 | [src/types/__tests__/message-types.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/types/__tests__/message-types.test.ts)<br>[src/stores/__tests__/agentStore.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/stores/__tests__/agentStore.test.ts)<br>[src/stores/__tests__/agentWorkflowStore.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/stores/__tests__/agentWorkflowStore.test.ts)<br>[src/stores/__tests__/benchmarkStore.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/stores/__tests__/benchmarkStore.test.ts)<br>[src/stores/__tests__/chatStore-migration.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/stores/__tests__/chatStore-migration.test.ts)<br>[src/stores/__tests__/chatStore-operations.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/stores/__tests__/chatStore-operations.test.ts) |
| CI workflow | 3 | [.github/workflows/ci.yml](../../../../sources/PurpleDoubleD__locally-uncensored/.github/workflows/ci.yml)<br>[.github/workflows/discord-announce.yml](../../../../sources/PurpleDoubleD__locally-uncensored/.github/workflows/discord-announce.yml)<br>[.github/workflows/release.yml](../../../../sources/PurpleDoubleD__locally-uncensored/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [SECURITY.md](../../../../sources/PurpleDoubleD__locally-uncensored/SECURITY.md) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src-tauri/src/main.rs`, `src/App.tsx`, `src/index.css`.
2. entrypoint를 따라 실행 흐름 확인: `src-tauri/src/main.rs`, `src/App.tsx`, `src/index.css`.
3. agent/tool runtime 매핑: `src-tauri/src/commands/agent.rs`, `src/types/agent-mode.ts`, `src/types/agent-workflows.ts`.
4. retrieval/memory/indexing 확인: `index.html`, `src/index.css`, `src/types/rag.ts`.
5. test/eval 파일로 동작 검증: `src/types/__tests__/message-types.test.ts`, `src/stores/__tests__/agentStore.test.ts`, `src/stores/__tests__/agentWorkflowStore.test.ts`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 Local AI desktop app — chat, agent mode, image gen, video gen. Supports Ollama, Gemma 4, Llama, Qwen, OpenAI, Anthropic.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, react, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
