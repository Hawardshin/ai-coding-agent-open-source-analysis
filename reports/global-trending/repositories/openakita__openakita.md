# openakita/openakita

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/openakita/openakita |
| local path | sources/openakita__openakita |
| HEAD | c23b4c0 |
| stars/forks | 1818 / 258 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T09:58:19Z |
| trendScore / priorityScore | 146 / 461 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 437 | examples/plugins/lark-cli-tool/README.md, mcps/README.md, openakita-plugin-sdk/docs/README.md |
| Developer tools / DX | 345 | examples/plugins/lark-cli-tool/README.md, examples/README.md, openakita-plugin-sdk/docs/README.md |
| MCP / agent interoperability | 166 | examples/plugins/github-mcp/README.md, examples/README.md, docs/README.md |
| Frontend / app framework | 122 | openakita-plugin-sdk/docs/README.md, plugins/clip-sense/README.md, AGENTS.md |
| Database / data infrastructure | 91 | examples/plugins/sqlite-memory/README.md, examples/README.md, plugins/clip-sense/README.md |
| Security / supply chain | 89 | examples/plugins/lark-cli-tool/README.md, docs/README.md, AGENTS.md |
| Cloud native / infrastructure | 79 | skills/agent-browser/README.md, src/openakita/AGENTS.md, README.md |
| RAG / retrieval / knowledge | 73 | examples/README.md, examples/plugins/obsidian-kb/README.md, openakita-plugin-sdk/docs/README.md |
| Data / ML platform | 37 | plugins/clip-sense/README.md, AGENTS.md, README.md |
| Coding agent / software automation | 30 | mcps/README.md, openakita-plugin-sdk/docs/README.md, skills/agent-browser/README.md |
| Local LLM / inference | 28 | examples/README.md, examples/plugins/ollama-provider/README.md, openakita-plugin-sdk/docs/README.md |
| Observability / evaluation | 10 | src/openakita/AGENTS.md, README.md, scripts/test_memory_e2e_v2.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Java/Kotlin |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 3316 |
| manifests | 40 |
| docs | 539 |
| tests | 647 |
| ci/ops | 9 |
| spec artifacts | 38 |
| agent instruction files | 22 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Install | What is OpenAkita? / Quick-Start Guide / 🚀 For First-Time Users (3 Minutes) / 💻 For Developers (5 Minutes) / Install / Quick setup (interactive wizard) / Run your first task / ✨ What You Can Do Right Away / ➡️ Next Steps / Core Capabilities | <p align="center" <img src="docs/assets/logo.png" alt="OpenAkita Logo" width="200" / </p <h1 align="center" OpenAkita</h1 <p align="center" <strong Open Source Multi Agent AI Assistant — Not Just Chat, an AI Team That Gets Things Done</strong </p <p align="center" <a href="https //openakita.ai" <img src="https //img.shields.io/badge/🌐 Website openakita.ai orange?style=for the badge" alt="Official Website" height="28" / </a &nbsp; <a href="https //openakita.ai/download" <img src="https //img.shields.io/badge/📥 Download Desktop App blue?style=for the badge" alt="Download" height="28" / </a &nbsp; <a href="https //discord.gg/vFwxNVNH" <img src="https //img.shields.io/badge/💬 Discord Join Com |


## Key Files

### Manifests

- examples/plugins/echo-llm/README.md
- examples/plugins/github-mcp/README.md
- examples/plugins/lark-cli-tool/README.md
- examples/plugins/qdrant-memory/README.md
- examples/plugins/sqlite-memory/README.md
- examples/README.md
- docs/examples/README.md
- docs/README.md
- examples/plugins/echo-channel/README.md
- examples/plugins/hello-tool/README.md
- examples/plugins/message-logger/README.md
- examples/plugins/obsidian-kb/README.md
- examples/plugins/ollama-provider/README.md
- examples/plugins/translate-skill/README.md
- examples/plugins/whatsapp-channel/README.md
- mcps/README.md
- openakita-plugin-sdk/docs/README.md
- plugins/clip-sense/README.md
- skills/agent-browser/README.md
- AGENTS.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- apps/setup-center/AGENTS.md
- src/openakita/AGENTS.md
- skills/mcp-builder/scripts/requirements.txt
- specs/core-agent.md
- auth_api/requirements.txt
- prompts/selfcheck_system.md
- requirements.txt
- cloud/aliyun-feedback-function/requirements.txt
- identity/prompts/policies.md
- plugins/avatar-studio/requirements.txt
- plugins/excel-maker/requirements.txt
- plugins/happyhorse-video/requirements.txt
- plugins/omni-post/requirements.txt
- plugins/ppt-maker/requirements.txt
- plugins/word-maker/requirements.txt
- skills/slack-gif-creator/requirements.txt
- src/openakita/prompt/__init__.py
- src/openakita/prompt/budget.py
- src/openakita/prompt/builder.py


### Agent Instruction Files

- AGENTS.md
- apps/setup-center/AGENTS.md
- src/openakita/AGENTS.md
- prompts/selfcheck_system.md
- identity/prompts/policies.md
- src/openakita/prompt/__init__.py
- src/openakita/prompt/budget.py
- src/openakita/prompt/builder.py
- src/openakita/prompt/compact.py
- src/openakita/prompt/compiler.py
- src/openakita/prompt/models/anthropic.txt
- src/openakita/prompt/models/default.txt
- src/openakita/prompt/models/gemini.txt
- src/openakita/prompt/models/openai.txt
- src/openakita/prompt/modes/build_switch.txt


## Top Directories

| dir | count |
| --- | --- |
| skills | 972 |
| plugins | 772 |
| src | 601 |
| tests | 415 |
| apps | 246 |
| examples | 51 |
| docs | 46 |
| openakita-plugin-sdk | 35 |
| scripts | 31 |
| docs-site | 30 |
| identity | 25 |
| mcps | 24 |
| .github | 13 |
| cloud | 8 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 1731 |
| .md | 537 |
| .xsd | 195 |
| .yaml | 181 |
| .tsx | 121 |
| .json | 99 |
| .js | 66 |
| .ts | 62 |
| .txt | 62 |
| .ttf | 54 |
| .svg | 44 |
| [no-ext] | 27 |
| .css | 21 |
| .html | 20 |
| .xml | 19 |
| .docx | 10 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
