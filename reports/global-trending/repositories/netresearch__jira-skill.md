# netresearch/jira-skill

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/netresearch/jira-skill |
| local path | sources/netresearch__jira-skill |
| HEAD | e7bdc42 |
| stars/forks | 64 / 20 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T21:00:37Z |
| trendScore / priorityScore | 136 / 370 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Developer tools / DX | 316 | skills/jira-communication/AGENTS.md, README.md, tests/test_attachment_security.py |
| MCP / agent interoperability | 149 | AGENTS.md, skills/jira-communication/AGENTS.md, skills/jira-syntax/AGENTS.md |
| AI agent / orchestration | 126 | AGENTS.md, skills/jira-communication/AGENTS.md, skills/jira-syntax/AGENTS.md |
| Observability / evaluation | 97 | AGENTS.md, .github/workflows/eval-validate.yml, evals/comprehensive-evals.json |
| Security / supply chain | 49 | AGENTS.md, skills/jira-communication/AGENTS.md, skills/jira-syntax/AGENTS.md |
| Cloud native / infrastructure | 32 | README.md, docs/ARCHITECTURE.md, CHANGELOG.md |
| Coding agent / software automation | 30 | AGENTS.md, README.md, tests/test_client.py |
| Frontend / app framework | 16 | tests/test_link.py, skills/jira-communication/references/issue-editing.md, skills/jira-communication/references/links.md |
| Data / ML platform | 8 | .github/workflows/release.yml, CHANGELOG.md, skills/jira-communication/references/qa-gather.md |
| Database / data infrastructure | 5 | skills/jira-syntax/references/jira-syntax-quick-reference.md, skills/jira-syntax/templates/feature-request-template.md |
| RAG / retrieval / knowledge | 1 | CHANGELOG.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 140 |
| manifests | 6 |
| docs | 33 |
| tests | 22 |
| ci/ops | 13 |
| spec artifacts | 5 |
| agent instruction files | 3 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Jira Integration Plugin for Claude Code | Jira Integration Plugin for Claude Code / Plugin Structure / 🔌 Skill Compatibility / Features / Installation / Marketplace (Recommended) / Claude Code / npx ([skills.sh](https://skills.sh)) / Download Release / Git Clone | Jira Integration Plugin for Claude Code ! CI https //github.com/netresearch/jira skill/actions/workflows/ci.yml/badge.svg https //github.com/netresearch/jira skill/actions/workflows/ci.yml ! License https //img.shields.io/badge/License MIT%20%2B%20CC BY SA 4.0 blue.svg license ! Python https //img.shields.io/badge/python 3.10%7C3.11%7C3.12%7C3.13 blue https //www.python.org/ A Claude Code plugin providing comprehensive Jira integration through two specialized skills. Plugin Structure Skill Purpose jira communication API operations via Python CLI scripts jira syntax Wiki markup syntax, templates, validation Each skill has its own SKILL.md with trigger conditions and usage instructions. Claude |


## Key Files

### Manifests

- AGENTS.md
- skills/jira-communication/AGENTS.md
- skills/jira-syntax/AGENTS.md
- README.md
- package.json
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- skills/jira-communication/AGENTS.md
- skills/jira-syntax/AGENTS.md
- docs/ARCHITECTURE.md
- PRD.md


### Agent Instruction Files

- AGENTS.md
- skills/jira-communication/AGENTS.md
- skills/jira-syntax/AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| skills | 55 |
| evals | 22 |
| tests | 22 |
| .github | 16 |
| docs | 3 |
| Build | 2 |
| scripts | 2 |
| .claude-plugin | 1 |
| .envrc | 1 |
| .gitignore | 1 |
| .markdownlint-cli2.jsonc | 1 |
| .pre-commit-config.yaml | 1 |
| .yamllint.yml | 1 |
| AGENTS.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 51 |
| .md | 31 |
| .yml | 16 |
| .json | 14 |
| .txt | 13 |
| [no-ext] | 6 |
| .sh | 4 |
| .yaml | 2 |
| .0 | 1 |
| .jsonc | 1 |
| .toml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
