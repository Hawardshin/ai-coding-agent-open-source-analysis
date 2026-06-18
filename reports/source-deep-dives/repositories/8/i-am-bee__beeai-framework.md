# i-am-bee/beeai-framework 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Build production-ready AI agents in both Python and Typescript.

## 요약

- 조사 단위: `sources/i-am-bee__beeai-framework` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,082 files, 297 directories, depth score 119, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=typescript/src/tools/mcp.test.ts, typescript/src/tools/mcp.ts, typescript/src/adapters/mcp/serve/http_server.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | i-am-bee/beeai-framework |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 3297 |
| Forks | 452 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/i-am-bee__beeai-framework](../../../../sources/i-am-bee__beeai-framework) |
| 기존 보고서 | [reports/global-trending/repositories/i-am-bee__beeai-framework.md](../../../global-trending/repositories/i-am-bee__beeai-framework.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1082 / 297 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .github, docs, docs-old, python, typescript |
| 상위 확장자 | .py: 556, .ts: 345, .mdx: 56, .md: 32, (none): 13, .yml: 12, .json: 11, .astro: 10, .ipynb: 7, .mjs: 7, .toml: 7, .svg: 6 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 36 |
| .github | ci surface | 1 |
| docs-old | documentation surface | 1 |
| python | top-level component | 1 |
| typescript | top-level component | 1 |


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
| mcp | [typescript/src/tools/mcp.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/tools/mcp.test.ts) | mcp signal |
| mcp | [typescript/src/tools/mcp.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/tools/mcp.ts) | mcp signal |
| mcp | [typescript/src/adapters/mcp/serve/http_server.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/adapters/mcp/serve/http_server.ts) | mcp signal |
| mcp | [typescript/src/adapters/mcp/serve/in_memory_store.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/adapters/mcp/serve/in_memory_store.ts) | mcp signal |
| agentRuntime | [typescript/tests/e2e/tools/arxiv.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/e2e/tools/arxiv.test.ts) | agentRuntime signal |
| agentRuntime | [typescript/tests/e2e/tools/custom.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/e2e/tools/custom.test.ts) | agentRuntime signal |
| agentRuntime | [typescript/tests/e2e/tools/duckDuckGoSearch.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/e2e/tools/duckDuckGoSearch.test.ts) | agentRuntime signal |
| agentRuntime | [typescript/tests/e2e/tools/openapi.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/e2e/tools/openapi.test.ts) | agentRuntime signal |
| entrypoints | [typescript/src/index.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/index.ts) | entrypoints signal |
| entrypoints | [typescript/src/serve/server.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/serve/server.ts) | entrypoints signal |
| entrypoints | [typescript/src/adapters/mcp/serve/server.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/adapters/mcp/serve/server.ts) | entrypoints signal |
| entrypoints | [typescript/src/adapters/a2a/serve/server.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/adapters/a2a/serve/server.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 14 | [typescript/src/index.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/index.ts)<br>[typescript/src/serve/server.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/serve/server.ts)<br>[typescript/src/adapters/mcp/serve/server.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/adapters/mcp/serve/server.ts)<br>[typescript/src/adapters/a2a/serve/server.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/adapters/a2a/serve/server.ts)<br>[typescript/examples/workflows/competitive-analysis/main.ts](../../../../sources/i-am-bee__beeai-framework/typescript/examples/workflows/competitive-analysis/main.ts)<br>[python/beeai_framework/serve/server.py](../../../../sources/i-am-bee__beeai-framework/python/beeai_framework/serve/server.py)<br>[python/beeai_framework/adapters/watsonx_orchestrate/serve/server.py](../../../../sources/i-am-bee__beeai-framework/python/beeai_framework/adapters/watsonx_orchestrate/serve/server.py)<br>[python/beeai_framework/adapters/openai/serve/server.py](../../../../sources/i-am-bee__beeai-framework/python/beeai_framework/adapters/openai/serve/server.py) |
| agentRuntime | 396 | [typescript/tests/e2e/tools/arxiv.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/e2e/tools/arxiv.test.ts)<br>[typescript/tests/e2e/tools/custom.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/e2e/tools/custom.test.ts)<br>[typescript/tests/e2e/tools/duckDuckGoSearch.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/e2e/tools/duckDuckGoSearch.test.ts)<br>[typescript/tests/e2e/tools/openapi.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/e2e/tools/openapi.test.ts)<br>[typescript/tests/e2e/tools/openMeteo.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/e2e/tools/openMeteo.test.ts)<br>[typescript/tests/e2e/tools/python.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/e2e/tools/python.test.ts)<br>[typescript/tests/e2e/tools/wikipedia.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/e2e/tools/wikipedia.test.ts)<br>[typescript/tests/e2e/tools/database/sql.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/e2e/tools/database/sql.test.ts) |
| mcp | 28 | [typescript/src/tools/mcp.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/tools/mcp.test.ts)<br>[typescript/src/tools/mcp.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/tools/mcp.ts)<br>[typescript/src/adapters/mcp/serve/http_server.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/adapters/mcp/serve/http_server.ts)<br>[typescript/src/adapters/mcp/serve/in_memory_store.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/adapters/mcp/serve/in_memory_store.ts)<br>[typescript/src/adapters/mcp/serve/server.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/adapters/mcp/serve/server.ts)<br>[typescript/examples/tools/mcp.ts](../../../../sources/i-am-bee__beeai-framework/typescript/examples/tools/mcp.ts)<br>[typescript/examples/serve/mcp_tool.ts](../../../../sources/i-am-bee__beeai-framework/typescript/examples/serve/mcp_tool.ts)<br>[python/tests/tools/test_mcp_tool.py](../../../../sources/i-am-bee__beeai-framework/python/tests/tools/test_mcp_tool.py) |
| retrieval | 84 | [typescript/src/index.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/index.ts)<br>[typescript/src/memory/base.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/memory/base.ts)<br>[typescript/src/memory/slidingMemory.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/memory/slidingMemory.test.ts)<br>[typescript/src/memory/slidingMemory.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/memory/slidingMemory.ts)<br>[typescript/src/memory/summarizeMemory.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/memory/summarizeMemory.ts)<br>[typescript/src/memory/tokenMemory.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/memory/tokenMemory.test.ts)<br>[typescript/src/memory/tokenMemory.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/memory/tokenMemory.ts)<br>[typescript/src/memory/unconstrainedMemory.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/memory/unconstrainedMemory.test.ts) |
| spec | 63 | [typescript/src/agents/requirement/agent.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/agents/requirement/agent.ts)<br>[typescript/src/agents/requirement/prompts.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/agents/requirement/prompts.ts)<br>[typescript/src/agents/requirement/runner.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/agents/requirement/runner.ts)<br>[typescript/src/agents/requirement/types.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/agents/requirement/types.ts)<br>[typescript/src/agents/requirement/utils/llm.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/agents/requirement/utils/llm.ts)<br>[typescript/src/agents/requirement/utils/tool.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/agents/requirement/utils/tool.ts)<br>[typescript/src/agents/requirement/utils/toolCallChecker.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/agents/requirement/utils/toolCallChecker.ts)<br>[typescript/src/agents/requirement/requirements/conditional.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/agents/requirement/requirements/conditional.ts) |
| eval | 127 | [typescript/tests/setup.examples.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/setup.examples.ts)<br>[typescript/tests/setup.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/setup.ts)<br>[typescript/tests/utils/file.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/utils/file.ts)<br>[typescript/tests/utils/llmFactory.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/utils/llmFactory.ts)<br>[typescript/tests/examples/examples.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/examples/examples.test.ts)<br>[typescript/tests/e2e/utils.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/e2e/utils.ts)<br>[typescript/tests/e2e/tools/arxiv.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/e2e/tools/arxiv.test.ts)<br>[typescript/tests/e2e/tools/custom.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/e2e/tools/custom.test.ts) |
| security | 7 | [SECURITY.md](../../../../sources/i-am-bee__beeai-framework/SECURITY.md)<br>[python/SECURITY.md](../../../../sources/i-am-bee__beeai-framework/python/SECURITY.md)<br>[python/tests/tools/test_sandbox.py](../../../../sources/i-am-bee__beeai-framework/python/tests/tools/test_sandbox.py)<br>[python/examples/tools/custom/sandbox.py](../../../../sources/i-am-bee__beeai-framework/python/examples/tools/custom/sandbox.py)<br>[python/beeai_framework/tools/code/sandbox.py](../../../../sources/i-am-bee__beeai-framework/python/beeai_framework/tools/code/sandbox.py)<br>[python/beeai_framework/agents/requirement/requirements/ask_permission.py](../../../../sources/i-am-bee__beeai-framework/python/beeai_framework/agents/requirement/requirements/ask_permission.py)<br>[python/beeai_framework/agents/experimental/requirements/ask_permission.py](../../../../sources/i-am-bee__beeai-framework/python/beeai_framework/agents/experimental/requirements/ask_permission.py) |
| ci | 8 | [.github/workflows/auto-label.yml](../../../../sources/i-am-bee__beeai-framework/.github/workflows/auto-label.yml)<br>[.github/workflows/docs-pages.yml](../../../../sources/i-am-bee__beeai-framework/.github/workflows/docs-pages.yml)<br>[.github/workflows/py_e2e_tests.yml](../../../../sources/i-am-bee__beeai-framework/.github/workflows/py_e2e_tests.yml)<br>[.github/workflows/py_main.yml](../../../../sources/i-am-bee__beeai-framework/.github/workflows/py_main.yml)<br>[.github/workflows/release.yml](../../../../sources/i-am-bee__beeai-framework/.github/workflows/release.yml)<br>[.github/workflows/ts_e2e_tests.yml](../../../../sources/i-am-bee__beeai-framework/.github/workflows/ts_e2e_tests.yml)<br>[.github/workflows/ts_examples_tests.yml](../../../../sources/i-am-bee__beeai-framework/.github/workflows/ts_examples_tests.yml)<br>[.github/workflows/ts_main.yml](../../../../sources/i-am-bee__beeai-framework/.github/workflows/ts_main.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 2 | [docs-old/modules/agents.mdx](../../../../sources/i-am-bee__beeai-framework/docs-old/modules/agents.mdx)<br>[docs/src/content/docs/modules/agents.mdx](../../../../sources/i-am-bee__beeai-framework/docs/src/content/docs/modules/agents.mdx) |
| docs | 72 | [README.md](../../../../sources/i-am-bee__beeai-framework/README.md)<br>[typescript/README.md](../../../../sources/i-am-bee__beeai-framework/typescript/README.md)<br>[typescript/examples/README.md](../../../../sources/i-am-bee__beeai-framework/typescript/examples/README.md)<br>[typescript/examples/workflows/competitive-analysis/README.md](../../../../sources/i-am-bee__beeai-framework/typescript/examples/workflows/competitive-analysis/README.md)<br>[typescript/examples/agents/granite/README.md](../../../../sources/i-am-bee__beeai-framework/typescript/examples/agents/granite/README.md)<br>[python/README.md](../../../../sources/i-am-bee__beeai-framework/python/README.md)<br>[python/examples/README.md](../../../../sources/i-am-bee__beeai-framework/python/examples/README.md)<br>[python/examples/notebooks/README.md](../../../../sources/i-am-bee__beeai-framework/python/examples/notebooks/README.md) |
| config | 13 | [typescript/package.json](../../../../sources/i-am-bee__beeai-framework/typescript/package.json)<br>[typescript/tsconfig.json](../../../../sources/i-am-bee__beeai-framework/typescript/tsconfig.json)<br>[typescript/examples/tsconfig.json](../../../../sources/i-am-bee__beeai-framework/typescript/examples/tsconfig.json)<br>[python/poetry.lock](../../../../sources/i-am-bee__beeai-framework/python/poetry.lock)<br>[python/pyproject.toml](../../../../sources/i-am-bee__beeai-framework/python/pyproject.toml)<br>[python/examples/requirements.txt](../../../../sources/i-am-bee__beeai-framework/python/examples/requirements.txt)<br>[python/examples/serve/requirements.txt](../../../../sources/i-am-bee__beeai-framework/python/examples/serve/requirements.txt)<br>[python/examples/notebooks/requirements.txt](../../../../sources/i-am-bee__beeai-framework/python/examples/notebooks/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 127 | [typescript/tests/setup.examples.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/setup.examples.ts)<br>[typescript/tests/setup.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/setup.ts)<br>[typescript/tests/utils/file.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/utils/file.ts)<br>[typescript/tests/utils/llmFactory.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/utils/llmFactory.ts)<br>[typescript/tests/examples/examples.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/examples/examples.test.ts)<br>[typescript/tests/e2e/utils.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/e2e/utils.ts) |
| CI workflow | 8 | [.github/workflows/auto-label.yml](../../../../sources/i-am-bee__beeai-framework/.github/workflows/auto-label.yml)<br>[.github/workflows/docs-pages.yml](../../../../sources/i-am-bee__beeai-framework/.github/workflows/docs-pages.yml)<br>[.github/workflows/py_e2e_tests.yml](../../../../sources/i-am-bee__beeai-framework/.github/workflows/py_e2e_tests.yml)<br>[.github/workflows/py_main.yml](../../../../sources/i-am-bee__beeai-framework/.github/workflows/py_main.yml)<br>[.github/workflows/release.yml](../../../../sources/i-am-bee__beeai-framework/.github/workflows/release.yml)<br>[.github/workflows/ts_e2e_tests.yml](../../../../sources/i-am-bee__beeai-framework/.github/workflows/ts_e2e_tests.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 7 | [SECURITY.md](../../../../sources/i-am-bee__beeai-framework/SECURITY.md)<br>[python/SECURITY.md](../../../../sources/i-am-bee__beeai-framework/python/SECURITY.md)<br>[python/tests/tools/test_sandbox.py](../../../../sources/i-am-bee__beeai-framework/python/tests/tools/test_sandbox.py)<br>[python/examples/tools/custom/sandbox.py](../../../../sources/i-am-bee__beeai-framework/python/examples/tools/custom/sandbox.py)<br>[python/beeai_framework/tools/code/sandbox.py](../../../../sources/i-am-bee__beeai-framework/python/beeai_framework/tools/code/sandbox.py)<br>[python/beeai_framework/agents/requirement/requirements/ask_permission.py](../../../../sources/i-am-bee__beeai-framework/python/beeai_framework/agents/requirement/requirements/ask_permission.py) |
| 에이전트 지시문 | 2 | [docs-old/modules/agents.mdx](../../../../sources/i-am-bee__beeai-framework/docs-old/modules/agents.mdx)<br>[docs/src/content/docs/modules/agents.mdx](../../../../sources/i-am-bee__beeai-framework/docs/src/content/docs/modules/agents.mdx) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `typescript/src/tools/mcp.test.ts`, `typescript/src/tools/mcp.ts`, `typescript/src/adapters/mcp/serve/http_server.ts`.
2. entrypoint를 따라 실행 흐름 확인: `typescript/src/index.ts`, `typescript/src/serve/server.ts`, `typescript/src/adapters/mcp/serve/server.ts`.
3. agent/tool runtime 매핑: `typescript/tests/e2e/tools/arxiv.test.ts`, `typescript/tests/e2e/tools/custom.test.ts`, `typescript/tests/e2e/tools/duckDuckGoSearch.test.ts`.
4. retrieval/memory/indexing 확인: `typescript/src/index.ts`, `typescript/src/memory/base.ts`, `typescript/src/memory/slidingMemory.test.ts`.
5. test/eval 파일로 동작 검증: `typescript/tests/setup.examples.ts`, `typescript/tests/setup.ts`, `typescript/tests/utils/file.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Build production ready AI agents in both Python and Typescript.. 핵심 구조 신호는 Python, README.md, LICENSE, ci, docs, spec-artifacts이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
