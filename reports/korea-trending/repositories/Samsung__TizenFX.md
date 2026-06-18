# Samsung/TizenFX

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/TizenFX |
| local path | sources/Samsung__TizenFX |
| HEAD | 78f0332 |
| stars/forks | 210 / 276 |
| language | C# |
| license | Apache-2.0 |
| pushedAt | 2026-06-17T16:24:32Z |
| trendScore / priorityScore | 98 / 299 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 424 | .agents/skills/README.md, README.md, test/NUILayout/README.md |
| Spec / doc-driven workflow | 304 | .github/workflows/build-branches.yml, .github/workflows/build-pull-request.yml, internals/docs/guides/peripheral-i2c.md |
| RAG / retrieval | 78 | src/Tizen.Context/doc/api/Tizen.Context.AppHistory.md, src/Tizen.Security.SecureRepository/doc/api/Tizen.Security.SecureRepository.md, test/Tizen.NUI.Tests/Tizen.NUI.Devel.Tests/res/webview/webstorage.html |
| Security / compliance | 73 | src/ElmSharp.Wearable/doc/api/ElmSharp.Wearable.md, src/ElmSharp/doc/api/ElmSharp.md, src/Tizen.Applications.WatchfaceComplication/doc/api/Tizen.Applications.WatchfaceComplication.md |
| LLM wiki / memory / graph | 18 | README.md, internals/docs/guides/inspections.md, internals/docs/guides/peripheral-gpio.md |
| Frontend / developer experience | 12 | .agents/skills/README.md, README.md, .github/workflows/nui-code-style-review.yml |
| AI agent / tool use | 11 | .agents/skills/README.md, .github/workflows/deploy-packages.yml, .agents/skills/refactor-analysis/SKILL.md |
| Local LLM / on-device inference | 2 | test/Tizen.AIAvatar.Example/README.md, .agents/workflows/tizen-device-benchmark.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, evalObservability, example-rich, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, local-llm, rag, sdk-api, security-compliance, spec-driven |
| stacks | Python, .NET |
| capabilities | LLM/app framework, Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 6876 |
| manifests | 14 |
| docs | 60 |
| tests | 3009 |
| ci/ops | 12 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | TizenFX |
| headings | TizenFX / Branches / main / API4 ~ API14 branches / Using `net6.0-tizen` target framework for API11 or API12 / Using `tizen` target framework / Minimum required versions of Tizen.NET.Sdk and Visual Studio / Quick Start / Prerequisites / Getting the sources |
| excerpt | TizenFX ! License https //img.shields.io/badge/licence Apache%202.0 brightgreen.svg?label=License&style=flat square LICENSE ! Build https //img.shields.io/github/actions/workflow/status/Samsung/TizenFX/build branches.yml?query=branch%3Amain?label=Build&style=flat square https //github.com/Samsung/TizenFX/actions?query=workflow%3A%22Build+Branches%22+branch%3Amain ! Analysis https //img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgist.githubusercontent.com%2FJoonghyunCho%2Fd7515bb87b2597efd779e737b1bfaa03%2Fraw%2Ftask status.json&query=$.tasks.RefactorAnalysis.status&label=AI%20Refactor%20Analysis ! Execute https //img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgist.githubusercontent |


## 주요 파일

### Manifests

- .agents/skills/README.md
- README.md
- test/NUIGLView/NUIDirectRenderingGLViewSample/README.md
- test/NUIGLView/NUIGLViewSample/README.md
- test/NUILayout/README.md
- test/NUITestSample/CommonUI_Samples/README.md
- test/NUITizenGallery/README.md
- test/NUIWindowLayout/README.md
- test/PerformanceTest/README.md
- test/Tizen.AIAvatar.Example/README.md
- test/Tizen.NUI.StyleGuide/README.md
- test/Tizen.NUI.Tests/Tizen.NUI.Components.Devel.Tests/README.md
- src/Tizen.NUI.XamlBuild/README.md
- src/Tizen.Applications.PackageManager/Tizen.Applications/Package.cs


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 3725 |
| test | 3006 |
| internals | 71 |
| packaging | 22 |
| .github | 16 |
| pkg | 13 |
| .agents | 7 |
| tools | 7 |
| .editorconfig | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| build.sh | 1 |
| coverage.sh | 1 |
| LICENSE | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .cs | 5993 |
| .xaml | 229 |
| .csproj | 173 |
| .sln | 130 |
| .md | 60 |
| .xml | 60 |
| .json | 48 |
| .html | 15 |
| .nupkg | 14 |
| .yml | 13 |
| .riv | 10 |
| .sh | 10 |
| .code-workspace | 9 |
| .preload | 9 |
| .bmp | 8 |
| .props | 8 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
