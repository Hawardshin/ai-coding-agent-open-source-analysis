# agentscope-ai/agentscope-java

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/agentscope-ai/agentscope-java |
| local path | sources/agentscope-ai__agentscope-java |
| HEAD | 9120dc0 |
| stars/forks | 3897 / 835 |
| language | Java |
| license |  |
| pushedAt | 2026-06-17T15:42:53Z |
| trendScore / priorityScore | 146 / 469 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | agentscope-examples/README.md, agentscope-examples/agents/agentscope-builder/README.md, agentscope-examples/agents/agentscope-builder/src/main/resources/scaffold/default/subagents/README.md |
| Security / supply chain | 190 | agentscope-examples/agents/agentscope-builder/README.md, agentscope-examples/agents/agentscope-codingagent/README.md, agentscope-examples/agents/agentscope-dataagent/README.md |
| Database / data infrastructure | 187 | agentscope-examples/agents/agentscope-builder/README.md, agentscope-examples/agents/agentscope-codingagent/README.md, agentscope-examples/agents/agentscope-dataagent/README.md |
| Developer tools / DX | 115 | agentscope-examples/README.md, agentscope-examples/agents/agentscope-codingagent/README.md, agentscope-core/pom.xml |
| MCP / agent interoperability | 115 | agentscope-examples/README.md, agentscope-examples/agents/agentscope-builder/README.md, agentscope-examples/agents/agentscope-dataagent/README.md |
| Cloud native / infrastructure | 112 | agentscope-examples/agents/agentscope-builder/README.md, agentscope-examples/agents/agentscope-codingagent/README.md, agentscope-examples/agents/agentscope-paw/README.md |
| Frontend / app framework | 80 | agentscope-examples/agents/agentscope-builder/README.md, agentscope-examples/agents/agentscope-dataagent/README.md, README.md |
| RAG / retrieval / knowledge | 74 | README.md, agentscope-core/pom.xml, agentscope-dependencies-bom/pom.xml |
| Observability / evaluation | 64 | agentscope-examples/README.md, agentscope-examples/agents/agentscope-codingagent/README.md, README.md |
| Coding agent / software automation | 35 | agentscope-examples/agents/agentscope-codingagent/README.md, agentscope-examples/agents/agentscope-codingagent/pom.xml, agentscope-examples/agents/agentscope-codingagent/src/main/java/io/agentscope/harness/coding/prompt/CodingSystemPrompt.java |
| Data / ML platform | 24 | agentscope-examples/README.md, README.md, agentscope-extensions/pom.xml |
| Local LLM / inference | 6 | agentscope-examples/agents/agentscope-builder/README.md, agentscope-examples/documentation/src/main/java/io/agentscope/examples/documentation2/model/ModelRegistryExample.java |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 2759 |
| manifests | 40 |
| docs | 352 |
| tests | 641 |
| ci/ops | 12 |
| spec artifacts | 16 |
| agent instruction files | 7 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Highlights / 🎯 Smart Agents, Full Control / 🛠️ Built-in Tools / 🔌 Seamless Integration / 🚀 Production Grade / Quick Start / Contributing / Community / License / Publications | <p align="center" <img src="https //img.alicdn.com/imgextra/i1/O1CN01nTg6w21NqT5qFKH1u !!6000000001621 55 tps 550 550.svg" alt="AgentScope Logo" width="200" / </p <h3 align="center" Build Production Ready AI Agents in Java</h3 <p align="center" <a href="https //java.agentscope.io/" 📖 Documentation</a &nbsp; &nbsp; <a href="README zh.md" 中文</a &nbsp; &nbsp; <a href="https //discord.gg/eYMpfnkG8h" Discord</a </p <p align="center" <img src="https //img.shields.io/badge/license Apache 2.0 blue" alt="License" / <img src="https //img.shields.io/badge/JDK 17%2B orange" alt="JDK 17+" / <img src="https //img.shields.io/maven central/v/io.agentscope/agentscope?color=green" alt="Maven Central" / <a hr |


## Key Files

### Manifests

- agentscope-examples/README.md
- docs/README.md
- agentscope-examples/agents/agentscope-builder/README.md
- agentscope-examples/agents/agentscope-builder/src/main/resources/scaffold/default/subagents/README.md
- agentscope-examples/agents/agentscope-builder/src/main/resources/templates/blank/subagents/README.md
- agentscope-examples/agents/agentscope-codingagent/README.md
- agentscope-examples/agents/agentscope-dataagent/README.md
- agentscope-examples/agents/agentscope-paw/README.md
- agentscope-examples/agents/agentscope-paw/src/main/resources/scaffold/default/subagents/README.md
- agentscope-examples/agents/agentscope-paw/src/main/resources/templates/blank/subagents/README.md
- agentscope-extensions/agentscope-extensions-scheduler/README.md
- README.md
- agentscope-examples/pom.xml
- docs/pyproject.toml
- agentscope-core/pom.xml
- agentscope-dependencies-bom/pom.xml
- agentscope-distribution/pom.xml
- agentscope-examples/agents/agentscope-builder/frontend/package.json
- agentscope-examples/agents/agentscope-builder/frontend/tsconfig.json
- agentscope-examples/agents/agentscope-builder/frontend/vite.config.ts


### Spec / Docs / Prompt Artifacts

- agentscope-examples/agents/agentscope-builder/src/main/resources/prompts/agent-draft.md
- agentscope-examples/agents/agentscope-codingagent/src/main/java/io/agentscope/harness/coding/prompt/CodingSystemPrompt.java
- agentscope-examples/agents/agentscope-codingagent/src/main/java/io/agentscope/harness/coding/prompt/ReviewerSystemPrompt.java
- agentscope-examples/agents/agentscope-paw/src/main/resources/prompts/agent-draft.md
- agentscope-extensions/agentscope-extensions-nacos/agentscope-extensions-nacos-prompt/src/test/java/io/agentscope/core/nacos/prompt/NacosPromptListenerTest.java
- agentscope-harness/src/main/java/io/agentscope/harness/agent/filesystem/spec/LocalFilesystemSpec.java
- agentscope-harness/src/main/java/io/agentscope/harness/agent/filesystem/spec/RemoteFilesystemSpec.java
- agentscope-harness/src/main/java/io/agentscope/harness/agent/filesystem/spec/SandboxFilesystemSpec.java
- agentscope-extensions/agentscope-extensions-nacos/agentscope-extensions-nacos-prompt/src/main/java/io/agentscope/core/nacos/prompt/NacosPromptListener.java
- docs/v1/en/docs/harness/architecture.md
- docs/v1/en/docs/task/plan.md
- docs/v1/zh/docs/harness/architecture.md
- docs/v1/zh/docs/task/plan.md
- docs/v2/en/docs/harness/architecture.md
- docs/v2/zh/docs/harness/architecture.md
- .github/instructions/code-review.instructions.md


### Agent Instruction Files

- agentscope-examples/agents/agentscope-builder/src/main/resources/prompts/agent-draft.md
- agentscope-examples/agents/agentscope-codingagent/src/main/java/io/agentscope/harness/coding/prompt/CodingSystemPrompt.java
- agentscope-examples/agents/agentscope-codingagent/src/main/java/io/agentscope/harness/coding/prompt/ReviewerSystemPrompt.java
- agentscope-examples/agents/agentscope-paw/src/main/resources/prompts/agent-draft.md
- agentscope-extensions/agentscope-extensions-nacos/agentscope-extensions-nacos-prompt/src/test/java/io/agentscope/core/nacos/prompt/NacosPromptListenerTest.java
- agentscope-extensions/agentscope-extensions-nacos/agentscope-extensions-nacos-prompt/src/main/java/io/agentscope/core/nacos/prompt/NacosPromptListener.java
- .github/instructions/code-review.instructions.md


## Top Directories

| dir | count |
| --- | --- |
| agentscope-extensions | 741 |
| agentscope-core | 706 |
| agentscope-examples | 702 |
| agentscope-harness | 297 |
| docs | 287 |
| .github | 10 |
| agentscope-distribution | 3 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .licenserc.yaml | 1 |
| agentscope-dependencies-bom | 1 |
| CNAME | 1 |
| codecov.yml | 1 |
| context7.json | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .java | 2080 |
| .md | 327 |
| .tsx | 123 |
| .xml | 72 |
| .ts | 43 |
| .json | 27 |
| .html | 13 |
| .yml | 12 |
| .py | 10 |
| [no-ext] | 10 |
| .js | 9 |
| .imports | 7 |
| .example | 3 |
| .css | 2 |
| .sql | 2 |
| .svg | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
