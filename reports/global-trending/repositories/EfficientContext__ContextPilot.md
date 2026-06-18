# EfficientContext/ContextPilot

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/EfficientContext/ContextPilot |
| local path | sources/EfficientContext__ContextPilot |
| HEAD | 1fa0a14 |
| stars/forks | 115 / 5 |
| language | Python |
| license |  |
| pushedAt | 2026-06-16T14:09:50Z |
| trendScore / priorityScore | 136 / 386 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval / knowledge | 437 | examples/README.md, docs/README.md, examples/offline/README.md |
| Data / ML platform | 264 | examples/README.md, docs/README.md, examples/offline/README.md |
| Local LLM / inference | 239 | examples/README.md, docs/README.md, README.md |
| Cloud native / infrastructure | 142 | examples/README.md, docs/README.md, examples/openclaw/README.md |
| Observability / evaluation | 129 | examples/README.md, docs/README.md, openclaw-plugin/README.md |
| AI agent / orchestration | 71 | docs/README.md, examples/openclaw/README.md, openclaw-plugin/README.md |
| Security / supply chain | 51 | examples/construct_rag_data/multihopRAG_bm25.py, docs/guides/hermes-monitor.md, tests/test_contextpilot_savings_skill.py |
| Developer tools / DX | 43 | examples/README.md, examples/offline/README.md, examples/http_server_example.py |
| Coding agent / software automation | 34 | opencode-plugin/package.json, docs/guides/openclaw.md, docs/guides/opencode.md |
| Database / data infrastructure | 5 | tests/test_http_intercept.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 183 |
| manifests | 15 |
| docs | 29 |
| tests | 39 |
| ci/ops | 11 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Ask OpenClaw to analyze vendor contracts (ContextPilot deduplicates shared content automatically) | News / About / Performance at a Glance / Installation / OpenClaw / Hermes Agent / vLLM / SGLang / Mac / Apple Silicon — llama.cpp / Getting Started / Quick Start with OpenClaw | <div align="center" <img src="assets/about.png" alt="ContextPilot Logo" width="600"/ <h2 <strong ContextPilot Fast Long Context Inference via Context Reuse</strong </h2 ! Python https //img.shields.io/badge/python ≥3.10 blue https //www.python.org/ ! PyPI https //img.shields.io/pypi/v/contextpilot https //pypi.org/project/contextpilot/ ! License https //img.shields.io/badge/license Apache%202.0 green LICENSE <p <strong 4–12× cache hits 1.5–3× faster prefill ~36% token savings</strong across vLLM, SGLang, RAG, AI Agents, and more.</p </div Documentation https //efficientcontext.github.io/contextpilot docs/ Examples examples/ Benchmarks https //efficientcontext.github.io/contextpilot docs/refe |


## Key Files

### Manifests

- examples/README.md
- docs/README.md
- examples/offline/README.md
- examples/openclaw/README.md
- openclaw-plugin/README.md
- README.md
- examples/openclaw/docker-compose.yml
- examples/openclaw/Dockerfile
- docker/Dockerfile
- openclaw-plugin/package.json
- openclaw-plugin/tsconfig.json
- opencode-plugin/package.json
- opencode-plugin/tsconfig.json
- pyproject.toml
- requirements.txt


### Spec / Docs / Prompt Artifacts

- requirements.txt


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| contextpilot | 45 |
| tests | 36 |
| openclaw-plugin | 24 |
| examples | 22 |
| docs | 21 |
| docker | 7 |
| scripts | 7 |
| .github | 5 |
| opencode-plugin | 4 |
| __init__.py | 1 |
| .dockerignore | 1 |
| .gitignore | 1 |
| .opencode | 1 |
| CHANGELOG.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 101 |
| .md | 29 |
| .ts | 21 |
| .json | 7 |
| .sh | 6 |
| .yml | 6 |
| [no-ext] | 5 |
| .example | 1 |
| .lmcache | 1 |
| .pth | 1 |
| .sglang | 1 |
| .toml | 1 |
| .txt | 1 |
| .vllm | 1 |
| .yaml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
