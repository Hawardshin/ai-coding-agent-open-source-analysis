# us/crw 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Fast, lightweight Firecrawl alternative in Rust. Web scraper, crawler & search API with MCP server for AI agents. Drop-in Firecrawl-compatible API (/v1/scrape, /v1/crawl, /v1/search). 2.3x faster than Tavily, 1.5x faster than Firecrawl in 1K-URL benchmarks. 6 MB RAM, single binary. Self-host or use managed cloud.

## 요약

- 조사 단위: `sources/us__crw` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 622 files, 188 directories, depth score 120, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=scripts/check-mcp-example-json.sh, scripts/release/verify_mcp_registry.sh, plans/issue-89-mcp-output-schema.md이고, 의존성 단서는 mcp, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | us/crw |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 187 |
| Forks | 16 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/us__crw](../../../../sources/us__crw) |
| 기존 보고서 | [reports/global-trending/repositories/us__crw.md](../../../global-trending/repositories/us__crw.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 622 / 188 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .githooks, .github, bench, blog, config, conformance, crates, docs, examples, mcp, plans, scripts, sdks, tests |
| 상위 확장자 | .rs: 186, .md: 157, .html: 101, .py: 35, .json: 32, .sh: 25, .toml: 19, .yml: 17, (none): 12, .js: 6, .ts: 6, .png: 5 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 85 |
| crates/crw-server | crates workspace | 25 |
| crates/crw-browse | crates workspace | 20 |
| crates/crw-renderer | crates workspace | 7 |
| crates/crw-mcp | crates workspace | 6 |
| crates/crw-mcp-proto | crates workspace | 4 |
| crates/crw-search | crates workspace | 4 |
| tests | validation surface | 4 |
| crates/crw-cli | crates workspace | 3 |
| crates/crw-core | crates workspace | 3 |
| crates/crw-monitor | crates workspace | 3 |
| crates/crw-crawl | crates workspace | 2 |
| crates/crw-diff | crates workspace | 2 |
| crates/crw-extract | crates workspace | 2 |
| .github | ci surface | 1 |
| bench | validation surface | 1 |
| blog | top-level component | 1 |
| config | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | hooks | make hooks |
| quality | Makefile | fmt | make fmt |
| quality | Makefile | fmt-check | make fmt-check |
| quality | Makefile | clippy | make clippy |
| test | Makefile | test | make test |
| build | Makefile | build | make build |
| quality | Makefile | check | make check |
| utility | Makefile | sync-docs-changelog | make sync-docs-changelog |


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
| observability | prometheus |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [scripts/check-mcp-example-json.sh](../../../../sources/us__crw/scripts/check-mcp-example-json.sh) | mcp signal |
| mcp | [scripts/release/verify_mcp_registry.sh](../../../../sources/us__crw/scripts/release/verify_mcp_registry.sh) | mcp signal |
| mcp | [plans/issue-89-mcp-output-schema.md](../../../../sources/us__crw/plans/issue-89-mcp-output-schema.md) | mcp signal |
| mcp | [plans/mcp-optimization.md](../../../../sources/us__crw/plans/mcp-optimization.md) | mcp signal |
| agentRuntime | [mcp/crw-mcp/skills/SKILL.md](../../../../sources/us__crw/mcp/crw-mcp/skills/SKILL.md) | agentRuntime signal |
| agentRuntime | [examples/crewai/tools.py](../../../../sources/us__crw/examples/crewai/tools.py) | agentRuntime signal |
| agentRuntime | [docs/docs/agent-onboarding.md](../../../../sources/us__crw/docs/docs/agent-onboarding.md) | agentRuntime signal |
| agentRuntime | [docs/agent-onboarding/index.html](../../../../sources/us__crw/docs/agent-onboarding/index.html) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/us__crw/server.json) | entrypoints signal |
| entrypoints | [sdks/typescript/src/index.ts](../../../../sources/us__crw/sdks/typescript/src/index.ts) | entrypoints signal |
| entrypoints | [sdks/python/src/crw/__main__.py](../../../../sources/us__crw/sdks/python/src/crw/__main__.py) | entrypoints signal |
| entrypoints | [mcp/crw-mcp/bin/crw-mcp.js](../../../../sources/us__crw/mcp/crw-mcp/bin/crw-mcp.js) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 21 | [server.json](../../../../sources/us__crw/server.json)<br>[sdks/typescript/src/index.ts](../../../../sources/us__crw/sdks/typescript/src/index.ts)<br>[sdks/python/src/crw/__main__.py](../../../../sources/us__crw/sdks/python/src/crw/__main__.py)<br>[mcp/crw-mcp/bin/crw-mcp.js](../../../../sources/us__crw/mcp/crw-mcp/bin/crw-mcp.js)<br>[mcp/crw-mcp/bin/init.js](../../../../sources/us__crw/mcp/crw-mcp/bin/init.js)<br>[crates/crw-server/src/app.rs](../../../../sources/us__crw/crates/crw-server/src/app.rs)<br>[crates/crw-server/src/lib.rs](../../../../sources/us__crw/crates/crw-server/src/lib.rs)<br>[crates/crw-server/src/main.rs](../../../../sources/us__crw/crates/crw-server/src/main.rs) |
| agentRuntime | 22 | [mcp/crw-mcp/skills/SKILL.md](../../../../sources/us__crw/mcp/crw-mcp/skills/SKILL.md)<br>[examples/crewai/tools.py](../../../../sources/us__crw/examples/crewai/tools.py)<br>[docs/docs/agent-onboarding.md](../../../../sources/us__crw/docs/docs/agent-onboarding.md)<br>[docs/agent-onboarding/index.html](../../../../sources/us__crw/docs/agent-onboarding/index.html)<br>[docs/agent-onboarding/SKILL.md](../../../../sources/us__crw/docs/agent-onboarding/SKILL.md)<br>[crates/crw-monitor/src/runner.rs](../../../../sources/us__crw/crates/crw-monitor/src/runner.rs)<br>[crates/crw-browse/src/tools/click.rs](../../../../sources/us__crw/crates/crw-browse/src/tools/click.rs)<br>[crates/crw-browse/src/tools/common.rs](../../../../sources/us__crw/crates/crw-browse/src/tools/common.rs) |
| mcp | 31 | [scripts/check-mcp-example-json.sh](../../../../sources/us__crw/scripts/check-mcp-example-json.sh)<br>[scripts/release/verify_mcp_registry.sh](../../../../sources/us__crw/scripts/release/verify_mcp_registry.sh)<br>[plans/issue-89-mcp-output-schema.md](../../../../sources/us__crw/plans/issue-89-mcp-output-schema.md)<br>[plans/mcp-optimization.md](../../../../sources/us__crw/plans/mcp-optimization.md)<br>[mcp/crw-mcp-linux-x64/package.json](../../../../sources/us__crw/mcp/crw-mcp-linux-x64/package.json)<br>[mcp/crw-mcp-linux-arm64/package.json](../../../../sources/us__crw/mcp/crw-mcp-linux-arm64/package.json)<br>[mcp/crw-mcp-darwin-x64/package.json](../../../../sources/us__crw/mcp/crw-mcp-darwin-x64/package.json)<br>[mcp/crw-mcp-darwin-arm64/package.json](../../../../sources/us__crw/mcp/crw-mcp-darwin-arm64/package.json) |
| retrieval | 97 | [sdks/typescript/src/index.ts](../../../../sources/us__crw/sdks/typescript/src/index.ts)<br>[docs/index.html](../../../../sources/us__crw/docs/index.html)<br>[docs/v2-api/index.html](../../../../sources/us__crw/docs/v2-api/index.html)<br>[docs/troubleshooting/index.html](../../../../sources/us__crw/docs/troubleshooting/index.html)<br>[docs/self-hosting-hardening/index.html](../../../../sources/us__crw/docs/self-hosting-hardening/index.html)<br>[docs/self-hosting/index.html](../../../../sources/us__crw/docs/self-hosting/index.html)<br>[docs/search/index.html](../../../../sources/us__crw/docs/search/index.html)<br>[docs/sdks/python/index.html](../../../../sources/us__crw/docs/sdks/python/index.html) |
| spec | 5 | [ROADMAP.md](../../../../sources/us__crw/ROADMAP.md)<br>[docs/docs/architecture.md](../../../../sources/us__crw/docs/docs/architecture.md)<br>[docs/architecture/index.html](../../../../sources/us__crw/docs/architecture/index.html)<br>[blog/crw-architecture.md](../../../../sources/us__crw/blog/crw-architecture.md)<br>[blog/rust-vs-python-scrapers-architecture.md](../../../../sources/us__crw/blog/rust-vs-python-scrapers-architecture.md) |
| eval | 91 | [test_api_pipeline.py](../../../../sources/us__crw/test_api_pipeline.py)<br>[tests/fixtures/blog_article.html](../../../../sources/us__crw/tests/fixtures/blog_article.html)<br>[tests/fixtures/js_heavy.html](../../../../sources/us__crw/tests/fixtures/js_heavy.html)<br>[tests/fixtures/simple.html](../../../../sources/us__crw/tests/fixtures/simple.html)<br>[sdks/typescript/tsconfig.test.json](../../../../sources/us__crw/sdks/typescript/tsconfig.test.json)<br>[sdks/typescript/test/client.test.ts](../../../../sources/us__crw/sdks/typescript/test/client.test.ts)<br>[sdks/python/tests/__init__.py](../../../../sources/us__crw/sdks/python/tests/__init__.py)<br>[sdks/python/tests/conftest.py](../../../../sources/us__crw/sdks/python/tests/conftest.py) |
| security | 4 | [scripts/release/audit_release_please_config.py](../../../../sources/us__crw/scripts/release/audit_release_please_config.py)<br>[crates/crw-server/tests/auth.rs](../../../../sources/us__crw/crates/crw-server/tests/auth.rs)<br>[crates/crw-server/tests/security.rs](../../../../sources/us__crw/crates/crw-server/tests/security.rs)<br>[.github/SECURITY.md](../../../../sources/us__crw/.github/SECURITY.md) |
| ci | 12 | [.github/workflows/ci.yml](../../../../sources/us__crw/.github/workflows/ci.yml)<br>[.github/workflows/claude.yml](../../../../sources/us__crw/.github/workflows/claude.yml)<br>[.github/workflows/deprecate-npm.yml](../../../../sources/us__crw/.github/workflows/deprecate-npm.yml)<br>[.github/workflows/docker-build.yml](../../../../sources/us__crw/.github/workflows/docker-build.yml)<br>[.github/workflows/docs-format-snapshot.yml](../../../../sources/us__crw/.github/workflows/docs-format-snapshot.yml)<br>[.github/workflows/docs-guards.yml](../../../../sources/us__crw/.github/workflows/docs-guards.yml)<br>[.github/workflows/examples-test.yml](../../../../sources/us__crw/.github/workflows/examples-test.yml)<br>[.github/workflows/google-indexing.yml](../../../../sources/us__crw/.github/workflows/google-indexing.yml) |
| container | 3 | [docker-compose.stealth.yml](../../../../sources/us__crw/docker-compose.stealth.yml)<br>[docker-compose.yml](../../../../sources/us__crw/docker-compose.yml)<br>[Dockerfile](../../../../sources/us__crw/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 181 | [README.md](../../../../sources/us__crw/README.md)<br>[README.zh-CN.md](../../../../sources/us__crw/README.zh-CN.md)<br>[sdks/typescript/README.md](../../../../sources/us__crw/sdks/typescript/README.md)<br>[sdks/python/README.md](../../../../sources/us__crw/sdks/python/README.md)<br>[examples/README.md](../../../../sources/us__crw/examples/README.md)<br>[examples/pi/README.md](../../../../sources/us__crw/examples/pi/README.md)<br>[examples/openclaw/README.md](../../../../sources/us__crw/examples/openclaw/README.md)<br>[docs/.nojekyll](../../../../sources/us__crw/docs/.nojekyll) |
| config | 25 | [Cargo.lock](../../../../sources/us__crw/Cargo.lock)<br>[Cargo.toml](../../../../sources/us__crw/Cargo.toml)<br>[Makefile](../../../../sources/us__crw/Makefile)<br>[package.json](../../../../sources/us__crw/package.json)<br>[sdks/typescript/package.json](../../../../sources/us__crw/sdks/typescript/package.json)<br>[sdks/typescript/tsconfig.json](../../../../sources/us__crw/sdks/typescript/tsconfig.json)<br>[sdks/python/pyproject.toml](../../../../sources/us__crw/sdks/python/pyproject.toml)<br>[mcp/crw-mcp-linux-x64/package.json](../../../../sources/us__crw/mcp/crw-mcp-linux-x64/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 91 | [test_api_pipeline.py](../../../../sources/us__crw/test_api_pipeline.py)<br>[tests/fixtures/blog_article.html](../../../../sources/us__crw/tests/fixtures/blog_article.html)<br>[tests/fixtures/js_heavy.html](../../../../sources/us__crw/tests/fixtures/js_heavy.html)<br>[tests/fixtures/simple.html](../../../../sources/us__crw/tests/fixtures/simple.html)<br>[sdks/typescript/tsconfig.test.json](../../../../sources/us__crw/sdks/typescript/tsconfig.test.json)<br>[sdks/typescript/test/client.test.ts](../../../../sources/us__crw/sdks/typescript/test/client.test.ts) |
| CI workflow | 12 | [.github/workflows/ci.yml](../../../../sources/us__crw/.github/workflows/ci.yml)<br>[.github/workflows/claude.yml](../../../../sources/us__crw/.github/workflows/claude.yml)<br>[.github/workflows/deprecate-npm.yml](../../../../sources/us__crw/.github/workflows/deprecate-npm.yml)<br>[.github/workflows/docker-build.yml](../../../../sources/us__crw/.github/workflows/docker-build.yml)<br>[.github/workflows/docs-format-snapshot.yml](../../../../sources/us__crw/.github/workflows/docs-format-snapshot.yml)<br>[.github/workflows/docs-guards.yml](../../../../sources/us__crw/.github/workflows/docs-guards.yml) |
| 컨테이너/배포 | 3 | [docker-compose.stealth.yml](../../../../sources/us__crw/docker-compose.stealth.yml)<br>[docker-compose.yml](../../../../sources/us__crw/docker-compose.yml)<br>[Dockerfile](../../../../sources/us__crw/Dockerfile) |
| 보안/정책 | 4 | [scripts/release/audit_release_please_config.py](../../../../sources/us__crw/scripts/release/audit_release_please_config.py)<br>[crates/crw-server/tests/auth.rs](../../../../sources/us__crw/crates/crw-server/tests/auth.rs)<br>[crates/crw-server/tests/security.rs](../../../../sources/us__crw/crates/crw-server/tests/security.rs)<br>[.github/SECURITY.md](../../../../sources/us__crw/.github/SECURITY.md) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `scripts/check-mcp-example-json.sh`, `scripts/release/verify_mcp_registry.sh`, `plans/issue-89-mcp-output-schema.md`.
2. entrypoint를 따라 실행 흐름 확인: `server.json`, `sdks/typescript/src/index.ts`, `sdks/python/src/crw/__main__.py`.
3. agent/tool runtime 매핑: `mcp/crw-mcp/skills/SKILL.md`, `examples/crewai/tools.py`, `docs/docs/agent-onboarding.md`.
4. retrieval/memory/indexing 확인: `sdks/typescript/src/index.ts`, `docs/index.html`, `docs/v2-api/index.html`.
5. test/eval 파일로 동작 검증: `test_api_pipeline.py`, `tests/fixtures/blog_article.html`, `tests/fixtures/js_heavy.html`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Fast, lightweight Firecrawl alternative in Rust. Web scraper, crawler & search API with MCP server for AI agents. Drop i. 핵심 구조 신호는 Rust, package.json, Cargo.toml, Dockerfile, docker-compose.yml, Makefile이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
