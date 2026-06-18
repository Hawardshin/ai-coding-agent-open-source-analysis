# fujibee/agmsg 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Cross-vendor messaging for CLI AI coding agents — let Claude Code, Codex, Gemini & Copilot talk to each other in one team. Bash + SQLite, no daemon, no framework.

## 요약

- 조사 단위: `sources/fujibee__agmsg` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 95 files, 13 directories, depth score 87, key references 10개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

코딩 에이전트/IDE 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=bin/agmsg.js이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 코딩 에이전트 참고 구현이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | fujibee/agmsg |
| 주제 | 코딩 에이전트/IDE / 코딩 에이전트/IDE |
| Region | global |
| Language | Shell |
| Stars | 654 |
| Forks | 47 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/fujibee__agmsg](../../../../sources/fujibee__agmsg) |
| 기존 보고서 | [reports/global-trending/repositories/fujibee__agmsg.md](../../../global-trending/repositories/fujibee__agmsg.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 95 / 13 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | .claude-plugin, .github, bin, docs, scripts, templates, tests |
| 상위 확장자 | .sh: 34, .md: 21, .bats: 16, (none): 5, .json: 3, .ps1: 3, .yml: 3, .png: 2, .svg: 2, .bash: 1, .gif: 1, .html: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 22 |
| tests | validation surface | 19 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| scripts | top-level component | 1 |
| templates | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| test | package.json | test | node bin/agmsg.js --version |
| entrypoint | package.json bin | agmsg.js | bin/agmsg.js |


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
| entrypoints | [bin/agmsg.js](../../../../sources/fujibee__agmsg/bin/agmsg.js) | entrypoints signal |
| agentRuntime | [SKILL.md](../../../../sources/fujibee__agmsg/SKILL.md) | agentRuntime signal |
| agentRuntime | [scripts/hook.sh](../../../../sources/fujibee__agmsg/scripts/hook.sh) | agentRuntime signal |
| eval | [tests/smoke_windows_powershell.ps1](../../../../sources/fujibee__agmsg/tests/smoke_windows_powershell.ps1) | eval signal |
| eval | [tests/test_actas_integration.bats](../../../../sources/fujibee__agmsg/tests/test_actas_integration.bats) | eval signal |
| eval | [tests/test_actas_lock.bats](../../../../sources/fujibee__agmsg/tests/test_actas_lock.bats) | eval signal |
| eval | [tests/test_config.bats](../../../../sources/fujibee__agmsg/tests/test_config.bats) | eval signal |
| config | [package.json](../../../../sources/fujibee__agmsg/package.json) | config support |
| ci | [.github/workflows/release.yml](../../../../sources/fujibee__agmsg/.github/workflows/release.yml) | ci support |
| ci | [.github/workflows/tests.yml](../../../../sources/fujibee__agmsg/.github/workflows/tests.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [bin/agmsg.js](../../../../sources/fujibee__agmsg/bin/agmsg.js) |
| agentRuntime | 2 | [SKILL.md](../../../../sources/fujibee__agmsg/SKILL.md)<br>[scripts/hook.sh](../../../../sources/fujibee__agmsg/scripts/hook.sh) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 1 | [docs/index.html](../../../../sources/fujibee__agmsg/docs/index.html) |
| spec | 5 | [ARCHITECTURE.md](../../../../sources/fujibee__agmsg/ARCHITECTURE.md)<br>[docs/design.md](../../../../sources/fujibee__agmsg/docs/design.md)<br>[docs/spec/driver-interface.md](../../../../sources/fujibee__agmsg/docs/spec/driver-interface.md)<br>[docs/adr/0001-storage-driver-pluginization.md](../../../../sources/fujibee__agmsg/docs/adr/0001-storage-driver-pluginization.md)<br>[docs/adr/template.md](../../../../sources/fujibee__agmsg/docs/adr/template.md) |
| eval | 20 | [tests/smoke_windows_powershell.ps1](../../../../sources/fujibee__agmsg/tests/smoke_windows_powershell.ps1)<br>[tests/test_actas_integration.bats](../../../../sources/fujibee__agmsg/tests/test_actas_integration.bats)<br>[tests/test_actas_lock.bats](../../../../sources/fujibee__agmsg/tests/test_actas_lock.bats)<br>[tests/test_config.bats](../../../../sources/fujibee__agmsg/tests/test_config.bats)<br>[tests/test_delivery.bats](../../../../sources/fujibee__agmsg/tests/test_delivery.bats)<br>[tests/test_despawn.bats](../../../../sources/fujibee__agmsg/tests/test_despawn.bats)<br>[tests/test_dispatch.bats](../../../../sources/fujibee__agmsg/tests/test_dispatch.bats)<br>[tests/test_helper.bash](../../../../sources/fujibee__agmsg/tests/test_helper.bash) |
| security | 0 | 명확하지 않음 |
| ci | 3 | [.github/workflows/release.yml](../../../../sources/fujibee__agmsg/.github/workflows/release.yml)<br>[.github/workflows/tests.yml](../../../../sources/fujibee__agmsg/.github/workflows/tests.yml)<br>[.github/workflows/verify-versions.yml](../../../../sources/fujibee__agmsg/.github/workflows/verify-versions.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 16 | [README.md](../../../../sources/fujibee__agmsg/README.md)<br>[docs/actas.md](../../../../sources/fujibee__agmsg/docs/actas.md)<br>[docs/agmsg-demo.gif](../../../../sources/fujibee__agmsg/docs/agmsg-demo.gif)<br>[docs/agmsg-favicon.svg](../../../../sources/fujibee__agmsg/docs/agmsg-favicon.svg)<br>[docs/agmsg-icon-240.png](../../../../sources/fujibee__agmsg/docs/agmsg-icon-240.png)<br>[docs/agmsg-icon.svg](../../../../sources/fujibee__agmsg/docs/agmsg-icon.svg)<br>[docs/CNAME](../../../../sources/fujibee__agmsg/docs/CNAME)<br>[docs/design.md](../../../../sources/fujibee__agmsg/docs/design.md) |
| config | 1 | [package.json](../../../../sources/fujibee__agmsg/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 20 | [tests/smoke_windows_powershell.ps1](../../../../sources/fujibee__agmsg/tests/smoke_windows_powershell.ps1)<br>[tests/test_actas_integration.bats](../../../../sources/fujibee__agmsg/tests/test_actas_integration.bats)<br>[tests/test_actas_lock.bats](../../../../sources/fujibee__agmsg/tests/test_actas_lock.bats)<br>[tests/test_config.bats](../../../../sources/fujibee__agmsg/tests/test_config.bats)<br>[tests/test_delivery.bats](../../../../sources/fujibee__agmsg/tests/test_delivery.bats)<br>[tests/test_despawn.bats](../../../../sources/fujibee__agmsg/tests/test_despawn.bats) |
| CI workflow | 3 | [.github/workflows/release.yml](../../../../sources/fujibee__agmsg/.github/workflows/release.yml)<br>[.github/workflows/tests.yml](../../../../sources/fujibee__agmsg/.github/workflows/tests.yml)<br>[.github/workflows/verify-versions.yml](../../../../sources/fujibee__agmsg/.github/workflows/verify-versions.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `bin/agmsg.js`, `SKILL.md`, `scripts/hook.sh`.
2. entrypoint를 따라 실행 흐름 확인: `bin/agmsg.js`.
3. agent/tool runtime 매핑: `SKILL.md`, `scripts/hook.sh`.
4. retrieval/memory/indexing 확인: `docs/index.html`.
5. test/eval 파일로 동작 검증: `tests/smoke_windows_powershell.ps1`, `tests/test_actas_integration.bats`, `tests/test_actas_lock.bats`.

## 기존 레포 인사이트

코딩 에이전트/IDE 관점에서 Cross vendor messaging for CLI AI coding agents — let Claude Code, Codex, Gemini & Copilot talk to each other in one tea. 핵심 구조 신호는 Shell, package.json, README.md, LICENSE, tests, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 코딩 에이전트/IDE 레포입니다. 활용 관점은 코딩 에이전트 참고 구현이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
