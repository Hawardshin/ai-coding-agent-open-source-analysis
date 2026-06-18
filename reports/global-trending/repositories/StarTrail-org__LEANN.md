# StarTrail-org/LEANN

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/StarTrail-org/LEANN |
| local path | sources/StarTrail-org__LEANN |
| HEAD | cfb1382 |
| stars/forks | 12202 / 1094 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T05:38:01Z |
| trendScore / priorityScore | 161 / 493 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval / knowledge | 500 | benchmarks/README.md, apps/multimodal/vision-based-pdf-multi-vector/README.md, benchmarks/bm25_diskann_baselines/README.md |
| MCP / agent interoperability | 353 | benchmarks/contextbench/README.md, packages/leann-mcp/README.md, README.md |
| Developer tools / DX | 271 | apps/multimodal/vision-based-pdf-multi-vector/README.md, benchmarks/contextbench/README.md, benchmarks/enron_emails/README.md |
| Data / ML platform | 250 | benchmarks/README.md, apps/multimodal/vision-based-pdf-multi-vector/README.md, benchmarks/bm25_diskann_baselines/README.md |
| Local LLM / inference | 243 | benchmarks/enron_emails/README.md, tests/README.md, README.md |
| Observability / evaluation | 224 | benchmarks/contextbench/README.md, benchmarks/enron_emails/README.md, benchmarks/financebench/README.md |
| Coding agent / software automation | 145 | packages/leann-mcp/README.md, README.md, CLAUDE.md |
| AI agent / orchestration | 49 | packages/leann-mcp/README.md, skills/leann-memory/README.md, README.md |
| Cloud native / infrastructure | 36 | tests/README.md, docker/README.md, tests/openclaw/docker-compose.yml |
| Database / data infrastructure | 36 | skills/leann-memory/README.md, README.md, packages/leann/README.md |
| Security / supply chain | 35 | README.md, examples/mcp_integration_demo.py, tests/test_rebuild_cli.py |
| Frontend / app framework | 21 | packages/leann-mcp/README.md, docs/react_agent.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Python, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 252 |
| manifests | 29 |
| docs | 46 |
| tests | 50 |
| ci/ops | 8 |
| spec artifacts | 2 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | CPU-only (Linux): use the `cpu` extra (e.g. `leann[cpu]`) | Why LEANN? / Installation / 📦 Prerequisites: Install uv / 🚀 Quick Install / CPU-only (Linux): use the `cpu` extra (e.g. `leann[cpu]`) / For MKL in DiskANN / For MKL in DiskANN / Install toolchain (if not already present) / Install C++ dependencies via vcpkg / Set environment variables (adjust VCPKG_ROOT to your vcpkg path) | <p align="center" <img src="assets/logo text.png" alt="LEANN Logo" width="400" </p <p align="center" <a href="https //trendshift.io/repositories/15049" target=" blank" <img src="https //trendshift.io/api/badge/repositories/15049" alt="yichuan w/LEANN Trendshift" style="width 250px; height 55px;" width="250" height="55"/ </a </p <p align="center" <img src="https //img.shields.io/badge/Python 3.9%20%7C%203.10%20%7C%203.11%20%7C%203.12%20%7C%203.13 blue.svg" alt="Python Versions" <img src="https //github.com/yichuan w/LEANN/actions/workflows/build and publish.yml/badge.svg" alt="CI Status" <img src="https //img.shields.io/badge/Platform Ubuntu%20%26%20Arch%20%26%20WSL%20%7C%20macOS%20 ARM64%2FI |


## Key Files

### Manifests

- benchmarks/README.md
- apps/multimodal/vision-based-pdf-multi-vector/README.md
- benchmarks/bm25_diskann_baselines/README.md
- benchmarks/contextbench/README.md
- benchmarks/enron_emails/README.md
- benchmarks/financebench/README.md
- benchmarks/laion/README.md
- benchmarks/update/README.md
- packages/leann-mcp/README.md
- skills/leann-memory/README.md
- tests/README.md
- docker/README.md
- README.md
- packages/leann-backend-flashlib-ivf/README.md
- packages/leann-backend-flashlib/README.md
- packages/leann-backend-ivf/README.md
- packages/leann-core/README.md
- packages/leann/README.md
- CLAUDE.md
- docker/Dockerfile


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- docs/roadmap.md


### Agent Instruction Files

- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| packages | 57 |
| tests | 49 |
| apps | 46 |
| benchmarks | 40 |
| docs | 20 |
| .github | 8 |
| examples | 7 |
| docker | 4 |
| skills | 3 |
| .vscode | 2 |
| data | 2 |
| .devcontainer | 1 |
| .gitignore | 1 |
| .gitmodules | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 164 |
| .md | 45 |
| [no-ext] | 10 |
| .toml | 8 |
| .yml | 8 |
| .json | 4 |
| .txt | 4 |
| .yaml | 2 |
| .cc | 1 |
| .cpu | 1 |
| .dev | 1 |
| .ipynb | 1 |
| .jpg | 1 |
| .proto | 1 |
| .sh | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
