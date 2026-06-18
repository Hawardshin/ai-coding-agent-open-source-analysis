# bloopai/bloop 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Local clone structure analysis: 694 files, 145 directories.

## 요약

- 조사 단위: `sources/BloopAI__bloop` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 694 files, 145 directories, depth score 112, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=server/bleep/src/bin/bleep.rs, client/src/App.tsx, client/src/index.css이고, 의존성 단서는 next, react, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | bloopai/bloop |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | global |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/BloopAI__bloop](../../../../sources/BloopAI__bloop) |
| 기존 보고서 | [reports/clone-structures/bloopai__bloop.md](../../../clone-structures/bloopai__bloop.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 694 / 145 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .github, apps, client, server, tests |
| 상위 확장자 | .tsx: 300, .rs: 121, .ts: 76, .png: 39, .json: 26, .sql: 17, (none): 16, .ttf: 15, .scm: 13, .yml: 13, .md: 9, .cjs: 6 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| client | source boundary | 78 |
| server | source boundary | 20 |
| tests | validation surface | 20 |
| apps/desktop | apps workspace | 14 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | start | run-s lfs:install lfs:pull start:tauri |
| serve-dev | package.json | watch | run-s lfs:install lfs:pull watch:tauri |
| serve-dev | package.json | start:tauri | npm --prefix apps/desktop run tauri dev -- --no-watch -- -- --config-file=../../../local_config.json |
| serve-dev | package.json | watch:tauri | npm --prefix apps/desktop run tauri dev -- -- -- --config-file=../../../local_config.json |
| serve-dev | package.json | start-app | npm start |
| serve-dev | package.json | start-web | npm --prefix client run dev |
| utility | package.json | lfs:install | git lfs install |
| utility | package.json | lfs:pull | git lfs pull |
| build | package.json | build-app | npm --prefix apps/desktop run tauri build -- --verbose |
| build | package.json | build-web | npm --prefix client run build |
| utility | package.json | tauri | npm --prefix apps/desktop run tauri |
| quality | package.json | lint | eslint client/src apps/**/src --ext ts --ext tsx --ext js --ext jsx --ext html |
| quality | package.json | client-type-check | npm --prefix client run type-check |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | next, react |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [server/bleep/src/bin/bleep.rs](../../../../sources/BloopAI__bloop/server/bleep/src/bin/bleep.rs) | entrypoints signal |
| entrypoints | [client/src/App.tsx](../../../../sources/BloopAI__bloop/client/src/App.tsx) | entrypoints signal |
| entrypoints | [client/src/index.css](../../../../sources/BloopAI__bloop/client/src/index.css) | entrypoints signal |
| entrypoints | [client/src/main.tsx](../../../../sources/BloopAI__bloop/client/src/main.tsx) | entrypoints signal |
| config | [Cargo.lock](../../../../sources/BloopAI__bloop/Cargo.lock) | config signal |
| config | [Cargo.toml](../../../../sources/BloopAI__bloop/Cargo.toml) | config signal |
| config | [package.json](../../../../sources/BloopAI__bloop/package.json) | config signal |
| config | [tests/tsconfig.json](../../../../sources/BloopAI__bloop/tests/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/BloopAI__bloop/README.md) | docs signal |
| docs | [server/README.md](../../../../sources/BloopAI__bloop/server/README.md) | docs signal |
| docs | [client/README.md](../../../../sources/BloopAI__bloop/client/README.md) | docs signal |
| docs | [client/src/Project/LeftSidebar/NavPanel/Doc/DocDropdown.tsx](../../../../sources/BloopAI__bloop/client/src/Project/LeftSidebar/NavPanel/Doc/DocDropdown.tsx) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 14 | [server/bleep/src/bin/bleep.rs](../../../../sources/BloopAI__bloop/server/bleep/src/bin/bleep.rs)<br>[client/src/App.tsx](../../../../sources/BloopAI__bloop/client/src/App.tsx)<br>[client/src/index.css](../../../../sources/BloopAI__bloop/client/src/index.css)<br>[client/src/main.tsx](../../../../sources/BloopAI__bloop/client/src/main.tsx)<br>[apps/desktop/src-tauri/src/main.rs](../../../../sources/BloopAI__bloop/apps/desktop/src-tauri/src/main.rs)<br>[apps/desktop/src-tauri/bin/qdrant-aarch64-apple-darwin](../../../../sources/BloopAI__bloop/apps/desktop/src-tauri/bin/qdrant-aarch64-apple-darwin)<br>[apps/desktop/src-tauri/bin/qdrant-x86_64-apple-darwin](../../../../sources/BloopAI__bloop/apps/desktop/src-tauri/bin/qdrant-x86_64-apple-darwin)<br>[apps/desktop/src-tauri/bin/qdrant-x86_64-pc-windows-msvc.exe](../../../../sources/BloopAI__bloop/apps/desktop/src-tauri/bin/qdrant-x86_64-pc-windows-msvc.exe) |
| agentRuntime | 47 | [server/bleep/src/agent.rs](../../../../sources/BloopAI__bloop/server/bleep/src/agent.rs)<br>[server/bleep/src/query/planner.rs](../../../../sources/BloopAI__bloop/server/bleep/src/query/planner.rs)<br>[server/bleep/src/query/planner/optimize.rs](../../../../sources/BloopAI__bloop/server/bleep/src/query/planner/optimize.rs)<br>[server/bleep/src/agent/exchange.rs](../../../../sources/BloopAI__bloop/server/bleep/src/agent/exchange.rs)<br>[server/bleep/src/agent/model.rs](../../../../sources/BloopAI__bloop/server/bleep/src/agent/model.rs)<br>[server/bleep/src/agent/prompts.rs](../../../../sources/BloopAI__bloop/server/bleep/src/agent/prompts.rs)<br>[server/bleep/src/agent/symbol.rs](../../../../sources/BloopAI__bloop/server/bleep/src/agent/symbol.rs)<br>[server/bleep/src/agent/transcoder.rs](../../../../sources/BloopAI__bloop/server/bleep/src/agent/transcoder.rs) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 72 | [server/bleep/src/webserver/index.rs](../../../../sources/BloopAI__bloop/server/bleep/src/webserver/index.rs)<br>[server/bleep/src/semantic/chunk.rs](../../../../sources/BloopAI__bloop/server/bleep/src/semantic/chunk.rs)<br>[server/bleep/src/scraper/chunk.rs](../../../../sources/BloopAI__bloop/server/bleep/src/scraper/chunk.rs)<br>[client/index.html](../../../../sources/BloopAI__bloop/client/index.html)<br>[client/src/index.css](../../../../sources/BloopAI__bloop/client/src/index.css)<br>[client/src/utils/index.test.ts](../../../../sources/BloopAI__bloop/client/src/utils/index.test.ts)<br>[client/src/utils/index.ts](../../../../sources/BloopAI__bloop/client/src/utils/index.ts)<br>[client/src/types/index.ts](../../../../sources/BloopAI__bloop/client/src/types/index.ts) |
| spec | 7 | [tests/all_onboarding.spec.js_](../../../../sources/BloopAI__bloop/tests/all_onboarding.spec.js_)<br>[tests/github_onboarding.spec.js_](../../../../sources/BloopAI__bloop/tests/github_onboarding.spec.js_)<br>[tests/local_onboarding.spec.js_](../../../../sources/BloopAI__bloop/tests/local_onboarding.spec.js_)<br>[tests/onboarding.spec.ts](../../../../sources/BloopAI__bloop/tests/onboarding.spec.ts)<br>[tests/repository.spec.ts](../../../../sources/BloopAI__bloop/tests/repository.spec.ts)<br>[tests/search.spec.ts](../../../../sources/BloopAI__bloop/tests/search.spec.ts)<br>[tests/settings.spec.ts](../../../../sources/BloopAI__bloop/tests/settings.spec.ts) |
| eval | 18 | [tests/.example.env](../../../../sources/BloopAI__bloop/tests/.example.env)<br>[tests/.gitignore](../../../../sources/BloopAI__bloop/tests/.gitignore)<br>[tests/all_onboarding.spec.js_](../../../../sources/BloopAI__bloop/tests/all_onboarding.spec.js_)<br>[tests/github_onboarding.spec.js_](../../../../sources/BloopAI__bloop/tests/github_onboarding.spec.js_)<br>[tests/local_onboarding.spec.js_](../../../../sources/BloopAI__bloop/tests/local_onboarding.spec.js_)<br>[tests/onboarding.spec.ts](../../../../sources/BloopAI__bloop/tests/onboarding.spec.ts)<br>[tests/onboarding.ts](../../../../sources/BloopAI__bloop/tests/onboarding.ts)<br>[tests/repository.spec.ts](../../../../sources/BloopAI__bloop/tests/repository.spec.ts) |
| security | 0 | 명확하지 않음 |
| ci | 9 | [.github/workflows/build-on-pr-command.yml](../../../../sources/BloopAI__bloop/.github/workflows/build-on-pr-command.yml)<br>[.github/workflows/build-on-pr.yml](../../../../sources/BloopAI__bloop/.github/workflows/build-on-pr.yml)<br>[.github/workflows/build-on-release.yml](../../../../sources/BloopAI__bloop/.github/workflows/build-on-release.yml)<br>[.github/workflows/client-test.yml](../../../../sources/BloopAI__bloop/.github/workflows/client-test.yml)<br>[.github/workflows/dependencies.yml](../../../../sources/BloopAI__bloop/.github/workflows/dependencies.yml)<br>[.github/workflows/dummy.yml](../../../../sources/BloopAI__bloop/.github/workflows/dummy.yml)<br>[.github/workflows/server-test.yml](../../../../sources/BloopAI__bloop/.github/workflows/server-test.yml)<br>[.github/workflows/tauri-release.yml](../../../../sources/BloopAI__bloop/.github/workflows/tauri-release.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/BloopAI__bloop/docker-compose.yml)<br>[Dockerfile](../../../../sources/BloopAI__bloop/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 7 | [README.md](../../../../sources/BloopAI__bloop/README.md)<br>[server/README.md](../../../../sources/BloopAI__bloop/server/README.md)<br>[client/README.md](../../../../sources/BloopAI__bloop/client/README.md)<br>[client/src/Project/LeftSidebar/NavPanel/Doc/DocDropdown.tsx](../../../../sources/BloopAI__bloop/client/src/Project/LeftSidebar/NavPanel/Doc/DocDropdown.tsx)<br>[client/src/Project/LeftSidebar/NavPanel/Doc/DocEntry.tsx](../../../../sources/BloopAI__bloop/client/src/Project/LeftSidebar/NavPanel/Doc/DocEntry.tsx)<br>[client/src/Project/LeftSidebar/NavPanel/Doc/index.tsx](../../../../sources/BloopAI__bloop/client/src/Project/LeftSidebar/NavPanel/Doc/index.tsx)<br>[apps/desktop/README.md](../../../../sources/BloopAI__bloop/apps/desktop/README.md) |
| config | 10 | [Cargo.lock](../../../../sources/BloopAI__bloop/Cargo.lock)<br>[Cargo.toml](../../../../sources/BloopAI__bloop/Cargo.toml)<br>[package.json](../../../../sources/BloopAI__bloop/package.json)<br>[tests/tsconfig.json](../../../../sources/BloopAI__bloop/tests/tsconfig.json)<br>[server/bleep/Cargo.toml](../../../../sources/BloopAI__bloop/server/bleep/Cargo.toml)<br>[client/package.json](../../../../sources/BloopAI__bloop/client/package.json)<br>[client/tsconfig.json](../../../../sources/BloopAI__bloop/client/tsconfig.json)<br>[apps/desktop/package.json](../../../../sources/BloopAI__bloop/apps/desktop/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 18 | [tests/.example.env](../../../../sources/BloopAI__bloop/tests/.example.env)<br>[tests/.gitignore](../../../../sources/BloopAI__bloop/tests/.gitignore)<br>[tests/all_onboarding.spec.js_](../../../../sources/BloopAI__bloop/tests/all_onboarding.spec.js_)<br>[tests/github_onboarding.spec.js_](../../../../sources/BloopAI__bloop/tests/github_onboarding.spec.js_)<br>[tests/local_onboarding.spec.js_](../../../../sources/BloopAI__bloop/tests/local_onboarding.spec.js_)<br>[tests/onboarding.spec.ts](../../../../sources/BloopAI__bloop/tests/onboarding.spec.ts) |
| CI workflow | 9 | [.github/workflows/build-on-pr-command.yml](../../../../sources/BloopAI__bloop/.github/workflows/build-on-pr-command.yml)<br>[.github/workflows/build-on-pr.yml](../../../../sources/BloopAI__bloop/.github/workflows/build-on-pr.yml)<br>[.github/workflows/build-on-release.yml](../../../../sources/BloopAI__bloop/.github/workflows/build-on-release.yml)<br>[.github/workflows/client-test.yml](../../../../sources/BloopAI__bloop/.github/workflows/client-test.yml)<br>[.github/workflows/dependencies.yml](../../../../sources/BloopAI__bloop/.github/workflows/dependencies.yml)<br>[.github/workflows/dummy.yml](../../../../sources/BloopAI__bloop/.github/workflows/dummy.yml) |
| 컨테이너/배포 | 2 | [docker-compose.yml](../../../../sources/BloopAI__bloop/docker-compose.yml)<br>[Dockerfile](../../../../sources/BloopAI__bloop/Dockerfile) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `server/bleep/src/bin/bleep.rs`, `client/src/App.tsx`, `client/src/index.css`.
2. entrypoint를 따라 실행 흐름 확인: `server/bleep/src/bin/bleep.rs`, `client/src/App.tsx`, `client/src/index.css`.
3. agent/tool runtime 매핑: `server/bleep/src/agent.rs`, `server/bleep/src/query/planner.rs`, `server/bleep/src/query/planner/optimize.rs`.
4. retrieval/memory/indexing 확인: `server/bleep/src/webserver/index.rs`, `server/bleep/src/semantic/chunk.rs`, `server/bleep/src/scraper/chunk.rs`.
5. test/eval 파일로 동작 검증: `tests/.example.env`, `tests/.gitignore`, `tests/all_onboarding.spec.js_`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Local clone structure analysis 694 files, 145 directories.. 핵심 구조 신호는 package.json, Cargo.toml, Dockerfile, docker-compose.yml, README.md, next이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
