# netresearch/jira-skill Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

AI agent plugin for Jira — CLI tools for issues, worklogs, sprints, and more | Server/DC & Cloud

## 요약

- 조사 단위: `sources/netresearch__jira-skill` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 156 files, 94 directories, depth score 94, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, skills/jira-syntax/AGENTS.md, skills/jira-syntax/SKILL.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | netresearch/jira-skill |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 64 |
| Forks | 20 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/netresearch__jira-skill](../../../../sources/netresearch__jira-skill) |
| Existing report | [reports/global-trending/repositories/netresearch__jira-skill.md](../../../global-trending/repositories/netresearch__jira-skill.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 156 / 94 |
| Max observed depth | 6 |
| Top directories | .claude-plugin, .github, Build, docs, evals, hooks, scripts, skills, tests |
| Top extensions | .py: 51, .md: 31, .txt: 29, .yml: 16, .json: 14, (none): 6, .sh: 4, .yaml: 2, .0: 1, .jsonc: 1, .toml: 1 |
| Source patterns | agent/tool runtime, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 24 |
| docs | documentation surface | 5 |
| .github | ci surface | 1 |
| Build | top-level component | 1 |
| evals | top-level component | 1 |
| hooks | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | prepare | command -v pre-commit >/dev/null && pre-commit install --install-hooks 2>/dev/null \|\| true |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 59 | [AGENTS.md](../../../../sources/netresearch__jira-skill/AGENTS.md)<br>[skills/jira-syntax/AGENTS.md](../../../../sources/netresearch__jira-skill/skills/jira-syntax/AGENTS.md)<br>[skills/jira-syntax/SKILL.md](../../../../sources/netresearch__jira-skill/skills/jira-syntax/SKILL.md)<br>[skills/jira-syntax/templates/bug-report-template.md](../../../../sources/netresearch__jira-skill/skills/jira-syntax/templates/bug-report-template.md)<br>[skills/jira-syntax/templates/feature-request-template.md](../../../../sources/netresearch__jira-skill/skills/jira-syntax/templates/feature-request-template.md)<br>[skills/jira-syntax/scripts/validate-jira-syntax.sh](../../../../sources/netresearch__jira-skill/skills/jira-syntax/scripts/validate-jira-syntax.sh)<br>[skills/jira-syntax/references/cross-project-refs.md](../../../../sources/netresearch__jira-skill/skills/jira-syntax/references/cross-project-refs.md)<br>[skills/jira-syntax/references/jira-syntax-quick-reference.md](../../../../sources/netresearch__jira-skill/skills/jira-syntax/references/jira-syntax-quick-reference.md) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 2 | [PRD.md](../../../../sources/netresearch__jira-skill/PRD.md)<br>[docs/ARCHITECTURE.md](../../../../sources/netresearch__jira-skill/docs/ARCHITECTURE.md) |
| eval | 52 | [tests/conftest.py](../../../../sources/netresearch__jira-skill/tests/conftest.py)<br>[tests/test_attachment_security.py](../../../../sources/netresearch__jira-skill/tests/test_attachment_security.py)<br>[tests/test_changelog.py](../../../../sources/netresearch__jira-skill/tests/test_changelog.py)<br>[tests/test_cli_smoke.py](../../../../sources/netresearch__jira-skill/tests/test_cli_smoke.py)<br>[tests/test_client.py](../../../../sources/netresearch__jira-skill/tests/test_client.py)<br>[tests/test_config.py](../../../../sources/netresearch__jira-skill/tests/test_config.py)<br>[tests/test_detect_jira_issues.py](../../../../sources/netresearch__jira-skill/tests/test_detect_jira_issues.py)<br>[tests/test_input.py](../../../../sources/netresearch__jira-skill/tests/test_input.py) |
| security | 3 | [tests/test_attachment_security.py](../../../../sources/netresearch__jira-skill/tests/test_attachment_security.py)<br>[.github/workflows/dependency-audit.yml](../../../../sources/netresearch__jira-skill/.github/workflows/dependency-audit.yml)<br>[.github/workflows/security.yml](../../../../sources/netresearch__jira-skill/.github/workflows/security.yml) |
| ci | 13 | [.github/workflows/auto-merge-deps.yml](../../../../sources/netresearch__jira-skill/.github/workflows/auto-merge-deps.yml)<br>[.github/workflows/check-template-drift.yml](../../../../sources/netresearch__jira-skill/.github/workflows/check-template-drift.yml)<br>[.github/workflows/ci.yml](../../../../sources/netresearch__jira-skill/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/netresearch__jira-skill/.github/workflows/codeql.yml)<br>[.github/workflows/dependency-audit.yml](../../../../sources/netresearch__jira-skill/.github/workflows/dependency-audit.yml)<br>[.github/workflows/eval-validate.yml](../../../../sources/netresearch__jira-skill/.github/workflows/eval-validate.yml)<br>[.github/workflows/harness-verify.yml](../../../../sources/netresearch__jira-skill/.github/workflows/harness-verify.yml)<br>[.github/workflows/labeler.yml](../../../../sources/netresearch__jira-skill/.github/workflows/labeler.yml) |
| container | 0 | not obvious |
| instruction | 3 | [AGENTS.md](../../../../sources/netresearch__jira-skill/AGENTS.md)<br>[skills/jira-syntax/AGENTS.md](../../../../sources/netresearch__jira-skill/skills/jira-syntax/AGENTS.md)<br>[skills/jira-communication/AGENTS.md](../../../../sources/netresearch__jira-skill/skills/jira-communication/AGENTS.md) |
| docs | 4 | [README.md](../../../../sources/netresearch__jira-skill/README.md)<br>[docs/ARCHITECTURE.md](../../../../sources/netresearch__jira-skill/docs/ARCHITECTURE.md)<br>[docs/exec-plans/completed/.gitkeep](../../../../sources/netresearch__jira-skill/docs/exec-plans/completed/.gitkeep)<br>[docs/exec-plans/active/.gitkeep](../../../../sources/netresearch__jira-skill/docs/exec-plans/active/.gitkeep) |
| config | 2 | [package.json](../../../../sources/netresearch__jira-skill/package.json)<br>[pyproject.toml](../../../../sources/netresearch__jira-skill/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 52 | [tests/conftest.py](../../../../sources/netresearch__jira-skill/tests/conftest.py)<br>[tests/test_attachment_security.py](../../../../sources/netresearch__jira-skill/tests/test_attachment_security.py)<br>[tests/test_changelog.py](../../../../sources/netresearch__jira-skill/tests/test_changelog.py)<br>[tests/test_cli_smoke.py](../../../../sources/netresearch__jira-skill/tests/test_cli_smoke.py)<br>[tests/test_client.py](../../../../sources/netresearch__jira-skill/tests/test_client.py)<br>[tests/test_config.py](../../../../sources/netresearch__jira-skill/tests/test_config.py) |
| CI workflows | 13 | [.github/workflows/auto-merge-deps.yml](../../../../sources/netresearch__jira-skill/.github/workflows/auto-merge-deps.yml)<br>[.github/workflows/check-template-drift.yml](../../../../sources/netresearch__jira-skill/.github/workflows/check-template-drift.yml)<br>[.github/workflows/ci.yml](../../../../sources/netresearch__jira-skill/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/netresearch__jira-skill/.github/workflows/codeql.yml)<br>[.github/workflows/dependency-audit.yml](../../../../sources/netresearch__jira-skill/.github/workflows/dependency-audit.yml)<br>[.github/workflows/eval-validate.yml](../../../../sources/netresearch__jira-skill/.github/workflows/eval-validate.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 3 | [tests/test_attachment_security.py](../../../../sources/netresearch__jira-skill/tests/test_attachment_security.py)<br>[.github/workflows/dependency-audit.yml](../../../../sources/netresearch__jira-skill/.github/workflows/dependency-audit.yml)<br>[.github/workflows/security.yml](../../../../sources/netresearch__jira-skill/.github/workflows/security.yml) |
| Agent instructions | 3 | [AGENTS.md](../../../../sources/netresearch__jira-skill/AGENTS.md)<br>[skills/jira-syntax/AGENTS.md](../../../../sources/netresearch__jira-skill/skills/jira-syntax/AGENTS.md)<br>[skills/jira-communication/AGENTS.md](../../../../sources/netresearch__jira-skill/skills/jira-communication/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `AGENTS.md`, `skills/jira-syntax/AGENTS.md`, `skills/jira-syntax/SKILL.md`.
2. Map agent/tool runtime through: `AGENTS.md`, `skills/jira-syntax/AGENTS.md`, `skills/jira-syntax/SKILL.md`.
3. Verify behavior through test/eval files: `tests/conftest.py`, `tests/test_attachment_security.py`, `tests/test_changelog.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 AI agent plugin for Jira — CLI tools for issues, worklogs, sprints, and more Server/DC & Cloud. 핵심 구조 신호는 Python, package.json, pyproject.toml, README.md, AGENTS.md, tests이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
