# yifanfeng97/Hyper-Extract 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Transform unstructured text into structured knowledge with LLMs. Graphs, hypergraphs, and spatio-temporal extractions — with one command.

## 요약

- 조사 단위: `sources/yifanfeng97__Hyper-Extract` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 449 files, 110 directories, depth score 103, key references 11개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=hyperextract-skills/SKILL.md, hyperextract-skills/yaml-validator/SKILL.md, hyperextract-skills/template-optimizer/SKILL.md이고, 의존성 단서는 openai, anthropic, langchain, pydantic, typer, faiss, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | yifanfeng97/Hyper-Extract |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | Python |
| Stars | 1571 |
| Forks | 177 |
| License | NOASSERTION |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/yifanfeng97__Hyper-Extract](../../../../sources/yifanfeng97__Hyper-Extract) |
| 기존 보고서 | [reports/llm-wiki/repositories/yifanfeng97__Hyper-Extract.md](../../../llm-wiki/repositories/yifanfeng97__Hyper-Extract.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 449 / 110 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, docs, examples, hyperextract, hyperextract-skills, tests |
| 상위 확장자 | .md: 241, .py: 134, .yaml: 43, .svg: 8, .yml: 7, .jpg: 5, (none): 5, .txt: 2, .example: 1, .lock: 1, .png: 1, .toml: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 48 |
| docs | documentation surface | 34 |
| examples/zh | examples workspace | 8 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| examples/README_ZH.md | examples workspace | 1 |
| examples/README.md | examples workspace | 1 |
| hyperextract | top-level component | 1 |
| hyperextract-skills | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | he | he |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | 없음 |
| agentFrameworks | langchain |
| vectorStores | faiss |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | typer |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| agentRuntime | [hyperextract-skills/SKILL.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/SKILL.md) | agentRuntime signal |
| agentRuntime | [hyperextract-skills/yaml-validator/SKILL.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/yaml-validator/SKILL.md) | agentRuntime signal |
| agentRuntime | [hyperextract-skills/template-optimizer/SKILL.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/template-optimizer/SKILL.md) | agentRuntime signal |
| agentRuntime | [hyperextract-skills/record-designer/SKILL.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/record-designer/SKILL.md) | agentRuntime signal |
| entrypoints | [hyperextract/cli/__main__.py](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract/cli/__main__.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/yifanfeng97__Hyper-Extract/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/yifanfeng97__Hyper-Extract/uv.lock) | config signal |
| ci | [.github/workflows/docs.yml](../../../../sources/yifanfeng97__Hyper-Extract/.github/workflows/docs.yml) | ci support |
| ci | [.github/workflows/integration.yml](../../../../sources/yifanfeng97__Hyper-Extract/.github/workflows/integration.yml) | ci support |
| eval | [tests/__init__.py](../../../../sources/yifanfeng97__Hyper-Extract/tests/__init__.py) | eval support |
| eval | [tests/conftest.py](../../../../sources/yifanfeng97__Hyper-Extract/tests/conftest.py) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [hyperextract/cli/__main__.py](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract/cli/__main__.py) |
| agentRuntime | 10 | [hyperextract-skills/SKILL.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/SKILL.md)<br>[hyperextract-skills/yaml-validator/SKILL.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/yaml-validator/SKILL.md)<br>[hyperextract-skills/template-optimizer/SKILL.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/template-optimizer/SKILL.md)<br>[hyperextract-skills/record-designer/SKILL.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/record-designer/SKILL.md)<br>[hyperextract-skills/multilingual/SKILL.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/multilingual/SKILL.md)<br>[hyperextract-skills/graph-designer/SKILL.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/graph-designer/SKILL.md)<br>[hyperextract-skills/brainstorm/SKILL.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/brainstorm/SKILL.md)<br>[hyperextract/templates/presets/general/workflow_graph.yaml](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract/templates/presets/general/workflow_graph.yaml) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 82 | [tests/types/test_graph_dangling.py](../../../../sources/yifanfeng97__Hyper-Extract/tests/types/test_graph_dangling.py)<br>[tests/types/test_graph_extraction.py](../../../../sources/yifanfeng97__Hyper-Extract/tests/types/test_graph_extraction.py)<br>[tests/types/test_graph_search.py](../../../../sources/yifanfeng97__Hyper-Extract/tests/types/test_graph_search.py)<br>[hyperextract-skills/graph-designer/SKILL.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/graph-designer/SKILL.md)<br>[hyperextract-skills/graph-designer/references/dimensions.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/graph-designer/references/dimensions.md)<br>[hyperextract-skills/graph-designer/references/entity.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/graph-designer/references/entity.md)<br>[hyperextract-skills/graph-designer/references/hypergraph.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/graph-designer/references/hypergraph.md)<br>[hyperextract-skills/graph-designer/references/relation.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/graph-designer/references/relation.md) |
| spec | 4 | [hyperextract/templates/DESIGN_GUIDE_zh.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract/templates/DESIGN_GUIDE_zh.md)<br>[hyperextract/templates/DESIGN_GUIDE.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract/templates/DESIGN_GUIDE.md)<br>[docs/zh/concepts/architecture.md](../../../../sources/yifanfeng97__Hyper-Extract/docs/zh/concepts/architecture.md)<br>[docs/en/concepts/architecture.md](../../../../sources/yifanfeng97__Hyper-Extract/docs/en/concepts/architecture.md) |
| eval | 98 | [tests/__init__.py](../../../../sources/yifanfeng97__Hyper-Extract/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/yifanfeng97__Hyper-Extract/tests/conftest.py)<br>[tests/kg.md](../../../../sources/yifanfeng97__Hyper-Extract/tests/kg.md)<br>[tests/mocks.py](../../../../sources/yifanfeng97__Hyper-Extract/tests/mocks.py)<br>[tests/utils/__init__.py](../../../../sources/yifanfeng97__Hyper-Extract/tests/utils/__init__.py)<br>[tests/utils/test_client.py](../../../../sources/yifanfeng97__Hyper-Extract/tests/utils/test_client.py)<br>[tests/types/__init__.py](../../../../sources/yifanfeng97__Hyper-Extract/tests/types/__init__.py)<br>[tests/types/test_extraction_logging.py](../../../../sources/yifanfeng97__Hyper-Extract/tests/types/test_extraction_logging.py) |
| security | 5 | [tests/test_data/zh/legal/compliance_filing_sample.md](../../../../sources/yifanfeng97__Hyper-Extract/tests/test_data/zh/legal/compliance_filing_sample.md)<br>[tests/test_data/zh/general/regulation_company_policy.md](../../../../sources/yifanfeng97__Hyper-Extract/tests/test_data/zh/general/regulation_company_policy.md)<br>[tests/test_data/en/legal/compliance_filing_sample.md](../../../../sources/yifanfeng97__Hyper-Extract/tests/test_data/en/legal/compliance_filing_sample.md)<br>[tests/test_data/en/general/regulation_company_policy.md](../../../../sources/yifanfeng97__Hyper-Extract/tests/test_data/en/general/regulation_company_policy.md)<br>[hyperextract/templates/presets/legal/compliance_list.yaml](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract/templates/presets/legal/compliance_list.yaml) |
| ci | 5 | [.github/workflows/docs.yml](../../../../sources/yifanfeng97__Hyper-Extract/.github/workflows/docs.yml)<br>[.github/workflows/integration.yml](../../../../sources/yifanfeng97__Hyper-Extract/.github/workflows/integration.yml)<br>[.github/workflows/lint.yml](../../../../sources/yifanfeng97__Hyper-Extract/.github/workflows/lint.yml)<br>[.github/workflows/publish.yml](../../../../sources/yifanfeng97__Hyper-Extract/.github/workflows/publish.yml)<br>[.github/workflows/test.yml](../../../../sources/yifanfeng97__Hyper-Extract/.github/workflows/test.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 166 | [mkdocs.yml](../../../../sources/yifanfeng97__Hyper-Extract/mkdocs.yml)<br>[README_ZH.md](../../../../sources/yifanfeng97__Hyper-Extract/README_ZH.md)<br>[README.md](../../../../sources/yifanfeng97__Hyper-Extract/README.md)<br>[hyperextract-skills/README_ZH.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/README_ZH.md)<br>[hyperextract-skills/README.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/README.md)<br>[hyperextract/templates/README_ZH.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract/templates/README_ZH.md)<br>[hyperextract/templates/README.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract/templates/README.md)<br>[hyperextract/cli/README_ZH.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract/cli/README_ZH.md) |
| config | 2 | [pyproject.toml](../../../../sources/yifanfeng97__Hyper-Extract/pyproject.toml)<br>[uv.lock](../../../../sources/yifanfeng97__Hyper-Extract/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 98 | [tests/__init__.py](../../../../sources/yifanfeng97__Hyper-Extract/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/yifanfeng97__Hyper-Extract/tests/conftest.py)<br>[tests/kg.md](../../../../sources/yifanfeng97__Hyper-Extract/tests/kg.md)<br>[tests/mocks.py](../../../../sources/yifanfeng97__Hyper-Extract/tests/mocks.py)<br>[tests/utils/__init__.py](../../../../sources/yifanfeng97__Hyper-Extract/tests/utils/__init__.py)<br>[tests/utils/test_client.py](../../../../sources/yifanfeng97__Hyper-Extract/tests/utils/test_client.py) |
| CI workflow | 5 | [.github/workflows/docs.yml](../../../../sources/yifanfeng97__Hyper-Extract/.github/workflows/docs.yml)<br>[.github/workflows/integration.yml](../../../../sources/yifanfeng97__Hyper-Extract/.github/workflows/integration.yml)<br>[.github/workflows/lint.yml](../../../../sources/yifanfeng97__Hyper-Extract/.github/workflows/lint.yml)<br>[.github/workflows/publish.yml](../../../../sources/yifanfeng97__Hyper-Extract/.github/workflows/publish.yml)<br>[.github/workflows/test.yml](../../../../sources/yifanfeng97__Hyper-Extract/.github/workflows/test.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 5 | [tests/test_data/zh/legal/compliance_filing_sample.md](../../../../sources/yifanfeng97__Hyper-Extract/tests/test_data/zh/legal/compliance_filing_sample.md)<br>[tests/test_data/zh/general/regulation_company_policy.md](../../../../sources/yifanfeng97__Hyper-Extract/tests/test_data/zh/general/regulation_company_policy.md)<br>[tests/test_data/en/legal/compliance_filing_sample.md](../../../../sources/yifanfeng97__Hyper-Extract/tests/test_data/en/legal/compliance_filing_sample.md)<br>[tests/test_data/en/general/regulation_company_policy.md](../../../../sources/yifanfeng97__Hyper-Extract/tests/test_data/en/general/regulation_company_policy.md)<br>[hyperextract/templates/presets/legal/compliance_list.yaml](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract/templates/presets/legal/compliance_list.yaml) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `hyperextract-skills/SKILL.md`, `hyperextract-skills/yaml-validator/SKILL.md`, `hyperextract-skills/template-optimizer/SKILL.md`.
2. entrypoint를 따라 실행 흐름 확인: `hyperextract/cli/__main__.py`.
3. agent/tool runtime 매핑: `hyperextract-skills/SKILL.md`, `hyperextract-skills/yaml-validator/SKILL.md`, `hyperextract-skills/template-optimizer/SKILL.md`.
4. retrieval/memory/indexing 확인: `tests/types/test_graph_dangling.py`, `tests/types/test_graph_extraction.py`, `tests/types/test_graph_search.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/conftest.py`, `tests/kg.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Transform unstructured text into structured knowledge with LLMs. Graphs, hypergraphs, and spatio temporal extractions — . 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, openai, anthropic이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
