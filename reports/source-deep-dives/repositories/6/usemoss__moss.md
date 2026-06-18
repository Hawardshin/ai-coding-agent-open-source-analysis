# usemoss/moss Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

The retrieval layer for production AI systems. Lightning-fast (<10ms) search without vector databases. Built for browser, edge, on-device, and cloud.

## 요약

- 조사 단위: `sources/usemoss__moss` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 977 files, 271 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 retrieval=sdks/python/sdk/tests/test_create_index_versions.py, sdks/javascript/sdk/test/create_index_versions.test.ts, sdks/javascript/sdk/src/index.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | usemoss/moss |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Python |
| Stars | 423 |
| Forks | 50 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/usemoss__moss](../../../../sources/usemoss__moss) |
| Existing report | [reports/global-trending/repositories/usemoss__moss.md](../../../global-trending/repositories/usemoss__moss.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 977 / 271 |
| Max observed depth | 10 |
| Top directories | .github, apps, assets, benchmarks, examples, moss-live-labs, moss-workshop, packages, scripts, sdks |
| Top extensions | .py: 179, .md: 165, .ts: 95, .json: 94, (none): 70, .toml: 50, .tsx: 50, .example: 40, .yml: 28, .lock: 27, .go: 18, .rs: 18 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/vitepress-plugin-moss | packages workspace | 34 |
| apps/livekit-moss-vercel | apps workspace | 28 |
| packages/moss-data-connector | packages workspace | 13 |
| packages/vercel-sdk | packages workspace | 8 |
| packages/moss-md-indexer | packages workspace | 7 |
| apps/docker | apps workspace | 6 |
| apps/moss-bun | apps workspace | 6 |
| packages/pipecat-moss | packages workspace | 6 |
| apps/pipecat-moss | apps workspace | 5 |
| packages/mastra-moss | packages workspace | 5 |
| examples/cookbook | examples workspace | 4 |
| examples/voice-agents | examples workspace | 4 |
| apps/agora-moss | apps workspace | 3 |
| apps/moss-llamaindex | apps workspace | 3 |
| examples/ios | examples workspace | 3 |
| examples/python | examples workspace | 3 |
| packages/moss-cli | packages workspace | 3 |
| examples/go | examples workspace | 2 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| quality | package.json | type-check | npm run type-check --prefix examples/javascript && npm run type-check --prefix apps/next-js |
| quality | package.json | lint | npm run lint --prefix examples/javascript && npm run lint --prefix apps/next-js |


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
| retrieval | [sdks/python/sdk/tests/test_create_index_versions.py](../../../../sources/usemoss__moss/sdks/python/sdk/tests/test_create_index_versions.py) | retrieval signal |
| retrieval | [sdks/javascript/sdk/test/create_index_versions.test.ts](../../../../sources/usemoss__moss/sdks/javascript/sdk/test/create_index_versions.test.ts) | retrieval signal |
| retrieval | [sdks/javascript/sdk/src/index.ts](../../../../sources/usemoss__moss/sdks/javascript/sdk/src/index.ts) | retrieval signal |
| retrieval | [sdks/javascript/bindings/index.d.ts](../../../../sources/usemoss__moss/sdks/javascript/bindings/index.d.ts) | retrieval signal |
| entrypoints | [packages/vercel-sdk/src/index.ts](../../../../sources/usemoss__moss/packages/vercel-sdk/src/index.ts) | entrypoints signal |
| entrypoints | [packages/moss-md-indexer/src/index.ts](../../../../sources/usemoss__moss/packages/moss-md-indexer/src/index.ts) | entrypoints signal |
| entrypoints | [packages/moss-cli/src/moss_cli/main.py](../../../../sources/usemoss__moss/packages/moss-cli/src/moss_cli/main.py) | entrypoints signal |
| docs | [README.md](../../../../sources/usemoss__moss/README.md) | docs signal |
| docs | [sdks/swift/README.md](../../../../sources/usemoss__moss/sdks/swift/README.md) | docs signal |
| docs | [sdks/python/README.md](../../../../sources/usemoss__moss/sdks/python/README.md) | docs signal |
| docs | [sdks/python/sdk/README.md](../../../../sources/usemoss__moss/sdks/python/sdk/README.md) | docs signal |
| eval | [sdks/python/sdk/tests/__init__.py](../../../../sources/usemoss__moss/sdks/python/sdk/tests/__init__.py) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 26 | [sdks/javascript/sdk/src/index.ts](../../../../sources/usemoss__moss/sdks/javascript/sdk/src/index.ts)<br>[packages/vercel-sdk/src/index.ts](../../../../sources/usemoss__moss/packages/vercel-sdk/src/index.ts)<br>[packages/moss-md-indexer/src/index.ts](../../../../sources/usemoss__moss/packages/moss-md-indexer/src/index.ts)<br>[packages/moss-cli/src/moss_cli/main.py](../../../../sources/usemoss__moss/packages/moss-cli/src/moss_cli/main.py)<br>[packages/mastra-moss/src/index.ts](../../../../sources/usemoss__moss/packages/mastra-moss/src/index.ts)<br>[moss-live-labs/examples/image-search/react-app/src/App.css](../../../../sources/usemoss__moss/moss-live-labs/examples/image-search/react-app/src/App.css)<br>[moss-live-labs/examples/image-search/react-app/src/App.tsx](../../../../sources/usemoss__moss/moss-live-labs/examples/image-search/react-app/src/App.tsx)<br>[moss-live-labs/examples/image-search/react-app/src/index.css](../../../../sources/usemoss__moss/moss-live-labs/examples/image-search/react-app/src/index.css) |
| agentRuntime | 98 | [AGENTS.md](../../../../sources/usemoss__moss/AGENTS.md)<br>[packages/zo-computer/zo-skill/SKILL.md](../../../../sources/usemoss__moss/packages/zo-computer/zo-skill/SKILL.md)<br>[packages/vercel-sdk/src/tools/docs.ts](../../../../sources/usemoss__moss/packages/vercel-sdk/src/tools/docs.ts)<br>[packages/vercel-sdk/src/tools/indexes.ts](../../../../sources/usemoss__moss/packages/vercel-sdk/src/tools/indexes.ts)<br>[packages/vercel-sdk/src/tools/search.ts](../../../../sources/usemoss__moss/packages/vercel-sdk/src/tools/search.ts)<br>[packages/mastra-moss/test/tools.test.ts](../../../../sources/usemoss__moss/packages/mastra-moss/test/tools.test.ts)<br>[packages/mastra-moss/src/tools.ts](../../../../sources/usemoss__moss/packages/mastra-moss/src/tools.ts)<br>[moss-live-labs/examples/voice-agent/agent.py](../../../../sources/usemoss__moss/moss-live-labs/examples/voice-agent/agent.py) |
| mcp | 1 | [apps/agora-moss/test_mcp_client.py](../../../../sources/usemoss__moss/apps/agora-moss/test_mcp_client.py) |
| retrieval | 57 | [sdks/python/sdk/tests/test_create_index_versions.py](../../../../sources/usemoss__moss/sdks/python/sdk/tests/test_create_index_versions.py)<br>[sdks/javascript/sdk/test/create_index_versions.test.ts](../../../../sources/usemoss__moss/sdks/javascript/sdk/test/create_index_versions.test.ts)<br>[sdks/javascript/sdk/src/index.ts](../../../../sources/usemoss__moss/sdks/javascript/sdk/src/index.ts)<br>[sdks/javascript/bindings/index.d.ts](../../../../sources/usemoss__moss/sdks/javascript/bindings/index.d.ts)<br>[sdks/javascript/bindings/index.js](../../../../sources/usemoss__moss/sdks/javascript/bindings/index.js)<br>[sdks/elixir/sdk/test/moss/index_filter_test.exs](../../../../sources/usemoss__moss/sdks/elixir/sdk/test/moss/index_filter_test.exs)<br>[sdks/elixir/sdk/test/moss/index_manager_text_api_test.exs](../../../../sources/usemoss__moss/sdks/elixir/sdk/test/moss/index_manager_text_api_test.exs)<br>[sdks/elixir/sdk/samples/example_extend_index.exs](../../../../sources/usemoss__moss/sdks/elixir/sdk/samples/example_extend_index.exs) |
| spec | 10 | [ROADMAP.md](../../../../sources/usemoss__moss/ROADMAP.md)<br>[moss-workshop/starter/requirements.txt](../../../../sources/usemoss__moss/moss-workshop/starter/requirements.txt)<br>[moss-live-labs/community-demos/voice-agents/bharat-benefits/requirements.txt](../../../../sources/usemoss__moss/moss-live-labs/community-demos/voice-agents/bharat-benefits/requirements.txt)<br>[examples/python-classification/requirements.txt](../../../../sources/usemoss__moss/examples/python-classification/requirements.txt)<br>[examples/python/requirements.txt](../../../../sources/usemoss__moss/examples/python/requirements.txt)<br>[examples/ios/token-server/python/requirements.txt](../../../../sources/usemoss__moss/examples/ios/token-server/python/requirements.txt)<br>[benchmarks/requirements.txt](../../../../sources/usemoss__moss/benchmarks/requirements.txt)<br>[assets/moss-architecture.svg](../../../../sources/usemoss__moss/assets/moss-architecture.svg) |
| eval | 83 | [sdks/python/sdk/tests/__init__.py](../../../../sources/usemoss__moss/sdks/python/sdk/tests/__init__.py)<br>[sdks/python/sdk/tests/conftest.py](../../../../sources/usemoss__moss/sdks/python/sdk/tests/conftest.py)<br>[sdks/python/sdk/tests/constants.py](../../../../sources/usemoss__moss/sdks/python/sdk/tests/constants.py)<br>[sdks/python/sdk/tests/test_client_extended.py](../../../../sources/usemoss__moss/sdks/python/sdk/tests/test_client_extended.py)<br>[sdks/python/sdk/tests/test_client.py](../../../../sources/usemoss__moss/sdks/python/sdk/tests/test_client.py)<br>[sdks/python/sdk/tests/test_cloud_fallback.py](../../../../sources/usemoss__moss/sdks/python/sdk/tests/test_cloud_fallback.py)<br>[sdks/python/sdk/tests/test_create_index_versions.py](../../../../sources/usemoss__moss/sdks/python/sdk/tests/test_create_index_versions.py)<br>[sdks/python/sdk/tests/test_e2e.py](../../../../sources/usemoss__moss/sdks/python/sdk/tests/test_e2e.py) |
| security | 1 | [SECURITY.md](../../../../sources/usemoss__moss/SECURITY.md) |
| ci | 22 | [apps/livekit-moss-vercel/agent-react/.github/workflows/build-and-test.yaml](../../../../sources/usemoss__moss/apps/livekit-moss-vercel/agent-react/.github/workflows/build-and-test.yaml)<br>[apps/livekit-moss-vercel/agent-react/.github/workflows/sync-to-production.yaml](../../../../sources/usemoss__moss/apps/livekit-moss-vercel/agent-react/.github/workflows/sync-to-production.yaml)<br>[.github/workflows/ci.yml](../../../../sources/usemoss__moss/.github/workflows/ci.yml)<br>[.github/workflows/langchain-release.yml](../../../../sources/usemoss__moss/.github/workflows/langchain-release.yml)<br>[.github/workflows/publish-agno-moss.yml](../../../../sources/usemoss__moss/.github/workflows/publish-agno-moss.yml)<br>[.github/workflows/publish-agora-moss.yml](../../../../sources/usemoss__moss/.github/workflows/publish-agora-moss.yml)<br>[.github/workflows/publish-dspy-moss.yml](../../../../sources/usemoss__moss/.github/workflows/publish-dspy-moss.yml)<br>[.github/workflows/publish-elevenlabs-moss.yml](../../../../sources/usemoss__moss/.github/workflows/publish-elevenlabs-moss.yml) |
| container | 14 | [moss-live-labs/examples/image-search/backend-py/Dockerfile](../../../../sources/usemoss__moss/moss-live-labs/examples/image-search/backend-py/Dockerfile)<br>[apps/pipecat-moss/pipecat-quickstart/Dockerfile](../../../../sources/usemoss__moss/apps/pipecat-moss/pipecat-quickstart/Dockerfile)<br>[apps/pipecat-moss/ollama-local/docker-compose.yml](../../../../sources/usemoss__moss/apps/pipecat-moss/ollama-local/docker-compose.yml)<br>[apps/pipecat-moss/ollama-local/Dockerfile](../../../../sources/usemoss__moss/apps/pipecat-moss/ollama-local/Dockerfile)<br>[apps/pipecat-moss/hume-ollama-local/docker-compose.yml](../../../../sources/usemoss__moss/apps/pipecat-moss/hume-ollama-local/docker-compose.yml)<br>[apps/pipecat-moss/hume-ollama-local/Dockerfile](../../../../sources/usemoss__moss/apps/pipecat-moss/hume-ollama-local/Dockerfile)<br>[apps/moss-llamaindex/backend/Dockerfile](../../../../sources/usemoss__moss/apps/moss-llamaindex/backend/Dockerfile)<br>[apps/moss-bun/docker-compose.yml](../../../../sources/usemoss__moss/apps/moss-bun/docker-compose.yml) |
| instruction | 2 | [AGENTS.md](../../../../sources/usemoss__moss/AGENTS.md)<br>[CLAUDE.md](../../../../sources/usemoss__moss/CLAUDE.md) |
| docs | 141 | [README.md](../../../../sources/usemoss__moss/README.md)<br>[sdks/swift/README.md](../../../../sources/usemoss__moss/sdks/swift/README.md)<br>[sdks/python/README.md](../../../../sources/usemoss__moss/sdks/python/README.md)<br>[sdks/python/sdk/README.md](../../../../sources/usemoss__moss/sdks/python/sdk/README.md)<br>[sdks/python/bindings/README.md](../../../../sources/usemoss__moss/sdks/python/bindings/README.md)<br>[sdks/javascript/README.md](../../../../sources/usemoss__moss/sdks/javascript/README.md)<br>[sdks/javascript/sdk/README.md](../../../../sources/usemoss__moss/sdks/javascript/sdk/README.md)<br>[sdks/javascript/sdk/test/README.md](../../../../sources/usemoss__moss/sdks/javascript/sdk/test/README.md) |
| config | 119 | [package.json](../../../../sources/usemoss__moss/package.json)<br>[sdks/python/sdk/pyproject.toml](../../../../sources/usemoss__moss/sdks/python/sdk/pyproject.toml)<br>[sdks/python/bindings/Cargo.toml](../../../../sources/usemoss__moss/sdks/python/bindings/Cargo.toml)<br>[sdks/python/bindings/pyproject.toml](../../../../sources/usemoss__moss/sdks/python/bindings/pyproject.toml)<br>[sdks/javascript/sdk/package.json](../../../../sources/usemoss__moss/sdks/javascript/sdk/package.json)<br>[sdks/javascript/sdk/tsconfig.json](../../../../sources/usemoss__moss/sdks/javascript/sdk/tsconfig.json)<br>[sdks/javascript/bindings/Cargo.lock](../../../../sources/usemoss__moss/sdks/javascript/bindings/Cargo.lock)<br>[sdks/javascript/bindings/Cargo.toml](../../../../sources/usemoss__moss/sdks/javascript/bindings/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 83 | [sdks/python/sdk/tests/__init__.py](../../../../sources/usemoss__moss/sdks/python/sdk/tests/__init__.py)<br>[sdks/python/sdk/tests/conftest.py](../../../../sources/usemoss__moss/sdks/python/sdk/tests/conftest.py)<br>[sdks/python/sdk/tests/constants.py](../../../../sources/usemoss__moss/sdks/python/sdk/tests/constants.py)<br>[sdks/python/sdk/tests/test_client_extended.py](../../../../sources/usemoss__moss/sdks/python/sdk/tests/test_client_extended.py)<br>[sdks/python/sdk/tests/test_client.py](../../../../sources/usemoss__moss/sdks/python/sdk/tests/test_client.py)<br>[sdks/python/sdk/tests/test_cloud_fallback.py](../../../../sources/usemoss__moss/sdks/python/sdk/tests/test_cloud_fallback.py) |
| CI workflows | 22 | [apps/livekit-moss-vercel/agent-react/.github/workflows/build-and-test.yaml](../../../../sources/usemoss__moss/apps/livekit-moss-vercel/agent-react/.github/workflows/build-and-test.yaml)<br>[apps/livekit-moss-vercel/agent-react/.github/workflows/sync-to-production.yaml](../../../../sources/usemoss__moss/apps/livekit-moss-vercel/agent-react/.github/workflows/sync-to-production.yaml)<br>[.github/workflows/ci.yml](../../../../sources/usemoss__moss/.github/workflows/ci.yml)<br>[.github/workflows/langchain-release.yml](../../../../sources/usemoss__moss/.github/workflows/langchain-release.yml)<br>[.github/workflows/publish-agno-moss.yml](../../../../sources/usemoss__moss/.github/workflows/publish-agno-moss.yml)<br>[.github/workflows/publish-agora-moss.yml](../../../../sources/usemoss__moss/.github/workflows/publish-agora-moss.yml) |
| Containers / deploy | 14 | [moss-live-labs/examples/image-search/backend-py/Dockerfile](../../../../sources/usemoss__moss/moss-live-labs/examples/image-search/backend-py/Dockerfile)<br>[apps/pipecat-moss/pipecat-quickstart/Dockerfile](../../../../sources/usemoss__moss/apps/pipecat-moss/pipecat-quickstart/Dockerfile)<br>[apps/pipecat-moss/ollama-local/docker-compose.yml](../../../../sources/usemoss__moss/apps/pipecat-moss/ollama-local/docker-compose.yml)<br>[apps/pipecat-moss/ollama-local/Dockerfile](../../../../sources/usemoss__moss/apps/pipecat-moss/ollama-local/Dockerfile)<br>[apps/pipecat-moss/hume-ollama-local/docker-compose.yml](../../../../sources/usemoss__moss/apps/pipecat-moss/hume-ollama-local/docker-compose.yml)<br>[apps/pipecat-moss/hume-ollama-local/Dockerfile](../../../../sources/usemoss__moss/apps/pipecat-moss/hume-ollama-local/Dockerfile) |
| Security / policy | 1 | [SECURITY.md](../../../../sources/usemoss__moss/SECURITY.md) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/usemoss__moss/AGENTS.md)<br>[CLAUDE.md](../../../../sources/usemoss__moss/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `sdks/python/sdk/tests/test_create_index_versions.py`, `sdks/javascript/sdk/test/create_index_versions.test.ts`, `sdks/javascript/sdk/src/index.ts`.
2. Trace execution through entrypoints: `sdks/javascript/sdk/src/index.ts`, `packages/vercel-sdk/src/index.ts`, `packages/moss-md-indexer/src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `packages/zo-computer/zo-skill/SKILL.md`, `packages/vercel-sdk/src/tools/docs.ts`.
4. Inspect retrieval/memory/indexing through: `sdks/python/sdk/tests/test_create_index_versions.py`, `sdks/javascript/sdk/test/create_index_versions.test.ts`, `sdks/javascript/sdk/src/index.ts`.
5. Verify behavior through test/eval files: `sdks/python/sdk/tests/__init__.py`, `sdks/python/sdk/tests/conftest.py`, `sdks/python/sdk/tests/constants.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 The retrieval layer for production AI systems. Lightning fast <10ms search without vector databases. Built for browser, . 핵심 구조 신호는 Python, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
