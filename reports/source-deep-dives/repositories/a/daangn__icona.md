# daangn/icona Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

icon integration platform (figma to github)

## 요약

- 조사 단위: `sources/daangn__icona` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,358 files, 34 directories, depth score 106, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/types/src/index.d.ts, packages/generator/src/index.ts, legacy/icona-cli/src/cli.ts이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | daangn/icona |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 88 |
| Forks | 9 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/daangn__icona](../../../../sources/daangn__icona) |
| Existing report | [reports/korea-trending/repositories/daangn__icona.md](../../../korea-trending/repositories/daangn__icona.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1358 / 34 |
| Max observed depth | 5 |
| Top directories | .changeset, .github, .yarn, figma-plugin, images, legacy, packages, test |
| Top extensions | .zip: 1241, .ts: 50, .json: 23, .md: 12, (none): 10, .tsx: 7, .png: 5, .yml: 3, .cjs: 2, .js: 2, .html: 1, .lock: 1 |
| Source patterns | monorepo/workspace, cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/generator | packages workspace | 5 |
| packages/types | packages workspace | 5 |
| .github | ci surface | 1 |
| figma-plugin | top-level component | 1 |
| images | top-level component | 1 |
| legacy | top-level component | 1 |
| packages | source boundary | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | ultra -r build |
| utility | package.json | clean | ultra -r clean |
| build | package.json | release | yarn changeset publish |
| utility | package.json | version | changeset version && yarn install --no-immutable |
| quality | package.json | lint | eslint . --ext .ts,.tsx,.js,.jsx |
| quality | package.json | lint:fix | eslint . --ext .ts,.tsx,.js,.jsx --fix |


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
| entrypoints | [packages/types/src/index.d.ts](../../../../sources/daangn__icona/packages/types/src/index.d.ts) | entrypoints signal |
| entrypoints | [packages/generator/src/index.ts](../../../../sources/daangn__icona/packages/generator/src/index.ts) | entrypoints signal |
| entrypoints | [legacy/icona-cli/src/cli.ts](../../../../sources/daangn__icona/legacy/icona-cli/src/cli.ts) | entrypoints signal |
| entrypoints | [legacy/icona-cli/src/index.ts](../../../../sources/daangn__icona/legacy/icona-cli/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/daangn__icona/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/daangn__icona/tsconfig.json) | config signal |
| config | [test/package.json](../../../../sources/daangn__icona/test/package.json) | config signal |
| config | [test/tsconfig.json](../../../../sources/daangn__icona/test/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/daangn__icona/README.md) | docs signal |
| docs | [test/README.md](../../../../sources/daangn__icona/test/README.md) | docs signal |
| docs | [packages/types/README.md](../../../../sources/daangn__icona/packages/types/README.md) | docs signal |
| docs | [packages/generator/README.md](../../../../sources/daangn__icona/packages/generator/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 8 | [packages/types/src/index.d.ts](../../../../sources/daangn__icona/packages/types/src/index.d.ts)<br>[packages/generator/src/index.ts](../../../../sources/daangn__icona/packages/generator/src/index.ts)<br>[legacy/icona-cli/src/cli.ts](../../../../sources/daangn__icona/legacy/icona-cli/src/cli.ts)<br>[legacy/icona-cli/src/index.ts](../../../../sources/daangn__icona/legacy/icona-cli/src/index.ts)<br>[legacy/figma-svg-extracter/src/index.ts](../../../../sources/daangn__icona/legacy/figma-svg-extracter/src/index.ts)<br>[legacy/figma-svg-extract-action/src/index.ts](../../../../sources/daangn__icona/legacy/figma-svg-extract-action/src/index.ts)<br>[figma-plugin/ui-src/main.tsx](../../../../sources/daangn__icona/figma-plugin/ui-src/main.tsx)<br>[figma-plugin/plugin-src/main.ts](../../../../sources/daangn__icona/figma-plugin/plugin-src/main.ts) |
| agentRuntime | 2 | [images/workflow-permissions.png](../../../../sources/daangn__icona/images/workflow-permissions.png)<br>[.yarn/cache/agent-base-npm-6.0.2-428f325a93-f52b6872cc.zip](../../../../sources/daangn__icona/.yarn/cache/agent-base-npm-6.0.2-428f325a93-f52b6872cc.zip) |
| mcp | 0 | not obvious |
| retrieval | 7 | [packages/types/src/index.d.ts](../../../../sources/daangn__icona/packages/types/src/index.d.ts)<br>[packages/generator/src/index.ts](../../../../sources/daangn__icona/packages/generator/src/index.ts)<br>[legacy/icona-cli/src/index.ts](../../../../sources/daangn__icona/legacy/icona-cli/src/index.ts)<br>[legacy/figma-svg-extracter/src/index.ts](../../../../sources/daangn__icona/legacy/figma-svg-extracter/src/index.ts)<br>[legacy/figma-svg-extract-action/src/index.ts](../../../../sources/daangn__icona/legacy/figma-svg-extract-action/src/index.ts)<br>[figma-plugin/ui-src/index.html](../../../../sources/daangn__icona/figma-plugin/ui-src/index.html)<br>[.yarn/cache/@changesets-get-dependents-graph-npm-1.3.5-054d68707f-d7abb1da21.zip](../../../../sources/daangn__icona/.yarn/cache/@changesets-get-dependents-graph-npm-1.3.5-054d68707f-d7abb1da21.zip) |
| spec | 0 | not obvious |
| eval | 12 | [test/.gitignore](../../../../sources/daangn__icona/test/.gitignore)<br>[test/icona.ts](../../../../sources/daangn__icona/test/icona.ts)<br>[test/package.json](../../../../sources/daangn__icona/test/package.json)<br>[test/README.md](../../../../sources/daangn__icona/test/README.md)<br>[test/tsconfig.json](../../../../sources/daangn__icona/test/tsconfig.json)<br>[test/.icona/icons.json](../../../../sources/daangn__icona/test/.icona/icons.json)<br>[test/.icona/multicolor.json](../../../../sources/daangn__icona/test/.icona/multicolor.json)<br>[.yarn/cache/@jridgewell-trace-mapping-npm-0.3.18-cd96571385-0572669f85.zip](../../../../sources/daangn__icona/.yarn/cache/@jridgewell-trace-mapping-npm-0.3.18-cd96571385-0572669f85.zip) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/publish.yml](../../../../sources/daangn__icona/.github/workflows/publish.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 9 | [README.md](../../../../sources/daangn__icona/README.md)<br>[test/README.md](../../../../sources/daangn__icona/test/README.md)<br>[packages/types/README.md](../../../../sources/daangn__icona/packages/types/README.md)<br>[packages/generator/README.md](../../../../sources/daangn__icona/packages/generator/README.md)<br>[legacy/icona-cli/README.md](../../../../sources/daangn__icona/legacy/icona-cli/README.md)<br>[legacy/figma-svg-extracter/README.md](../../../../sources/daangn__icona/legacy/figma-svg-extracter/README.md)<br>[legacy/figma-svg-extract-action/README.md](../../../../sources/daangn__icona/legacy/figma-svg-extract-action/README.md)<br>[figma-plugin/README.md](../../../../sources/daangn__icona/figma-plugin/README.md) |
| config | 17 | [package.json](../../../../sources/daangn__icona/package.json)<br>[tsconfig.json](../../../../sources/daangn__icona/tsconfig.json)<br>[test/package.json](../../../../sources/daangn__icona/test/package.json)<br>[test/tsconfig.json](../../../../sources/daangn__icona/test/tsconfig.json)<br>[packages/types/package.json](../../../../sources/daangn__icona/packages/types/package.json)<br>[packages/types/tsconfig.json](../../../../sources/daangn__icona/packages/types/tsconfig.json)<br>[packages/generator/package.json](../../../../sources/daangn__icona/packages/generator/package.json)<br>[packages/generator/tsconfig.json](../../../../sources/daangn__icona/packages/generator/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 12 | [test/.gitignore](../../../../sources/daangn__icona/test/.gitignore)<br>[test/icona.ts](../../../../sources/daangn__icona/test/icona.ts)<br>[test/package.json](../../../../sources/daangn__icona/test/package.json)<br>[test/README.md](../../../../sources/daangn__icona/test/README.md)<br>[test/tsconfig.json](../../../../sources/daangn__icona/test/tsconfig.json)<br>[test/.icona/icons.json](../../../../sources/daangn__icona/test/.icona/icons.json) |
| CI workflows | 1 | [.github/workflows/publish.yml](../../../../sources/daangn__icona/.github/workflows/publish.yml) |
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

1. Start from key references: `packages/types/src/index.d.ts`, `packages/generator/src/index.ts`, `legacy/icona-cli/src/cli.ts`.
2. Trace execution through entrypoints: `packages/types/src/index.d.ts`, `packages/generator/src/index.ts`, `legacy/icona-cli/src/cli.ts`.
3. Map agent/tool runtime through: `images/workflow-permissions.png`, `.yarn/cache/agent-base-npm-6.0.2-428f325a93-f52b6872cc.zip`.
4. Inspect retrieval/memory/indexing through: `packages/types/src/index.d.ts`, `packages/generator/src/index.ts`, `legacy/icona-cli/src/index.ts`.
5. Verify behavior through test/eval files: `test/.gitignore`, `test/icona.ts`, `test/package.json`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 icon integration platform figma to github. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, react, tests이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
