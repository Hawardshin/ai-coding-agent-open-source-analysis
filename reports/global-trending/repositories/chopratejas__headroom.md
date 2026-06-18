# chopratejas/headroom

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/chopratejas/headroom |
| local path | sources/chopratejas__headroom |
| HEAD | b0cd032 |
| stars/forks | 31580 / 2133 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T17:28:53Z |
| trendScore / priorityScore | 194 / 528 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | examples/README.md, examples/langchain_demo/README.md, examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/@ai-sdk/anthropic/README.md |
| Developer tools / DX | 500 | examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/@ai-sdk/anthropic/README.md, examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/@ai-sdk/gateway/README.md, examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/@ai-sdk/openai/README.md |
| Cloud native / infrastructure | 232 | examples/deployment/macos-launchagent/README.md, examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/@ai-sdk/gateway/README.md, examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/ai/README.md |
| MCP / agent interoperability | 195 | examples/README.md, README.md, plugins/hermes/README.md |
| RAG / retrieval / knowledge | 180 | examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/@ai-sdk/openai/README.md, headroom/evals/README.md, README.md |
| Observability / evaluation | 113 | examples/README.md, examples/langchain_demo/README.md, examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/@opentelemetry/api/README.md |
| Security / supply chain | 64 | examples/README.md, examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/@vercel/oidc/docs/README.md, examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/@vercel/oidc/README.md |
| Coding agent / software automation | 60 | examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/@ai-sdk/anthropic/README.md, examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/@ai-sdk/gateway/README.md, examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/@ai-sdk/openai/README.md |
| Frontend / app framework | 49 | docs/README.md, examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/ai/README.md, examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/dotenv/README.md |
| Database / data infrastructure | 23 | examples/README.md, examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/dotenv/README.md, docker-compose.yml |
| Data / ML platform | 17 | headroom/evals/README.md, README.md, scripts/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 3241 |
| manifests | 40 |
| docs | 456 |
| tests | 906 |
| ci/ops | 26 |
| spec artifacts | 47 |
| agent instruction files | 17 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | 1 — Install | What it does / How it works (30 seconds) / Get started (60 seconds) / 1 — Install / 2 — Pick your mode / or: from headroom import compress      # inline library / 3 — See the savings / Proof / Output token reduction (cut what the model writes back) / Reduction: 31.7%  (95% CI 27.7% … 35.7%)   [estimated] | <div align="center" <pre ██╗ ██╗███████╗ █████╗ ██████╗ ██████╗ ██████╗ ██████╗ ███╗ ███╗ ██║ ██║██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔═══██╗██╔═══██╗████╗ ████║ ███████║█████╗ ███████║██║ ██║██████╔╝██║ ██║██║ ██║██╔████╔██║ ██╔══██║██╔══╝ ██╔══██║██║ ██║██╔══██╗██║ ██║██║ ██║██║╚██╔╝██║ ██║ ██║███████╗██║ ██║██████╔╝██║ ██║╚██████╔╝╚██████╔╝██║ ╚═╝ ██║ ╚═╝ ╚═╝╚══════╝╚═╝ ╚═╝╚═════╝ ╚═╝ ╚═╝ ╚═════╝ ╚═════╝ ╚═╝ ╚═╝ The context compression layer for AI agents </pre </div <p align="center" <strong 60–95% fewer tokens · library · proxy · MCP · 6 algorithms · local first · reversible</strong </p <p align="center" <a href="https //github.com/chopratejas/headroom/actions/workflows/ci.yml" <img src="h |


## Key Files

### Manifests

- examples/deployment/macos-launchagent/README.md
- examples/README.md
- docs/README.md
- examples/langchain_demo/README.md
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/@ai-sdk/anthropic/README.md
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/@ai-sdk/gateway/README.md
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/@ai-sdk/openai/README.md
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/@ai-sdk/provider-utils/README.md
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/@ai-sdk/provider-utils/src/to-json-schema/zod3-to-json-schema/README.md
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/@ai-sdk/provider/README.md
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/@esbuild/darwin-arm64/README.md
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/@opentelemetry/api/README.md
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/@standard-schema/spec/README.md
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/@vercel/oidc/docs/README.md
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/@vercel/oidc/README.md
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/ai/README.md
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/dotenv/README.md
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/esbuild/README.md
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/eventsource-parser/README.md
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/fsevents/README.md


### Spec / Docs / Prompt Artifacts

- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/@standard-schema/spec/README.md
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/@standard-schema/spec/package.json
- .github/copilot-instructions.md
- docs/spec/020-security.md
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/ai/src/prompt/call-settings.ts
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/ai/src/prompt/content-part.ts
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/ai/src/prompt/convert-to-language-model-prompt.ts
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/ai/src/prompt/create-tool-model-output.ts
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/ai/src/prompt/data-content.ts
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/ai/src/prompt/index.ts
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/ai/src/prompt/invalid-data-content-error.ts
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/ai/src/prompt/invalid-message-role-error.ts
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/ai/src/prompt/message-conversion-error.ts
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/ai/src/prompt/message.ts
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/ai/src/prompt/prepare-call-settings.ts
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/ai/src/prompt/prepare-tools-and-tool-choice.ts
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/ai/src/prompt/prompt.ts
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/ai/src/prompt/split-data-url.ts
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/ai/src/prompt/standardize-prompt.ts
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/ai/src/prompt/wrap-gateway-error.ts


### Agent Instruction Files

- .github/copilot-instructions.md
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/ai/src/prompt/call-settings.ts
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/ai/src/prompt/content-part.ts
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/ai/src/prompt/convert-to-language-model-prompt.ts
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/ai/src/prompt/create-tool-model-output.ts
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/ai/src/prompt/data-content.ts
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/ai/src/prompt/index.ts
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/ai/src/prompt/invalid-data-content-error.ts
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/ai/src/prompt/invalid-message-role-error.ts
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/ai/src/prompt/message-conversion-error.ts
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/ai/src/prompt/message.ts
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/ai/src/prompt/prepare-call-settings.ts
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/ai/src/prompt/prepare-tools-and-tool-choice.ts
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/ai/src/prompt/prompt.ts
- examples/vercel-ai-sdk-pr/node-headroom-compression/node_modules/ai/src/prompt/split-data-url.ts


## Top Directories

| dir | count |
| --- | --- |
| examples | 1669 |
| tests | 597 |
| headroom | 379 |
| crates | 186 |
| docs | 100 |
| sdk | 61 |
| plugins | 41 |
| wiki | 40 |
| .github | 35 |
| benchmarks | 26 |
| scripts | 26 |
| e2e | 14 |
| REALIGNMENT | 14 |
| .devcontainer | 5 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 1085 |
| .py | 877 |
| .mdx | 275 |
| .json | 237 |
| .rs | 176 |
| .md | 147 |
| .js | 107 |
| .cjs | 102 |
| .cts | 102 |
| [no-ext] | 40 |
| .yml | 27 |
| .tsx | 15 |
| .sh | 11 |
| .toml | 10 |
| .sql | 5 |
| .txt | 4 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
