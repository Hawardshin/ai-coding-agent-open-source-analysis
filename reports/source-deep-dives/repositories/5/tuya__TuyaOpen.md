# tuya/TuyaOpen 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Next-gen AI+IoT framework for T2/T3/T5AI/ESP32/and more – Fast IoT and AI Agent hardware integration

## 요약

- 조사 단위: `sources/tuya__TuyaOpen` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 10,523 files, 1,553 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=src/ai_components/ai_mcp/CMakeLists.txt, src/ai_components/ai_mcp/Kconfig, src/ai_components/ai_mcp/src/ai_mcp_server.c이고, 의존성 단서는 click, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | tuya/TuyaOpen |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | C |
| Stars | 1589 |
| Forks | 270 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/tuya__TuyaOpen](../../../../sources/tuya__TuyaOpen) |
| 기존 보고서 | [reports/global-trending/repositories/tuya__TuyaOpen.md](../../../global-trending/repositories/tuya__TuyaOpen.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 10523 / 1553 |
| 관측 최대 깊이 | 11 |
| 상위 디렉터리 | .github, apps, boards, docs, examples, platform, src, tests, tools |
| 상위 확장자 | .c: 3272, .h: 2244, .png: 1267, .bdf: 404, .py: 309, .md: 302, .txt: 293, .rst: 264, (none): 252, .ttf: 225, .config: 224, .cc: 207 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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
| developerSurface | click |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1566 | [tools/cli_command/cli_monitor.py](../../../../sources/tuya__TuyaOpen/tools/cli_command/cli_monitor.py)<br>[tools/cli_command/tests/__init__.py](../../../../sources/tuya__TuyaOpen/tools/cli_command/tests/__init__.py)<br>[tools/cli_command/tests/test_cli_flash.py](../../../../sources/tuya__TuyaOpen/tools/cli_command/tests/test_cli_flash.py)<br>[tools/cli_command/tests/test_util_tyutool.py](../../../../sources/tuya__TuyaOpen/tools/cli_command/tests/test_util_tyutool.py)<br>[tests/export/README.md](../../../../sources/tuya__TuyaOpen/tests/export/README.md)<br>[tests/export/run_all.sh](../../../../sources/tuya__TuyaOpen/tests/export/run_all.sh) |
| CI workflow | 4 | [src/libtls/mbedtls-3.1.0/tests/.jenkins/Jenkinsfile](../../../../sources/tuya__TuyaOpen/src/libtls/mbedtls-3.1.0/tests/.jenkins/Jenkinsfile)<br>[.github/workflows/check-build-apps.yml](../../../../sources/tuya__TuyaOpen/.github/workflows/check-build-apps.yml)<br>[.github/workflows/release.yml](../../../../sources/tuya__TuyaOpen/.github/workflows/release.yml)<br>[.github/workflows/sync-to-gitee.yml](../../../../sources/tuya__TuyaOpen/.github/workflows/sync-to-gitee.yml) |
| 컨테이너/배포 | 2 | [Dockerfile](../../../../sources/tuya__TuyaOpen/Dockerfile)<br>[src/libtls/mbedtls-3.1.0/tests/docker/bionic/Dockerfile](../../../../sources/tuya__TuyaOpen/src/libtls/mbedtls-3.1.0/tests/docker/bionic/Dockerfile) |
| 보안/정책 | 32 | [tools/porting/adapter/security/tkl_asymmetrical.h](../../../../sources/tuya__TuyaOpen/tools/porting/adapter/security/tkl_asymmetrical.h)<br>[tools/porting/adapter/security/tkl_hash.h](../../../../sources/tuya__TuyaOpen/tools/porting/adapter/security/tkl_hash.h)<br>[tools/porting/adapter/security/tkl_symmetry.h](../../../../sources/tuya__TuyaOpen/tools/porting/adapter/security/tkl_symmetry.h)<br>[src/tuya_p2p/pjproject/pjnath/src/pjnath/stun_auth.c](../../../../sources/tuya__TuyaOpen/src/tuya_p2p/pjproject/pjnath/src/pjnath/stun_auth.c)<br>[src/tuya_p2p/pjproject/pjnath/include/pjnath/stun_auth.h](../../../../sources/tuya__TuyaOpen/src/tuya_p2p/pjproject/pjnath/include/pjnath/stun_auth.h)<br>[src/tuya_p2p/pjproject/pjlib/src/pj/pool_policy_malloc.c](../../../../sources/tuya__TuyaOpen/src/tuya_p2p/pjproject/pjlib/src/pj/pool_policy_malloc.c) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/tuya__TuyaOpen/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/ai_components/ai_mcp/CMakeLists.txt`, `src/ai_components/ai_mcp/Kconfig`, `src/ai_components/ai_mcp/src/ai_mcp_server.c`.
2. entrypoint를 따라 실행 흐름 확인: `src/micropython/mpy/tools/mpremote/mpremote/__main__.py`, `src/micropython/mpy/tools/mpremote/mpremote/main.py`, `src/liblvgl/v9/lvgl/tests/main.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tools/__init__.py`, `tools/build_example.sh`.
4. retrieval/memory/indexing 확인: `tools/porting/template/linux/tkl_memory.c`, `tools/porting/adapter/system/tkl_memory.h`, `src/tal_system/include/tal_memory.h`.
5. test/eval 파일로 동작 검증: `tools/cli_command/cli_monitor.py`, `tools/cli_command/tests/__init__.py`, `tools/cli_command/tests/test_cli_flash.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Next gen AI+IoT framework for T2/T3/T5AI/ESP32/and more – Fast IoT and AI Agent hardware integration. 핵심 구조 신호는 C, pyproject.toml, Dockerfile, README.md, AGENTS.md, LICENSE이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
