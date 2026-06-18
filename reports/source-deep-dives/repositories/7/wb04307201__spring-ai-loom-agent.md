# wb04307201/spring-ai-loom-agent Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

A Spring Boot auto-configuration library that injects RAG knowledge base, MCP tool calling, and Skill library into Spring AI applications with an out-of-the-box chat UI.

## 요약

- 조사 단위: `sources/wb04307201__spring-ai-loom-agent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 152 files, 94 directories, depth score 100, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=spring-ai-loom-agent-test/src/main/resources/mcp-servers-dev.json, spring-ai-loom-agent-test/src/main/resources/mcp-servers-none.json, spring-ai-loom-agent-test/src/main/resources/mcp-servers-test.json이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | wb04307201/spring-ai-loom-agent |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Java |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/wb04307201__spring-ai-loom-agent](../../../../sources/wb04307201__spring-ai-loom-agent) |
| Existing report | [reports/korea-trending/repositories/wb04307201__spring-ai-loom-agent.md](../../../korea-trending/repositories/wb04307201__spring-ai-loom-agent.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 152 / 94 |
| Max observed depth | 13 |
| Top directories | .github, docs, spring-ai-loom-agent, spring-ai-loom-agent-spring-boot-autoconfigure, spring-ai-loom-agent-spring-boot-starter, spring-ai-loom-agent-test |
| Top extensions | .java: 73, .md: 19, .png: 11, .js: 6, .json: 6, .ts: 6, .xml: 5, .st: 4, (none): 4, .yml: 3, .html: 2, .jpg: 2 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 14 |
| .github | ci surface | 1 |
| spring-ai-loom-agent | top-level component | 1 |
| spring-ai-loom-agent-spring-boot-autoconfigure | top-level component | 1 |
| spring-ai-loom-agent-spring-boot-starter | top-level component | 1 |
| spring-ai-loom-agent-test | validation surface | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [spring-ai-loom-agent-test/src/main/resources/mcp-servers-dev.json](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/src/main/resources/mcp-servers-dev.json) | mcp signal |
| mcp | [spring-ai-loom-agent-test/src/main/resources/mcp-servers-none.json](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/src/main/resources/mcp-servers-none.json) | mcp signal |
| mcp | [spring-ai-loom-agent-test/src/main/resources/mcp-servers-test.json](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/src/main/resources/mcp-servers-test.json) | mcp signal |
| mcp | [spring-ai-loom-agent-test/src/main/resources/mcp-servers.json](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/src/main/resources/mcp-servers.json) | mcp signal |
| agentRuntime | [spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/ChatTest.java](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/ChatTest.java) | agentRuntime signal |
| agentRuntime | [spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/PathSecurityTest.java](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/PathSecurityTest.java) | agentRuntime signal |
| agentRuntime | [spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/tool/time/DefaultTimeToolTest.java](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/tool/time/DefaultTimeToolTest.java) | agentRuntime signal |
| agentRuntime | [spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/tool/skill/DefaultSkillToolTest.java](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/tool/skill/DefaultSkillToolTest.java) | agentRuntime signal |
| entrypoints | [spring-ai-loom-agent/src/main/resources/META-INF/resources/marked@17.0.1/bin/main.js](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent/src/main/resources/META-INF/resources/marked@17.0.1/bin/main.js) | entrypoints signal |
| entrypoints | [spring-ai-loom-agent/src/main/resources/META-INF/resources/marked@17.0.1/bin/marked.js](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent/src/main/resources/META-INF/resources/marked@17.0.1/bin/marked.js) | entrypoints signal |
| entrypoints | [spring-ai-loom-agent/src/main/resources/META-INF/resources/eventsource-parser@3.0.6/src/index.ts](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent/src/main/resources/META-INF/resources/eventsource-parser@3.0.6/src/index.ts) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/wb04307201__spring-ai-loom-agent/CLAUDE.md) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [spring-ai-loom-agent/src/main/resources/META-INF/resources/marked@17.0.1/bin/main.js](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent/src/main/resources/META-INF/resources/marked@17.0.1/bin/main.js)<br>[spring-ai-loom-agent/src/main/resources/META-INF/resources/marked@17.0.1/bin/marked.js](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent/src/main/resources/META-INF/resources/marked@17.0.1/bin/marked.js)<br>[spring-ai-loom-agent/src/main/resources/META-INF/resources/eventsource-parser@3.0.6/src/index.ts](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent/src/main/resources/META-INF/resources/eventsource-parser@3.0.6/src/index.ts) |
| agentRuntime | 79 | [spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/ChatTest.java](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/ChatTest.java)<br>[spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/PathSecurityTest.java](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/PathSecurityTest.java)<br>[spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/tool/time/DefaultTimeToolTest.java](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/tool/time/DefaultTimeToolTest.java)<br>[spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/tool/skill/DefaultSkillToolTest.java](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/tool/skill/DefaultSkillToolTest.java)<br>[spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/tool/maven/DefaultMavenToolRealProjectIT.java](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/tool/maven/DefaultMavenToolRealProjectIT.java)<br>[spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/tool/maven/DefaultMavenToolSecurityTest.java](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/tool/maven/DefaultMavenToolSecurityTest.java)<br>[spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/tool/maven/DefaultMavenToolTest.java](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/tool/maven/DefaultMavenToolTest.java)<br>[spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/tool/git/DebugGit.java](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/tool/git/DebugGit.java) |
| mcp | 8 | [spring-ai-loom-agent-test/src/main/resources/mcp-servers-dev.json](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/src/main/resources/mcp-servers-dev.json)<br>[spring-ai-loom-agent-test/src/main/resources/mcp-servers-none.json](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/src/main/resources/mcp-servers-none.json)<br>[spring-ai-loom-agent-test/src/main/resources/mcp-servers-test.json](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/src/main/resources/mcp-servers-test.json)<br>[spring-ai-loom-agent-test/src/main/resources/mcp-servers.json](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/src/main/resources/mcp-servers.json)<br>[spring-ai-loom-agent/src/main/java/cn/wubo/spring/ai/loom/agent/mcp/AbstractMcp.java](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent/src/main/java/cn/wubo/spring/ai/loom/agent/mcp/AbstractMcp.java)<br>[spring-ai-loom-agent/src/main/java/cn/wubo/spring/ai/loom/agent/mcp/ASyncMcp.java](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent/src/main/java/cn/wubo/spring/ai/loom/agent/mcp/ASyncMcp.java)<br>[spring-ai-loom-agent/src/main/java/cn/wubo/spring/ai/loom/agent/mcp/IMcp.java](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent/src/main/java/cn/wubo/spring/ai/loom/agent/mcp/IMcp.java)<br>[spring-ai-loom-agent/src/main/java/cn/wubo/spring/ai/loom/agent/mcp/SyncMcp.java](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent/src/main/java/cn/wubo/spring/ai/loom/agent/mcp/SyncMcp.java) |
| retrieval | 5 | [spring-ai-loom-agent-test/test/index.html](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/test/index.html)<br>[spring-ai-loom-agent/src/main/resources/META-INF/resources/spring/ai/loom/index.html](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent/src/main/resources/META-INF/resources/spring/ai/loom/index.html)<br>[spring-ai-loom-agent/src/main/resources/META-INF/resources/eventsource-parser@3.0.6/src/index.ts](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent/src/main/resources/META-INF/resources/eventsource-parser@3.0.6/src/index.ts)<br>[spring-ai-loom-agent/src/main/java/cn/wubo/spring/ai/loom/agent/knowledge/DefaultKnowledge.java](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent/src/main/java/cn/wubo/spring/ai/loom/agent/knowledge/DefaultKnowledge.java)<br>[spring-ai-loom-agent/src/main/java/cn/wubo/spring/ai/loom/agent/knowledge/IKnowledge.java](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent/src/main/java/cn/wubo/spring/ai/loom/agent/knowledge/IKnowledge.java) |
| spec | 0 | not obvious |
| eval | 40 | [spring-ai-loom-agent-test/pom.xml](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/pom.xml)<br>[spring-ai-loom-agent-test/test/img1.jpg](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/test/img1.jpg)<br>[spring-ai-loom-agent-test/test/img2.jpg](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/test/img2.jpg)<br>[spring-ai-loom-agent-test/test/index.html](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/test/index.html)<br>[spring-ai-loom-agent-test/test/init.md](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/test/init.md)<br>[spring-ai-loom-agent-test/test/pdf1.pdf](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/test/pdf1.pdf)<br>[spring-ai-loom-agent-test/test/qiming12.md](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/test/qiming12.md)<br>[spring-ai-loom-agent-test/test/qiming16.md](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/test/qiming16.md) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/publish.yml](../../../../sources/wb04307201__spring-ai-loom-agent/.github/workflows/publish.yml) |
| container | 0 | not obvious |
| instruction | 1 | [CLAUDE.md](../../../../sources/wb04307201__spring-ai-loom-agent/CLAUDE.md) |
| docs | 17 | [README.md](../../../../sources/wb04307201__spring-ai-loom-agent/README.md)<br>[README.zh-CN.md](../../../../sources/wb04307201__spring-ai-loom-agent/README.zh-CN.md)<br>[spring-ai-loom-agent/src/main/resources/META-INF/resources/marked@17.0.1/README.md](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent/src/main/resources/META-INF/resources/marked@17.0.1/README.md)<br>[spring-ai-loom-agent/src/main/resources/META-INF/resources/eventsource-parser@3.0.6/README.md](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent/src/main/resources/META-INF/resources/eventsource-parser@3.0.6/README.md)<br>[docs/API.md](../../../../sources/wb04307201__spring-ai-loom-agent/docs/API.md)<br>[docs/API.zh-CN.md](../../../../sources/wb04307201__spring-ai-loom-agent/docs/API.zh-CN.md)<br>[docs/CUSTOMIZATION.md](../../../../sources/wb04307201__spring-ai-loom-agent/docs/CUSTOMIZATION.md)<br>[docs/CUSTOMIZATION.zh-CN.md](../../../../sources/wb04307201__spring-ai-loom-agent/docs/CUSTOMIZATION.zh-CN.md) |
| config | 2 | [spring-ai-loom-agent/src/main/resources/META-INF/resources/marked@17.0.1/package.json](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent/src/main/resources/META-INF/resources/marked@17.0.1/package.json)<br>[spring-ai-loom-agent/src/main/resources/META-INF/resources/eventsource-parser@3.0.6/package.json](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent/src/main/resources/META-INF/resources/eventsource-parser@3.0.6/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 40 | [spring-ai-loom-agent-test/pom.xml](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/pom.xml)<br>[spring-ai-loom-agent-test/test/img1.jpg](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/test/img1.jpg)<br>[spring-ai-loom-agent-test/test/img2.jpg](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/test/img2.jpg)<br>[spring-ai-loom-agent-test/test/index.html](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/test/index.html)<br>[spring-ai-loom-agent-test/test/init.md](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/test/init.md)<br>[spring-ai-loom-agent-test/test/pdf1.pdf](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/test/pdf1.pdf) |
| CI workflows | 1 | [.github/workflows/publish.yml](../../../../sources/wb04307201__spring-ai-loom-agent/.github/workflows/publish.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/wb04307201__spring-ai-loom-agent/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `spring-ai-loom-agent-test/src/main/resources/mcp-servers-dev.json`, `spring-ai-loom-agent-test/src/main/resources/mcp-servers-none.json`, `spring-ai-loom-agent-test/src/main/resources/mcp-servers-test.json`.
2. Trace execution through entrypoints: `spring-ai-loom-agent/src/main/resources/META-INF/resources/marked@17.0.1/bin/main.js`, `spring-ai-loom-agent/src/main/resources/META-INF/resources/marked@17.0.1/bin/marked.js`, `spring-ai-loom-agent/src/main/resources/META-INF/resources/eventsource-parser@3.0.6/src/index.ts`.
3. Map agent/tool runtime through: `spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/ChatTest.java`, `spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/PathSecurityTest.java`, `spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/tool/time/DefaultTimeToolTest.java`.
4. Inspect retrieval/memory/indexing through: `spring-ai-loom-agent-test/test/index.html`, `spring-ai-loom-agent/src/main/resources/META-INF/resources/spring/ai/loom/index.html`, `spring-ai-loom-agent/src/main/resources/META-INF/resources/eventsource-parser@3.0.6/src/index.ts`.
5. Verify behavior through test/eval files: `spring-ai-loom-agent-test/pom.xml`, `spring-ai-loom-agent-test/test/img1.jpg`, `spring-ai-loom-agent-test/test/img2.jpg`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 A Spring Boot auto configuration library that injects RAG knowledge base, MCP tool calling, and Skill library into Sprin. 핵심 구조 신호는 Java, pom.xml, README.md, CLAUDE.md, LICENSE, tests이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
