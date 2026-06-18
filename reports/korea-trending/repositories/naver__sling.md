# naver/sling

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/sling |
| local path | sources/naver__sling |
| HEAD | 5671cd44 |
| stars/forks | 119 / 5 |
| language | C++ |
| license |  |
| pushedAt | 2022-10-31T00:25:34Z |
| trendScore / priorityScore | 70 / 234 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| LLM wiki / memory / graph | 125 | webkit/Source/ThirdParty/ANGLE/README.md, webkit/Source/ThirdParty/qunit/README.md, webkit/Source/ThirdParty/gtest/make/Makefile |
| Spec / doc-driven workflow | 32 | webkit/Source/ThirdParty/ANGLE/README.md, webkit/Source/ThirdParty/ANGLE/extensions/EXT_texture_storage.txt, webkit/Source/JavaScriptCore/inspector/scripts/codegen/generator.py |
| AI agent / tool use | 15 | webkit/Source/ThirdParty/qunit/README.md, webkit/Source/JavaScriptCore/inspector/protocol/CSS.json, webkit/Source/JavaScriptCore/inspector/protocol/DOM.json |
| Security / compliance | 15 | webkit/Source/JavaScriptCore/inspector/protocol/DOMStorage.json, webkit/Source/WebInspectorUI/UserInterface/Controllers/StorageManager.js, webkit/CMakeLists.txt |
| Frontend / developer experience | 12 | webkit/Source/JavaScriptCore/inspector/InjectedScriptSource.js, webkit/Source/JavaScriptCore/inspector/protocol/Debugger.json, webkit/Source/JavaScriptCore/inspector/protocol/Inspector.json |
| Korean language / Korea domain | 4 | README.md, webkit/Source/WebInspectorUI/UserInterface/Controllers/StorageManager.js, webkit/Source/WebInspectorUI/UserInterface/Protocol/DOMStorageObserver.js |
| RAG / retrieval | 3 | webkit/Source/JavaScriptCore/inspector/protocol/DOM.json, webkit/Source/JavaScriptCore/inspector/protocol/Network.json |
| Infra / observability | 2 | webkit/Source/JavaScriptCore/inspector/protocol/Console.json |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, example-rich, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, C/C++, Ruby |
| capabilities | Vector/search store, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 8000 (capped) |
| manifests | 23 |
| docs | 6 |
| tests | 712 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings | Sling / Demo / Latest Release (2016/12/08) / Schedule / Building / Contributing |
| excerpt | Sling Sling is an open source Web content engine for browsers and other applications. It is forked from WebKit r203260 . Our goal is to be a lightweight web content engine available through all major platforms and IOT devices. ! goals https //cloud.githubusercontent.com/assets/2087774/20997226/f1f71768 bd46 11e6 9c1c d9ffb3db63cf.PNG The following markups are supported. HTML5 Javascript CSS3 XML WebGL The following platforms are supported. Android Windows The special features Support chrome extension developing Support DWrite font Rendering on Windows Support SPDY and QUIC Support GFX Tool for Graphics Debugging Demo Graphics Benchmark Chrome vs Sling https //youtu.be/IyQWcJd52pA JavaScript |


## 주요 파일

### Manifests

- README.md
- webkit/README.md
- webkit/Source/ThirdParty/ANGLE/README.md
- webkit/Source/ThirdParty/qunit/README.md
- webkit/Makefile
- webkit/Source/ThirdParty/gtest/make/Makefile
- webkit/Source/ThirdParty/gtest/scripts/test/Makefile
- webkit/Source/ThirdParty/gtest/xcode/Makefile
- webkit/Source/WebInspectorUI/Makefile
- webkit/Tools/LayoutTestRelay/Makefile
- webkit/Tools/TestWebKitAPI/Makefile
- webkit/Source/bmalloc/Makefile
- webkit/Source/JavaScriptCore/Makefile
- webkit/Source/Makefile
- webkit/Source/ThirdParty/ANGLE/Makefile
- webkit/Source/ThirdParty/brotli/dec/Makefile
- webkit/Source/ThirdParty/Makefile
- webkit/Source/ThirdParty/qunit/package.json
- webkit/Source/WebKit/Makefile
- webkit/Source/WebKit2/Makefile


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| webkit | 7998 |
| .gitignore | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .h | 2960 |
| .cpp | 2034 |
| .js | 570 |
| .mm | 518 |
| .svg | 332 |
| .py | 189 |
| .css | 173 |
| [no-ext] | 147 |
| .html | 105 |
| .idl | 94 |
| .in | 87 |
| .json | 85 |
| .cc | 76 |
| .cmake | 73 |
| .xcconfig | 59 |
| .txt | 55 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
