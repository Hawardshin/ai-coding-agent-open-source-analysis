# naver/arcus-c-client Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

ARCUS C client

## 요약

- 조사 단위: `sources/naver__arcus-c-client` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 612 files, 27 directories, depth score 108, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=libtest/server.cc, libtest/server.h, libmemcached/server.cc이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/arcus-c-client |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | C++ |
| Stars | 13 |
| Forks | 16 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/naver__arcus-c-client](../../../../sources/naver__arcus-c-client) |
| Existing report | [reports/korea-trending/repositories/naver__arcus-c-client.md](../../../korea-trending/repositories/naver__arcus-c-client.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 612 / 27 |
| Max observed depth | 3 |
| Top directories | .github, arcus, clients, config, devtools, docs, example, libhashkit, libmemcached, libmemcachedinternal, libtest, m4, poll, support, tests, util, win32 |
| Top extensions | .h: 146, .cc: 143, .3: 101, .m4: 89, .hpp: 26, .c: 25, .am: 19, .md: 16, .1: 10, (none): 10, .in: 8, .png: 3 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 43 |
| tests | validation surface | 41 |
| .github | ci surface | 1 |
| arcus | top-level component | 1 |
| clients | source boundary | 1 |
| config | top-level component | 1 |
| devtools | top-level component | 1 |
| example | top-level component | 1 |
| libhashkit | source boundary | 1 |
| libmemcached | source boundary | 1 |
| libmemcachedinternal | source boundary | 1 |
| libtest | validation surface | 1 |
| m4 | top-level component | 1 |
| poll | top-level component | 1 |
| support | top-level component | 1 |
| util | top-level component | 1 |
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
| entrypoints | [libtest/server.cc](../../../../sources/naver__arcus-c-client/libtest/server.cc) | entrypoints signal |
| entrypoints | [libtest/server.h](../../../../sources/naver__arcus-c-client/libtest/server.h) | entrypoints signal |
| entrypoints | [libmemcached/server.cc](../../../../sources/naver__arcus-c-client/libmemcached/server.cc) | entrypoints signal |
| entrypoints | [libmemcached/server.h](../../../../sources/naver__arcus-c-client/libmemcached/server.h) | entrypoints signal |
| docs | [README.md](../../../../sources/naver__arcus-c-client/README.md) | docs signal |
| docs | [libmemcached/memcached/README.txt](../../../../sources/naver__arcus-c-client/libmemcached/memcached/README.txt) | docs signal |
| docs | [docs/conf.py.in](../../../../sources/naver__arcus-c-client/docs/conf.py.in) | docs signal |
| docs | [docs/getting-started-guide.md](../../../../sources/naver__arcus-c-client/docs/getting-started-guide.md) | docs signal |
| eval | [tests/atomsmasher.cc](../../../../sources/naver__arcus-c-client/tests/atomsmasher.cc) | eval signal |
| eval | [tests/basic.cc](../../../../sources/naver__arcus-c-client/tests/basic.cc) | eval signal |
| eval | [tests/basic.h](../../../../sources/naver__arcus-c-client/tests/basic.h) | eval signal |
| eval | [tests/c_sasl_test.c](../../../../sources/naver__arcus-c-client/tests/c_sasl_test.c) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 6 | [libtest/server.cc](../../../../sources/naver__arcus-c-client/libtest/server.cc)<br>[libtest/server.h](../../../../sources/naver__arcus-c-client/libtest/server.h)<br>[libmemcached/server.cc](../../../../sources/naver__arcus-c-client/libmemcached/server.cc)<br>[libmemcached/server.h](../../../../sources/naver__arcus-c-client/libmemcached/server.h)<br>[libmemcached/server.hpp](../../../../sources/naver__arcus-c-client/libmemcached/server.hpp)<br>[libmemcached/csl/server.h](../../../../sources/naver__arcus-c-client/libmemcached/csl/server.h) |
| agentRuntime | 5 | [libtest/runner.cc](../../../../sources/naver__arcus-c-client/libtest/runner.cc)<br>[libtest/runner.h](../../../../sources/naver__arcus-c-client/libtest/runner.h)<br>[libmemcached/memory.h](../../../../sources/naver__arcus-c-client/libmemcached/memory.h)<br>[libmemcached/csl/context.cc](../../../../sources/naver__arcus-c-client/libmemcached/csl/context.cc)<br>[libmemcached/csl/context.h](../../../../sources/naver__arcus-c-client/libmemcached/csl/context.h) |
| mcp | 0 | not obvious |
| retrieval | 3 | [libmemcached/memory.h](../../../../sources/naver__arcus-c-client/libmemcached/memory.h)<br>[docs/man/memcached_get_memory_allocators.3](../../../../sources/naver__arcus-c-client/docs/man/memcached_get_memory_allocators.3)<br>[docs/man/memcached_set_memory_allocators.3](../../../../sources/naver__arcus-c-client/docs/man/memcached_set_memory_allocators.3) |
| spec | 2 | [support/libmemcached-fc.spec.in](../../../../sources/naver__arcus-c-client/support/libmemcached-fc.spec.in)<br>[support/libmemcached.spec.in](../../../../sources/naver__arcus-c-client/support/libmemcached.spec.in) |
| eval | 65 | [tests/atomsmasher.cc](../../../../sources/naver__arcus-c-client/tests/atomsmasher.cc)<br>[tests/basic.cc](../../../../sources/naver__arcus-c-client/tests/basic.cc)<br>[tests/basic.h](../../../../sources/naver__arcus-c-client/tests/basic.h)<br>[tests/c_sasl_test.c](../../../../sources/naver__arcus-c-client/tests/c_sasl_test.c)<br>[tests/c_test.c](../../../../sources/naver__arcus-c-client/tests/c_test.c)<br>[tests/cpp_example.cc](../../../../sources/naver__arcus-c-client/tests/cpp_example.cc)<br>[tests/cycle.cc](../../../../sources/naver__arcus-c-client/tests/cycle.cc)<br>[tests/debug.cc](../../../../sources/naver__arcus-c-client/tests/debug.cc) |
| security | 2 | [docs/man/memcached_destroy_sasl_auth_data.3](../../../../sources/naver__arcus-c-client/docs/man/memcached_destroy_sasl_auth_data.3)<br>[docs/man/memcached_sasl_set_auth_data.3](../../../../sources/naver__arcus-c-client/docs/man/memcached_sasl_set_auth_data.3) |
| ci | 2 | [libhashkit/jenkins.cc](../../../../sources/naver__arcus-c-client/libhashkit/jenkins.cc)<br>[.github/workflows/CI.yml](../../../../sources/naver__arcus-c-client/.github/workflows/CI.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 130 | [README.md](../../../../sources/naver__arcus-c-client/README.md)<br>[libmemcached/memcached/README.txt](../../../../sources/naver__arcus-c-client/libmemcached/memcached/README.txt)<br>[docs/conf.py.in](../../../../sources/naver__arcus-c-client/docs/conf.py.in)<br>[docs/getting-started-guide.md](../../../../sources/naver__arcus-c-client/docs/getting-started-guide.md)<br>[docs/include.am](../../../../sources/naver__arcus-c-client/docs/include.am)<br>[docs/user-guide/01-arcus-cloud-basics.md](../../../../sources/naver__arcus-c-client/docs/user-guide/01-arcus-cloud-basics.md)<br>[docs/user-guide/02-arcus-c-client.md](../../../../sources/naver__arcus-c-client/docs/user-guide/02-arcus-c-client.md)<br>[docs/user-guide/03-key-value-API.md](../../../../sources/naver__arcus-c-client/docs/user-guide/03-key-value-API.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 65 | [tests/atomsmasher.cc](../../../../sources/naver__arcus-c-client/tests/atomsmasher.cc)<br>[tests/basic.cc](../../../../sources/naver__arcus-c-client/tests/basic.cc)<br>[tests/basic.h](../../../../sources/naver__arcus-c-client/tests/basic.h)<br>[tests/c_sasl_test.c](../../../../sources/naver__arcus-c-client/tests/c_sasl_test.c)<br>[tests/c_test.c](../../../../sources/naver__arcus-c-client/tests/c_test.c)<br>[tests/cpp_example.cc](../../../../sources/naver__arcus-c-client/tests/cpp_example.cc) |
| CI workflows | 2 | [libhashkit/jenkins.cc](../../../../sources/naver__arcus-c-client/libhashkit/jenkins.cc)<br>[.github/workflows/CI.yml](../../../../sources/naver__arcus-c-client/.github/workflows/CI.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 2 | [docs/man/memcached_destroy_sasl_auth_data.3](../../../../sources/naver__arcus-c-client/docs/man/memcached_destroy_sasl_auth_data.3)<br>[docs/man/memcached_sasl_set_auth_data.3](../../../../sources/naver__arcus-c-client/docs/man/memcached_sasl_set_auth_data.3) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `libtest/server.cc`, `libtest/server.h`, `libmemcached/server.cc`.
2. Trace execution through entrypoints: `libtest/server.cc`, `libtest/server.h`, `libmemcached/server.cc`.
3. Map agent/tool runtime through: `libtest/runner.cc`, `libtest/runner.h`, `libmemcached/memory.h`.
4. Inspect retrieval/memory/indexing through: `libmemcached/memory.h`, `docs/man/memcached_get_memory_allocators.3`, `docs/man/memcached_set_memory_allocators.3`.
5. Verify behavior through test/eval files: `tests/atomsmasher.cc`, `tests/basic.cc`, `tests/basic.h`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 ARCUS C client. 핵심 구조 신호는 C++, README.md, LICENSE, tests, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
