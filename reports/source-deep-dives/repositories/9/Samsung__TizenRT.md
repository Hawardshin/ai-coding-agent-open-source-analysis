# Samsung/TizenRT 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

TizenRT is a lightweight RTOS-based platform to support low-end IoT devices

## 요약

- 조사 단위: `sources/Samsung__TizenRT` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 15,000 files, 1,663 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=tools/nxfuse/src/main.c, os/wqueue/bin/.gitignore, os/wqueue/bin/Makefile이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Samsung/TizenRT |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | C |
| Stars | 642 |
| Forks | 633 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Samsung__TizenRT](../../../../sources/Samsung__TizenRT) |
| 기존 보고서 | [reports/korea-trending/repositories/Samsung__TizenRT.md](../../../korea-trending/repositories/Samsung__TizenRT.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 15000 / 1663 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .circleci, apps, docs, external, framework, lib, loadable_apps, os, resource, test, tools |
| 상위 확장자 | .c: 5763, .h: 5515, (none): 532, .crt: 438, .defs: 332, .pem: 318, .txt: 280, .der: 235, .data: 208, .function: 152, .py: 152, .sh: 119 |
| 소스 패턴 | monorepo/workspace, cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| lib | source boundary | 3 |
| apps | source boundary | 1 |
| docs | documentation surface | 1 |
| external | top-level component | 1 |
| framework | top-level component | 1 |
| loadable_apps | source boundary | 1 |
| os | top-level component | 1 |
| resource | top-level component | 1 |
| test | validation surface | 1 |
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
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [tools/nxfuse/src/main.c](../../../../sources/Samsung__TizenRT/tools/nxfuse/src/main.c) | entrypoints signal |
| entrypoints | [os/wqueue/bin/.gitignore](../../../../sources/Samsung__TizenRT/os/wqueue/bin/.gitignore) | entrypoints signal |
| entrypoints | [os/wqueue/bin/Makefile](../../../../sources/Samsung__TizenRT/os/wqueue/bin/Makefile) | entrypoints signal |
| entrypoints | [os/mm/bin/.gitignore](../../../../sources/Samsung__TizenRT/os/mm/bin/.gitignore) | entrypoints signal |
| config | [tools/Makefile](../../../../sources/Samsung__TizenRT/tools/Makefile) | config signal |
| config | [tools/nxfuse/Makefile](../../../../sources/Samsung__TizenRT/tools/nxfuse/Makefile) | config signal |
| config | [tools/araui/sim/template/Makefile](../../../../sources/Samsung__TizenRT/tools/araui/sim/template/Makefile) | config signal |
| config | [tools/araui/png2c/Makefile](../../../../sources/Samsung__TizenRT/tools/araui/png2c/Makefile) | config signal |
| docs | [README.md](../../../../sources/Samsung__TizenRT/README.md) | docs signal |
| docs | [tools/uart_loopback_test/README.md](../../../../sources/Samsung__TizenRT/tools/uart_loopback_test/README.md) | docs signal |
| docs | [tools/uart_hw_test/README.md](../../../../sources/Samsung__TizenRT/tools/uart_hw_test/README.md) | docs signal |
| docs | [tools/symbolview/README.md](../../../../sources/Samsung__TizenRT/tools/symbolview/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 7 | [tools/nxfuse/src/main.c](../../../../sources/Samsung__TizenRT/tools/nxfuse/src/main.c)<br>[os/wqueue/bin/.gitignore](../../../../sources/Samsung__TizenRT/os/wqueue/bin/.gitignore)<br>[os/wqueue/bin/Makefile](../../../../sources/Samsung__TizenRT/os/wqueue/bin/Makefile)<br>[os/mm/bin/.gitignore](../../../../sources/Samsung__TizenRT/os/mm/bin/.gitignore)<br>[os/mm/bin/Makefile](../../../../sources/Samsung__TizenRT/os/mm/bin/Makefile)<br>[lib/libc/bin/.gitignore](../../../../sources/Samsung__TizenRT/lib/libc/bin/.gitignore)<br>[lib/libc/bin/Makefile](../../../../sources/Samsung__TizenRT/lib/libc/bin/Makefile) |
| agentRuntime | 263 | [tools/cformatter.sh](../../../../sources/Samsung__TizenRT/tools/cformatter.sh)<br>[tools/cxxformatter.sh](../../../../sources/Samsung__TizenRT/tools/cxxformatter.sh)<br>[tools/HowToUseFormatter.md](../../../../sources/Samsung__TizenRT/tools/HowToUseFormatter.md)<br>[tools/Makefile](../../../../sources/Samsung__TizenRT/tools/Makefile)<br>[tools/tools.txt](../../../../sources/Samsung__TizenRT/tools/tools.txt)<br>[tools/uart_loopback_test/README.md](../../../../sources/Samsung__TizenRT/tools/uart_loopback_test/README.md)<br>[tools/uart_loopback_test/uart_loopback_test.py](../../../../sources/Samsung__TizenRT/tools/uart_loopback_test/uart_loopback_test.py)<br>[tools/uart_hw_test/README.md](../../../../sources/Samsung__TizenRT/tools/uart_hw_test/README.md) |
| mcp | 4 | [os/drivers/ai-soc/ndp120/include/syntiant-firmware/ph/mcp_ph.h](../../../../sources/Samsung__TizenRT/os/drivers/ai-soc/ndp120/include/syntiant-firmware/ph/mcp_ph.h)<br>[os/board/rtl8730e/src/component/bluetooth/rtk_stack/inc/bluetooth/leaudio/mcp_client.h](../../../../sources/Samsung__TizenRT/os/board/rtl8730e/src/component/bluetooth/rtk_stack/inc/bluetooth/leaudio/mcp_client.h)<br>[os/board/rtl8730e/src/component/bluetooth/rtk_stack/inc/bluetooth/leaudio/mcp_def.h](../../../../sources/Samsung__TizenRT/os/board/rtl8730e/src/component/bluetooth/rtk_stack/inc/bluetooth/leaudio/mcp_def.h)<br>[os/board/rtl8730e/src/component/bluetooth/rtk_stack/inc/bluetooth/leaudio/mcp_mgr.h](../../../../sources/Samsung__TizenRT/os/board/rtl8730e/src/component/bluetooth/rtk_stack/inc/bluetooth/leaudio/mcp_mgr.h) |
| retrieval | 49 | [tools/memory/.gitignore](../../../../sources/Samsung__TizenRT/tools/memory/.gitignore)<br>[tools/memory/g_var_profiler.sh](../../../../sources/Samsung__TizenRT/tools/memory/g_var_profiler.sh)<br>[tools/memory/heapfailanalyzer.py](../../../../sources/Samsung__TizenRT/tools/memory/heapfailanalyzer.py)<br>[tools/memory/HowToUseGlobalVariableProfiler.md](../../../../sources/Samsung__TizenRT/tools/memory/HowToUseGlobalVariableProfiler.md)<br>[tools/memory/HowToUseHeapFailAnalyzer.md](../../../../sources/Samsung__TizenRT/tools/memory/HowToUseHeapFailAnalyzer.md)<br>[os/include/tinyara/ss_slot_index.h](../../../../sources/Samsung__TizenRT/os/include/tinyara/ss_slot_index.h)<br>[os/drivers/memory/Make.defs](../../../../sources/Samsung__TizenRT/os/drivers/memory/Make.defs)<br>[os/drivers/memory/mminfo.c](../../../../sources/Samsung__TizenRT/os/drivers/memory/mminfo.c) |
| spec | 43 | [os/drivers/wireless/realtek/rtk/src/hci/hci_spec.h](../../../../sources/Samsung__TizenRT/os/drivers/wireless/realtek/rtk/src/hci/hci_spec.h)<br>[os/drivers/wireless/realtek/rtk/src/hci/usb/usb_spec.h](../../../../sources/Samsung__TizenRT/os/drivers/wireless/realtek/rtk/src/hci/usb/usb_spec.h)<br>[os/board/rtl8720e/src/component/network/http2/nghttp2-1.31.0/nghttp2_priority_spec.c](../../../../sources/Samsung__TizenRT/os/board/rtl8720e/src/component/network/http2/nghttp2-1.31.0/nghttp2_priority_spec.c)<br>[os/board/rtl8720e/src/component/network/http2/nghttp2-1.31.0/nghttp2_priority_spec.h](../../../../sources/Samsung__TizenRT/os/board/rtl8720e/src/component/network/http2/nghttp2-1.31.0/nghttp2_priority_spec.h)<br>[os/board/bk7239n/src/components/tfm_mbedtls/mbedtls/scripts/basic.requirements.txt](../../../../sources/Samsung__TizenRT/os/board/bk7239n/src/components/tfm_mbedtls/mbedtls/scripts/basic.requirements.txt)<br>[os/board/bk7239n/src/components/tfm_mbedtls/mbedtls/scripts/ci.requirements.txt](../../../../sources/Samsung__TizenRT/os/board/bk7239n/src/components/tfm_mbedtls/mbedtls/scripts/ci.requirements.txt)<br>[os/board/bk7239n/src/components/tfm_mbedtls/mbedtls/scripts/driver.requirements.txt](../../../../sources/Samsung__TizenRT/os/board/bk7239n/src/components/tfm_mbedtls/mbedtls/scripts/driver.requirements.txt)<br>[os/board/bk7239n/src/components/tfm_mbedtls/mbedtls/scripts/maintainer.requirements.txt](../../../../sources/Samsung__TizenRT/os/board/bk7239n/src/components/tfm_mbedtls/mbedtls/scripts/maintainer.requirements.txt) |
| eval | 2498 | [tools/uart_loopback_test/README.md](../../../../sources/Samsung__TizenRT/tools/uart_loopback_test/README.md)<br>[tools/uart_loopback_test/uart_loopback_test.py](../../../../sources/Samsung__TizenRT/tools/uart_loopback_test/uart_loopback_test.py)<br>[tools/uart_hw_test/README.md](../../../../sources/Samsung__TizenRT/tools/uart_hw_test/README.md)<br>[tools/uart_hw_test/uart_test_windows.c](../../../../sources/Samsung__TizenRT/tools/uart_hw_test/uart_test_windows.c)<br>[tools/uart_hw_test/uart_test_windows.exe](../../../../sources/Samsung__TizenRT/tools/uart_hw_test/uart_test_windows.exe)<br>[tools/uart_hw_test/uart_test.c](../../../../sources/Samsung__TizenRT/tools/uart_hw_test/uart_test.c)<br>[tools/uart_hw_test/uart_test.sh](../../../../sources/Samsung__TizenRT/tools/uart_hw_test/uart_test.sh)<br>[tools/rng_test/README.md](../../../../sources/Samsung__TizenRT/tools/rng_test/README.md) |
| security | 121 | [os/se/sss/security_hal_wrapper.c](../../../../sources/Samsung__TizenRT/os/se/sss/security_hal_wrapper.c)<br>[os/se/security_level/Make.defs](../../../../sources/Samsung__TizenRT/os/se/security_level/Make.defs)<br>[os/se/security_level/security_level.c](../../../../sources/Samsung__TizenRT/os/se/security_level/security_level.c)<br>[os/se/armino/security_armino_wrapper_tz.c](../../../../sources/Samsung__TizenRT/os/se/armino/security_armino_wrapper_tz.c)<br>[os/se/ameba/rtl_security_api_wrapper_tz.c](../../../../sources/Samsung__TizenRT/os/se/ameba/rtl_security_api_wrapper_tz.c)<br>[os/se/ameba/security_ameba_wrapper_tz.c](../../../../sources/Samsung__TizenRT/os/se/ameba/security_ameba_wrapper_tz.c)<br>[os/net/lwip/src/netif/ppp/auth.c](../../../../sources/Samsung__TizenRT/os/net/lwip/src/netif/ppp/auth.c)<br>[os/net/lwip/src/netif/ppp/auth.h](../../../../sources/Samsung__TizenRT/os/net/lwip/src/netif/ppp/auth.h) |
| ci | 7 | [os/board/bk7239n/src/components/tfm_mbedtls/mbedtls/tests/.jenkins/Jenkinsfile](../../../../sources/Samsung__TizenRT/os/board/bk7239n/src/components/tfm_mbedtls/mbedtls/tests/.jenkins/Jenkinsfile)<br>[os/board/bk7239n/src/components/psa_mbedtls/mbedtls/tests/.jenkins/Jenkinsfile](../../../../sources/Samsung__TizenRT/os/board/bk7239n/src/components/psa_mbedtls/mbedtls/tests/.jenkins/Jenkinsfile)<br>[os/board/bk7239n/src/components/cmsis/CMSIS_5/.github/workflows/codeql-analysis.yml](../../../../sources/Samsung__TizenRT/os/board/bk7239n/src/components/cmsis/CMSIS_5/.github/workflows/codeql-analysis.yml)<br>[os/board/bk7239n/src/components/cmsis/CMSIS_5/.github/workflows/fileheader.yml](../../../../sources/Samsung__TizenRT/os/board/bk7239n/src/components/cmsis/CMSIS_5/.github/workflows/fileheader.yml)<br>[os/board/bk7239n/src/components/cmsis/CMSIS_5/.github/workflows/gh-pages.yaml](../../../../sources/Samsung__TizenRT/os/board/bk7239n/src/components/cmsis/CMSIS_5/.github/workflows/gh-pages.yaml)<br>[os/board/bk7239n/src/components/cmsis/CMSIS_5/.github/workflows/packdesc.yml](../../../../sources/Samsung__TizenRT/os/board/bk7239n/src/components/cmsis/CMSIS_5/.github/workflows/packdesc.yml)<br>[os/board/bk7239n/src/components/cmsis/CMSIS_5/.github/workflows/release.yaml](../../../../sources/Samsung__TizenRT/os/board/bk7239n/src/components/cmsis/CMSIS_5/.github/workflows/release.yaml) |
| container | 2 | [os/board/bk7239n/src/components/tfm_mbedtls/mbedtls/tests/docker/bionic/Dockerfile](../../../../sources/Samsung__TizenRT/os/board/bk7239n/src/components/tfm_mbedtls/mbedtls/tests/docker/bionic/Dockerfile)<br>[os/board/bk7239n/src/components/psa_mbedtls/mbedtls/tests/docker/bionic/Dockerfile](../../../../sources/Samsung__TizenRT/os/board/bk7239n/src/components/psa_mbedtls/mbedtls/tests/docker/bionic/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 166 | [README.md](../../../../sources/Samsung__TizenRT/README.md)<br>[tools/uart_loopback_test/README.md](../../../../sources/Samsung__TizenRT/tools/uart_loopback_test/README.md)<br>[tools/uart_hw_test/README.md](../../../../sources/Samsung__TizenRT/tools/uart_hw_test/README.md)<br>[tools/symbolview/README.md](../../../../sources/Samsung__TizenRT/tools/symbolview/README.md)<br>[tools/rng_test/README.md](../../../../sources/Samsung__TizenRT/tools/rng_test/README.md)<br>[tools/nxfuse/README_SMARTFS.md](../../../../sources/Samsung__TizenRT/tools/nxfuse/README_SMARTFS.md)<br>[tools/logdump_decompress/README.md](../../../../sources/Samsung__TizenRT/tools/logdump_decompress/README.md)<br>[tools/fs/README_ROMFS.md](../../../../sources/Samsung__TizenRT/tools/fs/README_ROMFS.md) |
| config | 112 | [tools/Makefile](../../../../sources/Samsung__TizenRT/tools/Makefile)<br>[tools/nxfuse/Makefile](../../../../sources/Samsung__TizenRT/tools/nxfuse/Makefile)<br>[tools/araui/sim/template/Makefile](../../../../sources/Samsung__TizenRT/tools/araui/sim/template/Makefile)<br>[tools/araui/png2c/Makefile](../../../../sources/Samsung__TizenRT/tools/araui/png2c/Makefile)<br>[os/Makefile](../../../../sources/Samsung__TizenRT/os/Makefile)<br>[os/wqueue/Makefile](../../../../sources/Samsung__TizenRT/os/wqueue/Makefile)<br>[os/wqueue/ubin/Makefile](../../../../sources/Samsung__TizenRT/os/wqueue/ubin/Makefile)<br>[os/wqueue/kbin/Makefile](../../../../sources/Samsung__TizenRT/os/wqueue/kbin/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 2498 | [tools/uart_loopback_test/README.md](../../../../sources/Samsung__TizenRT/tools/uart_loopback_test/README.md)<br>[tools/uart_loopback_test/uart_loopback_test.py](../../../../sources/Samsung__TizenRT/tools/uart_loopback_test/uart_loopback_test.py)<br>[tools/uart_hw_test/README.md](../../../../sources/Samsung__TizenRT/tools/uart_hw_test/README.md)<br>[tools/uart_hw_test/uart_test_windows.c](../../../../sources/Samsung__TizenRT/tools/uart_hw_test/uart_test_windows.c)<br>[tools/uart_hw_test/uart_test_windows.exe](../../../../sources/Samsung__TizenRT/tools/uart_hw_test/uart_test_windows.exe)<br>[tools/uart_hw_test/uart_test.c](../../../../sources/Samsung__TizenRT/tools/uart_hw_test/uart_test.c) |
| CI workflow | 7 | [os/board/bk7239n/src/components/tfm_mbedtls/mbedtls/tests/.jenkins/Jenkinsfile](../../../../sources/Samsung__TizenRT/os/board/bk7239n/src/components/tfm_mbedtls/mbedtls/tests/.jenkins/Jenkinsfile)<br>[os/board/bk7239n/src/components/psa_mbedtls/mbedtls/tests/.jenkins/Jenkinsfile](../../../../sources/Samsung__TizenRT/os/board/bk7239n/src/components/psa_mbedtls/mbedtls/tests/.jenkins/Jenkinsfile)<br>[os/board/bk7239n/src/components/cmsis/CMSIS_5/.github/workflows/codeql-analysis.yml](../../../../sources/Samsung__TizenRT/os/board/bk7239n/src/components/cmsis/CMSIS_5/.github/workflows/codeql-analysis.yml)<br>[os/board/bk7239n/src/components/cmsis/CMSIS_5/.github/workflows/fileheader.yml](../../../../sources/Samsung__TizenRT/os/board/bk7239n/src/components/cmsis/CMSIS_5/.github/workflows/fileheader.yml)<br>[os/board/bk7239n/src/components/cmsis/CMSIS_5/.github/workflows/gh-pages.yaml](../../../../sources/Samsung__TizenRT/os/board/bk7239n/src/components/cmsis/CMSIS_5/.github/workflows/gh-pages.yaml)<br>[os/board/bk7239n/src/components/cmsis/CMSIS_5/.github/workflows/packdesc.yml](../../../../sources/Samsung__TizenRT/os/board/bk7239n/src/components/cmsis/CMSIS_5/.github/workflows/packdesc.yml) |
| 컨테이너/배포 | 2 | [os/board/bk7239n/src/components/tfm_mbedtls/mbedtls/tests/docker/bionic/Dockerfile](../../../../sources/Samsung__TizenRT/os/board/bk7239n/src/components/tfm_mbedtls/mbedtls/tests/docker/bionic/Dockerfile)<br>[os/board/bk7239n/src/components/psa_mbedtls/mbedtls/tests/docker/bionic/Dockerfile](../../../../sources/Samsung__TizenRT/os/board/bk7239n/src/components/psa_mbedtls/mbedtls/tests/docker/bionic/Dockerfile) |
| 보안/정책 | 121 | [os/se/sss/security_hal_wrapper.c](../../../../sources/Samsung__TizenRT/os/se/sss/security_hal_wrapper.c)<br>[os/se/security_level/Make.defs](../../../../sources/Samsung__TizenRT/os/se/security_level/Make.defs)<br>[os/se/security_level/security_level.c](../../../../sources/Samsung__TizenRT/os/se/security_level/security_level.c)<br>[os/se/armino/security_armino_wrapper_tz.c](../../../../sources/Samsung__TizenRT/os/se/armino/security_armino_wrapper_tz.c)<br>[os/se/ameba/rtl_security_api_wrapper_tz.c](../../../../sources/Samsung__TizenRT/os/se/ameba/rtl_security_api_wrapper_tz.c)<br>[os/se/ameba/security_ameba_wrapper_tz.c](../../../../sources/Samsung__TizenRT/os/se/ameba/security_ameba_wrapper_tz.c) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 큰 레포라 15000개 파일에서 스캔이 잘림 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `tools/nxfuse/src/main.c`, `os/wqueue/bin/.gitignore`, `os/wqueue/bin/Makefile`.
2. entrypoint를 따라 실행 흐름 확인: `tools/nxfuse/src/main.c`, `os/wqueue/bin/.gitignore`, `os/wqueue/bin/Makefile`.
3. agent/tool runtime 매핑: `tools/cformatter.sh`, `tools/cxxformatter.sh`, `tools/HowToUseFormatter.md`.
4. retrieval/memory/indexing 확인: `tools/memory/.gitignore`, `tools/memory/g_var_profiler.sh`, `tools/memory/heapfailanalyzer.py`.
5. test/eval 파일로 동작 검증: `tools/uart_loopback_test/README.md`, `tools/uart_loopback_test/uart_loopback_test.py`, `tools/uart_hw_test/README.md`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 TizenRT is a lightweight RTOS based platform to support low end IoT devices. 핵심 구조 신호는 C, README.md, LICENSE, tests, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
