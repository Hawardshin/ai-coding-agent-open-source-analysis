# wb04307201/spring-ai-loom-agent

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/wb04307201/spring-ai-loom-agent |
| local path | sources/wb04307201__spring-ai-loom-agent |
| HEAD | 2d4b0b6 |
| stars/forks | 0 / 0 |
| language | Java |
| license |  |
| pushedAt | 2026-06-14T03:26:37Z |
| trendScore / priorityScore | 72 / 188 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / tool use | 500 | README.md, CLAUDE.md, spring-ai-loom-agent-test/pom.xml |
| MCP / tool protocol | 294 | README.md, CLAUDE.md, spring-ai-loom-agent/pom.xml |
| RAG / retrieval | 208 | spring-ai-loom-agent/src/main/resources/META-INF/resources/eventsource-parser@3.0.6/README.md, README.md, CLAUDE.md |
| Frontend / developer experience | 57 | README.md, CLAUDE.md, spring-ai-loom-agent/src/main/resources/META-INF/resources/eventsource-parser@3.0.6/package.json |
| Spec / doc-driven workflow | 43 | spring-ai-loom-agent/src/main/resources/META-INF/resources/eventsource-parser@3.0.6/README.md, CLAUDE.md, spring-ai-loom-agent/src/main/resources/META-INF/resources/marked@17.0.1/package.json |
| LLM wiki / memory / graph | 40 | CLAUDE.md, spring-ai-loom-agent/pom.xml, docs/API.md |
| Security / compliance | 21 | docs/CUSTOMIZATION.md, docs/CUSTOMIZATION.zh-CN.md, docs/TOOLS.md |
| Local LLM / on-device inference | 8 | docs/CUSTOMIZATION.md, docs/CUSTOMIZATION.zh-CN.md, spring-ai-loom-agent-test/src/main/resources/application.yml |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, context-engineering, documentParsing, frontend-dx, graphMemory, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Java/Kotlin |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 155 |
| manifests | 11 |
| docs | 19 |
| tests | 30 |
| ci/ops | 1 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Spring AI LoomAgent |
| headings | Spring AI LoomAgent / Features / Quick Start: Add a Chat Interface / 1. Add LoomAgent Dependency / 2. Add a Spring AI Model Dependency / 3. Start the Project / Document Upload & Conversation / Supported Document Formats / How It Works / File Download, Preview, and Deletion |
| excerpt | Spring AI LoomAgent <div align="right" <a href="README.zh CN.md" 中文</a English </div A Spring Boot auto configuration library that injects RAG knowledge base, MCP tool calling, and Skill library into Spring AI applications with an out of the box chat UI. ! Maven Central https //img.shields.io/maven central/v/io.github.wb04307201/spring ai loom agent spring boot starter?style=flat square ! star https //gitee.com/wb04307201/spring ai loom agent/badge/star.svg?theme=dark https //gitee.com/wb04307201/spring ai loom agent ! fork https //gitee.com/wb04307201/spring ai loom agent/badge/fork.svg?theme=dark https //gitee.com/wb04307201/spring ai loom agent ! star https //img.shields.io/github/stars/w |


## 주요 파일

### Manifests

- spring-ai-loom-agent/src/main/resources/META-INF/resources/eventsource-parser@3.0.6/README.md
- spring-ai-loom-agent/src/main/resources/META-INF/resources/marked@17.0.1/README.md
- README.md
- CLAUDE.md
- spring-ai-loom-agent-test/pom.xml
- spring-ai-loom-agent-spring-boot-autoconfigure/pom.xml
- spring-ai-loom-agent-spring-boot-starter/pom.xml
- spring-ai-loom-agent/pom.xml
- spring-ai-loom-agent/src/main/resources/META-INF/resources/eventsource-parser@3.0.6/package.json
- spring-ai-loom-agent/src/main/resources/META-INF/resources/marked@17.0.1/package.json
- pom.xml


### Spec / Docs / Prompt Artifacts

- CLAUDE.md


### Agent Instruction Files

- CLAUDE.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| spring-ai-loom-agent | 95 |
| spring-ai-loom-agent-test | 41 |
| docs | 6 |
| spring-ai-loom-agent-spring-boot-autoconfigure | 4 |
| .gitattributes | 1 |
| .github | 1 |
| .gitignore | 1 |
| CLAUDE.md | 1 |
| LICENSE | 1 |
| pom.xml | 1 |
| README.md | 1 |
| README.zh-CN.md | 1 |
| spring-ai-loom-agent-spring-boot-starter | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .java | 84 |
| .md | 19 |
| .js | 8 |
| .ts | 8 |
| .json | 6 |
| .xml | 5 |
| .st | 4 |
| [no-ext] | 4 |
| .yml | 3 |
| .cjs | 2 |
| .cts | 2 |
| .html | 2 |
| .sql | 2 |
| .1 | 1 |
| .css | 1 |
| .docx | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
