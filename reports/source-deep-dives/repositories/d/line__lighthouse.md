# line/lighthouse Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

[EMNLP2024 Demo], [ICASSP 2025], [ICASSP 2026] A user-friendly library for reproducible video moment retrieval and highlight detection. It also supports audio moment retrieval.

## 요약

- 조사 단위: `sources/line__lighthouse` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 148 files, 40 directories, depth score 57, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=README.md, training/standalone_eval/README.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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


## Repository Context

| Field | Value |
| --- | --- |
| Repository | line/lighthouse |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 254 |
| Forks | 18 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/line__lighthouse](../../../../sources/line__lighthouse) |
| Existing report | [reports/korea-trending/repositories/line__lighthouse.md](../../../korea-trending/repositories/line__lighthouse.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 148 / 40 |
| Max observed depth | 6 |
| Top directories | .github, api_example, configs, data, gradio_demo, images, lighthouse, tests, training |
| Top extensions | .py: 81, .yml: 28, .jsonl: 24, (none): 7, .md: 2, .png: 2, .ini: 1, .json: 1, .mp4: 1, .wav: 1 |
| Source patterns | eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 5 |
| .github | ci surface | 1 |
| api_example | source boundary | 1 |
| configs | top-level component | 1 |
| data | top-level component | 1 |
| gradio_demo | top-level component | 1 |
| images | top-level component | 1 |
| lighthouse | top-level component | 1 |
| training | top-level component | 1 |


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
| docs | [README.md](../../../../sources/line__lighthouse/README.md) | docs signal |
| docs | [training/standalone_eval/README.md](../../../../sources/line__lighthouse/training/standalone_eval/README.md) | docs signal |
| eval | [training/standalone_eval/__init__.py](../../../../sources/line__lighthouse/training/standalone_eval/__init__.py) | eval signal |
| eval | [training/standalone_eval/eval.py](../../../../sources/line__lighthouse/training/standalone_eval/eval.py) | eval signal |
| eval | [training/standalone_eval/sample_val_preds_metrics_raw.json](../../../../sources/line__lighthouse/training/standalone_eval/sample_val_preds_metrics_raw.json) | eval signal |
| ci | [.github/workflows/mypy_ruff.yml](../../../../sources/line__lighthouse/.github/workflows/mypy_ruff.yml) | ci support |
| ci | [.github/workflows/pytest.yml](../../../../sources/line__lighthouse/.github/workflows/pytest.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 17 | [training/standalone_eval/__init__.py](../../../../sources/line__lighthouse/training/standalone_eval/__init__.py)<br>[training/standalone_eval/eval.py](../../../../sources/line__lighthouse/training/standalone_eval/eval.py)<br>[training/standalone_eval/README.md](../../../../sources/line__lighthouse/training/standalone_eval/README.md)<br>[training/standalone_eval/sample_val_preds_metrics_raw.json](../../../../sources/line__lighthouse/training/standalone_eval/sample_val_preds_metrics_raw.json)<br>[training/standalone_eval/sample_val_preds.jsonl](../../../../sources/line__lighthouse/training/standalone_eval/sample_val_preds.jsonl)<br>[training/standalone_eval/utils.py](../../../../sources/line__lighthouse/training/standalone_eval/utils.py)<br>[tests/test_models.py](../../../../sources/line__lighthouse/tests/test_models.py)<br>[tests/weights/.gitkeep](../../../../sources/line__lighthouse/tests/weights/.gitkeep) |
| security | 0 | not obvious |
| ci | 2 | [.github/workflows/mypy_ruff.yml](../../../../sources/line__lighthouse/.github/workflows/mypy_ruff.yml)<br>[.github/workflows/pytest.yml](../../../../sources/line__lighthouse/.github/workflows/pytest.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 2 | [README.md](../../../../sources/line__lighthouse/README.md)<br>[training/standalone_eval/README.md](../../../../sources/line__lighthouse/training/standalone_eval/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 17 | [training/standalone_eval/__init__.py](../../../../sources/line__lighthouse/training/standalone_eval/__init__.py)<br>[training/standalone_eval/eval.py](../../../../sources/line__lighthouse/training/standalone_eval/eval.py)<br>[training/standalone_eval/README.md](../../../../sources/line__lighthouse/training/standalone_eval/README.md)<br>[training/standalone_eval/sample_val_preds_metrics_raw.json](../../../../sources/line__lighthouse/training/standalone_eval/sample_val_preds_metrics_raw.json)<br>[training/standalone_eval/sample_val_preds.jsonl](../../../../sources/line__lighthouse/training/standalone_eval/sample_val_preds.jsonl)<br>[training/standalone_eval/utils.py](../../../../sources/line__lighthouse/training/standalone_eval/utils.py) |
| CI workflows | 2 | [.github/workflows/mypy_ruff.yml](../../../../sources/line__lighthouse/.github/workflows/mypy_ruff.yml)<br>[.github/workflows/pytest.yml](../../../../sources/line__lighthouse/.github/workflows/pytest.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `README.md`, `training/standalone_eval/README.md`, `training/standalone_eval/__init__.py`.
2. Verify behavior through test/eval files: `training/standalone_eval/__init__.py`, `training/standalone_eval/eval.py`, `training/standalone_eval/README.md`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 EMNLP2024 Demo , ICASSP 2025 , ICASSP 2026 A user friendly library for reproducible video moment retrieval and highlight. 핵심 구조 신호는 Python, README.md, LICENSE, tests, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
