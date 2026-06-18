# alibaizhanov/mengram 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Human-like memory for AI agents — semantic, episodic & procedural. Experience-driven procedures that learn from failures. Free API, Python & JS SDKs, LangChain, CrewAI & OpenClaw integrations.

## 요약

- 조사 단위: `sources/alibaizhanov__mengram` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 154 files, 38 directories, depth score 103, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=integrations/claude-code-plugin/.mcp.json, api/cloud_mcp_server.py, api/mcp_server.py이고, 의존성 단서는 openai, anthropic, claude, mcp, langchain, fastapi, 검증/운영 단서는 test/eval 경로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | alibaizhanov/mengram |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 178 |
| Forks | 27 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/alibaizhanov__mengram](../../../../sources/alibaizhanov__mengram) |
| 기존 보고서 | [reports/global-trending/repositories/alibaizhanov__mengram.md](../../../global-trending/repositories/alibaizhanov__mengram.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 154 / 38 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .claude-plugin, .github, api, benchmarks, blog, cloud, engine, examples, integrations, obsidian-plugin, sdk, tests, vscode-mengram |
| 상위 확장자 | .py: 51, .md: 19, .json: 15, .ts: 13, .html: 12, (none): 10, .sh: 8, .txt: 5, .js: 4, .css: 3, .example: 3, .yml: 3 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 5 |
| examples/customer-support-agent | examples workspace | 4 |
| examples/devops-agent | examples workspace | 4 |
| examples/personal-assistant | examples workspace | 4 |
| api | source boundary | 3 |
| examples/n8n | examples workspace | 2 |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |
| blog | top-level component | 1 |
| cloud | top-level component | 1 |
| engine | top-level component | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| integrations | top-level component | 1 |
| obsidian-plugin | top-level component | 1 |
| sdk | top-level component | 1 |
| vscode-mengram | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | mengram | mengram |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic, claude |
| agentProtocols | mcp |
| agentFrameworks | langchain |
| vectorStores | 없음 |
| modelRuntime | transformers |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [integrations/claude-code-plugin/.mcp.json](../../../../sources/alibaizhanov__mengram/integrations/claude-code-plugin/.mcp.json) | mcp signal |
| mcp | [api/cloud_mcp_server.py](../../../../sources/alibaizhanov__mengram/api/cloud_mcp_server.py) | mcp signal |
| mcp | [api/mcp_server.py](../../../../sources/alibaizhanov__mengram/api/mcp_server.py) | mcp signal |
| agentRuntime | [integrations/openclaw/SKILL.md](../../../../sources/alibaizhanov__mengram/integrations/openclaw/SKILL.md) | agentRuntime signal |
| agentRuntime | [integrations/claude-code-plugin/skills/memory/SKILL.md](../../../../sources/alibaizhanov__mengram/integrations/claude-code-plugin/skills/memory/SKILL.md) | agentRuntime signal |
| agentRuntime | [integrations/claude-code-plugin/hooks/hooks.json](../../../../sources/alibaizhanov__mengram/integrations/claude-code-plugin/hooks/hooks.json) | agentRuntime signal |
| agentRuntime | [integrations/claude-code-plugin/hooks/scripts/load-profile.sh](../../../../sources/alibaizhanov__mengram/integrations/claude-code-plugin/hooks/scripts/load-profile.sh) | agentRuntime signal |
| entrypoints | [vscode-mengram/media/main.js](../../../../sources/alibaizhanov__mengram/vscode-mengram/media/main.js) | entrypoints signal |
| entrypoints | [obsidian-plugin/src/main.ts](../../../../sources/alibaizhanov__mengram/obsidian-plugin/src/main.ts) | entrypoints signal |
| entrypoints | [examples/personal-assistant/main.py](../../../../sources/alibaizhanov__mengram/examples/personal-assistant/main.py) | entrypoints signal |
| entrypoints | [examples/devops-agent/main.py](../../../../sources/alibaizhanov__mengram/examples/devops-agent/main.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/alibaizhanov__mengram/pyproject.toml) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 5 | [vscode-mengram/media/main.js](../../../../sources/alibaizhanov__mengram/vscode-mengram/media/main.js)<br>[obsidian-plugin/src/main.ts](../../../../sources/alibaizhanov__mengram/obsidian-plugin/src/main.ts)<br>[examples/personal-assistant/main.py](../../../../sources/alibaizhanov__mengram/examples/personal-assistant/main.py)<br>[examples/devops-agent/main.py](../../../../sources/alibaizhanov__mengram/examples/devops-agent/main.py)<br>[examples/customer-support-agent/main.py](../../../../sources/alibaizhanov__mengram/examples/customer-support-agent/main.py) |
| agentRuntime | 6 | [integrations/openclaw/SKILL.md](../../../../sources/alibaizhanov__mengram/integrations/openclaw/SKILL.md)<br>[integrations/claude-code-plugin/skills/memory/SKILL.md](../../../../sources/alibaizhanov__mengram/integrations/claude-code-plugin/skills/memory/SKILL.md)<br>[integrations/claude-code-plugin/hooks/hooks.json](../../../../sources/alibaizhanov__mengram/integrations/claude-code-plugin/hooks/hooks.json)<br>[integrations/claude-code-plugin/hooks/scripts/load-profile.sh](../../../../sources/alibaizhanov__mengram/integrations/claude-code-plugin/hooks/scripts/load-profile.sh)<br>[integrations/claude-code-plugin/hooks/scripts/save-conversation.sh](../../../../sources/alibaizhanov__mengram/integrations/claude-code-plugin/hooks/scripts/save-conversation.sh)<br>[cloud/agent-install.txt](../../../../sources/alibaizhanov__mengram/cloud/agent-install.txt) |
| mcp | 3 | [integrations/claude-code-plugin/.mcp.json](../../../../sources/alibaizhanov__mengram/integrations/claude-code-plugin/.mcp.json)<br>[api/cloud_mcp_server.py](../../../../sources/alibaizhanov__mengram/api/cloud_mcp_server.py)<br>[api/mcp_server.py](../../../../sources/alibaizhanov__mengram/api/mcp_server.py) |
| retrieval | 16 | [sdk/js/index.d.ts](../../../../sources/alibaizhanov__mengram/sdk/js/index.d.ts)<br>[sdk/js/index.js](../../../../sources/alibaizhanov__mengram/sdk/js/index.js)<br>[sdk/js/index.test.js](../../../../sources/alibaizhanov__mengram/sdk/js/index.test.js)<br>[integrations/crewai_memory.py](../../../../sources/alibaizhanov__mengram/integrations/crewai_memory.py)<br>[integrations/claude-code-plugin/skills/memory/SKILL.md](../../../../sources/alibaizhanov__mengram/integrations/claude-code-plugin/skills/memory/SKILL.md)<br>[examples/n8n/mengram-memory-agent.json](../../../../sources/alibaizhanov__mengram/examples/n8n/mengram-memory-agent.json)<br>[engine/vector/__init__.py](../../../../sources/alibaizhanov__mengram/engine/vector/__init__.py)<br>[engine/vector/embedder.py](../../../../sources/alibaizhanov__mengram/engine/vector/embedder.py) |
| spec | 5 | [ARCHITECTURE.md](../../../../sources/alibaizhanov__mengram/ARCHITECTURE.md)<br>[requirements.txt](../../../../sources/alibaizhanov__mengram/requirements.txt)<br>[examples/personal-assistant/requirements.txt](../../../../sources/alibaizhanov__mengram/examples/personal-assistant/requirements.txt)<br>[examples/devops-agent/requirements.txt](../../../../sources/alibaizhanov__mengram/examples/devops-agent/requirements.txt)<br>[examples/customer-support-agent/requirements.txt](../../../../sources/alibaizhanov__mengram/examples/customer-support-agent/requirements.txt) |
| eval | 6 | [tests/__init__.py](../../../../sources/alibaizhanov__mengram/tests/__init__.py)<br>[tests/test_client.py](../../../../sources/alibaizhanov__mengram/tests/test_client.py)<br>[tests/test_importer.py](../../../../sources/alibaizhanov__mengram/tests/test_importer.py)<br>[tests/test_parser.py](../../../../sources/alibaizhanov__mengram/tests/test_parser.py)<br>[sdk/js/index.test.js](../../../../sources/alibaizhanov__mengram/sdk/js/index.test.js)<br>[benchmarks/locomo_bench.py](../../../../sources/alibaizhanov__mengram/benchmarks/locomo_bench.py) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 4 | [docker-compose.yml](../../../../sources/alibaizhanov__mengram/docker-compose.yml)<br>[Dockerfile.selfhost](../../../../sources/alibaizhanov__mengram/Dockerfile.selfhost)<br>[cloud/docker-compose.yml](../../../../sources/alibaizhanov__mengram/cloud/docker-compose.yml)<br>[cloud/Dockerfile](../../../../sources/alibaizhanov__mengram/cloud/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 12 | [README.md](../../../../sources/alibaizhanov__mengram/README.md)<br>[vscode-mengram/README.md](../../../../sources/alibaizhanov__mengram/vscode-mengram/README.md)<br>[sdk/langchain-mengram/README.md](../../../../sources/alibaizhanov__mengram/sdk/langchain-mengram/README.md)<br>[sdk/js/README.md](../../../../sources/alibaizhanov__mengram/sdk/js/README.md)<br>[obsidian-plugin/README.md](../../../../sources/alibaizhanov__mengram/obsidian-plugin/README.md)<br>[integrations/openclaw/README.md](../../../../sources/alibaizhanov__mengram/integrations/openclaw/README.md)<br>[integrations/claude-code-plugin/README.md](../../../../sources/alibaizhanov__mengram/integrations/claude-code-plugin/README.md)<br>[examples/README.md](../../../../sources/alibaizhanov__mengram/examples/README.md) |
| config | 11 | [pyproject.toml](../../../../sources/alibaizhanov__mengram/pyproject.toml)<br>[requirements.txt](../../../../sources/alibaizhanov__mengram/requirements.txt)<br>[vscode-mengram/package.json](../../../../sources/alibaizhanov__mengram/vscode-mengram/package.json)<br>[vscode-mengram/tsconfig.json](../../../../sources/alibaizhanov__mengram/vscode-mengram/tsconfig.json)<br>[sdk/langchain-mengram/pyproject.toml](../../../../sources/alibaizhanov__mengram/sdk/langchain-mengram/pyproject.toml)<br>[sdk/js/package.json](../../../../sources/alibaizhanov__mengram/sdk/js/package.json)<br>[obsidian-plugin/package.json](../../../../sources/alibaizhanov__mengram/obsidian-plugin/package.json)<br>[obsidian-plugin/tsconfig.json](../../../../sources/alibaizhanov__mengram/obsidian-plugin/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 6 | [tests/__init__.py](../../../../sources/alibaizhanov__mengram/tests/__init__.py)<br>[tests/test_client.py](../../../../sources/alibaizhanov__mengram/tests/test_client.py)<br>[tests/test_importer.py](../../../../sources/alibaizhanov__mengram/tests/test_importer.py)<br>[tests/test_parser.py](../../../../sources/alibaizhanov__mengram/tests/test_parser.py)<br>[sdk/js/index.test.js](../../../../sources/alibaizhanov__mengram/sdk/js/index.test.js)<br>[benchmarks/locomo_bench.py](../../../../sources/alibaizhanov__mengram/benchmarks/locomo_bench.py) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 4 | [docker-compose.yml](../../../../sources/alibaizhanov__mengram/docker-compose.yml)<br>[Dockerfile.selfhost](../../../../sources/alibaizhanov__mengram/Dockerfile.selfhost)<br>[cloud/docker-compose.yml](../../../../sources/alibaizhanov__mengram/cloud/docker-compose.yml)<br>[cloud/Dockerfile](../../../../sources/alibaizhanov__mengram/cloud/Dockerfile) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `integrations/claude-code-plugin/.mcp.json`, `api/cloud_mcp_server.py`, `api/mcp_server.py`.
2. entrypoint를 따라 실행 흐름 확인: `vscode-mengram/media/main.js`, `obsidian-plugin/src/main.ts`, `examples/personal-assistant/main.py`.
3. agent/tool runtime 매핑: `integrations/openclaw/SKILL.md`, `integrations/claude-code-plugin/skills/memory/SKILL.md`, `integrations/claude-code-plugin/hooks/hooks.json`.
4. retrieval/memory/indexing 확인: `sdk/js/index.d.ts`, `sdk/js/index.js`, `sdk/js/index.test.js`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/test_client.py`, `tests/test_importer.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Human like memory for AI agents — semantic, episodic & procedural. Experience driven procedures that learn from failures. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, docker-compose.yml, README.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
