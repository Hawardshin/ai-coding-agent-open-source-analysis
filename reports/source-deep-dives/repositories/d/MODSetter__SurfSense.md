# MODSetter/SurfSense Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

An open source, privacy focused alternative to NotebookLM for teams with no data limits. Join our Discord: https://discord.gg/ejRNvftDp9

## 요약

- 조사 단위: `sources/MODSetter__SurfSense` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 3,518 files, 785 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=surfsense_web/lib/posthog/server.ts, surfsense_obsidian/src/main.ts, surfsense_evals/src/surfsense_evals/__main__.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | MODSetter/SurfSense |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | Python |
| Stars | 14921 |
| Forks | 1425 |
| License | Apache-2.0 |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/MODSetter__SurfSense](../../../../sources/MODSetter__SurfSense) |
| Existing report | [reports/global-trending/repositories/MODSetter__SurfSense.md](../../../global-trending/repositories/MODSetter__SurfSense.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 3518 / 785 |
| Max observed depth | 12 |
| Top directories | .cursor, .github, .rules, docker, docs, scripts, surfsense_backend, surfsense_browser_extension, surfsense_desktop, surfsense_evals, surfsense_obsidian, surfsense_web |
| Top extensions | .py: 1755, .tsx: 554, .ts: 424, .md: 376, .png: 76, .mdx: 65, .svg: 62, .json: 52, (none): 26, .gif: 20, .yml: 18, .mp4: 15 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| docker | documentation surface | 1 |
| docs | documentation surface | 1 |
| scripts | top-level component | 1 |
| surfsense_backend | top-level component | 1 |
| surfsense_browser_extension | top-level component | 1 |
| surfsense_desktop | top-level component | 1 |
| surfsense_evals | top-level component | 1 |
| surfsense_obsidian | top-level component | 1 |
| surfsense_web | source boundary | 1 |


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
| entrypoints | [surfsense_web/lib/posthog/server.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/lib/posthog/server.ts) | entrypoints signal |
| entrypoints | [surfsense_obsidian/src/main.ts](../../../../sources/MODSetter__SurfSense/surfsense_obsidian/src/main.ts) | entrypoints signal |
| entrypoints | [surfsense_evals/src/surfsense_evals/__main__.py](../../../../sources/MODSetter__SurfSense/surfsense_evals/src/surfsense_evals/__main__.py) | entrypoints signal |
| entrypoints | [surfsense_desktop/src/main.ts](../../../../sources/MODSetter__SurfSense/surfsense_desktop/src/main.ts) | entrypoints signal |
| container | [surfsense_web/Dockerfile](../../../../sources/MODSetter__SurfSense/surfsense_web/Dockerfile) | container signal |
| container | [surfsense_web/content/docs/docker-installation/docker-compose.mdx](../../../../sources/MODSetter__SurfSense/surfsense_web/content/docs/docker-installation/docker-compose.mdx) | container signal |
| container | [surfsense_backend/Dockerfile](../../../../sources/MODSetter__SurfSense/surfsense_backend/Dockerfile) | container signal |
| container | [surfsense_backend/scripts/whatsapp-bridge/Dockerfile](../../../../sources/MODSetter__SurfSense/surfsense_backend/scripts/whatsapp-bridge/Dockerfile) | container signal |
| config | [package.json](../../../../sources/MODSetter__SurfSense/package.json) | config signal |
| config | [surfsense_web/package.json](../../../../sources/MODSetter__SurfSense/surfsense_web/package.json) | config signal |
| config | [surfsense_web/pnpm-workspace.yaml](../../../../sources/MODSetter__SurfSense/surfsense_web/pnpm-workspace.yaml) | config signal |
| config | [surfsense_web/tsconfig.json](../../../../sources/MODSetter__SurfSense/surfsense_web/tsconfig.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 6 | [surfsense_web/lib/posthog/server.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/lib/posthog/server.ts)<br>[surfsense_obsidian/src/main.ts](../../../../sources/MODSetter__SurfSense/surfsense_obsidian/src/main.ts)<br>[surfsense_evals/src/surfsense_evals/__main__.py](../../../../sources/MODSetter__SurfSense/surfsense_evals/src/surfsense_evals/__main__.py)<br>[surfsense_desktop/src/main.ts](../../../../sources/MODSetter__SurfSense/surfsense_desktop/src/main.ts)<br>[surfsense_desktop/src/modules/server.ts](../../../../sources/MODSetter__SurfSense/surfsense_desktop/src/modules/server.ts)<br>[surfsense_backend/main.py](../../../../sources/MODSetter__SurfSense/surfsense_backend/main.py) |
| agentRuntime | 1062 | [skills-lock.json](../../../../sources/MODSetter__SurfSense/skills-lock.json)<br>[surfsense_web/lib/agent-filesystem.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/lib/agent-filesystem.ts)<br>[surfsense_web/lib/apis/agent-actions-api.service.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/lib/apis/agent-actions-api.service.ts)<br>[surfsense_web/lib/apis/agent-flags-api.service.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/lib/apis/agent-flags-api.service.ts)<br>[surfsense_web/lib/apis/agent-permissions-api.service.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/lib/apis/agent-permissions-api.service.ts)<br>[surfsense_web/lib/apis/agent-tools-api.service.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/lib/apis/agent-tools-api.service.ts)<br>[surfsense_web/hooks/use-activate-chat-thread.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/hooks/use-activate-chat-thread.ts)<br>[surfsense_web/hooks/use-agent-actions-query.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/hooks/use-agent-actions-query.ts) |
| mcp | 32 | [surfsense_web/public/connectors/modelcontextprotocol.svg](../../../../sources/MODSetter__SurfSense/surfsense_web/public/connectors/modelcontextprotocol.svg)<br>[surfsense_web/features/chat-messages/timeline/tool-registry/adapt-props.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/features/chat-messages/timeline/tool-registry/adapt-props.ts)<br>[surfsense_web/features/chat-messages/timeline/tool-registry/index.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/features/chat-messages/timeline/tool-registry/index.ts)<br>[surfsense_web/features/chat-messages/timeline/tool-registry/registry.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/features/chat-messages/timeline/tool-registry/registry.ts)<br>[surfsense_web/features/chat-messages/timeline/tool-registry/types.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/features/chat-messages/timeline/tool-registry/types.ts)<br>[surfsense_web/features/chat-messages/timeline/tool-registry/fallback/default-fallback-card.tsx](../../../../sources/MODSetter__SurfSense/surfsense_web/features/chat-messages/timeline/tool-registry/fallback/default-fallback-card.tsx)<br>[surfsense_web/features/chat-messages/timeline/tool-registry/fallback/fallback-tool-body.tsx](../../../../sources/MODSetter__SurfSense/surfsense_web/features/chat-messages/timeline/tool-registry/fallback/fallback-tool-body.tsx)<br>[surfsense_web/features/chat-messages/timeline/tool-registry/fallback/index.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/features/chat-messages/timeline/tool-registry/fallback/index.ts) |
| retrieval | 203 | [surfsense_web/zero/schema/index.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/zero/schema/index.ts)<br>[surfsense_web/zero/queries/index.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/zero/queries/index.ts)<br>[surfsense_web/tests/fixtures/index.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/tests/fixtures/index.ts)<br>[surfsense_web/public/images/blog/agentic-rag-vs-long-context-llms-benchmark/placeholder-01-hero-image.png](../../../../sources/MODSetter__SurfSense/surfsense_web/public/images/blog/agentic-rag-vs-long-context-llms-benchmark/placeholder-01-hero-image.png)<br>[surfsense_web/public/images/blog/agentic-rag-vs-long-context-llms-benchmark/placeholder-02-architecture-diagram.png](../../../../sources/MODSetter__SurfSense/surfsense_web/public/images/blog/agentic-rag-vs-long-context-llms-benchmark/placeholder-02-architecture-diagram.png)<br>[surfsense_web/public/images/blog/agentic-rag-vs-long-context-llms-benchmark/placeholder-03-accuracy-bar-chart-dark.png](../../../../sources/MODSetter__SurfSense/surfsense_web/public/images/blog/agentic-rag-vs-long-context-llms-benchmark/placeholder-03-accuracy-bar-chart-dark.png)<br>[surfsense_web/public/images/blog/agentic-rag-vs-long-context-llms-benchmark/placeholder-03-accuracy-bar-chart-light.png](../../../../sources/MODSetter__SurfSense/surfsense_web/public/images/blog/agentic-rag-vs-long-context-llms-benchmark/placeholder-03-accuracy-bar-chart-light.png)<br>[surfsense_web/public/images/blog/agentic-rag-vs-long-context-llms-benchmark/placeholder-04-cost-vs-accuracy-dark.png](../../../../sources/MODSetter__SurfSense/surfsense_web/public/images/blog/agentic-rag-vs-long-context-llms-benchmark/placeholder-04-cost-vs-accuracy-dark.png) |
| spec | 37 | [surfsense_web/tests/smoke/chat-stream.spec.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/tests/smoke/chat-stream.spec.ts)<br>[surfsense_web/tests/smoke/dashboard.spec.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/tests/smoke/dashboard.spec.ts)<br>[surfsense_web/tests/documents/file-upload/journey.spec.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/tests/documents/file-upload/journey.spec.ts)<br>[surfsense_web/tests/connectors/slack/journey.spec.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/tests/connectors/slack/journey.spec.ts)<br>[surfsense_web/tests/connectors/onedrive/journey.spec.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/tests/connectors/onedrive/journey.spec.ts)<br>[surfsense_web/tests/connectors/notion/journey.spec.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/tests/connectors/notion/journey.spec.ts)<br>[surfsense_web/tests/connectors/linear/journey.spec.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/tests/connectors/linear/journey.spec.ts)<br>[surfsense_web/tests/connectors/jira/journey.spec.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/tests/connectors/jira/journey.spec.ts) |
| eval | 492 | [surfsense_web/tests/auth.setup.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/tests/auth.setup.ts)<br>[surfsense_web/tests/README.md](../../../../sources/MODSetter__SurfSense/surfsense_web/tests/README.md)<br>[surfsense_web/tests/smoke/chat-stream.spec.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/tests/smoke/chat-stream.spec.ts)<br>[surfsense_web/tests/smoke/dashboard.spec.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/tests/smoke/dashboard.spec.ts)<br>[surfsense_web/tests/helpers/canary.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/tests/helpers/canary.ts)<br>[surfsense_web/tests/helpers/waits/indexing.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/tests/helpers/waits/indexing.ts)<br>[surfsense_web/tests/helpers/ui/composio-drive-config.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/tests/helpers/ui/composio-drive-config.ts)<br>[surfsense_web/tests/helpers/ui/connector-popup.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/tests/helpers/ui/connector-popup.ts) |
| security | 74 | [surfsense_web/tests/auth.setup.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/tests/auth.setup.ts)<br>[surfsense_web/tests/helpers/mocks/composio-oauth.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/tests/helpers/mocks/composio-oauth.ts)<br>[surfsense_web/tests/helpers/api/auth.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/tests/helpers/api/auth.ts)<br>[surfsense_web/public/docs/connectors/linear/linear-oauth-credentials.png](../../../../sources/MODSetter__SurfSense/surfsense_web/public/docs/connectors/linear/linear-oauth-credentials.png)<br>[surfsense_web/public/docs/connectors/google/google_oauth_client.png](../../../../sources/MODSetter__SurfSense/surfsense_web/public/docs/connectors/google/google_oauth_client.png)<br>[surfsense_web/public/docs/connectors/google/google_oauth_config.png](../../../../sources/MODSetter__SurfSense/surfsense_web/public/docs/connectors/google/google_oauth_config.png)<br>[surfsense_web/public/docs/connectors/google/google_oauth_people_api.png](../../../../sources/MODSetter__SurfSense/surfsense_web/public/docs/connectors/google/google_oauth_people_api.png)<br>[surfsense_web/public/docs/connectors/google/google_oauth_screen.png](../../../../sources/MODSetter__SurfSense/surfsense_web/public/docs/connectors/google/google_oauth_screen.png) |
| ci | 8 | [.github/workflows/backend-tests.yml](../../../../sources/MODSetter__SurfSense/.github/workflows/backend-tests.yml)<br>[.github/workflows/code-quality.yml](../../../../sources/MODSetter__SurfSense/.github/workflows/code-quality.yml)<br>[.github/workflows/desktop-release.yml](../../../../sources/MODSetter__SurfSense/.github/workflows/desktop-release.yml)<br>[.github/workflows/docker-build.yml](../../../../sources/MODSetter__SurfSense/.github/workflows/docker-build.yml)<br>[.github/workflows/e2e-tests.yml](../../../../sources/MODSetter__SurfSense/.github/workflows/e2e-tests.yml)<br>[.github/workflows/notary-status.yml](../../../../sources/MODSetter__SurfSense/.github/workflows/notary-status.yml)<br>[.github/workflows/obsidian-plugin-lint.yml](../../../../sources/MODSetter__SurfSense/.github/workflows/obsidian-plugin-lint.yml)<br>[.github/workflows/release-obsidian-plugin.yml](../../../../sources/MODSetter__SurfSense/.github/workflows/release-obsidian-plugin.yml) |
| container | 9 | [surfsense_web/Dockerfile](../../../../sources/MODSetter__SurfSense/surfsense_web/Dockerfile)<br>[surfsense_web/content/docs/docker-installation/docker-compose.mdx](../../../../sources/MODSetter__SurfSense/surfsense_web/content/docs/docker-installation/docker-compose.mdx)<br>[surfsense_backend/Dockerfile](../../../../sources/MODSetter__SurfSense/surfsense_backend/Dockerfile)<br>[surfsense_backend/scripts/whatsapp-bridge/Dockerfile](../../../../sources/MODSetter__SurfSense/surfsense_backend/scripts/whatsapp-bridge/Dockerfile)<br>[docker/docker-compose.deps-only.yml](../../../../sources/MODSetter__SurfSense/docker/docker-compose.deps-only.yml)<br>[docker/docker-compose.dev.yml](../../../../sources/MODSetter__SurfSense/docker/docker-compose.dev.yml)<br>[docker/docker-compose.e2e.yml](../../../../sources/MODSetter__SurfSense/docker/docker-compose.e2e.yml)<br>[docker/docker-compose.gpu.yml](../../../../sources/MODSetter__SurfSense/docker/docker-compose.gpu.yml) |
| instruction | 2 | [surfsense_obsidian/AGENTS.md](../../../../sources/MODSetter__SurfSense/surfsense_obsidian/AGENTS.md)<br>[.cursor/skills/vercel-react-best-practices/AGENTS.md](../../../../sources/MODSetter__SurfSense/.cursor/skills/vercel-react-best-practices/AGENTS.md) |
| docs | 117 | [README.es.md](../../../../sources/MODSetter__SurfSense/README.es.md)<br>[README.hi.md](../../../../sources/MODSetter__SurfSense/README.hi.md)<br>[README.md](../../../../sources/MODSetter__SurfSense/README.md)<br>[README.pt-BR.md](../../../../sources/MODSetter__SurfSense/README.pt-BR.md)<br>[README.zh-CN.md](../../../../sources/MODSetter__SurfSense/README.zh-CN.md)<br>[surfsense_web/tests/README.md](../../../../sources/MODSetter__SurfSense/surfsense_web/tests/README.md)<br>[surfsense_web/tests/connectors/composio/drive/README.md](../../../../sources/MODSetter__SurfSense/surfsense_web/tests/connectors/composio/drive/README.md)<br>[surfsense_web/public/docs/langsmith.png](../../../../sources/MODSetter__SurfSense/surfsense_web/public/docs/langsmith.png) |
| config | 16 | [package.json](../../../../sources/MODSetter__SurfSense/package.json)<br>[surfsense_web/package.json](../../../../sources/MODSetter__SurfSense/surfsense_web/package.json)<br>[surfsense_web/pnpm-workspace.yaml](../../../../sources/MODSetter__SurfSense/surfsense_web/pnpm-workspace.yaml)<br>[surfsense_web/tsconfig.json](../../../../sources/MODSetter__SurfSense/surfsense_web/tsconfig.json)<br>[surfsense_obsidian/package.json](../../../../sources/MODSetter__SurfSense/surfsense_obsidian/package.json)<br>[surfsense_obsidian/tsconfig.json](../../../../sources/MODSetter__SurfSense/surfsense_obsidian/tsconfig.json)<br>[surfsense_evals/pyproject.toml](../../../../sources/MODSetter__SurfSense/surfsense_evals/pyproject.toml)<br>[surfsense_evals/uv.lock](../../../../sources/MODSetter__SurfSense/surfsense_evals/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 492 | [surfsense_web/tests/auth.setup.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/tests/auth.setup.ts)<br>[surfsense_web/tests/README.md](../../../../sources/MODSetter__SurfSense/surfsense_web/tests/README.md)<br>[surfsense_web/tests/smoke/chat-stream.spec.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/tests/smoke/chat-stream.spec.ts)<br>[surfsense_web/tests/smoke/dashboard.spec.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/tests/smoke/dashboard.spec.ts)<br>[surfsense_web/tests/helpers/canary.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/tests/helpers/canary.ts)<br>[surfsense_web/tests/helpers/waits/indexing.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/tests/helpers/waits/indexing.ts) |
| CI workflows | 8 | [.github/workflows/backend-tests.yml](../../../../sources/MODSetter__SurfSense/.github/workflows/backend-tests.yml)<br>[.github/workflows/code-quality.yml](../../../../sources/MODSetter__SurfSense/.github/workflows/code-quality.yml)<br>[.github/workflows/desktop-release.yml](../../../../sources/MODSetter__SurfSense/.github/workflows/desktop-release.yml)<br>[.github/workflows/docker-build.yml](../../../../sources/MODSetter__SurfSense/.github/workflows/docker-build.yml)<br>[.github/workflows/e2e-tests.yml](../../../../sources/MODSetter__SurfSense/.github/workflows/e2e-tests.yml)<br>[.github/workflows/notary-status.yml](../../../../sources/MODSetter__SurfSense/.github/workflows/notary-status.yml) |
| Containers / deploy | 9 | [surfsense_web/Dockerfile](../../../../sources/MODSetter__SurfSense/surfsense_web/Dockerfile)<br>[surfsense_web/content/docs/docker-installation/docker-compose.mdx](../../../../sources/MODSetter__SurfSense/surfsense_web/content/docs/docker-installation/docker-compose.mdx)<br>[surfsense_backend/Dockerfile](../../../../sources/MODSetter__SurfSense/surfsense_backend/Dockerfile)<br>[surfsense_backend/scripts/whatsapp-bridge/Dockerfile](../../../../sources/MODSetter__SurfSense/surfsense_backend/scripts/whatsapp-bridge/Dockerfile)<br>[docker/docker-compose.deps-only.yml](../../../../sources/MODSetter__SurfSense/docker/docker-compose.deps-only.yml)<br>[docker/docker-compose.dev.yml](../../../../sources/MODSetter__SurfSense/docker/docker-compose.dev.yml) |
| Security / policy | 74 | [surfsense_web/tests/auth.setup.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/tests/auth.setup.ts)<br>[surfsense_web/tests/helpers/mocks/composio-oauth.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/tests/helpers/mocks/composio-oauth.ts)<br>[surfsense_web/tests/helpers/api/auth.ts](../../../../sources/MODSetter__SurfSense/surfsense_web/tests/helpers/api/auth.ts)<br>[surfsense_web/public/docs/connectors/linear/linear-oauth-credentials.png](../../../../sources/MODSetter__SurfSense/surfsense_web/public/docs/connectors/linear/linear-oauth-credentials.png)<br>[surfsense_web/public/docs/connectors/google/google_oauth_client.png](../../../../sources/MODSetter__SurfSense/surfsense_web/public/docs/connectors/google/google_oauth_client.png)<br>[surfsense_web/public/docs/connectors/google/google_oauth_config.png](../../../../sources/MODSetter__SurfSense/surfsense_web/public/docs/connectors/google/google_oauth_config.png) |
| Agent instructions | 2 | [surfsense_obsidian/AGENTS.md](../../../../sources/MODSetter__SurfSense/surfsense_obsidian/AGENTS.md)<br>[.cursor/skills/vercel-react-best-practices/AGENTS.md](../../../../sources/MODSetter__SurfSense/.cursor/skills/vercel-react-best-practices/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `surfsense_web/lib/posthog/server.ts`, `surfsense_obsidian/src/main.ts`, `surfsense_evals/src/surfsense_evals/__main__.py`.
2. Trace execution through entrypoints: `surfsense_web/lib/posthog/server.ts`, `surfsense_obsidian/src/main.ts`, `surfsense_evals/src/surfsense_evals/__main__.py`.
3. Map agent/tool runtime through: `skills-lock.json`, `surfsense_web/lib/agent-filesystem.ts`, `surfsense_web/lib/apis/agent-actions-api.service.ts`.
4. Inspect retrieval/memory/indexing through: `surfsense_web/zero/schema/index.ts`, `surfsense_web/zero/queries/index.ts`, `surfsense_web/tests/fixtures/index.ts`.
5. Verify behavior through test/eval files: `surfsense_web/tests/auth.setup.ts`, `surfsense_web/tests/README.md`, `surfsense_web/tests/smoke/chat-stream.spec.ts`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 An open source, privacy focused alternative to NotebookLM for teams with no data limits. Join our Discord https //discor. 핵심 구조 신호는 Python, package.json, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
