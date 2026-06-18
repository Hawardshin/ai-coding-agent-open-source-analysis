# Cranot/roam-code

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Cranot/roam-code |
| local path | sources/Cranot__roam-code |
| HEAD | 36b8ccd |
| stars/forks | 483 / 47 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T21:52:56Z |
| trendScore / priorityScore | 154 / 450 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | templates/examples/README.md, benchmarks/agent-eval/README.md, AGENTS.md |
| Developer tools / DX | 500 | benchmarks/agent-eval/README.md, AGENTS.md, dev/example-plugin/README.md |
| MCP / agent interoperability | 442 | benchmarks/agent-eval/README.md, AGENTS.md, templates/audit-report/README.md |
| Coding agent / software automation | 135 | benchmarks/agent-eval/README.md, AGENTS.md, tests/regression_fp_fixtures/README.md |
| Security / supply chain | 115 | AGENTS.md, rules/community/README.md, templates/audit-report/README.md |
| Observability / evaluation | 81 | benchmarks/agent-eval/README.md, benchmarks/oss-eval/README.md, AGENTS.md |
| Frontend / app framework | 49 | benchmarks/agent-eval/README.md, AGENTS.md, dev/example-plugin/README.md |
| Cloud native / infrastructure | 21 | AGENTS.md, templates/audit-report/README.md, templates/distribution/landing-page/docs/agent-contract.html |
| Data / ML platform | 17 | AGENTS.md, bench/retrieve/README.md, templates/legal/README.md |
| Database / data infrastructure | 17 | AGENTS.md, templates/distribution/landing-page/docs/agent-contract.html, templates/distribution/landing-page/docs/mcp-usage.html |
| RAG / retrieval / knowledge | 14 | AGENTS.md, bench/retrieve/README.md, pyproject.toml |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 4623 |
| manifests | 18 |
| docs | 58 |
| tests | 1305 |
| ci/ops | 7 |
| spec artifacts | 18 |
| agent instruction files | 18 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | roam-code | roam-code / Why Roam is different / Install + first four commands / Docker (alpine-based) / The Compiler — your agent's first token already knows the answer / The verify half of the loop — what runs after every edit / What's New / v13.3 (released 2026-05-19) — MCP runtime security + UX polish / v13.2 (released 2026-05-16) — Evidence freshness + resolution disclosure / v13.1 (released 2026-05-15) — Pattern-2 propagation + shared YAML helper + 3 flagship silent-fallback seals | <div align="center" roam code The local codebase intelligence layer that lets AI coding agents earn the right to change code — with evidence for what was checked. ! PyPI version https //img.shields.io/pypi/v/roam code?style=flat square&color=blue https //pypi.org/project/roam code/ ! GitHub stars https //img.shields.io/github/stars/Cranot/roam code?style=flat square https //github.com/Cranot/roam code/stargazers ! CI https //github.com/Cranot/roam code/actions/workflows/roam ci.yml/badge.svg https //github.com/Cranot/roam code/actions/workflows/roam ci.yml ! Python 3.10+ https //img.shields.io/badge/python 3.10+ 3776AB?logo=python&logoColor=white https //www.python.org/downloads/ ! License A |


## Key Files

### Manifests

- templates/examples/README.md
- benchmarks/agent-eval/README.md
- benchmarks/oss-eval/README.md
- AGENTS.md
- dev/example-plugin/README.md
- README.md
- tests/regression_fp_fixtures/README.md
- bench/retrieve/README.md
- rules/community/README.md
- rules/community/style/language-pack/README.md
- templates/audit-report/README.md
- templates/legal/README.md
- templates/rules/README.md
- CLAUDE.md
- dev/example-plugin/pyproject.toml
- Dockerfile
- Makefile
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- benchmarks/agent-eval/prompts/_all_prompts.txt
- benchmarks/agent-eval/prompts/astro-landing_roam-cli.txt
- benchmarks/agent-eval/prompts/astro-landing_roam-mcp.txt
- benchmarks/agent-eval/prompts/astro-landing_vanilla.txt
- benchmarks/agent-eval/prompts/cpp-calculator_roam-cli.txt
- benchmarks/agent-eval/prompts/cpp-calculator_roam-mcp.txt
- benchmarks/agent-eval/prompts/cpp-calculator_vanilla.txt
- benchmarks/agent-eval/prompts/go-loganalyzer_roam-cli.txt
- benchmarks/agent-eval/prompts/go-loganalyzer_roam-mcp.txt
- benchmarks/agent-eval/prompts/go-loganalyzer_vanilla.txt
- benchmarks/agent-eval/prompts/python-crawler_roam-cli.txt
- benchmarks/agent-eval/prompts/python-crawler_roam-mcp.txt
- benchmarks/agent-eval/prompts/python-crawler_vanilla.txt
- benchmarks/agent-eval/prompts/react-todo_roam-cli.txt
- benchmarks/agent-eval/prompts/react-todo_roam-mcp.txt
- benchmarks/agent-eval/prompts/react-todo_vanilla.txt


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- benchmarks/agent-eval/prompts/_all_prompts.txt
- benchmarks/agent-eval/prompts/astro-landing_roam-cli.txt
- benchmarks/agent-eval/prompts/astro-landing_roam-mcp.txt
- benchmarks/agent-eval/prompts/astro-landing_vanilla.txt
- benchmarks/agent-eval/prompts/cpp-calculator_roam-cli.txt
- benchmarks/agent-eval/prompts/cpp-calculator_roam-mcp.txt
- benchmarks/agent-eval/prompts/cpp-calculator_vanilla.txt
- benchmarks/agent-eval/prompts/go-loganalyzer_roam-cli.txt
- benchmarks/agent-eval/prompts/go-loganalyzer_roam-mcp.txt
- benchmarks/agent-eval/prompts/go-loganalyzer_vanilla.txt
- benchmarks/agent-eval/prompts/python-crawler_roam-cli.txt
- benchmarks/agent-eval/prompts/python-crawler_roam-mcp.txt
- benchmarks/agent-eval/prompts/python-crawler_vanilla.txt


## Top Directories

| dir | count |
| --- | --- |
| rules | 2492 |
| tests | 1304 |
| src | 600 |
| templates | 93 |
| dev | 32 |
| benchmarks | 26 |
| scripts | 20 |
| .github | 19 |
| docs | 5 |
| bench | 4 |
| .githooks | 3 |
| .claude-plugin | 1 |
| .dockerignore | 1 |
| .editorconfig | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .yaml | 2516 |
| .py | 1899 |
| .md | 47 |
| .yml | 36 |
| .json | 33 |
| .html | 30 |
| .txt | 19 |
| [no-ext] | 18 |
| .sha256 | 5 |
| .sh | 3 |
| .woff2 | 3 |
| .jsonl | 2 |
| .kt | 2 |
| .toml | 2 |
| .css | 1 |
| .jenkinsfile | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
