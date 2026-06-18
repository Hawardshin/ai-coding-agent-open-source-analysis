# naver/nbase-arc 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

nbase-arc is an open source distributed memory store based on Redis

## 요약

- 조사 단위: `sources/naver__nbase-arc` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,410 files, 175 directories, depth score 100, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=redis/tests/support/server.tcl, redis/src/server.c, redis/src/server.h이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | naver/nbase-arc |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | C |
| Stars | 180 |
| Forks | 35 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__nbase-arc](../../../../sources/naver__nbase-arc) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__nbase-arc.md](../../../korea-trending/repositories/naver__nbase-arc.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1410 / 175 |
| 관측 최대 깊이 | 11 |
| 상위 디렉터리 | api, confmaster, doc, gateway, integration_test, redis, smr, tools |
| 상위 확장자 | .java: 361, .c: 308, .h: 221, .py: 116, (none): 92, .tcl: 86, .md: 31, .sh: 22, .in: 20, .lua: 20, .xml: 19, .png: 17 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| api | source boundary | 7 |
| confmaster | top-level component | 1 |
| doc | documentation surface | 1 |
| gateway | top-level component | 1 |
| integration_test | validation surface | 1 |
| redis | top-level component | 1 |
| smr | top-level component | 1 |
| tools | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | default | make default |
| utility | Makefile | .DEFAULT | make .DEFAULT |
| build | Makefile | release | make release |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | release32 | make release32 |
| build | Makefile | distclean | make distclean |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 8 | [redis/tests/support/server.tcl](../../../../sources/naver__nbase-arc/redis/tests/support/server.tcl)<br>[redis/src/server.c](../../../../sources/naver__nbase-arc/redis/src/server.c)<br>[redis/src/server.h](../../../../sources/naver__nbase-arc/redis/src/server.h)<br>[redis/deps/jemalloc/bin/jemalloc-config.in](../../../../sources/naver__nbase-arc/redis/deps/jemalloc/bin/jemalloc-config.in)<br>[redis/deps/jemalloc/bin/jemalloc.sh.in](../../../../sources/naver__nbase-arc/redis/deps/jemalloc/bin/jemalloc.sh.in)<br>[redis/deps/jemalloc/bin/jeprof.in](../../../../sources/naver__nbase-arc/redis/deps/jemalloc/bin/jeprof.in)<br>[confmaster/src/main/java/com/navercorp/nbasearc/confmaster/io/Server.java](../../../../sources/naver__nbase-arc/confmaster/src/main/java/com/navercorp/nbasearc/confmaster/io/Server.java)<br>[api/arcci/zk-3.4.6/c/src/cli.c](../../../../sources/naver__nbase-arc/api/arcci/zk-3.4.6/c/src/cli.c) |
| agentRuntime | 90 | [tools/.gitignore](../../../../sources/naver__nbase-arc/tools/.gitignore)<br>[tools/Makefile](../../../../sources/naver__nbase-arc/tools/Makefile)<br>[tools/test-zk-cli/.gitignore](../../../../sources/naver__nbase-arc/tools/test-zk-cli/.gitignore)<br>[tools/test-zk-cli/Makefile](../../../../sources/naver__nbase-arc/tools/test-zk-cli/Makefile)<br>[tools/test-zk-cli/pom.xml](../../../../sources/naver__nbase-arc/tools/test-zk-cli/pom.xml)<br>[tools/test-zk-cli/src/test/resources/log4j.properties](../../../../sources/naver__nbase-arc/tools/test-zk-cli/src/test/resources/log4j.properties)<br>[tools/test-zk-cli/src/test/java/com/navercorp/client/ClientTest.java](../../../../sources/naver__nbase-arc/tools/test-zk-cli/src/test/java/com/navercorp/client/ClientTest.java)<br>[tools/test-zk-cli/src/main/resources/log4j.properties](../../../../sources/naver__nbase-arc/tools/test-zk-cli/src/main/resources/log4j.properties) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 10 | [redis/utils/hyperloglog/hll-gnuplot-graph.rb](../../../../sources/naver__nbase-arc/redis/utils/hyperloglog/hll-gnuplot-graph.rb)<br>[redis/deps/jemalloc/test/unit/lg_chunk.c](../../../../sources/naver__nbase-arc/redis/deps/jemalloc/test/unit/lg_chunk.c)<br>[redis/deps/jemalloc/test/integration/chunk.c](../../../../sources/naver__nbase-arc/redis/deps/jemalloc/test/integration/chunk.c)<br>[redis/deps/jemalloc/src/chunk_dss.c](../../../../sources/naver__nbase-arc/redis/deps/jemalloc/src/chunk_dss.c)<br>[redis/deps/jemalloc/src/chunk_mmap.c](../../../../sources/naver__nbase-arc/redis/deps/jemalloc/src/chunk_mmap.c)<br>[redis/deps/jemalloc/src/chunk.c](../../../../sources/naver__nbase-arc/redis/deps/jemalloc/src/chunk.c)<br>[redis/deps/jemalloc/include/jemalloc/internal/chunk_dss.h](../../../../sources/naver__nbase-arc/redis/deps/jemalloc/include/jemalloc/internal/chunk_dss.h)<br>[redis/deps/jemalloc/include/jemalloc/internal/chunk_mmap.h](../../../../sources/naver__nbase-arc/redis/deps/jemalloc/include/jemalloc/internal/chunk_mmap.h) |
| spec | 0 | 명확하지 않음 |
| eval | 486 | [tools/test-zk-cli/.gitignore](../../../../sources/naver__nbase-arc/tools/test-zk-cli/.gitignore)<br>[tools/test-zk-cli/Makefile](../../../../sources/naver__nbase-arc/tools/test-zk-cli/Makefile)<br>[tools/test-zk-cli/pom.xml](../../../../sources/naver__nbase-arc/tools/test-zk-cli/pom.xml)<br>[tools/test-zk-cli/src/test/resources/log4j.properties](../../../../sources/naver__nbase-arc/tools/test-zk-cli/src/test/resources/log4j.properties)<br>[tools/test-zk-cli/src/test/java/com/navercorp/client/ClientTest.java](../../../../sources/naver__nbase-arc/tools/test-zk-cli/src/test/java/com/navercorp/client/ClientTest.java)<br>[tools/test-zk-cli/src/main/resources/log4j.properties](../../../../sources/naver__nbase-arc/tools/test-zk-cli/src/main/resources/log4j.properties)<br>[tools/test-zk-cli/src/main/java/com/navercorp/client/Client.java](../../../../sources/naver__nbase-arc/tools/test-zk-cli/src/main/java/com/navercorp/client/Client.java)<br>[tools/test-zk-cli/src/main/java/com/navercorp/client/Main.java](../../../../sources/naver__nbase-arc/tools/test-zk-cli/src/main/java/com/navercorp/client/Main.java) |
| security | 2 | [redis/tests/unit/auth.tcl](../../../../sources/naver__nbase-arc/redis/tests/unit/auth.tcl)<br>[integration_test/test_quorum_policy.py](../../../../sources/naver__nbase-arc/integration_test/test_quorum_policy.py) |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 72 | [README.md](../../../../sources/naver__nbase-arc/README.md)<br>[redis/README.md](../../../../sources/naver__nbase-arc/redis/README.md)<br>[redis/utils/lru/README](../../../../sources/naver__nbase-arc/redis/utils/lru/README)<br>[redis/utils/hashtable/README](../../../../sources/naver__nbase-arc/redis/utils/hashtable/README)<br>[redis/utils/create-cluster/README](../../../../sources/naver__nbase-arc/redis/utils/create-cluster/README)<br>[redis/deps/README.md](../../../../sources/naver__nbase-arc/redis/deps/README.md)<br>[redis/deps/lua/README](../../../../sources/naver__nbase-arc/redis/deps/lua/README)<br>[redis/deps/lua/test/README](../../../../sources/naver__nbase-arc/redis/deps/lua/test/README) |
| config | 27 | [Makefile](../../../../sources/naver__nbase-arc/Makefile)<br>[tools/Makefile](../../../../sources/naver__nbase-arc/tools/Makefile)<br>[tools/test-zk-cli/Makefile](../../../../sources/naver__nbase-arc/tools/test-zk-cli/Makefile)<br>[tools/nbase-arc-cli/Makefile](../../../../sources/naver__nbase-arc/tools/nbase-arc-cli/Makefile)<br>[tools/local_proxy/Makefile](../../../../sources/naver__nbase-arc/tools/local_proxy/Makefile)<br>[smr/Makefile](../../../../sources/naver__nbase-arc/smr/Makefile)<br>[smr/test/Makefile](../../../../sources/naver__nbase-arc/smr/test/Makefile)<br>[smr/test/unit/Makefile](../../../../sources/naver__nbase-arc/smr/test/unit/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 486 | [tools/test-zk-cli/.gitignore](../../../../sources/naver__nbase-arc/tools/test-zk-cli/.gitignore)<br>[tools/test-zk-cli/Makefile](../../../../sources/naver__nbase-arc/tools/test-zk-cli/Makefile)<br>[tools/test-zk-cli/pom.xml](../../../../sources/naver__nbase-arc/tools/test-zk-cli/pom.xml)<br>[tools/test-zk-cli/src/test/resources/log4j.properties](../../../../sources/naver__nbase-arc/tools/test-zk-cli/src/test/resources/log4j.properties)<br>[tools/test-zk-cli/src/test/java/com/navercorp/client/ClientTest.java](../../../../sources/naver__nbase-arc/tools/test-zk-cli/src/test/java/com/navercorp/client/ClientTest.java)<br>[tools/test-zk-cli/src/main/resources/log4j.properties](../../../../sources/naver__nbase-arc/tools/test-zk-cli/src/main/resources/log4j.properties) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 2 | [redis/tests/unit/auth.tcl](../../../../sources/naver__nbase-arc/redis/tests/unit/auth.tcl)<br>[integration_test/test_quorum_policy.py](../../../../sources/naver__nbase-arc/integration_test/test_quorum_policy.py) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `redis/tests/support/server.tcl`, `redis/src/server.c`, `redis/src/server.h`.
2. entrypoint를 따라 실행 흐름 확인: `redis/tests/support/server.tcl`, `redis/src/server.c`, `redis/src/server.h`.
3. agent/tool runtime 매핑: `tools/.gitignore`, `tools/Makefile`, `tools/test-zk-cli/.gitignore`.
4. retrieval/memory/indexing 확인: `redis/utils/hyperloglog/hll-gnuplot-graph.rb`, `redis/deps/jemalloc/test/unit/lg_chunk.c`, `redis/deps/jemalloc/test/integration/chunk.c`.
5. test/eval 파일로 동작 검증: `tools/test-zk-cli/.gitignore`, `tools/test-zk-cli/Makefile`, `tools/test-zk-cli/pom.xml`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 nbase arc is an open source distributed memory store based on Redis. 핵심 구조 신호는 C, Makefile, README.md, LICENSE, tests, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
