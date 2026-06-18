# volcengine/OpenViking

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/volcengine/OpenViking |
| local path | sources/volcengine__OpenViking |
| HEAD | 88e5db2 |
| stars/forks | 25770 / 1992 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T17:36:13Z |
| trendScore / priorityScore | 195 / 565 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Coding agent / software automation | 500 | examples/claude-code-memory-plugin/README.md, examples/codex-memory-plugin/README.md, examples/opencode-memory-plugin/README.md |
| Observability / evaluation | 392 | examples/codex-memory-plugin/README.md, examples/openclaw-plugin/tests/toolresult_compression_tests/README.md, benchmark/custom/README.md |
| Cloud native / infrastructure | 285 | examples/k8s-helm/README.md, examples/openclaw-plugin/README.md, examples/openclaw-plugin/tests/toolresult_compression_tests/README.md |
| AI agent / orchestration | 259 | examples/opencode-memory-plugin/README.md, examples/basic-usage/README.md, examples/openclaw-plugin/README.md |
| RAG / retrieval / knowledge | 255 | examples/claude-code-memory-plugin/README.md, examples/codex-memory-plugin/README.md, examples/opencode-memory-plugin/README.md |
| MCP / agent interoperability | 234 | examples/claude-code-memory-plugin/README.md, examples/codex-memory-plugin/README.md, examples/basic-usage/README.md |
| Developer tools / DX | 221 | examples/claude-code-memory-plugin/README.md, examples/codex-memory-plugin/README.md, examples/basic-usage/README.md |
| Data / ML platform | 115 | benchmark/locomo/claudecode/README.md, benchmark/locomo/hermes/README.md, benchmark/locomo/mem0/README.md |
| Database / data infrastructure | 75 | examples/basic-usage/README.md, examples/k8s-helm/README.md, benchmark/RAG/README.md |
| Security / supply chain | 61 | examples/claude-code-memory-plugin/README.md, examples/codex-memory-plugin/README.md, examples/k8s-helm/README.md |
| Frontend / app framework | 10 | examples/openclaw-plugin/README.md, benchmark/tau2/vikingbot/README.md, web-studio/README.md |
| Local LLM / inference | 7 | examples/opencode/plugin/README.md, bot/README.md, README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 2864 |
| manifests | 40 |
| docs | 316 |
| tests | 753 |
| ci/ops | 59 |
| spec artifacts | 47 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | choose OpenAI Codex when prompted | OpenViking: The Context Database for AI Agents / Overview / Challenges in Agent Development / The OpenViking Solution / Quick Start / Local Deployment / choose OpenAI Codex when prompted / choose Kimi Coding when prompted / choose GLM Coding Plan when prompted / wait some time for semantic processing if not --wait | <div align="center" <a href="https //openviking.ai/" target=" blank" <picture <img alt="OpenViking" src="docs/images/ov logo.png" width="200px" height="auto" </picture </a OpenViking The Context Database for AI Agents English / 中文 README CN.md / 日本語 README JA.md <a href="https //www.openviking.ai" Website</a · <a href="https //github.com/volcengine/OpenViking" GitHub</a · <a href="https //github.com/volcengine/OpenViking/issues" Issues</a · <a href="./docs" Docs</a ! https //img.shields.io/github/v/release/volcengine/OpenViking?color=369eff\&labelColor=black\&logo=github\&style=flat square https //github.com/volcengine/OpenViking/releases ! https //img.shields.io/github/stars/volcengine/Open |


## Key Files

### Manifests

- examples/claude-code-memory-plugin/README.md
- examples/codex-memory-plugin/README.md
- examples/opencode-memory-plugin/README.md
- examples/basic-usage/README.md
- examples/k8s-helm/README.md
- examples/multi_tenant/README.md
- examples/openclaw-plugin/README.md
- examples/openclaw-plugin/tests/toolresult_compression_tests/README.md
- examples/opencode-plugin/README.md
- examples/opencode/plugin/README.md
- benchmark/custom/README.md
- benchmark/locomo/claudecode/README.md
- benchmark/locomo/hermes/README.md
- benchmark/locomo/mem0/README.md
- benchmark/locomo/openviking/README.md
- benchmark/locomo/README.md
- benchmark/locomo/supermemory/README.md
- benchmark/longmemeval/openviking/README.md
- benchmark/RAG/README.md
- benchmark/tau2/llm/README.md


### Spec / Docs / Prompt Artifacts

- examples/codex-memory-plugin/DESIGN.md
- openviking/prompts/templates/test/skill_test_generation.yaml
- tests/api_test/requirements.txt
- tests/oc2ov_test/requirements.txt
- openviking/prompts/__init__.py
- openviking/prompts/manager.py
- openviking/prompts/templates/compression/ov_wm_v2_update.yaml
- openviking/prompts/templates/compression/ov_wm_v2.yaml
- openviking/prompts/templates/compression/structured_summary.yaml
- openviking/prompts/templates/indexing/relevance_scoring.yaml
- openviking/prompts/templates/memory/entities.yaml
- openviking/prompts/templates/memory/events.yaml
- openviking/prompts/templates/memory/experiences.yaml
- openviking/prompts/templates/memory/experimental_memory/entities.yaml
- openviking/prompts/templates/memory/experimental_memory/profile.yaml
- openviking/prompts/templates/memory/identity.yaml
- openviking/prompts/templates/memory/preferences.yaml
- openviking/prompts/templates/memory/profile.yaml
- openviking/prompts/templates/memory/skills.yaml
- openviking/prompts/templates/memory/soul.yaml


### Agent Instruction Files

- openviking/prompts/templates/test/skill_test_generation.yaml
- openviking/prompts/__init__.py
- openviking/prompts/manager.py
- openviking/prompts/templates/compression/ov_wm_v2_update.yaml
- openviking/prompts/templates/compression/ov_wm_v2.yaml
- openviking/prompts/templates/compression/structured_summary.yaml
- openviking/prompts/templates/indexing/relevance_scoring.yaml
- openviking/prompts/templates/memory/entities.yaml
- openviking/prompts/templates/memory/events.yaml
- openviking/prompts/templates/memory/experiences.yaml
- openviking/prompts/templates/memory/experimental_memory/entities.yaml
- openviking/prompts/templates/memory/experimental_memory/profile.yaml
- openviking/prompts/templates/memory/identity.yaml
- openviking/prompts/templates/memory/preferences.yaml
- openviking/prompts/templates/memory/profile.yaml


## Top Directories

| dir | count |
| --- | --- |
| tests | 591 |
| openviking | 565 |
| third_party | 371 |
| examples | 307 |
| bot | 209 |
| web-studio | 192 |
| docs | 167 |
| crates | 143 |
| benchmark | 118 |
| src | 66 |
| openviking_cli | 44 |
| .github | 29 |
| sdk | 20 |
| deploy | 11 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 1367 |
| .md | 297 |
| .h | 251 |
| .ts | 193 |
| .rs | 126 |
| .tsx | 84 |
| .cc | 75 |
| .yaml | 71 |
| .cpp | 62 |
| .sh | 57 |
| [no-ext] | 50 |
| .json | 48 |
| .mjs | 44 |
| .yml | 44 |
| .go | 17 |
| .txt | 15 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
