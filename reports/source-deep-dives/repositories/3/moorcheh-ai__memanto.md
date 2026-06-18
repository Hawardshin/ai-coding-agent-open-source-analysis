# moorcheh-ai/memanto 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Memory that AI Agents Love!

## 요약

- 조사 단위: `sources/moorcheh-ai__memanto` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 245 files, 59 directories, depth score 120, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/test_memory_parsing.py, memanto/cli/commands/memory_mgmt.py, memanto/cli/commands/memory.py이고, 의존성 단서는 fastapi, pydantic, typer, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | moorcheh-ai/memanto |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Python |
| Stars | 946 |
| Forks | 313 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/moorcheh-ai__memanto](../../../../sources/moorcheh-ai__memanto) |
| 기존 보고서 | [reports/global-trending/repositories/moorcheh-ai__memanto.md](../../../global-trending/repositories/moorcheh-ai__memanto.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 245 / 59 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, assets, docs, examples, integrations, memanto, tests |
| 상위 확장자 | .py: 168, .md: 32, (none): 9, .example: 6, .toml: 6, .png: 5, .txt: 4, .yml: 4, .gif: 2, .json: 2, .svg: 2, .yaml: 2 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| examples/langgraph-memanto | examples workspace | 18 |
| examples/claudecode-skills-memanto | examples workspace | 17 |
| docs | documentation surface | 15 |
| tests | validation surface | 15 |
| examples/crewai-memory | examples workspace | 14 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| examples | top-level component | 1 |
| integrations | top-level component | 1 |
| memanto | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | memanto | memanto |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | fastapi |
| developerSurface | typer |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [tests/test_memory_parsing.py](../../../../sources/moorcheh-ai__memanto/tests/test_memory_parsing.py) | retrieval signal |
| retrieval | [memanto/cli/commands/memory_mgmt.py](../../../../sources/moorcheh-ai__memanto/memanto/cli/commands/memory_mgmt.py) | retrieval signal |
| retrieval | [memanto/cli/commands/memory.py](../../../../sources/moorcheh-ai__memanto/memanto/cli/commands/memory.py) | retrieval signal |
| retrieval | [memanto/app/ui/static/index.html](../../../../sources/moorcheh-ai__memanto/memanto/app/ui/static/index.html) | retrieval signal |
| entrypoints | [memanto/__main__.py](../../../../sources/moorcheh-ai__memanto/memanto/__main__.py) | entrypoints signal |
| entrypoints | [memanto/cli/main.py](../../../../sources/moorcheh-ai__memanto/memanto/cli/main.py) | entrypoints signal |
| entrypoints | [memanto/app/main.py](../../../../sources/moorcheh-ai__memanto/memanto/app/main.py) | entrypoints signal |
| entrypoints | [integrations/mcp/memanto_mcp/__main__.py](../../../../sources/moorcheh-ai__memanto/integrations/mcp/memanto_mcp/__main__.py) | entrypoints signal |
| docs | [README.md](../../../../sources/moorcheh-ai__memanto/README.md) | docs signal |
| docs | [integrations/mcp/README.md](../../../../sources/moorcheh-ai__memanto/integrations/mcp/README.md) | docs signal |
| docs | [integrations/langgraph/README.md](../../../../sources/moorcheh-ai__memanto/integrations/langgraph/README.md) | docs signal |
| docs | [integrations/hermes-agents/README.md](../../../../sources/moorcheh-ai__memanto/integrations/hermes-agents/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 6 | [memanto/__main__.py](../../../../sources/moorcheh-ai__memanto/memanto/__main__.py)<br>[memanto/cli/main.py](../../../../sources/moorcheh-ai__memanto/memanto/cli/main.py)<br>[memanto/app/main.py](../../../../sources/moorcheh-ai__memanto/memanto/app/main.py)<br>[integrations/mcp/memanto_mcp/__main__.py](../../../../sources/moorcheh-ai__memanto/integrations/mcp/memanto_mcp/__main__.py)<br>[integrations/mcp/memanto_mcp/server.py](../../../../sources/moorcheh-ai__memanto/integrations/mcp/memanto_mcp/server.py)<br>[examples/langgraph-memanto/cross_session_recall/main.py](../../../../sources/moorcheh-ai__memanto/examples/langgraph-memanto/cross_session_recall/main.py) |
| agentRuntime | 31 | [memanto/cli/migrate/runner.py](../../../../sources/moorcheh-ai__memanto/memanto/cli/migrate/runner.py)<br>[memanto/cli/connect/agent_registry.py](../../../../sources/moorcheh-ai__memanto/memanto/cli/connect/agent_registry.py)<br>[memanto/cli/commands/agent.py](../../../../sources/moorcheh-ai__memanto/memanto/cli/commands/agent.py)<br>[memanto/cli/commands/memory_mgmt.py](../../../../sources/moorcheh-ai__memanto/memanto/cli/commands/memory_mgmt.py)<br>[memanto/cli/commands/memory.py](../../../../sources/moorcheh-ai__memanto/memanto/cli/commands/memory.py)<br>[memanto/app/services/agent_service.py](../../../../sources/moorcheh-ai__memanto/memanto/app/services/agent_service.py)<br>[memanto/app/services/memory_export_service.py](../../../../sources/moorcheh-ai__memanto/memanto/app/services/memory_export_service.py)<br>[memanto/app/services/memory_parsing_service.py](../../../../sources/moorcheh-ai__memanto/memanto/app/services/memory_parsing_service.py) |
| mcp | 15 | [integrations/mcp/.env.example](../../../../sources/moorcheh-ai__memanto/integrations/mcp/.env.example)<br>[integrations/mcp/LICENSE](../../../../sources/moorcheh-ai__memanto/integrations/mcp/LICENSE)<br>[integrations/mcp/pyproject.toml](../../../../sources/moorcheh-ai__memanto/integrations/mcp/pyproject.toml)<br>[integrations/mcp/README.md](../../../../sources/moorcheh-ai__memanto/integrations/mcp/README.md)<br>[integrations/mcp/tests/__init__.py](../../../../sources/moorcheh-ai__memanto/integrations/mcp/tests/__init__.py)<br>[integrations/mcp/tests/conftest.py](../../../../sources/moorcheh-ai__memanto/integrations/mcp/tests/conftest.py)<br>[integrations/mcp/tests/test_cli.py](../../../../sources/moorcheh-ai__memanto/integrations/mcp/tests/test_cli.py)<br>[integrations/mcp/tests/test_config.py](../../../../sources/moorcheh-ai__memanto/integrations/mcp/tests/test_config.py) |
| retrieval | 36 | [tests/test_memory_parsing.py](../../../../sources/moorcheh-ai__memanto/tests/test_memory_parsing.py)<br>[memanto/cli/commands/memory_mgmt.py](../../../../sources/moorcheh-ai__memanto/memanto/cli/commands/memory_mgmt.py)<br>[memanto/cli/commands/memory.py](../../../../sources/moorcheh-ai__memanto/memanto/cli/commands/memory.py)<br>[memanto/app/ui/static/index.html](../../../../sources/moorcheh-ai__memanto/memanto/app/ui/static/index.html)<br>[memanto/app/services/memory_export_service.py](../../../../sources/moorcheh-ai__memanto/memanto/app/services/memory_export_service.py)<br>[memanto/app/services/memory_parsing_service.py](../../../../sources/moorcheh-ai__memanto/memanto/app/services/memory_parsing_service.py)<br>[memanto/app/services/memory_read_service.py](../../../../sources/moorcheh-ai__memanto/memanto/app/services/memory_read_service.py)<br>[memanto/app/services/memory_write_service.py](../../../../sources/moorcheh-ai__memanto/memanto/app/services/memory_write_service.py) |
| spec | 9 | [tests/requirements.txt](../../../../sources/moorcheh-ai__memanto/tests/requirements.txt)<br>[examples/langgraph-memanto/requirements.txt](../../../../sources/moorcheh-ai__memanto/examples/langgraph-memanto/requirements.txt)<br>[examples/langgraph-memanto/memanto_base_store/langgraph-architecture-diagram.png](../../../../sources/moorcheh-ai__memanto/examples/langgraph-memanto/memanto_base_store/langgraph-architecture-diagram.png)<br>[examples/crewai-memory/requirements.txt](../../../../sources/moorcheh-ai__memanto/examples/crewai-memory/requirements.txt)<br>[examples/claudecode-skills-memanto/requirements.txt](../../../../sources/moorcheh-ai__memanto/examples/claudecode-skills-memanto/requirements.txt)<br>[docs/SESSION_ARCHITECTURE.md](../../../../sources/moorcheh-ai__memanto/docs/SESSION_ARCHITECTURE.md)<br>[assets/Architecture-diagram.png](../../../../sources/moorcheh-ai__memanto/assets/Architecture-diagram.png)<br>[assets/crewai-architecture.png](../../../../sources/moorcheh-ai__memanto/assets/crewai-architecture.png) |
| eval | 23 | [tests/__init__.py](../../../../sources/moorcheh-ai__memanto/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/moorcheh-ai__memanto/tests/conftest.py)<br>[tests/requirements.txt](../../../../sources/moorcheh-ai__memanto/tests/requirements.txt)<br>[tests/test_analyze.py](../../../../sources/moorcheh-ai__memanto/tests/test_analyze.py)<br>[tests/test_api.py](../../../../sources/moorcheh-ai__memanto/tests/test_api.py)<br>[tests/test_backend.py](../../../../sources/moorcheh-ai__memanto/tests/test_backend.py)<br>[tests/test_batch_memories.json](../../../../sources/moorcheh-ai__memanto/tests/test_batch_memories.json)<br>[tests/test_cli.py](../../../../sources/moorcheh-ai__memanto/tests/test_cli.py) |
| security | 3 | [SECURITY.md](../../../../sources/moorcheh-ai__memanto/SECURITY.md)<br>[memanto/app/utils/auth.py](../../../../sources/moorcheh-ai__memanto/memanto/app/utils/auth.py)<br>[memanto/app/routes/auth_deps.py](../../../../sources/moorcheh-ai__memanto/memanto/app/routes/auth_deps.py) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/moorcheh-ai__memanto/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/moorcheh-ai__memanto/.github/workflows/publish.yml)<br>[.github/workflows/release-integration.yml](../../../../sources/moorcheh-ai__memanto/.github/workflows/release-integration.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/moorcheh-ai__memanto/docker-compose.yml)<br>[Dockerfile](../../../../sources/moorcheh-ai__memanto/Dockerfile) |
| instruction | 1 | [examples/claudecode-skills-memanto/CLAUDE.md](../../../../sources/moorcheh-ai__memanto/examples/claudecode-skills-memanto/CLAUDE.md) |
| docs | 19 | [README.md](../../../../sources/moorcheh-ai__memanto/README.md)<br>[integrations/mcp/README.md](../../../../sources/moorcheh-ai__memanto/integrations/mcp/README.md)<br>[integrations/langgraph/README.md](../../../../sources/moorcheh-ai__memanto/integrations/langgraph/README.md)<br>[integrations/hermes-agents/README.md](../../../../sources/moorcheh-ai__memanto/integrations/hermes-agents/README.md)<br>[integrations/crewai/README.md](../../../../sources/moorcheh-ai__memanto/integrations/crewai/README.md)<br>[examples/langgraph-memanto/README.md](../../../../sources/moorcheh-ai__memanto/examples/langgraph-memanto/README.md)<br>[examples/langgraph-memanto/memanto_base_store/README.md](../../../../sources/moorcheh-ai__memanto/examples/langgraph-memanto/memanto_base_store/README.md)<br>[examples/crewai-memory/README.md](../../../../sources/moorcheh-ai__memanto/examples/crewai-memory/README.md) |
| config | 10 | [pyproject.toml](../../../../sources/moorcheh-ai__memanto/pyproject.toml)<br>[tests/requirements.txt](../../../../sources/moorcheh-ai__memanto/tests/requirements.txt)<br>[integrations/mcp/pyproject.toml](../../../../sources/moorcheh-ai__memanto/integrations/mcp/pyproject.toml)<br>[integrations/langgraph/pyproject.toml](../../../../sources/moorcheh-ai__memanto/integrations/langgraph/pyproject.toml)<br>[integrations/hermes-agents/pyproject.toml](../../../../sources/moorcheh-ai__memanto/integrations/hermes-agents/pyproject.toml)<br>[integrations/crewai/pyproject.toml](../../../../sources/moorcheh-ai__memanto/integrations/crewai/pyproject.toml)<br>[examples/langgraph-memanto/requirements.txt](../../../../sources/moorcheh-ai__memanto/examples/langgraph-memanto/requirements.txt)<br>[examples/crewai-memory/requirements.txt](../../../../sources/moorcheh-ai__memanto/examples/crewai-memory/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 23 | [tests/__init__.py](../../../../sources/moorcheh-ai__memanto/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/moorcheh-ai__memanto/tests/conftest.py)<br>[tests/requirements.txt](../../../../sources/moorcheh-ai__memanto/tests/requirements.txt)<br>[tests/test_analyze.py](../../../../sources/moorcheh-ai__memanto/tests/test_analyze.py)<br>[tests/test_api.py](../../../../sources/moorcheh-ai__memanto/tests/test_api.py)<br>[tests/test_backend.py](../../../../sources/moorcheh-ai__memanto/tests/test_backend.py) |
| CI workflow | 3 | [.github/workflows/ci.yml](../../../../sources/moorcheh-ai__memanto/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/moorcheh-ai__memanto/.github/workflows/publish.yml)<br>[.github/workflows/release-integration.yml](../../../../sources/moorcheh-ai__memanto/.github/workflows/release-integration.yml) |
| 컨테이너/배포 | 2 | [docker-compose.yml](../../../../sources/moorcheh-ai__memanto/docker-compose.yml)<br>[Dockerfile](../../../../sources/moorcheh-ai__memanto/Dockerfile) |
| 보안/정책 | 3 | [SECURITY.md](../../../../sources/moorcheh-ai__memanto/SECURITY.md)<br>[memanto/app/utils/auth.py](../../../../sources/moorcheh-ai__memanto/memanto/app/utils/auth.py)<br>[memanto/app/routes/auth_deps.py](../../../../sources/moorcheh-ai__memanto/memanto/app/routes/auth_deps.py) |
| 에이전트 지시문 | 1 | [examples/claudecode-skills-memanto/CLAUDE.md](../../../../sources/moorcheh-ai__memanto/examples/claudecode-skills-memanto/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/test_memory_parsing.py`, `memanto/cli/commands/memory_mgmt.py`, `memanto/cli/commands/memory.py`.
2. entrypoint를 따라 실행 흐름 확인: `memanto/__main__.py`, `memanto/cli/main.py`, `memanto/app/main.py`.
3. agent/tool runtime 매핑: `memanto/cli/migrate/runner.py`, `memanto/cli/connect/agent_registry.py`, `memanto/cli/commands/agent.py`.
4. retrieval/memory/indexing 확인: `tests/test_memory_parsing.py`, `memanto/cli/commands/memory_mgmt.py`, `memanto/cli/commands/memory.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/conftest.py`, `tests/requirements.txt`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Memory that AI Agents Love!. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, README.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
