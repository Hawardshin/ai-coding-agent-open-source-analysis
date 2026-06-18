# Samsung/MeziLang

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/MeziLang |
| local path | sources/Samsung__MeziLang |
| HEAD | 89a1a86 |
| stars/forks | 11 / 6 |
| language | Java |
| license | Apache-2.0 |
| pushedAt | 2026-04-12T06:16:14Z |
| trendScore / priorityScore | 67 / 153 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Spec / doc-driven workflow | 6 | BUILD.md, CONTRIBUTING.md, DCO.md |
| LLM wiki / memory / graph | 3 | CONTRIBUTING.md, src/main/java/mezic/compiler/ASTTraverseVisitor.java, src/main/java/mezic/compiler/Container.java |
| Korean language / Korea domain | 2 | README.md |
| Security / compliance | 1 | CONTRIBUTING.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | example-rich, graphMemory, korea-signal, llm-wiki-memory, security-compliance, spec-driven |
| stacks | Java/Kotlin |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 154 |
| manifests | 2 |
| docs | 5 |
| tests | 30 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | The Mezi Programming Language |
| headings | The Mezi Programming Language / Getting Started / Build Notes / Example Mezi code / Contributing / License |
| excerpt | The Mezi Programming Language Mezi is an general purpose open source programming language. This programming language is an non java JVM language. The source code written in the Mezi is compiled to JVM byte code. Mezi is interested in the followings. 1. Expression oriented grammar 2. Type generalization, and type inference 3. Identifying definition and assignment 4. Thread serialization & live migration Future Plan Getting Started Building Mezi compiler & Helloworld example BUILD.md Build Notes The project can be built with a modern JDK and Maven. mvn compile automatically runs JJTree and JavaCC for src/main/java/mezic/parser/Parser.jjt , assuming the jjtree and javacc tools are installed On |


## 주요 파일

### Manifests

- README.md
- pom.xml


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 112 |
| code_base | 32 |
| .classpath | 1 |
| .gitignore | 1 |
| .project | 1 |
| BUILD.md | 1 |
| CONTRIBUTING.md | 1 |
| DCO.md | 1 |
| GOVERNANCE.md | 1 |
| LICENSE | 1 |
| pom.xml | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .java | 108 |
| .mz | 32 |
| .md | 5 |
| [no-ext] | 4 |
| .txt | 2 |
| .jjt | 1 |
| .properties | 1 |
| .xml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
