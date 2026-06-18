# blockscout/mcp-server 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Wraps Blockscout APIs and exposes blockchain data by Model Context Protocol

## 요약

- 조사 단위: `sources/blockscout__mcp-server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 272 files, 86 directories, depth score 120, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=MCP-REGISTRY-README.md, blockscout_mcp_server/__init__.py, blockscout_mcp_server/__main__.py이고, 의존성 단서는 mcp, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | blockscout/mcp-server |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 40 |
| Forks | 19 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/blockscout__mcp-server](../../../../sources/blockscout__mcp-server) |
| 기존 보고서 | [reports/global-trending/repositories/blockscout__mcp-server.md](../../../global-trending/repositories/blockscout__mcp-server.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 272 / 86 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .agents, .claude, .codex, .cursor, .devcontainer, .gemini, .github, agent-skills, blockscout_mcp_server, gpt, mcpb, scripts, tests |
| 상위 확장자 | .py: 162, .md: 34, .mdc: 20, .json: 10, .sh: 10, (none): 9, .yaml: 7, .toml: 6, .yml: 6, .example: 3, .html: 1, .ini: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 82 |
| .codex | top-level component | 1 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| agent-skills | top-level component | 1 |
| blockscout_mcp_server | source boundary | 1 |
| gpt | top-level component | 1 |
| mcpb | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | pyproject.toml | blockscout-mcp-server | blockscout-mcp-server |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
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
| mcp | [MCP-REGISTRY-README.md](../../../../sources/blockscout__mcp-server/MCP-REGISTRY-README.md) | mcp signal |
| mcp | [blockscout_mcp_server/__init__.py](../../../../sources/blockscout__mcp-server/blockscout_mcp_server/__init__.py) | mcp signal |
| mcp | [blockscout_mcp_server/__main__.py](../../../../sources/blockscout__mcp-server/blockscout_mcp_server/__main__.py) | mcp signal |
| mcp | [blockscout_mcp_server/analytics.py](../../../../sources/blockscout__mcp-server/blockscout_mcp_server/analytics.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/blockscout__mcp-server/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/tools/test_chain_resolution.py](../../../../sources/blockscout__mcp-server/tests/tools/test_chain_resolution.py) | agentRuntime signal |
| agentRuntime | [tests/tools/test_chain_support.py](../../../../sources/blockscout__mcp-server/tests/tools/test_chain_support.py) | agentRuntime signal |
| agentRuntime | [tests/tools/test_common_blockscout_request_auth.py](../../../../sources/blockscout__mcp-server/tests/tools/test_common_blockscout_request_auth.py) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/blockscout__mcp-server/server.json) | entrypoints signal |
| entrypoints | [blockscout_mcp_server/server.py](../../../../sources/blockscout__mcp-server/blockscout_mcp_server/server.py) | entrypoints signal |
| entrypoints | [.devcontainer/bin/cleanup-claude-session](../../../../sources/blockscout__mcp-server/.devcontainer/bin/cleanup-claude-session) | entrypoints signal |
| instruction | [.github/copilot-instructions.md](../../../../sources/blockscout__mcp-server/.github/copilot-instructions.md) | instruction signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 5 | [server.json](../../../../sources/blockscout__mcp-server/server.json)<br>[blockscout_mcp_server/__main__.py](../../../../sources/blockscout__mcp-server/blockscout_mcp_server/__main__.py)<br>[blockscout_mcp_server/server.py](../../../../sources/blockscout__mcp-server/blockscout_mcp_server/server.py)<br>[.devcontainer/bin/cleanup-claude-session](../../../../sources/blockscout__mcp-server/.devcontainer/bin/cleanup-claude-session)<br>[.devcontainer/bin/codex](../../../../sources/blockscout__mcp-server/.devcontainer/bin/codex) |
| agentRuntime | 111 | [AGENTS.md](../../../../sources/blockscout__mcp-server/AGENTS.md)<br>[tests/tools/test_chain_resolution.py](../../../../sources/blockscout__mcp-server/tests/tools/test_chain_resolution.py)<br>[tests/tools/test_chain_support.py](../../../../sources/blockscout__mcp-server/tests/tools/test_chain_support.py)<br>[tests/tools/test_common_blockscout_request_auth.py](../../../../sources/blockscout__mcp-server/tests/tools/test_common_blockscout_request_auth.py)<br>[tests/tools/test_common_blockscout_request.py](../../../../sources/blockscout__mcp-server/tests/tools/test_common_blockscout_request.py)<br>[tests/tools/test_common_metadata.py](../../../../sources/blockscout__mcp-server/tests/tools/test_common_metadata.py)<br>[tests/tools/test_common_post_request.py](../../../../sources/blockscout__mcp-server/tests/tools/test_common_post_request.py)<br>[tests/tools/test_common_truncate.py](../../../../sources/blockscout__mcp-server/tests/tools/test_common_truncate.py) |
| mcp | 61 | [MCP-REGISTRY-README.md](../../../../sources/blockscout__mcp-server/MCP-REGISTRY-README.md)<br>[blockscout_mcp_server/__init__.py](../../../../sources/blockscout__mcp-server/blockscout_mcp_server/__init__.py)<br>[blockscout_mcp_server/__main__.py](../../../../sources/blockscout__mcp-server/blockscout_mcp_server/__main__.py)<br>[blockscout_mcp_server/analytics.py](../../../../sources/blockscout__mcp-server/blockscout_mcp_server/analytics.py)<br>[blockscout_mcp_server/cache.py](../../../../sources/blockscout__mcp-server/blockscout_mcp_server/cache.py)<br>[blockscout_mcp_server/client_meta.py](../../../../sources/blockscout__mcp-server/blockscout_mcp_server/client_meta.py)<br>[blockscout_mcp_server/config.py](../../../../sources/blockscout__mcp-server/blockscout_mcp_server/config.py)<br>[blockscout_mcp_server/constants.py](../../../../sources/blockscout__mcp-server/blockscout_mcp_server/constants.py) |
| retrieval | 1 | [blockscout_mcp_server/templates/index.html](../../../../sources/blockscout__mcp-server/blockscout_mcp_server/templates/index.html) |
| spec | 4 | [SPEC.md](../../../../sources/blockscout__mcp-server/SPEC.md)<br>[.agents/skills/consult-spec/agent-instructions.md](../../../../sources/blockscout__mcp-server/.agents/skills/consult-spec/agent-instructions.md)<br>[.agents/skills/consult-spec/claude-code-rule.md](../../../../sources/blockscout__mcp-server/.agents/skills/consult-spec/claude-code-rule.md)<br>[.agents/skills/consult-spec/SKILL.md](../../../../sources/blockscout__mcp-server/.agents/skills/consult-spec/SKILL.md) |
| eval | 121 | [SPEC.md](../../../../sources/blockscout__mcp-server/SPEC.md)<br>[tests/conftest.py](../../../../sources/blockscout__mcp-server/tests/conftest.py)<br>[tests/test_analytics_helpers.py](../../../../sources/blockscout__mcp-server/tests/test_analytics_helpers.py)<br>[tests/test_analytics_source.py](../../../../sources/blockscout__mcp-server/tests/test_analytics_source.py)<br>[tests/test_analytics.py](../../../../sources/blockscout__mcp-server/tests/test_analytics.py)<br>[tests/test_bundled_skill_artifacts.py](../../../../sources/blockscout__mcp-server/tests/test_bundled_skill_artifacts.py)<br>[tests/test_cache.py](../../../../sources/blockscout__mcp-server/tests/test_cache.py)<br>[tests/test_client_meta.py](../../../../sources/blockscout__mcp-server/tests/test_client_meta.py) |
| security | 1 | [tests/tools/test_common_blockscout_request_auth.py](../../../../sources/blockscout__mcp-server/tests/tools/test_common_blockscout_request_auth.py) |
| ci | 5 | [.github/workflows/ci-lint.yml](../../../../sources/blockscout__mcp-server/.github/workflows/ci-lint.yml)<br>[.github/workflows/ci.yml](../../../../sources/blockscout__mcp-server/.github/workflows/ci.yml)<br>[.github/workflows/integration-tests.yml](../../../../sources/blockscout__mcp-server/.github/workflows/integration-tests.yml)<br>[.github/workflows/main.yml](../../../../sources/blockscout__mcp-server/.github/workflows/main.yml)<br>[.github/workflows/mcp-registry.yml](../../../../sources/blockscout__mcp-server/.github/workflows/mcp-registry.yml) |
| container | 2 | [Dockerfile](../../../../sources/blockscout__mcp-server/Dockerfile)<br>[tests/evals/docker-compose.yml](../../../../sources/blockscout__mcp-server/tests/evals/docker-compose.yml) |
| instruction | 26 | [AGENTS.md](../../../../sources/blockscout__mcp-server/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/blockscout__mcp-server/.github/copilot-instructions.md)<br>[.gemini/GEMINI.md](../../../../sources/blockscout__mcp-server/.gemini/GEMINI.md)<br>[.cursor/AGENTS.md](../../../../sources/blockscout__mcp-server/.cursor/AGENTS.md)<br>[.cursor/rules/000-role-and-task.mdc](../../../../sources/blockscout__mcp-server/.cursor/rules/000-role-and-task.mdc)<br>[.cursor/rules/010-implementation-rules.mdc](../../../../sources/blockscout__mcp-server/.cursor/rules/010-implementation-rules.mdc)<br>[.cursor/rules/110-new-mcp-tool.mdc](../../../../sources/blockscout__mcp-server/.cursor/rules/110-new-mcp-tool.mdc)<br>[.cursor/rules/112-direct-api-handlers.mdc](../../../../sources/blockscout__mcp-server/.cursor/rules/112-direct-api-handlers.mdc) |
| docs | 4 | [README.md](../../../../sources/blockscout__mcp-server/README.md)<br>[tests/evals/README.md](../../../../sources/blockscout__mcp-server/tests/evals/README.md)<br>[mcpb/README.md](../../../../sources/blockscout__mcp-server/mcpb/README.md)<br>[gpt/README.md](../../../../sources/blockscout__mcp-server/gpt/README.md) |
| config | 1 | [pyproject.toml](../../../../sources/blockscout__mcp-server/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 121 | [SPEC.md](../../../../sources/blockscout__mcp-server/SPEC.md)<br>[tests/conftest.py](../../../../sources/blockscout__mcp-server/tests/conftest.py)<br>[tests/test_analytics_helpers.py](../../../../sources/blockscout__mcp-server/tests/test_analytics_helpers.py)<br>[tests/test_analytics_source.py](../../../../sources/blockscout__mcp-server/tests/test_analytics_source.py)<br>[tests/test_analytics.py](../../../../sources/blockscout__mcp-server/tests/test_analytics.py)<br>[tests/test_bundled_skill_artifacts.py](../../../../sources/blockscout__mcp-server/tests/test_bundled_skill_artifacts.py) |
| CI workflow | 5 | [.github/workflows/ci-lint.yml](../../../../sources/blockscout__mcp-server/.github/workflows/ci-lint.yml)<br>[.github/workflows/ci.yml](../../../../sources/blockscout__mcp-server/.github/workflows/ci.yml)<br>[.github/workflows/integration-tests.yml](../../../../sources/blockscout__mcp-server/.github/workflows/integration-tests.yml)<br>[.github/workflows/main.yml](../../../../sources/blockscout__mcp-server/.github/workflows/main.yml)<br>[.github/workflows/mcp-registry.yml](../../../../sources/blockscout__mcp-server/.github/workflows/mcp-registry.yml) |
| 컨테이너/배포 | 2 | [Dockerfile](../../../../sources/blockscout__mcp-server/Dockerfile)<br>[tests/evals/docker-compose.yml](../../../../sources/blockscout__mcp-server/tests/evals/docker-compose.yml) |
| 보안/정책 | 1 | [tests/tools/test_common_blockscout_request_auth.py](../../../../sources/blockscout__mcp-server/tests/tools/test_common_blockscout_request_auth.py) |
| 에이전트 지시문 | 26 | [AGENTS.md](../../../../sources/blockscout__mcp-server/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/blockscout__mcp-server/.github/copilot-instructions.md)<br>[.gemini/GEMINI.md](../../../../sources/blockscout__mcp-server/.gemini/GEMINI.md)<br>[.cursor/AGENTS.md](../../../../sources/blockscout__mcp-server/.cursor/AGENTS.md)<br>[.cursor/rules/000-role-and-task.mdc](../../../../sources/blockscout__mcp-server/.cursor/rules/000-role-and-task.mdc)<br>[.cursor/rules/010-implementation-rules.mdc](../../../../sources/blockscout__mcp-server/.cursor/rules/010-implementation-rules.mdc) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `MCP-REGISTRY-README.md`, `blockscout_mcp_server/__init__.py`, `blockscout_mcp_server/__main__.py`.
2. entrypoint를 따라 실행 흐름 확인: `server.json`, `blockscout_mcp_server/__main__.py`, `blockscout_mcp_server/server.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tests/tools/test_chain_resolution.py`, `tests/tools/test_chain_support.py`.
4. retrieval/memory/indexing 확인: `blockscout_mcp_server/templates/index.html`.
5. test/eval 파일로 동작 검증: `SPEC.md`, `tests/conftest.py`, `tests/test_analytics_helpers.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Wraps Blockscout APIs and exposes blockchain data by Model Context Protocol. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, README.md, AGENTS.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
