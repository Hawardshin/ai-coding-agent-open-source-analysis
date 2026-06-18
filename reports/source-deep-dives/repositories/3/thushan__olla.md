# thushan/olla Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

High-performance lightweight proxy and load balancer for LLM infrastructure. Intelligent routing, automatic failover and unified model discovery across local and remote inference backends.

## 요약

- 조사 단위: `sources/thushan__olla` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 638 files, 110 directories, depth score 126, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=main.go, test/cmd/ollamock/main.go, test/cmd/mockbackend/main.go이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | thushan/olla |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | Go |
| Stars | 244 |
| Forks | 34 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/thushan__olla](../../../../sources/thushan__olla) |
| Existing report | [reports/global-trending/repositories/thushan__olla.md](../../../global-trending/repositories/thushan__olla.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 638 / 110 |
| Max observed depth | 5 |
| Top directories | .claude, .github, assets, config, data, docs, examples, internal, pkg, scripts, test, theme |
| Top extensions | .go: 413, .md: 109, .sh: 31, .yaml: 31, .yml: 12, (none): 10, .json: 7, .py: 7, .png: 6, .txt: 4, .css: 2, .gif: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 35 |
| examples/claude-code-llamacpp | examples workspace | 2 |
| examples/claude-code-ollama | examples workspace | 2 |
| examples/crush-vllm | examples workspace | 2 |
| examples/ollama-openwebui | examples workspace | 2 |
| examples/opencode-lmstudio | examples workspace | 2 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| config | top-level component | 1 |
| data | top-level component | 1 |
| examples | top-level component | 1 |
| internal | top-level component | 1 |
| pkg | top-level component | 1 |
| scripts | top-level component | 1 |
| test | validation surface | 1 |
| theme | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build | make build |
| build | Makefile | build-release | make build-release |
| utility | Makefile | validate-linux | make validate-linux |
| utility | Makefile | validate-darwin | make validate-darwin |
| utility | Makefile | validate-windows | make validate-windows |
| utility | Makefile | validate-all-platforms | make validate-all-platforms |
| utility | Makefile | run | make run |
| utility | Makefile | run-debug | make run-debug |
| test | Makefile | test | make test |
| test | Makefile | test-verbose | make test-verbose |
| test | Makefile | test-short | make test-short |
| test | Makefile | test-race | make test-race |
| test | Makefile | test-cover | make test-cover |
| test | Makefile | test-stress | make test-stress |
| test | Makefile | test-cover-html | make test-cover-html |
| utility | Makefile | bench | make bench |
| utility | Makefile | bench-repo | make bench-repo |
| utility | Makefile | bench-balancer | make bench-balancer |
| utility | Makefile | version | make version |


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
| entrypoints | [main.go](../../../../sources/thushan__olla/main.go) | entrypoints signal |
| entrypoints | [test/cmd/ollamock/main.go](../../../../sources/thushan__olla/test/cmd/ollamock/main.go) | entrypoints signal |
| entrypoints | [test/cmd/mockbackend/main.go](../../../../sources/thushan__olla/test/cmd/mockbackend/main.go) | entrypoints signal |
| entrypoints | [internal/app/handlers/server.go](../../../../sources/thushan__olla/internal/app/handlers/server.go) | entrypoints signal |
| container | [docker-compose.yaml](../../../../sources/thushan__olla/docker-compose.yaml) | container signal |
| container | [Dockerfile](../../../../sources/thushan__olla/Dockerfile) | container signal |
| container | [test/mock/compose.yaml](../../../../sources/thushan__olla/test/mock/compose.yaml) | container signal |
| container | [examples/opencode-lmstudio/compose.yaml](../../../../sources/thushan__olla/examples/opencode-lmstudio/compose.yaml) | container signal |
| config | [go.mod](../../../../sources/thushan__olla/go.mod) | config signal |
| config | [makefile](../../../../sources/thushan__olla/makefile) | config signal |
| config | [test/scripts/requirements.txt](../../../../sources/thushan__olla/test/scripts/requirements.txt) | config signal |
| config | [docs/requirements.txt](../../../../sources/thushan__olla/docs/requirements.txt) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [main.go](../../../../sources/thushan__olla/main.go)<br>[test/cmd/ollamock/main.go](../../../../sources/thushan__olla/test/cmd/ollamock/main.go)<br>[test/cmd/mockbackend/main.go](../../../../sources/thushan__olla/test/cmd/mockbackend/main.go)<br>[internal/app/handlers/server.go](../../../../sources/thushan__olla/internal/app/handlers/server.go) |
| agentRuntime | 16 | [internal/core/constants/context.go](../../../../sources/thushan__olla/internal/core/constants/context.go)<br>[internal/adapter/translator/anthropic/tools.go](../../../../sources/thushan__olla/internal/adapter/translator/anthropic/tools.go)<br>[internal/adapter/registry/memory_registry_test.go](../../../../sources/thushan__olla/internal/adapter/registry/memory_registry_test.go)<br>[internal/adapter/registry/memory_registry.go](../../../../sources/thushan__olla/internal/adapter/registry/memory_registry.go)<br>[.claude/skills/test-sticky-sessions.md](../../../../sources/thushan__olla/.claude/skills/test-sticky-sessions.md)<br>[.claude/skills/olla-validate/SKILL.md](../../../../sources/thushan__olla/.claude/skills/olla-validate/SKILL.md)<br>[.claude/skills/olla-validate/areas/anthropic.md](../../../../sources/thushan__olla/.claude/skills/olla-validate/areas/anthropic.md)<br>[.claude/skills/olla-validate/areas/core-routing.md](../../../../sources/thushan__olla/.claude/skills/olla-validate/areas/core-routing.md) |
| mcp | 0 | not obvious |
| retrieval | 6 | [internal/adapter/registry/memory_registry_test.go](../../../../sources/thushan__olla/internal/adapter/registry/memory_registry_test.go)<br>[internal/adapter/registry/memory_registry.go](../../../../sources/thushan__olla/internal/adapter/registry/memory_registry.go)<br>[internal/adapter/registry/unified_memory_registry_benchmark_test.go](../../../../sources/thushan__olla/internal/adapter/registry/unified_memory_registry_benchmark_test.go)<br>[internal/adapter/registry/unified_memory_registry_test.go](../../../../sources/thushan__olla/internal/adapter/registry/unified_memory_registry_test.go)<br>[internal/adapter/registry/unified_memory_registry.go](../../../../sources/thushan__olla/internal/adapter/registry/unified_memory_registry.go)<br>[docs/content/index.md](../../../../sources/thushan__olla/docs/content/index.md) |
| spec | 4 | [test/scripts/requirements.txt](../../../../sources/thushan__olla/test/scripts/requirements.txt)<br>[docs/requirements.txt](../../../../sources/thushan__olla/docs/requirements.txt)<br>[docs/spec/new-backend.md](../../../../sources/thushan__olla/docs/spec/new-backend.md)<br>[docs/content/development/architecture.md](../../../../sources/thushan__olla/docs/content/development/architecture.md) |
| eval | 254 | [test/validate/config.validate.limits.yaml](../../../../sources/thushan__olla/test/validate/config.validate.limits.yaml)<br>[test/validate/config.validate.yaml](../../../../sources/thushan__olla/test/validate/config.validate.yaml)<br>[test/scripts/.gitignore](../../../../sources/thushan__olla/test/scripts/.gitignore)<br>[test/scripts/README.md](../../../../sources/thushan__olla/test/scripts/README.md)<br>[test/scripts/requirements.txt](../../../../sources/thushan__olla/test/scripts/requirements.txt)<br>[test/scripts/streaming/questions.txt](../../../../sources/thushan__olla/test/scripts/streaming/questions.txt)<br>[test/scripts/streaming/README.md](../../../../sources/thushan__olla/test/scripts/streaming/README.md)<br>[test/scripts/streaming/run-all-tests.sh](../../../../sources/thushan__olla/test/scripts/streaming/run-all-tests.sh) |
| security | 36 | [test/scripts/security/test-request-rate-limits.sh](../../../../sources/thushan__olla/test/scripts/security/test-request-rate-limits.sh)<br>[test/scripts/security/test-request-size-limits.sh](../../../../sources/thushan__olla/test/scripts/security/test-request-size-limits.sh)<br>[test/scripts/auth/auth-api-key.sh](../../../../sources/thushan__olla/test/scripts/auth/auth-api-key.sh)<br>[test/scripts/auth/auth-basic.sh](../../../../sources/thushan__olla/test/scripts/auth/auth-basic.sh)<br>[test/scripts/auth/auth-bearer.sh](../../../../sources/thushan__olla/test/scripts/auth/auth-bearer.sh)<br>[test/scripts/auth/auth-env-fatal.sh](../../../../sources/thushan__olla/test/scripts/auth/auth-env-fatal.sh)<br>[test/scripts/auth/auth-headers-only.sh](../../../../sources/thushan__olla/test/scripts/auth/auth-headers-only.sh)<br>[test/scripts/auth/lib.sh](../../../../sources/thushan__olla/test/scripts/auth/lib.sh) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/thushan__olla/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/thushan__olla/.github/workflows/docs.yml)<br>[.github/workflows/release.yml](../../../../sources/thushan__olla/.github/workflows/release.yml) |
| container | 8 | [docker-compose.yaml](../../../../sources/thushan__olla/docker-compose.yaml)<br>[Dockerfile](../../../../sources/thushan__olla/Dockerfile)<br>[test/mock/compose.yaml](../../../../sources/thushan__olla/test/mock/compose.yaml)<br>[examples/opencode-lmstudio/compose.yaml](../../../../sources/thushan__olla/examples/opencode-lmstudio/compose.yaml)<br>[examples/ollama-openwebui/compose.yaml](../../../../sources/thushan__olla/examples/ollama-openwebui/compose.yaml)<br>[examples/crush-vllm/compose.yaml](../../../../sources/thushan__olla/examples/crush-vllm/compose.yaml)<br>[examples/claude-code-ollama/compose.yaml](../../../../sources/thushan__olla/examples/claude-code-ollama/compose.yaml)<br>[examples/claude-code-llamacpp/compose.yaml](../../../../sources/thushan__olla/examples/claude-code-llamacpp/compose.yaml) |
| instruction | 1 | [CLAUDE.md](../../../../sources/thushan__olla/CLAUDE.md) |
| docs | 107 | [readme.md](../../../../sources/thushan__olla/readme.md)<br>[test/scripts/README.md](../../../../sources/thushan__olla/test/scripts/README.md)<br>[test/scripts/streaming/README.md](../../../../sources/thushan__olla/test/scripts/streaming/README.md)<br>[test/scripts/sticky/README.md](../../../../sources/thushan__olla/test/scripts/sticky/README.md)<br>[test/scripts/passthrough/README.md](../../../../sources/thushan__olla/test/scripts/passthrough/README.md)<br>[test/scripts/logic/README.md](../../../../sources/thushan__olla/test/scripts/logic/README.md)<br>[test/scripts/integration/README.md](../../../../sources/thushan__olla/test/scripts/integration/README.md)<br>[test/scripts/cases/README.md](../../../../sources/thushan__olla/test/scripts/cases/README.md) |
| config | 4 | [go.mod](../../../../sources/thushan__olla/go.mod)<br>[makefile](../../../../sources/thushan__olla/makefile)<br>[test/scripts/requirements.txt](../../../../sources/thushan__olla/test/scripts/requirements.txt)<br>[docs/requirements.txt](../../../../sources/thushan__olla/docs/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 254 | [test/validate/config.validate.limits.yaml](../../../../sources/thushan__olla/test/validate/config.validate.limits.yaml)<br>[test/validate/config.validate.yaml](../../../../sources/thushan__olla/test/validate/config.validate.yaml)<br>[test/scripts/.gitignore](../../../../sources/thushan__olla/test/scripts/.gitignore)<br>[test/scripts/README.md](../../../../sources/thushan__olla/test/scripts/README.md)<br>[test/scripts/requirements.txt](../../../../sources/thushan__olla/test/scripts/requirements.txt)<br>[test/scripts/streaming/questions.txt](../../../../sources/thushan__olla/test/scripts/streaming/questions.txt) |
| CI workflows | 3 | [.github/workflows/ci.yml](../../../../sources/thushan__olla/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/thushan__olla/.github/workflows/docs.yml)<br>[.github/workflows/release.yml](../../../../sources/thushan__olla/.github/workflows/release.yml) |
| Containers / deploy | 8 | [docker-compose.yaml](../../../../sources/thushan__olla/docker-compose.yaml)<br>[Dockerfile](../../../../sources/thushan__olla/Dockerfile)<br>[test/mock/compose.yaml](../../../../sources/thushan__olla/test/mock/compose.yaml)<br>[examples/opencode-lmstudio/compose.yaml](../../../../sources/thushan__olla/examples/opencode-lmstudio/compose.yaml)<br>[examples/ollama-openwebui/compose.yaml](../../../../sources/thushan__olla/examples/ollama-openwebui/compose.yaml)<br>[examples/crush-vllm/compose.yaml](../../../../sources/thushan__olla/examples/crush-vllm/compose.yaml) |
| Security / policy | 36 | [test/scripts/security/test-request-rate-limits.sh](../../../../sources/thushan__olla/test/scripts/security/test-request-rate-limits.sh)<br>[test/scripts/security/test-request-size-limits.sh](../../../../sources/thushan__olla/test/scripts/security/test-request-size-limits.sh)<br>[test/scripts/auth/auth-api-key.sh](../../../../sources/thushan__olla/test/scripts/auth/auth-api-key.sh)<br>[test/scripts/auth/auth-basic.sh](../../../../sources/thushan__olla/test/scripts/auth/auth-basic.sh)<br>[test/scripts/auth/auth-bearer.sh](../../../../sources/thushan__olla/test/scripts/auth/auth-bearer.sh)<br>[test/scripts/auth/auth-env-fatal.sh](../../../../sources/thushan__olla/test/scripts/auth/auth-env-fatal.sh) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/thushan__olla/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `main.go`, `test/cmd/ollamock/main.go`, `test/cmd/mockbackend/main.go`.
2. Trace execution through entrypoints: `main.go`, `test/cmd/ollamock/main.go`, `test/cmd/mockbackend/main.go`.
3. Map agent/tool runtime through: `internal/core/constants/context.go`, `internal/adapter/translator/anthropic/tools.go`, `internal/adapter/registry/memory_registry_test.go`.
4. Inspect retrieval/memory/indexing through: `internal/adapter/registry/memory_registry_test.go`, `internal/adapter/registry/memory_registry.go`, `internal/adapter/registry/unified_memory_registry_benchmark_test.go`.
5. Verify behavior through test/eval files: `test/validate/config.validate.limits.yaml`, `test/validate/config.validate.yaml`, `test/scripts/.gitignore`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 High performance lightweight proxy and load balancer for LLM infrastructure. Intelligent routing, automatic failover and. 핵심 구조 신호는 Go, go.mod, Dockerfile, Makefile, README.md, CLAUDE.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
