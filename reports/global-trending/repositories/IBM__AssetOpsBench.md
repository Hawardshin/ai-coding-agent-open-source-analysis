# IBM/AssetOpsBench

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/IBM/AssetOpsBench |
| local path | sources/IBM__AssetOpsBench |
| HEAD | f8e4e7b |
| stars/forks | 1828 / 275 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T19:18:03Z |
| trendScore / priorityScore | 166 / 451 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | README.md, docs/evaluation.md, docs/mcp-servers.md |
| MCP / agent interoperability | 360 | README.md, docs/mcp-e2e-test-suite.md, docs/mcp-servers.md |
| Observability / evaluation | 279 | README.md, docs/mcp-e2e-test-suite.md, docs/evaluation.md |
| Cloud native / infrastructure | 113 | docs/mcp-e2e-test-suite.md, docs/evaluation.md, docs/mcp-servers.md |
| Developer tools / DX | 113 | docs/mcp-e2e-test-suite.md, docs/evaluation.md, docs/mcp-servers.md |
| Database / data infrastructure | 65 | README.md, docs/mcp-servers.md, docs/data.md |
| RAG / retrieval / knowledge | 47 | README.md, docs/guideline/case_study_industrial_asset_management.md, docs/guideline/case_study_wind_turbine.md |
| Data / ML platform | 46 | README.md, docs/static-json-evaluation.md, docs/acknowledgments.md |
| Security / supply chain | 39 | README.md, .github/workflows/secret-scan.yml, .github/workflows/stale.yml |
| Coding agent / software automation | 10 | README.md, docs/evaluation.md, docs/acknowledgments.md |
| Frontend / app framework | 8 | README.md, docs/guideline/case_study_industrial_asset_management.md, CONTRIBUTING.md |
| Local LLM / inference | 1 | README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, security, securityTooling |
| stacks | Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 221 |
| manifests | 3 |
| docs | 23 |
| tests | 54 |
| ci/ops | 5 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | AssetOpsBench | AssetOpsBench / AI Agents for Industrial Asset Operations & Maintenance / At a Glance / Quick Start / Clone and install / Try a scenario (to be enabled) / What is AssetOpsBench? / Domain-Specific MCP Servers / Agent Frameworks / MCP Environment | <div align="center" AssetOpsBench AI Agents for Industrial Asset Operations & Maintenance A unified, open framework for building, orchestrating, and evaluating domain specific AI agents in Industry 4.0. ! Stars https //img.shields.io/github/stars/IBM/AssetOpsBench?style=for the badge&logo=github&color=yellow https //github.com/IBM/AssetOpsBench/stargazers ! Forks https //img.shields.io/github/forks/IBM/AssetOpsBench?style=for the badge&logo=github https //github.com/IBM/AssetOpsBench/network/members ! License https //img.shields.io/badge/License Apache 2.0 green?style=for the badge LICENSE ! KDD 2026 https //img.shields.io/badge/KDD%202026 Accepted 0f62fe?style=for the badge publications ! I |


## Key Files

### Manifests

- README.md
- pyproject.toml
- src/couchdb/docker-compose.yaml


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| src | 184 |
| docs | 14 |
| .github | 6 |
| .all-contributorsrc | 1 |
| .env.public | 1 |
| .gitignore | 1 |
| .gitleaks.toml | 1 |
| .gitleaksignore | 1 |
| .pre-commit-config.yaml | 1 |
| .python-version | 1 |
| .secrets.baseline | 1 |
| .whitesource | 1 |
| CONTRIBUTING.md | 1 |
| INSTRUCTIONS.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 139 |
| .json | 22 |
| .md | 21 |
| [no-ext] | 7 |
| .bin | 5 |
| .safetensors | 5 |
| .yml | 5 |
| .txt | 3 |
| .yaml | 3 |
| .csv | 2 |
| .sh | 2 |
| .toml | 2 |
| .baseline | 1 |
| .code | 1 |
| .jsonl | 1 |
| .pickle | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
