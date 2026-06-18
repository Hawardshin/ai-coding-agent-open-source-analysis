# usemoss/moss

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/usemoss/moss |
| local path | sources/usemoss__moss |
| HEAD | ac6b047 |
| stars/forks | 423 / 50 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T01:49:54Z |
| trendScore / priorityScore | 136 / 436 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | examples/cookbook/agentphone/README.md, examples/cookbook/generalist-moss-voice-agent/README.md, examples/python-moss-agent/README.md |
| RAG / retrieval / knowledge | 399 | examples/cookbook/agentphone/README.md, examples/cookbook/generalist-moss-voice-agent/README.md, examples/voice-agents/airline-pnr/README.md |
| Developer tools / DX | 279 | examples/cookbook/agentphone/README.md, examples/cookbook/generalist-moss-voice-agent/README.md, examples/python-moss-agent/README.md |
| Frontend / app framework | 149 | examples/voice-agents/airline-pnr/README.md, examples/voice-agents/candidate-screening/README.md, examples/voice-agents/mortgage-lending/README.md |
| Cloud native / infrastructure | 101 | examples/cookbook/daytona/README.md, AGENTS.md, README.md |
| Local LLM / inference | 99 | examples/cookbook/sim/README.md, examples/ios/README.md, examples/ios/token-server/README.md |
| Database / data infrastructure | 66 | examples/voice-agents/candidate-screening/README.md, examples/voice-agents/README.md, examples/cookbook/autogen/README.md |
| Data / ML platform | 49 | examples/voice-agents/candidate-screening/README.md, examples/voice-agents/mortgage-lending/README.md, moss-live-labs/examples/advanced-voice-agent/README.md |
| Security / supply chain | 47 | examples/cookbook/agentphone/README.md, examples/cookbook/generalist-moss-voice-agent/README.md, examples/voice-agents/airline-pnr/README.md |
| MCP / agent interoperability | 26 | AGENTS.md, README.md, apps/agora-moss/README.md |
| Observability / evaluation | 19 | examples/voice-agents/airline-pnr/README.md, examples/voice-agents/candidate-screening/README.md, examples/voice-agents/README.md |
| Coding agent / software automation | 9 | examples/cookbook/moss-cognee-daytona/README.md, AGENTS.md, packages/moss-data-connector/moss-connector-supabase/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go, Swift, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 926 |
| manifests | 40 |
| docs | 168 |
| tests | 67 |
| ci/ops | 36 |
| spec artifacts | 11 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Create an index and add documents | Quickstart / Python / Create an index and add documents / Load and query — results in <10 ms / TypeScript / Why Moss? / Benchmarks / Features / Examples / Run the Python examples | <! markdownlint disable MD033 MD041 <div align="center" <img src="https //github.com/user attachments/assets/25f92357 a670 4564 881d e336f668c252" alt="Moss — Real time semantic search for AI agents. Sub 10 ms." width="1200" / <br / <br / ! License https //img.shields.io/badge/License BSD 2 Clause orange.svg https //opensource.org/licenses/BSD 2 Clause ! PyPI https //img.shields.io/pypi/v/moss?color=deepgreen https //pypi.org/project/moss/ ! PyPI downloads https //static.pepy.tech/personalized badge/inferedge moss core?period=total&units=international system&left color=grey&right color=blue&left text=pypi+downloads https //pepy.tech/project/inferedge moss core ! npm https //img.shields.io/np |


## Key Files

### Manifests

- examples/cookbook/agentphone/README.md
- examples/cookbook/generalist-moss-voice-agent/README.md
- examples/python-moss-agent/README.md
- examples/voice-agents/airline-pnr/README.md
- examples/voice-agents/candidate-screening/README.md
- examples/voice-agents/mortgage-lending/README.md
- examples/voice-agents/README.md
- moss-live-labs/examples/advanced-voice-agent/README.md
- moss-live-labs/examples/voice-agent/README.md
- examples/c/README.md
- examples/cookbook/autogen/README.md
- examples/cookbook/crewai/README.md
- examples/cookbook/daytona/README.md
- examples/cookbook/haystack/README.md
- examples/cookbook/langchain/README.md
- examples/cookbook/langgraph/README.md
- examples/cookbook/mastra/README.md
- examples/cookbook/moss-cognee-daytona/README.md
- examples/cookbook/pydantic-ai/README.md
- examples/cookbook/sim/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- examples/ios/token-server/python/requirements.txt
- examples/python-classification/requirements.txt
- examples/python/requirements.txt
- benchmarks/requirements.txt
- moss-live-labs/community-demos/voice-agents/bharat-benefits/requirements.txt
- apps/docker/python/requirements.txt
- apps/moss-llamaindex/backend/requirements.txt
- moss-workshop/starter/requirements.txt
- ROADMAP.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| packages | 253 |
| apps | 192 |
| examples | 190 |
| sdks | 155 |
| moss-live-labs | 76 |
| .github | 25 |
| benchmarks | 14 |
| moss-workshop | 6 |
| .env.example | 1 |
| .gitignore | 1 |
| AGENTS.md | 1 |
| assets | 1 |
| CLAUDE.md | 1 |
| CODE_OF_CONDUCT.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 179 |
| .md | 165 |
| .ts | 95 |
| .json | 93 |
| [no-ext] | 70 |
| .toml | 50 |
| .tsx | 50 |
| .example | 40 |
| .yml | 28 |
| .go | 18 |
| .rs | 18 |
| .exs | 13 |
| .svg | 12 |
| .txt | 11 |
| .css | 10 |
| .swift | 10 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
