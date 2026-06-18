# langbot-app/LangBot 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Production-grade platform for building agentic IM bots - 生产级多平台智能机器人开发平台/ Agent、知识库编排、插件系统 / Bots for Discord / Slack / LINE / Telegram / WeChat(企业微信, 企微智能机器人, 公众号) / 飞书 / 钉钉 / QQ / Matrix e.g. Integrated with ChatGPT(GPT), DeepSeek, Dify, n8n, Langflow, Coze, Claude, Gemini, MiniMax, Ollama, SiliconFlow, Moonshot, openclaw / hermes agent, deerflow

## 요약

- 조사 단위: `sources/langbot-app__LangBot` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,010 files, 242 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, web/src/app/home/plugins/mcp-server/MCPCardVO.ts, web/src/app/home/plugins/mcp-server/MCPServerComponent.tsx이고, 의존성 단서는 openai, anthropic, mcp, langchain, vscode, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | langbot-app/LangBot |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 16358 |
| Forks | 1453 |
| License | Apache-2.0 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/langbot-app__LangBot](../../../../sources/langbot-app__LangBot) |
| 기존 보고서 | [reports/llm-wiki/repositories/langbot-app__LangBot.md](../../../llm-wiki/repositories/langbot-app__LangBot.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1010 / 242 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .github, docker, docs, res, scripts, src, tests, web |
| 상위 확장자 | .py: 545, .tsx: 152, .yaml: 77, .ts: 59, .svg: 42, .md: 33, .png: 23, .json: 17, .yml: 16, .css: 10, (none): 9, .sh: 7 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| web | source boundary | 58 |
| tests | validation surface | 53 |
| src | source boundary | 38 |
| docs | documentation surface | 16 |
| .github | ci surface | 1 |
| docker | documentation surface | 1 |
| res | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | langchain |
| vectorStores | chroma, qdrant, milvus, pgvector |
| modelRuntime | ollama, llama |
| webRuntime | 없음 |
| developerSurface | vscode |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 172 | [run_tests.sh](../../../../sources/langbot-app__LangBot/run_tests.sh)<br>[test-embed.html](../../../../sources/langbot-app__LangBot/test-embed.html)<br>[web/tests/e2e/crud-smoke.spec.ts](../../../../sources/langbot-app__LangBot/web/tests/e2e/crud-smoke.spec.ts)<br>[web/tests/e2e/home-smoke.spec.ts](../../../../sources/langbot-app__LangBot/web/tests/e2e/home-smoke.spec.ts)<br>[web/tests/e2e/login.spec.ts](../../../../sources/langbot-app__LangBot/web/tests/e2e/login.spec.ts)<br>[web/tests/e2e/fixtures/langbot-api.ts](../../../../sources/langbot-app__LangBot/web/tests/e2e/fixtures/langbot-api.ts) |
| CI workflow | 11 | [.github/workflows/build-dev-image.yaml](../../../../sources/langbot-app__LangBot/.github/workflows/build-dev-image.yaml)<br>[.github/workflows/build-docker-image.yml](../../../../sources/langbot-app__LangBot/.github/workflows/build-docker-image.yml)<br>[.github/workflows/build-release-artifacts.yaml](../../../../sources/langbot-app__LangBot/.github/workflows/build-release-artifacts.yaml)<br>[.github/workflows/check-i18n.yml](../../../../sources/langbot-app__LangBot/.github/workflows/check-i18n.yml)<br>[.github/workflows/cla.yml](../../../../sources/langbot-app__LangBot/.github/workflows/cla.yml)<br>[.github/workflows/frontend-tests.yml](../../../../sources/langbot-app__LangBot/.github/workflows/frontend-tests.yml) |
| 컨테이너/배포 | 2 | [Dockerfile](../../../../sources/langbot-app__LangBot/Dockerfile)<br>[docker/docker-compose.yaml](../../../../sources/langbot-app__LangBot/docker/docker-compose.yaml) |
| 보안/정책 | 4 | [web/src/app/auth/space/callback/page.tsx](../../../../sources/langbot-app__LangBot/web/src/app/auth/space/callback/page.tsx)<br>[tests/unit_tests/provider/test_localagent_sandbox_exec.py](../../../../sources/langbot-app__LangBot/tests/unit_tests/provider/test_localagent_sandbox_exec.py)<br>[src/langbot/pkg/box/policy.py](../../../../sources/langbot-app__LangBot/src/langbot/pkg/box/policy.py)<br>[docs/API_KEY_AUTH.md](../../../../sources/langbot-app__LangBot/docs/API_KEY_AUTH.md) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/langbot-app__LangBot/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `.mcp.json`, `web/src/app/home/plugins/mcp-server/MCPCardVO.ts`, `web/src/app/home/plugins/mcp-server/MCPServerComponent.tsx`.
2. entrypoint를 따라 실행 흐름 확인: `main.py`, `web/src/main.tsx`, `src/langbot/__main__.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `web/src/hooks/use-mobile.ts`, `web/src/hooks/useAsyncTask.ts`.
4. retrieval/memory/indexing 확인: `test-embed.html`, `web/index.html`, `web/src/i18n/index.ts`.
5. test/eval 파일로 동작 검증: `run_tests.sh`, `test-embed.html`, `web/tests/e2e/crud-smoke.spec.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Production grade platform for building agentic IM bots 生产级多平台智能机器人开发平台/ Agent、知识库编排、插件系统 / Bots for Discord / Slack / LI. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, Makefile, README.md, AGENTS.md이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
