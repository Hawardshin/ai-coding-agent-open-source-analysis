# kakao/actionbase Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

One database for user-user (follows), user-item (likes), and item-item (related items) interactions — precomputed, served in real-time

## 요약

- 조사 단위: `sources/kakao__actionbase` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,294 files, 496 directories, depth score 124, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

데이터/벡터 플랫폼 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=website/src/content/docs/index.mdx, website/src/content/docs/stories/index.mdx, website/src/content/docs/stories/vision/unified-graph.mdx이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | kakao/actionbase |
| Topic | Data and Vector Platforms / 데이터/벡터 플랫폼 |
| Region | korea |
| Language | Kotlin |
| Stars | 220 |
| Forks | 15 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/kakao__actionbase](../../../../sources/kakao__actionbase) |
| Existing report | [reports/korea-trending/repositories/kakao__actionbase.md](../../../korea-trending/repositories/kakao__actionbase.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1294 / 496 |
| Max observed depth | 13 |
| Top directories | .github, bin, cli, codec-java, conventions, core, core-java, dev, docker, engine, Formula, gradle, guides, pipeline, platform, server, tools, website |
| Top extensions | .kt: 513, .java: 364, .mdx: 71, .go: 45, .scala: 43, .astro: 30, .ts: 30, .md: 25, .png: 21, .tsx: 21, (none): 20, .css: 17 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| server | source boundary | 53 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| cli | top-level component | 1 |
| codec-java | top-level component | 1 |
| conventions | top-level component | 1 |
| core | top-level component | 1 |
| core-java | top-level component | 1 |
| dev | top-level component | 1 |
| docker | documentation surface | 1 |
| engine | top-level component | 1 |
| Formula | top-level component | 1 |
| gradle | top-level component | 1 |
| guides | top-level component | 1 |
| pipeline | top-level component | 1 |
| platform | top-level component | 1 |
| tools | top-level component | 1 |
| website | documentation surface | 1 |


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
| retrieval | [website/src/content/docs/index.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/index.mdx) | retrieval signal |
| retrieval | [website/src/content/docs/stories/index.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/stories/index.mdx) | retrieval signal |
| retrieval | [website/src/content/docs/stories/vision/unified-graph.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/stories/vision/unified-graph.mdx) | retrieval signal |
| retrieval | [website/src/content/docs/stories/how-we-survived/index.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/stories/how-we-survived/index.mdx) | retrieval signal |
| entrypoints | [guides/build-your-social-app/src/App.tsx](../../../../sources/kakao__actionbase/guides/build-your-social-app/src/App.tsx) | entrypoints signal |
| entrypoints | [guides/build-your-social-app/src/index.tsx](../../../../sources/kakao__actionbase/guides/build-your-social-app/src/index.tsx) | entrypoints signal |
| entrypoints | [cli/internal/httpserver/server.go](../../../../sources/kakao__actionbase/cli/internal/httpserver/server.go) | entrypoints signal |
| entrypoints | [cli/cmd/actionbase/main.go](../../../../sources/kakao__actionbase/cli/cmd/actionbase/main.go) | entrypoints signal |
| container | [docker/standalone/Dockerfile](../../../../sources/kakao__actionbase/docker/standalone/Dockerfile) | container signal |
| container | [dev/hbase/docker-compose.local.yml](../../../../sources/kakao__actionbase/dev/hbase/docker-compose.local.yml) | container signal |
| container | [dev/hbase/docker-compose.yml](../../../../sources/kakao__actionbase/dev/hbase/docker-compose.yml) | container signal |
| container | [dev/hbase/Dockerfile](../../../../sources/kakao__actionbase/dev/hbase/Dockerfile) | container signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 6 | [guides/build-your-social-app/src/App.tsx](../../../../sources/kakao__actionbase/guides/build-your-social-app/src/App.tsx)<br>[guides/build-your-social-app/src/index.tsx](../../../../sources/kakao__actionbase/guides/build-your-social-app/src/index.tsx)<br>[cli/internal/httpserver/server.go](../../../../sources/kakao__actionbase/cli/internal/httpserver/server.go)<br>[cli/cmd/actionbase/main.go](../../../../sources/kakao__actionbase/cli/cmd/actionbase/main.go)<br>[bin/run_local.sh](../../../../sources/kakao__actionbase/bin/run_local.sh)<br>[bin/stop_local.sh](../../../../sources/kakao__actionbase/bin/stop_local.sh) |
| agentRuntime | 17 | [tools/v3v2-boundary-check/build.gradle.kts](../../../../sources/kakao__actionbase/tools/v3v2-boundary-check/build.gradle.kts)<br>[tools/v3v2-boundary-check/src/main/kotlin/BoundaryCheck.kt](../../../../sources/kakao__actionbase/tools/v3v2-boundary-check/src/main/kotlin/BoundaryCheck.kt)<br>[tools/v3v2-boundary-check/src/main/kotlin/Config.kt](../../../../sources/kakao__actionbase/tools/v3v2-boundary-check/src/main/kotlin/Config.kt)<br>[pipeline/src/test/scala/com/kakao/actionbase/pipeline/runner/ClassResolverTest.scala](../../../../sources/kakao__actionbase/pipeline/src/test/scala/com/kakao/actionbase/pipeline/runner/ClassResolverTest.scala)<br>[pipeline/src/test/scala/com/kakao/actionbase/pipeline/runner/StepsBuilderTest.scala](../../../../sources/kakao__actionbase/pipeline/src/test/scala/com/kakao/actionbase/pipeline/runner/StepsBuilderTest.scala)<br>[pipeline/src/test/java/com/kakao/actionbase/pipeline/runner/ThrowingClinitSentinel.java](../../../../sources/kakao__actionbase/pipeline/src/test/java/com/kakao/actionbase/pipeline/runner/ThrowingClinitSentinel.java)<br>[pipeline/src/main/scala/com/kakao/actionbase/pipeline/workflow/StepSpec.scala](../../../../sources/kakao__actionbase/pipeline/src/main/scala/com/kakao/actionbase/pipeline/workflow/StepSpec.scala)<br>[pipeline/src/main/scala/com/kakao/actionbase/pipeline/runner/ClassResolver.scala](../../../../sources/kakao__actionbase/pipeline/src/main/scala/com/kakao/actionbase/pipeline/runner/ClassResolver.scala) |
| mcp | 0 | not obvious |
| retrieval | 78 | [website/src/content/docs/index.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/index.mdx)<br>[website/src/content/docs/stories/index.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/stories/index.mdx)<br>[website/src/content/docs/stories/vision/unified-graph.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/stories/vision/unified-graph.mdx)<br>[website/src/content/docs/stories/how-we-survived/index.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/stories/how-we-survived/index.mdx)<br>[website/src/content/docs/ko/index.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/ko/index.mdx)<br>[website/src/content/docs/ko/stories/index.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/ko/stories/index.mdx)<br>[website/src/content/docs/ko/stories/vision/unified-graph.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/ko/stories/vision/unified-graph.mdx)<br>[website/src/content/docs/ko/stories/how-we-survived/index.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/ko/stories/how-we-survived/index.mdx) |
| spec | 12 | [ROADMAP.md](../../../../sources/kakao__actionbase/ROADMAP.md)<br>[website/src/content/docs/ko/design/concepts.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/ko/design/concepts.mdx)<br>[website/src/content/docs/ko/design/mutation.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/ko/design/mutation.mdx)<br>[website/src/content/docs/ko/design/query.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/ko/design/query.mdx)<br>[website/src/content/docs/ko/design/schema.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/ko/design/schema.mdx)<br>[website/src/content/docs/ko/design/storage-backends.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/ko/design/storage-backends.mdx)<br>[website/src/content/docs/design/concepts.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/design/concepts.mdx)<br>[website/src/content/docs/design/glossary.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/design/glossary.mdx) |
| eval | 231 | [website/__a11y__/docs.test.ts](../../../../sources/kakao__actionbase/website/__a11y__/docs.test.ts)<br>[website/__a11y__/test-utils.ts](../../../../sources/kakao__actionbase/website/__a11y__/test-utils.ts)<br>[server/src/testFixtures/kotlin/com/kakao/actionbase/server/test/E2ETestBase.kt](../../../../sources/kakao__actionbase/server/src/testFixtures/kotlin/com/kakao/actionbase/server/test/E2ETestBase.kt)<br>[server/src/testFixtures/kotlin/com/kakao/actionbase/server/test/E2ETestExtension.kt](../../../../sources/kakao__actionbase/server/src/testFixtures/kotlin/com/kakao/actionbase/server/test/E2ETestExtension.kt)<br>[server/src/testFixtures/kotlin/com/kakao/actionbase/server/test/EndpointScanner.kt](../../../../sources/kakao__actionbase/server/src/testFixtures/kotlin/com/kakao/actionbase/server/test/EndpointScanner.kt)<br>[server/src/test/resources/application-test.yaml](../../../../sources/kakao__actionbase/server/src/test/resources/application-test.yaml)<br>[server/src/test/kotlin/com/kakao/actionbase/server/StartUpTest.kt](../../../../sources/kakao__actionbase/server/src/test/kotlin/com/kakao/actionbase/server/StartUpTest.kt)<br>[server/src/test/kotlin/com/kakao/actionbase/server/test/InvalidWalConfig.kt](../../../../sources/kakao__actionbase/server/src/test/kotlin/com/kakao/actionbase/server/test/InvalidWalConfig.kt) |
| security | 5 | [SECURITY.md](../../../../sources/kakao__actionbase/SECURITY.md)<br>[server/src/main/kotlin/com/kakao/actionbase/server/auth/ActorRole.kt](../../../../sources/kakao__actionbase/server/src/main/kotlin/com/kakao/actionbase/server/auth/ActorRole.kt)<br>[engine/src/main/kotlin/com/kakao/actionbase/v2/engine/audit/Audit.kt](../../../../sources/kakao__actionbase/engine/src/main/kotlin/com/kakao/actionbase/v2/engine/audit/Audit.kt)<br>[engine/src/main/kotlin/com/kakao/actionbase/engine/Audit.kt](../../../../sources/kakao__actionbase/engine/src/main/kotlin/com/kakao/actionbase/engine/Audit.kt)<br>[core-java/src/main/java/com/kakao/actionbase/core/java/compat/v2/Audit.java](../../../../sources/kakao__actionbase/core-java/src/main/java/com/kakao/actionbase/core/java/compat/v2/Audit.java) |
| ci | 11 | [.github/workflows/bump-codec-java-version.yml](../../../../sources/kakao__actionbase/.github/workflows/bump-codec-java-version.yml)<br>[.github/workflows/bump-version.yml](../../../../sources/kakao__actionbase/.github/workflows/bump-version.yml)<br>[.github/workflows/continuous-integration.yml](../../../../sources/kakao__actionbase/.github/workflows/continuous-integration.yml)<br>[.github/workflows/deploy-website.yml](../../../../sources/kakao__actionbase/.github/workflows/deploy-website.yml)<br>[.github/workflows/first-time-contributor.yml](../../../../sources/kakao__actionbase/.github/workflows/first-time-contributor.yml)<br>[.github/workflows/post-release-codec-java.yml](../../../../sources/kakao__actionbase/.github/workflows/post-release-codec-java.yml)<br>[.github/workflows/post-release.yml](../../../../sources/kakao__actionbase/.github/workflows/post-release.yml)<br>[.github/workflows/release-cherry-pick-report.yml](../../../../sources/kakao__actionbase/.github/workflows/release-cherry-pick-report.yml) |
| container | 4 | [docker/standalone/Dockerfile](../../../../sources/kakao__actionbase/docker/standalone/Dockerfile)<br>[dev/hbase/docker-compose.local.yml](../../../../sources/kakao__actionbase/dev/hbase/docker-compose.local.yml)<br>[dev/hbase/docker-compose.yml](../../../../sources/kakao__actionbase/dev/hbase/docker-compose.yml)<br>[dev/hbase/Dockerfile](../../../../sources/kakao__actionbase/dev/hbase/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 172 | [README.md](../../../../sources/kakao__actionbase/README.md)<br>[website/.prettierignore](../../../../sources/kakao__actionbase/website/.prettierignore)<br>[website/.prettierrc](../../../../sources/kakao__actionbase/website/.prettierrc)<br>[website/astro.config.mjs](../../../../sources/kakao__actionbase/website/astro.config.mjs)<br>[website/eslint.config.js](../../../../sources/kakao__actionbase/website/eslint.config.js)<br>[website/lunaria.config.json](../../../../sources/kakao__actionbase/website/lunaria.config.json)<br>[website/package-lock.json](../../../../sources/kakao__actionbase/website/package-lock.json)<br>[website/package.json](../../../../sources/kakao__actionbase/website/package.json) |
| config | 7 | [website/package.json](../../../../sources/kakao__actionbase/website/package.json)<br>[website/tsconfig.json](../../../../sources/kakao__actionbase/website/tsconfig.json)<br>[guides/build-your-social-app/package.json](../../../../sources/kakao__actionbase/guides/build-your-social-app/package.json)<br>[guides/build-your-social-app/tsconfig.json](../../../../sources/kakao__actionbase/guides/build-your-social-app/tsconfig.json)<br>[dev/hbase/Makefile](../../../../sources/kakao__actionbase/dev/hbase/Makefile)<br>[cli/go.mod](../../../../sources/kakao__actionbase/cli/go.mod)<br>[cli/Makefile](../../../../sources/kakao__actionbase/cli/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 231 | [website/__a11y__/docs.test.ts](../../../../sources/kakao__actionbase/website/__a11y__/docs.test.ts)<br>[website/__a11y__/test-utils.ts](../../../../sources/kakao__actionbase/website/__a11y__/test-utils.ts)<br>[server/src/testFixtures/kotlin/com/kakao/actionbase/server/test/E2ETestBase.kt](../../../../sources/kakao__actionbase/server/src/testFixtures/kotlin/com/kakao/actionbase/server/test/E2ETestBase.kt)<br>[server/src/testFixtures/kotlin/com/kakao/actionbase/server/test/E2ETestExtension.kt](../../../../sources/kakao__actionbase/server/src/testFixtures/kotlin/com/kakao/actionbase/server/test/E2ETestExtension.kt)<br>[server/src/testFixtures/kotlin/com/kakao/actionbase/server/test/EndpointScanner.kt](../../../../sources/kakao__actionbase/server/src/testFixtures/kotlin/com/kakao/actionbase/server/test/EndpointScanner.kt)<br>[server/src/test/resources/application-test.yaml](../../../../sources/kakao__actionbase/server/src/test/resources/application-test.yaml) |
| CI workflows | 11 | [.github/workflows/bump-codec-java-version.yml](../../../../sources/kakao__actionbase/.github/workflows/bump-codec-java-version.yml)<br>[.github/workflows/bump-version.yml](../../../../sources/kakao__actionbase/.github/workflows/bump-version.yml)<br>[.github/workflows/continuous-integration.yml](../../../../sources/kakao__actionbase/.github/workflows/continuous-integration.yml)<br>[.github/workflows/deploy-website.yml](../../../../sources/kakao__actionbase/.github/workflows/deploy-website.yml)<br>[.github/workflows/first-time-contributor.yml](../../../../sources/kakao__actionbase/.github/workflows/first-time-contributor.yml)<br>[.github/workflows/post-release-codec-java.yml](../../../../sources/kakao__actionbase/.github/workflows/post-release-codec-java.yml) |
| Containers / deploy | 4 | [docker/standalone/Dockerfile](../../../../sources/kakao__actionbase/docker/standalone/Dockerfile)<br>[dev/hbase/docker-compose.local.yml](../../../../sources/kakao__actionbase/dev/hbase/docker-compose.local.yml)<br>[dev/hbase/docker-compose.yml](../../../../sources/kakao__actionbase/dev/hbase/docker-compose.yml)<br>[dev/hbase/Dockerfile](../../../../sources/kakao__actionbase/dev/hbase/Dockerfile) |
| Security / policy | 5 | [SECURITY.md](../../../../sources/kakao__actionbase/SECURITY.md)<br>[server/src/main/kotlin/com/kakao/actionbase/server/auth/ActorRole.kt](../../../../sources/kakao__actionbase/server/src/main/kotlin/com/kakao/actionbase/server/auth/ActorRole.kt)<br>[engine/src/main/kotlin/com/kakao/actionbase/v2/engine/audit/Audit.kt](../../../../sources/kakao__actionbase/engine/src/main/kotlin/com/kakao/actionbase/v2/engine/audit/Audit.kt)<br>[engine/src/main/kotlin/com/kakao/actionbase/engine/Audit.kt](../../../../sources/kakao__actionbase/engine/src/main/kotlin/com/kakao/actionbase/engine/Audit.kt)<br>[core-java/src/main/java/com/kakao/actionbase/core/java/compat/v2/Audit.java](../../../../sources/kakao__actionbase/core-java/src/main/java/com/kakao/actionbase/core/java/compat/v2/Audit.java) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `website/src/content/docs/index.mdx`, `website/src/content/docs/stories/index.mdx`, `website/src/content/docs/stories/vision/unified-graph.mdx`.
2. Trace execution through entrypoints: `guides/build-your-social-app/src/App.tsx`, `guides/build-your-social-app/src/index.tsx`, `cli/internal/httpserver/server.go`.
3. Map agent/tool runtime through: `tools/v3v2-boundary-check/build.gradle.kts`, `tools/v3v2-boundary-check/src/main/kotlin/BoundaryCheck.kt`, `tools/v3v2-boundary-check/src/main/kotlin/Config.kt`.
4. Inspect retrieval/memory/indexing through: `website/src/content/docs/index.mdx`, `website/src/content/docs/stories/index.mdx`, `website/src/content/docs/stories/vision/unified-graph.mdx`.
5. Verify behavior through test/eval files: `website/__a11y__/docs.test.ts`, `website/__a11y__/test-utils.ts`, `server/src/testFixtures/kotlin/com/kakao/actionbase/server/test/E2ETestBase.kt`.

## Existing Repository Insight

데이터/벡터 플랫폼 관점에서 One database for user user follows , user item likes , and item item related items interactions — precomputed, served in. 핵심 구조 신호는 Kotlin, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 데이터/벡터 플랫폼 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
