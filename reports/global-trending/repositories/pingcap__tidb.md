# pingcap/tidb

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/pingcap/tidb |
| local path | sources/pingcap__tidb |
| HEAD | ca9ab98 |
| stars/forks | 40171 / 6195 |
| language | Go |
| license |  |
| pushedAt | 2026-06-17T15:34:25Z |
| trendScore / priorityScore | 180 / 466 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | docs/agents/ddl/README.md, docs/agents/dxf/README.md, docs/agents/import-into/README.md |
| Database / data infrastructure | 162 | docs/agents/ddl/README.md, docs/agents/import-into/README.md, tests/llmtest/README.md |
| Cloud native / infrastructure | 160 | docs/agents/dxf/README.md, br/README.md, br/tests/README.md |
| Observability / evaluation | 123 | AGENTS.md, dumpling/tests/AGENTS.md, tests/realtikvtest/scripts/next-gen/README.md |
| Developer tools / DX | 74 | br/tests/README.md, dumpling/README.md, lightning/tests/README.md |
| MCP / agent interoperability | 40 | docs/agents/README.md, .agents/skills/README.md, AGENTS.md |
| Security / supply chain | 40 | README.md, tests/realtikvtest/scripts/next-gen/README.md, br/docker-compose.yaml |
| Coding agent / software automation | 14 | .github/skills/README.md, docs/agents/ddl/05-file-map.md, docs/design/2022-07-03-block-storage-snapshot-based-backup-restore.md |
| Data / ML platform | 6 | docs/agents/dxf/README.md, docs/agents/ddl/06-add-index.md, docs/agents/ddl/07-modify-column.md |
| RAG / retrieval / knowledge | 4 | docs/agents/import-into/README.md, README.md, .agents/skills/tidb-test-guidelines/references/executor-case-map.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Python, Go |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 7254 |
| manifests | 40 |
| docs | 250 |
| tests | 3738 |
| ci/ops | 11 |
| spec artifacts | 5 |
| agent instruction files | 3 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | TiDB | TiDB / Key Features / Quick Start / Need Help? / Architecture / Contributing / License / See Also / Acknowledgments | <div align="center" <a href='https //www.pingcap.com/?utm source=github&utm medium=tidb' <img src="docs/tidb logo.png" alt="TiDB, a distributed SQL database" height=100 </img </a ! License https //img.shields.io/badge/License Apache 2.0 blue.svg https //github.com/pingcap/tidb/blob/master/LICENSE ! Language https //img.shields.io/badge/Language Go blue.svg https //golang.org/ ! Build Status https //prow.tidb.net/badge.svg?jobs=merged tidb build https //prow.tidb.net/?repo=pingcap%2Ftidb&type=postsubmit&job=merged tidb build ! Go Report Card https //goreportcard.com/badge/github.com/pingcap/tidb https //goreportcard.com/report/github.com/pingcap/tidb ! GitHub release https //img.shields.io/gi |


## Key Files

### Manifests

- docs/agents/ddl/README.md
- docs/agents/dxf/README.md
- docs/agents/import-into/README.md
- docs/agents/planner/README.md
- docs/agents/README.md
- tests/llmtest/README.md
- docs/design/README.md
- .agents/skills/README.md
- AGENTS.md
- dumpling/tests/AGENTS.md
- br/README.md
- br/tests/README.md
- dumpling/README.md
- lightning/README.md
- lightning/tests/README.md
- pkg/executor/test/unstabletest/README.md
- pkg/expression/integration_test/README.md
- README.md
- tests/clusterintegrationtest/README.md
- tests/globalkilltest/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- dumpling/tests/AGENTS.md
- CLAUDE.md
- tests/clusterintegrationtest/requirements.txt
- roadmap.md


### Agent Instruction Files

- AGENTS.md
- dumpling/tests/AGENTS.md
- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| pkg | 4491 |
| lightning | 926 |
| tests | 744 |
| br | 631 |
| dumpling | 145 |
| docs | 136 |
| .agents | 56 |
| cmd | 35 |
| tools | 33 |
| .github | 15 |
| LICENSES | 3 |
| .bazelrc | 1 |
| .bazelversion | 1 |
| .codecov.yml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 4165 |
| .bazel | 787 |
| .sql | 521 |
| .sh | 274 |
| .result | 265 |
| .test | 261 |
| .md | 246 |
| .toml | 206 |
| .json | 187 |
| [no-ext] | 141 |
| .csv | 84 |
| .parquet | 22 |
| .yml | 14 |
| .zst | 10 |
| .snappy | 9 |
| .pem | 7 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
