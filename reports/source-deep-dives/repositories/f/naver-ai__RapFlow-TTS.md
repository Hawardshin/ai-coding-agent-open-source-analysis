# naver-ai/RapFlow-TTS Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

naver-ai/RapFlow-TTS

## 요약

- 조사 단위: `sources/naver-ai__RapFlow-TTS` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 103 files, 27 directories, depth score 60, key references 6개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 config=requirements.txt이고, 의존성 단서는 torch, transformers, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 6개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver-ai/RapFlow-TTS |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 55 |
| Forks | 6 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver-ai__RapFlow-TTS](../../../../sources/naver-ai__RapFlow-TTS) |
| Existing report | [reports/korea-trending/repositories/naver-ai__RapFlow-TTS.md](../../../korea-trending/repositories/naver-ai__RapFlow-TTS.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 103 / 27 |
| Max observed depth | 5 |
| Top directories | bigvgan, config, filelists, hifigan, img, model, preprocess, resources, src, syn_samples, text |
| Top extensions | .py: 45, .txt: 16, (none): 16, .yaml: 10, .png: 5, .json: 4, .sh: 4, .md: 1, .pyx: 1, .wav: 1 |
| Source patterns | spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 2 |
| bigvgan | top-level component | 1 |
| config | top-level component | 1 |
| filelists | top-level component | 1 |
| hifigan | top-level component | 1 |
| img | top-level component | 1 |
| model | top-level component | 1 |
| preprocess | top-level component | 1 |
| resources | top-level component | 1 |
| syn_samples | top-level component | 1 |
| text | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | torch, transformers |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| config | [requirements.txt](../../../../sources/naver-ai__RapFlow-TTS/requirements.txt) | config signal |
| docs | [README.md](../../../../sources/naver-ai__RapFlow-TTS/README.md) | docs signal |
| eval | [test.py](../../../../sources/naver-ai__RapFlow-TTS/test.py) | eval signal |
| eval | [test.sh](../../../../sources/naver-ai__RapFlow-TTS/test.sh) | eval signal |
| eval | [src/metric.py](../../../../sources/naver-ai__RapFlow-TTS/src/metric.py) | eval signal |
| eval | [resources/filelists/LJSpeech/test.txt](../../../../sources/naver-ai__RapFlow-TTS/resources/filelists/LJSpeech/test.txt) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 1 | [requirements.txt](../../../../sources/naver-ai__RapFlow-TTS/requirements.txt) |
| eval | 8 | [test.py](../../../../sources/naver-ai__RapFlow-TTS/test.py)<br>[test.sh](../../../../sources/naver-ai__RapFlow-TTS/test.sh)<br>[src/metric.py](../../../../sources/naver-ai__RapFlow-TTS/src/metric.py)<br>[resources/filelists/LJSpeech/test.txt](../../../../sources/naver-ai__RapFlow-TTS/resources/filelists/LJSpeech/test.txt)<br>[filelists/VCTK/cleaned_test.txt](../../../../sources/naver-ai__RapFlow-TTS/filelists/VCTK/cleaned_test.txt)<br>[filelists/VCTK/test.txt](../../../../sources/naver-ai__RapFlow-TTS/filelists/VCTK/test.txt)<br>[filelists/LJSpeech/cleaned_test.txt](../../../../sources/naver-ai__RapFlow-TTS/filelists/LJSpeech/cleaned_test.txt)<br>[filelists/LJSpeech/test.txt](../../../../sources/naver-ai__RapFlow-TTS/filelists/LJSpeech/test.txt) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/naver-ai__RapFlow-TTS/README.md) |
| config | 1 | [requirements.txt](../../../../sources/naver-ai__RapFlow-TTS/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 8 | [test.py](../../../../sources/naver-ai__RapFlow-TTS/test.py)<br>[test.sh](../../../../sources/naver-ai__RapFlow-TTS/test.sh)<br>[src/metric.py](../../../../sources/naver-ai__RapFlow-TTS/src/metric.py)<br>[resources/filelists/LJSpeech/test.txt](../../../../sources/naver-ai__RapFlow-TTS/resources/filelists/LJSpeech/test.txt)<br>[filelists/VCTK/cleaned_test.txt](../../../../sources/naver-ai__RapFlow-TTS/filelists/VCTK/cleaned_test.txt)<br>[filelists/VCTK/test.txt](../../../../sources/naver-ai__RapFlow-TTS/filelists/VCTK/test.txt) |
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
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `requirements.txt`, `README.md`, `test.py`.
2. Verify behavior through test/eval files: `test.py`, `test.sh`, `src/metric.py`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 Python, requirements.txt, README.md, LICENSE, torch, transformers이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
