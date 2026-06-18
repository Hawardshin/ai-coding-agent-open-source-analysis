# perplexityai/bumblebee

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/perplexityai/bumblebee |
| local path | sources/perplexityai__bumblebee |
| HEAD | bf685dd |
| stars/forks | 4485 / 408 |
| language | Go |
| license |  |
| pushedAt | 2026-06-17T16:01:59Z |
| trendScore / priorityScore | 177 / 430 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Security / supply chain | 459 | README.md, threat_intel/README.md, docs/deployment-macos.md |
| MCP / agent interoperability | 310 | README.md, docs/deployment-macos.md, docs/inventory-sources.md |
| Developer tools / DX | 146 | README.md, threat_intel/README.md, docs/deployment-macos.md |
| Cloud native / infrastructure | 97 | docs/deployment-macos.md, docs/inventory-sources.md, docs/state-model.md |
| Frontend / app framework | 89 | docs/inventory-sources.md, internal/ecosystem/npm/npm_test.go, internal/ecosystem/skills/skills_test.go |
| AI agent / orchestration | 67 | README.md, docs/inventory-sources.md, docs/transport.md |
| Coding agent / software automation | 63 | README.md, docs/deployment-macos.md, docs/inventory-sources.md |
| Data / ML platform | 9 | docs/deployment-macos.md, docs/inventory-sources.md, docs/transport.md |
| Database / data infrastructure | 9 | docs/inventory-sources.md, docs/state-model.md, threat_intel/mini-shai-hulud.json |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, mcp, security, securityTooling, vectorSearch |
| stacks | Go |
| capabilities | Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 94 |
| manifests | 3 |
| docs | 13 |
| tests | 33 |
| ci/ops | 2 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | bumblebee | bumblebee / Scope / Coverage / Install / Install the latest tagged release into $GOBIN. / Or pin a specific tag. / Self-test / selftest OK (2 findings in 1ms) / Profiles / Quick start | bumblebee Bumblebee is a read only inventory collector for package, extension, and developer tool metadata on macOS and Linux developer endpoints. It answers a narrow supply chain response question when an advisory names a package, extension, or version, which developer machines show a match in their on disk metadata right now? SBOMs help answer what shipped, and EDR helps answer what ran or touched the network, but supply chain response often needs a different view messy local state across lockfiles, package manager metadata, extension manifests, and supported developer tool configs. Bumblebee turns that scattered on disk state into structured NDJSON component records and, when given an exp |


## Key Files

### Manifests

- README.md
- threat_intel/README.md
- go.mod


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| internal | 48 |
| cmd | 14 |
| threat_intel | 11 |
| docs | 9 |
| .github | 2 |
| tools | 2 |
| .gitignore | 1 |
| .goreleaser.yaml | 1 |
| CONTRIBUTING.md | 1 |
| go.mod | 1 |
| LICENSE | 1 |
| README.md | 1 |
| SECURITY.md | 1 |
| VERSION | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 57 |
| .json | 21 |
| .md | 8 |
| [no-ext] | 4 |
| .yml | 2 |
| .mod | 1 |
| .yaml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
