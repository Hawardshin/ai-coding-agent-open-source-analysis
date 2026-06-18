# hashgraph-online/hol-guard

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/hashgraph-online/hol-guard |
| local path | sources/hashgraph-online__hol-guard |
| HEAD | 4d4bf52 |
| stars/forks | 359 / 7 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T23:55:31Z |
| trendScore / priorityScore | 183 / 457 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Coding agent / software automation | 500 | action/README.md, README.md, tests/fixtures/good-plugin/README.md |
| Security / supply chain | 500 | action/README.md, README.md, tests/fixtures/claude-plugin-good/README.md |
| MCP / agent interoperability | 456 | README.md, tests/fixtures/guard-red-team/README.md, pyproject.toml |
| Developer tools / DX | 167 | action/README.md, README.md, Dockerfile |
| Cloud native / infrastructure | 97 | action/README.md, README.md, dashboard/vite.config.ts |
| AI agent / orchestration | 80 | action/README.md, README.md, tests/fixtures/guard-red-team/README.md |
| Frontend / app framework | 52 | dashboard/package.json, dashboard/tsconfig.json, dashboard/vite.config.ts |
| Observability / evaluation | 31 | README.md, tests/fixtures/guard-red-team/README.md, tests/test_cursor_cli.py |
| Database / data infrastructure | 6 | README.md, docs/guard/architecture.md, docs/guard/get-started.md |
| Data / ML platform | 5 | README.md, tests/test_skill_security.py, docs/guard/harness-support.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go, Java/Kotlin |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1029 |
| manifests | 27 |
| docs | 62 |
| tests | 470 |
| ci/ops | 11 |
| spec artifacts | 3 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | HOL Guard | HOL Guard / Start Here / Guard Quickstart / Guard: Protection Levels / Guard: Troubleshooting / Why was my command paused? / How do I clear approvals? / How do I require human proof before saved approvals? / Guard: Advisory Sync Privacy / Scanner Quickstart | HOL Guard ! HOL Guard Version https //img.shields.io/pypi/v/hol guard.svg?logo=pypi&logoColor=white&cacheSeconds=300 https //pypi.org/project/hol guard/ ! Plugin Scanner Version https //img.shields.io/pypi/v/plugin scanner.svg?logo=pypi&logoColor=white&cacheSeconds=300 https //pypi.org/project/plugin scanner/ ! HOL Guard Downloads https //img.shields.io/pypi/dm/hol guard?logo=pypi&logoColor=white https //pypi.org/project/hol guard/ ! Plugin Scanner Downloads https //img.shields.io/pypi/dm/plugin scanner?logo=pypi&logoColor=white https //pypi.org/project/plugin scanner/ ! Python 3.10+ https //img.shields.io/badge/python 3.10%2B 3776AB?logo=python&logoColor=white install the package you need ! |


## Key Files

### Manifests

- action/README.md
- README.md
- tests/fixtures/claude-plugin-good/README.md
- tests/fixtures/gemini-extension-good/README.md
- tests/fixtures/good-plugin/README.md
- tests/fixtures/guard-red-team/README.md
- tests/fixtures/malicious-skill-plugin/README.md
- tests/fixtures/multi-ecosystem-repo/codex-plugin/README.md
- tests/fixtures/multi-ecosystem-repo/gemini-ext/README.md
- tests/fixtures/multi-plugin-repo/plugins/alpha-plugin/README.md
- tests/fixtures/opencode-good/README.md
- tests/fixtures/gemini-extension-good/GEMINI.md
- .clusterfuzzlite/Dockerfile
- dashboard/package.json
- dashboard/tsconfig.json
- dashboard/vite.config.ts
- Dockerfile
- pyproject.toml
- requirements.txt
- tests/fixtures/tier2/cargo-safe/Cargo.toml


### Spec / Docs / Prompt Artifacts

- tests/fixtures/gemini-extension-good/GEMINI.md
- requirements.txt
- docs/guard/architecture.md


### Agent Instruction Files

- tests/fixtures/gemini-extension-good/GEMINI.md


## Top Directories

| dir | count |
| --- | --- |
| tests | 381 |
| src | 300 |
| dashboard | 281 |
| docs | 18 |
| .github | 15 |
| action | 8 |
| .clusterfuzzlite | 4 |
| scripts | 4 |
| schemas | 3 |
| .factory | 2 |
| .dockerignore | 1 |
| .gitignore | 1 |
| .pre-commit-hooks.yaml | 1 |
| CONTRIBUTING.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 541 |
| .ts | 147 |
| .tsx | 128 |
| .md | 62 |
| .json | 57 |
| [no-ext] | 21 |
| .js | 19 |
| .yml | 16 |
| .txt | 8 |
| .toml | 5 |
| .sh | 4 |
| .yaml | 4 |
| .svg | 3 |
| .css | 2 |
| .gradle | 2 |
| .html | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
