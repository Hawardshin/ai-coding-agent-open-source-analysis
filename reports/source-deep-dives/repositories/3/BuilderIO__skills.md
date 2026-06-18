# BuilderIO/skills 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Skills for coding agents

## 요약

- 조사 단위: `sources/BuilderIO__skills` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 44 files, 28 directories, depth score 58, key references 8개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=skills/visual-recap/README.md, skills/visual-recap/SKILL.md, skills/visual-recap/references/wireframe.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | BuilderIO/skills |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | JavaScript |
| Stars | 877 |
| Forks | 38 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/BuilderIO__skills](../../../../sources/BuilderIO__skills) |
| 기존 보고서 | [reports/global-trending/repositories/BuilderIO__skills.md](../../../global-trending/repositories/BuilderIO__skills.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 44 / 28 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .agents, .claude-plugin, .codex-plugin, .github, media, scripts, skills |
| 상위 확장자 | .md: 27, .yaml: 5, .json: 3, .png: 3, .yml: 2, .excalidraw: 1, .gif: 1, .mjs: 1, (none): 1 |
| 소스 패턴 | agent/tool runtime, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| media | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | sync:agent-native-plan-skills | node scripts/sync-agent-native-plan-skills.mjs |
| quality | package.json | check | node scripts/sync-agent-native-plan-skills.mjs --check |


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
| agentRuntime | [skills/visual-recap/README.md](../../../../sources/BuilderIO__skills/skills/visual-recap/README.md) | agentRuntime signal |
| agentRuntime | [skills/visual-recap/SKILL.md](../../../../sources/BuilderIO__skills/skills/visual-recap/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/visual-recap/references/wireframe.md](../../../../sources/BuilderIO__skills/skills/visual-recap/references/wireframe.md) | agentRuntime signal |
| agentRuntime | [skills/visual-plan/README.md](../../../../sources/BuilderIO__skills/skills/visual-plan/README.md) | agentRuntime signal |
| config | [package.json](../../../../sources/BuilderIO__skills/package.json) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/BuilderIO__skills/.github/workflows/ci.yml) | ci support |
| ci | [.github/workflows/update-agent-native-plan-skills.yml](../../../../sources/BuilderIO__skills/.github/workflows/update-agent-native-plan-skills.yml) | ci support |
| eval | [skills/visual-plan/references/document-quality.md](../../../../sources/BuilderIO__skills/skills/visual-plan/references/document-quality.md) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 34 | [skills/visual-recap/README.md](../../../../sources/BuilderIO__skills/skills/visual-recap/README.md)<br>[skills/visual-recap/SKILL.md](../../../../sources/BuilderIO__skills/skills/visual-recap/SKILL.md)<br>[skills/visual-recap/references/wireframe.md](../../../../sources/BuilderIO__skills/skills/visual-recap/references/wireframe.md)<br>[skills/visual-plan/README.md](../../../../sources/BuilderIO__skills/skills/visual-plan/README.md)<br>[skills/visual-plan/SKILL.md](../../../../sources/BuilderIO__skills/skills/visual-plan/SKILL.md)<br>[skills/visual-plan/references/canvas.md](../../../../sources/BuilderIO__skills/skills/visual-plan/references/canvas.md)<br>[skills/visual-plan/references/document-quality.md](../../../../sources/BuilderIO__skills/skills/visual-plan/references/document-quality.md)<br>[skills/visual-plan/references/exemplar.md](../../../../sources/BuilderIO__skills/skills/visual-plan/references/exemplar.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 1 | [skills/visual-plan/references/document-quality.md](../../../../sources/BuilderIO__skills/skills/visual-plan/references/document-quality.md) |
| security | 0 | 명확하지 않음 |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/BuilderIO__skills/.github/workflows/ci.yml)<br>[.github/workflows/update-agent-native-plan-skills.yml](../../../../sources/BuilderIO__skills/.github/workflows/update-agent-native-plan-skills.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 11 | [README.md](../../../../sources/BuilderIO__skills/README.md)<br>[skills/visual-recap/README.md](../../../../sources/BuilderIO__skills/skills/visual-recap/README.md)<br>[skills/visual-plan/README.md](../../../../sources/BuilderIO__skills/skills/visual-plan/README.md)<br>[skills/stay-within-limits/README.md](../../../../sources/BuilderIO__skills/skills/stay-within-limits/README.md)<br>[skills/read-the-damn-docs/README.md](../../../../sources/BuilderIO__skills/skills/read-the-damn-docs/README.md)<br>[skills/quick-recap/README.md](../../../../sources/BuilderIO__skills/skills/quick-recap/README.md)<br>[skills/plow-ahead/README.md](../../../../sources/BuilderIO__skills/skills/plow-ahead/README.md)<br>[skills/plan-arbiter/README.md](../../../../sources/BuilderIO__skills/skills/plan-arbiter/README.md) |
| config | 1 | [package.json](../../../../sources/BuilderIO__skills/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1 | [skills/visual-plan/references/document-quality.md](../../../../sources/BuilderIO__skills/skills/visual-plan/references/document-quality.md) |
| CI workflow | 2 | [.github/workflows/ci.yml](../../../../sources/BuilderIO__skills/.github/workflows/ci.yml)<br>[.github/workflows/update-agent-native-plan-skills.yml](../../../../sources/BuilderIO__skills/.github/workflows/update-agent-native-plan-skills.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `skills/visual-recap/README.md`, `skills/visual-recap/SKILL.md`, `skills/visual-recap/references/wireframe.md`.
2. agent/tool runtime 매핑: `skills/visual-recap/README.md`, `skills/visual-recap/SKILL.md`, `skills/visual-recap/references/wireframe.md`.
3. test/eval 파일로 동작 검증: `skills/visual-plan/references/document-quality.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Skills for coding agents. 핵심 구조 신호는 JavaScript, package.json, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
