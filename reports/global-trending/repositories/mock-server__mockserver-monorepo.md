# mock-server/mockserver-monorepo

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/mock-server/mockserver-monorepo |
| local path | sources/mock-server__mockserver-monorepo |
| HEAD | c6d4c9a |
| stars/forks | 4893 / 1110 |
| language | Java |
| license |  |
| pushedAt | 2026-06-17T23:07:01Z |
| trendScore / priorityScore | 160 / 451 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 500 | examples/README.md, docs/README.md, examples/bruno/README.md |
| Developer tools / DX | 106 | docs/README.md, examples/docker-compose/mock-from-openapi/README.md, examples/docker-compose/README.md |
| AI agent / orchestration | 99 | examples/chaos/llm_midstream_truncation/README.md, docs/README.md, .opencode/evals/README.md |
| Security / supply chain | 46 | docs/README.md, terraform/buildkite-agents/README.md, AGENTS.md |
| Observability / evaluation | 45 | docs/README.md, .opencode/evals/README.md, mockserver/mockserver-benchmark/README.md |
| Coding agent / software automation | 42 | docs/README.md, .opencode/evals/README.md, AGENTS.md |
| MCP / agent interoperability | 39 | docs/README.md, mockserver-client-node/README.md, mockserver-client-python/README.md |
| Data / ML platform | 28 | docs/README.md, mockserver-client-go/README.md, terraform/buildkite-agents/README.md |
| Local LLM / inference | 6 | docs/README.md, mockserver/mockserver-core/src/test/resources/llm/fixtures/README.md, mockserver-ui/README.md |
| Frontend / app framework | 5 | docs/README.md, mockserver-ui/README.md, README.md |
| RAG / retrieval / knowledge | 4 | examples/java/README.md, examples/python/retrieve_recorded_requests/README.md, mockserver-client-go/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go, Java/Kotlin, .NET |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 4228 |
| manifests | 40 |
| docs | 327 |
| tests | 1341 |
| ci/ops | 197 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | 1. Start MockServer | Main Features / Getting started in 60 seconds / 1. Start MockServer / 2. Mock an endpoint: GET /hello -> 200 "Hello World" / (MockServer exposes a REST control plane on the same port) / 3. Call your mock / -> Hello World / Documentation / Developer Documentation / AI Integration | MockServer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ! Build status https //badge.buildkite.com/3b6803f4fe98cb5ed7bf18292a1434f800b53d8fecb92811d8.svg?branch=master&style=square&theme=slack https //buildkite.com/mockserver/mockserver ! GitHub license https //img.shields.io/github/license/mock server/mockserver monorepo.svg https //github.com/mock server/mockserver monorepo/blob/master/LICENSE.md ! GitHub stars https //img.shields.io/github/stars/mock server/mockserver monorepo.svg https //github.com/mock server/mockserver monorepo/stargazers ! Artifact Hub https //img.shields.io/endpoint?url=https //artifacthub.io/badge/repository/mockserver https //artifacthub.io/packages |


## Key Files

### Manifests

- examples/chaos/llm_midstream_truncation/README.md
- mockserver-client-node/examples/README.md
- examples/README.md
- docs/README.md
- examples/bruno/README.md
- examples/chaos/connection_drop_seeded/README.md
- examples/chaos/gradual_degradation_ramp/README.md
- examples/chaos/grpc_status_chaos/README.md
- examples/chaos/http_error_with_retry_after/README.md
- examples/chaos/http_latency_gaussian/README.md
- examples/chaos/named_quota_rate_limit/README.md
- examples/chaos/outage_window_controllable_clock/README.md
- examples/chaos/README.md
- examples/chaos/service_scoped_profile_with_live_patch/README.md
- examples/chaos/tcp_bandwidth_throttle/README.md
- examples/chaos/tcp_reset_peer/README.md
- examples/curl/README.md
- examples/docker-compose/chaos-proxy/README.md
- examples/docker-compose/mock-from-openapi/README.md
- examples/docker-compose/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- mockserver-client-ruby/spec/integration_spec.rb
- mockserver-client-ruby/spec/mockserver/binary_launcher_spec.rb
- mockserver-client-ruby/spec/mockserver/breakpoint_spec.rb
- mockserver-client-ruby/spec/mockserver/client_spec.rb
- mockserver-client-ruby/spec/mockserver/errors_spec.rb
- mockserver-client-ruby/spec/mockserver/forward_chain_expectation_spec.rb
- mockserver-client-ruby/spec/mockserver/models_spec.rb
- mockserver-client-ruby/spec/mockserver/websocket_client_spec.rb
- mockserver-client-ruby/spec/spec_helper.rb
- docs/architecture.md
- .claude/agents/test-runner.md
- .claude/agents/code-reviewer.md
- .claude/agents/council-seat.md
- .claude/agents/debugger.md
- .claude/agents/docs-writer.md
- .claude/agents/implementer.md
- .claude/agents/pipeline-investigator.md
- .claude/agents/review-cheap.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- .claude/agents/test-runner.md
- .claude/agents/code-reviewer.md
- .claude/agents/council-seat.md
- .claude/agents/debugger.md
- .claude/agents/docs-writer.md
- .claude/agents/implementer.md
- .claude/agents/pipeline-investigator.md
- .claude/agents/review-cheap.md
- .claude/agents/review-final.md
- .claude/agents/security-auditor.md
- .claude/agents/simplifier.md
- .claude/agents/taskify-agent.md
- .claude/commands/agent-status.md


## Top Directories

| dir | count |
| --- | --- |
| mockserver | 2242 |
| examples | 520 |
| mockserver-ui | 250 |
| jekyll-www.mock-server.com | 156 |
| .buildkite | 83 |
| .opencode | 79 |
| scripts | 79 |
| mockserver-client-node | 70 |
| docs | 66 |
| mockserver-client-dotnet | 65 |
| mockserver-node | 60 |
| terraform | 58 |
| helm | 56 |
| container_integration_tests | 53 |


## Extension Distribution

| ext | count |
| --- | --- |
| .java | 1982 |
| .md | 326 |
| .sh | 309 |
| .json | 270 |
| .ts | 149 |
| .html | 123 |
| .tsx | 107 |
| .js | 96 |
| .xml | 88 |
| .bru | 84 |
| .yml | 73 |
| [no-ext] | 73 |
| .cs | 61 |
| .php | 44 |
| .tf | 43 |
| .yaml | 43 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
