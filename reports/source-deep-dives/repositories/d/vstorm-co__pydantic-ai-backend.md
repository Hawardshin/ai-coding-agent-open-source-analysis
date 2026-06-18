# vstorm-co/pydantic-ai-backend 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

File Storage & Sandbox Backends for Pydantic AI: console tools for file operations, Docker-isolated sandboxes for safe execution, and permission system with presets for access control. Enables secure multi-user handling and testing in agents via in-memory, local, or containerized storage.

## 요약

- 조사 단위: `sources/vstorm-co__pydantic-ai-backend` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 108 files, 25 directories, depth score 102, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=src/pydantic_ai_backends/backends/docker/sandbox.py, examples/predictive_analytics/agent.py이고, 의존성 단서는 pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | vstorm-co/pydantic-ai-backend |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 102 |
| Forks | 21 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/vstorm-co__pydantic-ai-backend](../../../../sources/vstorm-co__pydantic-ai-backend) |
| 기존 보고서 | [reports/global-trending/repositories/vstorm-co__pydantic-ai-backend.md](../../../global-trending/repositories/vstorm-co__pydantic-ai-backend.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 108 / 25 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, assets, docs, examples, src, tests |
| 상위 확장자 | .py: 50, .md: 36, .png: 4, .yml: 4, .html: 3, (none): 3, .css: 2, .json: 2, .js: 1, .toml: 1, .txt: 1, .yaml: 1 |
| 소스 패턴 | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 39 |
| tests | validation surface | 22 |
| examples/predictive_analytics | examples workspace | 6 |
| examples/web_production | examples workspace | 3 |
| src | source boundary | 3 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| examples | top-level component | 1 |
| examples/local_cli | examples workspace | 1 |
| examples/README.md | examples workspace | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | install | make install |
| utility | Makefile | sync | make sync |
| test | Makefile | test | make test |
| test | Makefile | test-fast | make test-fast |
| quality | Makefile | lint | make lint |
| quality | Makefile | format | make format |
| quality | Makefile | typecheck | make typecheck |
| quality | Makefile | typecheck-mypy | make typecheck-mypy |
| utility | Makefile | all | make all |
| utility | Makefile | clean | make clean |


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
| agentRuntime | [src/pydantic_ai_backends/backends/docker/sandbox.py](../../../../sources/vstorm-co__pydantic-ai-backend/src/pydantic_ai_backends/backends/docker/sandbox.py) | agentRuntime signal |
| agentRuntime | [examples/predictive_analytics/agent.py](../../../../sources/vstorm-co__pydantic-ai-backend/examples/predictive_analytics/agent.py) | agentRuntime signal |
| entrypoints | [examples/web_production/server.py](../../../../sources/vstorm-co__pydantic-ai-backend/examples/web_production/server.py) | entrypoints signal |
| entrypoints | [examples/predictive_analytics/server.py](../../../../sources/vstorm-co__pydantic-ai-backend/examples/predictive_analytics/server.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/vstorm-co__pydantic-ai-backend/CLAUDE.md) | instruction signal |
| config | [Makefile](../../../../sources/vstorm-co__pydantic-ai-backend/Makefile) | config signal |
| config | [pyproject.toml](../../../../sources/vstorm-co__pydantic-ai-backend/pyproject.toml) | config signal |
| config | [examples/predictive_analytics/requirements.txt](../../../../sources/vstorm-co__pydantic-ai-backend/examples/predictive_analytics/requirements.txt) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/vstorm-co__pydantic-ai-backend/.github/workflows/ci.yml) | ci support |
| ci | [.github/workflows/docs.yml](../../../../sources/vstorm-co__pydantic-ai-backend/.github/workflows/docs.yml) | ci support |
| eval | [tests/__init__.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/__init__.py) | eval support |
| eval | [tests/test_backends_extended.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_backends_extended.py) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [examples/web_production/server.py](../../../../sources/vstorm-co__pydantic-ai-backend/examples/web_production/server.py)<br>[examples/predictive_analytics/server.py](../../../../sources/vstorm-co__pydantic-ai-backend/examples/predictive_analytics/server.py) |
| agentRuntime | 2 | [src/pydantic_ai_backends/backends/docker/sandbox.py](../../../../sources/vstorm-co__pydantic-ai-backend/src/pydantic_ai_backends/backends/docker/sandbox.py)<br>[examples/predictive_analytics/agent.py](../../../../sources/vstorm-co__pydantic-ai-backend/examples/predictive_analytics/agent.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 6 | [examples/web_production/templates/index.html](../../../../sources/vstorm-co__pydantic-ai-backend/examples/web_production/templates/index.html)<br>[examples/predictive_analytics/static/index.html](../../../../sources/vstorm-co__pydantic-ai-backend/examples/predictive_analytics/static/index.html)<br>[docs/index.md](../../../../sources/vstorm-co__pydantic-ai-backend/docs/index.md)<br>[docs/examples/index.md](../../../../sources/vstorm-co__pydantic-ai-backend/docs/examples/index.md)<br>[docs/concepts/index.md](../../../../sources/vstorm-co__pydantic-ai-backend/docs/concepts/index.md)<br>[docs/api/index.md](../../../../sources/vstorm-co__pydantic-ai-backend/docs/api/index.md) |
| spec | 3 | [examples/predictive_analytics/requirements.txt](../../../../sources/vstorm-co__pydantic-ai-backend/examples/predictive_analytics/requirements.txt)<br>[docs/assets/architecture.png](../../../../sources/vstorm-co__pydantic-ai-backend/docs/assets/architecture.png)<br>[assets/architecture.png](../../../../sources/vstorm-co__pydantic-ai-backend/assets/architecture.png) |
| eval | 18 | [tests/__init__.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/__init__.py)<br>[tests/test_backends_extended.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_backends_extended.py)<br>[tests/test_backends.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_backends.py)<br>[tests/test_capability.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_capability.py)<br>[tests/test_console_permissions.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_console_permissions.py)<br>[tests/test_console.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_console.py)<br>[tests/test_daytona_sandbox.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_daytona_sandbox.py)<br>[tests/test_docker_sandbox.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_docker_sandbox.py) |
| security | 6 | [tests/test_daytona_sandbox.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_daytona_sandbox.py)<br>[tests/test_docker_sandbox.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_docker_sandbox.py)<br>[tests/test_kubernetes_sandbox.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_kubernetes_sandbox.py)<br>[src/pydantic_ai_backends/backends/docker/sandbox.py](../../../../sources/vstorm-co__pydantic-ai-backend/src/pydantic_ai_backends/backends/docker/sandbox.py)<br>[docs/examples/docker-sandbox.md](../../../../sources/vstorm-co__pydantic-ai-backend/docs/examples/docker-sandbox.md)<br>[docs/examples/kubernetes-sandbox.md](../../../../sources/vstorm-co__pydantic-ai-backend/docs/examples/kubernetes-sandbox.md) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/vstorm-co__pydantic-ai-backend/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/vstorm-co__pydantic-ai-backend/.github/workflows/docs.yml)<br>[.github/workflows/publish.yml](../../../../sources/vstorm-co__pydantic-ai-backend/.github/workflows/publish.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [CLAUDE.md](../../../../sources/vstorm-co__pydantic-ai-backend/CLAUDE.md) |
| docs | 37 | [mkdocs.yml](../../../../sources/vstorm-co__pydantic-ai-backend/mkdocs.yml)<br>[README.md](../../../../sources/vstorm-co__pydantic-ai-backend/README.md)<br>[examples/README.md](../../../../sources/vstorm-co__pydantic-ai-backend/examples/README.md)<br>[examples/web_production/README.md](../../../../sources/vstorm-co__pydantic-ai-backend/examples/web_production/README.md)<br>[examples/predictive_analytics/README.md](../../../../sources/vstorm-co__pydantic-ai-backend/examples/predictive_analytics/README.md)<br>[examples/local_cli/README.md](../../../../sources/vstorm-co__pydantic-ai-backend/examples/local_cli/README.md)<br>[docs/changelog.md](../../../../sources/vstorm-co__pydantic-ai-backend/docs/changelog.md)<br>[docs/getting-help.md](../../../../sources/vstorm-co__pydantic-ai-backend/docs/getting-help.md) |
| config | 3 | [Makefile](../../../../sources/vstorm-co__pydantic-ai-backend/Makefile)<br>[pyproject.toml](../../../../sources/vstorm-co__pydantic-ai-backend/pyproject.toml)<br>[examples/predictive_analytics/requirements.txt](../../../../sources/vstorm-co__pydantic-ai-backend/examples/predictive_analytics/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 18 | [tests/__init__.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/__init__.py)<br>[tests/test_backends_extended.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_backends_extended.py)<br>[tests/test_backends.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_backends.py)<br>[tests/test_capability.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_capability.py)<br>[tests/test_console_permissions.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_console_permissions.py)<br>[tests/test_console.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_console.py) |
| CI workflow | 3 | [.github/workflows/ci.yml](../../../../sources/vstorm-co__pydantic-ai-backend/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/vstorm-co__pydantic-ai-backend/.github/workflows/docs.yml)<br>[.github/workflows/publish.yml](../../../../sources/vstorm-co__pydantic-ai-backend/.github/workflows/publish.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 6 | [tests/test_daytona_sandbox.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_daytona_sandbox.py)<br>[tests/test_docker_sandbox.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_docker_sandbox.py)<br>[tests/test_kubernetes_sandbox.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_kubernetes_sandbox.py)<br>[src/pydantic_ai_backends/backends/docker/sandbox.py](../../../../sources/vstorm-co__pydantic-ai-backend/src/pydantic_ai_backends/backends/docker/sandbox.py)<br>[docs/examples/docker-sandbox.md](../../../../sources/vstorm-co__pydantic-ai-backend/docs/examples/docker-sandbox.md)<br>[docs/examples/kubernetes-sandbox.md](../../../../sources/vstorm-co__pydantic-ai-backend/docs/examples/kubernetes-sandbox.md) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/vstorm-co__pydantic-ai-backend/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/pydantic_ai_backends/backends/docker/sandbox.py`, `examples/predictive_analytics/agent.py`, `examples/web_production/server.py`.
2. entrypoint를 따라 실행 흐름 확인: `examples/web_production/server.py`, `examples/predictive_analytics/server.py`.
3. agent/tool runtime 매핑: `src/pydantic_ai_backends/backends/docker/sandbox.py`, `examples/predictive_analytics/agent.py`.
4. retrieval/memory/indexing 확인: `examples/web_production/templates/index.html`, `examples/predictive_analytics/static/index.html`, `docs/index.md`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/test_backends_extended.py`, `tests/test_backends.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 File Storage & Sandbox Backends for Pydantic AI console tools for file operations, Docker isolated sandboxes for safe ex. 핵심 구조 신호는 Python, pyproject.toml, Makefile, README.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
