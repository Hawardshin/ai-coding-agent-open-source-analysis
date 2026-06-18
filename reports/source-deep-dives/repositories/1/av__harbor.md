# av/harbor Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Stop configuring your AI stack. Start using it. One command brings a complete pre-wired LLM stack with hundreds of services to explore.

## 요약

- 조사 단위: `sources/av__harbor` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,201 files, 320 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=tests/fixtures/mock-openai/server.py, services/parler/main.py, services/npcsh/server.py이고, 의존성 단서는 claude, mcp, vscode, transformers, vllm, ollama, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | av/harbor |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | global |
| Language | Python |
| Stars | 3084 |
| Forks | 207 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/av__harbor](../../../../sources/av__harbor) |
| Existing report | [reports/global-trending/repositories/av__harbor.md](../../../global-trending/repositories/av__harbor.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2201 / 320 |
| Max observed depth | 7 |
| Top directories | .agents, .claude, .github, .harness, .scripts, app, boost, docs, harbor, ollama, opencode, perplexica, profiles, promptfoo, routines, scripts, searxng, services, shared, skills |
| Top extensions | .yml: 725, .md: 215, .png: 192, (none): 167, .py: 157, .env: 143, .ts: 115, .sh: 101, .json: 80, .tsx: 65, .http: 39, .woff2: 38 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 35 |
| docs | documentation surface | 34 |
| services/agent | services workspace | 21 |
| services/boost | services workspace | 21 |
| services/promptfoo | services workspace | 12 |
| services/ros-mcp-server | services workspace | 4 |
| services/bench | services workspace | 3 |
| services/dify | services workspace | 3 |
| services/mcp | services workspace | 3 |
| services/open-design | services workspace | 3 |
| services/cognee | services workspace | 2 |
| services/mcpo | services workspace | 2 |
| services/needle | services workspace | 2 |
| services/npcsh | services workspace | 2 |
| services/ol1 | services workspace | 2 |
| services/ollama | services workspace | 2 |
| services/resume-matcher | services workspace | 2 |
| .github | ci surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| entrypoint | package.json bin | harbor.sh | ./harbor.sh |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | claude |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | qdrant |
| modelRuntime | transformers, vllm, ollama, llama |
| webRuntime | none |
| developerSurface | vscode |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [tests/fixtures/mock-openai/server.py](../../../../sources/av__harbor/tests/fixtures/mock-openai/server.py) | entrypoints signal |
| entrypoints | [services/parler/main.py](../../../../sources/av__harbor/services/parler/main.py) | entrypoints signal |
| entrypoints | [services/npcsh/server.py](../../../../sources/av__harbor/services/npcsh/server.py) | entrypoints signal |
| entrypoints | [services/needle/server.py](../../../../sources/av__harbor/services/needle/server.py) | entrypoints signal |
| config | [package.json](../../../../sources/av__harbor/package.json) | config signal |
| config | [poetry.lock](../../../../sources/av__harbor/poetry.lock) | config signal |
| config | [pyproject.toml](../../../../sources/av__harbor/pyproject.toml) | config signal |
| config | [services/omlx/pyproject.toml](../../../../sources/av__harbor/services/omlx/pyproject.toml) | config signal |
| ci | [.github/workflows/app-release.yml](../../../../sources/av__harbor/.github/workflows/app-release.yml) | ci signal |
| ci | [.github/workflows/bench-docker.yml](../../../../sources/av__harbor/.github/workflows/bench-docker.yml) | ci signal |
| ci | [.github/workflows/boost-docker.yml](../../../../sources/av__harbor/.github/workflows/boost-docker.yml) | ci signal |
| ci | [.github/workflows/lint.yml](../../../../sources/av__harbor/.github/workflows/lint.yml) | ci signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 11 | [tests/fixtures/mock-openai/server.py](../../../../sources/av__harbor/tests/fixtures/mock-openai/server.py)<br>[services/parler/main.py](../../../../sources/av__harbor/services/parler/main.py)<br>[services/npcsh/server.py](../../../../sources/av__harbor/services/npcsh/server.py)<br>[services/needle/server.py](../../../../sources/av__harbor/services/needle/server.py)<br>[services/boost/src/main.py](../../../../sources/av__harbor/services/boost/src/main.py)<br>[services/airllm/server.py](../../../../sources/av__harbor/services/airllm/server.py)<br>[services/agent/src/main.py](../../../../sources/av__harbor/services/agent/src/main.py)<br>[app/src-tauri/src/main.rs](../../../../sources/av__harbor/app/src-tauri/src/main.rs) |
| agentRuntime | 60 | [AGENTS.md](../../../../sources/av__harbor/AGENTS.md)<br>[skills-lock.json](../../../../sources/av__harbor/skills-lock.json)<br>[skills/run-llms/SKILL.md](../../../../sources/av__harbor/skills/run-llms/SKILL.md)<br>[skills/harbor-daytona/SKILL.md](../../../../sources/av__harbor/skills/harbor-daytona/SKILL.md)<br>[skills/harbor/SKILL.md](../../../../sources/av__harbor/skills/harbor/SKILL.md)<br>[skills/boost-modules/SKILL.md](../../../../sources/av__harbor/skills/boost-modules/SKILL.md)<br>[services/openfang/agents/assistant/agent.toml](../../../../sources/av__harbor/services/openfang/agents/assistant/agent.toml)<br>[services/http-catalog/agent.http](../../../../sources/av__harbor/services/http-catalog/agent.http) |
| mcp | 17 | [services/compose.mcp-inspector.yml](../../../../sources/av__harbor/services/compose.mcp-inspector.yml)<br>[services/compose.ros-mcp-server.yml](../../../../sources/av__harbor/services/compose.ros-mcp-server.yml)<br>[services/compose.x.mcpo.mcp-server-time.yml](../../../../sources/av__harbor/services/compose.x.mcpo.mcp-server-time.yml)<br>[services/compose.x.traefik.mcp-inspector.yml](../../../../sources/av__harbor/services/compose.x.traefik.mcp-inspector.yml)<br>[services/ros-mcp-server/.gitignore](../../../../sources/av__harbor/services/ros-mcp-server/.gitignore)<br>[services/ros-mcp-server/Dockerfile](../../../../sources/av__harbor/services/ros-mcp-server/Dockerfile)<br>[services/ros-mcp-server/override.env](../../../../sources/av__harbor/services/ros-mcp-server/override.env)<br>[services/mcpo/configs/mcpo.mcp-server-fetch.json](../../../../sources/av__harbor/services/mcpo/configs/mcpo.mcp-server-fetch.json) |
| retrieval | 13 | [services/txtairag/rag.py](../../../../sources/av__harbor/services/txtairag/rag.py)<br>[services/landing/www/index.html](../../../../sources/av__harbor/services/landing/www/index.html)<br>[services/boost/src/custom_modules/artifacts/graph_mini.html](../../../../sources/av__harbor/services/boost/src/custom_modules/artifacts/graph_mini.html)<br>[services/boost/src/custom_modules/artifacts/graph.html](../../../../sources/av__harbor/services/boost/src/custom_modules/artifacts/graph.html)<br>[services/boost/src/custom_modules/artifacts/promx/index.css](../../../../sources/av__harbor/services/boost/src/custom_modules/artifacts/promx/index.css)<br>[services/boost/src/custom_modules/artifacts/promx/index.pug](../../../../sources/av__harbor/services/boost/src/custom_modules/artifacts/promx/index.pug)<br>[services/boost/src/custom_modules/artifacts/promx/index.ts](../../../../sources/av__harbor/services/boost/src/custom_modules/artifacts/promx/index.ts)<br>[services/boost/src/custom_modules/artifacts/fluid/graph.ts](../../../../sources/av__harbor/services/boost/src/custom_modules/artifacts/fluid/graph.ts) |
| spec | 15 | [requirements.sh](../../../../sources/av__harbor/requirements.sh)<br>[services/compose.open-design.yml](../../../../sources/av__harbor/services/compose.open-design.yml)<br>[services/compose.x.open-design.dmr.yml](../../../../sources/av__harbor/services/compose.x.open-design.dmr.yml)<br>[services/compose.x.open-design.llamacpp.yml](../../../../sources/av__harbor/services/compose.x.open-design.llamacpp.yml)<br>[services/compose.x.open-design.mlx.yml](../../../../sources/av__harbor/services/compose.x.open-design.mlx.yml)<br>[services/compose.x.open-design.ollama.yml](../../../../sources/av__harbor/services/compose.x.open-design.ollama.yml)<br>[services/compose.x.open-design.omlx.yml](../../../../sources/av__harbor/services/compose.x.open-design.omlx.yml)<br>[services/compose.x.open-design.vllm.yml](../../../../sources/av__harbor/services/compose.x.open-design.vllm.yml) |
| eval | 112 | [tests/app-daytona-install.md](../../../../sources/av__harbor/tests/app-daytona-install.md)<br>[tests/app-native-setup.md](../../../../sources/av__harbor/tests/app-native-setup.md)<br>[tests/lemonade-integration.md](../../../../sources/av__harbor/tests/lemonade-integration.md)<br>[tests/manual-beszel-dbhub.md](../../../../sources/av__harbor/tests/manual-beszel-dbhub.md)<br>[tests/README.md](../../../../sources/av__harbor/tests/README.md)<br>[tests/run-stage.test.ts](../../../../sources/av__harbor/tests/run-stage.test.ts)<br>[tests/run.ts](../../../../sources/av__harbor/tests/run.ts)<br>[tests/stage-repo.ts](../../../../sources/av__harbor/tests/stage-repo.ts) |
| security | 1 | [services/boost/src/auth.py](../../../../sources/av__harbor/services/boost/src/auth.py) |
| ci | 5 | [.github/workflows/app-release.yml](../../../../sources/av__harbor/.github/workflows/app-release.yml)<br>[.github/workflows/bench-docker.yml](../../../../sources/av__harbor/.github/workflows/bench-docker.yml)<br>[.github/workflows/boost-docker.yml](../../../../sources/av__harbor/.github/workflows/boost-docker.yml)<br>[.github/workflows/lint.yml](../../../../sources/av__harbor/.github/workflows/lint.yml)<br>[.github/workflows/test.yml](../../../../sources/av__harbor/.github/workflows/test.yml) |
| container | 43 | [compose.yml](../../../../sources/av__harbor/compose.yml)<br>[tests/fixtures/mock-openai/Dockerfile](../../../../sources/av__harbor/tests/fixtures/mock-openai/Dockerfile)<br>[services/webtop/Dockerfile](../../../../sources/av__harbor/services/webtop/Dockerfile)<br>[services/vllm/Dockerfile](../../../../sources/av__harbor/services/vllm/Dockerfile)<br>[services/textgrad/Dockerfile](../../../../sources/av__harbor/services/textgrad/Dockerfile)<br>[services/solo/Dockerfile](../../../../sources/av__harbor/services/solo/Dockerfile)<br>[services/ros-mcp-server/Dockerfile](../../../../sources/av__harbor/services/ros-mcp-server/Dockerfile)<br>[services/resume-matcher/Dockerfile.backend](../../../../sources/av__harbor/services/resume-matcher/Dockerfile.backend) |
| instruction | 1 | [AGENTS.md](../../../../sources/av__harbor/AGENTS.md) |
| docs | 325 | [README.md](../../../../sources/av__harbor/README.md)<br>[tests/README.md](../../../../sources/av__harbor/tests/README.md)<br>[shared/README.md](../../../../sources/av__harbor/shared/README.md)<br>[services/promptfoo/README.md](../../../../sources/av__harbor/services/promptfoo/README.md)<br>[services/promptfoo/examples/temp-test/README.md](../../../../sources/av__harbor/services/promptfoo/examples/temp-test/README.md)<br>[services/promptfoo/examples/misguided/README.md](../../../../sources/av__harbor/services/promptfoo/examples/misguided/README.md)<br>[services/promptfoo/examples/hello-promptfoo/README.md](../../../../sources/av__harbor/services/promptfoo/examples/hello-promptfoo/README.md)<br>[services/promptfoo/examples/bias/README.md](../../../../sources/av__harbor/services/promptfoo/examples/bias/README.md) |
| config | 17 | [package.json](../../../../sources/av__harbor/package.json)<br>[poetry.lock](../../../../sources/av__harbor/poetry.lock)<br>[pyproject.toml](../../../../sources/av__harbor/pyproject.toml)<br>[services/omlx/pyproject.toml](../../../../sources/av__harbor/services/omlx/pyproject.toml)<br>[services/mlx/pyproject.toml](../../../../sources/av__harbor/services/mlx/pyproject.toml)<br>[services/dify/openai/package.json](../../../../sources/av__harbor/services/dify/openai/package.json)<br>[services/boost/pyproject.toml](../../../../sources/av__harbor/services/boost/pyproject.toml)<br>[services/boost/uv.lock](../../../../sources/av__harbor/services/boost/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 112 | [tests/app-daytona-install.md](../../../../sources/av__harbor/tests/app-daytona-install.md)<br>[tests/app-native-setup.md](../../../../sources/av__harbor/tests/app-native-setup.md)<br>[tests/lemonade-integration.md](../../../../sources/av__harbor/tests/lemonade-integration.md)<br>[tests/manual-beszel-dbhub.md](../../../../sources/av__harbor/tests/manual-beszel-dbhub.md)<br>[tests/README.md](../../../../sources/av__harbor/tests/README.md)<br>[tests/run-stage.test.ts](../../../../sources/av__harbor/tests/run-stage.test.ts) |
| CI workflows | 5 | [.github/workflows/app-release.yml](../../../../sources/av__harbor/.github/workflows/app-release.yml)<br>[.github/workflows/bench-docker.yml](../../../../sources/av__harbor/.github/workflows/bench-docker.yml)<br>[.github/workflows/boost-docker.yml](../../../../sources/av__harbor/.github/workflows/boost-docker.yml)<br>[.github/workflows/lint.yml](../../../../sources/av__harbor/.github/workflows/lint.yml)<br>[.github/workflows/test.yml](../../../../sources/av__harbor/.github/workflows/test.yml) |
| Containers / deploy | 43 | [compose.yml](../../../../sources/av__harbor/compose.yml)<br>[tests/fixtures/mock-openai/Dockerfile](../../../../sources/av__harbor/tests/fixtures/mock-openai/Dockerfile)<br>[services/webtop/Dockerfile](../../../../sources/av__harbor/services/webtop/Dockerfile)<br>[services/vllm/Dockerfile](../../../../sources/av__harbor/services/vllm/Dockerfile)<br>[services/textgrad/Dockerfile](../../../../sources/av__harbor/services/textgrad/Dockerfile)<br>[services/solo/Dockerfile](../../../../sources/av__harbor/services/solo/Dockerfile) |
| Security / policy | 1 | [services/boost/src/auth.py](../../../../sources/av__harbor/services/boost/src/auth.py) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/av__harbor/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/fixtures/mock-openai/server.py`, `services/parler/main.py`, `services/npcsh/server.py`.
2. Trace execution through entrypoints: `tests/fixtures/mock-openai/server.py`, `services/parler/main.py`, `services/npcsh/server.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `skills-lock.json`, `skills/run-llms/SKILL.md`.
4. Inspect retrieval/memory/indexing through: `services/txtairag/rag.py`, `services/landing/www/index.html`, `services/boost/src/custom_modules/artifacts/graph_mini.html`.
5. Verify behavior through test/eval files: `tests/app-daytona-install.md`, `tests/app-native-setup.md`, `tests/lemonade-integration.md`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 Stop configuring your AI stack. Start using it. One command brings a complete pre wired LLM stack with hundreds of servi. 핵심 구조 신호는 Python, package.json, pyproject.toml, README.md, AGENTS.md, LICENSE이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
