# naver/spring-jdbc-plus 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Spring JDBC Plus

## 요약

- 조사 단위: `sources/naver__spring-jdbc-plus` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 159 files, 240 directories, depth score 66, key references 9개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 agent/tool runtime, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=README.md, doc/deployment_guide.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/spring-jdbc-plus |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | Java |
| Stars | 292 |
| Forks | 32 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__spring-jdbc-plus](../../../../sources/naver__spring-jdbc-plus) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__spring-jdbc-plus.md](../../../korea-trending/repositories/naver__spring-jdbc-plus.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 159 / 240 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .claude, .github, buildSrc, doc, gradle, guide-projects, rule, spring-boot-autoconfigure-data-jdbc-plus, spring-boot-starter-data-jdbc-plus-repository, spring-boot-starter-data-jdbc-plus-sql, spring-data-jdbc-plus-repository, spring-data-jdbc-plus-sql, spring-data-jdbc-plus-support, spring-data-plus-sql-gen, spring-jdbc-plus-commons, spring-jdbc-plus-support |
| 상위 확장자 | .java: 107, .gradle: 16, .yml: 9, (none): 5, .md: 4, .properties: 4, .factories: 3, .sql: 3, .xml: 2, .bat: 1, .imports: 1, .jar: 1 |
| 소스 패턴 | agent/tool runtime, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| buildSrc | source boundary | 1 |
| doc | documentation surface | 1 |
| gradle | top-level component | 1 |
| guide-projects | top-level component | 1 |
| rule | top-level component | 1 |
| spring-boot-autoconfigure-data-jdbc-plus | top-level component | 1 |
| spring-boot-starter-data-jdbc-plus-repository | top-level component | 1 |
| spring-boot-starter-data-jdbc-plus-sql | top-level component | 1 |
| spring-data-jdbc-plus-repository | top-level component | 1 |
| spring-data-jdbc-plus-sql | top-level component | 1 |
| spring-data-jdbc-plus-support | top-level component | 1 |
| spring-data-plus-sql-gen | top-level component | 1 |
| spring-jdbc-plus-commons | top-level component | 1 |
| spring-jdbc-plus-support | top-level component | 1 |


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
| docs | [README.md](../../../../sources/naver__spring-jdbc-plus/README.md) | docs signal |
| docs | [doc/deployment_guide.md](../../../../sources/naver__spring-jdbc-plus/doc/deployment_guide.md) | docs signal |
| eval | [spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/ConvertibleBeanPropertySqlParameterSourceTest.java](../../../../sources/naver__spring-jdbc-plus/spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/ConvertibleBeanPropertySqlParameterSourceTest.java) | eval signal |
| eval | [spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/ConvertibleMapSqlParameterSourceTest.java](../../../../sources/naver__spring-jdbc-plus/spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/ConvertibleMapSqlParameterSourceTest.java) | eval signal |
| eval | [spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/DefaultJdbcParameterSourceConverterTest.java](../../../../sources/naver__spring-jdbc-plus/spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/DefaultJdbcParameterSourceConverterTest.java) | eval signal |
| eval | [spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/EnumParameterTypeConverterTest.java](../../../../sources/naver__spring-jdbc-plus/spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/EnumParameterTypeConverterTest.java) | eval signal |
| ci | [.github/workflows/gradle.yml](../../../../sources/naver__spring-jdbc-plus/.github/workflows/gradle.yml) | ci support |
| ci | [.github/workflows/publish-module.yml](../../../../sources/naver__spring-jdbc-plus/.github/workflows/publish-module.yml) | ci support |
| instruction | [AGENTS.md](../../../../sources/naver__spring-jdbc-plus/AGENTS.md) | instruction support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 2 | [AGENTS.md](../../../../sources/naver__spring-jdbc-plus/AGENTS.md)<br>[.claude/skills/sync-data-relational/SKILL.md](../../../../sources/naver__spring-jdbc-plus/.claude/skills/sync-data-relational/SKILL.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 22 | [spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/ConvertibleBeanPropertySqlParameterSourceTest.java](../../../../sources/naver__spring-jdbc-plus/spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/ConvertibleBeanPropertySqlParameterSourceTest.java)<br>[spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/ConvertibleMapSqlParameterSourceTest.java](../../../../sources/naver__spring-jdbc-plus/spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/ConvertibleMapSqlParameterSourceTest.java)<br>[spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/DefaultJdbcParameterSourceConverterTest.java](../../../../sources/naver__spring-jdbc-plus/spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/DefaultJdbcParameterSourceConverterTest.java)<br>[spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/EnumParameterTypeConverterTest.java](../../../../sources/naver__spring-jdbc-plus/spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/EnumParameterTypeConverterTest.java)<br>[spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/IterableExpandPaddingTest.java](../../../../sources/naver__spring-jdbc-plus/spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/IterableExpandPaddingTest.java)<br>[spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/UuidParameterTypeConverterTest.java](../../../../sources/naver__spring-jdbc-plus/spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/UuidParameterTypeConverterTest.java)<br>[spring-data-jdbc-plus-support/src/test/java/com/navercorp/spring/data/jdbc/plus/support/convert/NonQuotingDialect.java](../../../../sources/naver__spring-jdbc-plus/spring-data-jdbc-plus-support/src/test/java/com/navercorp/spring/data/jdbc/plus/support/convert/NonQuotingDialect.java)<br>[spring-data-jdbc-plus-support/src/test/java/com/navercorp/spring/data/jdbc/plus/support/convert/PersistentPropertyPathTestUtils.java](../../../../sources/naver__spring-jdbc-plus/spring-data-jdbc-plus-support/src/test/java/com/navercorp/spring/data/jdbc/plus/support/convert/PersistentPropertyPathTestUtils.java) |
| security | 0 | 명확하지 않음 |
| ci | 3 | [.github/workflows/gradle.yml](../../../../sources/naver__spring-jdbc-plus/.github/workflows/gradle.yml)<br>[.github/workflows/publish-module.yml](../../../../sources/naver__spring-jdbc-plus/.github/workflows/publish-module.yml)<br>[.github/workflows/publish.yml](../../../../sources/naver__spring-jdbc-plus/.github/workflows/publish.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [AGENTS.md](../../../../sources/naver__spring-jdbc-plus/AGENTS.md) |
| docs | 2 | [README.md](../../../../sources/naver__spring-jdbc-plus/README.md)<br>[doc/deployment_guide.md](../../../../sources/naver__spring-jdbc-plus/doc/deployment_guide.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 22 | [spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/ConvertibleBeanPropertySqlParameterSourceTest.java](../../../../sources/naver__spring-jdbc-plus/spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/ConvertibleBeanPropertySqlParameterSourceTest.java)<br>[spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/ConvertibleMapSqlParameterSourceTest.java](../../../../sources/naver__spring-jdbc-plus/spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/ConvertibleMapSqlParameterSourceTest.java)<br>[spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/DefaultJdbcParameterSourceConverterTest.java](../../../../sources/naver__spring-jdbc-plus/spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/DefaultJdbcParameterSourceConverterTest.java)<br>[spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/EnumParameterTypeConverterTest.java](../../../../sources/naver__spring-jdbc-plus/spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/EnumParameterTypeConverterTest.java)<br>[spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/IterableExpandPaddingTest.java](../../../../sources/naver__spring-jdbc-plus/spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/IterableExpandPaddingTest.java)<br>[spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/UuidParameterTypeConverterTest.java](../../../../sources/naver__spring-jdbc-plus/spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/UuidParameterTypeConverterTest.java) |
| CI workflow | 3 | [.github/workflows/gradle.yml](../../../../sources/naver__spring-jdbc-plus/.github/workflows/gradle.yml)<br>[.github/workflows/publish-module.yml](../../../../sources/naver__spring-jdbc-plus/.github/workflows/publish-module.yml)<br>[.github/workflows/publish.yml](../../../../sources/naver__spring-jdbc-plus/.github/workflows/publish.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/naver__spring-jdbc-plus/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `README.md`, `doc/deployment_guide.md`, `spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/ConvertibleBeanPropertySqlParameterSourceTest.java`.
2. agent/tool runtime 매핑: `AGENTS.md`, `.claude/skills/sync-data-relational/SKILL.md`.
3. test/eval 파일로 동작 검증: `spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/ConvertibleBeanPropertySqlParameterSourceTest.java`, `spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/ConvertibleMapSqlParameterSourceTest.java`, `spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/DefaultJdbcParameterSourceConverterTest.java`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Spring JDBC Plus. 핵심 구조 신호는 Java, README.md, AGENTS.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
