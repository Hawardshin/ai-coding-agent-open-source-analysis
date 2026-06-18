# naver/mast3r Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Grounding Image Matching in 3D with MASt3R

## 요약

- 조사 단위: `sources/naver__mast3r` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 63 files, 14 directories, depth score 61, key references 4개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, spec/docs-driven, containerized deploy 구조로 읽힌다. 핵심 소스 근거는 config=requirements.txt이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 4개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/mast3r |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 2999 |
| Forks | 272 |
| License | NOASSERTION |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/naver__mast3r](../../../../sources/naver__mast3r) |
| Existing report | [reports/korea-trending/repositories/naver__mast3r.md](../../../korea-trending/repositories/naver__mast3r.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 63 / 14 |
| Max observed depth | 4 |
| Top directories | assets, docker, dust3r, mast3r |
| Top extensions | .py: 38, .jpg: 12, (none): 5, .dockerfile: 2, .sh: 2, .yml: 2, .md: 1, .txt: 1 |
| Source patterns | retrieval/vector path, spec/docs-driven, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| assets | top-level component | 1 |
| docker | documentation surface | 1 |
| dust3r | top-level component | 1 |
| mast3r | top-level component | 1 |


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
| config | [requirements.txt](../../../../sources/naver__mast3r/requirements.txt) | config signal |
| docs | [README.md](../../../../sources/naver__mast3r/README.md) | docs signal |
| container | [docker/docker-compose-cpu.yml](../../../../sources/naver__mast3r/docker/docker-compose-cpu.yml) | container support |
| container | [docker/docker-compose-cuda.yml](../../../../sources/naver__mast3r/docker/docker-compose-cuda.yml) | container support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 3 | [mast3r/retrieval/graph.py](../../../../sources/naver__mast3r/mast3r/retrieval/graph.py)<br>[mast3r/retrieval/model.py](../../../../sources/naver__mast3r/mast3r/retrieval/model.py)<br>[mast3r/retrieval/processor.py](../../../../sources/naver__mast3r/mast3r/retrieval/processor.py) |
| spec | 1 | [requirements.txt](../../../../sources/naver__mast3r/requirements.txt) |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 2 | [docker/docker-compose-cpu.yml](../../../../sources/naver__mast3r/docker/docker-compose-cpu.yml)<br>[docker/docker-compose-cuda.yml](../../../../sources/naver__mast3r/docker/docker-compose-cuda.yml) |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/naver__mast3r/README.md) |
| config | 1 | [requirements.txt](../../../../sources/naver__mast3r/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 0 | not obvious |
| Containers / deploy | 2 | [docker/docker-compose-cpu.yml](../../../../sources/naver__mast3r/docker/docker-compose-cpu.yml)<br>[docker/docker-compose-cuda.yml](../../../../sources/naver__mast3r/docker/docker-compose-cuda.yml) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; test/eval path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `requirements.txt`, `README.md`, `docker/docker-compose-cpu.yml`.
2. Inspect retrieval/memory/indexing through: `mast3r/retrieval/graph.py`, `mast3r/retrieval/model.py`, `mast3r/retrieval/processor.py`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Grounding Image Matching in 3D with MASt3R. 핵심 구조 신호는 Python, requirements.txt, README.md, LICENSE, docs, spec-artifacts이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
