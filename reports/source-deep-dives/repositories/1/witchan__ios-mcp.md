# witchan/ios-mcp Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

iOS MCP: MCP management tool for jailbroken iPhones, enabling developers and AI agents to inspect and control devices.

## 요약

- 조사 단위: `sources/witchan__ios-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 283 files, 48 directories, depth score 89, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 mcp=ios-mcp.plist, prefs/entry/ios-mcp.plist, postman/ios-mcp_runner_all_examples.json이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | witchan/ios-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Objective-C |
| Stars | 567 |
| Forks | 79 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/witchan__ios-mcp](../../../../sources/witchan__ios-mcp) |
| Existing report | [reports/global-trending/repositories/witchan__ios-mcp.md](../../../global-trending/repositories/witchan__ios-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 283 / 48 |
| Max observed depth | 7 |
| Top directories | AppSync, assets, mcp-ldid, mcp-logreader, mcp-root, mcp-roothelper, postman, prefs, screenshots, scripts, third_party |
| Top extensions | .h: 172, (none): 29, .m: 26, .plist: 13, .md: 11, .png: 6, .json: 4, .1: 3, .html: 3, .x: 3, .a: 2, .c: 2 |
| Source patterns | agent/tool runtime, eval/test harness |

### Components

| Component | Role | Signal count |
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


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | after-stage | make after-stage |
| utility | Makefile | after-install | make after-install |


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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 1 | [AGENTS.md](../../../../sources/witchan__ios-mcp/AGENTS.md) |
| mcp | 26 | [ios-mcp.plist](../../../../sources/witchan__ios-mcp/ios-mcp.plist)<br>[prefs/entry/ios-mcp.plist](../../../../sources/witchan__ios-mcp/prefs/entry/ios-mcp.plist)<br>[postman/ios-mcp_runner_all_examples.json](../../../../sources/witchan__ios-mcp/postman/ios-mcp_runner_all_examples.json)<br>[postman/ios-mcp_runner_safe.json](../../../../sources/witchan__ios-mcp/postman/ios-mcp_runner_safe.json)<br>[postman/ios-mcp.postman_collection.json](../../../../sources/witchan__ios-mcp/postman/ios-mcp.postman_collection.json)<br>[postman/ios-mcp.postman_environment.json](../../../../sources/witchan__ios-mcp/postman/ios-mcp.postman_environment.json)<br>[mcp-roothelper/main.m](../../../../sources/witchan__ios-mcp/mcp-roothelper/main.m)<br>[mcp-roothelper/Makefile](../../../../sources/witchan__ios-mcp/mcp-roothelper/Makefile) |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 2 | [third_party/procursus-sdk/iphoneos-arm64/usr/include/openssl/self_test.h](../../../../sources/witchan__ios-mcp/third_party/procursus-sdk/iphoneos-arm64/usr/include/openssl/self_test.h)<br>[third_party/procursus-sdk/iphoneos-arm64/usr/include/openssl/trace.h](../../../../sources/witchan__ios-mcp/third_party/procursus-sdk/iphoneos-arm64/usr/include/openssl/trace.h) |
| security | 0 | not obvious |
| ci | 1 | [third_party/ldid/.github/workflows/build.yml](../../../../sources/witchan__ios-mcp/third_party/ldid/.github/workflows/build.yml) |
| container | 0 | not obvious |
| instruction | 1 | [AGENTS.md](../../../../sources/witchan__ios-mcp/AGENTS.md) |
| docs | 9 | [README_EN.md](../../../../sources/witchan__ios-mcp/README_EN.md)<br>[README.md](../../../../sources/witchan__ios-mcp/README.md)<br>[third_party/ldid/README.md](../../../../sources/witchan__ios-mcp/third_party/ldid/README.md)<br>[third_party/ldid/docs/ldid.1](../../../../sources/witchan__ios-mcp/third_party/ldid/docs/ldid.1)<br>[third_party/ldid/docs/ldid.zh_CN.1](../../../../sources/witchan__ios-mcp/third_party/ldid/docs/ldid.zh_CN.1)<br>[third_party/ldid/docs/ldid.zh_TW.1](../../../../sources/witchan__ios-mcp/third_party/ldid/docs/ldid.zh_TW.1)<br>[postman/README.md](../../../../sources/witchan__ios-mcp/postman/README.md)<br>[AppSync/README.md](../../../../sources/witchan__ios-mcp/AppSync/README.md) |
| config | 12 | [Makefile](../../../../sources/witchan__ios-mcp/Makefile)<br>[third_party/ldid/Makefile](../../../../sources/witchan__ios-mcp/third_party/ldid/Makefile)<br>[mcp-roothelper/Makefile](../../../../sources/witchan__ios-mcp/mcp-roothelper/Makefile)<br>[mcp-root/Makefile](../../../../sources/witchan__ios-mcp/mcp-root/Makefile)<br>[mcp-logreader/Makefile](../../../../sources/witchan__ios-mcp/mcp-logreader/Makefile)<br>[mcp-ldid/Makefile](../../../../sources/witchan__ios-mcp/mcp-ldid/Makefile)<br>[AppSync/Makefile](../../../../sources/witchan__ios-mcp/AppSync/Makefile)<br>[AppSync/pkg-actions/Makefile](../../../../sources/witchan__ios-mcp/AppSync/pkg-actions/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 2 | [third_party/procursus-sdk/iphoneos-arm64/usr/include/openssl/self_test.h](../../../../sources/witchan__ios-mcp/third_party/procursus-sdk/iphoneos-arm64/usr/include/openssl/self_test.h)<br>[third_party/procursus-sdk/iphoneos-arm64/usr/include/openssl/trace.h](../../../../sources/witchan__ios-mcp/third_party/procursus-sdk/iphoneos-arm64/usr/include/openssl/trace.h) |
| CI workflows | 1 | [third_party/ldid/.github/workflows/build.yml](../../../../sources/witchan__ios-mcp/third_party/ldid/.github/workflows/build.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/witchan__ios-mcp/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `ios-mcp.plist`, `prefs/entry/ios-mcp.plist`, `postman/ios-mcp_runner_all_examples.json`.
2. Map agent/tool runtime through: `AGENTS.md`.
3. Verify behavior through test/eval files: `third_party/procursus-sdk/iphoneos-arm64/usr/include/openssl/self_test.h`, `third_party/procursus-sdk/iphoneos-arm64/usr/include/openssl/trace.h`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 iOS MCP MCP management tool for jailbroken iPhones, enabling developers and AI agents to inspect and control devices.. 핵심 구조 신호는 Objective-C, Makefile, README.md, AGENTS.md, LICENSE, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
