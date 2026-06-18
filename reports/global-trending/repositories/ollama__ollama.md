# ollama/ollama

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/ollama/ollama |
| local path | sources/ollama__ollama |
| HEAD | 12e0437 |
| stars/forks | 174404 / 16664 |
| language | Go |
| license | MIT |
| pushedAt | 2026-06-17T23:39:53Z |
| trendScore / priorityScore | 174 / 497 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Local LLM / inference | 500 | api/examples/README.md, docs/README.md, AGENTS.md |
| Coding agent / software automation | 244 | README.md, docs/cli.mdx, docs/integrations/cline-cli.mdx |
| Cloud native / infrastructure | 171 | docs/README.md, README.md, x/imagegen/README.md |
| Developer tools / DX | 144 | app/README.md, README.md, x/imagegen/README.md |
| RAG / retrieval / knowledge | 141 | README.md, runner/README.md, llama/compat/README.md |
| AI agent / orchestration | 103 | AGENTS.md, README.md, CLAUDE.md |
| Data / ML platform | 97 | llama/README.md, README.md, llama/compat/README.md |
| Database / data infrastructure | 94 | README.md, docs/capabilities/embeddings.mdx, app/store/database_test.go |
| Security / supply chain | 72 | README.md, llm/llama_server_test.go, .github/workflows/test-llamacpp-update.yaml |
| Frontend / app framework | 44 | app/README.md, app/ui/app/package.json, app/ui/app/vite.config.ts |
| Observability / evaluation | 36 | README.md, cmd/bench/README.md, x/imagegen/mlx/README.md |
| MCP / agent interoperability | 23 | AGENTS.md, CLAUDE.md, docs/capabilities/web-search.mdx |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Go, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1168 |
| manifests | 27 |
| docs | 89 |
| tests | 284 |
| ci/ops | 6 |
| spec artifacts | 2 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Ollama | Ollama / Download / macOS / Windows / Linux / Docker / Libraries / Community / Get started / Coding | <p align="center" <a href="https //ollama.com" <img src="https //github.com/ollama/ollama/assets/3325447/0d0b44e2 8f4a 4e99 9b52 a5c1c741c8f7" alt="ollama" width="200"/ </a </p Ollama Start building with open models. Download macOS or download manually https //ollama.com/download/Ollama.dmg Windows or download manually https //ollama.com/download/OllamaSetup.exe Linux Manual install instructions https //docs.ollama.com/linux manual install Docker The official Ollama Docker image https //hub.docker.com/r/ollama/ollama ollama/ollama is available on Docker Hub. Libraries ollama python https //github.com/ollama/ollama python ollama js https //github.com/ollama/ollama js Community Discord https / |


## Key Files

### Manifests

- api/examples/README.md
- docs/README.md
- docs/tools/extract-examples/README.md
- AGENTS.md
- app/README.md
- integration/README.md
- llama/README.md
- README.md
- runner/README.md
- app/webview/README.md
- cmd/bench/README.md
- llama/compat/README.md
- x/imagegen/cmd/engine/README.md
- x/imagegen/mlx/README.md
- x/imagegen/README.md
- x/imagegen/tokenizer/README.md
- x/mlxrunner/mlx/include/mlx/c/README.md
- CLAUDE.md
- Dockerfile
- go.mod


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| x | 225 |
| app | 187 |
| template | 104 |
| model | 89 |
| cmd | 78 |
| server | 77 |
| convert | 73 |
| docs | 68 |
| integration | 25 |
| discover | 24 |
| llm | 19 |
| fs | 16 |
| scripts | 15 |
| llama | 14 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 730 |
| [no-ext] | 82 |
| .mdx | 55 |
| .json | 45 |
| .h | 44 |
| .tsx | 39 |
| .ts | 33 |
| .md | 26 |
| .gotmpl | 22 |
| .svg | 16 |
| .sh | 9 |
| .txt | 8 |
| .yaml | 7 |
| .c | 6 |
| .cmake | 5 |
| .m | 4 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
