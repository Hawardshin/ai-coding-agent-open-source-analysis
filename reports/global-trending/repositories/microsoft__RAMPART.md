# microsoft/RAMPART

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/microsoft/RAMPART |
| local path | sources/microsoft__RAMPART |
| HEAD | 52a269a |
| stars/forks | 360 / 42 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T16:37:55Z |
| trendScore / priorityScore | 139 / 353 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 229 | README.md, rampart/drivers/prompts/llm_driver_system_prompt.yaml, rampart/evaluators/prompts/llm_judge.yaml |
| Security / supply chain | 62 | README.md, .github/copilot-instructions.md, pyproject.toml |
| Observability / evaluation | 56 | README.md, .github/copilot-instructions.md, rampart/evaluators/prompts/llm_judge.yaml |
| Developer tools / DX | 40 | pyproject.toml, docs/index.md, docs/usage/pytest-integration.md |
| Coding agent / software automation | 10 | docs/contributing/index.md, docs/contributing/release-process.md, .github/CODE_OF_CONDUCT.md |
| Data / ML platform | 9 | docs/contributing/testing.md, docs/contributing/development-setup.md, docs/contributing/pull-requests.md |
| Cloud native / infrastructure | 2 | docs/contributing/testing.md, docs/usage/authoring-tests.md |
| Local LLM / inference | 2 | docs/contributing/testing.md, tests/integration/conftest.py |
| RAG / retrieval / knowledge | 1 | docs/attacks/xpia.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, devtools, frontendStack, infra, llmFramework, local-llm, observability, rag, sdk-api, security, securityTooling |
| stacks | Python |
| capabilities | LLM/app framework, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 180 |
| manifests | 2 |
| docs | 58 |
| tests | 53 |
| ci/ops | 5 |
| spec artifacts | 6 |
| agent instruction files | 5 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Trademarks | <p align="center" <img src="https //github.com/microsoft/RAMPART/raw/main/docs/images/RAMPART.svg" alt="RAMPART Logo" width="300"/ </p <h1 align="center" RAMPART</h1 <h3 align="center" Risk Assessment & Measurement Platform for Agentic Red Teaming</h3 <p align="center" <strong A pytest native safety and security testing framework for agentic AI applications.</strong </p <p align="center" <a href="https //scorecard.dev/viewer/?uri=github.com/microsoft/RAMPART" <img alt="OpenSSF Scorecard" src="https //api.scorecard.dev/projects/github.com/microsoft/RAMPART/badge" </a <a href="https //github.com/microsoft/RAMPART/actions/workflows/ci.yml" <img alt="GitHub CI" src="https //github.com/microsoft/ |


## Key Files

### Manifests

- README.md
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- .github/copilot-instructions.md
- rampart/drivers/prompts/llm_driver_system_prompt.yaml
- rampart/evaluators/prompts/llm_judge.yaml
- docs/contributing/architecture.md
- .github/instructions/unit-tests-standards.instructions.md
- .github/instructions/coding-standards.instructions.md


### Agent Instruction Files

- .github/copilot-instructions.md
- rampart/drivers/prompts/llm_driver_system_prompt.yaml
- rampart/evaluators/prompts/llm_judge.yaml
- .github/instructions/unit-tests-standards.instructions.md
- .github/instructions/coding-standards.instructions.md


## Top Directories

| dir | count |
| --- | --- |
| tests | 53 |
| docs | 49 |
| rampart | 49 |
| .github | 20 |
| .editorconfig | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |
| LICENSE | 1 |
| mkdocs.yml | 1 |
| pyproject.toml | 1 |
| README.md | 1 |
| scripts | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 99 |
| .md | 51 |
| .yml | 12 |
| .svg | 5 |
| [no-ext] | 5 |
| .yaml | 3 |
| .css | 1 |
| .example | 1 |
| .html | 1 |
| .sh | 1 |
| .toml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
