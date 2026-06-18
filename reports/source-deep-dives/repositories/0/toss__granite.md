# toss/granite Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Enterprise-grade React Native framework for microservice apps. Brownfield friendly, 200KB bundles, AWS-ready infrastructure.

## 요약

- 조사 단위: `sources/toss__granite` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,645 files, 599 directories, depth score 116, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=tools/src/index.ts, packages/vitest/src/index.ts, packages/video/src/index.ts이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | toss/granite |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 463 |
| Forks | 51 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/toss__granite](../../../../sources/toss__granite) |
| Existing report | [reports/korea-trending/repositories/toss__granite.md](../../../korea-trending/repositories/toss__granite.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1645 / 599 |
| Max observed depth | 13 |
| Top directories | .changeset, .github, .scripts, .yarn, bin, docs, infra, packages, services, tools |
| Top extensions | .ts: 584, .js: 202, .md: 154, .kt: 125, .json: 112, .tsx: 110, (none): 82, .png: 40, .swift: 33, .xml: 25, .mts: 21, .gradle: 15 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/react-native | packages workspace | 58 |
| packages/plugin-router | packages workspace | 18 |
| packages/video | packages workspace | 18 |
| packages/style-utils | packages workspace | 15 |
| packages/vitest | packages workspace | 15 |
| packages/mpack | packages workspace | 12 |
| packages/plugin-core | packages workspace | 10 |
| services/showcase | services workspace | 10 |
| docs | documentation surface | 9 |
| packages/plugin-micro-frontend | packages workspace | 9 |
| packages/create-granite-app | packages workspace | 8 |
| packages/plugin-env | packages workspace | 6 |
| packages/plugin-sentry | packages workspace | 6 |
| services/counter | services workspace | 6 |
| packages/utils | packages workspace | 5 |
| packages/image | packages workspace | 4 |
| packages/naver-map | packages workspace | 4 |
| packages/plugin-hermes | packages workspace | 4 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | prune | knip |
| quality | package.json | lint | eslint . |
| utility | package.json | prepare | husky |
| utility | package.json | changeset | changeset |
| quality | package.json | typecheck:all | nx run-many -t typecheck |
| test | package.json | test:all | yarn test:parallel && yarn test:no-parallel |
| test | package.json | test:parallel | nx run-many -t test --nxBail |
| test | package.json | test:no-parallel | nx run-many -t test:no-parallel --parallel=false --nxBail |
| quality | package.json | check-licenses | node .scripts/licenses.mjs check |
| quality | package.json | check-exports | tsx --import ./.scripts/check-exports.mts |
| utility | package.json | generate-licenses | node .scripts/licenses.mjs generate |
| quality | package.json | consistency-check-licenses | node .scripts/licenses.mjs consistency-check |
| build | package.json | build:all | nx run-many --targets=build |
| build | package.json | build:shared | tsdown --config shared/tsdown.config.ts |
| utility | package.json | attw:all | yarn tools attw |
| build | package.json | clear | rimraf --glob "**/*/dist" .nx |
| utility | package.json | tools | ./bin/tools |
| serve-dev | package.json | publish:dev | sh .scripts/publish-dev.sh |


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
| entrypoints | [tools/src/index.ts](../../../../sources/toss__granite/tools/src/index.ts) | entrypoints signal |
| entrypoints | [packages/vitest/src/index.ts](../../../../sources/toss__granite/packages/vitest/src/index.ts) | entrypoints signal |
| entrypoints | [packages/video/src/index.ts](../../../../sources/toss__granite/packages/video/src/index.ts) | entrypoints signal |
| entrypoints | [packages/video/example/src/App.tsx](../../../../sources/toss__granite/packages/video/example/src/App.tsx) | entrypoints signal |
| config | [nx.json](../../../../sources/toss__granite/nx.json) | config signal |
| config | [package.json](../../../../sources/toss__granite/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/toss__granite/tsconfig.json) | config signal |
| config | [tools/package.json](../../../../sources/toss__granite/tools/package.json) | config signal |
| docs | [README-ko_kr.md](../../../../sources/toss__granite/README-ko_kr.md) | docs signal |
| docs | [README.md](../../../../sources/toss__granite/README.md) | docs signal |
| docs | [tools/README.md](../../../../sources/toss__granite/tools/README.md) | docs signal |
| docs | [services/showcase/README.md](../../../../sources/toss__granite/services/showcase/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 48 | [tools/src/index.ts](../../../../sources/toss__granite/tools/src/index.ts)<br>[packages/vitest/src/index.ts](../../../../sources/toss__granite/packages/vitest/src/index.ts)<br>[packages/video/src/index.ts](../../../../sources/toss__granite/packages/video/src/index.ts)<br>[packages/video/example/src/App.tsx](../../../../sources/toss__granite/packages/video/example/src/App.tsx)<br>[packages/utils/src/index.ts](../../../../sources/toss__granite/packages/utils/src/index.ts)<br>[packages/style-utils/src/index.ts](../../../../sources/toss__granite/packages/style-utils/src/index.ts)<br>[packages/react-native/src/cli.ts](../../../../sources/toss__granite/packages/react-native/src/cli.ts)<br>[packages/react-native/src/index.ts](../../../../sources/toss__granite/packages/react-native/src/index.ts) |
| agentRuntime | 23 | [tools/package.json](../../../../sources/toss__granite/tools/package.json)<br>[tools/README.md](../../../../sources/toss__granite/tools/README.md)<br>[tools/tsconfig.json](../../../../sources/toss__granite/tools/tsconfig.json)<br>[tools/tsup.config.ts](../../../../sources/toss__granite/tools/tsup.config.ts)<br>[tools/src/index.ts](../../../../sources/toss__granite/tools/src/index.ts)<br>[tools/src/project.ts](../../../../sources/toss__granite/tools/src/project.ts)<br>[tools/src/utils.ts](../../../../sources/toss__granite/tools/src/utils.ts)<br>[tools/src/commands/attw.ts](../../../../sources/toss__granite/tools/src/commands/attw.ts) |
| mcp | 0 | not obvious |
| retrieval | 133 | [tools/src/index.ts](../../../../sources/toss__granite/tools/src/index.ts)<br>[services/showcase/index.ts](../../../../sources/toss__granite/services/showcase/index.ts)<br>[services/showcase/src/pages/index.tsx](../../../../sources/toss__granite/services/showcase/src/pages/index.tsx)<br>[services/showcase/src/pages/showcase/index.tsx](../../../../sources/toss__granite/services/showcase/src/pages/showcase/index.tsx)<br>[services/showcase/pages/index.tsx](../../../../sources/toss__granite/services/showcase/pages/index.tsx)<br>[services/showcase/pages/showcase/index.tsx](../../../../sources/toss__granite/services/showcase/pages/showcase/index.tsx)<br>[services/shared/index.ts](../../../../sources/toss__granite/services/shared/index.ts)<br>[services/pulumi-testbed/index.ts](../../../../sources/toss__granite/services/pulumi-testbed/index.ts) |
| spec | 78 | [packages/vitest/src/jestBridge.spec.ts](../../../../sources/toss__granite/packages/vitest/src/jestBridge.spec.ts)<br>[packages/vitest/src/mirror.spec.ts](../../../../sources/toss__granite/packages/vitest/src/mirror.spec.ts)<br>[packages/vitest/src/reactNative.spec.ts](../../../../sources/toss__granite/packages/vitest/src/reactNative.spec.ts)<br>[packages/vitest/src/reactNativeRuntime.spec.ts](../../../../sources/toss__granite/packages/vitest/src/reactNativeRuntime.spec.ts)<br>[packages/vitest/src/transpile.spec.ts](../../../../sources/toss__granite/packages/vitest/src/transpile.spec.ts)<br>[packages/style-utils/src/box-spacing.spec.tsx](../../../../sources/toss__granite/packages/style-utils/src/box-spacing.spec.tsx)<br>[packages/style-utils/src/children.spec.tsx](../../../../sources/toss__granite/packages/style-utils/src/children.spec.tsx)<br>[packages/style-utils/src/flex.spec.tsx](../../../../sources/toss__granite/packages/style-utils/src/flex.spec.tsx) |
| eval | 141 | [services/showcase/src/components/Button.test.tsx](../../../../sources/toss__granite/services/showcase/src/components/Button.test.tsx)<br>[services/showcase/src/components/react-native-codegen.test.tsx](../../../../sources/toss__granite/services/showcase/src/components/react-native-codegen.test.tsx)<br>[packages/vitest/src/jestBridge.spec.ts](../../../../sources/toss__granite/packages/vitest/src/jestBridge.spec.ts)<br>[packages/vitest/src/mirror.spec.ts](../../../../sources/toss__granite/packages/vitest/src/mirror.spec.ts)<br>[packages/vitest/src/reactNative.spec.ts](../../../../sources/toss__granite/packages/vitest/src/reactNative.spec.ts)<br>[packages/vitest/src/reactNativeRuntime.spec.ts](../../../../sources/toss__granite/packages/vitest/src/reactNativeRuntime.spec.ts)<br>[packages/vitest/src/transpile.spec.ts](../../../../sources/toss__granite/packages/vitest/src/transpile.spec.ts)<br>[packages/video/android/src/test/resources/kotest.properties](../../../../sources/toss__granite/packages/video/android/src/test/resources/kotest.properties) |
| security | 0 | not obvious |
| ci | 4 | [.github/workflows/docs-workflow.yaml](../../../../sources/toss__granite/.github/workflows/docs-workflow.yaml)<br>[.github/workflows/integrations.yaml](../../../../sources/toss__granite/.github/workflows/integrations.yaml)<br>[.github/workflows/labeler.yml](../../../../sources/toss__granite/.github/workflows/labeler.yml)<br>[.github/workflows/release.yaml](../../../../sources/toss__granite/.github/workflows/release.yaml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 158 | [README-ko_kr.md](../../../../sources/toss__granite/README-ko_kr.md)<br>[README.md](../../../../sources/toss__granite/README.md)<br>[tools/README.md](../../../../sources/toss__granite/tools/README.md)<br>[services/showcase/README.md](../../../../sources/toss__granite/services/showcase/README.md)<br>[services/shared/README.md](../../../../sources/toss__granite/services/shared/README.md)<br>[services/pulumi-testbed/README.md](../../../../sources/toss__granite/services/pulumi-testbed/README.md)<br>[services/counter/README.md](../../../../sources/toss__granite/services/counter/README.md)<br>[packages/vitest/README.md](../../../../sources/toss__granite/packages/vitest/README.md) |
| config | 81 | [nx.json](../../../../sources/toss__granite/nx.json)<br>[package.json](../../../../sources/toss__granite/package.json)<br>[tsconfig.json](../../../../sources/toss__granite/tsconfig.json)<br>[tools/package.json](../../../../sources/toss__granite/tools/package.json)<br>[tools/tsconfig.json](../../../../sources/toss__granite/tools/tsconfig.json)<br>[services/showcase/package.json](../../../../sources/toss__granite/services/showcase/package.json)<br>[services/showcase/tsconfig.json](../../../../sources/toss__granite/services/showcase/tsconfig.json)<br>[services/shared/package.json](../../../../sources/toss__granite/services/shared/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 141 | [services/showcase/src/components/Button.test.tsx](../../../../sources/toss__granite/services/showcase/src/components/Button.test.tsx)<br>[services/showcase/src/components/react-native-codegen.test.tsx](../../../../sources/toss__granite/services/showcase/src/components/react-native-codegen.test.tsx)<br>[packages/vitest/src/jestBridge.spec.ts](../../../../sources/toss__granite/packages/vitest/src/jestBridge.spec.ts)<br>[packages/vitest/src/mirror.spec.ts](../../../../sources/toss__granite/packages/vitest/src/mirror.spec.ts)<br>[packages/vitest/src/reactNative.spec.ts](../../../../sources/toss__granite/packages/vitest/src/reactNative.spec.ts)<br>[packages/vitest/src/reactNativeRuntime.spec.ts](../../../../sources/toss__granite/packages/vitest/src/reactNativeRuntime.spec.ts) |
| CI workflows | 4 | [.github/workflows/docs-workflow.yaml](../../../../sources/toss__granite/.github/workflows/docs-workflow.yaml)<br>[.github/workflows/integrations.yaml](../../../../sources/toss__granite/.github/workflows/integrations.yaml)<br>[.github/workflows/labeler.yml](../../../../sources/toss__granite/.github/workflows/labeler.yml)<br>[.github/workflows/release.yaml](../../../../sources/toss__granite/.github/workflows/release.yaml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tools/src/index.ts`, `packages/vitest/src/index.ts`, `packages/video/src/index.ts`.
2. Trace execution through entrypoints: `tools/src/index.ts`, `packages/vitest/src/index.ts`, `packages/video/src/index.ts`.
3. Map agent/tool runtime through: `tools/package.json`, `tools/README.md`, `tools/tsconfig.json`.
4. Inspect retrieval/memory/indexing through: `tools/src/index.ts`, `services/showcase/index.ts`, `services/showcase/src/pages/index.tsx`.
5. Verify behavior through test/eval files: `services/showcase/src/components/Button.test.tsx`, `services/showcase/src/components/react-native-codegen.test.tsx`, `packages/vitest/src/jestBridge.spec.ts`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Enterprise grade React Native framework for microservice apps. Brownfield friendly, 200KB bundles, AWS ready infrastruct. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, react, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
