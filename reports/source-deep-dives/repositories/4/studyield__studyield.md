# studyield/studyield Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Open-source AI learning platform with exam cloning, multi-agent problem solving, knowledge graphs, and teach-back evaluation. Self-hosted, 12 languages, web + mobile.

## 요약

- 조사 단위: `sources/studyield__studyield` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 404 files, 73 directories, depth score 106, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=frontend/src/hooks/useMediaQuery.ts, frontend/src/hooks/usePlanGate.ts, backend/src/modules/problem-solver/agents/alternative-method.agent.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | studyield/studyield |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 50 |
| Forks | 29 |
| License | AGPL-3.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/studyield__studyield](../../../../sources/studyield__studyield) |
| Existing report | [reports/llm-wiki/repositories/studyield__studyield.md](../../../llm-wiki/repositories/studyield__studyield.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 404 / 73 |
| Max observed depth | 6 |
| Top directories | .github, backend, frontend |
| Top extensions | .ts: 189, .tsx: 116, .json: 24, .md: 19, .sql: 18, (none): 12, .png: 6, .js: 5, .yml: 5, .example: 2, .svg: 2, .conf: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| backend | top-level component | 1 |
| frontend | top-level component | 1 |


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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 5 | [frontend/src/App.tsx](../../../../sources/studyield__studyield/frontend/src/App.tsx)<br>[frontend/src/index.css](../../../../sources/studyield__studyield/frontend/src/index.css)<br>[frontend/src/main.tsx](../../../../sources/studyield__studyield/frontend/src/main.tsx)<br>[backend/src/app.module.ts](../../../../sources/studyield__studyield/backend/src/app.module.ts)<br>[backend/src/main.ts](../../../../sources/studyield__studyield/backend/src/main.ts) |
| agentRuntime | 9 | [frontend/src/hooks/useMediaQuery.ts](../../../../sources/studyield__studyield/frontend/src/hooks/useMediaQuery.ts)<br>[frontend/src/hooks/usePlanGate.ts](../../../../sources/studyield__studyield/frontend/src/hooks/usePlanGate.ts)<br>[backend/src/modules/problem-solver/agents/alternative-method.agent.ts](../../../../sources/studyield__studyield/backend/src/modules/problem-solver/agents/alternative-method.agent.ts)<br>[backend/src/modules/problem-solver/agents/analysis.agent.ts](../../../../sources/studyield__studyield/backend/src/modules/problem-solver/agents/analysis.agent.ts)<br>[backend/src/modules/problem-solver/agents/base.agent.ts](../../../../sources/studyield__studyield/backend/src/modules/problem-solver/agents/base.agent.ts)<br>[backend/src/modules/problem-solver/agents/hint.agent.ts](../../../../sources/studyield__studyield/backend/src/modules/problem-solver/agents/hint.agent.ts)<br>[backend/src/modules/problem-solver/agents/index.ts](../../../../sources/studyield__studyield/backend/src/modules/problem-solver/agents/index.ts)<br>[backend/src/modules/problem-solver/agents/solver.agent.ts](../../../../sources/studyield__studyield/backend/src/modules/problem-solver/agents/solver.agent.ts) |
| mcp | 0 | not obvious |
| retrieval | 48 | [frontend/index.html](../../../../sources/studyield__studyield/frontend/index.html)<br>[frontend/src/index.css](../../../../sources/studyield__studyield/frontend/src/index.css)<br>[frontend/src/types/index.ts](../../../../sources/studyield__studyield/frontend/src/types/index.ts)<br>[frontend/src/stores/index.ts](../../../../sources/studyield__studyield/frontend/src/stores/index.ts)<br>[frontend/src/pages/index.ts](../../../../sources/studyield__studyield/frontend/src/pages/index.ts)<br>[frontend/src/pages/dashboard/index.ts](../../../../sources/studyield__studyield/frontend/src/pages/dashboard/index.ts)<br>[frontend/src/components/landing/index.ts](../../../../sources/studyield__studyield/frontend/src/components/landing/index.ts)<br>[backend/src/modules/users/index.ts](../../../../sources/studyield__studyield/backend/src/modules/users/index.ts) |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 17 | [SECURITY.md](../../../../sources/studyield__studyield/SECURITY.md)<br>[frontend/src/services/auth.ts](../../../../sources/studyield__studyield/frontend/src/services/auth.ts)<br>[backend/src/modules/code-sandbox/code-sandbox.controller.ts](../../../../sources/studyield__studyield/backend/src/modules/code-sandbox/code-sandbox.controller.ts)<br>[backend/src/modules/code-sandbox/code-sandbox.gateway.ts](../../../../sources/studyield__studyield/backend/src/modules/code-sandbox/code-sandbox.gateway.ts)<br>[backend/src/modules/code-sandbox/code-sandbox.module.ts](../../../../sources/studyield__studyield/backend/src/modules/code-sandbox/code-sandbox.module.ts)<br>[backend/src/modules/code-sandbox/code-sandbox.service.ts](../../../../sources/studyield__studyield/backend/src/modules/code-sandbox/code-sandbox.service.ts)<br>[backend/src/modules/code-sandbox/index.ts](../../../../sources/studyield__studyield/backend/src/modules/code-sandbox/index.ts)<br>[backend/src/modules/auth/auth.controller.ts](../../../../sources/studyield__studyield/backend/src/modules/auth/auth.controller.ts) |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/studyield__studyield/.github/workflows/ci.yml) |
| container | 3 | [docker-compose.yml](../../../../sources/studyield__studyield/docker-compose.yml)<br>[frontend/Dockerfile](../../../../sources/studyield__studyield/frontend/Dockerfile)<br>[backend/Dockerfile](../../../../sources/studyield__studyield/backend/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 13 | [README_AR.md](../../../../sources/studyield__studyield/README_AR.md)<br>[README_BN.md](../../../../sources/studyield__studyield/README_BN.md)<br>[README_DE.md](../../../../sources/studyield__studyield/README_DE.md)<br>[README_ES.md](../../../../sources/studyield__studyield/README_ES.md)<br>[README_FR.md](../../../../sources/studyield__studyield/README_FR.md)<br>[README_HI.md](../../../../sources/studyield__studyield/README_HI.md)<br>[README_JA.md](../../../../sources/studyield__studyield/README_JA.md)<br>[README_KO.md](../../../../sources/studyield__studyield/README_KO.md) |
| config | 4 | [frontend/package.json](../../../../sources/studyield__studyield/frontend/package.json)<br>[frontend/tsconfig.json](../../../../sources/studyield__studyield/frontend/tsconfig.json)<br>[backend/package.json](../../../../sources/studyield__studyield/backend/package.json)<br>[backend/tsconfig.json](../../../../sources/studyield__studyield/backend/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 1 | [.github/workflows/ci.yml](../../../../sources/studyield__studyield/.github/workflows/ci.yml) |
| Containers / deploy | 3 | [docker-compose.yml](../../../../sources/studyield__studyield/docker-compose.yml)<br>[frontend/Dockerfile](../../../../sources/studyield__studyield/frontend/Dockerfile)<br>[backend/Dockerfile](../../../../sources/studyield__studyield/backend/Dockerfile) |
| Security / policy | 17 | [SECURITY.md](../../../../sources/studyield__studyield/SECURITY.md)<br>[frontend/src/services/auth.ts](../../../../sources/studyield__studyield/frontend/src/services/auth.ts)<br>[backend/src/modules/code-sandbox/code-sandbox.controller.ts](../../../../sources/studyield__studyield/backend/src/modules/code-sandbox/code-sandbox.controller.ts)<br>[backend/src/modules/code-sandbox/code-sandbox.gateway.ts](../../../../sources/studyield__studyield/backend/src/modules/code-sandbox/code-sandbox.gateway.ts)<br>[backend/src/modules/code-sandbox/code-sandbox.module.ts](../../../../sources/studyield__studyield/backend/src/modules/code-sandbox/code-sandbox.module.ts)<br>[backend/src/modules/code-sandbox/code-sandbox.service.ts](../../../../sources/studyield__studyield/backend/src/modules/code-sandbox/code-sandbox.service.ts) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | test/eval path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `frontend/src/hooks/useMediaQuery.ts`, `frontend/src/hooks/usePlanGate.ts`, `backend/src/modules/problem-solver/agents/alternative-method.agent.ts`.
2. Trace execution through entrypoints: `frontend/src/App.tsx`, `frontend/src/index.css`, `frontend/src/main.tsx`.
3. Map agent/tool runtime through: `frontend/src/hooks/useMediaQuery.ts`, `frontend/src/hooks/usePlanGate.ts`, `backend/src/modules/problem-solver/agents/alternative-method.agent.ts`.
4. Inspect retrieval/memory/indexing through: `frontend/index.html`, `frontend/src/index.css`, `frontend/src/types/index.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Open source AI learning platform with exam cloning, multi agent problem solving, knowledge graphs, and teach back evalua. 핵심 구조 신호는 TypeScript, docker-compose.yml, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
