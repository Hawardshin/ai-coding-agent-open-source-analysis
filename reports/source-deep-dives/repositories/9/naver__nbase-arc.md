# naver/nbase-arc Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

nbase-arc is an open source distributed memory store based on Redis

## 요약

- 조사 단위: `sources/naver__nbase-arc` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,410 files, 175 directories, depth score 106, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=redis/tests/support/server.tcl, redis/src/server.c, redis/src/server.h이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/nbase-arc |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | C |
| Stars | 180 |
| Forks | 35 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/naver__nbase-arc](../../../../sources/naver__nbase-arc) |
| Existing report | [reports/korea-trending/repositories/naver__nbase-arc.md](../../../korea-trending/repositories/naver__nbase-arc.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1410 / 175 |
| Max observed depth | 11 |
| Top directories | api, confmaster, doc, gateway, integration_test, redis, smr, tools |
| Top extensions | .java: 361, .c: 308, .h: 221, .py: 116, (none): 92, .tcl: 86, .md: 31, .sh: 22, .in: 20, .lua: 20, .xml: 19, .png: 17 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| api | source boundary | 7 |
| confmaster | top-level component | 1 |
| doc | documentation surface | 1 |
| gateway | top-level component | 1 |
| integration_test | validation surface | 1 |
| redis | top-level component | 1 |
| smr | top-level component | 1 |
| tools | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | default | make default |
| utility | Makefile | .DEFAULT | make .DEFAULT |
| build | Makefile | release | make release |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | release32 | make release32 |
| build | Makefile | distclean | make distclean |


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
| entrypoints | [redis/tests/support/server.tcl](../../../../sources/naver__nbase-arc/redis/tests/support/server.tcl) | entrypoints signal |
| entrypoints | [redis/src/server.c](../../../../sources/naver__nbase-arc/redis/src/server.c) | entrypoints signal |
| entrypoints | [redis/src/server.h](../../../../sources/naver__nbase-arc/redis/src/server.h) | entrypoints signal |
| entrypoints | [redis/deps/jemalloc/bin/jemalloc-config.in](../../../../sources/naver__nbase-arc/redis/deps/jemalloc/bin/jemalloc-config.in) | entrypoints signal |
| config | [Makefile](../../../../sources/naver__nbase-arc/Makefile) | config signal |
| config | [tools/Makefile](../../../../sources/naver__nbase-arc/tools/Makefile) | config signal |
| config | [tools/test-zk-cli/Makefile](../../../../sources/naver__nbase-arc/tools/test-zk-cli/Makefile) | config signal |
| config | [tools/nbase-arc-cli/Makefile](../../../../sources/naver__nbase-arc/tools/nbase-arc-cli/Makefile) | config signal |
| docs | [README.md](../../../../sources/naver__nbase-arc/README.md) | docs signal |
| docs | [redis/README.md](../../../../sources/naver__nbase-arc/redis/README.md) | docs signal |
| docs | [redis/utils/lru/README](../../../../sources/naver__nbase-arc/redis/utils/lru/README) | docs signal |
| docs | [redis/utils/hashtable/README](../../../../sources/naver__nbase-arc/redis/utils/hashtable/README) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 8 | [redis/tests/support/server.tcl](../../../../sources/naver__nbase-arc/redis/tests/support/server.tcl)<br>[redis/src/server.c](../../../../sources/naver__nbase-arc/redis/src/server.c)<br>[redis/src/server.h](../../../../sources/naver__nbase-arc/redis/src/server.h)<br>[redis/deps/jemalloc/bin/jemalloc-config.in](../../../../sources/naver__nbase-arc/redis/deps/jemalloc/bin/jemalloc-config.in)<br>[redis/deps/jemalloc/bin/jemalloc.sh.in](../../../../sources/naver__nbase-arc/redis/deps/jemalloc/bin/jemalloc.sh.in)<br>[redis/deps/jemalloc/bin/jeprof.in](../../../../sources/naver__nbase-arc/redis/deps/jemalloc/bin/jeprof.in)<br>[confmaster/src/main/java/com/navercorp/nbasearc/confmaster/io/Server.java](../../../../sources/naver__nbase-arc/confmaster/src/main/java/com/navercorp/nbasearc/confmaster/io/Server.java)<br>[api/arcci/zk-3.4.6/c/src/cli.c](../../../../sources/naver__nbase-arc/api/arcci/zk-3.4.6/c/src/cli.c) |
| agentRuntime | 90 | [tools/.gitignore](../../../../sources/naver__nbase-arc/tools/.gitignore)<br>[tools/Makefile](../../../../sources/naver__nbase-arc/tools/Makefile)<br>[tools/test-zk-cli/.gitignore](../../../../sources/naver__nbase-arc/tools/test-zk-cli/.gitignore)<br>[tools/test-zk-cli/Makefile](../../../../sources/naver__nbase-arc/tools/test-zk-cli/Makefile)<br>[tools/test-zk-cli/pom.xml](../../../../sources/naver__nbase-arc/tools/test-zk-cli/pom.xml)<br>[tools/test-zk-cli/src/test/resources/log4j.properties](../../../../sources/naver__nbase-arc/tools/test-zk-cli/src/test/resources/log4j.properties)<br>[tools/test-zk-cli/src/test/java/com/navercorp/client/ClientTest.java](../../../../sources/naver__nbase-arc/tools/test-zk-cli/src/test/java/com/navercorp/client/ClientTest.java)<br>[tools/test-zk-cli/src/main/resources/log4j.properties](../../../../sources/naver__nbase-arc/tools/test-zk-cli/src/main/resources/log4j.properties) |
| mcp | 0 | not obvious |
| retrieval | 10 | [redis/utils/hyperloglog/hll-gnuplot-graph.rb](../../../../sources/naver__nbase-arc/redis/utils/hyperloglog/hll-gnuplot-graph.rb)<br>[redis/deps/jemalloc/test/unit/lg_chunk.c](../../../../sources/naver__nbase-arc/redis/deps/jemalloc/test/unit/lg_chunk.c)<br>[redis/deps/jemalloc/test/integration/chunk.c](../../../../sources/naver__nbase-arc/redis/deps/jemalloc/test/integration/chunk.c)<br>[redis/deps/jemalloc/src/chunk_dss.c](../../../../sources/naver__nbase-arc/redis/deps/jemalloc/src/chunk_dss.c)<br>[redis/deps/jemalloc/src/chunk_mmap.c](../../../../sources/naver__nbase-arc/redis/deps/jemalloc/src/chunk_mmap.c)<br>[redis/deps/jemalloc/src/chunk.c](../../../../sources/naver__nbase-arc/redis/deps/jemalloc/src/chunk.c)<br>[redis/deps/jemalloc/include/jemalloc/internal/chunk_dss.h](../../../../sources/naver__nbase-arc/redis/deps/jemalloc/include/jemalloc/internal/chunk_dss.h)<br>[redis/deps/jemalloc/include/jemalloc/internal/chunk_mmap.h](../../../../sources/naver__nbase-arc/redis/deps/jemalloc/include/jemalloc/internal/chunk_mmap.h) |
| spec | 0 | not obvious |
| eval | 486 | [tools/test-zk-cli/.gitignore](../../../../sources/naver__nbase-arc/tools/test-zk-cli/.gitignore)<br>[tools/test-zk-cli/Makefile](../../../../sources/naver__nbase-arc/tools/test-zk-cli/Makefile)<br>[tools/test-zk-cli/pom.xml](../../../../sources/naver__nbase-arc/tools/test-zk-cli/pom.xml)<br>[tools/test-zk-cli/src/test/resources/log4j.properties](../../../../sources/naver__nbase-arc/tools/test-zk-cli/src/test/resources/log4j.properties)<br>[tools/test-zk-cli/src/test/java/com/navercorp/client/ClientTest.java](../../../../sources/naver__nbase-arc/tools/test-zk-cli/src/test/java/com/navercorp/client/ClientTest.java)<br>[tools/test-zk-cli/src/main/resources/log4j.properties](../../../../sources/naver__nbase-arc/tools/test-zk-cli/src/main/resources/log4j.properties)<br>[tools/test-zk-cli/src/main/java/com/navercorp/client/Client.java](../../../../sources/naver__nbase-arc/tools/test-zk-cli/src/main/java/com/navercorp/client/Client.java)<br>[tools/test-zk-cli/src/main/java/com/navercorp/client/Main.java](../../../../sources/naver__nbase-arc/tools/test-zk-cli/src/main/java/com/navercorp/client/Main.java) |
| security | 2 | [redis/tests/unit/auth.tcl](../../../../sources/naver__nbase-arc/redis/tests/unit/auth.tcl)<br>[integration_test/test_quorum_policy.py](../../../../sources/naver__nbase-arc/integration_test/test_quorum_policy.py) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 72 | [README.md](../../../../sources/naver__nbase-arc/README.md)<br>[redis/README.md](../../../../sources/naver__nbase-arc/redis/README.md)<br>[redis/utils/lru/README](../../../../sources/naver__nbase-arc/redis/utils/lru/README)<br>[redis/utils/hashtable/README](../../../../sources/naver__nbase-arc/redis/utils/hashtable/README)<br>[redis/utils/create-cluster/README](../../../../sources/naver__nbase-arc/redis/utils/create-cluster/README)<br>[redis/deps/README.md](../../../../sources/naver__nbase-arc/redis/deps/README.md)<br>[redis/deps/lua/README](../../../../sources/naver__nbase-arc/redis/deps/lua/README)<br>[redis/deps/lua/test/README](../../../../sources/naver__nbase-arc/redis/deps/lua/test/README) |
| config | 27 | [Makefile](../../../../sources/naver__nbase-arc/Makefile)<br>[tools/Makefile](../../../../sources/naver__nbase-arc/tools/Makefile)<br>[tools/test-zk-cli/Makefile](../../../../sources/naver__nbase-arc/tools/test-zk-cli/Makefile)<br>[tools/nbase-arc-cli/Makefile](../../../../sources/naver__nbase-arc/tools/nbase-arc-cli/Makefile)<br>[tools/local_proxy/Makefile](../../../../sources/naver__nbase-arc/tools/local_proxy/Makefile)<br>[smr/Makefile](../../../../sources/naver__nbase-arc/smr/Makefile)<br>[smr/test/Makefile](../../../../sources/naver__nbase-arc/smr/test/Makefile)<br>[smr/test/unit/Makefile](../../../../sources/naver__nbase-arc/smr/test/unit/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 486 | [tools/test-zk-cli/.gitignore](../../../../sources/naver__nbase-arc/tools/test-zk-cli/.gitignore)<br>[tools/test-zk-cli/Makefile](../../../../sources/naver__nbase-arc/tools/test-zk-cli/Makefile)<br>[tools/test-zk-cli/pom.xml](../../../../sources/naver__nbase-arc/tools/test-zk-cli/pom.xml)<br>[tools/test-zk-cli/src/test/resources/log4j.properties](../../../../sources/naver__nbase-arc/tools/test-zk-cli/src/test/resources/log4j.properties)<br>[tools/test-zk-cli/src/test/java/com/navercorp/client/ClientTest.java](../../../../sources/naver__nbase-arc/tools/test-zk-cli/src/test/java/com/navercorp/client/ClientTest.java)<br>[tools/test-zk-cli/src/main/resources/log4j.properties](../../../../sources/naver__nbase-arc/tools/test-zk-cli/src/main/resources/log4j.properties) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 2 | [redis/tests/unit/auth.tcl](../../../../sources/naver__nbase-arc/redis/tests/unit/auth.tcl)<br>[integration_test/test_quorum_policy.py](../../../../sources/naver__nbase-arc/integration_test/test_quorum_policy.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `redis/tests/support/server.tcl`, `redis/src/server.c`, `redis/src/server.h`.
2. Trace execution through entrypoints: `redis/tests/support/server.tcl`, `redis/src/server.c`, `redis/src/server.h`.
3. Map agent/tool runtime through: `tools/.gitignore`, `tools/Makefile`, `tools/test-zk-cli/.gitignore`.
4. Inspect retrieval/memory/indexing through: `redis/utils/hyperloglog/hll-gnuplot-graph.rb`, `redis/deps/jemalloc/test/unit/lg_chunk.c`, `redis/deps/jemalloc/test/integration/chunk.c`.
5. Verify behavior through test/eval files: `tools/test-zk-cli/.gitignore`, `tools/test-zk-cli/Makefile`, `tools/test-zk-cli/pom.xml`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 nbase arc is an open source distributed memory store based on Redis. 핵심 구조 신호는 C, Makefile, README.md, LICENSE, tests, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 ci signal not obvious, needs deeper structural scan입니다.
