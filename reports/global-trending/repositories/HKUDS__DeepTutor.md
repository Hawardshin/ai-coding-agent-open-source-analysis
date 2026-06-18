# HKUDS/DeepTutor

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/HKUDS/DeepTutor |
| local path | sources/HKUDS__DeepTutor |
| HEAD | 1bf11d1 |
| stars/forks | 24817 / 3355 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T16:25:11Z |
| trendScore / priorityScore | 175 / 488 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval / knowledge | 184 | deeptutor_cli/README.md, packaging/deeptutor-cli/README.md, AGENTS.md |
| AI agent / orchestration | 175 | deeptutor_cli/README.md, AGENTS.md, README.md |
| Developer tools / DX | 159 | deeptutor_cli/README.md, packaging/deeptutor-cli/README.md, AGENTS.md |
| Data / ML platform | 133 | README.md, pyproject.toml, deeptutor/agents/math_animator/prompts/en/visual_review_agent.yaml |
| Frontend / app framework | 79 | packaging/deeptutor-cli/README.md, AGENTS.md, README.md |
| Cloud native / infrastructure | 75 | AGENTS.md, README.md, docker-compose.yml |
| Security / supply chain | 24 | deeptutor_cli/README.md, README.md, packaging/deeptutor-cli/pyproject.toml |
| Local LLM / inference | 23 | README.md, docker-compose.yml, deeptutor_cli/init_wizard.py |
| Coding agent / software automation | 18 | deeptutor_cli/README.md, README.md, pyproject.toml |
| MCP / agent interoperability | 10 | deeptutor_cli/README.md, AGENTS.md, README.md |
| Observability / evaluation | 3 | Dockerfile, deeptutor/agents/research/prompts/en/pipeline.yaml, deeptutor/learning/prompts/en.yaml |
| Database / data infrastructure | 2 | docker-compose.yml, deeptutor/agents/visualize/prompts/en/code_generator_agent.yaml |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1522 |
| manifests | 15 |
| docs | 75 |
| tests | 303 |
| ci/ops | 8 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | DeepTutor: Agent-Native Personalized Tutoring | DeepTutor: Agent-Native Personalized Tutoring / 📦 Releases / 📰 News / ✨ Key Features / 🚀 Get Started / Create a venv (macOS/Linux). Windows PowerShell: / py -3.11 -m venv .venv ; .\.venv\Scripts\Activate.ps1 / Install backend + frontend deps / Create a venv (macOS/Linux). Windows PowerShell: / py -3.11 -m venv .venv-cli ; .\.venv-cli\Scripts\Activate.ps1 | <div align="center" <p align="center" <img src="assets/figs/logo/logo.png" alt="DeepTutor logo" height="56" style="vertical align middle;" &nbsp;<img src="assets/figs/logo/banner.png" alt="DeepTutor" height="48" style="vertical align middle;" </p DeepTutor Agent Native Personalized Tutoring <p align="center" <a href="https //deeptutor.info" target=" blank" <img alt="Docs — deeptutor.info" src="https //img.shields.io/badge/Docs deeptutor.info%20%E2%86%97 0A0A0A?style=for the badge&labelColor=F5F5F4" height="36" </a </p <a href="https //trendshift.io/repositories/17099" target=" blank" <img src="https //trendshift.io/api/badge/repositories/17099" alt="HKUDS%2FDeepTutor Trendshift" style="width |


## Key Files

### Manifests

- deeptutor_cli/README.md
- packaging/deeptutor-cli/README.md
- AGENTS.md
- README.md
- packaging/deeptutor-cli/pyproject.toml
- docker-compose.yml
- Dockerfile
- pyproject.toml
- requirements.txt
- web/next.config.js
- web/package.json
- web/tsconfig.json
- web/tsconfig.node-tests.json
- docker-compose.dev.yml
- docker-compose.ghcr.yml


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- requirements.txt
- deeptutor/agents/chat/prompts/en/agentic_chat.yaml
- deeptutor/agents/chat/prompts/en/chat_agent.yaml
- deeptutor/agents/chat/prompts/zh/agentic_chat.yaml
- deeptutor/agents/chat/prompts/zh/chat_agent.yaml
- deeptutor/agents/math_animator/prompts/en/code_generator_agent.yaml
- deeptutor/agents/math_animator/prompts/en/concept_analysis_agent.yaml
- deeptutor/agents/math_animator/prompts/en/concept_design_agent.yaml
- deeptutor/agents/math_animator/prompts/en/math_animator.yaml
- deeptutor/agents/math_animator/prompts/en/summary_agent.yaml
- deeptutor/agents/math_animator/prompts/en/visual_review_agent.yaml
- deeptutor/agents/math_animator/prompts/zh/code_generator_agent.yaml
- deeptutor/agents/math_animator/prompts/zh/concept_analysis_agent.yaml
- deeptutor/agents/math_animator/prompts/zh/concept_design_agent.yaml
- deeptutor/agents/math_animator/prompts/zh/math_animator.yaml
- deeptutor/agents/math_animator/prompts/zh/summary_agent.yaml
- deeptutor/agents/math_animator/prompts/zh/visual_review_agent.yaml
- deeptutor/agents/notebook/prompts/en/analysis_agent.yaml
- deeptutor/agents/notebook/prompts/en/summarize_agent.yaml


### Agent Instruction Files

- AGENTS.md
- deeptutor/agents/chat/prompts/en/agentic_chat.yaml
- deeptutor/agents/chat/prompts/en/chat_agent.yaml
- deeptutor/agents/chat/prompts/zh/agentic_chat.yaml
- deeptutor/agents/chat/prompts/zh/chat_agent.yaml
- deeptutor/agents/math_animator/prompts/en/code_generator_agent.yaml
- deeptutor/agents/math_animator/prompts/en/concept_analysis_agent.yaml
- deeptutor/agents/math_animator/prompts/en/concept_design_agent.yaml
- deeptutor/agents/math_animator/prompts/en/math_animator.yaml
- deeptutor/agents/math_animator/prompts/en/summary_agent.yaml
- deeptutor/agents/math_animator/prompts/en/visual_review_agent.yaml
- deeptutor/agents/math_animator/prompts/zh/code_generator_agent.yaml
- deeptutor/agents/math_animator/prompts/zh/concept_analysis_agent.yaml
- deeptutor/agents/math_animator/prompts/zh/concept_design_agent.yaml
- deeptutor/agents/math_animator/prompts/zh/math_animator.yaml


## Top Directories

| dir | count |
| --- | --- |
| deeptutor | 706 |
| web | 413 |
| tests | 275 |
| assets | 57 |
| deeptutor_cli | 21 |
| .github | 11 |
| scripts | 9 |
| requirements | 7 |
| packaging | 2 |
| .dockerignore | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |
| .secrets.baseline | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 875 |
| .tsx | 242 |
| .yaml | 121 |
| .ts | 116 |
| .md | 75 |
| .svg | 35 |
| .yml | 13 |
| .json | 9 |
| .txt | 9 |
| .mjs | 7 |
| [no-ext] | 6 |
| .js | 3 |
| .bat | 2 |
| .css | 2 |
| .toml | 2 |
| .baseline | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
