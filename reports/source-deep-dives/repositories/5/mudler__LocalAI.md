# mudler/LocalAI 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Local clone structure analysis: 2606 files, 284 directories.

## 요약

- 조사 단위: `sources/mudler__LocalAI` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,597 files, 282 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/e2e/e2e_mcp_test.go, tests/e2e/distributed/mcp_ci_job_helper_test.go, tests/e2e/distributed/mcp_ci_job_test.go이고, 의존성 단서는 openai, anthropic, modelcontextprotocol, langchain, ollama, llama, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | mudler/LocalAI |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 46944 |
| Forks | 4146 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/mudler__LocalAI](../../../../sources/mudler__LocalAI) |
| 기존 보고서 | [reports/global-trending/repositories/mudler__LocalAI.md](../../../global-trending/repositories/mudler__LocalAI.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2597 / 282 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .agents, .devcontainer, .devcontainer-scripts, .docker, .githooks, .github, backend, cmd, configuration, core, custom-ca-certs, docs, examples, gallery, internal, pkg, prompt-templates, scripts, swagger, tests |
| 상위 확장자 | .go: 1117, .txt: 274, .sh: 204, .md: 125, .jsx: 115, .yaml: 109, .js: 95, (none): 94, .py: 92, .json: 90, .html: 64, .png: 45 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | langchain |
| vectorStores | faiss |
| modelRuntime | ollama, llama |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | opentelemetry, prometheus |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 602 | [tests/integration/integration_suite_test.go](../../../../sources/mudler__LocalAI/tests/integration/integration_suite_test.go)<br>[tests/integration/stores_test.go](../../../../sources/mudler__LocalAI/tests/integration/stores_test.go)<br>[tests/fixtures/gallery_simple.yaml](../../../../sources/mudler__LocalAI/tests/fixtures/gallery_simple.yaml)<br>[tests/fixtures/faces/README.md](../../../../sources/mudler__LocalAI/tests/fixtures/faces/README.md)<br>[tests/fixtures/backend-image/Dockerfile](../../../../sources/mudler__LocalAI/tests/fixtures/backend-image/Dockerfile)<br>[tests/fixtures/backend-image/run.sh](../../../../sources/mudler__LocalAI/tests/fixtures/backend-image/run.sh) |
| CI workflow | 39 | [.github/workflows/backend_build_darwin.yml](../../../../sources/mudler__LocalAI/.github/workflows/backend_build_darwin.yml)<br>[.github/workflows/backend_build.yml](../../../../sources/mudler__LocalAI/.github/workflows/backend_build.yml)<br>[.github/workflows/backend_merge.yml](../../../../sources/mudler__LocalAI/.github/workflows/backend_merge.yml)<br>[.github/workflows/backend_pr.yml](../../../../sources/mudler__LocalAI/.github/workflows/backend_pr.yml)<br>[.github/workflows/backend.yml](../../../../sources/mudler__LocalAI/.github/workflows/backend.yml)<br>[.github/workflows/base-images.yml](../../../../sources/mudler__LocalAI/.github/workflows/base-images.yml) |
| 컨테이너/배포 | 16 | [docker-compose.distributed.yaml](../../../../sources/mudler__LocalAI/docker-compose.distributed.yaml)<br>[docker-compose.yaml](../../../../sources/mudler__LocalAI/docker-compose.yaml)<br>[Dockerfile](../../../../sources/mudler__LocalAI/Dockerfile)<br>[tests/fixtures/backend-image/Dockerfile](../../../../sources/mudler__LocalAI/tests/fixtures/backend-image/Dockerfile)<br>[tests/e2e-ui/Dockerfile](../../../../sources/mudler__LocalAI/tests/e2e-ui/Dockerfile)<br>[docs/docker-compose.yaml](../../../../sources/mudler__LocalAI/docs/docker-compose.yaml) |
| 보안/정책 | 50 | [SECURITY.md](../../../../sources/mudler__LocalAI/SECURITY.md)<br>[scripts/nats-auth-setup.sh](../../../../sources/mudler__LocalAI/scripts/nats-auth-setup.sh)<br>[pkg/grpc/auth_test.go](../../../../sources/mudler__LocalAI/pkg/grpc/auth_test.go)<br>[core/services/worker/auth_required_test.go](../../../../sources/mudler__LocalAI/core/services/worker/auth_required_test.go)<br>[core/services/nodes/prefixcache/policy_test.go](../../../../sources/mudler__LocalAI/core/services/nodes/prefixcache/policy_test.go)<br>[core/services/nodes/prefixcache/policy.go](../../../../sources/mudler__LocalAI/core/services/nodes/prefixcache/policy.go) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/mudler__LocalAI/AGENTS.md)<br>[docs/content/features/agents.md](../../../../sources/mudler__LocalAI/docs/content/features/agents.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/e2e/e2e_mcp_test.go`, `tests/e2e/distributed/mcp_ci_job_helper_test.go`, `tests/e2e/distributed/mcp_ci_job_test.go`.
2. entrypoint를 따라 실행 흐름 확인: `tests/e2e-ui/main.go`, `tests/e2e/mock-backend/main.go`, `pkg/mcp/localaitools/server.go`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tests/e2e/distributed/agent_distributed_test.go`, `tests/e2e/distributed/agent_native_executor_test.go`.
4. retrieval/memory/indexing 확인: `swagger/embed.go`, `pkg/xsysinfo/memory.go`, `pkg/grpc/embed.go`.
5. test/eval 파일로 동작 검증: `tests/integration/integration_suite_test.go`, `tests/integration/stores_test.go`, `tests/fixtures/gallery_simple.yaml`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 2606 files, 284 directories.. 핵심 구조 신호는 Go, go.mod, Dockerfile, Makefile, README.md, AGENTS.md이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
