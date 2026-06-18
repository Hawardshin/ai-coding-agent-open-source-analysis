# jnMetaCode/agency-orchestrator Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

🚀 One sentence → multi-AI-role collaboration → complete plan in minutes. Built on the agency-agents role library (216+ experts), zero-code YAML, web Studio + desktop app, 10 LLM providers (7 free). 基于 agency-agents 专家库，一句话调度多个 AI 专家自动协作，几分钟交付完整方案。

## 요약

- 조사 단위: `sources/jnMetaCode__agency-orchestrator` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 920 files, 151 directories, depth score 125, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=website/public/prompts/zh/specialized/specialized-mcp-builder.md, website/public/prompts/en/specialized/specialized-mcp-builder.md, test/mcp.ts이고, 의존성 단서는 anthropic, modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | jnMetaCode/agency-orchestrator |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/jnMetaCode__agency-orchestrator](../../../../sources/jnMetaCode__agency-orchestrator) |
| Existing report | [reports/korea-trending/repositories/jnMetaCode__agency-orchestrator.md](../../../korea-trending/repositories/jnMetaCode__agency-orchestrator.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 920 / 151 |
| Max observed depth | 7 |
| Top directories | .github, agency-agents, desktop, docs, eval, examples, integrations, scripts, src, test, web, website, workflows |
| Top extensions | .md: 674, .ts: 85, .yaml: 56, .tsx: 51, .json: 11, .sh: 8, .png: 7, (none): 7, .yml: 6, .html: 3, .gif: 2, .js: 2 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 8 |
| src | source boundary | 8 |
| web | source boundary | 5 |
| .github | ci surface | 1 |
| agency-agents | top-level component | 1 |
| desktop | top-level component | 1 |
| eval | top-level component | 1 |
| examples | top-level component | 1 |
| examples/sample-prd.md | examples workspace | 1 |
| integrations | top-level component | 1 |
| scripts | top-level component | 1 |
| test | validation surface | 1 |
| website | documentation surface | 1 |
| workflows | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | tsc |
| serve-dev | package.json | dev | tsc --watch |
| utility | package.json | eval | npx tsx eval/run-eval.ts |
| utility | package.json | eval:gate | npx tsx eval/run-eval.ts --gate |
| utility | package.json | eval:baseline | npx tsx eval/run-eval.ts --save-baseline |
| build | package.json | build:studio | npm --prefix website install && npm --prefix website run build |
| test | package.json | test | npx tsx test/run.ts && npx tsx test/condition.ts && npx tsx test/cli.ts && npx tsx test/cli-base.ts && npx tsx test/compose.ts && npx tsx test/demo.ts && npx tsx test/factory-custom.ts && npx tsx test/azure-compat.ts && |
| build | package.json | prepublishOnly | npm run build && npm run build:studio |
| entrypoint | package.json bin | cli.js | dist/cli.js |
| entrypoint | package.json bin | cli.js | dist/cli.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | anthropic |
| agentProtocols | modelcontextprotocol |
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
| mcp | [website/public/prompts/zh/specialized/specialized-mcp-builder.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/specialized/specialized-mcp-builder.md) | mcp signal |
| mcp | [website/public/prompts/en/specialized/specialized-mcp-builder.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/en/specialized/specialized-mcp-builder.md) | mcp signal |
| mcp | [test/mcp.ts](../../../../sources/jnMetaCode__agency-orchestrator/test/mcp.ts) | mcp signal |
| mcp | [src/mcp/server.ts](../../../../sources/jnMetaCode__agency-orchestrator/src/mcp/server.ts) | mcp signal |
| agentRuntime | [website/public/prompts/zh/specialized/agents-orchestrator.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/specialized/agents-orchestrator.md) | agentRuntime signal |
| agentRuntime | [website/public/prompts/en/specialized/agents-orchestrator.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/en/specialized/agents-orchestrator.md) | agentRuntime signal |
| agentRuntime | [src/core/executor.ts](../../../../sources/jnMetaCode__agency-orchestrator/src/core/executor.ts) | agentRuntime signal |
| agentRuntime | [src/agents/loader.ts](../../../../sources/jnMetaCode__agency-orchestrator/src/agents/loader.ts) | agentRuntime signal |
| entrypoints | [website/src/App.tsx](../../../../sources/jnMetaCode__agency-orchestrator/website/src/App.tsx) | entrypoints signal |
| entrypoints | [website/src/index.css](../../../../sources/jnMetaCode__agency-orchestrator/website/src/index.css) | entrypoints signal |
| entrypoints | [website/src/main.tsx](../../../../sources/jnMetaCode__agency-orchestrator/website/src/main.tsx) | entrypoints signal |
| entrypoints | [web/server.js](../../../../sources/jnMetaCode__agency-orchestrator/web/server.js) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 7 | [website/src/App.tsx](../../../../sources/jnMetaCode__agency-orchestrator/website/src/App.tsx)<br>[website/src/index.css](../../../../sources/jnMetaCode__agency-orchestrator/website/src/index.css)<br>[website/src/main.tsx](../../../../sources/jnMetaCode__agency-orchestrator/website/src/main.tsx)<br>[web/server.js](../../../../sources/jnMetaCode__agency-orchestrator/web/server.js)<br>[src/cli.ts](../../../../sources/jnMetaCode__agency-orchestrator/src/cli.ts)<br>[src/index.ts](../../../../sources/jnMetaCode__agency-orchestrator/src/index.ts)<br>[src/mcp/server.ts](../../../../sources/jnMetaCode__agency-orchestrator/src/mcp/server.ts) |
| agentRuntime | 14 | [website/public/prompts/zh/specialized/agents-orchestrator.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/specialized/agents-orchestrator.md)<br>[website/public/prompts/en/specialized/agents-orchestrator.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/en/specialized/agents-orchestrator.md)<br>[src/core/executor.ts](../../../../sources/jnMetaCode__agency-orchestrator/src/core/executor.ts)<br>[src/agents/loader.ts](../../../../sources/jnMetaCode__agency-orchestrator/src/agents/loader.ts)<br>[integrations/deerflow/SKILL.md](../../../../sources/jnMetaCode__agency-orchestrator/integrations/deerflow/SKILL.md)<br>[integrations/cursor/workflow-runner.mdc](../../../../sources/jnMetaCode__agency-orchestrator/integrations/cursor/workflow-runner.mdc)<br>[integrations/antigravity/AGENTS.md](../../../../sources/jnMetaCode__agency-orchestrator/integrations/antigravity/AGENTS.md)<br>[agency-agents/strategy/coordination/agent-activation-prompts.md](../../../../sources/jnMetaCode__agency-orchestrator/agency-agents/strategy/coordination/agent-activation-prompts.md) |
| mcp | 10 | [website/public/prompts/zh/specialized/specialized-mcp-builder.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/specialized/specialized-mcp-builder.md)<br>[website/public/prompts/en/specialized/specialized-mcp-builder.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/en/specialized/specialized-mcp-builder.md)<br>[test/mcp.ts](../../../../sources/jnMetaCode__agency-orchestrator/test/mcp.ts)<br>[src/mcp/server.ts](../../../../sources/jnMetaCode__agency-orchestrator/src/mcp/server.ts)<br>[docs/superpowers/specs/2026-03-26-mcp-server-design.md](../../../../sources/jnMetaCode__agency-orchestrator/docs/superpowers/specs/2026-03-26-mcp-server-design.md)<br>[docs/superpowers/plans/2026-03-26-mcp-server.md](../../../../sources/jnMetaCode__agency-orchestrator/docs/superpowers/plans/2026-03-26-mcp-server.md)<br>[agency-agents/specialized/specialized-mcp-builder.md](../../../../sources/jnMetaCode__agency-orchestrator/agency-agents/specialized/specialized-mcp-builder.md)<br>[agency-agents/integrations/mcp-memory/backend-architect-with-memory.md](../../../../sources/jnMetaCode__agency-orchestrator/agency-agents/integrations/mcp-memory/backend-architect-with-memory.md) |
| retrieval | 18 | [website/index.html](../../../../sources/jnMetaCode__agency-orchestrator/website/index.html)<br>[website/src/index.css](../../../../sources/jnMetaCode__agency-orchestrator/website/src/index.css)<br>[website/public/prompts/zh/specialized/identity-graph-operator.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/specialized/identity-graph-operator.md)<br>[website/public/prompts/zh/specialized/lsp-index-engineer.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/specialized/lsp-index-engineer.md)<br>[website/public/prompts/zh/marketing/marketing-knowledge-commerce-strategist.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/marketing/marketing-knowledge-commerce-strategist.md)<br>[website/public/prompts/zh/game-development/unity/unity-shader-graph-artist.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/game-development/unity/unity-shader-graph-artist.md)<br>[website/public/prompts/en/specialized/identity-graph-operator.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/en/specialized/identity-graph-operator.md)<br>[website/public/prompts/en/specialized/lsp-index-engineer.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/en/specialized/lsp-index-engineer.md) |
| spec | 38 | [workflows/en/code-architecture-review.yaml](../../../../sources/jnMetaCode__agency-orchestrator/workflows/en/code-architecture-review.yaml)<br>[workflows/dev/tech-design-review.yaml](../../../../sources/jnMetaCode__agency-orchestrator/workflows/dev/tech-design-review.yaml)<br>[workflows/design/requirement-to-plan.yaml](../../../../sources/jnMetaCode__agency-orchestrator/workflows/design/requirement-to-plan.yaml)<br>[workflows/design/ux-review.yaml](../../../../sources/jnMetaCode__agency-orchestrator/workflows/design/ux-review.yaml)<br>[workflows/data/dashboard-design.yaml](../../../../sources/jnMetaCode__agency-orchestrator/workflows/data/dashboard-design.yaml)<br>[website/public/prompts/zh/engineering/engineering-fpga-digital-design-engineer.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/engineering/engineering-fpga-digital-design-engineer.md)<br>[website/public/prompts/zh/engineering/engineering-mechanical-design-engineer.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/engineering/engineering-mechanical-design-engineer.md)<br>[website/public/prompts/zh/design/design-brand-guardian.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/design/design-brand-guardian.md) |
| eval | 39 | [EVAL_FINDINGS.md](../../../../sources/jnMetaCode__agency-orchestrator/EVAL_FINDINGS.md)<br>[website/public/prompts/zh/testing/testing-test-results-analyzer.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/testing/testing-test-results-analyzer.md)<br>[website/public/prompts/en/testing/testing-test-results-analyzer.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/en/testing/testing-test-results-analyzer.md)<br>[web/DESIGN-SPEC.md](../../../../sources/jnMetaCode__agency-orchestrator/web/DESIGN-SPEC.md)<br>[test/azure-compat.ts](../../../../sources/jnMetaCode__agency-orchestrator/test/azure-compat.ts)<br>[test/cli-base.ts](../../../../sources/jnMetaCode__agency-orchestrator/test/cli-base.ts)<br>[test/cli.ts](../../../../sources/jnMetaCode__agency-orchestrator/test/cli.ts)<br>[test/compose-name.ts](../../../../sources/jnMetaCode__agency-orchestrator/test/compose-name.ts) |
| security | 20 | [workflows/dev/security-audit.yaml](../../../../sources/jnMetaCode__agency-orchestrator/workflows/dev/security-audit.yaml)<br>[workflows/dev/tech-debt-audit.yaml](../../../../sources/jnMetaCode__agency-orchestrator/workflows/dev/tech-debt-audit.yaml)<br>[website/public/prompts/zh/support/support-legal-compliance-checker.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/support/support-legal-compliance-checker.md)<br>[website/public/prompts/zh/specialized/blockchain-security-auditor.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/specialized/blockchain-security-auditor.md)<br>[website/public/prompts/zh/specialized/compliance-auditor.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/specialized/compliance-auditor.md)<br>[website/public/prompts/zh/specialized/healthcare-marketing-compliance.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/specialized/healthcare-marketing-compliance.md)<br>[website/public/prompts/zh/specialized/specialized-ai-policy-writer.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/specialized/specialized-ai-policy-writer.md)<br>[website/public/prompts/zh/legal/legal-policy-writer.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/legal/legal-policy-writer.md) |
| ci | 3 | [agency-agents/.github/workflows/lint-agents.yml](../../../../sources/jnMetaCode__agency-orchestrator/agency-agents/.github/workflows/lint-agents.yml)<br>[.github/workflows/ci.yml](../../../../sources/jnMetaCode__agency-orchestrator/.github/workflows/ci.yml)<br>[.github/workflows/release-desktop.yml](../../../../sources/jnMetaCode__agency-orchestrator/.github/workflows/release-desktop.yml) |
| container | 0 | not obvious |
| instruction | 4 | [CLAUDE.md](../../../../sources/jnMetaCode__agency-orchestrator/CLAUDE.md)<br>[integrations/gemini-cli/GEMINI.md](../../../../sources/jnMetaCode__agency-orchestrator/integrations/gemini-cli/GEMINI.md)<br>[integrations/copilot/copilot-instructions.md](../../../../sources/jnMetaCode__agency-orchestrator/integrations/copilot/copilot-instructions.md)<br>[integrations/antigravity/AGENTS.md](../../../../sources/jnMetaCode__agency-orchestrator/integrations/antigravity/AGENTS.md) |
| docs | 529 | [README.en.md](../../../../sources/jnMetaCode__agency-orchestrator/README.en.md)<br>[README.md](../../../../sources/jnMetaCode__agency-orchestrator/README.md)<br>[workflows/dev/readme-i18n.yaml](../../../../sources/jnMetaCode__agency-orchestrator/workflows/dev/readme-i18n.yaml)<br>[website/index.html](../../../../sources/jnMetaCode__agency-orchestrator/website/index.html)<br>[website/package-lock.json](../../../../sources/jnMetaCode__agency-orchestrator/website/package-lock.json)<br>[website/package.json](../../../../sources/jnMetaCode__agency-orchestrator/website/package.json)<br>[website/postcss.config.js](../../../../sources/jnMetaCode__agency-orchestrator/website/postcss.config.js)<br>[website/README.md](../../../../sources/jnMetaCode__agency-orchestrator/website/README.md) |
| config | 5 | [package.json](../../../../sources/jnMetaCode__agency-orchestrator/package.json)<br>[tsconfig.json](../../../../sources/jnMetaCode__agency-orchestrator/tsconfig.json)<br>[website/package.json](../../../../sources/jnMetaCode__agency-orchestrator/website/package.json)<br>[website/tsconfig.json](../../../../sources/jnMetaCode__agency-orchestrator/website/tsconfig.json)<br>[desktop/package.json](../../../../sources/jnMetaCode__agency-orchestrator/desktop/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 39 | [EVAL_FINDINGS.md](../../../../sources/jnMetaCode__agency-orchestrator/EVAL_FINDINGS.md)<br>[website/public/prompts/zh/testing/testing-test-results-analyzer.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/testing/testing-test-results-analyzer.md)<br>[website/public/prompts/en/testing/testing-test-results-analyzer.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/en/testing/testing-test-results-analyzer.md)<br>[web/DESIGN-SPEC.md](../../../../sources/jnMetaCode__agency-orchestrator/web/DESIGN-SPEC.md)<br>[test/azure-compat.ts](../../../../sources/jnMetaCode__agency-orchestrator/test/azure-compat.ts)<br>[test/cli-base.ts](../../../../sources/jnMetaCode__agency-orchestrator/test/cli-base.ts) |
| CI workflows | 3 | [agency-agents/.github/workflows/lint-agents.yml](../../../../sources/jnMetaCode__agency-orchestrator/agency-agents/.github/workflows/lint-agents.yml)<br>[.github/workflows/ci.yml](../../../../sources/jnMetaCode__agency-orchestrator/.github/workflows/ci.yml)<br>[.github/workflows/release-desktop.yml](../../../../sources/jnMetaCode__agency-orchestrator/.github/workflows/release-desktop.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 20 | [workflows/dev/security-audit.yaml](../../../../sources/jnMetaCode__agency-orchestrator/workflows/dev/security-audit.yaml)<br>[workflows/dev/tech-debt-audit.yaml](../../../../sources/jnMetaCode__agency-orchestrator/workflows/dev/tech-debt-audit.yaml)<br>[website/public/prompts/zh/support/support-legal-compliance-checker.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/support/support-legal-compliance-checker.md)<br>[website/public/prompts/zh/specialized/blockchain-security-auditor.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/specialized/blockchain-security-auditor.md)<br>[website/public/prompts/zh/specialized/compliance-auditor.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/specialized/compliance-auditor.md)<br>[website/public/prompts/zh/specialized/healthcare-marketing-compliance.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/specialized/healthcare-marketing-compliance.md) |
| Agent instructions | 4 | [CLAUDE.md](../../../../sources/jnMetaCode__agency-orchestrator/CLAUDE.md)<br>[integrations/gemini-cli/GEMINI.md](../../../../sources/jnMetaCode__agency-orchestrator/integrations/gemini-cli/GEMINI.md)<br>[integrations/copilot/copilot-instructions.md](../../../../sources/jnMetaCode__agency-orchestrator/integrations/copilot/copilot-instructions.md)<br>[integrations/antigravity/AGENTS.md](../../../../sources/jnMetaCode__agency-orchestrator/integrations/antigravity/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `website/public/prompts/zh/specialized/specialized-mcp-builder.md`, `website/public/prompts/en/specialized/specialized-mcp-builder.md`, `test/mcp.ts`.
2. Trace execution through entrypoints: `website/src/App.tsx`, `website/src/index.css`, `website/src/main.tsx`.
3. Map agent/tool runtime through: `website/public/prompts/zh/specialized/agents-orchestrator.md`, `website/public/prompts/en/specialized/agents-orchestrator.md`, `src/core/executor.ts`.
4. Inspect retrieval/memory/indexing through: `website/index.html`, `website/src/index.css`, `website/public/prompts/zh/specialized/identity-graph-operator.md`.
5. Verify behavior through test/eval files: `EVAL_FINDINGS.md`, `website/public/prompts/zh/testing/testing-test-results-analyzer.md`, `website/public/prompts/en/testing/testing-test-results-analyzer.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 🚀 One sentence → multi AI role collaboration → complete plan in minutes. Built on the agency agents role library 216+ e. 핵심 구조 신호는 TypeScript, package.json, README.md, CLAUDE.md, LICENSE, anthropic이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
