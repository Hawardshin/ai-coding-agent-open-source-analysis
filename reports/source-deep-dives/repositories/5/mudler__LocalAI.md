# mudler/LocalAI Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 2606 files, 284 directories.

## 요약

- 조사 단위: `sources/mudler__LocalAI` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,597 files, 282 directories, depth score 138, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/e2e/e2e_mcp_test.go, tests/e2e/distributed/mcp_ci_job_helper_test.go, tests/e2e/distributed/mcp_ci_job_test.go이고, 의존성 단서는 openai, anthropic, modelcontextprotocol, langchain, ollama, llama, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | mudler/LocalAI |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 46944 |
| Forks | 4146 |
| License | none |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/mudler__LocalAI](../../../../sources/mudler__LocalAI) |
| Existing report | [reports/global-trending/repositories/mudler__LocalAI.md](../../../global-trending/repositories/mudler__LocalAI.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2597 / 282 |
| Max observed depth | 7 |
| Top directories | .agents, .devcontainer, .devcontainer-scripts, .docker, .githooks, .github, backend, cmd, configuration, core, custom-ca-certs, docs, examples, gallery, internal, pkg, prompt-templates, scripts, swagger, tests |
| Top extensions | .go: 1117, .txt: 274, .sh: 204, .md: 125, .jsx: 115, .yaml: 109, .js: 95, (none): 94, .py: 92, .json: 90, .html: 64, .png: 45 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 59 |
| tests | validation surface | 54 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| backend | top-level component | 1 |
| cmd | source boundary | 1 |
| cmd/launcher | cmd workspace | 1 |
| cmd/local-ai | cmd workspace | 1 |
| configuration | top-level component | 1 |
| core | top-level component | 1 |
| custom-ca-certs | top-level component | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| gallery | top-level component | 1 |
| internal | top-level component | 1 |
| pkg | top-level component | 1 |
| prompt-templates | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .NOTPARALLEL | make .NOTPARALLEL |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | all | make all |
| build | Makefile | rebuild | make rebuild |
| utility | Makefile | clean | make clean |
| test | Makefile | clean-tests | make clean-tests |
| utility | Makefile | install-go-tools | make install-go-tools |
| utility | Makefile | react-ui | make react-ui |
| container | Makefile | react-ui-docker | make react-ui-docker |
| build | Makefile | build | make build |
| build | Makefile | build-launcher | make build-launcher |
| build | Makefile | build-all | make build-all |
| serve-dev | Makefile | build-dev | make build-dev |
| serve-dev | Makefile | dev-dist | make dev-dist |
| build | Makefile | dist | make dist |
| utility | Makefile | osx-signed | make osx-signed |
| utility | Makefile | run | make run |
| test | Makefile | prepare-test | make prepare-test |
| test | Makefile | test | make test |
| test | Makefile | test-coverage | make test-coverage |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | langchain |
| vectorStores | faiss |
| modelRuntime | ollama, llama |
| webRuntime | none |
| developerSurface | none |
| observability | opentelemetry, prometheus |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [tests/e2e/e2e_mcp_test.go](../../../../sources/mudler__LocalAI/tests/e2e/e2e_mcp_test.go) | mcp signal |
| mcp | [tests/e2e/distributed/mcp_ci_job_helper_test.go](../../../../sources/mudler__LocalAI/tests/e2e/distributed/mcp_ci_job_helper_test.go) | mcp signal |
| mcp | [tests/e2e/distributed/mcp_ci_job_test.go](../../../../sources/mudler__LocalAI/tests/e2e/distributed/mcp_ci_job_test.go) | mcp signal |
| mcp | [tests/e2e/distributed/mcp_nats_test.go](../../../../sources/mudler__LocalAI/tests/e2e/distributed/mcp_nats_test.go) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/mudler__LocalAI/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/e2e/distributed/agent_distributed_test.go](../../../../sources/mudler__LocalAI/tests/e2e/distributed/agent_distributed_test.go) | agentRuntime signal |
| agentRuntime | [tests/e2e/distributed/agent_native_executor_test.go](../../../../sources/mudler__LocalAI/tests/e2e/distributed/agent_native_executor_test.go) | agentRuntime signal |
| agentRuntime | [tests/e2e/distributed/skills_distributed_test.go](../../../../sources/mudler__LocalAI/tests/e2e/distributed/skills_distributed_test.go) | agentRuntime signal |
| entrypoints | [tests/e2e-ui/main.go](../../../../sources/mudler__LocalAI/tests/e2e-ui/main.go) | entrypoints signal |
| entrypoints | [tests/e2e/mock-backend/main.go](../../../../sources/mudler__LocalAI/tests/e2e/mock-backend/main.go) | entrypoints signal |
| entrypoints | [pkg/mcp/localaitools/server.go](../../../../sources/mudler__LocalAI/pkg/mcp/localaitools/server.go) | entrypoints signal |
| entrypoints | [pkg/grpc/server.go](../../../../sources/mudler__LocalAI/pkg/grpc/server.go) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 32 | [tests/e2e-ui/main.go](../../../../sources/mudler__LocalAI/tests/e2e-ui/main.go)<br>[tests/e2e/mock-backend/main.go](../../../../sources/mudler__LocalAI/tests/e2e/mock-backend/main.go)<br>[pkg/mcp/localaitools/server.go](../../../../sources/mudler__LocalAI/pkg/mcp/localaitools/server.go)<br>[pkg/grpc/server.go](../../../../sources/mudler__LocalAI/pkg/grpc/server.go)<br>[core/http/react-ui/src/App.css](../../../../sources/mudler__LocalAI/core/http/react-ui/src/App.css)<br>[core/http/react-ui/src/App.jsx](../../../../sources/mudler__LocalAI/core/http/react-ui/src/App.jsx)<br>[core/http/react-ui/src/index.css](../../../../sources/mudler__LocalAI/core/http/react-ui/src/index.css)<br>[core/http/react-ui/src/main.jsx](../../../../sources/mudler__LocalAI/core/http/react-ui/src/main.jsx) |
| agentRuntime | 117 | [AGENTS.md](../../../../sources/mudler__LocalAI/AGENTS.md)<br>[tests/e2e/distributed/agent_distributed_test.go](../../../../sources/mudler__LocalAI/tests/e2e/distributed/agent_distributed_test.go)<br>[tests/e2e/distributed/agent_native_executor_test.go](../../../../sources/mudler__LocalAI/tests/e2e/distributed/agent_native_executor_test.go)<br>[tests/e2e/distributed/skills_distributed_test.go](../../../../sources/mudler__LocalAI/tests/e2e/distributed/skills_distributed_test.go)<br>[pkg/xsysinfo/memory.go](../../../../sources/mudler__LocalAI/pkg/xsysinfo/memory.go)<br>[pkg/mcp/localaitools/tools_backends.go](../../../../sources/mudler__LocalAI/pkg/mcp/localaitools/tools_backends.go)<br>[pkg/mcp/localaitools/tools_branding.go](../../../../sources/mudler__LocalAI/pkg/mcp/localaitools/tools_branding.go)<br>[pkg/mcp/localaitools/tools_config.go](../../../../sources/mudler__LocalAI/pkg/mcp/localaitools/tools_config.go) |
| mcp | 61 | [tests/e2e/e2e_mcp_test.go](../../../../sources/mudler__LocalAI/tests/e2e/e2e_mcp_test.go)<br>[tests/e2e/distributed/mcp_ci_job_helper_test.go](../../../../sources/mudler__LocalAI/tests/e2e/distributed/mcp_ci_job_helper_test.go)<br>[tests/e2e/distributed/mcp_ci_job_test.go](../../../../sources/mudler__LocalAI/tests/e2e/distributed/mcp_ci_job_test.go)<br>[tests/e2e/distributed/mcp_nats_test.go](../../../../sources/mudler__LocalAI/tests/e2e/distributed/mcp_nats_test.go)<br>[pkg/mcp/localaitools/capability.go](../../../../sources/mudler__LocalAI/pkg/mcp/localaitools/capability.go)<br>[pkg/mcp/localaitools/client.go](../../../../sources/mudler__LocalAI/pkg/mcp/localaitools/client.go)<br>[pkg/mcp/localaitools/coverage_test.go](../../../../sources/mudler__LocalAI/pkg/mcp/localaitools/coverage_test.go)<br>[pkg/mcp/localaitools/doc.go](../../../../sources/mudler__LocalAI/pkg/mcp/localaitools/doc.go) |
| retrieval | 28 | [swagger/embed.go](../../../../sources/mudler__LocalAI/swagger/embed.go)<br>[pkg/xsysinfo/memory.go](../../../../sources/mudler__LocalAI/pkg/xsysinfo/memory.go)<br>[pkg/grpc/embed.go](../../../../sources/mudler__LocalAI/pkg/grpc/embed.go)<br>[gallery/index.yaml](../../../../sources/mudler__LocalAI/gallery/index.yaml)<br>[docs/content/_index.md](../../../../sources/mudler__LocalAI/docs/content/_index.md)<br>[docs/content/reference/_index.en.md](../../../../sources/mudler__LocalAI/docs/content/reference/_index.en.md)<br>[docs/content/reference/_index.md](../../../../sources/mudler__LocalAI/docs/content/reference/_index.md)<br>[docs/content/installation/_index.en.md](../../../../sources/mudler__LocalAI/docs/content/installation/_index.en.md) |
| spec | 292 | [docs/static/images/diagrams/architecture-overview.html](../../../../sources/mudler__LocalAI/docs/static/images/diagrams/architecture-overview.html)<br>[docs/static/images/diagrams/architecture-overview.png](../../../../sources/mudler__LocalAI/docs/static/images/diagrams/architecture-overview.png)<br>[docs/content/reference/architecture.md](../../../../sources/mudler__LocalAI/docs/content/reference/architecture.md)<br>[core/http/react-ui/e2e/agents.spec.js](../../../../sources/mudler__LocalAI/core/http/react-ui/e2e/agents.spec.js)<br>[core/http/react-ui/e2e/audio-transform.spec.js](../../../../sources/mudler__LocalAI/core/http/react-ui/e2e/audio-transform.spec.js)<br>[core/http/react-ui/e2e/backend-logs.spec.js](../../../../sources/mudler__LocalAI/core/http/react-ui/e2e/backend-logs.spec.js)<br>[core/http/react-ui/e2e/backends-management.spec.js](../../../../sources/mudler__LocalAI/core/http/react-ui/e2e/backends-management.spec.js)<br>[core/http/react-ui/e2e/chat-errors.spec.js](../../../../sources/mudler__LocalAI/core/http/react-ui/e2e/chat-errors.spec.js) |
| eval | 602 | [tests/integration/integration_suite_test.go](../../../../sources/mudler__LocalAI/tests/integration/integration_suite_test.go)<br>[tests/integration/stores_test.go](../../../../sources/mudler__LocalAI/tests/integration/stores_test.go)<br>[tests/fixtures/gallery_simple.yaml](../../../../sources/mudler__LocalAI/tests/fixtures/gallery_simple.yaml)<br>[tests/fixtures/faces/README.md](../../../../sources/mudler__LocalAI/tests/fixtures/faces/README.md)<br>[tests/fixtures/backend-image/Dockerfile](../../../../sources/mudler__LocalAI/tests/fixtures/backend-image/Dockerfile)<br>[tests/fixtures/backend-image/run.sh](../../../../sources/mudler__LocalAI/tests/fixtures/backend-image/run.sh)<br>[tests/fixtures/backend-image/src/.keep](../../../../sources/mudler__LocalAI/tests/fixtures/backend-image/src/.keep)<br>[tests/e2e-ui/.gitignore](../../../../sources/mudler__LocalAI/tests/e2e-ui/.gitignore) |
| security | 50 | [SECURITY.md](../../../../sources/mudler__LocalAI/SECURITY.md)<br>[scripts/nats-auth-setup.sh](../../../../sources/mudler__LocalAI/scripts/nats-auth-setup.sh)<br>[pkg/grpc/auth_test.go](../../../../sources/mudler__LocalAI/pkg/grpc/auth_test.go)<br>[core/services/worker/auth_required_test.go](../../../../sources/mudler__LocalAI/core/services/worker/auth_required_test.go)<br>[core/services/nodes/prefixcache/policy_test.go](../../../../sources/mudler__LocalAI/core/services/nodes/prefixcache/policy_test.go)<br>[core/services/nodes/prefixcache/policy.go](../../../../sources/mudler__LocalAI/core/services/nodes/prefixcache/policy.go)<br>[core/http/routes/auth_profile_test.go](../../../../sources/mudler__LocalAI/core/http/routes/auth_profile_test.go)<br>[core/http/routes/auth_test.go](../../../../sources/mudler__LocalAI/core/http/routes/auth_test.go) |
| ci | 39 | [.github/workflows/backend_build_darwin.yml](../../../../sources/mudler__LocalAI/.github/workflows/backend_build_darwin.yml)<br>[.github/workflows/backend_build.yml](../../../../sources/mudler__LocalAI/.github/workflows/backend_build.yml)<br>[.github/workflows/backend_merge.yml](../../../../sources/mudler__LocalAI/.github/workflows/backend_merge.yml)<br>[.github/workflows/backend_pr.yml](../../../../sources/mudler__LocalAI/.github/workflows/backend_pr.yml)<br>[.github/workflows/backend.yml](../../../../sources/mudler__LocalAI/.github/workflows/backend.yml)<br>[.github/workflows/base-images.yml](../../../../sources/mudler__LocalAI/.github/workflows/base-images.yml)<br>[.github/workflows/build-test.yaml](../../../../sources/mudler__LocalAI/.github/workflows/build-test.yaml)<br>[.github/workflows/bump_deps.yaml](../../../../sources/mudler__LocalAI/.github/workflows/bump_deps.yaml) |
| container | 16 | [docker-compose.distributed.yaml](../../../../sources/mudler__LocalAI/docker-compose.distributed.yaml)<br>[docker-compose.yaml](../../../../sources/mudler__LocalAI/docker-compose.yaml)<br>[Dockerfile](../../../../sources/mudler__LocalAI/Dockerfile)<br>[tests/fixtures/backend-image/Dockerfile](../../../../sources/mudler__LocalAI/tests/fixtures/backend-image/Dockerfile)<br>[tests/e2e-ui/Dockerfile](../../../../sources/mudler__LocalAI/tests/e2e-ui/Dockerfile)<br>[docs/docker-compose.yaml](../../../../sources/mudler__LocalAI/docs/docker-compose.yaml)<br>[docs/Dockerfile](../../../../sources/mudler__LocalAI/docs/Dockerfile)<br>[backend/Dockerfile.base-grpc-builder](../../../../sources/mudler__LocalAI/backend/Dockerfile.base-grpc-builder) |
| instruction | 2 | [AGENTS.md](../../../../sources/mudler__LocalAI/AGENTS.md)<br>[docs/content/features/agents.md](../../../../sources/mudler__LocalAI/docs/content/features/agents.md) |
| docs | 189 | [README.md](../../../../sources/mudler__LocalAI/README.md)<br>[tests/fixtures/faces/README.md](../../../../sources/mudler__LocalAI/tests/fixtures/faces/README.md)<br>[examples/README.md](../../../../sources/mudler__LocalAI/examples/README.md)<br>[docs/docker-compose.yaml](../../../../sources/mudler__LocalAI/docs/docker-compose.yaml)<br>[docs/Dockerfile](../../../../sources/mudler__LocalAI/docs/Dockerfile)<br>[docs/go.mod](../../../../sources/mudler__LocalAI/docs/go.mod)<br>[docs/go.sum](../../../../sources/mudler__LocalAI/docs/go.sum)<br>[docs/hugo.toml](../../../../sources/mudler__LocalAI/docs/hugo.toml) |
| config | 327 | [go.mod](../../../../sources/mudler__LocalAI/go.mod)<br>[Makefile](../../../../sources/mudler__LocalAI/Makefile)<br>[tests/e2e/mock-backend/Makefile](../../../../sources/mudler__LocalAI/tests/e2e/mock-backend/Makefile)<br>[docs/go.mod](../../../../sources/mudler__LocalAI/docs/go.mod)<br>[docs/package.json](../../../../sources/mudler__LocalAI/docs/package.json)<br>[core/http/react-ui/package.json](../../../../sources/mudler__LocalAI/core/http/react-ui/package.json)<br>[backend/rust/kokoros/Cargo.lock](../../../../sources/mudler__LocalAI/backend/rust/kokoros/Cargo.lock)<br>[backend/rust/kokoros/Cargo.toml](../../../../sources/mudler__LocalAI/backend/rust/kokoros/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 602 | [tests/integration/integration_suite_test.go](../../../../sources/mudler__LocalAI/tests/integration/integration_suite_test.go)<br>[tests/integration/stores_test.go](../../../../sources/mudler__LocalAI/tests/integration/stores_test.go)<br>[tests/fixtures/gallery_simple.yaml](../../../../sources/mudler__LocalAI/tests/fixtures/gallery_simple.yaml)<br>[tests/fixtures/faces/README.md](../../../../sources/mudler__LocalAI/tests/fixtures/faces/README.md)<br>[tests/fixtures/backend-image/Dockerfile](../../../../sources/mudler__LocalAI/tests/fixtures/backend-image/Dockerfile)<br>[tests/fixtures/backend-image/run.sh](../../../../sources/mudler__LocalAI/tests/fixtures/backend-image/run.sh) |
| CI workflows | 39 | [.github/workflows/backend_build_darwin.yml](../../../../sources/mudler__LocalAI/.github/workflows/backend_build_darwin.yml)<br>[.github/workflows/backend_build.yml](../../../../sources/mudler__LocalAI/.github/workflows/backend_build.yml)<br>[.github/workflows/backend_merge.yml](../../../../sources/mudler__LocalAI/.github/workflows/backend_merge.yml)<br>[.github/workflows/backend_pr.yml](../../../../sources/mudler__LocalAI/.github/workflows/backend_pr.yml)<br>[.github/workflows/backend.yml](../../../../sources/mudler__LocalAI/.github/workflows/backend.yml)<br>[.github/workflows/base-images.yml](../../../../sources/mudler__LocalAI/.github/workflows/base-images.yml) |
| Containers / deploy | 16 | [docker-compose.distributed.yaml](../../../../sources/mudler__LocalAI/docker-compose.distributed.yaml)<br>[docker-compose.yaml](../../../../sources/mudler__LocalAI/docker-compose.yaml)<br>[Dockerfile](../../../../sources/mudler__LocalAI/Dockerfile)<br>[tests/fixtures/backend-image/Dockerfile](../../../../sources/mudler__LocalAI/tests/fixtures/backend-image/Dockerfile)<br>[tests/e2e-ui/Dockerfile](../../../../sources/mudler__LocalAI/tests/e2e-ui/Dockerfile)<br>[docs/docker-compose.yaml](../../../../sources/mudler__LocalAI/docs/docker-compose.yaml) |
| Security / policy | 50 | [SECURITY.md](../../../../sources/mudler__LocalAI/SECURITY.md)<br>[scripts/nats-auth-setup.sh](../../../../sources/mudler__LocalAI/scripts/nats-auth-setup.sh)<br>[pkg/grpc/auth_test.go](../../../../sources/mudler__LocalAI/pkg/grpc/auth_test.go)<br>[core/services/worker/auth_required_test.go](../../../../sources/mudler__LocalAI/core/services/worker/auth_required_test.go)<br>[core/services/nodes/prefixcache/policy_test.go](../../../../sources/mudler__LocalAI/core/services/nodes/prefixcache/policy_test.go)<br>[core/services/nodes/prefixcache/policy.go](../../../../sources/mudler__LocalAI/core/services/nodes/prefixcache/policy.go) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/mudler__LocalAI/AGENTS.md)<br>[docs/content/features/agents.md](../../../../sources/mudler__LocalAI/docs/content/features/agents.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/e2e/e2e_mcp_test.go`, `tests/e2e/distributed/mcp_ci_job_helper_test.go`, `tests/e2e/distributed/mcp_ci_job_test.go`.
2. Trace execution through entrypoints: `tests/e2e-ui/main.go`, `tests/e2e/mock-backend/main.go`, `pkg/mcp/localaitools/server.go`.
3. Map agent/tool runtime through: `AGENTS.md`, `tests/e2e/distributed/agent_distributed_test.go`, `tests/e2e/distributed/agent_native_executor_test.go`.
4. Inspect retrieval/memory/indexing through: `swagger/embed.go`, `pkg/xsysinfo/memory.go`, `pkg/grpc/embed.go`.
5. Verify behavior through test/eval files: `tests/integration/integration_suite_test.go`, `tests/integration/stores_test.go`, `tests/fixtures/gallery_simple.yaml`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 2606 files, 284 directories.. 핵심 구조 신호는 Go, go.mod, Dockerfile, Makefile, README.md, AGENTS.md이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
