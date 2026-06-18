# daangn/KarrotListKit

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/daangn/KarrotListKit |
| local path | sources/daangn__KarrotListKit |
| HEAD | d608169 |
| stars/forks | 145 / 7 |
| language | Swift |
| license | Apache-2.0 |
| pushedAt | 2025-09-18T06:44:14Z |
| trendScore / priorityScore | 78 / 184 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 10 | README.md, Tests/KarrotListKitMacrosTests/AddComponentModifierMacroTests.swift, Tests/KarrotListKitTests/RemoteImagePrefetchingPluginTest.swift |
| Spec / doc-driven workflow | 8 | Sources/KarrotListKit/Layout/DefaultCompositionalLayoutSectionFactory.swift |
| RAG / retrieval | 2 | Sources/KarrotListKit/Utils/Chunked.swift |


## 분류와 스택

| key | value |
| --- | --- |
| categories | data-ml, example-rich, korea-signal, rag, spec-driven |
| stacks | Swift |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 96 |
| manifests | 4 |
| docs | 1 |
| tests | 12 |
| ci/ops | 3 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | KarrotListKit |
| headings | KarrotListKit / Installation / Getting Started / CollectionViewAdapter / Component / Presentation / Sizing / Pagination / Prefetching / Contributing |
| excerpt | KarrotListKit ! https //img.shields.io/endpoint?url=https%3A%2F%2Fswiftpackageindex.com%2Fapi%2Fpackages%2Fdaangn%2FKarrotListKit%2Fbadge%3Ftype%3Dswift versions https //swiftpackageindex.com/daangn/KarrotListKit ! https //img.shields.io/endpoint?url=https%3A%2F%2Fswiftpackageindex.com%2Fapi%2Fpackages%2Fdaangn%2FKarrotListKit%2Fbadge%3Ftype%3Dplatforms https //swiftpackageindex.com/daangn/KarrotListKit Welcome to our Karrot Listing Framework. This powerful tool is developed with UIKit, but it is designed to be used like a declarative UI API, providing a seamless transition to SwiftUI and reducing migration costs. Our framework is built with an optimized diffing algorithm, thanks to its depe |


## 주요 파일

### Manifests

- README.md
- Examples/KarrotListKitSampleApp/KarrotListKitSampleApp.xcodeproj/project.xcworkspace/xcshareddata/swiftpm/Package.resolved
- Package.resolved
- Package.swift


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| Sources | 62 |
| Tests | 12 |
| Examples | 11 |
| .github | 5 |
| .gitignore | 1 |
| .spi.yml | 1 |
| LICENSE | 1 |
| Package.resolved | 1 |
| Package.swift | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .swift | 82 |
| .yml | 5 |
| [no-ext] | 3 |
| .resolved | 2 |
| .md | 1 |
| .pbxproj | 1 |
| .plist | 1 |
| .xcworkspacedata | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
