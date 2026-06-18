# clay-good/OpenLore Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Deterministic persistent memory that empowers AI agents to accurately map their knowledge boundaries and eliminate guesswork across massive code repositories.

## 요약

- 조사 단위: `sources/clay-good__OpenLore` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 757 files, 213 directories, depth score 131, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/core/services/mcp-watcher-incremental.test.ts, src/core/services/mcp-watcher.integration.test.ts, src/core/services/mcp-watcher.test.ts이고, 의존성 단서는 modelcontextprotocol, react, commander, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | clay-good/OpenLore |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 175 |
| Forks | 24 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/clay-good__OpenLore](../../../../sources/clay-good__OpenLore) |
| Existing report | [reports/global-trending/repositories/clay-good__OpenLore.md](../../../global-trending/repositories/clay-good__OpenLore.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 757 / 213 |
| Max observed depth | 10 |
| Top directories | .claude, .github, .planning, docs, examples, openspec, packaging, schemas, scripts, skills, src, stubs |
| Top extensions | .ts: 449, .md: 213, .json: 15, .yml: 13, .yaml: 10, .jsx: 9, .js: 6, .sh: 6, .mjs: 4, (none): 4, .c: 2, .cs: 2 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 179 |
| docs | documentation surface | 32 |
| examples/drift-demo | examples workspace | 8 |
| examples/opencode-skills | examples workspace | 6 |
| examples/ci | examples workspace | 3 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| examples/bmad | examples workspace | 1 |
| examples/gsd | examples workspace | 1 |
| examples/mistral-vibe | examples workspace | 1 |
| examples/opencode | examples workspace | 1 |
| examples/openspec-analysis | examples workspace | 1 |
| examples/openspec-cli | examples workspace | 1 |
| examples/pi | examples workspace | 1 |
| examples/spec-kit | examples workspace | 1 |
| openspec | top-level component | 1 |
| packaging | top-level component | 1 |
| schemas | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | tsx watch src/cli/index.ts |
| build | package.json | build | tsc && node scripts/copy-assets.mjs |
| serve-dev | package.json | start | node dist/cli/index.js |
| utility | package.json | view | tsx src/cli/index.ts view |
| utility | package.json | bench | tsx scripts/bench.ts |
| utility | package.json | bench:mcp | tsx scripts/bench-mcp.ts |
| serve-dev | package.json | bench:watch | tsx scripts/bench-watch.ts |
| utility | package.json | bench:agent | tsx scripts/bench-agent.ts |
| test | package.json | test | vitest |
| test | package.json | test:run | vitest run |
| test | package.json | test:coverage | vitest run --coverage |
| test | package.json | test:openspec-compat | vitest run --grep 'openspec' \|\| echo 'No OpenSpec compat tests yet' |
| test | package.json | test:e2e | vitest run --config vitest.integration.config.ts --reporter=verbose |
| test | package.json | test:integration | vitest run --config vitest.integration.config.ts |
| test | package.json | test:live | vitest run --config vitest.integration.config.ts live-data --reporter=verbose |
| serve-dev | package.json | build:watch | tsc --watch |
| utility | package.json | homebrew:formula | node scripts/update-homebrew-formula.mjs |
| test | package.json | clean | rm -rf dist coverage |
| utility | package.json | skill:install-local | node scripts/install-skill.js |
| quality | package.json | format | eslint src --fix |
| quality | package.json | lint | eslint src |
| quality | package.json | typecheck | tsc --noEmit |
| test | package.json | prepublishOnly | npm run build && npm run test:run |
| entrypoint | package.json bin | index.js | dist/cli/index.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | react |
| developerSurface | commander |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [src/core/services/mcp-watcher-incremental.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-watcher-incremental.test.ts) | mcp signal |
| mcp | [src/core/services/mcp-watcher.integration.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-watcher.integration.test.ts) | mcp signal |
| mcp | [src/core/services/mcp-watcher.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-watcher.test.ts) | mcp signal |
| mcp | [src/core/services/mcp-watcher.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-watcher.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/clay-good__OpenLore/AGENTS.md) | agentRuntime signal |
| agentRuntime | [src/viewer/hooks/usePanZoom.js](../../../../sources/clay-good__OpenLore/src/viewer/hooks/usePanZoom.js) | agentRuntime signal |
| agentRuntime | [src/core/services/tool-dispatch.ts](../../../../sources/clay-good__OpenLore/src/core/services/tool-dispatch.ts) | agentRuntime signal |
| agentRuntime | [src/core/services/mcp-handlers/memory.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/memory.test.ts) | agentRuntime signal |
| entrypoints | [src/viewer/app/main.jsx](../../../../sources/clay-good__OpenLore/src/viewer/app/main.jsx) | entrypoints signal |
| entrypoints | [src/core/scip/fixtures/tiny-repo/src/index.ts](../../../../sources/clay-good__OpenLore/src/core/scip/fixtures/tiny-repo/src/index.ts) | entrypoints signal |
| entrypoints | [src/core/analyzer/iac/fixtures/pulumi/__main__.py](../../../../sources/clay-good__OpenLore/src/core/analyzer/iac/fixtures/pulumi/__main__.py) | entrypoints signal |
| entrypoints | [src/core/analyzer/iac/fixtures/pulumi/main.go](../../../../sources/clay-good__OpenLore/src/core/analyzer/iac/fixtures/pulumi/main.go) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 6 | [src/viewer/app/main.jsx](../../../../sources/clay-good__OpenLore/src/viewer/app/main.jsx)<br>[src/core/scip/fixtures/tiny-repo/src/index.ts](../../../../sources/clay-good__OpenLore/src/core/scip/fixtures/tiny-repo/src/index.ts)<br>[src/core/analyzer/iac/fixtures/pulumi/__main__.py](../../../../sources/clay-good__OpenLore/src/core/analyzer/iac/fixtures/pulumi/__main__.py)<br>[src/core/analyzer/iac/fixtures/pulumi/main.go](../../../../sources/clay-good__OpenLore/src/core/analyzer/iac/fixtures/pulumi/main.go)<br>[src/core/analyzer/iac/fixtures/cdk/main.go](../../../../sources/clay-good__OpenLore/src/core/analyzer/iac/fixtures/cdk/main.go)<br>[examples/drift-demo/src/index.ts](../../../../sources/clay-good__OpenLore/examples/drift-demo/src/index.ts) |
| agentRuntime | 59 | [AGENTS.md](../../../../sources/clay-good__OpenLore/AGENTS.md)<br>[src/viewer/hooks/usePanZoom.js](../../../../sources/clay-good__OpenLore/src/viewer/hooks/usePanZoom.js)<br>[src/core/services/tool-dispatch.ts](../../../../sources/clay-good__OpenLore/src/core/services/tool-dispatch.ts)<br>[src/core/services/mcp-handlers/memory.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/memory.test.ts)<br>[src/core/services/mcp-handlers/memory.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/memory.ts)<br>[src/core/services/mcp-handlers/tool-contract.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/tool-contract.test.ts)<br>[src/core/services/mcp-handlers/tool-contract.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/tool-contract.ts)<br>[src/core/services/mcp-handlers/tool-guard.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/tool-guard.test.ts) |
| mcp | 87 | [src/core/services/mcp-watcher-incremental.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-watcher-incremental.test.ts)<br>[src/core/services/mcp-watcher.integration.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-watcher.integration.test.ts)<br>[src/core/services/mcp-watcher.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-watcher.test.ts)<br>[src/core/services/mcp-watcher.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-watcher.ts)<br>[src/core/services/mcp-handlers/analysis.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/analysis.test.ts)<br>[src/core/services/mcp-handlers/analysis.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/analysis.ts)<br>[src/core/services/mcp-handlers/architecture.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/architecture.test.ts)<br>[src/core/services/mcp-handlers/architecture.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/architecture.ts) |
| retrieval | 64 | [src/viewer/utils/graph-helpers.js](../../../../sources/clay-good__OpenLore/src/viewer/utils/graph-helpers.js)<br>[src/viewer/utils/graph-helpers.test.ts](../../../../sources/clay-good__OpenLore/src/viewer/utils/graph-helpers.test.ts)<br>[src/viewer/app/index.html](../../../../sources/clay-good__OpenLore/src/viewer/app/index.html)<br>[src/types/index.ts](../../../../sources/clay-good__OpenLore/src/types/index.ts)<br>[src/core/verifier/index.ts](../../../../sources/clay-good__OpenLore/src/core/verifier/index.ts)<br>[src/core/test-generator/index.ts](../../../../sources/clay-good__OpenLore/src/core/test-generator/index.ts)<br>[src/core/test-generator/renderers/index.ts](../../../../sources/clay-good__OpenLore/src/core/test-generator/renderers/index.ts)<br>[src/core/services/index.ts](../../../../sources/clay-good__OpenLore/src/core/services/index.ts) |
| spec | 112 | [src/core/services/mcp-handlers/architecture.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/architecture.test.ts)<br>[src/core/services/mcp-handlers/architecture.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/architecture.ts)<br>[src/core/generator/adr-generator.test.ts](../../../../sources/clay-good__OpenLore/src/core/generator/adr-generator.test.ts)<br>[src/core/generator/adr-generator.ts](../../../../sources/clay-good__OpenLore/src/core/generator/adr-generator.ts)<br>[src/core/generator/spec-pipeline.test.ts](../../../../sources/clay-good__OpenLore/src/core/generator/spec-pipeline.test.ts)<br>[src/core/generator/spec-pipeline.ts](../../../../sources/clay-good__OpenLore/src/core/generator/spec-pipeline.ts)<br>[src/core/generator/stages/stage5-architecture.test.ts](../../../../sources/clay-good__OpenLore/src/core/generator/stages/stage5-architecture.test.ts)<br>[src/core/generator/stages/stage5-architecture.ts](../../../../sources/clay-good__OpenLore/src/core/generator/stages/stage5-architecture.ts) |
| eval | 311 | [src/honesty-contract.test.ts](../../../../sources/clay-good__OpenLore/src/honesty-contract.test.ts)<br>[src/viewer/utils/graph-helpers.test.ts](../../../../sources/clay-good__OpenLore/src/viewer/utils/graph-helpers.test.ts)<br>[src/utils/command-helpers.test.ts](../../../../sources/clay-good__OpenLore/src/utils/command-helpers.test.ts)<br>[src/utils/errors.test.ts](../../../../sources/clay-good__OpenLore/src/utils/errors.test.ts)<br>[src/utils/logger.test.ts](../../../../sources/clay-good__OpenLore/src/utils/logger.test.ts)<br>[src/utils/progress.test.ts](../../../../sources/clay-good__OpenLore/src/utils/progress.test.ts)<br>[src/utils/prompts.test.ts](../../../../sources/clay-good__OpenLore/src/utils/prompts.test.ts)<br>[src/utils/shutdown.test.ts](../../../../sources/clay-good__OpenLore/src/utils/shutdown.test.ts) |
| security | 18 | [src/core/services/secret-redaction.ts](../../../../sources/clay-good__OpenLore/src/core/services/secret-redaction.ts)<br>[src/core/services/security-capabilities.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/security-capabilities.test.ts)<br>[src/core/services/mcp-handlers/security.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/security.test.ts)<br>[src/core/services/mcp-handlers/tool-guard.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/tool-guard.test.ts)<br>[src/core/services/mcp-handlers/tool-guard.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/tool-guard.ts)<br>[src/cli/commands/audit.ts](../../../../sources/clay-good__OpenLore/src/cli/commands/audit.ts)<br>[src/api/audit.ts](../../../../sources/clay-good__OpenLore/src/api/audit.ts)<br>[schemas/security-capabilities.json](../../../../sources/clay-good__OpenLore/schemas/security-capabilities.json) |
| ci | 5 | [examples/ci/openlore-preflight.gitlab.yml](../../../../sources/clay-good__OpenLore/examples/ci/openlore-preflight.gitlab.yml)<br>[examples/ci/openlore-preflight.sh](../../../../sources/clay-good__OpenLore/examples/ci/openlore-preflight.sh)<br>[examples/ci/openlore-preflight.yml](../../../../sources/clay-good__OpenLore/examples/ci/openlore-preflight.yml)<br>[.github/workflows/ci.yml](../../../../sources/clay-good__OpenLore/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/clay-good__OpenLore/.github/workflows/release.yml) |
| container | 6 | [src/core/analyzer/iac/fixtures/kubernetes/app.yaml](../../../../sources/clay-good__OpenLore/src/core/analyzer/iac/fixtures/kubernetes/app.yaml)<br>[src/core/analyzer/iac/fixtures/helm/mychart/Chart.yaml](../../../../sources/clay-good__OpenLore/src/core/analyzer/iac/fixtures/helm/mychart/Chart.yaml)<br>[src/core/analyzer/iac/fixtures/helm/mychart/values.yaml](../../../../sources/clay-good__OpenLore/src/core/analyzer/iac/fixtures/helm/mychart/values.yaml)<br>[src/core/analyzer/iac/fixtures/helm/mychart/templates/_helpers.tpl](../../../../sources/clay-good__OpenLore/src/core/analyzer/iac/fixtures/helm/mychart/templates/_helpers.tpl)<br>[src/core/analyzer/iac/fixtures/helm/mychart/templates/deployment.yaml](../../../../sources/clay-good__OpenLore/src/core/analyzer/iac/fixtures/helm/mychart/templates/deployment.yaml)<br>[src/core/analyzer/iac/fixtures/helm/mychart/charts/sub/Chart.yaml](../../../../sources/clay-good__OpenLore/src/core/analyzer/iac/fixtures/helm/mychart/charts/sub/Chart.yaml) |
| instruction | 2 | [AGENTS.md](../../../../sources/clay-good__OpenLore/AGENTS.md)<br>[CLAUDE.md](../../../../sources/clay-good__OpenLore/CLAUDE.md) |
| docs | 86 | [README.md](../../../../sources/clay-good__OpenLore/README.md)<br>[skills/openlore-orient/README.md](../../../../sources/clay-good__OpenLore/skills/openlore-orient/README.md)<br>[packaging/homebrew/README.md](../../../../sources/clay-good__OpenLore/packaging/homebrew/README.md)<br>[openspec/changes/README.md](../../../../sources/clay-good__OpenLore/openspec/changes/README.md)<br>[examples/spec-kit/README.md](../../../../sources/clay-good__OpenLore/examples/spec-kit/README.md)<br>[examples/pi/README.md](../../../../sources/clay-good__OpenLore/examples/pi/README.md)<br>[examples/openspec-cli/README.md](../../../../sources/clay-good__OpenLore/examples/openspec-cli/README.md)<br>[examples/openspec-analysis/README.md](../../../../sources/clay-good__OpenLore/examples/openspec-analysis/README.md) |
| config | 6 | [package.json](../../../../sources/clay-good__OpenLore/package.json)<br>[tsconfig.json](../../../../sources/clay-good__OpenLore/tsconfig.json)<br>[stubs/tree-sitter-cli-stub/package.json](../../../../sources/clay-good__OpenLore/stubs/tree-sitter-cli-stub/package.json)<br>[src/core/scip/fixtures/tiny-repo/package.json](../../../../sources/clay-good__OpenLore/src/core/scip/fixtures/tiny-repo/package.json)<br>[examples/drift-demo/package.json](../../../../sources/clay-good__OpenLore/examples/drift-demo/package.json)<br>[examples/drift-demo/tsconfig.json](../../../../sources/clay-good__OpenLore/examples/drift-demo/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 311 | [src/honesty-contract.test.ts](../../../../sources/clay-good__OpenLore/src/honesty-contract.test.ts)<br>[src/viewer/utils/graph-helpers.test.ts](../../../../sources/clay-good__OpenLore/src/viewer/utils/graph-helpers.test.ts)<br>[src/utils/command-helpers.test.ts](../../../../sources/clay-good__OpenLore/src/utils/command-helpers.test.ts)<br>[src/utils/errors.test.ts](../../../../sources/clay-good__OpenLore/src/utils/errors.test.ts)<br>[src/utils/logger.test.ts](../../../../sources/clay-good__OpenLore/src/utils/logger.test.ts)<br>[src/utils/progress.test.ts](../../../../sources/clay-good__OpenLore/src/utils/progress.test.ts) |
| CI workflows | 5 | [examples/ci/openlore-preflight.gitlab.yml](../../../../sources/clay-good__OpenLore/examples/ci/openlore-preflight.gitlab.yml)<br>[examples/ci/openlore-preflight.sh](../../../../sources/clay-good__OpenLore/examples/ci/openlore-preflight.sh)<br>[examples/ci/openlore-preflight.yml](../../../../sources/clay-good__OpenLore/examples/ci/openlore-preflight.yml)<br>[.github/workflows/ci.yml](../../../../sources/clay-good__OpenLore/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/clay-good__OpenLore/.github/workflows/release.yml) |
| Containers / deploy | 6 | [src/core/analyzer/iac/fixtures/kubernetes/app.yaml](../../../../sources/clay-good__OpenLore/src/core/analyzer/iac/fixtures/kubernetes/app.yaml)<br>[src/core/analyzer/iac/fixtures/helm/mychart/Chart.yaml](../../../../sources/clay-good__OpenLore/src/core/analyzer/iac/fixtures/helm/mychart/Chart.yaml)<br>[src/core/analyzer/iac/fixtures/helm/mychart/values.yaml](../../../../sources/clay-good__OpenLore/src/core/analyzer/iac/fixtures/helm/mychart/values.yaml)<br>[src/core/analyzer/iac/fixtures/helm/mychart/templates/_helpers.tpl](../../../../sources/clay-good__OpenLore/src/core/analyzer/iac/fixtures/helm/mychart/templates/_helpers.tpl)<br>[src/core/analyzer/iac/fixtures/helm/mychart/templates/deployment.yaml](../../../../sources/clay-good__OpenLore/src/core/analyzer/iac/fixtures/helm/mychart/templates/deployment.yaml)<br>[src/core/analyzer/iac/fixtures/helm/mychart/charts/sub/Chart.yaml](../../../../sources/clay-good__OpenLore/src/core/analyzer/iac/fixtures/helm/mychart/charts/sub/Chart.yaml) |
| Security / policy | 18 | [src/core/services/secret-redaction.ts](../../../../sources/clay-good__OpenLore/src/core/services/secret-redaction.ts)<br>[src/core/services/security-capabilities.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/security-capabilities.test.ts)<br>[src/core/services/mcp-handlers/security.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/security.test.ts)<br>[src/core/services/mcp-handlers/tool-guard.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/tool-guard.test.ts)<br>[src/core/services/mcp-handlers/tool-guard.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/tool-guard.ts)<br>[src/cli/commands/audit.ts](../../../../sources/clay-good__OpenLore/src/cli/commands/audit.ts) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/clay-good__OpenLore/AGENTS.md)<br>[CLAUDE.md](../../../../sources/clay-good__OpenLore/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/core/services/mcp-watcher-incremental.test.ts`, `src/core/services/mcp-watcher.integration.test.ts`, `src/core/services/mcp-watcher.test.ts`.
2. Trace execution through entrypoints: `src/viewer/app/main.jsx`, `src/core/scip/fixtures/tiny-repo/src/index.ts`, `src/core/analyzer/iac/fixtures/pulumi/__main__.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `src/viewer/hooks/usePanZoom.js`, `src/core/services/tool-dispatch.ts`.
4. Inspect retrieval/memory/indexing through: `src/viewer/utils/graph-helpers.js`, `src/viewer/utils/graph-helpers.test.ts`, `src/viewer/app/index.html`.
5. Verify behavior through test/eval files: `src/honesty-contract.test.ts`, `src/viewer/utils/graph-helpers.test.ts`, `src/utils/command-helpers.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Deterministic persistent memory that empowers AI agents to accurately map their knowledge boundaries and eliminate guess. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
