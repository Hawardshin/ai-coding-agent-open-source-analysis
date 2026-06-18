# naver/dust3r Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

DUSt3R: Geometric 3D Vision Made Easy

## 요약

- 조사 단위: `sources/naver__dust3r` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 96 files, 16 directories, depth score 78, key references 8개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 config=requirements_optional.txt, requirements.txt이고, 의존성 단서는 torch, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/dust3r |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 7196 |
| Forks | 759 |
| License | NOASSERTION |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/naver__dust3r](../../../../sources/naver__dust3r) |
| Existing report | [reports/korea-trending/repositories/naver__dust3r.md](../../../korea-trending/repositories/naver__dust3r.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 96 / 16 |
| Max observed depth | 4 |
| Top directories | assets, croco, datasets_preprocess, docker, dust3r, dust3r_visloc |
| Top extensions | .py: 76, .jpg: 5, (none): 4, .md: 3, .dockerfile: 2, .sh: 2, .txt: 2, .yml: 2 |
| Source patterns | retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| assets | top-level component | 1 |
| croco | top-level component | 1 |
| datasets_preprocess | top-level component | 1 |
| docker | documentation surface | 1 |
| dust3r | top-level component | 1 |
| dust3r_visloc | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | torch |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| config | [requirements_optional.txt](../../../../sources/naver__dust3r/requirements_optional.txt) | config signal |
| config | [requirements.txt](../../../../sources/naver__dust3r/requirements.txt) | config signal |
| docs | [README.md](../../../../sources/naver__dust3r/README.md) | docs signal |
| docs | [dust3r_visloc/README.md](../../../../sources/naver__dust3r/dust3r_visloc/README.md) | docs signal |
| docs | [datasets_preprocess/habitat/README.md](../../../../sources/naver__dust3r/datasets_preprocess/habitat/README.md) | docs signal |
| eval | [dust3r_visloc/evaluation.py](../../../../sources/naver__dust3r/dust3r_visloc/evaluation.py) | eval signal |
| container | [docker/docker-compose-cpu.yml](../../../../sources/naver__dust3r/docker/docker-compose-cpu.yml) | container support |
| container | [docker/docker-compose-cuda.yml](../../../../sources/naver__dust3r/docker/docker-compose-cuda.yml) | container support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 1 | [dust3r/patch_embed.py](../../../../sources/naver__dust3r/dust3r/patch_embed.py) |
| spec | 2 | [requirements_optional.txt](../../../../sources/naver__dust3r/requirements_optional.txt)<br>[requirements.txt](../../../../sources/naver__dust3r/requirements.txt) |
| eval | 1 | [dust3r_visloc/evaluation.py](../../../../sources/naver__dust3r/dust3r_visloc/evaluation.py) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 2 | [docker/docker-compose-cpu.yml](../../../../sources/naver__dust3r/docker/docker-compose-cpu.yml)<br>[docker/docker-compose-cuda.yml](../../../../sources/naver__dust3r/docker/docker-compose-cuda.yml) |
| instruction | 0 | not obvious |
| docs | 3 | [README.md](../../../../sources/naver__dust3r/README.md)<br>[dust3r_visloc/README.md](../../../../sources/naver__dust3r/dust3r_visloc/README.md)<br>[datasets_preprocess/habitat/README.md](../../../../sources/naver__dust3r/datasets_preprocess/habitat/README.md) |
| config | 2 | [requirements_optional.txt](../../../../sources/naver__dust3r/requirements_optional.txt)<br>[requirements.txt](../../../../sources/naver__dust3r/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1 | [dust3r_visloc/evaluation.py](../../../../sources/naver__dust3r/dust3r_visloc/evaluation.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 2 | [docker/docker-compose-cpu.yml](../../../../sources/naver__dust3r/docker/docker-compose-cpu.yml)<br>[docker/docker-compose-cuda.yml](../../../../sources/naver__dust3r/docker/docker-compose-cuda.yml) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `requirements_optional.txt`, `requirements.txt`, `README.md`.
2. Inspect retrieval/memory/indexing through: `dust3r/patch_embed.py`.
3. Verify behavior through test/eval files: `dust3r_visloc/evaluation.py`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 DUSt3R Geometric 3D Vision Made Easy. 핵심 구조 신호는 Python, requirements.txt, README.md, LICENSE, torch, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
