# zhayujie/CowAgent 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Open-source super AI assistant & Agent Harness. Plans tasks, runs tools and skills, self-evolves with memory and knowledge. Multi-model, multi-channel. Lightweight, extensible, one-line install. (formerly chatgpt-on-wechat)

## 요약

- 조사 단위: `sources/zhayujie__CowAgent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 613 files, 142 directories, depth score 121, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=docs/zh/tools/mcp.mdx, docs/tools/mcp.mdx, docs/ja/tools/mcp.mdx이고, 의존성 단서는 click, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | zhayujie/CowAgent |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 45383 |
| Forks | 10206 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/zhayujie__CowAgent](../../../../sources/zhayujie__CowAgent) |
| 기존 보고서 | [reports/global-trending/repositories/zhayujie__CowAgent.md](../../../global-trending/repositories/zhayujie__CowAgent.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 613 / 142 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, agent, bridge, channel, cli, common, docker, docs, models, plugins, scripts, skills, tests, translate, voice |
| 상위 확장자 | .py: 284, .mdx: 240, .md: 26, .template: 13, .svg: 12, .yml: 7, .sh: 6, (none): 5, .json: 4, .jpg: 3, .ico: 2, .js: 2 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 107 |
| tests | validation surface | 20 |
| .github | ci surface | 1 |
| agent | top-level component | 1 |
| bridge | top-level component | 1 |
| channel | top-level component | 1 |
| cli | top-level component | 1 |
| common | top-level component | 1 |
| docker | documentation surface | 1 |
| models | top-level component | 1 |
| plugins | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| translate | top-level component | 1 |
| voice | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | cow | cow |


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
| mcp | [docs/zh/tools/mcp.mdx](../../../../sources/zhayujie__CowAgent/docs/zh/tools/mcp.mdx) | mcp signal |
| mcp | [docs/tools/mcp.mdx](../../../../sources/zhayujie__CowAgent/docs/tools/mcp.mdx) | mcp signal |
| mcp | [docs/ja/tools/mcp.mdx](../../../../sources/zhayujie__CowAgent/docs/ja/tools/mcp.mdx) | mcp signal |
| mcp | [agent/tools/mcp/__init__.py](../../../../sources/zhayujie__CowAgent/agent/tools/mcp/__init__.py) | mcp signal |
| agentRuntime | [skills/README.md](../../../../sources/zhayujie__CowAgent/skills/README.md) | agentRuntime signal |
| agentRuntime | [skills/skill-creator/SKILL.md](../../../../sources/zhayujie__CowAgent/skills/skill-creator/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/skill-creator/scripts/init_skill.py](../../../../sources/zhayujie__CowAgent/skills/skill-creator/scripts/init_skill.py) | agentRuntime signal |
| agentRuntime | [skills/skill-creator/scripts/package_skill.py](../../../../sources/zhayujie__CowAgent/skills/skill-creator/scripts/package_skill.py) | agentRuntime signal |
| entrypoints | [cli/__main__.py](../../../../sources/zhayujie__CowAgent/cli/__main__.py) | entrypoints signal |
| instruction | [docs/zh/models/claude.mdx](../../../../sources/zhayujie__CowAgent/docs/zh/models/claude.mdx) | instruction signal |
| instruction | [docs/zh/models/gemini.mdx](../../../../sources/zhayujie__CowAgent/docs/zh/models/gemini.mdx) | instruction signal |
| instruction | [docs/models/claude.mdx](../../../../sources/zhayujie__CowAgent/docs/models/claude.mdx) | instruction signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [cli/__main__.py](../../../../sources/zhayujie__CowAgent/cli/__main__.py) |
| agentRuntime | 191 | [skills/README.md](../../../../sources/zhayujie__CowAgent/skills/README.md)<br>[skills/skill-creator/SKILL.md](../../../../sources/zhayujie__CowAgent/skills/skill-creator/SKILL.md)<br>[skills/skill-creator/scripts/init_skill.py](../../../../sources/zhayujie__CowAgent/skills/skill-creator/scripts/init_skill.py)<br>[skills/skill-creator/scripts/package_skill.py](../../../../sources/zhayujie__CowAgent/skills/skill-creator/scripts/package_skill.py)<br>[skills/skill-creator/scripts/quick_validate.py](../../../../sources/zhayujie__CowAgent/skills/skill-creator/scripts/quick_validate.py)<br>[skills/knowledge-wiki/SKILL.md](../../../../sources/zhayujie__CowAgent/skills/knowledge-wiki/SKILL.md)<br>[skills/image-generation/SKILL.md](../../../../sources/zhayujie__CowAgent/skills/image-generation/SKILL.md)<br>[skills/image-generation/scripts/generate.py](../../../../sources/zhayujie__CowAgent/skills/image-generation/scripts/generate.py) |
| mcp | 6 | [docs/zh/tools/mcp.mdx](../../../../sources/zhayujie__CowAgent/docs/zh/tools/mcp.mdx)<br>[docs/tools/mcp.mdx](../../../../sources/zhayujie__CowAgent/docs/tools/mcp.mdx)<br>[docs/ja/tools/mcp.mdx](../../../../sources/zhayujie__CowAgent/docs/ja/tools/mcp.mdx)<br>[agent/tools/mcp/__init__.py](../../../../sources/zhayujie__CowAgent/agent/tools/mcp/__init__.py)<br>[agent/tools/mcp/mcp_client.py](../../../../sources/zhayujie__CowAgent/agent/tools/mcp/mcp_client.py)<br>[agent/tools/mcp/mcp_tool.py](../../../../sources/zhayujie__CowAgent/agent/tools/mcp/mcp_tool.py) |
| retrieval | 65 | [tests/test_knowledge_service.py](../../../../sources/zhayujie__CowAgent/tests/test_knowledge_service.py)<br>[tests/test_knowledge_web.py](../../../../sources/zhayujie__CowAgent/tests/test_knowledge_web.py)<br>[skills/knowledge-wiki/SKILL.md](../../../../sources/zhayujie__CowAgent/skills/knowledge-wiki/SKILL.md)<br>[docs/zh/tools/index.mdx](../../../../sources/zhayujie__CowAgent/docs/zh/tools/index.mdx)<br>[docs/zh/tools/memory.mdx](../../../../sources/zhayujie__CowAgent/docs/zh/tools/memory.mdx)<br>[docs/zh/skills/index.mdx](../../../../sources/zhayujie__CowAgent/docs/zh/skills/index.mdx)<br>[docs/zh/skills/knowledge-wiki.mdx](../../../../sources/zhayujie__CowAgent/docs/zh/skills/knowledge-wiki.mdx)<br>[docs/zh/models/index.mdx](../../../../sources/zhayujie__CowAgent/docs/zh/models/index.mdx) |
| spec | 5 | [requirements-optional.txt](../../../../sources/zhayujie__CowAgent/requirements-optional.txt)<br>[requirements.txt](../../../../sources/zhayujie__CowAgent/requirements.txt)<br>[docs/zh/intro/architecture.mdx](../../../../sources/zhayujie__CowAgent/docs/zh/intro/architecture.mdx)<br>[docs/ja/intro/architecture.mdx](../../../../sources/zhayujie__CowAgent/docs/ja/intro/architecture.mdx)<br>[docs/intro/architecture.mdx](../../../../sources/zhayujie__CowAgent/docs/intro/architecture.mdx) |
| eval | 17 | [tests/test_bash_streaming.py](../../../../sources/zhayujie__CowAgent/tests/test_bash_streaming.py)<br>[tests/test_custom_provider_handlers.py](../../../../sources/zhayujie__CowAgent/tests/test_custom_provider_handlers.py)<br>[tests/test_custom_provider.py](../../../../sources/zhayujie__CowAgent/tests/test_custom_provider.py)<br>[tests/test_dashscope_provider.py](../../../../sources/zhayujie__CowAgent/tests/test_dashscope_provider.py)<br>[tests/test_evolution.py](../../../../sources/zhayujie__CowAgent/tests/test_evolution.py)<br>[tests/test_invariant_bash.py](../../../../sources/zhayujie__CowAgent/tests/test_invariant_bash.py)<br>[tests/test_knowledge_service.py](../../../../sources/zhayujie__CowAgent/tests/test_knowledge_service.py)<br>[tests/test_knowledge_web.py](../../../../sources/zhayujie__CowAgent/tests/test_knowledge_web.py) |
| security | 2 | [tests/test_security_ssrf_path_traversal.py](../../../../sources/zhayujie__CowAgent/tests/test_security_ssrf_path_traversal.py)<br>[tests/test_security_ssrf_web_fetch.py](../../../../sources/zhayujie__CowAgent/tests/test_security_ssrf_web_fetch.py) |
| ci | 3 | [.github/workflows/deploy-image-arm.yml](../../../../sources/zhayujie__CowAgent/.github/workflows/deploy-image-arm.yml)<br>[.github/workflows/deploy-image.yml](../../../../sources/zhayujie__CowAgent/.github/workflows/deploy-image.yml)<br>[.github/workflows/test-windows-bash.yml](../../../../sources/zhayujie__CowAgent/.github/workflows/test-windows-bash.yml) |
| container | 3 | [Dockerfile](../../../../sources/zhayujie__CowAgent/Dockerfile)<br>[docker/docker-compose.yml](../../../../sources/zhayujie__CowAgent/docker/docker-compose.yml)<br>[docker/Dockerfile.latest](../../../../sources/zhayujie__CowAgent/docker/Dockerfile.latest) |
| instruction | 6 | [docs/zh/models/claude.mdx](../../../../sources/zhayujie__CowAgent/docs/zh/models/claude.mdx)<br>[docs/zh/models/gemini.mdx](../../../../sources/zhayujie__CowAgent/docs/zh/models/gemini.mdx)<br>[docs/models/claude.mdx](../../../../sources/zhayujie__CowAgent/docs/models/claude.mdx)<br>[docs/models/gemini.mdx](../../../../sources/zhayujie__CowAgent/docs/models/gemini.mdx)<br>[docs/ja/models/claude.mdx](../../../../sources/zhayujie__CowAgent/docs/ja/models/claude.mdx)<br>[docs/ja/models/gemini.mdx](../../../../sources/zhayujie__CowAgent/docs/ja/models/gemini.mdx) |
| docs | 265 | [README.md](../../../../sources/zhayujie__CowAgent/README.md)<br>[voice/baidu/README.md](../../../../sources/zhayujie__CowAgent/voice/baidu/README.md)<br>[skills/README.md](../../../../sources/zhayujie__CowAgent/skills/README.md)<br>[plugins/README.md](../../../../sources/zhayujie__CowAgent/plugins/README.md)<br>[plugins/tool/README.md](../../../../sources/zhayujie__CowAgent/plugins/tool/README.md)<br>[plugins/role/README.md](../../../../sources/zhayujie__CowAgent/plugins/role/README.md)<br>[plugins/linkai/README.md](../../../../sources/zhayujie__CowAgent/plugins/linkai/README.md)<br>[plugins/keyword/README.md](../../../../sources/zhayujie__CowAgent/plugins/keyword/README.md) |
| config | 3 | [pyproject.toml](../../../../sources/zhayujie__CowAgent/pyproject.toml)<br>[requirements-optional.txt](../../../../sources/zhayujie__CowAgent/requirements-optional.txt)<br>[requirements.txt](../../../../sources/zhayujie__CowAgent/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 17 | [tests/test_bash_streaming.py](../../../../sources/zhayujie__CowAgent/tests/test_bash_streaming.py)<br>[tests/test_custom_provider_handlers.py](../../../../sources/zhayujie__CowAgent/tests/test_custom_provider_handlers.py)<br>[tests/test_custom_provider.py](../../../../sources/zhayujie__CowAgent/tests/test_custom_provider.py)<br>[tests/test_dashscope_provider.py](../../../../sources/zhayujie__CowAgent/tests/test_dashscope_provider.py)<br>[tests/test_evolution.py](../../../../sources/zhayujie__CowAgent/tests/test_evolution.py)<br>[tests/test_invariant_bash.py](../../../../sources/zhayujie__CowAgent/tests/test_invariant_bash.py) |
| CI workflow | 3 | [.github/workflows/deploy-image-arm.yml](../../../../sources/zhayujie__CowAgent/.github/workflows/deploy-image-arm.yml)<br>[.github/workflows/deploy-image.yml](../../../../sources/zhayujie__CowAgent/.github/workflows/deploy-image.yml)<br>[.github/workflows/test-windows-bash.yml](../../../../sources/zhayujie__CowAgent/.github/workflows/test-windows-bash.yml) |
| 컨테이너/배포 | 3 | [Dockerfile](../../../../sources/zhayujie__CowAgent/Dockerfile)<br>[docker/docker-compose.yml](../../../../sources/zhayujie__CowAgent/docker/docker-compose.yml)<br>[docker/Dockerfile.latest](../../../../sources/zhayujie__CowAgent/docker/Dockerfile.latest) |
| 보안/정책 | 2 | [tests/test_security_ssrf_path_traversal.py](../../../../sources/zhayujie__CowAgent/tests/test_security_ssrf_path_traversal.py)<br>[tests/test_security_ssrf_web_fetch.py](../../../../sources/zhayujie__CowAgent/tests/test_security_ssrf_web_fetch.py) |
| 에이전트 지시문 | 6 | [docs/zh/models/claude.mdx](../../../../sources/zhayujie__CowAgent/docs/zh/models/claude.mdx)<br>[docs/zh/models/gemini.mdx](../../../../sources/zhayujie__CowAgent/docs/zh/models/gemini.mdx)<br>[docs/models/claude.mdx](../../../../sources/zhayujie__CowAgent/docs/models/claude.mdx)<br>[docs/models/gemini.mdx](../../../../sources/zhayujie__CowAgent/docs/models/gemini.mdx)<br>[docs/ja/models/claude.mdx](../../../../sources/zhayujie__CowAgent/docs/ja/models/claude.mdx)<br>[docs/ja/models/gemini.mdx](../../../../sources/zhayujie__CowAgent/docs/ja/models/gemini.mdx) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `docs/zh/tools/mcp.mdx`, `docs/tools/mcp.mdx`, `docs/ja/tools/mcp.mdx`.
2. entrypoint를 따라 실행 흐름 확인: `cli/__main__.py`.
3. agent/tool runtime 매핑: `skills/README.md`, `skills/skill-creator/SKILL.md`, `skills/skill-creator/scripts/init_skill.py`.
4. retrieval/memory/indexing 확인: `tests/test_knowledge_service.py`, `tests/test_knowledge_web.py`, `skills/knowledge-wiki/SKILL.md`.
5. test/eval 파일로 동작 검증: `tests/test_bash_streaming.py`, `tests/test_custom_provider_handlers.py`, `tests/test_custom_provider.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Open source super AI assistant & Agent Harness. Plans tasks, runs tools and skills, self evolves with memory and knowled. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, Dockerfile, README.md, LICENSE이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
