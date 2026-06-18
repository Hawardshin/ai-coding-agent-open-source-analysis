# The-Pocket/PocketFlow 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Pocket Flow: 100-line LLM framework. Let Agents build Agents!

## 요약

- 조사 단위: `sources/The-Pocket__PocketFlow` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 529 files, 138 directories, depth score 112, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=docs/index.md, docs/utility_function/embedding.md, docs/utility_function/index.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | The-Pocket/PocketFlow |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 10769 |
| Forks | 1172 |
| License | MIT |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/The-Pocket__PocketFlow](../../../../sources/The-Pocket__PocketFlow) |
| 기존 보고서 | [reports/llm-wiki/repositories/The-Pocket__PocketFlow.md](../../../llm-wiki/repositories/The-Pocket__PocketFlow.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 529 / 138 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .cursor, cookbook, docs, pocketflow, tests, utils |
| 상위 확장자 | .py: 269, .md: 110, .txt: 67, .jpg: 24, .mdc: 20, .png: 10, .html: 6, (none): 5, .csv: 4, .db: 2, .ipynb: 2, .pdf: 2 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 43 |
| tests | validation surface | 11 |
| cookbook | top-level component | 1 |
| pocketflow | top-level component | 1 |
| utils | top-level component | 1 |


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
| retrieval | [docs/index.md](../../../../sources/The-Pocket__PocketFlow/docs/index.md) | retrieval signal |
| retrieval | [docs/utility_function/embedding.md](../../../../sources/The-Pocket__PocketFlow/docs/utility_function/embedding.md) | retrieval signal |
| retrieval | [docs/utility_function/index.md](../../../../sources/The-Pocket__PocketFlow/docs/utility_function/index.md) | retrieval signal |
| retrieval | [docs/utility_function/vector.md](../../../../sources/The-Pocket__PocketFlow/docs/utility_function/vector.md) | retrieval signal |
| entrypoints | [cookbook/pocketflow-workflow/main.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-workflow/main.py) | entrypoints signal |
| entrypoints | [cookbook/pocketflow-voice-chat/main.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-voice-chat/main.py) | entrypoints signal |
| entrypoints | [cookbook/pocketflow-tool-search/main.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-search/main.py) | entrypoints signal |
| entrypoints | [cookbook/pocketflow-tool-pdf-vision/main.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-pdf-vision/main.py) | entrypoints signal |
| docs | [README.md](../../../../sources/The-Pocket__PocketFlow/README.md) | docs signal |
| docs | [docs/_config.yml](../../../../sources/The-Pocket__PocketFlow/docs/_config.yml) | docs signal |
| docs | [docs/guide.md](../../../../sources/The-Pocket__PocketFlow/docs/guide.md) | docs signal |
| eval | [tests/test_async_batch_flow.py](../../../../sources/The-Pocket__PocketFlow/tests/test_async_batch_flow.py) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 54 | [cookbook/pocketflow-workflow/main.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-workflow/main.py)<br>[cookbook/pocketflow-voice-chat/main.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-voice-chat/main.py)<br>[cookbook/pocketflow-tool-search/main.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-search/main.py)<br>[cookbook/pocketflow-tool-pdf-vision/main.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-pdf-vision/main.py)<br>[cookbook/pocketflow-tool-embeddings/main.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-embeddings/main.py)<br>[cookbook/pocketflow-tool-database/main.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-database/main.py)<br>[cookbook/pocketflow-tool-crawler/main.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-crawler/main.py)<br>[cookbook/pocketflow-thinking/main.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-thinking/main.py) |
| agentRuntime | 14 | [docs/design_pattern/agent.md](../../../../sources/The-Pocket__PocketFlow/docs/design_pattern/agent.md)<br>[docs/design_pattern/workflow.md](../../../../sources/The-Pocket__PocketFlow/docs/design_pattern/workflow.md)<br>[cookbook/pocketflow-tool-search/tools/parser.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-search/tools/parser.py)<br>[cookbook/pocketflow-tool-search/tools/search.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-search/tools/search.py)<br>[cookbook/pocketflow-tool-pdf-vision/tools/pdf.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-pdf-vision/tools/pdf.py)<br>[cookbook/pocketflow-tool-pdf-vision/tools/vision.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-pdf-vision/tools/vision.py)<br>[cookbook/pocketflow-tool-embeddings/tools/embeddings.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-embeddings/tools/embeddings.py)<br>[cookbook/pocketflow-tool-database/tools/database.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-database/tools/database.py) |
| mcp | 5 | [cookbook/pocketflow-mcp/main.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-mcp/main.py)<br>[cookbook/pocketflow-mcp/README.md](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-mcp/README.md)<br>[cookbook/pocketflow-mcp/requirements.txt](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-mcp/requirements.txt)<br>[cookbook/pocketflow-mcp/simple_server.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-mcp/simple_server.py)<br>[cookbook/pocketflow-mcp/utils.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-mcp/utils.py) |
| retrieval | 35 | [docs/index.md](../../../../sources/The-Pocket__PocketFlow/docs/index.md)<br>[docs/utility_function/embedding.md](../../../../sources/The-Pocket__PocketFlow/docs/utility_function/embedding.md)<br>[docs/utility_function/index.md](../../../../sources/The-Pocket__PocketFlow/docs/utility_function/index.md)<br>[docs/utility_function/vector.md](../../../../sources/The-Pocket__PocketFlow/docs/utility_function/vector.md)<br>[docs/design_pattern/index.md](../../../../sources/The-Pocket__PocketFlow/docs/design_pattern/index.md)<br>[docs/design_pattern/rag.md](../../../../sources/The-Pocket__PocketFlow/docs/design_pattern/rag.md)<br>[docs/core_abstraction/index.md](../../../../sources/The-Pocket__PocketFlow/docs/core_abstraction/index.md)<br>[cookbook/pocketflow-rag/flow.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-rag/flow.py) |
| spec | 75 | [docs/design_pattern/agent.md](../../../../sources/The-Pocket__PocketFlow/docs/design_pattern/agent.md)<br>[docs/design_pattern/index.md](../../../../sources/The-Pocket__PocketFlow/docs/design_pattern/index.md)<br>[docs/design_pattern/mapreduce.md](../../../../sources/The-Pocket__PocketFlow/docs/design_pattern/mapreduce.md)<br>[docs/design_pattern/multi_agent.md](../../../../sources/The-Pocket__PocketFlow/docs/design_pattern/multi_agent.md)<br>[docs/design_pattern/rag.md](../../../../sources/The-Pocket__PocketFlow/docs/design_pattern/rag.md)<br>[docs/design_pattern/structure.md](../../../../sources/The-Pocket__PocketFlow/docs/design_pattern/structure.md)<br>[docs/design_pattern/workflow.md](../../../../sources/The-Pocket__PocketFlow/docs/design_pattern/workflow.md)<br>[cookbook/pocketflow-workflow/requirements.txt](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-workflow/requirements.txt) |
| eval | 35 | [tests/test_async_batch_flow.py](../../../../sources/The-Pocket__PocketFlow/tests/test_async_batch_flow.py)<br>[tests/test_async_batch_node.py](../../../../sources/The-Pocket__PocketFlow/tests/test_async_batch_node.py)<br>[tests/test_async_flow.py](../../../../sources/The-Pocket__PocketFlow/tests/test_async_flow.py)<br>[tests/test_async_parallel_batch_flow.py](../../../../sources/The-Pocket__PocketFlow/tests/test_async_parallel_batch_flow.py)<br>[tests/test_async_parallel_batch_node.py](../../../../sources/The-Pocket__PocketFlow/tests/test_async_parallel_batch_node.py)<br>[tests/test_batch_flow.py](../../../../sources/The-Pocket__PocketFlow/tests/test_batch_flow.py)<br>[tests/test_batch_node.py](../../../../sources/The-Pocket__PocketFlow/tests/test_batch_node.py)<br>[tests/test_fall_back.py](../../../../sources/The-Pocket__PocketFlow/tests/test_fall_back.py) |
| security | 5 | [cookbook/pocketflow-chat-guardrail/main.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-chat-guardrail/main.py)<br>[cookbook/pocketflow-chat-guardrail/README.md](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-chat-guardrail/README.md)<br>[cookbook/pocketflow-chat-guardrail/requirements.txt](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-chat-guardrail/requirements.txt)<br>[cookbook/pocketflow-chat-guardrail/utils.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-chat-guardrail/utils.py)<br>[cookbook/pocketflow-a2a/common/utils/push_notification_auth.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-a2a/common/utils/push_notification_auth.py) |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 20 | [.cursor/rules/guide_for_pocketflow.mdc](../../../../sources/The-Pocket__PocketFlow/.cursor/rules/guide_for_pocketflow.mdc)<br>[.cursor/rules/utility_function/chunking.mdc](../../../../sources/The-Pocket__PocketFlow/.cursor/rules/utility_function/chunking.mdc)<br>[.cursor/rules/utility_function/embedding.mdc](../../../../sources/The-Pocket__PocketFlow/.cursor/rules/utility_function/embedding.mdc)<br>[.cursor/rules/utility_function/llm.mdc](../../../../sources/The-Pocket__PocketFlow/.cursor/rules/utility_function/llm.mdc)<br>[.cursor/rules/utility_function/text_to_speech.mdc](../../../../sources/The-Pocket__PocketFlow/.cursor/rules/utility_function/text_to_speech.mdc)<br>[.cursor/rules/utility_function/vector.mdc](../../../../sources/The-Pocket__PocketFlow/.cursor/rules/utility_function/vector.mdc)<br>[.cursor/rules/utility_function/viz.mdc](../../../../sources/The-Pocket__PocketFlow/.cursor/rules/utility_function/viz.mdc)<br>[.cursor/rules/utility_function/websearch.mdc](../../../../sources/The-Pocket__PocketFlow/.cursor/rules/utility_function/websearch.mdc) |
| docs | 109 | [README.md](../../../../sources/The-Pocket__PocketFlow/README.md)<br>[docs/_config.yml](../../../../sources/The-Pocket__PocketFlow/docs/_config.yml)<br>[docs/guide.md](../../../../sources/The-Pocket__PocketFlow/docs/guide.md)<br>[docs/index.md](../../../../sources/The-Pocket__PocketFlow/docs/index.md)<br>[docs/utility_function/chunking.md](../../../../sources/The-Pocket__PocketFlow/docs/utility_function/chunking.md)<br>[docs/utility_function/embedding.md](../../../../sources/The-Pocket__PocketFlow/docs/utility_function/embedding.md)<br>[docs/utility_function/index.md](../../../../sources/The-Pocket__PocketFlow/docs/utility_function/index.md)<br>[docs/utility_function/llm.md](../../../../sources/The-Pocket__PocketFlow/docs/utility_function/llm.md) |
| config | 52 | [cookbook/pocketflow-workflow/requirements.txt](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-workflow/requirements.txt)<br>[cookbook/pocketflow-voice-chat/requirements.txt](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-voice-chat/requirements.txt)<br>[cookbook/pocketflow-tracing/requirements.txt](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tracing/requirements.txt)<br>[cookbook/pocketflow-tool-search/requirements.txt](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-search/requirements.txt)<br>[cookbook/pocketflow-tool-pdf-vision/requirements.txt](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-pdf-vision/requirements.txt)<br>[cookbook/pocketflow-tool-embeddings/requirements.txt](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-embeddings/requirements.txt)<br>[cookbook/pocketflow-tool-database/requirements.txt](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-database/requirements.txt)<br>[cookbook/pocketflow-tool-crawler/requirements.txt](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-crawler/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 35 | [tests/test_async_batch_flow.py](../../../../sources/The-Pocket__PocketFlow/tests/test_async_batch_flow.py)<br>[tests/test_async_batch_node.py](../../../../sources/The-Pocket__PocketFlow/tests/test_async_batch_node.py)<br>[tests/test_async_flow.py](../../../../sources/The-Pocket__PocketFlow/tests/test_async_flow.py)<br>[tests/test_async_parallel_batch_flow.py](../../../../sources/The-Pocket__PocketFlow/tests/test_async_parallel_batch_flow.py)<br>[tests/test_async_parallel_batch_node.py](../../../../sources/The-Pocket__PocketFlow/tests/test_async_parallel_batch_node.py)<br>[tests/test_batch_flow.py](../../../../sources/The-Pocket__PocketFlow/tests/test_batch_flow.py) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 5 | [cookbook/pocketflow-chat-guardrail/main.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-chat-guardrail/main.py)<br>[cookbook/pocketflow-chat-guardrail/README.md](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-chat-guardrail/README.md)<br>[cookbook/pocketflow-chat-guardrail/requirements.txt](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-chat-guardrail/requirements.txt)<br>[cookbook/pocketflow-chat-guardrail/utils.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-chat-guardrail/utils.py)<br>[cookbook/pocketflow-a2a/common/utils/push_notification_auth.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-a2a/common/utils/push_notification_auth.py) |
| 에이전트 지시문 | 20 | [.cursor/rules/guide_for_pocketflow.mdc](../../../../sources/The-Pocket__PocketFlow/.cursor/rules/guide_for_pocketflow.mdc)<br>[.cursor/rules/utility_function/chunking.mdc](../../../../sources/The-Pocket__PocketFlow/.cursor/rules/utility_function/chunking.mdc)<br>[.cursor/rules/utility_function/embedding.mdc](../../../../sources/The-Pocket__PocketFlow/.cursor/rules/utility_function/embedding.mdc)<br>[.cursor/rules/utility_function/llm.mdc](../../../../sources/The-Pocket__PocketFlow/.cursor/rules/utility_function/llm.mdc)<br>[.cursor/rules/utility_function/text_to_speech.mdc](../../../../sources/The-Pocket__PocketFlow/.cursor/rules/utility_function/text_to_speech.mdc)<br>[.cursor/rules/utility_function/vector.mdc](../../../../sources/The-Pocket__PocketFlow/.cursor/rules/utility_function/vector.mdc) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `docs/index.md`, `docs/utility_function/embedding.md`, `docs/utility_function/index.md`.
2. entrypoint를 따라 실행 흐름 확인: `cookbook/pocketflow-workflow/main.py`, `cookbook/pocketflow-voice-chat/main.py`, `cookbook/pocketflow-tool-search/main.py`.
3. agent/tool runtime 매핑: `docs/design_pattern/agent.md`, `docs/design_pattern/workflow.md`, `cookbook/pocketflow-tool-search/tools/parser.py`.
4. retrieval/memory/indexing 확인: `docs/index.md`, `docs/utility_function/embedding.md`, `docs/utility_function/index.md`.
5. test/eval 파일로 동작 검증: `tests/test_async_batch_flow.py`, `tests/test_async_batch_node.py`, `tests/test_async_flow.py`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Pocket Flow 100 line LLM framework. Let Agents build Agents!. 핵심 구조 신호는 Python, README.md, LICENSE, tests, docs, agent-instructions이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
