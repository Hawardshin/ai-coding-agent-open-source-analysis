# daangn/ventyd 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

A TypeScript-first event sourcing library with full type safety and flexible schema language & storage backends.

## 요약

- 조사 단위: `sources/daangn__ventyd` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 116 files, 24 directories, depth score 89, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=test/adapters/index.ts, src/index.ts, src/types/index.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | daangn/ventyd |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | TypeScript |
| Stars | 40 |
| Forks | 3 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/daangn__ventyd](../../../../sources/daangn__ventyd) |
| 기존 보고서 | [reports/korea-trending/repositories/daangn__ventyd.md](../../../korea-trending/repositories/daangn__ventyd.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 116 / 24 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .changeset, .github, .yarn, docs, scripts, skill, src, test |
| 상위 확장자 | .ts: 62, .mdx: 15, .md: 9, .json: 8, .tsx: 5, (none): 5, .png: 4, .yml: 3, .cjs: 1, .css: 1, .ico: 1, .lock: 1 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 44 |
| src | source boundary | 4 |
| .github | ci surface | 1 |
| scripts | top-level component | 1 |
| skill | top-level component | 1 |
| test | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | tsdown |
| build | package.json | build:docs | npm run build -w docs && tsx scripts/generate-docs.ts |
| utility | package.json | prepack | tsx scripts/generate-docs.ts |
| quality | package.json | format | biome check --write --unsafe . |
| build | package.json | release | changeset publish |
| test | package.json | test | vitest run ./test |
| quality | package.json | typecheck | tsc --noEmit |


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
| retrieval | [test/adapters/index.ts](../../../../sources/daangn__ventyd/test/adapters/index.ts) | retrieval signal |
| retrieval | [src/index.ts](../../../../sources/daangn__ventyd/src/index.ts) | retrieval signal |
| retrieval | [src/types/index.ts](../../../../sources/daangn__ventyd/src/types/index.ts) | retrieval signal |
| retrieval | [docs/content/docs/index.mdx](../../../../sources/daangn__ventyd/docs/content/docs/index.mdx) | retrieval signal |
| docs | [README.md](../../../../sources/daangn__ventyd/README.md) | docs signal |
| docs | [skill/README.md](../../../../sources/daangn__ventyd/skill/README.md) | docs signal |
| docs | [docs/.gitignore](../../../../sources/daangn__ventyd/docs/.gitignore) | docs signal |
| docs | [docs/package.json](../../../../sources/daangn__ventyd/docs/package.json) | docs signal |
| eval | [test/arktype.spec.ts](../../../../sources/daangn__ventyd/test/arktype.spec.ts) | eval signal |
| eval | [test/entity.spec.ts](../../../../sources/daangn__ventyd/test/entity.spec.ts) | eval signal |
| eval | [test/exports.spec.ts](../../../../sources/daangn__ventyd/test/exports.spec.ts) | eval signal |
| eval | [test/integration.spec.ts](../../../../sources/daangn__ventyd/test/integration.spec.ts) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.ts](../../../../sources/daangn__ventyd/src/index.ts) |
| agentRuntime | 7 | [skill/README.md](../../../../sources/daangn__ventyd/skill/README.md)<br>[skill/SKILL.md](../../../../sources/daangn__ventyd/skill/SKILL.md)<br>[skill/references/common-errors.md](../../../../sources/daangn__ventyd/skill/references/common-errors.md)<br>[skill/references/embedded-docs.md](../../../../sources/daangn__ventyd/skill/references/embedded-docs.md)<br>[skill/references/quick-start.md](../../../../sources/daangn__ventyd/skill/references/quick-start.md)<br>[skill/references/remote-docs.md](../../../../sources/daangn__ventyd/skill/references/remote-docs.md)<br>[docs/content/docs/skills.mdx](../../../../sources/daangn__ventyd/docs/content/docs/skills.mdx) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 4 | [test/adapters/index.ts](../../../../sources/daangn__ventyd/test/adapters/index.ts)<br>[src/index.ts](../../../../sources/daangn__ventyd/src/index.ts)<br>[src/types/index.ts](../../../../sources/daangn__ventyd/src/types/index.ts)<br>[docs/content/docs/index.mdx](../../../../sources/daangn__ventyd/docs/content/docs/index.mdx) |
| spec | 14 | [test/arktype.spec.ts](../../../../sources/daangn__ventyd/test/arktype.spec.ts)<br>[test/entity.spec.ts](../../../../sources/daangn__ventyd/test/entity.spec.ts)<br>[test/exports.spec.ts](../../../../sources/daangn__ventyd/test/exports.spec.ts)<br>[test/integration.spec.ts](../../../../sources/daangn__ventyd/test/integration.spec.ts)<br>[test/plugin.spec.ts](../../../../sources/daangn__ventyd/test/plugin.spec.ts)<br>[test/prisma-afterversion.spec.ts](../../../../sources/daangn__ventyd/test/prisma-afterversion.spec.ts)<br>[test/snapshot.spec.ts](../../../../sources/daangn__ventyd/test/snapshot.spec.ts)<br>[test/standard.spec.ts](../../../../sources/daangn__ventyd/test/standard.spec.ts) |
| eval | 23 | [test/arktype.spec.ts](../../../../sources/daangn__ventyd/test/arktype.spec.ts)<br>[test/entity.spec.ts](../../../../sources/daangn__ventyd/test/entity.spec.ts)<br>[test/exports.spec.ts](../../../../sources/daangn__ventyd/test/exports.spec.ts)<br>[test/integration.spec.ts](../../../../sources/daangn__ventyd/test/integration.spec.ts)<br>[test/plugin.spec.ts](../../../../sources/daangn__ventyd/test/plugin.spec.ts)<br>[test/prisma-afterversion.spec.ts](../../../../sources/daangn__ventyd/test/prisma-afterversion.spec.ts)<br>[test/snapshot.spec.ts](../../../../sources/daangn__ventyd/test/snapshot.spec.ts)<br>[test/standard.spec.ts](../../../../sources/daangn__ventyd/test/standard.spec.ts) |
| security | 0 | 명확하지 않음 |
| ci | 2 | [.github/workflows/integration.yml](../../../../sources/daangn__ventyd/.github/workflows/integration.yml)<br>[.github/workflows/release.yml](../../../../sources/daangn__ventyd/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 41 | [README.md](../../../../sources/daangn__ventyd/README.md)<br>[skill/README.md](../../../../sources/daangn__ventyd/skill/README.md)<br>[docs/.gitignore](../../../../sources/daangn__ventyd/docs/.gitignore)<br>[docs/package.json](../../../../sources/daangn__ventyd/docs/package.json)<br>[docs/react-router.config.ts](../../../../sources/daangn__ventyd/docs/react-router.config.ts)<br>[docs/serve.json](../../../../sources/daangn__ventyd/docs/serve.json)<br>[docs/source.config.ts](../../../../sources/daangn__ventyd/docs/source.config.ts)<br>[docs/tsconfig.json](../../../../sources/daangn__ventyd/docs/tsconfig.json) |
| config | 4 | [package.json](../../../../sources/daangn__ventyd/package.json)<br>[tsconfig.json](../../../../sources/daangn__ventyd/tsconfig.json)<br>[docs/package.json](../../../../sources/daangn__ventyd/docs/package.json)<br>[docs/tsconfig.json](../../../../sources/daangn__ventyd/docs/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 23 | [test/arktype.spec.ts](../../../../sources/daangn__ventyd/test/arktype.spec.ts)<br>[test/entity.spec.ts](../../../../sources/daangn__ventyd/test/entity.spec.ts)<br>[test/exports.spec.ts](../../../../sources/daangn__ventyd/test/exports.spec.ts)<br>[test/integration.spec.ts](../../../../sources/daangn__ventyd/test/integration.spec.ts)<br>[test/plugin.spec.ts](../../../../sources/daangn__ventyd/test/plugin.spec.ts)<br>[test/prisma-afterversion.spec.ts](../../../../sources/daangn__ventyd/test/prisma-afterversion.spec.ts) |
| CI workflow | 2 | [.github/workflows/integration.yml](../../../../sources/daangn__ventyd/.github/workflows/integration.yml)<br>[.github/workflows/release.yml](../../../../sources/daangn__ventyd/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `test/adapters/index.ts`, `src/index.ts`, `src/types/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `src/index.ts`.
3. agent/tool runtime 매핑: `skill/README.md`, `skill/SKILL.md`, `skill/references/common-errors.md`.
4. retrieval/memory/indexing 확인: `test/adapters/index.ts`, `src/index.ts`, `src/types/index.ts`.
5. test/eval 파일로 동작 검증: `test/arktype.spec.ts`, `test/entity.spec.ts`, `test/exports.spec.ts`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 A TypeScript first event sourcing library with full type safety and flexible schema language & storage backends.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, tests, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
