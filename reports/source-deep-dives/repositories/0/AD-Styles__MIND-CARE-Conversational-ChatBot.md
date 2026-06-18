# AD-Styles/MIND-CARE-Conversational-ChatBot Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

On-device HRI care system for seniors living alone — Korean voice dialogue, medical RAG, fall detection & emergency alerts, all on a single NVIDIA Jetson (ROS 2). / NVIDIA Jetson 기반 온디바이스 돌봄 로봇 — 음성 대화 · 의료 RAG · 낙상 감지 · 응급 알림.

## 요약

- 조사 단위: `sources/AD-Styles__MIND-CARE-Conversational-ChatBot` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 273 files, 102 directories, depth score 85, key references 6개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 config=requirements.core.txt, requirements.full.txt, requirements.xavier.txt이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 6개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | AD-Styles/MIND-CARE-Conversational-ChatBot |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/AD-Styles__MIND-CARE-Conversational-ChatBot](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot) |
| Existing report | [reports/korea-trending/repositories/AD-Styles__MIND-CARE-Conversational-ChatBot.md](../../../korea-trending/repositories/AD-Styles__MIND-CARE-Conversational-ChatBot.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 273 / 102 |
| Max observed depth | 10 |
| Top directories | mind_care_vision, release, urgent_alarm_app |
| Top extensions | .py: 67, .png: 35, .xml: 23, .md: 20, .txt: 16, (none): 15, .sh: 14, .h: 8, .xcconfig: 8, .plist: 7, .swift: 7, .cpp: 6 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| mind_care_vision | top-level component | 1 |
| release | top-level component | 1 |
| urgent_alarm_app | top-level component | 1 |


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
| config | [requirements.core.txt](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/requirements.core.txt) | config signal |
| config | [requirements.full.txt](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/requirements.full.txt) | config signal |
| config | [requirements.xavier.txt](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/requirements.xavier.txt) | config signal |
| config | [release/vision/mind_care_perception/src/parser_yolov8_pose/Makefile](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/release/vision/mind_care_perception/src/parser_yolov8_pose/Makefile) | config signal |
| eval | [urgent_alarm_app/test/widget_test.dart](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/urgent_alarm_app/test/widget_test.dart) | eval support |
| eval | [release/vision/mind_care_perception/scripts/eval_fall.py](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/release/vision/mind_care_perception/scripts/eval_fall.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 81 | [urgent_alarm_app/windows/runner/CMakeLists.txt](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/urgent_alarm_app/windows/runner/CMakeLists.txt)<br>[urgent_alarm_app/windows/runner/flutter_window.cpp](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/urgent_alarm_app/windows/runner/flutter_window.cpp)<br>[urgent_alarm_app/windows/runner/flutter_window.h](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/urgent_alarm_app/windows/runner/flutter_window.h)<br>[urgent_alarm_app/windows/runner/main.cpp](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/urgent_alarm_app/windows/runner/main.cpp)<br>[urgent_alarm_app/windows/runner/resource.h](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/urgent_alarm_app/windows/runner/resource.h)<br>[urgent_alarm_app/windows/runner/runner.exe.manifest.xml](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/urgent_alarm_app/windows/runner/runner.exe.manifest.xml)<br>[urgent_alarm_app/windows/runner/Runner.rc](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/urgent_alarm_app/windows/runner/Runner.rc)<br>[urgent_alarm_app/windows/runner/utils.cpp](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/urgent_alarm_app/windows/runner/utils.cpp) |
| mcp | 0 | not obvious |
| retrieval | 7 | [rag_crawling.ipynb](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/rag_crawling.ipynb)<br>[urgent_alarm_app/web/index.html](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/urgent_alarm_app/web/index.html)<br>[release/emergency/mind_care_api/demo_client/index.html](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/release/emergency/mind_care_api/demo_client/index.html)<br>[mind_care_vision/tools/build_chroma_index.py](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/mind_care_vision/tools/build_chroma_index.py)<br>[mind_care_vision/tools/build_rag_index.py](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/mind_care_vision/tools/build_rag_index.py)<br>[mind_care_vision/tools/rag_retrieve_smoke.py](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/mind_care_vision/tools/rag_retrieve_smoke.py)<br>[mind_care_vision/mind_care_vision/rag.py](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/mind_care_vision/mind_care_vision/rag.py) |
| spec | 6 | [requirements.core.txt](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/requirements.core.txt)<br>[requirements.full.txt](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/requirements.full.txt)<br>[requirements.xavier.txt](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/requirements.xavier.txt)<br>[release/vision/PHASE4_DESIGN.md](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/release/vision/PHASE4_DESIGN.md)<br>[release/emergency/PHASE5_DESIGN.md](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/release/emergency/PHASE5_DESIGN.md)<br>[release/emergency/requirements.txt](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/release/emergency/requirements.txt) |
| eval | 7 | [urgent_alarm_app/test/widget_test.dart](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/urgent_alarm_app/test/widget_test.dart)<br>[release/vision/mind_care_perception/scripts/eval_fall.py](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/release/vision/mind_care_perception/scripts/eval_fall.py)<br>[release/vision/mind_care_perception/scripts/run_fall_test.sh](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/release/vision/mind_care_perception/scripts/run_fall_test.sh)<br>[release/vision/mind_care_perception/scripts/run_test_mode.sh](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/release/vision/mind_care_perception/scripts/run_test_mode.sh)<br>[release/emergency/scripts/system_eval.py](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/release/emergency/scripts/system_eval.py)<br>[release/emergency/mind_care_emergency/tests/test_decider_states.py](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/release/emergency/mind_care_emergency/tests/test_decider_states.py)<br>[mind_care_vision/tools/eval_sv.py](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/mind_care_vision/tools/eval_sv.py) |
| security | 2 | [XAVIER_VERSION_AUDIT.md](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/XAVIER_VERSION_AUDIT.md)<br>[release/emergency/mind_care_api/mind_care_api/auth.py](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/release/emergency/mind_care_api/mind_care_api/auth.py) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 5 | [README.md](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/README.md)<br>[urgent_alarm_app/README.md](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/urgent_alarm_app/README.md)<br>[urgent_alarm_app/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/urgent_alarm_app/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md)<br>[release/vision/README.md](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/release/vision/README.md)<br>[release/emergency/mind_care_api/demo_client/README.md](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/release/emergency/mind_care_api/demo_client/README.md) |
| config | 6 | [requirements.core.txt](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/requirements.core.txt)<br>[requirements.full.txt](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/requirements.full.txt)<br>[requirements.xavier.txt](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/requirements.xavier.txt)<br>[release/vision/mind_care_perception/src/parser_yolov8_pose/Makefile](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/release/vision/mind_care_perception/src/parser_yolov8_pose/Makefile)<br>[release/vision/mind_care_perception/src/parser_yolov8_face/Makefile](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/release/vision/mind_care_perception/src/parser_yolov8_face/Makefile)<br>[release/emergency/requirements.txt](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/release/emergency/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 7 | [urgent_alarm_app/test/widget_test.dart](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/urgent_alarm_app/test/widget_test.dart)<br>[release/vision/mind_care_perception/scripts/eval_fall.py](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/release/vision/mind_care_perception/scripts/eval_fall.py)<br>[release/vision/mind_care_perception/scripts/run_fall_test.sh](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/release/vision/mind_care_perception/scripts/run_fall_test.sh)<br>[release/vision/mind_care_perception/scripts/run_test_mode.sh](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/release/vision/mind_care_perception/scripts/run_test_mode.sh)<br>[release/emergency/scripts/system_eval.py](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/release/emergency/scripts/system_eval.py)<br>[release/emergency/mind_care_emergency/tests/test_decider_states.py](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/release/emergency/mind_care_emergency/tests/test_decider_states.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 2 | [XAVIER_VERSION_AUDIT.md](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/XAVIER_VERSION_AUDIT.md)<br>[release/emergency/mind_care_api/mind_care_api/auth.py](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot/release/emergency/mind_care_api/mind_care_api/auth.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `requirements.core.txt`, `requirements.full.txt`, `requirements.xavier.txt`.
2. Map agent/tool runtime through: `urgent_alarm_app/windows/runner/CMakeLists.txt`, `urgent_alarm_app/windows/runner/flutter_window.cpp`, `urgent_alarm_app/windows/runner/flutter_window.h`.
3. Inspect retrieval/memory/indexing through: `rag_crawling.ipynb`, `urgent_alarm_app/web/index.html`, `release/emergency/mind_care_api/demo_client/index.html`.
4. Verify behavior through test/eval files: `urgent_alarm_app/test/widget_test.dart`, `release/vision/mind_care_perception/scripts/eval_fall.py`, `release/vision/mind_care_perception/scripts/run_fall_test.sh`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 On device HRI care system for seniors living alone — Korean voice dialogue, medical RAG, fall detection & emergency aler. 핵심 구조 신호는 Python, README.md, LICENSE, docs, spec-artifacts이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
