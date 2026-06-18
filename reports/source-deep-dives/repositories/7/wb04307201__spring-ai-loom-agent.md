# wb04307201/spring-ai-loom-agent 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

A Spring Boot auto-configuration library that injects RAG knowledge base, MCP tool calling, and Skill library into Spring AI applications with an out-of-the-box chat UI.

## 요약

- 조사 단위: `sources/wb04307201__spring-ai-loom-agent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 152 files, 94 directories, depth score 94, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=spring-ai-loom-agent-test/src/main/resources/mcp-servers-dev.json, spring-ai-loom-agent-test/src/main/resources/mcp-servers-none.json, spring-ai-loom-agent-test/src/main/resources/mcp-servers-test.json이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | wb04307201/spring-ai-loom-agent |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Java |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/wb04307201__spring-ai-loom-agent](../../../../sources/wb04307201__spring-ai-loom-agent) |
| 기존 보고서 | [reports/korea-trending/repositories/wb04307201__spring-ai-loom-agent.md](../../../korea-trending/repositories/wb04307201__spring-ai-loom-agent.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 152 / 94 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .github, docs, spring-ai-loom-agent, spring-ai-loom-agent-spring-boot-autoconfigure, spring-ai-loom-agent-spring-boot-starter, spring-ai-loom-agent-test |
| 상위 확장자 | .java: 73, .md: 19, .png: 11, .js: 6, .json: 6, .ts: 6, .xml: 5, .st: 4, (none): 4, .yml: 3, .html: 2, .jpg: 2 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 14 |
| .github | ci surface | 1 |
| spring-ai-loom-agent | top-level component | 1 |
| spring-ai-loom-agent-spring-boot-autoconfigure | top-level component | 1 |
| spring-ai-loom-agent-spring-boot-starter | top-level component | 1 |
| spring-ai-loom-agent-test | validation surface | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [spring-ai-loom-agent/src/main/resources/META-INF/resources/marked@17.0.1/bin/main.js](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent/src/main/resources/META-INF/resources/marked@17.0.1/bin/main.js)<br>[spring-ai-loom-agent/src/main/resources/META-INF/resources/marked@17.0.1/bin/marked.js](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent/src/main/resources/META-INF/resources/marked@17.0.1/bin/marked.js)<br>[spring-ai-loom-agent/src/main/resources/META-INF/resources/eventsource-parser@3.0.6/src/index.ts](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent/src/main/resources/META-INF/resources/eventsource-parser@3.0.6/src/index.ts) |
| agentRuntime | 79 | [spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/ChatTest.java](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/ChatTest.java)<br>[spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/PathSecurityTest.java](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/PathSecurityTest.java)<br>[spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/tool/time/DefaultTimeToolTest.java](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/tool/time/DefaultTimeToolTest.java)<br>[spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/tool/skill/DefaultSkillToolTest.java](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/tool/skill/DefaultSkillToolTest.java)<br>[spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/tool/maven/DefaultMavenToolRealProjectIT.java](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/tool/maven/DefaultMavenToolRealProjectIT.java)<br>[spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/tool/maven/DefaultMavenToolSecurityTest.java](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/tool/maven/DefaultMavenToolSecurityTest.java)<br>[spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/tool/maven/DefaultMavenToolTest.java](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/tool/maven/DefaultMavenToolTest.java)<br>[spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/tool/git/DebugGit.java](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/tool/git/DebugGit.java) |
| mcp | 8 | [spring-ai-loom-agent-test/src/main/resources/mcp-servers-dev.json](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/src/main/resources/mcp-servers-dev.json)<br>[spring-ai-loom-agent-test/src/main/resources/mcp-servers-none.json](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/src/main/resources/mcp-servers-none.json)<br>[spring-ai-loom-agent-test/src/main/resources/mcp-servers-test.json](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/src/main/resources/mcp-servers-test.json)<br>[spring-ai-loom-agent-test/src/main/resources/mcp-servers.json](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/src/main/resources/mcp-servers.json)<br>[spring-ai-loom-agent/src/main/java/cn/wubo/spring/ai/loom/agent/mcp/AbstractMcp.java](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent/src/main/java/cn/wubo/spring/ai/loom/agent/mcp/AbstractMcp.java)<br>[spring-ai-loom-agent/src/main/java/cn/wubo/spring/ai/loom/agent/mcp/ASyncMcp.java](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent/src/main/java/cn/wubo/spring/ai/loom/agent/mcp/ASyncMcp.java)<br>[spring-ai-loom-agent/src/main/java/cn/wubo/spring/ai/loom/agent/mcp/IMcp.java](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent/src/main/java/cn/wubo/spring/ai/loom/agent/mcp/IMcp.java)<br>[spring-ai-loom-agent/src/main/java/cn/wubo/spring/ai/loom/agent/mcp/SyncMcp.java](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent/src/main/java/cn/wubo/spring/ai/loom/agent/mcp/SyncMcp.java) |
| retrieval | 5 | [spring-ai-loom-agent-test/test/index.html](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/test/index.html)<br>[spring-ai-loom-agent/src/main/resources/META-INF/resources/spring/ai/loom/index.html](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent/src/main/resources/META-INF/resources/spring/ai/loom/index.html)<br>[spring-ai-loom-agent/src/main/resources/META-INF/resources/eventsource-parser@3.0.6/src/index.ts](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent/src/main/resources/META-INF/resources/eventsource-parser@3.0.6/src/index.ts)<br>[spring-ai-loom-agent/src/main/java/cn/wubo/spring/ai/loom/agent/knowledge/DefaultKnowledge.java](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent/src/main/java/cn/wubo/spring/ai/loom/agent/knowledge/DefaultKnowledge.java)<br>[spring-ai-loom-agent/src/main/java/cn/wubo/spring/ai/loom/agent/knowledge/IKnowledge.java](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent/src/main/java/cn/wubo/spring/ai/loom/agent/knowledge/IKnowledge.java) |
| spec | 0 | 명확하지 않음 |
| eval | 40 | [spring-ai-loom-agent-test/pom.xml](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/pom.xml)<br>[spring-ai-loom-agent-test/test/img1.jpg](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/test/img1.jpg)<br>[spring-ai-loom-agent-test/test/img2.jpg](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/test/img2.jpg)<br>[spring-ai-loom-agent-test/test/index.html](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/test/index.html)<br>[spring-ai-loom-agent-test/test/init.md](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/test/init.md)<br>[spring-ai-loom-agent-test/test/pdf1.pdf](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/test/pdf1.pdf)<br>[spring-ai-loom-agent-test/test/qiming12.md](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/test/qiming12.md)<br>[spring-ai-loom-agent-test/test/qiming16.md](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/test/qiming16.md) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/publish.yml](../../../../sources/wb04307201__spring-ai-loom-agent/.github/workflows/publish.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [CLAUDE.md](../../../../sources/wb04307201__spring-ai-loom-agent/CLAUDE.md) |
| docs | 17 | [README.md](../../../../sources/wb04307201__spring-ai-loom-agent/README.md)<br>[README.zh-CN.md](../../../../sources/wb04307201__spring-ai-loom-agent/README.zh-CN.md)<br>[spring-ai-loom-agent/src/main/resources/META-INF/resources/marked@17.0.1/README.md](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent/src/main/resources/META-INF/resources/marked@17.0.1/README.md)<br>[spring-ai-loom-agent/src/main/resources/META-INF/resources/eventsource-parser@3.0.6/README.md](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent/src/main/resources/META-INF/resources/eventsource-parser@3.0.6/README.md)<br>[docs/API.md](../../../../sources/wb04307201__spring-ai-loom-agent/docs/API.md)<br>[docs/API.zh-CN.md](../../../../sources/wb04307201__spring-ai-loom-agent/docs/API.zh-CN.md)<br>[docs/CUSTOMIZATION.md](../../../../sources/wb04307201__spring-ai-loom-agent/docs/CUSTOMIZATION.md)<br>[docs/CUSTOMIZATION.zh-CN.md](../../../../sources/wb04307201__spring-ai-loom-agent/docs/CUSTOMIZATION.zh-CN.md) |
| config | 2 | [spring-ai-loom-agent/src/main/resources/META-INF/resources/marked@17.0.1/package.json](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent/src/main/resources/META-INF/resources/marked@17.0.1/package.json)<br>[spring-ai-loom-agent/src/main/resources/META-INF/resources/eventsource-parser@3.0.6/package.json](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent/src/main/resources/META-INF/resources/eventsource-parser@3.0.6/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 40 | [spring-ai-loom-agent-test/pom.xml](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/pom.xml)<br>[spring-ai-loom-agent-test/test/img1.jpg](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/test/img1.jpg)<br>[spring-ai-loom-agent-test/test/img2.jpg](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/test/img2.jpg)<br>[spring-ai-loom-agent-test/test/index.html](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/test/index.html)<br>[spring-ai-loom-agent-test/test/init.md](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/test/init.md)<br>[spring-ai-loom-agent-test/test/pdf1.pdf](../../../../sources/wb04307201__spring-ai-loom-agent/spring-ai-loom-agent-test/test/pdf1.pdf) |
| CI workflow | 1 | [.github/workflows/publish.yml](../../../../sources/wb04307201__spring-ai-loom-agent/.github/workflows/publish.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/wb04307201__spring-ai-loom-agent/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `spring-ai-loom-agent-test/src/main/resources/mcp-servers-dev.json`, `spring-ai-loom-agent-test/src/main/resources/mcp-servers-none.json`, `spring-ai-loom-agent-test/src/main/resources/mcp-servers-test.json`.
2. entrypoint를 따라 실행 흐름 확인: `spring-ai-loom-agent/src/main/resources/META-INF/resources/marked@17.0.1/bin/main.js`, `spring-ai-loom-agent/src/main/resources/META-INF/resources/marked@17.0.1/bin/marked.js`, `spring-ai-loom-agent/src/main/resources/META-INF/resources/eventsource-parser@3.0.6/src/index.ts`.
3. agent/tool runtime 매핑: `spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/ChatTest.java`, `spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/PathSecurityTest.java`, `spring-ai-loom-agent-test/src/test/java/cn/wubo/spring/ai/loom/agent/tool/time/DefaultTimeToolTest.java`.
4. retrieval/memory/indexing 확인: `spring-ai-loom-agent-test/test/index.html`, `spring-ai-loom-agent/src/main/resources/META-INF/resources/spring/ai/loom/index.html`, `spring-ai-loom-agent/src/main/resources/META-INF/resources/eventsource-parser@3.0.6/src/index.ts`.
5. test/eval 파일로 동작 검증: `spring-ai-loom-agent-test/pom.xml`, `spring-ai-loom-agent-test/test/img1.jpg`, `spring-ai-loom-agent-test/test/img2.jpg`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 A Spring Boot auto configuration library that injects RAG knowledge base, MCP tool calling, and Skill library into Sprin. 핵심 구조 신호는 Java, pom.xml, README.md, CLAUDE.md, LICENSE, tests이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
