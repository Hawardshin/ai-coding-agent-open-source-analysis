# Muvon/octocode Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Semantic code searcher and codebase utility

## 요약

- 조사 단위: `sources/Muvon__octocode` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 158 files, 21 directories, depth score 113, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=website/index.html, src/store/graphrag.rs, src/store/vector_optimizer.rs이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Muvon/octocode |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Rust |
| Stars | 402 |
| Forks | 40 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/Muvon__octocode](../../../../sources/Muvon__octocode) |
| Existing report | [reports/global-trending/repositories/Muvon__octocode.md](../../../global-trending/repositories/Muvon__octocode.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 158 / 21 |
| Max observed depth | 4 |
| Top directories | .cargo, .github, benchmark, config-templates, doc, scripts, src, website |
| Top extensions | .rs: 110, .md: 17, (none): 7, .toml: 5, .sh: 4, .yml: 4, .csv: 2, .svg: 2, .css: 1, .html: 1, .js: 1, .json: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 39 |
| .github | ci surface | 1 |
| benchmark | validation surface | 1 |
| config-templates | top-level component | 1 |
| doc | documentation surface | 1 |
| scripts | top-level component | 1 |
| website | documentation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | install-deps | make install-deps |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | install-targets | make install-targets |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | check | make check |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build | make build |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build-release | make build-release |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build-static | make build-static |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build-all | make build-all |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | test | make test |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | test-verbose | make test-verbose |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
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
| retrieval | [website/index.html](../../../../sources/Muvon__octocode/website/index.html) | retrieval signal |
| retrieval | [src/store/graphrag.rs](../../../../sources/Muvon__octocode/src/store/graphrag.rs) | retrieval signal |
| retrieval | [src/store/vector_optimizer.rs](../../../../sources/Muvon__octocode/src/store/vector_optimizer.rs) | retrieval signal |
| retrieval | [src/mcp/graphrag.rs](../../../../sources/Muvon__octocode/src/mcp/graphrag.rs) | retrieval signal |
| entrypoints | [server.json](../../../../sources/Muvon__octocode/server.json) | entrypoints signal |
| entrypoints | [src/main.rs](../../../../sources/Muvon__octocode/src/main.rs) | entrypoints signal |
| entrypoints | [src/mcp/server.rs](../../../../sources/Muvon__octocode/src/mcp/server.rs) | entrypoints signal |
| docs | [README.md](../../../../sources/Muvon__octocode/README.md) | docs signal |
| docs | [website/script.js](../../../../sources/Muvon__octocode/website/script.js) | docs signal |
| docs | [website/styles.css](../../../../sources/Muvon__octocode/website/styles.css) | docs signal |
| eval | [src/store/hybrid_tests.rs](../../../../sources/Muvon__octocode/src/store/hybrid_tests.rs) | eval signal |
| eval | [src/indexer/languages/java_test.rs](../../../../sources/Muvon__octocode/src/indexer/languages/java_test.rs) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [server.json](../../../../sources/Muvon__octocode/server.json)<br>[src/main.rs](../../../../sources/Muvon__octocode/src/main.rs)<br>[src/mcp/server.rs](../../../../sources/Muvon__octocode/src/mcp/server.rs) |
| agentRuntime | 1 | [src/mcp/lsp/tools.rs](../../../../sources/Muvon__octocode/src/mcp/lsp/tools.rs) |
| mcp | 17 | [src/mcp/graphrag.rs](../../../../sources/Muvon__octocode/src/mcp/graphrag.rs)<br>[src/mcp/logging.rs](../../../../sources/Muvon__octocode/src/mcp/logging.rs)<br>[src/mcp/mod.rs](../../../../sources/Muvon__octocode/src/mcp/mod.rs)<br>[src/mcp/multi.rs](../../../../sources/Muvon__octocode/src/mcp/multi.rs)<br>[src/mcp/semantic_code.rs](../../../../sources/Muvon__octocode/src/mcp/semantic_code.rs)<br>[src/mcp/server.rs](../../../../sources/Muvon__octocode/src/mcp/server.rs)<br>[src/mcp/structural.rs](../../../../sources/Muvon__octocode/src/mcp/structural.rs)<br>[src/mcp/types.rs](../../../../sources/Muvon__octocode/src/mcp/types.rs) |
| retrieval | 16 | [website/index.html](../../../../sources/Muvon__octocode/website/index.html)<br>[src/store/graphrag.rs](../../../../sources/Muvon__octocode/src/store/graphrag.rs)<br>[src/store/vector_optimizer.rs](../../../../sources/Muvon__octocode/src/store/vector_optimizer.rs)<br>[src/mcp/graphrag.rs](../../../../sources/Muvon__octocode/src/mcp/graphrag.rs)<br>[src/indexer/graph_optimization.rs](../../../../sources/Muvon__octocode/src/indexer/graph_optimization.rs)<br>[src/indexer/graphrag/ai.rs](../../../../sources/Muvon__octocode/src/indexer/graphrag/ai.rs)<br>[src/indexer/graphrag/builder.rs](../../../../sources/Muvon__octocode/src/indexer/graphrag/builder.rs)<br>[src/indexer/graphrag/database.rs](../../../../sources/Muvon__octocode/src/indexer/graphrag/database.rs) |
| spec | 1 | [doc/ARCHITECTURE.md](../../../../sources/Muvon__octocode/doc/ARCHITECTURE.md) |
| eval | 11 | [src/store/hybrid_tests.rs](../../../../sources/Muvon__octocode/src/store/hybrid_tests.rs)<br>[src/indexer/languages/java_test.rs](../../../../sources/Muvon__octocode/src/indexer/languages/java_test.rs)<br>[src/indexer/languages/php_test.rs](../../../../sources/Muvon__octocode/src/indexer/languages/php_test.rs)<br>[src/indexer/languages/swift_test.rs](../../../../sources/Muvon__octocode/src/indexer/languages/swift_test.rs)<br>[src/indexer/graphrag/tests.rs](../../../../sources/Muvon__octocode/src/indexer/graphrag/tests.rs)<br>[scripts/test-completions.sh](../../../../sources/Muvon__octocode/scripts/test-completions.sh)<br>[benchmark/code.csv](../../../../sources/Muvon__octocode/benchmark/code.csv)<br>[benchmark/config.toml](../../../../sources/Muvon__octocode/benchmark/config.toml) |
| security | 0 | not obvious |
| ci | 4 | [.github/workflows/ci.yml](../../../../sources/Muvon__octocode/.github/workflows/ci.yml)<br>[.github/workflows/dependencies.yml](../../../../sources/Muvon__octocode/.github/workflows/dependencies.yml)<br>[.github/workflows/deploy-website.yml](../../../../sources/Muvon__octocode/.github/workflows/deploy-website.yml)<br>[.github/workflows/release.yml](../../../../sources/Muvon__octocode/.github/workflows/release.yml) |
| container | 1 | [Dockerfile](../../../../sources/Muvon__octocode/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 17 | [README.md](../../../../sources/Muvon__octocode/README.md)<br>[website/index.html](../../../../sources/Muvon__octocode/website/index.html)<br>[website/script.js](../../../../sources/Muvon__octocode/website/script.js)<br>[website/styles.css](../../../../sources/Muvon__octocode/website/styles.css)<br>[doc/ADVANCED_USAGE.md](../../../../sources/Muvon__octocode/doc/ADVANCED_USAGE.md)<br>[doc/API_KEYS.md](../../../../sources/Muvon__octocode/doc/API_KEYS.md)<br>[doc/ARCHITECTURE.md](../../../../sources/Muvon__octocode/doc/ARCHITECTURE.md)<br>[doc/COMMANDS.md](../../../../sources/Muvon__octocode/doc/COMMANDS.md) |
| config | 3 | [Cargo.lock](../../../../sources/Muvon__octocode/Cargo.lock)<br>[Cargo.toml](../../../../sources/Muvon__octocode/Cargo.toml)<br>[Makefile](../../../../sources/Muvon__octocode/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 11 | [src/store/hybrid_tests.rs](../../../../sources/Muvon__octocode/src/store/hybrid_tests.rs)<br>[src/indexer/languages/java_test.rs](../../../../sources/Muvon__octocode/src/indexer/languages/java_test.rs)<br>[src/indexer/languages/php_test.rs](../../../../sources/Muvon__octocode/src/indexer/languages/php_test.rs)<br>[src/indexer/languages/swift_test.rs](../../../../sources/Muvon__octocode/src/indexer/languages/swift_test.rs)<br>[src/indexer/graphrag/tests.rs](../../../../sources/Muvon__octocode/src/indexer/graphrag/tests.rs)<br>[scripts/test-completions.sh](../../../../sources/Muvon__octocode/scripts/test-completions.sh) |
| CI workflows | 4 | [.github/workflows/ci.yml](../../../../sources/Muvon__octocode/.github/workflows/ci.yml)<br>[.github/workflows/dependencies.yml](../../../../sources/Muvon__octocode/.github/workflows/dependencies.yml)<br>[.github/workflows/deploy-website.yml](../../../../sources/Muvon__octocode/.github/workflows/deploy-website.yml)<br>[.github/workflows/release.yml](../../../../sources/Muvon__octocode/.github/workflows/release.yml) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/Muvon__octocode/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `website/index.html`, `src/store/graphrag.rs`, `src/store/vector_optimizer.rs`.
2. Trace execution through entrypoints: `server.json`, `src/main.rs`, `src/mcp/server.rs`.
3. Map agent/tool runtime through: `src/mcp/lsp/tools.rs`.
4. Inspect retrieval/memory/indexing through: `website/index.html`, `src/store/graphrag.rs`, `src/store/vector_optimizer.rs`.
5. Verify behavior through test/eval files: `src/store/hybrid_tests.rs`, `src/indexer/languages/java_test.rs`, `src/indexer/languages/php_test.rs`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Semantic code searcher and codebase utility. 핵심 구조 신호는 Rust, Cargo.toml, Dockerfile, Makefile, README.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
