# naver-ai/egtr Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

[CVPR 2024 Best paper award candidate] EGTR: Extracting Graph from Transformer for Scene Graph Generation

## 요약

- 조사 단위: `sources/naver-ai__egtr` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 41 files, 11 directories, depth score 56, key references 6개입니다.
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
| Repository | naver-ai/egtr |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 148 |
| Forks | 23 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver-ai__egtr](../../../../sources/naver-ai__egtr) |
| Existing report | [reports/korea-trending/repositories/naver-ai__egtr.md](../../../korea-trending/repositories/naver-ai__egtr.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 41 / 11 |
| Max observed depth | 4 |
| Top directories | data, lib, misc, model, util |
| Top extensions | .py: 24, .h: 3, (none): 3, .cpp: 2, .cuh: 2, .c: 1, .cu: 1, .md: 1, .png: 1, .pyx: 1, .sh: 1, .txt: 1 |
| Source patterns | spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| lib | source boundary | 6 |
| data | top-level component | 1 |
| misc | top-level component | 1 |
| model | top-level component | 1 |
| util | top-level component | 1 |


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
| config | [requirements.txt](../../../../sources/naver-ai__egtr/requirements.txt) | config signal |
| docs | [README.md](../../../../sources/naver-ai__egtr/README.md) | docs signal |
| eval | [lib/evaluation/__init__.py](../../../../sources/naver-ai__egtr/lib/evaluation/__init__.py) | eval signal |
| eval | [lib/evaluation/ap_eval_rel.py](../../../../sources/naver-ai__egtr/lib/evaluation/ap_eval_rel.py) | eval signal |
| eval | [lib/evaluation/coco_eval.py](../../../../sources/naver-ai__egtr/lib/evaluation/coco_eval.py) | eval signal |
| eval | [lib/evaluation/oi_eval.py](../../../../sources/naver-ai__egtr/lib/evaluation/oi_eval.py) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 2 | [requirements.txt](../../../../sources/naver-ai__egtr/requirements.txt)<br>[misc/architecture.png](../../../../sources/naver-ai__egtr/misc/architecture.png) |
| eval | 5 | [lib/evaluation/__init__.py](../../../../sources/naver-ai__egtr/lib/evaluation/__init__.py)<br>[lib/evaluation/ap_eval_rel.py](../../../../sources/naver-ai__egtr/lib/evaluation/ap_eval_rel.py)<br>[lib/evaluation/coco_eval.py](../../../../sources/naver-ai__egtr/lib/evaluation/coco_eval.py)<br>[lib/evaluation/oi_eval.py](../../../../sources/naver-ai__egtr/lib/evaluation/oi_eval.py)<br>[lib/evaluation/sg_eval.py](../../../../sources/naver-ai__egtr/lib/evaluation/sg_eval.py) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/naver-ai__egtr/README.md) |
| config | 1 | [requirements.txt](../../../../sources/naver-ai__egtr/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 5 | [lib/evaluation/__init__.py](../../../../sources/naver-ai__egtr/lib/evaluation/__init__.py)<br>[lib/evaluation/ap_eval_rel.py](../../../../sources/naver-ai__egtr/lib/evaluation/ap_eval_rel.py)<br>[lib/evaluation/coco_eval.py](../../../../sources/naver-ai__egtr/lib/evaluation/coco_eval.py)<br>[lib/evaluation/oi_eval.py](../../../../sources/naver-ai__egtr/lib/evaluation/oi_eval.py)<br>[lib/evaluation/sg_eval.py](../../../../sources/naver-ai__egtr/lib/evaluation/sg_eval.py) |
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

1. Start from key references: `requirements.txt`, `README.md`, `lib/evaluation/__init__.py`.
2. Verify behavior through test/eval files: `lib/evaluation/__init__.py`, `lib/evaluation/ap_eval_rel.py`, `lib/evaluation/coco_eval.py`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 CVPR 2024 Best paper award candidate EGTR Extracting Graph from Transformer for Scene Graph Generation. 핵심 구조 신호는 Python, requirements.txt, README.md, LICENSE, torch, transformers이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
