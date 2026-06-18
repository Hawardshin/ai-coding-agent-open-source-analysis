# microsoft/skills Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Skills, MCP servers, Custom Agents, Agents.md for SDKs to ground Coding Agents

## 요약

- 조사 단위: `sources/microsoft__skills` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,492 files, 670 directories, depth score 122, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/scenarios/mcp-builder/acceptance-criteria.md, tests/scenarios/mcp-builder/scenarios.yaml, docs-site/src/data/mcp-servers.json이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | microsoft/skills |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 2580 |
| Forks | 298 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/microsoft__skills](../../../../sources/microsoft__skills) |
| Existing report | [reports/global-trending/repositories/microsoft__skills.md](../../../global-trending/repositories/microsoft__skills.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1492 / 670 |
| Max observed depth | 13 |
| Top directories | .claude, .claude-plugin, .entire, .github, .opencode, docs, docs-site, hooks, tests |
| Top extensions | .md: 1158, .yaml: 138, .json: 36, .py: 36, .ts: 24, .ps1: 16, .sh: 13, (none): 10, .yml: 8, .astro: 7, .tsx: 7, .png: 6 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 105 |
| docs | documentation surface | 18 |
| .github | ci surface | 1 |
| docs-site | documentation surface | 1 |
| hooks | top-level component | 1 |


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
| mcp | [tests/scenarios/mcp-builder/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/mcp-builder/acceptance-criteria.md) | mcp signal |
| mcp | [tests/scenarios/mcp-builder/scenarios.yaml](../../../../sources/microsoft__skills/tests/scenarios/mcp-builder/scenarios.yaml) | mcp signal |
| mcp | [docs-site/src/data/mcp-servers.json](../../../../sources/microsoft__skills/docs-site/src/data/mcp-servers.json) | mcp signal |
| mcp | [.github/skills/mcp-builder/SKILL.md](../../../../sources/microsoft__skills/.github/skills/mcp-builder/SKILL.md) | mcp signal |
| agentRuntime | [Agents.md](../../../../sources/microsoft__skills/Agents.md) | agentRuntime signal |
| agentRuntime | [tests/AGENTS.md](../../../../sources/microsoft__skills/tests/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/schemas/skill-scenarios.schema.json](../../../../sources/microsoft__skills/tests/schemas/skill-scenarios.schema.json) | agentRuntime signal |
| agentRuntime | [tests/scenarios/skill-scenarios.schema.json](../../../../sources/microsoft__skills/tests/scenarios/skill-scenarios.schema.json) | agentRuntime signal |
| instruction | [.github/copilot-instructions.md](../../../../sources/microsoft__skills/.github/copilot-instructions.md) | instruction signal |
| instruction | [.github/plugins/deep-wiki/commands/agents.md](../../../../sources/microsoft__skills/.github/plugins/deep-wiki/commands/agents.md) | instruction signal |
| config | [tests/package.json](../../../../sources/microsoft__skills/tests/package.json) | config signal |
| config | [tests/tsconfig.json](../../../../sources/microsoft__skills/tests/tsconfig.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 1091 | [Agents.md](../../../../sources/microsoft__skills/Agents.md)<br>[tests/AGENTS.md](../../../../sources/microsoft__skills/tests/AGENTS.md)<br>[tests/schemas/skill-scenarios.schema.json](../../../../sources/microsoft__skills/tests/schemas/skill-scenarios.schema.json)<br>[tests/scenarios/skill-scenarios.schema.json](../../../../sources/microsoft__skills/tests/scenarios/skill-scenarios.schema.json)<br>[tests/scenarios/skill-creator/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/skill-creator/acceptance-criteria.md)<br>[tests/scenarios/skill-creator/scenarios.yaml](../../../../sources/microsoft__skills/tests/scenarios/skill-creator/scenarios.yaml)<br>[tests/scenarios/agent-framework-azure-ai-py/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/agent-framework-azure-ai-py/acceptance-criteria.md)<br>[tests/scenarios/agent-framework-azure-ai-py/scenarios.yaml](../../../../sources/microsoft__skills/tests/scenarios/agent-framework-azure-ai-py/scenarios.yaml) |
| mcp | 25 | [tests/scenarios/mcp-builder/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/mcp-builder/acceptance-criteria.md)<br>[tests/scenarios/mcp-builder/scenarios.yaml](../../../../sources/microsoft__skills/tests/scenarios/mcp-builder/scenarios.yaml)<br>[docs-site/src/data/mcp-servers.json](../../../../sources/microsoft__skills/docs-site/src/data/mcp-servers.json)<br>[.github/skills/mcp-builder/SKILL.md](../../../../sources/microsoft__skills/.github/skills/mcp-builder/SKILL.md)<br>[.github/skills/mcp-builder/scripts/connections.py](../../../../sources/microsoft__skills/.github/skills/mcp-builder/scripts/connections.py)<br>[.github/skills/mcp-builder/scripts/evaluation.py](../../../../sources/microsoft__skills/.github/skills/mcp-builder/scripts/evaluation.py)<br>[.github/skills/mcp-builder/scripts/example_evaluation.xml](../../../../sources/microsoft__skills/.github/skills/mcp-builder/scripts/example_evaluation.xml)<br>[.github/skills/mcp-builder/scripts/requirements.txt](../../../../sources/microsoft__skills/.github/skills/mcp-builder/scripts/requirements.txt) |
| retrieval | 52 | [tests/scenarios/wiki-qa/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/wiki-qa/acceptance-criteria.md)<br>[tests/scenarios/wiki-page-writer/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/wiki-page-writer/acceptance-criteria.md)<br>[tests/scenarios/wiki-architect/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/wiki-architect/acceptance-criteria.md)<br>[tests/harness/index.ts](../../../../sources/microsoft__skills/tests/harness/index.ts)<br>[docs-site/src/pages/index.astro](../../../../sources/microsoft__skills/docs-site/src/pages/index.astro)<br>[docs/index.html](../../../../sources/microsoft__skills/docs/index.html)<br>[docs/_astro/index.DiEladB3.js](../../../../sources/microsoft__skills/docs/_astro/index.DiEladB3.js)<br>[docs/_astro/index.wDopByTC.css](../../../../sources/microsoft__skills/docs/_astro/index.wDopByTC.css) |
| spec | 160 | [tests/scenarios/zustand-store-ts/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/zustand-store-ts/acceptance-criteria.md)<br>[tests/scenarios/wiki-qa/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/wiki-qa/acceptance-criteria.md)<br>[tests/scenarios/wiki-page-writer/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/wiki-page-writer/acceptance-criteria.md)<br>[tests/scenarios/wiki-architect/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/wiki-architect/acceptance-criteria.md)<br>[tests/scenarios/skill-creator/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/skill-creator/acceptance-criteria.md)<br>[tests/scenarios/react-flow-node-ts/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/react-flow-node-ts/acceptance-criteria.md)<br>[tests/scenarios/pydantic-models-py/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/pydantic-models-py/acceptance-criteria.md)<br>[tests/scenarios/podcast-generation/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/podcast-generation/acceptance-criteria.md) |
| eval | 375 | [tests/.gitignore](../../../../sources/microsoft__skills/tests/.gitignore)<br>[tests/AGENTS.md](../../../../sources/microsoft__skills/tests/AGENTS.md)<br>[tests/package-lock.json](../../../../sources/microsoft__skills/tests/package-lock.json)<br>[tests/package.json](../../../../sources/microsoft__skills/tests/package.json)<br>[tests/pnpm-lock.yaml](../../../../sources/microsoft__skills/tests/pnpm-lock.yaml)<br>[tests/README.md](../../../../sources/microsoft__skills/tests/README.md)<br>[tests/tsconfig.json](../../../../sources/microsoft__skills/tests/tsconfig.json)<br>[tests/vitest.config.ts](../../../../sources/microsoft__skills/tests/vitest.config.ts) |
| security | 56 | [SECURITY.md](../../../../sources/microsoft__skills/SECURITY.md)<br>[tests/scenarios/azure-security-keyvault-secrets-java/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/azure-security-keyvault-secrets-java/acceptance-criteria.md)<br>[tests/scenarios/azure-security-keyvault-secrets-java/scenarios.yaml](../../../../sources/microsoft__skills/tests/scenarios/azure-security-keyvault-secrets-java/scenarios.yaml)<br>[tests/scenarios/azure-security-keyvault-keys-java/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/azure-security-keyvault-keys-java/acceptance-criteria.md)<br>[tests/scenarios/azure-security-keyvault-keys-java/scenarios.yaml](../../../../sources/microsoft__skills/tests/scenarios/azure-security-keyvault-keys-java/scenarios.yaml)<br>[tests/scenarios/azure-security-keyvault-keys-dotnet/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/azure-security-keyvault-keys-dotnet/acceptance-criteria.md)<br>[tests/scenarios/azure-security-keyvault-keys-dotnet/scenarios.yaml](../../../../sources/microsoft__skills/tests/scenarios/azure-security-keyvault-keys-dotnet/scenarios.yaml)<br>[.github/plugins/azure-skills/skills/microsoft-foundry/references/auth-best-practices.md](../../../../sources/microsoft__skills/.github/plugins/azure-skills/skills/microsoft-foundry/references/auth-best-practices.md) |
| ci | 5 | [.github/workflows/deploy-pages.yml](../../../../sources/microsoft__skills/.github/workflows/deploy-pages.yml)<br>[.github/workflows/skill-evaluation.yml](../../../../sources/microsoft__skills/.github/workflows/skill-evaluation.yml)<br>[.github/workflows/test-harness.yml](../../../../sources/microsoft__skills/.github/workflows/test-harness.yml)<br>[.github/workflows/update-llms-txt.lock.yml](../../../../sources/microsoft__skills/.github/workflows/update-llms-txt.lock.yml)<br>[.github/workflows/update-llms-txt.md](../../../../sources/microsoft__skills/.github/workflows/update-llms-txt.md) |
| container | 1 | [.github/plugins/azure-skills/skills/microsoft-foundry/foundry-agent/deploy/deploy.md](../../../../sources/microsoft__skills/.github/plugins/azure-skills/skills/microsoft-foundry/foundry-agent/deploy/deploy.md) |
| instruction | 5 | [Agents.md](../../../../sources/microsoft__skills/Agents.md)<br>[tests/AGENTS.md](../../../../sources/microsoft__skills/tests/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/microsoft__skills/.github/copilot-instructions.md)<br>[.github/plugins/deep-wiki/commands/agents.md](../../../../sources/microsoft__skills/.github/plugins/deep-wiki/commands/agents.md)<br>[.github/plugins/azure-sdk-python/skills/azure-ai-projects-py/references/agents.md](../../../../sources/microsoft__skills/.github/plugins/azure-sdk-python/skills/azure-ai-projects-py/references/agents.md) |
| docs | 86 | [README.md](../../../../sources/microsoft__skills/README.md)<br>[tests/README.md](../../../../sources/microsoft__skills/tests/README.md)<br>[hooks/continual-learning/README.md](../../../../sources/microsoft__skills/hooks/continual-learning/README.md)<br>[docs-site/README.md](../../../../sources/microsoft__skills/docs-site/README.md)<br>[docs/.nojekyll](../../../../sources/microsoft__skills/docs/.nojekyll)<br>[docs/content-assets.mjs](../../../../sources/microsoft__skills/docs/content-assets.mjs)<br>[docs/content-modules.mjs](../../../../sources/microsoft__skills/docs/content-modules.mjs)<br>[docs/favicon.ico](../../../../sources/microsoft__skills/docs/favicon.ico) |
| config | 5 | [tests/package.json](../../../../sources/microsoft__skills/tests/package.json)<br>[tests/tsconfig.json](../../../../sources/microsoft__skills/tests/tsconfig.json)<br>[docs-site/package.json](../../../../sources/microsoft__skills/docs-site/package.json)<br>[docs-site/tsconfig.json](../../../../sources/microsoft__skills/docs-site/tsconfig.json)<br>[.github/skills/mcp-builder/scripts/requirements.txt](../../../../sources/microsoft__skills/.github/skills/mcp-builder/scripts/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 375 | [tests/.gitignore](../../../../sources/microsoft__skills/tests/.gitignore)<br>[tests/AGENTS.md](../../../../sources/microsoft__skills/tests/AGENTS.md)<br>[tests/package-lock.json](../../../../sources/microsoft__skills/tests/package-lock.json)<br>[tests/package.json](../../../../sources/microsoft__skills/tests/package.json)<br>[tests/pnpm-lock.yaml](../../../../sources/microsoft__skills/tests/pnpm-lock.yaml)<br>[tests/README.md](../../../../sources/microsoft__skills/tests/README.md) |
| CI workflows | 5 | [.github/workflows/deploy-pages.yml](../../../../sources/microsoft__skills/.github/workflows/deploy-pages.yml)<br>[.github/workflows/skill-evaluation.yml](../../../../sources/microsoft__skills/.github/workflows/skill-evaluation.yml)<br>[.github/workflows/test-harness.yml](../../../../sources/microsoft__skills/.github/workflows/test-harness.yml)<br>[.github/workflows/update-llms-txt.lock.yml](../../../../sources/microsoft__skills/.github/workflows/update-llms-txt.lock.yml)<br>[.github/workflows/update-llms-txt.md](../../../../sources/microsoft__skills/.github/workflows/update-llms-txt.md) |
| Containers / deploy | 1 | [.github/plugins/azure-skills/skills/microsoft-foundry/foundry-agent/deploy/deploy.md](../../../../sources/microsoft__skills/.github/plugins/azure-skills/skills/microsoft-foundry/foundry-agent/deploy/deploy.md) |
| Security / policy | 56 | [SECURITY.md](../../../../sources/microsoft__skills/SECURITY.md)<br>[tests/scenarios/azure-security-keyvault-secrets-java/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/azure-security-keyvault-secrets-java/acceptance-criteria.md)<br>[tests/scenarios/azure-security-keyvault-secrets-java/scenarios.yaml](../../../../sources/microsoft__skills/tests/scenarios/azure-security-keyvault-secrets-java/scenarios.yaml)<br>[tests/scenarios/azure-security-keyvault-keys-java/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/azure-security-keyvault-keys-java/acceptance-criteria.md)<br>[tests/scenarios/azure-security-keyvault-keys-java/scenarios.yaml](../../../../sources/microsoft__skills/tests/scenarios/azure-security-keyvault-keys-java/scenarios.yaml)<br>[tests/scenarios/azure-security-keyvault-keys-dotnet/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/azure-security-keyvault-keys-dotnet/acceptance-criteria.md) |
| Agent instructions | 5 | [Agents.md](../../../../sources/microsoft__skills/Agents.md)<br>[tests/AGENTS.md](../../../../sources/microsoft__skills/tests/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/microsoft__skills/.github/copilot-instructions.md)<br>[.github/plugins/deep-wiki/commands/agents.md](../../../../sources/microsoft__skills/.github/plugins/deep-wiki/commands/agents.md)<br>[.github/plugins/azure-sdk-python/skills/azure-ai-projects-py/references/agents.md](../../../../sources/microsoft__skills/.github/plugins/azure-sdk-python/skills/azure-ai-projects-py/references/agents.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `tests/scenarios/mcp-builder/acceptance-criteria.md`, `tests/scenarios/mcp-builder/scenarios.yaml`, `docs-site/src/data/mcp-servers.json`.
2. Map agent/tool runtime through: `Agents.md`, `tests/AGENTS.md`, `tests/schemas/skill-scenarios.schema.json`.
3. Inspect retrieval/memory/indexing through: `tests/scenarios/wiki-qa/acceptance-criteria.md`, `tests/scenarios/wiki-page-writer/acceptance-criteria.md`, `tests/scenarios/wiki-architect/acceptance-criteria.md`.
4. Verify behavior through test/eval files: `tests/.gitignore`, `tests/AGENTS.md`, `tests/package-lock.json`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Skills, MCP servers, Custom Agents, Agents.md for SDKs to ground Coding Agents. 핵심 구조 신호는 TypeScript, README.md, AGENTS.md, LICENSE, tests, ci이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
