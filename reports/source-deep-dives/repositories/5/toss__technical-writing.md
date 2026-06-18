# toss/technical-writing 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

개발자를 위한 글쓰기 기본기

## 요약

- 조사 단위: `sources/toss__technical-writing` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 66 files, 19 directories, depth score 61, key references 7개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, spec/docs-driven, ui/extension surface 구조로 읽힌다. 핵심 소스 근거는 config=package.json, tsconfig.json이고, 의존성 단서는 react, 검증/운영 단서는 CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | toss/technical-writing |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 1055 |
| Forks | 48 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/toss__technical-writing](../../../../sources/toss__technical-writing) |
| 기존 보고서 | [reports/korea-trending/repositories/toss__technical-writing.md](../../../korea-trending/repositories/toss__technical-writing.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 66 / 19 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, components, docs, styles, types |
| 상위 확장자 | .mdx: 19, .ts: 12, .png: 8, .md: 7, .css: 5, .tsx: 4, (none): 4, .json: 3, .yml: 2, .conf: 1, .lock: 1 |
| 소스 패턴 | retrieval/vector path, spec/docs-driven, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 53 |
| .github | ci surface | 1 |
| components | top-level component | 1 |
| styles | top-level component | 1 |
| types | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | rspress dev |
| build | package.json | build | rspress build |
| utility | package.json | preview | rspress preview |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | react |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| config | [package.json](../../../../sources/toss__technical-writing/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/toss__technical-writing/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/toss__technical-writing/README.md) | docs signal |
| docs | [docs/_meta.json](../../../../sources/toss__technical-writing/docs/_meta.json) | docs signal |
| docs | [docs/index.md](../../../../sources/toss__technical-writing/docs/index.md) | docs signal |
| docs | [docs/overview.md](../../../../sources/toss__technical-writing/docs/overview.md) | docs signal |
| ci | [.github/workflows/docs-build.yml](../../../../sources/toss__technical-writing/.github/workflows/docs-build.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 7 | [styles/index.css](../../../../sources/toss__technical-writing/styles/index.css)<br>[docs/index.md](../../../../sources/toss__technical-writing/docs/index.md)<br>[docs/type/index.md](../../../../sources/toss__technical-writing/docs/type/index.md)<br>[docs/shared/constants/index.ts](../../../../sources/toss__technical-writing/docs/shared/constants/index.ts)<br>[docs/shared/components/index.ts](../../../../sources/toss__technical-writing/docs/shared/components/index.ts)<br>[docs/sentence/index.md](../../../../sources/toss__technical-writing/docs/sentence/index.md)<br>[docs/architecture/index.md](../../../../sources/toss__technical-writing/docs/architecture/index.md) |
| spec | 7 | [docs/architecture/background.mdx](../../../../sources/toss__technical-writing/docs/architecture/background.mdx)<br>[docs/architecture/heading.mdx](../../../../sources/toss__technical-writing/docs/architecture/heading.mdx)<br>[docs/architecture/index.md](../../../../sources/toss__technical-writing/docs/architecture/index.md)<br>[docs/architecture/one-thing-per-one-page.mdx](../../../../sources/toss__technical-writing/docs/architecture/one-thing-per-one-page.mdx)<br>[docs/architecture/overview.mdx](../../../../sources/toss__technical-writing/docs/architecture/overview.mdx)<br>[docs/architecture/predictability.mdx](../../../../sources/toss__technical-writing/docs/architecture/predictability.mdx)<br>[docs/architecture/value-first-cost-later.mdx](../../../../sources/toss__technical-writing/docs/architecture/value-first-cost-later.mdx) |
| eval | 0 | 명확하지 않음 |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/docs-build.yml](../../../../sources/toss__technical-writing/.github/workflows/docs-build.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 48 | [README.md](../../../../sources/toss__technical-writing/README.md)<br>[docs/_meta.json](../../../../sources/toss__technical-writing/docs/_meta.json)<br>[docs/index.md](../../../../sources/toss__technical-writing/docs/index.md)<br>[docs/overview.md](../../../../sources/toss__technical-writing/docs/overview.md)<br>[docs/type/explanation.mdx](../../../../sources/toss__technical-writing/docs/type/explanation.mdx)<br>[docs/type/index.md](../../../../sources/toss__technical-writing/docs/type/index.md)<br>[docs/type/learning.mdx](../../../../sources/toss__technical-writing/docs/type/learning.mdx)<br>[docs/type/problem-solving.mdx](../../../../sources/toss__technical-writing/docs/type/problem-solving.mdx) |
| config | 2 | [package.json](../../../../sources/toss__technical-writing/package.json)<br>[tsconfig.json](../../../../sources/toss__technical-writing/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 0 | 명확하지 않음 |
| CI workflow | 1 | [.github/workflows/docs-build.yml](../../../../sources/toss__technical-writing/.github/workflows/docs-build.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음; test/eval 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `package.json`, `tsconfig.json`, `README.md`.
2. retrieval/memory/indexing 확인: `styles/index.css`, `docs/index.md`, `docs/type/index.md`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 개발자를 위한 글쓰기 기본기. 핵심 구조 신호는 TypeScript, package.json, README.md, react, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
