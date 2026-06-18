# yologdev/yoyo-evolve

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/yologdev/yoyo-evolve |
| local path | sources/yologdev__yoyo-evolve |
| HEAD | 64ccdef |
| stars/forks | 1824 / 122 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-18T00:23:32Z |
| trendScore / priorityScore | 146 / 426 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | README.md, CLAUDE.md, Cargo.toml |
| Developer tools / DX | 339 | README.md, CLAUDE.md, Cargo.toml |
| MCP / agent interoperability | 178 | README.md, CLAUDE.md, journals/llm-wiki.md |
| Coding agent / software automation | 154 | README.md, CLAUDE.md, Cargo.toml |
| Local LLM / inference | 74 | README.md, journals/llm-wiki.md, src/agent_builder.rs |
| Cloud native / infrastructure | 65 | CLAUDE.md, journals/llm-wiki.md, src/commands_memory.rs |
| RAG / retrieval / knowledge | 55 | CLAUDE.md, journals/llm-wiki.md, CHANGELOG.md |
| Database / data infrastructure | 38 | src/commands_memory.rs, src/memory.rs, docs/src/configuration/permissions.md |
| Security / supply chain | 36 | README.md, docs/src/configuration/system-prompts.md, docs/src/usage/single-prompt.md |
| Data / ML platform | 25 | README.md, CLAUDE.md, docs/src/contributing/mutation-testing.md |
| Observability / evaluation | 10 | CLAUDE.md, journals/llm-wiki.md, memory/active_social_learnings.md |
| Frontend / app framework | 7 | journals/llm-wiki.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | Python, Rust |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 173 |
| manifests | 3 |
| docs | 55 |
| tests | 1 |
| ci/ops | 8 |
| spec artifacts | 2 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | yoyo: A Coding Agent That Evolves Itself | yoyo: A Coding Agent That Evolves Itself / How It Evolves / Live Growth / Talk to It / Labels / How to submit / What to ask / What happens after / Shape Its Evolution / Guard It | <p align="center" <img src="assets/banner.png" alt="yoyo — a coding agent that evolves itself" width="100%" </p <p align="center" <a href="https //yoyo.yolog.dev/" Website</a · <a href="https //yologdev.github.io/yoyo evolve/" Journal</a · <a href="https //yologdev.github.io/yoyo evolve/book/" Documentation</a · <a href="https //github.com/yologdev/yoyo evolve" GitHub</a · <a href="https //deepwiki.com/yologdev/yoyo evolve" DeepWiki</a · <a href="https //github.com/yologdev/yoyo evolve/issues" Issues</a · <a href="https //x.com/yuanhao" Follow on X</a </p <p align="center" <a href="https //github.com/yologdev/yoyo evolve/stargazers" <img src="https //img.shields.io/github/stars/yologdev/yoyo |


## Key Files

### Manifests

- README.md
- CLAUDE.md
- Cargo.toml


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- docs/src/architecture.md


### Agent Instruction Files

- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| src | 71 |
| docs | 24 |
| scripts | 20 |
| skills | 15 |
| .github | 12 |
| memory | 4 |
| .yoyo | 2 |
| journals | 2 |
| sponsors | 2 |
| .gitignore | 1 |
| .skill_evolve_counter | 1 |
| .yoyo.toml | 1 |
| build.rs | 1 |
| Cargo.toml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .rs | 73 |
| .md | 54 |
| .sh | 12 |
| .py | 9 |
| .yml | 9 |
| [no-ext] | 5 |
| .json | 4 |
| .toml | 4 |
| .jsonl | 2 |
| .ps1 | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
