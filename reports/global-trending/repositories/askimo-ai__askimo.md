# askimo-ai/askimo

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/askimo-ai/askimo |
| local path | sources/askimo-ai__askimo |
| HEAD | 77e829b |
| stars/forks | 145 / 22 |
| language | Kotlin |
| license |  |
| pushedAt | 2026-06-17T19:04:51Z |
| trendScore / priorityScore | 166 / 445 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Developer tools / DX | 332 | README.md, tools/installation/README.md, cli/build.gradle.kts |
| MCP / agent interoperability | 220 | README.md, cli/src/test/kotlin/io/askimo/core/intent/DetectUserIntentCommandTest.kt, cli/src/test/kotlin/io/askimo/core/intent/DetectUserIntentCommandVectorIndexTest.kt |
| Cloud native / infrastructure | 170 | README.md, cli/src/test/kotlin/io/askimo/core/config/AppConfigTest.kt, cli/src/test/kotlin/io/askimo/core/intent/DetectUserIntentCommandVectorIndexTest.kt |
| Security / supply chain | 120 | cli/src/test/kotlin/io/askimo/core/security/README.md, README.md, cli/src/test/kotlin/io/askimo/core/config/AppConfigTest.kt |
| Database / data infrastructure | 111 | README.md, shared/build.gradle.kts, cli/src/test/kotlin/io/askimo/core/chat/repository/ChatMessageRepositoryIT.kt |
| RAG / retrieval / knowledge | 91 | README.md, cli/src/test/kotlin/io/askimo/core/config/AppConfigTest.kt, cli/src/test/kotlin/io/askimo/core/intent/DetectUserIntentCommandVectorIndexTest.kt |
| Local LLM / inference | 68 | README.md, cli/src/test/kotlin/io/askimo/cli/commands/ModelsCommandHandlerTest.kt, cli/src/test/kotlin/io/askimo/core/config/AppConfigTest.kt |
| AI agent / orchestration | 63 | README.md, cli/build.gradle.kts, cli/src/test/kotlin/io/askimo/cli/UrlContentExtractorTest.kt |
| Coding agent / software automation | 43 | README.md, build.gradle.kts, cli/src/test/kotlin/io/askimo/core/chat/repository/ChatMessageRepositoryIT.kt |
| Frontend / app framework | 24 | shared/src/test/kotlin/io/askimo/core/rag/filter/FilterChainTest.kt |
| Observability / evaluation | 23 | cli/build.gradle.kts, cli/src/test/kotlin/io/askimo/core/intent/DetectUserIntentCommandTest.kt, cli/src/main/resources/META-INF/native-image/resource-config.json |
| Data / ML platform | 6 | cli/src/test/kotlin/io/askimo/core/chat/service/UrlExtractionIntentTest.kt, cli/src/test/kotlin/io/askimo/core/intent/DetectUserIntentCommandTest.kt, cli/src/test/kotlin/io/askimo/core/intent/DetectUserIntentCommandVectorIndexTest.kt |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | Java/Kotlin |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 638 |
| manifests | 13 |
| docs | 9 |
| tests | 80 |
| ci/ops | 4 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Run the desktop app | Why Askimo? / See It in Action / Quick Start / System Requirements / Features / Beyond Chat: Skills and Plans / Supported Providers / Building from Source / Prerequisites / Run the desktop app | <p align="center" <picture <source media=" prefers color scheme dark " srcset="public/github logo dark.svg" <img alt="Askimo AI toolkit for your workflows." src="public/github logo light.svg" </picture </p <p align="center" <b One app. Every AI model. Your files stay local.</b </p <p align="center" Chat · Search your files · Run scripts · Build multi step AI workflows · Execute AI agent skills all offline capable, all on your machine. </p <p align="center" ⭐ If Askimo saves you time, a star helps others find it and keeps the project going. <a href="https //github.com/askimo ai/askimo/stargazers" <strong Star on GitHub →</strong </a </p <p align="center" <a href="https //github.com/askimo ai/ |


## Key Files

### Manifests

- cli/src/test/kotlin/io/askimo/core/security/README.md
- desktop/README.md
- README.md
- desktop-shared/src/main/resources/images/backgrounds/README.md
- desktop/src/main/resources/images/README.md
- tools/git/README.md
- tools/installation/README.md
- cli/build.gradle.kts
- build.gradle.kts
- desktop-shared/build.gradle.kts
- desktop/build.gradle.kts
- detekt-rules/build.gradle.kts
- shared/build.gradle.kts


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| shared | 328 |
| desktop-shared | 127 |
| cli | 100 |
| desktop | 45 |
| tools | 7 |
| detekt-rules | 5 |
| public | 5 |
| .github | 4 |
| gradle | 3 |
| .env.template | 1 |
| .gitignore | 1 |
| build.gradle.kts | 1 |
| CONTRIBUTING.md | 1 |
| crowdin.yml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .kt | 553 |
| .yml | 19 |
| .properties | 12 |
| .md | 9 |
| .json | 7 |
| .kts | 7 |
| [no-ext] | 6 |
| .svg | 5 |
| .ttf | 4 |
| .xml | 4 |
| .sh | 2 |
| .bat | 1 |
| .feature | 1 |
| .icns | 1 |
| .jar | 1 |
| .prompttemplatefactory | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
