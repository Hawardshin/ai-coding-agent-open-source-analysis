# Kiln-AI/Kiln

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Kiln-AI/Kiln |
| local path | sources/Kiln-AI__Kiln |
| HEAD | ea0d075 |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T22:07:49Z |
| trendScore / priorityScore | 67 / 227 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Spec / doc-driven workflow | 442 | .config/wt/README.md, app/desktop/git_sync/README.md, libs/core/README.md |
| Frontend / developer experience | 349 | AGENTS.md, .config/wt/README.md, libs/core/README.md |
| RAG / retrieval | 279 | AGENTS.md, README.md, libs/core/README.md |
| AI agent / tool use | 248 | libs/server/kiln_server/utils/agent_checks/README.md, AGENTS.md, README.md |
| MCP / tool protocol | 77 | libs/server/kiln_server/mcp/README.md, README.md, libs/server/README.md |
| Security / compliance | 77 | libs/server/kiln_server/utils/agent_checks/README.md, app/desktop/README.md, app/desktop/studio_server/api_client/kiln_ai_server_client/README.md |
| Local LLM / on-device inference | 32 | README.md, libs/core/README.md, app/web_ui/src/routes/(app)/specs/[project_id]/[task_id]/[spec_id]/[eval_id]/create_eval_config/+page.svelte |
| LLM wiki / memory / graph | 28 | Makefile, specs/projects/agent_api_info/architecture.md, specs/projects/agent_api_info/functional_spec.md |
| Infra / observability | 13 | libs/core/README.md, specs/projects/mcp_sessions/02_design_report.md, app/desktop/pyproject.toml |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, context-engineering, data-ml, documentParsing, evalObservability, frontend-dx, graphMemory, infra-observability, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 1687 |
| manifests | 20 |
| docs | 227 |
| tests | 282 |
| ci/ops | 12 |
| spec artifacts | 50 |
| agent instruction files | 14 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings | What is Kiln? / Highlights / Iterate, optimize, and collaborate / Build & ship agents / App Quickstart / Demo / Why Kiln? / Open-source Python Library / Docs / Community |
| excerpt | <p align="center" <a href="https //kiln.tech" <picture <source media=" prefers color scheme dark " srcset="https //github.com/user attachments/assets/faae475e 7ace 443b 91f3 0e3701f0c90d" <source media=" prefers color scheme light " srcset="https //github.com/user attachments/assets/4ca9b69f 1c90 43a4 8d2e 13de4eb2ee9c" <img width="205" alt="Kiln AI Logo" src="https //github.com/user attachments/assets/4ca9b69f 1c90 43a4 8d2e 13de4eb2ee9c" </picture </a </p <h3 align="center" A free app and open source library to build better AI products. </h3 <p align="center" <a href="https //kiln.tech demo" <img width="420" alt="Kiln AI Animated Preview" src="https //github.com/user attachments/assets/56a |


## 주요 파일

### Manifests

- libs/server/kiln_server/mcp/README.md
- libs/server/kiln_server/utils/agent_checks/README.md
- AGENTS.md
- libs/core/tests/assets/README.md
- README.md
- .config/wt/README.md
- app/desktop/dmg/README.md
- app/desktop/git_sync/README.md
- app/desktop/README.md
- app/desktop/studio_server/api_client/kiln_ai_server_client/README.md
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


## 상위 디렉터리

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


## 확장자 분포

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


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
