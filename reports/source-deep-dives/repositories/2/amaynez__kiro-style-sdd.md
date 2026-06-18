# amaynez/kiro-style-sdd 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Local clone structure analysis: 26 files, 12 directories.

## 요약

- 조사 단위: `sources/amaynez__kiro-style-sdd` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 26 files, 12 directories, depth score 65, key references 9개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=tests/skills.test.js, .skills/spec/SKILL.md, .skills/plan/SKILL.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | amaynez/kiro-style-sdd |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | JavaScript |
| Stars | 77 |
| Forks | 17 |
| License | GNU General Public License v3.0 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/amaynez__kiro-style-sdd](../../../../sources/amaynez__kiro-style-sdd) |
| 기존 보고서 | [reports/clone-structures/amaynez__kiro-style-sdd.md](../../../clone-structures/amaynez__kiro-style-sdd.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 26 / 12 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | .claude, .cursor, .kiro, .skills, tests |
| 상위 확장자 | .md: 17, .mdc: 4, .json: 2, (none): 2, .js: 1 |
| 소스 패턴 | agent/tool runtime, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 3 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| test | package.json | test | node --test |


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
| agentRuntime | [tests/skills.test.js](../../../../sources/amaynez__kiro-style-sdd/tests/skills.test.js) | agentRuntime signal |
| agentRuntime | [.skills/spec/SKILL.md](../../../../sources/amaynez__kiro-style-sdd/.skills/spec/SKILL.md) | agentRuntime signal |
| agentRuntime | [.skills/plan/SKILL.md](../../../../sources/amaynez__kiro-style-sdd/.skills/plan/SKILL.md) | agentRuntime signal |
| agentRuntime | [.skills/implement/SKILL.md](../../../../sources/amaynez__kiro-style-sdd/.skills/implement/SKILL.md) | agentRuntime signal |
| instruction | [.cursor/rules/design.mdc](../../../../sources/amaynez__kiro-style-sdd/.cursor/rules/design.mdc) | instruction signal |
| instruction | [.cursor/rules/implement.mdc](../../../../sources/amaynez__kiro-style-sdd/.cursor/rules/implement.mdc) | instruction signal |
| instruction | [.cursor/rules/plan.mdc](../../../../sources/amaynez__kiro-style-sdd/.cursor/rules/plan.mdc) | instruction signal |
| instruction | [.cursor/rules/spec.mdc](../../../../sources/amaynez__kiro-style-sdd/.cursor/rules/spec.mdc) | instruction signal |
| config | [package.json](../../../../sources/amaynez__kiro-style-sdd/package.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 13 | [tests/skills.test.js](../../../../sources/amaynez__kiro-style-sdd/tests/skills.test.js)<br>[.skills/spec/SKILL.md](../../../../sources/amaynez__kiro-style-sdd/.skills/spec/SKILL.md)<br>[.skills/plan/SKILL.md](../../../../sources/amaynez__kiro-style-sdd/.skills/plan/SKILL.md)<br>[.skills/implement/SKILL.md](../../../../sources/amaynez__kiro-style-sdd/.skills/implement/SKILL.md)<br>[.skills/design/SKILL.md](../../../../sources/amaynez__kiro-style-sdd/.skills/design/SKILL.md)<br>[.kiro/skills/design.md](../../../../sources/amaynez__kiro-style-sdd/.kiro/skills/design.md)<br>[.kiro/skills/implement.md](../../../../sources/amaynez__kiro-style-sdd/.kiro/skills/implement.md)<br>[.kiro/skills/plan.md](../../../../sources/amaynez__kiro-style-sdd/.kiro/skills/plan.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 10 | [.skills/spec/SKILL.md](../../../../sources/amaynez__kiro-style-sdd/.skills/spec/SKILL.md)<br>[.skills/spec/template.md](../../../../sources/amaynez__kiro-style-sdd/.skills/spec/template.md)<br>[.skills/design/SKILL.md](../../../../sources/amaynez__kiro-style-sdd/.skills/design/SKILL.md)<br>[.skills/design/template.md](../../../../sources/amaynez__kiro-style-sdd/.skills/design/template.md)<br>[.kiro/skills/design.md](../../../../sources/amaynez__kiro-style-sdd/.kiro/skills/design.md)<br>[.kiro/skills/spec.md](../../../../sources/amaynez__kiro-style-sdd/.kiro/skills/spec.md)<br>[.cursor/rules/design.mdc](../../../../sources/amaynez__kiro-style-sdd/.cursor/rules/design.mdc)<br>[.cursor/rules/spec.mdc](../../../../sources/amaynez__kiro-style-sdd/.cursor/rules/spec.mdc) |
| eval | 6 | [tests/skills.test.js](../../../../sources/amaynez__kiro-style-sdd/tests/skills.test.js)<br>[.skills/spec/SKILL.md](../../../../sources/amaynez__kiro-style-sdd/.skills/spec/SKILL.md)<br>[.skills/spec/template.md](../../../../sources/amaynez__kiro-style-sdd/.skills/spec/template.md)<br>[.kiro/skills/spec.md](../../../../sources/amaynez__kiro-style-sdd/.kiro/skills/spec.md)<br>[.cursor/rules/spec.mdc](../../../../sources/amaynez__kiro-style-sdd/.cursor/rules/spec.mdc)<br>[.claude/skills/spec.md](../../../../sources/amaynez__kiro-style-sdd/.claude/skills/spec.md) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 4 | [.cursor/rules/design.mdc](../../../../sources/amaynez__kiro-style-sdd/.cursor/rules/design.mdc)<br>[.cursor/rules/implement.mdc](../../../../sources/amaynez__kiro-style-sdd/.cursor/rules/implement.mdc)<br>[.cursor/rules/plan.mdc](../../../../sources/amaynez__kiro-style-sdd/.cursor/rules/plan.mdc)<br>[.cursor/rules/spec.mdc](../../../../sources/amaynez__kiro-style-sdd/.cursor/rules/spec.mdc) |
| docs | 1 | [README.md](../../../../sources/amaynez__kiro-style-sdd/README.md) |
| config | 1 | [package.json](../../../../sources/amaynez__kiro-style-sdd/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 6 | [tests/skills.test.js](../../../../sources/amaynez__kiro-style-sdd/tests/skills.test.js)<br>[.skills/spec/SKILL.md](../../../../sources/amaynez__kiro-style-sdd/.skills/spec/SKILL.md)<br>[.skills/spec/template.md](../../../../sources/amaynez__kiro-style-sdd/.skills/spec/template.md)<br>[.kiro/skills/spec.md](../../../../sources/amaynez__kiro-style-sdd/.kiro/skills/spec.md)<br>[.cursor/rules/spec.mdc](../../../../sources/amaynez__kiro-style-sdd/.cursor/rules/spec.mdc)<br>[.claude/skills/spec.md](../../../../sources/amaynez__kiro-style-sdd/.claude/skills/spec.md) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 4 | [.cursor/rules/design.mdc](../../../../sources/amaynez__kiro-style-sdd/.cursor/rules/design.mdc)<br>[.cursor/rules/implement.mdc](../../../../sources/amaynez__kiro-style-sdd/.cursor/rules/implement.mdc)<br>[.cursor/rules/plan.mdc](../../../../sources/amaynez__kiro-style-sdd/.cursor/rules/plan.mdc)<br>[.cursor/rules/spec.mdc](../../../../sources/amaynez__kiro-style-sdd/.cursor/rules/spec.mdc) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/skills.test.js`, `.skills/spec/SKILL.md`, `.skills/plan/SKILL.md`.
2. agent/tool runtime 매핑: `tests/skills.test.js`, `.skills/spec/SKILL.md`, `.skills/plan/SKILL.md`.
3. test/eval 파일로 동작 검증: `tests/skills.test.js`, `.skills/spec/SKILL.md`, `.skills/spec/template.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 26 files, 12 directories.. 핵심 구조 신호는 JavaScript, package.json, README.md, LICENSE, tests, docs이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 CI 신호가 명확하지 않음입니다.
