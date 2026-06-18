# xorbitsai/inference

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/xorbitsai/inference |
| local path | sources/xorbitsai__inference |
| HEAD | 1fbae04 |
| stars/forks | 9359 / 836 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T16:58:03Z |
| trendScore / priorityScore | 146 / 425 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Local LLM / inference | 500 | AGENTS.md, README.md, doc/source/models/builtin/llm/baichuan-2-chat.rst |
| Data / ML platform | 484 | benchmark/README.md, README.md, xinference/thirdparty/f5_tts/train/README.md |
| RAG / retrieval / knowledge | 164 | AGENTS.md, README.md, xinference/thirdparty/fish_speech/fish_speech/i18n/README.md |
| Frontend / app framework | 53 | frontend/README.md, AGENTS.md, frontend/package.json |
| Cloud native / infrastructure | 52 | README.md, monitor/dashboard/README.md, monitor/filebeat/README.md |
| Observability / evaluation | 50 | benchmark/README.md, xinference/thirdparty/f5_tts/eval/README.md, monitor/alert/README.md |
| Developer tools / DX | 22 | frontend/README.md, AGENTS.md, README.md |
| AI agent / orchestration | 20 | AGENTS.md, README.md, doc/source/models/builtin/llm/deepseek-v3.2.rst |
| Coding agent / software automation | 4 | doc/source/models/builtin/llm/glm-4.7.rst, doc/source/models/builtin/llm/glm-5.1.rst, doc/source/models/builtin/llm/index.rst |
| MCP / agent interoperability | 3 | README.md, doc/source/models/builtin/llm/index.rst |
| Security / supply chain | 1 | xinference/thirdparty/fish_speech/fish_speech/i18n/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 1849 |
| manifests | 24 |
| docs | 558 |
| tests | 109 |
| ci/ops | 12 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Xorbits Inference: Model Serving Made Easy 🤖 | Xorbits Inference: Model Serving Made Easy 🤖 / 🔥 Hot Topics / Framework Enhancements / New Models / Integrations / Key Features / Why Xinference / Using Xinference / Staying Ahead / Getting Started | <div align="center" <img src="./assets/xorbits logo.png" width="180px" alt="xorbits" / Xorbits Inference Model Serving Made Easy 🤖 <p align="center" <a href="https //xinference.io/en" Xinference Enterprise</a · <a href="https //inference.readthedocs.io/en/latest/getting started/installation.html installation" Self hosting</a · <a href="https //inference.readthedocs.io/" Documentation</a </p ! PyPI Latest Release https //img.shields.io/pypi/v/xinference.svg?style=for the badge https //pypi.org/project/xinference/ ! License https //img.shields.io/pypi/l/xinference.svg?style=for the badge https //github.com/xorbitsai/inference/blob/main/LICENSE ! Build Status https //img.shields.io/github/acti |


## Key Files

### Manifests

- benchmark/README.md
- frontend/README.md
- xinference/thirdparty/f5_tts/eval/README.md
- AGENTS.md
- README.md
- monitor/alert/README.md
- monitor/dashboard/README.md
- monitor/filebeat/README.md
- xinference/thirdparty/f5_tts/infer/README.md
- xinference/thirdparty/f5_tts/model/backbones/README.md
- xinference/thirdparty/f5_tts/train/README.md
- xinference/thirdparty/fish_speech/fish_speech/i18n/README.md
- xinference/thirdparty/fish_speech/fish_speech/text/chn_text_norm/README.md
- xinference/thirdparty/fish_speech/tools/sensevoice/README.md
- xinference/thirdparty/indextts/utils/maskgct/models/codec/ns3_codec/README.md
- xinference/thirdparty/matcha/hifigan/README.md
- doc/Makefile
- frontend/package.json
- frontend/tsconfig.json
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- AGENTS.md


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| xinference | 1123 |
| doc | 537 |
| frontend | 115 |
| monitor | 28 |
| examples | 13 |
| .github | 10 |
| benchmark | 8 |
| .dockerignore | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |
| .readthedocs.yaml | 1 |
| AGENTS.md | 1 |
| LICENSE | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 954 |
| .rst | 372 |
| .po | 144 |
| .tsx | 82 |
| .js | 68 |
| .json | 38 |
| .ts | 23 |
| .md | 21 |
| .yaml | 19 |
| .yml | 16 |
| .txt | 15 |
| [no-ext] | 15 |
| .jinja | 13 |
| .css | 9 |
| .ipynb | 8 |
| .wav | 6 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
