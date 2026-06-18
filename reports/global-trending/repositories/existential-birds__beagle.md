# existential-birds/beagle

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/existential-birds/beagle |
| local path | sources/existential-birds__beagle |
| HEAD | 3e9214c |
| stars/forks | 64 / 8 |
| language | Shell |
| license |  |
| pushedAt | 2026-06-18T00:27:00Z |
| trendScore / priorityScore | 159 / 428 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | AGENTS.md, plugins/beagle-testing/README.md, README.md |
| Frontend / app framework | 182 | AGENTS.md, README.md, plugins/beagle-react/README.md |
| Database / data infrastructure | 146 | AGENTS.md, plugins/beagle-python/README.md, CLAUDE.md |
| Coding agent / software automation | 143 | .github/workflows/README.md, AGENTS.md, plugins/beagle-testing/README.md |
| Security / supply chain | 137 | .github/workflows/README.md, plugins/beagle-analysis/README.md, plugins/beagle-core/README.md |
| Developer tools / DX | 118 | .github/workflows/README.md, AGENTS.md, README.md |
| Observability / evaluation | 78 | AGENTS.md, README.md, plugins/beagle-core/README.md |
| Cloud native / infrastructure | 27 | plugins/beagle-ios/README.md, .github/workflows/daydream-post.yml, .github/workflows/daydream-review.yml |
| MCP / agent interoperability | 20 | AGENTS.md, plugins/beagle-analysis/README.md, plugins/beagle-ai/skills/deepagents-implementation/SKILL.md |
| Data / ML platform | 13 | plugins/beagle-ai/skills/deepagents-architecture/SKILL.md, plugins/beagle-rust/skills/rust-best-practices/references/clippy-config.md, CONTRIBUTING.md |
| RAG / retrieval / knowledge | 12 | plugins/beagle-ai/skills/deepagents-architecture/SKILL.md, plugins/beagle-analysis/skills/agent-architecture-analysis/references/factors.md, plugins/beagle-ai/skills/langgraph-architecture/SKILL.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 540 |
| manifests | 14 |
| docs | 518 |
| tests | 0 |
| ci/ops | 4 |
| spec artifacts | 5 |
| agent instruction files | 5 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | beagle | beagle / Installation / Add the marketplace / Install the plugins you need / Other Agents / Plugins / Skills / beagle-core / Code Review Skills / Documentation & Analysis Skills | beagle ! Ask DeepWiki https //deepwiki.com/badge.svg https //deepwiki.com/existential birds/beagle ! Apollo 10 astronaut Thomas P. Stafford pats the nose of a stuffed Snoopy assets/Stafford and Snoopy.jpg Image NASA, Public Domain. Source https //www.nasa.gov/multimedia/imagegallery/image feature 572.html Beagle is a Claude Code plugin marketplace with 131 active skills across code review, documentation, testing, architectural analysis, and git workflows. Use it to review before you push, detect AI generated artifacts, draft and improve docs, generate test plans, and analyze codebases — across Python, Go, Rust, Elixir, React, Remix v2, and iOS/Swift. Used with Amelia https //github.com/exist |


## Key Files

### Manifests

- .github/workflows/README.md
- AGENTS.md
- plugins/beagle-testing/README.md
- README.md
- plugins/beagle-ai/README.md
- plugins/beagle-analysis/README.md
- plugins/beagle-core/README.md
- plugins/beagle-docs/README.md
- plugins/beagle-elixir/README.md
- plugins/beagle-go/README.md
- plugins/beagle-ios/README.md
- plugins/beagle-python/README.md
- plugins/beagle-react/README.md
- CLAUDE.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- .claude/settings.json
- .claude/commands/release-tag.md
- .claude/commands/release.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- .claude/settings.json
- .claude/commands/release-tag.md
- .claude/commands/release.md


## Top Directories

| dir | count |
| --- | --- |
| plugins | 515 |
| .github | 9 |
| .claude | 3 |
| .claude-plugin | 1 |
| .codex | 1 |
| .feedback-log.csv | 1 |
| .gitignore | 1 |
| AGENTS.md | 1 |
| CHANGELOG.md | 1 |
| CLAUDE.md | 1 |
| CONTRIBUTING.md | 1 |
| docs | 1 |
| LICENSE | 1 |
| PRIVACY.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .md | 518 |
| .json | 13 |
| .yml | 4 |
| [no-ext] | 2 |
| .csv | 1 |
| .py | 1 |
| .sh | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
