# puppyone-ai/puppyone

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/puppyone-ai/puppyone |
| local path | sources/puppyone-ai__puppyone |
| HEAD | f07c94b |
| stars/forks | 316 / 50 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T19:03:41Z |
| trendScore / priorityScore | 141 / 456 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 371 | AGENTS.md, backend/AGENTS.md, backend/README.md |
| RAG / retrieval / knowledge | 233 | AGENTS.md, backend/README.md, backend/tests/e2e/README.md |
| AI agent / orchestration | 220 | docs/README.md, docs/architecture/archive/README.md, backend/src/platform/project/templates/builtin/get-started/content/Agent Output/README.md |
| Frontend / app framework | 208 | AGENTS.md, backend/openspec/AGENTS.md, backend/README.md |
| Database / data infrastructure | 171 | AGENTS.md, backend/AGENTS.md, backend/openspec/AGENTS.md |
| Developer tools / DX | 152 | docs/README.md, desktop/cloud-source/frontend/components/editors/README.md, frontend/components/editors/README.md |
| Cloud native / infrastructure | 110 | docs/README.md, AGENTS.md, backend/README.md |
| Security / supply chain | 90 | archived/PuppyStorage/storage/README.md, AGENTS.md, backend/AGENTS.md |
| Data / ML platform | 27 | backend/README.md, backend/tests/etl/README.md, demo/content-factory/README.md |
| Coding agent / software automation | 19 | AGENTS.md, README.md, skills/README.md |
| Observability / evaluation | 7 | AGENTS.md, archived/PuppyFlow/templates/seo-blog/package.json |
| Local LLM / inference | 5 | tools/puppy_model/README.md, archived/PuppyFlow/templates/agentic-rag/package.json, tools/puppy_model/examples/integration_examples/puppy_storage_integration.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 2901 |
| manifests | 40 |
| docs | 267 |
| tests | 290 |
| ci/ops | 17 |
| spec artifacts | 50 |
| agent instruction files | 8 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | → outputs MCP endpoint URL and API key | What is Puppyone? / Get Started / 1. Install / Deploy / 2. First Run (for both cloud and self-host) / 3. Optional: Enable More Features / → outputs MCP endpoint URL and API key / Features / Connected / Collaborative / Accessible | <div align="center" <img src="assets/puppyone.svg" alt="Puppyone Logo" width="72" height="72" / <h1 Puppyone</h1 <p <b Git native Context Drive for AI agents.</b </p <p Puppyone provides context hosting for AI agents, with Git version control and file level scoped permissions for every agent.</p <p <a href="https //www.puppyone.ai" <img src="https //img.shields.io/badge/Website puppyone.ai 39BC66?style=flat square" alt="Website" / </a <a href="https //www.puppyone.ai/doc" <img src="https //img.shields.io/badge/Docs Read D7F3FF?style=flat square&logo=readthedocs&logoColor=black" alt="Documentation" / </a <a href="https //discord.gg/zwJ9Y3Uvpd" <img src="https //img.shields.io/badge/Discord Jo |


## Key Files

### Manifests

- docs/README.md
- backend/tests/llm/README.md
- docs/architecture/archive/README.md
- archived/PuppyStorage/storage/README.md
- backend/src/platform/project/templates/builtin/get-started/content/Agent Output/README.md
- desktop/cloud-source/frontend/components/editors/README.md
- frontend/components/editors/README.md
- AGENTS.md
- backend/AGENTS.md
- backend/openspec/AGENTS.md
- backend/README.md
- backend/tests/e2e/README.md
- backend/tests/etl/README.md
- demo/content-factory/README.md
- desktop/README.md
- e2e/README.md
- README.md
- sandbox/README.md
- skills/README.md
- tests/e2e/README.md


### Spec / Docs / Prompt Artifacts

- docs/architecture/archive/README.md
- AGENTS.md
- backend/AGENTS.md
- backend/openspec/AGENTS.md
- backend/CLAUDE.md
- CLAUDE.md
- archived/PuppyStorage/requirements.txt
- backend/openspec/changes/archive/2025-11-30-add-s3-storage-module/specs/s3-storage/spec.md
- backend/openspec/changes/archive/2025-11-30-refactor-s3-boto3-async/specs/s3-storage/spec.md
- backend/openspec/changes/archive/2025-12-05-add-etl-pipeline-module/specs/llm-service/spec.md
- backend/openspec/changes/archive/2025-12-06-refactor-migrate-mcp-storage-to-supabase/specs/mcp-instance-management/spec.md
- backend/openspec/changes/archive/2025-12-29-2025-12-28-refactor-mcp-tools-and-bindings/specs/mcp-instance-management/spec.md
- backend/openspec/changes/archive/2025-12-29-2025-12-28-refactor-mcp-tools-and-bindings/specs/mcp-tool-management/spec.md
- backend/openspec/changes/archive/2025-12-29-2025-12-29-add-mcp-v2-batch-create-and-bind/specs/mcp-instance-management/spec.md
- backend/openspec/changes/archive/2025-12-29-2025-12-29-add-mcp-v2-proxy-endpoint/specs/mcp-instance-management/spec.md
- backend/openspec/changes/archive/2025-12-29-add-tool-list-by-table-id/specs/mcp-tool-management/spec.md
- backend/openspec/changes/archive/2025-12-30-add-mcp-v2-bound-tools-list-endpoint/specs/mcp-tool-management/spec.md
- backend/openspec/changes/archive/2026-01-05-extend-llm-service-embedding/specs/llm-service/spec.md
- backend/openspec/changes/archive/2026-01-12-add-search-tool-async-indexing/specs/mcp-tool-management/spec.md
- backend/openspec/changes/archive/2026-01-12-add-search-tool-hybrid-retrieval/specs/context-search/spec.md


### Agent Instruction Files

- AGENTS.md
- backend/AGENTS.md
- backend/openspec/AGENTS.md
- backend/CLAUDE.md
- CLAUDE.md
- backend/.claude/commands/openspec/apply.md
- backend/.claude/commands/openspec/archive.md
- backend/.claude/commands/openspec/proposal.md


## Top Directories

| dir | count |
| --- | --- |
| backend | 943 |
| archived | 665 |
| desktop | 510 |
| frontend | 463 |
| supabase | 75 |
| cli | 59 |
| docs | 43 |
| tools | 30 |
| demo | 22 |
| e2e | 14 |
| packages | 14 |
| .github | 13 |
| sandbox | 12 |
| scripts | 10 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 1011 |
| .tsx | 692 |
| .ts | 326 |
| .md | 266 |
| .json | 164 |
| .svg | 122 |
| .sql | 73 |
| .js | 52 |
| .txt | 45 |
| [no-ext] | 25 |
| .mjs | 19 |
| .yml | 14 |
| .toml | 12 |
| .rs | 11 |
| .sh | 11 |
| .css | 9 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
