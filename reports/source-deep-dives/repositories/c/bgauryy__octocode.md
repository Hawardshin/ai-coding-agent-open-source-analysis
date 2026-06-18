# bgauryy/octocode Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

MCP server for semantic code research and context generation on real-time using LLM patterns | Search naturally across public & private repos based on your permissions | Transform any accessible codebase/s into AI-optimized knowledge on simple and complex flows | Find real implementations and live docs from anywhere

## 요약

- 조사 단위: `sources/bgauryy__octocode` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,213 files, 203 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=skills/octocode-research/src/types/mcp.ts, packages/octocode-mcp/.dxtignore, packages/octocode-mcp/build.mjs이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | bgauryy/octocode |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 864 |
| Forks | 73 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/bgauryy__octocode](../../../../sources/bgauryy__octocode) |
| Existing report | [reports/global-trending/repositories/bgauryy__octocode.md](../../../global-trending/repositories/bgauryy__octocode.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1213 / 203 |
| Max observed depth | 6 |
| Top directories | .github, .yarn, assets, benchmark, docs, packages, scripts, skills |
| Top extensions | .ts: 910, .md: 171, .mjs: 43, .json: 34, (none): 14, .sh: 11, .js: 9, .html: 5, .png: 4, .yml: 4, .cjs: 2, .css: 2 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/octocode-mcp | packages workspace | 52 |
| packages/octocode-security-utils | packages workspace | 41 |
| docs | documentation surface | 21 |
| packages/octocode-cli | packages workspace | 14 |
| packages/octocode-shared | packages workspace | 10 |
| packages/octocode-vscode | packages workspace | 3 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| benchmark | validation surface | 1 |
| packages | source boundary | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | node ./scripts/workspace-health.mjs run build |
| utility | package.json | docs:verify | node ./scripts/docs-verify.mjs |
| quality | package.json | health:check | node ./scripts/workspace-health.mjs check |
| utility | package.json | health:report | node ./scripts/workspace-health.mjs report |
| quality | package.json | lint | node ./scripts/workspace-health.mjs run lint |
| quality | package.json | lint:fix | yarn workspaces foreach -Apt run lint:fix |
| utility | package.json | syncpack:fix | syncpack fix |
| quality | package.json | syncpack:format | syncpack format |
| quality | package.json | syncpack:lint | syncpack lint |
| utility | package.json | syncpack:list | syncpack list |
| test | package.json | test | node ./scripts/workspace-health.mjs run test |
| test | package.json | test:quiet | yarn workspaces foreach -Apt run test:quiet |
| quality | package.json | typecheck | node ./scripts/workspace-health.mjs run typecheck |
| utility | package.json | verify | node ./scripts/workspace-health.mjs verify |


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
| mcp | [skills/octocode-research/src/types/mcp.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/types/mcp.ts) | mcp signal |
| mcp | [packages/octocode-mcp/.dxtignore](../../../../sources/bgauryy__octocode/packages/octocode-mcp/.dxtignore) | mcp signal |
| mcp | [packages/octocode-mcp/build.mjs](../../../../sources/bgauryy__octocode/packages/octocode-mcp/build.mjs) | mcp signal |
| mcp | [packages/octocode-mcp/LICENSE](../../../../sources/bgauryy__octocode/packages/octocode-mcp/LICENSE) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/bgauryy__octocode/AGENTS.md) | agentRuntime signal |
| agentRuntime | [skills/README.md](../../../../sources/bgauryy__octocode/skills/README.md) | agentRuntime signal |
| agentRuntime | [skills/octocode-stats/SKILL.md](../../../../sources/bgauryy__octocode/skills/octocode-stats/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/octocode-stats/scripts/build_dashboard.mjs](../../../../sources/bgauryy__octocode/skills/octocode-stats/scripts/build_dashboard.mjs) | agentRuntime signal |
| entrypoints | [skills/octocode-research/src/index.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/index.ts) | entrypoints signal |
| entrypoints | [skills/octocode-research/src/server.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/server.ts) | entrypoints signal |
| entrypoints | [skills/octocode-research/scripts/server.d.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/scripts/server.d.ts) | entrypoints signal |
| entrypoints | [skills/octocode-research/scripts/server.js](../../../../sources/bgauryy__octocode/skills/octocode-research/scripts/server.js) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 13 | [skills/octocode-research/src/index.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/index.ts)<br>[skills/octocode-research/src/server.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/server.ts)<br>[skills/octocode-research/scripts/server.d.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/scripts/server.d.ts)<br>[skills/octocode-research/scripts/server.js](../../../../sources/bgauryy__octocode/skills/octocode-research/scripts/server.js)<br>[skills/octocode-engineer/src/index.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-engineer/src/index.test.ts)<br>[skills/octocode-engineer/src/index.ts](../../../../sources/bgauryy__octocode/skills/octocode-engineer/src/index.ts)<br>[skills/octocode-engineer/src/pipeline/main.ts](../../../../sources/bgauryy__octocode/skills/octocode-engineer/src/pipeline/main.ts)<br>[packages/octocode-shared/src/index.ts](../../../../sources/bgauryy__octocode/packages/octocode-shared/src/index.ts) |
| agentRuntime | 561 | [AGENTS.md](../../../../sources/bgauryy__octocode/AGENTS.md)<br>[skills/README.md](../../../../sources/bgauryy__octocode/skills/README.md)<br>[skills/octocode-stats/SKILL.md](../../../../sources/bgauryy__octocode/skills/octocode-stats/SKILL.md)<br>[skills/octocode-stats/scripts/build_dashboard.mjs](../../../../sources/bgauryy__octocode/skills/octocode-stats/scripts/build_dashboard.mjs)<br>[skills/octocode-stats/assets/template.html](../../../../sources/bgauryy__octocode/skills/octocode-stats/assets/template.html)<br>[skills/octocode-slides/README.md](../../../../sources/bgauryy__octocode/skills/octocode-slides/README.md)<br>[skills/octocode-slides/SKILL.md](../../../../sources/bgauryy__octocode/skills/octocode-slides/SKILL.md)<br>[skills/octocode-slides/scripts/animation.js](../../../../sources/bgauryy__octocode/skills/octocode-slides/scripts/animation.js) |
| mcp | 564 | [skills/octocode-research/src/types/mcp.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/types/mcp.ts)<br>[packages/octocode-mcp/.dxtignore](../../../../sources/bgauryy__octocode/packages/octocode-mcp/.dxtignore)<br>[packages/octocode-mcp/build.mjs](../../../../sources/bgauryy__octocode/packages/octocode-mcp/build.mjs)<br>[packages/octocode-mcp/LICENSE](../../../../sources/bgauryy__octocode/packages/octocode-mcp/LICENSE)<br>[packages/octocode-mcp/manifest.json](../../../../sources/bgauryy__octocode/packages/octocode-mcp/manifest.json)<br>[packages/octocode-mcp/package.json](../../../../sources/bgauryy__octocode/packages/octocode-mcp/package.json)<br>[packages/octocode-mcp/README.md](../../../../sources/bgauryy__octocode/packages/octocode-mcp/README.md)<br>[packages/octocode-mcp/server.json](../../../../sources/bgauryy__octocode/packages/octocode-mcp/server.json) |
| retrieval | 34 | [skills/octocode-research/src/index.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/index.ts)<br>[skills/octocode-research/src/validation/index.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/validation/index.ts)<br>[skills/octocode-engineer/src/index.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-engineer/src/index.test.ts)<br>[skills/octocode-engineer/src/index.ts](../../../../sources/bgauryy__octocode/skills/octocode-engineer/src/index.ts)<br>[skills/octocode-engineer/src/types/index.ts](../../../../sources/bgauryy__octocode/skills/octocode-engineer/src/types/index.ts)<br>[skills/octocode-engineer/src/reporting/graph-features.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-engineer/src/reporting/graph-features.test.ts)<br>[skills/octocode-engineer/src/detectors/index.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-engineer/src/detectors/index.test.ts)<br>[skills/octocode-engineer/src/detectors/index.ts](../../../../sources/bgauryy__octocode/skills/octocode-engineer/src/detectors/index.ts) |
| spec | 16 | [skills/octocode-slides/references/04-design.md](../../../../sources/bgauryy__octocode/skills/octocode-slides/references/04-design.md)<br>[skills/octocode-slides/references/design-system.md](../../../../sources/bgauryy__octocode/skills/octocode-slides/references/design-system.md)<br>[skills/octocode-research/docs/ARCHITECTURE.md](../../../../sources/bgauryy__octocode/skills/octocode-research/docs/ARCHITECTURE.md)<br>[skills/octocode-design/README.md](../../../../sources/bgauryy__octocode/skills/octocode-design/README.md)<br>[skills/octocode-design/SKILL.md](../../../../sources/bgauryy__octocode/skills/octocode-design/SKILL.md)<br>[skills/octocode-design/references/components.md](../../../../sources/bgauryy__octocode/skills/octocode-design/references/components.md)<br>[skills/octocode-design/references/resources.md](../../../../sources/bgauryy__octocode/skills/octocode-design/references/resources.md)<br>[skills/octocode-design/references/tokens.md](../../../../sources/bgauryy__octocode/skills/octocode-design/references/tokens.md) |
| eval | 496 | [skills/octocode-research/src/__tests__/unit/circuitBreaker.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/__tests__/unit/circuitBreaker.test.ts)<br>[skills/octocode-research/src/__tests__/unit/errorHandler.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/__tests__/unit/errorHandler.test.ts)<br>[skills/octocode-research/src/__tests__/unit/httpPreprocess.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/__tests__/unit/httpPreprocess.test.ts)<br>[skills/octocode-research/src/__tests__/unit/logger.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/__tests__/unit/logger.test.ts)<br>[skills/octocode-research/src/__tests__/unit/queryParser.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/__tests__/unit/queryParser.test.ts)<br>[skills/octocode-research/src/__tests__/unit/readiness.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/__tests__/unit/readiness.test.ts)<br>[skills/octocode-research/src/__tests__/unit/resilience.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/__tests__/unit/resilience.test.ts)<br>[skills/octocode-research/src/__tests__/unit/responseBuilder.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/__tests__/unit/responseBuilder.test.ts) |
| security | 77 | [skills/octocode-engineer/src/detectors/security.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-engineer/src/detectors/security.test.ts)<br>[skills/octocode-engineer/src/detectors/security.ts](../../../../sources/bgauryy__octocode/skills/octocode-engineer/src/detectors/security.ts)<br>[skills/octocode-engineer/src/collectors/security.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-engineer/src/collectors/security.test.ts)<br>[skills/octocode-engineer/src/collectors/security.ts](../../../../sources/bgauryy__octocode/skills/octocode-engineer/src/collectors/security.ts)<br>[skills/octocode-chrome-devtools/scripts/cdp-sandbox.mjs](../../../../sources/bgauryy__octocode/skills/octocode-chrome-devtools/scripts/cdp-sandbox.mjs)<br>[skills/octocode-chrome-devtools/references/INTENTS_AUTH.md](../../../../sources/bgauryy__octocode/skills/octocode-chrome-devtools/references/INTENTS_AUTH.md)<br>[packages/octocode-security-utils/build.mjs](../../../../sources/bgauryy__octocode/packages/octocode-security-utils/build.mjs)<br>[packages/octocode-security-utils/package.json](../../../../sources/bgauryy__octocode/packages/octocode-security-utils/package.json) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/bgauryy__octocode/.github/workflows/ci.yml)<br>[.github/workflows/README.md](../../../../sources/bgauryy__octocode/.github/workflows/README.md)<br>[.github/workflows/releases.yml](../../../../sources/bgauryy__octocode/.github/workflows/releases.yml) |
| container | 0 | not obvious |
| instruction | 2 | [AGENTS.md](../../../../sources/bgauryy__octocode/AGENTS.md)<br>[CLAUDE.md](../../../../sources/bgauryy__octocode/CLAUDE.md) |
| docs | 45 | [README.md](../../../../sources/bgauryy__octocode/README.md)<br>[skills/README.md](../../../../sources/bgauryy__octocode/skills/README.md)<br>[skills/octocode-slides/README.md](../../../../sources/bgauryy__octocode/skills/octocode-slides/README.md)<br>[skills/octocode-research/README.md](../../../../sources/bgauryy__octocode/skills/octocode-research/README.md)<br>[skills/octocode-research/docs/API_REFERENCE.md](../../../../sources/bgauryy__octocode/skills/octocode-research/docs/API_REFERENCE.md)<br>[skills/octocode-research/docs/ARCHITECTURE.md](../../../../sources/bgauryy__octocode/skills/octocode-research/docs/ARCHITECTURE.md)<br>[skills/octocode-research/docs/FLOWS.md](../../../../sources/bgauryy__octocode/skills/octocode-research/docs/FLOWS.md)<br>[skills/octocode-research/docs/OVERVIEW.md](../../../../sources/bgauryy__octocode/skills/octocode-research/docs/OVERVIEW.md) |
| config | 17 | [package.json](../../../../sources/bgauryy__octocode/package.json)<br>[skills/octocode-research/package.json](../../../../sources/bgauryy__octocode/skills/octocode-research/package.json)<br>[skills/octocode-research/tsconfig.json](../../../../sources/bgauryy__octocode/skills/octocode-research/tsconfig.json)<br>[skills/octocode-news/package.json](../../../../sources/bgauryy__octocode/skills/octocode-news/package.json)<br>[skills/octocode-news/tsconfig.json](../../../../sources/bgauryy__octocode/skills/octocode-news/tsconfig.json)<br>[skills/octocode-engineer/package.json](../../../../sources/bgauryy__octocode/skills/octocode-engineer/package.json)<br>[skills/octocode-engineer/tsconfig.json](../../../../sources/bgauryy__octocode/skills/octocode-engineer/tsconfig.json)<br>[packages/octocode-vscode/package.json](../../../../sources/bgauryy__octocode/packages/octocode-vscode/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 496 | [skills/octocode-research/src/__tests__/unit/circuitBreaker.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/__tests__/unit/circuitBreaker.test.ts)<br>[skills/octocode-research/src/__tests__/unit/errorHandler.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/__tests__/unit/errorHandler.test.ts)<br>[skills/octocode-research/src/__tests__/unit/httpPreprocess.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/__tests__/unit/httpPreprocess.test.ts)<br>[skills/octocode-research/src/__tests__/unit/logger.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/__tests__/unit/logger.test.ts)<br>[skills/octocode-research/src/__tests__/unit/queryParser.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/__tests__/unit/queryParser.test.ts)<br>[skills/octocode-research/src/__tests__/unit/readiness.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/__tests__/unit/readiness.test.ts) |
| CI workflows | 3 | [.github/workflows/ci.yml](../../../../sources/bgauryy__octocode/.github/workflows/ci.yml)<br>[.github/workflows/README.md](../../../../sources/bgauryy__octocode/.github/workflows/README.md)<br>[.github/workflows/releases.yml](../../../../sources/bgauryy__octocode/.github/workflows/releases.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 77 | [skills/octocode-engineer/src/detectors/security.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-engineer/src/detectors/security.test.ts)<br>[skills/octocode-engineer/src/detectors/security.ts](../../../../sources/bgauryy__octocode/skills/octocode-engineer/src/detectors/security.ts)<br>[skills/octocode-engineer/src/collectors/security.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-engineer/src/collectors/security.test.ts)<br>[skills/octocode-engineer/src/collectors/security.ts](../../../../sources/bgauryy__octocode/skills/octocode-engineer/src/collectors/security.ts)<br>[skills/octocode-chrome-devtools/scripts/cdp-sandbox.mjs](../../../../sources/bgauryy__octocode/skills/octocode-chrome-devtools/scripts/cdp-sandbox.mjs)<br>[skills/octocode-chrome-devtools/references/INTENTS_AUTH.md](../../../../sources/bgauryy__octocode/skills/octocode-chrome-devtools/references/INTENTS_AUTH.md) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/bgauryy__octocode/AGENTS.md)<br>[CLAUDE.md](../../../../sources/bgauryy__octocode/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `skills/octocode-research/src/types/mcp.ts`, `packages/octocode-mcp/.dxtignore`, `packages/octocode-mcp/build.mjs`.
2. Trace execution through entrypoints: `skills/octocode-research/src/index.ts`, `skills/octocode-research/src/server.ts`, `skills/octocode-research/scripts/server.d.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `skills/README.md`, `skills/octocode-stats/SKILL.md`.
4. Inspect retrieval/memory/indexing through: `skills/octocode-research/src/index.ts`, `skills/octocode-research/src/validation/index.ts`, `skills/octocode-engineer/src/index.test.ts`.
5. Verify behavior through test/eval files: `skills/octocode-research/src/__tests__/unit/circuitBreaker.test.ts`, `skills/octocode-research/src/__tests__/unit/errorHandler.test.ts`, `skills/octocode-research/src/__tests__/unit/httpPreprocess.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 MCP server for semantic code research and context generation on real time using LLM patterns Search naturally across pub. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
