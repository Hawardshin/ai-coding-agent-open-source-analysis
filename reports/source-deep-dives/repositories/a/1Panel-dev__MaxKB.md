# 1Panel-dev/MaxKB Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

🔥 MaxKB is an open-source platform for building enterprise-grade agents. 强大易用的开源企业级智能体平台。

## 요약

- 조사 단위: `sources/1Panel-dev__MaxKB` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,182 files, 624 directories, depth score 124, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=ui/src/workflow/nodes/mcp-node/index.ts, ui/src/workflow/nodes/mcp-node/index.vue, ui/src/workflow/nodes/mcp-node/component/McpServerInputDialog.vue이고, 의존성 단서는 openai, anthropic, mcp, langchain, langgraph, torch, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | 1Panel-dev/MaxKB |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/1Panel-dev__MaxKB](../../../../sources/1Panel-dev__MaxKB) |
| Existing report | [reports/korea-trending/repositories/1Panel-dev__MaxKB.md](../../../korea-trending/repositories/1Panel-dev__MaxKB.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2182 / 624 |
| Max observed depth | 8 |
| Top directories | .github, apps, installer, ui |
| Top extensions | .py: 1046, .vue: 504, .ts: 327, .svg: 91, .sql: 55, (none): 33, .jpg: 22, .png: 20, .md: 13, .yml: 12, .scss: 10, .json: 9 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| apps/system_manage | apps workspace | 12 |
| apps/application | apps workspace | 6 |
| apps/chat | apps workspace | 4 |
| apps/knowledge | apps workspace | 2 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| apps/homepage | apps workspace | 1 |
| apps/local_model | apps workspace | 1 |
| apps/models_provider | apps workspace | 1 |
| apps/oss | apps workspace | 1 |
| apps/tools | apps workspace | 1 |
| apps/trigger | apps workspace | 1 |
| apps/users | apps workspace | 1 |
| installer | top-level component | 1 |
| ui | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | langchain, langgraph |
| vectorStores | none |
| modelRuntime | torch, transformers, ollama, llama |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [ui/src/workflow/nodes/mcp-node/index.ts](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/mcp-node/index.ts) | mcp signal |
| mcp | [ui/src/workflow/nodes/mcp-node/index.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/mcp-node/index.vue) | mcp signal |
| mcp | [ui/src/workflow/nodes/mcp-node/component/McpServerInputDialog.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/mcp-node/component/McpServerInputDialog.vue) | mcp signal |
| mcp | [ui/src/workflow/icons/mcp-node-icon.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/icons/mcp-node-icon.vue) | mcp signal |
| agentRuntime | [ui/src/workflow/index.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/index.vue) | agentRuntime signal |
| agentRuntime | [ui/src/workflow/plugins/dagre.ts](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/plugins/dagre.ts) | agentRuntime signal |
| agentRuntime | [ui/src/workflow/nodes/video-understand/index.ts](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/video-understand/index.ts) | agentRuntime signal |
| agentRuntime | [ui/src/workflow/nodes/video-understand/index.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/video-understand/index.vue) | agentRuntime signal |
| entrypoints | [main.py](../../../../sources/1Panel-dev__MaxKB/main.py) | entrypoints signal |
| entrypoints | [ui/src/App.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/App.vue) | entrypoints signal |
| entrypoints | [ui/src/main.ts](../../../../sources/1Panel-dev__MaxKB/ui/src/main.ts) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/1Panel-dev__MaxKB/pyproject.toml) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [main.py](../../../../sources/1Panel-dev__MaxKB/main.py)<br>[ui/src/App.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/App.vue)<br>[ui/src/main.ts](../../../../sources/1Panel-dev__MaxKB/ui/src/main.ts) |
| agentRuntime | 363 | [ui/src/workflow/index.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/index.vue)<br>[ui/src/workflow/plugins/dagre.ts](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/plugins/dagre.ts)<br>[ui/src/workflow/nodes/video-understand/index.ts](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/video-understand/index.ts)<br>[ui/src/workflow/nodes/video-understand/index.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/video-understand/index.vue)<br>[ui/src/workflow/nodes/variable-splitting/index.ts](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/variable-splitting/index.ts)<br>[ui/src/workflow/nodes/variable-splitting/index.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/variable-splitting/index.vue)<br>[ui/src/workflow/nodes/variable-splitting/component/VariableFieldDialog.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/variable-splitting/component/VariableFieldDialog.vue)<br>[ui/src/workflow/nodes/variable-splitting/component/VariableFieldTable.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/variable-splitting/component/VariableFieldTable.vue) |
| mcp | 13 | [ui/src/workflow/nodes/mcp-node/index.ts](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/mcp-node/index.ts)<br>[ui/src/workflow/nodes/mcp-node/index.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/mcp-node/index.vue)<br>[ui/src/workflow/nodes/mcp-node/component/McpServerInputDialog.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/mcp-node/component/McpServerInputDialog.vue)<br>[ui/src/workflow/icons/mcp-node-icon.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/icons/mcp-node-icon.vue)<br>[ui/src/assets/tool/icon_mcp.svg](../../../../sources/1Panel-dev__MaxKB/ui/src/assets/tool/icon_mcp.svg)<br>[apps/chat/views/mcp.py](../../../../sources/1Panel-dev__MaxKB/apps/chat/views/mcp.py)<br>[apps/chat/mcp/__init__.py](../../../../sources/1Panel-dev__MaxKB/apps/chat/mcp/__init__.py)<br>[apps/chat/mcp/tools.py](../../../../sources/1Panel-dev__MaxKB/apps/chat/mcp/tools.py) |
| retrieval | 414 | [ui/src/workflow/index.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/index.vue)<br>[ui/src/workflow/nodes/video-understand/index.ts](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/video-understand/index.ts)<br>[ui/src/workflow/nodes/video-understand/index.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/video-understand/index.vue)<br>[ui/src/workflow/nodes/variable-splitting/index.ts](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/variable-splitting/index.ts)<br>[ui/src/workflow/nodes/variable-splitting/index.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/variable-splitting/index.vue)<br>[ui/src/workflow/nodes/variable-assign-node/index.ts](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/variable-assign-node/index.ts)<br>[ui/src/workflow/nodes/variable-assign-node/index.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/variable-assign-node/index.vue)<br>[ui/src/workflow/nodes/variable-aggregation-node/index.ts](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/variable-aggregation-node/index.ts) |
| spec | 0 | not obvious |
| eval | 14 | [ui/src/views/hit-test/index.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/views/hit-test/index.vue)<br>[ui/src/assets/hit-test-empty.png](../../../../sources/1Panel-dev__MaxKB/ui/src/assets/hit-test-empty.png)<br>[apps/users/tests.py](../../../../sources/1Panel-dev__MaxKB/apps/users/tests.py)<br>[apps/trigger/tests.py](../../../../sources/1Panel-dev__MaxKB/apps/trigger/tests.py)<br>[apps/tools/tests.py](../../../../sources/1Panel-dev__MaxKB/apps/tools/tests.py)<br>[apps/system_manage/tests.py](../../../../sources/1Panel-dev__MaxKB/apps/system_manage/tests.py)<br>[apps/oss/tests.py](../../../../sources/1Panel-dev__MaxKB/apps/oss/tests.py)<br>[apps/models_provider/tests.py](../../../../sources/1Panel-dev__MaxKB/apps/models_provider/tests.py) |
| security | 58 | [SECURITY.md](../../../../sources/1Panel-dev__MaxKB/SECURITY.md)<br>[ui/src/views/Permission.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/views/Permission.vue)<br>[ui/src/views/chat/auth/index.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/views/chat/auth/index.vue)<br>[ui/src/views/chat/auth/component/password.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/views/chat/auth/component/password.vue)<br>[ui/src/utils/permission/data.ts](../../../../sources/1Panel-dev__MaxKB/ui/src/utils/permission/data.ts)<br>[ui/src/utils/permission/index.ts](../../../../sources/1Panel-dev__MaxKB/ui/src/utils/permission/index.ts)<br>[ui/src/utils/permission/type.ts](../../../../sources/1Panel-dev__MaxKB/ui/src/utils/permission/type.ts)<br>[ui/src/utils/dynamics-api/permission-api.ts](../../../../sources/1Panel-dev__MaxKB/ui/src/utils/dynamics-api/permission-api.ts) |
| ci | 8 | [.github/workflows/build-and-push-python-pg.yml](../../../../sources/1Panel-dev__MaxKB/.github/workflows/build-and-push-python-pg.yml)<br>[.github/workflows/build-and-push-vector-model.yml](../../../../sources/1Panel-dev__MaxKB/.github/workflows/build-and-push-vector-model.yml)<br>[.github/workflows/build-and-push.yml](../../../../sources/1Panel-dev__MaxKB/.github/workflows/build-and-push.yml)<br>[.github/workflows/create-pr-from-push.yml](../../../../sources/1Panel-dev__MaxKB/.github/workflows/create-pr-from-push.yml)<br>[.github/workflows/issue-translator.yml](../../../../sources/1Panel-dev__MaxKB/.github/workflows/issue-translator.yml)<br>[.github/workflows/llm-code-review.yml](../../../../sources/1Panel-dev__MaxKB/.github/workflows/llm-code-review.yml)<br>[.github/workflows/sync2gitee.yml](../../../../sources/1Panel-dev__MaxKB/.github/workflows/sync2gitee.yml)<br>[.github/workflows/typos_check.yml](../../../../sources/1Panel-dev__MaxKB/.github/workflows/typos_check.yml) |
| container | 3 | [installer/Dockerfile](../../../../sources/1Panel-dev__MaxKB/installer/Dockerfile)<br>[installer/Dockerfile-base](../../../../sources/1Panel-dev__MaxKB/installer/Dockerfile-base)<br>[installer/Dockerfile-vector-model](../../../../sources/1Panel-dev__MaxKB/installer/Dockerfile-vector-model) |
| instruction | 0 | not obvious |
| docs | 3 | [README_CN.md](../../../../sources/1Panel-dev__MaxKB/README_CN.md)<br>[README.md](../../../../sources/1Panel-dev__MaxKB/README.md)<br>[ui/README.md](../../../../sources/1Panel-dev__MaxKB/ui/README.md) |
| config | 3 | [pyproject.toml](../../../../sources/1Panel-dev__MaxKB/pyproject.toml)<br>[ui/package.json](../../../../sources/1Panel-dev__MaxKB/ui/package.json)<br>[ui/tsconfig.json](../../../../sources/1Panel-dev__MaxKB/ui/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 14 | [ui/src/views/hit-test/index.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/views/hit-test/index.vue)<br>[ui/src/assets/hit-test-empty.png](../../../../sources/1Panel-dev__MaxKB/ui/src/assets/hit-test-empty.png)<br>[apps/users/tests.py](../../../../sources/1Panel-dev__MaxKB/apps/users/tests.py)<br>[apps/trigger/tests.py](../../../../sources/1Panel-dev__MaxKB/apps/trigger/tests.py)<br>[apps/tools/tests.py](../../../../sources/1Panel-dev__MaxKB/apps/tools/tests.py)<br>[apps/system_manage/tests.py](../../../../sources/1Panel-dev__MaxKB/apps/system_manage/tests.py) |
| CI workflows | 8 | [.github/workflows/build-and-push-python-pg.yml](../../../../sources/1Panel-dev__MaxKB/.github/workflows/build-and-push-python-pg.yml)<br>[.github/workflows/build-and-push-vector-model.yml](../../../../sources/1Panel-dev__MaxKB/.github/workflows/build-and-push-vector-model.yml)<br>[.github/workflows/build-and-push.yml](../../../../sources/1Panel-dev__MaxKB/.github/workflows/build-and-push.yml)<br>[.github/workflows/create-pr-from-push.yml](../../../../sources/1Panel-dev__MaxKB/.github/workflows/create-pr-from-push.yml)<br>[.github/workflows/issue-translator.yml](../../../../sources/1Panel-dev__MaxKB/.github/workflows/issue-translator.yml)<br>[.github/workflows/llm-code-review.yml](../../../../sources/1Panel-dev__MaxKB/.github/workflows/llm-code-review.yml) |
| Containers / deploy | 3 | [installer/Dockerfile](../../../../sources/1Panel-dev__MaxKB/installer/Dockerfile)<br>[installer/Dockerfile-base](../../../../sources/1Panel-dev__MaxKB/installer/Dockerfile-base)<br>[installer/Dockerfile-vector-model](../../../../sources/1Panel-dev__MaxKB/installer/Dockerfile-vector-model) |
| Security / policy | 58 | [SECURITY.md](../../../../sources/1Panel-dev__MaxKB/SECURITY.md)<br>[ui/src/views/Permission.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/views/Permission.vue)<br>[ui/src/views/chat/auth/index.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/views/chat/auth/index.vue)<br>[ui/src/views/chat/auth/component/password.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/views/chat/auth/component/password.vue)<br>[ui/src/utils/permission/data.ts](../../../../sources/1Panel-dev__MaxKB/ui/src/utils/permission/data.ts)<br>[ui/src/utils/permission/index.ts](../../../../sources/1Panel-dev__MaxKB/ui/src/utils/permission/index.ts) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `ui/src/workflow/nodes/mcp-node/index.ts`, `ui/src/workflow/nodes/mcp-node/index.vue`, `ui/src/workflow/nodes/mcp-node/component/McpServerInputDialog.vue`.
2. Trace execution through entrypoints: `main.py`, `ui/src/App.vue`, `ui/src/main.ts`.
3. Map agent/tool runtime through: `ui/src/workflow/index.vue`, `ui/src/workflow/plugins/dagre.ts`, `ui/src/workflow/nodes/video-understand/index.ts`.
4. Inspect retrieval/memory/indexing through: `ui/src/workflow/index.vue`, `ui/src/workflow/nodes/video-understand/index.ts`, `ui/src/workflow/nodes/video-understand/index.vue`.
5. Verify behavior through test/eval files: `ui/src/views/hit-test/index.vue`, `ui/src/assets/hit-test-empty.png`, `apps/users/tests.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 🔥 MaxKB is an open source platform for building enterprise grade agents. 强大易用的开源企业级智能体平台。. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, openai, anthropic이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
