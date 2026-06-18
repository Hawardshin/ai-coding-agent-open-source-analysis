# w8123/EnterpriseAgentFramework

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/w8123/EnterpriseAgentFramework |
| local path | sources/w8123__EnterpriseAgentFramework |
| HEAD | 69880f9 |
| stars/forks | 0 / 0 |
| language | Java |
| license |  |
| pushedAt | 2026-06-17T03:18:12Z |
| trendScore / priorityScore | 72 / 226 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / tool use | 500 | docs/ai-memory/README.md, docs/README.md, ai-agent-service/README.md |
| Frontend / developer experience | 500 | docs/README.md, AGENTS.md, ai-admin-front/README.md |
| LLM wiki / memory / graph | 309 | docs/ai-memory/README.md, docs/README.md, AGENTS.md |
| Security / compliance | 239 | ai-skills-service/README.md, README.md, ai-agent-service/pom.xml |
| RAG / retrieval | 99 | ai-agent-service/README.md, ai-admin-front/README.md, ai-skills-service/README.md |
| MCP / tool protocol | 68 | docs/README.md, AGENTS.md, README.md |
| Spec / doc-driven workflow | 62 | docs/ai-memory/README.md, ai-admin-front/README.md, docs/superpowers/specs/2026-06-14-agent-workflow-decoupling-refactor-design.md |
| Infra / observability | 6 | README.md, docs/06-项目背景技术与功能说明.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, evalObservability, frontend, frontend-dx, graphMemory, infra-observability, llm-wiki-memory, llmFramework, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 1147 |
| manifests | 22 |
| docs | 55 |
| tests | 95 |
| ci/ops | 8 |
| spec artifacts | 13 |
| agent instruction files | 10 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | 模型网关，默认 8601 |
| headings | 为什么需要 ReachAI / 核心闭环 / 你可以用它做什么 / 从代码注册一个能力 / Agent Studio 与 Runtime / 运行治理与开放协议 / 平台身份、授权与嵌入式对话 / 企业身份与授权模型 / 对话框对外嵌入 / 产品截图 |
| excerpt | <p align="center" <img src="ai admin front/public/reachai logo horizontal.svg" alt="ReachAI" width="340" / </p <h1 align="center" 睿池 ReachAI</h1 <p align="center" <strong 面向 Java 企业系统的 AI 能力中台</strong </p <p align="center" 让 Spring Boot 业务系统像注册微服务一样注册 AI 能力，并在进入 Agent 前完成治理、编排、发布、审计和开放。 </p <p align="center" <a href="https //openjdk.org/projects/jdk/17/" <img src="https //img.shields.io/badge/Java 17%2B orange.svg" alt="Java 17+" / </a <a href="https //spring.io/projects/spring boot" <img src="https //img.shields.io/badge/Spring%20Boot 3.4 brightgreen.svg" alt="Spring Boot 3.4" / </a <a href="https //spring.io/projects/spring ai" <img src="https //img.shields.io/badge/Spring%20AI 1.0 blue.sv |


## 주요 파일

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


## 상위 디렉터리

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


## 확장자 분포

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


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
