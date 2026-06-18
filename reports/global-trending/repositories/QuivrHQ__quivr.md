# QuivrHQ/quivr

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/QuivrHQ/quivr |
| local path | sources/QuivrHQ__quivr |
| HEAD | 947a785 |
| stars/forks | 39165 / 3725 |
| language | Python |
| license |  |
| pushedAt | 2025-07-09T12:55:23Z |
| trendScore / priorityScore | 137 / 376 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval / knowledge | 145 | core/README.md, README.md, core/pyproject.toml |
| Data / ML platform | 56 | examples/quivr-whisper/static/app.js, core/quivr_core/llm/llm_endpoint.py, core/quivr_core/rag/entities/config.py |
| AI agent / orchestration | 30 | core/pyproject.toml, docs/docs/workflows/examples/rag_with_web_search.md, examples/chatbot_voice/.chainlit/config.toml |
| Developer tools / DX | 19 | examples/chatbot_voice/README.md, examples/chatbot/README.md, core/pyproject.toml |
| Cloud native / infrastructure | 17 | docs/docs/css/style.css, core/quivr_core/rag/quivr_rag.py, core/scripts/run_tests_buildx.sh |
| Security / supply chain | 15 | examples/chatbot_voice/.chainlit/config.toml, examples/chatbot_voice/.chainlit/translations/bn.json, examples/chatbot_voice/.chainlit/translations/en-US.json |
| Frontend / app framework | 7 | examples/chatbot_voice/.chainlit/config.toml, examples/chatbot/.chainlit/config.toml, core/CHANGELOG.md |
| Observability / evaluation | 7 | core/pyproject.toml, core/quivr_core/rag/utils.py, core/CHANGELOG.md |
| Database / data infrastructure | 6 | core/tests/processor/data/guidelines_code.md |
| Local LLM / inference | 5 | README.md, docs/docs/workflows/examples/basic_rag.md, docs/docs/workflows/examples/rag_with_web_search.md |
| Coding agent / software automation | 3 | examples/quivr-whisper/static/styles.css, docs/docs/css/style.css |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, observability, rag, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 207 |
| manifests | 13 |
| docs | 47 |
| tests | 35 |
| ci/ops | 5 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Quivr - Your Second Brain, Empowered by Generative AI | Quivr - Your Second Brain, Empowered by Generative AI / Key Features 🎯 / Getting Started 🚀 / Prerequisites 📋 / 30 seconds Installation 💽 / Configuration / Workflows / Maximum number of previous conversation iterations / to include in the context of the answer / Reranker configuration | Quivr Your Second Brain, Empowered by Generative AI <div align="center" <img src="./logo.png" alt="Quivr logo" width="31%" style="border radius 50%; padding bottom 20px"/ </div ! Discord Follow https //dcbadge.vercel.app/api/server/HUpRgp2HG8?style=flat https //discord.gg/HUpRgp2HG8 ! GitHub Repo stars https //img.shields.io/github/stars/quivrhq/quivr?style=social https //github.com/quivrhq/quivr ! Twitter Follow https //img.shields.io/twitter/follow/StanGirard?style=social https //twitter.com/ StanGirard Quivr, helps you build your second brain, utilizes the power of GenerativeAI to be your personal assistant ! Key Features 🎯 Opiniated RAG We created a RAG that is opinionated, fast and eff |


## Key Files

### Manifests

- docs/README.md
- examples/chatbot_voice/README.md
- examples/chatbot/README.md
- examples/quivr-whisper/README.md
- examples/simple_question/README.md
- core/README.md
- README.md
- docs/pyproject.toml
- examples/chatbot_voice/pyproject.toml
- examples/chatbot/pyproject.toml
- examples/quivr-whisper/pyproject.toml
- examples/simple_question/pyproject.toml
- core/pyproject.toml


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| core | 87 |
| examples | 60 |
| docs | 35 |
| .github | 11 |
| .vscode | 3 |
| .flake8 | 1 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |
| .python-version | 1 |
| .readthedocs.yaml | 1 |
| .release-please-manifest.json | 1 |
| CHANGELOG.md | 1 |
| LICENSE | 1 |
| README.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 77 |
| .md | 39 |
| .json | 28 |
| [no-ext] | 19 |
| .yml | 11 |
| .toml | 8 |
| .yaml | 7 |
| .svg | 3 |
| .css | 2 |
| .epub | 2 |
| .odt | 2 |
| .sh | 2 |
| .docx | 1 |
| .html | 1 |
| .ini | 1 |
| .js | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
