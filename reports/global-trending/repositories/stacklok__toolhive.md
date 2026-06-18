# stacklok/toolhive

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/stacklok/toolhive |
| local path | sources/stacklok__toolhive |
| HEAD | bcc9081 |
| stars/forks | 1889 / 229 |
| language | Go |
| license |  |
| pushedAt | 2026-06-17T22:19:28Z |
| trendScore / priorityScore | 184 / 512 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 500 | examples/operator/embedding-servers/README.md, docs/README.md, examples/otel/README.md |
| MCP / agent interoperability | 500 | examples/otel/README.md, test/e2e/thv-operator/virtualmcp/README.md, docs/arch/README.md |
| Observability / evaluation | 438 | examples/operator/embedding-servers/README.md, docs/README.md, examples/otel/README.md |
| Security / supply chain | 394 | examples/operator/embedding-servers/README.md, docs/README.md, docs/arch/README.md |
| Database / data infrastructure | 372 | docs/arch/README.md, cmd/vmcp/README.md, README.md |
| Developer tools / DX | 305 | docs/README.md, test/e2e/thv-operator/virtualmcp/README.md, docs/arch/README.md |
| RAG / retrieval / knowledge | 84 | examples/operator/embedding-servers/README.md, docs/arch/README.md, docs/operator/upgrade-guide/README.md |
| Coding agent / software automation | 45 | docs/README.md, docs/proposals/README.md, README.md |
| AI agent / orchestration | 17 | examples/operator/embedding-servers/README.md, docs/arch/README.md, README.md |
| Data / ML platform | 2 | docs/arch/10-virtual-mcp-architecture.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Python, Go |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 2291 |
| manifests | 20 |
| docs | 249 |
| tests | 1006 |
| ci/ops | 71 |
| spec artifacts | 40 |
| agent instruction files | 39 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | The open source MCP platform trusted by developers and enterprises | The open source MCP platform trusted by developers and enterprises / Run any MCP server securely, instantly, anywhere. / Why ToolHive? / Quick links / Core capabilities / 🔌 Gateway / 📦 [Registry Server](https://github.com/stacklok/toolhive-registry-server) / ⚙️ Runtime / 💻 Portal / How it works together | <picture <source media=" prefers color scheme dark " srcset="docs/images/toolhive byline white.svg" <img src="docs/images/toolhive byline black.svg" alt="ToolHive logo" width="500"/ </picture <br The open source MCP platform trusted by developers and enterprises ! Release release img release ! Build status ci img ci ! Coverage Status coveralls img coveralls ! License Apache 2.0 license img license ! Star on GitHub stars img stars ! Discord discord img discord Run any MCP server securely, instantly, anywhere. ToolHive runs every MCP server in an isolated container, enforces identity and access policy per request when configured with an authentication source, and gives platform teams the obser |


## Key Files

### Manifests

- examples/operator/embedding-servers/README.md
- docs/README.md
- examples/otel/README.md
- test/e2e/thv-operator/virtualmcp/README.md
- docs/arch/README.md
- docs/operator/upgrade-guide/README.md
- docs/proposals/README.md
- docs/server/README.md
- cmd/vmcp/README.md
- README.md
- test/e2e/README.md
- cmd/thv-operator/README.md
- deploy/charts/operator-crds/README.md
- deploy/charts/operator/README.md
- deploy/keycloak/README.md
- CLAUDE.md
- go.mod
- containers/egress-proxy/Dockerfile
- go.sum
- pkg/container/templates/go.tmpl


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- .claude/agents/unit-test-writer.md
- .github/workflows/claude.yml
- .claude/agents/bug-triage.md
- .claude/agents/code-reviewer.md
- .claude/agents/documentation-writer.md
- .claude/agents/golang-code-writer.md
- .claude/agents/kubernetes-expert.md
- .claude/agents/mcp-protocol-expert.md
- .claude/agents/oauth-expert.md
- .claude/agents/security-advisor.md
- .claude/agents/site-reliability-engineer.md
- .claude/agents/tech-lead-orchestrator.md
- .claude/agents/toolhive-expert.md
- .claude/rules/cli-commands.md
- .claude/rules/security.md
- .claude/rules/vmcp-anti-patterns.md
- .claude/skills/deploying-vmcp-locally/SKILL.md
- .claude/skills/vmcp-review/SKILL.md
- .claude/rules/testing.md


### Agent Instruction Files

- CLAUDE.md
- .claude/agents/unit-test-writer.md
- .github/workflows/claude.yml
- .claude/agents/bug-triage.md
- .claude/agents/code-reviewer.md
- .claude/agents/documentation-writer.md
- .claude/agents/golang-code-writer.md
- .claude/agents/kubernetes-expert.md
- .claude/agents/mcp-protocol-expert.md
- .claude/agents/oauth-expert.md
- .claude/agents/security-advisor.md
- .claude/agents/site-reliability-engineer.md
- .claude/agents/tech-lead-orchestrator.md
- .claude/agents/toolhive-expert.md
- .claude/rules/cli-commands.md


## Top Directories

| dir | count |
| --- | --- |
| pkg | 1231 |
| cmd | 361 |
| test | 270 |
| docs | 186 |
| deploy | 72 |
| examples | 66 |
| .claude | 37 |
| .github | 37 |
| skills | 3 |
| .chainsaw.yaml | 1 |
| .codespellrc | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .golangci.yml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 1702 |
| .yaml | 273 |
| .md | 228 |
| .yml | 33 |
| .json | 13 |
| [no-ext] | 10 |
| .svg | 9 |
| .tpl | 5 |
| .sh | 4 |
| .gotmpl | 3 |
| .tmpl | 3 |
| .sql | 2 |
| .txt | 2 |
| .bat | 1 |
| .mod | 1 |
| .py | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
