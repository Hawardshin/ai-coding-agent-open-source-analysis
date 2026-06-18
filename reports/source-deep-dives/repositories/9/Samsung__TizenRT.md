# Samsung/TizenRT Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

TizenRT is a lightweight RTOS-based platform to support low-end IoT devices

## 요약

- 조사 단위: `sources/Samsung__TizenRT` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 15,000 files, 1,663 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=tools/nxfuse/src/main.c, os/wqueue/bin/.gitignore, os/wqueue/bin/Makefile이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Samsung/TizenRT |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | C |
| Stars | 642 |
| Forks | 633 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/Samsung__TizenRT](../../../../sources/Samsung__TizenRT) |
| Existing report | [reports/korea-trending/repositories/Samsung__TizenRT.md](../../../korea-trending/repositories/Samsung__TizenRT.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 15000 / 1663 |
| Max observed depth | 13 |
| Top directories | .circleci, apps, docs, external, framework, lib, loadable_apps, os, resource, test, tools |
| Top extensions | .c: 5763, .h: 5515, (none): 532, .crt: 438, .defs: 332, .pem: 318, .txt: 280, .der: 235, .data: 208, .function: 152, .py: 152, .sh: 119 |
| Source patterns | monorepo/workspace, cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
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
| instruction | 0 | not obvious |
| docs | 166 | [README.md](../../../../sources/Samsung__TizenRT/README.md)<br>[tools/uart_loopback_test/README.md](../../../../sources/Samsung__TizenRT/tools/uart_loopback_test/README.md)<br>[tools/uart_hw_test/README.md](../../../../sources/Samsung__TizenRT/tools/uart_hw_test/README.md)<br>[tools/symbolview/README.md](../../../../sources/Samsung__TizenRT/tools/symbolview/README.md)<br>[tools/rng_test/README.md](../../../../sources/Samsung__TizenRT/tools/rng_test/README.md)<br>[tools/nxfuse/README_SMARTFS.md](../../../../sources/Samsung__TizenRT/tools/nxfuse/README_SMARTFS.md)<br>[tools/logdump_decompress/README.md](../../../../sources/Samsung__TizenRT/tools/logdump_decompress/README.md)<br>[tools/fs/README_ROMFS.md](../../../../sources/Samsung__TizenRT/tools/fs/README_ROMFS.md) |
| config | 112 | [tools/Makefile](../../../../sources/Samsung__TizenRT/tools/Makefile)<br>[tools/nxfuse/Makefile](../../../../sources/Samsung__TizenRT/tools/nxfuse/Makefile)<br>[tools/araui/sim/template/Makefile](../../../../sources/Samsung__TizenRT/tools/araui/sim/template/Makefile)<br>[tools/araui/png2c/Makefile](../../../../sources/Samsung__TizenRT/tools/araui/png2c/Makefile)<br>[os/Makefile](../../../../sources/Samsung__TizenRT/os/Makefile)<br>[os/wqueue/Makefile](../../../../sources/Samsung__TizenRT/os/wqueue/Makefile)<br>[os/wqueue/ubin/Makefile](../../../../sources/Samsung__TizenRT/os/wqueue/ubin/Makefile)<br>[os/wqueue/kbin/Makefile](../../../../sources/Samsung__TizenRT/os/wqueue/kbin/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 2498 | [tools/uart_loopback_test/README.md](../../../../sources/Samsung__TizenRT/tools/uart_loopback_test/README.md)<br>[tools/uart_loopback_test/uart_loopback_test.py](../../../../sources/Samsung__TizenRT/tools/uart_loopback_test/uart_loopback_test.py)<br>[tools/uart_hw_test/README.md](../../../../sources/Samsung__TizenRT/tools/uart_hw_test/README.md)<br>[tools/uart_hw_test/uart_test_windows.c](../../../../sources/Samsung__TizenRT/tools/uart_hw_test/uart_test_windows.c)<br>[tools/uart_hw_test/uart_test_windows.exe](../../../../sources/Samsung__TizenRT/tools/uart_hw_test/uart_test_windows.exe)<br>[tools/uart_hw_test/uart_test.c](../../../../sources/Samsung__TizenRT/tools/uart_hw_test/uart_test.c) |
| CI workflows | 7 | [os/board/bk7239n/src/components/tfm_mbedtls/mbedtls/tests/.jenkins/Jenkinsfile](../../../../sources/Samsung__TizenRT/os/board/bk7239n/src/components/tfm_mbedtls/mbedtls/tests/.jenkins/Jenkinsfile)<br>[os/board/bk7239n/src/components/psa_mbedtls/mbedtls/tests/.jenkins/Jenkinsfile](../../../../sources/Samsung__TizenRT/os/board/bk7239n/src/components/psa_mbedtls/mbedtls/tests/.jenkins/Jenkinsfile)<br>[os/board/bk7239n/src/components/cmsis/CMSIS_5/.github/workflows/codeql-analysis.yml](../../../../sources/Samsung__TizenRT/os/board/bk7239n/src/components/cmsis/CMSIS_5/.github/workflows/codeql-analysis.yml)<br>[os/board/bk7239n/src/components/cmsis/CMSIS_5/.github/workflows/fileheader.yml](../../../../sources/Samsung__TizenRT/os/board/bk7239n/src/components/cmsis/CMSIS_5/.github/workflows/fileheader.yml)<br>[os/board/bk7239n/src/components/cmsis/CMSIS_5/.github/workflows/gh-pages.yaml](../../../../sources/Samsung__TizenRT/os/board/bk7239n/src/components/cmsis/CMSIS_5/.github/workflows/gh-pages.yaml)<br>[os/board/bk7239n/src/components/cmsis/CMSIS_5/.github/workflows/packdesc.yml](../../../../sources/Samsung__TizenRT/os/board/bk7239n/src/components/cmsis/CMSIS_5/.github/workflows/packdesc.yml) |
| Containers / deploy | 2 | [os/board/bk7239n/src/components/tfm_mbedtls/mbedtls/tests/docker/bionic/Dockerfile](../../../../sources/Samsung__TizenRT/os/board/bk7239n/src/components/tfm_mbedtls/mbedtls/tests/docker/bionic/Dockerfile)<br>[os/board/bk7239n/src/components/psa_mbedtls/mbedtls/tests/docker/bionic/Dockerfile](../../../../sources/Samsung__TizenRT/os/board/bk7239n/src/components/psa_mbedtls/mbedtls/tests/docker/bionic/Dockerfile) |
| Security / policy | 121 | [os/se/sss/security_hal_wrapper.c](../../../../sources/Samsung__TizenRT/os/se/sss/security_hal_wrapper.c)<br>[os/se/security_level/Make.defs](../../../../sources/Samsung__TizenRT/os/se/security_level/Make.defs)<br>[os/se/security_level/security_level.c](../../../../sources/Samsung__TizenRT/os/se/security_level/security_level.c)<br>[os/se/armino/security_armino_wrapper_tz.c](../../../../sources/Samsung__TizenRT/os/se/armino/security_armino_wrapper_tz.c)<br>[os/se/ameba/rtl_security_api_wrapper_tz.c](../../../../sources/Samsung__TizenRT/os/se/ameba/rtl_security_api_wrapper_tz.c)<br>[os/se/ameba/security_ameba_wrapper_tz.c](../../../../sources/Samsung__TizenRT/os/se/ameba/security_ameba_wrapper_tz.c) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | large repository scan truncated at 15000 files |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `tools/nxfuse/src/main.c`, `os/wqueue/bin/.gitignore`, `os/wqueue/bin/Makefile`.
2. Trace execution through entrypoints: `tools/nxfuse/src/main.c`, `os/wqueue/bin/.gitignore`, `os/wqueue/bin/Makefile`.
3. Map agent/tool runtime through: `tools/cformatter.sh`, `tools/cxxformatter.sh`, `tools/HowToUseFormatter.md`.
4. Inspect retrieval/memory/indexing through: `tools/memory/.gitignore`, `tools/memory/g_var_profiler.sh`, `tools/memory/heapfailanalyzer.py`.
5. Verify behavior through test/eval files: `tools/uart_loopback_test/README.md`, `tools/uart_loopback_test/uart_loopback_test.py`, `tools/uart_hw_test/README.md`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 TizenRT is a lightweight RTOS based platform to support low end IoT devices. 핵심 구조 신호는 C, README.md, LICENSE, tests, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
