# SonarSource/sonarqube-cli 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Command-line interface for SonarQube with AI agent integration. Scan for secrets and get fast feedback on code quality and security from your terminal.

## 요약

- 조사 단위: `sources/SonarSource__sonarqube-cli` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 493 files, 123 directories, depth score 106, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/index.ts이고, 의존성 단서는 commander, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | SonarSource/sonarqube-cli |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 192 |
| Forks | 8 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/SonarSource__sonarqube-cli](../../../../sources/SonarSource__sonarqube-cli) |
| 기존 보고서 | [reports/global-trending/repositories/SonarSource__sonarqube-cli.md](../../../global-trending/repositories/SonarSource__sonarqube-cli.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 493 / 123 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .claude, .cursor, .github, .husky, .sonarlint, build-scripts, docs, src, tests, user-scripts |
| 상위 확장자 | .ts: 424, .yml: 17, .json: 9, .md: 8, (none): 8, .svg: 6, .sh: 4, .html: 2, .ps1: 2, .template: 2, .toml: 2, .txt: 2 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 100 |
| src | source boundary | 37 |
| docs | documentation surface | 18 |
| .github | ci surface | 1 |
| build-scripts | top-level component | 1 |
| user-scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | commander |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.ts](../../../../sources/SonarSource__sonarqube-cli/src/index.ts) |
| agentRuntime | 86 | [tests/unit/lib/agent-detector.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/lib/agent-detector.test.ts)<br>[tests/unit/lib/tool-detector.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/lib/tool-detector.test.ts)<br>[tests/unit/cli/commands/integrate/codex/hook-templates.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/integrate/codex/hook-templates.test.ts)<br>[tests/unit/cli/commands/integrate/claude/hook-templates.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/integrate/claude/hook-templates.test.ts)<br>[tests/unit/cli/commands/integrate/claude/hooks.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/integrate/claude/hooks.test.ts)<br>[tests/unit/cli/commands/integrate/antigravity/hook-templates.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/integrate/antigravity/hook-templates.test.ts)<br>[tests/unit/cli/commands/integrate/antigravity/hooks.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/integrate/antigravity/hooks.test.ts)<br>[tests/unit/cli/commands/integrate/_common/agent-integrate-prelude.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/integrate/_common/agent-integrate-prelude.test.ts) |
| mcp | 11 | [.mcp.json](../../../../sources/SonarSource__sonarqube-cli/.mcp.json)<br>[tests/unit/cli/commands/run/mcp.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/run/mcp.test.ts)<br>[tests/unit/cli/commands/integrate/copilot/mcp.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/integrate/copilot/mcp.test.ts)<br>[tests/unit/cli/commands/integrate/claude/mcp.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/integrate/claude/mcp.test.ts)<br>[tests/unit/cli/commands/integrate/_common/mcp-config.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/integrate/_common/mcp-config.test.ts)<br>[tests/integration/specs/run/mcp.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/integration/specs/run/mcp.test.ts)<br>[src/lib/mcp/mcp-helper.ts](../../../../sources/SonarSource__sonarqube-cli/src/lib/mcp/mcp-helper.ts)<br>[src/cli/commands/run/mcp.ts](../../../../sources/SonarSource__sonarqube-cli/src/cli/commands/run/mcp.ts) |
| retrieval | 26 | [tests/unit/cli/commands/integrate/index.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/integrate/index.test.ts)<br>[tests/unit/cli/commands/analyze/sqaa-api-chunk-fetch.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/analyze/sqaa-api-chunk-fetch.test.ts)<br>[tests/integration/harness/index.ts](../../../../sources/SonarSource__sonarqube-cli/tests/integration/harness/index.ts)<br>[src/index.ts](../../../../sources/SonarSource__sonarqube-cli/src/index.ts)<br>[src/ui/index.ts](../../../../sources/SonarSource__sonarqube-cli/src/ui/index.ts)<br>[src/telemetry/index.ts](../../../../sources/SonarSource__sonarqube-cli/src/telemetry/index.ts)<br>[src/lib/project-workspace/index.ts](../../../../sources/SonarSource__sonarqube-cli/src/lib/project-workspace/index.ts)<br>[src/cli/commands/remediate/index.ts](../../../../sources/SonarSource__sonarqube-cli/src/cli/commands/remediate/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 192 | [tests/unit/server-info.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/server-info.test.ts)<br>[tests/unit/ui/messages.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/ui/messages.test.ts)<br>[tests/unit/ui/note-plain.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/ui/note-plain.test.ts)<br>[tests/unit/ui/note.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/ui/note.test.ts)<br>[tests/unit/ui/prompts-real.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/ui/prompts-real.test.ts)<br>[tests/unit/ui/prompts.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/ui/prompts.test.ts)<br>[tests/unit/ui/spinner-tty.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/ui/spinner-tty.test.ts)<br>[tests/unit/ui/sqaa-progress.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/ui/sqaa-progress.test.ts) |
| security | 20 | [SECURITY.md](../../../../sources/SonarSource__sonarqube-cli/SECURITY.md)<br>[tests/unit/cli/commands/system/reset-auth.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/system/reset-auth.test.ts)<br>[tests/unit/cli/commands/auth/auth-helpers.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/auth/auth-helpers.test.ts)<br>[tests/unit/cli/commands/auth/auth-keychain.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/auth/auth-keychain.test.ts)<br>[tests/unit/cli/commands/auth/auth-resolver.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/auth/auth-resolver.test.ts)<br>[tests/unit/cli/commands/auth/auth-security.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/auth/auth-security.test.ts)<br>[tests/unit/cli/commands/auth/auth-token-interactive.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/auth/auth-token-interactive.test.ts)<br>[tests/unit/cli/commands/analyze/secret-scan.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/analyze/secret-scan.test.ts) |
| ci | 13 | [.github/workflows/build.yml](../../../../sources/SonarSource__sonarqube-cli/.github/workflows/build.yml)<br>[.github/workflows/ci-failure-triage-agent.lock.yml](../../../../sources/SonarSource__sonarqube-cli/.github/workflows/ci-failure-triage-agent.lock.yml)<br>[.github/workflows/ci-failure-triage-agent.md](../../../../sources/SonarSource__sonarqube-cli/.github/workflows/ci-failure-triage-agent.md)<br>[.github/workflows/full-release.yml](../../../../sources/SonarSource__sonarqube-cli/.github/workflows/full-release.yml)<br>[.github/workflows/notify-failure.yml](../../../../sources/SonarSource__sonarqube-cli/.github/workflows/notify-failure.yml)<br>[.github/workflows/pr-cleanup.yml](../../../../sources/SonarSource__sonarqube-cli/.github/workflows/pr-cleanup.yml)<br>[.github/workflows/prepare-release-notes.yml](../../../../sources/SonarSource__sonarqube-cli/.github/workflows/prepare-release-notes.yml)<br>[.github/workflows/PullRequestClosed.yml](../../../../sources/SonarSource__sonarqube-cli/.github/workflows/PullRequestClosed.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 2 | [CLAUDE.md](../../../../sources/SonarSource__sonarqube-cli/CLAUDE.md)<br>[.cursor/rules/sonarqube-cli.mdc](../../../../sources/SonarSource__sonarqube-cli/.cursor/rules/sonarqube-cli.mdc) |
| docs | 21 | [README.md](../../../../sources/SonarSource__sonarqube-cli/README.md)<br>[docs/commands.html](../../../../sources/SonarSource__sonarqube-cli/docs/commands.html)<br>[docs/favicon.ico](../../../../sources/SonarSource__sonarqube-cli/docs/favicon.ico)<br>[docs/favicon.svg](../../../../sources/SonarSource__sonarqube-cli/docs/favicon.svg)<br>[docs/index.html](../../../../sources/SonarSource__sonarqube-cli/docs/index.html)<br>[docs/llms.txt](../../../../sources/SonarSource__sonarqube-cli/docs/llms.txt)<br>[docs/robots.txt](../../../../sources/SonarSource__sonarqube-cli/docs/robots.txt)<br>[docs/sample-state.json](../../../../sources/SonarSource__sonarqube-cli/docs/sample-state.json) |
| config | 2 | [package.json](../../../../sources/SonarSource__sonarqube-cli/package.json)<br>[tsconfig.json](../../../../sources/SonarSource__sonarqube-cli/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 192 | [tests/unit/server-info.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/server-info.test.ts)<br>[tests/unit/ui/messages.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/ui/messages.test.ts)<br>[tests/unit/ui/note-plain.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/ui/note-plain.test.ts)<br>[tests/unit/ui/note.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/ui/note.test.ts)<br>[tests/unit/ui/prompts-real.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/ui/prompts-real.test.ts)<br>[tests/unit/ui/prompts.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/ui/prompts.test.ts) |
| CI workflow | 13 | [.github/workflows/build.yml](../../../../sources/SonarSource__sonarqube-cli/.github/workflows/build.yml)<br>[.github/workflows/ci-failure-triage-agent.lock.yml](../../../../sources/SonarSource__sonarqube-cli/.github/workflows/ci-failure-triage-agent.lock.yml)<br>[.github/workflows/ci-failure-triage-agent.md](../../../../sources/SonarSource__sonarqube-cli/.github/workflows/ci-failure-triage-agent.md)<br>[.github/workflows/full-release.yml](../../../../sources/SonarSource__sonarqube-cli/.github/workflows/full-release.yml)<br>[.github/workflows/notify-failure.yml](../../../../sources/SonarSource__sonarqube-cli/.github/workflows/notify-failure.yml)<br>[.github/workflows/pr-cleanup.yml](../../../../sources/SonarSource__sonarqube-cli/.github/workflows/pr-cleanup.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 20 | [SECURITY.md](../../../../sources/SonarSource__sonarqube-cli/SECURITY.md)<br>[tests/unit/cli/commands/system/reset-auth.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/system/reset-auth.test.ts)<br>[tests/unit/cli/commands/auth/auth-helpers.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/auth/auth-helpers.test.ts)<br>[tests/unit/cli/commands/auth/auth-keychain.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/auth/auth-keychain.test.ts)<br>[tests/unit/cli/commands/auth/auth-resolver.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/auth/auth-resolver.test.ts)<br>[tests/unit/cli/commands/auth/auth-security.test.ts](../../../../sources/SonarSource__sonarqube-cli/tests/unit/cli/commands/auth/auth-security.test.ts) |
| 에이전트 지시문 | 2 | [CLAUDE.md](../../../../sources/SonarSource__sonarqube-cli/CLAUDE.md)<br>[.cursor/rules/sonarqube-cli.mdc](../../../../sources/SonarSource__sonarqube-cli/.cursor/rules/sonarqube-cli.mdc) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/index.ts`, `package.json`, `tsconfig.json`.
2. entrypoint를 따라 실행 흐름 확인: `src/index.ts`.
3. agent/tool runtime 매핑: `tests/unit/lib/agent-detector.test.ts`, `tests/unit/lib/tool-detector.test.ts`, `tests/unit/cli/commands/integrate/codex/hook-templates.test.ts`.
4. retrieval/memory/indexing 확인: `tests/unit/cli/commands/integrate/index.test.ts`, `tests/unit/cli/commands/analyze/sqaa-api-chunk-fetch.test.ts`, `tests/integration/harness/index.ts`.
5. test/eval 파일로 동작 검증: `tests/unit/server-info.test.ts`, `tests/unit/ui/messages.test.ts`, `tests/unit/ui/note-plain.test.ts`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Command line interface for SonarQube with AI agent integration. Scan for secrets and get fast feedback on code quality a. 핵심 구조 신호는 TypeScript, package.json, README.md, CLAUDE.md, LICENSE, tests이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
