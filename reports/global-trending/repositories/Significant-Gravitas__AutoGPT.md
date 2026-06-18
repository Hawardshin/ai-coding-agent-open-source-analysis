# Significant-Gravitas/AutoGPT

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Significant-Gravitas/AutoGPT |
| local path | sources/Significant-Gravitas__AutoGPT |
| HEAD | ba178a7 |
| stars/forks | 185001 / 46134 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2026-06-17T23:56:04Z |
| trendScore / priorityScore | 170 / 531 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | docs/home/README.md, docs/integrations/README.md, classic/direct_benchmark/README.md |
| Frontend / app framework | 385 | autogpt_platform/frontend/README.md, AGENTS.md, autogpt_platform/AGENTS.md |
| MCP / agent interoperability | 269 | docs/integrations/README.md, docs/CLAUDE.md, autogpt_platform/AGENTS.md |
| Cloud native / infrastructure | 212 | docs/integrations/README.md, autogpt_platform/frontend/README.md, AGENTS.md |
| Database / data infrastructure | 199 | docs/integrations/README.md, autogpt_platform/frontend/README.md, AGENTS.md |
| Developer tools / DX | 198 | docs/home/README.md, docs/integrations/README.md, autogpt_platform/frontend/README.md |
| Observability / evaluation | 158 | docs/integrations/README.md, autogpt_platform/frontend/README.md, classic/direct_benchmark/README.md |
| Security / supply chain | 127 | docs/integrations/README.md, autogpt_platform/AGENTS.md, autogpt_platform/backend/AGENTS.md |
| RAG / retrieval / knowledge | 124 | docs/integrations/README.md, autogpt_platform/backend/backend/copilot/graphiti/AGENTS.md, autogpt_platform/backend/backend/api/features/search/README.md |
| Local LLM / inference | 71 | autogpt_platform/backend/pyproject.toml, docs/integrations/block-integrations/llm.md, docs/platform/copilot-local-llm.md |
| Coding agent / software automation | 46 | docs/integrations/README.md, AGENTS.md, autogpt_platform/AGENTS.md |
| Data / ML platform | 21 | docs/integrations/README.md, autogpt_platform/backend/AGENTS.md, autogpt_platform/backend/load-tests/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 3985 |
| manifests | 40 |
| docs | 349 |
| tests | 650 |
| ci/ops | 48 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | AutoGPT: Build, Deploy, and Run AI Agents | AutoGPT: Build, Deploy, and Run AI Agents / Hosting Options / How to Self-Host the AutoGPT Platform / System Requirements / Updated Setup Instructions: / 🧱 AutoGPT Frontend / 💽 AutoGPT Server / 🐙 Example Agents / **License Overview:** / Mission | AutoGPT Build, Deploy, and Run AI Agents ! Discord Follow https //img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fdiscord.com%2Fapi%2Finvites%2Fautogpt%3Fwith counts%3Dtrue&query=%24.approximate member count&label=total%20members&logo=discord&logoColor=white&color=7289da https //discord.gg/autogpt &ensp; ! Twitter Follow https //img.shields.io/twitter/follow/Auto GPT?style=social https //twitter.com/Auto GPT &ensp; <! Keep these links. Translations will automatically update with the README. Deutsch https //zdoc.app/de/Significant Gravitas/AutoGPT Español https //zdoc.app/es/Significant Gravitas/AutoGPT français https //zdoc.app/fr/Significant Gravitas/AutoGPT 日本語 https //zdoc.app/ja/Sign |


## Key Files

### Manifests

- docs/AGENTS.md
- docs/home/README.md
- docs/integrations/README.md
- autogpt_platform/frontend/README.md
- classic/direct_benchmark/challenges/library/README.md
- classic/direct_benchmark/challenges/README.md
- classic/direct_benchmark/README.md
- classic/forge/forge/llm/providers/llamafile/README.md
- classic/original_autogpt/autogpt/agents/README.md
- docs/CLAUDE.md
- AGENTS.md
- autogpt_platform/AGENTS.md
- autogpt_platform/frontend/src/tests/AGENTS.md
- autogpt_platform/frontend/src/tests/CLAUDE.md
- .claude/skills/vercel-react-best-practices/AGENTS.md
- autogpt_platform/backend/AGENTS.md
- autogpt_platform/backend/backend/copilot/bot/AGENTS.md
- autogpt_platform/backend/backend/copilot/graphiti/AGENTS.md
- autogpt_platform/frontend/AGENTS.md
- autogpt_platform/frontend/CLAUDE.md


### Spec / Docs / Prompt Artifacts

- docs/AGENTS.md
- docs/CLAUDE.md
- AGENTS.md
- autogpt_platform/AGENTS.md
- autogpt_platform/frontend/src/tests/AGENTS.md
- autogpt_platform/frontend/src/tests/CLAUDE.md
- .claude/skills/vercel-react-best-practices/AGENTS.md
- autogpt_platform/backend/AGENTS.md
- autogpt_platform/backend/backend/copilot/bot/AGENTS.md
- autogpt_platform/backend/backend/copilot/graphiti/AGENTS.md
- autogpt_platform/frontend/AGENTS.md
- autogpt_platform/frontend/CLAUDE.md
- classic/direct_benchmark/CLAUDE.md
- autogpt_platform/CLAUDE.md
- classic/CLAUDE.md
- CLAUDE.md
- autogpt_platform/backend/backend/copilot/bot/CLAUDE.md
- autogpt_platform/backend/backend/copilot/graphiti/CLAUDE.md
- autogpt_platform/backend/CLAUDE.md
- classic/forge/CLAUDE.md


### Agent Instruction Files

- docs/AGENTS.md
- docs/CLAUDE.md
- AGENTS.md
- autogpt_platform/AGENTS.md
- autogpt_platform/frontend/src/tests/AGENTS.md
- autogpt_platform/frontend/src/tests/CLAUDE.md
- .claude/skills/vercel-react-best-practices/AGENTS.md
- autogpt_platform/backend/AGENTS.md
- autogpt_platform/backend/backend/copilot/bot/AGENTS.md
- autogpt_platform/backend/backend/copilot/graphiti/AGENTS.md
- autogpt_platform/frontend/AGENTS.md
- autogpt_platform/frontend/CLAUDE.md
- classic/direct_benchmark/CLAUDE.md
- autogpt_platform/CLAUDE.md
- classic/CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| autogpt_platform | 3245 |
| classic | 377 |
| docs | 233 |
| .claude | 67 |
| .github | 43 |
| .branchlet.json | 1 |
| .deepsource.toml | 1 |
| .dockerignore | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .gitleaks.toml | 1 |
| .nvmrc | 1 |
| .pr_agent.toml | 1 |
| .pre-commit-config.yaml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 1351 |
| .tsx | 1112 |
| .ts | 655 |
| .md | 349 |
| .sql | 178 |
| [no-ext] | 91 |
| .json | 67 |
| .yml | 43 |
| .txt | 22 |
| .js | 16 |
| .sh | 15 |
| .csv | 12 |
| .css | 11 |
| .jinja2 | 9 |
| .svg | 9 |
| .toml | 7 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
