# line/line-sdk-ios-swift Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Provides a modern way of implementing LINE APIs.

## 요약

- 조사 단위: `sources/line__line-sdk-ios-swift` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 559 files, 193 directories, depth score 69, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 ci=.github/workflows/ci.yaml, .github/workflows/coverage.yaml, .github/workflows/login-test.yaml이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | line/line-sdk-ios-swift |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | Swift |
| Stars | 876 |
| Forks | 98 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/line__line-sdk-ios-swift](../../../../sources/line__line-sdk-ios-swift) |
| Existing report | [reports/korea-trending/repositories/line__line-sdk-ios-swift.md](../../../korea-trending/repositories/line__line-sdk-ios-swift.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 559 / 193 |
| Max observed depth | 7 |
| Top directories | .github, fastlane, jazzy-templates, LineSDK, LineSDK.xcworkspace, LineSDKSample, LineSDKSample-SwiftUI, script |
| Top extensions | .swift: 336, .png: 65, .strings: 38, .json: 26, .plist: 13, (none): 9, .mustache: 7, .md: 6, .xcscheme: 6, .js: 5, .yaml: 5, .m: 4 |
| Source patterns | retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| fastlane | top-level component | 1 |
| jazzy-templates | top-level component | 1 |
| LineSDK | top-level component | 1 |
| LineSDK.xcworkspace | top-level component | 1 |
| LineSDKSample | top-level component | 1 |
| LineSDKSample-SwiftUI | top-level component | 1 |
| script | top-level component | 1 |


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
| ci | [.github/workflows/ci.yaml](../../../../sources/line__line-sdk-ios-swift/.github/workflows/ci.yaml) | ci signal |
| ci | [.github/workflows/coverage.yaml](../../../../sources/line__line-sdk-ios-swift/.github/workflows/coverage.yaml) | ci signal |
| ci | [.github/workflows/login-test.yaml](../../../../sources/line__line-sdk-ios-swift/.github/workflows/login-test.yaml) | ci signal |
| docs | [README.md](../../../../sources/line__line-sdk-ios-swift/README.md) | docs signal |
| docs | [fastlane/README.md](../../../../sources/line__line-sdk-ios-swift/fastlane/README.md) | docs signal |
| eval | [script/test.sh](../../../../sources/line__line-sdk-ios-swift/script/test.sh) | eval support |
| eval | [LineSDK/LineSDKTests/Crypto/SampleRSAKeys/test_private.pem](../../../../sources/line__line-sdk-ios-swift/LineSDK/LineSDKTests/Crypto/SampleRSAKeys/test_private.pem) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 8 | [LineSDK/LineSDK/Graph/Request/GetApproversInFriendsRequest.swift](../../../../sources/line__line-sdk-ios-swift/LineSDK/LineSDK/Graph/Request/GetApproversInFriendsRequest.swift)<br>[LineSDK/LineSDK/Graph/Request/GetApproversInGroupRequest.swift](../../../../sources/line__line-sdk-ios-swift/LineSDK/LineSDK/Graph/Request/GetApproversInGroupRequest.swift)<br>[LineSDK/LineSDK/Graph/Request/GetFriendsRequest.swift](../../../../sources/line__line-sdk-ios-swift/LineSDK/LineSDK/Graph/Request/GetFriendsRequest.swift)<br>[LineSDK/LineSDK/Graph/Request/GetGroupsRequest.swift](../../../../sources/line__line-sdk-ios-swift/LineSDK/LineSDK/Graph/Request/GetGroupsRequest.swift)<br>[LineSDK/LineSDK/Graph/Request/GetShareFriendsRequest.swift](../../../../sources/line__line-sdk-ios-swift/LineSDK/LineSDK/Graph/Request/GetShareFriendsRequest.swift)<br>[LineSDK/LineSDK/Graph/Request/GetShareGroupsRequest.swift](../../../../sources/line__line-sdk-ios-swift/LineSDK/LineSDK/Graph/Request/GetShareGroupsRequest.swift)<br>[LineSDK/LineSDK/Graph/Model/Group.swift](../../../../sources/line__line-sdk-ios-swift/LineSDK/LineSDK/Graph/Model/Group.swift)<br>[LineSDK/LineSDK/Graph/Model/User.swift](../../../../sources/line__line-sdk-ios-swift/LineSDK/LineSDK/Graph/Model/User.swift) |
| spec | 0 | not obvious |
| eval | 4 | [script/test.sh](../../../../sources/line__line-sdk-ios-swift/script/test.sh)<br>[LineSDK/LineSDKTests/Crypto/SampleRSAKeys/test_private.pem](../../../../sources/line__line-sdk-ios-swift/LineSDK/LineSDKTests/Crypto/SampleRSAKeys/test_private.pem)<br>[LineSDK/LineSDKTests/Crypto/SampleRSAKeys/test_public.cer](../../../../sources/line__line-sdk-ios-swift/LineSDK/LineSDKTests/Crypto/SampleRSAKeys/test_public.cer)<br>[.github/workflows/login-test.yaml](../../../../sources/line__line-sdk-ios-swift/.github/workflows/login-test.yaml) |
| security | 0 | not obvious |
| ci | 3 | [.github/workflows/ci.yaml](../../../../sources/line__line-sdk-ios-swift/.github/workflows/ci.yaml)<br>[.github/workflows/coverage.yaml](../../../../sources/line__line-sdk-ios-swift/.github/workflows/coverage.yaml)<br>[.github/workflows/login-test.yaml](../../../../sources/line__line-sdk-ios-swift/.github/workflows/login-test.yaml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 2 | [README.md](../../../../sources/line__line-sdk-ios-swift/README.md)<br>[fastlane/README.md](../../../../sources/line__line-sdk-ios-swift/fastlane/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 4 | [script/test.sh](../../../../sources/line__line-sdk-ios-swift/script/test.sh)<br>[LineSDK/LineSDKTests/Crypto/SampleRSAKeys/test_private.pem](../../../../sources/line__line-sdk-ios-swift/LineSDK/LineSDKTests/Crypto/SampleRSAKeys/test_private.pem)<br>[LineSDK/LineSDKTests/Crypto/SampleRSAKeys/test_public.cer](../../../../sources/line__line-sdk-ios-swift/LineSDK/LineSDKTests/Crypto/SampleRSAKeys/test_public.cer)<br>[.github/workflows/login-test.yaml](../../../../sources/line__line-sdk-ios-swift/.github/workflows/login-test.yaml) |
| CI workflows | 3 | [.github/workflows/ci.yaml](../../../../sources/line__line-sdk-ios-swift/.github/workflows/ci.yaml)<br>[.github/workflows/coverage.yaml](../../../../sources/line__line-sdk-ios-swift/.github/workflows/coverage.yaml)<br>[.github/workflows/login-test.yaml](../../../../sources/line__line-sdk-ios-swift/.github/workflows/login-test.yaml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `.github/workflows/ci.yaml`, `.github/workflows/coverage.yaml`, `.github/workflows/login-test.yaml`.
2. Inspect retrieval/memory/indexing through: `LineSDK/LineSDK/Graph/Request/GetApproversInFriendsRequest.swift`, `LineSDK/LineSDK/Graph/Request/GetApproversInGroupRequest.swift`, `LineSDK/LineSDK/Graph/Request/GetFriendsRequest.swift`.
3. Verify behavior through test/eval files: `script/test.sh`, `LineSDK/LineSDKTests/Crypto/SampleRSAKeys/test_private.pem`, `LineSDK/LineSDKTests/Crypto/SampleRSAKeys/test_public.cer`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 Provides a modern way of implementing LINE APIs.. 핵심 구조 신호는 Swift, README.md, LICENSE, ci, docs, spec-artifacts이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
