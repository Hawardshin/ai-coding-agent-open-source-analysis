# containers/kubernetes-mcp-server

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/containers/kubernetes-mcp-server |
| local path | sources/containers__kubernetes-mcp-server |
| HEAD | 1d3eb28 |
| stars/forks | 1699 / 365 |
| language | Go |
| license |  |
| pushedAt | 2026-06-17T08:32:24Z |
| trendScore / priorityScore | 149 / 452 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 500 | docs/README.md, evals/core-eval-testing/README.md, evals/README.md |
| MCP / agent interoperability | 500 | docs/README.md, evals/core-eval-testing/README.md, evals/README.md |
| Security / supply chain | 334 | docs/README.md, charts/kubernetes-mcp-server/README.md, evals/tasks/kubevirt/helpers/README.md |
| Observability / evaluation | 255 | docs/README.md, evals/core-eval-testing/README.md, evals/README.md |
| AI agent / orchestration | 157 | evals/core-eval-testing/README.md, evals/README.md, evals/tasks/kubevirt/README.md |
| Developer tools / DX | 94 | docs/README.md, AGENTS.md, README.md |
| Coding agent / software automation | 39 | docs/README.md, evals/README.md, AGENTS.md |
| Data / ML platform | 37 | evals/tasks/kubevirt/windows-golden-image-success/README.md, evals/tasks/tekton/README.md, README.md |
| Database / data infrastructure | 5 | docs/logging.md |
| RAG / retrieval / knowledge | 1 | pkg/kubevirt/guestagent_test.go |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python, Go |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 611 |
| manifests | 19 |
| docs | 27 |
| tests | 131 |
| ci/ops | 104 |
| spec artifacts | 44 |
| agent instruction files | 11 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Kubernetes MCP Server | Kubernetes MCP Server / ✨ Features <a id="features"></a> / 🚀 Getting Started <a id="getting-started"></a> / Requirements / Claude Desktop / VS Code / VS Code Insiders / For VS Code / For VS Code Insiders / Cursor / Goose CLI | Kubernetes MCP Server ! GitHub License https //img.shields.io/github/license/containers/kubernetes mcp server https //github.com/containers/kubernetes mcp server/blob/main/LICENSE ! npm https //img.shields.io/npm/v/kubernetes mcp server https //www.npmjs.com/package/kubernetes mcp server ! PyPI Version https //img.shields.io/pypi/v/kubernetes mcp server https //pypi.org/project/kubernetes mcp server/ ! GitHub release latest SemVer https //img.shields.io/github/v/release/containers/kubernetes mcp server?sort=semver https //github.com/containers/kubernetes mcp server/releases/latest ! Build https //github.com/containers/kubernetes mcp server/actions/workflows/build.yaml/badge.svg https //githu |


## Key Files

### Manifests

- docs/README.md
- evals/core-eval-testing/README.md
- evals/README.md
- charts/kubernetes-mcp-server/README.md
- evals/tasks/kiali/README.md
- evals/tasks/kubevirt/helpers/README.md
- evals/tasks/kubevirt/README.md
- evals/tasks/kubevirt/windows-golden-image-success/README.md
- evals/tasks/README.md
- evals/tasks/tekton/README.md
- AGENTS.md
- pkg/kiali/tests/README.md
- README.md
- evals/tasks/kiali/Makefile
- Dockerfile
- go.mod
- Makefile
- python/pyproject.toml
- go.sum


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- pkg/prompts/prompts_merge_test.go
- pkg/prompts/prompts_serialization_test.go
- pkg/prompts/prompts_test.go
- pkg/prompts/prompts.go
- pkg/toolsets/kiali/prompts/istio_config_review.go
- pkg/toolsets/kiali/prompts/list_resources.go
- pkg/toolsets/kiali/prompts/mesh_health_check.go
- pkg/toolsets/kiali/prompts/service_troubleshoot.go
- pkg/toolsets/kiali/prompts/trace_analysis.go
- pkg/toolsets/kiali/prompts/traffic_topology.go
- docs/specs/structured-output.md
- docs/specs/validation.md
- evals/claude-code/eval.yaml
- evals/openai-agent/eval.yaml
- evals/tasks/kubevirt/claude-code/eval.yaml
- evals/tasks/kubevirt/clone-vm/task.yaml
- evals/tasks/kubevirt/create-vm-basic/task.yaml
- evals/tasks/kubevirt/create-vm-ubuntu/task.yaml
- evals/tasks/kubevirt/create-vm-with-instancetype/task.yaml


### Agent Instruction Files

- AGENTS.md
- pkg/prompts/prompts_merge_test.go
- pkg/prompts/prompts_serialization_test.go
- pkg/prompts/prompts_test.go
- pkg/prompts/prompts.go
- pkg/toolsets/kiali/prompts/istio_config_review.go
- pkg/toolsets/kiali/prompts/list_resources.go
- pkg/toolsets/kiali/prompts/mesh_health_check.go
- pkg/toolsets/kiali/prompts/service_troubleshoot.go
- pkg/toolsets/kiali/prompts/trace_analysis.go
- pkg/toolsets/kiali/prompts/traffic_topology.go


## Top Directories

| dir | count |
| --- | --- |
| pkg | 286 |
| evals | 228 |
| dev | 21 |
| charts | 20 |
| .github | 13 |
| docs | 13 |
| internal | 8 |
| python | 4 |
| cmd | 2 |
| .dockerignore | 1 |
| .gitignore | 1 |
| .mcpbignore | 1 |
| AGENTS.md | 1 |
| CONTRIBUTING.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 278 |
| .yaml | 161 |
| .sh | 93 |
| .json | 28 |
| .md | 27 |
| [no-ext] | 8 |
| .py | 4 |
| .toml | 4 |
| .yml | 2 |
| .gotmpl | 1 |
| .js | 1 |
| .mod | 1 |
| .sum | 1 |
| .tmpl | 1 |
| .tpl | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
