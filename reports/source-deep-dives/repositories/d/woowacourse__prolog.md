# woowacourse/prolog Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

우아한테크코스 크루들이 배운 내용을 기록하는 학습로그 저장소입니다.

## 요약

- 조사 단위: `sources/woowacourse__prolog` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 976 files, 285 directories, depth score 124, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=frontend/src/App.tsx, frontend/src/index.tsx, frontend/.storybook/main.js이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | woowacourse/prolog |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Java |
| Stars | 202 |
| Forks | 29 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/woowacourse__prolog](../../../../sources/woowacourse__prolog) |
| Existing report | [reports/korea-trending/repositories/woowacourse__prolog.md](../../../korea-trending/repositories/woowacourse__prolog.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 976 / 285 |
| Max observed depth | 11 |
| Top directories | .github, backend, frontend, gradle, terraform |
| Top extensions | .java: 492, .ts: 151, .tsx: 113, .tf: 31, .js: 26, .feature: 23, .svg: 22, .png: 19, .yml: 17, .xml: 16, .sql: 15, .json: 12 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| backend | top-level component | 1 |
| frontend | top-level component | 1 |
| gradle | top-level component | 1 |
| terraform | top-level component | 1 |


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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [frontend/src/App.tsx](../../../../sources/woowacourse__prolog/frontend/src/App.tsx)<br>[frontend/src/index.tsx](../../../../sources/woowacourse__prolog/frontend/src/index.tsx)<br>[frontend/.storybook/main.js](../../../../sources/woowacourse__prolog/frontend/.storybook/main.js) |
| agentRuntime | 36 | [frontend/src/hooks/useBeforeunload.ts](../../../../sources/woowacourse__prolog/frontend/src/hooks/useBeforeunload.ts)<br>[frontend/src/hooks/useCustomSelectBox.ts](../../../../sources/woowacourse__prolog/frontend/src/hooks/useCustomSelectBox.ts)<br>[frontend/src/hooks/useFetch.js](../../../../sources/woowacourse__prolog/frontend/src/hooks/useFetch.js)<br>[frontend/src/hooks/useFilterWithParams.ts](../../../../sources/woowacourse__prolog/frontend/src/hooks/useFilterWithParams.ts)<br>[frontend/src/hooks/useImage.ts](../../../../sources/woowacourse__prolog/frontend/src/hooks/useImage.ts)<br>[frontend/src/hooks/useMutation.js](../../../../sources/woowacourse__prolog/frontend/src/hooks/useMutation.js)<br>[frontend/src/hooks/useNotFound.ts](../../../../sources/woowacourse__prolog/frontend/src/hooks/useNotFound.ts)<br>[frontend/src/hooks/useRequest.js](../../../../sources/woowacourse__prolog/frontend/src/hooks/useRequest.js) |
| mcp | 0 | not obvious |
| retrieval | 32 | [frontend/src/index.tsx](../../../../sources/woowacourse__prolog/frontend/src/index.tsx)<br>[frontend/src/redux/reducers/index.ts](../../../../sources/woowacourse__prolog/frontend/src/redux/reducers/index.ts)<br>[frontend/src/pages/index.ts](../../../../sources/woowacourse__prolog/frontend/src/pages/index.ts)<br>[frontend/src/pages/StudylogPage/index.tsx](../../../../sources/woowacourse__prolog/frontend/src/pages/StudylogPage/index.tsx)<br>[frontend/src/pages/StudylogListPage/index.tsx](../../../../sources/woowacourse__prolog/frontend/src/pages/StudylogListPage/index.tsx)<br>[frontend/src/pages/RoadmapPage/index.tsx](../../../../sources/woowacourse__prolog/frontend/src/pages/RoadmapPage/index.tsx)<br>[frontend/src/pages/QuizAnswerListPage/index.tsx](../../../../sources/woowacourse__prolog/frontend/src/pages/QuizAnswerListPage/index.tsx)<br>[frontend/src/pages/ProfilePageStudylogs/index.js](../../../../sources/woowacourse__prolog/frontend/src/pages/ProfilePageStudylogs/index.js) |
| spec | 68 | [frontend/src/pages/RoadmapPage/components/Roadmap/MainKeyword.tsx](../../../../sources/woowacourse__prolog/frontend/src/pages/RoadmapPage/components/Roadmap/MainKeyword.tsx)<br>[frontend/src/pages/RoadmapPage/components/Roadmap/Roadmap.tsx](../../../../sources/woowacourse__prolog/frontend/src/pages/RoadmapPage/components/Roadmap/Roadmap.tsx)<br>[frontend/src/pages/RoadmapPage/components/Roadmap/SubKeyword.tsx](../../../../sources/woowacourse__prolog/frontend/src/pages/RoadmapPage/components/Roadmap/SubKeyword.tsx)<br>[frontend/src/mocks/handlers/roadmap.ts](../../../../sources/woowacourse__prolog/frontend/src/mocks/handlers/roadmap.ts)<br>[frontend/src/mocks/fixtures/roadmap.ts](../../../../sources/woowacourse__prolog/frontend/src/mocks/fixtures/roadmap.ts)<br>[backend/src/test/java/wooteco/prolog/roadmap/repository/EssayAnswerRepositoryTest.java](../../../../sources/woowacourse__prolog/backend/src/test/java/wooteco/prolog/roadmap/repository/EssayAnswerRepositoryTest.java)<br>[backend/src/test/java/wooteco/prolog/roadmap/repository/KeywordRepositoryTest.java](../../../../sources/woowacourse__prolog/backend/src/test/java/wooteco/prolog/roadmap/repository/KeywordRepositoryTest.java)<br>[backend/src/test/java/wooteco/prolog/roadmap/repository/QuizRepositoryTest.java](../../../../sources/woowacourse__prolog/backend/src/test/java/wooteco/prolog/roadmap/repository/QuizRepositoryTest.java) |
| eval | 99 | [backend/src/test/resources/application.yml](../../../../sources/woowacourse__prolog/backend/src/test/resources/application.yml)<br>[backend/src/test/resources/rss/empty-feed.xml](../../../../sources/woowacourse__prolog/backend/src/test/resources/rss/empty-feed.xml)<br>[backend/src/test/resources/rss/tistory-feed.xml](../../../../sources/woowacourse__prolog/backend/src/test/resources/rss/tistory-feed.xml)<br>[backend/src/test/resources/rss/youtube-feed.xml](../../../../sources/woowacourse__prolog/backend/src/test/resources/rss/youtube-feed.xml)<br>[backend/src/test/java/wooteco/support/utils/RepositoryTest.java](../../../../sources/woowacourse__prolog/backend/src/test/java/wooteco/support/utils/RepositoryTest.java)<br>[backend/src/test/java/wooteco/support/autoceptor/AutoInterceptorPatternMakerTest.java](../../../../sources/woowacourse__prolog/backend/src/test/java/wooteco/support/autoceptor/AutoInterceptorPatternMakerTest.java)<br>[backend/src/test/java/wooteco/support/autoceptor/ClassScannerTest.java](../../../../sources/woowacourse__prolog/backend/src/test/java/wooteco/support/autoceptor/ClassScannerTest.java)<br>[backend/src/test/java/wooteco/support/autoceptor/ControllerScannerTest.java](../../../../sources/woowacourse__prolog/backend/src/test/java/wooteco/support/autoceptor/ControllerScannerTest.java) |
| security | 1 | [frontend/src/hooks/queries/auth.ts](../../../../sources/woowacourse__prolog/frontend/src/hooks/queries/auth.ts) |
| ci | 5 | [.github/workflows/back.yml](../../../../sources/woowacourse__prolog/.github/workflows/back.yml)<br>[.github/workflows/front-dev.yml](../../../../sources/woowacourse__prolog/.github/workflows/front-dev.yml)<br>[.github/workflows/front-prod.yml](../../../../sources/woowacourse__prolog/.github/workflows/front-prod.yml)<br>[.github/workflows/sonar-build.yml](../../../../sources/woowacourse__prolog/.github/workflows/sonar-build.yml)<br>[.github/workflows/terraform.yml](../../../../sources/woowacourse__prolog/.github/workflows/terraform.yml) |
| container | 6 | [frontend/src/components/Charts/Chart.styles.ts](../../../../sources/woowacourse__prolog/frontend/src/components/Charts/Chart.styles.ts)<br>[frontend/src/components/Charts/DonutChart.tsx](../../../../sources/woowacourse__prolog/frontend/src/components/Charts/DonutChart.tsx)<br>[frontend/src/components/Charts/DonutChartForm.styles.ts](../../../../sources/woowacourse__prolog/frontend/src/components/Charts/DonutChartForm.styles.ts)<br>[frontend/src/components/Charts/DonutChartForm.tsx](../../../../sources/woowacourse__prolog/frontend/src/components/Charts/DonutChartForm.tsx)<br>[backend/Dockerfile](../../../../sources/woowacourse__prolog/backend/Dockerfile)<br>[backend/docker/docker-compose.yml](../../../../sources/woowacourse__prolog/backend/docker/docker-compose.yml) |
| instruction | 0 | not obvious |
| docs | 3 | [README.md](../../../../sources/woowacourse__prolog/README.md)<br>[frontend/README.md](../../../../sources/woowacourse__prolog/frontend/README.md)<br>[backend/README.md](../../../../sources/woowacourse__prolog/backend/README.md) |
| config | 2 | [frontend/package.json](../../../../sources/woowacourse__prolog/frontend/package.json)<br>[frontend/tsconfig.json](../../../../sources/woowacourse__prolog/frontend/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 99 | [backend/src/test/resources/application.yml](../../../../sources/woowacourse__prolog/backend/src/test/resources/application.yml)<br>[backend/src/test/resources/rss/empty-feed.xml](../../../../sources/woowacourse__prolog/backend/src/test/resources/rss/empty-feed.xml)<br>[backend/src/test/resources/rss/tistory-feed.xml](../../../../sources/woowacourse__prolog/backend/src/test/resources/rss/tistory-feed.xml)<br>[backend/src/test/resources/rss/youtube-feed.xml](../../../../sources/woowacourse__prolog/backend/src/test/resources/rss/youtube-feed.xml)<br>[backend/src/test/java/wooteco/support/utils/RepositoryTest.java](../../../../sources/woowacourse__prolog/backend/src/test/java/wooteco/support/utils/RepositoryTest.java)<br>[backend/src/test/java/wooteco/support/autoceptor/AutoInterceptorPatternMakerTest.java](../../../../sources/woowacourse__prolog/backend/src/test/java/wooteco/support/autoceptor/AutoInterceptorPatternMakerTest.java) |
| CI workflows | 5 | [.github/workflows/back.yml](../../../../sources/woowacourse__prolog/.github/workflows/back.yml)<br>[.github/workflows/front-dev.yml](../../../../sources/woowacourse__prolog/.github/workflows/front-dev.yml)<br>[.github/workflows/front-prod.yml](../../../../sources/woowacourse__prolog/.github/workflows/front-prod.yml)<br>[.github/workflows/sonar-build.yml](../../../../sources/woowacourse__prolog/.github/workflows/sonar-build.yml)<br>[.github/workflows/terraform.yml](../../../../sources/woowacourse__prolog/.github/workflows/terraform.yml) |
| Containers / deploy | 6 | [frontend/src/components/Charts/Chart.styles.ts](../../../../sources/woowacourse__prolog/frontend/src/components/Charts/Chart.styles.ts)<br>[frontend/src/components/Charts/DonutChart.tsx](../../../../sources/woowacourse__prolog/frontend/src/components/Charts/DonutChart.tsx)<br>[frontend/src/components/Charts/DonutChartForm.styles.ts](../../../../sources/woowacourse__prolog/frontend/src/components/Charts/DonutChartForm.styles.ts)<br>[frontend/src/components/Charts/DonutChartForm.tsx](../../../../sources/woowacourse__prolog/frontend/src/components/Charts/DonutChartForm.tsx)<br>[backend/Dockerfile](../../../../sources/woowacourse__prolog/backend/Dockerfile)<br>[backend/docker/docker-compose.yml](../../../../sources/woowacourse__prolog/backend/docker/docker-compose.yml) |
| Security / policy | 1 | [frontend/src/hooks/queries/auth.ts](../../../../sources/woowacourse__prolog/frontend/src/hooks/queries/auth.ts) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `frontend/src/App.tsx`, `frontend/src/index.tsx`, `frontend/.storybook/main.js`.
2. Trace execution through entrypoints: `frontend/src/App.tsx`, `frontend/src/index.tsx`, `frontend/.storybook/main.js`.
3. Map agent/tool runtime through: `frontend/src/hooks/useBeforeunload.ts`, `frontend/src/hooks/useCustomSelectBox.ts`, `frontend/src/hooks/useFetch.js`.
4. Inspect retrieval/memory/indexing through: `frontend/src/index.tsx`, `frontend/src/redux/reducers/index.ts`, `frontend/src/pages/index.ts`.
5. Verify behavior through test/eval files: `backend/src/test/resources/application.yml`, `backend/src/test/resources/rss/empty-feed.xml`, `backend/src/test/resources/rss/tistory-feed.xml`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 우아한테크코스 크루들이 배운 내용을 기록하는 학습로그 저장소입니다.. 핵심 구조 신호는 Java, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
