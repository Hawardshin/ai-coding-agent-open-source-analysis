# naver-ai/usdm Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Official PyTorch implementation of "Paralinguistics-Aware Speech-Empowered LLMs for Natural Conversation" (NeurIPS 2024)

## 요약

- 조사 단위: `sources/naver-ai__usdm` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 60 files, 18 directories, depth score 39, key references 4개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 Python source tree 구조로 읽힌다. 핵심 소스 근거는 docs=README.md, src/README.md, src/decoder/README.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 4개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver-ai/usdm |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 95 |
| Forks | 4 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver-ai__usdm](../../../../sources/naver-ai__usdm) |
| Existing report | [reports/korea-trending/repositories/naver-ai__usdm.md](../../../korea-trending/repositories/naver-ai__usdm.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 60 / 18 |
| Max observed depth | 6 |
| Top directories | configs, figures, preprocess, samples, src |
| Top extensions | .py: 35, (none): 9, .md: 6, .png: 4, .wav: 4, .json: 2 |
| Source patterns | Python source tree |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 4 |
| configs | top-level component | 1 |
| figures | top-level component | 1 |
| preprocess | top-level component | 1 |
| samples | top-level component | 1 |


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
| docs | [README.md](../../../../sources/naver-ai__usdm/README.md) | docs signal |
| docs | [src/README.md](../../../../sources/naver-ai__usdm/src/README.md) | docs signal |
| docs | [src/decoder/README.md](../../../../sources/naver-ai__usdm/src/decoder/README.md) | docs signal |
| docs | [src/decoder/voicebox/vocoder/README.md](../../../../sources/naver-ai__usdm/src/decoder/voicebox/vocoder/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 6 | [README.md](../../../../sources/naver-ai__usdm/README.md)<br>[src/README.md](../../../../sources/naver-ai__usdm/src/README.md)<br>[src/decoder/README.md](../../../../sources/naver-ai__usdm/src/decoder/README.md)<br>[src/decoder/voicebox/vocoder/README.md](../../../../sources/naver-ai__usdm/src/decoder/voicebox/vocoder/README.md)<br>[preprocess/pre-training/README.md](../../../../sources/naver-ai__usdm/preprocess/pre-training/README.md)<br>[preprocess/fine-tuning/README.md](../../../../sources/naver-ai__usdm/preprocess/fine-tuning/README.md) |
| config | 0 | not obvious |


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
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `README.md`, `src/README.md`, `src/decoder/README.md`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Official PyTorch implementation of "Paralinguistics Aware Speech Empowered LLMs for Natural Conversation" NeurIPS 2024. 핵심 구조 신호는 Python, README.md, LICENSE, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
