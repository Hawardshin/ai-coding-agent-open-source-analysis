# oleksiijko/pmb 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Local-first persistent memory for AI coding agents (Claude Code, Cursor, Codex) over MCP. Decisions, lessons and facts live in one SQLite file on your disk. Offline, multilingual.

## 요약

- 조사 단위: `sources/oleksiijko__pmb` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 432 files, 56 directories, depth score 118, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/mcp/test_daemon_singleton.py, tests/mcp/test_daemon.py, tests/mcp/test_lazy_mcp_import.py이고, 의존성 단서는 anthropic, claude, codex, mcp, next, typer, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | oleksiijko/pmb |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 79 |
| Forks | 7 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/oleksiijko__pmb](../../../../sources/oleksiijko__pmb) |
| 기존 보고서 | [reports/global-trending/repositories/oleksiijko__pmb.md](../../../global-trending/repositories/oleksiijko__pmb.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 432 / 56 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .claude, .github, docker, docs, npm, scripts, src, tests |
| 상위 확장자 | .py: 352, .md: 39, .yml: 9, (none): 8, .json: 7, .yaml: 5, .js: 4, .png: 2, .cff: 1, .css: 1, .html: 1, .in: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 86 |
| src | source boundary | 56 |
| docs | documentation surface | 41 |
| .github | ci surface | 1 |
| docker | documentation surface | 1 |
| npm | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | install | make install |
| serve-dev | Makefile | dev | make dev |
| test | Makefile | test | make test |
| test | Makefile | test-core | make test-core |
| test | Makefile | test-smoke | make test-smoke |
| test | Makefile | test-all-WARN | make test-all-WARN |
| quality | Makefile | lint | make lint |
| quality | Makefile | format | make format |
| utility | Makefile | clean | make clean |
| utility | Makefile | bench | make bench |
| utility | Makefile | bench-quick | make bench-quick |
| utility | Makefile | tui | make tui |
| utility | Makefile | dashboard | make dashboard |
| build | Makefile | docker-build | make docker-build |
| container | Makefile | docker-shell | make docker-shell |
| container | Makefile | docker-dashboard | make docker-dashboard |
| container | Makefile | docker-mcp | make docker-mcp |
| test | Makefile | docker-test | make docker-test |
| utility | pyproject.toml | pmb | pmb |
| utility | pyproject.toml | pmb-ai | pmb-ai |
| utility | pyproject.toml | pmb-mcp | pmb-mcp |
| utility | pyproject.toml | pmb-chat | pmb-chat |
| utility | pyproject.toml | pmb-hook | pmb-hook |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | anthropic, claude |
| agentProtocols | mcp, codex |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | transformers |
| webRuntime | next |
| developerSurface | typer |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [tests/mcp/test_daemon_singleton.py](../../../../sources/oleksiijko__pmb/tests/mcp/test_daemon_singleton.py) | mcp signal |
| mcp | [tests/mcp/test_daemon.py](../../../../sources/oleksiijko__pmb/tests/mcp/test_daemon.py) | mcp signal |
| mcp | [tests/mcp/test_lazy_mcp_import.py](../../../../sources/oleksiijko__pmb/tests/mcp/test_lazy_mcp_import.py) | mcp signal |
| mcp | [tests/mcp/test_mcp_compaction.py](../../../../sources/oleksiijko__pmb/tests/mcp/test_mcp_compaction.py) | mcp signal |
| agentRuntime | [tests/hooks/test_adherence_metric.py](../../../../sources/oleksiijko__pmb/tests/hooks/test_adherence_metric.py) | agentRuntime signal |
| agentRuntime | [tests/hooks/test_agent_wrapper.py](../../../../sources/oleksiijko__pmb/tests/hooks/test_agent_wrapper.py) | agentRuntime signal |
| agentRuntime | [tests/hooks/test_auto_recall.py](../../../../sources/oleksiijko__pmb/tests/hooks/test_auto_recall.py) | agentRuntime signal |
| agentRuntime | [tests/hooks/test_autowrite_importance.py](../../../../sources/oleksiijko__pmb/tests/hooks/test_autowrite_importance.py) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/oleksiijko__pmb/server.json) | entrypoints signal |
| entrypoints | [src/pmb/mcp/server.py](../../../../sources/oleksiijko__pmb/src/pmb/mcp/server.py) | entrypoints signal |
| entrypoints | [src/pmb/hookclient/__main__.py](../../../../sources/oleksiijko__pmb/src/pmb/hookclient/__main__.py) | entrypoints signal |
| entrypoints | [src/pmb/dashboard/server.py](../../../../sources/oleksiijko__pmb/src/pmb/dashboard/server.py) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 10 | [server.json](../../../../sources/oleksiijko__pmb/server.json)<br>[src/pmb/mcp/server.py](../../../../sources/oleksiijko__pmb/src/pmb/mcp/server.py)<br>[src/pmb/hookclient/__main__.py](../../../../sources/oleksiijko__pmb/src/pmb/hookclient/__main__.py)<br>[src/pmb/dashboard/server.py](../../../../sources/oleksiijko__pmb/src/pmb/dashboard/server.py)<br>[src/pmb/cli/__main__.py](../../../../sources/oleksiijko__pmb/src/pmb/cli/__main__.py)<br>[src/pmb/cli/main.py](../../../../sources/oleksiijko__pmb/src/pmb/cli/main.py)<br>[src/pmb/agent_wrapper/__main__.py](../../../../sources/oleksiijko__pmb/src/pmb/agent_wrapper/__main__.py)<br>[npm/bin/bootstrap.js](../../../../sources/oleksiijko__pmb/npm/bin/bootstrap.js) |
| agentRuntime | 34 | [tests/hooks/test_adherence_metric.py](../../../../sources/oleksiijko__pmb/tests/hooks/test_adherence_metric.py)<br>[tests/hooks/test_agent_wrapper.py](../../../../sources/oleksiijko__pmb/tests/hooks/test_agent_wrapper.py)<br>[tests/hooks/test_auto_recall.py](../../../../sources/oleksiijko__pmb/tests/hooks/test_auto_recall.py)<br>[tests/hooks/test_autowrite_importance.py](../../../../sources/oleksiijko__pmb/tests/hooks/test_autowrite_importance.py)<br>[tests/hooks/test_feedback.py](../../../../sources/oleksiijko__pmb/tests/hooks/test_feedback.py)<br>[tests/hooks/test_followcheck.py](../../../../sources/oleksiijko__pmb/tests/hooks/test_followcheck.py)<br>[tests/hooks/test_hook_client.py](../../../../sources/oleksiijko__pmb/tests/hooks/test_hook_client.py)<br>[tests/hooks/test_lesson_idf_gate.py](../../../../sources/oleksiijko__pmb/tests/hooks/test_lesson_idf_gate.py) |
| mcp | 16 | [tests/mcp/test_daemon_singleton.py](../../../../sources/oleksiijko__pmb/tests/mcp/test_daemon_singleton.py)<br>[tests/mcp/test_daemon.py](../../../../sources/oleksiijko__pmb/tests/mcp/test_daemon.py)<br>[tests/mcp/test_lazy_mcp_import.py](../../../../sources/oleksiijko__pmb/tests/mcp/test_lazy_mcp_import.py)<br>[tests/mcp/test_mcp_compaction.py](../../../../sources/oleksiijko__pmb/tests/mcp/test_mcp_compaction.py)<br>[tests/mcp/test_mcp_registry.py](../../../../sources/oleksiijko__pmb/tests/mcp/test_mcp_registry.py)<br>[tests/mcp/test_toolspec_budget.py](../../../../sources/oleksiijko__pmb/tests/mcp/test_toolspec_budget.py)<br>[tests/integration/test_mcp_e2e.py](../../../../sources/oleksiijko__pmb/tests/integration/test_mcp_e2e.py)<br>[tests/cli/test_mcp_proxy.py](../../../../sources/oleksiijko__pmb/tests/cli/test_mcp_proxy.py) |
| retrieval | 42 | [tests/recall/test_memory_quality.py](../../../../sources/oleksiijko__pmb/tests/recall/test_memory_quality.py)<br>[tests/ingest/test_git_sync.py](../../../../sources/oleksiijko__pmb/tests/ingest/test_git_sync.py)<br>[tests/ingest/test_known_projects_filter.py](../../../../sources/oleksiijko__pmb/tests/ingest/test_known_projects_filter.py)<br>[tests/ingest/test_multimodal.py](../../../../sources/oleksiijko__pmb/tests/ingest/test_multimodal.py)<br>[tests/ingest/test_pdf_headings.py](../../../../sources/oleksiijko__pmb/tests/ingest/test_pdf_headings.py)<br>[tests/ingest/test_project_index_hygiene.py](../../../../sources/oleksiijko__pmb/tests/ingest/test_project_index_hygiene.py)<br>[tests/ingest/test_project_observer.py](../../../../sources/oleksiijko__pmb/tests/ingest/test_project_observer.py)<br>[tests/ingest/test_reference_data.py](../../../../sources/oleksiijko__pmb/tests/ingest/test_reference_data.py) |
| spec | 3 | [docs/ROADMAP.md](../../../../sources/oleksiijko__pmb/docs/ROADMAP.md)<br>[docs/concepts/architecture.md](../../../../sources/oleksiijko__pmb/docs/concepts/architecture.md)<br>[docs/concepts/design-and-tech.md](../../../../sources/oleksiijko__pmb/docs/concepts/design-and-tech.md) |
| eval | 183 | [tests/conftest.py](../../../../sources/oleksiijko__pmb/tests/conftest.py)<br>[tests/security/test_encryption.py](../../../../sources/oleksiijko__pmb/tests/security/test_encryption.py)<br>[tests/security/test_escalation.py](../../../../sources/oleksiijko__pmb/tests/security/test_escalation.py)<br>[tests/security/test_redact.py](../../../../sources/oleksiijko__pmb/tests/security/test_redact.py)<br>[tests/security/test_security.py](../../../../sources/oleksiijko__pmb/tests/security/test_security.py)<br>[tests/recall/test_arcs.py](../../../../sources/oleksiijko__pmb/tests/recall/test_arcs.py)<br>[tests/recall/test_causation.py](../../../../sources/oleksiijko__pmb/tests/recall/test_causation.py)<br>[tests/recall/test_conversational_gate.py](../../../../sources/oleksiijko__pmb/tests/recall/test_conversational_gate.py) |
| security | 12 | [SECURITY.md](../../../../sources/oleksiijko__pmb/SECURITY.md)<br>[tests/security/test_encryption.py](../../../../sources/oleksiijko__pmb/tests/security/test_encryption.py)<br>[tests/security/test_escalation.py](../../../../sources/oleksiijko__pmb/tests/security/test_escalation.py)<br>[tests/security/test_redact.py](../../../../sources/oleksiijko__pmb/tests/security/test_redact.py)<br>[tests/security/test_security.py](../../../../sources/oleksiijko__pmb/tests/security/test_security.py)<br>[tests/integration/test_http_bearer_auth.py](../../../../sources/oleksiijko__pmb/tests/integration/test_http_bearer_auth.py)<br>[tests/hooks/test_pretool_command_guard.py](../../../../sources/oleksiijko__pmb/tests/hooks/test_pretool_command_guard.py)<br>[tests/hooks/test_pretool_guard.py](../../../../sources/oleksiijko__pmb/tests/hooks/test_pretool_guard.py) |
| ci | 6 | [.github/workflows/benchmark.yml](../../../../sources/oleksiijko__pmb/.github/workflows/benchmark.yml)<br>[.github/workflows/ci.yml](../../../../sources/oleksiijko__pmb/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/oleksiijko__pmb/.github/workflows/docs.yml)<br>[.github/workflows/publish-npm.yml](../../../../sources/oleksiijko__pmb/.github/workflows/publish-npm.yml)<br>[.github/workflows/publish.yml](../../../../sources/oleksiijko__pmb/.github/workflows/publish.yml)<br>[.github/workflows/release-drafter.yml](../../../../sources/oleksiijko__pmb/.github/workflows/release-drafter.yml) |
| container | 2 | [compose.yaml](../../../../sources/oleksiijko__pmb/compose.yaml)<br>[docker/Dockerfile](../../../../sources/oleksiijko__pmb/docker/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 36 | [mkdocs.yml](../../../../sources/oleksiijko__pmb/mkdocs.yml)<br>[README.md](../../../../sources/oleksiijko__pmb/README.md)<br>[scripts/README.md](../../../../sources/oleksiijko__pmb/scripts/README.md)<br>[npm/README.md](../../../../sources/oleksiijko__pmb/npm/README.md)<br>[docs/404.md](../../../../sources/oleksiijko__pmb/docs/404.md)<br>[docs/assistant-integration-notes.md](../../../../sources/oleksiijko__pmb/docs/assistant-integration-notes.md)<br>[docs/HARDENING_NOTES.md](../../../../sources/oleksiijko__pmb/docs/HARDENING_NOTES.md)<br>[docs/README.md](../../../../sources/oleksiijko__pmb/docs/README.md) |
| config | 3 | [Makefile](../../../../sources/oleksiijko__pmb/Makefile)<br>[pyproject.toml](../../../../sources/oleksiijko__pmb/pyproject.toml)<br>[npm/package.json](../../../../sources/oleksiijko__pmb/npm/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 183 | [tests/conftest.py](../../../../sources/oleksiijko__pmb/tests/conftest.py)<br>[tests/security/test_encryption.py](../../../../sources/oleksiijko__pmb/tests/security/test_encryption.py)<br>[tests/security/test_escalation.py](../../../../sources/oleksiijko__pmb/tests/security/test_escalation.py)<br>[tests/security/test_redact.py](../../../../sources/oleksiijko__pmb/tests/security/test_redact.py)<br>[tests/security/test_security.py](../../../../sources/oleksiijko__pmb/tests/security/test_security.py)<br>[tests/recall/test_arcs.py](../../../../sources/oleksiijko__pmb/tests/recall/test_arcs.py) |
| CI workflow | 6 | [.github/workflows/benchmark.yml](../../../../sources/oleksiijko__pmb/.github/workflows/benchmark.yml)<br>[.github/workflows/ci.yml](../../../../sources/oleksiijko__pmb/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/oleksiijko__pmb/.github/workflows/docs.yml)<br>[.github/workflows/publish-npm.yml](../../../../sources/oleksiijko__pmb/.github/workflows/publish-npm.yml)<br>[.github/workflows/publish.yml](../../../../sources/oleksiijko__pmb/.github/workflows/publish.yml)<br>[.github/workflows/release-drafter.yml](../../../../sources/oleksiijko__pmb/.github/workflows/release-drafter.yml) |
| 컨테이너/배포 | 2 | [compose.yaml](../../../../sources/oleksiijko__pmb/compose.yaml)<br>[docker/Dockerfile](../../../../sources/oleksiijko__pmb/docker/Dockerfile) |
| 보안/정책 | 12 | [SECURITY.md](../../../../sources/oleksiijko__pmb/SECURITY.md)<br>[tests/security/test_encryption.py](../../../../sources/oleksiijko__pmb/tests/security/test_encryption.py)<br>[tests/security/test_escalation.py](../../../../sources/oleksiijko__pmb/tests/security/test_escalation.py)<br>[tests/security/test_redact.py](../../../../sources/oleksiijko__pmb/tests/security/test_redact.py)<br>[tests/security/test_security.py](../../../../sources/oleksiijko__pmb/tests/security/test_security.py)<br>[tests/integration/test_http_bearer_auth.py](../../../../sources/oleksiijko__pmb/tests/integration/test_http_bearer_auth.py) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/mcp/test_daemon_singleton.py`, `tests/mcp/test_daemon.py`, `tests/mcp/test_lazy_mcp_import.py`.
2. entrypoint를 따라 실행 흐름 확인: `server.json`, `src/pmb/mcp/server.py`, `src/pmb/hookclient/__main__.py`.
3. agent/tool runtime 매핑: `tests/hooks/test_adherence_metric.py`, `tests/hooks/test_agent_wrapper.py`, `tests/hooks/test_auto_recall.py`.
4. retrieval/memory/indexing 확인: `tests/recall/test_memory_quality.py`, `tests/ingest/test_git_sync.py`, `tests/ingest/test_known_projects_filter.py`.
5. test/eval 파일로 동작 검증: `tests/conftest.py`, `tests/security/test_encryption.py`, `tests/security/test_escalation.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local first persistent memory for AI coding agents Claude Code, Cursor, Codex over MCP. Decisions, lessons and facts liv. 핵심 구조 신호는 Python, pyproject.toml, Makefile, README.md, LICENSE, anthropic이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
