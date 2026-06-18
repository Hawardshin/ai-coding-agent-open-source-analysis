# w8123/EnterpriseAgentFramework Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Enterprise AI Capability Platform for Java/Spring Boot. Register business APIs as governed AI capabilities, compose Agents with GraphSpec, Runtime, MCP/A2A/Gateway, RunOps and Trace. 企业智能体开发框架-把 Java 企业系统中的接口、领域方法、知识、模型和流程，沉淀为可治理、可编排、可开放的 AI 能力资产。

## 요약

- 조사 단위: `sources/w8123__EnterpriseAgentFramework` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,165 files, 324 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=ai-agent-service/src/test/java/com/enterprise/ai/agent/mcp/McpServerEndpointToolAclAuditTest.java, ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpCallLogEntity.java, ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpCallLogMapper.java이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | w8123/EnterpriseAgentFramework |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Java |
| Stars | 314 |
| Forks | 17 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/w8123__EnterpriseAgentFramework](../../../../sources/w8123__EnterpriseAgentFramework) |
| Existing report | [reports/global-trending/repositories/w8123__EnterpriseAgentFramework.md](../../../global-trending/repositories/w8123__EnterpriseAgentFramework.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1165 / 324 |
| Max observed depth | 13 |
| Top directories | .claude, .cursor, .mimocode, .playwright-cli, .superpowers, ai-admin-front, ai-agent-service, ai-common, ai-model-service, ai-runtime-contract, ai-skills-service, deploy, docs, reachai-capability-sdk, reachai-spring-boot2-starter, scripts, sql |
| Top extensions | .java: 809, .vue: 103, .ts: 101, .md: 55, .png: 17, .sql: 15, .yml: 10, .xml: 9, .json: 7, .svg: 7, (none): 5, .html: 4 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [ai-admin-front/src/App.vue](../../../../sources/w8123__EnterpriseAgentFramework/ai-admin-front/src/App.vue)<br>[ai-admin-front/src/main.ts](../../../../sources/w8123__EnterpriseAgentFramework/ai-admin-front/src/main.ts)<br>[.superpowers/brainstorm/codex-36596-20260521182534/state/server.pid](../../../../sources/w8123__EnterpriseAgentFramework/.superpowers/brainstorm/codex-36596-20260521182534/state/server.pid)<br>[.superpowers/brainstorm/codex-20440-20260521182523/state/server.pid](../../../../sources/w8123__EnterpriseAgentFramework/.superpowers/brainstorm/codex-20440-20260521182523/state/server.pid) |
| agentRuntime | 647 | [agent-definitions.json](../../../../sources/w8123__EnterpriseAgentFramework/agent-definitions.json)<br>[AGENTS.md](../../../../sources/w8123__EnterpriseAgentFramework/AGENTS.md)<br>[docs/Workflow-AI-Coding.md](../../../../sources/w8123__EnterpriseAgentFramework/docs/Workflow-AI-Coding.md)<br>[ai-agent-service/src/test/java/com/enterprise/ai/agent/workflow/AgentEntryServiceTest.java](../../../../sources/w8123__EnterpriseAgentFramework/ai-agent-service/src/test/java/com/enterprise/ai/agent/workflow/AgentEntryServiceTest.java)<br>[ai-agent-service/src/test/java/com/enterprise/ai/agent/workflow/AgentProvisioningServiceTest.java](../../../../sources/w8123__EnterpriseAgentFramework/ai-agent-service/src/test/java/com/enterprise/ai/agent/workflow/AgentProvisioningServiceTest.java)<br>[ai-agent-service/src/test/java/com/enterprise/ai/agent/workflow/AgentWorkflowResolverTest.java](../../../../sources/w8123__EnterpriseAgentFramework/ai-agent-service/src/test/java/com/enterprise/ai/agent/workflow/AgentWorkflowResolverTest.java)<br>[ai-agent-service/src/test/java/com/enterprise/ai/agent/workflow/EmbedWorkflowRuntimeServiceTest.java](../../../../sources/w8123__EnterpriseAgentFramework/ai-agent-service/src/test/java/com/enterprise/ai/agent/workflow/EmbedWorkflowRuntimeServiceTest.java)<br>[ai-agent-service/src/test/java/com/enterprise/ai/agent/workflow/PageAssistantWorkflowBindingServiceTest.java](../../../../sources/w8123__EnterpriseAgentFramework/ai-agent-service/src/test/java/com/enterprise/ai/agent/workflow/PageAssistantWorkflowBindingServiceTest.java) |
| mcp | 17 | [ai-agent-service/src/test/java/com/enterprise/ai/agent/mcp/McpServerEndpointToolAclAuditTest.java](../../../../sources/w8123__EnterpriseAgentFramework/ai-agent-service/src/test/java/com/enterprise/ai/agent/mcp/McpServerEndpointToolAclAuditTest.java)<br>[ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpCallLogEntity.java](../../../../sources/w8123__EnterpriseAgentFramework/ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpCallLogEntity.java)<br>[ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpCallLogMapper.java](../../../../sources/w8123__EnterpriseAgentFramework/ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpCallLogMapper.java)<br>[ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpClientEntity.java](../../../../sources/w8123__EnterpriseAgentFramework/ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpClientEntity.java)<br>[ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpClientMapper.java](../../../../sources/w8123__EnterpriseAgentFramework/ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpClientMapper.java)<br>[ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpClientService.java](../../../../sources/w8123__EnterpriseAgentFramework/ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpClientService.java)<br>[ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpServerEndpoint.java](../../../../sources/w8123__EnterpriseAgentFramework/ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpServerEndpoint.java)<br>[ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpVisibilityEntity.java](../../../../sources/w8123__EnterpriseAgentFramework/ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpVisibilityEntity.java) |
| retrieval | 70 | [sql/upgrade-20260527-embed-identity-auth.sql](../../../../sources/w8123__EnterpriseAgentFramework/sql/upgrade-20260527-embed-identity-auth.sql)<br>[reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/graph/ReachGraphTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/graph/ReachGraphTest.java)<br>[reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/graph/ReachAgentGraph.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/graph/ReachAgentGraph.java)<br>[reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/graph/ReachGraph.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/graph/ReachGraph.java)<br>[reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/graph/ReachGraphSerializer.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/graph/ReachGraphSerializer.java)<br>[reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/graph/ReachGraphSpec.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/graph/ReachGraphSpec.java)<br>[reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/graph/ReachVars.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/graph/ReachVars.java)<br>[docs/ai-memory/AI-TOOLS.md](../../../../sources/w8123__EnterpriseAgentFramework/docs/ai-memory/AI-TOOLS.md) |
| spec | 3 | [docs/superpowers/specs/2026-06-13-global-ai-entry-page-capability-design.md](../../../../sources/w8123__EnterpriseAgentFramework/docs/superpowers/specs/2026-06-13-global-ai-entry-page-capability-design.md)<br>[docs/superpowers/specs/2026-06-14-agent-workflow-decoupling-refactor-design.md](../../../../sources/w8123__EnterpriseAgentFramework/docs/superpowers/specs/2026-06-14-agent-workflow-decoupling-refactor-design.md)<br>[ai-skills-service/requirements.md](../../../../sources/w8123__EnterpriseAgentFramework/ai-skills-service/requirements.md) |
| eval | 115 | [reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachAiRegistryAutoConfigurationTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachAiRegistryAutoConfigurationTest.java)<br>[reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachAiRegistryClientTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachAiRegistryClientTest.java)<br>[reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachAiRegistryHeartbeatSchedulerTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachAiRegistryHeartbeatSchedulerTest.java)<br>[reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachCapabilityEndpointTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachCapabilityEndpointTest.java)<br>[reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachCapabilityInvokerTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachCapabilityInvokerTest.java)<br>[reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/graph/ReachGraphTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/graph/ReachGraphTest.java)<br>[reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/capability/ReachCapabilityScannerTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/capability/ReachCapabilityScannerTest.java)<br>[reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/capability/ReachParamNameTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/capability/ReachParamNameTest.java) |
| security | 54 | [sql/upgrade-20260527-embed-identity-auth.sql](../../../../sources/w8123__EnterpriseAgentFramework/sql/upgrade-20260527-embed-identity-auth.sql)<br>[sql/upgrade-20260528-auth-provider-zh-names.sql](../../../../sources/w8123__EnterpriseAgentFramework/sql/upgrade-20260528-auth-provider-zh-names.sql)<br>[reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/auth/ReachAiInvocationTokenTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/auth/ReachAiInvocationTokenTest.java)<br>[reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/auth/ReachAiSignerTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/auth/ReachAiSignerTest.java)<br>[reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/auth/ReachAiInvocationClaims.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/auth/ReachAiInvocationClaims.java)<br>[reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/auth/ReachAiInvocationToken.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/auth/ReachAiInvocationToken.java)<br>[reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/auth/ReachAiSignatureHeaders.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/auth/ReachAiSignatureHeaders.java)<br>[reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/auth/ReachAiSigner.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/auth/ReachAiSigner.java) |
| ci | 0 | not obvious |
| container | 8 | [deploy/docker-compose.infra.yml](../../../../sources/w8123__EnterpriseAgentFramework/deploy/docker-compose.infra.yml)<br>[deploy/Dockerfile.agent-service](../../../../sources/w8123__EnterpriseAgentFramework/deploy/Dockerfile.agent-service)<br>[deploy/Dockerfile.model-service](../../../../sources/w8123__EnterpriseAgentFramework/deploy/Dockerfile.model-service)<br>[deploy/Dockerfile.skills-service](../../../../sources/w8123__EnterpriseAgentFramework/deploy/Dockerfile.skills-service)<br>[deploy/k8s/ai-agent-service.yml](../../../../sources/w8123__EnterpriseAgentFramework/deploy/k8s/ai-agent-service.yml)<br>[deploy/k8s/ai-model-service.yml](../../../../sources/w8123__EnterpriseAgentFramework/deploy/k8s/ai-model-service.yml)<br>[deploy/k8s/ai-skills-service.yml](../../../../sources/w8123__EnterpriseAgentFramework/deploy/k8s/ai-skills-service.yml)<br>[deploy/k8s/secrets.yml.example](../../../../sources/w8123__EnterpriseAgentFramework/deploy/k8s/secrets.yml.example) |
| instruction | 2 | [AGENTS.md](../../../../sources/w8123__EnterpriseAgentFramework/AGENTS.md)<br>[.cursor/rules/reachai-project.mdc](../../../../sources/w8123__EnterpriseAgentFramework/.cursor/rules/reachai-project.mdc) |
| docs | 53 | [README.md](../../../../sources/w8123__EnterpriseAgentFramework/README.md)<br>[sql/README.md](../../../../sources/w8123__EnterpriseAgentFramework/sql/README.md)<br>[docs/01-平台定位与架构总览.md](../../../../sources/w8123__EnterpriseAgentFramework/docs/01-平台定位与架构总览.md)<br>[docs/02-项目注册与能力资产.md](../../../../sources/w8123__EnterpriseAgentFramework/docs/02-项目注册与能力资产.md)<br>[docs/03-Agent-Studio与Runtime.md](../../../../sources/w8123__EnterpriseAgentFramework/docs/03-Agent-Studio与Runtime.md)<br>[docs/04-运行治理与开放协议.md](../../../../sources/w8123__EnterpriseAgentFramework/docs/04-运行治理与开放协议.md)<br>[docs/05-知识模型与企业资产.md](../../../../sources/w8123__EnterpriseAgentFramework/docs/05-知识模型与企业资产.md)<br>[docs/06-项目背景技术与功能说明.md](../../../../sources/w8123__EnterpriseAgentFramework/docs/06-项目背景技术与功能说明.md) |
| config | 2 | [ai-admin-front/package.json](../../../../sources/w8123__EnterpriseAgentFramework/ai-admin-front/package.json)<br>[ai-admin-front/tsconfig.json](../../../../sources/w8123__EnterpriseAgentFramework/ai-admin-front/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 115 | [reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachAiRegistryAutoConfigurationTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachAiRegistryAutoConfigurationTest.java)<br>[reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachAiRegistryClientTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachAiRegistryClientTest.java)<br>[reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachAiRegistryHeartbeatSchedulerTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachAiRegistryHeartbeatSchedulerTest.java)<br>[reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachCapabilityEndpointTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachCapabilityEndpointTest.java)<br>[reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachCapabilityInvokerTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachCapabilityInvokerTest.java)<br>[reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/graph/ReachGraphTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/graph/ReachGraphTest.java) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 8 | [deploy/docker-compose.infra.yml](../../../../sources/w8123__EnterpriseAgentFramework/deploy/docker-compose.infra.yml)<br>[deploy/Dockerfile.agent-service](../../../../sources/w8123__EnterpriseAgentFramework/deploy/Dockerfile.agent-service)<br>[deploy/Dockerfile.model-service](../../../../sources/w8123__EnterpriseAgentFramework/deploy/Dockerfile.model-service)<br>[deploy/Dockerfile.skills-service](../../../../sources/w8123__EnterpriseAgentFramework/deploy/Dockerfile.skills-service)<br>[deploy/k8s/ai-agent-service.yml](../../../../sources/w8123__EnterpriseAgentFramework/deploy/k8s/ai-agent-service.yml)<br>[deploy/k8s/ai-model-service.yml](../../../../sources/w8123__EnterpriseAgentFramework/deploy/k8s/ai-model-service.yml) |
| Security / policy | 54 | [sql/upgrade-20260527-embed-identity-auth.sql](../../../../sources/w8123__EnterpriseAgentFramework/sql/upgrade-20260527-embed-identity-auth.sql)<br>[sql/upgrade-20260528-auth-provider-zh-names.sql](../../../../sources/w8123__EnterpriseAgentFramework/sql/upgrade-20260528-auth-provider-zh-names.sql)<br>[reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/auth/ReachAiInvocationTokenTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/auth/ReachAiInvocationTokenTest.java)<br>[reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/auth/ReachAiSignerTest.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/auth/ReachAiSignerTest.java)<br>[reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/auth/ReachAiInvocationClaims.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/auth/ReachAiInvocationClaims.java)<br>[reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/auth/ReachAiInvocationToken.java](../../../../sources/w8123__EnterpriseAgentFramework/reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/auth/ReachAiInvocationToken.java) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/w8123__EnterpriseAgentFramework/AGENTS.md)<br>[.cursor/rules/reachai-project.mdc](../../../../sources/w8123__EnterpriseAgentFramework/.cursor/rules/reachai-project.mdc) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `ai-agent-service/src/test/java/com/enterprise/ai/agent/mcp/McpServerEndpointToolAclAuditTest.java`, `ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpCallLogEntity.java`, `ai-agent-service/src/main/java/com/enterprise/ai/agent/mcp/McpCallLogMapper.java`.
2. Trace execution through entrypoints: `ai-admin-front/src/App.vue`, `ai-admin-front/src/main.ts`, `.superpowers/brainstorm/codex-36596-20260521182534/state/server.pid`.
3. Map agent/tool runtime through: `agent-definitions.json`, `AGENTS.md`, `docs/Workflow-AI-Coding.md`.
4. Inspect retrieval/memory/indexing through: `sql/upgrade-20260527-embed-identity-auth.sql`, `reachai-capability-sdk/src/test/java/com/enterprise/ai/reach/sdk/graph/ReachGraphTest.java`, `reachai-capability-sdk/src/main/java/com/enterprise/ai/reach/sdk/graph/ReachAgentGraph.java`.
5. Verify behavior through test/eval files: `reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachAiRegistryAutoConfigurationTest.java`, `reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachAiRegistryClientTest.java`, `reachai-spring-boot2-starter/src/test/java/com/enterprise/ai/reach/spring/ReachAiRegistryHeartbeatSchedulerTest.java`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Enterprise AI Capability Platform for Java/Spring Boot. Register business APIs as governed AI capabilities, compose Agen. 핵심 구조 신호는 Java, pom.xml, README.md, AGENTS.md, LICENSE, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
