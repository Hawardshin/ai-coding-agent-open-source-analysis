# line/line-things-starter Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

The sample codes for LINE Things Developer Trial

## 요약

- 조사 단위: `sources/line__line-things-starter` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 42 files, 22 directories, depth score 54, key references 5개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 config=requirements.txt이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 5개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | line/line-things-starter |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | C++ |
| Stars | 92 |
| Forks | 403 |
| License | CC0-1.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/line__line-things-starter](../../../../sources/line__line-things-starter) |
| Existing report | [reports/korea-trending/repositories/line__line-things-starter.md](../../../korea-trending/repositories/line__line-things-starter.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 42 / 22 |
| Max observed depth | 4 |
| Top directories | bot, esp32, liff-app, line-things-dev-board, m5stack, m5stick-c, microbit, nrf52, obniz, puckjs |
| Top extensions | .md: 22, .ino: 6, .html: 2, .js: 2, .png: 2, .txt: 2, (none): 2, .css: 1, .gif: 1, .json: 1, .py: 1 |
| Source patterns | retrieval/vector path, spec/docs-driven |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| bot | top-level component | 1 |
| esp32 | top-level component | 1 |
| liff-app | top-level component | 1 |
| line-things-dev-board | top-level component | 1 |
| m5stack | top-level component | 1 |
| m5stick-c | top-level component | 1 |
| microbit | top-level component | 1 |
| nrf52 | top-level component | 1 |
| obniz | top-level component | 1 |
| puckjs | top-level component | 1 |


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
| config | [requirements.txt](../../../../sources/line__line-things-starter/requirements.txt) | config signal |
| docs | [README.ja.md](../../../../sources/line__line-things-starter/README.ja.md) | docs signal |
| docs | [README.md](../../../../sources/line__line-things-starter/README.md) | docs signal |
| docs | [puckjs/README.md](../../../../sources/line__line-things-starter/puckjs/README.md) | docs signal |
| docs | [obniz/README.ja.md](../../../../sources/line__line-things-starter/obniz/README.ja.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 1 | [liff-app/index.html](../../../../sources/line__line-things-starter/liff-app/index.html) |
| spec | 1 | [requirements.txt](../../../../sources/line__line-things-starter/requirements.txt) |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 21 | [README.ja.md](../../../../sources/line__line-things-starter/README.ja.md)<br>[README.md](../../../../sources/line__line-things-starter/README.md)<br>[puckjs/README.md](../../../../sources/line__line-things-starter/puckjs/README.md)<br>[obniz/README.ja.md](../../../../sources/line__line-things-starter/obniz/README.ja.md)<br>[obniz/README.md](../../../../sources/line__line-things-starter/obniz/README.md)<br>[nrf52/README.ja.md](../../../../sources/line__line-things-starter/nrf52/README.ja.md)<br>[nrf52/README.md](../../../../sources/line__line-things-starter/nrf52/README.md)<br>[microbit/README.ja.md](../../../../sources/line__line-things-starter/microbit/README.ja.md) |
| config | 1 | [requirements.txt](../../../../sources/line__line-things-starter/requirements.txt) |


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

1. Start from key references: `requirements.txt`, `README.ja.md`, `README.md`.
2. Inspect retrieval/memory/indexing through: `liff-app/index.html`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 The sample codes for LINE Things Developer Trial. 핵심 구조 신호는 C++, requirements.txt, README.md, docs, spec-artifacts이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
