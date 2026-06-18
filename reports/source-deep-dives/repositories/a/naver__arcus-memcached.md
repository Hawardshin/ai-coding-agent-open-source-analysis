# naver/arcus-memcached Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

ARCUS memory cache server

## 요약

- 조사 단위: `sources/naver__arcus-memcached` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 338 files, 25 directories, depth score 80, key references 10개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 spec/docs-driven, eval/test harness, containerized deploy 구조로 읽힌다. 핵심 소스 근거는 docs=README, README.md, scripts/README.damemtop이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/arcus-memcached |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | C |
| Stars | 76 |
| Forks | 59 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/naver__arcus-memcached](../../../../sources/naver__arcus-memcached) |
| Existing report | [reports/korea-trending/repositories/naver__arcus-memcached.md](../../../korea-trending/repositories/naver__arcus-memcached.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 338 / 25 |
| Max observed depth | 3 |
| Top directories | .github, config, deps, devtools, doc, docs, engines, include, m4, rfc1321, scripts, t, win32 |
| Top extensions | .t: 99, .h: 64, .c: 59, .md: 25, (none): 22, .pl: 20, .bt: 7, .sh: 5, .txt: 5, .in: 4, .xml: 4, .conf: 3 |
| Source patterns | spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 21 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| deps | top-level component | 1 |
| devtools | top-level component | 1 |
| doc | documentation surface | 1 |
| engines | top-level component | 1 |
| include | top-level component | 1 |
| m4 | top-level component | 1 |
| rfc1321 | top-level component | 1 |
| scripts | top-level component | 1 |
| t | top-level component | 1 |
| win32 | top-level component | 1 |


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
| docs | [README](../../../../sources/naver__arcus-memcached/README) | docs signal |
| docs | [README.md](../../../../sources/naver__arcus-memcached/README.md) | docs signal |
| docs | [scripts/README.damemtop](../../../../sources/naver__arcus-memcached/scripts/README.damemtop) | docs signal |
| docs | [docs/install.md](../../../../sources/naver__arcus-memcached/docs/install.md) | docs signal |
| eval | [memcached.spec.in](../../../../sources/naver__arcus-memcached/memcached.spec.in) | eval signal |
| eval | [run_test.pl](../../../../sources/naver__arcus-memcached/run_test.pl) | eval signal |
| eval | [trace.h](../../../../sources/naver__arcus-memcached/trace.h) | eval signal |
| eval | [t/arcus_ping_test.t](../../../../sources/naver__arcus-memcached/t/arcus_ping_test.t) | eval signal |
| ci | [.github/workflows/CI.yml](../../../../sources/naver__arcus-memcached/.github/workflows/CI.yml) | ci support |
| container | [Dockerfile](../../../../sources/naver__arcus-memcached/Dockerfile) | container support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 1 | [memcached.spec.in](../../../../sources/naver__arcus-memcached/memcached.spec.in) |
| eval | 15 | [memcached.spec.in](../../../../sources/naver__arcus-memcached/memcached.spec.in)<br>[run_test.pl](../../../../sources/naver__arcus-memcached/run_test.pl)<br>[trace.h](../../../../sources/naver__arcus-memcached/trace.h)<br>[t/arcus_ping_test.t](../../../../sources/naver__arcus-memcached/t/arcus_ping_test.t)<br>[t/coll_bkeymismatch_test.t](../../../../sources/naver__arcus-memcached/t/coll_bkeymismatch_test.t)<br>[t/coll_bkeyoor_test.t](../../../../sources/naver__arcus-memcached/t/coll_bkeyoor_test.t)<br>[t/coll_bop_position_test.bt](../../../../sources/naver__arcus-memcached/t/coll_bop_position_test.bt)<br>[t/coll_bop_smget_trim_test.t](../../../../sources/naver__arcus-memcached/t/coll_bop_smget_trim_test.t) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/CI.yml](../../../../sources/naver__arcus-memcached/.github/workflows/CI.yml) |
| container | 1 | [Dockerfile](../../../../sources/naver__arcus-memcached/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 39 | [README](../../../../sources/naver__arcus-memcached/README)<br>[README.md](../../../../sources/naver__arcus-memcached/README.md)<br>[scripts/README.damemtop](../../../../sources/naver__arcus-memcached/scripts/README.damemtop)<br>[docs/install.md](../../../../sources/naver__arcus-memcached/docs/install.md)<br>[docs/ascii-protocol/ch01-arcus-basic-concept.md](../../../../sources/naver__arcus-memcached/docs/ascii-protocol/ch01-arcus-basic-concept.md)<br>[docs/ascii-protocol/ch02-collection-items.md](../../../../sources/naver__arcus-memcached/docs/ascii-protocol/ch02-collection-items.md)<br>[docs/ascii-protocol/ch03-item-attributes.md](../../../../sources/naver__arcus-memcached/docs/ascii-protocol/ch03-item-attributes.md)<br>[docs/ascii-protocol/ch04-command-key-value.md](../../../../sources/naver__arcus-memcached/docs/ascii-protocol/ch04-command-key-value.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 15 | [memcached.spec.in](../../../../sources/naver__arcus-memcached/memcached.spec.in)<br>[run_test.pl](../../../../sources/naver__arcus-memcached/run_test.pl)<br>[trace.h](../../../../sources/naver__arcus-memcached/trace.h)<br>[t/arcus_ping_test.t](../../../../sources/naver__arcus-memcached/t/arcus_ping_test.t)<br>[t/coll_bkeymismatch_test.t](../../../../sources/naver__arcus-memcached/t/coll_bkeymismatch_test.t)<br>[t/coll_bkeyoor_test.t](../../../../sources/naver__arcus-memcached/t/coll_bkeyoor_test.t) |
| CI workflows | 1 | [.github/workflows/CI.yml](../../../../sources/naver__arcus-memcached/.github/workflows/CI.yml) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/naver__arcus-memcached/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `README`, `README.md`, `scripts/README.damemtop`.
2. Verify behavior through test/eval files: `memcached.spec.in`, `run_test.pl`, `trace.h`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 ARCUS memory cache server. 핵심 구조 신호는 C, Dockerfile, README.md, LICENSE, tests, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
