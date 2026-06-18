# szczyglis-dev/py-gpt 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Desktop AI Assistant powered by GPT-5, GPT-4, o1, o3, Gemini, Claude, Ollama, DeepSeek, Perplexity, Grok, Bielik, chat, vision, voice, RAG, image and video generation, agents, tools, MCP, plugins, speech synthesis and recognition, web search, memory, presets, assistants,and more. Linux, Windows, Mac

## 요약

- 조사 단위: `sources/szczyglis-dev__py-gpt` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 3,086 files, 395 directories, depth score 118, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/pygpt_net/plugin/mcp/__init__.py, src/pygpt_net/plugin/mcp/config.py, src/pygpt_net/plugin/mcp/plugin.py이고, 의존성 단서는 openai, anthropic, claude, gemini, mcp, langchain, 검증/운영 단서는 test/eval 경로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | szczyglis-dev/py-gpt |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 1827 |
| Forks | 330 |
| License | NOASSERTION |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/szczyglis-dev__py-gpt](../../../../sources/szczyglis-dev__py-gpt) |
| 기존 보고서 | [reports/llm-wiki/repositories/szczyglis-dev__py-gpt.md](../../../llm-wiki/repositories/szczyglis-dev__py-gpt.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 3086 / 395 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .github, bin, data, docs, examples, snap, src, tests |
| 상위 확장자 | .py: 1418, .js: 802, .css: 196, .ini: 190, .svg: 163, .png: 70, .json: 40, .ttf: 34, .rst: 21, .otf: 20, .woff: 20, .woff2: 20 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 72 |
| tests | validation surface | 65 |
| docs | documentation surface | 43 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| data | top-level component | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| snap | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | pygpt | pygpt |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic, claude, gemini |
| agentProtocols | mcp |
| agentFrameworks | langchain, llama-index |
| vectorStores | chroma, qdrant |
| modelRuntime | transformers, ollama, llama |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [src/pygpt_net/plugin/mcp/__init__.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/plugin/mcp/__init__.py) | mcp signal |
| mcp | [src/pygpt_net/plugin/mcp/config.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/plugin/mcp/config.py) | mcp signal |
| mcp | [src/pygpt_net/plugin/mcp/plugin.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/plugin/mcp/plugin.py) | mcp signal |
| mcp | [src/pygpt_net/plugin/mcp/worker.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/plugin/mcp/worker.py) | mcp signal |
| agentRuntime | [tests/provider/api/openai/agents/test_openai_agents_client.py](../../../../sources/szczyglis-dev__py-gpt/tests/provider/api/openai/agents/test_openai_agents_client.py) | agentRuntime signal |
| agentRuntime | [tests/provider/api/openai/agents/test_openai_agents_computer.py](../../../../sources/szczyglis-dev__py-gpt/tests/provider/api/openai/agents/test_openai_agents_computer.py) | agentRuntime signal |
| agentRuntime | [tests/provider/api/openai/agents/test_openai_agents_remote_tools.py](../../../../sources/szczyglis-dev__py-gpt/tests/provider/api/openai/agents/test_openai_agents_remote_tools.py) | agentRuntime signal |
| agentRuntime | [tests/plugin/agent/test_plugin_agent.py](../../../../sources/szczyglis-dev__py-gpt/tests/plugin/agent/test_plugin_agent.py) | agentRuntime signal |
| entrypoints | [src/pygpt_net/ui/main.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/ui/main.py) | entrypoints signal |
| entrypoints | [bin/build_all.bat](../../../../sources/szczyglis-dev__py-gpt/bin/build_all.bat) | entrypoints signal |
| entrypoints | [bin/build_appimage.sh](../../../../sources/szczyglis-dev__py-gpt/bin/build_appimage.sh) | entrypoints signal |
| entrypoints | [bin/build_installer_store.bat](../../../../sources/szczyglis-dev__py-gpt/bin/build_installer_store.bat) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 15 | [src/pygpt_net/ui/main.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/ui/main.py)<br>[bin/build_all.bat](../../../../sources/szczyglis-dev__py-gpt/bin/build_all.bat)<br>[bin/build_appimage.sh](../../../../sources/szczyglis-dev__py-gpt/bin/build_appimage.sh)<br>[bin/build_installer_store.bat](../../../../sources/szczyglis-dev__py-gpt/bin/build_installer_store.bat)<br>[bin/build_installer.bat](../../../../sources/szczyglis-dev__py-gpt/bin/build_installer.bat)<br>[bin/build.bat](../../../../sources/szczyglis-dev__py-gpt/bin/build.bat)<br>[bin/build.sh](../../../../sources/szczyglis-dev__py-gpt/bin/build.sh)<br>[bin/clean.sh](../../../../sources/szczyglis-dev__py-gpt/bin/clean.sh) |
| agentRuntime | 216 | [tests/provider/api/openai/agents/test_openai_agents_client.py](../../../../sources/szczyglis-dev__py-gpt/tests/provider/api/openai/agents/test_openai_agents_client.py)<br>[tests/provider/api/openai/agents/test_openai_agents_computer.py](../../../../sources/szczyglis-dev__py-gpt/tests/provider/api/openai/agents/test_openai_agents_computer.py)<br>[tests/provider/api/openai/agents/test_openai_agents_remote_tools.py](../../../../sources/szczyglis-dev__py-gpt/tests/provider/api/openai/agents/test_openai_agents_remote_tools.py)<br>[tests/plugin/agent/test_plugin_agent.py](../../../../sources/szczyglis-dev__py-gpt/tests/plugin/agent/test_plugin_agent.py)<br>[tests/core/agents/test_agent_legacy.py](../../../../sources/szczyglis-dev__py-gpt/tests/core/agents/test_agent_legacy.py)<br>[tests/core/agents/test_memory.py](../../../../sources/szczyglis-dev__py-gpt/tests/core/agents/test_memory.py)<br>[tests/core/agents/test_provider.py](../../../../sources/szczyglis-dev__py-gpt/tests/core/agents/test_provider.py)<br>[tests/core/agents/test_runner.py](../../../../sources/szczyglis-dev__py-gpt/tests/core/agents/test_runner.py) |
| mcp | 6 | [src/pygpt_net/plugin/mcp/__init__.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/plugin/mcp/__init__.py)<br>[src/pygpt_net/plugin/mcp/config.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/plugin/mcp/config.py)<br>[src/pygpt_net/plugin/mcp/plugin.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/plugin/mcp/plugin.py)<br>[src/pygpt_net/plugin/mcp/worker.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/plugin/mcp/worker.py)<br>[src/pygpt_net/data/locale/plugin.mcp.en.ini](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/data/locale/plugin.mcp.en.ini)<br>[docs/source/images/v2_mcp.png](../../../../sources/szczyglis-dev__py-gpt/docs/source/images/v2_mcp.png) |
| retrieval | 85 | [tests/provider/vector_stores/test_base_store.py](../../../../sources/szczyglis-dev__py-gpt/tests/provider/vector_stores/test_base_store.py)<br>[tests/core/agents/test_memory.py](../../../../sources/szczyglis-dev__py-gpt/tests/core/agents/test_memory.py)<br>[src/pygpt_net/ui/widget/lists/index_combo.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/ui/widget/lists/index_combo.py)<br>[src/pygpt_net/ui/widget/lists/index.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/ui/widget/lists/index.py)<br>[src/pygpt_net/provider/vector_stores/__init__.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/provider/vector_stores/__init__.py)<br>[src/pygpt_net/provider/vector_stores/base.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/provider/vector_stores/base.py)<br>[src/pygpt_net/provider/vector_stores/chroma.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/provider/vector_stores/chroma.py)<br>[src/pygpt_net/provider/vector_stores/ctx_attachment.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/provider/vector_stores/ctx_attachment.py) |
| spec | 3 | [requirements.txt](../../../../sources/szczyglis-dev__py-gpt/requirements.txt)<br>[docs/requirements.txt](../../../../sources/szczyglis-dev__py-gpt/docs/requirements.txt)<br>[docs/source/requirements.rst](../../../../sources/szczyglis-dev__py-gpt/docs/source/requirements.rst) |
| eval | 201 | [run-tests.sh](../../../../sources/szczyglis-dev__py-gpt/run-tests.sh)<br>[tests/__init__.py](../../../../sources/szczyglis-dev__py-gpt/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/szczyglis-dev__py-gpt/tests/conftest.py)<br>[tests/mocks.py](../../../../sources/szczyglis-dev__py-gpt/tests/mocks.py)<br>[tests/test_data.py](../../../../sources/szczyglis-dev__py-gpt/tests/test_data.py)<br>[tests/test_utils.py](../../../../sources/szczyglis-dev__py-gpt/tests/test_utils.py)<br>[tests/provider/vector_stores/test_base_store.py](../../../../sources/szczyglis-dev__py-gpt/tests/provider/vector_stores/test_base_store.py)<br>[tests/provider/llms/test_llm_anthropic.py](../../../../sources/szczyglis-dev__py-gpt/tests/provider/llms/test_llm_anthropic.py) |
| security | 5 | [privacy-policy.md](../../../../sources/szczyglis-dev__py-gpt/privacy-policy.md)<br>[SECURITY.md](../../../../sources/szczyglis-dev__py-gpt/SECURITY.md)<br>[src/pygpt_net/plugin/cmd_mouse_control/worker_sandbox.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/plugin/cmd_mouse_control/worker_sandbox.py)<br>[src/pygpt_net/data/icons/security.svg](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/data/icons/security.svg)<br>[docs/source/security.rst](../../../../sources/szczyglis-dev__py-gpt/docs/source/security.rst) |
| ci | 0 | 명확하지 않음 |
| container | 4 | [src/pygpt_net/data/js/highlight/languages/dockerfile.js](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/data/js/highlight/languages/dockerfile.js)<br>[src/pygpt_net/data/js/highlight/languages/dockerfile.min.js](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/data/js/highlight/languages/dockerfile.min.js)<br>[src/pygpt_net/data/js/highlight/es/languages/dockerfile.js](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/data/js/highlight/es/languages/dockerfile.js)<br>[src/pygpt_net/data/js/highlight/es/languages/dockerfile.min.js](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/data/js/highlight/es/languages/dockerfile.min.js) |
| instruction | 0 | 명확하지 않음 |
| docs | 91 | [README.md](../../../../sources/szczyglis-dev__py-gpt/README.md)<br>[src/pygpt_net/data/win32/README.rtf](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/data/win32/README.rtf)<br>[src/pygpt_net/data/js/highlight/README.md](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/data/js/highlight/README.md)<br>[examples/README.md](../../../../sources/szczyglis-dev__py-gpt/examples/README.md)<br>[docs/build-en.sh](../../../../sources/szczyglis-dev__py-gpt/docs/build-en.sh)<br>[docs/build-pl.sh](../../../../sources/szczyglis-dev__py-gpt/docs/build-pl.sh)<br>[docs/install.txt](../../../../sources/szczyglis-dev__py-gpt/docs/install.txt)<br>[docs/make.bat](../../../../sources/szczyglis-dev__py-gpt/docs/make.bat) |
| config | 7 | [poetry.lock](../../../../sources/szczyglis-dev__py-gpt/poetry.lock)<br>[pyproject.toml](../../../../sources/szczyglis-dev__py-gpt/pyproject.toml)<br>[requirements.txt](../../../../sources/szczyglis-dev__py-gpt/requirements.txt)<br>[src/pygpt_net/data/js/highlight/package.json](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/data/js/highlight/package.json)<br>[src/pygpt_net/data/js/highlight/es/package.json](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/data/js/highlight/es/package.json)<br>[docs/Makefile](../../../../sources/szczyglis-dev__py-gpt/docs/Makefile)<br>[docs/requirements.txt](../../../../sources/szczyglis-dev__py-gpt/docs/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 201 | [run-tests.sh](../../../../sources/szczyglis-dev__py-gpt/run-tests.sh)<br>[tests/__init__.py](../../../../sources/szczyglis-dev__py-gpt/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/szczyglis-dev__py-gpt/tests/conftest.py)<br>[tests/mocks.py](../../../../sources/szczyglis-dev__py-gpt/tests/mocks.py)<br>[tests/test_data.py](../../../../sources/szczyglis-dev__py-gpt/tests/test_data.py)<br>[tests/test_utils.py](../../../../sources/szczyglis-dev__py-gpt/tests/test_utils.py) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 4 | [src/pygpt_net/data/js/highlight/languages/dockerfile.js](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/data/js/highlight/languages/dockerfile.js)<br>[src/pygpt_net/data/js/highlight/languages/dockerfile.min.js](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/data/js/highlight/languages/dockerfile.min.js)<br>[src/pygpt_net/data/js/highlight/es/languages/dockerfile.js](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/data/js/highlight/es/languages/dockerfile.js)<br>[src/pygpt_net/data/js/highlight/es/languages/dockerfile.min.js](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/data/js/highlight/es/languages/dockerfile.min.js) |
| 보안/정책 | 5 | [privacy-policy.md](../../../../sources/szczyglis-dev__py-gpt/privacy-policy.md)<br>[SECURITY.md](../../../../sources/szczyglis-dev__py-gpt/SECURITY.md)<br>[src/pygpt_net/plugin/cmd_mouse_control/worker_sandbox.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/plugin/cmd_mouse_control/worker_sandbox.py)<br>[src/pygpt_net/data/icons/security.svg](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/data/icons/security.svg)<br>[docs/source/security.rst](../../../../sources/szczyglis-dev__py-gpt/docs/source/security.rst) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/pygpt_net/plugin/mcp/__init__.py`, `src/pygpt_net/plugin/mcp/config.py`, `src/pygpt_net/plugin/mcp/plugin.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/pygpt_net/ui/main.py`, `bin/build_all.bat`, `bin/build_appimage.sh`.
3. agent/tool runtime 매핑: `tests/provider/api/openai/agents/test_openai_agents_client.py`, `tests/provider/api/openai/agents/test_openai_agents_computer.py`, `tests/provider/api/openai/agents/test_openai_agents_remote_tools.py`.
4. retrieval/memory/indexing 확인: `tests/provider/vector_stores/test_base_store.py`, `tests/core/agents/test_memory.py`, `src/pygpt_net/ui/widget/lists/index_combo.py`.
5. test/eval 파일로 동작 검증: `run-tests.sh`, `tests/__init__.py`, `tests/conftest.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Desktop AI Assistant powered by GPT 5, GPT 4, o1, o3, Gemini, Claude, Ollama, DeepSeek, Perplexity, Grok, Bielik, chat, . 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, README.md, LICENSE, openai이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
