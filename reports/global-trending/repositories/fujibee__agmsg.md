# fujibee/agmsg

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/fujibee/agmsg |
| local path | sources/fujibee__agmsg |
| HEAD | f6c0ed3 |
| stars/forks | 654 / 47 |
| language | Shell |
| license |  |
| pushedAt | 2026-06-17T23:59:01Z |
| trendScore / priorityScore | 161 / 408 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | README.md, package.json, docs/adr/0001-storage-driver-pluginization.md |
| Coding agent / software automation | 424 | README.md, package.json, docs/adr/0001-storage-driver-pluginization.md |
| Developer tools / DX | 167 | README.md, package.json, docs/adr/0001-storage-driver-pluginization.md |
| Database / data infrastructure | 77 | README.md, package.json, docs/adr/0001-storage-driver-pluginization.md |
| Security / supply chain | 22 | README.md, .github/workflows/release.yml, CHANGELOG.md |
| MCP / agent interoperability | 10 | README.md, docs/index.html |
| Frontend / app framework | 6 | README.md, docs/adr/0001-storage-driver-pluginization.md, ARCHITECTURE.md |
| Data / ML platform | 4 | .github/workflows/release.yml, RELEASING.md, scripts/spawn.sh |
| Local LLM / inference | 4 | README.md, docs/opencode.md |
| Observability / evaluation | 4 | scripts/lib/storage.sh, SKILL.md, templates/cmd.claude-code.md |
| Cloud native / infrastructure | 2 | docs/index.html |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, llm-app, llmFramework, local-llm, mcp, observability, security, securityTooling |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 92 |
| manifests | 2 |
| docs | 25 |
| tests | 19 |
| ci/ops | 3 |
| spec artifacts | 5 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | agmsg | agmsg / Demo / Quick Start / 1. Install (one-liner) / Or clone first if you want to inspect the code / 2. Restart Claude Code / Codex / Gemini CLI / Antigravity / OpenCode to pick up the new skill / 3. Run the command — it will prompt for team and agent name on first use / Claude Code:  /agmsg / Codex:        $agmsg / Gemini CLI:   $agmsg | agmsg Cross agent messaging for CLI AI agents. No daemon, no network, no complexity. <a href="https //www.producthunt.com/products/agmsg?utm source=badge top post badge&utm medium=badge" target=" blank" <picture <source media=" prefers color scheme dark " srcset="https //api.producthunt.com/widgets/embed image/v1/top post badge.svg?post id=1165435&theme=dark&period=daily" <img src="https //api.producthunt.com/widgets/embed image/v1/top post badge.svg?post id=1165435&theme=light&period=daily" alt="agmsg — 5 Product of the Day on Product Hunt" width="250" height="54" </picture </a You stop being the copy paste courier between your agents. Claude Code, Codex, Gemini CLI, GitHub Copilot CLI, and |


## Key Files

### Manifests

- README.md
- package.json


### Spec / Docs / Prompt Artifacts

- docs/adr/0001-storage-driver-pluginization.md
- docs/design.md
- docs/spec/driver-interface.md
- docs/adr/template.md
- ARCHITECTURE.md


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| scripts | 33 |
| tests | 18 |
| docs | 12 |
| templates | 6 |
| .github | 3 |
| .claude-plugin | 2 |
| .gitattributes | 1 |
| .gitignore | 1 |
| ARCHITECTURE.md | 1 |
| bin | 1 |
| CHANGELOG.md | 1 |
| cliff.toml | 1 |
| CONTRIBUTING.md | 1 |
| install.sh | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .sh | 34 |
| .md | 21 |
| .bats | 16 |
| [no-ext] | 5 |
| .json | 3 |
| .ps1 | 3 |
| .yml | 3 |
| .svg | 2 |
| .bash | 1 |
| .html | 1 |
| .js | 1 |
| .toml | 1 |
| .yaml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
