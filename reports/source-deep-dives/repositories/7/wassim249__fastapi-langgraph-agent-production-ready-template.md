# wassim249/fastapi-langgraph-agent-production-ready-template 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

A production-ready FastAPI template for building AI agent applications with LangGraph integration. This template provides a robust foundation for building scalable, secure, and maintainable AI agent services.

## 요약

- 조사 단위: `sources/wassim249__fastapi-langgraph-agent-production-ready-template` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 93 files, 28 directories, depth score 112, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, docs/memory.md, app/services/memory.py이고, 의존성 단서는 openai, langchain, langgraph, fastapi, pydantic, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | wassim249/fastapi-langgraph-agent-production-ready-template |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 2413 |
| Forks | 568 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/wassim249__fastapi-langgraph-agent-production-ready-template](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template) |
| 기존 보고서 | [reports/global-trending/repositories/wassim249__fastapi-langgraph-agent-production-ready-template.md](../../../global-trending/repositories/wassim249__fastapi-langgraph-agent-production-ready-template.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 93 / 28 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .cursor, .github, alembic, app, docs, evals, grafana, prometheus, scripts, typings |
| 상위 확장자 | .py: 44, .md: 21, (none): 9, .sh: 3, .yaml: 3, .yml: 3, .png: 2, .baseline: 1, .example: 1, .ini: 1, .json: 1, .lock: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 18 |
| .github | ci surface | 1 |
| alembic | top-level component | 1 |
| app | top-level component | 1 |
| evals | top-level component | 1 |
| grafana | top-level component | 1 |
| prometheus | top-level component | 1 |
| scripts | top-level component | 1 |
| typings | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | install | make install |
| serve-dev | Makefile | dev | make dev |
| utility | Makefile | staging | make staging |
| utility | Makefile | prod | make prod |
| serve-dev | Makefile | _serve | make _serve |
| utility | Makefile | migrate | make migrate |
| utility | Makefile | migration | make migration |
| utility | Makefile | migrate-downgrade | make migrate-downgrade |
| utility | Makefile | migrate-history | make migrate-history |
| utility | Makefile | eval | make eval |
| utility | Makefile | eval-quick | make eval-quick |
| utility | Makefile | eval-no-report | make eval-no-report |
| quality | Makefile | lint | make lint |
| quality | Makefile | format | make format |
| quality | Makefile | typecheck | make typecheck |
| quality | Makefile | check | make check |
| utility | Makefile | pre-commit | make pre-commit |
| utility | Makefile | pre-commit-update | make pre-commit-update |
| build | Makefile | docker-build | make docker-build |
| container | Makefile | docker-up | make docker-up |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | 없음 |
| agentFrameworks | langchain, langgraph |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | prometheus |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| agentRuntime | [AGENTS.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/AGENTS.md) | agentRuntime signal |
| agentRuntime | [docs/memory.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/docs/memory.md) | agentRuntime signal |
| agentRuntime | [app/services/memory.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/services/memory.py) | agentRuntime signal |
| agentRuntime | [app/core/langgraph/tools/__init__.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/core/langgraph/tools/__init__.py) | agentRuntime signal |
| entrypoints | [evals/main.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/evals/main.py) | entrypoints signal |
| entrypoints | [app/main.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/main.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/CLAUDE.md) | instruction signal |
| instruction | [.cursor/rules/project-main-rules.mdc](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/.cursor/rules/project-main-rules.mdc) | instruction signal |
| config | [Makefile](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/Makefile) | config signal |
| config | [pyproject.toml](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/uv.lock) | config signal |
| ci | [.github/workflows/ci.yaml](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/.github/workflows/ci.yaml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [evals/main.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/evals/main.py)<br>[app/main.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/main.py) |
| agentRuntime | 6 | [AGENTS.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/AGENTS.md)<br>[docs/memory.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/docs/memory.md)<br>[app/services/memory.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/services/memory.py)<br>[app/core/langgraph/tools/__init__.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/core/langgraph/tools/__init__.py)<br>[app/core/langgraph/tools/ask_human.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/core/langgraph/tools/ask_human.py)<br>[app/core/langgraph/tools/duckduckgo_search.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/core/langgraph/tools/duckduckgo_search.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 5 | [docs/memory.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/docs/memory.md)<br>[app/utils/graph.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/utils/graph.py)<br>[app/services/memory.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/services/memory.py)<br>[app/schemas/graph.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/schemas/graph.py)<br>[app/core/langgraph/graph.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/core/langgraph/graph.py) |
| spec | 1 | [docs/architecture.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/docs/architecture.md) |
| eval | 3 | [docs/evaluation.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/docs/evaluation.md)<br>[docs/observability.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/docs/observability.md)<br>[app/core/observability.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/core/observability.py) |
| security | 4 | [SECURITY.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/SECURITY.md)<br>[app/utils/auth.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/utils/auth.py)<br>[app/schemas/auth.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/schemas/auth.py)<br>[app/api/v1/auth.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/api/v1/auth.py) |
| ci | 2 | [.github/workflows/ci.yaml](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/.github/workflows/ci.yaml)<br>[.github/workflows/deploy.yaml](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/.github/workflows/deploy.yaml) |
| container | 2 | [docker-compose.yml](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/docker-compose.yml)<br>[Dockerfile](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/Dockerfile) |
| instruction | 3 | [AGENTS.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/AGENTS.md)<br>[CLAUDE.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/CLAUDE.md)<br>[.cursor/rules/project-main-rules.mdc](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/.cursor/rules/project-main-rules.mdc) |
| docs | 14 | [README.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/README.md)<br>[docs/architecture.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/docs/architecture.md)<br>[docs/atlas-cloud-logo-dark.png](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/docs/atlas-cloud-logo-dark.png)<br>[docs/atlas-cloud-logo.png](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/docs/atlas-cloud-logo.png)<br>[docs/authentication.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/docs/authentication.md)<br>[docs/configuration.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/docs/configuration.md)<br>[docs/database.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/docs/database.md)<br>[docs/docker.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/docs/docker.md) |
| config | 3 | [Makefile](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/Makefile)<br>[pyproject.toml](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/pyproject.toml)<br>[uv.lock](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 3 | [docs/evaluation.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/docs/evaluation.md)<br>[docs/observability.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/docs/observability.md)<br>[app/core/observability.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/core/observability.py) |
| CI workflow | 2 | [.github/workflows/ci.yaml](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/.github/workflows/ci.yaml)<br>[.github/workflows/deploy.yaml](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/.github/workflows/deploy.yaml) |
| 컨테이너/배포 | 2 | [docker-compose.yml](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/docker-compose.yml)<br>[Dockerfile](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/Dockerfile) |
| 보안/정책 | 4 | [SECURITY.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/SECURITY.md)<br>[app/utils/auth.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/utils/auth.py)<br>[app/schemas/auth.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/schemas/auth.py)<br>[app/api/v1/auth.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/api/v1/auth.py) |
| 에이전트 지시문 | 3 | [AGENTS.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/AGENTS.md)<br>[CLAUDE.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/CLAUDE.md)<br>[.cursor/rules/project-main-rules.mdc](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/.cursor/rules/project-main-rules.mdc) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `AGENTS.md`, `docs/memory.md`, `app/services/memory.py`.
2. entrypoint를 따라 실행 흐름 확인: `evals/main.py`, `app/main.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `docs/memory.md`, `app/services/memory.py`.
4. retrieval/memory/indexing 확인: `docs/memory.md`, `app/utils/graph.py`, `app/services/memory.py`.
5. test/eval 파일로 동작 검증: `docs/evaluation.md`, `docs/observability.md`, `app/core/observability.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 A production ready FastAPI template for building AI agent applications with LangGraph integration. This template provide. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, Makefile, README.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
