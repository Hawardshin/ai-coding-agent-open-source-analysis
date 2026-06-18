# nashsu/llm_wiki Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

LLM Wiki is a cross-platform desktop application that turns your documents into an organized, interlinked knowledge base — automatically. Instead of traditional RAG (retrieve-and-answer from scratch every time), the LLM incrementally builds and maintains a persistent wiki from your sources。

## 요약

- 조사 단위: `sources/nashsu__llm_wiki` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 374 files, 39 directories, depth score 113, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=index.html, llm-wiki.md, src-tauri/src/types/wiki.rs이고, 의존성 단서는 next, react, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | nashsu/llm_wiki |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | TypeScript |
| Stars | 11795 |
| Forks | 1434 |
| License | NOASSERTION |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/nashsu__llm_wiki](../../../../sources/nashsu__llm_wiki) |
| Existing report | [reports/global-trending/repositories/nashsu__llm_wiki.md](../../../global-trending/repositories/nashsu__llm_wiki.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 374 / 39 |
| Max observed depth | 5 |
| Top directories | .github, assets, extension, mcp-server, plans, scripts, src, src-tauri |
| Top extensions | .ts: 236, .tsx: 55, .rs: 20, .json: 18, .jpg: 11, .md: 7, .png: 7, .js: 3, .html: 2, .so: 2, .yml: 2, (none): 2 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 84 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| extension | top-level component | 1 |
| mcp-server | source boundary | 1 |
| plans | top-level component | 1 |
| scripts | top-level component | 1 |
| src-tauri | source boundary | 1 |


## How It Runs

| Category | Source | Name | Command |
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


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | next, react |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 5 | [src-tauri/src/main.rs](../../../../sources/nashsu__llm_wiki/src-tauri/src/main.rs)<br>[src/App.tsx](../../../../sources/nashsu__llm_wiki/src/App.tsx)<br>[src/index.css](../../../../sources/nashsu__llm_wiki/src/index.css)<br>[src/main.tsx](../../../../sources/nashsu__llm_wiki/src/main.tsx)<br>[mcp-server/src/index.ts](../../../../sources/nashsu__llm_wiki/mcp-server/src/index.ts) |
| agentRuntime | 3 | [src/lib/context-budget.test.ts](../../../../sources/nashsu__llm_wiki/src/lib/context-budget.test.ts)<br>[src/lib/context-budget.ts](../../../../sources/nashsu__llm_wiki/src/lib/context-budget.ts)<br>[src/components/settings/context-size-selector.tsx](../../../../sources/nashsu__llm_wiki/src/components/settings/context-size-selector.tsx) |
| mcp | 9 | [mcp-server/package-lock.json](../../../../sources/nashsu__llm_wiki/mcp-server/package-lock.json)<br>[mcp-server/package.json](../../../../sources/nashsu__llm_wiki/mcp-server/package.json)<br>[mcp-server/README.md](../../../../sources/nashsu__llm_wiki/mcp-server/README.md)<br>[mcp-server/tsconfig.json](../../../../sources/nashsu__llm_wiki/mcp-server/tsconfig.json)<br>[mcp-server/test/api-client.test.ts](../../../../sources/nashsu__llm_wiki/mcp-server/test/api-client.test.ts)<br>[mcp-server/test/version.test.ts](../../../../sources/nashsu__llm_wiki/mcp-server/test/version.test.ts)<br>[mcp-server/src/api-client.ts](../../../../sources/nashsu__llm_wiki/mcp-server/src/api-client.ts)<br>[mcp-server/src/index.ts](../../../../sources/nashsu__llm_wiki/mcp-server/src/index.ts) |
| retrieval | 59 | [index.html](../../../../sources/nashsu__llm_wiki/index.html)<br>[llm-wiki.md](../../../../sources/nashsu__llm_wiki/llm-wiki.md)<br>[src-tauri/src/types/wiki.rs](../../../../sources/nashsu__llm_wiki/src-tauri/src/types/wiki.rs)<br>[src/index.css](../../../../sources/nashsu__llm_wiki/src/index.css)<br>[src/types/wiki.ts](../../../../sources/nashsu__llm_wiki/src/types/wiki.ts)<br>[src/test-helpers/scenarios/ingest-scenarios.ts](../../../../sources/nashsu__llm_wiki/src/test-helpers/scenarios/ingest-scenarios.ts)<br>[src/stores/wiki-store.test.ts](../../../../sources/nashsu__llm_wiki/src/stores/wiki-store.test.ts)<br>[src/stores/wiki-store.ts](../../../../sources/nashsu__llm_wiki/src/stores/wiki-store.ts) |
| spec | 0 | not obvious |
| eval | 127 | [src/test-helpers/deferred.ts](../../../../sources/nashsu__llm_wiki/src/test-helpers/deferred.ts)<br>[src/test-helpers/fs-temp.ts](../../../../sources/nashsu__llm_wiki/src/test-helpers/fs-temp.ts)<br>[src/test-helpers/load-test-env.ts](../../../../sources/nashsu__llm_wiki/src/test-helpers/load-test-env.ts)<br>[src/test-helpers/mock-stream-chat.ts](../../../../sources/nashsu__llm_wiki/src/test-helpers/mock-stream-chat.ts)<br>[src/test-helpers/real-content.ts](../../../../sources/nashsu__llm_wiki/src/test-helpers/real-content.ts)<br>[src/test-helpers/scenarios/enrich-scenarios.ts](../../../../sources/nashsu__llm_wiki/src/test-helpers/scenarios/enrich-scenarios.ts)<br>[src/test-helpers/scenarios/ingest-scenarios.ts](../../../../sources/nashsu__llm_wiki/src/test-helpers/scenarios/ingest-scenarios.ts)<br>[src/test-helpers/scenarios/lint-scenarios.ts](../../../../sources/nashsu__llm_wiki/src/test-helpers/scenarios/lint-scenarios.ts) |
| security | 1 | [src-tauri/src/panic_guard.rs](../../../../sources/nashsu__llm_wiki/src-tauri/src/panic_guard.rs) |
| ci | 2 | [.github/workflows/build.yml](../../../../sources/nashsu__llm_wiki/.github/workflows/build.yml)<br>[.github/workflows/ci.yml](../../../../sources/nashsu__llm_wiki/.github/workflows/ci.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 5 | [README_CN.md](../../../../sources/nashsu__llm_wiki/README_CN.md)<br>[README_JA.md](../../../../sources/nashsu__llm_wiki/README_JA.md)<br>[README_KO.md](../../../../sources/nashsu__llm_wiki/README_KO.md)<br>[README.md](../../../../sources/nashsu__llm_wiki/README.md)<br>[mcp-server/README.md](../../../../sources/nashsu__llm_wiki/mcp-server/README.md) |
| config | 6 | [package.json](../../../../sources/nashsu__llm_wiki/package.json)<br>[tsconfig.json](../../../../sources/nashsu__llm_wiki/tsconfig.json)<br>[src-tauri/Cargo.lock](../../../../sources/nashsu__llm_wiki/src-tauri/Cargo.lock)<br>[src-tauri/Cargo.toml](../../../../sources/nashsu__llm_wiki/src-tauri/Cargo.toml)<br>[mcp-server/package.json](../../../../sources/nashsu__llm_wiki/mcp-server/package.json)<br>[mcp-server/tsconfig.json](../../../../sources/nashsu__llm_wiki/mcp-server/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 127 | [src/test-helpers/deferred.ts](../../../../sources/nashsu__llm_wiki/src/test-helpers/deferred.ts)<br>[src/test-helpers/fs-temp.ts](../../../../sources/nashsu__llm_wiki/src/test-helpers/fs-temp.ts)<br>[src/test-helpers/load-test-env.ts](../../../../sources/nashsu__llm_wiki/src/test-helpers/load-test-env.ts)<br>[src/test-helpers/mock-stream-chat.ts](../../../../sources/nashsu__llm_wiki/src/test-helpers/mock-stream-chat.ts)<br>[src/test-helpers/real-content.ts](../../../../sources/nashsu__llm_wiki/src/test-helpers/real-content.ts)<br>[src/test-helpers/scenarios/enrich-scenarios.ts](../../../../sources/nashsu__llm_wiki/src/test-helpers/scenarios/enrich-scenarios.ts) |
| CI workflows | 2 | [.github/workflows/build.yml](../../../../sources/nashsu__llm_wiki/.github/workflows/build.yml)<br>[.github/workflows/ci.yml](../../../../sources/nashsu__llm_wiki/.github/workflows/ci.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [src-tauri/src/panic_guard.rs](../../../../sources/nashsu__llm_wiki/src-tauri/src/panic_guard.rs) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `index.html`, `llm-wiki.md`, `src-tauri/src/types/wiki.rs`.
2. Trace execution through entrypoints: `src-tauri/src/main.rs`, `src/App.tsx`, `src/index.css`.
3. Map agent/tool runtime through: `src/lib/context-budget.test.ts`, `src/lib/context-budget.ts`, `src/components/settings/context-size-selector.tsx`.
4. Inspect retrieval/memory/indexing through: `index.html`, `llm-wiki.md`, `src-tauri/src/types/wiki.rs`.
5. Verify behavior through test/eval files: `src/test-helpers/deferred.ts`, `src/test-helpers/fs-temp.ts`, `src/test-helpers/load-test-env.ts`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 LLM Wiki is a cross platform desktop application that turns your documents into an organized, interlinked knowledge base. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, next, react이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
