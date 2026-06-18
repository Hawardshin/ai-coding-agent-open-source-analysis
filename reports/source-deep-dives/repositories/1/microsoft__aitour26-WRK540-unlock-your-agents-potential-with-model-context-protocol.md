# microsoft/aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

microsoft/aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol

## 요약

- 조사 단위: `sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 240 files, 54 directories, depth score 113, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=src/shared/instructions/mcp_server_tools_with_code_interpreter.txt, src/shared/instructions/mcp_server_tools_with_semantic_search.txt, src/python/mcp_server/sales_analysis/config.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | microsoft/aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 424 |
| Forks | 107 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol) |
| 기존 보고서 | [reports/global-trending/repositories/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol.md](../../../global-trending/repositories/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 240 / 54 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .aspire, .devcontainer, .github, data, docs, img, infra, media, scripts, session-delivery-resources, src |
| 상위 확장자 | .md: 69, .png: 40, .cs: 31, .py: 26, .json: 13, .ps1: 10, .yml: 8, .bicep: 6, .sh: 6, .txt: 6, (none): 6, .csproj: 4 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 67 |
| src | source boundary | 15 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| data | top-level component | 1 |
| img | top-level component | 1 |
| infra | top-level component | 1 |
| media | top-level component | 1 |
| scripts | top-level component | 1 |
| session-delivery-resources | top-level component | 1 |


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
| mcp | [src/shared/instructions/mcp_server_tools_with_code_interpreter.txt](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/shared/instructions/mcp_server_tools_with_code_interpreter.txt) | mcp signal |
| mcp | [src/shared/instructions/mcp_server_tools_with_semantic_search.txt](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/shared/instructions/mcp_server_tools_with_semantic_search.txt) | mcp signal |
| mcp | [src/python/mcp_server/sales_analysis/config.py](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/python/mcp_server/sales_analysis/config.py) | mcp signal |
| mcp | [src/python/mcp_server/sales_analysis/README.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/python/mcp_server/sales_analysis/README.md) | mcp signal |
| agentRuntime | [src/csharp/McpAgentWorkshop.McpServer/Tools/DatabaseSchemaTools.cs](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/csharp/McpAgentWorkshop.McpServer/Tools/DatabaseSchemaTools.cs) | agentRuntime signal |
| agentRuntime | [src/csharp/McpAgentWorkshop.McpServer/Tools/EchoTools.cs](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/csharp/McpAgentWorkshop.McpServer/Tools/EchoTools.cs) | agentRuntime signal |
| agentRuntime | [src/csharp/McpAgentWorkshop.McpServer/Tools/SalesTools.cs](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/csharp/McpAgentWorkshop.McpServer/Tools/SalesTools.cs) | agentRuntime signal |
| agentRuntime | [src/csharp/McpAgentWorkshop.McpServer/Tools/SemanticSearchTools.cs](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/csharp/McpAgentWorkshop.McpServer/Tools/SemanticSearchTools.cs) | agentRuntime signal |
| entrypoints | [infra/skillable/main.json](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/infra/skillable/main.json) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/pyproject.toml) | config signal |
| config | [requirements.lock.txt](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/requirements.lock.txt) | config signal |
| config | [requirements.windows.lock.txt](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/requirements.windows.lock.txt) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [infra/skillable/main.json](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/infra/skillable/main.json) |
| agentRuntime | 8 | [src/csharp/McpAgentWorkshop.McpServer/Tools/DatabaseSchemaTools.cs](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/csharp/McpAgentWorkshop.McpServer/Tools/DatabaseSchemaTools.cs)<br>[src/csharp/McpAgentWorkshop.McpServer/Tools/EchoTools.cs](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/csharp/McpAgentWorkshop.McpServer/Tools/EchoTools.cs)<br>[src/csharp/McpAgentWorkshop.McpServer/Tools/SalesTools.cs](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/csharp/McpAgentWorkshop.McpServer/Tools/SalesTools.cs)<br>[src/csharp/McpAgentWorkshop.McpServer/Tools/SemanticSearchTools.cs](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/csharp/McpAgentWorkshop.McpServer/Tools/SemanticSearchTools.cs)<br>[src/csharp/McpAgentWorkshop.McpServer/Tools/TimeTools.cs](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/csharp/McpAgentWorkshop.McpServer/Tools/TimeTools.cs)<br>[docs/docs/media/agent_web_chat.png](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/media/agent_web_chat.png)<br>[docs/docs/es/agent-service-overview.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/es/agent-service-overview.md)<br>[docs/docs/en/agent-service-overview.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/en/agent-service-overview.md) |
| mcp | 14 | [src/shared/instructions/mcp_server_tools_with_code_interpreter.txt](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/shared/instructions/mcp_server_tools_with_code_interpreter.txt)<br>[src/shared/instructions/mcp_server_tools_with_semantic_search.txt](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/shared/instructions/mcp_server_tools_with_semantic_search.txt)<br>[src/python/mcp_server/sales_analysis/config.py](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/python/mcp_server/sales_analysis/config.py)<br>[src/python/mcp_server/sales_analysis/README.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/python/mcp_server/sales_analysis/README.md)<br>[src/python/mcp_server/sales_analysis/sales_analysis_postgres.py](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/python/mcp_server/sales_analysis/sales_analysis_postgres.py)<br>[src/python/mcp_server/sales_analysis/sales_analysis_text_embeddings.py](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/python/mcp_server/sales_analysis/sales_analysis_text_embeddings.py)<br>[src/python/mcp_server/sales_analysis/sales_analysis.py](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/python/mcp_server/sales_analysis/sales_analysis.py)<br>[docs/docs/resources/MCAPS_WRK540_Unlock_Your_Agents_Potential_with_MCP.pptx](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/resources/MCAPS_WRK540_Unlock_Your_Agents_Potential_with_MCP.pptx) |
| retrieval | 5 | [src/shared/webapp/static/index.html](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/shared/webapp/static/index.html)<br>[docs/docs/es/index.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/es/index.md)<br>[docs/docs/en/index.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/en/index.md)<br>[data/raft-generator/generate_knowledge_base.py](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/data/raft-generator/generate_knowledge_base.py)<br>[data/raft-generator/README_RAG_RAFT.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/data/raft-generator/README_RAG_RAFT.md) |
| spec | 9 | [requirements.in](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/requirements.in)<br>[requirements.lock.txt](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/requirements.lock.txt)<br>[requirements.windows.lock.txt](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/requirements.windows.lock.txt)<br>[docs/requirements.txt](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/requirements.txt)<br>[docs/docs/media/architecture.png](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/media/architecture.png)<br>[docs/docs/media/devtunnel-architecture.png](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/media/devtunnel-architecture.png)<br>[docs/docs/es/architecture.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/es/architecture.md)<br>[docs/docs/en/architecture.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/en/architecture.md) |
| eval | 12 | [docs/docs/media/ai-foundry-trace-agent-init.png](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/media/ai-foundry-trace-agent-init.png)<br>[docs/docs/media/ai-foundry-tracing.png](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/media/ai-foundry-tracing.png)<br>[docs/docs/media/lab-7-trace-overview.png](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/media/lab-7-trace-overview.png)<br>[docs/docs/media/lab-7-trace-timeline.png](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/media/lab-7-trace-timeline.png)<br>[docs/docs/media/monitor_resource_usage.png](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/media/monitor_resource_usage.png)<br>[docs/docs/media/monitor_usage.png](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/media/monitor_usage.png)<br>[docs/docs/es/lab-6-tracing.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/es/lab-6-tracing.md)<br>[docs/docs/es/lab-7-local-tracing-with-aspire.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/es/lab-7-local-tracing-with-aspire.md) |
| security | 2 | [SECURITY.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/SECURITY.md)<br>[data/database/row_level_security_guide.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/data/database/row_level_security_guide.md) |
| ci | 4 | [.github/workflows/add-to-project.yml](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/.github/workflows/add-to-project.yml)<br>[.github/workflows/docs.yml](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/.github/workflows/docs.yml)<br>[.github/workflows/dotnet-ci.yml](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/.github/workflows/dotnet-ci.yml)<br>[.github/workflows/python-ci.yml](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/.github/workflows/python-ci.yml) |
| container | 3 | [docker-compose.yml](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docker-compose.yml)<br>[.devcontainer/docker-compose.devcontainer.yml](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/.devcontainer/docker-compose.devcontainer.yml)<br>[.devcontainer/Dockerfile](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/.devcontainer/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 101 | [README.MD](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/README.MD)<br>[src/python/mcp_server/sales_analysis/README.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/python/mcp_server/sales_analysis/README.md)<br>[session-delivery-resources/readme.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/session-delivery-resources/readme.md)<br>[infra/skillable/README.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/infra/skillable/README.md)<br>[docs/mkdocs.yml](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/mkdocs.yml)<br>[docs/README.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/README.md)<br>[docs/requirements.txt](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/requirements.txt)<br>[docs/docs/resources/MCAPS_WRK540_Unlock_Your_Agents_Potential_with_MCP.pptx](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/resources/MCAPS_WRK540_Unlock_Your_Agents_Potential_with_MCP.pptx) |
| config | 5 | [pyproject.toml](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/pyproject.toml)<br>[requirements.lock.txt](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/requirements.lock.txt)<br>[requirements.windows.lock.txt](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/requirements.windows.lock.txt)<br>[docs/requirements.txt](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/requirements.txt)<br>[data/requirements.txt](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/data/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 12 | [docs/docs/media/ai-foundry-trace-agent-init.png](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/media/ai-foundry-trace-agent-init.png)<br>[docs/docs/media/ai-foundry-tracing.png](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/media/ai-foundry-tracing.png)<br>[docs/docs/media/lab-7-trace-overview.png](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/media/lab-7-trace-overview.png)<br>[docs/docs/media/lab-7-trace-timeline.png](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/media/lab-7-trace-timeline.png)<br>[docs/docs/media/monitor_resource_usage.png](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/media/monitor_resource_usage.png)<br>[docs/docs/media/monitor_usage.png](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/media/monitor_usage.png) |
| CI workflow | 4 | [.github/workflows/add-to-project.yml](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/.github/workflows/add-to-project.yml)<br>[.github/workflows/docs.yml](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/.github/workflows/docs.yml)<br>[.github/workflows/dotnet-ci.yml](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/.github/workflows/dotnet-ci.yml)<br>[.github/workflows/python-ci.yml](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/.github/workflows/python-ci.yml) |
| 컨테이너/배포 | 3 | [docker-compose.yml](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docker-compose.yml)<br>[.devcontainer/docker-compose.devcontainer.yml](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/.devcontainer/docker-compose.devcontainer.yml)<br>[.devcontainer/Dockerfile](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/.devcontainer/Dockerfile) |
| 보안/정책 | 2 | [SECURITY.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/SECURITY.md)<br>[data/database/row_level_security_guide.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/data/database/row_level_security_guide.md) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `src/shared/instructions/mcp_server_tools_with_code_interpreter.txt`, `src/shared/instructions/mcp_server_tools_with_semantic_search.txt`, `src/python/mcp_server/sales_analysis/config.py`.
2. entrypoint를 따라 실행 흐름 확인: `infra/skillable/main.json`.
3. agent/tool runtime 매핑: `src/csharp/McpAgentWorkshop.McpServer/Tools/DatabaseSchemaTools.cs`, `src/csharp/McpAgentWorkshop.McpServer/Tools/EchoTools.cs`, `src/csharp/McpAgentWorkshop.McpServer/Tools/SalesTools.cs`.
4. retrieval/memory/indexing 확인: `src/shared/webapp/static/index.html`, `docs/docs/es/index.md`, `docs/docs/en/index.md`.
5. test/eval 파일로 동작 검증: `docs/docs/media/ai-foundry-trace-agent-init.png`, `docs/docs/media/ai-foundry-tracing.png`, `docs/docs/media/lab-7-trace-overview.png`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 Python, pyproject.toml, docker-compose.yml, README.md, LICENSE, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
