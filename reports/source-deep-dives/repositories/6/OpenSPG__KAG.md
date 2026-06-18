# OpenSPG/KAG 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

KAG is a logical form-guided reasoning and retrieval framework based on OpenSPG engine and LLMs. It is used to build logical reasoning and factual Q&A solutions for professional domain knowledge bases. It can effectively overcome the shortcomings of the traditional RAG vector similarity calculation model.

## 요약

- 조사 단위: `sources/OpenSPG__KAG` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,211 files, 263 directories, depth score 108, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/unit/builder/component/test_external_graph.py, knext/search/rest/models/vector_search_request.py, knext/schema/rest/models/type/index_type.py이고, 의존성 단서는 openai, mcp, pydantic, click, ollama, llama, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | OpenSPG/KAG |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 8834 |
| Forks | 688 |
| License | Apache-2.0 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/OpenSPG__KAG](../../../../sources/OpenSPG__KAG) |
| 기존 보고서 | [reports/llm-wiki/repositories/OpenSPG__KAG.md](../../../llm-wiki/repositories/OpenSPG__KAG.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1211 / 263 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | _static, .github, docs, kag, knext, tests |
| 상위 확장자 | .py: 736, .md: 251, .yaml: 47, .csv: 44, .json: 32, .png: 17, (none): 16, .schema: 13, .txt: 12, .gif: 5, .yml: 5, .dsl: 4 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 45 |
| _static | top-level component | 1 |
| .github | ci surface | 1 |
| docs | documentation surface | 1 |
| kag | top-level component | 1 |
| knext | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | ollama, llama |
| webRuntime | 없음 |
| developerSurface | click |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [tests/unit/builder/component/test_external_graph.py](../../../../sources/OpenSPG__KAG/tests/unit/builder/component/test_external_graph.py) | retrieval signal |
| retrieval | [knext/search/rest/models/vector_search_request.py](../../../../sources/OpenSPG__KAG/knext/search/rest/models/vector_search_request.py) | retrieval signal |
| retrieval | [knext/schema/rest/models/type/index_type.py](../../../../sources/OpenSPG__KAG/knext/schema/rest/models/type/index_type.py) | retrieval signal |
| retrieval | [knext/reasoner/rest/models/sub_graph.py](../../../../sources/OpenSPG__KAG/knext/reasoner/rest/models/sub_graph.py) | retrieval signal |
| entrypoints | [kag/bin/__init__.py](../../../../sources/OpenSPG__KAG/kag/bin/__init__.py) | entrypoints signal |
| entrypoints | [kag/bin/base.py](../../../../sources/OpenSPG__KAG/kag/bin/base.py) | entrypoints signal |
| entrypoints | [kag/bin/kag_cmds.py](../../../../sources/OpenSPG__KAG/kag/bin/kag_cmds.py) | entrypoints signal |
| entrypoints | [kag/bin/commands/__init__.py](../../../../sources/OpenSPG__KAG/kag/bin/commands/__init__.py) | entrypoints signal |
| docs | [README_cn.md](../../../../sources/OpenSPG__KAG/README_cn.md) | docs signal |
| docs | [README_ja.md](../../../../sources/OpenSPG__KAG/README_ja.md) | docs signal |
| docs | [README.md](../../../../sources/OpenSPG__KAG/README.md) | docs signal |
| docs | [kag/open_benchmark/prqa/README_cn.md](../../../../sources/OpenSPG__KAG/kag/open_benchmark/prqa/README_cn.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 8 | [kag/bin/__init__.py](../../../../sources/OpenSPG__KAG/kag/bin/__init__.py)<br>[kag/bin/base.py](../../../../sources/OpenSPG__KAG/kag/bin/base.py)<br>[kag/bin/kag_cmds.py](../../../../sources/OpenSPG__KAG/kag/bin/kag_cmds.py)<br>[kag/bin/commands/__init__.py](../../../../sources/OpenSPG__KAG/kag/bin/commands/__init__.py)<br>[kag/bin/commands/benchmark.py](../../../../sources/OpenSPG__KAG/kag/bin/commands/benchmark.py)<br>[kag/bin/commands/builder.py](../../../../sources/OpenSPG__KAG/kag/bin/commands/builder.py)<br>[kag/bin/commands/info.py](../../../../sources/OpenSPG__KAG/kag/bin/commands/info.py)<br>[kag/bin/commands/mcp_server.py](../../../../sources/OpenSPG__KAG/kag/bin/commands/mcp_server.py) |
| agentRuntime | 97 | [tests/unit/executor/__init__.py](../../../../sources/OpenSPG__KAG/tests/unit/executor/__init__.py)<br>[tests/unit/executor/kag_config.yaml](../../../../sources/OpenSPG__KAG/tests/unit/executor/kag_config.yaml)<br>[tests/unit/executor/kag_pipeline_test.py](../../../../sources/OpenSPG__KAG/tests/unit/executor/kag_pipeline_test.py)<br>[kag/solver/prompt/context_select_prompt.py](../../../../sources/OpenSPG__KAG/kag/solver/prompt/context_select_prompt.py)<br>[kag/solver/planner/__init__.py](../../../../sources/OpenSPG__KAG/kag/solver/planner/__init__.py)<br>[kag/solver/planner/kag_iterative_planner.py](../../../../sources/OpenSPG__KAG/kag/solver/planner/kag_iterative_planner.py)<br>[kag/solver/planner/kag_model_planner.py](../../../../sources/OpenSPG__KAG/kag/solver/planner/kag_model_planner.py)<br>[kag/solver/planner/kag_static_planner.py](../../../../sources/OpenSPG__KAG/kag/solver/planner/kag_static_planner.py) |
| mcp | 29 | [kag/solver/prompt/mcp_tool_call.py](../../../../sources/OpenSPG__KAG/kag/solver/prompt/mcp_tool_call.py)<br>[kag/solver/planner/mcp_planner.py](../../../../sources/OpenSPG__KAG/kag/solver/planner/mcp_planner.py)<br>[kag/solver/pipelineconf/mcp.yaml](../../../../sources/OpenSPG__KAG/kag/solver/pipelineconf/mcp.yaml)<br>[kag/solver/pipeline/mcp_pipeline.py](../../../../sources/OpenSPG__KAG/kag/solver/pipeline/mcp_pipeline.py)<br>[kag/solver/executor/mcp/__init__.py](../../../../sources/OpenSPG__KAG/kag/solver/executor/mcp/__init__.py)<br>[kag/solver/executor/mcp/mcp_client.py](../../../../sources/OpenSPG__KAG/kag/solver/executor/mcp/mcp_client.py)<br>[kag/solver/executor/mcp/mcp_executor.py](../../../../sources/OpenSPG__KAG/kag/solver/executor/mcp/mcp_executor.py)<br>[kag/solver/executor/mcp/mcp.json](../../../../sources/OpenSPG__KAG/kag/solver/executor/mcp/mcp.json) |
| retrieval | 119 | [tests/unit/builder/component/test_external_graph.py](../../../../sources/OpenSPG__KAG/tests/unit/builder/component/test_external_graph.py)<br>[knext/search/rest/models/vector_search_request.py](../../../../sources/OpenSPG__KAG/knext/search/rest/models/vector_search_request.py)<br>[knext/schema/rest/models/type/index_type.py](../../../../sources/OpenSPG__KAG/knext/schema/rest/models/type/index_type.py)<br>[knext/reasoner/rest/models/sub_graph.py](../../../../sources/OpenSPG__KAG/knext/reasoner/rest/models/sub_graph.py)<br>[knext/graph/__init__.py](../../../../sources/OpenSPG__KAG/knext/graph/__init__.py)<br>[knext/graph/client.py](../../../../sources/OpenSPG__KAG/knext/graph/client.py)<br>[knext/graph/rest/__init__.py](../../../../sources/OpenSPG__KAG/knext/graph/rest/__init__.py)<br>[knext/graph/rest/graph_api.py](../../../../sources/OpenSPG__KAG/knext/graph/rest/graph_api.py) |
| spec | 2 | [requirements.txt](../../../../sources/OpenSPG__KAG/requirements.txt)<br>[kag/solver/server/requirement.txt](../../../../sources/OpenSPG__KAG/kag/solver/server/requirement.txt) |
| eval | 213 | [tests/__init__.py](../../../../sources/OpenSPG__KAG/tests/__init__.py)<br>[tests/unit/__init__.py](../../../../sources/OpenSPG__KAG/tests/unit/__init__.py)<br>[tests/unit/.coverage](../../../../sources/OpenSPG__KAG/tests/unit/.coverage)<br>[tests/unit/.coverage.MacBook-Pro.local.61268.XgTYnYax](../../../../sources/OpenSPG__KAG/tests/unit/.coverage.MacBook-Pro.local.61268.XgTYnYax)<br>[tests/unit/kag_config.yaml](../../../../sources/OpenSPG__KAG/tests/unit/kag_config.yaml)<br>[tests/unit/test_planner/__init__.py](../../../../sources/OpenSPG__KAG/tests/unit/test_planner/__init__.py)<br>[tests/unit/test_planner/kag_config.yaml](../../../../sources/OpenSPG__KAG/tests/unit/test_planner/kag_config.yaml)<br>[tests/unit/test_planner/solver/__init__.py](../../../../sources/OpenSPG__KAG/tests/unit/test_planner/solver/__init__.py) |
| security | 0 | 명확하지 않음 |
| ci | 2 | [.github/workflows/code-check.yml](../../../../sources/OpenSPG__KAG/.github/workflows/code-check.yml)<br>[.github/workflows/pr-title-check.yml](../../../../sources/OpenSPG__KAG/.github/workflows/pr-title-check.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 46 | [README_cn.md](../../../../sources/OpenSPG__KAG/README_cn.md)<br>[README_ja.md](../../../../sources/OpenSPG__KAG/README_ja.md)<br>[README.md](../../../../sources/OpenSPG__KAG/README.md)<br>[kag/open_benchmark/prqa/README_cn.md](../../../../sources/OpenSPG__KAG/kag/open_benchmark/prqa/README_cn.md)<br>[kag/open_benchmark/prqa/README.md](../../../../sources/OpenSPG__KAG/kag/open_benchmark/prqa/README.md)<br>[kag/open_benchmark/musique/README_cn.md](../../../../sources/OpenSPG__KAG/kag/open_benchmark/musique/README_cn.md)<br>[kag/open_benchmark/musique/README.md](../../../../sources/OpenSPG__KAG/kag/open_benchmark/musique/README.md)<br>[kag/open_benchmark/hotpotqa/README_cn.md](../../../../sources/OpenSPG__KAG/kag/open_benchmark/hotpotqa/README_cn.md) |
| config | 3 | [requirements.txt](../../../../sources/OpenSPG__KAG/requirements.txt)<br>[kag/examples/baidu_map_mcp/pyproject.toml](../../../../sources/OpenSPG__KAG/kag/examples/baidu_map_mcp/pyproject.toml)<br>[kag/examples/baidu_map_mcp/uv.lock](../../../../sources/OpenSPG__KAG/kag/examples/baidu_map_mcp/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 213 | [tests/__init__.py](../../../../sources/OpenSPG__KAG/tests/__init__.py)<br>[tests/unit/__init__.py](../../../../sources/OpenSPG__KAG/tests/unit/__init__.py)<br>[tests/unit/.coverage](../../../../sources/OpenSPG__KAG/tests/unit/.coverage)<br>[tests/unit/.coverage.MacBook-Pro.local.61268.XgTYnYax](../../../../sources/OpenSPG__KAG/tests/unit/.coverage.MacBook-Pro.local.61268.XgTYnYax)<br>[tests/unit/kag_config.yaml](../../../../sources/OpenSPG__KAG/tests/unit/kag_config.yaml)<br>[tests/unit/test_planner/__init__.py](../../../../sources/OpenSPG__KAG/tests/unit/test_planner/__init__.py) |
| CI workflow | 2 | [.github/workflows/code-check.yml](../../../../sources/OpenSPG__KAG/.github/workflows/code-check.yml)<br>[.github/workflows/pr-title-check.yml](../../../../sources/OpenSPG__KAG/.github/workflows/pr-title-check.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/unit/builder/component/test_external_graph.py`, `knext/search/rest/models/vector_search_request.py`, `knext/schema/rest/models/type/index_type.py`.
2. entrypoint를 따라 실행 흐름 확인: `kag/bin/__init__.py`, `kag/bin/base.py`, `kag/bin/kag_cmds.py`.
3. agent/tool runtime 매핑: `tests/unit/executor/__init__.py`, `tests/unit/executor/kag_config.yaml`, `tests/unit/executor/kag_pipeline_test.py`.
4. retrieval/memory/indexing 확인: `tests/unit/builder/component/test_external_graph.py`, `knext/search/rest/models/vector_search_request.py`, `knext/schema/rest/models/type/index_type.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/unit/__init__.py`, `tests/unit/.coverage`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 KAG is a logical form guided reasoning and retrieval framework based on OpenSPG engine and LLMs. It is used to build log. 핵심 구조 신호는 Python, requirements.txt, README.md, LICENSE, openai, mcp이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
