# taishi-i/awesome-ChatGPT-repositories

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/taishi-i/awesome-ChatGPT-repositories |
| local path | sources/taishi-i__awesome-ChatGPT-repositories |
| HEAD | 18128d9 |
| stars/forks | 3092 / 405 |
| language | Python |
| license |  |
| pushedAt | 2026-06-16T23:15:19Z |
| trendScore / priorityScore | 140 / 498 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | plugins/awesome-chatgpt-search/README.md, CLAUDE.md, plugins/awesome-chatgpt-search/data/repos-clis-a.json |
| Developer tools / DX | 421 | plugins/awesome-chatgpt-search/README.md, plugins/awesome-chatgpt-search/data/repos-clis-a.json, plugins/awesome-chatgpt-search/data/repos-clis-b.json |
| Frontend / app framework | 362 | plugins/awesome-chatgpt-search/data/repos-clis-a.json, plugins/awesome-chatgpt-search/data/repos-clis-b.json, plugins/awesome-chatgpt-search/data/repos-prompts.json |
| Coding agent / software automation | 344 | plugins/awesome-chatgpt-search/README.md, CLAUDE.md, plugins/awesome-chatgpt-search/data/repos-clis-a.json |
| RAG / retrieval / knowledge | 326 | plugins/awesome-chatgpt-search/README.md, CLAUDE.md, plugins/awesome-chatgpt-search/data/repos-clis-b.json |
| Cloud native / infrastructure | 309 | plugins/awesome-chatgpt-search/data/repos-clis-a.json, plugins/awesome-chatgpt-search/data/repos-clis-b.json, plugins/awesome-chatgpt-search/data/repos-prompts.json |
| MCP / agent interoperability | 296 | plugins/awesome-chatgpt-search/data/repos-clis-b.json, plugins/awesome-chatgpt-search/data/repos-prompts.json, plugins/awesome-chatgpt-search/data/repos-awesome-lists.json |
| Local LLM / inference | 291 | plugins/awesome-chatgpt-search/data/repos-clis-a.json, plugins/awesome-chatgpt-search/data/repos-clis-b.json, plugins/awesome-chatgpt-search/data/repos-prompts.json |
| Data / ML platform | 251 | plugins/awesome-chatgpt-search/README.md, plugins/awesome-chatgpt-search/data/repos-clis-a.json, plugins/awesome-chatgpt-search/data/repos-clis-b.json |
| Observability / evaluation | 194 | plugins/awesome-chatgpt-search/data/repos-clis-b.json, plugins/awesome-chatgpt-search/data/repos-prompts.json, .claude/commands/awesome-chatgpt.md |
| Security / supply chain | 168 | plugins/awesome-chatgpt-search/data/repos-clis-a.json, plugins/awesome-chatgpt-search/data/repos-clis-b.json, plugins/awesome-chatgpt-search/data/repos-prompts.json |
| Database / data infrastructure | 167 | plugins/awesome-chatgpt-search/data/repos-clis-a.json, plugins/awesome-chatgpt-search/data/repos-clis-b.json, plugins/awesome-chatgpt-search/data/repos-prompts.json |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 36 |
| manifests | 3 |
| docs | 10 |
| tests | 0 |
| ci/ops | 1 |
| spec artifacts | 2 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  |  |  |


## Key Files

### Manifests

- README.md
- plugins/awesome-chatgpt-search/README.md
- CLAUDE.md


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- .claude/commands/awesome-chatgpt.md


### Agent Instruction Files

- CLAUDE.md
- .claude/commands/awesome-chatgpt.md


## Top Directories

| dir | count |
| --- | --- |
| plugins | 22 |
| docs | 4 |
| .claude-plugin | 2 |
| .claude | 1 |
| .github | 1 |
| .gitignore | 1 |
| awesome-ChatGPT-repositories.json | 1 |
| CLAUDE.md | 1 |
| contributing.md | 1 |
| LICENSE | 1 |
| README.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .json | 22 |
| .md | 10 |
| [no-ext] | 2 |
| .py | 1 |
| .yml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
