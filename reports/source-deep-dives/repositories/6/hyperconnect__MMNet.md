# hyperconnect/MMNet Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Code for Towards Real-Time Automatic Portrait Matting on Mobile Devices

## 요약

- 조사 단위: `sources/hyperconnect__MMNet` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 47 files, 13 directories, depth score 46, key references 4개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 config=requirements/py36-common.txt, requirements/py36-cpu.txt, requirements/py36-gpu.txt이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 4개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | hyperconnect/MMNet |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 177 |
| Forks | 35 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/hyperconnect__MMNet](../../../../sources/hyperconnect__MMNet) |
| Existing report | [reports/korea-trending/repositories/hyperconnect__MMNet.md](../../../korea-trending/repositories/hyperconnect__MMNet.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 47 / 13 |
| Max observed depth | 3 |
| Top directories | common, datasets, demo, factory, figure, helper, matting_nets, metrics, models, nets, requirements, scripts |
| Top extensions | .py: 35, .sh: 4, .txt: 3, (none): 2, .md: 1, .mp4: 1, .png: 1 |
| Source patterns | spec/docs-driven |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| common | top-level component | 1 |
| datasets | top-level component | 1 |
| demo | top-level component | 1 |
| factory | top-level component | 1 |
| figure | top-level component | 1 |
| helper | top-level component | 1 |
| matting_nets | top-level component | 1 |
| metrics | top-level component | 1 |
| models | top-level component | 1 |
| nets | top-level component | 1 |
| requirements | top-level component | 1 |
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
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| config | [requirements/py36-common.txt](../../../../sources/hyperconnect__MMNet/requirements/py36-common.txt) | config signal |
| config | [requirements/py36-cpu.txt](../../../../sources/hyperconnect__MMNet/requirements/py36-cpu.txt) | config signal |
| config | [requirements/py36-gpu.txt](../../../../sources/hyperconnect__MMNet/requirements/py36-gpu.txt) | config signal |
| docs | [readme.md](../../../../sources/hyperconnect__MMNet/readme.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 3 | [requirements/py36-common.txt](../../../../sources/hyperconnect__MMNet/requirements/py36-common.txt)<br>[requirements/py36-cpu.txt](../../../../sources/hyperconnect__MMNet/requirements/py36-cpu.txt)<br>[requirements/py36-gpu.txt](../../../../sources/hyperconnect__MMNet/requirements/py36-gpu.txt) |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [readme.md](../../../../sources/hyperconnect__MMNet/readme.md) |
| config | 3 | [requirements/py36-common.txt](../../../../sources/hyperconnect__MMNet/requirements/py36-common.txt)<br>[requirements/py36-cpu.txt](../../../../sources/hyperconnect__MMNet/requirements/py36-cpu.txt)<br>[requirements/py36-gpu.txt](../../../../sources/hyperconnect__MMNet/requirements/py36-gpu.txt) |


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

1. Start from key references: `requirements/py36-common.txt`, `requirements/py36-cpu.txt`, `requirements/py36-gpu.txt`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Code for Towards Real Time Automatic Portrait Matting on Mobile Devices. 핵심 구조 신호는 Python, README.md, LICENSE, docs, spec-artifacts이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
