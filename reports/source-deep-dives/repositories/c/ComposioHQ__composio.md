# ComposioHQ/composio Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 2244 files, 565 directories.

## 요약

- 조사 단위: `sources/ComposioHQ__composio` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,244 files, 559 directories, depth score 138, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=ts/packages/core/test/utils/transformers/mcp.test.ts, ts/packages/core/test/models/mcp.test.ts, ts/packages/core/src/utils/transformers/mcp.ts이고, 의존성 단서는 openai, anthropic, gemini, langchain, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | ComposioHQ/composio |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/ComposioHQ__composio](../../../../sources/ComposioHQ__composio) |
| Existing report | [reports/clone-structures/ComposioHQ__composio.md](../../../clone-structures/ComposioHQ__composio.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2244 / 559 |
| Max observed depth | 9 |
| Top directories | .agents, .changeset, .claude, .github, .husky, docs, plans, public, python, test, ts |
| Top extensions | .ts: 853, .md: 252, .mdx: 232, .json: 198, .py: 177, .svg: 90, .tsx: 84, .tape: 50, .ascii: 49, .png: 37, .yml: 35, (none): 31 |
| Source patterns | monorepo/workspace, cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 14 |
| .github | ci surface | 1 |
| plans | top-level component | 1 |
| public | top-level component | 1 |
| python | top-level component | 1 |
| test | validation surface | 1 |
| ts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | turbo build |
| build | package.json | build:binary | turbo build:binary --filter=./ts/packages/cli |
| build | package.json | build:binary:all | turbo build:binary:all --filter=./ts/packages/cli |
| build | package.json | build:binary:checksums | turbo build:binary:checksums --filter=./ts/packages/cli |
| utility | package.json | install:binary | turbo install:binary --filter=./ts/packages/cli |
| build | package.json | build:packages | turbo build --filter=./ts/packages/** |
| utility | package.json | cli:record | turbo run record --filter=./ts/packages/cli |
| utility | package.json | record | turbo run record |
| test | package.json | test | pnpm run test:install-sh && turbo test --filter=./ts/packages/** --filter=!@e2e-tests/* && pnpm run test:examples |
| test | package.json | test:install-sh | bash test/install-sh-release-resolution.test.sh |
| test | package.json | test:examples | tsx ts/scripts/validate-examples.ts |
| test | package.json | test:e2e | turbo test:e2e --filter='@e2e-tests/*' |
| test | package.json | test:e2e:node | turbo test:e2e:node --filter='@e2e-tests/node-*' |
| test | package.json | test:e2e:deno | turbo test:e2e:deno --filter='@e2e-tests/deno-*' |
| test | package.json | test:e2e:cli | turbo test:e2e:cli --filter='@e2e-tests/cli-*' |
| test | package.json | test:e2e:cloudflare | turbo test:e2e:cloudflare --filter='@e2e-tests/cf-*' |
| test | package.json | test:ui | vitest --ui |
| quality | package.json | typecheck | turbo typecheck --filter=./ts/packages/** |
| quality | package.json | typecheck:tsc | turbo typecheck:tsc --filter=./ts/packages/** |
| quality | package.json | lint | eslint ts/packages --ext .ts,.tsx |
| quality | package.json | lint:packages | eslint ts/packages --ext .ts,.tsx |
| quality | package.json | lint:fix | eslint . --ext .ts,.tsx --fix |
| quality | package.json | lint:fix:packages | eslint ts/packages --ext .ts,.tsx --fix |
| quality | package.json | format | prettier --write "**/*.{ts,tsx,js,jsx,json,md}" |
| utility | package.json | preinstall | ./ts/scripts/pre-install.sh |
| utility | package.json | prepare | husky |
| utility | package.json | create:provider | bash ts/scripts/create-provider.sh |
| utility | package.json | create:example | bash ts/scripts/create-example.sh |
| quality | package.json | check:peer-deps | tsx ts/scripts/check-peer-deps.ts |
| utility | package.json | update:peer-deps | tsx ts/scripts/update-peer-deps.ts |
| build | package.json | prepublish | pnpm run build:packages |
| utility | package.json | changeset | changeset |
| utility | package.json | changeset:version | changeset version |
| build | package.json | changeset:release | pnpm run build:packages && changeset publish |
| utility | package.json | changeset:pre-enter | changeset pre enter |
| utility | package.json | changeset:pre-exit | changeset pre exit |
| build | package.json | clean | git clean -xdf .turbo node_modules ts/packages/**/.turbo ts/packages/**/node_modules ts/packages/**/dist |
| utility | package.json | clean:workspace | pnpm turbo clean |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic, gemini |
| agentProtocols | none |
| agentFrameworks | langchain |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [ts/packages/core/test/utils/transformers/mcp.test.ts](../../../../sources/ComposioHQ__composio/ts/packages/core/test/utils/transformers/mcp.test.ts) | mcp signal |
| mcp | [ts/packages/core/test/models/mcp.test.ts](../../../../sources/ComposioHQ__composio/ts/packages/core/test/models/mcp.test.ts) | mcp signal |
| mcp | [ts/packages/core/src/utils/transformers/mcp.ts](../../../../sources/ComposioHQ__composio/ts/packages/core/src/utils/transformers/mcp.ts) | mcp signal |
| mcp | [ts/packages/core/src/types/mcp.experimental.types.ts](../../../../sources/ComposioHQ__composio/ts/packages/core/src/types/mcp.experimental.types.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/ComposioHQ__composio/AGENTS.md) | agentRuntime signal |
| agentRuntime | [ts/packages/core/test/tools/fileModifiers.test.ts](../../../../sources/ComposioHQ__composio/ts/packages/core/test/tools/fileModifiers.test.ts) | agentRuntime signal |
| agentRuntime | [ts/packages/core/test/tools/fileUploadMatrix.test.ts](../../../../sources/ComposioHQ__composio/ts/packages/core/test/tools/fileUploadMatrix.test.ts) | agentRuntime signal |
| agentRuntime | [ts/packages/core/test/tools/modifiers.test.ts](../../../../sources/ComposioHQ__composio/ts/packages/core/test/tools/modifiers.test.ts) | agentRuntime signal |
| entrypoints | [ts/packages/ts-builders/src/index.ts](../../../../sources/ComposioHQ__composio/ts/packages/ts-builders/src/index.ts) | entrypoints signal |
| entrypoints | [ts/packages/providers/vercel/src/index.ts](../../../../sources/ComposioHQ__composio/ts/packages/providers/vercel/src/index.ts) | entrypoints signal |
| entrypoints | [ts/packages/providers/openai-agents/src/index.ts](../../../../sources/ComposioHQ__composio/ts/packages/providers/openai-agents/src/index.ts) | entrypoints signal |
| entrypoints | [ts/packages/providers/openai/src/index.ts](../../../../sources/ComposioHQ__composio/ts/packages/providers/openai/src/index.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 49 | [ts/packages/ts-builders/src/index.ts](../../../../sources/ComposioHQ__composio/ts/packages/ts-builders/src/index.ts)<br>[ts/packages/providers/vercel/src/index.ts](../../../../sources/ComposioHQ__composio/ts/packages/providers/vercel/src/index.ts)<br>[ts/packages/providers/openai-agents/src/index.ts](../../../../sources/ComposioHQ__composio/ts/packages/providers/openai-agents/src/index.ts)<br>[ts/packages/providers/openai/src/index.ts](../../../../sources/ComposioHQ__composio/ts/packages/providers/openai/src/index.ts)<br>[ts/packages/providers/mastra/src/index.ts](../../../../sources/ComposioHQ__composio/ts/packages/providers/mastra/src/index.ts)<br>[ts/packages/providers/llamaindex/src/index.ts](../../../../sources/ComposioHQ__composio/ts/packages/providers/llamaindex/src/index.ts)<br>[ts/packages/providers/langchain/src/index.ts](../../../../sources/ComposioHQ__composio/ts/packages/providers/langchain/src/index.ts)<br>[ts/packages/providers/google/src/index.ts](../../../../sources/ComposioHQ__composio/ts/packages/providers/google/src/index.ts) |
| agentRuntime | 235 | [AGENTS.md](../../../../sources/ComposioHQ__composio/AGENTS.md)<br>[ts/packages/core/test/tools/fileModifiers.test.ts](../../../../sources/ComposioHQ__composio/ts/packages/core/test/tools/fileModifiers.test.ts)<br>[ts/packages/core/test/tools/fileUploadMatrix.test.ts](../../../../sources/ComposioHQ__composio/ts/packages/core/test/tools/fileUploadMatrix.test.ts)<br>[ts/packages/core/test/tools/modifiers.test.ts](../../../../sources/ComposioHQ__composio/ts/packages/core/test/tools/modifiers.test.ts)<br>[ts/packages/core/test/tools/tools.test.ts](../../../../sources/ComposioHQ__composio/ts/packages/core/test/tools/tools.test.ts)<br>[ts/packages/core/src/types/tool.types.ts](../../../../sources/ComposioHQ__composio/ts/packages/core/src/types/tool.types.ts)<br>[ts/packages/core/src/models/Tools.ts](../../../../sources/ComposioHQ__composio/ts/packages/core/src/models/Tools.ts)<br>[ts/packages/cli/AGENTS.md](../../../../sources/ComposioHQ__composio/ts/packages/cli/AGENTS.md) |
| mcp | 46 | [ts/packages/core/test/utils/transformers/mcp.test.ts](../../../../sources/ComposioHQ__composio/ts/packages/core/test/utils/transformers/mcp.test.ts)<br>[ts/packages/core/test/models/mcp.test.ts](../../../../sources/ComposioHQ__composio/ts/packages/core/test/models/mcp.test.ts)<br>[ts/packages/core/src/utils/transformers/mcp.ts](../../../../sources/ComposioHQ__composio/ts/packages/core/src/utils/transformers/mcp.ts)<br>[ts/packages/core/src/types/mcp.experimental.types.ts](../../../../sources/ComposioHQ__composio/ts/packages/core/src/types/mcp.experimental.types.ts)<br>[ts/packages/core/src/types/mcp.types.ts](../../../../sources/ComposioHQ__composio/ts/packages/core/src/types/mcp.types.ts)<br>[ts/packages/core/src/models/MCP.ts](../../../../sources/ComposioHQ__composio/ts/packages/core/src/models/MCP.ts)<br>[ts/packages/cli/test/src/services/run-subagent-output-mcp.test.ts](../../../../sources/ComposioHQ__composio/ts/packages/cli/test/src/services/run-subagent-output-mcp.test.ts)<br>[ts/packages/cli/src/services/run-subagent-output-mcp.ts](../../../../sources/ComposioHQ__composio/ts/packages/cli/src/services/run-subagent-output-mcp.ts) |
| retrieval | 124 | [ts/packages/ts-builders/src/index.ts](../../../../sources/ComposioHQ__composio/ts/packages/ts-builders/src/index.ts)<br>[ts/packages/providers/vercel/src/index.ts](../../../../sources/ComposioHQ__composio/ts/packages/providers/vercel/src/index.ts)<br>[ts/packages/providers/openai-agents/src/index.ts](../../../../sources/ComposioHQ__composio/ts/packages/providers/openai-agents/src/index.ts)<br>[ts/packages/providers/openai/src/index.ts](../../../../sources/ComposioHQ__composio/ts/packages/providers/openai/src/index.ts)<br>[ts/packages/providers/mastra/src/index.ts](../../../../sources/ComposioHQ__composio/ts/packages/providers/mastra/src/index.ts)<br>[ts/packages/providers/llamaindex/src/index.ts](../../../../sources/ComposioHQ__composio/ts/packages/providers/llamaindex/src/index.ts)<br>[ts/packages/providers/langchain/src/index.ts](../../../../sources/ComposioHQ__composio/ts/packages/providers/langchain/src/index.ts)<br>[ts/packages/providers/google/src/index.ts](../../../../sources/ComposioHQ__composio/ts/packages/providers/google/src/index.ts) |
| spec | 8 | [ts/packages/cli/test/__fixtures__/python-project-with-composio-core/requirements.txt](../../../../sources/ComposioHQ__composio/ts/packages/cli/test/__fixtures__/python-project-with-composio-core/requirements.txt)<br>[ts/packages/cli/test/__fixtures__/python-project/requirements.txt](../../../../sources/ComposioHQ__composio/ts/packages/cli/test/__fixtures__/python-project/requirements.txt)<br>[ts/packages/cli/test/__fixtures__/ambiguous-project/requirements.txt](../../../../sources/ComposioHQ__composio/ts/packages/cli/test/__fixtures__/ambiguous-project/requirements.txt)<br>[ts/packages/cli/.cursor/rules/cli-design-guidelines.mdc](../../../../sources/ComposioHQ__composio/ts/packages/cli/.cursor/rules/cli-design-guidelines.mdc)<br>[ts/examples/cloudflare-wrangler/test/index.spec.ts](../../../../sources/ComposioHQ__composio/ts/examples/cloudflare-wrangler/test/index.spec.ts)<br>[ts/e2e-tests/runtimes/cloudflare/cf-workers-tool-router-ai/test/tool-router-ai.spec.ts](../../../../sources/ComposioHQ__composio/ts/e2e-tests/runtimes/cloudflare/cf-workers-tool-router-ai/test/tool-router-ai.spec.ts)<br>[ts/e2e-tests/runtimes/cloudflare/cf-workers-files/test/files.spec.ts](../../../../sources/ComposioHQ__composio/ts/e2e-tests/runtimes/cloudflare/cf-workers-files/test/files.spec.ts)<br>[ts/e2e-tests/runtimes/cloudflare/cf-workers-basic/test/platform.spec.ts](../../../../sources/ComposioHQ__composio/ts/e2e-tests/runtimes/cloudflare/cf-workers-basic/test/platform.spec.ts) |
| eval | 445 | [test-exports.ts](../../../../sources/ComposioHQ__composio/test-exports.ts)<br>[ts/packages/ts-builders/tsconfig.test.json](../../../../sources/ComposioHQ__composio/ts/packages/ts-builders/tsconfig.test.json)<br>[ts/packages/ts-builders/src/ArrayType.test.ts](../../../../sources/ComposioHQ__composio/ts/packages/ts-builders/src/ArrayType.test.ts)<br>[ts/packages/ts-builders/src/Class.test.ts](../../../../sources/ComposioHQ__composio/ts/packages/ts-builders/src/Class.test.ts)<br>[ts/packages/ts-builders/src/ConstDeclaration.test.ts](../../../../sources/ComposioHQ__composio/ts/packages/ts-builders/src/ConstDeclaration.test.ts)<br>[ts/packages/ts-builders/src/DocComment.test.ts](../../../../sources/ComposioHQ__composio/ts/packages/ts-builders/src/DocComment.test.ts)<br>[ts/packages/ts-builders/src/ExportFrom.test.ts](../../../../sources/ComposioHQ__composio/ts/packages/ts-builders/src/ExportFrom.test.ts)<br>[ts/packages/ts-builders/src/FunctionType.test.ts](../../../../sources/ComposioHQ__composio/ts/packages/ts-builders/src/FunctionType.test.ts) |
| security | 73 | [ts/packages/cli-keyring/src/stores/linux-secret-tool.ts](../../../../sources/ComposioHQ__composio/ts/packages/cli-keyring/src/stores/linux-secret-tool.ts)<br>[ts/packages/cli-keyring/src/stores/macos-security-ffi.ts](../../../../sources/ComposioHQ__composio/ts/packages/cli-keyring/src/stores/macos-security-ffi.ts)<br>[ts/packages/cli-keyring/src/stores/macos-security-subprocess.ts](../../../../sources/ComposioHQ__composio/ts/packages/cli-keyring/src/stores/macos-security-subprocess.ts)<br>[ts/packages/cli-keyring/src/stores/macos-security.ts](../../../../sources/ComposioHQ__composio/ts/packages/cli-keyring/src/stores/macos-security.ts)<br>[ts/packages/cli/test/src/commands/auth-configs/auth-configs.create.cmd.test.ts](../../../../sources/ComposioHQ__composio/ts/packages/cli/test/src/commands/auth-configs/auth-configs.create.cmd.test.ts)<br>[ts/packages/cli/test/src/commands/auth-configs/auth-configs.info.cmd.test.ts](../../../../sources/ComposioHQ__composio/ts/packages/cli/test/src/commands/auth-configs/auth-configs.info.cmd.test.ts)<br>[ts/packages/cli/test/src/commands/auth-configs/auth-configs.list.cmd.test.ts](../../../../sources/ComposioHQ__composio/ts/packages/cli/test/src/commands/auth-configs/auth-configs.list.cmd.test.ts)<br>[ts/packages/cli/src/models/auth-configs.ts](../../../../sources/ComposioHQ__composio/ts/packages/cli/src/models/auth-configs.ts) |
| ci | 28 | [.github/workflows/build-cli-binaries.yml](../../../../sources/ComposioHQ__composio/.github/workflows/build-cli-binaries.yml)<br>[.github/workflows/claude-code-doc-review.yml](../../../../sources/ComposioHQ__composio/.github/workflows/claude-code-doc-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/ComposioHQ__composio/.github/workflows/claude.yml)<br>[.github/workflows/cli.install-health-check.yml](../../../../sources/ComposioHQ__composio/.github/workflows/cli.install-health-check.yml)<br>[.github/workflows/cli.test-installation.yml](../../../../sources/ComposioHQ__composio/.github/workflows/cli.test-installation.yml)<br>[.github/workflows/docs-check-links.yml](../../../../sources/ComposioHQ__composio/.github/workflows/docs-check-links.yml)<br>[.github/workflows/docs-search-sync.yml](../../../../sources/ComposioHQ__composio/.github/workflows/docs-search-sync.yml)<br>[.github/workflows/docs-tests.yml](../../../../sources/ComposioHQ__composio/.github/workflows/docs-tests.yml) |
| container | 4 | [Dockerfile](../../../../sources/ComposioHQ__composio/Dockerfile)<br>[ts/e2e-tests/_utils/Dockerfile.cli](../../../../sources/ComposioHQ__composio/ts/e2e-tests/_utils/Dockerfile.cli)<br>[ts/e2e-tests/_utils/Dockerfile.deno](../../../../sources/ComposioHQ__composio/ts/e2e-tests/_utils/Dockerfile.deno)<br>[ts/e2e-tests/_utils/Dockerfile.node](../../../../sources/ComposioHQ__composio/ts/e2e-tests/_utils/Dockerfile.node) |
| instruction | 7 | [AGENTS.md](../../../../sources/ComposioHQ__composio/AGENTS.md)<br>[CLAUDE.md](../../../../sources/ComposioHQ__composio/CLAUDE.md)<br>[ts/packages/cli/AGENTS.md](../../../../sources/ComposioHQ__composio/ts/packages/cli/AGENTS.md)<br>[ts/packages/cli/.cursor/rules/cli-design-guidelines.mdc](../../../../sources/ComposioHQ__composio/ts/packages/cli/.cursor/rules/cli-design-guidelines.mdc)<br>[ts/packages/cli/.cursor/rules/composio-clients.mdc](../../../../sources/ComposioHQ__composio/ts/packages/cli/.cursor/rules/composio-clients.mdc)<br>[ts/packages/cli/.cursor/rules/effect-source-reference.mdc](../../../../sources/ComposioHQ__composio/ts/packages/cli/.cursor/rules/effect-source-reference.mdc)<br>[docs/CLAUDE.md](../../../../sources/ComposioHQ__composio/docs/CLAUDE.md) |
| docs | 685 | [README.md](../../../../sources/ComposioHQ__composio/README.md)<br>[ts/README.md](../../../../sources/ComposioHQ__composio/ts/README.md)<br>[ts/packages/ts-builders/README.md](../../../../sources/ComposioHQ__composio/ts/packages/ts-builders/README.md)<br>[ts/packages/providers/README.md](../../../../sources/ComposioHQ__composio/ts/packages/providers/README.md)<br>[ts/packages/providers/vercel/README.md](../../../../sources/ComposioHQ__composio/ts/packages/providers/vercel/README.md)<br>[ts/packages/providers/openai-agents/README.md](../../../../sources/ComposioHQ__composio/ts/packages/providers/openai-agents/README.md)<br>[ts/packages/providers/openai/README.md](../../../../sources/ComposioHQ__composio/ts/packages/providers/openai/README.md)<br>[ts/packages/providers/mastra/README.md](../../../../sources/ComposioHQ__composio/ts/packages/providers/mastra/README.md) |
| config | 156 | [package.json](../../../../sources/ComposioHQ__composio/package.json)<br>[pnpm-workspace.yaml](../../../../sources/ComposioHQ__composio/pnpm-workspace.yaml)<br>[pyproject.toml](../../../../sources/ComposioHQ__composio/pyproject.toml)<br>[uv.lock](../../../../sources/ComposioHQ__composio/uv.lock)<br>[ts/packages/ts-builders/package.json](../../../../sources/ComposioHQ__composio/ts/packages/ts-builders/package.json)<br>[ts/packages/ts-builders/tsconfig.json](../../../../sources/ComposioHQ__composio/ts/packages/ts-builders/tsconfig.json)<br>[ts/packages/providers/vercel/package.json](../../../../sources/ComposioHQ__composio/ts/packages/providers/vercel/package.json)<br>[ts/packages/providers/vercel/tsconfig.json](../../../../sources/ComposioHQ__composio/ts/packages/providers/vercel/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 445 | [test-exports.ts](../../../../sources/ComposioHQ__composio/test-exports.ts)<br>[ts/packages/ts-builders/tsconfig.test.json](../../../../sources/ComposioHQ__composio/ts/packages/ts-builders/tsconfig.test.json)<br>[ts/packages/ts-builders/src/ArrayType.test.ts](../../../../sources/ComposioHQ__composio/ts/packages/ts-builders/src/ArrayType.test.ts)<br>[ts/packages/ts-builders/src/Class.test.ts](../../../../sources/ComposioHQ__composio/ts/packages/ts-builders/src/Class.test.ts)<br>[ts/packages/ts-builders/src/ConstDeclaration.test.ts](../../../../sources/ComposioHQ__composio/ts/packages/ts-builders/src/ConstDeclaration.test.ts)<br>[ts/packages/ts-builders/src/DocComment.test.ts](../../../../sources/ComposioHQ__composio/ts/packages/ts-builders/src/DocComment.test.ts) |
| CI workflows | 28 | [.github/workflows/build-cli-binaries.yml](../../../../sources/ComposioHQ__composio/.github/workflows/build-cli-binaries.yml)<br>[.github/workflows/claude-code-doc-review.yml](../../../../sources/ComposioHQ__composio/.github/workflows/claude-code-doc-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/ComposioHQ__composio/.github/workflows/claude.yml)<br>[.github/workflows/cli.install-health-check.yml](../../../../sources/ComposioHQ__composio/.github/workflows/cli.install-health-check.yml)<br>[.github/workflows/cli.test-installation.yml](../../../../sources/ComposioHQ__composio/.github/workflows/cli.test-installation.yml)<br>[.github/workflows/docs-check-links.yml](../../../../sources/ComposioHQ__composio/.github/workflows/docs-check-links.yml) |
| Containers / deploy | 4 | [Dockerfile](../../../../sources/ComposioHQ__composio/Dockerfile)<br>[ts/e2e-tests/_utils/Dockerfile.cli](../../../../sources/ComposioHQ__composio/ts/e2e-tests/_utils/Dockerfile.cli)<br>[ts/e2e-tests/_utils/Dockerfile.deno](../../../../sources/ComposioHQ__composio/ts/e2e-tests/_utils/Dockerfile.deno)<br>[ts/e2e-tests/_utils/Dockerfile.node](../../../../sources/ComposioHQ__composio/ts/e2e-tests/_utils/Dockerfile.node) |
| Security / policy | 73 | [ts/packages/cli-keyring/src/stores/linux-secret-tool.ts](../../../../sources/ComposioHQ__composio/ts/packages/cli-keyring/src/stores/linux-secret-tool.ts)<br>[ts/packages/cli-keyring/src/stores/macos-security-ffi.ts](../../../../sources/ComposioHQ__composio/ts/packages/cli-keyring/src/stores/macos-security-ffi.ts)<br>[ts/packages/cli-keyring/src/stores/macos-security-subprocess.ts](../../../../sources/ComposioHQ__composio/ts/packages/cli-keyring/src/stores/macos-security-subprocess.ts)<br>[ts/packages/cli-keyring/src/stores/macos-security.ts](../../../../sources/ComposioHQ__composio/ts/packages/cli-keyring/src/stores/macos-security.ts)<br>[ts/packages/cli/test/src/commands/auth-configs/auth-configs.create.cmd.test.ts](../../../../sources/ComposioHQ__composio/ts/packages/cli/test/src/commands/auth-configs/auth-configs.create.cmd.test.ts)<br>[ts/packages/cli/test/src/commands/auth-configs/auth-configs.info.cmd.test.ts](../../../../sources/ComposioHQ__composio/ts/packages/cli/test/src/commands/auth-configs/auth-configs.info.cmd.test.ts) |
| Agent instructions | 7 | [AGENTS.md](../../../../sources/ComposioHQ__composio/AGENTS.md)<br>[CLAUDE.md](../../../../sources/ComposioHQ__composio/CLAUDE.md)<br>[ts/packages/cli/AGENTS.md](../../../../sources/ComposioHQ__composio/ts/packages/cli/AGENTS.md)<br>[ts/packages/cli/.cursor/rules/cli-design-guidelines.mdc](../../../../sources/ComposioHQ__composio/ts/packages/cli/.cursor/rules/cli-design-guidelines.mdc)<br>[ts/packages/cli/.cursor/rules/composio-clients.mdc](../../../../sources/ComposioHQ__composio/ts/packages/cli/.cursor/rules/composio-clients.mdc)<br>[ts/packages/cli/.cursor/rules/effect-source-reference.mdc](../../../../sources/ComposioHQ__composio/ts/packages/cli/.cursor/rules/effect-source-reference.mdc) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `ts/packages/core/test/utils/transformers/mcp.test.ts`, `ts/packages/core/test/models/mcp.test.ts`, `ts/packages/core/src/utils/transformers/mcp.ts`.
2. Trace execution through entrypoints: `ts/packages/ts-builders/src/index.ts`, `ts/packages/providers/vercel/src/index.ts`, `ts/packages/providers/openai-agents/src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `ts/packages/core/test/tools/fileModifiers.test.ts`, `ts/packages/core/test/tools/fileUploadMatrix.test.ts`.
4. Inspect retrieval/memory/indexing through: `ts/packages/ts-builders/src/index.ts`, `ts/packages/providers/vercel/src/index.ts`, `ts/packages/providers/openai-agents/src/index.ts`.
5. Verify behavior through test/eval files: `test-exports.ts`, `ts/packages/ts-builders/tsconfig.test.json`, `ts/packages/ts-builders/src/ArrayType.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 2244 files, 565 directories.. 핵심 구조 신호는 package.json, pyproject.toml, Dockerfile, README.md, AGENTS.md, openai이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
