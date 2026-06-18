# karpathy/nanochat

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/karpathy/nanochat |
| local path | sources/karpathy__nanochat |
| HEAD | dc54a1a |
| stars/forks | 55166 / 7579 |
| language | Python |
| license | MIT |
| pushedAt | 2026-05-05T03:17:23Z |
| trendScore / priorityScore | 150 / 380 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Data / ML platform | 500 | README.md, pyproject.toml, nanochat/core_eval.py |
| Observability / evaluation | 121 | README.md, scripts/base_eval.py, scripts/chat_cli.py |
| RAG / retrieval / knowledge | 46 | dev/gen_synthetic_data.py, dev/LEADERBOARD.md, dev/LOG.md |
| Coding agent / software automation | 22 | README.md, dev/LOG.md, nanochat/engine.py |
| Developer tools / DX | 17 | README.md, scripts/chat_eval.py, dev/LOG.md |
| Cloud native / infrastructure | 6 | nanochat/engine.py, nanochat/fp8.py, nanochat/ui.html |
| Security / supply chain | 2 | nanochat/execution.py |
| AI agent / orchestration | 1 | nanochat/fp8.py |
| Frontend / app framework | 1 | README.md |
| Local LLM / inference | 1 | nanochat/dataloader.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, devtools, frontend, frontendStack, infra, llmFramework, local-llm, observability, rag, security, securityTooling |
| stacks | Python |
| capabilities | LLM/app framework, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 53 |
| manifests | 2 |
| docs | 4 |
| tests | 2 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | nanochat | nanochat / Time-to-GPT-2 Leaderboard / Getting started / Setup / Reproduce and talk to GPT-2 / Research / Running on CPU / MPS / Precision / dtype / Guides / File structure | nanochat ! nanochat logo dev/nanochat.png ! scaling laws dev/scaling laws jan26.png nanochat is the simplest experimental harness for training LLMs. It is designed to run on a single GPU node, the code is minimal/hackable, and it covers all major LLM stages including tokenization, pretraining, finetuning, evaluation, inference, and a chat UI. For example, you can train your own GPT 2 capability LLM which cost ~$43,000 to train in 2019 for only $48 ~2 hours of 8XH100 GPU node and then talk to it in a familiar ChatGPT like web UI. On a spot instance, the total cost can be closer to ~$15. More generally, nanochat is configured out of the box to train an entire miniseries of compute optimal mode |


## Key Files

### Manifests

- README.md
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- .claude/skills/read-arxiv-paper/SKILL.md


### Agent Instruction Files

- .claude/skills/read-arxiv-paper/SKILL.md


## Top Directories

| dir | count |
| --- | --- |
| nanochat | 17 |
| scripts | 9 |
| tasks | 8 |
| dev | 7 |
| runs | 4 |
| tests | 2 |
| .claude | 1 |
| .gitignore | 1 |
| .python-version | 1 |
| LICENSE | 1 |
| pyproject.toml | 1 |
| README.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 36 |
| .md | 4 |
| .sh | 4 |
| [no-ext] | 3 |
| .html | 2 |
| .ipynb | 2 |
| .svg | 1 |
| .toml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
