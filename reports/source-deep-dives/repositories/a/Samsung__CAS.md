# Samsung/CAS 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Code Aware Services (CAS) is a set of tools for extracting information from a (especially large) source code trees. It consists of Build Awareness Service (BAS) and Function/Type database (FTDB). BAS is a tool for extracting information how particular S/W image is created from ongoing builds. FTDB transforms predefined source code information (like information about functions and types) into easily accessible format (like JSON) which can be used by a number of applications.

## 요약

- 조사 단위: `sources/Samsung__CAS` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 573 files, 142 directories, depth score 105, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

데이터/벡터 플랫폼 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 retrieval=vscode-extensions/packages/webview/src/lib/index.ts, vscode-extensions/packages/vscode-variables/src/index.ts, vscode-extensions/packages/types/src/index.ts이고, 의존성 단서는 mcp, fastapi, pydantic, click, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Samsung/CAS |
| 주제 | 데이터/벡터 플랫폼 / 데이터/벡터 플랫폼 |
| Region | korea |
| Language | C++ |
| Stars | 62 |
| Forks | 11 |
| License | NOASSERTION |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Samsung__CAS](../../../../sources/Samsung__CAS) |
| 기존 보고서 | [reports/korea-trending/repositories/Samsung__CAS.md](../../../korea-trending/repositories/Samsung__CAS.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 573 / 142 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | bas, clang-proc, client, cmake, docs, examples, ftdb, kflat, rust, tests, tools, tracer, typings, vscode-extensions |
| 상위 확장자 | .ts: 109, (none): 55, .c: 54, .rs: 49, .py: 48, .cpp: 45, .json: 39, .svelte: 32, .md: 23, .h: 22, .txt: 16, .js: 12 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| client | source boundary | 10 |
| docs | documentation surface | 9 |
| tests | validation surface | 5 |
| bas | top-level component | 1 |
| clang-proc | top-level component | 1 |
| cmake | top-level component | 1 |
| examples | top-level component | 1 |
| ftdb | top-level component | 1 |
| kflat | top-level component | 1 |
| rust | top-level component | 1 |
| tools | top-level component | 1 |
| tracer | top-level component | 1 |
| typings | top-level component | 1 |
| vscode-extensions | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | cas | cas |
| serve-dev | pyproject.toml | cas_server | cas_server |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | fastapi |
| developerSurface | click |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [vscode-extensions/packages/webview/src/lib/index.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/webview/src/lib/index.ts) | retrieval signal |
| retrieval | [vscode-extensions/packages/vscode-variables/src/index.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/vscode-variables/src/index.ts) | retrieval signal |
| retrieval | [vscode-extensions/packages/types/src/index.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/types/src/index.ts) | retrieval signal |
| retrieval | [vscode-extensions/packages/telemetry/src/index.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/telemetry/src/index.ts) | retrieval signal |
| entrypoints | [vscode-extensions/packages/webview/src/app.css](../../../../sources/Samsung__CAS/vscode-extensions/packages/webview/src/app.css) | entrypoints signal |
| entrypoints | [vscode-extensions/packages/webview/src/app.d.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/webview/src/app.d.ts) | entrypoints signal |
| entrypoints | [vscode-extensions/packages/webview/src/app.html](../../../../sources/Samsung__CAS/vscode-extensions/packages/webview/src/app.html) | entrypoints signal |
| config | [Cargo.toml](../../../../sources/Samsung__CAS/Cargo.toml) | config signal |
| config | [pyproject.toml](../../../../sources/Samsung__CAS/pyproject.toml) | config signal |
| config | [requirements.txt](../../../../sources/Samsung__CAS/requirements.txt) | config signal |
| config | [vscode-extensions/package.json](../../../../sources/Samsung__CAS/vscode-extensions/package.json) | config signal |
| eval | [vscode-extensions/extensions/p4/.vscode-test.mjs](../../../../sources/Samsung__CAS/vscode-extensions/extensions/p4/.vscode-test.mjs) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 19 | [vscode-extensions/packages/webview/src/app.css](../../../../sources/Samsung__CAS/vscode-extensions/packages/webview/src/app.css)<br>[vscode-extensions/packages/webview/src/app.d.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/webview/src/app.d.ts)<br>[vscode-extensions/packages/webview/src/app.html](../../../../sources/Samsung__CAS/vscode-extensions/packages/webview/src/app.html)<br>[vscode-extensions/packages/vscode-variables/src/index.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/vscode-variables/src/index.ts)<br>[vscode-extensions/packages/types/src/index.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/types/src/index.ts)<br>[vscode-extensions/packages/telemetry/src/index.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/telemetry/src/index.ts)<br>[vscode-extensions/packages/manifest/src/index.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/manifest/src/index.ts)<br>[vscode-extensions/packages/logs/src/index.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/logs/src/index.ts) |
| agentRuntime | 6 | [vscode-extensions/packages/webview/src/hooks.server.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/webview/src/hooks.server.ts)<br>[vscode-extensions/packages/webview/src/hooks.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/webview/src/hooks.ts)<br>[tools/nfsdb_compare.py](../../../../sources/Samsung__CAS/tools/nfsdb_compare.py)<br>[tools/virtual_environment/img_build.sh](../../../../sources/Samsung__CAS/tools/virtual_environment/img_build.sh)<br>[tools/virtual_environment/README.md](../../../../sources/Samsung__CAS/tools/virtual_environment/README.md)<br>[tools/bash_completion/cas_completion.sh](../../../../sources/Samsung__CAS/tools/bash_completion/cas_completion.sh) |
| mcp | 3 | [cas_mcp.py](../../../../sources/Samsung__CAS/cas_mcp.py)<br>[client/mcp/bas.py](../../../../sources/Samsung__CAS/client/mcp/bas.py)<br>[client/mcp/common.py](../../../../sources/Samsung__CAS/client/mcp/common.py) |
| retrieval | 14 | [vscode-extensions/packages/webview/src/lib/index.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/webview/src/lib/index.ts)<br>[vscode-extensions/packages/vscode-variables/src/index.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/vscode-variables/src/index.ts)<br>[vscode-extensions/packages/types/src/index.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/types/src/index.ts)<br>[vscode-extensions/packages/telemetry/src/index.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/telemetry/src/index.ts)<br>[vscode-extensions/packages/manifest/src/index.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/manifest/src/index.ts)<br>[vscode-extensions/packages/logs/src/index.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/logs/src/index.ts)<br>[vscode-extensions/packages/http/src/index.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/http/src/index.ts)<br>[vscode-extensions/packages/helpers/src/index.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/helpers/src/index.ts) |
| spec | 1 | [requirements.txt](../../../../sources/Samsung__CAS/requirements.txt) |
| eval | 32 | [vscode-extensions/extensions/p4/.vscode-test.mjs](../../../../sources/Samsung__CAS/vscode-extensions/extensions/p4/.vscode-test.mjs)<br>[vscode-extensions/extensions/p4/src/test/extension.test.ts](../../../../sources/Samsung__CAS/vscode-extensions/extensions/p4/src/test/extension.test.ts)<br>[tracer/tests/thread_name/comm_pthread.c](../../../../sources/Samsung__CAS/tracer/tests/thread_name/comm_pthread.c)<br>[tracer/tests/thread_name/comm.c](../../../../sources/Samsung__CAS/tracer/tests/thread_name/comm.c)<br>[tracer/tests/open/multiple_opens.c](../../../../sources/Samsung__CAS/tracer/tests/open/multiple_opens.c)<br>[tracer/tests/ignore_opens/build.sh](../../../../sources/Samsung__CAS/tracer/tests/ignore_opens/build.sh)<br>[tracer/tests/ignore_opens/invalid_close.c](../../../../sources/Samsung__CAS/tracer/tests/ignore_opens/invalid_close.c)<br>[tracer/tests/ignore_opens/mixed_opens_interleaved.c](../../../../sources/Samsung__CAS/tracer/tests/ignore_opens/mixed_opens_interleaved.c) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 20 | [README.md](../../../../sources/Samsung__CAS/README.md)<br>[vscode-extensions/README.md](../../../../sources/Samsung__CAS/vscode-extensions/README.md)<br>[vscode-extensions/packages/webview/README.md](../../../../sources/Samsung__CAS/vscode-extensions/packages/webview/README.md)<br>[vscode-extensions/extensions/p4/README.md](../../../../sources/Samsung__CAS/vscode-extensions/extensions/p4/README.md)<br>[vscode-extensions/extensions/cas/README.md](../../../../sources/Samsung__CAS/vscode-extensions/extensions/cas/README.md)<br>[vscode-extensions/docs/bas.md](../../../../sources/Samsung__CAS/vscode-extensions/docs/bas.md)<br>[vscode-extensions/docs/manifest.md](../../../../sources/Samsung__CAS/vscode-extensions/docs/manifest.md)<br>[vscode-extensions/docs/subtree.md](../../../../sources/Samsung__CAS/vscode-extensions/docs/subtree.md) |
| config | 40 | [Cargo.toml](../../../../sources/Samsung__CAS/Cargo.toml)<br>[pyproject.toml](../../../../sources/Samsung__CAS/pyproject.toml)<br>[requirements.txt](../../../../sources/Samsung__CAS/requirements.txt)<br>[vscode-extensions/package.json](../../../../sources/Samsung__CAS/vscode-extensions/package.json)<br>[vscode-extensions/pnpm-workspace.yaml](../../../../sources/Samsung__CAS/vscode-extensions/pnpm-workspace.yaml)<br>[vscode-extensions/turbo.json](../../../../sources/Samsung__CAS/vscode-extensions/turbo.json)<br>[vscode-extensions/packages/webview/package.json](../../../../sources/Samsung__CAS/vscode-extensions/packages/webview/package.json)<br>[vscode-extensions/packages/webview/tsconfig.json](../../../../sources/Samsung__CAS/vscode-extensions/packages/webview/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 32 | [vscode-extensions/extensions/p4/.vscode-test.mjs](../../../../sources/Samsung__CAS/vscode-extensions/extensions/p4/.vscode-test.mjs)<br>[vscode-extensions/extensions/p4/src/test/extension.test.ts](../../../../sources/Samsung__CAS/vscode-extensions/extensions/p4/src/test/extension.test.ts)<br>[tracer/tests/thread_name/comm_pthread.c](../../../../sources/Samsung__CAS/tracer/tests/thread_name/comm_pthread.c)<br>[tracer/tests/thread_name/comm.c](../../../../sources/Samsung__CAS/tracer/tests/thread_name/comm.c)<br>[tracer/tests/open/multiple_opens.c](../../../../sources/Samsung__CAS/tracer/tests/open/multiple_opens.c)<br>[tracer/tests/ignore_opens/build.sh](../../../../sources/Samsung__CAS/tracer/tests/ignore_opens/build.sh) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `vscode-extensions/packages/webview/src/lib/index.ts`, `vscode-extensions/packages/vscode-variables/src/index.ts`, `vscode-extensions/packages/types/src/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `vscode-extensions/packages/webview/src/app.css`, `vscode-extensions/packages/webview/src/app.d.ts`, `vscode-extensions/packages/webview/src/app.html`.
3. agent/tool runtime 매핑: `vscode-extensions/packages/webview/src/hooks.server.ts`, `vscode-extensions/packages/webview/src/hooks.ts`, `tools/nfsdb_compare.py`.
4. retrieval/memory/indexing 확인: `vscode-extensions/packages/webview/src/lib/index.ts`, `vscode-extensions/packages/vscode-variables/src/index.ts`, `vscode-extensions/packages/types/src/index.ts`.
5. test/eval 파일로 동작 검증: `vscode-extensions/extensions/p4/.vscode-test.mjs`, `vscode-extensions/extensions/p4/src/test/extension.test.ts`, `tracer/tests/thread_name/comm_pthread.c`.

## 기존 레포 인사이트

데이터/벡터 플랫폼 관점에서 Code Aware Services CAS is a set of tools for extracting information from a especially large source code trees. It consi. 핵심 구조 신호는 C++, pyproject.toml, requirements.txt, Cargo.toml, README.md, LICENSE이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 데이터/벡터 플랫폼 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
