# naver/spring-jdbc-plus Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Spring JDBC Plus

## 요약

- 조사 단위: `sources/naver__spring-jdbc-plus` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 159 files, 240 directories, depth score 72, key references 9개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 agent/tool runtime, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=README.md, doc/deployment_guide.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/spring-jdbc-plus |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Java |
| Stars | 292 |
| Forks | 32 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/naver__spring-jdbc-plus](../../../../sources/naver__spring-jdbc-plus) |
| Existing report | [reports/korea-trending/repositories/naver__spring-jdbc-plus.md](../../../korea-trending/repositories/naver__spring-jdbc-plus.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 159 / 240 |
| Max observed depth | 13 |
| Top directories | .claude, .github, buildSrc, doc, gradle, guide-projects, rule, spring-boot-autoconfigure-data-jdbc-plus, spring-boot-starter-data-jdbc-plus-repository, spring-boot-starter-data-jdbc-plus-sql, spring-data-jdbc-plus-repository, spring-data-jdbc-plus-sql, spring-data-jdbc-plus-support, spring-data-plus-sql-gen, spring-jdbc-plus-commons, spring-jdbc-plus-support |
| Top extensions | .java: 107, .gradle: 16, .yml: 9, (none): 5, .md: 4, .properties: 4, .factories: 3, .sql: 3, .xml: 2, .bat: 1, .imports: 1, .jar: 1 |
| Source patterns | agent/tool runtime, eval/test harness |

### Components

| Component | Role | Signal count |
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
| docs | [README.md](../../../../sources/naver__spring-jdbc-plus/README.md) | docs signal |
| docs | [doc/deployment_guide.md](../../../../sources/naver__spring-jdbc-plus/doc/deployment_guide.md) | docs signal |
| eval | [spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/ConvertibleBeanPropertySqlParameterSourceTest.java](../../../../sources/naver__spring-jdbc-plus/spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/ConvertibleBeanPropertySqlParameterSourceTest.java) | eval signal |
| eval | [spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/ConvertibleMapSqlParameterSourceTest.java](../../../../sources/naver__spring-jdbc-plus/spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/ConvertibleMapSqlParameterSourceTest.java) | eval signal |
| eval | [spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/DefaultJdbcParameterSourceConverterTest.java](../../../../sources/naver__spring-jdbc-plus/spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/DefaultJdbcParameterSourceConverterTest.java) | eval signal |
| eval | [spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/EnumParameterTypeConverterTest.java](../../../../sources/naver__spring-jdbc-plus/spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/EnumParameterTypeConverterTest.java) | eval signal |
| ci | [.github/workflows/gradle.yml](../../../../sources/naver__spring-jdbc-plus/.github/workflows/gradle.yml) | ci support |
| ci | [.github/workflows/publish-module.yml](../../../../sources/naver__spring-jdbc-plus/.github/workflows/publish-module.yml) | ci support |
| instruction | [AGENTS.md](../../../../sources/naver__spring-jdbc-plus/AGENTS.md) | instruction support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 2 | [AGENTS.md](../../../../sources/naver__spring-jdbc-plus/AGENTS.md)<br>[.claude/skills/sync-data-relational/SKILL.md](../../../../sources/naver__spring-jdbc-plus/.claude/skills/sync-data-relational/SKILL.md) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 22 | [spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/ConvertibleBeanPropertySqlParameterSourceTest.java](../../../../sources/naver__spring-jdbc-plus/spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/ConvertibleBeanPropertySqlParameterSourceTest.java)<br>[spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/ConvertibleMapSqlParameterSourceTest.java](../../../../sources/naver__spring-jdbc-plus/spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/ConvertibleMapSqlParameterSourceTest.java)<br>[spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/DefaultJdbcParameterSourceConverterTest.java](../../../../sources/naver__spring-jdbc-plus/spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/DefaultJdbcParameterSourceConverterTest.java)<br>[spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/EnumParameterTypeConverterTest.java](../../../../sources/naver__spring-jdbc-plus/spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/EnumParameterTypeConverterTest.java)<br>[spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/IterableExpandPaddingTest.java](../../../../sources/naver__spring-jdbc-plus/spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/IterableExpandPaddingTest.java)<br>[spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/UuidParameterTypeConverterTest.java](../../../../sources/naver__spring-jdbc-plus/spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/UuidParameterTypeConverterTest.java)<br>[spring-data-jdbc-plus-support/src/test/java/com/navercorp/spring/data/jdbc/plus/support/convert/NonQuotingDialect.java](../../../../sources/naver__spring-jdbc-plus/spring-data-jdbc-plus-support/src/test/java/com/navercorp/spring/data/jdbc/plus/support/convert/NonQuotingDialect.java)<br>[spring-data-jdbc-plus-support/src/test/java/com/navercorp/spring/data/jdbc/plus/support/convert/PersistentPropertyPathTestUtils.java](../../../../sources/naver__spring-jdbc-plus/spring-data-jdbc-plus-support/src/test/java/com/navercorp/spring/data/jdbc/plus/support/convert/PersistentPropertyPathTestUtils.java) |
| security | 0 | not obvious |
| ci | 3 | [.github/workflows/gradle.yml](../../../../sources/naver__spring-jdbc-plus/.github/workflows/gradle.yml)<br>[.github/workflows/publish-module.yml](../../../../sources/naver__spring-jdbc-plus/.github/workflows/publish-module.yml)<br>[.github/workflows/publish.yml](../../../../sources/naver__spring-jdbc-plus/.github/workflows/publish.yml) |
| container | 0 | not obvious |
| instruction | 1 | [AGENTS.md](../../../../sources/naver__spring-jdbc-plus/AGENTS.md) |
| docs | 2 | [README.md](../../../../sources/naver__spring-jdbc-plus/README.md)<br>[doc/deployment_guide.md](../../../../sources/naver__spring-jdbc-plus/doc/deployment_guide.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 22 | [spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/ConvertibleBeanPropertySqlParameterSourceTest.java](../../../../sources/naver__spring-jdbc-plus/spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/ConvertibleBeanPropertySqlParameterSourceTest.java)<br>[spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/ConvertibleMapSqlParameterSourceTest.java](../../../../sources/naver__spring-jdbc-plus/spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/ConvertibleMapSqlParameterSourceTest.java)<br>[spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/DefaultJdbcParameterSourceConverterTest.java](../../../../sources/naver__spring-jdbc-plus/spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/DefaultJdbcParameterSourceConverterTest.java)<br>[spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/EnumParameterTypeConverterTest.java](../../../../sources/naver__spring-jdbc-plus/spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/EnumParameterTypeConverterTest.java)<br>[spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/IterableExpandPaddingTest.java](../../../../sources/naver__spring-jdbc-plus/spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/IterableExpandPaddingTest.java)<br>[spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/UuidParameterTypeConverterTest.java](../../../../sources/naver__spring-jdbc-plus/spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/UuidParameterTypeConverterTest.java) |
| CI workflows | 3 | [.github/workflows/gradle.yml](../../../../sources/naver__spring-jdbc-plus/.github/workflows/gradle.yml)<br>[.github/workflows/publish-module.yml](../../../../sources/naver__spring-jdbc-plus/.github/workflows/publish-module.yml)<br>[.github/workflows/publish.yml](../../../../sources/naver__spring-jdbc-plus/.github/workflows/publish.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/naver__spring-jdbc-plus/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `README.md`, `doc/deployment_guide.md`, `spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/ConvertibleBeanPropertySqlParameterSourceTest.java`.
2. Map agent/tool runtime through: `AGENTS.md`, `.claude/skills/sync-data-relational/SKILL.md`.
3. Verify behavior through test/eval files: `spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/ConvertibleBeanPropertySqlParameterSourceTest.java`, `spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/ConvertibleMapSqlParameterSourceTest.java`, `spring-jdbc-plus-support/src/test/java/com/navercorp/spring/jdbc/plus/support/parametersource/converter/DefaultJdbcParameterSourceConverterTest.java`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Spring JDBC Plus. 핵심 구조 신호는 Java, README.md, AGENTS.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
