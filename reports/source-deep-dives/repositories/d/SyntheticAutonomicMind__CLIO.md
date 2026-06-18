# SyntheticAutonomicMind/CLIO Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

An AI-assisted coding agent that runs in your terminal and supports many providers and models.

## 요약

- 조사 단위: `sources/SyntheticAutonomicMind__CLIO` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 507 files, 108 directories, depth score 111, key references 8개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 container=Dockerfile이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | SyntheticAutonomicMind/CLIO |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | Perl |
| Stars | 173 |
| Forks | 10 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/SyntheticAutonomicMind__CLIO](../../../../sources/SyntheticAutonomicMind__CLIO) |
| Existing report | [reports/global-trending/repositories/SyntheticAutonomicMind__CLIO.md](../../../global-trending/repositories/SyntheticAutonomicMind__CLIO.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 507 / 108 |
| Max observed depth | 6 |
| Top directories | .clio, .github, .images, ai-assisted, docs, lib, runs, scripts, styles, terminal-bench, tests, themes, tools |
| Top extensions | .pm: 164, .pl: 157, .txt: 67, .md: 43, .style: 25, (none): 15, .json: 11, .sh: 7, .yml: 6, .theme: 4, .lock: 2, .png: 2 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
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


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | version | make version |
| test | Makefile | test | make test |
| quality | Makefile | check-syntax | make check-syntax |
| build | Makefile | release | make release |
| utility | Makefile | install | make install |


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
| container | [Dockerfile](../../../../sources/SyntheticAutonomicMind__CLIO/Dockerfile) | container signal |
| config | [Makefile](../../../../sources/SyntheticAutonomicMind__CLIO/Makefile) | config signal |
| ci | [.github/workflows/docker-build.yml](../../../../sources/SyntheticAutonomicMind__CLIO/.github/workflows/docker-build.yml) | ci signal |
| ci | [.github/workflows/release.yml](../../../../sources/SyntheticAutonomicMind__CLIO/.github/workflows/release.yml) | ci signal |
| ci | [.github/workflows/update-homebrew.yml](../../../../sources/SyntheticAutonomicMind__CLIO/.github/workflows/update-homebrew.yml) | ci signal |
| eval | [tests/benchmark.pl](../../../../sources/SyntheticAutonomicMind__CLIO/tests/benchmark.pl) | eval support |
| eval | [tests/INVENTORY.md](../../../../sources/SyntheticAutonomicMind__CLIO/tests/INVENTORY.md) | eval support |
| instruction | [AGENTS.md](../../../../sources/SyntheticAutonomicMind__CLIO/AGENTS.md) | instruction support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
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


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 196 | [tests/benchmark.pl](../../../../sources/SyntheticAutonomicMind__CLIO/tests/benchmark.pl)<br>[tests/INVENTORY.md](../../../../sources/SyntheticAutonomicMind__CLIO/tests/INVENTORY.md)<br>[tests/README.md](../../../../sources/SyntheticAutonomicMind__CLIO/tests/README.md)<br>[tests/run_all_tests.pl](../../../../sources/SyntheticAutonomicMind__CLIO/tests/run_all_tests.pl)<br>[tests/test_model_capabilities.sh](../../../../sources/SyntheticAutonomicMind__CLIO/tests/test_model_capabilities.sh)<br>[tests/TOOL_OPERATIONS.md](../../../../sources/SyntheticAutonomicMind__CLIO/tests/TOOL_OPERATIONS.md) |
| CI workflows | 3 | [.github/workflows/docker-build.yml](../../../../sources/SyntheticAutonomicMind__CLIO/.github/workflows/docker-build.yml)<br>[.github/workflows/release.yml](../../../../sources/SyntheticAutonomicMind__CLIO/.github/workflows/release.yml)<br>[.github/workflows/update-homebrew.yml](../../../../sources/SyntheticAutonomicMind__CLIO/.github/workflows/update-homebrew.yml) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/SyntheticAutonomicMind__CLIO/Dockerfile) |
| Security / policy | 18 | [SECURITY.md](../../../../sources/SyntheticAutonomicMind__CLIO/SECURITY.md)<br>[tests/unit/test_file_security.pl](../../../../sources/SyntheticAutonomicMind__CLIO/tests/unit/test_file_security.pl)<br>[tests/unit/test_remote_execution_security.pl](../../../../sources/SyntheticAutonomicMind__CLIO/tests/unit/test_remote_execution_security.pl)<br>[tests/unit/test_secret_redactor_levels.pl](../../../../sources/SyntheticAutonomicMind__CLIO/tests/unit/test_secret_redactor_levels.pl)<br>[tests/unit/test_secret_redactor.pl](../../../../sources/SyntheticAutonomicMind__CLIO/tests/unit/test_secret_redactor.pl)<br>[tests/unit/test_ui_audit.pl](../../../../sources/SyntheticAutonomicMind__CLIO/tests/unit/test_ui_audit.pl) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/SyntheticAutonomicMind__CLIO/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `Dockerfile`, `Makefile`, `.github/workflows/docker-build.yml`.
2. Map agent/tool runtime through: `AGENTS.md`, `tools/assess_codebase.pl`, `tools/ASSESSMENT_METHODOLOGY.md`.
3. Inspect retrieval/memory/indexing through: `lib/CLIO/UI/Commands/Memory.pm`, `lib/CLIO/Memory/LongTerm.pm`, `lib/CLIO/Memory/ShortTerm.pm`.
4. Verify behavior through test/eval files: `tests/benchmark.pl`, `tests/INVENTORY.md`, `tests/README.md`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 An AI assisted coding agent that runs in your terminal and supports many providers and models.. 핵심 구조 신호는 Perl, Dockerfile, Makefile, README.md, AGENTS.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
