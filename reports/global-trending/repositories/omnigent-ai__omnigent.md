# omnigent-ai/omnigent

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/omnigent-ai/omnigent |
| local path | sources/omnigent-ai__omnigent |
| HEAD | 0cf2a7b |
| stars/forks | 3500 / 388 |
| language | Python |
| license |  |
| pushedAt | 2026-06-18T00:20:15Z |
| trendScore / priorityScore | 179 / 530 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | omnigent/spec/README.md, deploy/kubernetes/README.md, tests/e2e/AGENTS.md |
| Developer tools / DX | 500 | deploy/kubernetes/README.md, sdks/python-client/README.md, tests/e2e/AGENTS.md |
| Cloud native / infrastructure | 433 | deploy/kubernetes/README.md, ap-web/README.md, deploy/README.md |
| Security / supply chain | 383 | deploy/kubernetes/README.md, deploy/README.md, README.md |
| Coding agent / software automation | 257 | tests/e2e/AGENTS.md, tests/integration/AGENTS.md, deploy/README.md |
| Database / data infrastructure | 162 | deploy/kubernetes/README.md, ap-web/README.md, deploy/README.md |
| MCP / agent interoperability | 140 | omnigent/onboarding/agent/AGENTS.md, docs/AGENT_YAML_SPEC.md, omnigent/spec/AGENTSPEC.md |
| Frontend / app framework | 108 | ap-web/README.md, sdks/README.md, ap-web/electron/README.md |
| Observability / evaluation | 31 | pyproject.toml, tests/resources/examples/_shared/sleep_mcp_server.py, omnigent/spec/_omnigent_legacy_shim.py |
| Data / ML platform | 16 | omnigent/onboarding/agent/AGENTS.md, deploy/openshell/README.md, tests/resources/examples/agent_with_uc_tools.yaml |
| Local LLM / inference | 10 | README.md, deploy/islo/README.md, deploy/modal/README.md |
| RAG / retrieval / knowledge | 1 | omnigent/spec/_omnigent_compat.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 2178 |
| manifests | 40 |
| docs | 71 |
| tests | 1161 |
| ci/ops | 65 |
| spec artifacts | 30 |
| agent instruction files | 7 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | <img src="https://raw.githubusercontent.com/omnigent-ai/omnigent/main/docs/images/omnigent-logo.svg" alt="" height="38" valign="middle" /> Omnigent | <img src="https://raw.githubusercontent.com/omnigent-ai/omnigent/main/docs/images/omnigent-logo.svg" alt="" height="38" valign="middle" /> Omnigent / The open-source AI agent framework and meta-harness for all your AI agents. / Why Omnigent? / Quick start / 1. Install / 2. Start your first agent / Run an orchestrator on a different harness (sub-agents keep their own): / 3. Choose & switch models / 4. Deploy a server (and use it from your phone📱) / 5. Collaborate with your team | <div align="center" <img src="https //raw.githubusercontent.com/omnigent ai/omnigent/main/docs/images/omnigent logo.svg" alt="" height="38" valign="middle" / Omnigent The open source AI agent framework and meta harness for all your AI agents. Omnigent is an open source AI agent framework and meta harness that gives you a common orchestration layer over Claude Code, Codex, Cursor, Pi, and the agents you write yourself swap or combine harnesses without rewriting, enforce policies and sandboxing, and collaborate in real time from any device. ! License Apache 2.0 https //img.shields.io/badge/License Apache 2.0 blue.svg https //github.com/omnigent ai/omnigent/blob/main/LICENSE ! Status alpha http |


## Key Files

### Manifests

- omnigent/spec/README.md
- deploy/kubernetes/README.md
- sdks/python-client/README.md
- tests/e2e/AGENTS.md
- tests/integration/AGENTS.md
- omnigent/onboarding/agent/AGENTS.md
- ap-web/README.md
- deploy/README.md
- README.md
- sdks/README.md
- ap-web/electron/icons/README.md
- ap-web/electron/README.md
- deploy/cwsandbox/README.md
- deploy/daytona/README.md
- deploy/docker/README.md
- deploy/e2b/README.md
- deploy/fly/README.md
- deploy/hf-spaces/README.md
- deploy/islo/README.md
- deploy/modal/README.md


### Spec / Docs / Prompt Artifacts

- omnigent/spec/README.md
- tests/e2e/AGENTS.md
- tests/integration/AGENTS.md
- omnigent/onboarding/agent/AGENTS.md
- .github/copilot-instructions.md
- omnigent/spec/AGENTSPEC.md
- omnigent/spec/__init__.py
- omnigent/spec/_omnigent_compat.py
- omnigent/spec/_omnigent_legacy_shim.py
- omnigent/spec/omnigent.py
- omnigent/spec/parser.py
- omnigent/spec/tar_utils.py
- omnigent/spec/types.py
- omnigent/spec/validator.py
- tests/spec/__init__.py
- tests/spec/test_load.py
- tests/spec/test_omnigent_adapter.py
- tests/spec/test_omnigent_legacy_shim.py
- tests/spec/test_omnigent_roundtrip.py
- tests/spec/test_omnigent_translator.py


### Agent Instruction Files

- tests/e2e/AGENTS.md
- tests/integration/AGENTS.md
- omnigent/onboarding/agent/AGENTS.md
- .github/copilot-instructions.md
- .claude/skills/antigravity-sdk-e2e-dev/SKILL.md
- .claude/skills/cursor-sdk-e2e-dev/SKILL.md
- omnigent/onboarding/providers/model_catalog/gemini.json


## Top Directories

| dir | count |
| --- | --- |
| tests | 978 |
| ap-web | 498 |
| omnigent | 497 |
| .github | 68 |
| deploy | 53 |
| sdks | 40 |
| examples | 11 |
| designs | 5 |
| dev | 4 |
| docs | 4 |
| scripts | 3 |
| .claude | 2 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 1333 |
| .tsx | 274 |
| .ts | 182 |
| .yaml | 106 |
| .json | 97 |
| .md | 70 |
| .yml | 37 |
| .sh | 16 |
| [no-ext] | 14 |
| .js | 10 |
| .toml | 8 |
| .svg | 7 |
| .html | 4 |
| .plist | 4 |
| .typed | 3 |
| .css | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
