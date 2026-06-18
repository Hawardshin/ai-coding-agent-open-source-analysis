# naver/arcus-zookeeper 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

ZooKeeper fork for ARCUS

## 요약

- 조사 단위: `sources/naver__arcus-zookeeper` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,208 files, 282 directories, depth score 111, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=zookeeper-client/zookeeper-client-c/src/cli.c, bin/README.txt, bin/zkCleanup.sh이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/arcus-zookeeper |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | Java |
| Stars | 7 |
| Forks | 12 |
| License | Apache-2.0 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__arcus-zookeeper](../../../../sources/naver__arcus-zookeeper) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__arcus-zookeeper.md](../../../korea-trending/repositories/naver__arcus-zookeeper.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1208 / 282 |
| 관측 최대 깊이 | 12 |
| 상위 디렉터리 | bin, conf, dev, zookeeper-assembly, zookeeper-client, zookeeper-contrib, zookeeper-docs, zookeeper-it, zookeeper-jute, zookeeper-recipes, zookeeper-server |
| 상위 확장자 | .java: 697, .png: 58, .txt: 48, .xml: 48, .h: 39, .cc: 34, .py: 34, (none): 32, .sh: 22, .js: 21, .md: 19, .c: 15 |
| 소스 패턴 | cli-first, api/server, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 12 | [zookeeper-client/zookeeper-client-c/src/cli.c](../../../../sources/naver__arcus-zookeeper/zookeeper-client/zookeeper-client-c/src/cli.c)<br>[bin/README.txt](../../../../sources/naver__arcus-zookeeper/bin/README.txt)<br>[bin/zkCleanup.sh](../../../../sources/naver__arcus-zookeeper/bin/zkCleanup.sh)<br>[bin/zkCli.cmd](../../../../sources/naver__arcus-zookeeper/bin/zkCli.cmd)<br>[bin/zkCli.sh](../../../../sources/naver__arcus-zookeeper/bin/zkCli.sh)<br>[bin/zkEnv.cmd](../../../../sources/naver__arcus-zookeeper/bin/zkEnv.cmd)<br>[bin/zkEnv.sh](../../../../sources/naver__arcus-zookeeper/bin/zkEnv.sh)<br>[bin/zkServer-initialize.sh](../../../../sources/naver__arcus-zookeeper/bin/zkServer-initialize.sh) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 58 | [zookeeper-jute/src/main/java/org/apache/jute/Index.java](../../../../sources/naver__arcus-zookeeper/zookeeper-jute/src/main/java/org/apache/jute/Index.java)<br>[zookeeper-docs/src/main/resources/markdown/index.md](../../../../sources/naver__arcus-zookeeper/zookeeper-docs/src/main/resources/markdown/index.md)<br>[zookeeper-contrib/zookeeper-contrib-loggraph/src/main/resources/webapp/org/apache/zookeeper/graph/log4j.properties](../../../../sources/naver__arcus-zookeeper/zookeeper-contrib/zookeeper-contrib-loggraph/src/main/resources/webapp/org/apache/zookeeper/graph/log4j.properties)<br>[zookeeper-contrib/zookeeper-contrib-loggraph/src/main/resources/webapp/org/apache/zookeeper/graph/resources/date.format.js](../../../../sources/naver__arcus-zookeeper/zookeeper-contrib/zookeeper-contrib-loggraph/src/main/resources/webapp/org/apache/zookeeper/graph/resources/date.format.js)<br>[zookeeper-contrib/zookeeper-contrib-loggraph/src/main/resources/webapp/org/apache/zookeeper/graph/resources/g.bar.js](../../../../sources/naver__arcus-zookeeper/zookeeper-contrib/zookeeper-contrib-loggraph/src/main/resources/webapp/org/apache/zookeeper/graph/resources/g.bar.js)<br>[zookeeper-contrib/zookeeper-contrib-loggraph/src/main/resources/webapp/org/apache/zookeeper/graph/resources/g.dot.js](../../../../sources/naver__arcus-zookeeper/zookeeper-contrib/zookeeper-contrib-loggraph/src/main/resources/webapp/org/apache/zookeeper/graph/resources/g.dot.js)<br>[zookeeper-contrib/zookeeper-contrib-loggraph/src/main/resources/webapp/org/apache/zookeeper/graph/resources/g.line.js](../../../../sources/naver__arcus-zookeeper/zookeeper-contrib/zookeeper-contrib-loggraph/src/main/resources/webapp/org/apache/zookeeper/graph/resources/g.line.js)<br>[zookeeper-contrib/zookeeper-contrib-loggraph/src/main/resources/webapp/org/apache/zookeeper/graph/resources/g.pie.js](../../../../sources/naver__arcus-zookeeper/zookeeper-contrib/zookeeper-contrib-loggraph/src/main/resources/webapp/org/apache/zookeeper/graph/resources/g.pie.js) |
| spec | 1 | [zookeeper-contrib/zookeeper-contrib-rest/SPEC.txt](../../../../sources/naver__arcus-zookeeper/zookeeper-contrib/zookeeper-contrib-rest/SPEC.txt) |
| eval | 393 | [zookeeper-server/src/test/resources/check_compatibility.py](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/resources/check_compatibility.py)<br>[zookeeper-server/src/test/resources/checkstyle-noframes-sorted.xsl](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/resources/checkstyle-noframes-sorted.xsl)<br>[zookeeper-server/src/test/resources/checkstyle.xml](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/resources/checkstyle.xml)<br>[zookeeper-server/src/test/resources/findbugsExcludeFile.xml](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/resources/findbugsExcludeFile.xml)<br>[zookeeper-server/src/test/resources/log4j.properties](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/resources/log4j.properties)<br>[zookeeper-server/src/test/resources/test-github-pr.sh](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/resources/test-github-pr.sh)<br>[zookeeper-server/src/test/resources/test-patch.properties](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/resources/test-patch.properties)<br>[zookeeper-server/src/test/resources/test-patch.sh](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/resources/test-patch.sh) |
| security | 27 | [zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/KerberosSecurityTestcase.java](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/KerberosSecurityTestcase.java)<br>[zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/KerberosTestUtils.java](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/KerberosTestUtils.java)<br>[zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/MiniKdc.java](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/MiniKdc.java)<br>[zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/MiniKdcTest.java](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/MiniKdcTest.java)<br>[zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/QuorumAuthTestBase.java](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/QuorumAuthTestBase.java)<br>[zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/QuorumAuthUpgradeTest.java](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/QuorumAuthUpgradeTest.java)<br>[zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/QuorumDigestAuthTest.java](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/QuorumDigestAuthTest.java)<br>[zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/QuorumKerberosAuthTest.java](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/QuorumKerberosAuthTest.java) |
| ci | 3 | [Jenkinsfile](../../../../sources/naver__arcus-zookeeper/Jenkinsfile)<br>[Jenkinsfile-owasp](../../../../sources/naver__arcus-zookeeper/Jenkinsfile-owasp)<br>[Jenkinsfile-PreCommit](../../../../sources/naver__arcus-zookeeper/Jenkinsfile-PreCommit) |
| container | 1 | [dev/docker/Dockerfile](../../../../sources/naver__arcus-zookeeper/dev/docker/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 30 | [README_packaging.txt](../../../../sources/naver__arcus-zookeeper/README_packaging.txt)<br>[README-ZK.md](../../../../sources/naver__arcus-zookeeper/README-ZK.md)<br>[README.md](../../../../sources/naver__arcus-zookeeper/README.md)<br>[zookeeper-server/src/test/resources/data/ssl/README.md](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/resources/data/ssl/README.md)<br>[zookeeper-server/src/main/resources/lib/cobertura/README.txt](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/main/resources/lib/cobertura/README.txt)<br>[zookeeper-recipes/README.txt](../../../../sources/naver__arcus-zookeeper/zookeeper-recipes/README.txt)<br>[zookeeper-recipes/zookeeper-recipes-queue/README.txt](../../../../sources/naver__arcus-zookeeper/zookeeper-recipes/zookeeper-recipes-queue/README.txt)<br>[zookeeper-recipes/zookeeper-recipes-queue/src/main/c/README.txt](../../../../sources/naver__arcus-zookeeper/zookeeper-recipes/zookeeper-recipes-queue/src/main/c/README.txt) |
| config | 1 | [zookeeper-contrib/zookeeper-contrib-huebrowser/zkui/Makefile](../../../../sources/naver__arcus-zookeeper/zookeeper-contrib/zookeeper-contrib-huebrowser/zkui/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 393 | [zookeeper-server/src/test/resources/check_compatibility.py](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/resources/check_compatibility.py)<br>[zookeeper-server/src/test/resources/checkstyle-noframes-sorted.xsl](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/resources/checkstyle-noframes-sorted.xsl)<br>[zookeeper-server/src/test/resources/checkstyle.xml](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/resources/checkstyle.xml)<br>[zookeeper-server/src/test/resources/findbugsExcludeFile.xml](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/resources/findbugsExcludeFile.xml)<br>[zookeeper-server/src/test/resources/log4j.properties](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/resources/log4j.properties)<br>[zookeeper-server/src/test/resources/test-github-pr.sh](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/resources/test-github-pr.sh) |
| CI workflow | 3 | [Jenkinsfile](../../../../sources/naver__arcus-zookeeper/Jenkinsfile)<br>[Jenkinsfile-owasp](../../../../sources/naver__arcus-zookeeper/Jenkinsfile-owasp)<br>[Jenkinsfile-PreCommit](../../../../sources/naver__arcus-zookeeper/Jenkinsfile-PreCommit) |
| 컨테이너/배포 | 1 | [dev/docker/Dockerfile](../../../../sources/naver__arcus-zookeeper/dev/docker/Dockerfile) |
| 보안/정책 | 27 | [zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/KerberosSecurityTestcase.java](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/KerberosSecurityTestcase.java)<br>[zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/KerberosTestUtils.java](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/KerberosTestUtils.java)<br>[zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/MiniKdc.java](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/MiniKdc.java)<br>[zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/MiniKdcTest.java](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/MiniKdcTest.java)<br>[zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/QuorumAuthTestBase.java](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/QuorumAuthTestBase.java)<br>[zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/QuorumAuthUpgradeTest.java](../../../../sources/naver__arcus-zookeeper/zookeeper-server/src/test/java/org/apache/zookeeper/server/quorum/auth/QuorumAuthUpgradeTest.java) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `zookeeper-client/zookeeper-client-c/src/cli.c`, `bin/README.txt`, `bin/zkCleanup.sh`.
2. entrypoint를 따라 실행 흐름 확인: `zookeeper-client/zookeeper-client-c/src/cli.c`, `bin/README.txt`, `bin/zkCleanup.sh`.
3. retrieval/memory/indexing 확인: `zookeeper-jute/src/main/java/org/apache/jute/Index.java`, `zookeeper-docs/src/main/resources/markdown/index.md`, `zookeeper-contrib/zookeeper-contrib-loggraph/src/main/resources/webapp/org/apache/zookeeper/graph/log4j.properties`.
4. test/eval 파일로 동작 검증: `zookeeper-server/src/test/resources/check_compatibility.py`, `zookeeper-server/src/test/resources/checkstyle-noframes-sorted.xsl`, `zookeeper-server/src/test/resources/checkstyle.xml`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 ZooKeeper fork for ARCUS. 핵심 구조 신호는 Java, pom.xml, README.md, ci, docs, spec-artifacts이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
