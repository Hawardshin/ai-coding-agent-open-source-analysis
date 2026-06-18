# ComposioHQ/composio 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Local clone structure analysis: 2244 files, 565 directories.

## 요약

- 조사 단위: `sources/ComposioHQ__composio` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,244 files, 559 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=ts/packages/core/test/utils/transformers/mcp.test.ts, ts/packages/core/test/models/mcp.test.ts, ts/packages/core/src/utils/transformers/mcp.ts이고, 의존성 단서는 openai, anthropic, gemini, langchain, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | ComposioHQ/composio |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/ComposioHQ__composio](../../../../sources/ComposioHQ__composio) |
| 기존 보고서 | [reports/clone-structures/ComposioHQ__composio.md](../../../clone-structures/ComposioHQ__composio.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2244 / 559 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .agents, .changeset, .claude, .github, .husky, docs, plans, public, python, test, ts |
| 상위 확장자 | .ts: 853, .md: 252, .mdx: 232, .json: 198, .py: 177, .svg: 90, .tsx: 84, .tape: 50, .ascii: 49, .png: 37, .yml: 35, (none): 31 |
| 소스 패턴 | monorepo/workspace, cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 14 |
| .github | ci surface | 1 |
| plans | top-level component | 1 |
| public | top-level component | 1 |
| python | top-level component | 1 |
| test | validation surface | 1 |
| ts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic, gemini |
| agentProtocols | 없음 |
| agentFrameworks | langchain |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 445 | [test-exports.ts](../../../../sources/ComposioHQ__composio/test-exports.ts)<br>[ts/packages/ts-builders/tsconfig.test.json](../../../../sources/ComposioHQ__composio/ts/packages/ts-builders/tsconfig.test.json)<br>[ts/packages/ts-builders/src/ArrayType.test.ts](../../../../sources/ComposioHQ__composio/ts/packages/ts-builders/src/ArrayType.test.ts)<br>[ts/packages/ts-builders/src/Class.test.ts](../../../../sources/ComposioHQ__composio/ts/packages/ts-builders/src/Class.test.ts)<br>[ts/packages/ts-builders/src/ConstDeclaration.test.ts](../../../../sources/ComposioHQ__composio/ts/packages/ts-builders/src/ConstDeclaration.test.ts)<br>[ts/packages/ts-builders/src/DocComment.test.ts](../../../../sources/ComposioHQ__composio/ts/packages/ts-builders/src/DocComment.test.ts) |
| CI workflow | 28 | [.github/workflows/build-cli-binaries.yml](../../../../sources/ComposioHQ__composio/.github/workflows/build-cli-binaries.yml)<br>[.github/workflows/claude-code-doc-review.yml](../../../../sources/ComposioHQ__composio/.github/workflows/claude-code-doc-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/ComposioHQ__composio/.github/workflows/claude.yml)<br>[.github/workflows/cli.install-health-check.yml](../../../../sources/ComposioHQ__composio/.github/workflows/cli.install-health-check.yml)<br>[.github/workflows/cli.test-installation.yml](../../../../sources/ComposioHQ__composio/.github/workflows/cli.test-installation.yml)<br>[.github/workflows/docs-check-links.yml](../../../../sources/ComposioHQ__composio/.github/workflows/docs-check-links.yml) |
| 컨테이너/배포 | 4 | [Dockerfile](../../../../sources/ComposioHQ__composio/Dockerfile)<br>[ts/e2e-tests/_utils/Dockerfile.cli](../../../../sources/ComposioHQ__composio/ts/e2e-tests/_utils/Dockerfile.cli)<br>[ts/e2e-tests/_utils/Dockerfile.deno](../../../../sources/ComposioHQ__composio/ts/e2e-tests/_utils/Dockerfile.deno)<br>[ts/e2e-tests/_utils/Dockerfile.node](../../../../sources/ComposioHQ__composio/ts/e2e-tests/_utils/Dockerfile.node) |
| 보안/정책 | 73 | [ts/packages/cli-keyring/src/stores/linux-secret-tool.ts](../../../../sources/ComposioHQ__composio/ts/packages/cli-keyring/src/stores/linux-secret-tool.ts)<br>[ts/packages/cli-keyring/src/stores/macos-security-ffi.ts](../../../../sources/ComposioHQ__composio/ts/packages/cli-keyring/src/stores/macos-security-ffi.ts)<br>[ts/packages/cli-keyring/src/stores/macos-security-subprocess.ts](../../../../sources/ComposioHQ__composio/ts/packages/cli-keyring/src/stores/macos-security-subprocess.ts)<br>[ts/packages/cli-keyring/src/stores/macos-security.ts](../../../../sources/ComposioHQ__composio/ts/packages/cli-keyring/src/stores/macos-security.ts)<br>[ts/packages/cli/test/src/commands/auth-configs/auth-configs.create.cmd.test.ts](../../../../sources/ComposioHQ__composio/ts/packages/cli/test/src/commands/auth-configs/auth-configs.create.cmd.test.ts)<br>[ts/packages/cli/test/src/commands/auth-configs/auth-configs.info.cmd.test.ts](../../../../sources/ComposioHQ__composio/ts/packages/cli/test/src/commands/auth-configs/auth-configs.info.cmd.test.ts) |
| 에이전트 지시문 | 7 | [AGENTS.md](../../../../sources/ComposioHQ__composio/AGENTS.md)<br>[CLAUDE.md](../../../../sources/ComposioHQ__composio/CLAUDE.md)<br>[ts/packages/cli/AGENTS.md](../../../../sources/ComposioHQ__composio/ts/packages/cli/AGENTS.md)<br>[ts/packages/cli/.cursor/rules/cli-design-guidelines.mdc](../../../../sources/ComposioHQ__composio/ts/packages/cli/.cursor/rules/cli-design-guidelines.mdc)<br>[ts/packages/cli/.cursor/rules/composio-clients.mdc](../../../../sources/ComposioHQ__composio/ts/packages/cli/.cursor/rules/composio-clients.mdc)<br>[ts/packages/cli/.cursor/rules/effect-source-reference.mdc](../../../../sources/ComposioHQ__composio/ts/packages/cli/.cursor/rules/effect-source-reference.mdc) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `ts/packages/core/test/utils/transformers/mcp.test.ts`, `ts/packages/core/test/models/mcp.test.ts`, `ts/packages/core/src/utils/transformers/mcp.ts`.
2. entrypoint를 따라 실행 흐름 확인: `ts/packages/ts-builders/src/index.ts`, `ts/packages/providers/vercel/src/index.ts`, `ts/packages/providers/openai-agents/src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `ts/packages/core/test/tools/fileModifiers.test.ts`, `ts/packages/core/test/tools/fileUploadMatrix.test.ts`.
4. retrieval/memory/indexing 확인: `ts/packages/ts-builders/src/index.ts`, `ts/packages/providers/vercel/src/index.ts`, `ts/packages/providers/openai-agents/src/index.ts`.
5. test/eval 파일로 동작 검증: `test-exports.ts`, `ts/packages/ts-builders/tsconfig.test.json`, `ts/packages/ts-builders/src/ArrayType.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 2244 files, 565 directories.. 핵심 구조 신호는 package.json, pyproject.toml, Dockerfile, README.md, AGENTS.md, openai이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
