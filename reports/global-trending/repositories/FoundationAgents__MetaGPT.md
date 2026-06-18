# FoundationAgents/MetaGPT

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/FoundationAgents/MetaGPT |
| local path | sources/FoundationAgents__MetaGPT |
| HEAD | 11cdf46 |
| stars/forks | 68866 / 8806 |
| language | Python |
| license | MIT |
| pushedAt | 2026-01-21T10:12:33Z |
| trendScore / priorityScore | 163 / 430 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 92 | examples/di/InfiAgent-DABench/README.md, examples/di/README.md, examples/sela/README.md |
| Data / ML platform | 85 | examples/di/InfiAgent-DABench/README.md, examples/aflow/README.md, examples/di/README.md |
| Observability / evaluation | 67 | examples/aflow/README.md, examples/di/README.md, examples/spo/README.md |
| Developer tools / DX | 64 | examples/di/InfiAgent-DABench/README.md, examples/ui_with_chainlit/README.md, README.md |
| RAG / retrieval / knowledge | 49 | examples/exp_pool/README.md, examples/rag/omniparse.py, examples/rag/rag_bm.py |
| Frontend / app framework | 33 | metagpt/ext/stanford_town/README.md, metagpt/environment/minecraft/mineflayer/mineflayer-collectblock/tsconfig.json, metagpt/prompts/di/architect.py |
| Cloud native / infrastructure | 26 | examples/aflow/README.md, .devcontainer/README.md, README.md |
| Coding agent / software automation | 4 | metagpt/ext/android_assistant/prompts/assistant_prompt.py, metagpt/prompts/di/swe_agent.py |
| Database / data infrastructure | 4 | requirements.txt, examples/stream_output_via_api.py |
| Local LLM / inference | 1 | README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, observability, rag, sdk-api, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1173 |
| manifests | 25 |
| docs | 67 |
| tests | 343 |
| ci/ops | 7 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | MetaGPT: The Multi-Agent Framework | MetaGPT: The Multi-Agent Framework / News / Software Company as Multi-Agent System / Get Started / Installation / or `pip install --upgrade git+https://github.com/geekan/MetaGPT.git` / or `git clone https://github.com/geekan/MetaGPT && cd MetaGPT && pip install --upgrade -e .` / Configuration / Check https://docs.deepwisdom.ai/main/en/guide/get_started/configuration.html for more details / Usage | MetaGPT The Multi Agent Framework <p align="center" <a href="" <img src="docs/resources/MetaGPT new log.png" alt="MetaGPT logo Enable GPT to work in a software company, collaborating to tackle more complex tasks." width="150px" </a </p <p align="center" <b En</b <a href="docs/README CN.md" 中</a <a href="docs/README FR.md" Fr</a <a href="docs/README JA.md" 日</a <b Assign different roles to GPTs to form a collaborative entity for complex tasks.</b </p <p align="center" <a href="https //opensource.org/licenses/MIT" <img src="https //img.shields.io/badge/License MIT blue.svg" alt="License MIT" </a <a href="https //discord.gg/DYn29wFk9z" <img src="https //img.shields.io/badge/Join Discord gGnrXvV |


## Key Files

### Manifests

- examples/di/InfiAgent-DABench/README.md
- examples/aflow/README.md
- examples/di/README.md
- examples/exp_pool/README.md
- examples/sela/README.md
- examples/spo/README.md
- examples/ui_with_chainlit/README.md
- metagpt/ext/aflow/benchmark/README.md
- .devcontainer/README.md
- README.md
- metagpt/environment/minecraft/mineflayer/mineflayer-collectblock/README.md
- metagpt/environment/README.md
- metagpt/ext/android_assistant/README.md
- metagpt/ext/sela/README.md
- metagpt/ext/sela/runner/README.md
- metagpt/ext/stanford_town/README.md
- examples/android_assistant/requirements.txt
- examples/stanford_town/requirements.txt
- .devcontainer/docker-compose.yaml
- Dockerfile


### Spec / Docs / Prompt Artifacts

- examples/android_assistant/requirements.txt
- examples/stanford_town/requirements.txt
- metagpt/prompts/metagpt_sample.py
- requirements.txt
- metagpt/ext/aflow/scripts/prompts/optimize_prompt.py
- metagpt/ext/aflow/scripts/prompts/prompt.py
- metagpt/ext/android_assistant/prompts/__init__.py
- metagpt/ext/android_assistant/prompts/assistant_prompt.py
- metagpt/ext/android_assistant/prompts/operation_prompt.py
- metagpt/ext/sela/requirements.txt
- metagpt/ext/spo/prompts/evaluate_prompt.py
- metagpt/ext/spo/prompts/optimize_prompt.py
- metagpt/ext/stanford_town/prompts/__init__.py
- metagpt/ext/stanford_town/prompts/action_location_object_vMar11.txt
- metagpt/ext/stanford_town/prompts/action_location_sector_v1.txt
- metagpt/ext/stanford_town/prompts/action_object_v2.txt
- metagpt/ext/stanford_town/prompts/daily_planning_v6.txt
- metagpt/ext/stanford_town/prompts/decide_to_talk_v2.txt
- metagpt/ext/stanford_town/prompts/generate_event_triple_v1.txt
- metagpt/ext/stanford_town/prompts/generate_focal_pt_v1.txt


### Agent Instruction Files

- metagpt/prompts/metagpt_sample.py
- metagpt/ext/aflow/scripts/prompts/optimize_prompt.py
- metagpt/ext/aflow/scripts/prompts/prompt.py
- metagpt/ext/android_assistant/prompts/__init__.py
- metagpt/ext/android_assistant/prompts/assistant_prompt.py
- metagpt/ext/android_assistant/prompts/operation_prompt.py
- metagpt/ext/spo/prompts/evaluate_prompt.py
- metagpt/ext/spo/prompts/optimize_prompt.py
- metagpt/ext/stanford_town/prompts/__init__.py
- metagpt/ext/stanford_town/prompts/action_location_object_vMar11.txt
- metagpt/ext/stanford_town/prompts/action_location_sector_v1.txt
- metagpt/ext/stanford_town/prompts/action_object_v2.txt
- metagpt/ext/stanford_town/prompts/daily_planning_v6.txt
- metagpt/ext/stanford_town/prompts/decide_to_talk_v2.txt
- metagpt/ext/stanford_town/prompts/generate_event_triple_v1.txt


## Top Directories

| dir | count |
| --- | --- |
| metagpt | 632 |
| tests | 342 |
| examples | 116 |
| docs | 39 |
| config | 17 |
| .github | 9 |
| .devcontainer | 4 |
| .coveragerc | 1 |
| .dockerignore | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |
| Dockerfile | 1 |
| LICENSE | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 888 |
| .json | 71 |
| .txt | 55 |
| .md | 41 |
| .yaml | 36 |
| .svg | 18 |
| .js | 15 |
| [no-ext] | 15 |
| .sh | 12 |
| .ts | 8 |
| .docx | 2 |
| .html | 2 |
| .mp3 | 2 |
| .mp4 | 2 |
| .example | 1 |
| .in | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
