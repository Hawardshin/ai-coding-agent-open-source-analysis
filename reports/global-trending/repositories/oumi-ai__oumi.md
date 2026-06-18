# oumi-ai/oumi

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/oumi-ai/oumi |
| local path | sources/oumi-ai__oumi |
| HEAD | 1b27caa |
| stars/forks | 9317 / 778 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T16:24:39Z |
| trendScore / priorityScore | 132 / 426 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Data / ML platform | 451 | configs/examples/bulk_inference/README.md, configs/examples/deepspeed/README.md, configs/examples/deploy/README.md |
| Observability / evaluation | 363 | scripts/examples/evaluation/README.md, configs/README.md, README.md |
| MCP / agent interoperability | 89 | README.md, configs/examples/synthesis/mcp_docs_lookup_synth.yaml, pyproject.toml |
| Local LLM / inference | 79 | configs/examples/gold/README.md, configs/examples/macos_gguf/README.md, README.md |
| Developer tools / DX | 76 | configs/examples/deploy/README.md, README.md, configs/projects/dcvlr/README.md |
| AI agent / orchestration | 55 | configs/examples/synthesis/README.md, README.md, configs/projects/coalm/README.md |
| Cloud native / infrastructure | 38 | README.md, configs/projects/dcvlr/README.md, pyproject.toml |
| Security / supply chain | 18 | docs/user_guides/evaluate/leaderboards.md, docs/user_guides/mcp.md, src/oumi/mcp/prompts/__init__.py |
| Frontend / app framework | 12 | configs/projects/coalm/README.md, configs/examples/synthesis/mcp_docs_lookup_synth.yaml, configs/examples/synthesis/conversation_synth.yaml |
| Coding agent / software automation | 7 | README.md, docs/user_guides/mcp.md |
| RAG / retrieval / knowledge | 3 | configs/projects/halloumi/README.md, docs/user_guides/evaluate/standardized_benchmarks.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 1443 |
| manifests | 40 |
| docs | 142 |
| tests | 260 |
| ci/ops | 10 |
| spec artifacts | 38 |
| agent instruction files | 10 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Basic installation | Everything you need to build state-of-the-art foundation models, end-to-end / 🔥 News / 🔎 About / 🚀 Getting Started / 🔧 Usage / Installation / Basic installation / With GPU support / Latest development version / Pull the latest image | ! Oumi Logo https //github.com/oumi ai/oumi/raw/main/docs/ static/logo/header readme.svg ! Documentation https //img.shields.io/badge/Documentation oumi blue.svg https //oumi.ai/docs/en/latest/index.html ! Blog https //img.shields.io/badge/Blog oumi blue.svg https //oumi.ai/blog ! Twitter https //img.shields.io/twitter/follow/Oumi PBC https //x.com/Oumi PBC ! Discord https //img.shields.io/discord/1286348126797430814?label=Discord https //discord.gg/oumi ! PyPI version https //badge.fury.io/py/oumi.svg https //badge.fury.io/py/oumi ! License https //img.shields.io/badge/License Apache%202.0 blue.svg https //opensource.org/licenses/Apache 2.0 ! Tests https //github.com/oumi ai/oumi/actions/wo |


## Key Files

### Manifests

- scripts/examples/evaluation/README.md
- configs/examples/bulk_inference/README.md
- configs/examples/deepspeed/README.md
- configs/examples/deploy/README.md
- configs/examples/fineweb_ablation_pretraining/README.md
- configs/examples/gkd/README.md
- configs/examples/gold/README.md
- configs/examples/macos_gguf/README.md
- configs/examples/misc/README.md
- configs/examples/quantization/README.md
- configs/examples/README.md
- configs/examples/synthesis/README.md
- scripts/examples/batch_inference/README.md
- configs/recipes/smollm/README.md
- configs/README.md
- data/dataset_examples/README.md
- README.md
- configs/projects/aya/README.md
- configs/projects/chatqa/README.md
- configs/projects/coalm/README.md


### Spec / Docs / Prompt Artifacts

- configs/examples/berry_bench/evaluation/eval.yaml
- configs/examples/letter_counting/evaluation/eval.yaml
- src/oumi/mcp/prompts/__init__.py
- src/oumi/mcp/prompts/analyze.py
- src/oumi/mcp/prompts/cloud_launch.py
- src/oumi/mcp/prompts/eval.py
- src/oumi/mcp/prompts/get_started.py
- src/oumi/mcp/prompts/infer.py
- src/oumi/mcp/prompts/mle_workflow.py
- src/oumi/mcp/prompts/post_training.py
- src/oumi/mcp/prompts/synth.py
- src/oumi/mcp/prompts/train.py
- configs/projects/aya/evaluation/eval.yaml
- configs/recipes/deepseek_r1/evaluation/distill_llama_70b/eval.yaml
- configs/recipes/deepseek_r1/evaluation/distill_llama_8b/eval.yaml
- configs/recipes/deepseek_r1/evaluation/distill_qwen_1_5b/eval.yaml
- configs/recipes/deepseek_r1/evaluation/distill_qwen_32b/eval.yaml
- configs/recipes/falcon_e/evaluation/falcon_e_1b_instruct/eval.yaml
- configs/recipes/falcon_e/evaluation/falcon_e_1b/eval.yaml
- configs/recipes/falcon_e/evaluation/falcon_e_3b_instruct/eval.yaml


### Agent Instruction Files

- src/oumi/mcp/prompts/__init__.py
- src/oumi/mcp/prompts/analyze.py
- src/oumi/mcp/prompts/cloud_launch.py
- src/oumi/mcp/prompts/eval.py
- src/oumi/mcp/prompts/get_started.py
- src/oumi/mcp/prompts/infer.py
- src/oumi/mcp/prompts/mle_workflow.py
- src/oumi/mcp/prompts/post_training.py
- src/oumi/mcp/prompts/synth.py
- src/oumi/mcp/prompts/train.py


## Top Directories

| dir | count |
| --- | --- |
| configs | 569 |
| src | 425 |
| tests | 258 |
| docs | 78 |
| scripts | 45 |
| notebooks | 20 |
| .github | 13 |
| platform | 9 |
| data | 8 |
| .vscode | 2 |
| .gitignore | 1 |
| .license_header.txt | 1 |
| .markdownlint.json | 1 |
| .pre-commit-config.yaml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 672 |
| .yaml | 540 |
| .md | 127 |
| .ipynb | 26 |
| .sh | 25 |
| .jinja | 15 |
| .txt | 7 |
| .json | 6 |
| [no-ext] | 6 |
| .jsonl | 5 |
| .yml | 3 |
| .html | 2 |
| .svg | 2 |
| .bib | 1 |
| .cff | 1 |
| .code-workspace | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
