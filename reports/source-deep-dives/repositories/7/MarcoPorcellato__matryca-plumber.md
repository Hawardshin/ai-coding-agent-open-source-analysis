# MarcoPorcellato/matryca-plumber 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Local-first AI daemon for Logseq OG: background semantic indexing, link hygiene, and agent-ready CLI/MCP — edits Markdown on disk (no cloud, no Logseq API). Karpathy LLM-Wiki inspired.

## 요약

- 조사 단위: `sources/MarcoPorcellato__matryca-plumber` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 370 files, 36 directories, depth score 115, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/test_hermes_mcp_handshake.py, tests/test_mcp_server.py, tests/test_mcp_telemetry.py이고, 의존성 단서는 openai, mcp, fastapi, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | MarcoPorcellato/matryca-plumber |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 64 |
| Forks | 4 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/MarcoPorcellato__matryca-plumber](../../../../sources/MarcoPorcellato__matryca-plumber) |
| 기존 보고서 | [reports/global-trending/repositories/MarcoPorcellato__matryca-plumber.md](../../../global-trending/repositories/MarcoPorcellato__matryca-plumber.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 370 / 36 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .cursor, .github, .well-known, docs, frontend, images, scripts, src, tests |
| 상위 확장자 | .py: 228, .md: 58, .tsx: 13, .ts: 12, .yml: 12, .mdc: 10, (none): 8, .json: 7, .svg: 4, .js: 3, .png: 3, .sh: 2 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 79 |
| tests | validation surface | 63 |
| docs | documentation surface | 48 |
| .github | ci surface | 1 |
| frontend | top-level component | 1 |
| images | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | install | make install |
| quality | Makefile | format | make format |
| quality | Makefile | lint | make lint |
| quality | Makefile | typecheck | make typecheck |
| quality | Makefile | sandbox-read-check | make sandbox-read-check |
| test | Makefile | test | make test |
| test | Makefile | test-fast | make test-fast |
| test | Makefile | test-fast-parallel | make test-fast-parallel |
| test | Makefile | test-resilience | make test-resilience |
| utility | Makefile | perf | make perf |
| quality | Makefile | format-check | make format-check |
| quality | Makefile | check | make check |
| utility | Makefile | ci | make ci |
| utility | Makefile | clean | make clean |
| utility | pyproject.toml | matryca-plumber | matryca-plumber |
| utility | pyproject.toml | matryca-logseq-llm-wiki | matryca-logseq-llm-wiki |
| utility | pyproject.toml | matryca | matryca |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [tests/test_hermes_mcp_handshake.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_hermes_mcp_handshake.py) | mcp signal |
| mcp | [tests/test_mcp_server.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_mcp_server.py) | mcp signal |
| mcp | [tests/test_mcp_telemetry.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_mcp_telemetry.py) | mcp signal |
| mcp | [src/agent/mcp_server.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/agent/mcp_server.py) | mcp signal |
| agentRuntime | [src/utils/agent_debug_log.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/utils/agent_debug_log.py) | agentRuntime signal |
| agentRuntime | [src/agent/__init__.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/agent/__init__.py) | agentRuntime signal |
| agentRuntime | [src/agent/alias_state.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/agent/alias_state.py) | agentRuntime signal |
| agentRuntime | [src/agent/context_compressor.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/agent/context_compressor.py) | agentRuntime signal |
| entrypoints | [src/main.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/main.py) | entrypoints signal |
| entrypoints | [src/cli/__main__.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/cli/__main__.py) | entrypoints signal |
| entrypoints | [frontend/src/App.tsx](../../../../sources/MarcoPorcellato__matryca-plumber/frontend/src/App.tsx) | entrypoints signal |
| entrypoints | [frontend/src/index.css](../../../../sources/MarcoPorcellato__matryca-plumber/frontend/src/index.css) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 5 | [src/main.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/main.py)<br>[src/cli/__main__.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/cli/__main__.py)<br>[frontend/src/App.tsx](../../../../sources/MarcoPorcellato__matryca-plumber/frontend/src/App.tsx)<br>[frontend/src/index.css](../../../../sources/MarcoPorcellato__matryca-plumber/frontend/src/index.css)<br>[frontend/src/main.tsx](../../../../sources/MarcoPorcellato__matryca-plumber/frontend/src/main.tsx) |
| agentRuntime | 46 | [src/utils/agent_debug_log.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/utils/agent_debug_log.py)<br>[src/agent/__init__.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/agent/__init__.py)<br>[src/agent/alias_state.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/agent/alias_state.py)<br>[src/agent/context_compressor.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/agent/context_compressor.py)<br>[src/agent/context_load.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/agent/context_load.py)<br>[src/agent/control_room_progress.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/agent/control_room_progress.py)<br>[src/agent/cooperative_yield.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/agent/cooperative_yield.py)<br>[src/agent/graph_dispatch.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/agent/graph_dispatch.py) |
| mcp | 6 | [tests/test_hermes_mcp_handshake.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_hermes_mcp_handshake.py)<br>[tests/test_mcp_server.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_mcp_server.py)<br>[tests/test_mcp_telemetry.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_mcp_telemetry.py)<br>[src/agent/mcp_server.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/agent/mcp_server.py)<br>[src/agent/mcp_telemetry.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/agent/mcp_telemetry.py)<br>[src/agent/mcp_tool_guard.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/agent/mcp_tool_guard.py) |
| retrieval | 75 | [matryca-wiki.example.yml](../../../../sources/MarcoPorcellato__matryca-plumber/matryca-wiki.example.yml)<br>[tests/test_alias_index.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_alias_index.py)<br>[tests/test_backlink_index.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_backlink_index.py)<br>[tests/test_dual_embedding.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_dual_embedding.py)<br>[tests/test_graph_analytics.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_graph_analytics.py)<br>[tests/test_graph_dispatch_search.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_graph_dispatch_search.py)<br>[tests/test_graph_path_hygiene.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_graph_path_hygiene.py)<br>[tests/test_graph_path_validate.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_graph_path_validate.py) |
| spec | 8 | [ROADMAP.md](../../../../sources/MarcoPorcellato__matryca-plumber/ROADMAP.md)<br>[docs/ARCHITECTURE.md](../../../../sources/MarcoPorcellato__matryca-plumber/docs/ARCHITECTURE.md)<br>[docs/roadmaps/ROADMAP_IRONCLAD_SHIELD.md](../../../../sources/MarcoPorcellato__matryca-plumber/docs/roadmaps/ROADMAP_IRONCLAD_SHIELD.md)<br>[docs/roadmaps/ROADMAP_LLM_WIKI_PHASE_3.md](../../../../sources/MarcoPorcellato__matryca-plumber/docs/roadmaps/ROADMAP_LLM_WIKI_PHASE_3.md)<br>[docs/roadmaps/ROADMAP_LLM_WIKI.md](../../../../sources/MarcoPorcellato__matryca-plumber/docs/roadmaps/ROADMAP_LLM_WIKI.md)<br>[docs/roadmaps/ROADMAP_LOGSEQ_SUPERPOWERS.md](../../../../sources/MarcoPorcellato__matryca-plumber/docs/roadmaps/ROADMAP_LOGSEQ_SUPERPOWERS.md)<br>[docs/roadmaps/ROADMAP_MLDOC_COMPLIANCE.md](../../../../sources/MarcoPorcellato__matryca-plumber/docs/roadmaps/ROADMAP_MLDOC_COMPLIANCE.md)<br>[docs/roadmaps/ROADMAP_PHASE_5_6.md](../../../../sources/MarcoPorcellato__matryca-plumber/docs/roadmaps/ROADMAP_PHASE_5_6.md) |
| eval | 98 | [tests/__init__.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/conftest.py)<br>[tests/test_advanced_query_block.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_advanced_query_block.py)<br>[tests/test_adversarial_security.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_adversarial_security.py)<br>[tests/test_agent_debug_log.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_agent_debug_log.py)<br>[tests/test_agent_experience_robustness.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_agent_experience_robustness.py)<br>[tests/test_alias_index.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_alias_index.py)<br>[tests/test_alias_state.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_alias_state.py) |
| security | 20 | [SECURITY.md](../../../../sources/MarcoPorcellato__matryca-plumber/SECURITY.md)<br>[tests/test_adversarial_security.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_adversarial_security.py)<br>[tests/test_git_audit.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_git_audit.py)<br>[tests/test_llm_url_policy.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_llm_url_policy.py)<br>[tests/test_sandbox_read_check.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_sandbox_read_check.py)<br>[tests/test_security_remediation.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_security_remediation.py)<br>[tests/test_ui_auth_lan.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_ui_auth_lan.py)<br>[src/utils/llm_url_policy.py](../../../../sources/MarcoPorcellato__matryca-plumber/src/utils/llm_url_policy.py) |
| ci | 4 | [.github/workflows/ci.yml](../../../../sources/MarcoPorcellato__matryca-plumber/.github/workflows/ci.yml)<br>[.github/workflows/dependabot-uv-fix.yml](../../../../sources/MarcoPorcellato__matryca-plumber/.github/workflows/dependabot-uv-fix.yml)<br>[.github/workflows/metrics-saver.yml](../../../../sources/MarcoPorcellato__matryca-plumber/.github/workflows/metrics-saver.yml)<br>[.github/workflows/release.yml](../../../../sources/MarcoPorcellato__matryca-plumber/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 10 | [.cursor/rules/00-karpathy-agent-behavior.mdc](../../../../sources/MarcoPorcellato__matryca-plumber/.cursor/rules/00-karpathy-agent-behavior.mdc)<br>[.cursor/rules/01-core-paradigm.mdc](../../../../sources/MarcoPorcellato__matryca-plumber/.cursor/rules/01-core-paradigm.mdc)<br>[.cursor/rules/02-python-standards.mdc](../../../../sources/MarcoPorcellato__matryca-plumber/.cursor/rules/02-python-standards.mdc)<br>[.cursor/rules/03-logseq-api.mdc](../../../../sources/MarcoPorcellato__matryca-plumber/.cursor/rules/03-logseq-api.mdc)<br>[.cursor/rules/04-spatial-parser.mdc](../../../../sources/MarcoPorcellato__matryca-plumber/.cursor/rules/04-spatial-parser.mdc)<br>[.cursor/rules/05-release-preparation.mdc](../../../../sources/MarcoPorcellato__matryca-plumber/.cursor/rules/05-release-preparation.mdc)<br>[.cursor/rules/06-auto-changelog.mdc](../../../../sources/MarcoPorcellato__matryca-plumber/.cursor/rules/06-auto-changelog.mdc)<br>[.cursor/rules/07-env-example.mdc](../../../../sources/MarcoPorcellato__matryca-plumber/.cursor/rules/07-env-example.mdc) |
| docs | 43 | [README.md](../../../../sources/MarcoPorcellato__matryca-plumber/README.md)<br>[frontend/README.md](../../../../sources/MarcoPorcellato__matryca-plumber/frontend/README.md)<br>[docs/ARCHITECTURE.md](../../../../sources/MarcoPorcellato__matryca-plumber/docs/ARCHITECTURE.md)<br>[docs/BRANDING.md](../../../../sources/MarcoPorcellato__matryca-plumber/docs/BRANDING.md)<br>[docs/PROJECT_DIARY.md](../../../../sources/MarcoPorcellato__matryca-plumber/docs/PROJECT_DIARY.md)<br>[docs/RELEASE_PROCESS.md](../../../../sources/MarcoPorcellato__matryca-plumber/docs/RELEASE_PROCESS.md)<br>[docs/resilience-llm-json-triz.md](../../../../sources/MarcoPorcellato__matryca-plumber/docs/resilience-llm-json-triz.md)<br>[docs/v1.8-OPTIMIZATION-PLAN.md](../../../../sources/MarcoPorcellato__matryca-plumber/docs/v1.8-OPTIMIZATION-PLAN.md) |
| config | 5 | [Makefile](../../../../sources/MarcoPorcellato__matryca-plumber/Makefile)<br>[pyproject.toml](../../../../sources/MarcoPorcellato__matryca-plumber/pyproject.toml)<br>[uv.lock](../../../../sources/MarcoPorcellato__matryca-plumber/uv.lock)<br>[frontend/package.json](../../../../sources/MarcoPorcellato__matryca-plumber/frontend/package.json)<br>[frontend/tsconfig.json](../../../../sources/MarcoPorcellato__matryca-plumber/frontend/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 98 | [tests/__init__.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/conftest.py)<br>[tests/test_advanced_query_block.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_advanced_query_block.py)<br>[tests/test_adversarial_security.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_adversarial_security.py)<br>[tests/test_agent_debug_log.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_agent_debug_log.py)<br>[tests/test_agent_experience_robustness.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_agent_experience_robustness.py) |
| CI workflow | 4 | [.github/workflows/ci.yml](../../../../sources/MarcoPorcellato__matryca-plumber/.github/workflows/ci.yml)<br>[.github/workflows/dependabot-uv-fix.yml](../../../../sources/MarcoPorcellato__matryca-plumber/.github/workflows/dependabot-uv-fix.yml)<br>[.github/workflows/metrics-saver.yml](../../../../sources/MarcoPorcellato__matryca-plumber/.github/workflows/metrics-saver.yml)<br>[.github/workflows/release.yml](../../../../sources/MarcoPorcellato__matryca-plumber/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 20 | [SECURITY.md](../../../../sources/MarcoPorcellato__matryca-plumber/SECURITY.md)<br>[tests/test_adversarial_security.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_adversarial_security.py)<br>[tests/test_git_audit.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_git_audit.py)<br>[tests/test_llm_url_policy.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_llm_url_policy.py)<br>[tests/test_sandbox_read_check.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_sandbox_read_check.py)<br>[tests/test_security_remediation.py](../../../../sources/MarcoPorcellato__matryca-plumber/tests/test_security_remediation.py) |
| 에이전트 지시문 | 10 | [.cursor/rules/00-karpathy-agent-behavior.mdc](../../../../sources/MarcoPorcellato__matryca-plumber/.cursor/rules/00-karpathy-agent-behavior.mdc)<br>[.cursor/rules/01-core-paradigm.mdc](../../../../sources/MarcoPorcellato__matryca-plumber/.cursor/rules/01-core-paradigm.mdc)<br>[.cursor/rules/02-python-standards.mdc](../../../../sources/MarcoPorcellato__matryca-plumber/.cursor/rules/02-python-standards.mdc)<br>[.cursor/rules/03-logseq-api.mdc](../../../../sources/MarcoPorcellato__matryca-plumber/.cursor/rules/03-logseq-api.mdc)<br>[.cursor/rules/04-spatial-parser.mdc](../../../../sources/MarcoPorcellato__matryca-plumber/.cursor/rules/04-spatial-parser.mdc)<br>[.cursor/rules/05-release-preparation.mdc](../../../../sources/MarcoPorcellato__matryca-plumber/.cursor/rules/05-release-preparation.mdc) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/test_hermes_mcp_handshake.py`, `tests/test_mcp_server.py`, `tests/test_mcp_telemetry.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/main.py`, `src/cli/__main__.py`, `frontend/src/App.tsx`.
3. agent/tool runtime 매핑: `src/utils/agent_debug_log.py`, `src/agent/__init__.py`, `src/agent/alias_state.py`.
4. retrieval/memory/indexing 확인: `matryca-wiki.example.yml`, `tests/test_alias_index.py`, `tests/test_backlink_index.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/conftest.py`, `tests/test_advanced_query_block.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local first AI daemon for Logseq OG background semantic indexing, link hygiene, and agent ready CLI/MCP — edits Markdown. 핵심 구조 신호는 Python, pyproject.toml, Makefile, README.md, LICENSE, openai이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
