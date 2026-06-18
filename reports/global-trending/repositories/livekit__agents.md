# livekit/agents

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/livekit/agents |
| local path | sources/livekit__agents |
| HEAD | 645d50f |
| stars/forks | 11023 / 3238 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T22:25:27Z |
| trendScore / priorityScore | 163 / 450 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | examples/avatar_agents/anam/README.md, examples/avatar_agents/audio_wave/README.md, examples/avatar_agents/avatario/README.md |
| Developer tools / DX | 85 | examples/avatar_agents/bithuman/README.md, examples/avatar_agents/README.md, examples/voice_agents/grok/README.md |
| Cloud native / infrastructure | 32 | AGENTS.md, README.md, livekit-plugins/livekit-plugins-gnani/README.md |
| MCP / agent interoperability | 31 | examples/voice_agents/README.md, AGENTS.md, README.md |
| Observability / evaluation | 21 | examples/voice_agents/README.md, examples/frontdesk/README.md, examples/survey/README.md |
| Data / ML platform | 20 | examples/voice_agents/README.md, examples/telephony/bank-ivr/README.md, livekit-plugins/livekit-plugins-aws/README.md |
| Frontend / app framework | 19 | examples/voice_agents/grok/README.md, examples/README.md, examples/avatar/README.md |
| RAG / retrieval / knowledge | 19 | examples/voice_agents/llamaindex-rag/README.md, examples/voice_agents/README.md, examples/README.md |
| Security / supply chain | 14 | examples/avatar_agents/bithuman/README.md, examples/voice_agents/grok/README.md, examples/README.md |
| Database / data infrastructure | 9 | examples/voice_agents/README.md, examples/README.md, examples/drive-thru/README.md |
| Coding agent / software automation | 4 | README.md |
| Local LLM / inference | 3 | livekit-plugins/livekit-plugins-openai/README.md, livekit-plugins/livekit-plugins-turn-detector/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Python, C/C++ |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1247 |
| manifests | 40 |
| docs | 123 |
| tests | 128 |
| ci/ops | 23 |
| spec artifacts | 13 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | What is Agents? / Features / Installation / Docs and guides / Building with AI coding agents / Core concepts / Usage / Simple voice agent / Multi-agent handoff / Testing | <! BEGIN BANNER IMAGE <picture <source media=" prefers color scheme dark " srcset="/.github/banner dark.png" <source media=" prefers color scheme light " srcset="/.github/banner light.png" <img style="width 100%;" alt="The LiveKit icon, the name of the repository and some sample code in the background." src="https //raw.githubusercontent.com/livekit/agents/main/.github/banner light.png" </picture <! END BANNER IMAGE <br / ! PyPI Version https //img.shields.io/pypi/v/livekit agents ! PyPI Downloads https //static.pepy.tech/badge/livekit agents/month https //pepy.tech/projects/livekit agents ! Slack community https //img.shields.io/endpoint?url=https%3A%2F%2Flivekit.io%2Fbadges%2Fslack https / |


## Key Files

### Manifests

- examples/avatar_agents/anam/README.md
- examples/avatar_agents/audio_wave/README.md
- examples/avatar_agents/avatario/README.md
- examples/avatar_agents/avatartalk/README.md
- examples/avatar_agents/bey/README.md
- examples/avatar_agents/bithuman/README.md
- examples/avatar_agents/did/README.md
- examples/avatar_agents/keyframe/README.md
- examples/avatar_agents/lemonslice/README.md
- examples/avatar_agents/liveavatar/README.md
- examples/avatar_agents/README.md
- examples/avatar_agents/runway/README.md
- examples/avatar_agents/simli/README.md
- examples/avatar_agents/tavus/README.md
- examples/avatar_agents/trugen/README.md
- examples/voice_agents/grok/README.md
- examples/voice_agents/llamaindex-rag/README.md
- examples/voice_agents/README.md
- examples/README.md
- examples/avatar/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- examples/avatar_agents/audio_wave/requirements.txt
- examples/avatar_agents/bithuman/requirements.txt
- examples/voice_agents/requirements.txt
- examples/avatar/requirements.txt
- examples/drive-thru/requirements.txt
- examples/frontdesk/requirements.txt
- examples/healthcare/requirements.txt
- examples/hotel_receptionist/requirements.txt
- examples/inference/requirements.txt
- examples/other/text-to-speech/requirements.txt
- examples/survey/requirements.txt


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| livekit-plugins | 674 |
| livekit-agents | 211 |
| examples | 210 |
| tests | 118 |
| .github | 19 |
| scripts | 2 |
| .gitattributes | 1 |
| .gitignore | 1 |
| AGENTS.md | 1 |
| CLAUDE.md | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |
| makefile | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 886 |
| .md | 123 |
| .toml | 74 |
| .typed | 71 |
| [no-ext] | 33 |
| .txt | 17 |
| .yml | 14 |
| .ogg | 8 |
| .yaml | 4 |
| .wav | 3 |
| .c | 2 |
| .json | 2 |
| .mp3 | 2 |
| .cpp | 1 |
| .example | 1 |
| .onnx | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
