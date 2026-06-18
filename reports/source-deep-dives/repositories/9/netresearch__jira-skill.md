# netresearch/jira-skill 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

AI agent plugin for Jira — CLI tools for issues, worklogs, sprints, and more | Server/DC & Cloud

## 요약

- 조사 단위: `sources/netresearch__jira-skill` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 156 files, 94 directories, depth score 88, key references 11개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, skills/jira-syntax/AGENTS.md, skills/jira-syntax/SKILL.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | netresearch/jira-skill |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 64 |
| Forks | 20 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/netresearch__jira-skill](../../../../sources/netresearch__jira-skill) |
| 기존 보고서 | [reports/global-trending/repositories/netresearch__jira-skill.md](../../../global-trending/repositories/netresearch__jira-skill.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 156 / 94 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .claude-plugin, .github, Build, docs, evals, hooks, scripts, skills, tests |
| 상위 확장자 | .py: 51, .md: 31, .txt: 29, .yml: 16, .json: 14, (none): 6, .sh: 4, .yaml: 2, .0: 1, .jsonc: 1, .toml: 1 |
| 소스 패턴 | agent/tool runtime, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 24 |
| docs | documentation surface | 5 |
| .github | ci surface | 1 |
| Build | top-level component | 1 |
| evals | top-level component | 1 |
| hooks | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | prepare | command -v pre-commit >/dev/null && pre-commit install --install-hooks 2>/dev/null \|\| true |


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
| agentRuntime | [AGENTS.md](../../../../sources/netresearch__jira-skill/AGENTS.md) | agentRuntime signal |
| agentRuntime | [skills/jira-syntax/AGENTS.md](../../../../sources/netresearch__jira-skill/skills/jira-syntax/AGENTS.md) | agentRuntime signal |
| agentRuntime | [skills/jira-syntax/SKILL.md](../../../../sources/netresearch__jira-skill/skills/jira-syntax/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/jira-syntax/templates/bug-report-template.md](../../../../sources/netresearch__jira-skill/skills/jira-syntax/templates/bug-report-template.md) | agentRuntime signal |
| instruction | [skills/jira-communication/AGENTS.md](../../../../sources/netresearch__jira-skill/skills/jira-communication/AGENTS.md) | instruction signal |
| config | [package.json](../../../../sources/netresearch__jira-skill/package.json) | config signal |
| config | [pyproject.toml](../../../../sources/netresearch__jira-skill/pyproject.toml) | config signal |
| ci | [.github/workflows/auto-merge-deps.yml](../../../../sources/netresearch__jira-skill/.github/workflows/auto-merge-deps.yml) | ci support |
| ci | [.github/workflows/check-template-drift.yml](../../../../sources/netresearch__jira-skill/.github/workflows/check-template-drift.yml) | ci support |
| eval | [tests/conftest.py](../../../../sources/netresearch__jira-skill/tests/conftest.py) | eval support |
| eval | [tests/test_attachment_security.py](../../../../sources/netresearch__jira-skill/tests/test_attachment_security.py) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 59 | [AGENTS.md](../../../../sources/netresearch__jira-skill/AGENTS.md)<br>[skills/jira-syntax/AGENTS.md](../../../../sources/netresearch__jira-skill/skills/jira-syntax/AGENTS.md)<br>[skills/jira-syntax/SKILL.md](../../../../sources/netresearch__jira-skill/skills/jira-syntax/SKILL.md)<br>[skills/jira-syntax/templates/bug-report-template.md](../../../../sources/netresearch__jira-skill/skills/jira-syntax/templates/bug-report-template.md)<br>[skills/jira-syntax/templates/feature-request-template.md](../../../../sources/netresearch__jira-skill/skills/jira-syntax/templates/feature-request-template.md)<br>[skills/jira-syntax/scripts/validate-jira-syntax.sh](../../../../sources/netresearch__jira-skill/skills/jira-syntax/scripts/validate-jira-syntax.sh)<br>[skills/jira-syntax/references/cross-project-refs.md](../../../../sources/netresearch__jira-skill/skills/jira-syntax/references/cross-project-refs.md)<br>[skills/jira-syntax/references/jira-syntax-quick-reference.md](../../../../sources/netresearch__jira-skill/skills/jira-syntax/references/jira-syntax-quick-reference.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 2 | [PRD.md](../../../../sources/netresearch__jira-skill/PRD.md)<br>[docs/ARCHITECTURE.md](../../../../sources/netresearch__jira-skill/docs/ARCHITECTURE.md) |
| eval | 52 | [tests/conftest.py](../../../../sources/netresearch__jira-skill/tests/conftest.py)<br>[tests/test_attachment_security.py](../../../../sources/netresearch__jira-skill/tests/test_attachment_security.py)<br>[tests/test_changelog.py](../../../../sources/netresearch__jira-skill/tests/test_changelog.py)<br>[tests/test_cli_smoke.py](../../../../sources/netresearch__jira-skill/tests/test_cli_smoke.py)<br>[tests/test_client.py](../../../../sources/netresearch__jira-skill/tests/test_client.py)<br>[tests/test_config.py](../../../../sources/netresearch__jira-skill/tests/test_config.py)<br>[tests/test_detect_jira_issues.py](../../../../sources/netresearch__jira-skill/tests/test_detect_jira_issues.py)<br>[tests/test_input.py](../../../../sources/netresearch__jira-skill/tests/test_input.py) |
| security | 3 | [tests/test_attachment_security.py](../../../../sources/netresearch__jira-skill/tests/test_attachment_security.py)<br>[.github/workflows/dependency-audit.yml](../../../../sources/netresearch__jira-skill/.github/workflows/dependency-audit.yml)<br>[.github/workflows/security.yml](../../../../sources/netresearch__jira-skill/.github/workflows/security.yml) |
| ci | 13 | [.github/workflows/auto-merge-deps.yml](../../../../sources/netresearch__jira-skill/.github/workflows/auto-merge-deps.yml)<br>[.github/workflows/check-template-drift.yml](../../../../sources/netresearch__jira-skill/.github/workflows/check-template-drift.yml)<br>[.github/workflows/ci.yml](../../../../sources/netresearch__jira-skill/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/netresearch__jira-skill/.github/workflows/codeql.yml)<br>[.github/workflows/dependency-audit.yml](../../../../sources/netresearch__jira-skill/.github/workflows/dependency-audit.yml)<br>[.github/workflows/eval-validate.yml](../../../../sources/netresearch__jira-skill/.github/workflows/eval-validate.yml)<br>[.github/workflows/harness-verify.yml](../../../../sources/netresearch__jira-skill/.github/workflows/harness-verify.yml)<br>[.github/workflows/labeler.yml](../../../../sources/netresearch__jira-skill/.github/workflows/labeler.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 3 | [AGENTS.md](../../../../sources/netresearch__jira-skill/AGENTS.md)<br>[skills/jira-syntax/AGENTS.md](../../../../sources/netresearch__jira-skill/skills/jira-syntax/AGENTS.md)<br>[skills/jira-communication/AGENTS.md](../../../../sources/netresearch__jira-skill/skills/jira-communication/AGENTS.md) |
| docs | 4 | [README.md](../../../../sources/netresearch__jira-skill/README.md)<br>[docs/ARCHITECTURE.md](../../../../sources/netresearch__jira-skill/docs/ARCHITECTURE.md)<br>[docs/exec-plans/completed/.gitkeep](../../../../sources/netresearch__jira-skill/docs/exec-plans/completed/.gitkeep)<br>[docs/exec-plans/active/.gitkeep](../../../../sources/netresearch__jira-skill/docs/exec-plans/active/.gitkeep) |
| config | 2 | [package.json](../../../../sources/netresearch__jira-skill/package.json)<br>[pyproject.toml](../../../../sources/netresearch__jira-skill/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 52 | [tests/conftest.py](../../../../sources/netresearch__jira-skill/tests/conftest.py)<br>[tests/test_attachment_security.py](../../../../sources/netresearch__jira-skill/tests/test_attachment_security.py)<br>[tests/test_changelog.py](../../../../sources/netresearch__jira-skill/tests/test_changelog.py)<br>[tests/test_cli_smoke.py](../../../../sources/netresearch__jira-skill/tests/test_cli_smoke.py)<br>[tests/test_client.py](../../../../sources/netresearch__jira-skill/tests/test_client.py)<br>[tests/test_config.py](../../../../sources/netresearch__jira-skill/tests/test_config.py) |
| CI workflow | 13 | [.github/workflows/auto-merge-deps.yml](../../../../sources/netresearch__jira-skill/.github/workflows/auto-merge-deps.yml)<br>[.github/workflows/check-template-drift.yml](../../../../sources/netresearch__jira-skill/.github/workflows/check-template-drift.yml)<br>[.github/workflows/ci.yml](../../../../sources/netresearch__jira-skill/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/netresearch__jira-skill/.github/workflows/codeql.yml)<br>[.github/workflows/dependency-audit.yml](../../../../sources/netresearch__jira-skill/.github/workflows/dependency-audit.yml)<br>[.github/workflows/eval-validate.yml](../../../../sources/netresearch__jira-skill/.github/workflows/eval-validate.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 3 | [tests/test_attachment_security.py](../../../../sources/netresearch__jira-skill/tests/test_attachment_security.py)<br>[.github/workflows/dependency-audit.yml](../../../../sources/netresearch__jira-skill/.github/workflows/dependency-audit.yml)<br>[.github/workflows/security.yml](../../../../sources/netresearch__jira-skill/.github/workflows/security.yml) |
| 에이전트 지시문 | 3 | [AGENTS.md](../../../../sources/netresearch__jira-skill/AGENTS.md)<br>[skills/jira-syntax/AGENTS.md](../../../../sources/netresearch__jira-skill/skills/jira-syntax/AGENTS.md)<br>[skills/jira-communication/AGENTS.md](../../../../sources/netresearch__jira-skill/skills/jira-communication/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `AGENTS.md`, `skills/jira-syntax/AGENTS.md`, `skills/jira-syntax/SKILL.md`.
2. agent/tool runtime 매핑: `AGENTS.md`, `skills/jira-syntax/AGENTS.md`, `skills/jira-syntax/SKILL.md`.
3. test/eval 파일로 동작 검증: `tests/conftest.py`, `tests/test_attachment_security.py`, `tests/test_changelog.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 AI agent plugin for Jira — CLI tools for issues, worklogs, sprints, and more Server/DC & Cloud. 핵심 구조 신호는 Python, package.json, pyproject.toml, README.md, AGENTS.md, tests이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
