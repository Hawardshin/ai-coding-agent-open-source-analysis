# line/stellite 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Stellite project is a client library and server application that offers an easy way to develop, build, and implement client/server running primarily over the QUIC protocol developed by Google as part of the Chromium project.

## 요약

- 조사 단위: `sources/line__stellite` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 315 files, 104 directories, depth score 93, key references 11개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=tools/build.py, modified_files/tools/vim/chromium.ycm_extra_conf.py, modified_files/tools/vim/ninja_output.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | line/stellite |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | C++ |
| Stars | 475 |
| Forks | 78 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/line__stellite](../../../../sources/line__stellite) |
| 기존 보고서 | [reports/korea-trending/repositories/line__stellite.md](../../../korea-trending/repositories/line__stellite.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 315 / 104 |
| 관측 최대 깊이 | 11 |
| 상위 디렉터리 | example, licenses, modified_files, node_binder, node_modified_files, res, stellite, test_tools, tools |
| 상위 확장자 | .cc: 97, .h: 95, .png: 11, .js: 10, .md: 10, .xml: 9, .gn: 7, (none): 7, .jar: 5, .plist: 5, .cpp: 4, .json: 4 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 11 | [test_tools/node/bin/darwin.sh](../../../../sources/line__stellite/test_tools/node/bin/darwin.sh)<br>[test_tools/node/bin/install.py](../../../../sources/line__stellite/test_tools/node/bin/install.py)<br>[test_tools/node/bin/linux.sh](../../../../sources/line__stellite/test_tools/node/bin/linux.sh)<br>[stellite/bin/run_all_unittests.cc](../../../../sources/line__stellite/stellite/bin/run_all_unittests.cc)<br>[stellite/bin/simple_chunked_upload_bin.cc](../../../../sources/line__stellite/stellite/bin/simple_chunked_upload_bin.cc)<br>[stellite/bin/simple_stellite_quic_server_bin.cc](../../../../sources/line__stellite/stellite/bin/simple_stellite_quic_server_bin.cc)<br>[stellite/bin/stellite_http_client_bin.cc](../../../../sources/line__stellite/stellite/bin/stellite_http_client_bin.cc)<br>[stellite/bin/stellite_http_session_bin.cc](../../../../sources/line__stellite/stellite/bin/stellite_http_session_bin.cc) |
| agentRuntime | 3 | [tools/build.py](../../../../sources/line__stellite/tools/build.py)<br>[modified_files/tools/vim/chromium.ycm_extra_conf.py](../../../../sources/line__stellite/modified_files/tools/vim/chromium.ycm_extra_conf.py)<br>[modified_files/tools/vim/ninja_output.py](../../../../sources/line__stellite/modified_files/tools/vim/ninja_output.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 3 | [stellite/server/test_tools/http_chunk_stream.cc](../../../../sources/line__stellite/stellite/server/test_tools/http_chunk_stream.cc)<br>[stellite/server/test_tools/http_chunk_stream.h](../../../../sources/line__stellite/stellite/server/test_tools/http_chunk_stream.h)<br>[node_binder/index.js](../../../../sources/line__stellite/node_binder/index.js) |
| spec | 2 | [res/architecture_client.jpg](../../../../sources/line__stellite/res/architecture_client.jpg)<br>[res/architecture_stellite.png](../../../../sources/line__stellite/res/architecture_stellite.png) |
| eval | 40 | [test_tools/http_stability_test.cc](../../../../sources/line__stellite/test_tools/http_stability_test.cc)<br>[test_tools/README](../../../../sources/line__stellite/test_tools/README)<br>[test_tools/res/data.deflate](../../../../sources/line__stellite/test_tools/res/data.deflate)<br>[test_tools/res/data.gzip](../../../../sources/line__stellite/test_tools/res/data.gzip)<br>[test_tools/res/example.com.cacert.key](../../../../sources/line__stellite/test_tools/res/example.com.cacert.key)<br>[test_tools/res/example.com.cacert.pem](../../../../sources/line__stellite/test_tools/res/example.com.cacert.pem)<br>[test_tools/res/example.com.cacert.req](../../../../sources/line__stellite/test_tools/res/example.com.cacert.req)<br>[test_tools/res/example.com.cert.key](../../../../sources/line__stellite/test_tools/res/example.com.cert.key) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 5 | [README.md](../../../../sources/line__stellite/README.md)<br>[test_tools/README](../../../../sources/line__stellite/test_tools/README)<br>[example/MyStelliteTest/README.ko.md](../../../../sources/line__stellite/example/MyStelliteTest/README.ko.md)<br>[example/MyStelliteTest/README.md](../../../../sources/line__stellite/example/MyStelliteTest/README.md)<br>[example/client/README.md](../../../../sources/line__stellite/example/client/README.md) |
| config | 2 | [test_tools/node/package.json](../../../../sources/line__stellite/test_tools/node/package.json)<br>[node_binder/package.json](../../../../sources/line__stellite/node_binder/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 40 | [test_tools/http_stability_test.cc](../../../../sources/line__stellite/test_tools/http_stability_test.cc)<br>[test_tools/README](../../../../sources/line__stellite/test_tools/README)<br>[test_tools/res/data.deflate](../../../../sources/line__stellite/test_tools/res/data.deflate)<br>[test_tools/res/data.gzip](../../../../sources/line__stellite/test_tools/res/data.gzip)<br>[test_tools/res/example.com.cacert.key](../../../../sources/line__stellite/test_tools/res/example.com.cacert.key)<br>[test_tools/res/example.com.cacert.pem](../../../../sources/line__stellite/test_tools/res/example.com.cacert.pem) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `tools/build.py`, `modified_files/tools/vim/chromium.ycm_extra_conf.py`, `modified_files/tools/vim/ninja_output.py`.
2. entrypoint를 따라 실행 흐름 확인: `test_tools/node/bin/darwin.sh`, `test_tools/node/bin/install.py`, `test_tools/node/bin/linux.sh`.
3. agent/tool runtime 매핑: `tools/build.py`, `modified_files/tools/vim/chromium.ycm_extra_conf.py`, `modified_files/tools/vim/ninja_output.py`.
4. retrieval/memory/indexing 확인: `stellite/server/test_tools/http_chunk_stream.cc`, `stellite/server/test_tools/http_chunk_stream.h`, `node_binder/index.js`.
5. test/eval 파일로 동작 검증: `test_tools/http_stability_test.cc`, `test_tools/README`, `test_tools/res/data.deflate`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Stellite project is a client library and server application that offers an easy way to develop, build, and implement cli. 핵심 구조 신호는 C++, README.md, LICENSE, tests, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
