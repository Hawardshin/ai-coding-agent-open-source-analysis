# shivasurya/code-pathfinder

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/shivasurya/code-pathfinder |
| local path | sources/shivasurya__code-pathfinder |
| HEAD | 460d0d3 |
| stars/forks | 137 / 16 |
| language | Go |
| license |  |
| pushedAt | 2026-06-17T15:19:26Z |
| trendScore / priorityScore | 139 / 370 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 201 | README.md, CLAUDE.md, rules/docker-compose/security/COMPOSE-SEC-001/tests/positive/docker-compose.yml |
| Security / supply chain | 126 | extension/secureflow/packages/secureflow-cli/README.md, python-sdk/README.md, README.md |
| Developer tools / DX | 55 | extension/secureflow/packages/secureflow-cli/README.md, python-sdk/README.md, README.md |
| MCP / agent interoperability | 16 | python-sdk/README.md, README.md, CLAUDE.md |
| Coding agent / software automation | 13 | extension/secureflow/packages/secureflow-cli/README.md, README.md, CLAUDE.md |
| Observability / evaluation | 4 | python-sdk/README.md, CLAUDE.md, rules/docker-compose/security/COMPOSE-SEC-009/tests/positive/docker-compose.yml |
| Database / data infrastructure | 3 | extension/secureflow/packages/secureflow-cli/README.md, CLAUDE.md, Dockerfile |
| Local LLM / inference | 2 | extension/secureflow/packages/secureflow-cli/README.md |
| Data / ML platform | 1 | CLAUDE.md |
| Frontend / app framework | 1 | extension/secureflow/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python, Go, Java/Kotlin, C/C++ |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1873 |
| manifests | 40 |
| docs | 19 |
| tests | 850 |
| ci/ops | 123 |
| spec artifacts | 35 |
| agent instruction files | 33 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Scan with a specific bundle | Quick Start / What is Code Pathfinder? / Cross-File Taint Analysis / How It Works / 190 Security Rules, Ready to Use / Scan with a specific bundle / Scan with multiple bundles / Scan a single rule / Scan all rules for a language / MCP Server for AI Coding Assistants | <div align="center" <img src="./assets/banner.png" alt="Code Pathfinder Open source SAST with cross file dataflow analysis" width="100%" </div <div align="center" <h3 Open source SAST engine that traces vulnerabilities across files and functions</h3 Website https //codepathfinder.dev/ · Docs https //codepathfinder.dev/docs/quickstart · Rule Registry https //codepathfinder.dev/registry · MCP Server https //codepathfinder.dev/mcp · Blog https //codepathfinder.dev/blog ! Build https //github.com/shivasurya/code pathfinder/actions/workflows/build.yml/badge.svg https //github.com/shivasurya/code pathfinder/actions/workflows/build.yml ! GitHub Release https //img.shields.io/github/v/release/shivas |


## Key Files

### Manifests

- extension/secureflow/packages/secureflow-cli/README.md
- python-sdk/README.md
- README.md
- extension/secureflow/README.md
- CLAUDE.md
- rules/docker-compose/security/COMPOSE-SEC-001/tests/positive/docker-compose.yml
- rules/docker-compose/security/COMPOSE-SEC-002/tests/positive/docker-compose.yml
- rules/docker-compose/security/COMPOSE-SEC-003/tests/positive/docker-compose.yml
- rules/docker-compose/security/COMPOSE-SEC-007/tests/positive/docker-compose.yml
- rules/docker-compose/security/COMPOSE-SEC-008/tests/positive/docker-compose.yml
- rules/docker-compose/security/COMPOSE-SEC-009/tests/positive/docker-compose.yml
- rules/docker/security/DOCKER-BP-015/tests/negative/Dockerfile
- rules/docker/security/DOCKER-BP-015/tests/positive/Dockerfile
- rules/docker/security/DOCKER-COR-002/tests/negative/Dockerfile
- rules/docker/security/DOCKER-COR-002/tests/positive/Dockerfile
- rules/docker/security/DOCKER-SEC-001/tests/negative/Dockerfile
- rules/docker/security/DOCKER-SEC-001/tests/positive/Dockerfile
- rules/docker/security/DOCKER-SEC-005/tests/positive/Dockerfile
- rules/docker/security/DOCKER-SEC-006/tests/positive/Dockerfile
- sast-engine/test-fixtures/golang/security_flows/go.mod


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- extension/secureflow/packages/secureflow-cli/lib/prompts/backend/graphql/graphql-api.txt
- extension/secureflow/packages/secureflow-cli/lib/prompts/backend/grpc/grpc-api.txt
- extension/secureflow/packages/secureflow-cli/lib/prompts/backend/http/rest-api.txt
- extension/secureflow/packages/secureflow-cli/lib/prompts/backend/serverless/serverless-functions.txt
- extension/secureflow/packages/secureflow-cli/lib/prompts/cli/node/node-cli.txt
- extension/secureflow/packages/secureflow-cli/lib/prompts/cli/python/python-cli.txt
- extension/secureflow/packages/secureflow-cli/lib/prompts/common/app-profiler.txt
- extension/secureflow/packages/secureflow-cli/lib/prompts/common/review-changes.txt
- extension/secureflow/packages/secureflow-cli/lib/prompts/common/security-review-cli.txt
- extension/secureflow/packages/secureflow-cli/lib/prompts/common/threat-modeling.txt
- extension/secureflow/packages/secureflow-cli/lib/prompts/desktop/electron/electron-app.txt
- extension/secureflow/packages/secureflow-cli/lib/prompts/frontend/react/react-app.txt
- extension/secureflow/packages/secureflow-cli/lib/prompts/frontend/vue/vue-app.txt
- extension/secureflow/packages/secureflow-cli/lib/prompts/index.js
- extension/secureflow/packages/secureflow-cli/lib/prompts/index.ts
- extension/secureflow/packages/secureflow-cli/lib/prompts/library/node/node-library.txt
- extension/secureflow/packages/secureflow-cli/lib/prompts/mobile/android/android.txt
- extension/secureflow/packages/secureflow-cli/lib/prompts/mobile/cross-platform/flutter.txt
- extension/secureflow/packages/secureflow-cli/lib/prompts/mobile/cross-platform/react-native.txt


### Agent Instruction Files

- CLAUDE.md
- extension/secureflow/packages/secureflow-cli/lib/prompts/backend/graphql/graphql-api.txt
- extension/secureflow/packages/secureflow-cli/lib/prompts/backend/grpc/grpc-api.txt
- extension/secureflow/packages/secureflow-cli/lib/prompts/backend/http/rest-api.txt
- extension/secureflow/packages/secureflow-cli/lib/prompts/backend/serverless/serverless-functions.txt
- extension/secureflow/packages/secureflow-cli/lib/prompts/cli/node/node-cli.txt
- extension/secureflow/packages/secureflow-cli/lib/prompts/cli/python/python-cli.txt
- extension/secureflow/packages/secureflow-cli/lib/prompts/common/app-profiler.txt
- extension/secureflow/packages/secureflow-cli/lib/prompts/common/review-changes.txt
- extension/secureflow/packages/secureflow-cli/lib/prompts/common/security-review-cli.txt
- extension/secureflow/packages/secureflow-cli/lib/prompts/common/threat-modeling.txt
- extension/secureflow/packages/secureflow-cli/lib/prompts/desktop/electron/electron-app.txt
- extension/secureflow/packages/secureflow-cli/lib/prompts/frontend/react/react-app.txt
- extension/secureflow/packages/secureflow-cli/lib/prompts/frontend/vue/vue-app.txt
- extension/secureflow/packages/secureflow-cli/lib/prompts/index.js


## Top Directories

| dir | count |
| --- | --- |
| rules | 1056 |
| sast-engine | 535 |
| extension | 156 |
| python-sdk | 86 |
| .github | 19 |
| scripts | 2 |
| tools | 2 |
| .gitignore | 1 |
| .vscode | 1 |
| action.yml | 1 |
| CLA.md | 1 |
| CLAUDE.md | 1 |
| CODE_OF_CONDUCT.md | 1 |
| codecov.yml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 669 |
| .go | 518 |
| .yaml | 229 |
| [no-ext] | 88 |
| .mod | 74 |
| .sum | 71 |
| .ts | 43 |
| .js | 36 |
| .yml | 34 |
| .txt | 31 |
| .json | 20 |
| .md | 19 |
| .svelte | 11 |
| .sh | 10 |
| .svg | 3 |
| .dockerfile | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
