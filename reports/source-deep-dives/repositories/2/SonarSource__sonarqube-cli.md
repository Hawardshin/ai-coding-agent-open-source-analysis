# SonarSource/sonarqube-cli Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Command-line interface for SonarQube with AI agent integration. Scan for secrets and get fast feedback on code quality and security from your terminal.

## 요약

- 조사 단위: `sources/SonarSource__sonarqube-cli` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 493 files, 123 directories, depth score 112, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/index.ts이고, 의존성 단서는 commander, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | SonarSource/sonarqube-cli |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 192 |
| Forks | 8 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/SonarSource__sonarqube-cli](../../../../sources/SonarSource__sonarqube-cli) |
| Existing report | [reports/global-trending/repositories/SonarSource__sonarqube-cli.md](../../../global-trending/repositories/SonarSource__sonarqube-cli.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 493 / 123 |
| Max observed depth | 8 |
| Top directories | .claude, .cursor, .github, .husky, .sonarlint, build-scripts, docs, src, tests, user-scripts |
| Top extensions | .ts: 424, .yml: 17, .json: 9, .md: 8, (none): 8, .svg: 6, .sh: 4, .html: 2, .ps1: 2, .template: 2, .toml: 2, .txt: 2 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 100 |
| src | source boundary | 37 |
| docs | documentation surface | 18 |
| .github | ci surface | 1 |
| build-scripts | top-level component | 1 |
| user-scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build:binary | bun build src/index.ts --compile --outfile dist/sonarqube-cli |
| build | package.json | postbuild:binary | bun build-scripts/codesign-local.ts |
| serve-dev | package.json | dev | bun run src/index.ts |
| test | package.json | test:unit | bun test --parallel ./tests/unit/ |
| test | package.json | pretest:integration | bun build:binary && bun build-scripts/setup-integration-resources.ts |
| test | package.json | test:integration | bun test ./tests/integration/ |
| test | package.json | test:all | bun run test:unit && bun run test:integration |
| test | package.json | test:e2e | bun test ./tests/e2e/ |
| test | package.json | test:coverage:unit | COVERAGE_RAW_UNIT_DIR=tests/coverage/reports/raw-unit bun test --preload ./tests/coverage/preload-instrumenter.ts ./tests/unit/ |
| test | package.json | test:coverage | bun build:binary && bun build-scripts/build-coverage-binary.ts && bun build-scripts/setup-integration-resources.ts && bun build-scripts/clear-coverage-raw.ts && bun run test:coverage:unit && SONARQUBE_CLI_USE_COVERAGE=1 |
| test | package.json | lint | eslint src/ tests/ build-scripts/ |
| test | package.json | lint:fix | eslint src/ tests/ build-scripts/ --fix |
| test | package.json | format | prettier --write "src/**/*.ts" "tests/**/*.ts" "build-scripts/**/*.ts" |
| test | package.json | format:check | prettier --check "src/**/*.ts" "tests/**/*.ts" "build-scripts/**/*.ts" |
| quality | package.json | typecheck | tsc --noEmit |
| build | package.json | gen:docs | bun run build-scripts/docs/generate-docs.ts |
| build | package.json | version:build_number | bun build-scripts/set-build-number.ts |
| build | package.json | fetch:signatures | bun build-scripts/fetch-signatures.ts |
| build | package.json | sentry:upload-sourcemaps | sentry-cli sourcemaps upload --release="${PROJECT_VERSION}" dist/*.map |
| utility | package.json | prepare | husky |
| entrypoint | package.json bin | index.js | ./dist/index.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | commander |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [src/index.ts](../../../../sources/SonarSource__sonarqube-cli/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/SonarSource__sonarqube-cli/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/SonarSource__sonarqube-cli/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/SonarSource__sonarqube-cli/README.md) | docs signal |
| docs | [docs/commands.html](../../../../sources/SonarSource__sonarqube-cli/docs/commands.html) | docs signal |
| docs | [docs/favicon.ico](../../../../sources/SonarSource__sonarqube-cli/docs/favicon.ico) | docs signal |
| docs | [docs/favicon.svg](../../../../sources/SonarSource__sonarqube-cli/docs/favicon.svg) | docs signal |
| eval | [tests/unit/server-info.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/server-info.test.ts) | eval signal |
| eval | [tests/unit/ui/messages.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/ui/messages.test.ts) | eval signal |
| eval | [tests/unit/ui/note-plain.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/ui/note-plain.test.ts) | eval signal |
| eval | [tests/unit/ui/note.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/ui/note.test.ts) | eval signal |
| ci | [.github/workflows/build.yml](../../../../sources/SonarSource__sonarqube-cli/.github/workflows/build.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.ts](../../../../sources/SonarSource__sonarqube-cli/src/index.ts) |
| agentRuntime | 86 | [tests/unit/lib/agent-detector.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/lib/agent-detector.test.ts)<br>[tests/unit/lib/tool-detector.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/lib/tool-detector.test.ts)<br>[tests/unit/cli/commands/integrate/codex/hook-templates.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/integrate/codex/hook-templates.test.ts)<br>[tests/unit/cli/commands/integrate/claude/hook-templates.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/integrate/claude/hook-templates.test.ts)<br>[tests/unit/cli/commands/integrate/claude/hooks.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/integrate/claude/hooks.test.ts)<br>[tests/unit/cli/commands/integrate/antigravity/hook-templates.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/integrate/antigravity/hook-templates.test.ts)<br>[tests/unit/cli/commands/integrate/antigravity/hooks.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/integrate/antigravity/hooks.test.ts)<br>[tests/unit/cli/commands/integrate/_common/agent-integrate-prelude.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/integrate/_common/agent-integrate-prelude.test.ts) |
| mcp | 11 | [.mcp.json](../../../../sources/SonarSource__sonarqube-cli/.mcp.json)<br>[tests/unit/cli/commands/run/mcp.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/run/mcp.test.ts)<br>[tests/unit/cli/commands/integrate/copilot/mcp.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/integrate/copilot/mcp.test.ts)<br>[tests/unit/cli/commands/integrate/claude/mcp.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/integrate/claude/mcp.test.ts)<br>[tests/unit/cli/commands/integrate/_common/mcp-config.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/integrate/_common/mcp-config.test.ts)<br>[tests/integration/specs/run/mcp.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/integration/specs/run/mcp.test.ts)<br>[src/lib/mcp/mcp-helper.ts](../../../../sources/SonarSource__sonarqube-cli/src/lib/mcp/mcp-helper.ts)<br>[src/cli/commands/run/mcp.ts](../../../../sources/SonarSource__sonarqube-cli/src/cli/commands/run/mcp.ts) |
| retrieval | 26 | [tests/unit/cli/commands/integrate/index.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/integrate/index.test.ts)<br>[tests/unit/cli/commands/analyze/sqaa-api-chunk-fetch.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/analyze/sqaa-api-chunk-fetch.test.ts)<br>[tests/integration/harness/index.ts](../../../../sources/SonarSource__sonarqube-cli/tests/integration/harness/index.ts)<br>[src/index.ts](../../../../sources/SonarSource__sonarqube-cli/src/index.ts)<br>[src/ui/index.ts](../../../../sources/SonarSource__sonarqube-cli/src/ui/index.ts)<br>[src/telemetry/index.ts](../../../../sources/SonarSource__sonarqube-cli/src/telemetry/index.ts)<br>[src/lib/project-workspace/index.ts](../../../../sources/SonarSource__sonarqube-cli/src/lib/project-workspace/index.ts)<br>[src/cli/commands/remediate/index.ts](../../../../sources/SonarSource__sonarqube-cli/src/cli/commands/remediate/index.ts) |
| spec | 0 | not obvious |
| eval | 192 | [tests/unit/server-info.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/server-info.test.ts)<br>[tests/unit/ui/messages.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/ui/messages.test.ts)<br>[tests/unit/ui/note-plain.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/ui/note-plain.test.ts)<br>[tests/unit/ui/note.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/ui/note.test.ts)<br>[tests/unit/ui/prompts-real.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/ui/prompts-real.test.ts)<br>[tests/unit/ui/prompts.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/ui/prompts.test.ts)<br>[tests/unit/ui/spinner-tty.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/ui/spinner-tty.test.ts)<br>[tests/unit/ui/sqaa-progress.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/ui/sqaa-progress.test.ts) |
| security | 20 | [SECURITY.md](../../../../sources/SonarSource__sonarqube-cli/SECURITY.md)<br>[tests/unit/cli/commands/system/reset-auth.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/system/reset-auth.test.ts)<br>[tests/unit/cli/commands/auth/auth-helpers.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/auth/auth-helpers.test.ts)<br>[tests/unit/cli/commands/auth/auth-keychain.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/auth/auth-keychain.test.ts)<br>[tests/unit/cli/commands/auth/auth-resolver.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/auth/auth-resolver.test.ts)<br>[tests/unit/cli/commands/auth/auth-security.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/auth/auth-security.test.ts)<br>[tests/unit/cli/commands/auth/auth-token-interactive.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/auth/auth-token-interactive.test.ts)<br>[tests/unit/cli/commands/analyze/secret-scan.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/analyze/secret-scan.test.ts) |
| ci | 13 | [.github/workflows/build.yml](../../../../sources/SonarSource__sonarqube-cli/.github/workflows/build.yml)<br>[.github/workflows/ci-failure-triage-agent.lock.yml](../../../../sources/SonarSource__sonarqube-cli/.github/workflows/ci-failure-triage-agent.lock.yml)<br>[.github/workflows/ci-failure-triage-agent.md](../../../../sources/SonarSource__sonarqube-cli/.github/workflows/ci-failure-triage-agent.md)<br>[.github/workflows/full-release.yml](../../../../sources/SonarSource__sonarqube-cli/.github/workflows/full-release.yml)<br>[.github/workflows/notify-failure.yml](../../../../sources/SonarSource__sonarqube-cli/.github/workflows/notify-failure.yml)<br>[.github/workflows/pr-cleanup.yml](../../../../sources/SonarSource__sonarqube-cli/.github/workflows/pr-cleanup.yml)<br>[.github/workflows/prepare-release-notes.yml](../../../../sources/SonarSource__sonarqube-cli/.github/workflows/prepare-release-notes.yml)<br>[.github/workflows/PullRequestClosed.yml](../../../../sources/SonarSource__sonarqube-cli/.github/workflows/PullRequestClosed.yml) |
| container | 0 | not obvious |
| instruction | 2 | [CLAUDE.md](../../../../sources/SonarSource__sonarqube-cli/CLAUDE.md)<br>[.cursor/rules/sonarqube-cli.mdc](../../../../sources/SonarSource__sonarqube-cli/.cursor/rules/sonarqube-cli.mdc) |
| docs | 21 | [README.md](../../../../sources/SonarSource__sonarqube-cli/README.md)<br>[docs/commands.html](../../../../sources/SonarSource__sonarqube-cli/docs/commands.html)<br>[docs/favicon.ico](../../../../sources/SonarSource__sonarqube-cli/docs/favicon.ico)<br>[docs/favicon.svg](../../../../sources/SonarSource__sonarqube-cli/docs/favicon.svg)<br>[docs/index.html](../../../../sources/SonarSource__sonarqube-cli/docs/index.html)<br>[docs/llms.txt](../../../../sources/SonarSource__sonarqube-cli/docs/llms.txt)<br>[docs/robots.txt](../../../../sources/SonarSource__sonarqube-cli/docs/robots.txt)<br>[docs/sample-state.json](../../../../sources/SonarSource__sonarqube-cli/docs/sample-state.json) |
| config | 2 | [package.json](../../../../sources/SonarSource__sonarqube-cli/package.json)<br>[tsconfig.json](../../../../sources/SonarSource__sonarqube-cli/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 192 | [tests/unit/server-info.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/server-info.test.ts)<br>[tests/unit/ui/messages.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/ui/messages.test.ts)<br>[tests/unit/ui/note-plain.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/ui/note-plain.test.ts)<br>[tests/unit/ui/note.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/ui/note.test.ts)<br>[tests/unit/ui/prompts-real.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/ui/prompts-real.test.ts)<br>[tests/unit/ui/prompts.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/ui/prompts.test.ts) |
| CI workflows | 13 | [.github/workflows/build.yml](../../../../sources/SonarSource__sonarqube-cli/.github/workflows/build.yml)<br>[.github/workflows/ci-failure-triage-agent.lock.yml](../../../../sources/SonarSource__sonarqube-cli/.github/workflows/ci-failure-triage-agent.lock.yml)<br>[.github/workflows/ci-failure-triage-agent.md](../../../../sources/SonarSource__sonarqube-cli/.github/workflows/ci-failure-triage-agent.md)<br>[.github/workflows/full-release.yml](../../../../sources/SonarSource__sonarqube-cli/.github/workflows/full-release.yml)<br>[.github/workflows/notify-failure.yml](../../../../sources/SonarSource__sonarqube-cli/.github/workflows/notify-failure.yml)<br>[.github/workflows/pr-cleanup.yml](../../../../sources/SonarSource__sonarqube-cli/.github/workflows/pr-cleanup.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 20 | [SECURITY.md](../../../../sources/SonarSource__sonarqube-cli/SECURITY.md)<br>[tests/unit/cli/commands/system/reset-auth.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/system/reset-auth.test.ts)<br>[tests/unit/cli/commands/auth/auth-helpers.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/auth/auth-helpers.test.ts)<br>[tests/unit/cli/commands/auth/auth-keychain.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/auth/auth-keychain.test.ts)<br>[tests/unit/cli/commands/auth/auth-resolver.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/auth/auth-resolver.test.ts)<br>[tests/unit/cli/commands/auth/auth-security.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/auth/auth-security.test.ts) |
| Agent instructions | 2 | [CLAUDE.md](../../../../sources/SonarSource__sonarqube-cli/CLAUDE.md)<br>[.cursor/rules/sonarqube-cli.mdc](../../../../sources/SonarSource__sonarqube-cli/.cursor/rules/sonarqube-cli.mdc) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/index.ts`, `package.json`, `tsconfig.json`.
2. Trace execution through entrypoints: `src/index.ts`.
3. Map agent/tool runtime through: `tests/unit/lib/agent-detector.test.ts`, `tests/unit/lib/tool-detector.test.ts`, `tests/unit/cli/commands/integrate/codex/hook-templates.test.ts`.
4. Inspect retrieval/memory/indexing through: `tests/unit/cli/commands/integrate/index.test.ts`, `tests/unit/cli/commands/analyze/sqaa-api-chunk-fetch.test.ts`, `tests/integration/harness/index.ts`.
5. Verify behavior through test/eval files: `tests/unit/server-info.test.ts`, `tests/unit/ui/messages.test.ts`, `tests/unit/ui/note-plain.test.ts`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Command line interface for SonarQube with AI agent integration. Scan for secrets and get fast feedback on code quality a. 핵심 구조 신호는 TypeScript, package.json, README.md, CLAUDE.md, LICENSE, tests이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
