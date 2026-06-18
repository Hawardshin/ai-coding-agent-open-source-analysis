# woowacourse/service-apply Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

우아한테크코스 지원부터 최종 합격까지 모든 과정을 관리한다.

## 요약

- 조사 단위: `sources/woowacourse__service-apply` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 618 files, 200 directories, depth score 118, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=frontend/src/App.css, frontend/src/App.js, frontend/src/index.js이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | woowacourse/service-apply |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Kotlin |
| Stars | 580 |
| Forks | 100 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/woowacourse__service-apply](../../../../sources/woowacourse__service-apply) |
| Existing report | [reports/korea-trending/repositories/woowacourse__service-apply.md](../../../korea-trending/repositories/woowacourse__service-apply.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 618 / 200 |
| Max observed depth | 9 |
| Top directories | .ebextensions, .github, .platform, docker, frontend, gradle, scripts, src |
| Top extensions | .kt: 315, .tsx: 72, .ts: 55, .css: 50, .js: 46, .sql: 15, .adoc: 8, .png: 7, .html: 5, .json: 5, .properties: 5, .svg: 5 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 70 |
| .github | ci surface | 1 |
| docker | documentation surface | 1 |
| frontend | top-level component | 1 |
| gradle | top-level component | 1 |
| scripts | top-level component | 1 |


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
| entrypoints | [frontend/src/App.css](../../../../sources/woowacourse__service-apply/frontend/src/App.css) | entrypoints signal |
| entrypoints | [frontend/src/App.js](../../../../sources/woowacourse__service-apply/frontend/src/App.js) | entrypoints signal |
| entrypoints | [frontend/src/index.js](../../../../sources/woowacourse__service-apply/frontend/src/index.js) | entrypoints signal |
| entrypoints | [frontend/.storybook/main.js](../../../../sources/woowacourse__service-apply/frontend/.storybook/main.js) | entrypoints signal |
| config | [package.json](../../../../sources/woowacourse__service-apply/package.json) | config signal |
| config | [frontend/package.json](../../../../sources/woowacourse__service-apply/frontend/package.json) | config signal |
| config | [frontend/tsconfig.json](../../../../sources/woowacourse__service-apply/frontend/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/woowacourse__service-apply/README.md) | docs signal |
| docs | [src/docs/asciidoc/agreement.adoc](../../../../sources/woowacourse__service-apply/src/docs/asciidoc/agreement.adoc) | docs signal |
| docs | [src/docs/asciidoc/application-form.adoc](../../../../sources/woowacourse__service-apply/src/docs/asciidoc/application-form.adoc) | docs signal |
| docs | [src/docs/asciidoc/assignment.adoc](../../../../sources/woowacourse__service-apply/src/docs/asciidoc/assignment.adoc) | docs signal |
| eval | [src/test/resources/another_evaluation.csv](../../../../sources/woowacourse__service-apply/src/test/resources/another_evaluation.csv) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [frontend/src/App.css](../../../../sources/woowacourse__service-apply/frontend/src/App.css)<br>[frontend/src/App.js](../../../../sources/woowacourse__service-apply/frontend/src/App.js)<br>[frontend/src/index.js](../../../../sources/woowacourse__service-apply/frontend/src/index.js)<br>[frontend/.storybook/main.js](../../../../sources/woowacourse__service-apply/frontend/.storybook/main.js) |
| agentRuntime | 25 | [src/test/kotlin/support/test/context/event/Events.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/support/test/context/event/Events.kt)<br>[src/test/kotlin/support/test/context/event/RecordEventsConfiguration.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/support/test/context/event/RecordEventsConfiguration.kt)<br>[frontend/src/hooks/useApplicationRegisterForm.js](../../../../sources/woowacourse__service-apply/frontend/src/hooks/useApplicationRegisterForm.js)<br>[frontend/src/hooks/useAssignmentForm.js](../../../../sources/woowacourse__service-apply/frontend/src/hooks/useAssignmentForm.js)<br>[frontend/src/hooks/useAuth.js](../../../../sources/woowacourse__service-apply/frontend/src/hooks/useAuth.js)<br>[frontend/src/hooks/useInterval.js](../../../../sources/woowacourse__service-apply/frontend/src/hooks/useInterval.js)<br>[frontend/src/hooks/useLanguageSwitcher.ts](../../../../sources/woowacourse__service-apply/frontend/src/hooks/useLanguageSwitcher.ts)<br>[frontend/src/hooks/useLoginForm.js](../../../../sources/woowacourse__service-apply/frontend/src/hooks/useLoginForm.js) |
| mcp | 0 | not obvious |
| retrieval | 4 | [src/docs/asciidoc/index.adoc](../../../../sources/woowacourse__service-apply/src/docs/asciidoc/index.adoc)<br>[frontend/src/index.js](../../../../sources/woowacourse__service-apply/frontend/src/index.js)<br>[frontend/src/api/index.ts](../../../../sources/woowacourse__service-apply/frontend/src/api/index.ts)<br>[frontend/public/index.html](../../../../sources/woowacourse__service-apply/frontend/public/index.html) |
| spec | 4 | [src/test/kotlin/support/test/spec/Specs.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/support/test/spec/Specs.kt)<br>[src/test/kotlin/apply/acceptance/AcceptanceDsl.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/apply/acceptance/AcceptanceDsl.kt)<br>[src/test/kotlin/apply/acceptance/AcceptanceDslTest.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/apply/acceptance/AcceptanceDslTest.kt)<br>[src/test/kotlin/apply/acceptance/AcceptanceTest.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/apply/acceptance/AcceptanceTest.kt) |
| eval | 131 | [src/test/resources/another_evaluation.csv](../../../../sources/woowacourse__service-apply/src/test/resources/another_evaluation.csv)<br>[src/test/resources/evaluation_with_over_maximum_score.csv](../../../../sources/woowacourse__service-apply/src/test/resources/evaluation_with_over_maximum_score.csv)<br>[src/test/resources/evaluation.csv](../../../../sources/woowacourse__service-apply/src/test/resources/evaluation.csv)<br>[src/test/resources/status_ignore_case_evaluation.csv](../../../../sources/woowacourse__service-apply/src/test/resources/status_ignore_case_evaluation.csv)<br>[src/test/kotlin/support/MarkdownTest.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/support/MarkdownTest.kt)<br>[src/test/kotlin/support/views/IdFieldTest.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/support/views/IdFieldTest.kt)<br>[src/test/kotlin/support/test/BaseTests.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/support/test/BaseTests.kt)<br>[src/test/kotlin/support/test/web/servlet/Servlets.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/support/test/web/servlet/Servlets.kt) |
| security | 14 | [src/test/kotlin/support/security/EncryptsTest.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/support/security/EncryptsTest.kt)<br>[src/test/kotlin/apply/security/AccessorResolverTest.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/apply/security/AccessorResolverTest.kt)<br>[src/test/kotlin/apply/security/JwtTokenProviderTest.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/apply/security/JwtTokenProviderTest.kt)<br>[src/test/kotlin/apply/security/LoginMemberResolverTest.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/apply/security/LoginMemberResolverTest.kt)<br>[src/main/kotlin/support/security/Encrypts.kt](../../../../sources/woowacourse__service-apply/src/main/kotlin/support/security/Encrypts.kt)<br>[src/main/kotlin/apply/security/Accessor.kt](../../../../sources/woowacourse__service-apply/src/main/kotlin/apply/security/Accessor.kt)<br>[src/main/kotlin/apply/security/AccessorProperties.kt](../../../../sources/woowacourse__service-apply/src/main/kotlin/apply/security/AccessorProperties.kt)<br>[src/main/kotlin/apply/security/AccessorResolver.kt](../../../../sources/woowacourse__service-apply/src/main/kotlin/apply/security/AccessorResolver.kt) |
| ci | 0 | not obvious |
| container | 1 | [docker/docker-compose.yml](../../../../sources/woowacourse__service-apply/docker/docker-compose.yml) |
| instruction | 0 | not obvious |
| docs | 10 | [README.md](../../../../sources/woowacourse__service-apply/README.md)<br>[src/docs/asciidoc/agreement.adoc](../../../../sources/woowacourse__service-apply/src/docs/asciidoc/agreement.adoc)<br>[src/docs/asciidoc/application-form.adoc](../../../../sources/woowacourse__service-apply/src/docs/asciidoc/application-form.adoc)<br>[src/docs/asciidoc/assignment.adoc](../../../../sources/woowacourse__service-apply/src/docs/asciidoc/assignment.adoc)<br>[src/docs/asciidoc/index.adoc](../../../../sources/woowacourse__service-apply/src/docs/asciidoc/index.adoc)<br>[src/docs/asciidoc/judgment.adoc](../../../../sources/woowacourse__service-apply/src/docs/asciidoc/judgment.adoc)<br>[src/docs/asciidoc/member.adoc](../../../../sources/woowacourse__service-apply/src/docs/asciidoc/member.adoc)<br>[src/docs/asciidoc/mission.adoc](../../../../sources/woowacourse__service-apply/src/docs/asciidoc/mission.adoc) |
| config | 3 | [package.json](../../../../sources/woowacourse__service-apply/package.json)<br>[frontend/package.json](../../../../sources/woowacourse__service-apply/frontend/package.json)<br>[frontend/tsconfig.json](../../../../sources/woowacourse__service-apply/frontend/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 131 | [src/test/resources/another_evaluation.csv](../../../../sources/woowacourse__service-apply/src/test/resources/another_evaluation.csv)<br>[src/test/resources/evaluation_with_over_maximum_score.csv](../../../../sources/woowacourse__service-apply/src/test/resources/evaluation_with_over_maximum_score.csv)<br>[src/test/resources/evaluation.csv](../../../../sources/woowacourse__service-apply/src/test/resources/evaluation.csv)<br>[src/test/resources/status_ignore_case_evaluation.csv](../../../../sources/woowacourse__service-apply/src/test/resources/status_ignore_case_evaluation.csv)<br>[src/test/kotlin/support/MarkdownTest.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/support/MarkdownTest.kt)<br>[src/test/kotlin/support/views/IdFieldTest.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/support/views/IdFieldTest.kt) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 1 | [docker/docker-compose.yml](../../../../sources/woowacourse__service-apply/docker/docker-compose.yml) |
| Security / policy | 14 | [src/test/kotlin/support/security/EncryptsTest.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/support/security/EncryptsTest.kt)<br>[src/test/kotlin/apply/security/AccessorResolverTest.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/apply/security/AccessorResolverTest.kt)<br>[src/test/kotlin/apply/security/JwtTokenProviderTest.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/apply/security/JwtTokenProviderTest.kt)<br>[src/test/kotlin/apply/security/LoginMemberResolverTest.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/apply/security/LoginMemberResolverTest.kt)<br>[src/main/kotlin/support/security/Encrypts.kt](../../../../sources/woowacourse__service-apply/src/main/kotlin/support/security/Encrypts.kt)<br>[src/main/kotlin/apply/security/Accessor.kt](../../../../sources/woowacourse__service-apply/src/main/kotlin/apply/security/Accessor.kt) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `frontend/src/App.css`, `frontend/src/App.js`, `frontend/src/index.js`.
2. Trace execution through entrypoints: `frontend/src/App.css`, `frontend/src/App.js`, `frontend/src/index.js`.
3. Map agent/tool runtime through: `src/test/kotlin/support/test/context/event/Events.kt`, `src/test/kotlin/support/test/context/event/RecordEventsConfiguration.kt`, `frontend/src/hooks/useApplicationRegisterForm.js`.
4. Inspect retrieval/memory/indexing through: `src/docs/asciidoc/index.adoc`, `frontend/src/index.js`, `frontend/src/api/index.ts`.
5. Verify behavior through test/eval files: `src/test/resources/another_evaluation.csv`, `src/test/resources/evaluation_with_over_maximum_score.csv`, `src/test/resources/evaluation.csv`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 우아한테크코스 지원부터 최종 합격까지 모든 과정을 관리한다.. 핵심 구조 신호는 Kotlin, package.json, README.md, ci, docs, spec-artifacts이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
