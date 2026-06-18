# letta-ai/letta-code

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/letta-ai/letta-code |
| local path | sources/letta-ai__letta-code |
| HEAD | 47f9b32 |
| stars/forks | 2743 / 307 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T23:59:21Z |
| trendScore / priorityScore | 173 / 474 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | src/agent/prompts/README.md, src/cli/app/README.md, AGENTS.md |
| Developer tools / DX | 194 | src/agent/prompts/README.md, src/cli/app/README.md, AGENTS.md |
| Coding agent / software automation | 109 | src/agent/prompts/README.md, AGENTS.md, README.md |
| Security / supply chain | 86 | src/agent/prompts/letta.md, src/agent/prompts/source_claude.md, src/agent/prompts/source_gemini.md |
| Local LLM / inference | 34 | README.md, src/agent/model-tier-selection.test.ts, src/agent/subagent-model-resolution.test.ts |
| Cloud native / infrastructure | 17 | src/agent/prompts/source_codex.md, src/agent/prompts/source_gemini.md, src/agent/memory-filesystem.test.ts |
| MCP / agent interoperability | 15 | src/agent/prompts/letta.md, src/agent/prompts/onboarding.mdx, src/agent/prompts/project.mdx |
| Frontend / app framework | 14 | src/agent/prompts/README.md, AGENTS.md, package.json |
| Observability / evaluation | 12 | AGENTS.md, src/agent/prompts/letta.md, scripts/latency-benchmark.ts |
| RAG / retrieval / knowledge | 4 | src/agent/prompts/letta_no_memfs.md, src/agent/prompts/letta.md, src/agent/prompts/recall_subagent.md |
| Database / data infrastructure | 3 | src/agent/prompts/letta_no_memfs.md, src/agent/prompts/persona_kawaii.mdx, src/agent/prompts/source_claude.md |
| Data / ML platform | 1 | src/agent/prompts/letta_no_memfs.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1316 |
| manifests | 9 |
| docs | 119 |
| tests | 417 |
| ci/ops | 10 |
| spec artifacts | 30 |
| agent instruction files | 27 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Letta Code | Letta Code / Feature Overview / Get started / Local mode / 🌌 Constellation / Remote environments / Installing external skills / Research / Other | Letta Code ! npm https //img.shields.io/npm/v/@letta ai/letta code.svg?style=flat square https //www.npmjs.com/package/@letta ai/letta code ! Discord https //img.shields.io/badge/discord join blue?style=flat square&logo=discord https //discord.gg/letta Letta Code is a memory first agent harness, designed for long lived agents that can learn from experience and maintain a cohesive identity across models Claude, GPT, Gemini, GLM, Kimi, and more . You can interact with Letta Code agents through A local CLI https //docs.letta.com/letta code/cli The desktop app https //docs.letta.com/letta code/desktop app for macOS, Windows, and Linux Your browser, including mobile https //docs.letta.com/letta c |


## Key Files

### Manifests

- src/agent/prompts/README.md
- src/cli/app/README.md
- AGENTS.md
- README.md
- src/channels/README.md
- src/tools/README.md
- package.json
- tsconfig.json
- tsconfig.types.json


### Spec / Docs / Prompt Artifacts

- src/agent/prompts/README.md
- AGENTS.md
- src/agent/prompts/approval_recovery_alert.txt
- src/agent/prompts/human_kawaii.mdx
- src/agent/prompts/human_linus.mdx
- src/agent/prompts/human_memo.mdx
- src/agent/prompts/human.mdx
- src/agent/prompts/interrupt_recovery_alert.txt
- src/agent/prompts/letta_no_memfs.md
- src/agent/prompts/letta.md
- src/agent/prompts/memory_filesystem.mdx
- src/agent/prompts/onboarding.mdx
- src/agent/prompts/persona_blank.mdx
- src/agent/prompts/persona_kawaii.mdx
- src/agent/prompts/persona_linus.mdx
- src/agent/prompts/persona_memo.mdx
- src/agent/prompts/persona_tutorial.mdx
- src/agent/prompts/persona.mdx
- src/agent/prompts/project.mdx
- src/agent/prompts/recall_subagent_local.md


### Agent Instruction Files

- src/agent/prompts/README.md
- AGENTS.md
- src/agent/prompts/approval_recovery_alert.txt
- src/agent/prompts/human_kawaii.mdx
- src/agent/prompts/human_linus.mdx
- src/agent/prompts/human_memo.mdx
- src/agent/prompts/human.mdx
- src/agent/prompts/interrupt_recovery_alert.txt
- src/agent/prompts/letta_no_memfs.md
- src/agent/prompts/letta.md
- src/agent/prompts/memory_filesystem.mdx
- src/agent/prompts/onboarding.mdx
- src/agent/prompts/persona_blank.mdx
- src/agent/prompts/persona_kawaii.mdx
- src/agent/prompts/persona_linus.mdx


## Top Directories

| dir | count |
| --- | --- |
| src | 1259 |
| scripts | 16 |
| .github | 11 |
| hooks | 8 |
| docs | 3 |
| .husky | 2 |
| nix | 2 |
| .editorconfig | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| AGENTS.md | 1 |
| biome.json | 1 |
| build.js | 1 |
| bun.nix | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 981 |
| .tsx | 111 |
| .md | 105 |
| .json | 52 |
| .mdx | 14 |
| .js | 10 |
| .sh | 10 |
| .yml | 10 |
| [no-ext] | 6 |
| .nix | 4 |
| .py | 4 |
| .txt | 4 |
| .cjs | 3 |
| .mjs | 1 |
| .toml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
