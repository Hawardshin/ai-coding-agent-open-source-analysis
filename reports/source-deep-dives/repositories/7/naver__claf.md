# naver/claf Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

CLaF: Open-Source Clova Language Framework

## 요약

- 조사 단위: `sources/naver__claf` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 692 files, 114 directories, depth score 97, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 api/server, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 config=pyproject.toml, requirements.txt, docs/Makefile이고, 의존성 단서는 express, torch, transformers, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | naver/claf |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 215 |
| Forks | 33 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/naver__claf](../../../../sources/naver__claf) |
| Existing report | [reports/korea-trending/repositories/naver__claf.md](../../../korea-trending/repositories/naver__claf.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 692 / 114 |
| Max observed depth | 10 |
| Top directories | base_config, claf, docs, images, machine_config, reports, script, tests |
| Top extensions | .py: 211, .html: 194, .json: 91, .txt: 42, .doctree: 40, .rst: 32, .png: 22, .js: 13, .md: 12, (none): 9, .css: 6, .yaml: 3 |
| Source patterns | api/server, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 78 |
| tests | validation surface | 15 |
| base_config | top-level component | 1 |
| claf | top-level component | 1 |
| images | top-level component | 1 |
| machine_config | top-level component | 1 |
| reports | top-level component | 1 |
| script | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | torch, transformers |
| webRuntime | express |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 41 | [index.html](../../../../sources/naver__claf/index.html)<br>[script/convert_embedding_to_vocab_txt.py](../../../../sources/naver__claf/script/convert_embedding_to_vocab_txt.py)<br>[machine_config/ko_wiki.json](../../../../sources/naver__claf/machine_config/ko_wiki.json)<br>[docs/claf.machine.components.retrieval.rst](../../../../sources/naver__claf/docs/claf.machine.components.retrieval.rst)<br>[docs/claf.tokens.embedding.rst](../../../../sources/naver__claf/docs/claf.tokens.embedding.rst)<br>[docs/index.rst](../../../../sources/naver__claf/docs/index.rst)<br>[docs/contents/pretrained_vector.md](../../../../sources/naver__claf/docs/contents/pretrained_vector.md)<br>[docs/_build/html/claf.machine.components.retrieval.html](../../../../sources/naver__claf/docs/_build/html/claf.machine.components.retrieval.html) |
| spec | 4 | [requirements.txt](../../../../sources/naver__claf/requirements.txt)<br>[images/tokenizers_design.png](../../../../sources/naver__claf/images/tokenizers_design.png)<br>[docs/requirements.txt](../../../../sources/naver__claf/docs/requirements.txt)<br>[docs/_build/html/_images/tokenizers_design.png](../../../../sources/naver__claf/docs/_build/html/_images/tokenizers_design.png) |
| eval | 65 | [eval.py](../../../../sources/naver__claf/eval.py)<br>[tests/__init__.py](../../../../sources/naver__claf/tests/__init__.py)<br>[tests/integration/test_config.py](../../../../sources/naver__claf/tests/integration/test_config.py)<br>[tests/integration/test_machine.py](../../../../sources/naver__claf/tests/integration/test_machine.py)<br>[tests/integration/test_multi_task.py](../../../../sources/naver__claf/tests/integration/test_multi_task.py)<br>[tests/integration/test_reading_comprehension.py](../../../../sources/naver__claf/tests/integration/test_reading_comprehension.py)<br>[tests/integration/test_semantic_parsing.py](../../../../sources/naver__claf/tests/integration/test_semantic_parsing.py)<br>[tests/integration/test_sequence_classification.py](../../../../sources/naver__claf/tests/integration/test_sequence_classification.py) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 1 | [Dockerfile](../../../../sources/naver__claf/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 363 | [README.md](../../../../sources/naver__claf/README.md)<br>[docs/claf.config.factory.rst](../../../../sources/naver__claf/docs/claf.config.factory.rst)<br>[docs/claf.config.rst](../../../../sources/naver__claf/docs/claf.config.rst)<br>[docs/claf.data.dataset.rst](../../../../sources/naver__claf/docs/claf.data.dataset.rst)<br>[docs/claf.data.reader.bert.rst](../../../../sources/naver__claf/docs/claf.data.reader.bert.rst)<br>[docs/claf.data.reader.rst](../../../../sources/naver__claf/docs/claf.data.reader.rst)<br>[docs/claf.data.rst](../../../../sources/naver__claf/docs/claf.data.rst)<br>[docs/claf.decorator.rst](../../../../sources/naver__claf/docs/claf.decorator.rst) |
| config | 4 | [pyproject.toml](../../../../sources/naver__claf/pyproject.toml)<br>[requirements.txt](../../../../sources/naver__claf/requirements.txt)<br>[docs/Makefile](../../../../sources/naver__claf/docs/Makefile)<br>[docs/requirements.txt](../../../../sources/naver__claf/docs/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 65 | [eval.py](../../../../sources/naver__claf/eval.py)<br>[tests/__init__.py](../../../../sources/naver__claf/tests/__init__.py)<br>[tests/integration/test_config.py](../../../../sources/naver__claf/tests/integration/test_config.py)<br>[tests/integration/test_machine.py](../../../../sources/naver__claf/tests/integration/test_machine.py)<br>[tests/integration/test_multi_task.py](../../../../sources/naver__claf/tests/integration/test_multi_task.py)<br>[tests/integration/test_reading_comprehension.py](../../../../sources/naver__claf/tests/integration/test_reading_comprehension.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/naver__claf/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `pyproject.toml`, `requirements.txt`, `docs/Makefile`.
2. Inspect retrieval/memory/indexing through: `index.html`, `script/convert_embedding_to_vocab_txt.py`, `machine_config/ko_wiki.json`.
3. Verify behavior through test/eval files: `eval.py`, `tests/__init__.py`, `tests/integration/test_config.py`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 CLaF Open Source Clova Language Framework. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, Dockerfile, README.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 ci signal not obvious, needs deeper structural scan입니다.
