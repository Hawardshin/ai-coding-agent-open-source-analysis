# aaif-goose/goose Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 2325 files, 492 directories.

## 요약

- 조사 단위: `sources/aaif-goose__goose` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,323 files, 489 directories, depth score 138, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=ui/sdk/src/mcp-apps.ts, ui/desktop/tests/e2e/basic-mcp.ts, scripts/test_mcp.sh이고, 의존성 단서는 mcp, llama, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | aaif-goose/goose |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 49691 |
| Forks | 5261 |
| License | none |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/aaif-goose__goose](../../../../sources/aaif-goose__goose) |
| Existing report | [reports/global-trending/repositories/aaif-goose__goose.md](../../../global-trending/repositories/aaif-goose__goose.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2323 / 489 |
| Max observed depth | 10 |
| Top directories | .cargo, .claude, .codex, .cursor, .devcontainer, .github, .intersect, bin, crates, documentation, evals, examples, oidc-proxy, recipe-scanner, scripts, services, ui, workflow_recipes |
| Top extensions | .rs: 441, .tsx: 362, .md: 333, .png: 305, .ts: 186, .json: 176, .yaml: 99, (none): 51, .yml: 47, .js: 41, .jpg: 29, .sh: 28 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| examples/mcp-wiki | examples workspace | 18 |
| crates/goose | crates workspace | 16 |
| services/ask-ai-bot | services workspace | 13 |
| crates/goose-cli | crates workspace | 6 |
| crates/goose-server | crates workspace | 5 |
| crates/goose-sdk | crates workspace | 3 |
| crates/goose-test | crates workspace | 3 |
| crates/goose-acp-macros | crates workspace | 2 |
| crates/goose-mcp | crates workspace | 2 |
| crates/goose-providers | crates workspace | 2 |
| crates/goose-sdk-types | crates workspace | 2 |
| crates/goose-test-support | crates workspace | 2 |
| examples/plugins | examples workspace | 2 |
| .codex | top-level component | 1 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| crates | source boundary | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | llama |
| webRuntime | none |
| developerSurface | none |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [ui/sdk/src/mcp-apps.ts](../../../../sources/aaif-goose__goose/ui/sdk/src/mcp-apps.ts) | mcp signal |
| mcp | [ui/desktop/tests/e2e/basic-mcp.ts](../../../../sources/aaif-goose__goose/ui/desktop/tests/e2e/basic-mcp.ts) | mcp signal |
| mcp | [scripts/test_mcp.sh](../../../../sources/aaif-goose__goose/scripts/test_mcp.sh) | mcp signal |
| mcp | [examples/mcp-wiki/.gitignore](../../../../sources/aaif-goose__goose/examples/mcp-wiki/.gitignore) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/aaif-goose__goose/AGENTS.md) | agentRuntime signal |
| agentRuntime | [workflow_recipes/release_risk_check/recipe.yaml](../../../../sources/aaif-goose__goose/workflow_recipes/release_risk_check/recipe.yaml) | agentRuntime signal |
| agentRuntime | [workflow_recipes/release_risk_check/release_risk_report.py](../../../../sources/aaif-goose__goose/workflow_recipes/release_risk_check/release_risk_report.py) | agentRuntime signal |
| agentRuntime | [workflow_recipes/release_risk_check/run.sh](../../../../sources/aaif-goose__goose/workflow_recipes/release_risk_check/run.sh) | agentRuntime signal |
| entrypoints | [ui/sdk/src/index.ts](../../../../sources/aaif-goose__goose/ui/sdk/src/index.ts) | entrypoints signal |
| entrypoints | [ui/desktop/src/App.test.tsx](../../../../sources/aaif-goose__goose/ui/desktop/src/App.test.tsx) | entrypoints signal |
| entrypoints | [ui/desktop/src/App.tsx](../../../../sources/aaif-goose__goose/ui/desktop/src/App.tsx) | entrypoints signal |
| entrypoints | [ui/desktop/src/main.ts](../../../../sources/aaif-goose__goose/ui/desktop/src/main.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 47 | [ui/sdk/src/index.ts](../../../../sources/aaif-goose__goose/ui/sdk/src/index.ts)<br>[ui/desktop/src/App.test.tsx](../../../../sources/aaif-goose__goose/ui/desktop/src/App.test.tsx)<br>[ui/desktop/src/App.tsx](../../../../sources/aaif-goose__goose/ui/desktop/src/App.tsx)<br>[ui/desktop/src/main.ts](../../../../sources/aaif-goose__goose/ui/desktop/src/main.ts)<br>[ui/desktop/src/platform/windows/bin/jbang.cmd](../../../../sources/aaif-goose__goose/ui/desktop/src/platform/windows/bin/jbang.cmd)<br>[ui/desktop/src/platform/windows/bin/npx.cmd](../../../../sources/aaif-goose__goose/ui/desktop/src/platform/windows/bin/npx.cmd)<br>[ui/desktop/src/platform/windows/bin/README.md](../../../../sources/aaif-goose__goose/ui/desktop/src/platform/windows/bin/README.md)<br>[ui/desktop/src/bin/.gitkeep](../../../../sources/aaif-goose__goose/ui/desktop/src/bin/.gitkeep) |
| agentRuntime | 138 | [AGENTS.md](../../../../sources/aaif-goose__goose/AGENTS.md)<br>[workflow_recipes/release_risk_check/recipe.yaml](../../../../sources/aaif-goose__goose/workflow_recipes/release_risk_check/recipe.yaml)<br>[workflow_recipes/release_risk_check/release_risk_report.py](../../../../sources/aaif-goose__goose/workflow_recipes/release_risk_check/release_risk_report.py)<br>[workflow_recipes/release_risk_check/run.sh](../../../../sources/aaif-goose__goose/workflow_recipes/release_risk_check/run.sh)<br>[ui/text/AGENTS.md](../../../../sources/aaif-goose__goose/ui/text/AGENTS.md)<br>[ui/desktop/tests/e2e/context-management.spec.ts](../../../../sources/aaif-goose__goose/ui/desktop/tests/e2e/context-management.spec.ts)<br>[ui/desktop/src/hooks/use-mobile.ts](../../../../sources/aaif-goose__goose/ui/desktop/src/hooks/use-mobile.ts)<br>[ui/desktop/src/hooks/useAnalytics.ts](../../../../sources/aaif-goose__goose/ui/desktop/src/hooks/useAnalytics.ts) |
| mcp | 270 | [ui/sdk/src/mcp-apps.ts](../../../../sources/aaif-goose__goose/ui/sdk/src/mcp-apps.ts)<br>[ui/desktop/tests/e2e/basic-mcp.ts](../../../../sources/aaif-goose__goose/ui/desktop/tests/e2e/basic-mcp.ts)<br>[scripts/test_mcp.sh](../../../../sources/aaif-goose__goose/scripts/test_mcp.sh)<br>[examples/mcp-wiki/.gitignore](../../../../sources/aaif-goose__goose/examples/mcp-wiki/.gitignore)<br>[examples/mcp-wiki/.python-version](../../../../sources/aaif-goose__goose/examples/mcp-wiki/.python-version)<br>[examples/mcp-wiki/pyproject.toml](../../../../sources/aaif-goose__goose/examples/mcp-wiki/pyproject.toml)<br>[examples/mcp-wiki/README.md](../../../../sources/aaif-goose__goose/examples/mcp-wiki/README.md)<br>[examples/mcp-wiki/src/mcp_wiki/__init__.py](../../../../sources/aaif-goose__goose/examples/mcp-wiki/src/mcp_wiki/__init__.py) |
| retrieval | 191 | [ui/sdk/src/index.ts](../../../../sources/aaif-goose__goose/ui/sdk/src/index.ts)<br>[ui/sdk/src/generated/index.ts](../../../../sources/aaif-goose__goose/ui/sdk/src/generated/index.ts)<br>[ui/install-link-generator/index.html](../../../../sources/aaif-goose__goose/ui/install-link-generator/index.html)<br>[ui/desktop/index.html](../../../../sources/aaif-goose__goose/ui/desktop/index.html)<br>[ui/desktop/src/recipe/index.ts](../../../../sources/aaif-goose__goose/ui/desktop/src/recipe/index.ts)<br>[ui/desktop/src/i18n/index.ts](../../../../sources/aaif-goose__goose/ui/desktop/src/i18n/index.ts)<br>[ui/desktop/src/components/settings/extensions/index.ts](../../../../sources/aaif-goose__goose/ui/desktop/src/components/settings/extensions/index.ts)<br>[ui/desktop/src/components/icons/index.tsx](../../../../sources/aaif-goose__goose/ui/desktop/src/components/icons/index.tsx) |
| spec | 17 | [ui/desktop/tests/e2e/app.spec.ts](../../../../sources/aaif-goose__goose/ui/desktop/tests/e2e/app.spec.ts)<br>[ui/desktop/tests/e2e/context-management.spec.ts](../../../../sources/aaif-goose__goose/ui/desktop/tests/e2e/context-management.spec.ts)<br>[ui/desktop/tests/e2e/enhanced-context-management.spec.ts](../../../../sources/aaif-goose__goose/ui/desktop/tests/e2e/enhanced-context-management.spec.ts)<br>[ui/desktop/tests/e2e/loading-state.spec.ts](../../../../sources/aaif-goose__goose/ui/desktop/tests/e2e/loading-state.spec.ts)<br>[ui/desktop/tests/e2e/performance.spec.ts](../../../../sources/aaif-goose__goose/ui/desktop/tests/e2e/performance.spec.ts)<br>[documentation/src/pages/prompt-library/data/prompts/data-model-design.json](../../../../sources/aaif-goose__goose/documentation/src/pages/prompt-library/data/prompts/data-model-design.json)<br>[documentation/docs/guides/security/classification-api-spec.md](../../../../sources/aaif-goose__goose/documentation/docs/guides/security/classification-api-spec.md)<br>[documentation/docs/goose-architecture/_category_.json](../../../../sources/aaif-goose__goose/documentation/docs/goose-architecture/_category_.json) |
| eval | 219 | [goose-self-test.yaml](../../../../sources/aaif-goose__goose/goose-self-test.yaml)<br>[test_acp_client.py](../../../../sources/aaif-goose__goose/test_acp_client.py)<br>[ui/sdk/tsconfig.test.json](../../../../sources/aaif-goose__goose/ui/sdk/tsconfig.test.json)<br>[ui/sdk/tests/client-callbacks.test.ts](../../../../sources/aaif-goose__goose/ui/sdk/tests/client-callbacks.test.ts)<br>[ui/desktop/tests/integration/goosed.test.ts](../../../../sources/aaif-goose__goose/ui/desktop/tests/integration/goosed.test.ts)<br>[ui/desktop/tests/integration/setup.ts](../../../../sources/aaif-goose__goose/ui/desktop/tests/integration/setup.ts)<br>[ui/desktop/tests/integration/test_providers_code_exec.test.ts](../../../../sources/aaif-goose__goose/ui/desktop/tests/integration/test_providers_code_exec.test.ts)<br>[ui/desktop/tests/integration/test_providers_lib.ts](../../../../sources/aaif-goose__goose/ui/desktop/tests/integration/test_providers_lib.ts) |
| security | 58 | [SECURITY.md](../../../../sources/aaif-goose__goose/SECURITY.md)<br>[ui/desktop/src/components/settings/security/SecurityToggle.tsx](../../../../sources/aaif-goose__goose/ui/desktop/src/components/settings/security/SecurityToggle.tsx)<br>[ui/desktop/src/components/settings/permission/PermissionModal.tsx](../../../../sources/aaif-goose__goose/ui/desktop/src/components/settings/permission/PermissionModal.tsx)<br>[ui/desktop/src/components/settings/permission/PermissionRulesModal.tsx](../../../../sources/aaif-goose__goose/ui/desktop/src/components/settings/permission/PermissionRulesModal.tsx)<br>[ui/desktop/src/components/settings/permission/PermissionSetting.tsx](../../../../sources/aaif-goose__goose/ui/desktop/src/components/settings/permission/PermissionSetting.tsx)<br>[ui/desktop/src/components/settings/auth/AuthSettingsSection.test.tsx](../../../../sources/aaif-goose__goose/ui/desktop/src/components/settings/auth/AuthSettingsSection.test.tsx)<br>[ui/desktop/src/components/settings/auth/AuthSettingsSection.tsx](../../../../sources/aaif-goose__goose/ui/desktop/src/components/settings/auth/AuthSettingsSection.tsx)<br>[ui/desktop/src/components/settings/auth/HuggingFaceSignInPrompt.tsx](../../../../sources/aaif-goose__goose/ui/desktop/src/components/settings/auth/HuggingFaceSignInPrompt.tsx) |
| ci | 47 | [.github/workflows/autoclose](../../../../sources/aaif-goose__goose/.github/workflows/autoclose)<br>[.github/workflows/build-cli.yml](../../../../sources/aaif-goose__goose/.github/workflows/build-cli.yml)<br>[.github/workflows/build-notify.yml](../../../../sources/aaif-goose__goose/.github/workflows/build-notify.yml)<br>[.github/workflows/bundle-desktop-intel.yml](../../../../sources/aaif-goose__goose/.github/workflows/bundle-desktop-intel.yml)<br>[.github/workflows/bundle-desktop-linux.yml](../../../../sources/aaif-goose__goose/.github/workflows/bundle-desktop-linux.yml)<br>[.github/workflows/bundle-desktop-manual.yml](../../../../sources/aaif-goose__goose/.github/workflows/bundle-desktop-manual.yml)<br>[.github/workflows/bundle-desktop-windows.yml](../../../../sources/aaif-goose__goose/.github/workflows/bundle-desktop-windows.yml)<br>[.github/workflows/bundle-desktop.yml](../../../../sources/aaif-goose__goose/.github/workflows/bundle-desktop.yml) |
| container | 6 | [Dockerfile](../../../../sources/aaif-goose__goose/Dockerfile)<br>[services/ask-ai-bot/Dockerfile](../../../../sources/aaif-goose__goose/services/ask-ai-bot/Dockerfile)<br>[recipe-scanner/Dockerfile](../../../../sources/aaif-goose__goose/recipe-scanner/Dockerfile)<br>[documentation/docs/docker/docker-compose.yml](../../../../sources/aaif-goose__goose/documentation/docs/docker/docker-compose.yml)<br>[documentation/docs/docker/Dockerfile](../../../../sources/aaif-goose__goose/documentation/docs/docker/Dockerfile)<br>[.devcontainer/Dockerfile](../../../../sources/aaif-goose__goose/.devcontainer/Dockerfile) |
| instruction | 7 | [AGENTS.md](../../../../sources/aaif-goose__goose/AGENTS.md)<br>[CLAUDE.md](../../../../sources/aaif-goose__goose/CLAUDE.md)<br>[ui/text/AGENTS.md](../../../../sources/aaif-goose__goose/ui/text/AGENTS.md)<br>[ui/text/CLAUDE.md](../../../../sources/aaif-goose__goose/ui/text/CLAUDE.md)<br>[documentation/AGENTS.md](../../../../sources/aaif-goose__goose/documentation/AGENTS.md)<br>[documentation/CLAUDE.md](../../../../sources/aaif-goose__goose/documentation/CLAUDE.md)<br>[.github/copilot-instructions.md](../../../../sources/aaif-goose__goose/.github/copilot-instructions.md) |
| docs | 252 | [README.md](../../../../sources/aaif-goose__goose/README.md)<br>[ui/text/README.md](../../../../sources/aaif-goose__goose/ui/text/README.md)<br>[ui/sdk/README.md](../../../../sources/aaif-goose__goose/ui/sdk/README.md)<br>[ui/goose-binary/README.md](../../../../sources/aaif-goose__goose/ui/goose-binary/README.md)<br>[ui/desktop/README.md](../../../../sources/aaif-goose__goose/ui/desktop/README.md)<br>[ui/desktop/src/platform/windows/bin/README.md](../../../../sources/aaif-goose__goose/ui/desktop/src/platform/windows/bin/README.md)<br>[ui/desktop/scripts/README.md](../../../../sources/aaif-goose__goose/ui/desktop/scripts/README.md)<br>[ui/.changeset/README.md](../../../../sources/aaif-goose__goose/ui/.changeset/README.md) |
| config | 37 | [Cargo.lock](../../../../sources/aaif-goose__goose/Cargo.lock)<br>[Cargo.toml](../../../../sources/aaif-goose__goose/Cargo.toml)<br>[ui/package.json](../../../../sources/aaif-goose__goose/ui/package.json)<br>[ui/pnpm-workspace.yaml](../../../../sources/aaif-goose__goose/ui/pnpm-workspace.yaml)<br>[ui/text/package.json](../../../../sources/aaif-goose__goose/ui/text/package.json)<br>[ui/text/tsconfig.json](../../../../sources/aaif-goose__goose/ui/text/tsconfig.json)<br>[ui/sdk/package.json](../../../../sources/aaif-goose__goose/ui/sdk/package.json)<br>[ui/sdk/tsconfig.json](../../../../sources/aaif-goose__goose/ui/sdk/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 219 | [goose-self-test.yaml](../../../../sources/aaif-goose__goose/goose-self-test.yaml)<br>[test_acp_client.py](../../../../sources/aaif-goose__goose/test_acp_client.py)<br>[ui/sdk/tsconfig.test.json](../../../../sources/aaif-goose__goose/ui/sdk/tsconfig.test.json)<br>[ui/sdk/tests/client-callbacks.test.ts](../../../../sources/aaif-goose__goose/ui/sdk/tests/client-callbacks.test.ts)<br>[ui/desktop/tests/integration/goosed.test.ts](../../../../sources/aaif-goose__goose/ui/desktop/tests/integration/goosed.test.ts)<br>[ui/desktop/tests/integration/setup.ts](../../../../sources/aaif-goose__goose/ui/desktop/tests/integration/setup.ts) |
| CI workflows | 47 | [.github/workflows/autoclose](../../../../sources/aaif-goose__goose/.github/workflows/autoclose)<br>[.github/workflows/build-cli.yml](../../../../sources/aaif-goose__goose/.github/workflows/build-cli.yml)<br>[.github/workflows/build-notify.yml](../../../../sources/aaif-goose__goose/.github/workflows/build-notify.yml)<br>[.github/workflows/bundle-desktop-intel.yml](../../../../sources/aaif-goose__goose/.github/workflows/bundle-desktop-intel.yml)<br>[.github/workflows/bundle-desktop-linux.yml](../../../../sources/aaif-goose__goose/.github/workflows/bundle-desktop-linux.yml)<br>[.github/workflows/bundle-desktop-manual.yml](../../../../sources/aaif-goose__goose/.github/workflows/bundle-desktop-manual.yml) |
| Containers / deploy | 6 | [Dockerfile](../../../../sources/aaif-goose__goose/Dockerfile)<br>[services/ask-ai-bot/Dockerfile](../../../../sources/aaif-goose__goose/services/ask-ai-bot/Dockerfile)<br>[recipe-scanner/Dockerfile](../../../../sources/aaif-goose__goose/recipe-scanner/Dockerfile)<br>[documentation/docs/docker/docker-compose.yml](../../../../sources/aaif-goose__goose/documentation/docs/docker/docker-compose.yml)<br>[documentation/docs/docker/Dockerfile](../../../../sources/aaif-goose__goose/documentation/docs/docker/Dockerfile)<br>[.devcontainer/Dockerfile](../../../../sources/aaif-goose__goose/.devcontainer/Dockerfile) |
| Security / policy | 58 | [SECURITY.md](../../../../sources/aaif-goose__goose/SECURITY.md)<br>[ui/desktop/src/components/settings/security/SecurityToggle.tsx](../../../../sources/aaif-goose__goose/ui/desktop/src/components/settings/security/SecurityToggle.tsx)<br>[ui/desktop/src/components/settings/permission/PermissionModal.tsx](../../../../sources/aaif-goose__goose/ui/desktop/src/components/settings/permission/PermissionModal.tsx)<br>[ui/desktop/src/components/settings/permission/PermissionRulesModal.tsx](../../../../sources/aaif-goose__goose/ui/desktop/src/components/settings/permission/PermissionRulesModal.tsx)<br>[ui/desktop/src/components/settings/permission/PermissionSetting.tsx](../../../../sources/aaif-goose__goose/ui/desktop/src/components/settings/permission/PermissionSetting.tsx)<br>[ui/desktop/src/components/settings/auth/AuthSettingsSection.test.tsx](../../../../sources/aaif-goose__goose/ui/desktop/src/components/settings/auth/AuthSettingsSection.test.tsx) |
| Agent instructions | 7 | [AGENTS.md](../../../../sources/aaif-goose__goose/AGENTS.md)<br>[CLAUDE.md](../../../../sources/aaif-goose__goose/CLAUDE.md)<br>[ui/text/AGENTS.md](../../../../sources/aaif-goose__goose/ui/text/AGENTS.md)<br>[ui/text/CLAUDE.md](../../../../sources/aaif-goose__goose/ui/text/CLAUDE.md)<br>[documentation/AGENTS.md](../../../../sources/aaif-goose__goose/documentation/AGENTS.md)<br>[documentation/CLAUDE.md](../../../../sources/aaif-goose__goose/documentation/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `ui/sdk/src/mcp-apps.ts`, `ui/desktop/tests/e2e/basic-mcp.ts`, `scripts/test_mcp.sh`.
2. Trace execution through entrypoints: `ui/sdk/src/index.ts`, `ui/desktop/src/App.test.tsx`, `ui/desktop/src/App.tsx`.
3. Map agent/tool runtime through: `AGENTS.md`, `workflow_recipes/release_risk_check/recipe.yaml`, `workflow_recipes/release_risk_check/release_risk_report.py`.
4. Inspect retrieval/memory/indexing through: `ui/sdk/src/index.ts`, `ui/sdk/src/generated/index.ts`, `ui/install-link-generator/index.html`.
5. Verify behavior through test/eval files: `goose-self-test.yaml`, `test_acp_client.py`, `ui/sdk/tsconfig.test.json`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 2325 files, 492 directories.. 핵심 구조 신호는 Rust, Cargo.toml, Dockerfile, README.md, AGENTS.md, CLAUDE.md이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
