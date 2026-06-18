# jegly/Box 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

The most advanced, fully offline client-side AI suite on Android today.

## 요약

- 조사 단위: `sources/jegly__Box` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 437 files, 155 directories, depth score 76, key references 7개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 mcp=images/box_screenshots/MCP_Add_Server.png, images/box_screenshots/Settings_Behaviour_And_MCP.png이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | jegly/Box |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Kotlin |
| Stars | 595 |
| Forks | 34 |
| License | NOASSERTION |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/jegly__Box](../../../../sources/jegly__Box) |
| 기존 보고서 | [reports/llm-wiki/repositories/jegly__Box.md](../../../llm-wiki/repositories/jegly__Box.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 437 / 155 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .github, Android, images, model_allowlists, skills |
| 상위 확장자 | .mp3: 100, .png: 69, .kt: 46, .xml: 37, .md: 35, .html: 31, .svg: 30, .so: 18, .json: 13, .ttf: 10, (none): 10, .kts: 6 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| Android | top-level component | 1 |
| images | top-level component | 1 |
| model_allowlists | top-level component | 1 |
| skills | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [images/box_screenshots/MCP_Add_Server.png](../../../../sources/jegly__Box/images/box_screenshots/MCP_Add_Server.png) | mcp signal |
| mcp | [images/box_screenshots/Settings_Behaviour_And_MCP.png](../../../../sources/jegly__Box/images/box_screenshots/Settings_Behaviour_And_MCP.png) | mcp signal |
| agentRuntime | [skills/README.md](../../../../sources/jegly__Box/skills/README.md) | agentRuntime signal |
| agentRuntime | [skills/featured/virtual-piano/README.md](../../../../sources/jegly__Box/skills/featured/virtual-piano/README.md) | agentRuntime signal |
| agentRuntime | [skills/featured/virtual-piano/SKILL.md](../../../../sources/jegly__Box/skills/featured/virtual-piano/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/featured/virtual-piano/scripts/index.html](../../../../sources/jegly__Box/skills/featured/virtual-piano/scripts/index.html) | agentRuntime signal |
| eval | [Android/src/app/src/main/proto/benchmark.proto](../../../../sources/jegly__Box/Android/src/app/src/main/proto/benchmark.proto) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 153 | [skills/README.md](../../../../sources/jegly__Box/skills/README.md)<br>[skills/featured/virtual-piano/README.md](../../../../sources/jegly__Box/skills/featured/virtual-piano/README.md)<br>[skills/featured/virtual-piano/SKILL.md](../../../../sources/jegly__Box/skills/featured/virtual-piano/SKILL.md)<br>[skills/featured/virtual-piano/scripts/index.html](../../../../sources/jegly__Box/skills/featured/virtual-piano/scripts/index.html)<br>[skills/featured/virtual-piano/scripts/index.js](../../../../sources/jegly__Box/skills/featured/virtual-piano/scripts/index.js)<br>[skills/featured/virtual-piano/assets/ui.html](../../../../sources/jegly__Box/skills/featured/virtual-piano/assets/ui.html)<br>[skills/featured/virtual-piano/assets/assets/1.mp3](../../../../sources/jegly__Box/skills/featured/virtual-piano/assets/assets/1.mp3)<br>[skills/featured/virtual-piano/assets/assets/10.mp3](../../../../sources/jegly__Box/skills/featured/virtual-piano/assets/assets/10.mp3) |
| mcp | 2 | [images/box_screenshots/MCP_Add_Server.png](../../../../sources/jegly__Box/images/box_screenshots/MCP_Add_Server.png)<br>[images/box_screenshots/Settings_Behaviour_And_MCP.png](../../../../sources/jegly__Box/images/box_screenshots/Settings_Behaviour_And_MCP.png) |
| retrieval | 25 | [skills/featured/virtual-piano/scripts/index.html](../../../../sources/jegly__Box/skills/featured/virtual-piano/scripts/index.html)<br>[skills/featured/virtual-piano/scripts/index.js](../../../../sources/jegly__Box/skills/featured/virtual-piano/scripts/index.js)<br>[skills/featured/restaurant-roulette/scripts/index.html](../../../../sources/jegly__Box/skills/featured/restaurant-roulette/scripts/index.html)<br>[skills/featured/restaurant-roulette/scripts/index.js](../../../../sources/jegly__Box/skills/featured/restaurant-roulette/scripts/index.js)<br>[skills/featured/mood-music/scripts/index.html](../../../../sources/jegly__Box/skills/featured/mood-music/scripts/index.html)<br>[skills/built-in/translator/scripts/index.html](../../../../sources/jegly__Box/skills/built-in/translator/scripts/index.html)<br>[skills/built-in/text-spinner/scripts/index.html](../../../../sources/jegly__Box/skills/built-in/text-spinner/scripts/index.html)<br>[skills/built-in/query-wikipedia/scripts/index.html](../../../../sources/jegly__Box/skills/built-in/query-wikipedia/scripts/index.html) |
| spec | 0 | 명확하지 않음 |
| eval | 1 | [Android/src/app/src/main/proto/benchmark.proto](../../../../sources/jegly__Box/Android/src/app/src/main/proto/benchmark.proto) |
| security | 10 | [images/box-linux_pref_internet_permission_Example.png](../../../../sources/jegly__Box/images/box-linux_pref_internet_permission_Example.png)<br>[images/box_screenshots/Settings_Theme_And_Security.png](../../../../sources/jegly__Box/images/box_screenshots/Settings_Theme_And_Security.png)<br>[Android/src/app/src/main/res/xml/network_security_config.xml](../../../../sources/jegly__Box/Android/src/app/src/main/res/xml/network_security_config.xml)<br>[Android/src/app/src/main/java/com/google/ai/edge/gallery/security/AppLockManager.kt](../../../../sources/jegly__Box/Android/src/app/src/main/java/com/google/ai/edge/gallery/security/AppLockManager.kt)<br>[Android/src/app/src/main/java/com/google/ai/edge/gallery/security/BiometricEncryptionManager.kt](../../../../sources/jegly__Box/Android/src/app/src/main/java/com/google/ai/edge/gallery/security/BiometricEncryptionManager.kt)<br>[Android/src/app/src/main/java/com/google/ai/edge/gallery/security/BiometricHelper.kt](../../../../sources/jegly__Box/Android/src/app/src/main/java/com/google/ai/edge/gallery/security/BiometricHelper.kt)<br>[Android/src/app/src/main/java/com/google/ai/edge/gallery/security/OfflineMode.kt](../../../../sources/jegly__Box/Android/src/app/src/main/java/com/google/ai/edge/gallery/security/OfflineMode.kt)<br>[Android/src/app/src/main/java/com/google/ai/edge/gallery/security/PassphraseHolder.kt](../../../../sources/jegly__Box/Android/src/app/src/main/java/com/google/ai/edge/gallery/security/PassphraseHolder.kt) |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 7 | [README.md](../../../../sources/jegly__Box/README.md)<br>[skills/README.md](../../../../sources/jegly__Box/skills/README.md)<br>[skills/featured/virtual-piano/README.md](../../../../sources/jegly__Box/skills/featured/virtual-piano/README.md)<br>[skills/featured/restaurant-roulette/README.md](../../../../sources/jegly__Box/skills/featured/restaurant-roulette/README.md)<br>[skills/featured/mood-music/README.md](../../../../sources/jegly__Box/skills/featured/mood-music/README.md)<br>[model_allowlists/README.md](../../../../sources/jegly__Box/model_allowlists/README.md)<br>[Android/README.md](../../../../sources/jegly__Box/Android/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1 | [Android/src/app/src/main/proto/benchmark.proto](../../../../sources/jegly__Box/Android/src/app/src/main/proto/benchmark.proto) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 10 | [images/box-linux_pref_internet_permission_Example.png](../../../../sources/jegly__Box/images/box-linux_pref_internet_permission_Example.png)<br>[images/box_screenshots/Settings_Theme_And_Security.png](../../../../sources/jegly__Box/images/box_screenshots/Settings_Theme_And_Security.png)<br>[Android/src/app/src/main/res/xml/network_security_config.xml](../../../../sources/jegly__Box/Android/src/app/src/main/res/xml/network_security_config.xml)<br>[Android/src/app/src/main/java/com/google/ai/edge/gallery/security/AppLockManager.kt](../../../../sources/jegly__Box/Android/src/app/src/main/java/com/google/ai/edge/gallery/security/AppLockManager.kt)<br>[Android/src/app/src/main/java/com/google/ai/edge/gallery/security/BiometricEncryptionManager.kt](../../../../sources/jegly__Box/Android/src/app/src/main/java/com/google/ai/edge/gallery/security/BiometricEncryptionManager.kt)<br>[Android/src/app/src/main/java/com/google/ai/edge/gallery/security/BiometricHelper.kt](../../../../sources/jegly__Box/Android/src/app/src/main/java/com/google/ai/edge/gallery/security/BiometricHelper.kt) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `images/box_screenshots/MCP_Add_Server.png`, `images/box_screenshots/Settings_Behaviour_And_MCP.png`, `skills/README.md`.
2. agent/tool runtime 매핑: `skills/README.md`, `skills/featured/virtual-piano/README.md`, `skills/featured/virtual-piano/SKILL.md`.
3. retrieval/memory/indexing 확인: `skills/featured/virtual-piano/scripts/index.html`, `skills/featured/virtual-piano/scripts/index.js`, `skills/featured/restaurant-roulette/scripts/index.html`.
4. test/eval 파일로 동작 검증: `Android/src/app/src/main/proto/benchmark.proto`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 The most advanced, fully offline client side AI suite on Android today.. 핵심 구조 신호는 Kotlin, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
