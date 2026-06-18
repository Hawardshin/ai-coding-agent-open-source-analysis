# continuedev/continue 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Local clone structure analysis: 3044 files, 511 directories.

## 요약

- 조사 단위: `sources/continuedev__continue` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,981 files, 498 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/config-yaml/src/schemas/mcp/convertJson.test.ts, packages/config-yaml/src/schemas/mcp/convertJson.ts, packages/config-yaml/src/schemas/mcp/index.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | continuedev/continue |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 33891 |
| Forks | 4697 |
| License | Apache-2.0 |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/continuedev__continue](../../../../sources/continuedev__continue) |
| 기존 보고서 | [reports/global-trending/repositories/continuedev__continue.md](../../../global-trending/repositories/continuedev__continue.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2981 / 498 |
| 관측 최대 깊이 | 12 |
| 상위 디렉터리 | .claude, .continue, .github, .husky, actions, binary, core, docs, docs-site, eval, extensions, gui, manual-testing-sandbox, media, packages, scripts, skills, sync |
| 상위 확장자 | .ts: 1416, .tsx: 351, .png: 271, .mdx: 152, .md: 124, .json: 116, .kt: 86, .scm: 68, .py: 51, .js: 48, (none): 41, .yml: 36 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/continue-sdk | packages workspace | 51 |
| packages/config-yaml | packages workspace | 29 |
| packages/openai-adapters | packages workspace | 26 |
| docs | documentation surface | 25 |
| packages/terminal-security | packages workspace | 13 |
| packages/fetch | packages workspace | 11 |
| packages/llm-info | packages workspace | 5 |
| packages/config-types | packages workspace | 4 |
| .github | ci surface | 1 |
| actions | top-level component | 1 |
| binary | top-level component | 1 |
| core | top-level component | 1 |
| docs-site | documentation surface | 1 |
| eval | top-level component | 1 |
| extensions | top-level component | 1 |
| gui | top-level component | 1 |
| manual-testing-sandbox | validation surface | 1 |
| media | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | tsc:watch | concurrently -n gui,vscode,core,binary -c cyan,magenta,yellow,green "npm run tsc:watch:gui" "npm run tsc:watch:vscode" "npm run tsc:watch:core" "npm run tsc:watch:binary" |
| serve-dev | package.json | tsc:watch:gui | tsc --project gui/tsconfig.json --watch --noEmit --pretty |
| serve-dev | package.json | tsc:watch:vscode | tsc --project extensions/vscode/tsconfig.json --watch --noEmit --pretty |
| serve-dev | package.json | tsc:watch:core | tsc --project core/tsconfig.json --watch --noEmit --pretty |
| serve-dev | package.json | tsc:watch:binary | tsc --project binary/tsconfig.json --watch --noEmit --pretty |
| quality | package.json | format | prettier --write "**/*.{js,jsx,ts,tsx,json,css,md}" --ignore-path .gitignore --ignore-path .prettierignore |
| quality | package.json | format:check | prettier --check "**/*.{js,jsx,ts,tsx,json,css,md}" --ignore-path .gitignore --ignore-path .prettierignore |
| utility | package.json | prepare | husky |


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
| mcp | [packages/config-yaml/src/schemas/mcp/convertJson.test.ts](../../../../sources/continuedev__continue/packages/config-yaml/src/schemas/mcp/convertJson.test.ts) | mcp signal |
| mcp | [packages/config-yaml/src/schemas/mcp/convertJson.ts](../../../../sources/continuedev__continue/packages/config-yaml/src/schemas/mcp/convertJson.ts) | mcp signal |
| mcp | [packages/config-yaml/src/schemas/mcp/index.ts](../../../../sources/continuedev__continue/packages/config-yaml/src/schemas/mcp/index.ts) | mcp signal |
| mcp | [packages/config-yaml/src/schemas/mcp/json.ts](../../../../sources/continuedev__continue/packages/config-yaml/src/schemas/mcp/json.ts) | mcp signal |
| agentRuntime | [skills/cn-check.zip](../../../../sources/continuedev__continue/skills/cn-check.zip) | agentRuntime signal |
| agentRuntime | [skills/cn-check/SKILL.md](../../../../sources/continuedev__continue/skills/cn-check/SKILL.md) | agentRuntime signal |
| agentRuntime | [packages/config-yaml/src/__tests__/packages/test-org/agent-with-non-existing-block.yaml](../../../../sources/continuedev__continue/packages/config-yaml/src/__tests__/packages/test-org/agent-with-non-existing-block.yaml) | agentRuntime signal |
| agentRuntime | [packages/config-yaml/src/__tests__/packages/test-org/agent.yaml](../../../../sources/continuedev__continue/packages/config-yaml/src/__tests__/packages/test-org/agent.yaml) | agentRuntime signal |
| entrypoints | [packages/terminal-security/src/index.ts](../../../../sources/continuedev__continue/packages/terminal-security/src/index.ts) | entrypoints signal |
| entrypoints | [packages/openai-adapters/src/index.ts](../../../../sources/continuedev__continue/packages/openai-adapters/src/index.ts) | entrypoints signal |
| entrypoints | [packages/llm-info/src/index.ts](../../../../sources/continuedev__continue/packages/llm-info/src/index.ts) | entrypoints signal |
| entrypoints | [packages/fetch/src/index.ts](../../../../sources/continuedev__continue/packages/fetch/src/index.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 14 | [packages/terminal-security/src/index.ts](../../../../sources/continuedev__continue/packages/terminal-security/src/index.ts)<br>[packages/openai-adapters/src/index.ts](../../../../sources/continuedev__continue/packages/openai-adapters/src/index.ts)<br>[packages/llm-info/src/index.ts](../../../../sources/continuedev__continue/packages/llm-info/src/index.ts)<br>[packages/fetch/src/index.ts](../../../../sources/continuedev__continue/packages/fetch/src/index.ts)<br>[packages/continue-sdk/typescript/src/index.ts](../../../../sources/continuedev__continue/packages/continue-sdk/typescript/src/index.ts)<br>[packages/continue-sdk/typescript/api/src/index.ts](../../../../sources/continuedev__continue/packages/continue-sdk/typescript/api/src/index.ts)<br>[packages/config-yaml/src/cli.ts](../../../../sources/continuedev__continue/packages/config-yaml/src/cli.ts)<br>[packages/config-yaml/src/index.ts](../../../../sources/continuedev__continue/packages/config-yaml/src/index.ts) |
| agentRuntime | 300 | [skills/cn-check.zip](../../../../sources/continuedev__continue/skills/cn-check.zip)<br>[skills/cn-check/SKILL.md](../../../../sources/continuedev__continue/skills/cn-check/SKILL.md)<br>[packages/config-yaml/src/__tests__/packages/test-org/agent-with-non-existing-block.yaml](../../../../sources/continuedev__continue/packages/config-yaml/src/__tests__/packages/test-org/agent-with-non-existing-block.yaml)<br>[packages/config-yaml/src/__tests__/packages/test-org/agent.yaml](../../../../sources/continuedev__continue/packages/config-yaml/src/__tests__/packages/test-org/agent.yaml)<br>[gui/src/redux/hooks.ts](../../../../sources/continuedev__continue/gui/src/redux/hooks.ts)<br>[gui/src/hooks/ParallelListeners.tsx](../../../../sources/continuedev__continue/gui/src/hooks/ParallelListeners.tsx)<br>[gui/src/hooks/useAppendedString.ts](../../../../sources/continuedev__continue/gui/src/hooks/useAppendedString.ts)<br>[gui/src/hooks/useArrayState.ts](../../../../sources/continuedev__continue/gui/src/hooks/useArrayState.ts) |
| mcp | 36 | [packages/config-yaml/src/schemas/mcp/convertJson.test.ts](../../../../sources/continuedev__continue/packages/config-yaml/src/schemas/mcp/convertJson.test.ts)<br>[packages/config-yaml/src/schemas/mcp/convertJson.ts](../../../../sources/continuedev__continue/packages/config-yaml/src/schemas/mcp/convertJson.ts)<br>[packages/config-yaml/src/schemas/mcp/index.ts](../../../../sources/continuedev__continue/packages/config-yaml/src/schemas/mcp/index.ts)<br>[packages/config-yaml/src/schemas/mcp/json.ts](../../../../sources/continuedev__continue/packages/config-yaml/src/schemas/mcp/json.ts)<br>[gui/src/pages/gui/ToolCallDiv/mcp-ext-apps.d.ts](../../../../sources/continuedev__continue/gui/src/pages/gui/ToolCallDiv/mcp-ext-apps.d.ts)<br>[extensions/cli/src/mcp-flag.integration.test.ts](../../../../sources/continuedev__continue/extensions/cli/src/mcp-flag.integration.test.ts)<br>[extensions/cli/spec/mcp.md](../../../../sources/continuedev__continue/extensions/cli/spec/mcp.md)<br>[docs/reference/continue-mcp.mdx](../../../../sources/continuedev__continue/docs/reference/continue-mcp.mdx) |
| retrieval | 121 | [scripts/util/index.js](../../../../sources/continuedev__continue/scripts/util/index.js)<br>[packages/terminal-security/src/index.ts](../../../../sources/continuedev__continue/packages/terminal-security/src/index.ts)<br>[packages/openai-adapters/src/index.ts](../../../../sources/continuedev__continue/packages/openai-adapters/src/index.ts)<br>[packages/llm-info/src/index.ts](../../../../sources/continuedev__continue/packages/llm-info/src/index.ts)<br>[packages/fetch/src/index.ts](../../../../sources/continuedev__continue/packages/fetch/src/index.ts)<br>[packages/continue-sdk/typescript/src/index.ts](../../../../sources/continuedev__continue/packages/continue-sdk/typescript/src/index.ts)<br>[packages/continue-sdk/typescript/api/src/index.ts](../../../../sources/continuedev__continue/packages/continue-sdk/typescript/api/src/index.ts)<br>[packages/continue-sdk/typescript/api/src/models/index.ts](../../../../sources/continuedev__continue/packages/continue-sdk/typescript/api/src/models/index.ts) |
| spec | 17 | [packages/continue-sdk/python/api/requirements.txt](../../../../sources/continuedev__continue/packages/continue-sdk/python/api/requirements.txt)<br>[packages/continue-sdk/python/api/test-requirements.txt](../../../../sources/continuedev__continue/packages/continue-sdk/python/api/test-requirements.txt)<br>[manual-testing-sandbox/requirements.txt](../../../../sources/continuedev__continue/manual-testing-sandbox/requirements.txt)<br>[extensions/cli/src/e2e/spec.md](../../../../sources/continuedev__continue/extensions/cli/src/e2e/spec.md)<br>[extensions/cli/spec/config-loading.md](../../../../sources/continuedev__continue/extensions/cli/spec/config-loading.md)<br>[extensions/cli/spec/ctrl-c-behavior.md](../../../../sources/continuedev__continue/extensions/cli/spec/ctrl-c-behavior.md)<br>[extensions/cli/spec/index.md](../../../../sources/continuedev__continue/extensions/cli/spec/index.md)<br>[extensions/cli/spec/mcp.md](../../../../sources/continuedev__continue/extensions/cli/spec/mcp.md) |
| eval | 490 | [packages/terminal-security/test/terminalCommandSecurity.test.ts](../../../../sources/continuedev__continue/packages/terminal-security/test/terminalCommandSecurity.test.ts)<br>[packages/openai-adapters/src/test/adapter-test-utils.ts](../../../../sources/continuedev__continue/packages/openai-adapters/src/test/adapter-test-utils.ts)<br>[packages/openai-adapters/src/test/anthropic-adapter.vitest.ts](../../../../sources/continuedev__continue/packages/openai-adapters/src/test/anthropic-adapter.vitest.ts)<br>[packages/openai-adapters/src/test/anthropic-caching-scenarios.live.test.ts](../../../../sources/continuedev__continue/packages/openai-adapters/src/test/anthropic-caching-scenarios.live.test.ts)<br>[packages/openai-adapters/src/test/anthropic-caching.live.test.ts](../../../../sources/continuedev__continue/packages/openai-adapters/src/test/anthropic-caching.live.test.ts)<br>[packages/openai-adapters/src/test/asksage-adapter.vitest.ts](../../../../sources/continuedev__continue/packages/openai-adapters/src/test/asksage-adapter.vitest.ts)<br>[packages/openai-adapters/src/test/cli-tools.test.ts](../../../../sources/continuedev__continue/packages/openai-adapters/src/test/cli-tools.test.ts)<br>[packages/openai-adapters/src/test/convertToolsToVercel.test.ts](../../../../sources/continuedev__continue/packages/openai-adapters/src/test/convertToolsToVercel.test.ts) |
| security | 77 | [SECURITY.md](../../../../sources/continuedev__continue/SECURITY.md)<br>[packages/terminal-security/package-lock.json](../../../../sources/continuedev__continue/packages/terminal-security/package-lock.json)<br>[packages/terminal-security/package.json](../../../../sources/continuedev__continue/packages/terminal-security/package.json)<br>[packages/terminal-security/tsconfig.json](../../../../sources/continuedev__continue/packages/terminal-security/tsconfig.json)<br>[packages/terminal-security/vitest.config.ts](../../../../sources/continuedev__continue/packages/terminal-security/vitest.config.ts)<br>[packages/terminal-security/test/terminalCommandSecurity.test.ts](../../../../sources/continuedev__continue/packages/terminal-security/test/terminalCommandSecurity.test.ts)<br>[packages/terminal-security/src/evaluateTerminalCommandSecurity.ts](../../../../sources/continuedev__continue/packages/terminal-security/src/evaluateTerminalCommandSecurity.ts)<br>[packages/terminal-security/src/index.ts](../../../../sources/continuedev__continue/packages/terminal-security/src/index.ts) |
| ci | 36 | [packages/continue-sdk/python/api/.gitlab-ci.yml](../../../../sources/continuedev__continue/packages/continue-sdk/python/api/.gitlab-ci.yml)<br>[packages/continue-sdk/python/api/.github/workflows/python.yml](../../../../sources/continuedev__continue/packages/continue-sdk/python/api/.github/workflows/python.yml)<br>[extensions/cli/.github/workflows/release.yml](../../../../sources/continuedev__continue/extensions/cli/.github/workflows/release.yml)<br>[.github/workflows/auto-assign-issue.yaml](../../../../sources/continuedev__continue/.github/workflows/auto-assign-issue.yaml)<br>[.github/workflows/auto-fix-failed-tests.yml](../../../../sources/continuedev__continue/.github/workflows/auto-fix-failed-tests.yml)<br>[.github/workflows/auto-release.yml](../../../../sources/continuedev__continue/.github/workflows/auto-release.yml)<br>[.github/workflows/cla.yaml](../../../../sources/continuedev__continue/.github/workflows/cla.yaml)<br>[.github/workflows/cli-pr-checks.yml](../../../../sources/continuedev__continue/.github/workflows/cli-pr-checks.yml) |
| container | 3 | [manual-testing-sandbox/Dockerfile](../../../../sources/continuedev__continue/manual-testing-sandbox/Dockerfile)<br>[extensions/vscode/textmate-syntaxes/Dockerfile.tmLanguage](../../../../sources/continuedev__continue/extensions/vscode/textmate-syntaxes/Dockerfile.tmLanguage)<br>[core/deploy/constants.ts](../../../../sources/continuedev__continue/core/deploy/constants.ts) |
| instruction | 2 | [extensions/cli/AGENTS.md](../../../../sources/continuedev__continue/extensions/cli/AGENTS.md)<br>[docs/customize/model-providers/top-level/gemini.mdx](../../../../sources/continuedev__continue/docs/customize/model-providers/top-level/gemini.mdx) |
| docs | 501 | [README.md](../../../../sources/continuedev__continue/README.md)<br>[sync/src/README.md](../../../../sources/continuedev__continue/sync/src/README.md)<br>[packages/openai-adapters/README.md](../../../../sources/continuedev__continue/packages/openai-adapters/README.md)<br>[packages/llm-info/README.md](../../../../sources/continuedev__continue/packages/llm-info/README.md)<br>[packages/continue-sdk/README.md](../../../../sources/continuedev__continue/packages/continue-sdk/README.md)<br>[packages/continue-sdk/typescript/README.md](../../../../sources/continuedev__continue/packages/continue-sdk/typescript/README.md)<br>[packages/continue-sdk/typescript/api/README.md](../../../../sources/continuedev__continue/packages/continue-sdk/typescript/api/README.md)<br>[packages/continue-sdk/python/README.md](../../../../sources/continuedev__continue/packages/continue-sdk/python/README.md) |
| config | 45 | [package.json](../../../../sources/continuedev__continue/package.json)<br>[tsconfig.json](../../../../sources/continuedev__continue/tsconfig.json)<br>[sync/Cargo.lock](../../../../sources/continuedev__continue/sync/Cargo.lock)<br>[sync/Cargo.toml](../../../../sources/continuedev__continue/sync/Cargo.toml)<br>[packages/terminal-security/package.json](../../../../sources/continuedev__continue/packages/terminal-security/package.json)<br>[packages/terminal-security/tsconfig.json](../../../../sources/continuedev__continue/packages/terminal-security/tsconfig.json)<br>[packages/openai-adapters/package.json](../../../../sources/continuedev__continue/packages/openai-adapters/package.json)<br>[packages/openai-adapters/tsconfig.json](../../../../sources/continuedev__continue/packages/openai-adapters/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 490 | [packages/terminal-security/test/terminalCommandSecurity.test.ts](../../../../sources/continuedev__continue/packages/terminal-security/test/terminalCommandSecurity.test.ts)<br>[packages/openai-adapters/src/test/adapter-test-utils.ts](../../../../sources/continuedev__continue/packages/openai-adapters/src/test/adapter-test-utils.ts)<br>[packages/openai-adapters/src/test/anthropic-adapter.vitest.ts](../../../../sources/continuedev__continue/packages/openai-adapters/src/test/anthropic-adapter.vitest.ts)<br>[packages/openai-adapters/src/test/anthropic-caching-scenarios.live.test.ts](../../../../sources/continuedev__continue/packages/openai-adapters/src/test/anthropic-caching-scenarios.live.test.ts)<br>[packages/openai-adapters/src/test/anthropic-caching.live.test.ts](../../../../sources/continuedev__continue/packages/openai-adapters/src/test/anthropic-caching.live.test.ts)<br>[packages/openai-adapters/src/test/asksage-adapter.vitest.ts](../../../../sources/continuedev__continue/packages/openai-adapters/src/test/asksage-adapter.vitest.ts) |
| CI workflow | 36 | [packages/continue-sdk/python/api/.gitlab-ci.yml](../../../../sources/continuedev__continue/packages/continue-sdk/python/api/.gitlab-ci.yml)<br>[packages/continue-sdk/python/api/.github/workflows/python.yml](../../../../sources/continuedev__continue/packages/continue-sdk/python/api/.github/workflows/python.yml)<br>[extensions/cli/.github/workflows/release.yml](../../../../sources/continuedev__continue/extensions/cli/.github/workflows/release.yml)<br>[.github/workflows/auto-assign-issue.yaml](../../../../sources/continuedev__continue/.github/workflows/auto-assign-issue.yaml)<br>[.github/workflows/auto-fix-failed-tests.yml](../../../../sources/continuedev__continue/.github/workflows/auto-fix-failed-tests.yml)<br>[.github/workflows/auto-release.yml](../../../../sources/continuedev__continue/.github/workflows/auto-release.yml) |
| 컨테이너/배포 | 3 | [manual-testing-sandbox/Dockerfile](../../../../sources/continuedev__continue/manual-testing-sandbox/Dockerfile)<br>[extensions/vscode/textmate-syntaxes/Dockerfile.tmLanguage](../../../../sources/continuedev__continue/extensions/vscode/textmate-syntaxes/Dockerfile.tmLanguage)<br>[core/deploy/constants.ts](../../../../sources/continuedev__continue/core/deploy/constants.ts) |
| 보안/정책 | 77 | [SECURITY.md](../../../../sources/continuedev__continue/SECURITY.md)<br>[packages/terminal-security/package-lock.json](../../../../sources/continuedev__continue/packages/terminal-security/package-lock.json)<br>[packages/terminal-security/package.json](../../../../sources/continuedev__continue/packages/terminal-security/package.json)<br>[packages/terminal-security/tsconfig.json](../../../../sources/continuedev__continue/packages/terminal-security/tsconfig.json)<br>[packages/terminal-security/vitest.config.ts](../../../../sources/continuedev__continue/packages/terminal-security/vitest.config.ts)<br>[packages/terminal-security/test/terminalCommandSecurity.test.ts](../../../../sources/continuedev__continue/packages/terminal-security/test/terminalCommandSecurity.test.ts) |
| 에이전트 지시문 | 2 | [extensions/cli/AGENTS.md](../../../../sources/continuedev__continue/extensions/cli/AGENTS.md)<br>[docs/customize/model-providers/top-level/gemini.mdx](../../../../sources/continuedev__continue/docs/customize/model-providers/top-level/gemini.mdx) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/config-yaml/src/schemas/mcp/convertJson.test.ts`, `packages/config-yaml/src/schemas/mcp/convertJson.ts`, `packages/config-yaml/src/schemas/mcp/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `packages/terminal-security/src/index.ts`, `packages/openai-adapters/src/index.ts`, `packages/llm-info/src/index.ts`.
3. agent/tool runtime 매핑: `skills/cn-check.zip`, `skills/cn-check/SKILL.md`, `packages/config-yaml/src/__tests__/packages/test-org/agent-with-non-existing-block.yaml`.
4. retrieval/memory/indexing 확인: `scripts/util/index.js`, `packages/terminal-security/src/index.ts`, `packages/openai-adapters/src/index.ts`.
5. test/eval 파일로 동작 검증: `packages/terminal-security/test/terminalCommandSecurity.test.ts`, `packages/openai-adapters/src/test/adapter-test-utils.ts`, `packages/openai-adapters/src/test/anthropic-adapter.vitest.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 3044 files, 511 directories.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, tests, ci이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 큰 메타데이터 위험이 명확하지 않음입니다.
