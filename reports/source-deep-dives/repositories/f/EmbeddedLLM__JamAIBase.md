# EmbeddedLLM/JamAIBase 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

The collaborative spreadsheet for AI. Chain cells into powerful pipelines, experiment with prompts and models, and evaluate LLM responses in real-time. Work together seamlessly to build and iterate on AI applications.

## 요약

- 조사 단위: `sources/EmbeddedLLM__JamAIBase` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 876 files, 200 directories, depth score 125, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=services/api/tests/utils/test_mcp.py, services/api/src/owl/utils/mcp/__init__.py, services/api/src/owl/utils/mcp/custom_tools.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | EmbeddedLLM/JamAIBase |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 1098 |
| Forks | 41 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/EmbeddedLLM__JamAIBase](../../../../sources/EmbeddedLLM__JamAIBase) |
| 기존 보고서 | [reports/global-trending/repositories/EmbeddedLLM__JamAIBase.md](../../../global-trending/repositories/EmbeddedLLM__JamAIBase.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 876 / 200 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .github, clients, docker, docs, scripts, services |
| 상위 확장자 | .svelte: 300, .ts: 170, .py: 157, .md: 23, (none): 23, .webp: 22, .pdf: 21, .png: 19, .yml: 18, .json: 16, .svg: 15, .mp3: 9 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| services/app | services workspace | 71 |
| services/api | services workspace | 39 |
| docs | documentation surface | 4 |
| .github | ci surface | 1 |
| clients | source boundary | 1 |
| docker | documentation surface | 1 |
| scripts | top-level component | 1 |
| services | top-level component | 1 |
| services/replication | services workspace | 1 |


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
| mcp | [services/api/tests/utils/test_mcp.py](../../../../sources/EmbeddedLLM__JamAIBase/services/api/tests/utils/test_mcp.py) | mcp signal |
| mcp | [services/api/src/owl/utils/mcp/__init__.py](../../../../sources/EmbeddedLLM__JamAIBase/services/api/src/owl/utils/mcp/__init__.py) | mcp signal |
| mcp | [services/api/src/owl/utils/mcp/custom_tools.py](../../../../sources/EmbeddedLLM__JamAIBase/services/api/src/owl/utils/mcp/custom_tools.py) | mcp signal |
| mcp | [services/api/src/owl/utils/mcp/helpers.py](../../../../sources/EmbeddedLLM__JamAIBase/services/api/src/owl/utils/mcp/helpers.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/EmbeddedLLM__JamAIBase/AGENTS.md) | agentRuntime signal |
| agentRuntime | [services/app/src/hooks.server.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/src/hooks.server.ts) | agentRuntime signal |
| agentRuntime | [services/app/src/hooks.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/src/hooks.ts) | agentRuntime signal |
| entrypoints | [services/app/src/app.css](../../../../sources/EmbeddedLLM__JamAIBase/services/app/src/app.css) | entrypoints signal |
| entrypoints | [services/app/src/app.d.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/src/app.d.ts) | entrypoints signal |
| entrypoints | [services/app/src/app.html](../../../../sources/EmbeddedLLM__JamAIBase/services/app/src/app.html) | entrypoints signal |
| entrypoints | [services/api/src/owl/utils/mcp/server.py](../../../../sources/EmbeddedLLM__JamAIBase/services/api/src/owl/utils/mcp/server.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/EmbeddedLLM__JamAIBase/CLAUDE.md) | instruction signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 5 | [services/app/src/app.css](../../../../sources/EmbeddedLLM__JamAIBase/services/app/src/app.css)<br>[services/app/src/app.d.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/src/app.d.ts)<br>[services/app/src/app.html](../../../../sources/EmbeddedLLM__JamAIBase/services/app/src/app.html)<br>[services/api/src/owl/utils/mcp/server.py](../../../../sources/EmbeddedLLM__JamAIBase/services/api/src/owl/utils/mcp/server.py)<br>[clients/typescript/src/index.ts](../../../../sources/EmbeddedLLM__JamAIBase/clients/typescript/src/index.ts) |
| agentRuntime | 3 | [AGENTS.md](../../../../sources/EmbeddedLLM__JamAIBase/AGENTS.md)<br>[services/app/src/hooks.server.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/src/hooks.server.ts)<br>[services/app/src/hooks.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/src/hooks.ts) |
| mcp | 6 | [services/api/tests/utils/test_mcp.py](../../../../sources/EmbeddedLLM__JamAIBase/services/api/tests/utils/test_mcp.py)<br>[services/api/src/owl/utils/mcp/__init__.py](../../../../sources/EmbeddedLLM__JamAIBase/services/api/src/owl/utils/mcp/__init__.py)<br>[services/api/src/owl/utils/mcp/custom_tools.py](../../../../sources/EmbeddedLLM__JamAIBase/services/api/src/owl/utils/mcp/custom_tools.py)<br>[services/api/src/owl/utils/mcp/helpers.py](../../../../sources/EmbeddedLLM__JamAIBase/services/api/src/owl/utils/mcp/helpers.py)<br>[services/api/src/owl/utils/mcp/server.py](../../../../sources/EmbeddedLLM__JamAIBase/services/api/src/owl/utils/mcp/server.py)<br>[clients/python/src/jamaibase/types/mcp.py](../../../../sources/EmbeddedLLM__JamAIBase/clients/python/src/jamaibase/types/mcp.py) |
| retrieval | 67 | `services/app/src/routes/(main)/system/models/[model_id]/(components)/index.ts`<br>`services/app/src/routes/(main)/system/models/(components)/index.ts`<br>`services/app/src/routes/(main)/settings/account/(components)/index.ts`<br>`services/app/src/routes/(main)/project/[project_id]/overview/(components)/index.ts`<br>`services/app/src/routes/(main)/project/[project_id]/members/(components)/index.ts`<br>`services/app/src/routes/(main)/project/[project_id]/knowledge-table/+page.svelte`<br>`services/app/src/routes/(main)/project/[project_id]/knowledge-table/+page.ts`<br>`services/app/src/routes/(main)/project/[project_id]/knowledge-table/[table_id]/+page.ts` |
| spec | 4 | [services/app/tests/tableList.spec.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/tableList.spec.ts)<br>[services/app/tests/tables/actionTable.spec.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/tables/actionTable.spec.ts)<br>[services/app/tests/tables/chatTable.spec.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/tables/chatTable.spec.ts)<br>[services/app/tests/tables/knowledgeTable.spec.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/tables/knowledgeTable.spec.ts) |
| eval | 165 | [services/app/tests/auth.setup.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/auth.setup.ts)<br>[services/app/tests/main.setup.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/main.setup.ts)<br>[services/app/tests/main.teardown.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/main.teardown.ts)<br>[services/app/tests/tableList.spec.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/tableList.spec.ts)<br>[services/app/tests/tables/actionTable.spec.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/tables/actionTable.spec.ts)<br>[services/app/tests/tables/chatTable.spec.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/tables/chatTable.spec.ts)<br>[services/app/tests/tables/knowledgeTable.spec.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/tables/knowledgeTable.spec.ts)<br>[services/app/tests/pages/layout.page.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/pages/layout.page.ts) |
| security | 11 | [services/app/tests/auth.setup.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/auth.setup.ts)<br>[services/app/src/routes/register/auth-errors.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/src/routes/register/auth-errors.ts)<br>[services/app/src/routes/login/auth-errors.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/src/routes/login/auth-errors.ts)<br>[services/app/src/lib/auth.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/src/lib/auth.ts)<br>[services/api/tests/utils/test_auth.py](../../../../sources/EmbeddedLLM__JamAIBase/services/api/tests/utils/test_auth.py)<br>[services/api/src/owl/utils/auth/__init__.py](../../../../sources/EmbeddedLLM__JamAIBase/services/api/src/owl/utils/auth/__init__.py)<br>[services/api/src/owl/utils/auth/oss.py](../../../../sources/EmbeddedLLM__JamAIBase/services/api/src/owl/utils/auth/oss.py)<br>[services/api/src/owl/routers/auth.py](../../../../sources/EmbeddedLLM__JamAIBase/services/api/src/owl/routers/auth.py) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/EmbeddedLLM__JamAIBase/.github/workflows/ci.yml)<br>[.github/workflows/lint.yml](../../../../sources/EmbeddedLLM__JamAIBase/.github/workflows/lint.yml) |
| container | 6 | [services/replication/docker-compose.yaml](../../../../sources/EmbeddedLLM__JamAIBase/services/replication/docker-compose.yaml)<br>[docker/Dockerfile.cnpg17](../../../../sources/EmbeddedLLM__JamAIBase/docker/Dockerfile.cnpg17)<br>[docker/Dockerfile.frontend](../../../../sources/EmbeddedLLM__JamAIBase/docker/Dockerfile.frontend)<br>[docker/Dockerfile.owl](../../../../sources/EmbeddedLLM__JamAIBase/docker/Dockerfile.owl)<br>[docker/Dockerfile.owl.base](../../../../sources/EmbeddedLLM__JamAIBase/docker/Dockerfile.owl.base)<br>[docker/Dockerfile.pg17](../../../../sources/EmbeddedLLM__JamAIBase/docker/Dockerfile.pg17) |
| instruction | 2 | [AGENTS.md](../../../../sources/EmbeddedLLM__JamAIBase/AGENTS.md)<br>[CLAUDE.md](../../../../sources/EmbeddedLLM__JamAIBase/CLAUDE.md) |
| docs | 10 | [README.md](../../../../sources/EmbeddedLLM__JamAIBase/README.md)<br>[services/app/README.md](../../../../sources/EmbeddedLLM__JamAIBase/services/app/README.md)<br>[services/api/README.md](../../../../sources/EmbeddedLLM__JamAIBase/services/api/README.md)<br>[services/api/tests/README.md](../../../../sources/EmbeddedLLM__JamAIBase/services/api/tests/README.md)<br>[services/api/tests/files/doc/Recommendation Letter.doc](../../../../sources/EmbeddedLLM__JamAIBase/services/api/tests/files/doc/Recommendation Letter.doc)<br>[docs/alert_guide.md](../../../../sources/EmbeddedLLM__JamAIBase/docs/alert_guide.md)<br>[docs/migration_v1_to_v2.md](../../../../sources/EmbeddedLLM__JamAIBase/docs/migration_v1_to_v2.md)<br>[docs/pgaudit_guide.md](../../../../sources/EmbeddedLLM__JamAIBase/docs/pgaudit_guide.md) |
| config | 6 | [services/app/package.json](../../../../sources/EmbeddedLLM__JamAIBase/services/app/package.json)<br>[services/app/tsconfig.json](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tsconfig.json)<br>[services/api/pyproject.toml](../../../../sources/EmbeddedLLM__JamAIBase/services/api/pyproject.toml)<br>[clients/typescript/package.json](../../../../sources/EmbeddedLLM__JamAIBase/clients/typescript/package.json)<br>[clients/typescript/tsconfig.json](../../../../sources/EmbeddedLLM__JamAIBase/clients/typescript/tsconfig.json)<br>[clients/python/pyproject.toml](../../../../sources/EmbeddedLLM__JamAIBase/clients/python/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 165 | [services/app/tests/auth.setup.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/auth.setup.ts)<br>[services/app/tests/main.setup.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/main.setup.ts)<br>[services/app/tests/main.teardown.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/main.teardown.ts)<br>[services/app/tests/tableList.spec.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/tableList.spec.ts)<br>[services/app/tests/tables/actionTable.spec.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/tables/actionTable.spec.ts)<br>[services/app/tests/tables/chatTable.spec.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/tables/chatTable.spec.ts) |
| CI workflow | 2 | [.github/workflows/ci.yml](../../../../sources/EmbeddedLLM__JamAIBase/.github/workflows/ci.yml)<br>[.github/workflows/lint.yml](../../../../sources/EmbeddedLLM__JamAIBase/.github/workflows/lint.yml) |
| 컨테이너/배포 | 6 | [services/replication/docker-compose.yaml](../../../../sources/EmbeddedLLM__JamAIBase/services/replication/docker-compose.yaml)<br>[docker/Dockerfile.cnpg17](../../../../sources/EmbeddedLLM__JamAIBase/docker/Dockerfile.cnpg17)<br>[docker/Dockerfile.frontend](../../../../sources/EmbeddedLLM__JamAIBase/docker/Dockerfile.frontend)<br>[docker/Dockerfile.owl](../../../../sources/EmbeddedLLM__JamAIBase/docker/Dockerfile.owl)<br>[docker/Dockerfile.owl.base](../../../../sources/EmbeddedLLM__JamAIBase/docker/Dockerfile.owl.base)<br>[docker/Dockerfile.pg17](../../../../sources/EmbeddedLLM__JamAIBase/docker/Dockerfile.pg17) |
| 보안/정책 | 11 | [services/app/tests/auth.setup.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/auth.setup.ts)<br>[services/app/src/routes/register/auth-errors.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/src/routes/register/auth-errors.ts)<br>[services/app/src/routes/login/auth-errors.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/src/routes/login/auth-errors.ts)<br>[services/app/src/lib/auth.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/src/lib/auth.ts)<br>[services/api/tests/utils/test_auth.py](../../../../sources/EmbeddedLLM__JamAIBase/services/api/tests/utils/test_auth.py)<br>[services/api/src/owl/utils/auth/__init__.py](../../../../sources/EmbeddedLLM__JamAIBase/services/api/src/owl/utils/auth/__init__.py) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/EmbeddedLLM__JamAIBase/AGENTS.md)<br>[CLAUDE.md](../../../../sources/EmbeddedLLM__JamAIBase/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `services/api/tests/utils/test_mcp.py`, `services/api/src/owl/utils/mcp/__init__.py`, `services/api/src/owl/utils/mcp/custom_tools.py`.
2. entrypoint를 따라 실행 흐름 확인: `services/app/src/app.css`, `services/app/src/app.d.ts`, `services/app/src/app.html`.
3. agent/tool runtime 매핑: `AGENTS.md`, `services/app/src/hooks.server.ts`, `services/app/src/hooks.ts`.
4. retrieval/memory/indexing 확인: `services/app/src/routes/(main)/system/models/[model_id]/(components)/index.ts`, `services/app/src/routes/(main)/system/models/(components)/index.ts`, `services/app/src/routes/(main)/settings/account/(components)/index.ts`.
5. test/eval 파일로 동작 검증: `services/app/tests/auth.setup.ts`, `services/app/tests/main.setup.ts`, `services/app/tests/main.teardown.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 The collaborative spreadsheet for AI. Chain cells into powerful pipelines, experiment with prompts and models, and evalu. 핵심 구조 신호는 Python, README.md, AGENTS.md, CLAUDE.md, LICENSE, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
