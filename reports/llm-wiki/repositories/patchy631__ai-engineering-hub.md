# patchy631/ai-engineering-hub 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/patchy631__ai-engineering-hub |
| remote | https://github.com/patchy631/ai-engineering-hub |
| HEAD | cfd74dc (2026-06-08) Merge pull request #243 from namanvirk18/add-fireworks-grpo-notebook |
| branch | main |
| groups | llm-wiki-100 |
| files | 1432 |
| dirs | 475 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `AI Engineering Hub 🚀`, `🌟 Why This Repo?`, `📋 Table of Contents`, `🎯 Getting Started`, `📬 Stay Updated with Our Newsletter!`, `🎓 Projects by Difficulty`, `🟢 Beginner Projects`, `🟡 Intermediate Projects`, `🔴 Advanced Projects`, `📢 Contribute to the AI Engineering Hub!`, `📜 License`, `💬 Connect`

> <p align="center" <a href="https //trendshift.io/repositories/12800" <img src="assets/TRENDING BADGE.png" alt="Trending Badge" style="width 250px; height 55px;" width="250" height="55"/ </a </p <p align="center" <img src="assets/ai eng hub.gif" alt="AI Engineering Hub Banner" </p AI Engineering Hub 🚀 Welcome to the AI Engineering Hub your comprehensive resource for learning and building with AI! 🌟 Why This Repo? AI Engineering is advancing rapidly, and staying at the forefront requires both deep understanding and hands on experience. Here, you will find 93+ Production Ready Projects across all skill levels In depth tutorials on LLMs, RAG, Agents, and more Real world AI agent applications Examples to implement, adapt, and scale in your projects Whether you're a beginner, practitioner, or researcher, this repo provides resources for all skill levels to experiment and succeed in AI engine

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .gitignore | file |
| .gitmodules | file |
| acp-code | dir |
| agent-with-mcp-memory | dir |
| agent2agent-demo | dir |
| agentic_rag | dir |
| agentic_rag_deepseek | dir |
| ai_news_generator | dir |
| ai-avatar-demo | dir |
| ai-engineering-roadmap | dir |
| ai-podcast-generation | dir |
| ai-podcast-generator | dir |
| amazon-product-analysis-server | dir |
| art_mcp_rl | dir |
| assets | dir |
| audio-analysis-toolkit | dir |
| autogen-stock-analyst | dir |
| book-writer-flow | dir |
| brand-monitoring | dir |
| Build-reasoning-model | dir |
| chat-with-audios | dir |
| chat-with-code | dir |
| code-model-comparison | dir |
| colbert-rag | dir |
| Colivara-deepseek-website-RAG | dir |
| content_planner_flow | dir |
| context-engineering-pipeline | dir |
| context-engineering-workflow | dir |
| corrective-rag | dir |
| courses | dir |
| cursor_linkup_mcp | dir |
| database-memory-agent | dir |
| DeepSeek-finetuning | dir |
| deepseek-multimodal-RAG | dir |
| deepseek-thinking-ui | dir |
| deploy-agentic-rag | dir |
| document-chat-rag | dir |
| documentation-writer-flow | dir |
| eval-and-observability | dir |
| eyelevel-mcp-rag | dir |
| fastest-rag-milvus-groq | dir |
| fastest-rag-stack | dir |
| financial-analyst-deepseek | dir |
| finetune-studio-mcp-app | dir |
| firecrawl-agent | dir |
| flight-booking-crew | dir |
| gemma3-ocr | dir |
| github-rag | dir |
| gpt-oss-thinking-ui | dir |
| gpt-oss-vs-qwen3 | dir |
| graphiti-mcp | dir |
| groundX-doc-pipeline | dir |
| grpo-finetuning-qwen3 | dir |
| guidelines-vs-traditional-prompt | dir |
| hotel-booking-crew | dir |
| hugging-face-skills | dir |
| imagegen-janus-pro | dir |
| kitops-mcp | dir |
| knowledge distillation | dir |
| LaTeX-OCR-with-Llama | dir |
| LICENSE | file |
| llama-4_vs_deepseek-r1 | dir |
| llama-4-rag | dir |
| llama-ocr | dir |
| llamaindex-mcp | dir |
| local-chatgpt | dir |
| local-chatgpt with DeepSeek | dir |
| local-chatgpt with Gemma 3 | dir |
| mcp-agentic-rag | dir |
| mcp-agentic-rag-firecrawl | dir |
| mcp-video-rag | dir |
| mcp-voice-agent | dir |
| mindsdb-mcp | dir |
| minimaxm2-vs-sonnet4-5-vs-kimik2-vs-gemini3 | dir |
| modernbert-rag | dir |
| motia-content-creation | dir |
| Multi-Agent-deep-researcher-mcp-windows-linux | dir |
| multi-modal-rag | dir |
| multilingual-meeting-notes-generator | dir |
| multimodal-rag-assemblyai | dir |
| multiplatform_deep_researcher | dir |
| notebook-lm-clone | dir |
| o3-vs-claude-code | dir |
| open-agent-builder | dir |
| openai-swarm-ollama | dir |
| openclaw-secure-deployment | dir |
| paralegal-agent-crew | dir |
| parlant-conversational-agent | dir |
| pixeltable-mcp | dir |
| qwen-2.5VL-ocr | dir |
| qwen3_vs_deepseek-r1 | dir |
| qwen3-thinking-ui | dir |
| rag-sql-router | dir |
| rag-voice-agent | dir |
| rag-with-dockling | dir |
| README.md | file |
| real-time-voicebot | dir |
| resources | dir |
| sales-analytics-agent | dir |
| sdv-mcp | dir |
| siamese-network | dir |
| simple-rag-workflow | dir |
| sonnet4-vs-o4 | dir |
| sonnet4-vs-qwen3-coder | dir |
| stagehand x mcp-use | dir |
| stock-portfolio-analysis-agent | dir |
| streaming-ai-chatbot | dir |
| train-yolo26-object-detection | dir |
| trustworthy-rag | dir |
| ultimate-ai-assitant-using-mcp | dir |
| video-rag-gemini | dir |
| web-browsing-agent | dir |
| Website-to-API-with-FireCrawl | dir |
| Youtube-trend-analysis | dir |
| zep-memory-assistant | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| open-agent-builder/ | 393 |
| hugging-face-skills/ | 103 |
| stock-portfolio-analysis-agent/ | 33 |
| pixeltable-mcp/ | 32 |
| brand-monitoring/ | 27 |
| context-engineering-workflow/ | 25 |
| notebook-lm-clone/ | 25 |
| amazon-product-analysis-server/ | 24 |
| minimaxm2-vs-sonnet4-5-vs-kimik2-vs-gemini3/ | 22 |
| agentic_rag/ | 21 |
| book-writer-flow/ | 19 |
| ai-avatar-demo/ | 18 |
| ai-podcast-generator/ | 18 |
| courses/ | 17 |
| finetune-studio-mcp-app/ | 17 |
| documentation-writer-flow/ | 16 |
| paralegal-agent-crew/ | 16 |
| agentic_rag_deepseek/ | 15 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| open-agent-builder/ | 393 | large |
| open-agent-builder/components/ | 263 | large |
| open-agent-builder/components/shared/ | 131 | large |
| hugging-face-skills/ | 103 | large |
| hugging-face-skills/skills/ | 79 | large |
| open-agent-builder/components/app/ | 73 | large |
| open-agent-builder/components/ui/ | 55 | large |
| open-agent-builder/lib/ | 34 | large |
| stock-portfolio-analysis-agent/ | 33 | large |
| pixeltable-mcp/ | 32 | large |
| open-agent-builder/app/ | 30 | large |
| brand-monitoring/ | 27 | large |
| brand-monitoring/brand_monitoring_flow/ | 25 | large |
| context-engineering-workflow/ | 25 | large |
| notebook-lm-clone/ | 25 | large |
| amazon-product-analysis-server/ | 24 | large |
| stock-portfolio-analysis-agent/frontend/ | 24 | large |
| brand-monitoring/brand_monitoring_flow/src/ | 23 | large |
| open-agent-builder/app/api/ | 23 | large |
| minimaxm2-vs-sonnet4-5-vs-kimik2-vs-gemini3/ | 22 | large |
| agentic_rag/ | 21 | large |
| book-writer-flow/ | 19 | large |
| open-agent-builder/convex/ | 19 | large |
| open-agent-builder/lib/workflow/ | 19 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Multi-Agent-deep-researcher-mcp-windows-linux/pyproject.toml`
- `Multi-Agent-deep-researcher-mcp-windows-linux/uv.lock`
- `agent-with-mcp-memory/pyproject.toml`
- `agent-with-mcp-memory/uv.lock`
- `agentic_rag/pyproject.toml`
- `ai-avatar-demo/pyproject.toml`
- `ai-podcast-generation/pyproject.toml`
- `ai-podcast-generation/uv.lock`
- `ai-podcast-generator/pyproject.toml`
- `ai-podcast-generator/uv.lock`
- `amazon-product-analysis-server/package.json`
- `amazon-product-analysis-server/tsconfig.json`
- `audio-analysis-toolkit/requirements.txt`
- `book-writer-flow/book_flow/book_writing_flow/pyproject.toml`
- `brand-monitoring/brand_monitoring_flow/pyproject.toml`
- `chat-with-code/pyproject.toml`
- `chat-with-code/uv.lock`
- `code-model-comparison/pyproject.toml`
- `code-model-comparison/uv.lock`
- `content_planner_flow/requirements.txt`
- `context-engineering-pipeline/pyproject.toml`
- `context-engineering-pipeline/uv.lock`
- `context-engineering-workflow/pyproject.toml`
- `context-engineering-workflow/uv.lock`
- `cursor_linkup_mcp/pyproject.toml`
- `cursor_linkup_mcp/uv.lock`
- `database-memory-agent/pyproject.toml`
- `database-memory-agent/uv.lock`
- `documentation-writer-flow/pyproject.toml`
- `documentation-writer-flow/uv.lock`
- `eyelevel-mcp-rag/pyproject.toml`
- `eyelevel-mcp-rag/uv.lock`
- `financial-analyst-deepseek/pyproject.toml`
- `financial-analyst-deepseek/uv.lock`
- `finetune-studio-mcp-app/package.json`
- `finetune-studio-mcp-app/tsconfig.json`
- `finetune-studio-mcp-app/vite.config.ts`
- `firecrawl-agent/pyproject.toml`
- `firecrawl-agent/requirements.txt`
- `firecrawl-agent/uv.lock`
- `github-rag/requirements.txt`
- `gpt-oss-thinking-ui/pyproject.toml`
- `gpt-oss-thinking-ui/uv.lock`
- `gpt-oss-vs-qwen3/pyproject.toml`
- `gpt-oss-vs-qwen3/uv.lock`
- `groundX-doc-pipeline/pyproject.toml`
- `groundX-doc-pipeline/uv.lock`
- `guidelines-vs-traditional-prompt/pyproject.toml`
- `guidelines-vs-traditional-prompt/uv.lock`
- `hotel-booking-crew/pyproject.toml`
- `hotel-booking-crew/uv.lock`
- `hugging-face-skills/apps/evals-leaderboard/requirements.txt`
- `hugging-face-skills/apps/hackers-leaderboard/requirements.txt`
- `hugging-face-skills/skills/hugging-face-evaluation/requirements.txt`
- `kitops-mcp/ml-project/requirements.txt`
- `kitops-mcp/pyproject.toml`
- `kitops-mcp/uv.lock`
- `llama-4-rag/pyproject.toml`
- `llama-4-rag/uv.lock`
- `llama-4_vs_deepseek-r1/pyproject.toml`
- `llama-4_vs_deepseek-r1/uv.lock`
- `llamaindex-mcp/pyproject.toml`
- `llamaindex-mcp/uv.lock`
- `mcp-video-rag/pyproject.toml`
- `mcp-video-rag/uv.lock`
- `mcp-voice-agent/requirements.txt`
- `minimaxm2-vs-sonnet4-5-vs-kimik2-vs-gemini3/pyproject.toml`
- `minimaxm2-vs-sonnet4-5-vs-kimik2-vs-gemini3/uv.lock`
- `motia-content-creation/package.json`
- `motia-content-creation/requirements.txt`
- `multilingual-meeting-notes-generator/pyproject.toml`
- `multilingual-meeting-notes-generator/uv.lock`
- `multimodal-rag-assemblyai/docker-compose.yml`
- `multimodal-rag-assemblyai/requirements.txt`
- `multiplatform_deep_researcher/pyproject.toml`
- `multiplatform_deep_researcher/uv.lock`
- `notebook-lm-clone/pyproject.toml`
- `notebook-lm-clone/uv.lock`
- `open-agent-builder/convex/tsconfig.json`
- `open-agent-builder/next.config.js`
- ... 20 more

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| amazon-product-analysis-server/package.json | amazon-product-analysis-server | build, dev, start, deploy | @ai-sdk/openai, @brightdata/sdk, @openai/apps-sdk-ui, @tanstack/react-query, ai, cors, dotenv, express, mcp-use, node-mocks-http, react, react-dom, react-router, tailwindcss |
| finetune-studio-mcp-app/package.json | finetune-studio-mcp | build, start, serve, dev | @gradio/client, @modelcontextprotocol/ext-apps, @modelcontextprotocol/sdk, cors, express, tsx, zod |
| motia-content-creation/package.json | social-media-automation | prepare, dev, dev:debug, build, clean, generate:config | motia, @mendable/firecrawl-js, openai, dotenv, zod, axios |
| open-agent-builder/package.json | firecrawl-style-guide | dev, dev:all, build, start, lint, test, test:ui, test:headed, test:mcp, test:workflow, test:all, test:simple, test:search, test:price, test:research, test:data | @anthropic-ai/sdk, @arcadeai/arcadejs, @clerk/nextjs, @composio/core, @copilotkit/react-core, @copilotkit/react-ui, @copilotkit/sdk-js, @e2b/code-interpreter, @hookform/resolvers, @langchain/core, @langchain/langgraph, @langchain/openai, @modelcontextprotocol/sdk, @radix-ui/react-accordion |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| Multi-Agent-deep-researcher-mcp-windows-linux/pyproject.toml | agentic_deep_researcher | false | false | false | false |
| agent-with-mcp-memory/pyproject.toml | agent-with-mcp-memory | false | false | false | false |
| agentic_rag/pyproject.toml | agentic_rag | false | false | false | false |
| ai-avatar-demo/pyproject.toml | zep-ai-avatar-demo | false | false | false | false |
| ai-podcast-generation/pyproject.toml | ai-podcast-generation | false | false | false | false |
| ai-podcast-generator/pyproject.toml | minimax | false | false | false | false |
| book-writer-flow/book_flow/book_writing_flow/pyproject.toml | book_writing_flow | false | false | false | false |
| brand-monitoring/brand_monitoring_flow/pyproject.toml | brand_monitoring_flow | false | false | false | false |
| chat-with-code/pyproject.toml | chat-with-code | false | false | false | false |
| code-model-comparison/pyproject.toml | code-model-comparison | false | false | false | false |
| context-engineering-pipeline/pyproject.toml | context-engineering-pipeline | false | false | false | false |
| context-engineering-workflow/pyproject.toml | context-engineering | false | false | false | false |
| cursor_linkup_mcp/pyproject.toml | cursor-linkup-mcp | false | false | false | false |
| database-memory-agent/pyproject.toml | database-memory-agent | false | false | false | false |
| documentation-writer-flow/pyproject.toml | documentation-writer-flow | false | false | false | false |
| eyelevel-mcp-rag/pyproject.toml | eyelevel-mcp-rag | false | false | false | false |
| financial-analyst-deepseek/pyproject.toml | financial-analysis-agent | false | false | false | false |
| firecrawl-agent/pyproject.toml | firecrawl-agent | false | false | false | false |
| gpt-oss-thinking-ui/pyproject.toml | gpt-oss-thinking-ui | false | false | false | false |
| gpt-oss-vs-qwen3/pyproject.toml | reasoning-model-comparison | false | false | false | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `Build-reasoning-model/README.md`
- `Colivara-deepseek-website-RAG/README.md`
- `DeepSeek-finetuning/README.md`
- `LaTeX-OCR-with-Llama/README.md`
- `Multi-Agent-deep-researcher-mcp-windows-linux/README.md`
- `README.md`
- `Website-to-API-with-FireCrawl/README.md`
- `Youtube-trend-analysis/README.md`
- `acp-code/README.md`
- `agent-with-mcp-memory/README.md`
- `agentic_rag/README.md`
- `agentic_rag_deepseek/README.md`
- `ai-avatar-demo/README.md`
- `ai-avatar-demo/data/README.md`
- `ai-engineering-roadmap/README.md`
- `ai-podcast-generation/README.md`
- `ai-podcast-generator/README.md`
- `ai_news_generator/README.md`
- `amazon-product-analysis-server/README.md`
- `art_mcp_rl/README.md`
- `audio-analysis-toolkit/README.md`
- `autogen-stock-analyst/README.md`
- `book-writer-flow/README.md`
- `book-writer-flow/book_flow/book_writing_flow/README.md`
- `brand-monitoring/README.md`
- `chat-with-audios/README.md`
- `chat-with-code/README.md`
- `code-model-comparison/README.md`
- `content_planner_flow/README.md`
- `context-engineering-pipeline/README.md`
- `context-engineering-workflow/README.md`
- `courses/README.md`
- `courses/anthropic-academy-courses/README.md`
- `cursor_linkup_mcp/README.md`
- `database-memory-agent/README.md`
- `deepseek-multimodal-RAG/README.md`
- `deepseek-thinking-ui/README.md`
- `deploy-agentic-rag/README.md`
- `document-chat-rag/README.md`
- `document-chat-rag/docs/dspy.pdf`
- `documentation-writer-flow/README.md`
- `eval-and-observability/README.md`
- `eyelevel-mcp-rag/README.md`
- `eyelevel-mcp-rag/docs/DeepSeek.pdf`
- `fastest-rag-milvus-groq/README.md`
- `fastest-rag-milvus-groq/docs/raft.pdf`
- `fastest-rag-stack/README.md`
- `fastest-rag-stack/docs/dspy.pdf`
- `financial-analyst-deepseek/README.md`
- `finetune-studio-mcp-app/README.md`
- ... 30 more

### 에이전트 지침 후보

- `Multi-Agent-deep-researcher-mcp-windows-linux/.gitignore`
- `Multi-Agent-deep-researcher-mcp-windows-linux/.python-version`
- `Multi-Agent-deep-researcher-mcp-windows-linux/README.md`
- `Multi-Agent-deep-researcher-mcp-windows-linux/agents.py`
- `Multi-Agent-deep-researcher-mcp-windows-linux/app.py`
- `Multi-Agent-deep-researcher-mcp-windows-linux/pyproject.toml`
- `Multi-Agent-deep-researcher-mcp-windows-linux/server.py`
- `Multi-Agent-deep-researcher-mcp-windows-linux/uv.lock`
- `agent-with-mcp-memory/.env.example`
- `agent-with-mcp-memory/README.md`
- `agent-with-mcp-memory/assets/agent-crashcourse1.gif`
- `agent-with-mcp-memory/assets/agent-crashcourse2.gif`
- `agent-with-mcp-memory/assets/thumbnail.jpeg`
- `agent-with-mcp-memory/assets/zep-memory.gif`
- `agent-with-mcp-memory/demo.ipynb`
- `agent-with-mcp-memory/pyproject.toml`
- `agent-with-mcp-memory/server.py`
- `agent-with-mcp-memory/uv.lock`
- `ai-engineering-roadmap/assets/mcp-guidebook.png`
- `art_mcp_rl/README.md`
- `art_mcp_rl/mcp_rl.ipynb`
- `art_mcp_rl/mcp_server.py`
- `courses/anthropic-academy-courses/assets/agent-skills.png`
- `courses/anthropic-academy-courses/assets/intro-mcp.png`
- `courses/anthropic-academy-courses/assets/mcp-advanced.png`
- `cursor_linkup_mcp/.env.example`
- `cursor_linkup_mcp/README.md`
- `cursor_linkup_mcp/assets/thumbnail.png`
- `cursor_linkup_mcp/data/DeepSeek.pdf`
- `cursor_linkup_mcp/pyproject.toml`
- `cursor_linkup_mcp/rag.py`
- `cursor_linkup_mcp/server.py`
- `cursor_linkup_mcp/uv.lock`
- `eyelevel-mcp-rag/.env.example`
- `eyelevel-mcp-rag/README.md`
- `eyelevel-mcp-rag/docs/DeepSeek.pdf`
- `eyelevel-mcp-rag/pyproject.toml`
- `eyelevel-mcp-rag/server.py`
- `eyelevel-mcp-rag/uv.lock`
- `finetune-studio-mcp-app/.gitignore`
- `finetune-studio-mcp-app/README.md`
- `finetune-studio-mcp-app/assets/autotrain-setup.png`
- `finetune-studio-mcp-app/assets/claude-connector.png`
- `finetune-studio-mcp-app/assets/hardware.png`
- `finetune-studio-mcp-app/assets/hftoken.png`
- `finetune-studio-mcp-app/assets/manufact-env.png`
- `finetune-studio-mcp-app/assets/secrets.png`
- `finetune-studio-mcp-app/assets/studio.png`
- `finetune-studio-mcp-app/package-lock.json`
- `finetune-studio-mcp-app/package.json`
- `finetune-studio-mcp-app/postcss.config.js`
- `finetune-studio-mcp-app/server.ts`
- `finetune-studio-mcp-app/src/mcp-app.ts`
- `finetune-studio-mcp-app/tsconfig.json`
- `finetune-studio-mcp-app/vite.config.ts`
- `finetune-studio-mcp-app/widget.html`
- `graphiti-mcp/README.md`
- `grpo-finetuning-qwen3/agent-skill/grpo-finetune/SKILL.md`
- `grpo-finetuning-qwen3/agent-skill/grpo-finetune/agent_demo.py`
- `grpo-finetuning-qwen3/agent-skill/grpo-finetune/generate_reward.py`
- `grpo-finetuning-qwen3/agent-skill/grpo-finetune/run_pipeline.py`
- `hugging-face-skills/.claude-plugin/marketplace.json`
- `hugging-face-skills/.claude-plugin/plugin.json`
- `hugging-face-skills/.github/workflows/generate-agents.yml`
- `hugging-face-skills/.github/workflows/push-evals-leaderboard.yml`
- `hugging-face-skills/.github/workflows/push-hackers-leaderboard.yml`
- `hugging-face-skills/.github/workflows/push-quests.yml`
- `hugging-face-skills/.gitignore`
- `hugging-face-skills/README.md`
- `hugging-face-skills/agents/AGENTS.md`
- `hugging-face-skills/apps/evals-leaderboard/app.py`
- `hugging-face-skills/apps/evals-leaderboard/collect_evals.py`
- `hugging-face-skills/apps/evals-leaderboard/requirements.txt`
- `hugging-face-skills/apps/hackers-leaderboard/README.md`
- `hugging-face-skills/apps/hackers-leaderboard/app.py`
- `hugging-face-skills/apps/hackers-leaderboard/collect_points.py`
- `hugging-face-skills/apps/hackers-leaderboard/requirements.txt`
- `hugging-face-skills/apps/quests/02_evaluate-hub-model.md`
- `hugging-face-skills/apps/quests/03_publish-hub-dataset.md`
- `hugging-face-skills/apps/quests/04_sft-finetune-hub.md`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `hugging-face-skills/skills/brightdata-web-mcp/SKILL.md`
- `hugging-face-skills/skills/brightdata-web-mcp/references/examples.md`
- `hugging-face-skills/skills/brightdata-web-mcp/references/integrations.md`
- `hugging-face-skills/skills/brightdata-web-mcp/references/quickstart.md`
- `hugging-face-skills/skills/brightdata-web-mcp/references/tools.md`
- `hugging-face-skills/skills/brightdata-web-mcp/references/toon-format.md`
- `hugging-face-skills/skills/hugging-face-cli/SKILL.md`
- `hugging-face-skills/skills/hugging-face-cli/references/commands.md`
- `hugging-face-skills/skills/hugging-face-cli/references/examples.md`
- `hugging-face-skills/skills/hugging-face-datasets/SKILL.md`
- `hugging-face-skills/skills/hugging-face-datasets/examples/diverse_training_examples.json`
- `hugging-face-skills/skills/hugging-face-datasets/examples/system_prompt_template.txt`
- `hugging-face-skills/skills/hugging-face-datasets/examples/training_examples.json`
- `hugging-face-skills/skills/hugging-face-datasets/scripts/dataset_manager.py`
- `hugging-face-skills/skills/hugging-face-datasets/scripts/sql_manager.py`
- `hugging-face-skills/skills/hugging-face-datasets/templates/chat.json`
- `hugging-face-skills/skills/hugging-face-datasets/templates/classification.json`
- `hugging-face-skills/skills/hugging-face-datasets/templates/completion.json`
- `hugging-face-skills/skills/hugging-face-datasets/templates/custom.json`
- `hugging-face-skills/skills/hugging-face-datasets/templates/qa.json`
- `hugging-face-skills/skills/hugging-face-datasets/templates/tabular.json`
- `hugging-face-skills/skills/hugging-face-evaluation/SKILL.md`
- `hugging-face-skills/skills/hugging-face-evaluation/examples/.env.example`
- `hugging-face-skills/skills/hugging-face-evaluation/examples/USAGE_EXAMPLES.md`
- `hugging-face-skills/skills/hugging-face-evaluation/examples/artificial_analysis_to_hub.py`
- `hugging-face-skills/skills/hugging-face-evaluation/examples/example_readme_tables.md`
- `hugging-face-skills/skills/hugging-face-evaluation/examples/metric_mapping.json`
- `hugging-face-skills/skills/hugging-face-evaluation/requirements.txt`
- `hugging-face-skills/skills/hugging-face-evaluation/scripts/evaluation_manager.py`
- `hugging-face-skills/skills/hugging-face-evaluation/scripts/inspect_eval_uv.py`
- `hugging-face-skills/skills/hugging-face-evaluation/scripts/inspect_vllm_uv.py`
- `hugging-face-skills/skills/hugging-face-evaluation/scripts/lighteval_vllm_uv.py`
- `hugging-face-skills/skills/hugging-face-evaluation/scripts/run_eval_job.py`
- `hugging-face-skills/skills/hugging-face-evaluation/scripts/run_vllm_eval_job.py`
- `hugging-face-skills/skills/hugging-face-evaluation/scripts/test_extraction.py`
- `hugging-face-skills/skills/hugging-face-jobs/SKILL.md`
- `hugging-face-skills/skills/hugging-face-jobs/index.html`
- `hugging-face-skills/skills/hugging-face-jobs/references/hardware_guide.md`
- `hugging-face-skills/skills/hugging-face-jobs/references/hub_saving.md`
- `hugging-face-skills/skills/hugging-face-jobs/references/token_usage.md`
- `hugging-face-skills/skills/hugging-face-jobs/references/troubleshooting.md`
- `hugging-face-skills/skills/hugging-face-jobs/scripts/cot-self-instruct.py`
- `hugging-face-skills/skills/hugging-face-jobs/scripts/finepdfs-stats.py`
- `hugging-face-skills/skills/hugging-face-jobs/scripts/generate-responses.py`
- `hugging-face-skills/skills/hugging-face-model-trainer/SKILL.md`
- `hugging-face-skills/skills/hugging-face-model-trainer/references/gguf_conversion.md`
- `hugging-face-skills/skills/hugging-face-model-trainer/references/hardware_guide.md`
- `hugging-face-skills/skills/hugging-face-model-trainer/references/hub_saving.md`
- `hugging-face-skills/skills/hugging-face-model-trainer/references/reliability_principles.md`
- `hugging-face-skills/skills/hugging-face-model-trainer/references/trackio_guide.md`
- `hugging-face-skills/skills/hugging-face-model-trainer/references/training_methods.md`
- `hugging-face-skills/skills/hugging-face-model-trainer/references/training_patterns.md`
- `hugging-face-skills/skills/hugging-face-model-trainer/references/troubleshooting.md`
- `hugging-face-skills/skills/hugging-face-model-trainer/scripts/convert_to_gguf.py`
- `hugging-face-skills/skills/hugging-face-model-trainer/scripts/dataset_inspector.py`
- `hugging-face-skills/skills/hugging-face-model-trainer/scripts/estimate_cost.py`
- `hugging-face-skills/skills/hugging-face-model-trainer/scripts/train_dpo_example.py`
- `hugging-face-skills/skills/hugging-face-model-trainer/scripts/train_grpo_example.py`
- `hugging-face-skills/skills/hugging-face-model-trainer/scripts/train_sft_example.py`
- `hugging-face-skills/skills/hugging-face-paper-publisher/SKILL.md`
- `hugging-face-skills/skills/hugging-face-paper-publisher/examples/example_usage.md`
- `hugging-face-skills/skills/hugging-face-paper-publisher/references/quick_reference.md`
- `hugging-face-skills/skills/hugging-face-paper-publisher/scripts/paper_manager.py`
- `hugging-face-skills/skills/hugging-face-paper-publisher/templates/arxiv.md`
- `hugging-face-skills/skills/hugging-face-paper-publisher/templates/ml-report.md`
- `hugging-face-skills/skills/hugging-face-paper-publisher/templates/modern.md`
- `hugging-face-skills/skills/hugging-face-paper-publisher/templates/standard.md`
- `hugging-face-skills/skills/hugging-face-tool-builder/SKILL.md`
- `hugging-face-skills/skills/hugging-face-tool-builder/references/baseline_hf_api.py`
- `hugging-face-skills/skills/hugging-face-tool-builder/references/baseline_hf_api.sh`
- `hugging-face-skills/skills/hugging-face-tool-builder/references/baseline_hf_api.tsx`
- `hugging-face-skills/skills/hugging-face-tool-builder/references/find_models_by_paper.sh`
- `hugging-face-skills/skills/hugging-face-tool-builder/references/hf_enrich_models.sh`
- `hugging-face-skills/skills/hugging-face-tool-builder/references/hf_model_card_frontmatter.sh`
- `hugging-face-skills/skills/hugging-face-tool-builder/references/hf_model_papers_auth.sh`
- `hugging-face-skills/skills/hugging-face-trackio/.claude-plugin/plugin.json`
- `hugging-face-skills/skills/hugging-face-trackio/SKILL.md`
- `hugging-face-skills/skills/hugging-face-trackio/references/logging_metrics.md`
- `hugging-face-skills/skills/hugging-face-trackio/references/retrieving_metrics.md`
- `open-agent-builder/app/api/templates/seed/route.ts`
- `open-agent-builder/app/api/templates/update/route.ts`
- `open-agent-builder/lib/workflow/templates/examples/01-simple-agent.ts`
- `open-agent-builder/lib/workflow/templates/examples/index.ts`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `notebook-lm-clone/tests/notebook_pipeline.py`

### CI/Docker 후보

- `multimodal-rag-assemblyai/docker-compose.yml`
- `pixeltable-mcp/audio-index/Dockerfile`
- `pixeltable-mcp/base-sdk/Dockerfile`
- `pixeltable-mcp/doc-index/Dockerfile`
- `pixeltable-mcp/docker-compose.yaml`
- `pixeltable-mcp/image-index/Dockerfile`
- `pixeltable-mcp/video-index/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 316 |
| .tsx | 255 |
| .md | 161 |
| .ts | 125 |
| .png | 94 |
| .example | 50 |
| .ipynb | 49 |
| .json | 48 |
| .toml | 47 |
| .lock | 42 |
| .txt | 33 |
| .yaml | 29 |
| .css | 26 |
| .gitignore | 23 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `open-agent-builder/ 내부 책임 분리`
- `open-agent-builder/components/ 내부 책임 분리`
- `open-agent-builder/components/shared/ 내부 책임 분리`
- `hugging-face-skills/ 내부 책임 분리`
- `hugging-face-skills/skills/ 내부 책임 분리`
- `hugging-face-skills/skills/brightdata-web-mcp/SKILL.md 스펙/명령 의미`
- `hugging-face-skills/skills/brightdata-web-mcp/references/examples.md 스펙/명령 의미`
- `hugging-face-skills/skills/brightdata-web-mcp/references/integrations.md 스펙/명령 의미`
- `hugging-face-skills/skills/brightdata-web-mcp/references/quickstart.md 스펙/명령 의미`
- `hugging-face-skills/skills/brightdata-web-mcp/references/tools.md 스펙/명령 의미`
- `Multi-Agent-deep-researcher-mcp-windows-linux/pyproject.toml 실행 스크립트와 패키지 경계`
- `Multi-Agent-deep-researcher-mcp-windows-linux/uv.lock 실행 스크립트와 패키지 경계`
- `agent-with-mcp-memory/pyproject.toml 실행 스크립트와 패키지 경계`
- `agent-with-mcp-memory/uv.lock 실행 스크립트와 패키지 경계`
- `agentic_rag/pyproject.toml 실행 스크립트와 패키지 경계`

