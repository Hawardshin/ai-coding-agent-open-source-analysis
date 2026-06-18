# mozilla-ai/llamafile

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/mozilla-ai/llamafile |
| local path | sources/mozilla-ai__llamafile |
| HEAD | 6395110 |
| stars/forks | 24999 / 1398 |
| language | C++ |
| license | NOASSERTION |
| pushedAt | 2026-06-09T12:15:31Z |
| trendScore / priorityScore | 167 / 434 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Local LLM / inference | 273 | docs/AGENTS.md, llama.cpp.patches/README.md, localscore/README.md |
| Developer tools / DX | 109 | llama.cpp.patches/README.md, localscore/README.md, tests/integration/README.md |
| AI agent / orchestration | 19 | docs/AGENTS.md, Makefile, docs/quickstart.md |
| Observability / evaluation | 16 | localscore/README.md, docs/skills/llamafile/testing.md, docs/skills/llamafile/architecture.md |
| Security / supply chain | 10 | docs/skills/llamafile/testing.md, docs/troubleshooting.md, docs/whisperfile/server.md |
| MCP / agent interoperability | 8 | docs/AGENTS.md, Makefile, tests/docs/test_github_pages_redirects.py |
| Database / data infrastructure | 5 | localscore/README.md, docs/skills/llamafile/architecture.md |
| RAG / retrieval / knowledge | 5 | docs/creating_llamafiles.md, docs/pre-built-llamafiles.md, docs/technical_details.md |
| Coding agent / software automation | 3 | docs/AGENTS.md, Makefile |
| Frontend / app framework | 3 | llama.cpp.patches/README.md, llama.cpp.patches/fetch-ui-assets.sh |
| Cloud native / infrastructure | 1 | docs/creating_llamafiles.md |
| Data / ML platform | 1 | docs/running_llamafile.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, llm-app, llmFramework, local-llm, mcp, observability, rag, security, securityTooling |
| stacks | Python, C/C++ |
| capabilities | LLM/app framework, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 654 |
| manifests | 7 |
| docs | 38 |
| tests | 31 |
| ci/ops | 6 |
| spec artifacts | 2 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | llamafile | llamafile / v0.10.* / Quick Start / Download an example model (Qwen3.5 0.8B) / Make it executable (macOS/Linux/BSD) / Run it / Documentation / Licensing | llamafile <img src="docs/images/llamafile 640x640.png" width="320" height="320" alt=" line drawing of llama animal head in front of slightly open manilla folder filled with files " ! License https //img.shields.io/badge/license Apache%202.0 blue.svg https //github.com/mozilla ai/llamafile/blob/main/LICENSE ! ci status https //github.com/mozilla ai/llamafile/actions/workflows/ci.yml/badge.svg https //github.com/mozilla ai/llamafile/actions/workflows/ci.yml ! Based on llama.cpp https //img.shields.io/badge/llama.cpp 7f5ee54 orange.svg https //github.com/ggml org/llama.cpp/commit/7f5ee54 ! Based on whisper.cpp https //img.shields.io/badge/whisper.cpp 2eeeba5 green.svg https //github.com/ggml or |


## Key Files

### Manifests

- docs/AGENTS.md
- llama.cpp.patches/README.md
- localscore/README.md
- README.md
- tests/integration/README.md
- Makefile
- tests/integration/pyproject.toml


### Spec / Docs / Prompt Artifacts

- docs/AGENTS.md
- docs/skills/llamafile/architecture.md


### Agent Instruction Files

- docs/AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| llamafile | 234 |
| third_party | 231 |
| llama.cpp.patches | 43 |
| localscore | 29 |
| tests | 28 |
| docs | 27 |
| .github | 16 |
| whisperfile | 13 |
| whisper.cpp.patches | 8 |
| stable-diffusion.cpp.patches | 4 |
| scripts | 3 |
| .llamafile_plugin | 2 |
| diffusionfile | 2 |
| tools | 2 |


## Extension Distribution

| ext | count |
| --- | --- |
| .h | 126 |
| .cpp | 125 |
| .c | 113 |
| .gperf | 91 |
| .patch | 42 |
| .md | 37 |
| .sh | 18 |
| .mk | 16 |
| .yml | 15 |
| .pem | 13 |
| .py | 13 |
| [no-ext] | 9 |
| .cc | 8 |
| .bat | 6 |
| .llamafile | 5 |
| .inc | 4 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
