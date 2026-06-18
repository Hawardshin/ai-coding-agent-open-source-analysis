# codeaholicguy/ai-devkit Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Make AI coding agents follow a repeatable engineering workflow with planning, memory, verification, skills, and review. One config. All agents. Same workflow.

## 요약

- 조사 단위: `sources/codeaholicguy__ai-devkit` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 737 files, 159 directories, depth score 123, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/cli/src/services/install/mcp/BaseMcpGenerator.ts, packages/cli/src/services/install/mcp/ClaudeCodeMcpGenerator.ts, packages/cli/src/services/install/mcp/CodexMcpGenerator.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | codeaholicguy/ai-devkit |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 1389 |
| Forks | 218 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/codeaholicguy__ai-devkit](../../../../sources/codeaholicguy__ai-devkit) |
| Existing report | [reports/global-trending/repositories/codeaholicguy__ai-devkit.md](../../../global-trending/repositories/codeaholicguy__ai-devkit.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 737 / 159 |
| Max observed depth | 8 |
| Top directories | .claude-plugin, .codex-plugin, .cursor-plugin, .github, .husky, docs, e2e, packages, skills, templates, web |
| Top extensions | .md: 330, .ts: 257, .json: 39, .tsx: 38, .yaml: 20, (none): 17, .png: 11, .yml: 8, .svg: 5, .css: 2, .gif: 2, .mjs: 2 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/cli | packages workspace | 59 |
| web | source boundary | 43 |
| docs | documentation surface | 36 |
| packages/memory | packages workspace | 32 |
| packages/memory-dashboard | packages workspace | 26 |
| packages/agent-manager | packages workspace | 4 |
| packages/channel-connector | packages workspace | 4 |
| packages/pi-session-tracker | packages workspace | 3 |
| .github | ci surface | 1 |
| e2e | validation surface | 1 |
| packages | source boundary | 1 |
| skills | top-level component | 1 |
| templates | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | nx | nx |
| utility | package.json | prepare | husky |
| build | package.json | build | nx run-many -t build |
| quality | package.json | lint | nx run-many -t lint |
| test | package.json | test | nx run-many -t test |
| test | package.json | test:watch | nx run-many -t test --watch |
| test | package.json | test:coverage | nx run-many -t test --coverage |
| test | package.json | test:e2e | vitest run --config e2e/vitest.config.ts |


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
| mcp | [packages/cli/src/services/install/mcp/BaseMcpGenerator.ts](../../../../sources/codeaholicguy__ai-devkit/packages/cli/src/services/install/mcp/BaseMcpGenerator.ts) | mcp signal |
| mcp | [packages/cli/src/services/install/mcp/ClaudeCodeMcpGenerator.ts](../../../../sources/codeaholicguy__ai-devkit/packages/cli/src/services/install/mcp/ClaudeCodeMcpGenerator.ts) | mcp signal |
| mcp | [packages/cli/src/services/install/mcp/CodexMcpGenerator.ts](../../../../sources/codeaholicguy__ai-devkit/packages/cli/src/services/install/mcp/CodexMcpGenerator.ts) | mcp signal |
| mcp | [packages/cli/src/services/install/mcp/DevinMcpGenerator.ts](../../../../sources/codeaholicguy__ai-devkit/packages/cli/src/services/install/mcp/DevinMcpGenerator.ts) | mcp signal |
| agentRuntime | [agent-console-showcase.gif](../../../../sources/codeaholicguy__ai-devkit/agent-console-showcase.gif) | agentRuntime signal |
| agentRuntime | [web/public/agent-console.gif](../../../../sources/codeaholicguy__ai-devkit/web/public/agent-console.gif) | agentRuntime signal |
| agentRuntime | [web/app/skills/layout.tsx](../../../../sources/codeaholicguy__ai-devkit/web/app/skills/layout.tsx) | agentRuntime signal |
| agentRuntime | [web/app/skills/page.tsx](../../../../sources/codeaholicguy__ai-devkit/web/app/skills/page.tsx) | agentRuntime signal |
| entrypoints | [packages/memory-dashboard/tests/server.test.ts](../../../../sources/codeaholicguy__ai-devkit/packages/memory-dashboard/tests/server.test.ts) | entrypoints signal |
| entrypoints | [packages/memory-dashboard/src/index.ts](../../../../sources/codeaholicguy__ai-devkit/packages/memory-dashboard/src/index.ts) | entrypoints signal |
| entrypoints | [packages/memory-dashboard/src/server.ts](../../../../sources/codeaholicguy__ai-devkit/packages/memory-dashboard/src/server.ts) | entrypoints signal |
| entrypoints | [packages/memory/tests/unit/server.test.ts](../../../../sources/codeaholicguy__ai-devkit/packages/memory/tests/unit/server.test.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 10 | [packages/memory-dashboard/tests/server.test.ts](../../../../sources/codeaholicguy__ai-devkit/packages/memory-dashboard/tests/server.test.ts)<br>[packages/memory-dashboard/src/index.ts](../../../../sources/codeaholicguy__ai-devkit/packages/memory-dashboard/src/index.ts)<br>[packages/memory-dashboard/src/server.ts](../../../../sources/codeaholicguy__ai-devkit/packages/memory-dashboard/src/server.ts)<br>[packages/memory/tests/unit/server.test.ts](../../../../sources/codeaholicguy__ai-devkit/packages/memory/tests/unit/server.test.ts)<br>[packages/memory/src/index.ts](../../../../sources/codeaholicguy__ai-devkit/packages/memory/src/index.ts)<br>[packages/memory/src/server.ts](../../../../sources/codeaholicguy__ai-devkit/packages/memory/src/server.ts)<br>[packages/cli/src/cli.ts](../../../../sources/codeaholicguy__ai-devkit/packages/cli/src/cli.ts)<br>[packages/cli/src/index.ts](../../../../sources/codeaholicguy__ai-devkit/packages/cli/src/index.ts) |
| agentRuntime | 177 | [agent-console-showcase.gif](../../../../sources/codeaholicguy__ai-devkit/agent-console-showcase.gif)<br>[web/public/agent-console.gif](../../../../sources/codeaholicguy__ai-devkit/web/public/agent-console.gif)<br>[web/app/skills/layout.tsx](../../../../sources/codeaholicguy__ai-devkit/web/app/skills/layout.tsx)<br>[web/app/skills/page.tsx](../../../../sources/codeaholicguy__ai-devkit/web/app/skills/page.tsx)<br>[skills/index.json](../../../../sources/codeaholicguy__ai-devkit/skills/index.json)<br>[skills/registry.json](../../../../sources/codeaholicguy__ai-devkit/skills/registry.json)<br>[skills/verify/SKILL.md](../../../../sources/codeaholicguy__ai-devkit/skills/verify/SKILL.md)<br>[skills/verify/agents/openai.yaml](../../../../sources/codeaholicguy__ai-devkit/skills/verify/agents/openai.yaml) |
| mcp | 27 | [packages/cli/src/services/install/mcp/BaseMcpGenerator.ts](../../../../sources/codeaholicguy__ai-devkit/packages/cli/src/services/install/mcp/BaseMcpGenerator.ts)<br>[packages/cli/src/services/install/mcp/ClaudeCodeMcpGenerator.ts](../../../../sources/codeaholicguy__ai-devkit/packages/cli/src/services/install/mcp/ClaudeCodeMcpGenerator.ts)<br>[packages/cli/src/services/install/mcp/CodexMcpGenerator.ts](../../../../sources/codeaholicguy__ai-devkit/packages/cli/src/services/install/mcp/CodexMcpGenerator.ts)<br>[packages/cli/src/services/install/mcp/DevinMcpGenerator.ts](../../../../sources/codeaholicguy__ai-devkit/packages/cli/src/services/install/mcp/DevinMcpGenerator.ts)<br>[packages/cli/src/services/install/mcp/GitHubCopilotMcpGenerator.ts](../../../../sources/codeaholicguy__ai-devkit/packages/cli/src/services/install/mcp/GitHubCopilotMcpGenerator.ts)<br>[packages/cli/src/services/install/mcp/index.ts](../../../../sources/codeaholicguy__ai-devkit/packages/cli/src/services/install/mcp/index.ts)<br>[packages/cli/src/services/install/mcp/JunieMcpGenerator.ts](../../../../sources/codeaholicguy__ai-devkit/packages/cli/src/services/install/mcp/JunieMcpGenerator.ts)<br>[packages/cli/src/services/install/mcp/KiloCodeMcpGenerator.ts](../../../../sources/codeaholicguy__ai-devkit/packages/cli/src/services/install/mcp/KiloCodeMcpGenerator.ts) |
| retrieval | 101 | [web/content/roadmap/4-local-memory.md](../../../../sources/codeaholicguy__ai-devkit/web/content/roadmap/4-local-memory.md)<br>[web/content/roadmap/7-memory-management.md](../../../../sources/codeaholicguy__ai-devkit/web/content/roadmap/7-memory-management.md)<br>[web/content/roadmap/8-memory-evaluation.md](../../../../sources/codeaholicguy__ai-devkit/web/content/roadmap/8-memory-evaluation.md)<br>[web/content/docs/6-memory.md](../../../../sources/codeaholicguy__ai-devkit/web/content/docs/6-memory.md)<br>[skills/index.json](../../../../sources/codeaholicguy__ai-devkit/skills/index.json)<br>[skills/memory/SKILL.md](../../../../sources/codeaholicguy__ai-devkit/skills/memory/SKILL.md)<br>[skills/memory/agents/openai.yaml](../../../../sources/codeaholicguy__ai-devkit/skills/memory/agents/openai.yaml)<br>[packages/pi-session-tracker/extensions/index.ts](../../../../sources/codeaholicguy__ai-devkit/packages/pi-session-tracker/extensions/index.ts) |
| spec | 128 | [web/content/roadmap/1-web.md](../../../../sources/codeaholicguy__ai-devkit/web/content/roadmap/1-web.md)<br>[web/content/roadmap/10-agent-management.md](../../../../sources/codeaholicguy__ai-devkit/web/content/roadmap/10-agent-management.md)<br>[web/content/roadmap/2-integrations.md](../../../../sources/codeaholicguy__ai-devkit/web/content/roadmap/2-integrations.md)<br>[web/content/roadmap/3-cli-enhancements.md](../../../../sources/codeaholicguy__ai-devkit/web/content/roadmap/3-cli-enhancements.md)<br>[web/content/roadmap/4-local-memory.md](../../../../sources/codeaholicguy__ai-devkit/web/content/roadmap/4-local-memory.md)<br>[web/content/roadmap/5-skill-management.md](../../../../sources/codeaholicguy__ai-devkit/web/content/roadmap/5-skill-management.md)<br>[web/content/roadmap/6-hooks.md](../../../../sources/codeaholicguy__ai-devkit/web/content/roadmap/6-hooks.md)<br>[web/content/roadmap/7-memory-management.md](../../../../sources/codeaholicguy__ai-devkit/web/content/roadmap/7-memory-management.md) |
| eval | 105 | [web/content/roadmap/8-memory-evaluation.md](../../../../sources/codeaholicguy__ai-devkit/web/content/roadmap/8-memory-evaluation.md)<br>[web/content/faq/ai-devkit-vs-spec-kit.md](../../../../sources/codeaholicguy__ai-devkit/web/content/faq/ai-devkit-vs-spec-kit.md)<br>[packages/memory-dashboard/tests/command.test.ts](../../../../sources/codeaholicguy__ai-devkit/packages/memory-dashboard/tests/command.test.ts)<br>[packages/memory-dashboard/tests/server.test.ts](../../../../sources/codeaholicguy__ai-devkit/packages/memory-dashboard/tests/server.test.ts)<br>[packages/memory-dashboard/tests/standalone.test.ts](../../../../sources/codeaholicguy__ai-devkit/packages/memory-dashboard/tests/standalone.test.ts)<br>[packages/memory/tests/unit/normalizer.test.ts](../../../../sources/codeaholicguy__ai-devkit/packages/memory/tests/unit/normalizer.test.ts)<br>[packages/memory/tests/unit/ranker.test.ts](../../../../sources/codeaholicguy__ai-devkit/packages/memory/tests/unit/ranker.test.ts)<br>[packages/memory/tests/unit/server.test.ts](../../../../sources/codeaholicguy__ai-devkit/packages/memory/tests/unit/server.test.ts) |
| security | 4 | [web/content/faq/codex-sandbox-npx-troubleshooting.md](../../../../sources/codeaholicguy__ai-devkit/web/content/faq/codex-sandbox-npx-troubleshooting.md)<br>[skills/security-review/SKILL.md](../../../../sources/codeaholicguy__ai-devkit/skills/security-review/SKILL.md)<br>[skills/security-review/references/checklist.md](../../../../sources/codeaholicguy__ai-devkit/skills/security-review/references/checklist.md)<br>[skills/security-review/agents/openai.yaml](../../../../sources/codeaholicguy__ai-devkit/skills/security-review/agents/openai.yaml) |
| ci | 8 | [.github/workflows/ci.yml](../../../../sources/codeaholicguy__ai-devkit/.github/workflows/ci.yml)<br>[.github/workflows/deploy-web.yml](../../../../sources/codeaholicguy__ai-devkit/.github/workflows/deploy-web.yml)<br>[.github/workflows/e2e.yml](../../../../sources/codeaholicguy__ai-devkit/.github/workflows/e2e.yml)<br>[.github/workflows/publish-agent-manager.yml](../../../../sources/codeaholicguy__ai-devkit/.github/workflows/publish-agent-manager.yml)<br>[.github/workflows/publish-channel-connector.yml](../../../../sources/codeaholicguy__ai-devkit/.github/workflows/publish-channel-connector.yml)<br>[.github/workflows/publish-cli.yml](../../../../sources/codeaholicguy__ai-devkit/.github/workflows/publish-cli.yml)<br>[.github/workflows/publish-memory.yml](../../../../sources/codeaholicguy__ai-devkit/.github/workflows/publish-memory.yml)<br>[.github/workflows/rebuild-skill-index.yml](../../../../sources/codeaholicguy__ai-devkit/.github/workflows/rebuild-skill-index.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 286 | [README-zh.md](../../../../sources/codeaholicguy__ai-devkit/README-zh.md)<br>[README.md](../../../../sources/codeaholicguy__ai-devkit/README.md)<br>[web/README.md](../../../../sources/codeaholicguy__ai-devkit/web/README.md)<br>[web/content/docs/0-what-is-ai-devkit.md](../../../../sources/codeaholicguy__ai-devkit/web/content/docs/0-what-is-ai-devkit.md)<br>[web/content/docs/1-getting-started.md](../../../../sources/codeaholicguy__ai-devkit/web/content/docs/1-getting-started.md)<br>[web/content/docs/10-dev-lifecycle-skill.md](../../../../sources/codeaholicguy__ai-devkit/web/content/docs/10-dev-lifecycle-skill.md)<br>[web/content/docs/11-configuration-file.md](../../../../sources/codeaholicguy__ai-devkit/web/content/docs/11-configuration-file.md)<br>[web/content/docs/12-channel.md](../../../../sources/codeaholicguy__ai-devkit/web/content/docs/12-channel.md) |
| config | 17 | [nx.json](../../../../sources/codeaholicguy__ai-devkit/nx.json)<br>[package.json](../../../../sources/codeaholicguy__ai-devkit/package.json)<br>[tsconfig.json](../../../../sources/codeaholicguy__ai-devkit/tsconfig.json)<br>[web/package.json](../../../../sources/codeaholicguy__ai-devkit/web/package.json)<br>[web/tsconfig.json](../../../../sources/codeaholicguy__ai-devkit/web/tsconfig.json)<br>[packages/pi-session-tracker/package.json](../../../../sources/codeaholicguy__ai-devkit/packages/pi-session-tracker/package.json)<br>[packages/memory-dashboard/package.json](../../../../sources/codeaholicguy__ai-devkit/packages/memory-dashboard/package.json)<br>[packages/memory-dashboard/tsconfig.json](../../../../sources/codeaholicguy__ai-devkit/packages/memory-dashboard/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 105 | [web/content/roadmap/8-memory-evaluation.md](../../../../sources/codeaholicguy__ai-devkit/web/content/roadmap/8-memory-evaluation.md)<br>[web/content/faq/ai-devkit-vs-spec-kit.md](../../../../sources/codeaholicguy__ai-devkit/web/content/faq/ai-devkit-vs-spec-kit.md)<br>[packages/memory-dashboard/tests/command.test.ts](../../../../sources/codeaholicguy__ai-devkit/packages/memory-dashboard/tests/command.test.ts)<br>[packages/memory-dashboard/tests/server.test.ts](../../../../sources/codeaholicguy__ai-devkit/packages/memory-dashboard/tests/server.test.ts)<br>[packages/memory-dashboard/tests/standalone.test.ts](../../../../sources/codeaholicguy__ai-devkit/packages/memory-dashboard/tests/standalone.test.ts)<br>[packages/memory/tests/unit/normalizer.test.ts](../../../../sources/codeaholicguy__ai-devkit/packages/memory/tests/unit/normalizer.test.ts) |
| CI workflows | 8 | [.github/workflows/ci.yml](../../../../sources/codeaholicguy__ai-devkit/.github/workflows/ci.yml)<br>[.github/workflows/deploy-web.yml](../../../../sources/codeaholicguy__ai-devkit/.github/workflows/deploy-web.yml)<br>[.github/workflows/e2e.yml](../../../../sources/codeaholicguy__ai-devkit/.github/workflows/e2e.yml)<br>[.github/workflows/publish-agent-manager.yml](../../../../sources/codeaholicguy__ai-devkit/.github/workflows/publish-agent-manager.yml)<br>[.github/workflows/publish-channel-connector.yml](../../../../sources/codeaholicguy__ai-devkit/.github/workflows/publish-channel-connector.yml)<br>[.github/workflows/publish-cli.yml](../../../../sources/codeaholicguy__ai-devkit/.github/workflows/publish-cli.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 4 | [web/content/faq/codex-sandbox-npx-troubleshooting.md](../../../../sources/codeaholicguy__ai-devkit/web/content/faq/codex-sandbox-npx-troubleshooting.md)<br>[skills/security-review/SKILL.md](../../../../sources/codeaholicguy__ai-devkit/skills/security-review/SKILL.md)<br>[skills/security-review/references/checklist.md](../../../../sources/codeaholicguy__ai-devkit/skills/security-review/references/checklist.md)<br>[skills/security-review/agents/openai.yaml](../../../../sources/codeaholicguy__ai-devkit/skills/security-review/agents/openai.yaml) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `packages/cli/src/services/install/mcp/BaseMcpGenerator.ts`, `packages/cli/src/services/install/mcp/ClaudeCodeMcpGenerator.ts`, `packages/cli/src/services/install/mcp/CodexMcpGenerator.ts`.
2. Trace execution through entrypoints: `packages/memory-dashboard/tests/server.test.ts`, `packages/memory-dashboard/src/index.ts`, `packages/memory-dashboard/src/server.ts`.
3. Map agent/tool runtime through: `agent-console-showcase.gif`, `web/public/agent-console.gif`, `web/app/skills/layout.tsx`.
4. Inspect retrieval/memory/indexing through: `web/content/roadmap/4-local-memory.md`, `web/content/roadmap/7-memory-management.md`, `web/content/roadmap/8-memory-evaluation.md`.
5. Verify behavior through test/eval files: `web/content/roadmap/8-memory-evaluation.md`, `web/content/faq/ai-devkit-vs-spec-kit.md`, `packages/memory-dashboard/tests/command.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Make AI coding agents follow a repeatable engineering workflow with planning, memory, verification, skills, and review. . 핵심 구조 신호는 TypeScript, package.json, README.md, ci, docs, spec-artifacts이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
