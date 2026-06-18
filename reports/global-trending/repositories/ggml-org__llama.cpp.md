# ggml-org/llama.cpp

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/ggml-org/llama.cpp |
| local path | sources/ggml-org__llama.cpp |
| HEAD | ebc1077 |
| stars/forks | 117045 / 19682 |
| language | C++ |
| license |  |
| pushedAt | 2026-06-17T21:27:57Z |
| trendScore / priorityScore | 184 / 506 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Local LLM / inference | 500 | examples/embedding/README.md, examples/eval-callback/README.md, examples/llama-eval/README.md |
| Developer tools / DX | 195 | docs/backend/snapdragon/README.md, examples/convert-llama2c-to-ggml/README.md, examples/deprecation-warning/README.md |
| Data / ML platform | 176 | examples/llama-eval/README.md, docs/backend/snapdragon/README.md, examples/convert-llama2c-to-ggml/README.md |
| RAG / retrieval / knowledge | 166 | examples/embedding/README.md, examples/retrieval/README.md, examples/deprecation-warning/README.md |
| Frontend / app framework | 106 | README.md, tools/ui/README.md, tools/ui/package.json |
| Cloud native / infrastructure | 102 | docs/backend/snapdragon/README.md, tools/cli/README.md, README.md |
| Observability / evaluation | 71 | examples/eval-callback/README.md, examples/llama-eval/README.md, docs/backend/snapdragon/README.md |
| AI agent / orchestration | 18 | AGENTS.md, README.md, CLAUDE.md |
| Database / data infrastructure | 12 | tools/llama-bench/README.md, tools/ui/README.md, tools/ui/docs/flows/database-flow.md |
| Coding agent / software automation | 8 | AGENTS.md, tools/ui/README.md, examples/llama-eval/llama-eval.py |
| Security / supply chain | 8 | examples/gguf-hash/README.md, common/jinja/README.md, docs/preset.md |
| MCP / agent interoperability | 6 | CLAUDE.md, tools/ui/docs/flows/mcp-flow.md, tools/ui/package.json |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin, Swift, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 2950 |
| manifests | 40 |
| docs | 134 |
| tests | 160 |
| ci/ops | 49 |
| spec artifacts | 12 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | llama.cpp | llama.cpp / Recent API changes / Hot topics / Quick start / Use a local model file / Or download and run a model directly from Hugging Face / Launch OpenAI-compatible API server / Description / Supported backends / Obtaining and quantizing models | llama.cpp ! llama https //raw.githubusercontent.com/ggml org/llama.brand/refs/heads/master/cover/llama cpp/cover llama cpp dark.svg ! License MIT https //img.shields.io/badge/license MIT blue.svg https //opensource.org/licenses/MIT ! Release https //img.shields.io/github/v/release/ggml org/llama.cpp https //github.com/ggml org/llama.cpp/releases ! Server https //github.com/ggml org/llama.cpp/actions/workflows/server.yml/badge.svg https //github.com/ggml org/llama.cpp/actions/workflows/server.yml ! Docker https //github.com/ggml org/llama.cpp/actions/workflows/docker.yml/badge.svg https //github.com/ggml org/llama.cpp/actions/workflows/docker.yml ! Winget https //github.com/ggml org/llama.cpp |


## Key Files

### Manifests

- examples/embedding/README.md
- examples/eval-callback/README.md
- examples/llama-eval/README.md
- examples/retrieval/README.md
- docs/backend/snapdragon/README.md
- examples/batched.swift/README.md
- examples/batched/README.md
- examples/convert-llama2c-to-ggml/README.md
- examples/debug/README.md
- examples/deprecation-warning/README.md
- examples/diffusion/README.md
- examples/gguf-hash/README.md
- examples/idle/README.md
- examples/llama.swiftui/README.md
- examples/lookahead/README.md
- examples/lookup/README.md
- examples/model-conversion/README.md
- examples/parallel/README.md
- examples/passkey/README.md
- examples/simple-chat/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- examples/model-conversion/requirements.txt
- scripts/snapdragon/qdc/requirements.txt
- requirements.txt
- tools/server/tests/requirements.txt
- scripts/jinja/requirements.txt
- tools/mtmd/requirements.txt
- tools/server/bench/requirements.txt
- tools/server/bench/speed-bench/requirements.txt
- tools/ui/docs/architecture/high-level-architecture-simplified.md
- tools/ui/docs/architecture/high-level-architecture.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| ggml | 1097 |
| tools | 789 |
| examples | 207 |
| src | 192 |
| models | 108 |
| conversion | 81 |
| tests | 78 |
| common | 71 |
| .github | 67 |
| scripts | 65 |
| docs | 58 |
| gguf-py | 26 |
| .devops | 24 |
| cmake | 12 |


## Extension Distribution

| ext | count |
| --- | --- |
| .cpp | 544 |
| .svelte | 281 |
| .ts | 273 |
| .h | 228 |
| .py | 196 |
| .cu | 184 |
| .comp | 160 |
| .cl | 142 |
| .md | 120 |
| .txt | 98 |
| .cuh | 74 |
| .yml | 66 |
| .sh | 65 |
| .hpp | 59 |
| .jinja | 57 |
| .c | 45 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
