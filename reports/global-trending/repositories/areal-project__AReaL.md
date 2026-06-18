# areal-project/AReaL

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/areal-project/AReaL |
| local path | sources/areal-project__AReaL |
| HEAD | 13353cc |
| stars/forks | 5316 / 522 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T08:35:43Z |
| trendScore / priorityScore | 138 / 451 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | examples/agent_service/README.md, examples/agent_workflow/README.md, examples/search_agent/tongyi_deepresearch/README.md |
| Data / ML platform | 500 | examples/agent_workflow/README.md, examples/search_agent/tongyi_deepresearch/README.md, examples/alignment/README.md |
| Cloud native / infrastructure | 210 | examples/agent_service/README.md, examples/experimental/inference_service/README.md, examples/openclaw/README.md |
| Developer tools / DX | 136 | examples/agent_service/README.md, examples/agent_workflow/README.md, examples/experimental/inference_service/README.md |
| Local LLM / inference | 134 | examples/terminal_bench/README.md, examples/vlm_npu/README.md, AGENTS.md |
| Observability / evaluation | 86 | examples/countdown/README.md, examples/experimental/inference_service/README.md, examples/math/README.md |
| Coding agent / software automation | 18 | benchmark/README.md, AGENTS.md, Dockerfile |
| MCP / agent interoperability | 6 | AGENTS.md, docs/en/tutorial/agentic_rl.md, docs/zh/tutorial/agentic_rl.md |
| RAG / retrieval / knowledge | 4 | docs/en/tutorial/eval.md, docs/adapt-bailing-moe-v2.5.md, examples/scaffolding/controllers.py |
| Security / supply chain | 3 | .github/workflows/test-areal.yml |
| Database / data infrastructure | 1 | pyproject.toml |
| Frontend / app framework | 1 | examples/search_agent/tongyi_deepresearch/react_agent.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1034 |
| manifests | 28 |
| docs | 190 |
| tests | 255 |
| ci/ops | 11 |
| spec artifacts | 34 |
| agent instruction files | 29 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Install flash-attn pre-built wheel first to avoid compiling from source | 📰 News / 🚀 Getting Started / Install flash-attn pre-built wheel first to avoid compiling from source / (pick the wheel matching your Python version; see https://github.com/mjun0812/flash-attention-prebuild-wheels/releases) / For vLLM instead: cp pyproject.vllm.toml pyproject.toml && cp uv.vllm.lock uv.lock && uv sync --extra cuda / 📚 Examples / Math & Reasoning / Agentic RL / Vision-Language Models / Alignment & Infrastructure | <h1 align="center" <em AReaL</em A Large Scale Asynchronous Reinforcement Learning System </h1 <p align="center" <a href="https //arxiv.org/pdf/2505.24298" <b Paper</b </a <a href="https //areal project.github.io/AReaL/" <b Documentation</b </a <a href="https //areal project.github.io/AReaL/zh/" <b 中文文档</b </a <a href="https //deepwiki.com/areal project/AReaL" <b Ask DeepWiki</b </a <a href="https //huggingface.co/collections/inclusionAI/" <b 🤗 Models & Data</b </a <a href="./assets/figures/wechat qrcode.png" target=" blank" <img src="./assets/figures/wechat icon.png" width="20" style="vertical align middle;" <b WeChat 微信 Group</b </a <a href="https //gitcgr.com/areal project/AReaL" <img sr |


## Key Files

### Manifests

- examples/agent_service/README.md
- examples/agent_workflow/README.md
- examples/search_agent/tongyi_deepresearch/README.md
- examples/alignment/README.md
- examples/countdown/README.md
- examples/experimental/inference_service/README.md
- examples/math/README.md
- examples/multi_turn_math/README.md
- examples/openclaw/README.md
- examples/sandbox_daytona/README.md
- examples/scaffolding/README.md
- examples/skypilot/README.md
- examples/tau2/README.md
- examples/terminal_bench/README.md
- examples/tir/README.md
- examples/vlm_npu/README.md
- benchmark/README.md
- areal/experimental/agent_service/README.md
- AGENTS.md
- README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- examples/search_agent/tongyi_deepresearch/requirements.txt
- docs/requirements.txt
- docs/en/tutorial/eval.md
- docs/zh/tutorial/eval.md
- .claude/agents/algorithm-expert.md
- .claude/agents/archon-engine-expert.md
- .claude/agents/code-verifier.md
- .claude/agents/fsdp-engine-expert.md
- .claude/agents/launcher-scheduler-expert.md
- .claude/agents/megatron-engine-expert.md
- .claude/agents/planner.md
- .claude/agents/simple-code-reviewer.md
- .claude/rules/testing.md
- .claude/settings.json
- .claude/skills/add-unit-tests/SKILL.md
- ROADMAP.md
- .claude/commands/create-pr.md
- .claude/commands/gen-commit-msg.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- .claude/agents/algorithm-expert.md
- .claude/agents/archon-engine-expert.md
- .claude/agents/code-verifier.md
- .claude/agents/fsdp-engine-expert.md
- .claude/agents/launcher-scheduler-expert.md
- .claude/agents/megatron-engine-expert.md
- .claude/agents/planner.md
- .claude/agents/simple-code-reviewer.md
- .claude/rules/testing.md
- .claude/settings.json
- .claude/skills/add-unit-tests/SKILL.md
- .claude/commands/create-pr.md
- .claude/commands/gen-commit-msg.md


## Top Directories

| dir | count |
| --- | --- |
| areal | 404 |
| tests | 241 |
| examples | 178 |
| docs | 81 |
| .claude | 27 |
| .agents | 25 |
| .github | 21 |
| .codex | 17 |
| .opencode | 14 |
| blog | 3 |
| notebook | 3 |
| scripts | 2 |
| .clang-format | 1 |
| .dockerignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 733 |
| .md | 179 |
| .yaml | 66 |
| .yml | 17 |
| .toml | 12 |
| .sh | 7 |
| [no-ext] | 6 |
| .json | 5 |
| .ipynb | 3 |
| .txt | 2 |
| .backup | 1 |
| .css | 1 |
| .js | 1 |
| .jsonl | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
