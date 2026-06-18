# henomis/phero 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

A modern Go framework for building multi-agent AI systems.

## 요약

- 조사 단위: `sources/henomis__phero` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 283 files, 91 directories, depth score 103, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=web/mcp.html, tests/e2e/mcp_test.go, tests/e2e/testdata/mcp-echo-server/main.go이고, 의존성 단서는 openai, anthropic, modelcontextprotocol, qdrant, weaviate, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | henomis/phero |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Go |
| Stars | 60 |
| Forks | 6 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/henomis__phero](../../../../sources/henomis__phero) |
| 기존 보고서 | [reports/global-trending/repositories/henomis__phero.md](../../../global-trending/repositories/henomis__phero.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 283 / 91 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .github, a2a, agent, document, embedding, examples, internal, llm, mcp, memory, nats, rag, skill, tests, textsplitter, tool, trace, vectorstore, web |
| 상위 확장자 | .go: 233, .md: 25, .html: 14, (none): 4, .yml: 3, .css: 1, .mod: 1, .png: 1, .sum: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 17 |
| web | source boundary | 11 |
| examples/a2a | examples workspace | 8 |
| examples/mcp | examples workspace | 8 |
| examples/nats-agent | examples workspace | 8 |
| examples/long-term-memory | examples workspace | 4 |
| examples/nats-memory | examples workspace | 4 |
| examples/playwright-mcp | examples workspace | 4 |
| examples/rag-chatbot | examples workspace | 4 |
| examples/skills | examples workspace | 3 |
| examples/conversational-agent | examples workspace | 2 |
| examples/debate-committee | examples workspace | 2 |
| examples/evaluator-optimizer | examples workspace | 2 |
| examples/handoff | examples workspace | 2 |
| examples/human-in-the-loop | examples workspace | 2 |
| examples/multi-agent-workflow | examples workspace | 2 |
| examples/orchestrator-workers | examples workspace | 2 |
| examples/parallel-research | examples workspace | 2 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | all | make all |
| utility | Makefile | help | make help |
| test | Makefile | test | make test |
| test | Makefile | coverage | make coverage |
| build | Makefile | e2e-compile | make e2e-compile |
| utility | Makefile | e2e-up | make e2e-up |
| utility | Makefile | e2e-down | make e2e-down |
| utility | Makefile | e2e | make e2e |
| quality | Makefile | lint | make lint |
| quality | Makefile | fmt | make fmt |
| utility | Makefile | fix | make fix |
| utility | Makefile | vet | make vet |
| utility | Makefile | tidy | make tidy |
| utility | Makefile | clean | make clean |
| utility | Makefile | license | make license |
| utility | Makefile | doc | make doc |
| quality | Makefile | check | make check |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | qdrant, weaviate |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [web/mcp.html](../../../../sources/henomis__phero/web/mcp.html) | mcp signal |
| mcp | [tests/e2e/mcp_test.go](../../../../sources/henomis__phero/tests/e2e/mcp_test.go) | mcp signal |
| mcp | [tests/e2e/testdata/mcp-echo-server/main.go](../../../../sources/henomis__phero/tests/e2e/testdata/mcp-echo-server/main.go) | mcp signal |
| mcp | [mcp/doc.go](../../../../sources/henomis__phero/mcp/doc.go) | mcp signal |
| agentRuntime | [web/agent.html](../../../../sources/henomis__phero/web/agent.html) | agentRuntime signal |
| agentRuntime | [web/memory.html](../../../../sources/henomis__phero/web/memory.html) | agentRuntime signal |
| agentRuntime | [web/skill.html](../../../../sources/henomis__phero/web/skill.html) | agentRuntime signal |
| agentRuntime | [web/tool.html](../../../../sources/henomis__phero/web/tool.html) | agentRuntime signal |
| entrypoints | [nats/server.go](../../../../sources/henomis__phero/nats/server.go) | entrypoints signal |
| entrypoints | [examples/tracing/main.go](../../../../sources/henomis__phero/examples/tracing/main.go) | entrypoints signal |
| entrypoints | [examples/supervisor-blackboard/main.go](../../../../sources/henomis__phero/examples/supervisor-blackboard/main.go) | entrypoints signal |
| config | [go.mod](../../../../sources/henomis__phero/go.mod) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 40 | [tests/e2e/testdata/mcp-echo-server/main.go](../../../../sources/henomis__phero/tests/e2e/testdata/mcp-echo-server/main.go)<br>[nats/server.go](../../../../sources/henomis__phero/nats/server.go)<br>[examples/tracing/main.go](../../../../sources/henomis__phero/examples/tracing/main.go)<br>[examples/supervisor-blackboard/main.go](../../../../sources/henomis__phero/examples/supervisor-blackboard/main.go)<br>[examples/streaming/main.go](../../../../sources/henomis__phero/examples/streaming/main.go)<br>[examples/social-simulation/main.go](../../../../sources/henomis__phero/examples/social-simulation/main.go)<br>[examples/skills/main.go](../../../../sources/henomis__phero/examples/skills/main.go)<br>[examples/skills/skills/get-random-quote/scripts/get_random_quote/main.go](../../../../sources/henomis__phero/examples/skills/skills/get-random-quote/scripts/get_random_quote/main.go) |
| agentRuntime | 77 | [web/agent.html](../../../../sources/henomis__phero/web/agent.html)<br>[web/memory.html](../../../../sources/henomis__phero/web/memory.html)<br>[web/skill.html](../../../../sources/henomis__phero/web/skill.html)<br>[web/tool.html](../../../../sources/henomis__phero/web/tool.html)<br>[trace/context.go](../../../../sources/henomis__phero/trace/context.go)<br>[tool/skill/doc.go](../../../../sources/henomis__phero/tool/skill/doc.go)<br>[tool/skill/errors.go](../../../../sources/henomis__phero/tool/skill/errors.go)<br>[tool/skill/tool_test.go](../../../../sources/henomis__phero/tool/skill/tool_test.go) |
| mcp | 12 | [web/mcp.html](../../../../sources/henomis__phero/web/mcp.html)<br>[tests/e2e/mcp_test.go](../../../../sources/henomis__phero/tests/e2e/mcp_test.go)<br>[tests/e2e/testdata/mcp-echo-server/main.go](../../../../sources/henomis__phero/tests/e2e/testdata/mcp-echo-server/main.go)<br>[mcp/doc.go](../../../../sources/henomis__phero/mcp/doc.go)<br>[mcp/mcp_test.go](../../../../sources/henomis__phero/mcp/mcp_test.go)<br>[mcp/mcp.go](../../../../sources/henomis__phero/mcp/mcp.go)<br>[examples/playwright-mcp/main.go](../../../../sources/henomis__phero/examples/playwright-mcp/main.go)<br>[examples/playwright-mcp/README.md](../../../../sources/henomis__phero/examples/playwright-mcp/README.md) |
| retrieval | 43 | [web/embedding.html](../../../../sources/henomis__phero/web/embedding.html)<br>[web/index.html](../../../../sources/henomis__phero/web/index.html)<br>[web/memory.html](../../../../sources/henomis__phero/web/memory.html)<br>[web/rag.html](../../../../sources/henomis__phero/web/rag.html)<br>[tests/e2e/embedding_test.go](../../../../sources/henomis__phero/tests/e2e/embedding_test.go)<br>[tests/e2e/memory_test.go](../../../../sources/henomis__phero/tests/e2e/memory_test.go)<br>[tests/e2e/rag_test.go](../../../../sources/henomis__phero/tests/e2e/rag_test.go)<br>[rag/doc.go](../../../../sources/henomis__phero/rag/doc.go) |
| spec | 0 | 명확하지 않음 |
| eval | 77 | [web/trace.html](../../../../sources/henomis__phero/web/trace.html)<br>[vectorstore/filter_test.go](../../../../sources/henomis__phero/vectorstore/filter_test.go)<br>[vectorstore/weaviate/weaviate_test.go](../../../../sources/henomis__phero/vectorstore/weaviate/weaviate_test.go)<br>[vectorstore/qdrant/filter_test.go](../../../../sources/henomis__phero/vectorstore/qdrant/filter_test.go)<br>[vectorstore/qdrant/qdrant_test.go](../../../../sources/henomis__phero/vectorstore/qdrant/qdrant_test.go)<br>[vectorstore/psql/filter_test.go](../../../../sources/henomis__phero/vectorstore/psql/filter_test.go)<br>[trace/context.go](../../../../sources/henomis__phero/trace/context.go)<br>[trace/doc.go](../../../../sources/henomis__phero/trace/doc.go) |
| security | 0 | 명확하지 않음 |
| ci | 2 | [.github/workflows/checks.yml](../../../../sources/henomis__phero/.github/workflows/checks.yml)<br>[.github/workflows/web.yml](../../../../sources/henomis__phero/.github/workflows/web.yml) |
| container | 1 | [tests/e2e/docker-compose.yml](../../../../sources/henomis__phero/tests/e2e/docker-compose.yml) |
| instruction | 0 | 명확하지 않음 |
| docs | 24 | [README.md](../../../../sources/henomis__phero/README.md)<br>[examples/README.md](../../../../sources/henomis__phero/examples/README.md)<br>[examples/supervisor-blackboard/README.md](../../../../sources/henomis__phero/examples/supervisor-blackboard/README.md)<br>[examples/social-simulation/README.md](../../../../sources/henomis__phero/examples/social-simulation/README.md)<br>[examples/skills/README.md](../../../../sources/henomis__phero/examples/skills/README.md)<br>[examples/simple-agent/README.md](../../../../sources/henomis__phero/examples/simple-agent/README.md)<br>[examples/rag-chatbot/README.md](../../../../sources/henomis__phero/examples/rag-chatbot/README.md)<br>[examples/prompt-chaining/README.md](../../../../sources/henomis__phero/examples/prompt-chaining/README.md) |
| config | 3 | [go.mod](../../../../sources/henomis__phero/go.mod)<br>[Makefile](../../../../sources/henomis__phero/Makefile)<br>[examples/mcp/server/Makefile](../../../../sources/henomis__phero/examples/mcp/server/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 77 | [web/trace.html](../../../../sources/henomis__phero/web/trace.html)<br>[vectorstore/filter_test.go](../../../../sources/henomis__phero/vectorstore/filter_test.go)<br>[vectorstore/weaviate/weaviate_test.go](../../../../sources/henomis__phero/vectorstore/weaviate/weaviate_test.go)<br>[vectorstore/qdrant/filter_test.go](../../../../sources/henomis__phero/vectorstore/qdrant/filter_test.go)<br>[vectorstore/qdrant/qdrant_test.go](../../../../sources/henomis__phero/vectorstore/qdrant/qdrant_test.go)<br>[vectorstore/psql/filter_test.go](../../../../sources/henomis__phero/vectorstore/psql/filter_test.go) |
| CI workflow | 2 | [.github/workflows/checks.yml](../../../../sources/henomis__phero/.github/workflows/checks.yml)<br>[.github/workflows/web.yml](../../../../sources/henomis__phero/.github/workflows/web.yml) |
| 컨테이너/배포 | 1 | [tests/e2e/docker-compose.yml](../../../../sources/henomis__phero/tests/e2e/docker-compose.yml) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `web/mcp.html`, `tests/e2e/mcp_test.go`, `tests/e2e/testdata/mcp-echo-server/main.go`.
2. entrypoint를 따라 실행 흐름 확인: `tests/e2e/testdata/mcp-echo-server/main.go`, `nats/server.go`, `examples/tracing/main.go`.
3. agent/tool runtime 매핑: `web/agent.html`, `web/memory.html`, `web/skill.html`.
4. retrieval/memory/indexing 확인: `web/embedding.html`, `web/index.html`, `web/memory.html`.
5. test/eval 파일로 동작 검증: `web/trace.html`, `vectorstore/filter_test.go`, `vectorstore/weaviate/weaviate_test.go`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 A modern Go framework for building multi agent AI systems.. 핵심 구조 신호는 Go, go.mod, Makefile, README.md, LICENSE, openai이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
