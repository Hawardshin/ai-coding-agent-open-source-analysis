# green-dalii/obsidian-llm-wiki 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Karpathy's LLM Wiki implementation - multi-page knowledge generation with entity/concept pages and conversational query.

## 요약

- 조사 단위: `sources/green-dalii__obsidian-llm-wiki` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 152 files, 25 directories, depth score 90, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=src/wiki/contradictions.ts, src/wiki/conversation-ingest.ts, src/wiki/page-factory.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | green-dalii/obsidian-llm-wiki |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | TypeScript |
| Stars | 101 |
| Forks | 10 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/green-dalii__obsidian-llm-wiki](../../../../sources/green-dalii__obsidian-llm-wiki) |
| 기존 보고서 | [reports/llm-wiki/repositories/green-dalii__obsidian-llm-wiki.md](../../../llm-wiki/repositories/green-dalii__obsidian-llm-wiki.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 152 / 25 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, docs, src |
| 상위 확장자 | .ts: 122, .md: 16, .json: 6, .mjs: 2, (none): 2, .css: 1, .webp: 1, .yaml: 1, .yml: 1 |
| 소스 패턴 | cli-first, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 82 |
| docs | documentation surface | 9 |
| .github | ci surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | node esbuild.config.mjs |
| build | package.json | build | node esbuild.config.mjs production |
| serve-dev | package.json | build:dev | node esbuild.config.mjs dev |
| quality | package.json | lint | eslint src/ --max-warnings=0 |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |


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
| retrieval | [src/wiki/contradictions.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/wiki/contradictions.ts) | retrieval signal |
| retrieval | [src/wiki/conversation-ingest.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/wiki/conversation-ingest.ts) | retrieval signal |
| retrieval | [src/wiki/page-factory.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/wiki/page-factory.ts) | retrieval signal |
| retrieval | [src/wiki/query-engine.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/wiki/query-engine.ts) | retrieval signal |
| entrypoints | [src/main.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/main.ts) | entrypoints signal |
| docs | [README.md](../../../../sources/green-dalii__obsidian-llm-wiki/README.md) | docs signal |
| docs | [docs/README_CN.md](../../../../sources/green-dalii__obsidian-llm-wiki/docs/README_CN.md) | docs signal |
| docs | [docs/README_DE.md](../../../../sources/green-dalii__obsidian-llm-wiki/docs/README_DE.md) | docs signal |
| docs | [docs/README_ES.md](../../../../sources/green-dalii__obsidian-llm-wiki/docs/README_ES.md) | docs signal |
| eval | [src/wiki/lint/duplicate-detection.test.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/wiki/lint/duplicate-detection.test.ts) | eval signal |
| eval | [src/core/batch-limits.test.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/core/batch-limits.test.ts) | eval signal |
| eval | [src/core/batch-merger.test.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/core/batch-merger.test.ts) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [src/main.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/main.ts) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 47 | [src/wiki/contradictions.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/wiki/contradictions.ts)<br>[src/wiki/conversation-ingest.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/wiki/conversation-ingest.ts)<br>[src/wiki/page-factory.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/wiki/page-factory.ts)<br>[src/wiki/query-engine.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/wiki/query-engine.ts)<br>[src/wiki/source-analyzer.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/wiki/source-analyzer.ts)<br>[src/wiki/system-prompts.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/wiki/system-prompts.ts)<br>[src/wiki/wiki-engine.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/wiki/wiki-engine.ts)<br>[src/wiki/prompts/constraints.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/wiki/prompts/constraints.ts) |
| spec | 1 | [ROADMAP.md](../../../../sources/green-dalii__obsidian-llm-wiki/ROADMAP.md) |
| eval | 50 | [src/wiki/lint/duplicate-detection.test.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/wiki/lint/duplicate-detection.test.ts)<br>[src/core/batch-limits.test.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/core/batch-limits.test.ts)<br>[src/core/batch-merger.test.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/core/batch-merger.test.ts)<br>[src/core/convergence-detector.test.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/core/convergence-detector.test.ts)<br>[src/core/dead-link-detector.test.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/core/dead-link-detector.test.ts)<br>[src/core/orphan-matcher.test.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/core/orphan-matcher.test.ts)<br>[src/core/prompt-builders.test.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/core/prompt-builders.test.ts)<br>[src/__tests__/wiki/lint-fixes.test.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/__tests__/wiki/lint-fixes.test.ts) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/release.yml](../../../../sources/green-dalii__obsidian-llm-wiki/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [CLAUDE.md](../../../../sources/green-dalii__obsidian-llm-wiki/CLAUDE.md) |
| docs | 9 | [README.md](../../../../sources/green-dalii__obsidian-llm-wiki/README.md)<br>[docs/README_CN.md](../../../../sources/green-dalii__obsidian-llm-wiki/docs/README_CN.md)<br>[docs/README_DE.md](../../../../sources/green-dalii__obsidian-llm-wiki/docs/README_DE.md)<br>[docs/README_ES.md](../../../../sources/green-dalii__obsidian-llm-wiki/docs/README_ES.md)<br>[docs/README_FR.md](../../../../sources/green-dalii__obsidian-llm-wiki/docs/README_FR.md)<br>[docs/README_JA.md](../../../../sources/green-dalii__obsidian-llm-wiki/docs/README_JA.md)<br>[docs/README_KO.md](../../../../sources/green-dalii__obsidian-llm-wiki/docs/README_KO.md)<br>[docs/README_PT.md](../../../../sources/green-dalii__obsidian-llm-wiki/docs/README_PT.md) |
| config | 2 | [package.json](../../../../sources/green-dalii__obsidian-llm-wiki/package.json)<br>[tsconfig.json](../../../../sources/green-dalii__obsidian-llm-wiki/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 50 | [src/wiki/lint/duplicate-detection.test.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/wiki/lint/duplicate-detection.test.ts)<br>[src/core/batch-limits.test.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/core/batch-limits.test.ts)<br>[src/core/batch-merger.test.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/core/batch-merger.test.ts)<br>[src/core/convergence-detector.test.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/core/convergence-detector.test.ts)<br>[src/core/dead-link-detector.test.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/core/dead-link-detector.test.ts)<br>[src/core/orphan-matcher.test.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/core/orphan-matcher.test.ts) |
| CI workflow | 1 | [.github/workflows/release.yml](../../../../sources/green-dalii__obsidian-llm-wiki/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/green-dalii__obsidian-llm-wiki/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `src/wiki/contradictions.ts`, `src/wiki/conversation-ingest.ts`, `src/wiki/page-factory.ts`.
2. entrypoint를 따라 실행 흐름 확인: `src/main.ts`.
3. retrieval/memory/indexing 확인: `src/wiki/contradictions.ts`, `src/wiki/conversation-ingest.ts`, `src/wiki/page-factory.ts`.
4. test/eval 파일로 동작 검증: `src/wiki/lint/duplicate-detection.test.ts`, `src/core/batch-limits.test.ts`, `src/core/batch-merger.test.ts`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Karpathy's LLM Wiki implementation multi page knowledge generation with entity/concept pages and conversational query.. 핵심 구조 신호는 TypeScript, package.json, README.md, CLAUDE.md, LICENSE, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
