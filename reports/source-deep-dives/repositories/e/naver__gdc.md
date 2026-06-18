# naver/gdc Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Code accompanying our papers on the "Generative Distributional Control" framework

## 요약

- 조사 단위: `sources/naver__gdc` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 157 files, 44 directories, depth score 70, key references 10개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 config=rm_vs_dm/requirements.txt, dpg/requirements.txt, cdpg/requirements.txt이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/gdc |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 118 |
| Forks | 20 |
| License | NOASSERTION |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver__gdc](../../../../sources/naver__gdc) |
| Existing report | [reports/korea-trending/repositories/naver__gdc.md](../../../korea-trending/repositories/naver__gdc.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 157 / 44 |
| Max observed depth | 6 |
| Top directories | cdpg, dpg, rm_vs_dm |
| Top extensions | .py: 50, .txt: 47, .json: 38, .pt: 9, .md: 5, .csv: 4, (none): 4 |
| Source patterns | spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| cdpg | top-level component | 1 |
| dpg | top-level component | 1 |
| rm_vs_dm | top-level component | 1 |


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
| config | [rm_vs_dm/requirements.txt](../../../../sources/naver__gdc/rm_vs_dm/requirements.txt) | config signal |
| config | [dpg/requirements.txt](../../../../sources/naver__gdc/dpg/requirements.txt) | config signal |
| config | [cdpg/requirements.txt](../../../../sources/naver__gdc/cdpg/requirements.txt) | config signal |
| docs | [README.md](../../../../sources/naver__gdc/README.md) | docs signal |
| docs | [rm_vs_dm/README.md](../../../../sources/naver__gdc/rm_vs_dm/README.md) | docs signal |
| docs | [dpg/README.md](../../../../sources/naver__gdc/dpg/README.md) | docs signal |
| docs | [cdpg/README.md](../../../../sources/naver__gdc/cdpg/README.md) | docs signal |
| eval | [cdpg/contexts/cnndm_test.csv](../../../../sources/naver__gdc/cdpg/contexts/cnndm_test.csv) | eval signal |
| eval | [cdpg/contexts/europarl-v7_en-fr_numbers_test.csv](../../../../sources/naver__gdc/cdpg/contexts/europarl-v7_en-fr_numbers_test.csv) | eval signal |
| eval | [cdpg/contexts/functions_eval.csv](../../../../sources/naver__gdc/cdpg/contexts/functions_eval.csv) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 3 | [rm_vs_dm/requirements.txt](../../../../sources/naver__gdc/rm_vs_dm/requirements.txt)<br>[dpg/requirements.txt](../../../../sources/naver__gdc/dpg/requirements.txt)<br>[cdpg/requirements.txt](../../../../sources/naver__gdc/cdpg/requirements.txt) |
| eval | 3 | [cdpg/contexts/cnndm_test.csv](../../../../sources/naver__gdc/cdpg/contexts/cnndm_test.csv)<br>[cdpg/contexts/europarl-v7_en-fr_numbers_test.csv](../../../../sources/naver__gdc/cdpg/contexts/europarl-v7_en-fr_numbers_test.csv)<br>[cdpg/contexts/functions_eval.csv](../../../../sources/naver__gdc/cdpg/contexts/functions_eval.csv) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 4 | [README.md](../../../../sources/naver__gdc/README.md)<br>[rm_vs_dm/README.md](../../../../sources/naver__gdc/rm_vs_dm/README.md)<br>[dpg/README.md](../../../../sources/naver__gdc/dpg/README.md)<br>[cdpg/README.md](../../../../sources/naver__gdc/cdpg/README.md) |
| config | 3 | [rm_vs_dm/requirements.txt](../../../../sources/naver__gdc/rm_vs_dm/requirements.txt)<br>[dpg/requirements.txt](../../../../sources/naver__gdc/dpg/requirements.txt)<br>[cdpg/requirements.txt](../../../../sources/naver__gdc/cdpg/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 3 | [cdpg/contexts/cnndm_test.csv](../../../../sources/naver__gdc/cdpg/contexts/cnndm_test.csv)<br>[cdpg/contexts/europarl-v7_en-fr_numbers_test.csv](../../../../sources/naver__gdc/cdpg/contexts/europarl-v7_en-fr_numbers_test.csv)<br>[cdpg/contexts/functions_eval.csv](../../../../sources/naver__gdc/cdpg/contexts/functions_eval.csv) |
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

1. Start from key references: `rm_vs_dm/requirements.txt`, `dpg/requirements.txt`, `cdpg/requirements.txt`.
2. Verify behavior through test/eval files: `cdpg/contexts/cnndm_test.csv`, `cdpg/contexts/europarl-v7_en-fr_numbers_test.csv`, `cdpg/contexts/functions_eval.csv`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Code accompanying our papers on the "Generative Distributional Control" framework. 핵심 구조 신호는 Python, README.md, LICENSE, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
