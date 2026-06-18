# modelcontextprotocol/python-sdk 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

The official Python SDK for Model Context Protocol servers and clients

## 요약

- 조사 단위: `sources/modelcontextprotocol__python-sdk` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 467 files, 94 directories, depth score 116, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/mcp/server/__main__.py, src/mcp/server/mcpserver/server.py, src/mcp/server/lowlevel/server.py이고, 의존성 단서는 anthropic, mcp, modelcontextprotocol, fastapi, pydantic, typer, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | modelcontextprotocol/python-sdk |
| 주제 | 개발 생산성/DevTools / 개발 생산성/DevTools |
| Region | global |
| Language | Python |
| Stars | 23356 |
| Forks | 3550 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/modelcontextprotocol__python-sdk](../../../../sources/modelcontextprotocol__python-sdk) |
| 기존 보고서 | [reports/global-trending/repositories/modelcontextprotocol__python-sdk.md](../../../global-trending/repositories/modelcontextprotocol__python-sdk.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 467 / 94 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .claude, .github, docs, examples, schema, scripts, src, tests |
| 상위 확장자 | .py: 382, .md: 31, .toml: 15, .yml: 12, (none): 9, .yaml: 5, .json: 4, .sh: 2, .typed: 2, .db: 1, .example: 1, .lock: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 72 |
| src | source boundary | 71 |
| examples/servers | examples workspace | 38 |
| docs | documentation surface | 11 |
| examples/clients | examples workspace | 11 |
| examples/mcpserver | examples workspace | 3 |
| examples/snippets | examples workspace | 2 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| schema | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | mcp | mcp |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | anthropic |
| agentProtocols | mcp, modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | fastapi |
| developerSurface | typer |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [src/mcp/server/__main__.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/server/__main__.py) | entrypoints signal |
| entrypoints | [src/mcp/server/mcpserver/server.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/server/mcpserver/server.py) | entrypoints signal |
| entrypoints | [src/mcp/server/lowlevel/server.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/server/lowlevel/server.py) | entrypoints signal |
| entrypoints | [src/mcp/client/__main__.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/client/__main__.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/modelcontextprotocol__python-sdk/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/modelcontextprotocol__python-sdk/uv.lock) | config signal |
| config | [examples/snippets/pyproject.toml](../../../../sources/modelcontextprotocol__python-sdk/examples/snippets/pyproject.toml) | config signal |
| config | [examples/servers/structured-output-lowlevel/pyproject.toml](../../../../sources/modelcontextprotocol__python-sdk/examples/servers/structured-output-lowlevel/pyproject.toml) | config signal |
| ci | [.github/workflows/claude.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/claude.yml) | ci signal |
| ci | [.github/workflows/comment-on-release.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/comment-on-release.yml) | ci signal |
| ci | [.github/workflows/conformance.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/conformance.yml) | ci signal |
| ci | [.github/workflows/deploy-docs.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/deploy-docs.yml) | ci signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 26 | [src/mcp/server/__main__.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/server/__main__.py)<br>[src/mcp/server/mcpserver/server.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/server/mcpserver/server.py)<br>[src/mcp/server/lowlevel/server.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/server/lowlevel/server.py)<br>[src/mcp/client/__main__.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/client/__main__.py)<br>[examples/servers/structured-output-lowlevel/mcp_structured_output_lowlevel/__main__.py](../../../../sources/modelcontextprotocol__python-sdk/examples/servers/structured-output-lowlevel/mcp_structured_output_lowlevel/__main__.py)<br>[examples/servers/sse-polling-demo/mcp_sse_polling_demo/__main__.py](../../../../sources/modelcontextprotocol__python-sdk/examples/servers/sse-polling-demo/mcp_sse_polling_demo/__main__.py)<br>[examples/servers/sse-polling-demo/mcp_sse_polling_demo/server.py](../../../../sources/modelcontextprotocol__python-sdk/examples/servers/sse-polling-demo/mcp_sse_polling_demo/server.py)<br>[examples/servers/simple-tool/mcp_simple_tool/__main__.py](../../../../sources/modelcontextprotocol__python-sdk/examples/servers/simple-tool/mcp_simple_tool/__main__.py) |
| agentRuntime | 17 | [AGENTS.md](../../../../sources/modelcontextprotocol__python-sdk/AGENTS.md)<br>[tests/server/mcpserver/tools/__init__.py](../../../../sources/modelcontextprotocol__python-sdk/tests/server/mcpserver/tools/__init__.py)<br>[tests/server/mcpserver/tools/test_base.py](../../../../sources/modelcontextprotocol__python-sdk/tests/server/mcpserver/tools/test_base.py)<br>[src/mcp/shared/context.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/shared/context.py)<br>[src/mcp/shared/memory.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/shared/memory.py)<br>[src/mcp/shared/tool_name_validation.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/shared/tool_name_validation.py)<br>[src/mcp/server/context.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/server/context.py)<br>[src/mcp/server/runner.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/server/runner.py) |
| mcp | 155 | [src/mcp/__init__.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/__init__.py)<br>[src/mcp/py.typed](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/py.typed)<br>[src/mcp/types/__init__.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/types/__init__.py)<br>[src/mcp/types/_types.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/types/_types.py)<br>[src/mcp/types/_wire_base.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/types/_wire_base.py)<br>[src/mcp/types/jsonrpc.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/types/jsonrpc.py)<br>[src/mcp/types/methods.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/types/methods.py)<br>[src/mcp/types/v2026_07_28/__init__.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/types/v2026_07_28/__init__.py) |
| retrieval | 5 | [tests/client/transports/test_memory.py](../../../../sources/modelcontextprotocol__python-sdk/tests/client/transports/test_memory.py)<br>[src/mcp/shared/memory.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/shared/memory.py)<br>[src/mcp/client/_memory.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/client/_memory.py)<br>[examples/mcpserver/memory.py](../../../../sources/modelcontextprotocol__python-sdk/examples/mcpserver/memory.py)<br>[docs/index.md](../../../../sources/modelcontextprotocol__python-sdk/docs/index.md) |
| spec | 2 | [tests/interaction/_requirements.py](../../../../sources/modelcontextprotocol__python-sdk/tests/interaction/_requirements.py)<br>[examples/clients/simple-chatbot/mcp_simple_chatbot/requirements.txt](../../../../sources/modelcontextprotocol__python-sdk/examples/clients/simple-chatbot/mcp_simple_chatbot/requirements.txt) |
| eval | 181 | [tests/__init__.py](../../../../sources/modelcontextprotocol__python-sdk/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/modelcontextprotocol__python-sdk/tests/conftest.py)<br>[tests/test_examples.py](../../../../sources/modelcontextprotocol__python-sdk/tests/test_examples.py)<br>[tests/test_types.py](../../../../sources/modelcontextprotocol__python-sdk/tests/test_types.py)<br>[tests/types/__init__.py](../../../../sources/modelcontextprotocol__python-sdk/tests/types/__init__.py)<br>[tests/types/test_methods.py](../../../../sources/modelcontextprotocol__python-sdk/tests/types/test_methods.py)<br>[tests/types/test_parity.py](../../../../sources/modelcontextprotocol__python-sdk/tests/types/test_parity.py)<br>[tests/types/test_wire_frames.py](../../../../sources/modelcontextprotocol__python-sdk/tests/types/test_wire_frames.py) |
| security | 68 | [SECURITY.md](../../../../sources/modelcontextprotocol__python-sdk/SECURITY.md)<br>[tests/shared/test_auth_utils.py](../../../../sources/modelcontextprotocol__python-sdk/tests/shared/test_auth_utils.py)<br>[tests/shared/test_auth.py](../../../../sources/modelcontextprotocol__python-sdk/tests/shared/test_auth.py)<br>[tests/server/test_sse_security.py](../../../../sources/modelcontextprotocol__python-sdk/tests/server/test_sse_security.py)<br>[tests/server/test_streamable_http_security.py](../../../../sources/modelcontextprotocol__python-sdk/tests/server/test_streamable_http_security.py)<br>[tests/server/test_transport_security.py](../../../../sources/modelcontextprotocol__python-sdk/tests/server/test_transport_security.py)<br>[tests/server/mcpserver/auth/__init__.py](../../../../sources/modelcontextprotocol__python-sdk/tests/server/mcpserver/auth/__init__.py)<br>[tests/server/mcpserver/auth/test_auth_integration.py](../../../../sources/modelcontextprotocol__python-sdk/tests/server/mcpserver/auth/test_auth_integration.py) |
| ci | 9 | [.github/workflows/claude.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/claude.yml)<br>[.github/workflows/comment-on-release.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/comment-on-release.yml)<br>[.github/workflows/conformance.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/conformance.yml)<br>[.github/workflows/deploy-docs.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/deploy-docs.yml)<br>[.github/workflows/main.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/main.yml)<br>[.github/workflows/publish-pypi.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/publish-pypi.yml)<br>[.github/workflows/shared.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/shared.yml)<br>[.github/workflows/weekly-lockfile-update.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/weekly-lockfile-update.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 2 | [AGENTS.md](../../../../sources/modelcontextprotocol__python-sdk/AGENTS.md)<br>[CLAUDE.md](../../../../sources/modelcontextprotocol__python-sdk/CLAUDE.md) |
| docs | 27 | [mkdocs.yml](../../../../sources/modelcontextprotocol__python-sdk/mkdocs.yml)<br>[README.md](../../../../sources/modelcontextprotocol__python-sdk/README.md)<br>[README.v2.md](../../../../sources/modelcontextprotocol__python-sdk/README.v2.md)<br>[tests/interaction/README.md](../../../../sources/modelcontextprotocol__python-sdk/tests/interaction/README.md)<br>[schema/README.md](../../../../sources/modelcontextprotocol__python-sdk/schema/README.md)<br>[examples/README.md](../../../../sources/modelcontextprotocol__python-sdk/examples/README.md)<br>[examples/servers/sse-polling-demo/README.md](../../../../sources/modelcontextprotocol__python-sdk/examples/servers/sse-polling-demo/README.md)<br>[examples/servers/simple-tool/README.md](../../../../sources/modelcontextprotocol__python-sdk/examples/servers/simple-tool/README.md) |
| config | 17 | [pyproject.toml](../../../../sources/modelcontextprotocol__python-sdk/pyproject.toml)<br>[uv.lock](../../../../sources/modelcontextprotocol__python-sdk/uv.lock)<br>[examples/snippets/pyproject.toml](../../../../sources/modelcontextprotocol__python-sdk/examples/snippets/pyproject.toml)<br>[examples/servers/structured-output-lowlevel/pyproject.toml](../../../../sources/modelcontextprotocol__python-sdk/examples/servers/structured-output-lowlevel/pyproject.toml)<br>[examples/servers/sse-polling-demo/pyproject.toml](../../../../sources/modelcontextprotocol__python-sdk/examples/servers/sse-polling-demo/pyproject.toml)<br>[examples/servers/simple-tool/pyproject.toml](../../../../sources/modelcontextprotocol__python-sdk/examples/servers/simple-tool/pyproject.toml)<br>[examples/servers/simple-streamablehttp-stateless/pyproject.toml](../../../../sources/modelcontextprotocol__python-sdk/examples/servers/simple-streamablehttp-stateless/pyproject.toml)<br>[examples/servers/simple-streamablehttp/pyproject.toml](../../../../sources/modelcontextprotocol__python-sdk/examples/servers/simple-streamablehttp/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 181 | [tests/__init__.py](../../../../sources/modelcontextprotocol__python-sdk/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/modelcontextprotocol__python-sdk/tests/conftest.py)<br>[tests/test_examples.py](../../../../sources/modelcontextprotocol__python-sdk/tests/test_examples.py)<br>[tests/test_types.py](../../../../sources/modelcontextprotocol__python-sdk/tests/test_types.py)<br>[tests/types/__init__.py](../../../../sources/modelcontextprotocol__python-sdk/tests/types/__init__.py)<br>[tests/types/test_methods.py](../../../../sources/modelcontextprotocol__python-sdk/tests/types/test_methods.py) |
| CI workflow | 9 | [.github/workflows/claude.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/claude.yml)<br>[.github/workflows/comment-on-release.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/comment-on-release.yml)<br>[.github/workflows/conformance.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/conformance.yml)<br>[.github/workflows/deploy-docs.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/deploy-docs.yml)<br>[.github/workflows/main.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/main.yml)<br>[.github/workflows/publish-pypi.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/publish-pypi.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 68 | [SECURITY.md](../../../../sources/modelcontextprotocol__python-sdk/SECURITY.md)<br>[tests/shared/test_auth_utils.py](../../../../sources/modelcontextprotocol__python-sdk/tests/shared/test_auth_utils.py)<br>[tests/shared/test_auth.py](../../../../sources/modelcontextprotocol__python-sdk/tests/shared/test_auth.py)<br>[tests/server/test_sse_security.py](../../../../sources/modelcontextprotocol__python-sdk/tests/server/test_sse_security.py)<br>[tests/server/test_streamable_http_security.py](../../../../sources/modelcontextprotocol__python-sdk/tests/server/test_streamable_http_security.py)<br>[tests/server/test_transport_security.py](../../../../sources/modelcontextprotocol__python-sdk/tests/server/test_transport_security.py) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/modelcontextprotocol__python-sdk/AGENTS.md)<br>[CLAUDE.md](../../../../sources/modelcontextprotocol__python-sdk/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/mcp/server/__main__.py`, `src/mcp/server/mcpserver/server.py`, `src/mcp/server/lowlevel/server.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/mcp/server/__main__.py`, `src/mcp/server/mcpserver/server.py`, `src/mcp/server/lowlevel/server.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tests/server/mcpserver/tools/__init__.py`, `tests/server/mcpserver/tools/test_base.py`.
4. retrieval/memory/indexing 확인: `tests/client/transports/test_memory.py`, `src/mcp/shared/memory.py`, `src/mcp/client/_memory.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/conftest.py`, `tests/test_examples.py`.

## 기존 레포 인사이트

개발 생산성/DevTools 관점에서 The official Python SDK for Model Context Protocol servers and clients. 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
