# proffesor-for-testing/agentic-qe

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/proffesor-for-testing/agentic-qe |
| local path | sources/proffesor-for-testing__agentic-qe |
| HEAD | e664f3e |
| stars/forks | 390 / 77 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T16:59:36Z |
| trendScore / priorityScore | 146 / 485 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | src/skills/security-visual-testing/README.md, tests/benchmarks/README.md, docs/implementation/ddd/README.md |
| Security / supply chain | 500 | src/skills/security-visual-testing/README.md, docs/implementation/ddd/README.md, docs/implementation/README.md |
| MCP / agent interoperability | 493 | src/skills/security-visual-testing/README.md, docs/releases/README.md, docs/v3/README.md |
| Observability / evaluation | 438 | tests/benchmarks/README.md, docs/plans/README.md, docs/releases/README.md |
| Data / ML platform | 204 | src/skills/security-visual-testing/README.md, docs/releases/README.md, src/integrations/agentic-flow/onnx-embeddings/README.md |
| Developer tools / DX | 189 | src/skills/security-visual-testing/README.md, tests/benchmarks/README.md, docs/releases/README.md |
| Coding agent / software automation | 174 | docs/implementation/ddd/README.md, docs/releases/README.md, assets/agents/v3/README.md |
| RAG / retrieval / knowledge | 153 | tests/benchmarks/README.md, docs/implementation/ddd/README.md, docs/implementation/README.md |
| Database / data infrastructure | 123 | docs/releases/README.md, README.md, .claude/skills/brutal-honesty-review/README.md |
| Cloud native / infrastructure | 63 | docs/releases/README.md, .claude/skills/README.md, assets/skills/README.md |
| Local LLM / inference | 47 | README.md, src/integrations/browser/README.md, .agentic-qe/docs/agents.md |
| Frontend / app framework | 1 | docs/releases/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go, Java/Kotlin, Swift |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 4707 |
| manifests | 40 |
| docs | 1421 |
| tests | 1059 |
| ci/ops | 18 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Agentic Quality Engineering Fleet | Agentic Quality Engineering Fleet / What AQE Does For You / Quick Start / Install / Initialize your project (auto-detects tech stack, configures MCP) / That's it — MCP tools are available immediately in Claude Code / For other clients: aqe-mcp / Windows install / Look for "HNSW backend: native" (hnswlib-node) or "HNSW backend: js" / (ProgressiveHnswBackend — see caveat above). | Agentic Quality Engineering Fleet <div align="center" ! npm version https //img.shields.io/npm/v/agentic qe.svg https //www.npmjs.com/package/agentic qe ! License MIT https //img.shields.io/badge/License MIT yellow.svg https //opensource.org/licenses/MIT ! TypeScript https //img.shields.io/badge/TypeScript 5.0+ blue.svg https //www.typescriptlang.org/ ! Monthly Downloads https //img.shields.io/npm/dm/agentic qe https //www.npmjs.com/package/agentic qe ! Total Downloads https //img.shields.io/npm/dt/agentic qe?label=total%20downloads https //www.npmjs.com/package/agentic qe Release Notes docs/releases/README.md Changelog CHANGELOG.md Issues https //github.com/proffesor for testing/agentic qe/ |


## Key Files

### Manifests

- src/skills/security-visual-testing/README.md
- tests/benchmarks/README.md
- docs/implementation/ddd/README.md
- docs/implementation/README.md
- docs/plans/README.md
- docs/releases/README.md
- docs/v3/README.md
- assets/agents/v3/README.md
- benchmarks/interaction/results/README.md
- plugins/agentic-qe-fleet/README.md
- src/integrations/agent-booster-wasm/README.md
- src/integrations/agentic-flow/model-router/README.md
- src/integrations/agentic-flow/onnx-embeddings/README.md
- src/integrations/browser/agent-browser/README.md
- .claude-plugin/README.md
- .claude/skills/testability-scoring/README.md
- assets/skills/testability-scoring/README.md
- README.md
- src/domains/test-generation/generators/README.md
- tests/e2e/README.md


### Spec / Docs / Prompt Artifacts

- .claude/skills/testability-scoring/README.md
- .claude/commands/analysis/README.md
- .claude/commands/automation/README.md
- .claude/commands/github/README.md
- .claude/commands/hooks/README.md
- .claude/commands/monitoring/README.md
- .claude/commands/optimization/README.md
- .claude/helpers/README.md
- .claude/skills/.validation/README.md
- .claude/skills/brutal-honesty-review/README.md
- .claude/skills/cicd-pipeline-qe-orchestrator/README.md
- .claude/skills/README.md
- .claude/skills/six-thinking-hats/README.md
- CLAUDE.md
- .agentic-qe/docs/agents.md
- .claude/commands/monitoring/agents.md
- .claude/hooks/README.txt
- .claude/skills/.validation/examples/security-testing-output.example.json
- docs/implementation/specs/SPEC-038-A-memory-architecture.md
- docs/implementation/specs/SPEC-039-A-mcp-performance.md


### Agent Instruction Files

- .claude/skills/testability-scoring/README.md
- .claude/commands/analysis/README.md
- .claude/commands/automation/README.md
- .claude/commands/github/README.md
- .claude/commands/hooks/README.md
- .claude/commands/monitoring/README.md
- .claude/commands/optimization/README.md
- .claude/helpers/README.md
- .claude/skills/.validation/README.md
- .claude/skills/brutal-honesty-review/README.md
- .claude/skills/cicd-pipeline-qe-orchestrator/README.md
- .claude/skills/README.md
- .claude/skills/six-thinking-hats/README.md
- CLAUDE.md
- .agentic-qe/docs/agents.md


## Top Directories

| dir | count |
| --- | --- |
| src | 1329 |
| tests | 985 |
| .claude | 771 |
| docs | 535 |
| assets | 482 |
| .kiro | 181 |
| .opencode | 149 |
| scripts | 76 |
| plugins | 63 |
| packages | 27 |
| .agentic-qe | 25 |
| .github | 21 |
| benchmarks | 17 |
| .devcontainer | 6 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 2291 |
| .md | 1401 |
| .json | 508 |
| .yaml | 288 |
| .sh | 71 |
| .cjs | 32 |
| .js | 28 |
| .mjs | 25 |
| .yml | 20 |
| [no-ext] | 9 |
| .html | 8 |
| .sql | 6 |
| .hook | 5 |
| .jsonl | 2 |
| .py | 2 |
| .txt | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
