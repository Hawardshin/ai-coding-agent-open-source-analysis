# Wide-Moat/open-computer-use

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Wide-Moat/open-computer-use |
| local path | sources/Wide-Moat__open-computer-use |
| HEAD | d7c182f |
| stars/forks | 101 / 21 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T22:14:08Z |
| trendScore / priorityScore | 140 / 459 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 500 | examples/helm/README.md, examples/helm/with-open-webui/README.md, docs/architecture/adr/README.md |
| MCP / agent interoperability | 500 | examples/helm/README.md, examples/helm/with-open-webui/README.md, docs/future-architecture/README.md |
| Developer tools / DX | 364 | computer-use-server/cli-defaults/README.md, tests/README.md, computer-use-server/README.md |
| Coding agent / software automation | 362 | docs/future-architecture/README.md, computer-use-server/cli-defaults/README.md, tests/README.md |
| AI agent / orchestration | 325 | docs/architecture/adr/README.md, docs/architecture/README.md, docs/future-architecture/README.md |
| Security / supply chain | 247 | examples/helm/with-open-webui/README.md, docs/architecture/adr/README.md, docs/architecture/README.md |
| Frontend / app framework | 116 | README.md, skills/README.md, openwebui/functions/README.md |
| Observability / evaluation | 100 | docs/future-architecture/README.md, CLAUDE.md, skills/examples/mcp-builder/reference/evaluation.md |
| Database / data infrastructure | 43 | examples/helm/README.md, examples/helm/with-open-webui/README.md, README.md |
| RAG / retrieval / knowledge | 34 | openwebui/README.md, README.md, openwebui/patches/README.md |
| Data / ML platform | 26 | docs/architecture/adr/README.md, openwebui/README.md, openwebui/patches/README.md |
| Local LLM / inference | 2 | docs/INSTALL.md, examples/helm/with-open-webui/values-open-webui.yaml |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 734 |
| manifests | 32 |
| docs | 230 |
| tests | 71 |
| ci/ops | 46 |
| spec artifacts | 50 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Open Computer Use | Open Computer Use / What is this? / Key differentiators / Live browser streaming / File preview with skills / Frontend design — landing page rendered live in the browser tab / Presentations — custom design system, not the default white template / Build your own skills — package recurring work into reusable functions / Data → chart with analysis / Claude Code — interactive terminal in the cloud | Open Computer Use ! Build https //github.com/Wide Moat/open computer use/actions/workflows/build.yml/badge.svg https //github.com/Wide Moat/open computer use/actions/workflows/build.yml ! CodeQL https //github.com/Wide Moat/open computer use/actions/workflows/codeql.yml/badge.svg https //github.com/Wide Moat/open computer use/actions/workflows/codeql.yml ! Release https //img.shields.io/github/v/release/Wide Moat/open computer use https //github.com/Wide Moat/open computer use/releases ! License https //img.shields.io/badge/license FSL 1.1 Apache 2.0 blue LICENSE ! Stars https //img.shields.io/github/stars/Wide Moat/open computer use https //github.com/Wide Moat/open computer use/stargazers |


## Key Files

### Manifests

- examples/helm/README.md
- examples/helm/with-open-webui/README.md
- docs/architecture/adr/README.md
- docs/architecture/README.md
- docs/future-architecture/README.md
- computer-use-server/cli-defaults/README.md
- tests/README.md
- computer-use-server/README.md
- contracts/README.md
- openwebui/README.md
- README.md
- settings-wrapper/README.md
- skills/README.md
- tests/integration/README.md
- helm/computer-use-server/README.md
- openwebui/functions/README.md
- openwebui/patches/README.md
- CLAUDE.md
- skills/examples/mcp-builder/scripts/requirements.txt
- skills/examples/slack-gif-creator/requirements.txt


### Spec / Docs / Prompt Artifacts

- docs/architecture/adr/README.md
- docs/architecture/README.md
- CLAUDE.md
- skills/examples/mcp-builder/scripts/requirements.txt
- skills/examples/slack-gif-creator/requirements.txt
- computer-use-server/requirements.txt
- requirements.txt
- settings-wrapper/requirements.txt
- docs/architecture/adr/0010-storage-backend-pluggable-adapter.md
- docs/architecture/adr/0011-storage-egress-lane.md
- docs/architecture/components/01-mcp-gateway.md
- docs/architecture/components/04-storage-broker.md
- docs/architecture/02-trust-boundaries.md
- docs/architecture/03-c4-context.md
- docs/architecture/04-bounded-contexts.md
- docs/architecture/05-c4-container.md
- docs/architecture/06-threat-model.md
- docs/architecture/08-contracts.md
- docs/architecture/adr/0000-template.md
- docs/architecture/adr/0001-layer-0-gate-legacy-exclusion.md


### Agent Instruction Files

- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| skills | 325 |
| docs | 124 |
| computer-use-server | 92 |
| tests | 68 |
| .github | 25 |
| helm | 21 |
| openwebui | 14 |
| scripts | 10 |
| contracts | 7 |
| examples | 5 |
| settings-wrapper | 5 |
| .vale | 4 |
| cron | 3 |
| data | 2 |


## Extension Distribution

| ext | count |
| --- | --- |
| .md | 215 |
| .py | 129 |
| .xsd | 78 |
| .ttf | 75 |
| .txt | 44 |
| .sh | 29 |
| .yml | 24 |
| [no-ext] | 23 |
| .yaml | 22 |
| .woff | 20 |
| .woff2 | 20 |
| .json | 16 |
| .js | 7 |
| .svg | 7 |
| .xml | 6 |
| .mmd | 5 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
