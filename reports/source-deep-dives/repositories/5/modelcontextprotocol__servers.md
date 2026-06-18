# modelcontextprotocol/servers 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Local clone structure analysis: 142 files, 30 directories.

## 요약

- 조사 단위: `sources/modelcontextprotocol__servers` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 142 files, 30 directories, depth score 115, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, src/time/src/mcp_server_time/__init__.py, src/time/src/mcp_server_time/__main__.py이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | modelcontextprotocol/servers |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 87393 |
| Forks | 11022 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/modelcontextprotocol__servers](../../../../sources/modelcontextprotocol__servers) |
| 기존 보고서 | [reports/global-trending/repositories/modelcontextprotocol__servers.md](../../../global-trending/repositories/modelcontextprotocol__servers.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 142 / 30 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, scripts, src |
| 상위 확장자 | .ts: 64, .md: 22, (none): 18, .py: 14, .json: 12, .yml: 5, .lock: 3, .toml: 3, .typed: 1 |
| 소스 패턴 | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 119 |
| .github | ci surface | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | npm run build --workspaces |
| serve-dev | package.json | watch | npm run watch --workspaces |
| utility | package.json | publish-all | npm publish --workspaces --access public |
| utility | package.json | link-all | npm link --workspaces |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | modelcontextprotocol |
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
| mcp | [.mcp.json](../../../../sources/modelcontextprotocol__servers/.mcp.json) | mcp signal |
| mcp | [src/time/src/mcp_server_time/__init__.py](../../../../sources/modelcontextprotocol__servers/src/time/src/mcp_server_time/__init__.py) | mcp signal |
| mcp | [src/time/src/mcp_server_time/__main__.py](../../../../sources/modelcontextprotocol__servers/src/time/src/mcp_server_time/__main__.py) | mcp signal |
| mcp | [src/time/src/mcp_server_time/server.py](../../../../sources/modelcontextprotocol__servers/src/time/src/mcp_server_time/server.py) | mcp signal |
| agentRuntime | [src/memory/Dockerfile](../../../../sources/modelcontextprotocol__servers/src/memory/Dockerfile) | agentRuntime signal |
| agentRuntime | [src/memory/index.ts](../../../../sources/modelcontextprotocol__servers/src/memory/index.ts) | agentRuntime signal |
| agentRuntime | [src/memory/package.json](../../../../sources/modelcontextprotocol__servers/src/memory/package.json) | agentRuntime signal |
| agentRuntime | [src/memory/README.md](../../../../sources/modelcontextprotocol__servers/src/memory/README.md) | agentRuntime signal |
| entrypoints | [src/git/src/mcp_server_git/__main__.py](../../../../sources/modelcontextprotocol__servers/src/git/src/mcp_server_git/__main__.py) | entrypoints signal |
| entrypoints | [src/git/src/mcp_server_git/server.py](../../../../sources/modelcontextprotocol__servers/src/git/src/mcp_server_git/server.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/modelcontextprotocol__servers/CLAUDE.md) | instruction signal |
| instruction | [src/everything/AGENTS.md](../../../../sources/modelcontextprotocol__servers/src/everything/AGENTS.md) | instruction signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 7 | [src/time/src/mcp_server_time/__main__.py](../../../../sources/modelcontextprotocol__servers/src/time/src/mcp_server_time/__main__.py)<br>[src/time/src/mcp_server_time/server.py](../../../../sources/modelcontextprotocol__servers/src/time/src/mcp_server_time/server.py)<br>[src/git/src/mcp_server_git/__main__.py](../../../../sources/modelcontextprotocol__servers/src/git/src/mcp_server_git/__main__.py)<br>[src/git/src/mcp_server_git/server.py](../../../../sources/modelcontextprotocol__servers/src/git/src/mcp_server_git/server.py)<br>[src/fetch/src/mcp_server_fetch/__main__.py](../../../../sources/modelcontextprotocol__servers/src/fetch/src/mcp_server_fetch/__main__.py)<br>[src/fetch/src/mcp_server_fetch/server.py](../../../../sources/modelcontextprotocol__servers/src/fetch/src/mcp_server_fetch/server.py)<br>[src/everything/__tests__/server.test.ts](../../../../sources/modelcontextprotocol__servers/src/everything/__tests__/server.test.ts) |
| agentRuntime | 30 | [src/memory/Dockerfile](../../../../sources/modelcontextprotocol__servers/src/memory/Dockerfile)<br>[src/memory/index.ts](../../../../sources/modelcontextprotocol__servers/src/memory/index.ts)<br>[src/memory/package.json](../../../../sources/modelcontextprotocol__servers/src/memory/package.json)<br>[src/memory/README.md](../../../../sources/modelcontextprotocol__servers/src/memory/README.md)<br>[src/memory/tsconfig.json](../../../../sources/modelcontextprotocol__servers/src/memory/tsconfig.json)<br>[src/memory/vitest.config.ts](../../../../sources/modelcontextprotocol__servers/src/memory/vitest.config.ts)<br>[src/memory/__tests__/file-path.test.ts](../../../../sources/modelcontextprotocol__servers/src/memory/__tests__/file-path.test.ts)<br>[src/memory/__tests__/knowledge-graph.test.ts](../../../../sources/modelcontextprotocol__servers/src/memory/__tests__/knowledge-graph.test.ts) |
| mcp | 11 | [.mcp.json](../../../../sources/modelcontextprotocol__servers/.mcp.json)<br>[src/time/src/mcp_server_time/__init__.py](../../../../sources/modelcontextprotocol__servers/src/time/src/mcp_server_time/__init__.py)<br>[src/time/src/mcp_server_time/__main__.py](../../../../sources/modelcontextprotocol__servers/src/time/src/mcp_server_time/__main__.py)<br>[src/time/src/mcp_server_time/server.py](../../../../sources/modelcontextprotocol__servers/src/time/src/mcp_server_time/server.py)<br>[src/git/src/mcp_server_git/__init__.py](../../../../sources/modelcontextprotocol__servers/src/git/src/mcp_server_git/__init__.py)<br>[src/git/src/mcp_server_git/__main__.py](../../../../sources/modelcontextprotocol__servers/src/git/src/mcp_server_git/__main__.py)<br>[src/git/src/mcp_server_git/py.typed](../../../../sources/modelcontextprotocol__servers/src/git/src/mcp_server_git/py.typed)<br>[src/git/src/mcp_server_git/server.py](../../../../sources/modelcontextprotocol__servers/src/git/src/mcp_server_git/server.py) |
| retrieval | 15 | [src/sequentialthinking/index.ts](../../../../sources/modelcontextprotocol__servers/src/sequentialthinking/index.ts)<br>[src/memory/Dockerfile](../../../../sources/modelcontextprotocol__servers/src/memory/Dockerfile)<br>[src/memory/index.ts](../../../../sources/modelcontextprotocol__servers/src/memory/index.ts)<br>[src/memory/package.json](../../../../sources/modelcontextprotocol__servers/src/memory/package.json)<br>[src/memory/README.md](../../../../sources/modelcontextprotocol__servers/src/memory/README.md)<br>[src/memory/tsconfig.json](../../../../sources/modelcontextprotocol__servers/src/memory/tsconfig.json)<br>[src/memory/vitest.config.ts](../../../../sources/modelcontextprotocol__servers/src/memory/vitest.config.ts)<br>[src/memory/__tests__/file-path.test.ts](../../../../sources/modelcontextprotocol__servers/src/memory/__tests__/file-path.test.ts) |
| spec | 1 | [src/everything/docs/architecture.md](../../../../sources/modelcontextprotocol__servers/src/everything/docs/architecture.md) |
| eval | 19 | [src/time/test/time_server_test.py](../../../../sources/modelcontextprotocol__servers/src/time/test/time_server_test.py)<br>[src/sequentialthinking/__tests__/lib.test.ts](../../../../sources/modelcontextprotocol__servers/src/sequentialthinking/__tests__/lib.test.ts)<br>[src/memory/__tests__/file-path.test.ts](../../../../sources/modelcontextprotocol__servers/src/memory/__tests__/file-path.test.ts)<br>[src/memory/__tests__/knowledge-graph.test.ts](../../../../sources/modelcontextprotocol__servers/src/memory/__tests__/knowledge-graph.test.ts)<br>[src/git/tests/test_server.py](../../../../sources/modelcontextprotocol__servers/src/git/tests/test_server.py)<br>[src/filesystem/__tests__/directory-tree.test.ts](../../../../sources/modelcontextprotocol__servers/src/filesystem/__tests__/directory-tree.test.ts)<br>[src/filesystem/__tests__/lib.test.ts](../../../../sources/modelcontextprotocol__servers/src/filesystem/__tests__/lib.test.ts)<br>[src/filesystem/__tests__/path-utils.test.ts](../../../../sources/modelcontextprotocol__servers/src/filesystem/__tests__/path-utils.test.ts) |
| security | 1 | [SECURITY.md](../../../../sources/modelcontextprotocol__servers/SECURITY.md) |
| ci | 5 | [.github/workflows/claude.yml](../../../../sources/modelcontextprotocol__servers/.github/workflows/claude.yml)<br>[.github/workflows/python.yml](../../../../sources/modelcontextprotocol__servers/.github/workflows/python.yml)<br>[.github/workflows/readme-pr-check.yml](../../../../sources/modelcontextprotocol__servers/.github/workflows/readme-pr-check.yml)<br>[.github/workflows/release.yml](../../../../sources/modelcontextprotocol__servers/.github/workflows/release.yml)<br>[.github/workflows/typescript.yml](../../../../sources/modelcontextprotocol__servers/.github/workflows/typescript.yml) |
| container | 7 | [src/time/Dockerfile](../../../../sources/modelcontextprotocol__servers/src/time/Dockerfile)<br>[src/sequentialthinking/Dockerfile](../../../../sources/modelcontextprotocol__servers/src/sequentialthinking/Dockerfile)<br>[src/memory/Dockerfile](../../../../sources/modelcontextprotocol__servers/src/memory/Dockerfile)<br>[src/git/Dockerfile](../../../../sources/modelcontextprotocol__servers/src/git/Dockerfile)<br>[src/filesystem/Dockerfile](../../../../sources/modelcontextprotocol__servers/src/filesystem/Dockerfile)<br>[src/fetch/Dockerfile](../../../../sources/modelcontextprotocol__servers/src/fetch/Dockerfile)<br>[src/everything/Dockerfile](../../../../sources/modelcontextprotocol__servers/src/everything/Dockerfile) |
| instruction | 2 | [CLAUDE.md](../../../../sources/modelcontextprotocol__servers/CLAUDE.md)<br>[src/everything/AGENTS.md](../../../../sources/modelcontextprotocol__servers/src/everything/AGENTS.md) |
| docs | 16 | [README.md](../../../../sources/modelcontextprotocol__servers/README.md)<br>[src/time/README.md](../../../../sources/modelcontextprotocol__servers/src/time/README.md)<br>[src/sequentialthinking/README.md](../../../../sources/modelcontextprotocol__servers/src/sequentialthinking/README.md)<br>[src/memory/README.md](../../../../sources/modelcontextprotocol__servers/src/memory/README.md)<br>[src/git/README.md](../../../../sources/modelcontextprotocol__servers/src/git/README.md)<br>[src/filesystem/README.md](../../../../sources/modelcontextprotocol__servers/src/filesystem/README.md)<br>[src/fetch/README.md](../../../../sources/modelcontextprotocol__servers/src/fetch/README.md)<br>[src/everything/README.md](../../../../sources/modelcontextprotocol__servers/src/everything/README.md) |
| config | 16 | [package.json](../../../../sources/modelcontextprotocol__servers/package.json)<br>[tsconfig.json](../../../../sources/modelcontextprotocol__servers/tsconfig.json)<br>[src/time/pyproject.toml](../../../../sources/modelcontextprotocol__servers/src/time/pyproject.toml)<br>[src/time/uv.lock](../../../../sources/modelcontextprotocol__servers/src/time/uv.lock)<br>[src/sequentialthinking/package.json](../../../../sources/modelcontextprotocol__servers/src/sequentialthinking/package.json)<br>[src/sequentialthinking/tsconfig.json](../../../../sources/modelcontextprotocol__servers/src/sequentialthinking/tsconfig.json)<br>[src/memory/package.json](../../../../sources/modelcontextprotocol__servers/src/memory/package.json)<br>[src/memory/tsconfig.json](../../../../sources/modelcontextprotocol__servers/src/memory/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 19 | [src/time/test/time_server_test.py](../../../../sources/modelcontextprotocol__servers/src/time/test/time_server_test.py)<br>[src/sequentialthinking/__tests__/lib.test.ts](../../../../sources/modelcontextprotocol__servers/src/sequentialthinking/__tests__/lib.test.ts)<br>[src/memory/__tests__/file-path.test.ts](../../../../sources/modelcontextprotocol__servers/src/memory/__tests__/file-path.test.ts)<br>[src/memory/__tests__/knowledge-graph.test.ts](../../../../sources/modelcontextprotocol__servers/src/memory/__tests__/knowledge-graph.test.ts)<br>[src/git/tests/test_server.py](../../../../sources/modelcontextprotocol__servers/src/git/tests/test_server.py)<br>[src/filesystem/__tests__/directory-tree.test.ts](../../../../sources/modelcontextprotocol__servers/src/filesystem/__tests__/directory-tree.test.ts) |
| CI workflow | 5 | [.github/workflows/claude.yml](../../../../sources/modelcontextprotocol__servers/.github/workflows/claude.yml)<br>[.github/workflows/python.yml](../../../../sources/modelcontextprotocol__servers/.github/workflows/python.yml)<br>[.github/workflows/readme-pr-check.yml](../../../../sources/modelcontextprotocol__servers/.github/workflows/readme-pr-check.yml)<br>[.github/workflows/release.yml](../../../../sources/modelcontextprotocol__servers/.github/workflows/release.yml)<br>[.github/workflows/typescript.yml](../../../../sources/modelcontextprotocol__servers/.github/workflows/typescript.yml) |
| 컨테이너/배포 | 7 | [src/time/Dockerfile](../../../../sources/modelcontextprotocol__servers/src/time/Dockerfile)<br>[src/sequentialthinking/Dockerfile](../../../../sources/modelcontextprotocol__servers/src/sequentialthinking/Dockerfile)<br>[src/memory/Dockerfile](../../../../sources/modelcontextprotocol__servers/src/memory/Dockerfile)<br>[src/git/Dockerfile](../../../../sources/modelcontextprotocol__servers/src/git/Dockerfile)<br>[src/filesystem/Dockerfile](../../../../sources/modelcontextprotocol__servers/src/filesystem/Dockerfile)<br>[src/fetch/Dockerfile](../../../../sources/modelcontextprotocol__servers/src/fetch/Dockerfile) |
| 보안/정책 | 1 | [SECURITY.md](../../../../sources/modelcontextprotocol__servers/SECURITY.md) |
| 에이전트 지시문 | 2 | [CLAUDE.md](../../../../sources/modelcontextprotocol__servers/CLAUDE.md)<br>[src/everything/AGENTS.md](../../../../sources/modelcontextprotocol__servers/src/everything/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `.mcp.json`, `src/time/src/mcp_server_time/__init__.py`, `src/time/src/mcp_server_time/__main__.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/time/src/mcp_server_time/__main__.py`, `src/time/src/mcp_server_time/server.py`, `src/git/src/mcp_server_git/__main__.py`.
3. agent/tool runtime 매핑: `src/memory/Dockerfile`, `src/memory/index.ts`, `src/memory/package.json`.
4. retrieval/memory/indexing 확인: `src/sequentialthinking/index.ts`, `src/memory/Dockerfile`, `src/memory/index.ts`.
5. test/eval 파일로 동작 검증: `src/time/test/time_server_test.py`, `src/sequentialthinking/__tests__/lib.test.ts`, `src/memory/__tests__/file-path.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 142 files, 30 directories.. 핵심 구조 신호는 TypeScript, package.json, README.md, CLAUDE.md, LICENSE, modelcontextprotocol이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
