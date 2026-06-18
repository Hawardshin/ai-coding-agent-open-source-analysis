# screenpipe/screenpipe

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/screenpipe/screenpipe |
| local path | sources/screenpipe__screenpipe |
| HEAD | b67578c |
| stars/forks | 19349 / 1841 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-18T00:15:07Z |
| trendScore / priorityScore | 165 / 501 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Developer tools / DX | 317 | ee/sdk/examples/electron-app/README.md, ee/sdk/examples/README.md, ee/sdk/examples/swift-app/README.md |
| Observability / evaluation | 283 | crates/screenpipe-audio-eval/evals/README.md, crates/screenpipe-meeting-eval/evals/README.md, crates/screenpipe-rfdetr-mlx/README.md |
| MCP / agent interoperability | 256 | packages/screenpipe-mcp/README.md, README.md, apps/screenpipe-app-tauri/e2e/README.md |
| Security / supply chain | 145 | ee/sdk/examples/electron-app/README.md, ee/sdk/examples/README.md, crates/screenpipe-audio-eval/evals/README.md |
| AI agent / orchestration | 122 | crates/screenpipe-audio-eval/evals/README.md, crates/screenpipe-core/assets/pipes/ai-prompt-journal/README.md, crates/screenpipe-meeting-eval/evals/README.md |
| Local LLM / inference | 88 | crates/screenpipe-core/assets/pipes/ai-prompt-journal/README.md, README.md, crates/screenpipe-rfdetr-mlx/README.md |
| Coding agent / software automation | 86 | README.md, crates/screenpipe-sync/README.md, scripts/dev-vm/README.md |
| Frontend / app framework | 79 | ee/sdk/examples/tauri-app/README.md, crates/screenpipe-core/assets/pipes/ai-prompt-journal/README.md, apps/screenpipe-app-tauri/e2e/README.md |
| Data / ML platform | 74 | crates/screenpipe-audio-eval/evals/README.md, apps/screenpipe-app-tauri/e2e/README.md, crates/screenpipe-sync/README.md |
| Database / data infrastructure | 47 | ee/sdk/examples/README.md, crates/screenpipe-audio-eval/evals/README.md, packages/screenpipe-mcp/README.md |
| Cloud native / infrastructure | 24 | crates/screenpipe-audio-eval/evals/README.md, docs/single-click-summaries-spec.md, apps/screenpipe-app-tauri/e2e/specs/meeting-note-bottom-click.spec.ts |
| RAG / retrieval / knowledge | 9 | ee/sdk/examples/swift-app/README.md, crates/screenpipe-audio-eval/evals/README.md, crates/screenpipe-audio-eval/Cargo.toml |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Rust, Swift, C/C++ |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1844 |
| manifests | 40 |
| docs | 140 |
| tests | 339 |
| ci/ops | 28 |
| spec artifacts | 50 |
| agent instruction files | 7 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | news / what is this? / install / specs / sdk / Contributing / Translations / About screenpipe / Who screenpipe is for / Platform support | <img width="1500" height="500" alt="image" src="https //github.com/user attachments/assets/058a44b8 fcad 4a37 92d8 830167dbd400" / <p align="center" <a href ="https //screenpi.pe" <img src="https //github.com/user attachments/assets/d3b1de26 c3c0 4c84 b9c4 b03213b97a30" alt="logo" width="200" </a </p <h1 align="center" screenpipe YC S26 </h1 <p align="center" AI that knows what you've seen, said, or heard.</p <p align="center" Records everything you do, say, hear 24/7, local, private, secure</p <p align="center" <a align="center" href="https //trendshift.io/repositories/20386" target=" blank" <img align="center" src="https //trendshift.io/api/badge/repositories/20386" alt="screenpipe%2Fscree |


## Key Files

### Manifests

- ee/sdk/examples/electron-app/README.md
- ee/sdk/examples/README.md
- ee/sdk/examples/swift-app/README.md
- ee/sdk/examples/tauri-app/README.md
- crates/screenpipe-audio-eval/evals/README.md
- crates/screenpipe-core/assets/pipes/ai-prompt-journal/README.md
- crates/screenpipe-meeting-eval/evals/README.md
- packages/cli/npm-e2e/README.md
- packages/screenpipe-mcp/README.md
- ee/README.md
- README.md
- translated_readmes/README.md
- apps/screenpipe-app-tauri/e2e/mock-updates/README.md
- apps/screenpipe-app-tauri/e2e/README.md
- apps/screenpipe-app-tauri/README.md
- crates/screenpipe-audio/README.md
- crates/screenpipe-engine/README.md
- crates/screenpipe-rfdetr-mlx/README.md
- crates/screenpipe-sync/README.md
- ee/sdk/README.md


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- apps/screenpipe-app-tauri/e2e/specs/meeting-note-bottom-click.spec.ts
- apps/screenpipe-app-tauri/e2e/specs/pipes-mcp-connections.spec.ts
- .github/workflows/benchmark.yml
- apps/screenpipe-app-tauri/e2e/specs/api-key-cold-spawn.spec.ts
- apps/screenpipe-app-tauri/e2e/specs/api-search-stress.spec.ts
- apps/screenpipe-app-tauri/e2e/specs/api.spec.ts
- apps/screenpipe-app-tauri/e2e/specs/app-lifecycle.spec.ts
- apps/screenpipe-app-tauri/e2e/specs/artifacts-api.spec.ts
- apps/screenpipe-app-tauri/e2e/specs/audio-fallback.spec.ts
- apps/screenpipe-app-tauri/e2e/specs/brain-section.spec.ts
- apps/screenpipe-app-tauri/e2e/specs/chat-composer-isolation.spec.ts
- apps/screenpipe-app-tauri/e2e/specs/chat-newchat-duplicate.spec.ts
- apps/screenpipe-app-tauri/e2e/specs/chat-parallel-jobs-duplicate.spec.ts
- apps/screenpipe-app-tauri/e2e/specs/chat-prefill-duplicate.spec.ts
- apps/screenpipe-app-tauri/e2e/specs/chat-settings-background-stream.spec.ts
- apps/screenpipe-app-tauri/e2e/specs/chat-sidebar-stub-dedup.spec.ts
- apps/screenpipe-app-tauri/e2e/specs/chat-source-file-preview.spec.ts
- apps/screenpipe-app-tauri/e2e/specs/chat-streaming-performance.spec.ts
- apps/screenpipe-app-tauri/e2e/specs/chat-switch-context-loss.spec.ts


### Agent Instruction Files

- CLAUDE.md
- .claude/skills/screenpipe-cli/SKILL.md
- .claude/skills/release/SKILL.md
- .claude/skills/screenpipe-api/SKILL.md
- .claude/skills/screenpipe-health/SKILL.md
- .claude/skills/screenpipe-logs/SKILL.md
- .claude/skills/screenpipe-tauri/SKILL.md


## Top Directories

| dir | count |
| --- | --- |
| crates | 755 |
| apps | 669 |
| packages | 137 |
| ee | 110 |
| docs | 71 |
| .github | 58 |
| translated_readmes | 7 |
| .claude | 6 |
| scripts | 6 |
| .devcontainer | 5 |
| ci | 2 |
| .cargo | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .rs | 678 |
| .ts | 368 |
| .tsx | 228 |
| .sql | 101 |
| .md | 77 |
| .json | 57 |
| .mdx | 53 |
| .toml | 46 |
| .svg | 39 |
| .js | 37 |
| .mjs | 29 |
| .yml | 28 |
| .sh | 26 |
| [no-ext] | 22 |
| .swift | 13 |
| .wav | 10 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
