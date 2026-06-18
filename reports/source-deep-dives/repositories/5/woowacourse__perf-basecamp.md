# woowacourse/perf-basecamp 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

우아한테크코스 레벨4 프론트엔드 성능 베이스캠프 실습 미션

## 요약

- 조사 단위: `sources/woowacourse__perf-basecamp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 56 files, 31 directories, depth score 61, key references 6개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/App.css, src/App.tsx, src/index.tsx이고, 의존성 단서는 react, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 6개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | woowacourse/perf-basecamp |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 44 |
| Forks | 204 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/woowacourse__perf-basecamp](../../../../sources/woowacourse__perf-basecamp) |
| 기존 보고서 | [reports/korea-trending/repositories/woowacourse__perf-basecamp.md](../../../korea-trending/repositories/woowacourse__perf-basecamp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 56 / 31 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, public, src |
| 상위 확장자 | .tsx: 19, .css: 14, .ts: 8, .json: 4, .gif: 3, .md: 2, (none): 2, .html: 1, .ico: 1, .js: 1, .png: 1 |
| 소스 패턴 | api/server, agent/tool runtime, retrieval/vector path, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 8 |
| .github | ci surface | 1 |
| public | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | build:dev | webpack --mode=development |
| build | package.json | build:prod | webpack --mode=production --node-env=production |
| serve-dev | package.json | watch | webpack --watch |
| serve-dev | package.json | serve | webpack serve --mode=development |
| quality | package.json | prettier | prettier --write . |
| build | package.json | deploy | npm run build:prod && npx gh-pages -d dist |


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
| entrypoints | [src/App.css](../../../../sources/woowacourse__perf-basecamp/src/App.css) | entrypoints signal |
| entrypoints | [src/App.tsx](../../../../sources/woowacourse__perf-basecamp/src/App.tsx) | entrypoints signal |
| entrypoints | [src/index.tsx](../../../../sources/woowacourse__perf-basecamp/src/index.tsx) | entrypoints signal |
| config | [package.json](../../../../sources/woowacourse__perf-basecamp/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/woowacourse__perf-basecamp/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/woowacourse__perf-basecamp/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [src/App.css](../../../../sources/woowacourse__perf-basecamp/src/App.css)<br>[src/App.tsx](../../../../sources/woowacourse__perf-basecamp/src/App.tsx)<br>[src/index.tsx](../../../../sources/woowacourse__perf-basecamp/src/index.tsx) |
| agentRuntime | 3 | [src/pages/Search/hooks/useGifSearch.tsx](../../../../sources/woowacourse__perf-basecamp/src/pages/Search/hooks/useGifSearch.tsx)<br>[src/pages/Home/hooks/useMousePosition.tsx](../../../../sources/woowacourse__perf-basecamp/src/pages/Home/hooks/useMousePosition.tsx)<br>[src/pages/Home/hooks/useScrollEvent.tsx](../../../../sources/woowacourse__perf-basecamp/src/pages/Home/hooks/useScrollEvent.tsx) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 2 | [index.html](../../../../sources/woowacourse__perf-basecamp/index.html)<br>[src/index.tsx](../../../../sources/woowacourse__perf-basecamp/src/index.tsx) |
| spec | 0 | 명확하지 않음 |
| eval | 0 | 명확하지 않음 |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/woowacourse__perf-basecamp/README.md) |
| config | 2 | [package.json](../../../../sources/woowacourse__perf-basecamp/package.json)<br>[tsconfig.json](../../../../sources/woowacourse__perf-basecamp/tsconfig.json) |


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
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음; test/eval 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/App.css`, `src/App.tsx`, `src/index.tsx`.
2. entrypoint를 따라 실행 흐름 확인: `src/App.css`, `src/App.tsx`, `src/index.tsx`.
3. agent/tool runtime 매핑: `src/pages/Search/hooks/useGifSearch.tsx`, `src/pages/Home/hooks/useMousePosition.tsx`, `src/pages/Home/hooks/useScrollEvent.tsx`.
4. retrieval/memory/indexing 확인: `index.html`, `src/index.tsx`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 우아한테크코스 레벨4 프론트엔드 성능 베이스캠프 실습 미션. 핵심 구조 신호는 TypeScript, package.json, README.md, react, ci, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
