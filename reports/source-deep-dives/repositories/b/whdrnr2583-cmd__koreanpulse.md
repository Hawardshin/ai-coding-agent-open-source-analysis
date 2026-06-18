# whdrnr2583-cmd/koreanpulse 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

English-first Korean equity intelligence MCP — DART filings, foreign-holder 5%-rule flows, activist filings, KRX news. For Claude Desktop / Cursor / FastMCP trading agents.

## 요약

- 조사 단위: `sources/whdrnr2583-cmd__koreanpulse` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 127 files, 30 directories, depth score 102, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/koreanpulse/mcp_http.py, landing/public/.well-known/mcp.json, docs/listings/AWESOME_MCP.md이고, 의존성 단서는 openai, claude, mcp, fastapi, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | whdrnr2583-cmd/koreanpulse |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/whdrnr2583-cmd__koreanpulse](../../../../sources/whdrnr2583-cmd__koreanpulse) |
| 기존 보고서 | [reports/korea-trending/repositories/whdrnr2583-cmd__koreanpulse.md](../../../korea-trending/repositories/whdrnr2583-cmd__koreanpulse.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 127 / 30 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, cache-worker, daily-worker, docs, examples, landing, migrations, src, tests, webhook-worker |
| 상위 확장자 | .py: 34, .md: 30, .ts: 18, .json: 14, .tsx: 7, .toml: 4, .yml: 4, (none): 4, .sql: 3, .js: 2, .svg: 2, .css: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 29 |
| tests | validation surface | 15 |
| src | source boundary | 3 |
| .github | ci surface | 1 |
| cache-worker | top-level component | 1 |
| daily-worker | top-level component | 1 |
| examples | top-level component | 1 |
| landing | top-level component | 1 |
| migrations | top-level component | 1 |
| webhook-worker | source boundary | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | koreanpulse | koreanpulse |
| utility | pyproject.toml | koreanpulse-webhook | koreanpulse-webhook |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, claude |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [src/koreanpulse/mcp_http.py](../../../../sources/whdrnr2583-cmd__koreanpulse/src/koreanpulse/mcp_http.py) | mcp signal |
| mcp | [landing/public/.well-known/mcp.json](../../../../sources/whdrnr2583-cmd__koreanpulse/landing/public/.well-known/mcp.json) | mcp signal |
| mcp | [docs/listings/AWESOME_MCP.md](../../../../sources/whdrnr2583-cmd__koreanpulse/docs/listings/AWESOME_MCP.md) | mcp signal |
| entrypoints | [server.json](../../../../sources/whdrnr2583-cmd__koreanpulse/server.json) | entrypoints signal |
| entrypoints | [webhook-worker/src/index.ts](../../../../sources/whdrnr2583-cmd__koreanpulse/webhook-worker/src/index.ts) | entrypoints signal |
| entrypoints | [src/koreanpulse/server.py](../../../../sources/whdrnr2583-cmd__koreanpulse/src/koreanpulse/server.py) | entrypoints signal |
| entrypoints | [daily-worker/src/index.ts](../../../../sources/whdrnr2583-cmd__koreanpulse/daily-worker/src/index.ts) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/whdrnr2583-cmd__koreanpulse/pyproject.toml) | config signal |
| config | [webhook-worker/package.json](../../../../sources/whdrnr2583-cmd__koreanpulse/webhook-worker/package.json) | config signal |
| config | [webhook-worker/tsconfig.json](../../../../sources/whdrnr2583-cmd__koreanpulse/webhook-worker/tsconfig.json) | config signal |
| config | [landing/package.json](../../../../sources/whdrnr2583-cmd__koreanpulse/landing/package.json) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/whdrnr2583-cmd__koreanpulse/.github/workflows/ci.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 5 | [server.json](../../../../sources/whdrnr2583-cmd__koreanpulse/server.json)<br>[webhook-worker/src/index.ts](../../../../sources/whdrnr2583-cmd__koreanpulse/webhook-worker/src/index.ts)<br>[src/koreanpulse/server.py](../../../../sources/whdrnr2583-cmd__koreanpulse/src/koreanpulse/server.py)<br>[daily-worker/src/index.ts](../../../../sources/whdrnr2583-cmd__koreanpulse/daily-worker/src/index.ts)<br>[cache-worker/src/index.ts](../../../../sources/whdrnr2583-cmd__koreanpulse/cache-worker/src/index.ts) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 3 | [src/koreanpulse/mcp_http.py](../../../../sources/whdrnr2583-cmd__koreanpulse/src/koreanpulse/mcp_http.py)<br>[landing/public/.well-known/mcp.json](../../../../sources/whdrnr2583-cmd__koreanpulse/landing/public/.well-known/mcp.json)<br>[docs/listings/AWESOME_MCP.md](../../../../sources/whdrnr2583-cmd__koreanpulse/docs/listings/AWESOME_MCP.md) |
| retrieval | 4 | [webhook-worker/src/index.ts](../../../../sources/whdrnr2583-cmd__koreanpulse/webhook-worker/src/index.ts)<br>[docs/INDEX.md](../../../../sources/whdrnr2583-cmd__koreanpulse/docs/INDEX.md)<br>[daily-worker/src/index.ts](../../../../sources/whdrnr2583-cmd__koreanpulse/daily-worker/src/index.ts)<br>[cache-worker/src/index.ts](../../../../sources/whdrnr2583-cmd__koreanpulse/cache-worker/src/index.ts) |
| spec | 2 | [docs/ARCHITECTURE.md](../../../../sources/whdrnr2583-cmd__koreanpulse/docs/ARCHITECTURE.md)<br>[docs/SPEC.md](../../../../sources/whdrnr2583-cmd__koreanpulse/docs/SPEC.md) |
| eval | 15 | [tests/__init__.py](../../../../sources/whdrnr2583-cmd__koreanpulse/tests/__init__.py)<br>[tests/test_activists.py](../../../../sources/whdrnr2583-cmd__koreanpulse/tests/test_activists.py)<br>[tests/test_alerts.py](../../../../sources/whdrnr2583-cmd__koreanpulse/tests/test_alerts.py)<br>[tests/test_cache.py](../../../../sources/whdrnr2583-cmd__koreanpulse/tests/test_cache.py)<br>[tests/test_dart.py](../../../../sources/whdrnr2583-cmd__koreanpulse/tests/test_dart.py)<br>[tests/test_env.py](../../../../sources/whdrnr2583-cmd__koreanpulse/tests/test_env.py)<br>[tests/test_filing_cache.py](../../../../sources/whdrnr2583-cmd__koreanpulse/tests/test_filing_cache.py)<br>[tests/test_lemonsqueezy.py](../../../../sources/whdrnr2583-cmd__koreanpulse/tests/test_lemonsqueezy.py) |
| security | 0 | 명확하지 않음 |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/whdrnr2583-cmd__koreanpulse/.github/workflows/ci.yml)<br>[.github/workflows/daily-build-backstop.yml](../../../../sources/whdrnr2583-cmd__koreanpulse/.github/workflows/daily-build-backstop.yml)<br>[.github/workflows/release.yml](../../../../sources/whdrnr2583-cmd__koreanpulse/.github/workflows/release.yml) |
| container | 1 | [Dockerfile](../../../../sources/whdrnr2583-cmd__koreanpulse/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 28 | [README.md](../../../../sources/whdrnr2583-cmd__koreanpulse/README.md)<br>[webhook-worker/README.md](../../../../sources/whdrnr2583-cmd__koreanpulse/webhook-worker/README.md)<br>[landing/README.md](../../../../sources/whdrnr2583-cmd__koreanpulse/landing/README.md)<br>[docs/ARCHITECTURE.md](../../../../sources/whdrnr2583-cmd__koreanpulse/docs/ARCHITECTURE.md)<br>[docs/BETA.md](../../../../sources/whdrnr2583-cmd__koreanpulse/docs/BETA.md)<br>[docs/CI.md](../../../../sources/whdrnr2583-cmd__koreanpulse/docs/CI.md)<br>[docs/CLAUDE_DESKTOP.md](../../../../sources/whdrnr2583-cmd__koreanpulse/docs/CLAUDE_DESKTOP.md)<br>[docs/DEMO.md](../../../../sources/whdrnr2583-cmd__koreanpulse/docs/DEMO.md) |
| config | 9 | [pyproject.toml](../../../../sources/whdrnr2583-cmd__koreanpulse/pyproject.toml)<br>[webhook-worker/package.json](../../../../sources/whdrnr2583-cmd__koreanpulse/webhook-worker/package.json)<br>[webhook-worker/tsconfig.json](../../../../sources/whdrnr2583-cmd__koreanpulse/webhook-worker/tsconfig.json)<br>[landing/package.json](../../../../sources/whdrnr2583-cmd__koreanpulse/landing/package.json)<br>[landing/tsconfig.json](../../../../sources/whdrnr2583-cmd__koreanpulse/landing/tsconfig.json)<br>[daily-worker/package.json](../../../../sources/whdrnr2583-cmd__koreanpulse/daily-worker/package.json)<br>[daily-worker/tsconfig.json](../../../../sources/whdrnr2583-cmd__koreanpulse/daily-worker/tsconfig.json)<br>[cache-worker/package.json](../../../../sources/whdrnr2583-cmd__koreanpulse/cache-worker/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 15 | [tests/__init__.py](../../../../sources/whdrnr2583-cmd__koreanpulse/tests/__init__.py)<br>[tests/test_activists.py](../../../../sources/whdrnr2583-cmd__koreanpulse/tests/test_activists.py)<br>[tests/test_alerts.py](../../../../sources/whdrnr2583-cmd__koreanpulse/tests/test_alerts.py)<br>[tests/test_cache.py](../../../../sources/whdrnr2583-cmd__koreanpulse/tests/test_cache.py)<br>[tests/test_dart.py](../../../../sources/whdrnr2583-cmd__koreanpulse/tests/test_dart.py)<br>[tests/test_env.py](../../../../sources/whdrnr2583-cmd__koreanpulse/tests/test_env.py) |
| CI workflow | 3 | [.github/workflows/ci.yml](../../../../sources/whdrnr2583-cmd__koreanpulse/.github/workflows/ci.yml)<br>[.github/workflows/daily-build-backstop.yml](../../../../sources/whdrnr2583-cmd__koreanpulse/.github/workflows/daily-build-backstop.yml)<br>[.github/workflows/release.yml](../../../../sources/whdrnr2583-cmd__koreanpulse/.github/workflows/release.yml) |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/whdrnr2583-cmd__koreanpulse/Dockerfile) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/koreanpulse/mcp_http.py`, `landing/public/.well-known/mcp.json`, `docs/listings/AWESOME_MCP.md`.
2. entrypoint를 따라 실행 흐름 확인: `server.json`, `webhook-worker/src/index.ts`, `src/koreanpulse/server.py`.
3. retrieval/memory/indexing 확인: `webhook-worker/src/index.ts`, `docs/INDEX.md`, `daily-worker/src/index.ts`.
4. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/test_activists.py`, `tests/test_alerts.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 English first Korean equity intelligence MCP — DART filings, foreign holder 5% rule flows, activist filings, KRX news. F. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, README.md, openai, mcp이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
