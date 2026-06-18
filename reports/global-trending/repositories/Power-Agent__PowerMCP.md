# Power-Agent/PowerMCP

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Power-Agent/PowerMCP |
| local path | sources/Power-Agent__PowerMCP |
| HEAD | cc99f34 |
| stars/forks | 157 / 49 |
| language | Python |
| license |  |
| pushedAt | 2026-06-15T01:32:55Z |
| trendScore / priorityScore | 135 / 358 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | powermcp/README.md, ANDES/README.md, Egret/README.md |
| Developer tools / DX | 70 | powermcp/README.md, PSCAD/README.md, README.md |
| Coding agent / software automation | 63 | powermcp/README.md, ANDES/README.md, Egret/README.md |
| AI agent / orchestration | 27 | HOPE/README.md, PowerFactory/README.md, PyPSA/README.md |
| Security / supply chain | 17 | pandapower/README.md, PowerWorld/README.md, PSCAD/README.md |
| Data / ML platform | 16 | PowerFactory/README.md, PowerFactory/Agent_DIgSILENT.py, PowerFactory/MCP_PowerFactory.py |
| Database / data infrastructure | 8 | surge/README.md, PSLF/pslf_mcp.py, surge/surge_mcp.py |
| Observability / evaluation | 7 | PowerWorld/README.md, PSCAD/README.md, README.md |
| Cloud native / infrastructure | 6 | HOPE/README.md, PSCAD/README.md, PSCAD/pscad_mcp/core/executor.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, devtools, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, security, securityTooling |
| stacks | Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 2322 |
| manifests | 29 |
| docs | 17 |
| tests | 22 |
| ci/ops | 2 |
| spec artifacts | 12 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | PowerMCP ⚡ | PowerMCP ⚡ / 🌟 What is MCP? / 🤝 Our Community Vision / 🚀 Getting Started with MCP / 📖 Quick start / Video Demos / Useful MCP Tutorials / 📦 Installation / Set up with the interactive installer / CLI commands | PowerMCP ⚡ ! License MIT https //img.shields.io/badge/License MIT yellow.svg https //opensource.org/licenses/MIT ! Python Version https //img.shields.io/badge/python 3.10%2B blue.svg https //www.python.org/downloads/ PowerMCP is an open source collection of MCP servers for power system software like PowerWorld and OpenDSS. These tools enable LLMs to directly interact with power system applications, facilitating intelligent coordination, simulation, and control in the energy domain. 🌟 What is MCP? The Model Context Protocol https //modelcontextprotocol.io/introduction MCP is a revolutionary standard that enables AI applications to seamlessly connect with various external tools. Think of MCP |


## Key Files

### Manifests

- powermcp/README.md
- ANDES/README.md
- Egret/README.md
- HOPE/README.md
- LTSpice/README.md
- OpenDSS/README.md
- pandapower/README.md
- PowerFactory/README.md
- PowerWorld/README.md
- PSCAD/README.md
- PSLF/README.md
- PSSE/README.md
- PyPSA/README.md
- README.md
- surge/README.md
- ANDES/requirements.txt
- Egret/requirements.txt
- HOPE/pyproject.toml
- LTSpice/requirements.txt
- OpenDSS/requirements.txt


### Spec / Docs / Prompt Artifacts

- ANDES/requirements.txt
- Egret/requirements.txt
- LTSpice/requirements.txt
- OpenDSS/requirements.txt
- pandapower/requirements.txt
- PowerFactory/requirements.txt
- PowerWorld/requirements.txt
- PSLF/requirements.txt
- PSSE/requirements.txt
- PyPSA/requirements.txt
- surge/requirements.txt
- PSSE/psspy_command_json/prompt.json


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| PSSE | 2193 |
| OpenDSS | 19 |
| PSCAD | 19 |
| powermcp | 16 |
| tests | 12 |
| PSLF | 10 |
| HOPE | 9 |
| PowerFactory | 8 |
| surge | 5 |
| ANDES | 4 |
| Egret | 4 |
| pandapower | 4 |
| PowerWorld | 4 |
| PyPSA | 4 |


## Extension Distribution

| ext | count |
| --- | --- |
| .json | 2189 |
| .py | 75 |
| .md | 17 |
| .txt | 13 |
| .dss | 3 |
| .toml | 3 |
| .m | 2 |
| .sav | 2 |
| .yml | 2 |
| [no-ext] | 2 |
| .cntl | 1 |
| .con | 1 |
| .csv | 1 |
| .dycr | 1 |
| .dyd | 1 |
| .dyr | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
