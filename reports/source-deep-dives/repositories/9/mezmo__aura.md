# mezmo/aura Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

AURA is an agentic harness that turns an LLM model into a reliable, autonomous service capable of executing real SRE work. AURA provides the guardrails, API servers, state management, authentication, streaming, error handling, and tool integrations necessary to run AI SRE agents safely in production.

## 요약

- 조사 단위: `sources/mezmo__aura` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 277 files, 55 directories, depth score 126, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/integration/scratchpad-mcp/Dockerfile, tests/integration/scratchpad-mcp/requirements.txt, tests/integration/scratchpad-mcp/server.py이고, 의존성 단서는 mcp, qdrant, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | mezmo/aura |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Rust |
| Stars | 99 |
| Forks | 18 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/mezmo__aura](../../../../sources/mezmo__aura) |
| Existing report | [reports/global-trending/repositories/mezmo__aura.md](../../../global-trending/repositories/mezmo__aura.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 277 / 55 |
| Max observed depth | 6 |
| Top directories | .config, .github, .makefiles, compose, configs, crates, deployment, docs, examples, quickstart, scripts, tests |
| Top extensions | .rs: 156, .md: 30, .toml: 29, .yaml: 14, (none): 14, .yml: 12, .mk: 6, .py: 3, .txt: 3, .example: 2, .js: 2, .sh: 2 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| crates/aura | crates workspace | 32 |
| tests | validation surface | 23 |
| crates/aura-web-server | crates workspace | 21 |
| docs | documentation surface | 15 |
| crates/aura-cli | crates workspace | 13 |
| crates/aura-test-utils | crates workspace | 5 |
| crates/aura-config | crates workspace | 4 |
| examples/quickstart-orchestration-math | examples workspace | 4 |
| crates/aura-events | crates workspace | 2 |
| .github | ci surface | 1 |
| compose | top-level component | 1 |
| configs | top-level component | 1 |
| crates | source boundary | 1 |
| deployment | deployment surface | 1 |
| examples | top-level component | 1 |
| examples/quickstart-k8s-sre | examples workspace | 1 |
| examples/README.md | examples workspace | 1 |
| quickstart | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| quality | package.json | commitlint | commitlint-mzm --format=pretty |
| build | package.json | release | semantic-release |
| build | package.json | release:dry | semantic-release --no-ci --dry-run --branches=${BRANCH_NAME:-main} |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .SILENT | make .SILENT |
| utility | Makefile | help | make help |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build | make build |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | test | make test |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | setup | make setup |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | fmt | make fmt |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | fmt-check | make fmt-check |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | lint | make lint |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | ci | make ci |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | clean | make clean |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | qdrant |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [tests/integration/scratchpad-mcp/Dockerfile](../../../../sources/mezmo__aura/tests/integration/scratchpad-mcp/Dockerfile) | mcp signal |
| mcp | [tests/integration/scratchpad-mcp/requirements.txt](../../../../sources/mezmo__aura/tests/integration/scratchpad-mcp/requirements.txt) | mcp signal |
| mcp | [tests/integration/scratchpad-mcp/server.py](../../../../sources/mezmo__aura/tests/integration/scratchpad-mcp/server.py) | mcp signal |
| mcp | [tests/integration/k8s-sre-mcp/Dockerfile](../../../../sources/mezmo__aura/tests/integration/k8s-sre-mcp/Dockerfile) | mcp signal |
| agentRuntime | [crates/aura-web-server/src/a2a/agent_executor.rs](../../../../sources/mezmo__aura/crates/aura-web-server/src/a2a/agent_executor.rs) | agentRuntime signal |
| agentRuntime | [crates/aura-cli/src/tools/definitions.rs](../../../../sources/mezmo__aura/crates/aura-cli/src/tools/definitions.rs) | agentRuntime signal |
| agentRuntime | [crates/aura-cli/src/tools/diff.rs](../../../../sources/mezmo__aura/crates/aura-cli/src/tools/diff.rs) | agentRuntime signal |
| agentRuntime | [crates/aura-cli/src/tools/display.rs](../../../../sources/mezmo__aura/crates/aura-cli/src/tools/display.rs) | agentRuntime signal |
| entrypoints | [tests/integration/k8s-sre-mcp/server.py](../../../../sources/mezmo__aura/tests/integration/k8s-sre-mcp/server.py) | entrypoints signal |
| entrypoints | [crates/aura-web-server/src/lib.rs](../../../../sources/mezmo__aura/crates/aura-web-server/src/lib.rs) | entrypoints signal |
| entrypoints | [crates/aura-web-server/src/main.rs](../../../../sources/mezmo__aura/crates/aura-web-server/src/main.rs) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/mezmo__aura/CLAUDE.md) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 11 | [tests/integration/scratchpad-mcp/server.py](../../../../sources/mezmo__aura/tests/integration/scratchpad-mcp/server.py)<br>[tests/integration/k8s-sre-mcp/server.py](../../../../sources/mezmo__aura/tests/integration/k8s-sre-mcp/server.py)<br>[crates/aura-web-server/src/lib.rs](../../../../sources/mezmo__aura/crates/aura-web-server/src/lib.rs)<br>[crates/aura-web-server/src/main.rs](../../../../sources/mezmo__aura/crates/aura-web-server/src/main.rs)<br>[crates/aura-test-utils/src/lib.rs](../../../../sources/mezmo__aura/crates/aura-test-utils/src/lib.rs)<br>[crates/aura-events/src/lib.rs](../../../../sources/mezmo__aura/crates/aura-events/src/lib.rs)<br>[crates/aura-config/src/lib.rs](../../../../sources/mezmo__aura/crates/aura-config/src/lib.rs)<br>[crates/aura-cli/src/cli.rs](../../../../sources/mezmo__aura/crates/aura-cli/src/cli.rs) |
| agentRuntime | 22 | [crates/aura-web-server/src/a2a/agent_executor.rs](../../../../sources/mezmo__aura/crates/aura-web-server/src/a2a/agent_executor.rs)<br>[crates/aura-cli/src/tools/definitions.rs](../../../../sources/mezmo__aura/crates/aura-cli/src/tools/definitions.rs)<br>[crates/aura-cli/src/tools/diff.rs](../../../../sources/mezmo__aura/crates/aura-cli/src/tools/diff.rs)<br>[crates/aura-cli/src/tools/display.rs](../../../../sources/mezmo__aura/crates/aura-cli/src/tools/display.rs)<br>[crates/aura-cli/src/tools/execution.rs](../../../../sources/mezmo__aura/crates/aura-cli/src/tools/execution.rs)<br>[crates/aura-cli/src/tools/mod.rs](../../../../sources/mezmo__aura/crates/aura-cli/src/tools/mod.rs)<br>[crates/aura-cli/src/tools/rig_tools.rs](../../../../sources/mezmo__aura/crates/aura-cli/src/tools/rig_tools.rs)<br>[crates/aura/src/tool_call_observer.rs](../../../../sources/mezmo__aura/crates/aura/src/tool_call_observer.rs) |
| mcp | 19 | [tests/integration/scratchpad-mcp/Dockerfile](../../../../sources/mezmo__aura/tests/integration/scratchpad-mcp/Dockerfile)<br>[tests/integration/scratchpad-mcp/requirements.txt](../../../../sources/mezmo__aura/tests/integration/scratchpad-mcp/requirements.txt)<br>[tests/integration/scratchpad-mcp/server.py](../../../../sources/mezmo__aura/tests/integration/scratchpad-mcp/server.py)<br>[tests/integration/k8s-sre-mcp/Dockerfile](../../../../sources/mezmo__aura/tests/integration/k8s-sre-mcp/Dockerfile)<br>[tests/integration/k8s-sre-mcp/requirements.txt](../../../../sources/mezmo__aura/tests/integration/k8s-sre-mcp/requirements.txt)<br>[tests/integration/k8s-sre-mcp/server.py](../../../../sources/mezmo__aura/tests/integration/k8s-sre-mcp/server.py)<br>[tests/integration/k8s-sre-mcp/verbose_data.py](../../../../sources/mezmo__aura/tests/integration/k8s-sre-mcp/verbose_data.py)<br>[examples/quickstart-orchestration-math/math-mcp/Dockerfile](../../../../sources/mezmo__aura/examples/quickstart-orchestration-math/math-mcp/Dockerfile) |
| retrieval | 4 | [crates/aura/src/bedrock_embedding.rs](../../../../sources/mezmo__aura/crates/aura/src/bedrock_embedding.rs)<br>[crates/aura/src/rag_tools.rs](../../../../sources/mezmo__aura/crates/aura/src/rag_tools.rs)<br>[crates/aura/src/vector_dynamic.rs](../../../../sources/mezmo__aura/crates/aura/src/vector_dynamic.rs)<br>[crates/aura/src/vector_store.rs](../../../../sources/mezmo__aura/crates/aura/src/vector_store.rs) |
| spec | 4 | [tests/integration/scratchpad-mcp/requirements.txt](../../../../sources/mezmo__aura/tests/integration/scratchpad-mcp/requirements.txt)<br>[tests/integration/k8s-sre-mcp/requirements.txt](../../../../sources/mezmo__aura/tests/integration/k8s-sre-mcp/requirements.txt)<br>[docs/design/hitl.md](../../../../sources/mezmo__aura/docs/design/hitl.md)<br>[docs/adr/2026-06-16-hitl-approval-architecture.md](../../../../sources/mezmo__aura/docs/adr/2026-06-16-hitl-approval-architecture.md) |
| eval | 35 | [tests/integration/scratchpad-mcp/Dockerfile](../../../../sources/mezmo__aura/tests/integration/scratchpad-mcp/Dockerfile)<br>[tests/integration/scratchpad-mcp/requirements.txt](../../../../sources/mezmo__aura/tests/integration/scratchpad-mcp/requirements.txt)<br>[tests/integration/scratchpad-mcp/server.py](../../../../sources/mezmo__aura/tests/integration/scratchpad-mcp/server.py)<br>[tests/integration/k8s-sre-mcp/Dockerfile](../../../../sources/mezmo__aura/tests/integration/k8s-sre-mcp/Dockerfile)<br>[tests/integration/k8s-sre-mcp/requirements.txt](../../../../sources/mezmo__aura/tests/integration/k8s-sre-mcp/requirements.txt)<br>[tests/integration/k8s-sre-mcp/server.py](../../../../sources/mezmo__aura/tests/integration/k8s-sre-mcp/server.py)<br>[tests/integration/k8s-sre-mcp/verbose_data.py](../../../../sources/mezmo__aura/tests/integration/k8s-sre-mcp/verbose_data.py)<br>[docs/tracing-spans.md](../../../../sources/mezmo__aura/docs/tracing-spans.md) |
| security | 2 | [deployment/helm/aura/templates/secret.yaml](../../../../sources/mezmo__aura/deployment/helm/aura/templates/secret.yaml)<br>[crates/aura/src/orchestration/duplicate_call_guard.rs](../../../../sources/mezmo__aura/crates/aura/src/orchestration/duplicate_call_guard.rs) |
| ci | 2 | [Jenkinsfile](../../../../sources/mezmo__aura/Jenkinsfile)<br>[.github/workflows/cla.yml](../../../../sources/mezmo__aura/.github/workflows/cla.yml) |
| container | 21 | [docker-compose.yml](../../../../sources/mezmo__aura/docker-compose.yml)<br>[Dockerfile](../../../../sources/mezmo__aura/Dockerfile)<br>[tests/integration/scratchpad-mcp/Dockerfile](../../../../sources/mezmo__aura/tests/integration/scratchpad-mcp/Dockerfile)<br>[tests/integration/k8s-sre-mcp/Dockerfile](../../../../sources/mezmo__aura/tests/integration/k8s-sre-mcp/Dockerfile)<br>[examples/quickstart-orchestration-math/docker-compose.yml](../../../../sources/mezmo__aura/examples/quickstart-orchestration-math/docker-compose.yml)<br>[examples/quickstart-orchestration-math/math-mcp/Dockerfile](../../../../sources/mezmo__aura/examples/quickstart-orchestration-math/math-mcp/Dockerfile)<br>[deployment/helm/aura/.helmignore](../../../../sources/mezmo__aura/deployment/helm/aura/.helmignore)<br>[deployment/helm/aura/Chart.yaml](../../../../sources/mezmo__aura/deployment/helm/aura/Chart.yaml) |
| instruction | 1 | [CLAUDE.md](../../../../sources/mezmo__aura/CLAUDE.md) |
| docs | 17 | [README.md](../../../../sources/mezmo__aura/README.md)<br>[examples/README.md](../../../../sources/mezmo__aura/examples/README.md)<br>[examples/quickstart-orchestration-math/README.md](../../../../sources/mezmo__aura/examples/quickstart-orchestration-math/README.md)<br>[examples/quickstart-k8s-sre/README.md](../../../../sources/mezmo__aura/examples/quickstart-k8s-sre/README.md)<br>[docs/a2a-implementation.md](../../../../sources/mezmo__aura/docs/a2a-implementation.md)<br>[docs/ollama-guide.md](../../../../sources/mezmo__aura/docs/ollama-guide.md)<br>[docs/quickstart.md](../../../../sources/mezmo__aura/docs/quickstart.md)<br>[docs/request-lifecycle.md](../../../../sources/mezmo__aura/docs/request-lifecycle.md) |
| config | 12 | [Cargo.lock](../../../../sources/mezmo__aura/Cargo.lock)<br>[Cargo.toml](../../../../sources/mezmo__aura/Cargo.toml)<br>[Makefile](../../../../sources/mezmo__aura/Makefile)<br>[package.json](../../../../sources/mezmo__aura/package.json)<br>[tests/integration/scratchpad-mcp/requirements.txt](../../../../sources/mezmo__aura/tests/integration/scratchpad-mcp/requirements.txt)<br>[tests/integration/k8s-sre-mcp/requirements.txt](../../../../sources/mezmo__aura/tests/integration/k8s-sre-mcp/requirements.txt)<br>[crates/aura-web-server/Cargo.toml](../../../../sources/mezmo__aura/crates/aura-web-server/Cargo.toml)<br>[crates/aura-test-utils/Cargo.toml](../../../../sources/mezmo__aura/crates/aura-test-utils/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 35 | [tests/integration/scratchpad-mcp/Dockerfile](../../../../sources/mezmo__aura/tests/integration/scratchpad-mcp/Dockerfile)<br>[tests/integration/scratchpad-mcp/requirements.txt](../../../../sources/mezmo__aura/tests/integration/scratchpad-mcp/requirements.txt)<br>[tests/integration/scratchpad-mcp/server.py](../../../../sources/mezmo__aura/tests/integration/scratchpad-mcp/server.py)<br>[tests/integration/k8s-sre-mcp/Dockerfile](../../../../sources/mezmo__aura/tests/integration/k8s-sre-mcp/Dockerfile)<br>[tests/integration/k8s-sre-mcp/requirements.txt](../../../../sources/mezmo__aura/tests/integration/k8s-sre-mcp/requirements.txt)<br>[tests/integration/k8s-sre-mcp/server.py](../../../../sources/mezmo__aura/tests/integration/k8s-sre-mcp/server.py) |
| CI workflows | 2 | [Jenkinsfile](../../../../sources/mezmo__aura/Jenkinsfile)<br>[.github/workflows/cla.yml](../../../../sources/mezmo__aura/.github/workflows/cla.yml) |
| Containers / deploy | 21 | [docker-compose.yml](../../../../sources/mezmo__aura/docker-compose.yml)<br>[Dockerfile](../../../../sources/mezmo__aura/Dockerfile)<br>[tests/integration/scratchpad-mcp/Dockerfile](../../../../sources/mezmo__aura/tests/integration/scratchpad-mcp/Dockerfile)<br>[tests/integration/k8s-sre-mcp/Dockerfile](../../../../sources/mezmo__aura/tests/integration/k8s-sre-mcp/Dockerfile)<br>[examples/quickstart-orchestration-math/docker-compose.yml](../../../../sources/mezmo__aura/examples/quickstart-orchestration-math/docker-compose.yml)<br>[examples/quickstart-orchestration-math/math-mcp/Dockerfile](../../../../sources/mezmo__aura/examples/quickstart-orchestration-math/math-mcp/Dockerfile) |
| Security / policy | 2 | [deployment/helm/aura/templates/secret.yaml](../../../../sources/mezmo__aura/deployment/helm/aura/templates/secret.yaml)<br>[crates/aura/src/orchestration/duplicate_call_guard.rs](../../../../sources/mezmo__aura/crates/aura/src/orchestration/duplicate_call_guard.rs) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/mezmo__aura/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/integration/scratchpad-mcp/Dockerfile`, `tests/integration/scratchpad-mcp/requirements.txt`, `tests/integration/scratchpad-mcp/server.py`.
2. Trace execution through entrypoints: `tests/integration/scratchpad-mcp/server.py`, `tests/integration/k8s-sre-mcp/server.py`, `crates/aura-web-server/src/lib.rs`.
3. Map agent/tool runtime through: `crates/aura-web-server/src/a2a/agent_executor.rs`, `crates/aura-cli/src/tools/definitions.rs`, `crates/aura-cli/src/tools/diff.rs`.
4. Inspect retrieval/memory/indexing through: `crates/aura/src/bedrock_embedding.rs`, `crates/aura/src/rag_tools.rs`, `crates/aura/src/vector_dynamic.rs`.
5. Verify behavior through test/eval files: `tests/integration/scratchpad-mcp/Dockerfile`, `tests/integration/scratchpad-mcp/requirements.txt`, `tests/integration/scratchpad-mcp/server.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 AURA is an agentic harness that turns an LLM model into a reliable, autonomous service capable of executing real SRE wor. 핵심 구조 신호는 Rust, package.json, Cargo.toml, Dockerfile, docker-compose.yml, Makefile이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
