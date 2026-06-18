# artokun/comfyui-mcp

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/artokun/comfyui-mcp |
| local path | sources/artokun__comfyui-mcp |
| HEAD | 248011a |
| stars/forks | 163 / 33 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-18T00:14:55Z |
| trendScore / priorityScore | 145 / 427 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | docs/README.md, web/extensions/comfyui-mcp-agent-panel/README.md, packs/README.md |
| AI agent / orchestration | 327 | web/extensions/comfyui-mcp-agent-panel/README.md, AGENTS.md, .beads/README.md |
| Developer tools / DX | 218 | web/extensions/comfyui-mcp-agent-panel/README.md, .beads/README.md, README.md |
| Local LLM / inference | 118 | docs/plugin.mdx, docs/blog/anima-comfyui.mdx, docs/blog/ernie-image-comfyui.mdx |
| Coding agent / software automation | 101 | web/extensions/comfyui-mcp-agent-panel/README.md, .beads/README.md, README.md |
| Security / supply chain | 81 | web/extensions/comfyui-mcp-agent-panel/README.md, README.md, infra/cloudflare/README.md |
| Data / ML platform | 72 | README.md, docs/blog/anima-comfyui.mdx, docs/blog/ernie-image-comfyui.mdx |
| Cloud native / infrastructure | 52 | README.md, infra/cloudflare/README.md, Dockerfile |
| Frontend / app framework | 47 | web/extensions/comfyui-mcp-agent-panel/README.md, plugin/skills/comfyui-node-registry/references/pyproject.toml, docs/plugin.mdx |
| Database / data infrastructure | 23 | .beads/README.md, README.md, design/embedded-agent-panel.md |
| RAG / retrieval / knowledge | 23 | docs/tools/models.mdx, plugin/agents/researcher.md, plugin/skills/prompt-engineering/SKILL.md |
| Observability / evaluation | 10 | docs/blog/ernie-image-comfyui.mdx, docs/blog/ideogram-4-comfyui.mdx, docs/blog/wan-2.2-comfyui.mdx |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 410 |
| manifests | 12 |
| docs | 99 |
| tests | 56 |
| ci/ops | 1 |
| spec artifacts | 3 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | comfyui-mcp — the Claude Code plugin for ComfyUI | comfyui-mcp — the Claude Code plugin for ComfyUI / Quick Start / Scope: local, remote, or Comfy Cloud / Claude Code Plugin / Install as a plugin / In Claude Code / Slash commands / Built-in skills / Agents / Hooks | comfyui mcp — the Claude Code plugin for ComfyUI Claude Code plugin + MCP server for ComfyUI https //github.com/comfyanonymous/ComfyUI — generate images and video, execute and author workflows, manage models and custom nodes, and edit your live ComfyUI graph from your Claude session sidebar panel https //github.com/artokun/comfyui mcp panel , zero API keys . ! npm version https //img.shields.io/npm/v/comfyui mcp https //www.npmjs.com/package/comfyui mcp ! Node.js https //img.shields.io/badge/node %3E%3D22.0.0 brightgreen https //nodejs.org ! License https //img.shields.io/npm/l/comfyui mcp ./LICENSE ! Documentation https //img.shields.io/badge/docs comfyui mcp.artokun.io 2563EB?logo=readthed |


## Key Files

### Manifests

- docs/README.md
- web/extensions/comfyui-mcp-agent-panel/README.md
- AGENTS.md
- .beads/README.md
- packs/README.md
- README.md
- infra/cloudflare/README.md
- CLAUDE.md
- Dockerfile
- package.json
- tsconfig.json
- plugin/skills/comfyui-node-registry/references/pyproject.toml


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- ROADMAP.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| src | 173 |
| packs | 94 |
| plugin | 48 |
| docs | 45 |
| .beads | 9 |
| scripts | 8 |
| infra | 3 |
| design | 2 |
| web | 2 |
| .claude-plugin | 1 |
| .codex | 1 |
| .dockerignore | 1 |
| .env.example | 1 |
| .gitattributes | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 175 |
| .md | 57 |
| .json | 50 |
| .mdx | 36 |
| .yaml | 27 |
| .bat | 15 |
| .sh | 15 |
| [no-ext] | 12 |
| .mjs | 11 |
| .svg | 5 |
| .example | 2 |
| .js | 2 |
| .jsonc | 1 |
| .toml | 1 |
| .txt | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
