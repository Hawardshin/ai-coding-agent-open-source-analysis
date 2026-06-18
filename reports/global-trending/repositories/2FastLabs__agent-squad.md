# 2FastLabs/agent-squad

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/2FastLabs/agent-squad |
| local path | sources/2FastLabs__agent-squad |
| HEAD | db10bf5 |
| stars/forks | 7661 / 721 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T08:40:49Z |
| trendScore / priorityScore | 159 / 450 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | examples/chat-chainlit-app/README.md, examples/chat-demo-app/README.md, examples/ecommerce-support-simulator/README.md |
| RAG / retrieval / knowledge | 129 | examples/chat-demo-app/README.md, examples/ecommerce-support-simulator/README.md, examples/text-2-structured-output/README.md |
| Local LLM / inference | 86 | examples/chat-chainlit-app/README.md, examples/chat-chainlit-app/requirements.txt, docs/src/content/docs/cookbook/examples/ollama-agent.mdx |
| Developer tools / DX | 73 | docs/README.md, examples/chat-demo-app/README.md, examples/chat-demo-app/ui/README.md |
| Security / supply chain | 51 | examples/chat-demo-app/README.md, examples/ecommerce-support-simulator/README.md, examples/ecommerce-support-simulator/package.json |
| Frontend / app framework | 49 | examples/chat-demo-app/ui/README.md, examples/ecommerce-support-simulator/README.md, examples/ecommerce-support-simulator/resources/ui/README.md |
| Observability / evaluation | 32 | examples/ecommerce-support-simulator/README.md, examples/langfuse-demo/readme.md, examples/langfuse-demo/requirements.txt |
| Database / data infrastructure | 27 | examples/ecommerce-support-simulator/README.md, examples/text-2-structured-output/README.md, examples/ecommerce-support-simulator/lambda/customerMessage/agents.ts |
| Cloud native / infrastructure | 16 | examples/text-2-structured-output/README.md, examples/text-2-structured-output/prompts.py, docs/src/content/docs/agents/built-in/lambda-agent.mdx |
| MCP / agent interoperability | 5 | examples/strands-agents-demo/main.py |
| Data / ML platform | 4 | CLAUDE.md, docs/src/content/docs/agents/overview.mdx, examples/chat-demo-app/lib/airlines.yaml |
| Coding agent / software automation | 1 | CLAUDE.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 366 |
| manifests | 35 |
| docs | 91 |
| tests | 42 |
| ci/ops | 12 |
| spec artifacts | 10 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Optional: Set up a virtual environment | 🔖 Features / What Is Agent Squad ❓ / 🏗️ High-level architecture flow diagram / ![](https://raw.githubusercontent.com/2fastlabs/agent-squad/main/img/new.png) Introducing SupervisorAgent: Agents Coordination / 💬 Demo App / 🎯 Examples & Quick Start / 📚 Deep Dives: Stories, Blogs & Podcasts / 🎙️ Podcast Discussions / TypeScript Version / Python Version | <h2 align="center" Agent Squad</h2 <p align="center" Flexible, lightweight open source framework for orchestrating multiple AI agents to handle complex conversations.</p <p align="center" <strong 📦 New Home </strong Agent Squad has moved! Previously hosted at <strong awslabs/agent squad</strong , this project is now maintained at <strong 2fastlabs/agent squad</strong .<br Please update your bookmarks, clone URLs, and dependencies accordingly. </p <p align="center" <a href="https //github.com/2fastlabs/agent squad" <img alt="GitHub Repo" src="https //img.shields.io/badge/GitHub Repo green.svg" / </a <a href="https //www.npmjs.com/package/agent squad" <img alt="npm" src="https //img.shields.i |


## Key Files

### Manifests

- docs/README.md
- examples/chat-chainlit-app/README.md
- examples/chat-demo-app/README.md
- examples/chat-demo-app/ui/README.md
- examples/ecommerce-support-simulator/README.md
- examples/ecommerce-support-simulator/resources/ui/README.md
- examples/text-2-structured-output/README.md
- python/README.md
- README.md
- typescript/README.md
- CLAUDE.md
- examples/strands-agents-demo/requirements.txt
- docs/package.json
- docs/tsconfig.json
- examples/chat-chainlit-app/requirements.txt
- examples/chat-demo-app/lambda/auth/package.json
- examples/chat-demo-app/package.json
- examples/chat-demo-app/tsconfig.json
- examples/chat-demo-app/ui/package.json
- examples/chat-demo-app/ui/tsconfig.json


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- examples/strands-agents-demo/requirements.txt
- examples/chat-chainlit-app/requirements.txt
- examples/fast-api-streaming/requirements.txt
- examples/langfuse-demo/requirements.txt
- examples/python/movie-production/requirements.txt
- examples/python/requirements.txt
- examples/python/travel-planner/requirements.txt
- examples/text-2-structured-output/requirements.txt
- .github/workflows/claude.yml


### Agent Instruction Files

- CLAUDE.md
- .github/workflows/claude.yml


## Top Directories

| dir | count |
| --- | --- |
| examples | 146 |
| python | 76 |
| docs | 69 |
| typescript | 53 |
| .github | 15 |
| .gitattributes | 1 |
| .gitignore | 1 |
| CLAUDE.md | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |
| README.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 95 |
| .ts | 86 |
| .md | 40 |
| .mdx | 35 |
| .json | 30 |
| [no-ext] | 15 |
| .yml | 14 |
| .js | 9 |
| .txt | 9 |
| .css | 5 |
| .tsx | 5 |
| .astro | 4 |
| .mjs | 4 |
| .ttf | 4 |
| .svg | 2 |
| .toml | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
