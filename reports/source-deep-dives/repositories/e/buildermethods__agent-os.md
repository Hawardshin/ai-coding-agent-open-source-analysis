# buildermethods/agent-os 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Local clone structure analysis: 22 files, 9 directories.

## 요약

- 조사 단위: `sources/buildermethods__agent-os` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 22 files, 9 directories, depth score 70, key references 7개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=commands/agent-os/discover-standards.md, commands/agent-os/index-standards.md, commands/agent-os/inject-standards.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | buildermethods/agent-os |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | Shell |
| Stars | 4894 |
| Forks | 769 |
| License | MIT License |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/buildermethods__agent-os](../../../../sources/buildermethods__agent-os) |
| 기존 보고서 | [reports/clone-structures/buildermethods__agent-os.md](../../../clone-structures/buildermethods__agent-os.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 22 / 9 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, commands, profiles, scripts |
| 상위 확장자 | .md: 12, .yml: 5, .sh: 3, (none): 2 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| commands | top-level component | 1 |
| profiles | top-level component | 1 |
| scripts | top-level component | 1 |


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
| agentRuntime | [commands/agent-os/discover-standards.md](../../../../sources/buildermethods__agent-os/commands/agent-os/discover-standards.md) | agentRuntime signal |
| agentRuntime | [commands/agent-os/index-standards.md](../../../../sources/buildermethods__agent-os/commands/agent-os/index-standards.md) | agentRuntime signal |
| agentRuntime | [commands/agent-os/inject-standards.md](../../../../sources/buildermethods__agent-os/commands/agent-os/inject-standards.md) | agentRuntime signal |
| agentRuntime | [commands/agent-os/plan-product.md](../../../../sources/buildermethods__agent-os/commands/agent-os/plan-product.md) | agentRuntime signal |
| ci | [.github/workflows/pr-decline.yml](../../../../sources/buildermethods__agent-os/.github/workflows/pr-decline.yml) | ci support |
| ci | [.github/workflows/stale.yml](../../../../sources/buildermethods__agent-os/.github/workflows/stale.yml) | ci support |
| eval | [commands/agent-os/shape-spec.md](../../../../sources/buildermethods__agent-os/commands/agent-os/shape-spec.md) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 5 | [commands/agent-os/discover-standards.md](../../../../sources/buildermethods__agent-os/commands/agent-os/discover-standards.md)<br>[commands/agent-os/index-standards.md](../../../../sources/buildermethods__agent-os/commands/agent-os/index-standards.md)<br>[commands/agent-os/inject-standards.md](../../../../sources/buildermethods__agent-os/commands/agent-os/inject-standards.md)<br>[commands/agent-os/plan-product.md](../../../../sources/buildermethods__agent-os/commands/agent-os/plan-product.md)<br>[commands/agent-os/shape-spec.md](../../../../sources/buildermethods__agent-os/commands/agent-os/shape-spec.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 1 | [commands/agent-os/index-standards.md](../../../../sources/buildermethods__agent-os/commands/agent-os/index-standards.md) |
| spec | 1 | [commands/agent-os/shape-spec.md](../../../../sources/buildermethods__agent-os/commands/agent-os/shape-spec.md) |
| eval | 1 | [commands/agent-os/shape-spec.md](../../../../sources/buildermethods__agent-os/commands/agent-os/shape-spec.md) |
| security | 1 | [.github/SECURITY.yml](../../../../sources/buildermethods__agent-os/.github/SECURITY.yml) |
| ci | 2 | [.github/workflows/pr-decline.yml](../../../../sources/buildermethods__agent-os/.github/workflows/pr-decline.yml)<br>[.github/workflows/stale.yml](../../../../sources/buildermethods__agent-os/.github/workflows/stale.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/buildermethods__agent-os/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1 | [commands/agent-os/shape-spec.md](../../../../sources/buildermethods__agent-os/commands/agent-os/shape-spec.md) |
| CI workflow | 2 | [.github/workflows/pr-decline.yml](../../../../sources/buildermethods__agent-os/.github/workflows/pr-decline.yml)<br>[.github/workflows/stale.yml](../../../../sources/buildermethods__agent-os/.github/workflows/stale.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [.github/SECURITY.yml](../../../../sources/buildermethods__agent-os/.github/SECURITY.yml) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `commands/agent-os/discover-standards.md`, `commands/agent-os/index-standards.md`, `commands/agent-os/inject-standards.md`.
2. agent/tool runtime 매핑: `commands/agent-os/discover-standards.md`, `commands/agent-os/index-standards.md`, `commands/agent-os/inject-standards.md`.
3. retrieval/memory/indexing 확인: `commands/agent-os/index-standards.md`.
4. test/eval 파일로 동작 검증: `commands/agent-os/shape-spec.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 22 files, 9 directories.. 핵심 구조 신호는 Shell, README.md, LICENSE, ci, docs, 22 files이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음입니다.
