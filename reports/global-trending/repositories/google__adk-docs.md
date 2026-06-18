# google/adk-docs

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/google/adk-docs |
| local path | sources/google__adk-docs |
| HEAD | 7e15976 |
| stars/forks | 1408 / 1096 |
| language | Shell |
| license |  |
| pushedAt | 2026-06-17T22:59:27Z |
| trendScore / priorityScore | 149 / 403 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | examples/go/a2a_basic/remote_a2a/check_prime_agent/README.md, examples/java/demos/patent-search-agent/README.md, examples/java/demos/patent-search-agent/src/main/java/tools/CloudRunFunction/README.md |
| Database / data infrastructure | 71 | examples/java/demos/patent-search-agent/src/main/java/tools/CloudRunFunction/README.md, examples/java/demos/patent-search-agent/src/main/java/tools/CloudRunFunction/pom.xml, docs/api-reference/java/com/example/a2a_basic/A2AAgent.html |
| Cloud native / infrastructure | 37 | examples/go/go.mod, docs/api-reference/kotlin/google-adk-kotlin-examples/com.google.adk.kt.examples.artifacts/-report-generator-agent/index.html, docs/api-reference/kotlin/google-adk-kotlin-examples/com.google.adk.kt.examples.artifacts/-report-generator-agent/root-agent.html |
| Developer tools / DX | 35 | examples/java/demos/patent-search-agent/README.md, examples/java/demos/patent-search-agent/src/main/java/tools/CloudRunFunction/README.md, examples/python/tutorial/agent_team/adk-tutorial/readme.md |
| Security / supply chain | 35 | examples/java/demos/patent-search-agent/src/main/java/tools/CloudRunFunction/README.md, examples/go/a2a_basic/remote_a2a/check_prime_agent/main.go, examples/go/snippets/agents/custom-agent/storyflow_agent.go |
| Data / ML platform | 23 | examples/java/demos/patent-search-agent/src/main/java/tools/CloudRunFunction/README.md, examples/go/snippets/agents/multi-agent/main.go, examples/go/snippets/agents/workflow-agents/loop/main.go |
| Observability / evaluation | 21 | README.md, examples/go/go.mod, examples/kotlin/build.gradle.kts |
| RAG / retrieval / knowledge | 8 | examples/java/demos/patent-search-agent/src/main/java/tools/CloudRunFunction/README.md, examples/java/demos/patent-search-agent/src/main/java/tools/CloudRunFunction/PatentSearch.Java, examples/kotlin/snippets/sessions/MemoryExample.kt |
| MCP / agent interoperability | 6 | docs/api-reference/java/com/example/mcpfilesystem/McpFilesystemAgent.html, docs/api-reference/java/com/example/mcpfilesystem/package-summary.html |
| Coding agent / software automation | 1 | tools/go-snippets/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Go, Java/Kotlin |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 3254 |
| manifests | 40 |
| docs | 2945 |
| tests | 6 |
| ci/ops | 12 |
| spec artifacts | 11 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Agent Development Kit (ADK) | Agent Development Kit (ADK) / ✨ Key Features / 🚀 Usage / 📚 Documentation / ✨ Vibe Coding / 🤝 Contributing / 📄 License | Agent Development Kit ADK ! License https //img.shields.io/badge/License Apache 2.0 blue.svg LICENSE ! PyPI https //img.shields.io/pypi/v/google adk https //pypi.org/project/google adk/ ! NPM Version https //img.shields.io/npm/v/@google/adk https //www.npmjs.com/package/@google/adk ! Go Doc https //img.shields.io/badge/Go%20Package Doc blue.svg https //pkg.go.dev/google.golang.org/adk ! Maven Central Java https //img.shields.io/maven central/v/com.google.adk/google adk https //search.maven.org/artifact/com.google.adk/google adk ! Maven Central Kotlin https //img.shields.io/maven central/v/com.google.adk/google adk kotlin core https //search.maven.org/artifact/com.google.adk/google adk kotlin |


## Key Files

### Manifests

- examples/go/a2a_basic/remote_a2a/check_prime_agent/README.md
- examples/java/demos/patent-search-agent/README.md
- examples/java/demos/patent-search-agent/src/main/java/tools/CloudRunFunction/README.md
- examples/go/a2a_basic/README.md
- examples/java/demos/README.md
- README.md
- tools/go-snippets/README.md
- tools/kotlin-snippets/README.md
- examples/java/demos/patent-search-agent/Dockerfile
- examples/java/demos/patent-search-agent/pom.xml
- examples/java/demos/patent-search-agent/src/main/java/tools/CloudRunFunction/pom.xml
- examples/python/agent-samples/youtube_shorts_assistant/requirements.txt
- examples/python/snippets/agents/llm-agent/requirements.txt
- examples/python/snippets/agents/workflow-agents/requirements.txt
- examples/python/snippets/get-started/google_search_agent/requirements.txt
- examples/typescript/snippets/agents/custom-agent/package.json
- examples/typescript/snippets/agents/custom-agent/tsconfig.json
- examples/typescript/snippets/agents/llm-agent/package.json
- examples/typescript/snippets/agents/llm-agent/tsconfig.json
- examples/typescript/snippets/agents/models/routing/package.json


### Spec / Docs / Prompt Artifacts

- examples/python/agent-samples/youtube_shorts_assistant/requirements.txt
- examples/python/snippets/agents/llm-agent/requirements.txt
- examples/python/snippets/agents/workflow-agents/requirements.txt
- examples/python/snippets/get-started/google_search_agent/requirements.txt
- examples/python/snippets/streaming/adk-streaming-ws/app/requirements.txt
- examples/python/snippets/streaming/adk-streaming/app/requirements.txt
- examples/python/snippets/tools/function-tools/requirements.txt
- examples/python/snippets/tools/overview/requirements.txt
- requirements.txt
- examples/python/snippets/tools/auth/spec.yaml
- tools/feature-matrix/prompt.md


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| docs | 2926 |
| examples | 274 |
| tools | 21 |
| .github | 15 |
| overrides | 5 |
| .gitignore | 1 |
| .lycheeignore | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |
| llms-full.txt | 1 |
| llms.txt | 1 |
| lychee.toml | 1 |
| mkdocs.yml | 1 |
| netlify.toml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .html | 2547 |
| .md | 235 |
| .py | 67 |
| .svg | 66 |
| .js | 47 |
| .ts | 36 |
| .go | 34 |
| .java | 32 |
| [no-ext] | 32 |
| .json | 25 |
| .css | 24 |
| .txt | 20 |
| .kt | 19 |
| .woff | 12 |
| .woff2 | 12 |
| .yaml | 11 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
