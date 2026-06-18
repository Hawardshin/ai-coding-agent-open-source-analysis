# naver/sling Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

naver/sling

## 요약

- 조사 단위: `sources/naver__sling` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 15,000 files, 920 directories, depth score 106, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=webkit/Tools/TestResultServer/main.py, webkit/Tools/Scripts/webkitpy/tool/main.py, webkit/Tools/Scripts/webkitpy/tool/servers/data/rebaselineserver/main.js이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/sling |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | C++ |
| Stars | 119 |
| Forks | 5 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver__sling](../../../../sources/naver__sling) |
| Existing report | [reports/korea-trending/repositories/naver__sling.md](../../../korea-trending/repositories/naver__sling.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 15000 / 920 |
| Max observed depth | 10 |
| Top directories | docs, release, webkit |
| Top extensions | .h: 5721, .cpp: 3735, .mm: 890, .idl: 724, .js: 673, .py: 614, .svg: 334, (none): 323, .png: 296, .wav: 242, .css: 209, .html: 163 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 1 |
| release | top-level component | 1 |
| webkit | source boundary | 1 |


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
| entrypoints | [webkit/Tools/TestResultServer/main.py](../../../../sources/naver__sling/webkit/Tools/TestResultServer/main.py) | entrypoints signal |
| entrypoints | [webkit/Tools/Scripts/webkitpy/tool/main.py](../../../../sources/naver__sling/webkit/Tools/Scripts/webkitpy/tool/main.py) | entrypoints signal |
| entrypoints | [webkit/Tools/Scripts/webkitpy/tool/servers/data/rebaselineserver/main.js](../../../../sources/naver__sling/webkit/Tools/Scripts/webkitpy/tool/servers/data/rebaselineserver/main.js) | entrypoints signal |
| entrypoints | [webkit/Tools/Scripts/webkitpy/test/main.py](../../../../sources/naver__sling/webkit/Tools/Scripts/webkitpy/test/main.py) | entrypoints signal |
| config | [webkit/Makefile](../../../../sources/naver__sling/webkit/Makefile) | config signal |
| config | [webkit/WebKitLibraries/Makefile](../../../../sources/naver__sling/webkit/WebKitLibraries/Makefile) | config signal |
| config | [webkit/Tools/Makefile](../../../../sources/naver__sling/webkit/Tools/Makefile) | config signal |
| config | [webkit/Tools/WebKitTestRunner/Makefile](../../../../sources/naver__sling/webkit/Tools/WebKitTestRunner/Makefile) | config signal |
| docs | [README.md](../../../../sources/naver__sling/README.md) | docs signal |
| docs | [webkit/README.md](../../../../sources/naver__sling/webkit/README.md) | docs signal |
| docs | [webkit/Tools/TestResultServer/static-dashboards/README.dygraph.txt](../../../../sources/naver__sling/webkit/Tools/TestResultServer/static-dashboards/README.dygraph.txt) | docs signal |
| docs | [webkit/Tools/TestResultServer/static-dashboards/README.webtreemap.txt](../../../../sources/naver__sling/webkit/Tools/TestResultServer/static-dashboards/README.webtreemap.txt) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 13 | [webkit/Tools/TestResultServer/main.py](../../../../sources/naver__sling/webkit/Tools/TestResultServer/main.py)<br>[webkit/Tools/Scripts/webkitpy/tool/main.py](../../../../sources/naver__sling/webkit/Tools/Scripts/webkitpy/tool/main.py)<br>[webkit/Tools/Scripts/webkitpy/tool/servers/data/rebaselineserver/main.js](../../../../sources/naver__sling/webkit/Tools/Scripts/webkitpy/tool/servers/data/rebaselineserver/main.js)<br>[webkit/Tools/Scripts/webkitpy/test/main.py](../../../../sources/naver__sling/webkit/Tools/Scripts/webkitpy/test/main.py)<br>[webkit/Tools/Scripts/webkitpy/style/main.py](../../../../sources/naver__sling/webkit/Tools/Scripts/webkitpy/style/main.py)<br>[webkit/Tools/Scripts/webkitpy/replay/main.py](../../../../sources/naver__sling/webkit/Tools/Scripts/webkitpy/replay/main.py)<br>[webkit/Tools/Scripts/webkitpy/inspector/main.py](../../../../sources/naver__sling/webkit/Tools/Scripts/webkitpy/inspector/main.py)<br>[webkit/Tools/Scripts/webkitpy/codegen/main.py](../../../../sources/naver__sling/webkit/Tools/Scripts/webkitpy/codegen/main.py) |
| agentRuntime | 2418 | [webkit/WebKitLibraries/win/tools/scripts/auto-version.pl](../../../../sources/naver__sling/webkit/WebKitLibraries/win/tools/scripts/auto-version.pl)<br>[webkit/WebKitLibraries/win/tools/scripts/COPYRIGHT-END-YEAR](../../../../sources/naver__sling/webkit/WebKitLibraries/win/tools/scripts/COPYRIGHT-END-YEAR)<br>[webkit/WebKitLibraries/win/tools/scripts/feature-defines.pl](../../../../sources/naver__sling/webkit/WebKitLibraries/win/tools/scripts/feature-defines.pl)<br>[webkit/WebKitLibraries/win/tools/scripts/VERSION](../../../../sources/naver__sling/webkit/WebKitLibraries/win/tools/scripts/VERSION)<br>[webkit/WebKitLibraries/win/tools/scripts/version-stamp.pl](../../../../sources/naver__sling/webkit/WebKitLibraries/win/tools/scripts/version-stamp.pl)<br>[webkit/Tools/.gitattributes](../../../../sources/naver__sling/webkit/Tools/.gitattributes)<br>[webkit/Tools/.gitignore](../../../../sources/naver__sling/webkit/Tools/.gitignore)<br>[webkit/Tools/ChangeLog](../../../../sources/naver__sling/webkit/Tools/ChangeLog) |
| mcp | 0 | not obvious |
| retrieval | 23 | [webkit/Tools/win/record-memory/main.cpp](../../../../sources/naver__sling/webkit/Tools/win/record-memory/main.cpp)<br>[webkit/Tools/win/record-memory/record-memory.vcxproj](../../../../sources/naver__sling/webkit/Tools/win/record-memory/record-memory.vcxproj)<br>[webkit/Tools/win/record-memory/record-memory.vcxproj.filters](../../../../sources/naver__sling/webkit/Tools/win/record-memory/record-memory.vcxproj.filters)<br>[webkit/Tools/win/record-memory/record-memoryCommon.props](../../../../sources/naver__sling/webkit/Tools/win/record-memory/record-memoryCommon.props)<br>[webkit/Tools/win/record-memory/record-memoryDebug.props](../../../../sources/naver__sling/webkit/Tools/win/record-memory/record-memoryDebug.props)<br>[webkit/Tools/win/record-memory/record-memoryDebugWinCairo.props](../../../../sources/naver__sling/webkit/Tools/win/record-memory/record-memoryDebugWinCairo.props)<br>[webkit/Tools/win/record-memory/record-memoryProduction.props](../../../../sources/naver__sling/webkit/Tools/win/record-memory/record-memoryProduction.props)<br>[webkit/Tools/win/record-memory/record-memoryRelease.props](../../../../sources/naver__sling/webkit/Tools/win/record-memory/record-memoryRelease.props) |
| spec | 0 | not obvious |
| eval | 726 | [webkit/Tools/Tracing/SystemTracePoints.plist](../../../../sources/naver__sling/webkit/Tools/Tracing/SystemTracePoints.plist)<br>[webkit/Tools/TestWebKitAPI/Test.h](../../../../sources/naver__sling/webkit/Tools/TestWebKitAPI/Test.h)<br>[webkit/Tools/TestWebKitAPI/Tests/CustomProtocolsSyncXHRTest.mm](../../../../sources/naver__sling/webkit/Tools/TestWebKitAPI/Tests/CustomProtocolsSyncXHRTest.mm)<br>[webkit/Tools/TestWebKitAPI/Tests/WTF/AtomicString.cpp](../../../../sources/naver__sling/webkit/Tools/TestWebKitAPI/Tests/WTF/AtomicString.cpp)<br>[webkit/Tools/TestWebKitAPI/Tests/WTF/BloomFilter.cpp](../../../../sources/naver__sling/webkit/Tools/TestWebKitAPI/Tests/WTF/BloomFilter.cpp)<br>[webkit/Tools/TestWebKitAPI/Tests/WTF/CheckedArithmeticOperations.cpp](../../../../sources/naver__sling/webkit/Tools/TestWebKitAPI/Tests/WTF/CheckedArithmeticOperations.cpp)<br>[webkit/Tools/TestWebKitAPI/Tests/WTF/Condition.cpp](../../../../sources/naver__sling/webkit/Tools/TestWebKitAPI/Tests/WTF/Condition.cpp)<br>[webkit/Tools/TestWebKitAPI/Tests/WTF/CrossThreadTask.cpp](../../../../sources/naver__sling/webkit/Tools/TestWebKitAPI/Tests/WTF/CrossThreadTask.cpp) |
| security | 14 | [webkit/WebKitLibraries/win/include/libxslt/security.h](../../../../sources/naver__sling/webkit/WebKitLibraries/win/include/libxslt/security.h)<br>[webkit/Tools/EWSTools/configure-svn-auth.sh](../../../../sources/naver__sling/webkit/Tools/EWSTools/configure-svn-auth.sh)<br>[webkit/Tools/BuildSlaveSupport/build.webkit.org-config/committer_auth_unittest.py](../../../../sources/naver__sling/webkit/Tools/BuildSlaveSupport/build.webkit.org-config/committer_auth_unittest.py)<br>[webkit/Tools/BuildSlaveSupport/build.webkit.org-config/committer_auth.py](../../../../sources/naver__sling/webkit/Tools/BuildSlaveSupport/build.webkit.org-config/committer_auth.py)<br>[webkit/Source/WebKit2/UIProcess/API/efl/ewk_auth_request_private.h](../../../../sources/naver__sling/webkit/Source/WebKit2/UIProcess/API/efl/ewk_auth_request_private.h)<br>[webkit/Source/WebKit2/UIProcess/API/efl/ewk_auth_request.cpp](../../../../sources/naver__sling/webkit/Source/WebKit2/UIProcess/API/efl/ewk_auth_request.cpp)<br>[webkit/Source/WebKit2/UIProcess/API/efl/ewk_auth_request.h](../../../../sources/naver__sling/webkit/Source/WebKit2/UIProcess/API/efl/ewk_auth_request.h)<br>[webkit/Source/WebKit2/UIProcess/API/efl/ewk_navigation_policy_decision_private.h](../../../../sources/naver__sling/webkit/Source/WebKit2/UIProcess/API/efl/ewk_navigation_policy_decision_private.h) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 17 | [README.md](../../../../sources/naver__sling/README.md)<br>[webkit/README.md](../../../../sources/naver__sling/webkit/README.md)<br>[webkit/Tools/TestResultServer/static-dashboards/README.dygraph.txt](../../../../sources/naver__sling/webkit/Tools/TestResultServer/static-dashboards/README.dygraph.txt)<br>[webkit/Tools/TestResultServer/static-dashboards/README.webtreemap.txt](../../../../sources/naver__sling/webkit/Tools/TestResultServer/static-dashboards/README.webtreemap.txt)<br>[webkit/Tools/Scripts/webkitpy/benchmark_runner/README.md](../../../../sources/naver__sling/webkit/Tools/Scripts/webkitpy/benchmark_runner/README.md)<br>[webkit/Tools/mangleme/README](../../../../sources/naver__sling/webkit/Tools/mangleme/README)<br>[webkit/Tools/iExploder/iexploder-1.7.2/README.txt](../../../../sources/naver__sling/webkit/Tools/iExploder/iexploder-1.7.2/README.txt)<br>[webkit/Tools/iExploder/iexploder-1.3.2/README.txt](../../../../sources/naver__sling/webkit/Tools/iExploder/iexploder-1.3.2/README.txt) |
| config | 18 | [webkit/Makefile](../../../../sources/naver__sling/webkit/Makefile)<br>[webkit/WebKitLibraries/Makefile](../../../../sources/naver__sling/webkit/WebKitLibraries/Makefile)<br>[webkit/Tools/Makefile](../../../../sources/naver__sling/webkit/Tools/Makefile)<br>[webkit/Tools/WebKitTestRunner/Makefile](../../../../sources/naver__sling/webkit/Tools/WebKitTestRunner/Makefile)<br>[webkit/Tools/WebKitLauncher/Makefile](../../../../sources/naver__sling/webkit/Tools/WebKitLauncher/Makefile)<br>[webkit/Tools/TestWebKitAPI/Makefile](../../../../sources/naver__sling/webkit/Tools/TestWebKitAPI/Makefile)<br>[webkit/Tools/MiniBrowser/Makefile](../../../../sources/naver__sling/webkit/Tools/MiniBrowser/Makefile)<br>[webkit/Tools/mangleme/Makefile](../../../../sources/naver__sling/webkit/Tools/mangleme/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 726 | [webkit/Tools/Tracing/SystemTracePoints.plist](../../../../sources/naver__sling/webkit/Tools/Tracing/SystemTracePoints.plist)<br>[webkit/Tools/TestWebKitAPI/Test.h](../../../../sources/naver__sling/webkit/Tools/TestWebKitAPI/Test.h)<br>[webkit/Tools/TestWebKitAPI/Tests/CustomProtocolsSyncXHRTest.mm](../../../../sources/naver__sling/webkit/Tools/TestWebKitAPI/Tests/CustomProtocolsSyncXHRTest.mm)<br>[webkit/Tools/TestWebKitAPI/Tests/WTF/AtomicString.cpp](../../../../sources/naver__sling/webkit/Tools/TestWebKitAPI/Tests/WTF/AtomicString.cpp)<br>[webkit/Tools/TestWebKitAPI/Tests/WTF/BloomFilter.cpp](../../../../sources/naver__sling/webkit/Tools/TestWebKitAPI/Tests/WTF/BloomFilter.cpp)<br>[webkit/Tools/TestWebKitAPI/Tests/WTF/CheckedArithmeticOperations.cpp](../../../../sources/naver__sling/webkit/Tools/TestWebKitAPI/Tests/WTF/CheckedArithmeticOperations.cpp) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 14 | [webkit/WebKitLibraries/win/include/libxslt/security.h](../../../../sources/naver__sling/webkit/WebKitLibraries/win/include/libxslt/security.h)<br>[webkit/Tools/EWSTools/configure-svn-auth.sh](../../../../sources/naver__sling/webkit/Tools/EWSTools/configure-svn-auth.sh)<br>[webkit/Tools/BuildSlaveSupport/build.webkit.org-config/committer_auth_unittest.py](../../../../sources/naver__sling/webkit/Tools/BuildSlaveSupport/build.webkit.org-config/committer_auth_unittest.py)<br>[webkit/Tools/BuildSlaveSupport/build.webkit.org-config/committer_auth.py](../../../../sources/naver__sling/webkit/Tools/BuildSlaveSupport/build.webkit.org-config/committer_auth.py)<br>[webkit/Source/WebKit2/UIProcess/API/efl/ewk_auth_request_private.h](../../../../sources/naver__sling/webkit/Source/WebKit2/UIProcess/API/efl/ewk_auth_request_private.h)<br>[webkit/Source/WebKit2/UIProcess/API/efl/ewk_auth_request.cpp](../../../../sources/naver__sling/webkit/Source/WebKit2/UIProcess/API/efl/ewk_auth_request.cpp) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | large repository scan truncated at 15000 files |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `webkit/Tools/TestResultServer/main.py`, `webkit/Tools/Scripts/webkitpy/tool/main.py`, `webkit/Tools/Scripts/webkitpy/tool/servers/data/rebaselineserver/main.js`.
2. Trace execution through entrypoints: `webkit/Tools/TestResultServer/main.py`, `webkit/Tools/Scripts/webkitpy/tool/main.py`, `webkit/Tools/Scripts/webkitpy/tool/servers/data/rebaselineserver/main.js`.
3. Map agent/tool runtime through: `webkit/WebKitLibraries/win/tools/scripts/auto-version.pl`, `webkit/WebKitLibraries/win/tools/scripts/COPYRIGHT-END-YEAR`, `webkit/WebKitLibraries/win/tools/scripts/feature-defines.pl`.
4. Inspect retrieval/memory/indexing through: `webkit/Tools/win/record-memory/main.cpp`, `webkit/Tools/win/record-memory/record-memory.vcxproj`, `webkit/Tools/win/record-memory/record-memory.vcxproj.filters`.
5. Verify behavior through test/eval files: `webkit/Tools/Tracing/SystemTracePoints.plist`, `webkit/Tools/TestWebKitAPI/Test.h`, `webkit/Tools/TestWebKitAPI/Tests/CustomProtocolsSyncXHRTest.mm`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 C++, README.md, docs, spec-artifacts이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
