# naver/spring-jdbc-plus

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/spring-jdbc-plus |
| local path | sources/naver__spring-jdbc-plus |
| HEAD | e57f513 |
| stars/forks | 292 / 32 |
| language | Java |
| license | Apache-2.0 |
| pushedAt | 2025-12-22T01:26:45Z |
| trendScore / priorityScore | 92 / 248 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Security / compliance | 129 | README.md, doc/deployment_guide.md, spring-data-jdbc-plus-sql/src/main/java/com/navercorp/spring/data/jdbc/plus/sql/support/SqlAware.java |
| Korean language / Korea domain | 86 | README.md, doc/deployment_guide.md, spring-data-jdbc-plus-sql/src/main/java/com/navercorp/spring/data/jdbc/plus/sql/support/SqlAware.java |
| LLM wiki / memory / graph | 14 | README.md, spring-data-jdbc-plus-support/src/test/java/com/navercorp/spring/data/jdbc/plus/support/convert/SoftDeletePropertyTest.java, spring-data-jdbc-plus-support/src/test/java/com/navercorp/spring/data/jdbc/plus/support/convert/SqlGeneratorEmbeddedTest.java |
| AI agent / tool use | 3 | AGENTS.md |
| Spec / doc-driven workflow | 1 |  |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, graphMemory, korea-signal, llm-wiki-memory, security-compliance, spec-driven |
| stacks | Java/Kotlin |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 267 |
| manifests | 15 |
| docs | 98 |
| tests | 44 |
| ci/ops | 3 |
| spec artifacts | 2 |
| agent instruction files | 2 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Spring JDBC Plus ![build](https://github.com/naver/spring-jdbc-plus/actions/workflows/gradle.yml/badge.svg) [![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/naver/spring-jdbc-plus) |
| headings | Spring JDBC Plus ![build](https://github.com/naver/spring-jdbc-plus/actions/workflows/gradle.yml/badge.svg) [![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/naver/spring-jdbc-plus) / Features / Getting Started (Spring Boot Starter Data JDBC Plus SQL) / Cautions when writing SQL / Annotation Guide / @SqlTableAlias / @SqlFunction / @SoftDeleteColumn / Examples / Getting Help |
| excerpt | ! GitHub release https //img.shields.io/github/v/release/naver/spring jdbc plus.svg https //img.shields.io/github/v/release/naver/spring jdbc plus.svg?include prereleases ! GitHub license https //img.shields.io/github/license/naver/spring jdbc plus.svg https //github.com/naver/spring jdbc plus.js/blob/master/LICENSE Spring JDBC Plus ! build https //github.com/naver/spring jdbc plus/actions/workflows/gradle.yml/badge.svg ! Gitter chat https //badges.gitter.im/gitterHQ/gitter.png https //gitter.im/naver/spring jdbc plus Features Support for executing custom SQL SELECT statements Provide BeanParameterSource , MapParameterSource , EntityParameterSource Provide parameter source converters such as |


## 주요 파일

### Manifests

- AGENTS.md
- README.md
- buildSrc/build.gradle
- spring-boot-autoconfigure-data-jdbc-plus/build.gradle
- spring-boot-starter-data-jdbc-plus-repository/build.gradle
- spring-boot-starter-data-jdbc-plus-sql/build.gradle
- spring-data-jdbc-plus-repository/build.gradle
- spring-data-jdbc-plus-sql/build.gradle
- spring-data-jdbc-plus-support/build.gradle
- spring-data-plus-sql-gen/build.gradle
- spring-jdbc-plus-commons/build.gradle
- spring-jdbc-plus-support/build.gradle
- guide-projects/plus-repository-guide/build.gradle
- guide-projects/plus-sql-java-kotlin-guide/build.gradle
- guide-projects/plus-sql-kotlin-guide/build.gradle.kts


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- .claude/skills/sync-data-relational/SKILL.md


### Agent Instruction Files

- AGENTS.md
- .claude/skills/sync-data-relational/SKILL.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| guide-projects | 107 |
| spring-data-jdbc-plus-sql | 32 |
| spring-data-jdbc-plus-support | 27 |
| spring-jdbc-plus-support | 27 |
| spring-data-jdbc-plus-repository | 17 |
| spring-boot-autoconfigure-data-jdbc-plus | 12 |
| spring-data-plus-sql-gen | 11 |
| buildSrc | 5 |
| spring-jdbc-plus-commons | 5 |
| spring-boot-starter-data-jdbc-plus-repository | 4 |
| .github | 3 |
| gradle | 2 |
| rule | 2 |
| .claude | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .java | 198 |
| .kt | 17 |
| .gradle | 16 |
| .yml | 9 |
| [no-ext] | 5 |
| .md | 4 |
| .properties | 4 |
| .factories | 3 |
| .sql | 3 |
| .xml | 2 |
| .bat | 1 |
| .imports | 1 |
| .jar | 1 |
| .json | 1 |
| .kts | 1 |
| .processor | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
