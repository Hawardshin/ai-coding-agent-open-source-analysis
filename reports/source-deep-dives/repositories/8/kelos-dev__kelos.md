# kelos-dev/kelos 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Kelos - The Kubernetes-native framework for orchestrating autonomous AI coding agents.

## 요약

- 조사 단위: `sources/kelos-dev__kelos` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 416 files, 94 directories, depth score 108, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

코딩 에이전트/IDE 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=hack/release-notes/main.go, cmd/kelos-webhook-server/main.go, cmd/kelos-spawner/main.go이고, 의존성 단서는 cobra, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 코딩 에이전트 참고 구현이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | kelos-dev/kelos |
| 주제 | 코딩 에이전트/IDE / 코딩 에이전트/IDE |
| Region | global |
| Language | Go |
| Stars | 222 |
| Forks | 27 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/kelos-dev__kelos](../../../../sources/kelos-dev__kelos) |
| 기존 보고서 | [reports/global-trending/repositories/kelos-dev__kelos.md](../../../global-trending/repositories/kelos-dev__kelos.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 416 / 94 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .github, api, claude-code, cmd, codex, cursor, docs, examples, Formula, gemini, hack, internal, kanon-development, opencode, pkg, self-development, skills, test |
| 상위 확장자 | .go: 264, .yaml: 95, .md: 27, (none): 14, .sh: 12, .mod: 1, .rb: 1, .sum: 1, .txt: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 5 |
| examples/02-task-with-workspace | examples workspace | 3 |
| examples/03-taskspawner-github-issues | examples workspace | 3 |
| examples/04-taskspawner-cron | examples workspace | 3 |
| examples/05-task-with-agentconfig | examples workspace | 3 |
| examples/07-task-pipeline | examples workspace | 3 |
| cmd/ghproxy | cmd workspace | 2 |
| cmd/kelos-codex-auth-refresh | cmd workspace | 2 |
| cmd/kelos-controller | cmd workspace | 2 |
| cmd/kelos-slack-server | cmd workspace | 2 |
| cmd/kelos-spawner | cmd workspace | 2 |
| cmd/kelos-webhook-server | cmd workspace | 2 |
| examples/01-simple-task | examples workspace | 2 |
| examples/09-bedrock-credentials | examples workspace | 2 |
| .github | ci surface | 1 |
| api | source boundary | 1 |
| claude-code | top-level component | 1 |
| cmd | source boundary | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | all | make all |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | test | make test |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | test-integration | make test-integration |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | test-e2e | make test-e2e |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | update | make update |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | verify | make verify |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build | make build |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | run | make run |
| utility | Makefile | .PHONY | make .PHONY |
| container | Makefile | image | make image |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | cobra |
| observability | prometheus |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [hack/release-notes/main.go](../../../../sources/kelos-dev__kelos/hack/release-notes/main.go) | entrypoints signal |
| entrypoints | [cmd/kelos-webhook-server/main.go](../../../../sources/kelos-dev__kelos/cmd/kelos-webhook-server/main.go) | entrypoints signal |
| entrypoints | [cmd/kelos-spawner/main.go](../../../../sources/kelos-dev__kelos/cmd/kelos-spawner/main.go) | entrypoints signal |
| entrypoints | [cmd/kelos-slack-server/main.go](../../../../sources/kelos-dev__kelos/cmd/kelos-slack-server/main.go) | entrypoints signal |
| agentRuntime | [AGENTS.md](../../../../sources/kelos-dev__kelos/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tools.go](../../../../sources/kelos-dev__kelos/tools.go) | agentRuntime signal |
| agentRuntime | [test/e2e/skills_test.go](../../../../sources/kelos-dev__kelos/test/e2e/skills_test.go) | agentRuntime signal |
| agentRuntime | [skills/kelos/SKILL.md](../../../../sources/kelos-dev__kelos/skills/kelos/SKILL.md) | agentRuntime signal |
| security | [test/e2e/codex_auth_refresher_test.go](../../../../sources/kelos-dev__kelos/test/e2e/codex_auth_refresher_test.go) | security signal |
| security | [internal/source/github_comment_policy_test.go](../../../../sources/kelos-dev__kelos/internal/source/github_comment_policy_test.go) | security signal |
| security | [internal/source/github_comment_policy.go](../../../../sources/kelos-dev__kelos/internal/source/github_comment_policy.go) | security signal |
| security | [internal/manifests/charts/kelos/templates/rbac.yaml](../../../../sources/kelos-dev__kelos/internal/manifests/charts/kelos/templates/rbac.yaml) | security signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 9 | [hack/release-notes/main.go](../../../../sources/kelos-dev__kelos/hack/release-notes/main.go)<br>[cmd/kelos-webhook-server/main.go](../../../../sources/kelos-dev__kelos/cmd/kelos-webhook-server/main.go)<br>[cmd/kelos-spawner/main.go](../../../../sources/kelos-dev__kelos/cmd/kelos-spawner/main.go)<br>[cmd/kelos-slack-server/main.go](../../../../sources/kelos-dev__kelos/cmd/kelos-slack-server/main.go)<br>[cmd/kelos-controller/main.go](../../../../sources/kelos-dev__kelos/cmd/kelos-controller/main.go)<br>[cmd/kelos-codex-auth-refresh/main.go](../../../../sources/kelos-dev__kelos/cmd/kelos-codex-auth-refresh/main.go)<br>[cmd/kelos-capture/main.go](../../../../sources/kelos-dev__kelos/cmd/kelos-capture/main.go)<br>[cmd/kelos/main.go](../../../../sources/kelos-dev__kelos/cmd/kelos/main.go) |
| agentRuntime | 12 | [AGENTS.md](../../../../sources/kelos-dev__kelos/AGENTS.md)<br>[tools.go](../../../../sources/kelos-dev__kelos/tools.go)<br>[test/e2e/skills_test.go](../../../../sources/kelos-dev__kelos/test/e2e/skills_test.go)<br>[skills/kelos/SKILL.md](../../../../sources/kelos-dev__kelos/skills/kelos/SKILL.md)<br>[skills/kelos/references/agentconfig.yaml](../../../../sources/kelos-dev__kelos/skills/kelos/references/agentconfig.yaml)<br>[skills/kelos/references/cli.md](../../../../sources/kelos-dev__kelos/skills/kelos/references/cli.md)<br>[skills/kelos/references/task.yaml](../../../../sources/kelos-dev__kelos/skills/kelos/references/task.yaml)<br>[skills/kelos/references/taskspawner.yaml](../../../../sources/kelos-dev__kelos/skills/kelos/references/taskspawner.yaml) |
| mcp | 1 | [internal/cli/mcp_test.go](../../../../sources/kelos-dev__kelos/internal/cli/mcp_test.go) |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 102 | [test/integration/cli_test.go](../../../../sources/kelos-dev__kelos/test/integration/cli_test.go)<br>[test/integration/completion_test.go](../../../../sources/kelos-dev__kelos/test/integration/completion_test.go)<br>[test/integration/conversion_test.go](../../../../sources/kelos-dev__kelos/test/integration/conversion_test.go)<br>[test/integration/install_script_test.go](../../../../sources/kelos-dev__kelos/test/integration/install_script_test.go)<br>[test/integration/metrics_test.go](../../../../sources/kelos-dev__kelos/test/integration/metrics_test.go)<br>[test/integration/suite_test.go](../../../../sources/kelos-dev__kelos/test/integration/suite_test.go)<br>[test/integration/task_test.go](../../../../sources/kelos-dev__kelos/test/integration/task_test.go)<br>[test/integration/taskspawner_test.go](../../../../sources/kelos-dev__kelos/test/integration/taskspawner_test.go) |
| security | 21 | [test/e2e/codex_auth_refresher_test.go](../../../../sources/kelos-dev__kelos/test/e2e/codex_auth_refresher_test.go)<br>[internal/source/github_comment_policy_test.go](../../../../sources/kelos-dev__kelos/internal/source/github_comment_policy_test.go)<br>[internal/source/github_comment_policy.go](../../../../sources/kelos-dev__kelos/internal/source/github_comment_policy.go)<br>[internal/manifests/charts/kelos/templates/rbac.yaml](../../../../sources/kelos-dev__kelos/internal/manifests/charts/kelos/templates/rbac.yaml)<br>[internal/controller/codex_auth_refresher_builder.go](../../../../sources/kelos-dev__kelos/internal/controller/codex_auth_refresher_builder.go)<br>[internal/controller/codex_auth_refresher_controller_test.go](../../../../sources/kelos-dev__kelos/internal/controller/codex_auth_refresher_controller_test.go)<br>[internal/controller/codex_auth_refresher_controller.go](../../../../sources/kelos-dev__kelos/internal/controller/codex_auth_refresher_controller.go)<br>[examples/09-bedrock-credentials/secret.yaml](../../../../sources/kelos-dev__kelos/examples/09-bedrock-credentials/secret.yaml) |
| ci | 10 | [.github/workflows/ci.yaml](../../../../sources/kelos-dev__kelos/.github/workflows/ci.yaml)<br>[.github/workflows/deploy-dev.yaml](../../../../sources/kelos-dev__kelos/.github/workflows/deploy-dev.yaml)<br>[.github/workflows/e2e-anchor.yaml](../../../../sources/kelos-dev__kelos/.github/workflows/e2e-anchor.yaml)<br>[.github/workflows/fork-e2e.yaml](../../../../sources/kelos-dev__kelos/.github/workflows/fork-e2e.yaml)<br>[.github/workflows/label.yaml](../../../../sources/kelos-dev__kelos/.github/workflows/label.yaml)<br>[.github/workflows/refresh-codex-auth.yaml](../../../../sources/kelos-dev__kelos/.github/workflows/refresh-codex-auth.yaml)<br>[.github/workflows/release.yaml](../../../../sources/kelos-dev__kelos/.github/workflows/release.yaml)<br>[.github/workflows/reusable-e2e.yaml](../../../../sources/kelos-dev__kelos/.github/workflows/reusable-e2e.yaml) |
| container | 28 | [opencode/Dockerfile](../../../../sources/kelos-dev__kelos/opencode/Dockerfile)<br>[internal/manifests/charts/kelos/Chart.yaml](../../../../sources/kelos-dev__kelos/internal/manifests/charts/kelos/Chart.yaml)<br>[internal/manifests/charts/kelos/README.md](../../../../sources/kelos-dev__kelos/internal/manifests/charts/kelos/README.md)<br>[internal/manifests/charts/kelos/values.yaml](../../../../sources/kelos-dev__kelos/internal/manifests/charts/kelos/values.yaml)<br>[internal/manifests/charts/kelos/templates/cronjob.yaml](../../../../sources/kelos-dev__kelos/internal/manifests/charts/kelos/templates/cronjob.yaml)<br>[internal/manifests/charts/kelos/templates/deployment.yaml](../../../../sources/kelos-dev__kelos/internal/manifests/charts/kelos/templates/deployment.yaml)<br>[internal/manifests/charts/kelos/templates/namespace.yaml](../../../../sources/kelos-dev__kelos/internal/manifests/charts/kelos/templates/namespace.yaml)<br>[internal/manifests/charts/kelos/templates/rbac.yaml](../../../../sources/kelos-dev__kelos/internal/manifests/charts/kelos/templates/rbac.yaml) |
| instruction | 1 | [AGENTS.md](../../../../sources/kelos-dev__kelos/AGENTS.md) |
| docs | 20 | [README.md](../../../../sources/kelos-dev__kelos/README.md)<br>[self-development/README.md](../../../../sources/kelos-dev__kelos/self-development/README.md)<br>[kanon-development/README.md](../../../../sources/kelos-dev__kelos/kanon-development/README.md)<br>[internal/manifests/charts/kelos/README.md](../../../../sources/kelos-dev__kelos/internal/manifests/charts/kelos/README.md)<br>[examples/README.md](../../../../sources/kelos-dev__kelos/examples/README.md)<br>[examples/13-taskspawner-generic-webhook/README.md](../../../../sources/kelos-dev__kelos/examples/13-taskspawner-generic-webhook/README.md)<br>[examples/11-taskspawner-linear-webhook/README.md](../../../../sources/kelos-dev__kelos/examples/11-taskspawner-linear-webhook/README.md)<br>[examples/10-taskspawner-github-webhook/README.md](../../../../sources/kelos-dev__kelos/examples/10-taskspawner-github-webhook/README.md) |
| config | 2 | [go.mod](../../../../sources/kelos-dev__kelos/go.mod)<br>[Makefile](../../../../sources/kelos-dev__kelos/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 102 | [test/integration/cli_test.go](../../../../sources/kelos-dev__kelos/test/integration/cli_test.go)<br>[test/integration/completion_test.go](../../../../sources/kelos-dev__kelos/test/integration/completion_test.go)<br>[test/integration/conversion_test.go](../../../../sources/kelos-dev__kelos/test/integration/conversion_test.go)<br>[test/integration/install_script_test.go](../../../../sources/kelos-dev__kelos/test/integration/install_script_test.go)<br>[test/integration/metrics_test.go](../../../../sources/kelos-dev__kelos/test/integration/metrics_test.go)<br>[test/integration/suite_test.go](../../../../sources/kelos-dev__kelos/test/integration/suite_test.go) |
| CI workflow | 10 | [.github/workflows/ci.yaml](../../../../sources/kelos-dev__kelos/.github/workflows/ci.yaml)<br>[.github/workflows/deploy-dev.yaml](../../../../sources/kelos-dev__kelos/.github/workflows/deploy-dev.yaml)<br>[.github/workflows/e2e-anchor.yaml](../../../../sources/kelos-dev__kelos/.github/workflows/e2e-anchor.yaml)<br>[.github/workflows/fork-e2e.yaml](../../../../sources/kelos-dev__kelos/.github/workflows/fork-e2e.yaml)<br>[.github/workflows/label.yaml](../../../../sources/kelos-dev__kelos/.github/workflows/label.yaml)<br>[.github/workflows/refresh-codex-auth.yaml](../../../../sources/kelos-dev__kelos/.github/workflows/refresh-codex-auth.yaml) |
| 컨테이너/배포 | 28 | [opencode/Dockerfile](../../../../sources/kelos-dev__kelos/opencode/Dockerfile)<br>[internal/manifests/charts/kelos/Chart.yaml](../../../../sources/kelos-dev__kelos/internal/manifests/charts/kelos/Chart.yaml)<br>[internal/manifests/charts/kelos/README.md](../../../../sources/kelos-dev__kelos/internal/manifests/charts/kelos/README.md)<br>[internal/manifests/charts/kelos/values.yaml](../../../../sources/kelos-dev__kelos/internal/manifests/charts/kelos/values.yaml)<br>[internal/manifests/charts/kelos/templates/cronjob.yaml](../../../../sources/kelos-dev__kelos/internal/manifests/charts/kelos/templates/cronjob.yaml)<br>[internal/manifests/charts/kelos/templates/deployment.yaml](../../../../sources/kelos-dev__kelos/internal/manifests/charts/kelos/templates/deployment.yaml) |
| 보안/정책 | 21 | [test/e2e/codex_auth_refresher_test.go](../../../../sources/kelos-dev__kelos/test/e2e/codex_auth_refresher_test.go)<br>[internal/source/github_comment_policy_test.go](../../../../sources/kelos-dev__kelos/internal/source/github_comment_policy_test.go)<br>[internal/source/github_comment_policy.go](../../../../sources/kelos-dev__kelos/internal/source/github_comment_policy.go)<br>[internal/manifests/charts/kelos/templates/rbac.yaml](../../../../sources/kelos-dev__kelos/internal/manifests/charts/kelos/templates/rbac.yaml)<br>[internal/controller/codex_auth_refresher_builder.go](../../../../sources/kelos-dev__kelos/internal/controller/codex_auth_refresher_builder.go)<br>[internal/controller/codex_auth_refresher_controller_test.go](../../../../sources/kelos-dev__kelos/internal/controller/codex_auth_refresher_controller_test.go) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/kelos-dev__kelos/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `hack/release-notes/main.go`, `cmd/kelos-webhook-server/main.go`, `cmd/kelos-spawner/main.go`.
2. entrypoint를 따라 실행 흐름 확인: `hack/release-notes/main.go`, `cmd/kelos-webhook-server/main.go`, `cmd/kelos-spawner/main.go`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tools.go`, `test/e2e/skills_test.go`.
4. test/eval 파일로 동작 검증: `test/integration/cli_test.go`, `test/integration/completion_test.go`, `test/integration/conversion_test.go`.

## 기존 레포 인사이트

코딩 에이전트/IDE 관점에서 Kelos The Kubernetes native framework for orchestrating autonomous AI coding agents.. 핵심 구조 신호는 Go, go.mod, Makefile, README.md, AGENTS.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 코딩 에이전트/IDE 레포입니다. 활용 관점은 코딩 에이전트 참고 구현이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
