# volcengine/OpenViking Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

OpenViking is an open-source context database designed specifically for AI Agents(such as openclaw). OpenViking unifies the management of context (memory, resources, and skills) that Agents need through a file system paradigm, enabling hierarchical context delivery and self-evolving.

## 요약

- 조사 단위: `sources/volcengine__OpenViking` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,943 files, 545 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=web-studio/index.html, web-studio/src/routes/index.tsx, web-studio/src/routes/sessions/index.tsx이고, 의존성 단서는 openai, gemini, mcp, langchain, langgraph, fastapi, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | volcengine/OpenViking |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Python |
| Stars | 25770 |
| Forks | 1992 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/volcengine__OpenViking](../../../../sources/volcengine__OpenViking) |
| Existing report | [reports/global-trending/repositories/volcengine__OpenViking.md](../../../global-trending/repositories/volcengine__OpenViking.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2943 / 545 |
| Max observed depth | 7 |
| Top directories | .github, benchmark, bot, build_support, crates, deploy, docker, docs, examples, npm, openviking, openviking_cli, sdk, src, tests, third_party, web-studio |
| Top extensions | .py: 1367, .md: 299, .h: 251, .ts: 193, .rs: 126, .tsx: 84, .cc: 75, .yaml: 71, .cpp: 62, .sh: 57, .mjs: 52, (none): 50 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 82 |
| docs | documentation surface | 29 |
| examples/openclaw-plugin | examples workspace | 7 |
| examples/skills | examples workspace | 7 |
| crates/ragfs | crates workspace | 3 |
| crates/ragfs-python | crates workspace | 3 |
| examples/opencode | examples workspace | 3 |
| crates/ov_cli | crates workspace | 2 |
| crates/ragfs-cache-mooncake | crates workspace | 2 |
| crates/ragfs-cache-redis | crates workspace | 2 |
| crates/ragfs-cache-yuanrong | crates workspace | 2 |
| crates/ragfs-cache-yuanrong-sys | crates workspace | 2 |
| examples/claude-code-memory-plugin | examples workspace | 2 |
| examples/codex-memory-plugin | examples workspace | 2 |
| examples/grafana | examples workspace | 2 |
| examples/multi_tenant | examples workspace | 2 |
| examples/opencode-memory-plugin | examples workspace | 2 |
| examples/opencode-plugin | examples workspace | 2 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | all | make all |
| utility | Makefile | help | make help |
| quality | Makefile | check-pip | make check-pip |
| quality | Makefile | check-deps | make check-deps |
| build | Makefile | build | make build |
| utility | Makefile | clean | make clean |
| build | Makefile | build-studio | make build-studio |
| build | Makefile | build-cli | make build-cli |
| utility | pyproject.toml | ov | ov |
| utility | pyproject.toml | openviking | openviking |
| serve-dev | pyproject.toml | openviking-server | openviking-server |
| utility | pyproject.toml | vikingbot | vikingbot |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, gemini |
| agentProtocols | mcp |
| agentFrameworks | langchain, langgraph |
| vectorStores | none |
| modelRuntime | llama |
| webRuntime | fastapi |
| developerSurface | typer |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [web-studio/index.html](../../../../sources/volcengine__OpenViking/web-studio/index.html) | retrieval signal |
| retrieval | [web-studio/src/routes/index.tsx](../../../../sources/volcengine__OpenViking/web-studio/src/routes/index.tsx) | retrieval signal |
| retrieval | [web-studio/src/routes/sessions/index.tsx](../../../../sources/volcengine__OpenViking/web-studio/src/routes/sessions/index.tsx) | retrieval signal |
| retrieval | [web-studio/src/routes/retrieval/route.tsx](../../../../sources/volcengine__OpenViking/web-studio/src/routes/retrieval/route.tsx) | retrieval signal |
| entrypoints | [web-studio/src/main.tsx](../../../../sources/volcengine__OpenViking/web-studio/src/main.tsx) | entrypoints signal |
| entrypoints | [tests/mcp_benchmark/server.py](../../../../sources/volcengine__OpenViking/tests/mcp_benchmark/server.py) | entrypoints signal |
| entrypoints | [sdk/go/examples/basic_usage/main.go](../../../../sources/volcengine__OpenViking/sdk/go/examples/basic_usage/main.go) | entrypoints signal |
| entrypoints | [npm/cli/bin/ov.mjs](../../../../sources/volcengine__OpenViking/npm/cli/bin/ov.mjs) | entrypoints signal |
| docs | [README_CN.md](../../../../sources/volcengine__OpenViking/README_CN.md) | docs signal |
| docs | [README_JA.md](../../../../sources/volcengine__OpenViking/README_JA.md) | docs signal |
| docs | [README.md](../../../../sources/volcengine__OpenViking/README.md) | docs signal |
| docs | [web-studio/README_CN.md](../../../../sources/volcengine__OpenViking/web-studio/README_CN.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 16 | [web-studio/src/main.tsx](../../../../sources/volcengine__OpenViking/web-studio/src/main.tsx)<br>[tests/mcp_benchmark/server.py](../../../../sources/volcengine__OpenViking/tests/mcp_benchmark/server.py)<br>[sdk/go/examples/basic_usage/main.go](../../../../sources/volcengine__OpenViking/sdk/go/examples/basic_usage/main.go)<br>[npm/cli/bin/ov.mjs](../../../../sources/volcengine__OpenViking/npm/cli/bin/ov.mjs)<br>[npm/cli/bin/postinstall.mjs](../../../../sources/volcengine__OpenViking/npm/cli/bin/postinstall.mjs)<br>[crates/ragfs-python/src/lib.rs](../../../../sources/volcengine__OpenViking/crates/ragfs-python/src/lib.rs)<br>[crates/ragfs-cache-yuanrong-sys/src/lib.rs](../../../../sources/volcengine__OpenViking/crates/ragfs-cache-yuanrong-sys/src/lib.rs)<br>[crates/ragfs-cache-yuanrong/src/lib.rs](../../../../sources/volcengine__OpenViking/crates/ragfs-cache-yuanrong/src/lib.rs) |
| agentRuntime | 328 | [web-studio/src/routes/playground/-components/agent-panel.tsx](../../../../sources/volcengine__OpenViking/web-studio/src/routes/playground/-components/agent-panel.tsx)<br>[web-studio/src/routes/playground/-components/context-explorer.tsx](../../../../sources/volcengine__OpenViking/web-studio/src/routes/playground/-components/context-explorer.tsx)<br>[web-studio/src/routes/home/-components/context-commits-panel.tsx](../../../../sources/volcengine__OpenViking/web-studio/src/routes/home/-components/context-commits-panel.tsx)<br>[web-studio/src/hooks/use-app-connection.tsx](../../../../sources/volcengine__OpenViking/web-studio/src/hooks/use-app-connection.tsx)<br>[web-studio/src/hooks/use-identity-directory.ts](../../../../sources/volcengine__OpenViking/web-studio/src/hooks/use-identity-directory.ts)<br>[web-studio/src/hooks/use-mobile.ts](../../../../sources/volcengine__OpenViking/web-studio/src/hooks/use-mobile.ts)<br>[web-studio/src/hooks/use-server-mode.ts](../../../../sources/volcengine__OpenViking/web-studio/src/hooks/use-server-mode.ts)<br>[web-studio/src/hooks/use-transient-scrollbar.ts](../../../../sources/volcengine__OpenViking/web-studio/src/hooks/use-transient-scrollbar.ts) |
| mcp | 22 | [tests/server/test_mcp_endpoint_code.py](../../../../sources/volcengine__OpenViking/tests/server/test_mcp_endpoint_code.py)<br>[tests/server/test_mcp_endpoint.py](../../../../sources/volcengine__OpenViking/tests/server/test_mcp_endpoint.py)<br>[tests/server/oauth/test_mcp_www_authenticate.py](../../../../sources/volcengine__OpenViking/tests/server/oauth/test_mcp_www_authenticate.py)<br>[tests/mcp_benchmark/server.py](../../../../sources/volcengine__OpenViking/tests/mcp_benchmark/server.py)<br>[openviking/server/mcp_endpoint.py](../../../../sources/volcengine__OpenViking/openviking/server/mcp_endpoint.py)<br>[openviking/core/mcp_converter.py](../../../../sources/volcengine__OpenViking/openviking/core/mcp_converter.py)<br>[examples/codex-memory-plugin/.mcp.json](../../../../sources/volcengine__OpenViking/examples/codex-memory-plugin/.mcp.json)<br>[examples/claude-code-memory-plugin/.mcp.json](../../../../sources/volcengine__OpenViking/examples/claude-code-memory-plugin/.mcp.json) |
| retrieval | 389 | [web-studio/index.html](../../../../sources/volcengine__OpenViking/web-studio/index.html)<br>[web-studio/src/routes/index.tsx](../../../../sources/volcengine__OpenViking/web-studio/src/routes/index.tsx)<br>[web-studio/src/routes/sessions/index.tsx](../../../../sources/volcengine__OpenViking/web-studio/src/routes/sessions/index.tsx)<br>[web-studio/src/routes/retrieval/route.tsx](../../../../sources/volcengine__OpenViking/web-studio/src/routes/retrieval/route.tsx)<br>[web-studio/src/routes/retrieval/-types/retrieval.ts](../../../../sources/volcengine__OpenViking/web-studio/src/routes/retrieval/-types/retrieval.ts)<br>[web-studio/src/routes/retrieval/-lib/results.ts](../../../../sources/volcengine__OpenViking/web-studio/src/routes/retrieval/-lib/results.ts)<br>[web-studio/src/routes/retrieval/-lib/scope.ts](../../../../sources/volcengine__OpenViking/web-studio/src/routes/retrieval/-lib/scope.ts)<br>[web-studio/src/routes/retrieval/-lib/search-state.ts](../../../../sources/volcengine__OpenViking/web-studio/src/routes/retrieval/-lib/search-state.ts) |
| spec | 22 | [tests/oc2ov_test/requirements.txt](../../../../sources/volcengine__OpenViking/tests/oc2ov_test/requirements.txt)<br>[tests/api_test/requirements.txt](../../../../sources/volcengine__OpenViking/tests/api_test/requirements.txt)<br>[examples/openclaw-plugin/tests/ut/architecture-boundaries.test.ts](../../../../sources/volcengine__OpenViking/examples/openclaw-plugin/tests/ut/architecture-boundaries.test.ts)<br>[examples/openclaw-plugin/docs/oc-resource-skill-import-design.md](../../../../sources/volcengine__OpenViking/examples/openclaw-plugin/docs/oc-resource-skill-import-design.md)<br>[examples/openclaw-plugin/docs/workmemory-v2-design.md](../../../../sources/volcengine__OpenViking/examples/openclaw-plugin/docs/workmemory-v2-design.md)<br>[examples/codex-memory-plugin/DESIGN.md](../../../../sources/volcengine__OpenViking/examples/codex-memory-plugin/DESIGN.md)<br>[docs/zh/concepts/01-architecture.md](../../../../sources/volcengine__OpenViking/docs/zh/concepts/01-architecture.md)<br>[docs/zh/about/03-roadmap.md](../../../../sources/volcengine__OpenViking/docs/zh/about/03-roadmap.md) |
| eval | 948 | [web-studio/src/routes/resources/-lib/find-search.test.ts](../../../../sources/volcengine__OpenViking/web-studio/src/routes/resources/-lib/find-search.test.ts)<br>[web-studio/src/routes/request-logs/-components/metric-card.tsx](../../../../sources/volcengine__OpenViking/web-studio/src/routes/request-logs/-components/metric-card.tsx)<br>[web-studio/src/routes/home/-components/metric-panels.tsx](../../../../sources/volcengine__OpenViking/web-studio/src/routes/home/-components/metric-panels.tsx)<br>[web-studio/src/lib/viking-uri.test.ts](../../../../sources/volcengine__OpenViking/web-studio/src/lib/viking-uri.test.ts)<br>[third_party/spdlog-1.14.1/tests/CMakeLists.txt](../../../../sources/volcengine__OpenViking/third_party/spdlog-1.14.1/tests/CMakeLists.txt)<br>[third_party/spdlog-1.14.1/tests/includes.h](../../../../sources/volcengine__OpenViking/third_party/spdlog-1.14.1/tests/includes.h)<br>[third_party/spdlog-1.14.1/tests/main.cpp](../../../../sources/volcengine__OpenViking/third_party/spdlog-1.14.1/tests/main.cpp)<br>[third_party/spdlog-1.14.1/tests/test_async.cpp](../../../../sources/volcengine__OpenViking/third_party/spdlog-1.14.1/tests/test_async.cpp) |
| security | 70 | [SECURITY.md](../../../../sources/volcengine__OpenViking/SECURITY.md)<br>[web-studio/src/routes/request-logs/-types/audit.ts](../../../../sources/volcengine__OpenViking/web-studio/src/routes/request-logs/-types/audit.ts)<br>[web-studio/src/routes/request-logs/-constants/audit.ts](../../../../sources/volcengine__OpenViking/web-studio/src/routes/request-logs/-constants/audit.ts)<br>[web-studio/src/routes/oauth/consent.tsx](../../../../sources/volcengine__OpenViking/web-studio/src/routes/oauth/consent.tsx)<br>[web-studio/src/routes/oauth/verify.tsx](../../../../sources/volcengine__OpenViking/web-studio/src/routes/oauth/verify.tsx)<br>[web-studio/src/gen/ov-client/core/auth.gen.ts](../../../../sources/volcengine__OpenViking/web-studio/src/gen/ov-client/core/auth.gen.ts)<br>[third_party/leveldb-1.23/util/filter_policy.cc](../../../../sources/volcengine__OpenViking/third_party/leveldb-1.23/util/filter_policy.cc)<br>[third_party/leveldb-1.23/include/leveldb/filter_policy.h](../../../../sources/volcengine__OpenViking/third_party/leveldb-1.23/include/leveldb/filter_policy.h) |
| ci | 26 | [third_party/spdlog-1.14.1/.github/workflows/ci.yml](../../../../sources/volcengine__OpenViking/third_party/spdlog-1.14.1/.github/workflows/ci.yml)<br>[bot/.github/workflows/release.yml](../../../../sources/volcengine__OpenViking/bot/.github/workflows/release.yml)<br>[bot/.github/workflows/test.yml](../../../../sources/volcengine__OpenViking/bot/.github/workflows/test.yml)<br>[.github/workflows/_build.yml](../../../../sources/volcengine__OpenViking/.github/workflows/_build.yml)<br>[.github/workflows/_codeql.yml](../../../../sources/volcengine__OpenViking/.github/workflows/_codeql.yml)<br>[.github/workflows/_docs-deploy.yml](../../../../sources/volcengine__OpenViking/.github/workflows/_docs-deploy.yml)<br>[.github/workflows/_docs.yml](../../../../sources/volcengine__OpenViking/.github/workflows/_docs.yml)<br>[.github/workflows/_lint.yml](../../../../sources/volcengine__OpenViking/.github/workflows/_lint.yml) |
| container | 36 | [docker-compose.yml](../../../../sources/volcengine__OpenViking/docker-compose.yml)<br>[Dockerfile](../../../../sources/volcengine__OpenViking/Dockerfile)<br>[examples/grafana/docker-compose.localhost.yml](../../../../sources/volcengine__OpenViking/examples/grafana/docker-compose.localhost.yml)<br>[examples/grafana/docker-compose.yml](../../../../sources/volcengine__OpenViking/examples/grafana/docker-compose.yml)<br>[docker/mooncake-test/Dockerfile](../../../../sources/volcengine__OpenViking/docker/mooncake-test/Dockerfile)<br>[deploy/helm/README.md](../../../../sources/volcengine__OpenViking/deploy/helm/README.md)<br>[deploy/helm/openviking/.helmignore](../../../../sources/volcengine__OpenViking/deploy/helm/openviking/.helmignore)<br>[deploy/helm/openviking/Chart.yaml](../../../../sources/volcengine__OpenViking/deploy/helm/openviking/Chart.yaml) |
| instruction | 0 | not obvious |
| docs | 315 | [README_CN.md](../../../../sources/volcengine__OpenViking/README_CN.md)<br>[README_JA.md](../../../../sources/volcengine__OpenViking/README_JA.md)<br>[README.md](../../../../sources/volcengine__OpenViking/README.md)<br>[web-studio/README_CN.md](../../../../sources/volcengine__OpenViking/web-studio/README_CN.md)<br>[web-studio/README.md](../../../../sources/volcengine__OpenViking/web-studio/README.md)<br>[third_party/spdlog-1.14.1/README.md](../../../../sources/volcengine__OpenViking/third_party/spdlog-1.14.1/README.md)<br>[third_party/leveldb-1.23/README.md](../../../../sources/volcengine__OpenViking/third_party/leveldb-1.23/README.md)<br>[third_party/leveldb-1.23/port/README.md](../../../../sources/volcengine__OpenViking/third_party/leveldb-1.23/port/README.md) |
| config | 33 | [Cargo.lock](../../../../sources/volcengine__OpenViking/Cargo.lock)<br>[Cargo.toml](../../../../sources/volcengine__OpenViking/Cargo.toml)<br>[Makefile](../../../../sources/volcengine__OpenViking/Makefile)<br>[pyproject.toml](../../../../sources/volcengine__OpenViking/pyproject.toml)<br>[uv.lock](../../../../sources/volcengine__OpenViking/uv.lock)<br>[web-studio/package.json](../../../../sources/volcengine__OpenViking/web-studio/package.json)<br>[web-studio/tsconfig.json](../../../../sources/volcengine__OpenViking/web-studio/tsconfig.json)<br>[tests/oc2ov_test/pyproject.toml](../../../../sources/volcengine__OpenViking/tests/oc2ov_test/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 948 | [web-studio/src/routes/resources/-lib/find-search.test.ts](../../../../sources/volcengine__OpenViking/web-studio/src/routes/resources/-lib/find-search.test.ts)<br>[web-studio/src/routes/request-logs/-components/metric-card.tsx](../../../../sources/volcengine__OpenViking/web-studio/src/routes/request-logs/-components/metric-card.tsx)<br>[web-studio/src/routes/home/-components/metric-panels.tsx](../../../../sources/volcengine__OpenViking/web-studio/src/routes/home/-components/metric-panels.tsx)<br>[web-studio/src/lib/viking-uri.test.ts](../../../../sources/volcengine__OpenViking/web-studio/src/lib/viking-uri.test.ts)<br>[third_party/spdlog-1.14.1/tests/CMakeLists.txt](../../../../sources/volcengine__OpenViking/third_party/spdlog-1.14.1/tests/CMakeLists.txt)<br>[third_party/spdlog-1.14.1/tests/includes.h](../../../../sources/volcengine__OpenViking/third_party/spdlog-1.14.1/tests/includes.h) |
| CI workflows | 26 | [third_party/spdlog-1.14.1/.github/workflows/ci.yml](../../../../sources/volcengine__OpenViking/third_party/spdlog-1.14.1/.github/workflows/ci.yml)<br>[bot/.github/workflows/release.yml](../../../../sources/volcengine__OpenViking/bot/.github/workflows/release.yml)<br>[bot/.github/workflows/test.yml](../../../../sources/volcengine__OpenViking/bot/.github/workflows/test.yml)<br>[.github/workflows/_build.yml](../../../../sources/volcengine__OpenViking/.github/workflows/_build.yml)<br>[.github/workflows/_codeql.yml](../../../../sources/volcengine__OpenViking/.github/workflows/_codeql.yml)<br>[.github/workflows/_docs-deploy.yml](../../../../sources/volcengine__OpenViking/.github/workflows/_docs-deploy.yml) |
| Containers / deploy | 36 | [docker-compose.yml](../../../../sources/volcengine__OpenViking/docker-compose.yml)<br>[Dockerfile](../../../../sources/volcengine__OpenViking/Dockerfile)<br>[examples/grafana/docker-compose.localhost.yml](../../../../sources/volcengine__OpenViking/examples/grafana/docker-compose.localhost.yml)<br>[examples/grafana/docker-compose.yml](../../../../sources/volcengine__OpenViking/examples/grafana/docker-compose.yml)<br>[docker/mooncake-test/Dockerfile](../../../../sources/volcengine__OpenViking/docker/mooncake-test/Dockerfile)<br>[deploy/helm/README.md](../../../../sources/volcengine__OpenViking/deploy/helm/README.md) |
| Security / policy | 70 | [SECURITY.md](../../../../sources/volcengine__OpenViking/SECURITY.md)<br>[web-studio/src/routes/request-logs/-types/audit.ts](../../../../sources/volcengine__OpenViking/web-studio/src/routes/request-logs/-types/audit.ts)<br>[web-studio/src/routes/request-logs/-constants/audit.ts](../../../../sources/volcengine__OpenViking/web-studio/src/routes/request-logs/-constants/audit.ts)<br>[web-studio/src/routes/oauth/consent.tsx](../../../../sources/volcengine__OpenViking/web-studio/src/routes/oauth/consent.tsx)<br>[web-studio/src/routes/oauth/verify.tsx](../../../../sources/volcengine__OpenViking/web-studio/src/routes/oauth/verify.tsx)<br>[web-studio/src/gen/ov-client/core/auth.gen.ts](../../../../sources/volcengine__OpenViking/web-studio/src/gen/ov-client/core/auth.gen.ts) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `web-studio/index.html`, `web-studio/src/routes/index.tsx`, `web-studio/src/routes/sessions/index.tsx`.
2. Trace execution through entrypoints: `web-studio/src/main.tsx`, `tests/mcp_benchmark/server.py`, `sdk/go/examples/basic_usage/main.go`.
3. Map agent/tool runtime through: `web-studio/src/routes/playground/-components/agent-panel.tsx`, `web-studio/src/routes/playground/-components/context-explorer.tsx`, `web-studio/src/routes/home/-components/context-commits-panel.tsx`.
4. Inspect retrieval/memory/indexing through: `web-studio/index.html`, `web-studio/src/routes/index.tsx`, `web-studio/src/routes/sessions/index.tsx`.
5. Verify behavior through test/eval files: `web-studio/src/routes/resources/-lib/find-search.test.ts`, `web-studio/src/routes/request-logs/-components/metric-card.tsx`, `web-studio/src/routes/home/-components/metric-panels.tsx`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 OpenViking is an open source context database designed specifically for AI Agents such as openclaw . OpenViking unifies . 핵심 구조 신호는 Python, pyproject.toml, Cargo.toml, Dockerfile, docker-compose.yml, Makefile이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
