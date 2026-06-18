# cykim05/heard Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

(Course Individual Project) Korean on-device LLM that reflects your past self back at decision moments. benchmark + pipeline for solo-business monologue

## 요약

- 조사 단위: `sources/cykim05__heard` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 164 files, 37 directories, depth score 67, key references 5개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

평가/관측/품질 관점에서 agent/tool runtime, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 eval=tests/__init__.py, tests/test_metrics.py, tests/test_openrouter_offline.py이고, 의존성 단서는 pydantic, torch, transformers, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 5개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 quality and evaluation comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | cykim05/heard |
| Topic | Evals, Observability, and Quality / 평가/관측/품질 |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/cykim05__heard](../../../../sources/cykim05__heard) |
| Existing report | [reports/korea-trending/repositories/cykim05__heard.md](../../../korea-trending/repositories/cykim05__heard.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 164 / 37 |
| Max observed depth | 4 |
| Top directories | .githooks, configs, data, docs, experiments, figures, report, scripts, src, tests |
| Top extensions | .py: 50, .md: 18, .log: 17, .json: 16, .jsonl: 16, (none): 12, .csv: 9, .txt: 8, .pdf: 6, .yaml: 6, .png: 4, .example: 1 |
| Source patterns | agent/tool runtime, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 16 |
| src | source boundary | 6 |
| tests | validation surface | 5 |
| configs | top-level component | 1 |
| data | top-level component | 1 |
| experiments | top-level component | 1 |
| figures | top-level component | 1 |
| report | top-level component | 1 |
| scripts | top-level component | 1 |


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
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| eval | [tests/__init__.py](../../../../sources/cykim05__heard/tests/__init__.py) | eval signal |
| eval | [tests/test_metrics.py](../../../../sources/cykim05__heard/tests/test_metrics.py) | eval signal |
| eval | [tests/test_openrouter_offline.py](../../../../sources/cykim05__heard/tests/test_openrouter_offline.py) | eval signal |
| eval | [tests/test_utterance_parse.py](../../../../sources/cykim05__heard/tests/test_utterance_parse.py) | eval signal |
| config | [requirements.txt](../../../../sources/cykim05__heard/requirements.txt) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 1 | [src/eval/runner.py](../../../../sources/cykim05__heard/src/eval/runner.py) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 1 | [requirements.txt](../../../../sources/cykim05__heard/requirements.txt) |
| eval | 9 | [tests/__init__.py](../../../../sources/cykim05__heard/tests/__init__.py)<br>[tests/test_metrics.py](../../../../sources/cykim05__heard/tests/test_metrics.py)<br>[tests/test_openrouter_offline.py](../../../../sources/cykim05__heard/tests/test_openrouter_offline.py)<br>[tests/test_utterance_parse.py](../../../../sources/cykim05__heard/tests/test_utterance_parse.py)<br>[src/eval/__init__.py](../../../../sources/cykim05__heard/src/eval/__init__.py)<br>[src/eval/judge.py](../../../../sources/cykim05__heard/src/eval/judge.py)<br>[src/eval/metrics.py](../../../../sources/cykim05__heard/src/eval/metrics.py)<br>[src/eval/runner.py](../../../../sources/cykim05__heard/src/eval/runner.py) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 16 | [README.md](../../../../sources/cykim05__heard/README.md)<br>[docs/v0.3_body_draft.md](../../../../sources/cykim05__heard/docs/v0.3_body_draft.md)<br>[docs/v0.3_tier1_draft.md](../../../../sources/cykim05__heard/docs/v0.3_tier1_draft.md)<br>[docs/plans/DATASET.md](../../../../sources/cykim05__heard/docs/plans/DATASET.md)<br>[docs/plans/GIT_WORKFLOW.md](../../../../sources/cykim05__heard/docs/plans/GIT_WORKFLOW.md)<br>[docs/plans/IMPL_DETAILS.md](../../../../sources/cykim05__heard/docs/plans/IMPL_DETAILS.md)<br>[docs/plans/PLAN.md](../../../../sources/cykim05__heard/docs/plans/PLAN.md)<br>[docs/lab_notebook/2026-04-23_day1_setup.md](../../../../sources/cykim05__heard/docs/lab_notebook/2026-04-23_day1_setup.md) |
| config | 1 | [requirements.txt](../../../../sources/cykim05__heard/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 9 | [tests/__init__.py](../../../../sources/cykim05__heard/tests/__init__.py)<br>[tests/test_metrics.py](../../../../sources/cykim05__heard/tests/test_metrics.py)<br>[tests/test_openrouter_offline.py](../../../../sources/cykim05__heard/tests/test_openrouter_offline.py)<br>[tests/test_utterance_parse.py](../../../../sources/cykim05__heard/tests/test_utterance_parse.py)<br>[src/eval/__init__.py](../../../../sources/cykim05__heard/src/eval/__init__.py)<br>[src/eval/judge.py](../../../../sources/cykim05__heard/src/eval/judge.py) |
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
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/__init__.py`, `tests/test_metrics.py`, `tests/test_openrouter_offline.py`.
2. Map agent/tool runtime through: `src/eval/runner.py`.
3. Verify behavior through test/eval files: `tests/__init__.py`, `tests/test_metrics.py`, `tests/test_openrouter_offline.py`.

## Existing Repository Insight

평가/관측/품질 관점에서 Course Individual Project Korean on device LLM that reflects your past self back at decision moments. benchmark + pipeli. 핵심 구조 신호는 Python, requirements.txt, README.md, LICENSE, pydantic, torch이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 평가/관측/품질 레포입니다. 활용 관점은 quality and evaluation comparison point이고, 후속 확인 포인트는 ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
