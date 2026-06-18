# github/spec-kit Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 380 files, 111 directories.

## 요약

- 조사 단위: `sources/github__spec-kit` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 380 files, 111 directories, depth score 113, key references 9개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, workflows/speckit/workflow.yml, tests/hooks/plan.md이고, 의존성 단서는 vscode, click, typer, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | github/spec-kit |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | Python |
| Stars | 113352 |
| Forks | 10002 |
| License | MIT License |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/github__spec-kit](../../../../sources/github__spec-kit) |
| Existing report | [reports/clone-structures/github__spec-kit.md](../../../clone-structures/github__spec-kit.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 380 / 111 |
| Max observed depth | 6 |
| Top directories | .devcontainer, .github, docs, extensions, integrations, media, newsletters, presets, scripts, src, templates, tests, workflows |
| Top extensions | .py: 179, .md: 114, .yml: 33, .json: 15, .sh: 11, .ps1: 10, (none): 8, .gif: 2, .webp: 2, .cff: 1, .code-workspace: 1, .css: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 46 |
| docs | documentation surface | 32 |
| src | source boundary | 2 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| extensions | top-level component | 1 |
| integrations | top-level component | 1 |
| media | top-level component | 1 |
| newsletters | top-level component | 1 |
| presets | top-level component | 1 |
| scripts | top-level component | 1 |
| templates | top-level component | 1 |
| workflows | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| test | pyproject.toml | specify | specify |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | vscode, click, typer |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [AGENTS.md](../../../../sources/github__spec-kit/AGENTS.md) | agentRuntime signal |
| agentRuntime | [workflows/speckit/workflow.yml](../../../../sources/github__spec-kit/workflows/speckit/workflow.yml) | agentRuntime signal |
| agentRuntime | [tests/hooks/plan.md](../../../../sources/github__spec-kit/tests/hooks/plan.md) | agentRuntime signal |
| agentRuntime | [tests/hooks/spec.md](../../../../sources/github__spec-kit/tests/hooks/spec.md) | agentRuntime signal |
| config | [pyproject.toml](../../../../sources/github__spec-kit/pyproject.toml) | config signal |
| ci | [.github/workflows/add-community-extension.lock.yml](../../../../sources/github__spec-kit/.github/workflows/add-community-extension.lock.yml) | ci support |
| ci | [.github/workflows/add-community-extension.md](../../../../sources/github__spec-kit/.github/workflows/add-community-extension.md) | ci support |
| eval | [spec-driven.md](../../../../sources/github__spec-kit/spec-driven.md) | eval support |
| eval | [spec-kit.code-workspace](../../../../sources/github__spec-kit/spec-kit.code-workspace) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 17 | [AGENTS.md](../../../../sources/github__spec-kit/AGENTS.md)<br>[workflows/speckit/workflow.yml](../../../../sources/github__spec-kit/workflows/speckit/workflow.yml)<br>[tests/hooks/plan.md](../../../../sources/github__spec-kit/tests/hooks/plan.md)<br>[tests/hooks/spec.md](../../../../sources/github__spec-kit/tests/hooks/spec.md)<br>[tests/hooks/tasks.md](../../../../sources/github__spec-kit/tests/hooks/tasks.md)<br>[tests/hooks/TESTING.md](../../../../sources/github__spec-kit/tests/hooks/TESTING.md)<br>[tests/hooks/.specify/extensions.yml](../../../../sources/github__spec-kit/tests/hooks/.specify/extensions.yml)<br>[src/specify_cli/agents.py](../../../../sources/github__spec-kit/src/specify_cli/agents.py) |
| mcp | 0 | not obvious |
| retrieval | 1 | [docs/index.md](../../../../sources/github__spec-kit/docs/index.md) |
| spec | 10 | [spec-driven.md](../../../../sources/github__spec-kit/spec-driven.md)<br>[spec-kit.code-workspace](../../../../sources/github__spec-kit/spec-kit.code-workspace)<br>[workflows/ARCHITECTURE.md](../../../../sources/github__spec-kit/workflows/ARCHITECTURE.md)<br>[tests/hooks/spec.md](../../../../sources/github__spec-kit/tests/hooks/spec.md)<br>[templates/spec-template.md](../../../../sources/github__spec-kit/templates/spec-template.md)<br>[presets/ARCHITECTURE.md](../../../../sources/github__spec-kit/presets/ARCHITECTURE.md)<br>[presets/self-test/templates/spec-template.md](../../../../sources/github__spec-kit/presets/self-test/templates/spec-template.md)<br>[presets/scaffold/templates/spec-template.md](../../../../sources/github__spec-kit/presets/scaffold/templates/spec-template.md) |
| eval | 113 | [spec-driven.md](../../../../sources/github__spec-kit/spec-driven.md)<br>[spec-kit.code-workspace](../../../../sources/github__spec-kit/spec-kit.code-workspace)<br>[tests/__init__.py](../../../../sources/github__spec-kit/tests/__init__.py)<br>[tests/auth_helpers.py](../../../../sources/github__spec-kit/tests/auth_helpers.py)<br>[tests/conftest.py](../../../../sources/github__spec-kit/tests/conftest.py)<br>[tests/http_helpers.py](../../../../sources/github__spec-kit/tests/http_helpers.py)<br>[tests/self_upgrade_helpers.py](../../../../sources/github__spec-kit/tests/self_upgrade_helpers.py)<br>[tests/test_agent_config_consistency.py](../../../../sources/github__spec-kit/tests/test_agent_config_consistency.py) |
| security | 2 | [SECURITY.md](../../../../sources/github__spec-kit/SECURITY.md)<br>[tests/auth_helpers.py](../../../../sources/github__spec-kit/tests/auth_helpers.py) |
| ci | 15 | [.github/workflows/add-community-extension.lock.yml](../../../../sources/github__spec-kit/.github/workflows/add-community-extension.lock.yml)<br>[.github/workflows/add-community-extension.md](../../../../sources/github__spec-kit/.github/workflows/add-community-extension.md)<br>[.github/workflows/add-community-preset.lock.yml](../../../../sources/github__spec-kit/.github/workflows/add-community-preset.lock.yml)<br>[.github/workflows/add-community-preset.md](../../../../sources/github__spec-kit/.github/workflows/add-community-preset.md)<br>[.github/workflows/bug-assess.lock.yml](../../../../sources/github__spec-kit/.github/workflows/bug-assess.lock.yml)<br>[.github/workflows/bug-assess.md](../../../../sources/github__spec-kit/.github/workflows/bug-assess.md)<br>[.github/workflows/catalog-assign.yml](../../../../sources/github__spec-kit/.github/workflows/catalog-assign.yml)<br>[.github/workflows/codeql.yml](../../../../sources/github__spec-kit/.github/workflows/codeql.yml) |
| container | 0 | not obvious |
| instruction | 1 | [AGENTS.md](../../../../sources/github__spec-kit/AGENTS.md) |
| docs | 41 | [README.md](../../../../sources/github__spec-kit/README.md)<br>[workflows/README.md](../../../../sources/github__spec-kit/workflows/README.md)<br>[presets/README.md](../../../../sources/github__spec-kit/presets/README.md)<br>[presets/scaffold/README.md](../../../../sources/github__spec-kit/presets/scaffold/README.md)<br>[presets/lean/README.md](../../../../sources/github__spec-kit/presets/lean/README.md)<br>[integrations/README.md](../../../../sources/github__spec-kit/integrations/README.md)<br>[extensions/README.md](../../../../sources/github__spec-kit/extensions/README.md)<br>[extensions/template/README.md](../../../../sources/github__spec-kit/extensions/template/README.md) |
| config | 1 | [pyproject.toml](../../../../sources/github__spec-kit/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 113 | [spec-driven.md](../../../../sources/github__spec-kit/spec-driven.md)<br>[spec-kit.code-workspace](../../../../sources/github__spec-kit/spec-kit.code-workspace)<br>[tests/__init__.py](../../../../sources/github__spec-kit/tests/__init__.py)<br>[tests/auth_helpers.py](../../../../sources/github__spec-kit/tests/auth_helpers.py)<br>[tests/conftest.py](../../../../sources/github__spec-kit/tests/conftest.py)<br>[tests/http_helpers.py](../../../../sources/github__spec-kit/tests/http_helpers.py) |
| CI workflows | 15 | [.github/workflows/add-community-extension.lock.yml](../../../../sources/github__spec-kit/.github/workflows/add-community-extension.lock.yml)<br>[.github/workflows/add-community-extension.md](../../../../sources/github__spec-kit/.github/workflows/add-community-extension.md)<br>[.github/workflows/add-community-preset.lock.yml](../../../../sources/github__spec-kit/.github/workflows/add-community-preset.lock.yml)<br>[.github/workflows/add-community-preset.md](../../../../sources/github__spec-kit/.github/workflows/add-community-preset.md)<br>[.github/workflows/bug-assess.lock.yml](../../../../sources/github__spec-kit/.github/workflows/bug-assess.lock.yml)<br>[.github/workflows/bug-assess.md](../../../../sources/github__spec-kit/.github/workflows/bug-assess.md) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 2 | [SECURITY.md](../../../../sources/github__spec-kit/SECURITY.md)<br>[tests/auth_helpers.py](../../../../sources/github__spec-kit/tests/auth_helpers.py) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/github__spec-kit/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `AGENTS.md`, `workflows/speckit/workflow.yml`, `tests/hooks/plan.md`.
2. Map agent/tool runtime through: `AGENTS.md`, `workflows/speckit/workflow.yml`, `tests/hooks/plan.md`.
3. Inspect retrieval/memory/indexing through: `docs/index.md`.
4. Verify behavior through test/eval files: `spec-driven.md`, `spec-kit.code-workspace`, `tests/__init__.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 380 files, 111 directories.. 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, LICENSE, vscode이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 major metadata risk not obvious입니다.
