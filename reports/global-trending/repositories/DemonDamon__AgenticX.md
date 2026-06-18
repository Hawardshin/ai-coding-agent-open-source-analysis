# DemonDamon/AgenticX

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/DemonDamon/AgenticX |
| local path | sources/DemonDamon__AgenticX |
| HEAD | fb929d8 |
| stars/forks | 162 / 26 |
| language | Python |
| license |  |
| pushedAt | 2026-06-18T00:11:55Z |
| trendScore / priorityScore | 184 / 514 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | examples/agenticx-for-agentkit/README.md, examples/agenticx-for-docparser/README.md, examples/agenticx-for-intent-recognition/README.md |
| Cloud native / infrastructure | 380 | examples/agenticx-for-agentkit/README.md, examples/agenticx-for-sandbox/README.md, enterprise/docs/testing/README.md |
| MCP / agent interoperability | 279 | examples/agenticx-for-agentkit/README.md, examples/agenticx-for-docparser/README.md, enterprise/docs/testing/README.md |
| RAG / retrieval / knowledge | 210 | examples/agenticx-for-agentkit/README.md, enterprise/docs/features/README.md, agenticx/cli/templates/volcengine/knowledge/README.md |
| Database / data infrastructure | 175 | enterprise/docs/apps/README.md, enterprise/docs/deployment/README.md, enterprise/docs/packages/README.md |
| Security / supply chain | 147 | examples/simple_chat_agent/README.md, enterprise/docs/testing/README.md, docs/legal/README.md |
| Developer tools / DX | 129 | examples/agenticx-for-agentkit/README.md, examples/agenticx-for-sandbox/README.md, enterprise/docs/packages/README.md |
| Observability / evaluation | 117 | examples/agenticx-for-docparser/README.md, enterprise/docs/observability/README.md, enterprise/docs/packages/README.md |
| Frontend / app framework | 60 | enterprise/docs/api/README.md, enterprise/docs/apps/README.md, enterprise/docs/packages/README.md |
| Data / ML platform | 50 | agenticx/memory/README.md, agenticx/retrieval/README.md, AGENTS.md |
| Coding agent / software automation | 44 | agenticx/tools/README.md, AGENTS.md, desktop/README.md |
| Local LLM / inference | 22 | enterprise/docs/apps/README.md, enterprise/apps/edge-agent/README.md, AGENTS.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Go |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 3108 |
| manifests | 40 |
| docs | 519 |
| tests | 599 |
| ci/ops | 11 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | AgenticX: Unified Multi-Agent Framework | AgenticX: Unified Multi-Agent Framework / Security advisory / Vision / System Architecture / Core Features / Core Framework / Avatar & Team Collaboration / Knowledge & Retrieval / Skills & Self-Evolution / Long-Horizon Autonomous Coding | AgenticX Unified Multi Agent Framework <div align="center" <! <img src="assets/agenticx logo 2025.png" alt="AgenticX Logo" width="240" style="margin bottom 20px;" / <img src="assets/agenticx logo 2025.png" alt="AgenticX Logo" width="800" style="margin bottom 20px;" / <! ! Python https //img.shields.io/badge/Python 3.10+ blue.svg https //www.python.org/downloads/ ! License Apache 2.0 https //img.shields.io/badge/License Apache%202.0 blue.svg https //www.apache.org/licenses/LICENSE 2.0 ! PyPI version https //img.shields.io/pypi/v/agenticx https //pypi.org/project/agenticx/ ! PyPI Python Version https //img.shields.io/pypi/pyversions/agenticx https //pypi.org/project/agenticx/ ! Ask DeepWiki ht |


## Key Files

### Manifests

- examples/agenticx-for-agentkit/README.md
- examples/agenticx-for-deepresearch/README.md
- examples/agenticx-for-docparser/README.md
- examples/agenticx-for-graphrag/README.md
- examples/agenticx-for-guiagent/README.md
- examples/agenticx-for-intent-recognition/README.md
- examples/agenticx-for-intent-recognition/tests/README.md
- examples/agenticx-for-sandbox/README.md
- examples/simple_chat_agent/README.md
- enterprise/docs/testing/README.md
- docs/legal/README.md
- enterprise/docs/api/README.md
- enterprise/docs/apps/README.md
- enterprise/docs/deployment/README.md
- enterprise/docs/features/README.md
- enterprise/docs/observability/README.md
- enterprise/docs/packages/README.md
- enterprise/docs/perf-baselines/README.md
- enterprise/docs/plugin-protocol/README.md
- enterprise/docs/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- docs/api/agents.md
- examples/agenticx-for-agentkit/hi-agent/requirements.txt
- examples/agenticx-for-docparser/requirements.txt
- examples/agenticx-for-intent-recognition/requirements.txt
- agenticx/cli/templates/volcengine/a2a/requirements.txt
- agenticx/cli/templates/volcengine/basic_stream/requirements.txt
- agenticx/cli/templates/volcengine/basic/requirements.txt
- agenticx/cli/templates/volcengine/knowledge/requirements.txt
- agenticx/cli/templates/volcengine/mcp/requirements.txt
- requirements.txt
- .cursor/plans/2025-03-26-mcp-desktop-settings-paths-autoconnect.plan.md
- .cursor/plans/2025-03-26-subagent-session-isolation.plan.md
- .cursor/plans/2026-03-08-agenticx-studio-desktop.plan.md
- .cursor/plans/2026-03-23-memory-pipeline-fix.plan.md
- .cursor/plans/2026-03-23-memory-ux-p0.plan.md
- .cursor/plans/2026-03-26-default-browser-use-mcp.plan.md
- .cursor/plans/2026-03-26-subagent-anti-futility-guardrails.plan.md
- .cursor/plans/2026-03-27-mcp-call-error-surface.plan.md
- .cursor/plans/2026-03-29-hermes-agent-codegen.plan.md


### Agent Instruction Files

- AGENTS.md
- docs/api/agents.md
- .cursor/plans/2025-03-26-mcp-desktop-settings-paths-autoconnect.plan.md
- .cursor/plans/2025-03-26-subagent-session-isolation.plan.md
- .cursor/plans/2026-03-08-agenticx-studio-desktop.plan.md
- .cursor/plans/2026-03-23-memory-pipeline-fix.plan.md
- .cursor/plans/2026-03-23-memory-ux-p0.plan.md
- .cursor/plans/2026-03-26-default-browser-use-mcp.plan.md
- .cursor/plans/2026-03-26-subagent-anti-futility-guardrails.plan.md
- .cursor/plans/2026-03-27-mcp-call-error-surface.plan.md
- .cursor/plans/2026-03-29-hermes-agent-codegen.plan.md
- .cursor/plans/2026-03-29-pane-drag-reorder.plan.md
- .cursor/plans/2026-04-06-firecrawl-local-mcp-integration_04ab67c9.plan.md
- .cursor/plans/2026-04-16-agent-heartbeat-recovery.plan.md
- .cursor/plans/2026-04-20-mcp-discovery-marketplace.plan.md


## Top Directories

| dir | count |
| --- | --- |
| enterprise | 949 |
| agenticx | 872 |
| tests | 407 |
| desktop | 339 |
| .cursor | 283 |
| examples | 137 |
| docs | 69 |
| packaging | 14 |
| deploy | 12 |
| .githooks | 6 |
| scripts | 4 |
| .github | 3 |
| .gitignore | 1 |
| .gitmodules | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 1334 |
| .ts | 526 |
| .md | 514 |
| .tsx | 227 |
| .go | 205 |
| .json | 80 |
| .yaml | 34 |
| .sql | 28 |
| [no-ext] | 27 |
| .sh | 26 |
| .txt | 19 |
| .yml | 14 |
| .css | 13 |
| .js | 9 |
| .mjs | 9 |
| .svg | 7 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
