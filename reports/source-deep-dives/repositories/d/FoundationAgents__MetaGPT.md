# FoundationAgents/MetaGPT 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

🌟 The Multi-Agent Framework: First AI Software Company, Towards Natural Language Programming

## 요약

- 조사 단위: `sources/FoundationAgents__MetaGPT` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,255 files, 260 directories, depth score 116, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/metagpt/tools/test_tool_registry.py, metagpt/tools/tool_registry.py이고, 의존성 단서는 openai, anthropic, pydantic, typer, transformers, qdrant, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | FoundationAgents/MetaGPT |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 68866 |
| Forks | 8806 |
| License | MIT |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/FoundationAgents__MetaGPT](../../../../sources/FoundationAgents__MetaGPT) |
| 기존 보고서 | [reports/global-trending/repositories/FoundationAgents__MetaGPT.md](../../../global-trending/repositories/FoundationAgents__MetaGPT.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1255 / 260 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .devcontainer, .github, config, docs, examples, metagpt, tests |
| 상위 확장자 | .py: 890, .json: 72, .txt: 55, .md: 41, .yaml: 36, .png: 28, .pdf: 20, .svg: 18, .js: 15, (none): 15, .csv: 12, .sh: 12 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 134 |
| docs | documentation surface | 23 |
| examples/di | examples workspace | 3 |
| examples/android_assistant | examples workspace | 2 |
| examples/stanford_town | examples workspace | 2 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| examples | top-level component | 1 |
| examples/aflow | examples workspace | 1 |
| examples/exp_pool | examples workspace | 1 |
| examples/sela | examples workspace | 1 |
| examples/spo | examples workspace | 1 |
| examples/ui_with_chainlit | examples workspace | 1 |
| examples/write_design.py | examples workspace | 1 |
| metagpt | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | qdrant, milvus, faiss |
| modelRuntime | transformers |
| webRuntime | 없음 |
| developerSurface | typer |
| observability | 없음 |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [tests/metagpt/tools/test_tool_registry.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/tools/test_tool_registry.py) | mcp signal |
| mcp | [metagpt/tools/tool_registry.py](../../../../sources/FoundationAgents__MetaGPT/metagpt/tools/tool_registry.py) | mcp signal |
| agentRuntime | [tests/metagpt/tools/__init__.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [tests/metagpt/tools/test_azure_tts.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/tools/test_azure_tts.py) | agentRuntime signal |
| agentRuntime | [tests/metagpt/tools/test_iflytek_tts.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/tools/test_iflytek_tts.py) | agentRuntime signal |
| agentRuntime | [tests/metagpt/tools/test_metagpt_oas3_api_svc.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/tools/test_metagpt_oas3_api_svc.py) | agentRuntime signal |
| entrypoints | [metagpt/environment/minecraft/mineflayer/mineflayer-collectblock/src/index.ts](../../../../sources/FoundationAgents__MetaGPT/metagpt/environment/minecraft/mineflayer/mineflayer-collectblock/src/index.ts) | entrypoints signal |
| config | [requirements.txt](../../../../sources/FoundationAgents__MetaGPT/requirements.txt) | config signal |
| config | [metagpt/ext/sela/requirements.txt](../../../../sources/FoundationAgents__MetaGPT/metagpt/ext/sela/requirements.txt) | config signal |
| config | [metagpt/environment/minecraft/mineflayer/package.json](../../../../sources/FoundationAgents__MetaGPT/metagpt/environment/minecraft/mineflayer/package.json) | config signal |
| config | [metagpt/environment/minecraft/mineflayer/mineflayer-collectblock/package.json](../../../../sources/FoundationAgents__MetaGPT/metagpt/environment/minecraft/mineflayer/mineflayer-collectblock/package.json) | config signal |
| ci | [.github/workflows/build-package.yaml](../../../../sources/FoundationAgents__MetaGPT/.github/workflows/build-package.yaml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [metagpt/environment/minecraft/mineflayer/mineflayer-collectblock/src/index.ts](../../../../sources/FoundationAgents__MetaGPT/metagpt/environment/minecraft/mineflayer/mineflayer-collectblock/src/index.ts) |
| agentRuntime | 183 | [tests/metagpt/tools/__init__.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/tools/__init__.py)<br>[tests/metagpt/tools/test_azure_tts.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/tools/test_azure_tts.py)<br>[tests/metagpt/tools/test_iflytek_tts.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/tools/test_iflytek_tts.py)<br>[tests/metagpt/tools/test_metagpt_oas3_api_svc.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/tools/test_metagpt_oas3_api_svc.py)<br>[tests/metagpt/tools/test_metagpt_text_to_image.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/tools/test_metagpt_text_to_image.py)<br>[tests/metagpt/tools/test_moderation.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/tools/test_moderation.py)<br>[tests/metagpt/tools/test_openai_text_to_embedding.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/tools/test_openai_text_to_embedding.py)<br>[tests/metagpt/tools/test_openai_text_to_image.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/tools/test_openai_text_to_image.py) |
| mcp | 2 | [tests/metagpt/tools/test_tool_registry.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/tools/test_tool_registry.py)<br>[metagpt/tools/tool_registry.py](../../../../sources/FoundationAgents__MetaGPT/metagpt/tools/tool_registry.py) |
| retrieval | 119 | [tests/metagpt/utils/test_di_graph_repository.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/utils/test_di_graph_repository.py)<br>[tests/metagpt/utils/test_visual_graph_repo.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/utils/test_visual_graph_repo.py)<br>[tests/metagpt/tools/test_openai_text_to_embedding.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/tools/test_openai_text_to_embedding.py)<br>[tests/metagpt/tools/libs/test_index_repo.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/tools/libs/test_index_repo.py)<br>[tests/metagpt/serialize_deserialize/test_memory.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/serialize_deserialize/test_memory.py)<br>[tests/metagpt/rag/__init__.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/rag/__init__.py)<br>[tests/metagpt/rag/test_large_pdf.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/rag/test_large_pdf.py)<br>[tests/metagpt/rag/retrievers/test_base_retriever.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/rag/retrievers/test_base_retriever.py) |
| spec | 58 | [requirements.txt](../../../../sources/FoundationAgents__MetaGPT/requirements.txt)<br>[tests/metagpt/serialize_deserialize/test_write_design.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/serialize_deserialize/test_write_design.py)<br>[tests/metagpt/serialize_deserialize/test_write_prd.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/serialize_deserialize/test_write_prd.py)<br>[tests/metagpt/actions/test_design_api_an.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/actions/test_design_api_an.py)<br>[tests/metagpt/actions/test_design_api_review.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/actions/test_design_api_review.py)<br>[tests/metagpt/actions/test_design_api.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/actions/test_design_api.py)<br>[tests/metagpt/actions/test_write_prd_an.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/actions/test_write_prd_an.py)<br>[tests/metagpt/actions/test_write_prd_review.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/actions/test_write_prd_review.py) |
| eval | 375 | [tests/__init__.py](../../../../sources/FoundationAgents__MetaGPT/tests/__init__.py)<br>[tests/config2.yaml](../../../../sources/FoundationAgents__MetaGPT/tests/config2.yaml)<br>[tests/conftest.py](../../../../sources/FoundationAgents__MetaGPT/tests/conftest.py)<br>[tests/scripts/run_install_deps.sh](../../../../sources/FoundationAgents__MetaGPT/tests/scripts/run_install_deps.sh)<br>[tests/mock/mock_aiohttp.py](../../../../sources/FoundationAgents__MetaGPT/tests/mock/mock_aiohttp.py)<br>[tests/mock/mock_curl_cffi.py](../../../../sources/FoundationAgents__MetaGPT/tests/mock/mock_curl_cffi.py)<br>[tests/mock/mock_httplib2.py](../../../../sources/FoundationAgents__MetaGPT/tests/mock/mock_httplib2.py)<br>[tests/mock/mock_llm.py](../../../../sources/FoundationAgents__MetaGPT/tests/mock/mock_llm.py) |
| security | 3 | [SECURITY.md](../../../../sources/FoundationAgents__MetaGPT/SECURITY.md)<br>[metagpt/ext/werewolf/roles/guard.py](../../../../sources/FoundationAgents__MetaGPT/metagpt/ext/werewolf/roles/guard.py)<br>[metagpt/ext/werewolf/actions/guard_actions.py](../../../../sources/FoundationAgents__MetaGPT/metagpt/ext/werewolf/actions/guard_actions.py) |
| ci | 5 | [.github/workflows/build-package.yaml](../../../../sources/FoundationAgents__MetaGPT/.github/workflows/build-package.yaml)<br>[.github/workflows/fulltest.yaml](../../../../sources/FoundationAgents__MetaGPT/.github/workflows/fulltest.yaml)<br>[.github/workflows/pre-commit.yaml](../../../../sources/FoundationAgents__MetaGPT/.github/workflows/pre-commit.yaml)<br>[.github/workflows/stale.yaml](../../../../sources/FoundationAgents__MetaGPT/.github/workflows/stale.yaml)<br>[.github/workflows/unittest.yaml](../../../../sources/FoundationAgents__MetaGPT/.github/workflows/unittest.yaml) |
| container | 2 | [Dockerfile](../../../../sources/FoundationAgents__MetaGPT/Dockerfile)<br>[.devcontainer/docker-compose.yaml](../../../../sources/FoundationAgents__MetaGPT/.devcontainer/docker-compose.yaml) |
| instruction | 0 | 명확하지 않음 |
| docs | 107 | [README.md](../../../../sources/FoundationAgents__MetaGPT/README.md)<br>[tests/data/incremental_dev_project/readme.md](../../../../sources/FoundationAgents__MetaGPT/tests/data/incremental_dev_project/readme.md)<br>[metagpt/ext/stanford_town/README_CN.md](../../../../sources/FoundationAgents__MetaGPT/metagpt/ext/stanford_town/README_CN.md)<br>[metagpt/ext/stanford_town/README.md](../../../../sources/FoundationAgents__MetaGPT/metagpt/ext/stanford_town/README.md)<br>[metagpt/ext/sela/README.md](../../../../sources/FoundationAgents__MetaGPT/metagpt/ext/sela/README.md)<br>[metagpt/ext/sela/runner/README.md](../../../../sources/FoundationAgents__MetaGPT/metagpt/ext/sela/runner/README.md)<br>[metagpt/ext/android_assistant/README_CN.md](../../../../sources/FoundationAgents__MetaGPT/metagpt/ext/android_assistant/README_CN.md)<br>[metagpt/ext/android_assistant/README.md](../../../../sources/FoundationAgents__MetaGPT/metagpt/ext/android_assistant/README.md) |
| config | 7 | [requirements.txt](../../../../sources/FoundationAgents__MetaGPT/requirements.txt)<br>[metagpt/ext/sela/requirements.txt](../../../../sources/FoundationAgents__MetaGPT/metagpt/ext/sela/requirements.txt)<br>[metagpt/environment/minecraft/mineflayer/package.json](../../../../sources/FoundationAgents__MetaGPT/metagpt/environment/minecraft/mineflayer/package.json)<br>[metagpt/environment/minecraft/mineflayer/mineflayer-collectblock/package.json](../../../../sources/FoundationAgents__MetaGPT/metagpt/environment/minecraft/mineflayer/mineflayer-collectblock/package.json)<br>[metagpt/environment/minecraft/mineflayer/mineflayer-collectblock/tsconfig.json](../../../../sources/FoundationAgents__MetaGPT/metagpt/environment/minecraft/mineflayer/mineflayer-collectblock/tsconfig.json)<br>[examples/stanford_town/requirements.txt](../../../../sources/FoundationAgents__MetaGPT/examples/stanford_town/requirements.txt)<br>[examples/android_assistant/requirements.txt](../../../../sources/FoundationAgents__MetaGPT/examples/android_assistant/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 375 | [tests/__init__.py](../../../../sources/FoundationAgents__MetaGPT/tests/__init__.py)<br>[tests/config2.yaml](../../../../sources/FoundationAgents__MetaGPT/tests/config2.yaml)<br>[tests/conftest.py](../../../../sources/FoundationAgents__MetaGPT/tests/conftest.py)<br>[tests/scripts/run_install_deps.sh](../../../../sources/FoundationAgents__MetaGPT/tests/scripts/run_install_deps.sh)<br>[tests/mock/mock_aiohttp.py](../../../../sources/FoundationAgents__MetaGPT/tests/mock/mock_aiohttp.py)<br>[tests/mock/mock_curl_cffi.py](../../../../sources/FoundationAgents__MetaGPT/tests/mock/mock_curl_cffi.py) |
| CI workflow | 5 | [.github/workflows/build-package.yaml](../../../../sources/FoundationAgents__MetaGPT/.github/workflows/build-package.yaml)<br>[.github/workflows/fulltest.yaml](../../../../sources/FoundationAgents__MetaGPT/.github/workflows/fulltest.yaml)<br>[.github/workflows/pre-commit.yaml](../../../../sources/FoundationAgents__MetaGPT/.github/workflows/pre-commit.yaml)<br>[.github/workflows/stale.yaml](../../../../sources/FoundationAgents__MetaGPT/.github/workflows/stale.yaml)<br>[.github/workflows/unittest.yaml](../../../../sources/FoundationAgents__MetaGPT/.github/workflows/unittest.yaml) |
| 컨테이너/배포 | 2 | [Dockerfile](../../../../sources/FoundationAgents__MetaGPT/Dockerfile)<br>[.devcontainer/docker-compose.yaml](../../../../sources/FoundationAgents__MetaGPT/.devcontainer/docker-compose.yaml) |
| 보안/정책 | 3 | [SECURITY.md](../../../../sources/FoundationAgents__MetaGPT/SECURITY.md)<br>[metagpt/ext/werewolf/roles/guard.py](../../../../sources/FoundationAgents__MetaGPT/metagpt/ext/werewolf/roles/guard.py)<br>[metagpt/ext/werewolf/actions/guard_actions.py](../../../../sources/FoundationAgents__MetaGPT/metagpt/ext/werewolf/actions/guard_actions.py) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/metagpt/tools/test_tool_registry.py`, `metagpt/tools/tool_registry.py`, `tests/metagpt/tools/__init__.py`.
2. entrypoint를 따라 실행 흐름 확인: `metagpt/environment/minecraft/mineflayer/mineflayer-collectblock/src/index.ts`.
3. agent/tool runtime 매핑: `tests/metagpt/tools/__init__.py`, `tests/metagpt/tools/test_azure_tts.py`, `tests/metagpt/tools/test_iflytek_tts.py`.
4. retrieval/memory/indexing 확인: `tests/metagpt/utils/test_di_graph_repository.py`, `tests/metagpt/utils/test_visual_graph_repo.py`, `tests/metagpt/tools/test_openai_text_to_embedding.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/config2.yaml`, `tests/conftest.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 🌟 The Multi Agent Framework First AI Software Company, Towards Natural Language Programming. 핵심 구조 신호는 Python, requirements.txt, Dockerfile, README.md, LICENSE, openai이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
