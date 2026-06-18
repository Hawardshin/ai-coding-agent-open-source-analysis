# zhayujie/CowAgent

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/zhayujie/CowAgent |
| local path | sources/zhayujie__CowAgent |
| HEAD | 0137346 |
| stars/forks | 45383 / 10206 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T14:04:38Z |
| trendScore / priorityScore | 177 / 490 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | docs/ja/README.md, docs/zh/README.md, agent/tools/scheduler/README.md |
| Developer tools / DX | 206 | docs/README.md, docs/ja/README.md, docs/zh/README.md |
| MCP / agent interoperability | 161 | docs/ja/README.md, docs/zh/README.md, README.md |
| RAG / retrieval / knowledge | 115 | docs/ja/README.md, README.md, channel/web/static/vendor/README.md |
| Cloud native / infrastructure | 112 | docs/ja/README.md, docs/zh/README.md, README.md |
| Security / supply chain | 88 | README.md, channel/feishu/README.md, channel/wechat_kf/README.md |
| Database / data infrastructure | 8 | docs/memory/context.mdx, bridge/agent_bridge.py, bridge/agent_initializer.py |
| Coding agent / software automation | 7 | docs/ja/README.md, docs/zh/README.md, README.md |
| Frontend / app framework | 7 | channel/web/static/vendor/README.md |
| Local LLM / inference | 6 | docs/ja/models/custom.mdx |
| Data / ML platform | 1 | bridge/agent_bridge.py |
| Observability / evaluation | 1 | docs/channels/web.mdx |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 612 |
| manifests | 26 |
| docs | 268 |
| tests | 15 |
| ci/ops | 6 |
| spec artifacts | 13 |
| agent instruction files | 3 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | 🌟 Highlights / 🏗️ Architecture / 🚀 Quick Start / 🤖 Models / 💬 Channels / 🧠 Memory & Knowledge Base / 🔧 Tools & Skills / Tool System / Skills System / 🏷 Changelog | <p align="center" <img src="https //github.com/user attachments/assets/eca9a9ec 8534 4615 9e0f 96c5ac1d10a3" alt="CowAgent" width="420" / </p <p align="center" <a href="https //github.com/zhayujie/CowAgent/releases/latest" <img src="https //img.shields.io/github/v/release/zhayujie/CowAgent?cacheSeconds=3600" alt="Latest release" </a <a href="https //github.com/zhayujie/CowAgent/blob/master/LICENSE" <img src="https //img.shields.io/badge/license MIT green.svg" alt="License MIT" </a <a href="https //github.com/zhayujie/CowAgent" <img src="https //img.shields.io/github/stars/zhayujie/CowAgent?style=flat square&cacheSeconds=3600" alt="Stars" </a <a href="https //docs.cowagent.ai/" <img src="http |


## Key Files

### Manifests

- docs/README.md
- docs/ja/README.md
- docs/zh/README.md
- agent/tools/scheduler/README.md
- plugins/README.md
- README.md
- skills/README.md
- channel/feishu/README.md
- channel/web/README.md
- channel/web/static/vendor/README.md
- channel/wechat_kf/README.md
- channel/wechatcom/README.md
- channel/wechatmp/README.md
- plugins/banwords/README.md
- plugins/dungeon/README.md
- plugins/godcmd/README.md
- plugins/hello/README.md
- plugins/keyword/README.md
- plugins/linkai/README.md
- plugins/role/README.md


### Spec / Docs / Prompt Artifacts

- requirements.txt
- agent/prompt/__init__.py
- agent/prompt/builder.py
- agent/prompt/workspace.py
- docs/intro/architecture.mdx
- docs/ja/intro/architecture.mdx
- docs/ja/models/claude.mdx
- docs/ja/models/gemini.mdx
- docs/models/claude.mdx
- docs/models/gemini.mdx
- docs/zh/intro/architecture.mdx
- docs/zh/models/claude.mdx
- docs/zh/models/gemini.mdx


### Agent Instruction Files

- agent/prompt/__init__.py
- agent/prompt/builder.py
- agent/prompt/workspace.py


## Top Directories

| dir | count |
| --- | --- |
| docs | 244 |
| agent | 89 |
| channel | 70 |
| plugins | 47 |
| models | 42 |
| voice | 31 |
| common | 15 |
| tests | 15 |
| cli | 11 |
| skills | 8 |
| .github | 7 |
| translate | 7 |
| bridge | 6 |
| docker | 4 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 284 |
| .mdx | 240 |
| .md | 27 |
| .template | 13 |
| .svg | 12 |
| .yml | 7 |
| .sh | 6 |
| .woff2 | 5 |
| [no-ext] | 5 |
| .json | 4 |
| .css | 2 |
| .txt | 2 |
| .html | 1 |
| .js | 1 |
| .latest | 1 |
| .ps1 | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
