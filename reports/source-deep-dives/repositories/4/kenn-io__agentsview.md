# kenn-io/agentsview 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Local-first session search, analytics, insights, and token use statistics for coding agents, supporting Claude Code, Codex, and more than 20 other agents.

## 요약

- 조사 단위: `sources/kenn-io__agentsview` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,067 files, 106 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=internal/web/embed_test.go, internal/web/embed.go, internal/web/fallback/index.html이고, 의존성 단서는 mcp, cobra, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | kenn-io/agentsview |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Go |
| Stars | 2796 |
| Forks | 241 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/kenn-io__agentsview](../../../../sources/kenn-io__agentsview) |
| 기존 보고서 | [reports/global-trending/repositories/kenn-io__agentsview.md](../../../global-trending/repositories/kenn-io__agentsview.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1067 / 106 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .github, cmd, desktop, docs, frontend, internal, scripts, support, testdata |
| 상위 확장자 | .go: 532, .ts: 319, .svelte: 81, .json: 23, .jsonl: 20, .yml: 15, .png: 14, .sh: 12, .md: 11, (none): 9, .toml: 5, .html: 3 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 5 |
| .github | ci surface | 1 |
| cmd | source boundary | 1 |
| cmd/agentsview | cmd workspace | 1 |
| cmd/testfixture | cmd workspace | 1 |
| desktop | top-level component | 1 |
| frontend | top-level component | 1 |
| internal | top-level component | 1 |
| scripts | top-level component | 1 |
| support | top-level component | 1 |
| testdata | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | ensure-embed-dir | make ensure-embed-dir |
| build | Makefile | build | make build |
| build | Makefile | build-release | make build-release |
| utility | Makefile | install | make install |
| utility | Makefile | frontend | make frontend |
| serve-dev | Makefile | frontend-dev | make frontend-dev |
| serve-dev | Makefile | dev-snapshot | make dev-snapshot |
| quality | Makefile | check-air | make check-air |
| utility | Makefile | air-install | make air-install |
| serve-dev | Makefile | dev | make dev |
| serve-dev | Makefile | desktop-dev | make desktop-dev |
| build | Makefile | desktop-build | make desktop-build |
| utility | Makefile | desktop-macos-app | make desktop-macos-app |
| utility | Makefile | desktop-macos-dmg | make desktop-macos-dmg |
| utility | Makefile | desktop-windows-installer | make desktop-windows-installer |
| container | Makefile | desktop-linux-appimage | make desktop-linux-appimage |
| utility | Makefile | desktop-app | make desktop-app |
| test | Makefile | test | make test |
| test | Makefile | test-short | make test-short |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | cobra |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [internal/web/embed_test.go](../../../../sources/kenn-io__agentsview/internal/web/embed_test.go) | retrieval signal |
| retrieval | [internal/web/embed.go](../../../../sources/kenn-io__agentsview/internal/web/embed.go) | retrieval signal |
| retrieval | [internal/web/fallback/index.html](../../../../sources/kenn-io__agentsview/internal/web/fallback/index.html) | retrieval signal |
| retrieval | [internal/postgres/usage_covering_index_pgtest_test.go](../../../../sources/kenn-io__agentsview/internal/postgres/usage_covering_index_pgtest_test.go) | retrieval signal |
| entrypoints | [internal/server/server.go](../../../../sources/kenn-io__agentsview/internal/server/server.go) | entrypoints signal |
| entrypoints | [frontend/src/app.css](../../../../sources/kenn-io__agentsview/frontend/src/app.css) | entrypoints signal |
| entrypoints | [frontend/src/App.svelte](../../../../sources/kenn-io__agentsview/frontend/src/App.svelte) | entrypoints signal |
| entrypoints | [frontend/src/main.ts](../../../../sources/kenn-io__agentsview/frontend/src/main.ts) | entrypoints signal |
| docs | [README.md](../../../../sources/kenn-io__agentsview/README.md) | docs signal |
| docs | [scripts/qwenpaw-fixtures/README.md](../../../../sources/kenn-io__agentsview/scripts/qwenpaw-fixtures/README.md) | docs signal |
| docs | [internal/duckdb/README.md](../../../../sources/kenn-io__agentsview/internal/duckdb/README.md) | docs signal |
| docs | [docs/desktop-release-setup.md](../../../../sources/kenn-io__agentsview/docs/desktop-release-setup.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 7 | [internal/server/server.go](../../../../sources/kenn-io__agentsview/internal/server/server.go)<br>[frontend/src/app.css](../../../../sources/kenn-io__agentsview/frontend/src/app.css)<br>[frontend/src/App.svelte](../../../../sources/kenn-io__agentsview/frontend/src/App.svelte)<br>[frontend/src/main.ts](../../../../sources/kenn-io__agentsview/frontend/src/main.ts)<br>[desktop/src-tauri/src/main.rs](../../../../sources/kenn-io__agentsview/desktop/src-tauri/src/main.rs)<br>[cmd/testfixture/main.go](../../../../sources/kenn-io__agentsview/cmd/testfixture/main.go)<br>[cmd/agentsview/main.go](../../../../sources/kenn-io__agentsview/cmd/agentsview/main.go) |
| agentRuntime | 16 | [AGENTS.md](../../../../sources/kenn-io__agentsview/AGENTS.md)<br>[internal/signals/context_test.go](../../../../sources/kenn-io__agentsview/internal/signals/context_test.go)<br>[internal/signals/context.go](../../../../sources/kenn-io__agentsview/internal/signals/context.go)<br>[internal/server/agent_config_internal_test.go](../../../../sources/kenn-io__agentsview/internal/server/agent_config_internal_test.go)<br>[internal/parser/skill_inference_nonwindows_test.go](../../../../sources/kenn-io__agentsview/internal/parser/skill_inference_nonwindows_test.go)<br>[internal/parser/skill_inference_test.go](../../../../sources/kenn-io__agentsview/internal/parser/skill_inference_test.go)<br>[internal/parser/skill_inference.go](../../../../sources/kenn-io__agentsview/internal/parser/skill_inference.go)<br>[internal/parser/testdata/gemini/tool_calls_with_results.json](../../../../sources/kenn-io__agentsview/internal/parser/testdata/gemini/tool_calls_with_results.json) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 9 | [internal/web/embed_test.go](../../../../sources/kenn-io__agentsview/internal/web/embed_test.go)<br>[internal/web/embed.go](../../../../sources/kenn-io__agentsview/internal/web/embed.go)<br>[internal/web/fallback/index.html](../../../../sources/kenn-io__agentsview/internal/web/fallback/index.html)<br>[internal/postgres/usage_covering_index_pgtest_test.go](../../../../sources/kenn-io__agentsview/internal/postgres/usage_covering_index_pgtest_test.go)<br>[internal/db/usage_covering_index_test.go](../../../../sources/kenn-io__agentsview/internal/db/usage_covering_index_test.go)<br>[frontend/index.html](../../../../sources/kenn-io__agentsview/frontend/index.html)<br>[frontend/src/lib/api/types/index.ts](../../../../sources/kenn-io__agentsview/frontend/src/lib/api/types/index.ts)<br>[frontend/src/lib/api/generated/index.ts](../../../../sources/kenn-io__agentsview/frontend/src/lib/api/generated/index.ts) |
| spec | 13 | [frontend/e2e/duckdb-backend.spec.ts](../../../../sources/kenn-io__agentsview/frontend/e2e/duckdb-backend.spec.ts)<br>[frontend/e2e/message-content.spec.ts](../../../../sources/kenn-io__agentsview/frontend/e2e/message-content.spec.ts)<br>[frontend/e2e/message-loading.spec.ts](../../../../sources/kenn-io__agentsview/frontend/e2e/message-loading.spec.ts)<br>[frontend/e2e/navigation.spec.ts](../../../../sources/kenn-io__agentsview/frontend/e2e/navigation.spec.ts)<br>[frontend/e2e/runtime-stability.spec.ts](../../../../sources/kenn-io__agentsview/frontend/e2e/runtime-stability.spec.ts)<br>[frontend/e2e/session-count-consistency.spec.ts](../../../../sources/kenn-io__agentsview/frontend/e2e/session-count-consistency.spec.ts)<br>[frontend/e2e/session-list.spec.ts](../../../../sources/kenn-io__agentsview/frontend/e2e/session-list.spec.ts)<br>[frontend/e2e/session-timing.spec.ts](../../../../sources/kenn-io__agentsview/frontend/e2e/session-timing.spec.ts) |
| eval | 371 | [docker-compose.test.yml](../../../../sources/kenn-io__agentsview/docker-compose.test.yml)<br>[scripts/build_wheels_test.py](../../../../sources/kenn-io__agentsview/scripts/build_wheels_test.py)<br>[scripts/install_test.sh](../../../../sources/kenn-io__agentsview/scripts/install_test.sh)<br>[internal/web/embed_test.go](../../../../sources/kenn-io__agentsview/internal/web/embed_test.go)<br>[internal/update/update_test.go](../../../../sources/kenn-io__agentsview/internal/update/update_test.go)<br>[internal/timeutil/timeutil_test.go](../../../../sources/kenn-io__agentsview/internal/timeutil/timeutil_test.go)<br>[internal/telemetry/telemetry_test.go](../../../../sources/kenn-io__agentsview/internal/telemetry/telemetry_test.go)<br>[internal/sync/antigravity_cli_integration_test.go](../../../../sources/kenn-io__agentsview/internal/sync/antigravity_cli_integration_test.go) |
| security | 11 | [SECURITY.md](../../../../sources/kenn-io__agentsview/SECURITY.md)<br>[internal/sync/secret_persist_test.go](../../../../sources/kenn-io__agentsview/internal/sync/secret_persist_test.go)<br>[internal/sync/secret_scan_test.go](../../../../sources/kenn-io__agentsview/internal/sync/secret_scan_test.go)<br>[internal/sync/secret_scan.go](../../../../sources/kenn-io__agentsview/internal/sync/secret_scan.go)<br>[internal/server/auth.go](../../../../sources/kenn-io__agentsview/internal/server/auth.go)<br>[internal/postgres/secret_findings_pgtest_test.go](../../../../sources/kenn-io__agentsview/internal/postgres/secret_findings_pgtest_test.go)<br>[internal/postgres/secret_findings.go](../../../../sources/kenn-io__agentsview/internal/postgres/secret_findings.go)<br>[internal/db/secret_findings_list.go](../../../../sources/kenn-io__agentsview/internal/db/secret_findings_list.go) |
| ci | 7 | [.github/workflows/ci.yml](../../../../sources/kenn-io__agentsview/.github/workflows/ci.yml)<br>[.github/workflows/desktop-artifacts.yml](../../../../sources/kenn-io__agentsview/.github/workflows/desktop-artifacts.yml)<br>[.github/workflows/desktop-release.yml](../../../../sources/kenn-io__agentsview/.github/workflows/desktop-release.yml)<br>[.github/workflows/docker.yml](../../../../sources/kenn-io__agentsview/.github/workflows/docker.yml)<br>[.github/workflows/fuzz.yml](../../../../sources/kenn-io__agentsview/.github/workflows/fuzz.yml)<br>[.github/workflows/msys2-update-check.yml](../../../../sources/kenn-io__agentsview/.github/workflows/msys2-update-check.yml)<br>[.github/workflows/release.yml](../../../../sources/kenn-io__agentsview/.github/workflows/release.yml) |
| container | 4 | [docker-compose.prod.yaml](../../../../sources/kenn-io__agentsview/docker-compose.prod.yaml)<br>[docker-compose.test.yml](../../../../sources/kenn-io__agentsview/docker-compose.test.yml)<br>[Dockerfile](../../../../sources/kenn-io__agentsview/Dockerfile)<br>[testdata/ssh/Dockerfile](../../../../sources/kenn-io__agentsview/testdata/ssh/Dockerfile) |
| instruction | 2 | [AGENTS.md](../../../../sources/kenn-io__agentsview/AGENTS.md)<br>[frontend/AGENTS.md](../../../../sources/kenn-io__agentsview/frontend/AGENTS.md) |
| docs | 8 | [README.md](../../../../sources/kenn-io__agentsview/README.md)<br>[scripts/qwenpaw-fixtures/README.md](../../../../sources/kenn-io__agentsview/scripts/qwenpaw-fixtures/README.md)<br>[internal/duckdb/README.md](../../../../sources/kenn-io__agentsview/internal/duckdb/README.md)<br>[docs/desktop-release-setup.md](../../../../sources/kenn-io__agentsview/docs/desktop-release-setup.md)<br>[docs/duckdb-backend-plan.md](../../../../sources/kenn-io__agentsview/docs/duckdb-backend-plan.md)<br>[docs/huma-api-routes.md](../../../../sources/kenn-io__agentsview/docs/huma-api-routes.md)<br>[docs/visualstudio-copilot-traces.md](../../../../sources/kenn-io__agentsview/docs/visualstudio-copilot-traces.md)<br>[desktop/README.md](../../../../sources/kenn-io__agentsview/desktop/README.md) |
| config | 7 | [go.mod](../../../../sources/kenn-io__agentsview/go.mod)<br>[Makefile](../../../../sources/kenn-io__agentsview/Makefile)<br>[frontend/package.json](../../../../sources/kenn-io__agentsview/frontend/package.json)<br>[frontend/tsconfig.json](../../../../sources/kenn-io__agentsview/frontend/tsconfig.json)<br>[desktop/package.json](../../../../sources/kenn-io__agentsview/desktop/package.json)<br>[desktop/src-tauri/Cargo.lock](../../../../sources/kenn-io__agentsview/desktop/src-tauri/Cargo.lock)<br>[desktop/src-tauri/Cargo.toml](../../../../sources/kenn-io__agentsview/desktop/src-tauri/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 371 | [docker-compose.test.yml](../../../../sources/kenn-io__agentsview/docker-compose.test.yml)<br>[scripts/build_wheels_test.py](../../../../sources/kenn-io__agentsview/scripts/build_wheels_test.py)<br>[scripts/install_test.sh](../../../../sources/kenn-io__agentsview/scripts/install_test.sh)<br>[internal/web/embed_test.go](../../../../sources/kenn-io__agentsview/internal/web/embed_test.go)<br>[internal/update/update_test.go](../../../../sources/kenn-io__agentsview/internal/update/update_test.go)<br>[internal/timeutil/timeutil_test.go](../../../../sources/kenn-io__agentsview/internal/timeutil/timeutil_test.go) |
| CI workflow | 7 | [.github/workflows/ci.yml](../../../../sources/kenn-io__agentsview/.github/workflows/ci.yml)<br>[.github/workflows/desktop-artifacts.yml](../../../../sources/kenn-io__agentsview/.github/workflows/desktop-artifacts.yml)<br>[.github/workflows/desktop-release.yml](../../../../sources/kenn-io__agentsview/.github/workflows/desktop-release.yml)<br>[.github/workflows/docker.yml](../../../../sources/kenn-io__agentsview/.github/workflows/docker.yml)<br>[.github/workflows/fuzz.yml](../../../../sources/kenn-io__agentsview/.github/workflows/fuzz.yml)<br>[.github/workflows/msys2-update-check.yml](../../../../sources/kenn-io__agentsview/.github/workflows/msys2-update-check.yml) |
| 컨테이너/배포 | 4 | [docker-compose.prod.yaml](../../../../sources/kenn-io__agentsview/docker-compose.prod.yaml)<br>[docker-compose.test.yml](../../../../sources/kenn-io__agentsview/docker-compose.test.yml)<br>[Dockerfile](../../../../sources/kenn-io__agentsview/Dockerfile)<br>[testdata/ssh/Dockerfile](../../../../sources/kenn-io__agentsview/testdata/ssh/Dockerfile) |
| 보안/정책 | 11 | [SECURITY.md](../../../../sources/kenn-io__agentsview/SECURITY.md)<br>[internal/sync/secret_persist_test.go](../../../../sources/kenn-io__agentsview/internal/sync/secret_persist_test.go)<br>[internal/sync/secret_scan_test.go](../../../../sources/kenn-io__agentsview/internal/sync/secret_scan_test.go)<br>[internal/sync/secret_scan.go](../../../../sources/kenn-io__agentsview/internal/sync/secret_scan.go)<br>[internal/server/auth.go](../../../../sources/kenn-io__agentsview/internal/server/auth.go)<br>[internal/postgres/secret_findings_pgtest_test.go](../../../../sources/kenn-io__agentsview/internal/postgres/secret_findings_pgtest_test.go) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/kenn-io__agentsview/AGENTS.md)<br>[frontend/AGENTS.md](../../../../sources/kenn-io__agentsview/frontend/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `internal/web/embed_test.go`, `internal/web/embed.go`, `internal/web/fallback/index.html`.
2. entrypoint를 따라 실행 흐름 확인: `internal/server/server.go`, `frontend/src/app.css`, `frontend/src/App.svelte`.
3. agent/tool runtime 매핑: `AGENTS.md`, `internal/signals/context_test.go`, `internal/signals/context.go`.
4. retrieval/memory/indexing 확인: `internal/web/embed_test.go`, `internal/web/embed.go`, `internal/web/fallback/index.html`.
5. test/eval 파일로 동작 검증: `docker-compose.test.yml`, `scripts/build_wheels_test.py`, `scripts/install_test.sh`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Local first session search, analytics, insights, and token use statistics for coding agents, supporting Claude Code, Cod. 핵심 구조 신호는 Go, go.mod, Dockerfile, Makefile, README.md, AGENTS.md이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
