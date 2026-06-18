# Samsung/ADBI 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Android Dynamic Binary Instrumentation tool for tracing Android native layer

## 요약

- 조사 단위: `sources/Samsung__ADBI` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 325 files, 47 directories, depth score 63, key references 8개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

평가/관측/품질 관점에서 spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 eval=idk/tests/args.c, idk/tests/assembly.S, idk/tests/basetypes.c이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 품질/평가 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Samsung/ADBI |
| 주제 | 평가/관측/품질 / 평가/관측/품질 |
| Region | korea |
| Language | C |
| Stars | 317 |
| Forks | 84 |
| License | Apache-2.0 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Samsung__ADBI](../../../../sources/Samsung__ADBI) |
| 기존 보고서 | [reports/korea-trending/repositories/Samsung__ADBI.md](../../../korea-trending/repositories/Samsung__ADBI.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 325 / 47 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | adbiclient, adbilog, arch, communication, configuration, demo, doc, idk, inj, injectable, injection, lib, process, procutil, tracepoint, util |
| 상위 확장자 | .py: 88, .h: 74, .c: 61, (none): 45, .s: 43, .a: 3, .adbi: 2, .sh: 2, .txt: 2, .html: 1, .patterns: 1, .so: 1 |
| 소스 패턴 | spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| adbiclient | source boundary | 1 |
| adbilog | top-level component | 1 |
| arch | top-level component | 1 |
| communication | top-level component | 1 |
| configuration | top-level component | 1 |
| demo | top-level component | 1 |
| doc | documentation surface | 1 |
| idk | top-level component | 1 |
| inj | top-level component | 1 |
| injectable | top-level component | 1 |
| injection | top-level component | 1 |
| lib | source boundary | 1 |
| process | top-level component | 1 |
| procutil | top-level component | 1 |
| tracepoint | top-level component | 1 |
| util | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | static | make static |
| utility | Makefile | all | make all |
| utility | Makefile | profile | make profile |
| utility | Makefile | profile | make profile |
| utility | Makefile | profile | make profile |
| utility | Makefile | profile | make profile |
| utility | Makefile | find-unused | make find-unused |
| utility | Makefile | clean | make clean |
| utility | Makefile | push | make push |
| utility | Makefile | run | make run |
| utility | Makefile | debug | make debug |
| utility | Makefile | toolchain | make toolchain |


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
| eval | [idk/tests/args.c](../../../../sources/Samsung__ADBI/idk/tests/args.c) | eval signal |
| eval | [idk/tests/assembly.S](../../../../sources/Samsung__ADBI/idk/tests/assembly.S) | eval signal |
| eval | [idk/tests/basetypes.c](../../../../sources/Samsung__ADBI/idk/tests/basetypes.c) | eval signal |
| eval | [idk/tests/fibo.c](../../../../sources/Samsung__ADBI/idk/tests/fibo.c) | eval signal |
| config | [Makefile](../../../../sources/Samsung__ADBI/Makefile) | config signal |
| config | [inj/dummy/Makefile](../../../../sources/Samsung__ADBI/inj/dummy/Makefile) | config signal |
| config | [inj/adbi_munmap/Makefile](../../../../sources/Samsung__ADBI/inj/adbi_munmap/Makefile) | config signal |
| config | [inj/adbi_mmap/Makefile](../../../../sources/Samsung__ADBI/inj/adbi_mmap/Makefile) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 6 | [arch/arm/tests/adr_t1.py](../../../../sources/Samsung__ADBI/arch/arm/tests/adr_t1.py)<br>[arch/arm/tests/adr_t2.py](../../../../sources/Samsung__ADBI/arch/arm/tests/adr_t2.py)<br>[arch/arm/tests/adr_t3.py](../../../../sources/Samsung__ADBI/arch/arm/tests/adr_t3.py)<br>[arch/arm/templates/adr_t1.S](../../../../sources/Samsung__ADBI/arch/arm/templates/adr_t1.S)<br>[arch/arm/templates/adr_t2.S](../../../../sources/Samsung__ADBI/arch/arm/templates/adr_t2.S)<br>[arch/arm/templates/adr_t3.S](../../../../sources/Samsung__ADBI/arch/arm/templates/adr_t3.S) |
| eval | 49 | [idk/tests/args.c](../../../../sources/Samsung__ADBI/idk/tests/args.c)<br>[idk/tests/assembly.S](../../../../sources/Samsung__ADBI/idk/tests/assembly.S)<br>[idk/tests/basetypes.c](../../../../sources/Samsung__ADBI/idk/tests/basetypes.c)<br>[idk/tests/fibo.c](../../../../sources/Samsung__ADBI/idk/tests/fibo.c)<br>[idk/tests/functions.c](../../../../sources/Samsung__ADBI/idk/tests/functions.c)<br>[idk/tests/Makefile](../../../../sources/Samsung__ADBI/idk/tests/Makefile)<br>[idk/tests/tls.c](../../../../sources/Samsung__ADBI/idk/tests/tls.c)<br>[idk/tests/types.c](../../../../sources/Samsung__ADBI/idk/tests/types.c) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 16 | [README](../../../../sources/Samsung__ADBI/README)<br>[doc/ADBI - Documentation.html](../../../../sources/Samsung__ADBI/doc/ADBI - Documentation.html)<br>[doc/ARM_TEMPLATES](../../../../sources/Samsung__ADBI/doc/ARM_TEMPLATES)<br>[doc/BUILDING](../../../../sources/Samsung__ADBI/doc/BUILDING)<br>[doc/CALLS](../../../../sources/Samsung__ADBI/doc/CALLS)<br>[doc/DYNAMIC_LINKER](../../../../sources/Samsung__ADBI/doc/DYNAMIC_LINKER)<br>[doc/EXEC_RESTOP](../../../../sources/Samsung__ADBI/doc/EXEC_RESTOP)<br>[doc/INJECTABLE](../../../../sources/Samsung__ADBI/doc/INJECTABLE) |
| config | 11 | [Makefile](../../../../sources/Samsung__ADBI/Makefile)<br>[inj/dummy/Makefile](../../../../sources/Samsung__ADBI/inj/dummy/Makefile)<br>[inj/adbi_munmap/Makefile](../../../../sources/Samsung__ADBI/inj/adbi_munmap/Makefile)<br>[inj/adbi_mmap/Makefile](../../../../sources/Samsung__ADBI/inj/adbi_mmap/Makefile)<br>[inj/adbi/Makefile](../../../../sources/Samsung__ADBI/inj/adbi/Makefile)<br>[idk/tests/Makefile](../../../../sources/Samsung__ADBI/idk/tests/Makefile)<br>[arch/arm64/tests/Makefile](../../../../sources/Samsung__ADBI/arch/arm64/tests/Makefile)<br>[arch/arm64/templates/Makefile](../../../../sources/Samsung__ADBI/arch/arm64/templates/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 49 | [idk/tests/args.c](../../../../sources/Samsung__ADBI/idk/tests/args.c)<br>[idk/tests/assembly.S](../../../../sources/Samsung__ADBI/idk/tests/assembly.S)<br>[idk/tests/basetypes.c](../../../../sources/Samsung__ADBI/idk/tests/basetypes.c)<br>[idk/tests/fibo.c](../../../../sources/Samsung__ADBI/idk/tests/fibo.c)<br>[idk/tests/functions.c](../../../../sources/Samsung__ADBI/idk/tests/functions.c)<br>[idk/tests/Makefile](../../../../sources/Samsung__ADBI/idk/tests/Makefile) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `idk/tests/args.c`, `idk/tests/assembly.S`, `idk/tests/basetypes.c`.
2. test/eval 파일로 동작 검증: `idk/tests/args.c`, `idk/tests/assembly.S`, `idk/tests/basetypes.c`.

## 기존 레포 인사이트

평가/관측/품질 관점에서 Android Dynamic Binary Instrumentation tool for tracing Android native layer. 핵심 구조 신호는 C, Makefile, LICENSE, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 평가/관측/품질 레포입니다. 활용 관점은 품질/평가 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
