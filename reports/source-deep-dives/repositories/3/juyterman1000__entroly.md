# juyterman1000/entroly Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Cut your Claude / OpenAI / Gemini bill 70–95% on AI coding. Local proxy that compresses context, keeps provider caches hot, and verifies LLM output ($0 hallucination guard). Drop-in for Cursor, Claude Code, Codex, Aider + 34 more and custom providers — 30s, no code changes

## 요약

- 조사 단위: `sources/juyterman1000__entroly` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 672 files, 60 directories, depth score 130, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, run_real_mcp_test.py, tests/test_mcp_protocol.py이고, 의존성 단서는 claude, mcp, express, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | juyterman1000/entroly |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 413 |
| Forks | 64 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/juyterman1000__entroly](../../../../sources/juyterman1000__entroly) |
| Existing report | [reports/global-trending/repositories/juyterman1000__entroly.md](../../../global-trending/repositories/juyterman1000__entroly.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 672 / 60 |
| Max observed depth | 4 |
| Top directories | .claude, .claude-plugin, .devcontainer, .githooks, .github, .kiro, algorithms, bench, benchmarks, cookbook, docs, entroly, entroly-core, entroly-qccr, entroly-wasm, examples, packaging, proofs, research, scripts |
| Top extensions | .py: 344, .rs: 84, .md: 66, .json: 52, .js: 37, (none): 18, .html: 12, .svg: 9, .yml: 9, .jsonl: 8, .toml: 7, .sh: 6 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 47 |
| docs | documentation surface | 40 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| algorithms | top-level component | 1 |
| bench | validation surface | 1 |
| benchmarks | validation surface | 1 |
| cookbook | top-level component | 1 |
| entroly | top-level component | 1 |
| entroly-core | top-level component | 1 |
| entroly-qccr | top-level component | 1 |
| entroly-wasm | top-level component | 1 |
| examples | top-level component | 1 |
| packaging | top-level component | 1 |
| proofs | top-level component | 1 |
| research | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | entroly | entroly |
| utility | pyproject.toml | entroly-py | entroly-py |
| container | pyproject.toml | entroly-docker | entroly-docker |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | claude |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | express |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [.mcp.json](../../../../sources/juyterman1000__entroly/.mcp.json) | mcp signal |
| mcp | [run_real_mcp_test.py](../../../../sources/juyterman1000__entroly/run_real_mcp_test.py) | mcp signal |
| mcp | [tests/test_mcp_protocol.py](../../../../sources/juyterman1000__entroly/tests/test_mcp_protocol.py) | mcp signal |
| mcp | [tests/test_mcp_startup.py](../../../../sources/juyterman1000__entroly/tests/test_mcp_startup.py) | mcp signal |
| agentRuntime | [entroly-wasm/js/context_receipts.js](../../../../sources/juyterman1000__entroly/entroly-wasm/js/context_receipts.js) | agentRuntime signal |
| agentRuntime | [entroly-wasm/js/skills.js](../../../../sources/juyterman1000__entroly/entroly-wasm/js/skills.js) | agentRuntime signal |
| agentRuntime | [entroly-core/src/context_receipts.rs](../../../../sources/juyterman1000__entroly/entroly-core/src/context_receipts.rs) | agentRuntime signal |
| agentRuntime | [entroly-core/src/memory/consolidation.rs](../../../../sources/juyterman1000__entroly/entroly-core/src/memory/consolidation.rs) | agentRuntime signal |
| entrypoints | [entroly-wasm/js/server.js](../../../../sources/juyterman1000__entroly/entroly-wasm/js/server.js) | entrypoints signal |
| entrypoints | [entroly-wasm/bin/entroly-wasm.js](../../../../sources/juyterman1000__entroly/entroly-wasm/bin/entroly-wasm.js) | entrypoints signal |
| entrypoints | [entroly-core/src/bin/entroly-rs.rs](../../../../sources/juyterman1000__entroly/entroly-core/src/bin/entroly-rs.rs) | entrypoints signal |
| entrypoints | [entroly/__main__.py](../../../../sources/juyterman1000__entroly/entroly/__main__.py) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 8 | [entroly-wasm/js/server.js](../../../../sources/juyterman1000__entroly/entroly-wasm/js/server.js)<br>[entroly-wasm/bin/entroly-wasm.js](../../../../sources/juyterman1000__entroly/entroly-wasm/bin/entroly-wasm.js)<br>[entroly-core/src/bin/entroly-rs.rs](../../../../sources/juyterman1000__entroly/entroly-core/src/bin/entroly-rs.rs)<br>[entroly/__main__.py](../../../../sources/juyterman1000__entroly/entroly/__main__.py)<br>[entroly/server.py](../../../../sources/juyterman1000__entroly/entroly/server.py)<br>[entroly/npm-alias/bin/entroly.js](../../../../sources/juyterman1000__entroly/entroly/npm-alias/bin/entroly.js)<br>[entroly/npm/bin/entroly-mcp.js](../../../../sources/juyterman1000__entroly/entroly/npm/bin/entroly-mcp.js)<br>[entroly/bin/README.md](../../../../sources/juyterman1000__entroly/entroly/bin/README.md) |
| agentRuntime | 31 | [entroly-wasm/js/context_receipts.js](../../../../sources/juyterman1000__entroly/entroly-wasm/js/context_receipts.js)<br>[entroly-wasm/js/skills.js](../../../../sources/juyterman1000__entroly/entroly-wasm/js/skills.js)<br>[entroly-core/src/context_receipts.rs](../../../../sources/juyterman1000__entroly/entroly-core/src/context_receipts.rs)<br>[entroly-core/src/memory/consolidation.rs](../../../../sources/juyterman1000__entroly/entroly-core/src/memory/consolidation.rs)<br>[entroly-core/src/memory/episode.rs](../../../../sources/juyterman1000__entroly/entroly-core/src/memory/episode.rs)<br>[entroly-core/src/memory/kanerva.rs](../../../../sources/juyterman1000__entroly/entroly-core/src/memory/kanerva.rs)<br>[entroly-core/src/memory/lsh.rs](../../../../sources/juyterman1000__entroly/entroly-core/src/memory/lsh.rs)<br>[entroly-core/src/memory/mod.rs](../../../../sources/juyterman1000__entroly/entroly-core/src/memory/mod.rs) |
| mcp | 7 | [.mcp.json](../../../../sources/juyterman1000__entroly/.mcp.json)<br>[run_real_mcp_test.py](../../../../sources/juyterman1000__entroly/run_real_mcp_test.py)<br>[tests/test_mcp_protocol.py](../../../../sources/juyterman1000__entroly/tests/test_mcp_protocol.py)<br>[tests/test_mcp_startup.py](../../../../sources/juyterman1000__entroly/tests/test_mcp_startup.py)<br>[entroly/integrate_entroly_mcp.py](../../../../sources/juyterman1000__entroly/entroly/integrate_entroly_mcp.py)<br>[entroly/npm/bin/entroly-mcp.js](../../../../sources/juyterman1000__entroly/entroly/npm/bin/entroly-mcp.js)<br>[docs/mcp-server-guide.html](../../../../sources/juyterman1000__entroly/docs/mcp-server-guide.html) |
| retrieval | 19 | [scripts/vault_graph_cli.py](../../../../sources/juyterman1000__entroly/scripts/vault_graph_cli.py)<br>[entroly-wasm/index.d.ts](../../../../sources/juyterman1000__entroly/entroly-wasm/index.d.ts)<br>[entroly-wasm/index.js](../../../../sources/juyterman1000__entroly/entroly-wasm/index.js)<br>[entroly-wasm/js/auto_index.js](../../../../sources/juyterman1000__entroly/entroly-wasm/js/auto_index.js)<br>[entroly-core/src/memory/consolidation.rs](../../../../sources/juyterman1000__entroly/entroly-core/src/memory/consolidation.rs)<br>[entroly-core/src/memory/episode.rs](../../../../sources/juyterman1000__entroly/entroly-core/src/memory/episode.rs)<br>[entroly-core/src/memory/kanerva.rs](../../../../sources/juyterman1000__entroly/entroly-core/src/memory/kanerva.rs)<br>[entroly-core/src/memory/lsh.rs](../../../../sources/juyterman1000__entroly/entroly-core/src/memory/lsh.rs) |
| spec | 1 | [docs/architecture.md](../../../../sources/juyterman1000__entroly/docs/architecture.md) |
| eval | 186 | [run_real_mcp_test.py](../../../../sources/juyterman1000__entroly/run_real_mcp_test.py)<br>[run_real_proxy_test.py](../../../../sources/juyterman1000__entroly/run_real_proxy_test.py)<br>[tests/_check_learning.py](../../../../sources/juyterman1000__entroly/tests/_check_learning.py)<br>[tests/_check_vault.py](../../../../sources/juyterman1000__entroly/tests/_check_vault.py)<br>[tests/_pilot.py](../../../../sources/juyterman1000__entroly/tests/_pilot.py)<br>[tests/_proxy_e2e.py](../../../../sources/juyterman1000__entroly/tests/_proxy_e2e.py)<br>[tests/_run_bench.py](../../../../sources/juyterman1000__entroly/tests/_run_bench.py)<br>[tests/_run_full.py](../../../../sources/juyterman1000__entroly/tests/_run_full.py) |
| security | 21 | [SECURITY.md](../../../../sources/juyterman1000__entroly/SECURITY.md)<br>[tests/test_auth.py](../../../../sources/juyterman1000__entroly/tests/test_auth.py)<br>[tests/test_cli_audit.py](../../../../sources/juyterman1000__entroly/tests/test_cli_audit.py)<br>[tests/test_compliance_metadata.py](../../../../sources/juyterman1000__entroly/tests/test_compliance_metadata.py)<br>[tests/test_recovery_policy_benchmark.py](../../../../sources/juyterman1000__entroly/tests/test_recovery_policy_benchmark.py)<br>[tests/test_security_hardening.py](../../../../sources/juyterman1000__entroly/tests/test_security_hardening.py)<br>[tests/test_subscription_guard.py](../../../../sources/juyterman1000__entroly/tests/test_subscription_guard.py)<br>[entroly-wasm/test_security.js](../../../../sources/juyterman1000__entroly/entroly-wasm/test_security.js) |
| ci | 7 | [.github/workflows/benchmark.yml](../../../../sources/juyterman1000__entroly/.github/workflows/benchmark.yml)<br>[.github/workflows/ci.yml](../../../../sources/juyterman1000__entroly/.github/workflows/ci.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/juyterman1000__entroly/.github/workflows/docker-publish.yml)<br>[.github/workflows/entroly-cost-check.yml](../../../../sources/juyterman1000__entroly/.github/workflows/entroly-cost-check.yml)<br>[.github/workflows/entroly-publish.yml](../../../../sources/juyterman1000__entroly/.github/workflows/entroly-publish.yml)<br>[.github/workflows/publish-core-wheels.yml](../../../../sources/juyterman1000__entroly/.github/workflows/publish-core-wheels.yml)<br>[.github/workflows/release-binary.yml](../../../../sources/juyterman1000__entroly/.github/workflows/release-binary.yml) |
| container | 3 | [docker-compose.yml](../../../../sources/juyterman1000__entroly/docker-compose.yml)<br>[Dockerfile](../../../../sources/juyterman1000__entroly/Dockerfile)<br>[Dockerfile.entroly](../../../../sources/juyterman1000__entroly/Dockerfile.entroly) |
| instruction | 1 | [CLAUDE.md](../../../../sources/juyterman1000__entroly/CLAUDE.md) |
| docs | 76 | [README.md](../../../../sources/juyterman1000__entroly/README.md)<br>[research/README.md](../../../../sources/juyterman1000__entroly/research/README.md)<br>[proofs/README.md](../../../../sources/juyterman1000__entroly/proofs/README.md)<br>[proofs/knapsack/README.md](../../../../sources/juyterman1000__entroly/proofs/knapsack/README.md)<br>[proofs/bipt/README.md](../../../../sources/juyterman1000__entroly/proofs/bipt/README.md)<br>[packaging/scoop/README.md](../../../../sources/juyterman1000__entroly/packaging/scoop/README.md)<br>[packaging/nix/README.md](../../../../sources/juyterman1000__entroly/packaging/nix/README.md)<br>[packaging/homebrew/README.md](../../../../sources/juyterman1000__entroly/packaging/homebrew/README.md) |
| config | 12 | [pyproject.toml](../../../../sources/juyterman1000__entroly/pyproject.toml)<br>[entroly-wasm/Cargo.lock](../../../../sources/juyterman1000__entroly/entroly-wasm/Cargo.lock)<br>[entroly-wasm/Cargo.toml](../../../../sources/juyterman1000__entroly/entroly-wasm/Cargo.toml)<br>[entroly-wasm/package.json](../../../../sources/juyterman1000__entroly/entroly-wasm/package.json)<br>[entroly-qccr/Cargo.lock](../../../../sources/juyterman1000__entroly/entroly-qccr/Cargo.lock)<br>[entroly-qccr/Cargo.toml](../../../../sources/juyterman1000__entroly/entroly-qccr/Cargo.toml)<br>[entroly-core/Cargo.lock](../../../../sources/juyterman1000__entroly/entroly-core/Cargo.lock)<br>[entroly-core/Cargo.toml](../../../../sources/juyterman1000__entroly/entroly-core/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 186 | [run_real_mcp_test.py](../../../../sources/juyterman1000__entroly/run_real_mcp_test.py)<br>[run_real_proxy_test.py](../../../../sources/juyterman1000__entroly/run_real_proxy_test.py)<br>[tests/_check_learning.py](../../../../sources/juyterman1000__entroly/tests/_check_learning.py)<br>[tests/_check_vault.py](../../../../sources/juyterman1000__entroly/tests/_check_vault.py)<br>[tests/_pilot.py](../../../../sources/juyterman1000__entroly/tests/_pilot.py)<br>[tests/_proxy_e2e.py](../../../../sources/juyterman1000__entroly/tests/_proxy_e2e.py) |
| CI workflows | 7 | [.github/workflows/benchmark.yml](../../../../sources/juyterman1000__entroly/.github/workflows/benchmark.yml)<br>[.github/workflows/ci.yml](../../../../sources/juyterman1000__entroly/.github/workflows/ci.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/juyterman1000__entroly/.github/workflows/docker-publish.yml)<br>[.github/workflows/entroly-cost-check.yml](../../../../sources/juyterman1000__entroly/.github/workflows/entroly-cost-check.yml)<br>[.github/workflows/entroly-publish.yml](../../../../sources/juyterman1000__entroly/.github/workflows/entroly-publish.yml)<br>[.github/workflows/publish-core-wheels.yml](../../../../sources/juyterman1000__entroly/.github/workflows/publish-core-wheels.yml) |
| Containers / deploy | 3 | [docker-compose.yml](../../../../sources/juyterman1000__entroly/docker-compose.yml)<br>[Dockerfile](../../../../sources/juyterman1000__entroly/Dockerfile)<br>[Dockerfile.entroly](../../../../sources/juyterman1000__entroly/Dockerfile.entroly) |
| Security / policy | 21 | [SECURITY.md](../../../../sources/juyterman1000__entroly/SECURITY.md)<br>[tests/test_auth.py](../../../../sources/juyterman1000__entroly/tests/test_auth.py)<br>[tests/test_cli_audit.py](../../../../sources/juyterman1000__entroly/tests/test_cli_audit.py)<br>[tests/test_compliance_metadata.py](../../../../sources/juyterman1000__entroly/tests/test_compliance_metadata.py)<br>[tests/test_recovery_policy_benchmark.py](../../../../sources/juyterman1000__entroly/tests/test_recovery_policy_benchmark.py)<br>[tests/test_security_hardening.py](../../../../sources/juyterman1000__entroly/tests/test_security_hardening.py) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/juyterman1000__entroly/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `.mcp.json`, `run_real_mcp_test.py`, `tests/test_mcp_protocol.py`.
2. Trace execution through entrypoints: `entroly-wasm/js/server.js`, `entroly-wasm/bin/entroly-wasm.js`, `entroly-core/src/bin/entroly-rs.rs`.
3. Map agent/tool runtime through: `entroly-wasm/js/context_receipts.js`, `entroly-wasm/js/skills.js`, `entroly-core/src/context_receipts.rs`.
4. Inspect retrieval/memory/indexing through: `scripts/vault_graph_cli.py`, `entroly-wasm/index.d.ts`, `entroly-wasm/index.js`.
5. Verify behavior through test/eval files: `run_real_mcp_test.py`, `run_real_proxy_test.py`, `tests/_check_learning.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Cut your Claude / OpenAI / Gemini bill 70–95% on AI coding. Local proxy that compresses context, keeps provider caches h. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, README.md, CLAUDE.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
