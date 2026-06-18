# vstorm-co/full-stack-ai-agent-template Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Full-stack AI app generator — FastAPI + Next.js with AI Agents, RAG, streaming, auth, and 20+ integrations out of the box.

## 요약

- 조사 단위: `sources/vstorm-co__full-stack-ai-agent-template` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 880 files, 248 directories, depth score 127, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, template/hooks/post_gen_project.py, template/{{cookiecutter.project_slug}}/AGENTS.md이고, 의존성 단서는 langchain, langgraph, fastapi, next, react, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | vstorm-co/full-stack-ai-agent-template |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 1424 |
| Forks | 288 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/vstorm-co__full-stack-ai-agent-template](../../../../sources/vstorm-co__full-stack-ai-agent-template) |
| Existing report | [reports/global-trending/repositories/vstorm-co__full-stack-ai-agent-template.md](../../../global-trending/repositories/vstorm-co__full-stack-ai-agent-template.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 880 / 248 |
| Max observed depth | 13 |
| Top directories | .github, assets, docs, fastapi_gen, scripts, template, tests |
| Top extensions | .py: 326, .tsx: 205, .ts: 161, .md: 59, .png: 36, (none): 18, .html: 14, .yml: 14, .txt: 13, .json: 8, .yaml: 8, .gif: 3 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 19 |
| tests | validation surface | 15 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| fastapi_gen | source boundary | 1 |
| scripts | top-level component | 1 |
| template | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | pyproject.toml | fastapi-fullstack | fastapi-fullstack |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | langchain, langgraph |
| vectorStores | milvus |
| modelRuntime | none |
| webRuntime | fastapi, next, react |
| developerSurface | click |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [template/{{cookiecutter.project_slug}}/backend/app/main.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/backend/app/main.py) |
| agentRuntime | 46 | [AGENTS.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/AGENTS.md)<br>[template/hooks/post_gen_project.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/hooks/post_gen_project.py)<br>[template/{{cookiecutter.project_slug}}/AGENTS.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/AGENTS.md)<br>[template/{{cookiecutter.project_slug}}/frontend/src/hooks/index.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/hooks/index.ts)<br>[template/{{cookiecutter.project_slug}}/frontend/src/hooks/use-admin-conversations.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/hooks/use-admin-conversations.ts)<br>[template/{{cookiecutter.project_slug}}/frontend/src/hooks/use-admin-users.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/hooks/use-admin-users.ts)<br>[template/{{cookiecutter.project_slug}}/frontend/src/hooks/use-auth.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/hooks/use-auth.ts)<br>[template/{{cookiecutter.project_slug}}/frontend/src/hooks/use-billing.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/hooks/use-billing.ts) |
| mcp | 0 | not obvious |
| retrieval | 81 | [tests/test_rag_config.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/tests/test_rag_config.py)<br>[tests/test_rag_integration.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/tests/test_rag_integration.py)<br>[template/{{cookiecutter.project_slug}}/frontend/src/types/index.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/types/index.ts)<br>[template/{{cookiecutter.project_slug}}/frontend/src/types/knowledge-base.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/types/knowledge-base.ts)<br>[template/{{cookiecutter.project_slug}}/frontend/src/stores/index.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/stores/index.ts)<br>[template/{{cookiecutter.project_slug}}/frontend/src/lib/rag-api.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/lib/rag-api.ts)<br>[template/{{cookiecutter.project_slug}}/frontend/src/hooks/index.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/hooks/index.ts)<br>[template/{{cookiecutter.project_slug}}/frontend/src/hooks/use-knowledge-bases.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/hooks/use-knowledge-bases.ts) |
| spec | 6 | [template/{{cookiecutter.project_slug}}/frontend/e2e/auth.spec.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/e2e/auth.spec.ts)<br>[template/{{cookiecutter.project_slug}}/frontend/e2e/chat.spec.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/e2e/chat.spec.ts)<br>[template/{{cookiecutter.project_slug}}/frontend/e2e/home.spec.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/e2e/home.spec.ts)<br>[template/{{cookiecutter.project_slug}}/docs/architecture.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/docs/architecture.md)<br>[template/{{cookiecutter.project_slug}}/.claude/rules/architecture.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/.claude/rules/architecture.md)<br>[docs/architecture.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/docs/architecture.md) |
| eval | 51 | [tests/__init__.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/tests/conftest.py)<br>[tests/test_cli.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/tests/test_cli.py)<br>[tests/test_config.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/tests/test_config.py)<br>[tests/test_generator.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/tests/test_generator.py)<br>[tests/test_integration.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/tests/test_integration.py)<br>[tests/test_message_ratings.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/tests/test_message_ratings.py)<br>[tests/test_prompts.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/tests/test_prompts.py) |
| security | 42 | [SECURITY.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/SECURITY.md)<br>[template/{{cookiecutter.project_slug}}/SECURITY.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/SECURITY.md)<br>[template/{{cookiecutter.project_slug}}/kubernetes/secret.yaml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/kubernetes/secret.yaml)<br>[template/{{cookiecutter.project_slug}}/frontend/src/types/auth.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/types/auth.ts)<br>[template/{{cookiecutter.project_slug}}/frontend/src/stores/auth-store.test.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/stores/auth-store.test.ts)<br>[template/{{cookiecutter.project_slug}}/frontend/src/stores/auth-store.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/stores/auth-store.ts)<br>[template/{{cookiecutter.project_slug}}/frontend/src/lib/admin-auth.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/lib/admin-auth.ts)<br>[template/{{cookiecutter.project_slug}}/frontend/src/hooks/use-auth.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/hooks/use-auth.ts) |
| ci | 5 | [template/{{cookiecutter.project_slug}}/.gitlab-ci.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/.gitlab-ci.yml)<br>[template/{{cookiecutter.project_slug}}/.github/workflows/ci.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/.github/workflows/ci.yml)<br>[.github/workflows/ci.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/.github/workflows/docs.yml)<br>[.github/workflows/release.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/.github/workflows/release.yml) |
| container | 13 | [template/{{cookiecutter.project_slug}}/docker-compose.dev.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/docker-compose.dev.yml)<br>[template/{{cookiecutter.project_slug}}/docker-compose.frontend.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/docker-compose.frontend.yml)<br>[template/{{cookiecutter.project_slug}}/docker-compose.prod.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/docker-compose.prod.yml)<br>[template/{{cookiecutter.project_slug}}/docker-compose.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/docker-compose.yml)<br>[template/{{cookiecutter.project_slug}}/kubernetes/configmap.yaml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/kubernetes/configmap.yaml)<br>[template/{{cookiecutter.project_slug}}/kubernetes/deployment.yaml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/kubernetes/deployment.yaml)<br>[template/{{cookiecutter.project_slug}}/kubernetes/ingress.yaml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/kubernetes/ingress.yaml)<br>[template/{{cookiecutter.project_slug}}/kubernetes/kustomization.yaml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/kubernetes/kustomization.yaml) |
| instruction | 4 | [AGENTS.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/AGENTS.md)<br>[CLAUDE.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/CLAUDE.md)<br>[template/{{cookiecutter.project_slug}}/AGENTS.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/AGENTS.md)<br>[template/{{cookiecutter.project_slug}}/CLAUDE.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/CLAUDE.md) |
| docs | 38 | [mkdocs.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/mkdocs.yml)<br>[README.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/README.md)<br>[template/{{cookiecutter.project_slug}}/README.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/README.md)<br>[template/{{cookiecutter.project_slug}}/frontend/README.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/README.md)<br>[template/{{cookiecutter.project_slug}}/docs/adding_features.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/docs/adding_features.md)<br>[template/{{cookiecutter.project_slug}}/docs/architecture.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/docs/architecture.md)<br>[template/{{cookiecutter.project_slug}}/docs/commands.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/docs/commands.md)<br>[template/{{cookiecutter.project_slug}}/docs/configuration.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/docs/configuration.md) |
| config | 6 | [pyproject.toml](../../../../sources/vstorm-co__full-stack-ai-agent-template/pyproject.toml)<br>[uv.lock](../../../../sources/vstorm-co__full-stack-ai-agent-template/uv.lock)<br>[template/{{cookiecutter.project_slug}}/Makefile](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/Makefile)<br>[template/{{cookiecutter.project_slug}}/frontend/package.json](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/package.json)<br>[template/{{cookiecutter.project_slug}}/frontend/tsconfig.json](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/tsconfig.json)<br>[template/{{cookiecutter.project_slug}}/backend/pyproject.toml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/backend/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 51 | [tests/__init__.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/tests/conftest.py)<br>[tests/test_cli.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/tests/test_cli.py)<br>[tests/test_config.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/tests/test_config.py)<br>[tests/test_generator.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/tests/test_generator.py)<br>[tests/test_integration.py](../../../../sources/vstorm-co__full-stack-ai-agent-template/tests/test_integration.py) |
| CI workflows | 5 | [template/{{cookiecutter.project_slug}}/.gitlab-ci.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/.gitlab-ci.yml)<br>[template/{{cookiecutter.project_slug}}/.github/workflows/ci.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/.github/workflows/ci.yml)<br>[.github/workflows/ci.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/.github/workflows/docs.yml)<br>[.github/workflows/release.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/.github/workflows/release.yml) |
| Containers / deploy | 13 | [template/{{cookiecutter.project_slug}}/docker-compose.dev.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/docker-compose.dev.yml)<br>[template/{{cookiecutter.project_slug}}/docker-compose.frontend.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/docker-compose.frontend.yml)<br>[template/{{cookiecutter.project_slug}}/docker-compose.prod.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/docker-compose.prod.yml)<br>[template/{{cookiecutter.project_slug}}/docker-compose.yml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/docker-compose.yml)<br>[template/{{cookiecutter.project_slug}}/kubernetes/configmap.yaml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/kubernetes/configmap.yaml)<br>[template/{{cookiecutter.project_slug}}/kubernetes/deployment.yaml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/kubernetes/deployment.yaml) |
| Security / policy | 42 | [SECURITY.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/SECURITY.md)<br>[template/{{cookiecutter.project_slug}}/SECURITY.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/SECURITY.md)<br>[template/{{cookiecutter.project_slug}}/kubernetes/secret.yaml](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/kubernetes/secret.yaml)<br>[template/{{cookiecutter.project_slug}}/frontend/src/types/auth.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/types/auth.ts)<br>[template/{{cookiecutter.project_slug}}/frontend/src/stores/auth-store.test.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/stores/auth-store.test.ts)<br>[template/{{cookiecutter.project_slug}}/frontend/src/stores/auth-store.ts](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/frontend/src/stores/auth-store.ts) |
| Agent instructions | 4 | [AGENTS.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/AGENTS.md)<br>[CLAUDE.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/CLAUDE.md)<br>[template/{{cookiecutter.project_slug}}/AGENTS.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/AGENTS.md)<br>[template/{{cookiecutter.project_slug}}/CLAUDE.md](../../../../sources/vstorm-co__full-stack-ai-agent-template/template/{{cookiecutter.project_slug}}/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `AGENTS.md`, `template/hooks/post_gen_project.py`, `template/{{cookiecutter.project_slug}}/AGENTS.md`.
2. Trace execution through entrypoints: `template/{{cookiecutter.project_slug}}/backend/app/main.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `template/hooks/post_gen_project.py`, `template/{{cookiecutter.project_slug}}/AGENTS.md`.
4. Inspect retrieval/memory/indexing through: `tests/test_rag_config.py`, `tests/test_rag_integration.py`, `template/{{cookiecutter.project_slug}}/frontend/src/types/index.ts`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/conftest.py`, `tests/test_cli.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Full stack AI app generator — FastAPI + Next.js with AI Agents, RAG, streaming, auth, and 20+ integrations out of the bo. 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
