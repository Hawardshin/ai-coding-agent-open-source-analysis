# naver/arcus-spring

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/arcus-spring |
| local path | sources/naver__arcus-spring |
| HEAD | a736985 |
| stars/forks | 28 / 17 |
| language | Java |
| license | Apache-2.0 |
| pushedAt | 2026-04-10T23:33:49Z |
| trendScore / priorityScore | 77 / 169 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Security / compliance | 22 | src/test/java/com/navercorp/arcus/spring/ApplicationContextLoadTest.java, src/test/java/com/navercorp/arcus/spring/cache/ArcusCacheIntegrationTest.java, src/test/java/com/navercorp/arcus/spring/cache/ArcusCacheManagerTest.java |
| Korean language / Korea domain | 19 | README.md, pom.xml, .github/workflows/ci.yml |
| LLM wiki / memory / graph | 2 | docs/01-arcus-cache-basics.md |
| Infra / observability | 1 | .github/workflows/ci.yml |


## 분류와 스택

| key | value |
| --- | --- |
| categories | graphMemory, infra-observability, korea-signal, llm-wiki-memory, security-compliance |
| stacks | Java/Kotlin |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 47 |
| manifests | 2 |
| docs | 8 |
| tests | 18 |
| ci/ops | 1 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings | arcus-spring / Getting Started / Dependency / KeyGenerator / Configuration / Example / Front Cache / Configuration / DefaultArcusFrontCache / Issues |
| excerpt | arcus spring Arcus as a caching provider for the Spring Cache Abstraction. arcus spring provides following functionalities. ArcusClientFactoryBean Lifecycle management such as creating or deleting an ArcusClient object. ArcusCacheManager AbstractCacheManager implementation of Spring Cache for managing ArcusCache. ArcusCacheConfiguration Configuration class representing properties of ArcusCache ArcusCache Spring Cache implementation for Arcus. StringKeyGenerator, SimpleStringKeyGenerator KeyGenerator implementation of Spring Cache for generating ArcusStringKey. ArcusStringKey Arcus subkey class with hash and string key without prefix. Spring 4.3 cache abstract support. Getting Started Depende |


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
| src | 31 |
| .github | 4 |
| docs | 4 |
| .idea | 2 |
| .gitignore | 1 |
| AUTHORS | 1 |
| ChangeLog | 1 |
| LICENSE | 1 |
| pom.xml | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .java | 25 |
| .md | 8 |
| .xml | 7 |
| [no-ext] | 4 |
| .properties | 2 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
