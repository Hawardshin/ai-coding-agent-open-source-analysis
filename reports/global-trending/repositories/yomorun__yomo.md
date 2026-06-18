# yomorun/yomo

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/yomorun/yomo |
| local path | sources/yomorun__yomo |
| HEAD | 6d92a9d |
| stars/forks | 1908 / 143 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-17T10:53:07Z |
| trendScore / priorityScore | 165 / 371 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 59 | README.md, Cargo.toml, src/agent_loop.rs |
| Cloud native / infrastructure | 38 | README.md, Cargo.toml, serverless/go/go.mod |
| Observability / evaluation | 26 | Cargo.toml, src/agent_loop.rs, src/llm_api.rs |
| Security / supply chain | 26 | README.md, Cargo.toml, src/client.rs |
| Coding agent / software automation | 13 | agent.template.yaml, src/tls.rs |
| Developer tools / DX | 13 | README.md, Cargo.toml, src/llm_provider/openai_compatible/client.rs |
| RAG / retrieval / knowledge | 12 | agent.template.yaml, src/model_api.rs, src/usage_handler.rs |
| Local LLM / inference | 5 | README.md, agent.template.yaml, src/llm_provider/vllm_deepseek.rs |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, devtools, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Rust, Go |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 69 |
| manifests | 6 |
| docs | 1 |
| tests | 0 |
| ci/ops | 1 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | YoMo ![Go](https://github.com/yomorun/yomo/workflows/Go/badge.svg) [![codecov](https://codecov.io/gh/yomorun/yomo/branch/main/graph/badge.svg?token=MHCE5TZWKM)](https://codecov.io/gh/yomorun/yomo) | YoMo ![Go](https://github.com/yomorun/yomo/workflows/Go/badge.svg) [![codecov](https://codecov.io/gh/yomorun/yomo/branch/main/graph/badge.svg?token=MHCE5TZWKM)](https://codecov.io/gh/yomorun/yomo) / 🌶 Features / 🚀 Getting Started / Step 1. Install CLI / Step 2. Start the server / Step 3. Implement the LLM Function Calling / Done, let's have a try / Explore More Examples / 📚 Documentation / 🎯 Focuses on Geo-distributed AI Inference Infra | <p align="center" <img width="200px" height="200px" src="https //blog.yomo.run/static/images/logo.png" / </p YoMo ! Go https //github.com/yomorun/yomo/workflows/Go/badge.svg ! codecov https //codecov.io/gh/yomorun/yomo/branch/main/graph/badge.svg?token=MHCE5TZWKM https //codecov.io/gh/yomorun/yomo YoMo is an open source LLM Function Calling Framework for building scalable and ultra fast AI Agents. 💚 We care about Empowering Exceptional Customer Experiences in the Age of AI We believe that seamless and responsive AI interactions are key to delivering outstanding customer experiences. YoMo is built with this principle at its core, focusing on speed, reliability, and scalability. 🌶 Features F |


## Key Files

### Manifests

- README.md
- Cargo.toml
- serverless/go/go.mod
- serverless/node/package.json
- serverless/node/tsconfig.json
- serverless/go/go.sum


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| src | 53 |
| serverless | 8 |
| certs | 3 |
| .github | 1 |
| .gitignore | 1 |
| agent.template.yaml | 1 |
| Cargo.toml | 1 |
| README.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .rs | 53 |
| .pem | 3 |
| .go | 2 |
| .json | 2 |
| .ts | 2 |
| .md | 1 |
| .mod | 1 |
| .sum | 1 |
| .toml | 1 |
| .yaml | 1 |
| .yml | 1 |
| [no-ext] | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
