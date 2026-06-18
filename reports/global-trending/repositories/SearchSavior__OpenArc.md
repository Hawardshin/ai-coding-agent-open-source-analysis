# SearchSavior/OpenArc

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/SearchSavior/OpenArc |
| local path | sources/SearchSavior__OpenArc |
| HEAD | 0a6552b |
| stars/forks | 461 / 38 |
| language | Python |
| license |  |
| pushedAt | 2026-06-16T22:58:32Z |
| trendScore / priorityScore | 138 / 377 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Data / ML platform | 217 | README.md, examples/utilities/evaluate_tokenization_round_trip.py, pyproject.toml |
| Developer tools / DX | 67 | Dockerfile, pyproject.toml, demos/talk_to_llm.py |
| RAG / retrieval / knowledge | 53 | README.md, docs/commands.md, docs/index.md |
| Cloud native / infrastructure | 40 | README.md, Dockerfile, docs/commands.md |
| AI agent / orchestration | 29 | Dockerfile, pyproject.toml, examples/openvino_genai/ov_genai_async_message_queue.py |
| Coding agent / software automation | 26 | examples/openvino_genai/ov_genai_continuous_batch.py, src/cli/modules/benchmark.py, src/server/routes/openai.py |
| Observability / evaluation | 24 | docs/commands.md, examples/openvino_genai/ov_genai_speculative_decode.py, src/cli/groups/bench.py |
| Local LLM / inference | 14 | README.md, pyproject.toml, docs/commands.md |
| Database / data infrastructure | 10 | README.md, docs/commands.md, src/cli/groups/bench.py |
| Security / supply chain | 5 | examples/nncf/nncf_compress_fp8.py, src/engine/openvino/qwen3_asr/qwen3_asr_utils.py, src/server/deps.py |
| MCP / agent interoperability | 2 | AGENTS.md |
| Frontend / app framework | 1 | docs/index.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, security, securityTooling |
| stacks | Python, C/C++ |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 130 |
| manifests | 6 |
| docs | 7 |
| tests | 25 |
| ci/ops | 4 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Quickstart / Features / Acknowledgments | ! openarc DOOM assets/openarc DOOM.png ! Discord https //img.shields.io/discord/1341627368581628004?logo=Discord&logoColor=%23ffffff&label=Discord&link=https%3A%2F%2Fdiscord.gg%2FmaMY7QjG https //discord.gg/Bzz9hax9Jq ! Hugging Face https //img.shields.io/badge/🤗%20Hugging%20Face Echo9Zulu yellow https //huggingface.co/Echo9Zulu ! Devices https //img.shields.io/badge/Devices CPU%2FGPU%2FNPU blue https //github.com/openvinotoolkit/openvino ! Ask DeepWiki https //deepwiki.com/badge.svg https //deepwiki.com/SearchSavior/OpenArc ! Documentation https //img.shields.io/badge/📖%20Documentation blue https //searchsavior.github.io/OpenArc/ !NOTE OpenArc is under active development. OpenArc is an in |


## Key Files

### Manifests

- AGENTS.md
- README.md
- docker-compose.yaml
- Dockerfile
- gpu-metrics/pyproject.toml
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- AGENTS.md


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| src | 56 |
| tests | 25 |
| examples | 17 |
| demos | 7 |
| docs | 4 |
| gpu-metrics | 3 |
| .github | 2 |
| .cursorignore | 1 |
| .dockerignore | 1 |
| .gitignore | 1 |
| .python-version | 1 |
| AGENTS.md | 1 |
| benchmark | 1 |
| CONTRIBUTING.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 105 |
| .md | 7 |
| [no-ext] | 6 |
| .toml | 3 |
| .wav | 2 |
| .yaml | 2 |
| .bat | 1 |
| .cpp | 1 |
| .ipynb | 1 |
| .sh | 1 |
| .yml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
