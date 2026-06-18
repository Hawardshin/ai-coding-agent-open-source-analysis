# naver/naveridlogin-sdk-android Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

네이버 아이디로 로그인 SDK (안드로이드)

## 요약

- 조사 단위: `sources/naver__naveridlogin-sdk-android` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 135 files, 83 directories, depth score 40, key references 1개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 security/policy surface 구조로 읽힌다. 핵심 소스 근거는 docs=README.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 1개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/naveridlogin-sdk-android |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | Kotlin |
| Stars | 124 |
| Forks | 35 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/naver__naveridlogin-sdk-android](../../../../sources/naver__naveridlogin-sdk-android) |
| Existing report | [reports/korea-trending/repositories/naver__naveridlogin-sdk-android.md](../../../korea-trending/repositories/naver__naveridlogin-sdk-android.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 135 / 83 |
| Max observed depth | 11 |
| Top directories | .github, buildSrc, gradle, Nid-OAuth, Samples |
| Top extensions | .kt: 70, .xml: 24, .png: 15, (none): 6, .kts: 5, .md: 5, .pro: 3, .properties: 3, .bat: 1, .jar: 1, .json: 1, .toml: 1 |
| Source patterns | security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| buildSrc | source boundary | 1 |
| gradle | top-level component | 1 |
| Nid-OAuth | top-level component | 1 |
| Samples | top-level component | 1 |


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
| docs | [README.md](../../../../sources/naver__naveridlogin-sdk-android/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 91 | [Samples/src/main/java/com/navercorp/nid/oauth/sample/LegacyActivity.kt](../../../../sources/naver__naveridlogin-sdk-android/Samples/src/main/java/com/navercorp/nid/oauth/sample/LegacyActivity.kt)<br>[Samples/src/main/java/com/navercorp/nid/oauth/sample/MainActivity.kt](../../../../sources/naver__naveridlogin-sdk-android/Samples/src/main/java/com/navercorp/nid/oauth/sample/MainActivity.kt)<br>[Nid-OAuth/.gitignore](../../../../sources/naver__naveridlogin-sdk-android/Nid-OAuth/.gitignore)<br>[Nid-OAuth/build.gradle.kts](../../../../sources/naver__naveridlogin-sdk-android/Nid-OAuth/build.gradle.kts)<br>[Nid-OAuth/proguard-rules-consumer.pro](../../../../sources/naver__naveridlogin-sdk-android/Nid-OAuth/proguard-rules-consumer.pro)<br>[Nid-OAuth/proguard-rules.pro](../../../../sources/naver__naveridlogin-sdk-android/Nid-OAuth/proguard-rules.pro)<br>[Nid-OAuth/src/main/AndroidManifest.xml](../../../../sources/naver__naveridlogin-sdk-android/Nid-OAuth/src/main/AndroidManifest.xml)<br>[Nid-OAuth/src/main/res/values-zh-rTW/message.xml](../../../../sources/naver__naveridlogin-sdk-android/Nid-OAuth/src/main/res/values-zh-rTW/message.xml) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/naver__naveridlogin-sdk-android/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 91 | [Samples/src/main/java/com/navercorp/nid/oauth/sample/LegacyActivity.kt](../../../../sources/naver__naveridlogin-sdk-android/Samples/src/main/java/com/navercorp/nid/oauth/sample/LegacyActivity.kt)<br>[Samples/src/main/java/com/navercorp/nid/oauth/sample/MainActivity.kt](../../../../sources/naver__naveridlogin-sdk-android/Samples/src/main/java/com/navercorp/nid/oauth/sample/MainActivity.kt)<br>[Nid-OAuth/.gitignore](../../../../sources/naver__naveridlogin-sdk-android/Nid-OAuth/.gitignore)<br>[Nid-OAuth/build.gradle.kts](../../../../sources/naver__naveridlogin-sdk-android/Nid-OAuth/build.gradle.kts)<br>[Nid-OAuth/proguard-rules-consumer.pro](../../../../sources/naver__naveridlogin-sdk-android/Nid-OAuth/proguard-rules-consumer.pro)<br>[Nid-OAuth/proguard-rules.pro](../../../../sources/naver__naveridlogin-sdk-android/Nid-OAuth/proguard-rules.pro) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious; test/eval path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `README.md`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 네이버 아이디로 로그인 SDK 안드로이드. 핵심 구조 신호는 Kotlin, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
