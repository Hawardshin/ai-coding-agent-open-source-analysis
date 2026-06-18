# embabel/embabel-agent

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/embabel/embabel-agent |
| local path | sources/embabel__embabel-agent |
| HEAD | e339213 |
| stars/forks | 3683 / 361 |
| language | Kotlin |
| license |  |
| pushedAt | 2026-06-17T02:13:24Z |
| trendScore / priorityScore | 152 / 454 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | embabel-agent-api/src/test/kotlin/com/embabel/example/README.md, embabel-agent-api/README.md, embabel-agent-api/src/main/kotlin/com/embabel/agent/test/README.md |
| Observability / evaluation | 215 | embabel-agent-api/README.md, embabel-agent-observability/README.md, README.md |
| MCP / agent interoperability | 106 | embabel-agent-api/README.md, embabel-agent-autoconfigure/README.md, embabel-agent-autoconfigure/embabel-agent-platform-autoconfigure/README.md |
| RAG / retrieval / knowledge | 101 | embabel-agent-autoconfigure/README.md, embabel-agent-observability/README.md, embabel-agent-autoconfigure/embabel-agent-platform-autoconfigure/README.md |
| Cloud native / infrastructure | 79 | embabel-agent-api/README.md, embabel-agent-autoconfigure/README.md, embabel-agent-observability/README.md |
| Security / supply chain | 76 | embabel-agent-observability/README.md, embabel-agent-skills/README.md, README.md |
| Developer tools / DX | 46 | embabel-agent-api/README.md, embabel-agent-shell/README.md, embabel-agent-skills/README.md |
| Local LLM / inference | 33 | embabel-agent-autoconfigure/README.md, embabel-agent-autoconfigure/embabel-agent-platform-autoconfigure/README.md, README.md |
| Data / ML platform | 18 | embabel-agent-rag/embabel-agent-rag-pipeline/README.md, README.md, embabel-agent-dependencies/pom.xml |
| Coding agent / software automation | 3 | README.md, CLAUDE.md |
| Database / data infrastructure | 1 | embabel-agent-observability/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, devtools, example-rich, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 1793 |
| manifests | 40 |
| docs | 108 |
| tests | 742 |
| ci/ops | 7 |
| spec artifacts | 28 |
| agent instruction files | 25 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | [Embabel Agent Framework](https://hub.embabel.com) | [Embabel Agent Framework](https://hub.embabel.com) / Talk to the Docs / Key Concepts / Quick Start / Why Is Embabel Needed? / Show Me The Code / Dog Food Policy / Getting Started / Getting the bits / Environment variables | Embabel Agent Framework https //hub.embabel.com <a href="https //hub.embabel.com" <img align="left" src="https //github.com/embabel/embabel agent/blob/main/embabel agent api/images/315px Meister der Weltenchronik 001.jpg?raw=true" width="180" </a ! Docs https //img.shields.io/badge/docs live brightgreen https //docs.embabel.com/embabel agent/guide/0.1.2 SNAPSHOT/ ! MvnRepository https //badges.mvnrepository.com/badge/com.embabel.agent/embabel agent api/badge.svg?label=MvnRepository https //mvnrepository.com/artifact/com.embabel.agent/embabel agent api ! Build https //github.com/embabel/embabel agent/actions/workflows/maven.yml/badge.svg ! YourKit https //img.shields.io/badge/Profiling YourKi |


## Key Files

### Manifests

- embabel-agent-api/src/test/kotlin/com/embabel/example/common/README.md
- embabel-agent-api/src/test/kotlin/com/embabel/example/README.md
- embabel-agent-api/src/main/kotlin/com/embabel/agent/prompt/README.md
- embabel-agent-api/README.md
- embabel-agent-api/src/main/kotlin/com/embabel/agent/test/README.md
- embabel-agent-autoconfigure/README.md
- embabel-agent-docs/README.md
- embabel-agent-observability/README.md
- embabel-agent-shell/README.md
- embabel-agent-skills/README.md
- embabel-agent-api/src/main/java/com/embabel/agent/api/annotation/README.md
- embabel-agent-api/src/main/kotlin/com/embabel/agent/api/common/nested/README.md
- embabel-agent-api/src/main/kotlin/com/embabel/agent/api/common/README.md
- embabel-agent-api/src/main/kotlin/com/embabel/agent/api/dsl/README.md
- embabel-agent-api/src/main/kotlin/com/embabel/agent/api/invocation/README.md
- embabel-agent-api/src/main/kotlin/com/embabel/agent/api/README.md
- embabel-agent-api/src/main/kotlin/com/embabel/agent/core/hitl/README.md
- embabel-agent-api/src/main/kotlin/com/embabel/agent/core/README.md
- embabel-agent-api/src/main/kotlin/com/embabel/agent/experimental/README.md
- embabel-agent-api/src/main/kotlin/com/embabel/agent/README.md


### Spec / Docs / Prompt Artifacts

- embabel-agent-api/src/main/kotlin/com/embabel/agent/prompt/README.md
- CLAUDE.md
- specs/promptrunner-delegation.md
- embabel-agent-api/src/main/kotlin/com/embabel/agent/prompt/persona/PersonaSpec.kt
- embabel-agent-api/src/main/kotlin/com/embabel/agent/prompt/persona/RoleGoalBackstorySpec.kt
- embabel-agent-api/src/test/kotlin/com/embabel/agent/prompt/element/ToolCallControlTest.kt
- embabel-agent-api/src/test/kotlin/com/embabel/agent/prompt/persona/CoStarTest.kt
- embabel-agent-api/src/test/kotlin/com/embabel/agent/prompt/persona/InstructionTest.kt
- embabel-agent-api/src/test/kotlin/com/embabel/agent/prompt/persona/PersonaTest.kt
- embabel-agent-api/src/test/kotlin/com/embabel/agent/prompt/persona/RoleGoalBackstoryTest.kt
- embabel-agent-api/src/test/kotlin/com/embabel/agent/prompt/ResponseFormatTest.kt
- embabel-agent-common/embabel-agent-ai/src/test/kotlin/com/embabel/common/ai/prompt/CurrentDateTest.kt
- embabel-agent-common/embabel-agent-ai/src/test/kotlin/com/embabel/common/ai/prompt/KnowledgeCutoffDateTest.kt
- embabel-agent-common/embabel-agent-ai/src/test/kotlin/com/embabel/common/ai/prompt/PromptContributionTest.kt
- embabel-agent-common/embabel-agent-ai/src/test/kotlin/com/embabel/common/ai/prompt/PromptContributorTest.kt
- embabel-agent-skills/src/main/kotlin/com/embabel/agent/skills/spec/SkillDefinition.kt
- embabel-agent-skills/src/main/kotlin/com/embabel/agent/skills/spec/SkillMetadata.kt
- embabel-agent-api/src/main/kotlin/com/embabel/agent/prompt/element/ToolCallControl.kt
- embabel-agent-api/src/main/kotlin/com/embabel/agent/prompt/persona/CoStar.kt
- embabel-agent-api/src/main/kotlin/com/embabel/agent/prompt/persona/Instruction.kt


### Agent Instruction Files

- embabel-agent-api/src/main/kotlin/com/embabel/agent/prompt/README.md
- CLAUDE.md
- embabel-agent-api/src/main/kotlin/com/embabel/agent/prompt/persona/PersonaSpec.kt
- embabel-agent-api/src/main/kotlin/com/embabel/agent/prompt/persona/RoleGoalBackstorySpec.kt
- embabel-agent-api/src/test/kotlin/com/embabel/agent/prompt/element/ToolCallControlTest.kt
- embabel-agent-api/src/test/kotlin/com/embabel/agent/prompt/persona/CoStarTest.kt
- embabel-agent-api/src/test/kotlin/com/embabel/agent/prompt/persona/InstructionTest.kt
- embabel-agent-api/src/test/kotlin/com/embabel/agent/prompt/persona/PersonaTest.kt
- embabel-agent-api/src/test/kotlin/com/embabel/agent/prompt/persona/RoleGoalBackstoryTest.kt
- embabel-agent-api/src/test/kotlin/com/embabel/agent/prompt/ResponseFormatTest.kt
- embabel-agent-common/embabel-agent-ai/src/test/kotlin/com/embabel/common/ai/prompt/CurrentDateTest.kt
- embabel-agent-common/embabel-agent-ai/src/test/kotlin/com/embabel/common/ai/prompt/KnowledgeCutoffDateTest.kt
- embabel-agent-common/embabel-agent-ai/src/test/kotlin/com/embabel/common/ai/prompt/PromptContributionTest.kt
- embabel-agent-common/embabel-agent-ai/src/test/kotlin/com/embabel/common/ai/prompt/PromptContributorTest.kt
- embabel-agent-api/src/main/kotlin/com/embabel/agent/prompt/element/ToolCallControl.kt


## Top Directories

| dir | count |
| --- | --- |
| embabel-agent-api | 920 |
| embabel-agent-autoconfigure | 221 |
| embabel-agent-rag | 192 |
| embabel-agent-docs | 88 |
| embabel-agent-common | 74 |
| embabel-agent-mcp | 50 |
| embabel-agent-skills | 41 |
| embabel-agent-code | 32 |
| embabel-agent-test-support | 30 |
| embabel-agent-observability | 28 |
| embabel-agent-starters | 25 |
| embabel-agent-a2a | 24 |
| embabel-agent-shell | 19 |
| embabel-agent-domain | 12 |


## Extension Distribution

| ext | count |
| --- | --- |
| .kt | 1309 |
| .java | 194 |
| .xml | 76 |
| .adoc | 67 |
| .md | 41 |
| [no-ext] | 22 |
| .imports | 21 |
| .yml | 20 |
| .properties | 9 |
| .dot | 7 |
| .txt | 6 |
| .factories | 3 |
| .html | 3 |
| .jinja | 3 |
| .css | 2 |
| .sh | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
