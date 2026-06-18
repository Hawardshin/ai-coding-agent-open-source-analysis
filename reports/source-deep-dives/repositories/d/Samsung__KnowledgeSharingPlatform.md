# Samsung/KnowledgeSharingPlatform 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

K# - Knowledge Sharing Platform

## 요약

- 조사 단위: `sources/Samsung__KnowledgeSharingPlatform` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,789 files, 239 directories, depth score 93, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=sameas/src/src/com/samsung/scrc/wsg/k/index/search/SearchIndex.java, sameas/src/src/com/samsung/scrc/wsg/k/index/core/BasicIndexWriter.java, sameas/src/src/com/samsung/scrc/wsg/k/index/core/Indexer.java이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | Samsung/KnowledgeSharingPlatform |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Java |
| Stars | 187 |
| Forks | 40 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Samsung__KnowledgeSharingPlatform](../../../../sources/Samsung__KnowledgeSharingPlatform) |
| 기존 보고서 | [reports/korea-trending/repositories/Samsung__KnowledgeSharingPlatform.md](../../../korea-trending/repositories/Samsung__KnowledgeSharingPlatform.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1789 / 239 |
| 관측 최대 깊이 | 12 |
| 상위 디렉터리 | ontology, sameas, schema-matching |
| 상위 확장자 | .java: 1595, .txt: 45, .class: 31, .zip: 15, .jar: 12, .properties: 11, .csv: 9, .jflex: 8, .py: 7, .pem: 5, .dtd: 3, .jflex-macro: 3 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| ontology | top-level component | 1 |
| sameas | top-level component | 1 |
| schema-matching | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [sameas/src/src/com/samsung/scrc/wsg/k/index/search/SearchIndex.java](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/src/com/samsung/scrc/wsg/k/index/search/SearchIndex.java) | retrieval signal |
| retrieval | [sameas/src/src/com/samsung/scrc/wsg/k/index/core/BasicIndexWriter.java](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/src/com/samsung/scrc/wsg/k/index/core/BasicIndexWriter.java) | retrieval signal |
| retrieval | [sameas/src/src/com/samsung/scrc/wsg/k/index/core/Indexer.java](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/src/com/samsung/scrc/wsg/k/index/core/Indexer.java) | retrieval signal |
| retrieval | [sameas/src/bin/com/samsung/scrc/wsg/k/index/search/SearchIndex.class](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/bin/com/samsung/scrc/wsg/k/index/search/SearchIndex.class) | retrieval signal |
| entrypoints | [sameas/src/bin/Entrypoint.class](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/bin/Entrypoint.class) | entrypoints signal |
| entrypoints | [sameas/src/bin/META-INF/services/org.apache.lucene.analysis.util.CharFilterFactory](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/bin/META-INF/services/org.apache.lucene.analysis.util.CharFilterFactory) | entrypoints signal |
| entrypoints | [sameas/src/bin/META-INF/services/org.apache.lucene.analysis.util.TokenFilterFactory](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/bin/META-INF/services/org.apache.lucene.analysis.util.TokenFilterFactory) | entrypoints signal |
| entrypoints | [sameas/src/bin/META-INF/services/org.apache.lucene.analysis.util.TokenizerFactory](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/bin/META-INF/services/org.apache.lucene.analysis.util.TokenizerFactory) | entrypoints signal |
| docs | [README.md](../../../../sources/Samsung__KnowledgeSharingPlatform/README.md) | docs signal |
| docs | [sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/README](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/README) | docs signal |
| docs | [sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/README.txt](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/README.txt) | docs signal |
| docs | [sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/doc/sources/connPropsToDocbook.xsl](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/doc/sources/connPropsToDocbook.xsl) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 37 | [sameas/src/bin/Entrypoint.class](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/bin/Entrypoint.class)<br>[sameas/src/bin/META-INF/services/org.apache.lucene.analysis.util.CharFilterFactory](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/bin/META-INF/services/org.apache.lucene.analysis.util.CharFilterFactory)<br>[sameas/src/bin/META-INF/services/org.apache.lucene.analysis.util.TokenFilterFactory](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/bin/META-INF/services/org.apache.lucene.analysis.util.TokenFilterFactory)<br>[sameas/src/bin/META-INF/services/org.apache.lucene.analysis.util.TokenizerFactory](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/bin/META-INF/services/org.apache.lucene.analysis.util.TokenizerFactory)<br>[sameas/src/bin/META-INF/services/org.apache.lucene.codecs.Codec](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/bin/META-INF/services/org.apache.lucene.codecs.Codec)<br>[sameas/src/bin/META-INF/services/org.apache.lucene.codecs.DocValuesFormat](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/bin/META-INF/services/org.apache.lucene.codecs.DocValuesFormat)<br>[sameas/src/bin/META-INF/services/org.apache.lucene.codecs.PostingsFormat](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/bin/META-INF/services/org.apache.lucene.codecs.PostingsFormat)<br>[sameas/src/bin/com/samsung/scrc/wsg/k/var/GlobalParameters.class](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/bin/com/samsung/scrc/wsg/k/var/GlobalParameters.class) |
| agentRuntime | 2 | [sameas/src/src/com/samsung/scrc/wsg/k/util/Tools.java](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/src/com/samsung/scrc/wsg/k/util/Tools.java)<br>[sameas/src/bin/com/samsung/scrc/wsg/k/util/Tools.class](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/bin/com/samsung/scrc/wsg/k/util/Tools.class) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 163 | [sameas/src/src/com/samsung/scrc/wsg/k/index/search/SearchIndex.java](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/src/com/samsung/scrc/wsg/k/index/search/SearchIndex.java)<br>[sameas/src/src/com/samsung/scrc/wsg/k/index/core/BasicIndexWriter.java](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/src/com/samsung/scrc/wsg/k/index/core/BasicIndexWriter.java)<br>[sameas/src/src/com/samsung/scrc/wsg/k/index/core/Indexer.java](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/src/com/samsung/scrc/wsg/k/index/core/Indexer.java)<br>[sameas/src/bin/com/samsung/scrc/wsg/k/index/search/SearchIndex.class](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/bin/com/samsung/scrc/wsg/k/index/search/SearchIndex.class)<br>[sameas/src/bin/com/samsung/scrc/wsg/k/index/core/BasicIndexWriter.class](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/bin/com/samsung/scrc/wsg/k/index/core/BasicIndexWriter.class)<br>[sameas/src/bin/com/samsung/scrc/wsg/k/index/core/Indexer.class](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/bin/com/samsung/scrc/wsg/k/index/core/Indexer.class)<br>[sameas/lib/lucene-misc-5.0.0/org/apache/lucene/index/IndexSplitter.java](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/lib/lucene-misc-5.0.0/org/apache/lucene/index/IndexSplitter.java)<br>[sameas/lib/lucene-misc-5.0.0/org/apache/lucene/index/MergeReaderWrapper.java](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/lib/lucene-misc-5.0.0/org/apache/lucene/index/MergeReaderWrapper.java) |
| spec | 0 | 명확하지 않음 |
| eval | 9 | [schema-matching/alignment-evaluation.csv](../../../../sources/Samsung__KnowledgeSharingPlatform/schema-matching/alignment-evaluation.csv)<br>[sameas/src/src/com/samsung/scrc/wsg/k/eval/Evaluation.java](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/src/com/samsung/scrc/wsg/k/eval/Evaluation.java)<br>[sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/ca-cert.pem](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/ca-cert.pem)<br>[sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/ca-key.pem](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/ca-key.pem)<br>[sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/server-cert.pem](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/server-cert.pem)<br>[sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/server-key.pem](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/server-key.pem)<br>[sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/server-req.pem](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/server-req.pem)<br>[sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/test-cert-store](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/test-cert-store) |
| security | 1 | [sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/com/mysql/jdbc/Security.java](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/com/mysql/jdbc/Security.java) |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 7 | [README.md](../../../../sources/Samsung__KnowledgeSharingPlatform/README.md)<br>[sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/README](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/README)<br>[sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/README.txt](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/README.txt)<br>[sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/doc/sources/connPropsToDocbook.xsl](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/doc/sources/connPropsToDocbook.xsl)<br>[sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/doc/sources/errorMapToDocbook.xsl](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/doc/sources/errorMapToDocbook.xsl)<br>[sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/doc/sources/placeholder.txt](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/doc/sources/placeholder.txt)<br>[sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/doc/sources/pom.xml](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/doc/sources/pom.xml) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 9 | [schema-matching/alignment-evaluation.csv](../../../../sources/Samsung__KnowledgeSharingPlatform/schema-matching/alignment-evaluation.csv)<br>[sameas/src/src/com/samsung/scrc/wsg/k/eval/Evaluation.java](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/src/com/samsung/scrc/wsg/k/eval/Evaluation.java)<br>[sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/ca-cert.pem](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/ca-cert.pem)<br>[sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/ca-key.pem](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/ca-key.pem)<br>[sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/server-cert.pem](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/server-cert.pem)<br>[sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/server-key.pem](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/server-key.pem) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/com/mysql/jdbc/Security.java](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/com/mysql/jdbc/Security.java) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `sameas/src/src/com/samsung/scrc/wsg/k/index/search/SearchIndex.java`, `sameas/src/src/com/samsung/scrc/wsg/k/index/core/BasicIndexWriter.java`, `sameas/src/src/com/samsung/scrc/wsg/k/index/core/Indexer.java`.
2. entrypoint를 따라 실행 흐름 확인: `sameas/src/bin/Entrypoint.class`, `sameas/src/bin/META-INF/services/org.apache.lucene.analysis.util.CharFilterFactory`, `sameas/src/bin/META-INF/services/org.apache.lucene.analysis.util.TokenFilterFactory`.
3. agent/tool runtime 매핑: `sameas/src/src/com/samsung/scrc/wsg/k/util/Tools.java`, `sameas/src/bin/com/samsung/scrc/wsg/k/util/Tools.class`.
4. retrieval/memory/indexing 확인: `sameas/src/src/com/samsung/scrc/wsg/k/index/search/SearchIndex.java`, `sameas/src/src/com/samsung/scrc/wsg/k/index/core/BasicIndexWriter.java`, `sameas/src/src/com/samsung/scrc/wsg/k/index/core/Indexer.java`.
5. test/eval 파일로 동작 검증: `schema-matching/alignment-evaluation.csv`, `sameas/src/src/com/samsung/scrc/wsg/k/eval/Evaluation.java`, `sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/ca-cert.pem`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 K Knowledge Sharing Platform. 핵심 구조 신호는 Java, README.md, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
