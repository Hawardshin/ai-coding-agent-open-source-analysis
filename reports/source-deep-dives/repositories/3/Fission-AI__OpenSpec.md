# Fission-AI/OpenSpec Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 842 files, 462 directories.

## 요약

- 조사 단위: `sources/Fission-AI__OpenSpec` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 842 files, 462 directories, depth score 121, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, test/AGENTS.md, test/core/workspace/skills.test.ts이고, 의존성 단서는 commander, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Fission-AI/OpenSpec |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | TypeScript |
| Stars | 55359 |
| Forks | 3873 |
| License | MIT License |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/Fission-AI__OpenSpec](../../../../sources/Fission-AI__OpenSpec) |
| Existing report | [reports/clone-structures/Fission-AI__OpenSpec.md](../../../clone-structures/Fission-AI__OpenSpec.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 842 / 462 |
| Max observed depth | 9 |
| Top directories | .changeset, .devcontainer, .github, assets, bin, docs, openspec, schemas, scripts, src, test |
| Top extensions | .md: 517, .ts: 272, .yaml: 29, .json: 5, .js: 4, (none): 4, .png: 2, .sh: 2, .svg: 2, .yml: 2, .lock: 1, .mjs: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 52 |
| docs | documentation surface | 14 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| bin | top-level component | 1 |
| openspec | top-level component | 1 |
| schemas | top-level component | 1 |
| scripts | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| quality | package.json | lint | eslint src/ |
| build | package.json | build | node build.js |
| serve-dev | package.json | dev | tsc --watch |
| test | package.json | dev:cli | pnpm build && node bin/openspec.js |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
| test | package.json | test:ui | vitest --ui |
| test | package.json | test:coverage | vitest --coverage |
| test | package.json | test:postinstall | node scripts/postinstall.js |
| build | package.json | prepare | pnpm run build |
| build | package.json | prepublishOnly | pnpm run build |
| utility | package.json | postinstall | node scripts/postinstall.js |
| quality | package.json | check:pack-version | node scripts/pack-version-check.mjs |
| build | package.json | release | pnpm run release:ci |
| build | package.json | release:ci | pnpm run check:pack-version && pnpm exec changeset publish |
| utility | package.json | changeset | changeset |
| entrypoint | package.json bin | openspec.js | ./bin/openspec.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | commander |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [AGENTS.md](../../../../sources/Fission-AI__OpenSpec/AGENTS.md) | agentRuntime signal |
| agentRuntime | [test/AGENTS.md](../../../../sources/Fission-AI__OpenSpec/test/AGENTS.md) | agentRuntime signal |
| agentRuntime | [test/core/workspace/skills.test.ts](../../../../sources/Fission-AI__OpenSpec/test/core/workspace/skills.test.ts) | agentRuntime signal |
| agentRuntime | [test/core/templates/skill-templates-parity.test.ts](../../../../sources/Fission-AI__OpenSpec/test/core/templates/skill-templates-parity.test.ts) | agentRuntime signal |
| entrypoints | [src/index.ts](../../../../sources/Fission-AI__OpenSpec/src/index.ts) | entrypoints signal |
| entrypoints | [bin/openspec.js](../../../../sources/Fission-AI__OpenSpec/bin/openspec.js) | entrypoints signal |
| config | [package.json](../../../../sources/Fission-AI__OpenSpec/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/Fission-AI__OpenSpec/tsconfig.json) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/Fission-AI__OpenSpec/.github/workflows/ci.yml) | ci support |
| ci | [.github/workflows/README.md](../../../../sources/Fission-AI__OpenSpec/.github/workflows/README.md) | ci support |
| eval | [test/utils/change-metadata.test.ts](../../../../sources/Fission-AI__OpenSpec/test/utils/change-metadata.test.ts) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [src/index.ts](../../../../sources/Fission-AI__OpenSpec/src/index.ts)<br>[bin/openspec.js](../../../../sources/Fission-AI__OpenSpec/bin/openspec.js) |
| agentRuntime | 97 | [AGENTS.md](../../../../sources/Fission-AI__OpenSpec/AGENTS.md)<br>[test/AGENTS.md](../../../../sources/Fission-AI__OpenSpec/test/AGENTS.md)<br>[test/core/workspace/skills.test.ts](../../../../sources/Fission-AI__OpenSpec/test/core/workspace/skills.test.ts)<br>[test/core/templates/skill-templates-parity.test.ts](../../../../sources/Fission-AI__OpenSpec/test/core/templates/skill-templates-parity.test.ts)<br>[test/core/shared/skill-generation.test.ts](../../../../sources/Fission-AI__OpenSpec/test/core/shared/skill-generation.test.ts)<br>[test/core/shared/tool-detection.test.ts](../../../../sources/Fission-AI__OpenSpec/test/core/shared/tool-detection.test.ts)<br>[test/core/context-store/foundation.test.ts](../../../../sources/Fission-AI__OpenSpec/test/core/context-store/foundation.test.ts)<br>[test/core/context-store/registry.test.ts](../../../../sources/Fission-AI__OpenSpec/test/core/context-store/registry.test.ts) |
| mcp | 0 | not obvious |
| retrieval | 39 | [test/telemetry/index.test.ts](../../../../sources/Fission-AI__OpenSpec/test/telemetry/index.test.ts)<br>[test/core/artifact-graph/graph.test.ts](../../../../sources/Fission-AI__OpenSpec/test/core/artifact-graph/graph.test.ts)<br>[test/core/artifact-graph/instruction-loader.test.ts](../../../../sources/Fission-AI__OpenSpec/test/core/artifact-graph/instruction-loader.test.ts)<br>[test/core/artifact-graph/outputs.test.ts](../../../../sources/Fission-AI__OpenSpec/test/core/artifact-graph/outputs.test.ts)<br>[test/core/artifact-graph/resolver.test.ts](../../../../sources/Fission-AI__OpenSpec/test/core/artifact-graph/resolver.test.ts)<br>[test/core/artifact-graph/schema.test.ts](../../../../sources/Fission-AI__OpenSpec/test/core/artifact-graph/schema.test.ts)<br>[test/core/artifact-graph/state.test.ts](../../../../sources/Fission-AI__OpenSpec/test/core/artifact-graph/state.test.ts)<br>[test/core/artifact-graph/workflow.integration.test.ts](../../../../sources/Fission-AI__OpenSpec/test/core/artifact-graph/workflow.integration.test.ts) |
| spec | 250 | [test/fixtures/tmp-init/openspec/specs/alpha/spec.md](../../../../sources/Fission-AI__OpenSpec/test/fixtures/tmp-init/openspec/specs/alpha/spec.md)<br>[test/fixtures/tmp-init/openspec/changes/c1/specs/alpha/spec.md](../../../../sources/Fission-AI__OpenSpec/test/fixtures/tmp-init/openspec/changes/c1/specs/alpha/spec.md)<br>[test/core/parsers/requirement-blocks.test.ts](../../../../sources/Fission-AI__OpenSpec/test/core/parsers/requirement-blocks.test.ts)<br>[test/commands/spec.interactive-show.test.ts](../../../../sources/Fission-AI__OpenSpec/test/commands/spec.interactive-show.test.ts)<br>[test/commands/spec.interactive-validate.test.ts](../../../../sources/Fission-AI__OpenSpec/test/commands/spec.interactive-validate.test.ts)<br>[test/commands/spec.test.ts](../../../../sources/Fission-AI__OpenSpec/test/commands/spec.test.ts)<br>[src/core/schemas/spec.schema.ts](../../../../sources/Fission-AI__OpenSpec/src/core/schemas/spec.schema.ts)<br>[src/core/parsers/requirement-blocks.ts](../../../../sources/Fission-AI__OpenSpec/src/core/parsers/requirement-blocks.ts) |
| eval | 291 | [test/AGENTS.md](../../../../sources/Fission-AI__OpenSpec/test/AGENTS.md)<br>[test/utils/change-metadata.test.ts](../../../../sources/Fission-AI__OpenSpec/test/utils/change-metadata.test.ts)<br>[test/utils/change-utils.test.ts](../../../../sources/Fission-AI__OpenSpec/test/utils/change-utils.test.ts)<br>[test/utils/command-references.test.ts](../../../../sources/Fission-AI__OpenSpec/test/utils/command-references.test.ts)<br>[test/utils/file-system.test.ts](../../../../sources/Fission-AI__OpenSpec/test/utils/file-system.test.ts)<br>[test/utils/interactive.test.ts](../../../../sources/Fission-AI__OpenSpec/test/utils/interactive.test.ts)<br>[test/utils/marker-updates.test.ts](../../../../sources/Fission-AI__OpenSpec/test/utils/marker-updates.test.ts)<br>[test/utils/shell-detection.test.ts](../../../../sources/Fission-AI__OpenSpec/test/utils/shell-detection.test.ts) |
| security | 1 | [src/core/change-status-policy.ts](../../../../sources/Fission-AI__OpenSpec/src/core/change-status-policy.ts) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/Fission-AI__OpenSpec/.github/workflows/ci.yml)<br>[.github/workflows/README.md](../../../../sources/Fission-AI__OpenSpec/.github/workflows/README.md)<br>[.github/workflows/release-prepare.yml](../../../../sources/Fission-AI__OpenSpec/.github/workflows/release-prepare.yml) |
| container | 0 | not obvious |
| instruction | 2 | [AGENTS.md](../../../../sources/Fission-AI__OpenSpec/AGENTS.md)<br>[test/AGENTS.md](../../../../sources/Fission-AI__OpenSpec/test/AGENTS.md) |
| docs | 24 | [README_OLD.md](../../../../sources/Fission-AI__OpenSpec/README_OLD.md)<br>[README.md](../../../../sources/Fission-AI__OpenSpec/README.md)<br>[scripts/README.md](../../../../sources/Fission-AI__OpenSpec/scripts/README.md)<br>[openspec/initiatives/context-store-and-initiatives/README.md](../../../../sources/Fission-AI__OpenSpec/openspec/initiatives/context-store-and-initiatives/README.md)<br>[openspec/changes/workspace-reimplementation-roadmap/README.md](../../../../sources/Fission-AI__OpenSpec/openspec/changes/workspace-reimplementation-roadmap/README.md)<br>[openspec/changes/archive/2026-04-23-add-kimi-cli-skills-only-support/README.md](../../../../sources/Fission-AI__OpenSpec/openspec/changes/archive/2026-04-23-add-kimi-cli-skills-only-support/README.md)<br>[openspec/changes/archive/2026-01-30-opencode-command-references/README.md](../../../../sources/Fission-AI__OpenSpec/openspec/changes/archive/2026-01-30-opencode-command-references/README.md)<br>[openspec/changes/archive/2025-08-11-add-complexity-guidelines/specs/openspec-docs/README.md](../../../../sources/Fission-AI__OpenSpec/openspec/changes/archive/2025-08-11-add-complexity-guidelines/specs/openspec-docs/README.md) |
| config | 2 | [package.json](../../../../sources/Fission-AI__OpenSpec/package.json)<br>[tsconfig.json](../../../../sources/Fission-AI__OpenSpec/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 291 | [test/AGENTS.md](../../../../sources/Fission-AI__OpenSpec/test/AGENTS.md)<br>[test/utils/change-metadata.test.ts](../../../../sources/Fission-AI__OpenSpec/test/utils/change-metadata.test.ts)<br>[test/utils/change-utils.test.ts](../../../../sources/Fission-AI__OpenSpec/test/utils/change-utils.test.ts)<br>[test/utils/command-references.test.ts](../../../../sources/Fission-AI__OpenSpec/test/utils/command-references.test.ts)<br>[test/utils/file-system.test.ts](../../../../sources/Fission-AI__OpenSpec/test/utils/file-system.test.ts)<br>[test/utils/interactive.test.ts](../../../../sources/Fission-AI__OpenSpec/test/utils/interactive.test.ts) |
| CI workflows | 3 | [.github/workflows/ci.yml](../../../../sources/Fission-AI__OpenSpec/.github/workflows/ci.yml)<br>[.github/workflows/README.md](../../../../sources/Fission-AI__OpenSpec/.github/workflows/README.md)<br>[.github/workflows/release-prepare.yml](../../../../sources/Fission-AI__OpenSpec/.github/workflows/release-prepare.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [src/core/change-status-policy.ts](../../../../sources/Fission-AI__OpenSpec/src/core/change-status-policy.ts) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/Fission-AI__OpenSpec/AGENTS.md)<br>[test/AGENTS.md](../../../../sources/Fission-AI__OpenSpec/test/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `AGENTS.md`, `test/AGENTS.md`, `test/core/workspace/skills.test.ts`.
2. Trace execution through entrypoints: `src/index.ts`, `bin/openspec.js`.
3. Map agent/tool runtime through: `AGENTS.md`, `test/AGENTS.md`, `test/core/workspace/skills.test.ts`.
4. Inspect retrieval/memory/indexing through: `test/telemetry/index.test.ts`, `test/core/artifact-graph/graph.test.ts`, `test/core/artifact-graph/instruction-loader.test.ts`.
5. Verify behavior through test/eval files: `test/AGENTS.md`, `test/utils/change-metadata.test.ts`, `test/utils/change-utils.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 842 files, 462 directories.. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, LICENSE, tests이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 major metadata risk not obvious입니다.
