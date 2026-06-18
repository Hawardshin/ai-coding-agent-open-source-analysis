# thushan/olla

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/thushan/olla |
| local path | sources/thushan__olla |
| HEAD | e1e4442 |
| stars/forks | 244 / 34 |
| language | Go |
| license |  |
| pushedAt | 2026-06-17T12:05:48Z |
| trendScore / priorityScore | 134 / 444 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 500 | examples/crush-vllm/README.md, examples/claude-code-llamacpp/README.md, examples/claude-code-ollama/README.md |
| Local LLM / inference | 500 | examples/crush-vllm/README.md, examples/claude-code-llamacpp/README.md, examples/claude-code-ollama/README.md |
| Coding agent / software automation | 287 | examples/crush-vllm/README.md, examples/claude-code-llamacpp/README.md, examples/claude-code-ollama/README.md |
| Observability / evaluation | 214 | examples/crush-vllm/README.md, examples/claude-code-llamacpp/README.md, examples/claude-code-ollama/README.md |
| Developer tools / DX | 169 | examples/crush-vllm/README.md, examples/opencode-lmstudio/README.md, test/scripts/integration/README.md |
| Security / supply chain | 161 | test/scripts/README.md, CLAUDE.md, examples/ollama-openwebui/compose.yaml |
| RAG / retrieval / knowledge | 86 | test/scripts/logic/README.md, docs/content/api-reference/litellm.md, docs/content/api-reference/vllm-mlx.md |
| AI agent / orchestration | 41 | config/profiles/README.md, CLAUDE.md, readme.md |
| Frontend / app framework | 34 | readme.md, docs/content/integrations/frontend/claude-code.md, docs/content/integrations/frontend/opencode.md |
| Data / ML platform | 30 | CLAUDE.md, docs/content/api-reference/vllm-mlx.md, docs/content/api-reference/vllm.md |
| Database / data infrastructure | 23 | docs/content/api-reference/litellm.md, docs/content/integrations/backend/litellm.md, docs/content/api-reference/sglang.md |
| MCP / agent interoperability | 1 | CLAUDE.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Python, Go |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 633 |
| manifests | 27 |
| docs | 115 |
| tests | 246 |
| ci/ops | 11 |
| spec artifacts | 17 |
| agent instruction files | 13 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| readme.md | Download latest release (auto-detects your platform) | Key Features / Supported Backends / Platform Support / Quick Start / Installation / Download latest release (auto-detects your platform) / Docker (automatically pulls correct architecture) / Or explicitly specify platform (e.g., for ARM64) / Install via Go / Build from source | <div align="center" <img src="assets/images/banner.png" width="480" height="249" alt="Olla Smart LLM Load Balancer & Proxy" / <p <a href="https //github.com/thushan/olla/blob/master/LICENSE" <img src="https //img.shields.io/github/license/thushan/olla" alt="License" </a <a href="https //golang.org/" <img src="https //img.shields.io/github/go mod/go version/thushan/olla" alt="Go" </a <a href="https //github.com/thushan/olla/actions/workflows/ci.yml" <img src="https //github.com/thushan/olla/actions/workflows/ci.yml/badge.svg?branch=main" alt="CI" </a <a href="https //goreportcard.com/report/github.com/thushan/olla" <img src="https //goreportcard.com/badge/github.com/thushan/olla" alt="Go Repo |


## Key Files

### Manifests

- examples/crush-vllm/README.md
- examples/claude-code-llamacpp/README.md
- examples/claude-code-ollama/README.md
- examples/ollama-openwebui/README.md
- examples/opencode-lmstudio/README.md
- test/cmd/ollamock/README.md
- test/scripts/cases/README.md
- test/scripts/integration/README.md
- test/scripts/logic/README.md
- test/scripts/passthrough/README.md
- test/scripts/README.md
- test/scripts/sticky/README.md
- test/scripts/streaming/README.md
- config/profiles/README.md
- CLAUDE.md
- examples/crush-vllm/compose.yaml
- docs/requirements.txt
- examples/claude-code-llamacpp/compose.yaml
- examples/claude-code-ollama/compose.yaml
- examples/ollama-openwebui/compose.yaml


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- docs/requirements.txt
- test/scripts/requirements.txt
- docs/spec/new-backend.md
- docs/content/development/architecture.md
- .claude/skills/claude-code-e2e/tasks/totalsize.prompt.txt
- .claude/skills/test-sticky-sessions.md
- .claude/skills/claude-code-e2e/config.regression.yaml.tmpl
- .claude/skills/claude-code-e2e/SKILL.md
- .claude/skills/claude-code-e2e/tasks/totalsize.md
- .claude/skills/olla-validate/areas/anthropic.md
- .claude/skills/olla-validate/areas/core-routing.md
- .claude/skills/olla-validate/areas/limits-failures.md
- .claude/skills/olla-validate/areas/observability.md
- .claude/skills/olla-validate/areas/openai-api.md
- .claude/skills/olla-validate/areas/resilience.md
- .claude/skills/olla-validate/SKILL.md


### Agent Instruction Files

- CLAUDE.md
- .claude/skills/claude-code-e2e/tasks/totalsize.prompt.txt
- .claude/skills/test-sticky-sessions.md
- .claude/skills/claude-code-e2e/config.regression.yaml.tmpl
- .claude/skills/claude-code-e2e/SKILL.md
- .claude/skills/claude-code-e2e/tasks/totalsize.md
- .claude/skills/olla-validate/areas/anthropic.md
- .claude/skills/olla-validate/areas/core-routing.md
- .claude/skills/olla-validate/areas/limits-failures.md
- .claude/skills/olla-validate/areas/observability.md
- .claude/skills/olla-validate/areas/openai-api.md
- .claude/skills/olla-validate/areas/resilience.md
- .claude/skills/olla-validate/SKILL.md


## Top Directories

| dir | count |
| --- | --- |
| internal | 389 |
| docs | 88 |
| test | 60 |
| examples | 23 |
| pkg | 15 |
| config | 14 |
| .claude | 12 |
| .github | 11 |
| .vscode | 2 |
| .coderabbit.yaml | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .golangci.yml | 1 |
| .goreleaser.yml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 414 |
| .md | 109 |
| .sh | 31 |
| .yaml | 30 |
| .yml | 12 |
| [no-ext] | 10 |
| .json | 9 |
| .py | 7 |
| .txt | 4 |
| .css | 2 |
| .mod | 1 |
| .sum | 1 |
| .tape | 1 |
| .template | 1 |
| .tmpl | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
