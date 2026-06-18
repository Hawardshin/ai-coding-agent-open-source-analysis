# Samsung/netcoredbg

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/netcoredbg |
| local path | sources/Samsung__netcoredbg |
| HEAD | 8b8b222 |
| stars/forks | 1288 / 147 |
| language | C# |
| license | MIT |
| pushedAt | 2025-12-12T11:36:24Z |
| trendScore / priorityScore | 102 / 252 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 11 | test-suite/README.md, README.md, CMakeLists.txt |
| Spec / doc-driven workflow | 6 | README.md, src/coreclr/README.md, third_party/libelfin/README.md |
| Security / compliance | 4 | docs/interop.md |
| Korean language / Korea domain | 3 | docs/guide/README.md, README.md, src/unittests/CMakeLists.txt |
| LLM wiki / memory / graph | 1 | test-suite/NetcoreDbgTest/MI/MIObject.cs |


## 분류와 스택

| key | value |
| --- | --- |
| categories | documentParsing, evalObservability, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, security-compliance, spec-driven |
| stacks | Python, C/C++, .NET |
| capabilities | Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 493 |
| manifests | 9 |
| docs | 18 |
| tests | 10 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Debugger for the .NET Core Runtime |
| headings | Debugger for the .NET Core Runtime / Copyright / Usage / Installation / Building from Source Code / Supported Architectures / Unix / MacOS / Windows / Running NetCoreDbg |
| excerpt | Debugger for the .NET Core Runtime The NetCoreDbg debugger implements GDB/MI https //sourceware.org/gdb/onlinedocs/gdb/GDB 002fMI.html and VSCode Debug Adapter Protocol https //microsoft.github.io/debug adapter protocol/ in a unified framework, allowing the debugging of .NET apps under the .NET Core runtime as well as facilitating debugging from the command line such as in GDB . Copyright You can find licensing information in the LICENSE LICENSE file within the root directory of the NetCoreDbg sources. Usage Further details regarding the usage of NetCoreDbg can be found in the CLI docs/cli.md manual. Installation NetCoreDbg is available in repositories of some Linux distributions and Windows |


## 주요 파일

### Manifests

- docs/guide/README.md
- test-suite/README.md
- README.md
- src/unittests/README.md
- src/coreclr/README.md
- third_party/libelfin/README.md
- third_party/linenoise-ng/README.md
- tools/getvscodecmd/README.md
- docs/guide/Makefile


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| test-suite | 217 |
| src | 196 |
| third_party | 43 |
| docs | 10 |
| packaging | 7 |
| tools | 4 |
| .ahub | 1 |
| .github | 1 |
| .gitignore | 1 |
| AUTHORS | 1 |
| clrdefinitions.cmake | 1 |
| clrfeatures.cmake | 1 |
| CMakeLists.txt | 1 |
| compileoptions.cmake | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .cs | 121 |
| .h | 115 |
| .cpp | 97 |
| .csproj | 88 |
| .txt | 13 |
| .md | 12 |
| [no-ext] | 9 |
| .cmake | 8 |
| .sh | 5 |
| .nupkg | 4 |
| .xml | 4 |
| .drawio | 3 |
| .c | 2 |
| .hpp | 2 |
| .ps1 | 2 |
| .manifest | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
