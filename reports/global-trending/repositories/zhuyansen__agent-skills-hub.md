# zhuyansen/agent-skills-hub

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/zhuyansen/agent-skills-hub |
| local path | sources/zhuyansen__agent-skills-hub |
| HEAD | b05615f |
| stars/forks | 296 / 30 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-18T00:20:56Z |
| trendScore / priorityScore | 149 / 470 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | README.md, CLAUDE.md, frontend/vite.config.ts |
| MCP / agent interoperability | 477 | README.md, docs/skillspector-integration-spec.md, docs/optimization-guide.md |
| Frontend / app framework | 337 | frontend/README.md, README.md, CLAUDE.md |
| Security / supply chain | 295 | README.md, CLAUDE.md, docs/optimization-guide.md |
| Coding agent / software automation | 253 | README.md, CLAUDE.md, docs/optimization-guide.md |
| Database / data infrastructure | 114 | README.md, CLAUDE.md, docs/optimization-guide.md |
| Developer tools / DX | 102 | README.md, CLAUDE.md, docs/skillspector-integration-spec.md |
| RAG / retrieval / knowledge | 60 | frontend/content/book/ch01-mahesh-to-barry.md, frontend/content/book/ch02-three-layer-loading.md, frontend/content/book/ch06-types-and-tiers.md |
| Observability / evaluation | 58 | README.md, .agents/product-marketing-context.md, backend/app/services/llm_security_analyzer.py |
| Cloud native / infrastructure | 50 | frontend/vite.config.ts, docs/optimization-guide.md, backend/app/services/llm_security_analyzer.py |
| Data / ML platform | 38 | README.md, .agents/product-marketing-context.md, frontend/index.html |
| Local LLM / inference | 25 | frontend/content/book/ch03-market-landscape.md, frontend/scripts/comparison-pairs.json, frontend/scripts/scenario-keywords.json |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 288 |
| manifests | 10 |
| docs | 29 |
| tests | 3 |
| ci/ops | 5 |
| spec artifacts | 10 |
| agent instruction files | 9 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | AgentSkillsHub — the Claude Skills / MCP Server / Agent Tools directory | AgentSkillsHub — the Claude Skills / MCP Server / Agent Tools directory / What is AgentSkillsHub? / Architecture / Data Pipeline / 1. Collection (`scheduler/jobs.py`) / 2. Cleaning (`services/data_cleaner.py`) / 3. Evaluation / 4. Presentation / Quick Start / Backend | AgentSkillsHub — the Claude Skills / MCP Server / Agent Tools directory AgentSkillsHub Agent Skills Hub is the open source directory for Claude Skills, MCP Servers, Codex Skills, and AI agent tools. 62,000+ projects · quality scored on 10 dimensions · refreshed every 8 hours. 🌐 Live agentskillshub.top https //agentskillshub.top · 📰 Newsletter https //agentskillshub.top/ newsletter · 𝕏 Follow https //x.com/GoSailGlobal What is AgentSkillsHub? AgentSkillsHub — also referred to as Agent Skills Hub , the Claude Skills Hub , or the Claude Skills Marketplace / Library — is a continuously updated directory that collects every meaningful open source AI agent skill, MCP server, Codex skill, AI cod |


## Key Files

### Manifests

- frontend/README.md
- README.md
- CLAUDE.md
- frontend/package.json
- frontend/tsconfig.json
- frontend/vite.config.ts
- backend/Dockerfile
- backend/requirements.txt
- frontend/tsconfig.app.json
- frontend/tsconfig.node.json


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- backend/requirements.txt
- .claude/hooks/format-frontend.sh
- .claude/launch.json
- .claude/settings.json
- .claude/hooks/hot-restore.sh
- .claude/hooks/hot-save.sh
- .claude/hooks/lint-check.sh
- .claude/hooks/protect-critical.sh
- .claude/hooks/secret-scan.sh


### Agent Instruction Files

- CLAUDE.md
- .claude/hooks/format-frontend.sh
- .claude/launch.json
- .claude/settings.json
- .claude/hooks/hot-restore.sh
- .claude/hooks/hot-save.sh
- .claude/hooks/lint-check.sh
- .claude/hooks/protect-critical.sh
- .claude/hooks/secret-scan.sh


## Top Directories

| dir | count |
| --- | --- |
| frontend | 186 |
| backend | 52 |
| supabase | 16 |
| ops | 9 |
| .claude | 8 |
| docs | 6 |
| .github | 5 |
| .agents | 1 |
| .gitignore | 1 |
| CLAUDE.md | 1 |
| CONTEXT.md | 1 |
| memory | 1 |
| README.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .tsx | 91 |
| .py | 45 |
| .md | 29 |
| .ts | 28 |
| .sql | 18 |
| .mjs | 12 |
| .sh | 12 |
| .html | 11 |
| .json | 10 |
| [no-ext] | 8 |
| .xml | 5 |
| .yml | 5 |
| .txt | 4 |
| .svg | 3 |
| .css | 2 |
| .example | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
