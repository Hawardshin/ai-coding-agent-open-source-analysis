# thClaws/thClaws 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Open-source AI agent harness in native Rust — GUI, CLI, headless, and webapp from one binary. Multi-provider, MCP, skills, plugins, agent teams.

## 요약

- 조사 단위: `sources/thClaws__thClaws` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 583 files, 73 directories, depth score 124, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=user-manual-th/ch14-mcp.md, user-manual-img/ch-05/thClaws-mcp-ask.png, user-manual-img/ch-05/thClaws-mcp-spawn-ask.png이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | thClaws/thClaws |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Rust |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/thClaws__thClaws](../../../../sources/thClaws__thClaws) |
| 기존 보고서 | [reports/korea-trending/repositories/thClaws__thClaws.md](../../../korea-trending/repositories/thClaws__thClaws.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 583 / 73 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .claude, .github, charts, crates, docs, frontend, paperclip-adapter, scripts, thclaws-technical-manual, user-manual, user-manual-img, user-manual-th |
| 상위 확장자 | .rs: 219, .md: 151, .tsx: 44, .png: 36, .json: 25, .ts: 24, .html: 12, .yaml: 12, (none): 11, .ttf: 10, .webp: 7, .js: 5 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| crates/core | crates workspace | 72 |
| docs | documentation surface | 9 |
| .github | ci surface | 1 |
| charts | top-level component | 1 |
| crates | source boundary | 1 |
| frontend | top-level component | 1 |
| paperclip-adapter | top-level component | 1 |
| scripts | top-level component | 1 |
| thclaws-technical-manual | top-level component | 1 |
| user-manual | top-level component | 1 |
| user-manual-img | top-level component | 1 |
| user-manual-th | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


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
| mcp | [user-manual-th/ch14-mcp.md](../../../../sources/thClaws__thClaws/user-manual-th/ch14-mcp.md) | mcp signal |
| mcp | [user-manual-img/ch-05/thClaws-mcp-ask.png](../../../../sources/thClaws__thClaws/user-manual-img/ch-05/thClaws-mcp-ask.png) | mcp signal |
| mcp | [user-manual-img/ch-05/thClaws-mcp-spawn-ask.png](../../../../sources/thClaws__thClaws/user-manual-img/ch-05/thClaws-mcp-spawn-ask.png) | mcp signal |
| mcp | [user-manual/ch14-mcp.md](../../../../sources/thClaws__thClaws/user-manual/ch14-mcp.md) | mcp signal |
| agentRuntime | [thclaws-technical-manual/agent-endpoint.md](../../../../sources/thClaws__thClaws/thclaws-technical-manual/agent-endpoint.md) | agentRuntime signal |
| agentRuntime | [thclaws-technical-manual/agent-info-endpoint.md](../../../../sources/thClaws__thClaws/thclaws-technical-manual/agent-info-endpoint.md) | agentRuntime signal |
| agentRuntime | [thclaws-technical-manual/agent-team.md](../../../../sources/thClaws__thClaws/thclaws-technical-manual/agent-team.md) | agentRuntime signal |
| agentRuntime | [thclaws-technical-manual/context-composer.md](../../../../sources/thClaws__thClaws/thclaws-technical-manual/context-composer.md) | agentRuntime signal |
| entrypoints | [paperclip-adapter/src/index.ts](../../../../sources/thClaws__thClaws/paperclip-adapter/src/index.ts) | entrypoints signal |
| entrypoints | [frontend/src/App.tsx](../../../../sources/thClaws__thClaws/frontend/src/App.tsx) | entrypoints signal |
| entrypoints | [frontend/src/index.css](../../../../sources/thClaws__thClaws/frontend/src/index.css) | entrypoints signal |
| entrypoints | [frontend/src/main.tsx](../../../../sources/thClaws__thClaws/frontend/src/main.tsx) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 13 | [paperclip-adapter/src/index.ts](../../../../sources/thClaws__thClaws/paperclip-adapter/src/index.ts)<br>[frontend/src/App.tsx](../../../../sources/thClaws__thClaws/frontend/src/App.tsx)<br>[frontend/src/index.css](../../../../sources/thClaws__thClaws/frontend/src/index.css)<br>[frontend/src/main.tsx](../../../../sources/thClaws__thClaws/frontend/src/main.tsx)<br>[crates/core/src/lib.rs](../../../../sources/thClaws__thClaws/crates/core/src/lib.rs)<br>[crates/core/src/server.rs](../../../../sources/thClaws__thClaws/crates/core/src/server.rs)<br>[crates/core/src/bin/app.rs](../../../../sources/thClaws__thClaws/crates/core/src/bin/app.rs)<br>[crates/core/src/bin/catalogue_seed.rs](../../../../sources/thClaws__thClaws/crates/core/src/bin/catalogue_seed.rs) |
| agentRuntime | 76 | [thclaws-technical-manual/agent-endpoint.md](../../../../sources/thClaws__thClaws/thclaws-technical-manual/agent-endpoint.md)<br>[thclaws-technical-manual/agent-info-endpoint.md](../../../../sources/thClaws__thClaws/thclaws-technical-manual/agent-info-endpoint.md)<br>[thclaws-technical-manual/agent-team.md](../../../../sources/thClaws__thClaws/thclaws-technical-manual/agent-team.md)<br>[thclaws-technical-manual/context-composer.md](../../../../sources/thClaws__thClaws/thclaws-technical-manual/context-composer.md)<br>[thclaws-technical-manual/hooks.md](../../../../sources/thClaws__thClaws/thclaws-technical-manual/hooks.md)<br>[thclaws-technical-manual/memory.md](../../../../sources/thClaws__thClaws/thclaws-technical-manual/memory.md)<br>[thclaws-technical-manual/skills.md](../../../../sources/thClaws__thClaws/thclaws-technical-manual/skills.md)<br>[paperclip-adapter/src/server/agent-mutex.test.ts](../../../../sources/thClaws__thClaws/paperclip-adapter/src/server/agent-mutex.test.ts) |
| mcp | 7 | [user-manual-th/ch14-mcp.md](../../../../sources/thClaws__thClaws/user-manual-th/ch14-mcp.md)<br>[user-manual-img/ch-05/thClaws-mcp-ask.png](../../../../sources/thClaws__thClaws/user-manual-img/ch-05/thClaws-mcp-ask.png)<br>[user-manual-img/ch-05/thClaws-mcp-spawn-ask.png](../../../../sources/thClaws__thClaws/user-manual-img/ch-05/thClaws-mcp-spawn-ask.png)<br>[user-manual/ch14-mcp.md](../../../../sources/thClaws__thClaws/user-manual/ch14-mcp.md)<br>[thclaws-technical-manual/mcp.md](../../../../sources/thClaws__thClaws/thclaws-technical-manual/mcp.md)<br>[crates/core/src/mcp.rs](../../../../sources/thClaws__thClaws/crates/core/src/mcp.rs)<br>[crates/core/src/sdk_mcp.rs](../../../../sources/thClaws__thClaws/crates/core/src/sdk_mcp.rs) |
| retrieval | 24 | [user-manual-th/ch08-memory-and-agents-md.md](../../../../sources/thClaws__thClaws/user-manual-th/ch08-memory-and-agents-md.md)<br>[user-manual-th/ch09-knowledge-bases-kms.md](../../../../sources/thClaws__thClaws/user-manual-th/ch09-knowledge-bases-kms.md)<br>[user-manual-th/index.md](../../../../sources/thClaws__thClaws/user-manual-th/index.md)<br>[user-manual/ch08-memory-and-agents-md.md](../../../../sources/thClaws__thClaws/user-manual/ch08-memory-and-agents-md.md)<br>[user-manual/ch09-knowledge-bases-kms.md](../../../../sources/thClaws__thClaws/user-manual/ch09-knowledge-bases-kms.md)<br>[user-manual/index.md](../../../../sources/thClaws__thClaws/user-manual/index.md)<br>[thclaws-technical-manual/memory.md](../../../../sources/thClaws__thClaws/thclaws-technical-manual/memory.md)<br>[paperclip-adapter/src/index.ts](../../../../sources/thClaws__thClaws/paperclip-adapter/src/index.ts) |
| spec | 1 | [thclaws-technical-manual/app-architecture.md](../../../../sources/thClaws__thClaws/thclaws-technical-manual/app-architecture.md) |
| eval | 6 | [paperclip-adapter/src/server/agent-mutex.test.ts](../../../../sources/thClaws__thClaws/paperclip-adapter/src/server/agent-mutex.test.ts)<br>[paperclip-adapter/src/server/http-client.test.ts](../../../../sources/thClaws__thClaws/paperclip-adapter/src/server/http-client.test.ts)<br>[paperclip-adapter/src/server/materialize-workspace.test.ts](../../../../sources/thClaws__thClaws/paperclip-adapter/src/server/materialize-workspace.test.ts)<br>[paperclip-adapter/src/server/test.ts](../../../../sources/thClaws__thClaws/paperclip-adapter/src/server/test.ts)<br>[crates/core/tests/live_provider_auth.rs](../../../../sources/thClaws__thClaws/crates/core/tests/live_provider_auth.rs)<br>[crates/core/src/research/test_helpers.rs](../../../../sources/thClaws__thClaws/crates/core/src/research/test_helpers.rs) |
| security | 15 | [SECURITY.md](../../../../sources/thClaws__thClaws/SECURITY.md)<br>[crates/core/tests/live_provider_auth.rs](../../../../sources/thClaws__thClaws/crates/core/tests/live_provider_auth.rs)<br>[crates/core/src/codex_auth_store.rs](../../../../sources/thClaws__thClaws/crates/core/src/codex_auth_store.rs)<br>[crates/core/src/codex_auth.rs](../../../../sources/thClaws__thClaws/crates/core/src/codex_auth.rs)<br>[crates/core/src/oauth.rs](../../../../sources/thClaws__thClaws/crates/core/src/oauth.rs)<br>[crates/core/src/sandbox.rs](../../../../sources/thClaws__thClaws/crates/core/src/sandbox.rs)<br>[crates/core/src/policy/allowlist.rs](../../../../sources/thClaws__thClaws/crates/core/src/policy/allowlist.rs)<br>[crates/core/src/policy/error.rs](../../../../sources/thClaws__thClaws/crates/core/src/policy/error.rs) |
| ci | 3 | [.github/workflows/cargo-audit.yml](../../../../sources/thClaws__thClaws/.github/workflows/cargo-audit.yml)<br>[.github/workflows/ci.yml](../../../../sources/thClaws__thClaws/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/thClaws__thClaws/.github/workflows/release.yml) |
| container | 14 | [docker-compose.yml](../../../../sources/thClaws__thClaws/docker-compose.yml)<br>[Dockerfile](../../../../sources/thClaws__thClaws/Dockerfile)<br>[charts/thclaws/Chart.yaml](../../../../sources/thClaws__thClaws/charts/thclaws/Chart.yaml)<br>[charts/thclaws/values.yaml](../../../../sources/thClaws__thClaws/charts/thclaws/values.yaml)<br>[charts/thclaws/templates/_helpers.tpl](../../../../sources/thClaws__thClaws/charts/thclaws/templates/_helpers.tpl)<br>[charts/thclaws/templates/deployment.yaml](../../../../sources/thClaws__thClaws/charts/thclaws/templates/deployment.yaml)<br>[charts/thclaws/templates/hpa.yaml](../../../../sources/thClaws__thClaws/charts/thclaws/templates/hpa.yaml)<br>[charts/thclaws/templates/ingress.yaml](../../../../sources/thClaws__thClaws/charts/thclaws/templates/ingress.yaml) |
| instruction | 1 | [crates/core/assets/gui-shells/chatbot/AGENTS.md](../../../../sources/thClaws__thClaws/crates/core/assets/gui-shells/chatbot/AGENTS.md) |
| docs | 19 | [README.md](../../../../sources/thClaws__thClaws/README.md)<br>[thclaws-technical-manual/README.md](../../../../sources/thClaws__thClaws/thclaws-technical-manual/README.md)<br>[paperclip-adapter/README.md](../../../../sources/thClaws__thClaws/paperclip-adapter/README.md)<br>[frontend/README.md](../../../../sources/thClaws__thClaws/frontend/README.md)<br>[docs/img/dynamic-workflow-thumb.jpg](../../../../sources/thClaws__thClaws/docs/img/dynamic-workflow-thumb.jpg)<br>[docs/img/fusion-config.webp](../../../../sources/thClaws__thClaws/docs/img/fusion-config.webp)<br>[docs/img/media-studio.webp](../../../../sources/thClaws__thClaws/docs/img/media-studio.webp)<br>[docs/img/screen-chat.webp](../../../../sources/thClaws__thClaws/docs/img/screen-chat.webp) |
| config | 7 | [Cargo.lock](../../../../sources/thClaws__thClaws/Cargo.lock)<br>[Cargo.toml](../../../../sources/thClaws__thClaws/Cargo.toml)<br>[paperclip-adapter/package.json](../../../../sources/thClaws__thClaws/paperclip-adapter/package.json)<br>[paperclip-adapter/tsconfig.json](../../../../sources/thClaws__thClaws/paperclip-adapter/tsconfig.json)<br>[frontend/package.json](../../../../sources/thClaws__thClaws/frontend/package.json)<br>[frontend/tsconfig.json](../../../../sources/thClaws__thClaws/frontend/tsconfig.json)<br>[crates/core/Cargo.toml](../../../../sources/thClaws__thClaws/crates/core/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 6 | [paperclip-adapter/src/server/agent-mutex.test.ts](../../../../sources/thClaws__thClaws/paperclip-adapter/src/server/agent-mutex.test.ts)<br>[paperclip-adapter/src/server/http-client.test.ts](../../../../sources/thClaws__thClaws/paperclip-adapter/src/server/http-client.test.ts)<br>[paperclip-adapter/src/server/materialize-workspace.test.ts](../../../../sources/thClaws__thClaws/paperclip-adapter/src/server/materialize-workspace.test.ts)<br>[paperclip-adapter/src/server/test.ts](../../../../sources/thClaws__thClaws/paperclip-adapter/src/server/test.ts)<br>[crates/core/tests/live_provider_auth.rs](../../../../sources/thClaws__thClaws/crates/core/tests/live_provider_auth.rs)<br>[crates/core/src/research/test_helpers.rs](../../../../sources/thClaws__thClaws/crates/core/src/research/test_helpers.rs) |
| CI workflow | 3 | [.github/workflows/cargo-audit.yml](../../../../sources/thClaws__thClaws/.github/workflows/cargo-audit.yml)<br>[.github/workflows/ci.yml](../../../../sources/thClaws__thClaws/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/thClaws__thClaws/.github/workflows/release.yml) |
| 컨테이너/배포 | 14 | [docker-compose.yml](../../../../sources/thClaws__thClaws/docker-compose.yml)<br>[Dockerfile](../../../../sources/thClaws__thClaws/Dockerfile)<br>[charts/thclaws/Chart.yaml](../../../../sources/thClaws__thClaws/charts/thclaws/Chart.yaml)<br>[charts/thclaws/values.yaml](../../../../sources/thClaws__thClaws/charts/thclaws/values.yaml)<br>[charts/thclaws/templates/_helpers.tpl](../../../../sources/thClaws__thClaws/charts/thclaws/templates/_helpers.tpl)<br>[charts/thclaws/templates/deployment.yaml](../../../../sources/thClaws__thClaws/charts/thclaws/templates/deployment.yaml) |
| 보안/정책 | 15 | [SECURITY.md](../../../../sources/thClaws__thClaws/SECURITY.md)<br>[crates/core/tests/live_provider_auth.rs](../../../../sources/thClaws__thClaws/crates/core/tests/live_provider_auth.rs)<br>[crates/core/src/codex_auth_store.rs](../../../../sources/thClaws__thClaws/crates/core/src/codex_auth_store.rs)<br>[crates/core/src/codex_auth.rs](../../../../sources/thClaws__thClaws/crates/core/src/codex_auth.rs)<br>[crates/core/src/oauth.rs](../../../../sources/thClaws__thClaws/crates/core/src/oauth.rs)<br>[crates/core/src/sandbox.rs](../../../../sources/thClaws__thClaws/crates/core/src/sandbox.rs) |
| 에이전트 지시문 | 1 | [crates/core/assets/gui-shells/chatbot/AGENTS.md](../../../../sources/thClaws__thClaws/crates/core/assets/gui-shells/chatbot/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `user-manual-th/ch14-mcp.md`, `user-manual-img/ch-05/thClaws-mcp-ask.png`, `user-manual-img/ch-05/thClaws-mcp-spawn-ask.png`.
2. entrypoint를 따라 실행 흐름 확인: `paperclip-adapter/src/index.ts`, `frontend/src/App.tsx`, `frontend/src/index.css`.
3. agent/tool runtime 매핑: `thclaws-technical-manual/agent-endpoint.md`, `thclaws-technical-manual/agent-info-endpoint.md`, `thclaws-technical-manual/agent-team.md`.
4. retrieval/memory/indexing 확인: `user-manual-th/ch08-memory-and-agents-md.md`, `user-manual-th/ch09-knowledge-bases-kms.md`, `user-manual-th/index.md`.
5. test/eval 파일로 동작 검증: `paperclip-adapter/src/server/agent-mutex.test.ts`, `paperclip-adapter/src/server/http-client.test.ts`, `paperclip-adapter/src/server/materialize-workspace.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Open source AI agent harness in native Rust — GUI, CLI, headless, and webapp from one binary. Multi provider, MCP, skill. 핵심 구조 신호는 Rust, Cargo.toml, Dockerfile, docker-compose.yml, README.md, ci이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
