# stanford-oval/storm 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Local clone structure analysis: 74 files, 18 directories.

## 요약

- 조사 단위: `sources/stanford-oval__storm` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 74 files, 18 directories, depth score 67, key references 11개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=knowledge_storm/__init__.py, knowledge_storm/dataclass.py, knowledge_storm/encoder.py이고, 의존성 단서는 langchain, transformers, qdrant, 검증/운영 단서는 CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | stanford-oval/storm |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 28424 |
| Forks | 2596 |
| License | MIT |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/stanford-oval__storm](../../../../sources/stanford-oval__storm) |
| 기존 보고서 | [reports/llm-wiki/repositories/stanford-oval__storm.md](../../../llm-wiki/repositories/stanford-oval__storm.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 74 / 18 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, assets, examples, frontend, knowledge_storm |
| 상위 확장자 | .py: 52, .jpg: 5, .md: 5, .svg: 2, .txt: 2, .yml: 2, (none): 2, .in: 1, .pdf: 1, .toml: 1, .yaml: 1 |
| 소스 패턴 | retrieval/vector path, spec/docs-driven |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| examples/storm_examples | examples workspace | 7 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| examples | top-level component | 1 |
| frontend | top-level component | 1 |
| knowledge_storm | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | langchain |
| vectorStores | qdrant |
| modelRuntime | transformers |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [knowledge_storm/__init__.py](../../../../sources/stanford-oval__storm/knowledge_storm/__init__.py) | retrieval signal |
| retrieval | [knowledge_storm/dataclass.py](../../../../sources/stanford-oval__storm/knowledge_storm/dataclass.py) | retrieval signal |
| retrieval | [knowledge_storm/encoder.py](../../../../sources/stanford-oval__storm/knowledge_storm/encoder.py) | retrieval signal |
| retrieval | [knowledge_storm/interface.py](../../../../sources/stanford-oval__storm/knowledge_storm/interface.py) | retrieval signal |
| docs | [README.md](../../../../sources/stanford-oval__storm/README.md) | docs signal |
| docs | [frontend/demo_light/README.md](../../../../sources/stanford-oval__storm/frontend/demo_light/README.md) | docs signal |
| docs | [examples/storm_examples/README.md](../../../../sources/stanford-oval__storm/examples/storm_examples/README.md) | docs signal |
| config | [requirements.txt](../../../../sources/stanford-oval__storm/requirements.txt) | config signal |
| config | [frontend/demo_light/requirements.txt](../../../../sources/stanford-oval__storm/frontend/demo_light/requirements.txt) | config signal |
| ci | [.github/workflows/format-check.yml](../../../../sources/stanford-oval__storm/.github/workflows/format-check.yml) | ci support |
| ci | [.github/workflows/python-package.yml](../../../../sources/stanford-oval__storm/.github/workflows/python-package.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 44 | [knowledge_storm/__init__.py](../../../../sources/stanford-oval__storm/knowledge_storm/__init__.py)<br>[knowledge_storm/dataclass.py](../../../../sources/stanford-oval__storm/knowledge_storm/dataclass.py)<br>[knowledge_storm/encoder.py](../../../../sources/stanford-oval__storm/knowledge_storm/encoder.py)<br>[knowledge_storm/interface.py](../../../../sources/stanford-oval__storm/knowledge_storm/interface.py)<br>[knowledge_storm/lm.py](../../../../sources/stanford-oval__storm/knowledge_storm/lm.py)<br>[knowledge_storm/logging_wrapper.py](../../../../sources/stanford-oval__storm/knowledge_storm/logging_wrapper.py)<br>[knowledge_storm/rm.py](../../../../sources/stanford-oval__storm/knowledge_storm/rm.py)<br>[knowledge_storm/utils.py](../../../../sources/stanford-oval__storm/knowledge_storm/utils.py) |
| spec | 2 | [requirements.txt](../../../../sources/stanford-oval__storm/requirements.txt)<br>[frontend/demo_light/requirements.txt](../../../../sources/stanford-oval__storm/frontend/demo_light/requirements.txt) |
| eval | 0 | 명확하지 않음 |
| security | 0 | 명확하지 않음 |
| ci | 2 | [.github/workflows/format-check.yml](../../../../sources/stanford-oval__storm/.github/workflows/format-check.yml)<br>[.github/workflows/python-package.yml](../../../../sources/stanford-oval__storm/.github/workflows/python-package.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 3 | [README.md](../../../../sources/stanford-oval__storm/README.md)<br>[frontend/demo_light/README.md](../../../../sources/stanford-oval__storm/frontend/demo_light/README.md)<br>[examples/storm_examples/README.md](../../../../sources/stanford-oval__storm/examples/storm_examples/README.md) |
| config | 2 | [requirements.txt](../../../../sources/stanford-oval__storm/requirements.txt)<br>[frontend/demo_light/requirements.txt](../../../../sources/stanford-oval__storm/frontend/demo_light/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 0 | 명확하지 않음 |
| CI workflow | 2 | [.github/workflows/format-check.yml](../../../../sources/stanford-oval__storm/.github/workflows/format-check.yml)<br>[.github/workflows/python-package.yml](../../../../sources/stanford-oval__storm/.github/workflows/python-package.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음; test/eval 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `knowledge_storm/__init__.py`, `knowledge_storm/dataclass.py`, `knowledge_storm/encoder.py`.
2. retrieval/memory/indexing 확인: `knowledge_storm/__init__.py`, `knowledge_storm/dataclass.py`, `knowledge_storm/encoder.py`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Local clone structure analysis 74 files, 18 directories.. 핵심 구조 신호는 Python, requirements.txt, README.md, LICENSE, langchain, transformers이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음입니다.
