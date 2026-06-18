# Samsung/Tizen-CSharp-Samples 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Tizen C# Samples for Mobile, Wearable, and TV profiles.

## 요약

- 조사 단위: `sources/Samsung__Tizen-CSharp-Samples` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 6,799 files, 2,185 directories, depth score 76, key references 7개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 entrypoints=TV_obsolete/NUI/FirstScreen/FirstScreen/src/Main.cs, TV/UI/FirstScreen/FirstScreen/src/Main.cs이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Samsung/Tizen-CSharp-Samples |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | C# |
| Stars | 243 |
| Forks | 226 |
| License | Apache-2.0 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Samsung__Tizen-CSharp-Samples](../../../../sources/Samsung__Tizen-CSharp-Samples) |
| 기존 보고서 | [reports/korea-trending/repositories/Samsung__Tizen-CSharp-Samples.md](../../../korea-trending/repositories/Samsung__Tizen-CSharp-Samples.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 6799 / 2185 |
| 관측 최대 깊이 | 11 |
| 상위 디렉터리 | IoT, Mobile_obsolete, TV, TV_obsolete, Wearable_obsolete |
| 상위 확장자 | .cs: 2692, .png: 2052, .xaml: 521, .csproj: 307, .jpg: 232, .xml: 216, .md: 215, .sln: 203, (none): 158, .wav: 29, .json: 25, .stylecop: 25 |
| 소스 패턴 | cli-first, retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| IoT | top-level component | 1 |
| Mobile_obsolete | top-level component | 1 |
| TV | top-level component | 1 |
| TV_obsolete | top-level component | 1 |
| Wearable_obsolete | top-level component | 1 |


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
| entrypoints | [TV_obsolete/NUI/FirstScreen/FirstScreen/src/Main.cs](../../../../sources/Samsung__Tizen-CSharp-Samples/TV_obsolete/NUI/FirstScreen/FirstScreen/src/Main.cs) | entrypoints signal |
| entrypoints | [TV/UI/FirstScreen/FirstScreen/src/Main.cs](../../../../sources/Samsung__Tizen-CSharp-Samples/TV/UI/FirstScreen/FirstScreen/src/Main.cs) | entrypoints signal |
| docs | [README.md](../../../../sources/Samsung__Tizen-CSharp-Samples/README.md) | docs signal |
| docs | [Wearable_obsolete/README.md](../../../../sources/Samsung__Tizen-CSharp-Samples/Wearable_obsolete/README.md) | docs signal |
| docs | [Wearable_obsolete/Xamarin.Forms/README.md](../../../../sources/Samsung__Tizen-CSharp-Samples/Wearable_obsolete/Xamarin.Forms/README.md) | docs signal |
| docs | [Wearable_obsolete/Xamarin.Forms/XUIComponents/README.md](../../../../sources/Samsung__Tizen-CSharp-Samples/Wearable_obsolete/Xamarin.Forms/XUIComponents/README.md) | docs signal |
| eval | [Wearable_obsolete/Xamarin.Forms/WavPlayerSample/WavPlayerSample/res/test.wav](../../../../sources/Samsung__Tizen-CSharp-Samples/Wearable_obsolete/Xamarin.Forms/WavPlayerSample/WavPlayerSample/res/test.wav) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [TV_obsolete/NUI/FirstScreen/FirstScreen/src/Main.cs](../../../../sources/Samsung__Tizen-CSharp-Samples/TV_obsolete/NUI/FirstScreen/FirstScreen/src/Main.cs)<br>[TV/UI/FirstScreen/FirstScreen/src/Main.cs](../../../../sources/Samsung__Tizen-CSharp-Samples/TV/UI/FirstScreen/FirstScreen/src/Main.cs) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 7 | [Wearable_obsolete/Xamarin.Forms/WebWidgetHybrid/WorldClockWidget2/index.html](../../../../sources/Samsung__Tizen-CSharp-Samples/Wearable_obsolete/Xamarin.Forms/WebWidgetHybrid/WorldClockWidget2/index.html)<br>[Wearable_obsolete/Xamarin.Forms/WebWidgetHybrid/WorldClockWidget2/widget/WorldClockWidget2/index.html](../../../../sources/Samsung__Tizen-CSharp-Samples/Wearable_obsolete/Xamarin.Forms/WebWidgetHybrid/WorldClockWidget2/widget/WorldClockWidget2/index.html)<br>[Wearable_obsolete/Xamarin.Forms/CircularUIMediaPlayer/screenshots/circularuimediaplayer_using_custom_controller_instead_of_embedding_controls.png](../../../../sources/Samsung__Tizen-CSharp-Samples/Wearable_obsolete/Xamarin.Forms/CircularUIMediaPlayer/screenshots/circularuimediaplayer_using_custom_controller_instead_of_embedding_controls.png)<br>[Wearable_obsolete/Xamarin.Forms/CircularUIMediaPlayer/screenshots/circularuimediaplayer_using_embedding_controls.png](../../../../sources/Samsung__Tizen-CSharp-Samples/Wearable_obsolete/Xamarin.Forms/CircularUIMediaPlayer/screenshots/circularuimediaplayer_using_embedding_controls.png)<br>[Mobile_obsolete/NUI/Location/index.d.ts](../../../../sources/Samsung__Tizen-CSharp-Samples/Mobile_obsolete/NUI/Location/index.d.ts)<br>[Mobile_obsolete/NUI/AppHistory/index.d.ts](../../../../sources/Samsung__Tizen-CSharp-Samples/Mobile_obsolete/NUI/AppHistory/index.d.ts)<br>[Mobile_obsolete/NUI/Alarms/index.d.ts](../../../../sources/Samsung__Tizen-CSharp-Samples/Mobile_obsolete/NUI/Alarms/index.d.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 1 | [Wearable_obsolete/Xamarin.Forms/WavPlayerSample/WavPlayerSample/res/test.wav](../../../../sources/Samsung__Tizen-CSharp-Samples/Wearable_obsolete/Xamarin.Forms/WavPlayerSample/WavPlayerSample/res/test.wav) |
| security | 2 | [Mobile_obsolete/Xamarin.Forms/UI/Settings/Settings/Settings.Tizen.Mobile/res/settings_lock_screen_and_security.png](../../../../sources/Samsung__Tizen-CSharp-Samples/Mobile_obsolete/Xamarin.Forms/UI/Settings/Settings/Settings.Tizen.Mobile/res/settings_lock_screen_and_security.png)<br>[Mobile_obsolete/Xamarin.Forms/UI/Settings/Settings/Settings.Tizen.Mobile/res/settings_security.png](../../../../sources/Samsung__Tizen-CSharp-Samples/Mobile_obsolete/Xamarin.Forms/UI/Settings/Settings/Settings.Tizen.Mobile/res/settings_security.png) |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 222 | [README.md](../../../../sources/Samsung__Tizen-CSharp-Samples/README.md)<br>[Wearable_obsolete/README.md](../../../../sources/Samsung__Tizen-CSharp-Samples/Wearable_obsolete/README.md)<br>[Wearable_obsolete/Xamarin.Forms/README.md](../../../../sources/Samsung__Tizen-CSharp-Samples/Wearable_obsolete/Xamarin.Forms/README.md)<br>[Wearable_obsolete/Xamarin.Forms/XUIComponents/README.md](../../../../sources/Samsung__Tizen-CSharp-Samples/Wearable_obsolete/Xamarin.Forms/XUIComponents/README.md)<br>[Wearable_obsolete/Xamarin.Forms/XStopWatch/README.md](../../../../sources/Samsung__Tizen-CSharp-Samples/Wearable_obsolete/Xamarin.Forms/XStopWatch/README.md)<br>[Wearable_obsolete/Xamarin.Forms/XamarinFormsAndServiceApps/README.md](../../../../sources/Samsung__Tizen-CSharp-Samples/Wearable_obsolete/Xamarin.Forms/XamarinFormsAndServiceApps/README.md)<br>[Wearable_obsolete/Xamarin.Forms/Workout/README.md](../../../../sources/Samsung__Tizen-CSharp-Samples/Wearable_obsolete/Xamarin.Forms/Workout/README.md)<br>[Wearable_obsolete/Xamarin.Forms/WidgetSample/README.md](../../../../sources/Samsung__Tizen-CSharp-Samples/Wearable_obsolete/Xamarin.Forms/WidgetSample/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1 | [Wearable_obsolete/Xamarin.Forms/WavPlayerSample/WavPlayerSample/res/test.wav](../../../../sources/Samsung__Tizen-CSharp-Samples/Wearable_obsolete/Xamarin.Forms/WavPlayerSample/WavPlayerSample/res/test.wav) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 2 | [Mobile_obsolete/Xamarin.Forms/UI/Settings/Settings/Settings.Tizen.Mobile/res/settings_lock_screen_and_security.png](../../../../sources/Samsung__Tizen-CSharp-Samples/Mobile_obsolete/Xamarin.Forms/UI/Settings/Settings/Settings.Tizen.Mobile/res/settings_lock_screen_and_security.png)<br>[Mobile_obsolete/Xamarin.Forms/UI/Settings/Settings/Settings.Tizen.Mobile/res/settings_security.png](../../../../sources/Samsung__Tizen-CSharp-Samples/Mobile_obsolete/Xamarin.Forms/UI/Settings/Settings/Settings.Tizen.Mobile/res/settings_security.png) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `TV_obsolete/NUI/FirstScreen/FirstScreen/src/Main.cs`, `TV/UI/FirstScreen/FirstScreen/src/Main.cs`, `README.md`.
2. entrypoint를 따라 실행 흐름 확인: `TV_obsolete/NUI/FirstScreen/FirstScreen/src/Main.cs`, `TV/UI/FirstScreen/FirstScreen/src/Main.cs`.
3. retrieval/memory/indexing 확인: `Wearable_obsolete/Xamarin.Forms/WebWidgetHybrid/WorldClockWidget2/index.html`, `Wearable_obsolete/Xamarin.Forms/WebWidgetHybrid/WorldClockWidget2/widget/WorldClockWidget2/index.html`, `Wearable_obsolete/Xamarin.Forms/CircularUIMediaPlayer/screenshots/circularuimediaplayer_using_custom_controller_instead_of_embedding_controls.png`.
4. test/eval 파일로 동작 검증: `Wearable_obsolete/Xamarin.Forms/WavPlayerSample/WavPlayerSample/res/test.wav`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Tizen C Samples for Mobile, Wearable, and TV profiles.. 핵심 구조 신호는 C#, README.md, LICENSE, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
