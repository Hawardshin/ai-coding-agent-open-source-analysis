# wanxingai/LightAgent 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

LightAgent: Lightweight AI agent framework with memory, mcp & skill. Supports multi-agent collaboration, self-learning, and major LLMs (OpenAI/DeepSeek/Qwen). Open-source with MCP/SSE protocol integration.

## 요약

- 조사 단위: `sources/wanxingai__LightAgent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 165 files, 32 directories, depth score 100, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp_release.md, mcp_release.zh-CN.md, mcp/lightagent_mcp_settings.json이고, 의존성 단서는 openai, mcp, express, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | wanxingai/LightAgent |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 1146 |
| Forks | 147 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/wanxingai__LightAgent](../../../../sources/wanxingai__LightAgent) |
| 기존 보고서 | [reports/global-trending/repositories/wanxingai__LightAgent.md](../../../global-trending/repositories/wanxingai__LightAgent.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 165 / 32 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .github, docs, example, LightAgent, mcp, skills, tests |
| 상위 확장자 | .py: 63, .md: 44, .xsd: 39, .txt: 5, .yml: 4, .png: 3, (none): 3, .jpg: 1, .json: 1, .lock: 1, .toml: 1 |
| 소스 패턴 | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 25 |
| tests | validation surface | 12 |
| .github | ci surface | 1 |
| example | top-level component | 1 |
| LightAgent | top-level component | 1 |
| mcp | top-level component | 1 |
| skills | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | express |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [mcp_release.md](../../../../sources/wanxingai__LightAgent/mcp_release.md) | mcp signal |
| mcp | [mcp_release.zh-CN.md](../../../../sources/wanxingai__LightAgent/mcp_release.zh-CN.md) | mcp signal |
| mcp | [mcp/lightagent_mcp_settings.json](../../../../sources/wanxingai__LightAgent/mcp/lightagent_mcp_settings.json) | mcp signal |
| mcp | [mcp/mcpServers/mcpServer_demo_stdio.py](../../../../sources/wanxingai__LightAgent/mcp/mcpServers/mcpServer_demo_stdio.py) | mcp signal |
| agentRuntime | [skills/xlsx/LICENSE.txt](../../../../sources/wanxingai__LightAgent/skills/xlsx/LICENSE.txt) | agentRuntime signal |
| agentRuntime | [skills/xlsx/SKILL.md](../../../../sources/wanxingai__LightAgent/skills/xlsx/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/xlsx/scripts/recalc.py](../../../../sources/wanxingai__LightAgent/skills/xlsx/scripts/recalc.py) | agentRuntime signal |
| agentRuntime | [skills/xlsx/scripts/office/pack.py](../../../../sources/wanxingai__LightAgent/skills/xlsx/scripts/office/pack.py) | agentRuntime signal |
| config | [poetry.lock](../../../../sources/wanxingai__LightAgent/poetry.lock) | config signal |
| config | [pyproject.toml](../../../../sources/wanxingai__LightAgent/pyproject.toml) | config signal |
| config | [requirements.txt](../../../../sources/wanxingai__LightAgent/requirements.txt) | config signal |
| config | [skills/gupiaozhushou/requirements.txt](../../../../sources/wanxingai__LightAgent/skills/gupiaozhushou/requirements.txt) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 88 | [skills/xlsx/LICENSE.txt](../../../../sources/wanxingai__LightAgent/skills/xlsx/LICENSE.txt)<br>[skills/xlsx/SKILL.md](../../../../sources/wanxingai__LightAgent/skills/xlsx/SKILL.md)<br>[skills/xlsx/scripts/recalc.py](../../../../sources/wanxingai__LightAgent/skills/xlsx/scripts/recalc.py)<br>[skills/xlsx/scripts/office/pack.py](../../../../sources/wanxingai__LightAgent/skills/xlsx/scripts/office/pack.py)<br>[skills/xlsx/scripts/office/soffice.py](../../../../sources/wanxingai__LightAgent/skills/xlsx/scripts/office/soffice.py)<br>[skills/xlsx/scripts/office/unpack.py](../../../../sources/wanxingai__LightAgent/skills/xlsx/scripts/office/unpack.py)<br>[skills/xlsx/scripts/office/validate.py](../../../../sources/wanxingai__LightAgent/skills/xlsx/scripts/office/validate.py)<br>[skills/xlsx/scripts/office/validators/__init__.py](../../../../sources/wanxingai__LightAgent/skills/xlsx/scripts/office/validators/__init__.py) |
| mcp | 8 | [mcp_release.md](../../../../sources/wanxingai__LightAgent/mcp_release.md)<br>[mcp_release.zh-CN.md](../../../../sources/wanxingai__LightAgent/mcp_release.zh-CN.md)<br>[mcp/lightagent_mcp_settings.json](../../../../sources/wanxingai__LightAgent/mcp/lightagent_mcp_settings.json)<br>[mcp/mcpServers/mcpServer_demo_stdio.py](../../../../sources/wanxingai__LightAgent/mcp/mcpServers/mcpServer_demo_stdio.py)<br>[mcp/mcpServers/mcpServer_weather_sse.py](../../../../sources/wanxingai__LightAgent/mcp/mcpServers/mcpServer_weather_sse.py)<br>[mcp/mcpServers/weather.py](../../../../sources/wanxingai__LightAgent/mcp/mcpServers/weather.py)<br>[LightAgent/mcp_client_manager.py](../../../../sources/wanxingai__LightAgent/LightAgent/mcp_client_manager.py)<br>[example/07.use_mcp.py](../../../../sources/wanxingai__LightAgent/example/07.use_mcp.py) |
| retrieval | 8 | [tests/test_memory_policy.py](../../../../sources/wanxingai__LightAgent/tests/test_memory_policy.py)<br>[tests/test_vector_memory_adapter_example.py](../../../../sources/wanxingai__LightAgent/tests/test_vector_memory_adapter_example.py)<br>[example/03.memory_mem0.py](../../../../sources/wanxingai__LightAgent/example/03.memory_mem0.py)<br>[example/11.vector_memory_adapter.py](../../../../sources/wanxingai__LightAgent/example/11.vector_memory_adapter.py)<br>[docs/memory_admission.md](../../../../sources/wanxingai__LightAgent/docs/memory_admission.md)<br>[docs/memory_security.md](../../../../sources/wanxingai__LightAgent/docs/memory_security.md)<br>[docs/memory_trace_swarm_boundaries.md](../../../../sources/wanxingai__LightAgent/docs/memory_trace_swarm_boundaries.md)<br>[docs/vector_memory_adapter.md](../../../../sources/wanxingai__LightAgent/docs/vector_memory_adapter.md) |
| spec | 6 | [requirements.txt](../../../../sources/wanxingai__LightAgent/requirements.txt)<br>[roadmap.md](../../../../sources/wanxingai__LightAgent/roadmap.md)<br>[skills/gupiaozhushou/requirements.txt](../../../../sources/wanxingai__LightAgent/skills/gupiaozhushou/requirements.txt)<br>[skills/frontend-design/LICENSE.txt](../../../../sources/wanxingai__LightAgent/skills/frontend-design/LICENSE.txt)<br>[skills/frontend-design/SKILL.md](../../../../sources/wanxingai__LightAgent/skills/frontend-design/SKILL.md)<br>[skills/front-tech-map/references/visual_spec.md](../../../../sources/wanxingai__LightAgent/skills/front-tech-map/references/visual_spec.md) |
| eval | 12 | [tests/test_guardrails.py](../../../../sources/wanxingai__LightAgent/tests/test_guardrails.py)<br>[tests/test_lightflow.py](../../../../sources/wanxingai__LightAgent/tests/test_lightflow.py)<br>[tests/test_litellm_client.py](../../../../sources/wanxingai__LightAgent/tests/test_litellm_client.py)<br>[tests/test_memory_policy.py](../../../../sources/wanxingai__LightAgent/tests/test_memory_policy.py)<br>[tests/test_skill_manager_logging.py](../../../../sources/wanxingai__LightAgent/tests/test_skill_manager_logging.py)<br>[tests/test_v065_core.py](../../../../sources/wanxingai__LightAgent/tests/test_v065_core.py)<br>[tests/test_v070_tracing.py](../../../../sources/wanxingai__LightAgent/tests/test_v070_tracing.py)<br>[tests/test_vector_memory_adapter_example.py](../../../../sources/wanxingai__LightAgent/tests/test_vector_memory_adapter_example.py) |
| security | 3 | [SECURITY.md](../../../../sources/wanxingai__LightAgent/SECURITY.md)<br>[tests/test_memory_policy.py](../../../../sources/wanxingai__LightAgent/tests/test_memory_policy.py)<br>[docs/memory_security.md](../../../../sources/wanxingai__LightAgent/docs/memory_security.md) |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/wanxingai__LightAgent/.github/workflows/ci.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 28 | [README.de.md](../../../../sources/wanxingai__LightAgent/README.de.md)<br>[README.es.md](../../../../sources/wanxingai__LightAgent/README.es.md)<br>[README.fr.md](../../../../sources/wanxingai__LightAgent/README.fr.md)<br>[README.ja.md](../../../../sources/wanxingai__LightAgent/README.ja.md)<br>[README.ko.md](../../../../sources/wanxingai__LightAgent/README.ko.md)<br>[README.md](../../../../sources/wanxingai__LightAgent/README.md)<br>[README.pt.md](../../../../sources/wanxingai__LightAgent/README.pt.md)<br>[README.ru.md](../../../../sources/wanxingai__LightAgent/README.ru.md) |
| config | 4 | [poetry.lock](../../../../sources/wanxingai__LightAgent/poetry.lock)<br>[pyproject.toml](../../../../sources/wanxingai__LightAgent/pyproject.toml)<br>[requirements.txt](../../../../sources/wanxingai__LightAgent/requirements.txt)<br>[skills/gupiaozhushou/requirements.txt](../../../../sources/wanxingai__LightAgent/skills/gupiaozhushou/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 12 | [tests/test_guardrails.py](../../../../sources/wanxingai__LightAgent/tests/test_guardrails.py)<br>[tests/test_lightflow.py](../../../../sources/wanxingai__LightAgent/tests/test_lightflow.py)<br>[tests/test_litellm_client.py](../../../../sources/wanxingai__LightAgent/tests/test_litellm_client.py)<br>[tests/test_memory_policy.py](../../../../sources/wanxingai__LightAgent/tests/test_memory_policy.py)<br>[tests/test_skill_manager_logging.py](../../../../sources/wanxingai__LightAgent/tests/test_skill_manager_logging.py)<br>[tests/test_v065_core.py](../../../../sources/wanxingai__LightAgent/tests/test_v065_core.py) |
| CI workflow | 1 | [.github/workflows/ci.yml](../../../../sources/wanxingai__LightAgent/.github/workflows/ci.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 3 | [SECURITY.md](../../../../sources/wanxingai__LightAgent/SECURITY.md)<br>[tests/test_memory_policy.py](../../../../sources/wanxingai__LightAgent/tests/test_memory_policy.py)<br>[docs/memory_security.md](../../../../sources/wanxingai__LightAgent/docs/memory_security.md) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `mcp_release.md`, `mcp_release.zh-CN.md`, `mcp/lightagent_mcp_settings.json`.
2. agent/tool runtime 매핑: `skills/xlsx/LICENSE.txt`, `skills/xlsx/SKILL.md`, `skills/xlsx/scripts/recalc.py`.
3. retrieval/memory/indexing 확인: `tests/test_memory_policy.py`, `tests/test_vector_memory_adapter_example.py`, `example/03.memory_mem0.py`.
4. test/eval 파일로 동작 검증: `tests/test_guardrails.py`, `tests/test_lightflow.py`, `tests/test_litellm_client.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 LightAgent Lightweight AI agent framework with memory, mcp & skill. Supports multi agent collaboration, self learning, a. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, README.md, LICENSE, openai이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
