# naver/lispe Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

An implementation of a full fledged Lisp interpreter with Data Structure, Pattern Programming and High level Functions with Lazy Evaluation à la Haskell.

## 요약

- 조사 단위: `sources/naver__lispe` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 583 files, 110 directories, depth score 104, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

평가/관측/품질 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 eval=wasm/test.html, transducer/example/test.lisp, src/eval.cxx이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 quality and evaluation comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/lispe |
| Topic | Evals, Observability, and Quality / 평가/관측/품질 |
| Region | korea |
| Language | C |
| Stars | 594 |
| Forks | 19 |
| License | NOASSERTION |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver__lispe](../../../../sources/naver__lispe) |
| Existing report | [reports/korea-trending/repositories/naver__lispe.md](../../../korea-trending/repositories/naver__lispe.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 583 / 110 |
| Max observed depth | 7 |
| Top directories | async, binaries, blas, check, curl, docker, docs, editor, examples, gui, include, lispe, lispegguf, lispemlx, lispetiktoken, lispetorch, Pythonic, pythonlispe, sqlite, src |
| Top extensions | .lisp: 148, .h: 135, .cxx: 76, .md: 44, (none): 26, .png: 18, .vcxproj: 13, .js: 9, .m: 9, .user: 9, .py: 8, .sh: 8 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
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


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | lispe | make lispe |
| utility | Makefile | jag | make jag |
| test | Makefile | testemoji | make testemoji |
| utility | Makefile | liblispe | make liblispe |
| utility | Makefile | all | make all |
| utility | Makefile | install | make install |
| utility | Makefile | clean | make clean |
| utility | Makefile | libs | make libs |


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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 13 | [src/main.cxx](../../../../sources/naver__lispe/src/main.cxx)<br>[examples/sockets/server.lisp](../../../../sources/naver__lispe/examples/sockets/server.lisp)<br>[docker/bin/jag](../../../../sources/naver__lispe/docker/bin/jag)<br>[docker/bin/libgui.so](../../../../sources/naver__lispe/docker/bin/libgui.so)<br>[docker/bin/liblispe_async.so](../../../../sources/naver__lispe/docker/bin/liblispe_async.so)<br>[docker/bin/liblispe_blas.so](../../../../sources/naver__lispe/docker/bin/liblispe_blas.so)<br>[docker/bin/liblispe_curl.so](../../../../sources/naver__lispe/docker/bin/liblispe_curl.so)<br>[docker/bin/liblispe_sqlite.so](../../../../sources/naver__lispe/docker/bin/liblispe_sqlite.so) |
| agentRuntime | 4 | [src/tools.cxx](../../../../sources/naver__lispe/src/tools.cxx)<br>[include/tools.h](../../../../sources/naver__lispe/include/tools.h)<br>[editor/src/tools.cxx](../../../../sources/naver__lispe/editor/src/tools.cxx)<br>[editor/include/tools.h](../../../../sources/naver__lispe/editor/include/tools.h) |
| mcp | 0 | not obvious |
| retrieval | 4 | [wasm/index.html](../../../../sources/naver__lispe/wasm/index.html)<br>[lispetorch/docs/index.md](../../../../sources/naver__lispe/lispetorch/docs/index.md)<br>[docs/index.html](../../../../sources/naver__lispe/docs/index.html)<br>[binaries/wasm/index.html](../../../../sources/naver__lispe/binaries/wasm/index.html) |
| spec | 0 | not obvious |
| eval | 15 | [wasm/test.html](../../../../sources/naver__lispe/wasm/test.html)<br>[transducer/example/test.lisp](../../../../sources/naver__lispe/transducer/example/test.lisp)<br>[src/eval.cxx](../../../../sources/naver__lispe/src/eval.cxx)<br>[src/straight_eval.cxx](../../../../sources/naver__lispe/src/straight_eval.cxx)<br>[pythonlispe/src/test.cxx](../../../../sources/naver__lispe/pythonlispe/src/test.cxx)<br>[lispegguf/examples/test_chat.lisp](../../../../sources/naver__lispe/lispegguf/examples/test_chat.lisp)<br>[lispegguf/examples/test_llama_v2.lisp](../../../../sources/naver__lispe/lispegguf/examples/test_llama_v2.lisp)<br>[lispegguf/examples/test_qwen.lisp](../../../../sources/naver__lispe/lispegguf/examples/test_qwen.lisp) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 1 | [docker/Dockerfile](../../../../sources/naver__lispe/docker/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 52 | [README.md](../../../../sources/naver__lispe/README.md)<br>[wasm/README.md](../../../../sources/naver__lispe/wasm/README.md)<br>[sqlite/examples/readme.txt](../../../../sources/naver__lispe/sqlite/examples/readme.txt)<br>[Pythonic/README.md](../../../../sources/naver__lispe/Pythonic/README.md)<br>[lispetorch/README.md](../../../../sources/naver__lispe/lispetorch/README.md)<br>[lispetorch/docs/ADAPTATION_LINUX.md](../../../../sources/naver__lispe/lispetorch/docs/ADAPTATION_LINUX.md)<br>[lispetorch/docs/CHANGELOG.md](../../../../sources/naver__lispe/lispetorch/docs/CHANGELOG.md)<br>[lispetorch/docs/developer_guide.md](../../../../sources/naver__lispe/lispetorch/docs/developer_guide.md) |
| config | 16 | [Makefile](../../../../sources/naver__lispe/Makefile)<br>[xml/Makefile](../../../../sources/naver__lispe/xml/Makefile)<br>[wasm/Makefile](../../../../sources/naver__lispe/wasm/Makefile)<br>[transducer/Makefile](../../../../sources/naver__lispe/transducer/Makefile)<br>[template/Makefile](../../../../sources/naver__lispe/template/Makefile)<br>[sqlite/Makefile](../../../../sources/naver__lispe/sqlite/Makefile)<br>[pythonlispe/Makefile](../../../../sources/naver__lispe/pythonlispe/Makefile)<br>[lispetorch/Makefile](../../../../sources/naver__lispe/lispetorch/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 15 | [wasm/test.html](../../../../sources/naver__lispe/wasm/test.html)<br>[transducer/example/test.lisp](../../../../sources/naver__lispe/transducer/example/test.lisp)<br>[src/eval.cxx](../../../../sources/naver__lispe/src/eval.cxx)<br>[src/straight_eval.cxx](../../../../sources/naver__lispe/src/straight_eval.cxx)<br>[pythonlispe/src/test.cxx](../../../../sources/naver__lispe/pythonlispe/src/test.cxx)<br>[lispegguf/examples/test_chat.lisp](../../../../sources/naver__lispe/lispegguf/examples/test_chat.lisp) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 1 | [docker/Dockerfile](../../../../sources/naver__lispe/docker/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | CI workflow path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `wasm/test.html`, `transducer/example/test.lisp`, `src/eval.cxx`.
2. Trace execution through entrypoints: `src/main.cxx`, `examples/sockets/server.lisp`, `docker/bin/jag`.
3. Map agent/tool runtime through: `src/tools.cxx`, `include/tools.h`, `editor/src/tools.cxx`.
4. Inspect retrieval/memory/indexing through: `wasm/index.html`, `lispetorch/docs/index.md`, `docs/index.html`.
5. Verify behavior through test/eval files: `wasm/test.html`, `transducer/example/test.lisp`, `src/eval.cxx`.

## Existing Repository Insight

평가/관측/품질 관점에서 An implementation of a full fledged Lisp interpreter with Data Structure, Pattern Programming and High level Functions w. 핵심 구조 신호는 C, Makefile, README.md, LICENSE, docs, spec-artifacts이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 평가/관측/품질 레포입니다. 활용 관점은 quality and evaluation comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
