# line/rules_apple_line

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/rules_apple_line |
| local path | sources/line__rules_apple_line |
| HEAD | 63f50b2 |
| stars/forks | 209 / 16 |
| language | Starlark |
| license | Apache-2.0 |
| pushedAt | 2023-03-20T22:34:01Z |
| trendScore / priorityScore | 77 / 192 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Security / compliance | 15 | README.md, Makefile, CODE_OF_CONDUCT.md |
| Korean language / Korea domain | 3 | CODE_OF_CONDUCT.md, CONTRIBUTING.md |
| LLM wiki / memory / graph | 1 | CODE_OF_CONDUCT.md |
| Spec / doc-driven workflow | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | example-rich, korea-signal, llm-wiki-memory, security-compliance, spec-driven |
| stacks | Python, Swift, C/C++ |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 108 |
| manifests | 5 |
| docs | 8 |
| tests | 1 |
| ci/ops | 1 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | LINE's Apple rules for Bazel ![](https://github.com/line/bazel_rules_apple/workflows/build/badge.svg) |
| headings | LINE's Apple rules for Bazel ![](https://github.com/line/bazel_rules_apple/workflows/build/badge.svg) / Overview / Build Definitions / Library Rules / Bundling Rules / Other Rules / Requirements / Setup / Examples / License |
| excerpt | LINE's Apple rules for Bazel ! https //github.com/line/bazel rules apple/workflows/build/badge.svg This repository contains additional rules for Bazel that can be used to bundle applications and frameworks for Apple platforms. Overview These are open references of what are used to build the LINE iOS app, which solve some of our specific use cases, for instance, mixed Objective C and Swift modules. They can be used as drop in replacements for the official Apple rules when needed, with the goal of being easy to switch back to the official ones when we longer need them. They may not work with certain revisions of rules apple or rules swift due to their breaking changes. If they don't work out o |


## 주요 파일

### Manifests

- docs/README.md
- examples/ios/App/README.md
- README.md
- tools/plist_merger/README.md
- Makefile


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| examples | 52 |
| apple | 23 |
| third_party | 15 |
| tools | 4 |
| docs | 3 |
| .bazelrc | 1 |
| .bazelversion | 1 |
| .github | 1 |
| .gitignore | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |
| Makefile | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .bzl | 24 |
| [no-ext] | 23 |
| .json | 15 |
| .build | 13 |
| .swift | 10 |
| .md | 6 |
| .plist | 4 |
| .storyboard | 4 |
| .h | 3 |
| .m | 3 |
| .patch | 1 |
| .py | 1 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
