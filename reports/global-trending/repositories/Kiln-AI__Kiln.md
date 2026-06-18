# Kiln-AI/Kiln

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Kiln-AI/Kiln |
| local path | sources/Kiln-AI__Kiln |
| HEAD | ea0d075 |
| stars/forks | 4916 / 370 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T22:07:49Z |
| trendScore / priorityScore | 199 / 529 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Observability / evaluation | 351 | AGENTS.md, README.md, libs/core/README.md |
| Frontend / app framework | 341 | AGENTS.md, .config/wt/README.md, app/web_ui/src/routes/(app)/specs/[project_id]/[task_id]/[spec_id]/[eval_id]/[eval_config_id]/[run_config_id]/run_result/+page.svelte |
| AI agent / orchestration | 248 | libs/server/kiln_server/utils/agent_checks/README.md, AGENTS.md, README.md |
| RAG / retrieval / knowledge | 223 | AGENTS.md, README.md, libs/core/README.md |
| Data / ML platform | 122 | README.md, app/desktop/README.md, libs/core/README.md |
| MCP / agent interoperability | 79 | libs/server/kiln_server/mcp/README.md, README.md, .config/wt/README.md |
| Developer tools / DX | 46 | libs/server/kiln_server/mcp/README.md, libs/server/kiln_server/utils/agent_checks/README.md, README.md |
| Local LLM / inference | 32 | README.md, libs/core/README.md, app/web_ui/src/routes/(app)/specs/[project_id]/[task_id]/[spec_id]/[eval_id]/create_eval_config/+page.svelte |
| Coding agent / software automation | 25 | libs/server/kiln_server/mcp/README.md, .config/wt/README.md, app/web_ui/src/routes/(app)/specs/[project_id]/[task_id]/[spec_id]/[eval_id]/create_eval_config/+page.svelte |
| Cloud native / infrastructure | 4 | README.md, specs/projects/agent_info_trim/architecture.md, specs/projects/agent_info_trim/phase_plans/phase_2.md |
| Security / supply chain | 3 | app/desktop/studio_server/api_client/kiln_ai_server_client/README.md, app/desktop/README.md, specs/projects/mcp_sessions/01_codebase_findings.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 1687 |
| manifests | 20 |
| docs | 227 |
| tests | 282 |
| ci/ops | 12 |
| spec artifacts | 50 |
| agent instruction files | 14 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | What is Kiln? / Highlights / Iterate, optimize, and collaborate / Build & ship agents / App Quickstart / Demo / Why Kiln? / Open-source Python Library / Docs / Community | <p align="center" <a href="https //kiln.tech" <picture <source media=" prefers color scheme dark " srcset="https //github.com/user attachments/assets/faae475e 7ace 443b 91f3 0e3701f0c90d" <source media=" prefers color scheme light " srcset="https //github.com/user attachments/assets/4ca9b69f 1c90 43a4 8d2e 13de4eb2ee9c" <img width="205" alt="Kiln AI Logo" src="https //github.com/user attachments/assets/4ca9b69f 1c90 43a4 8d2e 13de4eb2ee9c" </picture </a </p <h3 align="center" A free app and open source library to build better AI products. </h3 <p align="center" <a href="https //kiln.tech demo" <img width="420" alt="Kiln AI Animated Preview" src="https //github.com/user attachments/assets/56a |


## Key Files

### Manifests

- app/desktop/studio_server/api_client/kiln_ai_server_client/README.md
- libs/server/kiln_server/mcp/README.md
- libs/server/kiln_server/utils/agent_checks/README.md
- AGENTS.md
- libs/core/tests/assets/README.md
- README.md
- .config/wt/README.md
- app/desktop/dmg/README.md
- app/desktop/git_sync/README.md
- app/desktop/README.md
- libs/core/README.md
- libs/server/README.md
- Makefile
- pyproject.toml
- app/desktop/pyproject.toml
- app/web_ui/package.json
- app/web_ui/tsconfig.json
- app/web_ui/vite.config.ts
- libs/core/pyproject.toml
- libs/server/pyproject.toml


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- app/web_ui/src/routes/(app)/specs/[project_id]/[task_id]/[spec_id]/[eval_id]/[eval_config_id]/[run_config_id]/run_result/+page.svelte
- app/web_ui/src/routes/(app)/specs/[project_id]/[task_id]/[spec_id]/[eval_id]/[eval_config_id]/[run_config_id]/run_result/+page.ts
- app/web_ui/src/routes/(app)/specs/[project_id]/[task_id]/[spec_id]/[eval_id]/+page.svelte
- app/web_ui/src/routes/(app)/specs/[project_id]/[task_id]/[spec_id]/[eval_id]/+page.ts
- app/web_ui/src/routes/(app)/specs/[project_id]/[task_id]/[spec_id]/[eval_id]/compare_run_configs/+page.svelte
- app/web_ui/src/routes/(app)/specs/[project_id]/[task_id]/[spec_id]/[eval_id]/compare_run_configs/+page.ts
- app/web_ui/src/routes/(app)/specs/[project_id]/[task_id]/[spec_id]/[eval_id]/create_eval_config/+page.svelte
- app/web_ui/src/routes/(app)/specs/[project_id]/[task_id]/[spec_id]/[eval_id]/create_eval_config/+page.ts
- app/web_ui/src/routes/(app)/specs/[project_id]/[task_id]/[spec_id]/[eval_id]/create_eval_config/eval_steps_utils.ts
- app/web_ui/src/routes/(app)/specs/[project_id]/[task_id]/[spec_id]/[eval_id]/create_eval_config/get_eval_steps.test.ts
- app/web_ui/src/routes/(app)/specs/[project_id]/[task_id]/[spec_id]/[eval_id]/eval_configs/+page.svelte
- app/web_ui/src/routes/(app)/specs/[project_id]/[task_id]/[spec_id]/[eval_id]/eval_configs/+page.ts
- app/web_ui/src/routes/(app)/specs/[project_id]/[task_id]/[spec_id]/[eval_id]/eval_configs/eval_config_instruction.svelte
- specs/projects/agent_api_info/architecture.md
- specs/projects/agent_api_info/functional_spec.md
- specs/projects/agent_api_info/implementation_plan.md
- specs/projects/agent_api_info/phase_plans/phase_1.md
- specs/projects/agent_api_info/phase_plans/phase_2.md
- specs/projects/agent_api_info/phase_plans/phase_3.md


### Agent Instruction Files

- AGENTS.md
- app/web_ui/src/routes/(app)/prompts/[project_id]/[task_id]/+page.svelte
- app/web_ui/src/routes/(app)/prompts/[project_id]/[task_id]/+page.ts
- app/web_ui/src/routes/(app)/prompts/[project_id]/[task_id]/clone/[prompt_id]/+page.svelte
- app/web_ui/src/routes/(app)/prompts/[project_id]/[task_id]/clone/[prompt_id]/+page.ts
- app/web_ui/src/routes/(app)/prompts/[project_id]/[task_id]/create/+page.svelte
- app/web_ui/src/routes/(app)/prompts/[project_id]/[task_id]/create/+page.ts
- app/web_ui/src/routes/(app)/prompts/[project_id]/[task_id]/edit_base_prompt/+page.svelte
- app/web_ui/src/routes/(app)/prompts/[project_id]/[task_id]/edit_base_prompt/+page.ts
- app/web_ui/src/routes/(app)/prompts/[project_id]/[task_id]/prompt_form.svelte
- app/web_ui/src/routes/(app)/prompts/[project_id]/[task_id]/prompt_generators/+page.svelte
- app/web_ui/src/routes/(app)/prompts/[project_id]/[task_id]/prompt_generators/+page.ts
- app/web_ui/src/routes/(app)/prompts/[project_id]/[task_id]/saved/[prompt_id]/+page.svelte
- app/web_ui/src/routes/(app)/prompts/[project_id]/[task_id]/saved/[prompt_id]/+page.ts


## Top Directories

| dir | count |
| --- | --- |
| app | 900 |
| libs | 582 |
| specs | 144 |
| .config | 18 |
| .agents | 17 |
| .github | 15 |
| .vscode | 2 |
| .gitignore | 1 |
| AGENTS.md | 1 |
| checks.sh | 1 |
| conftest.py | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE.txt | 1 |
| Makefile | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 603 |
| .svelte | 320 |
| .ts | 250 |
| .json | 216 |
| .md | 178 |
| .svg | 40 |
| [no-ext] | 20 |
| .yml | 13 |
| .sh | 12 |
| .toml | 6 |
| .txt | 5 |
| .js | 3 |
| .cfg | 2 |
| .example | 2 |
| .html | 2 |
| .css | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
