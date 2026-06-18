# tickernelz/opencode-mem Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

OpenCode plugin that gives coding agents persistent memory using local vector database

## 요약

- 조사 단위: `sources/tickernelz__opencode-mem` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 93 files, 19 directories, depth score 94, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 agent/tool runtime, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/memory-scope.test.ts, tests/vector-search-backend-integration.test.ts, tests/vector-backends/backend-factory.test.ts이고, 의존성 단서는 transformers, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | tickernelz/opencode-mem |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | TypeScript |
| Stars | 921 |
| Forks | 92 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/tickernelz__opencode-mem](../../../../sources/tickernelz__opencode-mem) |
| Existing report | [reports/global-trending/repositories/tickernelz__opencode-mem.md](../../../global-trending/repositories/tickernelz__opencode-mem.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 93 / 19 |
| Max observed depth | 5 |
| Top directories | .github, .husky, scripts, src, tests |
| Top extensions | .ts: 72, (none): 5, .png: 3, .yml: 3, .js: 2, .json: 2, .css: 1, .html: 1, .ico: 1, .lock: 1, .md: 1, .mjs: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 33 |
| src | source boundary | 15 |
| .github | ci surface | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | bunx tsc && mkdir -p dist/web && cp -r src/web/* dist/web/ |
| serve-dev | package.json | dev | tsc --watch |
| quality | package.json | typecheck | tsc --noEmit |
| quality | package.json | format | prettier --write "src/**/*.{ts,js,css,html}" |
| quality | package.json | format:check | prettier --check "src/**/*.{ts,js,css,html}" |
| utility | package.json | prepare | husky |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | transformers |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.ts](../../../../sources/tickernelz__opencode-mem/src/index.ts) |
| agentRuntime | 4 | [tests/memory-scope.test.ts](../../../../sources/tickernelz__opencode-mem/tests/memory-scope.test.ts)<br>[tests/tool-scope.test.ts](../../../../sources/tickernelz__opencode-mem/tests/tool-scope.test.ts)<br>[src/services/context.ts](../../../../sources/tickernelz__opencode-mem/src/services/context.ts)<br>[src/services/ai/tools/tool-schema.ts](../../../../sources/tickernelz__opencode-mem/src/services/ai/tools/tool-schema.ts) |
| mcp | 0 | not obvious |
| retrieval | 19 | [tests/memory-scope.test.ts](../../../../sources/tickernelz__opencode-mem/tests/memory-scope.test.ts)<br>[tests/vector-search-backend-integration.test.ts](../../../../sources/tickernelz__opencode-mem/tests/vector-search-backend-integration.test.ts)<br>[tests/vector-backends/backend-factory.test.ts](../../../../sources/tickernelz__opencode-mem/tests/vector-backends/backend-factory.test.ts)<br>[tests/vector-backends/exact-scan-backend.test.ts](../../../../sources/tickernelz__opencode-mem/tests/vector-backends/exact-scan-backend.test.ts)<br>[tests/vector-backends/migration-fallback.test.ts](../../../../sources/tickernelz__opencode-mem/tests/vector-backends/migration-fallback.test.ts)<br>[tests/vector-backends/usearch-backend.test.ts](../../../../sources/tickernelz__opencode-mem/tests/vector-backends/usearch-backend.test.ts)<br>[src/index.ts](../../../../sources/tickernelz__opencode-mem/src/index.ts)<br>[src/web/index.html](../../../../sources/tickernelz__opencode-mem/src/web/index.html) |
| spec | 0 | not obvious |
| eval | 24 | [tests/ai-provider-config.test.ts](../../../../sources/tickernelz__opencode-mem/tests/ai-provider-config.test.ts)<br>[tests/anthropic-provider.test.ts](../../../../sources/tickernelz__opencode-mem/tests/anthropic-provider.test.ts)<br>[tests/config-resolution.test.ts](../../../../sources/tickernelz__opencode-mem/tests/config-resolution.test.ts)<br>[tests/config.test.ts](../../../../sources/tickernelz__opencode-mem/tests/config.test.ts)<br>[tests/language-detector.test.ts](../../../../sources/tickernelz__opencode-mem/tests/language-detector.test.ts)<br>[tests/memory-scope.test.ts](../../../../sources/tickernelz__opencode-mem/tests/memory-scope.test.ts)<br>[tests/openai-chat-completion-provider.test.ts](../../../../sources/tickernelz__opencode-mem/tests/openai-chat-completion-provider.test.ts)<br>[tests/opencode-provider.test.ts](../../../../sources/tickernelz__opencode-mem/tests/opencode-provider.test.ts) |
| security | 1 | [src/services/secret-resolver.ts](../../../../sources/tickernelz__opencode-mem/src/services/secret-resolver.ts) |
| ci | 2 | [.github/workflows/embedding-backend.yml](../../../../sources/tickernelz__opencode-mem/.github/workflows/embedding-backend.yml)<br>[.github/workflows/release.yml](../../../../sources/tickernelz__opencode-mem/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/tickernelz__opencode-mem/README.md) |
| config | 2 | [package.json](../../../../sources/tickernelz__opencode-mem/package.json)<br>[tsconfig.json](../../../../sources/tickernelz__opencode-mem/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 24 | [tests/ai-provider-config.test.ts](../../../../sources/tickernelz__opencode-mem/tests/ai-provider-config.test.ts)<br>[tests/anthropic-provider.test.ts](../../../../sources/tickernelz__opencode-mem/tests/anthropic-provider.test.ts)<br>[tests/config-resolution.test.ts](../../../../sources/tickernelz__opencode-mem/tests/config-resolution.test.ts)<br>[tests/config.test.ts](../../../../sources/tickernelz__opencode-mem/tests/config.test.ts)<br>[tests/language-detector.test.ts](../../../../sources/tickernelz__opencode-mem/tests/language-detector.test.ts)<br>[tests/memory-scope.test.ts](../../../../sources/tickernelz__opencode-mem/tests/memory-scope.test.ts) |
| CI workflows | 2 | [.github/workflows/embedding-backend.yml](../../../../sources/tickernelz__opencode-mem/.github/workflows/embedding-backend.yml)<br>[.github/workflows/release.yml](../../../../sources/tickernelz__opencode-mem/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [src/services/secret-resolver.ts](../../../../sources/tickernelz__opencode-mem/src/services/secret-resolver.ts) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/memory-scope.test.ts`, `tests/vector-search-backend-integration.test.ts`, `tests/vector-backends/backend-factory.test.ts`.
2. Trace execution through entrypoints: `src/index.ts`.
3. Map agent/tool runtime through: `tests/memory-scope.test.ts`, `tests/tool-scope.test.ts`, `src/services/context.ts`.
4. Inspect retrieval/memory/indexing through: `tests/memory-scope.test.ts`, `tests/vector-search-backend-integration.test.ts`, `tests/vector-backends/backend-factory.test.ts`.
5. Verify behavior through test/eval files: `tests/ai-provider-config.test.ts`, `tests/anthropic-provider.test.ts`, `tests/config-resolution.test.ts`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 OpenCode plugin that gives coding agents persistent memory using local vector database. 핵심 구조 신호는 TypeScript, package.json, README.md, transformers, tests, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
