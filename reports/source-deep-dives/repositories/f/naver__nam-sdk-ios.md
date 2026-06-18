# naver/nam-sdk-ios Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

naver/nam-sdk-ios

## 요약

- 조사 단위: `sources/naver__nam-sdk-ios` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 6,412 files, 2,499 directories, depth score 57, key references 5개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=README.md, Swift/Cocoapods/README.md, docs/rewarded/guide.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 5개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/nam-sdk-ios |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | C++ |
| Stars | 6 |
| Forks | 4 |
| License | NOASSERTION |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver__nam-sdk-ios](../../../../sources/naver__nam-sdk-ios) |
| Existing report | [reports/korea-trending/repositories/naver__nam-sdk-ios.md](../../../korea-trending/repositories/naver__nam-sdk-ios.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 6412 / 2499 |
| Max observed depth | 10 |
| Top directories | docs, MediationSDK, NAMSDK, Swift |
| Top extensions | (none): 1566, .h: 1360, .swiftinterface: 804, .plist: 777, .json: 502, .swiftdoc: 402, .xcprivacy: 294, .modulemap: 272, .png: 114, .swift: 102, .js: 60, .car: 40 |
| Source patterns | eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 18 |
| MediationSDK | top-level component | 1 |
| NAMSDK | top-level component | 1 |
| Swift | top-level component | 1 |


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
| docs | [README.md](../../../../sources/naver__nam-sdk-ios/README.md) | docs signal |
| docs | [Swift/Cocoapods/README.md](../../../../sources/naver__nam-sdk-ios/Swift/Cocoapods/README.md) | docs signal |
| docs | [docs/rewarded/guide.md](../../../../sources/naver__nam-sdk-ios/docs/rewarded/guide.md) | docs signal |
| docs | [docs/rewarded/images/rewarded_sample.jpg](../../../../sources/naver__nam-sdk-ios/docs/rewarded/images/rewarded_sample.jpg) | docs signal |
| eval | [NAMSDK/SPM/Tests/NAMSDKTests.swift](../../../../sources/naver__nam-sdk-ios/NAMSDK/SPM/Tests/NAMSDKTests.swift) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 1 | [NAMSDK/SPM/Tests/NAMSDKTests.swift](../../../../sources/naver__nam-sdk-ios/NAMSDK/SPM/Tests/NAMSDKTests.swift) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 19 | [README.md](../../../../sources/naver__nam-sdk-ios/README.md)<br>[Swift/Cocoapods/README.md](../../../../sources/naver__nam-sdk-ios/Swift/Cocoapods/README.md)<br>[docs/rewarded/guide.md](../../../../sources/naver__nam-sdk-ios/docs/rewarded/guide.md)<br>[docs/rewarded/images/rewarded_sample.jpg](../../../../sources/naver__nam-sdk-ios/docs/rewarded/images/rewarded_sample.jpg)<br>[docs/native/native_normal_guide.md](../../../../sources/naver__nam-sdk-ios/docs/native/native_normal_guide.md)<br>[docs/native/native_simple_guide.md](../../../../sources/naver__nam-sdk-ios/docs/native/native_simple_guide.md)<br>[docs/native/images/native_sample.png](../../../../sources/naver__nam-sdk-ios/docs/native/images/native_sample.png)<br>[docs/native/images/native_simple_sample.png](../../../../sources/naver__nam-sdk-ios/docs/native/images/native_simple_sample.png) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1 | [NAMSDK/SPM/Tests/NAMSDKTests.swift](../../../../sources/naver__nam-sdk-ios/NAMSDK/SPM/Tests/NAMSDKTests.swift) |
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

1. Start from key references: `README.md`, `Swift/Cocoapods/README.md`, `docs/rewarded/guide.md`.
2. Verify behavior through test/eval files: `NAMSDK/SPM/Tests/NAMSDKTests.swift`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 C++, README.md, docs, spec-artifacts이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
