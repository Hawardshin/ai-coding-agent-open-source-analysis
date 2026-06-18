# NevaMind-AI/memU 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

The memory harness for proactive AI agents — structured storage, intent capture, 10x token reduction.

## 요약

- 조사 단위: `sources/NevaMind-AI__memU` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 240 files, 57 directories, depth score 99, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, src/memu/workflow/__init__.py, src/memu/workflow/interceptor.py이고, 의존성 단서는 openai, claude, langchain, langgraph, pydantic, pgvector, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | NevaMind-AI/memU |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 13885 |
| Forks | 1037 |
| License | NOASSERTION |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/NevaMind-AI__memU](../../../../sources/NevaMind-AI__memU) |
| 기존 보고서 | [reports/global-trending/repositories/NevaMind-AI__memU.md](../../../global-trending/repositories/NevaMind-AI__memU.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 240 / 57 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, assets, docs, examples, readme, src, tests |
| 상위 확장자 | .py: 149, .md: 36, .png: 16, .yml: 8, .txt: 7, .jpg: 6, .json: 4, (none): 3, .lock: 2, .toml: 2, .cfg: 1, .gif: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 46 |
| docs | documentation surface | 21 |
| tests | validation surface | 20 |
| examples/proactive | examples workspace | 16 |
| examples/sealos-assistant | examples workspace | 4 |
| examples/resources | examples workspace | 2 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| examples | top-level component | 1 |
| examples/example_1_conversation_memory.py | examples workspace | 1 |
| examples/example_3_multimodal_memory.py | examples workspace | 1 |
| examples/example_4_openrouter_memory.py | examples workspace | 1 |
| examples/output | examples workspace | 1 |
| examples/test_nebius_provider.py | examples workspace | 1 |
| readme | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | install | make install |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | check | make check |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | test | make test |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, claude |
| agentProtocols | 없음 |
| agentFrameworks | langchain, langgraph |
| vectorStores | pgvector |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| agentRuntime | [AGENTS.md](../../../../sources/NevaMind-AI__memU/AGENTS.md) | agentRuntime signal |
| agentRuntime | [src/memu/workflow/__init__.py](../../../../sources/NevaMind-AI__memU/src/memu/workflow/__init__.py) | agentRuntime signal |
| agentRuntime | [src/memu/workflow/interceptor.py](../../../../sources/NevaMind-AI__memU/src/memu/workflow/interceptor.py) | agentRuntime signal |
| agentRuntime | [src/memu/workflow/pipeline.py](../../../../sources/NevaMind-AI__memU/src/memu/workflow/pipeline.py) | agentRuntime signal |
| entrypoints | [examples/sealos-assistant/main.py](../../../../sources/NevaMind-AI__memU/examples/sealos-assistant/main.py) | entrypoints signal |
| config | [Cargo.lock](../../../../sources/NevaMind-AI__memU/Cargo.lock) | config signal |
| config | [Cargo.toml](../../../../sources/NevaMind-AI__memU/Cargo.toml) | config signal |
| config | [Makefile](../../../../sources/NevaMind-AI__memU/Makefile) | config signal |
| config | [pyproject.toml](../../../../sources/NevaMind-AI__memU/pyproject.toml) | config signal |
| ci | [.github/workflows/build.yml](../../../../sources/NevaMind-AI__memU/.github/workflows/build.yml) | ci support |
| ci | [.github/workflows/pr-title.yml](../../../../sources/NevaMind-AI__memU/.github/workflows/pr-title.yml) | ci support |
| eval | [tests/__init__.py](../../../../sources/NevaMind-AI__memU/tests/__init__.py) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [examples/sealos-assistant/main.py](../../../../sources/NevaMind-AI__memU/examples/sealos-assistant/main.py) |
| agentRuntime | 30 | [AGENTS.md](../../../../sources/NevaMind-AI__memU/AGENTS.md)<br>[src/memu/workflow/__init__.py](../../../../sources/NevaMind-AI__memU/src/memu/workflow/__init__.py)<br>[src/memu/workflow/interceptor.py](../../../../sources/NevaMind-AI__memU/src/memu/workflow/interceptor.py)<br>[src/memu/workflow/pipeline.py](../../../../sources/NevaMind-AI__memU/src/memu/workflow/pipeline.py)<br>[src/memu/workflow/runner.py](../../../../sources/NevaMind-AI__memU/src/memu/workflow/runner.py)<br>[src/memu/workflow/step.py](../../../../sources/NevaMind-AI__memU/src/memu/workflow/step.py)<br>[src/memu/utils/tool.py](../../../../sources/NevaMind-AI__memU/src/memu/utils/tool.py)<br>[src/memu/prompts/memory_type/__init__.py](../../../../sources/NevaMind-AI__memU/src/memu/prompts/memory_type/__init__.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 39 | [tests/test_tool_memory.py](../../../../sources/NevaMind-AI__memU/tests/test_tool_memory.py)<br>[tests/test_vector.py](../../../../sources/NevaMind-AI__memU/tests/test_vector.py)<br>[src/memu/prompts/retrieve/pre_retrieval_decision.py](../../../../sources/NevaMind-AI__memU/src/memu/prompts/retrieve/pre_retrieval_decision.py)<br>[src/memu/prompts/memory_type/__init__.py](../../../../sources/NevaMind-AI__memU/src/memu/prompts/memory_type/__init__.py)<br>[src/memu/prompts/memory_type/behavior.py](../../../../sources/NevaMind-AI__memU/src/memu/prompts/memory_type/behavior.py)<br>[src/memu/prompts/memory_type/event.py](../../../../sources/NevaMind-AI__memU/src/memu/prompts/memory_type/event.py)<br>[src/memu/prompts/memory_type/knowledge.py](../../../../sources/NevaMind-AI__memU/src/memu/prompts/memory_type/knowledge.py)<br>[src/memu/prompts/memory_type/profile.py](../../../../sources/NevaMind-AI__memU/src/memu/prompts/memory_type/profile.py) |
| spec | 6 | [examples/sealos-assistant/requirements.txt](../../../../sources/NevaMind-AI__memU/examples/sealos-assistant/requirements.txt)<br>[docs/architecture.md](../../../../sources/NevaMind-AI__memU/docs/architecture.md)<br>[docs/adr/0001-workflow-pipeline-architecture.md](../../../../sources/NevaMind-AI__memU/docs/adr/0001-workflow-pipeline-architecture.md)<br>[docs/adr/0002-pluggable-storage-and-vector-strategy.md](../../../../sources/NevaMind-AI__memU/docs/adr/0002-pluggable-storage-and-vector-strategy.md)<br>[docs/adr/0003-user-scope-in-data-model.md](../../../../sources/NevaMind-AI__memU/docs/adr/0003-user-scope-in-data-model.md)<br>[docs/adr/README.md](../../../../sources/NevaMind-AI__memU/docs/adr/README.md) |
| eval | 19 | [tests/__init__.py](../../../../sources/NevaMind-AI__memU/tests/__init__.py)<br>[tests/rust_entry_test.py](../../../../sources/NevaMind-AI__memU/tests/rust_entry_test.py)<br>[tests/test_client_wrapper.py](../../../../sources/NevaMind-AI__memU/tests/test_client_wrapper.py)<br>[tests/test_inmemory.py](../../../../sources/NevaMind-AI__memU/tests/test_inmemory.py)<br>[tests/test_lazyllm.py](../../../../sources/NevaMind-AI__memU/tests/test_lazyllm.py)<br>[tests/test_openrouter.py](../../../../sources/NevaMind-AI__memU/tests/test_openrouter.py)<br>[tests/test_postgres_migration_config.py](../../../../sources/NevaMind-AI__memU/tests/test_postgres_migration_config.py)<br>[tests/test_postgres.py](../../../../sources/NevaMind-AI__memU/tests/test_postgres.py) |
| security | 0 | 명확하지 않음 |
| ci | 3 | [.github/workflows/build.yml](../../../../sources/NevaMind-AI__memU/.github/workflows/build.yml)<br>[.github/workflows/pr-title.yml](../../../../sources/NevaMind-AI__memU/.github/workflows/pr-title.yml)<br>[.github/workflows/release-please.yml](../../../../sources/NevaMind-AI__memU/.github/workflows/release-please.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [AGENTS.md](../../../../sources/NevaMind-AI__memU/AGENTS.md) |
| docs | 24 | [README.md](../../../../sources/NevaMind-AI__memU/README.md)<br>[readme/README_en.md](../../../../sources/NevaMind-AI__memU/readme/README_en.md)<br>[readme/README_es.md](../../../../sources/NevaMind-AI__memU/readme/README_es.md)<br>[readme/README_fr.md](../../../../sources/NevaMind-AI__memU/readme/README_fr.md)<br>[readme/README_ja.md](../../../../sources/NevaMind-AI__memU/readme/README_ja.md)<br>[readme/README_ko.md](../../../../sources/NevaMind-AI__memU/readme/README_ko.md)<br>[readme/README_zh.md](../../../../sources/NevaMind-AI__memU/readme/README_zh.md)<br>[examples/sealos-assistant/README.md](../../../../sources/NevaMind-AI__memU/examples/sealos-assistant/README.md) |
| config | 6 | [Cargo.lock](../../../../sources/NevaMind-AI__memU/Cargo.lock)<br>[Cargo.toml](../../../../sources/NevaMind-AI__memU/Cargo.toml)<br>[Makefile](../../../../sources/NevaMind-AI__memU/Makefile)<br>[pyproject.toml](../../../../sources/NevaMind-AI__memU/pyproject.toml)<br>[uv.lock](../../../../sources/NevaMind-AI__memU/uv.lock)<br>[examples/sealos-assistant/requirements.txt](../../../../sources/NevaMind-AI__memU/examples/sealos-assistant/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 19 | [tests/__init__.py](../../../../sources/NevaMind-AI__memU/tests/__init__.py)<br>[tests/rust_entry_test.py](../../../../sources/NevaMind-AI__memU/tests/rust_entry_test.py)<br>[tests/test_client_wrapper.py](../../../../sources/NevaMind-AI__memU/tests/test_client_wrapper.py)<br>[tests/test_inmemory.py](../../../../sources/NevaMind-AI__memU/tests/test_inmemory.py)<br>[tests/test_lazyllm.py](../../../../sources/NevaMind-AI__memU/tests/test_lazyllm.py)<br>[tests/test_openrouter.py](../../../../sources/NevaMind-AI__memU/tests/test_openrouter.py) |
| CI workflow | 3 | [.github/workflows/build.yml](../../../../sources/NevaMind-AI__memU/.github/workflows/build.yml)<br>[.github/workflows/pr-title.yml](../../../../sources/NevaMind-AI__memU/.github/workflows/pr-title.yml)<br>[.github/workflows/release-please.yml](../../../../sources/NevaMind-AI__memU/.github/workflows/release-please.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/NevaMind-AI__memU/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `AGENTS.md`, `src/memu/workflow/__init__.py`, `src/memu/workflow/interceptor.py`.
2. entrypoint를 따라 실행 흐름 확인: `examples/sealos-assistant/main.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `src/memu/workflow/__init__.py`, `src/memu/workflow/interceptor.py`.
4. retrieval/memory/indexing 확인: `tests/test_tool_memory.py`, `tests/test_vector.py`, `src/memu/prompts/retrieve/pre_retrieval_decision.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/rust_entry_test.py`, `tests/test_client_wrapper.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 The memory harness for proactive AI agents — structured storage, intent capture, 10x token reduction.. 핵심 구조 신호는 Python, pyproject.toml, Cargo.toml, Makefile, README.md, AGENTS.md이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
