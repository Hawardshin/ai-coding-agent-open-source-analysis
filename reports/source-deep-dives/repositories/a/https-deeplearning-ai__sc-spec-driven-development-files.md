# https-deeplearning-ai/sc-spec-driven-development-files 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Local clone structure analysis: 332 files, 101 directories.

## 요약

- 조사 단위: `sources/https-deeplearning-ai__sc-spec-driven-development-files` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 332 files, 101 directories, depth score 95, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

스펙 드리븐/요구사항 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 spec=Video14_Agents_replaceability/specs/roadmap.md, Video14_Agents_replaceability/specs/2026-04-07-about-us-content/requirements.md, Video14_Agents_replaceability/specs/2026-04-06-feedback-form/requirements.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 스펙 workflow와 요구사항 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | https-deeplearning-ai/sc-spec-driven-development-files |
| 주제 | 스펙 드리븐/요구사항 / 스펙 드리븐/요구사항 |
| Region | mixed |
| Language | TypeScript |
| Stars | 213 |
| Forks | 199 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/https-deeplearning-ai__sc-spec-driven-development-files](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files) |
| 기존 보고서 | [reports/clone-structures/https-deeplearning-ai__sc-spec-driven-development-files.md](../../../clone-structures/https-deeplearning-ai__sc-spec-driven-development-files.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 332 / 101 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | example_specs, prompts, skills, Video05_Creating_the_Constitution, Video06_Feature_Specification, Video07_Feature_Implementation, Video08_Feature_Validation, Video09_Project_Replanning, Video10_The_second_feature_phase, Video11_The_MVP, Video12_Legacy_support, Video13_Build_your_own_workflow, Video14_Agents_replaceability |
| 상위 확장자 | .tsx: 112, .md: 109, .ts: 35, .json: 29, .sql: 23, (none): 11, .css: 7, .py: 6 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| example_specs | top-level component | 1 |
| prompts | top-level component | 1 |
| skills | top-level component | 1 |
| Video05_Creating_the_Constitution | top-level component | 1 |
| Video06_Feature_Specification | ci surface | 1 |
| Video07_Feature_Implementation | top-level component | 1 |
| Video08_Feature_Validation | top-level component | 1 |
| Video09_Project_Replanning | top-level component | 1 |
| Video10_The_second_feature_phase | top-level component | 1 |
| Video11_The_MVP | top-level component | 1 |
| Video12_Legacy_support | top-level component | 1 |
| Video13_Build_your_own_workflow | top-level component | 1 |
| Video14_Agents_replaceability | top-level component | 1 |


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
| spec | [Video14_Agents_replaceability/specs/roadmap.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/specs/roadmap.md) | spec signal |
| spec | [Video14_Agents_replaceability/specs/2026-04-07-about-us-content/requirements.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/specs/2026-04-07-about-us-content/requirements.md) | spec signal |
| spec | [Video14_Agents_replaceability/specs/2026-04-06-feedback-form/requirements.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/specs/2026-04-06-feedback-form/requirements.md) | spec signal |
| spec | [Video14_Agents_replaceability/.claude/skills/feature-spec/SKILL.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/.claude/skills/feature-spec/SKILL.md) | spec signal |
| eval | [Video14_Agents_replaceability/tests/app.test.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/tests/app.test.tsx) | eval signal |
| eval | [Video14_Agents_replaceability/tests/components.test.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/tests/components.test.tsx) | eval signal |
| eval | [Video14_Agents_replaceability/tests/db.test.ts](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/tests/db.test.ts) | eval signal |
| docs | [README.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/README.md) | docs signal |
| docs | [Video14_Agents_replaceability/README.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/README.md) | docs signal |
| docs | [Video13_Build_your_own_workflow/README.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/README.md) | docs signal |
| docs | [Video12_Legacy_support/README.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video12_Legacy_support/README.md) | docs signal |
| config | [Video14_Agents_replaceability/package.json](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/package.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 22 | [Video14_Agents_replaceability/src/app.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/src/app.tsx)<br>[Video14_Agents_replaceability/src/index.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/src/index.tsx)<br>[Video14_Agents_replaceability/src/components/Main.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/src/components/Main.tsx)<br>[Video13_Build_your_own_workflow/src/app.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/src/app.tsx)<br>[Video13_Build_your_own_workflow/src/index.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/src/index.tsx)<br>[Video13_Build_your_own_workflow/src/components/Main.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/src/components/Main.tsx)<br>[Video12_Legacy_support/src/app.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video12_Legacy_support/src/app.tsx)<br>[Video12_Legacy_support/src/index.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video12_Legacy_support/src/index.tsx) |
| agentRuntime | 13 | [Video14_Agents_replaceability/src/routes/agents.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/src/routes/agents.tsx)<br>[Video14_Agents_replaceability/changelog/SKILL.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/changelog/SKILL.md)<br>[Video14_Agents_replaceability/.claude/skills/feature-spec/SKILL.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/.claude/skills/feature-spec/SKILL.md)<br>[Video13_Build_your_own_workflow/src/routes/agents.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/src/routes/agents.tsx)<br>[Video13_Build_your_own_workflow/changelog/SKILL.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/changelog/SKILL.md)<br>[Video12_Legacy_support/src/routes/agents.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video12_Legacy_support/src/routes/agents.tsx)<br>[Video12_Legacy_support/changelog/SKILL.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video12_Legacy_support/changelog/SKILL.md)<br>[Video11_The_MVP/src/routes/agents.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video11_The_MVP/src/routes/agents.tsx) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 14 | [Video14_Agents_replaceability/src/index.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/src/index.tsx)<br>[Video14_Agents_replaceability/src/db/index.ts](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/src/db/index.ts)<br>[Video13_Build_your_own_workflow/src/index.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/src/index.tsx)<br>[Video13_Build_your_own_workflow/src/db/index.ts](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/src/db/index.ts)<br>[Video12_Legacy_support/src/index.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video12_Legacy_support/src/index.tsx)<br>[Video12_Legacy_support/src/db/index.ts](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video12_Legacy_support/src/db/index.ts)<br>[Video11_The_MVP/src/index.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video11_The_MVP/src/index.tsx)<br>[Video11_The_MVP/src/db/index.ts](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video11_The_MVP/src/db/index.ts) |
| spec | 22 | [Video14_Agents_replaceability/specs/roadmap.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/specs/roadmap.md)<br>[Video14_Agents_replaceability/specs/2026-04-07-about-us-content/requirements.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/specs/2026-04-07-about-us-content/requirements.md)<br>[Video14_Agents_replaceability/specs/2026-04-06-feedback-form/requirements.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/specs/2026-04-06-feedback-form/requirements.md)<br>[Video14_Agents_replaceability/.claude/skills/feature-spec/SKILL.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/.claude/skills/feature-spec/SKILL.md)<br>[Video13_Build_your_own_workflow/specs/roadmap.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/specs/roadmap.md)<br>[Video13_Build_your_own_workflow/specs/2026-04-06-feedback-form/requirements.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/specs/2026-04-06-feedback-form/requirements.md)<br>[Video12_Legacy_support/specs/roadmap.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video12_Legacy_support/specs/roadmap.md)<br>[Video12_Legacy_support/specs/2026-04-06-mvp/requirements.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video12_Legacy_support/specs/2026-04-06-mvp/requirements.md) |
| eval | 16 | [Video14_Agents_replaceability/tests/app.test.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/tests/app.test.tsx)<br>[Video14_Agents_replaceability/tests/components.test.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/tests/components.test.tsx)<br>[Video14_Agents_replaceability/tests/db.test.ts](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/tests/db.test.ts)<br>[Video14_Agents_replaceability/.claude/skills/feature-spec/SKILL.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/.claude/skills/feature-spec/SKILL.md)<br>[Video13_Build_your_own_workflow/tests/app.test.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/tests/app.test.tsx)<br>[Video13_Build_your_own_workflow/tests/components.test.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/tests/components.test.tsx)<br>[Video13_Build_your_own_workflow/tests/db.test.ts](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/tests/db.test.ts)<br>[Video12_Legacy_support/tests/app.test.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video12_Legacy_support/tests/app.test.tsx) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 11 | [README.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/README.md)<br>[Video14_Agents_replaceability/README.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/README.md)<br>[Video13_Build_your_own_workflow/README.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/README.md)<br>[Video12_Legacy_support/README.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video12_Legacy_support/README.md)<br>[Video11_The_MVP/README.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video11_The_MVP/README.md)<br>[Video10_The_second_feature_phase/README.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video10_The_second_feature_phase/README.md)<br>[Video09_Project_Replanning/README.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video09_Project_Replanning/README.md)<br>[Video08_Feature_Validation/README.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video08_Feature_Validation/README.md) |
| config | 20 | [Video14_Agents_replaceability/package.json](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/package.json)<br>[Video14_Agents_replaceability/tsconfig.json](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/tsconfig.json)<br>[Video13_Build_your_own_workflow/package.json](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/package.json)<br>[Video13_Build_your_own_workflow/tsconfig.json](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/tsconfig.json)<br>[Video12_Legacy_support/package.json](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video12_Legacy_support/package.json)<br>[Video12_Legacy_support/tsconfig.json](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video12_Legacy_support/tsconfig.json)<br>[Video11_The_MVP/package.json](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video11_The_MVP/package.json)<br>[Video11_The_MVP/tsconfig.json](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video11_The_MVP/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 16 | [Video14_Agents_replaceability/tests/app.test.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/tests/app.test.tsx)<br>[Video14_Agents_replaceability/tests/components.test.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/tests/components.test.tsx)<br>[Video14_Agents_replaceability/tests/db.test.ts](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/tests/db.test.ts)<br>[Video14_Agents_replaceability/.claude/skills/feature-spec/SKILL.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/.claude/skills/feature-spec/SKILL.md)<br>[Video13_Build_your_own_workflow/tests/app.test.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/tests/app.test.tsx)<br>[Video13_Build_your_own_workflow/tests/components.test.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/tests/components.test.tsx) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `Video14_Agents_replaceability/specs/roadmap.md`, `Video14_Agents_replaceability/specs/2026-04-07-about-us-content/requirements.md`, `Video14_Agents_replaceability/specs/2026-04-06-feedback-form/requirements.md`.
2. entrypoint를 따라 실행 흐름 확인: `Video14_Agents_replaceability/src/app.tsx`, `Video14_Agents_replaceability/src/index.tsx`, `Video14_Agents_replaceability/src/components/Main.tsx`.
3. agent/tool runtime 매핑: `Video14_Agents_replaceability/src/routes/agents.tsx`, `Video14_Agents_replaceability/changelog/SKILL.md`, `Video14_Agents_replaceability/.claude/skills/feature-spec/SKILL.md`.
4. retrieval/memory/indexing 확인: `Video14_Agents_replaceability/src/index.tsx`, `Video14_Agents_replaceability/src/db/index.ts`, `Video13_Build_your_own_workflow/src/index.tsx`.
5. test/eval 파일로 동작 검증: `Video14_Agents_replaceability/tests/app.test.tsx`, `Video14_Agents_replaceability/tests/components.test.tsx`, `Video14_Agents_replaceability/tests/db.test.ts`.

## 기존 레포 인사이트

스펙 드리븐/요구사항 관점에서 Local clone structure analysis 332 files, 101 directories.. 핵심 구조 신호는 TypeScript, README.md, tests, ci, docs, agent-instructions이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 스펙 드리븐/요구사항 레포입니다. 활용 관점은 스펙 workflow와 요구사항 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
