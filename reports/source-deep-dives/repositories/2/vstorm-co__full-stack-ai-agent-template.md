# vstorm-co/full-stack-ai-agent-template 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Full-stack AI app generator — FastAPI + Next.js with AI Agents, RAG, streaming, auth, and 20+ integrations out of the box.

## 요약

- 조사 단위: `sources/vstorm-co__full-stack-ai-agent-template` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 880 files, 248 directories, depth score 121, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, template/hooks/post_gen_project.py, template/{{cookiecutter.project_slug}}/AGENTS.md이고, 의존성 단서는 langchain, langgraph, fastapi, next, react, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | vstorm-co/full-stack-ai-agent-template |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 1424 |
| Forks | 288 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/vstorm-co__full-stack-ai-agent-template](../../../../sources/vstorm-co__full-stack-ai-agent-template) |
| 기존 보고서 | [reports/global-trending/repositories/vstorm-co__full-stack-ai-agent-template.md](../../../global-trending/repositories/vstorm-co__full-stack-ai-agent-template.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 880 / 248 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .github, assets, docs, fastapi_gen, scripts, template, tests |
| 상위 확장자 | .py: 326, .tsx: 205, .ts: 161, .md: 59, .png: 36, (none): 18, .html: 14, .yml: 14, .txt: 13, .json: 8, .yaml: 8, .gif: 3 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 19 |
| tests | validation surface | 15 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| fastapi_gen | source boundary | 1 |
| scripts | top-level component | 1 |
| template | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | pyproject.toml | fastapi-fullstack | fastapi-fullstack |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | langchain, langgraph |
| vectorStores | milvus |
| modelRuntime | 없음 |
| webRuntime | fastapi, next, react |
| developerSurface | click |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| agentRuntime | [AGENTS.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/AGENTS.md) | agentRuntime signal |
| agentRuntime | [template/hooks/post_gen_project.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/hooks/post_gen_project.py) | agentRuntime signal |
| agentRuntime | [template/{{cookiecutter.project_slug}}/AGENTS.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/AGENTS.md) | agentRuntime signal |
| agentRuntime | [template/{{cookiecutter.project_slug}}/frontend/src/hooks/index.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/hooks/index.ts) | agentRuntime signal |
| entrypoints | [template/{{cookiecutter.project_slug}}/backend/app/main.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/backend/app/main.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/CLAUDE.md) | instruction signal |
| instruction | [template/{{cookiecutter.project_slug}}/CLAUDE.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/CLAUDE.md) | instruction signal |
| config | [pyproject.toml](../../../../sources/vstorm-co__full-stack-ai-agent-template/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/vstorm-co__full-stack-ai-agent-template/uv.lock) | config signal |
| config | [template/{{cookiecutter.project_slug}}/Makefile](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/Makefile) | config signal |
| config | [template/{{cookiecutter.project_slug}}/frontend/package.json](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/package.json) | config signal |
| ci | [template/{{cookiecutter.project_slug}}/.gitlab-ci.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/.gitlab-ci.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [template/{{cookiecutter.project_slug}}/backend/app/main.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/backend/app/main.py) |
| agentRuntime | 46 | [AGENTS.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/AGENTS.md)<br>[template/hooks/post_gen_project.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/hooks/post_gen_project.py)<br>[template/{{cookiecutter.project_slug}}/AGENTS.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/AGENTS.md)<br>[template/{{cookiecutter.project_slug}}/frontend/src/hooks/index.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/hooks/index.ts)<br>[template/{{cookiecutter.project_slug}}/frontend/src/hooks/use-admin-conversations.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/hooks/use-admin-conversations.ts)<br>[template/{{cookiecutter.project_slug}}/frontend/src/hooks/use-admin-users.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/hooks/use-admin-users.ts)<br>[template/{{cookiecutter.project_slug}}/frontend/src/hooks/use-auth.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/hooks/use-auth.ts)<br>[template/{{cookiecutter.project_slug}}/frontend/src/hooks/use-billing.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/hooks/use-billing.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 81 | [tests/test_rag_config.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/tests/test_rag_config.py)<br>[tests/test_rag_integration.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/tests/test_rag_integration.py)<br>[template/{{cookiecutter.project_slug}}/frontend/src/types/index.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/types/index.ts)<br>[template/{{cookiecutter.project_slug}}/frontend/src/types/knowledge-base.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/types/knowledge-base.ts)<br>[template/{{cookiecutter.project_slug}}/frontend/src/stores/index.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/stores/index.ts)<br>[template/{{cookiecutter.project_slug}}/frontend/src/lib/rag-api.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/lib/rag-api.ts)<br>[template/{{cookiecutter.project_slug}}/frontend/src/hooks/index.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/hooks/index.ts)<br>[template/{{cookiecutter.project_slug}}/frontend/src/hooks/use-knowledge-bases.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/hooks/use-knowledge-bases.ts) |
| spec | 6 | [template/{{cookiecutter.project_slug}}/frontend/e2e/auth.spec.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/e2e/auth.spec.ts)<br>[template/{{cookiecutter.project_slug}}/frontend/e2e/chat.spec.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/e2e/chat.spec.ts)<br>[template/{{cookiecutter.project_slug}}/frontend/e2e/home.spec.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/e2e/home.spec.ts)<br>[template/{{cookiecutter.project_slug}}/docs/architecture.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/docs/architecture.md)<br>[template/{{cookiecutter.project_slug}}/.claude/rules/architecture.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/.claude/rules/architecture.md)<br>[docs/architecture.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/docs/architecture.md) |
| eval | 51 | [tests/__init__.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/tests/conftest.py)<br>[tests/test_cli.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/tests/test_cli.py)<br>[tests/test_config.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/tests/test_config.py)<br>[tests/test_generator.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/tests/test_generator.py)<br>[tests/test_integration.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/tests/test_integration.py)<br>[tests/test_message_ratings.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/tests/test_message_ratings.py)<br>[tests/test_prompts.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/tests/test_prompts.py) |
| security | 42 | [SECURITY.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/SECURITY.md)<br>[template/{{cookiecutter.project_slug}}/SECURITY.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/SECURITY.md)<br>[template/{{cookiecutter.project_slug}}/kubernetes/secret.yaml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/kubernetes/secret.yaml)<br>[template/{{cookiecutter.project_slug}}/frontend/src/types/auth.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/types/auth.ts)<br>[template/{{cookiecutter.project_slug}}/frontend/src/stores/auth-store.test.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/stores/auth-store.test.ts)<br>[template/{{cookiecutter.project_slug}}/frontend/src/stores/auth-store.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/stores/auth-store.ts)<br>[template/{{cookiecutter.project_slug}}/frontend/src/lib/admin-auth.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/lib/admin-auth.ts)<br>[template/{{cookiecutter.project_slug}}/frontend/src/hooks/use-auth.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/hooks/use-auth.ts) |
| ci | 5 | [template/{{cookiecutter.project_slug}}/.gitlab-ci.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/.gitlab-ci.yml)<br>[template/{{cookiecutter.project_slug}}/.github/workflows/ci.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/.github/workflows/ci.yml)<br>[.github/workflows/ci.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/.github/workflows/docs.yml)<br>[.github/workflows/release.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/.github/workflows/release.yml) |
| container | 13 | [template/{{cookiecutter.project_slug}}/docker-compose.dev.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/docker-compose.dev.yml)<br>[template/{{cookiecutter.project_slug}}/docker-compose.frontend.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/docker-compose.frontend.yml)<br>[template/{{cookiecutter.project_slug}}/docker-compose.prod.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/docker-compose.prod.yml)<br>[template/{{cookiecutter.project_slug}}/docker-compose.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/docker-compose.yml)<br>[template/{{cookiecutter.project_slug}}/kubernetes/configmap.yaml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/kubernetes/configmap.yaml)<br>[template/{{cookiecutter.project_slug}}/kubernetes/deployment.yaml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/kubernetes/deployment.yaml)<br>[template/{{cookiecutter.project_slug}}/kubernetes/ingress.yaml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/kubernetes/ingress.yaml)<br>[template/{{cookiecutter.project_slug}}/kubernetes/kustomization.yaml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/kubernetes/kustomization.yaml) |
| instruction | 4 | [AGENTS.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/AGENTS.md)<br>[CLAUDE.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/CLAUDE.md)<br>[template/{{cookiecutter.project_slug}}/AGENTS.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/AGENTS.md)<br>[template/{{cookiecutter.project_slug}}/CLAUDE.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/CLAUDE.md) |
| docs | 38 | [mkdocs.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/mkdocs.yml)<br>[README.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/README.md)<br>[template/{{cookiecutter.project_slug}}/README.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/README.md)<br>[template/{{cookiecutter.project_slug}}/frontend/README.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/README.md)<br>[template/{{cookiecutter.project_slug}}/docs/adding_features.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/docs/adding_features.md)<br>[template/{{cookiecutter.project_slug}}/docs/architecture.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/docs/architecture.md)<br>[template/{{cookiecutter.project_slug}}/docs/commands.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/docs/commands.md)<br>[template/{{cookiecutter.project_slug}}/docs/configuration.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/docs/configuration.md) |
| config | 6 | [pyproject.toml](../../../../sources/vstorm-co__full-stack-ai-agent-template/pyproject.toml)<br>[uv.lock](../../../../sources/vstorm-co__full-stack-ai-agent-template/uv.lock)<br>[template/{{cookiecutter.project_slug}}/Makefile](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/Makefile)<br>[template/{{cookiecutter.project_slug}}/frontend/package.json](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/package.json)<br>[template/{{cookiecutter.project_slug}}/frontend/tsconfig.json](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/tsconfig.json)<br>[template/{{cookiecutter.project_slug}}/backend/pyproject.toml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/backend/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 51 | [tests/__init__.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/tests/conftest.py)<br>[tests/test_cli.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/tests/test_cli.py)<br>[tests/test_config.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/tests/test_config.py)<br>[tests/test_generator.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/tests/test_generator.py)<br>[tests/test_integration.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/tests/test_integration.py) |
| CI workflow | 5 | [template/{{cookiecutter.project_slug}}/.gitlab-ci.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/.gitlab-ci.yml)<br>[template/{{cookiecutter.project_slug}}/.github/workflows/ci.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/.github/workflows/ci.yml)<br>[.github/workflows/ci.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/.github/workflows/docs.yml)<br>[.github/workflows/release.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/.github/workflows/release.yml) |
| 컨테이너/배포 | 13 | [template/{{cookiecutter.project_slug}}/docker-compose.dev.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/docker-compose.dev.yml)<br>[template/{{cookiecutter.project_slug}}/docker-compose.frontend.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/docker-compose.frontend.yml)<br>[template/{{cookiecutter.project_slug}}/docker-compose.prod.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/docker-compose.prod.yml)<br>[template/{{cookiecutter.project_slug}}/docker-compose.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/docker-compose.yml)<br>[template/{{cookiecutter.project_slug}}/kubernetes/configmap.yaml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/kubernetes/configmap.yaml)<br>[template/{{cookiecutter.project_slug}}/kubernetes/deployment.yaml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/kubernetes/deployment.yaml) |
| 보안/정책 | 42 | [SECURITY.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/SECURITY.md)<br>[template/{{cookiecutter.project_slug}}/SECURITY.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/SECURITY.md)<br>[template/{{cookiecutter.project_slug}}/kubernetes/secret.yaml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/kubernetes/secret.yaml)<br>[template/{{cookiecutter.project_slug}}/frontend/src/types/auth.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/types/auth.ts)<br>[template/{{cookiecutter.project_slug}}/frontend/src/stores/auth-store.test.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/stores/auth-store.test.ts)<br>[template/{{cookiecutter.project_slug}}/frontend/src/stores/auth-store.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/stores/auth-store.ts) |
| 에이전트 지시문 | 4 | [AGENTS.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/AGENTS.md)<br>[CLAUDE.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/CLAUDE.md)<br>[template/{{cookiecutter.project_slug}}/AGENTS.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/AGENTS.md)<br>[template/{{cookiecutter.project_slug}}/CLAUDE.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `AGENTS.md`, `template/hooks/post_gen_project.py`, `template/{{cookiecutter.project_slug}}/AGENTS.md`.
2. entrypoint를 따라 실행 흐름 확인: `template/{{cookiecutter.project_slug}}/backend/app/main.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `template/hooks/post_gen_project.py`, `template/{{cookiecutter.project_slug}}/AGENTS.md`.
4. retrieval/memory/indexing 확인: `tests/test_rag_config.py`, `tests/test_rag_integration.py`, `template/{{cookiecutter.project_slug}}/frontend/src/types/index.ts`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/conftest.py`, `tests/test_cli.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Full stack AI app generator — FastAPI + Next.js with AI Agents, RAG, streaming, auth, and 20+ integrations out of the bo. 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
