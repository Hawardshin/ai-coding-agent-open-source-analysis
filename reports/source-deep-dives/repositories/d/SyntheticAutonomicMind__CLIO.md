# SyntheticAutonomicMind/CLIO 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

An AI-assisted coding agent that runs in your terminal and supports many providers and models.

## 요약

- 조사 단위: `sources/SyntheticAutonomicMind__CLIO` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 507 files, 108 directories, depth score 105, key references 8개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 container=Dockerfile이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | SyntheticAutonomicMind/CLIO |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | Perl |
| Stars | 173 |
| Forks | 10 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/SyntheticAutonomicMind__CLIO](../../../../sources/SyntheticAutonomicMind__CLIO) |
| 기존 보고서 | [reports/global-trending/repositories/SyntheticAutonomicMind__CLIO.md](../../../global-trending/repositories/SyntheticAutonomicMind__CLIO.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 507 / 108 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .clio, .github, .images, ai-assisted, docs, lib, runs, scripts, styles, terminal-bench, tests, themes, tools |
| 상위 확장자 | .pm: 164, .pl: 157, .txt: 67, .md: 43, .style: 25, (none): 15, .json: 11, .sh: 7, .yml: 6, .theme: 4, .lock: 2, .png: 2 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 53 |
| lib | source boundary | 45 |
| docs | documentation surface | 38 |
| .github | ci surface | 1 |
| ai-assisted | top-level component | 1 |
| runs | top-level component | 1 |
| scripts | top-level component | 1 |
| styles | top-level component | 1 |
| terminal-bench | validation surface | 1 |
| themes | top-level component | 1 |
| tools | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | version | make version |
| test | Makefile | test | make test |
| quality | Makefile | check-syntax | make check-syntax |
| build | Makefile | release | make release |
| utility | Makefile | install | make install |


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
| container | [Dockerfile](../../../../sources/SyntheticAutonomicMind__CLIO/Dockerfile) | container signal |
| config | [Makefile](../../../../sources/SyntheticAutonomicMind__CLIO/Makefile) | config signal |
| ci | [.github/workflows/docker-build.yml](../../../../sources/SyntheticAutonomicMind__CLIO/.github/workflows/docker-build.yml) | ci signal |
| ci | [.github/workflows/release.yml](../../../../sources/SyntheticAutonomicMind__CLIO/.github/workflows/release.yml) | ci signal |
| ci | [.github/workflows/update-homebrew.yml](../../../../sources/SyntheticAutonomicMind__CLIO/.github/workflows/update-homebrew.yml) | ci signal |
| eval | [tests/benchmark.pl](../../../../sources/SyntheticAutonomicMind__CLIO/tests/benchmark.pl) | eval support |
| eval | [tests/INVENTORY.md](../../../../sources/SyntheticAutonomicMind__CLIO/tests/INVENTORY.md) | eval support |
| instruction | [AGENTS.md](../../../../sources/SyntheticAutonomicMind__CLIO/AGENTS.md) | instruction support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 32 | [AGENTS.md](../../../../sources/SyntheticAutonomicMind__CLIO/AGENTS.md)<br>[tools/assess_codebase.pl](../../../../sources/SyntheticAutonomicMind__CLIO/tools/assess_codebase.pl)<br>[tools/ASSESSMENT_METHODOLOGY.md](../../../../sources/SyntheticAutonomicMind__CLIO/tools/ASSESSMENT_METHODOLOGY.md)<br>[tests/TOOL_OPERATIONS.md](../../../../sources/SyntheticAutonomicMind__CLIO/tests/TOOL_OPERATIONS.md)<br>[tests/integration/tool_executor_test.pl](../../../../sources/SyntheticAutonomicMind__CLIO/tests/integration/tool_executor_test.pl)<br>[tests/integration/workflow_orchestrator_test.pl](../../../../sources/SyntheticAutonomicMind__CLIO/tests/integration/workflow_orchestrator_test.pl)<br>[lib/CLIO/UI/Commands/Context.pm](../../../../sources/SyntheticAutonomicMind__CLIO/lib/CLIO/UI/Commands/Context.pm)<br>[lib/CLIO/UI/Commands/Memory.pm](../../../../sources/SyntheticAutonomicMind__CLIO/lib/CLIO/UI/Commands/Memory.pm) |
| mcp | 7 | [tests/unit/test_mcp.pl](../../../../sources/SyntheticAutonomicMind__CLIO/tests/unit/test_mcp.pl)<br>[lib/CLIO/MCP/Client.pm](../../../../sources/SyntheticAutonomicMind__CLIO/lib/CLIO/MCP/Client.pm)<br>[lib/CLIO/MCP/Manager.pm](../../../../sources/SyntheticAutonomicMind__CLIO/lib/CLIO/MCP/Manager.pm)<br>[lib/CLIO/MCP/Transport/HTTP.pm](../../../../sources/SyntheticAutonomicMind__CLIO/lib/CLIO/MCP/Transport/HTTP.pm)<br>[lib/CLIO/MCP/Transport/Stdio.pm](../../../../sources/SyntheticAutonomicMind__CLIO/lib/CLIO/MCP/Transport/Stdio.pm)<br>[lib/CLIO/MCP/Auth/OAuth.pm](../../../../sources/SyntheticAutonomicMind__CLIO/lib/CLIO/MCP/Auth/OAuth.pm)<br>[docs/MCP.md](../../../../sources/SyntheticAutonomicMind__CLIO/docs/MCP.md) |
| retrieval | 6 | [lib/CLIO/UI/Commands/Memory.pm](../../../../sources/SyntheticAutonomicMind__CLIO/lib/CLIO/UI/Commands/Memory.pm)<br>[lib/CLIO/Memory/LongTerm.pm](../../../../sources/SyntheticAutonomicMind__CLIO/lib/CLIO/Memory/LongTerm.pm)<br>[lib/CLIO/Memory/ShortTerm.pm](../../../../sources/SyntheticAutonomicMind__CLIO/lib/CLIO/Memory/ShortTerm.pm)<br>[lib/CLIO/Memory/TokenEstimator.pm](../../../../sources/SyntheticAutonomicMind__CLIO/lib/CLIO/Memory/TokenEstimator.pm)<br>[lib/CLIO/Memory/YaRN.pm](../../../../sources/SyntheticAutonomicMind__CLIO/lib/CLIO/Memory/YaRN.pm)<br>[docs/MEMORY.md](../../../../sources/SyntheticAutonomicMind__CLIO/docs/MEMORY.md) |
| spec | 6 | [tests/unit/test_spec_manager.pl](../../../../sources/SyntheticAutonomicMind__CLIO/tests/unit/test_spec_manager.pl)<br>[lib/CLIO/UI/Commands/Spec.pm](../../../../sources/SyntheticAutonomicMind__CLIO/lib/CLIO/UI/Commands/Spec.pm)<br>[lib/CLIO/Spec/Manager.pm](../../../../sources/SyntheticAutonomicMind__CLIO/lib/CLIO/Spec/Manager.pm)<br>[docs/ARCHITECTURE_REMOTE_EXECUTION.md](../../../../sources/SyntheticAutonomicMind__CLIO/docs/ARCHITECTURE_REMOTE_EXECUTION.md)<br>[docs/ARCHITECTURE.md](../../../../sources/SyntheticAutonomicMind__CLIO/docs/ARCHITECTURE.md)<br>[docs/SPECS/ARCHITECTURE.md](../../../../sources/SyntheticAutonomicMind__CLIO/docs/SPECS/ARCHITECTURE.md) |
| eval | 196 | [tests/benchmark.pl](../../../../sources/SyntheticAutonomicMind__CLIO/tests/benchmark.pl)<br>[tests/INVENTORY.md](../../../../sources/SyntheticAutonomicMind__CLIO/tests/INVENTORY.md)<br>[tests/README.md](../../../../sources/SyntheticAutonomicMind__CLIO/tests/README.md)<br>[tests/run_all_tests.pl](../../../../sources/SyntheticAutonomicMind__CLIO/tests/run_all_tests.pl)<br>[tests/test_model_capabilities.sh](../../../../sources/SyntheticAutonomicMind__CLIO/tests/test_model_capabilities.sh)<br>[tests/TOOL_OPERATIONS.md](../../../../sources/SyntheticAutonomicMind__CLIO/tests/TOOL_OPERATIONS.md)<br>[tests/unit/.gitignore](../../../../sources/SyntheticAutonomicMind__CLIO/tests/unit/.gitignore)<br>[tests/unit/.gitkeep](../../../../sources/SyntheticAutonomicMind__CLIO/tests/unit/.gitkeep) |
| security | 18 | [SECURITY.md](../../../../sources/SyntheticAutonomicMind__CLIO/SECURITY.md)<br>[tests/unit/test_file_security.pl](../../../../sources/SyntheticAutonomicMind__CLIO/tests/unit/test_file_security.pl)<br>[tests/unit/test_remote_execution_security.pl](../../../../sources/SyntheticAutonomicMind__CLIO/tests/unit/test_remote_execution_security.pl)<br>[tests/unit/test_secret_redactor_levels.pl](../../../../sources/SyntheticAutonomicMind__CLIO/tests/unit/test_secret_redactor_levels.pl)<br>[tests/unit/test_secret_redactor.pl](../../../../sources/SyntheticAutonomicMind__CLIO/tests/unit/test_secret_redactor.pl)<br>[tests/unit/test_ui_audit.pl](../../../../sources/SyntheticAutonomicMind__CLIO/tests/unit/test_ui_audit.pl)<br>[tests/unit/test_web_security.pl](../../../../sources/SyntheticAutonomicMind__CLIO/tests/unit/test_web_security.pl)<br>[lib/CLIO/UI/Commands/API/Auth.pm](../../../../sources/SyntheticAutonomicMind__CLIO/lib/CLIO/UI/Commands/API/Auth.pm) |
| ci | 3 | [.github/workflows/docker-build.yml](../../../../sources/SyntheticAutonomicMind__CLIO/.github/workflows/docker-build.yml)<br>[.github/workflows/release.yml](../../../../sources/SyntheticAutonomicMind__CLIO/.github/workflows/release.yml)<br>[.github/workflows/update-homebrew.yml](../../../../sources/SyntheticAutonomicMind__CLIO/.github/workflows/update-homebrew.yml) |
| container | 1 | [Dockerfile](../../../../sources/SyntheticAutonomicMind__CLIO/Dockerfile) |
| instruction | 1 | [AGENTS.md](../../../../sources/SyntheticAutonomicMind__CLIO/AGENTS.md) |
| docs | 32 | [README.md](../../../../sources/SyntheticAutonomicMind__CLIO/README.md)<br>[themes/README.md](../../../../sources/SyntheticAutonomicMind__CLIO/themes/README.md)<br>[tests/README.md](../../../../sources/SyntheticAutonomicMind__CLIO/tests/README.md)<br>[terminal-bench/README.md](../../../../sources/SyntheticAutonomicMind__CLIO/terminal-bench/README.md)<br>[styles/README.md](../../../../sources/SyntheticAutonomicMind__CLIO/styles/README.md)<br>[docs/ARCHITECTURE_REMOTE_EXECUTION.md](../../../../sources/SyntheticAutonomicMind__CLIO/docs/ARCHITECTURE_REMOTE_EXECUTION.md)<br>[docs/ARCHITECTURE.md](../../../../sources/SyntheticAutonomicMind__CLIO/docs/ARCHITECTURE.md)<br>[docs/AUTOMATION.md](../../../../sources/SyntheticAutonomicMind__CLIO/docs/AUTOMATION.md) |
| config | 1 | [Makefile](../../../../sources/SyntheticAutonomicMind__CLIO/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 196 | [tests/benchmark.pl](../../../../sources/SyntheticAutonomicMind__CLIO/tests/benchmark.pl)<br>[tests/INVENTORY.md](../../../../sources/SyntheticAutonomicMind__CLIO/tests/INVENTORY.md)<br>[tests/README.md](../../../../sources/SyntheticAutonomicMind__CLIO/tests/README.md)<br>[tests/run_all_tests.pl](../../../../sources/SyntheticAutonomicMind__CLIO/tests/run_all_tests.pl)<br>[tests/test_model_capabilities.sh](../../../../sources/SyntheticAutonomicMind__CLIO/tests/test_model_capabilities.sh)<br>[tests/TOOL_OPERATIONS.md](../../../../sources/SyntheticAutonomicMind__CLIO/tests/TOOL_OPERATIONS.md) |
| CI workflow | 3 | [.github/workflows/docker-build.yml](../../../../sources/SyntheticAutonomicMind__CLIO/.github/workflows/docker-build.yml)<br>[.github/workflows/release.yml](../../../../sources/SyntheticAutonomicMind__CLIO/.github/workflows/release.yml)<br>[.github/workflows/update-homebrew.yml](../../../../sources/SyntheticAutonomicMind__CLIO/.github/workflows/update-homebrew.yml) |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/SyntheticAutonomicMind__CLIO/Dockerfile) |
| 보안/정책 | 18 | [SECURITY.md](../../../../sources/SyntheticAutonomicMind__CLIO/SECURITY.md)<br>[tests/unit/test_file_security.pl](../../../../sources/SyntheticAutonomicMind__CLIO/tests/unit/test_file_security.pl)<br>[tests/unit/test_remote_execution_security.pl](../../../../sources/SyntheticAutonomicMind__CLIO/tests/unit/test_remote_execution_security.pl)<br>[tests/unit/test_secret_redactor_levels.pl](../../../../sources/SyntheticAutonomicMind__CLIO/tests/unit/test_secret_redactor_levels.pl)<br>[tests/unit/test_secret_redactor.pl](../../../../sources/SyntheticAutonomicMind__CLIO/tests/unit/test_secret_redactor.pl)<br>[tests/unit/test_ui_audit.pl](../../../../sources/SyntheticAutonomicMind__CLIO/tests/unit/test_ui_audit.pl) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/SyntheticAutonomicMind__CLIO/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `Dockerfile`, `Makefile`, `.github/workflows/docker-build.yml`.
2. agent/tool runtime 매핑: `AGENTS.md`, `tools/assess_codebase.pl`, `tools/ASSESSMENT_METHODOLOGY.md`.
3. retrieval/memory/indexing 확인: `lib/CLIO/UI/Commands/Memory.pm`, `lib/CLIO/Memory/LongTerm.pm`, `lib/CLIO/Memory/ShortTerm.pm`.
4. test/eval 파일로 동작 검증: `tests/benchmark.pl`, `tests/INVENTORY.md`, `tests/README.md`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 An AI assisted coding agent that runs in your terminal and supports many providers and models.. 핵심 구조 신호는 Perl, Dockerfile, Makefile, README.md, AGENTS.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
