# rage-rb/rage

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/rage-rb/rage |
| local path | sources/rage-rb__rage |
| HEAD | df25a97 |
| stars/forks | 1388 / 42 |
| language | Ruby |
| license |  |
| pushedAt | 2026-06-17T18:29:24Z |
| trendScore / priorityScore | 133 / 337 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Security / supply chain | 150 | spec/controller/api/cookies_spec.rb, spec/integration/integration_spec.rb, spec/openapi/builder/auth_spec.rb |
| Cloud native / infrastructure | 32 | spec/deferred/deferred_spec.rb, spec/deferred/proxy_spec.rb |
| Developer tools / DX | 28 | README.md, spec/rage/cli_spec.rb, spec/rage/cli/skills_spec.rb |
| Database / data infrastructure | 27 | README.md, spec/configuration_spec.rb, spec/fiber_scheduler_spec.rb |
| Observability / evaluation | 18 | README.md, spec/fiber_scheduler_spec.rb, spec/fiber_spec.rb |
| Coding agent / software automation | 15 | spec/rage/cli/skills_spec.rb |
| AI agent / orchestration | 8 | README.md, spec/rage/cli/skills_spec.rb, spec/rage/request_spec.rb |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, database, databaseRuntime, devtools, frontendStack, infra, observability, rag, sdk-api, security, securityTooling |
| stacks | Ruby |
| capabilities | Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 345 |
| manifests | 2 |
| docs | 6 |
| tests | 186 |
| ci/ops | 5 |
| spec artifacts | 50 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Rage | Rage / Why Rage / Key Capabilities / Installation / How It Works / Unified Runtime in Action / Background job - runs in the same process, persisted to disk / Two Ways to Use Rage / Coming from Rails? / Stability | <p align="center" <img height="200" src="https //github.com/rage rb/rage/assets/2270393/9d06e0a4 5c20 49c7 b51d e16ce8f1e1b7" / </p Rage ! Gem Version https //badge.fury.io/rb/rage rb.svg https //badge.fury.io/rb/rage rb ! Tests https //github.com/rage rb/rage/actions/workflows/main.yml/badge.svg ! Ruby Requirement https //img.shields.io/badge/Ruby 3.3%2B %23f40000 Rage is an API first Ruby web framework that combines the developer experience of Rails with fiber based concurrency. You write standard synchronous Ruby code Rage handles the concurrency, running APIs, background jobs, and WebSockets in a single process with fewer moving parts. Rage uses Rails compatibility as a foundation and pr |


## Key Files

### Manifests

- lib/rage/router/README.md
- README.md


### Spec / Docs / Prompt Artifacts

- spec/integration/test_app/app/channels/rage_cable/channel.rb
- spec/integration/test_app/app/channels/rage_cable/connection.rb
- spec/rage/cli_spec.rb
- spec/rage/cli/skills_spec.rb
- spec/rage/hooks_spec.rb
- spec/rage/request_spec.rb
- spec/rage/response_spec.rb
- spec/rage/uploaded_file_spec.rb
- spec/support/contexts/mocked_rage_routes.rb
- spec/body_finalizer_middleware_spec.rb
- spec/code_loader_spec.rb
- spec/configuration_spec.rb
- spec/cors_middleware_spec.rb
- spec/env_spec.rb
- spec/errors_spec.rb
- spec/fiber_scheduler_spec.rb
- spec/fiber_spec.rb
- spec/internal_spec.rb
- spec/json_formatter_spec.rb
- spec/log_processor_spec.rb


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| spec | 186 |
| lib | 132 |
| .github | 5 |
| gemfiles | 5 |
| bin | 2 |
| .gitignore | 1 |
| .rspec | 1 |
| .rubocop.yml | 1 |
| .yardopts | 1 |
| Appraisals | 1 |
| ARCHITECTURE.md | 1 |
| CHANGELOG.md | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .rb | 291 |
| [no-ext] | 14 |
| .yml | 13 |
| .md | 6 |
| .gemfile | 5 |
| .keep | 5 |
| .txt | 5 |
| .ru | 3 |
| .erb | 2 |
| .gemspec | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
