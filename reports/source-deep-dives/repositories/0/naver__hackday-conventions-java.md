# naver/hackday-conventions-java Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

캠퍼스 핵데이 Java 코딩 컨벤션

## 요약

- 조사 단위: `sources/naver__hackday-conventions-java` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 30 files, 5 directories, depth score 47, key references 2개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/index.adoc이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 2개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/hackday-conventions-java |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | none |
| Stars | 217 |
| Forks | 155 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver__hackday-conventions-java](../../../../sources/naver__hackday-conventions-java) |
| Existing report | [reports/korea-trending/repositories/naver__hackday-conventions-java.md](../../../korea-trending/repositories/naver__hackday-conventions-java.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 30 / 5 |
| Max observed depth | 3 |
| Top directories | gradle, rule-config, src |
| Top extensions | .png: 12, .adoc: 6, .xml: 4, (none): 3, .bat: 1, .gradle: 1, .importorder: 1, .jar: 1, .properties: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 5 |
| gradle | top-level component | 1 |
| rule-config | top-level component | 1 |


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
| entrypoints | [src/index.adoc](../../../../sources/naver__hackday-conventions-java/src/index.adoc) | entrypoints signal |
| docs | [README.adoc](../../../../sources/naver__hackday-conventions-java/README.adoc) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.adoc](../../../../sources/naver__hackday-conventions-java/src/index.adoc) |
| agentRuntime | 2 | [src/tool-configs.adoc](../../../../sources/naver__hackday-conventions-java/src/tool-configs.adoc)<br>[src/tool-variables.adoc](../../../../sources/naver__hackday-conventions-java/src/tool-variables.adoc) |
| mcp | 0 | not obvious |
| retrieval | 1 | [src/index.adoc](../../../../sources/naver__hackday-conventions-java/src/index.adoc) |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.adoc](../../../../sources/naver__hackday-conventions-java/README.adoc) |
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
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious; test/eval path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `src/index.adoc`, `README.adoc`.
2. Trace execution through entrypoints: `src/index.adoc`.
3. Map agent/tool runtime through: `src/tool-configs.adoc`, `src/tool-variables.adoc`.
4. Inspect retrieval/memory/indexing through: `src/index.adoc`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 캠퍼스 핵데이 Java 코딩 컨벤션. 핵심 구조 신호는 build.gradle, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
