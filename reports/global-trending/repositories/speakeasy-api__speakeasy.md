# speakeasy-api/speakeasy

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/speakeasy-api/speakeasy |
| local path | sources/speakeasy-api__speakeasy |
| HEAD | 49d1c26 |
| stars/forks | 419 / 36 |
| language | JavaScript |
| license |  |
| pushedAt | 2026-06-17T20:45:00Z |
| trendScore / priorityScore | 133 / 370 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Developer tools / DX | 500 | internal/studio/sdk/docs/sdks/health/README.md, internal/studio/sdk/docs/sdks/run/README.md, internal/studio/sdk/docs/sdks/sdk/README.md |
| Security / supply chain | 147 | internal/studio/sdk/README.md, prompts/github.go, prompts/sources.go |
| AI agent / orchestration | 78 | README.md, go.mod, cmd/agent_setup_skills.go |
| Cloud native / infrastructure | 74 | README.md, go.mod, prompts/configs.go |
| MCP / agent interoperability | 61 | prompts/configs.go, prompts/github.go, prompts/target_form_field.go |
| Coding agent / software automation | 26 | README.md, go.mod, prompts/target_form_field.go |
| Observability / evaluation | 10 | go.mod |
| Data / ML platform | 3 | prompts/terraform_releaser.yaml, .goreleaser.yaml |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, devtools, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Go |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 564 |
| manifests | 14 |
| docs | 48 |
| tests | 129 |
| ci/ops | 7 |
| spec artifacts | 20 |
| agent instruction files | 18 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | A Modern OpenAPI Native Toolchain / Features / CLI / Installation / Usage / Agent Skills / Installation / Supported Platforms / Usage | <div align="center" <a href="https //www.speakeasy.com/" target=" blank" <img width="1500" height="500" alt="Speakeasy" src="https //github.com/user attachments/assets/0e56055b 02a3 4476 9130 4be299e5a39c" / </a <br / <br / <div <a href="https //speakeasy.com/docs/create client sdks/" target=" blank" <b Docs Quickstart</b </a &nbsp;&nbsp;//&nbsp;&nbsp;<a href="https //go.speakeasy.com/slack" target=" blank" <b Join us on Slack</b </a </div <br / <br / ! LW24 participant https //img.shields.io/badge/featured LW24 8957E5.svg?style=flat square&labelColor=0D1117&logo=data image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi |


## Key Files

### Manifests

- internal/studio/sdk/docs/sdks/health/README.md
- internal/studio/sdk/docs/sdks/run/README.md
- internal/studio/sdk/docs/sdks/sdk/README.md
- internal/studio/sdk/docs/sdks/suggest/README.md
- README.md
- internal/ci/git/fixtures/README.md
- internal/studio/sdk/README.md
- Dockerfile
- go.mod
- internal/defaultcodesamples/package.json
- internal/defaultcodesamples/tsconfig.json
- Makefile
- go.sum
- internal/ci/utils/package.go


### Spec / Docs / Prompt Artifacts

- prompts/configs_test.go
- prompts/github_test.go
- prompts/sources_test.go
- prompts/configs.go
- prompts/github.go
- prompts/persistent_edits.go
- prompts/pointer.go
- prompts/sources.go
- prompts/statemappings.go
- prompts/target_form_field.go
- prompts/target_form_fields.go
- prompts/target_go.go
- prompts/targets.go
- prompts/terraform_release.yaml
- prompts/terraform_releaser.yaml
- prompts/utils.go
- .vscode/tasks.json
- integration/resources/spec.yaml
- .claude/commands/catchup.md
- .claude/commands/release.md


### Agent Instruction Files

- prompts/configs_test.go
- prompts/github_test.go
- prompts/sources_test.go
- prompts/configs.go
- prompts/github.go
- prompts/persistent_edits.go
- prompts/pointer.go
- prompts/sources.go
- prompts/statemappings.go
- prompts/target_form_field.go
- prompts/target_form_fields.go
- prompts/target_go.go
- prompts/targets.go
- prompts/terraform_release.yaml
- prompts/terraform_releaser.yaml


## Top Directories

| dir | count |
| --- | --- |
| internal | 317 |
| pkg | 100 |
| cmd | 71 |
| integration | 32 |
| prompts | 16 |
| .github | 7 |
| scripts | 3 |
| .claude | 2 |
| .vscode | 2 |
| registry | 2 |
| .gitignore | 1 |
| .golangci.yml | 1 |
| .goreleaser.pr.yaml | 1 |
| .goreleaser.yaml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 429 |
| .md | 46 |
| .yaml | 46 |
| .yml | 9 |
| .json | 8 |
| [no-ext] | 8 |
| .ts | 7 |
| .bash | 3 |
| .txt | 2 |
| .bats | 1 |
| .js | 1 |
| .mod | 1 |
| .patch | 1 |
| .sh | 1 |
| .sum | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
