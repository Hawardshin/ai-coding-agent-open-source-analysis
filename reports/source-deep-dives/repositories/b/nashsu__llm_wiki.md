# nashsu/llm_wiki 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

LLM Wiki is a cross-platform desktop application that turns your documents into an organized, interlinked knowledge base — automatically. Instead of traditional RAG (retrieve-and-answer from scratch every time), the LLM incrementally builds and maintains a persistent wiki from your sources。

## 요약

- 조사 단위: `sources/nashsu__llm_wiki` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 374 files, 39 directories, depth score 107, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=index.html, llm-wiki.md, src-tauri/src/types/wiki.rs이고, 의존성 단서는 next, react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | nashsu/llm_wiki |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | TypeScript |
| Stars | 11795 |
| Forks | 1434 |
| License | NOASSERTION |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/nashsu__llm_wiki](../../../../sources/nashsu__llm_wiki) |
| 기존 보고서 | [reports/global-trending/repositories/nashsu__llm_wiki.md](../../../global-trending/repositories/nashsu__llm_wiki.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 374 / 39 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, assets, extension, mcp-server, plans, scripts, src, src-tauri |
| 상위 확장자 | .ts: 236, .tsx: 55, .rs: 20, .json: 18, .jpg: 11, .md: 7, .png: 7, .js: 3, .html: 2, .so: 2, .yml: 2, (none): 2 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 84 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| extension | top-level component | 1 |
| mcp-server | source boundary | 1 |
| plans | top-level component | 1 |
| scripts | top-level component | 1 |
| src-tauri | source boundary | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | vite |
| build | package.json | typecheck | tsc --build --pretty |
| serve-dev | package.json | build | npm run typecheck && vite build |
| serve-dev | package.json | preview | vite preview |
| test | package.json | test | npm run test:mocks && npm run test:llm |
| test | package.json | test:mocks | vitest run --exclude='**/*.real-llm.test.ts' --exclude='**/mcp-server/**' |
| test | package.json | test:llm | vitest run real-llm --no-file-parallelism --reporter=verbose |
| serve-dev | package.json | mcp:build | npm --prefix mcp-server run build |
| test | package.json | mcp:test | npm --prefix mcp-server test |
| utility | package.json | tauri | tauri |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | next, react |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [index.html](../../../../sources/nashsu__llm_wiki/index.html) | retrieval signal |
| retrieval | [llm-wiki.md](../../../../sources/nashsu__llm_wiki/llm-wiki.md) | retrieval signal |
| retrieval | [src-tauri/src/types/wiki.rs](../../../../sources/nashsu__llm_wiki/src-tauri/src/types/wiki.rs) | retrieval signal |
| retrieval | [src/index.css](../../../../sources/nashsu__llm_wiki/src/index.css) | retrieval signal |
| entrypoints | [src-tauri/src/main.rs](../../../../sources/nashsu__llm_wiki/src-tauri/src/main.rs) | entrypoints signal |
| entrypoints | [src/App.tsx](../../../../sources/nashsu__llm_wiki/src/App.tsx) | entrypoints signal |
| entrypoints | [src/main.tsx](../../../../sources/nashsu__llm_wiki/src/main.tsx) | entrypoints signal |
| docs | [README_CN.md](../../../../sources/nashsu__llm_wiki/README_CN.md) | docs signal |
| docs | [README_JA.md](../../../../sources/nashsu__llm_wiki/README_JA.md) | docs signal |
| docs | [README_KO.md](../../../../sources/nashsu__llm_wiki/README_KO.md) | docs signal |
| docs | [README.md](../../../../sources/nashsu__llm_wiki/README.md) | docs signal |
| eval | [src/test-helpers/deferred.ts](../../../../sources/nashsu__llm_wiki/src/test-helpers/deferred.ts) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 5 | [src-tauri/src/main.rs](../../../../sources/nashsu__llm_wiki/src-tauri/src/main.rs)<br>[src/App.tsx](../../../../sources/nashsu__llm_wiki/src/App.tsx)<br>[src/index.css](../../../../sources/nashsu__llm_wiki/src/index.css)<br>[src/main.tsx](../../../../sources/nashsu__llm_wiki/src/main.tsx)<br>[mcp-server/src/index.ts](../../../../sources/nashsu__llm_wiki/mcp-server/src/index.ts) |
| agentRuntime | 3 | [src/lib/context-budget.test.ts](../../../../sources/nashsu__llm_wiki/src/lib/context-budget.test.ts)<br>[src/lib/context-budget.ts](../../../../sources/nashsu__llm_wiki/src/lib/context-budget.ts)<br>[src/components/settings/context-size-selector.tsx](../../../../sources/nashsu__llm_wiki/src/components/settings/context-size-selector.tsx) |
| mcp | 9 | [mcp-server/package-lock.json](../../../../sources/nashsu__llm_wiki/mcp-server/package-lock.json)<br>[mcp-server/package.json](../../../../sources/nashsu__llm_wiki/mcp-server/package.json)<br>[mcp-server/README.md](../../../../sources/nashsu__llm_wiki/mcp-server/README.md)<br>[mcp-server/tsconfig.json](../../../../sources/nashsu__llm_wiki/mcp-server/tsconfig.json)<br>[mcp-server/test/api-client.test.ts](../../../../sources/nashsu__llm_wiki/mcp-server/test/api-client.test.ts)<br>[mcp-server/test/version.test.ts](../../../../sources/nashsu__llm_wiki/mcp-server/test/version.test.ts)<br>[mcp-server/src/api-client.ts](../../../../sources/nashsu__llm_wiki/mcp-server/src/api-client.ts)<br>[mcp-server/src/index.ts](../../../../sources/nashsu__llm_wiki/mcp-server/src/index.ts) |
| retrieval | 59 | [index.html](../../../../sources/nashsu__llm_wiki/index.html)<br>[llm-wiki.md](../../../../sources/nashsu__llm_wiki/llm-wiki.md)<br>[src-tauri/src/types/wiki.rs](../../../../sources/nashsu__llm_wiki/src-tauri/src/types/wiki.rs)<br>[src/index.css](../../../../sources/nashsu__llm_wiki/src/index.css)<br>[src/types/wiki.ts](../../../../sources/nashsu__llm_wiki/src/types/wiki.ts)<br>[src/test-helpers/scenarios/ingest-scenarios.ts](../../../../sources/nashsu__llm_wiki/src/test-helpers/scenarios/ingest-scenarios.ts)<br>[src/stores/wiki-store.test.ts](../../../../sources/nashsu__llm_wiki/src/stores/wiki-store.test.ts)<br>[src/stores/wiki-store.ts](../../../../sources/nashsu__llm_wiki/src/stores/wiki-store.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 127 | [src/test-helpers/deferred.ts](../../../../sources/nashsu__llm_wiki/src/test-helpers/deferred.ts)<br>[src/test-helpers/fs-temp.ts](../../../../sources/nashsu__llm_wiki/src/test-helpers/fs-temp.ts)<br>[src/test-helpers/load-test-env.ts](../../../../sources/nashsu__llm_wiki/src/test-helpers/load-test-env.ts)<br>[src/test-helpers/mock-stream-chat.ts](../../../../sources/nashsu__llm_wiki/src/test-helpers/mock-stream-chat.ts)<br>[src/test-helpers/real-content.ts](../../../../sources/nashsu__llm_wiki/src/test-helpers/real-content.ts)<br>[src/test-helpers/scenarios/enrich-scenarios.ts](../../../../sources/nashsu__llm_wiki/src/test-helpers/scenarios/enrich-scenarios.ts)<br>[src/test-helpers/scenarios/ingest-scenarios.ts](../../../../sources/nashsu__llm_wiki/src/test-helpers/scenarios/ingest-scenarios.ts)<br>[src/test-helpers/scenarios/lint-scenarios.ts](../../../../sources/nashsu__llm_wiki/src/test-helpers/scenarios/lint-scenarios.ts) |
| security | 1 | [src-tauri/src/panic_guard.rs](../../../../sources/nashsu__llm_wiki/src-tauri/src/panic_guard.rs) |
| ci | 2 | [.github/workflows/build.yml](../../../../sources/nashsu__llm_wiki/.github/workflows/build.yml)<br>[.github/workflows/ci.yml](../../../../sources/nashsu__llm_wiki/.github/workflows/ci.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 5 | [README_CN.md](../../../../sources/nashsu__llm_wiki/README_CN.md)<br>[README_JA.md](../../../../sources/nashsu__llm_wiki/README_JA.md)<br>[README_KO.md](../../../../sources/nashsu__llm_wiki/README_KO.md)<br>[README.md](../../../../sources/nashsu__llm_wiki/README.md)<br>[mcp-server/README.md](../../../../sources/nashsu__llm_wiki/mcp-server/README.md) |
| config | 6 | [package.json](../../../../sources/nashsu__llm_wiki/package.json)<br>[tsconfig.json](../../../../sources/nashsu__llm_wiki/tsconfig.json)<br>[src-tauri/Cargo.lock](../../../../sources/nashsu__llm_wiki/src-tauri/Cargo.lock)<br>[src-tauri/Cargo.toml](../../../../sources/nashsu__llm_wiki/src-tauri/Cargo.toml)<br>[mcp-server/package.json](../../../../sources/nashsu__llm_wiki/mcp-server/package.json)<br>[mcp-server/tsconfig.json](../../../../sources/nashsu__llm_wiki/mcp-server/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 127 | [src/test-helpers/deferred.ts](../../../../sources/nashsu__llm_wiki/src/test-helpers/deferred.ts)<br>[src/test-helpers/fs-temp.ts](../../../../sources/nashsu__llm_wiki/src/test-helpers/fs-temp.ts)<br>[src/test-helpers/load-test-env.ts](../../../../sources/nashsu__llm_wiki/src/test-helpers/load-test-env.ts)<br>[src/test-helpers/mock-stream-chat.ts](../../../../sources/nashsu__llm_wiki/src/test-helpers/mock-stream-chat.ts)<br>[src/test-helpers/real-content.ts](../../../../sources/nashsu__llm_wiki/src/test-helpers/real-content.ts)<br>[src/test-helpers/scenarios/enrich-scenarios.ts](../../../../sources/nashsu__llm_wiki/src/test-helpers/scenarios/enrich-scenarios.ts) |
| CI workflow | 2 | [.github/workflows/build.yml](../../../../sources/nashsu__llm_wiki/.github/workflows/build.yml)<br>[.github/workflows/ci.yml](../../../../sources/nashsu__llm_wiki/.github/workflows/ci.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [src-tauri/src/panic_guard.rs](../../../../sources/nashsu__llm_wiki/src-tauri/src/panic_guard.rs) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `index.html`, `llm-wiki.md`, `src-tauri/src/types/wiki.rs`.
2. entrypoint를 따라 실행 흐름 확인: `src-tauri/src/main.rs`, `src/App.tsx`, `src/index.css`.
3. agent/tool runtime 매핑: `src/lib/context-budget.test.ts`, `src/lib/context-budget.ts`, `src/components/settings/context-size-selector.tsx`.
4. retrieval/memory/indexing 확인: `index.html`, `llm-wiki.md`, `src-tauri/src/types/wiki.rs`.
5. test/eval 파일로 동작 검증: `src/test-helpers/deferred.ts`, `src/test-helpers/fs-temp.ts`, `src/test-helpers/load-test-env.ts`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 LLM Wiki is a cross platform desktop application that turns your documents into an organized, interlinked knowledge base. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, next, react이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
