# gptme/gptme Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Your agent in your terminal, equipped with local tools: writes code, uses the terminal, browses the web. Make your own persistent autonomous agent on top!

## 요약

- 조사 단위: `sources/gptme__gptme` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,337 files, 137 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=webui/index.html, webui/src/index.css, webui/src/pages/Index.tsx이고, 의존성 단서는 openai, anthropic, mcp, langchain, pydantic, click, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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


## Repository Context

| Field | Value |
| --- | --- |
| Repository | gptme/gptme |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Python |
| Stars | 4332 |
| Forks | 389 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/gptme__gptme](../../../../sources/gptme__gptme) |
| Existing report | [reports/global-trending/repositories/gptme__gptme.md](../../../global-trending/repositories/gptme__gptme.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1337 / 137 |
| Max observed depth | 13 |
| Top directories | .github, docs, gptme, gptme-extension, media, scripts, site, tauri, tests, webui |
| Top extensions | .py: 682, .tsx: 170, .ts: 124, .md: 88, .png: 52, .rst: 37, .sh: 22, .yml: 22, .json: 21, (none): 21, .xml: 11, .html: 8 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 40 |
| tests | validation surface | 15 |
| .github | ci surface | 1 |
| gptme | top-level component | 1 |
| gptme-extension | top-level component | 1 |
| media | top-level component | 1 |
| scripts | top-level component | 1 |
| site | documentation surface | 1 |
| tauri | top-level component | 1 |
| webui | source boundary | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build | make build |
| build | Makefile | build-docker | make build-docker |
| build | Makefile | build-docker-computer | make build-docker-computer |
| container | Makefile | run-docker-computer | make run-docker-computer |
| serve-dev | Makefile | build-docker-dev | make build-docker-dev |
| build | Makefile | build-docker-full | make build-docker-full |
| serve-dev | Makefile | build-server-exe | make build-server-exe |
| build | Makefile | bundle-webui | make bundle-webui |
| test | Makefile | test | make test |
| test | Makefile | test-api | make test-api |
| utility | Makefile | eval | make eval |
| quality | Makefile | typecheck | make typecheck |
| utility | Makefile | pre-commit | make pre-commit |
| quality | Makefile | lint | make lint |
| quality | Makefile | format | make format |
| utility | Makefile | update-models | make update-models |
| utility | Makefile | precommit | make precommit |
| quality | Makefile | check-rst | make check-rst |
| quality | Makefile | check-openapi | make check-openapi |
| utility | pyproject.toml | gptme | gptme |
| serve-dev | pyproject.toml | gptme-server | gptme-server |
| utility | pyproject.toml | gptme-acp | gptme-acp |
| utility | pyproject.toml | gptme-eval | gptme-eval |
| utility | pyproject.toml | gptme-eval-swebench | gptme-eval-swebench |
| utility | pyproject.toml | gptme-eval-tbench | gptme-eval-tbench |
| utility | pyproject.toml | gptme-util | gptme-util |
| utility | pyproject.toml | gptme-agent | gptme-agent |
| utility | pyproject.toml | gptme-doctor | gptme-doctor |
| utility | pyproject.toml | gptme-auth | gptme-auth |
| utility | pyproject.toml | gptme-onboard | gptme-onboard |
| utility | pyproject.toml | gptme-wut | gptme-wut |
| quality | pyproject.toml | gptme-checkpoint | gptme-checkpoint |
| utility | pyproject.toml | gptme-init | gptme-init |
| utility | pyproject.toml | gptme-dspy | gptme-dspy |
| utility | pyproject.toml | gptme-eval-trends | gptme-eval-trends |
| utility | pyproject.toml | gptme-status | gptme-status |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | langchain |
| vectorStores | chroma |
| modelRuntime | transformers |
| webRuntime | none |
| developerSurface | click |
| observability | opentelemetry, prometheus |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [webui/index.html](../../../../sources/gptme__gptme/webui/index.html) | retrieval signal |
| retrieval | [webui/src/index.css](../../../../sources/gptme__gptme/webui/src/index.css) | retrieval signal |
| retrieval | [webui/src/pages/Index.tsx](../../../../sources/gptme__gptme/webui/src/pages/Index.tsx) | retrieval signal |
| retrieval | [tests/test_agent_memory.py](../../../../sources/gptme__gptme/tests/test_agent_memory.py) | retrieval signal |
| entrypoints | [webui/server.py](../../../../sources/gptme__gptme/webui/server.py) | entrypoints signal |
| entrypoints | [webui/src/App.tsx](../../../../sources/gptme__gptme/webui/src/App.tsx) | entrypoints signal |
| entrypoints | [webui/src/main.tsx](../../../../sources/gptme__gptme/webui/src/main.tsx) | entrypoints signal |
| docs | [README.md](../../../../sources/gptme__gptme/README.md) | docs signal |
| docs | [webui/README.md](../../../../sources/gptme__gptme/webui/README.md) | docs signal |
| docs | [webui/extension/README.md](../../../../sources/gptme__gptme/webui/extension/README.md) | docs signal |
| docs | [tauri/README.md](../../../../sources/gptme__gptme/tauri/README.md) | docs signal |
| eval | [webui/tsconfig.test.json](../../../../sources/gptme__gptme/webui/tsconfig.test.json) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 16 | [webui/server.py](../../../../sources/gptme__gptme/webui/server.py)<br>[webui/src/App.tsx](../../../../sources/gptme__gptme/webui/src/App.tsx)<br>[webui/src/index.css](../../../../sources/gptme__gptme/webui/src/index.css)<br>[webui/src/main.tsx](../../../../sources/gptme__gptme/webui/src/main.tsx)<br>[tauri/src-tauri/src/main.rs](../../../../sources/gptme__gptme/tauri/src-tauri/src/main.rs)<br>[gptme/__main__.py](../../../../sources/gptme__gptme/gptme/__main__.py)<br>[gptme/server/__main__.py](../../../../sources/gptme__gptme/gptme/server/__main__.py)<br>[gptme/server/static/main.js](../../../../sources/gptme__gptme/gptme/server/static/main.js) |
| agentRuntime | 174 | [AGENTS.md](../../../../sources/gptme__gptme/AGENTS.md)<br>[webui/AGENTS.md](../../../../sources/gptme__gptme/webui/AGENTS.md)<br>[webui/src/types/tool.ts](../../../../sources/gptme__gptme/webui/src/types/tool.ts)<br>[webui/src/pages/Agents.tsx](../../../../sources/gptme__gptme/webui/src/pages/Agents.tsx)<br>[webui/src/hooks/use-toast.ts](../../../../sources/gptme__gptme/webui/src/hooks/use-toast.ts)<br>[webui/src/hooks/useAgents.ts](../../../../sources/gptme__gptme/webui/src/hooks/useAgents.ts)<br>[webui/src/hooks/useConversation.ts](../../../../sources/gptme__gptme/webui/src/hooks/useConversation.ts)<br>[webui/src/hooks/useConversationMetadata.ts](../../../../sources/gptme__gptme/webui/src/hooks/useConversationMetadata.ts) |
| mcp | 14 | [tests/test_hooks_mcp_namespace_hint.py](../../../../sources/gptme__gptme/tests/test_hooks_mcp_namespace_hint.py)<br>[tests/test_mcp_adapter.py](../../../../sources/gptme__gptme/tests/test_mcp_adapter.py)<br>[tests/test_mcp_discovery.py](../../../../sources/gptme__gptme/tests/test_mcp_discovery.py)<br>[tests/test_mcp.py](../../../../sources/gptme__gptme/tests/test_mcp.py)<br>[tests/test_tools_mcp.py](../../../../sources/gptme__gptme/tests/test_tools_mcp.py)<br>[tests/test_util_cli_mcp.py](../../../../sources/gptme__gptme/tests/test_util_cli_mcp.py)<br>[gptme/tools/mcp_adapter.py](../../../../sources/gptme__gptme/gptme/tools/mcp_adapter.py)<br>[gptme/tools/mcp.py](../../../../sources/gptme__gptme/gptme/tools/mcp.py) |
| retrieval | 11 | [webui/index.html](../../../../sources/gptme__gptme/webui/index.html)<br>[webui/src/index.css](../../../../sources/gptme__gptme/webui/src/index.css)<br>[webui/src/pages/Index.tsx](../../../../sources/gptme__gptme/webui/src/pages/Index.tsx)<br>[tests/test_agent_memory.py](../../../../sources/gptme__gptme/tests/test_agent_memory.py)<br>[tests/test_lessons_index.py](../../../../sources/gptme__gptme/tests/test_lessons_index.py)<br>[tests/test_tools_rag.py](../../../../sources/gptme__gptme/tests/test_tools_rag.py)<br>[gptme/tools/rag.py](../../../../sources/gptme__gptme/gptme/tools/rag.py)<br>[gptme/server/static/index.html](../../../../sources/gptme__gptme/gptme/server/static/index.html) |
| spec | 8 | [webui/e2e/conversation.spec.ts](../../../../sources/gptme__gptme/webui/e2e/conversation.spec.ts)<br>[webui/e2e/keyboard.spec.ts](../../../../sources/gptme__gptme/webui/e2e/keyboard.spec.ts)<br>[webui/e2e/performance.spec.ts](../../../../sources/gptme__gptme/webui/e2e/performance.spec.ts)<br>[webui/e2e/setup-wizard.spec.ts](../../../../sources/gptme__gptme/webui/e2e/setup-wizard.spec.ts)<br>[gptme/lessons/skills/python-repl/requirements.txt](../../../../sources/gptme__gptme/gptme/lessons/skills/python-repl/requirements.txt)<br>[gptme/eval/swe_extra/swe_bench_test_spec.py](../../../../sources/gptme__gptme/gptme/eval/swe_extra/swe_bench_test_spec.py)<br>[docs/design/elicitation.md](../../../../sources/gptme__gptme/docs/design/elicitation.md)<br>[docs/design/hook-based-confirmations.md](../../../../sources/gptme__gptme/docs/design/hook-based-confirmations.md) |
| eval | 477 | [webui/tsconfig.test.json](../../../../sources/gptme__gptme/webui/tsconfig.test.json)<br>[webui/src/utils/__tests__/addressSpace.test.ts](../../../../sources/gptme__gptme/webui/src/utils/__tests__/addressSpace.test.ts)<br>[webui/src/utils/__tests__/api.test.ts](../../../../sources/gptme__gptme/webui/src/utils/__tests__/api.test.ts)<br>[webui/src/utils/__tests__/apiKeyProviders.test.ts](../../../../sources/gptme__gptme/webui/src/utils/__tests__/apiKeyProviders.test.ts)<br>[webui/src/utils/__tests__/branchUtils.test.ts](../../../../sources/gptme__gptme/webui/src/utils/__tests__/branchUtils.test.ts)<br>[webui/src/utils/__tests__/cloudflareRedirects.test.ts](../../../../sources/gptme__gptme/webui/src/utils/__tests__/cloudflareRedirects.test.ts)<br>[webui/src/utils/__tests__/connectionConfig.test.ts](../../../../sources/gptme__gptme/webui/src/utils/__tests__/connectionConfig.test.ts)<br>[webui/src/utils/__tests__/conversationCost.test.ts](../../../../sources/gptme__gptme/webui/src/utils/__tests__/conversationCost.test.ts) |
| security | 10 | [SECURITY.md](../../../../sources/gptme__gptme/SECURITY.md)<br>[tests/test_llm_auth.py](../../../../sources/gptme__gptme/tests/test_llm_auth.py)<br>[tests/test_oauth_openrouter.py](../../../../sources/gptme__gptme/tests/test_oauth_openrouter.py)<br>[tests/test_server_auth.py](../../../../sources/gptme__gptme/tests/test_server_auth.py)<br>[gptme/server/auth.py](../../../../sources/gptme__gptme/gptme/server/auth.py)<br>[gptme/oauth/__init__.py](../../../../sources/gptme__gptme/gptme/oauth/__init__.py)<br>[gptme/oauth/openrouter.py](../../../../sources/gptme__gptme/gptme/oauth/openrouter.py)<br>[gptme/eval/suites/behavioral/fix_security_path_traversal.py](../../../../sources/gptme__gptme/gptme/eval/suites/behavioral/fix_security_path_traversal.py) |
| ci | 17 | [webui/.github/workflows/ci.yml](../../../../sources/gptme__gptme/webui/.github/workflows/ci.yml)<br>[webui/.github/workflows/deploy.yml](../../../../sources/gptme__gptme/webui/.github/workflows/deploy.yml)<br>[.github/workflows/benchmark.yml](../../../../sources/gptme__gptme/.github/workflows/benchmark.yml)<br>[.github/workflows/bot.yml](../../../../sources/gptme__gptme/.github/workflows/bot.yml)<br>[.github/workflows/build.yml](../../../../sources/gptme__gptme/.github/workflows/build.yml)<br>[.github/workflows/demos.yml](../../../../sources/gptme__gptme/.github/workflows/demos.yml)<br>[.github/workflows/docs.yml](../../../../sources/gptme__gptme/.github/workflows/docs.yml)<br>[.github/workflows/eval-ci.yml](../../../../sources/gptme__gptme/.github/workflows/eval-ci.yml) |
| container | 8 | [docker-compose.yml](../../../../sources/gptme__gptme/docker-compose.yml)<br>[scripts/Dockerfile](../../../../sources/gptme__gptme/scripts/Dockerfile)<br>[scripts/Dockerfile.computer](../../../../sources/gptme__gptme/scripts/Dockerfile.computer)<br>[scripts/Dockerfile.dev](../../../../sources/gptme__gptme/scripts/Dockerfile.dev)<br>[scripts/Dockerfile.eval](../../../../sources/gptme__gptme/scripts/Dockerfile.eval)<br>[scripts/Dockerfile.github-bot](../../../../sources/gptme__gptme/scripts/Dockerfile.github-bot)<br>[scripts/Dockerfile.selfhost](../../../../sources/gptme__gptme/scripts/Dockerfile.selfhost)<br>[scripts/Dockerfile.server](../../../../sources/gptme__gptme/scripts/Dockerfile.server) |
| instruction | 2 | [AGENTS.md](../../../../sources/gptme__gptme/AGENTS.md)<br>[webui/AGENTS.md](../../../../sources/gptme__gptme/webui/AGENTS.md) |
| docs | 127 | [README.md](../../../../sources/gptme__gptme/README.md)<br>[webui/README.md](../../../../sources/gptme__gptme/webui/README.md)<br>[webui/extension/README.md](../../../../sources/gptme__gptme/webui/extension/README.md)<br>[tauri/README.md](../../../../sources/gptme__gptme/tauri/README.md)<br>[site/downloads.html](../../../../sources/gptme__gptme/site/downloads.html)<br>[site/style.css](../../../../sources/gptme__gptme/site/style.css)<br>[site/template.html](../../../../sources/gptme__gptme/site/template.html)<br>[gptme-extension/README.md](../../../../sources/gptme__gptme/gptme-extension/README.md) |
| config | 14 | [Makefile](../../../../sources/gptme__gptme/Makefile)<br>[poetry.lock](../../../../sources/gptme__gptme/poetry.lock)<br>[pyproject.toml](../../../../sources/gptme__gptme/pyproject.toml)<br>[webui/package.json](../../../../sources/gptme__gptme/webui/package.json)<br>[webui/tsconfig.json](../../../../sources/gptme__gptme/webui/tsconfig.json)<br>[webui/extension/package.json](../../../../sources/gptme__gptme/webui/extension/package.json)<br>[webui/extension/tsconfig.json](../../../../sources/gptme__gptme/webui/extension/tsconfig.json)<br>[tauri/Makefile](../../../../sources/gptme__gptme/tauri/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 477 | [webui/tsconfig.test.json](../../../../sources/gptme__gptme/webui/tsconfig.test.json)<br>[webui/src/utils/__tests__/addressSpace.test.ts](../../../../sources/gptme__gptme/webui/src/utils/__tests__/addressSpace.test.ts)<br>[webui/src/utils/__tests__/api.test.ts](../../../../sources/gptme__gptme/webui/src/utils/__tests__/api.test.ts)<br>[webui/src/utils/__tests__/apiKeyProviders.test.ts](../../../../sources/gptme__gptme/webui/src/utils/__tests__/apiKeyProviders.test.ts)<br>[webui/src/utils/__tests__/branchUtils.test.ts](../../../../sources/gptme__gptme/webui/src/utils/__tests__/branchUtils.test.ts)<br>[webui/src/utils/__tests__/cloudflareRedirects.test.ts](../../../../sources/gptme__gptme/webui/src/utils/__tests__/cloudflareRedirects.test.ts) |
| CI workflows | 17 | [webui/.github/workflows/ci.yml](../../../../sources/gptme__gptme/webui/.github/workflows/ci.yml)<br>[webui/.github/workflows/deploy.yml](../../../../sources/gptme__gptme/webui/.github/workflows/deploy.yml)<br>[.github/workflows/benchmark.yml](../../../../sources/gptme__gptme/.github/workflows/benchmark.yml)<br>[.github/workflows/bot.yml](../../../../sources/gptme__gptme/.github/workflows/bot.yml)<br>[.github/workflows/build.yml](../../../../sources/gptme__gptme/.github/workflows/build.yml)<br>[.github/workflows/demos.yml](../../../../sources/gptme__gptme/.github/workflows/demos.yml) |
| Containers / deploy | 8 | [docker-compose.yml](../../../../sources/gptme__gptme/docker-compose.yml)<br>[scripts/Dockerfile](../../../../sources/gptme__gptme/scripts/Dockerfile)<br>[scripts/Dockerfile.computer](../../../../sources/gptme__gptme/scripts/Dockerfile.computer)<br>[scripts/Dockerfile.dev](../../../../sources/gptme__gptme/scripts/Dockerfile.dev)<br>[scripts/Dockerfile.eval](../../../../sources/gptme__gptme/scripts/Dockerfile.eval)<br>[scripts/Dockerfile.github-bot](../../../../sources/gptme__gptme/scripts/Dockerfile.github-bot) |
| Security / policy | 10 | [SECURITY.md](../../../../sources/gptme__gptme/SECURITY.md)<br>[tests/test_llm_auth.py](../../../../sources/gptme__gptme/tests/test_llm_auth.py)<br>[tests/test_oauth_openrouter.py](../../../../sources/gptme__gptme/tests/test_oauth_openrouter.py)<br>[tests/test_server_auth.py](../../../../sources/gptme__gptme/tests/test_server_auth.py)<br>[gptme/server/auth.py](../../../../sources/gptme__gptme/gptme/server/auth.py)<br>[gptme/oauth/__init__.py](../../../../sources/gptme__gptme/gptme/oauth/__init__.py) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/gptme__gptme/AGENTS.md)<br>[webui/AGENTS.md](../../../../sources/gptme__gptme/webui/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `webui/index.html`, `webui/src/index.css`, `webui/src/pages/Index.tsx`.
2. Trace execution through entrypoints: `webui/server.py`, `webui/src/App.tsx`, `webui/src/index.css`.
3. Map agent/tool runtime through: `AGENTS.md`, `webui/AGENTS.md`, `webui/src/types/tool.ts`.
4. Inspect retrieval/memory/indexing through: `webui/index.html`, `webui/src/index.css`, `webui/src/pages/Index.tsx`.
5. Verify behavior through test/eval files: `webui/tsconfig.test.json`, `webui/src/utils/__tests__/addressSpace.test.ts`, `webui/src/utils/__tests__/api.test.ts`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Your agent in your terminal, equipped with local tools writes code, uses the terminal, browses the web. Make your own pe. 핵심 구조 신호는 Python, pyproject.toml, docker-compose.yml, Makefile, README.md, AGENTS.md이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
