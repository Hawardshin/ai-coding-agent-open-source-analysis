# majiayu000/remem Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Persistent memory for Claude Code and Codex — single Rust binary, automatic context

## 요약

- 조사 단위: `sources/majiayu000__remem` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 750 files, 142 directories, depth score 124, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/mcp/mod.rs, src/mcp/server.rs, src/mcp/types.rs이고, 의존성 단서는 claude, codex, mcp, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | majiayu000/remem |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Rust |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/majiayu000__remem](../../../../sources/majiayu000__remem) |
| Existing report | [reports/korea-trending/repositories/majiayu000__remem.md](../../../korea-trending/repositories/majiayu000__remem.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 750 / 142 |
| Max observed depth | 6 |
| Top directories | .agents, .github, .remem, assets, docs, eval, npm, plugins, prompts, scripts, site, src, tests |
| Top extensions | .rs: 508, .md: 114, .sql: 45, .json: 36, .js: 17, .py: 6, .txt: 5, .yml: 4, (none): 3, .css: 2, .gif: 2, .html: 2 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 115 |
| docs | documentation surface | 61 |
| tests | validation surface | 12 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| eval | top-level component | 1 |
| npm | top-level component | 1 |
| plugins | top-level component | 1 |
| prompts | top-level component | 1 |
| scripts | top-level component | 1 |
| site | documentation surface | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | claude |
| agentProtocols | mcp, codex |
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
| mcp | [src/mcp/mod.rs](../../../../sources/majiayu000__remem/src/mcp/mod.rs) | mcp signal |
| mcp | [src/mcp/server.rs](../../../../sources/majiayu000__remem/src/mcp/server.rs) | mcp signal |
| mcp | [src/mcp/types.rs](../../../../sources/majiayu000__remem/src/mcp/types.rs) | mcp signal |
| mcp | [src/mcp/server/commit_tools.rs](../../../../sources/majiayu000__remem/src/mcp/server/commit_tools.rs) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/majiayu000__remem/AGENTS.md) | agentRuntime signal |
| agentRuntime | [src/context.rs](../../../../sources/majiayu000__remem/src/context.rs) | agentRuntime signal |
| agentRuntime | [src/hook_stdin.rs](../../../../sources/majiayu000__remem/src/hook_stdin.rs) | agentRuntime signal |
| agentRuntime | [src/memory_candidate.rs](../../../../sources/majiayu000__remem/src/memory_candidate.rs) | agentRuntime signal |
| entrypoints | [src/main.rs](../../../../sources/majiayu000__remem/src/main.rs) | entrypoints signal |
| entrypoints | [src/api/server.rs](../../../../sources/majiayu000__remem/src/api/server.rs) | entrypoints signal |
| entrypoints | [plugins/remem/apps/remem/server.js](../../../../sources/majiayu000__remem/plugins/remem/apps/remem/server.js) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/majiayu000__remem/CLAUDE.md) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 6 | [src/main.rs](../../../../sources/majiayu000__remem/src/main.rs)<br>[src/mcp/server.rs](../../../../sources/majiayu000__remem/src/mcp/server.rs)<br>[src/api/server.rs](../../../../sources/majiayu000__remem/src/api/server.rs)<br>[plugins/remem/apps/remem/server.js](../../../../sources/majiayu000__remem/plugins/remem/apps/remem/server.js)<br>[plugins/remem/apps/remem/server.test.js](../../../../sources/majiayu000__remem/plugins/remem/apps/remem/server.test.js)<br>[npm/remem/bin/remem.js](../../../../sources/majiayu000__remem/npm/remem/bin/remem.js) |
| agentRuntime | 185 | [AGENTS.md](../../../../sources/majiayu000__remem/AGENTS.md)<br>[src/context.rs](../../../../sources/majiayu000__remem/src/context.rs)<br>[src/hook_stdin.rs](../../../../sources/majiayu000__remem/src/hook_stdin.rs)<br>[src/memory_candidate.rs](../../../../sources/majiayu000__remem/src/memory_candidate.rs)<br>[src/memory.rs](../../../../sources/majiayu000__remem/src/memory.rs)<br>[src/summarize/summary_job/hook.rs](../../../../sources/majiayu000__remem/src/summarize/summary_job/hook.rs)<br>[src/retrieval/memory_search.rs](../../../../sources/majiayu000__remem/src/retrieval/memory_search.rs)<br>[src/retrieval/search/memory.rs](../../../../sources/majiayu000__remem/src/retrieval/search/memory.rs) |
| mcp | 17 | [src/mcp/mod.rs](../../../../sources/majiayu000__remem/src/mcp/mod.rs)<br>[src/mcp/server.rs](../../../../sources/majiayu000__remem/src/mcp/server.rs)<br>[src/mcp/types.rs](../../../../sources/majiayu000__remem/src/mcp/types.rs)<br>[src/mcp/server/commit_tools.rs](../../../../sources/majiayu000__remem/src/mcp/server/commit_tools.rs)<br>[src/mcp/server/context_tools.rs](../../../../sources/majiayu000__remem/src/mcp/server/context_tools.rs)<br>[src/mcp/server/errors.rs](../../../../sources/majiayu000__remem/src/mcp/server/errors.rs)<br>[src/mcp/server/raw_tools.rs](../../../../sources/majiayu000__remem/src/mcp/server/raw_tools.rs)<br>[src/mcp/server/runtime.rs](../../../../sources/majiayu000__remem/src/mcp/server/runtime.rs) |
| retrieval | 233 | [SPEC-memory-library-hardening-2026-05-16.md](../../../../sources/majiayu000__remem/SPEC-memory-library-hardening-2026-05-16.md)<br>[SPEC-memory-system-v2-no-compat-2026-05-08.md](../../../../sources/majiayu000__remem/SPEC-memory-system-v2-no-compat-2026-05-08.md)<br>[SPEC-memory-system-v2.1-revisions-2026-05-08.md](../../../../sources/majiayu000__remem/SPEC-memory-system-v2.1-revisions-2026-05-08.md)<br>[SPEC-raw-archive-vs-curated-memory-2026-04-22.md](../../../../sources/majiayu000__remem/SPEC-raw-archive-vs-curated-memory-2026-04-22.md)<br>[调研报告-claude-memory-mcp生态.md](../../../../sources/majiayu000__remem/调研报告-claude-memory-mcp生态.md)<br>[tests/vector_benchmark.rs](../../../../sources/majiayu000__remem/tests/vector_benchmark.rs)<br>[src/memory_candidate.rs](../../../../sources/majiayu000__remem/src/memory_candidate.rs)<br>[src/memory.rs](../../../../sources/majiayu000__remem/src/memory.rs) |
| spec | 67 | [SPEC-audit-remediation-2026-05-29.md](../../../../sources/majiayu000__remem/SPEC-audit-remediation-2026-05-29.md)<br>[SPEC-benchmark.md](../../../../sources/majiayu000__remem/SPEC-benchmark.md)<br>[SPEC-core-refactor-2026-03-26.md](../../../../sources/majiayu000__remem/SPEC-core-refactor-2026-03-26.md)<br>[SPEC-eval.md](../../../../sources/majiayu000__remem/SPEC-eval.md)<br>[SPEC-growth.md](../../../../sources/majiayu000__remem/SPEC-growth.md)<br>[SPEC-memory-library-hardening-2026-05-16.md](../../../../sources/majiayu000__remem/SPEC-memory-library-hardening-2026-05-16.md)<br>[SPEC-memory-system-v2-no-compat-2026-05-08.md](../../../../sources/majiayu000__remem/SPEC-memory-system-v2-no-compat-2026-05-08.md)<br>[SPEC-memory-system-v2.1-revisions-2026-05-08.md](../../../../sources/majiayu000__remem/SPEC-memory-system-v2.1-revisions-2026-05-08.md) |
| eval | 252 | [SPEC-audit-remediation-2026-05-29.md](../../../../sources/majiayu000__remem/SPEC-audit-remediation-2026-05-29.md)<br>[SPEC-benchmark.md](../../../../sources/majiayu000__remem/SPEC-benchmark.md)<br>[SPEC-core-refactor-2026-03-26.md](../../../../sources/majiayu000__remem/SPEC-core-refactor-2026-03-26.md)<br>[SPEC-eval.md](../../../../sources/majiayu000__remem/SPEC-eval.md)<br>[SPEC-growth.md](../../../../sources/majiayu000__remem/SPEC-growth.md)<br>[SPEC-memory-library-hardening-2026-05-16.md](../../../../sources/majiayu000__remem/SPEC-memory-library-hardening-2026-05-16.md)<br>[SPEC-memory-system-v2-no-compat-2026-05-08.md](../../../../sources/majiayu000__remem/SPEC-memory-system-v2-no-compat-2026-05-08.md)<br>[SPEC-memory-system-v2.1-revisions-2026-05-08.md](../../../../sources/majiayu000__remem/SPEC-memory-system-v2.1-revisions-2026-05-08.md) |
| security | 7 | [SECURITY.md](../../../../sources/majiayu000__remem/SECURITY.md)<br>[SPEC-audit-remediation-2026-05-29.md](../../../../sources/majiayu000__remem/SPEC-audit-remediation-2026-05-29.md)<br>[src/memory/scope_cleanup/audit.rs](../../../../sources/majiayu000__remem/src/memory/scope_cleanup/audit.rs)<br>[src/context/audit.rs](../../../../sources/majiayu000__remem/src/context/audit.rs)<br>[src/context/policy.rs](../../../../sources/majiayu000__remem/src/context/policy.rs)<br>[src/api/auth.rs](../../../../sources/majiayu000__remem/src/api/auth.rs)<br>[docs/audit-2026-05-29.md](../../../../sources/majiayu000__remem/docs/audit-2026-05-29.md) |
| ci | 6 | [scripts/ci/check_plugin_version_sync.py](../../../../sources/majiayu000__remem/scripts/ci/check_plugin_version_sync.py)<br>[scripts/ci/check_version_bump.py](../../../../sources/majiayu000__remem/scripts/ci/check_version_bump.py)<br>[scripts/ci/generate_plugin_release_manifest.py](../../../../sources/majiayu000__remem/scripts/ci/generate_plugin_release_manifest.py)<br>[.github/workflows/ci.yml](../../../../sources/majiayu000__remem/.github/workflows/ci.yml)<br>[.github/workflows/pages.yml](../../../../sources/majiayu000__remem/.github/workflows/pages.yml)<br>[.github/workflows/release.yml](../../../../sources/majiayu000__remem/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 2 | [AGENTS.md](../../../../sources/majiayu000__remem/AGENTS.md)<br>[CLAUDE.md](../../../../sources/majiayu000__remem/CLAUDE.md) |
| docs | 97 | [README.md](../../../../sources/majiayu000__remem/README.md)<br>[README.zh-CN.md](../../../../sources/majiayu000__remem/README.zh-CN.md)<br>[site/favicon.svg](../../../../sources/majiayu000__remem/site/favicon.svg)<br>[site/index.html](../../../../sources/majiayu000__remem/site/index.html)<br>[site/assets/app.js](../../../../sources/majiayu000__remem/site/assets/app.js)<br>[site/assets/remem-demo.gif](../../../../sources/majiayu000__remem/site/assets/remem-demo.gif)<br>[site/assets/styles.css](../../../../sources/majiayu000__remem/site/assets/styles.css)<br>[plugins/remem/README.md](../../../../sources/majiayu000__remem/plugins/remem/README.md) |
| config | 3 | [Cargo.lock](../../../../sources/majiayu000__remem/Cargo.lock)<br>[Cargo.toml](../../../../sources/majiayu000__remem/Cargo.toml)<br>[npm/remem/package.json](../../../../sources/majiayu000__remem/npm/remem/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 252 | [SPEC-audit-remediation-2026-05-29.md](../../../../sources/majiayu000__remem/SPEC-audit-remediation-2026-05-29.md)<br>[SPEC-benchmark.md](../../../../sources/majiayu000__remem/SPEC-benchmark.md)<br>[SPEC-core-refactor-2026-03-26.md](../../../../sources/majiayu000__remem/SPEC-core-refactor-2026-03-26.md)<br>[SPEC-eval.md](../../../../sources/majiayu000__remem/SPEC-eval.md)<br>[SPEC-growth.md](../../../../sources/majiayu000__remem/SPEC-growth.md)<br>[SPEC-memory-library-hardening-2026-05-16.md](../../../../sources/majiayu000__remem/SPEC-memory-library-hardening-2026-05-16.md) |
| CI workflows | 6 | [scripts/ci/check_plugin_version_sync.py](../../../../sources/majiayu000__remem/scripts/ci/check_plugin_version_sync.py)<br>[scripts/ci/check_version_bump.py](../../../../sources/majiayu000__remem/scripts/ci/check_version_bump.py)<br>[scripts/ci/generate_plugin_release_manifest.py](../../../../sources/majiayu000__remem/scripts/ci/generate_plugin_release_manifest.py)<br>[.github/workflows/ci.yml](../../../../sources/majiayu000__remem/.github/workflows/ci.yml)<br>[.github/workflows/pages.yml](../../../../sources/majiayu000__remem/.github/workflows/pages.yml)<br>[.github/workflows/release.yml](../../../../sources/majiayu000__remem/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 7 | [SECURITY.md](../../../../sources/majiayu000__remem/SECURITY.md)<br>[SPEC-audit-remediation-2026-05-29.md](../../../../sources/majiayu000__remem/SPEC-audit-remediation-2026-05-29.md)<br>[src/memory/scope_cleanup/audit.rs](../../../../sources/majiayu000__remem/src/memory/scope_cleanup/audit.rs)<br>[src/context/audit.rs](../../../../sources/majiayu000__remem/src/context/audit.rs)<br>[src/context/policy.rs](../../../../sources/majiayu000__remem/src/context/policy.rs)<br>[src/api/auth.rs](../../../../sources/majiayu000__remem/src/api/auth.rs) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/majiayu000__remem/AGENTS.md)<br>[CLAUDE.md](../../../../sources/majiayu000__remem/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/mcp/mod.rs`, `src/mcp/server.rs`, `src/mcp/types.rs`.
2. Trace execution through entrypoints: `src/main.rs`, `src/mcp/server.rs`, `src/api/server.rs`.
3. Map agent/tool runtime through: `AGENTS.md`, `src/context.rs`, `src/hook_stdin.rs`.
4. Inspect retrieval/memory/indexing through: `SPEC-memory-library-hardening-2026-05-16.md`, `SPEC-memory-system-v2-no-compat-2026-05-08.md`, `SPEC-memory-system-v2.1-revisions-2026-05-08.md`.
5. Verify behavior through test/eval files: `SPEC-audit-remediation-2026-05-29.md`, `SPEC-benchmark.md`, `SPEC-core-refactor-2026-03-26.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Persistent memory for Claude Code and Codex — single Rust binary, automatic context. 핵심 구조 신호는 Rust, Cargo.toml, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
