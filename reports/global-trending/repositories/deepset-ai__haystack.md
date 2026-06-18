# deepset-ai/haystack

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/deepset-ai/haystack |
| local path | sources/deepset-ai__haystack |
| HEAD | acbf725 |
| stars/forks | 25594 / 2863 |
| language | MDX |
| license |  |
| pushedAt | 2026-06-17T16:56:14Z |
| trendScore / priorityScore | 249 / 608 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | AGENTS.md, README.md, CLAUDE.md |
| Data / ML platform | 500 | docs-website/README.md, README.md, test/core/pipeline/features/README.md |
| RAG / retrieval / knowledge | 500 | docker/README.md, README.md, pyproject.toml |
| Observability / evaluation | 192 | README.md, pyproject.toml, docs-website/docs/optimization/evaluation.mdx |
| Local LLM / inference | 130 | docs-website/docs/optimization/evaluation/model-based-evaluation.mdx, docs-website/docs/pipeline-components/embedders/vllmdocumentembedder.mdx, docs-website/docs/pipeline-components/embedders/vllmtextembedder.mdx |
| Cloud native / infrastructure | 98 | docker/README.md, README.md, pyproject.toml |
| MCP / agent interoperability | 97 | README.md, CLAUDE.md, docs-website/docs/concepts/agents.mdx |
| Security / supply chain | 79 | README.md, pyproject.toml, docs-website/docs/concepts/agents/multi-agent-systems.mdx |
| Database / data infrastructure | 77 | docs-website/docs/concepts/agents.mdx, docs-website/docs/document-stores/inmemorydocumentstore.mdx, docs-website/docs/document-stores/pgvectordocumentstore.mdx |
| Coding agent / software automation | 22 | docs-website/docs/concepts/agents.mdx, docs-website/docs/overview/docs-mcp-server.mdx, docs-website/docs/pipeline-components/agents-1/agent.mdx |
| Developer tools / DX | 17 | docs-website/README.md, pyproject.toml, docs-website/docs/development/deployment/kubernetes.mdx |
| Frontend / app framework | 8 | docs-website/README.md, docs-website/package.json |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 8000 (capped) |
| manifests | 11 |
| docs | 6145 |
| tests | 316 |
| ci/ops | 44 |
| spec artifacts | 17 |
| agent instruction files | 3 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Table of Contents / Installation / Documentation / Features / Haystack Enterprise: Support & Platform / Telemetry / 🖖 Community / Contributing to Haystack / Organizations using Haystack | <div align="center" <a href="https //haystack.deepset.ai/" <img src="https //raw.githubusercontent.com/deepset ai/haystack/main/images/banner.png" alt="Blue banner with the Haystack logo and the text ‘haystack by deepset – The Open Source AI Framework for Production Ready RAG & Agents’ surrounded by abstract icons representing search, documents, agents, pipelines, and cloud systems." </a CI/CD ! Tests https //github.com/deepset ai/haystack/actions/workflows/tests.yml/badge.svg https //github.com/deepset ai/haystack/actions/workflows/tests.yml ! types Mypy https //img.shields.io/badge/types Mypy blue.svg https //github.com/python/mypy ! Coverage badge https //raw.githubusercontent.com/deepset |


## Key Files

### Manifests

- examples/README.md
- AGENTS.md
- docker/README.md
- docs-website/README.md
- pydoc/README.md
- README.md
- test/core/pipeline/features/README.md
- CLAUDE.md
- docs-website/package.json
- pyproject.toml
- docs-website/api/tsconfig.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- docs-website/docs/concepts/agents.mdx
- .github/workflows/claude.yml
- docs-website/versioned_docs/version-2.18/concepts/agents.mdx
- docs-website/versioned_docs/version-2.19/concepts/agents.mdx
- docs-website/versioned_docs/version-2.20/concepts/agents.mdx
- docs-website/versioned_docs/version-2.21/concepts/agents.mdx
- docs-website/versioned_docs/version-2.22/concepts/agents.mdx
- docs-website/versioned_docs/version-2.23/concepts/agents.mdx
- docs-website/versioned_docs/version-2.24/concepts/agents.mdx
- docs-website/versioned_docs/version-2.25/concepts/agents.mdx
- docs-website/versioned_docs/version-2.26/concepts/agents.mdx
- docs-website/versioned_docs/version-2.27/concepts/agents.mdx
- docs-website/versioned_docs/version-2.28/concepts/agents.mdx
- docs-website/versioned_docs/version-2.29/concepts/agents.mdx
- docs-website/versioned_docs/version-2.30/concepts/agents.mdx


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- .github/workflows/claude.yml


## Top Directories

| dir | count |
| --- | --- |
| docs-website | 6235 |
| releasenotes | 1062 |
| test | 301 |
| haystack | 288 |
| .github | 46 |
| pydoc | 33 |
| e2e | 15 |
| docker | 3 |
| scripts | 2 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |
| AGENTS.md | 1 |
| CITATION.cff | 1 |
| CLAUDE.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .mdx | 4499 |
| .md | 1646 |
| .yaml | 1064 |
| .py | 567 |
| .yml | 65 |
| .json | 39 |
| .svg | 34 |
| .js | 14 |
| .txt | 13 |
| [no-ext] | 7 |
| .docx | 6 |
| .tsx | 6 |
| .css | 5 |
| .sh | 4 |
| .xlsx | 4 |
| .csv | 3 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
