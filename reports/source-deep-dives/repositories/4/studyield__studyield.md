# studyield/studyield 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Open-source AI learning platform with exam cloning, multi-agent problem solving, knowledge graphs, and teach-back evaluation. Self-hosted, 12 languages, web + mobile.

## 요약

- 조사 단위: `sources/studyield__studyield` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 404 files, 73 directories, depth score 100, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=frontend/src/hooks/useMediaQuery.ts, frontend/src/hooks/usePlanGate.ts, backend/src/modules/problem-solver/agents/alternative-method.agent.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | studyield/studyield |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 50 |
| Forks | 29 |
| License | AGPL-3.0 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/studyield__studyield](../../../../sources/studyield__studyield) |
| 기존 보고서 | [reports/llm-wiki/repositories/studyield__studyield.md](../../../llm-wiki/repositories/studyield__studyield.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 404 / 73 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, backend, frontend |
| 상위 확장자 | .ts: 189, .tsx: 116, .json: 24, .md: 19, .sql: 18, (none): 12, .png: 6, .js: 5, .yml: 5, .example: 2, .svg: 2, .conf: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| backend | top-level component | 1 |
| frontend | top-level component | 1 |


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
| agentRuntime | [frontend/src/hooks/useMediaQuery.ts](../../../../sources/studyield__studyield/frontend/src/hooks/useMediaQuery.ts) | agentRuntime signal |
| agentRuntime | [frontend/src/hooks/usePlanGate.ts](../../../../sources/studyield__studyield/frontend/src/hooks/usePlanGate.ts) | agentRuntime signal |
| agentRuntime | [backend/src/modules/problem-solver/agents/alternative-method.agent.ts](../../../../sources/studyield__studyield/backend/src/modules/problem-solver/agents/alternative-method.agent.ts) | agentRuntime signal |
| agentRuntime | [backend/src/modules/problem-solver/agents/analysis.agent.ts](../../../../sources/studyield__studyield/backend/src/modules/problem-solver/agents/analysis.agent.ts) | agentRuntime signal |
| entrypoints | [frontend/src/App.tsx](../../../../sources/studyield__studyield/frontend/src/App.tsx) | entrypoints signal |
| entrypoints | [frontend/src/index.css](../../../../sources/studyield__studyield/frontend/src/index.css) | entrypoints signal |
| entrypoints | [frontend/src/main.tsx](../../../../sources/studyield__studyield/frontend/src/main.tsx) | entrypoints signal |
| entrypoints | [backend/src/app.module.ts](../../../../sources/studyield__studyield/backend/src/app.module.ts) | entrypoints signal |
| config | [frontend/package.json](../../../../sources/studyield__studyield/frontend/package.json) | config signal |
| config | [frontend/tsconfig.json](../../../../sources/studyield__studyield/frontend/tsconfig.json) | config signal |
| config | [backend/package.json](../../../../sources/studyield__studyield/backend/package.json) | config signal |
| config | [backend/tsconfig.json](../../../../sources/studyield__studyield/backend/tsconfig.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 5 | [frontend/src/App.tsx](../../../../sources/studyield__studyield/frontend/src/App.tsx)<br>[frontend/src/index.css](../../../../sources/studyield__studyield/frontend/src/index.css)<br>[frontend/src/main.tsx](../../../../sources/studyield__studyield/frontend/src/main.tsx)<br>[backend/src/app.module.ts](../../../../sources/studyield__studyield/backend/src/app.module.ts)<br>[backend/src/main.ts](../../../../sources/studyield__studyield/backend/src/main.ts) |
| agentRuntime | 9 | [frontend/src/hooks/useMediaQuery.ts](../../../../sources/studyield__studyield/frontend/src/hooks/useMediaQuery.ts)<br>[frontend/src/hooks/usePlanGate.ts](../../../../sources/studyield__studyield/frontend/src/hooks/usePlanGate.ts)<br>[backend/src/modules/problem-solver/agents/alternative-method.agent.ts](../../../../sources/studyield__studyield/backend/src/modules/problem-solver/agents/alternative-method.agent.ts)<br>[backend/src/modules/problem-solver/agents/analysis.agent.ts](../../../../sources/studyield__studyield/backend/src/modules/problem-solver/agents/analysis.agent.ts)<br>[backend/src/modules/problem-solver/agents/base.agent.ts](../../../../sources/studyield__studyield/backend/src/modules/problem-solver/agents/base.agent.ts)<br>[backend/src/modules/problem-solver/agents/hint.agent.ts](../../../../sources/studyield__studyield/backend/src/modules/problem-solver/agents/hint.agent.ts)<br>[backend/src/modules/problem-solver/agents/index.ts](../../../../sources/studyield__studyield/backend/src/modules/problem-solver/agents/index.ts)<br>[backend/src/modules/problem-solver/agents/solver.agent.ts](../../../../sources/studyield__studyield/backend/src/modules/problem-solver/agents/solver.agent.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 48 | [frontend/index.html](../../../../sources/studyield__studyield/frontend/index.html)<br>[frontend/src/index.css](../../../../sources/studyield__studyield/frontend/src/index.css)<br>[frontend/src/types/index.ts](../../../../sources/studyield__studyield/frontend/src/types/index.ts)<br>[frontend/src/stores/index.ts](../../../../sources/studyield__studyield/frontend/src/stores/index.ts)<br>[frontend/src/pages/index.ts](../../../../sources/studyield__studyield/frontend/src/pages/index.ts)<br>[frontend/src/pages/dashboard/index.ts](../../../../sources/studyield__studyield/frontend/src/pages/dashboard/index.ts)<br>[frontend/src/components/landing/index.ts](../../../../sources/studyield__studyield/frontend/src/components/landing/index.ts)<br>[backend/src/modules/users/index.ts](../../../../sources/studyield__studyield/backend/src/modules/users/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 0 | 명확하지 않음 |
| security | 17 | [SECURITY.md](../../../../sources/studyield__studyield/SECURITY.md)<br>[frontend/src/services/auth.ts](../../../../sources/studyield__studyield/frontend/src/services/auth.ts)<br>[backend/src/modules/code-sandbox/code-sandbox.controller.ts](../../../../sources/studyield__studyield/backend/src/modules/code-sandbox/code-sandbox.controller.ts)<br>[backend/src/modules/code-sandbox/code-sandbox.gateway.ts](../../../../sources/studyield__studyield/backend/src/modules/code-sandbox/code-sandbox.gateway.ts)<br>[backend/src/modules/code-sandbox/code-sandbox.module.ts](../../../../sources/studyield__studyield/backend/src/modules/code-sandbox/code-sandbox.module.ts)<br>[backend/src/modules/code-sandbox/code-sandbox.service.ts](../../../../sources/studyield__studyield/backend/src/modules/code-sandbox/code-sandbox.service.ts)<br>[backend/src/modules/code-sandbox/index.ts](../../../../sources/studyield__studyield/backend/src/modules/code-sandbox/index.ts)<br>[backend/src/modules/auth/auth.controller.ts](../../../../sources/studyield__studyield/backend/src/modules/auth/auth.controller.ts) |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/studyield__studyield/.github/workflows/ci.yml) |
| container | 3 | [docker-compose.yml](../../../../sources/studyield__studyield/docker-compose.yml)<br>[frontend/Dockerfile](../../../../sources/studyield__studyield/frontend/Dockerfile)<br>[backend/Dockerfile](../../../../sources/studyield__studyield/backend/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 13 | [README_AR.md](../../../../sources/studyield__studyield/README_AR.md)<br>[README_BN.md](../../../../sources/studyield__studyield/README_BN.md)<br>[README_DE.md](../../../../sources/studyield__studyield/README_DE.md)<br>[README_ES.md](../../../../sources/studyield__studyield/README_ES.md)<br>[README_FR.md](../../../../sources/studyield__studyield/README_FR.md)<br>[README_HI.md](../../../../sources/studyield__studyield/README_HI.md)<br>[README_JA.md](../../../../sources/studyield__studyield/README_JA.md)<br>[README_KO.md](../../../../sources/studyield__studyield/README_KO.md) |
| config | 4 | [frontend/package.json](../../../../sources/studyield__studyield/frontend/package.json)<br>[frontend/tsconfig.json](../../../../sources/studyield__studyield/frontend/tsconfig.json)<br>[backend/package.json](../../../../sources/studyield__studyield/backend/package.json)<br>[backend/tsconfig.json](../../../../sources/studyield__studyield/backend/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 0 | 명확하지 않음 |
| CI workflow | 1 | [.github/workflows/ci.yml](../../../../sources/studyield__studyield/.github/workflows/ci.yml) |
| 컨테이너/배포 | 3 | [docker-compose.yml](../../../../sources/studyield__studyield/docker-compose.yml)<br>[frontend/Dockerfile](../../../../sources/studyield__studyield/frontend/Dockerfile)<br>[backend/Dockerfile](../../../../sources/studyield__studyield/backend/Dockerfile) |
| 보안/정책 | 17 | [SECURITY.md](../../../../sources/studyield__studyield/SECURITY.md)<br>[frontend/src/services/auth.ts](../../../../sources/studyield__studyield/frontend/src/services/auth.ts)<br>[backend/src/modules/code-sandbox/code-sandbox.controller.ts](../../../../sources/studyield__studyield/backend/src/modules/code-sandbox/code-sandbox.controller.ts)<br>[backend/src/modules/code-sandbox/code-sandbox.gateway.ts](../../../../sources/studyield__studyield/backend/src/modules/code-sandbox/code-sandbox.gateway.ts)<br>[backend/src/modules/code-sandbox/code-sandbox.module.ts](../../../../sources/studyield__studyield/backend/src/modules/code-sandbox/code-sandbox.module.ts)<br>[backend/src/modules/code-sandbox/code-sandbox.service.ts](../../../../sources/studyield__studyield/backend/src/modules/code-sandbox/code-sandbox.service.ts) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | test/eval 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `frontend/src/hooks/useMediaQuery.ts`, `frontend/src/hooks/usePlanGate.ts`, `backend/src/modules/problem-solver/agents/alternative-method.agent.ts`.
2. entrypoint를 따라 실행 흐름 확인: `frontend/src/App.tsx`, `frontend/src/index.css`, `frontend/src/main.tsx`.
3. agent/tool runtime 매핑: `frontend/src/hooks/useMediaQuery.ts`, `frontend/src/hooks/usePlanGate.ts`, `backend/src/modules/problem-solver/agents/alternative-method.agent.ts`.
4. retrieval/memory/indexing 확인: `frontend/index.html`, `frontend/src/index.css`, `frontend/src/types/index.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Open source AI learning platform with exam cloning, multi agent problem solving, knowledge graphs, and teach back evalua. 핵심 구조 신호는 TypeScript, docker-compose.yml, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
