# kakaobrain/bassl Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

kakaobrain/bassl

## 요약

- 조사 단위: `sources/kakaobrain__bassl` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 57 files, 20 directories, depth score 65, key references 6개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 entrypoints=bassl/pretrain/main.py, bassl/finetune/main.py이고, 의존성 단서는 torch, transformers, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 6개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | kakaobrain/bassl |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 143 |
| Forks | 20 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/kakaobrain__bassl](../../../../sources/kakaobrain__bassl) |
| Existing report | [reports/korea-trending/repositories/kakaobrain__bassl.md](../../../korea-trending/repositories/kakaobrain__bassl.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 57 / 20 |
| Max observed depth | 5 |
| Top directories | bassl, imgs, scripts |
| Top extensions | .py: 37, .sh: 8, .yaml: 7, .jpg: 1, .json: 1, .md: 1, .txt: 1, (none): 1 |
| Source patterns | cli-first, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| bassl | top-level component | 1 |
| imgs | top-level component | 1 |
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
| entrypoints | [bassl/pretrain/main.py](../../../../sources/kakaobrain__bassl/bassl/pretrain/main.py) | entrypoints signal |
| entrypoints | [bassl/finetune/main.py](../../../../sources/kakaobrain__bassl/bassl/finetune/main.py) | entrypoints signal |
| config | [requirements.txt](../../../../sources/kakaobrain__bassl/requirements.txt) | config signal |
| docs | [README.md](../../../../sources/kakaobrain__bassl/README.md) | docs signal |
| eval | [bassl/pretrain/utils/metric.py](../../../../sources/kakaobrain__bassl/bassl/pretrain/utils/metric.py) | eval signal |
| eval | [bassl/finetune/utils/metric.py](../../../../sources/kakaobrain__bassl/bassl/finetune/utils/metric.py) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [bassl/pretrain/main.py](../../../../sources/kakaobrain__bassl/bassl/pretrain/main.py)<br>[bassl/finetune/main.py](../../../../sources/kakaobrain__bassl/bassl/finetune/main.py) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 1 | [requirements.txt](../../../../sources/kakaobrain__bassl/requirements.txt) |
| eval | 2 | [bassl/pretrain/utils/metric.py](../../../../sources/kakaobrain__bassl/bassl/pretrain/utils/metric.py)<br>[bassl/finetune/utils/metric.py](../../../../sources/kakaobrain__bassl/bassl/finetune/utils/metric.py) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/kakaobrain__bassl/README.md) |
| config | 1 | [requirements.txt](../../../../sources/kakaobrain__bassl/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 2 | [bassl/pretrain/utils/metric.py](../../../../sources/kakaobrain__bassl/bassl/pretrain/utils/metric.py)<br>[bassl/finetune/utils/metric.py](../../../../sources/kakaobrain__bassl/bassl/finetune/utils/metric.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `bassl/pretrain/main.py`, `bassl/finetune/main.py`, `requirements.txt`.
2. Trace execution through entrypoints: `bassl/pretrain/main.py`, `bassl/finetune/main.py`.
3. Verify behavior through test/eval files: `bassl/pretrain/utils/metric.py`, `bassl/finetune/utils/metric.py`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 Python, requirements.txt, README.md, LICENSE, torch, transformers이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
