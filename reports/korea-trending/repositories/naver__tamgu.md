# naver/tamgu

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/tamgu |
| local path | sources/naver__tamgu |
| HEAD | 23baa39 |
| stars/forks | 224 / 13 |
| language | C++ |
| license | BSD-3-Clause |
| pushedAt | 2026-05-06T13:01:03Z |
| trendScore / priorityScore | 92 / 257 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 500 | docs/Korean.md/README.md, docs/English.md/README.md, docs/French.md/README.md |
| Frontend / developer experience | 55 | vscode/node_modules/@types/node/README.md, vscode/node_modules/typescript/README.md, tamgui/ReadMe.txt |
| LLM wiki / memory / graph | 22 | lispe/README.md, README.md, wasm/README.md |
| AI agent / tool use | 12 | examples/PREDIBAG/README.md |
| Security / compliance | 3 | wasm/README.md, vscode/node_modules/typescript/package.json |
| Spec / doc-driven workflow | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, example-rich, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin, C/C++ |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 2276 |
| manifests | 40 |
| docs | 358 |
| tests | 3 |
| ci/ops | 1 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | TAMGU (탐구): A FIL Language |
| headings | TAMGU (탐구): A FIL Language / Annotation / Code Example / Annotation Example / Documentation / Pre-compiled Releases / Docker / Examples / Compiling / Libraries |
| excerpt | TAMGU 탐구 A FIL Language TAMGU is a FIL programming language Functional, Imperative and Logical . TAMGU is a multithreaded programming language that provides an imperative formalism close to Python, but with a strong and powerful type system. a functional formalism inspired by Haskell, which can freely mix with the imperative paradigm a logical formalism inspired by Prolog, which can freely mix with the imperative and functional paradigms For each specific problem in your programming, choose the most appropriate formalism and freely mix functional, imperative and logical approaches to implement the most expressive but also the most compact code possible. I owe a lot of respect to Lipovača , w |


## 주요 파일

### Manifests

- docs/Korean.md/README.md
- docs/English.md/README.md
- docs/French.md/README.md
- docs/Greek.md/README.md
- docs/Spanish.md/README.md
- documentations/Korean/README.md
- binary/README.md
- examples/PREDIBAG/README.md
- libpython/README.md
- lispe/README.md
- README.md
- wasm/README.md
- documentations/English/README.md
- documentations/French/README.md
- documentations/Greek/README.md
- documentations/Spanish/README.md
- vscode/node_modules/@types/node/README.md
- vscode/node_modules/@types/vscode/README.md
- vscode/node_modules/typescript/README.md
- vscode/node_modules/undici-types/README.md


### Spec / Docs / Prompt Artifacts

- vscode/.vscode/tasks.json


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| libgui | 800 |
| docs | 334 |
| vscode | 236 |
| examples | 125 |
| include | 124 |
| allmaps | 119 |
| src | 102 |
| tamgui | 78 |
| libxml | 61 |
| lispe | 54 |
| libwapiti | 46 |
| java | 37 |
| libcurl | 30 |
| liblinear | 17 |


## 확장자 분포

| ext | count |
| --- | --- |
| .h | 1092 |
| .md | 346 |
| .cxx | 217 |
| .ts | 182 |
| .tmg | 125 |
| [no-ext] | 36 |
| .cpp | 33 |
| .json | 25 |
| .c | 21 |
| .vcxproj | 17 |
| .bmp | 16 |
| .a | 12 |
| .js | 12 |
| .txt | 12 |
| .user | 12 |
| .java | 8 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
