# MCPJam/inspector Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Testing and evaluation platform to chat, inspect, and debug MCP servers, MCP apps, and ChatGPT apps.

## 요약

- 조사 단위: `sources/MCPJam__inspector` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,723 files, 366 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

평가/관측/품질 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 eval=widget-react/src/__tests__/widget-file-messages.test.ts, widget-react/src/__tests__/widget-host-context.test.tsx, sdk/tsconfig.test.json이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 quality and evaluation comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | MCPJam/inspector |
| Topic | Evals, Observability, and Quality / 평가/관측/품질 |
| Region | global |
| Language | TypeScript |
| Stars | 2016 |
| Forks | 239 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/MCPJam__inspector](../../../../sources/MCPJam__inspector) |
| Existing report | [reports/global-trending/repositories/MCPJam__inspector.md](../../../global-trending/repositories/MCPJam__inspector.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2723 / 366 |
| Max observed depth | 9 |
| Top directories | .changeset, .github, .release-plan, .worktrees, chat-ui, cli, design-explorations, design-system, docs, examples, mcp, mcpjam-inspector, scripts, sdk, skills, soundcheck, widget-react |
| Top extensions | .ts: 1498, .tsx: 841, .png: 70, .mdx: 67, .json: 61, .md: 44, .mjs: 26, (none): 26, .css: 17, .yml: 17, .svg: 16, .html: 9 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 31 |
| examples/mcp-apps | examples workspace | 19 |
| examples/evals | examples workspace | 6 |
| examples/chatgpt-apps | examples workspace | 4 |
| examples/conformance | examples workspace | 3 |
| .github | ci surface | 1 |
| chat-ui | top-level component | 1 |
| cli | top-level component | 1 |
| design-explorations | top-level component | 1 |
| design-system | top-level component | 1 |
| examples | top-level component | 1 |
| examples/mcp-servers | examples workspace | 1 |
| mcp | top-level component | 1 |
| mcpjam-inspector | top-level component | 1 |
| scripts | top-level component | 1 |
| sdk | top-level component | 1 |
| skills | top-level component | 1 |
| soundcheck | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| test | package.json | build | npm run build -w @mcpjam/sdk && npm run build -w @mcpjam/cli && npm run build -w @mcpjam/chat-ui && npm run build -w @mcpjam/widget-react && npm run build -w @mcpjam/inspector |
| build | package.json | build:packages | npm run build -w @mcpjam/sdk && npm run build -w @mcpjam/cli |
| test | package.json | build:inspector | npm run build -w @mcpjam/inspector |
| build | package.json | typecheck | npm run typecheck -w @mcpjam/sdk && npm run build -w @mcpjam/sdk && npm run typecheck -w @mcpjam/cli && npm run typecheck -w @mcpjam/design-system && npm run typecheck -w @mcpjam/chat-ui && npm run typecheck -w @mcpjam/w |
| test | package.json | check:mcp-v1-runtime-imports | ! rg -n '@modelcontextprotocol/sdk' sdk/src cli/src mcpjam-inspector/client/src mcpjam-inspector/server -g '!**/dist/**' -g '!**/*.bundled.ts' -g '!**/*.generated.ts' |
| quality | package.json | check:platform-runtime-safety | ! rg -n '["\x27]node:\|process\.env' sdk/src/platform |
| test | package.json | check:platform-runtime-safety:dist | test -d sdk/dist/platform && ! rg -n '["\x27]node:\|process\.env' sdk/dist/platform -g '!*.map' |
| test | package.json | test | npm run check:mcp-v1-runtime-imports && npm run check:platform-runtime-safety && npm run build -w @mcpjam/sdk && npm run check:platform-runtime-safety:dist && npm run test:parallel && npm run test:packaging -w @mcpjam/sd |
| test | package.json | test:parallel | concurrently -n sdk,cli,design,chatui,widget,inspector,mcp -c blue,green,yellow,white,red,magenta,cyan --kill-others-on-fail "npm run test -w @mcpjam/sdk" "npm run test -w @mcpjam/cli" "npm run test -w @mcpjam/design-sys |
| test | package.json | test:ordered | npm run test -w @mcpjam/sdk && npm run test:packaging -w @mcpjam/sdk && npm run test -w @mcpjam/cli && npm run test -w @mcpjam/design-system && npm run test -w @mcpjam/chat-ui && npm run test -w @mcpjam/widget-react && n |
| test | package.json | verify | npm run typecheck && npm run test && npm run build:inspector |
| utility | package.json | docs:sync-tokens | node scripts/sync-docs-tokens.mjs |
| quality | package.json | docs:check-tokens | node scripts/sync-docs-tokens.mjs --check |
| build | package.json | release:status | changeset status |
| build | package.json | release:version | changeset version |
| build | package.json | release:publish | changeset publish |


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
| eval | [widget-react/src/__tests__/widget-file-messages.test.ts](../../../../sources/MCPJam__inspector/widget-react/src/__tests__/widget-file-messages.test.ts) | eval signal |
| eval | [widget-react/src/__tests__/widget-host-context.test.tsx](../../../../sources/MCPJam__inspector/widget-react/src/__tests__/widget-host-context.test.tsx) | eval signal |
| eval | [sdk/tsconfig.test.json](../../../../sources/MCPJam__inspector/sdk/tsconfig.test.json) | eval signal |
| eval | [sdk/tests/artifact-parsers.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/artifact-parsers.test.ts) | eval signal |
| entrypoints | [widget-react/src/index.ts](../../../../sources/MCPJam__inspector/widget-react/src/index.ts) | entrypoints signal |
| entrypoints | [sdk/src/index.ts](../../../../sources/MCPJam__inspector/sdk/src/index.ts) | entrypoints signal |
| entrypoints | [mcpjam-inspector/src/main.ts](../../../../sources/MCPJam__inspector/mcpjam-inspector/src/main.ts) | entrypoints signal |
| entrypoints | [mcpjam-inspector/client/src/App.tsx](../../../../sources/MCPJam__inspector/mcpjam-inspector/client/src/App.tsx) | entrypoints signal |
| config | [package.json](../../../../sources/MCPJam__inspector/package.json) | config signal |
| config | [widget-react/package.json](../../../../sources/MCPJam__inspector/widget-react/package.json) | config signal |
| config | [widget-react/tsconfig.json](../../../../sources/MCPJam__inspector/widget-react/tsconfig.json) | config signal |
| config | [soundcheck/package.json](../../../../sources/MCPJam__inspector/soundcheck/package.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 21 | [widget-react/src/index.ts](../../../../sources/MCPJam__inspector/widget-react/src/index.ts)<br>[sdk/src/index.ts](../../../../sources/MCPJam__inspector/sdk/src/index.ts)<br>[mcpjam-inspector/src/main.ts](../../../../sources/MCPJam__inspector/mcpjam-inspector/src/main.ts)<br>[mcpjam-inspector/client/src/App.tsx](../../../../sources/MCPJam__inspector/mcpjam-inspector/client/src/App.tsx)<br>[mcpjam-inspector/client/src/index.css](../../../../sources/MCPJam__inspector/mcpjam-inspector/client/src/index.css)<br>[mcpjam-inspector/client/src/main.tsx](../../../../sources/MCPJam__inspector/mcpjam-inspector/client/src/main.tsx)<br>[mcpjam-inspector/bin/start.js](../../../../sources/MCPJam__inspector/mcpjam-inspector/bin/start.js)<br>[mcp/src/index.ts](../../../../sources/MCPJam__inspector/mcp/src/index.ts) |
| agentRuntime | 244 | [widget-react/src/tool-result-utils.ts](../../../../sources/MCPJam__inspector/widget-react/src/tool-result-utils.ts)<br>[skills/mcp-inspector/SKILL.md](../../../../sources/MCPJam__inspector/skills/mcp-inspector/SKILL.md)<br>[skills/mcp-inspector/references/cli-surface-notes.md](../../../../sources/MCPJam__inspector/skills/mcp-inspector/references/cli-surface-notes.md)<br>[skills/mcp-inspector/references/mcp-2025-11-25-interpretation.md](../../../../sources/MCPJam__inspector/skills/mcp-inspector/references/mcp-2025-11-25-interpretation.md)<br>[skills/mcp-inspector/references/security-best-practices.md](../../../../sources/MCPJam__inspector/skills/mcp-inspector/references/security-best-practices.md)<br>[sdk/tests/sandbox-policy.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/sandbox-policy.test.ts)<br>[sdk/tests/tool-converters.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/tool-converters.test.ts)<br>[sdk/tests/tool-extraction.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/tool-extraction.test.ts) |
| mcp | 345 | [widget-react/src/mcp-apps-modal.tsx](../../../../sources/MCPJam__inspector/widget-react/src/mcp-apps-modal.tsx)<br>[widget-react/src/mcp-apps-renderer.tsx](../../../../sources/MCPJam__inspector/widget-react/src/mcp-apps-renderer.tsx)<br>[widget-react/src/mcp-apps-utils.ts](../../../../sources/MCPJam__inspector/widget-react/src/mcp-apps-utils.ts)<br>[soundcheck/src/components/mcp-deploy-status.tsx](../../../../sources/MCPJam__inspector/soundcheck/src/components/mcp-deploy-status.tsx)<br>[skills/mcp-inspector/SKILL.md](../../../../sources/MCPJam__inspector/skills/mcp-inspector/SKILL.md)<br>[skills/mcp-inspector/references/cli-surface-notes.md](../../../../sources/MCPJam__inspector/skills/mcp-inspector/references/cli-surface-notes.md)<br>[skills/mcp-inspector/references/mcp-2025-11-25-interpretation.md](../../../../sources/MCPJam__inspector/skills/mcp-inspector/references/mcp-2025-11-25-interpretation.md)<br>[skills/mcp-inspector/references/security-best-practices.md](../../../../sources/MCPJam__inspector/skills/mcp-inspector/references/security-best-practices.md) |
| retrieval | 43 | [widget-react/src/index.ts](../../../../sources/MCPJam__inspector/widget-react/src/index.ts)<br>[sdk/tests/mock-servers/index.ts](../../../../sources/MCPJam__inspector/sdk/tests/mock-servers/index.ts)<br>[sdk/src/index.ts](../../../../sources/MCPJam__inspector/sdk/src/index.ts)<br>[sdk/src/widget-runtime/index.ts](../../../../sources/MCPJam__inspector/sdk/src/widget-runtime/index.ts)<br>[sdk/src/predicates/index.ts](../../../../sources/MCPJam__inspector/sdk/src/predicates/index.ts)<br>[sdk/src/platform/index.ts](../../../../sources/MCPJam__inspector/sdk/src/platform/index.ts)<br>[sdk/src/oauth-conformance/index.ts](../../../../sources/MCPJam__inspector/sdk/src/oauth-conformance/index.ts)<br>[sdk/src/mcp-conformance/index.ts](../../../../sources/MCPJam__inspector/sdk/src/mcp-conformance/index.ts) |
| spec | 72 | [mcpjam-inspector/apps-spec.mdx](../../../../sources/MCPJam__inspector/mcpjam-inspector/apps-spec.mdx)<br>[mcpjam-inspector/e2e/nux.spec.ts](../../../../sources/MCPJam__inspector/mcpjam-inspector/e2e/nux.spec.ts)<br>[mcpjam-inspector/e2e/smoke.spec.ts](../../../../sources/MCPJam__inspector/mcpjam-inspector/e2e/smoke.spec.ts)<br>[mcpjam-inspector/client/src/components/chat-v2/thread/mcp-apps/widget-host.design.md](../../../../sources/MCPJam__inspector/mcpjam-inspector/client/src/components/chat-v2/thread/mcp-apps/widget-host.design.md)<br>[mcpjam-inspector/client/src/components/architecture-diagram/ArchAssetNode.tsx](../../../../sources/MCPJam__inspector/mcpjam-inspector/client/src/components/architecture-diagram/ArchAssetNode.tsx)<br>[mcpjam-inspector/client/src/components/architecture-diagram/ArchBlockNode.tsx](../../../../sources/MCPJam__inspector/mcpjam-inspector/client/src/components/architecture-diagram/ArchBlockNode.tsx)<br>[mcpjam-inspector/client/src/components/architecture-diagram/ArchConnectionEdge.tsx](../../../../sources/MCPJam__inspector/mcpjam-inspector/client/src/components/architecture-diagram/ArchConnectionEdge.tsx)<br>[mcpjam-inspector/client/src/components/architecture-diagram/archDiagramBuilder.ts](../../../../sources/MCPJam__inspector/mcpjam-inspector/client/src/components/architecture-diagram/archDiagramBuilder.ts) |
| eval | 848 | [widget-react/src/__tests__/widget-file-messages.test.ts](../../../../sources/MCPJam__inspector/widget-react/src/__tests__/widget-file-messages.test.ts)<br>[widget-react/src/__tests__/widget-host-context.test.tsx](../../../../sources/MCPJam__inspector/widget-react/src/__tests__/widget-host-context.test.tsx)<br>[sdk/tsconfig.test.json](../../../../sources/MCPJam__inspector/sdk/tsconfig.test.json)<br>[sdk/tests/artifact-parsers.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/artifact-parsers.test.ts)<br>[sdk/tests/browser-entry.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/browser-entry.test.ts)<br>[sdk/tests/compat-runtime-bundle-fresh.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/compat-runtime-bundle-fresh.test.ts)<br>[sdk/tests/conformance-reporting.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/conformance-reporting.test.ts)<br>[sdk/tests/errors.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/errors.test.ts) |
| security | 206 | [SECURITY.md](../../../../sources/MCPJam__inspector/SECURITY.md)<br>[skills/mcp-inspector/references/security-best-practices.md](../../../../sources/MCPJam__inspector/skills/mcp-inspector/references/security-best-practices.md)<br>[sdk/tests/host-config-policy.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/host-config-policy.test.ts)<br>[sdk/tests/oauth-login.probe-timeout.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/oauth-login.probe-timeout.test.ts)<br>[sdk/tests/oauth-login.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/oauth-login.test.ts)<br>[sdk/tests/oauth-proxy.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/oauth-proxy.test.ts)<br>[sdk/tests/refresh-token-auth.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/refresh-token-auth.test.ts)<br>[sdk/tests/sandbox-policy.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/sandbox-policy.test.ts) |
| ci | 16 | [.github/workflows/claude.yml](../../../../sources/MCPJam__inspector/.github/workflows/claude.yml)<br>[.github/workflows/deploy-mcp-prod.yml](../../../../sources/MCPJam__inspector/.github/workflows/deploy-mcp-prod.yml)<br>[.github/workflows/deploy-mcp-staging.yml](../../../../sources/MCPJam__inspector/.github/workflows/deploy-mcp-staging.yml)<br>[.github/workflows/deploy-soundcheck.yml](../../../../sources/MCPJam__inspector/.github/workflows/deploy-soundcheck.yml)<br>[.github/workflows/deploy-staging.yml](../../../../sources/MCPJam__inspector/.github/workflows/deploy-staging.yml)<br>[.github/workflows/lint.yml](../../../../sources/MCPJam__inspector/.github/workflows/lint.yml)<br>[.github/workflows/mac-release.yml](../../../../sources/MCPJam__inspector/.github/workflows/mac-release.yml)<br>[.github/workflows/mintlify-triage.yml](../../../../sources/MCPJam__inspector/.github/workflows/mintlify-triage.yml) |
| container | 2 | [mcpjam-inspector/compose.yaml](../../../../sources/MCPJam__inspector/mcpjam-inspector/compose.yaml)<br>[mcpjam-inspector/Dockerfile](../../../../sources/MCPJam__inspector/mcpjam-inspector/Dockerfile) |
| instruction | 1 | [mcpjam-inspector/AGENTS.md](../../../../sources/MCPJam__inspector/mcpjam-inspector/AGENTS.md) |
| docs | 128 | [README.md](../../../../sources/MCPJam__inspector/README.md)<br>[soundcheck/README.md](../../../../sources/MCPJam__inspector/soundcheck/README.md)<br>[sdk/README.md](../../../../sources/MCPJam__inspector/sdk/README.md)<br>[mcpjam-inspector/README.md](../../../../sources/MCPJam__inspector/mcpjam-inspector/README.md)<br>[mcpjam-inspector/e2e/README.md](../../../../sources/MCPJam__inspector/mcpjam-inspector/e2e/README.md)<br>[mcpjam-inspector/client/README.md](../../../../sources/MCPJam__inspector/mcpjam-inspector/client/README.md)<br>[mcpjam-inspector/client/src/hooks/README.md](../../../../sources/MCPJam__inspector/mcpjam-inspector/client/src/hooks/README.md)<br>[mcp/README.md](../../../../sources/MCPJam__inspector/mcp/README.md) |
| config | 37 | [package.json](../../../../sources/MCPJam__inspector/package.json)<br>[widget-react/package.json](../../../../sources/MCPJam__inspector/widget-react/package.json)<br>[widget-react/tsconfig.json](../../../../sources/MCPJam__inspector/widget-react/tsconfig.json)<br>[soundcheck/package.json](../../../../sources/MCPJam__inspector/soundcheck/package.json)<br>[soundcheck/tsconfig.json](../../../../sources/MCPJam__inspector/soundcheck/tsconfig.json)<br>[sdk/package.json](../../../../sources/MCPJam__inspector/sdk/package.json)<br>[sdk/tsconfig.json](../../../../sources/MCPJam__inspector/sdk/tsconfig.json)<br>[sdk/tests/tsconfig.json](../../../../sources/MCPJam__inspector/sdk/tests/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 848 | [widget-react/src/__tests__/widget-file-messages.test.ts](../../../../sources/MCPJam__inspector/widget-react/src/__tests__/widget-file-messages.test.ts)<br>[widget-react/src/__tests__/widget-host-context.test.tsx](../../../../sources/MCPJam__inspector/widget-react/src/__tests__/widget-host-context.test.tsx)<br>[sdk/tsconfig.test.json](../../../../sources/MCPJam__inspector/sdk/tsconfig.test.json)<br>[sdk/tests/artifact-parsers.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/artifact-parsers.test.ts)<br>[sdk/tests/browser-entry.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/browser-entry.test.ts)<br>[sdk/tests/compat-runtime-bundle-fresh.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/compat-runtime-bundle-fresh.test.ts) |
| CI workflows | 16 | [.github/workflows/claude.yml](../../../../sources/MCPJam__inspector/.github/workflows/claude.yml)<br>[.github/workflows/deploy-mcp-prod.yml](../../../../sources/MCPJam__inspector/.github/workflows/deploy-mcp-prod.yml)<br>[.github/workflows/deploy-mcp-staging.yml](../../../../sources/MCPJam__inspector/.github/workflows/deploy-mcp-staging.yml)<br>[.github/workflows/deploy-soundcheck.yml](../../../../sources/MCPJam__inspector/.github/workflows/deploy-soundcheck.yml)<br>[.github/workflows/deploy-staging.yml](../../../../sources/MCPJam__inspector/.github/workflows/deploy-staging.yml)<br>[.github/workflows/lint.yml](../../../../sources/MCPJam__inspector/.github/workflows/lint.yml) |
| Containers / deploy | 2 | [mcpjam-inspector/compose.yaml](../../../../sources/MCPJam__inspector/mcpjam-inspector/compose.yaml)<br>[mcpjam-inspector/Dockerfile](../../../../sources/MCPJam__inspector/mcpjam-inspector/Dockerfile) |
| Security / policy | 206 | [SECURITY.md](../../../../sources/MCPJam__inspector/SECURITY.md)<br>[skills/mcp-inspector/references/security-best-practices.md](../../../../sources/MCPJam__inspector/skills/mcp-inspector/references/security-best-practices.md)<br>[sdk/tests/host-config-policy.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/host-config-policy.test.ts)<br>[sdk/tests/oauth-login.probe-timeout.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/oauth-login.probe-timeout.test.ts)<br>[sdk/tests/oauth-login.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/oauth-login.test.ts)<br>[sdk/tests/oauth-proxy.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/oauth-proxy.test.ts) |
| Agent instructions | 1 | [mcpjam-inspector/AGENTS.md](../../../../sources/MCPJam__inspector/mcpjam-inspector/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `widget-react/src/__tests__/widget-file-messages.test.ts`, `widget-react/src/__tests__/widget-host-context.test.tsx`, `sdk/tsconfig.test.json`.
2. Trace execution through entrypoints: `widget-react/src/index.ts`, `sdk/src/index.ts`, `mcpjam-inspector/src/main.ts`.
3. Map agent/tool runtime through: `widget-react/src/tool-result-utils.ts`, `skills/mcp-inspector/SKILL.md`, `skills/mcp-inspector/references/cli-surface-notes.md`.
4. Inspect retrieval/memory/indexing through: `widget-react/src/index.ts`, `sdk/tests/mock-servers/index.ts`, `sdk/src/index.ts`.
5. Verify behavior through test/eval files: `widget-react/src/__tests__/widget-file-messages.test.ts`, `widget-react/src/__tests__/widget-host-context.test.tsx`, `sdk/tsconfig.test.json`.

## Existing Repository Insight

평가/관측/품질 관점에서 Testing and evaluation platform to chat, inspect, and debug MCP servers, MCP apps, and ChatGPT apps.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, react, tests이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 평가/관측/품질 레포입니다. 활용 관점은 quality and evaluation comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
