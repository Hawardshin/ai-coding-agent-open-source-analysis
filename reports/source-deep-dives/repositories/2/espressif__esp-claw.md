# espressif/esp-claw Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

ESP-Claw, a "Chat Coding" AI agent framework for IoT devices

## 요약

- 조사 단위: `sources/espressif__esp-claw` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,152 files, 426 directories, depth score 118, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=docs/src/content/docs/zh-cn/reference-cap/cap-mcp.mdx, docs/src/content/docs/en/reference-cap/cap-mcp.mdx, docs/src/assets/features/mcp-en.webm이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | espressif/esp-claw |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | C |
| Stars | 1546 |
| Forks | 333 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/espressif__esp-claw](../../../../sources/espressif__esp-claw) |
| Existing report | [reports/global-trending/repositories/espressif__esp-claw.md](../../../global-trending/repositories/espressif__esp-claw.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1152 / 426 |
| Max observed depth | 9 |
| Top directories | .agents, .github, .gitlab, application, components, docs |
| Top extensions | .c: 249, .h: 149, .yaml: 102, .txt: 97, .lua: 92, .md: 86, .mdx: 84, .yml: 44, .board: 32, .tsx: 32, (none): 28, .ts: 20 |
| Source patterns | monorepo/workspace, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 79 |
| .github | ci surface | 1 |
| application | top-level component | 1 |
| components | top-level component | 1 |


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
| mcp | [docs/src/content/docs/zh-cn/reference-cap/cap-mcp.mdx](../../../../sources/espressif__esp-claw/docs/src/content/docs/zh-cn/reference-cap/cap-mcp.mdx) | mcp signal |
| mcp | [docs/src/content/docs/en/reference-cap/cap-mcp.mdx](../../../../sources/espressif__esp-claw/docs/src/content/docs/en/reference-cap/cap-mcp.mdx) | mcp signal |
| mcp | [docs/src/assets/features/mcp-en.webm](../../../../sources/espressif__esp-claw/docs/src/assets/features/mcp-en.webm) | mcp signal |
| mcp | [docs/src/assets/features/mcp.webm](../../../../sources/espressif__esp-claw/docs/src/assets/features/mcp.webm) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/espressif__esp-claw/AGENTS.md) | agentRuntime signal |
| agentRuntime | [docs/tools/check-doc-line-alignment.ts](../../../../sources/espressif__esp-claw/docs/tools/check-doc-line-alignment.ts) | agentRuntime signal |
| agentRuntime | [docs/tools/generate-firmware-json.ts](../../../../sources/espressif__esp-claw/docs/tools/generate-firmware-json.ts) | agentRuntime signal |
| agentRuntime | [docs/static/memory_cn.png](../../../../sources/espressif__esp-claw/docs/static/memory_cn.png) | agentRuntime signal |
| entrypoints | [application/edge_agent/components/http_server/frontend_source/src/App.tsx](../../../../sources/espressif__esp-claw/application/edge_agent/components/http_server/frontend_source/src/App.tsx) | entrypoints signal |
| entrypoints | [application/edge_agent/components/http_server/frontend_source/src/index.css](../../../../sources/espressif__esp-claw/application/edge_agent/components/http_server/frontend_source/src/index.css) | entrypoints signal |
| entrypoints | [application/edge_agent/components/http_server/frontend_source/src/index.tsx](../../../../sources/espressif__esp-claw/application/edge_agent/components/http_server/frontend_source/src/index.tsx) | entrypoints signal |
| config | [docs/package.json](../../../../sources/espressif__esp-claw/docs/package.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [application/edge_agent/components/http_server/frontend_source/src/App.tsx](../../../../sources/espressif__esp-claw/application/edge_agent/components/http_server/frontend_source/src/App.tsx)<br>[application/edge_agent/components/http_server/frontend_source/src/index.css](../../../../sources/espressif__esp-claw/application/edge_agent/components/http_server/frontend_source/src/index.css)<br>[application/edge_agent/components/http_server/frontend_source/src/index.tsx](../../../../sources/espressif__esp-claw/application/edge_agent/components/http_server/frontend_source/src/index.tsx) |
| agentRuntime | 73 | [AGENTS.md](../../../../sources/espressif__esp-claw/AGENTS.md)<br>[docs/tools/check-doc-line-alignment.ts](../../../../sources/espressif__esp-claw/docs/tools/check-doc-line-alignment.ts)<br>[docs/tools/generate-firmware-json.ts](../../../../sources/espressif__esp-claw/docs/tools/generate-firmware-json.ts)<br>[docs/static/memory_cn.png](../../../../sources/espressif__esp-claw/docs/static/memory_cn.png)<br>[docs/static/memory.png](../../../../sources/espressif__esp-claw/docs/static/memory.png)<br>[docs/src/content/docs/zh-cn/tutorial/skills-lab.mdx](../../../../sources/espressif__esp-claw/docs/src/content/docs/zh-cn/tutorial/skills-lab.mdx)<br>[docs/src/content/docs/zh-cn/reference-project/memory.mdx](../../../../sources/espressif__esp-claw/docs/src/content/docs/zh-cn/reference-project/memory.mdx)<br>[docs/src/content/docs/zh-cn/reference-project/skills-and-capability.mdx](../../../../sources/espressif__esp-claw/docs/src/content/docs/zh-cn/reference-project/skills-and-capability.mdx) |
| mcp | 45 | [docs/src/content/docs/zh-cn/reference-cap/cap-mcp.mdx](../../../../sources/espressif__esp-claw/docs/src/content/docs/zh-cn/reference-cap/cap-mcp.mdx)<br>[docs/src/content/docs/en/reference-cap/cap-mcp.mdx](../../../../sources/espressif__esp-claw/docs/src/content/docs/en/reference-cap/cap-mcp.mdx)<br>[docs/src/assets/features/mcp-en.webm](../../../../sources/espressif__esp-claw/docs/src/assets/features/mcp-en.webm)<br>[docs/src/assets/features/mcp.webm](../../../../sources/espressif__esp-claw/docs/src/assets/features/mcp.webm)<br>[components/common/mcp_mdns/CMakeLists.txt](../../../../sources/espressif__esp-claw/components/common/mcp_mdns/CMakeLists.txt)<br>[components/common/mcp_mdns/idf_component.yml](../../../../sources/espressif__esp-claw/components/common/mcp_mdns/idf_component.yml)<br>[components/common/mcp_mdns/src/mcp_local.c](../../../../sources/espressif__esp-claw/components/common/mcp_mdns/src/mcp_local.c)<br>[components/common/mcp_mdns/src/mcp_mdns.c](../../../../sources/espressif__esp-claw/components/common/mcp_mdns/src/mcp_mdns.c) |
| retrieval | 39 | [docs/static/memory_cn.png](../../../../sources/espressif__esp-claw/docs/static/memory_cn.png)<br>[docs/static/memory.png](../../../../sources/espressif__esp-claw/docs/static/memory.png)<br>[docs/src/pages/index.astro](../../../../sources/espressif__esp-claw/docs/src/pages/index.astro)<br>`docs/src/pages/[lang]/index.astro`<br>[docs/src/content/docs/zh-cn/tutorial/index.mdx](../../../../sources/espressif__esp-claw/docs/src/content/docs/zh-cn/tutorial/index.mdx)<br>[docs/src/content/docs/zh-cn/reference-project/index.mdx](../../../../sources/espressif__esp-claw/docs/src/content/docs/zh-cn/reference-project/index.mdx)<br>[docs/src/content/docs/zh-cn/reference-project/memory.mdx](../../../../sources/espressif__esp-claw/docs/src/content/docs/zh-cn/reference-project/memory.mdx)<br>[docs/src/content/docs/zh-cn/reference-core/claw-memory.mdx](../../../../sources/espressif__esp-claw/docs/src/content/docs/zh-cn/reference-core/claw-memory.mdx) |
| spec | 4 | [docs/src/assets/images/architecture-diagram-dark.webp](../../../../sources/espressif__esp-claw/docs/src/assets/images/architecture-diagram-dark.webp)<br>[.agents/design.md](../../../../sources/espressif__esp-claw/.agents/design.md)<br>[.agents/spec/claw-skill-spec.md](../../../../sources/espressif__esp-claw/.agents/spec/claw-skill-spec.md)<br>[.agents/spec/lua-module-spec.md](../../../../sources/espressif__esp-claw/.agents/spec/lua-module-spec.md) |
| eval | 121 | [components/lua_modules/lua_module_vision/test/camera_display_motion.lua](../../../../sources/espressif__esp-claw/components/lua_modules/lua_module_vision/test/camera_display_motion.lua)<br>[components/lua_modules/lua_module_vision/test/espdet_camera.lua](../../../../sources/espressif__esp-claw/components/lua_modules/lua_module_vision/test/espdet_camera.lua)<br>[components/lua_modules/lua_module_vision/test/espdet_image.lua](../../../../sources/espressif__esp-claw/components/lua_modules/lua_module_vision/test/espdet_image.lua)<br>[components/lua_modules/lua_module_vision/test/motion_detect.lua](../../../../sources/espressif__esp-claw/components/lua_modules/lua_module_vision/test/motion_detect.lua)<br>[components/lua_modules/lua_module_thread/test_apps/thread_smoke_test/CMakeLists.txt](../../../../sources/espressif__esp-claw/components/lua_modules/lua_module_thread/test_apps/thread_smoke_test/CMakeLists.txt)<br>[components/lua_modules/lua_module_thread/test_apps/thread_smoke_test/partitions.csv](../../../../sources/espressif__esp-claw/components/lua_modules/lua_module_thread/test_apps/thread_smoke_test/partitions.csv)<br>[components/lua_modules/lua_module_thread/test_apps/thread_smoke_test/pytest_thread.py](../../../../sources/espressif__esp-claw/components/lua_modules/lua_module_thread/test_apps/thread_smoke_test/pytest_thread.py)<br>[components/lua_modules/lua_module_thread/test_apps/thread_smoke_test/sdkconfig.ci.release](../../../../sources/espressif__esp-claw/components/lua_modules/lua_module_thread/test_apps/thread_smoke_test/sdkconfig.ci.release) |
| security | 0 | not obvious |
| ci | 11 | [.gitlab-ci.yml](../../../../sources/espressif__esp-claw/.gitlab-ci.yml)<br>[.gitlab/ci/astyle-rules.yml](../../../../sources/espressif__esp-claw/.gitlab/ci/astyle-rules.yml)<br>[.gitlab/ci/build_apps.py](../../../../sources/espressif__esp-claw/.gitlab/ci/build_apps.py)<br>[.gitlab/ci/build-doc.yml](../../../../sources/espressif__esp-claw/.gitlab/ci/build-doc.yml)<br>[.gitlab/ci/build.yml](../../../../sources/espressif__esp-claw/.gitlab/ci/build.yml)<br>[.gitlab/ci/check_copyright_config.yaml](../../../../sources/espressif__esp-claw/.gitlab/ci/check_copyright_config.yaml)<br>[.gitlab/ci/deploy.yml](../../../../sources/espressif__esp-claw/.gitlab/ci/deploy.yml)<br>[.gitlab/ci/merge_bin.py](../../../../sources/espressif__esp-claw/.gitlab/ci/merge_bin.py) |
| container | 0 | not obvious |
| instruction | 1 | [AGENTS.md](../../../../sources/espressif__esp-claw/AGENTS.md) |
| docs | 218 | [README_CN.md](../../../../sources/espressif__esp-claw/README_CN.md)<br>[README.md](../../../../sources/espressif__esp-claw/README.md)<br>[docs/.gitignore](../../../../sources/espressif__esp-claw/docs/.gitignore)<br>[docs/astro.config.mjs](../../../../sources/espressif__esp-claw/docs/astro.config.mjs)<br>[docs/LICENSE](../../../../sources/espressif__esp-claw/docs/LICENSE)<br>[docs/package.json](../../../../sources/espressif__esp-claw/docs/package.json)<br>[docs/pnpm-lock.yaml](../../../../sources/espressif__esp-claw/docs/pnpm-lock.yaml)<br>[docs/pnpm-workspace.yaml](../../../../sources/espressif__esp-claw/docs/pnpm-workspace.yaml) |
| config | 6 | [docs/package.json](../../../../sources/espressif__esp-claw/docs/package.json)<br>[docs/pnpm-workspace.yaml](../../../../sources/espressif__esp-claw/docs/pnpm-workspace.yaml)<br>[docs/tsconfig.json](../../../../sources/espressif__esp-claw/docs/tsconfig.json)<br>[application/edge_agent/components/http_server/frontend_source/package.json](../../../../sources/espressif__esp-claw/application/edge_agent/components/http_server/frontend_source/package.json)<br>[application/edge_agent/components/http_server/frontend_source/pnpm-workspace.yaml](../../../../sources/espressif__esp-claw/application/edge_agent/components/http_server/frontend_source/pnpm-workspace.yaml)<br>[application/edge_agent/components/http_server/frontend_source/tsconfig.json](../../../../sources/espressif__esp-claw/application/edge_agent/components/http_server/frontend_source/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 121 | [components/lua_modules/lua_module_vision/test/camera_display_motion.lua](../../../../sources/espressif__esp-claw/components/lua_modules/lua_module_vision/test/camera_display_motion.lua)<br>[components/lua_modules/lua_module_vision/test/espdet_camera.lua](../../../../sources/espressif__esp-claw/components/lua_modules/lua_module_vision/test/espdet_camera.lua)<br>[components/lua_modules/lua_module_vision/test/espdet_image.lua](../../../../sources/espressif__esp-claw/components/lua_modules/lua_module_vision/test/espdet_image.lua)<br>[components/lua_modules/lua_module_vision/test/motion_detect.lua](../../../../sources/espressif__esp-claw/components/lua_modules/lua_module_vision/test/motion_detect.lua)<br>[components/lua_modules/lua_module_thread/test_apps/thread_smoke_test/CMakeLists.txt](../../../../sources/espressif__esp-claw/components/lua_modules/lua_module_thread/test_apps/thread_smoke_test/CMakeLists.txt)<br>[components/lua_modules/lua_module_thread/test_apps/thread_smoke_test/partitions.csv](../../../../sources/espressif__esp-claw/components/lua_modules/lua_module_thread/test_apps/thread_smoke_test/partitions.csv) |
| CI workflows | 11 | [.gitlab-ci.yml](../../../../sources/espressif__esp-claw/.gitlab-ci.yml)<br>[.gitlab/ci/astyle-rules.yml](../../../../sources/espressif__esp-claw/.gitlab/ci/astyle-rules.yml)<br>[.gitlab/ci/build_apps.py](../../../../sources/espressif__esp-claw/.gitlab/ci/build_apps.py)<br>[.gitlab/ci/build-doc.yml](../../../../sources/espressif__esp-claw/.gitlab/ci/build-doc.yml)<br>[.gitlab/ci/build.yml](../../../../sources/espressif__esp-claw/.gitlab/ci/build.yml)<br>[.gitlab/ci/check_copyright_config.yaml](../../../../sources/espressif__esp-claw/.gitlab/ci/check_copyright_config.yaml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/espressif__esp-claw/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `docs/src/content/docs/zh-cn/reference-cap/cap-mcp.mdx`, `docs/src/content/docs/en/reference-cap/cap-mcp.mdx`, `docs/src/assets/features/mcp-en.webm`.
2. Trace execution through entrypoints: `application/edge_agent/components/http_server/frontend_source/src/App.tsx`, `application/edge_agent/components/http_server/frontend_source/src/index.css`, `application/edge_agent/components/http_server/frontend_source/src/index.tsx`.
3. Map agent/tool runtime through: `AGENTS.md`, `docs/tools/check-doc-line-alignment.ts`, `docs/tools/generate-firmware-json.ts`.
4. Inspect retrieval/memory/indexing through: `docs/static/memory_cn.png`, `docs/static/memory.png`, `docs/src/pages/index.astro`.
5. Verify behavior through test/eval files: `components/lua_modules/lua_module_vision/test/camera_display_motion.lua`, `components/lua_modules/lua_module_vision/test/espdet_camera.lua`, `components/lua_modules/lua_module_vision/test/espdet_image.lua`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 ESP Claw, a "Chat Coding" AI agent framework for IoT devices. 핵심 구조 신호는 C, README.md, AGENTS.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
