# griddynamics/rosetta Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Meta-prompting, context engineering, and centralized instructions management for AI coding agents

## 요약

- 조사 단위: `sources/griddynamics__rosetta` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,914 files, 621 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=rosettify/tests/e2e/mcp.e2e.test.ts, rosettify/src/frontends/mcp.ts, rosetta-mcp-server/pyproject.toml이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | griddynamics/rosetta |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 304 |
| Forks | 60 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/griddynamics__rosetta](../../../../sources/griddynamics__rosetta) |
| Existing report | [reports/global-trending/repositories/griddynamics__rosetta.md](../../../global-trending/repositories/griddynamics__rosetta.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1914 / 621 |
| Max observed depth | 10 |
| Top directories | .agents, .claude, .claude-plugin, .cursor-plugin, .githooks, .github, agents, docs, helm-charts, hooks, ims-mcp-server, instructions, plans, plugins, rosetta-cli, rosetta-mcp-server, rosettify, scripts, src, test-library |
| Top extensions | .md: 1365, .ts: 201, .py: 103, .json: 62, .txt: 32, .png: 23, .mdc: 22, .tmpl: 18, (none): 16, .yml: 15, .toml: 13, .yaml: 12 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 44 |
| src | source boundary | 34 |
| .github | ci surface | 1 |
| agents | top-level component | 1 |
| helm-charts | deployment surface | 1 |
| hooks | top-level component | 1 |
| ims-mcp-server | source boundary | 1 |
| instructions | top-level component | 1 |
| plans | top-level component | 1 |
| plugins | top-level component | 1 |
| rosetta-cli | top-level component | 1 |
| rosetta-mcp-server | source boundary | 1 |
| rosettify | top-level component | 1 |
| scripts | top-level component | 1 |
| test-library | validation surface | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
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
| mcp | [rosettify/tests/e2e/mcp.e2e.test.ts](../../../../sources/griddynamics__rosetta/rosettify/tests/e2e/mcp.e2e.test.ts) | mcp signal |
| mcp | [rosettify/src/frontends/mcp.ts](../../../../sources/griddynamics__rosetta/rosettify/src/frontends/mcp.ts) | mcp signal |
| mcp | [rosetta-mcp-server/pyproject.toml](../../../../sources/griddynamics__rosetta/rosetta-mcp-server/pyproject.toml) | mcp signal |
| mcp | [rosetta-mcp-server/README.md](../../../../sources/griddynamics__rosetta/rosetta-mcp-server/README.md) | mcp signal |
| agentRuntime | [test-library/init/.claude/agents/test-case-result-validator.md](../../../../sources/griddynamics__rosetta/test-library/init/.claude/agents/test-case-result-validator.md) | agentRuntime signal |
| agentRuntime | [test-library/hooks/loose-files/prompt-claude-code.md](../../../../sources/griddynamics__rosetta/test-library/hooks/loose-files/prompt-claude-code.md) | agentRuntime signal |
| agentRuntime | [test-library/hooks/loose-files/prompt-codex.md](../../../../sources/griddynamics__rosetta/test-library/hooks/loose-files/prompt-codex.md) | agentRuntime signal |
| agentRuntime | [test-library/hooks/loose-files/prompt-copilot.md](../../../../sources/griddynamics__rosetta/test-library/hooks/loose-files/prompt-copilot.md) | agentRuntime signal |
| entrypoints | [src/plugin-generator/src/cli.ts](../../../../sources/griddynamics__rosetta/src/plugin-generator/src/cli.ts) | entrypoints signal |
| entrypoints | [src/plugin-generator/src/index.ts](../../../../sources/griddynamics__rosetta/src/plugin-generator/src/index.ts) | entrypoints signal |
| entrypoints | [rosettify/src/bin/rosettify.ts](../../../../sources/griddynamics__rosetta/rosettify/src/bin/rosettify.ts) | entrypoints signal |
| entrypoints | [rosetta-cli/rosetta_cli/__main__.py](../../../../sources/griddynamics__rosetta/rosetta-cli/rosetta_cli/__main__.py) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 6 | [src/plugin-generator/src/cli.ts](../../../../sources/griddynamics__rosetta/src/plugin-generator/src/cli.ts)<br>[src/plugin-generator/src/index.ts](../../../../sources/griddynamics__rosetta/src/plugin-generator/src/index.ts)<br>[rosettify/src/bin/rosettify.ts](../../../../sources/griddynamics__rosetta/rosettify/src/bin/rosettify.ts)<br>[rosetta-cli/rosetta_cli/__main__.py](../../../../sources/griddynamics__rosetta/rosetta-cli/rosetta_cli/__main__.py)<br>[ims-mcp-server/ims_mcp/__main__.py](../../../../sources/griddynamics__rosetta/ims-mcp-server/ims_mcp/__main__.py)<br>[ims-mcp-server/ims_mcp/server.py](../../../../sources/griddynamics__rosetta/ims-mcp-server/ims_mcp/server.py) |
| agentRuntime | 842 | [test-library/init/.claude/agents/test-case-result-validator.md](../../../../sources/griddynamics__rosetta/test-library/init/.claude/agents/test-case-result-validator.md)<br>[test-library/hooks/loose-files/prompt-claude-code.md](../../../../sources/griddynamics__rosetta/test-library/hooks/loose-files/prompt-claude-code.md)<br>[test-library/hooks/loose-files/prompt-codex.md](../../../../sources/griddynamics__rosetta/test-library/hooks/loose-files/prompt-codex.md)<br>[test-library/hooks/loose-files/prompt-copilot.md](../../../../sources/griddynamics__rosetta/test-library/hooks/loose-files/prompt-copilot.md)<br>[test-library/hooks/loose-files/prompt-cursor.md](../../../../sources/griddynamics__rosetta/test-library/hooks/loose-files/prompt-cursor.md)<br>[test-library/hooks/loose-files/prompt-windsurf.md](../../../../sources/griddynamics__rosetta/test-library/hooks/loose-files/prompt-windsurf.md)<br>[test-library/hooks/loose-files/README.md](../../../../sources/griddynamics__rosetta/test-library/hooks/loose-files/README.md)<br>[src/plugin-generator/tests/fixtures/sample-plugins/core-cursor/hooks.json.tmpl](../../../../sources/griddynamics__rosetta/src/plugin-generator/tests/fixtures/sample-plugins/core-cursor/hooks.json.tmpl) |
| mcp | 108 | [rosettify/tests/e2e/mcp.e2e.test.ts](../../../../sources/griddynamics__rosetta/rosettify/tests/e2e/mcp.e2e.test.ts)<br>[rosettify/src/frontends/mcp.ts](../../../../sources/griddynamics__rosetta/rosettify/src/frontends/mcp.ts)<br>[rosetta-mcp-server/pyproject.toml](../../../../sources/griddynamics__rosetta/rosetta-mcp-server/pyproject.toml)<br>[rosetta-mcp-server/README.md](../../../../sources/griddynamics__rosetta/rosetta-mcp-server/README.md)<br>[plugins/core-cursor-standalone/.cursor/skills/specflow-use/references/specflow-mcp-tools.md](../../../../sources/griddynamics__rosetta/plugins/core-cursor-standalone/.cursor/skills/specflow-use/references/specflow-mcp-tools.md)<br>[plugins/core-cursor/skills/specflow-use/references/specflow-mcp-tools.md](../../../../sources/griddynamics__rosetta/plugins/core-cursor/skills/specflow-use/references/specflow-mcp-tools.md)<br>[plugins/core-copilot-standalone/.github/skills/specflow-use/references/specflow-mcp-tools.md](../../../../sources/griddynamics__rosetta/plugins/core-copilot-standalone/.github/skills/specflow-use/references/specflow-mcp-tools.md)<br>[plugins/core-copilot/skills/specflow-use/references/specflow-mcp-tools.md](../../../../sources/griddynamics__rosetta/plugins/core-copilot/skills/specflow-use/references/specflow-mcp-tools.md) |
| retrieval | 37 | [src/plugin-generator/tests/unit/serialize/markdown-index.test.ts](../../../../sources/griddynamics__rosetta/src/plugin-generator/tests/unit/serialize/markdown-index.test.ts)<br>[src/plugin-generator/src/index.ts](../../../../sources/griddynamics__rosetta/src/plugin-generator/src/index.ts)<br>[src/plugin-generator/src/serialize/markdown-index.ts](../../../../sources/griddynamics__rosetta/src/plugin-generator/src/serialize/markdown-index.ts)<br>[rosettify/tests/unit/plan/index.test.ts](../../../../sources/griddynamics__rosetta/rosettify/tests/unit/plan/index.test.ts)<br>[rosettify/src/registry/index.ts](../../../../sources/griddynamics__rosetta/rosettify/src/registry/index.ts)<br>[rosettify/src/commands/plan/index.ts](../../../../sources/griddynamics__rosetta/rosettify/src/commands/plan/index.ts)<br>[rosettify/src/commands/plan/templates/index.ts](../../../../sources/griddynamics__rosetta/rosettify/src/commands/plan/templates/index.ts)<br>[rosettify/src/commands/help/index.ts](../../../../sources/griddynamics__rosetta/rosettify/src/commands/help/index.ts) |
| spec | 171 | [requirements.txt](../../../../sources/griddynamics__rosetta/requirements.txt)<br>[src/plugin-generator/tests/unit/spec/model-maps.test.ts](../../../../sources/griddynamics__rosetta/src/plugin-generator/tests/unit/spec/model-maps.test.ts)<br>[src/plugin-generator/tests/unit/plugin-processors/plugin-process-spec-entries.test.ts](../../../../sources/griddynamics__rosetta/src/plugin-generator/tests/unit/plugin-processors/plugin-process-spec-entries.test.ts)<br>[src/plugin-generator/src/spec/bootstrap-manifest.ts](../../../../sources/griddynamics__rosetta/src/plugin-generator/src/spec/bootstrap-manifest.ts)<br>[src/plugin-generator/src/spec/model-maps.ts](../../../../sources/griddynamics__rosetta/src/plugin-generator/src/spec/model-maps.ts)<br>[src/plugin-generator/src/spec/releases.ts](../../../../sources/griddynamics__rosetta/src/plugin-generator/src/spec/releases.ts)<br>[src/plugin-generator/src/spec/targets.ts](../../../../sources/griddynamics__rosetta/src/plugin-generator/src/spec/targets.ts)<br>[src/plugin-generator/src/plugin-processors/plugin-process-spec-entries.ts](../../../../sources/griddynamics__rosetta/src/plugin-generator/src/plugin-processors/plugin-process-spec-entries.ts) |
| eval | 277 | [run-tests.sh](../../../../sources/griddynamics__rosetta/run-tests.sh)<br>[test-library/ecommerce-spring-reactjs.zip](../../../../sources/griddynamics__rosetta/test-library/ecommerce-spring-reactjs.zip)<br>[test-library/manual-testing-prompts.md](../../../../sources/griddynamics__rosetta/test-library/manual-testing-prompts.md)<br>[test-library/spring-boot-react-mysql.zip](../../../../sources/griddynamics__rosetta/test-library/spring-boot-react-mysql.zip)<br>[test-library/testgen/prompt-request.md](../../../../sources/griddynamics__rosetta/test-library/testgen/prompt-request.md)<br>[test-library/testgen/prompt-validation.md](../../../../sources/griddynamics__rosetta/test-library/testgen/prompt-validation.md)<br>[test-library/testgen/trigger.txt](../../../../sources/griddynamics__rosetta/test-library/testgen/trigger.txt)<br>[test-library/test-cases/git-nexus/test-scenarios.md](../../../../sources/griddynamics__rosetta/test-library/test-cases/git-nexus/test-scenarios.md) |
| security | 38 | [SECURITY.md](../../../../sources/griddynamics__rosetta/SECURITY.md)<br>[src/plugin-generator/tests/fixtures/sample-instructions/r2/core/rules/bootstrap-core-policy.md](../../../../sources/griddynamics__rosetta/src/plugin-generator/tests/fixtures/sample-instructions/r2/core/rules/bootstrap-core-policy.md)<br>[src/plugin-generator/tests/fixtures/sample-instructions/r2/acme/rules/acme-policy.md](../../../../sources/griddynamics__rosetta/src/plugin-generator/tests/fixtures/sample-instructions/r2/acme/rules/acme-policy.md)<br>[rosetta-cli/tests/test_command_auth_order.py](../../../../sources/griddynamics__rosetta/rosetta-cli/tests/test_command_auth_order.py)<br>[rosetta-cli/rosetta_cli/ims_auth.py](../../../../sources/griddynamics__rosetta/rosetta-cli/rosetta_cli/ims_auth.py)<br>[rosetta-cli/rosetta_cli/services/auth_service.py](../../../../sources/griddynamics__rosetta/rosetta-cli/rosetta_cli/services/auth_service.py)<br>[plugins/core-cursor-standalone/.cursor/rules/bootstrap-core-policy.mdc](../../../../sources/griddynamics__rosetta/plugins/core-cursor-standalone/.cursor/rules/bootstrap-core-policy.mdc)<br>[plugins/core-cursor-standalone/.cursor/rules/bootstrap-execution-policy.mdc](../../../../sources/griddynamics__rosetta/plugins/core-cursor-standalone/.cursor/rules/bootstrap-execution-policy.mdc) |
| ci | 14 | [.github/workflows/pages.yml](../../../../sources/griddynamics__rosetta/.github/workflows/pages.yml)<br>[.github/workflows/publish-ims-mcp.yml](../../../../sources/griddynamics__rosetta/.github/workflows/publish-ims-mcp.yml)<br>[.github/workflows/publish-instructions.yml](../../../../sources/griddynamics__rosetta/.github/workflows/publish-instructions.yml)<br>[.github/workflows/publish-mcp-helm-chart.yml](../../../../sources/griddynamics__rosetta/.github/workflows/publish-mcp-helm-chart.yml)<br>[.github/workflows/publish-rosetta-cli.yml](../../../../sources/griddynamics__rosetta/.github/workflows/publish-rosetta-cli.yml)<br>[.github/workflows/publish-rosetta-mcp.yml](../../../../sources/griddynamics__rosetta/.github/workflows/publish-rosetta-mcp.yml)<br>[.github/workflows/publish-rosettify.yml](../../../../sources/griddynamics__rosetta/.github/workflows/publish-rosettify.yml)<br>[.github/workflows/repo-analysis.yml](../../../../sources/griddynamics__rosetta/.github/workflows/repo-analysis.yml) |
| container | 1 | [ims-mcp-server/Dockerfile](../../../../sources/griddynamics__rosetta/ims-mcp-server/Dockerfile) |
| instruction | 24 | [plugins/core-cursor-standalone/.cursor/rules/bootstrap-core-policy.mdc](../../../../sources/griddynamics__rosetta/plugins/core-cursor-standalone/.cursor/rules/bootstrap-core-policy.mdc)<br>[plugins/core-cursor-standalone/.cursor/rules/bootstrap-execution-policy.mdc](../../../../sources/griddynamics__rosetta/plugins/core-cursor-standalone/.cursor/rules/bootstrap-execution-policy.mdc)<br>[plugins/core-cursor-standalone/.cursor/rules/bootstrap-guardrails.mdc](../../../../sources/griddynamics__rosetta/plugins/core-cursor-standalone/.cursor/rules/bootstrap-guardrails.mdc)<br>[plugins/core-cursor-standalone/.cursor/rules/bootstrap-hitl-questioning.mdc](../../../../sources/griddynamics__rosetta/plugins/core-cursor-standalone/.cursor/rules/bootstrap-hitl-questioning.mdc)<br>[plugins/core-cursor-standalone/.cursor/rules/bootstrap-rosetta-files.mdc](../../../../sources/griddynamics__rosetta/plugins/core-cursor-standalone/.cursor/rules/bootstrap-rosetta-files.mdc)<br>[plugins/core-cursor-standalone/.cursor/rules/coding-iac-best-practices.mdc](../../../../sources/griddynamics__rosetta/plugins/core-cursor-standalone/.cursor/rules/coding-iac-best-practices.mdc)<br>[plugins/core-cursor-standalone/.cursor/rules/INDEX.md](../../../../sources/griddynamics__rosetta/plugins/core-cursor-standalone/.cursor/rules/INDEX.md)<br>[plugins/core-cursor-standalone/.cursor/rules/plugin-files-mode.mdc](../../../../sources/griddynamics__rosetta/plugins/core-cursor-standalone/.cursor/rules/plugin-files-mode.mdc) |
| docs | 159 | [README.md](../../../../sources/griddynamics__rosetta/README.md)<br>[test-library/hooks/loose-files/README.md](../../../../sources/griddynamics__rosetta/test-library/hooks/loose-files/README.md)<br>[rosettify/README.md](../../../../sources/griddynamics__rosetta/rosettify/README.md)<br>[rosetta-mcp-server/README.md](../../../../sources/griddynamics__rosetta/rosetta-mcp-server/README.md)<br>[rosetta-cli/README.md](../../../../sources/griddynamics__rosetta/rosetta-cli/README.md)<br>[ims-mcp-server/README.md](../../../../sources/griddynamics__rosetta/ims-mcp-server/README.md)<br>[helm-charts/rosetta-mcp-server/README.md](../../../../sources/griddynamics__rosetta/helm-charts/rosetta-mcp-server/README.md)<br>[docs/ARCHITECTURE.md](../../../../sources/griddynamics__rosetta/docs/ARCHITECTURE.md) |
| config | 10 | [requirements.txt](../../../../sources/griddynamics__rosetta/requirements.txt)<br>[src/plugin-generator/package.json](../../../../sources/griddynamics__rosetta/src/plugin-generator/package.json)<br>[src/plugin-generator/tsconfig.json](../../../../sources/griddynamics__rosetta/src/plugin-generator/tsconfig.json)<br>[rosettify/package.json](../../../../sources/griddynamics__rosetta/rosettify/package.json)<br>[rosettify/tsconfig.json](../../../../sources/griddynamics__rosetta/rosettify/tsconfig.json)<br>[rosetta-mcp-server/pyproject.toml](../../../../sources/griddynamics__rosetta/rosetta-mcp-server/pyproject.toml)<br>[rosetta-cli/pyproject.toml](../../../../sources/griddynamics__rosetta/rosetta-cli/pyproject.toml)<br>[ims-mcp-server/pyproject.toml](../../../../sources/griddynamics__rosetta/ims-mcp-server/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 277 | [run-tests.sh](../../../../sources/griddynamics__rosetta/run-tests.sh)<br>[test-library/ecommerce-spring-reactjs.zip](../../../../sources/griddynamics__rosetta/test-library/ecommerce-spring-reactjs.zip)<br>[test-library/manual-testing-prompts.md](../../../../sources/griddynamics__rosetta/test-library/manual-testing-prompts.md)<br>[test-library/spring-boot-react-mysql.zip](../../../../sources/griddynamics__rosetta/test-library/spring-boot-react-mysql.zip)<br>[test-library/testgen/prompt-request.md](../../../../sources/griddynamics__rosetta/test-library/testgen/prompt-request.md)<br>[test-library/testgen/prompt-validation.md](../../../../sources/griddynamics__rosetta/test-library/testgen/prompt-validation.md) |
| CI workflows | 14 | [.github/workflows/pages.yml](../../../../sources/griddynamics__rosetta/.github/workflows/pages.yml)<br>[.github/workflows/publish-ims-mcp.yml](../../../../sources/griddynamics__rosetta/.github/workflows/publish-ims-mcp.yml)<br>[.github/workflows/publish-instructions.yml](../../../../sources/griddynamics__rosetta/.github/workflows/publish-instructions.yml)<br>[.github/workflows/publish-mcp-helm-chart.yml](../../../../sources/griddynamics__rosetta/.github/workflows/publish-mcp-helm-chart.yml)<br>[.github/workflows/publish-rosetta-cli.yml](../../../../sources/griddynamics__rosetta/.github/workflows/publish-rosetta-cli.yml)<br>[.github/workflows/publish-rosetta-mcp.yml](../../../../sources/griddynamics__rosetta/.github/workflows/publish-rosetta-mcp.yml) |
| Containers / deploy | 1 | [ims-mcp-server/Dockerfile](../../../../sources/griddynamics__rosetta/ims-mcp-server/Dockerfile) |
| Security / policy | 38 | [SECURITY.md](../../../../sources/griddynamics__rosetta/SECURITY.md)<br>[src/plugin-generator/tests/fixtures/sample-instructions/r2/core/rules/bootstrap-core-policy.md](../../../../sources/griddynamics__rosetta/src/plugin-generator/tests/fixtures/sample-instructions/r2/core/rules/bootstrap-core-policy.md)<br>[src/plugin-generator/tests/fixtures/sample-instructions/r2/acme/rules/acme-policy.md](../../../../sources/griddynamics__rosetta/src/plugin-generator/tests/fixtures/sample-instructions/r2/acme/rules/acme-policy.md)<br>[rosetta-cli/tests/test_command_auth_order.py](../../../../sources/griddynamics__rosetta/rosetta-cli/tests/test_command_auth_order.py)<br>[rosetta-cli/rosetta_cli/ims_auth.py](../../../../sources/griddynamics__rosetta/rosetta-cli/rosetta_cli/ims_auth.py)<br>[rosetta-cli/rosetta_cli/services/auth_service.py](../../../../sources/griddynamics__rosetta/rosetta-cli/rosetta_cli/services/auth_service.py) |
| Agent instructions | 24 | [plugins/core-cursor-standalone/.cursor/rules/bootstrap-core-policy.mdc](../../../../sources/griddynamics__rosetta/plugins/core-cursor-standalone/.cursor/rules/bootstrap-core-policy.mdc)<br>[plugins/core-cursor-standalone/.cursor/rules/bootstrap-execution-policy.mdc](../../../../sources/griddynamics__rosetta/plugins/core-cursor-standalone/.cursor/rules/bootstrap-execution-policy.mdc)<br>[plugins/core-cursor-standalone/.cursor/rules/bootstrap-guardrails.mdc](../../../../sources/griddynamics__rosetta/plugins/core-cursor-standalone/.cursor/rules/bootstrap-guardrails.mdc)<br>[plugins/core-cursor-standalone/.cursor/rules/bootstrap-hitl-questioning.mdc](../../../../sources/griddynamics__rosetta/plugins/core-cursor-standalone/.cursor/rules/bootstrap-hitl-questioning.mdc)<br>[plugins/core-cursor-standalone/.cursor/rules/bootstrap-rosetta-files.mdc](../../../../sources/griddynamics__rosetta/plugins/core-cursor-standalone/.cursor/rules/bootstrap-rosetta-files.mdc)<br>[plugins/core-cursor-standalone/.cursor/rules/coding-iac-best-practices.mdc](../../../../sources/griddynamics__rosetta/plugins/core-cursor-standalone/.cursor/rules/coding-iac-best-practices.mdc) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `rosettify/tests/e2e/mcp.e2e.test.ts`, `rosettify/src/frontends/mcp.ts`, `rosetta-mcp-server/pyproject.toml`.
2. Trace execution through entrypoints: `src/plugin-generator/src/cli.ts`, `src/plugin-generator/src/index.ts`, `rosettify/src/bin/rosettify.ts`.
3. Map agent/tool runtime through: `test-library/init/.claude/agents/test-case-result-validator.md`, `test-library/hooks/loose-files/prompt-claude-code.md`, `test-library/hooks/loose-files/prompt-codex.md`.
4. Inspect retrieval/memory/indexing through: `src/plugin-generator/tests/unit/serialize/markdown-index.test.ts`, `src/plugin-generator/src/index.ts`, `src/plugin-generator/src/serialize/markdown-index.ts`.
5. Verify behavior through test/eval files: `run-tests.sh`, `test-library/ecommerce-spring-reactjs.zip`, `test-library/manual-testing-prompts.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Meta prompting, context engineering, and centralized instructions management for AI coding agents. 핵심 구조 신호는 TypeScript, requirements.txt, README.md, LICENSE, mcp, tests이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
