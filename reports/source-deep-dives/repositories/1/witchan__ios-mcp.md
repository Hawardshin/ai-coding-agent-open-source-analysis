# witchan/ios-mcp 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

iOS MCP: MCP management tool for jailbroken iPhones, enabling developers and AI agents to inspect and control devices.

## 요약

- 조사 단위: `sources/witchan__ios-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 283 files, 48 directories, depth score 83, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 mcp=ios-mcp.plist, prefs/entry/ios-mcp.plist, postman/ios-mcp_runner_all_examples.json이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | witchan/ios-mcp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Objective-C |
| Stars | 567 |
| Forks | 79 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/witchan__ios-mcp](../../../../sources/witchan__ios-mcp) |
| 기존 보고서 | [reports/global-trending/repositories/witchan__ios-mcp.md](../../../global-trending/repositories/witchan__ios-mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 283 / 48 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | AppSync, assets, mcp-ldid, mcp-logreader, mcp-root, mcp-roothelper, postman, prefs, screenshots, scripts, third_party |
| 상위 확장자 | .h: 172, (none): 29, .m: 26, .plist: 13, .md: 11, .png: 6, .json: 4, .1: 3, .html: 3, .x: 3, .a: 2, .c: 2 |
| 소스 패턴 | agent/tool runtime, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| AppSync | source boundary | 1 |
| assets | top-level component | 1 |
| mcp-ldid | top-level component | 1 |
| mcp-logreader | top-level component | 1 |
| mcp-root | top-level component | 1 |
| mcp-roothelper | top-level component | 1 |
| postman | top-level component | 1 |
| prefs | top-level component | 1 |
| screenshots | top-level component | 1 |
| scripts | top-level component | 1 |
| third_party | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | after-stage | make after-stage |
| utility | Makefile | after-install | make after-install |


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
| mcp | [ios-mcp.plist](../../../../sources/witchan__ios-mcp/ios-mcp.plist) | mcp signal |
| mcp | [prefs/entry/ios-mcp.plist](../../../../sources/witchan__ios-mcp/prefs/entry/ios-mcp.plist) | mcp signal |
| mcp | [postman/ios-mcp_runner_all_examples.json](../../../../sources/witchan__ios-mcp/postman/ios-mcp_runner_all_examples.json) | mcp signal |
| mcp | [postman/ios-mcp_runner_safe.json](../../../../sources/witchan__ios-mcp/postman/ios-mcp_runner_safe.json) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/witchan__ios-mcp/AGENTS.md) | agentRuntime signal |
| config | [Makefile](../../../../sources/witchan__ios-mcp/Makefile) | config signal |
| config | [third_party/ldid/Makefile](../../../../sources/witchan__ios-mcp/third_party/ldid/Makefile) | config signal |
| config | [mcp-roothelper/Makefile](../../../../sources/witchan__ios-mcp/mcp-roothelper/Makefile) | config signal |
| config | [mcp-root/Makefile](../../../../sources/witchan__ios-mcp/mcp-root/Makefile) | config signal |
| ci | [third_party/ldid/.github/workflows/build.yml](../../../../sources/witchan__ios-mcp/third_party/ldid/.github/workflows/build.yml) | ci support |
| eval | [third_party/procursus-sdk/iphoneos-arm64/usr/include/openssl/self_test.h](../../../../sources/witchan__ios-mcp/third_party/procursus-sdk/iphoneos-arm64/usr/include/openssl/self_test.h) | eval support |
| eval | [third_party/procursus-sdk/iphoneos-arm64/usr/include/openssl/trace.h](../../../../sources/witchan__ios-mcp/third_party/procursus-sdk/iphoneos-arm64/usr/include/openssl/trace.h) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 1 | [AGENTS.md](../../../../sources/witchan__ios-mcp/AGENTS.md) |
| mcp | 26 | [ios-mcp.plist](../../../../sources/witchan__ios-mcp/ios-mcp.plist)<br>[prefs/entry/ios-mcp.plist](../../../../sources/witchan__ios-mcp/prefs/entry/ios-mcp.plist)<br>[postman/ios-mcp_runner_all_examples.json](../../../../sources/witchan__ios-mcp/postman/ios-mcp_runner_all_examples.json)<br>[postman/ios-mcp_runner_safe.json](../../../../sources/witchan__ios-mcp/postman/ios-mcp_runner_safe.json)<br>[postman/ios-mcp.postman_collection.json](../../../../sources/witchan__ios-mcp/postman/ios-mcp.postman_collection.json)<br>[postman/ios-mcp.postman_environment.json](../../../../sources/witchan__ios-mcp/postman/ios-mcp.postman_environment.json)<br>[mcp-roothelper/main.m](../../../../sources/witchan__ios-mcp/mcp-roothelper/main.m)<br>[mcp-roothelper/Makefile](../../../../sources/witchan__ios-mcp/mcp-roothelper/Makefile) |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 2 | [third_party/procursus-sdk/iphoneos-arm64/usr/include/openssl/self_test.h](../../../../sources/witchan__ios-mcp/third_party/procursus-sdk/iphoneos-arm64/usr/include/openssl/self_test.h)<br>[third_party/procursus-sdk/iphoneos-arm64/usr/include/openssl/trace.h](../../../../sources/witchan__ios-mcp/third_party/procursus-sdk/iphoneos-arm64/usr/include/openssl/trace.h) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [third_party/ldid/.github/workflows/build.yml](../../../../sources/witchan__ios-mcp/third_party/ldid/.github/workflows/build.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [AGENTS.md](../../../../sources/witchan__ios-mcp/AGENTS.md) |
| docs | 9 | [README_EN.md](../../../../sources/witchan__ios-mcp/README_EN.md)<br>[README.md](../../../../sources/witchan__ios-mcp/README.md)<br>[third_party/ldid/README.md](../../../../sources/witchan__ios-mcp/third_party/ldid/README.md)<br>[third_party/ldid/docs/ldid.1](../../../../sources/witchan__ios-mcp/third_party/ldid/docs/ldid.1)<br>[third_party/ldid/docs/ldid.zh_CN.1](../../../../sources/witchan__ios-mcp/third_party/ldid/docs/ldid.zh_CN.1)<br>[third_party/ldid/docs/ldid.zh_TW.1](../../../../sources/witchan__ios-mcp/third_party/ldid/docs/ldid.zh_TW.1)<br>[postman/README.md](../../../../sources/witchan__ios-mcp/postman/README.md)<br>[AppSync/README.md](../../../../sources/witchan__ios-mcp/AppSync/README.md) |
| config | 12 | [Makefile](../../../../sources/witchan__ios-mcp/Makefile)<br>[third_party/ldid/Makefile](../../../../sources/witchan__ios-mcp/third_party/ldid/Makefile)<br>[mcp-roothelper/Makefile](../../../../sources/witchan__ios-mcp/mcp-roothelper/Makefile)<br>[mcp-root/Makefile](../../../../sources/witchan__ios-mcp/mcp-root/Makefile)<br>[mcp-logreader/Makefile](../../../../sources/witchan__ios-mcp/mcp-logreader/Makefile)<br>[mcp-ldid/Makefile](../../../../sources/witchan__ios-mcp/mcp-ldid/Makefile)<br>[AppSync/Makefile](../../../../sources/witchan__ios-mcp/AppSync/Makefile)<br>[AppSync/pkg-actions/Makefile](../../../../sources/witchan__ios-mcp/AppSync/pkg-actions/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 2 | [third_party/procursus-sdk/iphoneos-arm64/usr/include/openssl/self_test.h](../../../../sources/witchan__ios-mcp/third_party/procursus-sdk/iphoneos-arm64/usr/include/openssl/self_test.h)<br>[third_party/procursus-sdk/iphoneos-arm64/usr/include/openssl/trace.h](../../../../sources/witchan__ios-mcp/third_party/procursus-sdk/iphoneos-arm64/usr/include/openssl/trace.h) |
| CI workflow | 1 | [third_party/ldid/.github/workflows/build.yml](../../../../sources/witchan__ios-mcp/third_party/ldid/.github/workflows/build.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/witchan__ios-mcp/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `ios-mcp.plist`, `prefs/entry/ios-mcp.plist`, `postman/ios-mcp_runner_all_examples.json`.
2. agent/tool runtime 매핑: `AGENTS.md`.
3. test/eval 파일로 동작 검증: `third_party/procursus-sdk/iphoneos-arm64/usr/include/openssl/self_test.h`, `third_party/procursus-sdk/iphoneos-arm64/usr/include/openssl/trace.h`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 iOS MCP MCP management tool for jailbroken iPhones, enabling developers and AI agents to inspect and control devices.. 핵심 구조 신호는 Objective-C, Makefile, README.md, AGENTS.md, LICENSE, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
