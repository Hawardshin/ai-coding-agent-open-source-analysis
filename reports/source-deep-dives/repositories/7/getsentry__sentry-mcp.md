# getsentry/sentry-mcp 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

An MCP server for interacting with Sentry via LLMs.

## 요약

- 조사 단위: `sources/getsentry__sentry-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 777 files, 135 directories, depth score 121, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

평가/관측/품질 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 eval=benchmark-agent.sh, packages/smoke-tests/package.json, packages/smoke-tests/vitest.config.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 품질/평가 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | getsentry/sentry-mcp |
| 주제 | 평가/관측/품질 / 평가/관측/품질 |
| Region | global |
| Language | TypeScript |
| Stars | 730 |
| Forks | 119 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/getsentry__sentry-mcp](../../../../sources/getsentry__sentry-mcp) |
| 기존 보고서 | [reports/global-trending/repositories/getsentry__sentry-mcp.md](../../../global-trending/repositories/getsentry__sentry-mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 777 / 135 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .agents, .claude, .claude-plugin, .codex, .cursor, .cursor-plugin, .github, bin, docs, openspec, packages, plugins, scripts |
| 상위 확장자 | .ts: 399, .json: 174, .tsx: 86, .md: 78, .yml: 9, (none): 5, .png: 4, .toml: 4, .jsonc: 3, .yaml: 3, .css: 2, .example: 2 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/mcp-test-client | packages workspace | 61 |
| packages/mcp-core | packages workspace | 52 |
| docs | documentation surface | 43 |
| packages/mcp-cloudflare | packages workspace | 31 |
| packages/mcp-server-mocks | packages workspace | 17 |
| packages/mcp-server | packages workspace | 15 |
| packages/agent-cli-test | packages workspace | 8 |
| packages/mcp-server-evals | packages workspace | 6 |
| packages/mcp-server-tsconfig | packages workspace | 4 |
| packages/smoke-tests | packages workspace | 4 |
| .codex | top-level component | 1 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| openspec | top-level component | 1 |
| packages | source boundary | 1 |
| plugins | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| quality | package.json | docs:check | node scripts/check-doc-links.mjs |
| serve-dev | package.json | dev | dotenv -e .env -e .env.local -- turbo dev --filter=!@sentry/mcp-server |
| serve-dev | package.json | dev:stdio | dotenv -e .env -e .env.local -- turbo dev --filter=!@sentry/mcp-cloudflare |
| build | package.json | build | turbo build after-build |
| utility | package.json | deploy | turbo deploy |
| utility | package.json | eval | dotenv -e .env -e .env.local -- turbo eval |
| utility | package.json | eval:ci | CI=true dotenv -e .env -e .env.local -- pnpm --stream -r run eval:ci |
| quality | package.json | format | biome format --write |
| quality | package.json | lint | biome lint |
| quality | package.json | lint:fix | biome lint --fix |
| test | package.json | inspector | pnpx @modelcontextprotocol/inspector@latest |
| test | package.json | inspector:stdio | pnpx @modelcontextprotocol/inspector@latest -- tsx packages/mcp-server/src/index.ts |
| utility | package.json | measure-tokens | pnpm run --filter ./packages/mcp-core measure-tokens |
| utility | package.json | prepare | simple-git-hooks |
| test | package.json | cli | pnpm run --filter ./packages/mcp-test-client start |
| test | package.json | agent-cli-test | pnpm run --filter ./packages/agent-cli-test start |
| serve-dev | package.json | start:stdio | pnpm --stream run --filter ./packages/mcp-server start |
| test | package.json | test | dotenv -e .env -e .env.local -- turbo test |
| test | package.json | test:ci | CI=true dotenv -e .env -e .env.local -- pnpm --stream -r run test:ci |
| test | package.json | test:watch | dotenv -e .env -e .env.local -- turbo test:watch |
| quality | package.json | tsc | turbo tsc |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | clean | make clean |
| utility | Makefile | setup-env | make setup-env |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| eval | [benchmark-agent.sh](../../../../sources/getsentry__sentry-mcp/benchmark-agent.sh) | eval signal |
| eval | [packages/smoke-tests/package.json](../../../../sources/getsentry__sentry-mcp/packages/smoke-tests/package.json) | eval signal |
| eval | [packages/smoke-tests/vitest.config.ts](../../../../sources/getsentry__sentry-mcp/packages/smoke-tests/vitest.config.ts) | eval signal |
| eval | [packages/smoke-tests/src/smoke.test.ts](../../../../sources/getsentry__sentry-mcp/packages/smoke-tests/src/smoke.test.ts) | eval signal |
| entrypoints | [packages/mcp-test-client/src/index.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/src/index.ts) | entrypoints signal |
| entrypoints | [packages/mcp-server-mocks/src/index.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server-mocks/src/index.ts) | entrypoints signal |
| entrypoints | [packages/mcp-server-evals/src/bin/start-mock-stdio.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server-evals/src/bin/start-mock-stdio.ts) | entrypoints signal |
| entrypoints | [packages/mcp-server/src/index.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server/src/index.ts) | entrypoints signal |
| config | [Makefile](../../../../sources/getsentry__sentry-mcp/Makefile) | config signal |
| config | [package.json](../../../../sources/getsentry__sentry-mcp/package.json) | config signal |
| config | [pnpm-workspace.yaml](../../../../sources/getsentry__sentry-mcp/pnpm-workspace.yaml) | config signal |
| config | [turbo.json](../../../../sources/getsentry__sentry-mcp/turbo.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 10 | [packages/mcp-test-client/src/index.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/src/index.ts)<br>[packages/mcp-server-mocks/src/index.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server-mocks/src/index.ts)<br>[packages/mcp-server-evals/src/bin/start-mock-stdio.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server-evals/src/bin/start-mock-stdio.ts)<br>[packages/mcp-server/src/index.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server/src/index.ts)<br>[packages/mcp-core/src/server.test.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-core/src/server.test.ts)<br>[packages/mcp-core/src/server.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-core/src/server.ts)<br>[packages/mcp-core/src/internal/agents/tools/data/server.json](../../../../sources/getsentry__sentry-mcp/packages/mcp-core/src/internal/agents/tools/data/server.json)<br>[packages/mcp-cloudflare/src/client/main.tsx](../../../../sources/getsentry__sentry-mcp/packages/mcp-cloudflare/src/client/main.tsx) |
| agentRuntime | 297 | [AGENTS.md](../../../../sources/getsentry__sentry-mcp/AGENTS.md)<br>[agents.toml](../../../../sources/getsentry__sentry-mcp/agents.toml)<br>[plugins/sentry-mcp-experimental/agents/sentry-mcp.md](../../../../sources/getsentry__sentry-mcp/plugins/sentry-mcp-experimental/agents/sentry-mcp.md)<br>[plugins/sentry-mcp/agents/sentry-mcp.md](../../../../sources/getsentry__sentry-mcp/plugins/sentry-mcp/agents/sentry-mcp.md)<br>[packages/mcp-test-client/src/agent.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/src/agent.ts)<br>[packages/mcp-test-client/src/tool-output-format.test.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/src/tool-output-format.test.ts)<br>[packages/mcp-test-client/src/tool-output-format.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/src/tool-output-format.ts)<br>[packages/mcp-server-evals/src/evals/utils/runner.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server-evals/src/evals/utils/runner.ts) |
| mcp | 667 | [.mcp.json](../../../../sources/getsentry__sentry-mcp/.mcp.json)<br>[plugins/sentry-mcp-experimental/.mcp.json](../../../../sources/getsentry__sentry-mcp/plugins/sentry-mcp-experimental/.mcp.json)<br>[plugins/sentry-mcp-experimental/mcp.json](../../../../sources/getsentry__sentry-mcp/plugins/sentry-mcp-experimental/mcp.json)<br>[plugins/sentry-mcp-experimental/agents/sentry-mcp.md](../../../../sources/getsentry__sentry-mcp/plugins/sentry-mcp-experimental/agents/sentry-mcp.md)<br>[plugins/sentry-mcp-experimental/.cursor-plugin/plugin.json](../../../../sources/getsentry__sentry-mcp/plugins/sentry-mcp-experimental/.cursor-plugin/plugin.json)<br>[plugins/sentry-mcp-experimental/.claude-plugin/plugin.json](../../../../sources/getsentry__sentry-mcp/plugins/sentry-mcp-experimental/.claude-plugin/plugin.json)<br>[plugins/sentry-mcp/.mcp.json](../../../../sources/getsentry__sentry-mcp/plugins/sentry-mcp/.mcp.json)<br>[plugins/sentry-mcp/mcp.json](../../../../sources/getsentry__sentry-mcp/plugins/sentry-mcp/mcp.json) |
| retrieval | 27 | [packages/mcp-test-client/src/index.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/src/index.ts)<br>[packages/mcp-server-mocks/src/index.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server-mocks/src/index.ts)<br>[packages/mcp-server-mocks/src/fixtures/profile-chunk.json](../../../../sources/getsentry__sentry-mcp/packages/mcp-server-mocks/src/fixtures/profile-chunk.json)<br>[packages/mcp-server-evals/src/evals/utils/index.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server-evals/src/evals/utils/index.ts)<br>[packages/mcp-server/src/index.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server/src/index.ts)<br>[packages/mcp-core/src/tools/index.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-core/src/tools/index.ts)<br>[packages/mcp-core/src/tools/support/search-issues/index.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-core/src/tools/support/search-issues/index.ts)<br>[packages/mcp-core/src/tools/support/search-issue-events/index.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-core/src/tools/support/search-issue-events/index.ts) |
| spec | 4 | [docs/cloudflare/architecture.md](../../../../sources/getsentry__sentry-mcp/docs/cloudflare/architecture.md)<br>[docs/cloudflare/oauth-architecture.md](../../../../sources/getsentry__sentry-mcp/docs/cloudflare/oauth-architecture.md)<br>[docs/architecture/overview.md](../../../../sources/getsentry__sentry-mcp/docs/architecture/overview.md)<br>[.agents/skills/mcp-audit/references/spec-baseline.md](../../../../sources/getsentry__sentry-mcp/.agents/skills/mcp-audit/references/spec-baseline.md) |
| eval | 219 | [benchmark-agent.sh](../../../../sources/getsentry__sentry-mcp/benchmark-agent.sh)<br>[packages/smoke-tests/package.json](../../../../sources/getsentry__sentry-mcp/packages/smoke-tests/package.json)<br>[packages/smoke-tests/vitest.config.ts](../../../../sources/getsentry__sentry-mcp/packages/smoke-tests/vitest.config.ts)<br>[packages/smoke-tests/src/smoke.test.ts](../../../../sources/getsentry__sentry-mcp/packages/smoke-tests/src/smoke.test.ts)<br>[packages/mcp-test-client/.env.test](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/.env.test)<br>[packages/mcp-test-client/.gitignore](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/.gitignore)<br>[packages/mcp-test-client/package.json](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/package.json)<br>[packages/mcp-test-client/README.md](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/README.md) |
| security | 46 | [packages/mcp-test-client/src/auth/config.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/src/auth/config.ts)<br>[packages/mcp-test-client/src/auth/oauth.test.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/src/auth/oauth.test.ts)<br>[packages/mcp-test-client/src/auth/oauth.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/src/auth/oauth.ts)<br>[packages/mcp-server/src/cli/commands/auth.test.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server/src/cli/commands/auth.test.ts)<br>[packages/mcp-server/src/cli/commands/auth.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server/src/cli/commands/auth.ts)<br>[packages/mcp-server/src/auth/constants.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server/src/auth/constants.ts)<br>[packages/mcp-server/src/auth/device-code-flow.test.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server/src/auth/device-code-flow.test.ts)<br>[packages/mcp-server/src/auth/device-code-flow.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server/src/auth/device-code-flow.ts) |
| ci | 8 | [.github/workflows/deploy.yml](../../../../sources/getsentry__sentry-mcp/.github/workflows/deploy.yml)<br>[.github/workflows/eval.yml](../../../../sources/getsentry__sentry-mcp/.github/workflows/eval.yml)<br>[.github/workflows/mcp-server-package.yml](../../../../sources/getsentry__sentry-mcp/.github/workflows/mcp-server-package.yml)<br>[.github/workflows/merge-jobs.yml](../../../../sources/getsentry__sentry-mcp/.github/workflows/merge-jobs.yml)<br>[.github/workflows/release.yml](../../../../sources/getsentry__sentry-mcp/.github/workflows/release.yml)<br>[.github/workflows/smoke-tests.yml](../../../../sources/getsentry__sentry-mcp/.github/workflows/smoke-tests.yml)<br>[.github/workflows/test.yml](../../../../sources/getsentry__sentry-mcp/.github/workflows/test.yml)<br>[.github/workflows/token-cost.yml](../../../../sources/getsentry__sentry-mcp/.github/workflows/token-cost.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 9 | [AGENTS.md](../../../../sources/getsentry__sentry-mcp/AGENTS.md)<br>[packages/mcp-core/src/internal/agents/tools/data/CLAUDE.md](../../../../sources/getsentry__sentry-mcp/packages/mcp-core/src/internal/agents/tools/data/CLAUDE.md)<br>[packages/agent-cli-test/projects/stdio/.codex/config.toml](../../../../sources/getsentry__sentry-mcp/packages/agent-cli-test/projects/stdio/.codex/config.toml)<br>[.codex/config.toml](../../../../sources/getsentry__sentry-mcp/.codex/config.toml)<br>[.codex/skills/openspec-sync-specs/SKILL.md](../../../../sources/getsentry__sentry-mcp/.codex/skills/openspec-sync-specs/SKILL.md)<br>[.codex/skills/openspec-propose/SKILL.md](../../../../sources/getsentry__sentry-mcp/.codex/skills/openspec-propose/SKILL.md)<br>[.codex/skills/openspec-explore/SKILL.md](../../../../sources/getsentry__sentry-mcp/.codex/skills/openspec-explore/SKILL.md)<br>[.codex/skills/openspec-archive-change/SKILL.md](../../../../sources/getsentry__sentry-mcp/.codex/skills/openspec-archive-change/SKILL.md) |
| docs | 41 | [README.md](../../../../sources/getsentry__sentry-mcp/README.md)<br>[packages/mcp-test-client/README.md](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/README.md)<br>[packages/mcp-server-evals/README.md](../../../../sources/getsentry__sentry-mcp/packages/mcp-server-evals/README.md)<br>[packages/mcp-core/README.md](../../../../sources/getsentry__sentry-mcp/packages/mcp-core/README.md)<br>[packages/mcp-core/src/tools/support/search-issues/README.md](../../../../sources/getsentry__sentry-mcp/packages/mcp-core/src/tools/support/search-issues/README.md)<br>[packages/agent-cli-test/README.md](../../../../sources/getsentry__sentry-mcp/packages/agent-cli-test/README.md)<br>[docs/README.md](../../../../sources/getsentry__sentry-mcp/docs/README.md)<br>[docs/testing/overview.md](../../../../sources/getsentry__sentry-mcp/docs/testing/overview.md) |
| config | 20 | [Makefile](../../../../sources/getsentry__sentry-mcp/Makefile)<br>[package.json](../../../../sources/getsentry__sentry-mcp/package.json)<br>[pnpm-workspace.yaml](../../../../sources/getsentry__sentry-mcp/pnpm-workspace.yaml)<br>[turbo.json](../../../../sources/getsentry__sentry-mcp/turbo.json)<br>[packages/smoke-tests/package.json](../../../../sources/getsentry__sentry-mcp/packages/smoke-tests/package.json)<br>[packages/mcp-test-client/package.json](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/package.json)<br>[packages/mcp-test-client/tsconfig.json](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/tsconfig.json)<br>[packages/mcp-server-tsconfig/package.json](../../../../sources/getsentry__sentry-mcp/packages/mcp-server-tsconfig/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 219 | [benchmark-agent.sh](../../../../sources/getsentry__sentry-mcp/benchmark-agent.sh)<br>[packages/smoke-tests/package.json](../../../../sources/getsentry__sentry-mcp/packages/smoke-tests/package.json)<br>[packages/smoke-tests/vitest.config.ts](../../../../sources/getsentry__sentry-mcp/packages/smoke-tests/vitest.config.ts)<br>[packages/smoke-tests/src/smoke.test.ts](../../../../sources/getsentry__sentry-mcp/packages/smoke-tests/src/smoke.test.ts)<br>[packages/mcp-test-client/.env.test](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/.env.test)<br>[packages/mcp-test-client/.gitignore](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/.gitignore) |
| CI workflow | 8 | [.github/workflows/deploy.yml](../../../../sources/getsentry__sentry-mcp/.github/workflows/deploy.yml)<br>[.github/workflows/eval.yml](../../../../sources/getsentry__sentry-mcp/.github/workflows/eval.yml)<br>[.github/workflows/mcp-server-package.yml](../../../../sources/getsentry__sentry-mcp/.github/workflows/mcp-server-package.yml)<br>[.github/workflows/merge-jobs.yml](../../../../sources/getsentry__sentry-mcp/.github/workflows/merge-jobs.yml)<br>[.github/workflows/release.yml](../../../../sources/getsentry__sentry-mcp/.github/workflows/release.yml)<br>[.github/workflows/smoke-tests.yml](../../../../sources/getsentry__sentry-mcp/.github/workflows/smoke-tests.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 46 | [packages/mcp-test-client/src/auth/config.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/src/auth/config.ts)<br>[packages/mcp-test-client/src/auth/oauth.test.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/src/auth/oauth.test.ts)<br>[packages/mcp-test-client/src/auth/oauth.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-test-client/src/auth/oauth.ts)<br>[packages/mcp-server/src/cli/commands/auth.test.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server/src/cli/commands/auth.test.ts)<br>[packages/mcp-server/src/cli/commands/auth.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server/src/cli/commands/auth.ts)<br>[packages/mcp-server/src/auth/constants.ts](../../../../sources/getsentry__sentry-mcp/packages/mcp-server/src/auth/constants.ts) |
| 에이전트 지시문 | 9 | [AGENTS.md](../../../../sources/getsentry__sentry-mcp/AGENTS.md)<br>[packages/mcp-core/src/internal/agents/tools/data/CLAUDE.md](../../../../sources/getsentry__sentry-mcp/packages/mcp-core/src/internal/agents/tools/data/CLAUDE.md)<br>[packages/agent-cli-test/projects/stdio/.codex/config.toml](../../../../sources/getsentry__sentry-mcp/packages/agent-cli-test/projects/stdio/.codex/config.toml)<br>[.codex/config.toml](../../../../sources/getsentry__sentry-mcp/.codex/config.toml)<br>[.codex/skills/openspec-sync-specs/SKILL.md](../../../../sources/getsentry__sentry-mcp/.codex/skills/openspec-sync-specs/SKILL.md)<br>[.codex/skills/openspec-propose/SKILL.md](../../../../sources/getsentry__sentry-mcp/.codex/skills/openspec-propose/SKILL.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `benchmark-agent.sh`, `packages/smoke-tests/package.json`, `packages/smoke-tests/vitest.config.ts`.
2. entrypoint를 따라 실행 흐름 확인: `packages/mcp-test-client/src/index.ts`, `packages/mcp-server-mocks/src/index.ts`, `packages/mcp-server-evals/src/bin/start-mock-stdio.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `agents.toml`, `plugins/sentry-mcp-experimental/agents/sentry-mcp.md`.
4. retrieval/memory/indexing 확인: `packages/mcp-test-client/src/index.ts`, `packages/mcp-server-mocks/src/index.ts`, `packages/mcp-server-mocks/src/fixtures/profile-chunk.json`.
5. test/eval 파일로 동작 검증: `benchmark-agent.sh`, `packages/smoke-tests/package.json`, `packages/smoke-tests/vitest.config.ts`.

## 기존 레포 인사이트

평가/관측/품질 관점에서 An MCP server for interacting with Sentry via LLMs.. 핵심 구조 신호는 TypeScript, package.json, Makefile, README.md, AGENTS.md, tests이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 평가/관측/품질 레포입니다. 활용 관점은 품질/평가 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
