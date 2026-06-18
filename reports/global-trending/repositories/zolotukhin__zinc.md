# zolotukhin/zinc

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/zolotukhin/zinc |
| local path | sources/zolotukhin__zinc |
| HEAD | e76c44d |
| stars/forks | 405 / 17 |
| language | Zig |
| license |  |
| pushedAt | 2026-06-16T03:59:16Z |
| trendScore / priorityScore | 136 / 441 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Local LLM / inference | 500 | AGENTS.md, README.md, docs/BENCHMARKING.md |
| Data / ML platform | 222 | AGENTS.md, README.md, docs/SPEC.md |
| Developer tools / DX | 199 | AGENTS.md, README.md, docs/BENCHMARKING.md |
| AI agent / orchestration | 195 | AGENTS.md, docs/GPU_MEMORY_SCALING_PLAN.md, docs/SPEC.md |
| Coding agent / software automation | 187 | AGENTS.md, package.json, tools/opencode_eval.test.ts |
| Observability / evaluation | 169 | AGENTS.md, README.md, docs/BENCHMARKING.md |
| Cloud native / infrastructure | 61 | docs/GPU_MEMORY_SCALING_PLAN.md, tools/opencode_eval.test.ts, docs/cuda-backend.md |
| RAG / retrieval / knowledge | 26 | AGENTS.md, docs/SPEC.md, docs/TURBOQUANT_SPEC.md |
| MCP / agent interoperability | 9 | AGENTS.md, specs/005-apple-silicon-inference/plan.md, specs/005-apple-silicon-inference/tasks.md |
| Security / supply chain | 8 | docs/OPENCODE.md, .github/workflows/pr-review.yml, .github/workflows/socket.yml |
| Database / data infrastructure | 7 | docs/NVIDIA_GPU_REFERENCE.md, specs/001-zinc-inference-engine/plan.md, specs/002-microblog-zolotukhin-ai/plan.md |
| Frontend / app framework | 7 | AGENTS.md, specs/001-zinc-inference-engine/plan.md, specs/002-microblog-zolotukhin-ai/research.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, C/C++ |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 874 |
| manifests | 8 |
| docs | 222 |
| tests | 61 |
| ci/ops | 5 |
| spec artifacts | 44 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | ZINC — Zig INferenCe Engine | ZINC — Zig INferenCe Engine / Supported Platforms / Status vs llama.cpp / Start Here / On RDNA4 Linux, enable cooperative matrix / Verify GPU, shaders, and runtime / See which models fit this machine / Download a model / Run a prompt (--chat applies the model's chat template for instruct models) / Or open the chat UI in your browser | <p align="center" <img src="assets/zinc trademark new.png" alt="ZINC Logo" width="400" </p ZINC — Zig INferenCe Engine <p align="center" <a href="https //github.com/zolotukhin/zinc/actions/workflows/test.yml" <img src="https //github.com/zolotukhin/zinc/actions/workflows/test.yml/badge.svg" alt="CI Status" </a <a href="https //ziglang.org/download/" <img src="https //img.shields.io/badge/Zig 0.15.2 orange.svg?logo=zig&logoColor=white" alt="Zig Version" </a <a href="LICENSE" <img src="https //img.shields.io/badge/License MIT blue.svg" alt="License" </a <img src="https //img.shields.io/badge/platform linux%20%7C%20macOS lightgrey" alt="Platform" <a href="https //zolotukhin.ai/zinc" <img src="h |


## Key Files

### Manifests

- AGENTS.md
- README.md
- site/README.md
- package.json
- site/package.json
- site/tsconfig.json
- specs/003-decode-performance/checklists/requirements.md
- specs/004-openai-api-server/checklists/requirements.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- docs/SPEC.md
- docs/ROADMAP.md
- docs/superpowers/specs/2026-05-07-tool-calling-design.md
- specs/001-zinc-inference-engine/contracts/openai-api.md
- specs/001-zinc-inference-engine/data-model.md
- specs/001-zinc-inference-engine/plan.md
- specs/001-zinc-inference-engine/quickstart.md
- specs/001-zinc-inference-engine/research.md
- specs/001-zinc-inference-engine/spec.md
- specs/001-zinc-inference-engine/tasks.md
- specs/002-microblog-zolotukhin-ai/contracts/feed-spec.md
- specs/002-microblog-zolotukhin-ai/data-model.md
- specs/002-microblog-zolotukhin-ai/plan.md
- specs/002-microblog-zolotukhin-ai/quickstart.md
- specs/002-microblog-zolotukhin-ai/research.md
- specs/002-microblog-zolotukhin-ai/spec.md
- specs/002-microblog-zolotukhin-ai/tasks.md
- specs/003-decode-performance/checklists/requirements.md
- specs/003-decode-performance/data-model.md


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| src | 430 |
| site | 209 |
| loops | 59 |
| specs | 40 |
| docs | 25 |
| tools | 20 |
| scripts | 16 |
| .specify | 13 |
| writing | 11 |
| .github | 10 |
| .agents | 9 |
| research | 8 |
| benchmarks | 7 |
| tests | 4 |


## Extension Distribution

| ext | count |
| --- | --- |
| .md | 215 |
| .metal | 184 |
| .comp | 132 |
| .zig | 107 |
| .svg | 80 |
| .ts | 41 |
| .sh | 28 |
| .astro | 25 |
| .s | 10 |
| .yml | 9 |
| .json | 8 |
| .mjs | 8 |
| [no-ext] | 6 |
| .c | 4 |
| .txt | 4 |
| .html | 3 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
