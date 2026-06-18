# jonigl/ollama-mcp-bridge

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/jonigl/ollama-mcp-bridge |
| local path | sources/jonigl__ollama-mcp-bridge |
| HEAD | dda3a52 |
| stars/forks | 93 / 32 |
| language | Python |
| license |  |
| pushedAt | 2026-06-08T20:52:56Z |
| trendScore / priorityScore | 138 / 320 |


## Interpretation

- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 191 | mock-weather-mcp-server/README.md, README.md, mock-weather-mcp-server/pyproject.toml |
| Local LLM / inference | 163 | README.md, docker-compose.yml, Dockerfile |
| Cloud native / infrastructure | 73 | README.md, docker-compose.yml, pyproject.toml |
| Developer tools / DX | 19 | README.md, src/ollama_mcp_bridge/main.py, src/ollama_mcp_bridge/utils.py |
| AI agent / orchestration | 6 | README.md, .github/workflows/build_and_push_docker_image.yml, src/ollama_mcp_bridge/proxy_service.py |
| Security / supply chain | 6 | README.md, .github/workflows/build_and_push_docker_image.yml, .github/dependabot.yml |
| Frontend / app framework | 1 | README.md |
| Observability / evaluation | 1 | README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, sdk-api, security, securityTooling |
| stacks | Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 34 |
| manifests | 6 |
| docs | 4 |
| tests | 7 |
| ci/ops | 6 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Ollama MCP Bridge | Ollama MCP Bridge / Table of Contents / Features / Requirements / Installation / Quick Start / Or, install from PyPI with pip / Or, run with Docker Compose / Or, run with Docker only / Or, install from source | <p align="center" <img src="https //github.com/jonigl/ollama mcp bridge/raw/main/misc/ollama mcp bridge logo 512.png" width="256" / </p <p align="center" <i Provides an API layer in front of the Ollama API, seamlessly adding tools from multiple MCP servers so every Ollama request can access all connected tools transparently.</i </p Ollama MCP Bridge ! PyPI Package Version https //img.shields.io/pypi/v/ollama mcp bridge?label=ollama mcp bridge https //pypi.org/project/ollama mcp bridge/ ! CI https //github.com/jonigl/ollama mcp bridge/actions/workflows/ci.yml/badge.svg https //github.com/jonigl/ollama mcp bridge/actions/workflows/ci.yml ! Test Publish https //github.com/jonigl/ollama mcp brid |


## Key Files

### Manifests

- mock-weather-mcp-server/README.md
- README.md
- mock-weather-mcp-server/pyproject.toml
- docker-compose.yml
- Dockerfile
- pyproject.toml


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| src | 8 |
| tests | 7 |
| .github | 6 |
| mock-weather-mcp-server | 3 |
| .dockerignore | 1 |
| .gitignore | 1 |
| CI.md | 1 |
| CONTRIBUTING.md | 1 |
| docker-compose.yml | 1 |
| Dockerfile | 1 |
| LICENSE | 1 |
| mcp-config.json | 1 |
| pyproject.toml | 1 |
| README.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 16 |
| .yml | 7 |
| .md | 4 |
| [no-ext] | 4 |
| .toml | 2 |
| .json | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
