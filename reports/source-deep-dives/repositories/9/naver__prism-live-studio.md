# naver/prism-live-studio Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

naver/prism-live-studio

## 요약

- 조사 단위: `sources/naver__prism-live-studio` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 6,908 files, 616 directories, depth score 114, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/src/main.cpp, src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/concrt140.dll, src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/fmod.dll이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/prism-live-studio |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | C++ |
| Stars | 109 |
| Forks | 34 |
| License | GPL-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver__prism-live-studio](../../../../sources/naver__prism-live-studio) |
| Existing report | [reports/korea-trending/repositories/naver__prism-live-studio.md](../../../korea-trending/repositories/naver__prism-live-studio.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 6908 / 616 |
| Max observed depth | 13 |
| Top directories | src |
| Top extensions | .svg: 2253, .h: 1029, .cpp: 674, .png: 581, .ini: 520, .hpp: 184, .ui: 176, .css: 165, .c: 139, .txt: 139, (none): 133, .link: 124 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 207 |


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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 56 | [src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/src/main.cpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/src/main.cpp)<br>[src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/concrt140.dll](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/concrt140.dll)<br>[src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/fmod.dll](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/fmod.dll)<br>[src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/fmodex.dll](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/fmodex.dll)<br>[src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/fmodexL.dll](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/fmodexL.dll)<br>[src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/fmodL.dll](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/fmodL.dll)<br>[src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/FreeImage.dll](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/FreeImage.dll)<br>[src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/msvcp140.dll](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/msvcp140.dll) |
| agentRuntime | 13 | [src/prism-live-studio/PRISMLiveStudio/plugins/frontend-plugins/frontend-tools/tool-helpers.hpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/frontend-plugins/frontend-tools/tool-helpers.hpp)<br>[src/prism-live-studio/PRISMLiveStudio/obs-ui/context-bar-controls.cpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/obs-ui/context-bar-controls.cpp)<br>[src/prism-live-studio/PRISMLiveStudio/obs-ui/context-bar-controls.hpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/obs-ui/context-bar-controls.hpp)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/tools/checksum-icc.c](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/tools/checksum-icc.c)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/tools/cvtcolor.c](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/tools/cvtcolor.c)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/tools/genpng.c](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/tools/genpng.c)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/tools/intgamma.sh](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/tools/intgamma.sh)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/tools/makesRGB.c](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/tools/makesRGB.c) |
| mcp | 0 | not obvious |
| retrieval | 20 | [src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/index.md](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/index.md)<br>[src/prism-live-studio/others/stream-deck/src/html/com.naver.prism.sdPlugin/propertyinspector/index_pi.html](../../../../sources/naver__prism-live-studio/src/prism-live-studio/others/stream-deck/src/html/com.naver.prism.sdPlugin/propertyinspector/index_pi.html)<br>[src/prism-live-studio/others/stream-deck/src/html/com.naver.prism.sdPlugin/propertyinspector/index.html](../../../../sources/naver__prism-live-studio/src/prism-live-studio/others/stream-deck/src/html/com.naver.prism.sdPlugin/propertyinspector/index.html)<br>[src/prism-live-studio/others/stream-deck/src/html/com.naver.prism.sdPlugin/propertyinspector/js/index_pi.js](../../../../sources/naver__prism-live-studio/src/prism-live-studio/others/stream-deck/src/html/com.naver.prism.sdPlugin/propertyinspector/js/index_pi.js)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/testpngs/crashers/huge_bKGD_chunk.png](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/testpngs/crashers/huge_bKGD_chunk.png)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/testpngs/crashers/huge_cHRM_chunk.png](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/testpngs/crashers/huge_cHRM_chunk.png)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/testpngs/crashers/huge_eXIf_chunk.png](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/testpngs/crashers/huge_eXIf_chunk.png)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/testpngs/crashers/huge_gAMA_chunk.png](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/testpngs/crashers/huge_gAMA_chunk.png) |
| spec | 0 | not obvious |
| eval | 108 | [src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/CMakeLists.txt](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/CMakeLists.txt)<br>[src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSErrorCodeTransformTool.cpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSErrorCodeTransformTool.cpp)<br>[src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSErrorCodeTransformTool.h](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSErrorCodeTransformTool.h)<br>[src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSErrorCodeTransformTool.ui](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSErrorCodeTransformTool.ui)<br>[src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSNetworkHookTool.cpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSNetworkHookTool.cpp)<br>[src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSNetworkHookTool.hpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSNetworkHookTool.hpp)<br>[src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSNetworkHookTool.ui](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSNetworkHookTool.ui)<br>[src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSNetworkMonitorTool.cpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSNetworkMonitorTool.cpp) |
| security | 12 | [src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-base.cpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-base.cpp)<br>[src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-base.hpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-base.hpp)<br>[src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-listener.cpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-listener.cpp)<br>[src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-listener.hpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-listener.hpp)<br>[src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-oauth.cpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-oauth.cpp)<br>[src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-oauth.hpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-oauth.hpp)<br>[src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-restream.cpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-restream.cpp)<br>[src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-restream.hpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-restream.hpp) |
| ci | 48 | [src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/.shellcheckrc](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/.shellcheckrc)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_lint.sh](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_lint.sh)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_shellify.sh](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_shellify.sh)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_verify_cmake.sh](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_verify_cmake.sh)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_verify_configure.sh](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_verify_configure.sh)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_verify_makefiles.sh](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_verify_makefiles.sh)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_verify_version.sh](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_verify_version.sh)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/LICENSE_MIT.txt](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/LICENSE_MIT.txt) |
| container | 1 | [src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/oss-fuzz/Dockerfile](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/oss-fuzz/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 460 | [README.md](../../../../sources/naver__prism-live-studio/README.md)<br>[src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/README.md](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/README.md)<br>[src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/avatars.png](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/avatars.png)<br>[src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/binary_formats.md](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/binary_formats.md)<br>[src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/Doxyfile](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/Doxyfile)<br>[src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/faq.md](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/faq.md)<br>[src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/index.md](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/index.md)<br>[src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/json.gif](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/json.gif) |
| config | 1 | [src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/Makefile](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 108 | [src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/CMakeLists.txt](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/CMakeLists.txt)<br>[src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSErrorCodeTransformTool.cpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSErrorCodeTransformTool.cpp)<br>[src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSErrorCodeTransformTool.h](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSErrorCodeTransformTool.h)<br>[src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSErrorCodeTransformTool.ui](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSErrorCodeTransformTool.ui)<br>[src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSNetworkHookTool.cpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSNetworkHookTool.cpp)<br>[src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSNetworkHookTool.hpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSNetworkHookTool.hpp) |
| CI workflows | 48 | [src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/.shellcheckrc](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/.shellcheckrc)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_lint.sh](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_lint.sh)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_shellify.sh](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_shellify.sh)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_verify_cmake.sh](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_verify_cmake.sh)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_verify_configure.sh](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_verify_configure.sh)<br>[src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_verify_makefiles.sh](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/ci/ci_verify_makefiles.sh) |
| Containers / deploy | 1 | [src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/oss-fuzz/Dockerfile](../../../../sources/naver__prism-live-studio/src/common-libs/third-party/QtApng/src/3rdparty/libpng/src/contrib/oss-fuzz/Dockerfile) |
| Security / policy | 12 | [src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-base.cpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-base.cpp)<br>[src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-base.hpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-base.hpp)<br>[src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-listener.cpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-listener.cpp)<br>[src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-listener.hpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-listener.hpp)<br>[src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-oauth.cpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-oauth.cpp)<br>[src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-oauth.hpp](../../../../sources/naver__prism-live-studio/src/prism-live-studio/PRISMLiveStudio/obs-ui/auth-oauth.hpp) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/src/main.cpp`, `src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/concrt140.dll`, `src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/fmod.dll`.
2. Trace execution through entrypoints: `src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/src/main.cpp`, `src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/concrt140.dll`, `src/prism-live-studio/PRISMLiveStudio/plugins/source/obs-spout2-plugin/deps/Spout2/SPOUTSDK/SpoutLibrary/SpoutLibraryExample/bin/fmod.dll`.
3. Map agent/tool runtime through: `src/prism-live-studio/PRISMLiveStudio/plugins/frontend-plugins/frontend-tools/tool-helpers.hpp`, `src/prism-live-studio/PRISMLiveStudio/obs-ui/context-bar-controls.cpp`, `src/prism-live-studio/PRISMLiveStudio/obs-ui/context-bar-controls.hpp`.
4. Inspect retrieval/memory/indexing through: `src/prism-live-studio/PRISMLiveStudio/plugins/source/prism-stream-deck/Vendor/json/doc/index.md`, `src/prism-live-studio/others/stream-deck/src/html/com.naver.prism.sdPlugin/propertyinspector/index_pi.html`, `src/prism-live-studio/others/stream-deck/src/html/com.naver.prism.sdPlugin/propertyinspector/index.html`.
5. Verify behavior through test/eval files: `src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/CMakeLists.txt`, `src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSErrorCodeTransformTool.cpp`, `src/prism-live-studio/PRISMLiveStudio/prism-ui/test-tools/PLSErrorCodeTransformTool.h`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 C++, README.md, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
