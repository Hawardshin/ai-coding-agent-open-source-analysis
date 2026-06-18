# naver/sling 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

naver/sling

## 요약

- 조사 단위: `sources/naver__sling` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 15,000 files, 920 directories, depth score 100, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=webkit/Tools/TestResultServer/main.py, webkit/Tools/Scripts/webkitpy/tool/main.py, webkit/Tools/Scripts/webkitpy/tool/servers/data/rebaselineserver/main.js이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/sling |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | C++ |
| Stars | 119 |
| Forks | 5 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__sling](../../../../sources/naver__sling) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__sling.md](../../../korea-trending/repositories/naver__sling.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 15000 / 920 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | docs, release, webkit |
| 상위 확장자 | .h: 5721, .cpp: 3735, .mm: 890, .idl: 724, .js: 673, .py: 614, .svg: 334, (none): 323, .png: 296, .wav: 242, .css: 209, .html: 163 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 1 |
| release | top-level component | 1 |
| webkit | source boundary | 1 |


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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 13 | [webkit/Tools/TestResultServer/main.py](../../../../sources/naver__sling/webkit/Tools/TestResultServer/main.py)<br>[webkit/Tools/Scripts/webkitpy/tool/main.py](../../../../sources/naver__sling/webkit/Tools/Scripts/webkitpy/tool/main.py)<br>[webkit/Tools/Scripts/webkitpy/tool/servers/data/rebaselineserver/main.js](../../../../sources/naver__sling/webkit/Tools/Scripts/webkitpy/tool/servers/data/rebaselineserver/main.js)<br>[webkit/Tools/Scripts/webkitpy/test/main.py](../../../../sources/naver__sling/webkit/Tools/Scripts/webkitpy/test/main.py)<br>[webkit/Tools/Scripts/webkitpy/style/main.py](../../../../sources/naver__sling/webkit/Tools/Scripts/webkitpy/style/main.py)<br>[webkit/Tools/Scripts/webkitpy/replay/main.py](../../../../sources/naver__sling/webkit/Tools/Scripts/webkitpy/replay/main.py)<br>[webkit/Tools/Scripts/webkitpy/inspector/main.py](../../../../sources/naver__sling/webkit/Tools/Scripts/webkitpy/inspector/main.py)<br>[webkit/Tools/Scripts/webkitpy/codegen/main.py](../../../../sources/naver__sling/webkit/Tools/Scripts/webkitpy/codegen/main.py) |
| agentRuntime | 2418 | [webkit/WebKitLibraries/win/tools/scripts/auto-version.pl](../../../../sources/naver__sling/webkit/WebKitLibraries/win/tools/scripts/auto-version.pl)<br>[webkit/WebKitLibraries/win/tools/scripts/COPYRIGHT-END-YEAR](../../../../sources/naver__sling/webkit/WebKitLibraries/win/tools/scripts/COPYRIGHT-END-YEAR)<br>[webkit/WebKitLibraries/win/tools/scripts/feature-defines.pl](../../../../sources/naver__sling/webkit/WebKitLibraries/win/tools/scripts/feature-defines.pl)<br>[webkit/WebKitLibraries/win/tools/scripts/VERSION](../../../../sources/naver__sling/webkit/WebKitLibraries/win/tools/scripts/VERSION)<br>[webkit/WebKitLibraries/win/tools/scripts/version-stamp.pl](../../../../sources/naver__sling/webkit/WebKitLibraries/win/tools/scripts/version-stamp.pl)<br>[webkit/Tools/.gitattributes](../../../../sources/naver__sling/webkit/Tools/.gitattributes)<br>[webkit/Tools/.gitignore](../../../../sources/naver__sling/webkit/Tools/.gitignore)<br>[webkit/Tools/ChangeLog](../../../../sources/naver__sling/webkit/Tools/ChangeLog) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 23 | [webkit/Tools/win/record-memory/main.cpp](../../../../sources/naver__sling/webkit/Tools/win/record-memory/main.cpp)<br>[webkit/Tools/win/record-memory/record-memory.vcxproj](../../../../sources/naver__sling/webkit/Tools/win/record-memory/record-memory.vcxproj)<br>[webkit/Tools/win/record-memory/record-memory.vcxproj.filters](../../../../sources/naver__sling/webkit/Tools/win/record-memory/record-memory.vcxproj.filters)<br>[webkit/Tools/win/record-memory/record-memoryCommon.props](../../../../sources/naver__sling/webkit/Tools/win/record-memory/record-memoryCommon.props)<br>[webkit/Tools/win/record-memory/record-memoryDebug.props](../../../../sources/naver__sling/webkit/Tools/win/record-memory/record-memoryDebug.props)<br>[webkit/Tools/win/record-memory/record-memoryDebugWinCairo.props](../../../../sources/naver__sling/webkit/Tools/win/record-memory/record-memoryDebugWinCairo.props)<br>[webkit/Tools/win/record-memory/record-memoryProduction.props](../../../../sources/naver__sling/webkit/Tools/win/record-memory/record-memoryProduction.props)<br>[webkit/Tools/win/record-memory/record-memoryRelease.props](../../../../sources/naver__sling/webkit/Tools/win/record-memory/record-memoryRelease.props) |
| spec | 0 | 명확하지 않음 |
| eval | 726 | [webkit/Tools/Tracing/SystemTracePoints.plist](../../../../sources/naver__sling/webkit/Tools/Tracing/SystemTracePoints.plist)<br>[webkit/Tools/TestWebKitAPI/Test.h](../../../../sources/naver__sling/webkit/Tools/TestWebKitAPI/Test.h)<br>[webkit/Tools/TestWebKitAPI/Tests/CustomProtocolsSyncXHRTest.mm](../../../../sources/naver__sling/webkit/Tools/TestWebKitAPI/Tests/CustomProtocolsSyncXHRTest.mm)<br>[webkit/Tools/TestWebKitAPI/Tests/WTF/AtomicString.cpp](../../../../sources/naver__sling/webkit/Tools/TestWebKitAPI/Tests/WTF/AtomicString.cpp)<br>[webkit/Tools/TestWebKitAPI/Tests/WTF/BloomFilter.cpp](../../../../sources/naver__sling/webkit/Tools/TestWebKitAPI/Tests/WTF/BloomFilter.cpp)<br>[webkit/Tools/TestWebKitAPI/Tests/WTF/CheckedArithmeticOperations.cpp](../../../../sources/naver__sling/webkit/Tools/TestWebKitAPI/Tests/WTF/CheckedArithmeticOperations.cpp)<br>[webkit/Tools/TestWebKitAPI/Tests/WTF/Condition.cpp](../../../../sources/naver__sling/webkit/Tools/TestWebKitAPI/Tests/WTF/Condition.cpp)<br>[webkit/Tools/TestWebKitAPI/Tests/WTF/CrossThreadTask.cpp](../../../../sources/naver__sling/webkit/Tools/TestWebKitAPI/Tests/WTF/CrossThreadTask.cpp) |
| security | 14 | [webkit/WebKitLibraries/win/include/libxslt/security.h](../../../../sources/naver__sling/webkit/WebKitLibraries/win/include/libxslt/security.h)<br>[webkit/Tools/EWSTools/configure-svn-auth.sh](../../../../sources/naver__sling/webkit/Tools/EWSTools/configure-svn-auth.sh)<br>[webkit/Tools/BuildSlaveSupport/build.webkit.org-config/committer_auth_unittest.py](../../../../sources/naver__sling/webkit/Tools/BuildSlaveSupport/build.webkit.org-config/committer_auth_unittest.py)<br>[webkit/Tools/BuildSlaveSupport/build.webkit.org-config/committer_auth.py](../../../../sources/naver__sling/webkit/Tools/BuildSlaveSupport/build.webkit.org-config/committer_auth.py)<br>[webkit/Source/WebKit2/UIProcess/API/efl/ewk_auth_request_private.h](../../../../sources/naver__sling/webkit/Source/WebKit2/UIProcess/API/efl/ewk_auth_request_private.h)<br>[webkit/Source/WebKit2/UIProcess/API/efl/ewk_auth_request.cpp](../../../../sources/naver__sling/webkit/Source/WebKit2/UIProcess/API/efl/ewk_auth_request.cpp)<br>[webkit/Source/WebKit2/UIProcess/API/efl/ewk_auth_request.h](../../../../sources/naver__sling/webkit/Source/WebKit2/UIProcess/API/efl/ewk_auth_request.h)<br>[webkit/Source/WebKit2/UIProcess/API/efl/ewk_navigation_policy_decision_private.h](../../../../sources/naver__sling/webkit/Source/WebKit2/UIProcess/API/efl/ewk_navigation_policy_decision_private.h) |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 17 | [README.md](../../../../sources/naver__sling/README.md)<br>[webkit/README.md](../../../../sources/naver__sling/webkit/README.md)<br>[webkit/Tools/TestResultServer/static-dashboards/README.dygraph.txt](../../../../sources/naver__sling/webkit/Tools/TestResultServer/static-dashboards/README.dygraph.txt)<br>[webkit/Tools/TestResultServer/static-dashboards/README.webtreemap.txt](../../../../sources/naver__sling/webkit/Tools/TestResultServer/static-dashboards/README.webtreemap.txt)<br>[webkit/Tools/Scripts/webkitpy/benchmark_runner/README.md](../../../../sources/naver__sling/webkit/Tools/Scripts/webkitpy/benchmark_runner/README.md)<br>[webkit/Tools/mangleme/README](../../../../sources/naver__sling/webkit/Tools/mangleme/README)<br>[webkit/Tools/iExploder/iexploder-1.7.2/README.txt](../../../../sources/naver__sling/webkit/Tools/iExploder/iexploder-1.7.2/README.txt)<br>[webkit/Tools/iExploder/iexploder-1.3.2/README.txt](../../../../sources/naver__sling/webkit/Tools/iExploder/iexploder-1.3.2/README.txt) |
| config | 18 | [webkit/Makefile](../../../../sources/naver__sling/webkit/Makefile)<br>[webkit/WebKitLibraries/Makefile](../../../../sources/naver__sling/webkit/WebKitLibraries/Makefile)<br>[webkit/Tools/Makefile](../../../../sources/naver__sling/webkit/Tools/Makefile)<br>[webkit/Tools/WebKitTestRunner/Makefile](../../../../sources/naver__sling/webkit/Tools/WebKitTestRunner/Makefile)<br>[webkit/Tools/WebKitLauncher/Makefile](../../../../sources/naver__sling/webkit/Tools/WebKitLauncher/Makefile)<br>[webkit/Tools/TestWebKitAPI/Makefile](../../../../sources/naver__sling/webkit/Tools/TestWebKitAPI/Makefile)<br>[webkit/Tools/MiniBrowser/Makefile](../../../../sources/naver__sling/webkit/Tools/MiniBrowser/Makefile)<br>[webkit/Tools/mangleme/Makefile](../../../../sources/naver__sling/webkit/Tools/mangleme/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 726 | [webkit/Tools/Tracing/SystemTracePoints.plist](../../../../sources/naver__sling/webkit/Tools/Tracing/SystemTracePoints.plist)<br>[webkit/Tools/TestWebKitAPI/Test.h](../../../../sources/naver__sling/webkit/Tools/TestWebKitAPI/Test.h)<br>[webkit/Tools/TestWebKitAPI/Tests/CustomProtocolsSyncXHRTest.mm](../../../../sources/naver__sling/webkit/Tools/TestWebKitAPI/Tests/CustomProtocolsSyncXHRTest.mm)<br>[webkit/Tools/TestWebKitAPI/Tests/WTF/AtomicString.cpp](../../../../sources/naver__sling/webkit/Tools/TestWebKitAPI/Tests/WTF/AtomicString.cpp)<br>[webkit/Tools/TestWebKitAPI/Tests/WTF/BloomFilter.cpp](../../../../sources/naver__sling/webkit/Tools/TestWebKitAPI/Tests/WTF/BloomFilter.cpp)<br>[webkit/Tools/TestWebKitAPI/Tests/WTF/CheckedArithmeticOperations.cpp](../../../../sources/naver__sling/webkit/Tools/TestWebKitAPI/Tests/WTF/CheckedArithmeticOperations.cpp) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 14 | [webkit/WebKitLibraries/win/include/libxslt/security.h](../../../../sources/naver__sling/webkit/WebKitLibraries/win/include/libxslt/security.h)<br>[webkit/Tools/EWSTools/configure-svn-auth.sh](../../../../sources/naver__sling/webkit/Tools/EWSTools/configure-svn-auth.sh)<br>[webkit/Tools/BuildSlaveSupport/build.webkit.org-config/committer_auth_unittest.py](../../../../sources/naver__sling/webkit/Tools/BuildSlaveSupport/build.webkit.org-config/committer_auth_unittest.py)<br>[webkit/Tools/BuildSlaveSupport/build.webkit.org-config/committer_auth.py](../../../../sources/naver__sling/webkit/Tools/BuildSlaveSupport/build.webkit.org-config/committer_auth.py)<br>[webkit/Source/WebKit2/UIProcess/API/efl/ewk_auth_request_private.h](../../../../sources/naver__sling/webkit/Source/WebKit2/UIProcess/API/efl/ewk_auth_request_private.h)<br>[webkit/Source/WebKit2/UIProcess/API/efl/ewk_auth_request.cpp](../../../../sources/naver__sling/webkit/Source/WebKit2/UIProcess/API/efl/ewk_auth_request.cpp) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 큰 레포라 15000개 파일에서 스캔이 잘림 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `webkit/Tools/TestResultServer/main.py`, `webkit/Tools/Scripts/webkitpy/tool/main.py`, `webkit/Tools/Scripts/webkitpy/tool/servers/data/rebaselineserver/main.js`.
2. entrypoint를 따라 실행 흐름 확인: `webkit/Tools/TestResultServer/main.py`, `webkit/Tools/Scripts/webkitpy/tool/main.py`, `webkit/Tools/Scripts/webkitpy/tool/servers/data/rebaselineserver/main.js`.
3. agent/tool runtime 매핑: `webkit/WebKitLibraries/win/tools/scripts/auto-version.pl`, `webkit/WebKitLibraries/win/tools/scripts/COPYRIGHT-END-YEAR`, `webkit/WebKitLibraries/win/tools/scripts/feature-defines.pl`.
4. retrieval/memory/indexing 확인: `webkit/Tools/win/record-memory/main.cpp`, `webkit/Tools/win/record-memory/record-memory.vcxproj`, `webkit/Tools/win/record-memory/record-memory.vcxproj.filters`.
5. test/eval 파일로 동작 검증: `webkit/Tools/Tracing/SystemTracePoints.plist`, `webkit/Tools/TestWebKitAPI/Test.h`, `webkit/Tools/TestWebKitAPI/Tests/CustomProtocolsSyncXHRTest.mm`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 C++, README.md, docs, spec-artifacts이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
