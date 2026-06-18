# w8123/EnterpriseAgentFramework

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/w8123/EnterpriseAgentFramework |
| local path | sources/w8123__EnterpriseAgentFramework |
| HEAD | 69880f9 |
| stars/forks | 314 / 17 |
| language | Java |
| license |  |
| pushedAt | 2026-06-17T03:18:12Z |
| trendScore / priorityScore | 161 / 466 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | docs/ai-memory/README.md, docs/README.md, ai-agent-service/README.md |
| Developer tools / DX | 387 | docs/ai-memory/README.md, docs/README.md, AGENTS.md |
| Frontend / app framework | 372 | AGENTS.md, ai-admin-front/README.md, ai-skills-service/README.md |
| Security / supply chain | 226 | ai-agent-service/README.md, ai-admin-front/README.md, ai-skills-service/README.md |
| Cloud native / infrastructure | 107 | docs/README.md, AGENTS.md, ai-admin-front/README.md |
| MCP / agent interoperability | 86 | docs/ai-memory/README.md, docs/README.md, AGENTS.md |
| Coding agent / software automation | 84 | docs/ai-memory/README.md, docs/README.md, AGENTS.md |
| RAG / retrieval / knowledge | 78 | ai-agent-service/README.md, ai-admin-front/README.md, ai-skills-service/README.md |
| Database / data infrastructure | 61 | docs/ai-memory/README.md, ai-agent-service/README.md, AGENTS.md |
| Data / ML platform | 9 | ai-agent-service/README.md, ai-admin-front/README.md, ai-skills-service/README.md |
| Observability / evaluation | 6 | docs/08-平台对话框对外嵌入支持.md, ai-agent-service/src/test/java/com/enterprise/ai/agent/eval/AgentEvalJudgeServiceTest.java, ai-agent-service/src/test/java/com/enterprise/ai/agent/eval/AgentEvalServiceTest.java |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1147 |
| manifests | 22 |
| docs | 55 |
| tests | 95 |
| ci/ops | 8 |
| spec artifacts | 13 |
| agent instruction files | 10 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | 模型网关，默认 8601 | 为什么需要 ReachAI / 核心闭环 / 你可以用它做什么 / 从代码注册一个能力 / Agent Studio 与 Runtime / 运行治理与开放协议 / 平台身份、授权与嵌入式对话 / 企业身份与授权模型 / 对话框对外嵌入 / 产品截图 | <p align="center" <img src="ai admin front/public/reachai logo horizontal.svg" alt="ReachAI" width="340" / </p <h1 align="center" 睿池 ReachAI</h1 <p align="center" <strong 面向 Java 企业系统的 AI 能力中台</strong </p <p align="center" 让 Spring Boot 业务系统像注册微服务一样注册 AI 能力，并在进入 Agent 前完成治理、编排、发布、审计和开放。 </p <p align="center" <a href="https //openjdk.org/projects/jdk/17/" <img src="https //img.shields.io/badge/Java 17%2B orange.svg" alt="Java 17+" / </a <a href="https //spring.io/projects/spring boot" <img src="https //img.shields.io/badge/Spring%20Boot 3.4 brightgreen.svg" alt="Spring Boot 3.4" / </a <a href="https //spring.io/projects/spring ai" <img src="https //img.shields.io/badge/Spring%20AI 1.0 blue.sv |


## Key Files

### Manifests

- docs/ai-memory/README.md
- docs/README.md
- ai-agent-service/README.md
- AGENTS.md
- ai-admin-front/README.md
- ai-skills-service/README.md
- README.md
- sql/README.md
- ai-agent-service/pom.xml
- ai-admin-front/package.json
- ai-admin-front/tsconfig.json
- ai-admin-front/vite.config.ts
- ai-common/pom.xml
- ai-model-service/pom.xml
- ai-runtime-contract/pom.xml
- ai-skills-service/pom.xml
- pom.xml
- reachai-capability-sdk/pom.xml
- reachai-spring-boot2-starter/pom.xml
- ai-admin-front/tsconfig.node.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- .cursor/mcp.json
- docs/superpowers/specs/2026-06-14-agent-workflow-decoupling-refactor-design.md
- ai-agent-service/src/main/java/com/enterprise/ai/agent/semantic/prompt/PromptTemplateRegistry.java
- ai-agent-service/src/main/resources/prompts/semantic/module.prompt.md
- ai-agent-service/src/main/resources/prompts/semantic/project.prompt.md
- ai-agent-service/src/main/resources/prompts/semantic/tool.prompt.md
- ai-agent-service/src/main/resources/prompts/sensitive/scan_tool_sensitive.prompt.md
- .cursor/dbhub-ai-mysql.toml
- docs/superpowers/specs/2026-06-13-global-ai-entry-page-capability-design.md
- .cursor/rules/reachai-project.mdc
- .claude/settings.local.json
- ai-skills-service/requirements.md


### Agent Instruction Files

- AGENTS.md
- .cursor/mcp.json
- ai-agent-service/src/main/java/com/enterprise/ai/agent/semantic/prompt/PromptTemplateRegistry.java
- ai-agent-service/src/main/resources/prompts/semantic/module.prompt.md
- ai-agent-service/src/main/resources/prompts/semantic/project.prompt.md
- ai-agent-service/src/main/resources/prompts/semantic/tool.prompt.md
- ai-agent-service/src/main/resources/prompts/sensitive/scan_tool_sensitive.prompt.md
- .cursor/dbhub-ai-mysql.toml
- .cursor/rules/reachai-project.mdc
- .claude/settings.local.json


## Top Directories

| dir | count |
| --- | --- |
| ai-agent-service | 609 |
| ai-admin-front | 220 |
| ai-skills-service | 147 |
| docs | 30 |
| ai-model-service | 27 |
| reachai-spring-boot2-starter | 25 |
| reachai-capability-sdk | 24 |
| sql | 16 |
| ai-runtime-contract | 11 |
| deploy | 8 |
| ai-common | 7 |
| .superpowers | 6 |
| .cursor | 3 |
| scripts | 3 |


## Extension Distribution

| ext | count |
| --- | --- |
| .java | 809 |
| .vue | 103 |
| .ts | 101 |
| .md | 55 |
| .sql | 15 |
| .yml | 10 |
| .xml | 9 |
| .json | 7 |
| .svg | 7 |
| [no-ext] | 5 |
| .html | 4 |
| .ps1 | 4 |
| .pid | 2 |
| .scss | 2 |
| .yaml | 2 |
| .agent-service | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
