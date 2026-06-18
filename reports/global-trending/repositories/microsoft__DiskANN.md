# microsoft/DiskANN

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/microsoft/DiskANN |
| local path | sources/microsoft__DiskANN |
| HEAD | 3aa44ac |
| stars/forks | 1851 / 427 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-18T00:19:41Z |
| trendScore / priorityScore | 133 / 362 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Observability / evaluation | 280 | diskann-benchmark-runner/tests/regression/check-run-error-2/README.md, diskann-benchmark-runner/tests/regression/check-run-error-3/README.md, diskann-benchmark-runner/tests/regression/check-verify-2/README.md |
| Data / ML platform | 107 | diskann-benchmark/README.md, vectorset/README.md, diskann-disk/README.md |
| Database / data infrastructure | 6 | vectorset/README.md, diskann-garnet/README.md, README.md |
| Developer tools / DX | 6 | diskann-benchmark/README.md, agents.md |
| RAG / retrieval / knowledge | 6 | diskann-disk/README.md, README.md |
| AI agent / orchestration | 4 | agents.md |
| Coding agent / software automation | 4 | diskann-benchmark/README.md, README.md |
| Cloud native / infrastructure | 3 | diskann-label-filter/README.md, diskann-label-filter/examples/print_query.rs |
| MCP / agent interoperability | 1 |  |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, vectorSearch |
| stacks | Rust |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1186 |
| manifests | 40 |
| docs | 59 |
| tests | 329 |
| ci/ops | 6 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | DiskANN3: A Composable Vector Indexing Library | DiskANN3: A Composable Vector Indexing Library / Getting Started / Legacy C++ Code | DiskANN3 A Composable Vector Indexing Library DiskANN3 is a composable library for bringing scalable, accurate and cost effective vector indexing to multiple databases. It draws on research from the DiskANN project. See the research overview https //github.com/microsoft/DiskANN/wiki/DiskANN Project and Research Overview 2018%E2%80%90present page for more details and references. To use DiskANN3 in your system, you would implement the DataProvider trait for your store to describe how index terms such as vectors, adjacency lists should be store and retrieved. DiskANN3 provides vector update and query API to users and internally uses the implementation of DataProvider trait to serve these reques |


## Key Files

### Manifests

- diskann-benchmark-runner/tests/benchmark/test-0/README.md
- diskann-benchmark-runner/tests/benchmark/test-1/README.md
- diskann-benchmark-runner/tests/benchmark/test-2/README.md
- diskann-benchmark-runner/tests/benchmark/test-3/README.md
- diskann-benchmark-runner/tests/benchmark/test-4/README.md
- diskann-benchmark-runner/tests/benchmark/test-debug-mode-error/README.md
- diskann-benchmark-runner/tests/benchmark/test-deserialization-error-0/README.md
- diskann-benchmark-runner/tests/benchmark/test-mismatch-0/README.md
- diskann-benchmark-runner/tests/benchmark/test-mismatch-1/README.md
- diskann-benchmark-runner/tests/benchmark/test-overload-0/README.md
- diskann-benchmark-runner/tests/benchmark/test-success-0/README.md
- diskann-benchmark-runner/tests/benchmark/test-success-1/README.md
- diskann-benchmark-runner/tests/regression/check-run-error-0/README.md
- diskann-benchmark-runner/tests/regression/check-run-error-1/README.md
- diskann-benchmark-runner/tests/regression/check-run-error-2/README.md
- diskann-benchmark-runner/tests/regression/check-run-error-3/README.md
- diskann-benchmark-runner/tests/regression/check-run-fail-0/README.md
- diskann-benchmark-runner/tests/regression/check-run-pass-0/README.md
- diskann-benchmark-runner/tests/regression/check-skeleton-0/README.md
- diskann-benchmark-runner/tests/regression/check-tolerances-0/README.md


### Spec / Docs / Prompt Artifacts

- agents.md


### Agent Instruction Files

- agents.md


## Top Directories

| dir | count |
| --- | --- |
| diskann-quantization | 177 |
| diskann-benchmark-runner | 149 |
| diskann | 116 |
| diskann-wide | 107 |
| diskann-providers | 89 |
| diskann-benchmark-core | 87 |
| diskann-disk | 85 |
| diskann-benchmark | 83 |
| diskann-label-filter | 53 |
| test_data | 51 |
| diskann-vector | 38 |
| diskann-tools | 33 |
| .github | 16 |
| diskann-garnet | 16 |


## Extension Distribution

| ext | count |
| --- | --- |
| .rs | 746 |
| .json | 133 |
| .txt | 93 |
| .md | 58 |
| .toml | 32 |
| .stderr | 28 |
| .bin | 23 |
| .yaml | 18 |
| .index | 9 |
| .yml | 9 |
| .fbin | 7 |
| [no-ext] | 6 |
| .sh | 5 |
| .gt10 | 4 |
| .jsonl | 3 |
| .fbs | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
