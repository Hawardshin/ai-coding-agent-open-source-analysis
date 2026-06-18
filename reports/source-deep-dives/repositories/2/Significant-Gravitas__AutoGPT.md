# Significant-Gravitas/AutoGPT 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

AutoGPT is the vision of accessible AI for everyone, to use and to build on. Our mission is to provide the tools, so that you can focus on what matters.

## 요약

- 조사 단위: `sources/Significant-Gravitas__AutoGPT` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 3,857 files, 1,223 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=docs/integrations/block-integrations/mcp/block.md, autogpt_platform/frontend/src/app/(platform)/auth/integrations/mcp_callback/route.ts, autogpt_platform/frontend/public/integrations/mcp.png이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Significant-Gravitas/AutoGPT |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 185001 |
| Forks | 46134 |
| License | NOASSERTION |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Significant-Gravitas__AutoGPT](../../../../sources/Significant-Gravitas__AutoGPT) |
| 기존 보고서 | [reports/global-trending/repositories/Significant-Gravitas__AutoGPT.md](../../../global-trending/repositories/Significant-Gravitas__AutoGPT.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 3857 / 1223 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .agents, .claude, .github, assets, autogpt_platform, classic, docs |
| 상위 확장자 | .py: 1351, .tsx: 934, .ts: 537, .md: 348, .sql: 179, .png: 152, (none): 92, .json: 68, .yml: 43, .txt: 22, .js: 16, .sh: 15 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 77 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| autogpt_platform | top-level component | 1 |
| classic | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


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
| mcp | [docs/integrations/block-integrations/mcp/block.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/integrations/block-integrations/mcp/block.md) | mcp signal |
| mcp | [autogpt_platform/frontend/public/integrations/mcp.png](../../../../sources/Significant-Gravitas__AutoGPT/autogpt_platform/frontend/public/integrations/mcp.png) | mcp signal |
| mcp | [autogpt_platform/backend/backend/copilot/tools/get_mcp_guide.py](../../../../sources/Significant-Gravitas__AutoGPT/autogpt_platform/backend/backend/copilot/tools/get_mcp_guide.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/Significant-Gravitas__AutoGPT/AGENTS.md) | agentRuntime signal |
| agentRuntime | [docs/AGENTS.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/AGENTS.md) | agentRuntime signal |
| agentRuntime | [docs/platform/agent-blocks.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/platform/agent-blocks.md) | agentRuntime signal |
| agentRuntime | [docs/integrations/block-integrations/agent_mail/attachments.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/integrations/block-integrations/agent_mail/attachments.md) | agentRuntime signal |
| entrypoints | [classic/original_autogpt/autogpt/__main__.py](../../../../sources/Significant-Gravitas__AutoGPT/classic/original_autogpt/autogpt/__main__.py) | entrypoints signal |
| entrypoints | [classic/original_autogpt/autogpt/app/main.py](../../../../sources/Significant-Gravitas__AutoGPT/classic/original_autogpt/autogpt/app/main.py) | entrypoints signal |
| entrypoints | [classic/forge/forge/__main__.py](../../../../sources/Significant-Gravitas__AutoGPT/classic/forge/forge/__main__.py) | entrypoints signal |
| entrypoints | [classic/direct_benchmark/direct_benchmark/__main__.py](../../../../sources/Significant-Gravitas__AutoGPT/classic/direct_benchmark/direct_benchmark/__main__.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/Significant-Gravitas__AutoGPT/CLAUDE.md) | instruction signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 7 | [classic/original_autogpt/autogpt/__main__.py](../../../../sources/Significant-Gravitas__AutoGPT/classic/original_autogpt/autogpt/__main__.py)<br>[classic/original_autogpt/autogpt/app/main.py](../../../../sources/Significant-Gravitas__AutoGPT/classic/original_autogpt/autogpt/app/main.py)<br>[classic/forge/forge/__main__.py](../../../../sources/Significant-Gravitas__AutoGPT/classic/forge/forge/__main__.py)<br>[classic/direct_benchmark/direct_benchmark/__main__.py](../../../../sources/Significant-Gravitas__AutoGPT/classic/direct_benchmark/direct_benchmark/__main__.py)<br>[autogpt_platform/frontend/.storybook/main.ts](../../../../sources/Significant-Gravitas__AutoGPT/autogpt_platform/frontend/.storybook/main.ts)<br>[autogpt_platform/backend/backend/copilot/executor/__main__.py](../../../../sources/Significant-Gravitas__AutoGPT/autogpt_platform/backend/backend/copilot/executor/__main__.py)<br>[autogpt_platform/backend/backend/copilot/bot/__main__.py](../../../../sources/Significant-Gravitas__AutoGPT/autogpt_platform/backend/backend/copilot/bot/__main__.py) |
| agentRuntime | 448 | [AGENTS.md](../../../../sources/Significant-Gravitas__AutoGPT/AGENTS.md)<br>[docs/AGENTS.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/AGENTS.md)<br>[docs/platform/agent-blocks.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/platform/agent-blocks.md)<br>[docs/integrations/block-integrations/agent_mail/attachments.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/integrations/block-integrations/agent_mail/attachments.md)<br>[docs/integrations/block-integrations/agent_mail/drafts.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/integrations/block-integrations/agent_mail/drafts.md)<br>[docs/integrations/block-integrations/agent_mail/inbox.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/integrations/block-integrations/agent_mail/inbox.md)<br>[docs/integrations/block-integrations/agent_mail/lists.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/integrations/block-integrations/agent_mail/lists.md)<br>[docs/integrations/block-integrations/agent_mail/messages.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/integrations/block-integrations/agent_mail/messages.md) |
| mcp | 22 | [docs/integrations/block-integrations/mcp/block.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/integrations/block-integrations/mcp/block.md)<br>`autogpt_platform/frontend/src/app/(platform)/auth/integrations/mcp_callback/route.ts`<br>[autogpt_platform/frontend/public/integrations/mcp.png](../../../../sources/Significant-Gravitas__AutoGPT/autogpt_platform/frontend/public/integrations/mcp.png)<br>[autogpt_platform/backend/backend/copilot/tools/get_mcp_guide.py](../../../../sources/Significant-Gravitas__AutoGPT/autogpt_platform/backend/backend/copilot/tools/get_mcp_guide.py)<br>[autogpt_platform/backend/backend/copilot/tools/run_mcp_tool.py](../../../../sources/Significant-Gravitas__AutoGPT/autogpt_platform/backend/backend/copilot/tools/run_mcp_tool.py)<br>[autogpt_platform/backend/backend/copilot/tools/test_run_mcp_tool.py](../../../../sources/Significant-Gravitas__AutoGPT/autogpt_platform/backend/backend/copilot/tools/test_run_mcp_tool.py)<br>[autogpt_platform/backend/backend/copilot/sdk/mcp_tool_guide.md](../../../../sources/Significant-Gravitas__AutoGPT/autogpt_platform/backend/backend/copilot/sdk/mcp_tool_guide.md)<br>[autogpt_platform/backend/backend/blocks/mcp/__init__.py](../../../../sources/Significant-Gravitas__AutoGPT/autogpt_platform/backend/backend/blocks/mcp/__init__.py) |
| retrieval | 74 | [docs/content/index.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/content/index.md)<br>[docs/content/contribute/index.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/content/contribute/index.md)<br>[docs/content/classic/index.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/content/classic/index.md)<br>[docs/content/classic/setup/index.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/content/classic/setup/index.md)<br>[docs/content/challenges/memory/challenge_a.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/content/challenges/memory/challenge_a.md)<br>[docs/content/challenges/memory/challenge_b.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/content/challenges/memory/challenge_b.md)<br>[docs/content/challenges/memory/challenge_c.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/content/challenges/memory/challenge_c.md)<br>[docs/content/challenges/memory/challenge_d.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/content/challenges/memory/challenge_d.md) |
| spec | 12 | [docs/platform/workspace-media-architecture.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/platform/workspace-media-architecture.md)<br>[classic/original_autogpt/scripts/check_requirements.py](../../../../sources/Significant-Gravitas__AutoGPT/classic/original_autogpt/scripts/check_requirements.py)<br>[classic/direct_benchmark/challenges/verticals/code/6_battleship/artifacts_in/product_requirements.txt](../../../../sources/Significant-Gravitas__AutoGPT/classic/direct_benchmark/challenges/verticals/code/6_battleship/artifacts_in/product_requirements.txt)<br>[autogpt_platform/frontend/src/playwright/api-keys-happy-path.spec.ts](../../../../sources/Significant-Gravitas__AutoGPT/autogpt_platform/frontend/src/playwright/api-keys-happy-path.spec.ts)<br>[autogpt_platform/frontend/src/playwright/auth-happy-path.spec.ts](../../../../sources/Significant-Gravitas__AutoGPT/autogpt_platform/frontend/src/playwright/auth-happy-path.spec.ts)<br>[autogpt_platform/frontend/src/playwright/builder-happy-path.spec.ts](../../../../sources/Significant-Gravitas__AutoGPT/autogpt_platform/frontend/src/playwright/builder-happy-path.spec.ts)<br>[autogpt_platform/frontend/src/playwright/copilot-happy-path.spec.ts](../../../../sources/Significant-Gravitas__AutoGPT/autogpt_platform/frontend/src/playwright/copilot-happy-path.spec.ts)<br>[autogpt_platform/frontend/src/playwright/library-happy-path.spec.ts](../../../../sources/Significant-Gravitas__AutoGPT/autogpt_platform/frontend/src/playwright/library-happy-path.spec.ts) |
| eval | 810 | [docs/platform/contributing/tests.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/platform/contributing/tests.md)<br>[docs/integrations/block-integrations/exa/websets_monitor.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/integrations/block-integrations/exa/websets_monitor.md)<br>[docs/content/imgs/quickstart/012_tests.png](../../../../sources/Significant-Gravitas__AutoGPT/docs/content/imgs/quickstart/012_tests.png)<br>[classic/original_autogpt/tests/__init__.py](../../../../sources/Significant-Gravitas__AutoGPT/classic/original_autogpt/tests/__init__.py)<br>[classic/original_autogpt/tests/conftest.py](../../../../sources/Significant-Gravitas__AutoGPT/classic/original_autogpt/tests/conftest.py)<br>[classic/original_autogpt/tests/context.py](../../../../sources/Significant-Gravitas__AutoGPT/classic/original_autogpt/tests/context.py)<br>[classic/original_autogpt/tests/utils.py](../../../../sources/Significant-Gravitas__AutoGPT/classic/original_autogpt/tests/utils.py)<br>[classic/original_autogpt/tests/unit/__init__.py](../../../../sources/Significant-Gravitas__AutoGPT/classic/original_autogpt/tests/unit/__init__.py) |
| security | 123 | [SECURITY.md](../../../../sources/Significant-Gravitas__AutoGPT/SECURITY.md)<br>[docs/platform/integrating/oauth-guide.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/platform/integrating/oauth-guide.md)<br>[docs/platform/contributing/oauth-integration-flow.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/platform/contributing/oauth-integration-flow.md)<br>[docs/integrations/block-integrations/discord/oauth_blocks.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/integrations/block-integrations/discord/oauth_blocks.md)<br>[classic/SECURITY.md](../../../../sources/Significant-Gravitas__AutoGPT/classic/SECURITY.md)<br>[classic/original_autogpt/tests/unit/test_permission_denial_feedback.py](../../../../sources/Significant-Gravitas__AutoGPT/classic/original_autogpt/tests/unit/test_permission_denial_feedback.py)<br>[autogpt_platform/frontend/src/types/auth.ts](../../../../sources/Significant-Gravitas__AutoGPT/autogpt_platform/frontend/src/types/auth.ts)<br>[autogpt_platform/frontend/src/types/__tests__/auth.test.ts](../../../../sources/Significant-Gravitas__AutoGPT/autogpt_platform/frontend/src/types/__tests__/auth.test.ts) |
| ci | 35 | [.github/workflows/classic-autogpt-ci.yml](../../../../sources/Significant-Gravitas__AutoGPT/.github/workflows/classic-autogpt-ci.yml)<br>[.github/workflows/classic-autogpt-docker-cache-clean.yml](../../../../sources/Significant-Gravitas__AutoGPT/.github/workflows/classic-autogpt-docker-cache-clean.yml)<br>[.github/workflows/classic-autogpt-docker-ci.yml](../../../../sources/Significant-Gravitas__AutoGPT/.github/workflows/classic-autogpt-docker-ci.yml)<br>[.github/workflows/classic-autogpt-docker-release.yml](../../../../sources/Significant-Gravitas__AutoGPT/.github/workflows/classic-autogpt-docker-release.yml)<br>[.github/workflows/classic-autogpts-ci.yml](../../../../sources/Significant-Gravitas__AutoGPT/.github/workflows/classic-autogpts-ci.yml)<br>[.github/workflows/classic-benchmark_publish_package.yml](../../../../sources/Significant-Gravitas__AutoGPT/.github/workflows/classic-benchmark_publish_package.yml)<br>[.github/workflows/classic-benchmark-ci.yml](../../../../sources/Significant-Gravitas__AutoGPT/.github/workflows/classic-benchmark-ci.yml)<br>[.github/workflows/classic-forge-ci.yml](../../../../sources/Significant-Gravitas__AutoGPT/.github/workflows/classic-forge-ci.yml) |
| container | 13 | [classic/Dockerfile.autogpt](../../../../sources/Significant-Gravitas__AutoGPT/classic/Dockerfile.autogpt)<br>[classic/original_autogpt/docker-compose.yml](../../../../sources/Significant-Gravitas__AutoGPT/classic/original_autogpt/docker-compose.yml)<br>[classic/original_autogpt/.devcontainer/docker-compose.yml](../../../../sources/Significant-Gravitas__AutoGPT/classic/original_autogpt/.devcontainer/docker-compose.yml)<br>[classic/original_autogpt/.devcontainer/Dockerfile](../../../../sources/Significant-Gravitas__AutoGPT/classic/original_autogpt/.devcontainer/Dockerfile)<br>[classic/forge/Dockerfile](../../../../sources/Significant-Gravitas__AutoGPT/classic/forge/Dockerfile)<br>[autogpt_platform/docker-compose.platform.yml](../../../../sources/Significant-Gravitas__AutoGPT/autogpt_platform/docker-compose.platform.yml)<br>[autogpt_platform/docker-compose.yml](../../../../sources/Significant-Gravitas__AutoGPT/autogpt_platform/docker-compose.yml)<br>[autogpt_platform/frontend/Dockerfile](../../../../sources/Significant-Gravitas__AutoGPT/autogpt_platform/frontend/Dockerfile) |
| instruction | 23 | [AGENTS.md](../../../../sources/Significant-Gravitas__AutoGPT/AGENTS.md)<br>[CLAUDE.md](../../../../sources/Significant-Gravitas__AutoGPT/CLAUDE.md)<br>[docs/AGENTS.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/AGENTS.md)<br>[docs/CLAUDE.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/CLAUDE.md)<br>[docs/platform/gemini.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/platform/gemini.md)<br>[classic/CLAUDE.md](../../../../sources/Significant-Gravitas__AutoGPT/classic/CLAUDE.md)<br>[classic/original_autogpt/CLAUDE.md](../../../../sources/Significant-Gravitas__AutoGPT/classic/original_autogpt/CLAUDE.md)<br>[classic/forge/CLAUDE.md](../../../../sources/Significant-Gravitas__AutoGPT/classic/forge/CLAUDE.md) |
| docs | 326 | [README.md](../../../../sources/Significant-Gravitas__AutoGPT/README.md)<br>[docs/AGENTS.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/AGENTS.md)<br>[docs/CLAUDE.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/CLAUDE.md)<br>[docs/platform/advanced_setup.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/platform/advanced_setup.md)<br>[docs/platform/agent-blocks.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/platform/agent-blocks.md)<br>[docs/platform/aimlapi.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/platform/aimlapi.md)<br>[docs/platform/block-sdk-guide.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/platform/block-sdk-guide.md)<br>[docs/platform/copilot-local-llm.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/platform/copilot-local-llm.md) |
| config | 10 | [classic/poetry.lock](../../../../sources/Significant-Gravitas__AutoGPT/classic/poetry.lock)<br>[classic/pyproject.toml](../../../../sources/Significant-Gravitas__AutoGPT/classic/pyproject.toml)<br>[autogpt_platform/Makefile](../../../../sources/Significant-Gravitas__AutoGPT/autogpt_platform/Makefile)<br>[autogpt_platform/frontend/package.json](../../../../sources/Significant-Gravitas__AutoGPT/autogpt_platform/frontend/package.json)<br>[autogpt_platform/frontend/pnpm-workspace.yaml](../../../../sources/Significant-Gravitas__AutoGPT/autogpt_platform/frontend/pnpm-workspace.yaml)<br>[autogpt_platform/frontend/tsconfig.json](../../../../sources/Significant-Gravitas__AutoGPT/autogpt_platform/frontend/tsconfig.json)<br>[autogpt_platform/backend/poetry.lock](../../../../sources/Significant-Gravitas__AutoGPT/autogpt_platform/backend/poetry.lock)<br>[autogpt_platform/backend/pyproject.toml](../../../../sources/Significant-Gravitas__AutoGPT/autogpt_platform/backend/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 810 | [docs/platform/contributing/tests.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/platform/contributing/tests.md)<br>[docs/integrations/block-integrations/exa/websets_monitor.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/integrations/block-integrations/exa/websets_monitor.md)<br>[docs/content/imgs/quickstart/012_tests.png](../../../../sources/Significant-Gravitas__AutoGPT/docs/content/imgs/quickstart/012_tests.png)<br>[classic/original_autogpt/tests/__init__.py](../../../../sources/Significant-Gravitas__AutoGPT/classic/original_autogpt/tests/__init__.py)<br>[classic/original_autogpt/tests/conftest.py](../../../../sources/Significant-Gravitas__AutoGPT/classic/original_autogpt/tests/conftest.py)<br>[classic/original_autogpt/tests/context.py](../../../../sources/Significant-Gravitas__AutoGPT/classic/original_autogpt/tests/context.py) |
| CI workflow | 35 | [.github/workflows/classic-autogpt-ci.yml](../../../../sources/Significant-Gravitas__AutoGPT/.github/workflows/classic-autogpt-ci.yml)<br>[.github/workflows/classic-autogpt-docker-cache-clean.yml](../../../../sources/Significant-Gravitas__AutoGPT/.github/workflows/classic-autogpt-docker-cache-clean.yml)<br>[.github/workflows/classic-autogpt-docker-ci.yml](../../../../sources/Significant-Gravitas__AutoGPT/.github/workflows/classic-autogpt-docker-ci.yml)<br>[.github/workflows/classic-autogpt-docker-release.yml](../../../../sources/Significant-Gravitas__AutoGPT/.github/workflows/classic-autogpt-docker-release.yml)<br>[.github/workflows/classic-autogpts-ci.yml](../../../../sources/Significant-Gravitas__AutoGPT/.github/workflows/classic-autogpts-ci.yml)<br>[.github/workflows/classic-benchmark_publish_package.yml](../../../../sources/Significant-Gravitas__AutoGPT/.github/workflows/classic-benchmark_publish_package.yml) |
| 컨테이너/배포 | 13 | [classic/Dockerfile.autogpt](../../../../sources/Significant-Gravitas__AutoGPT/classic/Dockerfile.autogpt)<br>[classic/original_autogpt/docker-compose.yml](../../../../sources/Significant-Gravitas__AutoGPT/classic/original_autogpt/docker-compose.yml)<br>[classic/original_autogpt/.devcontainer/docker-compose.yml](../../../../sources/Significant-Gravitas__AutoGPT/classic/original_autogpt/.devcontainer/docker-compose.yml)<br>[classic/original_autogpt/.devcontainer/Dockerfile](../../../../sources/Significant-Gravitas__AutoGPT/classic/original_autogpt/.devcontainer/Dockerfile)<br>[classic/forge/Dockerfile](../../../../sources/Significant-Gravitas__AutoGPT/classic/forge/Dockerfile)<br>[autogpt_platform/docker-compose.platform.yml](../../../../sources/Significant-Gravitas__AutoGPT/autogpt_platform/docker-compose.platform.yml) |
| 보안/정책 | 123 | [SECURITY.md](../../../../sources/Significant-Gravitas__AutoGPT/SECURITY.md)<br>[docs/platform/integrating/oauth-guide.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/platform/integrating/oauth-guide.md)<br>[docs/platform/contributing/oauth-integration-flow.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/platform/contributing/oauth-integration-flow.md)<br>[docs/integrations/block-integrations/discord/oauth_blocks.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/integrations/block-integrations/discord/oauth_blocks.md)<br>[classic/SECURITY.md](../../../../sources/Significant-Gravitas__AutoGPT/classic/SECURITY.md)<br>[classic/original_autogpt/tests/unit/test_permission_denial_feedback.py](../../../../sources/Significant-Gravitas__AutoGPT/classic/original_autogpt/tests/unit/test_permission_denial_feedback.py) |
| 에이전트 지시문 | 23 | [AGENTS.md](../../../../sources/Significant-Gravitas__AutoGPT/AGENTS.md)<br>[CLAUDE.md](../../../../sources/Significant-Gravitas__AutoGPT/CLAUDE.md)<br>[docs/AGENTS.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/AGENTS.md)<br>[docs/CLAUDE.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/CLAUDE.md)<br>[docs/platform/gemini.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/platform/gemini.md)<br>[classic/CLAUDE.md](../../../../sources/Significant-Gravitas__AutoGPT/classic/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `docs/integrations/block-integrations/mcp/block.md`, `autogpt_platform/frontend/public/integrations/mcp.png`, `autogpt_platform/backend/backend/copilot/tools/get_mcp_guide.py`.
2. entrypoint를 따라 실행 흐름 확인: `classic/original_autogpt/autogpt/__main__.py`, `classic/original_autogpt/autogpt/app/main.py`, `classic/forge/forge/__main__.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `docs/AGENTS.md`, `docs/platform/agent-blocks.md`.
4. retrieval/memory/indexing 확인: `docs/content/index.md`, `docs/content/contribute/index.md`, `docs/content/classic/index.md`.
5. test/eval 파일로 동작 검증: `docs/platform/contributing/tests.md`, `docs/integrations/block-integrations/exa/websets_monitor.md`, `docs/content/imgs/quickstart/012_tests.png`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 AutoGPT is the vision of accessible AI for everyone, to use and to build on. Our mission is to provide the tools, so tha. 핵심 구조 신호는 Python, README.md, AGENTS.md, CLAUDE.md, LICENSE, ci이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
