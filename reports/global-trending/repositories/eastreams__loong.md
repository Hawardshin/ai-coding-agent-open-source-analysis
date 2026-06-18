# eastreams/loong

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/eastreams/loong |
| local path | sources/eastreams__loong |
| HEAD | e68e32a |
| stars/forks | 640 / 104 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-17T02:12:56Z |
| trendScore / priorityScore | 136 / 393 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Security / supply chain | 114 | examples/README.md, docs/README.md, AGENTS.md |
| Developer tools / DX | 96 | docs/README.md, AGENTS.md, README.md |
| Observability / evaluation | 55 | examples/README.md, deploy/observability/README.md, Cargo.toml |
| AI agent / orchestration | 46 | examples/README.md, docs/references/README.md, AGENTS.md |
| Cloud native / infrastructure | 41 | examples/README.md, docs/README.md, README.md |
| Coding agent / software automation | 31 | README.md, patches/dialoguer-0.12.0/src/prompts/fuzzy_select.rs, patches/dialoguer-0.12.0/src/prompts/input.rs |
| MCP / agent interoperability | 19 | AGENTS.md, crates/app/skills/design-md/README.md, skills/design-md/README.md |
| Frontend / app framework | 14 | crates/app/skills/design-md/README.md, crates/app/skills/minimax-office/minimax-pdf/README.md, skills/design-md/README.md |
| Database / data infrastructure | 13 | crates/spec/config/security-scan-medium-balanced.json, docs/SECURITY.md, examples/policy/security-scan-medium-balanced.json |
| RAG / retrieval / knowledge | 12 | docs/README.md, docs/releases/support/README.md, AGENTS.md |
| Data / ML platform | 3 | examples/README.md, crates/app/skills/design-md/README.md, skills/design-md/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python, Rust, .NET |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 2391 |
| manifests | 35 |
| docs | 684 |
| tests | 160 |
| ci/ops | 10 |
| spec artifacts | 50 |
| agent instruction files | 12 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | 🐉 Loong - Rust Base for Vertical AI Agents | 🐉 Loong - Rust Base for Vertical AI Agents / Why Loong / Sponsors / Quick Start / Script Install (Recommended) / Debian / Ubuntu / Fedora / macOS / Or install via Cargo only (without onboard setup) / First Successful Flow | 🐉 Loong Rust Base for Vertical AI Agents <p align="center" <picture <source media=" prefers color scheme dark " srcset="./assets/logo/loong logo dark.png" / <source media=" prefers color scheme light " srcset="./assets/logo/loong logo light.png" / <img src="./assets/logo/loong logo light.png" alt="Loong" width="280" / </picture </p <p align="center" <strong <em "Originated from the East, here to benefit the world"</em </strong </p <p align="center" <a href="https //github.com/eastreams/loong/actions/workflows/ci.yml?branch=dev" <img src="https //img.shields.io/github/actions/workflow/status/eastreams/loong/ci.yml?branch=dev&label=build&style=flat square" alt="Build" / </a <a href="LICENSE M |


## Key Files

### Manifests

- examples/README.md
- docs/README.md
- docs/references/README.md
- docs/releases/README.md
- docs/releases/support/README.md
- AGENTS.md
- README.md
- site/README.md
- crates/app/skills/byted-web-search/README.md
- crates/app/skills/design-md/README.md
- crates/app/skills/minimax-office/minimax-pdf/README.md
- deploy/observability/README.md
- patches/dialoguer-0.12.0/README.md
- skills/byted-web-search/README.md
- skills/design-md/README.md
- skills/minimax-office/minimax-pdf/README.md
- CLAUDE.md
- crates/spec/Cargo.toml
- crates/loong-cli/Cargo.toml
- Cargo.toml


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- crates/spec/Cargo.toml
- crates/spec/config/security-scan-medium-balanced.json
- crates/spec/src/spec_execution/security_scan_eval.rs
- crates/spec/src/spec_execution/security_scan_policy.rs
- examples/spec/plugin-wasm-security-scan.json
- crates/app/src/prompt/mod.rs
- patches/dialoguer-0.12.0/src/prompts/confirm.rs
- patches/dialoguer-0.12.0/src/prompts/fuzzy_select.rs
- patches/dialoguer-0.12.0/src/prompts/input.rs
- patches/dialoguer-0.12.0/src/prompts/mod.rs
- patches/dialoguer-0.12.0/src/prompts/multi_select.rs
- patches/dialoguer-0.12.0/src/prompts/password.rs
- patches/dialoguer-0.12.0/src/prompts/select.rs
- patches/dialoguer-0.12.0/src/prompts/selection_cursor.rs
- patches/dialoguer-0.12.0/src/prompts/sort.rs
- crates/app/skills/design-md/examples/DESIGN.md
- crates/spec/config/approval-medium-balanced.json
- crates/spec/config/bridge-support-native-balanced.json


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- crates/app/src/prompt/mod.rs
- patches/dialoguer-0.12.0/src/prompts/confirm.rs
- patches/dialoguer-0.12.0/src/prompts/fuzzy_select.rs
- patches/dialoguer-0.12.0/src/prompts/input.rs
- patches/dialoguer-0.12.0/src/prompts/mod.rs
- patches/dialoguer-0.12.0/src/prompts/multi_select.rs
- patches/dialoguer-0.12.0/src/prompts/password.rs
- patches/dialoguer-0.12.0/src/prompts/select.rs
- patches/dialoguer-0.12.0/src/prompts/selection_cursor.rs
- patches/dialoguer-0.12.0/src/prompts/sort.rs


## Top Directories

| dir | count |
| --- | --- |
| crates | 1538 |
| skills | 538 |
| site | 109 |
| scripts | 49 |
| docs | 41 |
| patches | 40 |
| examples | 22 |
| .github | 18 |
| assets | 4 |
| deploy | 4 |
| runtime-plugins | 3 |
| .cargo | 1 |
| .coderabbit.yaml | 1 |
| .convention-engineering.json | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .rs | 1017 |
| .md | 576 |
| .xsd | 242 |
| .py | 165 |
| .mdx | 107 |
| .cs | 78 |
| .sh | 59 |
| .json | 28 |
| .xml | 26 |
| .toml | 22 |
| .yml | 17 |
| [no-ext] | 16 |
| .txt | 10 |
| .csproj | 4 |
| .html | 4 |
| .mjs | 4 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
