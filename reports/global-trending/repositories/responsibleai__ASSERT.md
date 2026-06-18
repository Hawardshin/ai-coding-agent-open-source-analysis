# responsibleai/ASSERT

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/responsibleai/ASSERT |
| local path | sources/responsibleai__ASSERT |
| HEAD | b819ce5 |
| stars/forks | 151 / 20 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T23:19:52Z |
| trendScore / priorityScore | 135 / 425 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | examples/agents/openclaw/README.md, examples/agents/README.md, examples/change_control_agent/README.md |
| Security / supply chain | 453 | examples/change_control_agent/README.md, examples/incident_triage_agent/README.md, examples/README.md |
| Observability / evaluation | 412 | examples/agents/openclaw/README.md, examples/change_control_agent/README.md, examples/incident_triage_agent/README.md |
| Data / ML platform | 120 | examples/agents/openclaw/README.md, examples/agents/README.md, examples/incident_triage_agent/README.md |
| Developer tools / DX | 111 | examples/incident_triage_agent/README.md, docs/agents/README.md, examples/README.md |
| Cloud native / infrastructure | 103 | examples/agents/openclaw/README.md, examples/agents/README.md, examples/change_control_agent/README.md |
| MCP / agent interoperability | 64 | docs/agents/README.md, examples/azure_doc_qa/README.md, examples/phoenix_auto_trace/README.md |
| RAG / retrieval / knowledge | 38 | examples/science_research_agent/README.md, examples/README.md, examples/azure_doc_qa/README.md |
| Frontend / app framework | 37 | examples/benchmark/tester_system_benign.md, examples/change_control_agent/tools.py, viewer/package.json |
| Database / data infrastructure | 21 | examples/change_control_agent/README.md, examples/agents/health_assistant.py, examples/azure_doc_qa/docs/internal/agent-service-architecture.md |
| Coding agent / software automation | 4 | examples/agents/README.md, AGENTS.md, CLAUDE.md |
| Local LLM / inference | 3 | examples/README.md, README.md, docs/getting-started.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 584 |
| manifests | 35 |
| docs | 140 |
| tests | 116 |
| ci/ops | 9 |
| spec artifacts | 7 |
| agent instruction files | 7 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Why ASSERT? / What you get with ASSERT / Get started / Quick install / Acknowledgments / Team and contributors / Trademarks / Telemetry / Disclaimer: Risks and limitations of ASSERT | <h1 align="center" <img src="https //raw.githubusercontent.com/responsibleai/ASSERT/main/assets/assert logo.png" alt="ASSERT logo" width="22" style="vertical align middle; margin right 5px;"/ <span style="vertical align middle; font family 'Spline Sans Mono', monospace;" ASSERT.</span </h1 <p align="center" Adaptive Spec driven Scoring for Evaluation and Regression Testing<br/ Local first. Framework agnostic. Trace aware. </p <p align="center" <a href="https //github.com/responsibleai/ASSERT/blob/main/docs/getting started.md" 🚀 Get started</a <a href="https //responsibleai.github.io/ASSERT/" 🌐 Visit project website</a <a href="https //github.com/responsibleai/ASSERT/blob/main/docs/targets/ |


## Key Files

### Manifests

- examples/agents/openclaw/README.md
- examples/agents/README.md
- examples/change_control_agent/README.md
- examples/incident_triage_agent/README.md
- examples/prompt_agents/README.md
- examples/science_research_agent/README.md
- docs/agents/README.md
- examples/README.md
- docs/README.md
- examples/acs_guardrails/README.md
- examples/azure_doc_qa/README.md
- examples/azure_managed_identity/README.md
- examples/behavior_specs/README.md
- examples/phoenix_auto_trace/README.md
- examples/travel_planner_langgraph/README.md
- examples/travel_planner_neurosan/README.md
- docs/targets/README.md
- assert_ai/internal_pipeline_prompts/README.md
- AGENTS.md
- README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- .github/copilot-instructions.md
- examples/incident_triage_agent/prompts/cross/pii_detection.md
- examples/incident_triage_agent/prompts/system_prompt.optimized.txt
- examples/incident_triage_agent/prompts/xpia_paraphrase.md
- viewer/src/routes/api/runs/[suite]/[run]/prompt/[seed]/+server.ts


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- .github/copilot-instructions.md
- examples/incident_triage_agent/prompts/cross/pii_detection.md
- examples/incident_triage_agent/prompts/system_prompt.optimized.txt
- examples/incident_triage_agent/prompts/xpia_paraphrase.md
- viewer/src/routes/api/runs/[suite]/[run]/prompt/[seed]/+server.ts


## Top Directories

| dir | count |
| --- | --- |
| examples | 161 |
| tests | 113 |
| assert_ai | 111 |
| viewer | 74 |
| website | 56 |
| docs | 21 |
| .github | 18 |
| scripts | 11 |
| .azure-pipelines | 1 |
| .cursorrules | 1 |
| .devcontainer | 1 |
| .env.example | 1 |
| .gitignore | 1 |
| AGENTS.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 201 |
| .md | 132 |
| .yaml | 78 |
| .ts | 48 |
| .tsx | 26 |
| .json | 25 |
| .svelte | 17 |
| .svg | 16 |
| .yml | 12 |
| [no-ext] | 9 |
| .example | 5 |
| .css | 2 |
| .html | 2 |
| .js | 2 |
| .mjs | 2 |
| .txt | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
