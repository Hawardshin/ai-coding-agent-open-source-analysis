# naver/arcus 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

ARCUS is the NAVER memcached with lists, sets, maps and b+trees. http://naver.github.io/arcus

## 요약

- 조사 단위: `sources/naver__arcus` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 349 files, 37 directories, depth score 68, key references 9개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 spec/docs-driven, eval/test harness, containerized deploy 구조로 읽힌다. 핵심 소스 근거는 docs=README.md, docs/arcus-admin-script-usage.md, docs/arcus-cloud-configuration-file.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/arcus |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Shell |
| Stars | 316 |
| Forks | 75 |
| License | Apache-2.0 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__arcus](../../../../sources/naver__arcus) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__arcus.md](../../../korea-trending/repositories/naver__arcus.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 349 / 37 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | clients, deps, docs, scripts, server, zookeeper |
| 상위 확장자 | .c: 114, .h: 86, (none): 21, .in: 17, .md: 14, .cmake: 13, .m4: 13, .sh: 13, .am: 8, .json: 7, .png: 7, .py: 7 |
| 소스 패턴 | spec/docs-driven, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 20 |
| clients | source boundary | 1 |
| deps | top-level component | 1 |
| scripts | top-level component | 1 |
| server | source boundary | 1 |
| zookeeper | top-level component | 1 |


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
| docs | [README.md](../../../../sources/naver__arcus/README.md) | docs signal |
| docs | [docs/arcus-admin-script-usage.md](../../../../sources/naver__arcus/docs/arcus-admin-script-usage.md) | docs signal |
| docs | [docs/arcus-cloud-configuration-file.md](../../../../sources/naver__arcus/docs/arcus-cloud-configuration-file.md) | docs signal |
| docs | [docs/arcus-cloud-in-multiple-servers.md](../../../../sources/naver__arcus/docs/arcus-cloud-in-multiple-servers.md) | docs signal |
| eval | [scripts/conf/test.json](../../../../sources/naver__arcus/scripts/conf/test.json) | eval signal |
| eval | [deps/libevent-1.4.13-stable/WIN32-Prj/time_test/time_test.dsp](../../../../sources/naver__arcus/deps/libevent-1.4.13-stable/WIN32-Prj/time_test/time_test.dsp) | eval signal |
| eval | [deps/libevent-1.4.13-stable/WIN32-Prj/signal_test/signal_test.dsp](../../../../sources/naver__arcus/deps/libevent-1.4.13-stable/WIN32-Prj/signal_test/signal_test.dsp) | eval signal |
| eval | [deps/libevent-1.4.13-stable/WIN32-Prj/event_test/event_test.dsp](../../../../sources/naver__arcus/deps/libevent-1.4.13-stable/WIN32-Prj/event_test/event_test.dsp) | eval signal |
| container | [docker-compose.yml](../../../../sources/naver__arcus/docker-compose.yml) | container support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 1 | [docs/images/arcus-architecture.png](../../../../sources/naver__arcus/docs/images/arcus-architecture.png) |
| eval | 73 | [scripts/conf/test.json](../../../../sources/naver__arcus/scripts/conf/test.json)<br>[deps/libevent-1.4.13-stable/WIN32-Prj/time_test/time_test.dsp](../../../../sources/naver__arcus/deps/libevent-1.4.13-stable/WIN32-Prj/time_test/time_test.dsp)<br>[deps/libevent-1.4.13-stable/WIN32-Prj/signal_test/signal_test.dsp](../../../../sources/naver__arcus/deps/libevent-1.4.13-stable/WIN32-Prj/signal_test/signal_test.dsp)<br>[deps/libevent-1.4.13-stable/WIN32-Prj/event_test/event_test.dsp](../../../../sources/naver__arcus/deps/libevent-1.4.13-stable/WIN32-Prj/event_test/event_test.dsp)<br>[deps/libevent-1.4.13-stable/WIN32-Prj/event_test/test.txt](../../../../sources/naver__arcus/deps/libevent-1.4.13-stable/WIN32-Prj/event_test/test.txt)<br>[deps/libevent-1.4.13-stable/test/bench.c](../../../../sources/naver__arcus/deps/libevent-1.4.13-stable/test/bench.c)<br>[deps/libevent-1.4.13-stable/test/Makefile.am](../../../../sources/naver__arcus/deps/libevent-1.4.13-stable/test/Makefile.am)<br>[deps/libevent-1.4.13-stable/test/Makefile.in](../../../../sources/naver__arcus/deps/libevent-1.4.13-stable/test/Makefile.in) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 1 | [docker-compose.yml](../../../../sources/naver__arcus/docker-compose.yml) |
| instruction | 0 | 명확하지 않음 |
| docs | 22 | [README.md](../../../../sources/naver__arcus/README.md)<br>[docs/arcus-admin-script-usage.md](../../../../sources/naver__arcus/docs/arcus-admin-script-usage.md)<br>[docs/arcus-cloud-configuration-file.md](../../../../sources/naver__arcus/docs/arcus-cloud-configuration-file.md)<br>[docs/arcus-cloud-in-multiple-servers.md](../../../../sources/naver__arcus/docs/arcus-cloud-in-multiple-servers.md)<br>[docs/arcus-directory-structure.md](../../../../sources/naver__arcus/docs/arcus-directory-structure.md)<br>[docs/build-faq.md](../../../../sources/naver__arcus/docs/build-faq.md)<br>[docs/deploy-ssh-public-key.md](../../../../sources/naver__arcus/docs/deploy-ssh-public-key.md)<br>[docs/deploying-arcus-to-multiple-servers.md](../../../../sources/naver__arcus/docs/deploying-arcus-to-multiple-servers.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 73 | [scripts/conf/test.json](../../../../sources/naver__arcus/scripts/conf/test.json)<br>[deps/libevent-1.4.13-stable/WIN32-Prj/time_test/time_test.dsp](../../../../sources/naver__arcus/deps/libevent-1.4.13-stable/WIN32-Prj/time_test/time_test.dsp)<br>[deps/libevent-1.4.13-stable/WIN32-Prj/signal_test/signal_test.dsp](../../../../sources/naver__arcus/deps/libevent-1.4.13-stable/WIN32-Prj/signal_test/signal_test.dsp)<br>[deps/libevent-1.4.13-stable/WIN32-Prj/event_test/event_test.dsp](../../../../sources/naver__arcus/deps/libevent-1.4.13-stable/WIN32-Prj/event_test/event_test.dsp)<br>[deps/libevent-1.4.13-stable/WIN32-Prj/event_test/test.txt](../../../../sources/naver__arcus/deps/libevent-1.4.13-stable/WIN32-Prj/event_test/test.txt)<br>[deps/libevent-1.4.13-stable/test/bench.c](../../../../sources/naver__arcus/deps/libevent-1.4.13-stable/test/bench.c) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 1 | [docker-compose.yml](../../../../sources/naver__arcus/docker-compose.yml) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `README.md`, `docs/arcus-admin-script-usage.md`, `docs/arcus-cloud-configuration-file.md`.
2. test/eval 파일로 동작 검증: `scripts/conf/test.json`, `deps/libevent-1.4.13-stable/WIN32-Prj/time_test/time_test.dsp`, `deps/libevent-1.4.13-stable/WIN32-Prj/signal_test/signal_test.dsp`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 ARCUS is the NAVER memcached with lists, sets, maps and b+trees. http //naver.github.io/arcus. 핵심 구조 신호는 Shell, docker-compose.yml, README.md, LICENSE, docs, docker이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
