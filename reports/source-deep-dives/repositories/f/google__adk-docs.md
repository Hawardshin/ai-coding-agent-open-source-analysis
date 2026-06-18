# google/adk-docs Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

An open-source, code-first toolkit for building, evaluating, and deploying sophisticated AI agents with flexibility and control.

## 요약

- 조사 단위: `sources/google__adk-docs` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 3,427 files, 717 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=docs/tools-custom/mcp-tools.md, docs/mcp/index.md, docs/integrations/mcp-toolbox-for-databases.md이고, 의존성 단서는 click, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | google/adk-docs |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Shell |
| Stars | 1408 |
| Forks | 1096 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/google__adk-docs](../../../../sources/google__adk-docs) |
| Existing report | [reports/global-trending/repositories/google__adk-docs.md](../../../global-trending/repositories/google__adk-docs.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 3427 / 717 |
| Max observed depth | 11 |
| Top directories | .github, docs, examples, overrides, scripts, site, tools |
| Top extensions | .html: 2547, .md: 235, .png: 145, .py: 67, .svg: 66, .js: 50, .ts: 36, .go: 34, .java: 32, (none): 32, .css: 25, .json: 25 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 158 |
| examples/typescript | examples workspace | 43 |
| examples/python | examples workspace | 33 |
| examples/go | examples workspace | 23 |
| examples/java | examples workspace | 5 |
| examples/kotlin | examples workspace | 2 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| overrides | top-level component | 1 |
| scripts | top-level component | 1 |
| site | documentation surface | 1 |
| tools | top-level component | 1 |


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
| developerSurface | click |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [docs/tools-custom/mcp-tools.md](../../../../sources/google__adk-docs/docs/tools-custom/mcp-tools.md) | mcp signal |
| mcp | [docs/mcp/index.md](../../../../sources/google__adk-docs/docs/mcp/index.md) | mcp signal |
| mcp | [docs/integrations/mcp-toolbox-for-databases.md](../../../../sources/google__adk-docs/docs/integrations/mcp-toolbox-for-databases.md) | mcp signal |
| mcp | [docs/integrations/assets/mcp-db-toolbox.png](../../../../sources/google__adk-docs/docs/integrations/assets/mcp-db-toolbox.png) | mcp signal |
| agentRuntime | [tools/python-rest-api-docs/generate.sh](../../../../sources/google__adk-docs/tools/python-rest-api-docs/generate.sh) | agentRuntime signal |
| agentRuntime | [tools/python-cli-docs/generate.sh](../../../../sources/google__adk-docs/tools/python-cli-docs/generate.sh) | agentRuntime signal |
| agentRuntime | [tools/python-api-docs/discover_modules.py](../../../../sources/google__adk-docs/tools/python-api-docs/discover_modules.py) | agentRuntime signal |
| agentRuntime | [tools/python-api-docs/generate.sh](../../../../sources/google__adk-docs/tools/python-api-docs/generate.sh) | agentRuntime signal |
| entrypoints | [tools/feature-matrix/main.go](../../../../sources/google__adk-docs/tools/feature-matrix/main.go) | entrypoints signal |
| entrypoints | [examples/python/snippets/streaming/adk-streaming-ws/app/main.py](../../../../sources/google__adk-docs/examples/python/snippets/streaming/adk-streaming-ws/app/main.py) | entrypoints signal |
| entrypoints | [examples/python/snippets/streaming/adk-streaming/app/main.py](../../../../sources/google__adk-docs/examples/python/snippets/streaming/adk-streaming/app/main.py) | entrypoints signal |
| entrypoints | [examples/python/snippets/runtime/triggers/main.py](../../../../sources/google__adk-docs/examples/python/snippets/runtime/triggers/main.py) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 25 | [tools/feature-matrix/main.go](../../../../sources/google__adk-docs/tools/feature-matrix/main.go)<br>[examples/python/snippets/streaming/adk-streaming-ws/app/main.py](../../../../sources/google__adk-docs/examples/python/snippets/streaming/adk-streaming-ws/app/main.py)<br>[examples/python/snippets/streaming/adk-streaming/app/main.py](../../../../sources/google__adk-docs/examples/python/snippets/streaming/adk-streaming/app/main.py)<br>[examples/python/snippets/runtime/triggers/main.py](../../../../sources/google__adk-docs/examples/python/snippets/runtime/triggers/main.py)<br>[examples/go/snippets/tools-custom/weather_sentiment/main.go](../../../../sources/google__adk-docs/examples/go/snippets/tools-custom/weather_sentiment/main.go)<br>[examples/go/snippets/tools-custom/user_preference/main.go](../../../../sources/google__adk-docs/examples/go/snippets/tools-custom/user_preference/main.go)<br>[examples/go/snippets/tools-custom/order_status/main.go](../../../../sources/google__adk-docs/examples/go/snippets/tools-custom/order_status/main.go)<br>[examples/go/snippets/tools-custom/doc_analysis/main.go](../../../../sources/google__adk-docs/examples/go/snippets/tools-custom/doc_analysis/main.go) |
| agentRuntime | 675 | [tools/python-rest-api-docs/generate.sh](../../../../sources/google__adk-docs/tools/python-rest-api-docs/generate.sh)<br>[tools/python-cli-docs/generate.sh](../../../../sources/google__adk-docs/tools/python-cli-docs/generate.sh)<br>[tools/python-api-docs/discover_modules.py](../../../../sources/google__adk-docs/tools/python-api-docs/discover_modules.py)<br>[tools/python-api-docs/generate.sh](../../../../sources/google__adk-docs/tools/python-api-docs/generate.sh)<br>[tools/python-api-docs/source/conf.py](../../../../sources/google__adk-docs/tools/python-api-docs/source/conf.py)<br>[tools/python-api-docs/source/index.rst](../../../../sources/google__adk-docs/tools/python-api-docs/source/index.rst)<br>[tools/kotlin-snippets/check_kotlin_snippets.sh](../../../../sources/google__adk-docs/tools/kotlin-snippets/check_kotlin_snippets.sh)<br>[tools/kotlin-snippets/files_to_test.txt](../../../../sources/google__adk-docs/tools/kotlin-snippets/files_to_test.txt) |
| mcp | 108 | [docs/tools-custom/mcp-tools.md](../../../../sources/google__adk-docs/docs/tools-custom/mcp-tools.md)<br>[docs/mcp/index.md](../../../../sources/google__adk-docs/docs/mcp/index.md)<br>[docs/integrations/mcp-toolbox-for-databases.md](../../../../sources/google__adk-docs/docs/integrations/mcp-toolbox-for-databases.md)<br>[docs/integrations/assets/mcp-db-toolbox.png](../../../../sources/google__adk-docs/docs/integrations/assets/mcp-db-toolbox.png)<br>[docs/integrations/assets/mcp-toolbox-for-databases.png](../../../../sources/google__adk-docs/docs/integrations/assets/mcp-toolbox-for-databases.png)<br>[docs/assets/adk-tool-maps-lite-mcp-adk-web-demo.png](../../../../sources/google__adk-docs/docs/assets/adk-tool-maps-lite-mcp-adk-web-demo.png)<br>[docs/assets/adk-tool-mcp-fastmcp-adk-web-demo.png](../../../../sources/google__adk-docs/docs/assets/adk-tool-mcp-fastmcp-adk-web-demo.png)<br>[docs/assets/adk-tool-mcp-filesystem-adk-web-demo.png](../../../../sources/google__adk-docs/docs/assets/adk-tool-mcp-filesystem-adk-web-demo.png) |
| retrieval | 528 | [tools/python-api-docs/source/index.rst](../../../../sources/google__adk-docs/tools/python-api-docs/source/index.rst)<br>[examples/typescript/snippets/sessions/memory_example.ts](../../../../sources/google__adk-docs/examples/typescript/snippets/sessions/memory_example.ts)<br>[examples/python/snippets/tools/built-in-tools/rag_engine.py](../../../../sources/google__adk-docs/examples/python/snippets/tools/built-in-tools/rag_engine.py)<br>[examples/python/snippets/streaming/adk-streaming-ws/app/static/index.html](../../../../sources/google__adk-docs/examples/python/snippets/streaming/adk-streaming-ws/app/static/index.html)<br>[examples/python/snippets/streaming/adk-streaming/app/static/index.html](../../../../sources/google__adk-docs/examples/python/snippets/streaming/adk-streaming/app/static/index.html)<br>[examples/go/snippets/sessions/memory_example/memory_example.go](../../../../sources/google__adk-docs/examples/go/snippets/sessions/memory_example/memory_example.go)<br>[docs/index.md](../../../../sources/google__adk-docs/docs/index.md)<br>[docs/workflows/index.md](../../../../sources/google__adk-docs/docs/workflows/index.md) |
| spec | 16 | [requirements.txt](../../../../sources/google__adk-docs/requirements.txt)<br>[examples/python/snippets/tools/overview/requirements.txt](../../../../sources/google__adk-docs/examples/python/snippets/tools/overview/requirements.txt)<br>[examples/python/snippets/tools/function-tools/requirements.txt](../../../../sources/google__adk-docs/examples/python/snippets/tools/function-tools/requirements.txt)<br>[examples/python/snippets/tools/auth/spec.yaml](../../../../sources/google__adk-docs/examples/python/snippets/tools/auth/spec.yaml)<br>[examples/python/snippets/streaming/adk-streaming-ws/app/requirements.txt](../../../../sources/google__adk-docs/examples/python/snippets/streaming/adk-streaming-ws/app/requirements.txt)<br>[examples/python/snippets/streaming/adk-streaming/app/requirements.txt](../../../../sources/google__adk-docs/examples/python/snippets/streaming/adk-streaming/app/requirements.txt)<br>[examples/python/snippets/get-started/google_search_agent/requirements.txt](../../../../sources/google__adk-docs/examples/python/snippets/get-started/google_search_agent/requirements.txt)<br>[examples/python/snippets/agents/workflow-agents/requirements.txt](../../../../sources/google__adk-docs/examples/python/snippets/agents/workflow-agents/requirements.txt) |
| eval | 49 | [tools/kotlin-snippets/files_to_test.txt](../../../../sources/google__adk-docs/tools/kotlin-snippets/files_to_test.txt)<br>[tools/go-snippets/files_to_test.txt](../../../../sources/google__adk-docs/tools/go-snippets/files_to_test.txt)<br>[tools/go-snippets/runner_test.sh](../../../../sources/google__adk-docs/tools/go-snippets/runner_test.sh)<br>[examples/python/snippets/tools/auth/spec.yaml](../../../../sources/google__adk-docs/examples/python/snippets/tools/auth/spec.yaml)<br>[examples/python/snippets/streaming/adk-streaming-ws/tests/test_log_20251029_150157.md](../../../../sources/google__adk-docs/examples/python/snippets/streaming/adk-streaming-ws/tests/test_log_20251029_150157.md)<br>[examples/python/snippets/streaming/adk-streaming-ws/tests/test_log_20251029_151045.md](../../../../sources/google__adk-docs/examples/python/snippets/streaming/adk-streaming-ws/tests/test_log_20251029_151045.md)<br>[examples/python/snippets/streaming/adk-streaming-ws/tests/test_prompt.md](../../../../sources/google__adk-docs/examples/python/snippets/streaming/adk-streaming-ws/tests/test_prompt.md)<br>[examples/kotlin/snippets/observability/LoggingExamples.kt](../../../../sources/google__adk-docs/examples/kotlin/snippets/observability/LoggingExamples.kt) |
| security | 9 | [examples/python/snippets/tools/auth/agent_cli.py](../../../../sources/google__adk-docs/examples/python/snippets/tools/auth/agent_cli.py)<br>[examples/python/snippets/tools/auth/helpers.py](../../../../sources/google__adk-docs/examples/python/snippets/tools/auth/helpers.py)<br>[examples/python/snippets/tools/auth/spec.yaml](../../../../sources/google__adk-docs/examples/python/snippets/tools/auth/spec.yaml)<br>[examples/python/snippets/tools/auth/tools_and_agent.py](../../../../sources/google__adk-docs/examples/python/snippets/tools/auth/tools_and_agent.py)<br>[docs/integrations/secret-manager.md](../../../../sources/google__adk-docs/docs/integrations/secret-manager.md)<br>[docs/integrations/assets/secret_manager.png](../../../../sources/google__adk-docs/docs/integrations/assets/secret_manager.png)<br>[docs/assets/auth_part1.svg](../../../../sources/google__adk-docs/docs/assets/auth_part1.svg)<br>[docs/assets/auth_part2.svg](../../../../sources/google__adk-docs/docs/assets/auth_part2.svg) |
| ci | 10 | [.github/workflows/build-docs.yaml](../../../../sources/google__adk-docs/.github/workflows/build-docs.yaml)<br>[.github/workflows/feature-matrix-updater.yaml](../../../../sources/google__adk-docs/.github/workflows/feature-matrix-updater.yaml)<br>[.github/workflows/go-fmt.yaml](../../../../sources/google__adk-docs/.github/workflows/go-fmt.yaml)<br>[.github/workflows/go-snippets-pr-check.yaml](../../../../sources/google__adk-docs/.github/workflows/go-snippets-pr-check.yaml)<br>[.github/workflows/kotlin-snippets-pr-check.yaml](../../../../sources/google__adk-docs/.github/workflows/kotlin-snippets-pr-check.yaml)<br>[.github/workflows/link-checker.yaml](../../../../sources/google__adk-docs/.github/workflows/link-checker.yaml)<br>[.github/workflows/publish-docs.yaml](../../../../sources/google__adk-docs/.github/workflows/publish-docs.yaml)<br>[.github/workflows/python-lint.yaml](../../../../sources/google__adk-docs/.github/workflows/python-lint.yaml) |
| container | 12 | [examples/java/demos/patent-search-agent/Dockerfile](../../../../sources/google__adk-docs/examples/java/demos/patent-search-agent/Dockerfile)<br>[examples/java/cloud-run/Dockerfile](../../../../sources/google__adk-docs/examples/java/cloud-run/Dockerfile)<br>[docs/deploy/cloud-run.md](../../../../sources/google__adk-docs/docs/deploy/cloud-run.md)<br>[docs/deploy/gke.md](../../../../sources/google__adk-docs/docs/deploy/gke.md)<br>[docs/deploy/index.md](../../../../sources/google__adk-docs/docs/deploy/index.md)<br>[docs/deploy/agent-runtime/agents-cli.md](../../../../sources/google__adk-docs/docs/deploy/agent-runtime/agents-cli.md)<br>[docs/deploy/agent-runtime/deploy.md](../../../../sources/google__adk-docs/docs/deploy/agent-runtime/deploy.md)<br>[docs/deploy/agent-runtime/index.md](../../../../sources/google__adk-docs/docs/deploy/agent-runtime/index.md) |
| instruction | 0 | not obvious |
| docs | 3108 | [mkdocs.yml](../../../../sources/google__adk-docs/mkdocs.yml)<br>[README.md](../../../../sources/google__adk-docs/README.md)<br>[tools/kotlin-snippets/README.md](../../../../sources/google__adk-docs/tools/kotlin-snippets/README.md)<br>[tools/go-snippets/README.md](../../../../sources/google__adk-docs/tools/go-snippets/README.md)<br>[site/.gitkeep](../../../../sources/google__adk-docs/site/.gitkeep)<br>[examples/python/tutorial/agent_team/adk-tutorial/readme.md](../../../../sources/google__adk-docs/examples/python/tutorial/agent_team/adk-tutorial/readme.md)<br>[examples/java/demos/README.md](../../../../sources/google__adk-docs/examples/java/demos/README.md)<br>[examples/java/demos/patent-search-agent/README.md](../../../../sources/google__adk-docs/examples/java/demos/patent-search-agent/README.md) |
| config | 35 | [requirements.txt](../../../../sources/google__adk-docs/requirements.txt)<br>[tools/feature-matrix/go.mod](../../../../sources/google__adk-docs/tools/feature-matrix/go.mod)<br>[examples/typescript/snippets/tools/overview/package.json](../../../../sources/google__adk-docs/examples/typescript/snippets/tools/overview/package.json)<br>[examples/typescript/snippets/tools/overview/tsconfig.json](../../../../sources/google__adk-docs/examples/typescript/snippets/tools/overview/tsconfig.json)<br>[examples/typescript/snippets/tools/function-tools/package.json](../../../../sources/google__adk-docs/examples/typescript/snippets/tools/function-tools/package.json)<br>[examples/typescript/snippets/tools/function-tools/tsconfig.json](../../../../sources/google__adk-docs/examples/typescript/snippets/tools/function-tools/tsconfig.json)<br>[examples/typescript/snippets/tools/confirmation/package.json](../../../../sources/google__adk-docs/examples/typescript/snippets/tools/confirmation/package.json)<br>[examples/typescript/snippets/skills/package.json](../../../../sources/google__adk-docs/examples/typescript/snippets/skills/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 49 | [tools/kotlin-snippets/files_to_test.txt](../../../../sources/google__adk-docs/tools/kotlin-snippets/files_to_test.txt)<br>[tools/go-snippets/files_to_test.txt](../../../../sources/google__adk-docs/tools/go-snippets/files_to_test.txt)<br>[tools/go-snippets/runner_test.sh](../../../../sources/google__adk-docs/tools/go-snippets/runner_test.sh)<br>[examples/python/snippets/tools/auth/spec.yaml](../../../../sources/google__adk-docs/examples/python/snippets/tools/auth/spec.yaml)<br>[examples/python/snippets/streaming/adk-streaming-ws/tests/test_log_20251029_150157.md](../../../../sources/google__adk-docs/examples/python/snippets/streaming/adk-streaming-ws/tests/test_log_20251029_150157.md)<br>[examples/python/snippets/streaming/adk-streaming-ws/tests/test_log_20251029_151045.md](../../../../sources/google__adk-docs/examples/python/snippets/streaming/adk-streaming-ws/tests/test_log_20251029_151045.md) |
| CI workflows | 10 | [.github/workflows/build-docs.yaml](../../../../sources/google__adk-docs/.github/workflows/build-docs.yaml)<br>[.github/workflows/feature-matrix-updater.yaml](../../../../sources/google__adk-docs/.github/workflows/feature-matrix-updater.yaml)<br>[.github/workflows/go-fmt.yaml](../../../../sources/google__adk-docs/.github/workflows/go-fmt.yaml)<br>[.github/workflows/go-snippets-pr-check.yaml](../../../../sources/google__adk-docs/.github/workflows/go-snippets-pr-check.yaml)<br>[.github/workflows/kotlin-snippets-pr-check.yaml](../../../../sources/google__adk-docs/.github/workflows/kotlin-snippets-pr-check.yaml)<br>[.github/workflows/link-checker.yaml](../../../../sources/google__adk-docs/.github/workflows/link-checker.yaml) |
| Containers / deploy | 12 | [examples/java/demos/patent-search-agent/Dockerfile](../../../../sources/google__adk-docs/examples/java/demos/patent-search-agent/Dockerfile)<br>[examples/java/cloud-run/Dockerfile](../../../../sources/google__adk-docs/examples/java/cloud-run/Dockerfile)<br>[docs/deploy/cloud-run.md](../../../../sources/google__adk-docs/docs/deploy/cloud-run.md)<br>[docs/deploy/gke.md](../../../../sources/google__adk-docs/docs/deploy/gke.md)<br>[docs/deploy/index.md](../../../../sources/google__adk-docs/docs/deploy/index.md)<br>[docs/deploy/agent-runtime/agents-cli.md](../../../../sources/google__adk-docs/docs/deploy/agent-runtime/agents-cli.md) |
| Security / policy | 9 | [examples/python/snippets/tools/auth/agent_cli.py](../../../../sources/google__adk-docs/examples/python/snippets/tools/auth/agent_cli.py)<br>[examples/python/snippets/tools/auth/helpers.py](../../../../sources/google__adk-docs/examples/python/snippets/tools/auth/helpers.py)<br>[examples/python/snippets/tools/auth/spec.yaml](../../../../sources/google__adk-docs/examples/python/snippets/tools/auth/spec.yaml)<br>[examples/python/snippets/tools/auth/tools_and_agent.py](../../../../sources/google__adk-docs/examples/python/snippets/tools/auth/tools_and_agent.py)<br>[docs/integrations/secret-manager.md](../../../../sources/google__adk-docs/docs/integrations/secret-manager.md)<br>[docs/integrations/assets/secret_manager.png](../../../../sources/google__adk-docs/docs/integrations/assets/secret_manager.png) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `docs/tools-custom/mcp-tools.md`, `docs/mcp/index.md`, `docs/integrations/mcp-toolbox-for-databases.md`.
2. Trace execution through entrypoints: `tools/feature-matrix/main.go`, `examples/python/snippets/streaming/adk-streaming-ws/app/main.py`, `examples/python/snippets/streaming/adk-streaming/app/main.py`.
3. Map agent/tool runtime through: `tools/python-rest-api-docs/generate.sh`, `tools/python-cli-docs/generate.sh`, `tools/python-api-docs/discover_modules.py`.
4. Inspect retrieval/memory/indexing through: `tools/python-api-docs/source/index.rst`, `examples/typescript/snippets/sessions/memory_example.ts`, `examples/python/snippets/tools/built-in-tools/rag_engine.py`.
5. Verify behavior through test/eval files: `tools/kotlin-snippets/files_to_test.txt`, `tools/go-snippets/files_to_test.txt`, `tools/go-snippets/runner_test.sh`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 An open source, code first toolkit for building, evaluating, and deploying sophisticated AI agents with flexibility and . 핵심 구조 신호는 Shell, requirements.txt, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
