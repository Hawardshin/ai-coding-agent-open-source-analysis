# tickernelz/opencode-mem 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

OpenCode plugin that gives coding agents persistent memory using local vector database

## 요약

- 조사 단위: `sources/tickernelz__opencode-mem` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 93 files, 19 directories, depth score 88, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 agent/tool runtime, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/memory-scope.test.ts, tests/vector-search-backend-integration.test.ts, tests/vector-backends/backend-factory.test.ts이고, 의존성 단서는 transformers, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | tickernelz/opencode-mem |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | TypeScript |
| Stars | 921 |
| Forks | 92 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/tickernelz__opencode-mem](../../../../sources/tickernelz__opencode-mem) |
| 기존 보고서 | [reports/global-trending/repositories/tickernelz__opencode-mem.md](../../../global-trending/repositories/tickernelz__opencode-mem.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 93 / 19 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, .husky, scripts, src, tests |
| 상위 확장자 | .ts: 72, (none): 5, .png: 3, .yml: 3, .js: 2, .json: 2, .css: 1, .html: 1, .ico: 1, .lock: 1, .md: 1, .mjs: 1 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 33 |
| src | source boundary | 15 |
| .github | ci surface | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | bunx tsc && mkdir -p dist/web && cp -r src/web/* dist/web/ |
| serve-dev | package.json | dev | tsc --watch |
| quality | package.json | typecheck | tsc --noEmit |
| quality | package.json | format | prettier --write "src/**/*.{ts,js,css,html}" |
| quality | package.json | format:check | prettier --check "src/**/*.{ts,js,css,html}" |
| utility | package.json | prepare | husky |


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
| retrieval | [tests/memory-scope.test.ts](../../../../sources/tickernelz__opencode-mem/tests/memory-scope.test.ts) | retrieval signal |
| retrieval | [tests/vector-search-backend-integration.test.ts](../../../../sources/tickernelz__opencode-mem/tests/vector-search-backend-integration.test.ts) | retrieval signal |
| retrieval | [tests/vector-backends/backend-factory.test.ts](../../../../sources/tickernelz__opencode-mem/tests/vector-backends/backend-factory.test.ts) | retrieval signal |
| retrieval | [tests/vector-backends/exact-scan-backend.test.ts](../../../../sources/tickernelz__opencode-mem/tests/vector-backends/exact-scan-backend.test.ts) | retrieval signal |
| entrypoints | [src/index.ts](../../../../sources/tickernelz__opencode-mem/src/index.ts) | entrypoints signal |
| docs | [README.md](../../../../sources/tickernelz__opencode-mem/README.md) | docs signal |
| eval | [tests/ai-provider-config.test.ts](../../../../sources/tickernelz__opencode-mem/tests/ai-provider-config.test.ts) | eval signal |
| eval | [tests/anthropic-provider.test.ts](../../../../sources/tickernelz__opencode-mem/tests/anthropic-provider.test.ts) | eval signal |
| eval | [tests/config-resolution.test.ts](../../../../sources/tickernelz__opencode-mem/tests/config-resolution.test.ts) | eval signal |
| eval | [tests/config.test.ts](../../../../sources/tickernelz__opencode-mem/tests/config.test.ts) | eval signal |
| config | [package.json](../../../../sources/tickernelz__opencode-mem/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/tickernelz__opencode-mem/tsconfig.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.ts](../../../../sources/tickernelz__opencode-mem/src/index.ts) |
| agentRuntime | 4 | [tests/memory-scope.test.ts](../../../../sources/tickernelz__opencode-mem/tests/memory-scope.test.ts)<br>[tests/tool-scope.test.ts](../../../../sources/tickernelz__opencode-mem/tests/tool-scope.test.ts)<br>[src/services/context.ts](../../../../sources/tickernelz__opencode-mem/src/services/context.ts)<br>[src/services/ai/tools/tool-schema.ts](../../../../sources/tickernelz__opencode-mem/src/services/ai/tools/tool-schema.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 19 | [tests/memory-scope.test.ts](../../../../sources/tickernelz__opencode-mem/tests/memory-scope.test.ts)<br>[tests/vector-search-backend-integration.test.ts](../../../../sources/tickernelz__opencode-mem/tests/vector-search-backend-integration.test.ts)<br>[tests/vector-backends/backend-factory.test.ts](../../../../sources/tickernelz__opencode-mem/tests/vector-backends/backend-factory.test.ts)<br>[tests/vector-backends/exact-scan-backend.test.ts](../../../../sources/tickernelz__opencode-mem/tests/vector-backends/exact-scan-backend.test.ts)<br>[tests/vector-backends/migration-fallback.test.ts](../../../../sources/tickernelz__opencode-mem/tests/vector-backends/migration-fallback.test.ts)<br>[tests/vector-backends/usearch-backend.test.ts](../../../../sources/tickernelz__opencode-mem/tests/vector-backends/usearch-backend.test.ts)<br>[src/index.ts](../../../../sources/tickernelz__opencode-mem/src/index.ts)<br>[src/web/index.html](../../../../sources/tickernelz__opencode-mem/src/web/index.html) |
| spec | 0 | 명확하지 않음 |
| eval | 24 | [tests/ai-provider-config.test.ts](../../../../sources/tickernelz__opencode-mem/tests/ai-provider-config.test.ts)<br>[tests/anthropic-provider.test.ts](../../../../sources/tickernelz__opencode-mem/tests/anthropic-provider.test.ts)<br>[tests/config-resolution.test.ts](../../../../sources/tickernelz__opencode-mem/tests/config-resolution.test.ts)<br>[tests/config.test.ts](../../../../sources/tickernelz__opencode-mem/tests/config.test.ts)<br>[tests/language-detector.test.ts](../../../../sources/tickernelz__opencode-mem/tests/language-detector.test.ts)<br>[tests/memory-scope.test.ts](../../../../sources/tickernelz__opencode-mem/tests/memory-scope.test.ts)<br>[tests/openai-chat-completion-provider.test.ts](../../../../sources/tickernelz__opencode-mem/tests/openai-chat-completion-provider.test.ts)<br>[tests/opencode-provider.test.ts](../../../../sources/tickernelz__opencode-mem/tests/opencode-provider.test.ts) |
| security | 1 | [src/services/secret-resolver.ts](../../../../sources/tickernelz__opencode-mem/src/services/secret-resolver.ts) |
| ci | 2 | [.github/workflows/embedding-backend.yml](../../../../sources/tickernelz__opencode-mem/.github/workflows/embedding-backend.yml)<br>[.github/workflows/release.yml](../../../../sources/tickernelz__opencode-mem/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/tickernelz__opencode-mem/README.md) |
| config | 2 | [package.json](../../../../sources/tickernelz__opencode-mem/package.json)<br>[tsconfig.json](../../../../sources/tickernelz__opencode-mem/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 24 | [tests/ai-provider-config.test.ts](../../../../sources/tickernelz__opencode-mem/tests/ai-provider-config.test.ts)<br>[tests/anthropic-provider.test.ts](../../../../sources/tickernelz__opencode-mem/tests/anthropic-provider.test.ts)<br>[tests/config-resolution.test.ts](../../../../sources/tickernelz__opencode-mem/tests/config-resolution.test.ts)<br>[tests/config.test.ts](../../../../sources/tickernelz__opencode-mem/tests/config.test.ts)<br>[tests/language-detector.test.ts](../../../../sources/tickernelz__opencode-mem/tests/language-detector.test.ts)<br>[tests/memory-scope.test.ts](../../../../sources/tickernelz__opencode-mem/tests/memory-scope.test.ts) |
| CI workflow | 2 | [.github/workflows/embedding-backend.yml](../../../../sources/tickernelz__opencode-mem/.github/workflows/embedding-backend.yml)<br>[.github/workflows/release.yml](../../../../sources/tickernelz__opencode-mem/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [src/services/secret-resolver.ts](../../../../sources/tickernelz__opencode-mem/src/services/secret-resolver.ts) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/memory-scope.test.ts`, `tests/vector-search-backend-integration.test.ts`, `tests/vector-backends/backend-factory.test.ts`.
2. entrypoint를 따라 실행 흐름 확인: `src/index.ts`.
3. agent/tool runtime 매핑: `tests/memory-scope.test.ts`, `tests/tool-scope.test.ts`, `src/services/context.ts`.
4. retrieval/memory/indexing 확인: `tests/memory-scope.test.ts`, `tests/vector-search-backend-integration.test.ts`, `tests/vector-backends/backend-factory.test.ts`.
5. test/eval 파일로 동작 검증: `tests/ai-provider-config.test.ts`, `tests/anthropic-provider.test.ts`, `tests/config-resolution.test.ts`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 OpenCode plugin that gives coding agents persistent memory using local vector database. 핵심 구조 신호는 TypeScript, package.json, README.md, transformers, tests, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
