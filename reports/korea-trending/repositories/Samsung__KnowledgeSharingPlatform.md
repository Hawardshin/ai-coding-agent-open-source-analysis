# Samsung/KnowledgeSharingPlatform

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/KnowledgeSharingPlatform |
| local path | sources/Samsung__KnowledgeSharingPlatform |
| HEAD | 14ca0c2 |
| stars/forks | 187 / 40 |
| language | Java |
| license |  |
| pushedAt | 2020-10-01T06:28:28Z |
| trendScore / priorityScore | 79 / 218 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Security / compliance | 102 | sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/README.txt, sameas/lib/lucene-analyzers-common-5.0.0/org/apache/lucene/analysis/compound/hyphenation/ByteVector.java, sameas/lib/lucene-analyzers-common-5.0.0/org/apache/lucene/analysis/compound/hyphenation/CharVector.java |
| LLM wiki / memory / graph | 59 | README.md, sameas/lib/lucene-analyzers-common-5.0.0/org/apache/lucene/analysis/compound/hyphenation/ByteVector.java, sameas/lib/lucene-analyzers-common-5.0.0/org/apache/lucene/analysis/wikipedia/WikipediaTokenizer.java |
| RAG / retrieval | 37 | README.md, sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/perf/RetrievalPerfTest.java, sameas/lib/lucene-core-5.0.0/org/apache/lucene/codecs/compressing/CompressingTermVectorsFormat.java |
| Spec / doc-driven workflow | 17 | sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/doc/sources/pom.xml, sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/README.txt, sameas/NOTICE.txt |
| Korean language / Korea domain | 14 | sameas/src/src/com/samsung/scrc/wsg/k/eval/Evaluation.java, sameas/src/src/com/samsung/scrc/wsg/k/sa/matcher/FullMatcher.java |


## 분류와 스택

| key | value |
| --- | --- |
| categories | context-engineering, evalObservability, graphMemory, korea-signal, llm-wiki-memory, rag, security-compliance, spec-driven |
| stacks | Python, Java/Kotlin, C/C++ |
| capabilities | Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 1770 |
| manifests | 3 |
| docs | 5 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings |  |
| excerpt | Knowledge Sharing Platform The Knowledge Sharing Platform K is a platform that aims to develop a sophisticated enterprise knowledge graph using a wide variety of large scale data sources. To realise this platform, we are developing a set of components for collecting, extracting, transforming, integrating, and updating knowledge sources. We have constructed the base knowledge by integrating several linked & open data sources such as Freebase, Wikidata, GeoNames, etc. A set of enterprise data is transformed into a graph base knowledge base, and then this knowledge is interlinked to the base knowledge. Currently, the base knowledge has approximately 4.5 billion entities and 20 billion facts for |


## 주요 파일

### Manifests

- README.md
- sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/doc/sources/pom.xml
- sameas/lib/lucene-core-5.0.0/org/apache/lucene/util/automaton/package.html


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| sameas | 1751 |
| schema-matching | 12 |
| ontology | 6 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .java | 1595 |
| .txt | 45 |
| .class | 31 |
| .jar | 12 |
| .properties | 11 |
| .csv | 9 |
| .jflex | 8 |
| .py | 7 |
| .pem | 5 |
| .dtd | 3 |
| .jflex-macro | 3 |
| .jj | 3 |
| .svg | 3 |
| .xls | 3 |
| .xlsx | 3 |
| [no-ext] | 3 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
