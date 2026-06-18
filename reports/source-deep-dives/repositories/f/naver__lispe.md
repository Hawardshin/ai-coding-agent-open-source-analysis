# naver/lispe 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

An implementation of a full fledged Lisp interpreter with Data Structure, Pattern Programming and High level Functions with Lazy Evaluation à la Haskell.

## 요약

- 조사 단위: `sources/naver__lispe` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 583 files, 110 directories, depth score 98, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

평가/관측/품질 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 eval=wasm/test.html, transducer/example/test.lisp, src/eval.cxx이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 품질/평가 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/lispe |
| 주제 | 평가/관측/품질 / 평가/관측/품질 |
| Region | korea |
| Language | C |
| Stars | 594 |
| Forks | 19 |
| License | NOASSERTION |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__lispe](../../../../sources/naver__lispe) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__lispe.md](../../../korea-trending/repositories/naver__lispe.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 583 / 110 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | async, binaries, blas, check, curl, docker, docs, editor, examples, gui, include, lispe, lispegguf, lispemlx, lispetiktoken, lispetorch, Pythonic, pythonlispe, sqlite, src |
| 상위 확장자 | .lisp: 148, .h: 135, .cxx: 76, .md: 44, (none): 26, .png: 18, .vcxproj: 13, .js: 9, .m: 9, .user: 9, .py: 8, .sh: 8 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 9 |
| src | source boundary | 5 |
| examples/diverse | examples workspace | 2 |
| async | top-level component | 1 |
| binaries | top-level component | 1 |
| blas | top-level component | 1 |
| check | top-level component | 1 |
| curl | top-level component | 1 |
| docker | documentation surface | 1 |
| editor | top-level component | 1 |
| examples | top-level component | 1 |
| examples/AdventOfCode2021 | examples workspace | 1 |
| examples/ollama | examples workspace | 1 |
| examples/sockets | examples workspace | 1 |
| gui | top-level component | 1 |
| include | top-level component | 1 |
| lispe | top-level component | 1 |
| lispegguf | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | lispe | make lispe |
| utility | Makefile | jag | make jag |
| test | Makefile | testemoji | make testemoji |
| utility | Makefile | liblispe | make liblispe |
| utility | Makefile | all | make all |
| utility | Makefile | install | make install |
| utility | Makefile | clean | make clean |
| utility | Makefile | libs | make libs |


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
| eval | [wasm/test.html](../../../../sources/naver__lispe/wasm/test.html) | eval signal |
| eval | [transducer/example/test.lisp](../../../../sources/naver__lispe/transducer/example/test.lisp) | eval signal |
| eval | [src/eval.cxx](../../../../sources/naver__lispe/src/eval.cxx) | eval signal |
| eval | [src/straight_eval.cxx](../../../../sources/naver__lispe/src/straight_eval.cxx) | eval signal |
| entrypoints | [src/main.cxx](../../../../sources/naver__lispe/src/main.cxx) | entrypoints signal |
| entrypoints | [examples/sockets/server.lisp](../../../../sources/naver__lispe/examples/sockets/server.lisp) | entrypoints signal |
| entrypoints | [docker/bin/jag](../../../../sources/naver__lispe/docker/bin/jag) | entrypoints signal |
| entrypoints | [docker/bin/libgui.so](../../../../sources/naver__lispe/docker/bin/libgui.so) | entrypoints signal |
| config | [Makefile](../../../../sources/naver__lispe/Makefile) | config signal |
| config | [xml/Makefile](../../../../sources/naver__lispe/xml/Makefile) | config signal |
| config | [wasm/Makefile](../../../../sources/naver__lispe/wasm/Makefile) | config signal |
| config | [transducer/Makefile](../../../../sources/naver__lispe/transducer/Makefile) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 13 | [src/main.cxx](../../../../sources/naver__lispe/src/main.cxx)<br>[examples/sockets/server.lisp](../../../../sources/naver__lispe/examples/sockets/server.lisp)<br>[docker/bin/jag](../../../../sources/naver__lispe/docker/bin/jag)<br>[docker/bin/libgui.so](../../../../sources/naver__lispe/docker/bin/libgui.so)<br>[docker/bin/liblispe_async.so](../../../../sources/naver__lispe/docker/bin/liblispe_async.so)<br>[docker/bin/liblispe_blas.so](../../../../sources/naver__lispe/docker/bin/liblispe_blas.so)<br>[docker/bin/liblispe_curl.so](../../../../sources/naver__lispe/docker/bin/liblispe_curl.so)<br>[docker/bin/liblispe_sqlite.so](../../../../sources/naver__lispe/docker/bin/liblispe_sqlite.so) |
| agentRuntime | 4 | [src/tools.cxx](../../../../sources/naver__lispe/src/tools.cxx)<br>[include/tools.h](../../../../sources/naver__lispe/include/tools.h)<br>[editor/src/tools.cxx](../../../../sources/naver__lispe/editor/src/tools.cxx)<br>[editor/include/tools.h](../../../../sources/naver__lispe/editor/include/tools.h) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 4 | [wasm/index.html](../../../../sources/naver__lispe/wasm/index.html)<br>[lispetorch/docs/index.md](../../../../sources/naver__lispe/lispetorch/docs/index.md)<br>[docs/index.html](../../../../sources/naver__lispe/docs/index.html)<br>[binaries/wasm/index.html](../../../../sources/naver__lispe/binaries/wasm/index.html) |
| spec | 0 | 명확하지 않음 |
| eval | 15 | [wasm/test.html](../../../../sources/naver__lispe/wasm/test.html)<br>[transducer/example/test.lisp](../../../../sources/naver__lispe/transducer/example/test.lisp)<br>[src/eval.cxx](../../../../sources/naver__lispe/src/eval.cxx)<br>[src/straight_eval.cxx](../../../../sources/naver__lispe/src/straight_eval.cxx)<br>[pythonlispe/src/test.cxx](../../../../sources/naver__lispe/pythonlispe/src/test.cxx)<br>[lispegguf/examples/test_chat.lisp](../../../../sources/naver__lispe/lispegguf/examples/test_chat.lisp)<br>[lispegguf/examples/test_llama_v2.lisp](../../../../sources/naver__lispe/lispegguf/examples/test_llama_v2.lisp)<br>[lispegguf/examples/test_qwen.lisp](../../../../sources/naver__lispe/lispegguf/examples/test_qwen.lisp) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 1 | [docker/Dockerfile](../../../../sources/naver__lispe/docker/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 52 | [README.md](../../../../sources/naver__lispe/README.md)<br>[wasm/README.md](../../../../sources/naver__lispe/wasm/README.md)<br>[sqlite/examples/readme.txt](../../../../sources/naver__lispe/sqlite/examples/readme.txt)<br>[Pythonic/README.md](../../../../sources/naver__lispe/Pythonic/README.md)<br>[lispetorch/README.md](../../../../sources/naver__lispe/lispetorch/README.md)<br>[lispetorch/docs/ADAPTATION_LINUX.md](../../../../sources/naver__lispe/lispetorch/docs/ADAPTATION_LINUX.md)<br>[lispetorch/docs/CHANGELOG.md](../../../../sources/naver__lispe/lispetorch/docs/CHANGELOG.md)<br>[lispetorch/docs/developer_guide.md](../../../../sources/naver__lispe/lispetorch/docs/developer_guide.md) |
| config | 16 | [Makefile](../../../../sources/naver__lispe/Makefile)<br>[xml/Makefile](../../../../sources/naver__lispe/xml/Makefile)<br>[wasm/Makefile](../../../../sources/naver__lispe/wasm/Makefile)<br>[transducer/Makefile](../../../../sources/naver__lispe/transducer/Makefile)<br>[template/Makefile](../../../../sources/naver__lispe/template/Makefile)<br>[sqlite/Makefile](../../../../sources/naver__lispe/sqlite/Makefile)<br>[pythonlispe/Makefile](../../../../sources/naver__lispe/pythonlispe/Makefile)<br>[lispetorch/Makefile](../../../../sources/naver__lispe/lispetorch/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 15 | [wasm/test.html](../../../../sources/naver__lispe/wasm/test.html)<br>[transducer/example/test.lisp](../../../../sources/naver__lispe/transducer/example/test.lisp)<br>[src/eval.cxx](../../../../sources/naver__lispe/src/eval.cxx)<br>[src/straight_eval.cxx](../../../../sources/naver__lispe/src/straight_eval.cxx)<br>[pythonlispe/src/test.cxx](../../../../sources/naver__lispe/pythonlispe/src/test.cxx)<br>[lispegguf/examples/test_chat.lisp](../../../../sources/naver__lispe/lispegguf/examples/test_chat.lisp) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 1 | [docker/Dockerfile](../../../../sources/naver__lispe/docker/Dockerfile) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | CI workflow 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `wasm/test.html`, `transducer/example/test.lisp`, `src/eval.cxx`.
2. entrypoint를 따라 실행 흐름 확인: `src/main.cxx`, `examples/sockets/server.lisp`, `docker/bin/jag`.
3. agent/tool runtime 매핑: `src/tools.cxx`, `include/tools.h`, `editor/src/tools.cxx`.
4. retrieval/memory/indexing 확인: `wasm/index.html`, `lispetorch/docs/index.md`, `docs/index.html`.
5. test/eval 파일로 동작 검증: `wasm/test.html`, `transducer/example/test.lisp`, `src/eval.cxx`.

## 기존 레포 인사이트

평가/관측/품질 관점에서 An implementation of a full fledged Lisp interpreter with Data Structure, Pattern Programming and High level Functions w. 핵심 구조 신호는 C, Makefile, README.md, LICENSE, docs, spec-artifacts이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 평가/관측/품질 레포입니다. 활용 관점은 품질/평가 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
