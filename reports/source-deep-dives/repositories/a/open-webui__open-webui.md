# open-webui/open-webui 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

User-friendly AI Interface (Supports Ollama, OpenAI API, ...)

## 요약

- 조사 단위: `sources/open-webui__open-webui` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 4,937 files, 276 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/app.css, src/app.d.ts, src/app.html이고, 의존성 단서는 openai, anthropic, mcp, langchain, fastapi, next, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | open-webui/open-webui |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | Python |
| Stars | 142039 |
| Forks | 20413 |
| License | NOASSERTION |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/open-webui__open-webui](../../../../sources/open-webui__open-webui) |
| 기존 보고서 | [reports/global-trending/repositories/open-webui__open-webui.md](../../../global-trending/repositories/open-webui__open-webui.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 4937 / 276 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .github, backend, docs, scripts, src, static, test |
| 상위 확장자 | .svg: 3840, .svelte: 584, .py: 224, .ts: 74, .json: 70, .png: 29, .ttf: 16, (none): 16, .yaml: 14, .js: 11, .css: 8, .sh: 8 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 62 |
| docs | documentation surface | 3 |
| .github | ci surface | 1 |
| backend | top-level component | 1 |
| scripts | top-level component | 1 |
| static | top-level component | 1 |
| test | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | npm run pyodide:fetch && vite dev --host |
| serve-dev | package.json | dev:5050 | npm run pyodide:fetch && vite dev --port 5050 |
| serve-dev | package.json | build | npm run pyodide:fetch && vite build |
| serve-dev | package.json | build:watch | npm run pyodide:fetch && vite build --watch |
| serve-dev | package.json | preview | vite preview |
| quality | package.json | check | svelte-kit sync && svelte-check --tsconfig ./tsconfig.json |
| serve-dev | package.json | check:watch | svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --watch |
| quality | package.json | lint | npm run lint:frontend ; npm run lint:types ; npm run lint:backend |
| quality | package.json | lint:frontend | eslint . --fix |
| quality | package.json | lint:types | npm run check |
| quality | package.json | lint:backend | pylint backend/ |
| quality | package.json | format | prettier --plugin-search-dir --write "**/*.{js,ts,svelte,css,md,html,json}" |
| quality | package.json | format:backend | ruff format . --exclude .venv --exclude venv |
| quality | package.json | i18n:parse | i18next --config i18next-parser.config.ts && prettier --write "src/lib/i18n/**/*.{js,json}" |
| utility | package.json | cy:open | cypress open |
| test | package.json | test:frontend | vitest --passWithNoTests |
| utility | package.json | pyodide:fetch | node scripts/prepare-pyodide.js |
| utility | Makefile | install | make install |
| utility | Makefile | remove | make remove |
| serve-dev | Makefile | start | make start |
| serve-dev | Makefile | startAndBuild | make startAndBuild |
| utility | Makefile | stop | make stop |
| utility | Makefile | update | make update |
| utility | pyproject.toml | open-webui | open-webui |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | langchain |
| vectorStores | chroma, qdrant, milvus, weaviate, pgvector |
| modelRuntime | transformers |
| webRuntime | fastapi, next |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [src/app.css](../../../../sources/open-webui__open-webui/src/app.css) | entrypoints signal |
| entrypoints | [src/app.d.ts](../../../../sources/open-webui__open-webui/src/app.d.ts) | entrypoints signal |
| entrypoints | [src/app.html](../../../../sources/open-webui__open-webui/src/app.html) | entrypoints signal |
| entrypoints | [backend/open_webui/main.py](../../../../sources/open-webui__open-webui/backend/open_webui/main.py) | entrypoints signal |
| container | [docker-compose-launcher.sh](../../../../sources/open-webui__open-webui/docker-compose-launcher.sh) | container signal |
| container | [docker-compose.a1111-test.yaml](../../../../sources/open-webui__open-webui/docker-compose.a1111-test.yaml) | container signal |
| container | [docker-compose.amdgpu.yaml](../../../../sources/open-webui__open-webui/docker-compose.amdgpu.yaml) | container signal |
| container | [docker-compose.api.yaml](../../../../sources/open-webui__open-webui/docker-compose.api.yaml) | container signal |
| config | [Makefile](../../../../sources/open-webui__open-webui/Makefile) | config signal |
| config | [package.json](../../../../sources/open-webui__open-webui/package.json) | config signal |
| config | [pyproject.toml](../../../../sources/open-webui__open-webui/pyproject.toml) | config signal |
| config | [tsconfig.json](../../../../sources/open-webui__open-webui/tsconfig.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 8 | [src/app.css](../../../../sources/open-webui__open-webui/src/app.css)<br>[src/app.d.ts](../../../../sources/open-webui__open-webui/src/app.d.ts)<br>[src/app.html](../../../../sources/open-webui__open-webui/src/app.html)<br>[backend/open_webui/main.py](../../../../sources/open-webui__open-webui/backend/open_webui/main.py)<br>[backend/open_webui/socket/main.py](../../../../sources/open-webui__open-webui/backend/open_webui/socket/main.py)<br>[backend/open_webui/retrieval/web/main.py](../../../../sources/open-webui__open-webui/backend/open_webui/retrieval/web/main.py)<br>[backend/open_webui/retrieval/vector/main.py](../../../../sources/open-webui__open-webui/backend/open_webui/retrieval/vector/main.py)<br>[backend/open_webui/retrieval/loaders/main.py](../../../../sources/open-webui__open-webui/backend/open_webui/retrieval/loaders/main.py) |
| agentRuntime | 25 | `src/routes/(app)/workspace/tools/+page.svelte`<br>`src/routes/(app)/workspace/tools/edit/+page.svelte`<br>`src/routes/(app)/workspace/tools/create/+page.svelte`<br>`src/routes/(app)/workspace/skills/+page.svelte`<br>`src/routes/(app)/workspace/skills/edit/+page.svelte`<br>`src/routes/(app)/workspace/skills/create/+page.svelte`<br>[src/lib/components/workspace/Skills.svelte](../../../../sources/open-webui__open-webui/src/lib/components/workspace/Skills.svelte)<br>[src/lib/components/workspace/Tools.svelte](../../../../sources/open-webui__open-webui/src/lib/components/workspace/Tools.svelte) |
| mcp | 1 | [backend/open_webui/utils/mcp/client.py](../../../../sources/open-webui__open-webui/backend/open_webui/utils/mcp/client.py) |
| retrieval | 127 | `src/routes/(app)/workspace/knowledge/+page.svelte`<br>`src/routes/(app)/workspace/knowledge/create/+page.svelte`<br>`src/routes/(app)/workspace/knowledge/[id]/+page.svelte`<br>[src/lib/index.ts](../../../../sources/open-webui__open-webui/src/lib/index.ts)<br>[src/lib/utils/index.ts](../../../../sources/open-webui__open-webui/src/lib/utils/index.ts)<br>[src/lib/utils/transitions/index.ts](../../../../sources/open-webui__open-webui/src/lib/utils/transitions/index.ts)<br>[src/lib/utils/characters/index.ts](../../../../sources/open-webui__open-webui/src/lib/utils/characters/index.ts)<br>[src/lib/types/index.ts](../../../../sources/open-webui__open-webui/src/lib/types/index.ts) |
| spec | 2 | [backend/requirements-min.txt](../../../../sources/open-webui__open-webui/backend/requirements-min.txt)<br>[backend/requirements.txt](../../../../sources/open-webui__open-webui/backend/requirements.txt) |
| eval | 2 | [docker-compose.a1111-test.yaml](../../../../sources/open-webui__open-webui/docker-compose.a1111-test.yaml)<br>[test/test_files/image_gen/sd-empty.pt](../../../../sources/open-webui__open-webui/test/test_files/image_gen/sd-empty.pt) |
| security | 8 | [src/routes/auth/+page.svelte](../../../../sources/open-webui__open-webui/src/routes/auth/+page.svelte)<br>[docs/SECURITY.md](../../../../sources/open-webui__open-webui/docs/SECURITY.md)<br>[backend/open_webui/utils/audit.py](../../../../sources/open-webui__open-webui/backend/open_webui/utils/audit.py)<br>[backend/open_webui/utils/auth.py](../../../../sources/open-webui__open-webui/backend/open_webui/utils/auth.py)<br>[backend/open_webui/utils/oauth.py](../../../../sources/open-webui__open-webui/backend/open_webui/utils/oauth.py)<br>[backend/open_webui/utils/security_headers.py](../../../../sources/open-webui__open-webui/backend/open_webui/utils/security_headers.py)<br>[backend/open_webui/models/oauth_sessions.py](../../../../sources/open-webui__open-webui/backend/open_webui/models/oauth_sessions.py)<br>[backend/open_webui/migrations/versions/38d63c18f30f_add_oauth_session_table.py](../../../../sources/open-webui__open-webui/backend/open_webui/migrations/versions/38d63c18f30f_add_oauth_session_table.py) |
| ci | 8 | [.github/workflows/backend.yaml](../../../../sources/open-webui__open-webui/.github/workflows/backend.yaml)<br>[.github/workflows/codespell.disabled](../../../../sources/open-webui__open-webui/.github/workflows/codespell.disabled)<br>[.github/workflows/docker.yaml](../../../../sources/open-webui__open-webui/.github/workflows/docker.yaml)<br>[.github/workflows/frontend.yaml](../../../../sources/open-webui__open-webui/.github/workflows/frontend.yaml)<br>[.github/workflows/lint-backend.disabled](../../../../sources/open-webui__open-webui/.github/workflows/lint-backend.disabled)<br>[.github/workflows/lint-frontend.disabled](../../../../sources/open-webui__open-webui/.github/workflows/lint-frontend.disabled)<br>[.github/workflows/release-pypi.yml](../../../../sources/open-webui__open-webui/.github/workflows/release-pypi.yml)<br>[.github/workflows/release.yml](../../../../sources/open-webui__open-webui/.github/workflows/release.yml) |
| container | 10 | [docker-compose-launcher.sh](../../../../sources/open-webui__open-webui/docker-compose-launcher.sh)<br>[docker-compose.a1111-test.yaml](../../../../sources/open-webui__open-webui/docker-compose.a1111-test.yaml)<br>[docker-compose.amdgpu.yaml](../../../../sources/open-webui__open-webui/docker-compose.amdgpu.yaml)<br>[docker-compose.api.yaml](../../../../sources/open-webui__open-webui/docker-compose.api.yaml)<br>[docker-compose.data.yaml](../../../../sources/open-webui__open-webui/docker-compose.data.yaml)<br>[docker-compose.gpu.yaml](../../../../sources/open-webui__open-webui/docker-compose.gpu.yaml)<br>[docker-compose.otel.yaml](../../../../sources/open-webui__open-webui/docker-compose.otel.yaml)<br>[docker-compose.playwright.yaml](../../../../sources/open-webui__open-webui/docker-compose.playwright.yaml) |
| instruction | 0 | 명확하지 않음 |
| docs | 5 | [README.md](../../../../sources/open-webui__open-webui/README.md)<br>[docs/SECURITY.md](../../../../sources/open-webui__open-webui/docs/SECURITY.md)<br>[backend/open_webui/migrations/README](../../../../sources/open-webui__open-webui/backend/open_webui/migrations/README)<br>[backend/open_webui/data/readme.txt](../../../../sources/open-webui__open-webui/backend/open_webui/data/readme.txt)<br>[backend/data/readme.txt](../../../../sources/open-webui__open-webui/backend/data/readme.txt) |
| config | 7 | [Makefile](../../../../sources/open-webui__open-webui/Makefile)<br>[package.json](../../../../sources/open-webui__open-webui/package.json)<br>[pyproject.toml](../../../../sources/open-webui__open-webui/pyproject.toml)<br>[tsconfig.json](../../../../sources/open-webui__open-webui/tsconfig.json)<br>[uv.lock](../../../../sources/open-webui__open-webui/uv.lock)<br>[backend/requirements-min.txt](../../../../sources/open-webui__open-webui/backend/requirements-min.txt)<br>[backend/requirements.txt](../../../../sources/open-webui__open-webui/backend/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 2 | [docker-compose.a1111-test.yaml](../../../../sources/open-webui__open-webui/docker-compose.a1111-test.yaml)<br>[test/test_files/image_gen/sd-empty.pt](../../../../sources/open-webui__open-webui/test/test_files/image_gen/sd-empty.pt) |
| CI workflow | 8 | [.github/workflows/backend.yaml](../../../../sources/open-webui__open-webui/.github/workflows/backend.yaml)<br>[.github/workflows/codespell.disabled](../../../../sources/open-webui__open-webui/.github/workflows/codespell.disabled)<br>[.github/workflows/docker.yaml](../../../../sources/open-webui__open-webui/.github/workflows/docker.yaml)<br>[.github/workflows/frontend.yaml](../../../../sources/open-webui__open-webui/.github/workflows/frontend.yaml)<br>[.github/workflows/lint-backend.disabled](../../../../sources/open-webui__open-webui/.github/workflows/lint-backend.disabled)<br>[.github/workflows/lint-frontend.disabled](../../../../sources/open-webui__open-webui/.github/workflows/lint-frontend.disabled) |
| 컨테이너/배포 | 10 | [docker-compose-launcher.sh](../../../../sources/open-webui__open-webui/docker-compose-launcher.sh)<br>[docker-compose.a1111-test.yaml](../../../../sources/open-webui__open-webui/docker-compose.a1111-test.yaml)<br>[docker-compose.amdgpu.yaml](../../../../sources/open-webui__open-webui/docker-compose.amdgpu.yaml)<br>[docker-compose.api.yaml](../../../../sources/open-webui__open-webui/docker-compose.api.yaml)<br>[docker-compose.data.yaml](../../../../sources/open-webui__open-webui/docker-compose.data.yaml)<br>[docker-compose.gpu.yaml](../../../../sources/open-webui__open-webui/docker-compose.gpu.yaml) |
| 보안/정책 | 8 | [src/routes/auth/+page.svelte](../../../../sources/open-webui__open-webui/src/routes/auth/+page.svelte)<br>[docs/SECURITY.md](../../../../sources/open-webui__open-webui/docs/SECURITY.md)<br>[backend/open_webui/utils/audit.py](../../../../sources/open-webui__open-webui/backend/open_webui/utils/audit.py)<br>[backend/open_webui/utils/auth.py](../../../../sources/open-webui__open-webui/backend/open_webui/utils/auth.py)<br>[backend/open_webui/utils/oauth.py](../../../../sources/open-webui__open-webui/backend/open_webui/utils/oauth.py)<br>[backend/open_webui/utils/security_headers.py](../../../../sources/open-webui__open-webui/backend/open_webui/utils/security_headers.py) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/app.css`, `src/app.d.ts`, `src/app.html`.
2. entrypoint를 따라 실행 흐름 확인: `src/app.css`, `src/app.d.ts`, `src/app.html`.
3. agent/tool runtime 매핑: `src/routes/(app)/workspace/tools/+page.svelte`, `src/routes/(app)/workspace/tools/edit/+page.svelte`, `src/routes/(app)/workspace/tools/create/+page.svelte`.
4. retrieval/memory/indexing 확인: `src/routes/(app)/workspace/knowledge/+page.svelte`, `src/routes/(app)/workspace/knowledge/create/+page.svelte`, `src/routes/(app)/workspace/knowledge/[id]/+page.svelte`.
5. test/eval 파일로 동작 검증: `docker-compose.a1111-test.yaml`, `test/test_files/image_gen/sd-empty.pt`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 User friendly AI Interface Supports Ollama, OpenAI API, .... 핵심 구조 신호는 Python, package.json, pyproject.toml, Dockerfile, Makefile, README.md이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
