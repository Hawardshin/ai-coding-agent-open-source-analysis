# naver-ai/BlendNeRF Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Official pytorch implementation of BlendNeRF (ICCV 2023)

## 요약

- 조사 단위: `sources/naver-ai__BlendNeRF` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 91 files, 20 directories, depth score 47, key references 5개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=README.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 5개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver-ai/BlendNeRF |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 148 |
| Forks | 9 |
| License | NOASSERTION |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/naver-ai__BlendNeRF](../../../../sources/naver-ai__BlendNeRF) |
| Existing report | [reports/korea-trending/repositories/naver-ai__BlendNeRF.md](../../../korea-trending/repositories/naver-ai__BlendNeRF.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 91 / 20 |
| Max observed depth | 4 |
| Top directories | assets, dnnlib, modules, test_images, torch_utils, training |
| Top extensions | .py: 44, .png: 28, .cu: 6, .cpp: 3, .h: 3, (none): 3, .sh: 2, .md: 1, .yml: 1 |
| Source patterns | eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| assets | top-level component | 1 |
| dnnlib | source boundary | 1 |
| modules | top-level component | 1 |
| test_images | validation surface | 1 |
| torch_utils | top-level component | 1 |
| training | top-level component | 1 |


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
| docs | [README.md](../../../../sources/naver-ai__BlendNeRF/README.md) | docs signal |
| eval | [test_images/celeba_hq/original.png](../../../../sources/naver-ai__BlendNeRF/test_images/celeba_hq/original.png) | eval signal |
| eval | [test_images/celeba_hq/reference.png](../../../../sources/naver-ai__BlendNeRF/test_images/celeba_hq/reference.png) | eval signal |
| eval | [test_images/celeba_hq/83_126_face/original.png](../../../../sources/naver-ai__BlendNeRF/test_images/celeba_hq/83_126_face/original.png) | eval signal |
| eval | [test_images/celeba_hq/83_126_face/reference.png](../../../../sources/naver-ai__BlendNeRF/test_images/celeba_hq/83_126_face/reference.png) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 24 | [test_images/celeba_hq/original.png](../../../../sources/naver-ai__BlendNeRF/test_images/celeba_hq/original.png)<br>[test_images/celeba_hq/reference.png](../../../../sources/naver-ai__BlendNeRF/test_images/celeba_hq/reference.png)<br>[test_images/celeba_hq/83_126_face/original.png](../../../../sources/naver-ai__BlendNeRF/test_images/celeba_hq/83_126_face/original.png)<br>[test_images/celeba_hq/83_126_face/reference.png](../../../../sources/naver-ai__BlendNeRF/test_images/celeba_hq/83_126_face/reference.png)<br>[test_images/celeba_hq/135_434_lip/original.png](../../../../sources/naver-ai__BlendNeRF/test_images/celeba_hq/135_434_lip/original.png)<br>[test_images/celeba_hq/135_434_lip/reference.png](../../../../sources/naver-ai__BlendNeRF/test_images/celeba_hq/135_434_lip/reference.png)<br>[test_images/celeba_hq/116_27_hair/original.png](../../../../sources/naver-ai__BlendNeRF/test_images/celeba_hq/116_27_hair/original.png)<br>[test_images/celeba_hq/116_27_hair/reference.png](../../../../sources/naver-ai__BlendNeRF/test_images/celeba_hq/116_27_hair/reference.png) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/naver-ai__BlendNeRF/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 24 | [test_images/celeba_hq/original.png](../../../../sources/naver-ai__BlendNeRF/test_images/celeba_hq/original.png)<br>[test_images/celeba_hq/reference.png](../../../../sources/naver-ai__BlendNeRF/test_images/celeba_hq/reference.png)<br>[test_images/celeba_hq/83_126_face/original.png](../../../../sources/naver-ai__BlendNeRF/test_images/celeba_hq/83_126_face/original.png)<br>[test_images/celeba_hq/83_126_face/reference.png](../../../../sources/naver-ai__BlendNeRF/test_images/celeba_hq/83_126_face/reference.png)<br>[test_images/celeba_hq/135_434_lip/original.png](../../../../sources/naver-ai__BlendNeRF/test_images/celeba_hq/135_434_lip/original.png)<br>[test_images/celeba_hq/135_434_lip/reference.png](../../../../sources/naver-ai__BlendNeRF/test_images/celeba_hq/135_434_lip/reference.png) |
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

1. Start from key references: `README.md`, `test_images/celeba_hq/original.png`, `test_images/celeba_hq/reference.png`.
2. Verify behavior through test/eval files: `test_images/celeba_hq/original.png`, `test_images/celeba_hq/reference.png`, `test_images/celeba_hq/83_126_face/original.png`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Official pytorch implementation of BlendNeRF ICCV 2023. 핵심 구조 신호는 Python, README.md, LICENSE, tests, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 ci signal not obvious, needs deeper structural scan입니다.
