# naver/arcus Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

ARCUS is the NAVER memcached with lists, sets, maps and b+trees. http://naver.github.io/arcus

## 요약

- 조사 단위: `sources/naver__arcus` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 349 files, 37 directories, depth score 74, key references 9개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 spec/docs-driven, eval/test harness, containerized deploy 구조로 읽힌다. 핵심 소스 근거는 docs=README.md, docs/arcus-admin-script-usage.md, docs/arcus-cloud-configuration-file.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/arcus |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Shell |
| Stars | 316 |
| Forks | 75 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver__arcus](../../../../sources/naver__arcus) |
| Existing report | [reports/korea-trending/repositories/naver__arcus.md](../../../korea-trending/repositories/naver__arcus.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 349 / 37 |
| Max observed depth | 6 |
| Top directories | clients, deps, docs, scripts, server, zookeeper |
| Top extensions | .c: 114, .h: 86, (none): 21, .in: 17, .md: 14, .cmake: 13, .m4: 13, .sh: 13, .am: 8, .json: 7, .png: 7, .py: 7 |
| Source patterns | spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 20 |
| clients | source boundary | 1 |
| deps | top-level component | 1 |
| scripts | top-level component | 1 |
| server | source boundary | 1 |
| zookeeper | top-level component | 1 |


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
| docs | [README.md](../../../../sources/naver__arcus/README.md) | docs signal |
| docs | [docs/arcus-admin-script-usage.md](../../../../sources/naver__arcus/docs/arcus-admin-script-usage.md) | docs signal |
| docs | [docs/arcus-cloud-configuration-file.md](../../../../sources/naver__arcus/docs/arcus-cloud-configuration-file.md) | docs signal |
| docs | [docs/arcus-cloud-in-multiple-servers.md](../../../../sources/naver__arcus/docs/arcus-cloud-in-multiple-servers.md) | docs signal |
| eval | [scripts/conf/test.json](../../../../sources/naver__arcus/scripts/conf/test.json) | eval signal |
| eval | [deps/libevent-1.4.13-stable/WIN32-Prj/time_test/time_test.dsp](../../../../sources/naver__arcus/deps/libevent-1.4.13-stable/WIN32-Prj/time_test/time_test.dsp) | eval signal |
| eval | [deps/libevent-1.4.13-stable/WIN32-Prj/signal_test/signal_test.dsp](../../../../sources/naver__arcus/deps/libevent-1.4.13-stable/WIN32-Prj/signal_test/signal_test.dsp) | eval signal |
| eval | [deps/libevent-1.4.13-stable/WIN32-Prj/event_test/event_test.dsp](../../../../sources/naver__arcus/deps/libevent-1.4.13-stable/WIN32-Prj/event_test/event_test.dsp) | eval signal |
| container | [docker-compose.yml](../../../../sources/naver__arcus/docker-compose.yml) | container support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 1 | [docs/images/arcus-architecture.png](../../../../sources/naver__arcus/docs/images/arcus-architecture.png) |
| eval | 73 | [scripts/conf/test.json](../../../../sources/naver__arcus/scripts/conf/test.json)<br>[deps/libevent-1.4.13-stable/WIN32-Prj/time_test/time_test.dsp](../../../../sources/naver__arcus/deps/libevent-1.4.13-stable/WIN32-Prj/time_test/time_test.dsp)<br>[deps/libevent-1.4.13-stable/WIN32-Prj/signal_test/signal_test.dsp](../../../../sources/naver__arcus/deps/libevent-1.4.13-stable/WIN32-Prj/signal_test/signal_test.dsp)<br>[deps/libevent-1.4.13-stable/WIN32-Prj/event_test/event_test.dsp](../../../../sources/naver__arcus/deps/libevent-1.4.13-stable/WIN32-Prj/event_test/event_test.dsp)<br>[deps/libevent-1.4.13-stable/WIN32-Prj/event_test/test.txt](../../../../sources/naver__arcus/deps/libevent-1.4.13-stable/WIN32-Prj/event_test/test.txt)<br>[deps/libevent-1.4.13-stable/test/bench.c](../../../../sources/naver__arcus/deps/libevent-1.4.13-stable/test/bench.c)<br>[deps/libevent-1.4.13-stable/test/Makefile.am](../../../../sources/naver__arcus/deps/libevent-1.4.13-stable/test/Makefile.am)<br>[deps/libevent-1.4.13-stable/test/Makefile.in](../../../../sources/naver__arcus/deps/libevent-1.4.13-stable/test/Makefile.in) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 1 | [docker-compose.yml](../../../../sources/naver__arcus/docker-compose.yml) |
| instruction | 0 | not obvious |
| docs | 22 | [README.md](../../../../sources/naver__arcus/README.md)<br>[docs/arcus-admin-script-usage.md](../../../../sources/naver__arcus/docs/arcus-admin-script-usage.md)<br>[docs/arcus-cloud-configuration-file.md](../../../../sources/naver__arcus/docs/arcus-cloud-configuration-file.md)<br>[docs/arcus-cloud-in-multiple-servers.md](../../../../sources/naver__arcus/docs/arcus-cloud-in-multiple-servers.md)<br>[docs/arcus-directory-structure.md](../../../../sources/naver__arcus/docs/arcus-directory-structure.md)<br>[docs/build-faq.md](../../../../sources/naver__arcus/docs/build-faq.md)<br>[docs/deploy-ssh-public-key.md](../../../../sources/naver__arcus/docs/deploy-ssh-public-key.md)<br>[docs/deploying-arcus-to-multiple-servers.md](../../../../sources/naver__arcus/docs/deploying-arcus-to-multiple-servers.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 73 | [scripts/conf/test.json](../../../../sources/naver__arcus/scripts/conf/test.json)<br>[deps/libevent-1.4.13-stable/WIN32-Prj/time_test/time_test.dsp](../../../../sources/naver__arcus/deps/libevent-1.4.13-stable/WIN32-Prj/time_test/time_test.dsp)<br>[deps/libevent-1.4.13-stable/WIN32-Prj/signal_test/signal_test.dsp](../../../../sources/naver__arcus/deps/libevent-1.4.13-stable/WIN32-Prj/signal_test/signal_test.dsp)<br>[deps/libevent-1.4.13-stable/WIN32-Prj/event_test/event_test.dsp](../../../../sources/naver__arcus/deps/libevent-1.4.13-stable/WIN32-Prj/event_test/event_test.dsp)<br>[deps/libevent-1.4.13-stable/WIN32-Prj/event_test/test.txt](../../../../sources/naver__arcus/deps/libevent-1.4.13-stable/WIN32-Prj/event_test/test.txt)<br>[deps/libevent-1.4.13-stable/test/bench.c](../../../../sources/naver__arcus/deps/libevent-1.4.13-stable/test/bench.c) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 1 | [docker-compose.yml](../../../../sources/naver__arcus/docker-compose.yml) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `README.md`, `docs/arcus-admin-script-usage.md`, `docs/arcus-cloud-configuration-file.md`.
2. Verify behavior through test/eval files: `scripts/conf/test.json`, `deps/libevent-1.4.13-stable/WIN32-Prj/time_test/time_test.dsp`, `deps/libevent-1.4.13-stable/WIN32-Prj/signal_test/signal_test.dsp`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 ARCUS is the NAVER memcached with lists, sets, maps and b+trees. http //naver.github.io/arcus. 핵심 구조 신호는 Shell, docker-compose.yml, README.md, LICENSE, docs, docker이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
