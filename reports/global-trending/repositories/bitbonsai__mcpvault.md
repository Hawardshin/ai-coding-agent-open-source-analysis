# bitbonsai/mcpvault

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/bitbonsai/mcpvault |
| local path | sources/bitbonsai__mcpvault |
| HEAD | b9ea91a |
| stars/forks | 1429 / 111 |
| language | Astro |
| license |  |
| pushedAt | 2026-06-17T17:42:55Z |
| trendScore / priorityScore | 145 / 416 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 235 | AGENTS.md, website/AGENTS.md, README.md |
| Developer tools / DX | 224 | AGENTS.md, website/AGENTS.md, README.md |
| Coding agent / software automation | 89 | README.md, scripts/triage/README.md, CHANGELOG.md |
| Security / supply chain | 69 | AGENTS.md, README.md, SECURITY.md |
| Frontend / app framework | 65 | website/AGENTS.md, website/README.md, website/package.json |
| AI agent / orchestration | 42 | AGENTS.md, website/AGENTS.md, scripts/triage/README.md |
| RAG / retrieval / knowledge | 24 | AGENTS.md, README.md, CHANGELOG.md |
| Data / ML platform | 8 | README.md, website/src/components/CodeExample.astro, website/public/install.md |
| Cloud native / infrastructure | 7 | website/src/components/InteractiveDemo.tsx, website/src/components/CodeBlock.tsx, website/src/components/Hero.astro |
| Observability / evaluation | 3 | website/public/demo.md, website/src/components/InteractiveDemo.tsx |
| Database / data infrastructure | 2 | skills/obsidian/resources/obsidian-conventions.md, website/src/layouts/Layout.astro |
| Local LLM / inference | 1 | src/filesystem.ts |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, devtools, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 99 |
| manifests | 10 |
| docs | 24 |
| tests | 7 |
| ci/ops | 4 |
| spec artifacts | 3 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | MCPVault | MCPVault / Universal Compatibility / Quick Start (5 minutes) / Why MCPVault? / Universal AI Compatibility / Future-Proof Your Knowledge Base / Open Standard, No Lock-in / Features / Prerequisites / Installation | <div align="center" <img width="256" height="256" alt="image" src="https //github.com/user attachments/assets/1e21d898 811b 42c2 a810 bf921dde0f58" / </div MCPVault A universal AI bridge for Obsidian vaults using the Model Context Protocol MCP standard. Connect any MCP compatible AI assistant to your knowledge base works with Claude, ChatGPT, and future AI tools. This server provides safe read/write access to your notes while preventing YAML frontmatter corruption. <div align="center" https //mcpvault.org https //mcpvault.org Changelog ./CHANGELOG.md </div <div align="center" ! GitHub Stars https //img.shields.io/github/stars/bitbonsai/mcpvault?style=flat&logo=github&logoColor=white&color=90 |


## Key Files

### Manifests

- AGENTS.md
- website/AGENTS.md
- README.md
- website/README.md
- scripts/triage/README.md
- package.json
- tsconfig.json
- website/package.json
- website/tsconfig.json
- tsconfig.build.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- website/AGENTS.md
- scripts/triage/prompt.md


### Agent Instruction Files

- AGENTS.md
- website/AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| website | 52 |
| src | 15 |
| skills | 8 |
| .github | 5 |
| scripts | 4 |
| .gitignore | 1 |
| .npmignore | 1 |
| .nvmrc | 1 |
| AGENTS.md | 1 |
| CHANGELOG.md | 1 |
| debug-server.js | 1 |
| LICENSE | 1 |
| package-lock.json | 1 |
| package.json | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .md | 24 |
| .ts | 22 |
| .astro | 20 |
| .json | 6 |
| .yml | 5 |
| [no-ext] | 5 |
| .tsx | 4 |
| .html | 2 |
| .mjs | 2 |
| .sh | 2 |
| .svg | 2 |
| .txt | 2 |
| .js | 1 |
| .mp4 | 1 |
| .webmanifest | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
