# promptfoo/promptfoo

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/promptfoo/promptfoo |
| local path | sources/promptfoo__promptfoo |
| HEAD | 30dc14b |
| stars/forks | 22326 / 1995 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T21:11:26Z |
| trendScore / priorityScore | 174 / 497 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Observability / evaluation | 500 | examples/amazon-bedrock/agents/README.md, examples/anthropic/mcp/README.md, examples/anthropic/memory-tool/README.md |
| AI agent / orchestration | 394 | examples/amazon-bedrock/agents/README.md, examples/azure/foundry-agent/README.md, examples/claude-agent-sdk/advanced-options/README.md |
| MCP / agent interoperability | 224 | examples/anthropic/mcp/README.md, examples/claude-agent-sdk/advanced-options/README.md, examples/claude-agent-sdk/README.md |
| Developer tools / DX | 153 | examples/amazon-bedrock/agents/README.md, examples/azure/foundry-agent/README.md, examples/claude-agent-sdk/advanced-options/README.md |
| Security / supply chain | 79 | examples/azure/foundry-agent/README.md, examples/claude-agent-sdk/advanced-options/README.md, examples/claude-agent-sdk/README.md |
| Coding agent / software automation | 53 | examples/claude-agent-sdk/advanced-options/README.md, examples/claude-agent-sdk/README.md, examples/claude-agent-sdk/skill-comparison/README.md |
| RAG / retrieval / knowledge | 50 | examples/eval-rag-full/README.md, examples/eval-rag/README.md, examples/n8n-agent/README.md |
| Cloud native / infrastructure | 20 | examples/openai-agents-basic/README.md, examples/provider-litellm/README.md, examples/redteam-coding-agent/README.md |
| Data / ML platform | 10 | examples/eval-f-score/README.md, examples/eval-image-classification/README.md, examples/compare-deepseek-r1-vs-openai-o1/README.md |
| Database / data infrastructure | 7 | examples/eval-rag-full/README.md, examples/redteam-mcp-agent/README.md, examples/redteam-medical-agent/README.md |
| Local LLM / inference | 7 | examples/compare-agentic-sdks/README.md, examples/redteam-cyberseceval/README.md, examples/compare-phi-vs-llama/README.md |
| Frontend / app framework | 5 | examples/redteam-mcp-agent/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python, Go, Ruby |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 4883 |
| manifests | 40 |
| docs | 875 |
| tests | 1363 |
| ci/ops | 28 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Promptfoo: LLM evals & red teaming | Promptfoo: LLM evals & red teaming / Quick Start / What can you do with Promptfoo? / Why Promptfoo? / Learn More / Contributing | Promptfoo LLM evals & red teaming <p align="center" <a href="https //npmjs.com/package/promptfoo" <img src="https //img.shields.io/npm/v/promptfoo" alt="npm" </a <a href="https //npmjs.com/package/promptfoo" <img src="https //img.shields.io/npm/dm/promptfoo" alt="npm" </a <a href="https //github.com/promptfoo/promptfoo/actions/workflows/main.yml" <img src="https //img.shields.io/github/actions/workflow/status/promptfoo/promptfoo/main.yml" alt="GitHub Workflow Status" </a <a href="https //github.com/promptfoo/promptfoo/blob/main/LICENSE" <img src="https //img.shields.io/github/license/promptfoo/promptfoo" alt="MIT license" </a <a href="https //discord.gg/promptfoo" <img src="https //img.shiel |


## Key Files

### Manifests

- examples/amazon-bedrock/agents/README.md
- examples/anthropic/mcp/README.md
- examples/anthropic/memory-tool/README.md
- examples/azure/foundry-agent/README.md
- examples/claude-agent-sdk/advanced-options/README.md
- examples/claude-agent-sdk/README.md
- examples/claude-agent-sdk/skill-comparison/README.md
- examples/compare-agentic-sdks/README.md
- examples/compare-agentic-sdks/test-codebase/README.md
- examples/config-custom-prompt-function/README.md
- examples/config-executable-prompts/README.md
- examples/config-prompt-labels/README.md
- examples/config-prompts-per-model/README.md
- examples/config-tests-per-prompt/README.md
- examples/eval-assertion-scoring-override/README.md
- examples/eval-assertions-generate/README.md
- examples/eval-bert-score/README.md
- examples/eval-context-relevance-grader-output/README.md
- examples/eval-conversation-relevance/README.md
- examples/eval-custom-grader-csv/README.md


### Spec / Docs / Prompt Artifacts

- examples/AGENTS.md
- docs/agents/AGENTS.md
- site/docs/red-team/AGENTS.md
- src/prompts/AGENTS.md
- examples/CLAUDE.md
- test/AGENTS.md
- .agents/AGENTS.md
- .github/AGENTS.md
- AGENTS.md
- code-scan-action/AGENTS.md
- drizzle/AGENTS.md
- plugins/AGENTS.md
- site/AGENTS.md
- test/agentSkills/AGENTS.md
- test/fixtures/agent-skills/AGENTS.md
- site/docs/red-team/CLAUDE.md
- src/app/AGENTS.md
- src/assertions/AGENTS.md
- src/codeScan/AGENTS.md
- src/commands/AGENTS.md


### Agent Instruction Files

- examples/AGENTS.md
- docs/agents/AGENTS.md
- site/docs/red-team/AGENTS.md
- src/prompts/AGENTS.md
- examples/CLAUDE.md
- test/AGENTS.md
- .agents/AGENTS.md
- .github/AGENTS.md
- AGENTS.md
- code-scan-action/AGENTS.md
- drizzle/AGENTS.md
- plugins/AGENTS.md
- site/AGENTS.md
- test/agentSkills/AGENTS.md
- test/fixtures/agent-skills/AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| src | 1649 |
| examples | 1223 |
| test | 1052 |
| site | 758 |
| drizzle | 50 |
| .github | 20 |
| plugins | 18 |
| scripts | 17 |
| docs | 15 |
| code-scan-action | 14 |
| helm | 11 |
| .claude | 5 |
| .agents | 4 |
| .devcontainer | 3 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 1950 |
| .md | 833 |
| .tsx | 631 |
| .yaml | 624 |
| .json | 164 |
| .js | 106 |
| .py | 103 |
| .svg | 89 |
| .txt | 85 |
| .css | 75 |
| [no-ext] | 38 |
| .mjs | 31 |
| .sql | 26 |
| .csv | 21 |
| .yml | 19 |
| .cjs | 14 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
