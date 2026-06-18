# Samsung/Fluff

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/Fluff |
| local path | sources/Samsung__Fluff |
| HEAD | d8c95b6 |
| stars/forks | 55 / 11 |
| language | C++ |
| license | MIT |
| pushedAt | 2023-04-07T10:25:43Z |
| trendScore / priorityScore | 66 / 149 |


## 한줄 해석

- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 2 | README.md |
| Spec / doc-driven workflow | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | korea-signal, spec-driven |
| stacks | C/C++ |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 226 |
| manifests | 2 |
| docs | 1 |
| tests | 34 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Fluff |
| headings | Fluff / JS Runtimes supported out-of-the-box / Requirements / Building / Usage / afl-fuzz is preinstalled in /home/build/afl / Description / Contributing / Contact |
| excerpt | Fluff A tool designed to synthesise semantically correct JavaScript snippets given arbitrary data. Useful for fuzzing. JS Runtimes supported out of the box jerryscript https //github.com/pando project/jerryscript njs https //hg.nginx.org/njs duktape https //duktape.org/download.html v8 https //v8.dev/ Requirements docker make Building optional Check if you have access to docker run optional Specify desired version of JS runtime in Run If everything builds correctly the process will result in build/fluff binary to fuzz build/fluff dry binary that will convert Fluff bytecode to JS testcase stdout build/grammars js grammar.yaml es5.1 grammar file js grammar es6.yaml es6 grammar file Usage Typic |


## 주요 파일

### Manifests

- README.md
- Makefile


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 213 |
| docker | 9 |
| .gitignore | 1 |
| Makefile | 1 |
| Makefile.conf | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .cc | 110 |
| .h | 91 |
| [no-ext] | 8 |
| .dockerfile | 5 |
| .build | 4 |
| .sh | 4 |
| .yaml | 2 |
| .conf | 1 |
| .md | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
