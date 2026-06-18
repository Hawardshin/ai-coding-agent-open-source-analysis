# daangn/KarrotCodableKit 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

KarrotCodableKit simplifies Swift's Codable protocol by offering support for polymorphism, property wrappers, and macros to handle complex JSON structures efficiently.

## 요약

- 조사 단위: `sources/daangn__KarrotCodableKit` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 189 files, 61 directories, depth score 52, key references 5개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 eval/test harness 구조로 읽힌다. 핵심 소스 근거는 instruction=CLAUDE.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 5개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | daangn/KarrotCodableKit |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Swift |
| Stars | 16 |
| Forks | 2 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/daangn__KarrotCodableKit](../../../../sources/daangn__KarrotCodableKit) |
| 기존 보고서 | [reports/korea-trending/repositories/daangn__KarrotCodableKit.md](../../../korea-trending/repositories/daangn__KarrotCodableKit.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 189 / 61 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, Docs, Sources, Tests, ThirdPartyLicenses |
| 상위 확장자 | .swift: 171, .md: 7, .yml: 5, (none): 4, .txt: 2 |
| 소스 패턴 | eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| Tests | validation surface | 41 |
| Docs | documentation surface | 3 |
| .github | ci surface | 1 |
| Sources | top-level component | 1 |
| ThirdPartyLicenses | top-level component | 1 |


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
| instruction | [CLAUDE.md](../../../../sources/daangn__KarrotCodableKit/CLAUDE.md) | instruction signal |
| ci | [.github/workflows/ci.yml](../../../../sources/daangn__KarrotCodableKit/.github/workflows/ci.yml) | ci support |
| ci | [.github/workflows/draft-release-note.yml](../../../../sources/daangn__KarrotCodableKit/.github/workflows/draft-release-note.yml) | ci support |
| eval | [Tests/KarrotCodableMacrosTests/UnnestedPolymorphicCodableMacroTests/UnnestedPolymorphicCodableMacroTests.swift](../../../../sources/daangn__KarrotCodableKit/Tests/KarrotCodableMacrosTests/UnnestedPolymorphicCodableMacroTests/UnnestedPolymorphicCodableMacroTests.swift) | eval support |
| eval | [Tests/KarrotCodableMacrosTests/UnnestedPolymorphicCodableMacroTests/UnnestedPolymorphicDecodableMacroTests.swift](../../../../sources/daangn__KarrotCodableKit/Tests/KarrotCodableMacrosTests/UnnestedPolymorphicCodableMacroTests/UnnestedPolymorphicDecodableMacroTests.swift) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 70 | [Tests/KarrotCodableMacrosTests/UnnestedPolymorphicCodableMacroTests/UnnestedPolymorphicCodableMacroTests.swift](../../../../sources/daangn__KarrotCodableKit/Tests/KarrotCodableMacrosTests/UnnestedPolymorphicCodableMacroTests/UnnestedPolymorphicCodableMacroTests.swift)<br>[Tests/KarrotCodableMacrosTests/UnnestedPolymorphicCodableMacroTests/UnnestedPolymorphicDecodableMacroTests.swift](../../../../sources/daangn__KarrotCodableKit/Tests/KarrotCodableMacrosTests/UnnestedPolymorphicCodableMacroTests/UnnestedPolymorphicDecodableMacroTests.swift)<br>[Tests/KarrotCodableMacrosTests/PolymorphicEnumCodableMacroTests/PolymorphicEnumCodableMacroTests.swift](../../../../sources/daangn__KarrotCodableKit/Tests/KarrotCodableMacrosTests/PolymorphicEnumCodableMacroTests/PolymorphicEnumCodableMacroTests.swift)<br>[Tests/KarrotCodableMacrosTests/PolymorphicEnumCodableMacroTests/PolymorphicEnumDecodableMacroTests.swift](../../../../sources/daangn__KarrotCodableKit/Tests/KarrotCodableMacrosTests/PolymorphicEnumCodableMacroTests/PolymorphicEnumDecodableMacroTests.swift)<br>[Tests/KarrotCodableMacrosTests/PolymorphicEnumCodableMacroTests/PolymorphicEnumEncodableMacroTests.swift](../../../../sources/daangn__KarrotCodableKit/Tests/KarrotCodableMacrosTests/PolymorphicEnumCodableMacroTests/PolymorphicEnumEncodableMacroTests.swift)<br>[Tests/KarrotCodableMacrosTests/PolymorphicCodableMacrosTests/PolymorphicCodableMacroTests.swift](../../../../sources/daangn__KarrotCodableKit/Tests/KarrotCodableMacrosTests/PolymorphicCodableMacrosTests/PolymorphicCodableMacroTests.swift)<br>[Tests/KarrotCodableMacrosTests/PolymorphicCodableMacrosTests/PolymorphicCodableStrategyProvidingMacroTests.swift](../../../../sources/daangn__KarrotCodableKit/Tests/KarrotCodableMacrosTests/PolymorphicCodableMacrosTests/PolymorphicCodableStrategyProvidingMacroTests.swift)<br>[Tests/KarrotCodableMacrosTests/PolymorphicCodableMacrosTests/PolymorphicDeodableMacroTests.swift](../../../../sources/daangn__KarrotCodableKit/Tests/KarrotCodableMacrosTests/PolymorphicCodableMacrosTests/PolymorphicDeodableMacroTests.swift) |
| security | 0 | 명확하지 않음 |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/daangn__KarrotCodableKit/.github/workflows/ci.yml)<br>[.github/workflows/draft-release-note.yml](../../../../sources/daangn__KarrotCodableKit/.github/workflows/draft-release-note.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [CLAUDE.md](../../../../sources/daangn__KarrotCodableKit/CLAUDE.md) |
| docs | 3 | [README.md](../../../../sources/daangn__KarrotCodableKit/README.md)<br>[Docs/BetterCodable/README.md](../../../../sources/daangn__KarrotCodableKit/Docs/BetterCodable/README.md)<br>[Docs/AnyCodable/README.md](../../../../sources/daangn__KarrotCodableKit/Docs/AnyCodable/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 70 | [Tests/KarrotCodableMacrosTests/UnnestedPolymorphicCodableMacroTests/UnnestedPolymorphicCodableMacroTests.swift](../../../../sources/daangn__KarrotCodableKit/Tests/KarrotCodableMacrosTests/UnnestedPolymorphicCodableMacroTests/UnnestedPolymorphicCodableMacroTests.swift)<br>[Tests/KarrotCodableMacrosTests/UnnestedPolymorphicCodableMacroTests/UnnestedPolymorphicDecodableMacroTests.swift](../../../../sources/daangn__KarrotCodableKit/Tests/KarrotCodableMacrosTests/UnnestedPolymorphicCodableMacroTests/UnnestedPolymorphicDecodableMacroTests.swift)<br>[Tests/KarrotCodableMacrosTests/PolymorphicEnumCodableMacroTests/PolymorphicEnumCodableMacroTests.swift](../../../../sources/daangn__KarrotCodableKit/Tests/KarrotCodableMacrosTests/PolymorphicEnumCodableMacroTests/PolymorphicEnumCodableMacroTests.swift)<br>[Tests/KarrotCodableMacrosTests/PolymorphicEnumCodableMacroTests/PolymorphicEnumDecodableMacroTests.swift](../../../../sources/daangn__KarrotCodableKit/Tests/KarrotCodableMacrosTests/PolymorphicEnumCodableMacroTests/PolymorphicEnumDecodableMacroTests.swift)<br>[Tests/KarrotCodableMacrosTests/PolymorphicEnumCodableMacroTests/PolymorphicEnumEncodableMacroTests.swift](../../../../sources/daangn__KarrotCodableKit/Tests/KarrotCodableMacrosTests/PolymorphicEnumCodableMacroTests/PolymorphicEnumEncodableMacroTests.swift)<br>[Tests/KarrotCodableMacrosTests/PolymorphicCodableMacrosTests/PolymorphicCodableMacroTests.swift](../../../../sources/daangn__KarrotCodableKit/Tests/KarrotCodableMacrosTests/PolymorphicCodableMacrosTests/PolymorphicCodableMacroTests.swift) |
| CI workflow | 2 | [.github/workflows/ci.yml](../../../../sources/daangn__KarrotCodableKit/.github/workflows/ci.yml)<br>[.github/workflows/draft-release-note.yml](../../../../sources/daangn__KarrotCodableKit/.github/workflows/draft-release-note.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/daangn__KarrotCodableKit/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `CLAUDE.md`, `.github/workflows/ci.yml`, `.github/workflows/draft-release-note.yml`.
2. test/eval 파일로 동작 검증: `Tests/KarrotCodableMacrosTests/UnnestedPolymorphicCodableMacroTests/UnnestedPolymorphicCodableMacroTests.swift`, `Tests/KarrotCodableMacrosTests/UnnestedPolymorphicCodableMacroTests/UnnestedPolymorphicDecodableMacroTests.swift`, `Tests/KarrotCodableMacrosTests/PolymorphicEnumCodableMacroTests/PolymorphicEnumCodableMacroTests.swift`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 KarrotCodableKit simplifies Swift's Codable protocol by offering support for polymorphism, property wrappers, and macros. 핵심 구조 신호는 Swift, README.md, CLAUDE.md, LICENSE, tests, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
