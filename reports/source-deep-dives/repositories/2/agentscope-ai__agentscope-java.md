# agentscope-ai/agentscope-java Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

AgentScope Java: Agent-Oriented Programming for Building LLM Applications

## 요약

- 조사 단위: `sources/agentscope-ai__agentscope-java` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,690 files, 1,381 directories, depth score 129, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=docs/v1/zh/docs/task/mcp.md, docs/v1/en/docs/task/mcp.md, agentscope-examples/documentation/src/main/java/io/agentscope/examples/documentation2/mcp/McpSseExample.java이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | agentscope-ai/agentscope-java |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Java |
| Stars | 3897 |
| Forks | 835 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/agentscope-ai__agentscope-java](../../../../sources/agentscope-ai__agentscope-java) |
| Existing report | [reports/global-trending/repositories/agentscope-ai__agentscope-java.md](../../../global-trending/repositories/agentscope-ai__agentscope-java.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2690 / 1381 |
| Max observed depth | 13 |
| Top directories | .github, agentscope-core, agentscope-dependencies-bom, agentscope-distribution, agentscope-examples, agentscope-extensions, agentscope-harness, docs |
| Top extensions | .java: 1987, .md: 327, .tsx: 123, .xml: 72, .ts: 43, .json: 27, .png: 19, .html: 13, .yml: 12, .py: 10, (none): 10, .js: 9 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 135 |
| .github | ci surface | 1 |
| agentscope-core | top-level component | 1 |
| agentscope-dependencies-bom | ci surface | 1 |
| agentscope-distribution | top-level component | 1 |
| agentscope-examples | top-level component | 1 |
| agentscope-extensions | top-level component | 1 |
| agentscope-harness | top-level component | 1 |


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
| mcp | [docs/v1/zh/docs/task/mcp.md](../../../../sources/agentscope-ai__agentscope-java/docs/v1/zh/docs/task/mcp.md) | mcp signal |
| mcp | [docs/v1/en/docs/task/mcp.md](../../../../sources/agentscope-ai__agentscope-java/docs/v1/en/docs/task/mcp.md) | mcp signal |
| mcp | [agentscope-examples/documentation/src/main/java/io/agentscope/examples/documentation2/mcp/McpSseExample.java](../../../../sources/agentscope-ai__agentscope-java/agentscope-examples/documentation/src/main/java/io/agentscope/examples/documentation2/mcp/McpSseExample.java) | mcp signal |
| mcp | [agentscope-examples/documentation/src/main/java/io/agentscope/examples/documentation2/mcp/McpStdioExample.java](../../../../sources/agentscope-ai__agentscope-java/agentscope-examples/documentation/src/main/java/io/agentscope/examples/documentation2/mcp/McpStdioExample.java) | mcp signal |
| agentRuntime | [SKILL.md](../../../../sources/agentscope-ai__agentscope-java/SKILL.md) | agentRuntime signal |
| agentRuntime | [docs/v2/zh/integration/skill/git-repository.md](../../../../sources/agentscope-ai__agentscope-java/docs/v2/zh/integration/skill/git-repository.md) | agentRuntime signal |
| agentRuntime | [docs/v2/zh/integration/skill/index.md](../../../../sources/agentscope-ai__agentscope-java/docs/v2/zh/integration/skill/index.md) | agentRuntime signal |
| agentRuntime | [docs/v2/zh/integration/skill/mysql-repository.md](../../../../sources/agentscope-ai__agentscope-java/docs/v2/zh/integration/skill/mysql-repository.md) | agentRuntime signal |
| entrypoints | [agentscope-examples/agents/agentscope-paw/frontend/src/main.tsx](../../../../sources/agentscope-ai__agentscope-java/agentscope-examples/agents/agentscope-paw/frontend/src/main.tsx) | entrypoints signal |
| entrypoints | [agentscope-examples/agents/agentscope-dataagent/frontend/src/main.tsx](../../../../sources/agentscope-ai__agentscope-java/agentscope-examples/agents/agentscope-dataagent/frontend/src/main.tsx) | entrypoints signal |
| entrypoints | [agentscope-examples/agents/agentscope-builder/frontend/src/main.tsx](../../../../sources/agentscope-ai__agentscope-java/agentscope-examples/agents/agentscope-builder/frontend/src/main.tsx) | entrypoints signal |
| instruction | [agentscope-examples/agents/agentscope-paw/src/main/resources/scaffold/default/AGENTS.md.template](../../../../sources/agentscope-ai__agentscope-java/agentscope-examples/agents/agentscope-paw/src/main/resources/scaffold/default/AGENTS.md.template) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [agentscope-examples/agents/agentscope-paw/frontend/src/main.tsx](../../../../sources/agentscope-ai__agentscope-java/agentscope-examples/agents/agentscope-paw/frontend/src/main.tsx)<br>[agentscope-examples/agents/agentscope-dataagent/frontend/src/main.tsx](../../../../sources/agentscope-ai__agentscope-java/agentscope-examples/agents/agentscope-dataagent/frontend/src/main.tsx)<br>[agentscope-examples/agents/agentscope-builder/frontend/src/main.tsx](../../../../sources/agentscope-ai__agentscope-java/agentscope-examples/agents/agentscope-builder/frontend/src/main.tsx) |
| agentRuntime | 1390 | [SKILL.md](../../../../sources/agentscope-ai__agentscope-java/SKILL.md)<br>[docs/v2/zh/integration/skill/git-repository.md](../../../../sources/agentscope-ai__agentscope-java/docs/v2/zh/integration/skill/git-repository.md)<br>[docs/v2/zh/integration/skill/index.md](../../../../sources/agentscope-ai__agentscope-java/docs/v2/zh/integration/skill/index.md)<br>[docs/v2/zh/integration/skill/mysql-repository.md](../../../../sources/agentscope-ai__agentscope-java/docs/v2/zh/integration/skill/mysql-repository.md)<br>[docs/v2/zh/integration/skill/overview.md](../../../../sources/agentscope-ai__agentscope-java/docs/v2/zh/integration/skill/overview.md)<br>[docs/v2/zh/integration/skill/postgresql-repository.md](../../../../sources/agentscope-ai__agentscope-java/docs/v2/zh/integration/skill/postgresql-repository.md)<br>[docs/v2/zh/integration/protocol/agent-protocol.md](../../../../sources/agentscope-ai__agentscope-java/docs/v2/zh/integration/protocol/agent-protocol.md)<br>[docs/v2/zh/integration/memory/bailian.md](../../../../sources/agentscope-ai__agentscope-java/docs/v2/zh/integration/memory/bailian.md) |
| mcp | 22 | [docs/v1/zh/docs/task/mcp.md](../../../../sources/agentscope-ai__agentscope-java/docs/v1/zh/docs/task/mcp.md)<br>[docs/v1/en/docs/task/mcp.md](../../../../sources/agentscope-ai__agentscope-java/docs/v1/en/docs/task/mcp.md)<br>[agentscope-examples/documentation/src/main/java/io/agentscope/examples/documentation2/mcp/McpSseExample.java](../../../../sources/agentscope-ai__agentscope-java/agentscope-examples/documentation/src/main/java/io/agentscope/examples/documentation2/mcp/McpSseExample.java)<br>[agentscope-examples/documentation/src/main/java/io/agentscope/examples/documentation2/mcp/McpStdioExample.java](../../../../sources/agentscope-ai__agentscope-java/agentscope-examples/documentation/src/main/java/io/agentscope/examples/documentation2/mcp/McpStdioExample.java)<br>[agentscope-examples/documentation/src/main/java/io/agentscope/examples/documentation2/mcp/McpStreamableHttpExample.java](../../../../sources/agentscope-ai__agentscope-java/agentscope-examples/documentation/src/main/java/io/agentscope/examples/documentation2/mcp/McpStreamableHttpExample.java)<br>[agentscope-examples/agents/agentscope-paw/src/main/resources/catalog/mcp-servers.json](../../../../sources/agentscope-ai__agentscope-java/agentscope-examples/agents/agentscope-paw/src/main/resources/catalog/mcp-servers.json)<br>[agentscope-examples/agents/agentscope-builder/src/main/resources/catalog/mcp-servers.json](../../../../sources/agentscope-ai__agentscope-java/agentscope-examples/agents/agentscope-builder/src/main/resources/catalog/mcp-servers.json)<br>[agentscope-core/src/test/java/io/agentscope/core/tool/mcp/McpAsyncClientWrapperTest.java](../../../../sources/agentscope-ai__agentscope-java/agentscope-core/src/test/java/io/agentscope/core/tool/mcp/McpAsyncClientWrapperTest.java) |
| retrieval | 283 | [docs/v2/zh/integration/skill/index.md](../../../../sources/agentscope-ai__agentscope-java/docs/v2/zh/integration/skill/index.md)<br>[docs/v2/zh/integration/session/index.md](../../../../sources/agentscope-ai__agentscope-java/docs/v2/zh/integration/session/index.md)<br>[docs/v2/zh/integration/rag/bailian.md](../../../../sources/agentscope-ai__agentscope-java/docs/v2/zh/integration/rag/bailian.md)<br>[docs/v2/zh/integration/rag/dify.md](../../../../sources/agentscope-ai__agentscope-java/docs/v2/zh/integration/rag/dify.md)<br>[docs/v2/zh/integration/rag/haystack.md](../../../../sources/agentscope-ai__agentscope-java/docs/v2/zh/integration/rag/haystack.md)<br>[docs/v2/zh/integration/rag/index.md](../../../../sources/agentscope-ai__agentscope-java/docs/v2/zh/integration/rag/index.md)<br>[docs/v2/zh/integration/rag/overview.md](../../../../sources/agentscope-ai__agentscope-java/docs/v2/zh/integration/rag/overview.md)<br>[docs/v2/zh/integration/rag/ragflow.md](../../../../sources/agentscope-ai__agentscope-java/docs/v2/zh/integration/rag/ragflow.md) |
| spec | 7 | [docs/v2/zh/docs/harness/architecture.md](../../../../sources/agentscope-ai__agentscope-java/docs/v2/zh/docs/harness/architecture.md)<br>[docs/v2/en/docs/harness/architecture.md](../../../../sources/agentscope-ai__agentscope-java/docs/v2/en/docs/harness/architecture.md)<br>[docs/v1/zh/docs/harness/architecture.md](../../../../sources/agentscope-ai__agentscope-java/docs/v1/zh/docs/harness/architecture.md)<br>[docs/v1/en/docs/harness/architecture.md](../../../../sources/agentscope-ai__agentscope-java/docs/v1/en/docs/harness/architecture.md)<br>[agentscope-harness/src/main/java/io/agentscope/harness/agent/filesystem/spec/LocalFilesystemSpec.java](../../../../sources/agentscope-ai__agentscope-java/agentscope-harness/src/main/java/io/agentscope/harness/agent/filesystem/spec/LocalFilesystemSpec.java)<br>[agentscope-harness/src/main/java/io/agentscope/harness/agent/filesystem/spec/RemoteFilesystemSpec.java](../../../../sources/agentscope-ai__agentscope-java/agentscope-harness/src/main/java/io/agentscope/harness/agent/filesystem/spec/RemoteFilesystemSpec.java)<br>[agentscope-harness/src/main/java/io/agentscope/harness/agent/filesystem/spec/SandboxFilesystemSpec.java](../../../../sources/agentscope-ai__agentscope-java/agentscope-harness/src/main/java/io/agentscope/harness/agent/filesystem/spec/SandboxFilesystemSpec.java) |
| eval | 643 | [docs/v1/zh/docs/task/observability.md](../../../../sources/agentscope-ai__agentscope-java/docs/v1/zh/docs/task/observability.md)<br>[docs/v1/en/docs/task/observability.md](../../../../sources/agentscope-ai__agentscope-java/docs/v1/en/docs/task/observability.md)<br>[docs/imgs/studioServer-trace.png](../../../../sources/agentscope-ai__agentscope-java/docs/imgs/studioServer-trace.png)<br>[agentscope-harness/src/test/java/io/agentscope/harness/agent/HarnessAgentDistributedSandboxTest.java](../../../../sources/agentscope-ai__agentscope-java/agentscope-harness/src/test/java/io/agentscope/harness/agent/HarnessAgentDistributedSandboxTest.java)<br>[agentscope-harness/src/test/java/io/agentscope/harness/agent/HarnessAgentDynamicHookBuilderTest.java](../../../../sources/agentscope-ai__agentscope-java/agentscope-harness/src/test/java/io/agentscope/harness/agent/HarnessAgentDynamicHookBuilderTest.java)<br>[agentscope-harness/src/test/java/io/agentscope/harness/agent/HarnessAgentIntegrationExampleTest.java](../../../../sources/agentscope-ai__agentscope-java/agentscope-harness/src/test/java/io/agentscope/harness/agent/HarnessAgentIntegrationExampleTest.java)<br>[agentscope-harness/src/test/java/io/agentscope/harness/agent/HarnessAgentModelStringTest.java](../../../../sources/agentscope-ai__agentscope-java/agentscope-harness/src/test/java/io/agentscope/harness/agent/HarnessAgentModelStringTest.java)<br>[agentscope-harness/src/test/java/io/agentscope/harness/agent/HarnessAgentSubagentStreamEventsTest.java](../../../../sources/agentscope-ai__agentscope-java/agentscope-harness/src/test/java/io/agentscope/harness/agent/HarnessAgentSubagentStreamEventsTest.java) |
| security | 141 | [docs/v2/zh/docs/harness/sandbox.md](../../../../sources/agentscope-ai__agentscope-java/docs/v2/zh/docs/harness/sandbox.md)<br>[docs/v2/zh/docs/building-blocks/permission-system.md](../../../../sources/agentscope-ai__agentscope-java/docs/v2/zh/docs/building-blocks/permission-system.md)<br>[docs/v2/en/docs/harness/sandbox.md](../../../../sources/agentscope-ai__agentscope-java/docs/v2/en/docs/harness/sandbox.md)<br>[docs/v2/en/docs/building-blocks/permission-system.md](../../../../sources/agentscope-ai__agentscope-java/docs/v2/en/docs/building-blocks/permission-system.md)<br>[docs/v1/zh/docs/harness/sandbox/agentrun.md](../../../../sources/agentscope-ai__agentscope-java/docs/v1/zh/docs/harness/sandbox/agentrun.md)<br>[docs/v1/zh/docs/harness/sandbox/index.md](../../../../sources/agentscope-ai__agentscope-java/docs/v1/zh/docs/harness/sandbox/index.md)<br>[docs/v1/en/docs/harness/sandbox/index.md](../../../../sources/agentscope-ai__agentscope-java/docs/v1/en/docs/harness/sandbox/index.md)<br>[agentscope-harness/src/test/java/io/agentscope/harness/agent/sandbox/SandboxIsolationKeyTest.java](../../../../sources/agentscope-ai__agentscope-java/agentscope-harness/src/test/java/io/agentscope/harness/agent/sandbox/SandboxIsolationKeyTest.java) |
| ci | 3 | [.github/workflows/close-stale-prs.yml](../../../../sources/agentscope-ai__agentscope-java/.github/workflows/close-stale-prs.yml)<br>[.github/workflows/maven-ci.yml](../../../../sources/agentscope-ai__agentscope-java/.github/workflows/maven-ci.yml)<br>[.github/workflows/website.yml](../../../../sources/agentscope-ai__agentscope-java/.github/workflows/website.yml) |
| container | 10 | [agentscope-harness/src/main/java/io/agentscope/harness/agent/sandbox/impl/docker/DockerFilesystemSpec.java](../../../../sources/agentscope-ai__agentscope-java/agentscope-harness/src/main/java/io/agentscope/harness/agent/sandbox/impl/docker/DockerFilesystemSpec.java)<br>[agentscope-extensions/agentscope-extensions-sandbox/agentscope-extensions-sandbox-kubernetes/src/test/java/io/agentscope/extensions/sandbox/kubernetes/KubernetesSandboxStateSerdeTest.java](../../../../sources/agentscope-ai__agentscope-java/agentscope-extensions/agentscope-extensions-sandbox/agentscope-extensions-sandbox-kubernetes/src/test/java/io/agentscope/extensions/sandbox/kubernetes/KubernetesSandboxStateSerdeTest.java)<br>[agentscope-extensions/agentscope-extensions-sandbox/agentscope-extensions-sandbox-kubernetes/src/main/java/io/agentscope/extensions/sandbox/kubernetes/Fabric8KubernetesPodRuntime.java](../../../../sources/agentscope-ai__agentscope-java/agentscope-extensions/agentscope-extensions-sandbox/agentscope-extensions-sandbox-kubernetes/src/main/java/io/agentscope/extensions/sandbox/kubernetes/Fabric8KubernetesPodRuntime.java)<br>[agentscope-extensions/agentscope-extensions-sandbox/agentscope-extensions-sandbox-kubernetes/src/main/java/io/agentscope/extensions/sandbox/kubernetes/KubernetesFilesystemSpec.java](../../../../sources/agentscope-ai__agentscope-java/agentscope-extensions/agentscope-extensions-sandbox/agentscope-extensions-sandbox-kubernetes/src/main/java/io/agentscope/extensions/sandbox/kubernetes/KubernetesFilesystemSpec.java)<br>[agentscope-extensions/agentscope-extensions-sandbox/agentscope-extensions-sandbox-kubernetes/src/main/java/io/agentscope/extensions/sandbox/kubernetes/KubernetesHarnessSandboxJacksonModule.java](../../../../sources/agentscope-ai__agentscope-java/agentscope-extensions/agentscope-extensions-sandbox/agentscope-extensions-sandbox-kubernetes/src/main/java/io/agentscope/extensions/sandbox/kubernetes/KubernetesHarnessSandboxJacksonModule.java)<br>[agentscope-extensions/agentscope-extensions-sandbox/agentscope-extensions-sandbox-kubernetes/src/main/java/io/agentscope/extensions/sandbox/kubernetes/KubernetesSandbox.java](../../../../sources/agentscope-ai__agentscope-java/agentscope-extensions/agentscope-extensions-sandbox/agentscope-extensions-sandbox-kubernetes/src/main/java/io/agentscope/extensions/sandbox/kubernetes/KubernetesSandbox.java)<br>[agentscope-extensions/agentscope-extensions-sandbox/agentscope-extensions-sandbox-kubernetes/src/main/java/io/agentscope/extensions/sandbox/kubernetes/KubernetesSandboxClient.java](../../../../sources/agentscope-ai__agentscope-java/agentscope-extensions/agentscope-extensions-sandbox/agentscope-extensions-sandbox-kubernetes/src/main/java/io/agentscope/extensions/sandbox/kubernetes/KubernetesSandboxClient.java)<br>[agentscope-extensions/agentscope-extensions-sandbox/agentscope-extensions-sandbox-kubernetes/src/main/java/io/agentscope/extensions/sandbox/kubernetes/KubernetesSandboxClientOptions.java](../../../../sources/agentscope-ai__agentscope-java/agentscope-extensions/agentscope-extensions-sandbox/agentscope-extensions-sandbox-kubernetes/src/main/java/io/agentscope/extensions/sandbox/kubernetes/KubernetesSandboxClientOptions.java) |
| instruction | 2 | [agentscope-examples/agents/agentscope-paw/src/main/resources/scaffold/default/AGENTS.md.template](../../../../sources/agentscope-ai__agentscope-java/agentscope-examples/agents/agentscope-paw/src/main/resources/scaffold/default/AGENTS.md.template)<br>[agentscope-examples/agents/agentscope-builder/src/main/resources/scaffold/default/AGENTS.md.template](../../../../sources/agentscope-ai__agentscope-java/agentscope-examples/agents/agentscope-builder/src/main/resources/scaffold/default/AGENTS.md.template) |
| docs | 323 | [README_zh.md](../../../../sources/agentscope-ai__agentscope-java/README_zh.md)<br>[README.md](../../../../sources/agentscope-ai__agentscope-java/README.md)<br>[docs/_config.yml](../../../../sources/agentscope-ai__agentscope-java/docs/_config.yml)<br>[docs/_toc.yml](../../../../sources/agentscope-ai__agentscope-java/docs/_toc.yml)<br>[docs/logo.svg](../../../../sources/agentscope-ai__agentscope-java/docs/logo.svg)<br>[docs/pyproject.toml](../../../../sources/agentscope-ai__agentscope-java/docs/pyproject.toml)<br>[docs/README.md](../../../../sources/agentscope-ai__agentscope-java/docs/README.md)<br>[docs/references.bib](../../../../sources/agentscope-ai__agentscope-java/docs/references.bib) |
| config | 7 | [docs/pyproject.toml](../../../../sources/agentscope-ai__agentscope-java/docs/pyproject.toml)<br>[agentscope-examples/agents/agentscope-paw/frontend/package.json](../../../../sources/agentscope-ai__agentscope-java/agentscope-examples/agents/agentscope-paw/frontend/package.json)<br>[agentscope-examples/agents/agentscope-paw/frontend/tsconfig.json](../../../../sources/agentscope-ai__agentscope-java/agentscope-examples/agents/agentscope-paw/frontend/tsconfig.json)<br>[agentscope-examples/agents/agentscope-dataagent/frontend/package.json](../../../../sources/agentscope-ai__agentscope-java/agentscope-examples/agents/agentscope-dataagent/frontend/package.json)<br>[agentscope-examples/agents/agentscope-dataagent/frontend/tsconfig.json](../../../../sources/agentscope-ai__agentscope-java/agentscope-examples/agents/agentscope-dataagent/frontend/tsconfig.json)<br>[agentscope-examples/agents/agentscope-builder/frontend/package.json](../../../../sources/agentscope-ai__agentscope-java/agentscope-examples/agents/agentscope-builder/frontend/package.json)<br>[agentscope-examples/agents/agentscope-builder/frontend/tsconfig.json](../../../../sources/agentscope-ai__agentscope-java/agentscope-examples/agents/agentscope-builder/frontend/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 643 | [docs/v1/zh/docs/task/observability.md](../../../../sources/agentscope-ai__agentscope-java/docs/v1/zh/docs/task/observability.md)<br>[docs/v1/en/docs/task/observability.md](../../../../sources/agentscope-ai__agentscope-java/docs/v1/en/docs/task/observability.md)<br>[docs/imgs/studioServer-trace.png](../../../../sources/agentscope-ai__agentscope-java/docs/imgs/studioServer-trace.png)<br>[agentscope-harness/src/test/java/io/agentscope/harness/agent/HarnessAgentDistributedSandboxTest.java](../../../../sources/agentscope-ai__agentscope-java/agentscope-harness/src/test/java/io/agentscope/harness/agent/HarnessAgentDistributedSandboxTest.java)<br>[agentscope-harness/src/test/java/io/agentscope/harness/agent/HarnessAgentDynamicHookBuilderTest.java](../../../../sources/agentscope-ai__agentscope-java/agentscope-harness/src/test/java/io/agentscope/harness/agent/HarnessAgentDynamicHookBuilderTest.java)<br>[agentscope-harness/src/test/java/io/agentscope/harness/agent/HarnessAgentIntegrationExampleTest.java](../../../../sources/agentscope-ai__agentscope-java/agentscope-harness/src/test/java/io/agentscope/harness/agent/HarnessAgentIntegrationExampleTest.java) |
| CI workflows | 3 | [.github/workflows/close-stale-prs.yml](../../../../sources/agentscope-ai__agentscope-java/.github/workflows/close-stale-prs.yml)<br>[.github/workflows/maven-ci.yml](../../../../sources/agentscope-ai__agentscope-java/.github/workflows/maven-ci.yml)<br>[.github/workflows/website.yml](../../../../sources/agentscope-ai__agentscope-java/.github/workflows/website.yml) |
| Containers / deploy | 10 | [agentscope-harness/src/main/java/io/agentscope/harness/agent/sandbox/impl/docker/DockerFilesystemSpec.java](../../../../sources/agentscope-ai__agentscope-java/agentscope-harness/src/main/java/io/agentscope/harness/agent/sandbox/impl/docker/DockerFilesystemSpec.java)<br>[agentscope-extensions/agentscope-extensions-sandbox/agentscope-extensions-sandbox-kubernetes/src/test/java/io/agentscope/extensions/sandbox/kubernetes/KubernetesSandboxStateSerdeTest.java](../../../../sources/agentscope-ai__agentscope-java/agentscope-extensions/agentscope-extensions-sandbox/agentscope-extensions-sandbox-kubernetes/src/test/java/io/agentscope/extensions/sandbox/kubernetes/KubernetesSandboxStateSerdeTest.java)<br>[agentscope-extensions/agentscope-extensions-sandbox/agentscope-extensions-sandbox-kubernetes/src/main/java/io/agentscope/extensions/sandbox/kubernetes/Fabric8KubernetesPodRuntime.java](../../../../sources/agentscope-ai__agentscope-java/agentscope-extensions/agentscope-extensions-sandbox/agentscope-extensions-sandbox-kubernetes/src/main/java/io/agentscope/extensions/sandbox/kubernetes/Fabric8KubernetesPodRuntime.java)<br>[agentscope-extensions/agentscope-extensions-sandbox/agentscope-extensions-sandbox-kubernetes/src/main/java/io/agentscope/extensions/sandbox/kubernetes/KubernetesFilesystemSpec.java](../../../../sources/agentscope-ai__agentscope-java/agentscope-extensions/agentscope-extensions-sandbox/agentscope-extensions-sandbox-kubernetes/src/main/java/io/agentscope/extensions/sandbox/kubernetes/KubernetesFilesystemSpec.java)<br>[agentscope-extensions/agentscope-extensions-sandbox/agentscope-extensions-sandbox-kubernetes/src/main/java/io/agentscope/extensions/sandbox/kubernetes/KubernetesHarnessSandboxJacksonModule.java](../../../../sources/agentscope-ai__agentscope-java/agentscope-extensions/agentscope-extensions-sandbox/agentscope-extensions-sandbox-kubernetes/src/main/java/io/agentscope/extensions/sandbox/kubernetes/KubernetesHarnessSandboxJacksonModule.java)<br>[agentscope-extensions/agentscope-extensions-sandbox/agentscope-extensions-sandbox-kubernetes/src/main/java/io/agentscope/extensions/sandbox/kubernetes/KubernetesSandbox.java](../../../../sources/agentscope-ai__agentscope-java/agentscope-extensions/agentscope-extensions-sandbox/agentscope-extensions-sandbox-kubernetes/src/main/java/io/agentscope/extensions/sandbox/kubernetes/KubernetesSandbox.java) |
| Security / policy | 141 | [docs/v2/zh/docs/harness/sandbox.md](../../../../sources/agentscope-ai__agentscope-java/docs/v2/zh/docs/harness/sandbox.md)<br>[docs/v2/zh/docs/building-blocks/permission-system.md](../../../../sources/agentscope-ai__agentscope-java/docs/v2/zh/docs/building-blocks/permission-system.md)<br>[docs/v2/en/docs/harness/sandbox.md](../../../../sources/agentscope-ai__agentscope-java/docs/v2/en/docs/harness/sandbox.md)<br>[docs/v2/en/docs/building-blocks/permission-system.md](../../../../sources/agentscope-ai__agentscope-java/docs/v2/en/docs/building-blocks/permission-system.md)<br>[docs/v1/zh/docs/harness/sandbox/agentrun.md](../../../../sources/agentscope-ai__agentscope-java/docs/v1/zh/docs/harness/sandbox/agentrun.md)<br>[docs/v1/zh/docs/harness/sandbox/index.md](../../../../sources/agentscope-ai__agentscope-java/docs/v1/zh/docs/harness/sandbox/index.md) |
| Agent instructions | 2 | [agentscope-examples/agents/agentscope-paw/src/main/resources/scaffold/default/AGENTS.md.template](../../../../sources/agentscope-ai__agentscope-java/agentscope-examples/agents/agentscope-paw/src/main/resources/scaffold/default/AGENTS.md.template)<br>[agentscope-examples/agents/agentscope-builder/src/main/resources/scaffold/default/AGENTS.md.template](../../../../sources/agentscope-ai__agentscope-java/agentscope-examples/agents/agentscope-builder/src/main/resources/scaffold/default/AGENTS.md.template) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `docs/v1/zh/docs/task/mcp.md`, `docs/v1/en/docs/task/mcp.md`, `agentscope-examples/documentation/src/main/java/io/agentscope/examples/documentation2/mcp/McpSseExample.java`.
2. Trace execution through entrypoints: `agentscope-examples/agents/agentscope-paw/frontend/src/main.tsx`, `agentscope-examples/agents/agentscope-dataagent/frontend/src/main.tsx`, `agentscope-examples/agents/agentscope-builder/frontend/src/main.tsx`.
3. Map agent/tool runtime through: `SKILL.md`, `docs/v2/zh/integration/skill/git-repository.md`, `docs/v2/zh/integration/skill/index.md`.
4. Inspect retrieval/memory/indexing through: `docs/v2/zh/integration/skill/index.md`, `docs/v2/zh/integration/session/index.md`, `docs/v2/zh/integration/rag/bailian.md`.
5. Verify behavior through test/eval files: `docs/v1/zh/docs/task/observability.md`, `docs/v1/en/docs/task/observability.md`, `docs/imgs/studioServer-trace.png`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 AgentScope Java Agent Oriented Programming for Building LLM Applications. 핵심 구조 신호는 Java, pom.xml, README.md, ci, docs, spec-artifacts이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
