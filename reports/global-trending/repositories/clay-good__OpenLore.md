# clay-good/OpenLore

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/clay-good/OpenLore |
| local path | sources/clay-good__OpenLore |
| HEAD | 3af3046 |
| stars/forks | 175 / 24 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T20:43:42Z |
| trendScore / priorityScore | 136 / 450 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | docs/agentic-workflows/README.md, examples/bmad/README.md, examples/gsd/README.md |
| MCP / agent interoperability | 500 | docs/agentic-workflows/README.md, examples/bmad/README.md, examples/gsd/README.md |
| Coding agent / software automation | 421 | docs/agentic-workflows/README.md, examples/bmad/README.md, examples/gsd/README.md |
| Developer tools / DX | 421 | examples/openspec-cli/README.md, examples/bmad/README.md, examples/openspec-analysis/README.md |
| RAG / retrieval / knowledge | 283 | examples/pi/README.md, README.md, docs/AGENT-ADOPTION.md |
| Cloud native / infrastructure | 110 | README.md, docs/cli-reference.md, docs/specs/openlore-spec-09-mcp-live-data-test-harness.md |
| Observability / evaluation | 81 | README.md, skills/openlore-orient/README.md, docs/AGENT-BENCHMARKS.md |
| Security / supply chain | 73 | AGENTS.md, README.md, docs/AGENT-ADOPTION.md |
| Database / data infrastructure | 54 | AGENTS.md, README.md, CLAUDE.md |
| Data / ML platform | 48 | AGENTS.md, README.md, docs/AGENT-ADOPTION.md |
| Local LLM / inference | 14 | docs/mcp-tools.md, docs/OPENSPEC-INTEGRATION.md, docs/ARCHITECTURE.md |
| Frontend / app framework | 13 | docs/AGENT-ADOPTION.md, docs/mcp-tools.md, docs/specs/openlore-spec-26-install-mcp-wiring-and-first-run-correctness.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Go, Java/Kotlin, C/C++, .NET |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 708 |
| manifests | 19 |
| docs | 164 |
| tests | 283 |
| ci/ops | 17 |
| spec artifacts | 48 |
| agent instruction files | 4 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | openlore | openlore / Value Scorecard — does it pay for itself? / Why It Exists / How It Works / openlore vs. Alternatives / 5-Minute Quickstart / See It In Action / Agent Cheat Sheet / Use OpenLore as a Claude Code Skill / From the OpenLore repo root: | openlore !NOTE spec gen has been renamed to OpenLore . The npm package is now openlore https //www.npmjs.com/package/openlore and the CLI command is openlore . Existing projects rename your .spec gen/ directory to .openlore/ and reinstall npm i g openlore . See docs/RENAME TO OPENLORE.md docs/RENAME TO OPENLORE.md for the full migration checklist. Persistent architectural memory and structural cognition for AI coding agents. openlore turns any evolving codebase into a navigable knowledge graph backed by OpenSpec https //github.com/Fission AI/OpenSpec living specifications. It maintains persistent architectural context across agent sessions graph structure, specs, decisions, drift state, and |


## Key Files

### Manifests

- examples/openspec-cli/README.md
- docs/agentic-workflows/README.md
- examples/bmad/README.md
- examples/gsd/README.md
- examples/mistral-vibe/README.md
- examples/openspec-analysis/README.md
- examples/pi/README.md
- examples/spec-kit/README.md
- AGENTS.md
- README.md
- packaging/homebrew/README.md
- skills/openlore-orient/README.md
- CLAUDE.md
- examples/drift-demo/package.json
- examples/drift-demo/tsconfig.json
- stubs/tree-sitter-cli-stub/package.json
- package.json
- tsconfig.json
- src/core/scip/fixtures/tiny-repo/package.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- docs/specs/mcp-tool-audit.md
- docs/specs/openlore-spec-06-bm25-index-without-embeddings.md
- docs/specs/openlore-spec-09-mcp-live-data-test-harness.md
- docs/specs/openlore-spec-10-mcp-tool-response-hardening.md
- docs/specs/openlore-spec-11-mcp-tool-surface-audit.md
- docs/specs/openlore-spec-12-mcp-protocol-conformance.md
- docs/specs/openlore-spec-14-agent-benchmark-harness.md
- docs/specs/openlore-spec-26-install-mcp-wiring-and-first-run-correctness.md
- examples/drift-demo/openspec/specs/database/spec.md
- examples/opencode/prompts/sisyphus-sdd.md
- examples/openspec-cli/openspec/specs/architecture/spec.md
- examples/openspec-cli/openspec/specs/artifact-graph/spec.md
- examples/openspec-cli/openspec/specs/cli/spec.md
- examples/openspec-cli/openspec/specs/overview/spec.md
- examples/openspec-cli/openspec/specs/parsing/spec.md
- examples/openspec-cli/openspec/specs/validation/spec.md
- docs/ARCHITECTURE.md
- docs/specs/call-graph-enrichment-spec.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- examples/opencode/prompts/sisyphus-sdd.md
- .claude/commands/first-run-hardening.md


## Top Directories

| dir | count |
| --- | --- |
| src | 476 |
| examples | 95 |
| docs | 75 |
| skills | 14 |
| openspec | 13 |
| scripts | 11 |
| .github | 2 |
| packaging | 2 |
| schemas | 2 |
| .claude | 1 |
| .gitignore | 1 |
| .npmrc | 1 |
| .planning | 1 |
| .prettierrc | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 449 |
| .md | 164 |
| .json | 15 |
| .yml | 13 |
| .yaml | 10 |
| .jsx | 9 |
| .js | 6 |
| .sh | 6 |
| .mjs | 4 |
| [no-ext] | 4 |
| .c | 2 |
| .cs | 2 |
| .go | 2 |
| .lua | 2 |
| .py | 2 |
| .scala | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
