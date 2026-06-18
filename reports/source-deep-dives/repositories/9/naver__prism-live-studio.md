# naver/prism-live-studio 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

naver/prism-live-studio

## 요약

- 조사 단위: `sources/naver__prism-live-studio` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 6,908 files, 616 directories, depth score 108, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/src/main.cpp, src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/concrt140.dll, src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/fmod.dll이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/prism-live-studio |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | C++ |
| Stars | 109 |
| Forks | 34 |
| License | GPL-2.0 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__prism-live-studio](../../../../sources/naver__prism-live-studio) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__prism-live-studio.md](../../../korea-trending/repositories/naver__prism-live-studio.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 6908 / 616 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | src |
| 상위 확장자 | .svg: 2253, .h: 1029, .cpp: 674, .png: 581, .ini: 520, .hpp: 184, .ui: 176, .css: 165, .c: 139, .txt: 139, (none): 133, .link: 124 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 207 |


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
| entrypoints | [src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/src/main.cpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/src/main.cpp) | entrypoints signal |
| entrypoints | [src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/concrt140.dll](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/concrt140.dll) | entrypoints signal |
| entrypoints | [src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/fmod.dll](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/fmod.dll) | entrypoints signal |
| entrypoints | [src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/fmodex.dll](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/fmodex.dll) | entrypoints signal |
| config | [src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/Makefile](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/Makefile) | config signal |
| docs | [README.md](../../../../sources/naver__prism-live-studio/README.md) | docs signal |
| docs | [src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/README.md](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/README.md) | docs signal |
| docs | [src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/avatars.png](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/avatars.png) | docs signal |
| docs | [src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/binary_formats.md](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/binary_formats.md) | docs signal |
| eval | [src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/CMakeLists.txt](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/CMakeLists.txt) | eval signal |
| eval | [src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSErrorCodeTransformTool.cpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSErrorCodeTransformTool.cpp) | eval signal |
| eval | [src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSErrorCodeTransformTool.h](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSErrorCodeTransformTool.h) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 56 | [src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/src/main.cpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/src/main.cpp)<br>[src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/concrt140.dll](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/concrt140.dll)<br>[src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/fmod.dll](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/fmod.dll)<br>[src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/fmodex.dll](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/fmodex.dll)<br>[src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/fmodexL.dll](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/fmodexL.dll)<br>[src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/fmodL.dll](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/fmodL.dll)<br>[src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/FreeImage.dll](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/FreeImage.dll)<br>[src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/msvcp140.dll](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/msvcp140.dll) |
| agentRuntime | 13 | [src/prism-live-studio/PRISMLiveStudio/plugins/frontend-plugins/frontend-tools/tool-helpers.hpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/frontend-plugins/frontend-tools/tool-helpers.hpp)<br>[src/prism-live-studio/PRISMLiveStudio/obs-ui/context-bar-controls.cpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/obs-ui/context-bar-controls.cpp)<br>[src/prism-live-studio/PRISMLiveStudio/obs-ui/context-bar-controls.hpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/obs-ui/context-bar-controls.hpp)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/tools/checksum-icc.c](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/tools/checksum-icc.c)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/tools/cvtcolor.c](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/tools/cvtcolor.c)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/tools/genpng.c](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/tools/genpng.c)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/tools/intgamma.sh](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/tools/intgamma.sh)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/tools/makesRGB.c](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/tools/makesRGB.c) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 20 | [src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/index.md](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/index.md)<br>[src/prism-live-studio/others/stream-deck/src/html/com.naver.prism.sdPlugin/propertyinspector/index_pi.html](../../../../sources/naver__prism-live-studio/src/prism-live-studio/others/stream-deck/src/html/com.naver.prism.sdPlugin/propertyinspector/index_pi.html)<br>[src/prism-live-studio/others/stream-deck/src/html/com.naver.prism.sdPlugin/propertyinspector/index.html](../../../../sources/naver__prism-live-studio/src/prism-live-studio/others/stream-deck/src/html/com.naver.prism.sdPlugin/propertyinspector/index.html)<br>[src/prism-live-studio/others/stream-deck/src/html/com.naver.prism.sdPlugin/propertyinspector/js/index_pi.js](../../../../sources/naver__prism-live-studio/src/prism-live-studio/others/stream-deck/src/html/com.naver.prism.sdPlugin/propertyinspector/js/index_pi.js)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/testpngs/crashers/huge_bKGD_chunk.png](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/testpngs/crashers/huge_bKGD_chunk.png)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/testpngs/crashers/huge_cHRM_chunk.png](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/testpngs/crashers/huge_cHRM_chunk.png)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/testpngs/crashers/huge_eXIf_chunk.png](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/testpngs/crashers/huge_eXIf_chunk.png)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/testpngs/crashers/huge_gAMA_chunk.png](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/testpngs/crashers/huge_gAMA_chunk.png) |
| spec | 0 | 명확하지 않음 |
| eval | 108 | [src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/CMakeLists.txt](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/CMakeLists.txt)<br>[src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSErrorCodeTransformTool.cpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSErrorCodeTransformTool.cpp)<br>[src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSErrorCodeTransformTool.h](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSErrorCodeTransformTool.h)<br>[src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSErrorCodeTransformTool.ui](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSErrorCodeTransformTool.ui)<br>[src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSNetworkHookTool.cpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSNetworkHookTool.cpp)<br>[src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSNetworkHookTool.hpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSNetworkHookTool.hpp)<br>[src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSNetworkHookTool.ui](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSNetworkHookTool.ui)<br>[src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSNetworkMonitorTool.cpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSNetworkMonitorTool.cpp) |
| security | 12 | [src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-base.cpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-base.cpp)<br>[src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-base.hpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-base.hpp)<br>[src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-listener.cpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-listener.cpp)<br>[src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-listener.hpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-listener.hpp)<br>[src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-oauth.cpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-oauth.cpp)<br>[src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-oauth.hpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-oauth.hpp)<br>[src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-restream.cpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-restream.cpp)<br>[src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-restream.hpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-restream.hpp) |
| ci | 48 | [src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/.shellcheckrc](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/.shellcheckrc)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_lint.sh](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_lint.sh)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_shellify.sh](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_shellify.sh)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_verify_cmake.sh](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_verify_cmake.sh)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_verify_configure.sh](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_verify_configure.sh)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_verify_makefiles.sh](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_verify_makefiles.sh)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_verify_version.sh](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_verify_version.sh)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/LICENSE_MIT.txt](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/LICENSE_MIT.txt) |
| container | 1 | [src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/oss-fuzz/Dockerfile](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/oss-fuzz/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 460 | [README.md](../../../../sources/naver__prism-live-studio/README.md)<br>[src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/README.md](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/README.md)<br>[src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/avatars.png](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/avatars.png)<br>[src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/binary_formats.md](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/binary_formats.md)<br>[src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/Doxyfile](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/Doxyfile)<br>[src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/faq.md](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/faq.md)<br>[src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/index.md](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/index.md)<br>[src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/json.gif](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/json.gif) |
| config | 1 | [src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/Makefile](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 108 | [src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/CMakeLists.txt](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/CMakeLists.txt)<br>[src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSErrorCodeTransformTool.cpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSErrorCodeTransformTool.cpp)<br>[src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSErrorCodeTransformTool.h](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSErrorCodeTransformTool.h)<br>[src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSErrorCodeTransformTool.ui](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSErrorCodeTransformTool.ui)<br>[src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSNetworkHookTool.cpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSNetworkHookTool.cpp)<br>[src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSNetworkHookTool.hpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSNetworkHookTool.hpp) |
| CI workflow | 48 | [src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/.shellcheckrc](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/.shellcheckrc)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_lint.sh](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_lint.sh)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_shellify.sh](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_shellify.sh)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_verify_cmake.sh](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_verify_cmake.sh)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_verify_configure.sh](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_verify_configure.sh)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_verify_makefiles.sh](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_verify_makefiles.sh) |
| 컨테이너/배포 | 1 | [src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/oss-fuzz/Dockerfile](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/oss-fuzz/Dockerfile) |
| 보안/정책 | 12 | [src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-base.cpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-base.cpp)<br>[src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-base.hpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-base.hpp)<br>[src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-listener.cpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-listener.cpp)<br>[src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-listener.hpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-listener.hpp)<br>[src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-oauth.cpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-oauth.cpp)<br>[src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-oauth.hpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-oauth.hpp) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/src/main.cpp`, `src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/concrt140.dll`, `src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/fmod.dll`.
2. entrypoint를 따라 실행 흐름 확인: `src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/src/main.cpp`, `src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/concrt140.dll`, `src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/fmod.dll`.
3. agent/tool runtime 매핑: `src/prism-live-studio/PRISMLiveStudio/plugins/frontend-plugins/frontend-tools/tool-helpers.hpp`, `src/prism-live-studio/PRISMLiveStudio/obs-ui/context-bar-controls.cpp`, `src/prism-live-studio/PRISMLiveStudio/obs-ui/context-bar-controls.hpp`.
4. retrieval/memory/indexing 확인: `src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/index.md`, `src/prism-live-studio/others/stream-deck/src/html/com.naver.prism.sdPlugin/propertyinspector/index_pi.html`, `src/prism-live-studio/others/stream-deck/src/html/com.naver.prism.sdPlugin/propertyinspector/index.html`.
5. test/eval 파일로 동작 검증: `src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/CMakeLists.txt`, `src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSErrorCodeTransformTool.cpp`, `src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSErrorCodeTransformTool.h`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 C++, README.md, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
