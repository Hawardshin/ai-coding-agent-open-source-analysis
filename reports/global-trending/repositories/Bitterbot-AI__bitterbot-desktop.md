# Bitterbot-AI/bitterbot-desktop

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Bitterbot-AI/bitterbot-desktop |
| local path | sources/Bitterbot-AI__bitterbot-desktop |
| HEAD | 6c995e3 |
| stars/forks | 2392 / 417 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T23:41:21Z |
| trendScore / priorityScore | 143 / 470 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | benchmarks/arc-agi-3/kaggle/bitterbot_memory_py/README.md, benchmarks/arc-agi-3/README.md, benchmarks/biomemeval/README.md |
| Cloud native / infrastructure | 500 | benchmarks/arc-agi-3/kaggle/bitterbot_memory_py/README.md, extensions/google-gemini-cli-auth/README.md, AGENTS.md |
| Developer tools / DX | 475 | benchmarks/arc-agi-3/README.md, extensions/google-gemini-cli-auth/README.md, AGENTS.md |
| RAG / retrieval / knowledge | 193 | benchmarks/arc-agi-3/kaggle/bitterbot_memory_py/README.md, benchmarks/arc-agi-3/README.md, benchmarks/biomemeval/README.md |
| Security / supply chain | 156 | extensions/google-gemini-cli-auth/README.md, README.md, deploy/relay-fleet/README.md |
| Coding agent / software automation | 87 | benchmarks/arc-agi-3/README.md, docs/agents/arc-agi-3.md, docs/agents/long-horizon.md |
| Observability / evaluation | 83 | benchmarks/arc-agi-3/README.md, benchmarks/biomemeval/README.md, benchmarks/dream-ablation/README.md |
| Data / ML platform | 82 | benchmarks/dream-ablation/README.md, benchmarks/longmemeval/README.md, AGENTS.md |
| Database / data infrastructure | 82 | benchmarks/arc-agi-3/kaggle/bitterbot_memory_py/README.md, benchmarks/biomemeval/README.md, benchmarks/dream-ablation/README.md |
| MCP / agent interoperability | 74 | benchmarks/arc-agi-3/kaggle/bitterbot_memory_py/README.md, benchmarks/arc-agi-3/README.md, benchmarks/arc-agi-3/CLAUDE.md |
| Frontend / app framework | 55 | AGENTS.md, desktop/README.md, README.md |
| Local LLM / inference | 28 | benchmarks/arc-agi-3/kaggle/bitterbot_memory_py/README.md, package.json, docs/agents/arc-agi-3.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 4281 |
| manifests | 40 |
| docs | 516 |
| tests | 1169 |
| ci/ops | 9 |
| spec artifacts | 6 |
| agent instruction files | 5 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Edit .env with your Anthropic API key (ANTHROPIC_API_KEY) | Quick Start / Edit .env with your Anthropic API key (ANTHROPIC_API_KEY) / and optionally: TAVILY_API_KEY, BRAVE_API_KEY, OPENAI_API_KEY, NEARAI_API_KEY / A Biological Brain / The Dream Engine / Continuous Memory / Agent Identity / Working Memory State / The Phenotype (Ego State) / The Bond (Theory of Mind) | <p align="center" <img src="docs/public/Bitterbot logo.svg" alt="Bitterbot logo" width="72" </p <p align="center" <picture <source media=" prefers color scheme dark " srcset="docs/public/bitterbot title dark.svg" <source media=" prefers color scheme light " srcset="docs/public/bitterbot title light.svg" <img src="docs/public/bitterbot title light.svg" alt="bitterbot" height="48" </picture </p <p align="center" <strong A local first personal AI with biological memory, a dream engine, and a P2P skills economy.</strong </p <p align="center" <a href="https //github.com/Bitterbot AI/bitterbot desktop/releases" <img src="https //img.shields.io/badge/version 2026.2.15 beta 7c3aed?style=flat square" |


## Key Files

### Manifests

- benchmarks/arc-agi-3/kaggle/bitterbot_memory_py/README.md
- benchmarks/arc-agi-3/README.md
- benchmarks/biomemeval/README.md
- benchmarks/dream-ablation/README.md
- benchmarks/longmemeval/README.md
- extensions/google-gemini-cli-auth/README.md
- AGENTS.md
- benchmarks/arc-agi-3/CLAUDE.md
- src/gateway/server-methods/AGENTS.md
- desktop/README.md
- README.md
- deploy/bootnode/README.md
- deploy/relay-fleet/README.md
- extensions/google-antigravity-auth/README.md
- extensions/qwen-portal-auth/README.md
- extensions/twitch/README.md
- src/hooks/bundled/README.md
- src/gateway/server-methods/CLAUDE.md
- benchmarks/arc-agi-3/kaggle/bitterbot_memory_py/pyproject.toml
- extensions/google-gemini-cli-auth/package.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- benchmarks/arc-agi-3/CLAUDE.md
- src/gateway/server-methods/AGENTS.md
- docs/cli/agents.md
- src/gateway/server-methods/CLAUDE.md
- docs/concepts/architecture.md


### Agent Instruction Files

- AGENTS.md
- benchmarks/arc-agi-3/CLAUDE.md
- src/gateway/server-methods/AGENTS.md
- docs/cli/agents.md
- src/gateway/server-methods/CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| src | 3280 |
| docs | 277 |
| benchmarks | 268 |
| desktop | 173 |
| extensions | 81 |
| skills | 76 |
| scripts | 40 |
| test | 17 |
| deploy | 10 |
| orchestrator | 8 |
| .github | 6 |
| .detect-secrets.cfg | 1 |
| .dockerignore | 1 |
| .env.example | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 3459 |
| .md | 509 |
| .tsx | 115 |
| .json | 39 |
| .py | 39 |
| .sh | 28 |
| [no-ext] | 17 |
| .mjs | 15 |
| .rs | 10 |
| .yml | 8 |
| .svg | 6 |
| .toml | 4 |
| .yaml | 4 |
| .css | 3 |
| .jsonl | 3 |
| .example | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
