# MODSetter/SurfSense

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/MODSetter/SurfSense |
| local path | sources/MODSetter__SurfSense |
| HEAD | 77688ac |
| stars/forks | 14921 / 1425 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T22:26:02Z |
| trendScore / priorityScore | 176 / 486 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / app framework | 220 | .cursor/skills/vercel-react-best-practices/AGENTS.md, .cursor/skills/vercel-react-best-practices/README.md, surfsense_browser_extension/README.md |
| AI agent / orchestration | 116 | .cursor/skills/vercel-react-best-practices/AGENTS.md, .cursor/skills/vercel-react-best-practices/README.md, surfsense_obsidian/AGENTS.md |
| Cloud native / infrastructure | 95 | .cursor/skills/vercel-react-best-practices/AGENTS.md, surfsense_evals/README.md, README.md |
| Database / data infrastructure | 89 | .cursor/skills/vercel-react-best-practices/AGENTS.md, surfsense_obsidian/AGENTS.md, surfsense_backend/tests/e2e/README.md |
| RAG / retrieval / knowledge | 55 | surfsense_evals/README.md, README.md, surfsense_backend/tests/e2e/README.md |
| Coding agent / software automation | 54 | surfsense_evals/README.md, surfsense_backend/tests/unit/agents/new_chat/prompts/test_composer.py, .cursor/skills/memory-management/SKILL.md |
| Developer tools / DX | 53 | .cursor/skills/vercel-react-best-practices/AGENTS.md, surfsense_evals/README.md, surfsense_obsidian/AGENTS.md |
| Observability / evaluation | 41 | surfsense_evals/README.md, .cursor/skills/vercel-react-best-practices/README.md, surfsense_obsidian/AGENTS.md |
| Security / supply chain | 41 | .cursor/skills/vercel-react-best-practices/AGENTS.md, surfsense_evals/README.md, surfsense_obsidian/AGENTS.md |
| MCP / agent interoperability | 30 | .cursor/skills/vercel-react-best-practices/README.md, surfsense_backend/pyproject.toml, .cursor/skills/memory-management/SKILL.md |
| Data / ML platform | 22 | surfsense_evals/README.md, surfsense_obsidian/README.md, surfsense_web/tests/connectors/composio/drive/README.md |
| Local LLM / inference | 2 | README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 3350 |
| manifests | 35 |
| docs | 389 |
| tests | 453 |
| ci/ops | 17 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | SurfSense | SurfSense / Video Agent Sample / Podcast Agent Sample / How to Use SurfSense / Cloud / Self Hosted / Desktop App / How to Realtime Collaborate (Beta) / SurfSense vs Google NotebookLM / FEATURE REQUESTS AND FUTURE | <a href="https //www.surfsense.com/" <img width="1584" height="396" alt="readme banner" src="https //github.com/user attachments/assets/9361ef58 1753 4b6e b275 5020d8847261" / </a <div align="center" <a href="https //discord.gg/ejRNvftDp9" <img src="https //img.shields.io/discord/1359368468260192417" alt="Discord" </a <a href="https //www.reddit.com/r/SurfSense/" <img src="https //img.shields.io/reddit/subreddit subscribers/SurfSense?style=social" alt="Reddit" </a </div <div align="center" English README.md Español README.es.md Português README.pt BR.md हिन्दी README.hi.md 简体中文 README.zh CN.md </div <div align="center" <a href="https //trendshift.io/repositories/13606" target=" blank" <img s |


## Key Files

### Manifests

- .cursor/skills/vercel-react-best-practices/AGENTS.md
- surfsense_evals/README.md
- .cursor/skills/vercel-react-best-practices/README.md
- surfsense_obsidian/AGENTS.md
- README.md
- surfsense_backend/tests/e2e/README.md
- surfsense_backend/tests/README.md
- surfsense_browser_extension/README.md
- surfsense_desktop/README.md
- surfsense_obsidian/README.md
- surfsense_web/tests/connectors/composio/drive/README.md
- surfsense_web/tests/README.md
- .github/ISSUE_TEMPLATE/README.md
- surfsense_evals/pyproject.toml
- docker/docker-compose.yml
- package.json
- surfsense_backend/Dockerfile
- surfsense_backend/pyproject.toml
- surfsense_browser_extension/package.json
- surfsense_browser_extension/tsconfig.json


### Spec / Docs / Prompt Artifacts

- .cursor/skills/vercel-react-best-practices/AGENTS.md
- .cursor/skills/vercel-react-best-practices/README.md
- surfsense_obsidian/AGENTS.md
- .cursor/skills/playwright-testing/infrastructure-ci-cd/test-coverage.md
- .cursor/skills/playwright-testing/testing-patterns/drag-drop.md
- .cursor/skills/playwright-testing/testing-patterns/security-testing.md
- surfsense_backend/app/agents/chat/multi_agent_chat/main_agent/system_prompt/prompts/tools/create_automation/example.md
- surfsense_backend/app/agents/chat/multi_agent_chat/main_agent/system_prompt/prompts/tools/scrape_webpage/example.md
- surfsense_backend/app/agents/chat/multi_agent_chat/main_agent/system_prompt/prompts/tools/search_knowledge_base/example.md
- surfsense_backend/app/agents/chat/multi_agent_chat/main_agent/system_prompt/prompts/tools/task/example.md
- surfsense_backend/app/agents/chat/multi_agent_chat/main_agent/system_prompt/prompts/tools/update_memory/private/example.md
- surfsense_backend/app/agents/chat/multi_agent_chat/main_agent/system_prompt/prompts/tools/update_memory/team/example.md
- surfsense_backend/app/agents/chat/multi_agent_chat/main_agent/system_prompt/prompts/tools/web_search/example.md
- surfsense_backend/app/prompts/system_prompt_composer/examples/__init__.py
- surfsense_backend/app/prompts/system_prompt_composer/examples/generate_image.md
- surfsense_backend/app/prompts/system_prompt_composer/examples/generate_podcast.md
- surfsense_backend/app/prompts/system_prompt_composer/examples/generate_report.md
- surfsense_backend/app/prompts/system_prompt_composer/examples/generate_resume.md
- surfsense_backend/app/prompts/system_prompt_composer/examples/generate_video_presentation.md
- surfsense_backend/app/prompts/system_prompt_composer/examples/scrape_webpage.md


### Agent Instruction Files

- .cursor/skills/vercel-react-best-practices/AGENTS.md
- .cursor/skills/vercel-react-best-practices/README.md
- surfsense_obsidian/AGENTS.md
- .cursor/skills/playwright-testing/infrastructure-ci-cd/test-coverage.md
- .cursor/skills/playwright-testing/testing-patterns/drag-drop.md
- .cursor/skills/playwright-testing/testing-patterns/security-testing.md
- surfsense_backend/app/agents/chat/multi_agent_chat/main_agent/system_prompt/prompts/tools/create_automation/example.md
- surfsense_backend/app/agents/chat/multi_agent_chat/main_agent/system_prompt/prompts/tools/scrape_webpage/example.md
- surfsense_backend/app/agents/chat/multi_agent_chat/main_agent/system_prompt/prompts/tools/search_knowledge_base/example.md
- surfsense_backend/app/agents/chat/multi_agent_chat/main_agent/system_prompt/prompts/tools/task/example.md
- surfsense_backend/app/agents/chat/multi_agent_chat/main_agent/system_prompt/prompts/tools/update_memory/private/example.md
- surfsense_backend/app/agents/chat/multi_agent_chat/main_agent/system_prompt/prompts/tools/update_memory/team/example.md
- surfsense_backend/app/agents/chat/multi_agent_chat/main_agent/system_prompt/prompts/tools/web_search/example.md
- surfsense_backend/app/prompts/system_prompt_composer/examples/__init__.py
- surfsense_backend/app/prompts/system_prompt_composer/examples/generate_image.md


## Top Directories

| dir | count |
| --- | --- |
| surfsense_backend | 1798 |
| surfsense_web | 1091 |
| .cursor | 167 |
| surfsense_evals | 132 |
| surfsense_desktop | 42 |
| surfsense_browser_extension | 33 |
| surfsense_obsidian | 29 |
| .github | 15 |
| docker | 14 |
| .rules | 4 |
| .vscode | 2 |
| scripts | 2 |
| .gitattributes | 1 |
| .gitignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 1755 |
| .tsx | 554 |
| .ts | 424 |
| .md | 315 |
| .mdx | 65 |
| .svg | 62 |
| .json | 54 |
| [no-ext] | 25 |
| .yml | 18 |
| .mp4 | 15 |
| .yaml | 10 |
| .mjs | 7 |
| .example | 6 |
| .sh | 6 |
| .css | 5 |
| .js | 5 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
