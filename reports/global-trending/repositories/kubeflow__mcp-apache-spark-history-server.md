# kubeflow/mcp-apache-spark-history-server

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/kubeflow/mcp-apache-spark-history-server |
| local path | sources/kubeflow__mcp-apache-spark-history-server |
| HEAD | ef9b081 |
| stars/forks | 177 / 65 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T22:31:01Z |
| trendScore / priorityScore | 147 / 414 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 427 | examples/integrations/strands-agents/README.md, examples/aws/emr/README.md, examples/aws/glue/README.md |
| Developer tools / DX | 257 | examples/integrations/strands-agents/README.md, skills/cli/examples/compare/README.md, examples/aws/emr/README.md |
| Cloud native / infrastructure | 228 | examples/aws/emr/README.md, examples/aws/glue/README.md, examples/integrations/claude-desktop/README.md |
| AI agent / orchestration | 175 | examples/integrations/strands-agents/README.md, examples/aws/emr/README.md, examples/aws/glue/README.md |
| Security / supply chain | 76 | examples/integrations/strands-agents/README.md, examples/integrations/langgraph/README.md, deploy/kubernetes/helm/README.md |
| Local LLM / inference | 71 | examples/integrations/strands-agents/README.md, examples/integrations/langgraph/README.md, examples/integrations/strands-agents/requirements.txt |
| Observability / evaluation | 62 | examples/integrations/strands-agents/README.md, skills/cli/examples/compare/README.md, examples/integrations/langgraph/README.md |
| Data / ML platform | 20 | skills/cli/examples/compare/findings/q39a-v4.0.md, skills/cli/examples/compare/findings/q41-v4.0.md, skills/cli/examples/compare/findings/q5-v4.0.md |
| Coding agent / software automation | 11 | skills/cli/examples/compare/README.md, examples/integrations/claude-desktop/README.md, skills/cli/README.md |
| Database / data infrastructure | 7 | examples/integrations/strands-agents/README.md, examples/integrations/langgraph/README.md, pyproject.toml |
| RAG / retrieval / knowledge | 3 | README.md, tests/emr/test_emr_persistent_ui_client.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, devtools, example-rich, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Python, Go |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 240 |
| manifests | 18 |
| docs | 33 |
| tests | 42 |
| ci/ops | 28 |
| spec artifacts | 2 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Kubeflow Spark AI Toolkit | Kubeflow Spark AI Toolkit / 🏗️ Architecture / 🛠️ SHS CLI (`shs`) — For Engineers & Scripts / Install / Auto-detect latest version, OS, and architecture / Quick Start / Generate a config file / Explore applications / Use as a skill with Claude Code or Kiro / ⚡ MCP Server — For AI Agents | Kubeflow Spark AI Toolkit ! CI https //github.com/kubeflow/mcp apache spark history server/actions/workflows/ci.yml/badge.svg?branch=main https //github.com/kubeflow/mcp apache spark history server/actions ! Python 3.12+ https //img.shields.io/badge/python 3.12+ blue.svg https //www.python.org/downloads/ ! MCP https //img.shields.io/badge/MCP Compatible green.svg https //modelcontextprotocol.io/ ! License https //img.shields.io/badge/License Apache%202.0 blue.svg https //opensource.org/licenses/Apache 2.0 ! Kubeflow https //img.shields.io/badge/Kubeflow Official orange.svg https //github.com/kubeflow ! Slack https //img.shields.io/badge/Slack CNCF%20%23mcp apache spark history server purple. |


## Key Files

### Manifests

- examples/integrations/strands-agents/README.md
- skills/cli/examples/compare/README.md
- examples/aws/emr/README.md
- examples/aws/glue/README.md
- examples/basic/README.md
- examples/integrations/claude-desktop/README.md
- examples/integrations/kiro/README.md
- examples/integrations/langgraph/README.md
- deploy/kubernetes/helm/README.md
- skills/cli/README.md
- README.md
- screenshots/README.md
- examples/integrations/strands-agents/requirements.txt
- examples/integrations/langgraph/requirements.txt
- skills/cli/go.mod
- Dockerfile
- pyproject.toml
- skills/cli/go.sum


### Spec / Docs / Prompt Artifacts

- examples/integrations/strands-agents/requirements.txt
- examples/integrations/langgraph/requirements.txt


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| src | 73 |
| skills | 72 |
| examples | 22 |
| deploy | 20 |
| tests | 16 |
| .github | 9 |
| .devcontainer | 2 |
| openapi | 2 |
| .env.example | 1 |
| .gitignore | 1 |
| .markdownlint.yaml | 1 |
| .pre-commit-config.yaml | 1 |
| ADOPTERS.md | 1 |
| CHANGELOG.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 88 |
| .go | 40 |
| .yaml | 38 |
| .md | 33 |
| [no-ext] | 13 |
| .json | 9 |
| .zstd | 4 |
| .sh | 3 |
| .txt | 3 |
| .conf | 2 |
| .yml | 2 |
| .example | 1 |
| .mod | 1 |
| .sum | 1 |
| .toml | 1 |
| .tpl | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
