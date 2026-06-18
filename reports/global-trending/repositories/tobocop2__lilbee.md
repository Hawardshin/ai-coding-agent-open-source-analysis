# tobocop2/lilbee

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/tobocop2/lilbee |
| local path | sources/tobocop2__lilbee |
| HEAD | b7167f3 |
| stars/forks | 25 / 3 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T22:40:02Z |
| trendScore / priorityScore | 143 / 414 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Developer tools / DX | 500 | examples/agent-integration/AGENTS.md, AGENTS.md, README.md |
| RAG / retrieval / knowledge | 376 | examples/agent-integration/AGENTS.md, AGENTS.md, README.md |
| Local LLM / inference | 343 | AGENTS.md, README.md, pyproject.toml |
| MCP / agent interoperability | 199 | examples/agent-integration/AGENTS.md, AGENTS.md, README.md |
| AI agent / orchestration | 187 | examples/agent-integration/AGENTS.md, AGENTS.md, README.md |
| Cloud native / infrastructure | 87 | AGENTS.md, README.md, .github/workflows/security-scan.yml |
| Coding agent / software automation | 80 | examples/agent-integration/AGENTS.md, AGENTS.md, README.md |
| Data / ML platform | 50 | examples/agent-integration/AGENTS.md, AGENTS.md, README.md |
| Security / supply chain | 41 | AGENTS.md, pyproject.toml, .github/workflows/security-scan.yml |
| Database / data infrastructure | 16 | README.md, pyproject.toml, docs/architecture.md |
| Observability / evaluation | 9 | examples/agent-integration/AGENTS.md, README.md, pyproject.toml |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go, Java/Kotlin |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 663 |
| manifests | 9 |
| docs | 62 |
| tests | 205 |
| ci/ops | 21 |
| spec artifacts | 4 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | or | Quick start / Highlights / Why lilbee / What you can do with it / A library of your own files / Already using an MCP-aware agent? Hand setup to it. / Opencode integration (coming) / A reference for AI agents / Offline copies of websites / Documents, code, and scanned images | <p align="center" <a href="https //lilbee.sh/" <picture <source media=" prefers color scheme dark " srcset="docs/lilbee logo dark.svg" <img alt="lilbee" src="docs/lilbee logo light.svg" width="340" </picture </a </p <p align="center" <strong Run and manage local AI models, and search everything you own with them, all in one program.</strong </p <p align="center" <a href="https //lilbee.sh/" Project site</a &nbsp;·&nbsp; <a href="https //lilbee.sh/tutorial" Tutorial reels</a &nbsp;·&nbsp; <a href="https //pypi.org/project/lilbee/" PyPI</a &nbsp;·&nbsp; <a href="https //obsidian.lilbee.sh/" Obsidian plugin</a &nbsp;·&nbsp; <a href="https //lilbee.sh/api/" REST API</a </p <p align="center" <a h |


## Key Files

### Manifests

- examples/agent-integration/AGENTS.md
- AGENTS.md
- README.md
- tools/qa/README.md
- tools/wheel-build/README.md
- Makefile
- pyproject.toml
- packaging/docker/Dockerfile
- tools/qa/requirements.txt


### Spec / Docs / Prompt Artifacts

- examples/agent-integration/AGENTS.md
- AGENTS.md
- tools/qa/requirements.txt
- docs/architecture.md


### Agent Instruction Files

- examples/agent-integration/AGENTS.md
- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| src | 315 |
| tests | 203 |
| tools | 50 |
| .github | 36 |
| packaging | 16 |
| docs | 10 |
| scripts | 6 |
| site | 6 |
| examples | 3 |
| .gitignore | 1 |
| .gitleaks.toml | 1 |
| AGENTS.md | 1 |
| bucket | 1 |
| CHANGELOG.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 508 |
| .yml | 36 |
| .tcss | 33 |
| .md | 31 |
| .sh | 16 |
| [no-ext] | 9 |
| .json | 5 |
| .toml | 4 |
| .txt | 3 |
| .css | 2 |
| .svg | 2 |
| .xml | 2 |
| .csv | 1 |
| .go | 1 |
| .html | 1 |
| .ini | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
