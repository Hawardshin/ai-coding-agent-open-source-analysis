# line/line-sdk-android Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

LINE SDK for Android lets you integrate LINE into your Android app to create a more engaging experience for your users.

## 요약

- 조사 단위: `sources/line__line-sdk-android` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 396 files, 125 directories, depth score 71, key references 5개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 retrieval/vector path, eval/test harness, security/policy surface 구조로 읽힌다. 핵심 소스 근거는 ci=.github/workflows/ossrh.yml, .github/workflows/pull-request-ci.yml이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 5개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | line/line-sdk-android |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | Java |
| Stars | 150 |
| Forks | 53 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/line__line-sdk-android](../../../../sources/line__line-sdk-android) |
| Existing report | [reports/korea-trending/repositories/line__line-sdk-android.md](../../../korea-trending/repositories/line__line-sdk-android.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 396 / 125 |
| Max observed depth | 11 |
| Top directories | .github, app, gradle, line-sdk, templates |
| Top extensions | .java: 175, .xml: 51, .png: 49, .kt: 34, .cs: 31, .gif: 8, .jpg: 7, .js: 6, (none): 6, .css: 4, .gradle: 4, .md: 3 |
| Source patterns | retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| app | top-level component | 1 |
| gradle | top-level component | 1 |
| line-sdk | top-level component | 1 |
| templates | top-level component | 1 |


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
| ci | [.github/workflows/ossrh.yml](../../../../sources/line__line-sdk-android/.github/workflows/ossrh.yml) | ci signal |
| ci | [.github/workflows/pull-request-ci.yml](../../../../sources/line__line-sdk-android/.github/workflows/pull-request-ci.yml) | ci signal |
| docs | [README.md](../../../../sources/line__line-sdk-android/README.md) | docs signal |
| eval | [line-sdk/src/test/java/com/linecorp/linesdk/LineAccessTokenTest.java](../../../../sources/line__line-sdk-android/line-sdk/src/test/java/com/linecorp/linesdk/LineAccessTokenTest.java) | eval support |
| eval | [line-sdk/src/test/java/com/linecorp/linesdk/LineApiErrorTest.java](../../../../sources/line__line-sdk-android/line-sdk/src/test/java/com/linecorp/linesdk/LineApiErrorTest.java) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 1 | [templates/index.cs](../../../../sources/line__line-sdk-android/templates/index.cs) |
| spec | 0 | not obvious |
| eval | 48 | [line-sdk/src/test/java/com/linecorp/linesdk/LineAccessTokenTest.java](../../../../sources/line__line-sdk-android/line-sdk/src/test/java/com/linecorp/linesdk/LineAccessTokenTest.java)<br>[line-sdk/src/test/java/com/linecorp/linesdk/LineApiErrorTest.java](../../../../sources/line__line-sdk-android/line-sdk/src/test/java/com/linecorp/linesdk/LineApiErrorTest.java)<br>[line-sdk/src/test/java/com/linecorp/linesdk/LineCredentialTest.java](../../../../sources/line__line-sdk-android/line-sdk/src/test/java/com/linecorp/linesdk/LineCredentialTest.java)<br>[line-sdk/src/test/java/com/linecorp/linesdk/LineFriendProfileTest.java](../../../../sources/line__line-sdk-android/line-sdk/src/test/java/com/linecorp/linesdk/LineFriendProfileTest.java)<br>[line-sdk/src/test/java/com/linecorp/linesdk/LineGroupTest.java](../../../../sources/line__line-sdk-android/line-sdk/src/test/java/com/linecorp/linesdk/LineGroupTest.java)<br>[line-sdk/src/test/java/com/linecorp/linesdk/LineProfileTest.java](../../../../sources/line__line-sdk-android/line-sdk/src/test/java/com/linecorp/linesdk/LineProfileTest.java)<br>[line-sdk/src/test/java/com/linecorp/linesdk/LineSdkTestRunner.java](../../../../sources/line__line-sdk-android/line-sdk/src/test/java/com/linecorp/linesdk/LineSdkTestRunner.java)<br>[line-sdk/src/test/java/com/linecorp/linesdk/ManifestParserTest.kt](../../../../sources/line__line-sdk-android/line-sdk/src/test/java/com/linecorp/linesdk/ManifestParserTest.kt) |
| security | 23 | [line-sdk/src/test/java/com/linecorp/linesdk/auth/LineAuthenticationConfigTest.java](../../../../sources/line__line-sdk-android/line-sdk/src/test/java/com/linecorp/linesdk/auth/LineAuthenticationConfigTest.java)<br>[line-sdk/src/test/java/com/linecorp/linesdk/auth/LineLoginResultTest.java](../../../../sources/line__line-sdk-android/line-sdk/src/test/java/com/linecorp/linesdk/auth/LineLoginResultTest.java)<br>[line-sdk/src/test/java/com/linecorp/linesdk/auth/internal/BrowserAuthenticationApiTest.java](../../../../sources/line__line-sdk-android/line-sdk/src/test/java/com/linecorp/linesdk/auth/internal/BrowserAuthenticationApiTest.java)<br>[line-sdk/src/test/java/com/linecorp/linesdk/auth/internal/LineAppVersionTest.java](../../../../sources/line__line-sdk-android/line-sdk/src/test/java/com/linecorp/linesdk/auth/internal/LineAppVersionTest.java)<br>[line-sdk/src/test/java/com/linecorp/linesdk/auth/internal/LineAuthenticationControllerTest.java](../../../../sources/line__line-sdk-android/line-sdk/src/test/java/com/linecorp/linesdk/auth/internal/LineAuthenticationControllerTest.java)<br>[line-sdk/src/test/java/com/linecorp/linesdk/auth/internal/LineAuthenticationStatusTest.java](../../../../sources/line__line-sdk-android/line-sdk/src/test/java/com/linecorp/linesdk/auth/internal/LineAuthenticationStatusTest.java)<br>[line-sdk/src/main/java/com/linecorp/linesdk/internal/security/TLSSocketFactory.java](../../../../sources/line__line-sdk-android/line-sdk/src/main/java/com/linecorp/linesdk/internal/security/TLSSocketFactory.java)<br>[line-sdk/src/main/java/com/linecorp/linesdk/internal/security/encryption/CipherData.kt](../../../../sources/line__line-sdk-android/line-sdk/src/main/java/com/linecorp/linesdk/internal/security/encryption/CipherData.kt) |
| ci | 2 | [.github/workflows/ossrh.yml](../../../../sources/line__line-sdk-android/.github/workflows/ossrh.yml)<br>[.github/workflows/pull-request-ci.yml](../../../../sources/line__line-sdk-android/.github/workflows/pull-request-ci.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/line__line-sdk-android/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 48 | [line-sdk/src/test/java/com/linecorp/linesdk/LineAccessTokenTest.java](../../../../sources/line__line-sdk-android/line-sdk/src/test/java/com/linecorp/linesdk/LineAccessTokenTest.java)<br>[line-sdk/src/test/java/com/linecorp/linesdk/LineApiErrorTest.java](../../../../sources/line__line-sdk-android/line-sdk/src/test/java/com/linecorp/linesdk/LineApiErrorTest.java)<br>[line-sdk/src/test/java/com/linecorp/linesdk/LineCredentialTest.java](../../../../sources/line__line-sdk-android/line-sdk/src/test/java/com/linecorp/linesdk/LineCredentialTest.java)<br>[line-sdk/src/test/java/com/linecorp/linesdk/LineFriendProfileTest.java](../../../../sources/line__line-sdk-android/line-sdk/src/test/java/com/linecorp/linesdk/LineFriendProfileTest.java)<br>[line-sdk/src/test/java/com/linecorp/linesdk/LineGroupTest.java](../../../../sources/line__line-sdk-android/line-sdk/src/test/java/com/linecorp/linesdk/LineGroupTest.java)<br>[line-sdk/src/test/java/com/linecorp/linesdk/LineProfileTest.java](../../../../sources/line__line-sdk-android/line-sdk/src/test/java/com/linecorp/linesdk/LineProfileTest.java) |
| CI workflows | 2 | [.github/workflows/ossrh.yml](../../../../sources/line__line-sdk-android/.github/workflows/ossrh.yml)<br>[.github/workflows/pull-request-ci.yml](../../../../sources/line__line-sdk-android/.github/workflows/pull-request-ci.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 23 | [line-sdk/src/test/java/com/linecorp/linesdk/auth/LineAuthenticationConfigTest.java](../../../../sources/line__line-sdk-android/line-sdk/src/test/java/com/linecorp/linesdk/auth/LineAuthenticationConfigTest.java)<br>[line-sdk/src/test/java/com/linecorp/linesdk/auth/LineLoginResultTest.java](../../../../sources/line__line-sdk-android/line-sdk/src/test/java/com/linecorp/linesdk/auth/LineLoginResultTest.java)<br>[line-sdk/src/test/java/com/linecorp/linesdk/auth/internal/BrowserAuthenticationApiTest.java](../../../../sources/line__line-sdk-android/line-sdk/src/test/java/com/linecorp/linesdk/auth/internal/BrowserAuthenticationApiTest.java)<br>[line-sdk/src/test/java/com/linecorp/linesdk/auth/internal/LineAppVersionTest.java](../../../../sources/line__line-sdk-android/line-sdk/src/test/java/com/linecorp/linesdk/auth/internal/LineAppVersionTest.java)<br>[line-sdk/src/test/java/com/linecorp/linesdk/auth/internal/LineAuthenticationControllerTest.java](../../../../sources/line__line-sdk-android/line-sdk/src/test/java/com/linecorp/linesdk/auth/internal/LineAuthenticationControllerTest.java)<br>[line-sdk/src/test/java/com/linecorp/linesdk/auth/internal/LineAuthenticationStatusTest.java](../../../../sources/line__line-sdk-android/line-sdk/src/test/java/com/linecorp/linesdk/auth/internal/LineAuthenticationStatusTest.java) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `.github/workflows/ossrh.yml`, `.github/workflows/pull-request-ci.yml`, `README.md`.
2. Inspect retrieval/memory/indexing through: `templates/index.cs`.
3. Verify behavior through test/eval files: `line-sdk/src/test/java/com/linecorp/linesdk/LineAccessTokenTest.java`, `line-sdk/src/test/java/com/linecorp/linesdk/LineApiErrorTest.java`, `line-sdk/src/test/java/com/linecorp/linesdk/LineCredentialTest.java`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 LINE SDK for Android lets you integrate LINE into your Android app to create a more engaging experience for your users.. 핵심 구조 신호는 Java, build.gradle, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
