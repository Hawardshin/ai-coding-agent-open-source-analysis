# Samsung/CAS Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Code Aware Services (CAS) is a set of tools for extracting information from a (especially large) source code trees. It consists of Build Awareness Service (BAS) and Function/Type database (FTDB). BAS is a tool for extracting information how particular S/W image is created from ongoing builds. FTDB transforms predefined source code information (like information about functions and types) into easily accessible format (like JSON) which can be used by a number of applications.

## 요약

- 조사 단위: `sources/Samsung__CAS` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 573 files, 142 directories, depth score 111, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

데이터/벡터 플랫폼 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 retrieval=vscode-extensions/packages/webview/src/lib/index.ts, vscode-extensions/packages/vscode-variables/src/index.ts, vscode-extensions/packages/types/src/index.ts이고, 의존성 단서는 mcp, fastapi, pydantic, click, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Samsung/CAS |
| Topic | Data and Vector Platforms / 데이터/벡터 플랫폼 |
| Region | korea |
| Language | C++ |
| Stars | 62 |
| Forks | 11 |
| License | NOASSERTION |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/Samsung__CAS](../../../../sources/Samsung__CAS) |
| Existing report | [reports/korea-trending/repositories/Samsung__CAS.md](../../../korea-trending/repositories/Samsung__CAS.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 573 / 142 |
| Max observed depth | 8 |
| Top directories | bas, clang-proc, client, cmake, docs, examples, ftdb, kflat, rust, tests, tools, tracer, typings, vscode-extensions |
| Top extensions | .ts: 109, (none): 55, .c: 54, .rs: 49, .py: 48, .cpp: 45, .json: 39, .svelte: 32, .md: 23, .h: 22, .txt: 16, .js: 12 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
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


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | cas | cas |
| serve-dev | pyproject.toml | cas_server | cas_server |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | fastapi |
| developerSurface | click |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 19 | [vscode-extensions/packages/webview/src/app.css](../../../../sources/Samsung__CAS/vscode-extensions/packages/webview/src/app.css)<br>[vscode-extensions/packages/webview/src/app.d.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/webview/src/app.d.ts)<br>[vscode-extensions/packages/webview/src/app.html](../../../../sources/Samsung__CAS/vscode-extensions/packages/webview/src/app.html)<br>[vscode-extensions/packages/vscode-variables/src/index.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/vscode-variables/src/index.ts)<br>[vscode-extensions/packages/types/src/index.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/types/src/index.ts)<br>[vscode-extensions/packages/telemetry/src/index.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/telemetry/src/index.ts)<br>[vscode-extensions/packages/manifest/src/index.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/manifest/src/index.ts)<br>[vscode-extensions/packages/logs/src/index.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/logs/src/index.ts) |
| agentRuntime | 6 | [vscode-extensions/packages/webview/src/hooks.server.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/webview/src/hooks.server.ts)<br>[vscode-extensions/packages/webview/src/hooks.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/webview/src/hooks.ts)<br>[tools/nfsdb_compare.py](../../../../sources/Samsung__CAS/tools/nfsdb_compare.py)<br>[tools/virtual_environment/img_build.sh](../../../../sources/Samsung__CAS/tools/virtual_environment/img_build.sh)<br>[tools/virtual_environment/README.md](../../../../sources/Samsung__CAS/tools/virtual_environment/README.md)<br>[tools/bash_completion/cas_completion.sh](../../../../sources/Samsung__CAS/tools/bash_completion/cas_completion.sh) |
| mcp | 3 | [cas_mcp.py](../../../../sources/Samsung__CAS/cas_mcp.py)<br>[client/mcp/bas.py](../../../../sources/Samsung__CAS/client/mcp/bas.py)<br>[client/mcp/common.py](../../../../sources/Samsung__CAS/client/mcp/common.py) |
| retrieval | 14 | [vscode-extensions/packages/webview/src/lib/index.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/webview/src/lib/index.ts)<br>[vscode-extensions/packages/vscode-variables/src/index.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/vscode-variables/src/index.ts)<br>[vscode-extensions/packages/types/src/index.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/types/src/index.ts)<br>[vscode-extensions/packages/telemetry/src/index.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/telemetry/src/index.ts)<br>[vscode-extensions/packages/manifest/src/index.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/manifest/src/index.ts)<br>[vscode-extensions/packages/logs/src/index.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/logs/src/index.ts)<br>[vscode-extensions/packages/http/src/index.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/http/src/index.ts)<br>[vscode-extensions/packages/helpers/src/index.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/helpers/src/index.ts) |
| spec | 1 | [requirements.txt](../../../../sources/Samsung__CAS/requirements.txt) |
| eval | 32 | [vscode-extensions/extensions/p4/.vscode-test.mjs](../../../../sources/Samsung__CAS/vscode-extensions/extensions/p4/.vscode-test.mjs)<br>[vscode-extensions/extensions/p4/src/test/extension.test.ts](../../../../sources/Samsung__CAS/vscode-extensions/extensions/p4/src/test/extension.test.ts)<br>[tracer/tests/thread_name/comm_pthread.c](../../../../sources/Samsung__CAS/tracer/tests/thread_name/comm_pthread.c)<br>[tracer/tests/thread_name/comm.c](../../../../sources/Samsung__CAS/tracer/tests/thread_name/comm.c)<br>[tracer/tests/open/multiple_opens.c](../../../../sources/Samsung__CAS/tracer/tests/open/multiple_opens.c)<br>[tracer/tests/ignore_opens/build.sh](../../../../sources/Samsung__CAS/tracer/tests/ignore_opens/build.sh)<br>[tracer/tests/ignore_opens/invalid_close.c](../../../../sources/Samsung__CAS/tracer/tests/ignore_opens/invalid_close.c)<br>[tracer/tests/ignore_opens/mixed_opens_interleaved.c](../../../../sources/Samsung__CAS/tracer/tests/ignore_opens/mixed_opens_interleaved.c) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 20 | [README.md](../../../../sources/Samsung__CAS/README.md)<br>[vscode-extensions/README.md](../../../../sources/Samsung__CAS/vscode-extensions/README.md)<br>[vscode-extensions/packages/webview/README.md](../../../../sources/Samsung__CAS/vscode-extensions/packages/webview/README.md)<br>[vscode-extensions/extensions/p4/README.md](../../../../sources/Samsung__CAS/vscode-extensions/extensions/p4/README.md)<br>[vscode-extensions/extensions/cas/README.md](../../../../sources/Samsung__CAS/vscode-extensions/extensions/cas/README.md)<br>[vscode-extensions/docs/bas.md](../../../../sources/Samsung__CAS/vscode-extensions/docs/bas.md)<br>[vscode-extensions/docs/manifest.md](../../../../sources/Samsung__CAS/vscode-extensions/docs/manifest.md)<br>[vscode-extensions/docs/subtree.md](../../../../sources/Samsung__CAS/vscode-extensions/docs/subtree.md) |
| config | 40 | [Cargo.toml](../../../../sources/Samsung__CAS/Cargo.toml)<br>[pyproject.toml](../../../../sources/Samsung__CAS/pyproject.toml)<br>[requirements.txt](../../../../sources/Samsung__CAS/requirements.txt)<br>[vscode-extensions/package.json](../../../../sources/Samsung__CAS/vscode-extensions/package.json)<br>[vscode-extensions/pnpm-workspace.yaml](../../../../sources/Samsung__CAS/vscode-extensions/pnpm-workspace.yaml)<br>[vscode-extensions/turbo.json](../../../../sources/Samsung__CAS/vscode-extensions/turbo.json)<br>[vscode-extensions/packages/webview/package.json](../../../../sources/Samsung__CAS/vscode-extensions/packages/webview/package.json)<br>[vscode-extensions/packages/webview/tsconfig.json](../../../../sources/Samsung__CAS/vscode-extensions/packages/webview/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 32 | [vscode-extensions/extensions/p4/.vscode-test.mjs](../../../../sources/Samsung__CAS/vscode-extensions/extensions/p4/.vscode-test.mjs)<br>[vscode-extensions/extensions/p4/src/test/extension.test.ts](../../../../sources/Samsung__CAS/vscode-extensions/extensions/p4/src/test/extension.test.ts)<br>[tracer/tests/thread_name/comm_pthread.c](../../../../sources/Samsung__CAS/tracer/tests/thread_name/comm_pthread.c)<br>[tracer/tests/thread_name/comm.c](../../../../sources/Samsung__CAS/tracer/tests/thread_name/comm.c)<br>[tracer/tests/open/multiple_opens.c](../../../../sources/Samsung__CAS/tracer/tests/open/multiple_opens.c)<br>[tracer/tests/ignore_opens/build.sh](../../../../sources/Samsung__CAS/tracer/tests/ignore_opens/build.sh) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `vscode-extensions/packages/webview/src/lib/index.ts`, `vscode-extensions/packages/vscode-variables/src/index.ts`, `vscode-extensions/packages/types/src/index.ts`.
2. Trace execution through entrypoints: `vscode-extensions/packages/webview/src/app.css`, `vscode-extensions/packages/webview/src/app.d.ts`, `vscode-extensions/packages/webview/src/app.html`.
3. Map agent/tool runtime through: `vscode-extensions/packages/webview/src/hooks.server.ts`, `vscode-extensions/packages/webview/src/hooks.ts`, `tools/nfsdb_compare.py`.
4. Inspect retrieval/memory/indexing through: `vscode-extensions/packages/webview/src/lib/index.ts`, `vscode-extensions/packages/vscode-variables/src/index.ts`, `vscode-extensions/packages/types/src/index.ts`.
5. Verify behavior through test/eval files: `vscode-extensions/extensions/p4/.vscode-test.mjs`, `vscode-extensions/extensions/p4/src/test/extension.test.ts`, `tracer/tests/thread_name/comm_pthread.c`.

## Existing Repository Insight

데이터/벡터 플랫폼 관점에서 Code Aware Services CAS is a set of tools for extracting information from a especially large source code trees. It consi. 핵심 구조 신호는 C++, pyproject.toml, requirements.txt, Cargo.toml, README.md, LICENSE이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 데이터/벡터 플랫폼 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 ci signal not obvious, needs deeper structural scan입니다.
