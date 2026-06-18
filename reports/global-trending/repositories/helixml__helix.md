# helixml/helix

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/helixml/helix |
| local path | sources/helixml__helix |
| HEAD | 085c905 |
| stars/forks | 781 / 75 |
| language | Go |
| license |  |
| pushedAt | 2026-06-17T17:46:35Z |
| trendScore / priorityScore | 148 / 464 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 258 | api/pkg/cli/spectask/README.md, demos/compliance-analyzer/README.md, design/sample-profiles/README.md |
| AI agent / orchestration | 204 | examples/goose_recipes/README.md, api/pkg/cli/spectask/README.md, demos/compliance-analyzer/README.md |
| Frontend / app framework | 173 | demos/compliance-analyzer/README.md, for-mac/README.md, helix-org/demos/github-engineer/README.md |
| Developer tools / DX | 138 | examples/sdk/javascript/README.md, examples/test/README.md, api/pkg/cli/spectask/README.md |
| Security / supply chain | 132 | demos/compliance-analyzer/README.md, for-mac/README.md, helix-org/demos/github-engineer/README.md |
| MCP / agent interoperability | 110 | mcp-servers/drone-ci/README.md, helix-org/demos/email/README.md, helix-org/demos/getting-started/README.md |
| Coding agent / software automation | 84 | examples/goose_recipes/README.md, mcp-servers/drone-ci/README.md, helix-org/demos/mlops-newsletter/README.md |
| Database / data infrastructure | 73 | api/pkg/cli/spectask/README.md, examples/custom_rag/nodejs/readme.md, helix-org/demos/email/README.md |
| Observability / evaluation | 72 | examples/test/README.md, README.md, CLAUDE.md |
| RAG / retrieval / knowledge | 46 | demos/compliance-analyzer/README.md, examples/custom_rag/nodejs/readme.md, README.md |
| Data / ML platform | 38 | examples/test/README.md, demos/README.md, helix-org/demos/mlops-newsletter/README.md |
| Local LLM / inference | 36 | design/sample-profiles/README.md, examples/api_tools_custom_provider.yaml, examples/concurrent-models.yaml |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go, Swift, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 2874 |
| manifests | 40 |
| docs | 372 |
| tests | 452 |
| ci/ops | 24 |
| spec artifacts | 33 |
| agent instruction files | 32 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | HelixML - AI Agents on a Private GenAI Stack | HelixML - AI Agents on a Private GenAI Stack / ✨ Key Features / 🤖 AI Agents / 🛠️ Skills and Tools / 📚 Knowledge Management / 🔍 Tracing and Observability / 🚀 Additional Features / 🏗️ Architecture / 💻 Tech Stack / Backend | <div align="center" <img alt="logo" src="https //helix.ml/assets/helix logo.png" width="250px" <br/ <br/ </div <p align="center" <a href="https //app.helix.ml/" SaaS</a • <a href="https //helix.ml/docs" Private Deployment</a • <a href="https //helix.ml/docs" Docs</a • <a href="https //discord.gg/VJftd844GE" Discord</a </p HelixML AI Agents on a Private GenAI Stack 👥 Discord https //discord.gg/VJftd844GE Deploy AI agents in your own data center or VPC and retain complete data security & control. HelixML is an enterprise grade platform for building and deploying AI agents with support for RAG Retrieval Augmented Generation , API calling, vision, and multi provider LLM support. Build and deplo |


## Key Files

### Manifests

- examples/goose_recipes/README.md
- examples/sdk/javascript/README.md
- examples/test/README.md
- api/pkg/cli/spectask/README.md
- frontend/src/lib/helix-stream/resources/README.md
- mcp-servers/drone-ci/README.md
- demos/README.md
- demos/compliance-analyzer/README.md
- design/sample-profiles/README.md
- for-mac/README.md
- helix-org/demos/email/README.md
- helix-org/demos/getting-started/README.md
- helix-org/demos/github-engineer/README.md
- helix-org/demos/github/README.md
- helix-org/demos/manufacturing/README.md
- helix-org/demos/mlops-newsletter/README.md
- helix-org/demos/newsroom/README.md
- helix-org/demos/webhook/README.md
- integration-test/api/README.md
- integration-test/gpucloud/README.md


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- api/pkg/agent/prompts/no_skills_prompt_test.go
- api/pkg/agent/prompts/skill_context_runner_test.go
- api/pkg/org/application/prompts/help_test.go
- api/pkg/org/application/prompts/registry_test.go
- api/pkg/org/application/prompts/role_test.go
- api/pkg/prompts/helix_code_prompts_test.go
- api/pkg/prompts/prompts_test.go
- .cursor/rules/frontend-structure.mdc
- .cursor/rules/use-frontend-api-client.mdc
- .cursor/rules/use-gorm-for-database.mdc
- api/pkg/agent/prompts/no_skills_prompt.go
- api/pkg/agent/prompts/prompts.go
- api/pkg/agent/prompts/skill_context_runner.go
- api/pkg/agent/prompts/skill_selection.go
- api/pkg/org/application/prompts/builtins.go
- api/pkg/org/application/prompts/help.go
- api/pkg/org/application/prompts/prompt.go
- api/pkg/org/application/prompts/registry.go
- api/pkg/org/application/prompts/role.go


### Agent Instruction Files

- CLAUDE.md
- api/pkg/agent/prompts/no_skills_prompt_test.go
- api/pkg/agent/prompts/skill_context_runner_test.go
- api/pkg/org/application/prompts/help_test.go
- api/pkg/org/application/prompts/registry_test.go
- api/pkg/org/application/prompts/role_test.go
- api/pkg/prompts/helix_code_prompts_test.go
- api/pkg/prompts/prompts_test.go
- .cursor/rules/frontend-structure.mdc
- .cursor/rules/use-frontend-api-client.mdc
- .cursor/rules/use-gorm-for-database.mdc
- api/pkg/agent/prompts/no_skills_prompt.go
- api/pkg/agent/prompts/prompts.go
- api/pkg/agent/prompts/skill_context_runner.go
- api/pkg/agent/prompts/skill_selection.go


## Top Directories

| dir | count |
| --- | --- |
| api | 1294 |
| frontend | 688 |
| design | 311 |
| desktop | 93 |
| for-mac | 77 |
| integration-test | 65 |
| operator | 54 |
| examples | 51 |
| charts | 43 |
| scripts | 38 |
| demos | 35 |
| helix-org | 32 |
| sandbox | 18 |
| .cursor | 5 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 1313 |
| .tsx | 487 |
| .md | 372 |
| .ts | 195 |
| .yaml | 122 |
| .sh | 90 |
| .json | 49 |
| .rs | 44 |
| [no-ext] | 26 |
| .svg | 21 |
| .js | 19 |
| .yml | 14 |
| .html | 13 |
| .txt | 10 |
| .sql | 8 |
| .tmpl | 8 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
