# toss/es-hangul 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

A modern JavaScript library for handling Hangul characters.

## 요약

- 조사 단위: `sources/toss__es-hangul` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 269 files, 61 directories, depth score 102, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/index.ts이고, 의존성 단서는 next, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | toss/es-hangul |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 1829 |
| Forks | 137 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/toss__es-hangul](../../../../sources/toss__es-hangul) |
| 기존 보고서 | [reports/korea-trending/repositories/toss__es-hangul.md](../../../korea-trending/repositories/toss__es-hangul.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 269 / 61 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .changeset, .circleci, .github, .scripts, benchmarks, docs, src |
| 상위 확장자 | .ts: 122, .mdx: 64, .json: 20, .tsx: 13, .png: 12, .md: 10, .yml: 8, (none): 6, .js: 3, .svg: 2, .toml: 2, .css: 1 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 106 |
| docs | documentation surface | 48 |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | attw | attw --pack |
| build | package.json | build | tsup |
| utility | package.json | changeset:publish | yarn changeset publish |
| utility | package.json | changeset:version | yarn changeset version |
| quality | package.json | packlint | packlint sort -R |
| quality | package.json | publint | publint --strict |
| test | package.json | test | vitest run --coverage --typecheck |
| test | package.json | test:watch | vitest --ui --coverage --typecheck |
| quality | package.json | typecheck | tsc --noEmit |
| serve-dev | package.json | docs:dev | yarn workspace docs dev |
| build | package.json | docs:build | yarn workspace docs build |
| serve-dev | package.json | docs:start | yarn workspace docs start |
| test | package.json | bench | vitest bench |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | next |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [src/index.ts](../../../../sources/toss__es-hangul/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/toss__es-hangul/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/toss__es-hangul/tsconfig.json) | config signal |
| config | [docs/package.json](../../../../sources/toss__es-hangul/docs/package.json) | config signal |
| config | [docs/tsconfig.json](../../../../sources/toss__es-hangul/docs/tsconfig.json) | config signal |
| docs | [README-en_us.md](../../../../sources/toss__es-hangul/README-en_us.md) | docs signal |
| docs | [README.md](../../../../sources/toss__es-hangul/README.md) | docs signal |
| docs | [docs/.eslintrc.json](../../../../sources/toss__es-hangul/docs/.eslintrc.json) | docs signal |
| docs | [docs/.gitignore](../../../../sources/toss__es-hangul/docs/.gitignore) | docs signal |
| eval | [src/pronunciation/standardizePronunciation/standardizePronunciation.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/standardizePronunciation.spec.ts) | eval signal |
| eval | [src/pronunciation/standardizePronunciation/rules/transform12th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform12th.spec.ts) | eval signal |
| eval | [src/pronunciation/standardizePronunciation/rules/transform13And14th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform13And14th.spec.ts) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.ts](../../../../sources/toss__es-hangul/src/index.ts) |
| agentRuntime | 1 | [docs/src/hooks/use-is-dark-mode.ts](../../../../sources/toss__es-hangul/docs/src/hooks/use-is-dark-mode.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 35 | [src/index.ts](../../../../sources/toss__es-hangul/src/index.ts)<br>[src/pronunciation/index.ts](../../../../sources/toss__es-hangul/src/pronunciation/index.ts)<br>[src/pronunciation/standardizePronunciation/index.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/index.ts)<br>[src/pronunciation/standardizePronunciation/rules/index.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/index.ts)<br>[src/pronunciation/romanize/index.ts](../../../../sources/toss__es-hangul/src/pronunciation/romanize/index.ts)<br>[src/number/index.ts](../../../../sources/toss__es-hangul/src/number/index.ts)<br>[src/number/susa/index.ts](../../../../sources/toss__es-hangul/src/number/susa/index.ts)<br>[src/number/seosusa/index.ts](../../../../sources/toss__es-hangul/src/number/seosusa/index.ts) |
| spec | 36 | [src/pronunciation/standardizePronunciation/standardizePronunciation.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/standardizePronunciation.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform12th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform12th.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform13And14th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform13And14th.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform16th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform16th.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform17th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform17th.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform18th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform18th.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform19th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform19th.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform20th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform20th.spec.ts) |
| eval | 40 | [src/pronunciation/standardizePronunciation/standardizePronunciation.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/standardizePronunciation.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform12th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform12th.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform13And14th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform13And14th.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform16th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform16th.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform17th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform17th.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform18th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform18th.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform19th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform19th.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform20th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform20th.spec.ts) |
| security | 1 | [SECURITY.md](../../../../sources/toss__es-hangul/SECURITY.md) |
| ci | 3 | [.github/workflows/broken-link-checker.yml](../../../../sources/toss__es-hangul/.github/workflows/broken-link-checker.yml)<br>[.github/workflows/codecov.yml](../../../../sources/toss__es-hangul/.github/workflows/codecov.yml)<br>[.github/workflows/release.yml](../../../../sources/toss__es-hangul/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 121 | [README-en_us.md](../../../../sources/toss__es-hangul/README-en_us.md)<br>[README.md](../../../../sources/toss__es-hangul/README.md)<br>[docs/.eslintrc.json](../../../../sources/toss__es-hangul/docs/.eslintrc.json)<br>[docs/.gitignore](../../../../sources/toss__es-hangul/docs/.gitignore)<br>[docs/CHANGELOG.md](../../../../sources/toss__es-hangul/docs/CHANGELOG.md)<br>[docs/next.config.js](../../../../sources/toss__es-hangul/docs/next.config.js)<br>[docs/package.json](../../../../sources/toss__es-hangul/docs/package.json)<br>[docs/postcss.config.js](../../../../sources/toss__es-hangul/docs/postcss.config.js) |
| config | 5 | [package.json](../../../../sources/toss__es-hangul/package.json)<br>[tsconfig.json](../../../../sources/toss__es-hangul/tsconfig.json)<br>[docs/package.json](../../../../sources/toss__es-hangul/docs/package.json)<br>[docs/tsconfig.json](../../../../sources/toss__es-hangul/docs/tsconfig.json)<br>[benchmarks/package.json](../../../../sources/toss__es-hangul/benchmarks/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 40 | [src/pronunciation/standardizePronunciation/standardizePronunciation.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/standardizePronunciation.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform12th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform12th.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform13And14th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform13And14th.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform16th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform16th.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform17th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform17th.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform18th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform18th.spec.ts) |
| CI workflow | 3 | [.github/workflows/broken-link-checker.yml](../../../../sources/toss__es-hangul/.github/workflows/broken-link-checker.yml)<br>[.github/workflows/codecov.yml](../../../../sources/toss__es-hangul/.github/workflows/codecov.yml)<br>[.github/workflows/release.yml](../../../../sources/toss__es-hangul/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [SECURITY.md](../../../../sources/toss__es-hangul/SECURITY.md) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/index.ts`, `package.json`, `tsconfig.json`.
2. entrypoint를 따라 실행 흐름 확인: `src/index.ts`.
3. agent/tool runtime 매핑: `docs/src/hooks/use-is-dark-mode.ts`.
4. retrieval/memory/indexing 확인: `src/index.ts`, `src/pronunciation/index.ts`, `src/pronunciation/standardizePronunciation/index.ts`.
5. test/eval 파일로 동작 검증: `src/pronunciation/standardizePronunciation/standardizePronunciation.spec.ts`, `src/pronunciation/standardizePronunciation/rules/transform12th.spec.ts`, `src/pronunciation/standardizePronunciation/rules/transform13And14th.spec.ts`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 A modern JavaScript library for handling Hangul characters.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, next, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
