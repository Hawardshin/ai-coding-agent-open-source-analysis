# naver/hadoop 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Public hadoop release repository

## 요약

- 조사 단위: `sources/naver__hadoop` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 5,962 files, 1,698 directories, depth score 107, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=hadoop-yarn-project/hadoop-yarn/bin/slaves.sh, hadoop-yarn-project/hadoop-yarn/bin/start-yarn.cmd, hadoop-yarn-project/hadoop-yarn/bin/start-yarn.sh이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/hadoop |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | Java |
| Stars | 41 |
| Forks | 29 |
| License | Apache-2.0 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__hadoop](../../../../sources/naver__hadoop) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__hadoop.md](../../../korea-trending/repositories/naver__hadoop.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 5962 / 1698 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | dev-support, hadoop-assemblies, hadoop-client, hadoop-common-project, hadoop-dist, hadoop-hdfs-project, hadoop-mapreduce-project, hadoop-maven-plugins, hadoop-minicluster, hadoop-project, hadoop-project-dist, hadoop-tools, hadoop-yarn-project |
| 상위 확장자 | .java: 4880, .xml: 218, .c: 104, .md: 86, .properties: 64, .proto: 60, (none): 57, .h: 51, .html: 51, .png: 41, .sh: 41, .txt: 37 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| dev-support | top-level component | 1 |
| hadoop-assemblies | top-level component | 1 |
| hadoop-client | source boundary | 1 |
| hadoop-common-project | top-level component | 1 |
| hadoop-dist | top-level component | 1 |
| hadoop-hdfs-project | top-level component | 1 |
| hadoop-mapreduce-project | top-level component | 1 |
| hadoop-maven-plugins | top-level component | 1 |
| hadoop-minicluster | top-level component | 1 |
| hadoop-project | top-level component | 1 |
| hadoop-project-dist | top-level component | 1 |
| hadoop-tools | top-level component | 1 |
| hadoop-yarn-project | top-level component | 1 |


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
| entrypoints | [hadoop-yarn-project/hadoop-yarn/bin/slaves.sh](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/bin/slaves.sh) | entrypoints signal |
| entrypoints | [hadoop-yarn-project/hadoop-yarn/bin/start-yarn.cmd](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/bin/start-yarn.cmd) | entrypoints signal |
| entrypoints | [hadoop-yarn-project/hadoop-yarn/bin/start-yarn.sh](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/bin/start-yarn.sh) | entrypoints signal |
| entrypoints | [hadoop-yarn-project/hadoop-yarn/bin/stop-yarn.cmd](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/bin/stop-yarn.cmd) | entrypoints signal |
| docs | [README.md](../../../../sources/naver__hadoop/README.md) | docs signal |
| docs | [README.txt](../../../../sources/naver__hadoop/README.txt) | docs signal |
| docs | [hadoop-yarn-project/hadoop-yarn/README](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/README) | docs signal |
| docs | [hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/site.xml](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/site.xml) | docs signal |
| eval | [hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/pom.xml](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/pom.xml) | eval signal |
| eval | [hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/capacity-scheduler.xml](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/capacity-scheduler.xml) | eval signal |
| eval | [hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/core-site.xml](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/core-site.xml) | eval signal |
| eval | [hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/krb5.conf](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/krb5.conf) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 51 | [hadoop-yarn-project/hadoop-yarn/bin/slaves.sh](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/bin/slaves.sh)<br>[hadoop-yarn-project/hadoop-yarn/bin/start-yarn.cmd](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/bin/start-yarn.cmd)<br>[hadoop-yarn-project/hadoop-yarn/bin/start-yarn.sh](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/bin/start-yarn.sh)<br>[hadoop-yarn-project/hadoop-yarn/bin/stop-yarn.cmd](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/bin/stop-yarn.cmd)<br>[hadoop-yarn-project/hadoop-yarn/bin/stop-yarn.sh](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/bin/stop-yarn.sh)<br>[hadoop-yarn-project/hadoop-yarn/bin/yarn](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/bin/yarn)<br>[hadoop-yarn-project/hadoop-yarn/bin/yarn-config.cmd](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/bin/yarn-config.cmd)<br>[hadoop-yarn-project/hadoop-yarn/bin/yarn-config.sh](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/bin/yarn-config.sh) |
| agentRuntime | 243 | [hadoop-tools/hadoop-rumen/src/test/java/org/apache/hadoop/tools/rumen/ConcatenatedInputFilesDemuxer.java](../../../../sources/naver__hadoop/hadoop-tools/hadoop-rumen/src/test/java/org/apache/hadoop/tools/rumen/ConcatenatedInputFilesDemuxer.java)<br>[hadoop-tools/hadoop-rumen/src/test/java/org/apache/hadoop/tools/rumen/HistogramRawTestData.java](../../../../sources/naver__hadoop/hadoop-tools/hadoop-rumen/src/test/java/org/apache/hadoop/tools/rumen/HistogramRawTestData.java)<br>[hadoop-tools/hadoop-rumen/src/test/java/org/apache/hadoop/tools/rumen/TestHistograms.java](../../../../sources/naver__hadoop/hadoop-tools/hadoop-rumen/src/test/java/org/apache/hadoop/tools/rumen/TestHistograms.java)<br>[hadoop-tools/hadoop-rumen/src/test/java/org/apache/hadoop/tools/rumen/TestPiecewiseLinearInterpolation.java](../../../../sources/naver__hadoop/hadoop-tools/hadoop-rumen/src/test/java/org/apache/hadoop/tools/rumen/TestPiecewiseLinearInterpolation.java)<br>[hadoop-tools/hadoop-rumen/src/test/java/org/apache/hadoop/tools/rumen/TestRandomSeedGenerator.java](../../../../sources/naver__hadoop/hadoop-tools/hadoop-rumen/src/test/java/org/apache/hadoop/tools/rumen/TestRandomSeedGenerator.java)<br>[hadoop-tools/hadoop-rumen/src/main/java/org/apache/hadoop/tools/rumen/AbstractClusterStory.java](../../../../sources/naver__hadoop/hadoop-tools/hadoop-rumen/src/main/java/org/apache/hadoop/tools/rumen/AbstractClusterStory.java)<br>[hadoop-tools/hadoop-rumen/src/main/java/org/apache/hadoop/tools/rumen/Anonymizer.java](../../../../sources/naver__hadoop/hadoop-tools/hadoop-rumen/src/main/java/org/apache/hadoop/tools/rumen/Anonymizer.java)<br>[hadoop-tools/hadoop-rumen/src/main/java/org/apache/hadoop/tools/rumen/CDFPiecewiseLinearRandomGenerator.java](../../../../sources/naver__hadoop/hadoop-tools/hadoop-rumen/src/main/java/org/apache/hadoop/tools/rumen/CDFPiecewiseLinearRandomGenerator.java) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 27 | [hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/markdown/index.md](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/markdown/index.md)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/markdown/registry/index.md](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/markdown/registry/index.md)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-common/src/main/java/org/apache/hadoop/yarn/state/Graph.java](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-common/src/main/java/org/apache/hadoop/yarn/state/Graph.java)<br>[hadoop-tools/hadoop-sls/src/site/resources/images/sls_cluster_memory.png](../../../../sources/naver__hadoop/hadoop-tools/hadoop-sls/src/site/resources/images/sls_cluster_memory.png)<br>[hadoop-tools/hadoop-sls/src/site/resources/images/sls_queue_allocated_memory.png](../../../../sources/naver__hadoop/hadoop-tools/hadoop-sls/src/site/resources/images/sls_queue_allocated_memory.png)<br>[hadoop-tools/hadoop-openstack/src/site/markdown/index.md](../../../../sources/naver__hadoop/hadoop-tools/hadoop-openstack/src/site/markdown/index.md)<br>[hadoop-tools/hadoop-azure/src/site/markdown/index.md](../../../../sources/naver__hadoop/hadoop-tools/hadoop-azure/src/site/markdown/index.md)<br>[hadoop-tools/hadoop-aws/src/site/markdown/tools/hadoop-aws/index.md](../../../../sources/naver__hadoop/hadoop-tools/hadoop-aws/src/site/markdown/tools/hadoop-aws/index.md) |
| spec | 4 | [install_requirements.sh](../../../../sources/naver__hadoop/install_requirements.sh)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/resources/yarn_architecture.gif](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/resources/yarn_architecture.gif)<br>[hadoop-hdfs-project/hadoop-hdfs/src/main/docs/src/documentation/resources/images/architecture.gif](../../../../sources/naver__hadoop/hadoop-hdfs-project/hadoop-hdfs/src/main/docs/src/documentation/resources/images/architecture.gif)<br>[hadoop-common-project/hadoop-common/src/main/docs/src/documentation/resources/images/architecture.gif](../../../../sources/naver__hadoop/hadoop-common-project/hadoop-common/src/main/docs/src/documentation/resources/images/architecture.gif) |
| eval | 2079 | [hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/pom.xml](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/pom.xml)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/capacity-scheduler.xml](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/capacity-scheduler.xml)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/core-site.xml](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/core-site.xml)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/krb5.conf](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/krb5.conf)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/log4j.properties](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/log4j.properties)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/proto/test_token.proto](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/proto/test_token.proto)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/java/org/apache/hadoop/yarn/server/ContainerTokenIdentifierForTest.java](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/java/org/apache/hadoop/yarn/server/ContainerTokenIdentifierForTest.java)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/java/org/apache/hadoop/yarn/server/MiniYARNCluster.java](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/java/org/apache/hadoop/yarn/server/MiniYARNCluster.java) |
| security | 338 | [hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/markdown/registry/registry-security.md](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/markdown/registry/registry-security.md)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/resources/hadoop-policy.xml](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/resources/hadoop-policy.xml)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/resources/META-INF/services/org.apache.hadoop.security.token.TokenRenewer](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/resources/META-INF/services/org.apache.hadoop.security.token.TokenRenewer)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-nodemanager/src/main/resources/META-INF/services/org.apache.hadoop.security.SecurityInfo](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-nodemanager/src/main/resources/META-INF/services/org.apache.hadoop.security.SecurityInfo)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-nodemanager/src/main/resources/META-INF/services/org.apache.hadoop.security.token.TokenIdentifier](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-nodemanager/src/main/resources/META-INF/services/org.apache.hadoop.security.token.TokenIdentifier)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-common/src/main/resources/META-INF/services/org.apache.hadoop.security.SecurityInfo](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-common/src/main/resources/META-INF/services/org.apache.hadoop.security.SecurityInfo)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-common/src/test/java/org/apache/hadoop/yarn/server/security/TestApplicationACLsManager.java](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-common/src/test/java/org/apache/hadoop/yarn/server/security/TestApplicationACLsManager.java)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-common/src/test/java/org/apache/hadoop/yarn/security/TestYARNTokenIdentifier.java](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-common/src/test/java/org/apache/hadoop/yarn/security/TestYARNTokenIdentifier.java) |
| ci | 1 | [hadoop-common-project/hadoop-common/src/main/java/org/apache/hadoop/util/hash/JenkinsHash.java](../../../../sources/naver__hadoop/hadoop-common-project/hadoop-common/src/main/java/org/apache/hadoop/util/hash/JenkinsHash.java) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 218 | [README.md](../../../../sources/naver__hadoop/README.md)<br>[README.txt](../../../../sources/naver__hadoop/README.txt)<br>[hadoop-yarn-project/hadoop-yarn/README](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/README)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/site.xml](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/site.xml)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/resources/yarn_architecture.gif](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/resources/yarn_architecture.gif)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/resources/images/rm-ha-overview.png](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/resources/images/rm-ha-overview.png)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/resources/images/timeline_structure.jpg](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/resources/images/timeline_structure.jpg)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/resources/css/site.css](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/resources/css/site.css) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 2079 | [hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/pom.xml](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/pom.xml)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/capacity-scheduler.xml](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/capacity-scheduler.xml)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/core-site.xml](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/core-site.xml)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/krb5.conf](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/krb5.conf)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/log4j.properties](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/log4j.properties)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/proto/test_token.proto](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/proto/test_token.proto) |
| CI workflow | 1 | [hadoop-common-project/hadoop-common/src/main/java/org/apache/hadoop/util/hash/JenkinsHash.java](../../../../sources/naver__hadoop/hadoop-common-project/hadoop-common/src/main/java/org/apache/hadoop/util/hash/JenkinsHash.java) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 338 | [hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/markdown/registry/registry-security.md](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/markdown/registry/registry-security.md)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/resources/hadoop-policy.xml](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/resources/hadoop-policy.xml)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/resources/META-INF/services/org.apache.hadoop.security.token.TokenRenewer](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/resources/META-INF/services/org.apache.hadoop.security.token.TokenRenewer)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-nodemanager/src/main/resources/META-INF/services/org.apache.hadoop.security.SecurityInfo](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-nodemanager/src/main/resources/META-INF/services/org.apache.hadoop.security.SecurityInfo)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-nodemanager/src/main/resources/META-INF/services/org.apache.hadoop.security.token.TokenIdentifier](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-nodemanager/src/main/resources/META-INF/services/org.apache.hadoop.security.token.TokenIdentifier)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-common/src/main/resources/META-INF/services/org.apache.hadoop.security.SecurityInfo](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-common/src/main/resources/META-INF/services/org.apache.hadoop.security.SecurityInfo) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `hadoop-yarn-project/hadoop-yarn/bin/slaves.sh`, `hadoop-yarn-project/hadoop-yarn/bin/start-yarn.cmd`, `hadoop-yarn-project/hadoop-yarn/bin/start-yarn.sh`.
2. entrypoint를 따라 실행 흐름 확인: `hadoop-yarn-project/hadoop-yarn/bin/slaves.sh`, `hadoop-yarn-project/hadoop-yarn/bin/start-yarn.cmd`, `hadoop-yarn-project/hadoop-yarn/bin/start-yarn.sh`.
3. agent/tool runtime 매핑: `hadoop-tools/hadoop-rumen/src/test/java/org/apache/hadoop/tools/rumen/ConcatenatedInputFilesDemuxer.java`, `hadoop-tools/hadoop-rumen/src/test/java/org/apache/hadoop/tools/rumen/HistogramRawTestData.java`, `hadoop-tools/hadoop-rumen/src/test/java/org/apache/hadoop/tools/rumen/TestHistograms.java`.
4. retrieval/memory/indexing 확인: `hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/markdown/index.md`, `hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/markdown/registry/index.md`, `hadoop-yarn-project/hadoop-yarn/hadoop-yarn-common/src/main/java/org/apache/hadoop/yarn/state/Graph.java`.
5. test/eval 파일로 동작 검증: `hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/pom.xml`, `hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/capacity-scheduler.xml`, `hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/core-site.xml`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Public hadoop release repository. 핵심 구조 신호는 Java, pom.xml, README.md, docs, spec-artifacts이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
