# numtide/llm-agents.nix Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Nix packages for AI coding agents and development tools. Automatically updated daily.

## 요약

- 조사 단위: `sources/numtide__llm-agents.nix` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 458 files, 142 directories, depth score 105, key references 9개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, packages/skills-installer/default.nix, packages/skills-installer/package.nix이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | numtide/llm-agents.nix |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Nix |
| Stars | 1436 |
| Forks | 158 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/numtide__llm-agents.nix](../../../../sources/numtide__llm-agents.nix) |
| Existing report | [reports/global-trending/repositories/numtide__llm-agents.nix.md](../../../global-trending/repositories/numtide__llm-agents.nix.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 458 / 142 |
| Max observed depth | 3 |
| Top directories | .github, checks, lib, overlays, packages, patches, scripts |
| Top extensions | .nix: 276, .py: 68, .json: 57, (none): 24, .md: 8, .patch: 8, .yml: 8, .sh: 5, .lock: 2, .sbpl: 1, .toml: 1 |
| Source patterns | monorepo/workspace, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/sandbox-runtime | packages workspace | 10 |
| packages/spec-kit | packages workspace | 4 |
| packages/code-review-graph | packages workspace | 3 |
| packages/agent-browser | packages workspace | 2 |
| packages/agent-deck | packages workspace | 2 |
| packages/codex-auth | packages workspace | 2 |
| packages/context-hub | packages workspace | 2 |
| packages/skills | packages workspace | 2 |
| packages/skills-installer | packages workspace | 2 |
| .github | ci surface | 1 |
| checks | top-level component | 1 |
| lib | source boundary | 1 |
| overlays | top-level component | 1 |
| packages | source boundary | 1 |
| packages/claude-code | packages workspace | 1 |
| packages/codex-acp | packages workspace | 1 |
| packages/forgecode | packages workspace | 1 |
| packages/mistral-vibe | packages workspace | 1 |


## How It Runs

_No command surface extracted from root manifests._


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
| agentRuntime | [AGENTS.md](../../../../sources/numtide__llm-agents.nix/AGENTS.md) | agentRuntime signal |
| agentRuntime | [packages/skills-installer/default.nix](../../../../sources/numtide__llm-agents.nix/packages/skills-installer/default.nix) | agentRuntime signal |
| agentRuntime | [packages/skills-installer/package.nix](../../../../sources/numtide__llm-agents.nix/packages/skills-installer/package.nix) | agentRuntime signal |
| agentRuntime | [packages/skills/default.nix](../../../../sources/numtide__llm-agents.nix/packages/skills/default.nix) | agentRuntime signal |
| config | [pyproject.toml](../../../../sources/numtide__llm-agents.nix/pyproject.toml) | config signal |
| ci | [.github/workflows/auto-merge.yml](../../../../sources/numtide__llm-agents.nix/.github/workflows/auto-merge.yml) | ci support |
| ci | [.github/workflows/check-maintainers.yml](../../../../sources/numtide__llm-agents.nix/.github/workflows/check-maintainers.yml) | ci support |
| eval | [packages/spec-kit/default.nix](../../../../sources/numtide__llm-agents.nix/packages/spec-kit/default.nix) | eval support |
| eval | [packages/spec-kit/package.nix](../../../../sources/numtide__llm-agents.nix/packages/spec-kit/package.nix) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 17 | [AGENTS.md](../../../../sources/numtide__llm-agents.nix/AGENTS.md)<br>[packages/skills-installer/default.nix](../../../../sources/numtide__llm-agents.nix/packages/skills-installer/default.nix)<br>[packages/skills-installer/package.nix](../../../../sources/numtide__llm-agents.nix/packages/skills-installer/package.nix)<br>[packages/skills/default.nix](../../../../sources/numtide__llm-agents.nix/packages/skills/default.nix)<br>[packages/skills/package.nix](../../../../sources/numtide__llm-agents.nix/packages/skills/package.nix)<br>[packages/sandbox-runtime/default.nix](../../../../sources/numtide__llm-agents.nix/packages/sandbox-runtime/default.nix)<br>[packages/sandbox-runtime/hashes.json](../../../../sources/numtide__llm-agents.nix/packages/sandbox-runtime/hashes.json)<br>[packages/sandbox-runtime/package-lock.json](../../../../sources/numtide__llm-agents.nix/packages/sandbox-runtime/package-lock.json) |
| mcp | 0 | not obvious |
| retrieval | 3 | [packages/code-review-graph/default.nix](../../../../sources/numtide__llm-agents.nix/packages/code-review-graph/default.nix)<br>[packages/code-review-graph/nix-update-args](../../../../sources/numtide__llm-agents.nix/packages/code-review-graph/nix-update-args)<br>[packages/code-review-graph/package.nix](../../../../sources/numtide__llm-agents.nix/packages/code-review-graph/package.nix) |
| spec | 2 | [packages/spec-kit/default.nix](../../../../sources/numtide__llm-agents.nix/packages/spec-kit/default.nix)<br>[packages/spec-kit/package.nix](../../../../sources/numtide__llm-agents.nix/packages/spec-kit/package.nix) |
| eval | 2 | [packages/spec-kit/default.nix](../../../../sources/numtide__llm-agents.nix/packages/spec-kit/default.nix)<br>[packages/spec-kit/package.nix](../../../../sources/numtide__llm-agents.nix/packages/spec-kit/package.nix) |
| security | 8 | [packages/sandbox-runtime/default.nix](../../../../sources/numtide__llm-agents.nix/packages/sandbox-runtime/default.nix)<br>[packages/sandbox-runtime/hashes.json](../../../../sources/numtide__llm-agents.nix/packages/sandbox-runtime/hashes.json)<br>[packages/sandbox-runtime/package-lock.json](../../../../sources/numtide__llm-agents.nix/packages/sandbox-runtime/package-lock.json)<br>[packages/sandbox-runtime/package.nix](../../../../sources/numtide__llm-agents.nix/packages/sandbox-runtime/package.nix)<br>[packages/sandbox-runtime/update.py](../../../../sources/numtide__llm-agents.nix/packages/sandbox-runtime/update.py)<br>[packages/nono/no-if-let-guard.patch](../../../../sources/numtide__llm-agents.nix/packages/nono/no-if-let-guard.patch)<br>[packages/codex-auth/default.nix](../../../../sources/numtide__llm-agents.nix/packages/codex-auth/default.nix)<br>[packages/codex-auth/package.nix](../../../../sources/numtide__llm-agents.nix/packages/codex-auth/package.nix) |
| ci | 10 | [.github/workflows/auto-merge.yml](../../../../sources/numtide__llm-agents.nix/.github/workflows/auto-merge.yml)<br>[.github/workflows/check-maintainers.yml](../../../../sources/numtide__llm-agents.nix/.github/workflows/check-maintainers.yml)<br>[.github/workflows/check-readme.yml](../../../../sources/numtide__llm-agents.nix/.github/workflows/check-readme.yml)<br>[.github/workflows/update-flake.yml](../../../../sources/numtide__llm-agents.nix/.github/workflows/update-flake.yml)<br>[.github/workflows/update.yml](../../../../sources/numtide__llm-agents.nix/.github/workflows/update.yml)<br>[.github/ci/check_maintainers.py](../../../../sources/numtide__llm-agents.nix/.github/ci/check_maintainers.py)<br>[.github/ci/create_pr.py](../../../../sources/numtide__llm-agents.nix/.github/ci/create_pr.py)<br>[.github/ci/discovery.py](../../../../sources/numtide__llm-agents.nix/.github/ci/discovery.py) |
| container | 0 | not obvious |
| instruction | 1 | [AGENTS.md](../../../../sources/numtide__llm-agents.nix/AGENTS.md) |
| docs | 6 | [README.md](../../../../sources/numtide__llm-agents.nix/README.md)<br>[patches/README.md](../../../../sources/numtide__llm-agents.nix/patches/README.md)<br>[packages/qmd/README.md](../../../../sources/numtide__llm-agents.nix/packages/qmd/README.md)<br>[packages/forgecode/README.md](../../../../sources/numtide__llm-agents.nix/packages/forgecode/README.md)<br>[packages/codex-acp/README.md](../../../../sources/numtide__llm-agents.nix/packages/codex-acp/README.md)<br>[packages/claude-code/README.md](../../../../sources/numtide__llm-agents.nix/packages/claude-code/README.md) |
| config | 1 | [pyproject.toml](../../../../sources/numtide__llm-agents.nix/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 2 | [packages/spec-kit/default.nix](../../../../sources/numtide__llm-agents.nix/packages/spec-kit/default.nix)<br>[packages/spec-kit/package.nix](../../../../sources/numtide__llm-agents.nix/packages/spec-kit/package.nix) |
| CI workflows | 10 | [.github/workflows/auto-merge.yml](../../../../sources/numtide__llm-agents.nix/.github/workflows/auto-merge.yml)<br>[.github/workflows/check-maintainers.yml](../../../../sources/numtide__llm-agents.nix/.github/workflows/check-maintainers.yml)<br>[.github/workflows/check-readme.yml](../../../../sources/numtide__llm-agents.nix/.github/workflows/check-readme.yml)<br>[.github/workflows/update-flake.yml](../../../../sources/numtide__llm-agents.nix/.github/workflows/update-flake.yml)<br>[.github/workflows/update.yml](../../../../sources/numtide__llm-agents.nix/.github/workflows/update.yml)<br>[.github/ci/check_maintainers.py](../../../../sources/numtide__llm-agents.nix/.github/ci/check_maintainers.py) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 8 | [packages/sandbox-runtime/default.nix](../../../../sources/numtide__llm-agents.nix/packages/sandbox-runtime/default.nix)<br>[packages/sandbox-runtime/hashes.json](../../../../sources/numtide__llm-agents.nix/packages/sandbox-runtime/hashes.json)<br>[packages/sandbox-runtime/package-lock.json](../../../../sources/numtide__llm-agents.nix/packages/sandbox-runtime/package-lock.json)<br>[packages/sandbox-runtime/package.nix](../../../../sources/numtide__llm-agents.nix/packages/sandbox-runtime/package.nix)<br>[packages/sandbox-runtime/update.py](../../../../sources/numtide__llm-agents.nix/packages/sandbox-runtime/update.py)<br>[packages/nono/no-if-let-guard.patch](../../../../sources/numtide__llm-agents.nix/packages/nono/no-if-let-guard.patch) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/numtide__llm-agents.nix/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `AGENTS.md`, `packages/skills-installer/default.nix`, `packages/skills-installer/package.nix`.
2. Map agent/tool runtime through: `AGENTS.md`, `packages/skills-installer/default.nix`, `packages/skills-installer/package.nix`.
3. Inspect retrieval/memory/indexing through: `packages/code-review-graph/default.nix`, `packages/code-review-graph/nix-update-args`, `packages/code-review-graph/package.nix`.
4. Verify behavior through test/eval files: `packages/spec-kit/default.nix`, `packages/spec-kit/package.nix`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Nix packages for AI coding agents and development tools. Automatically updated daily.. 핵심 구조 신호는 Nix, pyproject.toml, README.md, AGENTS.md, LICENSE, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
