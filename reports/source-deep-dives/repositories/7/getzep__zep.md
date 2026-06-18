# getzep/zep Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 536 files, 158 directories.

## 요약

- 조사 단위: `sources/getzep__zep` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 536 files, 158 directories, depth score 135, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp/zep-mcp-server/.dockerignore, mcp/zep-mcp-server/.env.example, mcp/zep-mcp-server/.gitignore이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | getzep/zep |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/getzep__zep](../../../../sources/getzep__zep) |
| Existing report | [reports/clone-structures/getzep__zep.md](../../../clone-structures/getzep__zep.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 536 / 158 |
| Max observed depth | 11 |
| Top directories | .cursor, .github, assets, benchmarks, examples, integrations, legacy, mcp, ontology, zep-eval-harness |
| Top extensions | .py: 129, .go: 122, .json: 94, .md: 41, (none): 23, .ts: 18, .tsx: 17, .example: 15, .txt: 13, .toml: 9, .yaml: 9, .svg: 6 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| examples/python | examples workspace | 42 |
| examples/typescript | examples workspace | 25 |
| examples/go | examples workspace | 3 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| benchmarks | validation surface | 1 |
| examples | top-level component | 1 |
| integrations | top-level component | 1 |
| legacy | top-level component | 1 |
| mcp | top-level component | 1 |
| ontology | top-level component | 1 |
| zep-eval-harness | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
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
| mcp | [mcp/zep-mcp-server/.dockerignore](../../../../sources/getzep__zep/mcp/zep-mcp-server/.dockerignore) | mcp signal |
| mcp | [mcp/zep-mcp-server/.env.example](../../../../sources/getzep__zep/mcp/zep-mcp-server/.env.example) | mcp signal |
| mcp | [mcp/zep-mcp-server/.gitignore](../../../../sources/getzep__zep/mcp/zep-mcp-server/.gitignore) | mcp signal |
| mcp | [mcp/zep-mcp-server/.golangci.yml](../../../../sources/getzep__zep/mcp/zep-mcp-server/.golangci.yml) | mcp signal |
| agentRuntime | [zep-eval-harness/.claude/commands/zep-eval-harness/SKILL.md](../../../../sources/getzep__zep/zep-eval-harness/.claude/commands/zep-eval-harness/SKILL.md) | agentRuntime signal |
| agentRuntime | [mcp/zep-mcp-server/internal/server/tools.go](../../../../sources/getzep__zep/mcp/zep-mcp-server/internal/server/tools.go) | agentRuntime signal |
| agentRuntime | [mcp/zep-mcp-server/internal/handlers/context.go](../../../../sources/getzep__zep/mcp/zep-mcp-server/internal/handlers/context.go) | agentRuntime signal |
| agentRuntime | [mcp/zep-mcp-server/docs/TOOLS.md](../../../../sources/getzep__zep/mcp/zep-mcp-server/docs/TOOLS.md) | agentRuntime signal |
| entrypoints | [mcp/zep-mcp-server/internal/server/server.go](../../../../sources/getzep__zep/mcp/zep-mcp-server/internal/server/server.go) | entrypoints signal |
| entrypoints | [mcp/zep-mcp-server/cmd/server/main.go](../../../../sources/getzep__zep/mcp/zep-mcp-server/cmd/server/main.go) | entrypoints signal |
| entrypoints | [legacy/src/main.go](../../../../sources/getzep__zep/legacy/src/main.go) | entrypoints signal |
| entrypoints | [examples/typescript/chunking-example/src/index.ts](../../../../sources/getzep__zep/examples/typescript/chunking-example/src/index.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 7 | [mcp/zep-mcp-server/internal/server/server.go](../../../../sources/getzep__zep/mcp/zep-mcp-server/internal/server/server.go)<br>[mcp/zep-mcp-server/cmd/server/main.go](../../../../sources/getzep__zep/mcp/zep-mcp-server/cmd/server/main.go)<br>[legacy/src/main.go](../../../../sources/getzep__zep/legacy/src/main.go)<br>[examples/typescript/chunking-example/src/index.ts](../../../../sources/getzep__zep/examples/typescript/chunking-example/src/index.ts)<br>[examples/python/elevenlabs-zep-example/react-app/src/App.jsx](../../../../sources/getzep__zep/examples/python/elevenlabs-zep-example/react-app/src/App.jsx)<br>[examples/python/elevenlabs-zep-example/react-app/src/main.jsx](../../../../sources/getzep__zep/examples/python/elevenlabs-zep-example/react-app/src/main.jsx)<br>[examples/go/chunking-example/main.go](../../../../sources/getzep__zep/examples/go/chunking-example/main.go) |
| agentRuntime | 48 | [zep-eval-harness/.claude/commands/zep-eval-harness/SKILL.md](../../../../sources/getzep__zep/zep-eval-harness/.claude/commands/zep-eval-harness/SKILL.md)<br>[mcp/zep-mcp-server/internal/server/tools.go](../../../../sources/getzep__zep/mcp/zep-mcp-server/internal/server/tools.go)<br>[mcp/zep-mcp-server/internal/handlers/context.go](../../../../sources/getzep__zep/mcp/zep-mcp-server/internal/handlers/context.go)<br>[mcp/zep-mcp-server/docs/TOOLS.md](../../../../sources/getzep__zep/mcp/zep-mcp-server/docs/TOOLS.md)<br>[legacy/src/store/memory_ce.go](../../../../sources/getzep__zep/legacy/src/store/memory_ce.go)<br>[legacy/src/store/memory_common.go](../../../../sources/getzep__zep/legacy/src/store/memory_common.go)<br>[legacy/src/models/memory_ce.go](../../../../sources/getzep__zep/legacy/src/models/memory_ce.go)<br>[legacy/src/models/memory_common.go](../../../../sources/getzep__zep/legacy/src/models/memory_common.go) |
| mcp | 43 | [mcp/zep-mcp-server/.dockerignore](../../../../sources/getzep__zep/mcp/zep-mcp-server/.dockerignore)<br>[mcp/zep-mcp-server/.env.example](../../../../sources/getzep__zep/mcp/zep-mcp-server/.env.example)<br>[mcp/zep-mcp-server/.gitignore](../../../../sources/getzep__zep/mcp/zep-mcp-server/.gitignore)<br>[mcp/zep-mcp-server/.golangci.yml](../../../../sources/getzep__zep/mcp/zep-mcp-server/.golangci.yml)<br>[mcp/zep-mcp-server/docker-compose.yml](../../../../sources/getzep__zep/mcp/zep-mcp-server/docker-compose.yml)<br>[mcp/zep-mcp-server/Dockerfile](../../../../sources/getzep__zep/mcp/zep-mcp-server/Dockerfile)<br>[mcp/zep-mcp-server/go.mod](../../../../sources/getzep__zep/mcp/zep-mcp-server/go.mod)<br>[mcp/zep-mcp-server/go.sum](../../../../sources/getzep__zep/mcp/zep-mcp-server/go.sum) |
| retrieval | 97 | [zep-eval-harness/zep_chunk_documents.py](../../../../sources/getzep__zep/zep-eval-harness/zep_chunk_documents.py)<br>[zep-eval-harness/zep_graph_inspect.py](../../../../sources/getzep__zep/zep-eval-harness/zep_graph_inspect.py)<br>[zep-eval-harness/zep_ingest_documents.py](../../../../sources/getzep__zep/zep-eval-harness/zep_ingest_documents.py)<br>[zep-eval-harness/zep_ingest_users.py](../../../../sources/getzep__zep/zep-eval-harness/zep_ingest_users.py)<br>[zep-eval-harness/runs/chunk_sets/1_20260331T222430/chunks.jsonl](../../../../sources/getzep__zep/zep-eval-harness/runs/chunk_sets/1_20260331T222430/chunks.jsonl)<br>[zep-eval-harness/runs/chunk_sets/1_20260331T222430/meta.json](../../../../sources/getzep__zep/zep-eval-harness/runs/chunk_sets/1_20260331T222430/meta.json)<br>[zep-eval-harness/runs/chunk_sets/1_20260331T222430/document_chunking_config_snapshot/__init__.py](../../../../sources/getzep__zep/zep-eval-harness/runs/chunk_sets/1_20260331T222430/document_chunking_config_snapshot/__init__.py)<br>[zep-eval-harness/runs/chunk_sets/1_20260331T222430/document_chunking_config_snapshot/constants.py](../../../../sources/getzep__zep/zep-eval-harness/runs/chunk_sets/1_20260331T222430/document_chunking_config_snapshot/constants.py) |
| spec | 7 | [integrations/python/zep_livekit/examples/full-example/requirements.txt](../../../../sources/getzep__zep/integrations/python/zep_livekit/examples/full-example/requirements.txt)<br>[examples/python/requirements.txt](../../../../sources/getzep__zep/examples/python/requirements.txt)<br>[examples/python/zep-quickstart-dashboard/requirements.txt](../../../../sources/getzep__zep/examples/python/zep-quickstart-dashboard/requirements.txt)<br>[examples/python/user-summary-instructions-example/requirements.txt](../../../../sources/getzep__zep/examples/python/user-summary-instructions-example/requirements.txt)<br>[examples/python/context-templates-example/requirements.txt](../../../../sources/getzep__zep/examples/python/context-templates-example/requirements.txt)<br>[examples/python/chunking-example/requirements.txt](../../../../sources/getzep__zep/examples/python/chunking-example/requirements.txt)<br>[examples/python/agent-memory-full-example/requirements.txt](../../../../sources/getzep__zep/examples/python/agent-memory-full-example/requirements.txt) |
| eval | 93 | [zep-eval-harness/.env.example](../../../../sources/getzep__zep/zep-eval-harness/.env.example)<br>[zep-eval-harness/.gitignore](../../../../sources/getzep__zep/zep-eval-harness/.gitignore)<br>[zep-eval-harness/checkpoint.py](../../../../sources/getzep__zep/zep-eval-harness/checkpoint.py)<br>[zep-eval-harness/pyproject.toml](../../../../sources/getzep__zep/zep-eval-harness/pyproject.toml)<br>[zep-eval-harness/README.md](../../../../sources/getzep__zep/zep-eval-harness/README.md)<br>[zep-eval-harness/retry.py](../../../../sources/getzep__zep/zep-eval-harness/retry.py)<br>[zep-eval-harness/zep_chunk_documents.py](../../../../sources/getzep__zep/zep-eval-harness/zep_chunk_documents.py)<br>[zep-eval-harness/zep_evaluate.py](../../../../sources/getzep__zep/zep-eval-harness/zep_evaluate.py) |
| security | 3 | [SECURITY.md](../../../../sources/getzep__zep/SECURITY.md)<br>[legacy/src/api/middleware/auth.go](../../../../sources/getzep__zep/legacy/src/api/middleware/auth.go)<br>[legacy/src/api/middleware/secret_key_auth_ce.go](../../../../sources/getzep__zep/legacy/src/api/middleware/secret_key_auth_ce.go) |
| ci | 6 | [.github/workflows/build-test.yml.disabled](../../../../sources/getzep__zep/.github/workflows/build-test.yml.disabled)<br>[.github/workflows/docker-publish.yml.disabled](../../../../sources/getzep__zep/.github/workflows/docker-publish.yml.disabled)<br>[.github/workflows/golangci-lint.yml.disabled](../../../../sources/getzep__zep/.github/workflows/golangci-lint.yml.disabled)<br>[.github/workflows/README.md](../../../../sources/getzep__zep/.github/workflows/README.md)<br>[.github/workflows/release-integrations.yml](../../../../sources/getzep__zep/.github/workflows/release-integrations.yml)<br>[.github/workflows/test-integrations.yml](../../../../sources/getzep__zep/.github/workflows/test-integrations.yml) |
| container | 4 | [mcp/zep-mcp-server/docker-compose.yml](../../../../sources/getzep__zep/mcp/zep-mcp-server/docker-compose.yml)<br>[mcp/zep-mcp-server/Dockerfile](../../../../sources/getzep__zep/mcp/zep-mcp-server/Dockerfile)<br>[legacy/docker-compose.ce.yaml](../../../../sources/getzep__zep/legacy/docker-compose.ce.yaml)<br>[legacy/Dockerfile.ce](../../../../sources/getzep__zep/legacy/Dockerfile.ce) |
| instruction | 3 | [integrations/python/CLAUDE.md](../../../../sources/getzep__zep/integrations/python/CLAUDE.md)<br>[integrations/python/zep_livekit/CLAUDE.md](../../../../sources/getzep__zep/integrations/python/zep_livekit/CLAUDE.md)<br>[integrations/python/zep_autogen/CLAUDE.md](../../../../sources/getzep__zep/integrations/python/zep_autogen/CLAUDE.md) |
| docs | 27 | [README.md](../../../../sources/getzep__zep/README.md)<br>[zep-eval-harness/README.md](../../../../sources/getzep__zep/zep-eval-harness/README.md)<br>[mcp/zep-mcp-server/README.md](../../../../sources/getzep__zep/mcp/zep-mcp-server/README.md)<br>[mcp/zep-mcp-server/docs/DOCKER.md](../../../../sources/getzep__zep/mcp/zep-mcp-server/docs/DOCKER.md)<br>[mcp/zep-mcp-server/docs/TOOLS.md](../../../../sources/getzep__zep/mcp/zep-mcp-server/docs/TOOLS.md)<br>[integrations/README.md](../../../../sources/getzep__zep/integrations/README.md)<br>[integrations/python/zep_livekit/README.md](../../../../sources/getzep__zep/integrations/python/zep_livekit/README.md)<br>[integrations/python/zep_livekit/examples/full-example/README.md](../../../../sources/getzep__zep/integrations/python/zep_livekit/examples/full-example/README.md) |
| config | 31 | [pyproject.toml](../../../../sources/getzep__zep/pyproject.toml)<br>[zep-eval-harness/pyproject.toml](../../../../sources/getzep__zep/zep-eval-harness/pyproject.toml)<br>[mcp/zep-mcp-server/go.mod](../../../../sources/getzep__zep/mcp/zep-mcp-server/go.mod)<br>[mcp/zep-mcp-server/Makefile](../../../../sources/getzep__zep/mcp/zep-mcp-server/Makefile)<br>[legacy/src/go.mod](../../../../sources/getzep__zep/legacy/src/go.mod)<br>[integrations/python/zep_livekit/Makefile](../../../../sources/getzep__zep/integrations/python/zep_livekit/Makefile)<br>[integrations/python/zep_livekit/pyproject.toml](../../../../sources/getzep__zep/integrations/python/zep_livekit/pyproject.toml)<br>[integrations/python/zep_livekit/examples/full-example/requirements.txt](../../../../sources/getzep__zep/integrations/python/zep_livekit/examples/full-example/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 93 | [zep-eval-harness/.env.example](../../../../sources/getzep__zep/zep-eval-harness/.env.example)<br>[zep-eval-harness/.gitignore](../../../../sources/getzep__zep/zep-eval-harness/.gitignore)<br>[zep-eval-harness/checkpoint.py](../../../../sources/getzep__zep/zep-eval-harness/checkpoint.py)<br>[zep-eval-harness/pyproject.toml](../../../../sources/getzep__zep/zep-eval-harness/pyproject.toml)<br>[zep-eval-harness/README.md](../../../../sources/getzep__zep/zep-eval-harness/README.md)<br>[zep-eval-harness/retry.py](../../../../sources/getzep__zep/zep-eval-harness/retry.py) |
| CI workflows | 6 | [.github/workflows/build-test.yml.disabled](../../../../sources/getzep__zep/.github/workflows/build-test.yml.disabled)<br>[.github/workflows/docker-publish.yml.disabled](../../../../sources/getzep__zep/.github/workflows/docker-publish.yml.disabled)<br>[.github/workflows/golangci-lint.yml.disabled](../../../../sources/getzep__zep/.github/workflows/golangci-lint.yml.disabled)<br>[.github/workflows/README.md](../../../../sources/getzep__zep/.github/workflows/README.md)<br>[.github/workflows/release-integrations.yml](../../../../sources/getzep__zep/.github/workflows/release-integrations.yml)<br>[.github/workflows/test-integrations.yml](../../../../sources/getzep__zep/.github/workflows/test-integrations.yml) |
| Containers / deploy | 4 | [mcp/zep-mcp-server/docker-compose.yml](../../../../sources/getzep__zep/mcp/zep-mcp-server/docker-compose.yml)<br>[mcp/zep-mcp-server/Dockerfile](../../../../sources/getzep__zep/mcp/zep-mcp-server/Dockerfile)<br>[legacy/docker-compose.ce.yaml](../../../../sources/getzep__zep/legacy/docker-compose.ce.yaml)<br>[legacy/Dockerfile.ce](../../../../sources/getzep__zep/legacy/Dockerfile.ce) |
| Security / policy | 3 | [SECURITY.md](../../../../sources/getzep__zep/SECURITY.md)<br>[legacy/src/api/middleware/auth.go](../../../../sources/getzep__zep/legacy/src/api/middleware/auth.go)<br>[legacy/src/api/middleware/secret_key_auth_ce.go](../../../../sources/getzep__zep/legacy/src/api/middleware/secret_key_auth_ce.go) |
| Agent instructions | 3 | [integrations/python/CLAUDE.md](../../../../sources/getzep__zep/integrations/python/CLAUDE.md)<br>[integrations/python/zep_livekit/CLAUDE.md](../../../../sources/getzep__zep/integrations/python/zep_livekit/CLAUDE.md)<br>[integrations/python/zep_autogen/CLAUDE.md](../../../../sources/getzep__zep/integrations/python/zep_autogen/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `mcp/zep-mcp-server/.dockerignore`, `mcp/zep-mcp-server/.env.example`, `mcp/zep-mcp-server/.gitignore`.
2. Trace execution through entrypoints: `mcp/zep-mcp-server/internal/server/server.go`, `mcp/zep-mcp-server/cmd/server/main.go`, `legacy/src/main.go`.
3. Map agent/tool runtime through: `zep-eval-harness/.claude/commands/zep-eval-harness/SKILL.md`, `mcp/zep-mcp-server/internal/server/tools.go`, `mcp/zep-mcp-server/internal/handlers/context.go`.
4. Inspect retrieval/memory/indexing through: `zep-eval-harness/zep_chunk_documents.py`, `zep-eval-harness/zep_graph_inspect.py`, `zep-eval-harness/zep_ingest_documents.py`.
5. Verify behavior through test/eval files: `zep-eval-harness/.env.example`, `zep-eval-harness/.gitignore`, `zep-eval-harness/checkpoint.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 536 files, 158 directories.. 핵심 구조 신호는 pyproject.toml, README.md, LICENSE, tests, ci, docs이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
