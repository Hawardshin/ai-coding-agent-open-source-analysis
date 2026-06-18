# future-agi/future-agi

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/future-agi/future-agi |
| local path | sources/future-agi__future-agi |
| HEAD | 2cf0532 |
| stars/forks | 1182 / 260 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T16:35:13Z |
| trendScore / priorityScore | 134 / 450 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 408 | agentcc-gateway/README.md, frontend/README.md, futureagi/agentic_eval/core_evals/run_prompt/tests/README.md |
| Observability / evaluation | 391 | agentcc-gateway/README.md, futureagi/model_serving/docs/README.md, deploy/README.md |
| Frontend / app framework | 384 | agentcc-gateway/README.md, frontend/README.md, deploy/README.md |
| AI agent / orchestration | 143 | agentcc-gateway/README.md, README.md, .github/assets/README.md |
| Database / data infrastructure | 137 | agentcc-gateway/README.md, futureagi/agentic_eval/core_evals/run_prompt/tests/README.md, deploy/README.md |
| Data / ML platform | 85 | agentcc-gateway/README.md, frontend/README.md, futureagi/model_serving/docs/README.md |
| Security / supply chain | 76 | agentcc-gateway/README.md, futureagi/api_docs/prompt-label/assign-multiple-labels-tests/README.md, futureagi/model_serving/docs/README.md |
| Developer tools / DX | 63 | agentcc-gateway/README.md, futureagi/README.md, README.md |
| MCP / agent interoperability | 59 | agentcc-gateway/README.md, README.md, .github/assets/README.md |
| Coding agent / software automation | 22 | frontend/README.md, .github/assets/README.md, frontend/src/sections/prompt/NewPrompt/ImprovePrompt/PromptItemDisplay.jsx |
| RAG / retrieval / knowledge | 22 | agentcc-gateway/README.md, futureagi/model_serving/docs/README.md, README.md |
| Local LLM / inference | 16 | agentcc-gateway/README.md, README.md, agentcc-gateway/config.example.yaml |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Go |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 7952 |
| manifests | 40 |
| docs | 37 |
| tests | 724 |
| ci/ops | 44 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | AI Agents hallucinate. Fix it faster. | AI Agents hallucinate. Fix it faster. / Why Future AGI? / All-in-one / Open & self-hostable / Built for production / 🚀 Quickstart (60 seconds) / Sign up free: / app.futureagi.com / macOS / Linux / WSL / Windows (PowerShell) | <! ╔═════════════════════════════════════════════════════════════════════════════╗ ║ MARKETING NOTES FOR IMAGE ASSETS ║ ║ ║ ║ All images below live under .github/assets/. Specs + intent are inlined ║ ║ above each <img tag as HTML comments. Total asset budget < 12 MB. ║ ║ Use PNG for static screenshots, GIF only where called out. Ship light + ║ ║ dark variants via <picture for any image that contains a UI screenshot ║ ║ GitHub dark mode users will see the dark file . ║ ╚═════════════════════════════════════════════════════════════════════════════╝ ⚠️ Nightly release for early testing. Expect rough edges. Stable version coming out soon — please open an issue if you hit anything. <div align="ce |


## Key Files

### Manifests

- agentcc-gateway/README.md
- frontend/README.md
- futureagi/agentic_eval/core_evals/run_prompt/tests/README.md
- futureagi/api_docs/prompt-label/assign-multiple-labels-tests/README.md
- futureagi/model_serving/docs/README.md
- deploy/README.md
- futureagi/README.md
- README.md
- .github/assets/README.md
- futureagi/model_serving/README.md
- futureagi/simulate/README.md
- futureagi/tfc/temporal/simulate/README.md
- agentcc-gateway/Dockerfile
- agentcc-gateway/go.mod
- agentcc-gateway/Makefile
- frontend/docker-compose.yml
- frontend/Dockerfile
- frontend/package.json
- futureagi/agentic_eval/docker-compose.yml
- futureagi/agentic_eval/Makefile


### Spec / Docs / Prompt Artifacts

- futureagi/requirements.txt
- frontend/public/assets/prompt/commit.svg
- frontend/public/assets/prompt/editPencil.svg
- frontend/public/assets/prompt/generate-prompt.svg
- frontend/public/assets/prompt/improve-prompt.svg
- frontend/public/assets/prompt/landing.svg
- frontend/public/assets/prompt/saveDefault.svg
- frontend/public/assets/prompt/slider-options.svg
- frontend/public/assets/prompt/tools.svg
- frontend/public/assets/prompt/write-prompt.svg
- frontend/src/api/prompt/prompt-labels.js
- frontend/src/pages/dashboard/Prompt/AddNewPrompt.jsx
- frontend/src/pages/dashboard/Prompt/Prompt.jsx
- frontend/src/sections/prompt/NewPrompt/AddNewPrompt.jsx
- frontend/src/sections/prompt/NewPrompt/AddNewPromptStyle.js
- frontend/src/sections/prompt/NewPrompt/ImprovePrompt/EditablePromptItem.jsx
- frontend/src/sections/prompt/NewPrompt/ImprovePrompt/ImprovePrompt.jsx
- frontend/src/sections/prompt/NewPrompt/ImprovePrompt/ImprovePromptBox.jsx
- frontend/src/sections/prompt/NewPrompt/ImprovePrompt/PromptItemDisplay.jsx
- frontend/src/sections/prompt/NewPrompt/Menubar/LeftMenu.jsx


### Agent Instruction Files

- frontend/public/assets/prompt/commit.svg
- frontend/public/assets/prompt/editPencil.svg
- frontend/public/assets/prompt/generate-prompt.svg
- frontend/public/assets/prompt/improve-prompt.svg
- frontend/public/assets/prompt/landing.svg
- frontend/public/assets/prompt/saveDefault.svg
- frontend/public/assets/prompt/slider-options.svg
- frontend/public/assets/prompt/tools.svg
- frontend/public/assets/prompt/write-prompt.svg
- frontend/src/api/prompt/prompt-labels.js
- frontend/src/pages/dashboard/Prompt/AddNewPrompt.jsx
- frontend/src/pages/dashboard/Prompt/Prompt.jsx
- frontend/src/sections/prompt/NewPrompt/AddNewPrompt.jsx
- frontend/src/sections/prompt/NewPrompt/AddNewPromptStyle.js
- frontend/src/sections/prompt/NewPrompt/ImprovePrompt/EditablePromptItem.jsx


## Top Directories

| dir | count |
| --- | --- |
| frontend | 4199 |
| futureagi | 3311 |
| agentcc-gateway | 390 |
| .github | 27 |
| deploy | 4 |
| bin | 3 |
| .husky | 2 |
| .env.example | 1 |
| .gitignore | 1 |
| .gitleaks.toml | 1 |
| .lintstagedrc.cjs | 1 |
| BRANCH_NAMING_CONVENTION.md | 1 |
| CONTRIBUTING.md | 1 |
| docker-compose.dev.yml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .jsx | 2696 |
| .py | 2304 |
| .js | 779 |
| .bru | 727 |
| .svg | 650 |
| .go | 380 |
| .yaml | 165 |
| .css | 39 |
| .html | 36 |
| .yml | 35 |
| [no-ext] | 29 |
| .json | 24 |
| .md | 21 |
| .sh | 14 |
| .sql | 6 |
| .txt | 6 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
