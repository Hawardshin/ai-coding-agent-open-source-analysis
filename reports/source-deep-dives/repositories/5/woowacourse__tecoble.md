# woowacourse/tecoble 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

우아한테크코스 코드리뷰 모음 공간

## 요약

- 조사 단위: `sources/woowacourse__tecoble` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,124 files, 23 directories, depth score 91, key references 9개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 config=package.json, tsconfig.json이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | woowacourse/tecoble |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 492 |
| Forks | 47 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/woowacourse__tecoble](../../../../sources/woowacourse__tecoble) |
| 기존 보고서 | [reports/korea-trending/repositories/woowacourse__tecoble.md](../../../korea-trending/repositories/woowacourse__tecoble.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1124 / 23 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | _tags, .github, my-gatsby-site, src, static |
| 상위 확장자 | .png: 625, .md: 254, .jpg: 111, .jpeg: 59, .tsx: 24, .gif: 21, (none): 8, .ts: 4, .js: 3, .json: 3, .svg: 3, .webp: 3 |
| 소스 패턴 | retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 59 |
| _tags | top-level component | 1 |
| .github | ci surface | 1 |
| my-gatsby-site | documentation surface | 1 |
| static | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | gatsby build |
| serve-dev | package.json | dev | gatsby develop |
| quality | package.json | lint | eslint --ext .js,.ts,.tsx . |
| quality | package.json | lint:fix | eslint --fix --ext .js,.ts,.tsx . |
| serve-dev | package.json | start | npm run dev |
| test | package.json | test | echo "Error: no test specified" && exit 1 |
| build | package.json | deploy | gatsby build && gh-pages -d public -b build |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | react |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| config | [package.json](../../../../sources/woowacourse__tecoble/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/woowacourse__tecoble/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/woowacourse__tecoble/README.md) | docs signal |
| eval | [src/content/teaser/acceptance-test.png](../../../../sources/woowacourse__tecoble/src/content/teaser/acceptance-test.png) | eval signal |
| eval | [src/content/teaser/frontend-test-automation.png](../../../../sources/woowacourse__tecoble/src/content/teaser/frontend-test-automation.png) | eval signal |
| eval | [src/content/teaser/java-monitor.png](../../../../sources/woowacourse__tecoble/src/content/teaser/java-monitor.png) | eval signal |
| eval | [src/content/teaser/slice-test.png](../../../../sources/woowacourse__tecoble/src/content/teaser/slice-test.png) | eval signal |
| ci | [src/content/teaser/jenkins.png](../../../../sources/woowacourse__tecoble/src/content/teaser/jenkins.png) | ci support |
| ci | [.github/workflows/gatsby-build.yml](../../../../sources/woowacourse__tecoble/.github/workflows/gatsby-build.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 8 | [src/templates/index.tsx](../../../../sources/woowacourse__tecoble/src/templates/index.tsx)<br>[src/layouts/index.tsx](../../../../sources/woowacourse__tecoble/src/layouts/index.tsx)<br>[src/content/teaser/covering-index.png](../../../../sources/woowacourse__tecoble/src/content/teaser/covering-index.png)<br>[src/content/teaser/db-index.png](../../../../sources/woowacourse__tecoble/src/content/teaser/db-index.png)<br>[src/content/post/2021-08-09-jvm-memory.md](../../../../sources/woowacourse__tecoble/src/content/post/2021-08-09-jvm-memory.md)<br>[src/content/post/2021-09-18-db-index.md](../../../../sources/woowacourse__tecoble/src/content/post/2021-09-18-db-index.md)<br>[src/content/post/2021-10-12-covering-index.md](../../../../sources/woowacourse__tecoble/src/content/post/2021-10-12-covering-index.md)<br>[src/content/images/2023-10-09-join-vs-multiple-performance_graph.png](../../../../sources/woowacourse__tecoble/src/content/images/2023-10-09-join-vs-multiple-performance_graph.png) |
| spec | 4 | [src/content/teaser/acceptance-test.png](../../../../sources/woowacourse__tecoble/src/content/teaser/acceptance-test.png)<br>[src/content/post/2021-05-25-unit-test-vs-integration-test-vs-acceptance-test.md](../../../../sources/woowacourse__tecoble/src/content/post/2021-05-25-unit-test-vs-integration-test-vs-acceptance-test.md)<br>[src/content/images/2021-04-25-layered-architecture.png](../../../../sources/woowacourse__tecoble/src/content/images/2021-04-25-layered-architecture.png)<br>[src/content/images/2023-06-28-jdbc-architecture.jpeg](../../../../sources/woowacourse__tecoble/src/content/images/2023-06-28-jdbc-architecture.jpeg) |
| eval | 45 | [src/content/teaser/acceptance-test.png](../../../../sources/woowacourse__tecoble/src/content/teaser/acceptance-test.png)<br>[src/content/teaser/frontend-test-automation.png](../../../../sources/woowacourse__tecoble/src/content/teaser/frontend-test-automation.png)<br>[src/content/teaser/java-monitor.png](../../../../sources/woowacourse__tecoble/src/content/teaser/java-monitor.png)<br>[src/content/teaser/slice-test.png](../../../../sources/woowacourse__tecoble/src/content/teaser/slice-test.png)<br>[src/content/teaser/test-case.png](../../../../sources/woowacourse__tecoble/src/content/teaser/test-case.png)<br>[src/content/teaser/test-double.jpg](../../../../sources/woowacourse__tecoble/src/content/teaser/test-double.jpg)<br>[src/content/teaser/test-scenario.png](../../../../sources/woowacourse__tecoble/src/content/teaser/test-scenario.png)<br>[src/content/teaser/test.jpeg](../../../../sources/woowacourse__tecoble/src/content/teaser/test.jpeg) |
| security | 5 | [src/content/teaser/oauth.jpeg](../../../../sources/woowacourse__tecoble/src/content/teaser/oauth.jpeg)<br>[src/content/teaser/spring-security.jpg](../../../../sources/woowacourse__tecoble/src/content/teaser/spring-security.jpg)<br>[src/content/post/2020-09-30-spring-security-test.md](../../../../sources/woowacourse__tecoble/src/content/post/2020-09-30-spring-security-test.md)<br>[src/content/post/2021-07-10-understanding-oauth.md](../../../../sources/woowacourse__tecoble/src/content/post/2021-07-10-understanding-oauth.md)<br>[src/content/post/2022-10-24-openID-Oauth.md](../../../../sources/woowacourse__tecoble/src/content/post/2022-10-24-openID-Oauth.md) |
| ci | 2 | [src/content/teaser/jenkins.png](../../../../sources/woowacourse__tecoble/src/content/teaser/jenkins.png)<br>[.github/workflows/gatsby-build.yml](../../../../sources/woowacourse__tecoble/.github/workflows/gatsby-build.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/woowacourse__tecoble/README.md) |
| config | 2 | [package.json](../../../../sources/woowacourse__tecoble/package.json)<br>[tsconfig.json](../../../../sources/woowacourse__tecoble/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 45 | [src/content/teaser/acceptance-test.png](../../../../sources/woowacourse__tecoble/src/content/teaser/acceptance-test.png)<br>[src/content/teaser/frontend-test-automation.png](../../../../sources/woowacourse__tecoble/src/content/teaser/frontend-test-automation.png)<br>[src/content/teaser/java-monitor.png](../../../../sources/woowacourse__tecoble/src/content/teaser/java-monitor.png)<br>[src/content/teaser/slice-test.png](../../../../sources/woowacourse__tecoble/src/content/teaser/slice-test.png)<br>[src/content/teaser/test-case.png](../../../../sources/woowacourse__tecoble/src/content/teaser/test-case.png)<br>[src/content/teaser/test-double.jpg](../../../../sources/woowacourse__tecoble/src/content/teaser/test-double.jpg) |
| CI workflow | 2 | [src/content/teaser/jenkins.png](../../../../sources/woowacourse__tecoble/src/content/teaser/jenkins.png)<br>[.github/workflows/gatsby-build.yml](../../../../sources/woowacourse__tecoble/.github/workflows/gatsby-build.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 5 | [src/content/teaser/oauth.jpeg](../../../../sources/woowacourse__tecoble/src/content/teaser/oauth.jpeg)<br>[src/content/teaser/spring-security.jpg](../../../../sources/woowacourse__tecoble/src/content/teaser/spring-security.jpg)<br>[src/content/post/2020-09-30-spring-security-test.md](../../../../sources/woowacourse__tecoble/src/content/post/2020-09-30-spring-security-test.md)<br>[src/content/post/2021-07-10-understanding-oauth.md](../../../../sources/woowacourse__tecoble/src/content/post/2021-07-10-understanding-oauth.md)<br>[src/content/post/2022-10-24-openID-Oauth.md](../../../../sources/woowacourse__tecoble/src/content/post/2022-10-24-openID-Oauth.md) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `package.json`, `tsconfig.json`, `README.md`.
2. retrieval/memory/indexing 확인: `src/templates/index.tsx`, `src/layouts/index.tsx`, `src/content/teaser/covering-index.png`.
3. test/eval 파일로 동작 검증: `src/content/teaser/acceptance-test.png`, `src/content/teaser/frontend-test-automation.png`, `src/content/teaser/java-monitor.png`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 우아한테크코스 코드리뷰 모음 공간. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, react, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
