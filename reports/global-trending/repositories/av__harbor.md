# av/harbor

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/av/harbor |
| local path | sources/av__harbor |
| HEAD | 4f3e97a |
| stars/forks | 3084 / 207 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T13:05:44Z |
| trendScore / priorityScore | 144 / 492 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 500 | docs/README.md, promptfoo/README.md, services/mcpforge/README.md |
| Local LLM / inference | 500 | docs/README.md, promptfoo/README.md, services/promptfoo/README.md |
| Developer tools / DX | 394 | docs/README.md, promptfoo/README.md, .agents/skills/bugbash/README.md |
| Observability / evaluation | 324 | services/promptfoo/examples/bias/README.md, services/promptfoo/examples/hello-promptfoo/README.md, services/promptfoo/examples/misguided/README.md |
| AI agent / orchestration | 270 | docs/README.md, .agents/skills/agent-integration-testing/README.md, .agents/skills/discipline/README.md |
| MCP / agent interoperability | 245 | services/mcpforge/README.md, boost/README.md, README.md |
| Coding agent / software automation | 211 | docs/README.md, AGENTS.md, README.md |
| Frontend / app framework | 141 | README.md, app/package.json, app/tsconfig.json |
| RAG / retrieval / knowledge | 124 | docs/README.md, README.md, docs/dify-sample-webrag.yml |
| Database / data infrastructure | 99 | services/mcpforge/README.md, docs/2.1.1-Frontend&colon-Open-WebUI.md, docs/2.1.10-Frontend&colon-Chat-Nio.md |
| Data / ML platform | 40 | boost/README.md, README.md, services/airllm/Dockerfile |
| Security / supply chain | 30 | services/mcpforge/README.md, tests/README.md, docs/2.1.1-Frontend&colon-Open-WebUI.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1996 |
| manifests | 40 |
| docs | 216 |
| tests | 122 |
| ci/ops | 48 |
| spec artifacts | 3 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Starts fully configured Open WebUI and Ollama | Starts fully configured Open WebUI and Ollama / Now, Open WebUI can do Web RAG and TTS/STT / News / Documentation / What can Harbor do? / All backends are pre-connected to Open WebUI / Host-native Metal/GPU inference on macOS / Set and remember args for llama.cpp / Run Codex against an explicit Harbor backend and model / Add Harbor Boost web search and URL-reading tools | https //github.com/user attachments/assets/e4897391 c5a8 4391 93c3 9f8b76155f11 ! GitHub Tag https //img.shields.io/github/v/tag/av/harbor https //github.com/av/harbor/releases ! GitHub repo size https //img.shields.io/github/repo size/av/harbor ! GitHub repo file or directory count https //img.shields.io/github/directory file count/av/harbor?type=file&extension=yml&label=compose%20files&color=orange ! GitHub language count https //img.shields.io/github/languages/count/av/harbor ! Visitors https //api.visitorbadge.io/api/visitors?path=av%2Fharbor&countColor=%23263759&style=flat https //visitorbadge.io/status?path=av%2Fharbor ! Discord https //img.shields.io/badge/Discord Harbor blue?logo=dis |


## Key Files

### Manifests

- services/promptfoo/examples/bias/README.md
- services/promptfoo/examples/hello-promptfoo/README.md
- services/promptfoo/examples/misguided/README.md
- services/promptfoo/examples/temp-test/README.md
- docs/README.md
- .agents/skills/agent-integration-testing/README.md
- promptfoo/README.md
- .agents/skills/anneal/README.md
- .agents/skills/bugbash/README.md
- .agents/skills/discipline/README.md
- .agents/skills/ideate/README.md
- .agents/skills/timeboxed-iterating/README.md
- services/mcpforge/README.md
- services/promptfoo/evals/hf/README.md
- services/promptfoo/README.md
- AGENTS.md
- tests/README.md
- app/README.md
- boost/README.md
- README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- services/agent/requirements.txt
- .claude/settings.json


### Agent Instruction Files

- AGENTS.md
- .claude/settings.json


## Top Directories

| dir | count |
| --- | --- |
| services | 1462 |
| docs | 162 |
| app | 148 |
| .scripts | 83 |
| tests | 31 |
| .agents | 29 |
| routines | 23 |
| opencode | 12 |
| shared | 7 |
| .github | 6 |
| skills | 4 |
| .claude | 1 |
| .coverage | 1 |
| .editorconfig | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .yml | 725 |
| .md | 214 |
| [no-ext] | 166 |
| .py | 157 |
| .env | 143 |
| .ts | 115 |
| .sh | 101 |
| .json | 81 |
| .tsx | 65 |
| .http | 39 |
| .woff2 | 38 |
| .yaml | 32 |
| .html | 22 |
| .js | 17 |
| .modelfile | 9 |
| .containerfile | 8 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
