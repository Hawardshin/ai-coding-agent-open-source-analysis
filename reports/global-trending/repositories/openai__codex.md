# openai/codex

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/openai/codex |
| local path | sources/openai__codex |
| HEAD | d2f6d23 |
| stars/forks | 91749 / 13558 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-18T00:27:06Z |
| trendScore / priorityScore | 200 / 514 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Coding agent / software automation | 500 | sdk/python/examples/README.md, codex-rs/app-server-test-client/README.md, codex-cli/scripts/README.md |
| Developer tools / DX | 146 | sdk/python/examples/README.md, codex-rs/app-server-test-client/README.md, codex-cli/scripts/README.md |
| Cloud native / infrastructure | 113 | codex-cli/scripts/README.md, .devcontainer/README.md, codex-rs/linux-sandbox/README.md |
| Observability / evaluation | 86 | AGENTS.md, codex-rs/execpolicy/README.md, codex-rs/otel/README.md |
| AI agent / orchestration | 84 | codex-rs/app-server-client/README.md, AGENTS.md, README.md |
| MCP / agent interoperability | 57 | AGENTS.md, codex-rs/stdio-to-uds/README.md, codex-rs/tools/README.md |
| Security / supply chain | 23 | codex-rs/exec-server/README.md, codex-rs/network-proxy/README.md, codex-rs/rollout-trace/README.md |
| Database / data infrastructure | 15 | codex-rs/thread-store/README.md, codex-rs/Cargo.toml, codex-rs/analytics/Cargo.toml |
| RAG / retrieval / knowledge | 5 | codex-rs/exec-server/README.md, codex-rs/network-proxy/README.md, codex-rs/Cargo.toml |
| Data / ML platform | 3 | codex-rs/memories/README.md |
| Local LLM / inference | 3 | codex-rs/Cargo.toml |
| Frontend / app framework | 1 | sdk/typescript/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 4863 |
| manifests | 40 |
| docs | 170 |
| tests | 524 |
| ci/ops | 30 |
| spec artifacts | 41 |
| agent instruction files | 39 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Install using npm | Quickstart / Installing and running Codex CLI / Install using npm / Install using Homebrew / Using Codex with your ChatGPT plan / Docs | <p align="center" <strong Codex CLI</strong is a coding agent from OpenAI that runs locally on your computer. <p align="center" <img src="https //github.com/openai/codex/blob/main/.github/codex cli splash.png" alt="Codex CLI splash" width="80%" / </p </br If you want Codex in your code editor VS Code, Cursor, Windsurf , <a href="https //developers.openai.com/codex/ide" install in your IDE.</a </br If you want the desktop app experience, run <code codex app</code or visit <a href="https //chatgpt.com/codex?app landing page=true" the Codex App page</a . </br If you are looking for the <em cloud based agent</em from OpenAI, <strong Codex Web</strong , go to <a href="https //chatgpt.com/codex" c |


## Key Files

### Manifests

- sdk/python/examples/README.md
- codex-rs/app-server-test-client/README.md
- .github/workflows/README.md
- codex-cli/scripts/README.md
- codex-rs/app-server-client/README.md
- codex-rs/codex-client/README.md
- AGENTS.md
- codex-rs/tui/src/bottom_pane/AGENTS.md
- .devcontainer/README.md
- codex-rs/apply-patch/tests/fixtures/scenarios/README.md
- codex-rs/README.md
- codex-rs/thread-manager-sample/README.md
- README.md
- codex-rs/ansi-escape/README.md
- codex-rs/app-server-daemon/README.md
- codex-rs/app-server/README.md
- codex-rs/chatgpt/README.md
- codex-rs/codex-api/README.md
- codex-rs/config/src/loader/README.md
- codex-rs/core/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- codex-rs/tui/src/bottom_pane/AGENTS.md
- codex-rs/prompts/Cargo.toml
- codex-rs/prompts/src/goals_tests.rs
- codex-rs/prompts/src/permissions_instructions_tests.rs
- codex-rs/prompts/src/review_exit_tests.rs
- codex-rs/prompts/src/review_request_tests.rs
- codex-rs/prompts/BUILD.bazel
- codex-rs/prompts/src/agents.rs
- codex-rs/prompts/src/apply_patch.rs
- codex-rs/prompts/src/compact.rs
- codex-rs/prompts/src/goals.rs
- codex-rs/prompts/src/lib.rs
- codex-rs/prompts/src/permissions_instructions.rs
- codex-rs/prompts/src/realtime.rs
- codex-rs/prompts/src/review_exit.rs
- codex-rs/prompts/src/review_request.rs
- codex-rs/prompts/templates/agents/hierarchical.md
- codex-rs/prompts/templates/apply_patch_tool_instructions.md
- codex-rs/prompts/templates/compact/prompt.md


### Agent Instruction Files

- AGENTS.md
- codex-rs/tui/src/bottom_pane/AGENTS.md
- codex-rs/prompts/Cargo.toml
- codex-rs/prompts/src/goals_tests.rs
- codex-rs/prompts/src/permissions_instructions_tests.rs
- codex-rs/prompts/src/review_exit_tests.rs
- codex-rs/prompts/src/review_request_tests.rs
- codex-rs/prompts/BUILD.bazel
- codex-rs/prompts/src/agents.rs
- codex-rs/prompts/src/apply_patch.rs
- codex-rs/prompts/src/compact.rs
- codex-rs/prompts/src/goals.rs
- codex-rs/prompts/src/lib.rs
- codex-rs/prompts/src/permissions_instructions.rs
- codex-rs/prompts/src/realtime.rs


## Top Directories

| dir | count |
| --- | --- |
| codex-rs | 4490 |
| sdk | 112 |
| .github | 74 |
| scripts | 34 |
| patches | 29 |
| tools | 26 |
| .codex | 24 |
| docs | 15 |
| .devcontainer | 11 |
| third_party | 11 |
| codex-cli | 7 |
| .bazelignore | 1 |
| .bazelrc | 1 |
| .bazelversion | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .rs | 2152 |
| .ts | 580 |
| .snap | 543 |
| .txt | 443 |
| .json | 301 |
| .md | 170 |
| .toml | 144 |
| .bazel | 137 |
| .py | 128 |
| .sql | 39 |
| .yml | 38 |
| [no-ext] | 36 |
| .sh | 35 |
| .patch | 29 |
| .yaml | 15 |
| .build | 6 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
