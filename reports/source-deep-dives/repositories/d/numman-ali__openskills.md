# numman-ali/openskills Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 94 files, 22 directories.

## 요약

- 조사 단위: `sources/numman-ali__openskills` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 94 files, 22 directories, depth score 103, key references 10개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, tests/utils/skill-metadata.test.ts, tests/utils/skill-names.test.ts이고, 의존성 단서는 commander, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | numman-ali/openskills |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/numman-ali__openskills](../../../../sources/numman-ali__openskills) |
| Existing report | [reports/clone-structures/numman-ali__openskills.md](../../../clone-structures/numman-ali__openskills.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 94 / 22 |
| Max observed depth | 6 |
| Top directories | .github, assets, examples, src, tests |
| Top extensions | .md: 53, .ts: 27, .json: 8, (none): 3, .yml: 2, .svg: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 13 |
| src | source boundary | 6 |
| examples/my-first-skill | examples workspace | 2 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| examples | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | tsup |
| serve-dev | package.json | dev | tsup --watch |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
| test | package.json | test:coverage | vitest run --coverage |
| quality | package.json | typecheck | tsc --noEmit |
| test | package.json | prepublishOnly | npm run typecheck && npm run build && npm test |
| entrypoint | package.json bin | cli.js | dist/cli.js |


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
| agentRuntime | [AGENTS.md](../../../../sources/numman-ali__openskills/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/utils/skill-metadata.test.ts](../../../../sources/numman-ali__openskills/tests/utils/skill-metadata.test.ts) | agentRuntime signal |
| agentRuntime | [tests/utils/skill-names.test.ts](../../../../sources/numman-ali__openskills/tests/utils/skill-names.test.ts) | agentRuntime signal |
| agentRuntime | [tests/utils/skills.test.ts](../../../../sources/numman-ali__openskills/tests/utils/skills.test.ts) | agentRuntime signal |
| entrypoints | [src/cli.ts](../../../../sources/numman-ali__openskills/src/cli.ts) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/numman-ali__openskills/CLAUDE.md) | instruction signal |
| config | [package.json](../../../../sources/numman-ali__openskills/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/numman-ali__openskills/tsconfig.json) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/numman-ali__openskills/.github/workflows/ci.yml) | ci support |
| eval | [tests/utils/dirs.test.ts](../../../../sources/numman-ali__openskills/tests/utils/dirs.test.ts) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/cli.ts](../../../../sources/numman-ali__openskills/src/cli.ts) |
| agentRuntime | 13 | [AGENTS.md](../../../../sources/numman-ali__openskills/AGENTS.md)<br>[tests/utils/skill-metadata.test.ts](../../../../sources/numman-ali__openskills/tests/utils/skill-metadata.test.ts)<br>[tests/utils/skill-names.test.ts](../../../../sources/numman-ali__openskills/tests/utils/skill-names.test.ts)<br>[tests/utils/skills.test.ts](../../../../sources/numman-ali__openskills/tests/utils/skills.test.ts)<br>[src/utils/agents-md.ts](../../../../sources/numman-ali__openskills/src/utils/agents-md.ts)<br>[src/utils/skill-metadata.ts](../../../../sources/numman-ali__openskills/src/utils/skill-metadata.ts)<br>[src/utils/skill-names.ts](../../../../sources/numman-ali__openskills/src/utils/skill-names.ts)<br>[src/utils/skills.ts](../../../../sources/numman-ali__openskills/src/utils/skills.ts) |
| mcp | 0 | not obvious |
| retrieval | 2 | [.github/maintainer/index/graph.json](../../../../sources/numman-ali__openskills/.github/maintainer/index/graph.json)<br>[.github/maintainer/index/items.json](../../../../sources/numman-ali__openskills/.github/maintainer/index/items.json) |
| spec | 0 | not obvious |
| eval | 9 | [tests/utils/dirs.test.ts](../../../../sources/numman-ali__openskills/tests/utils/dirs.test.ts)<br>[tests/utils/skill-metadata.test.ts](../../../../sources/numman-ali__openskills/tests/utils/skill-metadata.test.ts)<br>[tests/utils/skill-names.test.ts](../../../../sources/numman-ali__openskills/tests/utils/skill-names.test.ts)<br>[tests/utils/skills.test.ts](../../../../sources/numman-ali__openskills/tests/utils/skills.test.ts)<br>[tests/utils/yaml.test.ts](../../../../sources/numman-ali__openskills/tests/utils/yaml.test.ts)<br>[tests/integration/e2e.test.ts](../../../../sources/numman-ali__openskills/tests/integration/e2e.test.ts)<br>[tests/commands/install.test.ts](../../../../sources/numman-ali__openskills/tests/commands/install.test.ts)<br>[tests/commands/sync.test.ts](../../../../sources/numman-ali__openskills/tests/commands/sync.test.ts) |
| security | 1 | [SECURITY.md](../../../../sources/numman-ali__openskills/SECURITY.md) |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/numman-ali__openskills/.github/workflows/ci.yml) |
| container | 0 | not obvious |
| instruction | 2 | [AGENTS.md](../../../../sources/numman-ali__openskills/AGENTS.md)<br>[CLAUDE.md](../../../../sources/numman-ali__openskills/CLAUDE.md) |
| docs | 1 | [README.md](../../../../sources/numman-ali__openskills/README.md) |
| config | 2 | [package.json](../../../../sources/numman-ali__openskills/package.json)<br>[tsconfig.json](../../../../sources/numman-ali__openskills/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 9 | [tests/utils/dirs.test.ts](../../../../sources/numman-ali__openskills/tests/utils/dirs.test.ts)<br>[tests/utils/skill-metadata.test.ts](../../../../sources/numman-ali__openskills/tests/utils/skill-metadata.test.ts)<br>[tests/utils/skill-names.test.ts](../../../../sources/numman-ali__openskills/tests/utils/skill-names.test.ts)<br>[tests/utils/skills.test.ts](../../../../sources/numman-ali__openskills/tests/utils/skills.test.ts)<br>[tests/utils/yaml.test.ts](../../../../sources/numman-ali__openskills/tests/utils/yaml.test.ts)<br>[tests/integration/e2e.test.ts](../../../../sources/numman-ali__openskills/tests/integration/e2e.test.ts) |
| CI workflows | 1 | [.github/workflows/ci.yml](../../../../sources/numman-ali__openskills/.github/workflows/ci.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [SECURITY.md](../../../../sources/numman-ali__openskills/SECURITY.md) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/numman-ali__openskills/AGENTS.md)<br>[CLAUDE.md](../../../../sources/numman-ali__openskills/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `AGENTS.md`, `tests/utils/skill-metadata.test.ts`, `tests/utils/skill-names.test.ts`.
2. Trace execution through entrypoints: `src/cli.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `tests/utils/skill-metadata.test.ts`, `tests/utils/skill-names.test.ts`.
4. Inspect retrieval/memory/indexing through: `.github/maintainer/index/graph.json`, `.github/maintainer/index/items.json`.
5. Verify behavior through test/eval files: `tests/utils/dirs.test.ts`, `tests/utils/skill-metadata.test.ts`, `tests/utils/skill-names.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 94 files, 22 directories.. 핵심 구조 신호는 package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE, tests이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
