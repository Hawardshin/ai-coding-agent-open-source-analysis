# simota/agent-skills Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

124 specialist AI agents for Claude Code / Codex CLI / Antigravity CLI (agy). Anthropic Agent Skills spec-aligned, gerund-form descriptions, hub-spoke orchestration via Nexus. Covers development, security, design, testing, FinOps, compliance, observability, AI/ML, and more.

## 요약

- 조사 단위: `sources/simota__agent-skills` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,720 files, 286 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=frame/reference/figma-mcp-server-ga.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | simota/agent-skills |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | HTML |
| Stars | 52 |
| Forks | 11 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/simota__agent-skills](../../../../sources/simota__agent-skills) |
| Existing report | [reports/global-trending/repositories/simota__agent-skills.md](../../../global-trending/repositories/simota__agent-skills.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1720 / 286 |
| Max observed depth | 6 |
| Top directories | _catalog, _common, _scripts, _templates, .github, .loops, accord, agora, anvil, architect, artisan, ascent, atelier, atlas, attest, bazaar, beacon, bolt, bond, breach |
| Top extensions | .md: 1654, .sh: 13, .tsx: 11, .ts: 8, (none): 6, .html: 5, .py: 5, .mmd: 4, .yml: 4, .json: 3, .css: 2, .js: 2 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| _catalog | top-level component | 1 |
| _common | top-level component | 1 |
| _scripts | top-level component | 1 |
| _templates | top-level component | 1 |
| .github | ci surface | 1 |
| accord | top-level component | 1 |
| agora | top-level component | 1 |
| anvil | top-level component | 1 |
| architect | top-level component | 1 |
| artisan | top-level component | 1 |
| ascent | top-level component | 1 |
| atelier | top-level component | 1 |
| atlas | top-level component | 1 |
| attest | validation surface | 1 |
| bazaar | top-level component | 1 |
| beacon | top-level component | 1 |
| bolt | top-level component | 1 |
| bond | top-level component | 1 |


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
| mcp | [frame/reference/figma-mcp-server-ga.md](../../../../sources/simota__agent-skills/frame/reference/figma-mcp-server-ga.md) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/simota__agent-skills/AGENTS.md) | agentRuntime signal |
| agentRuntime | [zine/SKILL.md](../../../../sources/simota__agent-skills/zine/SKILL.md) | agentRuntime signal |
| agentRuntime | [zine/reference/hook-design.md](../../../../sources/simota__agent-skills/zine/reference/hook-design.md) | agentRuntime signal |
| agentRuntime | [zen/SKILL.md](../../../../sources/simota__agent-skills/zen/SKILL.md) | agentRuntime signal |
| entrypoints | [_common/apex-dash/sample/src/App.tsx](../../../../sources/simota__agent-skills/_common/apex-dash/sample/src/App.tsx) | entrypoints signal |
| entrypoints | [_common/apex-dash/sample/src/main.tsx](../../../../sources/simota__agent-skills/_common/apex-dash/sample/src/main.tsx) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/simota__agent-skills/CLAUDE.md) | instruction signal |
| config | [_common/apex-dash/sample/package.json](../../../../sources/simota__agent-skills/_common/apex-dash/sample/package.json) | config signal |
| config | [_common/apex-dash/sample/tsconfig.json](../../../../sources/simota__agent-skills/_common/apex-dash/sample/tsconfig.json) | config signal |
| ci | [.github/workflows/skill-lint.yml](../../../../sources/simota__agent-skills/.github/workflows/skill-lint.yml) | ci support |
| container | [scaffold/reference/docker-compose-templates.md](../../../../sources/simota__agent-skills/scaffold/reference/docker-compose-templates.md) | container support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [_common/apex-dash/sample/src/App.tsx](../../../../sources/simota__agent-skills/_common/apex-dash/sample/src/App.tsx)<br>[_common/apex-dash/sample/src/main.tsx](../../../../sources/simota__agent-skills/_common/apex-dash/sample/src/main.tsx) |
| agentRuntime | 184 | [AGENTS.md](../../../../sources/simota__agent-skills/AGENTS.md)<br>[zine/SKILL.md](../../../../sources/simota__agent-skills/zine/SKILL.md)<br>[zine/reference/hook-design.md](../../../../sources/simota__agent-skills/zine/reference/hook-design.md)<br>[zen/SKILL.md](../../../../sources/simota__agent-skills/zen/SKILL.md)<br>[zen/reference/agent-integrations.md](../../../../sources/simota__agent-skills/zen/reference/agent-integrations.md)<br>[wield/SKILL.md](../../../../sources/simota__agent-skills/wield/SKILL.md)<br>[weave/SKILL.md](../../../../sources/simota__agent-skills/weave/SKILL.md)<br>[voyager/SKILL.md](../../../../sources/simota__agent-skills/voyager/SKILL.md) |
| mcp | 1 | [frame/reference/figma-mcp-server-ga.md](../../../../sources/simota__agent-skills/frame/reference/figma-mcp-server-ga.md) |
| retrieval | 26 | [index.html](../../../../sources/simota__agent-skills/index.html)<br>[vector/SKILL.md](../../../../sources/simota__agent-skills/vector/SKILL.md)<br>[vector/reference/computer-use-optimization.md](../../../../sources/simota__agent-skills/vector/reference/computer-use-optimization.md)<br>[vector/reference/data-extraction.md](../../../../sources/simota__agent-skills/vector/reference/data-extraction.md)<br>[vector/reference/execution-templates.md](../../../../sources/simota__agent-skills/vector/reference/execution-templates.md)<br>[vector/reference/mobile-emulation.md](../../../../sources/simota__agent-skills/vector/reference/mobile-emulation.md)<br>[vector/reference/parallel-sessions.md](../../../../sources/simota__agent-skills/vector/reference/parallel-sessions.md)<br>[vector/reference/playwright-cdp.md](../../../../sources/simota__agent-skills/vector/reference/playwright-cdp.md) |
| spec | 111 | [zine/reference/hook-design.md](../../../../sources/simota__agent-skills/zine/reference/hook-design.md)<br>[weave/reference/timeout-ttl-design.md](../../../../sources/simota__agent-skills/weave/reference/timeout-ttl-design.md)<br>[vision/reference/design-audit-checklist.md](../../../../sources/simota__agent-skills/vision/reference/design-audit-checklist.md)<br>[vision/reference/design-handoff-collaboration.md](../../../../sources/simota__agent-skills/vision/reference/design-handoff-collaboration.md)<br>[vision/reference/design-methodology.md](../../../../sources/simota__agent-skills/vision/reference/design-methodology.md)<br>[vision/reference/design-review-feedback.md](../../../../sources/simota__agent-skills/vision/reference/design-review-feedback.md)<br>[vision/reference/design-system-anti-patterns.md](../../../../sources/simota__agent-skills/vision/reference/design-system-anti-patterns.md)<br>[vision/reference/design-trends.md](../../../../sources/simota__agent-skills/vision/reference/design-trends.md) |
| eval | 51 | [zen/reference/test-refactoring.md](../../../../sources/simota__agent-skills/zen/reference/test-refactoring.md)<br>[voyager/reference/ephemeral-env-test-data.md](../../../../sources/simota__agent-skills/voyager/reference/ephemeral-env-test-data.md)<br>[void/reference/evaluation-criteria.md](../../../../sources/simota__agent-skills/void/reference/evaluation-criteria.md)<br>[tuner/reference/db-monitoring-observability.md](../../../../sources/simota__agent-skills/tuner/reference/db-monitoring-observability.md)<br>[trawl/reference/observability.md](../../../../sources/simota__agent-skills/trawl/reference/observability.md)<br>[trace/SKILL.md](../../../../sources/simota__agent-skills/trace/SKILL.md)<br>[trace/reference/frustration-signals.md](../../../../sources/simota__agent-skills/trace/reference/frustration-signals.md)<br>[trace/reference/funnel-dropoff.md](../../../../sources/simota__agent-skills/trace/reference/funnel-dropoff.md) |
| security | 48 | [zen/reference/consistency-audit.md](../../../../sources/simota__agent-skills/zen/reference/consistency-audit.md)<br>[zen/reference/guard-clauses.md](../../../../sources/simota__agent-skills/zen/reference/guard-clauses.md)<br>[vision/reference/design-audit-checklist.md](../../../../sources/simota__agent-skills/vision/reference/design-audit-checklist.md)<br>[trawl/reference/compliance-architecture.md](../../../../sources/simota__agent-skills/trawl/reference/compliance-architecture.md)<br>[sketch/reference/content-policy-guardrails.md](../../../../sources/simota__agent-skills/sketch/reference/content-policy-guardrails.md)<br>[sentinel/reference/ai-code-security.md](../../../../sources/simota__agent-skills/sentinel/reference/ai-code-security.md)<br>[sentinel/reference/ai-security.md](../../../../sources/simota__agent-skills/sentinel/reference/ai-security.md)<br>[sentinel/reference/api-security.md](../../../../sources/simota__agent-skills/sentinel/reference/api-security.md) |
| ci | 1 | [.github/workflows/skill-lint.yml](../../../../sources/simota__agent-skills/.github/workflows/skill-lint.yml) |
| container | 19 | [scaffold/reference/docker-compose-templates.md](../../../../sources/simota__agent-skills/scaffold/reference/docker-compose-templates.md)<br>[helm/SKILL.md](../../../../sources/simota__agent-skills/helm/SKILL.md)<br>[helm/reference/blue-ocean-strategy.md](../../../../sources/simota__agent-skills/helm/reference/blue-ocean-strategy.md)<br>[helm/reference/business-model-canvas.md](../../../../sources/simota__agent-skills/helm/reference/business-model-canvas.md)<br>[helm/reference/cognitive-biases.md](../../../../sources/simota__agent-skills/helm/reference/cognitive-biases.md)<br>[helm/reference/data-inputs.md](../../../../sources/simota__agent-skills/helm/reference/data-inputs.md)<br>[helm/reference/disruption-detection.md](../../../../sources/simota__agent-skills/helm/reference/disruption-detection.md)<br>[helm/reference/financial-modeling-pitfalls.md](../../../../sources/simota__agent-skills/helm/reference/financial-modeling-pitfalls.md) |
| instruction | 2 | [AGENTS.md](../../../../sources/simota__agent-skills/AGENTS.md)<br>[CLAUDE.md](../../../../sources/simota__agent-skills/CLAUDE.md) |
| docs | 12 | [README_ja.md](../../../../sources/simota__agent-skills/README_ja.md)<br>[README.md](../../../../sources/simota__agent-skills/README.md)<br>[quill/reference/readme-templates.md](../../../../sources/simota__agent-skills/quill/reference/readme-templates.md)<br>[.loops/skill-update/README.md](../../../../sources/simota__agent-skills/.loops/skill-update/README.md)<br>[.loops/skill-citations/README.md](../../../../sources/simota__agent-skills/.loops/skill-citations/README.md)<br>[_templates/learning-loop-kit/README.md](../../../../sources/simota__agent-skills/_templates/learning-loop-kit/README.md)<br>[_templates/learning-loop-kit/base/README.md](../../../../sources/simota__agent-skills/_templates/learning-loop-kit/base/README.md)<br>[_templates/learning-loop-kit/base/artifacts/README.md](../../../../sources/simota__agent-skills/_templates/learning-loop-kit/base/artifacts/README.md) |
| config | 2 | [_common/apex-dash/sample/package.json](../../../../sources/simota__agent-skills/_common/apex-dash/sample/package.json)<br>[_common/apex-dash/sample/tsconfig.json](../../../../sources/simota__agent-skills/_common/apex-dash/sample/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 51 | [zen/reference/test-refactoring.md](../../../../sources/simota__agent-skills/zen/reference/test-refactoring.md)<br>[voyager/reference/ephemeral-env-test-data.md](../../../../sources/simota__agent-skills/voyager/reference/ephemeral-env-test-data.md)<br>[void/reference/evaluation-criteria.md](../../../../sources/simota__agent-skills/void/reference/evaluation-criteria.md)<br>[tuner/reference/db-monitoring-observability.md](../../../../sources/simota__agent-skills/tuner/reference/db-monitoring-observability.md)<br>[trawl/reference/observability.md](../../../../sources/simota__agent-skills/trawl/reference/observability.md)<br>[trace/SKILL.md](../../../../sources/simota__agent-skills/trace/SKILL.md) |
| CI workflows | 1 | [.github/workflows/skill-lint.yml](../../../../sources/simota__agent-skills/.github/workflows/skill-lint.yml) |
| Containers / deploy | 19 | [scaffold/reference/docker-compose-templates.md](../../../../sources/simota__agent-skills/scaffold/reference/docker-compose-templates.md)<br>[helm/SKILL.md](../../../../sources/simota__agent-skills/helm/SKILL.md)<br>[helm/reference/blue-ocean-strategy.md](../../../../sources/simota__agent-skills/helm/reference/blue-ocean-strategy.md)<br>[helm/reference/business-model-canvas.md](../../../../sources/simota__agent-skills/helm/reference/business-model-canvas.md)<br>[helm/reference/cognitive-biases.md](../../../../sources/simota__agent-skills/helm/reference/cognitive-biases.md)<br>[helm/reference/data-inputs.md](../../../../sources/simota__agent-skills/helm/reference/data-inputs.md) |
| Security / policy | 48 | [zen/reference/consistency-audit.md](../../../../sources/simota__agent-skills/zen/reference/consistency-audit.md)<br>[zen/reference/guard-clauses.md](../../../../sources/simota__agent-skills/zen/reference/guard-clauses.md)<br>[vision/reference/design-audit-checklist.md](../../../../sources/simota__agent-skills/vision/reference/design-audit-checklist.md)<br>[trawl/reference/compliance-architecture.md](../../../../sources/simota__agent-skills/trawl/reference/compliance-architecture.md)<br>[sketch/reference/content-policy-guardrails.md](../../../../sources/simota__agent-skills/sketch/reference/content-policy-guardrails.md)<br>[sentinel/reference/ai-code-security.md](../../../../sources/simota__agent-skills/sentinel/reference/ai-code-security.md) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/simota__agent-skills/AGENTS.md)<br>[CLAUDE.md](../../../../sources/simota__agent-skills/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `frame/reference/figma-mcp-server-ga.md`, `AGENTS.md`, `zine/SKILL.md`.
2. Trace execution through entrypoints: `_common/apex-dash/sample/src/App.tsx`, `_common/apex-dash/sample/src/main.tsx`.
3. Map agent/tool runtime through: `AGENTS.md`, `zine/SKILL.md`, `zine/reference/hook-design.md`.
4. Inspect retrieval/memory/indexing through: `index.html`, `vector/SKILL.md`, `vector/reference/computer-use-optimization.md`.
5. Verify behavior through test/eval files: `zen/reference/test-refactoring.md`, `voyager/reference/ephemeral-env-test-data.md`, `void/reference/evaluation-criteria.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 124 specialist AI agents for Claude Code / Codex CLI / Antigravity CLI agy . Anthropic Agent Skills spec aligned, gerund. 핵심 구조 신호는 HTML, README.md, AGENTS.md, CLAUDE.md, LICENSE, tests이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
