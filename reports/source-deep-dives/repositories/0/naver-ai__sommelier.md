# naver-ai/sommelier Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

naver-ai/sommelier

## 요약

- 조사 단위: `sources/naver-ai__sommelier` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 25 files, 4 directories, depth score 55, key references 3개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 agent/tool runtime, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 config=podcast-pipeline/requirements.txt이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 3개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver-ai/sommelier |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 51 |
| Forks | 8 |
| License | NOASSERTION |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver-ai__sommelier](../../../../sources/naver-ai__sommelier) |
| Existing report | [reports/korea-trending/repositories/naver-ai__sommelier.md](../../../korea-trending/repositories/naver-ai__sommelier.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 25 / 4 |
| Max observed depth | 3 |
| Top directories | img, podcast-pipeline |
| Top extensions | .py: 17, (none): 2, .0: 1, .json: 1, .md: 1, .png: 1, .sh: 1, .txt: 1 |
| Source patterns | agent/tool runtime, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| img | top-level component | 1 |
| podcast-pipeline | top-level component | 1 |


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
| config | [podcast-pipeline/requirements.txt](../../../../sources/naver-ai__sommelier/podcast-pipeline/requirements.txt) | config signal |
| docs | [README.md](../../../../sources/naver-ai__sommelier/README.md) | docs signal |
| eval | [podcast-pipeline/run_test_all.sh](../../../../sources/naver-ai__sommelier/podcast-pipeline/run_test_all.sh) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 1 | [podcast-pipeline/utils/tool.py](../../../../sources/naver-ai__sommelier/podcast-pipeline/utils/tool.py) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 1 | [podcast-pipeline/requirements.txt](../../../../sources/naver-ai__sommelier/podcast-pipeline/requirements.txt) |
| eval | 1 | [podcast-pipeline/run_test_all.sh](../../../../sources/naver-ai__sommelier/podcast-pipeline/run_test_all.sh) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/naver-ai__sommelier/README.md) |
| config | 1 | [podcast-pipeline/requirements.txt](../../../../sources/naver-ai__sommelier/podcast-pipeline/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1 | [podcast-pipeline/run_test_all.sh](../../../../sources/naver-ai__sommelier/podcast-pipeline/run_test_all.sh) |
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

1. Start from key references: `podcast-pipeline/requirements.txt`, `README.md`, `podcast-pipeline/run_test_all.sh`.
2. Map agent/tool runtime through: `podcast-pipeline/utils/tool.py`.
3. Verify behavior through test/eval files: `podcast-pipeline/run_test_all.sh`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 Python, README.md, LICENSE, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
