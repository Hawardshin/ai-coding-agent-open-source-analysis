# Samsung/ADBI Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Android Dynamic Binary Instrumentation tool for tracing Android native layer

## 요약

- 조사 단위: `sources/Samsung__ADBI` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 325 files, 47 directories, depth score 69, key references 8개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

평가/관측/품질 관점에서 spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 eval=idk/tests/args.c, idk/tests/assembly.S, idk/tests/basetypes.c이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 quality and evaluation comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | Samsung/ADBI |
| Topic | Evals, Observability, and Quality / 평가/관측/품질 |
| Region | korea |
| Language | C |
| Stars | 317 |
| Forks | 84 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/Samsung__ADBI](../../../../sources/Samsung__ADBI) |
| Existing report | [reports/korea-trending/repositories/Samsung__ADBI.md](../../../korea-trending/repositories/Samsung__ADBI.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 325 / 47 |
| Max observed depth | 4 |
| Top directories | adbiclient, adbilog, arch, communication, configuration, demo, doc, idk, inj, injectable, injection, lib, process, procutil, tracepoint, util |
| Top extensions | .py: 88, .h: 74, .c: 61, (none): 45, .s: 43, .a: 3, .adbi: 2, .sh: 2, .txt: 2, .html: 1, .patterns: 1, .so: 1 |
| Source patterns | spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
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


## How It Runs

| Category | Source | Name | Command |
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
| eval | [idk/tests/args.c](../../../../sources/Samsung__ADBI/idk/tests/args.c) | eval signal |
| eval | [idk/tests/assembly.S](../../../../sources/Samsung__ADBI/idk/tests/assembly.S) | eval signal |
| eval | [idk/tests/basetypes.c](../../../../sources/Samsung__ADBI/idk/tests/basetypes.c) | eval signal |
| eval | [idk/tests/fibo.c](../../../../sources/Samsung__ADBI/idk/tests/fibo.c) | eval signal |
| config | [Makefile](../../../../sources/Samsung__ADBI/Makefile) | config signal |
| config | [inj/dummy/Makefile](../../../../sources/Samsung__ADBI/inj/dummy/Makefile) | config signal |
| config | [inj/adbi_munmap/Makefile](../../../../sources/Samsung__ADBI/inj/adbi_munmap/Makefile) | config signal |
| config | [inj/adbi_mmap/Makefile](../../../../sources/Samsung__ADBI/inj/adbi_mmap/Makefile) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 6 | [arch/arm/tests/adr_t1.py](../../../../sources/Samsung__ADBI/arch/arm/tests/adr_t1.py)<br>[arch/arm/tests/adr_t2.py](../../../../sources/Samsung__ADBI/arch/arm/tests/adr_t2.py)<br>[arch/arm/tests/adr_t3.py](../../../../sources/Samsung__ADBI/arch/arm/tests/adr_t3.py)<br>[arch/arm/templates/adr_t1.S](../../../../sources/Samsung__ADBI/arch/arm/templates/adr_t1.S)<br>[arch/arm/templates/adr_t2.S](../../../../sources/Samsung__ADBI/arch/arm/templates/adr_t2.S)<br>[arch/arm/templates/adr_t3.S](../../../../sources/Samsung__ADBI/arch/arm/templates/adr_t3.S) |
| eval | 49 | [idk/tests/args.c](../../../../sources/Samsung__ADBI/idk/tests/args.c)<br>[idk/tests/assembly.S](../../../../sources/Samsung__ADBI/idk/tests/assembly.S)<br>[idk/tests/basetypes.c](../../../../sources/Samsung__ADBI/idk/tests/basetypes.c)<br>[idk/tests/fibo.c](../../../../sources/Samsung__ADBI/idk/tests/fibo.c)<br>[idk/tests/functions.c](../../../../sources/Samsung__ADBI/idk/tests/functions.c)<br>[idk/tests/Makefile](../../../../sources/Samsung__ADBI/idk/tests/Makefile)<br>[idk/tests/tls.c](../../../../sources/Samsung__ADBI/idk/tests/tls.c)<br>[idk/tests/types.c](../../../../sources/Samsung__ADBI/idk/tests/types.c) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 16 | [README](../../../../sources/Samsung__ADBI/README)<br>[doc/ADBI - Documentation.html](../../../../sources/Samsung__ADBI/doc/ADBI - Documentation.html)<br>[doc/ARM_TEMPLATES](../../../../sources/Samsung__ADBI/doc/ARM_TEMPLATES)<br>[doc/BUILDING](../../../../sources/Samsung__ADBI/doc/BUILDING)<br>[doc/CALLS](../../../../sources/Samsung__ADBI/doc/CALLS)<br>[doc/DYNAMIC_LINKER](../../../../sources/Samsung__ADBI/doc/DYNAMIC_LINKER)<br>[doc/EXEC_RESTOP](../../../../sources/Samsung__ADBI/doc/EXEC_RESTOP)<br>[doc/INJECTABLE](../../../../sources/Samsung__ADBI/doc/INJECTABLE) |
| config | 11 | [Makefile](../../../../sources/Samsung__ADBI/Makefile)<br>[inj/dummy/Makefile](../../../../sources/Samsung__ADBI/inj/dummy/Makefile)<br>[inj/adbi_munmap/Makefile](../../../../sources/Samsung__ADBI/inj/adbi_munmap/Makefile)<br>[inj/adbi_mmap/Makefile](../../../../sources/Samsung__ADBI/inj/adbi_mmap/Makefile)<br>[inj/adbi/Makefile](../../../../sources/Samsung__ADBI/inj/adbi/Makefile)<br>[idk/tests/Makefile](../../../../sources/Samsung__ADBI/idk/tests/Makefile)<br>[arch/arm64/tests/Makefile](../../../../sources/Samsung__ADBI/arch/arm64/tests/Makefile)<br>[arch/arm64/templates/Makefile](../../../../sources/Samsung__ADBI/arch/arm64/templates/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 49 | [idk/tests/args.c](../../../../sources/Samsung__ADBI/idk/tests/args.c)<br>[idk/tests/assembly.S](../../../../sources/Samsung__ADBI/idk/tests/assembly.S)<br>[idk/tests/basetypes.c](../../../../sources/Samsung__ADBI/idk/tests/basetypes.c)<br>[idk/tests/fibo.c](../../../../sources/Samsung__ADBI/idk/tests/fibo.c)<br>[idk/tests/functions.c](../../../../sources/Samsung__ADBI/idk/tests/functions.c)<br>[idk/tests/Makefile](../../../../sources/Samsung__ADBI/idk/tests/Makefile) |
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
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `idk/tests/args.c`, `idk/tests/assembly.S`, `idk/tests/basetypes.c`.
2. Verify behavior through test/eval files: `idk/tests/args.c`, `idk/tests/assembly.S`, `idk/tests/basetypes.c`.

## Existing Repository Insight

평가/관측/품질 관점에서 Android Dynamic Binary Instrumentation tool for tracing Android native layer. 핵심 구조 신호는 C, Makefile, LICENSE, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 평가/관측/품질 레포입니다. 활용 관점은 quality and evaluation comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
