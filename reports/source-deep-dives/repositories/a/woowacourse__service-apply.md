# woowacourse/service-apply 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

우아한테크코스 지원부터 최종 합격까지 모든 과정을 관리한다.

## 요약

- 조사 단위: `sources/woowacourse__service-apply` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 618 files, 200 directories, depth score 112, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=frontend/src/App.css, frontend/src/App.js, frontend/src/index.js이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | woowacourse/service-apply |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | Kotlin |
| Stars | 580 |
| Forks | 100 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/woowacourse__service-apply](../../../../sources/woowacourse__service-apply) |
| 기존 보고서 | [reports/korea-trending/repositories/woowacourse__service-apply.md](../../../korea-trending/repositories/woowacourse__service-apply.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 618 / 200 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .ebextensions, .github, .platform, docker, frontend, gradle, scripts, src |
| 상위 확장자 | .kt: 315, .tsx: 72, .ts: 55, .css: 50, .js: 46, .sql: 15, .adoc: 8, .png: 7, .html: 5, .json: 5, .properties: 5, .svg: 5 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 70 |
| .github | ci surface | 1 |
| docker | documentation surface | 1 |
| frontend | top-level component | 1 |
| gradle | top-level component | 1 |
| scripts | top-level component | 1 |


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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [frontend/src/App.css](../../../../sources/woowacourse__service-apply/frontend/src/App.css)<br>[frontend/src/App.js](../../../../sources/woowacourse__service-apply/frontend/src/App.js)<br>[frontend/src/index.js](../../../../sources/woowacourse__service-apply/frontend/src/index.js)<br>[frontend/.storybook/main.js](../../../../sources/woowacourse__service-apply/frontend/.storybook/main.js) |
| agentRuntime | 25 | [src/test/kotlin/support/test/context/event/Events.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/support/test/context/event/Events.kt)<br>[src/test/kotlin/support/test/context/event/RecordEventsConfiguration.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/support/test/context/event/RecordEventsConfiguration.kt)<br>[frontend/src/hooks/useApplicationRegisterForm.js](../../../../sources/woowacourse__service-apply/frontend/src/hooks/useApplicationRegisterForm.js)<br>[frontend/src/hooks/useAssignmentForm.js](../../../../sources/woowacourse__service-apply/frontend/src/hooks/useAssignmentForm.js)<br>[frontend/src/hooks/useAuth.js](../../../../sources/woowacourse__service-apply/frontend/src/hooks/useAuth.js)<br>[frontend/src/hooks/useInterval.js](../../../../sources/woowacourse__service-apply/frontend/src/hooks/useInterval.js)<br>[frontend/src/hooks/useLanguageSwitcher.ts](../../../../sources/woowacourse__service-apply/frontend/src/hooks/useLanguageSwitcher.ts)<br>[frontend/src/hooks/useLoginForm.js](../../../../sources/woowacourse__service-apply/frontend/src/hooks/useLoginForm.js) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 4 | [src/docs/asciidoc/index.adoc](../../../../sources/woowacourse__service-apply/src/docs/asciidoc/index.adoc)<br>[frontend/src/index.js](../../../../sources/woowacourse__service-apply/frontend/src/index.js)<br>[frontend/src/api/index.ts](../../../../sources/woowacourse__service-apply/frontend/src/api/index.ts)<br>[frontend/public/index.html](../../../../sources/woowacourse__service-apply/frontend/public/index.html) |
| spec | 4 | [src/test/kotlin/support/test/spec/Specs.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/support/test/spec/Specs.kt)<br>[src/test/kotlin/apply/acceptance/AcceptanceDsl.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/apply/acceptance/AcceptanceDsl.kt)<br>[src/test/kotlin/apply/acceptance/AcceptanceDslTest.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/apply/acceptance/AcceptanceDslTest.kt)<br>[src/test/kotlin/apply/acceptance/AcceptanceTest.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/apply/acceptance/AcceptanceTest.kt) |
| eval | 131 | [src/test/resources/another_evaluation.csv](../../../../sources/woowacourse__service-apply/src/test/resources/another_evaluation.csv)<br>[src/test/resources/evaluation_with_over_maximum_score.csv](../../../../sources/woowacourse__service-apply/src/test/resources/evaluation_with_over_maximum_score.csv)<br>[src/test/resources/evaluation.csv](../../../../sources/woowacourse__service-apply/src/test/resources/evaluation.csv)<br>[src/test/resources/status_ignore_case_evaluation.csv](../../../../sources/woowacourse__service-apply/src/test/resources/status_ignore_case_evaluation.csv)<br>[src/test/kotlin/support/MarkdownTest.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/support/MarkdownTest.kt)<br>[src/test/kotlin/support/views/IdFieldTest.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/support/views/IdFieldTest.kt)<br>[src/test/kotlin/support/test/BaseTests.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/support/test/BaseTests.kt)<br>[src/test/kotlin/support/test/web/servlet/Servlets.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/support/test/web/servlet/Servlets.kt) |
| security | 14 | [src/test/kotlin/support/security/EncryptsTest.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/support/security/EncryptsTest.kt)<br>[src/test/kotlin/apply/security/AccessorResolverTest.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/apply/security/AccessorResolverTest.kt)<br>[src/test/kotlin/apply/security/JwtTokenProviderTest.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/apply/security/JwtTokenProviderTest.kt)<br>[src/test/kotlin/apply/security/LoginMemberResolverTest.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/apply/security/LoginMemberResolverTest.kt)<br>[src/main/kotlin/support/security/Encrypts.kt](../../../../sources/woowacourse__service-apply/src/main/kotlin/support/security/Encrypts.kt)<br>[src/main/kotlin/apply/security/Accessor.kt](../../../../sources/woowacourse__service-apply/src/main/kotlin/apply/security/Accessor.kt)<br>[src/main/kotlin/apply/security/AccessorProperties.kt](../../../../sources/woowacourse__service-apply/src/main/kotlin/apply/security/AccessorProperties.kt)<br>[src/main/kotlin/apply/security/AccessorResolver.kt](../../../../sources/woowacourse__service-apply/src/main/kotlin/apply/security/AccessorResolver.kt) |
| ci | 0 | 명확하지 않음 |
| container | 1 | [docker/docker-compose.yml](../../../../sources/woowacourse__service-apply/docker/docker-compose.yml) |
| instruction | 0 | 명확하지 않음 |
| docs | 10 | [README.md](../../../../sources/woowacourse__service-apply/README.md)<br>[src/docs/asciidoc/agreement.adoc](../../../../sources/woowacourse__service-apply/src/docs/asciidoc/agreement.adoc)<br>[src/docs/asciidoc/application-form.adoc](../../../../sources/woowacourse__service-apply/src/docs/asciidoc/application-form.adoc)<br>[src/docs/asciidoc/assignment.adoc](../../../../sources/woowacourse__service-apply/src/docs/asciidoc/assignment.adoc)<br>[src/docs/asciidoc/index.adoc](../../../../sources/woowacourse__service-apply/src/docs/asciidoc/index.adoc)<br>[src/docs/asciidoc/judgment.adoc](../../../../sources/woowacourse__service-apply/src/docs/asciidoc/judgment.adoc)<br>[src/docs/asciidoc/member.adoc](../../../../sources/woowacourse__service-apply/src/docs/asciidoc/member.adoc)<br>[src/docs/asciidoc/mission.adoc](../../../../sources/woowacourse__service-apply/src/docs/asciidoc/mission.adoc) |
| config | 3 | [package.json](../../../../sources/woowacourse__service-apply/package.json)<br>[frontend/package.json](../../../../sources/woowacourse__service-apply/frontend/package.json)<br>[frontend/tsconfig.json](../../../../sources/woowacourse__service-apply/frontend/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 131 | [src/test/resources/another_evaluation.csv](../../../../sources/woowacourse__service-apply/src/test/resources/another_evaluation.csv)<br>[src/test/resources/evaluation_with_over_maximum_score.csv](../../../../sources/woowacourse__service-apply/src/test/resources/evaluation_with_over_maximum_score.csv)<br>[src/test/resources/evaluation.csv](../../../../sources/woowacourse__service-apply/src/test/resources/evaluation.csv)<br>[src/test/resources/status_ignore_case_evaluation.csv](../../../../sources/woowacourse__service-apply/src/test/resources/status_ignore_case_evaluation.csv)<br>[src/test/kotlin/support/MarkdownTest.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/support/MarkdownTest.kt)<br>[src/test/kotlin/support/views/IdFieldTest.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/support/views/IdFieldTest.kt) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 1 | [docker/docker-compose.yml](../../../../sources/woowacourse__service-apply/docker/docker-compose.yml) |
| 보안/정책 | 14 | [src/test/kotlin/support/security/EncryptsTest.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/support/security/EncryptsTest.kt)<br>[src/test/kotlin/apply/security/AccessorResolverTest.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/apply/security/AccessorResolverTest.kt)<br>[src/test/kotlin/apply/security/JwtTokenProviderTest.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/apply/security/JwtTokenProviderTest.kt)<br>[src/test/kotlin/apply/security/LoginMemberResolverTest.kt](../../../../sources/woowacourse__service-apply/src/test/kotlin/apply/security/LoginMemberResolverTest.kt)<br>[src/main/kotlin/support/security/Encrypts.kt](../../../../sources/woowacourse__service-apply/src/main/kotlin/support/security/Encrypts.kt)<br>[src/main/kotlin/apply/security/Accessor.kt](../../../../sources/woowacourse__service-apply/src/main/kotlin/apply/security/Accessor.kt) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `frontend/src/App.css`, `frontend/src/App.js`, `frontend/src/index.js`.
2. entrypoint를 따라 실행 흐름 확인: `frontend/src/App.css`, `frontend/src/App.js`, `frontend/src/index.js`.
3. agent/tool runtime 매핑: `src/test/kotlin/support/test/context/event/Events.kt`, `src/test/kotlin/support/test/context/event/RecordEventsConfiguration.kt`, `frontend/src/hooks/useApplicationRegisterForm.js`.
4. retrieval/memory/indexing 확인: `src/docs/asciidoc/index.adoc`, `frontend/src/index.js`, `frontend/src/api/index.ts`.
5. test/eval 파일로 동작 검증: `src/test/resources/another_evaluation.csv`, `src/test/resources/evaluation_with_over_maximum_score.csv`, `src/test/resources/evaluation.csv`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 우아한테크코스 지원부터 최종 합격까지 모든 과정을 관리한다.. 핵심 구조 신호는 Kotlin, package.json, README.md, ci, docs, spec-artifacts이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
