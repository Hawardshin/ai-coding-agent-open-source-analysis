# line/aes-gcm-siv

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/aes-gcm-siv |
| local path | sources/line__aes-gcm-siv |
| HEAD | 3fd1653 |
| stars/forks | 51 / 10 |
| language | C |
| license | Apache-2.0 |
| pushedAt | 2026-05-29T06:16:55Z |
| trendScore / priorityScore | 85 / 196 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 25 | android/README.md, java/README.md, README.md |
| Security / compliance | 19 | lib/README.md, README.md, android/aesgcmsiv/src/androidTest/java/com/linecorp/aesgcmsiv/AESGCMSIVExample.java |
| Frontend / developer experience | 3 | android/README.md |
| LLM wiki / memory / graph | 2 | lib/README.md, CODE_OF_CONDUCT.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | evalObservability, example-rich, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, sdk-api, security-compliance |
| stacks | Java/Kotlin, Swift, C/C++ |
| capabilities | Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 83 |
| manifests | 9 |
| docs | 7 |
| tests | 13 |
| ci/ops | 3 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | AES-GCM-SIV Library |
| headings | AES-GCM-SIV Library / Overview / Table of Contents / Getting started / C / Android / Java / How to contribute / License / Further reading |
| excerpt | AES GCM SIV Library Overview AES GCM SIV is an authenticated encryption algorithm designed to provide nonce misuse resistance, and is specified in RFC 8452 https //www.rfc editor.org/rfc/rfc8452 . This repository provides C, Android, and Java implementations, and is optimized for high performance in architectures with cryptographic hardware accelerators. Table of Contents Getting started getting started How to contribute how to contribute License license Further reading further reading Getting started C The C implementation of AES GCM SIV provides the core functionality of the library, and is located in the lib ./lib repository. It is optimized for high performance encryption and decryption |


## 주요 파일

### Manifests

- android/README.md
- java/README.md
- lib/README.md
- README.md
- android/build.gradle
- java/build.gradle
- android/aesgcmsiv/build.gradle
- java/aesgcmsiv/build.gradle
- Package.swift


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| lib | 36 |
| android | 17 |
| java | 15 |
| .github | 3 |
| jni | 3 |
| .clang-format | 1 |
| .gitignore | 1 |
| CHANGELOG.md | 1 |
| CMakeLists.txt | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |
| Package.swift | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .h | 12 |
| .c | 11 |
| [no-ext] | 10 |
| .txt | 8 |
| .java | 7 |
| .md | 7 |
| .cpp | 6 |
| .gradle | 6 |
| .properties | 4 |
| .yaml | 3 |
| .bat | 2 |
| .cmake | 2 |
| .jar | 2 |
| .pro | 1 |
| .swift | 1 |
| .xml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
