# labring/FastGPT Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

FastGPT is a knowledge-based platform built on the LLMs, offers a comprehensive suite of out-of-the-box capabilities such as data processing, RAG retrieval, and visual AI workflow orchestration, letting you easily develop and deploy complex question-answering systems without the need for extensive setup or configuration.

## 요약

- 조사 단위: `sources/labring__FastGPT` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 5,024 files, 1,622 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=projects/mcp_server/.env.template, projects/mcp_server/Dockerfile, projects/mcp_server/package.json이고, 의존성 단서는 next, react, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | labring/FastGPT |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 28496 |
| Forks | 7156 |
| License | NOASSERTION |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/labring__FastGPT](../../../../sources/labring__FastGPT) |
| Existing report | [reports/korea-trending/repositories/labring__FastGPT.md](../../../korea-trending/repositories/labring__FastGPT.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 5024 / 1622 |
| Max observed depth | 13 |
| Top directories | .agents, .github, .husky, bin, deploy, document, packages, pro, projects, scripts, sdk, test |
| Top extensions | .ts: 2204, .tsx: 821, .svg: 547, .png: 414, .mdx: 349, .json: 177, .js: 129, .md: 116, .yml: 48, .yaml: 46, .jpg: 37, (none): 34 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/service | packages workspace | 13 |
| packages/web | packages workspace | 10 |
| packages/global | packages workspace | 4 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| deploy | deployment surface | 1 |
| document | documentation surface | 1 |
| packages | source boundary | 1 |
| packages/README.md | packages workspace | 1 |
| pro | top-level component | 1 |
| projects | top-level component | 1 |
| scripts | top-level component | 1 |
| sdk | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | dev:pro | turbo run dev:pro --filter=@fastgpt/app |
| utility | package.json | prepare | husky install |
| build | package.json | gen:theme-typings | chakra-cli tokens packages/web/styles/theme.ts --out node_modules/.pnpm/node_modules/@chakra-ui/styled-system/dist/theming.types.d.ts |
| utility | package.json | gen:deploy | node ./deploy/init.mjs |
| build | package.json | postinstall | pnpm gen:theme-typings && pnpm run build:sdks |
| quality | package.json | initIcon | node ./scripts/icon/init.js && prettier --config "./.prettierrc.js" --write "packages/web/components/common/Icon/constants.ts" |
| utility | package.json | previewIcon | node ./scripts/icon/index.js |
| quality | package.json | lint | turbo run lint |
| utility | package.json | create:i18n | node ./scripts/i18n/index.js |
| quality | package.json | clean:unused:pro | node --experimental-strip-types ./pro/scripts/cleanup-unused.ts |
| quality | package.json | clean:unused:pro:write | node --experimental-strip-types ./pro/scripts/cleanup-unused.ts --write |
| test | package.json | test | pnpm test:workspace |
| test | package.json | test:all | pnpm test:workspace && pnpm test:vector |
| test | package.json | test:repo | vitest run --config vitest.config.mts --coverage --passWithNoTests |
| test | package.json | test:workspace | turbo run test --filter=@fastgpt/app --filter=@fastgpt/admin --filter=@fastgpt/global --filter=@fastgpt/service |
| test | package.json | test:app | turbo run test --filter=@fastgpt/app |
| test | package.json | test:admin | turbo run test --filter=@fastgpt/admin |
| test | package.json | test:global | turbo run test --filter=@fastgpt/global |
| test | package.json | test:service | turbo run test --filter=@fastgpt/service |
| test | package.json | test:service:integration | turbo run test:integration --filter=@fastgpt/service |
| test | package.json | test:vector | turbo run test:integration --filter=@fastgpt/service |
| build | package.json | build:sdks | pnpm -r --filter @fastgpt-sdk/storage --filter @fastgpt-sdk/otel --filter @fastgpt-sdk/sandbox-adapter build |
| utility | Makefile | .PHONY | make .PHONY |
| serve-dev | Makefile | dev | make dev |
| build | Makefile | build | make build |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | next, react |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [projects/mcp_server/.env.template](../../../../sources/labring__FastGPT/projects/mcp_server/.env.template) | mcp signal |
| mcp | [projects/mcp_server/Dockerfile](../../../../sources/labring__FastGPT/projects/mcp_server/Dockerfile) | mcp signal |
| mcp | [projects/mcp_server/package.json](../../../../sources/labring__FastGPT/projects/mcp_server/package.json) | mcp signal |
| mcp | [projects/mcp_server/tsconfig.json](../../../../sources/labring__FastGPT/projects/mcp_server/tsconfig.json) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/labring__FastGPT/AGENTS.md) | agentRuntime signal |
| agentRuntime | [sdk/sandbox-adapter/package.json](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/package.json) | agentRuntime signal |
| agentRuntime | [sdk/sandbox-adapter/README.md](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/README.md) | agentRuntime signal |
| agentRuntime | [sdk/sandbox-adapter/tsconfig.json](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/tsconfig.json) | agentRuntime signal |
| entrypoints | [sdk/storage/src/index.ts](../../../../sources/labring__FastGPT/sdk/storage/src/index.ts) | entrypoints signal |
| entrypoints | [sdk/sandbox-adapter/src/index.ts](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/src/index.ts) | entrypoints signal |
| entrypoints | [sdk/otel/src/index.ts](../../../../sources/labring__FastGPT/sdk/otel/src/index.ts) | entrypoints signal |
| entrypoints | [projects/volume-manager/src/index.ts](../../../../sources/labring__FastGPT/projects/volume-manager/src/index.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 9 | [sdk/storage/src/index.ts](../../../../sources/labring__FastGPT/sdk/storage/src/index.ts)<br>[sdk/sandbox-adapter/src/index.ts](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/src/index.ts)<br>[sdk/otel/src/index.ts](../../../../sources/labring__FastGPT/sdk/otel/src/index.ts)<br>[projects/volume-manager/src/index.ts](../../../../sources/labring__FastGPT/projects/volume-manager/src/index.ts)<br>[projects/mcp_server/src/index.ts](../../../../sources/labring__FastGPT/projects/mcp_server/src/index.ts)<br>[projects/fastgpt-ide-agent/src/main.rs](../../../../sources/labring__FastGPT/projects/fastgpt-ide-agent/src/main.rs)<br>[projects/code-sandbox/src/index.ts](../../../../sources/labring__FastGPT/projects/code-sandbox/src/index.ts)<br>[projects/agent-sandbox-proxy/src/main.rs](../../../../sources/labring__FastGPT/projects/agent-sandbox-proxy/src/main.rs) |
| agentRuntime | 987 | [AGENTS.md](../../../../sources/labring__FastGPT/AGENTS.md)<br>[sdk/sandbox-adapter/package.json](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/package.json)<br>[sdk/sandbox-adapter/README.md](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/README.md)<br>[sdk/sandbox-adapter/tsconfig.json](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/tsconfig.json)<br>[sdk/sandbox-adapter/tsdown.config.ts](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/tsdown.config.ts)<br>[sdk/sandbox-adapter/vitest.config.ts](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/vitest.config.ts)<br>[sdk/sandbox-adapter/tests/unit/utils/base64.test.ts](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/tests/unit/utils/base64.test.ts)<br>[sdk/sandbox-adapter/tests/unit/utils/image.test.ts](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/tests/unit/utils/image.test.ts) |
| mcp | 51 | [projects/mcp_server/.env.template](../../../../sources/labring__FastGPT/projects/mcp_server/.env.template)<br>[projects/mcp_server/Dockerfile](../../../../sources/labring__FastGPT/projects/mcp_server/Dockerfile)<br>[projects/mcp_server/package.json](../../../../sources/labring__FastGPT/projects/mcp_server/package.json)<br>[projects/mcp_server/tsconfig.json](../../../../sources/labring__FastGPT/projects/mcp_server/tsconfig.json)<br>[projects/mcp_server/src/env.ts](../../../../sources/labring__FastGPT/projects/mcp_server/src/env.ts)<br>[projects/mcp_server/src/index.ts](../../../../sources/labring__FastGPT/projects/mcp_server/src/index.ts)<br>[projects/mcp_server/src/init.ts](../../../../sources/labring__FastGPT/projects/mcp_server/src/init.ts)<br>[projects/mcp_server/src/logger.ts](../../../../sources/labring__FastGPT/projects/mcp_server/src/logger.ts) |
| retrieval | 426 | [test/mocks/index.ts](../../../../sources/labring__FastGPT/test/mocks/index.ts)<br>[test/mocks/core/ai/embedding.ts](../../../../sources/labring__FastGPT/test/mocks/core/ai/embedding.ts)<br>[test/mocks/common/vector.ts](../../../../sources/labring__FastGPT/test/mocks/common/vector.ts)<br>[sdk/storage/src/index.ts](../../../../sources/labring__FastGPT/sdk/storage/src/index.ts)<br>[sdk/sandbox-adapter/tests/mocks/index.ts](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/tests/mocks/index.ts)<br>[sdk/sandbox-adapter/src/index.ts](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/src/index.ts)<br>[sdk/sandbox-adapter/src/types/index.ts](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/src/types/index.ts)<br>[sdk/sandbox-adapter/src/interfaces/index.ts](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/src/interfaces/index.ts) |
| spec | 47 | [projects/code-sandbox/requirements.txt](../../../../sources/labring__FastGPT/projects/code-sandbox/requirements.txt)<br>[packages/service/support/invoke/DESIGN.md](../../../../sources/labring__FastGPT/packages/service/support/invoke/DESIGN.md)<br>[packages/service/core/app/tool/DESIGN.md](../../../../sources/labring__FastGPT/packages/service/core/app/tool/DESIGN.md)<br>[document/content/self-host/design/dataset.en.mdx](../../../../sources/labring__FastGPT/document/content/self-host/design/dataset.en.mdx)<br>[document/content/self-host/design/dataset.mdx](../../../../sources/labring__FastGPT/document/content/self-host/design/dataset.mdx)<br>[document/content/self-host/design/meta.en.json](../../../../sources/labring__FastGPT/document/content/self-host/design/meta.en.json)<br>[document/content/self-host/design/meta.json](../../../../sources/labring__FastGPT/document/content/self-host/design/meta.json)<br>[.agents/design/图搜图-当前需求-功能开发文档.md](../../../../sources/labring__FastGPT/.agents/design/图搜图-当前需求-功能开发文档.md) |
| eval | 561 | [test/.env.example](../../../../sources/labring__FastGPT/test/.env.example)<br>[test/globalSetup.ts](../../../../sources/labring__FastGPT/test/globalSetup.ts)<br>[test/setup.ts](../../../../sources/labring__FastGPT/test/setup.ts)<br>[test/setupModels.ts](../../../../sources/labring__FastGPT/test/setupModels.ts)<br>[test/tsconfig.json](../../../../sources/labring__FastGPT/test/tsconfig.json)<br>[test/vitestWorkers.ts](../../../../sources/labring__FastGPT/test/vitestWorkers.ts)<br>[test/utils/env.ts](../../../../sources/labring__FastGPT/test/utils/env.ts)<br>[test/utils/request.ts](../../../../sources/labring__FastGPT/test/utils/request.ts) |
| security | 374 | [SECURITY.md](../../../../sources/labring__FastGPT/SECURITY.md)<br>[test/mocks/support/user/auth/controller.ts](../../../../sources/labring__FastGPT/test/mocks/support/user/auth/controller.ts)<br>[test/mocks/support/audit/utils.ts](../../../../sources/labring__FastGPT/test/mocks/support/audit/utils.ts)<br>[sdk/sandbox-adapter/package.json](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/package.json)<br>[sdk/sandbox-adapter/README.md](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/README.md)<br>[sdk/sandbox-adapter/tsconfig.json](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/tsconfig.json)<br>[sdk/sandbox-adapter/tsdown.config.ts](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/tsdown.config.ts)<br>[sdk/sandbox-adapter/vitest.config.ts](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/vitest.config.ts) |
| ci | 22 | [.github/workflows/auto-close-issue.yml](../../../../sources/labring__FastGPT/.github/workflows/auto-close-issue.yml)<br>[.github/workflows/build-admin.yml](../../../../sources/labring__FastGPT/.github/workflows/build-admin.yml)<br>[.github/workflows/build-agent-sandbox.yml](../../../../sources/labring__FastGPT/.github/workflows/build-agent-sandbox.yml)<br>[.github/workflows/build-browser-sandbox.yml](../../../../sources/labring__FastGPT/.github/workflows/build-browser-sandbox.yml)<br>[.github/workflows/build-code-sandbox.yml](../../../../sources/labring__FastGPT/.github/workflows/build-code-sandbox.yml)<br>[.github/workflows/build-docs.yml](../../../../sources/labring__FastGPT/.github/workflows/build-docs.yml)<br>[.github/workflows/build-fastgpt-ide-agent.yml](../../../../sources/labring__FastGPT/.github/workflows/build-fastgpt-ide-agent.yml)<br>[.github/workflows/build-fastgpt.yml](../../../../sources/labring__FastGPT/.github/workflows/build-fastgpt.yml) |
| container | 125 | [projects/volume-manager/Dockerfile](../../../../sources/labring__FastGPT/projects/volume-manager/Dockerfile)<br>[projects/mcp_server/Dockerfile](../../../../sources/labring__FastGPT/projects/mcp_server/Dockerfile)<br>[projects/marketplace/Dockerfile](../../../../sources/labring__FastGPT/projects/marketplace/Dockerfile)<br>[projects/fastgpt-ide-agent/Dockerfile](../../../../sources/labring__FastGPT/projects/fastgpt-ide-agent/Dockerfile)<br>[projects/code-sandbox/Dockerfile](../../../../sources/labring__FastGPT/projects/code-sandbox/Dockerfile)<br>[projects/app/Dockerfile](../../../../sources/labring__FastGPT/projects/app/Dockerfile)<br>[projects/app/public/js/monaco-editor.0.45.0/vs/basic-languages/dockerfile/dockerfile.js](../../../../sources/labring__FastGPT/projects/app/public/js/monaco-editor.0.45.0/vs/basic-languages/dockerfile/dockerfile.js)<br>[projects/agent-sandbox-proxy/Dockerfile](../../../../sources/labring__FastGPT/projects/agent-sandbox-proxy/Dockerfile) |
| instruction | 1 | [AGENTS.md](../../../../sources/labring__FastGPT/AGENTS.md) |
| docs | 45 | [README_en.md](../../../../sources/labring__FastGPT/README_en.md)<br>[README_id.md](../../../../sources/labring__FastGPT/README_id.md)<br>[README_ja.md](../../../../sources/labring__FastGPT/README_ja.md)<br>[README_th.md](../../../../sources/labring__FastGPT/README_th.md)<br>[README_vi.md](../../../../sources/labring__FastGPT/README_vi.md)<br>[README.md](../../../../sources/labring__FastGPT/README.md)<br>[sdk/storage/README.md](../../../../sources/labring__FastGPT/sdk/storage/README.md)<br>[sdk/sandbox-adapter/README.md](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/README.md) |
| config | 41 | [Makefile](../../../../sources/labring__FastGPT/Makefile)<br>[package.json](../../../../sources/labring__FastGPT/package.json)<br>[pnpm-workspace.yaml](../../../../sources/labring__FastGPT/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/labring__FastGPT/tsconfig.json)<br>[turbo.json](../../../../sources/labring__FastGPT/turbo.json)<br>[test/tsconfig.json](../../../../sources/labring__FastGPT/test/tsconfig.json)<br>[sdk/storage/package.json](../../../../sources/labring__FastGPT/sdk/storage/package.json)<br>[sdk/storage/tsconfig.json](../../../../sources/labring__FastGPT/sdk/storage/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 561 | [test/.env.example](../../../../sources/labring__FastGPT/test/.env.example)<br>[test/globalSetup.ts](../../../../sources/labring__FastGPT/test/globalSetup.ts)<br>[test/setup.ts](../../../../sources/labring__FastGPT/test/setup.ts)<br>[test/setupModels.ts](../../../../sources/labring__FastGPT/test/setupModels.ts)<br>[test/tsconfig.json](../../../../sources/labring__FastGPT/test/tsconfig.json)<br>[test/vitestWorkers.ts](../../../../sources/labring__FastGPT/test/vitestWorkers.ts) |
| CI workflows | 22 | [.github/workflows/auto-close-issue.yml](../../../../sources/labring__FastGPT/.github/workflows/auto-close-issue.yml)<br>[.github/workflows/build-admin.yml](../../../../sources/labring__FastGPT/.github/workflows/build-admin.yml)<br>[.github/workflows/build-agent-sandbox.yml](../../../../sources/labring__FastGPT/.github/workflows/build-agent-sandbox.yml)<br>[.github/workflows/build-browser-sandbox.yml](../../../../sources/labring__FastGPT/.github/workflows/build-browser-sandbox.yml)<br>[.github/workflows/build-code-sandbox.yml](../../../../sources/labring__FastGPT/.github/workflows/build-code-sandbox.yml)<br>[.github/workflows/build-docs.yml](../../../../sources/labring__FastGPT/.github/workflows/build-docs.yml) |
| Containers / deploy | 125 | [projects/volume-manager/Dockerfile](../../../../sources/labring__FastGPT/projects/volume-manager/Dockerfile)<br>[projects/mcp_server/Dockerfile](../../../../sources/labring__FastGPT/projects/mcp_server/Dockerfile)<br>[projects/marketplace/Dockerfile](../../../../sources/labring__FastGPT/projects/marketplace/Dockerfile)<br>[projects/fastgpt-ide-agent/Dockerfile](../../../../sources/labring__FastGPT/projects/fastgpt-ide-agent/Dockerfile)<br>[projects/code-sandbox/Dockerfile](../../../../sources/labring__FastGPT/projects/code-sandbox/Dockerfile)<br>[projects/app/Dockerfile](../../../../sources/labring__FastGPT/projects/app/Dockerfile) |
| Security / policy | 374 | [SECURITY.md](../../../../sources/labring__FastGPT/SECURITY.md)<br>[test/mocks/support/user/auth/controller.ts](../../../../sources/labring__FastGPT/test/mocks/support/user/auth/controller.ts)<br>[test/mocks/support/audit/utils.ts](../../../../sources/labring__FastGPT/test/mocks/support/audit/utils.ts)<br>[sdk/sandbox-adapter/package.json](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/package.json)<br>[sdk/sandbox-adapter/README.md](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/README.md)<br>[sdk/sandbox-adapter/tsconfig.json](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/tsconfig.json) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/labring__FastGPT/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `projects/mcp_server/.env.template`, `projects/mcp_server/Dockerfile`, `projects/mcp_server/package.json`.
2. Trace execution through entrypoints: `sdk/storage/src/index.ts`, `sdk/sandbox-adapter/src/index.ts`, `sdk/otel/src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `sdk/sandbox-adapter/package.json`, `sdk/sandbox-adapter/README.md`.
4. Inspect retrieval/memory/indexing through: `test/mocks/index.ts`, `test/mocks/core/ai/embedding.ts`, `test/mocks/common/vector.ts`.
5. Verify behavior through test/eval files: `test/.env.example`, `test/globalSetup.ts`, `test/setup.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 FastGPT is a knowledge based platform built on the LLMs, offers a comprehensive suite of out of the box capabilities suc. 핵심 구조 신호는 TypeScript, package.json, Makefile, README.md, AGENTS.md, LICENSE이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
