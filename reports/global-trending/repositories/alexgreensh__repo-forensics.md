# alexgreensh/repo-forensics

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/alexgreensh/repo-forensics |
| local path | sources/alexgreensh__repo-forensics |
| HEAD | a0d82f9 |
| stars/forks | 107 / 17 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T22:06:58Z |
| trendScore / priorityScore | 150 / 440 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | README.md, plugins/repo-forensics/skills/forensify/prompts/domain_commands.txt, plugins/repo-forensics/skills/forensify/prompts/domain_mcp.txt |
| Security / supply chain | 500 | README.md, plugins/repo-forensics/skills/forensify/prompts/domain_commands.txt, plugins/repo-forensics/skills/forensify/prompts/domain_credentials.txt |
| AI agent / orchestration | 296 | README.md, plugins/repo-forensics/skills/forensify/prompts/domain_commands.txt, plugins/repo-forensics/skills/forensify/prompts/domain_hooks.txt |
| Coding agent / software automation | 282 | README.md, plugins/repo-forensics/skills/forensify/prompts/domain_credentials.txt, plugins/repo-forensics/skills/forensify/prompts/domain_hooks.txt |
| Observability / evaluation | 139 | README.md, skills/repo-forensics/tests/test_scan_mcp_security.py, plugins/repo-forensics/skills/repo-forensics/scripts/scan_mcp_security.py |
| Database / data infrastructure | 59 | README.md, plugins/repo-forensics/skills/forensify/prompts/domain_mcp.txt, skills/forensify/prompts/domain_mcp.txt |
| Cloud native / infrastructure | 34 | README.md, skills/repo-forensics/tests/test_scan_mcp_security.py, plugins/repo-forensics/skills/repo-forensics/references/mcp-attack-patterns.md |
| Frontend / app framework | 29 | README.md, skills/repo-forensics/tests/corpus/benign/package.json, skills/repo-forensics/tests/conftest.py |
| RAG / retrieval / knowledge | 27 | skills/repo-forensics/tests/test_scan_agent_skills.py, plugins/repo-forensics/skills/repo-forensics/scripts/scan_agent_skills.py, skills/repo-forensics/scripts/scan_agent_skills.py |
| Developer tools / DX | 25 | README.md, skills/repo-forensics/tests/test_scan_agent_skills.py, skills/repo-forensics/tests/test_scan_mcp_security.py |
| Data / ML platform | 17 | README.md, plugins/repo-forensics/skills/repo-forensics/references/mcp-attack-patterns.md, plugins/repo-forensics/skills/repo-forensics/scripts/scan_agent_skills.py |
| Local LLM / inference | 2 | skills/repo-forensics/tests/test_scan_mcp_security.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 307 |
| manifests | 5 |
| docs | 28 |
| tests | 78 |
| ci/ops | 4 |
| spec artifacts | 16 |
| agent instruction files | 14 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | restart Codex, then prove Codex registered the hooks | Install / restart Codex, then prove Codex registered the hooks / Quick Start / Zero-config self-scan -- proves it works with no setup: / Scan any repo, skill, or MCP server: / Auto-Protection (Hooks) / What It Finds / How It Works / Detection That Stays Fresh / Battle-Tested Against Real Attacks | <p align="center" <img src="diagrams/hero.svg" alt="Repo Forensics v2" width="900"/ </p <h1 align="center" Repo Forensics</h1 <h3 align="center" npm audit for AI agent plugins, skills, and MCP servers.</h3 <p align="center" Audit untrusted repos before they touch your agent. Fully local, self updating detection, zero dependencies, zero telemetry. </p <p align="center" <a href="https //github.com/alexgreensh/repo forensics/releases/latest" <img src="https //img.shields.io/github/v/release/alexgreensh/repo forensics?label=version&color=green" alt="Latest release" </a <a href="https //github.com/alexgreensh/repo forensics/releases" <img src="https //img.shields.io/github/release date/alexgreens |


## Key Files

### Manifests

- README.md
- plugins/repo-forensics/skills/repo-forensics/data/README.md
- skills/repo-forensics/data/README.md
- skills/repo-forensics/tests/corpus/benign/Dockerfile
- skills/repo-forensics/tests/corpus/benign/package.json


### Spec / Docs / Prompt Artifacts

- plugins/repo-forensics/skills/forensify/prompts/domain_commands.txt
- plugins/repo-forensics/skills/forensify/prompts/domain_credentials.txt
- plugins/repo-forensics/skills/forensify/prompts/domain_hooks.txt
- plugins/repo-forensics/skills/forensify/prompts/domain_mcp.txt
- plugins/repo-forensics/skills/forensify/prompts/domain_plugins.txt
- plugins/repo-forensics/skills/forensify/prompts/domain_skills.txt
- plugins/repo-forensics/skills/forensify/prompts/synthesis.txt
- skills/forensify/prompts/domain_commands.txt
- skills/forensify/prompts/domain_credentials.txt
- skills/forensify/prompts/domain_hooks.txt
- skills/forensify/prompts/domain_mcp.txt
- skills/forensify/prompts/domain_plugins.txt
- skills/forensify/prompts/domain_skills.txt
- skills/forensify/prompts/synthesis.txt
- plugins/repo-forensics/skills/forensify/references/architecture.md
- skills/forensify/references/architecture.md


### Agent Instruction Files

- plugins/repo-forensics/skills/forensify/prompts/domain_commands.txt
- plugins/repo-forensics/skills/forensify/prompts/domain_credentials.txt
- plugins/repo-forensics/skills/forensify/prompts/domain_hooks.txt
- plugins/repo-forensics/skills/forensify/prompts/domain_mcp.txt
- plugins/repo-forensics/skills/forensify/prompts/domain_plugins.txt
- plugins/repo-forensics/skills/forensify/prompts/domain_skills.txt
- plugins/repo-forensics/skills/forensify/prompts/synthesis.txt
- skills/forensify/prompts/domain_commands.txt
- skills/forensify/prompts/domain_credentials.txt
- skills/forensify/prompts/domain_hooks.txt
- skills/forensify/prompts/domain_mcp.txt
- skills/forensify/prompts/domain_plugins.txt
- skills/forensify/prompts/domain_skills.txt
- skills/forensify/prompts/synthesis.txt


## Top Directories

| dir | count |
| --- | --- |
| skills | 164 |
| plugins | 97 |
| hooks | 8 |
| scripts | 7 |
| diagrams | 6 |
| .github | 5 |
| iocs | 4 |
| .claude-plugin | 2 |
| .agents | 1 |
| .codex-plugin | 1 |
| .forensicsignore | 1 |
| .gitignore | 1 |
| .orphaned_at | 1 |
| action.yml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 164 |
| .json | 53 |
| .md | 28 |
| .sh | 17 |
| .txt | 14 |
| [no-ext] | 9 |
| .svg | 6 |
| .yml | 6 |
| .sb | 4 |
| .csv | 2 |
| .sig | 2 |
| .css | 1 |
| .example | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
