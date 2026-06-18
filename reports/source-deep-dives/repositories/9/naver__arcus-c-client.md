# naver/arcus-c-client 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

ARCUS C client

## 요약

- 조사 단위: `sources/naver__arcus-c-client` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 612 files, 27 directories, depth score 102, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=libtest/server.cc, libtest/server.h, libmemcached/server.cc이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/arcus-c-client |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | C++ |
| Stars | 13 |
| Forks | 16 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__arcus-c-client](../../../../sources/naver__arcus-c-client) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__arcus-c-client.md](../../../korea-trending/repositories/naver__arcus-c-client.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 612 / 27 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | .github, arcus, clients, config, devtools, docs, example, libhashkit, libmemcached, libmemcachedinternal, libtest, m4, poll, support, tests, util, win32 |
| 상위 확장자 | .h: 146, .cc: 143, .3: 101, .m4: 89, .hpp: 26, .c: 25, .am: 19, .md: 16, .1: 10, (none): 10, .in: 8, .png: 3 |
| 소스 패턴 | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 6 | [libtest/server.cc](../../../../sources/naver__arcus-c-client/libtest/server.cc)<br>[libtest/server.h](../../../../sources/naver__arcus-c-client/libtest/server.h)<br>[libmemcached/server.cc](../../../../sources/naver__arcus-c-client/libmemcached/server.cc)<br>[libmemcached/server.h](../../../../sources/naver__arcus-c-client/libmemcached/server.h)<br>[libmemcached/server.hpp](../../../../sources/naver__arcus-c-client/libmemcached/server.hpp)<br>[libmemcached/csl/server.h](../../../../sources/naver__arcus-c-client/libmemcached/csl/server.h) |
| agentRuntime | 5 | [libtest/runner.cc](../../../../sources/naver__arcus-c-client/libtest/runner.cc)<br>[libtest/runner.h](../../../../sources/naver__arcus-c-client/libtest/runner.h)<br>[libmemcached/memory.h](../../../../sources/naver__arcus-c-client/libmemcached/memory.h)<br>[libmemcached/csl/context.cc](../../../../sources/naver__arcus-c-client/libmemcached/csl/context.cc)<br>[libmemcached/csl/context.h](../../../../sources/naver__arcus-c-client/libmemcached/csl/context.h) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 3 | [libmemcached/memory.h](../../../../sources/naver__arcus-c-client/libmemcached/memory.h)<br>[docs/man/memcached_get_memory_allocators.3](../../../../sources/naver__arcus-c-client/docs/man/memcached_get_memory_allocators.3)<br>[docs/man/memcached_set_memory_allocators.3](../../../../sources/naver__arcus-c-client/docs/man/memcached_set_memory_allocators.3) |
| spec | 2 | [support/libmemcached-fc.spec.in](../../../../sources/naver__arcus-c-client/support/libmemcached-fc.spec.in)<br>[support/libmemcached.spec.in](../../../../sources/naver__arcus-c-client/support/libmemcached.spec.in) |
| eval | 65 | [tests/atomsmasher.cc](../../../../sources/naver__arcus-c-client/tests/atomsmasher.cc)<br>[tests/basic.cc](../../../../sources/naver__arcus-c-client/tests/basic.cc)<br>[tests/basic.h](../../../../sources/naver__arcus-c-client/tests/basic.h)<br>[tests/c_sasl_test.c](../../../../sources/naver__arcus-c-client/tests/c_sasl_test.c)<br>[tests/c_test.c](../../../../sources/naver__arcus-c-client/tests/c_test.c)<br>[tests/cpp_example.cc](../../../../sources/naver__arcus-c-client/tests/cpp_example.cc)<br>[tests/cycle.cc](../../../../sources/naver__arcus-c-client/tests/cycle.cc)<br>[tests/debug.cc](../../../../sources/naver__arcus-c-client/tests/debug.cc) |
| security | 2 | [docs/man/memcached_destroy_sasl_auth_data.3](../../../../sources/naver__arcus-c-client/docs/man/memcached_destroy_sasl_auth_data.3)<br>[docs/man/memcached_sasl_set_auth_data.3](../../../../sources/naver__arcus-c-client/docs/man/memcached_sasl_set_auth_data.3) |
| ci | 2 | [libhashkit/jenkins.cc](../../../../sources/naver__arcus-c-client/libhashkit/jenkins.cc)<br>[.github/workflows/CI.yml](../../../../sources/naver__arcus-c-client/.github/workflows/CI.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 130 | [README.md](../../../../sources/naver__arcus-c-client/README.md)<br>[libmemcached/memcached/README.txt](../../../../sources/naver__arcus-c-client/libmemcached/memcached/README.txt)<br>[docs/conf.py.in](../../../../sources/naver__arcus-c-client/docs/conf.py.in)<br>[docs/getting-started-guide.md](../../../../sources/naver__arcus-c-client/docs/getting-started-guide.md)<br>[docs/include.am](../../../../sources/naver__arcus-c-client/docs/include.am)<br>[docs/user-guide/01-arcus-cloud-basics.md](../../../../sources/naver__arcus-c-client/docs/user-guide/01-arcus-cloud-basics.md)<br>[docs/user-guide/02-arcus-c-client.md](../../../../sources/naver__arcus-c-client/docs/user-guide/02-arcus-c-client.md)<br>[docs/user-guide/03-key-value-API.md](../../../../sources/naver__arcus-c-client/docs/user-guide/03-key-value-API.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 65 | [tests/atomsmasher.cc](../../../../sources/naver__arcus-c-client/tests/atomsmasher.cc)<br>[tests/basic.cc](../../../../sources/naver__arcus-c-client/tests/basic.cc)<br>[tests/basic.h](../../../../sources/naver__arcus-c-client/tests/basic.h)<br>[tests/c_sasl_test.c](../../../../sources/naver__arcus-c-client/tests/c_sasl_test.c)<br>[tests/c_test.c](../../../../sources/naver__arcus-c-client/tests/c_test.c)<br>[tests/cpp_example.cc](../../../../sources/naver__arcus-c-client/tests/cpp_example.cc) |
| CI workflow | 2 | [libhashkit/jenkins.cc](../../../../sources/naver__arcus-c-client/libhashkit/jenkins.cc)<br>[.github/workflows/CI.yml](../../../../sources/naver__arcus-c-client/.github/workflows/CI.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 2 | [docs/man/memcached_destroy_sasl_auth_data.3](../../../../sources/naver__arcus-c-client/docs/man/memcached_destroy_sasl_auth_data.3)<br>[docs/man/memcached_sasl_set_auth_data.3](../../../../sources/naver__arcus-c-client/docs/man/memcached_sasl_set_auth_data.3) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `libtest/server.cc`, `libtest/server.h`, `libmemcached/server.cc`.
2. entrypoint를 따라 실행 흐름 확인: `libtest/server.cc`, `libtest/server.h`, `libmemcached/server.cc`.
3. agent/tool runtime 매핑: `libtest/runner.cc`, `libtest/runner.h`, `libmemcached/memory.h`.
4. retrieval/memory/indexing 확인: `libmemcached/memory.h`, `docs/man/memcached_get_memory_allocators.3`, `docs/man/memcached_set_memory_allocators.3`.
5. test/eval 파일로 동작 검증: `tests/atomsmasher.cc`, `tests/basic.cc`, `tests/basic.h`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 ARCUS C client. 핵심 구조 신호는 C++, README.md, LICENSE, tests, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
