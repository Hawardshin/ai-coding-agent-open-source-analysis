# google/adk-docs 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

An open-source, code-first toolkit for building, evaluating, and deploying sophisticated AI agents with flexibility and control.

## 요약

- 조사 단위: `sources/google__adk-docs` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 3,427 files, 717 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=docs/tools-custom/mcp-tools.md, docs/mcp/index.md, docs/integrations/mcp-toolbox-for-databases.md이고, 의존성 단서는 click, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | google/adk-docs |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Shell |
| Stars | 1408 |
| Forks | 1096 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/google__adk-docs](../../../../sources/google__adk-docs) |
| 기존 보고서 | [reports/global-trending/repositories/google__adk-docs.md](../../../global-trending/repositories/google__adk-docs.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 3427 / 717 |
| 관측 최대 깊이 | 11 |
| 상위 디렉터리 | .github, docs, examples, overrides, scripts, site, tools |
| 상위 확장자 | .html: 2547, .md: 235, .png: 145, .py: 67, .svg: 66, .js: 50, .ts: 36, .go: 34, .java: 32, (none): 32, .css: 25, .json: 25 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 158 |
| examples/typescript | examples workspace | 43 |
| examples/python | examples workspace | 33 |
| examples/go | examples workspace | 23 |
| examples/java | examples workspace | 5 |
| examples/kotlin | examples workspace | 2 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| overrides | top-level component | 1 |
| scripts | top-level component | 1 |
| site | documentation surface | 1 |
| tools | top-level component | 1 |


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
| developerSurface | click |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [docs/tools-custom/mcp-tools.md](../../../../sources/google__adk-docs/docs/tools-custom/mcp-tools.md) | mcp signal |
| mcp | [docs/mcp/index.md](../../../../sources/google__adk-docs/docs/mcp/index.md) | mcp signal |
| mcp | [docs/integrations/mcp-toolbox-for-databases.md](../../../../sources/google__adk-docs/docs/integrations/mcp-toolbox-for-databases.md) | mcp signal |
| mcp | [docs/integrations/assets/mcp-db-toolbox.png](../../../../sources/google__adk-docs/docs/integrations/assets/mcp-db-toolbox.png) | mcp signal |
| agentRuntime | [tools/python-rest-api-docs/generate.sh](../../../../sources/google__adk-docs/tools/python-rest-api-docs/generate.sh) | agentRuntime signal |
| agentRuntime | [tools/python-cli-docs/generate.sh](../../../../sources/google__adk-docs/tools/python-cli-docs/generate.sh) | agentRuntime signal |
| agentRuntime | [tools/python-api-docs/discover_modules.py](../../../../sources/google__adk-docs/tools/python-api-docs/discover_modules.py) | agentRuntime signal |
| agentRuntime | [tools/python-api-docs/generate.sh](../../../../sources/google__adk-docs/tools/python-api-docs/generate.sh) | agentRuntime signal |
| entrypoints | [tools/feature-matrix/main.go](../../../../sources/google__adk-docs/tools/feature-matrix/main.go) | entrypoints signal |
| entrypoints | [examples/python/snippets/streaming/adk-streaming-ws/app/main.py](../../../../sources/google__adk-docs/examples/python/snippets/streaming/adk-streaming-ws/app/main.py) | entrypoints signal |
| entrypoints | [examples/python/snippets/streaming/adk-streaming/app/main.py](../../../../sources/google__adk-docs/examples/python/snippets/streaming/adk-streaming/app/main.py) | entrypoints signal |
| entrypoints | [examples/python/snippets/runtime/triggers/main.py](../../../../sources/google__adk-docs/examples/python/snippets/runtime/triggers/main.py) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 25 | [tools/feature-matrix/main.go](../../../../sources/google__adk-docs/tools/feature-matrix/main.go)<br>[examples/python/snippets/streaming/adk-streaming-ws/app/main.py](../../../../sources/google__adk-docs/examples/python/snippets/streaming/adk-streaming-ws/app/main.py)<br>[examples/python/snippets/streaming/adk-streaming/app/main.py](../../../../sources/google__adk-docs/examples/python/snippets/streaming/adk-streaming/app/main.py)<br>[examples/python/snippets/runtime/triggers/main.py](../../../../sources/google__adk-docs/examples/python/snippets/runtime/triggers/main.py)<br>[examples/go/snippets/tools-custom/weather_sentiment/main.go](../../../../sources/google__adk-docs/examples/go/snippets/tools-custom/weather_sentiment/main.go)<br>[examples/go/snippets/tools-custom/user_preference/main.go](../../../../sources/google__adk-docs/examples/go/snippets/tools-custom/user_preference/main.go)<br>[examples/go/snippets/tools-custom/order_status/main.go](../../../../sources/google__adk-docs/examples/go/snippets/tools-custom/order_status/main.go)<br>[examples/go/snippets/tools-custom/doc_analysis/main.go](../../../../sources/google__adk-docs/examples/go/snippets/tools-custom/doc_analysis/main.go) |
| agentRuntime | 675 | [tools/python-rest-api-docs/generate.sh](../../../../sources/google__adk-docs/tools/python-rest-api-docs/generate.sh)<br>[tools/python-cli-docs/generate.sh](../../../../sources/google__adk-docs/tools/python-cli-docs/generate.sh)<br>[tools/python-api-docs/discover_modules.py](../../../../sources/google__adk-docs/tools/python-api-docs/discover_modules.py)<br>[tools/python-api-docs/generate.sh](../../../../sources/google__adk-docs/tools/python-api-docs/generate.sh)<br>[tools/python-api-docs/source/conf.py](../../../../sources/google__adk-docs/tools/python-api-docs/source/conf.py)<br>[tools/python-api-docs/source/index.rst](../../../../sources/google__adk-docs/tools/python-api-docs/source/index.rst)<br>[tools/kotlin-snippets/check_kotlin_snippets.sh](../../../../sources/google__adk-docs/tools/kotlin-snippets/check_kotlin_snippets.sh)<br>[tools/kotlin-snippets/files_to_test.txt](../../../../sources/google__adk-docs/tools/kotlin-snippets/files_to_test.txt) |
| mcp | 108 | [docs/tools-custom/mcp-tools.md](../../../../sources/google__adk-docs/docs/tools-custom/mcp-tools.md)<br>[docs/mcp/index.md](../../../../sources/google__adk-docs/docs/mcp/index.md)<br>[docs/integrations/mcp-toolbox-for-databases.md](../../../../sources/google__adk-docs/docs/integrations/mcp-toolbox-for-databases.md)<br>[docs/integrations/assets/mcp-db-toolbox.png](../../../../sources/google__adk-docs/docs/integrations/assets/mcp-db-toolbox.png)<br>[docs/integrations/assets/mcp-toolbox-for-databases.png](../../../../sources/google__adk-docs/docs/integrations/assets/mcp-toolbox-for-databases.png)<br>[docs/assets/adk-tool-maps-lite-mcp-adk-web-demo.png](../../../../sources/google__adk-docs/docs/assets/adk-tool-maps-lite-mcp-adk-web-demo.png)<br>[docs/assets/adk-tool-mcp-fastmcp-adk-web-demo.png](../../../../sources/google__adk-docs/docs/assets/adk-tool-mcp-fastmcp-adk-web-demo.png)<br>[docs/assets/adk-tool-mcp-filesystem-adk-web-demo.png](../../../../sources/google__adk-docs/docs/assets/adk-tool-mcp-filesystem-adk-web-demo.png) |
| retrieval | 528 | [tools/python-api-docs/source/index.rst](../../../../sources/google__adk-docs/tools/python-api-docs/source/index.rst)<br>[examples/typescript/snippets/sessions/memory_example.ts](../../../../sources/google__adk-docs/examples/typescript/snippets/sessions/memory_example.ts)<br>[examples/python/snippets/tools/built-in-tools/rag_engine.py](../../../../sources/google__adk-docs/examples/python/snippets/tools/built-in-tools/rag_engine.py)<br>[examples/python/snippets/streaming/adk-streaming-ws/app/static/index.html](../../../../sources/google__adk-docs/examples/python/snippets/streaming/adk-streaming-ws/app/static/index.html)<br>[examples/python/snippets/streaming/adk-streaming/app/static/index.html](../../../../sources/google__adk-docs/examples/python/snippets/streaming/adk-streaming/app/static/index.html)<br>[examples/go/snippets/sessions/memory_example/memory_example.go](../../../../sources/google__adk-docs/examples/go/snippets/sessions/memory_example/memory_example.go)<br>[docs/index.md](../../../../sources/google__adk-docs/docs/index.md)<br>[docs/workflows/index.md](../../../../sources/google__adk-docs/docs/workflows/index.md) |
| spec | 16 | [requirements.txt](../../../../sources/google__adk-docs/requirements.txt)<br>[examples/python/snippets/tools/overview/requirements.txt](../../../../sources/google__adk-docs/examples/python/snippets/tools/overview/requirements.txt)<br>[examples/python/snippets/tools/function-tools/requirements.txt](../../../../sources/google__adk-docs/examples/python/snippets/tools/function-tools/requirements.txt)<br>[examples/python/snippets/tools/auth/spec.yaml](../../../../sources/google__adk-docs/examples/python/snippets/tools/auth/spec.yaml)<br>[examples/python/snippets/streaming/adk-streaming-ws/app/requirements.txt](../../../../sources/google__adk-docs/examples/python/snippets/streaming/adk-streaming-ws/app/requirements.txt)<br>[examples/python/snippets/streaming/adk-streaming/app/requirements.txt](../../../../sources/google__adk-docs/examples/python/snippets/streaming/adk-streaming/app/requirements.txt)<br>[examples/python/snippets/get-started/google_search_agent/requirements.txt](../../../../sources/google__adk-docs/examples/python/snippets/get-started/google_search_agent/requirements.txt)<br>[examples/python/snippets/agents/workflow-agents/requirements.txt](../../../../sources/google__adk-docs/examples/python/snippets/agents/workflow-agents/requirements.txt) |
| eval | 49 | [tools/kotlin-snippets/files_to_test.txt](../../../../sources/google__adk-docs/tools/kotlin-snippets/files_to_test.txt)<br>[tools/go-snippets/files_to_test.txt](../../../../sources/google__adk-docs/tools/go-snippets/files_to_test.txt)<br>[tools/go-snippets/runner_test.sh](../../../../sources/google__adk-docs/tools/go-snippets/runner_test.sh)<br>[examples/python/snippets/tools/auth/spec.yaml](../../../../sources/google__adk-docs/examples/python/snippets/tools/auth/spec.yaml)<br>[examples/python/snippets/streaming/adk-streaming-ws/tests/test_log_20251029_150157.md](../../../../sources/google__adk-docs/examples/python/snippets/streaming/adk-streaming-ws/tests/test_log_20251029_150157.md)<br>[examples/python/snippets/streaming/adk-streaming-ws/tests/test_log_20251029_151045.md](../../../../sources/google__adk-docs/examples/python/snippets/streaming/adk-streaming-ws/tests/test_log_20251029_151045.md)<br>[examples/python/snippets/streaming/adk-streaming-ws/tests/test_prompt.md](../../../../sources/google__adk-docs/examples/python/snippets/streaming/adk-streaming-ws/tests/test_prompt.md)<br>[examples/kotlin/snippets/observability/LoggingExamples.kt](../../../../sources/google__adk-docs/examples/kotlin/snippets/observability/LoggingExamples.kt) |
| security | 9 | [examples/python/snippets/tools/auth/agent_cli.py](../../../../sources/google__adk-docs/examples/python/snippets/tools/auth/agent_cli.py)<br>[examples/python/snippets/tools/auth/helpers.py](../../../../sources/google__adk-docs/examples/python/snippets/tools/auth/helpers.py)<br>[examples/python/snippets/tools/auth/spec.yaml](../../../../sources/google__adk-docs/examples/python/snippets/tools/auth/spec.yaml)<br>[examples/python/snippets/tools/auth/tools_and_agent.py](../../../../sources/google__adk-docs/examples/python/snippets/tools/auth/tools_and_agent.py)<br>[docs/integrations/secret-manager.md](../../../../sources/google__adk-docs/docs/integrations/secret-manager.md)<br>[docs/integrations/assets/secret_manager.png](../../../../sources/google__adk-docs/docs/integrations/assets/secret_manager.png)<br>[docs/assets/auth_part1.svg](../../../../sources/google__adk-docs/docs/assets/auth_part1.svg)<br>[docs/assets/auth_part2.svg](../../../../sources/google__adk-docs/docs/assets/auth_part2.svg) |
| ci | 10 | [.github/workflows/build-docs.yaml](../../../../sources/google__adk-docs/.github/workflows/build-docs.yaml)<br>[.github/workflows/feature-matrix-updater.yaml](../../../../sources/google__adk-docs/.github/workflows/feature-matrix-updater.yaml)<br>[.github/workflows/go-fmt.yaml](../../../../sources/google__adk-docs/.github/workflows/go-fmt.yaml)<br>[.github/workflows/go-snippets-pr-check.yaml](../../../../sources/google__adk-docs/.github/workflows/go-snippets-pr-check.yaml)<br>[.github/workflows/kotlin-snippets-pr-check.yaml](../../../../sources/google__adk-docs/.github/workflows/kotlin-snippets-pr-check.yaml)<br>[.github/workflows/link-checker.yaml](../../../../sources/google__adk-docs/.github/workflows/link-checker.yaml)<br>[.github/workflows/publish-docs.yaml](../../../../sources/google__adk-docs/.github/workflows/publish-docs.yaml)<br>[.github/workflows/python-lint.yaml](../../../../sources/google__adk-docs/.github/workflows/python-lint.yaml) |
| container | 12 | [examples/java/demos/patent-search-agent/Dockerfile](../../../../sources/google__adk-docs/examples/java/demos/patent-search-agent/Dockerfile)<br>[examples/java/cloud-run/Dockerfile](../../../../sources/google__adk-docs/examples/java/cloud-run/Dockerfile)<br>[docs/deploy/cloud-run.md](../../../../sources/google__adk-docs/docs/deploy/cloud-run.md)<br>[docs/deploy/gke.md](../../../../sources/google__adk-docs/docs/deploy/gke.md)<br>[docs/deploy/index.md](../../../../sources/google__adk-docs/docs/deploy/index.md)<br>[docs/deploy/agent-runtime/agents-cli.md](../../../../sources/google__adk-docs/docs/deploy/agent-runtime/agents-cli.md)<br>[docs/deploy/agent-runtime/deploy.md](../../../../sources/google__adk-docs/docs/deploy/agent-runtime/deploy.md)<br>[docs/deploy/agent-runtime/index.md](../../../../sources/google__adk-docs/docs/deploy/agent-runtime/index.md) |
| instruction | 0 | 명확하지 않음 |
| docs | 3108 | [mkdocs.yml](../../../../sources/google__adk-docs/mkdocs.yml)<br>[README.md](../../../../sources/google__adk-docs/README.md)<br>[tools/kotlin-snippets/README.md](../../../../sources/google__adk-docs/tools/kotlin-snippets/README.md)<br>[tools/go-snippets/README.md](../../../../sources/google__adk-docs/tools/go-snippets/README.md)<br>[site/.gitkeep](../../../../sources/google__adk-docs/site/.gitkeep)<br>[examples/python/tutorial/agent_team/adk-tutorial/readme.md](../../../../sources/google__adk-docs/examples/python/tutorial/agent_team/adk-tutorial/readme.md)<br>[examples/java/demos/README.md](../../../../sources/google__adk-docs/examples/java/demos/README.md)<br>[examples/java/demos/patent-search-agent/README.md](../../../../sources/google__adk-docs/examples/java/demos/patent-search-agent/README.md) |
| config | 35 | [requirements.txt](../../../../sources/google__adk-docs/requirements.txt)<br>[tools/feature-matrix/go.mod](../../../../sources/google__adk-docs/tools/feature-matrix/go.mod)<br>[examples/typescript/snippets/tools/overview/package.json](../../../../sources/google__adk-docs/examples/typescript/snippets/tools/overview/package.json)<br>[examples/typescript/snippets/tools/overview/tsconfig.json](../../../../sources/google__adk-docs/examples/typescript/snippets/tools/overview/tsconfig.json)<br>[examples/typescript/snippets/tools/function-tools/package.json](../../../../sources/google__adk-docs/examples/typescript/snippets/tools/function-tools/package.json)<br>[examples/typescript/snippets/tools/function-tools/tsconfig.json](../../../../sources/google__adk-docs/examples/typescript/snippets/tools/function-tools/tsconfig.json)<br>[examples/typescript/snippets/tools/confirmation/package.json](../../../../sources/google__adk-docs/examples/typescript/snippets/tools/confirmation/package.json)<br>[examples/typescript/snippets/skills/package.json](../../../../sources/google__adk-docs/examples/typescript/snippets/skills/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 49 | [tools/kotlin-snippets/files_to_test.txt](../../../../sources/google__adk-docs/tools/kotlin-snippets/files_to_test.txt)<br>[tools/go-snippets/files_to_test.txt](../../../../sources/google__adk-docs/tools/go-snippets/files_to_test.txt)<br>[tools/go-snippets/runner_test.sh](../../../../sources/google__adk-docs/tools/go-snippets/runner_test.sh)<br>[examples/python/snippets/tools/auth/spec.yaml](../../../../sources/google__adk-docs/examples/python/snippets/tools/auth/spec.yaml)<br>[examples/python/snippets/streaming/adk-streaming-ws/tests/test_log_20251029_150157.md](../../../../sources/google__adk-docs/examples/python/snippets/streaming/adk-streaming-ws/tests/test_log_20251029_150157.md)<br>[examples/python/snippets/streaming/adk-streaming-ws/tests/test_log_20251029_151045.md](../../../../sources/google__adk-docs/examples/python/snippets/streaming/adk-streaming-ws/tests/test_log_20251029_151045.md) |
| CI workflow | 10 | [.github/workflows/build-docs.yaml](../../../../sources/google__adk-docs/.github/workflows/build-docs.yaml)<br>[.github/workflows/feature-matrix-updater.yaml](../../../../sources/google__adk-docs/.github/workflows/feature-matrix-updater.yaml)<br>[.github/workflows/go-fmt.yaml](../../../../sources/google__adk-docs/.github/workflows/go-fmt.yaml)<br>[.github/workflows/go-snippets-pr-check.yaml](../../../../sources/google__adk-docs/.github/workflows/go-snippets-pr-check.yaml)<br>[.github/workflows/kotlin-snippets-pr-check.yaml](../../../../sources/google__adk-docs/.github/workflows/kotlin-snippets-pr-check.yaml)<br>[.github/workflows/link-checker.yaml](../../../../sources/google__adk-docs/.github/workflows/link-checker.yaml) |
| 컨테이너/배포 | 12 | [examples/java/demos/patent-search-agent/Dockerfile](../../../../sources/google__adk-docs/examples/java/demos/patent-search-agent/Dockerfile)<br>[examples/java/cloud-run/Dockerfile](../../../../sources/google__adk-docs/examples/java/cloud-run/Dockerfile)<br>[docs/deploy/cloud-run.md](../../../../sources/google__adk-docs/docs/deploy/cloud-run.md)<br>[docs/deploy/gke.md](../../../../sources/google__adk-docs/docs/deploy/gke.md)<br>[docs/deploy/index.md](../../../../sources/google__adk-docs/docs/deploy/index.md)<br>[docs/deploy/agent-runtime/agents-cli.md](../../../../sources/google__adk-docs/docs/deploy/agent-runtime/agents-cli.md) |
| 보안/정책 | 9 | [examples/python/snippets/tools/auth/agent_cli.py](../../../../sources/google__adk-docs/examples/python/snippets/tools/auth/agent_cli.py)<br>[examples/python/snippets/tools/auth/helpers.py](../../../../sources/google__adk-docs/examples/python/snippets/tools/auth/helpers.py)<br>[examples/python/snippets/tools/auth/spec.yaml](../../../../sources/google__adk-docs/examples/python/snippets/tools/auth/spec.yaml)<br>[examples/python/snippets/tools/auth/tools_and_agent.py](../../../../sources/google__adk-docs/examples/python/snippets/tools/auth/tools_and_agent.py)<br>[docs/integrations/secret-manager.md](../../../../sources/google__adk-docs/docs/integrations/secret-manager.md)<br>[docs/integrations/assets/secret_manager.png](../../../../sources/google__adk-docs/docs/integrations/assets/secret_manager.png) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `docs/tools-custom/mcp-tools.md`, `docs/mcp/index.md`, `docs/integrations/mcp-toolbox-for-databases.md`.
2. entrypoint를 따라 실행 흐름 확인: `tools/feature-matrix/main.go`, `examples/python/snippets/streaming/adk-streaming-ws/app/main.py`, `examples/python/snippets/streaming/adk-streaming/app/main.py`.
3. agent/tool runtime 매핑: `tools/python-rest-api-docs/generate.sh`, `tools/python-cli-docs/generate.sh`, `tools/python-api-docs/discover_modules.py`.
4. retrieval/memory/indexing 확인: `tools/python-api-docs/source/index.rst`, `examples/typescript/snippets/sessions/memory_example.ts`, `examples/python/snippets/tools/built-in-tools/rag_engine.py`.
5. test/eval 파일로 동작 검증: `tools/kotlin-snippets/files_to_test.txt`, `tools/go-snippets/files_to_test.txt`, `tools/go-snippets/runner_test.sh`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 An open source, code first toolkit for building, evaluating, and deploying sophisticated AI agents with flexibility and . 핵심 구조 신호는 Shell, requirements.txt, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
