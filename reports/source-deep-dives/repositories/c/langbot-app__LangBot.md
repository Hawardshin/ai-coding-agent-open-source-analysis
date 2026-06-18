# langbot-app/LangBot Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Production-grade platform for building agentic IM bots - 生产级多平台智能机器人开发平台/ Agent、知识库编排、插件系统 / Bots for Discord / Slack / LINE / Telegram / WeChat(企业微信, 企微智能机器人, 公众号) / 飞书 / 钉钉 / QQ / Matrix e.g. Integrated with ChatGPT(GPT), DeepSeek, Dify, n8n, Langflow, Coze, Claude, Gemini, MiniMax, Ollama, SiliconFlow, Moonshot, openclaw / hermes agent, deerflow

## 요약

- 조사 단위: `sources/langbot-app__LangBot` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,010 files, 242 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, web/src/app/home/plugins/mcp-server/MCPCardVO.ts, web/src/app/home/plugins/mcp-server/MCPServerComponent.tsx이고, 의존성 단서는 openai, anthropic, mcp, langchain, vscode, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | langbot-app/LangBot |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 16358 |
| Forks | 1453 |
| License | Apache-2.0 |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/langbot-app__LangBot](../../../../sources/langbot-app__LangBot) |
| Existing report | [reports/llm-wiki/repositories/langbot-app__LangBot.md](../../../llm-wiki/repositories/langbot-app__LangBot.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1010 / 242 |
| Max observed depth | 9 |
| Top directories | .github, docker, docs, res, scripts, src, tests, web |
| Top extensions | .py: 545, .tsx: 152, .yaml: 77, .ts: 59, .svg: 42, .md: 33, .png: 23, .json: 17, .yml: 16, .css: 10, (none): 9, .sh: 7 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| web | source boundary | 58 |
| tests | validation surface | 53 |
| src | source boundary | 38 |
| docs | documentation surface | 16 |
| .github | ci surface | 1 |
| docker | documentation surface | 1 |
| res | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | test | make test |
| test | Makefile | test-quick | make test-quick |
| test | Makefile | test-integration-fast | make test-integration-fast |
| test | Makefile | test-coverage | make test-coverage |
| test | Makefile | test-all-local | make test-all-local |
| quality | Makefile | lint | make lint |
| quality | Makefile | lint-fix | make lint-fix |
| utility | pyproject.toml | langbot | langbot |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | langchain |
| vectorStores | chroma, qdrant, milvus, pgvector |
| modelRuntime | ollama, llama |
| webRuntime | none |
| developerSurface | vscode |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [.mcp.json](../../../../sources/langbot-app__LangBot/.mcp.json) | mcp signal |
| mcp | [web/src/app/home/plugins/mcp-server/MCPCardVO.ts](../../../../sources/langbot-app__LangBot/web/src/app/home/plugins/mcp-server/MCPCardVO.ts) | mcp signal |
| mcp | [web/src/app/home/plugins/mcp-server/MCPServerComponent.tsx](../../../../sources/langbot-app__LangBot/web/src/app/home/plugins/mcp-server/MCPServerComponent.tsx) | mcp signal |
| mcp | [web/src/app/home/plugins/mcp-server/mcp-form/MCPDeleteConfirmDialog.tsx](../../../../sources/langbot-app__LangBot/web/src/app/home/plugins/mcp-server/mcp-form/MCPDeleteConfirmDialog.tsx) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/langbot-app__LangBot/AGENTS.md) | agentRuntime signal |
| agentRuntime | [web/src/hooks/use-mobile.ts](../../../../sources/langbot-app__LangBot/web/src/hooks/use-mobile.ts) | agentRuntime signal |
| agentRuntime | [web/src/hooks/useAsyncTask.ts](../../../../sources/langbot-app__LangBot/web/src/hooks/useAsyncTask.ts) | agentRuntime signal |
| agentRuntime | [web/src/hooks/useDocumentTitle.ts](../../../../sources/langbot-app__LangBot/web/src/hooks/useDocumentTitle.ts) | agentRuntime signal |
| entrypoints | [main.py](../../../../sources/langbot-app__LangBot/main.py) | entrypoints signal |
| entrypoints | [web/src/main.tsx](../../../../sources/langbot-app__LangBot/web/src/main.tsx) | entrypoints signal |
| entrypoints | [src/langbot/__main__.py](../../../../sources/langbot-app__LangBot/src/langbot/__main__.py) | entrypoints signal |
| entrypoints | [src/langbot/pkg/api/http/controller/main.py](../../../../sources/langbot-app__LangBot/src/langbot/pkg/api/http/controller/main.py) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [main.py](../../../../sources/langbot-app__LangBot/main.py)<br>[web/src/main.tsx](../../../../sources/langbot-app__LangBot/web/src/main.tsx)<br>[src/langbot/__main__.py](../../../../sources/langbot-app__LangBot/src/langbot/__main__.py)<br>[src/langbot/pkg/api/http/controller/main.py](../../../../sources/langbot-app__LangBot/src/langbot/pkg/api/http/controller/main.py) |
| agentRuntime | 33 | [AGENTS.md](../../../../sources/langbot-app__LangBot/AGENTS.md)<br>[web/src/hooks/use-mobile.ts](../../../../sources/langbot-app__LangBot/web/src/hooks/use-mobile.ts)<br>[web/src/hooks/useAsyncTask.ts](../../../../sources/langbot-app__LangBot/web/src/hooks/useAsyncTask.ts)<br>[web/src/hooks/useDocumentTitle.ts](../../../../sources/langbot-app__LangBot/web/src/hooks/useDocumentTitle.ts)<br>[web/src/components/ui/context-menu.tsx](../../../../sources/langbot-app__LangBot/web/src/components/ui/context-menu.tsx)<br>[web/src/app/infra/hooks/useBoxStatus.ts](../../../../sources/langbot-app__LangBot/web/src/app/infra/hooks/useBoxStatus.ts)<br>[web/src/app/home/skills/page.tsx](../../../../sources/langbot-app__LangBot/web/src/app/home/skills/page.tsx)<br>[web/src/app/home/skills/SkillDetailContent.tsx](../../../../sources/langbot-app__LangBot/web/src/app/home/skills/SkillDetailContent.tsx) |
| mcp | 19 | [.mcp.json](../../../../sources/langbot-app__LangBot/.mcp.json)<br>[web/src/app/home/plugins/mcp-server/MCPCardVO.ts](../../../../sources/langbot-app__LangBot/web/src/app/home/plugins/mcp-server/MCPCardVO.ts)<br>[web/src/app/home/plugins/mcp-server/MCPServerComponent.tsx](../../../../sources/langbot-app__LangBot/web/src/app/home/plugins/mcp-server/MCPServerComponent.tsx)<br>[web/src/app/home/plugins/mcp-server/mcp-form/MCPDeleteConfirmDialog.tsx](../../../../sources/langbot-app__LangBot/web/src/app/home/plugins/mcp-server/mcp-form/MCPDeleteConfirmDialog.tsx)<br>[web/src/app/home/plugins/mcp-server/mcp-form/MCPFormDialog.tsx](../../../../sources/langbot-app__LangBot/web/src/app/home/plugins/mcp-server/mcp-form/MCPFormDialog.tsx)<br>[web/src/app/home/plugins/mcp-server/mcp-card/MCPCardComponent.tsx](../../../../sources/langbot-app__LangBot/web/src/app/home/plugins/mcp-server/mcp-card/MCPCardComponent.tsx)<br>[web/src/app/home/mcp/MCPDetailContent.tsx](../../../../sources/langbot-app__LangBot/web/src/app/home/mcp/MCPDetailContent.tsx)<br>[web/src/app/home/mcp/page.tsx](../../../../sources/langbot-app__LangBot/web/src/app/home/mcp/page.tsx) |
| retrieval | 66 | [test-embed.html](../../../../sources/langbot-app__LangBot/test-embed.html)<br>[web/index.html](../../../../sources/langbot-app__LangBot/web/index.html)<br>[web/src/i18n/index.ts](../../../../sources/langbot-app__LangBot/web/src/i18n/index.ts)<br>[web/src/app/infra/http/index.ts](../../../../sources/langbot-app__LangBot/web/src/app/infra/http/index.ts)<br>[web/src/app/infra/entities/plugin/index.ts](../../../../sources/langbot-app__LangBot/web/src/app/infra/entities/plugin/index.ts)<br>[web/src/app/infra/entities/pipeline/index.ts](../../../../sources/langbot-app__LangBot/web/src/app/infra/entities/pipeline/index.ts)<br>[web/src/app/infra/entities/message/index.ts](../../../../sources/langbot-app__LangBot/web/src/app/infra/entities/message/index.ts)<br>[web/src/app/infra/entities/api/index.ts](../../../../sources/langbot-app__LangBot/web/src/app/infra/entities/api/index.ts) |
| spec | 5 | [web/tests/e2e/crud-smoke.spec.ts](../../../../sources/langbot-app__LangBot/web/tests/e2e/crud-smoke.spec.ts)<br>[web/tests/e2e/home-smoke.spec.ts](../../../../sources/langbot-app__LangBot/web/tests/e2e/home-smoke.spec.ts)<br>[web/tests/e2e/login.spec.ts](../../../../sources/langbot-app__LangBot/web/tests/e2e/login.spec.ts)<br>[src/langbot/pkg/persistence/migrations/dbm020_knowledge_engine_plugin_architecture.py](../../../../sources/langbot-app__LangBot/src/langbot/pkg/persistence/migrations/dbm020_knowledge_engine_plugin_architecture.py)<br>[docs/review/box-architecture.md](../../../../sources/langbot-app__LangBot/docs/review/box-architecture.md) |
| eval | 172 | [run_tests.sh](../../../../sources/langbot-app__LangBot/run_tests.sh)<br>[test-embed.html](../../../../sources/langbot-app__LangBot/test-embed.html)<br>[web/tests/e2e/crud-smoke.spec.ts](../../../../sources/langbot-app__LangBot/web/tests/e2e/crud-smoke.spec.ts)<br>[web/tests/e2e/home-smoke.spec.ts](../../../../sources/langbot-app__LangBot/web/tests/e2e/home-smoke.spec.ts)<br>[web/tests/e2e/login.spec.ts](../../../../sources/langbot-app__LangBot/web/tests/e2e/login.spec.ts)<br>[web/tests/e2e/fixtures/langbot-api.ts](../../../../sources/langbot-app__LangBot/web/tests/e2e/fixtures/langbot-api.ts)<br>[tests/__init__.py](../../../../sources/langbot-app__LangBot/tests/__init__.py)<br>[tests/README.md](../../../../sources/langbot-app__LangBot/tests/README.md) |
| security | 4 | [web/src/app/auth/space/callback/page.tsx](../../../../sources/langbot-app__LangBot/web/src/app/auth/space/callback/page.tsx)<br>[tests/unit_tests/provider/test_localagent_sandbox_exec.py](../../../../sources/langbot-app__LangBot/tests/unit_tests/provider/test_localagent_sandbox_exec.py)<br>[src/langbot/pkg/box/policy.py](../../../../sources/langbot-app__LangBot/src/langbot/pkg/box/policy.py)<br>[docs/API_KEY_AUTH.md](../../../../sources/langbot-app__LangBot/docs/API_KEY_AUTH.md) |
| ci | 11 | [.github/workflows/build-dev-image.yaml](../../../../sources/langbot-app__LangBot/.github/workflows/build-dev-image.yaml)<br>[.github/workflows/build-docker-image.yml](../../../../sources/langbot-app__LangBot/.github/workflows/build-docker-image.yml)<br>[.github/workflows/build-release-artifacts.yaml](../../../../sources/langbot-app__LangBot/.github/workflows/build-release-artifacts.yaml)<br>[.github/workflows/check-i18n.yml](../../../../sources/langbot-app__LangBot/.github/workflows/check-i18n.yml)<br>[.github/workflows/cla.yml](../../../../sources/langbot-app__LangBot/.github/workflows/cla.yml)<br>[.github/workflows/frontend-tests.yml](../../../../sources/langbot-app__LangBot/.github/workflows/frontend-tests.yml)<br>[.github/workflows/lint.yml](../../../../sources/langbot-app__LangBot/.github/workflows/lint.yml)<br>[.github/workflows/publish-to-pypi.yml](../../../../sources/langbot-app__LangBot/.github/workflows/publish-to-pypi.yml) |
| container | 2 | [Dockerfile](../../../../sources/langbot-app__LangBot/Dockerfile)<br>[docker/docker-compose.yaml](../../../../sources/langbot-app__LangBot/docker/docker-compose.yaml) |
| instruction | 1 | [AGENTS.md](../../../../sources/langbot-app__LangBot/AGENTS.md) |
| docs | 29 | [README_CN.md](../../../../sources/langbot-app__LangBot/README_CN.md)<br>[README_ES.md](../../../../sources/langbot-app__LangBot/README_ES.md)<br>[README_FR.md](../../../../sources/langbot-app__LangBot/README_FR.md)<br>[README_JP.md](../../../../sources/langbot-app__LangBot/README_JP.md)<br>[README_KO.md](../../../../sources/langbot-app__LangBot/README_KO.md)<br>[README_RU.md](../../../../sources/langbot-app__LangBot/README_RU.md)<br>[README_TW.md](../../../../sources/langbot-app__LangBot/README_TW.md)<br>[README_VI.md](../../../../sources/langbot-app__LangBot/README_VI.md) |
| config | 5 | [Makefile](../../../../sources/langbot-app__LangBot/Makefile)<br>[pyproject.toml](../../../../sources/langbot-app__LangBot/pyproject.toml)<br>[uv.lock](../../../../sources/langbot-app__LangBot/uv.lock)<br>[web/package.json](../../../../sources/langbot-app__LangBot/web/package.json)<br>[web/tsconfig.json](../../../../sources/langbot-app__LangBot/web/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 172 | [run_tests.sh](../../../../sources/langbot-app__LangBot/run_tests.sh)<br>[test-embed.html](../../../../sources/langbot-app__LangBot/test-embed.html)<br>[web/tests/e2e/crud-smoke.spec.ts](../../../../sources/langbot-app__LangBot/web/tests/e2e/crud-smoke.spec.ts)<br>[web/tests/e2e/home-smoke.spec.ts](../../../../sources/langbot-app__LangBot/web/tests/e2e/home-smoke.spec.ts)<br>[web/tests/e2e/login.spec.ts](../../../../sources/langbot-app__LangBot/web/tests/e2e/login.spec.ts)<br>[web/tests/e2e/fixtures/langbot-api.ts](../../../../sources/langbot-app__LangBot/web/tests/e2e/fixtures/langbot-api.ts) |
| CI workflows | 11 | [.github/workflows/build-dev-image.yaml](../../../../sources/langbot-app__LangBot/.github/workflows/build-dev-image.yaml)<br>[.github/workflows/build-docker-image.yml](../../../../sources/langbot-app__LangBot/.github/workflows/build-docker-image.yml)<br>[.github/workflows/build-release-artifacts.yaml](../../../../sources/langbot-app__LangBot/.github/workflows/build-release-artifacts.yaml)<br>[.github/workflows/check-i18n.yml](../../../../sources/langbot-app__LangBot/.github/workflows/check-i18n.yml)<br>[.github/workflows/cla.yml](../../../../sources/langbot-app__LangBot/.github/workflows/cla.yml)<br>[.github/workflows/frontend-tests.yml](../../../../sources/langbot-app__LangBot/.github/workflows/frontend-tests.yml) |
| Containers / deploy | 2 | [Dockerfile](../../../../sources/langbot-app__LangBot/Dockerfile)<br>[docker/docker-compose.yaml](../../../../sources/langbot-app__LangBot/docker/docker-compose.yaml) |
| Security / policy | 4 | [web/src/app/auth/space/callback/page.tsx](../../../../sources/langbot-app__LangBot/web/src/app/auth/space/callback/page.tsx)<br>[tests/unit_tests/provider/test_localagent_sandbox_exec.py](../../../../sources/langbot-app__LangBot/tests/unit_tests/provider/test_localagent_sandbox_exec.py)<br>[src/langbot/pkg/box/policy.py](../../../../sources/langbot-app__LangBot/src/langbot/pkg/box/policy.py)<br>[docs/API_KEY_AUTH.md](../../../../sources/langbot-app__LangBot/docs/API_KEY_AUTH.md) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/langbot-app__LangBot/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `.mcp.json`, `web/src/app/home/plugins/mcp-server/MCPCardVO.ts`, `web/src/app/home/plugins/mcp-server/MCPServerComponent.tsx`.
2. Trace execution through entrypoints: `main.py`, `web/src/main.tsx`, `src/langbot/__main__.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `web/src/hooks/use-mobile.ts`, `web/src/hooks/useAsyncTask.ts`.
4. Inspect retrieval/memory/indexing through: `test-embed.html`, `web/index.html`, `web/src/i18n/index.ts`.
5. Verify behavior through test/eval files: `run_tests.sh`, `test-embed.html`, `web/tests/e2e/crud-smoke.spec.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Production grade platform for building agentic IM bots 生产级多平台智能机器人开发平台/ Agent、知识库编排、插件系统 / Bots for Discord / Slack / LI. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, Makefile, README.md, AGENTS.md이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
