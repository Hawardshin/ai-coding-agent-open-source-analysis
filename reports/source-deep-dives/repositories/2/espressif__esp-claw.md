# espressif/esp-claw 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

ESP-Claw, a "Chat Coding" AI agent framework for IoT devices

## 요약

- 조사 단위: `sources/espressif__esp-claw` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,152 files, 426 directories, depth score 112, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=docs/src/content/docs/zh-cn/reference-cap/cap-mcp.mdx, docs/src/content/docs/en/reference-cap/cap-mcp.mdx, docs/src/assets/features/mcp-en.webm이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | espressif/esp-claw |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | C |
| Stars | 1546 |
| Forks | 333 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/espressif__esp-claw](../../../../sources/espressif__esp-claw) |
| 기존 보고서 | [reports/global-trending/repositories/espressif__esp-claw.md](../../../global-trending/repositories/espressif__esp-claw.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1152 / 426 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .agents, .github, .gitlab, application, components, docs |
| 상위 확장자 | .c: 249, .h: 149, .yaml: 102, .txt: 97, .lua: 92, .md: 86, .mdx: 84, .yml: 44, .board: 32, .tsx: 32, (none): 28, .ts: 20 |
| 소스 패턴 | monorepo/workspace, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 79 |
| .github | ci surface | 1 |
| application | top-level component | 1 |
| components | top-level component | 1 |


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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [application/edge_agent/components/http_server/frontend_source/src/App.tsx](../../../../sources/espressif__esp-claw/application/edge_agent/components/http_server/frontend_source/src/App.tsx)<br>[application/edge_agent/components/http_server/frontend_source/src/index.css](../../../../sources/espressif__esp-claw/application/edge_agent/components/http_server/frontend_source/src/index.css)<br>[application/edge_agent/components/http_server/frontend_source/src/index.tsx](../../../../sources/espressif__esp-claw/application/edge_agent/components/http_server/frontend_source/src/index.tsx) |
| agentRuntime | 73 | [AGENTS.md](../../../../sources/espressif__esp-claw/AGENTS.md)<br>[docs/tools/check-doc-line-alignment.ts](../../../../sources/espressif__esp-claw/docs/tools/check-doc-line-alignment.ts)<br>[docs/tools/generate-firmware-json.ts](../../../../sources/espressif__esp-claw/docs/tools/generate-firmware-json.ts)<br>[docs/static/memory_cn.png](../../../../sources/espressif__esp-claw/docs/static/memory_cn.png)<br>[docs/static/memory.png](../../../../sources/espressif__esp-claw/docs/static/memory.png)<br>[docs/src/content/docs/zh-cn/tutorial/skills-lab.mdx](../../../../sources/espressif__esp-claw/docs/src/content/docs/zh-cn/tutorial/skills-lab.mdx)<br>[docs/src/content/docs/zh-cn/reference-project/memory.mdx](../../../../sources/espressif__esp-claw/docs/src/content/docs/zh-cn/reference-project/memory.mdx)<br>[docs/src/content/docs/zh-cn/reference-project/skills-and-capability.mdx](../../../../sources/espressif__esp-claw/docs/src/content/docs/zh-cn/reference-project/skills-and-capability.mdx) |
| mcp | 45 | [docs/src/content/docs/zh-cn/reference-cap/cap-mcp.mdx](../../../../sources/espressif__esp-claw/docs/src/content/docs/zh-cn/reference-cap/cap-mcp.mdx)<br>[docs/src/content/docs/en/reference-cap/cap-mcp.mdx](../../../../sources/espressif__esp-claw/docs/src/content/docs/en/reference-cap/cap-mcp.mdx)<br>[docs/src/assets/features/mcp-en.webm](../../../../sources/espressif__esp-claw/docs/src/assets/features/mcp-en.webm)<br>[docs/src/assets/features/mcp.webm](../../../../sources/espressif__esp-claw/docs/src/assets/features/mcp.webm)<br>[components/common/mcp_mdns/CMakeLists.txt](../../../../sources/espressif__esp-claw/components/common/mcp_mdns/CMakeLists.txt)<br>[components/common/mcp_mdns/idf_component.yml](../../../../sources/espressif__esp-claw/components/common/mcp_mdns/idf_component.yml)<br>[components/common/mcp_mdns/src/mcp_local.c](../../../../sources/espressif__esp-claw/components/common/mcp_mdns/src/mcp_local.c)<br>[components/common/mcp_mdns/src/mcp_mdns.c](../../../../sources/espressif__esp-claw/components/common/mcp_mdns/src/mcp_mdns.c) |
| retrieval | 39 | [docs/static/memory_cn.png](../../../../sources/espressif__esp-claw/docs/static/memory_cn.png)<br>[docs/static/memory.png](../../../../sources/espressif__esp-claw/docs/static/memory.png)<br>[docs/src/pages/index.astro](../../../../sources/espressif__esp-claw/docs/src/pages/index.astro)<br>`docs/src/pages/[lang]/index.astro`<br>[docs/src/content/docs/zh-cn/tutorial/index.mdx](../../../../sources/espressif__esp-claw/docs/src/content/docs/zh-cn/tutorial/index.mdx)<br>[docs/src/content/docs/zh-cn/reference-project/index.mdx](../../../../sources/espressif__esp-claw/docs/src/content/docs/zh-cn/reference-project/index.mdx)<br>[docs/src/content/docs/zh-cn/reference-project/memory.mdx](../../../../sources/espressif__esp-claw/docs/src/content/docs/zh-cn/reference-project/memory.mdx)<br>[docs/src/content/docs/zh-cn/reference-core/claw-memory.mdx](../../../../sources/espressif__esp-claw/docs/src/content/docs/zh-cn/reference-core/claw-memory.mdx) |
| spec | 4 | [docs/src/assets/images/architecture-diagram-dark.webp](../../../../sources/espressif__esp-claw/docs/src/assets/images/architecture-diagram-dark.webp)<br>[.agents/design.md](../../../../sources/espressif__esp-claw/.agents/design.md)<br>[.agents/spec/claw-skill-spec.md](../../../../sources/espressif__esp-claw/.agents/spec/claw-skill-spec.md)<br>[.agents/spec/lua-module-spec.md](../../../../sources/espressif__esp-claw/.agents/spec/lua-module-spec.md) |
| eval | 121 | [components/lua_modules/lua_module_vision/test/camera_display_motion.lua](../../../../sources/espressif__esp-claw/components/lua_modules/lua_module_vision/test/camera_display_motion.lua)<br>[components/lua_modules/lua_module_vision/test/espdet_camera.lua](../../../../sources/espressif__esp-claw/components/lua_modules/lua_module_vision/test/espdet_camera.lua)<br>[components/lua_modules/lua_module_vision/test/espdet_image.lua](../../../../sources/espressif__esp-claw/components/lua_modules/lua_module_vision/test/espdet_image.lua)<br>[components/lua_modules/lua_module_vision/test/motion_detect.lua](../../../../sources/espressif__esp-claw/components/lua_modules/lua_module_vision/test/motion_detect.lua)<br>[components/lua_modules/lua_module_thread/test_apps/thread_smoke_test/CMakeLists.txt](../../../../sources/espressif__esp-claw/components/lua_modules/lua_module_thread/test_apps/thread_smoke_test/CMakeLists.txt)<br>[components/lua_modules/lua_module_thread/test_apps/thread_smoke_test/partitions.csv](../../../../sources/espressif__esp-claw/components/lua_modules/lua_module_thread/test_apps/thread_smoke_test/partitions.csv)<br>[components/lua_modules/lua_module_thread/test_apps/thread_smoke_test/pytest_thread.py](../../../../sources/espressif__esp-claw/components/lua_modules/lua_module_thread/test_apps/thread_smoke_test/pytest_thread.py)<br>[components/lua_modules/lua_module_thread/test_apps/thread_smoke_test/sdkconfig.ci.release](../../../../sources/espressif__esp-claw/components/lua_modules/lua_module_thread/test_apps/thread_smoke_test/sdkconfig.ci.release) |
| security | 0 | 명확하지 않음 |
| ci | 11 | [.gitlab-ci.yml](../../../../sources/espressif__esp-claw/.gitlab-ci.yml)<br>[.gitlab/ci/astyle-rules.yml](../../../../sources/espressif__esp-claw/.gitlab/ci/astyle-rules.yml)<br>[.gitlab/ci/build_apps.py](../../../../sources/espressif__esp-claw/.gitlab/ci/build_apps.py)<br>[.gitlab/ci/build-doc.yml](../../../../sources/espressif__esp-claw/.gitlab/ci/build-doc.yml)<br>[.gitlab/ci/build.yml](../../../../sources/espressif__esp-claw/.gitlab/ci/build.yml)<br>[.gitlab/ci/check_copyright_config.yaml](../../../../sources/espressif__esp-claw/.gitlab/ci/check_copyright_config.yaml)<br>[.gitlab/ci/deploy.yml](../../../../sources/espressif__esp-claw/.gitlab/ci/deploy.yml)<br>[.gitlab/ci/merge_bin.py](../../../../sources/espressif__esp-claw/.gitlab/ci/merge_bin.py) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [AGENTS.md](../../../../sources/espressif__esp-claw/AGENTS.md) |
| docs | 218 | [README_CN.md](../../../../sources/espressif__esp-claw/README_CN.md)<br>[README.md](../../../../sources/espressif__esp-claw/README.md)<br>[docs/.gitignore](../../../../sources/espressif__esp-claw/docs/.gitignore)<br>[docs/astro.config.mjs](../../../../sources/espressif__esp-claw/docs/astro.config.mjs)<br>[docs/LICENSE](../../../../sources/espressif__esp-claw/docs/LICENSE)<br>[docs/package.json](../../../../sources/espressif__esp-claw/docs/package.json)<br>[docs/pnpm-lock.yaml](../../../../sources/espressif__esp-claw/docs/pnpm-lock.yaml)<br>[docs/pnpm-workspace.yaml](../../../../sources/espressif__esp-claw/docs/pnpm-workspace.yaml) |
| config | 6 | [docs/package.json](../../../../sources/espressif__esp-claw/docs/package.json)<br>[docs/pnpm-workspace.yaml](../../../../sources/espressif__esp-claw/docs/pnpm-workspace.yaml)<br>[docs/tsconfig.json](../../../../sources/espressif__esp-claw/docs/tsconfig.json)<br>[application/edge_agent/components/http_server/frontend_source/package.json](../../../../sources/espressif__esp-claw/application/edge_agent/components/http_server/frontend_source/package.json)<br>[application/edge_agent/components/http_server/frontend_source/pnpm-workspace.yaml](../../../../sources/espressif__esp-claw/application/edge_agent/components/http_server/frontend_source/pnpm-workspace.yaml)<br>[application/edge_agent/components/http_server/frontend_source/tsconfig.json](../../../../sources/espressif__esp-claw/application/edge_agent/components/http_server/frontend_source/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 121 | [components/lua_modules/lua_module_vision/test/camera_display_motion.lua](../../../../sources/espressif__esp-claw/components/lua_modules/lua_module_vision/test/camera_display_motion.lua)<br>[components/lua_modules/lua_module_vision/test/espdet_camera.lua](../../../../sources/espressif__esp-claw/components/lua_modules/lua_module_vision/test/espdet_camera.lua)<br>[components/lua_modules/lua_module_vision/test/espdet_image.lua](../../../../sources/espressif__esp-claw/components/lua_modules/lua_module_vision/test/espdet_image.lua)<br>[components/lua_modules/lua_module_vision/test/motion_detect.lua](../../../../sources/espressif__esp-claw/components/lua_modules/lua_module_vision/test/motion_detect.lua)<br>[components/lua_modules/lua_module_thread/test_apps/thread_smoke_test/CMakeLists.txt](../../../../sources/espressif__esp-claw/components/lua_modules/lua_module_thread/test_apps/thread_smoke_test/CMakeLists.txt)<br>[components/lua_modules/lua_module_thread/test_apps/thread_smoke_test/partitions.csv](../../../../sources/espressif__esp-claw/components/lua_modules/lua_module_thread/test_apps/thread_smoke_test/partitions.csv) |
| CI workflow | 11 | [.gitlab-ci.yml](../../../../sources/espressif__esp-claw/.gitlab-ci.yml)<br>[.gitlab/ci/astyle-rules.yml](../../../../sources/espressif__esp-claw/.gitlab/ci/astyle-rules.yml)<br>[.gitlab/ci/build_apps.py](../../../../sources/espressif__esp-claw/.gitlab/ci/build_apps.py)<br>[.gitlab/ci/build-doc.yml](../../../../sources/espressif__esp-claw/.gitlab/ci/build-doc.yml)<br>[.gitlab/ci/build.yml](../../../../sources/espressif__esp-claw/.gitlab/ci/build.yml)<br>[.gitlab/ci/check_copyright_config.yaml](../../../../sources/espressif__esp-claw/.gitlab/ci/check_copyright_config.yaml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/espressif__esp-claw/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `docs/src/content/docs/zh-cn/reference-cap/cap-mcp.mdx`, `docs/src/content/docs/en/reference-cap/cap-mcp.mdx`, `docs/src/assets/features/mcp-en.webm`.
2. entrypoint를 따라 실행 흐름 확인: `application/edge_agent/components/http_server/frontend_source/src/App.tsx`, `application/edge_agent/components/http_server/frontend_source/src/index.css`, `application/edge_agent/components/http_server/frontend_source/src/index.tsx`.
3. agent/tool runtime 매핑: `AGENTS.md`, `docs/tools/check-doc-line-alignment.ts`, `docs/tools/generate-firmware-json.ts`.
4. retrieval/memory/indexing 확인: `docs/static/memory_cn.png`, `docs/static/memory.png`, `docs/src/pages/index.astro`.
5. test/eval 파일로 동작 검증: `components/lua_modules/lua_module_vision/test/camera_display_motion.lua`, `components/lua_modules/lua_module_vision/test/espdet_camera.lua`, `components/lua_modules/lua_module_vision/test/espdet_image.lua`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 ESP Claw, a "Chat Coding" AI agent framework for IoT devices. 핵심 구조 신호는 C, README.md, AGENTS.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
