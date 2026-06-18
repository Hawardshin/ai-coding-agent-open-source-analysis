# naver-ai/cl-vs-mim Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

(ICLR 2023) Official PyTorch implementation of "What Do Self-Supervised Vision Transformers Learn?"

## 요약

- 조사 단위: `sources/naver-ai__cl-vs-mim` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 18 files, 3 directories, depth score 38, key references 2개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 config=requirements.txt이고, 의존성 단서는 torch, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 2개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver-ai/cl-vs-mim |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Jupyter Notebook |
| Stars | 116 |
| Forks | 9 |
| License | NOASSERTION |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver-ai__cl-vs-mim](../../../../sources/naver-ai__cl-vs-mim) |
| Existing report | [reports/korea-trending/repositories/naver-ai__cl-vs-mim.md](../../../korea-trending/repositories/naver-ai__cl-vs-mim.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 18 / 3 |
| Max observed depth | 2 |
| Top directories | configs, models, resources |
| Top extensions | .png: 6, .py: 5, .ipynb: 2, (none): 2, .md: 1, .txt: 1, .yaml: 1 |
| Source patterns | spec/docs-driven |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| configs | top-level component | 1 |
| models | top-level component | 1 |
| resources | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | torch |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| config | [requirements.txt](../../../../sources/naver-ai__cl-vs-mim/requirements.txt) | config signal |
| docs | [README.md](../../../../sources/naver-ai__cl-vs-mim/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 2 | [requirements.txt](../../../../sources/naver-ai__cl-vs-mim/requirements.txt)<br>[resources/architecture.png](../../../../sources/naver-ai__cl-vs-mim/resources/architecture.png) |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/naver-ai__cl-vs-mim/README.md) |
| config | 1 | [requirements.txt](../../../../sources/naver-ai__cl-vs-mim/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious; test/eval path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `requirements.txt`, `README.md`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 ICLR 2023 Official PyTorch implementation of "What Do Self Supervised Vision Transformers Learn?". 핵심 구조 신호는 Jupyter Notebook, requirements.txt, README.md, LICENSE, torch, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
