# LearningCircuit/local-deep-research

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/LearningCircuit/local-deep-research |
| local path | sources/LearningCircuit__local-deep-research |
| HEAD | c964494 |
| stars/forks | 8493 / 743 |
| language | Python |
| license |  |
| pushedAt | 2026-06-18T00:13:33Z |
| trendScore / priorityScore | 162 / 502 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 500 | examples/api_usage/http/README.md, examples/api_usage/programmatic/README.md, examples/elasticsearch/README.md |
| Observability / evaluation | 500 | examples/benchmarks/claude_grading/README.md, examples/benchmarks/gemini/README.md, examples/benchmarks/README.md |
| Security / supply chain | 401 | docs/processes/security-review-process/README.md, docs/processes/test-review/README.md, community_benchmark_results/README.md |
| Database / data infrastructure | 268 | examples/benchmarks/claude_grading/README.md, examples/benchmarks/gemini/README.md, docs/processes/security-review-process/README.md |
| Local LLM / inference | 256 | docs/processes/test-review/README.md, examples/api_usage/http/README.md, examples/api_usage/programmatic/README.md |
| RAG / retrieval / knowledge | 152 | docs/processes/test-review/README.md, examples/api_usage/programmatic/README.md, src/local_deep_research/security/egress/README.md |
| MCP / agent interoperability | 142 | docs/processes/test-review/README.md, src/local_deep_research/security/egress/README.md, README.md |
| Data / ML platform | 108 | community_benchmark_results/README.md, src/local_deep_research/benchmarks/metrics/README.md, src/local_deep_research/benchmarks/README.md |
| Developer tools / DX | 79 | examples/api_usage/README.md, src/local_deep_research/benchmarks/README.md, src/local_deep_research/web/database/README.md |
| Frontend / app framework | 74 | .github/workflows/README.md, .github/workflows/mcp-tests.yml, Dockerfile |
| AI agent / orchestration | 44 | examples/api_usage/programmatic/README.md, docs/processes/review-process/README.md, src/local_deep_research/security/egress/README.md |
| Coding agent / software automation | 10 | src/local_deep_research/security/egress/README.md, README.md, docs/mcp-server.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 2964 |
| manifests | 37 |
| docs | 203 |
| tests | 1809 |
| ci/ops | 74 |
| spec artifacts | 4 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Local Deep Research | Local Deep Research / 🚀 What is Local Deep Research? / ⚡ Quick Start / Step 1: Pull and run Ollama / Step 2: Pull and run SearXNG for optimal search results / Step 3: Pull and run Local Deep Research / 🏗️ How It Works / Research / Build Your Knowledge Base / 🛡️ Security | Local Deep Research <div align="center" ! GitHub stars https //img.shields.io/github/stars/LearningCircuit/local deep research?style=for the badge https //github.com/LearningCircuit/local deep research/stargazers ! Docker Pulls https //img.shields.io/docker/pulls/localdeepresearch/local deep research?style=for the badge https //hub.docker.com/r/localdeepresearch/local deep research ! PyPI Downloads https //img.shields.io/pypi/dm/local deep research?style=for the badge https //pypi.org/project/local deep research/ ! Trendshift https //trendshift.io/api/badge/repositories/14116 https //trendshift.io/repositories/14116 ! Commits https //img.shields.io/github/commit activity/m/LearningCircuit/lo |


## Key Files

### Manifests

- examples/benchmarks/claude_grading/README.md
- examples/benchmarks/gemini/README.md
- examples/benchmarks/README.md
- examples/llm_integration/README.md
- docs/processes/security-review-process/README.md
- docs/processes/test-review/README.md
- examples/api_usage/http/advanced/README.md
- examples/api_usage/http/README.md
- examples/api_usage/programmatic/README.md
- examples/api_usage/README.md
- examples/elasticsearch/README.md
- examples/optimization/README.md
- community_benchmark_results/README.md
- .github/workflows/README.md
- docs/processes/review-process/README.md
- docs/strategies/deleted/README.md
- src/local_deep_research/benchmarks/metrics/README.md
- src/local_deep_research/benchmarks/README.md
- src/local_deep_research/security/egress/README.md
- src/local_deep_research/web/database/README.md


### Spec / Docs / Prompt Artifacts

- docs/architecture/DATABASE_SCHEMA.md
- docs/architecture.md
- docs/architecture/OVERVIEW.md
- docs/architecture/SEMANTIC_SEARCH.md


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| tests | 1808 |
| src | 748 |
| changelog.d | 95 |
| .github | 89 |
| docs | 70 |
| examples | 65 |
| .pre-commit-hooks | 48 |
| scripts | 18 |
| cookiecutter-docker | 4 |
| community_benchmark_results | 3 |
| .gitleaksignore | 1 |
| .grype.yaml | 1 |
| bearer.yml | 1 |
| CONTRIBUTING.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 2152 |
| .js | 347 |
| .md | 202 |
| .yml | 78 |
| .css | 60 |
| .html | 44 |
| .json | 38 |
| .sh | 20 |
| .jinja2 | 8 |
| .yaml | 4 |
| [no-ext] | 4 |
| .mp3 | 2 |
| .txt | 2 |
| .in | 1 |
| .toml | 1 |
| .xml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
