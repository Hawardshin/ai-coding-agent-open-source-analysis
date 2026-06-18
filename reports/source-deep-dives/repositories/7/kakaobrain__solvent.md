# kakaobrain/solvent Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

kakaobrain/solvent

## 요약

- 조사 단위: `sources/kakaobrain__solvent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 158 files, 52 directories, depth score 67, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 agent/tool runtime, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=README.md, pretrained_model/README.md, datasets/README.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | kakaobrain/solvent |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 74 |
| Forks | 10 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/kakaobrain__solvent](../../../../sources/kakaobrain__solvent) |
| Existing report | [reports/korea-trending/repositories/kakaobrain__solvent.md](../../../korea-trending/repositories/kakaobrain__solvent.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 158 / 52 |
| Max observed depth | 6 |
| Top directories | assets, configs, datasets, demo, pretrained_model, solvent, tools |
| Top extensions | .py: 102, .yaml: 37, .md: 4, .txt: 4, (none): 3, .cpp: 2, .sh: 2, .cu: 1, .h: 1, .png: 1, .yml: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| assets | top-level component | 1 |
| configs | top-level component | 1 |
| datasets | top-level component | 1 |
| demo | top-level component | 1 |
| pretrained_model | top-level component | 1 |
| solvent | top-level component | 1 |
| tools | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| docs | [README.md](../../../../sources/kakaobrain__solvent/README.md) | docs signal |
| docs | [pretrained_model/README.md](../../../../sources/kakaobrain__solvent/pretrained_model/README.md) | docs signal |
| docs | [datasets/README.md](../../../../sources/kakaobrain__solvent/datasets/README.md) | docs signal |
| eval | [solvent/evaluation/__init__.py](../../../../sources/kakaobrain__solvent/solvent/evaluation/__init__.py) | eval signal |
| eval | [solvent/evaluation/antibody_evaluation.py](../../../../sources/kakaobrain__solvent/solvent/evaluation/antibody_evaluation.py) | eval signal |
| eval | [solvent/evaluation/evaluator.py](../../../../sources/kakaobrain__solvent/solvent/evaluation/evaluator.py) | eval signal |
| eval | [solvent/evaluation/protein_evaluation.py](../../../../sources/kakaobrain__solvent/solvent/evaluation/protein_evaluation.py) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 8 | [tools/__init__.py](../../../../sources/kakaobrain__solvent/tools/__init__.py)<br>[tools/convert_solvent_weights.py](../../../../sources/kakaobrain__solvent/tools/convert_solvent_weights.py)<br>[tools/extract_afdb.py](../../../../sources/kakaobrain__solvent/tools/extract_afdb.py)<br>[tools/extract_antibody_fv.py](../../../../sources/kakaobrain__solvent/tools/extract_antibody_fv.py)<br>[tools/generate_afdb_cache.py](../../../../sources/kakaobrain__solvent/tools/generate_afdb_cache.py)<br>[tools/preprocess_casp14_datasets.py](../../../../sources/kakaobrain__solvent/tools/preprocess_casp14_datasets.py)<br>[tools/preprocess_datasets.py](../../../../sources/kakaobrain__solvent/tools/preprocess_datasets.py)<br>[tools/preprocess_multimer_datasets.py](../../../../sources/kakaobrain__solvent/tools/preprocess_multimer_datasets.py) |
| mcp | 0 | not obvious |
| retrieval | 1 | [solvent/utils/chunk_utils.py](../../../../sources/kakaobrain__solvent/solvent/utils/chunk_utils.py) |
| spec | 0 | not obvious |
| eval | 4 | [solvent/evaluation/__init__.py](../../../../sources/kakaobrain__solvent/solvent/evaluation/__init__.py)<br>[solvent/evaluation/antibody_evaluation.py](../../../../sources/kakaobrain__solvent/solvent/evaluation/antibody_evaluation.py)<br>[solvent/evaluation/evaluator.py](../../../../sources/kakaobrain__solvent/solvent/evaluation/evaluator.py)<br>[solvent/evaluation/protein_evaluation.py](../../../../sources/kakaobrain__solvent/solvent/evaluation/protein_evaluation.py) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 3 | [README.md](../../../../sources/kakaobrain__solvent/README.md)<br>[pretrained_model/README.md](../../../../sources/kakaobrain__solvent/pretrained_model/README.md)<br>[datasets/README.md](../../../../sources/kakaobrain__solvent/datasets/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 4 | [solvent/evaluation/__init__.py](../../../../sources/kakaobrain__solvent/solvent/evaluation/__init__.py)<br>[solvent/evaluation/antibody_evaluation.py](../../../../sources/kakaobrain__solvent/solvent/evaluation/antibody_evaluation.py)<br>[solvent/evaluation/evaluator.py](../../../../sources/kakaobrain__solvent/solvent/evaluation/evaluator.py)<br>[solvent/evaluation/protein_evaluation.py](../../../../sources/kakaobrain__solvent/solvent/evaluation/protein_evaluation.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `README.md`, `pretrained_model/README.md`, `datasets/README.md`.
2. Map agent/tool runtime through: `tools/__init__.py`, `tools/convert_solvent_weights.py`, `tools/extract_afdb.py`.
3. Inspect retrieval/memory/indexing through: `solvent/utils/chunk_utils.py`.
4. Verify behavior through test/eval files: `solvent/evaluation/__init__.py`, `solvent/evaluation/antibody_evaluation.py`, `solvent/evaluation/evaluator.py`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 Python, README.md, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
