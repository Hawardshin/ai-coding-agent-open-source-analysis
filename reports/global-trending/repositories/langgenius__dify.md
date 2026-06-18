# langgenius/dify

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/langgenius/dify |
| local path | sources/langgenius__dify |
| HEAD | f0b34bd |
| stars/forks | 145630 / 22906 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-18T00:18:19Z |
| trendScore / priorityScore | 230 / 570 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 500 | docs/ar-SA/README.md, docs/bn-BD/README.md, docs/cross-env-app-migration/README.md |
| AI agent / orchestration | 221 | cli/README.md, dify-agent/README.md, docs/cross-env-app-migration/README.md |
| Frontend / app framework | 210 | docs/ar-SA/README.md, docs/bn-BD/README.md, docs/de-DE/README.md |
| Database / data infrastructure | 142 | docs/ar-SA/README.md, docs/bn-BD/README.md, docs/cross-env-app-migration/README.md |
| Observability / evaluation | 137 | docs/ar-SA/README.md, docs/bn-BD/README.md, docs/de-DE/README.md |
| Developer tools / DX | 125 | cli/README.md, cli/test/e2e/README.md, docs/bn-BD/README.md |
| Data / ML platform | 76 | docs/ar-SA/README.md, docs/bn-BD/README.md, docs/de-DE/README.md |
| RAG / retrieval / knowledge | 73 | docs/ar-SA/README.md, docs/bn-BD/README.md, docs/de-DE/README.md |
| Security / supply chain | 57 | api/providers/vdb/vdb-clickzetta/tests/README.md, cli/test/e2e/README.md, docs/ar-SA/README.md |
| MCP / agent interoperability | 45 | docs/cross-env-app-migration/README.md, AGENTS.md, cli/AGENTS.md |
| Coding agent / software automation | 21 | cli/README.md, docs/fr-FR/README.md, AGENTS.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, PHP |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 8000 (capped) |
| manifests | 40 |
| docs | 128 |
| tests | 2213 |
| ci/ops | 45 |
| spec artifacts | 34 |
| agent instruction files | 31 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Quick start / Key features / Using Dify / Staying ahead / Advanced Setup / Custom configurations / Metrics Monitoring with Grafana / Deployment with Kubernetes / Contributing / Community & contact | ! cover v5 optimized ./images/GitHub README if.png <p align="center" <a href="https //cloud.dify.ai" Dify Cloud</a · <a href="https //docs.dify.ai/getting started/install self hosted" Self hosting</a · <a href="https //docs.dify.ai" Documentation</a · <a href="https //dify.ai/pricing" Dify edition overview</a </p <p align="center" <a href="https //dify.ai" target=" blank" <img alt="Static Badge" src="https //img.shields.io/badge/Product F04438" </a <a href="https //dify.ai/pricing" target=" blank" <img alt="Static Badge" src="https //img.shields.io/badge/free pricing?logo=free&color=%20%23155EEF&label=pricing&labelColor=%20%23528bff" </a <a href="https //discord.gg/FngNHpbcY7" target=" blank |


## Key Files

### Manifests

- api/providers/vdb/vdb-clickzetta/tests/README.md
- cli/README.md
- cli/test/e2e/README.md
- dify-agent/README.md
- docs/ar-SA/README.md
- docs/bn-BD/README.md
- docs/cross-env-app-migration/README.md
- docs/de-DE/README.md
- docs/es-ES/README.md
- docs/fr-FR/README.md
- docs/hi-IN/README.md
- docs/it-IT/README.md
- docs/ja-JP/README.md
- docs/ko-KR/README.md
- docs/pt-BR/README.md
- docs/sl-SI/README.md
- docs/tlh/README.md
- docs/tr-TR/README.md
- docs/vi-VN/README.md
- docs/weaviate/WEAVIATE_MIGRATION_GUIDE/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- api/AGENTS.md
- cli/AGENTS.md
- dify-agent/AGENTS.md
- e2e/AGENTS.md
- web/AGENTS.md
- cli/src/commands/AGENTS.md
- packages/dify-ui/AGENTS.md
- api/core/agent/prompt/template.py
- api/core/prompt/__init__.py
- api/core/prompt/advanced_prompt_transform.py
- api/core/prompt/agent_history_prompt_transform.py
- api/core/prompt/entities/__init__.py
- api/core/prompt/entities/advanced_prompt_entities.py
- api/core/prompt/prompt_templates/__init__.py
- api/core/prompt/prompt_templates/advanced_prompt_templates.py
- api/core/prompt/prompt_templates/baichuan_chat.json
- api/core/prompt/prompt_templates/baichuan_completion.json
- api/core/prompt/prompt_templates/common_chat.json
- api/core/prompt/prompt_templates/common_completion.json


### Agent Instruction Files

- AGENTS.md
- api/AGENTS.md
- cli/AGENTS.md
- dify-agent/AGENTS.md
- e2e/AGENTS.md
- web/AGENTS.md
- cli/src/commands/AGENTS.md
- packages/dify-ui/AGENTS.md
- api/core/agent/prompt/template.py
- api/core/prompt/__init__.py
- api/core/prompt/advanced_prompt_transform.py
- api/core/prompt/agent_history_prompt_transform.py
- api/core/prompt/entities/__init__.py
- api/core/prompt/entities/advanced_prompt_entities.py
- api/core/prompt/prompt_templates/__init__.py


## Top Directories

| dir | count |
| --- | --- |
| web | 3470 |
| api | 2797 |
| packages | 812 |
| cli | 342 |
| dify-agent | 228 |
| docker | 73 |
| e2e | 53 |
| .github | 51 |
| sdks | 49 |
| docs | 31 |
| .agents | 30 |
| scripts | 19 |
| dev | 11 |
| .devcontainer | 6 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 2808 |
| .tsx | 1743 |
| .ts | 1410 |
| .json | 791 |
| .svg | 565 |
| .js | 125 |
| .md | 124 |
| .yml | 88 |
| .html | 61 |
| [no-ext] | 49 |
| .toml | 46 |
| .example | 41 |
| .css | 29 |
| .yaml | 27 |
| .sh | 26 |
| .feature | 19 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
