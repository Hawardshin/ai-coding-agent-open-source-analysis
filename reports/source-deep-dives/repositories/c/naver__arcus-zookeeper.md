# naver/arcus-zookeeper Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

ZooKeeper fork for ARCUS

## 요약

- 조사 단위: `sources/naver__arcus-zookeeper` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,208 files, 282 directories, depth score 117, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=zookeeper-client/zookeeper-client-c/src/cli.c, bin/README.txt, bin/zkCleanup.sh이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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


## Repository Context

| Field | Value |
| --- | --- |
| Repository | naver/arcus-zookeeper |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Java |
| Stars | 7 |
| Forks | 12 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver__arcus-zookeeper](../../../../sources/naver__arcus-zookeeper) |
| Existing report | [reports/korea-trending/repositories/naver__arcus-zookeeper.md](../../../korea-trending/repositories/naver__arcus-zookeeper.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1208 / 282 |
| Max observed depth | 12 |
| Top directories | bin, conf, dev, zookeeper-assembly, zookeeper-client, zookeeper-contrib, zookeeper-docs, zookeeper-it, zookeeper-jute, zookeeper-recipes, zookeeper-server |
| Top extensions | .java: 697, .png: 58, .txt: 48, .xml: 48, .h: 39, .cc: 34, .py: 34, (none): 32, .sh: 22, .js: 21, .md: 19, .c: 15 |
| Source patterns | cli-first, api/server, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| bin | top-level component | 1 |
| conf | top-level component | 1 |
| dev | top-level component | 1 |
| zookeeper-assembly | top-level component | 1 |
| zookeeper-client | source boundary | 1 |
| zookeeper-contrib | top-level component | 1 |
| zookeeper-docs | documentation surface | 1 |
| zookeeper-it | top-level component | 1 |
| zookeeper-jute | top-level component | 1 |
| zookeeper-recipes | ci surface | 1 |
| zookeeper-server | source boundary | 1 |


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
| entrypoints | [zookeeper-client/zookeeper-client-c/src/cli.c](../../../../sources/naver__arcus-zookeeper/zookeeper-client/zookeeper-client-c/src/cli.c) | entrypoints signal |
| entrypoints | [bin/README.txt](../../../../sources/naver__arcus-zookeeper/bin/README.txt) | entrypoints signal |
| entrypoints | [bin/zkCleanup.sh](../../../../sources/naver__arcus-zookeeper/bin/zkCleanup.sh) | entrypoints signal |
| entrypoints | [bin/zkCli.cmd](../../../../sources/naver__arcus-zookeeper/bin/zkCli.cmd) | entrypoints signal |
| config | [zookeeper-contrib/zookeeper-contrib-huebrowser/zkui/Makefile](../../../../sources/naver__arcus-zookeeper/zookeeper-contrib/zookeeper-contrib-huebrowser/zkui/Makefile) | config signal |
| docs | [README_packaging.txt](../../../../sources/naver__arcus-zookeeper/README_packaging.txt) | docs signal |
| docs | [README-ZK.md](../../../../sources/naver__arcus-zookeeper/README-ZK.md) | docs signal |
| docs | [README.md](../../../../sources/naver__arcus-zookeeper/README.md) | docs signal |
| docs | [zookeeper-server/src/test/resources/data/ssl/README.md](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/resources/data/ssl/README.md) | docs signal |
| eval | [zookeeper-server/src/test/resources/check_compatibility.py](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/resources/check_compatibility.py) | eval signal |
| eval | [zookeeper-server/src/test/resources/checkstyle-noframes-sorted.xsl](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/resources/checkstyle-noframes-sorted.xsl) | eval signal |
| eval | [zookeeper-server/src/test/resources/checkstyle.xml](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/resources/checkstyle.xml) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 12 | [zookeeper-client/zookeeper-client-c/src/cli.c](../../../../sources/naver__arcus-zookeeper/zookeeper-client/zookeeper-client-c/src/cli.c)<br>[bin/README.txt](../../../../sources/naver__arcus-zookeeper/bin/README.txt)<br>[bin/zkCleanup.sh](../../../../sources/naver__arcus-zookeeper/bin/zkCleanup.sh)<br>[bin/zkCli.cmd](../../../../sources/naver__arcus-zookeeper/bin/zkCli.cmd)<br>[bin/zkCli.sh](../../../../sources/naver__arcus-zookeeper/bin/zkCli.sh)<br>[bin/zkEnv.cmd](../../../../sources/naver__arcus-zookeeper/bin/zkEnv.cmd)<br>[bin/zkEnv.sh](../../../../sources/naver__arcus-zookeeper/bin/zkEnv.sh)<br>[bin/zkServer-initialize.sh](../../../../sources/naver__arcus-zookeeper/bin/zkServer-initialize.sh) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 58 | [zookeeper-jute/src/main/java/org/apache/jute/Index.java](../../../../sources/naver__arcus-zookeeper/zookeeper-jute/src/main/java/org/apache/jute/Index.java)<br>[zookeeper-docs/src/main/resources/markdown/index.md](../../../../sources/naver__arcus-zookeeper/zookeeper-docs/src/main/resources/markdown/index.md)<br>[zookeeper-contrib/zookeeper-contrib-loggraph/src/main/resources/webapp/org/apache/zookeeper/graph/log4j.properties](../../../../sources/naver__arcus-zookeeper/zookeeper-contrib/zookeeper-contrib-loggraph/src/main/resources/webapp/org/apache/zookeeper/graph/log4j.properties)<br>[zookeeper-contrib/zookeeper-contrib-loggraph/src/main/resources/webapp/org/apache/zookeeper/graph/resources/date.format.js](../../../../sources/naver__arcus-zookeeper/zookeeper-contrib/zookeeper-contrib-loggraph/src/main/resources/webapp/org/apache/zookeeper/graph/resources/date.format.js)<br>[zookeeper-contrib/zookeeper-contrib-loggraph/src/main/resources/webapp/org/apache/zookeeper/graph/resources/g.bar.js](../../../../sources/naver__arcus-zookeeper/zookeeper-contrib/zookeeper-contrib-loggraph/src/main/resources/webapp/org/apache/zookeeper/graph/resources/g.bar.js)<br>[zookeeper-contrib/zookeeper-contrib-loggraph/src/main/resources/webapp/org/apache/zookeeper/graph/resources/g.dot.js](../../../../sources/naver__arcus-zookeeper/zookeeper-contrib/zookeeper-contrib-loggraph/src/main/resources/webapp/org/apache/zookeeper/graph/resources/g.dot.js)<br>[zookeeper-contrib/zookeeper-contrib-loggraph/src/main/resources/webapp/org/apache/zookeeper/graph/resources/g.line.js](../../../../sources/naver__arcus-zookeeper/zookeeper-contrib/zookeeper-contrib-loggraph/src/main/resources/webapp/org/apache/zookeeper/graph/resources/g.line.js)<br>[zookeeper-contrib/zookeeper-contrib-loggraph/src/main/resources/webapp/org/apache/zookeeper/graph/resources/g.pie.js](../../../../sources/naver__arcus-zookeeper/zookeeper-contrib/zookeeper-contrib-loggraph/src/main/resources/webapp/org/apache/zookeeper/graph/resources/g.pie.js) |
| spec | 1 | [zookeeper-contrib/zookeeper-contrib-rest/SPEC.txt](../../../../sources/naver__arcus-zookeeper/zookeeper-contrib/zookeeper-contrib-rest/SPEC.txt) |
| eval | 393 | [zookeeper-server/src/test/resources/check_compatibility.py](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/resources/check_compatibility.py)<br>[zookeeper-server/src/test/resources/checkstyle-noframes-sorted.xsl](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/resources/checkstyle-noframes-sorted.xsl)<br>[zookeeper-server/src/test/resources/checkstyle.xml](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/resources/checkstyle.xml)<br>[zookeeper-server/src/test/resources/findbugsExcludeFile.xml](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/resources/findbugsExcludeFile.xml)<br>[zookeeper-server/src/test/resources/log4j.properties](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/resources/log4j.properties)<br>[zookeeper-server/src/test/resources/test-github-pr.sh](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/resources/test-github-pr.sh)<br>[zookeeper-server/src/test/resources/test-patch.properties](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/resources/test-patch.properties)<br>[zookeeper-server/src/test/resources/test-patch.sh](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/resources/test-patch.sh) |
| security | 27 | [zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/KerberosSecurityTestcase.java](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/KerberosSecurityTestcase.java)<br>[zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/KerberosTestUtils.java](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/KerberosTestUtils.java)<br>[zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/MiniKdc.java](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/MiniKdc.java)<br>[zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/MiniKdcTest.java](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/MiniKdcTest.java)<br>[zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/QuorumAuthTestBase.java](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/QuorumAuthTestBase.java)<br>[zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/QuorumAuthUpgradeTest.java](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/QuorumAuthUpgradeTest.java)<br>[zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/QuorumDigestAuthTest.java](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/QuorumDigestAuthTest.java)<br>[zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/QuorumKerberosAuthTest.java](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/QuorumKerberosAuthTest.java) |
| ci | 3 | [Jenkinsfile](../../../../sources/naver__arcus-zookeeper/Jenkinsfile)<br>[Jenkinsfile-owasp](../../../../sources/naver__arcus-zookeeper/Jenkinsfile-owasp)<br>[Jenkinsfile-PreCommit](../../../../sources/naver__arcus-zookeeper/Jenkinsfile-PreCommit) |
| container | 1 | [dev/docker/Dockerfile](../../../../sources/naver__arcus-zookeeper/dev/docker/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 30 | [README_packaging.txt](../../../../sources/naver__arcus-zookeeper/README_packaging.txt)<br>[README-ZK.md](../../../../sources/naver__arcus-zookeeper/README-ZK.md)<br>[README.md](../../../../sources/naver__arcus-zookeeper/README.md)<br>[zookeeper-server/src/test/resources/data/ssl/README.md](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/resources/data/ssl/README.md)<br>[zookeeper-server/src/main/resources/lib/cobertura/README.txt](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/main/resources/lib/cobertura/README.txt)<br>[zookeeper-recipes/README.txt](../../../../sources/naver__arcus-zookeeper/zookeeper-recipes/README.txt)<br>[zookeeper-recipes/zookeeper-recipes-queue/README.txt](../../../../sources/naver__arcus-zookeeper/zookeeper-recipes/zookeeper-recipes-queue/README.txt)<br>[zookeeper-recipes/zookeeper-recipes-queue/src/main/c/README.txt](../../../../sources/naver__arcus-zookeeper/zookeeper-recipes/zookeeper-recipes-queue/src/main/c/README.txt) |
| config | 1 | [zookeeper-contrib/zookeeper-contrib-huebrowser/zkui/Makefile](../../../../sources/naver__arcus-zookeeper/zookeeper-contrib/zookeeper-contrib-huebrowser/zkui/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 393 | [zookeeper-server/src/test/resources/check_compatibility.py](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/resources/check_compatibility.py)<br>[zookeeper-server/src/test/resources/checkstyle-noframes-sorted.xsl](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/resources/checkstyle-noframes-sorted.xsl)<br>[zookeeper-server/src/test/resources/checkstyle.xml](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/resources/checkstyle.xml)<br>[zookeeper-server/src/test/resources/findbugsExcludeFile.xml](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/resources/findbugsExcludeFile.xml)<br>[zookeeper-server/src/test/resources/log4j.properties](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/resources/log4j.properties)<br>[zookeeper-server/src/test/resources/test-github-pr.sh](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/resources/test-github-pr.sh) |
| CI workflows | 3 | [Jenkinsfile](../../../../sources/naver__arcus-zookeeper/Jenkinsfile)<br>[Jenkinsfile-owasp](../../../../sources/naver__arcus-zookeeper/Jenkinsfile-owasp)<br>[Jenkinsfile-PreCommit](../../../../sources/naver__arcus-zookeeper/Jenkinsfile-PreCommit) |
| Containers / deploy | 1 | [dev/docker/Dockerfile](../../../../sources/naver__arcus-zookeeper/dev/docker/Dockerfile) |
| Security / policy | 27 | [zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/KerberosSecurityTestcase.java](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/KerberosSecurityTestcase.java)<br>[zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/KerberosTestUtils.java](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/KerberosTestUtils.java)<br>[zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/MiniKdc.java](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/MiniKdc.java)<br>[zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/MiniKdcTest.java](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/MiniKdcTest.java)<br>[zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/QuorumAuthTestBase.java](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/QuorumAuthTestBase.java)<br>[zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/QuorumAuthUpgradeTest.java](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/QuorumAuthUpgradeTest.java) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `zookeeper-client/zookeeper-client-c/src/cli.c`, `bin/README.txt`, `bin/zkCleanup.sh`.
2. Trace execution through entrypoints: `zookeeper-client/zookeeper-client-c/src/cli.c`, `bin/README.txt`, `bin/zkCleanup.sh`.
3. Inspect retrieval/memory/indexing through: `zookeeper-jute/src/main/java/org/apache/jute/Index.java`, `zookeeper-docs/src/main/resources/markdown/index.md`, `zookeeper-contrib/zookeeper-contrib-loggraph/src/main/resources/webapp/org/apache/zookeeper/graph/log4j.properties`.
4. Verify behavior through test/eval files: `zookeeper-server/src/test/resources/check_compatibility.py`, `zookeeper-server/src/test/resources/checkstyle-noframes-sorted.xsl`, `zookeeper-server/src/test/resources/checkstyle.xml`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 ZooKeeper fork for ARCUS. 핵심 구조 신호는 Java, pom.xml, README.md, ci, docs, spec-artifacts이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
