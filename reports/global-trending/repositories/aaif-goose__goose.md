# aaif-goose/goose

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/aaif-goose/goose |
| local path | sources/aaif-goose__goose |
| HEAD | d2ab786 |
| stars/forks | 49691 / 5261 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-18T00:13:24Z |
| trendScore / priorityScore | 200 / 557 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Coding agent / software automation | 500 | examples/plugins/hello-hooks/README.md, crates/goose-mcp/README.md, documentation/automation/cli-command-tracking/README.md |
| Developer tools / DX | 500 | examples/mcp-wiki/README.md, documentation/automation/cli-command-tracking/README.md, evals/harbor/README.md |
| MCP / agent interoperability | 500 | examples/mcp-wiki/README.md, crates/goose-mcp/README.md, evals/open-model-gym/mcp-harness/README.md |
| Security / supply chain | 241 | AGENTS.md, oidc-proxy/README.md, scripts/provider-error-proxy/README.md |
| AI agent / orchestration | 207 | examples/plugins/hello-hooks/README.md, evals/harbor/README.md, evals/open-model-gym/README.md |
| Cloud native / infrastructure | 166 | evals/harbor/README.md, AGENTS.md, ui/text/AGENTS.md |
| Observability / evaluation | 89 | evals/harbor/README.md, scripts/README.md, documentation/docs/docker/Dockerfile |
| Database / data infrastructure | 69 | recipe-scanner/Dockerfile, crates/goose/Cargo.toml, documentation/docs/guides/goose-cli-commands.md |
| Frontend / app framework | 67 | AGENTS.md, ui/text/AGENTS.md, ui/desktop/README.md |
| Data / ML platform | 50 | documentation/automation/cli-command-tracking/README.md, evals/harbor/README.md, documentation/automation/recipe-schema-tracking/README.md |
| RAG / retrieval / knowledge | 25 | documentation/docs/mcp/cloudflare-mcp.md, documentation/docs/mcp/cognee-mcp.md, documentation/docs/mcp/datahub-mcp.mdx |
| Local LLM / inference | 8 | evals/open-model-gym/README.md, README.md, documentation/docs/guides/tanzu-cli-testing-guide.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Java/Kotlin |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1958 |
| manifests | 40 |
| docs | 370 |
| tests | 96 |
| ci/ops | 53 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | goose | goose / Get started / Quick links / Need help? / a little goose humor 🪿 / goose around with us | 🦆 goose has moved! This project has moved from block/goose to the Agentic AI Foundation AAIF https //aaif.io/ at the Linux Foundation. Some links and references are still being updated — please bear with us during the transition. <div align="center" goose your native open source AI agent — desktop app, CLI, and API — for code, workflows, and everything in between <p align="center" <a href="https //opensource.org/licenses/Apache 2.0" <img src="https //img.shields.io/badge/License Apache 2.0 blue.svg" </a <a href="https //discord.gg/goose oss" <img src="https //img.shields.io/discord/1287729918100246654?logo=discord&logoColor=white&label=Join+Us&color=blueviolet" alt="Discord" </a <a href="ht |


## Key Files

### Manifests

- examples/mcp-wiki/README.md
- examples/plugins/hello-hooks/README.md
- crates/goose-mcp/README.md
- documentation/automation/cli-command-tracking/README.md
- evals/harbor/README.md
- evals/open-model-gym/mcp-harness/README.md
- evals/open-model-gym/README.md
- AGENTS.md
- documentation/AGENTS.md
- ui/text/AGENTS.md
- documentation/README.md
- oidc-proxy/README.md
- README.md
- scripts/README.md
- crates/goose-providers/src/canonical/README.md
- crates/goose-sdk/README.md
- documentation/automation/README.md
- documentation/automation/recipe-schema-tracking/README.md
- documentation/blog/README.md
- documentation/src/pages/community/data/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- documentation/AGENTS.md
- ui/text/AGENTS.md
- CLAUDE.md
- documentation/CLAUDE.md
- ui/text/CLAUDE.md
- .github/copilot-instructions.md
- documentation/src/pages/prompt-library/data/prompts/java-kotlin-test-migration.json
- crates/goose/src/prompts/apps_create.md
- crates/goose/src/prompts/apps_iterate.md
- crates/goose/src/prompts/compaction.md
- crates/goose/src/prompts/permission_judge.md
- crates/goose/src/prompts/plan.md
- crates/goose/src/prompts/recipe.md
- crates/goose/src/prompts/session_name.md
- crates/goose/src/prompts/subagent_system.md
- crates/goose/src/prompts/system.md
- crates/goose/src/prompts/tiny_model_system.md
- documentation/src/pages/prompt-library/data/prompts/access-currently-stored-preferences.json
- documentation/src/pages/prompt-library/data/prompts/accessibility-audit.json


### Agent Instruction Files

- AGENTS.md
- documentation/AGENTS.md
- ui/text/AGENTS.md
- CLAUDE.md
- documentation/CLAUDE.md
- ui/text/CLAUDE.md
- .github/copilot-instructions.md
- documentation/src/pages/prompt-library/data/prompts/java-kotlin-test-migration.json
- crates/goose/src/prompts/apps_create.md
- crates/goose/src/prompts/apps_iterate.md
- crates/goose/src/prompts/compaction.md
- crates/goose/src/prompts/permission_judge.md
- crates/goose/src/prompts/plan.md
- crates/goose/src/prompts/recipe.md
- crates/goose/src/prompts/session_name.md


## Top Directories

| dir | count |
| --- | --- |
| documentation | 604 |
| crates | 588 |
| ui | 559 |
| .github | 61 |
| evals | 29 |
| scripts | 26 |
| services | 24 |
| examples | 12 |
| oidc-proxy | 8 |
| bin | 5 |
| recipe-scanner | 5 |
| workflow_recipes | 3 |
| .devcontainer | 2 |
| .cargo | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .rs | 441 |
| .tsx | 362 |
| .md | 333 |
| .ts | 186 |
| .json | 176 |
| .yaml | 99 |
| [no-ext] | 51 |
| .yml | 47 |
| .js | 35 |
| .sh | 28 |
| .svg | 25 |
| .py | 24 |
| .html | 22 |
| .txt | 21 |
| .toml | 19 |
| .mdx | 18 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
