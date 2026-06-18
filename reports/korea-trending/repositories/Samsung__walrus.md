# Samsung/walrus

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/walrus |
| local path | sources/Samsung__walrus |
| HEAD | c5f4941 |
| stars/forks | 74 / 18 |
| language | WebAssembly |
| license | Apache-2.0 |
| pushedAt | 2026-06-12T23:49:12Z |
| trendScore / priorityScore | 93 / 214 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 12 | README.md, .github/workflows/actions.yml, test/wasmBenchmarker/benchmark.py |
| Spec / doc-driven workflow | 12 | test/wasm-spec/README.md, .github/workflows/actions.yml, tools/run-tests.py |
| Security / compliance | 6 | third_party/wabt/Makefile, test/wasmBenchmarker/benchmark.py, tools/run-tests.py |
| LLM wiki / memory / graph | 5 | README.md, .github/workflows/actions.yml, test/wasmBenchmarker/benchmark.py |
| Frontend / developer experience | 3 | .github/workflows/actions.yml |


## 분류와 스택

| key | value |
| --- | --- |
| categories | evalObservability, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, sdk-api, security-compliance, spec-driven |
| stacks | Python, C/C++ |
| capabilities | Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 548 |
| manifests | 4 |
| docs | 3 |
| tests | 363 |
| ci/ops | 1 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | WALRUS: WebAssembly Lightweight RUntime |
| headings | WALRUS: WebAssembly Lightweight RUntime / Cloning / Building using CMake / Perf |
| excerpt | WALRUS WebAssembly Lightweight RUntime ! License https //img.shields.io/badge/License Apache 2.0 blue.svg https //opensource.org/licenses/Apache 2.0 ! Actions Status https //github.com/Samsung/walrus/actions/workflows/actions.yml/badge.svg https //github.com/Samsung/walrus/actions ! Coverity Scan Build Status https //scan.coverity.com/projects/26942/badge.svg https //scan.coverity.com/projects/samsung walrus This project aims to provide a lightweight WebAssembly runtime engine. It now fully supports WebAssembly specs with an simple interpreter, but we plan to optimize interpreting as well as adopting JIT compiler for better performance. Cloning Clone as normal, but don't forget to get the su |


## 주요 파일

### Manifests

- README.md
- test/wasm-spec/README.md
- test/wasmBenchmarker/requirements.txt
- third_party/wabt/Makefile


### Spec / Docs / Prompt Artifacts

- test/wasmBenchmarker/requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| test | 363 |
| src | 90 |
| third_party | 80 |
| tools | 3 |
| .github | 2 |
| .ahub | 1 |
| .clang-format | 1 |
| .flake8 | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .gitmodules | 1 |
| .style.yapf | 1 |
| CMakeLists.txt | 1 |
| LICENSE | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .wast | 322 |
| .h | 100 |
| .cpp | 35 |
| .c | 28 |
| .cc | 27 |
| [no-ext] | 11 |
| .txt | 10 |
| .py | 4 |
| .def | 3 |
| .md | 3 |
| .blacklist | 1 |
| .in | 1 |
| .patch | 1 |
| .yapf | 1 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
