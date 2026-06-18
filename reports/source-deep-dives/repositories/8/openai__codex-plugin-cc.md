# openai/codex-plugin-cc 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Local clone structure analysis: 61 files, 20 directories.

## 요약

- 조사 단위: `sources/openai__codex-plugin-cc` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 61 files, 20 directories, depth score 60, key references 8개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=plugins/codex/skills/gpt-5-4-prompting/SKILL.md, plugins/codex/skills/gpt-5-4-prompting/references/codex-prompt-antipatterns.md, plugins/codex/skills/gpt-5-4-prompting/references/codex-prompt-recipes.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | openai/codex-plugin-cc |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/openai__codex-plugin-cc](../../../../sources/openai__codex-plugin-cc) |
| 기존 보고서 | [reports/clone-structures/openai__codex-plugin-cc.md](../../../clone-structures/openai__codex-plugin-cc.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 61 / 20 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .claude-plugin, .github, plugins, scripts, tests |
| 상위 확장자 | .mjs: 29, .md: 18, .json: 7, (none): 5, .ts: 1, .yml: 1 |
| 소스 패턴 | agent/tool runtime, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 11 |
| .github | ci surface | 1 |
| plugins | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | bump-version | node scripts/bump-version.mjs |
| quality | package.json | check-version | node scripts/bump-version.mjs --check |
| serve-dev | package.json | prebuild | mkdir -p plugins/codex/.generated/app-server-types && codex app-server generate-ts --out plugins/codex/.generated/app-server-types |
| serve-dev | package.json | build | tsc -p tsconfig.app-server.json |
| test | package.json | test | node --test tests/*.test.mjs |


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
| agentRuntime | [plugins/codex/skills/gpt-5-4-prompting/SKILL.md](../../../../sources/openai__codex-plugin-cc/plugins/codex/skills/gpt-5-4-prompting/SKILL.md) | agentRuntime signal |
| agentRuntime | [plugins/codex/skills/gpt-5-4-prompting/references/codex-prompt-antipatterns.md](../../../../sources/openai__codex-plugin-cc/plugins/codex/skills/gpt-5-4-prompting/references/codex-prompt-antipatterns.md) | agentRuntime signal |
| agentRuntime | [plugins/codex/skills/gpt-5-4-prompting/references/codex-prompt-recipes.md](../../../../sources/openai__codex-plugin-cc/plugins/codex/skills/gpt-5-4-prompting/references/codex-prompt-recipes.md) | agentRuntime signal |
| agentRuntime | [plugins/codex/skills/gpt-5-4-prompting/references/prompt-blocks.md](../../../../sources/openai__codex-plugin-cc/plugins/codex/skills/gpt-5-4-prompting/references/prompt-blocks.md) | agentRuntime signal |
| config | [package.json](../../../../sources/openai__codex-plugin-cc/package.json) | config signal |
| ci | [.github/workflows/pull-request-ci.yml](../../../../sources/openai__codex-plugin-cc/.github/workflows/pull-request-ci.yml) | ci support |
| eval | [tests/broker-endpoint.test.mjs](../../../../sources/openai__codex-plugin-cc/tests/broker-endpoint.test.mjs) | eval support |
| eval | [tests/bump-version.test.mjs](../../../../sources/openai__codex-plugin-cc/tests/bump-version.test.mjs) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 8 | [plugins/codex/skills/gpt-5-4-prompting/SKILL.md](../../../../sources/openai__codex-plugin-cc/plugins/codex/skills/gpt-5-4-prompting/SKILL.md)<br>[plugins/codex/skills/gpt-5-4-prompting/references/codex-prompt-antipatterns.md](../../../../sources/openai__codex-plugin-cc/plugins/codex/skills/gpt-5-4-prompting/references/codex-prompt-antipatterns.md)<br>[plugins/codex/skills/gpt-5-4-prompting/references/codex-prompt-recipes.md](../../../../sources/openai__codex-plugin-cc/plugins/codex/skills/gpt-5-4-prompting/references/codex-prompt-recipes.md)<br>[plugins/codex/skills/gpt-5-4-prompting/references/prompt-blocks.md](../../../../sources/openai__codex-plugin-cc/plugins/codex/skills/gpt-5-4-prompting/references/prompt-blocks.md)<br>[plugins/codex/skills/codex-result-handling/SKILL.md](../../../../sources/openai__codex-plugin-cc/plugins/codex/skills/codex-result-handling/SKILL.md)<br>[plugins/codex/skills/codex-cli-runtime/SKILL.md](../../../../sources/openai__codex-plugin-cc/plugins/codex/skills/codex-cli-runtime/SKILL.md)<br>[plugins/codex/hooks/hooks.json](../../../../sources/openai__codex-plugin-cc/plugins/codex/hooks/hooks.json)<br>[plugins/codex/agents/codex-rescue.md](../../../../sources/openai__codex-plugin-cc/plugins/codex/agents/codex-rescue.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 10 | [tests/broker-endpoint.test.mjs](../../../../sources/openai__codex-plugin-cc/tests/broker-endpoint.test.mjs)<br>[tests/bump-version.test.mjs](../../../../sources/openai__codex-plugin-cc/tests/bump-version.test.mjs)<br>[tests/commands.test.mjs](../../../../sources/openai__codex-plugin-cc/tests/commands.test.mjs)<br>[tests/fake-codex-fixture.mjs](../../../../sources/openai__codex-plugin-cc/tests/fake-codex-fixture.mjs)<br>[tests/git.test.mjs](../../../../sources/openai__codex-plugin-cc/tests/git.test.mjs)<br>[tests/helpers.mjs](../../../../sources/openai__codex-plugin-cc/tests/helpers.mjs)<br>[tests/process.test.mjs](../../../../sources/openai__codex-plugin-cc/tests/process.test.mjs)<br>[tests/render.test.mjs](../../../../sources/openai__codex-plugin-cc/tests/render.test.mjs) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/pull-request-ci.yml](../../../../sources/openai__codex-plugin-cc/.github/workflows/pull-request-ci.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/openai__codex-plugin-cc/README.md) |
| config | 1 | [package.json](../../../../sources/openai__codex-plugin-cc/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 10 | [tests/broker-endpoint.test.mjs](../../../../sources/openai__codex-plugin-cc/tests/broker-endpoint.test.mjs)<br>[tests/bump-version.test.mjs](../../../../sources/openai__codex-plugin-cc/tests/bump-version.test.mjs)<br>[tests/commands.test.mjs](../../../../sources/openai__codex-plugin-cc/tests/commands.test.mjs)<br>[tests/fake-codex-fixture.mjs](../../../../sources/openai__codex-plugin-cc/tests/fake-codex-fixture.mjs)<br>[tests/git.test.mjs](../../../../sources/openai__codex-plugin-cc/tests/git.test.mjs)<br>[tests/helpers.mjs](../../../../sources/openai__codex-plugin-cc/tests/helpers.mjs) |
| CI workflow | 1 | [.github/workflows/pull-request-ci.yml](../../../../sources/openai__codex-plugin-cc/.github/workflows/pull-request-ci.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `plugins/codex/skills/gpt-5-4-prompting/SKILL.md`, `plugins/codex/skills/gpt-5-4-prompting/references/codex-prompt-antipatterns.md`, `plugins/codex/skills/gpt-5-4-prompting/references/codex-prompt-recipes.md`.
2. agent/tool runtime 매핑: `plugins/codex/skills/gpt-5-4-prompting/SKILL.md`, `plugins/codex/skills/gpt-5-4-prompting/references/codex-prompt-antipatterns.md`, `plugins/codex/skills/gpt-5-4-prompting/references/codex-prompt-recipes.md`.
3. test/eval 파일로 동작 검증: `tests/broker-endpoint.test.mjs`, `tests/bump-version.test.mjs`, `tests/commands.test.mjs`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 61 files, 20 directories.. 핵심 구조 신호는 package.json, README.md, LICENSE, tests, ci, docs이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
