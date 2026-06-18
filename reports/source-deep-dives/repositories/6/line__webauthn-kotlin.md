# line/webauthn-kotlin Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

WebAuthn Kotlin is an open-source toolkit for secure, password-less authentication in mobile apps. Developed in Kotlin, it integrates seamlessly with native Android apps, adhering to WebAuthn 2.0 standards for enhanced security and user experience.

## 요약

- 조사 단위: `sources/line__webauthn-kotlin` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 76 files, 36 directories, depth score 46, key references 3개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

보안/거버넌스/안전 관점에서 eval/test harness 구조로 읽힌다. 핵심 소스 근거는 ci=.github/workflows/publish.yml이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 3개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | line/webauthn-kotlin |
| Topic | Security, Governance, and Safety / 보안/거버넌스/안전 |
| Region | korea |
| Language | Kotlin |
| Stars | 24 |
| Forks | 8 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/line__webauthn-kotlin](../../../../sources/line__webauthn-kotlin) |
| Existing report | [reports/korea-trending/repositories/line__webauthn-kotlin.md](../../../korea-trending/repositories/line__webauthn-kotlin.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 76 / 36 |
| Max observed depth | 10 |
| Top directories | .github, gradle, webauthn |
| Top extensions | .kt: 56, (none): 5, .md: 4, .gradle: 3, .properties: 2, .xml: 2, .bat: 1, .jar: 1, .pro: 1, .yml: 1 |
| Source patterns | eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| gradle | top-level component | 1 |
| webauthn | source boundary | 1 |


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
| ci | [.github/workflows/publish.yml](../../../../sources/line__webauthn-kotlin/.github/workflows/publish.yml) | ci signal |
| eval | [webauthn/src/test/java/com/linecorp/webauthn/AuthenticatorTest.kt](../../../../sources/line__webauthn-kotlin/webauthn/src/test/java/com/linecorp/webauthn/AuthenticatorTest.kt) | eval support |
| eval | [webauthn/src/test/java/com/linecorp/webauthn/PublicKeyCredentialTest.kt](../../../../sources/line__webauthn-kotlin/webauthn/src/test/java/com/linecorp/webauthn/PublicKeyCredentialTest.kt) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 3 | [webauthn/src/test/java/com/linecorp/webauthn/AuthenticatorTest.kt](../../../../sources/line__webauthn-kotlin/webauthn/src/test/java/com/linecorp/webauthn/AuthenticatorTest.kt)<br>[webauthn/src/test/java/com/linecorp/webauthn/PublicKeyCredentialTest.kt](../../../../sources/line__webauthn-kotlin/webauthn/src/test/java/com/linecorp/webauthn/PublicKeyCredentialTest.kt)<br>[webauthn/src/test/java/com/linecorp/webauthn/util/MockCredentialSourceStorage.kt](../../../../sources/line__webauthn-kotlin/webauthn/src/test/java/com/linecorp/webauthn/util/MockCredentialSourceStorage.kt) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/publish.yml](../../../../sources/line__webauthn-kotlin/.github/workflows/publish.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/line__webauthn-kotlin/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 3 | [webauthn/src/test/java/com/linecorp/webauthn/AuthenticatorTest.kt](../../../../sources/line__webauthn-kotlin/webauthn/src/test/java/com/linecorp/webauthn/AuthenticatorTest.kt)<br>[webauthn/src/test/java/com/linecorp/webauthn/PublicKeyCredentialTest.kt](../../../../sources/line__webauthn-kotlin/webauthn/src/test/java/com/linecorp/webauthn/PublicKeyCredentialTest.kt)<br>[webauthn/src/test/java/com/linecorp/webauthn/util/MockCredentialSourceStorage.kt](../../../../sources/line__webauthn-kotlin/webauthn/src/test/java/com/linecorp/webauthn/util/MockCredentialSourceStorage.kt) |
| CI workflows | 1 | [.github/workflows/publish.yml](../../../../sources/line__webauthn-kotlin/.github/workflows/publish.yml) |
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

1. Start from key references: `.github/workflows/publish.yml`, `webauthn/src/test/java/com/linecorp/webauthn/AuthenticatorTest.kt`, `webauthn/src/test/java/com/linecorp/webauthn/PublicKeyCredentialTest.kt`.
2. Verify behavior through test/eval files: `webauthn/src/test/java/com/linecorp/webauthn/AuthenticatorTest.kt`, `webauthn/src/test/java/com/linecorp/webauthn/PublicKeyCredentialTest.kt`, `webauthn/src/test/java/com/linecorp/webauthn/util/MockCredentialSourceStorage.kt`.

## Existing Repository Insight

보안/거버넌스/안전 관점에서 WebAuthn Kotlin is an open source toolkit for secure, password less authentication in mobile apps. Developed in Kotlin, . 핵심 구조 신호는 Kotlin, build.gradle, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 보안/거버넌스/안전 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
