# genomoncology/biomcp

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/genomoncology/biomcp |
| local path | sources/genomoncology__biomcp |
| HEAD | b8710d7 |
| stars/forks | 527 / 107 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-18T00:26:54Z |
| trendScore / priorityScore | 137 / 400 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Developer tools / DX | 315 | examples/geneagent/README.md, examples/genegpt/README.md, examples/pubmed-beyond/README.md |
| MCP / agent interoperability | 139 | examples/README.md, examples/streamable-http/README.md, AGENTS.md |
| Observability / evaluation | 126 | examples/README.md, benchmarks/bioasq/ranking-calibration/README.md, benchmarks/bioasq/README.md |
| AI agent / orchestration | 103 | examples/README.md, AGENTS.md, README.md |
| Cloud native / infrastructure | 37 | benchmarks/bioasq/annotations/README.md, benchmarks/bioasq/datasets/README.md, benchmarks/bioasq/README.md |
| Data / ML platform | 18 | benchmarks/bioasq/datasets/README.md, README.md, architecture/experiments/245-biomedical-news-discovery-and-personalized-briefing/scripts/pyproject.toml |
| Database / data infrastructure | 18 | README.md, docs/concepts/what-is-biomcp.md, docs/user-guide/cli-reference.md |
| RAG / retrieval / knowledge | 14 | examples/genegpt/README.md, spec/surface/cli.md, docs/concepts/what-is-biomcp.md |
| Security / supply chain | 12 | README.md, docs/user-guide/cli-reference.md, docs/policies.md |
| Coding agent / software automation | 4 | docs/blog/skillbench-biomcp-skills.md, docs/index.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontendStack, infra, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Python, Rust |
| capabilities | LLM/app framework, Vector/search store, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1246 |
| manifests | 22 |
| docs | 236 |
| tests | 401 |
| ci/ops | 3 |
| spec artifacts | 50 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | BioMCP | BioMCP / Description / Features / Installation / Binary install / PyPI tool install / or: pip install biomcp-cli / Claude Desktop extension (.mcpb) / Install skills / MCP clients | BioMCP One binary. One grammar. Evidence from the biomedical sources you already trust. Description BioMCP cuts through the usual biomedical data maze one query reaches the sources that normally live behind different APIs, identifiers, and search habits. Researchers, clinicians, and agents use the same command grammar to search, focus, and pivot without rebuilding the workflow for each source. You get compact, evidence oriented results across live public data plus local study analytics. Features Search the literature search article fans out across PubTator3 and Europe PMC, deduplicates PMID/PMCID/DOI identifiers, and can add a Semantic Scholar leg when your filters support it. Pivot without |


## Key Files

### Manifests

- examples/geneagent/README.md
- examples/README.md
- examples/genegpt/README.md
- examples/pubmed-beyond/README.md
- examples/streamable-http/README.md
- examples/trialgpt/README.md
- benchmarks/bioasq/annotations/README.md
- benchmarks/bioasq/datasets/README.md
- benchmarks/bioasq/ranking-calibration/README.md
- benchmarks/bioasq/README.md
- AGENTS.md
- paper/README.md
- README.md
- scripts/README.md
- architecture/experiments/README.md
- Cargo.toml
- Makefile
- pyproject.toml
- architecture/experiments/24-diagnostic-entity-landscape/scripts/pyproject.toml
- architecture/experiments/244-obsidian-vault-knowledge-base-with-pdf-to-markdown/scripts/rust_probe/Cargo.toml


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- examples/geneagent/prompt.md
- examples/genegpt/prompt.md
- examples/pubmed-beyond/prompt.md
- examples/trialgpt/prompt.md
- spec/surface/cli.md
- spec/surface/mcp.md
- spec/README-timings.md
- spec/entity/article.md
- spec/entity/diagnostic.md
- spec/entity/disease.md
- spec/entity/drug.md
- spec/entity/gene.md
- spec/entity/pathway.md
- spec/entity/pgx.md
- spec/entity/phenotype.md
- spec/entity/protein.md
- spec/entity/study.md
- spec/entity/trial.md
- spec/entity/vaers.md


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| src | 614 |
| architecture | 162 |
| docs | 104 |
| tests | 70 |
| testdata | 66 |
| spec | 65 |
| skills | 42 |
| templates | 30 |
| examples | 19 |
| paper | 17 |
| scripts | 11 |
| benchmarks | 8 |
| tools | 6 |
| .github | 3 |


## Extension Distribution

| ext | count |
| --- | --- |
| .rs | 626 |
| .md | 229 |
| .py | 151 |
| .json | 106 |
| .sh | 48 |
| .j2 | 30 |
| .toml | 9 |
| .txt | 9 |
| .xml | 8 |
| [no-ext] | 8 |
| .csv | 7 |
| .yml | 4 |
| .html | 3 |
| .proto | 3 |
| .svg | 2 |
| .cff | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
