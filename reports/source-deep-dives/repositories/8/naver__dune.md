# naver/dune Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Code repository for "DUNE: Distilling a Universal Encoder from Heterogeneous 2D and 3D Teachers"

## 요약

- 조사 단위: `sources/naver__dune` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 70 files, 13 directories, depth score 62, key references 8개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 retrieval=teachers/dinov2/layers/patch_embed.py, model/common/patch_embed.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/dune |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 101 |
| Forks | 6 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver__dune](../../../../sources/naver__dune) |
| Existing report | [reports/korea-trending/repositories/naver__dune.md](../../../korea-trending/repositories/naver__dune.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 70 / 13 |
| Max observed depth | 4 |
| Top directories | assets, data, model, scripts, teachers, utils |
| Top extensions | .py: 53, .sh: 7, .md: 3, .png: 3, .txt: 2, (none): 2 |
| Source patterns | retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| assets | top-level component | 1 |
| data | top-level component | 1 |
| model | top-level component | 1 |
| scripts | top-level component | 1 |
| teachers | top-level component | 1 |
| utils | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| quality | Makefile | format | make format |
| utility | Makefile | clean | make clean |
| test | Makefile | test | make test |
| utility | Makefile | conda | make conda |


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
| retrieval | [teachers/dinov2/layers/patch_embed.py](../../../../sources/naver__dune/teachers/dinov2/layers/patch_embed.py) | retrieval signal |
| retrieval | [model/common/patch_embed.py](../../../../sources/naver__dune/model/common/patch_embed.py) | retrieval signal |
| docs | [README.md](../../../../sources/naver__dune/README.md) | docs signal |
| docs | [teachers/dinov2/README.md](../../../../sources/naver__dune/teachers/dinov2/README.md) | docs signal |
| docs | [scripts/teachers/README.md](../../../../sources/naver__dune/scripts/teachers/README.md) | docs signal |
| eval | [assets/test_image_patch_pca_dune_vitbase14_448_paper.png](../../../../sources/naver__dune/assets/test_image_patch_pca_dune_vitbase14_448_paper.png) | eval signal |
| eval | [assets/test_image.png](../../../../sources/naver__dune/assets/test_image.png) | eval signal |
| config | [Makefile](../../../../sources/naver__dune/Makefile) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 2 | [teachers/dinov2/layers/patch_embed.py](../../../../sources/naver__dune/teachers/dinov2/layers/patch_embed.py)<br>[model/common/patch_embed.py](../../../../sources/naver__dune/model/common/patch_embed.py) |
| spec | 0 | not obvious |
| eval | 2 | [assets/test_image_patch_pca_dune_vitbase14_448_paper.png](../../../../sources/naver__dune/assets/test_image_patch_pca_dune_vitbase14_448_paper.png)<br>[assets/test_image.png](../../../../sources/naver__dune/assets/test_image.png) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 3 | [README.md](../../../../sources/naver__dune/README.md)<br>[teachers/dinov2/README.md](../../../../sources/naver__dune/teachers/dinov2/README.md)<br>[scripts/teachers/README.md](../../../../sources/naver__dune/scripts/teachers/README.md) |
| config | 1 | [Makefile](../../../../sources/naver__dune/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 2 | [assets/test_image_patch_pca_dune_vitbase14_448_paper.png](../../../../sources/naver__dune/assets/test_image_patch_pca_dune_vitbase14_448_paper.png)<br>[assets/test_image.png](../../../../sources/naver__dune/assets/test_image.png) |
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

1. Start from key references: `teachers/dinov2/layers/patch_embed.py`, `model/common/patch_embed.py`, `README.md`.
2. Inspect retrieval/memory/indexing through: `teachers/dinov2/layers/patch_embed.py`, `model/common/patch_embed.py`.
3. Verify behavior through test/eval files: `assets/test_image_patch_pca_dune_vitbase14_448_paper.png`, `assets/test_image.png`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Code repository for "DUNE Distilling a Universal Encoder from Heterogeneous 2D and 3D Teachers". 핵심 구조 신호는 Python, Makefile, README.md, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
