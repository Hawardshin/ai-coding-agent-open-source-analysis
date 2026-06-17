# Shubhamsaboo/awesome-llm-apps 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/Shubhamsaboo__awesome-llm-apps |
| remote | https://github.com/Shubhamsaboo/awesome-llm-apps |
| HEAD | ca3a3d3 (2026-06-14) Add Gmail delivery to HN briefing agent |
| branch | main |
| groups | llm-wiki-100 |
| files | 1751 |
| dirs | 506 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `🌟 Awesome LLM Apps`, `💡 Why this exists`, `🚀 Quick Start`, `🔥 Featured This Month`, `📑 Table of Contents`, `📂 Featured AI Projects`, `🌱 Starter AI Agents`, `🚀 Advanced AI Agents`, `🛰️ Always-on Agents`, `🤝 Multi-agent Teams`, `🗣️ Voice AI Agents`, `🖼️ Generative UI and Agentic Frontends`, `🎮 Autonomous Game-Playing Agents`, `♾️ MCP AI Agents`, `📀 RAG (Retrieval Augmented Generation)`, `🧩 Awesome Agent Skills`, `💾 LLM Apps with Memory Tutorials`, `💬 Chat with X Tutorials`

> <p align="center" <a href="http //www.theunwindai.com" <img src="docs/banner/unwind black.png" width="900px" alt="Unwind AI" </a </p <p align="center" <a href="https //www.linkedin.com/in/shubhamsaboo/" <img src="https //img.shields.io/badge/Follow%20on%20LinkedIn 0A66C2?style=for the badge&logo=linkedin&logoColor=white" alt="LinkedIn" </a <a href="https //twitter.com/Saboo Shubham " <img src="https //img.shields.io/badge/Follow%20on%20𝕏 000000?style=for the badge&logo=x&logoColor=white" alt="X / Twitter" </a </p <p align="center" <! Keep these links. Translations will automatically update with the README. <a href="https //www.readme i18n.com/Shubhamsaboo/awesome llm apps?lang=de" Deutsch</a <a href="https //www.readme i18n.com/Shubhamsaboo/awesome llm apps?lang=es" Español</a <a href="https //www.readme i18n.com/Shubhamsaboo/awesome llm apps?lang=fr" français</a <a href="https //www.re

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .github | dir |
| .gitignore | file |
| advanced_ai_agents | dir |
| advanced_llm_apps | dir |
| ai_agent_framework_crash_course | dir |
| always_on_agents | dir |
| awesome_agent_skills | dir |
| docs | dir |
| generative_ui_agents | dir |
| LICENSE | file |
| mcp_ai_agents | dir |
| rag_tutorials | dir |
| README.md | file |
| starter_ai_agents | dir |
| voice_ai_agents | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| advanced_ai_agents/ | 519 |
| generative_ui_agents/ | 517 |
| ai_agent_framework_crash_course/ | 250 |
| advanced_llm_apps/ | 193 |
| rag_tutorials/ | 98 |
| awesome_agent_skills/ | 57 |
| starter_ai_agents/ | 51 |
| voice_ai_agents/ | 25 |
| mcp_ai_agents/ | 20 |
| always_on_agents/ | 11 |
| docs/ | 6 |
| (root) | 3 |
| .github/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 6 | preferred |
| advanced_ai_agents/ | 519 | large |
| generative_ui_agents/ | 517 | large |
| advanced_ai_agents/multi_agent_apps/ | 415 | large |
| ai_agent_framework_crash_course/ | 250 | large |
| advanced_llm_apps/ | 193 | large |
| advanced_ai_agents/multi_agent_apps/ai_news_and_podcast_agents/ | 168 | large |
| generative_ui_agents/ai-mcp-app-builder/ | 158 | large |
| advanced_ai_agents/multi_agent_apps/agent_teams/ | 151 | large |
| generative_ui_agents/ai-mcp-app-builder/apps/ | 147 | large |
| ai_agent_framework_crash_course/openai_sdk_crash_course/ | 135 | large |
| ai_agent_framework_crash_course/google_adk_crash_course/ | 115 | large |
| generative_ui_agents/ai-shadcn-component-generator/ | 105 | large |
| rag_tutorials/ | 98 | large |
| generative_ui_agents/ai-shadcn-component-generator/apps/ | 96 | large |
| advanced_ai_agents/single_agent_apps/ | 93 | large |
| advanced_llm_apps/chat-with-tarots/ | 85 | large |
| advanced_llm_apps/chat-with-tarots/images/ | 78 | large |
| generative_ui_agents/generative-ui-starter-project/ | 77 | large |
| generative_ui_agents/ai-dashboard-canvas-agent/ | 70 | large |
| awesome_agent_skills/ | 57 | large |
| starter_ai_agents/ | 51 | large |
| generative_ui_agents/ai-dashboard-canvas-agent/src/ | 43 | large |
| generative_ui_agents/mcp-apps-generative-ui-showcase/ | 39 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `advanced_ai_agents/autonomous_game_playing_agent_apps/ai_3dpygame_r1/requirements.txt`
- `advanced_ai_agents/autonomous_game_playing_agent_apps/ai_chess_agent/requirements.txt`
- `advanced_ai_agents/autonomous_game_playing_agent_apps/ai_tic_tac_toe_agent/requirements.txt`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ag2_adaptive_research_team/requirements.txt`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_competitor_intelligence_agent_team/requirements.txt`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_finance_agent_team/requirements.txt`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_game_design_agent_team/requirements.txt`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_legal_agent_team/local_ai_legal_agent_team/requirements.txt`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_legal_agent_team/requirements.txt`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_real_estate_agent_team/requirements.txt`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_recruitment_agent_team/requirements.txt`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_sales_intelligence_agent_team/requirements.txt`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_seo_audit_team/requirements.txt`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_services_agency/requirements.txt`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_teaching_agent_team/requirements.txt`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_travel_planner_agent_team/backend/Dockerfile`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_travel_planner_agent_team/backend/pyproject.toml`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_travel_planner_agent_team/backend/uv.lock`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_travel_planner_agent_team/client/package.json`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_travel_planner_agent_team/client/pnpm-lock.yaml`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_travel_planner_agent_team/client/tsconfig.json`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_vc_due_diligence_agent_team/requirements.txt`
- `advanced_ai_agents/multi_agent_apps/agent_teams/multimodal_coding_agent_team/requirements.txt`
- `advanced_ai_agents/multi_agent_apps/agent_teams/multimodal_design_agent_team/requirements.txt`
- `advanced_ai_agents/multi_agent_apps/agent_teams/multimodal_uiux_feedback_agent_team/requirements.txt`
- `advanced_ai_agents/multi_agent_apps/ai_aqi_analysis_agent/requirements.txt`
- `advanced_ai_agents/multi_agent_apps/ai_domain_deep_research_agent/requirements.txt`
- `advanced_ai_agents/multi_agent_apps/ai_email_gtm_outreach_agent/requirements.txt`
- `advanced_ai_agents/multi_agent_apps/ai_financial_coach_agent/requirements.txt`
- `advanced_ai_agents/multi_agent_apps/ai_home_renovation_agent/requirements.txt`
- `advanced_ai_agents/multi_agent_apps/ai_mental_wellbeing_agent/requirements.txt`
- `advanced_ai_agents/multi_agent_apps/ai_negotiation_battle_simulator/backend/requirements.txt`
- `advanced_ai_agents/multi_agent_apps/ai_negotiation_battle_simulator/frontend/next.config.js`
- `advanced_ai_agents/multi_agent_apps/ai_negotiation_battle_simulator/frontend/package.json`
- `advanced_ai_agents/multi_agent_apps/ai_negotiation_battle_simulator/frontend/tsconfig.json`
- `advanced_ai_agents/multi_agent_apps/ai_news_and_podcast_agents/beifong/requirements.txt`
- `advanced_ai_agents/multi_agent_apps/ai_news_and_podcast_agents/web/package.json`
- `advanced_ai_agents/multi_agent_apps/ai_self_evolving_agent/requirements.txt`
- `advanced_ai_agents/multi_agent_apps/ai_speech_trainer_agent/requirements.txt`
- `advanced_ai_agents/multi_agent_apps/devpulse_ai/requirements.txt`
- `advanced_ai_agents/multi_agent_apps/multi_agent_researcher/requirements.txt`
- `advanced_ai_agents/multi_agent_apps/multi_agent_trust_layer/requirements.txt`
- `advanced_ai_agents/multi_agent_apps/product_launch_intelligence_agent/requirements.txt`
- `advanced_ai_agents/multi_agent_apps/trust_gated_agent_team/requirements.txt`
- `advanced_ai_agents/single_agent_apps/ai_agent_governance/requirements.txt`
- `advanced_ai_agents/single_agent_apps/ai_consultant_agent/requirements.txt`
- `advanced_ai_agents/single_agent_apps/ai_customer_support_agent/requirements.txt`
- `advanced_ai_agents/single_agent_apps/ai_deep_research_agent/requirements.txt`
- `advanced_ai_agents/single_agent_apps/ai_email_gtm_reachout_agent/requirements.txt`
- `advanced_ai_agents/single_agent_apps/ai_fraud_investigation_agent/requirements.txt`
- `advanced_ai_agents/single_agent_apps/ai_health_fitness_agent/requirements.txt`
- `advanced_ai_agents/single_agent_apps/ai_investment_agent/requirements.txt`
- `advanced_ai_agents/single_agent_apps/ai_journalist_agent/requirements.txt`
- `advanced_ai_agents/single_agent_apps/ai_meeting_agent/requirements.txt`
- `advanced_ai_agents/single_agent_apps/ai_movie_production_agent/requirements.txt`
- `advanced_ai_agents/single_agent_apps/ai_personal_finance_agent/requirements.txt`
- `advanced_ai_agents/single_agent_apps/ai_recipe_meal_planning_agent/requirements.txt`
- `advanced_ai_agents/single_agent_apps/ai_startup_insight_fire1_agent/requirements.txt`
- `advanced_ai_agents/single_agent_apps/ai_system_architect_r1/requirements.txt`
- `advanced_ai_agents/single_agent_apps/earnings_call_analyst_agent/pyproject.toml`
- `advanced_ai_agents/single_agent_apps/earnings_call_analyst_agent/requirements.txt`
- `advanced_ai_agents/single_agent_apps/research_agent_gemini_interaction_api/requirements.txt`
- `advanced_ai_agents/single_agent_apps/windows_use_autonomous_agent/pyproject.toml`
- `advanced_ai_agents/single_agent_apps/windows_use_autonomous_agent/uv.lock`
- `advanced_llm_apps/chat-with-tarots/requirements.txt`
- `advanced_llm_apps/chat_with_X_tutorials/chat_with_github/requirements.txt`
- `advanced_llm_apps/chat_with_X_tutorials/chat_with_gmail/requirements.txt`
- `advanced_llm_apps/chat_with_X_tutorials/chat_with_pdf/requirements.txt`
- `advanced_llm_apps/chat_with_X_tutorials/chat_with_research_papers/requirements.txt`
- `advanced_llm_apps/chat_with_X_tutorials/chat_with_substack/requirements.txt`
- `advanced_llm_apps/chat_with_X_tutorials/chat_with_youtube_videos/requirements.txt`
- `advanced_llm_apps/chat_with_X_tutorials/streaming_ai_chatbot/package.json`
- `advanced_llm_apps/chat_with_X_tutorials/streaming_ai_chatbot/tsconfig.json`
- `advanced_llm_apps/cursor_ai_experiments/llm_router_app/requirements.txt`
- `advanced_llm_apps/cursor_ai_experiments/local_chatgpt_clone/requirements.txt`
- `advanced_llm_apps/cursor_ai_experiments/requirements.txt`
- `advanced_llm_apps/gpt_oss_critique_improvement_loop/requirements.txt`
- `advanced_llm_apps/llm_apps_with_memory_tutorials/ai_arxiv_agent_memory/requirements.txt`
- `advanced_llm_apps/llm_apps_with_memory_tutorials/ai_travel_agent_memory/requirements.txt`
- `advanced_llm_apps/llm_apps_with_memory_tutorials/llama3_stateful_chat/requirements.txt`
- ... 20 more

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| advanced_ai_agents/multi_agent_apps/agent_teams/ai_travel_planner_agent_team/client/package.json | client | dev, build, start, lint | @hookform/resolvers, @prisma/client, @radix-ui/react-accordion, @radix-ui/react-checkbox, @radix-ui/react-label, @radix-ui/react-popover, @radix-ui/react-radio-group, @radix-ui/react-select, @radix-ui/react-separator, @radix-ui/react-slider, @radix-ui/react-slot, @radix-ui/react-tabs, better-auth, class-variance-authority |
| advanced_ai_agents/multi_agent_apps/ai_negotiation_battle_simulator/frontend/package.json | negotiation-battle-frontend | dev, build, start, lint | @ag-ui/client, @copilotkit/react-core, @copilotkit/react-ui, @copilotkit/runtime, next, react, react-dom, framer-motion, lucide-react |
| advanced_ai_agents/multi_agent_apps/ai_news_and_podcast_agents/web/package.json | client | start, build, test, eject | @tailwindcss/cli, @tailwindcss/postcss, @testing-library/dom, @testing-library/jest-dom, @testing-library/react, @testing-library/user-event, axios, howler, lucide-react, react, react-dom, react-router-dom, react-scripts, recharts |
| advanced_llm_apps/chat_with_X_tutorials/streaming_ai_chatbot/package.json | streaming-ai-chatbot | dev, dev:debug, generate-types, build, clean | motia, openai, zod |
| advanced_llm_apps/multimodal_video_moment_finder/frontend/package.json | frontend | dev, build, start, lint | next, react, react-dom, react-markdown |
| advanced_llm_apps/thinkpath_chatbot_app/package.json | guided-llm-chat | start, dev, watch, build | axios |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| advanced_ai_agents/multi_agent_apps/agent_teams/ai_travel_planner_agent_team/backend/pyproject.toml | agno-hackathon | false | false | false | false |
| advanced_ai_agents/single_agent_apps/earnings_call_analyst_agent/pyproject.toml |  | false | false | false | true |
| advanced_ai_agents/single_agent_apps/windows_use_autonomous_agent/pyproject.toml | windows-use | false | false | false | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `advanced_ai_agents/autonomous_game_playing_agent_apps/ai_3dpygame_r1/README.md`
- `advanced_ai_agents/autonomous_game_playing_agent_apps/ai_chess_agent/README.md`
- `advanced_ai_agents/autonomous_game_playing_agent_apps/ai_tic_tac_toe_agent/README.md`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ag2_adaptive_research_team/README.md`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_competitor_intelligence_agent_team/README.md`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_finance_agent_team/README.md`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_game_design_agent_team/README.md`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_legal_agent_team/README.md`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_legal_agent_team/local_ai_legal_agent_team/README.md`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_real_estate_agent_team/README.md`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_recruitment_agent_team/README.md`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_sales_intelligence_agent_team/README.md`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_seo_audit_team/README.md`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_services_agency/README.md`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_teaching_agent_team/README.md`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_travel_planner_agent_team/README.md`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_travel_planner_agent_team/backend/agents/README.md`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_travel_planner_agent_team/client/README.md`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_vc_due_diligence_agent_team/README.md`
- `advanced_ai_agents/multi_agent_apps/agent_teams/multimodal_coding_agent_team/README.md`
- `advanced_ai_agents/multi_agent_apps/agent_teams/multimodal_design_agent_team/README.md`
- `advanced_ai_agents/multi_agent_apps/agent_teams/multimodal_uiux_feedback_agent_team/README.md`
- `advanced_ai_agents/multi_agent_apps/ai_aqi_analysis_agent/README.md`
- `advanced_ai_agents/multi_agent_apps/ai_domain_deep_research_agent/README.md`
- `advanced_ai_agents/multi_agent_apps/ai_email_gtm_outreach_agent/README.md`
- `advanced_ai_agents/multi_agent_apps/ai_financial_coach_agent/README.md`
- `advanced_ai_agents/multi_agent_apps/ai_home_renovation_agent/README.md`
- `advanced_ai_agents/multi_agent_apps/ai_mental_wellbeing_agent/README.md`
- `advanced_ai_agents/multi_agent_apps/ai_negotiation_battle_simulator/README.md`
- `advanced_ai_agents/multi_agent_apps/ai_news_and_podcast_agents/readme.md`
- `advanced_ai_agents/multi_agent_apps/ai_news_and_podcast_agents/web/readme.md`
- `advanced_ai_agents/multi_agent_apps/ai_self_evolving_agent/README.md`
- `advanced_ai_agents/multi_agent_apps/ai_speech_trainer_agent/README.md`
- `advanced_ai_agents/multi_agent_apps/devpulse_ai/README.md`
- `advanced_ai_agents/multi_agent_apps/multi_agent_researcher/README.md`
- `advanced_ai_agents/multi_agent_apps/multi_agent_trust_layer/README.md`
- `advanced_ai_agents/multi_agent_apps/product_launch_intelligence_agent/README.md`
- `advanced_ai_agents/multi_agent_apps/trust_gated_agent_team/README.md`
- `advanced_ai_agents/single_agent_apps/ai_agent_governance/README.md`
- `advanced_ai_agents/single_agent_apps/ai_consultant_agent/README.md`
- `advanced_ai_agents/single_agent_apps/ai_customer_support_agent/README.md`
- `advanced_ai_agents/single_agent_apps/ai_deep_research_agent/README.md`
- `advanced_ai_agents/single_agent_apps/ai_email_gtm_reachout_agent/README.md`
- `advanced_ai_agents/single_agent_apps/ai_fraud_investigation_agent/README.md`
- `advanced_ai_agents/single_agent_apps/ai_health_fitness_agent/README.md`
- `advanced_ai_agents/single_agent_apps/ai_investment_agent/README.md`
- `advanced_ai_agents/single_agent_apps/ai_journalist_agent/README.md`
- `advanced_ai_agents/single_agent_apps/ai_meeting_agent/README.md`
- `advanced_ai_agents/single_agent_apps/ai_movie_production_agent/README.md`
- ... 30 more

### 에이전트 지침 후보

- `ai_agent_framework_crash_course/google_adk_crash_course/4_tool_using_agent/4_4_mcp_tools/.env.example`
- `ai_agent_framework_crash_course/google_adk_crash_course/4_tool_using_agent/4_4_mcp_tools/README.md`
- `ai_agent_framework_crash_course/google_adk_crash_course/4_tool_using_agent/4_4_mcp_tools/filesystem_agent/README.md`
- `ai_agent_framework_crash_course/google_adk_crash_course/4_tool_using_agent/4_4_mcp_tools/filesystem_agent/__init__.py`
- `ai_agent_framework_crash_course/google_adk_crash_course/4_tool_using_agent/4_4_mcp_tools/filesystem_agent/agent.py`
- `ai_agent_framework_crash_course/google_adk_crash_course/4_tool_using_agent/4_4_mcp_tools/firecrawl_agent/README.md`
- `ai_agent_framework_crash_course/google_adk_crash_course/4_tool_using_agent/4_4_mcp_tools/firecrawl_agent/__init__.py`
- `ai_agent_framework_crash_course/google_adk_crash_course/4_tool_using_agent/4_4_mcp_tools/firecrawl_agent/agent.py`
- `ai_agent_framework_crash_course/google_adk_crash_course/4_tool_using_agent/4_4_mcp_tools/requirements.txt`
- `awesome_agent_skills/README.md`
- `awesome_agent_skills/academic-researcher/SKILL.md`
- `awesome_agent_skills/code-reviewer/AGENTS.md`
- `awesome_agent_skills/code-reviewer/SKILL.md`
- `awesome_agent_skills/code-reviewer/rules/correctness-error-handling.md`
- `awesome_agent_skills/code-reviewer/rules/maintainability-naming.md`
- `awesome_agent_skills/code-reviewer/rules/maintainability-type-hints.md`
- `awesome_agent_skills/code-reviewer/rules/performance-n-plus-one.md`
- `awesome_agent_skills/code-reviewer/rules/security-sql-injection.md`
- `awesome_agent_skills/code-reviewer/rules/security-xss-prevention.md`
- `awesome_agent_skills/content-creator/SKILL.md`
- `awesome_agent_skills/data-analyst/SKILL.md`
- `awesome_agent_skills/debugger/SKILL.md`
- `awesome_agent_skills/decision-helper/SKILL.md`
- `awesome_agent_skills/deep-research/SKILL.md`
- `awesome_agent_skills/editor/SKILL.md`
- `awesome_agent_skills/email-drafter/SKILL.md`
- `awesome_agent_skills/fact-checker/SKILL.md`
- `awesome_agent_skills/fullstack-developer/SKILL.md`
- `awesome_agent_skills/meeting-notes/SKILL.md`
- `awesome_agent_skills/project-planner/SKILL.md`
- `awesome_agent_skills/python-expert/AGENTS.md`
- `awesome_agent_skills/python-expert/SKILL.md`
- `awesome_agent_skills/self-improving-agent-skills/README.md`
- `awesome_agent_skills/self-improving-agent-skills/backend/adk_optimizer.py`
- `awesome_agent_skills/self-improving-agent-skills/backend/app.py`
- `awesome_agent_skills/self-improving-agent-skills/backend/requirements.txt`
- `awesome_agent_skills/self-improving-agent-skills/example_skills/code-reviewer/SKILL.md`
- `awesome_agent_skills/self-improving-agent-skills/example_skills/content-writer/SKILL.md`
- `awesome_agent_skills/self-improving-agent-skills/example_skills/content-writer/references/style-guide.md`
- `awesome_agent_skills/self-improving-agent-skills/frontend/next-env.d.ts`
- `awesome_agent_skills/self-improving-agent-skills/frontend/next.config.ts`
- `awesome_agent_skills/self-improving-agent-skills/frontend/package-lock.json`
- `awesome_agent_skills/self-improving-agent-skills/frontend/package.json`
- `awesome_agent_skills/self-improving-agent-skills/frontend/postcss.config.mjs`
- `awesome_agent_skills/self-improving-agent-skills/frontend/src/app/globals.css`
- `awesome_agent_skills/self-improving-agent-skills/frontend/src/app/layout.tsx`
- `awesome_agent_skills/self-improving-agent-skills/frontend/src/app/page.tsx`
- `awesome_agent_skills/self-improving-agent-skills/frontend/src/components/ConfigStep.tsx`
- `awesome_agent_skills/self-improving-agent-skills/frontend/src/components/ResultsStep.tsx`
- `awesome_agent_skills/self-improving-agent-skills/frontend/src/components/RunningStep.tsx`
- `awesome_agent_skills/self-improving-agent-skills/frontend/src/components/StepIndicator.tsx`
- `awesome_agent_skills/self-improving-agent-skills/frontend/src/components/ThemeToggle.tsx`
- `awesome_agent_skills/self-improving-agent-skills/frontend/src/components/UploadStep.tsx`
- `awesome_agent_skills/self-improving-agent-skills/frontend/tailwind.config.ts`
- `awesome_agent_skills/self-improving-agent-skills/frontend/tsconfig.json`
- `awesome_agent_skills/sprint-planner/SKILL.md`
- `awesome_agent_skills/strategy-advisor/SKILL.md`
- `awesome_agent_skills/technical-writer/SKILL.md`
- `awesome_agent_skills/ux-designer/AGENTS.md`
- `awesome_agent_skills/ux-designer/SKILL.md`
- `awesome_agent_skills/ux-designer/rules/accessibility.md`
- `awesome_agent_skills/ux-designer/rules/information-architecture.md`
- `awesome_agent_skills/ux-designer/rules/interaction-design.md`
- `awesome_agent_skills/ux-designer/rules/research.md`
- `awesome_agent_skills/ux-designer/rules/visual-design.md`
- `awesome_agent_skills/visualization-expert/SKILL.md`
- `generative_ui_agents/ai-dashboard-canvas-agent/AGENTS.md`
- `generative_ui_agents/ai-mcp-app-builder/.dockerignore`
- `generative_ui_agents/ai-mcp-app-builder/.env.example`
- `generative_ui_agents/ai-mcp-app-builder/.gitignore`
- `generative_ui_agents/ai-mcp-app-builder/Dockerfile`
- `generative_ui_agents/ai-mcp-app-builder/LICENSE`
- `generative_ui_agents/ai-mcp-app-builder/README.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/README.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/chatgpt-app-builder/LICENSE.txt`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/chatgpt-app-builder/SKILL.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/chatgpt-app-builder/evals/README.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/chatgpt-app-builder/evals/architecture.json`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/chatgpt-app-builder/evals/discover.json`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/chatgpt-app-builder/evals/skill.json`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `awesome_agent_skills/ux-designer/rules/interaction-design.md`
- `awesome_agent_skills/ux-designer/rules/visual-design.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/chatgpt-app-builder/LICENSE.txt`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/chatgpt-app-builder/SKILL.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/chatgpt-app-builder/evals/README.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/chatgpt-app-builder/evals/architecture.json`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/chatgpt-app-builder/evals/discover.json`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/chatgpt-app-builder/evals/skill.json`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/chatgpt-app-builder/evals/state-and-context.json`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/chatgpt-app-builder/evals/ui-guidelines.json`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/chatgpt-app-builder/evals/widgets.json`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/chatgpt-app-builder/references/architecture.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/chatgpt-app-builder/references/components-api.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/chatgpt-app-builder/references/csp-and-metadata.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/chatgpt-app-builder/references/discover.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/chatgpt-app-builder/references/server-and-widgets.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/chatgpt-app-builder/references/setup.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/chatgpt-app-builder/references/state-and-context.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/chatgpt-app-builder/references/ui-guidelines.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/chatgpt-app-builder/references/widget-patterns.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/mcp-apps-builder/LICENSE.txt`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/mcp-apps-builder/SKILL.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/mcp-apps-builder/references/authentication/custom.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/mcp-apps-builder/references/authentication/overview.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/mcp-apps-builder/references/authentication/supabase.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/mcp-apps-builder/references/authentication/workos.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/mcp-apps-builder/references/foundations/architecture.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/mcp-apps-builder/references/foundations/concepts.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/mcp-apps-builder/references/foundations/deployment.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/mcp-apps-builder/references/foundations/quickstart.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/mcp-apps-builder/references/patterns/common-patterns.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/mcp-apps-builder/references/server/prompts.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/mcp-apps-builder/references/server/resources.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/mcp-apps-builder/references/server/response-helpers.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/mcp-apps-builder/references/server/tools.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/mcp-apps-builder/references/widgets/advanced.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/mcp-apps-builder/references/widgets/basics.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/mcp-apps-builder/references/widgets/interactivity.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/mcp-apps-builder/references/widgets/state.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/mcp-apps-builder/references/widgets/ui-guidelines.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/mcp-builder/LICENSE.txt`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/mcp-builder/SKILL.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/mcp-builder/evals/README.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/mcp-builder/evals/architecture.json`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/mcp-builder/evals/implementation.json`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/mcp-builder/evals/skill.json`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/mcp-builder/evals/widgets.json`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/mcp-builder/references/design-and-architecture.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/mcp-builder/references/resource-templates.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/mcp-builder/references/response-helpers.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/mcp-builder/references/tools-and-resources.md`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/mcp-builder/references/widgets.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `advanced_ai_agents/multi_agent_apps/ai_news_and_podcast_agents/beifong/tests/__init__.py`
- `advanced_ai_agents/multi_agent_apps/ai_news_and_podcast_agents/beifong/tests/agent_agno_test.py`
- `advanced_ai_agents/multi_agent_apps/ai_news_and_podcast_agents/beifong/tests/embedding_search_test.py`
- `advanced_ai_agents/multi_agent_apps/ai_news_and_podcast_agents/beifong/tests/english_sample_0.wav`
- `advanced_ai_agents/multi_agent_apps/ai_news_and_podcast_agents/beifong/tests/hindi_sample_0.wav`
- `advanced_ai_agents/multi_agent_apps/ai_news_and_podcast_agents/beifong/tests/index_faiss_test.py`
- `advanced_ai_agents/multi_agent_apps/ai_news_and_podcast_agents/beifong/tests/tool_browseruse_test.py`
- `advanced_ai_agents/multi_agent_apps/ai_news_and_podcast_agents/beifong/tests/tts_kokoro_test.py`
- `advanced_ai_agents/multi_agent_apps/ai_news_and_podcast_agents/web/src/App.test.js`
- `advanced_ai_agents/single_agent_apps/earnings_call_analyst_agent/tests/test_core_contracts.py`
- `always_on_agents/always_on_hn_briefing_agent/tests/eval/eval_config.yaml`
- `always_on_agents/always_on_hn_briefing_agent/tests/unit/test_scheduler_api.py`
- `always_on_agents/always_on_hn_briefing_agent/tests/unit/test_scout.py`

### CI/Docker 후보

- `.github/workflows/claude.yml`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_travel_planner_agent_team/backend/Dockerfile`
- `generative_ui_agents/ai-deep-research-agent/Dockerfile`
- `generative_ui_agents/ai-financial-coach-agent/Dockerfile`
- `generative_ui_agents/ai-financial-coach-agent/docker-compose.test.yml`
- `generative_ui_agents/ai-mcp-app-builder/Dockerfile`
- `generative_ui_agents/generative-ui-starter-project/Dockerfile`
- `generative_ui_agents/generative-ui-starter-project/docker-compose.test.yml`
- `generative_ui_agents/mcp-apps-generative-ui-showcase/Dockerfile`
- `generative_ui_agents/mcp-apps-generative-ui-showcase/mcp-server/Dockerfile`
- `rag_tutorials/knowledge_graph_rag_citations/Dockerfile`
- `rag_tutorials/knowledge_graph_rag_citations/docker-compose.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 503 |
| .md | 283 |
| .tsx | 204 |
| .txt | 158 |
| .ts | 93 |
| .jpg | 78 |
| .json | 77 |
| .example | 61 |
| .js | 53 |
| .png | 44 |
| .svg | 26 |
| .css | 21 |
| .gitignore | 19 |
| .toml | 14 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `advanced_ai_agents/ 내부 책임 분리`
- `generative_ui_agents/ 내부 책임 분리`
- `advanced_ai_agents/multi_agent_apps/ 내부 책임 분리`
- `ai_agent_framework_crash_course/ 내부 책임 분리`
- `awesome_agent_skills/ux-designer/rules/interaction-design.md 스펙/명령 의미`
- `awesome_agent_skills/ux-designer/rules/visual-design.md 스펙/명령 의미`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/chatgpt-app-builder/LICENSE.txt 스펙/명령 의미`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/chatgpt-app-builder/SKILL.md 스펙/명령 의미`
- `generative_ui_agents/ai-mcp-app-builder/apps/mcp-use-server/.agent/skills/chatgpt-app-builder/evals/README.md 스펙/명령 의미`
- `advanced_ai_agents/autonomous_game_playing_agent_apps/ai_3dpygame_r1/requirements.txt 실행 스크립트와 패키지 경계`
- `advanced_ai_agents/autonomous_game_playing_agent_apps/ai_chess_agent/requirements.txt 실행 스크립트와 패키지 경계`
- `advanced_ai_agents/autonomous_game_playing_agent_apps/ai_tic_tac_toe_agent/requirements.txt 실행 스크립트와 패키지 경계`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ag2_adaptive_research_team/requirements.txt 실행 스크립트와 패키지 경계`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_competitor_intelligence_agent_team/requirements.txt 실행 스크립트와 패키지 경계`

