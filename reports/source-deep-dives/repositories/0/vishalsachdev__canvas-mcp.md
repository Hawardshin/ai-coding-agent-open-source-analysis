# vishalsachdev/canvas-mcp Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Canvas LMS MCP server — 80+ tools and 5 agent skills for students & educators. Works with Claude, Cursor, Codex, and 40+ agents. v1.1.0

## 요약

- 조사 단위: `sources/vishalsachdev__canvas-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 178 files, 41 directories, depth score 118, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/canvas_mcp/__init__.py, src/canvas_mcp/server.py, src/canvas_mcp/tools/__init__.py이고, 의존성 단서는 claude, mcp, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | vishalsachdev/canvas-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 146 |
| Forks | 41 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/vishalsachdev__canvas-mcp](../../../../sources/vishalsachdev__canvas-mcp) |
| Existing report | [reports/global-trending/repositories/vishalsachdev__canvas-mcp.md](../../../global-trending/repositories/vishalsachdev__canvas-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 178 / 41 |
| Max observed depth | 6 |
| Top directories | .github, articles, cli, config, deploy, docs, examples, scripts, skills, src, tests, tools |
| Top extensions | .py: 68, .md: 28, .ts: 17, .yml: 14, .json: 10, (none): 8, .html: 7, .js: 5, .png: 4, .sh: 4, .env: 3, .txt: 2 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
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


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | tsc |
| utility | package.json | exec | node --loader ts-node/esm |
| serve-dev | pyproject.toml | canvas-mcp-server | canvas-mcp-server |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | claude |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [server.json](../../../../sources/vishalsachdev__canvas-mcp/server.json)<br>[src/canvas_mcp/server.py](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/server.py)<br>[cli/bin/cli.js](../../../../sources/vishalsachdev__canvas-mcp/cli/bin/cli.js) |
| agentRuntime | 47 | [AGENTS.md](../../../../sources/vishalsachdev__canvas-mcp/AGENTS.md)<br>[tools/README.md](../../../../sources/vishalsachdev__canvas-mcp/tools/README.md)<br>[tools/TOOL_MANIFEST.json](../../../../sources/vishalsachdev__canvas-mcp/tools/TOOL_MANIFEST.json)<br>[tests/tools/__init__.py](../../../../sources/vishalsachdev__canvas-mcp/tests/tools/__init__.py)<br>[tests/tools/test_accessibility.py](../../../../sources/vishalsachdev__canvas-mcp/tests/tools/test_accessibility.py)<br>[tests/tools/test_admin_tools.py](../../../../sources/vishalsachdev__canvas-mcp/tests/tools/test_admin_tools.py)<br>[tests/tools/test_assignments.py](../../../../sources/vishalsachdev__canvas-mcp/tests/tools/test_assignments.py)<br>[tests/tools/test_bulk_grading.py](../../../../sources/vishalsachdev__canvas-mcp/tests/tools/test_bulk_grading.py) |
| mcp | 61 | [src/canvas_mcp/__init__.py](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/__init__.py)<br>[src/canvas_mcp/server.py](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/server.py)<br>[src/canvas_mcp/tools/__init__.py](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/tools/__init__.py)<br>[src/canvas_mcp/tools/accessibility.py](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/tools/accessibility.py)<br>[src/canvas_mcp/tools/admin_tools.py](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/tools/admin_tools.py)<br>[src/canvas_mcp/tools/assignments.py](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/tools/assignments.py)<br>[src/canvas_mcp/tools/code_execution.py](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/tools/code_execution.py)<br>[src/canvas_mcp/tools/courses.py](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/tools/courses.py) |
| retrieval | 8 | [src/canvas_mcp/code_api/index.ts](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/code_api/index.ts)<br>[src/canvas_mcp/code_api/canvas/index.ts](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/code_api/canvas/index.ts)<br>[src/canvas_mcp/code_api/canvas/grading/index.ts](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/code_api/canvas/grading/index.ts)<br>[src/canvas_mcp/code_api/canvas/discussions/index.ts](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/code_api/canvas/discussions/index.ts)<br>[src/canvas_mcp/code_api/canvas/courses/index.ts](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/code_api/canvas/courses/index.ts)<br>[src/canvas_mcp/code_api/canvas/communications/index.ts](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/code_api/canvas/communications/index.ts)<br>[src/canvas_mcp/code_api/canvas/assignments/index.ts](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/code_api/canvas/assignments/index.ts)<br>[docs/index.html](../../../../sources/vishalsachdev__canvas-mcp/docs/index.html) |
| spec | 0 | not obvious |
| eval | 32 | [tests/conftest.py](../../../../sources/vishalsachdev__canvas-mcp/tests/conftest.py)<br>[tests/test_http_transport.py](../../../../sources/vishalsachdev__canvas-mcp/tests/test_http_transport.py)<br>[tests/test_role_filtering.py](../../../../sources/vishalsachdev__canvas-mcp/tests/test_role_filtering.py)<br>[tests/tools/__init__.py](../../../../sources/vishalsachdev__canvas-mcp/tests/tools/__init__.py)<br>[tests/tools/test_accessibility.py](../../../../sources/vishalsachdev__canvas-mcp/tests/tools/test_accessibility.py)<br>[tests/tools/test_admin_tools.py](../../../../sources/vishalsachdev__canvas-mcp/tests/tools/test_admin_tools.py)<br>[tests/tools/test_assignments.py](../../../../sources/vishalsachdev__canvas-mcp/tests/tools/test_assignments.py)<br>[tests/tools/test_bulk_grading.py](../../../../sources/vishalsachdev__canvas-mcp/tests/tools/test_bulk_grading.py) |
| security | 13 | [SECURITY.md](../../../../sources/vishalsachdev__canvas-mcp/SECURITY.md)<br>[tests/security/__init__.py](../../../../sources/vishalsachdev__canvas-mcp/tests/security/__init__.py)<br>[tests/security/test_audit_logging.py](../../../../sources/vishalsachdev__canvas-mcp/tests/security/test_audit_logging.py)<br>[tests/security/test_authentication.py](../../../../sources/vishalsachdev__canvas-mcp/tests/security/test_authentication.py)<br>[tests/security/test_code_execution.py](../../../../sources/vishalsachdev__canvas-mcp/tests/security/test_code_execution.py)<br>[tests/security/test_dependencies.py](../../../../sources/vishalsachdev__canvas-mcp/tests/security/test_dependencies.py)<br>[tests/security/test_ferpa_compliance.py](../../../../sources/vishalsachdev__canvas-mcp/tests/security/test_ferpa_compliance.py)<br>[tests/security/test_input_validation.py](../../../../sources/vishalsachdev__canvas-mcp/tests/security/test_input_validation.py) |
| ci | 11 | [.github/workflows/auto-label-issues.yml](../../../../sources/vishalsachdev__canvas-mcp/.github/workflows/auto-label-issues.yml)<br>[.github/workflows/canvas-mcp-testing.yml](../../../../sources/vishalsachdev__canvas-mcp/.github/workflows/canvas-mcp-testing.yml)<br>[.github/workflows/claude-code-review.yml](../../../../sources/vishalsachdev__canvas-mcp/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/vishalsachdev__canvas-mcp/.github/workflows/claude.yml)<br>[.github/workflows/create-release.yml](../../../../sources/vishalsachdev__canvas-mcp/.github/workflows/create-release.yml)<br>[.github/workflows/deploy-prod.yml](../../../../sources/vishalsachdev__canvas-mcp/.github/workflows/deploy-prod.yml)<br>[.github/workflows/deploy-staging.yml](../../../../sources/vishalsachdev__canvas-mcp/.github/workflows/deploy-staging.yml)<br>[.github/workflows/publish-mcp.yml](../../../../sources/vishalsachdev__canvas-mcp/.github/workflows/publish-mcp.yml) |
| container | 4 | [Dockerfile](../../../../sources/vishalsachdev__canvas-mcp/Dockerfile)<br>[deploy/canvas-mcp.service](../../../../sources/vishalsachdev__canvas-mcp/deploy/canvas-mcp.service)<br>[deploy/nginx-canvas-mcp.conf](../../../../sources/vishalsachdev__canvas-mcp/deploy/nginx-canvas-mcp.conf)<br>[deploy/setup.sh](../../../../sources/vishalsachdev__canvas-mcp/deploy/setup.sh) |
| instruction | 2 | [AGENTS.md](../../../../sources/vishalsachdev__canvas-mcp/AGENTS.md)<br>[CLAUDE.md](../../../../sources/vishalsachdev__canvas-mcp/CLAUDE.md) |
| docs | 24 | [README.md](../../../../sources/vishalsachdev__canvas-mcp/README.md)<br>[tools/README.md](../../../../sources/vishalsachdev__canvas-mcp/tools/README.md)<br>[src/canvas_mcp/code_api/README.md](../../../../sources/vishalsachdev__canvas-mcp/src/canvas_mcp/code_api/README.md)<br>[docs/.nojekyll](../../../../sources/vishalsachdev__canvas-mcp/docs/.nojekyll)<br>[docs/best-practices.md](../../../../sources/vishalsachdev__canvas-mcp/docs/best-practices.md)<br>[docs/bulk-grading.html](../../../../sources/vishalsachdev__canvas-mcp/docs/bulk-grading.html)<br>[docs/canvas-mcp-header.png](../../../../sources/vishalsachdev__canvas-mcp/docs/canvas-mcp-header.png)<br>[docs/drew-rozema.jpeg](../../../../sources/vishalsachdev__canvas-mcp/docs/drew-rozema.jpeg) |
| config | 5 | [package.json](../../../../sources/vishalsachdev__canvas-mcp/package.json)<br>[pyproject.toml](../../../../sources/vishalsachdev__canvas-mcp/pyproject.toml)<br>[tsconfig.json](../../../../sources/vishalsachdev__canvas-mcp/tsconfig.json)<br>[uv.lock](../../../../sources/vishalsachdev__canvas-mcp/uv.lock)<br>[cli/package.json](../../../../sources/vishalsachdev__canvas-mcp/cli/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 32 | [tests/conftest.py](../../../../sources/vishalsachdev__canvas-mcp/tests/conftest.py)<br>[tests/test_http_transport.py](../../../../sources/vishalsachdev__canvas-mcp/tests/test_http_transport.py)<br>[tests/test_role_filtering.py](../../../../sources/vishalsachdev__canvas-mcp/tests/test_role_filtering.py)<br>[tests/tools/__init__.py](../../../../sources/vishalsachdev__canvas-mcp/tests/tools/__init__.py)<br>[tests/tools/test_accessibility.py](../../../../sources/vishalsachdev__canvas-mcp/tests/tools/test_accessibility.py)<br>[tests/tools/test_admin_tools.py](../../../../sources/vishalsachdev__canvas-mcp/tests/tools/test_admin_tools.py) |
| CI workflows | 11 | [.github/workflows/auto-label-issues.yml](../../../../sources/vishalsachdev__canvas-mcp/.github/workflows/auto-label-issues.yml)<br>[.github/workflows/canvas-mcp-testing.yml](../../../../sources/vishalsachdev__canvas-mcp/.github/workflows/canvas-mcp-testing.yml)<br>[.github/workflows/claude-code-review.yml](../../../../sources/vishalsachdev__canvas-mcp/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/vishalsachdev__canvas-mcp/.github/workflows/claude.yml)<br>[.github/workflows/create-release.yml](../../../../sources/vishalsachdev__canvas-mcp/.github/workflows/create-release.yml)<br>[.github/workflows/deploy-prod.yml](../../../../sources/vishalsachdev__canvas-mcp/.github/workflows/deploy-prod.yml) |
| Containers / deploy | 4 | [Dockerfile](../../../../sources/vishalsachdev__canvas-mcp/Dockerfile)<br>[deploy/canvas-mcp.service](../../../../sources/vishalsachdev__canvas-mcp/deploy/canvas-mcp.service)<br>[deploy/nginx-canvas-mcp.conf](../../../../sources/vishalsachdev__canvas-mcp/deploy/nginx-canvas-mcp.conf)<br>[deploy/setup.sh](../../../../sources/vishalsachdev__canvas-mcp/deploy/setup.sh) |
| Security / policy | 13 | [SECURITY.md](../../../../sources/vishalsachdev__canvas-mcp/SECURITY.md)<br>[tests/security/__init__.py](../../../../sources/vishalsachdev__canvas-mcp/tests/security/__init__.py)<br>[tests/security/test_audit_logging.py](../../../../sources/vishalsachdev__canvas-mcp/tests/security/test_audit_logging.py)<br>[tests/security/test_authentication.py](../../../../sources/vishalsachdev__canvas-mcp/tests/security/test_authentication.py)<br>[tests/security/test_code_execution.py](../../../../sources/vishalsachdev__canvas-mcp/tests/security/test_code_execution.py)<br>[tests/security/test_dependencies.py](../../../../sources/vishalsachdev__canvas-mcp/tests/security/test_dependencies.py) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/vishalsachdev__canvas-mcp/AGENTS.md)<br>[CLAUDE.md](../../../../sources/vishalsachdev__canvas-mcp/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/canvas_mcp/__init__.py`, `src/canvas_mcp/server.py`, `src/canvas_mcp/tools/__init__.py`.
2. Trace execution through entrypoints: `server.json`, `src/canvas_mcp/server.py`, `cli/bin/cli.js`.
3. Map agent/tool runtime through: `AGENTS.md`, `tools/README.md`, `tools/TOOL_MANIFEST.json`.
4. Inspect retrieval/memory/indexing through: `src/canvas_mcp/code_api/index.ts`, `src/canvas_mcp/code_api/canvas/index.ts`, `src/canvas_mcp/code_api/canvas/grading/index.ts`.
5. Verify behavior through test/eval files: `tests/conftest.py`, `tests/test_http_transport.py`, `tests/test_role_filtering.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Canvas LMS MCP server — 80+ tools and 5 agent skills for students & educators. Works with Claude, Cursor, Codex, and 40+. 핵심 구조 신호는 Python, package.json, pyproject.toml, Dockerfile, README.md, AGENTS.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
