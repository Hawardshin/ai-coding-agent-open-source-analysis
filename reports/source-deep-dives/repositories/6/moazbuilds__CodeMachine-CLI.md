# moazbuilds/codemachine-cli Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 552 files, 157 directories.

## 요약

- 조사 단위: `sources/moazbuilds__CodeMachine-CLI` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 552 files, 157 directories, depth score 119, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=bin/codemachine.js이고, 의존성 단서는 modelcontextprotocol, commander, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | moazbuilds/codemachine-cli |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/moazbuilds__CodeMachine-CLI](../../../../sources/moazbuilds__CodeMachine-CLI) |
| Existing report | [reports/clone-structures/moazbuilds__codemachine-cli.md](../../../clone-structures/moazbuilds__codemachine-cli.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 552 / 157 |
| Max observed depth | 9 |
| Top directories | .github, bin, config, docker, images, prompts, scripts, src, templates |
| Top extensions | .ts: 423, .tsx: 78, .md: 15, .js: 8, .json: 8, .png: 6, .yaml: 4, .yml: 4, (none): 3, .csv: 1, .lock: 1, .toml: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 139 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| config | top-level component | 1 |
| docker | documentation surface | 1 |
| images | top-level component | 1 |
| prompts | top-level component | 1 |
| scripts | top-level component | 1 |
| templates | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | _comment_dev | Development: Run from source (no build needed) |
| serve-dev | package.json | dev | DEBUG=true bun --conditions=browser src/runtime/cli-setup.ts |
| utility | package.json | debug | DEBUG=true bun --conditions=browser src/runtime/cli-setup.ts |
| serve-dev | package.json | start | bun --conditions=browser src/runtime/cli-setup.ts |
| test | package.json | _comment_build | Production: Build platform-specific executables |
| build | package.json | build | bun scripts/build.ts |
| test | package.json | _comment_quality | Code Quality: Linting, testing, formatting |
| quality | package.json | lint | eslint --max-warnings=0 "src/**/*.{ts,tsx}" |
| test | package.json | test | bun test |
| test | package.json | test:watch | bun test --watch |
| test | package.json | test:coverage | bun test --coverage |
| quality | package.json | format | prettier --write . |
| quality | package.json | typecheck | tsc --noEmit |
| utility | package.json | _comment_telemetry | Telemetry: Import and analyze traces/logs |
| utility | package.json | import-telemetry | bun scripts/import-telemetry.ts |
| build | package.json | _comment_release | Release: Publishing and validation |
| utility | package.json | prepare | husky install |
| test | package.json | release | bun scripts/publish.ts --tag latest |
| test | package.json | publish:all | bun scripts/publish.ts --tag latest --dry-run |
| entrypoint | package.json bin | codemachine.js | bin/codemachine.js |
| entrypoint | package.json bin | codemachine.js | bin/codemachine.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | commander |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [bin/codemachine.js](../../../../sources/moazbuilds__CodeMachine-CLI/bin/codemachine.js) | entrypoints signal |
| config | [package.json](../../../../sources/moazbuilds__CodeMachine-CLI/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/moazbuilds__CodeMachine-CLI/tsconfig.json) | config signal |
| config | [config/package.json](../../../../sources/moazbuilds__CodeMachine-CLI/config/package.json) | config signal |
| ci | [.github/workflows/build.yml](../../../../sources/moazbuilds__CodeMachine-CLI/.github/workflows/build.yml) | ci signal |
| ci | [.github/workflows/publish.yml](../../../../sources/moazbuilds__CodeMachine-CLI/.github/workflows/publish.yml) | ci signal |
| docs | [README.md](../../../../sources/moazbuilds__CodeMachine-CLI/README.md) | docs signal |
| docs | [docker/observability/README.md](../../../../sources/moazbuilds__CodeMachine-CLI/docker/observability/README.md) | docs signal |
| container | [docker/observability/docker-compose.yml](../../../../sources/moazbuilds__CodeMachine-CLI/docker/observability/docker-compose.yml) | container support |
| eval | [src/shared/tracing/config.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/shared/tracing/config.ts) | eval support |
| eval | [src/shared/tracing/index.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/shared/tracing/index.ts) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [bin/codemachine.js](../../../../sources/moazbuilds__CodeMachine-CLI/bin/codemachine.js) |
| agentRuntime | 187 | [src/workflows/step/hooks.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/step/hooks.ts)<br>[src/workflows/runner/core.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/runner/core.ts)<br>[src/workflows/runner/index.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/runner/index.ts)<br>[src/workflows/runner/types.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/runner/types.ts)<br>[src/workflows/runner/modes/autonomous.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/runner/modes/autonomous.ts)<br>[src/workflows/runner/modes/continuous.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/runner/modes/continuous.ts)<br>[src/workflows/runner/modes/index.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/runner/modes/index.ts)<br>[src/workflows/runner/modes/interactive.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/runner/modes/interactive.ts) |
| mcp | 49 | [src/workflows/mcp.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/mcp.ts)<br>[src/workflows/signals/mcp/controller.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/signals/mcp/controller.ts)<br>[src/workflows/signals/mcp/detector.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/signals/mcp/detector.ts)<br>[src/workflows/signals/mcp/index.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/signals/mcp/index.ts)<br>[src/infra/mcp/context.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/mcp/context.ts)<br>[src/infra/mcp/errors.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/mcp/errors.ts)<br>[src/infra/mcp/index.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/mcp/index.ts)<br>[src/infra/mcp/registry.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/mcp/registry.ts) |
| retrieval | 106 | [src/workflows/index.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/index.ts)<br>[src/workflows/utils/index.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/utils/index.ts)<br>[src/workflows/templates/index.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/templates/index.ts)<br>[src/workflows/step/index.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/step/index.ts)<br>[src/workflows/step/scenarios/index.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/step/scenarios/index.ts)<br>[src/workflows/state/index.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/state/index.ts)<br>[src/workflows/signals/index.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/signals/index.ts)<br>[src/workflows/signals/mcp/index.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/signals/mcp/index.ts) |
| spec | 0 | not obvious |
| eval | 19 | [src/shared/tracing/config.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/shared/tracing/config.ts)<br>[src/shared/tracing/index.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/shared/tracing/index.ts)<br>[src/shared/tracing/init.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/shared/tracing/init.ts)<br>[src/shared/tracing/sampler.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/shared/tracing/sampler.ts)<br>[src/shared/tracing/storage.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/shared/tracing/storage.ts)<br>[src/shared/tracing/tracers.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/shared/tracing/tracers.ts)<br>[src/shared/tracing/exporters/factory.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/shared/tracing/exporters/factory.ts)<br>[src/shared/tracing/exporters/file.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/shared/tracing/exporters/file.ts) |
| security | 9 | [src/infra/engines/providers/opencode/auth.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/engines/providers/opencode/auth.ts)<br>[src/infra/engines/providers/mistral/auth.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/engines/providers/mistral/auth.ts)<br>[src/infra/engines/providers/cursor/auth.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/engines/providers/cursor/auth.ts)<br>[src/infra/engines/providers/codex/auth.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/engines/providers/codex/auth.ts)<br>[src/infra/engines/providers/claude/auth.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/engines/providers/claude/auth.ts)<br>[src/infra/engines/providers/ccr/auth.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/engines/providers/ccr/auth.ts)<br>[src/infra/engines/providers/auggie/auth.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/engines/providers/auggie/auth.ts)<br>[src/infra/engines/core/auth.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/engines/core/auth.ts) |
| ci | 2 | [.github/workflows/build.yml](../../../../sources/moazbuilds__CodeMachine-CLI/.github/workflows/build.yml)<br>[.github/workflows/publish.yml](../../../../sources/moazbuilds__CodeMachine-CLI/.github/workflows/publish.yml) |
| container | 1 | [docker/observability/docker-compose.yml](../../../../sources/moazbuilds__CodeMachine-CLI/docker/observability/docker-compose.yml) |
| instruction | 0 | not obvious |
| docs | 2 | [README.md](../../../../sources/moazbuilds__CodeMachine-CLI/README.md)<br>[docker/observability/README.md](../../../../sources/moazbuilds__CodeMachine-CLI/docker/observability/README.md) |
| config | 3 | [package.json](../../../../sources/moazbuilds__CodeMachine-CLI/package.json)<br>[tsconfig.json](../../../../sources/moazbuilds__CodeMachine-CLI/tsconfig.json)<br>[config/package.json](../../../../sources/moazbuilds__CodeMachine-CLI/config/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 19 | [src/shared/tracing/config.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/shared/tracing/config.ts)<br>[src/shared/tracing/index.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/shared/tracing/index.ts)<br>[src/shared/tracing/init.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/shared/tracing/init.ts)<br>[src/shared/tracing/sampler.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/shared/tracing/sampler.ts)<br>[src/shared/tracing/storage.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/shared/tracing/storage.ts)<br>[src/shared/tracing/tracers.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/shared/tracing/tracers.ts) |
| CI workflows | 2 | [.github/workflows/build.yml](../../../../sources/moazbuilds__CodeMachine-CLI/.github/workflows/build.yml)<br>[.github/workflows/publish.yml](../../../../sources/moazbuilds__CodeMachine-CLI/.github/workflows/publish.yml) |
| Containers / deploy | 1 | [docker/observability/docker-compose.yml](../../../../sources/moazbuilds__CodeMachine-CLI/docker/observability/docker-compose.yml) |
| Security / policy | 9 | [src/infra/engines/providers/opencode/auth.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/engines/providers/opencode/auth.ts)<br>[src/infra/engines/providers/mistral/auth.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/engines/providers/mistral/auth.ts)<br>[src/infra/engines/providers/cursor/auth.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/engines/providers/cursor/auth.ts)<br>[src/infra/engines/providers/codex/auth.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/engines/providers/codex/auth.ts)<br>[src/infra/engines/providers/claude/auth.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/engines/providers/claude/auth.ts)<br>[src/infra/engines/providers/ccr/auth.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/engines/providers/ccr/auth.ts) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `bin/codemachine.js`, `package.json`, `tsconfig.json`.
2. Trace execution through entrypoints: `bin/codemachine.js`.
3. Map agent/tool runtime through: `src/workflows/step/hooks.ts`, `src/workflows/runner/core.ts`, `src/workflows/runner/index.ts`.
4. Inspect retrieval/memory/indexing through: `src/workflows/index.ts`, `src/workflows/utils/index.ts`, `src/workflows/templates/index.ts`.
5. Verify behavior through test/eval files: `src/shared/tracing/config.ts`, `src/shared/tracing/index.ts`, `src/shared/tracing/init.ts`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 Local clone structure analysis 552 files, 157 directories.. 핵심 구조 신호는 package.json, README.md, LICENSE, modelcontextprotocol, ci, docs이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, license metadata missing입니다.
