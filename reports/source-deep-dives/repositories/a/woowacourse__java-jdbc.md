# woowacourse/java-jdbc Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

woowacourse/java-jdbc

## 요약

- 조사 단위: `sources/woowacourse__java-jdbc` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 138 files, 104 directories, depth score 62, key references 5개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 agent/tool runtime, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=README.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 5개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | woowacourse/java-jdbc |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | CSS |
| Stars | 11 |
| Forks | 376 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/woowacourse__java-jdbc](../../../../sources/woowacourse__java-jdbc) |
| Existing report | [reports/korea-trending/repositories/woowacourse__java-jdbc.md](../../../korea-trending/repositories/woowacourse__java-jdbc.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 138 / 104 |
| Max observed depth | 11 |
| Top directories | app, gradle, jdbc, mvc, study |
| Top extensions | .java: 105, .jsp: 6, .gradle: 5, .js: 4, (none): 4, .jspf: 2, .sql: 2, .bat: 1, .css: 1, .html: 1, .jar: 1, .md: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| app | top-level component | 1 |
| gradle | top-level component | 1 |
| jdbc | top-level component | 1 |
| mvc | top-level component | 1 |
| study | top-level component | 1 |


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
| docs | [README.md](../../../../sources/woowacourse__java-jdbc/README.md) | docs signal |
| eval | [study/src/test/java/transaction/stage2/FirstUserService.java](../../../../sources/woowacourse__java-jdbc/study/src/test/java/transaction/stage2/FirstUserService.java) | eval signal |
| eval | [study/src/test/java/transaction/stage2/SecondUserService.java](../../../../sources/woowacourse__java-jdbc/study/src/test/java/transaction/stage2/SecondUserService.java) | eval signal |
| eval | [study/src/test/java/transaction/stage2/Stage2Test.java](../../../../sources/woowacourse__java-jdbc/study/src/test/java/transaction/stage2/Stage2Test.java) | eval signal |
| eval | [study/src/test/java/transaction/stage2/User.java](../../../../sources/woowacourse__java-jdbc/study/src/test/java/transaction/stage2/User.java) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 2 | [mvc/src/main/java/com/interface21/context/stereotype/Controller.java](../../../../sources/woowacourse__java-jdbc/mvc/src/main/java/com/interface21/context/stereotype/Controller.java)<br>[app/src/main/java/com/techcourse/support/context/ContextLoaderListener.java](../../../../sources/woowacourse__java-jdbc/app/src/main/java/com/techcourse/support/context/ContextLoaderListener.java) |
| mcp | 0 | not obvious |
| retrieval | 2 | [app/src/main/webapp/index.html](../../../../sources/woowacourse__java-jdbc/app/src/main/webapp/index.html)<br>[app/src/main/webapp/index.jsp](../../../../sources/woowacourse__java-jdbc/app/src/main/webapp/index.jsp) |
| spec | 0 | not obvious |
| eval | 34 | [study/src/test/java/transaction/stage2/FirstUserService.java](../../../../sources/woowacourse__java-jdbc/study/src/test/java/transaction/stage2/FirstUserService.java)<br>[study/src/test/java/transaction/stage2/SecondUserService.java](../../../../sources/woowacourse__java-jdbc/study/src/test/java/transaction/stage2/SecondUserService.java)<br>[study/src/test/java/transaction/stage2/Stage2Test.java](../../../../sources/woowacourse__java-jdbc/study/src/test/java/transaction/stage2/Stage2Test.java)<br>[study/src/test/java/transaction/stage2/User.java](../../../../sources/woowacourse__java-jdbc/study/src/test/java/transaction/stage2/User.java)<br>[study/src/test/java/transaction/stage2/UserRepository.java](../../../../sources/woowacourse__java-jdbc/study/src/test/java/transaction/stage2/UserRepository.java)<br>[study/src/test/java/transaction/stage1/Stage1Test.java](../../../../sources/woowacourse__java-jdbc/study/src/test/java/transaction/stage1/Stage1Test.java)<br>[study/src/test/java/transaction/stage1/User.java](../../../../sources/woowacourse__java-jdbc/study/src/test/java/transaction/stage1/User.java)<br>[study/src/test/java/transaction/stage1/UserDao.java](../../../../sources/woowacourse__java-jdbc/study/src/test/java/transaction/stage1/UserDao.java) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/woowacourse__java-jdbc/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 34 | [study/src/test/java/transaction/stage2/FirstUserService.java](../../../../sources/woowacourse__java-jdbc/study/src/test/java/transaction/stage2/FirstUserService.java)<br>[study/src/test/java/transaction/stage2/SecondUserService.java](../../../../sources/woowacourse__java-jdbc/study/src/test/java/transaction/stage2/SecondUserService.java)<br>[study/src/test/java/transaction/stage2/Stage2Test.java](../../../../sources/woowacourse__java-jdbc/study/src/test/java/transaction/stage2/Stage2Test.java)<br>[study/src/test/java/transaction/stage2/User.java](../../../../sources/woowacourse__java-jdbc/study/src/test/java/transaction/stage2/User.java)<br>[study/src/test/java/transaction/stage2/UserRepository.java](../../../../sources/woowacourse__java-jdbc/study/src/test/java/transaction/stage2/UserRepository.java)<br>[study/src/test/java/transaction/stage1/Stage1Test.java](../../../../sources/woowacourse__java-jdbc/study/src/test/java/transaction/stage1/Stage1Test.java) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `README.md`, `study/src/test/java/transaction/stage2/FirstUserService.java`, `study/src/test/java/transaction/stage2/SecondUserService.java`.
2. Map agent/tool runtime through: `mvc/src/main/java/com/interface21/context/stereotype/Controller.java`, `app/src/main/java/com/techcourse/support/context/ContextLoaderListener.java`.
3. Inspect retrieval/memory/indexing through: `app/src/main/webapp/index.html`, `app/src/main/webapp/index.jsp`.
4. Verify behavior through test/eval files: `study/src/test/java/transaction/stage2/FirstUserService.java`, `study/src/test/java/transaction/stage2/SecondUserService.java`, `study/src/test/java/transaction/stage2/Stage2Test.java`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 CSS, README.md, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
