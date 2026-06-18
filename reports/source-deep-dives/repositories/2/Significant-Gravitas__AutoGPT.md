# Significant-Gravitas/AutoGPT Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

AutoGPT is the vision of accessible AI for everyone, to use and to build on. Our mission is to provide the tools, so that you can focus on what matters.

## 요약

- 조사 단위: `sources/Significant-Gravitas__AutoGPT` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 3,857 files, 1,223 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=docs/integrations/block-integrations/mcp/block.md, autogpt_platform/frontend/src/app/(platform)/auth/integrations/mcp_callback/route.ts, autogpt_platform/frontend/public/integrations/mcp.png이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Significant-Gravitas/AutoGPT |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 185001 |
| Forks | 46134 |
| License | NOASSERTION |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/Significant-Gravitas__AutoGPT](../../../../sources/Significant-Gravitas__AutoGPT) |
| Existing report | [reports/global-trending/repositories/Significant-Gravitas__AutoGPT.md](../../../global-trending/repositories/Significant-Gravitas__AutoGPT.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 3857 / 1223 |
| Max observed depth | 13 |
| Top directories | .agents, .claude, .github, assets, autogpt_platform, classic, docs |
| Top extensions | .py: 1351, .tsx: 934, .ts: 537, .md: 348, .sql: 179, .png: 152, (none): 92, .json: 68, .yml: 43, .txt: 22, .js: 16, .sh: 15 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 77 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| autogpt_platform | top-level component | 1 |
| classic | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
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


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 810 | [docs/platform/contributing/tests.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/platform/contributing/tests.md)<br>[docs/integrations/block-integrations/exa/websets_monitor.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/integrations/block-integrations/exa/websets_monitor.md)<br>[docs/content/imgs/quickstart/012_tests.png](../../../../sources/Significant-Gravitas__AutoGPT/docs/content/imgs/quickstart/012_tests.png)<br>[classic/original_autogpt/tests/__init__.py](../../../../sources/Significant-Gravitas__AutoGPT/classic/original_autogpt/tests/__init__.py)<br>[classic/original_autogpt/tests/conftest.py](../../../../sources/Significant-Gravitas__AutoGPT/classic/original_autogpt/tests/conftest.py)<br>[classic/original_autogpt/tests/context.py](../../../../sources/Significant-Gravitas__AutoGPT/classic/original_autogpt/tests/context.py) |
| CI workflows | 35 | [.github/workflows/classic-autogpt-ci.yml](../../../../sources/Significant-Gravitas__AutoGPT/.github/workflows/classic-autogpt-ci.yml)<br>[.github/workflows/classic-autogpt-docker-cache-clean.yml](../../../../sources/Significant-Gravitas__AutoGPT/.github/workflows/classic-autogpt-docker-cache-clean.yml)<br>[.github/workflows/classic-autogpt-docker-ci.yml](../../../../sources/Significant-Gravitas__AutoGPT/.github/workflows/classic-autogpt-docker-ci.yml)<br>[.github/workflows/classic-autogpt-docker-release.yml](../../../../sources/Significant-Gravitas__AutoGPT/.github/workflows/classic-autogpt-docker-release.yml)<br>[.github/workflows/classic-autogpts-ci.yml](../../../../sources/Significant-Gravitas__AutoGPT/.github/workflows/classic-autogpts-ci.yml)<br>[.github/workflows/classic-benchmark_publish_package.yml](../../../../sources/Significant-Gravitas__AutoGPT/.github/workflows/classic-benchmark_publish_package.yml) |
| Containers / deploy | 13 | [classic/Dockerfile.autogpt](../../../../sources/Significant-Gravitas__AutoGPT/classic/Dockerfile.autogpt)<br>[classic/original_autogpt/docker-compose.yml](../../../../sources/Significant-Gravitas__AutoGPT/classic/original_autogpt/docker-compose.yml)<br>[classic/original_autogpt/.devcontainer/docker-compose.yml](../../../../sources/Significant-Gravitas__AutoGPT/classic/original_autogpt/.devcontainer/docker-compose.yml)<br>[classic/original_autogpt/.devcontainer/Dockerfile](../../../../sources/Significant-Gravitas__AutoGPT/classic/original_autogpt/.devcontainer/Dockerfile)<br>[classic/forge/Dockerfile](../../../../sources/Significant-Gravitas__AutoGPT/classic/forge/Dockerfile)<br>[autogpt_platform/docker-compose.platform.yml](../../../../sources/Significant-Gravitas__AutoGPT/autogpt_platform/docker-compose.platform.yml) |
| Security / policy | 123 | [SECURITY.md](../../../../sources/Significant-Gravitas__AutoGPT/SECURITY.md)<br>[docs/platform/integrating/oauth-guide.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/platform/integrating/oauth-guide.md)<br>[docs/platform/contributing/oauth-integration-flow.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/platform/contributing/oauth-integration-flow.md)<br>[docs/integrations/block-integrations/discord/oauth_blocks.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/integrations/block-integrations/discord/oauth_blocks.md)<br>[classic/SECURITY.md](../../../../sources/Significant-Gravitas__AutoGPT/classic/SECURITY.md)<br>[classic/original_autogpt/tests/unit/test_permission_denial_feedback.py](../../../../sources/Significant-Gravitas__AutoGPT/classic/original_autogpt/tests/unit/test_permission_denial_feedback.py) |
| Agent instructions | 23 | [AGENTS.md](../../../../sources/Significant-Gravitas__AutoGPT/AGENTS.md)<br>[CLAUDE.md](../../../../sources/Significant-Gravitas__AutoGPT/CLAUDE.md)<br>[docs/AGENTS.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/AGENTS.md)<br>[docs/CLAUDE.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/CLAUDE.md)<br>[docs/platform/gemini.md](../../../../sources/Significant-Gravitas__AutoGPT/docs/platform/gemini.md)<br>[classic/CLAUDE.md](../../../../sources/Significant-Gravitas__AutoGPT/classic/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `docs/integrations/block-integrations/mcp/block.md`, `autogpt_platform/frontend/public/integrations/mcp.png`, `autogpt_platform/backend/backend/copilot/tools/get_mcp_guide.py`.
2. Trace execution through entrypoints: `classic/original_autogpt/autogpt/__main__.py`, `classic/original_autogpt/autogpt/app/main.py`, `classic/forge/forge/__main__.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `docs/AGENTS.md`, `docs/platform/agent-blocks.md`.
4. Inspect retrieval/memory/indexing through: `docs/content/index.md`, `docs/content/contribute/index.md`, `docs/content/classic/index.md`.
5. Verify behavior through test/eval files: `docs/platform/contributing/tests.md`, `docs/integrations/block-integrations/exa/websets_monitor.md`, `docs/content/imgs/quickstart/012_tests.png`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 AutoGPT is the vision of accessible AI for everyone, to use and to build on. Our mission is to provide the tools, so tha. 핵심 구조 신호는 Python, README.md, AGENTS.md, CLAUDE.md, LICENSE, ci이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
