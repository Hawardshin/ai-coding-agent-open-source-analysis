# liaohch3/claude-tap

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/liaohch3/claude-tap |
| local path | sources/liaohch3__claude-tap |
| HEAD | 8759349 |
| stars/forks | 1824 / 193 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T12:50:31Z |
| trendScore / priorityScore | 139 / 423 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Coding agent / software automation | 500 | .agents/evidence/pr/276-double-serialized-body/README.md, .agents/evidence/pr/286/README.md, .agents/evidence/pr/issue129/README.md |
| AI agent / orchestration | 428 | .agents/docs/README.md, .agents/docs/standards/README.md, .agents/evidence/pr/276-double-serialized-body/README.md |
| Cloud native / infrastructure | 400 | .agents/evidence/pr/276-double-serialized-body/README.md, .agents/evidence/pr/286/README.md, .agents/evidence/pr/codebuddy-cli/README.md |
| Developer tools / DX | 381 | .agents/evidence/pr/286/README.md, .agents/evidence/pr/287/README.md, .agents/evidence/pr/codebuddy-cli/README.md |
| Security / supply chain | 108 | .agents/evidence/pr/286/README.md, .agents/evidence/pr/gemini-cli/README.md, .agents/evidence/pr/opencode-real-quality/README.md |
| Database / data infrastructure | 27 | .agents/evidence/pr/276-double-serialized-body/README.md, .agents/evidence/pr/286/README.md, .agents/evidence/pr/287/README.md |
| MCP / agent interoperability | 24 | .agents/docs/standards/README.md, .claude/CLAUDE.md, .agents/docs/architecture/manifest.yaml |
| Observability / evaluation | 18 | .agents/docs/error-experience/entries/2026-03-03-ws-proxy-debugging-failure.md, .agents/docs/standards/debugging-standards.md, docs/guides/agent-trace-viewer.html |
| Frontend / app framework | 14 | AGENTS.md, README.md, .agents/docs/standards/validation-and-gates.md |
| Data / ML platform | 7 | .agents/docs/good-experience/entries/2026-02-25-mock-e2e-pattern.md, .agents/docs/guides/engineering-practices.md, .agents/skills/e2e-test/SKILL.md |
| RAG / retrieval / knowledge | 2 | .agents/evidence/pr/session-dashboard/README.md, tests/test_bedrock_proxy.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 259 |
| manifests | 32 |
| docs | 109 |
| tests | 65 |
| ci/ops | 4 |
| spec artifacts | 4 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | claude-tap | claude-tap / Built with claude-tap / Why use it / Supported Clients / Install / Recommended / Or with pip / Quick Start / Claude Code with the live browser viewer enabled by default / Restore pre-v0.1.75 behavior: no live viewer server | claude tap ! PyPI version https //img.shields.io/pypi/v/claude tap.svg https //pypi.org/project/claude tap/ ! PyPI downloads https //img.shields.io/pypi/dm/claude tap.svg https //pypi.org/project/claude tap/ ! Python version https //img.shields.io/pypi/pyversions/claude tap.svg https //pypi.org/project/claude tap/ ! License https //img.shields.io/github/license/liaohch3/claude tap.svg https //github.com/liaohch3/claude tap/blob/main/LICENSE ! GitHub stars https //img.shields.io/github/stars/liaohch3/claude tap?style=social https //github.com/liaohch3/claude tap/stargazers ! All Contributors https //img.shields.io/badge/all contributors 9 orange.svg contributors 中文文档 README zh.md claude tap i |


## Key Files

### Manifests

- .agents/docs/README.md
- .agents/docs/standards/README.md
- docs/evidence/pr114/README.md
- docs/evidence/pr157/README.md
- .agents/evidence/pr/276-double-serialized-body/README.md
- .agents/evidence/pr/286/README.md
- .agents/evidence/pr/287/README.md
- .agents/evidence/pr/305-cache-hit-rate/README.md
- .agents/evidence/pr/codebuddy-cli/README.md
- .agents/evidence/pr/empty-trace-viewer/README.md
- .agents/evidence/pr/gemini-cli/README.md
- .agents/evidence/pr/issue129/README.md
- .agents/evidence/pr/issue143/README.md
- .agents/evidence/pr/issue150/README.md
- .agents/evidence/pr/opencode-real-quality/README.md
- .agents/evidence/pr/pr139/README.md
- .agents/evidence/pr/pr291/README.md
- .agents/evidence/pr/pr329/README.md
- .agents/evidence/pr/pr73/README.md
- .agents/evidence/pr/pr74/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- .claude/CLAUDE.md
- .agents/docs/architecture/manifest.yaml
- .github/PULL_REQUEST_TEMPLATE/plan.md


### Agent Instruction Files

- AGENTS.md
- .claude/CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| .agents | 84 |
| tests | 65 |
| claude_tap | 45 |
| docs | 19 |
| .github | 16 |
| scripts | 15 |
| .all-contributorsrc | 1 |
| .claude | 1 |
| .githooks | 1 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |
| .python-version | 1 |
| AGENTS.md | 1 |
| CHANGELOG.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .md | 101 |
| .py | 100 |
| .js | 12 |
| .json | 8 |
| .yml | 7 |
| .html | 6 |
| [no-ext] | 5 |
| .sh | 4 |
| .jsonl | 3 |
| .mp4 | 3 |
| .txt | 2 |
| .yaml | 2 |
| .cast | 1 |
| .css | 1 |
| .svg | 1 |
| .toml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
