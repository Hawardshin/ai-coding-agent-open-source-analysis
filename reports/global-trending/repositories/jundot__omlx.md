# jundot/omlx

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/jundot/omlx |
| local path | sources/jundot__omlx |
| HEAD | 13abe21 |
| stars/forks | 16768 / 1419 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T09:28:19Z |
| trendScore / priorityScore | 134 / 435 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Local LLM / inference | 302 | packaging/README.md, README.md, omlx/patches/deepseek_v4/README.md |
| RAG / retrieval / knowledge | 228 | README.md, tests/test_audio_memory.py, tests/test_cli.py |
| MCP / agent interoperability | 224 | README.md, pyproject.toml, mcp.example.json |
| Data / ML platform | 217 | packaging/README.md, README.md, pyproject.toml |
| Observability / evaluation | 210 | README.md, pyproject.toml, tests/test_accuracy_benchmark.py |
| Developer tools / DX | 162 | README.md, pyproject.toml, tests/test_app_bundle_cli_wrapper.py |
| Security / supply chain | 61 | README.md, tests/test_mcp_types.py, apps/omlx-mac/Sources/AppView/Screens/SecurityScreen.swift |
| AI agent / orchestration | 43 | README.md, omlx/patches/deepseek_v4/README.md, tests/test_accuracy_benchmark.py |
| Coding agent / software automation | 28 | README.md, tests/test_cli.py, omlx/cli.py |
| Cloud native / infrastructure | 14 | pyproject.toml, tests/test_audio_memory.py, tests/test_benchmark.py |
| Database / data infrastructure | 4 | mcp.example.json, omlx/mcp/config.py |
| Frontend / app framework | 1 | docs/experimental/dflash_mlx_integration.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python, Swift, Ruby |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 630 |
| manifests | 4 |
| docs | 14 |
| tests | 215 |
| ci/ops | 2 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Upgrade to the latest version | Install / macOS App / Homebrew / Upgrade to the latest version / Run as a background service (auto-restarts on crash) / Optional: MCP (Model Context Protocol) support / From Source / Quickstart / macOS App / CLI | <p align="center" <picture <source media=" prefers color scheme dark " srcset="docs/images/icon rounded dark.svg" width="140" <source media=" prefers color scheme light " srcset="docs/images/icon rounded light.svg" width="140" <img alt="oMLX" src="docs/images/icon rounded light.svg" width="140" </picture </p <h1 align="center" oMLX</h1 <p align="center" <b LLM inference, optimized for your Mac</b <br Continuous batching and tiered KV caching, managed directly from your menu bar.</p <p align="center" <a href="https //www.buymeacoffee.com/jundot" <img src="https //cdn.buymeacoffee.com/buttons/v2/default yellow.png" alt="Buy Me A Coffee" height="40" </a </p <p align="center" <img src="https //i |


## Key Files

### Manifests

- packaging/README.md
- README.md
- omlx/patches/deepseek_v4/README.md
- pyproject.toml


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| omlx | 308 |
| tests | 179 |
| apps | 117 |
| .github | 5 |
| docs | 5 |
| packaging | 4 |
| .gitignore | 1 |
| Formula | 1 |
| LICENSE | 1 |
| mcp.example.json | 1 |
| pyproject.toml | 1 |
| pytest.ini | 1 |
| README.fr.md | 1 |
| README.ja.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 365 |
| .swift | 93 |
| .woff2 | 38 |
| .json | 22 |
| .jsonl | 20 |
| .ttf | 20 |
| .svg | 16 |
| .html | 12 |
| .md | 12 |
| .css | 8 |
| .js | 4 |
| [no-ext] | 4 |
| .yml | 3 |
| .toml | 2 |
| .csv | 1 |
| .entitlements | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
