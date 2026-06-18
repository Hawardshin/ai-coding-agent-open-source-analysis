# boldsoftware/shelley

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/boldsoftware/shelley |
| local path | sources/boldsoftware__shelley |
| HEAD | 189020c |
| stars/forks | 503 / 85 |
| language | Go |
| license |  |
| pushedAt | 2026-06-18T00:15:21Z |
| trendScore / priorityScore | 135 / 397 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 268 | AGENTS.md, templates/go/AGENTS.md, db/README.md |
| Database / data infrastructure | 244 | AGENTS.md, db/README.md, lazycue/README.md |
| Coding agent / software automation | 67 | db/README.md, README.md, AGENT_TESTING.md |
| Developer tools / DX | 57 | README.md, ui/package.json, AGENT_TESTING.md |
| MCP / agent interoperability | 50 | AGENTS.md, server/system_prompt_test.go, server/user_agents_md_test.go |
| Cloud native / infrastructure | 46 | lazycue/README.md, llm/llm_test.go, server/system_prompt_test.go |
| Security / supply chain | 31 | server/subagent_test.go, server/system_prompt_test.go, client/client.go |
| Frontend / app framework | 27 | AGENTS.md, README.md, ui/package.json |
| Observability / evaluation | 21 | claudetool/browse/README.md, go.mod, AGENT_TESTING.md |
| Local LLM / inference | 6 | llm/oai/bare_assistant_test.go, llm/oai/oai.go |
| RAG / retrieval / knowledge | 2 | modelsources/modelsources_test.go |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Go |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 565 |
| manifests | 22 |
| docs | 21 |
| tests | 164 |
| ci/ops | 3 |
| spec artifacts | 4 |
| agent instruction files | 3 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Shelley: a coding agent for exe.dev | Shelley: a coding agent for exe.dev / Installation / Pre-Built Binaries (macOS/Linux) / Homebrew (macOS) / Build from Source / Releases / Architecture / History / Shelley's Name / Open source | Shelley a coding agent for exe.dev Shelley is a mobile friendly, web based, multi conversation, multi modal, multi model, single user coding agent built for but not exclusive to exe.dev https //exe.dev/ . It does not come with authorization or sandboxing bring your own. Mobile friendly because ideas can come any time. Web based , because terminal based scroll back is punishment for shoplifting in some countries. Multi modal because screenshots, charts, and graphs are necessary, not to mention delightful. Multi model to benefit from all the innovation going on. Single user because it makes sense to bring the agent to the compute. Installation Pre Built Binaries macOS/Linux The binaries are on |


## Key Files

### Manifests

- AGENTS.md
- templates/go/AGENTS.md
- ui/src/components/AGENTS.md
- db/README.md
- lazycue/README.md
- loop/README.md
- README.md
- claudetool/browse/README.md
- templates/go/README.md
- ui/e2e/README.md
- ui/lazycue/README.md
- go.mod
- lazycue/go.mod
- Makefile
- ui/package.json
- ui/tsconfig.json
- templates/go/go.mod
- templates/go/Makefile
- go.sum
- lazycue/go.sum


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- templates/go/AGENTS.md
- ui/src/components/AGENTS.md
- ARCHITECTURE.md


### Agent Instruction Files

- AGENTS.md
- templates/go/AGENTS.md
- ui/src/components/AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| ui | 207 |
| server | 105 |
| db | 57 |
| claudetool | 56 |
| llm | 32 |
| templates | 20 |
| lazycue | 13 |
| skills | 9 |
| loop | 8 |
| cmd | 6 |
| dtach | 6 |
| gitstate | 5 |
| models | 5 |
| test | 4 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 264 |
| .ts | 73 |
| .tsx | 65 |
| .json | 50 |
| .sql | 40 |
| .md | 21 |
| [no-ext] | 11 |
| .txt | 7 |
| .js | 6 |
| .sh | 4 |
| .yml | 4 |
| .html | 3 |
| .mod | 3 |
| .py | 3 |
| .sum | 3 |
| .yaml | 3 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
