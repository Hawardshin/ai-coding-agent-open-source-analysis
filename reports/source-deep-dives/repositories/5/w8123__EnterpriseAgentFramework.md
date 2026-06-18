# w8123/EnterpriseAgentFramework 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Enterprise AI Capability Platform for Java/Spring Boot. Register business APIs as governed AI capabilities, compose Agents with GraphSpec, Runtime, MCP/A2A/Gateway, RunOps and Trace. 企业智能体开发框架-把 Java 企业系统中的接口、领域方法、知识、模型和流程，沉淀为可治理、可编排、可开放的 AI 能力资产。

## 요약

- 조사 단위: `sources/w8123__EnterpriseAgentFramework` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,165 files, 324 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=ai-agent-service/src/test/java/com/enterprise/ai/agent/mcp/McpServerEndpointToolAclAuditTest.java, ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpCallLogEntity.java, ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpCallLogMapper.java이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | w8123/EnterpriseAgentFramework |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Java |
| Stars | 314 |
| Forks | 17 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/w8123__EnterpriseAgentFramework](../../../../sources/w8123__EnterpriseAgentFramework) |
| 기존 보고서 | [reports/global-trending/repositories/w8123__EnterpriseAgentFramework.md](../../../global-trending/repositories/w8123__EnterpriseAgentFramework.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1165 / 324 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .claude, .cursor, .mimocode, .playwright-cli, .superpowers, ai-admin-front, ai-agent-service, ai-common, ai-model-service, ai-runtime-contract, ai-skills-service, deploy, docs, reachai-capability-sdk, reachai-spring-boot2-starter, scripts, sql |
| 상위 확장자 | .java: 809, .vue: 103, .ts: 101, .md: 55, .png: 17, .sql: 15, .yml: 10, .xml: 9, .json: 7, .svg: 7, (none): 5, .html: 4 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 50 |
| ai-admin-front | top-level component | 1 |
| ai-agent-service | top-level component | 1 |
| ai-common | top-level component | 1 |
| ai-model-service | top-level component | 1 |
| ai-runtime-contract | top-level component | 1 |
| ai-skills-service | top-level component | 1 |
| deploy | deployment surface | 1 |
| reachai-capability-sdk | top-level component | 1 |
| reachai-spring-boot2-starter | top-level component | 1 |
| scripts | top-level component | 1 |
| sql | top-level component | 1 |


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
| mcp | [ai-agent-service/src/test/java/com/enterprise/ai/agent/mcp/McpServerEndpointToolAclAuditTest.java](../../../../sources/w8123__EnterpriseAgentFramework/ai-agent-service/src/test/java/com/enterprise/ai/agent/mcp/McpServerEndpointToolAclAuditTest.java) | mcp signal |
| mcp | [ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpCallLogEntity.java](../../../../sources/w8123__EnterpriseAgentFramework/ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpCallLogEntity.java) | mcp signal |
| mcp | [ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpCallLogMapper.java](../../../../sources/w8123__EnterpriseAgentFramework/ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpCallLogMapper.java) | mcp signal |
| mcp | [ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpClientEntity.java](../../../../sources/w8123__EnterpriseAgentFramework/ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpClientEntity.java) | mcp signal |
| agentRuntime | [agent-definitions.json](../../../../sources/w8123__EnterpriseAgentFramework/agent-definitions.json) | agentRuntime signal |
| agentRuntime | [AGENTS.md](../../../../sources/w8123__EnterpriseAgentFramework/AGENTS.md) | agentRuntime signal |
| agentRuntime | [docs/Workflow-AI-Coding.md](../../../../sources/w8123__EnterpriseAgentFramework/docs/Workflow-AI-Coding.md) | agentRuntime signal |
| agentRuntime | [ai-agent-service/src/test/java/com/enterprise/ai/agent/workflow/AgentEntryServiceTest.java](../../../../sources/w8123__EnterpriseAgentFramework/ai-agent-service/src/test/java/com/enterprise/ai/agent/workflow/AgentEntryServiceTest.java) | agentRuntime signal |
| entrypoints | [ai-admin-front/src/App.vue](../../../../sources/w8123__EnterpriseAgentFramework/ai-admin-front/src/App.vue) | entrypoints signal |
| entrypoints | [ai-admin-front/src/main.ts](../../../../sources/w8123__EnterpriseAgentFramework/ai-admin-front/src/main.ts) | entrypoints signal |
| entrypoints | [.superpowers/brainstorm/codex-36596-20260521182534/state/server.pid](../../../../sources/w8123__EnterpriseAgentFramework/.superpowers/brainstorm/codex-36596-20260521182534/state/server.pid) | entrypoints signal |
| entrypoints | [.superpowers/brainstorm/codex-20440-20260521182523/state/server.pid](../../../../sources/w8123__EnterpriseAgentFramework/.superpowers/brainstorm/codex-20440-20260521182523/state/server.pid) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [ai-admin-front/src/App.vue](../../../../sources/w8123__EnterpriseAgentFramework/ai-admin-front/src/App.vue)<br>[ai-admin-front/src/main.ts](../../../../sources/w8123__EnterpriseAgentFramework/ai-admin-front/src/main.ts)<br>[.superpowers/brainstorm/codex-36596-20260521182534/state/server.pid](../../../../sources/w8123__EnterpriseAgentFramework/.superpowers/brainstorm/codex-36596-20260521182534/state/server.pid)<br>[.superpowers/brainstorm/codex-20440-20260521182523/state/server.pid](../../../../sources/w8123__EnterpriseAgentFramework/.superpowers/brainstorm/codex-20440-20260521182523/state/server.pid) |
| agentRuntime | 647 | [agent-definitions.json](../../../../sources/w8123__EnterpriseAgentFramework/agent-definitions.json)<br>[AGENTS.md](../../../../sources/w8123__EnterpriseAgentFramework/AGENTS.md)<br>[docs/Workflow-AI-Coding.md](../../../../sources/w8123__EnterpriseAgentFramework/docs/Workflow-AI-Coding.md)<br>[ai-agent-service/src/test/java/com/enterprise/ai/agent/workflow/AgentEntryServiceTest.java](../../../../sources/w8123__EnterpriseAgentFramework/ai-agent-service/src/test/java/com/enterprise/ai/agent/workflow/AgentEntryServiceTest.java)<br>[ai-agent-service/src/test/java/com/enterprise/ai/agent/workflow/AgentProvisioningServiceTest.java](../../../../sources/w8123__EnterpriseAgentFramework/ai-agent-service/src/test/java/com/enterprise/ai/agent/workflow/AgentProvisioningServiceTest.java)<br>[ai-agent-service/src/test/java/com/enterprise/ai/agent/workflow/AgentWorkflowResolverTest.java](../../../../sources/w8123__EnterpriseAgentFramework/ai-agent-service/src/test/java/com/enterprise/ai/agent/workflow/AgentWorkflowResolverTest.java)<br>[ai-agent-service/src/test/java/com/enterprise/ai/agent/workflow/EmbedWorkflowRuntimeServiceTest.java](../../../../sources/w8123__EnterpriseAgentFramework/ai-agent-service/src/test/java/com/enterprise/ai/agent/workflow/EmbedWorkflowRuntimeServiceTest.java)<br>[ai-agent-service/src/test/java/com/enterprise/ai/agent/workflow/PageAssistantWorkflowBindingServiceTest.java](../../../../sources/w8123__EnterpriseAgentFramework/ai-agent-service/src/test/java/com/enterprise/ai/agent/workflow/PageAssistantWorkflowBindingServiceTest.java) |
| mcp | 17 | [ai-agent-service/src/test/java/com/enterprise/ai/agent/mcp/McpServerEndpointToolAclAuditTest.java](../../../../sources/w8123__EnterpriseAgentFramework/ai-agent-service/src/test/java/com/enterprise/ai/agent/mcp/McpServerEndpointToolAclAuditTest.java)<br>[ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpCallLogEntity.java](../../../../sources/w8123__EnterpriseAgentFramework/ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpCallLogEntity.java)<br>[ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpCallLogMapper.java](../../../../sources/w8123__EnterpriseAgentFramework/ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpCallLogMapper.java)<br>[ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpClientEntity.java](../../../../sources/w8123__EnterpriseAgentFramework/ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpClientEntity.java)<br>[ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpClientMapper.java](../../../../sources/w8123__EnterpriseAgentFramework/ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpClientMapper.java)<br>[ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpClientService.java](../../../../sources/w8123__EnterpriseAgentFramework/ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpClientService.java)<br>[ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpServerEndpoint.java](../../../../sources/w8123__EnterpriseAgentFramework/ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpServerEndpoint.java)<br>[ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpVisibilityEntity.java](../../../../sources/w8123__EnterpriseAgentFramework/ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpVisibilityEntity.java) |
| retrieval | 70 | [sql/upgrade-20260527-embed-identity-auth.sql](../../../../sources/w8123__EnterpriseAgentFramework/sql/upgrade-20260527-embed-identity-auth.sql)<br>[reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/graph/ReachGraphTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/graph/ReachGraphTest.java)<br>[reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/graph/ReachAgentGraph.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/graph/ReachAgentGraph.java)<br>[reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/graph/ReachGraph.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/graph/ReachGraph.java)<br>[reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/graph/ReachGraphSerializer.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/graph/ReachGraphSerializer.java)<br>[reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/graph/ReachGraphSpec.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/graph/ReachGraphSpec.java)<br>[reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/graph/ReachVars.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/graph/ReachVars.java)<br>[docs/ai-memory/AI-TOOLS.md](../../../../sources/w8123__EnterpriseAgentFramework/docs/ai-memory/AI-TOOLS.md) |
| spec | 3 | [docs/superpowers/specs/2026-06-13-global-ai-entry-page-capability-design.md](../../../../sources/w8123__EnterpriseAgentFramework/docs/superpowers/specs/2026-06-13-global-ai-entry-page-capability-design.md)<br>[docs/superpowers/specs/2026-06-14-agent-workflow-decoupling-refactor-design.md](../../../../sources/w8123__EnterpriseAgentFramework/docs/superpowers/specs/2026-06-14-agent-workflow-decoupling-refactor-design.md)<br>[ai-skills-service/requirements.md](../../../../sources/w8123__EnterpriseAgentFramework/ai-skills-service/requirements.md) |
| eval | 115 | [reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachAiRegistryAutoConfigurationTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachAiRegistryAutoConfigurationTest.java)<br>[reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachAiRegistryClientTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachAiRegistryClientTest.java)<br>[reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachAiRegistryHeartbeatSchedulerTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachAiRegistryHeartbeatSchedulerTest.java)<br>[reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachCapabilityEndpointTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachCapabilityEndpointTest.java)<br>[reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachCapabilityInvokerTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachCapabilityInvokerTest.java)<br>[reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/graph/ReachGraphTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/graph/ReachGraphTest.java)<br>[reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/capability/ReachCapabilityScannerTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/capability/ReachCapabilityScannerTest.java)<br>[reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/capability/ReachParamNameTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/capability/ReachParamNameTest.java) |
| security | 54 | [sql/upgrade-20260527-embed-identity-auth.sql](../../../../sources/w8123__EnterpriseAgentFramework/sql/upgrade-20260527-embed-identity-auth.sql)<br>[sql/upgrade-20260528-auth-provider-zh-names.sql](../../../../sources/w8123__EnterpriseAgentFramework/sql/upgrade-20260528-auth-provider-zh-names.sql)<br>[reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/auth/ReachAiInvocationTokenTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/auth/ReachAiInvocationTokenTest.java)<br>[reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/auth/ReachAiSignerTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/auth/ReachAiSignerTest.java)<br>[reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/auth/ReachAiInvocationClaims.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/auth/ReachAiInvocationClaims.java)<br>[reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/auth/ReachAiInvocationToken.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/auth/ReachAiInvocationToken.java)<br>[reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/auth/ReachAiSignatureHeaders.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/auth/ReachAiSignatureHeaders.java)<br>[reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/auth/ReachAiSigner.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/auth/ReachAiSigner.java) |
| ci | 0 | 명확하지 않음 |
| container | 8 | [deploy/docker-compose.infra.yml](../../../../sources/w8123__EnterpriseAgentFramework/deploy/docker-compose.infra.yml)<br>[deploy/Dockerfile.agent-service](../../../../sources/w8123__EnterpriseAgentFramework/deploy/Dockerfile.agent-service)<br>[deploy/Dockerfile.model-service](../../../../sources/w8123__EnterpriseAgentFramework/deploy/Dockerfile.model-service)<br>[deploy/Dockerfile.skills-service](../../../../sources/w8123__EnterpriseAgentFramework/deploy/Dockerfile.skills-service)<br>[deploy/k8s/ai-agent-service.yml](../../../../sources/w8123__EnterpriseAgentFramework/deploy/k8s/ai-agent-service.yml)<br>[deploy/k8s/ai-model-service.yml](../../../../sources/w8123__EnterpriseAgentFramework/deploy/k8s/ai-model-service.yml)<br>[deploy/k8s/ai-skills-service.yml](../../../../sources/w8123__EnterpriseAgentFramework/deploy/k8s/ai-skills-service.yml)<br>[deploy/k8s/secrets.yml.example](../../../../sources/w8123__EnterpriseAgentFramework/deploy/k8s/secrets.yml.example) |
| instruction | 2 | [AGENTS.md](../../../../sources/w8123__EnterpriseAgentFramework/AGENTS.md)<br>[.cursor/rules/reachai-project.mdc](../../../../sources/w8123__EnterpriseAgentFramework/.cursor/rules/reachai-project.mdc) |
| docs | 53 | [README.md](../../../../sources/w8123__EnterpriseAgentFramework/README.md)<br>[sql/README.md](../../../../sources/w8123__EnterpriseAgentFramework/sql/README.md)<br>[docs/01-平台定位与架构总览.md](../../../../sources/w8123__EnterpriseAgentFramework/docs/01-平台定位与架构总览.md)<br>[docs/02-项目注册与能力资产.md](../../../../sources/w8123__EnterpriseAgentFramework/docs/02-项目注册与能力资产.md)<br>[docs/03-Agent-Studio与Runtime.md](../../../../sources/w8123__EnterpriseAgentFramework/docs/03-Agent-Studio与Runtime.md)<br>[docs/04-运行治理与开放协议.md](../../../../sources/w8123__EnterpriseAgentFramework/docs/04-运行治理与开放协议.md)<br>[docs/05-知识模型与企业资产.md](../../../../sources/w8123__EnterpriseAgentFramework/docs/05-知识模型与企业资产.md)<br>[docs/06-项目背景技术与功能说明.md](../../../../sources/w8123__EnterpriseAgentFramework/docs/06-项目背景技术与功能说明.md) |
| config | 2 | [ai-admin-front/package.json](../../../../sources/w8123__EnterpriseAgentFramework/ai-admin-front/package.json)<br>[ai-admin-front/tsconfig.json](../../../../sources/w8123__EnterpriseAgentFramework/ai-admin-front/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 115 | [reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachAiRegistryAutoConfigurationTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachAiRegistryAutoConfigurationTest.java)<br>[reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachAiRegistryClientTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachAiRegistryClientTest.java)<br>[reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachAiRegistryHeartbeatSchedulerTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachAiRegistryHeartbeatSchedulerTest.java)<br>[reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachCapabilityEndpointTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachCapabilityEndpointTest.java)<br>[reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachCapabilityInvokerTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachCapabilityInvokerTest.java)<br>[reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/graph/ReachGraphTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/graph/ReachGraphTest.java) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 8 | [deploy/docker-compose.infra.yml](../../../../sources/w8123__EnterpriseAgentFramework/deploy/docker-compose.infra.yml)<br>[deploy/Dockerfile.agent-service](../../../../sources/w8123__EnterpriseAgentFramework/deploy/Dockerfile.agent-service)<br>[deploy/Dockerfile.model-service](../../../../sources/w8123__EnterpriseAgentFramework/deploy/Dockerfile.model-service)<br>[deploy/Dockerfile.skills-service](../../../../sources/w8123__EnterpriseAgentFramework/deploy/Dockerfile.skills-service)<br>[deploy/k8s/ai-agent-service.yml](../../../../sources/w8123__EnterpriseAgentFramework/deploy/k8s/ai-agent-service.yml)<br>[deploy/k8s/ai-model-service.yml](../../../../sources/w8123__EnterpriseAgentFramework/deploy/k8s/ai-model-service.yml) |
| 보안/정책 | 54 | [sql/upgrade-20260527-embed-identity-auth.sql](../../../../sources/w8123__EnterpriseAgentFramework/sql/upgrade-20260527-embed-identity-auth.sql)<br>[sql/upgrade-20260528-auth-provider-zh-names.sql](../../../../sources/w8123__EnterpriseAgentFramework/sql/upgrade-20260528-auth-provider-zh-names.sql)<br>[reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/auth/ReachAiInvocationTokenTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/auth/ReachAiInvocationTokenTest.java)<br>[reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/auth/ReachAiSignerTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/auth/ReachAiSignerTest.java)<br>[reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/auth/ReachAiInvocationClaims.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/auth/ReachAiInvocationClaims.java)<br>[reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/auth/ReachAiInvocationToken.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/auth/ReachAiInvocationToken.java) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/w8123__EnterpriseAgentFramework/AGENTS.md)<br>[.cursor/rules/reachai-project.mdc](../../../../sources/w8123__EnterpriseAgentFramework/.cursor/rules/reachai-project.mdc) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `ai-agent-service/src/test/java/com/enterprise/ai/agent/mcp/McpServerEndpointToolAclAuditTest.java`, `ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpCallLogEntity.java`, `ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpCallLogMapper.java`.
2. entrypoint를 따라 실행 흐름 확인: `ai-admin-front/src/App.vue`, `ai-admin-front/src/main.ts`, `.superpowers/brainstorm/codex-36596-20260521182534/state/server.pid`.
3. agent/tool runtime 매핑: `agent-definitions.json`, `AGENTS.md`, `docs/Workflow-AI-Coding.md`.
4. retrieval/memory/indexing 확인: `sql/upgrade-20260527-embed-identity-auth.sql`, `reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/graph/ReachGraphTest.java`, `reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/graph/ReachAgentGraph.java`.
5. test/eval 파일로 동작 검증: `reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachAiRegistryAutoConfigurationTest.java`, `reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachAiRegistryClientTest.java`, `reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachAiRegistryHeartbeatSchedulerTest.java`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Enterprise AI Capability Platform for Java/Spring Boot. Register business APIs as governed AI capabilities, compose Agen. 핵심 구조 신호는 Java, pom.xml, README.md, AGENTS.md, LICENSE, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
