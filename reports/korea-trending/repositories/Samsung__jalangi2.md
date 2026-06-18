# Samsung/jalangi2

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/jalangi2 |
| local path | sources/Samsung__jalangi2 |
| HEAD | bc87928 |
| stars/forks | 488 / 122 |
| language | JavaScript |
| license | Apache-2.0 |
| pushedAt | 2026-01-10T18:37:50Z |
| trendScore / priorityScore | 99 / 257 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 128 | README.md, package.json, docs/tutorial1.md |
| LLM wiki / memory / graph | 28 | README.md, docs/SMemory.html, docs/scripts/prettify/Apache-License-2.0.txt |
| Security / compliance | 25 | docs/scripts/bootstrap-dropdown.js, docs/scripts/bootstrap-tab.js, docs/scripts/prettify/Apache-License-2.0.txt |
| RAG / retrieval | 7 | tests/tizen/annex/README.txt, docs/SMemory.html, src/js/runtime/SMemory.js |
| Spec / doc-driven workflow | 4 | README.md, package.json, docs/scripts/URI.js |
| Frontend / developer experience | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | documentParsing, example-rich, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, localRuntime, rag, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin |
| capabilities | Graph/memory store, Document parsing/OCR, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 918 |
| manifests | 5 |
| docs | 28 |
| tests | 797 |
| ci/ops | 1 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings | Introduction / Requirements / Installation / Run tests / Usage / Developing an analysis in Jalangi2 / Supported ECMAScript versions |
| excerpt | Jalangi2 ======= Introduction Jalangi2 is a framework for writing dynamic analyses for JavaScript. Jalangi1 is still available at https //github.com/SRA SiliconValley/jalangi, but we no longer plan to develop it. Jalangi2 does not support the record/replay feature of Jalangi1. In the Jalangi2 distribution you will find several analyses an analysis to track NaNs src/js/sample analyses/dlint/CheckNaN.js . an analysis to check if an undefined is concatenated to a string src/js/sample analyses/dlint/ConcatUndefinedToString.js . Memory analysis https //github.com/Samsung/meminsight a memory profiler for JavaScript and HTML5. DLint https //github.com/ksen007/jalangi2analyses a dynamic checker for |


## 주요 파일

### Manifests

- README.md
- scripts/node-jalangi/README.md
- package.json
- tests/tizen/go/css/go.css
- tests/tizen/go/js/go.js


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| tests | 794 |
| src | 66 |
| docs | 26 |
| scripts | 20 |
| node_test | 2 |
| .github | 1 |
| .gitignore | 1 |
| .npmignore | 1 |
| .travis.yml | 1 |
| conf.json | 1 |
| generatedocs.sh | 1 |
| LICENSE.txt | 1 |
| package-lock.json | 1 |
| package.json | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .js | 608 |
| .css | 50 |
| .ogg | 44 |
| .html | 41 |
| .ttf | 39 |
| .json | 25 |
| [no-ext] | 24 |
| .txt | 21 |
| .py | 16 |
| .wav | 9 |
| .xml | 7 |
| .sh | 6 |
| .md | 5 |
| .trace | 4 |
| .prefs | 2 |
| .ttc | 2 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
