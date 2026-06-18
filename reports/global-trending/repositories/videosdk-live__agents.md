# videosdk-live/agents

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/videosdk-live/agents |
| local path | sources/videosdk-live__agents |
| HEAD | a4e6da1 |
| stars/forks | 629 / 92 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T12:50:44Z |
| trendScore / priorityScore | 135 / 387 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | examples/avatar/avatar_server_examples/README.md, examples/langchain/README.md, examples/langgraph/README.md |
| Data / ML platform | 447 | examples/langgraph/README.md, videosdk-agents/README.md, AGENTS.md |
| MCP / agent interoperability | 46 | AGENTS.md, README.md, videosdk-agents/pyproject.toml |
| Developer tools / DX | 32 | examples/avatar/avatar_server_examples/README.md, AGENTS.md, README.md |
| RAG / retrieval / knowledge | 18 | AGENTS.md, README.md, use_case_examples/custom_rag_agent.py |
| Coding agent / software automation | 12 | examples/langchain/agent.py |
| Cloud native / infrastructure | 11 | README.md, examples/videosdk_cascade_inference_agent.py, examples/n8n_workflow/customer_followup_agent.json |
| Observability / evaluation | 7 | README.md, videosdk-agents/pyproject.toml, examples/observability_hooks.py |
| Security / supply chain | 7 | examples/langchain/README.md, videosdk-plugins/videosdk-plugins-rnnoise/README.md, examples/avatar/avatar_server_examples/videosdk_avatar_agent.py |
| Frontend / app framework | 4 | README.md |
| Database / data infrastructure | 3 | examples/cached_tts.py, examples/voice_pipeline_hooks.py, use_case_examples/customer_support_agent.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 491 |
| manifests | 40 |
| docs | 90 |
| tests | 0 |
| ci/ops | 2 |
| spec artifacts | 6 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | VideoSDK AI Agents | VideoSDK AI Agents / Overview / Pipeline Modes / Cascade Mode — STT → LLM → TTS / Realtime Mode — Lowest Latency with Unified Models / Hybrid Mode — Mix & Match / External STT → Realtime LLM / Realtime LLM → External TTS / Pipeline Hooks — Intercept Any Stage / Pre-requisites | <! BEGIN BANNER IMAGE <p align="center" <img src="https //assets.videosdk.live/images/agents github banner.png" alt="VideoSDK AI Agents Banner" style="width 100%;" </p <! END BANNER IMAGE VideoSDK AI Agents Open source Python framework for building production ready, real time voice and multimodal AI agents. ! PyPI Version https //img.shields.io/pypi/v/videosdk agents ! PyPI Downloads https //static.pepy.tech/badge/videosdk agents/month https //pepy.tech/projects/videosdk agents ! Twitter Follow https //img.shields.io/twitter/follow/video sdk https //x.com/video sdk ! YouTube https //img.shields.io/badge/YouTube VideoSDK red https //www.youtube.com/c/VideoSDK ! LinkedIn https //img.shields.io |


## Key Files

### Manifests

- examples/avatar/avatar_server_examples/README.md
- examples/langchain/README.md
- examples/langgraph/README.md
- videosdk-agents/README.md
- AGENTS.md
- README.md
- videosdk-plugins/videosdk-plugins-anam/README.md
- videosdk-plugins/videosdk-plugins-anthropic/README.md
- videosdk-plugins/videosdk-plugins-assemblyai/README.md
- videosdk-plugins/videosdk-plugins-aws/README.md
- videosdk-plugins/videosdk-plugins-azure/README.md
- videosdk-plugins/videosdk-plugins-cambai/README.md
- videosdk-plugins/videosdk-plugins-cartesia/README.md
- videosdk-plugins/videosdk-plugins-cerebras/README.md
- videosdk-plugins/videosdk-plugins-cometapi/README.md
- videosdk-plugins/videosdk-plugins-deepgram/README.md
- videosdk-plugins/videosdk-plugins-elevenlabs/README.md
- videosdk-plugins/videosdk-plugins-gladia/README.md
- videosdk-plugins/videosdk-plugins-google/README.md
- videosdk-plugins/videosdk-plugins-groq/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- examples/avatar/avatar_server_examples/requirements.txt
- examples/langchain/requirements.txt
- examples/langgraph/requirements.txt
- requirements.txt


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| videosdk-plugins | 241 |
| videosdk-agents | 123 |
| examples | 80 |
| use_case_examples | 26 |
| .github | 5 |
| scripts | 2 |
| .env.example | 1 |
| .gitignore | 1 |
| AGENTS.md | 1 |
| BUILD_YOUR_OWN_PLUGIN.md | 1 |
| CLAUDE.md | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE.txt | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 343 |
| .md | 90 |
| .toml | 37 |
| .txt | 6 |
| .html | 3 |
| .json | 3 |
| .ogg | 2 |
| .yml | 2 |
| [no-ext] | 2 |
| .example | 1 |
| .js | 1 |
| .sh | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
