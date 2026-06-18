# entireio/cli

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/entireio/cli |
| local path | sources/entireio__cli |
| HEAD | cc4be77 |
| stars/forks | 4515 / 345 |
| language | Go |
| license |  |
| pushedAt | 2026-06-18T00:07:42Z |
| trendScore / priorityScore | 172 / 476 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | .claude/plugins/agent-integration/README.md, .claude/skills/agent-integration/README.md, e2e/README.md |
| Developer tools / DX | 500 | .claude/skills/agent-integration/README.md, .claude/skills/test-repo/README.md, e2e/README.md |
| Coding agent / software automation | 416 | .claude/skills/agent-integration/README.md, .claude/skills/test-repo/README.md, e2e/README.md |
| Security / supply chain | 163 | README.md, CLAUDE.md, .github/copilot-instructions.md |
| RAG / retrieval / knowledge | 15 | docs/architecture/agent-guide.md, cmd/entire/cli/agent/cursor/cursor_test.go, cmd/entire/cli/agent/geminicli/gemini_test.go |
| Cloud native / infrastructure | 8 | README.md, docs/first-time-contributors.md, internal/coreapi/spec/core.openapi.json |
| Database / data infrastructure | 7 | README.md, docs/security-and-privacy.md, docs/architecture/agent-guide.md |
| MCP / agent interoperability | 6 | CLAUDE.md, docs/security-and-privacy.md, docs/first-time-contributors.md |
| Frontend / app framework | 4 | CLAUDE.md |
| Observability / evaluation | 3 | .claude/skills/test-repo/README.md, scripts/test-codex-agent-integration.sh, scripts/test-copilot-cli-agent-integration.sh |
| Data / ML platform | 2 | .claude/skills/agent-integration/README.md, docs/security-and-privacy.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Go |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1077 |
| manifests | 11 |
| docs | 71 |
| tests | 488 |
| ci/ops | 12 |
| spec artifacts | 50 |
| agent instruction files | 37 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Entire CLI | Entire CLI / Why Entire / Table of Contents / Requirements / Quick Start / Install stable via Homebrew / Or install nightly via Homebrew / Or install stable via install.sh / Or install nightly via install.sh / Or install stable via Scoop (Windows) | Entire CLI Entire hooks into your Git workflow to capture AI agent sessions as you work. Sessions are indexed alongside commits, creating a searchable record of how code was written in your repo. With Entire, you can Understand why code changed — see the full prompt/response transcript and files touched Recover instantly — rewind to a known good checkpoint when an agent goes sideways and resume seamlessly Keep Git history clean — preserve agent context on a separate branch Onboard faster — show the path from prompt → change → commit Maintain traceability — support audit and compliance requirements when needed Why Entire Understand why code changed, not just what — Transcripts, prompts, files |


## Key Files

### Manifests

- .claude/plugins/agent-integration/README.md
- .claude/skills/agent-integration/README.md
- .claude/skills/test-repo/README.md
- e2e/README.md
- README.md
- .claude/plugins/e2e/README.md
- e2e/exploratory/README.md
- CLAUDE.md
- .devcontainer/Dockerfile
- go.mod
- go.sum


### Spec / Docs / Prompt Artifacts

- .claude/plugins/agent-integration/README.md
- .claude/skills/agent-integration/README.md
- .claude/skills/test-repo/README.md
- .claude/plugins/e2e/README.md
- CLAUDE.md
- .github/copilot-instructions.md
- docs/architecture/agent-guide.md
- docs/architecture/agent-integration-checklist.md
- docs/architecture/external-agent-protocol.md
- internal/coreapi/spec/core.gen.json
- internal/coreapi/spec/core.openapi.json
- internal/coreapi/spec/normalize.go
- .claude/agents/test-doc.md
- .claude/plugins/agent-integration/commands/write-tests.md
- .claude/skills/agent-integration/test-writer.md
- docs/architecture/attribution.md
- docs/architecture/checkpoint-scenarios.md
- docs/architecture/checkpoint-signing.md
- docs/architecture/claude-hooks-integration.md
- docs/architecture/commit-hook-perf-analysis.md


### Agent Instruction Files

- .claude/plugins/agent-integration/README.md
- .claude/skills/agent-integration/README.md
- .claude/skills/test-repo/README.md
- .claude/plugins/e2e/README.md
- CLAUDE.md
- .github/copilot-instructions.md
- .claude/agents/test-doc.md
- .claude/plugins/agent-integration/commands/write-tests.md
- .claude/skills/agent-integration/test-writer.md
- .claude/agents/dev.md
- .claude/agents/entire-search.md
- .claude/agents/reviewer.md
- .claude/plugins/agent-integration/.claude-plugin/plugin.json
- .claude/plugins/agent-integration/commands/implement.md
- .claude/plugins/agent-integration/commands/research.md


## Top Directories

| dir | count |
| --- | --- |
| cmd | 762 |
| internal | 89 |
| e2e | 61 |
| .claude | 35 |
| mise-tasks | 22 |
| docs | 19 |
| .github | 17 |
| .gemini | 11 |
| scripts | 11 |
| redact | 10 |
| .entire | 9 |
| .devcontainer | 4 |
| .codex | 3 |
| perf | 3 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 892 |
| .md | 70 |
| [no-ext] | 34 |
| .json | 19 |
| .jsonl | 16 |
| .yml | 16 |
| .sh | 15 |
| .ts | 4 |
| .txt | 4 |
| .toml | 3 |
| .yaml | 2 |
| .mod | 1 |
| .sum | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
