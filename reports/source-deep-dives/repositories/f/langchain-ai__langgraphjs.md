# langchain-ai/langgraphjs Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Framework to build resilient language agents as graphs.

## 요약

- 조사 단위: `sources/langchain-ai__langgraphjs` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,889 files, 328 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=docs/docs/agents/mcp.md, docs/docs/agents/assets/mcp.png이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | langchain-ai/langgraphjs |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 3022 |
| Forks | 507 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/langchain-ai__langgraphjs](../../../../sources/langchain-ai__langgraphjs) |
| Existing report | [reports/global-trending/repositories/langchain-ai__langgraphjs.md](../../../global-trending/repositories/langchain-ai__langgraphjs.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1889 / 328 |
| Max observed depth | 8 |
| Top directories | .changeset, .devcontainer, .github, .yarn, docs, examples, internal, libs, scripts |
| Top extensions | .ts: 768, .md: 190, .json: 179, .tsx: 177, .mts: 129, .ipynb: 81, .png: 73, (none): 61, .svelte: 56, .js: 32, .svg: 27, .yml: 22 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| libs/sdk-vue | libs workspace | 62 |
| libs/sdk | libs workspace | 41 |
| libs/sdk-react | libs workspace | 29 |
| libs/sdk-svelte | libs workspace | 19 |
| libs/checkpoint-validation | libs workspace | 18 |
| libs/langgraph-api | libs workspace | 14 |
| libs/langgraph-cli | libs workspace | 12 |
| libs/langgraph-core | libs workspace | 12 |
| docs | documentation surface | 9 |
| libs/sdk-angular | libs workspace | 8 |
| libs/checkpoint | libs workspace | 5 |
| libs/langgraph-ui | libs workspace | 5 |
| libs/langgraph-cua | libs workspace | 4 |
| libs/langgraph-supervisor | libs workspace | 4 |
| libs/langgraph-swarm | libs workspace | 4 |
| examples/ui-react-transport | examples workspace | 2 |
| examples/ui-svelte | examples workspace | 2 |
| examples/ui-vue | examples workspace | 2 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | turbo run build:internal |
| utility | package.json | changeset | npx @changesets/cli@^2.29.5 |
| quality | package.json | lint | oxlint |
| quality | package.json | lint:fix | oxlint --fix |
| utility | package.json | clean | turbo run clean |
| test | package.json | test | turbo run test |
| test | package.json | test:int | pnpm test:int:deps && turbo run test:int ; pnpm test:int:deps:down |
| test | package.json | test:int:deps | docker compose -f int-test-deps-docker-compose.yml up -d |
| test | package.json | test:int:deps:down | docker compose -f int-test-deps-docker-compose.yml down |
| test | package.json | test:exports:docker | docker compose -f internal/environment_tests/docker-compose.yml up --force-recreate |
| quality | package.json | format | oxfmt |
| quality | package.json | format:check | oxfmt --check |
| build | package.json | release | pnpm changeset publish |


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
| mcp | [docs/docs/agents/mcp.md](../../../../sources/langchain-ai__langgraphjs/docs/docs/agents/mcp.md) | mcp signal |
| mcp | [docs/docs/agents/assets/mcp.png](../../../../sources/langchain-ai__langgraphjs/docs/docs/agents/assets/mcp.png) | mcp signal |
| agentRuntime | [libs/sdk-vue/src/context.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk-vue/src/context.ts) | agentRuntime signal |
| agentRuntime | [libs/sdk-svelte/src/context.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk-svelte/src/context.ts) | agentRuntime signal |
| agentRuntime | [libs/sdk-react/src/context.tsx](../../../../sources/langchain-ai__langgraphjs/libs/sdk-react/src/context.tsx) | agentRuntime signal |
| agentRuntime | [libs/sdk-react/docs/context.md](../../../../sources/langchain-ai__langgraphjs/libs/sdk-react/docs/context.md) | agentRuntime signal |
| entrypoints | [libs/sdk-vue/src/index.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk-vue/src/index.ts) | entrypoints signal |
| entrypoints | [libs/sdk-svelte/src/index.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk-svelte/src/index.ts) | entrypoints signal |
| entrypoints | [libs/sdk-react/src/index.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk-react/src/index.ts) | entrypoints signal |
| entrypoints | [libs/sdk-angular/src/index.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk-angular/src/index.ts) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/langchain-ai__langgraphjs/CLAUDE.md) | instruction signal |
| instruction | [docs/docs/agents/agents.md](../../../../sources/langchain-ai__langgraphjs/docs/docs/agents/agents.md) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 50 | [libs/sdk-vue/src/index.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk-vue/src/index.ts)<br>[libs/sdk-svelte/src/index.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk-svelte/src/index.ts)<br>[libs/sdk-react/src/index.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk-react/src/index.ts)<br>[libs/sdk-angular/src/index.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk-angular/src/index.ts)<br>[libs/sdk/src/index.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk/src/index.ts)<br>[libs/sdk/src/react-ui/server/server.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk/src/react-ui/server/server.ts)<br>[libs/langgraph-ui/src/cli.mts](../../../../sources/langchain-ai__langgraphjs/libs/langgraph-ui/src/cli.mts)<br>[libs/langgraph-ui/src/index.mts](../../../../sources/langchain-ai__langgraphjs/libs/langgraph-ui/src/index.mts) |
| agentRuntime | 136 | [libs/sdk-vue/src/context.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk-vue/src/context.ts)<br>[libs/sdk-svelte/src/context.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk-svelte/src/context.ts)<br>[libs/sdk-react/src/context.tsx](../../../../sources/langchain-ai__langgraphjs/libs/sdk-react/src/context.tsx)<br>[libs/sdk-react/docs/context.md](../../../../sources/langchain-ai__langgraphjs/libs/sdk-react/docs/context.md)<br>[libs/sdk-angular/src/context.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk-angular/src/context.ts)<br>[libs/sdk/src/utils/tools.test.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk/src/utils/tools.test.ts)<br>[libs/sdk/src/utils/tools.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk/src/utils/tools.ts)<br>[libs/sdk/src/ui/stream/agent.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk/src/ui/stream/agent.ts) |
| mcp | 2 | [docs/docs/agents/mcp.md](../../../../sources/langchain-ai__langgraphjs/docs/docs/agents/mcp.md)<br>[docs/docs/agents/assets/mcp.png](../../../../sources/langchain-ai__langgraphjs/docs/docs/agents/assets/mcp.png) |
| retrieval | 187 | [libs/sdk-vue/src/index.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk-vue/src/index.ts)<br>[libs/sdk-vue/src/tests/fixtures/multi-interrupt-graph.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk-vue/src/tests/fixtures/multi-interrupt-graph.ts)<br>[libs/sdk-svelte/src/index.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk-svelte/src/index.ts)<br>[libs/sdk-svelte/src/tests/fixtures/multi-interrupt-graph.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk-svelte/src/tests/fixtures/multi-interrupt-graph.ts)<br>[libs/sdk-react/src/index.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk-react/src/index.ts)<br>[libs/sdk-react/src/tests/fixtures/custom-channel-graph.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk-react/src/tests/fixtures/custom-channel-graph.ts)<br>[libs/sdk-react/src/tests/fixtures/embedded-subgraph-graph.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk-react/src/tests/fixtures/embedded-subgraph-graph.ts)<br>[libs/sdk-react/src/tests/fixtures/error-graph.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk-react/src/tests/fixtures/error-graph.ts) |
| spec | 21 | [libs/sdk-angular/tsconfig.spec.json](../../../../sources/langchain-ai__langgraphjs/libs/sdk-angular/tsconfig.spec.json)<br>[libs/langgraph-core/spec/langgraph-architecture-spec.md](../../../../sources/langchain-ai__langgraphjs/libs/langgraph-core/spec/langgraph-architecture-spec.md)<br>[libs/langgraph-core/spec/pregel-execution-model.md](../../../../sources/langchain-ai__langgraphjs/libs/langgraph-core/spec/pregel-execution-model.md)<br>[libs/langgraph-core/spec/pregel-testing-plan.md](../../../../sources/langchain-ai__langgraphjs/libs/langgraph-core/spec/pregel-testing-plan.md)<br>[libs/langgraph-cli/tests/packaging_tests/faux/my_agent/requirements.txt](../../../../sources/langchain-ai__langgraphjs/libs/langgraph-cli/tests/packaging_tests/faux/my_agent/requirements.txt)<br>[libs/checkpoint-validation/src/tests/memory.spec.ts](../../../../sources/langchain-ai__langgraphjs/libs/checkpoint-validation/src/tests/memory.spec.ts)<br>[libs/checkpoint-validation/src/tests/mongodb.spec.ts](../../../../sources/langchain-ai__langgraphjs/libs/checkpoint-validation/src/tests/mongodb.spec.ts)<br>[libs/checkpoint-validation/src/tests/postgres.spec.ts](../../../../sources/langchain-ai__langgraphjs/libs/checkpoint-validation/src/tests/postgres.spec.ts) |
| eval | 631 | [int-test-deps-docker-compose.yml](../../../../sources/langchain-ai__langgraphjs/int-test-deps-docker-compose.yml)<br>[libs/sdk-vue/src/tests/createAgent.test-d.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk-vue/src/tests/createAgent.test-d.ts)<br>[libs/sdk-vue/src/tests/createDeepAgent.test-d.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk-vue/src/tests/createDeepAgent.test-d.ts)<br>[libs/sdk-vue/src/tests/langgraph.test-d.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk-vue/src/tests/langgraph.test-d.ts)<br>[libs/sdk-vue/src/tests/selector-cast.test-d.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk-vue/src/tests/selector-cast.test-d.ts)<br>[libs/sdk-vue/src/tests/stream.client.test.tsx](../../../../sources/langchain-ai__langgraphjs/libs/sdk-vue/src/tests/stream.client.test.tsx)<br>[libs/sdk-vue/src/tests/stream.context.test.tsx](../../../../sources/langchain-ai__langgraphjs/libs/sdk-vue/src/tests/stream.context.test.tsx)<br>[libs/sdk-vue/src/tests/stream.core.test.tsx](../../../../sources/langchain-ai__langgraphjs/libs/sdk-vue/src/tests/stream.core.test.tsx) |
| security | 10 | [libs/sdk/src/auth/error.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk/src/auth/error.ts)<br>[libs/sdk/src/auth/index.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk/src/auth/index.ts)<br>[libs/sdk/src/auth/types.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk/src/auth/types.ts)<br>[libs/langgraph-api/tests/auth.test.mts](../../../../sources/langchain-ai__langgraphjs/libs/langgraph-api/tests/auth.test.mts)<br>[libs/langgraph-api/tests/graphs/auth.mts](../../../../sources/langchain-ai__langgraphjs/libs/langgraph-api/tests/graphs/auth.mts)<br>[libs/langgraph-api/tests/graphs/langgraph.auth.json](../../../../sources/langchain-ai__langgraphjs/libs/langgraph-api/tests/graphs/langgraph.auth.json)<br>[libs/langgraph-api/src/auth/custom.mts](../../../../sources/langchain-ai__langgraphjs/libs/langgraph-api/src/auth/custom.mts)<br>[libs/langgraph-api/src/auth/index.mts](../../../../sources/langchain-ai__langgraphjs/libs/langgraph-api/src/auth/index.mts) |
| ci | 6 | [.github/workflows/ci.yml](../../../../sources/langchain-ai__langgraphjs/.github/workflows/ci.yml)<br>[.github/workflows/deploy_docs.yml](../../../../sources/langchain-ai__langgraphjs/.github/workflows/deploy_docs.yml)<br>[.github/workflows/pr_lint.yml](../../../../sources/langchain-ai__langgraphjs/.github/workflows/pr_lint.yml)<br>[.github/workflows/release.yml](../../../../sources/langchain-ai__langgraphjs/.github/workflows/release.yml)<br>[.github/workflows/test-browser.yml](../../../../sources/langchain-ai__langgraphjs/.github/workflows/test-browser.yml)<br>[.github/workflows/test-exports.yml](../../../../sources/langchain-ai__langgraphjs/.github/workflows/test-exports.yml) |
| container | 4 | [libs/checkpoint-redis/docker-compose.yml](../../../../sources/langchain-ai__langgraphjs/libs/checkpoint-redis/docker-compose.yml)<br>[libs/checkpoint-postgres/docker-compose.yml](../../../../sources/langchain-ai__langgraphjs/libs/checkpoint-postgres/docker-compose.yml)<br>[libs/checkpoint-mongodb/docker-compose.yml](../../../../sources/langchain-ai__langgraphjs/libs/checkpoint-mongodb/docker-compose.yml)<br>[internal/environment_tests/docker-compose.yml](../../../../sources/langchain-ai__langgraphjs/internal/environment_tests/docker-compose.yml) |
| instruction | 2 | [CLAUDE.md](../../../../sources/langchain-ai__langgraphjs/CLAUDE.md)<br>[docs/docs/agents/agents.md](../../../../sources/langchain-ai__langgraphjs/docs/docs/agents/agents.md) |
| docs | 275 | [libs/sdk-vue/README.md](../../../../sources/langchain-ai__langgraphjs/libs/sdk-vue/README.md)<br>[libs/sdk-vue/docs/api-reference.md](../../../../sources/langchain-ai__langgraphjs/libs/sdk-vue/docs/api-reference.md)<br>[libs/sdk-vue/docs/custom-transport.md](../../../../sources/langchain-ai__langgraphjs/libs/sdk-vue/docs/custom-transport.md)<br>[libs/sdk-vue/docs/forking.md](../../../../sources/langchain-ai__langgraphjs/libs/sdk-vue/docs/forking.md)<br>[libs/sdk-vue/docs/interrupts.md](../../../../sources/langchain-ai__langgraphjs/libs/sdk-vue/docs/interrupts.md)<br>[libs/sdk-vue/docs/multimodal.md](../../../../sources/langchain-ai__langgraphjs/libs/sdk-vue/docs/multimodal.md)<br>[libs/sdk-vue/docs/README.md](../../../../sources/langchain-ai__langgraphjs/libs/sdk-vue/docs/README.md)<br>[libs/sdk-vue/docs/selectors.md](../../../../sources/langchain-ai__langgraphjs/libs/sdk-vue/docs/selectors.md) |
| config | 139 | [package.json](../../../../sources/langchain-ai__langgraphjs/package.json)<br>[pnpm-workspace.yaml](../../../../sources/langchain-ai__langgraphjs/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/langchain-ai__langgraphjs/tsconfig.json)<br>[turbo.json](../../../../sources/langchain-ai__langgraphjs/turbo.json)<br>[libs/sdk-vue/package.json](../../../../sources/langchain-ai__langgraphjs/libs/sdk-vue/package.json)<br>[libs/sdk-vue/tsconfig.json](../../../../sources/langchain-ai__langgraphjs/libs/sdk-vue/tsconfig.json)<br>[libs/sdk-vue/turbo.json](../../../../sources/langchain-ai__langgraphjs/libs/sdk-vue/turbo.json)<br>[libs/sdk-svelte/package.json](../../../../sources/langchain-ai__langgraphjs/libs/sdk-svelte/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 631 | [int-test-deps-docker-compose.yml](../../../../sources/langchain-ai__langgraphjs/int-test-deps-docker-compose.yml)<br>[libs/sdk-vue/src/tests/createAgent.test-d.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk-vue/src/tests/createAgent.test-d.ts)<br>[libs/sdk-vue/src/tests/createDeepAgent.test-d.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk-vue/src/tests/createDeepAgent.test-d.ts)<br>[libs/sdk-vue/src/tests/langgraph.test-d.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk-vue/src/tests/langgraph.test-d.ts)<br>[libs/sdk-vue/src/tests/selector-cast.test-d.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk-vue/src/tests/selector-cast.test-d.ts)<br>[libs/sdk-vue/src/tests/stream.client.test.tsx](../../../../sources/langchain-ai__langgraphjs/libs/sdk-vue/src/tests/stream.client.test.tsx) |
| CI workflows | 6 | [.github/workflows/ci.yml](../../../../sources/langchain-ai__langgraphjs/.github/workflows/ci.yml)<br>[.github/workflows/deploy_docs.yml](../../../../sources/langchain-ai__langgraphjs/.github/workflows/deploy_docs.yml)<br>[.github/workflows/pr_lint.yml](../../../../sources/langchain-ai__langgraphjs/.github/workflows/pr_lint.yml)<br>[.github/workflows/release.yml](../../../../sources/langchain-ai__langgraphjs/.github/workflows/release.yml)<br>[.github/workflows/test-browser.yml](../../../../sources/langchain-ai__langgraphjs/.github/workflows/test-browser.yml)<br>[.github/workflows/test-exports.yml](../../../../sources/langchain-ai__langgraphjs/.github/workflows/test-exports.yml) |
| Containers / deploy | 4 | [libs/checkpoint-redis/docker-compose.yml](../../../../sources/langchain-ai__langgraphjs/libs/checkpoint-redis/docker-compose.yml)<br>[libs/checkpoint-postgres/docker-compose.yml](../../../../sources/langchain-ai__langgraphjs/libs/checkpoint-postgres/docker-compose.yml)<br>[libs/checkpoint-mongodb/docker-compose.yml](../../../../sources/langchain-ai__langgraphjs/libs/checkpoint-mongodb/docker-compose.yml)<br>[internal/environment_tests/docker-compose.yml](../../../../sources/langchain-ai__langgraphjs/internal/environment_tests/docker-compose.yml) |
| Security / policy | 10 | [libs/sdk/src/auth/error.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk/src/auth/error.ts)<br>[libs/sdk/src/auth/index.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk/src/auth/index.ts)<br>[libs/sdk/src/auth/types.ts](../../../../sources/langchain-ai__langgraphjs/libs/sdk/src/auth/types.ts)<br>[libs/langgraph-api/tests/auth.test.mts](../../../../sources/langchain-ai__langgraphjs/libs/langgraph-api/tests/auth.test.mts)<br>[libs/langgraph-api/tests/graphs/auth.mts](../../../../sources/langchain-ai__langgraphjs/libs/langgraph-api/tests/graphs/auth.mts)<br>[libs/langgraph-api/tests/graphs/langgraph.auth.json](../../../../sources/langchain-ai__langgraphjs/libs/langgraph-api/tests/graphs/langgraph.auth.json) |
| Agent instructions | 2 | [CLAUDE.md](../../../../sources/langchain-ai__langgraphjs/CLAUDE.md)<br>[docs/docs/agents/agents.md](../../../../sources/langchain-ai__langgraphjs/docs/docs/agents/agents.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `docs/docs/agents/mcp.md`, `docs/docs/agents/assets/mcp.png`, `libs/sdk-vue/src/context.ts`.
2. Trace execution through entrypoints: `libs/sdk-vue/src/index.ts`, `libs/sdk-svelte/src/index.ts`, `libs/sdk-react/src/index.ts`.
3. Map agent/tool runtime through: `libs/sdk-vue/src/context.ts`, `libs/sdk-svelte/src/context.ts`, `libs/sdk-react/src/context.tsx`.
4. Inspect retrieval/memory/indexing through: `libs/sdk-vue/src/index.ts`, `libs/sdk-vue/src/tests/fixtures/multi-interrupt-graph.ts`, `libs/sdk-svelte/src/index.ts`.
5. Verify behavior through test/eval files: `int-test-deps-docker-compose.yml`, `libs/sdk-vue/src/tests/createAgent.test-d.ts`, `libs/sdk-vue/src/tests/createDeepAgent.test-d.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Framework to build resilient language agents as graphs.. 핵심 구조 신호는 TypeScript, package.json, CLAUDE.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
