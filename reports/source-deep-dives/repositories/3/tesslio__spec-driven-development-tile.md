# tesslio/spec-driven-development-tile 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Local clone structure analysis: 37 files, 20 directories.

## 요약

- 조사 단위: `sources/tesslio__spec-driven-development-tile` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 37 files, 20 directories, depth score 87, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

스펙 드리븐/요구사항 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 spec=skills/spec-writer/SKILL.md, skills/spec-verification/SKILL.md, skills/requirement-gathering/SKILL.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 스펙 workflow와 요구사항 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | tesslio/spec-driven-development-tile |
| 주제 | 스펙 드리븐/요구사항 / 스펙 드리븐/요구사항 |
| Region | mixed |
| Language | Shell |
| Stars | 40 |
| Forks | 7 |
| License | MIT License |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/tesslio__spec-driven-development-tile](../../../../sources/tesslio__spec-driven-development-tile) |
| 기존 보고서 | [reports/clone-structures/tesslio__spec-driven-development-tile.md](../../../clone-structures/tesslio__spec-driven-development-tile.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 37 / 20 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | .github, docs, evals, rules, scripts, skills |
| 상위 확장자 | .md: 20, .json: 10, (none): 3, .sh: 2, .yaml: 2 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 9 |
| .github | ci surface | 1 |
| evals | top-level component | 1 |
| rules | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | publish | make publish |
| quality | Makefile | lint | make lint |
| utility | Makefile | review | make review |
| utility | Makefile | eval | make eval |


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
| spec | [skills/spec-writer/SKILL.md](../../../../sources/tesslio__spec-driven-development-tile/skills/spec-writer/SKILL.md) | spec signal |
| spec | [skills/spec-verification/SKILL.md](../../../../sources/tesslio__spec-driven-development-tile/skills/spec-verification/SKILL.md) | spec signal |
| spec | [skills/requirement-gathering/SKILL.md](../../../../sources/tesslio__spec-driven-development-tile/skills/requirement-gathering/SKILL.md) | spec signal |
| spec | [scripts/check-spec-links.sh](../../../../sources/tesslio__spec-driven-development-tile/scripts/check-spec-links.sh) | spec signal |
| eval | [rules/spec-before-code.md](../../../../sources/tesslio__spec-driven-development-tile/rules/spec-before-code.md) | eval signal |
| docs | [README.md](../../../../sources/tesslio__spec-driven-development-tile/README.md) | docs signal |
| docs | [docs/index.md](../../../../sources/tesslio__spec-driven-development-tile/docs/index.md) | docs signal |
| docs | [docs/spec-format.md](../../../../sources/tesslio__spec-driven-development-tile/docs/spec-format.md) | docs signal |
| docs | [docs/spec-styleguide.md](../../../../sources/tesslio__spec-driven-development-tile/docs/spec-styleguide.md) | docs signal |
| config | [Makefile](../../../../sources/tesslio__spec-driven-development-tile/Makefile) | config signal |
| ci | [.github/workflows/ci.yaml](../../../../sources/tesslio__spec-driven-development-tile/.github/workflows/ci.yaml) | ci support |
| ci | [.github/workflows/publish.yaml](../../../../sources/tesslio__spec-driven-development-tile/.github/workflows/publish.yaml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 4 | [skills/work-review/SKILL.md](../../../../sources/tesslio__spec-driven-development-tile/skills/work-review/SKILL.md)<br>[skills/spec-writer/SKILL.md](../../../../sources/tesslio__spec-driven-development-tile/skills/spec-writer/SKILL.md)<br>[skills/spec-verification/SKILL.md](../../../../sources/tesslio__spec-driven-development-tile/skills/spec-verification/SKILL.md)<br>[skills/requirement-gathering/SKILL.md](../../../../sources/tesslio__spec-driven-development-tile/skills/requirement-gathering/SKILL.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 1 | [docs/index.md](../../../../sources/tesslio__spec-driven-development-tile/docs/index.md) |
| spec | 22 | [skills/spec-writer/SKILL.md](../../../../sources/tesslio__spec-driven-development-tile/skills/spec-writer/SKILL.md)<br>[skills/spec-verification/SKILL.md](../../../../sources/tesslio__spec-driven-development-tile/skills/spec-verification/SKILL.md)<br>[skills/requirement-gathering/SKILL.md](../../../../sources/tesslio__spec-driven-development-tile/skills/requirement-gathering/SKILL.md)<br>[scripts/check-spec-links.sh](../../../../sources/tesslio__spec-driven-development-tile/scripts/check-spec-links.sh)<br>[rules/spec-before-code.md](../../../../sources/tesslio__spec-driven-development-tile/rules/spec-before-code.md)<br>[rules/spec-format-compliance.md](../../../../sources/tesslio__spec-driven-development-tile/rules/spec-format-compliance.md)<br>[evals/work-review-with-discovered-requirements/criteria.json](../../../../sources/tesslio__spec-driven-development-tile/evals/work-review-with-discovered-requirements/criteria.json)<br>[evals/work-review-with-discovered-requirements/task.md](../../../../sources/tesslio__spec-driven-development-tile/evals/work-review-with-discovered-requirements/task.md) |
| eval | 17 | [skills/spec-writer/SKILL.md](../../../../sources/tesslio__spec-driven-development-tile/skills/spec-writer/SKILL.md)<br>[skills/spec-verification/SKILL.md](../../../../sources/tesslio__spec-driven-development-tile/skills/spec-verification/SKILL.md)<br>[scripts/check-spec-links.sh](../../../../sources/tesslio__spec-driven-development-tile/scripts/check-spec-links.sh)<br>[rules/spec-before-code.md](../../../../sources/tesslio__spec-driven-development-tile/rules/spec-before-code.md)<br>[rules/spec-format-compliance.md](../../../../sources/tesslio__spec-driven-development-tile/rules/spec-format-compliance.md)<br>[evals/spec-update-for-new-requirement/criteria.json](../../../../sources/tesslio__spec-driven-development-tile/evals/spec-update-for-new-requirement/criteria.json)<br>[evals/spec-update-for-new-requirement/task.md](../../../../sources/tesslio__spec-driven-development-tile/evals/spec-update-for-new-requirement/task.md)<br>[evals/spec-from-vague-request/criteria.json](../../../../sources/tesslio__spec-driven-development-tile/evals/spec-from-vague-request/criteria.json) |
| security | 1 | [rules/spec-format-compliance.md](../../../../sources/tesslio__spec-driven-development-tile/rules/spec-format-compliance.md) |
| ci | 2 | [.github/workflows/ci.yaml](../../../../sources/tesslio__spec-driven-development-tile/.github/workflows/ci.yaml)<br>[.github/workflows/publish.yaml](../../../../sources/tesslio__spec-driven-development-tile/.github/workflows/publish.yaml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 4 | [README.md](../../../../sources/tesslio__spec-driven-development-tile/README.md)<br>[docs/index.md](../../../../sources/tesslio__spec-driven-development-tile/docs/index.md)<br>[docs/spec-format.md](../../../../sources/tesslio__spec-driven-development-tile/docs/spec-format.md)<br>[docs/spec-styleguide.md](../../../../sources/tesslio__spec-driven-development-tile/docs/spec-styleguide.md) |
| config | 1 | [Makefile](../../../../sources/tesslio__spec-driven-development-tile/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 17 | [skills/spec-writer/SKILL.md](../../../../sources/tesslio__spec-driven-development-tile/skills/spec-writer/SKILL.md)<br>[skills/spec-verification/SKILL.md](../../../../sources/tesslio__spec-driven-development-tile/skills/spec-verification/SKILL.md)<br>[scripts/check-spec-links.sh](../../../../sources/tesslio__spec-driven-development-tile/scripts/check-spec-links.sh)<br>[rules/spec-before-code.md](../../../../sources/tesslio__spec-driven-development-tile/rules/spec-before-code.md)<br>[rules/spec-format-compliance.md](../../../../sources/tesslio__spec-driven-development-tile/rules/spec-format-compliance.md)<br>[evals/spec-update-for-new-requirement/criteria.json](../../../../sources/tesslio__spec-driven-development-tile/evals/spec-update-for-new-requirement/criteria.json) |
| CI workflow | 2 | [.github/workflows/ci.yaml](../../../../sources/tesslio__spec-driven-development-tile/.github/workflows/ci.yaml)<br>[.github/workflows/publish.yaml](../../../../sources/tesslio__spec-driven-development-tile/.github/workflows/publish.yaml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [rules/spec-format-compliance.md](../../../../sources/tesslio__spec-driven-development-tile/rules/spec-format-compliance.md) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `skills/spec-writer/SKILL.md`, `skills/spec-verification/SKILL.md`, `skills/requirement-gathering/SKILL.md`.
2. agent/tool runtime 매핑: `skills/work-review/SKILL.md`, `skills/spec-writer/SKILL.md`, `skills/spec-verification/SKILL.md`.
3. retrieval/memory/indexing 확인: `docs/index.md`.
4. test/eval 파일로 동작 검증: `skills/spec-writer/SKILL.md`, `skills/spec-verification/SKILL.md`, `scripts/check-spec-links.sh`.

## 기존 레포 인사이트

스펙 드리븐/요구사항 관점에서 Local clone structure analysis 37 files, 20 directories.. 핵심 구조 신호는 Shell, Makefile, README.md, LICENSE, ci, docs이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 스펙 드리븐/요구사항 레포입니다. 활용 관점은 스펙 workflow와 요구사항 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음입니다.
