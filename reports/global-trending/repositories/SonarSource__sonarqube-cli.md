# SonarSource/sonarqube-cli

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/SonarSource/sonarqube-cli |
| local path | sources/SonarSource__sonarqube-cli |
| HEAD | 5b60e24 |
| stars/forks | 192 / 8 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T23:33:43Z |
| trendScore / priorityScore | 133 / 399 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Developer tools / DX | 500 | README.md, CLAUDE.md, docs/llms.txt |
| Security / supply chain | 329 | README.md, CLAUDE.md, docs/llms.txt |
| Coding agent / software automation | 299 | README.md, CLAUDE.md, docs/llms.txt |
| MCP / agent interoperability | 184 | README.md, CLAUDE.md, docs/llms.txt |
| AI agent / orchestration | 168 | README.md, CLAUDE.md, docs/llms.txt |
| Cloud native / infrastructure | 21 | tests/integration/specs/run/mcp.test.ts, docs/index.html, tests/integration/specs/system/system-status.test.ts |
| Data / ML platform | 14 | CLAUDE.md, docs/commands.html, docs/index.html |
| Observability / evaluation | 8 | README.md, package.json, tests/integration/specs/user-scripts/detect-profile.test.ts |
| RAG / retrieval / knowledge | 5 | tests/unit/cli/commands/analyze/sqaa-analysis.test.ts, tests/unit/cli/commands/analyze/sqaa-api-chunk-fetch.test.ts, tests/unit/cli/commands/analyze/sqaa-chunking.test.ts |
| Frontend / app framework | 4 | tests/unit/cli/commands/analyze/dependency-risk-helpers/sca-watch-patterns.test.ts |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 517 |
| manifests | 5 |
| docs | 26 |
| tests | 204 |
| ci/ops | 13 |
| spec artifacts | 43 |
| agent instruction files | 3 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | SonarQube CLI | SonarQube CLI / Documentation / Table of Contents / Three Ways to Use This CLI / Prerequisites / Quick Start / Step 1: Install / Example output: 1.0.0 / Step 2: Authenticate / Opens your browser to sign in to SonarQube and generates a user token | SonarQube CLI ! Build https //github.com/SonarSource/sonarqube cli/actions/workflows/build.yml/badge.svg?branch=master https //github.com/SonarSource/sonarqube cli/actions/workflows/build.yml ! Quality Gate Status https //sonarcloud.io/api/project badges/measure?project=SonarSource sonarqube cli&metric=alert status&token=4ad890bd54c6c3feb5d5251004fa3e5b1f665dea https //sonarcloud.io/summary/new code?id=SonarSource sonarqube cli Catch code quality and security issues in your terminal—before they reach production. The SonarQube CLI integrates enterprise grade static analysis into your development workflow 🔒 Secret Detection — Scan code for hardcoded credentials and prevent secrets from being |


## Key Files

### Manifests

- README.md
- CLAUDE.md
- package.json
- tsconfig.json
- src/cli/commands/analyze/dependency-risk-helpers/view-model/package.ts


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- tests/integration/specs/hook/hook-agent-post-tool-use.test.ts
- tests/integration/specs/hook/hook-agent-prompt-submit.test.ts
- tests/integration/specs/hook/hook-cursor-prompt-submit.test.ts
- tests/integration/specs/run/mcp.test.ts
- .cursor/rules/sonarqube-cli.mdc
- tests/integration/specs/analyze/analyze-dependency-risks.test.ts
- tests/integration/specs/analyze/analyze-secrets.test.ts
- tests/integration/specs/analyze/analyze-sqaa.test.ts
- tests/integration/specs/analyze/sqaa-request-helpers.ts
- tests/integration/specs/api/api.test.ts
- tests/integration/specs/auth/auth.test.ts
- tests/integration/specs/config/config-telemetry.test.ts
- tests/integration/specs/context/passthrough.test.ts
- tests/integration/specs/help/root-help.test.ts
- tests/integration/specs/hook/git-test-helpers.ts
- tests/integration/specs/hook/hook-antigravity-pre-tool-use.test.ts
- tests/integration/specs/hook/hook-claude-pre-tool-use.test.ts
- tests/integration/specs/hook/hook-codex-post-tool-use.test.ts
- tests/integration/specs/hook/hook-copilot-pre-tool-use.test.ts


### Agent Instruction Files

- CLAUDE.md
- .cursor/rules/sonarqube-cli.mdc
- .claude/commands/generate-ux-report.md


## Top Directories

| dir | count |
| --- | --- |
| src | 232 |
| tests | 204 |
| .github | 25 |
| build-scripts | 15 |
| docs | 15 |
| user-scripts | 4 |
| .vscode | 2 |
| .claude | 1 |
| .cursor | 1 |
| .editorconfig | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .husky | 1 |
| .mcp.json | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 448 |
| .yml | 17 |
| .json | 11 |
| .md | 8 |
| [no-ext] | 8 |
| .svg | 6 |
| .sh | 4 |
| .html | 2 |
| .ps1 | 2 |
| .template | 2 |
| .toml | 2 |
| .txt | 2 |
| .css | 1 |
| .js | 1 |
| .mdc | 1 |
| .properties | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
