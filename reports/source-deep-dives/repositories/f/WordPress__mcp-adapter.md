# WordPress/mcp-adapter Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

An MCP adapter that bridges the Abilities API to the Model Context Protocol, enabling MCP clients to discover and invoke WordPress plugin, theme, and core abilities programmatically.

## 요약

- 조사 단위: `sources/WordPress__mcp-adapter` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 180 files, 63 directories, depth score 95, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 agent/tool runtime, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 config=package.json이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | WordPress/mcp-adapter |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | global |
| Language | PHP |
| Stars | 1292 |
| Forks | 145 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/WordPress__mcp-adapter](../../../../sources/WordPress__mcp-adapter) |
| Existing report | [reports/global-trending/repositories/WordPress__mcp-adapter.md](../../../global-trending/repositories/WordPress__mcp-adapter.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 180 / 63 |
| Max observed depth | 6 |
| Top directories | .github, docs, includes, tests |
| Top extensions | .php: 133, .md: 21, .yml: 7, (none): 7, .json: 5, .dist: 3, .js: 1, .lock: 1, .stub: 1, .txt: 1 |
| Source patterns | agent/tool runtime, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 43 |
| docs | documentation surface | 18 |
| .github | ci surface | 1 |
| includes | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| quality | package.json | format | wp-scripts format |
| quality | package.json | lint:php | wp-env run cli --env-cwd=wp-content/plugins/$(basename "$(pwd)")/ composer run-script lint |
| quality | package.json | lint:php:fix | wp-env run cli --env-cwd=wp-content/plugins/$(basename "$(pwd)")/ composer run-script format |
| quality | package.json | lint:php:stan | wp-env run cli --env-cwd=wp-content/plugins/$(basename "$(pwd)")/ composer run-script phpstan |
| utility | package.json | plugin-zip | wp-scripts plugin-zip |
| test | package.json | test:php | npm run wp-env:test -- run cli --env-cwd=wp-content/plugins/$(basename "$(pwd)")/ vendor/bin/phpunit -c phpunit.xml.dist |
| utility | package.json | wp-env | wp-env |
| utility | package.json | wp-env:cli | wp-env run cli --env-cwd=wp-content/plugins/$(basename "$(pwd)")/ |
| test | package.json | wp-env:test | wp-env --config=.wp-env.test.json |


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
| config | [package.json](../../../../sources/WordPress__mcp-adapter/package.json) | config signal |
| ci | [.github/workflows/copilot-setup-steps.yml](../../../../sources/WordPress__mcp-adapter/.github/workflows/copilot-setup-steps.yml) | ci signal |
| ci | [.github/workflows/dependency-review.yml](../../../../sources/WordPress__mcp-adapter/.github/workflows/dependency-review.yml) | ci signal |
| ci | [.github/workflows/plugin-check.yml](../../../../sources/WordPress__mcp-adapter/.github/workflows/plugin-check.yml) | ci signal |
| ci | [.github/workflows/props-bot.yml](../../../../sources/WordPress__mcp-adapter/.github/workflows/props-bot.yml) | ci signal |
| docs | [README.md](../../../../sources/WordPress__mcp-adapter/README.md) | docs signal |
| docs | [readme.txt](../../../../sources/WordPress__mcp-adapter/readme.txt) | docs signal |
| docs | [docs/README.md](../../../../sources/WordPress__mcp-adapter/docs/README.md) | docs signal |
| docs | [docs/troubleshooting/common-issues.md](../../../../sources/WordPress__mcp-adapter/docs/troubleshooting/common-issues.md) | docs signal |
| eval | [.wp-env.test.json](../../../../sources/WordPress__mcp-adapter/.wp-env.test.json) | eval support |
| eval | [tests/phpunit/bootstrap.php](../../../../sources/WordPress__mcp-adapter/tests/phpunit/bootstrap.php) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 7 | [tests/phpunit/Unit/Tools/McpToolTest.php](../../../../sources/WordPress__mcp-adapter/tests/phpunit/Unit/Tools/McpToolTest.php)<br>[tests/phpunit/Unit/Tools/RegisterAbilityAsMcpToolTest.php](../../../../sources/WordPress__mcp-adapter/tests/phpunit/Unit/Tools/RegisterAbilityAsMcpToolTest.php)<br>[tests/phpunit/Unit/Domain/Tools/McpToolValidatorTest.php](../../../../sources/WordPress__mcp-adapter/tests/phpunit/Unit/Domain/Tools/McpToolValidatorTest.php)<br>[includes/Handlers/Tools/ToolsHandler.php](../../../../sources/WordPress__mcp-adapter/includes/Handlers/Tools/ToolsHandler.php)<br>[includes/Domain/Tools/McpTool.php](../../../../sources/WordPress__mcp-adapter/includes/Domain/Tools/McpTool.php)<br>[includes/Domain/Tools/McpToolValidator.php](../../../../sources/WordPress__mcp-adapter/includes/Domain/Tools/McpToolValidator.php)<br>[includes/Domain/Tools/RegisterAbilityAsMcpTool.php](../../../../sources/WordPress__mcp-adapter/includes/Domain/Tools/RegisterAbilityAsMcpTool.php) |
| mcp | 1 | [mcp-adapter.php](../../../../sources/WordPress__mcp-adapter/mcp-adapter.php) |
| retrieval | 0 | not obvious |
| spec | 1 | [docs/architecture/overview.md](../../../../sources/WordPress__mcp-adapter/docs/architecture/overview.md) |
| eval | 84 | [.wp-env.test.json](../../../../sources/WordPress__mcp-adapter/.wp-env.test.json)<br>[tests/phpunit/bootstrap.php](../../../../sources/WordPress__mcp-adapter/tests/phpunit/bootstrap.php)<br>[tests/phpunit/TestCase.php](../../../../sources/WordPress__mcp-adapter/tests/phpunit/TestCase.php)<br>[tests/phpunit/Unit/McpServerTest.php](../../../../sources/WordPress__mcp-adapter/tests/phpunit/Unit/McpServerTest.php)<br>[tests/phpunit/Unit/McpTransportTest.php](../../../../sources/WordPress__mcp-adapter/tests/phpunit/Unit/McpTransportTest.php)<br>[tests/phpunit/Unit/PluginTest.php](../../../../sources/WordPress__mcp-adapter/tests/phpunit/Unit/PluginTest.php)<br>[tests/phpunit/Unit/Transport/McpSessionManagerTest.php](../../../../sources/WordPress__mcp-adapter/tests/phpunit/Unit/Transport/McpSessionManagerTest.php)<br>[tests/phpunit/Unit/Transport/Infrastructure/DtoSerializationRegressionTest.php](../../../../sources/WordPress__mcp-adapter/tests/phpunit/Unit/Transport/Infrastructure/DtoSerializationRegressionTest.php) |
| security | 1 | [SECURITY.md](../../../../sources/WordPress__mcp-adapter/SECURITY.md) |
| ci | 6 | [.github/workflows/copilot-setup-steps.yml](../../../../sources/WordPress__mcp-adapter/.github/workflows/copilot-setup-steps.yml)<br>[.github/workflows/dependency-review.yml](../../../../sources/WordPress__mcp-adapter/.github/workflows/dependency-review.yml)<br>[.github/workflows/plugin-check.yml](../../../../sources/WordPress__mcp-adapter/.github/workflows/plugin-check.yml)<br>[.github/workflows/props-bot.yml](../../../../sources/WordPress__mcp-adapter/.github/workflows/props-bot.yml)<br>[.github/workflows/release.yml](../../../../sources/WordPress__mcp-adapter/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/WordPress__mcp-adapter/.github/workflows/test.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 18 | [README.md](../../../../sources/WordPress__mcp-adapter/README.md)<br>[readme.txt](../../../../sources/WordPress__mcp-adapter/readme.txt)<br>[docs/README.md](../../../../sources/WordPress__mcp-adapter/docs/README.md)<br>[docs/troubleshooting/common-issues.md](../../../../sources/WordPress__mcp-adapter/docs/troubleshooting/common-issues.md)<br>[docs/migration/v0.3.0.md](../../../../sources/WordPress__mcp-adapter/docs/migration/v0.3.0.md)<br>[docs/migration/v0.5.0.md](../../../../sources/WordPress__mcp-adapter/docs/migration/v0.5.0.md)<br>[docs/guides/cli-usage.md](../../../../sources/WordPress__mcp-adapter/docs/guides/cli-usage.md)<br>[docs/guides/creating-abilities.md](../../../../sources/WordPress__mcp-adapter/docs/guides/creating-abilities.md) |
| config | 1 | [package.json](../../../../sources/WordPress__mcp-adapter/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 84 | [.wp-env.test.json](../../../../sources/WordPress__mcp-adapter/.wp-env.test.json)<br>[tests/phpunit/bootstrap.php](../../../../sources/WordPress__mcp-adapter/tests/phpunit/bootstrap.php)<br>[tests/phpunit/TestCase.php](../../../../sources/WordPress__mcp-adapter/tests/phpunit/TestCase.php)<br>[tests/phpunit/Unit/McpServerTest.php](../../../../sources/WordPress__mcp-adapter/tests/phpunit/Unit/McpServerTest.php)<br>[tests/phpunit/Unit/McpTransportTest.php](../../../../sources/WordPress__mcp-adapter/tests/phpunit/Unit/McpTransportTest.php)<br>[tests/phpunit/Unit/PluginTest.php](../../../../sources/WordPress__mcp-adapter/tests/phpunit/Unit/PluginTest.php) |
| CI workflows | 6 | [.github/workflows/copilot-setup-steps.yml](../../../../sources/WordPress__mcp-adapter/.github/workflows/copilot-setup-steps.yml)<br>[.github/workflows/dependency-review.yml](../../../../sources/WordPress__mcp-adapter/.github/workflows/dependency-review.yml)<br>[.github/workflows/plugin-check.yml](../../../../sources/WordPress__mcp-adapter/.github/workflows/plugin-check.yml)<br>[.github/workflows/props-bot.yml](../../../../sources/WordPress__mcp-adapter/.github/workflows/props-bot.yml)<br>[.github/workflows/release.yml](../../../../sources/WordPress__mcp-adapter/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/WordPress__mcp-adapter/.github/workflows/test.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [SECURITY.md](../../../../sources/WordPress__mcp-adapter/SECURITY.md) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `package.json`, `.github/workflows/copilot-setup-steps.yml`, `.github/workflows/dependency-review.yml`.
2. Map agent/tool runtime through: `tests/phpunit/Unit/Tools/McpToolTest.php`, `tests/phpunit/Unit/Tools/RegisterAbilityAsMcpToolTest.php`, `tests/phpunit/Unit/Domain/Tools/McpToolValidatorTest.php`.
3. Verify behavior through test/eval files: `.wp-env.test.json`, `tests/phpunit/bootstrap.php`, `tests/phpunit/TestCase.php`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 An MCP adapter that bridges the Abilities API to the Model Context Protocol, enabling MCP clients to discover and invoke. 핵심 구조 신호는 PHP, package.json, README.md, tests, ci, docs이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
