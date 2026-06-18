# bgauryy/octocode

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/bgauryy/octocode |
| local path | sources/bgauryy__octocode |
| HEAD | 4071676 |
| stars/forks | 864 / 73 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-06T23:50:15Z |
| trendScore / priorityScore | 141 / 455 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Coding agent / software automation | 500 | packages/octocode-mcp/sanity_tests/README.md, benchmark/github/README.md, benchmark/rtk/README.md |
| Developer tools / DX | 500 | docs/README.md, docs/configuration/README.md, docs/dev/README.md |
| MCP / agent interoperability | 500 | docs/README.md, packages/octocode-mcp/sanity_tests/README.md, .github/workflows/README.md |
| Security / supply chain | 340 | packages/octocode-cli/README.md, packages/octocode-mcp/README.md, packages/octocode-security-utils/README.md |
| AI agent / orchestration | 280 | docs/README.md, docs/dev/README.md, benchmark/github/README.md |
| Observability / evaluation | 222 | docs/README.md, packages/octocode-mcp/sanity_tests/README.md, docs/dev/README.md |
| Frontend / app framework | 67 | benchmark/github/README.md, packages/octocode-cli/README.md, packages/octocode-mcp/README.md |
| Cloud native / infrastructure | 57 | benchmark/github/README.md, benchmark/github/scripts/README.md, benchmark/rtk/README.md |
| RAG / retrieval / knowledge | 21 | benchmark/github/README.md, benchmark/rtk/README.md, packages/octocode-cli/tests/cli/commands/skills.test.ts |
| Data / ML platform | 17 | benchmark/github/README.md, benchmark/github/scripts/README.md, benchmark/rtk/README.md |
| Database / data infrastructure | 4 | packages/octocode-security-utils/README.md, packages/octocode-cli/tests/cli/commands/mcp.test.ts |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1208 |
| manifests | 40 |
| docs | 171 |
| tests | 440 |
| ci/ops | 3 |
| spec artifacts | 8 |
| agent instruction files | 6 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Octocode: Research Driven Development for AI | Octocode: Research Driven Development for AI / Two ways to run Octocode / 🔌 As an MCP Server / 💻 As a CLI / Install / Homebrew (macOS / Linux) — recommended / or tap once, then use the short name / npm global / or run once, no install / What you get | Octocode Research Driven Development for AI <div align="center" <img src="https //github.com/bgauryy/octocode mcp/raw/main/packages/octocode mcp/assets/logo white.png" width="400px" alt="Octocode Logo" <h3 Research like a Senior Staff Engineer.<br/ In every codebase, in seconds.</h3 <p <strong Stop guessing.</strong Octocode researches code <strong locally and externally</strong your own workspace ripgrep + LSP level go to definition, references, call hierarchy and the world's GitHub repos, PRs, npm/PyPI packages , turning it into verifiable evidence your AI can search, read, and trace.</p <p Use it as an <strong MCP server</strong inside your AI assistant, or as a <strong terminal CLI</stro |


## Key Files

### Manifests

- docs/README.md
- packages/octocode-mcp/sanity_tests/README.md
- .github/workflows/README.md
- docs/configuration/README.md
- docs/dev/README.md
- benchmark/github/README.md
- benchmark/github/scripts/README.md
- benchmark/rtk/README.md
- packages/octocode-cli/README.md
- packages/octocode-mcp/README.md
- packages/octocode-security-utils/README.md
- AGENTS.md
- README.md
- scripts/README.md
- skills/README.md
- packages/octocode-shared/README.md
- packages/octocode-vscode/README.md
- skills/octocode-chrome-devtools/README.md
- skills/octocode-design/README.md
- skills/octocode-documentation-writer/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- benchmark/github/prompts/judge.md
- benchmark/github/prompts/researcher.md
- benchmark/rtk/prompts/judge.md
- benchmark/rtk/prompts/researcher.md
- docs/dev/workflows/BENCHMARK.md
- skills/octocode-research/docs/ARCHITECTURE.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- benchmark/github/prompts/judge.md
- benchmark/github/prompts/researcher.md
- benchmark/rtk/prompts/judge.md
- benchmark/rtk/prompts/researcher.md


## Top Directories

| dir | count |
| --- | --- |
| packages | 796 |
| skills | 333 |
| benchmark | 36 |
| docs | 19 |
| .github | 4 |
| scripts | 3 |
| .gitignore | 1 |
| .npmignore | 1 |
| .prettierignore | 1 |
| .prettierrc.json | 1 |
| .syncpackrc.mjs | 1 |
| .yarn | 1 |
| .yarnrc.yml | 1 |
| AGENTS.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 910 |
| .md | 171 |
| .mjs | 43 |
| .json | 34 |
| [no-ext] | 14 |
| .sh | 11 |
| .js | 9 |
| .html | 5 |
| .yml | 4 |
| .cjs | 2 |
| .css | 2 |
| .example | 1 |
| .py | 1 |
| .yaml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
