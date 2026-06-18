# naver/tamgu Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Tamgu (탐구), a FIL programming language: Functional, Imperative, Logical all in one for annotation and data augmentation

## 요약

- 조사 단위: `sources/naver__tamgu` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,088 files, 127 directories, depth score 113, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=lispe/src/main.cxx, libwapiti/src/main.cpp, docker/bin/appel.tmg이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/tamgu |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | C++ |
| Stars | 224 |
| Forks | 13 |
| License | BSD-3-Clause |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver__tamgu](../../../../sources/naver__tamgu) |
| Existing report | [reports/korea-trending/repositories/naver__tamgu.md](../../../korea-trending/repositories/naver__tamgu.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2088 / 127 |
| Max observed depth | 7 |
| Top directories | allmaps, binary, bnf, docker, docs, documentations, examples, include, java, libcurl, libgui, liblinear, libpython, libs, libsqlite, libtamgu, libwapiti, libword2vec, libxml, lispe |
| Top extensions | .h: 1092, .md: 341, .cxx: 217, .tmg: 125, .cpp: 33, (none): 32, .c: 21, .vcxproj: 17, .bmp: 16, .ico: 16, .so: 13, .a: 12 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 29 |
| examples/PREDIBAG | examples workspace | 2 |
| src | source boundary | 2 |
| allmaps | top-level component | 1 |
| binary | top-level component | 1 |
| bnf | top-level component | 1 |
| docker | documentation surface | 1 |
| documentations | documentation surface | 1 |
| examples | top-level component | 1 |
| examples/taskell | examples workspace | 1 |
| include | top-level component | 1 |
| java | top-level component | 1 |
| libcurl | source boundary | 1 |
| libgui | source boundary | 1 |
| liblinear | source boundary | 1 |
| libpython | source boundary | 1 |
| libs | source boundary | 1 |
| libs/windows | libs workspace | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | libtamgu | make libtamgu |
| utility | Makefile | tamgu | make tamgu |
| utility | Makefile | jag | make jag |
| utility | Makefile | lib | make lib |
| utility | Makefile | all | make all |
| utility | Makefile | install | make install |
| utility | Makefile | cleanall | make cleanall |
| utility | Makefile | clean | make clean |
| utility | Makefile | cleanlib | make cleanlib |
| utility | Makefile | full | make full |


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
| entrypoints | [lispe/src/main.cxx](../../../../sources/naver__tamgu/lispe/src/main.cxx) | entrypoints signal |
| entrypoints | [libwapiti/src/main.cpp](../../../../sources/naver__tamgu/libwapiti/src/main.cpp) | entrypoints signal |
| entrypoints | [docker/bin/appel.tmg](../../../../sources/naver__tamgu/docker/bin/appel.tmg) | entrypoints signal |
| entrypoints | [docker/bin/liballmaps.so](../../../../sources/naver__tamgu/docker/bin/liballmaps.so) | entrypoints signal |
| config | [Makefile](../../../../sources/naver__tamgu/Makefile) | config signal |
| config | [vscode/package.json](../../../../sources/naver__tamgu/vscode/package.json) | config signal |
| config | [vscode/tsconfig.json](../../../../sources/naver__tamgu/vscode/tsconfig.json) | config signal |
| config | [template/Makefile](../../../../sources/naver__tamgu/template/Makefile) | config signal |
| docs | [README.md](../../../../sources/naver__tamgu/README.md) | docs signal |
| docs | [wasm/README.md](../../../../sources/naver__tamgu/wasm/README.md) | docs signal |
| docs | [tamgui/ReadMe.txt](../../../../sources/naver__tamgu/tamgui/ReadMe.txt) | docs signal |
| docs | [tamguconsole/ReadMe.txt](../../../../sources/naver__tamgu/tamguconsole/ReadMe.txt) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 18 | [lispe/src/main.cxx](../../../../sources/naver__tamgu/lispe/src/main.cxx)<br>[libwapiti/src/main.cpp](../../../../sources/naver__tamgu/libwapiti/src/main.cpp)<br>[docker/bin/appel.tmg](../../../../sources/naver__tamgu/docker/bin/appel.tmg)<br>[docker/bin/liballmaps.so](../../../../sources/naver__tamgu/docker/bin/liballmaps.so)<br>[docker/bin/libgui.so](../../../../sources/naver__tamgu/docker/bin/libgui.so)<br>[docker/bin/liblinear.so](../../../../sources/naver__tamgu/docker/bin/liblinear.so)<br>[docker/bin/libsound.so](../../../../sources/naver__tamgu/docker/bin/libsound.so)<br>[docker/bin/libsqlite.so](../../../../sources/naver__tamgu/docker/bin/libsqlite.so) |
| agentRuntime | 5 | [src/tools.cxx](../../../../sources/naver__tamgu/src/tools.cxx)<br>[lispe/include/tools.h](../../../../sources/naver__tamgu/lispe/include/tools.h)<br>[libwapiti/src/tools.c](../../../../sources/naver__tamgu/libwapiti/src/tools.c)<br>[libwapiti/include/tools.h](../../../../sources/naver__tamgu/libwapiti/include/tools.h)<br>[examples/PREDIBAG/agents_prolog_code.tmg](../../../../sources/naver__tamgu/examples/PREDIBAG/agents_prolog_code.tmg) |
| mcp | 0 | not obvious |
| retrieval | 12 | [wasm/index.html](../../../../sources/naver__tamgu/wasm/index.html)<br>[documentations/English/index.md](../../../../sources/naver__tamgu/documentations/English/index.md)<br>[docs/Spanish.md/19_Type_vector.md](../../../../sources/naver__tamgu/docs/Spanish.md/19_Type_vector.md)<br>[docs/Spanish.md/21_Type_bifsu_vector_table.md](../../../../sources/naver__tamgu/docs/Spanish.md/21_Type_bifsu_vector_table.md)<br>[docs/Korean.md/19_Type_vector.md](../../../../sources/naver__tamgu/docs/Korean.md/19_Type_vector.md)<br>[docs/Korean.md/21_Type_bifsu_vector_table.md](../../../../sources/naver__tamgu/docs/Korean.md/21_Type_bifsu_vector_table.md)<br>[docs/Greek.md/19_Type_vector.md](../../../../sources/naver__tamgu/docs/Greek.md/19_Type_vector.md)<br>[docs/Greek.md/21_Type_bifsu_vector_table.md](../../../../sources/naver__tamgu/docs/Greek.md/21_Type_bifsu_vector_table.md) |
| spec | 0 | not obvious |
| eval | 11 | [tamgui/test.db](../../../../sources/naver__tamgu/tamgui/test.db)<br>[tamgui/test.db-journal](../../../../sources/naver__tamgu/tamgui/test.db-journal)<br>[lispe/src/eval.cxx](../../../../sources/naver__tamgu/lispe/src/eval.cxx)<br>[lispe/src/straight_eval.cxx](../../../../sources/naver__tamgu/lispe/src/straight_eval.cxx)<br>[java/Teststring/Test.java](../../../../sources/naver__tamgu/java/Teststring/Test.java)<br>[java/Test/build.xml](../../../../sources/naver__tamgu/java/Test/build.xml)<br>[java/Test/example.tmg](../../../../sources/naver__tamgu/java/Test/example.tmg)<br>[java/Test/Test.java](../../../../sources/naver__tamgu/java/Test/Test.java) |
| security | 5 | [libgui/include/windows/FL/Fl_Secret_Input.H](../../../../sources/naver__tamgu/libgui/include/windows/FL/Fl_Secret_Input.H)<br>[libgui/include/macos/fltk/FL/Fl_Secret_Input.H](../../../../sources/naver__tamgu/libgui/include/macos/fltk/FL/Fl_Secret_Input.H)<br>[libgui/include/macarm/fltk/FL/Fl_Secret_Input.H](../../../../sources/naver__tamgu/libgui/include/macarm/fltk/FL/Fl_Secret_Input.H)<br>[libgui/include/linux/FL/Fl_Secret_Input.H](../../../../sources/naver__tamgu/libgui/include/linux/FL/Fl_Secret_Input.H)<br>[examples/taskell/guard.tmg](../../../../sources/naver__tamgu/examples/taskell/guard.tmg) |
| ci | 0 | not obvious |
| container | 1 | [docker/Dockerfile](../../../../sources/naver__tamgu/docker/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 363 | [README.md](../../../../sources/naver__tamgu/README.md)<br>[wasm/README.md](../../../../sources/naver__tamgu/wasm/README.md)<br>[tamgui/ReadMe.txt](../../../../sources/naver__tamgu/tamgui/ReadMe.txt)<br>[tamguconsole/ReadMe.txt](../../../../sources/naver__tamgu/tamguconsole/ReadMe.txt)<br>[tamgucom/ReadMe.txt](../../../../sources/naver__tamgu/tamgucom/ReadMe.txt)<br>[lispe/README.md](../../../../sources/naver__tamgu/lispe/README.md)<br>[libwapiti/Readme.md](../../../../sources/naver__tamgu/libwapiti/Readme.md)<br>[libtamgu/ReadMe.txt](../../../../sources/naver__tamgu/libtamgu/ReadMe.txt) |
| config | 19 | [Makefile](../../../../sources/naver__tamgu/Makefile)<br>[vscode/package.json](../../../../sources/naver__tamgu/vscode/package.json)<br>[vscode/tsconfig.json](../../../../sources/naver__tamgu/vscode/tsconfig.json)<br>[template/Makefile](../../../../sources/naver__tamgu/template/Makefile)<br>[pdf/Makefile](../../../../sources/naver__tamgu/pdf/Makefile)<br>[lispe/Makefile](../../../../sources/naver__tamgu/lispe/Makefile)<br>[libxml/Makefile](../../../../sources/naver__tamgu/libxml/Makefile)<br>[libword2vec/Makefile](../../../../sources/naver__tamgu/libword2vec/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 11 | [tamgui/test.db](../../../../sources/naver__tamgu/tamgui/test.db)<br>[tamgui/test.db-journal](../../../../sources/naver__tamgu/tamgui/test.db-journal)<br>[lispe/src/eval.cxx](../../../../sources/naver__tamgu/lispe/src/eval.cxx)<br>[lispe/src/straight_eval.cxx](../../../../sources/naver__tamgu/lispe/src/straight_eval.cxx)<br>[java/Teststring/Test.java](../../../../sources/naver__tamgu/java/Teststring/Test.java)<br>[java/Test/build.xml](../../../../sources/naver__tamgu/java/Test/build.xml) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 1 | [docker/Dockerfile](../../../../sources/naver__tamgu/docker/Dockerfile) |
| Security / policy | 5 | [libgui/include/windows/FL/Fl_Secret_Input.H](../../../../sources/naver__tamgu/libgui/include/windows/FL/Fl_Secret_Input.H)<br>[libgui/include/macos/fltk/FL/Fl_Secret_Input.H](../../../../sources/naver__tamgu/libgui/include/macos/fltk/FL/Fl_Secret_Input.H)<br>[libgui/include/macarm/fltk/FL/Fl_Secret_Input.H](../../../../sources/naver__tamgu/libgui/include/macarm/fltk/FL/Fl_Secret_Input.H)<br>[libgui/include/linux/FL/Fl_Secret_Input.H](../../../../sources/naver__tamgu/libgui/include/linux/FL/Fl_Secret_Input.H)<br>[examples/taskell/guard.tmg](../../../../sources/naver__tamgu/examples/taskell/guard.tmg) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | CI workflow path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `lispe/src/main.cxx`, `libwapiti/src/main.cpp`, `docker/bin/appel.tmg`.
2. Trace execution through entrypoints: `lispe/src/main.cxx`, `libwapiti/src/main.cpp`, `docker/bin/appel.tmg`.
3. Map agent/tool runtime through: `src/tools.cxx`, `lispe/include/tools.h`, `libwapiti/src/tools.c`.
4. Inspect retrieval/memory/indexing through: `wasm/index.html`, `documentations/English/index.md`, `docs/Spanish.md/19_Type_vector.md`.
5. Verify behavior through test/eval files: `tamgui/test.db`, `tamgui/test.db-journal`, `lispe/src/eval.cxx`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Tamgu 탐구 , a FIL programming language Functional, Imperative, Logical all in one for annotation and data augmentation. 핵심 구조 신호는 C++, Makefile, README.md, LICENSE, docs, spec-artifacts이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
