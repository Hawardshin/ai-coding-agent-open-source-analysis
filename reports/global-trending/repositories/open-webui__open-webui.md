# open-webui/open-webui

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/open-webui/open-webui |
| local path | sources/open-webui__open-webui |
| HEAD | 02dc3e6 |
| stars/forks | 142039 / 20413 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2026-06-17T01:18:08Z |
| trendScore / priorityScore | 199 / 526 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval / knowledge | 233 | README.md, backend/requirements.txt, Dockerfile |
| Frontend / app framework | 229 | Dockerfile, package.json, pyproject.toml |
| Cloud native / infrastructure | 168 | README.md, backend/requirements.txt, docker-compose.yaml |
| Security / supply chain | 120 | README.md, Dockerfile, docs/SECURITY.md |
| Coding agent / software automation | 106 | README.md, docs/SECURITY.md, src/lib/components/workspace/Prompts/PromptEditor.svelte |
| Database / data infrastructure | 88 | README.md, backend/requirements.txt, pyproject.toml |
| Local LLM / inference | 74 | README.md, docker-compose.yaml, Dockerfile |
| Developer tools / DX | 20 | README.md, backend/requirements.txt, pyproject.toml |
| Observability / evaluation | 20 | README.md, backend/requirements.txt, backend/open_webui/retrieval/loaders/mistral.py |
| MCP / agent interoperability | 19 | backend/requirements.txt, pyproject.toml, backend/open_webui/utils/mcp/client.py |
| AI agent / orchestration | 13 | README.md, docs/SECURITY.md, backend/open_webui/retrieval/loaders/external_web.py |
| Data / ML platform | 5 | Dockerfile, backend/open_webui/retrieval/loaders/mineru.py, backend/open_webui/retrieval/utils.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 4898 |
| manifests | 16 |
| docs | 6 |
| tests | 1 |
| ci/ops | 18 |
| spec artifacts | 8 |
| agent instruction files | 7 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Open WebUI 👋 | Open WebUI 👋 / Key Features of Open WebUI ⭐ / How to Install 🚀 / Installation via Python pip 🐍 / Quick Start with Docker 🐳 / Installation with Default Configuration / Installation for OpenAI API Usage Only / Installing Open WebUI with Bundled Ollama Support / Other Installation Methods / Troubleshooting | Open WebUI 👋 ! GitHub stars https //img.shields.io/github/stars/open webui/open webui?style=social ! GitHub forks https //img.shields.io/github/forks/open webui/open webui?style=social ! GitHub watchers https //img.shields.io/github/watchers/open webui/open webui?style=social ! GitHub repo size https //img.shields.io/github/repo size/open webui/open webui ! GitHub language count https //img.shields.io/github/languages/count/open webui/open webui ! GitHub top language https //img.shields.io/github/languages/top/open webui/open webui ! GitHub last commit https //img.shields.io/github/last commit/open webui/open webui?color=red ! Discord https //img.shields.io/badge/Discord Open WebUI blue?log |


## Key Files

### Manifests

- README.md
- backend/requirements.txt
- docker-compose.yaml
- Dockerfile
- Makefile
- package.json
- pyproject.toml
- tsconfig.json
- vite.config.ts
- docker-compose.a1111-test.yaml
- docker-compose.amdgpu.yaml
- docker-compose.api.yaml
- docker-compose.data.yaml
- docker-compose.gpu.yaml
- docker-compose.otel.yaml
- docker-compose.playwright.yaml


### Spec / Docs / Prompt Artifacts

- backend/requirements.txt
- src/lib/apis/prompts/index.ts
- src/lib/components/workspace/Prompts/PromptEditor.svelte
- src/lib/components/workspace/Prompts/PromptHistoryMenu.svelte
- src/lib/components/workspace/Prompts/PromptMenu.svelte
- src/routes/(app)/workspace/prompts/[id]/+page.svelte
- src/routes/(app)/workspace/prompts/+page.svelte
- src/routes/(app)/workspace/prompts/create/+page.svelte


### Agent Instruction Files

- src/lib/apis/prompts/index.ts
- src/lib/components/workspace/Prompts/PromptEditor.svelte
- src/lib/components/workspace/Prompts/PromptHistoryMenu.svelte
- src/lib/components/workspace/Prompts/PromptMenu.svelte
- src/routes/(app)/workspace/prompts/[id]/+page.svelte
- src/routes/(app)/workspace/prompts/+page.svelte
- src/routes/(app)/workspace/prompts/create/+page.svelte


## Top Directories

| dir | count |
| --- | --- |
| static | 3857 |
| src | 728 |
| backend | 251 |
| .github | 14 |
| scripts | 2 |
| .dockerignore | 1 |
| .env.example | 1 |
| .eslintignore | 1 |
| .eslintrc.cjs | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .npmrc | 1 |
| .pre-commit-config.yaml | 1 |
| .prettierignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .svg | 3840 |
| .svelte | 584 |
| .py | 224 |
| .ts | 74 |
| .json | 70 |
| .ttf | 16 |
| [no-ext] | 16 |
| .yaml | 14 |
| .js | 11 |
| .css | 8 |
| .sh | 8 |
| .md | 6 |
| .yml | 5 |
| .disabled | 3 |
| .txt | 3 |
| .csv | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
