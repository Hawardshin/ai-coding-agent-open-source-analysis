# safishamsi/graphify

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/safishamsi/graphify |
| local path | sources/safishamsi__graphify |
| HEAD | 9e0b876 |
| stars/forks | 68714 / 6935 |
| language | Python |
| license |  |
| pushedAt | 2026-06-18T00:18:54Z |
| trendScore / priorityScore | 175 / 499 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Coding agent / software automation | 500 | worked/example/README.md, AGENTS.md, README.md |
| Developer tools / DX | 289 | README.md, worked/rsl-siege-manager/README.md, docs/docker-mcp-sqlite.md |
| MCP / agent interoperability | 273 | README.md, Dockerfile, docs/docker-mcp-sqlite.md |
| AI agent / orchestration | 178 | README.md, tests/test_llm_parser.py, docs/node-summaries-rfc.md |
| Local LLM / inference | 92 | README.md, pyproject.toml, tests/test_extract_cli.py |
| Cloud native / infrastructure | 87 | README.md, Dockerfile, docs/docker-mcp-sqlite.md |
| Database / data infrastructure | 71 | README.md, docs/docker-mcp-sqlite.md, pyproject.toml |
| Data / ML platform | 64 | worked/example/README.md, README.md, worked/karpathy-repos/README.md |
| Observability / evaluation | 61 | worked/httpx/README.md, worked/karpathy-repos/README.md, worked/mixed-corpus/README.md |
| Security / supply chain | 60 | README.md, Dockerfile, tests/test_benchmark.py |
| Frontend / app framework | 54 | README.md, worked/rsl-siege-manager/README.md, tests/test_benchmark.py |
| RAG / retrieval / knowledge | 48 | worked/example/README.md, AGENTS.md, README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go, Java/Kotlin, Swift |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 574 |
| manifests | 11 |
| docs | 340 |
| tests | 161 |
| ci/ops | 3 |
| spec artifacts | 3 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | or install uv: | Prerequisites / or install uv: / Install / Recommended (uv puts graphify on PATH automatically): / Alternatives: / Pick your platform / Optional extras / Make your assistant always use the graph / What's in the report / What files it handles | <p align="center" <a href="https //graphifylabs.ai" <img src="https //raw.githubusercontent.com/safishamsi/graphify/v4/docs/logo text.svg" width="260" height="64" alt="Graphify"/ </a </p <p align="center" 🇺🇸 <a href="README.md" English</a 🇨🇳 <a href="docs/translations/README.zh CN.md" 简体中文</a 🇯🇵 <a href="docs/translations/README.ja JP.md" 日本語</a 🇰🇷 <a href="docs/translations/README.ko KR.md" 한국어</a 🇩🇪 <a href="docs/translations/README.de DE.md" Deutsch</a 🇫🇷 <a href="docs/translations/README.fr FR.md" Français</a 🇪🇸 <a href="docs/translations/README.es ES.md" Español</a 🇮🇳 <a href="docs/translations/README.hi IN.md" हिन्दी</a 🇧🇷 <a href="docs/translations/README.pt BR.md" P |


## Key Files

### Manifests

- worked/example/README.md
- AGENTS.md
- README.md
- worked/httpx/README.md
- worked/karpathy-repos/README.md
- worked/mixed-corpus/README.md
- worked/rsl-siege-manager/README.md
- Dockerfile
- pyproject.toml
- tests/fixtures/crate_a/Cargo.toml
- tests/fixtures/crate_b/Cargo.toml


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- worked/example/raw/architecture.md
- ARCHITECTURE.md


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| graphify | 164 |
| tools | 163 |
| tests | 161 |
| worked | 36 |
| docs | 35 |
| .github | 3 |
| .dockerignore | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |
| AGENTS.md | 1 |
| ARCHITECTURE.md | 1 |
| CHANGELOG.md | 1 |
| Dockerfile | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .md | 338 |
| .py | 150 |
| .json | 9 |
| .ts | 7 |
| [no-ext] | 7 |
| .php | 5 |
| .toml | 4 |
| .rs | 3 |
| .sql | 3 |
| .swift | 3 |
| .yml | 3 |
| .f90 | 2 |
| .groovy | 2 |
| .ps1 | 2 |
| .svg | 2 |
| .c | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
