# naver/guitar Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

naver/guitar

## 요약

- 조사 단위: `sources/naver__guitar` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 401 files, 108 directories, depth score 68, key references 9개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 entrypoints=guitar/bin/GUITAR.au3, guitar/bin/GUITAR.ico, guitar/bin/GUITAR.ini이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/guitar |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | AutoIt |
| Stars | 77 |
| Forks | 18 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver__guitar](../../../../sources/naver__guitar) |
| Existing report | [reports/korea-trending/repositories/naver__guitar.md](../../../korea-trending/repositories/naver__guitar.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 401 / 108 |
| Max observed depth | 9 |
| Top directories | _include_nhn, autoit3381_guirichedit_hotfix, doc, guitar, LICENSE |
| Top extensions | .png: 201, .txt: 107, .au3: 68, .ico: 6, .bat: 4, .exe: 4, .dll: 3, .jsp: 3, .htm: 1, .ini: 1, .jpg: 1, .lng: 1 |
| Source patterns | cli-first, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| _include_nhn | top-level component | 1 |
| autoit3381_guirichedit_hotfix | top-level component | 1 |
| doc | documentation surface | 1 |
| guitar | top-level component | 1 |
| LICENSE | top-level component | 1 |


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
| entrypoints | [guitar/bin/GUITAR.au3](../../../../sources/naver__guitar/guitar/bin/GUITAR.au3) | entrypoints signal |
| entrypoints | [guitar/bin/GUITAR.ico](../../../../sources/naver__guitar/guitar/bin/GUITAR.ico) | entrypoints signal |
| entrypoints | [guitar/bin/GUITAR.ini](../../../../sources/naver__guitar/guitar/bin/GUITAR.ini) | entrypoints signal |
| entrypoints | [guitar/bin/GUITARAImageList.au3](../../../../sources/naver__guitar/guitar/bin/GUITARAImageList.au3) | entrypoints signal |
| docs | [README.md](../../../../sources/naver__guitar/README.md) | docs signal |
| docs | [guitar/bin/readme_new.txt](../../../../sources/naver__guitar/guitar/bin/readme_new.txt) | docs signal |
| docs | [guitar/bin/readme.txt](../../../../sources/naver__guitar/guitar/bin/readme.txt) | docs signal |
| docs | [doc/system.png](../../../../sources/naver__guitar/doc/system.png) | docs signal |
| eval | [_include_nhn/_monitor.au3](../../../../sources/naver__guitar/_include_nhn/_monitor.au3) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 95 | [guitar/bin/GUITAR.au3](../../../../sources/naver__guitar/guitar/bin/GUITAR.au3)<br>[guitar/bin/GUITAR.ico](../../../../sources/naver__guitar/guitar/bin/GUITAR.ico)<br>[guitar/bin/GUITAR.ini](../../../../sources/naver__guitar/guitar/bin/GUITAR.ini)<br>[guitar/bin/GUITARAImageList.au3](../../../../sources/naver__guitar/guitar/bin/GUITARAImageList.au3)<br>[guitar/bin/GUITARARecord.au3](../../../../sources/naver__guitar/guitar/bin/GUITARARecord.au3)<br>[guitar/bin/GUITARAU3VAR.au3](../../../../sources/naver__guitar/guitar/bin/GUITARAU3VAR.au3)<br>[guitar/bin/GUITARCmdReceiver.au3](../../../../sources/naver__guitar/guitar/bin/GUITARCmdReceiver.au3)<br>[guitar/bin/GUITARCmdReceiver.ico](../../../../sources/naver__guitar/guitar/bin/GUITARCmdReceiver.ico) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 1 | [_include_nhn/_monitor.au3](../../../../sources/naver__guitar/_include_nhn/_monitor.au3) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 4 | [README.md](../../../../sources/naver__guitar/README.md)<br>[guitar/bin/readme_new.txt](../../../../sources/naver__guitar/guitar/bin/readme_new.txt)<br>[guitar/bin/readme.txt](../../../../sources/naver__guitar/guitar/bin/readme.txt)<br>[doc/system.png](../../../../sources/naver__guitar/doc/system.png) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1 | [_include_nhn/_monitor.au3](../../../../sources/naver__guitar/_include_nhn/_monitor.au3) |
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
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `guitar/bin/GUITAR.au3`, `guitar/bin/GUITAR.ico`, `guitar/bin/GUITAR.ini`.
2. Trace execution through entrypoints: `guitar/bin/GUITAR.au3`, `guitar/bin/GUITAR.ico`, `guitar/bin/GUITAR.ini`.
3. Verify behavior through test/eval files: `_include_nhn/_monitor.au3`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 AutoIt, README.md, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
