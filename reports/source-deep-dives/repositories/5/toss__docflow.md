# toss/docflow Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

A TypeScript-first documentation generator from JSDoc comments

## 요약

- 조사 단위: `sources/toss__docflow` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 224 files, 87 directories, depth score 107, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/cli/src/cli.ts, packages/cli/src/index.ts, packages/cli/bin/cli.js이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | toss/docflow |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 106 |
| Forks | 13 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/toss__docflow](../../../../sources/toss__docflow) |
| Existing report | [reports/korea-trending/repositories/toss__docflow.md](../../../korea-trending/repositories/toss__docflow.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 224 / 87 |
| Max observed depth | 9 |
| Top directories | .changeset, .github, .yarn, docs, packages |
| Top extensions | .ts: 95, .md: 72, .json: 11, .js: 10, (none): 9, .mts: 7, .png: 7, .yml: 5, .cjs: 4, .css: 1, .gif: 1, .lock: 1 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/cli | packages workspace | 73 |
| docs | documentation surface | 43 |
| .github | ci surface | 1 |
| packages | source boundary | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| quality | package.json | lint | yarn workspaces foreach -ptR --from 'packages/*' run lint |
| quality | package.json | typecheck | yarn workspaces foreach -ptR --from 'packages/*' run typecheck |
| build | package.json | build | yarn workspaces foreach -ptR --from 'packages/*' run build |
| test | package.json | test | yarn workspaces foreach -ptR --from 'packages/*' run test |
| quality | package.json | format | prettier --write 'packages/**/*' 'docs/**/*.{ts,tsx,js,jsx,json}' |
| quality | package.json | format:check | prettier --check 'packages/**/*' 'docs/**/*.{ts,tsx,js,jsx,json}' |
| utility | package.json | changeset:version | changeset version |
| utility | package.json | changeset:publish | changeset publish |


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
| entrypoints | [packages/cli/src/cli.ts](../../../../sources/toss__docflow/packages/cli/src/cli.ts) | entrypoints signal |
| entrypoints | [packages/cli/src/index.ts](../../../../sources/toss__docflow/packages/cli/src/index.ts) | entrypoints signal |
| entrypoints | [packages/cli/bin/cli.js](../../../../sources/toss__docflow/packages/cli/bin/cli.js) | entrypoints signal |
| entrypoints | [.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__docflow/.yarn/sdks/typescript/bin/tsc) | entrypoints signal |
| config | [package.json](../../../../sources/toss__docflow/package.json) | config signal |
| config | [packages/cli/package.json](../../../../sources/toss__docflow/packages/cli/package.json) | config signal |
| config | [packages/cli/tsconfig.json](../../../../sources/toss__docflow/packages/cli/tsconfig.json) | config signal |
| config | [docs/package.json](../../../../sources/toss__docflow/docs/package.json) | config signal |
| docs | [README-ko_kr.md](../../../../sources/toss__docflow/README-ko_kr.md) | docs signal |
| docs | [README.md](../../../../sources/toss__docflow/README.md) | docs signal |
| docs | [packages/cli/README.md](../../../../sources/toss__docflow/packages/cli/README.md) | docs signal |
| docs | [docs/index.md](../../../../sources/toss__docflow/docs/index.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 7 | [packages/cli/src/cli.ts](../../../../sources/toss__docflow/packages/cli/src/cli.ts)<br>[packages/cli/src/index.ts](../../../../sources/toss__docflow/packages/cli/src/index.ts)<br>[packages/cli/bin/cli.js](../../../../sources/toss__docflow/packages/cli/bin/cli.js)<br>[.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__docflow/.yarn/sdks/typescript/bin/tsc)<br>[.yarn/sdks/typescript/bin/tsserver](../../../../sources/toss__docflow/.yarn/sdks/typescript/bin/tsserver)<br>[.yarn/sdks/prettier/bin/prettier.cjs](../../../../sources/toss__docflow/.yarn/sdks/prettier/bin/prettier.cjs)<br>[.yarn/sdks/eslint/bin/eslint.js](../../../../sources/toss__docflow/.yarn/sdks/eslint/bin/eslint.js) |
| agentRuntime | 1 | [packages/cli/src/tests/e2e/workflow.e2e.spec.ts](../../../../sources/toss__docflow/packages/cli/src/tests/e2e/workflow.e2e.spec.ts) |
| mcp | 0 | not obvious |
| retrieval | 9 | [packages/cli/src/index.ts](../../../../sources/toss__docflow/packages/cli/src/index.ts)<br>[packages/cli/src/commands/generate/index.ts](../../../../sources/toss__docflow/packages/cli/src/commands/generate/index.ts)<br>[packages/cli/src/commands/check/index.ts](../../../../sources/toss__docflow/packages/cli/src/commands/check/index.ts)<br>[docs/index.md](../../../../sources/toss__docflow/docs/index.md)<br>[docs/ko/index.md](../../../../sources/toss__docflow/docs/ko/index.md)<br>[docs/en/index.md](../../../../sources/toss__docflow/docs/en/index.md)<br>[docs/.vitepress/theme/index.ts](../../../../sources/toss__docflow/docs/.vitepress/theme/index.ts)<br>[.yarn/sdks/prettier/index.cjs](../../../../sources/toss__docflow/.yarn/sdks/prettier/index.cjs) |
| spec | 26 | [packages/cli/src/tests/plugin/plugin-loader.spec.ts](../../../../sources/toss__docflow/packages/cli/src/tests/plugin/plugin-loader.spec.ts)<br>[packages/cli/src/tests/plugin/plugin-manager.spec.ts](../../../../sources/toss__docflow/packages/cli/src/tests/plugin/plugin-manager.spec.ts)<br>[packages/cli/src/tests/package-manager/package-manager.spec.ts](../../../../sources/toss__docflow/packages/cli/src/tests/package-manager/package-manager.spec.ts)<br>[packages/cli/src/tests/e2e/workflow.e2e.spec.ts](../../../../sources/toss__docflow/packages/cli/src/tests/e2e/workflow.e2e.spec.ts)<br>[packages/cli/src/tests/core/entry-point.spec.ts](../../../../sources/toss__docflow/packages/cli/src/tests/core/entry-point.spec.ts)<br>[packages/cli/src/tests/core/get-ts-config-path.spec.ts](../../../../sources/toss__docflow/packages/cli/src/tests/core/get-ts-config-path.spec.ts)<br>[packages/cli/src/tests/core/get-ts-project.spec.ts](../../../../sources/toss__docflow/packages/cli/src/tests/core/get-ts-project.spec.ts)<br>[packages/cli/src/tests/core/parser/source/exclude-barrel-re-exports.spec.ts](../../../../sources/toss__docflow/packages/cli/src/tests/core/parser/source/exclude-barrel-re-exports.spec.ts) |
| eval | 37 | [packages/cli/src/tests/utils/create-e2e-workspace.ts](../../../../sources/toss__docflow/packages/cli/src/tests/utils/create-e2e-workspace.ts)<br>[packages/cli/src/tests/utils/create-test-workspace.ts](../../../../sources/toss__docflow/packages/cli/src/tests/utils/create-test-workspace.ts)<br>[packages/cli/src/tests/utils/create-ts-source-file.ts](../../../../sources/toss__docflow/packages/cli/src/tests/utils/create-ts-source-file.ts)<br>[packages/cli/src/tests/utils/docflow-config.ts](../../../../sources/toss__docflow/packages/cli/src/tests/utils/docflow-config.ts)<br>[packages/cli/src/tests/utils/generator-config.ts](../../../../sources/toss__docflow/packages/cli/src/tests/utils/generator-config.ts)<br>[packages/cli/src/tests/utils/package-creators.ts](../../../../sources/toss__docflow/packages/cli/src/tests/utils/package-creators.ts)<br>[packages/cli/src/tests/utils/parse-jsdoc-from-node.ts](../../../../sources/toss__docflow/packages/cli/src/tests/utils/parse-jsdoc-from-node.ts)<br>[packages/cli/src/tests/utils/plugin-mocks.ts](../../../../sources/toss__docflow/packages/cli/src/tests/utils/plugin-mocks.ts) |
| security | 0 | not obvious |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/toss__docflow/.github/workflows/ci.yml)<br>[.github/workflows/deploy-docs.yml](../../../../sources/toss__docflow/.github/workflows/deploy-docs.yml)<br>[.github/workflows/release.yml](../../../../sources/toss__docflow/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 90 | [README-ko_kr.md](../../../../sources/toss__docflow/README-ko_kr.md)<br>[README.md](../../../../sources/toss__docflow/README.md)<br>[packages/cli/README.md](../../../../sources/toss__docflow/packages/cli/README.md)<br>[docs/index.md](../../../../sources/toss__docflow/docs/index.md)<br>[docs/package.json](../../../../sources/toss__docflow/docs/package.json)<br>[docs/README.md](../../../../sources/toss__docflow/docs/README.md)<br>[docs/public/hero.png](../../../../sources/toss__docflow/docs/public/hero.png)<br>[docs/public/logo.png](../../../../sources/toss__docflow/docs/public/logo.png) |
| config | 7 | [package.json](../../../../sources/toss__docflow/package.json)<br>[packages/cli/package.json](../../../../sources/toss__docflow/packages/cli/package.json)<br>[packages/cli/tsconfig.json](../../../../sources/toss__docflow/packages/cli/tsconfig.json)<br>[docs/package.json](../../../../sources/toss__docflow/docs/package.json)<br>[.yarn/sdks/typescript/package.json](../../../../sources/toss__docflow/.yarn/sdks/typescript/package.json)<br>[.yarn/sdks/prettier/package.json](../../../../sources/toss__docflow/.yarn/sdks/prettier/package.json)<br>[.yarn/sdks/eslint/package.json](../../../../sources/toss__docflow/.yarn/sdks/eslint/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 37 | [packages/cli/src/tests/utils/create-e2e-workspace.ts](../../../../sources/toss__docflow/packages/cli/src/tests/utils/create-e2e-workspace.ts)<br>[packages/cli/src/tests/utils/create-test-workspace.ts](../../../../sources/toss__docflow/packages/cli/src/tests/utils/create-test-workspace.ts)<br>[packages/cli/src/tests/utils/create-ts-source-file.ts](../../../../sources/toss__docflow/packages/cli/src/tests/utils/create-ts-source-file.ts)<br>[packages/cli/src/tests/utils/docflow-config.ts](../../../../sources/toss__docflow/packages/cli/src/tests/utils/docflow-config.ts)<br>[packages/cli/src/tests/utils/generator-config.ts](../../../../sources/toss__docflow/packages/cli/src/tests/utils/generator-config.ts)<br>[packages/cli/src/tests/utils/package-creators.ts](../../../../sources/toss__docflow/packages/cli/src/tests/utils/package-creators.ts) |
| CI workflows | 3 | [.github/workflows/ci.yml](../../../../sources/toss__docflow/.github/workflows/ci.yml)<br>[.github/workflows/deploy-docs.yml](../../../../sources/toss__docflow/.github/workflows/deploy-docs.yml)<br>[.github/workflows/release.yml](../../../../sources/toss__docflow/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `packages/cli/src/cli.ts`, `packages/cli/src/index.ts`, `packages/cli/bin/cli.js`.
2. Trace execution through entrypoints: `packages/cli/src/cli.ts`, `packages/cli/src/index.ts`, `packages/cli/bin/cli.js`.
3. Map agent/tool runtime through: `packages/cli/src/tests/e2e/workflow.e2e.spec.ts`.
4. Inspect retrieval/memory/indexing through: `packages/cli/src/index.ts`, `packages/cli/src/commands/generate/index.ts`, `packages/cli/src/commands/check/index.ts`.
5. Verify behavior through test/eval files: `packages/cli/src/tests/utils/create-e2e-workspace.ts`, `packages/cli/src/tests/utils/create-test-workspace.ts`, `packages/cli/src/tests/utils/create-ts-source-file.ts`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 A TypeScript first documentation generator from JSDoc comments. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
