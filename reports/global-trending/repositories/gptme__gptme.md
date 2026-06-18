# gptme/gptme

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/gptme/gptme |
| local path | sources/gptme__gptme |
| HEAD | 83dbacf |
| stars/forks | 4332 / 389 |
| language | Python |
| license |  |
| pushedAt | 2026-06-18T00:15:53Z |
| trendScore / priorityScore | 195 / 538 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | docs/lessons/README.md, AGENTS.md, webui/AGENTS.md |
| MCP / agent interoperability | 408 | AGENTS.md, README.md, docs/mcp.rst |
| Observability / evaluation | 357 | gptme/eval/dspy/README.md, AGENTS.md, README.md |
| Developer tools / DX | 291 | docs/lessons/README.md, gptme/eval/dspy/README.md, AGENTS.md |
| Frontend / app framework | 94 | docs/lessons/README.md, webui/AGENTS.md, gptme-extension/README.md |
| Database / data infrastructure | 82 | README.md, docs/agents.rst, docs/evals.rst |
| Cloud native / infrastructure | 66 | README.md, docker-compose.yml, docs/evals.rst |
| Coding agent / software automation | 57 | docs/lessons/README.md, README.md, webui/README.md |
| Security / supply chain | 53 | README.md, docs/agents.rst, docs/security.rst |
| RAG / retrieval / knowledge | 47 | README.md, docs/agents.rst, docs/examples.rst |
| Data / ML platform | 17 | gptme/eval/dspy/README.md, docs/evals.rst, tests/test_eval_behavioral_solutions.py |
| Local LLM / inference | 7 | README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Java/Kotlin |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1272 |
| manifests | 30 |
| docs | 129 |
| tests | 359 |
| ci/ops | 25 |
| spec artifacts | 14 |
| agent instruction files | 9 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | gptme.toml | 📚 Table of Contents / 📢 News / 🎥 Demos / 🌟 Features / 🛠 Tools / 🔌 Extensibility: Plugins, Skills & Lessons / gptme.toml / 🔗 Integrations: MCP & ACP / 🤖 Autonomous Agents / Create and run your own agent | <p align="center" <img src="https //gptme.org/media/logo.png" width=150 / </p <h1 align="center" gptme</h1 <p align="center" <i /ʤiː piː tiː miː/</i <br <sub <a href="https //gptme.org/docs/misc/acronyms.html" what does it stand for?</a </sub </p <! Links <p align="center" <a href="https //gptme.org/docs/getting started.html" Getting Started</a • <a href="https //gptme.org/downloads/" Downloads</a • <a href="https //gptme.org/" Website</a • <a href="https //gptme.org/docs/" Documentation</a </p <! Badges <p align="center" <a href="https //github.com/gptme/gptme/actions/workflows/build.yml" <img src="https //github.com/gptme/gptme/actions/workflows/build.yml/badge.svg" alt="Build Status" / </ |


## Key Files

### Manifests

- docs/lessons/README.md
- gptme/eval/dspy/README.md
- AGENTS.md
- webui/AGENTS.md
- gptme-extension/README.md
- README.md
- tauri/README.md
- webui/README.md
- webui/extension/README.md
- docs/Makefile
- docker-compose.yml
- Makefile
- pyproject.toml
- scripts/Dockerfile
- tauri/Makefile
- tauri/package.json
- webui/package.json
- webui/tsconfig.json
- webui/vite.config.ts
- gptme/lessons/skills/python-repl/requirements.txt


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- webui/AGENTS.md
- .github/workflows/benchmark.yml
- .github/workflows/eval.yml
- gptme/lessons/skills/python-repl/requirements.txt
- gptme/prompts/__init__.py
- gptme/prompts/architect.py
- gptme/prompts/chat_history.py
- gptme/prompts/context_cmd.py
- gptme/prompts/skills.py
- gptme/prompts/templates.py
- gptme/prompts/workspace.py
- tauri/e2e/test/specs/chat_flow.test.js
- tauri/e2e/test/specs/smoke.test.js


### Agent Instruction Files

- AGENTS.md
- webui/AGENTS.md
- gptme/prompts/__init__.py
- gptme/prompts/architect.py
- gptme/prompts/chat_history.py
- gptme/prompts/context_cmd.py
- gptme/prompts/skills.py
- gptme/prompts/templates.py
- gptme/prompts/workspace.py


## Top Directories

| dir | count |
| --- | --- |
| gptme | 409 |
| webui | 331 |
| tests | 274 |
| docs | 118 |
| tauri | 58 |
| scripts | 46 |
| .github | 19 |
| site | 3 |
| gptme-extension | 2 |
| .dockerignore | 1 |
| .env.example | 1 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |
| AGENTS.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 682 |
| .tsx | 170 |
| .ts | 124 |
| .md | 88 |
| .rst | 37 |
| .sh | 22 |
| .yml | 22 |
| .json | 21 |
| [no-ext] | 21 |
| .xml | 11 |
| .html | 8 |
| .js | 8 |
| .toml | 6 |
| .txt | 5 |
| .css | 4 |
| .svg | 4 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
