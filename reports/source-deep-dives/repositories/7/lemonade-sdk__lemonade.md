# lemonade-sdk/lemonade Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Lemonade helps users discover and run local AI apps by serving optimized LLMs right from their own GPUs and NPUs. Join our discord: https://discord.gg/5xXzkMu8Zk

## 요약

- 조사 단위: `sources/lemonade-sdk__lemonade` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 555 files, 94 directories, depth score 122, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=tools/moonshine-server/main.py, src/cpp/server/server.cpp, src/cpp/include/lemon/server.h이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | lemonade-sdk/lemonade |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | C++ |
| Stars | 4507 |
| Forks | 349 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/lemonade-sdk__lemonade](../../../../sources/lemonade-sdk__lemonade) |
| Existing report | [reports/global-trending/repositories/lemonade-sdk__lemonade.md](../../../global-trending/repositories/lemonade-sdk__lemonade.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 555 / 94 |
| Max observed depth | 7 |
| Top directories | .devcontainer, .github, .signpath, .ubuntu, contrib, data, docs, examples, src, test, tools |
| Top extensions | .cpp: 78, .h: 76, .md: 70, .tsx: 49, .py: 45, .yml: 44, .ts: 30, (none): 26, .json: 18, .html: 17, .css: 11, .cjs: 10 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 41 |
| src | source boundary | 30 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| contrib | top-level component | 1 |
| data | top-level component | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| test | validation surface | 1 |
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
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [tools/moonshine-server/main.py](../../../../sources/lemonade-sdk__lemonade/tools/moonshine-server/main.py) | entrypoints signal |
| entrypoints | [src/cpp/server/server.cpp](../../../../sources/lemonade-sdk__lemonade/src/cpp/server/server.cpp) | entrypoints signal |
| entrypoints | [src/cpp/include/lemon/server.h](../../../../sources/lemonade-sdk__lemonade/src/cpp/include/lemon/server.h) | entrypoints signal |
| entrypoints | [src/app/src-tauri/src/main.rs](../../../../sources/lemonade-sdk__lemonade/src/app/src-tauri/src/main.rs) | entrypoints signal |
| container | [Dockerfile](../../../../sources/lemonade-sdk__lemonade/Dockerfile) | container signal |
| container | [.ubuntu/Dockerfile](../../../../sources/lemonade-sdk__lemonade/.ubuntu/Dockerfile) | container signal |
| container | [.devcontainer/Dockerfile](../../../../sources/lemonade-sdk__lemonade/.devcontainer/Dockerfile) | container signal |
| config | [test/requirements.txt](../../../../sources/lemonade-sdk__lemonade/test/requirements.txt) | config signal |
| config | [src/web-app/package.json](../../../../sources/lemonade-sdk__lemonade/src/web-app/package.json) | config signal |
| config | [src/web-app/tsconfig.json](../../../../sources/lemonade-sdk__lemonade/src/web-app/tsconfig.json) | config signal |
| config | [src/app/package.json](../../../../sources/lemonade-sdk__lemonade/src/app/package.json) | config signal |
| ci | [.github/workflows/auto-label.yml](../../../../sources/lemonade-sdk__lemonade/.github/workflows/auto-label.yml) | ci signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [tools/moonshine-server/main.py](../../../../sources/lemonade-sdk__lemonade/tools/moonshine-server/main.py)<br>[src/cpp/server/server.cpp](../../../../sources/lemonade-sdk__lemonade/src/cpp/server/server.cpp)<br>[src/cpp/include/lemon/server.h](../../../../sources/lemonade-sdk__lemonade/src/cpp/include/lemon/server.h)<br>[src/app/src-tauri/src/main.rs](../../../../sources/lemonade-sdk__lemonade/src/app/src-tauri/src/main.rs) |
| agentRuntime | 15 | [AGENTS.md](../../../../sources/lemonade-sdk__lemonade/AGENTS.md)<br>[tools/model_sizes.py](../../../../sources/lemonade-sdk__lemonade/tools/model_sizes.py)<br>[tools/moonshine-server/main.py](../../../../sources/lemonade-sdk__lemonade/tools/moonshine-server/main.py)<br>[src/cpp/include/lemon_cli/agent_config_file.h](../../../../sources/lemonade-sdk__lemonade/src/cpp/include/lemon_cli/agent_config_file.h)<br>[src/cpp/include/lemon_cli/agent_launcher.h](../../../../sources/lemonade-sdk__lemonade/src/cpp/include/lemon_cli/agent_launcher.h)<br>[src/cpp/cli/agent_config_file.cpp](../../../../sources/lemonade-sdk__lemonade/src/cpp/cli/agent_config_file.cpp)<br>[src/cpp/cli/agent_launcher.cpp](../../../../sources/lemonade-sdk__lemonade/src/cpp/cli/agent_launcher.cpp)<br>[src/app/src/renderer/hooks/useAudioCapture.ts](../../../../sources/lemonade-sdk__lemonade/src/app/src/renderer/hooks/useAudioCapture.ts) |
| mcp | 6 | [test/server_mcp_smoke.py](../../../../sources/lemonade-sdk__lemonade/test/server_mcp_smoke.py)<br>[test/server_mcp.py](../../../../sources/lemonade-sdk__lemonade/test/server_mcp.py)<br>[src/cpp/server/mcp_server.cpp](../../../../sources/lemonade-sdk__lemonade/src/cpp/server/mcp_server.cpp)<br>[src/cpp/include/lemon/mcp_server.h](../../../../sources/lemonade-sdk__lemonade/src/cpp/include/lemon/mcp_server.h)<br>[docs/api/mcp.md](../../../../sources/lemonade-sdk__lemonade/docs/api/mcp.md)<br>[.github/workflows/mcp-smoke-test.yml](../../../../sources/lemonade-sdk__lemonade/.github/workflows/mcp-smoke-test.yml) |
| retrieval | 6 | [src/cpp/resources/static/index.html](../../../../sources/lemonade-sdk__lemonade/src/cpp/resources/static/index.html)<br>[src/app/styles/index.css](../../../../sources/lemonade-sdk__lemonade/src/app/styles/index.css)<br>[src/app/src/renderer/index.html](../../../../sources/lemonade-sdk__lemonade/src/app/src/renderer/index.html)<br>[src/app/src/renderer/index.tsx](../../../../sources/lemonade-sdk__lemonade/src/app/src/renderer/index.tsx)<br>[docs/index.html](../../../../sources/lemonade-sdk__lemonade/docs/index.html)<br>[docs/news/index.html](../../../../sources/lemonade-sdk__lemonade/docs/news/index.html) |
| spec | 7 | [DESIGN.md](../../../../sources/lemonade-sdk__lemonade/DESIGN.md)<br>[test/requirements.txt](../../../../sources/lemonade-sdk__lemonade/test/requirements.txt)<br>[src/cpp/Extra-Models-Dir-Spec.md](../../../../sources/lemonade-sdk__lemonade/src/cpp/Extra-Models-Dir-Spec.md)<br>[src/cpp/Multi-Model-Spec.md](../../../../sources/lemonade-sdk__lemonade/src/cpp/Multi-Model-Spec.md)<br>[docs/server/server_spec.md](../../../../sources/lemonade-sdk__lemonade/docs/server/server_spec.md)<br>[docs/assets/docs_requirements.txt](../../../../sources/lemonade-sdk__lemonade/docs/assets/docs_requirements.txt)<br>[contrib/launchpad-downloads/requirements.txt](../../../../sources/lemonade-sdk__lemonade/contrib/launchpad-downloads/requirements.txt) |
| eval | 64 | [test/__init__.py](../../../../sources/lemonade-sdk__lemonade/test/__init__.py)<br>[test/requirements.txt](../../../../sources/lemonade-sdk__lemonade/test/requirements.txt)<br>[test/server_cli_apikey.py](../../../../sources/lemonade-sdk__lemonade/test/server_cli_apikey.py)<br>[test/server_cli2.py](../../../../sources/lemonade-sdk__lemonade/test/server_cli2.py)<br>[test/server_downloads.py](../../../../sources/lemonade-sdk__lemonade/test/server_downloads.py)<br>[test/server_endpoints.py](../../../../sources/lemonade-sdk__lemonade/test/server_endpoints.py)<br>[test/server_eviction.py](../../../../sources/lemonade-sdk__lemonade/test/server_eviction.py)<br>[test/server_llm.py](../../../../sources/lemonade-sdk__lemonade/test/server_llm.py) |
| security | 0 | not obvious |
| ci | 22 | [.github/workflows/auto-label.yml](../../../../sources/lemonade-sdk__lemonade/.github/workflows/auto-label.yml)<br>[.github/workflows/build-and-push-container.yml](../../../../sources/lemonade-sdk__lemonade/.github/workflows/build-and-push-container.yml)<br>[.github/workflows/build-container.yml](../../../../sources/lemonade-sdk__lemonade/.github/workflows/build-container.yml)<br>[.github/workflows/claude-review.yml](../../../../sources/lemonade-sdk__lemonade/.github/workflows/claude-review.yml)<br>[.github/workflows/cpp_server_build_test_release.yml](../../../../sources/lemonade-sdk__lemonade/.github/workflows/cpp_server_build_test_release.yml)<br>[.github/workflows/docker-build-smoke-test.yml](../../../../sources/lemonade-sdk__lemonade/.github/workflows/docker-build-smoke-test.yml)<br>[.github/workflows/docs_and_style.yml](../../../../sources/lemonade-sdk__lemonade/.github/workflows/docs_and_style.yml)<br>[.github/workflows/launchpad-ppa.yml](../../../../sources/lemonade-sdk__lemonade/.github/workflows/launchpad-ppa.yml) |
| container | 3 | [Dockerfile](../../../../sources/lemonade-sdk__lemonade/Dockerfile)<br>[.ubuntu/Dockerfile](../../../../sources/lemonade-sdk__lemonade/.ubuntu/Dockerfile)<br>[.devcontainer/Dockerfile](../../../../sources/lemonade-sdk__lemonade/.devcontainer/Dockerfile) |
| instruction | 2 | [AGENTS.md](../../../../sources/lemonade-sdk__lemonade/AGENTS.md)<br>[CLAUDE.md](../../../../sources/lemonade-sdk__lemonade/CLAUDE.md) |
| docs | 99 | [mkdocs.yml](../../../../sources/lemonade-sdk__lemonade/mkdocs.yml)<br>[README.md](../../../../sources/lemonade-sdk__lemonade/README.md)<br>[test/app/app-regression/README.md](../../../../sources/lemonade-sdk__lemonade/test/app/app-regression/README.md)<br>[src/cpp/README.md](../../../../sources/lemonade-sdk__lemonade/src/cpp/README.md)<br>[examples/README.md](../../../../sources/lemonade-sdk__lemonade/examples/README.md)<br>[docs/CNAME](../../../../sources/lemonade-sdk__lemonade/docs/CNAME)<br>[docs/driver_install.html](../../../../sources/lemonade-sdk__lemonade/docs/driver_install.html)<br>[docs/favicon.ico](../../../../sources/lemonade-sdk__lemonade/docs/favicon.ico) |
| config | 8 | [test/requirements.txt](../../../../sources/lemonade-sdk__lemonade/test/requirements.txt)<br>[src/web-app/package.json](../../../../sources/lemonade-sdk__lemonade/src/web-app/package.json)<br>[src/web-app/tsconfig.json](../../../../sources/lemonade-sdk__lemonade/src/web-app/tsconfig.json)<br>[src/app/package.json](../../../../sources/lemonade-sdk__lemonade/src/app/package.json)<br>[src/app/tsconfig.json](../../../../sources/lemonade-sdk__lemonade/src/app/tsconfig.json)<br>[src/app/src-tauri/Cargo.lock](../../../../sources/lemonade-sdk__lemonade/src/app/src-tauri/Cargo.lock)<br>[src/app/src-tauri/Cargo.toml](../../../../sources/lemonade-sdk__lemonade/src/app/src-tauri/Cargo.toml)<br>[contrib/launchpad-downloads/requirements.txt](../../../../sources/lemonade-sdk__lemonade/contrib/launchpad-downloads/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 64 | [test/__init__.py](../../../../sources/lemonade-sdk__lemonade/test/__init__.py)<br>[test/requirements.txt](../../../../sources/lemonade-sdk__lemonade/test/requirements.txt)<br>[test/server_cli_apikey.py](../../../../sources/lemonade-sdk__lemonade/test/server_cli_apikey.py)<br>[test/server_cli2.py](../../../../sources/lemonade-sdk__lemonade/test/server_cli2.py)<br>[test/server_downloads.py](../../../../sources/lemonade-sdk__lemonade/test/server_downloads.py)<br>[test/server_endpoints.py](../../../../sources/lemonade-sdk__lemonade/test/server_endpoints.py) |
| CI workflows | 22 | [.github/workflows/auto-label.yml](../../../../sources/lemonade-sdk__lemonade/.github/workflows/auto-label.yml)<br>[.github/workflows/build-and-push-container.yml](../../../../sources/lemonade-sdk__lemonade/.github/workflows/build-and-push-container.yml)<br>[.github/workflows/build-container.yml](../../../../sources/lemonade-sdk__lemonade/.github/workflows/build-container.yml)<br>[.github/workflows/claude-review.yml](../../../../sources/lemonade-sdk__lemonade/.github/workflows/claude-review.yml)<br>[.github/workflows/cpp_server_build_test_release.yml](../../../../sources/lemonade-sdk__lemonade/.github/workflows/cpp_server_build_test_release.yml)<br>[.github/workflows/docker-build-smoke-test.yml](../../../../sources/lemonade-sdk__lemonade/.github/workflows/docker-build-smoke-test.yml) |
| Containers / deploy | 3 | [Dockerfile](../../../../sources/lemonade-sdk__lemonade/Dockerfile)<br>[.ubuntu/Dockerfile](../../../../sources/lemonade-sdk__lemonade/.ubuntu/Dockerfile)<br>[.devcontainer/Dockerfile](../../../../sources/lemonade-sdk__lemonade/.devcontainer/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/lemonade-sdk__lemonade/AGENTS.md)<br>[CLAUDE.md](../../../../sources/lemonade-sdk__lemonade/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `tools/moonshine-server/main.py`, `src/cpp/server/server.cpp`, `src/cpp/include/lemon/server.h`.
2. Trace execution through entrypoints: `tools/moonshine-server/main.py`, `src/cpp/server/server.cpp`, `src/cpp/include/lemon/server.h`.
3. Map agent/tool runtime through: `AGENTS.md`, `tools/model_sizes.py`, `tools/moonshine-server/main.py`.
4. Inspect retrieval/memory/indexing through: `src/cpp/resources/static/index.html`, `src/app/styles/index.css`, `src/app/src/renderer/index.html`.
5. Verify behavior through test/eval files: `test/__init__.py`, `test/requirements.txt`, `test/server_cli_apikey.py`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 Lemonade helps users discover and run local AI apps by serving optimized LLMs right from their own GPUs and NPUs. Join o. 핵심 구조 신호는 C++, Dockerfile, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
