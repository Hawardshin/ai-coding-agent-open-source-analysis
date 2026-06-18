# JunsikChoi/korea-cli 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Access Korea's public data APIs with natural language. CLI + MCP server powered by LLM.

## 요약

- 조사 단위: `sources/JunsikChoi__korea-cli` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 483 files, 20 directories, depth score 102, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/main.rs, src/mcp/server.rs, src/bin/analyze_pages.rs이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | JunsikChoi/korea-cli |
| 주제 | 개발 생산성/DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | Rust |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/JunsikChoi__korea-cli](../../../../sources/JunsikChoi__korea-cli) |
| 기존 보고서 | [reports/korea-trending/repositories/JunsikChoi__korea-cli.md](../../../korea-trending/repositories/JunsikChoi__korea-cli.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 483 / 20 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, data, docs, scripts, src, tests, website |
| 상위 확장자 | .md: 438, .rs: 33, (none): 6, .yml: 2, .example: 1, .lock: 1, .sh: 1, .toml: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 53 |
| src | source boundary | 17 |
| tests | validation surface | 7 |
| .github | ci surface | 1 |
| data | top-level component | 1 |
| scripts | top-level component | 1 |
| website | documentation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | update-bundle | make update-bundle |
| build | Makefile | verify-bundle-local | make verify-bundle-local |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
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
| entrypoints | [src/main.rs](../../../../sources/JunsikChoi__korea-cli/src/main.rs) | entrypoints signal |
| entrypoints | [src/mcp/server.rs](../../../../sources/JunsikChoi__korea-cli/src/mcp/server.rs) | entrypoints signal |
| entrypoints | [src/bin/analyze_pages.rs](../../../../sources/JunsikChoi__korea-cli/src/bin/analyze_pages.rs) | entrypoints signal |
| entrypoints | [src/bin/build_bundle.rs](../../../../sources/JunsikChoi__korea-cli/src/bin/build_bundle.rs) | entrypoints signal |
| config | [Cargo.lock](../../../../sources/JunsikChoi__korea-cli/Cargo.lock) | config signal |
| config | [Cargo.toml](../../../../sources/JunsikChoi__korea-cli/Cargo.toml) | config signal |
| config | [Makefile](../../../../sources/JunsikChoi__korea-cli/Makefile) | config signal |
| ci | [.github/workflows/bundle-ci.yml](../../../../sources/JunsikChoi__korea-cli/.github/workflows/bundle-ci.yml) | ci signal |
| ci | [.github/workflows/release.yml](../../../../sources/JunsikChoi__korea-cli/.github/workflows/release.yml) | ci signal |
| docs | [README.md](../../../../sources/JunsikChoi__korea-cli/README.md) | docs signal |
| docs | [website/.gitkeep](../../../../sources/JunsikChoi__korea-cli/website/.gitkeep) | docs signal |
| docs | [docs/specs/2026-03-31-bundle-transition-design.md](../../../../sources/JunsikChoi__korea-cli/docs/specs/2026-03-31-bundle-transition-design.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 10 | [src/main.rs](../../../../sources/JunsikChoi__korea-cli/src/main.rs)<br>[src/mcp/server.rs](../../../../sources/JunsikChoi__korea-cli/src/mcp/server.rs)<br>[src/bin/analyze_pages.rs](../../../../sources/JunsikChoi__korea-cli/src/bin/analyze_pages.rs)<br>[src/bin/build_bundle.rs](../../../../sources/JunsikChoi__korea-cli/src/bin/build_bundle.rs)<br>[src/bin/crawl_pages.rs](../../../../sources/JunsikChoi__korea-cli/src/bin/crawl_pages.rs)<br>[src/bin/gen_catalog_docs.rs](../../../../sources/JunsikChoi__korea-cli/src/bin/gen_catalog_docs.rs)<br>[src/bin/html_survey.rs](../../../../sources/JunsikChoi__korea-cli/src/bin/html_survey.rs)<br>[src/bin/summarize_signals.rs](../../../../sources/JunsikChoi__korea-cli/src/bin/summarize_signals.rs) |
| agentRuntime | 1 | [src/mcp/tools.rs](../../../../sources/JunsikChoi__korea-cli/src/mcp/tools.rs) |
| mcp | 3 | [src/mcp/mod.rs](../../../../sources/JunsikChoi__korea-cli/src/mcp/mod.rs)<br>[src/mcp/server.rs](../../../../sources/JunsikChoi__korea-cli/src/mcp/server.rs)<br>[src/mcp/tools.rs](../../../../sources/JunsikChoi__korea-cli/src/mcp/tools.rs) |
| retrieval | 0 | 명확하지 않음 |
| spec | 12 | [src/cli/spec.rs](../../../../sources/JunsikChoi__korea-cli/src/cli/spec.rs)<br>[docs/specs/2026-03-31-bundle-transition-design.md](../../../../sources/JunsikChoi__korea-cli/docs/specs/2026-03-31-bundle-transition-design.md)<br>[docs/specs/2026-03-31-phase1-mvp-design.md](../../../../sources/JunsikChoi__korea-cli/docs/specs/2026-03-31-phase1-mvp-design.md)<br>[docs/specs/2026-04-02-gateway-spec-extraction-design.md](../../../../sources/JunsikChoi__korea-cli/docs/specs/2026-04-02-gateway-spec-extraction-design.md)<br>[docs/specs/2026-04-02-html-pattern-discovery-design.md](../../../../sources/JunsikChoi__korea-cli/docs/specs/2026-04-02-html-pattern-discovery-design.md)<br>[docs/specs/2026-04-04-partial-stub-and-ci-pipeline-design.md](../../../../sources/JunsikChoi__korea-cli/docs/specs/2026-04-04-partial-stub-and-ci-pipeline-design.md)<br>[docs/specs/2026-04-05-partial-stub-finalization-design.md](../../../../sources/JunsikChoi__korea-cli/docs/specs/2026-04-05-partial-stub-finalization-design.md)<br>[docs/roadmap/phase1-mvp.md](../../../../sources/JunsikChoi__korea-cli/docs/roadmap/phase1-mvp.md) |
| eval | 10 | [tests/.gitkeep](../../../../sources/JunsikChoi__korea-cli/tests/.gitkeep)<br>[tests/integration/caller_test.rs](../../../../sources/JunsikChoi__korea-cli/tests/integration/caller_test.rs)<br>[tests/integration/catalog_test.rs](../../../../sources/JunsikChoi__korea-cli/tests/integration/catalog_test.rs)<br>[tests/integration/config_test.rs](../../../../sources/JunsikChoi__korea-cli/tests/integration/config_test.rs)<br>[tests/integration/e2e_gateway_smoke.rs](../../../../sources/JunsikChoi__korea-cli/tests/integration/e2e_gateway_smoke.rs)<br>[tests/integration/swagger_test.rs](../../../../sources/JunsikChoi__korea-cli/tests/integration/swagger_test.rs)<br>[src/cli/spec.rs](../../../../sources/JunsikChoi__korea-cli/src/cli/spec.rs)<br>[docs/specs/2026-04-02-gateway-spec-extraction-design.md](../../../../sources/JunsikChoi__korea-cli/docs/specs/2026-04-02-gateway-spec-extraction-design.md) |
| security | 0 | 명확하지 않음 |
| ci | 2 | [.github/workflows/bundle-ci.yml](../../../../sources/JunsikChoi__korea-cli/.github/workflows/bundle-ci.yml)<br>[.github/workflows/release.yml](../../../../sources/JunsikChoi__korea-cli/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [CLAUDE.md](../../../../sources/JunsikChoi__korea-cli/CLAUDE.md) |
| docs | 435 | [README.md](../../../../sources/JunsikChoi__korea-cli/README.md)<br>[website/.gitkeep](../../../../sources/JunsikChoi__korea-cli/website/.gitkeep)<br>[docs/specs/2026-03-31-bundle-transition-design.md](../../../../sources/JunsikChoi__korea-cli/docs/specs/2026-03-31-bundle-transition-design.md)<br>[docs/specs/2026-03-31-phase1-mvp-design.md](../../../../sources/JunsikChoi__korea-cli/docs/specs/2026-03-31-phase1-mvp-design.md)<br>[docs/specs/2026-04-02-gateway-spec-extraction-design.md](../../../../sources/JunsikChoi__korea-cli/docs/specs/2026-04-02-gateway-spec-extraction-design.md)<br>[docs/specs/2026-04-02-html-pattern-discovery-design.md](../../../../sources/JunsikChoi__korea-cli/docs/specs/2026-04-02-html-pattern-discovery-design.md)<br>[docs/specs/2026-04-04-partial-stub-and-ci-pipeline-design.md](../../../../sources/JunsikChoi__korea-cli/docs/specs/2026-04-04-partial-stub-and-ci-pipeline-design.md)<br>[docs/specs/2026-04-05-partial-stub-finalization-design.md](../../../../sources/JunsikChoi__korea-cli/docs/specs/2026-04-05-partial-stub-finalization-design.md) |
| config | 3 | [Cargo.lock](../../../../sources/JunsikChoi__korea-cli/Cargo.lock)<br>[Cargo.toml](../../../../sources/JunsikChoi__korea-cli/Cargo.toml)<br>[Makefile](../../../../sources/JunsikChoi__korea-cli/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 10 | [tests/.gitkeep](../../../../sources/JunsikChoi__korea-cli/tests/.gitkeep)<br>[tests/integration/caller_test.rs](../../../../sources/JunsikChoi__korea-cli/tests/integration/caller_test.rs)<br>[tests/integration/catalog_test.rs](../../../../sources/JunsikChoi__korea-cli/tests/integration/catalog_test.rs)<br>[tests/integration/config_test.rs](../../../../sources/JunsikChoi__korea-cli/tests/integration/config_test.rs)<br>[tests/integration/e2e_gateway_smoke.rs](../../../../sources/JunsikChoi__korea-cli/tests/integration/e2e_gateway_smoke.rs)<br>[tests/integration/swagger_test.rs](../../../../sources/JunsikChoi__korea-cli/tests/integration/swagger_test.rs) |
| CI workflow | 2 | [.github/workflows/bundle-ci.yml](../../../../sources/JunsikChoi__korea-cli/.github/workflows/bundle-ci.yml)<br>[.github/workflows/release.yml](../../../../sources/JunsikChoi__korea-cli/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/JunsikChoi__korea-cli/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/main.rs`, `src/mcp/server.rs`, `src/bin/analyze_pages.rs`.
2. entrypoint를 따라 실행 흐름 확인: `src/main.rs`, `src/mcp/server.rs`, `src/bin/analyze_pages.rs`.
3. agent/tool runtime 매핑: `src/mcp/tools.rs`.
4. test/eval 파일로 동작 검증: `tests/.gitkeep`, `tests/integration/caller_test.rs`, `tests/integration/catalog_test.rs`.

## 기존 레포 인사이트

개발 생산성/DevTools 관점에서 Access Korea's public data APIs with natural language. CLI + MCP server powered by LLM.. 핵심 구조 신호는 Rust, Cargo.toml, Makefile, README.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
