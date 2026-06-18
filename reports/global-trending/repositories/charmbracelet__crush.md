# charmbracelet/crush

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/charmbracelet/crush |
| local path | sources/charmbracelet__crush |
| HEAD | 46c1799 |
| stars/forks | 25441 / 1835 |
| language | Go |
| license |  |
| pushedAt | 2026-06-17T22:22:18Z |
| trendScore / priorityScore | 163 / 443 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | docs/hooks/README.md, AGENTS.md, internal/ui/AGENTS.md |
| MCP / agent interoperability | 280 | docs/hooks/README.md, AGENTS.md, internal/ui/AGENTS.md |
| Developer tools / DX | 107 | AGENTS.md, internal/ui/AGENTS.md, README.md |
| Security / supply chain | 44 | docs/hooks/README.md, internal/ui/AGENTS.md, README.md |
| Cloud native / infrastructure | 23 | README.md, go.mod, internal/config/docker_mcp_test.go |
| Coding agent / software automation | 19 | docs/hooks/README.md, AGENTS.md, internal/ui/AGENTS.md |
| Local LLM / inference | 10 | README.md, internal/discover/litellm_test.go, internal/agent/coordinator.go |
| Observability / evaluation | 8 | go.mod, internal/agent/testdata/TestCoderAgent/glm-5.1/simple_test.yaml, internal/agent/tools/grep_test.go |
| Database / data infrastructure | 7 | AGENTS.md, README.md, go.mod |
| Data / ML platform | 3 | internal/ui/AGENTS.md, internal/server/e2e_agent_test.go |
| RAG / retrieval / knowledge | 2 | AGENTS.md, internal/ui/AGENTS.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Go |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 948 |
| manifests | 7 |
| docs | 30 |
| tests | 150 |
| ci/ops | 10 |
| spec artifacts | 4 |
| agent instruction files | 4 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Crush | Crush / Features / Installation / Homebrew / NPM / Arch Linux (btw) / Nix / FreeBSD / Winget / Scoop | Crush <p align="center" <a href="https //stuff.charm.sh/crush/charm crush.png" <img width="450" alt="Charm Crush Logo" src="https //github.com/user attachments/assets/cf8ca3ce 8b02 43f0 9d0f 5a331488da4b" / </a <br / <a href="https //github.com/charmbracelet/crush/releases" <img src="https //img.shields.io/github/release/charmbracelet/crush" alt="Latest Release" </a <a href="https //github.com/charmbracelet/crush/actions" <img src="https //github.com/charmbracelet/crush/actions/workflows/build.yml/badge.svg" alt="Build Status" </a </p <p align="center" Your new coding bestie, now available in your favourite terminal.<br / Your tools, your code, and your workflows, wired into your LLM of choi |


## Key Files

### Manifests

- docs/hooks/README.md
- AGENTS.md
- internal/cmd/stats/AGENTS.md
- internal/ui/AGENTS.md
- README.md
- go.mod
- go.sum


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- internal/cmd/stats/AGENTS.md
- internal/ui/AGENTS.md
- internal/agent/prompt/prompt.go


### Agent Instruction Files

- AGENTS.md
- internal/cmd/stats/AGENTS.md
- internal/ui/AGENTS.md
- internal/agent/prompt/prompt.go


## Top Directories

| dir | count |
| --- | --- |
| internal | 910 |
| .github | 14 |
| docs | 3 |
| .agents | 2 |
| scripts | 2 |
| .envrc | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .golangci.yml | 1 |
| .goreleaser.yml | 1 |
| AGENTS.md | 1 |
| CLA.md | 1 |
| crush.json | 1 |
| flake.nix | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 463 |
| .golden | 363 |
| .md | 29 |
| .yaml | 17 |
| .tpl | 15 |
| .yml | 14 |
| .sql | 12 |
| .after | 5 |
| .before | 5 |
| .json | 5 |
| [no-ext] | 5 |
| .sh | 3 |
| .svg | 3 |
| .css | 1 |
| .html | 1 |
| .js | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
