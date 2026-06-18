# comet-ml/opik

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/comet-ml/opik |
| local path | sources/comet-ml__opik |
| HEAD | 69842d4 |
| stars/forks | 19680 / 1524 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T23:39:13Z |
| trendScore / priorityScore | 183 / 551 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | tests_end_to_end/e2e/agents/README.md, .agents/skills/README.md, sdks/opik_optimizer/benchmarks/README.md |
| Data / ML platform | 500 | sdks/opik_optimizer/benchmarks/README.md, sdks/opik_optimizer/scripts/benchmarks/README.md, sdks/python/AGENTS.md |
| Observability / evaluation | 500 | tests_end_to_end/e2e/agents/README.md, apps/opik-frontend/README.md, sdks/opik_optimizer/benchmarks/README.md |
| Developer tools / DX | 343 | .agents/skills/README.md, sdks/opik_optimizer/benchmarks/README.md, AGENTS.md |
| Frontend / app framework | 289 | .agents/skills/README.md, apps/opik-frontend/e2e/README.md, apps/opik-frontend/README.md |
| MCP / agent interoperability | 247 | AGENTS.md, apps/opik-backend/AGENTS.md, apps/opik-documentation/AGENTS.md |
| Cloud native / infrastructure | 194 | .agents/skills/README.md, apps/opik-frontend/README.md, AGENTS.md |
| Database / data infrastructure | 113 | .agents/skills/README.md, AGENTS.md, apps/opik-backend/AGENTS.md |
| Coding agent / software automation | 88 | .agents/skills/README.md, AGENTS.md, README.md |
| Security / supply chain | 76 | sdks/opik_optimizer/benchmarks/README.md, AGENTS.md, apps/opik-backend/AGENTS.md |
| Local LLM / inference | 25 | README.md, apps/opik-documentation/documentation/fern/docs/agent_optimization/getting_started/quickstart.mdx, apps/opik-documentation/documentation/fern/docs/agent_optimization/opik_optimizer/configure_models.mdx |
| RAG / retrieval / knowledge | 12 | sdks/opik_optimizer/benchmarks/README.md, README.md, apps/opik-documentation/documentation/fern/docs/agent_optimization/algorithms/benchmarks.mdx |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 8000 (capped) |
| manifests | 40 |
| docs | 868 |
| tests | 1113 |
| ci/ops | 98 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Clone the Opik repository | 🚀 What is Opik? / 🛠️ Opik Server Installation / Option 1: Comet.com Cloud (Easiest & Recommended) / Option 2: Self-Host Opik for Full Control / Clone the Opik repository / Navigate to the repository / Start the Opik platform / Clone the Opik repository / Navigate to the repository / Start the Opik platform | <div align="center" <b <a href="README.md" English</a <a href="readme CN.md" 简体中文</a <a href="readme JP.md" 日本語</a <a href="readme PT BR.md" Português Brasil </a <a href="readme KO.md" 한국어</a <br <a href="readme ES.md" Español</a <a href="readme FR.md" Français</a <a href="readme DE.md" Deutsch</a <a href="readme RU.md" Русский</a <a href="readme AR.md" العربية</a <a href="readme HI.md" हिन्दी</a <a href="readme TR.md" Türkçe</a </b </div <h1 align="center" style="border bottom none" <div <a href="https //www.comet.com/site/products/opik/?from=llm&utm source=opik&utm medium=github&utm content=header img&utm campaign=opik" <picture <source media=" prefers color scheme dark " srcset="https //r |


## Key Files

### Manifests

- tests_end_to_end/e2e/agents/README.md
- .agents/skills/README.md
- apps/opik-frontend/e2e/README.md
- apps/opik-frontend/README.md
- sdks/opik_optimizer/benchmarks/README.md
- sdks/opik_optimizer/scripts/benchmarks/README.md
- AGENTS.md
- apps/opik-backend/AGENTS.md
- apps/opik-documentation/AGENTS.md
- sdks/opik_optimizer/AGENTS.md
- sdks/python/AGENTS.md
- sdks/typescript/AGENTS.md
- tests_load/README.md
- README.md
- scripts/README.md
- sdks/typescript/tests/integration/api/README.md
- tests_end_to_end/e2e/README.md
- tests_end_to_end/e2e/services/opik-sdk-driver/README.md
- tests_end_to_end/typescript-tests/README.md
- apps/opik-backend/data-migrations/1.0.3/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- apps/opik-backend/AGENTS.md
- apps/opik-documentation/AGENTS.md
- sdks/opik_optimizer/AGENTS.md
- sdks/python/AGENTS.md
- sdks/typescript/AGENTS.md
- sdks/python/tests/e2e_library_integration/litellm/requirements.txt
- .github/copilot-instructions.md
- tests_load/requirements.txt
- sdks/typescript/src/opik/rest_api/api/resources/prompts/types/CreatePromptVersionDetailTemplateStructure.ts
- sdks/typescript/src/opik/rest_api/api/resources/prompts/types/PromptWriteTemplateStructure.ts
- sdks/typescript/tests/unit/prompt/ChatPrompt.test.ts
- sdks/typescript/tests/unit/prompt/directInstantiation.test.ts
- sdks/typescript/tests/unit/prompt/fixtures.ts
- sdks/typescript/tests/unit/prompt/maskContext.test.ts
- sdks/typescript/tests/unit/prompt/Prompt.constructor.test.ts
- sdks/typescript/tests/unit/prompt/Prompt.factory.test.ts
- sdks/typescript/tests/unit/prompt/Prompt.format.test.ts
- sdks/typescript/tests/unit/prompt/Prompt.methods.test.ts
- sdks/typescript/tests/unit/prompt/promptCache.test.ts


### Agent Instruction Files

- AGENTS.md
- apps/opik-backend/AGENTS.md
- apps/opik-documentation/AGENTS.md
- sdks/opik_optimizer/AGENTS.md
- sdks/python/AGENTS.md
- sdks/typescript/AGENTS.md
- .github/copilot-instructions.md
- sdks/typescript/src/opik/rest_api/api/resources/prompts/types/CreatePromptVersionDetailTemplateStructure.ts
- sdks/typescript/src/opik/rest_api/api/resources/prompts/types/PromptWriteTemplateStructure.ts
- sdks/typescript/tests/unit/prompt/ChatPrompt.test.ts
- sdks/typescript/tests/unit/prompt/directInstantiation.test.ts
- sdks/typescript/tests/unit/prompt/fixtures.ts
- sdks/typescript/tests/unit/prompt/maskContext.test.ts
- sdks/typescript/tests/unit/prompt/Prompt.constructor.test.ts
- sdks/typescript/tests/unit/prompt/Prompt.factory.test.ts


## Top Directories

| dir | count |
| --- | --- |
| apps | 5247 |
| sdks | 2293 |
| tests_end_to_end | 170 |
| .github | 98 |
| .agents | 71 |
| deployment | 35 |
| extensions | 20 |
| scripts | 18 |
| tests_load | 17 |
| .cursorignore | 1 |
| .editorconfig | 1 |
| .env.template | 1 |
| .git-blame-ignore-revs | 1 |
| .gitattributes | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 2217 |
| .java | 1587 |
| .tsx | 1548 |
| .py | 1131 |
| .mdx | 564 |
| .sql | 184 |
| .md | 150 |
| .rst | 122 |
| .svg | 90 |
| .yml | 83 |
| .json | 55 |
| .yaml | 53 |
| [no-ext] | 44 |
| .ipynb | 37 |
| .sh | 31 |
| .txt | 20 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
