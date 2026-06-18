# bits-bytes-nn/omnisummary 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Proactive daily AI/ML digest — multi-source collection, LLM ranking, and a Korean editorial digest to Slack. Powered by Amazon Bedrock (Claude) on AWS.

## 요약

- 조사 단위: `sources/bits-bytes-nn__omnisummary` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 116 files, 17 directories, depth score 102, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=shared/memory.py, agent_runtime/__init__.py, agent_runtime/app.py이고, 의존성 단서는 openai, langchain, fastapi, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | bits-bytes-nn/omnisummary |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/bits-bytes-nn__omnisummary](../../../../sources/bits-bytes-nn__omnisummary) |
| 기존 보고서 | [reports/korea-trending/repositories/bits-bytes-nn__omnisummary.md](../../../korea-trending/repositories/bits-bytes-nn__omnisummary.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 116 / 17 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | .github, agent, agent_runtime, cloudflare-proxy, collectors, config, docs, infrastructure, lambda_handlers, output, pipeline, scripts, shared, tests |
| 상위 확장자 | .py: 96, .md: 3, (none): 3, .png: 2, .toml: 2, .agentcore: 1, .drawio: 1, .excalidraw: 1, .js: 1, .lock: 1, .mjs: 1, .sh: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 42 |
| docs | documentation surface | 8 |
| .github | ci surface | 1 |
| agent | top-level component | 1 |
| agent_runtime | top-level component | 1 |
| cloudflare-proxy | top-level component | 1 |
| collectors | top-level component | 1 |
| config | top-level component | 1 |
| infrastructure | top-level component | 1 |
| lambda_handlers | top-level component | 1 |
| output | top-level component | 1 |
| pipeline | top-level component | 1 |
| scripts | top-level component | 1 |
| shared | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | 없음 |
| agentFrameworks | langchain |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| agentRuntime | [shared/memory.py](../../../../sources/bits-bytes-nn__omnisummary/shared/memory.py) | agentRuntime signal |
| agentRuntime | [agent_runtime/__init__.py](../../../../sources/bits-bytes-nn__omnisummary/agent_runtime/__init__.py) | agentRuntime signal |
| agentRuntime | [agent_runtime/app.py](../../../../sources/bits-bytes-nn__omnisummary/agent_runtime/app.py) | agentRuntime signal |
| agentRuntime | [agent/__init__.py](../../../../sources/bits-bytes-nn__omnisummary/agent/__init__.py) | agentRuntime signal |
| entrypoints | [__main__.py](../../../../sources/bits-bytes-nn__omnisummary/__main__.py) | entrypoints signal |
| entrypoints | [main.py](../../../../sources/bits-bytes-nn__omnisummary/main.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/bits-bytes-nn__omnisummary/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/bits-bytes-nn__omnisummary/uv.lock) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/bits-bytes-nn__omnisummary/.github/workflows/ci.yml) | ci support |
| container | [Dockerfile](../../../../sources/bits-bytes-nn__omnisummary/Dockerfile) | container support |
| container | [Dockerfile.agentcore](../../../../sources/bits-bytes-nn__omnisummary/Dockerfile.agentcore) | container support |
| eval | [tests/__init__.py](../../../../sources/bits-bytes-nn__omnisummary/tests/__init__.py) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [__main__.py](../../../../sources/bits-bytes-nn__omnisummary/__main__.py)<br>[main.py](../../../../sources/bits-bytes-nn__omnisummary/main.py) |
| agentRuntime | 8 | [shared/memory.py](../../../../sources/bits-bytes-nn__omnisummary/shared/memory.py)<br>[agent_runtime/__init__.py](../../../../sources/bits-bytes-nn__omnisummary/agent_runtime/__init__.py)<br>[agent_runtime/app.py](../../../../sources/bits-bytes-nn__omnisummary/agent_runtime/app.py)<br>[agent/__init__.py](../../../../sources/bits-bytes-nn__omnisummary/agent/__init__.py)<br>[agent/agent_tools.py](../../../../sources/bits-bytes-nn__omnisummary/agent/agent_tools.py)<br>[agent/agent.py](../../../../sources/bits-bytes-nn__omnisummary/agent/agent.py)<br>[agent/tool_state.py](../../../../sources/bits-bytes-nn__omnisummary/agent/tool_state.py)<br>[agent/visuals.py](../../../../sources/bits-bytes-nn__omnisummary/agent/visuals.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 2 | [tests/test_memory_store.py](../../../../sources/bits-bytes-nn__omnisummary/tests/test_memory_store.py)<br>[shared/memory.py](../../../../sources/bits-bytes-nn__omnisummary/shared/memory.py) |
| spec | 2 | [docs/diagrams/architecture.drawio](../../../../sources/bits-bytes-nn__omnisummary/docs/diagrams/architecture.drawio)<br>[docs/diagrams/architecture.png](../../../../sources/bits-bytes-nn__omnisummary/docs/diagrams/architecture.png) |
| eval | 40 | [tests/__init__.py](../../../../sources/bits-bytes-nn__omnisummary/tests/__init__.py)<br>[tests/test_agent_cache.py](../../../../sources/bits-bytes-nn__omnisummary/tests/test_agent_cache.py)<br>[tests/test_agent_tools.py](../../../../sources/bits-bytes-nn__omnisummary/tests/test_agent_tools.py)<br>[tests/test_agentcore_app.py](../../../../sources/bits-bytes-nn__omnisummary/tests/test_agentcore_app.py)<br>[tests/test_aggregator.py](../../../../sources/bits-bytes-nn__omnisummary/tests/test_aggregator.py)<br>[tests/test_base_collector.py](../../../../sources/bits-bytes-nn__omnisummary/tests/test_base_collector.py)<br>[tests/test_collectors_health.py](../../../../sources/bits-bytes-nn__omnisummary/tests/test_collectors_health.py)<br>[tests/test_config_validation.py](../../../../sources/bits-bytes-nn__omnisummary/tests/test_config_validation.py) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/bits-bytes-nn__omnisummary/.github/workflows/ci.yml) |
| container | 2 | [Dockerfile](../../../../sources/bits-bytes-nn__omnisummary/Dockerfile)<br>[Dockerfile.agentcore](../../../../sources/bits-bytes-nn__omnisummary/Dockerfile.agentcore) |
| instruction | 0 | 명확하지 않음 |
| docs | 7 | [README.ko.md](../../../../sources/bits-bytes-nn__omnisummary/README.ko.md)<br>[README.md](../../../../sources/bits-bytes-nn__omnisummary/README.md)<br>[docs/tech-doc.md](../../../../sources/bits-bytes-nn__omnisummary/docs/tech-doc.md)<br>[docs/diagrams/architecture.drawio](../../../../sources/bits-bytes-nn__omnisummary/docs/diagrams/architecture.drawio)<br>[docs/diagrams/architecture.png](../../../../sources/bits-bytes-nn__omnisummary/docs/diagrams/architecture.png)<br>[docs/diagrams/concept-pipeline.excalidraw](../../../../sources/bits-bytes-nn__omnisummary/docs/diagrams/concept-pipeline.excalidraw)<br>[docs/diagrams/concept-pipeline.png](../../../../sources/bits-bytes-nn__omnisummary/docs/diagrams/concept-pipeline.png) |
| config | 2 | [pyproject.toml](../../../../sources/bits-bytes-nn__omnisummary/pyproject.toml)<br>[uv.lock](../../../../sources/bits-bytes-nn__omnisummary/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 40 | [tests/__init__.py](../../../../sources/bits-bytes-nn__omnisummary/tests/__init__.py)<br>[tests/test_agent_cache.py](../../../../sources/bits-bytes-nn__omnisummary/tests/test_agent_cache.py)<br>[tests/test_agent_tools.py](../../../../sources/bits-bytes-nn__omnisummary/tests/test_agent_tools.py)<br>[tests/test_agentcore_app.py](../../../../sources/bits-bytes-nn__omnisummary/tests/test_agentcore_app.py)<br>[tests/test_aggregator.py](../../../../sources/bits-bytes-nn__omnisummary/tests/test_aggregator.py)<br>[tests/test_base_collector.py](../../../../sources/bits-bytes-nn__omnisummary/tests/test_base_collector.py) |
| CI workflow | 1 | [.github/workflows/ci.yml](../../../../sources/bits-bytes-nn__omnisummary/.github/workflows/ci.yml) |
| 컨테이너/배포 | 2 | [Dockerfile](../../../../sources/bits-bytes-nn__omnisummary/Dockerfile)<br>[Dockerfile.agentcore](../../../../sources/bits-bytes-nn__omnisummary/Dockerfile.agentcore) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `shared/memory.py`, `agent_runtime/__init__.py`, `agent_runtime/app.py`.
2. entrypoint를 따라 실행 흐름 확인: `__main__.py`, `main.py`.
3. agent/tool runtime 매핑: `shared/memory.py`, `agent_runtime/__init__.py`, `agent_runtime/app.py`.
4. retrieval/memory/indexing 확인: `tests/test_memory_store.py`, `shared/memory.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/test_agent_cache.py`, `tests/test_agent_tools.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Proactive daily AI/ML digest — multi source collection, LLM ranking, and a Korean editorial digest to Slack. Powered by . 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, README.md, LICENSE, openai이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
