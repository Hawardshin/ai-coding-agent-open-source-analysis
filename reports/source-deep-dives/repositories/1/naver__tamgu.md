# naver/tamgu 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Tamgu (탐구), a FIL programming language: Functional, Imperative, Logical all in one for annotation and data augmentation

## 요약

- 조사 단위: `sources/naver__tamgu` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,088 files, 127 directories, depth score 107, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=lispe/src/main.cxx, libwapiti/src/main.cpp, docker/bin/appel.tmg이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/tamgu |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | C++ |
| Stars | 224 |
| Forks | 13 |
| License | BSD-3-Clause |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__tamgu](../../../../sources/naver__tamgu) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__tamgu.md](../../../korea-trending/repositories/naver__tamgu.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2088 / 127 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | allmaps, binary, bnf, docker, docs, documentations, examples, include, java, libcurl, libgui, liblinear, libpython, libs, libsqlite, libtamgu, libwapiti, libword2vec, libxml, lispe |
| 상위 확장자 | .h: 1092, .md: 341, .cxx: 217, .tmg: 125, .cpp: 33, (none): 32, .c: 21, .vcxproj: 17, .bmp: 16, .ico: 16, .so: 13, .a: 12 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 18 | [lispe/src/main.cxx](../../../../sources/naver__tamgu/lispe/src/main.cxx)<br>[libwapiti/src/main.cpp](../../../../sources/naver__tamgu/libwapiti/src/main.cpp)<br>[docker/bin/appel.tmg](../../../../sources/naver__tamgu/docker/bin/appel.tmg)<br>[docker/bin/liballmaps.so](../../../../sources/naver__tamgu/docker/bin/liballmaps.so)<br>[docker/bin/libgui.so](../../../../sources/naver__tamgu/docker/bin/libgui.so)<br>[docker/bin/liblinear.so](../../../../sources/naver__tamgu/docker/bin/liblinear.so)<br>[docker/bin/libsound.so](../../../../sources/naver__tamgu/docker/bin/libsound.so)<br>[docker/bin/libsqlite.so](../../../../sources/naver__tamgu/docker/bin/libsqlite.so) |
| agentRuntime | 5 | [src/tools.cxx](../../../../sources/naver__tamgu/src/tools.cxx)<br>[lispe/include/tools.h](../../../../sources/naver__tamgu/lispe/include/tools.h)<br>[libwapiti/src/tools.c](../../../../sources/naver__tamgu/libwapiti/src/tools.c)<br>[libwapiti/include/tools.h](../../../../sources/naver__tamgu/libwapiti/include/tools.h)<br>[examples/PREDIBAG/agents_prolog_code.tmg](../../../../sources/naver__tamgu/examples/PREDIBAG/agents_prolog_code.tmg) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 12 | [wasm/index.html](../../../../sources/naver__tamgu/wasm/index.html)<br>[documentations/English/index.md](../../../../sources/naver__tamgu/documentations/English/index.md)<br>[docs/Spanish.md/19_Type_vector.md](../../../../sources/naver__tamgu/docs/Spanish.md/19_Type_vector.md)<br>[docs/Spanish.md/21_Type_bifsu_vector_table.md](../../../../sources/naver__tamgu/docs/Spanish.md/21_Type_bifsu_vector_table.md)<br>[docs/Korean.md/19_Type_vector.md](../../../../sources/naver__tamgu/docs/Korean.md/19_Type_vector.md)<br>[docs/Korean.md/21_Type_bifsu_vector_table.md](../../../../sources/naver__tamgu/docs/Korean.md/21_Type_bifsu_vector_table.md)<br>[docs/Greek.md/19_Type_vector.md](../../../../sources/naver__tamgu/docs/Greek.md/19_Type_vector.md)<br>[docs/Greek.md/21_Type_bifsu_vector_table.md](../../../../sources/naver__tamgu/docs/Greek.md/21_Type_bifsu_vector_table.md) |
| spec | 0 | 명확하지 않음 |
| eval | 11 | [tamgui/test.db](../../../../sources/naver__tamgu/tamgui/test.db)<br>[tamgui/test.db-journal](../../../../sources/naver__tamgu/tamgui/test.db-journal)<br>[lispe/src/eval.cxx](../../../../sources/naver__tamgu/lispe/src/eval.cxx)<br>[lispe/src/straight_eval.cxx](../../../../sources/naver__tamgu/lispe/src/straight_eval.cxx)<br>[java/Teststring/Test.java](../../../../sources/naver__tamgu/java/Teststring/Test.java)<br>[java/Test/build.xml](../../../../sources/naver__tamgu/java/Test/build.xml)<br>[java/Test/example.tmg](../../../../sources/naver__tamgu/java/Test/example.tmg)<br>[java/Test/Test.java](../../../../sources/naver__tamgu/java/Test/Test.java) |
| security | 5 | [libgui/include/windows/FL/Fl_Secret_Input.H](../../../../sources/naver__tamgu/libgui/include/windows/FL/Fl_Secret_Input.H)<br>[libgui/include/macos/fltk/FL/Fl_Secret_Input.H](../../../../sources/naver__tamgu/libgui/include/macos/fltk/FL/Fl_Secret_Input.H)<br>[libgui/include/macarm/fltk/FL/Fl_Secret_Input.H](../../../../sources/naver__tamgu/libgui/include/macarm/fltk/FL/Fl_Secret_Input.H)<br>[libgui/include/linux/FL/Fl_Secret_Input.H](../../../../sources/naver__tamgu/libgui/include/linux/FL/Fl_Secret_Input.H)<br>[examples/taskell/guard.tmg](../../../../sources/naver__tamgu/examples/taskell/guard.tmg) |
| ci | 0 | 명확하지 않음 |
| container | 1 | [docker/Dockerfile](../../../../sources/naver__tamgu/docker/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 363 | [README.md](../../../../sources/naver__tamgu/README.md)<br>[wasm/README.md](../../../../sources/naver__tamgu/wasm/README.md)<br>[tamgui/ReadMe.txt](../../../../sources/naver__tamgu/tamgui/ReadMe.txt)<br>[tamguconsole/ReadMe.txt](../../../../sources/naver__tamgu/tamguconsole/ReadMe.txt)<br>[tamgucom/ReadMe.txt](../../../../sources/naver__tamgu/tamgucom/ReadMe.txt)<br>[lispe/README.md](../../../../sources/naver__tamgu/lispe/README.md)<br>[libwapiti/Readme.md](../../../../sources/naver__tamgu/libwapiti/Readme.md)<br>[libtamgu/ReadMe.txt](../../../../sources/naver__tamgu/libtamgu/ReadMe.txt) |
| config | 19 | [Makefile](../../../../sources/naver__tamgu/Makefile)<br>[vscode/package.json](../../../../sources/naver__tamgu/vscode/package.json)<br>[vscode/tsconfig.json](../../../../sources/naver__tamgu/vscode/tsconfig.json)<br>[template/Makefile](../../../../sources/naver__tamgu/template/Makefile)<br>[pdf/Makefile](../../../../sources/naver__tamgu/pdf/Makefile)<br>[lispe/Makefile](../../../../sources/naver__tamgu/lispe/Makefile)<br>[libxml/Makefile](../../../../sources/naver__tamgu/libxml/Makefile)<br>[libword2vec/Makefile](../../../../sources/naver__tamgu/libword2vec/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 11 | [tamgui/test.db](../../../../sources/naver__tamgu/tamgui/test.db)<br>[tamgui/test.db-journal](../../../../sources/naver__tamgu/tamgui/test.db-journal)<br>[lispe/src/eval.cxx](../../../../sources/naver__tamgu/lispe/src/eval.cxx)<br>[lispe/src/straight_eval.cxx](../../../../sources/naver__tamgu/lispe/src/straight_eval.cxx)<br>[java/Teststring/Test.java](../../../../sources/naver__tamgu/java/Teststring/Test.java)<br>[java/Test/build.xml](../../../../sources/naver__tamgu/java/Test/build.xml) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 1 | [docker/Dockerfile](../../../../sources/naver__tamgu/docker/Dockerfile) |
| 보안/정책 | 5 | [libgui/include/windows/FL/Fl_Secret_Input.H](../../../../sources/naver__tamgu/libgui/include/windows/FL/Fl_Secret_Input.H)<br>[libgui/include/macos/fltk/FL/Fl_Secret_Input.H](../../../../sources/naver__tamgu/libgui/include/macos/fltk/FL/Fl_Secret_Input.H)<br>[libgui/include/macarm/fltk/FL/Fl_Secret_Input.H](../../../../sources/naver__tamgu/libgui/include/macarm/fltk/FL/Fl_Secret_Input.H)<br>[libgui/include/linux/FL/Fl_Secret_Input.H](../../../../sources/naver__tamgu/libgui/include/linux/FL/Fl_Secret_Input.H)<br>[examples/taskell/guard.tmg](../../../../sources/naver__tamgu/examples/taskell/guard.tmg) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | CI workflow 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `lispe/src/main.cxx`, `libwapiti/src/main.cpp`, `docker/bin/appel.tmg`.
2. entrypoint를 따라 실행 흐름 확인: `lispe/src/main.cxx`, `libwapiti/src/main.cpp`, `docker/bin/appel.tmg`.
3. agent/tool runtime 매핑: `src/tools.cxx`, `lispe/include/tools.h`, `libwapiti/src/tools.c`.
4. retrieval/memory/indexing 확인: `wasm/index.html`, `documentations/English/index.md`, `docs/Spanish.md/19_Type_vector.md`.
5. test/eval 파일로 동작 검증: `tamgui/test.db`, `tamgui/test.db-journal`, `lispe/src/eval.cxx`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Tamgu 탐구 , a FIL programming language Functional, Imperative, Logical all in one for annotation and data augmentation. 핵심 구조 신호는 C++, Makefile, README.md, LICENSE, docs, spec-artifacts이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
