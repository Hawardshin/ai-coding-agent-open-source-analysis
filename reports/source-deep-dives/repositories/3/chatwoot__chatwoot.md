# chatwoot/chatwoot Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Open-source live-chat, email support, omni-channel desk. An alternative to Intercom, Zendesk, Salesforce Service Cloud etc. 🔥💬

## 요약

- 조사 단위: `sources/chatwoot__chatwoot` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 8,272 files, 1,551 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=bin/bundle, bin/rails, bin/rake이고, 의존성 단서는 next, click, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | chatwoot/chatwoot |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | global |
| Language | Ruby |
| Stars | 32363 |
| Forks | 7713 |
| License | NOASSERTION |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/chatwoot__chatwoot](../../../../sources/chatwoot__chatwoot) |
| Existing report | [reports/global-trending/repositories/chatwoot__chatwoot.md](../../../global-trending/repositories/chatwoot__chatwoot.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 8272 / 1551 |
| Max observed depth | 11 |
| Top directories | __mocks__, .circleci, .dependabot, .devcontainer, .github, .husky, .qlty, .windsurf, app, bin, clevercloud, config, db, deployment, docker, enterprise, lib, log, public, rubocop |
| Top extensions | .json: 2566, .rb: 2193, .vue: 1079, .js: 998, .yml: 463, .jbuilder: 351, .erb: 140, .png: 116, (none): 51, .svg: 45, .eml: 40, .liquid: 40 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 18 |
| lib | source boundary | 2 |
| __mocks__ | top-level component | 1 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| app | top-level component | 1 |
| bin | top-level component | 1 |
| clevercloud | top-level component | 1 |
| config | top-level component | 1 |
| db | top-level component | 1 |
| deployment | deployment surface | 1 |
| docker | documentation surface | 1 |
| enterprise | top-level component | 1 |
| log | top-level component | 1 |
| public | top-level component | 1 |
| rubocop | top-level component | 1 |
| script | top-level component | 1 |
| spec | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| quality | package.json | eslint | eslint app/**/*.{js,vue} |
| quality | package.json | eslint:fix | eslint app/**/*.{js,vue} --fix |
| test | package.json | test | TZ=UTC vitest --no-watch --no-cache --no-coverage --logHeapUsage |
| test | package.json | test:watch | TZ=UTC vitest --no-cache --no-coverage |
| test | package.json | test:coverage | TZ=UTC vitest --no-watch --no-cache --coverage |
| serve-dev | package.json | start:dev | foreman start -f ./Procfile.dev |
| test | package.json | start:test | RAILS_ENV=test foreman start -f ./Procfile.test |
| serve-dev | package.json | dev | overmind start -f ./Procfile.dev |
| build | package.json | ruby:prettier | bundle exec rubocop -a |
| serve-dev | package.json | build:sdk | vite build --config vite.lib.config.ts |
| utility | package.json | prepare | husky install |
| utility | package.json | size | size-limit |
| serve-dev | package.json | story:dev | histoire dev |
| build | package.json | story:build | histoire build |
| utility | package.json | story:preview | histoire preview |
| utility | package.json | sync:i18n | bin/sync_i18n_file_change |
| utility | Makefile | setup | make setup |
| utility | Makefile | db_create | make db_create |
| utility | Makefile | db_migrate | make db_migrate |
| utility | Makefile | db_seed | make db_seed |
| utility | Makefile | db_reset | make db_reset |
| utility | Makefile | db | make db |
| utility | Makefile | console | make console |
| serve-dev | Makefile | server | make server |
| utility | Makefile | burn | make burn |
| utility | Makefile | run | make run |
| utility | Makefile | force_run | make force_run |
| utility | Makefile | force_run_tunnel | make force_run_tunnel |
| utility | Makefile | debug | make debug |
| utility | Makefile | debug_worker | make debug_worker |
| container | Makefile | docker | make docker |
| utility | Makefile | .PHONY | make .PHONY |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | next |
| developerSurface | click |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [bin/bundle](../../../../sources/chatwoot__chatwoot/bin/bundle) | entrypoints signal |
| entrypoints | [bin/rails](../../../../sources/chatwoot__chatwoot/bin/rails) | entrypoints signal |
| entrypoints | [bin/rake](../../../../sources/chatwoot__chatwoot/bin/rake) | entrypoints signal |
| entrypoints | [bin/setup](../../../../sources/chatwoot__chatwoot/bin/setup) | entrypoints signal |
| config | [Makefile](../../../../sources/chatwoot__chatwoot/Makefile) | config signal |
| config | [package.json](../../../../sources/chatwoot__chatwoot/package.json) | config signal |
| config | [tests/playwright/package.json](../../../../sources/chatwoot__chatwoot/tests/playwright/package.json) | config signal |
| config | [tests/playwright/tsconfig.json](../../../../sources/chatwoot__chatwoot/tests/playwright/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/chatwoot__chatwoot/README.md) | docs signal |
| docs | [tests/playwright/README.md](../../../../sources/chatwoot__chatwoot/tests/playwright/README.md) | docs signal |
| eval | [docker-compose.test.yaml](../../../../sources/chatwoot__chatwoot/docker-compose.test.yaml) | eval signal |
| eval | [tests/playwright/.env.example](../../../../sources/chatwoot__chatwoot/tests/playwright/.env.example) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 10 | [bin/bundle](../../../../sources/chatwoot__chatwoot/bin/bundle)<br>[bin/rails](../../../../sources/chatwoot__chatwoot/bin/rails)<br>[bin/rake](../../../../sources/chatwoot__chatwoot/bin/rake)<br>[bin/setup](../../../../sources/chatwoot__chatwoot/bin/setup)<br>[bin/spring](../../../../sources/chatwoot__chatwoot/bin/spring)<br>[bin/sync_i18n_file_change](../../../../sources/chatwoot__chatwoot/bin/sync_i18n_file_change)<br>[bin/update](../../../../sources/chatwoot__chatwoot/bin/update)<br>[bin/validate_push](../../../../sources/chatwoot__chatwoot/bin/validate_push) |
| agentRuntime | 211 | [AGENTS.md](../../../../sources/chatwoot__chatwoot/AGENTS.md)<br>[swagger/paths/platform/agent_bots/create.yml](../../../../sources/chatwoot__chatwoot/swagger/paths/platform/agent_bots/create.yml)<br>[swagger/paths/platform/agent_bots/delete.yml](../../../../sources/chatwoot__chatwoot/swagger/paths/platform/agent_bots/delete.yml)<br>[swagger/paths/platform/agent_bots/index.yml](../../../../sources/chatwoot__chatwoot/swagger/paths/platform/agent_bots/index.yml)<br>[swagger/paths/platform/agent_bots/show.yml](../../../../sources/chatwoot__chatwoot/swagger/paths/platform/agent_bots/show.yml)<br>[swagger/paths/platform/agent_bots/update.yml](../../../../sources/chatwoot__chatwoot/swagger/paths/platform/agent_bots/update.yml)<br>[swagger/paths/application/reports/agent_summary.yml](../../../../sources/chatwoot__chatwoot/swagger/paths/application/reports/agent_summary.yml)<br>[swagger/paths/application/reports/conversation/agent.yml](../../../../sources/chatwoot__chatwoot/swagger/paths/application/reports/conversation/agent.yml) |
| mcp | 2 | [spec/enterprise/services/captain/tool_registry_service_spec.rb](../../../../sources/chatwoot__chatwoot/spec/enterprise/services/captain/tool_registry_service_spec.rb)<br>[enterprise/app/services/captain/tool_registry_service.rb](../../../../sources/chatwoot__chatwoot/enterprise/app/services/captain/tool_registry_service.rb) |
| retrieval | 263 | [tests/playwright/components/ui/index.ts](../../../../sources/chatwoot__chatwoot/tests/playwright/components/ui/index.ts)<br>[swagger/index.html](../../../../sources/chatwoot__chatwoot/swagger/index.html)<br>[swagger/index.yml](../../../../sources/chatwoot__chatwoot/swagger/index.yml)<br>[swagger/paths/index.yml](../../../../sources/chatwoot__chatwoot/swagger/paths/index.yml)<br>[swagger/paths/public/inboxes/messages/index.yml](../../../../sources/chatwoot__chatwoot/swagger/paths/public/inboxes/messages/index.yml)<br>[swagger/paths/public/inboxes/conversations/index.yml](../../../../sources/chatwoot__chatwoot/swagger/paths/public/inboxes/conversations/index.yml)<br>[swagger/paths/profile/index.yml](../../../../sources/chatwoot__chatwoot/swagger/paths/profile/index.yml)<br>[swagger/paths/platform/agent_bots/index.yml](../../../../sources/chatwoot__chatwoot/swagger/paths/platform/agent_bots/index.yml) |
| spec | 1287 | [tests/playwright/tests/e2e/ui/login-flow-ui-validation.spec.ts](../../../../sources/chatwoot__chatwoot/tests/playwright/tests/e2e/ui/login-flow-ui-validation.spec.ts)<br>[spec/coverage_helper.rb](../../../../sources/chatwoot__chatwoot/spec/coverage_helper.rb)<br>[spec/rails_helper.rb](../../../../sources/chatwoot__chatwoot/spec/rails_helper.rb)<br>[spec/spec_helper.rb](../../../../sources/chatwoot__chatwoot/spec/spec_helper.rb)<br>[spec/test_helper.rb](../../../../sources/chatwoot__chatwoot/spec/test_helper.rb)<br>[spec/swagger/openapi_spec.rb](../../../../sources/chatwoot__chatwoot/spec/swagger/openapi_spec.rb)<br>[spec/support/conversations_unread_counts_helpers.rb](../../../../sources/chatwoot__chatwoot/spec/support/conversations_unread_counts_helpers.rb)<br>[spec/support/csv_spec_helpers.rb](../../../../sources/chatwoot__chatwoot/spec/support/csv_spec_helpers.rb) |
| eval | 1321 | [docker-compose.test.yaml](../../../../sources/chatwoot__chatwoot/docker-compose.test.yaml)<br>[tests/playwright/.env.example](../../../../sources/chatwoot__chatwoot/tests/playwright/.env.example)<br>[tests/playwright/.gitignore](../../../../sources/chatwoot__chatwoot/tests/playwright/.gitignore)<br>[tests/playwright/DOCS.md](../../../../sources/chatwoot__chatwoot/tests/playwright/DOCS.md)<br>[tests/playwright/eslint.config.mjs](../../../../sources/chatwoot__chatwoot/tests/playwright/eslint.config.mjs)<br>[tests/playwright/package.json](../../../../sources/chatwoot__chatwoot/tests/playwright/package.json)<br>[tests/playwright/playwright.config.ts](../../../../sources/chatwoot__chatwoot/tests/playwright/playwright.config.ts)<br>[tests/playwright/pnpm-lock.yaml](../../../../sources/chatwoot__chatwoot/tests/playwright/pnpm-lock.yaml) |
| security | 168 | [.bundler-audit.yml](../../../../sources/chatwoot__chatwoot/.bundler-audit.yml)<br>[SECURITY.md](../../../../sources/chatwoot__chatwoot/SECURITY.md)<br>[swagger/paths/application/audit_logs/index.yml](../../../../sources/chatwoot__chatwoot/swagger/paths/application/audit_logs/index.yml)<br>[swagger/definitions/resource/audit_log.yml](../../../../sources/chatwoot__chatwoot/swagger/definitions/resource/audit_log.yml)<br>[spec/services/microsoft/refresh_oauth_token_service_spec.rb](../../../../sources/chatwoot__chatwoot/spec/services/microsoft/refresh_oauth_token_service_spec.rb)<br>[spec/services/instagram/refresh_oauth_token_service_spec.rb](../../../../sources/chatwoot__chatwoot/spec/services/instagram/refresh_oauth_token_service_spec.rb)<br>[spec/services/google/refresh_oauth_token_service_spec.rb](../../../../sources/chatwoot__chatwoot/spec/services/google/refresh_oauth_token_service_spec.rb)<br>[spec/services/conversations/permission_filter_service_spec.rb](../../../../sources/chatwoot__chatwoot/spec/services/conversations/permission_filter_service_spec.rb) |
| ci | 16 | [.github/workflows/auto-assign-pr.yml](../../../../sources/chatwoot__chatwoot/.github/workflows/auto-assign-pr.yml)<br>[.github/workflows/deploy_check.yml](../../../../sources/chatwoot__chatwoot/.github/workflows/deploy_check.yml)<br>[.github/workflows/frontend-fe.yml](../../../../sources/chatwoot__chatwoot/.github/workflows/frontend-fe.yml)<br>[.github/workflows/ghsa-linear-sync.yml](../../../../sources/chatwoot__chatwoot/.github/workflows/ghsa-linear-sync.yml)<br>[.github/workflows/lint_pr.yml](../../../../sources/chatwoot__chatwoot/.github/workflows/lint_pr.yml)<br>[.github/workflows/lock.yml](../../../../sources/chatwoot__chatwoot/.github/workflows/lock.yml)<br>[.github/workflows/logging_percentage_check.yml](../../../../sources/chatwoot__chatwoot/.github/workflows/logging_percentage_check.yml)<br>[.github/workflows/nightly_installer.yml](../../../../sources/chatwoot__chatwoot/.github/workflows/nightly_installer.yml) |
| container | 20 | [docker-compose.production.yaml](../../../../sources/chatwoot__chatwoot/docker-compose.production.yaml)<br>[docker-compose.test.yaml](../../../../sources/chatwoot__chatwoot/docker-compose.test.yaml)<br>[docker-compose.yaml](../../../../sources/chatwoot__chatwoot/docker-compose.yaml)<br>[docker/Dockerfile](../../../../sources/chatwoot__chatwoot/docker/Dockerfile)<br>[docker/dockerfiles/rails.Dockerfile](../../../../sources/chatwoot__chatwoot/docker/dockerfiles/rails.Dockerfile)<br>[docker/dockerfiles/vite.Dockerfile](../../../../sources/chatwoot__chatwoot/docker/dockerfiles/vite.Dockerfile)<br>[deployment/chatwoot](../../../../sources/chatwoot__chatwoot/deployment/chatwoot)<br>[deployment/chatwoot-web.1.service](../../../../sources/chatwoot__chatwoot/deployment/chatwoot-web.1.service) |
| instruction | 1 | [AGENTS.md](../../../../sources/chatwoot__chatwoot/AGENTS.md) |
| docs | 2 | [README.md](../../../../sources/chatwoot__chatwoot/README.md)<br>[tests/playwright/README.md](../../../../sources/chatwoot__chatwoot/tests/playwright/README.md) |
| config | 4 | [Makefile](../../../../sources/chatwoot__chatwoot/Makefile)<br>[package.json](../../../../sources/chatwoot__chatwoot/package.json)<br>[tests/playwright/package.json](../../../../sources/chatwoot__chatwoot/tests/playwright/package.json)<br>[tests/playwright/tsconfig.json](../../../../sources/chatwoot__chatwoot/tests/playwright/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1321 | [docker-compose.test.yaml](../../../../sources/chatwoot__chatwoot/docker-compose.test.yaml)<br>[tests/playwright/.env.example](../../../../sources/chatwoot__chatwoot/tests/playwright/.env.example)<br>[tests/playwright/.gitignore](../../../../sources/chatwoot__chatwoot/tests/playwright/.gitignore)<br>[tests/playwright/DOCS.md](../../../../sources/chatwoot__chatwoot/tests/playwright/DOCS.md)<br>[tests/playwright/eslint.config.mjs](../../../../sources/chatwoot__chatwoot/tests/playwright/eslint.config.mjs)<br>[tests/playwright/package.json](../../../../sources/chatwoot__chatwoot/tests/playwright/package.json) |
| CI workflows | 16 | [.github/workflows/auto-assign-pr.yml](../../../../sources/chatwoot__chatwoot/.github/workflows/auto-assign-pr.yml)<br>[.github/workflows/deploy_check.yml](../../../../sources/chatwoot__chatwoot/.github/workflows/deploy_check.yml)<br>[.github/workflows/frontend-fe.yml](../../../../sources/chatwoot__chatwoot/.github/workflows/frontend-fe.yml)<br>[.github/workflows/ghsa-linear-sync.yml](../../../../sources/chatwoot__chatwoot/.github/workflows/ghsa-linear-sync.yml)<br>[.github/workflows/lint_pr.yml](../../../../sources/chatwoot__chatwoot/.github/workflows/lint_pr.yml)<br>[.github/workflows/lock.yml](../../../../sources/chatwoot__chatwoot/.github/workflows/lock.yml) |
| Containers / deploy | 20 | [docker-compose.production.yaml](../../../../sources/chatwoot__chatwoot/docker-compose.production.yaml)<br>[docker-compose.test.yaml](../../../../sources/chatwoot__chatwoot/docker-compose.test.yaml)<br>[docker-compose.yaml](../../../../sources/chatwoot__chatwoot/docker-compose.yaml)<br>[docker/Dockerfile](../../../../sources/chatwoot__chatwoot/docker/Dockerfile)<br>[docker/dockerfiles/rails.Dockerfile](../../../../sources/chatwoot__chatwoot/docker/dockerfiles/rails.Dockerfile)<br>[docker/dockerfiles/vite.Dockerfile](../../../../sources/chatwoot__chatwoot/docker/dockerfiles/vite.Dockerfile) |
| Security / policy | 168 | [.bundler-audit.yml](../../../../sources/chatwoot__chatwoot/.bundler-audit.yml)<br>[SECURITY.md](../../../../sources/chatwoot__chatwoot/SECURITY.md)<br>[swagger/paths/application/audit_logs/index.yml](../../../../sources/chatwoot__chatwoot/swagger/paths/application/audit_logs/index.yml)<br>[swagger/definitions/resource/audit_log.yml](../../../../sources/chatwoot__chatwoot/swagger/definitions/resource/audit_log.yml)<br>[spec/services/microsoft/refresh_oauth_token_service_spec.rb](../../../../sources/chatwoot__chatwoot/spec/services/microsoft/refresh_oauth_token_service_spec.rb)<br>[spec/services/instagram/refresh_oauth_token_service_spec.rb](../../../../sources/chatwoot__chatwoot/spec/services/instagram/refresh_oauth_token_service_spec.rb) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/chatwoot__chatwoot/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `bin/bundle`, `bin/rails`, `bin/rake`.
2. Trace execution through entrypoints: `bin/bundle`, `bin/rails`, `bin/rake`.
3. Map agent/tool runtime through: `AGENTS.md`, `swagger/paths/platform/agent_bots/create.yml`, `swagger/paths/platform/agent_bots/delete.yml`.
4. Inspect retrieval/memory/indexing through: `tests/playwright/components/ui/index.ts`, `swagger/index.html`, `swagger/index.yml`.
5. Verify behavior through test/eval files: `docker-compose.test.yaml`, `tests/playwright/.env.example`, `tests/playwright/.gitignore`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Open source live chat, email support, omni channel desk. An alternative to Intercom, Zendesk, Salesforce Service Cloud e. 핵심 구조 신호는 Ruby, package.json, Makefile, README.md, AGENTS.md, LICENSE이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
