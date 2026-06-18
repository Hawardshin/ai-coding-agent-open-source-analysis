# nhn/gpm.unity 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

A brand of NHN providing free services required for game development.

## 요약

- 조사 단위: `sources/nhn__gpm.unity` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 452 files, 67 directories, depth score 59, key references 5개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 docs=README.en.md, README.md, docs/WebView/README.en.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 5개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | nhn/gpm.unity |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | 없음 |
| Stars | 434 |
| Forks | 60 |
| License | NOASSERTION |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/nhn__gpm.unity](../../../../sources/nhn__gpm.unity) |
| 기존 보고서 | [reports/korea-trending/repositories/nhn__gpm.unity.md](../../../korea-trending/repositories/nhn__gpm.unity.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 452 / 67 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, docs, release |
| 상위 확장자 | .unitypackage: 129, .png: 120, .gif: 93, .md: 69, .xml: 27, .jpg: 11, .json: 1, .yml: 1, (none): 1 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 43 |
| .github | ci surface | 1 |
| release | top-level component | 1 |


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
| docs | [README.en.md](../../../../sources/nhn__gpm.unity/README.en.md) | docs signal |
| docs | [README.md](../../../../sources/nhn__gpm.unity/README.md) | docs signal |
| docs | [docs/WebView/README.en.md](../../../../sources/nhn__gpm.unity/docs/WebView/README.en.md) | docs signal |
| docs | [docs/WebView/README.md](../../../../sources/nhn__gpm.unity/docs/WebView/README.md) | docs signal |
| ci | [.github/workflows/stale.yml](../../../../sources/nhn__gpm.unity/.github/workflows/stale.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 1 | [docs/Profiler/images/memory_profiler.gif](../../../../sources/nhn__gpm.unity/docs/Profiler/images/memory_profiler.gif) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 4 | [release/Profiler/image/Profiler_Memory.png](../../../../sources/nhn__gpm.unity/release/Profiler/image/Profiler_Memory.png)<br>[docs/Profiler/images/memory_profiler.gif](../../../../sources/nhn__gpm.unity/docs/Profiler/images/memory_profiler.gif)<br>[docs/Profiler/images/profiler_edit_memory.gif](../../../../sources/nhn__gpm.unity/docs/Profiler/images/profiler_edit_memory.gif)<br>[docs/Profiler/images/profiler_memory_forum.gif](../../../../sources/nhn__gpm.unity/docs/Profiler/images/profiler_memory_forum.gif) |
| spec | 0 | 명확하지 않음 |
| eval | 0 | 명확하지 않음 |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/stale.yml](../../../../sources/nhn__gpm.unity/.github/workflows/stale.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 264 | [README.en.md](../../../../sources/nhn__gpm.unity/README.en.md)<br>[README.md](../../../../sources/nhn__gpm.unity/README.md)<br>[docs/WebView/README.en.md](../../../../sources/nhn__gpm.unity/docs/WebView/README.en.md)<br>[docs/WebView/README.md](../../../../sources/nhn__gpm.unity/docs/WebView/README.md)<br>[docs/WebView/ReleaseNotes.en.md](../../../../sources/nhn__gpm.unity/docs/WebView/ReleaseNotes.en.md)<br>[docs/WebView/ReleaseNotes.md](../../../../sources/nhn__gpm.unity/docs/WebView/ReleaseNotes.md)<br>[docs/WebView/images/forum_earth_americas.png](../../../../sources/nhn__gpm.unity/docs/WebView/images/forum_earth_americas.png)<br>[docs/WebView/images/forum_features.png](../../../../sources/nhn__gpm.unity/docs/WebView/images/forum_features.png) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 0 | 명확하지 않음 |
| CI workflow | 1 | [.github/workflows/stale.yml](../../../../sources/nhn__gpm.unity/.github/workflows/stale.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음; test/eval 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `README.en.md`, `README.md`, `docs/WebView/README.en.md`.
2. agent/tool runtime 매핑: `docs/Profiler/images/memory_profiler.gif`.
3. retrieval/memory/indexing 확인: `release/Profiler/image/Profiler_Memory.png`, `docs/Profiler/images/memory_profiler.gif`, `docs/Profiler/images/profiler_edit_memory.gif`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 A brand of NHN providing free services required for game development.. 핵심 구조 신호는 README.md, LICENSE, ci, docs, spec-artifacts이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
