# open-webui/open-webui Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

User-friendly AI Interface (Supports Ollama, OpenAI API, ...)

## 요약

- 조사 단위: `sources/open-webui__open-webui` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 4,937 files, 276 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/app.css, src/app.d.ts, src/app.html이고, 의존성 단서는 openai, anthropic, mcp, langchain, fastapi, next, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | open-webui/open-webui |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | Python |
| Stars | 142039 |
| Forks | 20413 |
| License | NOASSERTION |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/open-webui__open-webui](../../../../sources/open-webui__open-webui) |
| Existing report | [reports/global-trending/repositories/open-webui__open-webui.md](../../../global-trending/repositories/open-webui__open-webui.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 4937 / 276 |
| Max observed depth | 8 |
| Top directories | .github, backend, docs, scripts, src, static, test |
| Top extensions | .svg: 3840, .svelte: 584, .py: 224, .ts: 74, .json: 70, .png: 29, .ttf: 16, (none): 16, .yaml: 14, .js: 11, .css: 8, .sh: 8 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 62 |
| docs | documentation surface | 3 |
| .github | ci surface | 1 |
| backend | top-level component | 1 |
| scripts | top-level component | 1 |
| static | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
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


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | langchain |
| vectorStores | chroma, qdrant, milvus, weaviate, pgvector |
| modelRuntime | transformers |
| webRuntime | fastapi, next |
| developerSurface | none |
| observability | none |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
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
| instruction | 0 | not obvious |
| docs | 5 | [README.md](../../../../sources/open-webui__open-webui/README.md)<br>[docs/SECURITY.md](../../../../sources/open-webui__open-webui/docs/SECURITY.md)<br>[backend/open_webui/migrations/README](../../../../sources/open-webui__open-webui/backend/open_webui/migrations/README)<br>[backend/open_webui/data/readme.txt](../../../../sources/open-webui__open-webui/backend/open_webui/data/readme.txt)<br>[backend/data/readme.txt](../../../../sources/open-webui__open-webui/backend/data/readme.txt) |
| config | 7 | [Makefile](../../../../sources/open-webui__open-webui/Makefile)<br>[package.json](../../../../sources/open-webui__open-webui/package.json)<br>[pyproject.toml](../../../../sources/open-webui__open-webui/pyproject.toml)<br>[tsconfig.json](../../../../sources/open-webui__open-webui/tsconfig.json)<br>[uv.lock](../../../../sources/open-webui__open-webui/uv.lock)<br>[backend/requirements-min.txt](../../../../sources/open-webui__open-webui/backend/requirements-min.txt)<br>[backend/requirements.txt](../../../../sources/open-webui__open-webui/backend/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 2 | [docker-compose.a1111-test.yaml](../../../../sources/open-webui__open-webui/docker-compose.a1111-test.yaml)<br>[test/test_files/image_gen/sd-empty.pt](../../../../sources/open-webui__open-webui/test/test_files/image_gen/sd-empty.pt) |
| CI workflows | 8 | [.github/workflows/backend.yaml](../../../../sources/open-webui__open-webui/.github/workflows/backend.yaml)<br>[.github/workflows/codespell.disabled](../../../../sources/open-webui__open-webui/.github/workflows/codespell.disabled)<br>[.github/workflows/docker.yaml](../../../../sources/open-webui__open-webui/.github/workflows/docker.yaml)<br>[.github/workflows/frontend.yaml](../../../../sources/open-webui__open-webui/.github/workflows/frontend.yaml)<br>[.github/workflows/lint-backend.disabled](../../../../sources/open-webui__open-webui/.github/workflows/lint-backend.disabled)<br>[.github/workflows/lint-frontend.disabled](../../../../sources/open-webui__open-webui/.github/workflows/lint-frontend.disabled) |
| Containers / deploy | 10 | [docker-compose-launcher.sh](../../../../sources/open-webui__open-webui/docker-compose-launcher.sh)<br>[docker-compose.a1111-test.yaml](../../../../sources/open-webui__open-webui/docker-compose.a1111-test.yaml)<br>[docker-compose.amdgpu.yaml](../../../../sources/open-webui__open-webui/docker-compose.amdgpu.yaml)<br>[docker-compose.api.yaml](../../../../sources/open-webui__open-webui/docker-compose.api.yaml)<br>[docker-compose.data.yaml](../../../../sources/open-webui__open-webui/docker-compose.data.yaml)<br>[docker-compose.gpu.yaml](../../../../sources/open-webui__open-webui/docker-compose.gpu.yaml) |
| Security / policy | 8 | [src/routes/auth/+page.svelte](../../../../sources/open-webui__open-webui/src/routes/auth/+page.svelte)<br>[docs/SECURITY.md](../../../../sources/open-webui__open-webui/docs/SECURITY.md)<br>[backend/open_webui/utils/audit.py](../../../../sources/open-webui__open-webui/backend/open_webui/utils/audit.py)<br>[backend/open_webui/utils/auth.py](../../../../sources/open-webui__open-webui/backend/open_webui/utils/auth.py)<br>[backend/open_webui/utils/oauth.py](../../../../sources/open-webui__open-webui/backend/open_webui/utils/oauth.py)<br>[backend/open_webui/utils/security_headers.py](../../../../sources/open-webui__open-webui/backend/open_webui/utils/security_headers.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/app.css`, `src/app.d.ts`, `src/app.html`.
2. Trace execution through entrypoints: `src/app.css`, `src/app.d.ts`, `src/app.html`.
3. Map agent/tool runtime through: `src/routes/(app)/workspace/tools/+page.svelte`, `src/routes/(app)/workspace/tools/edit/+page.svelte`, `src/routes/(app)/workspace/tools/create/+page.svelte`.
4. Inspect retrieval/memory/indexing through: `src/routes/(app)/workspace/knowledge/+page.svelte`, `src/routes/(app)/workspace/knowledge/create/+page.svelte`, `src/routes/(app)/workspace/knowledge/[id]/+page.svelte`.
5. Verify behavior through test/eval files: `docker-compose.a1111-test.yaml`, `test/test_files/image_gen/sd-empty.pt`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 User friendly AI Interface Supports Ollama, OpenAI API, .... 핵심 구조 신호는 Python, package.json, pyproject.toml, Dockerfile, Makefile, README.md이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
