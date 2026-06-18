# ZenSystemAI/Zengram Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

A Multi Agent Memory MCP That Connect Agents Across Systems and Machines

## 요약

- 조사 단위: `sources/ZenSystemAI__Zengram` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 102 files, 24 directories, depth score 115, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp-server/CHANGELOG.md, mcp-server/package-lock.json, mcp-server/package.json이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | ZenSystemAI/Zengram |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | JavaScript |
| Stars | 48 |
| Forks | 7 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/ZenSystemAI__Zengram](../../../../sources/ZenSystemAI__Zengram) |
| Existing report | [reports/global-trending/repositories/ZenSystemAI__Zengram.md](../../../global-trending/repositories/ZenSystemAI__Zengram.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 102 / 24 |
| Max observed depth | 5 |
| Top directories | .github, adapters, api, docs, examples, mcp-server |
| Top extensions | .js: 59, .md: 19, .json: 6, .jpg: 5, .yml: 4, (none): 3, .sh: 2, .svg: 2, .example: 1, .py: 1 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| api | source boundary | 25 |
| docs | documentation surface | 12 |
| .github | ci surface | 1 |
| adapters | top-level component | 1 |
| examples | top-level component | 1 |
| mcp-server | source boundary | 1 |


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
| mcp | [mcp-server/CHANGELOG.md](../../../../sources/ZenSystemAI__Zengram/mcp-server/CHANGELOG.md) | mcp signal |
| mcp | [mcp-server/package-lock.json](../../../../sources/ZenSystemAI__Zengram/mcp-server/package-lock.json) | mcp signal |
| mcp | [mcp-server/package.json](../../../../sources/ZenSystemAI__Zengram/mcp-server/package.json) | mcp signal |
| mcp | [mcp-server/README.md](../../../../sources/ZenSystemAI__Zengram/mcp-server/README.md) | mcp signal |
| agentRuntime | [api/src/routes/memory.js](../../../../sources/ZenSystemAI__Zengram/api/src/routes/memory.js) | agentRuntime signal |
| agentRuntime | [adapters/claude-code/sessionend/SKILL.md](../../../../sources/ZenSystemAI__Zengram/adapters/claude-code/sessionend/SKILL.md) | agentRuntime signal |
| agentRuntime | [adapters/bash/SKILL.md](../../../../sources/ZenSystemAI__Zengram/adapters/bash/SKILL.md) | agentRuntime signal |
| entrypoints | [mcp-server/src/index.js](../../../../sources/ZenSystemAI__Zengram/mcp-server/src/index.js) | entrypoints signal |
| entrypoints | [api/src/index.js](../../../../sources/ZenSystemAI__Zengram/api/src/index.js) | entrypoints signal |
| config | [api/package.json](../../../../sources/ZenSystemAI__Zengram/api/package.json) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/ZenSystemAI__Zengram/.github/workflows/ci.yml) | ci support |
| ci | [.github/workflows/publish.yml](../../../../sources/ZenSystemAI__Zengram/.github/workflows/publish.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [mcp-server/src/index.js](../../../../sources/ZenSystemAI__Zengram/mcp-server/src/index.js)<br>[api/src/index.js](../../../../sources/ZenSystemAI__Zengram/api/src/index.js) |
| agentRuntime | 3 | [api/src/routes/memory.js](../../../../sources/ZenSystemAI__Zengram/api/src/routes/memory.js)<br>[adapters/claude-code/sessionend/SKILL.md](../../../../sources/ZenSystemAI__Zengram/adapters/claude-code/sessionend/SKILL.md)<br>[adapters/bash/SKILL.md](../../../../sources/ZenSystemAI__Zengram/adapters/bash/SKILL.md) |
| mcp | 6 | [mcp-server/CHANGELOG.md](../../../../sources/ZenSystemAI__Zengram/mcp-server/CHANGELOG.md)<br>[mcp-server/package-lock.json](../../../../sources/ZenSystemAI__Zengram/mcp-server/package-lock.json)<br>[mcp-server/package.json](../../../../sources/ZenSystemAI__Zengram/mcp-server/package.json)<br>[mcp-server/README.md](../../../../sources/ZenSystemAI__Zengram/mcp-server/README.md)<br>[mcp-server/src/index.js](../../../../sources/ZenSystemAI__Zengram/mcp-server/src/index.js)<br>[docs/mcp-tools.md](../../../../sources/ZenSystemAI__Zengram/docs/mcp-tools.md) |
| retrieval | 5 | [mcp-server/src/index.js](../../../../sources/ZenSystemAI__Zengram/mcp-server/src/index.js)<br>[api/tests/embedding-dimensions.test.js](../../../../sources/ZenSystemAI__Zengram/api/tests/embedding-dimensions.test.js)<br>[api/src/index.js](../../../../sources/ZenSystemAI__Zengram/api/src/index.js)<br>[api/src/services/research-retrieval.js](../../../../sources/ZenSystemAI__Zengram/api/src/services/research-retrieval.js)<br>[api/src/routes/memory.js](../../../../sources/ZenSystemAI__Zengram/api/src/routes/memory.js) |
| spec | 1 | [docs/architecture.md](../../../../sources/ZenSystemAI__Zengram/docs/architecture.md) |
| eval | 17 | [docs/eval-harness.md](../../../../sources/ZenSystemAI__Zengram/docs/eval-harness.md)<br>[api/tests/consolidation-utils.test.js](../../../../sources/ZenSystemAI__Zengram/api/tests/consolidation-utils.test.js)<br>[api/tests/embedding-dimensions.test.js](../../../../sources/ZenSystemAI__Zengram/api/tests/embedding-dimensions.test.js)<br>[api/tests/entities.test.js](../../../../sources/ZenSystemAI__Zengram/api/tests/entities.test.js)<br>[api/tests/import-approval.test.js](../../../../sources/ZenSystemAI__Zengram/api/tests/import-approval.test.js)<br>[api/tests/reflect-utils.test.js](../../../../sources/ZenSystemAI__Zengram/api/tests/reflect-utils.test.js)<br>[api/tests/request-utils.test.js](../../../../sources/ZenSystemAI__Zengram/api/tests/request-utils.test.js)<br>[api/tests/research-route-disabled.test.js](../../../../sources/ZenSystemAI__Zengram/api/tests/research-route-disabled.test.js) |
| security | 1 | [api/src/middleware/auth.js](../../../../sources/ZenSystemAI__Zengram/api/src/middleware/auth.js) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/ZenSystemAI__Zengram/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/ZenSystemAI__Zengram/.github/workflows/publish.yml) |
| container | 3 | [docker-compose.production.yml](../../../../sources/ZenSystemAI__Zengram/docker-compose.production.yml)<br>[docker-compose.yml](../../../../sources/ZenSystemAI__Zengram/docker-compose.yml)<br>[api/Dockerfile](../../../../sources/ZenSystemAI__Zengram/api/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 11 | [README.md](../../../../sources/ZenSystemAI__Zengram/README.md)<br>[mcp-server/README.md](../../../../sources/ZenSystemAI__Zengram/mcp-server/README.md)<br>[docs/api-reference.md](../../../../sources/ZenSystemAI__Zengram/docs/api-reference.md)<br>[docs/architecture.md](../../../../sources/ZenSystemAI__Zengram/docs/architecture.md)<br>[docs/benchmarks.md](../../../../sources/ZenSystemAI__Zengram/docs/benchmarks.md)<br>[docs/configuration.md](../../../../sources/ZenSystemAI__Zengram/docs/configuration.md)<br>[docs/data-model.md](../../../../sources/ZenSystemAI__Zengram/docs/data-model.md)<br>[docs/eval-harness.md](../../../../sources/ZenSystemAI__Zengram/docs/eval-harness.md) |
| config | 2 | [mcp-server/package.json](../../../../sources/ZenSystemAI__Zengram/mcp-server/package.json)<br>[api/package.json](../../../../sources/ZenSystemAI__Zengram/api/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 17 | [docs/eval-harness.md](../../../../sources/ZenSystemAI__Zengram/docs/eval-harness.md)<br>[api/tests/consolidation-utils.test.js](../../../../sources/ZenSystemAI__Zengram/api/tests/consolidation-utils.test.js)<br>[api/tests/embedding-dimensions.test.js](../../../../sources/ZenSystemAI__Zengram/api/tests/embedding-dimensions.test.js)<br>[api/tests/entities.test.js](../../../../sources/ZenSystemAI__Zengram/api/tests/entities.test.js)<br>[api/tests/import-approval.test.js](../../../../sources/ZenSystemAI__Zengram/api/tests/import-approval.test.js)<br>[api/tests/reflect-utils.test.js](../../../../sources/ZenSystemAI__Zengram/api/tests/reflect-utils.test.js) |
| CI workflows | 2 | [.github/workflows/ci.yml](../../../../sources/ZenSystemAI__Zengram/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/ZenSystemAI__Zengram/.github/workflows/publish.yml) |
| Containers / deploy | 3 | [docker-compose.production.yml](../../../../sources/ZenSystemAI__Zengram/docker-compose.production.yml)<br>[docker-compose.yml](../../../../sources/ZenSystemAI__Zengram/docker-compose.yml)<br>[api/Dockerfile](../../../../sources/ZenSystemAI__Zengram/api/Dockerfile) |
| Security / policy | 1 | [api/src/middleware/auth.js](../../../../sources/ZenSystemAI__Zengram/api/src/middleware/auth.js) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `mcp-server/CHANGELOG.md`, `mcp-server/package-lock.json`, `mcp-server/package.json`.
2. Trace execution through entrypoints: `mcp-server/src/index.js`, `api/src/index.js`.
3. Map agent/tool runtime through: `api/src/routes/memory.js`, `adapters/claude-code/sessionend/SKILL.md`, `adapters/bash/SKILL.md`.
4. Inspect retrieval/memory/indexing through: `mcp-server/src/index.js`, `api/tests/embedding-dimensions.test.js`, `api/src/index.js`.
5. Verify behavior through test/eval files: `docs/eval-harness.md`, `api/tests/consolidation-utils.test.js`, `api/tests/embedding-dimensions.test.js`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 A Multi Agent Memory MCP That Connect Agents Across Systems and Machines. 핵심 구조 신호는 JavaScript, docker-compose.yml, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
