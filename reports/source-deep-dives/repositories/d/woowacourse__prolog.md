# woowacourse/prolog 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

우아한테크코스 크루들이 배운 내용을 기록하는 학습로그 저장소입니다.

## 요약

- 조사 단위: `sources/woowacourse__prolog` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 976 files, 285 directories, depth score 118, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=frontend/src/App.tsx, frontend/src/index.tsx, frontend/.storybook/main.js이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | woowacourse/prolog |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | Java |
| Stars | 202 |
| Forks | 29 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/woowacourse__prolog](../../../../sources/woowacourse__prolog) |
| 기존 보고서 | [reports/korea-trending/repositories/woowacourse__prolog.md](../../../korea-trending/repositories/woowacourse__prolog.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 976 / 285 |
| 관측 최대 깊이 | 11 |
| 상위 디렉터리 | .github, backend, frontend, gradle, terraform |
| 상위 확장자 | .java: 492, .ts: 151, .tsx: 113, .tf: 31, .js: 26, .feature: 23, .svg: 22, .png: 19, .yml: 17, .xml: 16, .sql: 15, .json: 12 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| backend | top-level component | 1 |
| frontend | top-level component | 1 |
| gradle | top-level component | 1 |
| terraform | top-level component | 1 |


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
| entrypoints | [frontend/src/App.tsx](../../../../sources/woowacourse__prolog/frontend/src/App.tsx) | entrypoints signal |
| entrypoints | [frontend/src/index.tsx](../../../../sources/woowacourse__prolog/frontend/src/index.tsx) | entrypoints signal |
| entrypoints | [frontend/.storybook/main.js](../../../../sources/woowacourse__prolog/frontend/.storybook/main.js) | entrypoints signal |
| config | [frontend/package.json](../../../../sources/woowacourse__prolog/frontend/package.json) | config signal |
| config | [frontend/tsconfig.json](../../../../sources/woowacourse__prolog/frontend/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/woowacourse__prolog/README.md) | docs signal |
| docs | [frontend/README.md](../../../../sources/woowacourse__prolog/frontend/README.md) | docs signal |
| docs | [backend/README.md](../../../../sources/woowacourse__prolog/backend/README.md) | docs signal |
| eval | [backend/src/test/resources/application.yml](../../../../sources/woowacourse__prolog/backend/src/test/resources/application.yml) | eval signal |
| eval | [backend/src/test/resources/rss/empty-feed.xml](../../../../sources/woowacourse__prolog/backend/src/test/resources/rss/empty-feed.xml) | eval signal |
| eval | [backend/src/test/resources/rss/tistory-feed.xml](../../../../sources/woowacourse__prolog/backend/src/test/resources/rss/tistory-feed.xml) | eval signal |
| eval | [backend/src/test/resources/rss/youtube-feed.xml](../../../../sources/woowacourse__prolog/backend/src/test/resources/rss/youtube-feed.xml) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [frontend/src/App.tsx](../../../../sources/woowacourse__prolog/frontend/src/App.tsx)<br>[frontend/src/index.tsx](../../../../sources/woowacourse__prolog/frontend/src/index.tsx)<br>[frontend/.storybook/main.js](../../../../sources/woowacourse__prolog/frontend/.storybook/main.js) |
| agentRuntime | 36 | [frontend/src/hooks/useBeforeunload.ts](../../../../sources/woowacourse__prolog/frontend/src/hooks/useBeforeunload.ts)<br>[frontend/src/hooks/useCustomSelectBox.ts](../../../../sources/woowacourse__prolog/frontend/src/hooks/useCustomSelectBox.ts)<br>[frontend/src/hooks/useFetch.js](../../../../sources/woowacourse__prolog/frontend/src/hooks/useFetch.js)<br>[frontend/src/hooks/useFilterWithParams.ts](../../../../sources/woowacourse__prolog/frontend/src/hooks/useFilterWithParams.ts)<br>[frontend/src/hooks/useImage.ts](../../../../sources/woowacourse__prolog/frontend/src/hooks/useImage.ts)<br>[frontend/src/hooks/useMutation.js](../../../../sources/woowacourse__prolog/frontend/src/hooks/useMutation.js)<br>[frontend/src/hooks/useNotFound.ts](../../../../sources/woowacourse__prolog/frontend/src/hooks/useNotFound.ts)<br>[frontend/src/hooks/useRequest.js](../../../../sources/woowacourse__prolog/frontend/src/hooks/useRequest.js) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 32 | [frontend/src/index.tsx](../../../../sources/woowacourse__prolog/frontend/src/index.tsx)<br>[frontend/src/redux/reducers/index.ts](../../../../sources/woowacourse__prolog/frontend/src/redux/reducers/index.ts)<br>[frontend/src/pages/index.ts](../../../../sources/woowacourse__prolog/frontend/src/pages/index.ts)<br>[frontend/src/pages/StudylogPage/index.tsx](../../../../sources/woowacourse__prolog/frontend/src/pages/StudylogPage/index.tsx)<br>[frontend/src/pages/StudylogListPage/index.tsx](../../../../sources/woowacourse__prolog/frontend/src/pages/StudylogListPage/index.tsx)<br>[frontend/src/pages/RoadmapPage/index.tsx](../../../../sources/woowacourse__prolog/frontend/src/pages/RoadmapPage/index.tsx)<br>[frontend/src/pages/QuizAnswerListPage/index.tsx](../../../../sources/woowacourse__prolog/frontend/src/pages/QuizAnswerListPage/index.tsx)<br>[frontend/src/pages/ProfilePageStudylogs/index.js](../../../../sources/woowacourse__prolog/frontend/src/pages/ProfilePageStudylogs/index.js) |
| spec | 68 | [frontend/src/pages/RoadmapPage/components/Roadmap/MainKeyword.tsx](../../../../sources/woowacourse__prolog/frontend/src/pages/RoadmapPage/components/Roadmap/MainKeyword.tsx)<br>[frontend/src/pages/RoadmapPage/components/Roadmap/Roadmap.tsx](../../../../sources/woowacourse__prolog/frontend/src/pages/RoadmapPage/components/Roadmap/Roadmap.tsx)<br>[frontend/src/pages/RoadmapPage/components/Roadmap/SubKeyword.tsx](../../../../sources/woowacourse__prolog/frontend/src/pages/RoadmapPage/components/Roadmap/SubKeyword.tsx)<br>[frontend/src/mocks/handlers/roadmap.ts](../../../../sources/woowacourse__prolog/frontend/src/mocks/handlers/roadmap.ts)<br>[frontend/src/mocks/fixtures/roadmap.ts](../../../../sources/woowacourse__prolog/frontend/src/mocks/fixtures/roadmap.ts)<br>[backend/src/test/java/wooteco/prolog/roadmap/repository/EssayAnswerRepositoryTest.java](../../../../sources/woowacourse__prolog/backend/src/test/java/wooteco/prolog/roadmap/repository/EssayAnswerRepositoryTest.java)<br>[backend/src/test/java/wooteco/prolog/roadmap/repository/KeywordRepositoryTest.java](../../../../sources/woowacourse__prolog/backend/src/test/java/wooteco/prolog/roadmap/repository/KeywordRepositoryTest.java)<br>[backend/src/test/java/wooteco/prolog/roadmap/repository/QuizRepositoryTest.java](../../../../sources/woowacourse__prolog/backend/src/test/java/wooteco/prolog/roadmap/repository/QuizRepositoryTest.java) |
| eval | 99 | [backend/src/test/resources/application.yml](../../../../sources/woowacourse__prolog/backend/src/test/resources/application.yml)<br>[backend/src/test/resources/rss/empty-feed.xml](../../../../sources/woowacourse__prolog/backend/src/test/resources/rss/empty-feed.xml)<br>[backend/src/test/resources/rss/tistory-feed.xml](../../../../sources/woowacourse__prolog/backend/src/test/resources/rss/tistory-feed.xml)<br>[backend/src/test/resources/rss/youtube-feed.xml](../../../../sources/woowacourse__prolog/backend/src/test/resources/rss/youtube-feed.xml)<br>[backend/src/test/java/wooteco/support/utils/RepositoryTest.java](../../../../sources/woowacourse__prolog/backend/src/test/java/wooteco/support/utils/RepositoryTest.java)<br>[backend/src/test/java/wooteco/support/autoceptor/AutoInterceptorPatternMakerTest.java](../../../../sources/woowacourse__prolog/backend/src/test/java/wooteco/support/autoceptor/AutoInterceptorPatternMakerTest.java)<br>[backend/src/test/java/wooteco/support/autoceptor/ClassScannerTest.java](../../../../sources/woowacourse__prolog/backend/src/test/java/wooteco/support/autoceptor/ClassScannerTest.java)<br>[backend/src/test/java/wooteco/support/autoceptor/ControllerScannerTest.java](../../../../sources/woowacourse__prolog/backend/src/test/java/wooteco/support/autoceptor/ControllerScannerTest.java) |
| security | 1 | [frontend/src/hooks/queries/auth.ts](../../../../sources/woowacourse__prolog/frontend/src/hooks/queries/auth.ts) |
| ci | 5 | [.github/workflows/back.yml](../../../../sources/woowacourse__prolog/.github/workflows/back.yml)<br>[.github/workflows/front-dev.yml](../../../../sources/woowacourse__prolog/.github/workflows/front-dev.yml)<br>[.github/workflows/front-prod.yml](../../../../sources/woowacourse__prolog/.github/workflows/front-prod.yml)<br>[.github/workflows/sonar-build.yml](../../../../sources/woowacourse__prolog/.github/workflows/sonar-build.yml)<br>[.github/workflows/terraform.yml](../../../../sources/woowacourse__prolog/.github/workflows/terraform.yml) |
| container | 6 | [frontend/src/components/Charts/Chart.styles.ts](../../../../sources/woowacourse__prolog/frontend/src/components/Charts/Chart.styles.ts)<br>[frontend/src/components/Charts/DonutChart.tsx](../../../../sources/woowacourse__prolog/frontend/src/components/Charts/DonutChart.tsx)<br>[frontend/src/components/Charts/DonutChartForm.styles.ts](../../../../sources/woowacourse__prolog/frontend/src/components/Charts/DonutChartForm.styles.ts)<br>[frontend/src/components/Charts/DonutChartForm.tsx](../../../../sources/woowacourse__prolog/frontend/src/components/Charts/DonutChartForm.tsx)<br>[backend/Dockerfile](../../../../sources/woowacourse__prolog/backend/Dockerfile)<br>[backend/docker/docker-compose.yml](../../../../sources/woowacourse__prolog/backend/docker/docker-compose.yml) |
| instruction | 0 | 명확하지 않음 |
| docs | 3 | [README.md](../../../../sources/woowacourse__prolog/README.md)<br>[frontend/README.md](../../../../sources/woowacourse__prolog/frontend/README.md)<br>[backend/README.md](../../../../sources/woowacourse__prolog/backend/README.md) |
| config | 2 | [frontend/package.json](../../../../sources/woowacourse__prolog/frontend/package.json)<br>[frontend/tsconfig.json](../../../../sources/woowacourse__prolog/frontend/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 99 | [backend/src/test/resources/application.yml](../../../../sources/woowacourse__prolog/backend/src/test/resources/application.yml)<br>[backend/src/test/resources/rss/empty-feed.xml](../../../../sources/woowacourse__prolog/backend/src/test/resources/rss/empty-feed.xml)<br>[backend/src/test/resources/rss/tistory-feed.xml](../../../../sources/woowacourse__prolog/backend/src/test/resources/rss/tistory-feed.xml)<br>[backend/src/test/resources/rss/youtube-feed.xml](../../../../sources/woowacourse__prolog/backend/src/test/resources/rss/youtube-feed.xml)<br>[backend/src/test/java/wooteco/support/utils/RepositoryTest.java](../../../../sources/woowacourse__prolog/backend/src/test/java/wooteco/support/utils/RepositoryTest.java)<br>[backend/src/test/java/wooteco/support/autoceptor/AutoInterceptorPatternMakerTest.java](../../../../sources/woowacourse__prolog/backend/src/test/java/wooteco/support/autoceptor/AutoInterceptorPatternMakerTest.java) |
| CI workflow | 5 | [.github/workflows/back.yml](../../../../sources/woowacourse__prolog/.github/workflows/back.yml)<br>[.github/workflows/front-dev.yml](../../../../sources/woowacourse__prolog/.github/workflows/front-dev.yml)<br>[.github/workflows/front-prod.yml](../../../../sources/woowacourse__prolog/.github/workflows/front-prod.yml)<br>[.github/workflows/sonar-build.yml](../../../../sources/woowacourse__prolog/.github/workflows/sonar-build.yml)<br>[.github/workflows/terraform.yml](../../../../sources/woowacourse__prolog/.github/workflows/terraform.yml) |
| 컨테이너/배포 | 6 | [frontend/src/components/Charts/Chart.styles.ts](../../../../sources/woowacourse__prolog/frontend/src/components/Charts/Chart.styles.ts)<br>[frontend/src/components/Charts/DonutChart.tsx](../../../../sources/woowacourse__prolog/frontend/src/components/Charts/DonutChart.tsx)<br>[frontend/src/components/Charts/DonutChartForm.styles.ts](../../../../sources/woowacourse__prolog/frontend/src/components/Charts/DonutChartForm.styles.ts)<br>[frontend/src/components/Charts/DonutChartForm.tsx](../../../../sources/woowacourse__prolog/frontend/src/components/Charts/DonutChartForm.tsx)<br>[backend/Dockerfile](../../../../sources/woowacourse__prolog/backend/Dockerfile)<br>[backend/docker/docker-compose.yml](../../../../sources/woowacourse__prolog/backend/docker/docker-compose.yml) |
| 보안/정책 | 1 | [frontend/src/hooks/queries/auth.ts](../../../../sources/woowacourse__prolog/frontend/src/hooks/queries/auth.ts) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `frontend/src/App.tsx`, `frontend/src/index.tsx`, `frontend/.storybook/main.js`.
2. entrypoint를 따라 실행 흐름 확인: `frontend/src/App.tsx`, `frontend/src/index.tsx`, `frontend/.storybook/main.js`.
3. agent/tool runtime 매핑: `frontend/src/hooks/useBeforeunload.ts`, `frontend/src/hooks/useCustomSelectBox.ts`, `frontend/src/hooks/useFetch.js`.
4. retrieval/memory/indexing 확인: `frontend/src/index.tsx`, `frontend/src/redux/reducers/index.ts`, `frontend/src/pages/index.ts`.
5. test/eval 파일로 동작 검증: `backend/src/test/resources/application.yml`, `backend/src/test/resources/rss/empty-feed.xml`, `backend/src/test/resources/rss/tistory-feed.xml`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 우아한테크코스 크루들이 배운 내용을 기록하는 학습로그 저장소입니다.. 핵심 구조 신호는 Java, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
