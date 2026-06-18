# thushan/olla 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

High-performance lightweight proxy and load balancer for LLM infrastructure. Intelligent routing, automatic failover and unified model discovery across local and remote inference backends.

## 요약

- 조사 단위: `sources/thushan__olla` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 638 files, 110 directories, depth score 120, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=main.go, test/cmd/ollamock/main.go, test/cmd/mockbackend/main.go이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | thushan/olla |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | Go |
| Stars | 244 |
| Forks | 34 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/thushan__olla](../../../../sources/thushan__olla) |
| 기존 보고서 | [reports/global-trending/repositories/thushan__olla.md](../../../global-trending/repositories/thushan__olla.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 638 / 110 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .claude, .github, assets, config, data, docs, examples, internal, pkg, scripts, test, theme |
| 상위 확장자 | .go: 413, .md: 109, .sh: 31, .yaml: 31, .yml: 12, (none): 10, .json: 7, .py: 7, .png: 6, .txt: 4, .css: 2, .gif: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [main.go](../../../../sources/thushan__olla/main.go)<br>[test/cmd/ollamock/main.go](../../../../sources/thushan__olla/test/cmd/ollamock/main.go)<br>[test/cmd/mockbackend/main.go](../../../../sources/thushan__olla/test/cmd/mockbackend/main.go)<br>[internal/app/handlers/server.go](../../../../sources/thushan__olla/internal/app/handlers/server.go) |
| agentRuntime | 16 | [internal/core/constants/context.go](../../../../sources/thushan__olla/internal/core/constants/context.go)<br>[internal/adapter/translator/anthropic/tools.go](../../../../sources/thushan__olla/internal/adapter/translator/anthropic/tools.go)<br>[internal/adapter/registry/memory_registry_test.go](../../../../sources/thushan__olla/internal/adapter/registry/memory_registry_test.go)<br>[internal/adapter/registry/memory_registry.go](../../../../sources/thushan__olla/internal/adapter/registry/memory_registry.go)<br>[.claude/skills/test-sticky-sessions.md](../../../../sources/thushan__olla/.claude/skills/test-sticky-sessions.md)<br>[.claude/skills/olla-validate/SKILL.md](../../../../sources/thushan__olla/.claude/skills/olla-validate/SKILL.md)<br>[.claude/skills/olla-validate/areas/anthropic.md](../../../../sources/thushan__olla/.claude/skills/olla-validate/areas/anthropic.md)<br>[.claude/skills/olla-validate/areas/core-routing.md](../../../../sources/thushan__olla/.claude/skills/olla-validate/areas/core-routing.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 6 | [internal/adapter/registry/memory_registry_test.go](../../../../sources/thushan__olla/internal/adapter/registry/memory_registry_test.go)<br>[internal/adapter/registry/memory_registry.go](../../../../sources/thushan__olla/internal/adapter/registry/memory_registry.go)<br>[internal/adapter/registry/unified_memory_registry_benchmark_test.go](../../../../sources/thushan__olla/internal/adapter/registry/unified_memory_registry_benchmark_test.go)<br>[internal/adapter/registry/unified_memory_registry_test.go](../../../../sources/thushan__olla/internal/adapter/registry/unified_memory_registry_test.go)<br>[internal/adapter/registry/unified_memory_registry.go](../../../../sources/thushan__olla/internal/adapter/registry/unified_memory_registry.go)<br>[docs/content/index.md](../../../../sources/thushan__olla/docs/content/index.md) |
| spec | 4 | [test/scripts/requirements.txt](../../../../sources/thushan__olla/test/scripts/requirements.txt)<br>[docs/requirements.txt](../../../../sources/thushan__olla/docs/requirements.txt)<br>[docs/spec/new-backend.md](../../../../sources/thushan__olla/docs/spec/new-backend.md)<br>[docs/content/development/architecture.md](../../../../sources/thushan__olla/docs/content/development/architecture.md) |
| eval | 254 | [test/validate/config.validate.limits.yaml](../../../../sources/thushan__olla/test/validate/config.validate.limits.yaml)<br>[test/validate/config.validate.yaml](../../../../sources/thushan__olla/test/validate/config.validate.yaml)<br>[test/scripts/.gitignore](../../../../sources/thushan__olla/test/scripts/.gitignore)<br>[test/scripts/README.md](../../../../sources/thushan__olla/test/scripts/README.md)<br>[test/scripts/requirements.txt](../../../../sources/thushan__olla/test/scripts/requirements.txt)<br>[test/scripts/streaming/questions.txt](../../../../sources/thushan__olla/test/scripts/streaming/questions.txt)<br>[test/scripts/streaming/README.md](../../../../sources/thushan__olla/test/scripts/streaming/README.md)<br>[test/scripts/streaming/run-all-tests.sh](../../../../sources/thushan__olla/test/scripts/streaming/run-all-tests.sh) |
| security | 36 | [test/scripts/security/test-request-rate-limits.sh](../../../../sources/thushan__olla/test/scripts/security/test-request-rate-limits.sh)<br>[test/scripts/security/test-request-size-limits.sh](../../../../sources/thushan__olla/test/scripts/security/test-request-size-limits.sh)<br>[test/scripts/auth/auth-api-key.sh](../../../../sources/thushan__olla/test/scripts/auth/auth-api-key.sh)<br>[test/scripts/auth/auth-basic.sh](../../../../sources/thushan__olla/test/scripts/auth/auth-basic.sh)<br>[test/scripts/auth/auth-bearer.sh](../../../../sources/thushan__olla/test/scripts/auth/auth-bearer.sh)<br>[test/scripts/auth/auth-env-fatal.sh](../../../../sources/thushan__olla/test/scripts/auth/auth-env-fatal.sh)<br>[test/scripts/auth/auth-headers-only.sh](../../../../sources/thushan__olla/test/scripts/auth/auth-headers-only.sh)<br>[test/scripts/auth/lib.sh](../../../../sources/thushan__olla/test/scripts/auth/lib.sh) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/thushan__olla/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/thushan__olla/.github/workflows/docs.yml)<br>[.github/workflows/release.yml](../../../../sources/thushan__olla/.github/workflows/release.yml) |
| container | 8 | [docker-compose.yaml](../../../../sources/thushan__olla/docker-compose.yaml)<br>[Dockerfile](../../../../sources/thushan__olla/Dockerfile)<br>[test/mock/compose.yaml](../../../../sources/thushan__olla/test/mock/compose.yaml)<br>[examples/opencode-lmstudio/compose.yaml](../../../../sources/thushan__olla/examples/opencode-lmstudio/compose.yaml)<br>[examples/ollama-openwebui/compose.yaml](../../../../sources/thushan__olla/examples/ollama-openwebui/compose.yaml)<br>[examples/crush-vllm/compose.yaml](../../../../sources/thushan__olla/examples/crush-vllm/compose.yaml)<br>[examples/claude-code-ollama/compose.yaml](../../../../sources/thushan__olla/examples/claude-code-ollama/compose.yaml)<br>[examples/claude-code-llamacpp/compose.yaml](../../../../sources/thushan__olla/examples/claude-code-llamacpp/compose.yaml) |
| instruction | 1 | [CLAUDE.md](../../../../sources/thushan__olla/CLAUDE.md) |
| docs | 107 | [readme.md](../../../../sources/thushan__olla/readme.md)<br>[test/scripts/README.md](../../../../sources/thushan__olla/test/scripts/README.md)<br>[test/scripts/streaming/README.md](../../../../sources/thushan__olla/test/scripts/streaming/README.md)<br>[test/scripts/sticky/README.md](../../../../sources/thushan__olla/test/scripts/sticky/README.md)<br>[test/scripts/passthrough/README.md](../../../../sources/thushan__olla/test/scripts/passthrough/README.md)<br>[test/scripts/logic/README.md](../../../../sources/thushan__olla/test/scripts/logic/README.md)<br>[test/scripts/integration/README.md](../../../../sources/thushan__olla/test/scripts/integration/README.md)<br>[test/scripts/cases/README.md](../../../../sources/thushan__olla/test/scripts/cases/README.md) |
| config | 4 | [go.mod](../../../../sources/thushan__olla/go.mod)<br>[makefile](../../../../sources/thushan__olla/makefile)<br>[test/scripts/requirements.txt](../../../../sources/thushan__olla/test/scripts/requirements.txt)<br>[docs/requirements.txt](../../../../sources/thushan__olla/docs/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 254 | [test/validate/config.validate.limits.yaml](../../../../sources/thushan__olla/test/validate/config.validate.limits.yaml)<br>[test/validate/config.validate.yaml](../../../../sources/thushan__olla/test/validate/config.validate.yaml)<br>[test/scripts/.gitignore](../../../../sources/thushan__olla/test/scripts/.gitignore)<br>[test/scripts/README.md](../../../../sources/thushan__olla/test/scripts/README.md)<br>[test/scripts/requirements.txt](../../../../sources/thushan__olla/test/scripts/requirements.txt)<br>[test/scripts/streaming/questions.txt](../../../../sources/thushan__olla/test/scripts/streaming/questions.txt) |
| CI workflow | 3 | [.github/workflows/ci.yml](../../../../sources/thushan__olla/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/thushan__olla/.github/workflows/docs.yml)<br>[.github/workflows/release.yml](../../../../sources/thushan__olla/.github/workflows/release.yml) |
| 컨테이너/배포 | 8 | [docker-compose.yaml](../../../../sources/thushan__olla/docker-compose.yaml)<br>[Dockerfile](../../../../sources/thushan__olla/Dockerfile)<br>[test/mock/compose.yaml](../../../../sources/thushan__olla/test/mock/compose.yaml)<br>[examples/opencode-lmstudio/compose.yaml](../../../../sources/thushan__olla/examples/opencode-lmstudio/compose.yaml)<br>[examples/ollama-openwebui/compose.yaml](../../../../sources/thushan__olla/examples/ollama-openwebui/compose.yaml)<br>[examples/crush-vllm/compose.yaml](../../../../sources/thushan__olla/examples/crush-vllm/compose.yaml) |
| 보안/정책 | 36 | [test/scripts/security/test-request-rate-limits.sh](../../../../sources/thushan__olla/test/scripts/security/test-request-rate-limits.sh)<br>[test/scripts/security/test-request-size-limits.sh](../../../../sources/thushan__olla/test/scripts/security/test-request-size-limits.sh)<br>[test/scripts/auth/auth-api-key.sh](../../../../sources/thushan__olla/test/scripts/auth/auth-api-key.sh)<br>[test/scripts/auth/auth-basic.sh](../../../../sources/thushan__olla/test/scripts/auth/auth-basic.sh)<br>[test/scripts/auth/auth-bearer.sh](../../../../sources/thushan__olla/test/scripts/auth/auth-bearer.sh)<br>[test/scripts/auth/auth-env-fatal.sh](../../../../sources/thushan__olla/test/scripts/auth/auth-env-fatal.sh) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/thushan__olla/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `main.go`, `test/cmd/ollamock/main.go`, `test/cmd/mockbackend/main.go`.
2. entrypoint를 따라 실행 흐름 확인: `main.go`, `test/cmd/ollamock/main.go`, `test/cmd/mockbackend/main.go`.
3. agent/tool runtime 매핑: `internal/core/constants/context.go`, `internal/adapter/translator/anthropic/tools.go`, `internal/adapter/registry/memory_registry_test.go`.
4. retrieval/memory/indexing 확인: `internal/adapter/registry/memory_registry_test.go`, `internal/adapter/registry/memory_registry.go`, `internal/adapter/registry/unified_memory_registry_benchmark_test.go`.
5. test/eval 파일로 동작 검증: `test/validate/config.validate.limits.yaml`, `test/validate/config.validate.yaml`, `test/scripts/.gitignore`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 High performance lightweight proxy and load balancer for LLM infrastructure. Intelligent routing, automatic failover and. 핵심 구조 신호는 Go, go.mod, Dockerfile, Makefile, README.md, CLAUDE.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
