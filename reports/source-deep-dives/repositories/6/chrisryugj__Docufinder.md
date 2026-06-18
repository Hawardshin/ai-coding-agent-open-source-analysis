# chrisryugj/Docufinder Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Anything — 파일을 찾지 말고, 내용을 찾으세요. HWPX · PDF · Office 수천 건의 본문을 1초 만에. 100% 로컬 · 완전 오프라인 · AI Q&A 옵션 (Tauri · React · Rust) | Local content search for Korean PCs — HWP-first, fully offline

## 요약

- 조사 단위: `sources/chrisryugj__Docufinder` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 356 files, 65 directories, depth score 113, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=index.html, src-tauri/src/search/vector.rs, src-tauri/src/indexer/vector_worker.rs이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | chrisryugj/Docufinder |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Rust |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/chrisryugj__Docufinder](../../../../sources/chrisryugj__Docufinder) |
| Existing report | [reports/korea-trending/repositories/chrisryugj__Docufinder.md](../../../korea-trending/repositories/chrisryugj__Docufinder.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 356 / 65 |
| Max observed depth | 6 |
| Top directories | .github, docs, promo-video, public, scripts, src, src-tauri |
| Top extensions | .rs: 105, .tsx: 72, .ts: 57, .png: 54, .json: 14, .md: 8, .ps1: 7, .css: 6, .bmp: 2, .onnx: 2, .py: 2, .sh: 2 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 44 |
| docs | documentation surface | 4 |
| .github | ci surface | 1 |
| promo-video | top-level component | 1 |
| public | top-level component | 1 |
| scripts | top-level component | 1 |
| src-tauri | source boundary | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | vite |
| serve-dev | package.json | build | tsc && vite build |
| serve-dev | package.json | preview | vite preview |
| utility | package.json | tauri | tauri |
| serve-dev | package.json | tauri:dev | set WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS=--no-proxy-server --disable-background-networking --disable-features=msSmartScreenProtection&& tauri dev |
| serve-dev | package.json | tauri:dev:mac | tauri dev |
| utility | package.json | download-model | powershell -File scripts/download-model.ps1 |
| build | package.json | download-vcredist | powershell -File scripts/download-vcredist.ps1 |
| build | package.json | bundle-kordoc | powershell -ExecutionPolicy Bypass -File scripts/bundle-kordoc.ps1 |
| utility | package.json | setup-mac-resources | bash scripts/setup-macos-resources.sh |
| build | package.json | tauri:build | pnpm run download-vcredist && pnpm run download-model && pnpm run bundle-kordoc && tauri build |
| build | package.json | tauri:build:mac | pnpm run setup-mac-resources && tauri build --target aarch64-apple-darwin |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | react |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [index.html](../../../../sources/chrisryugj__Docufinder/index.html) | retrieval signal |
| retrieval | [src-tauri/src/search/vector.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/src/search/vector.rs) | retrieval signal |
| retrieval | [src-tauri/src/indexer/vector_worker.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/src/indexer/vector_worker.rs) | retrieval signal |
| retrieval | [src-tauri/src/commands/index/batch.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/src/commands/index/batch.rs) | retrieval signal |
| entrypoints | [src-tauri/src/main.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/src/main.rs) | entrypoints signal |
| entrypoints | [src/App.tsx](../../../../sources/chrisryugj__Docufinder/src/App.tsx) | entrypoints signal |
| entrypoints | [src/index.css](../../../../sources/chrisryugj__Docufinder/src/index.css) | entrypoints signal |
| entrypoints | [src/main.tsx](../../../../sources/chrisryugj__Docufinder/src/main.tsx) | entrypoints signal |
| docs | [README.md](../../../../sources/chrisryugj__Docufinder/README.md) | docs signal |
| docs | [docs/MAC_PORT_PLAN.md](../../../../sources/chrisryugj__Docufinder/docs/MAC_PORT_PLAN.md) | docs signal |
| docs | [docs/PROD_REVIEW_v2.6.8.md](../../../../sources/chrisryugj__Docufinder/docs/PROD_REVIEW_v2.6.8.md) | docs signal |
| docs | [docs/promo.gif](../../../../sources/chrisryugj__Docufinder/docs/promo.gif) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 5 | [src-tauri/src/main.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/src/main.rs)<br>[src/App.tsx](../../../../sources/chrisryugj__Docufinder/src/App.tsx)<br>[src/index.css](../../../../sources/chrisryugj__Docufinder/src/index.css)<br>[src/main.tsx](../../../../sources/chrisryugj__Docufinder/src/main.tsx)<br>[promo-video/src/index.ts](../../../../sources/chrisryugj__Docufinder/promo-video/src/index.ts) |
| agentRuntime | 31 | [src/hooks/index.ts](../../../../sources/chrisryugj__Docufinder/src/hooks/index.ts)<br>[src/hooks/useAiAnswer.ts](../../../../sources/chrisryugj__Docufinder/src/hooks/useAiAnswer.ts)<br>[src/hooks/useAppEvents.ts](../../../../sources/chrisryugj__Docufinder/src/hooks/useAppEvents.ts)<br>[src/hooks/useAppSettings.ts](../../../../sources/chrisryugj__Docufinder/src/hooks/useAppSettings.ts)<br>[src/hooks/useBookmarks.ts](../../../../sources/chrisryugj__Docufinder/src/hooks/useBookmarks.ts)<br>[src/hooks/useCollapsibleSearch.ts](../../../../sources/chrisryugj__Docufinder/src/hooks/useCollapsibleSearch.ts)<br>[src/hooks/useDocumentCategories.ts](../../../../sources/chrisryugj__Docufinder/src/hooks/useDocumentCategories.ts)<br>[src/hooks/useExport.ts](../../../../sources/chrisryugj__Docufinder/src/hooks/useExport.ts) |
| mcp | 0 | not obvious |
| retrieval | 19 | [index.html](../../../../sources/chrisryugj__Docufinder/index.html)<br>[src-tauri/src/search/vector.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/src/search/vector.rs)<br>[src-tauri/src/indexer/vector_worker.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/src/indexer/vector_worker.rs)<br>[src-tauri/src/commands/index/batch.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/src/commands/index/batch.rs)<br>[src-tauri/src/commands/index/data.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/src/commands/index/data.rs)<br>[src-tauri/src/commands/index/folder.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/src/commands/index/folder.rs)<br>[src-tauri/src/commands/index/init.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/src/commands/index/init.rs)<br>[src-tauri/src/commands/index/mod.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/src/commands/index/mod.rs) |
| spec | 1 | [DESIGN.md](../../../../sources/chrisryugj__Docufinder/DESIGN.md) |
| eval | 5 | [src-tauri/tests/parser_tests.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/tests/parser_tests.rs)<br>[src-tauri/tests/xls_neis_integration.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/tests/xls_neis_integration.rs)<br>[src-tauri/tests/fixtures/real_filenames.list](../../../../sources/chrisryugj__Docufinder/src-tauri/tests/fixtures/real_filenames.list)<br>[src-tauri/tests/fixtures/sample.txt](../../../../sources/chrisryugj__Docufinder/src-tauri/tests/fixtures/sample.txt)<br>[src-tauri/src/search/nl_query/tests.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/src/search/nl_query/tests.rs) |
| security | 0 | not obvious |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/chrisryugj__Docufinder/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/chrisryugj__Docufinder/.github/workflows/publish.yml) |
| container | 0 | not obvious |
| instruction | 1 | [CLAUDE.md](../../../../sources/chrisryugj__Docufinder/CLAUDE.md) |
| docs | 4 | [README.md](../../../../sources/chrisryugj__Docufinder/README.md)<br>[docs/MAC_PORT_PLAN.md](../../../../sources/chrisryugj__Docufinder/docs/MAC_PORT_PLAN.md)<br>[docs/PROD_REVIEW_v2.6.8.md](../../../../sources/chrisryugj__Docufinder/docs/PROD_REVIEW_v2.6.8.md)<br>[docs/promo.gif](../../../../sources/chrisryugj__Docufinder/docs/promo.gif) |
| config | 6 | [package.json](../../../../sources/chrisryugj__Docufinder/package.json)<br>[tsconfig.json](../../../../sources/chrisryugj__Docufinder/tsconfig.json)<br>[src-tauri/Cargo.lock](../../../../sources/chrisryugj__Docufinder/src-tauri/Cargo.lock)<br>[src-tauri/Cargo.toml](../../../../sources/chrisryugj__Docufinder/src-tauri/Cargo.toml)<br>[promo-video/package.json](../../../../sources/chrisryugj__Docufinder/promo-video/package.json)<br>[promo-video/tsconfig.json](../../../../sources/chrisryugj__Docufinder/promo-video/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 5 | [src-tauri/tests/parser_tests.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/tests/parser_tests.rs)<br>[src-tauri/tests/xls_neis_integration.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/tests/xls_neis_integration.rs)<br>[src-tauri/tests/fixtures/real_filenames.list](../../../../sources/chrisryugj__Docufinder/src-tauri/tests/fixtures/real_filenames.list)<br>[src-tauri/tests/fixtures/sample.txt](../../../../sources/chrisryugj__Docufinder/src-tauri/tests/fixtures/sample.txt)<br>[src-tauri/src/search/nl_query/tests.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/src/search/nl_query/tests.rs) |
| CI workflows | 2 | [.github/workflows/ci.yml](../../../../sources/chrisryugj__Docufinder/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/chrisryugj__Docufinder/.github/workflows/publish.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/chrisryugj__Docufinder/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `index.html`, `src-tauri/src/search/vector.rs`, `src-tauri/src/indexer/vector_worker.rs`.
2. Trace execution through entrypoints: `src-tauri/src/main.rs`, `src/App.tsx`, `src/index.css`.
3. Map agent/tool runtime through: `src/hooks/index.ts`, `src/hooks/useAiAnswer.ts`, `src/hooks/useAppEvents.ts`.
4. Inspect retrieval/memory/indexing through: `index.html`, `src-tauri/src/search/vector.rs`, `src-tauri/src/indexer/vector_worker.rs`.
5. Verify behavior through test/eval files: `src-tauri/tests/parser_tests.rs`, `src-tauri/tests/xls_neis_integration.rs`, `src-tauri/tests/fixtures/real_filenames.list`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Anything — 파일을 찾지 말고, 내용을 찾으세요. HWPX · PDF · Office 수천 건의 본문을 1초 만에. 100% 로컬 · 완전 오프라인 · AI Q&A 옵션 Tauri · React · Rust . 핵심 구조 신호는 Rust, package.json, README.md, CLAUDE.md, LICENSE, react이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
