# vectorize-io/hindsight

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/vectorize-io/hindsight |
| local path | sources/vectorize-io__hindsight |
| HEAD | 65862c4 |
| stars/forks | 16520 / 947 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T20:17:10Z |
| trendScore / priorityScore | 159 / 501 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | hindsight-clients/rust/README.md, hindsight-integrations/agent-framework/README.md, hindsight-integrations/agentcore/README.md |
| Cloud native / infrastructure | 331 | docker/docker-compose/local-llm/README.md, hindsight-clients/go/README.md, hindsight-integrations/openai-agents/README.md |
| Developer tools / DX | 281 | hindsight-docs/examples/api/README.md, hindsight-clients/rust/README.md, hindsight-integrations/claude-agent-sdk/README.md |
| Database / data infrastructure | 235 | hindsight-dev/benchmarks/consolidation/README.md, hindsight-dev/benchmarks/perf/README.md, hindsight-integrations/agentcore/README.md |
| Coding agent / software automation | 233 | hindsight-integrations/cline/README.md, hindsight-integrations/cursor-cli/README.md, hindsight-embed/README.md |
| MCP / agent interoperability | 149 | hindsight-integrations/agent-framework/README.md, hindsight-integrations/cline/README.md, AGENTS.md |
| Security / supply chain | 87 | hindsight-dev/benchmarks/obs/README.md, hindsight-integrations/agentcore/README.md, hindsight-integrations/paperclip/README.md |
| RAG / retrieval / knowledge | 82 | hindsight-docs/examples/api/README.md, hindsight-clients/rust/README.md, hindsight-dev/benchmarks/consolidation/README.md |
| Observability / evaluation | 63 | hindsight-clients/go/README.md, hindsight-dev/benchmarks/consolidation/README.md, hindsight-dev/benchmarks/obs/README.md |
| Local LLM / inference | 48 | docker/docker-compose/local-llm/README.md, hindsight-integrations/superagent/README.md, hindsight-api-slim/README.md |
| Frontend / app framework | 37 | docker/docker-compose/nginx/README.md, hindsight-embed/hindsight_embed/control_center/ui/README.md, hindsight-integrations/google-adk/README.md |
| Data / ML platform | 34 | docker/docker-compose/local-llm/README.md, hindsight-dev/benchmarks/consolidation/README.md, hindsight-dev/benchmarks/obs/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 2752 |
| manifests | 40 |
| docs | 638 |
| tests | 506 |
| ci/ops | 59 |
| spec artifacts | 7 |
| agent instruction files | 4 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | or | What is Hindsight? / Memory Performance & Accuracy / Adding Hindsight to Your AI Agents / Quick Start / Docker (recommended) / Docker (external PostgreSQL) / Client / or / Retain: Store information / Recall: Search memories | <div align="center" ! Hindsight Banner ./hindsight docs/static/img/hindsight github banner.png Documentation https //hindsight.vectorize.io • Paper https //arxiv.org/abs/2512.12818 • Cookbook https //hindsight.vectorize.io/cookbook • Hindsight Cloud https //ui.hindsight.vectorize.io/signup ! CI https //github.com/vectorize io/hindsight/actions/workflows/release.yml/badge.svg https //github.com/vectorize io/hindsight/actions/workflows/release.yml ! Slack Community https //img.shields.io/badge/Slack Join%20Community 4A154B?logo=slack https //join.slack.com/t/hindsight space/shared invite/zt 3nhbm4w29 LeSJ5Ixi6j8PdiYOCPlOgg ! License MIT https //img.shields.io/badge/License MIT yellow.svg https |


## Key Files

### Manifests

- hindsight-docs/examples/api/README.md
- docker/docker-compose/local-llm/README.md
- hindsight-clients/go/README.md
- hindsight-clients/python/README.md
- hindsight-clients/rust/README.md
- hindsight-clients/typescript/README.md
- hindsight-dev/benchmarks/consolidation/README.md
- hindsight-dev/benchmarks/obs/README.md
- hindsight-dev/benchmarks/perf/README.md
- hindsight-dev/benchmarks/README.md
- hindsight-integrations/agent-framework/README.md
- hindsight-integrations/agentcore/README.md
- hindsight-integrations/claude-agent-sdk/README.md
- hindsight-integrations/cline/README.md
- hindsight-integrations/cursor-cli/README.md
- hindsight-integrations/litellm/README.md
- hindsight-integrations/openai-agents/README.md
- hindsight-integrations/paperclip/README.md
- hindsight-integrations/smolagents/README.md
- hindsight-integrations/superagent/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- hindsight-integrations/claude-code/requirements.txt
- hindsight-integrations/dify/requirements.txt
- hindsight-integrations/omo/requirements.txt
- .claude/skills/code-review/SKILL.md
- .claude/skills/hs-release/SKILL.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- .claude/skills/code-review/SKILL.md
- .claude/skills/hs-release/SKILL.md


## Top Directories

| dir | count |
| --- | --- |
| hindsight-integrations | 700 |
| hindsight-docs | 621 |
| hindsight-api-slim | 496 |
| hindsight-clients | 372 |
| hindsight-control-plane | 169 |
| skills | 85 |
| hindsight-embed | 54 |
| hindsight-dev | 51 |
| scripts | 42 |
| docker | 30 |
| hindsight-cli | 30 |
| helm | 24 |
| hindsight-all | 14 |
| hindsight-all-npm | 13 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 1098 |
| .md | 561 |
| .ts | 243 |
| .go | 171 |
| .json | 102 |
| .tsx | 100 |
| .mdx | 66 |
| [no-ext] | 62 |
| .sh | 60 |
| .toml | 43 |
| .yaml | 43 |
| .svg | 38 |
| .rs | 26 |
| .typed | 24 |
| .js | 21 |
| .mjs | 21 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
