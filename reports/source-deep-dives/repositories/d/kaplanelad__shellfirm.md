# kaplanelad/shellfirm 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Local clone structure analysis: 182 files, 33 directories.

## 요약

- 조사 단위: `sources/kaplanelad__shellfirm` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 182 files, 33 directories, depth score 98, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 mcp=shellfirm/src/mcp.rs, shellfirm/src/bin/cmd/mcp_cmd.rs이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | kaplanelad/shellfirm |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/kaplanelad__shellfirm](../../../../sources/kaplanelad__shellfirm) |
| 기존 보고서 | [reports/clone-structures/kaplanelad__shellfirm.md](../../../clone-structures/kaplanelad__shellfirm.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 182 / 33 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .cargo, .github, docs, npm, scripts, shellfirm |
| 상위 확장자 | .rs: 70, .yaml: 46, .snap: 27, .md: 20, (none): 7, .json: 5, .toml: 3, .gif: 1, .lock: 1, .sh: 1, .yml: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 20 |
| .github | ci surface | 1 |
| npm | top-level component | 1 |
| scripts | top-level component | 1 |
| shellfirm | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | Makefile | build | make build |
| test | Makefile | test | make test |
| quality | Makefile | fmt | make fmt |
| quality | Makefile | clippy | make clippy |
| utility | Makefile | show-doc | make show-doc |
| utility | Makefile | validate-doc | make validate-doc |
| utility | Makefile | clean-doc | make clean-doc |
| utility | Makefile | all-validation | make all-validation |
| utility | Makefile | help | make help |


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
| mcp | [shellfirm/src/mcp.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/mcp.rs) | mcp signal |
| mcp | [shellfirm/src/bin/cmd/mcp_cmd.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/cmd/mcp_cmd.rs) | mcp signal |
| agentRuntime | [shellfirm/src/agent.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/agent.rs) | agentRuntime signal |
| agentRuntime | [shellfirm/src/context.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/context.rs) | agentRuntime signal |
| agentRuntime | [shellfirm/src/tui/tabs/context.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/tui/tabs/context.rs) | agentRuntime signal |
| entrypoints | [shellfirm/src/bin/shellfirm.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/shellfirm.rs) | entrypoints signal |
| entrypoints | [shellfirm/src/bin/cmd/audit_cmd.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/cmd/audit_cmd.rs) | entrypoints signal |
| entrypoints | [shellfirm/src/bin/cmd/check_cmd.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/cmd/check_cmd.rs) | entrypoints signal |
| entrypoints | [shellfirm/src/bin/cmd/command.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/cmd/command.rs) | entrypoints signal |
| config | [Cargo.lock](../../../../sources/kaplanelad__shellfirm/Cargo.lock) | config signal |
| config | [Cargo.toml](../../../../sources/kaplanelad__shellfirm/Cargo.toml) | config signal |
| config | [Makefile](../../../../sources/kaplanelad__shellfirm/Makefile) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 18 | [shellfirm/src/bin/shellfirm.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/shellfirm.rs)<br>[shellfirm/src/bin/cmd/audit_cmd.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/cmd/audit_cmd.rs)<br>[shellfirm/src/bin/cmd/check_cmd.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/cmd/check_cmd.rs)<br>[shellfirm/src/bin/cmd/command.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/cmd/command.rs)<br>[shellfirm/src/bin/cmd/completions_cmd.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/cmd/completions_cmd.rs)<br>[shellfirm/src/bin/cmd/config.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/cmd/config.rs)<br>[shellfirm/src/bin/cmd/connect_cmd.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/cmd/connect_cmd.rs)<br>[shellfirm/src/bin/cmd/default.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/cmd/default.rs) |
| agentRuntime | 3 | [shellfirm/src/agent.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/agent.rs)<br>[shellfirm/src/context.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/context.rs)<br>[shellfirm/src/tui/tabs/context.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/tui/tabs/context.rs) |
| mcp | 2 | [shellfirm/src/mcp.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/mcp.rs)<br>[shellfirm/src/bin/cmd/mcp_cmd.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/cmd/mcp_cmd.rs) |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 57 | [shellfirm/tests/checks.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/tests/checks.rs)<br>[shellfirm/tests/decision_matrix.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/tests/decision_matrix.rs)<br>[shellfirm/tests/escalation_matrix_proptest.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/tests/escalation_matrix_proptest.rs)<br>[shellfirm/tests/per_mode_resolution.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/tests/per_mode_resolution.rs)<br>[shellfirm/tests/pure_logic.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/tests/pure_logic.rs)<br>[shellfirm/tests/sandboxed_integration.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/tests/sandboxed_integration.rs)<br>[shellfirm/tests/tui_app.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/tests/tui_app.rs)<br>[shellfirm/tests/decisions/matrix.yaml](../../../../sources/kaplanelad__shellfirm/shellfirm/tests/decisions/matrix.yaml) |
| security | 4 | [shellfirm/src/audit.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/audit.rs)<br>[shellfirm/src/policy.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/policy.rs)<br>[shellfirm/src/bin/cmd/audit_cmd.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/cmd/audit_cmd.rs)<br>[shellfirm/src/bin/cmd/policy_cmd.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/cmd/policy_cmd.rs) |
| ci | 2 | [.github/workflows/ci.yaml](../../../../sources/kaplanelad__shellfirm/.github/workflows/ci.yaml)<br>[.github/workflows/release.yml](../../../../sources/kaplanelad__shellfirm/.github/workflows/release.yml) |
| container | 2 | [docs/docker/zsh/Dockerfile](../../../../sources/kaplanelad__shellfirm/docs/docker/zsh/Dockerfile)<br>[docs/docker/bash/Dockerfile](../../../../sources/kaplanelad__shellfirm/docs/docker/bash/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 18 | [README.md](../../../../sources/kaplanelad__shellfirm/README.md)<br>[docs/add-new-patterns.md](../../../../sources/kaplanelad__shellfirm/docs/add-new-patterns.md)<br>[docs/config.md](../../../../sources/kaplanelad__shellfirm/docs/config.md)<br>[docs/media/example.gif](../../../../sources/kaplanelad__shellfirm/docs/media/example.gif)<br>[docs/docker/zsh/Dockerfile](../../../../sources/kaplanelad__shellfirm/docs/docker/zsh/Dockerfile)<br>[docs/docker/zsh/README.md](../../../../sources/kaplanelad__shellfirm/docs/docker/zsh/README.md)<br>[docs/docker/bash/Dockerfile](../../../../sources/kaplanelad__shellfirm/docs/docker/bash/Dockerfile)<br>[docs/docker/bash/README.md](../../../../sources/kaplanelad__shellfirm/docs/docker/bash/README.md) |
| config | 9 | [Cargo.lock](../../../../sources/kaplanelad__shellfirm/Cargo.lock)<br>[Cargo.toml](../../../../sources/kaplanelad__shellfirm/Cargo.toml)<br>[Makefile](../../../../sources/kaplanelad__shellfirm/Makefile)<br>[shellfirm/Cargo.toml](../../../../sources/kaplanelad__shellfirm/shellfirm/Cargo.toml)<br>[npm/shellfirm/package.json](../../../../sources/kaplanelad__shellfirm/npm/shellfirm/package.json)<br>[npm/cli-win32-x64/package.json](../../../../sources/kaplanelad__shellfirm/npm/cli-win32-x64/package.json)<br>[npm/cli-linux-x64/package.json](../../../../sources/kaplanelad__shellfirm/npm/cli-linux-x64/package.json)<br>[npm/cli-darwin-x64/package.json](../../../../sources/kaplanelad__shellfirm/npm/cli-darwin-x64/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 57 | [shellfirm/tests/checks.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/tests/checks.rs)<br>[shellfirm/tests/decision_matrix.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/tests/decision_matrix.rs)<br>[shellfirm/tests/escalation_matrix_proptest.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/tests/escalation_matrix_proptest.rs)<br>[shellfirm/tests/per_mode_resolution.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/tests/per_mode_resolution.rs)<br>[shellfirm/tests/pure_logic.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/tests/pure_logic.rs)<br>[shellfirm/tests/sandboxed_integration.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/tests/sandboxed_integration.rs) |
| CI workflow | 2 | [.github/workflows/ci.yaml](../../../../sources/kaplanelad__shellfirm/.github/workflows/ci.yaml)<br>[.github/workflows/release.yml](../../../../sources/kaplanelad__shellfirm/.github/workflows/release.yml) |
| 컨테이너/배포 | 2 | [docs/docker/zsh/Dockerfile](../../../../sources/kaplanelad__shellfirm/docs/docker/zsh/Dockerfile)<br>[docs/docker/bash/Dockerfile](../../../../sources/kaplanelad__shellfirm/docs/docker/bash/Dockerfile) |
| 보안/정책 | 4 | [shellfirm/src/audit.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/audit.rs)<br>[shellfirm/src/policy.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/policy.rs)<br>[shellfirm/src/bin/cmd/audit_cmd.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/cmd/audit_cmd.rs)<br>[shellfirm/src/bin/cmd/policy_cmd.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/cmd/policy_cmd.rs) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `shellfirm/src/mcp.rs`, `shellfirm/src/bin/cmd/mcp_cmd.rs`, `shellfirm/src/agent.rs`.
2. entrypoint를 따라 실행 흐름 확인: `shellfirm/src/bin/shellfirm.rs`, `shellfirm/src/bin/cmd/audit_cmd.rs`, `shellfirm/src/bin/cmd/check_cmd.rs`.
3. agent/tool runtime 매핑: `shellfirm/src/agent.rs`, `shellfirm/src/context.rs`, `shellfirm/src/tui/tabs/context.rs`.
4. test/eval 파일로 동작 검증: `shellfirm/tests/checks.rs`, `shellfirm/tests/decision_matrix.rs`, `shellfirm/tests/escalation_matrix_proptest.rs`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 182 files, 33 directories.. 핵심 구조 신호는 Cargo.toml, Makefile, README.md, LICENSE, tests, ci이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
