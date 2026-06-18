# naver/claf 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

CLaF: Open-Source Clova Language Framework

## 요약

- 조사 단위: `sources/naver__claf` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 692 files, 114 directories, depth score 91, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 api/server, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 config=pyproject.toml, requirements.txt, docs/Makefile이고, 의존성 단서는 express, torch, transformers, 검증/운영 단서는 test/eval 경로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/claf |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 215 |
| Forks | 33 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__claf](../../../../sources/naver__claf) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__claf.md](../../../korea-trending/repositories/naver__claf.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 692 / 114 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | base_config, claf, docs, images, machine_config, reports, script, tests |
| 상위 확장자 | .py: 211, .html: 194, .json: 91, .txt: 42, .doctree: 40, .rst: 32, .png: 22, .js: 13, .md: 12, (none): 9, .css: 6, .yaml: 3 |
| 소스 패턴 | api/server, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 78 |
| tests | validation surface | 15 |
| base_config | top-level component | 1 |
| claf | top-level component | 1 |
| images | top-level component | 1 |
| machine_config | top-level component | 1 |
| reports | top-level component | 1 |
| script | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | torch, transformers |
| webRuntime | express |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| config | [pyproject.toml](../../../../sources/naver__claf/pyproject.toml) | config signal |
| config | [requirements.txt](../../../../sources/naver__claf/requirements.txt) | config signal |
| config | [docs/Makefile](../../../../sources/naver__claf/docs/Makefile) | config signal |
| config | [docs/requirements.txt](../../../../sources/naver__claf/docs/requirements.txt) | config signal |
| docs | [README.md](../../../../sources/naver__claf/README.md) | docs signal |
| docs | [docs/claf.config.factory.rst](../../../../sources/naver__claf/docs/claf.config.factory.rst) | docs signal |
| docs | [docs/claf.config.rst](../../../../sources/naver__claf/docs/claf.config.rst) | docs signal |
| docs | [docs/claf.data.dataset.rst](../../../../sources/naver__claf/docs/claf.data.dataset.rst) | docs signal |
| eval | [eval.py](../../../../sources/naver__claf/eval.py) | eval signal |
| eval | [tests/__init__.py](../../../../sources/naver__claf/tests/__init__.py) | eval signal |
| eval | [tests/integration/test_config.py](../../../../sources/naver__claf/tests/integration/test_config.py) | eval signal |
| eval | [tests/integration/test_machine.py](../../../../sources/naver__claf/tests/integration/test_machine.py) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 41 | [index.html](../../../../sources/naver__claf/index.html)<br>[script/convert_embedding_to_vocab_txt.py](../../../../sources/naver__claf/script/convert_embedding_to_vocab_txt.py)<br>[machine_config/ko_wiki.json](../../../../sources/naver__claf/machine_config/ko_wiki.json)<br>[docs/claf.machine.components.retrieval.rst](../../../../sources/naver__claf/docs/claf.machine.components.retrieval.rst)<br>[docs/claf.tokens.embedding.rst](../../../../sources/naver__claf/docs/claf.tokens.embedding.rst)<br>[docs/index.rst](../../../../sources/naver__claf/docs/index.rst)<br>[docs/contents/pretrained_vector.md](../../../../sources/naver__claf/docs/contents/pretrained_vector.md)<br>[docs/_build/html/claf.machine.components.retrieval.html](../../../../sources/naver__claf/docs/_build/html/claf.machine.components.retrieval.html) |
| spec | 4 | [requirements.txt](../../../../sources/naver__claf/requirements.txt)<br>[images/tokenizers_design.png](../../../../sources/naver__claf/images/tokenizers_design.png)<br>[docs/requirements.txt](../../../../sources/naver__claf/docs/requirements.txt)<br>[docs/_build/html/_images/tokenizers_design.png](../../../../sources/naver__claf/docs/_build/html/_images/tokenizers_design.png) |
| eval | 65 | [eval.py](../../../../sources/naver__claf/eval.py)<br>[tests/__init__.py](../../../../sources/naver__claf/tests/__init__.py)<br>[tests/integration/test_config.py](../../../../sources/naver__claf/tests/integration/test_config.py)<br>[tests/integration/test_machine.py](../../../../sources/naver__claf/tests/integration/test_machine.py)<br>[tests/integration/test_multi_task.py](../../../../sources/naver__claf/tests/integration/test_multi_task.py)<br>[tests/integration/test_reading_comprehension.py](../../../../sources/naver__claf/tests/integration/test_reading_comprehension.py)<br>[tests/integration/test_semantic_parsing.py](../../../../sources/naver__claf/tests/integration/test_semantic_parsing.py)<br>[tests/integration/test_sequence_classification.py](../../../../sources/naver__claf/tests/integration/test_sequence_classification.py) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 1 | [Dockerfile](../../../../sources/naver__claf/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 363 | [README.md](../../../../sources/naver__claf/README.md)<br>[docs/claf.config.factory.rst](../../../../sources/naver__claf/docs/claf.config.factory.rst)<br>[docs/claf.config.rst](../../../../sources/naver__claf/docs/claf.config.rst)<br>[docs/claf.data.dataset.rst](../../../../sources/naver__claf/docs/claf.data.dataset.rst)<br>[docs/claf.data.reader.bert.rst](../../../../sources/naver__claf/docs/claf.data.reader.bert.rst)<br>[docs/claf.data.reader.rst](../../../../sources/naver__claf/docs/claf.data.reader.rst)<br>[docs/claf.data.rst](../../../../sources/naver__claf/docs/claf.data.rst)<br>[docs/claf.decorator.rst](../../../../sources/naver__claf/docs/claf.decorator.rst) |
| config | 4 | [pyproject.toml](../../../../sources/naver__claf/pyproject.toml)<br>[requirements.txt](../../../../sources/naver__claf/requirements.txt)<br>[docs/Makefile](../../../../sources/naver__claf/docs/Makefile)<br>[docs/requirements.txt](../../../../sources/naver__claf/docs/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 65 | [eval.py](../../../../sources/naver__claf/eval.py)<br>[tests/__init__.py](../../../../sources/naver__claf/tests/__init__.py)<br>[tests/integration/test_config.py](../../../../sources/naver__claf/tests/integration/test_config.py)<br>[tests/integration/test_machine.py](../../../../sources/naver__claf/tests/integration/test_machine.py)<br>[tests/integration/test_multi_task.py](../../../../sources/naver__claf/tests/integration/test_multi_task.py)<br>[tests/integration/test_reading_comprehension.py](../../../../sources/naver__claf/tests/integration/test_reading_comprehension.py) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/naver__claf/Dockerfile) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `pyproject.toml`, `requirements.txt`, `docs/Makefile`.
2. retrieval/memory/indexing 확인: `index.html`, `script/convert_embedding_to_vocab_txt.py`, `machine_config/ko_wiki.json`.
3. test/eval 파일로 동작 검증: `eval.py`, `tests/__init__.py`, `tests/integration/test_config.py`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 CLaF Open Source Clova Language Framework. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, Dockerfile, README.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
