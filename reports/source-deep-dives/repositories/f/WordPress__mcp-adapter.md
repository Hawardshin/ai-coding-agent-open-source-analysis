# WordPress/mcp-adapter 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

An MCP adapter that bridges the Abilities API to the Model Context Protocol, enabling MCP clients to discover and invoke WordPress plugin, theme, and core abilities programmatically.

## 요약

- 조사 단위: `sources/WordPress__mcp-adapter` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 180 files, 63 directories, depth score 89, key references 11개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 agent/tool runtime, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 config=package.json이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | WordPress/mcp-adapter |
| 주제 | 개발 생산성/DevTools / 개발 생산성/DevTools |
| Region | global |
| Language | PHP |
| Stars | 1292 |
| Forks | 145 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/WordPress__mcp-adapter](../../../../sources/WordPress__mcp-adapter) |
| 기존 보고서 | [reports/global-trending/repositories/WordPress__mcp-adapter.md](../../../global-trending/repositories/WordPress__mcp-adapter.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 180 / 63 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, docs, includes, tests |
| 상위 확장자 | .php: 133, .md: 21, .yml: 7, (none): 7, .json: 5, .dist: 3, .js: 1, .lock: 1, .stub: 1, .txt: 1 |
| 소스 패턴 | agent/tool runtime, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 43 |
| docs | documentation surface | 18 |
| .github | ci surface | 1 |
| includes | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 7 | [tests/phpunit/Unit/Tools/McpToolTest.php](../../../../sources/WordPress__mcp-adapter/tests/phpunit/Unit/Tools/McpToolTest.php)<br>[tests/phpunit/Unit/Tools/RegisterAbilityAsMcpToolTest.php](../../../../sources/WordPress__mcp-adapter/tests/phpunit/Unit/Tools/RegisterAbilityAsMcpToolTest.php)<br>[tests/phpunit/Unit/Domain/Tools/McpToolValidatorTest.php](../../../../sources/WordPress__mcp-adapter/tests/phpunit/Unit/Domain/Tools/McpToolValidatorTest.php)<br>[includes/Handlers/Tools/ToolsHandler.php](../../../../sources/WordPress__mcp-adapter/includes/Handlers/Tools/ToolsHandler.php)<br>[includes/Domain/Tools/McpTool.php](../../../../sources/WordPress__mcp-adapter/includes/Domain/Tools/McpTool.php)<br>[includes/Domain/Tools/McpToolValidator.php](../../../../sources/WordPress__mcp-adapter/includes/Domain/Tools/McpToolValidator.php)<br>[includes/Domain/Tools/RegisterAbilityAsMcpTool.php](../../../../sources/WordPress__mcp-adapter/includes/Domain/Tools/RegisterAbilityAsMcpTool.php) |
| mcp | 1 | [mcp-adapter.php](../../../../sources/WordPress__mcp-adapter/mcp-adapter.php) |
| retrieval | 0 | 명확하지 않음 |
| spec | 1 | [docs/architecture/overview.md](../../../../sources/WordPress__mcp-adapter/docs/architecture/overview.md) |
| eval | 84 | [.wp-env.test.json](../../../../sources/WordPress__mcp-adapter/.wp-env.test.json)<br>[tests/phpunit/bootstrap.php](../../../../sources/WordPress__mcp-adapter/tests/phpunit/bootstrap.php)<br>[tests/phpunit/TestCase.php](../../../../sources/WordPress__mcp-adapter/tests/phpunit/TestCase.php)<br>[tests/phpunit/Unit/McpServerTest.php](../../../../sources/WordPress__mcp-adapter/tests/phpunit/Unit/McpServerTest.php)<br>[tests/phpunit/Unit/McpTransportTest.php](../../../../sources/WordPress__mcp-adapter/tests/phpunit/Unit/McpTransportTest.php)<br>[tests/phpunit/Unit/PluginTest.php](../../../../sources/WordPress__mcp-adapter/tests/phpunit/Unit/PluginTest.php)<br>[tests/phpunit/Unit/Transport/McpSessionManagerTest.php](../../../../sources/WordPress__mcp-adapter/tests/phpunit/Unit/Transport/McpSessionManagerTest.php)<br>[tests/phpunit/Unit/Transport/Infrastructure/DtoSerializationRegressionTest.php](../../../../sources/WordPress__mcp-adapter/tests/phpunit/Unit/Transport/Infrastructure/DtoSerializationRegressionTest.php) |
| security | 1 | [SECURITY.md](../../../../sources/WordPress__mcp-adapter/SECURITY.md) |
| ci | 6 | [.github/workflows/copilot-setup-steps.yml](../../../../sources/WordPress__mcp-adapter/.github/workflows/copilot-setup-steps.yml)<br>[.github/workflows/dependency-review.yml](../../../../sources/WordPress__mcp-adapter/.github/workflows/dependency-review.yml)<br>[.github/workflows/plugin-check.yml](../../../../sources/WordPress__mcp-adapter/.github/workflows/plugin-check.yml)<br>[.github/workflows/props-bot.yml](../../../../sources/WordPress__mcp-adapter/.github/workflows/props-bot.yml)<br>[.github/workflows/release.yml](../../../../sources/WordPress__mcp-adapter/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/WordPress__mcp-adapter/.github/workflows/test.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 18 | [README.md](../../../../sources/WordPress__mcp-adapter/README.md)<br>[readme.txt](../../../../sources/WordPress__mcp-adapter/readme.txt)<br>[docs/README.md](../../../../sources/WordPress__mcp-adapter/docs/README.md)<br>[docs/troubleshooting/common-issues.md](../../../../sources/WordPress__mcp-adapter/docs/troubleshooting/common-issues.md)<br>[docs/migration/v0.3.0.md](../../../../sources/WordPress__mcp-adapter/docs/migration/v0.3.0.md)<br>[docs/migration/v0.5.0.md](../../../../sources/WordPress__mcp-adapter/docs/migration/v0.5.0.md)<br>[docs/guides/cli-usage.md](../../../../sources/WordPress__mcp-adapter/docs/guides/cli-usage.md)<br>[docs/guides/creating-abilities.md](../../../../sources/WordPress__mcp-adapter/docs/guides/creating-abilities.md) |
| config | 1 | [package.json](../../../../sources/WordPress__mcp-adapter/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 84 | [.wp-env.test.json](../../../../sources/WordPress__mcp-adapter/.wp-env.test.json)<br>[tests/phpunit/bootstrap.php](../../../../sources/WordPress__mcp-adapter/tests/phpunit/bootstrap.php)<br>[tests/phpunit/TestCase.php](../../../../sources/WordPress__mcp-adapter/tests/phpunit/TestCase.php)<br>[tests/phpunit/Unit/McpServerTest.php](../../../../sources/WordPress__mcp-adapter/tests/phpunit/Unit/McpServerTest.php)<br>[tests/phpunit/Unit/McpTransportTest.php](../../../../sources/WordPress__mcp-adapter/tests/phpunit/Unit/McpTransportTest.php)<br>[tests/phpunit/Unit/PluginTest.php](../../../../sources/WordPress__mcp-adapter/tests/phpunit/Unit/PluginTest.php) |
| CI workflow | 6 | [.github/workflows/copilot-setup-steps.yml](../../../../sources/WordPress__mcp-adapter/.github/workflows/copilot-setup-steps.yml)<br>[.github/workflows/dependency-review.yml](../../../../sources/WordPress__mcp-adapter/.github/workflows/dependency-review.yml)<br>[.github/workflows/plugin-check.yml](../../../../sources/WordPress__mcp-adapter/.github/workflows/plugin-check.yml)<br>[.github/workflows/props-bot.yml](../../../../sources/WordPress__mcp-adapter/.github/workflows/props-bot.yml)<br>[.github/workflows/release.yml](../../../../sources/WordPress__mcp-adapter/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/WordPress__mcp-adapter/.github/workflows/test.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [SECURITY.md](../../../../sources/WordPress__mcp-adapter/SECURITY.md) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `package.json`, `.github/workflows/copilot-setup-steps.yml`, `.github/workflows/dependency-review.yml`.
2. agent/tool runtime 매핑: `tests/phpunit/Unit/Tools/McpToolTest.php`, `tests/phpunit/Unit/Tools/RegisterAbilityAsMcpToolTest.php`, `tests/phpunit/Unit/Domain/Tools/McpToolValidatorTest.php`.
3. test/eval 파일로 동작 검증: `.wp-env.test.json`, `tests/phpunit/bootstrap.php`, `tests/phpunit/TestCase.php`.

## 기존 레포 인사이트

개발 생산성/DevTools 관점에서 An MCP adapter that bridges the Abilities API to the Model Context Protocol, enabling MCP clients to discover and invoke. 핵심 구조 신호는 PHP, package.json, README.md, tests, ci, docs이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
