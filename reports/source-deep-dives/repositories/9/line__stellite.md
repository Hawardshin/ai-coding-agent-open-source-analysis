# line/stellite Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Stellite project is a client library and server application that offers an easy way to develop, build, and implement client/server running primarily over the QUIC protocol developed by Google as part of the Chromium project.

## 요약

- 조사 단위: `sources/line__stellite` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 315 files, 104 directories, depth score 99, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=tools/build.py, modified_files/tools/vim/chromium.ycm_extra_conf.py, modified_files/tools/vim/ninja_output.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | line/stellite |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | C++ |
| Stars | 475 |
| Forks | 78 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/line__stellite](../../../../sources/line__stellite) |
| Existing report | [reports/korea-trending/repositories/line__stellite.md](../../../korea-trending/repositories/line__stellite.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 315 / 104 |
| Max observed depth | 11 |
| Top directories | example, licenses, modified_files, node_binder, node_modified_files, res, stellite, test_tools, tools |
| Top extensions | .cc: 97, .h: 95, .png: 11, .js: 10, .md: 10, .xml: 9, .gn: 7, (none): 7, .jar: 5, .plist: 5, .cpp: 4, .json: 4 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| example | top-level component | 1 |
| licenses | top-level component | 1 |
| modified_files | top-level component | 1 |
| node_binder | top-level component | 1 |
| node_modified_files | top-level component | 1 |
| res | top-level component | 1 |
| stellite | top-level component | 1 |
| test_tools | validation surface | 1 |
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
| agentRuntime | [tools/build.py](../../../../sources/line__stellite/tools/build.py) | agentRuntime signal |
| agentRuntime | [modified_files/tools/vim/chromium.ycm_extra_conf.py](../../../../sources/line__stellite/modified_files/tools/vim/chromium.ycm_extra_conf.py) | agentRuntime signal |
| agentRuntime | [modified_files/tools/vim/ninja_output.py](../../../../sources/line__stellite/modified_files/tools/vim/ninja_output.py) | agentRuntime signal |
| entrypoints | [test_tools/node/bin/darwin.sh](../../../../sources/line__stellite/test_tools/node/bin/darwin.sh) | entrypoints signal |
| entrypoints | [test_tools/node/bin/install.py](../../../../sources/line__stellite/test_tools/node/bin/install.py) | entrypoints signal |
| entrypoints | [test_tools/node/bin/linux.sh](../../../../sources/line__stellite/test_tools/node/bin/linux.sh) | entrypoints signal |
| entrypoints | [stellite/bin/run_all_unittests.cc](../../../../sources/line__stellite/stellite/bin/run_all_unittests.cc) | entrypoints signal |
| config | [test_tools/node/package.json](../../../../sources/line__stellite/test_tools/node/package.json) | config signal |
| config | [node_binder/package.json](../../../../sources/line__stellite/node_binder/package.json) | config signal |
| eval | [test_tools/http_stability_test.cc](../../../../sources/line__stellite/test_tools/http_stability_test.cc) | eval support |
| eval | [test_tools/README](../../../../sources/line__stellite/test_tools/README) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 11 | [test_tools/node/bin/darwin.sh](../../../../sources/line__stellite/test_tools/node/bin/darwin.sh)<br>[test_tools/node/bin/install.py](../../../../sources/line__stellite/test_tools/node/bin/install.py)<br>[test_tools/node/bin/linux.sh](../../../../sources/line__stellite/test_tools/node/bin/linux.sh)<br>[stellite/bin/run_all_unittests.cc](../../../../sources/line__stellite/stellite/bin/run_all_unittests.cc)<br>[stellite/bin/simple_chunked_upload_bin.cc](../../../../sources/line__stellite/stellite/bin/simple_chunked_upload_bin.cc)<br>[stellite/bin/simple_stellite_quic_server_bin.cc](../../../../sources/line__stellite/stellite/bin/simple_stellite_quic_server_bin.cc)<br>[stellite/bin/stellite_http_client_bin.cc](../../../../sources/line__stellite/stellite/bin/stellite_http_client_bin.cc)<br>[stellite/bin/stellite_http_session_bin.cc](../../../../sources/line__stellite/stellite/bin/stellite_http_session_bin.cc) |
| agentRuntime | 3 | [tools/build.py](../../../../sources/line__stellite/tools/build.py)<br>[modified_files/tools/vim/chromium.ycm_extra_conf.py](../../../../sources/line__stellite/modified_files/tools/vim/chromium.ycm_extra_conf.py)<br>[modified_files/tools/vim/ninja_output.py](../../../../sources/line__stellite/modified_files/tools/vim/ninja_output.py) |
| mcp | 0 | not obvious |
| retrieval | 3 | [stellite/server/test_tools/http_chunk_stream.cc](../../../../sources/line__stellite/stellite/server/test_tools/http_chunk_stream.cc)<br>[stellite/server/test_tools/http_chunk_stream.h](../../../../sources/line__stellite/stellite/server/test_tools/http_chunk_stream.h)<br>[node_binder/index.js](../../../../sources/line__stellite/node_binder/index.js) |
| spec | 2 | [res/architecture_client.jpg](../../../../sources/line__stellite/res/architecture_client.jpg)<br>[res/architecture_stellite.png](../../../../sources/line__stellite/res/architecture_stellite.png) |
| eval | 40 | [test_tools/http_stability_test.cc](../../../../sources/line__stellite/test_tools/http_stability_test.cc)<br>[test_tools/README](../../../../sources/line__stellite/test_tools/README)<br>[test_tools/res/data.deflate](../../../../sources/line__stellite/test_tools/res/data.deflate)<br>[test_tools/res/data.gzip](../../../../sources/line__stellite/test_tools/res/data.gzip)<br>[test_tools/res/example.com.cacert.key](../../../../sources/line__stellite/test_tools/res/example.com.cacert.key)<br>[test_tools/res/example.com.cacert.pem](../../../../sources/line__stellite/test_tools/res/example.com.cacert.pem)<br>[test_tools/res/example.com.cacert.req](../../../../sources/line__stellite/test_tools/res/example.com.cacert.req)<br>[test_tools/res/example.com.cert.key](../../../../sources/line__stellite/test_tools/res/example.com.cert.key) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 5 | [README.md](../../../../sources/line__stellite/README.md)<br>[test_tools/README](../../../../sources/line__stellite/test_tools/README)<br>[example/MyStelliteTest/README.ko.md](../../../../sources/line__stellite/example/MyStelliteTest/README.ko.md)<br>[example/MyStelliteTest/README.md](../../../../sources/line__stellite/example/MyStelliteTest/README.md)<br>[example/client/README.md](../../../../sources/line__stellite/example/client/README.md) |
| config | 2 | [test_tools/node/package.json](../../../../sources/line__stellite/test_tools/node/package.json)<br>[node_binder/package.json](../../../../sources/line__stellite/node_binder/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 40 | [test_tools/http_stability_test.cc](../../../../sources/line__stellite/test_tools/http_stability_test.cc)<br>[test_tools/README](../../../../sources/line__stellite/test_tools/README)<br>[test_tools/res/data.deflate](../../../../sources/line__stellite/test_tools/res/data.deflate)<br>[test_tools/res/data.gzip](../../../../sources/line__stellite/test_tools/res/data.gzip)<br>[test_tools/res/example.com.cacert.key](../../../../sources/line__stellite/test_tools/res/example.com.cacert.key)<br>[test_tools/res/example.com.cacert.pem](../../../../sources/line__stellite/test_tools/res/example.com.cacert.pem) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `tools/build.py`, `modified_files/tools/vim/chromium.ycm_extra_conf.py`, `modified_files/tools/vim/ninja_output.py`.
2. Trace execution through entrypoints: `test_tools/node/bin/darwin.sh`, `test_tools/node/bin/install.py`, `test_tools/node/bin/linux.sh`.
3. Map agent/tool runtime through: `tools/build.py`, `modified_files/tools/vim/chromium.ycm_extra_conf.py`, `modified_files/tools/vim/ninja_output.py`.
4. Inspect retrieval/memory/indexing through: `stellite/server/test_tools/http_chunk_stream.cc`, `stellite/server/test_tools/http_chunk_stream.h`, `node_binder/index.js`.
5. Verify behavior through test/eval files: `test_tools/http_stability_test.cc`, `test_tools/README`, `test_tools/res/data.deflate`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Stellite project is a client library and server application that offers an easy way to develop, build, and implement cli. 핵심 구조 신호는 C++, README.md, LICENSE, tests, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 ci signal not obvious, needs deeper structural scan입니다.
