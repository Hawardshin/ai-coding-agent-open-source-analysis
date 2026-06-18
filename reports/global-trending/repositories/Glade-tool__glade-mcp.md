# Glade-tool/glade-mcp

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Glade-tool/glade-mcp |
| local path | sources/Glade-tool__glade-mcp |
| HEAD | 4d07c86 |
| stars/forks | 168 / 20 |
| language | C# |
| license |  |
| pushedAt | 2026-06-17T23:26:28Z |
| trendScore / priorityScore | 146 / 395 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | mcp-server/README.md, mcp-server/eval/README.md, assets/README.md |
| Developer tools / DX | 245 | mcp-server/README.md, godot-bridge/README.md, godot-bridge/tests/README.md |
| AI agent / orchestration | 113 | godot-bridge/README.md, mcp-server/CHANGELOG.md, mcp-server/CONTRIBUTING.md |
| Coding agent / software automation | 91 | mcp-server/README.md, mcp-server/eval/README.md, godot-bridge/README.md |
| Data / ML platform | 88 | mcp-server/README.md, mcp-server/eval/README.md, README.md |
| Observability / evaluation | 87 | mcp-server/eval/README.md, godot-bridge/README.md, mcp-server/CONTRIBUTING.md |
| RAG / retrieval / knowledge | 74 | mcp-server/README.md, mcp-server/eval/README.md, README.md |
| Cloud native / infrastructure | 19 | mcp-server/README.md, README.md, mcp-server/src/gladekit_mcp/schemas/godot/camera.py |
| Security / supply chain | 6 | mcp-server/README.md, README.md, mcp-server/TESTING.md |
| Database / data infrastructure | 2 | mcp-server/src/gladekit_mcp/asset_pipeline/catalogs/kenney.json |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, devtools, frontendStack, infra, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, .NET |
| capabilities | LLM/app framework, Vector/search store, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 885 |
| manifests | 9 |
| docs | 9 |
| tests | 74 |
| ci/ops | 1 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | GladeKit MCP | GladeKit MCP / Quick Start / 1. Install the editor bridge / 2. Connect your AI client / Why GladeKit Unity MCP? / Features / My Game / Defaults: host=127.0.0.1, port=8766, path=/mcp / Custom host/port/path | GladeKit MCP Connect Cursor, Claude Code, Windsurf, Claude Desktop, and other AI clients directly to your Unity or Godot editor. Unity 235+ tools, full Unity aware system prompt, GLADE.md project context, script semantic search, skill calibration, free CC0 asset pipeline, cloud intelligence layer with RAG and cross session memory. Godot 4.3+ 53 native tools across scene/node, scripts, resources, signals, runtime incl. structured runtime event observation , project introspection, Control / Window UI, and lighting & WorldEnvironment. The MCP server auto detects which editor is running Unity on 8765 , Godot on 8766 and exposes the matching tool set. ! GladeKit MCP Demo https //raw.githubusercon |


## Key Files

### Manifests

- mcp-server/README.md
- mcp-server/eval/README.md
- assets/README.md
- godot-bridge/README.md
- godot-bridge/tests/README.md
- README.md
- mcp-server/pyproject.toml
- unity-bridge/package.json
- unity-bridge/package.json.meta


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| unity-bridge | 656 |
| godot-bridge | 127 |
| mcp-server | 97 |
| .github | 1 |
| .gitignore | 1 |
| assets | 1 |
| LICENSE | 1 |
| README.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .meta | 347 |
| .cs | 302 |
| .gd | 121 |
| .py | 86 |
| .md | 9 |
| [no-ext] | 8 |
| .asmdef | 3 |
| .json | 3 |
| .txt | 2 |
| .cfg | 1 |
| .godot | 1 |
| .toml | 1 |
| .yml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
