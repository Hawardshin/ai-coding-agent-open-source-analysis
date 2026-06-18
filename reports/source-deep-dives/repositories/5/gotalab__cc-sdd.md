# gotalab/cc-sdd Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 536 files, 285 directories.

## 요약

- 조사 단위: `sources/gotalab__cc-sdd` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 536 files, 285 directories, depth score 121, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, tools/cc-sdd/.gitignore, tools/cc-sdd/package-lock.json이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | gotalab/cc-sdd |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | TypeScript |
| Stars | 3484 |
| Forks | 258 |
| License | MIT License |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/gotalab__cc-sdd](../../../../sources/gotalab__cc-sdd) |
| Existing report | [reports/clone-structures/gotalab__cc-sdd.md](../../../clone-structures/gotalab__cc-sdd.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 536 / 285 |
| Max observed depth | 9 |
| Top directories | .agents, .github, .kiro, assets, docs, tools |
| Top extensions | .md: 385, .ts: 67, .yaml: 36, .json: 27, .toml: 12, .yml: 4, (none): 3, .mjs: 1, .png: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 19 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| tools | top-level component | 1 |


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
| agentRuntime | [AGENTS.md](../../../../sources/gotalab__cc-sdd/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tools/cc-sdd/.gitignore](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/.gitignore) | agentRuntime signal |
| agentRuntime | [tools/cc-sdd/package-lock.json](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/package-lock.json) | agentRuntime signal |
| agentRuntime | [tools/cc-sdd/package.json](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/package.json) | agentRuntime signal |
| entrypoints | [tools/cc-sdd/src/cli.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/src/cli.ts) | entrypoints signal |
| entrypoints | [tools/cc-sdd/src/index.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/src/index.ts) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/gotalab__cc-sdd/CLAUDE.md) | instruction signal |
| instruction | [tools/cc-sdd/templates/agents/windsurf-skills/docs/AGENTS.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/agents/windsurf-skills/docs/AGENTS.md) | instruction signal |
| instruction | [tools/cc-sdd/templates/agents/windsurf/docs/AGENTS.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/agents/windsurf/docs/AGENTS.md) | instruction signal |
| config | [tools/cc-sdd/tsconfig.json](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/tsconfig.json) | config signal |
| ci | [.github/workflows/claude-dispatch.yml](../../../../sources/gotalab__cc-sdd/.github/workflows/claude-dispatch.yml) | ci support |
| ci | [.github/workflows/claude.yml](../../../../sources/gotalab__cc-sdd/.github/workflows/claude.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [tools/cc-sdd/src/cli.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/src/cli.ts)<br>[tools/cc-sdd/src/index.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/src/index.ts) |
| agentRuntime | 462 | [AGENTS.md](../../../../sources/gotalab__cc-sdd/AGENTS.md)<br>[tools/cc-sdd/.gitignore](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/.gitignore)<br>[tools/cc-sdd/package-lock.json](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/package-lock.json)<br>[tools/cc-sdd/package.json](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/package.json)<br>[tools/cc-sdd/README_ja.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/README_ja.md)<br>[tools/cc-sdd/README_zh-TW.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/README_zh-TW.md)<br>[tools/cc-sdd/README.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/README.md)<br>[tools/cc-sdd/tsconfig.json](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/tsconfig.json) |
| mcp | 0 | not obvious |
| retrieval | 11 | [tools/cc-sdd/src/index.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/src/index.ts)<br>[.kiro/specs/customer-support-rag-backend-ja/design.md](../../../../sources/gotalab__cc-sdd/.kiro/specs/customer-support-rag-backend-ja/design.md)<br>[.kiro/specs/customer-support-rag-backend-ja/requirements.md](../../../../sources/gotalab__cc-sdd/.kiro/specs/customer-support-rag-backend-ja/requirements.md)<br>[.kiro/specs/customer-support-rag-backend-ja/research.md](../../../../sources/gotalab__cc-sdd/.kiro/specs/customer-support-rag-backend-ja/research.md)<br>[.kiro/specs/customer-support-rag-backend-ja/spec.json](../../../../sources/gotalab__cc-sdd/.kiro/specs/customer-support-rag-backend-ja/spec.json)<br>[.kiro/specs/customer-support-rag-backend-ja/tasks.md](../../../../sources/gotalab__cc-sdd/.kiro/specs/customer-support-rag-backend-ja/tasks.md)<br>[.kiro/specs/customer-support-rag-backend-en/design.md](../../../../sources/gotalab__cc-sdd/.kiro/specs/customer-support-rag-backend-en/design.md)<br>[.kiro/specs/customer-support-rag-backend-en/requirements.md](../../../../sources/gotalab__cc-sdd/.kiro/specs/customer-support-rag-backend-en/requirements.md) |
| spec | 184 | [tools/cc-sdd/templates/shared/settings/templates/specs/design.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/shared/settings/templates/specs/design.md)<br>[tools/cc-sdd/templates/shared/settings/templates/specs/requirements-init.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/shared/settings/templates/specs/requirements-init.md)<br>[tools/cc-sdd/templates/shared/settings/templates/specs/requirements.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/shared/settings/templates/specs/requirements.md)<br>[tools/cc-sdd/templates/shared/settings/rules/design-discovery-full.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/shared/settings/rules/design-discovery-full.md)<br>[tools/cc-sdd/templates/shared/settings/rules/design-discovery-light.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/shared/settings/rules/design-discovery-light.md)<br>[tools/cc-sdd/templates/shared/settings/rules/design-principles.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/shared/settings/rules/design-principles.md)<br>[tools/cc-sdd/templates/shared/settings/rules/design-review-gate.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/shared/settings/rules/design-review-gate.md)<br>[tools/cc-sdd/templates/shared/settings/rules/design-review.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/shared/settings/rules/design-review.md) |
| eval | 174 | [tools/cc-sdd/test/agentLayout.test.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/test/agentLayout.test.ts)<br>[tools/cc-sdd/test/args.test.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/test/args.test.ts)<br>[tools/cc-sdd/test/cliApplyManifest.test.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/test/cliApplyManifest.test.ts)<br>[tools/cc-sdd/test/cliDryRunManifest.test.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/test/cliDryRunManifest.test.ts)<br>[tools/cc-sdd/test/cliEntry.test.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/test/cliEntry.test.ts)<br>[tools/cc-sdd/test/cliEntryEdgeCases.test.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/test/cliEntryEdgeCases.test.ts)<br>[tools/cc-sdd/test/configMerge.test.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/test/configMerge.test.ts)<br>[tools/cc-sdd/test/configStore.test.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/test/configStore.test.ts) |
| security | 2 | [tools/cc-sdd/templates/shared/settings/templates/steering-custom/security.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/shared/settings/templates/steering-custom/security.md)<br>[.kiro/settings/templates/steering-custom/security.md](../../../../sources/gotalab__cc-sdd/.kiro/settings/templates/steering-custom/security.md) |
| ci | 4 | [.github/workflows/claude-dispatch.yml](../../../../sources/gotalab__cc-sdd/.github/workflows/claude-dispatch.yml)<br>[.github/workflows/claude.yml](../../../../sources/gotalab__cc-sdd/.github/workflows/claude.yml)<br>[.github/workflows/publish.yml](../../../../sources/gotalab__cc-sdd/.github/workflows/publish.yml)<br>[.github/workflows/stale.yml](../../../../sources/gotalab__cc-sdd/.github/workflows/stale.yml) |
| container | 0 | not obvious |
| instruction | 19 | [AGENTS.md](../../../../sources/gotalab__cc-sdd/AGENTS.md)<br>[CLAUDE.md](../../../../sources/gotalab__cc-sdd/CLAUDE.md)<br>[tools/cc-sdd/templates/agents/windsurf-skills/docs/AGENTS.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/agents/windsurf-skills/docs/AGENTS.md)<br>[tools/cc-sdd/templates/agents/windsurf/docs/AGENTS.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/agents/windsurf/docs/AGENTS.md)<br>[tools/cc-sdd/templates/agents/opencode-skills/docs/AGENTS.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/agents/opencode-skills/docs/AGENTS.md)<br>[tools/cc-sdd/templates/agents/opencode-agent/docs/AGENTS.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/agents/opencode-agent/docs/AGENTS.md)<br>[tools/cc-sdd/templates/agents/opencode/docs/AGENTS.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/agents/opencode/docs/AGENTS.md)<br>[tools/cc-sdd/templates/agents/github-copilot-skills/docs/AGENTS.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/agents/github-copilot-skills/docs/AGENTS.md) |
| docs | 42 | [README.md](../../../../sources/gotalab__cc-sdd/README.md)<br>[tools/cc-sdd/README_ja.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/README_ja.md)<br>[tools/cc-sdd/README_zh-TW.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/README_zh-TW.md)<br>[tools/cc-sdd/README.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/README.md)<br>[tools/cc-sdd/templates/agents/windsurf-skills/docs/AGENTS.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/agents/windsurf-skills/docs/AGENTS.md)<br>[tools/cc-sdd/templates/agents/windsurf/docs/AGENTS.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/agents/windsurf/docs/AGENTS.md)<br>[tools/cc-sdd/templates/agents/qwen-code/docs/QWEN.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/agents/qwen-code/docs/QWEN.md)<br>[tools/cc-sdd/templates/agents/opencode-skills/docs/AGENTS.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/agents/opencode-skills/docs/AGENTS.md) |
| config | 2 | [tools/cc-sdd/package.json](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/package.json)<br>[tools/cc-sdd/tsconfig.json](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 174 | [tools/cc-sdd/test/agentLayout.test.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/test/agentLayout.test.ts)<br>[tools/cc-sdd/test/args.test.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/test/args.test.ts)<br>[tools/cc-sdd/test/cliApplyManifest.test.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/test/cliApplyManifest.test.ts)<br>[tools/cc-sdd/test/cliDryRunManifest.test.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/test/cliDryRunManifest.test.ts)<br>[tools/cc-sdd/test/cliEntry.test.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/test/cliEntry.test.ts)<br>[tools/cc-sdd/test/cliEntryEdgeCases.test.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/test/cliEntryEdgeCases.test.ts) |
| CI workflows | 4 | [.github/workflows/claude-dispatch.yml](../../../../sources/gotalab__cc-sdd/.github/workflows/claude-dispatch.yml)<br>[.github/workflows/claude.yml](../../../../sources/gotalab__cc-sdd/.github/workflows/claude.yml)<br>[.github/workflows/publish.yml](../../../../sources/gotalab__cc-sdd/.github/workflows/publish.yml)<br>[.github/workflows/stale.yml](../../../../sources/gotalab__cc-sdd/.github/workflows/stale.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 2 | [tools/cc-sdd/templates/shared/settings/templates/steering-custom/security.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/shared/settings/templates/steering-custom/security.md)<br>[.kiro/settings/templates/steering-custom/security.md](../../../../sources/gotalab__cc-sdd/.kiro/settings/templates/steering-custom/security.md) |
| Agent instructions | 19 | [AGENTS.md](../../../../sources/gotalab__cc-sdd/AGENTS.md)<br>[CLAUDE.md](../../../../sources/gotalab__cc-sdd/CLAUDE.md)<br>[tools/cc-sdd/templates/agents/windsurf-skills/docs/AGENTS.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/agents/windsurf-skills/docs/AGENTS.md)<br>[tools/cc-sdd/templates/agents/windsurf/docs/AGENTS.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/agents/windsurf/docs/AGENTS.md)<br>[tools/cc-sdd/templates/agents/opencode-skills/docs/AGENTS.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/agents/opencode-skills/docs/AGENTS.md)<br>[tools/cc-sdd/templates/agents/opencode-agent/docs/AGENTS.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/agents/opencode-agent/docs/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `AGENTS.md`, `tools/cc-sdd/.gitignore`, `tools/cc-sdd/package-lock.json`.
2. Trace execution through entrypoints: `tools/cc-sdd/src/cli.ts`, `tools/cc-sdd/src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `tools/cc-sdd/.gitignore`, `tools/cc-sdd/package-lock.json`.
4. Inspect retrieval/memory/indexing through: `tools/cc-sdd/src/index.ts`, `.kiro/specs/customer-support-rag-backend-ja/design.md`, `.kiro/specs/customer-support-rag-backend-ja/requirements.md`.
5. Verify behavior through test/eval files: `tools/cc-sdd/test/agentLayout.test.ts`, `tools/cc-sdd/test/args.test.ts`, `tools/cc-sdd/test/cliApplyManifest.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 536 files, 285 directories.. 핵심 구조 신호는 TypeScript, README.md, AGENTS.md, CLAUDE.md, LICENSE, tests이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 major metadata risk not obvious입니다.
