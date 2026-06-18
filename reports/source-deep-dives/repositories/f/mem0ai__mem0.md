# mem0ai/mem0 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Local clone structure analysis: 1671 files, 340 directories.

## 요약

- 조사 단위: `sources/mem0ai__mem0` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,671 files, 340 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=openmemory/api/tests/test_mcp_server.py, openmemory/api/app/mcp_server.py, integrations/mem0-plugin/.codex-mcp.json이고, 의존성 단서는 openai, langchain, pydantic, transformers, ollama, llama, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | mem0ai/mem0 |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 58803 |
| Forks | 6767 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/mem0ai__mem0](../../../../sources/mem0ai__mem0) |
| 기존 보고서 | [reports/global-trending/repositories/mem0ai__mem0.md](../../../global-trending/repositories/mem0ai__mem0.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1671 / 340 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .agents, .claude-plugin, .codex-plugin, .cursor-plugin, .github, cli, cookbooks, docs, evaluation, examples, integrations, mem0, mem0-ts, openmemory, scripts, server, skills, tests |
| 상위 확장자 | .py: 372, .ts: 333, .mdx: 241, .tsx: 227, .md: 129, .json: 65, .png: 54, (none): 45, .yml: 35, .svg: 33, .sh: 28, .js: 16 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 81 |
| docs | documentation surface | 22 |
| server | source boundary | 18 |
| examples/multimodal-demo | examples workspace | 5 |
| examples/vercel-ai-sdk-chat-app | examples workspace | 5 |
| examples/yt-assistant-chrome | examples workspace | 2 |
| .github | ci surface | 1 |
| cli | top-level component | 1 |
| cookbooks | top-level component | 1 |
| evaluation | top-level component | 1 |
| examples | top-level component | 1 |
| examples/mem0-demo | examples workspace | 1 |
| examples/openai-inbuilt-tools | examples workspace | 1 |
| integrations | top-level component | 1 |
| mem0 | top-level component | 1 |
| mem0-ts | top-level component | 1 |
| openmemory | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | all | make all |
| utility | Makefile | install | make install |
| utility | Makefile | install_all | make install_all |
| quality | Makefile | format | make format |
| utility | Makefile | sort | make sort |
| quality | Makefile | lint | make lint |
| utility | Makefile | docs | make docs |
| build | Makefile | build | make build |
| utility | Makefile | publish | make publish |
| utility | Makefile | clean | make clean |
| test | Makefile | test | make test |
| test | Makefile | test-py-3.10 | make test-py-3.10 |
| test | Makefile | test-py-3.11 | make test-py-3.11 |
| test | Makefile | test-py-3.12 | make test-py-3.12 |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | 없음 |
| agentFrameworks | langchain |
| vectorStores | chroma, qdrant, milvus, weaviate, faiss |
| modelRuntime | transformers, ollama, llama |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [openmemory/api/tests/test_mcp_server.py](../../../../sources/mem0ai__mem0/openmemory/api/tests/test_mcp_server.py) | mcp signal |
| mcp | [openmemory/api/app/mcp_server.py](../../../../sources/mem0ai__mem0/openmemory/api/app/mcp_server.py) | mcp signal |
| mcp | [integrations/mem0-plugin/.codex-mcp.json](../../../../sources/mem0ai__mem0/integrations/mem0-plugin/.codex-mcp.json) | mcp signal |
| mcp | [integrations/mem0-plugin/.cursor-mcp.json](../../../../sources/mem0ai__mem0/integrations/mem0-plugin/.cursor-mcp.json) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/mem0ai__mem0/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/memory/test_json_prompt_fix.py](../../../../sources/mem0ai__mem0/tests/memory/test_json_prompt_fix.py) | agentRuntime signal |
| agentRuntime | [tests/memory/test_main.py](../../../../sources/mem0ai__mem0/tests/memory/test_main.py) | agentRuntime signal |
| agentRuntime | [tests/memory/test_memory_utils.py](../../../../sources/mem0ai__mem0/tests/memory/test_memory_utils.py) | agentRuntime signal |
| entrypoints | [server/main.py](../../../../sources/mem0ai__mem0/server/main.py) | entrypoints signal |
| entrypoints | [openmemory/api/main.py](../../../../sources/mem0ai__mem0/openmemory/api/main.py) | entrypoints signal |
| entrypoints | [mem0-ts/src/oss/src/index.ts](../../../../sources/mem0ai__mem0/mem0-ts/src/oss/src/index.ts) | entrypoints signal |
| entrypoints | [mem0-ts/src/community/src/index.ts](../../../../sources/mem0ai__mem0/mem0-ts/src/community/src/index.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 17 | [server/main.py](../../../../sources/mem0ai__mem0/server/main.py)<br>[openmemory/api/main.py](../../../../sources/mem0ai__mem0/openmemory/api/main.py)<br>[mem0-ts/src/oss/src/index.ts](../../../../sources/mem0ai__mem0/mem0-ts/src/oss/src/index.ts)<br>[mem0-ts/src/community/src/index.ts](../../../../sources/mem0ai__mem0/mem0-ts/src/community/src/index.ts)<br>[mem0/proxy/main.py](../../../../sources/mem0ai__mem0/mem0/proxy/main.py)<br>[mem0/memory/main.py](../../../../sources/mem0ai__mem0/mem0/memory/main.py)<br>[mem0/client/main.py](../../../../sources/mem0ai__mem0/mem0/client/main.py)<br>[integrations/vercel-ai-sdk/src/index.ts](../../../../sources/mem0ai__mem0/integrations/vercel-ai-sdk/src/index.ts) |
| agentRuntime | 200 | [AGENTS.md](../../../../sources/mem0ai__mem0/AGENTS.md)<br>[tests/memory/test_json_prompt_fix.py](../../../../sources/mem0ai__mem0/tests/memory/test_json_prompt_fix.py)<br>[tests/memory/test_main.py](../../../../sources/mem0ai__mem0/tests/memory/test_main.py)<br>[tests/memory/test_memory_utils.py](../../../../sources/mem0ai__mem0/tests/memory/test_memory_utils.py)<br>[tests/memory/test_safe_deepcopy_config.py](../../../../sources/mem0ai__mem0/tests/memory/test_safe_deepcopy_config.py)<br>[tests/memory/test_storage.py](../../../../sources/mem0ai__mem0/tests/memory/test_storage.py)<br>[skills/README.md](../../../../sources/mem0ai__mem0/skills/README.md)<br>[skills/mem0-vercel-ai-sdk/LICENSE](../../../../sources/mem0ai__mem0/skills/mem0-vercel-ai-sdk/LICENSE) |
| mcp | 9 | [openmemory/api/tests/test_mcp_server.py](../../../../sources/mem0ai__mem0/openmemory/api/tests/test_mcp_server.py)<br>[openmemory/api/app/mcp_server.py](../../../../sources/mem0ai__mem0/openmemory/api/app/mcp_server.py)<br>[integrations/mem0-plugin/.codex-mcp.json](../../../../sources/mem0ai__mem0/integrations/mem0-plugin/.codex-mcp.json)<br>[integrations/mem0-plugin/.cursor-mcp.json](../../../../sources/mem0ai__mem0/integrations/mem0-plugin/.cursor-mcp.json)<br>[integrations/mem0-plugin/.mcp.json](../../../../sources/mem0ai__mem0/integrations/mem0-plugin/.mcp.json)<br>[integrations/mem0-plugin/mcp_config.json](../../../../sources/mem0ai__mem0/integrations/mem0-plugin/mcp_config.json)<br>[docs/platform/mem0-mcp.mdx](../../../../sources/mem0ai__mem0/docs/platform/mem0-mcp.mdx)<br>[docs/platform/features/mcp-integration.mdx](../../../../sources/mem0ai__mem0/docs/platform/features/mcp-integration.mdx) |
| retrieval | 225 | [tests/test_memory_integration.py](../../../../sources/mem0ai__mem0/tests/test_memory_integration.py)<br>[tests/test_memory.py](../../../../sources/mem0ai__mem0/tests/test_memory.py)<br>[tests/vector_stores/test_azure_ai_search.py](../../../../sources/mem0ai__mem0/tests/vector_stores/test_azure_ai_search.py)<br>[tests/vector_stores/test_azure_mysql.py](../../../../sources/mem0ai__mem0/tests/vector_stores/test_azure_mysql.py)<br>[tests/vector_stores/test_baidu.py](../../../../sources/mem0ai__mem0/tests/vector_stores/test_baidu.py)<br>[tests/vector_stores/test_cassandra.py](../../../../sources/mem0ai__mem0/tests/vector_stores/test_cassandra.py)<br>[tests/vector_stores/test_chroma.py](../../../../sources/mem0ai__mem0/tests/vector_stores/test_chroma.py)<br>[tests/vector_stores/test_databricks.py](../../../../sources/mem0ai__mem0/tests/vector_stores/test_databricks.py) |
| spec | 8 | [skills/mem0/references/architecture.md](../../../../sources/mem0ai__mem0/skills/mem0/references/architecture.md)<br>[server/requirements.txt](../../../../sources/mem0ai__mem0/server/requirements.txt)<br>[openmemory/api/requirements.txt](../../../../sources/mem0ai__mem0/openmemory/api/requirements.txt)<br>[integrations/mem0-plugin/requirements.txt](../../../../sources/mem0ai__mem0/integrations/mem0-plugin/requirements.txt)<br>[integrations/mem0-plugin/skills/mem0/references/architecture.md](../../../../sources/mem0ai__mem0/integrations/mem0-plugin/skills/mem0/references/architecture.md)<br>[integrations/mem0-plugin/.opencode-plugin/opencode-skills/mem0/references/architecture.md](../../../../sources/mem0ai__mem0/integrations/mem0-plugin/.opencode-plugin/opencode-skills/mem0/references/architecture.md)<br>[docs/images/openclaw-architecture.png](../../../../sources/mem0ai__mem0/docs/images/openclaw-architecture.png)<br>[cli/cli-spec.json](../../../../sources/mem0ai__mem0/cli/cli-spec.json) |
| eval | 232 | [tests/__init__.py](../../../../sources/mem0ai__mem0/tests/__init__.py)<br>[tests/test_chatty_llm_parsing.py](../../../../sources/mem0ai__mem0/tests/test_chatty_llm_parsing.py)<br>[tests/test_client_feedback.py](../../../../sources/mem0ai__mem0/tests/test_client_feedback.py)<br>[tests/test_client.py](../../../../sources/mem0ai__mem0/tests/test_client.py)<br>[tests/test_main.py](../../../../sources/mem0ai__mem0/tests/test_main.py)<br>[tests/test_memory_integration.py](../../../../sources/mem0ai__mem0/tests/test_memory_integration.py)<br>[tests/test_memory.py](../../../../sources/mem0ai__mem0/tests/test_memory.py)<br>[tests/test_oss_to_platform_migrate.py](../../../../sources/mem0ai__mem0/tests/test_oss_to_platform_migrate.py) |
| security | 7 | [tests/test_server_auth.py](../../../../sources/mem0ai__mem0/tests/test_server_auth.py)<br>[server/auth.py](../../../../sources/mem0ai__mem0/server/auth.py)<br>[server/routers/auth.py](../../../../sources/mem0ai__mem0/server/routers/auth.py)<br>[server/dashboard/src/lib/auth.tsx](../../../../sources/mem0ai__mem0/server/dashboard/src/lib/auth.tsx)<br>[server/dashboard/src/hooks/use-auth.ts](../../../../sources/mem0ai__mem0/server/dashboard/src/hooks/use-auth.ts)<br>[server/dashboard/src/app/api/auth/refresh/route.ts](../../../../sources/mem0ai__mem0/server/dashboard/src/app/api/auth/refresh/route.ts)<br>[mem0/utils/gcp_auth.py](../../../../sources/mem0ai__mem0/mem0/utils/gcp_auth.py) |
| ci | 20 | [.github/workflows/cd.yml](../../../../sources/mem0ai__mem0/.github/workflows/cd.yml)<br>[.github/workflows/ci-gate.yml](../../../../sources/mem0ai__mem0/.github/workflows/ci-gate.yml)<br>[.github/workflows/ci.yml](../../../../sources/mem0ai__mem0/.github/workflows/ci.yml)<br>[.github/workflows/cli-node-cd.yml](../../../../sources/mem0ai__mem0/.github/workflows/cli-node-cd.yml)<br>[.github/workflows/cli-node-ci.yml](../../../../sources/mem0ai__mem0/.github/workflows/cli-node-ci.yml)<br>[.github/workflows/cli-python-cd.yml](../../../../sources/mem0ai__mem0/.github/workflows/cli-python-cd.yml)<br>[.github/workflows/cli-python-ci.yml](../../../../sources/mem0ai__mem0/.github/workflows/cli-python-ci.yml)<br>[.github/workflows/docs-llms-txt-check.yml](../../../../sources/mem0ai__mem0/.github/workflows/docs-llms-txt-check.yml) |
| container | 6 | [server/docker-compose.yaml](../../../../sources/mem0ai__mem0/server/docker-compose.yaml)<br>[server/Dockerfile](../../../../sources/mem0ai__mem0/server/Dockerfile)<br>[server/dashboard/Dockerfile](../../../../sources/mem0ai__mem0/server/dashboard/Dockerfile)<br>[openmemory/docker-compose.yml](../../../../sources/mem0ai__mem0/openmemory/docker-compose.yml)<br>[openmemory/ui/Dockerfile](../../../../sources/mem0ai__mem0/openmemory/ui/Dockerfile)<br>[openmemory/api/Dockerfile](../../../../sources/mem0ai__mem0/openmemory/api/Dockerfile) |
| instruction | 1 | [AGENTS.md](../../../../sources/mem0ai__mem0/AGENTS.md) |
| docs | 308 | [README.md](../../../../sources/mem0ai__mem0/README.md)<br>[skills/README.md](../../../../sources/mem0ai__mem0/skills/README.md)<br>[skills/mem0-vercel-ai-sdk/README.md](../../../../sources/mem0ai__mem0/skills/mem0-vercel-ai-sdk/README.md)<br>[skills/mem0-test-integration/README.md](../../../../sources/mem0ai__mem0/skills/mem0-test-integration/README.md)<br>[skills/mem0-oss-to-platform/README.md](../../../../sources/mem0ai__mem0/skills/mem0-oss-to-platform/README.md)<br>[skills/mem0-integrate/README.md](../../../../sources/mem0ai__mem0/skills/mem0-integrate/README.md)<br>[skills/mem0-cli/README.md](../../../../sources/mem0ai__mem0/skills/mem0-cli/README.md)<br>[skills/mem0/README.md](../../../../sources/mem0ai__mem0/skills/mem0/README.md) |
| config | 47 | [Makefile](../../../../sources/mem0ai__mem0/Makefile)<br>[poetry.lock](../../../../sources/mem0ai__mem0/poetry.lock)<br>[pyproject.toml](../../../../sources/mem0ai__mem0/pyproject.toml)<br>[server/Makefile](../../../../sources/mem0ai__mem0/server/Makefile)<br>[server/requirements.txt](../../../../sources/mem0ai__mem0/server/requirements.txt)<br>[server/dashboard/package.json](../../../../sources/mem0ai__mem0/server/dashboard/package.json)<br>[server/dashboard/pnpm-workspace.yaml](../../../../sources/mem0ai__mem0/server/dashboard/pnpm-workspace.yaml)<br>[server/dashboard/tsconfig.json](../../../../sources/mem0ai__mem0/server/dashboard/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 232 | [tests/__init__.py](../../../../sources/mem0ai__mem0/tests/__init__.py)<br>[tests/test_chatty_llm_parsing.py](../../../../sources/mem0ai__mem0/tests/test_chatty_llm_parsing.py)<br>[tests/test_client_feedback.py](../../../../sources/mem0ai__mem0/tests/test_client_feedback.py)<br>[tests/test_client.py](../../../../sources/mem0ai__mem0/tests/test_client.py)<br>[tests/test_main.py](../../../../sources/mem0ai__mem0/tests/test_main.py)<br>[tests/test_memory_integration.py](../../../../sources/mem0ai__mem0/tests/test_memory_integration.py) |
| CI workflow | 20 | [.github/workflows/cd.yml](../../../../sources/mem0ai__mem0/.github/workflows/cd.yml)<br>[.github/workflows/ci-gate.yml](../../../../sources/mem0ai__mem0/.github/workflows/ci-gate.yml)<br>[.github/workflows/ci.yml](../../../../sources/mem0ai__mem0/.github/workflows/ci.yml)<br>[.github/workflows/cli-node-cd.yml](../../../../sources/mem0ai__mem0/.github/workflows/cli-node-cd.yml)<br>[.github/workflows/cli-node-ci.yml](../../../../sources/mem0ai__mem0/.github/workflows/cli-node-ci.yml)<br>[.github/workflows/cli-python-cd.yml](../../../../sources/mem0ai__mem0/.github/workflows/cli-python-cd.yml) |
| 컨테이너/배포 | 6 | [server/docker-compose.yaml](../../../../sources/mem0ai__mem0/server/docker-compose.yaml)<br>[server/Dockerfile](../../../../sources/mem0ai__mem0/server/Dockerfile)<br>[server/dashboard/Dockerfile](../../../../sources/mem0ai__mem0/server/dashboard/Dockerfile)<br>[openmemory/docker-compose.yml](../../../../sources/mem0ai__mem0/openmemory/docker-compose.yml)<br>[openmemory/ui/Dockerfile](../../../../sources/mem0ai__mem0/openmemory/ui/Dockerfile)<br>[openmemory/api/Dockerfile](../../../../sources/mem0ai__mem0/openmemory/api/Dockerfile) |
| 보안/정책 | 7 | [tests/test_server_auth.py](../../../../sources/mem0ai__mem0/tests/test_server_auth.py)<br>[server/auth.py](../../../../sources/mem0ai__mem0/server/auth.py)<br>[server/routers/auth.py](../../../../sources/mem0ai__mem0/server/routers/auth.py)<br>[server/dashboard/src/lib/auth.tsx](../../../../sources/mem0ai__mem0/server/dashboard/src/lib/auth.tsx)<br>[server/dashboard/src/hooks/use-auth.ts](../../../../sources/mem0ai__mem0/server/dashboard/src/hooks/use-auth.ts)<br>[server/dashboard/src/app/api/auth/refresh/route.ts](../../../../sources/mem0ai__mem0/server/dashboard/src/app/api/auth/refresh/route.ts) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/mem0ai__mem0/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `openmemory/api/tests/test_mcp_server.py`, `openmemory/api/app/mcp_server.py`, `integrations/mem0-plugin/.codex-mcp.json`.
2. entrypoint를 따라 실행 흐름 확인: `server/main.py`, `openmemory/api/main.py`, `mem0-ts/src/oss/src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tests/memory/test_json_prompt_fix.py`, `tests/memory/test_main.py`.
4. retrieval/memory/indexing 확인: `tests/test_memory_integration.py`, `tests/test_memory.py`, `tests/vector_stores/test_azure_ai_search.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/test_chatty_llm_parsing.py`, `tests/test_client_feedback.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 1671 files, 340 directories.. 핵심 구조 신호는 Python, pyproject.toml, Makefile, README.md, AGENTS.md, LICENSE이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
