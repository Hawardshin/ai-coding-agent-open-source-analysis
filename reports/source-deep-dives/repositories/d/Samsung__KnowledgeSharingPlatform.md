# Samsung/KnowledgeSharingPlatform Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

K# - Knowledge Sharing Platform

## 요약

- 조사 단위: `sources/Samsung__KnowledgeSharingPlatform` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,789 files, 239 directories, depth score 99, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=sameas/src/src/com/samsung/scrc/wsg/k/index/search/SearchIndex.java, sameas/src/src/com/samsung/scrc/wsg/k/index/core/BasicIndexWriter.java, sameas/src/src/com/samsung/scrc/wsg/k/index/core/Indexer.java이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | Samsung/KnowledgeSharingPlatform |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Java |
| Stars | 187 |
| Forks | 40 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/Samsung__KnowledgeSharingPlatform](../../../../sources/Samsung__KnowledgeSharingPlatform) |
| Existing report | [reports/korea-trending/repositories/Samsung__KnowledgeSharingPlatform.md](../../../korea-trending/repositories/Samsung__KnowledgeSharingPlatform.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1789 / 239 |
| Max observed depth | 12 |
| Top directories | ontology, sameas, schema-matching |
| Top extensions | .java: 1595, .txt: 45, .class: 31, .zip: 15, .jar: 12, .properties: 11, .csv: 9, .jflex: 8, .py: 7, .pem: 5, .dtd: 3, .jflex-macro: 3 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| ontology | top-level component | 1 |
| sameas | top-level component | 1 |
| schema-matching | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 37 | [sameas/src/bin/Entrypoint.class](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/bin/Entrypoint.class)<br>[sameas/src/bin/META-INF/services/org.apache.lucene.analysis.util.CharFilterFactory](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/bin/META-INF/services/org.apache.lucene.analysis.util.CharFilterFactory)<br>[sameas/src/bin/META-INF/services/org.apache.lucene.analysis.util.TokenFilterFactory](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/bin/META-INF/services/org.apache.lucene.analysis.util.TokenFilterFactory)<br>[sameas/src/bin/META-INF/services/org.apache.lucene.analysis.util.TokenizerFactory](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/bin/META-INF/services/org.apache.lucene.analysis.util.TokenizerFactory)<br>[sameas/src/bin/META-INF/services/org.apache.lucene.codecs.Codec](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/bin/META-INF/services/org.apache.lucene.codecs.Codec)<br>[sameas/src/bin/META-INF/services/org.apache.lucene.codecs.DocValuesFormat](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/bin/META-INF/services/org.apache.lucene.codecs.DocValuesFormat)<br>[sameas/src/bin/META-INF/services/org.apache.lucene.codecs.PostingsFormat](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/bin/META-INF/services/org.apache.lucene.codecs.PostingsFormat)<br>[sameas/src/bin/com/samsung/scrc/wsg/k/var/GlobalParameters.class](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/bin/com/samsung/scrc/wsg/k/var/GlobalParameters.class) |
| agentRuntime | 2 | [sameas/src/src/com/samsung/scrc/wsg/k/util/Tools.java](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/src/com/samsung/scrc/wsg/k/util/Tools.java)<br>[sameas/src/bin/com/samsung/scrc/wsg/k/util/Tools.class](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/bin/com/samsung/scrc/wsg/k/util/Tools.class) |
| mcp | 0 | not obvious |
| retrieval | 163 | [sameas/src/src/com/samsung/scrc/wsg/k/index/search/SearchIndex.java](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/src/com/samsung/scrc/wsg/k/index/search/SearchIndex.java)<br>[sameas/src/src/com/samsung/scrc/wsg/k/index/core/BasicIndexWriter.java](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/src/com/samsung/scrc/wsg/k/index/core/BasicIndexWriter.java)<br>[sameas/src/src/com/samsung/scrc/wsg/k/index/core/Indexer.java](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/src/com/samsung/scrc/wsg/k/index/core/Indexer.java)<br>[sameas/src/bin/com/samsung/scrc/wsg/k/index/search/SearchIndex.class](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/bin/com/samsung/scrc/wsg/k/index/search/SearchIndex.class)<br>[sameas/src/bin/com/samsung/scrc/wsg/k/index/core/BasicIndexWriter.class](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/bin/com/samsung/scrc/wsg/k/index/core/BasicIndexWriter.class)<br>[sameas/src/bin/com/samsung/scrc/wsg/k/index/core/Indexer.class](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/bin/com/samsung/scrc/wsg/k/index/core/Indexer.class)<br>[sameas/lib/lucene-misc-5.0.0/org/apache/lucene/index/IndexSplitter.java](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/lib/lucene-misc-5.0.0/org/apache/lucene/index/IndexSplitter.java)<br>[sameas/lib/lucene-misc-5.0.0/org/apache/lucene/index/MergeReaderWrapper.java](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/lib/lucene-misc-5.0.0/org/apache/lucene/index/MergeReaderWrapper.java) |
| spec | 0 | not obvious |
| eval | 9 | [schema-matching/alignment-evaluation.csv](../../../../sources/Samsung__KnowledgeSharingPlatform/schema-matching/alignment-evaluation.csv)<br>[sameas/src/src/com/samsung/scrc/wsg/k/eval/Evaluation.java](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/src/com/samsung/scrc/wsg/k/eval/Evaluation.java)<br>[sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/ca-cert.pem](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/ca-cert.pem)<br>[sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/ca-key.pem](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/ca-key.pem)<br>[sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/server-cert.pem](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/server-cert.pem)<br>[sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/server-key.pem](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/server-key.pem)<br>[sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/server-req.pem](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/server-req.pem)<br>[sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/test-cert-store](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/test-cert-store) |
| security | 1 | [sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/com/mysql/jdbc/Security.java](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/com/mysql/jdbc/Security.java) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 7 | [README.md](../../../../sources/Samsung__KnowledgeSharingPlatform/README.md)<br>[sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/README](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/README)<br>[sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/README.txt](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/README.txt)<br>[sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/doc/sources/connPropsToDocbook.xsl](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/doc/sources/connPropsToDocbook.xsl)<br>[sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/doc/sources/errorMapToDocbook.xsl](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/doc/sources/errorMapToDocbook.xsl)<br>[sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/doc/sources/placeholder.txt](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/doc/sources/placeholder.txt)<br>[sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/doc/sources/pom.xml](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/doc/sources/pom.xml) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 9 | [schema-matching/alignment-evaluation.csv](../../../../sources/Samsung__KnowledgeSharingPlatform/schema-matching/alignment-evaluation.csv)<br>[sameas/src/src/com/samsung/scrc/wsg/k/eval/Evaluation.java](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/src/com/samsung/scrc/wsg/k/eval/Evaluation.java)<br>[sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/ca-cert.pem](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/ca-cert.pem)<br>[sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/ca-key.pem](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/ca-key.pem)<br>[sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/server-cert.pem](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/server-cert.pem)<br>[sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/server-key.pem](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/server-key.pem) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/com/mysql/jdbc/Security.java](../../../../sources/Samsung__KnowledgeSharingPlatform/sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/com/mysql/jdbc/Security.java) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `sameas/src/src/com/samsung/scrc/wsg/k/index/search/SearchIndex.java`, `sameas/src/src/com/samsung/scrc/wsg/k/index/core/BasicIndexWriter.java`, `sameas/src/src/com/samsung/scrc/wsg/k/index/core/Indexer.java`.
2. Trace execution through entrypoints: `sameas/src/bin/Entrypoint.class`, `sameas/src/bin/META-INF/services/org.apache.lucene.analysis.util.CharFilterFactory`, `sameas/src/bin/META-INF/services/org.apache.lucene.analysis.util.TokenFilterFactory`.
3. Map agent/tool runtime through: `sameas/src/src/com/samsung/scrc/wsg/k/util/Tools.java`, `sameas/src/bin/com/samsung/scrc/wsg/k/util/Tools.class`.
4. Inspect retrieval/memory/indexing through: `sameas/src/src/com/samsung/scrc/wsg/k/index/search/SearchIndex.java`, `sameas/src/src/com/samsung/scrc/wsg/k/index/core/BasicIndexWriter.java`, `sameas/src/src/com/samsung/scrc/wsg/k/index/core/Indexer.java`.
5. Verify behavior through test/eval files: `schema-matching/alignment-evaluation.csv`, `sameas/src/src/com/samsung/scrc/wsg/k/eval/Evaluation.java`, `sameas/src/lib/rdb/mysql-connector-java-5.1.24-sources/testsuite/ssl-test-certs/ca-cert.pem`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 K Knowledge Sharing Platform. 핵심 구조 신호는 Java, README.md, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
