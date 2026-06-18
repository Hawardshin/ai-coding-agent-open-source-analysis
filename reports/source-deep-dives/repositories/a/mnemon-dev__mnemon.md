# mnemon-dev/mnemon Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

LLM-supervised persistent memory for AI agents — graph-based recall, cross-session knowledge, single binary. Works with Claude Code, OpenClaw, and any CLI agent.

## 요약

- 조사 단위: `sources/mnemon-dev__mnemon` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 473 files, 87 directories, depth score 125, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, internal/setup/assets/pi/SKILL.md, internal/setup/assets/openclaw/SKILL.md이고, 의존성 단서는 cobra, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | mnemon-dev/mnemon |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 351 |
| Forks | 52 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/mnemon-dev__mnemon](../../../../sources/mnemon-dev__mnemon) |
| Existing report | [reports/global-trending/repositories/mnemon-dev__mnemon.md](../../../global-trending/repositories/mnemon-dev__mnemon.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 473 / 87 |
| Max observed depth | 8 |
| Top directories | .github, cmd, docs, harness, internal, scripts |
| Top extensions | .go: 317, .md: 74, .sh: 24, .json: 22, .jpg: 13, (none): 5, .yml: 4, .drawio: 3, .py: 3, .js: 2, .example: 1, .mod: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 63 |
| .github | ci surface | 1 |
| cmd | source boundary | 1 |
| cmd/embed.go | cmd workspace | 1 |
| harness | top-level component | 1 |
| internal | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | deps | make deps |
| build | Makefile | build | make build |
| build | Makefile | harness-build | make harness-build |
| utility | Makefile | install | make install |
| utility | Makefile | uninstall | make uninstall |
| test | Makefile | test | make test |
| utility | Makefile | unit | make unit |
| utility | Makefile | vet | make vet |
| utility | Makefile | harness-validate | make harness-validate |
| quality | Makefile | harness-docs-check | make harness-docs-check |
| quality | Makefile | eval-router-check | make eval-router-check |
| utility | Makefile | codex-app-eval | make codex-app-eval |
| utility | Makefile | codex-app-eval-suite | make codex-app-eval-suite |
| utility | Makefile | codex-memory-deep-eval | make codex-memory-deep-eval |
| utility | Makefile | codex-skill-deep-eval | make codex-skill-deep-eval |
| utility | Makefile | codex-eval-smoke | make codex-eval-smoke |
| build | Makefile | docker-build | make docker-build |
| container | Makefile | docker-run | make docker-run |
| container | Makefile | compose-up | make compose-up |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | cobra |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [AGENTS.md](../../../../sources/mnemon-dev__mnemon/AGENTS.md) | agentRuntime signal |
| agentRuntime | [internal/setup/assets/pi/SKILL.md](../../../../sources/mnemon-dev__mnemon/internal/setup/assets/pi/SKILL.md) | agentRuntime signal |
| agentRuntime | [internal/setup/assets/openclaw/SKILL.md](../../../../sources/mnemon-dev__mnemon/internal/setup/assets/openclaw/SKILL.md) | agentRuntime signal |
| agentRuntime | [internal/setup/assets/openclaw/hooks/mnemon-prime/handler.js](../../../../sources/mnemon-dev__mnemon/internal/setup/assets/openclaw/hooks/mnemon-prime/handler.js) | agentRuntime signal |
| entrypoints | [main.go](../../../../sources/mnemon-dev__mnemon/main.go) | entrypoints signal |
| entrypoints | [harness/internal/runtime/server.go](../../../../sources/mnemon-dev__mnemon/harness/internal/runtime/server.go) | entrypoints signal |
| entrypoints | [harness/cmd/mnemond/main.go](../../../../sources/mnemon-dev__mnemon/harness/cmd/mnemond/main.go) | entrypoints signal |
| entrypoints | [harness/cmd/mnemon-hub/main.go](../../../../sources/mnemon-dev__mnemon/harness/cmd/mnemon-hub/main.go) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/mnemon-dev__mnemon/CLAUDE.md) | instruction signal |
| config | [go.mod](../../../../sources/mnemon-dev__mnemon/go.mod) | config signal |
| config | [Makefile](../../../../sources/mnemon-dev__mnemon/Makefile) | config signal |
| config | [internal/setup/assets/openclaw/plugin/package.json](../../../../sources/mnemon-dev__mnemon/internal/setup/assets/openclaw/plugin/package.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [main.go](../../../../sources/mnemon-dev__mnemon/main.go)<br>[harness/internal/runtime/server.go](../../../../sources/mnemon-dev__mnemon/harness/internal/runtime/server.go)<br>[harness/cmd/mnemond/main.go](../../../../sources/mnemon-dev__mnemon/harness/cmd/mnemond/main.go)<br>[harness/cmd/mnemon-hub/main.go](../../../../sources/mnemon-dev__mnemon/harness/cmd/mnemon-hub/main.go) |
| agentRuntime | 37 | [AGENTS.md](../../../../sources/mnemon-dev__mnemon/AGENTS.md)<br>[internal/setup/assets/pi/SKILL.md](../../../../sources/mnemon-dev__mnemon/internal/setup/assets/pi/SKILL.md)<br>[internal/setup/assets/openclaw/SKILL.md](../../../../sources/mnemon-dev__mnemon/internal/setup/assets/openclaw/SKILL.md)<br>[internal/setup/assets/openclaw/hooks/mnemon-prime/handler.js](../../../../sources/mnemon-dev__mnemon/internal/setup/assets/openclaw/hooks/mnemon-prime/handler.js)<br>[internal/setup/assets/openclaw/hooks/mnemon-prime/HOOK.md](../../../../sources/mnemon-dev__mnemon/internal/setup/assets/openclaw/hooks/mnemon-prime/HOOK.md)<br>[internal/setup/assets/nanoclaw/SKILL.md](../../../../sources/mnemon-dev__mnemon/internal/setup/assets/nanoclaw/SKILL.md)<br>[internal/setup/assets/nanobot/SKILL.md](../../../../sources/mnemon-dev__mnemon/internal/setup/assets/nanobot/SKILL.md)<br>[internal/setup/assets/hermes/SKILL.md](../../../../sources/mnemon-dev__mnemon/internal/setup/assets/hermes/SKILL.md) |
| mcp | 0 | not obvious |
| retrieval | 36 | [scripts/visualize_graph.py](../../../../sources/mnemon-dev__mnemon/scripts/visualize_graph.py)<br>[internal/setup/assets/openclaw/plugin/index.js](../../../../sources/mnemon-dev__mnemon/internal/setup/assets/openclaw/plugin/index.js)<br>[internal/graph/bfs.go](../../../../sources/mnemon-dev__mnemon/internal/graph/bfs.go)<br>[internal/graph/causal_test.go](../../../../sources/mnemon-dev__mnemon/internal/graph/causal_test.go)<br>[internal/graph/causal.go](../../../../sources/mnemon-dev__mnemon/internal/graph/causal.go)<br>[internal/graph/engine.go](../../../../sources/mnemon-dev__mnemon/internal/graph/engine.go)<br>[internal/graph/entity_test.go](../../../../sources/mnemon-dev__mnemon/internal/graph/entity_test.go)<br>[internal/graph/entity.go](../../../../sources/mnemon-dev__mnemon/internal/graph/entity.go) |
| spec | 26 | [harness/internal/capability/spec_test.go](../../../../sources/mnemon-dev__mnemon/harness/internal/capability/spec_test.go)<br>[harness/internal/capability/spec.go](../../../../sources/mnemon-dev__mnemon/harness/internal/capability/spec.go)<br>[docs/DESIGN.md](../../../../sources/mnemon-dev__mnemon/docs/DESIGN.md)<br>[docs/zh/DESIGN.md](../../../../sources/mnemon-dev__mnemon/docs/zh/DESIGN.md)<br>[docs/zh/design/01-vision.md](../../../../sources/mnemon-dev__mnemon/docs/zh/design/01-vision.md)<br>[docs/zh/design/02-philosophy.md](../../../../sources/mnemon-dev__mnemon/docs/zh/design/02-philosophy.md)<br>[docs/zh/design/03-concepts.md](../../../../sources/mnemon-dev__mnemon/docs/zh/design/03-concepts.md)<br>[docs/zh/design/04-graph-model.md](../../../../sources/mnemon-dev__mnemon/docs/zh/design/04-graph-model.md) |
| eval | 177 | [scripts/check_eval_router_fixture.sh](../../../../sources/mnemon-dev__mnemon/scripts/check_eval_router_fixture.sh)<br>[scripts/codex_app_server_eval.py](../../../../sources/mnemon-dev__mnemon/scripts/codex_app_server_eval.py)<br>[scripts/e2e_test.sh](../../../../sources/mnemon-dev__mnemon/scripts/e2e_test.sh)<br>[internal/store/store_test.go](../../../../sources/mnemon-dev__mnemon/internal/store/store_test.go)<br>[internal/setup/claude_test.go](../../../../sources/mnemon-dev__mnemon/internal/setup/claude_test.go)<br>[internal/setup/cursor_test.go](../../../../sources/mnemon-dev__mnemon/internal/setup/cursor_test.go)<br>[internal/setup/hermes_test.go](../../../../sources/mnemon-dev__mnemon/internal/setup/hermes_test.go)<br>[internal/setup/markdown_test.go](../../../../sources/mnemon-dev__mnemon/internal/setup/markdown_test.go) |
| security | 11 | [SECURITY.md](../../../../sources/mnemon-dev__mnemon/SECURITY.md)<br>[harness/internal/syncserver/security_test.go](../../../../sources/mnemon-dev__mnemon/harness/internal/syncserver/security_test.go)<br>[harness/internal/store/store_guard_darwin.go](../../../../sources/mnemon-dev__mnemon/harness/internal/store/store_guard_darwin.go)<br>[harness/internal/store/store_guard_linux.go](../../../../sources/mnemon-dev__mnemon/harness/internal/store/store_guard_linux.go)<br>[harness/internal/store/store_guard_test.go](../../../../sources/mnemon-dev__mnemon/harness/internal/store/store_guard_test.go)<br>[harness/internal/store/store_guard.go](../../../../sources/mnemon-dev__mnemon/harness/internal/store/store_guard.go)<br>[harness/internal/reconcile/audit_test.go](../../../../sources/mnemon-dev__mnemon/harness/internal/reconcile/audit_test.go)<br>[harness/internal/kernel/apply_guard_test.go](../../../../sources/mnemon-dev__mnemon/harness/internal/kernel/apply_guard_test.go) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/mnemon-dev__mnemon/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/mnemon-dev__mnemon/.github/workflows/release.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/mnemon-dev__mnemon/docker-compose.yml)<br>[Dockerfile](../../../../sources/mnemon-dev__mnemon/Dockerfile) |
| instruction | 2 | [AGENTS.md](../../../../sources/mnemon-dev__mnemon/AGENTS.md)<br>[CLAUDE.md](../../../../sources/mnemon-dev__mnemon/CLAUDE.md) |
| docs | 64 | [README.md](../../../../sources/mnemon-dev__mnemon/README.md)<br>[harness/README.md](../../../../sources/mnemon-dev__mnemon/harness/README.md)<br>[harness/internal/assets/loops/README.md](../../../../sources/mnemon-dev__mnemon/harness/internal/assets/loops/README.md)<br>[harness/internal/assets/loops/skill/README.md](../../../../sources/mnemon-dev__mnemon/harness/internal/assets/loops/skill/README.md)<br>[harness/internal/assets/loops/memory/README.md](../../../../sources/mnemon-dev__mnemon/harness/internal/assets/loops/memory/README.md)<br>[harness/internal/assets/hosts/README.md](../../../../sources/mnemon-dev__mnemon/harness/internal/assets/hosts/README.md)<br>[docs/DEPLOYMENT.md](../../../../sources/mnemon-dev__mnemon/docs/DEPLOYMENT.md)<br>[docs/DESIGN.md](../../../../sources/mnemon-dev__mnemon/docs/DESIGN.md) |
| config | 3 | [go.mod](../../../../sources/mnemon-dev__mnemon/go.mod)<br>[Makefile](../../../../sources/mnemon-dev__mnemon/Makefile)<br>[internal/setup/assets/openclaw/plugin/package.json](../../../../sources/mnemon-dev__mnemon/internal/setup/assets/openclaw/plugin/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 177 | [scripts/check_eval_router_fixture.sh](../../../../sources/mnemon-dev__mnemon/scripts/check_eval_router_fixture.sh)<br>[scripts/codex_app_server_eval.py](../../../../sources/mnemon-dev__mnemon/scripts/codex_app_server_eval.py)<br>[scripts/e2e_test.sh](../../../../sources/mnemon-dev__mnemon/scripts/e2e_test.sh)<br>[internal/store/store_test.go](../../../../sources/mnemon-dev__mnemon/internal/store/store_test.go)<br>[internal/setup/claude_test.go](../../../../sources/mnemon-dev__mnemon/internal/setup/claude_test.go)<br>[internal/setup/cursor_test.go](../../../../sources/mnemon-dev__mnemon/internal/setup/cursor_test.go) |
| CI workflows | 2 | [.github/workflows/ci.yml](../../../../sources/mnemon-dev__mnemon/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/mnemon-dev__mnemon/.github/workflows/release.yml) |
| Containers / deploy | 2 | [docker-compose.yml](../../../../sources/mnemon-dev__mnemon/docker-compose.yml)<br>[Dockerfile](../../../../sources/mnemon-dev__mnemon/Dockerfile) |
| Security / policy | 11 | [SECURITY.md](../../../../sources/mnemon-dev__mnemon/SECURITY.md)<br>[harness/internal/syncserver/security_test.go](../../../../sources/mnemon-dev__mnemon/harness/internal/syncserver/security_test.go)<br>[harness/internal/store/store_guard_darwin.go](../../../../sources/mnemon-dev__mnemon/harness/internal/store/store_guard_darwin.go)<br>[harness/internal/store/store_guard_linux.go](../../../../sources/mnemon-dev__mnemon/harness/internal/store/store_guard_linux.go)<br>[harness/internal/store/store_guard_test.go](../../../../sources/mnemon-dev__mnemon/harness/internal/store/store_guard_test.go)<br>[harness/internal/store/store_guard.go](../../../../sources/mnemon-dev__mnemon/harness/internal/store/store_guard.go) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/mnemon-dev__mnemon/AGENTS.md)<br>[CLAUDE.md](../../../../sources/mnemon-dev__mnemon/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `AGENTS.md`, `internal/setup/assets/pi/SKILL.md`, `internal/setup/assets/openclaw/SKILL.md`.
2. Trace execution through entrypoints: `main.go`, `harness/internal/runtime/server.go`, `harness/cmd/mnemond/main.go`.
3. Map agent/tool runtime through: `AGENTS.md`, `internal/setup/assets/pi/SKILL.md`, `internal/setup/assets/openclaw/SKILL.md`.
4. Inspect retrieval/memory/indexing through: `scripts/visualize_graph.py`, `internal/setup/assets/openclaw/plugin/index.js`, `internal/graph/bfs.go`.
5. Verify behavior through test/eval files: `scripts/check_eval_router_fixture.sh`, `scripts/codex_app_server_eval.py`, `scripts/e2e_test.sh`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 LLM supervised persistent memory for AI agents — graph based recall, cross session knowledge, single binary. Works with . 핵심 구조 신호는 Go, go.mod, Dockerfile, docker-compose.yml, Makefile, README.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
