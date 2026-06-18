# HwangChanho/syncfortune 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

AI Korean fortune-telling app — deterministic Saju (Four Pillars) engine + RAG/LLM interpretation layer. React Native / Expo.

## 요약

- 조사 단위: `sources/HwangChanho__syncfortune` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 204 files, 16 directories, depth score 77, key references 9개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 retrieval/vector path, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 retrieval=docs/index.md, app/src/app/(app)/index.tsx이고, 의존성 단서는 anthropic, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | HwangChanho/syncfortune |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | TypeScript |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/HwangChanho__syncfortune](../../../../sources/HwangChanho__syncfortune) |
| 기존 보고서 | [reports/korea-trending/repositories/HwangChanho__syncfortune.md](../../../korea-trending/repositories/HwangChanho__syncfortune.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 204 / 16 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | app, docs, engine, spec |
| 상위 확장자 | .jpg: 78, .ts: 45, .tsx: 39, .png: 19, .md: 9, .json: 8, .example: 2, .js: 2, .yml: 1, (none): 1 |
| 소스 패턴 | retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 10 |
| app | top-level component | 1 |
| engine | top-level component | 1 |
| spec | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| test | package.json | test | echo "Error: no test specified" && exit 1 |
| quality | package.json | typecheck | tsc --noEmit |
| utility | package.json | verify | tsx engine/verify-fixture.ts |
| utility | package.json | p2 | tsx --env-file-if-exists=.env interpretation/run-p2.ts |
| utility | package.json | p3 | tsx --env-file-if-exists=.env interpretation/run-p3.ts |
| utility | package.json | p3all | tsx --env-file-if-exists=.env interpretation/run-p3-all.ts |
| utility | package.json | p4 | tsx --env-file-if-exists=.env interpretation/run-p4.ts |
| utility | package.json | p5 | tsx --env-file-if-exists=.env interpretation/run-p5.ts |
| utility | package.json | p1 | tsx --env-file-if-exists=.env interpretation/run-p1.ts |
| utility | package.json | guards | tsx engine/run-guards.ts |
| utility | package.json | diagram | npx -y @mermaid-js/mermaid-cli -i docs/ARCHITECTURE-DIAGRAM.md -o docs/img/arch.png -t default -b white -p docs/.puppeteer.json |
| utility | package.json | compat | tsx engine/run-compat.ts |
| utility | package.json | tri | tsx engine/run-tri.ts |
| utility | package.json | compatllm | tsx --env-file-if-exists=.env interpretation/run-compat-llm.ts |
| utility | package.json | twelve | tsx engine/run-twelve.ts |
| utility | package.json | sinsal | tsx engine/run-sinsal.ts |
| utility | package.json | verify:engine | tsx engine/verify-engine.ts |
| utility | package.json | trillm | tsx --env-file-if-exists=.env interpretation/run-tri-llm.ts |
| utility | package.json | example | tsx engine/example.ts |
| utility | package.json | ziwei | tsx engine/run-ziwei.ts |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | anthropic |
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
| retrieval | [docs/index.md](../../../../sources/HwangChanho__syncfortune/docs/index.md) | retrieval signal |
| docs | [README.md](../../../../sources/HwangChanho__syncfortune/README.md) | docs signal |
| docs | [docs/_config.yml](../../../../sources/HwangChanho__syncfortune/docs/_config.yml) | docs signal |
| docs | [docs/legal/privacy-en.md](../../../../sources/HwangChanho__syncfortune/docs/legal/privacy-en.md) | docs signal |
| eval | [spec/chart.ts](../../../../sources/HwangChanho__syncfortune/spec/chart.ts) | eval signal |
| config | [package.json](../../../../sources/HwangChanho__syncfortune/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/HwangChanho__syncfortune/tsconfig.json) | config signal |
| config | [app/package.json](../../../../sources/HwangChanho__syncfortune/app/package.json) | config signal |
| config | [app/tsconfig.json](../../../../sources/HwangChanho__syncfortune/app/tsconfig.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 2 | [docs/index.md](../../../../sources/HwangChanho__syncfortune/docs/index.md)<br>`app/src/app/(app)/index.tsx` |
| spec | 1 | [spec/chart.ts](../../../../sources/HwangChanho__syncfortune/spec/chart.ts) |
| eval | 1 | [spec/chart.ts](../../../../sources/HwangChanho__syncfortune/spec/chart.ts) |
| security | 1 | [app/src/app/auth-callback.tsx](../../../../sources/HwangChanho__syncfortune/app/src/app/auth-callback.tsx) |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 10 | [README.md](../../../../sources/HwangChanho__syncfortune/README.md)<br>[docs/_config.yml](../../../../sources/HwangChanho__syncfortune/docs/_config.yml)<br>[docs/index.md](../../../../sources/HwangChanho__syncfortune/docs/index.md)<br>[docs/legal/privacy-en.md](../../../../sources/HwangChanho__syncfortune/docs/legal/privacy-en.md)<br>[docs/legal/privacy-ja.md](../../../../sources/HwangChanho__syncfortune/docs/legal/privacy-ja.md)<br>[docs/legal/privacy-ko.md](../../../../sources/HwangChanho__syncfortune/docs/legal/privacy-ko.md)<br>[docs/legal/terms-en.md](../../../../sources/HwangChanho__syncfortune/docs/legal/terms-en.md)<br>[docs/legal/terms-ja.md](../../../../sources/HwangChanho__syncfortune/docs/legal/terms-ja.md) |
| config | 4 | [package.json](../../../../sources/HwangChanho__syncfortune/package.json)<br>[tsconfig.json](../../../../sources/HwangChanho__syncfortune/tsconfig.json)<br>[app/package.json](../../../../sources/HwangChanho__syncfortune/app/package.json)<br>[app/tsconfig.json](../../../../sources/HwangChanho__syncfortune/app/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1 | [spec/chart.ts](../../../../sources/HwangChanho__syncfortune/spec/chart.ts) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [app/src/app/auth-callback.tsx](../../../../sources/HwangChanho__syncfortune/app/src/app/auth-callback.tsx) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `docs/index.md`, `README.md`, `docs/_config.yml`.
2. retrieval/memory/indexing 확인: `docs/index.md`, `app/src/app/(app)/index.tsx`.
3. test/eval 파일로 동작 검증: `spec/chart.ts`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 AI Korean fortune telling app — deterministic Saju Four Pillars engine + RAG/LLM interpretation layer. React Native / Ex. 핵심 구조 신호는 TypeScript, package.json, README.md, anthropic, tests, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
