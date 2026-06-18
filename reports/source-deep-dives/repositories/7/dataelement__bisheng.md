# dataelement/bisheng 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

BISHENG is an open LLM devops platform for next generation Enterprise AI applications. Powerful and comprehensive features include: GenAI workflow, RAG, Agent, Unified model management, Evaluation, SFT, Dataset Management, Enterprise-level System Management, Observability and more.

## 요약

- 조사 단위: `sources/dataelement__bisheng` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 3,048 files, 703 directories, depth score 115, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/frontend/client/src/types/chat/mcp.ts, src/backend/bisheng/mcp_manage/__init__.py, src/backend/bisheng/mcp_manage/constant.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | dataelement/bisheng |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 11455 |
| Forks | 1869 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/dataelement__bisheng](../../../../sources/dataelement__bisheng) |
| 기존 보고서 | [reports/global-trending/repositories/dataelement__bisheng.md](../../../global-trending/repositories/dataelement__bisheng.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 3048 / 703 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .github, docker, src |
| 상위 확장자 | .tsx: 1314, .py: 855, .ts: 379, .svg: 149, .png: 71, .json: 47, .pyc: 28, .md: 27, .jsx: 26, .yaml: 24, .js: 19, .css: 12 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 201 |
| .github | ci surface | 1 |
| docker | documentation surface | 1 |


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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 12 | [src/frontend/platform/src/App.css](../../../../sources/dataelement__bisheng/src/frontend/platform/src/App.css)<br>[src/frontend/platform/src/App.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/App.tsx)<br>[src/frontend/platform/src/index.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/index.tsx)<br>[src/frontend/client/src/App.jsx](../../../../sources/dataelement__bisheng/src/frontend/client/src/App.jsx)<br>[src/frontend/client/src/main.jsx](../../../../sources/dataelement__bisheng/src/frontend/client/src/main.jsx)<br>[src/backend/bisheng/main.py](../../../../sources/dataelement__bisheng/src/backend/bisheng/main.py)<br>[src/backend/bisheng/server.py](../../../../sources/dataelement__bisheng/src/backend/bisheng/server.py)<br>[src/backend/bisheng/worker/main.py](../../../../sources/dataelement__bisheng/src/backend/bisheng/worker/main.py) |
| agentRuntime | 402 | [src/frontend/platform/src/util/hook.ts](../../../../sources/dataelement__bisheng/src/frontend/platform/src/util/hook.ts)<br>[src/frontend/platform/src/pages/Dashboard/hook.ts](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/Dashboard/hook.ts)<br>[src/frontend/platform/src/pages/BuildPage/hook.ts](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/hook.ts)<br>[src/frontend/platform/src/pages/BuildPage/tools/EditMcp.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/tools/EditMcp.tsx)<br>[src/frontend/platform/src/pages/BuildPage/tools/EditTool.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/tools/EditTool.tsx)<br>[src/frontend/platform/src/pages/BuildPage/tools/index.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/tools/index.tsx)<br>[src/frontend/platform/src/pages/BuildPage/tools/ToolItem.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/tools/ToolItem.tsx)<br>[src/frontend/platform/src/pages/BuildPage/tools/ToolSet.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/tools/ToolSet.tsx) |
| mcp | 11 | [src/frontend/client/src/types/chat/mcp.ts](../../../../sources/dataelement__bisheng/src/frontend/client/src/types/chat/mcp.ts)<br>[src/backend/bisheng/mcp_manage/__init__.py](../../../../sources/dataelement__bisheng/src/backend/bisheng/mcp_manage/__init__.py)<br>[src/backend/bisheng/mcp_manage/constant.py](../../../../sources/dataelement__bisheng/src/backend/bisheng/mcp_manage/constant.py)<br>[src/backend/bisheng/mcp_manage/manager.py](../../../../sources/dataelement__bisheng/src/backend/bisheng/mcp_manage/manager.py)<br>[src/backend/bisheng/mcp_manage/langchain/__init__.py](../../../../sources/dataelement__bisheng/src/backend/bisheng/mcp_manage/langchain/__init__.py)<br>[src/backend/bisheng/mcp_manage/langchain/tool.py](../../../../sources/dataelement__bisheng/src/backend/bisheng/mcp_manage/langchain/tool.py)<br>[src/backend/bisheng/mcp_manage/clients/__init__.py](../../../../sources/dataelement__bisheng/src/backend/bisheng/mcp_manage/clients/__init__.py)<br>[src/backend/bisheng/mcp_manage/clients/base.py](../../../../sources/dataelement__bisheng/src/backend/bisheng/mcp_manage/clients/base.py) |
| retrieval | 491 | [src/frontend/platform/index.html](../../../../sources/dataelement__bisheng/src/frontend/platform/index.html)<br>[src/frontend/platform/src/index.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/index.tsx)<br>[src/frontend/platform/src/types/typesContext/index.ts](../../../../sources/dataelement__bisheng/src/frontend/platform/src/types/typesContext/index.ts)<br>[src/frontend/platform/src/types/templatesContext/index.ts](../../../../sources/dataelement__bisheng/src/frontend/platform/src/types/templatesContext/index.ts)<br>[src/frontend/platform/src/types/tabs/index.ts](../../../../sources/dataelement__bisheng/src/frontend/platform/src/types/tabs/index.ts)<br>[src/frontend/platform/src/types/flow/index.ts](../../../../sources/dataelement__bisheng/src/frontend/platform/src/types/flow/index.ts)<br>[src/frontend/platform/src/types/entities/index.ts](../../../../sources/dataelement__bisheng/src/frontend/platform/src/types/entities/index.ts)<br>[src/frontend/platform/src/types/components/index.ts](../../../../sources/dataelement__bisheng/src/frontend/platform/src/types/components/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 61 | [src/frontend/platform/src/pages/BuildPage/bench/DialogueWork.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/bench/DialogueWork.tsx)<br>[src/frontend/platform/src/pages/BuildPage/bench/FormInput.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/bench/FormInput.tsx)<br>[src/frontend/platform/src/pages/BuildPage/bench/IconUploadSection.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/bench/IconUploadSection.tsx)<br>[src/frontend/platform/src/pages/BuildPage/bench/index.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/bench/index.tsx)<br>[src/frontend/platform/src/pages/BuildPage/bench/KnowledgeSpace.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/bench/KnowledgeSpace.tsx)<br>[src/frontend/platform/src/pages/BuildPage/bench/LingSiWork.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/bench/LingSiWork.tsx)<br>[src/frontend/platform/src/pages/BuildPage/bench/ModelManagement.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/bench/ModelManagement.tsx)<br>[src/frontend/platform/src/pages/BuildPage/bench/Preview.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/bench/Preview.tsx) |
| security | 31 | [SECURITY.md](../../../../sources/dataelement__bisheng/SECURITY.md)<br>[src/frontend/platform/src/components/Pro/security/AssistantSetting.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/components/Pro/security/AssistantSetting.tsx)<br>[src/frontend/platform/src/components/Pro/security/FlowSetting.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/components/Pro/security/FlowSetting.tsx)<br>[src/frontend/platform/src/components/Pro/security/FormSet.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/components/Pro/security/FormSet.tsx)<br>[src/frontend/platform/src/components/Pro/security/FormView.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/components/Pro/security/FormView.tsx)<br>[src/frontend/platform/src/assets/text-security-disc.woff](../../../../sources/dataelement__bisheng/src/frontend/platform/src/assets/text-security-disc.woff)<br>[src/frontend/client/src/hooks/queries/auth/index.ts](../../../../sources/dataelement__bisheng/src/frontend/client/src/hooks/queries/auth/index.ts)<br>[src/frontend/client/src/hooks/queries/auth/mutations.ts](../../../../sources/dataelement__bisheng/src/frontend/client/src/hooks/queries/auth/mutations.ts) |
| ci | 5 | [.github/workflows/base_ci.yml](../../../../sources/dataelement__bisheng/.github/workflows/base_ci.yml)<br>[.github/workflows/build_linux_only.yml](../../../../sources/dataelement__bisheng/.github/workflows/build_linux_only.yml)<br>[.github/workflows/ci.yml](../../../../sources/dataelement__bisheng/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/dataelement__bisheng/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/dataelement__bisheng/.github/workflows/test.yml) |
| container | 11 | [src/frontend/Dockerfile](../../../../sources/dataelement__bisheng/src/frontend/Dockerfile)<br>[src/frontend/platform/Dockerfile](../../../../sources/dataelement__bisheng/src/frontend/platform/Dockerfile)<br>[src/frontend/platform/src/pages/Dashboard/components/charts/BaseChart.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/Dashboard/components/charts/BaseChart.tsx)<br>[src/frontend/platform/src/pages/Dashboard/components/charts/ChartContainer.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/Dashboard/components/charts/ChartContainer.tsx)<br>[src/frontend/platform/src/pages/Dashboard/components/charts/MetricCard.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/Dashboard/components/charts/MetricCard.tsx)<br>[src/frontend/platform/src/pages/Dashboard/components/charts/QueryFilter.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/Dashboard/components/charts/QueryFilter.tsx)<br>[src/backend/Dockerfile](../../../../sources/dataelement__bisheng/src/backend/Dockerfile)<br>[docker/docker-compose-ft.yml](../../../../sources/dataelement__bisheng/docker/docker-compose-ft.yml) |
| instruction | 0 | 명확하지 않음 |
| docs | 17 | [README_CN.md](../../../../sources/dataelement__bisheng/README_CN.md)<br>[README_JPN.md](../../../../sources/dataelement__bisheng/README_JPN.md)<br>[README.md](../../../../sources/dataelement__bisheng/README.md)<br>[src/frontend/platform/README.md](../../../../sources/dataelement__bisheng/src/frontend/platform/README.md)<br>[src/frontend/platform/src/workspace/README.md](../../../../sources/dataelement__bisheng/src/frontend/platform/src/workspace/README.md)<br>[src/frontend/client/readme.md](../../../../sources/dataelement__bisheng/src/frontend/client/readme.md)<br>[src/frontend/client/src/pages/appChat/README.md](../../../../sources/dataelement__bisheng/src/frontend/client/src/pages/appChat/README.md)<br>[src/backend/README.md](../../../../sources/dataelement__bisheng/src/backend/README.md) |
| config | 6 | [src/frontend/platform/package.json](../../../../sources/dataelement__bisheng/src/frontend/platform/package.json)<br>[src/frontend/platform/tsconfig.json](../../../../sources/dataelement__bisheng/src/frontend/platform/tsconfig.json)<br>[src/frontend/client/package.json](../../../../sources/dataelement__bisheng/src/frontend/client/package.json)<br>[src/frontend/client/tsconfig.json](../../../../sources/dataelement__bisheng/src/frontend/client/tsconfig.json)<br>[src/backend/pyproject.toml](../../../../sources/dataelement__bisheng/src/backend/pyproject.toml)<br>[src/backend/uv.lock](../../../../sources/dataelement__bisheng/src/backend/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 61 | [src/frontend/platform/src/pages/BuildPage/bench/DialogueWork.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/bench/DialogueWork.tsx)<br>[src/frontend/platform/src/pages/BuildPage/bench/FormInput.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/bench/FormInput.tsx)<br>[src/frontend/platform/src/pages/BuildPage/bench/IconUploadSection.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/bench/IconUploadSection.tsx)<br>[src/frontend/platform/src/pages/BuildPage/bench/index.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/bench/index.tsx)<br>[src/frontend/platform/src/pages/BuildPage/bench/KnowledgeSpace.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/bench/KnowledgeSpace.tsx)<br>[src/frontend/platform/src/pages/BuildPage/bench/LingSiWork.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/BuildPage/bench/LingSiWork.tsx) |
| CI workflow | 5 | [.github/workflows/base_ci.yml](../../../../sources/dataelement__bisheng/.github/workflows/base_ci.yml)<br>[.github/workflows/build_linux_only.yml](../../../../sources/dataelement__bisheng/.github/workflows/build_linux_only.yml)<br>[.github/workflows/ci.yml](../../../../sources/dataelement__bisheng/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/dataelement__bisheng/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/dataelement__bisheng/.github/workflows/test.yml) |
| 컨테이너/배포 | 11 | [src/frontend/Dockerfile](../../../../sources/dataelement__bisheng/src/frontend/Dockerfile)<br>[src/frontend/platform/Dockerfile](../../../../sources/dataelement__bisheng/src/frontend/platform/Dockerfile)<br>[src/frontend/platform/src/pages/Dashboard/components/charts/BaseChart.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/Dashboard/components/charts/BaseChart.tsx)<br>[src/frontend/platform/src/pages/Dashboard/components/charts/ChartContainer.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/Dashboard/components/charts/ChartContainer.tsx)<br>[src/frontend/platform/src/pages/Dashboard/components/charts/MetricCard.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/Dashboard/components/charts/MetricCard.tsx)<br>[src/frontend/platform/src/pages/Dashboard/components/charts/QueryFilter.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/pages/Dashboard/components/charts/QueryFilter.tsx) |
| 보안/정책 | 31 | [SECURITY.md](../../../../sources/dataelement__bisheng/SECURITY.md)<br>[src/frontend/platform/src/components/Pro/security/AssistantSetting.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/components/Pro/security/AssistantSetting.tsx)<br>[src/frontend/platform/src/components/Pro/security/FlowSetting.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/components/Pro/security/FlowSetting.tsx)<br>[src/frontend/platform/src/components/Pro/security/FormSet.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/components/Pro/security/FormSet.tsx)<br>[src/frontend/platform/src/components/Pro/security/FormView.tsx](../../../../sources/dataelement__bisheng/src/frontend/platform/src/components/Pro/security/FormView.tsx)<br>[src/frontend/platform/src/assets/text-security-disc.woff](../../../../sources/dataelement__bisheng/src/frontend/platform/src/assets/text-security-disc.woff) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `src/frontend/client/src/types/chat/mcp.ts`, `src/backend/bisheng/mcp_manage/__init__.py`, `src/backend/bisheng/mcp_manage/constant.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/frontend/platform/src/App.css`, `src/frontend/platform/src/App.tsx`, `src/frontend/platform/src/index.tsx`.
3. agent/tool runtime 매핑: `src/frontend/platform/src/util/hook.ts`, `src/frontend/platform/src/pages/Dashboard/hook.ts`, `src/frontend/platform/src/pages/BuildPage/hook.ts`.
4. retrieval/memory/indexing 확인: `src/frontend/platform/index.html`, `src/frontend/platform/src/index.tsx`, `src/frontend/platform/src/types/typesContext/index.ts`.
5. test/eval 파일로 동작 검증: `src/frontend/platform/src/pages/BuildPage/bench/DialogueWork.tsx`, `src/frontend/platform/src/pages/BuildPage/bench/FormInput.tsx`, `src/frontend/platform/src/pages/BuildPage/bench/IconUploadSection.tsx`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 BISHENG is an open LLM devops platform for next generation Enterprise AI applications. Powerful and comprehensive featur. 핵심 구조 신호는 TypeScript, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
