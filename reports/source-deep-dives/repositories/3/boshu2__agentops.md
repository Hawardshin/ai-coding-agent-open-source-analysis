# boshu2/agentops Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

The operational layer for coding agents. Memory, validation, and feedback loops that compound between sessions.

## 요약

- 조사 단위: `sources/boshu2__agentops` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 4,574 files, 832 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

코딩 에이전트/IDE 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=tests/fixtures/proof-repo/main.go, evals/workbench/python-api/app/main.py, evals/workbench/go-cli/cmd/wb/main.go이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 coding-agent reference implementation이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | boshu2/agentops |
| Topic | Coding Agent and IDE / 코딩 에이전트/IDE |
| Region | global |
| Language | Go |
| Stars | 392 |
| Forks | 40 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/boshu2__agentops](../../../../sources/boshu2__agentops) |
| Existing report | [reports/global-trending/repositories/boshu2__agentops.md](../../../global-trending/repositories/boshu2__agentops.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 4574 / 832 |
| Max observed depth | 9 |
| Top directories | .agents, .agy-plugin, .claude, .claude-plugin, .codex, .codex-plugin, .githooks, .github, .opencode, agents, bin, cli, deploy, docs, evals, evidence, examples, homebrew-tap, images, lib |
| Top extensions | .md: 1689, .go: 1412, .sh: 634, .json: 346, .bats: 184, .feature: 51, .txt: 51, (none): 41, .yaml: 37, .py: 34, .jsonl: 28, .yml: 18 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 127 |
| docs | documentation surface | 10 |
| .codex | top-level component | 1 |
| .github | ci surface | 1 |
| agents | top-level component | 1 |
| bin | top-level component | 1 |
| cli | top-level component | 1 |
| deploy | deployment surface | 1 |
| evals | top-level component | 1 |
| evidence | top-level component | 1 |
| examples | top-level component | 1 |
| homebrew-tap | top-level component | 1 |
| images | top-level component | 1 |
| lib | source boundary | 1 |
| plugins | top-level component | 1 |
| schemas | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | local-ci | make local-ci |
| utility | Makefile | local-ci-fast | make local-ci-fast |
| utility | Makefile | ci | make ci |
| build | Makefile | build | make build |
| test | Makefile | test | make test |
| quality | Makefile | docs-check | make docs-check |
| utility | Makefile | regen-all | make regen-all |
| quality | Makefile | regen-check | make regen-check |
| utility | Makefile | clean | make clean |
| utility | Makefile | help | make help |


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
| entrypoints | [tests/fixtures/proof-repo/main.go](../../../../sources/boshu2__agentops/tests/fixtures/proof-repo/main.go) | entrypoints signal |
| entrypoints | [evals/workbench/python-api/app/main.py](../../../../sources/boshu2__agentops/evals/workbench/python-api/app/main.py) | entrypoints signal |
| entrypoints | [evals/workbench/go-cli/cmd/wb/main.go](../../../../sources/boshu2__agentops/evals/workbench/go-cli/cmd/wb/main.go) | entrypoints signal |
| entrypoints | [cli/cmd/witness-crosscheck/main.go](../../../../sources/boshu2__agentops/cli/cmd/witness-crosscheck/main.go) | entrypoints signal |
| agentRuntime | [AGENTS-CI.md](../../../../sources/boshu2__agentops/AGENTS-CI.md) | agentRuntime signal |
| agentRuntime | [AGENTS-CODEX.md](../../../../sources/boshu2__agentops/AGENTS-CODEX.md) | agentRuntime signal |
| agentRuntime | [AGENTS-RUNTIME.md](../../../../sources/boshu2__agentops/AGENTS-RUNTIME.md) | agentRuntime signal |
| agentRuntime | [AGENTS-WORKFLOW.md](../../../../sources/boshu2__agentops/AGENTS-WORKFLOW.md) | agentRuntime signal |
| instruction | [AGENTS.md](../../../../sources/boshu2__agentops/AGENTS.md) | instruction signal |
| instruction | [cli/AGENTS.md](../../../../sources/boshu2__agentops/cli/AGENTS.md) | instruction signal |
| instruction | [cli/internal/vibecheck/AGENTS.md](../../../../sources/boshu2__agentops/cli/internal/vibecheck/AGENTS.md) | instruction signal |
| instruction | [cli/internal/types/AGENTS.md](../../../../sources/boshu2__agentops/cli/internal/types/AGENTS.md) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 8 | [tests/fixtures/proof-repo/main.go](../../../../sources/boshu2__agentops/tests/fixtures/proof-repo/main.go)<br>[evals/workbench/python-api/app/main.py](../../../../sources/boshu2__agentops/evals/workbench/python-api/app/main.py)<br>[evals/workbench/go-cli/cmd/wb/main.go](../../../../sources/boshu2__agentops/evals/workbench/go-cli/cmd/wb/main.go)<br>[cli/cmd/witness-crosscheck/main.go](../../../../sources/boshu2__agentops/cli/cmd/witness-crosscheck/main.go)<br>[cli/cmd/skill-frontmatter-json/main.go](../../../../sources/boshu2__agentops/cli/cmd/skill-frontmatter-json/main.go)<br>[cli/cmd/ao/main.go](../../../../sources/boshu2__agentops/cli/cmd/ao/main.go)<br>[bin/factory](../../../../sources/boshu2__agentops/bin/factory)<br>[bin/ralph](../../../../sources/boshu2__agentops/bin/ralph) |
| agentRuntime | 1546 | [AGENTS-CI.md](../../../../sources/boshu2__agentops/AGENTS-CI.md)<br>[AGENTS-CODEX.md](../../../../sources/boshu2__agentops/AGENTS-CODEX.md)<br>[AGENTS-RUNTIME.md](../../../../sources/boshu2__agentops/AGENTS-RUNTIME.md)<br>[AGENTS-WORKFLOW.md](../../../../sources/boshu2__agentops/AGENTS-WORKFLOW.md)<br>[AGENTS.md](../../../../sources/boshu2__agentops/AGENTS.md)<br>[MEMORY.md](../../../../sources/boshu2__agentops/MEMORY.md)<br>[tests/skills/check-alias-collisions.sh](../../../../sources/boshu2__agentops/tests/skills/check-alias-collisions.sh)<br>[tests/skills/lint-skills.sh](../../../../sources/boshu2__agentops/tests/skills/lint-skills.sh) |
| mcp | 6 | [skills-codex/research/references/deep-research-mcp.md](../../../../sources/boshu2__agentops/skills-codex/research/references/deep-research-mcp.md)<br>[skills/research/references/deep-research-mcp.md](../../../../sources/boshu2__agentops/skills/research/references/deep-research-mcp.md)<br>[skills/agent-mail/references/FIX-MCP-CONFIG.md](../../../../sources/boshu2__agentops/skills/agent-mail/references/FIX-MCP-CONFIG.md)<br>[images/gemini/mcp_config.json](../../../../sources/boshu2__agentops/images/gemini/mcp_config.json)<br>[cli/cmd/ao/mcp_serve.go](../../../../sources/boshu2__agentops/cli/cmd/ao/mcp_serve.go)<br>[.agy-plugin/mcp_config.json](../../../../sources/boshu2__agentops/.agy-plugin/mcp_config.json) |
| retrieval | 157 | [MEMORY.md](../../../../sources/boshu2__agentops/MEMORY.md)<br>[tests/scripts/check-retrieval-quality-ratchet.bats](../../../../sources/boshu2__agentops/tests/scripts/check-retrieval-quality-ratchet.bats)<br>[tests/scripts/generate-index.bats](../../../../sources/boshu2__agentops/tests/scripts/generate-index.bats)<br>[tests/scripts/nightly-knowledge-cycle.bats](../../../../sources/boshu2__agentops/tests/scripts/nightly-knowledge-cycle.bats)<br>[tests/claude-code/test-knowledge-skill.sh](../../../../sources/boshu2__agentops/tests/claude-code/test-knowledge-skill.sh)<br>[skills-codex/standards/references/standards-index.md](../../../../sources/boshu2__agentops/skills-codex/standards/references/standards-index.md)<br>[skills-codex/research/references/iterative-retrieval.md](../../../../sources/boshu2__agentops/skills-codex/research/references/iterative-retrieval.md)<br>[skills-codex/domain/references/index-primitive.md](../../../../sources/boshu2__agentops/skills-codex/domain/references/index-primitive.md) |
| spec | 159 | [requirements-docs.txt](../../../../sources/boshu2__agentops/requirements-docs.txt)<br>[tests/team-runner/fixtures/sample-team-spec-claude.json](../../../../sources/boshu2__agentops/tests/team-runner/fixtures/sample-team-spec-claude.json)<br>[tests/team-runner/fixtures/sample-team-spec.json](../../../../sources/boshu2__agentops/tests/team-runner/fixtures/sample-team-spec.json)<br>[tests/spec-consistency/README.md](../../../../sources/boshu2__agentops/tests/spec-consistency/README.md)<br>[tests/spec-consistency/test-gate.sh](../../../../sources/boshu2__agentops/tests/spec-consistency/test-gate.sh)<br>[tests/spec-consistency/fixtures/few-invariants.md](../../../../sources/boshu2__agentops/tests/spec-consistency/fixtures/few-invariants.md)<br>[tests/spec-consistency/fixtures/few-test-rows.md](../../../../sources/boshu2__agentops/tests/spec-consistency/fixtures/few-test-rows.md)<br>[tests/spec-consistency/fixtures/missing-frontmatter.md](../../../../sources/boshu2__agentops/tests/spec-consistency/fixtures/missing-frontmatter.md) |
| eval | 1364 | [tests/Dockerfile.e2e](../../../../sources/boshu2__agentops/tests/Dockerfile.e2e)<br>[tests/release-smoke-test.sh](../../../../sources/boshu2__agentops/tests/release-smoke-test.sh)<br>[tests/run-all.sh](../../../../sources/boshu2__agentops/tests/run-all.sh)<br>[tests/smoke-test.sh](../../../../sources/boshu2__agentops/tests/smoke-test.sh)<br>[tests/windows/test-windows-smoke.ps1](../../../../sources/boshu2__agentops/tests/windows/test-windows-smoke.ps1)<br>[tests/team-runner/run-all.sh](../../../../sources/boshu2__agentops/tests/team-runner/run-all.sh)<br>[tests/team-runner/test-runner-dry-run.sh](../../../../sources/boshu2__agentops/tests/team-runner/test-runner-dry-run.sh)<br>[tests/team-runner/test-schemas.sh](../../../../sources/boshu2__agentops/tests/team-runner/test-schemas.sh) |
| security | 180 | [tests/scripts/audit-assertion-density.bats](../../../../sources/boshu2__agentops/tests/scripts/audit-assertion-density.bats)<br>[tests/scripts/audit-skill-metadata.bats](../../../../sources/boshu2__agentops/tests/scripts/audit-skill-metadata.bats)<br>[tests/scripts/check-corpus-path-guard.bats](../../../../sources/boshu2__agentops/tests/scripts/check-corpus-path-guard.bats)<br>[tests/scripts/check-corpus-secret-scan.bats](../../../../sources/boshu2__agentops/tests/scripts/check-corpus-secret-scan.bats)<br>[tests/scripts/check-ledger-prefix-policy.bats](../../../../sources/boshu2__agentops/tests/scripts/check-ledger-prefix-policy.bats)<br>[tests/scripts/duplicate-work-guard.bats](../../../../sources/boshu2__agentops/tests/scripts/duplicate-work-guard.bats)<br>[tests/scripts/installed-skill-edit-guard.bats](../../../../sources/boshu2__agentops/tests/scripts/installed-skill-edit-guard.bats)<br>[tests/scripts/test-ci-policy-parity.sh](../../../../sources/boshu2__agentops/tests/scripts/test-ci-policy-parity.sh) |
| ci | 11 | [.github/workflows/agent-output-validate.yml](../../../../sources/boshu2__agentops/.github/workflows/agent-output-validate.yml)<br>[.github/workflows/claude.yml](../../../../sources/boshu2__agentops/.github/workflows/claude.yml)<br>[.github/workflows/docs.yml](../../../../sources/boshu2__agentops/.github/workflows/docs.yml)<br>[.github/workflows/install-e2e.yml](../../../../sources/boshu2__agentops/.github/workflows/install-e2e.yml)<br>[.github/workflows/labeler.yml](../../../../sources/boshu2__agentops/.github/workflows/labeler.yml)<br>[.github/workflows/nightly-rpi-brief.yml](../../../../sources/boshu2__agentops/.github/workflows/nightly-rpi-brief.yml)<br>[.github/workflows/nightly.yml](../../../../sources/boshu2__agentops/.github/workflows/nightly.yml)<br>[.github/workflows/release.yml](../../../../sources/boshu2__agentops/.github/workflows/release.yml) |
| container | 2 | [tests/Dockerfile.e2e](../../../../sources/boshu2__agentops/tests/Dockerfile.e2e)<br>[deploy/agentops-refinery.service](../../../../sources/boshu2__agentops/deploy/agentops-refinery.service) |
| instruction | 14 | [AGENTS.md](../../../../sources/boshu2__agentops/AGENTS.md)<br>[cli/AGENTS.md](../../../../sources/boshu2__agentops/cli/AGENTS.md)<br>[cli/internal/vibecheck/AGENTS.md](../../../../sources/boshu2__agentops/cli/internal/vibecheck/AGENTS.md)<br>[cli/internal/types/AGENTS.md](../../../../sources/boshu2__agentops/cli/internal/types/AGENTS.md)<br>[cli/internal/types/quest/AGENTS.md](../../../../sources/boshu2__agentops/cli/internal/types/quest/AGENTS.md)<br>[cli/internal/search/AGENTS.md](../../../../sources/boshu2__agentops/cli/internal/search/AGENTS.md)<br>[cli/internal/ratchet/AGENTS.md](../../../../sources/boshu2__agentops/cli/internal/ratchet/AGENTS.md)<br>[cli/internal/quality/AGENTS.md](../../../../sources/boshu2__agentops/cli/internal/quality/AGENTS.md) |
| docs | 642 | [mkdocs.yml](../../../../sources/boshu2__agentops/mkdocs.yml)<br>[README.md](../../../../sources/boshu2__agentops/README.md)<br>[tests/spec-consistency/README.md](../../../../sources/boshu2__agentops/tests/spec-consistency/README.md)<br>[tests/lint/README.md](../../../../sources/boshu2__agentops/tests/lint/README.md)<br>[tests/goals/README.md](../../../../sources/boshu2__agentops/tests/goals/README.md)<br>[tests/fixtures/provenance/README.md](../../../../sources/boshu2__agentops/tests/fixtures/provenance/README.md)<br>[tests/fixtures/goals-trace/docs/learnings/2026-05-17-trace-chain.md](../../../../sources/boshu2__agentops/tests/fixtures/goals-trace/docs/learnings/2026-05-17-trace-chain.md)<br>[tests/explicit-skill-requests/README.md](../../../../sources/boshu2__agentops/tests/explicit-skill-requests/README.md) |
| config | 11 | [Makefile](../../../../sources/boshu2__agentops/Makefile)<br>[requirements-docs.txt](../../../../sources/boshu2__agentops/requirements-docs.txt)<br>[tests/fixtures/proof-repo/go.mod](../../../../sources/boshu2__agentops/tests/fixtures/proof-repo/go.mod)<br>[evals/workbench/Makefile](../../../../sources/boshu2__agentops/evals/workbench/Makefile)<br>[evals/workbench/python-api/Makefile](../../../../sources/boshu2__agentops/evals/workbench/python-api/Makefile)<br>[evals/workbench/python-api/pyproject.toml](../../../../sources/boshu2__agentops/evals/workbench/python-api/pyproject.toml)<br>[evals/workbench/go-cli/go.mod](../../../../sources/boshu2__agentops/evals/workbench/go-cli/go.mod)<br>[evals/workbench/go-cli/Makefile](../../../../sources/boshu2__agentops/evals/workbench/go-cli/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1364 | [tests/Dockerfile.e2e](../../../../sources/boshu2__agentops/tests/Dockerfile.e2e)<br>[tests/release-smoke-test.sh](../../../../sources/boshu2__agentops/tests/release-smoke-test.sh)<br>[tests/run-all.sh](../../../../sources/boshu2__agentops/tests/run-all.sh)<br>[tests/smoke-test.sh](../../../../sources/boshu2__agentops/tests/smoke-test.sh)<br>[tests/windows/test-windows-smoke.ps1](../../../../sources/boshu2__agentops/tests/windows/test-windows-smoke.ps1)<br>[tests/team-runner/run-all.sh](../../../../sources/boshu2__agentops/tests/team-runner/run-all.sh) |
| CI workflows | 11 | [.github/workflows/agent-output-validate.yml](../../../../sources/boshu2__agentops/.github/workflows/agent-output-validate.yml)<br>[.github/workflows/claude.yml](../../../../sources/boshu2__agentops/.github/workflows/claude.yml)<br>[.github/workflows/docs.yml](../../../../sources/boshu2__agentops/.github/workflows/docs.yml)<br>[.github/workflows/install-e2e.yml](../../../../sources/boshu2__agentops/.github/workflows/install-e2e.yml)<br>[.github/workflows/labeler.yml](../../../../sources/boshu2__agentops/.github/workflows/labeler.yml)<br>[.github/workflows/nightly-rpi-brief.yml](../../../../sources/boshu2__agentops/.github/workflows/nightly-rpi-brief.yml) |
| Containers / deploy | 2 | [tests/Dockerfile.e2e](../../../../sources/boshu2__agentops/tests/Dockerfile.e2e)<br>[deploy/agentops-refinery.service](../../../../sources/boshu2__agentops/deploy/agentops-refinery.service) |
| Security / policy | 180 | [tests/scripts/audit-assertion-density.bats](../../../../sources/boshu2__agentops/tests/scripts/audit-assertion-density.bats)<br>[tests/scripts/audit-skill-metadata.bats](../../../../sources/boshu2__agentops/tests/scripts/audit-skill-metadata.bats)<br>[tests/scripts/check-corpus-path-guard.bats](../../../../sources/boshu2__agentops/tests/scripts/check-corpus-path-guard.bats)<br>[tests/scripts/check-corpus-secret-scan.bats](../../../../sources/boshu2__agentops/tests/scripts/check-corpus-secret-scan.bats)<br>[tests/scripts/check-ledger-prefix-policy.bats](../../../../sources/boshu2__agentops/tests/scripts/check-ledger-prefix-policy.bats)<br>[tests/scripts/duplicate-work-guard.bats](../../../../sources/boshu2__agentops/tests/scripts/duplicate-work-guard.bats) |
| Agent instructions | 14 | [AGENTS.md](../../../../sources/boshu2__agentops/AGENTS.md)<br>[cli/AGENTS.md](../../../../sources/boshu2__agentops/cli/AGENTS.md)<br>[cli/internal/vibecheck/AGENTS.md](../../../../sources/boshu2__agentops/cli/internal/vibecheck/AGENTS.md)<br>[cli/internal/types/AGENTS.md](../../../../sources/boshu2__agentops/cli/internal/types/AGENTS.md)<br>[cli/internal/types/quest/AGENTS.md](../../../../sources/boshu2__agentops/cli/internal/types/quest/AGENTS.md)<br>[cli/internal/search/AGENTS.md](../../../../sources/boshu2__agentops/cli/internal/search/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `tests/fixtures/proof-repo/main.go`, `evals/workbench/python-api/app/main.py`, `evals/workbench/go-cli/cmd/wb/main.go`.
2. Trace execution through entrypoints: `tests/fixtures/proof-repo/main.go`, `evals/workbench/python-api/app/main.py`, `evals/workbench/go-cli/cmd/wb/main.go`.
3. Map agent/tool runtime through: `AGENTS-CI.md`, `AGENTS-CODEX.md`, `AGENTS-RUNTIME.md`.
4. Inspect retrieval/memory/indexing through: `MEMORY.md`, `tests/scripts/check-retrieval-quality-ratchet.bats`, `tests/scripts/generate-index.bats`.
5. Verify behavior through test/eval files: `tests/Dockerfile.e2e`, `tests/release-smoke-test.sh`, `tests/run-all.sh`.

## Existing Repository Insight

코딩 에이전트/IDE 관점에서 The operational layer for coding agents. Memory, validation, and feedback loops that compound between sessions.. 핵심 구조 신호는 Go, Makefile, README.md, AGENTS.md, LICENSE, tests이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 코딩 에이전트/IDE 레포입니다. 활용 관점은 coding-agent reference implementation이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
