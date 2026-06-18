# microsoft/TypeAgent Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Sample code that explores an architecture for using language models to build a personal agent that can work with application agents.

## 요약

- 조사 단위: `sources/microsoft__TypeAgent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 4,658 files, 908 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=ts/.mcp.json, ts/packages/security/mcpValidation/bin/mcp-plan-validation.js, ts/packages/mcp/thoughts/.gitignore이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | microsoft/TypeAgent |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 708 |
| Forks | 100 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/microsoft__TypeAgent](../../../../sources/microsoft__TypeAgent) |
| Existing report | [reports/global-trending/repositories/microsoft__TypeAgent.md](../../../global-trending/repositories/microsoft__TypeAgent.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 4658 / 908 |
| Max observed depth | 13 |
| Top directories | .devcontainer, .github, android, docs, dotnet, pipelines, python, resources, ts |
| Top extensions | .ts: 2125, .json: 673, .cs: 485, .md: 413, .mts: 158, (none): 137, .agr: 72, .txt: 64, .cjs: 60, .js: 49, .mjs: 47, .html: 46 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| android | top-level component | 1 |
| docs | documentation surface | 1 |
| dotnet | top-level component | 1 |
| pipelines | top-level component | 1 |
| python | top-level component | 1 |
| resources | top-level component | 1 |
| ts | top-level component | 1 |


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
| mcp | [ts/.mcp.json](../../../../sources/microsoft__TypeAgent/ts/.mcp.json) | mcp signal |
| mcp | [ts/packages/security/mcpValidation/bin/mcp-plan-validation.js](../../../../sources/microsoft__TypeAgent/ts/packages/security/mcpValidation/bin/mcp-plan-validation.js) | mcp signal |
| mcp | [ts/packages/mcp/thoughts/.gitignore](../../../../sources/microsoft__TypeAgent/ts/packages/mcp/thoughts/.gitignore) | mcp signal |
| mcp | [ts/packages/mcp/thoughts/LICENSE](../../../../sources/microsoft__TypeAgent/ts/packages/mcp/thoughts/LICENSE) | mcp signal |
| agentRuntime | [ts/tools/package.json](../../../../sources/microsoft__TypeAgent/ts/tools/package.json) | agentRuntime signal |
| agentRuntime | [ts/tools/scripts/agent-worktree.sh](../../../../sources/microsoft__TypeAgent/ts/tools/scripts/agent-worktree.sh) | agentRuntime signal |
| agentRuntime | [ts/tools/scripts/azureDeploy.mjs](../../../../sources/microsoft__TypeAgent/ts/tools/scripts/azureDeploy.mjs) | agentRuntime signal |
| agentRuntime | [ts/tools/scripts/copy-better-sqlite3-node.js](../../../../sources/microsoft__TypeAgent/ts/tools/scripts/copy-better-sqlite3-node.js) | agentRuntime signal |
| entrypoints | [ts/tools/docsAutogen/src/cli.ts](../../../../sources/microsoft__TypeAgent/ts/tools/docsAutogen/src/cli.ts) | entrypoints signal |
| entrypoints | [ts/tools/docsAutogen/bin/docs-autogen.cjs](../../../../sources/microsoft__TypeAgent/ts/tools/docsAutogen/bin/docs-autogen.cjs) | entrypoints signal |
| entrypoints | [ts/packages/vscode-shell/src/webview/main.ts](../../../../sources/microsoft__TypeAgent/ts/packages/vscode-shell/src/webview/main.ts) | entrypoints signal |
| entrypoints | [ts/packages/utils/webSocketUtils/src/index.ts](../../../../sources/microsoft__TypeAgent/ts/packages/utils/webSocketUtils/src/index.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 118 | [ts/tools/docsAutogen/src/cli.ts](../../../../sources/microsoft__TypeAgent/ts/tools/docsAutogen/src/cli.ts)<br>[ts/tools/docsAutogen/bin/docs-autogen.cjs](../../../../sources/microsoft__TypeAgent/ts/tools/docsAutogen/bin/docs-autogen.cjs)<br>[ts/packages/vscode-shell/src/webview/main.ts](../../../../sources/microsoft__TypeAgent/ts/packages/vscode-shell/src/webview/main.ts)<br>[ts/packages/utils/webSocketUtils/src/index.ts](../../../../sources/microsoft__TypeAgent/ts/packages/utils/webSocketUtils/src/index.ts)<br>[ts/packages/utils/webSocketChannelServer/src/index.ts](../../../../sources/microsoft__TypeAgent/ts/packages/utils/webSocketChannelServer/src/index.ts)<br>[ts/packages/utils/webSocketChannelServer/src/server.ts](../../../../sources/microsoft__TypeAgent/ts/packages/utils/webSocketChannelServer/src/server.ts)<br>[ts/packages/utils/typechatUtils/src/index.ts](../../../../sources/microsoft__TypeAgent/ts/packages/utils/typechatUtils/src/index.ts)<br>[ts/packages/uriHandler/src/index.ts](../../../../sources/microsoft__TypeAgent/ts/packages/uriHandler/src/index.ts) |
| agentRuntime | 1665 | [ts/tools/package.json](../../../../sources/microsoft__TypeAgent/ts/tools/package.json)<br>[ts/tools/scripts/agent-worktree.sh](../../../../sources/microsoft__TypeAgent/ts/tools/scripts/agent-worktree.sh)<br>[ts/tools/scripts/azureDeploy.mjs](../../../../sources/microsoft__TypeAgent/ts/tools/scripts/azureDeploy.mjs)<br>[ts/tools/scripts/copy-better-sqlite3-node.js](../../../../sources/microsoft__TypeAgent/ts/tools/scripts/copy-better-sqlite3-node.js)<br>[ts/tools/scripts/dedupeDeployments.mjs](../../../../sources/microsoft__TypeAgent/ts/tools/scripts/dedupeDeployments.mjs)<br>[ts/tools/scripts/deployAgentServer.mjs](../../../../sources/microsoft__TypeAgent/ts/tools/scripts/deployAgentServer.mjs)<br>[ts/tools/scripts/elevate.config.json](../../../../sources/microsoft__TypeAgent/ts/tools/scripts/elevate.config.json)<br>[ts/tools/scripts/elevate.js](../../../../sources/microsoft__TypeAgent/ts/tools/scripts/elevate.js) |
| mcp | 23 | [ts/.mcp.json](../../../../sources/microsoft__TypeAgent/ts/.mcp.json)<br>[ts/packages/security/mcpValidation/bin/mcp-plan-validation.js](../../../../sources/microsoft__TypeAgent/ts/packages/security/mcpValidation/bin/mcp-plan-validation.js)<br>[ts/packages/mcp/thoughts/.gitignore](../../../../sources/microsoft__TypeAgent/ts/packages/mcp/thoughts/.gitignore)<br>[ts/packages/mcp/thoughts/LICENSE](../../../../sources/microsoft__TypeAgent/ts/packages/mcp/thoughts/LICENSE)<br>[ts/packages/mcp/thoughts/package.json](../../../../sources/microsoft__TypeAgent/ts/packages/mcp/thoughts/package.json)<br>[ts/packages/mcp/thoughts/README.AUTOGEN.md](../../../../sources/microsoft__TypeAgent/ts/packages/mcp/thoughts/README.AUTOGEN.md)<br>[ts/packages/mcp/thoughts/README.md](../../../../sources/microsoft__TypeAgent/ts/packages/mcp/thoughts/README.md)<br>[ts/packages/mcp/thoughts/tsconfig.json](../../../../sources/microsoft__TypeAgent/ts/packages/mcp/thoughts/tsconfig.json) |
| retrieval | 319 | [ts/packages/utils/webSocketUtils/src/index.ts](../../../../sources/microsoft__TypeAgent/ts/packages/utils/webSocketUtils/src/index.ts)<br>[ts/packages/utils/webSocketChannelServer/src/index.ts](../../../../sources/microsoft__TypeAgent/ts/packages/utils/webSocketChannelServer/src/index.ts)<br>[ts/packages/utils/typechatUtils/src/index.ts](../../../../sources/microsoft__TypeAgent/ts/packages/utils/typechatUtils/src/index.ts)<br>[ts/packages/uriHandler/src/index.ts](../../../../sources/microsoft__TypeAgent/ts/packages/uriHandler/src/index.ts)<br>[ts/packages/typeagent-core/src/index.ts](../../../../sources/microsoft__TypeAgent/ts/packages/typeagent-core/src/index.ts)<br>[ts/packages/typeagent-core/src/sandbox/index.ts](../../../../sources/microsoft__TypeAgent/ts/packages/typeagent-core/src/sandbox/index.ts)<br>[ts/packages/typeagent-core/src/runtime/index.ts](../../../../sources/microsoft__TypeAgent/ts/packages/typeagent-core/src/runtime/index.ts)<br>[ts/packages/typeagent-core/src/replay/index.ts](../../../../sources/microsoft__TypeAgent/ts/packages/typeagent-core/src/replay/index.ts) |
| spec | 487 | [ts/tools/docsAutogen/test/agentSurface.spec.ts](../../../../sources/microsoft__TypeAgent/ts/tools/docsAutogen/test/agentSurface.spec.ts)<br>[ts/tools/docsAutogen/test/assembleAutogen.spec.ts](../../../../sources/microsoft__TypeAgent/ts/tools/docsAutogen/test/assembleAutogen.spec.ts)<br>[ts/tools/docsAutogen/test/autogenRegion.spec.ts](../../../../sources/microsoft__TypeAgent/ts/tools/docsAutogen/test/autogenRegion.spec.ts)<br>[ts/tools/docsAutogen/test/changeDetection.spec.ts](../../../../sources/microsoft__TypeAgent/ts/tools/docsAutogen/test/changeDetection.spec.ts)<br>[ts/tools/docsAutogen/test/contentHash.spec.ts](../../../../sources/microsoft__TypeAgent/ts/tools/docsAutogen/test/contentHash.spec.ts)<br>[ts/tools/docsAutogen/test/detectEnvVars.spec.ts](../../../../sources/microsoft__TypeAgent/ts/tools/docsAutogen/test/detectEnvVars.spec.ts)<br>[ts/tools/docsAutogen/test/diffGuard.spec.ts](../../../../sources/microsoft__TypeAgent/ts/tools/docsAutogen/test/diffGuard.spec.ts)<br>[ts/tools/docsAutogen/test/documentationValidation.spec.ts](../../../../sources/microsoft__TypeAgent/ts/tools/docsAutogen/test/documentationValidation.spec.ts) |
| eval | 853 | [ts/tools/docsAutogen/test/agentSurface.spec.ts](../../../../sources/microsoft__TypeAgent/ts/tools/docsAutogen/test/agentSurface.spec.ts)<br>[ts/tools/docsAutogen/test/assembleAutogen.spec.ts](../../../../sources/microsoft__TypeAgent/ts/tools/docsAutogen/test/assembleAutogen.spec.ts)<br>[ts/tools/docsAutogen/test/autogenRegion.spec.ts](../../../../sources/microsoft__TypeAgent/ts/tools/docsAutogen/test/autogenRegion.spec.ts)<br>[ts/tools/docsAutogen/test/changeDetection.spec.ts](../../../../sources/microsoft__TypeAgent/ts/tools/docsAutogen/test/changeDetection.spec.ts)<br>[ts/tools/docsAutogen/test/contentHash.spec.ts](../../../../sources/microsoft__TypeAgent/ts/tools/docsAutogen/test/contentHash.spec.ts)<br>[ts/tools/docsAutogen/test/detectEnvVars.spec.ts](../../../../sources/microsoft__TypeAgent/ts/tools/docsAutogen/test/detectEnvVars.spec.ts)<br>[ts/tools/docsAutogen/test/diffGuard.spec.ts](../../../../sources/microsoft__TypeAgent/ts/tools/docsAutogen/test/diffGuard.spec.ts)<br>[ts/tools/docsAutogen/test/documentationValidation.spec.ts](../../../../sources/microsoft__TypeAgent/ts/tools/docsAutogen/test/documentationValidation.spec.ts) |
| security | 59 | [SECURITY.md](../../../../sources/microsoft__TypeAgent/SECURITY.md)<br>[ts/tools/scripts/repo-policy-check.mjs](../../../../sources/microsoft__TypeAgent/ts/tools/scripts/repo-policy-check.mjs)<br>[ts/packages/typeagent-core/test/sandbox.spec.ts](../../../../sources/microsoft__TypeAgent/ts/packages/typeagent-core/test/sandbox.spec.ts)<br>[ts/packages/typeagent-core/src/sandbox/index.ts](../../../../sources/microsoft__TypeAgent/ts/packages/typeagent-core/src/sandbox/index.ts)<br>[ts/packages/typeagent-core/src/sandbox/inMemorySandboxManager.ts](../../../../sources/microsoft__TypeAgent/ts/packages/typeagent-core/src/sandbox/inMemorySandboxManager.ts)<br>[ts/packages/typeagent-core/src/sandbox/repoAgentLoader.ts](../../../../sources/microsoft__TypeAgent/ts/packages/typeagent-core/src/sandbox/repoAgentLoader.ts)<br>[ts/packages/typeagent-core/src/sandbox/types.ts](../../../../sources/microsoft__TypeAgent/ts/packages/typeagent-core/src/sandbox/types.ts)<br>[ts/packages/security/validation/package.json](../../../../sources/microsoft__TypeAgent/ts/packages/security/validation/package.json) |
| ci | 11 | [.github/workflows/build-docker-container.yml](../../../../sources/microsoft__TypeAgent/.github/workflows/build-docker-container.yml)<br>[.github/workflows/build-dotnet.yml](../../../../sources/microsoft__TypeAgent/.github/workflows/build-dotnet.yml)<br>[.github/workflows/build-package-shell.yml](../../../../sources/microsoft__TypeAgent/.github/workflows/build-package-shell.yml)<br>[.github/workflows/build-ts.yml](../../../../sources/microsoft__TypeAgent/.github/workflows/build-ts.yml)<br>[.github/workflows/deploy-pages.yml](../../../../sources/microsoft__TypeAgent/.github/workflows/deploy-pages.yml)<br>[.github/workflows/docs-generate.yml](../../../../sources/microsoft__TypeAgent/.github/workflows/docs-generate.yml)<br>[.github/workflows/fix-dependabot-alerts.yml](../../../../sources/microsoft__TypeAgent/.github/workflows/fix-dependabot-alerts.yml)<br>[.github/workflows/format-pr.yml](../../../../sources/microsoft__TypeAgent/.github/workflows/format-pr.yml) |
| container | 2 | [ts/Dockerfile](../../../../sources/microsoft__TypeAgent/ts/Dockerfile)<br>[.devcontainer/Dockerfile](../../../../sources/microsoft__TypeAgent/.devcontainer/Dockerfile) |
| instruction | 10 | [ts/CLAUDE.md](../../../../sources/microsoft__TypeAgent/ts/CLAUDE.md)<br>[ts/packages/typeagent-studio/AGENTS.md](../../../../sources/microsoft__TypeAgent/ts/packages/typeagent-studio/AGENTS.md)<br>[ts/packages/typeagent-core/AGENTS.md](../../../../sources/microsoft__TypeAgent/ts/packages/typeagent-core/AGENTS.md)<br>[ts/packages/security/mcpValidation/templates/CLAUDE.md.template](../../../../sources/microsoft__TypeAgent/ts/packages/security/mcpValidation/templates/CLAUDE.md.template)<br>[ts/packages/agents/taskflow/CLAUDE.md](../../../../sources/microsoft__TypeAgent/ts/packages/agents/taskflow/CLAUDE.md)<br>[ts/packages/agents/powershell/CLAUDE.md](../../../../sources/microsoft__TypeAgent/ts/packages/agents/powershell/CLAUDE.md)<br>[ts/packages/agents/onboarding/AGENTS.md](../../../../sources/microsoft__TypeAgent/ts/packages/agents/onboarding/AGENTS.md)<br>[ts/examples/planValidationDemo/CLAUDE.md](../../../../sources/microsoft__TypeAgent/ts/examples/planValidationDemo/CLAUDE.md) |
| docs | 460 | [README.md](../../../../sources/microsoft__TypeAgent/README.md)<br>[ts/README.md](../../../../sources/microsoft__TypeAgent/ts/README.md)<br>[ts/tools/scripts/README.MD](../../../../sources/microsoft__TypeAgent/ts/tools/scripts/README.MD)<br>[ts/tools/scripts/armTemplates/README.md](../../../../sources/microsoft__TypeAgent/ts/tools/scripts/armTemplates/README.md)<br>[ts/tools/docsAutogen/README.md](../../../../sources/microsoft__TypeAgent/ts/tools/docsAutogen/README.md)<br>[ts/packages/vscode-shell/README.AUTOGEN.md](../../../../sources/microsoft__TypeAgent/ts/packages/vscode-shell/README.AUTOGEN.md)<br>[ts/packages/vscode-shell/README.md](../../../../sources/microsoft__TypeAgent/ts/packages/vscode-shell/README.md)<br>[ts/packages/utils/webSocketUtils/README.AUTOGEN.md](../../../../sources/microsoft__TypeAgent/ts/packages/utils/webSocketUtils/README.AUTOGEN.md) |
| config | 444 | [ts/package.json](../../../../sources/microsoft__TypeAgent/ts/package.json)<br>[ts/pnpm-workspace.yaml](../../../../sources/microsoft__TypeAgent/ts/pnpm-workspace.yaml)<br>[ts/tools/package.json](../../../../sources/microsoft__TypeAgent/ts/tools/package.json)<br>[ts/tools/docsAutogen/package.json](../../../../sources/microsoft__TypeAgent/ts/tools/docsAutogen/package.json)<br>[ts/tools/docsAutogen/tsconfig.json](../../../../sources/microsoft__TypeAgent/ts/tools/docsAutogen/tsconfig.json)<br>[ts/tools/docsAutogen/test/tsconfig.json](../../../../sources/microsoft__TypeAgent/ts/tools/docsAutogen/test/tsconfig.json)<br>[ts/tools/docsAutogen/src/tsconfig.json](../../../../sources/microsoft__TypeAgent/ts/tools/docsAutogen/src/tsconfig.json)<br>[ts/packages/vscode-shell/package.json](../../../../sources/microsoft__TypeAgent/ts/packages/vscode-shell/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 853 | [ts/tools/docsAutogen/test/agentSurface.spec.ts](../../../../sources/microsoft__TypeAgent/ts/tools/docsAutogen/test/agentSurface.spec.ts)<br>[ts/tools/docsAutogen/test/assembleAutogen.spec.ts](../../../../sources/microsoft__TypeAgent/ts/tools/docsAutogen/test/assembleAutogen.spec.ts)<br>[ts/tools/docsAutogen/test/autogenRegion.spec.ts](../../../../sources/microsoft__TypeAgent/ts/tools/docsAutogen/test/autogenRegion.spec.ts)<br>[ts/tools/docsAutogen/test/changeDetection.spec.ts](../../../../sources/microsoft__TypeAgent/ts/tools/docsAutogen/test/changeDetection.spec.ts)<br>[ts/tools/docsAutogen/test/contentHash.spec.ts](../../../../sources/microsoft__TypeAgent/ts/tools/docsAutogen/test/contentHash.spec.ts)<br>[ts/tools/docsAutogen/test/detectEnvVars.spec.ts](../../../../sources/microsoft__TypeAgent/ts/tools/docsAutogen/test/detectEnvVars.spec.ts) |
| CI workflows | 11 | [.github/workflows/build-docker-container.yml](../../../../sources/microsoft__TypeAgent/.github/workflows/build-docker-container.yml)<br>[.github/workflows/build-dotnet.yml](../../../../sources/microsoft__TypeAgent/.github/workflows/build-dotnet.yml)<br>[.github/workflows/build-package-shell.yml](../../../../sources/microsoft__TypeAgent/.github/workflows/build-package-shell.yml)<br>[.github/workflows/build-ts.yml](../../../../sources/microsoft__TypeAgent/.github/workflows/build-ts.yml)<br>[.github/workflows/deploy-pages.yml](../../../../sources/microsoft__TypeAgent/.github/workflows/deploy-pages.yml)<br>[.github/workflows/docs-generate.yml](../../../../sources/microsoft__TypeAgent/.github/workflows/docs-generate.yml) |
| Containers / deploy | 2 | [ts/Dockerfile](../../../../sources/microsoft__TypeAgent/ts/Dockerfile)<br>[.devcontainer/Dockerfile](../../../../sources/microsoft__TypeAgent/.devcontainer/Dockerfile) |
| Security / policy | 59 | [SECURITY.md](../../../../sources/microsoft__TypeAgent/SECURITY.md)<br>[ts/tools/scripts/repo-policy-check.mjs](../../../../sources/microsoft__TypeAgent/ts/tools/scripts/repo-policy-check.mjs)<br>[ts/packages/typeagent-core/test/sandbox.spec.ts](../../../../sources/microsoft__TypeAgent/ts/packages/typeagent-core/test/sandbox.spec.ts)<br>[ts/packages/typeagent-core/src/sandbox/index.ts](../../../../sources/microsoft__TypeAgent/ts/packages/typeagent-core/src/sandbox/index.ts)<br>[ts/packages/typeagent-core/src/sandbox/inMemorySandboxManager.ts](../../../../sources/microsoft__TypeAgent/ts/packages/typeagent-core/src/sandbox/inMemorySandboxManager.ts)<br>[ts/packages/typeagent-core/src/sandbox/repoAgentLoader.ts](../../../../sources/microsoft__TypeAgent/ts/packages/typeagent-core/src/sandbox/repoAgentLoader.ts) |
| Agent instructions | 10 | [ts/CLAUDE.md](../../../../sources/microsoft__TypeAgent/ts/CLAUDE.md)<br>[ts/packages/typeagent-studio/AGENTS.md](../../../../sources/microsoft__TypeAgent/ts/packages/typeagent-studio/AGENTS.md)<br>[ts/packages/typeagent-core/AGENTS.md](../../../../sources/microsoft__TypeAgent/ts/packages/typeagent-core/AGENTS.md)<br>[ts/packages/security/mcpValidation/templates/CLAUDE.md.template](../../../../sources/microsoft__TypeAgent/ts/packages/security/mcpValidation/templates/CLAUDE.md.template)<br>[ts/packages/agents/taskflow/CLAUDE.md](../../../../sources/microsoft__TypeAgent/ts/packages/agents/taskflow/CLAUDE.md)<br>[ts/packages/agents/powershell/CLAUDE.md](../../../../sources/microsoft__TypeAgent/ts/packages/agents/powershell/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `ts/.mcp.json`, `ts/packages/security/mcpValidation/bin/mcp-plan-validation.js`, `ts/packages/mcp/thoughts/.gitignore`.
2. Trace execution through entrypoints: `ts/tools/docsAutogen/src/cli.ts`, `ts/tools/docsAutogen/bin/docs-autogen.cjs`, `ts/packages/vscode-shell/src/webview/main.ts`.
3. Map agent/tool runtime through: `ts/tools/package.json`, `ts/tools/scripts/agent-worktree.sh`, `ts/tools/scripts/azureDeploy.mjs`.
4. Inspect retrieval/memory/indexing through: `ts/packages/utils/webSocketUtils/src/index.ts`, `ts/packages/utils/webSocketChannelServer/src/index.ts`, `ts/packages/utils/typechatUtils/src/index.ts`.
5. Verify behavior through test/eval files: `ts/tools/docsAutogen/test/agentSurface.spec.ts`, `ts/tools/docsAutogen/test/assembleAutogen.spec.ts`, `ts/tools/docsAutogen/test/autogenRegion.spec.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Sample code that explores an architecture for using language models to build a personal agent that can work with applica. 핵심 구조 신호는 TypeScript, README.md, LICENSE, ci, docs, spec-artifacts이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
