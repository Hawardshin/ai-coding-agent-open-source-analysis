# daangn/graplix Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Authorization framework for implementing Relation-based Access Control (ReBAC) with the Resolver (Inspired by GraphQL)

## 요약

- 조사 단위: `sources/daangn__graplix` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 114 files, 24 directories, depth score 97, key references 8개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

보안/거버넌스/안전 관점에서 monorepo/workspace, cli-first, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 instruction=CLAUDE.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | daangn/graplix |
| Topic | Security, Governance, and Safety / 보안/거버넌스/안전 |
| Region | korea |
| Language | TypeScript |
| Stars | 92 |
| Forks | 6 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/daangn__graplix](../../../../sources/daangn__graplix) |
| Existing report | [reports/korea-trending/repositories/daangn__graplix.md](../../../korea-trending/repositories/daangn__graplix.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 114 / 24 |
| Max observed depth | 5 |
| Top directories | .changeset, .github, .tech-specs, .yarn, packages, scripts, skill |
| Top extensions | .ts: 51, .json: 18, .md: 18, .graplix: 14, (none): 8, .yml: 2, .cjs: 1, .langium: 1, .lock: 1 |
| Source patterns | monorepo/workspace, cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/language | packages workspace | 9 |
| packages/codegen | packages workspace | 8 |
| packages/engine | packages workspace | 7 |
| packages/vscode-extension | packages workspace | 3 |
| .github | ci surface | 1 |
| packages | source boundary | 1 |
| scripts | top-level component | 1 |
| skill | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | ultra -r build |
| build | package.json | build:docs | yarn workspace @graplix/engine build:docs |
| utility | package.json | changeset:publish | changeset publish |
| utility | package.json | changeset:version | changeset version && yarn install --mode update-lockfile |
| quality | package.json | format | biome check --fix --unsafe |
| test | package.json | test | ultra -r test |


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
| instruction | [CLAUDE.md](../../../../sources/daangn__graplix/CLAUDE.md) | instruction signal |
| ci | [.github/workflows/deploy-packages.yml](../../../../sources/daangn__graplix/.github/workflows/deploy-packages.yml) | ci signal |
| config | [package.json](../../../../sources/daangn__graplix/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/daangn__graplix/tsconfig.json) | config signal |
| config | [packages/vscode-extension/package.json](../../../../sources/daangn__graplix/packages/vscode-extension/package.json) | config signal |
| config | [packages/vscode-extension/tsconfig.json](../../../../sources/daangn__graplix/packages/vscode-extension/tsconfig.json) | config signal |
| eval | [packages/language/src/parse.spec.ts](../../../../sources/daangn__graplix/packages/language/src/parse.spec.ts) | eval support |
| eval | [packages/language/src/validator.spec.ts](../../../../sources/daangn__graplix/packages/language/src/validator.spec.ts) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [packages/language/src/index.ts](../../../../sources/daangn__graplix/packages/language/src/index.ts)<br>[packages/engine/src/index.ts](../../../../sources/daangn__graplix/packages/engine/src/index.ts)<br>[packages/codegen/src/cli.ts](../../../../sources/daangn__graplix/packages/codegen/src/cli.ts)<br>[packages/codegen/src/index.ts](../../../../sources/daangn__graplix/packages/codegen/src/index.ts) |
| agentRuntime | 6 | [skill/README.md](../../../../sources/daangn__graplix/skill/README.md)<br>[skill/SKILL.md](../../../../sources/daangn__graplix/skill/SKILL.md)<br>[skill/references/common-errors.md](../../../../sources/daangn__graplix/skill/references/common-errors.md)<br>[skill/references/embedded-docs.md](../../../../sources/daangn__graplix/skill/references/embedded-docs.md)<br>[skill/references/quick-start.md](../../../../sources/daangn__graplix/skill/references/quick-start.md)<br>[skill/references/schema-syntax.md](../../../../sources/daangn__graplix/skill/references/schema-syntax.md) |
| mcp | 0 | not obvious |
| retrieval | 3 | [packages/language/src/index.ts](../../../../sources/daangn__graplix/packages/language/src/index.ts)<br>[packages/engine/src/index.ts](../../../../sources/daangn__graplix/packages/engine/src/index.ts)<br>[packages/codegen/src/index.ts](../../../../sources/daangn__graplix/packages/codegen/src/index.ts) |
| spec | 4 | [packages/language/src/parse.spec.ts](../../../../sources/daangn__graplix/packages/language/src/parse.spec.ts)<br>[packages/language/src/validator.spec.ts](../../../../sources/daangn__graplix/packages/language/src/validator.spec.ts)<br>[packages/engine/src/buildEngine.spec.ts](../../../../sources/daangn__graplix/packages/engine/src/buildEngine.spec.ts)<br>[packages/codegen/src/generate.spec.ts](../../../../sources/daangn__graplix/packages/codegen/src/generate.spec.ts) |
| eval | 4 | [packages/language/src/parse.spec.ts](../../../../sources/daangn__graplix/packages/language/src/parse.spec.ts)<br>[packages/language/src/validator.spec.ts](../../../../sources/daangn__graplix/packages/language/src/validator.spec.ts)<br>[packages/engine/src/buildEngine.spec.ts](../../../../sources/daangn__graplix/packages/engine/src/buildEngine.spec.ts)<br>[packages/codegen/src/generate.spec.ts](../../../../sources/daangn__graplix/packages/codegen/src/generate.spec.ts) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/deploy-packages.yml](../../../../sources/daangn__graplix/.github/workflows/deploy-packages.yml) |
| container | 0 | not obvious |
| instruction | 1 | [CLAUDE.md](../../../../sources/daangn__graplix/CLAUDE.md) |
| docs | 7 | [README.md](../../../../sources/daangn__graplix/README.md)<br>[skill/README.md](../../../../sources/daangn__graplix/skill/README.md)<br>[packages/vscode-extension/README.md](../../../../sources/daangn__graplix/packages/vscode-extension/README.md)<br>[packages/language/README.md](../../../../sources/daangn__graplix/packages/language/README.md)<br>[packages/engine/README.md](../../../../sources/daangn__graplix/packages/engine/README.md)<br>[packages/codegen/README.md](../../../../sources/daangn__graplix/packages/codegen/README.md)<br>[.changeset/README.md](../../../../sources/daangn__graplix/.changeset/README.md) |
| config | 10 | [package.json](../../../../sources/daangn__graplix/package.json)<br>[tsconfig.json](../../../../sources/daangn__graplix/tsconfig.json)<br>[packages/vscode-extension/package.json](../../../../sources/daangn__graplix/packages/vscode-extension/package.json)<br>[packages/vscode-extension/tsconfig.json](../../../../sources/daangn__graplix/packages/vscode-extension/tsconfig.json)<br>[packages/language/package.json](../../../../sources/daangn__graplix/packages/language/package.json)<br>[packages/language/tsconfig.json](../../../../sources/daangn__graplix/packages/language/tsconfig.json)<br>[packages/engine/package.json](../../../../sources/daangn__graplix/packages/engine/package.json)<br>[packages/engine/tsconfig.json](../../../../sources/daangn__graplix/packages/engine/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 4 | [packages/language/src/parse.spec.ts](../../../../sources/daangn__graplix/packages/language/src/parse.spec.ts)<br>[packages/language/src/validator.spec.ts](../../../../sources/daangn__graplix/packages/language/src/validator.spec.ts)<br>[packages/engine/src/buildEngine.spec.ts](../../../../sources/daangn__graplix/packages/engine/src/buildEngine.spec.ts)<br>[packages/codegen/src/generate.spec.ts](../../../../sources/daangn__graplix/packages/codegen/src/generate.spec.ts) |
| CI workflows | 1 | [.github/workflows/deploy-packages.yml](../../../../sources/daangn__graplix/.github/workflows/deploy-packages.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/daangn__graplix/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `CLAUDE.md`, `.github/workflows/deploy-packages.yml`, `package.json`.
2. Trace execution through entrypoints: `packages/language/src/index.ts`, `packages/engine/src/index.ts`, `packages/codegen/src/cli.ts`.
3. Map agent/tool runtime through: `skill/README.md`, `skill/SKILL.md`, `skill/references/common-errors.md`.
4. Inspect retrieval/memory/indexing through: `packages/language/src/index.ts`, `packages/engine/src/index.ts`, `packages/codegen/src/index.ts`.
5. Verify behavior through test/eval files: `packages/language/src/parse.spec.ts`, `packages/language/src/validator.spec.ts`, `packages/engine/src/buildEngine.spec.ts`.

## Existing Repository Insight

보안/거버넌스/안전 관점에서 Authorization framework for implementing Relation based Access Control ReBAC with the Resolver Inspired by GraphQL. 핵심 구조 신호는 TypeScript, package.json, README.md, CLAUDE.md, LICENSE, tests이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 보안/거버넌스/안전 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
