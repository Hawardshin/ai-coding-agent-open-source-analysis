# naver/nam-sdk-android Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Naver Ad Manager SDK for Android

## 요약

- 조사 단위: `sources/naver__nam-sdk-android` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 132 files, 70 directories, depth score 56, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 security/policy surface 구조로 읽힌다. 핵심 소스 근거는 ci=.github/workflows/android.yml, .github/workflows/spotless.yml, .github/workflows/stale.yml이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/nam-sdk-android |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | Java |
| Stars | 16 |
| Forks | none |
| License | NOASSERTION |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver__nam-sdk-android](../../../../sources/naver__nam-sdk-android) |
| Existing report | [reports/korea-trending/repositories/naver__nam-sdk-android.md](../../../korea-trending/repositories/naver__nam-sdk-android.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 132 / 70 |
| Max observed depth | 9 |
| Top directories | .github, docs, gradle, java-sample, kotlin-sample, mediation |
| Top extensions | .xml: 39, .md: 28, .webp: 20, .kt: 10, .java: 9, (none): 7, .yml: 6, .kts: 3, .png: 3, .pro: 2, .properties: 2, .bat: 1 |
| Source patterns | security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 13 |
| .github | ci surface | 1 |
| gradle | top-level component | 1 |
| java-sample | top-level component | 1 |
| kotlin-sample | top-level component | 1 |
| mediation | top-level component | 1 |


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
| ci | [.github/workflows/android.yml](../../../../sources/naver__nam-sdk-android/.github/workflows/android.yml) | ci signal |
| ci | [.github/workflows/spotless.yml](../../../../sources/naver__nam-sdk-android/.github/workflows/spotless.yml) | ci signal |
| ci | [.github/workflows/stale.yml](../../../../sources/naver__nam-sdk-android/.github/workflows/stale.yml) | ci signal |
| docs | [README.md](../../../../sources/naver__nam-sdk-android/README.md) | docs signal |
| docs | [mediation/vungle/README.md](../../../../sources/naver__nam-sdk-android/mediation/vungle/README.md) | docs signal |
| docs | [mediation/unity/README.md](../../../../sources/naver__nam-sdk-android/mediation/unity/README.md) | docs signal |
| docs | [mediation/teads/README.md](../../../../sources/naver__nam-sdk-android/mediation/teads/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 2 | [kotlin-sample/src/main/res/xml/network_security_config.xml](../../../../sources/naver__nam-sdk-android/kotlin-sample/src/main/res/xml/network_security_config.xml)<br>[java-sample/src/main/res/xml/network_security_config.xml](../../../../sources/naver__nam-sdk-android/java-sample/src/main/res/xml/network_security_config.xml) |
| ci | 3 | [.github/workflows/android.yml](../../../../sources/naver__nam-sdk-android/.github/workflows/android.yml)<br>[.github/workflows/spotless.yml](../../../../sources/naver__nam-sdk-android/.github/workflows/spotless.yml)<br>[.github/workflows/stale.yml](../../../../sources/naver__nam-sdk-android/.github/workflows/stale.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 29 | [README.md](../../../../sources/naver__nam-sdk-android/README.md)<br>[mediation/vungle/README.md](../../../../sources/naver__nam-sdk-android/mediation/vungle/README.md)<br>[mediation/unity/README.md](../../../../sources/naver__nam-sdk-android/mediation/unity/README.md)<br>[mediation/teads/README.md](../../../../sources/naver__nam-sdk-android/mediation/teads/README.md)<br>[mediation/pangle/README.md](../../../../sources/naver__nam-sdk-android/mediation/pangle/README.md)<br>[mediation/nda/README.md](../../../../sources/naver__nam-sdk-android/mediation/nda/README.md)<br>[mediation/moloco/README.md](../../../../sources/naver__nam-sdk-android/mediation/moloco/README.md)<br>[mediation/lan/README.md](../../../../sources/naver__nam-sdk-android/mediation/lan/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 3 | [.github/workflows/android.yml](../../../../sources/naver__nam-sdk-android/.github/workflows/android.yml)<br>[.github/workflows/spotless.yml](../../../../sources/naver__nam-sdk-android/.github/workflows/spotless.yml)<br>[.github/workflows/stale.yml](../../../../sources/naver__nam-sdk-android/.github/workflows/stale.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 2 | [kotlin-sample/src/main/res/xml/network_security_config.xml](../../../../sources/naver__nam-sdk-android/kotlin-sample/src/main/res/xml/network_security_config.xml)<br>[java-sample/src/main/res/xml/network_security_config.xml](../../../../sources/naver__nam-sdk-android/java-sample/src/main/res/xml/network_security_config.xml) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious; test/eval path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `.github/workflows/android.yml`, `.github/workflows/spotless.yml`, `.github/workflows/stale.yml`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 Naver Ad Manager SDK for Android. 핵심 구조 신호는 Java, README.md, ci, docs, spec-artifacts이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
