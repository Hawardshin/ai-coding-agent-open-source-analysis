# Samsung/escargot

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/escargot |
| local path | sources/Samsung__escargot |
| HEAD | 2dee22f |
| stars/forks | 357 / 58 |
| language | C++ |
| license | LGPL-2.1 |
| pushedAt | 2026-06-17T01:06:57Z |
| trendScore / priorityScore | 109 / 267 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Security / compliance | 45 | README.md, third_party/robin_map/README.md, third_party/rapidjson/readme.md |
| Korean language / Korea domain | 37 | README.md, .github/workflows/analysis-actions.yml, .github/workflows/code-review.yml |
| LLM wiki / memory / graph | 36 | README.md, third_party/lz4/README.md, third_party/robin_map/README.md |
| Frontend / developer experience | 16 | README.md, .github/workflows/es-actions.yml, .github/workflows/release.yml |
| Spec / doc-driven workflow | 13 | docs/Spec.md, tools/test/spidermonkey/excludelist.txt, tools/test/test262/parseTestRecord.py |
| RAG / retrieval | 1 | tools/test/v8/v8.execution.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | documentParsing, evalObservability, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python, C/C++ |
| capabilities | LLM/app framework, Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 804 |
| manifests | 6 |
| docs | 12 |
| tests | 145 |
| ci/ops | 6 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Escargot |
| headings | Escargot / Contents 📋 / Building 🛠️ / Supported Platforms and Architectures / Build Options / Linux / macOS / add icu path to pkg_config_path (x64) / add icu path to pkg_config_path (arm64) / Android |
| excerpt | Escargot ! License https //img.shields.io/badge/License LGPL%20v2.1 blue.svg LICENSE ! GitHub release latestSemVer https //img.shields.io/github/v/release/Samsung/escargot https //github.com/Samsung/escargot/releases ! Actions Status https //github.com/Samsung/escargot/workflows/ES Actions/badge.svg https //github.com/Samsung/escargot/actions/workflows/es actions.yml ! Coverity Scan Build Status https //scan.coverity.com/projects/21647/badge.svg https //scan.coverity.com/projects/samsung escargot ! codecov https //codecov.io/gh/Samsung/escargot/branch/master/graph/badge.svg?token=DX8CN6E7A8 https //codecov.io/gh/Samsung/escargot Escargot is a lightweight JavaScript engine developed by Samsun |


## 주요 파일

### Manifests

- README.md
- third_party/int128/README.md
- third_party/lz4/README.md
- third_party/robin_map/README.md
- third_party/simdutf/README.md
- third_party/xsum/README.md


### Spec / Docs / Prompt Artifacts

- docs/Spec.md


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 472 |
| tools | 172 |
| third_party | 126 |
| .github | 9 |
| packaging | 4 |
| docs | 3 |
| test | 2 |
| .ahub | 1 |
| .clang-format | 1 |
| .gitignore | 1 |
| .gitmodules | 1 |
| CMakeLists.txt | 1 |
| codecov.yml | 1 |
| LICENSE | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .h | 380 |
| .cpp | 187 |
| .xml | 41 |
| .cmd | 39 |
| .expected | 39 |
| .txt | 25 |
| .py | 23 |
| [no-ext] | 19 |
| .md | 12 |
| .cc | 8 |
| .yml | 6 |
| .c | 3 |
| .in | 3 |
| .0 | 2 |
| .conf | 2 |
| .mit | 2 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
