# kakao/recoteam Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

카카오 추천팀 공개 리포지토리입니다.

## 요약

- 조사 단위: `sources/kakao__recoteam` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 129 files, 28 directories, depth score 61, key references 8개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=README.md, publications/sigir2023-update-period/README.md, programming_assignments/mini_reco/README.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | kakao/recoteam |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Jupyter Notebook |
| Stars | 365 |
| Forks | 17 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/kakao__recoteam](../../../../sources/kakao__recoteam) |
| Existing report | [reports/korea-trending/repositories/kakao__recoteam.md](../../../korea-trending/repositories/kakao__recoteam.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 129 / 28 |
| Max observed depth | 6 |
| Top directories | docs, onboarding, paper_review, presentations, programming_assignments, publications |
| Top extensions | .md: 51, .txt: 17, .in: 16, .out: 16, .py: 7, .pdf: 6, .html: 4, .ipynb: 4, .css: 2, .cpp: 1, .ico: 1, .java: 1 |
| Source patterns | retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 10 |
| onboarding | top-level component | 1 |
| paper_review | top-level component | 1 |
| presentations | top-level component | 1 |
| programming_assignments | top-level component | 1 |
| publications | top-level component | 1 |


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
| docs | [README.md](../../../../sources/kakao__recoteam/README.md) | docs signal |
| docs | [publications/sigir2023-update-period/README.md](../../../../sources/kakao__recoteam/publications/sigir2023-update-period/README.md) | docs signal |
| docs | [programming_assignments/mini_reco/README.md](../../../../sources/kakao__recoteam/programming_assignments/mini_reco/README.md) | docs signal |
| docs | [programming_assignments/jukebox/README.md](../../../../sources/kakao__recoteam/programming_assignments/jukebox/README.md) | docs signal |
| eval | [programming_assignments/mini_reco/evaluation.py](../../../../sources/kakao__recoteam/programming_assignments/mini_reco/evaluation.py) | eval signal |
| eval | [programming_assignments/jukebox/solution/code_using_ease/evaluation/Evaluate.py](../../../../sources/kakao__recoteam/programming_assignments/jukebox/solution/code_using_ease/evaluation/Evaluate.py) | eval signal |
| eval | [programming_assignments/jukebox/solution/code_using_ease/evaluation/user_id.txt](../../../../sources/kakao__recoteam/programming_assignments/jukebox/solution/code_using_ease/evaluation/user_id.txt) | eval signal |
| eval | [programming_assignments/jukebox/solution/code_using_ease/evaluation/validation_data.txt](../../../../sources/kakao__recoteam/programming_assignments/jukebox/solution/code_using_ease/evaluation/validation_data.txt) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 1 | [docs/arena/index.html](../../../../sources/kakao__recoteam/docs/arena/index.html) |
| spec | 0 | not obvious |
| eval | 4 | [programming_assignments/mini_reco/evaluation.py](../../../../sources/kakao__recoteam/programming_assignments/mini_reco/evaluation.py)<br>[programming_assignments/jukebox/solution/code_using_ease/evaluation/Evaluate.py](../../../../sources/kakao__recoteam/programming_assignments/jukebox/solution/code_using_ease/evaluation/Evaluate.py)<br>[programming_assignments/jukebox/solution/code_using_ease/evaluation/user_id.txt](../../../../sources/kakao__recoteam/programming_assignments/jukebox/solution/code_using_ease/evaluation/user_id.txt)<br>[programming_assignments/jukebox/solution/code_using_ease/evaluation/validation_data.txt](../../../../sources/kakao__recoteam/programming_assignments/jukebox/solution/code_using_ease/evaluation/validation_data.txt) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 18 | [README.md](../../../../sources/kakao__recoteam/README.md)<br>[publications/sigir2023-update-period/README.md](../../../../sources/kakao__recoteam/publications/sigir2023-update-period/README.md)<br>[programming_assignments/mini_reco/README.md](../../../../sources/kakao__recoteam/programming_assignments/mini_reco/README.md)<br>[programming_assignments/jukebox/README.md](../../../../sources/kakao__recoteam/programming_assignments/jukebox/README.md)<br>[programming_assignments/jukebox/solution/README.md](../../../../sources/kakao__recoteam/programming_assignments/jukebox/solution/README.md)<br>[programming_assignments/beale_ciphers/README.md](../../../../sources/kakao__recoteam/programming_assignments/beale_ciphers/README.md)<br>[programming_assignments/beale_ciphers/testcase/README.md](../../../../sources/kakao__recoteam/programming_assignments/beale_ciphers/testcase/README.md)<br>[presentations/README.md](../../../../sources/kakao__recoteam/presentations/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 4 | [programming_assignments/mini_reco/evaluation.py](../../../../sources/kakao__recoteam/programming_assignments/mini_reco/evaluation.py)<br>[programming_assignments/jukebox/solution/code_using_ease/evaluation/Evaluate.py](../../../../sources/kakao__recoteam/programming_assignments/jukebox/solution/code_using_ease/evaluation/Evaluate.py)<br>[programming_assignments/jukebox/solution/code_using_ease/evaluation/user_id.txt](../../../../sources/kakao__recoteam/programming_assignments/jukebox/solution/code_using_ease/evaluation/user_id.txt)<br>[programming_assignments/jukebox/solution/code_using_ease/evaluation/validation_data.txt](../../../../sources/kakao__recoteam/programming_assignments/jukebox/solution/code_using_ease/evaluation/validation_data.txt) |
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

1. Start from key references: `README.md`, `publications/sigir2023-update-period/README.md`, `programming_assignments/mini_reco/README.md`.
2. Inspect retrieval/memory/indexing through: `docs/arena/index.html`.
3. Verify behavior through test/eval files: `programming_assignments/mini_reco/evaluation.py`, `programming_assignments/jukebox/solution/code_using_ease/evaluation/Evaluate.py`, `programming_assignments/jukebox/solution/code_using_ease/evaluation/user_id.txt`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 카카오 추천팀 공개 리포지토리입니다.. 핵심 구조 신호는 Jupyter Notebook, README.md, docs, spec-artifacts이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
