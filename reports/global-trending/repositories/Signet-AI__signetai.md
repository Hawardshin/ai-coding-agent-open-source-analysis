# Signet-AI/signetai

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Signet-AI/signetai |
| local path | sources/Signet-AI__signetai |
| HEAD | b26e372 |
| stars/forks | 198 / 36 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-14T22:05:35Z |
| trendScore / priorityScore | 138 / 482 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | integrations/hermes-agent/connector/hermes-plugin/README.md, integrations/hermes-agent/README.md, AGENTS.md |
| Coding agent / software automation | 424 | AGENTS.md, README.md, integrations/claude-code/README.md |
| RAG / retrieval / knowledge | 349 | integrations/hermes-agent/connector/hermes-plugin/README.md, AGENTS.md, README.md |
| Developer tools / DX | 321 | memorybench/README.md, memorybench/src/judges/README.md, memorybench/src/providers/README.md |
| MCP / agent interoperability | 299 | integrations/hermes-agent/connector/hermes-plugin/README.md, AGENTS.md, README.md |
| Data / ML platform | 277 | memorybench/README.md, integrations/hermes-agent/connector/hermes-plugin/README.md, memorybench/src/benchmarks/README.md |
| Database / data infrastructure | 223 | AGENTS.md, README.md, docs/ai-memory-hermes-openclaw.md |
| Observability / evaluation | 130 | memorybench/README.md, memorybench/src/benchmarks/README.md, memorybench/src/README.md |
| Security / supply chain | 110 | AGENTS.md, tests/README.md, deploy/docker/README.md |
| Cloud native / infrastructure | 93 | deploy/docker/README.md, docs/ai-memory-hermes-openclaw.md, docs/specs/approved/lossless-working-memory-closure.md |
| Frontend / app framework | 91 | AGENTS.md, README.md, surfaces/dashboard/README.md |
| Local LLM / inference | 71 | tests/README.md, README.md, platform/daemon/src/pipeline/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, C/C++, .NET |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1898 |
| manifests | 40 |
| docs | 172 |
| tests | 343 |
| ci/ops | 14 |
| spec artifacts | 42 |
| agent instruction files | 4 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Signet AI | Signet AI / Why Signet / Quick start (about 5 minutes) / Proof in one repair loop / How Signet is different / Operating tradeoff / Is Signet right for you? / Harness support / Memory that holds up / Install (detailed) | <div align="center" <picture <source media=" prefers color scheme dark " srcset="public/Signet Logo White.png" <source media=" prefers color scheme light " srcset="public/Signet Logo Black.png" <img src="public/Signet Logo Black.png" alt="Signet" width="120" </picture Signet AI Own your agent's context. <a href="https //github.com/Signet AI/signetai/releases" <img src="https //img.shields.io/github/v/release/Signet AI/signetai?include prereleases&style=for the badge" alt="GitHub release" </a <a href="https //www.npmjs.com/package/signetai" <img src="https //img.shields.io/npm/v/signetai?style=for the badge" alt="npm" </a <a href="LICENSE" <img src="https //img.shields.io/badge/License Apache |


## Key Files

### Manifests

- memorybench/README.md
- integrations/hermes-agent/connector/hermes-plugin/README.md
- integrations/hermes-agent/README.md
- memorybench/src/benchmarks/README.md
- memorybench/src/judges/README.md
- memorybench/src/providers/README.md
- memorybench/src/README.md
- AGENTS.md
- tests/README.md
- plugins/README.md
- README.md
- deploy/aur/README.md
- deploy/channels/README.md
- deploy/docker/README.md
- integrations/claude-code/README.md
- integrations/codex/README.md
- integrations/gemini/README.md
- integrations/oh-my-pi/README.md
- integrations/openclaw/connector/README.md
- integrations/openclaw/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- surfaces/cli/templates/memory/requirements.txt
- docs/specs/approved/dreaming-memory-consolidation.md
- docs/specs/approved/lossless-working-memory-closure.md
- docs/specs/approved/lossless-working-memory-runtime.md
- docs/specs/approved/mcp-cli-bridge-and-usage-analytics.md
- docs/specs/approved/memory-md-temporal-head.md
- docs/specs/approved/multi-agent-support.md
- docs/specs/approved/native-harness-memory-bridge.md
- docs/specs/approved/procedural-memory-plan.md
- docs/specs/approved/sub-agent-context-continuity.md
- docs/specs/approved/system-prompt-extraction.md
- docs/specs/complete/memory-md-rolling-window-lineage.md
- docs/specs/complete/memory-pipeline-plan.md
- memorybench/src/prompts/extraction.test.ts
- memorybench/src/prompts/defaults.ts
- memorybench/src/prompts/extraction.ts
- docs/ARCHITECTURE.md
- docs/ROADMAP.md
- docs/specs/approved/desire-paths-epic.md


### Agent Instruction Files

- AGENTS.md
- memorybench/src/prompts/extraction.test.ts
- memorybench/src/prompts/defaults.ts
- memorybench/src/prompts/extraction.ts


## Top Directories

| dir | count |
| --- | --- |
| platform | 763 |
| surfaces | 479 |
| integrations | 149 |
| memorybench | 139 |
| web | 137 |
| docs | 90 |
| scripts | 34 |
| libs | 27 |
| skills | 19 |
| .github | 15 |
| deploy | 14 |
| tests | 9 |
| plugins | 2 |
| .bump-level | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 1002 |
| .svelte | 205 |
| .md | 147 |
| .rs | 110 |
| .json | 69 |
| .sql | 65 |
| .tsx | 45 |
| .astro | 44 |
| [no-ext] | 44 |
| .js | 17 |
| .mdx | 17 |
| .py | 15 |
| .yml | 14 |
| .woff2 | 13 |
| .css | 11 |
| .toml | 11 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
