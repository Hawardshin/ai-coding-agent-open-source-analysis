# github/github-mcp-server

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/github/github-mcp-server |
| local path | sources/github__github-mcp-server |
| HEAD | 4f73cfd |
| stars/forks | 30770 / 4406 |
| language | Go |
| license |  |
| pushedAt | 2026-06-17T20:54:00Z |
| trendScore / priorityScore | 211 / 519 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | docs/installation-guides/README.md, cmd/mcpcurl/README.md, e2e/README.md |
| Security / supply chain | 428 | docs/installation-guides/README.md, .github/copilot-instructions.md, docs/installation-guides/install-cline.md |
| Cloud native / infrastructure | 241 | docs/installation-guides/README.md, cmd/mcpcurl/README.md, e2e/README.md |
| Developer tools / DX | 193 | docs/installation-guides/README.md, cmd/mcpcurl/README.md, e2e/README.md |
| Coding agent / software automation | 192 | docs/installation-guides/README.md, docs/installation-guides/install-cline.md, docs/feature-flags.md |
| AI agent / orchestration | 93 | docs/installation-guides/README.md, .github/copilot-instructions.md, .github/prompts/bug-report-review.prompt.yml |
| Frontend / app framework | 28 | Dockerfile, ui/package.json, ui/tsconfig.json |
| Observability / evaluation | 18 | docs/error-handling.md, cmd/github-mcp-server/list_scopes.go, internal/ghmcp/server.go |
| RAG / retrieval / knowledge | 2 | pkg/github/discussions_test.go, pkg/github/labels_test.go |
| Database / data infrastructure | 1 | pkg/github/security_advisories.go |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, database, devtools, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Go |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 429 |
| manifests | 13 |
| docs | 44 |
| tests | 72 |
| ci/ops | 14 |
| spec artifacts | 3 |
| agent instruction files | 3 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | GitHub MCP Server | GitHub MCP Server / Use Cases / Remote GitHub MCP Server / Prerequisites / Install in VS Code / Install in other MCP hosts / Configuration / Local GitHub MCP Server / Prerequisites / Environment Variables (Recommended) | ! Go Report Card https //goreportcard.com/badge/github.com/github/github mcp server https //goreportcard.com/report/github.com/github/github mcp server GitHub MCP Server The GitHub MCP Server connects AI tools directly to GitHub's platform. This gives AI agents, assistants, and chatbots the ability to read repositories and code files, manage issues and PRs, analyze code, and automate workflows. All through natural language interactions. Use Cases Repository Management Browse and query code, search files, analyze commits, and understand project structure across any repository you have access to. Issue & PR Automation Create, update, and manage issues and pull requests. Let AI help triage bugs |


## Key Files

### Manifests

- docs/installation-guides/README.md
- cmd/mcpcurl/README.md
- e2e/README.md
- README.md
- Dockerfile
- go.mod
- ui/package.json
- ui/tsconfig.json
- ui/vite.config.ts
- .github/workflows/go.yml
- go.sum
- third-party/go.yaml.in/yaml/v3/LICENSE
- third-party/go.yaml.in/yaml/v3/NOTICE


### Spec / Docs / Prompt Artifacts

- .github/copilot-instructions.md
- .github/prompts/bug-report-review.prompt.yml
- .github/prompts/default-issue-review.prompt.yml


### Agent Instruction Files

- .github/copilot-instructions.md
- .github/prompts/bug-report-review.prompt.yml
- .github/prompts/default-issue-review.prompt.yml


## Top Directories

| dir | count |
| --- | --- |
| pkg | 271 |
| third-party | 35 |
| docs | 27 |
| .github | 25 |
| ui | 18 |
| script | 14 |
| internal | 10 |
| cmd | 8 |
| e2e | 2 |
| .dockerignore | 1 |
| .gitignore | 1 |
| .golangci.yml | 1 |
| .goreleaser.yaml | 1 |
| .vscode | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 176 |
| .snap | 111 |
| [no-ext] | 50 |
| .md | 44 |
| .yml | 18 |
| .tsx | 7 |
| .json | 6 |
| .html | 5 |
| .txt | 4 |
| .ts | 3 |
| .mjs | 1 |
| .mod | 1 |
| .sum | 1 |
| .tmpl | 1 |
| .yaml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
