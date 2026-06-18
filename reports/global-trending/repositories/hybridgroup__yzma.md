# hybridgroup/yzma

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/hybridgroup/yzma |
| local path | sources/hybridgroup__yzma |
| HEAD | acc4f5c |
| stars/forks | 504 / 17 |
| language | Go |
| license |  |
| pushedAt | 2026-06-13T08:15:03Z |
| trendScore / priorityScore | 136 / 366 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Local LLM / inference | 442 | examples/embeddings/README.md, examples/chat/README.md, examples/hello/README.md |
| AI agent / orchestration | 240 | examples/multitool/README.md, examples/describe/image.go, examples/multitool/main.go |
| Developer tools / DX | 82 | cmd/README.md, go.mod, cmd/info.go |
| RAG / retrieval / knowledge | 11 | .github/workflows/linux.yml, .github/workflows/macos.yml, .github/workflows/windows.yml |
| Data / ML platform | 10 | examples/modelinfo/README.md, PROJECTS.md, pkg/llama/model.go |
| Observability / evaluation | 6 | pkg/llama/perf_test.go, pkg/llama/llama.go, pkg/llama/perf.go |
| Cloud native / infrastructure | 1 | go.mod |
| Coding agent / software automation | 1 | PROJECTS.md |
| Database / data infrastructure | 1 | PROJECTS.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontendStack, infra, llm-app, llmFramework, local-llm, observability, rag, securityTooling |
| stacks | Go |
| capabilities | LLM/app framework, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 155 |
| manifests | 15 |
| docs | 17 |
| tests | 42 |
| ci/ops | 3 |
| spec artifacts | 4 |
| agent instruction files | 3 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | yzma - Go with your own intelligence | yzma - Go with your own intelligence / Installation / Examples / Vision Language Model (VLM) Multimodal Example / Small Language Model (SLM) Interactive Chat Example / Additional Examples / yzma in action / Models / Support / Required versions of `llama.cpp` | ! yzma logo ./images/yzma logo full color small.png yzma Go with your own intelligence ! Go Reference https //pkg.go.dev/badge/github.com/hybridgroup/yzma.svg https //pkg.go.dev/github.com/hybridgroup/yzma ! Linux https //github.com/hybridgroup/yzma/actions/workflows/linux.yml/badge.svg https //github.com/hybridgroup/yzma/actions/workflows/linux.yml ! macOS https //github.com/hybridgroup/yzma/actions/workflows/macos.yml/badge.svg https //github.com/hybridgroup/yzma/actions/workflows/macos.yml ! Windows https //github.com/hybridgroup/yzma/actions/workflows/windows.yml/badge.svg https //github.com/hybridgroup/yzma/actions/workflows/windows.yml ! GitHub Release https //img.shields.io/github/v/r |


## Key Files

### Manifests

- examples/embeddings/README.md
- examples/chat/README.md
- examples/describe/README.md
- examples/hello/README.md
- examples/installer/README.md
- examples/modelinfo/README.md
- examples/multitool/README.md
- examples/systeminfo/README.md
- examples/tooluse/README.md
- examples/vlm/README.md
- cmd/README.md
- README.md
- go.mod
- Makefile
- go.sum


### Spec / Docs / Prompt Artifacts

- pkg/template/prompts/chatml.jinja
- pkg/template/prompts/gemma3.jinja
- pkg/template/prompts/qwen2.5-instruct.jinja
- ROADMAP.md


### Agent Instruction Files

- pkg/template/prompts/chatml.jinja
- pkg/template/prompts/gemma3.jinja
- pkg/template/prompts/qwen2.5-instruct.jinja


## Top Directories

| dir | count |
| --- | --- |
| pkg | 97 |
| examples | 33 |
| cmd | 6 |
| .github | 3 |
| .gitignore | 1 |
| BENCHMARKS.md | 1 |
| CONTRIBUTORS | 1 |
| go.mod | 1 |
| go.sum | 1 |
| INSTALL.md | 1 |
| LICENSE | 1 |
| main.go | 1 |
| Makefile | 1 |
| MODELS.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 126 |
| .md | 17 |
| [no-ext] | 4 |
| .jinja | 3 |
| .yml | 3 |
| .mod | 1 |
| .sum | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
