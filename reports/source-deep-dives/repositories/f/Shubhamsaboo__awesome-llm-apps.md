# Shubhamsaboo/awesome-llm-apps 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

100+ AI Agent & RAG apps you can actually run — clone, customize, ship.

## 요약

- 조사 단위: `sources/Shubhamsaboo__awesome-llm-apps` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,751 files, 506 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp_ai_agents/notion_mcp_agent/notion_mcp_agent.py, mcp_ai_agents/notion_mcp_agent/README.md, mcp_ai_agents/notion_mcp_agent/requirements.txt이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Shubhamsaboo/awesome-llm-apps |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 114877 |
| Forks | 17043 |
| License | Apache-2.0 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Shubhamsaboo__awesome-llm-apps](../../../../sources/Shubhamsaboo__awesome-llm-apps) |
| 기존 보고서 | [reports/llm-wiki/repositories/Shubhamsaboo__awesome-llm-apps.md](../../../llm-wiki/repositories/Shubhamsaboo__awesome-llm-apps.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1751 / 506 |
| 관측 최대 깊이 | 11 |
| 상위 디렉터리 | .github, advanced_ai_agents, advanced_llm_apps, ai_agent_framework_crash_course, always_on_agents, awesome_agent_skills, docs, generative_ui_agents, mcp_ai_agents, rag_tutorials, starter_ai_agents, voice_ai_agents |
| 상위 확장자 | .py: 503, .md: 283, .tsx: 204, .txt: 158, .ts: 93, .jpg: 78, .json: 77, .example: 61, .js: 53, .png: 44, (none): 43, .svg: 26 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| advanced_ai_agents | top-level component | 1 |
| advanced_llm_apps | source boundary | 1 |
| ai_agent_framework_crash_course | top-level component | 1 |
| always_on_agents | top-level component | 1 |
| awesome_agent_skills | top-level component | 1 |
| docs | documentation surface | 1 |
| generative_ui_agents | top-level component | 1 |
| mcp_ai_agents | top-level component | 1 |
| rag_tutorials | top-level component | 1 |
| starter_ai_agents | top-level component | 1 |
| voice_ai_agents | top-level component | 1 |


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
| mcp | [mcp_ai_agents/notion_mcp_agent/notion_mcp_agent.py](../../../../sources/Shubhamsaboo__awesome-llm-apps/mcp_ai_agents/notion_mcp_agent/notion_mcp_agent.py) | mcp signal |
| mcp | [mcp_ai_agents/notion_mcp_agent/README.md](../../../../sources/Shubhamsaboo__awesome-llm-apps/mcp_ai_agents/notion_mcp_agent/README.md) | mcp signal |
| mcp | [mcp_ai_agents/notion_mcp_agent/requirements.txt](../../../../sources/Shubhamsaboo__awesome-llm-apps/mcp_ai_agents/notion_mcp_agent/requirements.txt) | mcp signal |
| mcp | [mcp_ai_agents/multi_mcp_agent_router/agent_forge.py](../../../../sources/Shubhamsaboo__awesome-llm-apps/mcp_ai_agents/multi_mcp_agent_router/agent_forge.py) | mcp signal |
| agentRuntime | [voice_ai_agents/insurance_claim_live_agent_team/agent.py](../../../../sources/Shubhamsaboo__awesome-llm-apps/voice_ai_agents/insurance_claim_live_agent_team/agent.py) | agentRuntime signal |
| agentRuntime | [voice_ai_agents/ai_audio_tour_agent/agent.py](../../../../sources/Shubhamsaboo__awesome-llm-apps/voice_ai_agents/ai_audio_tour_agent/agent.py) | agentRuntime signal |
| agentRuntime | [rag_tutorials/multimodal_agentic_rag/backend/agentic_rag_agent/agent.py](../../../../sources/Shubhamsaboo__awesome-llm-apps/rag_tutorials/multimodal_agentic_rag/backend/agentic_rag_agent/agent.py) | agentRuntime signal |
| entrypoints | [voice_ai_agents/insurance_claim_live_agent_team/live_demo/server.py](../../../../sources/Shubhamsaboo__awesome-llm-apps/voice_ai_agents/insurance_claim_live_agent_team/live_demo/server.py) | entrypoints signal |
| entrypoints | [rag_tutorials/multimodal_agentic_rag/frontend/src/App.tsx](../../../../sources/Shubhamsaboo__awesome-llm-apps/rag_tutorials/multimodal_agentic_rag/frontend/src/App.tsx) | entrypoints signal |
| entrypoints | [rag_tutorials/multimodal_agentic_rag/frontend/src/main.tsx](../../../../sources/Shubhamsaboo__awesome-llm-apps/rag_tutorials/multimodal_agentic_rag/frontend/src/main.tsx) | entrypoints signal |
| entrypoints | [rag_tutorials/multimodal_agentic_rag/backend/server.py](../../../../sources/Shubhamsaboo__awesome-llm-apps/rag_tutorials/multimodal_agentic_rag/backend/server.py) | entrypoints signal |
| instruction | [generative_ui_agents/generative-ui-starter-project/CLAUDE.md](../../../../sources/Shubhamsaboo__awesome-llm-apps/generative_ui_agents/generative-ui-starter-project/CLAUDE.md) | instruction signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 112 | [voice_ai_agents/insurance_claim_live_agent_team/live_demo/server.py](../../../../sources/Shubhamsaboo__awesome-llm-apps/voice_ai_agents/insurance_claim_live_agent_team/live_demo/server.py)<br>[rag_tutorials/multimodal_agentic_rag/frontend/src/App.tsx](../../../../sources/Shubhamsaboo__awesome-llm-apps/rag_tutorials/multimodal_agentic_rag/frontend/src/App.tsx)<br>[rag_tutorials/multimodal_agentic_rag/frontend/src/main.tsx](../../../../sources/Shubhamsaboo__awesome-llm-apps/rag_tutorials/multimodal_agentic_rag/frontend/src/main.tsx)<br>[rag_tutorials/multimodal_agentic_rag/backend/server.py](../../../../sources/Shubhamsaboo__awesome-llm-apps/rag_tutorials/multimodal_agentic_rag/backend/server.py)<br>[rag_tutorials/hybrid_search_rag/main.py](../../../../sources/Shubhamsaboo__awesome-llm-apps/rag_tutorials/hybrid_search_rag/main.py)<br>[mcp_ai_agents/browser_mcp_agent/main.py](../../../../sources/Shubhamsaboo__awesome-llm-apps/mcp_ai_agents/browser_mcp_agent/main.py)<br>[generative_ui_agents/mcp-apps-generative-ui-showcase/mcp-server/server.ts](../../../../sources/Shubhamsaboo__awesome-llm-apps/generative_ui_agents/mcp-apps-generative-ui-showcase/mcp-server/server.ts)<br>[generative_ui_agents/generative-ui-starter-project/agent/main.py](../../../../sources/Shubhamsaboo__awesome-llm-apps/generative_ui_agents/generative-ui-starter-project/agent/main.py) |
| agentRuntime | 408 | [voice_ai_agents/insurance_claim_live_agent_team/agent.py](../../../../sources/Shubhamsaboo__awesome-llm-apps/voice_ai_agents/insurance_claim_live_agent_team/agent.py)<br>[voice_ai_agents/ai_audio_tour_agent/agent.py](../../../../sources/Shubhamsaboo__awesome-llm-apps/voice_ai_agents/ai_audio_tour_agent/agent.py)<br>[rag_tutorials/multimodal_agentic_rag/backend/agentic_rag_agent/agent.py](../../../../sources/Shubhamsaboo__awesome-llm-apps/rag_tutorials/multimodal_agentic_rag/backend/agentic_rag_agent/agent.py)<br>[mcp_ai_agents/multi_mcp_agent_router/agent_forge.py](../../../../sources/Shubhamsaboo__awesome-llm-apps/mcp_ai_agents/multi_mcp_agent_router/agent_forge.py)<br>[generative_ui_agents/mcp-apps-generative-ui-showcase/src/hooks/use-media-query.ts](../../../../sources/Shubhamsaboo__awesome-llm-apps/generative_ui_agents/mcp-apps-generative-ui-showcase/src/hooks/use-media-query.ts)<br>[generative_ui_agents/mcp-apps-generative-ui-showcase/public/sandbox.html](../../../../sources/Shubhamsaboo__awesome-llm-apps/generative_ui_agents/mcp-apps-generative-ui-showcase/public/sandbox.html)<br>[generative_ui_agents/generative-ui-starter-project/src/hooks/index.ts](../../../../sources/Shubhamsaboo__awesome-llm-apps/generative_ui_agents/generative-ui-starter-project/src/hooks/index.ts)<br>[generative_ui_agents/generative-ui-starter-project/src/hooks/use-example-suggestions.tsx](../../../../sources/Shubhamsaboo__awesome-llm-apps/generative_ui_agents/generative-ui-starter-project/src/hooks/use-example-suggestions.tsx) |
| mcp | 227 | [mcp_ai_agents/notion_mcp_agent/notion_mcp_agent.py](../../../../sources/Shubhamsaboo__awesome-llm-apps/mcp_ai_agents/notion_mcp_agent/notion_mcp_agent.py)<br>[mcp_ai_agents/notion_mcp_agent/README.md](../../../../sources/Shubhamsaboo__awesome-llm-apps/mcp_ai_agents/notion_mcp_agent/README.md)<br>[mcp_ai_agents/notion_mcp_agent/requirements.txt](../../../../sources/Shubhamsaboo__awesome-llm-apps/mcp_ai_agents/notion_mcp_agent/requirements.txt)<br>[mcp_ai_agents/multi_mcp_agent_router/agent_forge.py](../../../../sources/Shubhamsaboo__awesome-llm-apps/mcp_ai_agents/multi_mcp_agent_router/agent_forge.py)<br>[mcp_ai_agents/multi_mcp_agent_router/README.md](../../../../sources/Shubhamsaboo__awesome-llm-apps/mcp_ai_agents/multi_mcp_agent_router/README.md)<br>[mcp_ai_agents/multi_mcp_agent_router/requirements.txt](../../../../sources/Shubhamsaboo__awesome-llm-apps/mcp_ai_agents/multi_mcp_agent_router/requirements.txt)<br>[mcp_ai_agents/multi_mcp_agent/multi_mcp_agent.py](../../../../sources/Shubhamsaboo__awesome-llm-apps/mcp_ai_agents/multi_mcp_agent/multi_mcp_agent.py)<br>[mcp_ai_agents/multi_mcp_agent/README.md](../../../../sources/Shubhamsaboo__awesome-llm-apps/mcp_ai_agents/multi_mcp_agent/README.md) |
| retrieval | 154 | [voice_ai_agents/voice_rag_openaisdk/rag_voice.py](../../../../sources/Shubhamsaboo__awesome-llm-apps/voice_ai_agents/voice_rag_openaisdk/rag_voice.py)<br>[voice_ai_agents/voice_rag_openaisdk/README.md](../../../../sources/Shubhamsaboo__awesome-llm-apps/voice_ai_agents/voice_rag_openaisdk/README.md)<br>[voice_ai_agents/voice_rag_openaisdk/requirements.txt](../../../../sources/Shubhamsaboo__awesome-llm-apps/voice_ai_agents/voice_rag_openaisdk/requirements.txt)<br>[voice_ai_agents/insurance_claim_live_agent_team/live_demo/index.html](../../../../sources/Shubhamsaboo__awesome-llm-apps/voice_ai_agents/insurance_claim_live_agent_team/live_demo/index.html)<br>[rag_tutorials/vision_rag/README.md](../../../../sources/Shubhamsaboo__awesome-llm-apps/rag_tutorials/vision_rag/README.md)<br>[rag_tutorials/vision_rag/requirements.txt](../../../../sources/Shubhamsaboo__awesome-llm-apps/rag_tutorials/vision_rag/requirements.txt)<br>[rag_tutorials/vision_rag/vision_rag.py](../../../../sources/Shubhamsaboo__awesome-llm-apps/rag_tutorials/vision_rag/vision_rag.py)<br>[rag_tutorials/rag-as-a-service/rag_app.py](../../../../sources/Shubhamsaboo__awesome-llm-apps/rag_tutorials/rag-as-a-service/rag_app.py) |
| spec | 170 | [voice_ai_agents/voice_rag_openaisdk/requirements.txt](../../../../sources/Shubhamsaboo__awesome-llm-apps/voice_ai_agents/voice_rag_openaisdk/requirements.txt)<br>[voice_ai_agents/insurance_claim_live_agent_team/requirements.txt](../../../../sources/Shubhamsaboo__awesome-llm-apps/voice_ai_agents/insurance_claim_live_agent_team/requirements.txt)<br>[voice_ai_agents/insurance_claim_live_agent_team/assets/insurance-claim-live-agent-team-architecture.png](../../../../sources/Shubhamsaboo__awesome-llm-apps/voice_ai_agents/insurance_claim_live_agent_team/assets/insurance-claim-live-agent-team-architecture.png)<br>[voice_ai_agents/customer_support_voice_agent/requirements.txt](../../../../sources/Shubhamsaboo__awesome-llm-apps/voice_ai_agents/customer_support_voice_agent/requirements.txt)<br>[voice_ai_agents/ai_audio_tour_agent/requirements.txt](../../../../sources/Shubhamsaboo__awesome-llm-apps/voice_ai_agents/ai_audio_tour_agent/requirements.txt)<br>[starter_ai_agents/xai_finance_agent/requirements.txt](../../../../sources/Shubhamsaboo__awesome-llm-apps/starter_ai_agents/xai_finance_agent/requirements.txt)<br>[starter_ai_agents/web_scraping_ai_agent/requirements.txt](../../../../sources/Shubhamsaboo__awesome-llm-apps/starter_ai_agents/web_scraping_ai_agent/requirements.txt)<br>[starter_ai_agents/openai_research_agent/requirements.txt](../../../../sources/Shubhamsaboo__awesome-llm-apps/starter_ai_agents/openai_research_agent/requirements.txt) |
| eval | 34 | [rag_tutorials/agentic_rag_math_agent/benchmark/results_math_5.csv](../../../../sources/Shubhamsaboo__awesome-llm-apps/rag_tutorials/agentic_rag_math_agent/benchmark/results_math_5.csv)<br>[rag_tutorials/agentic_rag_math_agent/benchmark/results_math_50.csv](../../../../sources/Shubhamsaboo__awesome-llm-apps/rag_tutorials/agentic_rag_math_agent/benchmark/results_math_50.csv)<br>[rag_tutorials/agentic_rag_math_agent/app/benchmark.py](../../../../sources/Shubhamsaboo__awesome-llm-apps/rag_tutorials/agentic_rag_math_agent/app/benchmark.py)<br>[generative_ui_agents/generative-ui-starter-project/docker-compose.test.yml](../../../../sources/Shubhamsaboo__awesome-llm-apps/generative_ui_agents/generative-ui-starter-project/docker-compose.test.yml)<br>[generative_ui_agents/ai-mcp-app-builder/apps/threejs-server/test-input.json](../../../../sources/Shubhamsaboo__awesome-llm-apps/generative_ui_agents/ai-mcp-app-builder/apps/threejs-server/test-input.json)<br>[generative_ui_agents/ai-financial-coach-agent/docker-compose.test.yml](../../../../sources/Shubhamsaboo__awesome-llm-apps/generative_ui_agents/ai-financial-coach-agent/docker-compose.test.yml)<br>[always_on_agents/always_on_hn_briefing_agent/tests/unit/test_scheduler_api.py](../../../../sources/Shubhamsaboo__awesome-llm-apps/always_on_agents/always_on_hn_briefing_agent/tests/unit/test_scheduler_api.py)<br>[always_on_agents/always_on_hn_briefing_agent/tests/unit/test_scout.py](../../../../sources/Shubhamsaboo__awesome-llm-apps/always_on_agents/always_on_hn_briefing_agent/tests/unit/test_scout.py) |
| security | 12 | [generative_ui_agents/mcp-apps-generative-ui-showcase/public/sandbox.html](../../../../sources/Shubhamsaboo__awesome-llm-apps/generative_ui_agents/mcp-apps-generative-ui-showcase/public/sandbox.html)<br>[awesome_agent_skills/code-reviewer/rules/security-sql-injection.md](../../../../sources/Shubhamsaboo__awesome-llm-apps/awesome_agent_skills/code-reviewer/rules/security-sql-injection.md)<br>[awesome_agent_skills/code-reviewer/rules/security-xss-prevention.md](../../../../sources/Shubhamsaboo__awesome-llm-apps/awesome_agent_skills/code-reviewer/rules/security-xss-prevention.md)<br>[advanced_ai_agents/multi_agent_apps/agent_teams/ai_travel_planner_agent_team/client/prisma/migrations/20250601095905_auth/migration.sql](../../../../sources/Shubhamsaboo__awesome-llm-apps/advanced_ai_agents/multi_agent_apps/agent_teams/ai_travel_planner_agent_team/client/prisma/migrations/20250601095905_auth/migration.sql)<br>[advanced_ai_agents/multi_agent_apps/agent_teams/ai_travel_planner_agent_team/client/lib/auth-client.ts](../../../../sources/Shubhamsaboo__awesome-llm-apps/advanced_ai_agents/multi_agent_apps/agent_teams/ai_travel_planner_agent_team/client/lib/auth-client.ts)<br>[advanced_ai_agents/multi_agent_apps/agent_teams/ai_travel_planner_agent_team/client/lib/auth.ts](../../../../sources/Shubhamsaboo__awesome-llm-apps/advanced_ai_agents/multi_agent_apps/agent_teams/ai_travel_planner_agent_team/client/lib/auth.ts)<br>[advanced_ai_agents/multi_agent_apps/agent_teams/ai_travel_planner_agent_team/client/app/auth/page.tsx](../../../../sources/Shubhamsaboo__awesome-llm-apps/advanced_ai_agents/multi_agent_apps/agent_teams/ai_travel_planner_agent_team/client/app/auth/page.tsx)<br>`advanced_ai_agents/multi_agent_apps/agent_teams/ai_travel_planner_agent_team/client/app/api/auth/[...all]/route.ts` |
| ci | 1 | [.github/workflows/claude.yml](../../../../sources/Shubhamsaboo__awesome-llm-apps/.github/workflows/claude.yml) |
| container | 23 | [rag_tutorials/knowledge_graph_rag_citations/docker-compose.yml](../../../../sources/Shubhamsaboo__awesome-llm-apps/rag_tutorials/knowledge_graph_rag_citations/docker-compose.yml)<br>[rag_tutorials/knowledge_graph_rag_citations/Dockerfile](../../../../sources/Shubhamsaboo__awesome-llm-apps/rag_tutorials/knowledge_graph_rag_citations/Dockerfile)<br>[generative_ui_agents/mcp-apps-generative-ui-showcase/Dockerfile](../../../../sources/Shubhamsaboo__awesome-llm-apps/generative_ui_agents/mcp-apps-generative-ui-showcase/Dockerfile)<br>[generative_ui_agents/mcp-apps-generative-ui-showcase/mcp-server/Dockerfile](../../../../sources/Shubhamsaboo__awesome-llm-apps/generative_ui_agents/mcp-apps-generative-ui-showcase/mcp-server/Dockerfile)<br>[generative_ui_agents/generative-ui-starter-project/docker-compose.test.yml](../../../../sources/Shubhamsaboo__awesome-llm-apps/generative_ui_agents/generative-ui-starter-project/docker-compose.test.yml)<br>[generative_ui_agents/generative-ui-starter-project/Dockerfile](../../../../sources/Shubhamsaboo__awesome-llm-apps/generative_ui_agents/generative-ui-starter-project/Dockerfile)<br>[generative_ui_agents/generative-ui-starter-project/src/components/generative-ui/charts/bar-chart.tsx](../../../../sources/Shubhamsaboo__awesome-llm-apps/generative_ui_agents/generative-ui-starter-project/src/components/generative-ui/charts/bar-chart.tsx)<br>[generative_ui_agents/generative-ui-starter-project/src/components/generative-ui/charts/config.ts](../../../../sources/Shubhamsaboo__awesome-llm-apps/generative_ui_agents/generative-ui-starter-project/src/components/generative-ui/charts/config.ts) |
| instruction | 5 | [generative_ui_agents/generative-ui-starter-project/CLAUDE.md](../../../../sources/Shubhamsaboo__awesome-llm-apps/generative_ui_agents/generative-ui-starter-project/CLAUDE.md)<br>[generative_ui_agents/ai-dashboard-canvas-agent/AGENTS.md](../../../../sources/Shubhamsaboo__awesome-llm-apps/generative_ui_agents/ai-dashboard-canvas-agent/AGENTS.md)<br>[awesome_agent_skills/ux-designer/AGENTS.md](../../../../sources/Shubhamsaboo__awesome-llm-apps/awesome_agent_skills/ux-designer/AGENTS.md)<br>[awesome_agent_skills/python-expert/AGENTS.md](../../../../sources/Shubhamsaboo__awesome-llm-apps/awesome_agent_skills/python-expert/AGENTS.md)<br>[awesome_agent_skills/code-reviewer/AGENTS.md](../../../../sources/Shubhamsaboo__awesome-llm-apps/awesome_agent_skills/code-reviewer/AGENTS.md) |
| docs | 213 | [README.md](../../../../sources/Shubhamsaboo__awesome-llm-apps/README.md)<br>[voice_ai_agents/voice_rag_openaisdk/README.md](../../../../sources/Shubhamsaboo__awesome-llm-apps/voice_ai_agents/voice_rag_openaisdk/README.md)<br>[voice_ai_agents/insurance_claim_live_agent_team/README.md](../../../../sources/Shubhamsaboo__awesome-llm-apps/voice_ai_agents/insurance_claim_live_agent_team/README.md)<br>[voice_ai_agents/customer_support_voice_agent/README.md](../../../../sources/Shubhamsaboo__awesome-llm-apps/voice_ai_agents/customer_support_voice_agent/README.md)<br>[voice_ai_agents/ai_audio_tour_agent/README.md](../../../../sources/Shubhamsaboo__awesome-llm-apps/voice_ai_agents/ai_audio_tour_agent/README.md)<br>[starter_ai_agents/xai_finance_agent/README.md](../../../../sources/Shubhamsaboo__awesome-llm-apps/starter_ai_agents/xai_finance_agent/README.md)<br>[starter_ai_agents/web_scraping_ai_agent/README.md](../../../../sources/Shubhamsaboo__awesome-llm-apps/starter_ai_agents/web_scraping_ai_agent/README.md)<br>[starter_ai_agents/openai_research_agent/README.md](../../../../sources/Shubhamsaboo__awesome-llm-apps/starter_ai_agents/openai_research_agent/README.md) |
| config | 209 | [voice_ai_agents/voice_rag_openaisdk/requirements.txt](../../../../sources/Shubhamsaboo__awesome-llm-apps/voice_ai_agents/voice_rag_openaisdk/requirements.txt)<br>[voice_ai_agents/insurance_claim_live_agent_team/requirements.txt](../../../../sources/Shubhamsaboo__awesome-llm-apps/voice_ai_agents/insurance_claim_live_agent_team/requirements.txt)<br>[voice_ai_agents/customer_support_voice_agent/requirements.txt](../../../../sources/Shubhamsaboo__awesome-llm-apps/voice_ai_agents/customer_support_voice_agent/requirements.txt)<br>[voice_ai_agents/ai_audio_tour_agent/requirements.txt](../../../../sources/Shubhamsaboo__awesome-llm-apps/voice_ai_agents/ai_audio_tour_agent/requirements.txt)<br>[starter_ai_agents/xai_finance_agent/requirements.txt](../../../../sources/Shubhamsaboo__awesome-llm-apps/starter_ai_agents/xai_finance_agent/requirements.txt)<br>[starter_ai_agents/web_scraping_ai_agent/requirements.txt](../../../../sources/Shubhamsaboo__awesome-llm-apps/starter_ai_agents/web_scraping_ai_agent/requirements.txt)<br>[starter_ai_agents/openai_research_agent/requirements.txt](../../../../sources/Shubhamsaboo__awesome-llm-apps/starter_ai_agents/openai_research_agent/requirements.txt)<br>[starter_ai_agents/multimodal_ai_agent/requirements.txt](../../../../sources/Shubhamsaboo__awesome-llm-apps/starter_ai_agents/multimodal_ai_agent/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 34 | [rag_tutorials/agentic_rag_math_agent/benchmark/results_math_5.csv](../../../../sources/Shubhamsaboo__awesome-llm-apps/rag_tutorials/agentic_rag_math_agent/benchmark/results_math_5.csv)<br>[rag_tutorials/agentic_rag_math_agent/benchmark/results_math_50.csv](../../../../sources/Shubhamsaboo__awesome-llm-apps/rag_tutorials/agentic_rag_math_agent/benchmark/results_math_50.csv)<br>[rag_tutorials/agentic_rag_math_agent/app/benchmark.py](../../../../sources/Shubhamsaboo__awesome-llm-apps/rag_tutorials/agentic_rag_math_agent/app/benchmark.py)<br>[generative_ui_agents/generative-ui-starter-project/docker-compose.test.yml](../../../../sources/Shubhamsaboo__awesome-llm-apps/generative_ui_agents/generative-ui-starter-project/docker-compose.test.yml)<br>[generative_ui_agents/ai-mcp-app-builder/apps/threejs-server/test-input.json](../../../../sources/Shubhamsaboo__awesome-llm-apps/generative_ui_agents/ai-mcp-app-builder/apps/threejs-server/test-input.json)<br>[generative_ui_agents/ai-financial-coach-agent/docker-compose.test.yml](../../../../sources/Shubhamsaboo__awesome-llm-apps/generative_ui_agents/ai-financial-coach-agent/docker-compose.test.yml) |
| CI workflow | 1 | [.github/workflows/claude.yml](../../../../sources/Shubhamsaboo__awesome-llm-apps/.github/workflows/claude.yml) |
| 컨테이너/배포 | 23 | [rag_tutorials/knowledge_graph_rag_citations/docker-compose.yml](../../../../sources/Shubhamsaboo__awesome-llm-apps/rag_tutorials/knowledge_graph_rag_citations/docker-compose.yml)<br>[rag_tutorials/knowledge_graph_rag_citations/Dockerfile](../../../../sources/Shubhamsaboo__awesome-llm-apps/rag_tutorials/knowledge_graph_rag_citations/Dockerfile)<br>[generative_ui_agents/mcp-apps-generative-ui-showcase/Dockerfile](../../../../sources/Shubhamsaboo__awesome-llm-apps/generative_ui_agents/mcp-apps-generative-ui-showcase/Dockerfile)<br>[generative_ui_agents/mcp-apps-generative-ui-showcase/mcp-server/Dockerfile](../../../../sources/Shubhamsaboo__awesome-llm-apps/generative_ui_agents/mcp-apps-generative-ui-showcase/mcp-server/Dockerfile)<br>[generative_ui_agents/generative-ui-starter-project/docker-compose.test.yml](../../../../sources/Shubhamsaboo__awesome-llm-apps/generative_ui_agents/generative-ui-starter-project/docker-compose.test.yml)<br>[generative_ui_agents/generative-ui-starter-project/Dockerfile](../../../../sources/Shubhamsaboo__awesome-llm-apps/generative_ui_agents/generative-ui-starter-project/Dockerfile) |
| 보안/정책 | 12 | [generative_ui_agents/mcp-apps-generative-ui-showcase/public/sandbox.html](../../../../sources/Shubhamsaboo__awesome-llm-apps/generative_ui_agents/mcp-apps-generative-ui-showcase/public/sandbox.html)<br>[awesome_agent_skills/code-reviewer/rules/security-sql-injection.md](../../../../sources/Shubhamsaboo__awesome-llm-apps/awesome_agent_skills/code-reviewer/rules/security-sql-injection.md)<br>[awesome_agent_skills/code-reviewer/rules/security-xss-prevention.md](../../../../sources/Shubhamsaboo__awesome-llm-apps/awesome_agent_skills/code-reviewer/rules/security-xss-prevention.md)<br>[advanced_ai_agents/multi_agent_apps/agent_teams/ai_travel_planner_agent_team/client/prisma/migrations/20250601095905_auth/migration.sql](../../../../sources/Shubhamsaboo__awesome-llm-apps/advanced_ai_agents/multi_agent_apps/agent_teams/ai_travel_planner_agent_team/client/prisma/migrations/20250601095905_auth/migration.sql)<br>[advanced_ai_agents/multi_agent_apps/agent_teams/ai_travel_planner_agent_team/client/lib/auth-client.ts](../../../../sources/Shubhamsaboo__awesome-llm-apps/advanced_ai_agents/multi_agent_apps/agent_teams/ai_travel_planner_agent_team/client/lib/auth-client.ts)<br>[advanced_ai_agents/multi_agent_apps/agent_teams/ai_travel_planner_agent_team/client/lib/auth.ts](../../../../sources/Shubhamsaboo__awesome-llm-apps/advanced_ai_agents/multi_agent_apps/agent_teams/ai_travel_planner_agent_team/client/lib/auth.ts) |
| 에이전트 지시문 | 5 | [generative_ui_agents/generative-ui-starter-project/CLAUDE.md](../../../../sources/Shubhamsaboo__awesome-llm-apps/generative_ui_agents/generative-ui-starter-project/CLAUDE.md)<br>[generative_ui_agents/ai-dashboard-canvas-agent/AGENTS.md](../../../../sources/Shubhamsaboo__awesome-llm-apps/generative_ui_agents/ai-dashboard-canvas-agent/AGENTS.md)<br>[awesome_agent_skills/ux-designer/AGENTS.md](../../../../sources/Shubhamsaboo__awesome-llm-apps/awesome_agent_skills/ux-designer/AGENTS.md)<br>[awesome_agent_skills/python-expert/AGENTS.md](../../../../sources/Shubhamsaboo__awesome-llm-apps/awesome_agent_skills/python-expert/AGENTS.md)<br>[awesome_agent_skills/code-reviewer/AGENTS.md](../../../../sources/Shubhamsaboo__awesome-llm-apps/awesome_agent_skills/code-reviewer/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `mcp_ai_agents/notion_mcp_agent/notion_mcp_agent.py`, `mcp_ai_agents/notion_mcp_agent/README.md`, `mcp_ai_agents/notion_mcp_agent/requirements.txt`.
2. entrypoint를 따라 실행 흐름 확인: `voice_ai_agents/insurance_claim_live_agent_team/live_demo/server.py`, `rag_tutorials/multimodal_agentic_rag/frontend/src/App.tsx`, `rag_tutorials/multimodal_agentic_rag/frontend/src/main.tsx`.
3. agent/tool runtime 매핑: `voice_ai_agents/insurance_claim_live_agent_team/agent.py`, `voice_ai_agents/ai_audio_tour_agent/agent.py`, `rag_tutorials/multimodal_agentic_rag/backend/agentic_rag_agent/agent.py`.
4. retrieval/memory/indexing 확인: `voice_ai_agents/voice_rag_openaisdk/rag_voice.py`, `voice_ai_agents/voice_rag_openaisdk/README.md`, `voice_ai_agents/voice_rag_openaisdk/requirements.txt`.
5. test/eval 파일로 동작 검증: `rag_tutorials/agentic_rag_math_agent/benchmark/results_math_5.csv`, `rag_tutorials/agentic_rag_math_agent/benchmark/results_math_50.csv`, `rag_tutorials/agentic_rag_math_agent/app/benchmark.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 100+ AI Agent & RAG apps you can actually run — clone, customize, ship.. 핵심 구조 신호는 Python, README.md, LICENSE, ci, docs, spec-artifacts이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
