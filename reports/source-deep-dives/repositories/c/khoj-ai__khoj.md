# khoj-ai/khoj 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Local clone structure analysis: 701 files, 144 directories.

## 요약

- 조사 단위: `sources/khoj-ai__khoj` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 699 files, 143 directories, depth score 124, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/khoj/processor/tools/mcp.py이고, 의존성 단서는 openai, anthropic, mcp, langchain, fastapi, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | khoj-ai/khoj |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | Python |
| Stars | 35186 |
| Forks | 2252 |
| License | AGPL-3.0 |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/khoj-ai__khoj](../../../../sources/khoj-ai__khoj) |
| 기존 보고서 | [reports/llm-wiki/repositories/khoj-ai__khoj.md](../../../llm-wiki/repositories/khoj-ai__khoj.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 699 / 143 |
| 관측 최대 깊이 | 11 |
| 상위 디렉터리 | .devcontainer, .github, documentation, scripts, src, tests |
| 상위 확장자 | .py: 251, .tsx: 81, .png: 72, .md: 42, .svg: 34, .css: 27, .json: 25, .ts: 22, .markdown: 19, (none): 18, .js: 17, .yml: 15 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 42 |
| src | source boundary | 32 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| documentation | documentation surface | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | khoj | khoj |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | langchain |
| vectorStores | pgvector |
| modelRuntime | torch, transformers |
| webRuntime | fastapi |
| developerSurface | click |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [src/khoj/processor/tools/mcp.py](../../../../sources/khoj-ai__khoj/src/khoj/processor/tools/mcp.py) | mcp signal |
| agentRuntime | [src/khoj/processor/tools/__init__.py](../../../../sources/khoj-ai__khoj/src/khoj/processor/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [src/khoj/processor/tools/online_search.py](../../../../sources/khoj-ai__khoj/src/khoj/processor/tools/online_search.py) | agentRuntime signal |
| agentRuntime | [src/khoj/processor/tools/run_code.py](../../../../sources/khoj-ai__khoj/src/khoj/processor/tools/run_code.py) | agentRuntime signal |
| entrypoints | [src/khoj/main.py](../../../../sources/khoj-ai__khoj/src/khoj/main.py) | entrypoints signal |
| entrypoints | [src/interface/obsidian/src/main.ts](../../../../sources/khoj-ai__khoj/src/interface/obsidian/src/main.ts) | entrypoints signal |
| entrypoints | [src/interface/desktop/main.js](../../../../sources/khoj-ai__khoj/src/interface/desktop/main.js) | entrypoints signal |
| instruction | [documentation/docs/features/agents.md](../../../../sources/khoj-ai__khoj/documentation/docs/features/agents.md) | instruction signal |
| config | [pyproject.toml](../../../../sources/khoj-ai__khoj/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/khoj-ai__khoj/uv.lock) | config signal |
| config | [src/telemetry/requirements.txt](../../../../sources/khoj-ai__khoj/src/telemetry/requirements.txt) | config signal |
| config | [src/interface/web/package.json](../../../../sources/khoj-ai__khoj/src/interface/web/package.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [src/khoj/main.py](../../../../sources/khoj-ai__khoj/src/khoj/main.py)<br>[src/interface/obsidian/src/main.ts](../../../../sources/khoj-ai__khoj/src/interface/obsidian/src/main.ts)<br>[src/interface/desktop/main.js](../../../../sources/khoj-ai__khoj/src/interface/desktop/main.js) |
| agentRuntime | 12 | [src/khoj/processor/tools/__init__.py](../../../../sources/khoj-ai__khoj/src/khoj/processor/tools/__init__.py)<br>[src/khoj/processor/tools/mcp.py](../../../../sources/khoj-ai__khoj/src/khoj/processor/tools/mcp.py)<br>[src/khoj/processor/tools/online_search.py](../../../../sources/khoj-ai__khoj/src/khoj/processor/tools/online_search.py)<br>[src/khoj/processor/tools/run_code.py](../../../../sources/khoj-ai__khoj/src/khoj/processor/tools/run_code.py)<br>[src/khoj/interface/web/assets/icons/agents.svg](../../../../sources/khoj-ai__khoj/src/khoj/interface/web/assets/icons/agents.svg)<br>[src/interface/web/public/agents.svg](../../../../sources/khoj-ai__khoj/src/interface/web/public/agents.svg)<br>[src/interface/web/hooks/use-mobile.tsx](../../../../sources/khoj-ai__khoj/src/interface/web/hooks/use-mobile.tsx)<br>[src/interface/web/app/agents/agents.module.css](../../../../sources/khoj-ai__khoj/src/interface/web/app/agents/agents.module.css) |
| mcp | 1 | [src/khoj/processor/tools/mcp.py](../../../../sources/khoj-ai__khoj/src/khoj/processor/tools/mcp.py) |
| retrieval | 3 | [tests/test_memory_settings.py](../../../../sources/khoj-ai__khoj/tests/test_memory_settings.py)<br>[src/khoj/interface/web/home/index.html](../../../../sources/khoj-ai__khoj/src/khoj/interface/web/home/index.html)<br>[src/khoj/database/migrations/0003_vector_extension.py](../../../../sources/khoj-ai__khoj/src/khoj/database/migrations/0003_vector_extension.py) |
| spec | 2 | [src/telemetry/requirements.txt](../../../../sources/khoj-ai__khoj/src/telemetry/requirements.txt)<br>[documentation/assets/img/khoj_architecture.png](../../../../sources/khoj-ai__khoj/documentation/assets/img/khoj_architecture.png) |
| eval | 65 | [tests/__init__.py](../../../../sources/khoj-ai__khoj/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/khoj-ai__khoj/tests/conftest.py)<br>[tests/helpers.py](../../../../sources/khoj-ai__khoj/tests/helpers.py)<br>[tests/test_agents.py](../../../../sources/khoj-ai__khoj/tests/test_agents.py)<br>[tests/test_api_automation.py](../../../../sources/khoj-ai__khoj/tests/test_api_automation.py)<br>[tests/test_cli.py](../../../../sources/khoj-ai__khoj/tests/test_cli.py)<br>[tests/test_client.py](../../../../sources/khoj-ai__khoj/tests/test_client.py)<br>[tests/test_conversation_utils.py](../../../../sources/khoj-ai__khoj/tests/test_conversation_utils.py) |
| security | 3 | [src/khoj/routers/auth.py](../../../../sources/khoj-ai__khoj/src/khoj/routers/auth.py)<br>[src/interface/web/app/common/auth.ts](../../../../sources/khoj-ai__khoj/src/interface/web/app/common/auth.ts)<br>[documentation/docs/get-started/privacy-security.md](../../../../sources/khoj-ai__khoj/documentation/docs/get-started/privacy-security.md) |
| ci | 11 | [.github/workflows/build_khoj_el.yml](../../../../sources/khoj-ai__khoj/.github/workflows/build_khoj_el.yml)<br>[.github/workflows/desktop.yml](../../../../sources/khoj-ai__khoj/.github/workflows/desktop.yml)<br>[.github/workflows/dockerize_telemetry_server.yml](../../../../sources/khoj-ai__khoj/.github/workflows/dockerize_telemetry_server.yml)<br>[.github/workflows/dockerize.yml](../../../../sources/khoj-ai__khoj/.github/workflows/dockerize.yml)<br>[.github/workflows/github_pages_deploy.yml](../../../../sources/khoj-ai__khoj/.github/workflows/github_pages_deploy.yml)<br>[.github/workflows/pre-commit.yml](../../../../sources/khoj-ai__khoj/.github/workflows/pre-commit.yml)<br>[.github/workflows/pypi.yml](../../../../sources/khoj-ai__khoj/.github/workflows/pypi.yml)<br>[.github/workflows/release.yml](../../../../sources/khoj-ai__khoj/.github/workflows/release.yml) |
| container | 4 | [docker-compose.yml](../../../../sources/khoj-ai__khoj/docker-compose.yml)<br>[Dockerfile](../../../../sources/khoj-ai__khoj/Dockerfile)<br>[src/telemetry/Dockerfile](../../../../sources/khoj-ai__khoj/src/telemetry/Dockerfile)<br>[.devcontainer/Dockerfile](../../../../sources/khoj-ai__khoj/.devcontainer/Dockerfile) |
| instruction | 1 | [documentation/docs/features/agents.md](../../../../sources/khoj-ai__khoj/documentation/docs/features/agents.md) |
| docs | 53 | [README.md](../../../../sources/khoj-ai__khoj/README.md)<br>[src/khoj/processor/operator/README.md](../../../../sources/khoj-ai__khoj/src/khoj/processor/operator/README.md)<br>[src/khoj/app/README.md](../../../../sources/khoj-ai__khoj/src/khoj/app/README.md)<br>[src/interface/web/README.md](../../../../sources/khoj-ai__khoj/src/interface/web/README.md)<br>[src/interface/obsidian/README.md](../../../../sources/khoj-ai__khoj/src/interface/obsidian/README.md)<br>[src/interface/desktop/README.md](../../../../sources/khoj-ai__khoj/src/interface/desktop/README.md)<br>[documentation/docusaurus.config.js](../../../../sources/khoj-ai__khoj/documentation/docusaurus.config.js)<br>[documentation/README.md](../../../../sources/khoj-ai__khoj/documentation/README.md) |
| config | 9 | [pyproject.toml](../../../../sources/khoj-ai__khoj/pyproject.toml)<br>[uv.lock](../../../../sources/khoj-ai__khoj/uv.lock)<br>[src/telemetry/requirements.txt](../../../../sources/khoj-ai__khoj/src/telemetry/requirements.txt)<br>[src/interface/web/package.json](../../../../sources/khoj-ai__khoj/src/interface/web/package.json)<br>[src/interface/web/tsconfig.json](../../../../sources/khoj-ai__khoj/src/interface/web/tsconfig.json)<br>[src/interface/obsidian/package.json](../../../../sources/khoj-ai__khoj/src/interface/obsidian/package.json)<br>[src/interface/obsidian/tsconfig.json](../../../../sources/khoj-ai__khoj/src/interface/obsidian/tsconfig.json)<br>[src/interface/desktop/package.json](../../../../sources/khoj-ai__khoj/src/interface/desktop/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 65 | [tests/__init__.py](../../../../sources/khoj-ai__khoj/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/khoj-ai__khoj/tests/conftest.py)<br>[tests/helpers.py](../../../../sources/khoj-ai__khoj/tests/helpers.py)<br>[tests/test_agents.py](../../../../sources/khoj-ai__khoj/tests/test_agents.py)<br>[tests/test_api_automation.py](../../../../sources/khoj-ai__khoj/tests/test_api_automation.py)<br>[tests/test_cli.py](../../../../sources/khoj-ai__khoj/tests/test_cli.py) |
| CI workflow | 11 | [.github/workflows/build_khoj_el.yml](../../../../sources/khoj-ai__khoj/.github/workflows/build_khoj_el.yml)<br>[.github/workflows/desktop.yml](../../../../sources/khoj-ai__khoj/.github/workflows/desktop.yml)<br>[.github/workflows/dockerize_telemetry_server.yml](../../../../sources/khoj-ai__khoj/.github/workflows/dockerize_telemetry_server.yml)<br>[.github/workflows/dockerize.yml](../../../../sources/khoj-ai__khoj/.github/workflows/dockerize.yml)<br>[.github/workflows/github_pages_deploy.yml](../../../../sources/khoj-ai__khoj/.github/workflows/github_pages_deploy.yml)<br>[.github/workflows/pre-commit.yml](../../../../sources/khoj-ai__khoj/.github/workflows/pre-commit.yml) |
| 컨테이너/배포 | 4 | [docker-compose.yml](../../../../sources/khoj-ai__khoj/docker-compose.yml)<br>[Dockerfile](../../../../sources/khoj-ai__khoj/Dockerfile)<br>[src/telemetry/Dockerfile](../../../../sources/khoj-ai__khoj/src/telemetry/Dockerfile)<br>[.devcontainer/Dockerfile](../../../../sources/khoj-ai__khoj/.devcontainer/Dockerfile) |
| 보안/정책 | 3 | [src/khoj/routers/auth.py](../../../../sources/khoj-ai__khoj/src/khoj/routers/auth.py)<br>[src/interface/web/app/common/auth.ts](../../../../sources/khoj-ai__khoj/src/interface/web/app/common/auth.ts)<br>[documentation/docs/get-started/privacy-security.md](../../../../sources/khoj-ai__khoj/documentation/docs/get-started/privacy-security.md) |
| 에이전트 지시문 | 1 | [documentation/docs/features/agents.md](../../../../sources/khoj-ai__khoj/documentation/docs/features/agents.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/khoj/processor/tools/mcp.py`, `src/khoj/processor/tools/__init__.py`, `src/khoj/processor/tools/online_search.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/khoj/main.py`, `src/interface/obsidian/src/main.ts`, `src/interface/desktop/main.js`.
3. agent/tool runtime 매핑: `src/khoj/processor/tools/__init__.py`, `src/khoj/processor/tools/mcp.py`, `src/khoj/processor/tools/online_search.py`.
4. retrieval/memory/indexing 확인: `tests/test_memory_settings.py`, `src/khoj/interface/web/home/index.html`, `src/khoj/database/migrations/0003_vector_extension.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/conftest.py`, `tests/helpers.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 701 files, 144 directories.. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, README.md, LICENSE이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 큰 메타데이터 위험이 명확하지 않음입니다.
