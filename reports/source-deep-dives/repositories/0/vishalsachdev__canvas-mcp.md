# vishalsachdev/canvas-mcp 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Canvas LMS MCP server — 80+ tools and 5 agent skills for students & educators. Works with Claude, Cursor, Codex, and 40+ agents. v1.1.0

## 요약

- 조사 단위: `sources/vishalsachdev__canvas-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 178 files, 41 directories, depth score 112, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/canvas_mcp/__init__.py, src/canvas_mcp/server.py, src/canvas_mcp/tools/__init__.py이고, 의존성 단서는 claude, mcp, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | vishalsachdev/canvas-mcp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 146 |
| Forks | 41 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/vishalsachdev__canvas-mcp](../../../../sources/vishalsachdev__canvas-mcp) |
| 기존 보고서 | [reports/global-trending/repositories/vishalsachdev__canvas-mcp.md](../../../global-trending/repositories/vishalsachdev__canvas-mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 178 / 41 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, articles, cli, config, deploy, docs, examples, scripts, skills, src, tests, tools |
| 상위 확장자 | .py: 68, .md: 28, .ts: 17, .yml: 14, .json: 10, (none): 8, .html: 7, .js: 5, .png: 4, .sh: 4, .env: 3, .txt: 2 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 69 |
| tests | validation surface | 58 |
| docs | documentation surface | 21 |
| .github | ci surface | 1 |
| articles | top-level component | 1 |
| cli | top-level component | 1 |
| config | top-level component | 1 |
| deploy | deployment surface | 1 |
| examples | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| tools | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | tsc |
| utility | package.json | exec | node --loader ts-node/esm |
| serve-dev | pyproject.toml | canvas-mcp-server | canvas-mcp-server |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | claude |
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
| mcp | [src/canvas_mcp/__init__.py](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/__init__.py) | mcp signal |
| mcp | [src/canvas_mcp/server.py](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/server.py) | mcp signal |
| mcp | [src/canvas_mcp/tools/__init__.py](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/tools/__init__.py) | mcp signal |
| mcp | [src/canvas_mcp/tools/accessibility.py](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/tools/accessibility.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/vishalsachdev__canvas-mcp/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tools/README.md](../../../../sources/vishalsachdev__canvas-mcp/tools/README.md) | agentRuntime signal |
| agentRuntime | [tools/TOOL_MANIFEST.json](../../../../sources/vishalsachdev__canvas-mcp/tools/TOOL_MANIFEST.json) | agentRuntime signal |
| agentRuntime | [tests/tools/__init__.py](../../../../sources/vishalsachdev__canvas-mcp/tests/tools/__init__.py) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/vishalsachdev__canvas-mcp/server.json) | entrypoints signal |
| entrypoints | [cli/bin/cli.js](../../../../sources/vishalsachdev__canvas-mcp/cli/bin/cli.js) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/vishalsachdev__canvas-mcp/CLAUDE.md) | instruction signal |
| config | [package.json](../../../../sources/vishalsachdev__canvas-mcp/package.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [server.json](../../../../sources/vishalsachdev__canvas-mcp/server.json)<br>[src/canvas_mcp/server.py](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/server.py)<br>[cli/bin/cli.js](../../../../sources/vishalsachdev__canvas-mcp/cli/bin/cli.js) |
| agentRuntime | 47 | [AGENTS.md](../../../../sources/vishalsachdev__canvas-mcp/AGENTS.md)<br>[tools/README.md](../../../../sources/vishalsachdev__canvas-mcp/tools/README.md)<br>[tools/TOOL_MANIFEST.json](../../../../sources/vishalsachdev__canvas-mcp/tools/TOOL_MANIFEST.json)<br>[tests/tools/__init__.py](../../../../sources/vishalsachdev__canvas-mcp/tests/tools/__init__.py)<br>[tests/tools/test_accessibility.py](../../../../sources/vishalsachdev__canvas-mcp/tests/tools/test_accessibility.py)<br>[tests/tools/test_admin_tools.py](../../../../sources/vishalsachdev__canvas-mcp/tests/tools/test_admin_tools.py)<br>[tests/tools/test_assignments.py](../../../../sources/vishalsachdev__canvas-mcp/tests/tools/test_assignments.py)<br>[tests/tools/test_bulk_grading.py](../../../../sources/vishalsachdev__canvas-mcp/tests/tools/test_bulk_grading.py) |
| mcp | 61 | [src/canvas_mcp/__init__.py](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/__init__.py)<br>[src/canvas_mcp/server.py](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/server.py)<br>[src/canvas_mcp/tools/__init__.py](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/tools/__init__.py)<br>[src/canvas_mcp/tools/accessibility.py](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/tools/accessibility.py)<br>[src/canvas_mcp/tools/admin_tools.py](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/tools/admin_tools.py)<br>[src/canvas_mcp/tools/assignments.py](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/tools/assignments.py)<br>[src/canvas_mcp/tools/code_execution.py](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/tools/code_execution.py)<br>[src/canvas_mcp/tools/courses.py](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/tools/courses.py) |
| retrieval | 8 | [src/canvas_mcp/code_api/index.ts](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/code_api/index.ts)<br>[src/canvas_mcp/code_api/canvas/index.ts](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/code_api/canvas/index.ts)<br>[src/canvas_mcp/code_api/canvas/grading/index.ts](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/code_api/canvas/grading/index.ts)<br>[src/canvas_mcp/code_api/canvas/discussions/index.ts](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/code_api/canvas/discussions/index.ts)<br>[src/canvas_mcp/code_api/canvas/courses/index.ts](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/code_api/canvas/courses/index.ts)<br>[src/canvas_mcp/code_api/canvas/communications/index.ts](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/code_api/canvas/communications/index.ts)<br>[src/canvas_mcp/code_api/canvas/assignments/index.ts](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/code_api/canvas/assignments/index.ts)<br>[docs/index.html](../../../../sources/vishalsachdev__canvas-mcp/docs/index.html) |
| spec | 0 | 명확하지 않음 |
| eval | 32 | [tests/conftest.py](../../../../sources/vishalsachdev__canvas-mcp/tests/conftest.py)<br>[tests/test_http_transport.py](../../../../sources/vishalsachdev__canvas-mcp/tests/test_http_transport.py)<br>[tests/test_role_filtering.py](../../../../sources/vishalsachdev__canvas-mcp/tests/test_role_filtering.py)<br>[tests/tools/__init__.py](../../../../sources/vishalsachdev__canvas-mcp/tests/tools/__init__.py)<br>[tests/tools/test_accessibility.py](../../../../sources/vishalsachdev__canvas-mcp/tests/tools/test_accessibility.py)<br>[tests/tools/test_admin_tools.py](../../../../sources/vishalsachdev__canvas-mcp/tests/tools/test_admin_tools.py)<br>[tests/tools/test_assignments.py](../../../../sources/vishalsachdev__canvas-mcp/tests/tools/test_assignments.py)<br>[tests/tools/test_bulk_grading.py](../../../../sources/vishalsachdev__canvas-mcp/tests/tools/test_bulk_grading.py) |
| security | 13 | [SECURITY.md](../../../../sources/vishalsachdev__canvas-mcp/SECURITY.md)<br>[tests/security/__init__.py](../../../../sources/vishalsachdev__canvas-mcp/tests/security/__init__.py)<br>[tests/security/test_audit_logging.py](../../../../sources/vishalsachdev__canvas-mcp/tests/security/test_audit_logging.py)<br>[tests/security/test_authentication.py](../../../../sources/vishalsachdev__canvas-mcp/tests/security/test_authentication.py)<br>[tests/security/test_code_execution.py](../../../../sources/vishalsachdev__canvas-mcp/tests/security/test_code_execution.py)<br>[tests/security/test_dependencies.py](../../../../sources/vishalsachdev__canvas-mcp/tests/security/test_dependencies.py)<br>[tests/security/test_ferpa_compliance.py](../../../../sources/vishalsachdev__canvas-mcp/tests/security/test_ferpa_compliance.py)<br>[tests/security/test_input_validation.py](../../../../sources/vishalsachdev__canvas-mcp/tests/security/test_input_validation.py) |
| ci | 11 | [.github/workflows/auto-label-issues.yml](../../../../sources/vishalsachdev__canvas-mcp/.github/workflows/auto-label-issues.yml)<br>[.github/workflows/canvas-mcp-testing.yml](../../../../sources/vishalsachdev__canvas-mcp/.github/workflows/canvas-mcp-testing.yml)<br>[.github/workflows/claude-code-review.yml](../../../../sources/vishalsachdev__canvas-mcp/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/vishalsachdev__canvas-mcp/.github/workflows/claude.yml)<br>[.github/workflows/create-release.yml](../../../../sources/vishalsachdev__canvas-mcp/.github/workflows/create-release.yml)<br>[.github/workflows/deploy-prod.yml](../../../../sources/vishalsachdev__canvas-mcp/.github/workflows/deploy-prod.yml)<br>[.github/workflows/deploy-staging.yml](../../../../sources/vishalsachdev__canvas-mcp/.github/workflows/deploy-staging.yml)<br>[.github/workflows/publish-mcp.yml](../../../../sources/vishalsachdev__canvas-mcp/.github/workflows/publish-mcp.yml) |
| container | 4 | [Dockerfile](../../../../sources/vishalsachdev__canvas-mcp/Dockerfile)<br>[deploy/canvas-mcp.service](../../../../sources/vishalsachdev__canvas-mcp/deploy/canvas-mcp.service)<br>[deploy/nginx-canvas-mcp.conf](../../../../sources/vishalsachdev__canvas-mcp/deploy/nginx-canvas-mcp.conf)<br>[deploy/setup.sh](../../../../sources/vishalsachdev__canvas-mcp/deploy/setup.sh) |
| instruction | 2 | [AGENTS.md](../../../../sources/vishalsachdev__canvas-mcp/AGENTS.md)<br>[CLAUDE.md](../../../../sources/vishalsachdev__canvas-mcp/CLAUDE.md) |
| docs | 24 | [README.md](../../../../sources/vishalsachdev__canvas-mcp/README.md)<br>[tools/README.md](../../../../sources/vishalsachdev__canvas-mcp/tools/README.md)<br>[src/canvas_mcp/code_api/README.md](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/code_api/README.md)<br>[docs/.nojekyll](../../../../sources/vishalsachdev__canvas-mcp/docs/.nojekyll)<br>[docs/best-practices.md](../../../../sources/vishalsachdev__canvas-mcp/docs/best-practices.md)<br>[docs/bulk-grading.html](../../../../sources/vishalsachdev__canvas-mcp/docs/bulk-grading.html)<br>[docs/canvas-mcp-header.png](../../../../sources/vishalsachdev__canvas-mcp/docs/canvas-mcp-header.png)<br>[docs/drew-rozema.jpeg](../../../../sources/vishalsachdev__canvas-mcp/docs/drew-rozema.jpeg) |
| config | 5 | [package.json](../../../../sources/vishalsachdev__canvas-mcp/package.json)<br>[pyproject.toml](../../../../sources/vishalsachdev__canvas-mcp/pyproject.toml)<br>[tsconfig.json](../../../../sources/vishalsachdev__canvas-mcp/tsconfig.json)<br>[uv.lock](../../../../sources/vishalsachdev__canvas-mcp/uv.lock)<br>[cli/package.json](../../../../sources/vishalsachdev__canvas-mcp/cli/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 32 | [tests/conftest.py](../../../../sources/vishalsachdev__canvas-mcp/tests/conftest.py)<br>[tests/test_http_transport.py](../../../../sources/vishalsachdev__canvas-mcp/tests/test_http_transport.py)<br>[tests/test_role_filtering.py](../../../../sources/vishalsachdev__canvas-mcp/tests/test_role_filtering.py)<br>[tests/tools/__init__.py](../../../../sources/vishalsachdev__canvas-mcp/tests/tools/__init__.py)<br>[tests/tools/test_accessibility.py](../../../../sources/vishalsachdev__canvas-mcp/tests/tools/test_accessibility.py)<br>[tests/tools/test_admin_tools.py](../../../../sources/vishalsachdev__canvas-mcp/tests/tools/test_admin_tools.py) |
| CI workflow | 11 | [.github/workflows/auto-label-issues.yml](../../../../sources/vishalsachdev__canvas-mcp/.github/workflows/auto-label-issues.yml)<br>[.github/workflows/canvas-mcp-testing.yml](../../../../sources/vishalsachdev__canvas-mcp/.github/workflows/canvas-mcp-testing.yml)<br>[.github/workflows/claude-code-review.yml](../../../../sources/vishalsachdev__canvas-mcp/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/vishalsachdev__canvas-mcp/.github/workflows/claude.yml)<br>[.github/workflows/create-release.yml](../../../../sources/vishalsachdev__canvas-mcp/.github/workflows/create-release.yml)<br>[.github/workflows/deploy-prod.yml](../../../../sources/vishalsachdev__canvas-mcp/.github/workflows/deploy-prod.yml) |
| 컨테이너/배포 | 4 | [Dockerfile](../../../../sources/vishalsachdev__canvas-mcp/Dockerfile)<br>[deploy/canvas-mcp.service](../../../../sources/vishalsachdev__canvas-mcp/deploy/canvas-mcp.service)<br>[deploy/nginx-canvas-mcp.conf](../../../../sources/vishalsachdev__canvas-mcp/deploy/nginx-canvas-mcp.conf)<br>[deploy/setup.sh](../../../../sources/vishalsachdev__canvas-mcp/deploy/setup.sh) |
| 보안/정책 | 13 | [SECURITY.md](../../../../sources/vishalsachdev__canvas-mcp/SECURITY.md)<br>[tests/security/__init__.py](../../../../sources/vishalsachdev__canvas-mcp/tests/security/__init__.py)<br>[tests/security/test_audit_logging.py](../../../../sources/vishalsachdev__canvas-mcp/tests/security/test_audit_logging.py)<br>[tests/security/test_authentication.py](../../../../sources/vishalsachdev__canvas-mcp/tests/security/test_authentication.py)<br>[tests/security/test_code_execution.py](../../../../sources/vishalsachdev__canvas-mcp/tests/security/test_code_execution.py)<br>[tests/security/test_dependencies.py](../../../../sources/vishalsachdev__canvas-mcp/tests/security/test_dependencies.py) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/vishalsachdev__canvas-mcp/AGENTS.md)<br>[CLAUDE.md](../../../../sources/vishalsachdev__canvas-mcp/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/canvas_mcp/__init__.py`, `src/canvas_mcp/server.py`, `src/canvas_mcp/tools/__init__.py`.
2. entrypoint를 따라 실행 흐름 확인: `server.json`, `src/canvas_mcp/server.py`, `cli/bin/cli.js`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tools/README.md`, `tools/TOOL_MANIFEST.json`.
4. retrieval/memory/indexing 확인: `src/canvas_mcp/code_api/index.ts`, `src/canvas_mcp/code_api/canvas/index.ts`, `src/canvas_mcp/code_api/canvas/grading/index.ts`.
5. test/eval 파일로 동작 검증: `tests/conftest.py`, `tests/test_http_transport.py`, `tests/test_role_filtering.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Canvas LMS MCP server — 80+ tools and 5 agent skills for students & educators. Works with Claude, Cursor, Codex, and 40+. 핵심 구조 신호는 Python, package.json, pyproject.toml, Dockerfile, README.md, AGENTS.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
