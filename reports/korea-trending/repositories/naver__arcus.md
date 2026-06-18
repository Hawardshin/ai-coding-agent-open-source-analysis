# naver/arcus

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/arcus |
| local path | sources/naver__arcus |
| HEAD | 51e471b |
| stars/forks | 316 / 75 |
| language | Shell |
| license | Apache-2.0 |
| pushedAt | 2026-04-30T04:38:32Z |
| trendScore / priorityScore | 144 / 304 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 22 | README.md, docs/arcus-admin-script-usage.md, docs/arcus-cloud-in-multiple-servers.md |
| AI agent / tool use | 3 | scripts/build.sh, scripts/etc/autorun.sh, scripts/etc/package.sh |
| LLM wiki / memory / graph | 2 | README.md, docs/build-faq.md |
| Security / compliance | 2 | scripts/etc/package.sh |
| Spec / doc-driven workflow | 2 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, context-engineering, korea-signal, llm-wiki-memory, llmFramework, security-compliance, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework |


## 구조 요약

| key | value |
| --- | --- |
| files | 32 |
| manifests | 3 |
| docs | 12 |
| tests | 0 |
| ci/ops | 1 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Requirements: JDK & Ant (java >= 1.8) |
| headings | Supported OS Platform / Quick Start / Requirements: JDK & Ant (java >= 1.8) / Install dependencies (python version 2 that is 2.6 or higher) / Clone & Build / Setup a local cache cloud with conf file. (Should be non-root user) / Test / Documents |
| excerpt | Arcus Cache Cloud ================= Arcus is a memcached memcached based cache cloud developed by NAVER Corp naver . arcus memcached https //github.com/naver/arcus memcached has been heavily modified to support functional and performance requirements of NAVER services. Arcus supports collection data structures List, Set, Map, B+tree for storing/retrieving multiple values as a structured form in addition to the basic Key Value data model of memcached. Arcus manages multiple clusters of memcached nodes using ZooKeeper zookeeper . Each cluster or cloud is identified by its service code. Think of the service code as the cloud's name. The user may add/remove memcached nodes/clouds on the fly. And |


## 주요 파일

### Manifests

- README.md
- docker-compose.yml
- scripts/etc/package.sh


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| scripts | 15 |
| docs | 11 |
| .gitignore | 1 |
| .gitmodules | 1 |
| AUTHORS | 1 |
| docker-compose.yml | 1 |
| LICENSE | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 12 |
| .json | 7 |
| .sh | 6 |
| [no-ext] | 4 |
| .cfg | 1 |
| .py | 1 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
