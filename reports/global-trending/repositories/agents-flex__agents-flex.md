# agents-flex/agents-flex

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/agents-flex/agents-flex |
| local path | sources/agents-flex__agents-flex |
| HEAD | 5058a7a |
| stars/forks | 1005 / 128 |
| language | Java |
| license |  |
| pushedAt | 2026-06-17T08:12:19Z |
| trendScore / priorityScore | 173 / 467 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | agents-flex-bom/pom.xml, agents-flex-chat/pom.xml, agents-flex-core/pom.xml |
| RAG / retrieval / knowledge | 164 | agents-flex-bom/pom.xml, agents-flex-embedding/pom.xml, agents-flex-rerank/pom.xml |
| MCP / agent interoperability | 126 | agents-flex-bom/pom.xml, agents-flex-mcp/pom.xml, readme.md |
| Local LLM / inference | 53 | agents-flex-bom/pom.xml, agents-flex-chat/pom.xml, agents-flex-embedding/pom.xml |
| Security / supply chain | 46 | docs/zh/samples/chat-with-memory.md, agents-flex-core/src/main/java/com/agentsflex/core/prompt/MemoryPrompt.java, agents-flex-core/src/main/java/com/agentsflex/core/prompt/package-info.java |
| Observability / evaluation | 44 | agents-flex-core/pom.xml, readme.md, pom.xml |
| Database / data infrastructure | 29 | agents-flex-bom/pom.xml, agents-flex-store/pom.xml, agents-flex-store/agents-flex-store-pgvector/pom.xml |
| Developer tools / DX | 25 | demos/skills-demo/src/main/resources/.claude/skills/ai-tutor/README.md, agents-flex-core/pom.xml, agents-flex-mcp/pom.xml |
| Frontend / app framework | 25 | docs/zh/agent/react-agent.md, docs/changes.md, agents-flex-chat/agents-flex-chat-openai/src/test/java/com/agentsflex/model/chat/openai/OpenAIChatModelTest.java |
| Cloud native / infrastructure | 7 | docs/zh/chat/mcp.md, docs/changes.md |
| Coding agent / software automation | 3 | demos/skills-demo/src/main/resources/.claude/skills/ai-tutor/README.md |
| Data / ML platform | 2 | docs/en/core/embedding.md, docs/en/core/llms.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 611 |
| manifests | 40 |
| docs | 122 |
| tests | 48 |
| ci/ops | 0 |
| spec artifacts | 25 |
| agent instruction files | 23 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| readme.md |  | 🚀 Core Features / ✨ New Core Capabilities (v2.0+) / 🔧 Core Capabilities Matrix / ⚡ Quick Start / 1️⃣ Add Dependencies (Maven) / 2️⃣ Hello World / 📦 Module Overview / 📚 Documentation & Resources / 🤝 Contributing / 📜 License | <p align="center" <img src="./docs/assets/images/banner.png"/ </p <p align="center" <strong An Elegant Java Framework for LLM Application Development Truly Open Source · Easy Integration · Production Ready</strong </p 🚀 Core Features Agents Flex is designed for Java engineers and architects, delivering a lightweight, modular, and extensible AI agent development experience to help enterprises rapidly build production grade LLM applications. ✨ New Core Capabilities v2.0+ Feature Description Use Cases MCP Support Native integration with Model Context Protocol for standardized connection to external data sources and tools Cross system context sharing, tool orchestration AI Skills Encapsulate bu |


## Key Files

### Manifests

- demos/skills-demo/src/main/resources/.claude/skills/ai-tutor/README.md
- docs/package.json
- agents-flex-bom/pom.xml
- agents-flex-chat/pom.xml
- agents-flex-core/pom.xml
- agents-flex-embedding/pom.xml
- agents-flex-image/pom.xml
- agents-flex-mcp/pom.xml
- agents-flex-rerank/pom.xml
- agents-flex-search-engine/pom.xml
- agents-flex-skills/pom.xml
- agents-flex-spring-boot-starter/pom.xml
- agents-flex-store/pom.xml
- agents-flex-subagent/pom.xml
- agents-flex-text2sql/pom.xml
- agents-flex-tool/pom.xml
- agents-flex-websearch/pom.xml
- agents-flex-wiki/pom.xml
- demos/subagent-demo/pom.xml
- agents-flex-chat/agents-flex-chat-deepseek/pom.xml


### Spec / Docs / Prompt Artifacts

- demos/skills-demo/src/main/resources/.claude/skills/ai-tutor/README.md
- demos/skills-demo/src/main/resources/.claude/skills/ai-tutor/pyproject.toml
- agents-flex-core/src/main/java/com/agentsflex/core/prompt/MemoryPrompt.java
- agents-flex-core/src/main/java/com/agentsflex/core/prompt/package-info.java
- agents-flex-core/src/main/java/com/agentsflex/core/prompt/Prompt.java
- agents-flex-core/src/main/java/com/agentsflex/core/prompt/PromptTemplate.java
- agents-flex-core/src/main/java/com/agentsflex/core/prompt/SimplePrompt.java
- docs/zh/chat/prompt.md
- docs/zh/core/prompt.md
- demos/skills-demo/src/main/resources/.claude/skills/ai-tutor/LICENSE
- demos/skills-demo/src/main/resources/.claude/skills/ai-tutor/research_methodology.md
- demos/skills-demo/src/main/resources/.claude/skills/ai-tutor/scripts/get_youtube_transcript.py
- demos/skills-demo/src/main/resources/.claude/skills/ai-tutor/SKILL.md
- demos/skills-demo/src/main/resources/.claude/skills/pdf/forms.md
- demos/skills-demo/src/main/resources/.claude/skills/pdf/LICENSE.txt
- demos/skills-demo/src/main/resources/.claude/skills/pdf/reference.md
- demos/skills-demo/src/main/resources/.claude/skills/pdf/scripts/check_bounding_boxes_test.py
- demos/skills-demo/src/main/resources/.claude/skills/pdf/scripts/check_bounding_boxes.py
- demos/skills-demo/src/main/resources/.claude/skills/pdf/scripts/check_fillable_fields.py
- demos/skills-demo/src/main/resources/.claude/skills/pdf/scripts/convert_pdf_to_images.py


### Agent Instruction Files

- demos/skills-demo/src/main/resources/.claude/skills/ai-tutor/README.md
- demos/skills-demo/src/main/resources/.claude/skills/ai-tutor/pyproject.toml
- agents-flex-core/src/main/java/com/agentsflex/core/prompt/MemoryPrompt.java
- agents-flex-core/src/main/java/com/agentsflex/core/prompt/package-info.java
- agents-flex-core/src/main/java/com/agentsflex/core/prompt/Prompt.java
- agents-flex-core/src/main/java/com/agentsflex/core/prompt/PromptTemplate.java
- agents-flex-core/src/main/java/com/agentsflex/core/prompt/SimplePrompt.java
- demos/skills-demo/src/main/resources/.claude/skills/ai-tutor/LICENSE
- demos/skills-demo/src/main/resources/.claude/skills/ai-tutor/research_methodology.md
- demos/skills-demo/src/main/resources/.claude/skills/ai-tutor/scripts/get_youtube_transcript.py
- demos/skills-demo/src/main/resources/.claude/skills/ai-tutor/SKILL.md
- demos/skills-demo/src/main/resources/.claude/skills/pdf/forms.md
- demos/skills-demo/src/main/resources/.claude/skills/pdf/LICENSE.txt
- demos/skills-demo/src/main/resources/.claude/skills/pdf/reference.md
- demos/skills-demo/src/main/resources/.claude/skills/pdf/scripts/check_bounding_boxes_test.py


## Top Directories

| dir | count |
| --- | --- |
| agents-flex-core | 208 |
| docs | 93 |
| demos | 49 |
| agents-flex-store | 45 |
| agents-flex-image | 39 |
| agents-flex-chat | 28 |
| agents-flex-text2sql | 27 |
| agents-flex-spring-boot-starter | 21 |
| agents-flex-tool | 19 |
| agents-flex-mcp | 14 |
| agents-flex-search-engine | 11 |
| agents-flex-embedding | 10 |
| agents-flex-rerank | 9 |
| agents-flex-websearch | 9 |


## Extension Distribution

| ext | count |
| --- | --- |
| .java | 413 |
| .md | 110 |
| .xml | 60 |
| .py | 9 |
| [no-ext] | 4 |
| .yml | 3 |
| .json | 2 |
| .ts | 2 |
| .css | 1 |
| .doc | 1 |
| .factories | 1 |
| .imports | 1 |
| .sh | 1 |
| .toml | 1 |
| .txt | 1 |
| .vue | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
