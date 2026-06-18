# mezmo/aura 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

AURA is an agentic harness that turns an LLM model into a reliable, autonomous service capable of executing real SRE work. AURA provides the guardrails, API servers, state management, authentication, streaming, error handling, and tool integrations necessary to run AI SRE agents safely in production.

## 요약

- 조사 단위: `sources/mezmo__aura` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 277 files, 55 directories, depth score 120, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/integration/scratchpad-mcp/Dockerfile, tests/integration/scratchpad-mcp/requirements.txt, tests/integration/scratchpad-mcp/server.py이고, 의존성 단서는 mcp, qdrant, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | mezmo/aura |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Rust |
| Stars | 99 |
| Forks | 18 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/mezmo__aura](../../../../sources/mezmo__aura) |
| 기존 보고서 | [reports/global-trending/repositories/mezmo__aura.md](../../../global-trending/repositories/mezmo__aura.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 277 / 55 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .config, .github, .makefiles, compose, configs, crates, deployment, docs, examples, quickstart, scripts, tests |
| 상위 확장자 | .rs: 156, .md: 30, .toml: 29, .yaml: 14, (none): 14, .yml: 12, .mk: 6, .py: 3, .txt: 3, .example: 2, .js: 2, .sh: 2 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | qdrant |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 35 | [tests/integration/scratchpad-mcp/Dockerfile](../../../../sources/mezmo__aura/tests/integration/scratchpad-mcp/Dockerfile)<br>[tests/integration/scratchpad-mcp/requirements.txt](../../../../sources/mezmo__aura/tests/integration/scratchpad-mcp/requirements.txt)<br>[tests/integration/scratchpad-mcp/server.py](../../../../sources/mezmo__aura/tests/integration/scratchpad-mcp/server.py)<br>[tests/integration/k8s-sre-mcp/Dockerfile](../../../../sources/mezmo__aura/tests/integration/k8s-sre-mcp/Dockerfile)<br>[tests/integration/k8s-sre-mcp/requirements.txt](../../../../sources/mezmo__aura/tests/integration/k8s-sre-mcp/requirements.txt)<br>[tests/integration/k8s-sre-mcp/server.py](../../../../sources/mezmo__aura/tests/integration/k8s-sre-mcp/server.py) |
| CI workflow | 2 | [Jenkinsfile](../../../../sources/mezmo__aura/Jenkinsfile)<br>[.github/workflows/cla.yml](../../../../sources/mezmo__aura/.github/workflows/cla.yml) |
| 컨테이너/배포 | 21 | [docker-compose.yml](../../../../sources/mezmo__aura/docker-compose.yml)<br>[Dockerfile](../../../../sources/mezmo__aura/Dockerfile)<br>[tests/integration/scratchpad-mcp/Dockerfile](../../../../sources/mezmo__aura/tests/integration/scratchpad-mcp/Dockerfile)<br>[tests/integration/k8s-sre-mcp/Dockerfile](../../../../sources/mezmo__aura/tests/integration/k8s-sre-mcp/Dockerfile)<br>[examples/quickstart-orchestration-math/docker-compose.yml](../../../../sources/mezmo__aura/examples/quickstart-orchestration-math/docker-compose.yml)<br>[examples/quickstart-orchestration-math/math-mcp/Dockerfile](../../../../sources/mezmo__aura/examples/quickstart-orchestration-math/math-mcp/Dockerfile) |
| 보안/정책 | 2 | [deployment/helm/aura/templates/secret.yaml](../../../../sources/mezmo__aura/deployment/helm/aura/templates/secret.yaml)<br>[crates/aura/src/orchestration/duplicate_call_guard.rs](../../../../sources/mezmo__aura/crates/aura/src/orchestration/duplicate_call_guard.rs) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/mezmo__aura/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/integration/scratchpad-mcp/Dockerfile`, `tests/integration/scratchpad-mcp/requirements.txt`, `tests/integration/scratchpad-mcp/server.py`.
2. entrypoint를 따라 실행 흐름 확인: `tests/integration/scratchpad-mcp/server.py`, `tests/integration/k8s-sre-mcp/server.py`, `crates/aura-web-server/src/lib.rs`.
3. agent/tool runtime 매핑: `crates/aura-web-server/src/a2a/agent_executor.rs`, `crates/aura-cli/src/tools/definitions.rs`, `crates/aura-cli/src/tools/diff.rs`.
4. retrieval/memory/indexing 확인: `crates/aura/src/bedrock_embedding.rs`, `crates/aura/src/rag_tools.rs`, `crates/aura/src/vector_dynamic.rs`.
5. test/eval 파일로 동작 검증: `tests/integration/scratchpad-mcp/Dockerfile`, `tests/integration/scratchpad-mcp/requirements.txt`, `tests/integration/scratchpad-mcp/server.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 AURA is an agentic harness that turns an LLM model into a reliable, autonomous service capable of executing real SRE wor. 핵심 구조 신호는 Rust, package.json, Cargo.toml, Dockerfile, docker-compose.yml, Makefile이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
