# nanocoai/nanoclaw

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/nanocoai/nanoclaw |
| local path | sources/nanocoai__nanoclaw |
| HEAD | ee7f891 |
| stars/forks | 29904 / 12880 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T19:46:38Z |
| trendScore / priorityScore | 167 / 504 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | README.md, repo-tokens/README.md, CLAUDE.md |
| Cloud native / infrastructure | 500 | docs/README.md, README.md, CLAUDE.md |
| Developer tools / DX | 500 | README.md, CLAUDE.md, container/agent-runner/package.json |
| MCP / agent interoperability | 177 | README.md, CLAUDE.md, container/agent-runner/package.json |
| Coding agent / software automation | 174 | README.md, repo-tokens/README.md, CLAUDE.md |
| Security / supply chain | 137 | docs/README.md, README.md, CLAUDE.md |
| Database / data infrastructure | 115 | README.md, CLAUDE.md, docs/agent-runner-details.md |
| Local LLM / inference | 62 | README.md, docs/ollama.md, .claude/skills/add-karpathy-llm-wiki/llm-wiki.md |
| Frontend / app framework | 29 | docs/architecture-diagram.html, docs/architecture-diagram.md, .claude/skills/add-vercel/container-skills/vercel-cli/SKILL.md |
| RAG / retrieval / knowledge | 11 | .claude/skills/add-karpathy-llm-wiki/llm-wiki.md, .claude/skills/add-karpathy-llm-wiki/REMOVE.md, .claude/skills/add-karpathy-llm-wiki/SKILL.md |
| Observability / evaluation | 6 | README.md, docs/REQUIREMENTS.md, container/agent-runner/src/poll-loop.ts |
| Data / ML platform | 5 | README.md, docs/SPEC.md, docs/ollama.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Swift |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 548 |
| manifests | 11 |
| docs | 150 |
| tests | 84 |
| ci/ops | 5 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Why I Built NanoClaw / Quick Start / Philosophy / What It Supports / Usage / Customizing / Contributing / RFS (Request for Skills) / Requirements / Architecture | <p align="center" <img src="assets/nanoclaw logo.png" alt="NanoClaw" width="400" </p <p align="center" An AI assistant that runs agents securely in their own containers. Lightweight, built to be easily understood and completely customized for your needs. </p <p align="center" <a href="https //nanoclaw.dev" nanoclaw.dev</a &nbsp; • &nbsp; <a href="https //docs.nanoclaw.dev" docs</a &nbsp; • &nbsp; <a href="README zh.md" 中文</a &nbsp; • &nbsp; <a href="README ja.md" 日本語</a &nbsp; • &nbsp; <a href="https //discord.gg/VDdww8qS42" <img src="https //img.shields.io/discord/1470188214710046894?label=Discord&logo=discord&v=2" alt="Discord" valign="middle" </a &nbsp; • &nbsp; <a href="repo tokens" <img |


## Key Files

### Manifests

- docs/README.md
- README.md
- repo-tokens/README.md
- CLAUDE.md
- container/CLAUDE.md
- container/agent-runner/package.json
- container/agent-runner/tsconfig.json
- container/Dockerfile
- package.json
- tsconfig.json
- docs/REQUIREMENTS.md


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- container/CLAUDE.md
- docs/SPEC.md
- docs/architecture.md
- docs/REQUIREMENTS.md
- .claude/skills/add-codex/codex-cli-tools.test.ts
- .claude/skills/add-atomic-chat-tool/atomic-chat-mcp-stdio.ts
- .claude/skills/add-karpathy-llm-wiki/llm-wiki.md
- .claude/skills/add-karpathy-llm-wiki/REMOVE.md
- .claude/skills/add-karpathy-llm-wiki/SKILL.md
- .claude/skills/add-ollama-tool/ollama-mcp-stdio.ts
- .claude/skills/add-vercel/container-skills/vercel-cli/SKILL.md
- .claude/skills/init-first-agent/SKILL.md
- .claude/skills/init-onecli/SKILL.md
- .claude/skills/migrate-memory/SKILL.md
- .claude/settings.json
- .claude/skills/add-atomic-chat-tool/atomic-chat-registration.test.ts
- .claude/skills/add-atomic-chat-tool/atomic-chat-wiring.test.ts
- .claude/skills/add-dashboard/resources/dashboard-pusher.test.ts
- .claude/skills/add-dashboard/resources/dashboard-wiring.test.ts


### Agent Instruction Files

- CLAUDE.md
- container/CLAUDE.md
- .claude/skills/add-codex/codex-cli-tools.test.ts
- .claude/skills/add-atomic-chat-tool/atomic-chat-mcp-stdio.ts
- .claude/skills/add-karpathy-llm-wiki/llm-wiki.md
- .claude/skills/add-karpathy-llm-wiki/REMOVE.md
- .claude/skills/add-karpathy-llm-wiki/SKILL.md
- .claude/skills/add-ollama-tool/ollama-mcp-stdio.ts
- .claude/skills/add-vercel/container-skills/vercel-cli/SKILL.md
- .claude/skills/init-first-agent/SKILL.md
- .claude/skills/init-onecli/SKILL.md
- .claude/skills/migrate-memory/SKILL.md
- .claude/settings.json
- .claude/skills/add-atomic-chat-tool/atomic-chat-registration.test.ts
- .claude/skills/add-atomic-chat-tool/atomic-chat-wiring.test.ts


## Top Directories

| dir | count |
| --- | --- |
| src | 163 |
| .claude | 115 |
| setup | 108 |
| container | 73 |
| docs | 29 |
| scripts | 14 |
| repo-tokens | 7 |
| .github | 6 |
| .gitignore | 1 |
| .husky | 1 |
| .mcp.json | 1 |
| .npmrc | 1 |
| .nvmrc | 1 |
| .prettierrc | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 323 |
| .md | 149 |
| .sh | 40 |
| [no-ext] | 10 |
| .json | 9 |
| .svg | 5 |
| .yml | 5 |
| .yaml | 2 |
| .html | 1 |
| .js | 1 |
| .plist | 1 |
| .swift | 1 |
| .txt | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
