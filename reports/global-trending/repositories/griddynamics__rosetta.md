# griddynamics/rosetta

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/griddynamics/rosetta |
| local path | sources/griddynamics__rosetta |
| HEAD | 64aaa29 |
| stars/forks | 304 / 60 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T23:54:39Z |
| trendScore / priorityScore | 151 / 472 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | ims-mcp-server/README.md, rosetta-cli/README.md, rosetta-mcp-server/README.md |
| Developer tools / DX | 500 | docs/requirements/rosetta-cli/README.md, ims-mcp-server/README.md, rosetta-cli/README.md |
| MCP / agent interoperability | 500 | docs/requirements/rosetta-cli/README.md, ims-mcp-server/README.md, rosetta-cli/README.md |
| Coding agent / software automation | 395 | ims-mcp-server/README.md, rosetta-mcp-server/README.md, README.md |
| Security / supply chain | 343 | ims-mcp-server/README.md, rosetta-mcp-server/README.md, README.md |
| Cloud native / infrastructure | 150 | ims-mcp-server/README.md, rosetta-cli/README.md, rosetta-mcp-server/README.md |
| Data / ML platform | 134 | ims-mcp-server/README.md, rosetta-cli/README.md, rosetta-mcp-server/README.md |
| RAG / retrieval / knowledge | 109 | ims-mcp-server/README.md, rosetta-cli/README.md, rosetta-mcp-server/README.md |
| Database / data infrastructure | 90 | ims-mcp-server/README.md, rosetta-cli/README.md, rosetta-mcp-server/README.md |
| Frontend / app framework | 66 | rosettify/README.md, docs/RAGFLOW.md, docs/requirements/rosettify/CLI.md |
| Observability / evaluation | 16 | ims-mcp-server/README.md, rosetta-mcp-server/README.md, test-library/hooks/loose-files/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1882 |
| manifests | 21 |
| docs | 1375 |
| tests | 178 |
| ci/ops | 28 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | What is Rosetta / Supported IDEs and Agents / Quick Start / Documentation / What Rosetta Adds to AI Coding Agents / Why use it / How it works / Get Started / Tech Demo / Contributing | <div align="center" <picture <source media=" prefers color scheme dark " srcset="docs/web/assets/brand/rosetta logo full color white text.png" <img src="docs/web/assets/brand/rosetta logo full color black text.png" alt="Rosetta" width="200" </picture <p <strong Meta prompting, context engineering, and centralized instructions management for AI coding agents</strong </p <p <a href="https //pypi.org/project/ims mcp/" <img src="https //img.shields.io/pypi/v/ims mcp.svg" alt="MCP" </a <a href="https //pypi.org/project/ims mcp/" <img src="https //img.shields.io/pypi/dm/ims mcp.svg" alt="Downloads" </a <a href="https //pypi.org/project/rosetta cli/" <img src="https //img.shields.io/pypi/v/rosetta |


## Key Files

### Manifests

- docs/requirements/rosetta-cli/README.md
- ims-mcp-server/README.md
- rosetta-cli/README.md
- rosetta-mcp-server/README.md
- docs/web/README.md
- helm-charts/rosetta-mcp-server/README.md
- README.md
- rosettify/README.md
- test-library/hooks/loose-files/README.md
- ims-mcp-server/Dockerfile
- ims-mcp-server/pyproject.toml
- rosetta-cli/pyproject.toml
- rosetta-mcp-server/pyproject.toml
- hooks/package.json
- hooks/tsconfig.json
- requirements.txt
- rosettify/package.json
- rosettify/tsconfig.json
- src/plugin-generator/package.json
- src/plugin-generator/tsconfig.json


### Spec / Docs / Prompt Artifacts

- docs/definitions/agents.md
- .github/prompts/test-case-result-validator.md
- plugins/core-copilot-standalone/.github/prompts/aqa-flow-test-correction.prompt.md
- plugins/core-copilot-standalone/.github/prompts/aqa-flow-test-implementation.prompt.md
- plugins/core-copilot-standalone/.github/prompts/aqa-flow-test-report-analysis.prompt.md
- plugins/core-copilot-standalone/.github/prompts/modernization-flow-testing.prompt.md
- plugins/core-copilot-standalone/.github/prompts/testgen-flow-data-collection.prompt.md
- plugins/core-copilot-standalone/.github/prompts/testgen-flow-gap-and-contradiction-analysis.prompt.md
- plugins/core-copilot-standalone/.github/prompts/testgen-flow-project-config-loading.prompt.md
- plugins/core-copilot-standalone/.github/prompts/testgen-flow-question-generation.prompt.md
- plugins/core-copilot-standalone/.github/prompts/testgen-flow-requirements-document-generation.prompt.md
- plugins/core-copilot-standalone/.github/prompts/testgen-flow-test-case-export.prompt.md
- plugins/core-copilot-standalone/.github/prompts/testgen-flow-test-case-generation.prompt.md
- plugins/core-copilot-standalone/.github/prompts/testgen-flow.prompt.md
- plugins/core-cursor-standalone/.cursor/skills/specflow-use/references/specflow-mcp-tools.md
- requirements.txt
- .github/prompts/prompt-comparison.md
- .github/prompts/repo-analysis.md
- .github/prompts/repo-implement-code.md
- .github/prompts/repo-implement-plan.md


### Agent Instruction Files

- docs/definitions/agents.md
- .github/prompts/test-case-result-validator.md
- plugins/core-copilot-standalone/.github/prompts/aqa-flow-test-correction.prompt.md
- plugins/core-copilot-standalone/.github/prompts/aqa-flow-test-implementation.prompt.md
- plugins/core-copilot-standalone/.github/prompts/aqa-flow-test-report-analysis.prompt.md
- plugins/core-copilot-standalone/.github/prompts/modernization-flow-testing.prompt.md
- plugins/core-copilot-standalone/.github/prompts/testgen-flow-data-collection.prompt.md
- plugins/core-copilot-standalone/.github/prompts/testgen-flow-gap-and-contradiction-analysis.prompt.md
- plugins/core-copilot-standalone/.github/prompts/testgen-flow-project-config-loading.prompt.md
- plugins/core-copilot-standalone/.github/prompts/testgen-flow-question-generation.prompt.md
- plugins/core-copilot-standalone/.github/prompts/testgen-flow-requirements-document-generation.prompt.md
- plugins/core-copilot-standalone/.github/prompts/testgen-flow-test-case-export.prompt.md
- plugins/core-copilot-standalone/.github/prompts/testgen-flow-test-case-generation.prompt.md
- plugins/core-copilot-standalone/.github/prompts/testgen-flow.prompt.md
- plugins/core-cursor-standalone/.cursor/skills/specflow-use/references/specflow-mcp-tools.md


## Top Directories

| dir | count |
| --- | --- |
| plugins | 898 |
| instructions | 338 |
| src | 129 |
| docs | 128 |
| hooks | 79 |
| ims-mcp-server | 76 |
| rosettify | 70 |
| test-library | 47 |
| rosetta-cli | 37 |
| .github | 26 |
| helm-charts | 13 |
| scripts | 4 |
| agents | 3 |
| rosetta-mcp-server | 2 |


## Extension Distribution

| ext | count |
| --- | --- |
| .md | 1363 |
| .ts | 201 |
| .py | 103 |
| .json | 61 |
| .txt | 32 |
| .mdc | 22 |
| .tmpl | 18 |
| [no-ext] | 16 |
| .yml | 15 |
| .toml | 13 |
| .yaml | 12 |
| .xml | 8 |
| .sh | 5 |
| .html | 4 |
| .css | 1 |
| .example | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
