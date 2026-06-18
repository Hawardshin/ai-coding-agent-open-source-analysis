# naver-ai/tobo Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

[NeurIPS 2025] Official PyTorch implementation of "Token Bottleneck: One Token to Remember Dynamics"

## 요약

- 조사 단위: `sources/naver-ai__tobo` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 144 files, 11 directories, depth score 56, key references 5개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=README.md, docs/Evaluation.md, docs/teaser.png이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 5개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver-ai/tobo |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 32 |
| Forks | 1 |
| License | NOASSERTION |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver-ai__tobo](../../../../sources/naver-ai__tobo) |
| Existing report | [reports/korea-trending/repositories/naver-ai__tobo.md](../../../korea-trending/repositories/naver-ai__tobo.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 144 / 11 |
| Max observed depth | 4 |
| Top directories | docs, timm, util |
| Top extensions | .py: 132, .txt: 6, .md: 3, (none): 2, .png: 1 |
| Source patterns | retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 5 |
| timm | top-level component | 1 |
| util | top-level component | 1 |


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
| docs | [README.md](../../../../sources/naver-ai__tobo/README.md) | docs signal |
| docs | [docs/Evaluation.md](../../../../sources/naver-ai__tobo/docs/Evaluation.md) | docs signal |
| docs | [docs/teaser.png](../../../../sources/naver-ai__tobo/docs/teaser.png) | docs signal |
| docs | [docs/Train.md](../../../../sources/naver-ai__tobo/docs/Train.md) | docs signal |
| eval | [timm/models/layers/test_time_pool.py](../../../../sources/naver-ai__tobo/timm/models/layers/test_time_pool.py) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 1 | [util/pos_embed.py](../../../../sources/naver-ai__tobo/util/pos_embed.py) |
| spec | 0 | not obvious |
| eval | 2 | [timm/models/layers/test_time_pool.py](../../../../sources/naver-ai__tobo/timm/models/layers/test_time_pool.py)<br>[docs/Evaluation.md](../../../../sources/naver-ai__tobo/docs/Evaluation.md) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 4 | [README.md](../../../../sources/naver-ai__tobo/README.md)<br>[docs/Evaluation.md](../../../../sources/naver-ai__tobo/docs/Evaluation.md)<br>[docs/teaser.png](../../../../sources/naver-ai__tobo/docs/teaser.png)<br>[docs/Train.md](../../../../sources/naver-ai__tobo/docs/Train.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 2 | [timm/models/layers/test_time_pool.py](../../../../sources/naver-ai__tobo/timm/models/layers/test_time_pool.py)<br>[docs/Evaluation.md](../../../../sources/naver-ai__tobo/docs/Evaluation.md) |
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

1. Start from key references: `README.md`, `docs/Evaluation.md`, `docs/teaser.png`.
2. Inspect retrieval/memory/indexing through: `util/pos_embed.py`.
3. Verify behavior through test/eval files: `timm/models/layers/test_time_pool.py`, `docs/Evaluation.md`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 NeurIPS 2025 Official PyTorch implementation of "Token Bottleneck One Token to Remember Dynamics". 핵심 구조 신호는 Python, README.md, LICENSE, docs, spec-artifacts이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
