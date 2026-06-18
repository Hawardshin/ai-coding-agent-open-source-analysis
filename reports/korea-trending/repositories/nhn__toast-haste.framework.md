# nhn/toast-haste.framework

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/nhn/toast-haste.framework |
| local path | sources/nhn__toast-haste.framework |
| HEAD | 934509f |
| stars/forks | 100 / 29 |
| language | Java |
| license | Apache-2.0 |
| pushedAt | 2019-04-01T01:30:01Z |
| trendScore / priorityScore | 73 / 200 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Security / compliance | 202 | README.md, all/pom.xml, framework/pom.xml |
| LLM wiki / memory / graph | 35 | README.md, CONTRIBUTING.md, LICENSE.txt |
| Korean language / Korea domain | 7 | README.md, README_KR.md |
| Spec / doc-driven workflow | 7 | license/LICENSE.junit.txt, license/LICENSE.logback-classic.txt, security/src/main/java/com/nhnent/haste/security/AES.java |


## 분류와 스택

| key | value |
| --- | --- |
| categories | evalObservability, example-rich, graphMemory, korea-signal, llm-wiki-memory, security-compliance, spec-driven |
| stacks | Java/Kotlin |
| capabilities | Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 153 |
| manifests | 13 |
| docs | 5 |
| tests | 22 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings | TOAST Haste framework / Features / Various QoS, and Multiplexing / Cryptography / Wi-Fi Cellular handover / Prerequisites / Versioning / Documetation / Roadmap / Contributing |
| excerpt | ! Logo https //cloud.githubusercontent.com/assets/4951898/21089491/ccdd9672 c07b 11e6 81c2 466374640a25.png =============== TOAST Haste framework TOAST Haste framework is the asynchronous game server framework for easy development. Haste is a spell that boosts the player movement speed and attack speed. ! Englsh https //img.shields.io/badge/Language English lightgrey.svg ! Korean https //img.shields.io/badge/Language Korean blue.svg README KR.md Features Various QoS, and Multiplexing Provide the follow QoS that the real time multiplayer game needs. Reliable Sequenced, Unreliable Sequenced, Reliable Fragmented. Provide the multiplexing that minimizes interferences between domains. Cryptograph |


## 주요 파일

### Manifests

- README.md
- example/pom.xml
- all/pom.xml
- bootstrap/pom.xml
- common/pom.xml
- framework/pom.xml
- objectpool/pom.xml
- pom.xml
- protocol/pom.xml
- security/pom.xml
- transport-tcp/pom.xml
- transport-udp/pom.xml
- transport/pom.xml


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| protocol | 28 |
| transport | 19 |
| bootstrap | 16 |
| security | 16 |
| transport-udp | 16 |
| common | 12 |
| objectpool | 12 |
| framework | 10 |
| license | 7 |
| example | 6 |
| .github | 2 |
| transport-tcp | 2 |
| .gitignore | 1 |
| all | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .java | 126 |
| .xml | 12 |
| .txt | 8 |
| .md | 5 |
| .properties | 1 |
| [no-ext] | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
