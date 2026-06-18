# borghei/Claude-Skills Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

338 AI skills across 16 domains. PM is the deepest (66 skills - discovery, execution, strategy frameworks, GTM, Jira/Linear/Notion). Plus engineering, marketing, C-level (CAIO/CDO/CCO/GC/VPE), compliance + audit-prep, new research/ domain, vertical advisors. 74 expert agents, 784+ stdlib Python tools. 11 AI assistants.

## 요약

- 조사 단위: `sources/borghei__Claude-Skills` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 3,150 files, 1,279 directories, depth score 129, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp-config.json, site/skills/engineering/mcp-server-builder.html, scripts/mcp_server.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | borghei/Claude-Skills |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | HTML |
| Stars | 279 |
| Forks | 50 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/borghei__Claude-Skills](../../../../sources/borghei__Claude-Skills) |
| Existing report | [reports/global-trending/repositories/borghei__Claude-Skills.md](../../../global-trending/repositories/borghei__Claude-Skills.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 3150 / 1279 |
| Max observed depth | 6 |
| Top directories | .claude, .claude-plugin, .codex, .docs, .gemini, .github, agents, assets, bundles, business-growth, c-level-advisor, cli, commands, data-analytics, docs, documentation, documents, engineering, evals, finance |
| Top extensions | .md: 1667, .py: 820, .html: 338, .json: 134, .js: 53, .png: 34, .yml: 28, .txt: 24, (none): 19, .css: 5, .csv: 5, .map: 4 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 2 |
| .codex | top-level component | 1 |
| .github | ci surface | 1 |
| agents | top-level component | 1 |
| assets | top-level component | 1 |
| bundles | top-level component | 1 |
| business-growth | top-level component | 1 |
| c-level-advisor | top-level component | 1 |
| cli | top-level component | 1 |
| commands | top-level component | 1 |
| data-analytics | top-level component | 1 |
| documentation | documentation surface | 1 |
| documents | documentation surface | 1 |
| engineering | top-level component | 1 |
| evals | top-level component | 1 |
| finance | top-level component | 1 |
| hr-operations | top-level component | 1 |
| legal | top-level component | 1 |


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
| mcp | [mcp-config.json](../../../../sources/borghei__Claude-Skills/mcp-config.json) | mcp signal |
| mcp | [site/skills/engineering/mcp-server-builder.html](../../../../sources/borghei__Claude-Skills/site/skills/engineering/mcp-server-builder.html) | mcp signal |
| mcp | [scripts/mcp_server.py](../../../../sources/borghei__Claude-Skills/scripts/mcp_server.py) | mcp signal |
| mcp | [engineering/mcp-server-builder/SKILL.md](../../../../sources/borghei__Claude-Skills/engineering/mcp-server-builder/SKILL.md) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/borghei__Claude-Skills/AGENTS.md) | agentRuntime signal |
| agentRuntime | [skills.json](../../../../sources/borghei__Claude-Skills/skills.json) | agentRuntime signal |
| agentRuntime | [vertical-advisors/proptech/SKILL.md](../../../../sources/borghei__Claude-Skills/vertical-advisors/proptech/SKILL.md) | agentRuntime signal |
| agentRuntime | [vertical-advisors/marketplace/SKILL.md](../../../../sources/borghei__Claude-Skills/vertical-advisors/marketplace/SKILL.md) | agentRuntime signal |
| entrypoints | [site/js/main.js](../../../../sources/borghei__Claude-Skills/site/js/main.js) | entrypoints signal |
| entrypoints | [cli/src/index.js](../../../../sources/borghei__Claude-Skills/cli/src/index.js) | entrypoints signal |
| entrypoints | [cli/bin/claude-skills.js](../../../../sources/borghei__Claude-Skills/cli/bin/claude-skills.js) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/borghei__Claude-Skills/CLAUDE.md) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [site/js/main.js](../../../../sources/borghei__Claude-Skills/site/js/main.js)<br>[cli/src/index.js](../../../../sources/borghei__Claude-Skills/cli/src/index.js)<br>[cli/bin/claude-skills.js](../../../../sources/borghei__Claude-Skills/cli/bin/claude-skills.js) |
| agentRuntime | 950 | [AGENTS.md](../../../../sources/borghei__Claude-Skills/AGENTS.md)<br>[skills.json](../../../../sources/borghei__Claude-Skills/skills.json)<br>[vertical-advisors/proptech/SKILL.md](../../../../sources/borghei__Claude-Skills/vertical-advisors/proptech/SKILL.md)<br>[vertical-advisors/marketplace/SKILL.md](../../../../sources/borghei__Claude-Skills/vertical-advisors/marketplace/SKILL.md)<br>[vertical-advisors/healthtech/SKILL.md](../../../../sources/borghei__Claude-Skills/vertical-advisors/healthtech/SKILL.md)<br>[vertical-advisors/fintech/SKILL.md](../../../../sources/borghei__Claude-Skills/vertical-advisors/fintech/SKILL.md)<br>[vertical-advisors/edtech/SKILL.md](../../../../sources/borghei__Claude-Skills/vertical-advisors/edtech/SKILL.md)<br>[vertical-advisors/ecommerce/SKILL.md](../../../../sources/borghei__Claude-Skills/vertical-advisors/ecommerce/SKILL.md) |
| mcp | 13 | [mcp-config.json](../../../../sources/borghei__Claude-Skills/mcp-config.json)<br>[site/skills/engineering/mcp-server-builder.html](../../../../sources/borghei__Claude-Skills/site/skills/engineering/mcp-server-builder.html)<br>[scripts/mcp_server.py](../../../../sources/borghei__Claude-Skills/scripts/mcp_server.py)<br>[engineering/mcp-server-builder/SKILL.md](../../../../sources/borghei__Claude-Skills/engineering/mcp-server-builder/SKILL.md)<br>[engineering/mcp-server-builder/scripts/openapi_converter.py](../../../../sources/borghei__Claude-Skills/engineering/mcp-server-builder/scripts/openapi_converter.py)<br>[engineering/mcp-server-builder/scripts/server_scaffolder.py](../../../../sources/borghei__Claude-Skills/engineering/mcp-server-builder/scripts/server_scaffolder.py)<br>[engineering/mcp-server-builder/scripts/tool_linter.py](../../../../sources/borghei__Claude-Skills/engineering/mcp-server-builder/scripts/tool_linter.py)<br>[engineering/mcp-server-builder/references/server-implementation.md](../../../../sources/borghei__Claude-Skills/engineering/mcp-server-builder/references/server-implementation.md) |
| retrieval | 82 | [site/index.html](../../../../sources/borghei__Claude-Skills/site/index.html)<br>[site/WORKFLOWS/index.html](../../../../sources/borghei__Claude-Skills/site/WORKFLOWS/index.html)<br>[site/USAGE/index.html](../../../../sources/borghei__Claude-Skills/site/USAGE/index.html)<br>[site/skills/index.html](../../../../sources/borghei__Claude-Skills/site/skills/index.html)<br>[site/skills/vertical-advisors/index.html](../../../../sources/borghei__Claude-Skills/site/skills/vertical-advisors/index.html)<br>[site/skills/sales-success/index.html](../../../../sources/borghei__Claude-Skills/site/skills/sales-success/index.html)<br>[site/skills/ra-qm-team/index.html](../../../../sources/borghei__Claude-Skills/site/skills/ra-qm-team/index.html)<br>[site/skills/project-management/index.html](../../../../sources/borghei__Claude-Skills/site/skills/project-management/index.html) |
| spec | 182 | [vertical-advisors/marketplace/references/take_rate_design.md](../../../../sources/borghei__Claude-Skills/vertical-advisors/marketplace/references/take_rate_design.md)<br>[vertical-advisors/fintech/assets/regulatory_architecture_template.md](../../../../sources/borghei__Claude-Skills/vertical-advisors/fintech/assets/regulatory_architecture_template.md)<br>[site/skills/project-management/ai-feature-prd.html](../../../../sources/borghei__Claude-Skills/site/skills/project-management/ai-feature-prd.html)<br>[site/skills/project-management/create-prd.html](../../../../sources/borghei__Claude-Skills/site/skills/project-management/create-prd.html)<br>[site/skills/project-management/outcome-roadmap.html](../../../../sources/borghei__Claude-Skills/site/skills/project-management/outcome-roadmap.html)<br>[site/skills/project-management/pricing-prd.html](../../../../sources/borghei__Claude-Skills/site/skills/project-management/pricing-prd.html)<br>[site/skills/project-management/roadmap-communication.html](../../../../sources/borghei__Claude-Skills/site/skills/project-management/roadmap-communication.html)<br>[site/skills/product-team/design-system-lead.html](../../../../sources/borghei__Claude-Skills/site/skills/product-team/design-system-lead.html) |
| eval | 166 | [templates/workflows/AUTOMATION_TEST.md](../../../../sources/borghei__Claude-Skills/templates/workflows/AUTOMATION_TEST.md)<br>[templates/workflows/ci-quality-gate.yml](../../../../sources/borghei__Claude-Skills/templates/workflows/ci-quality-gate.yml)<br>[templates/evals-template/evals/test_cases.json](../../../../sources/borghei__Claude-Skills/templates/evals-template/evals/test_cases.json)<br>[standards/quality/.gitkeep](../../../../sources/borghei__Claude-Skills/standards/quality/.gitkeep)<br>[standards/quality/quality-standards.md](../../../../sources/borghei__Claude-Skills/standards/quality/quality-standards.md)<br>[site/skills/ra-qm-team/quality-documentation-manager.html](../../../../sources/borghei__Claude-Skills/site/skills/ra-qm-team/quality-documentation-manager.html)<br>[site/skills/ra-qm-team/quality-manager-qmr.html](../../../../sources/borghei__Claude-Skills/site/skills/ra-qm-team/quality-manager-qmr.html)<br>[site/skills/ra-qm-team/quality-manager-qms-iso13485.html](../../../../sources/borghei__Claude-Skills/site/skills/ra-qm-team/quality-manager-qms-iso13485.html) |
| security | 213 | [SECURITY.md](../../../../sources/borghei__Claude-Skills/SECURITY.md)<br>[vertical-advisors/edtech/scripts/student_data_compliance_checker.py](../../../../sources/borghei__Claude-Skills/vertical-advisors/edtech/scripts/student_data_compliance_checker.py)<br>[standards/security/.gitkeep](../../../../sources/borghei__Claude-Skills/standards/security/.gitkeep)<br>[standards/security/hook-security-pattern.md](../../../../sources/borghei__Claude-Skills/standards/security/hook-security-pattern.md)<br>[standards/security/security-standards.md](../../../../sources/borghei__Claude-Skills/standards/security/security-standards.md)<br>[site/skills/ra-qm-team/dora-compliance-expert.html](../../../../sources/borghei__Claude-Skills/site/skills/ra-qm-team/dora-compliance-expert.html)<br>[site/skills/ra-qm-team/information-security-manager-iso27001.html](../../../../sources/borghei__Claude-Skills/site/skills/ra-qm-team/information-security-manager-iso27001.html)<br>[site/skills/ra-qm-team/infrastructure-compliance-auditor.html](../../../../sources/borghei__Claude-Skills/site/skills/ra-qm-team/infrastructure-compliance-auditor.html) |
| ci | 8 | [.github/workflows/build-manifest.yml](../../../../sources/borghei__Claude-Skills/.github/workflows/build-manifest.yml)<br>[.github/workflows/claude-code-review.yml](../../../../sources/borghei__Claude-Skills/.github/workflows/claude-code-review.yml)<br>[.github/workflows/enforce-pr-target.yml](../../../../sources/borghei__Claude-Skills/.github/workflows/enforce-pr-target.yml)<br>[.github/workflows/pages.yml](../../../../sources/borghei__Claude-Skills/.github/workflows/pages.yml)<br>[.github/workflows/publish-cli.yml](../../../../sources/borghei__Claude-Skills/.github/workflows/publish-cli.yml)<br>[.github/workflows/skill-security-audit.yml](../../../../sources/borghei__Claude-Skills/.github/workflows/skill-security-audit.yml)<br>[.github/workflows/sync-codex-skills.yml](../../../../sources/borghei__Claude-Skills/.github/workflows/sync-codex-skills.yml)<br>[.github/workflows/virustotal-scan.yml](../../../../sources/borghei__Claude-Skills/.github/workflows/virustotal-scan.yml) |
| container | 3 | [engineering/docker-development/scripts/dockerfile_analyzer.py](../../../../sources/borghei__Claude-Skills/engineering/docker-development/scripts/dockerfile_analyzer.py)<br>[engineering/docker-development/examples/docker-compose.sample.yml](../../../../sources/borghei__Claude-Skills/engineering/docker-development/examples/docker-compose.sample.yml)<br>[engineering/docker-development/examples/Dockerfile.sample](../../../../sources/borghei__Claude-Skills/engineering/docker-development/examples/Dockerfile.sample) |
| instruction | 24 | [AGENTS.md](../../../../sources/borghei__Claude-Skills/AGENTS.md)<br>[CLAUDE.md](../../../../sources/borghei__Claude-Skills/CLAUDE.md)<br>[GEMINI.md](../../../../sources/borghei__Claude-Skills/GEMINI.md)<br>[vertical-advisors/CLAUDE.md](../../../../sources/borghei__Claude-Skills/vertical-advisors/CLAUDE.md)<br>[templates/CLAUDE.md](../../../../sources/borghei__Claude-Skills/templates/CLAUDE.md)<br>[standards/CLAUDE.md](../../../../sources/borghei__Claude-Skills/standards/CLAUDE.md)<br>[sales-success/CLAUDE.md](../../../../sources/borghei__Claude-Skills/sales-success/CLAUDE.md)<br>[research/CLAUDE.md](../../../../sources/borghei__Claude-Skills/research/CLAUDE.md) |
| docs | 497 | [mkdocs.yml](../../../../sources/borghei__Claude-Skills/mkdocs.yml)<br>[README.md](../../../../sources/borghei__Claude-Skills/README.md)<br>[tools/adapters/README.md](../../../../sources/borghei__Claude-Skills/tools/adapters/README.md)<br>[templates/workflows/README.md](../../../../sources/borghei__Claude-Skills/templates/workflows/README.md)<br>[templates/evals-template/README.md](../../../../sources/borghei__Claude-Skills/templates/evals-template/README.md)<br>[site/.nojekyll](../../../../sources/borghei__Claude-Skills/site/.nojekyll)<br>[site/404.html](../../../../sources/borghei__Claude-Skills/site/404.html)<br>[site/index.html](../../../../sources/borghei__Claude-Skills/site/index.html) |
| config | 2 | [engineering/dependency-auditor/test-project/package.json](../../../../sources/borghei__Claude-Skills/engineering/dependency-auditor/test-project/package.json)<br>[cli/package.json](../../../../sources/borghei__Claude-Skills/cli/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 166 | [templates/workflows/AUTOMATION_TEST.md](../../../../sources/borghei__Claude-Skills/templates/workflows/AUTOMATION_TEST.md)<br>[templates/workflows/ci-quality-gate.yml](../../../../sources/borghei__Claude-Skills/templates/workflows/ci-quality-gate.yml)<br>[templates/evals-template/evals/test_cases.json](../../../../sources/borghei__Claude-Skills/templates/evals-template/evals/test_cases.json)<br>[standards/quality/.gitkeep](../../../../sources/borghei__Claude-Skills/standards/quality/.gitkeep)<br>[standards/quality/quality-standards.md](../../../../sources/borghei__Claude-Skills/standards/quality/quality-standards.md)<br>[site/skills/ra-qm-team/quality-documentation-manager.html](../../../../sources/borghei__Claude-Skills/site/skills/ra-qm-team/quality-documentation-manager.html) |
| CI workflows | 8 | [.github/workflows/build-manifest.yml](../../../../sources/borghei__Claude-Skills/.github/workflows/build-manifest.yml)<br>[.github/workflows/claude-code-review.yml](../../../../sources/borghei__Claude-Skills/.github/workflows/claude-code-review.yml)<br>[.github/workflows/enforce-pr-target.yml](../../../../sources/borghei__Claude-Skills/.github/workflows/enforce-pr-target.yml)<br>[.github/workflows/pages.yml](../../../../sources/borghei__Claude-Skills/.github/workflows/pages.yml)<br>[.github/workflows/publish-cli.yml](../../../../sources/borghei__Claude-Skills/.github/workflows/publish-cli.yml)<br>[.github/workflows/skill-security-audit.yml](../../../../sources/borghei__Claude-Skills/.github/workflows/skill-security-audit.yml) |
| Containers / deploy | 3 | [engineering/docker-development/scripts/dockerfile_analyzer.py](../../../../sources/borghei__Claude-Skills/engineering/docker-development/scripts/dockerfile_analyzer.py)<br>[engineering/docker-development/examples/docker-compose.sample.yml](../../../../sources/borghei__Claude-Skills/engineering/docker-development/examples/docker-compose.sample.yml)<br>[engineering/docker-development/examples/Dockerfile.sample](../../../../sources/borghei__Claude-Skills/engineering/docker-development/examples/Dockerfile.sample) |
| Security / policy | 213 | [SECURITY.md](../../../../sources/borghei__Claude-Skills/SECURITY.md)<br>[vertical-advisors/edtech/scripts/student_data_compliance_checker.py](../../../../sources/borghei__Claude-Skills/vertical-advisors/edtech/scripts/student_data_compliance_checker.py)<br>[standards/security/.gitkeep](../../../../sources/borghei__Claude-Skills/standards/security/.gitkeep)<br>[standards/security/hook-security-pattern.md](../../../../sources/borghei__Claude-Skills/standards/security/hook-security-pattern.md)<br>[standards/security/security-standards.md](../../../../sources/borghei__Claude-Skills/standards/security/security-standards.md)<br>[site/skills/ra-qm-team/dora-compliance-expert.html](../../../../sources/borghei__Claude-Skills/site/skills/ra-qm-team/dora-compliance-expert.html) |
| Agent instructions | 24 | [AGENTS.md](../../../../sources/borghei__Claude-Skills/AGENTS.md)<br>[CLAUDE.md](../../../../sources/borghei__Claude-Skills/CLAUDE.md)<br>[GEMINI.md](../../../../sources/borghei__Claude-Skills/GEMINI.md)<br>[vertical-advisors/CLAUDE.md](../../../../sources/borghei__Claude-Skills/vertical-advisors/CLAUDE.md)<br>[templates/CLAUDE.md](../../../../sources/borghei__Claude-Skills/templates/CLAUDE.md)<br>[standards/CLAUDE.md](../../../../sources/borghei__Claude-Skills/standards/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `mcp-config.json`, `site/skills/engineering/mcp-server-builder.html`, `scripts/mcp_server.py`.
2. Trace execution through entrypoints: `site/js/main.js`, `cli/src/index.js`, `cli/bin/claude-skills.js`.
3. Map agent/tool runtime through: `AGENTS.md`, `skills.json`, `vertical-advisors/proptech/SKILL.md`.
4. Inspect retrieval/memory/indexing through: `site/index.html`, `site/WORKFLOWS/index.html`, `site/USAGE/index.html`.
5. Verify behavior through test/eval files: `templates/workflows/AUTOMATION_TEST.md`, `templates/workflows/ci-quality-gate.yml`, `templates/evals-template/evals/test_cases.json`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 338 AI skills across 16 domains. PM is the deepest 66 skills discovery, execution, strategy frameworks, GTM, Jira/Linear. 핵심 구조 신호는 HTML, README.md, AGENTS.md, CLAUDE.md, LICENSE, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
