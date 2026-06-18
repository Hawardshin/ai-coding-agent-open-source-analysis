# lxxzdrgnl/SAJUGURI 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

AI-Powered Saju(Korean Astrology) Analysis Service (Built with LLM & RAG)

## 요약

- 조사 단위: `sources/lxxzdrgnl__SAJUGURI` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 558 files, 114 directories, depth score 119, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 retrieval=packages/design/src/index.ts, packages/core/src/index.ts, packages/api-client/src/index.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | lxxzdrgnl/SAJUGURI |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/lxxzdrgnl__SAJUGURI](../../../../sources/lxxzdrgnl__SAJUGURI) |
| 기존 보고서 | [reports/korea-trending/repositories/lxxzdrgnl__SAJUGURI.md](../../../korea-trending/repositories/lxxzdrgnl__SAJUGURI.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 558 / 114 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .claude, .github, apps, backend, docs, frontend, packages, screenshot |
| 상위 확장자 | .py: 216, .ts: 105, .tsx: 95, .vue: 40, .md: 28, .json: 21, (none): 11, .png: 9, .svg: 6, .webp: 5, .mjs: 4, .yaml: 4 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 32 |
| packages/api-client | packages workspace | 17 |
| packages/design | packages workspace | 10 |
| packages/core | packages workspace | 8 |
| apps/web | apps workspace | 6 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| backend | top-level component | 1 |
| frontend | top-level component | 1 |
| packages | source boundary | 1 |
| screenshot | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | turbo dev --filter=web |
| build | package.json | build | turbo build |
| test | package.json | test | turbo test |
| quality | package.json | typecheck | turbo typecheck |


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
| retrieval | [packages/design/src/index.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/design/src/index.ts) | retrieval signal |
| retrieval | [packages/core/src/index.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/core/src/index.ts) | retrieval signal |
| retrieval | [packages/api-client/src/index.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/api-client/src/index.ts) | retrieval signal |
| retrieval | [frontend/pages/index.vue](../../../../sources/lxxzdrgnl__SAJUGURI/frontend/pages/index.vue) | retrieval signal |
| entrypoints | [backend/main.py](../../../../sources/lxxzdrgnl__SAJUGURI/backend/main.py) | entrypoints signal |
| docs | [README.md](../../../../sources/lxxzdrgnl__SAJUGURI/README.md) | docs signal |
| docs | [frontend/README.md](../../../../sources/lxxzdrgnl__SAJUGURI/frontend/README.md) | docs signal |
| docs | [docs/deploy-web-server.md](../../../../sources/lxxzdrgnl__SAJUGURI/docs/deploy-web-server.md) | docs signal |
| docs | [docs/design.md](../../../../sources/lxxzdrgnl__SAJUGURI/docs/design.md) | docs signal |
| eval | [packages/design/src/tokens.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/design/src/tokens.test.ts) | eval signal |
| eval | [packages/core/src/recentInput.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/core/src/recentInput.test.ts) | eval signal |
| eval | [packages/core/src/solar.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/core/src/solar.test.ts) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [packages/design/src/index.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/design/src/index.ts)<br>[packages/core/src/index.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/core/src/index.ts)<br>[packages/api-client/src/index.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/api-client/src/index.ts)<br>[backend/main.py](../../../../sources/lxxzdrgnl__SAJUGURI/backend/main.py) |
| agentRuntime | 8 | [AGENTS.md](../../../../sources/lxxzdrgnl__SAJUGURI/AGENTS.md)<br>[backend/llm/tools/__init__.py](../../../../sources/lxxzdrgnl__SAJUGURI/backend/llm/tools/__init__.py)<br>[backend/llm/tools/chart_payloads.py](../../../../sources/lxxzdrgnl__SAJUGURI/backend/llm/tools/chart_payloads.py)<br>[backend/llm/tools/saju_tools.py](../../../../sources/lxxzdrgnl__SAJUGURI/backend/llm/tools/saju_tools.py)<br>[backend/llm/reports/runner.py](../../../../sources/lxxzdrgnl__SAJUGURI/backend/llm/reports/runner.py)<br>[backend/engine/analysis/context_ranker.py](../../../../sources/lxxzdrgnl__SAJUGURI/backend/engine/analysis/context_ranker.py)<br>[apps/web/lib/hooks/useGenerationJob.ts](../../../../sources/lxxzdrgnl__SAJUGURI/apps/web/lib/hooks/useGenerationJob.ts)<br>[apps/web/lib/hooks/useShareModal.ts](../../../../sources/lxxzdrgnl__SAJUGURI/apps/web/lib/hooks/useShareModal.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 21 | [packages/design/src/index.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/design/src/index.ts)<br>[packages/core/src/index.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/core/src/index.ts)<br>[packages/api-client/src/index.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/api-client/src/index.ts)<br>[frontend/pages/index.vue](../../../../sources/lxxzdrgnl__SAJUGURI/frontend/pages/index.vue)<br>[frontend/pages/question/index.vue](../../../../sources/lxxzdrgnl__SAJUGURI/frontend/pages/question/index.vue)<br>[frontend/pages/daily/index.vue](../../../../sources/lxxzdrgnl__SAJUGURI/frontend/pages/daily/index.vue)<br>[frontend/pages/chat/index.vue](../../../../sources/lxxzdrgnl__SAJUGURI/frontend/pages/chat/index.vue)<br>[backend/scripts/etl/ingest_corpus.py](../../../../sources/lxxzdrgnl__SAJUGURI/backend/scripts/etl/ingest_corpus.py) |
| spec | 11 | [packages/design/package.json](../../../../sources/lxxzdrgnl__SAJUGURI/packages/design/package.json)<br>[packages/design/tsconfig.json](../../../../sources/lxxzdrgnl__SAJUGURI/packages/design/tsconfig.json)<br>[packages/design/src/index.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/design/src/index.ts)<br>[packages/design/src/tokens.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/design/src/tokens.test.ts)<br>[packages/design/src/tokens.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/design/src/tokens.ts)<br>[docs/design.md](../../../../sources/lxxzdrgnl__SAJUGURI/docs/design.md)<br>[docs/superpowers/specs/2026-04-30-chat-agent-design.md](../../../../sources/lxxzdrgnl__SAJUGURI/docs/superpowers/specs/2026-04-30-chat-agent-design.md)<br>[docs/superpowers/specs/2026-06-02-multi-domain-divination-platform-design.md](../../../../sources/lxxzdrgnl__SAJUGURI/docs/superpowers/specs/2026-06-02-multi-domain-divination-platform-design.md) |
| eval | 87 | [packages/design/src/tokens.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/design/src/tokens.test.ts)<br>[packages/core/src/recentInput.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/core/src/recentInput.test.ts)<br>[packages/core/src/solar.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/core/src/solar.test.ts)<br>[packages/core/src/sse.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/core/src/sse.test.ts)<br>[packages/core/src/storage.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/core/src/storage.test.ts)<br>[packages/api-client/src/auth.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/api-client/src/auth.test.ts)<br>[packages/api-client/src/chat.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/api-client/src/chat.test.ts)<br>[packages/api-client/src/cities.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/api-client/src/cities.test.ts) |
| security | 16 | [packages/api-client/src/auth.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/api-client/src/auth.test.ts)<br>[packages/api-client/src/auth.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/api-client/src/auth.ts)<br>[frontend/stores/auth.ts](../../../../sources/lxxzdrgnl__SAJUGURI/frontend/stores/auth.ts)<br>[frontend/plugins/auth.client.ts](../../../../sources/lxxzdrgnl__SAJUGURI/frontend/plugins/auth.client.ts)<br>[frontend/pages/auth/callback.vue](../../../../sources/lxxzdrgnl__SAJUGURI/frontend/pages/auth/callback.vue)<br>[docs/superpowers/plans/2026-06-12-phase1b-auth-profiles-deploy.md](../../../../sources/lxxzdrgnl__SAJUGURI/docs/superpowers/plans/2026-06-12-phase1b-auth-profiles-deploy.md)<br>[backend/tests/test_auth_cookie.py](../../../../sources/lxxzdrgnl__SAJUGURI/backend/tests/test_auth_cookie.py)<br>[backend/tests/test_auth_native_mode.py](../../../../sources/lxxzdrgnl__SAJUGURI/backend/tests/test_auth_native_mode.py) |
| ci | 2 | [.github/workflows/deploy-backend.yml](../../../../sources/lxxzdrgnl__SAJUGURI/.github/workflows/deploy-backend.yml)<br>[.github/workflows/deploy-web.yml](../../../../sources/lxxzdrgnl__SAJUGURI/.github/workflows/deploy-web.yml) |
| container | 4 | [docker-compose.yml](../../../../sources/lxxzdrgnl__SAJUGURI/docker-compose.yml)<br>[frontend/Dockerfile](../../../../sources/lxxzdrgnl__SAJUGURI/frontend/Dockerfile)<br>[backend/Dockerfile](../../../../sources/lxxzdrgnl__SAJUGURI/backend/Dockerfile)<br>[apps/web/Dockerfile](../../../../sources/lxxzdrgnl__SAJUGURI/apps/web/Dockerfile) |
| instruction | 1 | [AGENTS.md](../../../../sources/lxxzdrgnl__SAJUGURI/AGENTS.md) |
| docs | 28 | [README.md](../../../../sources/lxxzdrgnl__SAJUGURI/README.md)<br>[frontend/README.md](../../../../sources/lxxzdrgnl__SAJUGURI/frontend/README.md)<br>[docs/deploy-web-server.md](../../../../sources/lxxzdrgnl__SAJUGURI/docs/deploy-web-server.md)<br>[docs/design.md](../../../../sources/lxxzdrgnl__SAJUGURI/docs/design.md)<br>[docs/superpowers/specs/2026-04-30-chat-agent-design.md](../../../../sources/lxxzdrgnl__SAJUGURI/docs/superpowers/specs/2026-04-30-chat-agent-design.md)<br>[docs/superpowers/specs/2026-06-02-multi-domain-divination-platform-design.md](../../../../sources/lxxzdrgnl__SAJUGURI/docs/superpowers/specs/2026-06-02-multi-domain-divination-platform-design.md)<br>[docs/superpowers/specs/2026-06-12-mobile-ui-overhaul-design.md](../../../../sources/lxxzdrgnl__SAJUGURI/docs/superpowers/specs/2026-06-12-mobile-ui-overhaul-design.md)<br>[docs/superpowers/specs/2026-06-13-compatibility-report-design.md](../../../../sources/lxxzdrgnl__SAJUGURI/docs/superpowers/specs/2026-06-13-compatibility-report-design.md) |
| config | 17 | [package.json](../../../../sources/lxxzdrgnl__SAJUGURI/package.json)<br>[pnpm-workspace.yaml](../../../../sources/lxxzdrgnl__SAJUGURI/pnpm-workspace.yaml)<br>[turbo.json](../../../../sources/lxxzdrgnl__SAJUGURI/turbo.json)<br>[packages/design/package.json](../../../../sources/lxxzdrgnl__SAJUGURI/packages/design/package.json)<br>[packages/design/tsconfig.json](../../../../sources/lxxzdrgnl__SAJUGURI/packages/design/tsconfig.json)<br>[packages/core/package.json](../../../../sources/lxxzdrgnl__SAJUGURI/packages/core/package.json)<br>[packages/core/tsconfig.json](../../../../sources/lxxzdrgnl__SAJUGURI/packages/core/tsconfig.json)<br>[packages/api-client/package.json](../../../../sources/lxxzdrgnl__SAJUGURI/packages/api-client/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 87 | [packages/design/src/tokens.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/design/src/tokens.test.ts)<br>[packages/core/src/recentInput.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/core/src/recentInput.test.ts)<br>[packages/core/src/solar.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/core/src/solar.test.ts)<br>[packages/core/src/sse.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/core/src/sse.test.ts)<br>[packages/core/src/storage.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/core/src/storage.test.ts)<br>[packages/api-client/src/auth.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/api-client/src/auth.test.ts) |
| CI workflow | 2 | [.github/workflows/deploy-backend.yml](../../../../sources/lxxzdrgnl__SAJUGURI/.github/workflows/deploy-backend.yml)<br>[.github/workflows/deploy-web.yml](../../../../sources/lxxzdrgnl__SAJUGURI/.github/workflows/deploy-web.yml) |
| 컨테이너/배포 | 4 | [docker-compose.yml](../../../../sources/lxxzdrgnl__SAJUGURI/docker-compose.yml)<br>[frontend/Dockerfile](../../../../sources/lxxzdrgnl__SAJUGURI/frontend/Dockerfile)<br>[backend/Dockerfile](../../../../sources/lxxzdrgnl__SAJUGURI/backend/Dockerfile)<br>[apps/web/Dockerfile](../../../../sources/lxxzdrgnl__SAJUGURI/apps/web/Dockerfile) |
| 보안/정책 | 16 | [packages/api-client/src/auth.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/api-client/src/auth.test.ts)<br>[packages/api-client/src/auth.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/api-client/src/auth.ts)<br>[frontend/stores/auth.ts](../../../../sources/lxxzdrgnl__SAJUGURI/frontend/stores/auth.ts)<br>[frontend/plugins/auth.client.ts](../../../../sources/lxxzdrgnl__SAJUGURI/frontend/plugins/auth.client.ts)<br>[frontend/pages/auth/callback.vue](../../../../sources/lxxzdrgnl__SAJUGURI/frontend/pages/auth/callback.vue)<br>[docs/superpowers/plans/2026-06-12-phase1b-auth-profiles-deploy.md](../../../../sources/lxxzdrgnl__SAJUGURI/docs/superpowers/plans/2026-06-12-phase1b-auth-profiles-deploy.md) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/lxxzdrgnl__SAJUGURI/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/design/src/index.ts`, `packages/core/src/index.ts`, `packages/api-client/src/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `packages/design/src/index.ts`, `packages/core/src/index.ts`, `packages/api-client/src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `backend/llm/tools/__init__.py`, `backend/llm/tools/chart_payloads.py`.
4. retrieval/memory/indexing 확인: `packages/design/src/index.ts`, `packages/core/src/index.ts`, `packages/api-client/src/index.ts`.
5. test/eval 파일로 동작 검증: `packages/design/src/tokens.test.ts`, `packages/core/src/recentInput.test.ts`, `packages/core/src/solar.test.ts`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 AI Powered Saju Korean Astrology Analysis Service Built with LLM & RAG. 핵심 구조 신호는 Python, package.json, docker-compose.yml, README.md, AGENTS.md, ci이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
