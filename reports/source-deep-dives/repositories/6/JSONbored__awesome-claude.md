# JSONbored/awesome-claude 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

HeyClaude is a curated registry and distribution surface for Claude and AI-workflow assets: agents, MCP servers, skills, commands, hooks, rules, guides, tools, jobs, Raycast feeds, static data exports, and an npm MCP package.

## 요약

- 조사 단위: `sources/JSONbored__awesome-claude` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,954 files, 84 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/mcp-cli.test.ts, tests/mcp-config-validator.test.ts, tests/mcp-http-route.test.ts이고, 의존성 단서는 claude, react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | JSONbored/awesome-claude |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | MDX |
| Stars | 265 |
| Forks | 79 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/JSONbored__awesome-claude](../../../../sources/JSONbored__awesome-claude) |
| 기존 보고서 | [reports/global-trending/repositories/JSONbored__awesome-claude.md](../../../global-trending/repositories/JSONbored__awesome-claude.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1954 / 84 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .devcontainer, .github, .husky, .trunk, apps, cloudflare, content, docs, examples, integrations, packages, scripts, tests |
| 상위 확장자 | .mdx: 1150, .ts: 270, .tsx: 177, .zip: 68, .mcpb: 41, .mjs: 41, .md: 36, .js: 33, .woff2: 32, .sql: 22, .json: 20, .yml: 19 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 57 |
| apps/web | apps workspace | 49 |
| docs | documentation surface | 26 |
| packages/mcp | packages workspace | 25 |
| packages/registry | packages workspace | 10 |
| examples/content | examples workspace | 5 |
| apps/submission-gate | apps workspace | 2 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| cloudflare | top-level component | 1 |
| content | top-level component | 1 |
| examples | top-level component | 1 |
| integrations | top-level component | 1 |
| packages | source boundary | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | pnpm --filter web dev |
| build | package.json | build | pnpm --filter web build |
| utility | package.json | preview | pnpm --filter web preview |
| serve-dev | package.json | deploy:dev | pnpm --filter web run deploy:dev |
| utility | package.json | deploy:prod | pnpm --filter web run deploy:prod |
| quality | package.json | type-check | pnpm --filter web type-check |
| utility | package.json | validate:content | node scripts/validate-content.mjs |
| utility | package.json | validate:content:strict | node scripts/validate-content.mjs --strict-recommended |
| test | package.json | validate:category-spec | node scripts/validate-category-spec.mjs |
| utility | package.json | validate:packages | node scripts/validate-download-packages.mjs |
| utility | package.json | scan:packages | node scripts/scan-download-packages.mjs |
| utility | package.json | validate:raycast-feed | node scripts/validate-raycast-feed.mjs |
| build | package.json | generate:registry | node scripts/build-content-index.mjs |
| utility | package.json | brand:enrich | node scripts/enrich-brand-assets.mjs |
| utility | package.json | validate:deployment-artifacts | node scripts/validate-deployment-artifacts.mjs |
| utility | package.json | validate:clean | node scripts/validate-codebase-clean.mjs |
| build | package.json | validate:web-build-log | node scripts/validate-web-build-log.mjs |
| utility | package.json | generate:openapi | tsx scripts/generate-openapi.ts |
| quality | package.json | validate:openapi | tsx scripts/generate-openapi.ts --check |
| utility | package.json | validate:d1-jobs | node scripts/validate-d1-jobs.mjs |
| utility | package.json | validate:tasks | node scripts/validate-tasks.mjs |
| utility | package.json | indexnow:submit | node scripts/submit-indexnow.mjs |
| utility | package.json | brief:weekly | node scripts/generate-weekly-brief.mjs |
| serve-dev | package.json | mcp:start | pnpm --filter @heyclaude/mcp start |
| serve-dev | package.json | mcp:start:local | pnpm --filter @heyclaude/mcp start:local |
| utility | package.json | validate:mcp-endpoint | pnpm --filter @heyclaude/mcp validate:endpoint |
| utility | package.json | validate:mcp-package | pnpm --filter @heyclaude/mcp validate:package |
| build | package.json | check:mcp-release | node scripts/check-mcp-release-due.mjs --json |
| build | package.json | check:raycast-release | node scripts/check-raycast-release-due.mjs --json |
| test | package.json | test:mcp | vitest run tests/mcp-server.test.ts tests/mcp-cli.test.ts |
| utility | package.json | submission:risk | node scripts/analyze-submission-risk.mjs |
| utility | package.json | submission-gate:deploy:prod | pnpm --filter @heyclaude/submission-gate run deploy:prod |
| utility | package.json | submission-gate:dry-run | pnpm --filter @heyclaude/submission-gate run deploy:dry-run:prod |
| utility | package.json | submission-gate:dry-run:prod | pnpm --filter @heyclaude/submission-gate run deploy:dry-run:prod |
| test | package.json | test | vitest run |
| test | package.json | test:coverage | vitest run --coverage |
| test | package.json | test:seo-jsonld | vitest run tests/seo-jsonld.test.ts |
| test | package.json | test:commercial-intake | vitest run tests/commercial-intake.test.ts |
| test | package.json | test:registry-artifacts | pnpm --filter web run prebuild && vitest run tests/registry-artifacts.test.ts |
| test | package.json | test:submission-pr-first | vitest run tests/submission-pr-first.test.ts |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | claude |
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
| mcp | [tests/mcp-cli.test.ts](../../../../sources/JSONbored__awesome-claude/tests/mcp-cli.test.ts) | mcp signal |
| mcp | [tests/mcp-config-validator.test.ts](../../../../sources/JSONbored__awesome-claude/tests/mcp-config-validator.test.ts) | mcp signal |
| mcp | [tests/mcp-http-route.test.ts](../../../../sources/JSONbored__awesome-claude/tests/mcp-http-route.test.ts) | mcp signal |
| mcp | [tests/mcp-install-config.test.ts](../../../../sources/JSONbored__awesome-claude/tests/mcp-install-config.test.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/JSONbored__awesome-claude/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/skill-package-validator.test.ts](../../../../sources/JSONbored__awesome-claude/tests/skill-package-validator.test.ts) | agentRuntime signal |
| agentRuntime | [examples/content/agent.example.mdx](../../../../sources/JSONbored__awesome-claude/examples/content/agent.example.mdx) | agentRuntime signal |
| agentRuntime | [examples/content/hook.example.mdx](../../../../sources/JSONbored__awesome-claude/examples/content/hook.example.mdx) | agentRuntime signal |
| entrypoints | [packages/registry/src/index.d.ts](../../../../sources/JSONbored__awesome-claude/packages/registry/src/index.d.ts) | entrypoints signal |
| entrypoints | [packages/registry/src/index.js](../../../../sources/JSONbored__awesome-claude/packages/registry/src/index.js) | entrypoints signal |
| entrypoints | [packages/mcp/src/cli.js](../../../../sources/JSONbored__awesome-claude/packages/mcp/src/cli.js) | entrypoints signal |
| entrypoints | [packages/mcp/src/server.d.ts](../../../../sources/JSONbored__awesome-claude/packages/mcp/src/server.d.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 327 | [packages/registry/src/index.d.ts](../../../../sources/JSONbored__awesome-claude/packages/registry/src/index.d.ts)<br>[packages/registry/src/index.js](../../../../sources/JSONbored__awesome-claude/packages/registry/src/index.js)<br>[packages/mcp/src/cli.js](../../../../sources/JSONbored__awesome-claude/packages/mcp/src/cli.js)<br>[packages/mcp/src/server.d.ts](../../../../sources/JSONbored__awesome-claude/packages/mcp/src/server.d.ts)<br>[packages/mcp/src/server.js](../../../../sources/JSONbored__awesome-claude/packages/mcp/src/server.js)<br>[apps/web/src/router.tsx](../../../../sources/JSONbored__awesome-claude/apps/web/src/router.tsx)<br>[apps/web/src/server.ts](../../../../sources/JSONbored__awesome-claude/apps/web/src/server.ts)<br>[apps/web/src/start.ts](../../../../sources/JSONbored__awesome-claude/apps/web/src/start.ts) |
| agentRuntime | 565 | [AGENTS.md](../../../../sources/JSONbored__awesome-claude/AGENTS.md)<br>[tests/skill-package-validator.test.ts](../../../../sources/JSONbored__awesome-claude/tests/skill-package-validator.test.ts)<br>[examples/content/agent.example.mdx](../../../../sources/JSONbored__awesome-claude/examples/content/agent.example.mdx)<br>[examples/content/hook.example.mdx](../../../../sources/JSONbored__awesome-claude/examples/content/hook.example.mdx)<br>[examples/content/skill.example.mdx](../../../../sources/JSONbored__awesome-claude/examples/content/skill.example.mdx)<br>[docs/agent-discovery.md](../../../../sources/JSONbored__awesome-claude/docs/agent-discovery.md)<br>[content/tools/.gitkeep](../../../../sources/JSONbored__awesome-claude/content/tools/.gitkeep)<br>[content/tools/activepieces.mdx](../../../../sources/JSONbored__awesome-claude/content/tools/activepieces.mdx) |
| mcp | 519 | [tests/mcp-cli.test.ts](../../../../sources/JSONbored__awesome-claude/tests/mcp-cli.test.ts)<br>[tests/mcp-config-validator.test.ts](../../../../sources/JSONbored__awesome-claude/tests/mcp-config-validator.test.ts)<br>[tests/mcp-http-route.test.ts](../../../../sources/JSONbored__awesome-claude/tests/mcp-http-route.test.ts)<br>[tests/mcp-install-config.test.ts](../../../../sources/JSONbored__awesome-claude/tests/mcp-install-config.test.ts)<br>[tests/mcp-remote-proxy.test.ts](../../../../sources/JSONbored__awesome-claude/tests/mcp-remote-proxy.test.ts)<br>[tests/mcp-server.test.ts](../../../../sources/JSONbored__awesome-claude/tests/mcp-server.test.ts)<br>[tests/mcp-submission-duplicate-urls.test.ts](../../../../sources/JSONbored__awesome-claude/tests/mcp-submission-duplicate-urls.test.ts)<br>[scripts/check-mcp-release-due.mjs](../../../../sources/JSONbored__awesome-claude/scripts/check-mcp-release-due.mjs) |
| retrieval | 29 | [scripts/build-content-index.mjs](../../../../sources/JSONbored__awesome-claude/scripts/build-content-index.mjs)<br>[packages/registry/src/index.d.ts](../../../../sources/JSONbored__awesome-claude/packages/registry/src/index.d.ts)<br>[packages/registry/src/index.js](../../../../sources/JSONbored__awesome-claude/packages/registry/src/index.js)<br>[content/skills/agent-skills-retrieval-source-verification-capability-pack.mdx](../../../../sources/JSONbored__awesome-claude/content/skills/agent-skills-retrieval-source-verification-capability-pack.mdx)<br>[content/skills/markdown-knowledge-base-composer.mdx](../../../../sources/JSONbored__awesome-claude/content/skills/markdown-knowledge-base-composer.mdx)<br>[content/skills/markdown-knowledge-base-composer.zip](../../../../sources/JSONbored__awesome-claude/content/skills/markdown-knowledge-base-composer.zip)<br>[content/mcp/basic-memory-mcp-server.mdx](../../../../sources/JSONbored__awesome-claude/content/mcp/basic-memory-mcp-server.mdx)<br>[content/mcp/code-index-mcp-server.mdx](../../../../sources/JSONbored__awesome-claude/content/mcp/code-index-mcp-server.mdx) |
| spec | 12 | [scripts/validate-category-spec.mjs](../../../../sources/JSONbored__awesome-claude/scripts/validate-category-spec.mjs)<br>[packages/registry/src/category-spec.js](../../../../sources/JSONbored__awesome-claude/packages/registry/src/category-spec.js)<br>[packages/registry/src/category-spec.json](../../../../sources/JSONbored__awesome-claude/packages/registry/src/category-spec.json)<br>[packages/registry/src/submission-spec.js](../../../../sources/JSONbored__awesome-claude/packages/registry/src/submission-spec.js)<br>[docs/architecture/atlas-registry-sharding.md](../../../../sources/JSONbored__awesome-claude/docs/architecture/atlas-registry-sharding.md)<br>[content/rules/api-design-expert.mdx](../../../../sources/JSONbored__awesome-claude/content/rules/api-design-expert.mdx)<br>[content/mcp/meigen-ai-design-mcp-server.mdx](../../../../sources/JSONbored__awesome-claude/content/mcp/meigen-ai-design-mcp-server.mdx)<br>[content/mcp/spec-workflow-mcp-server.mdx](../../../../sources/JSONbored__awesome-claude/content/mcp/spec-workflow-mcp-server.mdx) |
| eval | 128 | [tests/api-contracts.test.ts](../../../../sources/JSONbored__awesome-claude/tests/api-contracts.test.ts)<br>[tests/api-router-security.test.ts](../../../../sources/JSONbored__awesome-claude/tests/api-router-security.test.ts)<br>[tests/artifact-path-safety.test.ts](../../../../sources/JSONbored__awesome-claude/tests/artifact-path-safety.test.ts)<br>[tests/atlas-production-data.test.ts](../../../../sources/JSONbored__awesome-claude/tests/atlas-production-data.test.ts)<br>[tests/audit-seo-snippets.test.ts](../../../../sources/JSONbored__awesome-claude/tests/audit-seo-snippets.test.ts)<br>[tests/clamp-description.test.ts](../../../../sources/JSONbored__awesome-claude/tests/clamp-description.test.ts)<br>[tests/classify-pr-changes.test.ts](../../../../sources/JSONbored__awesome-claude/tests/classify-pr-changes.test.ts)<br>[tests/cleanup-policy.test.ts](../../../../sources/JSONbored__awesome-claude/tests/cleanup-policy.test.ts) |
| security | 79 | [SECURITY.md](../../../../sources/JSONbored__awesome-claude/SECURITY.md)<br>[tests/api-router-security.test.ts](../../../../sources/JSONbored__awesome-claude/tests/api-router-security.test.ts)<br>[tests/audit-seo-snippets.test.ts](../../../../sources/JSONbored__awesome-claude/tests/audit-seo-snippets.test.ts)<br>[tests/cleanup-policy.test.ts](../../../../sources/JSONbored__awesome-claude/tests/cleanup-policy.test.ts)<br>[tests/content-policy-validation.test.ts](../../../../sources/JSONbored__awesome-claude/tests/content-policy-validation.test.ts)<br>[tests/crawler-policy.test.ts](../../../../sources/JSONbored__awesome-claude/tests/crawler-policy.test.ts)<br>[tests/generated-churn-policy.test.ts](../../../../sources/JSONbored__awesome-claude/tests/generated-churn-policy.test.ts)<br>[tests/sitemap-policy.test.ts](../../../../sources/JSONbored__awesome-claude/tests/sitemap-policy.test.ts) |
| ci | 20 | [scripts/ci/classify-pr-changes.mjs](../../../../sources/JSONbored__awesome-claude/scripts/ci/classify-pr-changes.mjs)<br>[scripts/ci/fail-critical-risk-report.mjs](../../../../sources/JSONbored__awesome-claude/scripts/ci/fail-critical-risk-report.mjs)<br>[scripts/ci/fail-provenance-report.mjs](../../../../sources/JSONbored__awesome-claude/scripts/ci/fail-provenance-report.mjs)<br>[scripts/ci/validate-content-policy.mjs](../../../../sources/JSONbored__awesome-claude/scripts/ci/validate-content-policy.mjs)<br>[scripts/ci/content-policy-runtime/package-lock.json](../../../../sources/JSONbored__awesome-claude/scripts/ci/content-policy-runtime/package-lock.json)<br>[scripts/ci/content-policy-runtime/package.json](../../../../sources/JSONbored__awesome-claude/scripts/ci/content-policy-runtime/package.json)<br>[content/mcp/circleci-mcp-server.mdx](../../../../sources/JSONbored__awesome-claude/content/mcp/circleci-mcp-server.mdx)<br>[.github/workflows/content-validation.yml](../../../../sources/JSONbored__awesome-claude/.github/workflows/content-validation.yml) |
| container | 2 | [content/skills/docker-compose-production-blueprints.mdx](../../../../sources/JSONbored__awesome-claude/content/skills/docker-compose-production-blueprints.mdx)<br>[content/skills/docker-compose-production-blueprints.zip](../../../../sources/JSONbored__awesome-claude/content/skills/docker-compose-production-blueprints.zip) |
| instruction | 2 | [AGENTS.md](../../../../sources/JSONbored__awesome-claude/AGENTS.md)<br>[CLAUDE.md](../../../../sources/JSONbored__awesome-claude/CLAUDE.md) |
| docs | 27 | [README.md](../../../../sources/JSONbored__awesome-claude/README.md)<br>[tests/readme-generation.test.ts](../../../../sources/JSONbored__awesome-claude/tests/readme-generation.test.ts)<br>[packages/mcp/README.md](../../../../sources/JSONbored__awesome-claude/packages/mcp/README.md)<br>[integrations/raycast/README.md](../../../../sources/JSONbored__awesome-claude/integrations/raycast/README.md)<br>[examples/content/README.md](../../../../sources/JSONbored__awesome-claude/examples/content/README.md)<br>[docs/agent-discovery.md](../../../../sources/JSONbored__awesome-claude/docs/agent-discovery.md)<br>[docs/api-changelog.md](../../../../sources/JSONbored__awesome-claude/docs/api-changelog.md)<br>[docs/api-security-contract.md](../../../../sources/JSONbored__awesome-claude/docs/api-security-contract.md) |
| config | 11 | [package.json](../../../../sources/JSONbored__awesome-claude/package.json)<br>[pnpm-workspace.yaml](../../../../sources/JSONbored__awesome-claude/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/JSONbored__awesome-claude/tsconfig.json)<br>[scripts/ci/content-policy-runtime/package.json](../../../../sources/JSONbored__awesome-claude/scripts/ci/content-policy-runtime/package.json)<br>[packages/registry/package.json](../../../../sources/JSONbored__awesome-claude/packages/registry/package.json)<br>[packages/mcp/package.json](../../../../sources/JSONbored__awesome-claude/packages/mcp/package.json)<br>[integrations/raycast/package.json](../../../../sources/JSONbored__awesome-claude/integrations/raycast/package.json)<br>[integrations/raycast/tsconfig.json](../../../../sources/JSONbored__awesome-claude/integrations/raycast/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 128 | [tests/api-contracts.test.ts](../../../../sources/JSONbored__awesome-claude/tests/api-contracts.test.ts)<br>[tests/api-router-security.test.ts](../../../../sources/JSONbored__awesome-claude/tests/api-router-security.test.ts)<br>[tests/artifact-path-safety.test.ts](../../../../sources/JSONbored__awesome-claude/tests/artifact-path-safety.test.ts)<br>[tests/atlas-production-data.test.ts](../../../../sources/JSONbored__awesome-claude/tests/atlas-production-data.test.ts)<br>[tests/audit-seo-snippets.test.ts](../../../../sources/JSONbored__awesome-claude/tests/audit-seo-snippets.test.ts)<br>[tests/clamp-description.test.ts](../../../../sources/JSONbored__awesome-claude/tests/clamp-description.test.ts) |
| CI workflow | 20 | [scripts/ci/classify-pr-changes.mjs](../../../../sources/JSONbored__awesome-claude/scripts/ci/classify-pr-changes.mjs)<br>[scripts/ci/fail-critical-risk-report.mjs](../../../../sources/JSONbored__awesome-claude/scripts/ci/fail-critical-risk-report.mjs)<br>[scripts/ci/fail-provenance-report.mjs](../../../../sources/JSONbored__awesome-claude/scripts/ci/fail-provenance-report.mjs)<br>[scripts/ci/validate-content-policy.mjs](../../../../sources/JSONbored__awesome-claude/scripts/ci/validate-content-policy.mjs)<br>[scripts/ci/content-policy-runtime/package-lock.json](../../../../sources/JSONbored__awesome-claude/scripts/ci/content-policy-runtime/package-lock.json)<br>[scripts/ci/content-policy-runtime/package.json](../../../../sources/JSONbored__awesome-claude/scripts/ci/content-policy-runtime/package.json) |
| 컨테이너/배포 | 2 | [content/skills/docker-compose-production-blueprints.mdx](../../../../sources/JSONbored__awesome-claude/content/skills/docker-compose-production-blueprints.mdx)<br>[content/skills/docker-compose-production-blueprints.zip](../../../../sources/JSONbored__awesome-claude/content/skills/docker-compose-production-blueprints.zip) |
| 보안/정책 | 79 | [SECURITY.md](../../../../sources/JSONbored__awesome-claude/SECURITY.md)<br>[tests/api-router-security.test.ts](../../../../sources/JSONbored__awesome-claude/tests/api-router-security.test.ts)<br>[tests/audit-seo-snippets.test.ts](../../../../sources/JSONbored__awesome-claude/tests/audit-seo-snippets.test.ts)<br>[tests/cleanup-policy.test.ts](../../../../sources/JSONbored__awesome-claude/tests/cleanup-policy.test.ts)<br>[tests/content-policy-validation.test.ts](../../../../sources/JSONbored__awesome-claude/tests/content-policy-validation.test.ts)<br>[tests/crawler-policy.test.ts](../../../../sources/JSONbored__awesome-claude/tests/crawler-policy.test.ts) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/JSONbored__awesome-claude/AGENTS.md)<br>[CLAUDE.md](../../../../sources/JSONbored__awesome-claude/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/mcp-cli.test.ts`, `tests/mcp-config-validator.test.ts`, `tests/mcp-http-route.test.ts`.
2. entrypoint를 따라 실행 흐름 확인: `packages/registry/src/index.d.ts`, `packages/registry/src/index.js`, `packages/mcp/src/cli.js`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tests/skill-package-validator.test.ts`, `examples/content/agent.example.mdx`.
4. retrieval/memory/indexing 확인: `scripts/build-content-index.mjs`, `packages/registry/src/index.d.ts`, `packages/registry/src/index.js`.
5. test/eval 파일로 동작 검증: `tests/api-contracts.test.ts`, `tests/api-router-security.test.ts`, `tests/artifact-path-safety.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 HeyClaude is a curated registry and distribution surface for Claude and AI workflow assets agents, MCP servers, skills, . 핵심 구조 신호는 MDX, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
