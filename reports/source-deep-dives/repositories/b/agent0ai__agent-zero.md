# agent0ai/agent-zero 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Agent Zero AI framework

## 요약

- 조사 단위: `sources/agent0ai__agent-zero` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,635 files, 551 directories, depth score 116, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=webui/public/mcp_client.svg, webui/public/mcp_server.svg, webui/components/settings/mcp/mcp_client.html이고, 의존성 단서는 openai, mcp, langchain, pydantic, transformers, faiss, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | agent0ai/agent-zero |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 18111 |
| Forks | 3662 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/agent0ai__agent-zero](../../../../sources/agent0ai__agent-zero) |
| 기존 보고서 | [reports/global-trending/repositories/agent0ai__agent-zero.md](../../../global-trending/repositories/agent0ai__agent-zero.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1635 / 551 |
| 관측 최대 깊이 | 12 |
| 상위 디렉터리 | .github, agents, api, conf, docker, docs, extensions, helpers, knowledge, lib, logs, plugins, prompts, scripts, skills, tests, tmp, tools, usr, webui |
| 상위 확장자 | .py: 614, .md: 278, .html: 167, .png: 164, .js: 129, (none): 63, .svg: 56, .yaml: 54, .jpg: 28, .sh: 24, .css: 17, .json: 6 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 53 |
| docs | documentation surface | 25 |
| api | source boundary | 6 |
| lib | source boundary | 2 |
| .github | ci surface | 1 |
| agents | top-level component | 1 |
| conf | top-level component | 1 |
| docker | documentation surface | 1 |
| extensions | top-level component | 1 |
| helpers | top-level component | 1 |
| knowledge | top-level component | 1 |
| logs | top-level component | 1 |
| plugins | top-level component | 1 |
| prompts | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| tmp | top-level component | 1 |
| tools | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | langchain |
| vectorStores | faiss |
| modelRuntime | transformers |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [webui/public/mcp_client.svg](../../../../sources/agent0ai__agent-zero/webui/public/mcp_client.svg) | mcp signal |
| mcp | [webui/public/mcp_server.svg](../../../../sources/agent0ai__agent-zero/webui/public/mcp_server.svg) | mcp signal |
| mcp | [webui/components/settings/mcp/mcp_client.html](../../../../sources/agent0ai__agent-zero/webui/components/settings/mcp/mcp_client.html) | mcp signal |
| mcp | [webui/components/settings/mcp/mcp_server.html](../../../../sources/agent0ai__agent-zero/webui/components/settings/mcp/mcp_server.html) | mcp signal |
| agentRuntime | [agent.py](../../../../sources/agent0ai__agent-zero/agent.py) | agentRuntime signal |
| agentRuntime | [AGENTS.md](../../../../sources/agent0ai__agent-zero/AGENTS.md) | agentRuntime signal |
| agentRuntime | [webui/AGENTS.md](../../../../sources/agent0ai__agent-zero/webui/AGENTS.md) | agentRuntime signal |
| agentRuntime | [webui/public/agent.svg](../../../../sources/agent0ai__agent-zero/webui/public/agent.svg) | agentRuntime signal |
| instruction | [webui/js/AGENTS.md](../../../../sources/agent0ai__agent-zero/webui/js/AGENTS.md) | instruction signal |
| instruction | [webui/css/AGENTS.md](../../../../sources/agent0ai__agent-zero/webui/css/AGENTS.md) | instruction signal |
| config | [requirements.dev.txt](../../../../sources/agent0ai__agent-zero/requirements.dev.txt) | config signal |
| config | [requirements.txt](../../../../sources/agent0ai__agent-zero/requirements.txt) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 260 | [agent.py](../../../../sources/agent0ai__agent-zero/agent.py)<br>[AGENTS.md](../../../../sources/agent0ai__agent-zero/AGENTS.md)<br>[webui/AGENTS.md](../../../../sources/agent0ai__agent-zero/webui/AGENTS.md)<br>[webui/public/agent.svg](../../../../sources/agent0ai__agent-zero/webui/public/agent.svg)<br>[webui/public/memory.svg](../../../../sources/agent0ai__agent-zero/webui/public/memory.svg)<br>[webui/public/skills_add.svg](../../../../sources/agent0ai__agent-zero/webui/public/skills_add.svg)<br>[webui/public/skills.svg](../../../../sources/agent0ai__agent-zero/webui/public/skills.svg)<br>[webui/js/AGENTS.md](../../../../sources/agent0ai__agent-zero/webui/js/AGENTS.md) |
| mcp | 24 | [webui/public/mcp_client.svg](../../../../sources/agent0ai__agent-zero/webui/public/mcp_client.svg)<br>[webui/public/mcp_server.svg](../../../../sources/agent0ai__agent-zero/webui/public/mcp_server.svg)<br>[webui/components/settings/mcp/mcp_client.html](../../../../sources/agent0ai__agent-zero/webui/components/settings/mcp/mcp_client.html)<br>[webui/components/settings/mcp/mcp_server.html](../../../../sources/agent0ai__agent-zero/webui/components/settings/mcp/mcp_server.html)<br>[webui/components/settings/mcp/mcp-settings.html](../../../../sources/agent0ai__agent-zero/webui/components/settings/mcp/mcp-settings.html)<br>[webui/components/settings/mcp/server/example.html](../../../../sources/agent0ai__agent-zero/webui/components/settings/mcp/server/example.html)<br>[webui/components/settings/mcp/client/example.html](../../../../sources/agent0ai__agent-zero/webui/components/settings/mcp/client/example.html)<br>[webui/components/settings/mcp/client/mcp-server-tools.html](../../../../sources/agent0ai__agent-zero/webui/components/settings/mcp/client/mcp-server-tools.html) |
| retrieval | 91 | [webui/index.css](../../../../sources/agent0ai__agent-zero/webui/index.css)<br>[webui/index.html](../../../../sources/agent0ai__agent-zero/webui/index.html)<br>[webui/index.js](../../../../sources/agent0ai__agent-zero/webui/index.js)<br>[webui/public/embed_model.svg](../../../../sources/agent0ai__agent-zero/webui/public/embed_model.svg)<br>[webui/public/memory.svg](../../../../sources/agent0ai__agent-zero/webui/public/memory.svg)<br>[usr/knowledge/.gitkeep](../../../../sources/agent0ai__agent-zero/usr/knowledge/.gitkeep)<br>[usr/knowledge/solutions/.gitkeep](../../../../sources/agent0ai__agent-zero/usr/knowledge/solutions/.gitkeep)<br>[usr/knowledge/main/.gitkeep](../../../../sources/agent0ai__agent-zero/usr/knowledge/main/.gitkeep) |
| spec | 5 | [requirements.dev.txt](../../../../sources/agent0ai__agent-zero/requirements.dev.txt)<br>[requirements.txt](../../../../sources/agent0ai__agent-zero/requirements.txt)<br>[plugins/_telegram_integration/requirements.txt](../../../../sources/agent0ai__agent-zero/plugins/_telegram_integration/requirements.txt)<br>[knowledge/main/about/architecture.md](../../../../sources/agent0ai__agent-zero/knowledge/main/about/architecture.md)<br>[docs/developer/architecture.md](../../../../sources/agent0ai__agent-zero/docs/developer/architecture.md) |
| eval | 92 | [webui/components/settings/developer/websocket-test-store.js](../../../../sources/agent0ai__agent-zero/webui/components/settings/developer/websocket-test-store.js)<br>[webui/components/settings/agent/workdir-file-structure-test.html](../../../../sources/agent0ai__agent-zero/webui/components/settings/agent/workdir-file-structure-test.html)<br>[webui/components/projects/project-file-structure-test.html](../../../../sources/agent0ai__agent-zero/webui/components/projects/project-file-structure-test.html)<br>[tests/AGENTS.md](../../../../sources/agent0ai__agent-zero/tests/AGENTS.md)<br>[tests/chunk_parser_test.py](../../../../sources/agent0ai__agent-zero/tests/chunk_parser_test.py)<br>[tests/email_parser_test.py](../../../../sources/agent0ai__agent-zero/tests/email_parser_test.py)<br>[tests/rate_limiter_test.py](../../../../sources/agent0ai__agent-zero/tests/rate_limiter_test.py)<br>[tests/test_a0_connector_computer_use_metadata.py](../../../../sources/agent0ai__agent-zero/tests/test_a0_connector_computer_use_metadata.py) |
| security | 48 | [webui/public/auth.svg](../../../../sources/agent0ai__agent-zero/webui/public/auth.svg)<br>[webui/components/settings/external/auth.html](../../../../sources/agent0ai__agent-zero/webui/components/settings/external/auth.html)<br>[tests/test_fastmcp_openapi_security.py](../../../../sources/agent0ai__agent-zero/tests/test_fastmcp_openapi_security.py)<br>[tests/test_http_auth_csrf.py](../../../../sources/agent0ai__agent-zero/tests/test_http_auth_csrf.py)<br>[tests/test_image_get_security.py](../../../../sources/agent0ai__agent-zero/tests/test_image_get_security.py)<br>[tests/test_oauth_codex.py](../../../../sources/agent0ai__agent-zero/tests/test_oauth_codex.py)<br>[tests/test_oauth_gemini_api.py](../../../../sources/agent0ai__agent-zero/tests/test_oauth_gemini_api.py)<br>[tests/test_oauth_github_copilot.py](../../../../sources/agent0ai__agent-zero/tests/test_oauth_github_copilot.py) |
| ci | 2 | [.github/workflows/close-inactive.yml](../../../../sources/agent0ai__agent-zero/.github/workflows/close-inactive.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/agent0ai__agent-zero/.github/workflows/docker-publish.yml) |
| container | 4 | [DockerfileLocal](../../../../sources/agent0ai__agent-zero/DockerfileLocal)<br>[docker/run/docker-compose.yml](../../../../sources/agent0ai__agent-zero/docker/run/docker-compose.yml)<br>[docker/run/Dockerfile](../../../../sources/agent0ai__agent-zero/docker/run/Dockerfile)<br>[docker/base/Dockerfile](../../../../sources/agent0ai__agent-zero/docker/base/Dockerfile) |
| instruction | 24 | [AGENTS.md](../../../../sources/agent0ai__agent-zero/AGENTS.md)<br>[webui/AGENTS.md](../../../../sources/agent0ai__agent-zero/webui/AGENTS.md)<br>[webui/js/AGENTS.md](../../../../sources/agent0ai__agent-zero/webui/js/AGENTS.md)<br>[webui/css/AGENTS.md](../../../../sources/agent0ai__agent-zero/webui/css/AGENTS.md)<br>[webui/components/AGENTS.md](../../../../sources/agent0ai__agent-zero/webui/components/AGENTS.md)<br>[tools/AGENTS.md](../../../../sources/agent0ai__agent-zero/tools/AGENTS.md)<br>[tests/AGENTS.md](../../../../sources/agent0ai__agent-zero/tests/AGENTS.md)<br>[skills/AGENTS.md](../../../../sources/agent0ai__agent-zero/skills/AGENTS.md) |
| docs | 224 | [README.md](../../../../sources/agent0ai__agent-zero/README.md)<br>[plugins/README.md](../../../../sources/agent0ai__agent-zero/plugins/README.md)<br>[plugins/_whisper_stt/README.md](../../../../sources/agent0ai__agent-zero/plugins/_whisper_stt/README.md)<br>[plugins/_whatsapp_integration/README.md](../../../../sources/agent0ai__agent-zero/plugins/_whatsapp_integration/README.md)<br>[plugins/_text_editor/README.md](../../../../sources/agent0ai__agent-zero/plugins/_text_editor/README.md)<br>[plugins/_telegram_integration/README.md](../../../../sources/agent0ai__agent-zero/plugins/_telegram_integration/README.md)<br>[plugins/_skills/README.md](../../../../sources/agent0ai__agent-zero/plugins/_skills/README.md)<br>[plugins/_promptinclude/README.md](../../../../sources/agent0ai__agent-zero/plugins/_promptinclude/README.md) |
| config | 5 | [requirements.dev.txt](../../../../sources/agent0ai__agent-zero/requirements.dev.txt)<br>[requirements.txt](../../../../sources/agent0ai__agent-zero/requirements.txt)<br>[requirements2.txt](../../../../sources/agent0ai__agent-zero/requirements2.txt)<br>[plugins/_whatsapp_integration/whatsapp-bridge/package.json](../../../../sources/agent0ai__agent-zero/plugins/_whatsapp_integration/whatsapp-bridge/package.json)<br>[plugins/_telegram_integration/requirements.txt](../../../../sources/agent0ai__agent-zero/plugins/_telegram_integration/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 92 | [webui/components/settings/developer/websocket-test-store.js](../../../../sources/agent0ai__agent-zero/webui/components/settings/developer/websocket-test-store.js)<br>[webui/components/settings/agent/workdir-file-structure-test.html](../../../../sources/agent0ai__agent-zero/webui/components/settings/agent/workdir-file-structure-test.html)<br>[webui/components/projects/project-file-structure-test.html](../../../../sources/agent0ai__agent-zero/webui/components/projects/project-file-structure-test.html)<br>[tests/AGENTS.md](../../../../sources/agent0ai__agent-zero/tests/AGENTS.md)<br>[tests/chunk_parser_test.py](../../../../sources/agent0ai__agent-zero/tests/chunk_parser_test.py)<br>[tests/email_parser_test.py](../../../../sources/agent0ai__agent-zero/tests/email_parser_test.py) |
| CI workflow | 2 | [.github/workflows/close-inactive.yml](../../../../sources/agent0ai__agent-zero/.github/workflows/close-inactive.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/agent0ai__agent-zero/.github/workflows/docker-publish.yml) |
| 컨테이너/배포 | 4 | [DockerfileLocal](../../../../sources/agent0ai__agent-zero/DockerfileLocal)<br>[docker/run/docker-compose.yml](../../../../sources/agent0ai__agent-zero/docker/run/docker-compose.yml)<br>[docker/run/Dockerfile](../../../../sources/agent0ai__agent-zero/docker/run/Dockerfile)<br>[docker/base/Dockerfile](../../../../sources/agent0ai__agent-zero/docker/base/Dockerfile) |
| 보안/정책 | 48 | [webui/public/auth.svg](../../../../sources/agent0ai__agent-zero/webui/public/auth.svg)<br>[webui/components/settings/external/auth.html](../../../../sources/agent0ai__agent-zero/webui/components/settings/external/auth.html)<br>[tests/test_fastmcp_openapi_security.py](../../../../sources/agent0ai__agent-zero/tests/test_fastmcp_openapi_security.py)<br>[tests/test_http_auth_csrf.py](../../../../sources/agent0ai__agent-zero/tests/test_http_auth_csrf.py)<br>[tests/test_image_get_security.py](../../../../sources/agent0ai__agent-zero/tests/test_image_get_security.py)<br>[tests/test_oauth_codex.py](../../../../sources/agent0ai__agent-zero/tests/test_oauth_codex.py) |
| 에이전트 지시문 | 24 | [AGENTS.md](../../../../sources/agent0ai__agent-zero/AGENTS.md)<br>[webui/AGENTS.md](../../../../sources/agent0ai__agent-zero/webui/AGENTS.md)<br>[webui/js/AGENTS.md](../../../../sources/agent0ai__agent-zero/webui/js/AGENTS.md)<br>[webui/css/AGENTS.md](../../../../sources/agent0ai__agent-zero/webui/css/AGENTS.md)<br>[webui/components/AGENTS.md](../../../../sources/agent0ai__agent-zero/webui/components/AGENTS.md)<br>[tools/AGENTS.md](../../../../sources/agent0ai__agent-zero/tools/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요; path scan에서 primary entrypoint가 명확하지 않음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `webui/public/mcp_client.svg`, `webui/public/mcp_server.svg`, `webui/components/settings/mcp/mcp_client.html`.
2. agent/tool runtime 매핑: `agent.py`, `AGENTS.md`, `webui/AGENTS.md`.
3. retrieval/memory/indexing 확인: `webui/index.css`, `webui/index.html`, `webui/index.js`.
4. test/eval 파일로 동작 검증: `webui/components/settings/developer/websocket-test-store.js`, `webui/components/settings/agent/workdir-file-structure-test.html`, `webui/components/projects/project-file-structure-test.html`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Agent Zero AI framework. 핵심 구조 신호는 Python, requirements.txt, README.md, AGENTS.md, LICENSE, openai이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
