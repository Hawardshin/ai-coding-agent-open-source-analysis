# makoMakoGo/fish-claude

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/makoMakoGo/fish-claude |
| local path | sources/makoMakoGo__fish-claude |
| HEAD | 43b3479 |
| stars/forks | 140 / 15 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T23:35:53Z |
| trendScore / priorityScore | 142 / 389 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Coding agent / software automation | 315 | agent-instructions/README.md, sub-agents/README.md, system-prompts/README.md |
| AI agent / orchestration | 231 | agent-instructions/README.md, sub-agents/README.md, AGENTS.md |
| MCP / agent interoperability | 174 | agent-instructions/README.md, mcp/README.md, tools/omp-patch-custom-mcp/README.md |
| Developer tools / DX | 70 | agent-instructions/README.md, sub-agents/README.md, system-prompts/README.md |
| Database / data infrastructure | 26 | tools/codex-provider-history-migrator/README.md, packs/context-mode.md, packs/nmem.md |
| Security / supply chain | 20 | mcp/README.md, tools/omp-patch-codex-websearch-byok/README.md, mcp/tavily.md |
| Frontend / app framework | 8 | system-prompts/codex-cli.md, system-prompts/gemini-cli.md, sub-agents/claude/code-simplifier.md |
| Cloud native / infrastructure | 6 | mcp/sequential-thinking.md, system-prompts/codex-cli.md, system-prompts/gemini-cli.md |
| Observability / evaluation | 6 | preset-cards/README.md, system-prompts/gemini-deep-think.md, system-prompts/oh-my-pi.md |
| RAG / retrieval / knowledge | 3 | system-prompts/gemini-deep-think.md, agent-instructions/general/05-serena.md, packs/nmem.md |
| Local LLM / inference | 2 | system-prompts/gemini-deep-think.md, tools/codex-provider-history-migrator/migrate.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 139 |
| manifests | 23 |
| docs | 90 |
| tests | 0 |
| ci/ops | 3 |
| spec artifacts | 2 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | 这是什么 / 先看这几个 / 都有什么 / 食用指南 / 贡献 / 许可证 | <div align="center" <img src="repo logo.svg" alt="Fish Claude logo" width="180" / <h1 Fish Claude</h1 Fish's Coding Agent Configs 个人配置镜像仓库，请按需选用，切勿盲目照搬乱套。 优秀的 Vibe Coder 是 "偷啃" 喂出来的。 <img src="assets/tokscale.svg" alt="Local Tokscale stats" / <sub 本人真实用量，由 <a href="tools/tokscale readme svg/" tokscale readme svg</a 生成</sub <br ! License MIT https //img.shields.io/badge/License MIT yellow.svg LICENSE ! GitHub stars https //img.shields.io/github/stars/makoMakoGo/fish claude?style=social <img src="assets/badges/claude code.svg" alt="Claude Code" <img src="assets/badges/codex.svg" alt="Codex" <img src="assets/badges/droid.svg" alt="Droid" <img src="assets/badges/oh my pi.svg" alt="Oh My Pi" <img |


## Key Files

### Manifests

- agent-instructions/README.md
- mcp/README.md
- sub-agents/README.md
- system-prompts/README.md
- tools/omp-patch-custom-mcp/README.md
- AGENTS.md
- assets/README.md
- config-files/README.md
- output-styles/README.md
- packs/README.md
- preset-cards/README.md
- README.md
- skills/README.md
- slash-commands/README.md
- themes/README.md
- tips/README.md
- tools/README.md
- tools/claude-code-launcher/README.md
- tools/claude-json-history-cleaner/README.md
- tools/codex-provider-history-migrator/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| agent-instructions | 24 |
| tools | 18 |
| config-files | 14 |
| skills | 12 |
| assets | 10 |
| mcp | 10 |
| system-prompts | 9 |
| packs | 8 |
| sub-agents | 8 |
| preset-cards | 5 |
| .github | 4 |
| themes | 3 |
| output-styles | 2 |
| slash-commands | 2 |


## Extension Distribution

| ext | count |
| --- | --- |
| .md | 90 |
| .svg | 10 |
| .toml | 9 |
| .json | 6 |
| .yml | 6 |
| [no-ext] | 5 |
| .py | 3 |
| .sh | 3 |
| .diff | 2 |
| .ts | 2 |
| .jsonc | 1 |
| .mjs | 1 |
| .ps1 | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
