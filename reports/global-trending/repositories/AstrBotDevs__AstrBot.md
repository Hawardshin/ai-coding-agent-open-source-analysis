# AstrBotDevs/AstrBot

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/AstrBotDevs/AstrBot |
| local path | sources/AstrBotDevs__AstrBot |
| HEAD | 2c8f38c |
| stars/forks | 34851 / 2403 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T16:23:06Z |
| trendScore / priorityScore | 182 / 483 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 475 | README.md, pyproject.toml, docs/en/providers/agent-runners.md |
| Cloud native / infrastructure | 290 | README.md, .github/copilot-instructions.md, compose.yml |
| Frontend / app framework | 169 | dashboard/src/components/folder/README.md, docs/package.json, .github/copilot-instructions.md |
| MCP / agent interoperability | 86 | README.md, pyproject.toml, requirements.txt |
| Developer tools / DX | 79 | README.md, .github/copilot-instructions.md, dashboard/package.json |
| Security / supply chain | 55 | README.md, docs/en/deploy/astrbot/kubernetes.md, docs/en/providers/agent-runners/coze.md |
| Database / data infrastructure | 24 | docs/en/deploy/astrbot/kubernetes.md, docs/en/use/astrbot-agent-sandbox.md, docs/zh/deploy/astrbot/kubernetes.md |
| RAG / retrieval / knowledge | 24 | README.md, pyproject.toml, requirements.txt |
| Local LLM / inference | 15 | README.md, docs/.vitepress/config.mjs, docs/en/deploy/astrbot/compshare.md |
| Data / ML platform | 6 | tests/unit/test_astr_main_agent.py, docs/en/deploy/astrbot/compshare.md, docs/en/dev/star/plugin-publish.md |
| Coding agent / software automation | 5 | .github/workflows/codeql.yml, docs/.vitepress/theme/components/ArticleShare.vue, docs/.vitepress/theme/components/NotFound.vue |
| Observability / evaluation | 3 | docs/pnpm-lock.yaml |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1476 |
| manifests | 17 |
| docs | 426 |
| tests | 143 |
| ci/ops | 26 |
| spec artifacts | 2 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Key Features / Quick Start / One-Click Deployment / Docker Deployment / Deploy on RainYun / Desktop Application Deployment / Launcher Deployment / Deploy on Replit / AUR / Supported Messaging Platforms | ! astrbot github banner v2 light 0405 副本 https //github.com/user attachments/assets/36fb04e4 cc75 4454 bd8b 049d11aa86f9 <div align="center" <a href="https //github.com/AstrBotDevs/AstrBot/blob/master/README zh.md" 简体中文</a ｜ <a href="https //github.com/AstrBotDevs/AstrBot/blob/master/README zh TW.md" 繁體中文</a ｜ <a href="https //github.com/AstrBotDevs/AstrBot/blob/master/README ja.md" 日本語</a ｜ <a href="https //github.com/AstrBotDevs/AstrBot/blob/master/README fr.md" Français</a ｜ <a href="https //github.com/AstrBotDevs/AstrBot/blob/master/README ru.md" Русский</a <br <div <a href="https //trendshift.io/repositories/21369" target=" blank" <img src="https //trendshift.io/api/badge/repositories/2 |


## Key Files

### Manifests

- docs/README.md
- dashboard/README.md
- README.md
- astrbot/core/star/README.md
- dashboard/src/components/folder/README.md
- docs/package.json
- compose.yml
- dashboard/package.json
- dashboard/tsconfig.json
- dashboard/vite.config.ts
- Dockerfile
- Makefile
- pyproject.toml
- requirements.txt
- docs/en/deploy/astrbot/package.md
- docs/zh/deploy/astrbot/package.md
- dashboard/tsconfig.vite-config.json


### Spec / Docs / Prompt Artifacts

- .github/copilot-instructions.md
- requirements.txt


### Agent Instruction Files

- .github/copilot-instructions.md


## Top Directories

| dir | count |
| --- | --- |
| astrbot | 482 |
| dashboard | 384 |
| docs | 225 |
| changelogs | 184 |
| tests | 135 |
| .github | 20 |
| k8s | 10 |
| scripts | 6 |
| openspec | 2 |
| .dockerignore | 1 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |
| .python-version | 1 |
| CODE_OF_CONDUCT.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 591 |
| .md | 402 |
| .vue | 157 |
| .json | 140 |
| .ts | 59 |
| .yml | 20 |
| .yaml | 19 |
| .js | 17 |
| .scss | 16 |
| .mjs | 13 |
| [no-ext] | 11 |
| .svg | 8 |
| .html | 5 |
| .sh | 5 |
| .css | 4 |
| .txt | 3 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
