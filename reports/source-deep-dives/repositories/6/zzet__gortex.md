# zzet/gortex 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

High-performance code graph and code intelligence engine, supports 257 languages, multi repositories, with access via CLI, MCP Server, and API. Built for AI coding agents - expose only needed information, cutting token usage up to 50x. 100% local.

## 요약

- 조사 단위: `sources/zzet__gortex` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,397 files, 261 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=internal/parser/languages/mcp_config_test.go, internal/parser/languages/mcp_config.go, internal/mcp/agent_registry_test.go이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | zzet/gortex |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Go |
| Stars | 492 |
| Forks | 39 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/zzet__gortex](../../../../sources/zzet__gortex) |
| 기존 보고서 | [reports/global-trending/repositories/zzet__gortex.md](../../../global-trending/repositories/zzet__gortex.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2397 / 261 |
| 관측 최대 깊이 | 11 |
| 상위 디렉터리 | .github, assets, bench, cmd, docs, eval, examples, internal, pkg, scripts |
| 상위 확장자 | .go: 2130, .md: 49, .py: 39, .yaml: 36, .ts: 34, .txt: 16, (none): 14, .php: 13, .yml: 12, .json: 11, .java: 7, .jinja: 6 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 28 |
| cmd/gortex | cmd workspace | 3 |
| examples/.github | examples workspace | 2 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| bench | validation surface | 1 |
| cmd | source boundary | 1 |
| eval | top-level component | 1 |
| examples | top-level component | 1 |
| internal | top-level component | 1 |
| pkg | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build | make build |
| build | Makefile | build-onnx | make build-onnx |
| build | Makefile | build-gomlx | make build-gomlx |
| build | Makefile | build-hugot | make build-hugot |
| test | Makefile | test | make test |
| utility | Makefile | bench | make bench |
| utility | Makefile | bench-rpi | make bench-rpi |
| utility | Makefile | bench-rpi-quick | make bench-rpi-quick |
| utility | Makefile | bench-rpi-profile | make bench-rpi-profile |
| utility | Makefile | bench-compare | make bench-compare |
| utility | Makefile | bench-save-baseline | make bench-save-baseline |
| quality | Makefile | lint | make lint |
| quality | Makefile | fmt | make fmt |
| utility | Makefile | clean | make clean |
| utility | Makefile | install | make install |
| serve-dev | Makefile | dev-link | make dev-link |
| build | Makefile | tag-release | make tag-release |
| build | Makefile | build-rpi | make build-rpi |
| build | Makefile | build-rpi32 | make build-rpi32 |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [internal/parser/languages/mcp_config_test.go](../../../../sources/zzet__gortex/internal/parser/languages/mcp_config_test.go) | mcp signal |
| mcp | [internal/parser/languages/mcp_config.go](../../../../sources/zzet__gortex/internal/parser/languages/mcp_config.go) | mcp signal |
| mcp | [internal/mcp/agent_registry_test.go](../../../../sources/zzet__gortex/internal/mcp/agent_registry_test.go) | mcp signal |
| mcp | [internal/mcp/agent_registry.go](../../../../sources/zzet__gortex/internal/mcp/agent_registry.go) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/zzet__gortex/AGENTS.md) | agentRuntime signal |
| agentRuntime | [internal/skills/build.go](../../../../sources/zzet__gortex/internal/skills/build.go) | agentRuntime signal |
| agentRuntime | [internal/skills/generator_test.go](../../../../sources/zzet__gortex/internal/skills/generator_test.go) | agentRuntime signal |
| agentRuntime | [internal/skills/generator.go](../../../../sources/zzet__gortex/internal/skills/generator.go) | agentRuntime signal |
| entrypoints | [internal/parser/languages/cmd/dump/main.go](../../../../sources/zzet__gortex/internal/parser/languages/cmd/dump/main.go) | entrypoints signal |
| entrypoints | [internal/mcp/server.go](../../../../sources/zzet__gortex/internal/mcp/server.go) | entrypoints signal |
| entrypoints | [internal/llm/cmd/llmtest/main.go](../../../../sources/zzet__gortex/internal/llm/cmd/llmtest/main.go) | entrypoints signal |
| entrypoints | [internal/llm/cmd/daemonprobe/main.go](../../../../sources/zzet__gortex/internal/llm/cmd/daemonprobe/main.go) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 17 | [internal/parser/languages/cmd/dump/main.go](../../../../sources/zzet__gortex/internal/parser/languages/cmd/dump/main.go)<br>[internal/mcp/server.go](../../../../sources/zzet__gortex/internal/mcp/server.go)<br>[internal/llm/cmd/llmtest/main.go](../../../../sources/zzet__gortex/internal/llm/cmd/llmtest/main.go)<br>[internal/llm/cmd/daemonprobe/main.go](../../../../sources/zzet__gortex/internal/llm/cmd/daemonprobe/main.go)<br>[internal/llm/cmd/bench/main.go](../../../../sources/zzet__gortex/internal/llm/cmd/bench/main.go)<br>[internal/llm/cmd/agentdemo/main.go](../../../../sources/zzet__gortex/internal/llm/cmd/agentdemo/main.go)<br>[internal/daemon/server.go](../../../../sources/zzet__gortex/internal/daemon/server.go)<br>[docs/server.md](../../../../sources/zzet__gortex/docs/server.md) |
| agentRuntime | 403 | [AGENTS.md](../../../../sources/zzet__gortex/AGENTS.md)<br>[internal/skills/build.go](../../../../sources/zzet__gortex/internal/skills/build.go)<br>[internal/skills/generator_test.go](../../../../sources/zzet__gortex/internal/skills/generator_test.go)<br>[internal/skills/generator.go](../../../../sources/zzet__gortex/internal/skills/generator.go)<br>[internal/search/rerank/context.go](../../../../sources/zzet__gortex/internal/search/rerank/context.go)<br>[internal/mcp/agent_registry_test.go](../../../../sources/zzet__gortex/internal/mcp/agent_registry_test.go)<br>[internal/mcp/agent_registry.go](../../../../sources/zzet__gortex/internal/mcp/agent_registry.go)<br>[internal/mcp/tool_budget_seed_test.go](../../../../sources/zzet__gortex/internal/mcp/tool_budget_seed_test.go) |
| mcp | 423 | [internal/parser/languages/mcp_config_test.go](../../../../sources/zzet__gortex/internal/parser/languages/mcp_config_test.go)<br>[internal/parser/languages/mcp_config.go](../../../../sources/zzet__gortex/internal/parser/languages/mcp_config.go)<br>[internal/mcp/agent_registry_test.go](../../../../sources/zzet__gortex/internal/mcp/agent_registry_test.go)<br>[internal/mcp/agent_registry.go](../../../../sources/zzet__gortex/internal/mcp/agent_registry.go)<br>[internal/mcp/auto_index_test.go](../../../../sources/zzet__gortex/internal/mcp/auto_index_test.go)<br>[internal/mcp/auto_index.go](../../../../sources/zzet__gortex/internal/mcp/auto_index.go)<br>[internal/mcp/batch_edit_crlf_test.go](../../../../sources/zzet__gortex/internal/mcp/batch_edit_crlf_test.go)<br>[internal/mcp/batch_edit_hetero_test.go](../../../../sources/zzet__gortex/internal/mcp/batch_edit_hetero_test.go) |
| retrieval | 139 | [internal/wiki/enhance_cache.go](../../../../sources/zzet__gortex/internal/wiki/enhance_cache.go)<br>[internal/wiki/enhancer_claudecli.go](../../../../sources/zzet__gortex/internal/wiki/enhancer_claudecli.go)<br>[internal/wiki/enhancer_test.go](../../../../sources/zzet__gortex/internal/wiki/enhancer_test.go)<br>[internal/wiki/enhancer.go](../../../../sources/zzet__gortex/internal/wiki/enhancer.go)<br>[internal/wiki/generator_test.go](../../../../sources/zzet__gortex/internal/wiki/generator_test.go)<br>[internal/wiki/generator.go](../../../../sources/zzet__gortex/internal/wiki/generator.go)<br>[internal/wiki/html.go](../../../../sources/zzet__gortex/internal/wiki/html.go)<br>[internal/wiki/mermaid.go](../../../../sources/zzet__gortex/internal/wiki/mermaid.go) |
| spec | 9 | [internal/semantic/tstypes/spec.go](../../../../sources/zzet__gortex/internal/semantic/tstypes/spec.go)<br>[internal/mcp/tools_architecture_hierarchy_test.go](../../../../sources/zzet__gortex/internal/mcp/tools_architecture_hierarchy_test.go)<br>[internal/mcp/tools_architecture_test.go](../../../../sources/zzet__gortex/internal/mcp/tools_architecture_test.go)<br>[internal/mcp/tools_architecture.go](../../../../sources/zzet__gortex/internal/mcp/tools_architecture.go)<br>[internal/indexer/spec_launch_acceptance_test.go](../../../../sources/zzet__gortex/internal/indexer/spec_launch_acceptance_test.go)<br>[internal/analysis/architecture_test.go](../../../../sources/zzet__gortex/internal/analysis/architecture_test.go)<br>[internal/analysis/architecture.go](../../../../sources/zzet__gortex/internal/analysis/architecture.go)<br>[examples/.github/workflows/gortex-architecture.yml](../../../../sources/zzet__gortex/examples/.github/workflows/gortex-architecture.yml) |
| eval | 1287 | [BENCHMARK-SWE.md](../../../../sources/zzet__gortex/BENCHMARK-SWE.md)<br>[BENCHMARK.md](../../../../sources/zzet__gortex/BENCHMARK.md)<br>[scripts/bench-rpi.sh](../../../../sources/zzet__gortex/scripts/bench-rpi.sh)<br>[pkg/gortex/api_test.go](../../../../sources/zzet__gortex/pkg/gortex/api_test.go)<br>[internal/wiki/enhancer_test.go](../../../../sources/zzet__gortex/internal/wiki/enhancer_test.go)<br>[internal/wiki/generator_test.go](../../../../sources/zzet__gortex/internal/wiki/generator_test.go)<br>[internal/version/version_test.go](../../../../sources/zzet__gortex/internal/version/version_test.go)<br>[internal/tokens/cache_sweep_test.go](../../../../sources/zzet__gortex/internal/tokens/cache_sweep_test.go) |
| security | 30 | [SECURITY.md](../../../../sources/zzet__gortex/SECURITY.md)<br>[internal/server/auth_rotate_test.go](../../../../sources/zzet__gortex/internal/server/auth_rotate_test.go)<br>[internal/server/auth_test.go](../../../../sources/zzet__gortex/internal/server/auth_test.go)<br>[internal/server/auth.go](../../../../sources/zzet__gortex/internal/server/auth.go)<br>[internal/resolver/cross_pkg_call_guard_test.go](../../../../sources/zzet__gortex/internal/resolver/cross_pkg_call_guard_test.go)<br>[internal/resolver/cross_pkg_guard.go](../../../../sources/zzet__gortex/internal/resolver/cross_pkg_guard.go)<br>[internal/mcp/tools_analyze_edge_audit.go](../../../../sources/zzet__gortex/internal/mcp/tools_analyze_edge_audit.go)<br>[internal/mcp/tools_audit_test.go](../../../../sources/zzet__gortex/internal/mcp/tools_audit_test.go) |
| ci | 11 | [examples/.github/workflows/gortex-architecture.yml](../../../../sources/zzet__gortex/examples/.github/workflows/gortex-architecture.yml)<br>[.github/workflows/bench-arm.yml](../../../../sources/zzet__gortex/.github/workflows/bench-arm.yml)<br>[.github/workflows/ci.yml](../../../../sources/zzet__gortex/.github/workflows/ci.yml)<br>[.github/workflows/gortex-pr-review.yml.example](../../../../sources/zzet__gortex/.github/workflows/gortex-pr-review.yml.example)<br>[.github/workflows/init-smoke.yml](../../../../sources/zzet__gortex/.github/workflows/init-smoke.yml)<br>[.github/workflows/install-script.yml](../../../../sources/zzet__gortex/.github/workflows/install-script.yml)<br>[.github/workflows/publish-claude-plugin.yml](../../../../sources/zzet__gortex/.github/workflows/publish-claude-plugin.yml)<br>[.github/workflows/release.yml](../../../../sources/zzet__gortex/.github/workflows/release.yml) |
| container | 4 | [internal/parser/tsitter/dockerfile/dockerfile.go](../../../../sources/zzet__gortex/internal/parser/tsitter/dockerfile/dockerfile.go)<br>[internal/parser/languages/dockerfile_infra_test.go](../../../../sources/zzet__gortex/internal/parser/languages/dockerfile_infra_test.go)<br>[internal/parser/languages/dockerfile_test.go](../../../../sources/zzet__gortex/internal/parser/languages/dockerfile_test.go)<br>[internal/parser/languages/dockerfile.go](../../../../sources/zzet__gortex/internal/parser/languages/dockerfile.go) |
| instruction | 3 | [AGENTS.md](../../../../sources/zzet__gortex/AGENTS.md)<br>[CLAUDE.md](../../../../sources/zzet__gortex/CLAUDE.md)<br>[docs/agents.md](../../../../sources/zzet__gortex/docs/agents.md) |
| docs | 38 | [README.md](../../../../sources/zzet__gortex/README.md)<br>[internal/thirdparty/renameio/README.md](../../../../sources/zzet__gortex/internal/thirdparty/renameio/README.md)<br>[internal/resolver/README.md](../../../../sources/zzet__gortex/internal/resolver/README.md)<br>[internal/docs/docs_test.go](../../../../sources/zzet__gortex/internal/docs/docs_test.go)<br>[internal/docs/docs.go](../../../../sources/zzet__gortex/internal/docs/docs.go)<br>[internal/docs/render.go](../../../../sources/zzet__gortex/internal/docs/render.go)<br>[internal/daemon/README.md](../../../../sources/zzet__gortex/internal/daemon/README.md)<br>[internal/contracts/README.md](../../../../sources/zzet__gortex/internal/contracts/README.md) |
| config | 10 | [go.mod](../../../../sources/zzet__gortex/go.mod)<br>[Makefile](../../../../sources/zzet__gortex/Makefile)<br>[internal/thirdparty/renameio/go.mod](../../../../sources/zzet__gortex/internal/thirdparty/renameio/go.mod)<br>[internal/thirdparty/go-pointer/go.mod](../../../../sources/zzet__gortex/internal/thirdparty/go-pointer/go.mod)<br>[eval/pyproject.toml](../../../../sources/zzet__gortex/eval/pyproject.toml)<br>[bench/fixtures/di/nestjs/package.json](../../../../sources/zzet__gortex/bench/fixtures/di/nestjs/package.json)<br>[bench/fixtures/di/nestjs/tsconfig.json](../../../../sources/zzet__gortex/bench/fixtures/di/nestjs/tsconfig.json)<br>[bench/fixtures/di/fastapi/pyproject.toml](../../../../sources/zzet__gortex/bench/fixtures/di/fastapi/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1287 | [BENCHMARK-SWE.md](../../../../sources/zzet__gortex/BENCHMARK-SWE.md)<br>[BENCHMARK.md](../../../../sources/zzet__gortex/BENCHMARK.md)<br>[scripts/bench-rpi.sh](../../../../sources/zzet__gortex/scripts/bench-rpi.sh)<br>[pkg/gortex/api_test.go](../../../../sources/zzet__gortex/pkg/gortex/api_test.go)<br>[internal/wiki/enhancer_test.go](../../../../sources/zzet__gortex/internal/wiki/enhancer_test.go)<br>[internal/wiki/generator_test.go](../../../../sources/zzet__gortex/internal/wiki/generator_test.go) |
| CI workflow | 11 | [examples/.github/workflows/gortex-architecture.yml](../../../../sources/zzet__gortex/examples/.github/workflows/gortex-architecture.yml)<br>[.github/workflows/bench-arm.yml](../../../../sources/zzet__gortex/.github/workflows/bench-arm.yml)<br>[.github/workflows/ci.yml](../../../../sources/zzet__gortex/.github/workflows/ci.yml)<br>[.github/workflows/gortex-pr-review.yml.example](../../../../sources/zzet__gortex/.github/workflows/gortex-pr-review.yml.example)<br>[.github/workflows/init-smoke.yml](../../../../sources/zzet__gortex/.github/workflows/init-smoke.yml)<br>[.github/workflows/install-script.yml](../../../../sources/zzet__gortex/.github/workflows/install-script.yml) |
| 컨테이너/배포 | 4 | [internal/parser/tsitter/dockerfile/dockerfile.go](../../../../sources/zzet__gortex/internal/parser/tsitter/dockerfile/dockerfile.go)<br>[internal/parser/languages/dockerfile_infra_test.go](../../../../sources/zzet__gortex/internal/parser/languages/dockerfile_infra_test.go)<br>[internal/parser/languages/dockerfile_test.go](../../../../sources/zzet__gortex/internal/parser/languages/dockerfile_test.go)<br>[internal/parser/languages/dockerfile.go](../../../../sources/zzet__gortex/internal/parser/languages/dockerfile.go) |
| 보안/정책 | 30 | [SECURITY.md](../../../../sources/zzet__gortex/SECURITY.md)<br>[internal/server/auth_rotate_test.go](../../../../sources/zzet__gortex/internal/server/auth_rotate_test.go)<br>[internal/server/auth_test.go](../../../../sources/zzet__gortex/internal/server/auth_test.go)<br>[internal/server/auth.go](../../../../sources/zzet__gortex/internal/server/auth.go)<br>[internal/resolver/cross_pkg_call_guard_test.go](../../../../sources/zzet__gortex/internal/resolver/cross_pkg_call_guard_test.go)<br>[internal/resolver/cross_pkg_guard.go](../../../../sources/zzet__gortex/internal/resolver/cross_pkg_guard.go) |
| 에이전트 지시문 | 3 | [AGENTS.md](../../../../sources/zzet__gortex/AGENTS.md)<br>[CLAUDE.md](../../../../sources/zzet__gortex/CLAUDE.md)<br>[docs/agents.md](../../../../sources/zzet__gortex/docs/agents.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `internal/parser/languages/mcp_config_test.go`, `internal/parser/languages/mcp_config.go`, `internal/mcp/agent_registry_test.go`.
2. entrypoint를 따라 실행 흐름 확인: `internal/parser/languages/cmd/dump/main.go`, `internal/mcp/server.go`, `internal/llm/cmd/llmtest/main.go`.
3. agent/tool runtime 매핑: `AGENTS.md`, `internal/skills/build.go`, `internal/skills/generator_test.go`.
4. retrieval/memory/indexing 확인: `internal/wiki/enhance_cache.go`, `internal/wiki/enhancer_claudecli.go`, `internal/wiki/enhancer_test.go`.
5. test/eval 파일로 동작 검증: `BENCHMARK-SWE.md`, `BENCHMARK.md`, `scripts/bench-rpi.sh`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 High performance code graph and code intelligence engine, supports 257 languages, multi repositories, with access via CL. 핵심 구조 신호는 Go, go.mod, Makefile, README.md, AGENTS.md, CLAUDE.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
