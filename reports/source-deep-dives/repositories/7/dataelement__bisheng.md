# dataelement/bisheng Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

BISHENG is an open LLM devops platform for next generation Enterprise AI applications. Powerful and comprehensive features include: GenAI workflow, RAG, Agent, Unified model management, Evaluation, SFT, Dataset Management, Enterprise-level System Management, Observability and more.

## 요약

- 조사 단위: `sources/dataelement__bisheng` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 3,048 files, 703 directories, depth score 121, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/frontend/client/src/types/chat/mcp.ts, src/backend/bisheng/mcp_manage/__init__.py, src/backend/bisheng/mcp_manage/constant.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | dataelement/bisheng |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 11455 |
| Forks | 1869 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/dataelement__bisheng](../../../../sources/dataelement__bisheng) |
| Existing report | [reports/global-trending/repositories/dataelement__bisheng.md](../../../global-trending/repositories/dataelement__bisheng.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 3048 / 703 |
| Max observed depth | 10 |
| Top directories | .github, docker, src |
| Top extensions | .tsx: 1314, .py: 855, .ts: 379, .svg: 149, .png: 71, .json: 47, .pyc: 28, .md: 27, .jsx: 26, .yaml: 24, .js: 19, .css: 12 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 201 |
| .github | ci surface | 1 |
| docker | documentation surface | 1 |


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
| mcp | [src/frontend/client/src/types/chat/mcp.ts](../../../../sources/dataelement__bisheng/src/frontend/client/src/types/chat/mcp.ts) | mcp signal |
| mcp | [src/backend/bisheng/mcp_manage/__init__.py](../../../../sources/dataelement__bisheng/src/backend/bisheng/mcp_manage/__init__.py) | mcp signal |
| mcp | [src/backend/bisheng/mcp_manage/constant.py](../../../../sources/dataelement__bisheng/src/backend/bisheng/mcp_manage/constant.py) | mcp signal |
| mcp | [src/backend/bisheng/mcp_manage/manager.py](../../../../sources/dataelement__bisheng/src/backend/bisheng/mcp_manage/manager.py) | mcp signal |
| agentRuntime | [src/frontend/platform/src/util/hook.ts](../../../../sources/dataelement__bisheng/src/frontend/platform/src/util/hook.ts) | agentRuntime signal |
| agentRuntime | [src/frontend/platform/src/pages/Dashboard/hook.ts](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/Dashboard/hook.ts) | agentRuntime signal |
| agentRuntime | [src/frontend/platform/src/pages/BuildPage/hook.ts](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/hook.ts) | agentRuntime signal |
| agentRuntime | [src/frontend/platform/src/pages/BuildPage/tools/EditMcp.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/tools/EditMcp.tsx) | agentRuntime signal |
| entrypoints | [src/frontend/platform/src/App.css](../../../../sources/dataelement__bisheng/src/frontend/platform/src/App.css) | entrypoints signal |
| entrypoints | [src/frontend/platform/src/App.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/App.tsx) | entrypoints signal |
| entrypoints | [src/frontend/platform/src/index.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/index.tsx) | entrypoints signal |
| entrypoints | [src/frontend/client/src/App.jsx](../../../../sources/dataelement__bisheng/src/frontend/client/src/App.jsx) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 12 | [src/frontend/platform/src/App.css](../../../../sources/dataelement__bisheng/src/frontend/platform/src/App.css)<br>[src/frontend/platform/src/App.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/App.tsx)<br>[src/frontend/platform/src/index.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/index.tsx)<br>[src/frontend/client/src/App.jsx](../../../../sources/dataelement__bisheng/src/frontend/client/src/App.jsx)<br>[src/frontend/client/src/main.jsx](../../../../sources/dataelement__bisheng/src/frontend/client/src/main.jsx)<br>[src/backend/bisheng/main.py](../../../../sources/dataelement__bisheng/src/backend/bisheng/main.py)<br>[src/backend/bisheng/server.py](../../../../sources/dataelement__bisheng/src/backend/bisheng/server.py)<br>[src/backend/bisheng/worker/main.py](../../../../sources/dataelement__bisheng/src/backend/bisheng/worker/main.py) |
| agentRuntime | 402 | [src/frontend/platform/src/util/hook.ts](../../../../sources/dataelement__bisheng/src/frontend/platform/src/util/hook.ts)<br>[src/frontend/platform/src/pages/Dashboard/hook.ts](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/Dashboard/hook.ts)<br>[src/frontend/platform/src/pages/BuildPage/hook.ts](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/hook.ts)<br>[src/frontend/platform/src/pages/BuildPage/tools/EditMcp.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/tools/EditMcp.tsx)<br>[src/frontend/platform/src/pages/BuildPage/tools/EditTool.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/tools/EditTool.tsx)<br>[src/frontend/platform/src/pages/BuildPage/tools/index.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/tools/index.tsx)<br>[src/frontend/platform/src/pages/BuildPage/tools/ToolItem.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/tools/ToolItem.tsx)<br>[src/frontend/platform/src/pages/BuildPage/tools/ToolSet.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/tools/ToolSet.tsx) |
| mcp | 11 | [src/frontend/client/src/types/chat/mcp.ts](../../../../sources/dataelement__bisheng/src/frontend/client/src/types/chat/mcp.ts)<br>[src/backend/bisheng/mcp_manage/__init__.py](../../../../sources/dataelement__bisheng/src/backend/bisheng/mcp_manage/__init__.py)<br>[src/backend/bisheng/mcp_manage/constant.py](../../../../sources/dataelement__bisheng/src/backend/bisheng/mcp_manage/constant.py)<br>[src/backend/bisheng/mcp_manage/manager.py](../../../../sources/dataelement__bisheng/src/backend/bisheng/mcp_manage/manager.py)<br>[src/backend/bisheng/mcp_manage/langchain/__init__.py](../../../../sources/dataelement__bisheng/src/backend/bisheng/mcp_manage/langchain/__init__.py)<br>[src/backend/bisheng/mcp_manage/langchain/tool.py](../../../../sources/dataelement__bisheng/src/backend/bisheng/mcp_manage/langchain/tool.py)<br>[src/backend/bisheng/mcp_manage/clients/__init__.py](../../../../sources/dataelement__bisheng/src/backend/bisheng/mcp_manage/clients/__init__.py)<br>[src/backend/bisheng/mcp_manage/clients/base.py](../../../../sources/dataelement__bisheng/src/backend/bisheng/mcp_manage/clients/base.py) |
| retrieval | 491 | [src/frontend/platform/index.html](../../../../sources/dataelement__bisheng/src/frontend/platform/index.html)<br>[src/frontend/platform/src/index.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/index.tsx)<br>[src/frontend/platform/src/types/typesContext/index.ts](../../../../sources/dataelement__bisheng/src/frontend/platform/src/types/typesContext/index.ts)<br>[src/frontend/platform/src/types/templatesContext/index.ts](../../../../sources/dataelement__bisheng/src/frontend/platform/src/types/templatesContext/index.ts)<br>[src/frontend/platform/src/types/tabs/index.ts](../../../../sources/dataelement__bisheng/src/frontend/platform/src/types/tabs/index.ts)<br>[src/frontend/platform/src/types/flow/index.ts](../../../../sources/dataelement__bisheng/src/frontend/platform/src/types/flow/index.ts)<br>[src/frontend/platform/src/types/entities/index.ts](../../../../sources/dataelement__bisheng/src/frontend/platform/src/types/entities/index.ts)<br>[src/frontend/platform/src/types/components/index.ts](../../../../sources/dataelement__bisheng/src/frontend/platform/src/types/components/index.ts) |
| spec | 0 | not obvious |
| eval | 61 | [src/frontend/platform/src/pages/BuildPage/bench/DialogueWork.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/bench/DialogueWork.tsx)<br>[src/frontend/platform/src/pages/BuildPage/bench/FormInput.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/bench/FormInput.tsx)<br>[src/frontend/platform/src/pages/BuildPage/bench/IconUploadSection.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/bench/IconUploadSection.tsx)<br>[src/frontend/platform/src/pages/BuildPage/bench/index.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/bench/index.tsx)<br>[src/frontend/platform/src/pages/BuildPage/bench/KnowledgeSpace.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/bench/KnowledgeSpace.tsx)<br>[src/frontend/platform/src/pages/BuildPage/bench/LingSiWork.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/bench/LingSiWork.tsx)<br>[src/frontend/platform/src/pages/BuildPage/bench/ModelManagement.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/bench/ModelManagement.tsx)<br>[src/frontend/platform/src/pages/BuildPage/bench/Preview.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/bench/Preview.tsx) |
| security | 31 | [SECURITY.md](../../../../sources/dataelement__bisheng/SECURITY.md)<br>[src/frontend/platform/src/components/Pro/security/AssistantSetting.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/components/Pro/security/AssistantSetting.tsx)<br>[src/frontend/platform/src/components/Pro/security/FlowSetting.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/components/Pro/security/FlowSetting.tsx)<br>[src/frontend/platform/src/components/Pro/security/FormSet.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/components/Pro/security/FormSet.tsx)<br>[src/frontend/platform/src/components/Pro/security/FormView.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/components/Pro/security/FormView.tsx)<br>[src/frontend/platform/src/assets/text-security-disc.woff](../../../../sources/dataelement__bisheng/src/frontend/platform/src/assets/text-security-disc.woff)<br>[src/frontend/client/src/hooks/queries/auth/index.ts](../../../../sources/dataelement__bisheng/src/frontend/client/src/hooks/queries/auth/index.ts)<br>[src/frontend/client/src/hooks/queries/auth/mutations.ts](../../../../sources/dataelement__bisheng/src/frontend/client/src/hooks/queries/auth/mutations.ts) |
| ci | 5 | [.github/workflows/base_ci.yml](../../../../sources/dataelement__bisheng/.github/workflows/base_ci.yml)<br>[.github/workflows/build_linux_only.yml](../../../../sources/dataelement__bisheng/.github/workflows/build_linux_only.yml)<br>[.github/workflows/ci.yml](../../../../sources/dataelement__bisheng/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/dataelement__bisheng/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/dataelement__bisheng/.github/workflows/test.yml) |
| container | 11 | [src/frontend/Dockerfile](../../../../sources/dataelement__bisheng/src/frontend/Dockerfile)<br>[src/frontend/platform/Dockerfile](../../../../sources/dataelement__bisheng/src/frontend/platform/Dockerfile)<br>[src/frontend/platform/src/pages/Dashboard/components/charts/BaseChart.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/Dashboard/components/charts/BaseChart.tsx)<br>[src/frontend/platform/src/pages/Dashboard/components/charts/ChartContainer.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/Dashboard/components/charts/ChartContainer.tsx)<br>[src/frontend/platform/src/pages/Dashboard/components/charts/MetricCard.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/Dashboard/components/charts/MetricCard.tsx)<br>[src/frontend/platform/src/pages/Dashboard/components/charts/QueryFilter.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/Dashboard/components/charts/QueryFilter.tsx)<br>[src/backend/Dockerfile](../../../../sources/dataelement__bisheng/src/backend/Dockerfile)<br>[docker/docker-compose-ft.yml](../../../../sources/dataelement__bisheng/docker/docker-compose-ft.yml) |
| instruction | 0 | not obvious |
| docs | 17 | [README_CN.md](../../../../sources/dataelement__bisheng/README_CN.md)<br>[README_JPN.md](../../../../sources/dataelement__bisheng/README_JPN.md)<br>[README.md](../../../../sources/dataelement__bisheng/README.md)<br>[src/frontend/platform/README.md](../../../../sources/dataelement__bisheng/src/frontend/platform/README.md)<br>[src/frontend/platform/src/workspace/README.md](../../../../sources/dataelement__bisheng/src/frontend/platform/src/workspace/README.md)<br>[src/frontend/client/readme.md](../../../../sources/dataelement__bisheng/src/frontend/client/readme.md)<br>[src/frontend/client/src/pages/appChat/README.md](../../../../sources/dataelement__bisheng/src/frontend/client/src/pages/appChat/README.md)<br>[src/backend/README.md](../../../../sources/dataelement__bisheng/src/backend/README.md) |
| config | 6 | [src/frontend/platform/package.json](../../../../sources/dataelement__bisheng/src/frontend/platform/package.json)<br>[src/frontend/platform/tsconfig.json](../../../../sources/dataelement__bisheng/src/frontend/platform/tsconfig.json)<br>[src/frontend/client/package.json](../../../../sources/dataelement__bisheng/src/frontend/client/package.json)<br>[src/frontend/client/tsconfig.json](../../../../sources/dataelement__bisheng/src/frontend/client/tsconfig.json)<br>[src/backend/pyproject.toml](../../../../sources/dataelement__bisheng/src/backend/pyproject.toml)<br>[src/backend/uv.lock](../../../../sources/dataelement__bisheng/src/backend/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 61 | [src/frontend/platform/src/pages/BuildPage/bench/DialogueWork.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/bench/DialogueWork.tsx)<br>[src/frontend/platform/src/pages/BuildPage/bench/FormInput.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/bench/FormInput.tsx)<br>[src/frontend/platform/src/pages/BuildPage/bench/IconUploadSection.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/bench/IconUploadSection.tsx)<br>[src/frontend/platform/src/pages/BuildPage/bench/index.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/bench/index.tsx)<br>[src/frontend/platform/src/pages/BuildPage/bench/KnowledgeSpace.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/bench/KnowledgeSpace.tsx)<br>[src/frontend/platform/src/pages/BuildPage/bench/LingSiWork.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/bench/LingSiWork.tsx) |
| CI workflows | 5 | [.github/workflows/base_ci.yml](../../../../sources/dataelement__bisheng/.github/workflows/base_ci.yml)<br>[.github/workflows/build_linux_only.yml](../../../../sources/dataelement__bisheng/.github/workflows/build_linux_only.yml)<br>[.github/workflows/ci.yml](../../../../sources/dataelement__bisheng/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/dataelement__bisheng/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/dataelement__bisheng/.github/workflows/test.yml) |
| Containers / deploy | 11 | [src/frontend/Dockerfile](../../../../sources/dataelement__bisheng/src/frontend/Dockerfile)<br>[src/frontend/platform/Dockerfile](../../../../sources/dataelement__bisheng/src/frontend/platform/Dockerfile)<br>[src/frontend/platform/src/pages/Dashboard/components/charts/BaseChart.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/Dashboard/components/charts/BaseChart.tsx)<br>[src/frontend/platform/src/pages/Dashboard/components/charts/ChartContainer.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/Dashboard/components/charts/ChartContainer.tsx)<br>[src/frontend/platform/src/pages/Dashboard/components/charts/MetricCard.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/Dashboard/components/charts/MetricCard.tsx)<br>[src/frontend/platform/src/pages/Dashboard/components/charts/QueryFilter.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/Dashboard/components/charts/QueryFilter.tsx) |
| Security / policy | 31 | [SECURITY.md](../../../../sources/dataelement__bisheng/SECURITY.md)<br>[src/frontend/platform/src/components/Pro/security/AssistantSetting.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/components/Pro/security/AssistantSetting.tsx)<br>[src/frontend/platform/src/components/Pro/security/FlowSetting.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/components/Pro/security/FlowSetting.tsx)<br>[src/frontend/platform/src/components/Pro/security/FormSet.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/components/Pro/security/FormSet.tsx)<br>[src/frontend/platform/src/components/Pro/security/FormView.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/components/Pro/security/FormView.tsx)<br>[src/frontend/platform/src/assets/text-security-disc.woff](../../../../sources/dataelement__bisheng/src/frontend/platform/src/assets/text-security-disc.woff) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `src/frontend/client/src/types/chat/mcp.ts`, `src/backend/bisheng/mcp_manage/__init__.py`, `src/backend/bisheng/mcp_manage/constant.py`.
2. Trace execution through entrypoints: `src/frontend/platform/src/App.css`, `src/frontend/platform/src/App.tsx`, `src/frontend/platform/src/index.tsx`.
3. Map agent/tool runtime through: `src/frontend/platform/src/util/hook.ts`, `src/frontend/platform/src/pages/Dashboard/hook.ts`, `src/frontend/platform/src/pages/BuildPage/hook.ts`.
4. Inspect retrieval/memory/indexing through: `src/frontend/platform/index.html`, `src/frontend/platform/src/index.tsx`, `src/frontend/platform/src/types/typesContext/index.ts`.
5. Verify behavior through test/eval files: `src/frontend/platform/src/pages/BuildPage/bench/DialogueWork.tsx`, `src/frontend/platform/src/pages/BuildPage/bench/FormInput.tsx`, `src/frontend/platform/src/pages/BuildPage/bench/IconUploadSection.tsx`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 BISHENG is an open LLM devops platform for next generation Enterprise AI applications. Powerful and comprehensive featur. 핵심 구조 신호는 TypeScript, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
