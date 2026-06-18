# JRs-Master/firebat 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

firebat

## 요약

- 조사 단위: `sources/JRs-Master__firebat` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 631 files, 226 directories, depth score 120, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=system/services/mcp-server-llm/config.json, system/services/mcp-server-llm/lang/en.json, system/services/mcp-server-llm/lang/ko.json이고, 의존성 단서는 next, react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | JRs-Master/firebat |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Rust |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/JRs-Master__firebat](../../../../sources/JRs-Master__firebat) |
| 기존 보고서 | [reports/korea-trending/repositories/JRs-Master__firebat.md](../../../korea-trending/repositories/JRs-Master__firebat.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 631 / 226 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .cargo, .github, app, caddy, core, docs, infra, language, lib, proto, scripts, system, types |
| 상위 확장자 | .rs: 216, .ts: 193, .json: 82, .tsx: 77, .mjs: 22, .md: 13, (none): 6, .py: 4, .toml: 4, .yml: 3, .sh: 2, .yaml: 2 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| lib | source boundary | 16 |
| docs | documentation surface | 7 |
| .github | ci surface | 1 |
| app | top-level component | 1 |
| caddy | top-level component | 1 |
| core | top-level component | 1 |
| infra | top-level component | 1 |
| language | top-level component | 1 |
| proto | top-level component | 1 |
| scripts | top-level component | 1 |
| system | top-level component | 1 |
| types | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | next dev |
| build | package.json | build | next build |
| serve-dev | package.json | start | next start |
| quality | package.json | lint | next lint |
| quality | package.json | typecheck | tsc --noEmit |
| utility | package.json | mcp | firebat-core --mcp-stdio |
| utility | package.json | gen:proto | buf generate && node scripts/gen-api-client.mjs && node scripts/gen-vault-keys.mjs |
| utility | package.json | gen:api | node scripts/gen-api-client.mjs |
| utility | package.json | gen:vault | node scripts/gen-vault-keys.mjs |


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
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [system/services/mcp-server-llm/config.json](../../../../sources/JRs-Master__firebat/system/services/mcp-server-llm/config.json) | mcp signal |
| mcp | [system/services/mcp-server-llm/lang/en.json](../../../../sources/JRs-Master__firebat/system/services/mcp-server-llm/lang/en.json) | mcp signal |
| mcp | [system/services/mcp-server-llm/lang/ko.json](../../../../sources/JRs-Master__firebat/system/services/mcp-server-llm/lang/ko.json) | mcp signal |
| mcp | [system/services/mcp-server-app/config.json](../../../../sources/JRs-Master__firebat/system/services/mcp-server-app/config.json) | mcp signal |
| agentRuntime | [system/prompts/tool_system.md](../../../../sources/JRs-Master__firebat/system/prompts/tool_system.md) | agentRuntime signal |
| agentRuntime | [lib/hooks/use-polling.ts](../../../../sources/JRs-Master__firebat/lib/hooks/use-polling.ts) | agentRuntime signal |
| agentRuntime | [lib/api-gen/memory.ts](../../../../sources/JRs-Master__firebat/lib/api-gen/memory.ts) | agentRuntime signal |
| agentRuntime | [lib/api-gen/skill.ts](../../../../sources/JRs-Master__firebat/lib/api-gen/skill.ts) | agentRuntime signal |
| entrypoints | [system/modules/yfinance/main.py](../../../../sources/JRs-Master__firebat/system/modules/yfinance/main.py) | entrypoints signal |
| entrypoints | [system/modules/dart/main.py](../../../../sources/JRs-Master__firebat/system/modules/dart/main.py) | entrypoints signal |
| entrypoints | [system/modules/browser-scrape/main.py](../../../../sources/JRs-Master__firebat/system/modules/browser-scrape/main.py) | entrypoints signal |
| entrypoints | [infra/src/main.rs](../../../../sources/JRs-Master__firebat/infra/src/main.rs) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [system/modules/yfinance/main.py](../../../../sources/JRs-Master__firebat/system/modules/yfinance/main.py)<br>[system/modules/dart/main.py](../../../../sources/JRs-Master__firebat/system/modules/dart/main.py)<br>[system/modules/browser-scrape/main.py](../../../../sources/JRs-Master__firebat/system/modules/browser-scrape/main.py)<br>[infra/src/main.rs](../../../../sources/JRs-Master__firebat/infra/src/main.rs) |
| agentRuntime | 35 | [system/prompts/tool_system.md](../../../../sources/JRs-Master__firebat/system/prompts/tool_system.md)<br>[lib/hooks/use-polling.ts](../../../../sources/JRs-Master__firebat/lib/hooks/use-polling.ts)<br>[lib/api-gen/memory.ts](../../../../sources/JRs-Master__firebat/lib/api-gen/memory.ts)<br>[lib/api-gen/skill.ts](../../../../sources/JRs-Master__firebat/lib/api-gen/skill.ts)<br>[lib/api-gen/tool.ts](../../../../sources/JRs-Master__firebat/lib/api-gen/tool.ts)<br>[infra/tests/tool_registry_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/tool_registry_test.rs)<br>[infra/src/adapters/memory.rs](../../../../sources/JRs-Master__firebat/infra/src/adapters/memory.rs)<br>[infra/src/adapters/sandbox.rs](../../../../sources/JRs-Master__firebat/infra/src/adapters/sandbox.rs) |
| mcp | 23 | [system/services/mcp-server-llm/config.json](../../../../sources/JRs-Master__firebat/system/services/mcp-server-llm/config.json)<br>[system/services/mcp-server-llm/lang/en.json](../../../../sources/JRs-Master__firebat/system/services/mcp-server-llm/lang/en.json)<br>[system/services/mcp-server-llm/lang/ko.json](../../../../sources/JRs-Master__firebat/system/services/mcp-server-llm/lang/ko.json)<br>[system/services/mcp-server-app/config.json](../../../../sources/JRs-Master__firebat/system/services/mcp-server-app/config.json)<br>[system/services/mcp-server-app/lang/en.json](../../../../sources/JRs-Master__firebat/system/services/mcp-server-app/lang/en.json)<br>[system/services/mcp-server-app/lang/ko.json](../../../../sources/JRs-Master__firebat/system/services/mcp-server-app/lang/ko.json)<br>[lib/api-gen/mcp.ts](../../../../sources/JRs-Master__firebat/lib/api-gen/mcp.ts)<br>[infra/tests/mcp_manager_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/mcp_manager_test.rs) |
| retrieval | 31 | [system/modules/upbit/index.mjs](../../../../sources/JRs-Master__firebat/system/modules/upbit/index.mjs)<br>[system/modules/toss-invest/index.mjs](../../../../sources/JRs-Master__firebat/system/modules/toss-invest/index.mjs)<br>[system/modules/telegram/index.mjs](../../../../sources/JRs-Master__firebat/system/modules/telegram/index.mjs)<br>[system/modules/notes/index.mjs](../../../../sources/JRs-Master__firebat/system/modules/notes/index.mjs)<br>[system/modules/naver-search/index.mjs](../../../../sources/JRs-Master__firebat/system/modules/naver-search/index.mjs)<br>[system/modules/naver-ads/index.mjs](../../../../sources/JRs-Master__firebat/system/modules/naver-ads/index.mjs)<br>[system/modules/molit-realestate/index.mjs](../../../../sources/JRs-Master__firebat/system/modules/molit-realestate/index.mjs)<br>[system/modules/law-search/index.mjs](../../../../sources/JRs-Master__firebat/system/modules/law-search/index.mjs) |
| spec | 2 | [lib/design-tokens.ts](../../../../sources/JRs-Master__firebat/lib/design-tokens.ts)<br>[lib/spec-to-rss-html.ts](../../../../sources/JRs-Master__firebat/lib/spec-to-rss-html.ts) |
| eval | 49 | [lib/spec-to-rss-html.ts](../../../../sources/JRs-Master__firebat/lib/spec-to-rss-html.ts)<br>[infra/tests/ai_code_assist_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/ai_code_assist_test.rs)<br>[infra/tests/ai_component_search_index_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/ai_component_search_index_test.rs)<br>[infra/tests/ai_history_resolver_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/ai_history_resolver_test.rs)<br>[infra/tests/ai_manager_public_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/ai_manager_public_test.rs)<br>[infra/tests/ai_prompt_builder_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/ai_prompt_builder_test.rs)<br>[infra/tests/ai_retrieval_engine_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/ai_retrieval_engine_test.rs)<br>[infra/tests/ai_system_context_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/ai_system_context_test.rs) |
| security | 23 | [lib/auth-guard.ts](../../../../sources/JRs-Master__firebat/lib/auth-guard.ts)<br>[lib/oauth-providers.ts](../../../../sources/JRs-Master__firebat/lib/oauth-providers.ts)<br>[lib/api-gen/auth.ts](../../../../sources/JRs-Master__firebat/lib/api-gen/auth.ts)<br>[lib/api-gen/secret.ts](../../../../sources/JRs-Master__firebat/lib/api-gen/secret.ts)<br>[infra/tests/auth_manager_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/auth_manager_test.rs)<br>[infra/tests/secret_manager_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/secret_manager_test.rs)<br>[infra/tests/svc_auth_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/svc_auth_test.rs)<br>[infra/tests/svc_secret_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/svc_secret_test.rs) |
| ci | 3 | [.github/workflows/ci-frontend.yml](../../../../sources/JRs-Master__firebat/.github/workflows/ci-frontend.yml)<br>[.github/workflows/ci-proto.yml](../../../../sources/JRs-Master__firebat/.github/workflows/ci-proto.yml)<br>[.github/workflows/ci-rust.yml](../../../../sources/JRs-Master__firebat/.github/workflows/ci-rust.yml) |
| container | 1 | [infra/Dockerfile](../../../../sources/JRs-Master__firebat/infra/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 7 | [README.md](../../../../sources/JRs-Master__firebat/README.md)<br>[docs/CORE_BIBLE.md](../../../../sources/JRs-Master__firebat/docs/CORE_BIBLE.md)<br>[docs/FIREBAT_BIBLE.md](../../../../sources/JRs-Master__firebat/docs/FIREBAT_BIBLE.md)<br>[docs/INFRA_BIBLE.md](../../../../sources/JRs-Master__firebat/docs/INFRA_BIBLE.md)<br>[docs/IO_SCHEMA_BIBLE.md](../../../../sources/JRs-Master__firebat/docs/IO_SCHEMA_BIBLE.md)<br>[docs/MODULE_BIBLE.md](../../../../sources/JRs-Master__firebat/docs/MODULE_BIBLE.md)<br>[docs/PAGESPEC_BIBLE.md](../../../../sources/JRs-Master__firebat/docs/PAGESPEC_BIBLE.md) |
| config | 6 | [Cargo.lock](../../../../sources/JRs-Master__firebat/Cargo.lock)<br>[Cargo.toml](../../../../sources/JRs-Master__firebat/Cargo.toml)<br>[package.json](../../../../sources/JRs-Master__firebat/package.json)<br>[tsconfig.json](../../../../sources/JRs-Master__firebat/tsconfig.json)<br>[infra/Cargo.toml](../../../../sources/JRs-Master__firebat/infra/Cargo.toml)<br>[core/Cargo.toml](../../../../sources/JRs-Master__firebat/core/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 49 | [lib/spec-to-rss-html.ts](../../../../sources/JRs-Master__firebat/lib/spec-to-rss-html.ts)<br>[infra/tests/ai_code_assist_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/ai_code_assist_test.rs)<br>[infra/tests/ai_component_search_index_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/ai_component_search_index_test.rs)<br>[infra/tests/ai_history_resolver_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/ai_history_resolver_test.rs)<br>[infra/tests/ai_manager_public_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/ai_manager_public_test.rs)<br>[infra/tests/ai_prompt_builder_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/ai_prompt_builder_test.rs) |
| CI workflow | 3 | [.github/workflows/ci-frontend.yml](../../../../sources/JRs-Master__firebat/.github/workflows/ci-frontend.yml)<br>[.github/workflows/ci-proto.yml](../../../../sources/JRs-Master__firebat/.github/workflows/ci-proto.yml)<br>[.github/workflows/ci-rust.yml](../../../../sources/JRs-Master__firebat/.github/workflows/ci-rust.yml) |
| 컨테이너/배포 | 1 | [infra/Dockerfile](../../../../sources/JRs-Master__firebat/infra/Dockerfile) |
| 보안/정책 | 23 | [lib/auth-guard.ts](../../../../sources/JRs-Master__firebat/lib/auth-guard.ts)<br>[lib/oauth-providers.ts](../../../../sources/JRs-Master__firebat/lib/oauth-providers.ts)<br>[lib/api-gen/auth.ts](../../../../sources/JRs-Master__firebat/lib/api-gen/auth.ts)<br>[lib/api-gen/secret.ts](../../../../sources/JRs-Master__firebat/lib/api-gen/secret.ts)<br>[infra/tests/auth_manager_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/auth_manager_test.rs)<br>[infra/tests/secret_manager_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/secret_manager_test.rs) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `system/services/mcp-server-llm/config.json`, `system/services/mcp-server-llm/lang/en.json`, `system/services/mcp-server-llm/lang/ko.json`.
2. entrypoint를 따라 실행 흐름 확인: `system/modules/yfinance/main.py`, `system/modules/dart/main.py`, `system/modules/browser-scrape/main.py`.
3. agent/tool runtime 매핑: `system/prompts/tool_system.md`, `lib/hooks/use-polling.ts`, `lib/api-gen/memory.ts`.
4. retrieval/memory/indexing 확인: `system/modules/upbit/index.mjs`, `system/modules/toss-invest/index.mjs`, `system/modules/telegram/index.mjs`.
5. test/eval 파일로 동작 검증: `lib/spec-to-rss-html.ts`, `infra/tests/ai_code_assist_test.rs`, `infra/tests/ai_component_search_index_test.rs`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 firebat. 핵심 구조 신호는 Rust, package.json, Cargo.toml, README.md, LICENSE, next이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
