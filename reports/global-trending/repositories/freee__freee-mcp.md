# freee/freee-mcp

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/freee/freee-mcp |
| local path | sources/freee__freee-mcp |
| HEAD | 7140ab5 |
| stars/forks | 459 / 53 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T23:16:34Z |
| trendScore / priorityScore | 160 / 414 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | README.md, CLAUDE.md, compose.yaml |
| Security / supply chain | 331 | README.md, CLAUDE.md, src/mcp/handlers.test.ts |
| Database / data infrastructure | 253 | compose.yaml, package.json, src/server/client-store.test.ts |
| Developer tools / DX | 145 | .changeset/README.md, README.md, CLAUDE.md |
| AI agent / orchestration | 80 | README.md, src/api/client.test.ts, src/openapi/client-mode.test.ts |
| Observability / evaluation | 58 | compose.yaml, package.json, CHANGELOG.md |
| Coding agent / software automation | 46 | README.md, CLAUDE.md, src/config/mcp-config.test.ts |
| Cloud native / infrastructure | 26 | compose.yaml, Makefile, src/config-remote.test.ts |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, database, databaseRuntime, devtools, frontendStack, infra, infraOps, llmFramework, mcp, observability, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 307 |
| manifests | 9 |
| docs | 117 |
| tests | 61 |
| ci/ops | 7 |
| spec artifacts | 4 |
| agent instruction files | 4 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | freee-mcp | freee-mcp / 特徴 / Agent Skills と MCP の通信の流れ / クイックスタート / 方法 1: Remote MCP で接続する（推奨） / 方法 2: ローカルで MCP サーバーを起動する / Agent Skills をインストールする / Claude Code Plugin として使う / Codex Plugin として使う / Agent Skills の内容 | freee mcp freee会計、人事労務、請求書、工数管理、販売、IT管理、サイン（電子契約）を AI Agent から操作できるようにする freee 公式の MCP サーバーと Agent Skills です。 MCP サーバー freee API の呼び出し・認証・リクエスト検証を担当 Agent Skills API リファレンスと操作レシピを AI Agent のコンテキストに注入し、正確な API 利用をガイド ! npm version https //badge.fury.io/js/freee mcp.svg https //www.npmjs.com/package/freee mcp 特徴 複数 API 対応 会計・人事労務・請求書・工数管理・販売・IT管理の6つの freee API をサポート サイン（電子契約）対応 freee サインの文書管理 API を専用コマンド（ freee sign mcp ）でサポート OAuth 2.0 + PKCE セキュアな認証フロー、トークン自動更新 複数事業所対応 事業所の動的切り替えが可能 Agent Skills と MCP の通信の流れ Agent Skills（API リファレンス・操作レシピ）と MCP サーバー（API 呼び出し）を組み合わせて利用します。 この仕組みにより： Agent Skills 必要な API リファレンスや操作レシピを段階的にコンテキストに注入（コンテキスト効率化） MCP 認証・リクエスト検証・API 呼び出しを担当 クイックスタート 方法 1 Remote MCP で |


## Key Files

### Manifests

- .changeset/README.md
- README.md
- .github/CLAUDE.md
- CLAUDE.md
- compose.yaml
- Dockerfile
- Makefile
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

- .github/CLAUDE.md
- CLAUDE.md
- .github/workflows/claude.yml
- .claude/settings.json


### Agent Instruction Files

- .github/CLAUDE.md
- CLAUDE.md
- .github/workflows/claude.yml
- .claude/settings.json


## Top Directories

| dir | count |
| --- | --- |
| src | 134 |
| skills | 110 |
| openapi | 15 |
| .github | 10 |
| .changeset | 3 |
| scripts | 3 |
| .claude-plugin | 2 |
| .agents | 1 |
| .claude | 1 |
| .coderabbit.yaml | 1 |
| .codex-plugin | 1 |
| .dockerignore | 1 |
| .gitignore | 1 |
| .mcp.json | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 138 |
| .md | 117 |
| .json | 28 |
| [no-ext] | 10 |
| .yml | 6 |
| .yaml | 5 |
| .cjs | 1 |
| .js | 1 |
| .sign | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
