# hyperconnect/TC-ResNet Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Code for Temporal Convolution for Real-time Keyword Spotting on Mobile Devices

## 요약

- 조사 단위: `sources/hyperconnect__TC-ResNet` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 68 files, 13 directories, depth score 62, key references 8개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 config=requirements/py36-common.txt, requirements/py36-cpu.txt, requirements/py36-gpu.txt이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | hyperconnect/TC-ResNet |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 234 |
| Forks | 55 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/hyperconnect__TC-ResNet](../../../../sources/hyperconnect__TC-ResNet) |
| Existing report | [reports/korea-trending/repositories/hyperconnect__TC-ResNet.md](../../../korea-trending/repositories/hyperconnect__TC-ResNet.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 68 / 13 |
| Max observed depth | 3 |
| Top directories | audio_nets, common, datasets, factory, figure, helper, metrics, requirements, scripts, speech_commands_dataset, tflite_tools |
| Top extensions | .py: 38, .sh: 18, .txt: 6, .md: 2, (none): 2, .13_official: 1, .png: 1 |
| Source patterns | spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| audio_nets | top-level component | 1 |
| common | top-level component | 1 |
| datasets | top-level component | 1 |
| factory | top-level component | 1 |
| figure | top-level component | 1 |
| helper | top-level component | 1 |
| metrics | top-level component | 1 |
| requirements | top-level component | 1 |
| scripts | top-level component | 1 |
| speech_commands_dataset | top-level component | 1 |
| tflite_tools | top-level component | 1 |


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
| config | [requirements/py36-common.txt](../../../../sources/hyperconnect__TC-ResNet/requirements/py36-common.txt) | config signal |
| config | [requirements/py36-cpu.txt](../../../../sources/hyperconnect__TC-ResNet/requirements/py36-cpu.txt) | config signal |
| config | [requirements/py36-gpu.txt](../../../../sources/hyperconnect__TC-ResNet/requirements/py36-gpu.txt) | config signal |
| docs | [README.md](../../../../sources/hyperconnect__TC-ResNet/README.md) | docs signal |
| docs | [speech_commands_dataset/README.md](../../../../sources/hyperconnect__TC-ResNet/speech_commands_dataset/README.md) | docs signal |
| eval | [tflite_tools/benchmark_model_r1.13_official](../../../../sources/hyperconnect__TC-ResNet/tflite_tools/benchmark_model_r1.13_official) | eval signal |
| eval | [tflite_tools/run_benchmark.sh](../../../../sources/hyperconnect__TC-ResNet/tflite_tools/run_benchmark.sh) | eval signal |
| eval | [speech_commands_dataset/test.txt](../../../../sources/hyperconnect__TC-ResNet/speech_commands_dataset/test.txt) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 3 | [requirements/py36-common.txt](../../../../sources/hyperconnect__TC-ResNet/requirements/py36-common.txt)<br>[requirements/py36-cpu.txt](../../../../sources/hyperconnect__TC-ResNet/requirements/py36-cpu.txt)<br>[requirements/py36-gpu.txt](../../../../sources/hyperconnect__TC-ResNet/requirements/py36-gpu.txt) |
| eval | 3 | [tflite_tools/benchmark_model_r1.13_official](../../../../sources/hyperconnect__TC-ResNet/tflite_tools/benchmark_model_r1.13_official)<br>[tflite_tools/run_benchmark.sh](../../../../sources/hyperconnect__TC-ResNet/tflite_tools/run_benchmark.sh)<br>[speech_commands_dataset/test.txt](../../../../sources/hyperconnect__TC-ResNet/speech_commands_dataset/test.txt) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 2 | [README.md](../../../../sources/hyperconnect__TC-ResNet/README.md)<br>[speech_commands_dataset/README.md](../../../../sources/hyperconnect__TC-ResNet/speech_commands_dataset/README.md) |
| config | 3 | [requirements/py36-common.txt](../../../../sources/hyperconnect__TC-ResNet/requirements/py36-common.txt)<br>[requirements/py36-cpu.txt](../../../../sources/hyperconnect__TC-ResNet/requirements/py36-cpu.txt)<br>[requirements/py36-gpu.txt](../../../../sources/hyperconnect__TC-ResNet/requirements/py36-gpu.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 3 | [tflite_tools/benchmark_model_r1.13_official](../../../../sources/hyperconnect__TC-ResNet/tflite_tools/benchmark_model_r1.13_official)<br>[tflite_tools/run_benchmark.sh](../../../../sources/hyperconnect__TC-ResNet/tflite_tools/run_benchmark.sh)<br>[speech_commands_dataset/test.txt](../../../../sources/hyperconnect__TC-ResNet/speech_commands_dataset/test.txt) |
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

1. Start from key references: `requirements/py36-common.txt`, `requirements/py36-cpu.txt`, `requirements/py36-gpu.txt`.
2. Verify behavior through test/eval files: `tflite_tools/benchmark_model_r1.13_official`, `tflite_tools/run_benchmark.sh`, `speech_commands_dataset/test.txt`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Code for Temporal Convolution for Real time Keyword Spotting on Mobile Devices. 핵심 구조 신호는 Python, README.md, LICENSE, docs, spec-artifacts이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
