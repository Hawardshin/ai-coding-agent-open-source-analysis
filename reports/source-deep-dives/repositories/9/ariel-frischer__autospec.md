# ariel-frischer/autospec Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 650 files, 102 directories.

## 요약

- 조사 단위: `sources/ariel-frischer__autospec` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 650 files, 102 directories, depth score 122, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, tests/e2e/workflow_test.go, scripts/hooks/post-merge이고, 의존성 단서는 claude, cobra, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | ariel-frischer/autospec |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Go |
| Stars | 136 |
| Forks | 10 |
| License | MIT License |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/ariel-frischer__autospec](../../../../sources/ariel-frischer__autospec) |
| Existing report | [reports/clone-structures/ariel-frischer__autospec.md](../../../clone-structures/ariel-frischer__autospec.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 650 / 102 |
| Max observed depth | 6 |
| Top directories | .agents, .autospec, .github, cmd, docs, internal, scripts, site, tests |
| Top extensions | .go: 451, .md: 89, .yaml: 69, .sh: 11, (none): 10, .yml: 8, .html: 2, .json: 2, .js: 1, .lock: 1, .mod: 1, .scss: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 50 |
| docs | documentation surface | 19 |
| .github | ci surface | 1 |
| cmd | source boundary | 1 |
| cmd/autospec | cmd workspace | 1 |
| internal | top-level component | 1 |
| scripts | top-level component | 1 |
| site | documentation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | version | make version |
| build | Makefile | build | make build |
| build | Makefile | build-all | make build-all |
| utility | Makefile | install | make install |
| utility | Makefile | install-prod | make install-prod |
| utility | Makefile | run | make run |
| utility | Makefile | docs-sync | make docs-sync |
| serve-dev | Makefile | serve | make serve |
| serve-dev | Makefile | dev | make dev |
| serve-dev | Makefile | dev-setup | make dev-setup |
| quality | Makefile | fmt | make fmt |
| utility | Makefile | vet | make vet |
| utility | Makefile | deps | make deps |
| utility | Makefile | vendor | make vendor |
| utility | Makefile | tidy | make tidy |
| test | Makefile | test-go | make test-go |
| test | Makefile | test-v | make test-v |
| test | Makefile | test-coverage | make test-coverage |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | claude |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | cobra |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [AGENTS.md](../../../../sources/ariel-frischer__autospec/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/e2e/workflow_test.go](../../../../sources/ariel-frischer__autospec/tests/e2e/workflow_test.go) | agentRuntime signal |
| agentRuntime | [scripts/hooks/post-merge](../../../../sources/ariel-frischer__autospec/scripts/hooks/post-merge) | agentRuntime signal |
| agentRuntime | [scripts/hooks/post-rewrite](../../../../sources/ariel-frischer__autospec/scripts/hooks/post-rewrite) | agentRuntime signal |
| entrypoints | [cmd/autospec/main.go](../../../../sources/ariel-frischer__autospec/cmd/autospec/main.go) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/ariel-frischer__autospec/CLAUDE.md) | instruction signal |
| instruction | [docs/public/agents.md](../../../../sources/ariel-frischer__autospec/docs/public/agents.md) | instruction signal |
| config | [go.mod](../../../../sources/ariel-frischer__autospec/go.mod) | config signal |
| config | [Makefile](../../../../sources/ariel-frischer__autospec/Makefile) | config signal |
| ci | [.gitlab-ci.yml](../../../../sources/ariel-frischer__autospec/.gitlab-ci.yml) | ci support |
| ci | [.github/workflows/ci.yml](../../../../sources/ariel-frischer__autospec/.github/workflows/ci.yml) | ci support |
| eval | [tests/mocks/README.md](../../../../sources/ariel-frischer__autospec/tests/mocks/README.md) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [cmd/autospec/main.go](../../../../sources/ariel-frischer__autospec/cmd/autospec/main.go) |
| agentRuntime | 90 | [AGENTS.md](../../../../sources/ariel-frischer__autospec/AGENTS.md)<br>[tests/e2e/workflow_test.go](../../../../sources/ariel-frischer__autospec/tests/e2e/workflow_test.go)<br>[scripts/hooks/post-merge](../../../../sources/ariel-frischer__autospec/scripts/hooks/post-merge)<br>[scripts/hooks/post-rewrite](../../../../sources/ariel-frischer__autospec/scripts/hooks/post-rewrite)<br>[scripts/hooks/pre-merge-commit](../../../../sources/ariel-frischer__autospec/scripts/hooks/pre-merge-commit)<br>[scripts/hooks/pre-rebase](../../../../sources/ariel-frischer__autospec/scripts/hooks/pre-rebase)<br>[internal/workflow/autocommit_test.go](../../../../sources/ariel-frischer__autospec/internal/workflow/autocommit_test.go)<br>[internal/workflow/autocommit.go](../../../../sources/ariel-frischer__autospec/internal/workflow/autocommit.go) |
| mcp | 0 | not obvious |
| retrieval | 8 | [site/index.md](../../../../sources/ariel-frischer__autospec/site/index.md)<br>[site/reference/index.md](../../../../sources/ariel-frischer__autospec/site/reference/index.md)<br>[site/guides/index.md](../../../../sources/ariel-frischer__autospec/site/guides/index.md)<br>[site/contributing/index.md](../../../../sources/ariel-frischer__autospec/site/contributing/index.md)<br>[internal/commands/embed_test.go](../../../../sources/ariel-frischer__autospec/internal/commands/embed_test.go)<br>[internal/commands/embed.go](../../../../sources/ariel-frischer__autospec/internal/commands/embed.go)<br>[internal/changelog/embed_test.go](../../../../sources/ariel-frischer__autospec/internal/changelog/embed_test.go)<br>[internal/changelog/embed.go](../../../../sources/ariel-frischer__autospec/internal/changelog/embed.go) |
| spec | 33 | [tests/mocks/fixtures/valid/spec.yaml](../../../../sources/ariel-frischer__autospec/tests/mocks/fixtures/valid/spec.yaml)<br>[tests/mocks/fixtures/partial/spec.yaml](../../../../sources/ariel-frischer__autospec/tests/mocks/fixtures/partial/spec.yaml)<br>[tests/mocks/fixtures/invalid/spec-missing-feature.yaml](../../../../sources/ariel-frischer__autospec/tests/mocks/fixtures/invalid/spec-missing-feature.yaml)<br>[tests/fixtures/mock-spec.md](../../../../sources/ariel-frischer__autospec/tests/fixtures/mock-spec.md)<br>[tests/e2e/spec_schema_test.go](../../../../sources/ariel-frischer__autospec/tests/e2e/spec_schema_test.go)<br>[tests/e2e/testdata/responses/spec.yaml](../../../../sources/ariel-frischer__autospec/tests/e2e/testdata/responses/spec.yaml)<br>[internal/workflow/testdata/spec/valid/spec.yaml](../../../../sources/ariel-frischer__autospec/internal/workflow/testdata/spec/valid/spec.yaml)<br>[internal/workflow/testdata/spec/invalid/spec.yaml](../../../../sources/ariel-frischer__autospec/internal/workflow/testdata/spec/invalid/spec.yaml) |
| eval | 275 | [tests/mocks/README.md](../../../../sources/ariel-frischer__autospec/tests/mocks/README.md)<br>[tests/mocks/scripts/generate-mock-artifacts.sh](../../../../sources/ariel-frischer__autospec/tests/mocks/scripts/generate-mock-artifacts.sh)<br>[tests/mocks/scripts/mock_claude_test.go](../../../../sources/ariel-frischer__autospec/tests/mocks/scripts/mock_claude_test.go)<br>[tests/mocks/scripts/mock-claude.sh](../../../../sources/ariel-frischer__autospec/tests/mocks/scripts/mock-claude.sh)<br>[tests/mocks/scripts/mock-opencode.sh](../../../../sources/ariel-frischer__autospec/tests/mocks/scripts/mock-opencode.sh)<br>[tests/mocks/fixtures/valid/plan.yaml](../../../../sources/ariel-frischer__autospec/tests/mocks/fixtures/valid/plan.yaml)<br>[tests/mocks/fixtures/valid/spec.yaml](../../../../sources/ariel-frischer__autospec/tests/mocks/fixtures/valid/spec.yaml)<br>[tests/mocks/fixtures/valid/tasks.yaml](../../../../sources/ariel-frischer__autospec/tests/mocks/fixtures/valid/tasks.yaml) |
| security | 7 | [tests/e2e/coverage_audit_test.go](../../../../sources/ariel-frischer__autospec/tests/e2e/coverage_audit_test.go)<br>[internal/workflow/security_notice_test.go](../../../../sources/ariel-frischer__autospec/internal/workflow/security_notice_test.go)<br>[internal/workflow/security_notice.go](../../../../sources/ariel-frischer__autospec/internal/workflow/security_notice.go)<br>[internal/uninstall/permission_unix.go](../../../../sources/ariel-frischer__autospec/internal/uninstall/permission_unix.go)<br>[internal/uninstall/permission_windows.go](../../../../sources/ariel-frischer__autospec/internal/uninstall/permission_windows.go)<br>[internal/cli/shared/security_notice.go](../../../../sources/ariel-frischer__autospec/internal/cli/shared/security_notice.go)<br>[.github/SECURITY.md](../../../../sources/ariel-frischer__autospec/.github/SECURITY.md) |
| ci | 4 | [.gitlab-ci.yml](../../../../sources/ariel-frischer__autospec/.gitlab-ci.yml)<br>[.github/workflows/ci.yml](../../../../sources/ariel-frischer__autospec/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/ariel-frischer__autospec/.github/workflows/docs.yml)<br>[.github/workflows/release.yml](../../../../sources/ariel-frischer__autospec/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 3 | [AGENTS.md](../../../../sources/ariel-frischer__autospec/AGENTS.md)<br>[CLAUDE.md](../../../../sources/ariel-frischer__autospec/CLAUDE.md)<br>[docs/public/agents.md](../../../../sources/ariel-frischer__autospec/docs/public/agents.md) |
| docs | 57 | [README.md](../../../../sources/ariel-frischer__autospec/README.md)<br>[tests/mocks/README.md](../../../../sources/ariel-frischer__autospec/tests/mocks/README.md)<br>[site/_config.yml](../../../../sources/ariel-frischer__autospec/site/_config.yml)<br>[site/.gitignore](../../../../sources/ariel-frischer__autospec/site/.gitignore)<br>[site/favicon.svg](../../../../sources/ariel-frischer__autospec/site/favicon.svg)<br>[site/Gemfile](../../../../sources/ariel-frischer__autospec/site/Gemfile)<br>[site/Gemfile.lock](../../../../sources/ariel-frischer__autospec/site/Gemfile.lock)<br>[site/index.md](../../../../sources/ariel-frischer__autospec/site/index.md) |
| config | 2 | [go.mod](../../../../sources/ariel-frischer__autospec/go.mod)<br>[Makefile](../../../../sources/ariel-frischer__autospec/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 275 | [tests/mocks/README.md](../../../../sources/ariel-frischer__autospec/tests/mocks/README.md)<br>[tests/mocks/scripts/generate-mock-artifacts.sh](../../../../sources/ariel-frischer__autospec/tests/mocks/scripts/generate-mock-artifacts.sh)<br>[tests/mocks/scripts/mock_claude_test.go](../../../../sources/ariel-frischer__autospec/tests/mocks/scripts/mock_claude_test.go)<br>[tests/mocks/scripts/mock-claude.sh](../../../../sources/ariel-frischer__autospec/tests/mocks/scripts/mock-claude.sh)<br>[tests/mocks/scripts/mock-opencode.sh](../../../../sources/ariel-frischer__autospec/tests/mocks/scripts/mock-opencode.sh)<br>[tests/mocks/fixtures/valid/plan.yaml](../../../../sources/ariel-frischer__autospec/tests/mocks/fixtures/valid/plan.yaml) |
| CI workflows | 4 | [.gitlab-ci.yml](../../../../sources/ariel-frischer__autospec/.gitlab-ci.yml)<br>[.github/workflows/ci.yml](../../../../sources/ariel-frischer__autospec/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/ariel-frischer__autospec/.github/workflows/docs.yml)<br>[.github/workflows/release.yml](../../../../sources/ariel-frischer__autospec/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 7 | [tests/e2e/coverage_audit_test.go](../../../../sources/ariel-frischer__autospec/tests/e2e/coverage_audit_test.go)<br>[internal/workflow/security_notice_test.go](../../../../sources/ariel-frischer__autospec/internal/workflow/security_notice_test.go)<br>[internal/workflow/security_notice.go](../../../../sources/ariel-frischer__autospec/internal/workflow/security_notice.go)<br>[internal/uninstall/permission_unix.go](../../../../sources/ariel-frischer__autospec/internal/uninstall/permission_unix.go)<br>[internal/uninstall/permission_windows.go](../../../../sources/ariel-frischer__autospec/internal/uninstall/permission_windows.go)<br>[internal/cli/shared/security_notice.go](../../../../sources/ariel-frischer__autospec/internal/cli/shared/security_notice.go) |
| Agent instructions | 3 | [AGENTS.md](../../../../sources/ariel-frischer__autospec/AGENTS.md)<br>[CLAUDE.md](../../../../sources/ariel-frischer__autospec/CLAUDE.md)<br>[docs/public/agents.md](../../../../sources/ariel-frischer__autospec/docs/public/agents.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `AGENTS.md`, `tests/e2e/workflow_test.go`, `scripts/hooks/post-merge`.
2. Trace execution through entrypoints: `cmd/autospec/main.go`.
3. Map agent/tool runtime through: `AGENTS.md`, `tests/e2e/workflow_test.go`, `scripts/hooks/post-merge`.
4. Inspect retrieval/memory/indexing through: `site/index.md`, `site/reference/index.md`, `site/guides/index.md`.
5. Verify behavior through test/eval files: `tests/mocks/README.md`, `tests/mocks/scripts/generate-mock-artifacts.sh`, `tests/mocks/scripts/mock_claude_test.go`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 650 files, 102 directories.. 핵심 구조 신호는 Go, go.mod, Makefile, README.md, AGENTS.md, CLAUDE.md이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 major metadata risk not obvious입니다.
