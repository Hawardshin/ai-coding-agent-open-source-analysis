# optave/ops-codegraph-tool

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/optave/ops-codegraph-tool |
| local path | sources/optave__ops-codegraph-tool |
| HEAD | 8b6ebe4 |
| stars/forks | 69 / 14 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-18T00:13:01Z |
| trendScore / priorityScore | 176 / 465 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Observability / evaluation | 196 | docs/benchmarks/README.md, README.md, CLAUDE.md |
| AI agent / orchestration | 172 | docs/benchmarks/README.md, docs/examples/claude-code-hooks/README.md, docs/examples/claude-code-skills/README.md |
| MCP / agent interoperability | 158 | docs/benchmarks/README.md, docs/examples/claude-code-skills/README.md, README.md |
| Developer tools / DX | 135 | docs/benchmarks/README.md, docs/examples/claude-code-hooks/README.md, README.md |
| RAG / retrieval / knowledge | 97 | README.md, CLAUDE.md, docs/examples/CLI.md |
| Coding agent / software automation | 90 | docs/examples/claude-code-hooks/README.md, docs/examples/claude-code-skills/README.md, README.md |
| Data / ML platform | 47 | docs/examples/claude-code-skills/README.md, README.md, CLAUDE.md |
| Database / data infrastructure | 42 | docs/examples/claude-code-skills/README.md, README.md, CLAUDE.md |
| Security / supply chain | 38 | README.md, CLAUDE.md, docs/guides/ai-agent-guide.md |
| Frontend / app framework | 33 | docs/benchmarks/README.md, docs/examples/CLI.md, docs/benchmarks/TOKEN-SAVINGS.md |
| Cloud native / infrastructure | 7 | README.md, CLAUDE.md, tests/benchmarks/resolution/fixtures/hcl/expected-edges.json |
| Local LLM / inference | 1 | README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go, Java/Kotlin, Swift |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1201 |
| manifests | 15 |
| docs | 115 |
| tests | 592 |
| ci/ops | 12 |
| spec artifacts | 44 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | The Problem / What Codegraph Does / Why it matters / Feature comparison / What makes codegraph different / 🚀 Quick Start / For AI agents (primary use case) / For developers / ✨ Features / 📦 Commands | <p align="center" <img src="https //img.shields.io/badge/codegraph dependency%20intelligence blue?style=for the badge&logo=graphql&logoColor=white" alt="codegraph" / </p <h1 align="center" codegraph</h1 <p align="center" <strong Give your AI the map before it starts exploring.</strong </p <p align="center" <a href="https //www.npmjs.com/package/@optave/codegraph" <img src="https //img.shields.io/npm/v/@optave/codegraph?style=flat square&logo=npm&logoColor=white&label=npm" alt="npm version" / </a <a href="https //github.com/optave/ops codegraph tool/blob/main/LICENSE" <img src="https //img.shields.io/github/license/optave/ops codegraph tool?style=flat square&logo=opensourceinitiative&logoColo |


## Key Files

### Manifests

- docs/benchmarks/README.md
- docs/examples/claude-code-hooks/README.md
- docs/examples/claude-code-skills/README.md
- README.md
- CLAUDE.md
- tests/benchmarks/resolution/fixtures/java/Makefile
- Cargo.toml
- package.json
- tsconfig.json
- crates/codegraph-core/Cargo.toml
- crates/codegraph-core/package.json
- tests/parsers/go.test.ts
- crates/codegraph-core/src/extractors/go.rs
- src/ast-analysis/rules/go.ts
- src/extractors/go.ts


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- .github/workflows/benchmark.yml
- .github/workflows/claude.yml
- docs/architecture/decisions/001-dual-engine-architecture.md
- docs/roadmap/ROADMAP.md
- .claude/.gitignore
- .claude/settings.json
- .claude/skills/create-skill/scripts/smoke-test-skill.sh
- .claude/skills/test-health/SKILL.md
- .claude/hooks/check-readme.sh
- .claude/hooks/commitlint-check.js
- .claude/hooks/commitlint-local.sh
- .claude/hooks/enrich-context.sh
- .claude/hooks/guard-git.sh
- .claude/hooks/guard-pr-body.sh
- .claude/hooks/lint-staged.sh
- .claude/hooks/post-git-ops.sh
- .claude/hooks/pre-commit-checks.js
- .claude/hooks/pre-commit.sh
- .claude/hooks/snapshot-pre-bash.sh


### Agent Instruction Files

- CLAUDE.md
- .github/workflows/claude.yml
- .claude/.gitignore
- .claude/settings.json
- .claude/skills/create-skill/scripts/smoke-test-skill.sh
- .claude/skills/test-health/SKILL.md
- .claude/hooks/check-readme.sh
- .claude/hooks/commitlint-check.js
- .claude/hooks/commitlint-local.sh
- .claude/hooks/enrich-context.sh
- .claude/hooks/guard-git.sh
- .claude/hooks/guard-pr-body.sh
- .claude/hooks/lint-staged.sh
- .claude/hooks/post-git-ops.sh
- .claude/hooks/pre-commit-checks.js


## Top Directories

| dir | count |
| --- | --- |
| tests | 592 |
| src | 322 |
| crates | 82 |
| docs | 46 |
| .claude | 39 |
| generated | 38 |
| scripts | 35 |
| .github | 18 |
| .husky | 3 |
| .codegraphrc.example.json | 1 |
| .codegraphrc.json | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .greptile | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 559 |
| .js | 124 |
| .json | 111 |
| .md | 104 |
| .rs | 84 |
| .sh | 33 |
| .yml | 17 |
| .mjs | 15 |
| [no-ext] | 12 |
| .h | 6 |
| .java | 6 |
| .clj | 5 |
| .dart | 5 |
| .ex | 5 |
| .jl | 5 |
| .lua | 5 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
