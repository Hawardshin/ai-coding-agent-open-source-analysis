# latemonk/agent-store-skills 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Claude Skills for the Agent Store MCP connector (Korean public & financial data)

## 요약

- 조사 단위: `sources/latemonk__agent-store-skills` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 8 files, 7 directories, depth score 28, key references 4개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=korean-real-estate/SKILL.md, korean-public-data/SKILL.md, korea-macro-stats/SKILL.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 4개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | latemonk/agent-store-skills |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/latemonk__agent-store-skills](../../../../sources/latemonk__agent-store-skills) |
| 기존 보고서 | [reports/korea-trending/repositories/latemonk__agent-store-skills.md](../../../korea-trending/repositories/latemonk__agent-store-skills.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 8 / 7 |
| 관측 최대 깊이 | 2 |
| 상위 디렉터리 | commercial-district-analytics, company-due-diligence, dart-financial-analysis, equity-report-jobs, korea-macro-stats, korean-public-data, korean-real-estate |
| 상위 확장자 | .md: 8 |
| 소스 패턴 | agent/tool runtime |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| commercial-district-analytics | ci surface | 1 |
| company-due-diligence | top-level component | 1 |
| dart-financial-analysis | ci surface | 1 |
| equity-report-jobs | top-level component | 1 |
| korea-macro-stats | top-level component | 1 |
| korean-public-data | top-level component | 1 |
| korean-real-estate | top-level component | 1 |


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
| agentRuntime | [korean-real-estate/SKILL.md](../../../../sources/latemonk__agent-store-skills/korean-real-estate/SKILL.md) | agentRuntime signal |
| agentRuntime | [korean-public-data/SKILL.md](../../../../sources/latemonk__agent-store-skills/korean-public-data/SKILL.md) | agentRuntime signal |
| agentRuntime | [korea-macro-stats/SKILL.md](../../../../sources/latemonk__agent-store-skills/korea-macro-stats/SKILL.md) | agentRuntime signal |
| agentRuntime | [equity-report-jobs/SKILL.md](../../../../sources/latemonk__agent-store-skills/equity-report-jobs/SKILL.md) | agentRuntime signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 7 | [korean-real-estate/SKILL.md](../../../../sources/latemonk__agent-store-skills/korean-real-estate/SKILL.md)<br>[korean-public-data/SKILL.md](../../../../sources/latemonk__agent-store-skills/korean-public-data/SKILL.md)<br>[korea-macro-stats/SKILL.md](../../../../sources/latemonk__agent-store-skills/korea-macro-stats/SKILL.md)<br>[equity-report-jobs/SKILL.md](../../../../sources/latemonk__agent-store-skills/equity-report-jobs/SKILL.md)<br>[dart-financial-analysis/SKILL.md](../../../../sources/latemonk__agent-store-skills/dart-financial-analysis/SKILL.md)<br>[company-due-diligence/SKILL.md](../../../../sources/latemonk__agent-store-skills/company-due-diligence/SKILL.md)<br>[commercial-district-analytics/SKILL.md](../../../../sources/latemonk__agent-store-skills/commercial-district-analytics/SKILL.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 0 | 명확하지 않음 |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/latemonk__agent-store-skills/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 0 | 명확하지 않음 |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음; test/eval 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `korean-real-estate/SKILL.md`, `korean-public-data/SKILL.md`, `korea-macro-stats/SKILL.md`.
2. agent/tool runtime 매핑: `korean-real-estate/SKILL.md`, `korean-public-data/SKILL.md`, `korea-macro-stats/SKILL.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Claude Skills for the Agent Store MCP connector Korean public & financial data. 핵심 구조 신호는 README.md, ci, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
