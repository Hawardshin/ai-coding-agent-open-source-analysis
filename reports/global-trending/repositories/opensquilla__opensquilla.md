# opensquilla/opensquilla

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/opensquilla/opensquilla |
| local path | sources/opensquilla__opensquilla |
| HEAD | c81acb4 |
| stars/forks | 4296 / 335 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T17:20:03Z |
| trendScore / priorityScore | 167 / 470 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | docs/README.md, src/opensquilla/identity/templates/bootstrap/AGENTS.md, README.md |
| Cloud native / infrastructure | 500 | docs/README.md, README.md, tests/fixtures/meta_skill_inputs/lifestyle_experience/README.md |
| Developer tools / DX | 309 | docs/README.md, README.md, docs/cli.md |
| RAG / retrieval / knowledge | 175 | README.md, docs/cli.md, pyproject.toml |
| MCP / agent interoperability | 61 | docs/README.md, src/opensquilla/identity/templates/bootstrap/AGENTS.md, README.md |
| Coding agent / software automation | 54 | pyproject.toml, tests/test_memory_dream_evidence.py, tests/test_memory_dream_paths.py |
| Security / supply chain | 47 | README.md, tests/fixtures/meta_skill_inputs/code_review_dirty_repo/README.md, tests/test_memory_flush.py |
| Local LLM / inference | 35 | README.md, tests/test_memory_manager_embedding_config.py, docs/configuration.md |
| Data / ML platform | 20 | Dockerfile, tests/test_skills_default_prompt_contract.py, docs/features.md |
| Database / data infrastructure | 12 | README.md, pyproject.toml, tests/test_memory_vector_normalization.py |
| Observability / evaluation | 10 | README.md, tests/fixtures/meta_skill_inputs/lifestyle_experience/README.md, tests/fixtures/meta_skill_inputs/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python, Ruby |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1719 |
| manifests | 11 |
| docs | 179 |
| tests | 638 |
| ci/ops | 13 |
| spec artifacts | 3 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | OpenSquilla — Token-Efficient AI Agent | OpenSquilla — Token-Efficient AI Agent / Overview / Installation / Prerequisites / Windows portable (no Python) / Quick terminal install / Install from source / Develop from source / Configuration / First-run setup | OpenSquilla — Token Efficient AI Agent <p align="center" <img src="assets/opensquilla long logo.png" alt="OpenSquilla logo" width="500" </p <p align="center" <b Same budget, more capability, better results.</b <br A microkernel AI agent for your CLI, Web UI, and chat channels. </p <p align="center" <a href="https //github.com/opensquilla/opensquilla/actions/workflows/ci.yml" <img src="https //img.shields.io/github/actions/workflow/status/opensquilla/opensquilla/ci.yml?style=for the badge" alt="CI" </a <a href="https //opensquilla.ai/" <img src="https //img.shields.io/badge/website opensquilla.ai blue?style=for the badge" alt="Website" </a <a href="https //github.com/opensquilla/opensquilla/r |


## Key Files

### Manifests

- docs/README.md
- src/opensquilla/identity/templates/bootstrap/AGENTS.md
- README.md
- tests/fixtures/meta_skill_inputs/code_review_dirty_repo/README.md
- tests/fixtures/meta_skill_inputs/lifestyle_experience/README.md
- tests/fixtures/meta_skill_inputs/README.md
- compose.yaml
- Dockerfile
- pyproject.toml
- tests/fixtures/meta_skill_inputs/migration_assistant/cjs-to-esm-package/package.json
- src/opensquilla/plugins/tokenjuice/rules/devops/docker-compose.json


### Spec / Docs / Prompt Artifacts

- src/opensquilla/identity/templates/bootstrap/AGENTS.md
- docs/agents.md
- src/opensquilla/skills/bundled/deep-research/plan.json


### Agent Instruction Files

- src/opensquilla/identity/templates/bootstrap/AGENTS.md
- docs/agents.md


## Top Directories

| dir | count |
| --- | --- |
| src | 973 |
| tests | 625 |
| docs | 37 |
| scripts | 22 |
| .github | 17 |
| migrations | 15 |
| service-units | 3 |
| .dockerignore | 1 |
| .env.example | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| CHANGELOG.md | 1 |
| CODE_OF_CONDUCT.md | 1 |
| compose.yaml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 1273 |
| .md | 179 |
| .json | 144 |
| .js | 24 |
| .css | 19 |
| .yml | 12 |
| .txt | 11 |
| .sh | 9 |
| [no-ext] | 5 |
| .j2 | 4 |
| .ps1 | 4 |
| .pkl | 3 |
| .yaml | 3 |
| .bin | 2 |
| .cjs | 2 |
| .example | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
