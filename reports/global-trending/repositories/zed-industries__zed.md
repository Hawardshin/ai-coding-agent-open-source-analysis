# zed-industries/zed

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/zed-industries/zed |
| local path | sources/zed-industries__zed |
| HEAD | 362035d |
| stars/forks | 85449 / 9119 |
| language | Rust |
| license | NOASSERTION |
| pushedAt | 2026-06-17T23:28:51Z |
| trendScore / priorityScore | 151 / 423 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Developer tools / DX | 155 | docs/AGENTS.md, docs/README.md, crates/cli/README.md |
| AI agent / orchestration | 114 | docs/AGENTS.md, crates/agent_skills/README.md, crates/eval_cli/README.md |
| Observability / evaluation | 49 | crates/gpui/examples/README.md, crates/eval_cli/README.md, crates/agent_ui/Cargo.toml |
| Coding agent / software automation | 29 | crates/terminal_view/README.md, docs/src/ai/agents.md, Cargo.toml |
| Database / data infrastructure | 19 | crates/collab/README.md, crates/collab/Cargo.toml |
| MCP / agent interoperability | 12 | docs/AGENTS.md, docs/src/ai/agents.md, .factory/prompts/crash/investigate.md |
| Cloud native / infrastructure | 10 | docs/README.md, crates/eval_cli/README.md, .cloudflare/README.md |
| Security / supply chain | 9 | crates/agent_skills/README.md, Cargo.toml, compose.yml |
| Local LLM / inference | 4 | Cargo.toml |
| Frontend / app framework | 3 | crates/agent_skills/README.md, crates/gpui/README.md |
| Data / ML platform | 2 | docs/README.md, crates/eval_cli/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python, Rust, C/C++ |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 3812 |
| manifests | 40 |
| docs | 289 |
| tests | 110 |
| ci/ops | 58 |
| spec artifacts | 18 |
| agent instruction files | 15 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Zed | Zed / Installation / Developing Zed / Contributing / Licensing / Sponsorship | Zed ! Zed https //img.shields.io/endpoint?url=https //raw.githubusercontent.com/zed industries/zed/main/assets/badge/v0.json https //zed.dev ! CI https //github.com/zed industries/zed/actions/workflows/run tests.yml/badge.svg https //github.com/zed industries/zed/actions/workflows/run tests.yml Welcome to Zed, a high performance, multiplayer code editor from the creators of Atom https //github.com/atom/atom and Tree sitter https //github.com/tree sitter/tree sitter . Installation On macOS, Linux, and Windows you can download Zed directly https //zed.dev/download or install Zed via your local package manager macOS https //zed.dev/docs/installation macos / Linux https //zed.dev/docs/linux inst |


## Key Files

### Manifests

- docs/AGENTS.md
- crates/gpui/examples/README.md
- docs/README.md
- crates/agent_skills/README.md
- crates/cli/README.md
- crates/eval_cli/README.md
- crates/eval_utils/README.md
- .cloudflare/README.md
- crates/inspector_ui/README.md
- extensions/README.md
- extensions/test-extension/README.md
- README.md
- crates/collab/README.md
- crates/db/README.md
- crates/extension_api/README.md
- crates/gpui/README.md
- crates/icons/README.md
- crates/livekit_api/vendored/protocol/README.md
- crates/schema_generator/README.md
- crates/terminal_view/README.md


### Spec / Docs / Prompt Artifacts

- docs/AGENTS.md
- docs/src/ai/agents.md
- .factory/prompts/crash/fix.md
- .factory/prompts/crash/investigate.md
- .factory/prompts/crash/link-issues.md
- assets/prompts/content_prompt_v2.hbs
- assets/prompts/content_prompt.hbs
- assets/prompts/terminal_assistant_prompt.hbs
- crates/agent_settings/src/prompts/compaction_prompt.txt
- crates/agent_settings/src/prompts/summarize_thread_detailed_prompt.txt
- crates/agent_settings/src/prompts/summarize_thread_prompt.txt
- crates/edit_prediction_cli/src/prompts/qa.md
- crates/edit_prediction_cli/src/prompts/repair.md
- crates/edit_prediction_cli/src/prompts/teacher_multi_region.md
- crates/edit_prediction_cli/src/prompts/teacher.md
- docs/src/tasks.md
- crates/agent/src/tools/evals/fixtures/zode/prompt.md
- .zed/tasks.json


### Agent Instruction Files

- docs/AGENTS.md
- docs/src/ai/agents.md
- .factory/prompts/crash/fix.md
- .factory/prompts/crash/investigate.md
- .factory/prompts/crash/link-issues.md
- assets/prompts/content_prompt_v2.hbs
- assets/prompts/content_prompt.hbs
- assets/prompts/terminal_assistant_prompt.hbs
- crates/agent_settings/src/prompts/compaction_prompt.txt
- crates/agent_settings/src/prompts/summarize_thread_detailed_prompt.txt
- crates/agent_settings/src/prompts/summarize_thread_prompt.txt
- crates/edit_prediction_cli/src/prompts/qa.md
- crates/edit_prediction_cli/src/prompts/repair.md
- crates/edit_prediction_cli/src/prompts/teacher_multi_region.md
- crates/edit_prediction_cli/src/prompts/teacher.md


## Top Directories

| dir | count |
| --- | --- |
| crates | 2771 |
| assets | 466 |
| docs | 219 |
| script | 125 |
| .github | 53 |
| tooling | 51 |
| extensions | 45 |
| nix | 21 |
| .factory | 8 |
| .cloudflare | 5 |
| legal | 4 |
| .cargo | 3 |
| .zed | 3 |
| .agents | 2 |


## Extension Distribution

| ext | count |
| --- | --- |
| .rs | 1846 |
| .svg | 413 |
| .json | 361 |
| .toml | 296 |
| .md | 271 |
| .scm | 149 |
| [no-ext] | 118 |
| .wit | 77 |
| .yml | 55 |
| .txt | 26 |
| .proto | 25 |
| .nix | 16 |
| .ps1 | 16 |
| .py | 16 |
| .sh | 14 |
| .diff | 13 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
