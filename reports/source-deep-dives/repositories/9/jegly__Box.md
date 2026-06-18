# jegly/Box Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

The most advanced, fully offline client-side AI suite on Android today.

## 요약

- 조사 단위: `sources/jegly__Box` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 437 files, 155 directories, depth score 82, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 mcp=images/box_screenshots/MCP_Add_Server.png, images/box_screenshots/Settings_Behaviour_And_MCP.png이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | jegly/Box |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Kotlin |
| Stars | 595 |
| Forks | 34 |
| License | NOASSERTION |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/jegly__Box](../../../../sources/jegly__Box) |
| Existing report | [reports/llm-wiki/repositories/jegly__Box.md](../../../llm-wiki/repositories/jegly__Box.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 437 / 155 |
| Max observed depth | 13 |
| Top directories | .github, Android, images, model_allowlists, skills |
| Top extensions | .mp3: 100, .png: 69, .kt: 46, .xml: 37, .md: 35, .html: 31, .svg: 30, .so: 18, .json: 13, .ttf: 10, (none): 10, .kts: 6 |
| Source patterns | agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| Android | top-level component | 1 |
| images | top-level component | 1 |
| model_allowlists | top-level component | 1 |
| skills | top-level component | 1 |


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
| mcp | [images/box_screenshots/MCP_Add_Server.png](../../../../sources/jegly__Box/images/box_screenshots/MCP_Add_Server.png) | mcp signal |
| mcp | [images/box_screenshots/Settings_Behaviour_And_MCP.png](../../../../sources/jegly__Box/images/box_screenshots/Settings_Behaviour_And_MCP.png) | mcp signal |
| agentRuntime | [skills/README.md](../../../../sources/jegly__Box/skills/README.md) | agentRuntime signal |
| agentRuntime | [skills/featured/virtual-piano/README.md](../../../../sources/jegly__Box/skills/featured/virtual-piano/README.md) | agentRuntime signal |
| agentRuntime | [skills/featured/virtual-piano/SKILL.md](../../../../sources/jegly__Box/skills/featured/virtual-piano/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/featured/virtual-piano/scripts/index.html](../../../../sources/jegly__Box/skills/featured/virtual-piano/scripts/index.html) | agentRuntime signal |
| eval | [Android/src/app/src/main/proto/benchmark.proto](../../../../sources/jegly__Box/Android/src/app/src/main/proto/benchmark.proto) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 153 | [skills/README.md](../../../../sources/jegly__Box/skills/README.md)<br>[skills/featured/virtual-piano/README.md](../../../../sources/jegly__Box/skills/featured/virtual-piano/README.md)<br>[skills/featured/virtual-piano/SKILL.md](../../../../sources/jegly__Box/skills/featured/virtual-piano/SKILL.md)<br>[skills/featured/virtual-piano/scripts/index.html](../../../../sources/jegly__Box/skills/featured/virtual-piano/scripts/index.html)<br>[skills/featured/virtual-piano/scripts/index.js](../../../../sources/jegly__Box/skills/featured/virtual-piano/scripts/index.js)<br>[skills/featured/virtual-piano/assets/ui.html](../../../../sources/jegly__Box/skills/featured/virtual-piano/assets/ui.html)<br>[skills/featured/virtual-piano/assets/assets/1.mp3](../../../../sources/jegly__Box/skills/featured/virtual-piano/assets/assets/1.mp3)<br>[skills/featured/virtual-piano/assets/assets/10.mp3](../../../../sources/jegly__Box/skills/featured/virtual-piano/assets/assets/10.mp3) |
| mcp | 2 | [images/box_screenshots/MCP_Add_Server.png](../../../../sources/jegly__Box/images/box_screenshots/MCP_Add_Server.png)<br>[images/box_screenshots/Settings_Behaviour_And_MCP.png](../../../../sources/jegly__Box/images/box_screenshots/Settings_Behaviour_And_MCP.png) |
| retrieval | 25 | [skills/featured/virtual-piano/scripts/index.html](../../../../sources/jegly__Box/skills/featured/virtual-piano/scripts/index.html)<br>[skills/featured/virtual-piano/scripts/index.js](../../../../sources/jegly__Box/skills/featured/virtual-piano/scripts/index.js)<br>[skills/featured/restaurant-roulette/scripts/index.html](../../../../sources/jegly__Box/skills/featured/restaurant-roulette/scripts/index.html)<br>[skills/featured/restaurant-roulette/scripts/index.js](../../../../sources/jegly__Box/skills/featured/restaurant-roulette/scripts/index.js)<br>[skills/featured/mood-music/scripts/index.html](../../../../sources/jegly__Box/skills/featured/mood-music/scripts/index.html)<br>[skills/built-in/translator/scripts/index.html](../../../../sources/jegly__Box/skills/built-in/translator/scripts/index.html)<br>[skills/built-in/text-spinner/scripts/index.html](../../../../sources/jegly__Box/skills/built-in/text-spinner/scripts/index.html)<br>[skills/built-in/query-wikipedia/scripts/index.html](../../../../sources/jegly__Box/skills/built-in/query-wikipedia/scripts/index.html) |
| spec | 0 | not obvious |
| eval | 1 | [Android/src/app/src/main/proto/benchmark.proto](../../../../sources/jegly__Box/Android/src/app/src/main/proto/benchmark.proto) |
| security | 10 | [images/box-linux_pref_internet_permission_Example.png](../../../../sources/jegly__Box/images/box-linux_pref_internet_permission_Example.png)<br>[images/box_screenshots/Settings_Theme_And_Security.png](../../../../sources/jegly__Box/images/box_screenshots/Settings_Theme_And_Security.png)<br>[Android/src/app/src/main/res/xml/network_security_config.xml](../../../../sources/jegly__Box/Android/src/app/src/main/res/xml/network_security_config.xml)<br>[Android/src/app/src/main/java/com/google/ai/edge/gallery/security/AppLockManager.kt](../../../../sources/jegly__Box/Android/src/app/src/main/java/com/google/ai/edge/gallery/security/AppLockManager.kt)<br>[Android/src/app/src/main/java/com/google/ai/edge/gallery/security/BiometricEncryptionManager.kt](../../../../sources/jegly__Box/Android/src/app/src/main/java/com/google/ai/edge/gallery/security/BiometricEncryptionManager.kt)<br>[Android/src/app/src/main/java/com/google/ai/edge/gallery/security/BiometricHelper.kt](../../../../sources/jegly__Box/Android/src/app/src/main/java/com/google/ai/edge/gallery/security/BiometricHelper.kt)<br>[Android/src/app/src/main/java/com/google/ai/edge/gallery/security/OfflineMode.kt](../../../../sources/jegly__Box/Android/src/app/src/main/java/com/google/ai/edge/gallery/security/OfflineMode.kt)<br>[Android/src/app/src/main/java/com/google/ai/edge/gallery/security/PassphraseHolder.kt](../../../../sources/jegly__Box/Android/src/app/src/main/java/com/google/ai/edge/gallery/security/PassphraseHolder.kt) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 7 | [README.md](../../../../sources/jegly__Box/README.md)<br>[skills/README.md](../../../../sources/jegly__Box/skills/README.md)<br>[skills/featured/virtual-piano/README.md](../../../../sources/jegly__Box/skills/featured/virtual-piano/README.md)<br>[skills/featured/restaurant-roulette/README.md](../../../../sources/jegly__Box/skills/featured/restaurant-roulette/README.md)<br>[skills/featured/mood-music/README.md](../../../../sources/jegly__Box/skills/featured/mood-music/README.md)<br>[model_allowlists/README.md](../../../../sources/jegly__Box/model_allowlists/README.md)<br>[Android/README.md](../../../../sources/jegly__Box/Android/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1 | [Android/src/app/src/main/proto/benchmark.proto](../../../../sources/jegly__Box/Android/src/app/src/main/proto/benchmark.proto) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 10 | [images/box-linux_pref_internet_permission_Example.png](../../../../sources/jegly__Box/images/box-linux_pref_internet_permission_Example.png)<br>[images/box_screenshots/Settings_Theme_And_Security.png](../../../../sources/jegly__Box/images/box_screenshots/Settings_Theme_And_Security.png)<br>[Android/src/app/src/main/res/xml/network_security_config.xml](../../../../sources/jegly__Box/Android/src/app/src/main/res/xml/network_security_config.xml)<br>[Android/src/app/src/main/java/com/google/ai/edge/gallery/security/AppLockManager.kt](../../../../sources/jegly__Box/Android/src/app/src/main/java/com/google/ai/edge/gallery/security/AppLockManager.kt)<br>[Android/src/app/src/main/java/com/google/ai/edge/gallery/security/BiometricEncryptionManager.kt](../../../../sources/jegly__Box/Android/src/app/src/main/java/com/google/ai/edge/gallery/security/BiometricEncryptionManager.kt)<br>[Android/src/app/src/main/java/com/google/ai/edge/gallery/security/BiometricHelper.kt](../../../../sources/jegly__Box/Android/src/app/src/main/java/com/google/ai/edge/gallery/security/BiometricHelper.kt) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `images/box_screenshots/MCP_Add_Server.png`, `images/box_screenshots/Settings_Behaviour_And_MCP.png`, `skills/README.md`.
2. Map agent/tool runtime through: `skills/README.md`, `skills/featured/virtual-piano/README.md`, `skills/featured/virtual-piano/SKILL.md`.
3. Inspect retrieval/memory/indexing through: `skills/featured/virtual-piano/scripts/index.html`, `skills/featured/virtual-piano/scripts/index.js`, `skills/featured/restaurant-roulette/scripts/index.html`.
4. Verify behavior through test/eval files: `Android/src/app/src/main/proto/benchmark.proto`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 The most advanced, fully offline client side AI suite on Android today.. 핵심 구조 신호는 Kotlin, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
