# woowacourse/tecoble Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

우아한테크코스 코드리뷰 모음 공간

## 요약

- 조사 단위: `sources/woowacourse__tecoble` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,124 files, 23 directories, depth score 97, key references 9개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 config=package.json, tsconfig.json이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | woowacourse/tecoble |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 492 |
| Forks | 47 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/woowacourse__tecoble](../../../../sources/woowacourse__tecoble) |
| Existing report | [reports/korea-trending/repositories/woowacourse__tecoble.md](../../../korea-trending/repositories/woowacourse__tecoble.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1124 / 23 |
| Max observed depth | 5 |
| Top directories | _tags, .github, my-gatsby-site, src, static |
| Top extensions | .png: 625, .md: 254, .jpg: 111, .jpeg: 59, .tsx: 24, .gif: 21, (none): 8, .ts: 4, .js: 3, .json: 3, .svg: 3, .webp: 3 |
| Source patterns | retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 59 |
| _tags | top-level component | 1 |
| .github | ci surface | 1 |
| my-gatsby-site | documentation surface | 1 |
| static | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | gatsby build |
| serve-dev | package.json | dev | gatsby develop |
| quality | package.json | lint | eslint --ext .js,.ts,.tsx . |
| quality | package.json | lint:fix | eslint --fix --ext .js,.ts,.tsx . |
| serve-dev | package.json | start | npm run dev |
| test | package.json | test | echo "Error: no test specified" && exit 1 |
| build | package.json | deploy | gatsby build && gh-pages -d public -b build |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | react |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 8 | [src/templates/index.tsx](../../../../sources/woowacourse__tecoble/src/templates/index.tsx)<br>[src/layouts/index.tsx](../../../../sources/woowacourse__tecoble/src/layouts/index.tsx)<br>[src/content/teaser/covering-index.png](../../../../sources/woowacourse__tecoble/src/content/teaser/covering-index.png)<br>[src/content/teaser/db-index.png](../../../../sources/woowacourse__tecoble/src/content/teaser/db-index.png)<br>[src/content/post/2021-08-09-jvm-memory.md](../../../../sources/woowacourse__tecoble/src/content/post/2021-08-09-jvm-memory.md)<br>[src/content/post/2021-09-18-db-index.md](../../../../sources/woowacourse__tecoble/src/content/post/2021-09-18-db-index.md)<br>[src/content/post/2021-10-12-covering-index.md](../../../../sources/woowacourse__tecoble/src/content/post/2021-10-12-covering-index.md)<br>[src/content/images/2023-10-09-join-vs-multiple-performance_graph.png](../../../../sources/woowacourse__tecoble/src/content/images/2023-10-09-join-vs-multiple-performance_graph.png) |
| spec | 4 | [src/content/teaser/acceptance-test.png](../../../../sources/woowacourse__tecoble/src/content/teaser/acceptance-test.png)<br>[src/content/post/2021-05-25-unit-test-vs-integration-test-vs-acceptance-test.md](../../../../sources/woowacourse__tecoble/src/content/post/2021-05-25-unit-test-vs-integration-test-vs-acceptance-test.md)<br>[src/content/images/2021-04-25-layered-architecture.png](../../../../sources/woowacourse__tecoble/src/content/images/2021-04-25-layered-architecture.png)<br>[src/content/images/2023-06-28-jdbc-architecture.jpeg](../../../../sources/woowacourse__tecoble/src/content/images/2023-06-28-jdbc-architecture.jpeg) |
| eval | 45 | [src/content/teaser/acceptance-test.png](../../../../sources/woowacourse__tecoble/src/content/teaser/acceptance-test.png)<br>[src/content/teaser/frontend-test-automation.png](../../../../sources/woowacourse__tecoble/src/content/teaser/frontend-test-automation.png)<br>[src/content/teaser/java-monitor.png](../../../../sources/woowacourse__tecoble/src/content/teaser/java-monitor.png)<br>[src/content/teaser/slice-test.png](../../../../sources/woowacourse__tecoble/src/content/teaser/slice-test.png)<br>[src/content/teaser/test-case.png](../../../../sources/woowacourse__tecoble/src/content/teaser/test-case.png)<br>[src/content/teaser/test-double.jpg](../../../../sources/woowacourse__tecoble/src/content/teaser/test-double.jpg)<br>[src/content/teaser/test-scenario.png](../../../../sources/woowacourse__tecoble/src/content/teaser/test-scenario.png)<br>[src/content/teaser/test.jpeg](../../../../sources/woowacourse__tecoble/src/content/teaser/test.jpeg) |
| security | 5 | [src/content/teaser/oauth.jpeg](../../../../sources/woowacourse__tecoble/src/content/teaser/oauth.jpeg)<br>[src/content/teaser/spring-security.jpg](../../../../sources/woowacourse__tecoble/src/content/teaser/spring-security.jpg)<br>[src/content/post/2020-09-30-spring-security-test.md](../../../../sources/woowacourse__tecoble/src/content/post/2020-09-30-spring-security-test.md)<br>[src/content/post/2021-07-10-understanding-oauth.md](../../../../sources/woowacourse__tecoble/src/content/post/2021-07-10-understanding-oauth.md)<br>[src/content/post/2022-10-24-openID-Oauth.md](../../../../sources/woowacourse__tecoble/src/content/post/2022-10-24-openID-Oauth.md) |
| ci | 2 | [src/content/teaser/jenkins.png](../../../../sources/woowacourse__tecoble/src/content/teaser/jenkins.png)<br>[.github/workflows/gatsby-build.yml](../../../../sources/woowacourse__tecoble/.github/workflows/gatsby-build.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/woowacourse__tecoble/README.md) |
| config | 2 | [package.json](../../../../sources/woowacourse__tecoble/package.json)<br>[tsconfig.json](../../../../sources/woowacourse__tecoble/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 45 | [src/content/teaser/acceptance-test.png](../../../../sources/woowacourse__tecoble/src/content/teaser/acceptance-test.png)<br>[src/content/teaser/frontend-test-automation.png](../../../../sources/woowacourse__tecoble/src/content/teaser/frontend-test-automation.png)<br>[src/content/teaser/java-monitor.png](../../../../sources/woowacourse__tecoble/src/content/teaser/java-monitor.png)<br>[src/content/teaser/slice-test.png](../../../../sources/woowacourse__tecoble/src/content/teaser/slice-test.png)<br>[src/content/teaser/test-case.png](../../../../sources/woowacourse__tecoble/src/content/teaser/test-case.png)<br>[src/content/teaser/test-double.jpg](../../../../sources/woowacourse__tecoble/src/content/teaser/test-double.jpg) |
| CI workflows | 2 | [src/content/teaser/jenkins.png](../../../../sources/woowacourse__tecoble/src/content/teaser/jenkins.png)<br>[.github/workflows/gatsby-build.yml](../../../../sources/woowacourse__tecoble/.github/workflows/gatsby-build.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 5 | [src/content/teaser/oauth.jpeg](../../../../sources/woowacourse__tecoble/src/content/teaser/oauth.jpeg)<br>[src/content/teaser/spring-security.jpg](../../../../sources/woowacourse__tecoble/src/content/teaser/spring-security.jpg)<br>[src/content/post/2020-09-30-spring-security-test.md](../../../../sources/woowacourse__tecoble/src/content/post/2020-09-30-spring-security-test.md)<br>[src/content/post/2021-07-10-understanding-oauth.md](../../../../sources/woowacourse__tecoble/src/content/post/2021-07-10-understanding-oauth.md)<br>[src/content/post/2022-10-24-openID-Oauth.md](../../../../sources/woowacourse__tecoble/src/content/post/2022-10-24-openID-Oauth.md) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `package.json`, `tsconfig.json`, `README.md`.
2. Inspect retrieval/memory/indexing through: `src/templates/index.tsx`, `src/layouts/index.tsx`, `src/content/teaser/covering-index.png`.
3. Verify behavior through test/eval files: `src/content/teaser/acceptance-test.png`, `src/content/teaser/frontend-test-automation.png`, `src/content/teaser/java-monitor.png`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 우아한테크코스 코드리뷰 모음 공간. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, react, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
