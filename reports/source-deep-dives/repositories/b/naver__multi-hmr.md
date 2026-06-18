# naver/multi-hmr Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Pytorch demo code and models for Multi-HMR

## 요약

- 조사 단위: `sources/naver__multi-hmr` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 41 files, 6 directories, depth score 48, key references 2개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 config=requirements.txt이고, 의존성 단서는 torch, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 2개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/multi-hmr |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 412 |
| Forks | 34 |
| License | NOASSERTION |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver__multi-hmr](../../../../sources/naver__multi-hmr) |
| Existing report | [reports/korea-trending/repositories/naver__multi-hmr.md](../../../korea-trending/repositories/naver__multi-hmr.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 41 / 6 |
| Max observed depth | 2 |
| Top directories | assets, blocks, datasets, example_data, multi_hmr_anny, utils |
| Top extensions | .py: 26, .jpg: 7, .txt: 3, .gif: 2, .md: 1, .yaml: 1, (none): 1 |
| Source patterns | retrieval/vector path, spec/docs-driven |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| assets | top-level component | 1 |
| blocks | top-level component | 1 |
| datasets | top-level component | 1 |
| example_data | top-level component | 1 |
| multi_hmr_anny | top-level component | 1 |
| utils | top-level component | 1 |


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
| config | [requirements.txt](../../../../sources/naver__multi-hmr/requirements.txt) | config signal |
| docs | [README.md](../../../../sources/naver__multi-hmr/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 2 | [multi_hmr_anny/pos_embed.py](../../../../sources/naver__multi-hmr/multi_hmr_anny/pos_embed.py)<br>[blocks/camera_embed.py](../../../../sources/naver__multi-hmr/blocks/camera_embed.py) |
| spec | 1 | [requirements.txt](../../../../sources/naver__multi-hmr/requirements.txt) |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/naver__multi-hmr/README.md) |
| config | 1 | [requirements.txt](../../../../sources/naver__multi-hmr/requirements.txt) |


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
2. Inspect retrieval/memory/indexing through: `multi_hmr_anny/pos_embed.py`, `blocks/camera_embed.py`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Pytorch demo code and models for Multi HMR. 핵심 구조 신호는 Python, requirements.txt, README.md, torch, docs, spec-artifacts이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
