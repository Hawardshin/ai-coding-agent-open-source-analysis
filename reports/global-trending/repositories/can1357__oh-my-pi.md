# can1357/oh-my-pi

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/can1357/oh-my-pi |
| local path | sources/can1357__oh-my-pi |
| HEAD | 7251ca1 |
| stars/forks | 13165 / 1121 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-18T00:26:03Z |
| trendScore / priorityScore | 172 / 508 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | packages/coding-agent/examples/custom-tools/README.md, packages/coding-agent/examples/extensions/README.md, packages/coding-agent/examples/hooks/README.md |
| MCP / agent interoperability | 299 | packages/coding-agent/examples/sdk/README.md, packages/coding-agent/README.md, AGENTS.md |
| Developer tools / DX | 223 | packages/coding-agent/examples/extensions/README.md, packages/coding-agent/examples/hooks/README.md, packages/coding-agent/examples/README.md |
| Cloud native / infrastructure | 145 | infra/docs/README.md, packages/agent/README.md, packages/coding-agent/README.md |
| Security / supply chain | 136 | packages/coding-agent/examples/sdk/README.md, infra/docs/README.md, packages/agent/README.md |
| Observability / evaluation | 107 | packages/agent/README.md, AGENTS.md, README.md |
| Database / data infrastructure | 76 | AGENTS.md, python/robomp/AGENTS.md, README.md |
| Coding agent / software automation | 63 | packages/coding-agent/examples/extensions/README.md, docs/skills/examples/mini-marketplace/README.md, packages/coding-agent/README.md |
| Local LLM / inference | 42 | README.md, packages/ai/README.md, packages/catalog/README.md |
| Data / ML platform | 40 | packages/coding-agent/README.md, packages/snapcompact/README.md, packages/swarm-extension/README.md |
| Frontend / app framework | 28 | python/robomp/AGENTS.md, packages/ai/README.md, packages/collab-web/README.md |
| RAG / retrieval / knowledge | 13 | AGENTS.md, README.md, packages/mnemopi/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 4168 |
| manifests | 40 |
| docs | 428 |
| tests | 1455 |
| ci/ops | 10 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | zsh — add to ~/.zshrc (or write the output into a file on your $fpath) | Install / Shell completions / zsh — add to ~/.zshrc (or write the output into a file on your $fpath) / bash — add to ~/.bashrc / fish / Every tool, _benchmaxxed_. / The Pi _you love_, with **batteries included**. / 01 · Code execution w/ tool-calling / 02 · LSP wired into every write / 03 · Drives a real debugger | <p align="center" <img src="https //github.com/can1357/oh my pi/blob/main/assets/hero.png?raw=true" alt="omp" </p <p align="center" <strong A coding agent with the IDE wired in.</strong <strong <a href="https //omp.sh" omp.sh</a </strong </p <p align="center" <a href="https //www.npmjs.com/package/@oh my pi/pi coding agent" <img src="https //img.shields.io/npm/v/@oh my pi/pi coding agent?style=flat&colorA=222222&colorB=CB3837" alt="npm version" </a <a href="https //github.com/can1357/oh my pi/blob/main/packages/coding agent/CHANGELOG.md" <img src="https //img.shields.io/badge/changelog keep E05735?style=flat&colorA=222222" alt="Changelog" </a <a href="https //github.com/can1357/oh my pi/acti |


## Key Files

### Manifests

- packages/coding-agent/examples/custom-tools/README.md
- packages/coding-agent/examples/extensions/README.md
- packages/coding-agent/examples/hooks/README.md
- packages/coding-agent/examples/README.md
- packages/coding-agent/examples/sdk/README.md
- docs/skills/examples/hello-extension/README.md
- docs/skills/examples/mini-marketplace/README.md
- docs/skills/examples/safety-hook/README.md
- packages/coding-agent/test/fixtures/apply-patch/scenarios/README.md
- infra/docs/README.md
- packages/agent/README.md
- packages/coding-agent/README.md
- AGENTS.md
- python/robomp/AGENTS.md
- README.md
- crates/brush-builtins-vendored/README.md
- crates/brush-core-vendored/README.md
- packages/ai/README.md
- packages/catalog/README.md
- packages/collab-web/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- python/robomp/AGENTS.md
- docs/toolconv/gemini.md
- packages/ai/src/dialect/gemini.md
- packages/coding-agent/src/prompts/tools/inspect-image-system.md
- packages/coding-agent/src/prompts/tools/inspect-image.md
- docs/tools/eval.md
- packages/agent/src/compaction/prompts/auto-handoff-threshold-focus.md
- packages/agent/src/compaction/prompts/branch-summary-context.md
- packages/agent/src/compaction/prompts/branch-summary-preamble.md
- packages/agent/src/compaction/prompts/branch-summary.md
- packages/agent/src/compaction/prompts/compaction-short-summary.md
- packages/agent/src/compaction/prompts/compaction-summary-context.md
- packages/agent/src/compaction/prompts/compaction-summary.md
- packages/agent/src/compaction/prompts/compaction-turn-prefix.md
- packages/agent/src/compaction/prompts/compaction-update-summary.md
- packages/agent/src/compaction/prompts/file-operations.md
- packages/agent/src/compaction/prompts/handoff-document.md
- packages/agent/src/compaction/prompts/summarization-system.md
- packages/coding-agent/src/commit/agentic/prompts/analyze-file.md


### Agent Instruction Files

- AGENTS.md
- python/robomp/AGENTS.md
- docs/toolconv/gemini.md
- packages/ai/src/dialect/gemini.md
- packages/coding-agent/src/prompts/tools/inspect-image-system.md
- packages/coding-agent/src/prompts/tools/inspect-image.md
- packages/agent/src/compaction/prompts/auto-handoff-threshold-focus.md
- packages/agent/src/compaction/prompts/branch-summary-context.md
- packages/agent/src/compaction/prompts/branch-summary-preamble.md
- packages/agent/src/compaction/prompts/branch-summary.md
- packages/agent/src/compaction/prompts/compaction-short-summary.md
- packages/agent/src/compaction/prompts/compaction-summary-context.md
- packages/agent/src/compaction/prompts/compaction-summary.md
- packages/agent/src/compaction/prompts/compaction-turn-prefix.md
- packages/agent/src/compaction/prompts/compaction-update-summary.md


## Top Directories

| dir | count |
| --- | --- |
| packages | 3438 |
| crates | 387 |
| docs | 119 |
| python | 118 |
| scripts | 54 |
| .github | 14 |
| infra | 8 |
| .omp | 6 |
| assets | 2 |
| .fallowrc.jsonc | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| AGENTS.md | 1 |
| biome.json | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 2764 |
| .md | 421 |
| .rs | 243 |
| .json | 176 |
| .py | 160 |
| .txt | 99 |
| .tsx | 91 |
| .toml | 82 |
| .cmd | 20 |
| .raw | 20 |
| .yml | 13 |
| [no-ext] | 12 |
| .css | 9 |
| .sh | 9 |
| .js | 6 |
| .min | 6 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
