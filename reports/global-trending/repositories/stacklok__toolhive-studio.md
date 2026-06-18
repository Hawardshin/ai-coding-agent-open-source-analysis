# stacklok/toolhive-studio

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/stacklok/toolhive-studio |
| local path | sources/stacklok__toolhive-studio |
| HEAD | cf2dff1 |
| stars/forks | 136 / 20 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T21:25:35Z |
| trendScore / priorityScore | 152 / 463 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Security / supply chain | 500 | docs/README.md, README.md, .cursor/skills/security-vuln-remediation/SKILL.md |
| MCP / agent interoperability | 394 | docs/README.md, AGENTS.md, README.md |
| AI agent / orchestration | 292 | package.json, .cursor/skills/security-vuln-remediation/SKILL.md, .github/workflows/_bug-fix-agent.yml |
| Developer tools / DX | 282 | docs/README.md, AGENTS.md, CLAUDE.md |
| Frontend / app framework | 189 | docs/README.md, AGENTS.md, CLAUDE.md |
| Cloud native / infrastructure | 176 | docs/README.md, AGENTS.md, README.md |
| Database / data infrastructure | 124 | CLAUDE.md, main/src/chat/__tests__/mcp-tools.test.ts, main/src/chat/agents/__tests__/registry.test.ts |
| Coding agent / software automation | 122 | README.md, CLAUDE.md, .cursor/skills/security-vuln-remediation/SKILL.md |
| Observability / evaluation | 26 | docs/README.md, README.md, package.json |
| Local LLM / inference | 21 | package.json, docs/e2e-testing.md, .github/workflows/_e2e.yml |
| RAG / retrieval / knowledge | 4 | examples/registries/registry-with-groups.json |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1007 |
| manifests | 9 |
| docs | 54 |
| tests | 265 |
| ci/ops | 21 |
| spec artifacts | 33 |
| agent instruction files | 31 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | ToolHive Desktop UI | ToolHive Desktop UI / Quick links / Why ToolHive? / Getting started / How it works / Privacy and telemetry / What data is collected? / How to opt out / Contributing / License | <picture <source media=" prefers color scheme dark " srcset="docs/images/toolhive byline white.svg" <img src="docs/images/toolhive byline black.svg" alt="ToolHive logo" width="500"/ </picture <br ! Release release img release ! Build status ci img ci ! Coverage Status coverage img coverage ! License Apache 2.0 license img license ! Discord discord img discord ToolHive Desktop UI Run any Model Context Protocol MCP server — securely, instantly, anywhere. ToolHive is the easiest way to discover, deploy, and manage MCP servers. Launch any MCP server in a locked down container with just a few clicks. No manual setup, no security headaches, no runtime hassles. <picture <source media=" prefers colo |


## Key Files

### Manifests

- docs/README.md
- AGENTS.md
- README.md
- CLAUDE.md
- .devcontainer/Dockerfile
- package.json
- tsconfig.json
- tsconfig.app.json
- tsconfig.node.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- .github/copilot-instructions.md
- .cursor/skills/security-vuln-remediation/SKILL.md
- renderer/src/common/contexts/prompt/form-prompt-dialog.tsx
- renderer/src/common/contexts/prompt/index.ts
- renderer/src/common/contexts/prompt/provider.tsx
- .cursor/skills/testing-api-assertions/SKILL.md
- .cursor/skills/testing-api-overrides/SKILL.md
- .cursor/skills/testing-with-api-mocks/SKILL.md
- .cursor/skills/bug-fix-tdd/SKILL.md
- .cursor/skills/deep-links/references/design.md
- .cursor/skills/deep-links/references/os-and-packaging.md
- .cursor/skills/deep-links/references/patterns.md
- .cursor/skills/deep-links/SKILL.md
- .cursor/skills/devcontainer-dev/SKILL.md
- .cursor/skills/skill-creator/SKILL.md
- .cursor/skills/skill-editor/SKILL.md
- .github/workflows/claude.yml
- .claude/skills/security-vuln-remediation/SKILL.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- .github/copilot-instructions.md
- .cursor/skills/security-vuln-remediation/SKILL.md
- renderer/src/common/contexts/prompt/form-prompt-dialog.tsx
- renderer/src/common/contexts/prompt/index.ts
- renderer/src/common/contexts/prompt/provider.tsx
- .cursor/skills/testing-api-assertions/SKILL.md
- .cursor/skills/testing-api-overrides/SKILL.md
- .cursor/skills/testing-with-api-mocks/SKILL.md
- .cursor/skills/bug-fix-tdd/SKILL.md
- .cursor/skills/deep-links/references/design.md
- .cursor/skills/deep-links/references/os-and-packaging.md
- .cursor/skills/deep-links/references/patterns.md
- .cursor/skills/deep-links/SKILL.md


## Top Directories

| dir | count |
| --- | --- |
| renderer | 633 |
| main | 176 |
| .github | 29 |
| common | 25 |
| utils | 19 |
| preload | 16 |
| .claude | 12 |
| .codex | 12 |
| .cursor | 12 |
| docs | 10 |
| e2e-tests | 10 |
| scripts | 8 |
| .devcontainer | 3 |
| flatpak | 3 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 481 |
| .tsx | 399 |
| .md | 48 |
| .yml | 28 |
| .json | 9 |
| .svg | 8 |
| [no-ext] | 7 |
| .sh | 6 |
| .ttf | 4 |
| .yaml | 4 |
| .cjs | 2 |
| .css | 2 |
| .mjs | 2 |
| .desktop | 1 |
| .example | 1 |
| .html | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
