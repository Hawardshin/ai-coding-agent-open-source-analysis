# theopenco/llmgateway 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Route, manage, and analyze your LLM requests across multiple providers with a unified API interface.

## 요약

- 조사 단위: `sources/theopenco__llmgateway` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,536 files, 427 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, apps/ui/src/components/mcp/mcp-content.tsx, apps/ui/src/app/mcp/page.tsx이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | theopenco/llmgateway |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 1316 |
| Forks | 144 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/theopenco__llmgateway](../../../../sources/theopenco__llmgateway) |
| 기존 보고서 | [reports/global-trending/repositories/theopenco__llmgateway.md](../../../global-trending/repositories/theopenco__llmgateway.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2536 / 427 |
| 관측 최대 깊이 | 11 |
| 상위 디렉터리 | .agents, .claude, .devcontainer, .github, .husky, .run, apps, ee, http, infra, legal, packages, scripts, sql, vitest |
| 상위 확장자 | .tsx: 782, .ts: 628, .png: 292, .json: 242, .sql: 169, .md: 137, .mdx: 84, (none): 36, .yaml: 27, .mjs: 26, .svg: 26, .sh: 21 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| apps/ui | apps workspace | 63 |
| apps/docs | apps workspace | 40 |
| packages/shared | packages workspace | 29 |
| apps/worker | apps workspace | 27 |
| apps/playground | apps workspace | 24 |
| packages/actions | packages workspace | 20 |
| packages/models | packages workspace | 14 |
| packages/db | packages workspace | 11 |
| packages/instrumentation | packages workspace | 11 |
| apps/api | apps workspace | 6 |
| apps/gateway | apps workspace | 6 |
| packages/cache | packages workspace | 6 |
| packages/logger | packages workspace | 6 |
| packages/scripts | packages workspace | 5 |
| apps/code | apps workspace | 2 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | TURBO_TOKEN=turbotokenoss turbo run build 2>&1 |
| build | package.json | build:ci | TURBO_TOKEN=turbotokenoss turbo run build --concurrency=1 2>&1 |
| build | package.json | build:core | TURBO_TOKEN=turbotokenoss turbo run build --filter=!ui --filter=!docs --filter=!playground --filter=!admin --filter=!code |
| serve-dev | package.json | clean | find . -path "./node_modules" -prune -o \( -type d -name "dist" -o -name ".turbo" -o -name ".source" -o -name ".vercel" -o -name ".out" -o -name ".next-dev" -o -name ".next" \) -exec rm -rf {} + |
| quality | package.json | clean:node_modules | find . -type d -name "node_modules" -exec rm -rf {} + |
| serve-dev | package.json | dev | turbo run dev |
| quality | package.json | format | turbo run format 2>&1 |
| utility | package.json | postinstall | husky |
| quality | package.json | lint | turbo run lint |
| utility | package.json | migrate | pnpm --filter db migrate |
| utility | package.json | migrations | pnpm --filter db migrations |
| serve-dev | package.json | prepare-codex | mv ~/.nvm ~/.nvm-bak && export PATH="${ASDF_DATA_DIR:-$HOME/.asdf}/shims:$PATH" && . ~/.bashrc && sudo service postgresql start && sudo service redis-server start && sleep 20 && pnpm sync |
| test | package.json | push | pnpm push-dev && pnpm push-test |
| serve-dev | package.json | push-dev | pnpm --filter db push |
| test | package.json | push-test | DATABASE_URL=${DATABASE_URL:-postgres://postgres:pw@localhost:5432/test} pnpm --filter db push |
| utility | package.json | seed | pnpm --filter db seed |
| test | package.json | setup | pnpm build:core && docker compose down -v && docker compose up -d && sleep 5 && pnpm push-test && pnpm push-dev && pnpm seed |
| test | package.json | sync | pnpm push-dev; pnpm push-test |
| utility | package.json | stripe:listen | stripe listen --api-key "$(grep -E '^STRIPE_SECRET_KEY=' .env \| head -1 \| cut -d= -f2-)" --forward-to localhost:4002/stripe/webhook |
| test | package.json | test:e2e | pnpm build:core && E2E_TEST=true vitest run -c vitest/vitest.e2e.config.mts --no-file-parallelism |
| test | package.json | test:unit | pnpm build:core && vitest run --no-file-parallelism |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | react |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [.mcp.json](../../../../sources/theopenco__llmgateway/.mcp.json) | mcp signal |
| mcp | [apps/ui/src/components/mcp/mcp-content.tsx](../../../../sources/theopenco__llmgateway/apps/ui/src/components/mcp/mcp-content.tsx) | mcp signal |
| mcp | [apps/ui/src/app/mcp/page.tsx](../../../../sources/theopenco__llmgateway/apps/ui/src/app/mcp/page.tsx) | mcp signal |
| mcp | [apps/playground/src/components/playground/mcp-servers-dialog.tsx](../../../../sources/theopenco__llmgateway/apps/playground/src/components/playground/mcp-servers-dialog.tsx) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/theopenco__llmgateway/AGENTS.md) | agentRuntime signal |
| agentRuntime | [skills-lock.json](../../../../sources/theopenco__llmgateway/skills-lock.json) | agentRuntime signal |
| agentRuntime | [packages/shared/src/hooks/use-mobile.ts](../../../../sources/theopenco__llmgateway/packages/shared/src/hooks/use-mobile.ts) | agentRuntime signal |
| agentRuntime | [ee/admin/src/hooks/use-mobile.ts](../../../../sources/theopenco__llmgateway/ee/admin/src/hooks/use-mobile.ts) | agentRuntime signal |
| entrypoints | [packages/shared/src/index.ts](../../../../sources/theopenco__llmgateway/packages/shared/src/index.ts) | entrypoints signal |
| entrypoints | [packages/models/src/index.ts](../../../../sources/theopenco__llmgateway/packages/models/src/index.ts) | entrypoints signal |
| entrypoints | [packages/logger/src/index.ts](../../../../sources/theopenco__llmgateway/packages/logger/src/index.ts) | entrypoints signal |
| entrypoints | [packages/instrumentation/src/index.spec.ts](../../../../sources/theopenco__llmgateway/packages/instrumentation/src/index.spec.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1185 | [packages/shared/src/index.ts](../../../../sources/theopenco__llmgateway/packages/shared/src/index.ts)<br>[packages/models/src/index.ts](../../../../sources/theopenco__llmgateway/packages/models/src/index.ts)<br>[packages/logger/src/index.ts](../../../../sources/theopenco__llmgateway/packages/logger/src/index.ts)<br>[packages/instrumentation/src/index.spec.ts](../../../../sources/theopenco__llmgateway/packages/instrumentation/src/index.spec.ts)<br>[packages/instrumentation/src/index.ts](../../../../sources/theopenco__llmgateway/packages/instrumentation/src/index.ts)<br>[packages/db/src/index.ts](../../../../sources/theopenco__llmgateway/packages/db/src/index.ts)<br>[packages/cache/src/index.ts](../../../../sources/theopenco__llmgateway/packages/cache/src/index.ts)<br>[packages/actions/src/index.ts](../../../../sources/theopenco__llmgateway/packages/actions/src/index.ts) |
| agentRuntime | 141 | [AGENTS.md](../../../../sources/theopenco__llmgateway/AGENTS.md)<br>[skills-lock.json](../../../../sources/theopenco__llmgateway/skills-lock.json)<br>[packages/shared/src/hooks/use-mobile.ts](../../../../sources/theopenco__llmgateway/packages/shared/src/hooks/use-mobile.ts)<br>[ee/admin/src/hooks/use-mobile.ts](../../../../sources/theopenco__llmgateway/ee/admin/src/hooks/use-mobile.ts)<br>[ee/admin/src/hooks/useUser.ts](../../../../sources/theopenco__llmgateway/ee/admin/src/hooks/useUser.ts)<br>[apps/ui/src/hooks/use-mobile.ts](../../../../sources/theopenco__llmgateway/apps/ui/src/hooks/use-mobile.ts)<br>[apps/ui/src/hooks/useApiKey.ts](../../../../sources/theopenco__llmgateway/apps/ui/src/hooks/useApiKey.ts)<br>[apps/ui/src/hooks/useChats.ts](../../../../sources/theopenco__llmgateway/apps/ui/src/hooks/useChats.ts) |
| mcp | 6 | [.mcp.json](../../../../sources/theopenco__llmgateway/.mcp.json)<br>[apps/ui/src/components/mcp/mcp-content.tsx](../../../../sources/theopenco__llmgateway/apps/ui/src/components/mcp/mcp-content.tsx)<br>[apps/ui/src/app/mcp/page.tsx](../../../../sources/theopenco__llmgateway/apps/ui/src/app/mcp/page.tsx)<br>[apps/playground/src/components/playground/mcp-servers-dialog.tsx](../../../../sources/theopenco__llmgateway/apps/playground/src/components/playground/mcp-servers-dialog.tsx)<br>[apps/gateway/src/mcp/mcp.ts](../../../../sources/theopenco__llmgateway/apps/gateway/src/mcp/mcp.ts)<br>[apps/docs/content/guides/mcp.mdx](../../../../sources/theopenco__llmgateway/apps/docs/content/guides/mcp.mdx) |
| retrieval | 25 | [packages/shared/src/index.ts](../../../../sources/theopenco__llmgateway/packages/shared/src/index.ts)<br>[packages/shared/src/components/index.tsx](../../../../sources/theopenco__llmgateway/packages/shared/src/components/index.tsx)<br>[packages/shared/src/components/ui/index.tsx](../../../../sources/theopenco__llmgateway/packages/shared/src/components/ui/index.tsx)<br>[packages/models/src/index.ts](../../../../sources/theopenco__llmgateway/packages/models/src/index.ts)<br>[packages/logger/src/index.ts](../../../../sources/theopenco__llmgateway/packages/logger/src/index.ts)<br>[packages/instrumentation/src/index.spec.ts](../../../../sources/theopenco__llmgateway/packages/instrumentation/src/index.spec.ts)<br>[packages/instrumentation/src/index.ts](../../../../sources/theopenco__llmgateway/packages/instrumentation/src/index.ts)<br>[packages/db/src/index.ts](../../../../sources/theopenco__llmgateway/packages/db/src/index.ts) |
| spec | 124 | [packages/shared/src/avalanche.spec.ts](../../../../sources/theopenco__llmgateway/packages/shared/src/avalanche.spec.ts)<br>[packages/shared/src/coding-agents.spec.ts](../../../../sources/theopenco__llmgateway/packages/shared/src/coding-agents.spec.ts)<br>[packages/shared/src/content-filter.spec.ts](../../../../sources/theopenco__llmgateway/packages/shared/src/content-filter.spec.ts)<br>[packages/shared/src/dev-plans.spec.ts](../../../../sources/theopenco__llmgateway/packages/shared/src/dev-plans.spec.ts)<br>[packages/shared/src/fees.spec.ts](../../../../sources/theopenco__llmgateway/packages/shared/src/fees.spec.ts)<br>[packages/shared/src/gcs.spec.ts](../../../../sources/theopenco__llmgateway/packages/shared/src/gcs.spec.ts)<br>[packages/shared/src/load-balance.spec.ts](../../../../sources/theopenco__llmgateway/packages/shared/src/load-balance.spec.ts)<br>[packages/shared/src/model-categories.spec.ts](../../../../sources/theopenco__llmgateway/packages/shared/src/model-categories.spec.ts) |
| eval | 146 | [vitest/test-database-setup.ts](../../../../sources/theopenco__llmgateway/vitest/test-database-setup.ts)<br>[scripts/benchmark.sh](../../../../sources/theopenco__llmgateway/scripts/benchmark.sh)<br>[scripts/test-ai-sdk.ts](../../../../sources/theopenco__llmgateway/scripts/test-ai-sdk.ts)<br>[scripts/test-openai-sdk.sh](../../../../sources/theopenco__llmgateway/scripts/test-openai-sdk.sh)<br>[packages/shared/src/avalanche.spec.ts](../../../../sources/theopenco__llmgateway/packages/shared/src/avalanche.spec.ts)<br>[packages/shared/src/coding-agents.spec.ts](../../../../sources/theopenco__llmgateway/packages/shared/src/coding-agents.spec.ts)<br>[packages/shared/src/content-filter.spec.ts](../../../../sources/theopenco__llmgateway/packages/shared/src/content-filter.spec.ts)<br>[packages/shared/src/dev-plans.spec.ts](../../../../sources/theopenco__llmgateway/packages/shared/src/dev-plans.spec.ts) |
| security | 58 | [packages/models/src/compliance.spec.ts](../../../../sources/theopenco__llmgateway/packages/models/src/compliance.spec.ts)<br>[packages/db/migrations/1753733527_secret_spyke.sql](../../../../sources/theopenco__llmgateway/packages/db/migrations/1753733527_secret_spyke.sql)<br>[legal/DATA_RETENTION_POLICY.md](../../../../sources/theopenco__llmgateway/legal/DATA_RETENTION_POLICY.md)<br>[infra/helm/llmgateway/templates/secret.yaml](../../../../sources/theopenco__llmgateway/infra/helm/llmgateway/templates/secret.yaml)<br>[ee/audit/.lintstagedrc.json](../../../../sources/theopenco__llmgateway/ee/audit/.lintstagedrc.json)<br>[ee/audit/.prettierignore](../../../../sources/theopenco__llmgateway/ee/audit/.prettierignore)<br>[ee/audit/eslint.config.mjs](../../../../sources/theopenco__llmgateway/ee/audit/eslint.config.mjs)<br>[ee/audit/package.json](../../../../sources/theopenco__llmgateway/ee/audit/package.json) |
| ci | 8 | [.github/workflows/autofix.yml](../../../../sources/theopenco__llmgateway/.github/workflows/autofix.yml)<br>[.github/workflows/ci.yml](../../../../sources/theopenco__llmgateway/.github/workflows/ci.yml)<br>[.github/workflows/e2e.yml](../../../../sources/theopenco__llmgateway/.github/workflows/e2e.yml)<br>[.github/workflows/image-actions.yml](../../../../sources/theopenco__llmgateway/.github/workflows/image-actions.yml)<br>[.github/workflows/images.yml](../../../../sources/theopenco__llmgateway/.github/workflows/images.yml)<br>[.github/workflows/pr.yml](../../../../sources/theopenco__llmgateway/.github/workflows/pr.yml)<br>[.github/workflows/publish.yml](../../../../sources/theopenco__llmgateway/.github/workflows/publish.yml)<br>[.github/workflows/run.yml](../../../../sources/theopenco__llmgateway/.github/workflows/run.yml) |
| container | 32 | [docker-compose.yml](../../../../sources/theopenco__llmgateway/docker-compose.yml)<br>[infra/docker-compose.split.local.yml](../../../../sources/theopenco__llmgateway/infra/docker-compose.split.local.yml)<br>[infra/docker-compose.split.yml](../../../../sources/theopenco__llmgateway/infra/docker-compose.split.yml)<br>[infra/docker-compose.unified.local.yml](../../../../sources/theopenco__llmgateway/infra/docker-compose.unified.local.yml)<br>[infra/docker-compose.unified.yml](../../../../sources/theopenco__llmgateway/infra/docker-compose.unified.yml)<br>[infra/helm/README.md](../../../../sources/theopenco__llmgateway/infra/helm/README.md)<br>[infra/helm/llmgateway/Chart.yaml](../../../../sources/theopenco__llmgateway/infra/helm/llmgateway/Chart.yaml)<br>[infra/helm/llmgateway/values.yaml](../../../../sources/theopenco__llmgateway/infra/helm/llmgateway/values.yaml) |
| instruction | 2 | [AGENTS.md](../../../../sources/theopenco__llmgateway/AGENTS.md)<br>[apps/docs/content/learn/agents.mdx](../../../../sources/theopenco__llmgateway/apps/docs/content/learn/agents.mdx) |
| docs | 257 | [README.md](../../../../sources/theopenco__llmgateway/README.md)<br>[packages/models/README.md](../../../../sources/theopenco__llmgateway/packages/models/README.md)<br>[packages/instrumentation/README.md](../../../../sources/theopenco__llmgateway/packages/instrumentation/README.md)<br>[infra/helm/README.md](../../../../sources/theopenco__llmgateway/infra/helm/README.md)<br>[ee/README.md](../../../../sources/theopenco__llmgateway/ee/README.md)<br>[ee/admin/README.md](../../../../sources/theopenco__llmgateway/ee/admin/README.md)<br>[apps/playground/README.md](../../../../sources/theopenco__llmgateway/apps/playground/README.md)<br>[apps/docs/.gitignore](../../../../sources/theopenco__llmgateway/apps/docs/.gitignore) |
| config | 40 | [package.json](../../../../sources/theopenco__llmgateway/package.json)<br>[pnpm-workspace.yaml](../../../../sources/theopenco__llmgateway/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/theopenco__llmgateway/tsconfig.json)<br>[turbo.json](../../../../sources/theopenco__llmgateway/turbo.json)<br>[packages/shared/package.json](../../../../sources/theopenco__llmgateway/packages/shared/package.json)<br>[packages/shared/tsconfig.json](../../../../sources/theopenco__llmgateway/packages/shared/tsconfig.json)<br>[packages/scripts/package.json](../../../../sources/theopenco__llmgateway/packages/scripts/package.json)<br>[packages/scripts/tsconfig.json](../../../../sources/theopenco__llmgateway/packages/scripts/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 146 | [vitest/test-database-setup.ts](../../../../sources/theopenco__llmgateway/vitest/test-database-setup.ts)<br>[scripts/benchmark.sh](../../../../sources/theopenco__llmgateway/scripts/benchmark.sh)<br>[scripts/test-ai-sdk.ts](../../../../sources/theopenco__llmgateway/scripts/test-ai-sdk.ts)<br>[scripts/test-openai-sdk.sh](../../../../sources/theopenco__llmgateway/scripts/test-openai-sdk.sh)<br>[packages/shared/src/avalanche.spec.ts](../../../../sources/theopenco__llmgateway/packages/shared/src/avalanche.spec.ts)<br>[packages/shared/src/coding-agents.spec.ts](../../../../sources/theopenco__llmgateway/packages/shared/src/coding-agents.spec.ts) |
| CI workflow | 8 | [.github/workflows/autofix.yml](../../../../sources/theopenco__llmgateway/.github/workflows/autofix.yml)<br>[.github/workflows/ci.yml](../../../../sources/theopenco__llmgateway/.github/workflows/ci.yml)<br>[.github/workflows/e2e.yml](../../../../sources/theopenco__llmgateway/.github/workflows/e2e.yml)<br>[.github/workflows/image-actions.yml](../../../../sources/theopenco__llmgateway/.github/workflows/image-actions.yml)<br>[.github/workflows/images.yml](../../../../sources/theopenco__llmgateway/.github/workflows/images.yml)<br>[.github/workflows/pr.yml](../../../../sources/theopenco__llmgateway/.github/workflows/pr.yml) |
| 컨테이너/배포 | 32 | [docker-compose.yml](../../../../sources/theopenco__llmgateway/docker-compose.yml)<br>[infra/docker-compose.split.local.yml](../../../../sources/theopenco__llmgateway/infra/docker-compose.split.local.yml)<br>[infra/docker-compose.split.yml](../../../../sources/theopenco__llmgateway/infra/docker-compose.split.yml)<br>[infra/docker-compose.unified.local.yml](../../../../sources/theopenco__llmgateway/infra/docker-compose.unified.local.yml)<br>[infra/docker-compose.unified.yml](../../../../sources/theopenco__llmgateway/infra/docker-compose.unified.yml)<br>[infra/helm/README.md](../../../../sources/theopenco__llmgateway/infra/helm/README.md) |
| 보안/정책 | 58 | [packages/models/src/compliance.spec.ts](../../../../sources/theopenco__llmgateway/packages/models/src/compliance.spec.ts)<br>[packages/db/migrations/1753733527_secret_spyke.sql](../../../../sources/theopenco__llmgateway/packages/db/migrations/1753733527_secret_spyke.sql)<br>[legal/DATA_RETENTION_POLICY.md](../../../../sources/theopenco__llmgateway/legal/DATA_RETENTION_POLICY.md)<br>[infra/helm/llmgateway/templates/secret.yaml](../../../../sources/theopenco__llmgateway/infra/helm/llmgateway/templates/secret.yaml)<br>[ee/audit/.lintstagedrc.json](../../../../sources/theopenco__llmgateway/ee/audit/.lintstagedrc.json)<br>[ee/audit/.prettierignore](../../../../sources/theopenco__llmgateway/ee/audit/.prettierignore) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/theopenco__llmgateway/AGENTS.md)<br>[apps/docs/content/learn/agents.mdx](../../../../sources/theopenco__llmgateway/apps/docs/content/learn/agents.mdx) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `.mcp.json`, `apps/ui/src/components/mcp/mcp-content.tsx`, `apps/ui/src/app/mcp/page.tsx`.
2. entrypoint를 따라 실행 흐름 확인: `packages/shared/src/index.ts`, `packages/models/src/index.ts`, `packages/logger/src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `skills-lock.json`, `packages/shared/src/hooks/use-mobile.ts`.
4. retrieval/memory/indexing 확인: `packages/shared/src/index.ts`, `packages/shared/src/components/index.tsx`, `packages/shared/src/components/ui/index.tsx`.
5. test/eval 파일로 동작 검증: `vitest/test-database-setup.ts`, `scripts/benchmark.sh`, `scripts/test-ai-sdk.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Route, manage, and analyze your LLM requests across multiple providers with a unified API interface.. 핵심 구조 신호는 TypeScript, package.json, docker-compose.yml, README.md, AGENTS.md, LICENSE이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
