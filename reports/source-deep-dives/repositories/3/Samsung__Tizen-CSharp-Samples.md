# Samsung/Tizen-CSharp-Samples Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Tizen C# Samples for Mobile, Wearable, and TV profiles.

## 요약

- 조사 단위: `sources/Samsung__Tizen-CSharp-Samples` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 6,799 files, 2,185 directories, depth score 82, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 entrypoints=TV_obsolete/NUI/FirstScreen/FirstScreen/src/Main.cs, TV/UI/FirstScreen/FirstScreen/src/Main.cs이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Samsung/Tizen-CSharp-Samples |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | C# |
| Stars | 243 |
| Forks | 226 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/Samsung__Tizen-CSharp-Samples](../../../../sources/Samsung__Tizen-CSharp-Samples) |
| Existing report | [reports/korea-trending/repositories/Samsung__Tizen-CSharp-Samples.md](../../../korea-trending/repositories/Samsung__Tizen-CSharp-Samples.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 6799 / 2185 |
| Max observed depth | 11 |
| Top directories | IoT, Mobile_obsolete, TV, TV_obsolete, Wearable_obsolete |
| Top extensions | .cs: 2692, .png: 2052, .xaml: 521, .csproj: 307, .jpg: 232, .xml: 216, .md: 215, .sln: 203, (none): 158, .wav: 29, .json: 25, .stylecop: 25 |
| Source patterns | cli-first, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| IoT | top-level component | 1 |
| Mobile_obsolete | top-level component | 1 |
| TV | top-level component | 1 |
| TV_obsolete | top-level component | 1 |
| Wearable_obsolete | top-level component | 1 |


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
| entrypoints | [TV_obsolete/NUI/FirstScreen/FirstScreen/src/Main.cs](../../../../sources/Samsung__Tizen-CSharp-Samples/TV_obsolete/NUI/FirstScreen/FirstScreen/src/Main.cs) | entrypoints signal |
| entrypoints | [TV/UI/FirstScreen/FirstScreen/src/Main.cs](../../../../sources/Samsung__Tizen-CSharp-Samples/TV/UI/FirstScreen/FirstScreen/src/Main.cs) | entrypoints signal |
| docs | [README.md](../../../../sources/Samsung__Tizen-CSharp-Samples/README.md) | docs signal |
| docs | [Wearable_obsolete/README.md](../../../../sources/Samsung__Tizen-CSharp-Samples/Wearable_obsolete/README.md) | docs signal |
| docs | [Wearable_obsolete/Xamarin.Forms/README.md](../../../../sources/Samsung__Tizen-CSharp-Samples/Wearable_obsolete/Xamarin.Forms/README.md) | docs signal |
| docs | [Wearable_obsolete/Xamarin.Forms/XUIComponents/README.md](../../../../sources/Samsung__Tizen-CSharp-Samples/Wearable_obsolete/Xamarin.Forms/XUIComponents/README.md) | docs signal |
| eval | [Wearable_obsolete/Xamarin.Forms/WavPlayerSample/WavPlayerSample/res/test.wav](../../../../sources/Samsung__Tizen-CSharp-Samples/Wearable_obsolete/Xamarin.Forms/WavPlayerSample/WavPlayerSample/res/test.wav) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [TV_obsolete/NUI/FirstScreen/FirstScreen/src/Main.cs](../../../../sources/Samsung__Tizen-CSharp-Samples/TV_obsolete/NUI/FirstScreen/FirstScreen/src/Main.cs)<br>[TV/UI/FirstScreen/FirstScreen/src/Main.cs](../../../../sources/Samsung__Tizen-CSharp-Samples/TV/UI/FirstScreen/FirstScreen/src/Main.cs) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 7 | [Wearable_obsolete/Xamarin.Forms/WebWidgetHybrid/WorldClockWidget2/index.html](../../../../sources/Samsung__Tizen-CSharp-Samples/Wearable_obsolete/Xamarin.Forms/WebWidgetHybrid/WorldClockWidget2/index.html)<br>[Wearable_obsolete/Xamarin.Forms/WebWidgetHybrid/WorldClockWidget2/widget/WorldClockWidget2/index.html](../../../../sources/Samsung__Tizen-CSharp-Samples/Wearable_obsolete/Xamarin.Forms/WebWidgetHybrid/WorldClockWidget2/widget/WorldClockWidget2/index.html)<br>[Wearable_obsolete/Xamarin.Forms/CircularUIMediaPlayer/screenshots/circularuimediaplayer_using_custom_controller_instead_of_embedding_controls.png](../../../../sources/Samsung__Tizen-CSharp-Samples/Wearable_obsolete/Xamarin.Forms/CircularUIMediaPlayer/screenshots/circularuimediaplayer_using_custom_controller_instead_of_embedding_controls.png)<br>[Wearable_obsolete/Xamarin.Forms/CircularUIMediaPlayer/screenshots/circularuimediaplayer_using_embedding_controls.png](../../../../sources/Samsung__Tizen-CSharp-Samples/Wearable_obsolete/Xamarin.Forms/CircularUIMediaPlayer/screenshots/circularuimediaplayer_using_embedding_controls.png)<br>[Mobile_obsolete/NUI/Location/index.d.ts](../../../../sources/Samsung__Tizen-CSharp-Samples/Mobile_obsolete/NUI/Location/index.d.ts)<br>[Mobile_obsolete/NUI/AppHistory/index.d.ts](../../../../sources/Samsung__Tizen-CSharp-Samples/Mobile_obsolete/NUI/AppHistory/index.d.ts)<br>[Mobile_obsolete/NUI/Alarms/index.d.ts](../../../../sources/Samsung__Tizen-CSharp-Samples/Mobile_obsolete/NUI/Alarms/index.d.ts) |
| spec | 0 | not obvious |
| eval | 1 | [Wearable_obsolete/Xamarin.Forms/WavPlayerSample/WavPlayerSample/res/test.wav](../../../../sources/Samsung__Tizen-CSharp-Samples/Wearable_obsolete/Xamarin.Forms/WavPlayerSample/WavPlayerSample/res/test.wav) |
| security | 2 | [Mobile_obsolete/Xamarin.Forms/UI/Settings/Settings/Settings.Tizen.Mobile/res/settings_lock_screen_and_security.png](../../../../sources/Samsung__Tizen-CSharp-Samples/Mobile_obsolete/Xamarin.Forms/UI/Settings/Settings/Settings.Tizen.Mobile/res/settings_lock_screen_and_security.png)<br>[Mobile_obsolete/Xamarin.Forms/UI/Settings/Settings/Settings.Tizen.Mobile/res/settings_security.png](../../../../sources/Samsung__Tizen-CSharp-Samples/Mobile_obsolete/Xamarin.Forms/UI/Settings/Settings/Settings.Tizen.Mobile/res/settings_security.png) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 222 | [README.md](../../../../sources/Samsung__Tizen-CSharp-Samples/README.md)<br>[Wearable_obsolete/README.md](../../../../sources/Samsung__Tizen-CSharp-Samples/Wearable_obsolete/README.md)<br>[Wearable_obsolete/Xamarin.Forms/README.md](../../../../sources/Samsung__Tizen-CSharp-Samples/Wearable_obsolete/Xamarin.Forms/README.md)<br>[Wearable_obsolete/Xamarin.Forms/XUIComponents/README.md](../../../../sources/Samsung__Tizen-CSharp-Samples/Wearable_obsolete/Xamarin.Forms/XUIComponents/README.md)<br>[Wearable_obsolete/Xamarin.Forms/XStopWatch/README.md](../../../../sources/Samsung__Tizen-CSharp-Samples/Wearable_obsolete/Xamarin.Forms/XStopWatch/README.md)<br>[Wearable_obsolete/Xamarin.Forms/XamarinFormsAndServiceApps/README.md](../../../../sources/Samsung__Tizen-CSharp-Samples/Wearable_obsolete/Xamarin.Forms/XamarinFormsAndServiceApps/README.md)<br>[Wearable_obsolete/Xamarin.Forms/Workout/README.md](../../../../sources/Samsung__Tizen-CSharp-Samples/Wearable_obsolete/Xamarin.Forms/Workout/README.md)<br>[Wearable_obsolete/Xamarin.Forms/WidgetSample/README.md](../../../../sources/Samsung__Tizen-CSharp-Samples/Wearable_obsolete/Xamarin.Forms/WidgetSample/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1 | [Wearable_obsolete/Xamarin.Forms/WavPlayerSample/WavPlayerSample/res/test.wav](../../../../sources/Samsung__Tizen-CSharp-Samples/Wearable_obsolete/Xamarin.Forms/WavPlayerSample/WavPlayerSample/res/test.wav) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 2 | [Mobile_obsolete/Xamarin.Forms/UI/Settings/Settings/Settings.Tizen.Mobile/res/settings_lock_screen_and_security.png](../../../../sources/Samsung__Tizen-CSharp-Samples/Mobile_obsolete/Xamarin.Forms/UI/Settings/Settings/Settings.Tizen.Mobile/res/settings_lock_screen_and_security.png)<br>[Mobile_obsolete/Xamarin.Forms/UI/Settings/Settings/Settings.Tizen.Mobile/res/settings_security.png](../../../../sources/Samsung__Tizen-CSharp-Samples/Mobile_obsolete/Xamarin.Forms/UI/Settings/Settings/Settings.Tizen.Mobile/res/settings_security.png) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `TV_obsolete/NUI/FirstScreen/FirstScreen/src/Main.cs`, `TV/UI/FirstScreen/FirstScreen/src/Main.cs`, `README.md`.
2. Trace execution through entrypoints: `TV_obsolete/NUI/FirstScreen/FirstScreen/src/Main.cs`, `TV/UI/FirstScreen/FirstScreen/src/Main.cs`.
3. Inspect retrieval/memory/indexing through: `Wearable_obsolete/Xamarin.Forms/WebWidgetHybrid/WorldClockWidget2/index.html`, `Wearable_obsolete/Xamarin.Forms/WebWidgetHybrid/WorldClockWidget2/widget/WorldClockWidget2/index.html`, `Wearable_obsolete/Xamarin.Forms/CircularUIMediaPlayer/screenshots/circularuimediaplayer_using_custom_controller_instead_of_embedding_controls.png`.
4. Verify behavior through test/eval files: `Wearable_obsolete/Xamarin.Forms/WavPlayerSample/WavPlayerSample/res/test.wav`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Tizen C Samples for Mobile, Wearable, and TV profiles.. 핵심 구조 신호는 C#, README.md, LICENSE, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
