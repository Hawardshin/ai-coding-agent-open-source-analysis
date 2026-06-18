# Azure-Samples/azure-ai-travel-agents Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

A robust enterprise application sample (deployed on ACA) that leverages MCP and multiple AI agents orchestrated by Langchain.js, Llamaindex.TS and Microsoft Agent Framework.

## 요약

- 조사 단위: `sources/Azure-Samples__azure-ai-travel-agents` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 723 files, 258 directories, depth score 131, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/mcp-servers/README.md, packages/mcp-servers/itinerary-planning/.dockerignore, packages/mcp-servers/itinerary-planning/Dockerfile이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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


## Repository Context

| Field | Value |
| --- | --- |
| Repository | Azure-Samples/azure-ai-travel-agents |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 443 |
| Forks | 167 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/Azure-Samples__azure-ai-travel-agents](../../../../sources/Azure-Samples__azure-ai-travel-agents) |
| Existing report | [reports/global-trending/repositories/Azure-Samples__azure-ai-travel-agents.md](../../../global-trending/repositories/Azure-Samples__azure-ai-travel-agents.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 723 / 258 |
| Max observed depth | 13 |
| Top directories | .devcontainer, .github, docs, infra, packages |
| Top extensions | .ts: 515, .md: 39, .py: 35, .json: 24, (none): 22, .yml: 18, .java: 11, .png: 10, .cs: 5, .ps1: 5, .sample: 5, .sh: 5 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/ui-angular | packages workspace | 105 |
| packages/mcp-servers | packages workspace | 54 |
| docs | documentation surface | 38 |
| packages/api-maf-python | packages workspace | 25 |
| packages/api-langchain-js | packages workspace | 7 |
| packages/api-llamaindex-ts | packages workspace | 7 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| infra | top-level component | 1 |
| packages | source boundary | 1 |


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
| mcp | [packages/mcp-servers/README.md](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/mcp-servers/README.md) | mcp signal |
| mcp | [packages/mcp-servers/itinerary-planning/.dockerignore](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/mcp-servers/itinerary-planning/.dockerignore) | mcp signal |
| mcp | [packages/mcp-servers/itinerary-planning/Dockerfile](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/mcp-servers/itinerary-planning/Dockerfile) | mcp signal |
| mcp | [packages/mcp-servers/itinerary-planning/pyproject.toml](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/mcp-servers/itinerary-planning/pyproject.toml) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/Azure-Samples__azure-ai-travel-agents/AGENTS.md) | agentRuntime signal |
| agentRuntime | [packages/mcp-servers/echo-ping/src/tools.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/mcp-servers/echo-ping/src/tools.ts) | agentRuntime signal |
| agentRuntime | [packages/mcp-servers/customer-query/AITravelAgent.CustomerQueryServer/Tools/CustomerQueryTool.cs](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/mcp-servers/customer-query/AITravelAgent.CustomerQueryServer/Tools/CustomerQueryTool.cs) | agentRuntime signal |
| agentRuntime | [packages/mcp-servers/customer-query/AITravelAgent.CustomerQueryServer/Tools/EchoTool.cs](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/mcp-servers/customer-query/AITravelAgent.CustomerQueryServer/Tools/EchoTool.cs) | agentRuntime signal |
| entrypoints | [packages/ui-angular/src/index.html](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/src/index.html) | entrypoints signal |
| entrypoints | [packages/ui-angular/src/main.server.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/src/main.server.ts) | entrypoints signal |
| entrypoints | [packages/ui-angular/src/main.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/src/main.ts) | entrypoints signal |
| entrypoints | [packages/ui-angular/src/server.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/src/server.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 68 | [packages/ui-angular/src/index.html](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/src/index.html)<br>[packages/ui-angular/src/main.server.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/src/main.server.ts)<br>[packages/ui-angular/src/main.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/src/main.ts)<br>[packages/ui-angular/src/server.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/src/server.ts)<br>[packages/ui-angular/libs/ui/ui-utils-helm/src/index.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/libs/ui/ui-utils-helm/src/index.ts)<br>[packages/ui-angular/libs/ui/ui-typography-helm/src/index.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/libs/ui/ui-typography-helm/src/index.ts)<br>[packages/ui-angular/libs/ui/ui-tooltip-helm/src/index.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/libs/ui/ui-tooltip-helm/src/index.ts)<br>[packages/ui-angular/libs/ui/ui-toggle-helm/src/index.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/libs/ui/ui-toggle-helm/src/index.ts) |
| agentRuntime | 31 | [AGENTS.md](../../../../sources/Azure-Samples__azure-ai-travel-agents/AGENTS.md)<br>[packages/mcp-servers/echo-ping/src/tools.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/mcp-servers/echo-ping/src/tools.ts)<br>[packages/mcp-servers/customer-query/AITravelAgent.CustomerQueryServer/Tools/CustomerQueryTool.cs](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/mcp-servers/customer-query/AITravelAgent.CustomerQueryServer/Tools/CustomerQueryTool.cs)<br>[packages/mcp-servers/customer-query/AITravelAgent.CustomerQueryServer/Tools/EchoTool.cs](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/mcp-servers/customer-query/AITravelAgent.CustomerQueryServer/Tools/EchoTool.cs)<br>[packages/api-maf-python/src/orchestrator/workflow.py](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/api-maf-python/src/orchestrator/workflow.py)<br>[packages/api-maf-python/src/orchestrator/tools/__init__.py](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/api-maf-python/src/orchestrator/tools/__init__.py)<br>[packages/api-maf-python/src/orchestrator/tools/examples.py](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/api-maf-python/src/orchestrator/tools/examples.py)<br>[packages/api-maf-python/src/orchestrator/tools/mcp_tool_wrapper.py](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/api-maf-python/src/orchestrator/tools/mcp_tool_wrapper.py) |
| mcp | 67 | [packages/mcp-servers/README.md](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/mcp-servers/README.md)<br>[packages/mcp-servers/itinerary-planning/.dockerignore](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/mcp-servers/itinerary-planning/.dockerignore)<br>[packages/mcp-servers/itinerary-planning/Dockerfile](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/mcp-servers/itinerary-planning/Dockerfile)<br>[packages/mcp-servers/itinerary-planning/pyproject.toml](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/mcp-servers/itinerary-planning/pyproject.toml)<br>[packages/mcp-servers/itinerary-planning/README.md](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/mcp-servers/itinerary-planning/README.md)<br>[packages/mcp-servers/itinerary-planning/uv.lock](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/mcp-servers/itinerary-planning/uv.lock)<br>[packages/mcp-servers/itinerary-planning/src/__init__.py](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/mcp-servers/itinerary-planning/src/__init__.py)<br>[packages/mcp-servers/itinerary-planning/src/app.py](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/mcp-servers/itinerary-planning/src/app.py) |
| retrieval | 74 | [packages/ui-angular/src/index.html](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/src/index.html)<br>[packages/ui-angular/libs/ui/ui-utils-helm/src/index.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/libs/ui/ui-utils-helm/src/index.ts)<br>[packages/ui-angular/libs/ui/ui-typography-helm/src/index.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/libs/ui/ui-typography-helm/src/index.ts)<br>[packages/ui-angular/libs/ui/ui-tooltip-helm/src/index.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/libs/ui/ui-tooltip-helm/src/index.ts)<br>[packages/ui-angular/libs/ui/ui-toggle-helm/src/index.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/libs/ui/ui-toggle-helm/src/index.ts)<br>[packages/ui-angular/libs/ui/ui-toggle-group-helm/src/index.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/libs/ui/ui-toggle-group-helm/src/index.ts)<br>[packages/ui-angular/libs/ui/ui-textarea-helm/src/index.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/libs/ui/ui-textarea-helm/src/index.ts)<br>[packages/ui-angular/libs/ui/ui-tabs-helm/src/index.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/libs/ui/ui-tabs-helm/src/index.ts) |
| spec | 15 | [packages/ui-angular/tsconfig.spec.json](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/tsconfig.spec.json)<br>[packages/ui-angular/src/app/app.component.spec.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/src/app/app.component.spec.ts)<br>[packages/ui-angular/src/app/chat-conversation/chat-conversation.component.spec.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/src/app/chat-conversation/chat-conversation.component.spec.ts)<br>[packages/ui-angular/libs/ui/ui-switch-helm/src/lib/hlm-switch-ng-model.component.ignore.spec.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/libs/ui/ui-switch-helm/src/lib/hlm-switch-ng-model.component.ignore.spec.ts)<br>[packages/ui-angular/libs/ui/ui-icon-helm/src/lib/hlm-icon.directive.spec.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/libs/ui/ui-icon-helm/src/lib/hlm-icon.directive.spec.ts)<br>[packages/ui-angular/libs/ui/ui-formfield-helm/src/lib/form-field.spec.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/libs/ui/ui-formfield-helm/src/lib/form-field.spec.ts)<br>[packages/ui-angular/libs/ui/ui-avatar-helm/src/lib/hlm-avatar.component.spec.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/libs/ui/ui-avatar-helm/src/lib/hlm-avatar.component.spec.ts)<br>[packages/ui-angular/libs/ui/ui-avatar-helm/src/lib/image/hlm-avatar-image.directive.spec.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/libs/ui/ui-avatar-helm/src/lib/image/hlm-avatar-image.directive.spec.ts) |
| eval | 18 | [packages/ui-angular/tsconfig.spec.json](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/tsconfig.spec.json)<br>[packages/ui-angular/src/app/app.component.spec.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/src/app/app.component.spec.ts)<br>[packages/ui-angular/src/app/chat-conversation/chat-conversation.component.spec.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/src/app/chat-conversation/chat-conversation.component.spec.ts)<br>[packages/ui-angular/libs/ui/ui-switch-helm/src/lib/hlm-switch-ng-model.component.ignore.spec.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/libs/ui/ui-switch-helm/src/lib/hlm-switch-ng-model.component.ignore.spec.ts)<br>[packages/ui-angular/libs/ui/ui-icon-helm/src/lib/hlm-icon.directive.spec.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/libs/ui/ui-icon-helm/src/lib/hlm-icon.directive.spec.ts)<br>[packages/ui-angular/libs/ui/ui-formfield-helm/src/lib/form-field.spec.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/libs/ui/ui-formfield-helm/src/lib/form-field.spec.ts)<br>[packages/ui-angular/libs/ui/ui-avatar-helm/src/lib/hlm-avatar.component.spec.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/libs/ui/ui-avatar-helm/src/lib/hlm-avatar.component.spec.ts)<br>[packages/ui-angular/libs/ui/ui-avatar-helm/src/lib/image/hlm-avatar-image.directive.spec.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/libs/ui/ui-avatar-helm/src/lib/image/hlm-avatar-image.directive.spec.ts) |
| security | 1 | [SECURITY.md](../../../../sources/Azure-Samples__azure-ai-travel-agents/SECURITY.md) |
| ci | 11 | [.github/workflows/ai-opsec-agent.yml](../../../../sources/Azure-Samples__azure-ai-travel-agents/.github/workflows/ai-opsec-agent.yml)<br>[.github/workflows/azure-dev.yml](../../../../sources/Azure-Samples__azure-ai-travel-agents/.github/workflows/azure-dev.yml)<br>[.github/workflows/build.yaml](../../../../sources/Azure-Samples__azure-ai-travel-agents/.github/workflows/build.yaml)<br>[.github/workflows/codeql-csharp.yml](../../../../sources/Azure-Samples__azure-ai-travel-agents/.github/workflows/codeql-csharp.yml)<br>[.github/workflows/codeql-java.yml](../../../../sources/Azure-Samples__azure-ai-travel-agents/.github/workflows/codeql-java.yml)<br>[.github/workflows/codeql-python.yml](../../../../sources/Azure-Samples__azure-ai-travel-agents/.github/workflows/codeql-python.yml)<br>[.github/workflows/codeql-typescript.yml](../../../../sources/Azure-Samples__azure-ai-travel-agents/.github/workflows/codeql-typescript.yml)<br>[.github/workflows/codeql.yml](../../../../sources/Azure-Samples__azure-ai-travel-agents/.github/workflows/codeql.yml) |
| container | 11 | [docker-compose.yml](../../../../sources/Azure-Samples__azure-ai-travel-agents/docker-compose.yml)<br>[packages/ui-angular/Dockerfile](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/Dockerfile)<br>[packages/ui-angular/Dockerfile.production](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/Dockerfile.production)<br>[packages/mcp-servers/itinerary-planning/Dockerfile](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/mcp-servers/itinerary-planning/Dockerfile)<br>[packages/mcp-servers/echo-ping/Dockerfile](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/mcp-servers/echo-ping/Dockerfile)<br>[packages/mcp-servers/destination-recommendation/Dockerfile](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/mcp-servers/destination-recommendation/Dockerfile)<br>[packages/mcp-servers/customer-query/Dockerfile](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/mcp-servers/customer-query/Dockerfile)<br>[packages/api-maf-python/Dockerfile](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/api-maf-python/Dockerfile) |
| instruction | 2 | [AGENTS.md](../../../../sources/Azure-Samples__azure-ai-travel-agents/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/Azure-Samples__azure-ai-travel-agents/.github/copilot-instructions.md) |
| docs | 46 | [README.md](../../../../sources/Azure-Samples__azure-ai-travel-agents/README.md)<br>[packages/ui-angular/README.md](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/README.md)<br>[packages/mcp-servers/README.md](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/mcp-servers/README.md)<br>[packages/mcp-servers/itinerary-planning/README.md](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/mcp-servers/itinerary-planning/README.md)<br>[packages/mcp-servers/destination-recommendation/README.md](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/mcp-servers/destination-recommendation/README.md)<br>[packages/api-maf-python/README.md](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/api-maf-python/README.md)<br>[packages/api-maf-python/src/orchestrator/tools/README.md](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/api-maf-python/src/orchestrator/tools/README.md)<br>[packages/api-llamaindex-ts/README.md](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/api-llamaindex-ts/README.md) |
| config | 12 | [packages/ui-angular/package.json](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/package.json)<br>[packages/ui-angular/tsconfig.json](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/tsconfig.json)<br>[packages/mcp-servers/itinerary-planning/pyproject.toml](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/mcp-servers/itinerary-planning/pyproject.toml)<br>[packages/mcp-servers/itinerary-planning/uv.lock](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/mcp-servers/itinerary-planning/uv.lock)<br>[packages/mcp-servers/echo-ping/package.json](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/mcp-servers/echo-ping/package.json)<br>[packages/mcp-servers/echo-ping/tsconfig.json](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/mcp-servers/echo-ping/tsconfig.json)<br>[packages/api-maf-python/pyproject.toml](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/api-maf-python/pyproject.toml)<br>[packages/api-llamaindex-ts/package.json](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/api-llamaindex-ts/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 18 | [packages/ui-angular/tsconfig.spec.json](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/tsconfig.spec.json)<br>[packages/ui-angular/src/app/app.component.spec.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/src/app/app.component.spec.ts)<br>[packages/ui-angular/src/app/chat-conversation/chat-conversation.component.spec.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/src/app/chat-conversation/chat-conversation.component.spec.ts)<br>[packages/ui-angular/libs/ui/ui-switch-helm/src/lib/hlm-switch-ng-model.component.ignore.spec.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/libs/ui/ui-switch-helm/src/lib/hlm-switch-ng-model.component.ignore.spec.ts)<br>[packages/ui-angular/libs/ui/ui-icon-helm/src/lib/hlm-icon.directive.spec.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/libs/ui/ui-icon-helm/src/lib/hlm-icon.directive.spec.ts)<br>[packages/ui-angular/libs/ui/ui-formfield-helm/src/lib/form-field.spec.ts](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/libs/ui/ui-formfield-helm/src/lib/form-field.spec.ts) |
| CI workflows | 11 | [.github/workflows/ai-opsec-agent.yml](../../../../sources/Azure-Samples__azure-ai-travel-agents/.github/workflows/ai-opsec-agent.yml)<br>[.github/workflows/azure-dev.yml](../../../../sources/Azure-Samples__azure-ai-travel-agents/.github/workflows/azure-dev.yml)<br>[.github/workflows/build.yaml](../../../../sources/Azure-Samples__azure-ai-travel-agents/.github/workflows/build.yaml)<br>[.github/workflows/codeql-csharp.yml](../../../../sources/Azure-Samples__azure-ai-travel-agents/.github/workflows/codeql-csharp.yml)<br>[.github/workflows/codeql-java.yml](../../../../sources/Azure-Samples__azure-ai-travel-agents/.github/workflows/codeql-java.yml)<br>[.github/workflows/codeql-python.yml](../../../../sources/Azure-Samples__azure-ai-travel-agents/.github/workflows/codeql-python.yml) |
| Containers / deploy | 11 | [docker-compose.yml](../../../../sources/Azure-Samples__azure-ai-travel-agents/docker-compose.yml)<br>[packages/ui-angular/Dockerfile](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/Dockerfile)<br>[packages/ui-angular/Dockerfile.production](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/ui-angular/Dockerfile.production)<br>[packages/mcp-servers/itinerary-planning/Dockerfile](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/mcp-servers/itinerary-planning/Dockerfile)<br>[packages/mcp-servers/echo-ping/Dockerfile](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/mcp-servers/echo-ping/Dockerfile)<br>[packages/mcp-servers/destination-recommendation/Dockerfile](../../../../sources/Azure-Samples__azure-ai-travel-agents/packages/mcp-servers/destination-recommendation/Dockerfile) |
| Security / policy | 1 | [SECURITY.md](../../../../sources/Azure-Samples__azure-ai-travel-agents/SECURITY.md) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/Azure-Samples__azure-ai-travel-agents/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/Azure-Samples__azure-ai-travel-agents/.github/copilot-instructions.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `packages/mcp-servers/README.md`, `packages/mcp-servers/itinerary-planning/.dockerignore`, `packages/mcp-servers/itinerary-planning/Dockerfile`.
2. Trace execution through entrypoints: `packages/ui-angular/src/index.html`, `packages/ui-angular/src/main.server.ts`, `packages/ui-angular/src/main.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `packages/mcp-servers/echo-ping/src/tools.ts`, `packages/mcp-servers/customer-query/AITravelAgent.CustomerQueryServer/Tools/CustomerQueryTool.cs`.
4. Inspect retrieval/memory/indexing through: `packages/ui-angular/src/index.html`, `packages/ui-angular/libs/ui/ui-utils-helm/src/index.ts`, `packages/ui-angular/libs/ui/ui-typography-helm/src/index.ts`.
5. Verify behavior through test/eval files: `packages/ui-angular/tsconfig.spec.json`, `packages/ui-angular/src/app/app.component.spec.ts`, `packages/ui-angular/src/app/chat-conversation/chat-conversation.component.spec.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 A robust enterprise application sample deployed on ACA that leverages MCP and multiple AI agents orchestrated by Langcha. 핵심 구조 신호는 TypeScript, docker-compose.yml, README.md, AGENTS.md, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
