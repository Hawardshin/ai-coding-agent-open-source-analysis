# lightonai/next-plaid Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

NextPlaid, ColGREP: Multi-vector search, from database to coding agents.

## 요약

- 조사 단위: `sources/lightonai__next-plaid` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 204 files, 37 directories, depth score 113, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=skills/colgrep/SKILL.md, hooks/hook.json, colgrep/src/install/hook.json이고, 의존성 단서는 next, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | lightonai/next-plaid |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 495 |
| Forks | 57 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/lightonai__next-plaid](../../../../sources/lightonai__next-plaid) |
| Existing report | [reports/global-trending/repositories/lightonai__next-plaid.md](../../../global-trending/repositories/lightonai__next-plaid.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 204 / 37 |
| Max observed depth | 5 |
| Top directories | .claude-plugin, .github, colgrep, docs, hooks, next-plaid, next-plaid-api, next-plaid-onnx, scripts, skills |
| Top extensions | .rs: 113, .py: 26, .md: 11, .toml: 11, .yml: 10, .json: 9, .lock: 8, (none): 7, .sh: 3, .svg: 2, .gif: 1, .nix: 1 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 26 |
| .github | ci surface | 1 |
| colgrep | top-level component | 1 |
| hooks | top-level component | 1 |
| next-plaid | top-level component | 1 |
| next-plaid-api | source boundary | 1 |
| next-plaid-onnx | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | all | make all |
| build | Makefile | build | make build |
| build | Makefile | release | make release |
| test | Makefile | test | make test |
| test | Makefile | test-release | make test-release |
| quality | Makefile | lint | make lint |
| quality | Makefile | clippy | make clippy |
| quality | Makefile | fmt-check | make fmt-check |
| quality | Makefile | fmt | make fmt |
| quality | Makefile | check | make check |
| utility | Makefile | clean | make clean |
| utility | Makefile | example | make example |
| utility | Makefile | ci | make ci |
| utility | Makefile | ci-quick | make ci-quick |
| utility | Makefile | kill-api | make kill-api |
| utility | Makefile | ci-index | make ci-index |
| utility | Makefile | ci-api | make ci-api |
| utility | Makefile | ci-onnx | make ci-onnx |
| utility | Makefile | ci-cli | make ci-cli |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | next |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [skills/colgrep/SKILL.md](../../../../sources/lightonai__next-plaid/skills/colgrep/SKILL.md) | agentRuntime signal |
| agentRuntime | [hooks/hook.json](../../../../sources/lightonai__next-plaid/hooks/hook.json) | agentRuntime signal |
| agentRuntime | [colgrep/src/install/hook.json](../../../../sources/lightonai__next-plaid/colgrep/src/install/hook.json) | agentRuntime signal |
| agentRuntime | [colgrep/src/install/SKILL.md](../../../../sources/lightonai__next-plaid/colgrep/src/install/SKILL.md) | agentRuntime signal |
| entrypoints | [next-plaid-api/src/main.rs](../../../../sources/lightonai__next-plaid/next-plaid-api/src/main.rs) | entrypoints signal |
| entrypoints | [next-plaid/src/index.rs](../../../../sources/lightonai__next-plaid/next-plaid/src/index.rs) | entrypoints signal |
| entrypoints | [colgrep/src/cli.rs](../../../../sources/lightonai__next-plaid/colgrep/src/cli.rs) | entrypoints signal |
| entrypoints | [colgrep/src/main.rs](../../../../sources/lightonai__next-plaid/colgrep/src/main.rs) | entrypoints signal |
| config | [Cargo.lock](../../../../sources/lightonai__next-plaid/Cargo.lock) | config signal |
| config | [Cargo.toml](../../../../sources/lightonai__next-plaid/Cargo.toml) | config signal |
| config | [Makefile](../../../../sources/lightonai__next-plaid/Makefile) | config signal |
| config | [next-plaid-onnx/Cargo.toml](../../../../sources/lightonai__next-plaid/next-plaid-onnx/Cargo.toml) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [next-plaid-api/src/main.rs](../../../../sources/lightonai__next-plaid/next-plaid-api/src/main.rs)<br>[next-plaid/src/index.rs](../../../../sources/lightonai__next-plaid/next-plaid/src/index.rs)<br>[colgrep/src/cli.rs](../../../../sources/lightonai__next-plaid/colgrep/src/cli.rs)<br>[colgrep/src/main.rs](../../../../sources/lightonai__next-plaid/colgrep/src/main.rs) |
| agentRuntime | 5 | [skills/colgrep/SKILL.md](../../../../sources/lightonai__next-plaid/skills/colgrep/SKILL.md)<br>[hooks/hook.json](../../../../sources/lightonai__next-plaid/hooks/hook.json)<br>[colgrep/src/install/hook.json](../../../../sources/lightonai__next-plaid/colgrep/src/install/hook.json)<br>[colgrep/src/install/SKILL.md](../../../../sources/lightonai__next-plaid/colgrep/src/install/SKILL.md)<br>[colgrep/src/commands/hooks.rs](../../../../sources/lightonai__next-plaid/colgrep/src/commands/hooks.rs) |
| mcp | 0 | not obvious |
| retrieval | 7 | [next-plaid/src/index.rs](../../../../sources/lightonai__next-plaid/next-plaid/src/index.rs)<br>[colgrep/src/embed.rs](../../../../sources/lightonai__next-plaid/colgrep/src/embed.rs)<br>[colgrep/src/parser/call_graph.rs](../../../../sources/lightonai__next-plaid/colgrep/src/parser/call_graph.rs)<br>[colgrep/src/index/mod.rs](../../../../sources/lightonai__next-plaid/colgrep/src/index/mod.rs)<br>[colgrep/src/index/paths.rs](../../../../sources/lightonai__next-plaid/colgrep/src/index/paths.rs)<br>[colgrep/src/index/state.rs](../../../../sources/lightonai__next-plaid/colgrep/src/index/state.rs)<br>[colgrep/src/index/worktree.rs](../../../../sources/lightonai__next-plaid/colgrep/src/index/worktree.rs) |
| spec | 0 | not obvious |
| eval | 55 | [scripts/run-api-tests.sh](../../../../sources/lightonai__next-plaid/scripts/run-api-tests.sh)<br>[next-plaid-onnx/python/tests/__init__.py](../../../../sources/lightonai__next-plaid/next-plaid-onnx/python/tests/__init__.py)<br>[next-plaid-onnx/python/tests/test_cli.py](../../../../sources/lightonai__next-plaid/next-plaid-onnx/python/tests/test_cli.py)<br>[next-plaid-api/tests/integration_tests.rs](../../../../sources/lightonai__next-plaid/next-plaid-api/tests/integration_tests.rs)<br>[next-plaid-api/tests/pyproject.toml](../../../../sources/lightonai__next-plaid/next-plaid-api/tests/pyproject.toml)<br>[next-plaid-api/tests/start_from_scratch_env_test.rs](../../../../sources/lightonai__next-plaid/next-plaid-api/tests/start_from_scratch_env_test.rs)<br>[next-plaid-api/tests/test_api.py](../../../../sources/lightonai__next-plaid/next-plaid-api/tests/test_api.py)<br>[next-plaid-api/tests/uv.lock](../../../../sources/lightonai__next-plaid/next-plaid-api/tests/uv.lock) |
| security | 1 | [colgrep/src/parser/tests/test_recursion_guard.rs](../../../../sources/lightonai__next-plaid/colgrep/src/parser/tests/test_recursion_guard.rs) |
| ci | 7 | [.github/workflows/ci.yml](../../../../sources/lightonai__next-plaid/.github/workflows/ci.yml)<br>[.github/workflows/cli-e2e.yml](../../../../sources/lightonai__next-plaid/.github/workflows/cli-e2e.yml)<br>[.github/workflows/docker-release.yml](../../../../sources/lightonai__next-plaid/.github/workflows/docker-release.yml)<br>[.github/workflows/docs.yml](../../../../sources/lightonai__next-plaid/.github/workflows/docs.yml)<br>[.github/workflows/python-sdk-release.yml](../../../../sources/lightonai__next-plaid/.github/workflows/python-sdk-release.yml)<br>[.github/workflows/release.yml](../../../../sources/lightonai__next-plaid/.github/workflows/release.yml)<br>[.github/workflows/update-homebrew-tap.yml](../../../../sources/lightonai__next-plaid/.github/workflows/update-homebrew-tap.yml) |
| container | 4 | [docker-compose.cuda.local.yml](../../../../sources/lightonai__next-plaid/docker-compose.cuda.local.yml)<br>[docker-compose.cuda.yml](../../../../sources/lightonai__next-plaid/docker-compose.cuda.yml)<br>[docker-compose.yml](../../../../sources/lightonai__next-plaid/docker-compose.yml)<br>[next-plaid-api/Dockerfile](../../../../sources/lightonai__next-plaid/next-plaid-api/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 22 | [README.md](../../../../sources/lightonai__next-plaid/README.md)<br>[next-plaid-onnx/README.md](../../../../sources/lightonai__next-plaid/next-plaid-onnx/README.md)<br>[next-plaid-onnx/python/README.md](../../../../sources/lightonai__next-plaid/next-plaid-onnx/python/README.md)<br>[next-plaid-api/README.md](../../../../sources/lightonai__next-plaid/next-plaid-api/README.md)<br>[next-plaid-api/python-sdk/README.md](../../../../sources/lightonai__next-plaid/next-plaid-api/python-sdk/README.md)<br>[next-plaid/README.md](../../../../sources/lightonai__next-plaid/next-plaid/README.md)<br>[docs/build_docs.py](../../../../sources/lightonai__next-plaid/docs/build_docs.py)<br>[docs/colgrep-bench-dark.svg](../../../../sources/lightonai__next-plaid/docs/colgrep-bench-dark.svg) |
| config | 19 | [Cargo.lock](../../../../sources/lightonai__next-plaid/Cargo.lock)<br>[Cargo.toml](../../../../sources/lightonai__next-plaid/Cargo.toml)<br>[Makefile](../../../../sources/lightonai__next-plaid/Makefile)<br>[next-plaid-onnx/Cargo.toml](../../../../sources/lightonai__next-plaid/next-plaid-onnx/Cargo.toml)<br>[next-plaid-onnx/python/pyproject.toml](../../../../sources/lightonai__next-plaid/next-plaid-onnx/python/pyproject.toml)<br>[next-plaid-onnx/python/uv.lock](../../../../sources/lightonai__next-plaid/next-plaid-onnx/python/uv.lock)<br>[next-plaid-api/Cargo.toml](../../../../sources/lightonai__next-plaid/next-plaid-api/Cargo.toml)<br>[next-plaid-api/tests/pyproject.toml](../../../../sources/lightonai__next-plaid/next-plaid-api/tests/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 55 | [scripts/run-api-tests.sh](../../../../sources/lightonai__next-plaid/scripts/run-api-tests.sh)<br>[next-plaid-onnx/python/tests/__init__.py](../../../../sources/lightonai__next-plaid/next-plaid-onnx/python/tests/__init__.py)<br>[next-plaid-onnx/python/tests/test_cli.py](../../../../sources/lightonai__next-plaid/next-plaid-onnx/python/tests/test_cli.py)<br>[next-plaid-api/tests/integration_tests.rs](../../../../sources/lightonai__next-plaid/next-plaid-api/tests/integration_tests.rs)<br>[next-plaid-api/tests/pyproject.toml](../../../../sources/lightonai__next-plaid/next-plaid-api/tests/pyproject.toml)<br>[next-plaid-api/tests/start_from_scratch_env_test.rs](../../../../sources/lightonai__next-plaid/next-plaid-api/tests/start_from_scratch_env_test.rs) |
| CI workflows | 7 | [.github/workflows/ci.yml](../../../../sources/lightonai__next-plaid/.github/workflows/ci.yml)<br>[.github/workflows/cli-e2e.yml](../../../../sources/lightonai__next-plaid/.github/workflows/cli-e2e.yml)<br>[.github/workflows/docker-release.yml](../../../../sources/lightonai__next-plaid/.github/workflows/docker-release.yml)<br>[.github/workflows/docs.yml](../../../../sources/lightonai__next-plaid/.github/workflows/docs.yml)<br>[.github/workflows/python-sdk-release.yml](../../../../sources/lightonai__next-plaid/.github/workflows/python-sdk-release.yml)<br>[.github/workflows/release.yml](../../../../sources/lightonai__next-plaid/.github/workflows/release.yml) |
| Containers / deploy | 4 | [docker-compose.cuda.local.yml](../../../../sources/lightonai__next-plaid/docker-compose.cuda.local.yml)<br>[docker-compose.cuda.yml](../../../../sources/lightonai__next-plaid/docker-compose.cuda.yml)<br>[docker-compose.yml](../../../../sources/lightonai__next-plaid/docker-compose.yml)<br>[next-plaid-api/Dockerfile](../../../../sources/lightonai__next-plaid/next-plaid-api/Dockerfile) |
| Security / policy | 1 | [colgrep/src/parser/tests/test_recursion_guard.rs](../../../../sources/lightonai__next-plaid/colgrep/src/parser/tests/test_recursion_guard.rs) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `skills/colgrep/SKILL.md`, `hooks/hook.json`, `colgrep/src/install/hook.json`.
2. Trace execution through entrypoints: `next-plaid-api/src/main.rs`, `next-plaid/src/index.rs`, `colgrep/src/cli.rs`.
3. Map agent/tool runtime through: `skills/colgrep/SKILL.md`, `hooks/hook.json`, `colgrep/src/install/hook.json`.
4. Inspect retrieval/memory/indexing through: `next-plaid/src/index.rs`, `colgrep/src/embed.rs`, `colgrep/src/parser/call_graph.rs`.
5. Verify behavior through test/eval files: `scripts/run-api-tests.sh`, `next-plaid-onnx/python/tests/__init__.py`, `next-plaid-onnx/python/tests/test_cli.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 NextPlaid, ColGREP Multi vector search, from database to coding agents.. 핵심 구조 신호는 Rust, Cargo.toml, docker-compose.yml, Makefile, README.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
