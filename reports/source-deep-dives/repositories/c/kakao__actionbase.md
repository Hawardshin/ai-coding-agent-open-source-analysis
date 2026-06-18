# kakao/actionbase 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

One database for user-user (follows), user-item (likes), and item-item (related items) interactions — precomputed, served in real-time

## 요약

- 조사 단위: `sources/kakao__actionbase` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,294 files, 496 directories, depth score 118, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

데이터/벡터 플랫폼 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=website/src/content/docs/index.mdx, website/src/content/docs/stories/index.mdx, website/src/content/docs/stories/vision/unified-graph.mdx이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | kakao/actionbase |
| 주제 | 데이터/벡터 플랫폼 / 데이터/벡터 플랫폼 |
| Region | korea |
| Language | Kotlin |
| Stars | 220 |
| Forks | 15 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/kakao__actionbase](../../../../sources/kakao__actionbase) |
| 기존 보고서 | [reports/korea-trending/repositories/kakao__actionbase.md](../../../korea-trending/repositories/kakao__actionbase.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1294 / 496 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .github, bin, cli, codec-java, conventions, core, core-java, dev, docker, engine, Formula, gradle, guides, pipeline, platform, server, tools, website |
| 상위 확장자 | .kt: 513, .java: 364, .mdx: 71, .go: 45, .scala: 43, .astro: 30, .ts: 30, .md: 25, .png: 21, .tsx: 21, (none): 20, .css: 17 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 6 | [guides/build-your-social-app/src/App.tsx](../../../../sources/kakao__actionbase/guides/build-your-social-app/src/App.tsx)<br>[guides/build-your-social-app/src/index.tsx](../../../../sources/kakao__actionbase/guides/build-your-social-app/src/index.tsx)<br>[cli/internal/httpserver/server.go](../../../../sources/kakao__actionbase/cli/internal/httpserver/server.go)<br>[cli/cmd/actionbase/main.go](../../../../sources/kakao__actionbase/cli/cmd/actionbase/main.go)<br>[bin/run_local.sh](../../../../sources/kakao__actionbase/bin/run_local.sh)<br>[bin/stop_local.sh](../../../../sources/kakao__actionbase/bin/stop_local.sh) |
| agentRuntime | 17 | [tools/v3v2-boundary-check/build.gradle.kts](../../../../sources/kakao__actionbase/tools/v3v2-boundary-check/build.gradle.kts)<br>[tools/v3v2-boundary-check/src/main/kotlin/BoundaryCheck.kt](../../../../sources/kakao__actionbase/tools/v3v2-boundary-check/src/main/kotlin/BoundaryCheck.kt)<br>[tools/v3v2-boundary-check/src/main/kotlin/Config.kt](../../../../sources/kakao__actionbase/tools/v3v2-boundary-check/src/main/kotlin/Config.kt)<br>[pipeline/src/test/scala/com/kakao/actionbase/pipeline/runner/ClassResolverTest.scala](../../../../sources/kakao__actionbase/pipeline/src/test/scala/com/kakao/actionbase/pipeline/runner/ClassResolverTest.scala)<br>[pipeline/src/test/scala/com/kakao/actionbase/pipeline/runner/StepsBuilderTest.scala](../../../../sources/kakao__actionbase/pipeline/src/test/scala/com/kakao/actionbase/pipeline/runner/StepsBuilderTest.scala)<br>[pipeline/src/test/java/com/kakao/actionbase/pipeline/runner/ThrowingClinitSentinel.java](../../../../sources/kakao__actionbase/pipeline/src/test/java/com/kakao/actionbase/pipeline/runner/ThrowingClinitSentinel.java)<br>[pipeline/src/main/scala/com/kakao/actionbase/pipeline/workflow/StepSpec.scala](../../../../sources/kakao__actionbase/pipeline/src/main/scala/com/kakao/actionbase/pipeline/workflow/StepSpec.scala)<br>[pipeline/src/main/scala/com/kakao/actionbase/pipeline/runner/ClassResolver.scala](../../../../sources/kakao__actionbase/pipeline/src/main/scala/com/kakao/actionbase/pipeline/runner/ClassResolver.scala) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 78 | [website/src/content/docs/index.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/index.mdx)<br>[website/src/content/docs/stories/index.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/stories/index.mdx)<br>[website/src/content/docs/stories/vision/unified-graph.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/stories/vision/unified-graph.mdx)<br>[website/src/content/docs/stories/how-we-survived/index.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/stories/how-we-survived/index.mdx)<br>[website/src/content/docs/ko/index.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/ko/index.mdx)<br>[website/src/content/docs/ko/stories/index.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/ko/stories/index.mdx)<br>[website/src/content/docs/ko/stories/vision/unified-graph.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/ko/stories/vision/unified-graph.mdx)<br>[website/src/content/docs/ko/stories/how-we-survived/index.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/ko/stories/how-we-survived/index.mdx) |
| spec | 12 | [ROADMAP.md](../../../../sources/kakao__actionbase/ROADMAP.md)<br>[website/src/content/docs/ko/design/concepts.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/ko/design/concepts.mdx)<br>[website/src/content/docs/ko/design/mutation.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/ko/design/mutation.mdx)<br>[website/src/content/docs/ko/design/query.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/ko/design/query.mdx)<br>[website/src/content/docs/ko/design/schema.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/ko/design/schema.mdx)<br>[website/src/content/docs/ko/design/storage-backends.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/ko/design/storage-backends.mdx)<br>[website/src/content/docs/design/concepts.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/design/concepts.mdx)<br>[website/src/content/docs/design/glossary.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/design/glossary.mdx) |
| eval | 231 | [website/__a11y__/docs.test.ts](../../../../sources/kakao__actionbase/website/__a11y__/docs.test.ts)<br>[website/__a11y__/test-utils.ts](../../../../sources/kakao__actionbase/website/__a11y__/test-utils.ts)<br>[server/src/testFixtures/kotlin/com/kakao/actionbase/server/test/E2ETestBase.kt](../../../../sources/kakao__actionbase/server/src/testFixtures/kotlin/com/kakao/actionbase/server/test/E2ETestBase.kt)<br>[server/src/testFixtures/kotlin/com/kakao/actionbase/server/test/E2ETestExtension.kt](../../../../sources/kakao__actionbase/server/src/testFixtures/kotlin/com/kakao/actionbase/server/test/E2ETestExtension.kt)<br>[server/src/testFixtures/kotlin/com/kakao/actionbase/server/test/EndpointScanner.kt](../../../../sources/kakao__actionbase/server/src/testFixtures/kotlin/com/kakao/actionbase/server/test/EndpointScanner.kt)<br>[server/src/test/resources/application-test.yaml](../../../../sources/kakao__actionbase/server/src/test/resources/application-test.yaml)<br>[server/src/test/kotlin/com/kakao/actionbase/server/StartUpTest.kt](../../../../sources/kakao__actionbase/server/src/test/kotlin/com/kakao/actionbase/server/StartUpTest.kt)<br>[server/src/test/kotlin/com/kakao/actionbase/server/test/InvalidWalConfig.kt](../../../../sources/kakao__actionbase/server/src/test/kotlin/com/kakao/actionbase/server/test/InvalidWalConfig.kt) |
| security | 5 | [SECURITY.md](../../../../sources/kakao__actionbase/SECURITY.md)<br>[server/src/main/kotlin/com/kakao/actionbase/server/auth/ActorRole.kt](../../../../sources/kakao__actionbase/server/src/main/kotlin/com/kakao/actionbase/server/auth/ActorRole.kt)<br>[engine/src/main/kotlin/com/kakao/actionbase/v2/engine/audit/Audit.kt](../../../../sources/kakao__actionbase/engine/src/main/kotlin/com/kakao/actionbase/v2/engine/audit/Audit.kt)<br>[engine/src/main/kotlin/com/kakao/actionbase/engine/Audit.kt](../../../../sources/kakao__actionbase/engine/src/main/kotlin/com/kakao/actionbase/engine/Audit.kt)<br>[core-java/src/main/java/com/kakao/actionbase/core/java/compat/v2/Audit.java](../../../../sources/kakao__actionbase/core-java/src/main/java/com/kakao/actionbase/core/java/compat/v2/Audit.java) |
| ci | 11 | [.github/workflows/bump-codec-java-version.yml](../../../../sources/kakao__actionbase/.github/workflows/bump-codec-java-version.yml)<br>[.github/workflows/bump-version.yml](../../../../sources/kakao__actionbase/.github/workflows/bump-version.yml)<br>[.github/workflows/continuous-integration.yml](../../../../sources/kakao__actionbase/.github/workflows/continuous-integration.yml)<br>[.github/workflows/deploy-website.yml](../../../../sources/kakao__actionbase/.github/workflows/deploy-website.yml)<br>[.github/workflows/first-time-contributor.yml](../../../../sources/kakao__actionbase/.github/workflows/first-time-contributor.yml)<br>[.github/workflows/post-release-codec-java.yml](../../../../sources/kakao__actionbase/.github/workflows/post-release-codec-java.yml)<br>[.github/workflows/post-release.yml](../../../../sources/kakao__actionbase/.github/workflows/post-release.yml)<br>[.github/workflows/release-cherry-pick-report.yml](../../../../sources/kakao__actionbase/.github/workflows/release-cherry-pick-report.yml) |
| container | 4 | [docker/standalone/Dockerfile](../../../../sources/kakao__actionbase/docker/standalone/Dockerfile)<br>[dev/hbase/docker-compose.local.yml](../../../../sources/kakao__actionbase/dev/hbase/docker-compose.local.yml)<br>[dev/hbase/docker-compose.yml](../../../../sources/kakao__actionbase/dev/hbase/docker-compose.yml)<br>[dev/hbase/Dockerfile](../../../../sources/kakao__actionbase/dev/hbase/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 172 | [README.md](../../../../sources/kakao__actionbase/README.md)<br>[website/.prettierignore](../../../../sources/kakao__actionbase/website/.prettierignore)<br>[website/.prettierrc](../../../../sources/kakao__actionbase/website/.prettierrc)<br>[website/astro.config.mjs](../../../../sources/kakao__actionbase/website/astro.config.mjs)<br>[website/eslint.config.js](../../../../sources/kakao__actionbase/website/eslint.config.js)<br>[website/lunaria.config.json](../../../../sources/kakao__actionbase/website/lunaria.config.json)<br>[website/package-lock.json](../../../../sources/kakao__actionbase/website/package-lock.json)<br>[website/package.json](../../../../sources/kakao__actionbase/website/package.json) |
| config | 7 | [website/package.json](../../../../sources/kakao__actionbase/website/package.json)<br>[website/tsconfig.json](../../../../sources/kakao__actionbase/website/tsconfig.json)<br>[guides/build-your-social-app/package.json](../../../../sources/kakao__actionbase/guides/build-your-social-app/package.json)<br>[guides/build-your-social-app/tsconfig.json](../../../../sources/kakao__actionbase/guides/build-your-social-app/tsconfig.json)<br>[dev/hbase/Makefile](../../../../sources/kakao__actionbase/dev/hbase/Makefile)<br>[cli/go.mod](../../../../sources/kakao__actionbase/cli/go.mod)<br>[cli/Makefile](../../../../sources/kakao__actionbase/cli/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 231 | [website/__a11y__/docs.test.ts](../../../../sources/kakao__actionbase/website/__a11y__/docs.test.ts)<br>[website/__a11y__/test-utils.ts](../../../../sources/kakao__actionbase/website/__a11y__/test-utils.ts)<br>[server/src/testFixtures/kotlin/com/kakao/actionbase/server/test/E2ETestBase.kt](../../../../sources/kakao__actionbase/server/src/testFixtures/kotlin/com/kakao/actionbase/server/test/E2ETestBase.kt)<br>[server/src/testFixtures/kotlin/com/kakao/actionbase/server/test/E2ETestExtension.kt](../../../../sources/kakao__actionbase/server/src/testFixtures/kotlin/com/kakao/actionbase/server/test/E2ETestExtension.kt)<br>[server/src/testFixtures/kotlin/com/kakao/actionbase/server/test/EndpointScanner.kt](../../../../sources/kakao__actionbase/server/src/testFixtures/kotlin/com/kakao/actionbase/server/test/EndpointScanner.kt)<br>[server/src/test/resources/application-test.yaml](../../../../sources/kakao__actionbase/server/src/test/resources/application-test.yaml) |
| CI workflow | 11 | [.github/workflows/bump-codec-java-version.yml](../../../../sources/kakao__actionbase/.github/workflows/bump-codec-java-version.yml)<br>[.github/workflows/bump-version.yml](../../../../sources/kakao__actionbase/.github/workflows/bump-version.yml)<br>[.github/workflows/continuous-integration.yml](../../../../sources/kakao__actionbase/.github/workflows/continuous-integration.yml)<br>[.github/workflows/deploy-website.yml](../../../../sources/kakao__actionbase/.github/workflows/deploy-website.yml)<br>[.github/workflows/first-time-contributor.yml](../../../../sources/kakao__actionbase/.github/workflows/first-time-contributor.yml)<br>[.github/workflows/post-release-codec-java.yml](../../../../sources/kakao__actionbase/.github/workflows/post-release-codec-java.yml) |
| 컨테이너/배포 | 4 | [docker/standalone/Dockerfile](../../../../sources/kakao__actionbase/docker/standalone/Dockerfile)<br>[dev/hbase/docker-compose.local.yml](../../../../sources/kakao__actionbase/dev/hbase/docker-compose.local.yml)<br>[dev/hbase/docker-compose.yml](../../../../sources/kakao__actionbase/dev/hbase/docker-compose.yml)<br>[dev/hbase/Dockerfile](../../../../sources/kakao__actionbase/dev/hbase/Dockerfile) |
| 보안/정책 | 5 | [SECURITY.md](../../../../sources/kakao__actionbase/SECURITY.md)<br>[server/src/main/kotlin/com/kakao/actionbase/server/auth/ActorRole.kt](../../../../sources/kakao__actionbase/server/src/main/kotlin/com/kakao/actionbase/server/auth/ActorRole.kt)<br>[engine/src/main/kotlin/com/kakao/actionbase/v2/engine/audit/Audit.kt](../../../../sources/kakao__actionbase/engine/src/main/kotlin/com/kakao/actionbase/v2/engine/audit/Audit.kt)<br>[engine/src/main/kotlin/com/kakao/actionbase/engine/Audit.kt](../../../../sources/kakao__actionbase/engine/src/main/kotlin/com/kakao/actionbase/engine/Audit.kt)<br>[core-java/src/main/java/com/kakao/actionbase/core/java/compat/v2/Audit.java](../../../../sources/kakao__actionbase/core-java/src/main/java/com/kakao/actionbase/core/java/compat/v2/Audit.java) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `website/src/content/docs/index.mdx`, `website/src/content/docs/stories/index.mdx`, `website/src/content/docs/stories/vision/unified-graph.mdx`.
2. entrypoint를 따라 실행 흐름 확인: `guides/build-your-social-app/src/App.tsx`, `guides/build-your-social-app/src/index.tsx`, `cli/internal/httpserver/server.go`.
3. agent/tool runtime 매핑: `tools/v3v2-boundary-check/build.gradle.kts`, `tools/v3v2-boundary-check/src/main/kotlin/BoundaryCheck.kt`, `tools/v3v2-boundary-check/src/main/kotlin/Config.kt`.
4. retrieval/memory/indexing 확인: `website/src/content/docs/index.mdx`, `website/src/content/docs/stories/index.mdx`, `website/src/content/docs/stories/vision/unified-graph.mdx`.
5. test/eval 파일로 동작 검증: `website/__a11y__/docs.test.ts`, `website/__a11y__/test-utils.ts`, `server/src/testFixtures/kotlin/com/kakao/actionbase/server/test/E2ETestBase.kt`.

## 기존 레포 인사이트

데이터/벡터 플랫폼 관점에서 One database for user user follows , user item likes , and item item related items interactions — precomputed, served in. 핵심 구조 신호는 Kotlin, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 데이터/벡터 플랫폼 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
