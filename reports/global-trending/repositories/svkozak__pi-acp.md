# svkozak/pi-acp

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/svkozak/pi-acp |
| local path | sources/svkozak__pi-acp |
| HEAD | 49d6ec8 |
| stars/forks | 455 / 72 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T23:36:54Z |
| trendScore / priorityScore | 134 / 311 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 195 | AGENTS.md, README.md, CLAUDE.md |
| Developer tools / DX | 68 | AGENTS.md, README.md, package.json |
| Coding agent / software automation | 12 | AGENTS.md, README.md, package.json |
| MCP / agent interoperability | 11 | README.md, CLAUDE.md, src/acp/agent.ts |
| Security / supply chain | 5 | .github/workflows/npm-publish.yml, src/acp/agent.ts, test/unit/new-session-auth-required-when-no-models.test.ts |
| Frontend / app framework | 1 | src/acp/slash-commands.ts |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, devtools, frontend, frontendStack, mcp, security |
| stacks | Node/TypeScript/JavaScript |
| capabilities | Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 72 |
| manifests | 5 |
| docs | 3 |
| tests | 31 |
| ci/ops | 2 |
| spec artifacts | 2 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | pi-acp | pi-acp / Status / Features / Prerequisites / Install / Add pi-acp to your ACP client, e.g. [Zed](https://zed.dev/docs/agents/external-agents/) / Environment variables / Slash commands / Authentication (ACP Registry support) / Development | pi acp ACP Agent Client Protocol https //agentclientprotocol.com/overview/introduction adapter for pi https //github.com/earendil works/pi coding agent fka shitty coding agent . pi acp communicates ACP JSON RPC 2.0 over stdio to an ACP client e.g. Zed editor and spawns pi mode rpc , bridging requests/events between the two. Status This is an MVP style adapter intended to be useful today and easy to iterate on. Some ACP features may be not implemented or are not supported see Limitations limitations . Development is centered around Zed https //zed.dev editor support, other clients may have varying levels of compatibility. Expect some minor breaking changes. Features Streams assistant output a |


## Key Files

### Manifests

- AGENTS.md
- README.md
- CLAUDE.md
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| test | 31 |
| src | 17 |
| scripts | 10 |
| .github | 2 |
| .gitignore | 1 |
| .prettierignore | 1 |
| .prettierrc.mjs | 1 |
| AGENTS.md | 1 |
| CLAUDE.md | 1 |
| eslint.config.js | 1 |
| LICENSE | 1 |
| package-lock.json | 1 |
| package.json | 1 |
| README.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 49 |
| .mjs | 11 |
| .json | 3 |
| .md | 3 |
| [no-ext] | 3 |
| .yml | 2 |
| .js | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
