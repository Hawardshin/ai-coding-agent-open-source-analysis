# ncz-os/mnemos

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/ncz-os/mnemos |
| local path | sources/ncz-os__mnemos |
| HEAD | 547148d |
| stars/forks | 25 / 6 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T16:19:28Z |
| trendScore / priorityScore | 134 / 443 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Database / data infrastructure | 500 | docs/connectors/README.md, AGENTS.md, integrations/README.md |
| MCP / agent interoperability | 500 | docs/connectors/README.md, AGENTS.md, integrations/README.md |
| Cloud native / infrastructure | 492 | docs/connectors/README.md, AGENTS.md, README.md |
| Coding agent / software automation | 297 | docs/connectors/README.md, integrations/README.md, README.md |
| RAG / retrieval / knowledge | 270 | benchmarks/README.md, docs/connectors/README.md, integrations/claude-code/README.md |
| AI agent / orchestration | 246 | benchmarks/README.md, docs/connectors/README.md, AGENTS.md |
| Security / supply chain | 163 | docs/connectors/README.md, mnemos/tools/backup/README.md, docker-compose.yml |
| Developer tools / DX | 135 | docs/connectors/README.md, cli/mnemosctl/README.md, README.md |
| Observability / evaluation | 119 | benchmarks/README.md, docs/connectors/README.md, README.md |
| Local LLM / inference | 92 | docs/connectors/README.md, docker-compose.yml, Dockerfile |
| Data / ML platform | 33 | benchmarks/README.md, AGENTS.md, README.md |
| Frontend / app framework | 23 | docs/NATS_OPERATIONS.md, docs/PANTHEON.md, docs/PINAKES.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Python, Rust |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 969 |
| manifests | 26 |
| docs | 135 |
| tests | 245 |
| ci/ops | 16 |
| spec artifacts | 5 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | MNEMOS + GRAEAE | MNEMOS + GRAEAE / Quick Start / 1. Agent-driven install / everything image: core + graeae + pantheon + knemon + charon. SQLite by default. / Point at a real DB with -e MNEMOS_DATABASE_DSN='postgres://…' (or oracle://… thin). / Turnkey (amd64): / Or from source: / or:  MNEMOS_DATABASE_DSN='db2://user:pass@host:50000/dbname' / 2. Connect an agent via MCP / 3. Webhooks + integrations | <p align="center" <img src="docs/images/logo.png" alt="MNEMOS" width="220" / </p MNEMOS + GRAEAE MNEMOS v6.0.0 is the memory operating system for serious agentic work a packaged FastAPI runtime, EPIMONE — the four backend persistence layer SQLite + sqlite vec by default, PostgreSQL + pgvector, Oracle Database 26ai HNSW INMEMORY NEIGHBOR GRAPH, IBM Db2 12.1.5 EAP DiskANN vector , GRAEAE reasoning bus, operator audited compression stack, divergent dream state pipeline REPLAY CLUSTER CONSOLIDATE SYNTHESISE EXTRACT , GDPR right to be forgotten worker, PERSEPHONE archival subsystem, PANTHEON unified LLM facade, KRONOS recall observability, and CLI first deployment surface. MNEMOS is not just a pl |


## Key Files

### Manifests

- benchmarks/README.md
- docs/connectors/README.md
- cli/mnemosctl/README.md
- AGENTS.md
- integrations/README.md
- mnemos-rust-ext/README.md
- README.md
- deploy/pantheon/README.md
- integrations/claude-code/README.md
- integrations/hermes/README.md
- integrations/openclaw/README.md
- integrations/zeroclaw/README.md
- mnemos/tools/backup/README.md
- mnemos/tools/README.md
- cli/mnemosctl/Cargo.toml
- docker-compose.yml
- Dockerfile
- Makefile
- mnemos-rust-ext/Cargo.toml
- mnemos-rust-ext/pyproject.toml


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- requirements.txt
- docs/SPECIFICATION.md
- integrations/zeroclaw/.claude/skills/mnemos-memory/SKILL.md
- ROADMAP.md


### Agent Instruction Files

- AGENTS.md
- integrations/zeroclaw/.claude/skills/mnemos-memory/SKILL.md


## Top Directories

| dir | count |
| --- | --- |
| db | 266 |
| tests | 245 |
| mnemos | 197 |
| docs | 98 |
| scripts | 54 |
| integrations | 20 |
| deploy | 8 |
| ops | 8 |
| .github | 7 |
| mnemos-rust-ext | 6 |
| cli | 4 |
| systemd | 4 |
| docker | 3 |
| benchmarks | 2 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 483 |
| .sql | 265 |
| .md | 132 |
| .sh | 23 |
| .yml | 11 |
| .service | 8 |
| [no-ext] | 8 |
| .json | 6 |
| .example | 5 |
| .toml | 4 |
| .rs | 3 |
| .snippet | 3 |
| .timer | 3 |
| .txt | 2 |
| .yaml | 2 |
| .cfg | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
