# containers/ramalama

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/containers/ramalama |
| local path | sources/containers__ramalama |
| HEAD | 94abb03 |
| stars/forks | 2902 / 343 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T15:10:30Z |
| trendScore / priorityScore | 171 / 468 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 500 | docs/demo/README.md, README.md, test/e2e/README.md |
| Local LLM / inference | 500 | README.md, CLAUDE.md, docs/ramalama-rag.1.md |
| RAG / retrieval / knowledge | 211 | docs/demo/README.md, README.md, CLAUDE.md |
| Coding agent / software automation | 84 | CLAUDE.md, docs/demo/camera-demo.html, docs/ramalama-sandbox.1.md |
| Developer tools / DX | 60 | README.md, CLAUDE.md, docsite/tsconfig.json |
| MCP / agent interoperability | 53 | docs/demo/README.md, docs/options/mcp.md, docs/demo/ramalama.sh |
| Security / supply chain | 36 | docs/demo/README.md, README.md, Makefile |
| Observability / evaluation | 24 | README.md, docs/ramalama-benchmarks.1.md, docs/ramalama.1.md |
| Data / ML platform | 20 | docs/ramalama-rag.1.md, docs/ramalama-inspect.1.md, docs/ramalama-cann.7.md |
| AI agent / orchestration | 16 | docs/ramalama-sandbox.1.md, docs/ramalama.1.md, docs/ramalama.conf |
| Database / data infrastructure | 16 | docs/demo/README.md, README.md, docs/ramalama-rag.1.md |
| Frontend / app framework | 5 | docsite/package.json, .github/workflows/approve-command.yml |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 507 |
| manifests | 13 |
| docs | 103 |
| tests | 139 |
| ci/ops | 7 |
| spec artifacts | 2 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Remove the executable | Description / Install / Install on macOS (Self-Contained Installer) / Install on Fedora / Fedora Silverblue and Toolbox / Install via PyPI / Install script (Linux and macOS) / Install on Windows / Uninstall / Uninstall via pip | <p align="center" <img src="https //github.com/user attachments/assets/1a338ecf dc84 4495 8c70 16882955da47" width=50% </p <p align="center" <a href="https //github.com/containers/ramalama/issues" <img src="https //img.shields.io/github/issues/containers/ramalama?style=flat square" height="22" alt="Open Issues"/ </a <a href="https //github.com/containers/ramalama/blob/main/LICENSE" <img src="https //img.shields.io/github/license/containers/ramalama?style=flat square" height="22" alt="License"/ </a <a href="https //github.com/containers/ramalama" <img src="https //img.shields.io/github/languages/top/containers/ramalama?style=flat square" height="22" alt="Top language"/ </a <a href="https //py |


## Key Files

### Manifests

- docs/demo/README.md
- docs/README.md
- README.md
- test/e2e/README.md
- CLAUDE.md
- docs/Makefile
- docsite/Makefile
- docsite/package.json
- docsite/tsconfig.json
- Makefile
- pyproject.toml
- container-images/common/Makefile
- ramalama/compose.py


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- Roadmap.md


### Agent Instruction Files

- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| test | 134 |
| ramalama | 108 |
| docs | 86 |
| .tekton | 47 |
| container-images | 42 |
| docsite | 23 |
| .github | 12 |
| scripts | 10 |
| logos | 7 |
| hack | 5 |
| completions | 3 |
| plans | 2 |
| .codespelldict | 1 |
| .fmf | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 175 |
| .md | 84 |
| .yaml | 72 |
| [no-ext] | 39 |
| .sh | 27 |
| .container | 14 |
| .image | 9 |
| .in | 9 |
| .json | 9 |
| .svg | 9 |
| .volume | 9 |
| .txt | 8 |
| .yml | 7 |
| .html | 4 |
| .conf | 3 |
| .css | 3 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
