# modelcontextprotocol/kotlin-sdk

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/modelcontextprotocol/kotlin-sdk |
| local path | sources/modelcontextprotocol__kotlin-sdk |
| HEAD | 75a944f |
| stars/forks | 1390 / 217 |
| language | Kotlin |
| license |  |
| pushedAt | 2026-06-17T23:27:52Z |
| trendScore / priorityScore | 146 / 384 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Developer tools / DX | 500 | samples/kotlin-mcp-client/README.md, samples/kotlin-mcp-server/README.md, AGENTS.md |
| MCP / agent interoperability | 500 | samples/kotlin-mcp-client/README.md, samples/kotlin-mcp-server/README.md, samples/kotlinlang-mcp-server/README.md |
| Coding agent / software automation | 36 | README.md, integration-test/src/jvmTest/kotlin/io/modelcontextprotocol/kotlin/sdk/integration/kotlin/AbstractPromptIntegrationTest.kt, kotlin-sdk-core/src/commonTest/kotlin/io/modelcontextprotocol/kotlin/sdk/types/dsl/PromptsDslTest.kt |
| Security / supply chain | 30 | AGENTS.md, conformance-test/README.md, samples/simple-streamable-server/README.md |
| AI agent / orchestration | 5 | AGENTS.md, integration-test/src/jvmTest/kotlin/io/modelcontextprotocol/kotlin/sdk/integration/typescript/AbstractTsClientKotlinServerTest.kt, samples/weather-stdio-server/src/main/kotlin/io/modelcontextprotocol/sample/server/McpWeatherServer.kt |
| Cloud native / infrastructure | 5 | samples/kotlinlang-mcp-server/README.md, README.md |
| RAG / retrieval / knowledge | 3 | samples/kotlinlang-mcp-server/README.md, samples/README.md, kotlin-sdk-client/Module.md |
| Database / data infrastructure | 2 | kotlin-sdk-client/src/commonTest/kotlin/io/modelcontextprotocol/kotlin/sdk/client/ClientMetaParameterTest.kt, kotlin-sdk-core/src/commonTest/kotlin/io/modelcontextprotocol/kotlin/sdk/utils/PathSegmentTemplateMatcherSecurityTest.kt |
| Observability / evaluation | 1 | kotlin-sdk-client/src/commonMain/kotlin/io/modelcontextprotocol/kotlin/sdk/client/StdioClientTransport.kt |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, database, devtools, example-rich, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Java/Kotlin |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 410 |
| manifests | 30 |
| docs | 20 |
| tests | 26 |
| ci/ops | 9 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | MCP Kotlin SDK | MCP Kotlin SDK / Table of Contents / Overview / Installation / Artifacts / Gradle setup (JVM) / Multiplatform / Ktor dependencies / Quickstart / Creating a Client | MCP Kotlin SDK ! Maven Central https //img.shields.io/maven central/v/io.modelcontextprotocol/kotlin sdk.svg?label=Maven%20Central https //central.sonatype.com/artifact/io.modelcontextprotocol/kotlin sdk ! Build https //github.com/modelcontextprotocol/kotlin sdk/actions/workflows/build.yml/badge.svg?branch=main https //github.com/modelcontextprotocol/kotlin sdk/actions/workflows/build.yml ! Kotlin https //img.shields.io/badge/kotlin 2.2+ blueviolet.svg?logo=kotlin http //kotlinlang.org ! Kotlin Multiplatform https //img.shields.io/badge/Platforms %20JVM%20%7C%20Wasm%2FJS%20%7C%20Native%20 blueviolet?logo=kotlin https //kotlinlang.org/docs/multiplatform.html ! JVM https //img.shields.io/badge |


## Key Files

### Manifests

- samples/kotlin-mcp-client/README.md
- samples/kotlin-mcp-server/README.md
- samples/kotlinlang-mcp-server/README.md
- AGENTS.md
- conformance-test/README.md
- samples/README.md
- README.md
- samples/notebooks/README.md
- samples/simple-streamable-server/README.md
- samples/weather-stdio-server/README.md
- docs/build.gradle.kts
- kotlin-sdk-client/build.gradle.kts
- samples/kotlin-mcp-client/build.gradle.kts
- samples/kotlin-mcp-server/build.gradle.kts
- samples/kotlinlang-mcp-server/build.gradle.kts
- samples/kotlinlang-mcp-server/Dockerfile
- conformance-test/build.gradle.kts
- integration-test/build.gradle.kts
- kotlin-sdk-testing/build.gradle.kts
- test-utils/build.gradle.kts


### Spec / Docs / Prompt Artifacts

- AGENTS.md


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| kotlin-sdk-core | 101 |
| samples | 90 |
| integration-test | 74 |
| kotlin-sdk-server | 35 |
| kotlin-sdk-client | 28 |
| conformance-test | 24 |
| test-utils | 11 |
| .github | 9 |
| buildSrc | 7 |
| kotlin-sdk-testing | 7 |
| docs | 3 |
| gradle | 3 |
| kotlin-sdk | 2 |
| .editorconfig | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .kt | 274 |
| .kts | 28 |
| .properties | 26 |
| .md | 18 |
| [no-ext] | 12 |
| .yml | 10 |
| .bat | 6 |
| .jar | 6 |
| .toml | 6 |
| .xml | 6 |
| .json | 5 |
| .ts | 5 |
| .api | 4 |
| .conf | 1 |
| .ipynb | 1 |
| .sh | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
