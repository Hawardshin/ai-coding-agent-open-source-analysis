# agenta-ai/agenta Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 9270 files, 1925 directories.

## 요약

- 조사 단위: `sources/agenta-ai__agenta` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 9,263 files, 1,925 directories, depth score 138, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=docs/docs/misc/05-mcp-server.mdx, docs/blog/entries/mcp-server.mdx이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | agenta-ai/agenta |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/agenta-ai__agenta](../../../../sources/agenta-ai__agenta) |
| Existing report | [reports/clone-structures/agenta-ai__agenta.md](../../../clone-structures/agenta-ai__agenta.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 9263 / 1925 |
| Max observed depth | 13 |
| Top directories | .agents, .claude, .github, .husky, agents, api, clients, docs, ee, examples, hooks, hosting, sdks, services, web |
| Top extensions | .ts: 2776, .py: 2118, .json: 1179, .tsx: 1077, .mdx: 733, .md: 647, .png: 266, (none): 82, .http: 73, .sh: 39, .yaml: 38, .yml: 33 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| web | source boundary | 298 |
| api | source boundary | 3 |
| docs | documentation surface | 3 |
| examples/python | examples workspace | 2 |
| services/ee | services workspace | 2 |
| services/oss | services workspace | 2 |
| .github | ci surface | 1 |
| agents | top-level component | 1 |
| clients | source boundary | 1 |
| ee | top-level component | 1 |
| examples | top-level component | 1 |
| hooks | top-level component | 1 |
| hosting | top-level component | 1 |
| sdks | top-level component | 1 |
| services | top-level component | 1 |
| services/entrypoints | services workspace | 1 |
| services/pyproject.toml | services workspace | 1 |
| services/uv.lock | services workspace | 1 |


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
| mcp | [docs/docs/misc/05-mcp-server.mdx](../../../../sources/agenta-ai__agenta/docs/docs/misc/05-mcp-server.mdx) | mcp signal |
| mcp | [docs/blog/entries/mcp-server.mdx](../../../../sources/agenta-ai__agenta/docs/blog/entries/mcp-server.mdx) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/agenta-ai__agenta/AGENTS.md) | agentRuntime signal |
| agentRuntime | [web/AGENTS.md](../../../../sources/agenta-ai__agenta/web/AGENTS.md) | agentRuntime signal |
| agentRuntime | [web/packages/agenta-ui/src/InfiniteVirtualTable/hooks/useColumnDomRefs.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-ui/src/InfiniteVirtualTable/hooks/useColumnDomRefs.ts) | agentRuntime signal |
| agentRuntime | [web/packages/agenta-ui/src/InfiniteVirtualTable/hooks/useColumnVisibility.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-ui/src/InfiniteVirtualTable/hooks/useColumnVisibility.ts) | agentRuntime signal |
| entrypoints | [web/packages/agenta-ui/src/index.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-ui/src/index.ts) | entrypoints signal |
| entrypoints | [web/packages/agenta-shared/src/index.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-shared/src/index.ts) | entrypoints signal |
| entrypoints | [web/packages/agenta-sdk/src/index.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-sdk/src/index.ts) | entrypoints signal |
| entrypoints | [web/packages/agenta-playground-ui/src/index.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-playground-ui/src/index.ts) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/agenta-ai__agenta/CLAUDE.md) | instruction signal |
| instruction | [hosting/AGENTS.md](../../../../sources/agenta-ai__agenta/hosting/AGENTS.md) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 20 | [web/packages/agenta-ui/src/index.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-ui/src/index.ts)<br>[web/packages/agenta-shared/src/index.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-shared/src/index.ts)<br>[web/packages/agenta-sdk/src/index.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-sdk/src/index.ts)<br>[web/packages/agenta-playground-ui/src/index.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-playground-ui/src/index.ts)<br>[web/packages/agenta-playground/src/index.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-playground/src/index.ts)<br>[web/packages/agenta-entity-ui/src/index.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-entity-ui/src/index.ts)<br>[web/packages/agenta-entities/src/index.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-entities/src/index.ts)<br>[web/packages/agenta-api-client/src/index.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-api-client/src/index.ts) |
| agentRuntime | 542 | [AGENTS.md](../../../../sources/agenta-ai__agenta/AGENTS.md)<br>[web/AGENTS.md](../../../../sources/agenta-ai__agenta/web/AGENTS.md)<br>[web/packages/agenta-ui/src/InfiniteVirtualTable/hooks/useColumnDomRefs.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-ui/src/InfiniteVirtualTable/hooks/useColumnDomRefs.ts)<br>[web/packages/agenta-ui/src/InfiniteVirtualTable/hooks/useColumnVisibility.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-ui/src/InfiniteVirtualTable/hooks/useColumnVisibility.ts)<br>[web/packages/agenta-ui/src/InfiniteVirtualTable/hooks/useColumnVisibilityControls.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-ui/src/InfiniteVirtualTable/hooks/useColumnVisibilityControls.ts)<br>[web/packages/agenta-ui/src/InfiniteVirtualTable/hooks/useContainerResize.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-ui/src/InfiniteVirtualTable/hooks/useContainerResize.ts)<br>[web/packages/agenta-ui/src/InfiniteVirtualTable/hooks/useContainerSize.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-ui/src/InfiniteVirtualTable/hooks/useContainerSize.ts)<br>[web/packages/agenta-ui/src/InfiniteVirtualTable/hooks/useEditableTable.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-ui/src/InfiniteVirtualTable/hooks/useEditableTable.ts) |
| mcp | 2 | [docs/docs/misc/05-mcp-server.mdx](../../../../sources/agenta-ai__agenta/docs/docs/misc/05-mcp-server.mdx)<br>[docs/blog/entries/mcp-server.mdx](../../../../sources/agenta-ai__agenta/docs/blog/entries/mcp-server.mdx) |
| retrieval | 784 | [web/tests/utils/index.ts](../../../../sources/agenta-ai__agenta/web/tests/utils/index.ts)<br>[web/tests/utils/testmail/index.ts](../../../../sources/agenta-ai__agenta/web/tests/utils/testmail/index.ts)<br>[web/tests/tests/fixtures/user.fixture/authHelpers/index.ts](../../../../sources/agenta-ai__agenta/web/tests/tests/fixtures/user.fixture/authHelpers/index.ts)<br>[web/tests/tests/fixtures/session.fixture/index.ts](../../../../sources/agenta-ai__agenta/web/tests/tests/fixtures/session.fixture/index.ts)<br>[web/tests/tests/fixtures/base.fixture/index.ts](../../../../sources/agenta-ai__agenta/web/tests/tests/fixtures/base.fixture/index.ts)<br>[web/tests/tests/fixtures/base.fixture/uiHelpers/index.ts](../../../../sources/agenta-ai__agenta/web/tests/tests/fixtures/base.fixture/uiHelpers/index.ts)<br>[web/tests/tests/fixtures/base.fixture/providerHelpers/index.ts](../../../../sources/agenta-ai__agenta/web/tests/tests/fixtures/base.fixture/providerHelpers/index.ts)<br>[web/tests/tests/fixtures/base.fixture/llmKeysSettingsHelpers/index.ts](../../../../sources/agenta-ai__agenta/web/tests/tests/fixtures/base.fixture/llmKeysSettingsHelpers/index.ts) |
| spec | 506 | [web/oss/tests/playwright/acceptance/.gitkeep](../../../../sources/agenta-ai__agenta/web/oss/tests/playwright/acceptance/.gitkeep)<br>[web/oss/tests/playwright/acceptance/smoke.spec.ts](../../../../sources/agenta-ai__agenta/web/oss/tests/playwright/acceptance/smoke.spec.ts)<br>[web/oss/tests/playwright/acceptance/utils/auth.ts](../../../../sources/agenta-ai__agenta/web/oss/tests/playwright/acceptance/utils/auth.ts)<br>[web/oss/tests/playwright/acceptance/utils/scenarios.ts](../../../../sources/agenta-ai__agenta/web/oss/tests/playwright/acceptance/utils/scenarios.ts)<br>[web/oss/tests/playwright/acceptance/utils/tags.ts](../../../../sources/agenta-ai__agenta/web/oss/tests/playwright/acceptance/utils/tags.ts)<br>[web/oss/tests/playwright/acceptance/testsset/index.ts](../../../../sources/agenta-ai__agenta/web/oss/tests/playwright/acceptance/testsset/index.ts)<br>[web/oss/tests/playwright/acceptance/testsset/testset-management.spec.ts](../../../../sources/agenta-ai__agenta/web/oss/tests/playwright/acceptance/testsset/testset-management.spec.ts)<br>[web/oss/tests/playwright/acceptance/testsset/testset-management.ts](../../../../sources/agenta-ai__agenta/web/oss/tests/playwright/acceptance/testsset/testset-management.ts) |
| eval | 1607 | [web/tests/.gitignore](../../../../sources/agenta-ai__agenta/web/tests/.gitignore)<br>[web/tests/package.json](../../../../sources/agenta-ai__agenta/web/tests/package.json)<br>[web/tests/playwright.config.ts](../../../../sources/agenta-ai__agenta/web/tests/playwright.config.ts)<br>[web/tests/README.md](../../../../sources/agenta-ai__agenta/web/tests/README.md)<br>[web/tests/TEST-COVERAGE.md](../../../../sources/agenta-ai__agenta/web/tests/TEST-COVERAGE.md)<br>[web/tests/tsconfig.json](../../../../sources/agenta-ai__agenta/web/tests/tsconfig.json)<br>[web/tests/utils/evaluationKind.ts](../../../../sources/agenta-ai__agenta/web/tests/utils/evaluationKind.ts)<br>[web/tests/utils/index.ts](../../../../sources/agenta-ai__agenta/web/tests/utils/index.ts) |
| security | 161 | [SECURITY.md](../../../../sources/agenta-ai__agenta/SECURITY.md)<br>[web/tests/playwright/scripts/bootstrap-auth.ts](../../../../sources/agenta-ai__agenta/web/tests/playwright/scripts/bootstrap-auth.ts)<br>[web/packages/agenta-entities/src/secret/index.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-entities/src/secret/index.ts)<br>[web/packages/agenta-entities/src/secret/README.md](../../../../sources/agenta-ai__agenta/web/packages/agenta-entities/src/secret/README.md)<br>[web/packages/agenta-entities/src/secret/state/atoms.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-entities/src/secret/state/atoms.ts)<br>[web/packages/agenta-entities/src/secret/state/index.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-entities/src/secret/state/index.ts)<br>[web/packages/agenta-entities/src/secret/state/useVaultSecret.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-entities/src/secret/state/useVaultSecret.ts)<br>[web/packages/agenta-entities/src/secret/core/index.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-entities/src/secret/core/index.ts) |
| ci | 17 | [.github/workflows/00-releases.yml](../../../../sources/agenta-ai__agenta/.github/workflows/00-releases.yml)<br>[.github/workflows/01-create-release-branch.yml](../../../../sources/agenta-ai__agenta/.github/workflows/01-create-release-branch.yml)<br>[.github/workflows/10-checks.yml](../../../../sources/agenta-ai__agenta/.github/workflows/10-checks.yml)<br>[.github/workflows/11-check-code-styling.yml](../../../../sources/agenta-ai__agenta/.github/workflows/11-check-code-styling.yml)<br>[.github/workflows/12-check-unit-tests.yml](../../../../sources/agenta-ai__agenta/.github/workflows/12-check-unit-tests.yml)<br>[.github/workflows/13-check-pr-contribution.yml](../../../../sources/agenta-ai__agenta/.github/workflows/13-check-pr-contribution.yml)<br>[.github/workflows/14-check-pr-preview.yml](../../../../sources/agenta-ai__agenta/.github/workflows/14-check-pr-preview.yml)<br>[.github/workflows/30-crons.yml](../../../../sources/agenta-ai__agenta/.github/workflows/30-crons.yml) |
| container | 86 | [web/oss/tests/playwright/acceptance/deployment/deploy-variant.spec.ts](../../../../sources/agenta-ai__agenta/web/oss/tests/playwright/acceptance/deployment/deploy-variant.spec.ts)<br>[web/oss/tests/playwright/acceptance/deployment/index.ts](../../../../sources/agenta-ai__agenta/web/oss/tests/playwright/acceptance/deployment/index.ts)<br>[web/oss/docker/Dockerfile.dev](../../../../sources/agenta-ai__agenta/web/oss/docker/Dockerfile.dev)<br>[web/oss/docker/Dockerfile.gh](../../../../sources/agenta-ai__agenta/web/oss/docker/Dockerfile.gh)<br>[web/ee/tests/playwright/acceptance/deployment/deploy-variant.spec.ts](../../../../sources/agenta-ai__agenta/web/ee/tests/playwright/acceptance/deployment/deploy-variant.spec.ts)<br>[web/ee/docker/Dockerfile.dev](../../../../sources/agenta-ai__agenta/web/ee/docker/Dockerfile.dev)<br>[web/ee/docker/Dockerfile.gh](../../../../sources/agenta-ai__agenta/web/ee/docker/Dockerfile.gh)<br>[services/oss/docker/Dockerfile.dev](../../../../sources/agenta-ai__agenta/services/oss/docker/Dockerfile.dev) |
| instruction | 5 | [AGENTS.md](../../../../sources/agenta-ai__agenta/AGENTS.md)<br>[CLAUDE.md](../../../../sources/agenta-ai__agenta/CLAUDE.md)<br>[web/AGENTS.md](../../../../sources/agenta-ai__agenta/web/AGENTS.md)<br>[hosting/AGENTS.md](../../../../sources/agenta-ai__agenta/hosting/AGENTS.md)<br>[api/AGENTS.md](../../../../sources/agenta-ai__agenta/api/AGENTS.md) |
| docs | 2739 | [README.md](../../../../sources/agenta-ai__agenta/README.md)<br>[web/tests/README.md](../../../../sources/agenta-ai__agenta/web/tests/README.md)<br>[web/tests/tests/fixtures/README.md](../../../../sources/agenta-ai__agenta/web/tests/tests/fixtures/README.md)<br>[web/tests/tests/fixtures/user.fixture/README.md](../../../../sources/agenta-ai__agenta/web/tests/tests/fixtures/user.fixture/README.md)<br>[web/tests/tests/fixtures/user.fixture/authHelpers/README.md](../../../../sources/agenta-ai__agenta/web/tests/tests/fixtures/user.fixture/authHelpers/README.md)<br>[web/tests/tests/fixtures/base.fixture/README.md](../../../../sources/agenta-ai__agenta/web/tests/tests/fixtures/base.fixture/README.md)<br>[web/tests/tests/fixtures/base.fixture/uiHelpers/README.md](../../../../sources/agenta-ai__agenta/web/tests/tests/fixtures/base.fixture/uiHelpers/README.md)<br>[web/tests/tests/fixtures/base.fixture/apiHelpers/README.md](../../../../sources/agenta-ai__agenta/web/tests/tests/fixtures/base.fixture/apiHelpers/README.md) |
| config | 71 | [web/package.json](../../../../sources/agenta-ai__agenta/web/package.json)<br>[web/pnpm-workspace.yaml](../../../../sources/agenta-ai__agenta/web/pnpm-workspace.yaml)<br>[web/tsconfig.json](../../../../sources/agenta-ai__agenta/web/tsconfig.json)<br>[web/turbo.json](../../../../sources/agenta-ai__agenta/web/turbo.json)<br>[web/tests/package.json](../../../../sources/agenta-ai__agenta/web/tests/package.json)<br>[web/tests/tsconfig.json](../../../../sources/agenta-ai__agenta/web/tests/tsconfig.json)<br>[web/packages/agenta-ui/package.json](../../../../sources/agenta-ai__agenta/web/packages/agenta-ui/package.json)<br>[web/packages/agenta-ui/tsconfig.json](../../../../sources/agenta-ai__agenta/web/packages/agenta-ui/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1607 | [web/tests/.gitignore](../../../../sources/agenta-ai__agenta/web/tests/.gitignore)<br>[web/tests/package.json](../../../../sources/agenta-ai__agenta/web/tests/package.json)<br>[web/tests/playwright.config.ts](../../../../sources/agenta-ai__agenta/web/tests/playwright.config.ts)<br>[web/tests/README.md](../../../../sources/agenta-ai__agenta/web/tests/README.md)<br>[web/tests/TEST-COVERAGE.md](../../../../sources/agenta-ai__agenta/web/tests/TEST-COVERAGE.md)<br>[web/tests/tsconfig.json](../../../../sources/agenta-ai__agenta/web/tests/tsconfig.json) |
| CI workflows | 17 | [.github/workflows/00-releases.yml](../../../../sources/agenta-ai__agenta/.github/workflows/00-releases.yml)<br>[.github/workflows/01-create-release-branch.yml](../../../../sources/agenta-ai__agenta/.github/workflows/01-create-release-branch.yml)<br>[.github/workflows/10-checks.yml](../../../../sources/agenta-ai__agenta/.github/workflows/10-checks.yml)<br>[.github/workflows/11-check-code-styling.yml](../../../../sources/agenta-ai__agenta/.github/workflows/11-check-code-styling.yml)<br>[.github/workflows/12-check-unit-tests.yml](../../../../sources/agenta-ai__agenta/.github/workflows/12-check-unit-tests.yml)<br>[.github/workflows/13-check-pr-contribution.yml](../../../../sources/agenta-ai__agenta/.github/workflows/13-check-pr-contribution.yml) |
| Containers / deploy | 86 | [web/oss/tests/playwright/acceptance/deployment/deploy-variant.spec.ts](../../../../sources/agenta-ai__agenta/web/oss/tests/playwright/acceptance/deployment/deploy-variant.spec.ts)<br>[web/oss/tests/playwright/acceptance/deployment/index.ts](../../../../sources/agenta-ai__agenta/web/oss/tests/playwright/acceptance/deployment/index.ts)<br>[web/oss/docker/Dockerfile.dev](../../../../sources/agenta-ai__agenta/web/oss/docker/Dockerfile.dev)<br>[web/oss/docker/Dockerfile.gh](../../../../sources/agenta-ai__agenta/web/oss/docker/Dockerfile.gh)<br>[web/ee/tests/playwright/acceptance/deployment/deploy-variant.spec.ts](../../../../sources/agenta-ai__agenta/web/ee/tests/playwright/acceptance/deployment/deploy-variant.spec.ts)<br>[web/ee/docker/Dockerfile.dev](../../../../sources/agenta-ai__agenta/web/ee/docker/Dockerfile.dev) |
| Security / policy | 161 | [SECURITY.md](../../../../sources/agenta-ai__agenta/SECURITY.md)<br>[web/tests/playwright/scripts/bootstrap-auth.ts](../../../../sources/agenta-ai__agenta/web/tests/playwright/scripts/bootstrap-auth.ts)<br>[web/packages/agenta-entities/src/secret/index.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-entities/src/secret/index.ts)<br>[web/packages/agenta-entities/src/secret/README.md](../../../../sources/agenta-ai__agenta/web/packages/agenta-entities/src/secret/README.md)<br>[web/packages/agenta-entities/src/secret/state/atoms.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-entities/src/secret/state/atoms.ts)<br>[web/packages/agenta-entities/src/secret/state/index.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-entities/src/secret/state/index.ts) |
| Agent instructions | 5 | [AGENTS.md](../../../../sources/agenta-ai__agenta/AGENTS.md)<br>[CLAUDE.md](../../../../sources/agenta-ai__agenta/CLAUDE.md)<br>[web/AGENTS.md](../../../../sources/agenta-ai__agenta/web/AGENTS.md)<br>[hosting/AGENTS.md](../../../../sources/agenta-ai__agenta/hosting/AGENTS.md)<br>[api/AGENTS.md](../../../../sources/agenta-ai__agenta/api/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `docs/docs/misc/05-mcp-server.mdx`, `docs/blog/entries/mcp-server.mdx`, `AGENTS.md`.
2. Trace execution through entrypoints: `web/packages/agenta-ui/src/index.ts`, `web/packages/agenta-shared/src/index.ts`, `web/packages/agenta-sdk/src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `web/AGENTS.md`, `web/packages/agenta-ui/src/InfiniteVirtualTable/hooks/useColumnDomRefs.ts`.
4. Inspect retrieval/memory/indexing through: `web/tests/utils/index.ts`, `web/tests/utils/testmail/index.ts`, `web/tests/tests/fixtures/user.fixture/authHelpers/index.ts`.
5. Verify behavior through test/eval files: `web/tests/.gitignore`, `web/tests/package.json`, `web/tests/playwright.config.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 9270 files, 1925 directories.. 핵심 구조 신호는 README.md, AGENTS.md, CLAUDE.md, LICENSE, tests, ci이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
