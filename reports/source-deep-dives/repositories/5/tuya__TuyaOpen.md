# tuya/TuyaOpen Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Next-gen AI+IoT framework for T2/T3/T5AI/ESP32/and more – Fast IoT and AI Agent hardware integration

## 요약

- 조사 단위: `sources/tuya__TuyaOpen` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 10,523 files, 1,553 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=src/ai_components/ai_mcp/CMakeLists.txt, src/ai_components/ai_mcp/Kconfig, src/ai_components/ai_mcp/src/ai_mcp_server.c이고, 의존성 단서는 click, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | tuya/TuyaOpen |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | C |
| Stars | 1589 |
| Forks | 270 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/tuya__TuyaOpen](../../../../sources/tuya__TuyaOpen) |
| Existing report | [reports/global-trending/repositories/tuya__TuyaOpen.md](../../../global-trending/repositories/tuya__TuyaOpen.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 10523 / 1553 |
| Max observed depth | 11 |
| Top directories | .github, apps, boards, docs, examples, platform, src, tests, tools |
| Top extensions | .c: 3272, .h: 2244, .png: 1267, .bdf: 404, .py: 309, .md: 302, .txt: 293, .rst: 264, (none): 252, .ttf: 225, .config: 224, .cc: 207 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 208 |
| tests | validation surface | 10 |
| apps/games | apps workspace | 2 |
| apps/mimiclaw | apps workspace | 2 |
| apps/tuya.ai | apps workspace | 2 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| apps/tuya_t5_pixel | apps workspace | 1 |
| apps/tuya_t5_pocket | apps workspace | 1 |
| boards | top-level component | 1 |
| docs | documentation surface | 1 |
| examples | top-level component | 1 |
| platform | top-level component | 1 |
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
| mcp | [src/ai_components/ai_mcp/CMakeLists.txt](../../../../sources/tuya__TuyaOpen/src/ai_components/ai_mcp/CMakeLists.txt) | mcp signal |
| mcp | [src/ai_components/ai_mcp/Kconfig](../../../../sources/tuya__TuyaOpen/src/ai_components/ai_mcp/Kconfig) | mcp signal |
| mcp | [src/ai_components/ai_mcp/src/ai_mcp_server.c](../../../../sources/tuya__TuyaOpen/src/ai_components/ai_mcp/src/ai_mcp_server.c) | mcp signal |
| mcp | [src/ai_components/ai_mcp/src/ai_mcp_tools.c](../../../../sources/tuya__TuyaOpen/src/ai_components/ai_mcp/src/ai_mcp_tools.c) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/tuya__TuyaOpen/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tools/__init__.py](../../../../sources/tuya__TuyaOpen/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [tools/build_example.sh](../../../../sources/tuya__TuyaOpen/tools/build_example.sh) | agentRuntime signal |
| agentRuntime | [tools/check_format.py](../../../../sources/tuya__TuyaOpen/tools/check_format.py) | agentRuntime signal |
| entrypoints | [src/micropython/mpy/tools/mpremote/mpremote/__main__.py](../../../../sources/tuya__TuyaOpen/src/micropython/mpy/tools/mpremote/mpremote/__main__.py) | entrypoints signal |
| entrypoints | [src/micropython/mpy/tools/mpremote/mpremote/main.py](../../../../sources/tuya__TuyaOpen/src/micropython/mpy/tools/mpremote/mpremote/main.py) | entrypoints signal |
| entrypoints | [src/liblvgl/v9/lvgl/tests/main.py](../../../../sources/tuya__TuyaOpen/src/liblvgl/v9/lvgl/tests/main.py) | entrypoints signal |
| entrypoints | [src/liblvgl/v8/lvgl/tests/main.py](../../../../sources/tuya__TuyaOpen/src/liblvgl/v8/lvgl/tests/main.py) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 6 | [src/micropython/mpy/tools/mpremote/mpremote/__main__.py](../../../../sources/tuya__TuyaOpen/src/micropython/mpy/tools/mpremote/mpremote/__main__.py)<br>[src/micropython/mpy/tools/mpremote/mpremote/main.py](../../../../sources/tuya__TuyaOpen/src/micropython/mpy/tools/mpremote/mpremote/main.py)<br>[src/liblvgl/v9/lvgl/tests/main.py](../../../../sources/tuya__TuyaOpen/src/liblvgl/v9/lvgl/tests/main.py)<br>[src/liblvgl/v8/lvgl/tests/main.py](../../../../sources/tuya__TuyaOpen/src/liblvgl/v8/lvgl/tests/main.py)<br>[apps/games/lvgl_games/bin/其他游戏_QIO_1.0.0.bin](../../../../sources/tuya__TuyaOpen/apps/games/lvgl_games/bin/其他游戏_QIO_1.0.0.bin)<br>[apps/games/lvgl_games/bin/植物大战僵尸_QIO_1.0.0.bin](../../../../sources/tuya__TuyaOpen/apps/games/lvgl_games/bin/植物大战僵尸_QIO_1.0.0.bin) |
| agentRuntime | 1717 | [AGENTS.md](../../../../sources/tuya__TuyaOpen/AGENTS.md)<br>[tools/__init__.py](../../../../sources/tuya__TuyaOpen/tools/__init__.py)<br>[tools/build_example.sh](../../../../sources/tuya__TuyaOpen/tools/build_example.sh)<br>[tools/check_format.py](../../../../sources/tuya__TuyaOpen/tools/check_format.py)<br>[tools/convert_types.py](../../../../sources/tuya__TuyaOpen/tools/convert_types.py)<br>[tools/get_conutry.py](../../../../sources/tuya__TuyaOpen/tools/get_conutry.py)<br>[tools/git-mirror.sh](../../../../sources/tuya__TuyaOpen/tools/git-mirror.sh)<br>[tools/gitee_sync.sh](../../../../sources/tuya__TuyaOpen/tools/gitee_sync.sh) |
| mcp | 10 | [src/ai_components/ai_mcp/CMakeLists.txt](../../../../sources/tuya__TuyaOpen/src/ai_components/ai_mcp/CMakeLists.txt)<br>[src/ai_components/ai_mcp/Kconfig](../../../../sources/tuya__TuyaOpen/src/ai_components/ai_mcp/Kconfig)<br>[src/ai_components/ai_mcp/src/ai_mcp_server.c](../../../../sources/tuya__TuyaOpen/src/ai_components/ai_mcp/src/ai_mcp_server.c)<br>[src/ai_components/ai_mcp/src/ai_mcp_tools.c](../../../../sources/tuya__TuyaOpen/src/ai_components/ai_mcp/src/ai_mcp_tools.c)<br>[src/ai_components/ai_mcp/include/ai_mcp_server.h](../../../../sources/tuya__TuyaOpen/src/ai_components/ai_mcp/include/ai_mcp_server.h)<br>[src/ai_components/ai_mcp/include/ai_mcp.h](../../../../sources/tuya__TuyaOpen/src/ai_components/ai_mcp/include/ai_mcp.h)<br>[apps/tuya.ai/your_otto_robot/src/otto/otto_mcp_tools.c](../../../../sources/tuya__TuyaOpen/apps/tuya.ai/your_otto_robot/src/otto/otto_mcp_tools.c)<br>[apps/tuya.ai/your_otto_robot/src/otto/otto_mcp_tools.h](../../../../sources/tuya__TuyaOpen/apps/tuya.ai/your_otto_robot/src/otto/otto_mcp_tools.h) |
| retrieval | 197 | [tools/porting/template/linux/tkl_memory.c](../../../../sources/tuya__TuyaOpen/tools/porting/template/linux/tkl_memory.c)<br>[tools/porting/adapter/system/tkl_memory.h](../../../../sources/tuya__TuyaOpen/tools/porting/adapter/system/tkl_memory.h)<br>[src/tal_system/include/tal_memory.h](../../../../sources/tuya__TuyaOpen/src/tal_system/include/tal_memory.h)<br>[src/libu8g2/u8g2/tools/font/streamline/icons/computers_devices_electronics/streamline-computers-devices-electronics-memory--computers-devices-electronics.png](../../../../sources/tuya__TuyaOpen/src/libu8g2/u8g2/tools/font/streamline/icons/computers_devices_electronics/streamline-computers-devices-electronics-memory--computers-devices-electronics.png)<br>[src/libu8g2/u8g2/csrc/u8g2_d_memory.c](../../../../sources/tuya__TuyaOpen/src/libu8g2/u8g2/csrc/u8g2_d_memory.c)<br>[src/libtls/mbedtls-3.1.0/tests/suites/test_suite_memory_buffer_alloc.data](../../../../sources/tuya__TuyaOpen/src/libtls/mbedtls-3.1.0/tests/suites/test_suite_memory_buffer_alloc.data)<br>[src/libtls/mbedtls-3.1.0/tests/suites/test_suite_memory_buffer_alloc.function](../../../../sources/tuya__TuyaOpen/src/libtls/mbedtls-3.1.0/tests/suites/test_suite_memory_buffer_alloc.function)<br>[src/libtls/mbedtls-3.1.0/scripts/memory.sh](../../../../sources/tuya__TuyaOpen/src/libtls/mbedtls-3.1.0/scripts/memory.sh) |
| spec | 50 | [tools/requirements.txt](../../../../sources/tuya__TuyaOpen/tools/requirements.txt)<br>[src/micropython/mpy/tools/mpremote/requirements.txt](../../../../sources/tuya__TuyaOpen/src/micropython/mpy/tools/mpremote/requirements.txt)<br>[src/libu8g2/u8g2/tools/font/streamline/icons/design/streamline-design-artboard-shapes--design.png](../../../../sources/tuya__TuyaOpen/src/libu8g2/u8g2/tools/font/streamline/icons/design/streamline-design-artboard-shapes--design.png)<br>[src/libu8g2/u8g2/tools/font/streamline/icons/design/streamline-design-color-brush-paint--design.png](../../../../sources/tuya__TuyaOpen/src/libu8g2/u8g2/tools/font/streamline/icons/design/streamline-design-color-brush-paint--design.png)<br>[src/libu8g2/u8g2/tools/font/streamline/icons/design/streamline-design-color-bucket--design.png](../../../../sources/tuya__TuyaOpen/src/libu8g2/u8g2/tools/font/streamline/icons/design/streamline-design-color-bucket--design.png)<br>[src/libu8g2/u8g2/tools/font/streamline/icons/design/streamline-design-color-bucket-brush--design.png](../../../../sources/tuya__TuyaOpen/src/libu8g2/u8g2/tools/font/streamline/icons/design/streamline-design-color-bucket-brush--design.png)<br>[src/libu8g2/u8g2/tools/font/streamline/icons/design/streamline-design-color-painting-palette--design.png](../../../../sources/tuya__TuyaOpen/src/libu8g2/u8g2/tools/font/streamline/icons/design/streamline-design-color-painting-palette--design.png)<br>[src/libu8g2/u8g2/tools/font/streamline/icons/design/streamline-design-color-palette-sample--design.png](../../../../sources/tuya__TuyaOpen/src/libu8g2/u8g2/tools/font/streamline/icons/design/streamline-design-color-palette-sample--design.png) |
| eval | 1566 | [tools/cli_command/cli_monitor.py](../../../../sources/tuya__TuyaOpen/tools/cli_command/cli_monitor.py)<br>[tools/cli_command/tests/__init__.py](../../../../sources/tuya__TuyaOpen/tools/cli_command/tests/__init__.py)<br>[tools/cli_command/tests/test_cli_flash.py](../../../../sources/tuya__TuyaOpen/tools/cli_command/tests/test_cli_flash.py)<br>[tools/cli_command/tests/test_util_tyutool.py](../../../../sources/tuya__TuyaOpen/tools/cli_command/tests/test_util_tyutool.py)<br>[tests/export/README.md](../../../../sources/tuya__TuyaOpen/tests/export/README.md)<br>[tests/export/run_all.sh](../../../../sources/tuya__TuyaOpen/tests/export/run_all.sh)<br>[tests/export/test_export.sh](../../../../sources/tuya__TuyaOpen/tests/export/test_export.sh)<br>[tests/export/test_progress.ps1](../../../../sources/tuya__TuyaOpen/tests/export/test_progress.ps1) |
| security | 32 | [tools/porting/adapter/security/tkl_asymmetrical.h](../../../../sources/tuya__TuyaOpen/tools/porting/adapter/security/tkl_asymmetrical.h)<br>[tools/porting/adapter/security/tkl_hash.h](../../../../sources/tuya__TuyaOpen/tools/porting/adapter/security/tkl_hash.h)<br>[tools/porting/adapter/security/tkl_symmetry.h](../../../../sources/tuya__TuyaOpen/tools/porting/adapter/security/tkl_symmetry.h)<br>[src/tuya_p2p/pjproject/pjnath/src/pjnath/stun_auth.c](../../../../sources/tuya__TuyaOpen/src/tuya_p2p/pjproject/pjnath/src/pjnath/stun_auth.c)<br>[src/tuya_p2p/pjproject/pjnath/include/pjnath/stun_auth.h](../../../../sources/tuya__TuyaOpen/src/tuya_p2p/pjproject/pjnath/include/pjnath/stun_auth.h)<br>[src/tuya_p2p/pjproject/pjlib/src/pj/pool_policy_malloc.c](../../../../sources/tuya__TuyaOpen/src/tuya_p2p/pjproject/pjlib/src/pj/pool_policy_malloc.c)<br>[src/tal_security/CMakeLists.txt](../../../../sources/tuya__TuyaOpen/src/tal_security/CMakeLists.txt)<br>[src/tal_security/src/tal_asymmetrical.c](../../../../sources/tuya__TuyaOpen/src/tal_security/src/tal_asymmetrical.c) |
| ci | 4 | [src/libtls/mbedtls-3.1.0/tests/.jenkins/Jenkinsfile](../../../../sources/tuya__TuyaOpen/src/libtls/mbedtls-3.1.0/tests/.jenkins/Jenkinsfile)<br>[.github/workflows/check-build-apps.yml](../../../../sources/tuya__TuyaOpen/.github/workflows/check-build-apps.yml)<br>[.github/workflows/release.yml](../../../../sources/tuya__TuyaOpen/.github/workflows/release.yml)<br>[.github/workflows/sync-to-gitee.yml](../../../../sources/tuya__TuyaOpen/.github/workflows/sync-to-gitee.yml) |
| container | 2 | [Dockerfile](../../../../sources/tuya__TuyaOpen/Dockerfile)<br>[src/libtls/mbedtls-3.1.0/tests/docker/bionic/Dockerfile](../../../../sources/tuya__TuyaOpen/src/libtls/mbedtls-3.1.0/tests/docker/bionic/Dockerfile) |
| instruction | 1 | [AGENTS.md](../../../../sources/tuya__TuyaOpen/AGENTS.md) |
| docs | 577 | [README_zh.md](../../../../sources/tuya__TuyaOpen/README_zh.md)<br>[README.md](../../../../sources/tuya__TuyaOpen/README.md)<br>[tests/export/README.md](../../../../sources/tuya__TuyaOpen/tests/export/README.md)<br>[src/peripherals/ir/tdl_ir_device/README.md](../../../../sources/tuya__TuyaOpen/src/peripherals/ir/tdl_ir_device/README.md)<br>[src/peripherals/imu/bmi270/README.md](../../../../sources/tuya__TuyaOpen/src/peripherals/imu/bmi270/README.md)<br>[src/peripherals/button/tdl_button/README_CN.md](../../../../sources/tuya__TuyaOpen/src/peripherals/button/tdl_button/README_CN.md)<br>[src/peripherals/button/tdl_button/README.md](../../../../sources/tuya__TuyaOpen/src/peripherals/button/tdl_button/README.md)<br>[src/micropython/mpy/README.md](../../../../sources/tuya__TuyaOpen/src/micropython/mpy/README.md) |
| config | 30 | [pyproject.toml](../../../../sources/tuya__TuyaOpen/pyproject.toml)<br>[uv.lock](../../../../sources/tuya__TuyaOpen/uv.lock)<br>[tools/requirements.txt](../../../../sources/tuya__TuyaOpen/tools/requirements.txt)<br>[tools/porting/template/linux/Makefile](../../../../sources/tuya__TuyaOpen/tools/porting/template/linux/Makefile)<br>[src/micropython/mpy/tools/mpremote/pyproject.toml](../../../../sources/tuya__TuyaOpen/src/micropython/mpy/tools/mpremote/pyproject.toml)<br>[src/micropython/mpy/tools/mpremote/requirements.txt](../../../../sources/tuya__TuyaOpen/src/micropython/mpy/tools/mpremote/requirements.txt)<br>[src/libu8g2/u8g2/tools/png2bin/Makefile](../../../../sources/tuya__TuyaOpen/src/libu8g2/u8g2/tools/png2bin/Makefile)<br>[src/libu8g2/u8g2/tools/mdtoc/Makefile](../../../../sources/tuya__TuyaOpen/src/libu8g2/u8g2/tools/mdtoc/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1566 | [tools/cli_command/cli_monitor.py](../../../../sources/tuya__TuyaOpen/tools/cli_command/cli_monitor.py)<br>[tools/cli_command/tests/__init__.py](../../../../sources/tuya__TuyaOpen/tools/cli_command/tests/__init__.py)<br>[tools/cli_command/tests/test_cli_flash.py](../../../../sources/tuya__TuyaOpen/tools/cli_command/tests/test_cli_flash.py)<br>[tools/cli_command/tests/test_util_tyutool.py](../../../../sources/tuya__TuyaOpen/tools/cli_command/tests/test_util_tyutool.py)<br>[tests/export/README.md](../../../../sources/tuya__TuyaOpen/tests/export/README.md)<br>[tests/export/run_all.sh](../../../../sources/tuya__TuyaOpen/tests/export/run_all.sh) |
| CI workflows | 4 | [src/libtls/mbedtls-3.1.0/tests/.jenkins/Jenkinsfile](../../../../sources/tuya__TuyaOpen/src/libtls/mbedtls-3.1.0/tests/.jenkins/Jenkinsfile)<br>[.github/workflows/check-build-apps.yml](../../../../sources/tuya__TuyaOpen/.github/workflows/check-build-apps.yml)<br>[.github/workflows/release.yml](../../../../sources/tuya__TuyaOpen/.github/workflows/release.yml)<br>[.github/workflows/sync-to-gitee.yml](../../../../sources/tuya__TuyaOpen/.github/workflows/sync-to-gitee.yml) |
| Containers / deploy | 2 | [Dockerfile](../../../../sources/tuya__TuyaOpen/Dockerfile)<br>[src/libtls/mbedtls-3.1.0/tests/docker/bionic/Dockerfile](../../../../sources/tuya__TuyaOpen/src/libtls/mbedtls-3.1.0/tests/docker/bionic/Dockerfile) |
| Security / policy | 32 | [tools/porting/adapter/security/tkl_asymmetrical.h](../../../../sources/tuya__TuyaOpen/tools/porting/adapter/security/tkl_asymmetrical.h)<br>[tools/porting/adapter/security/tkl_hash.h](../../../../sources/tuya__TuyaOpen/tools/porting/adapter/security/tkl_hash.h)<br>[tools/porting/adapter/security/tkl_symmetry.h](../../../../sources/tuya__TuyaOpen/tools/porting/adapter/security/tkl_symmetry.h)<br>[src/tuya_p2p/pjproject/pjnath/src/pjnath/stun_auth.c](../../../../sources/tuya__TuyaOpen/src/tuya_p2p/pjproject/pjnath/src/pjnath/stun_auth.c)<br>[src/tuya_p2p/pjproject/pjnath/include/pjnath/stun_auth.h](../../../../sources/tuya__TuyaOpen/src/tuya_p2p/pjproject/pjnath/include/pjnath/stun_auth.h)<br>[src/tuya_p2p/pjproject/pjlib/src/pj/pool_policy_malloc.c](../../../../sources/tuya__TuyaOpen/src/tuya_p2p/pjproject/pjlib/src/pj/pool_policy_malloc.c) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/tuya__TuyaOpen/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/ai_components/ai_mcp/CMakeLists.txt`, `src/ai_components/ai_mcp/Kconfig`, `src/ai_components/ai_mcp/src/ai_mcp_server.c`.
2. Trace execution through entrypoints: `src/micropython/mpy/tools/mpremote/mpremote/__main__.py`, `src/micropython/mpy/tools/mpremote/mpremote/main.py`, `src/liblvgl/v9/lvgl/tests/main.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `tools/__init__.py`, `tools/build_example.sh`.
4. Inspect retrieval/memory/indexing through: `tools/porting/template/linux/tkl_memory.c`, `tools/porting/adapter/system/tkl_memory.h`, `src/tal_system/include/tal_memory.h`.
5. Verify behavior through test/eval files: `tools/cli_command/cli_monitor.py`, `tools/cli_command/tests/__init__.py`, `tools/cli_command/tests/test_cli_flash.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Next gen AI+IoT framework for T2/T3/T5AI/ESP32/and more – Fast IoT and AI Agent hardware integration. 핵심 구조 신호는 C, pyproject.toml, Dockerfile, README.md, AGENTS.md, LICENSE이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
