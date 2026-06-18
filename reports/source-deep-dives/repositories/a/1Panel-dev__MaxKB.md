# 1Panel-dev/MaxKB 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

🔥 MaxKB is an open-source platform for building enterprise-grade agents. 强大易用的开源企业级智能体平台。

## 요약

- 조사 단위: `sources/1Panel-dev__MaxKB` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,182 files, 624 directories, depth score 118, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=ui/src/workflow/nodes/mcp-node/index.ts, ui/src/workflow/nodes/mcp-node/index.vue, ui/src/workflow/nodes/mcp-node/component/McpServerInputDialog.vue이고, 의존성 단서는 openai, anthropic, mcp, langchain, langgraph, torch, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | 1Panel-dev/MaxKB |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/1Panel-dev__MaxKB](../../../../sources/1Panel-dev__MaxKB) |
| 기존 보고서 | [reports/korea-trending/repositories/1Panel-dev__MaxKB.md](../../../korea-trending/repositories/1Panel-dev__MaxKB.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2182 / 624 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .github, apps, installer, ui |
| 상위 확장자 | .py: 1046, .vue: 504, .ts: 327, .svg: 91, .sql: 55, (none): 33, .jpg: 22, .png: 20, .md: 13, .yml: 12, .scss: 10, .json: 9 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | langchain, langgraph |
| vectorStores | 없음 |
| modelRuntime | torch, transformers, ollama, llama |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [main.py](../../../../sources/1Panel-dev__MaxKB/main.py)<br>[ui/src/App.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/App.vue)<br>[ui/src/main.ts](../../../../sources/1Panel-dev__MaxKB/ui/src/main.ts) |
| agentRuntime | 363 | [ui/src/workflow/index.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/index.vue)<br>[ui/src/workflow/plugins/dagre.ts](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/plugins/dagre.ts)<br>[ui/src/workflow/nodes/video-understand/index.ts](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/video-understand/index.ts)<br>[ui/src/workflow/nodes/video-understand/index.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/video-understand/index.vue)<br>[ui/src/workflow/nodes/variable-splitting/index.ts](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/variable-splitting/index.ts)<br>[ui/src/workflow/nodes/variable-splitting/index.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/variable-splitting/index.vue)<br>[ui/src/workflow/nodes/variable-splitting/component/VariableFieldDialog.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/variable-splitting/component/VariableFieldDialog.vue)<br>[ui/src/workflow/nodes/variable-splitting/component/VariableFieldTable.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/variable-splitting/component/VariableFieldTable.vue) |
| mcp | 13 | [ui/src/workflow/nodes/mcp-node/index.ts](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/mcp-node/index.ts)<br>[ui/src/workflow/nodes/mcp-node/index.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/mcp-node/index.vue)<br>[ui/src/workflow/nodes/mcp-node/component/McpServerInputDialog.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/mcp-node/component/McpServerInputDialog.vue)<br>[ui/src/workflow/icons/mcp-node-icon.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/icons/mcp-node-icon.vue)<br>[ui/src/assets/tool/icon_mcp.svg](../../../../sources/1Panel-dev__MaxKB/ui/src/assets/tool/icon_mcp.svg)<br>[apps/chat/views/mcp.py](../../../../sources/1Panel-dev__MaxKB/apps/chat/views/mcp.py)<br>[apps/chat/mcp/__init__.py](../../../../sources/1Panel-dev__MaxKB/apps/chat/mcp/__init__.py)<br>[apps/chat/mcp/tools.py](../../../../sources/1Panel-dev__MaxKB/apps/chat/mcp/tools.py) |
| retrieval | 414 | [ui/src/workflow/index.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/index.vue)<br>[ui/src/workflow/nodes/video-understand/index.ts](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/video-understand/index.ts)<br>[ui/src/workflow/nodes/video-understand/index.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/video-understand/index.vue)<br>[ui/src/workflow/nodes/variable-splitting/index.ts](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/variable-splitting/index.ts)<br>[ui/src/workflow/nodes/variable-splitting/index.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/variable-splitting/index.vue)<br>[ui/src/workflow/nodes/variable-assign-node/index.ts](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/variable-assign-node/index.ts)<br>[ui/src/workflow/nodes/variable-assign-node/index.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/variable-assign-node/index.vue)<br>[ui/src/workflow/nodes/variable-aggregation-node/index.ts](../../../../sources/1Panel-dev__MaxKB/ui/src/workflow/nodes/variable-aggregation-node/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 14 | [ui/src/views/hit-test/index.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/views/hit-test/index.vue)<br>[ui/src/assets/hit-test-empty.png](../../../../sources/1Panel-dev__MaxKB/ui/src/assets/hit-test-empty.png)<br>[apps/users/tests.py](../../../../sources/1Panel-dev__MaxKB/apps/users/tests.py)<br>[apps/trigger/tests.py](../../../../sources/1Panel-dev__MaxKB/apps/trigger/tests.py)<br>[apps/tools/tests.py](../../../../sources/1Panel-dev__MaxKB/apps/tools/tests.py)<br>[apps/system_manage/tests.py](../../../../sources/1Panel-dev__MaxKB/apps/system_manage/tests.py)<br>[apps/oss/tests.py](../../../../sources/1Panel-dev__MaxKB/apps/oss/tests.py)<br>[apps/models_provider/tests.py](../../../../sources/1Panel-dev__MaxKB/apps/models_provider/tests.py) |
| security | 58 | [SECURITY.md](../../../../sources/1Panel-dev__MaxKB/SECURITY.md)<br>[ui/src/views/Permission.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/views/Permission.vue)<br>[ui/src/views/chat/auth/index.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/views/chat/auth/index.vue)<br>[ui/src/views/chat/auth/component/password.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/views/chat/auth/component/password.vue)<br>[ui/src/utils/permission/data.ts](../../../../sources/1Panel-dev__MaxKB/ui/src/utils/permission/data.ts)<br>[ui/src/utils/permission/index.ts](../../../../sources/1Panel-dev__MaxKB/ui/src/utils/permission/index.ts)<br>[ui/src/utils/permission/type.ts](../../../../sources/1Panel-dev__MaxKB/ui/src/utils/permission/type.ts)<br>[ui/src/utils/dynamics-api/permission-api.ts](../../../../sources/1Panel-dev__MaxKB/ui/src/utils/dynamics-api/permission-api.ts) |
| ci | 8 | [.github/workflows/build-and-push-python-pg.yml](../../../../sources/1Panel-dev__MaxKB/.github/workflows/build-and-push-python-pg.yml)<br>[.github/workflows/build-and-push-vector-model.yml](../../../../sources/1Panel-dev__MaxKB/.github/workflows/build-and-push-vector-model.yml)<br>[.github/workflows/build-and-push.yml](../../../../sources/1Panel-dev__MaxKB/.github/workflows/build-and-push.yml)<br>[.github/workflows/create-pr-from-push.yml](../../../../sources/1Panel-dev__MaxKB/.github/workflows/create-pr-from-push.yml)<br>[.github/workflows/issue-translator.yml](../../../../sources/1Panel-dev__MaxKB/.github/workflows/issue-translator.yml)<br>[.github/workflows/llm-code-review.yml](../../../../sources/1Panel-dev__MaxKB/.github/workflows/llm-code-review.yml)<br>[.github/workflows/sync2gitee.yml](../../../../sources/1Panel-dev__MaxKB/.github/workflows/sync2gitee.yml)<br>[.github/workflows/typos_check.yml](../../../../sources/1Panel-dev__MaxKB/.github/workflows/typos_check.yml) |
| container | 3 | [installer/Dockerfile](../../../../sources/1Panel-dev__MaxKB/installer/Dockerfile)<br>[installer/Dockerfile-base](../../../../sources/1Panel-dev__MaxKB/installer/Dockerfile-base)<br>[installer/Dockerfile-vector-model](../../../../sources/1Panel-dev__MaxKB/installer/Dockerfile-vector-model) |
| instruction | 0 | 명확하지 않음 |
| docs | 3 | [README_CN.md](../../../../sources/1Panel-dev__MaxKB/README_CN.md)<br>[README.md](../../../../sources/1Panel-dev__MaxKB/README.md)<br>[ui/README.md](../../../../sources/1Panel-dev__MaxKB/ui/README.md) |
| config | 3 | [pyproject.toml](../../../../sources/1Panel-dev__MaxKB/pyproject.toml)<br>[ui/package.json](../../../../sources/1Panel-dev__MaxKB/ui/package.json)<br>[ui/tsconfig.json](../../../../sources/1Panel-dev__MaxKB/ui/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 14 | [ui/src/views/hit-test/index.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/views/hit-test/index.vue)<br>[ui/src/assets/hit-test-empty.png](../../../../sources/1Panel-dev__MaxKB/ui/src/assets/hit-test-empty.png)<br>[apps/users/tests.py](../../../../sources/1Panel-dev__MaxKB/apps/users/tests.py)<br>[apps/trigger/tests.py](../../../../sources/1Panel-dev__MaxKB/apps/trigger/tests.py)<br>[apps/tools/tests.py](../../../../sources/1Panel-dev__MaxKB/apps/tools/tests.py)<br>[apps/system_manage/tests.py](../../../../sources/1Panel-dev__MaxKB/apps/system_manage/tests.py) |
| CI workflow | 8 | [.github/workflows/build-and-push-python-pg.yml](../../../../sources/1Panel-dev__MaxKB/.github/workflows/build-and-push-python-pg.yml)<br>[.github/workflows/build-and-push-vector-model.yml](../../../../sources/1Panel-dev__MaxKB/.github/workflows/build-and-push-vector-model.yml)<br>[.github/workflows/build-and-push.yml](../../../../sources/1Panel-dev__MaxKB/.github/workflows/build-and-push.yml)<br>[.github/workflows/create-pr-from-push.yml](../../../../sources/1Panel-dev__MaxKB/.github/workflows/create-pr-from-push.yml)<br>[.github/workflows/issue-translator.yml](../../../../sources/1Panel-dev__MaxKB/.github/workflows/issue-translator.yml)<br>[.github/workflows/llm-code-review.yml](../../../../sources/1Panel-dev__MaxKB/.github/workflows/llm-code-review.yml) |
| 컨테이너/배포 | 3 | [installer/Dockerfile](../../../../sources/1Panel-dev__MaxKB/installer/Dockerfile)<br>[installer/Dockerfile-base](../../../../sources/1Panel-dev__MaxKB/installer/Dockerfile-base)<br>[installer/Dockerfile-vector-model](../../../../sources/1Panel-dev__MaxKB/installer/Dockerfile-vector-model) |
| 보안/정책 | 58 | [SECURITY.md](../../../../sources/1Panel-dev__MaxKB/SECURITY.md)<br>[ui/src/views/Permission.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/views/Permission.vue)<br>[ui/src/views/chat/auth/index.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/views/chat/auth/index.vue)<br>[ui/src/views/chat/auth/component/password.vue](../../../../sources/1Panel-dev__MaxKB/ui/src/views/chat/auth/component/password.vue)<br>[ui/src/utils/permission/data.ts](../../../../sources/1Panel-dev__MaxKB/ui/src/utils/permission/data.ts)<br>[ui/src/utils/permission/index.ts](../../../../sources/1Panel-dev__MaxKB/ui/src/utils/permission/index.ts) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `ui/src/workflow/nodes/mcp-node/index.ts`, `ui/src/workflow/nodes/mcp-node/index.vue`, `ui/src/workflow/nodes/mcp-node/component/McpServerInputDialog.vue`.
2. entrypoint를 따라 실행 흐름 확인: `main.py`, `ui/src/App.vue`, `ui/src/main.ts`.
3. agent/tool runtime 매핑: `ui/src/workflow/index.vue`, `ui/src/workflow/plugins/dagre.ts`, `ui/src/workflow/nodes/video-understand/index.ts`.
4. retrieval/memory/indexing 확인: `ui/src/workflow/index.vue`, `ui/src/workflow/nodes/video-understand/index.ts`, `ui/src/workflow/nodes/video-understand/index.vue`.
5. test/eval 파일로 동작 검증: `ui/src/views/hit-test/index.vue`, `ui/src/assets/hit-test-empty.png`, `apps/users/tests.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 🔥 MaxKB is an open source platform for building enterprise grade agents. 强大易用的开源企业级智能体平台。. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, openai, anthropic이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
