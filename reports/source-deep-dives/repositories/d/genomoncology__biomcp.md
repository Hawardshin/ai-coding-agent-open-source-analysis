# genomoncology/biomcp Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

BioMCP: Biomedical Model Context Protocol

## 요약

- 조사 단위: `sources/genomoncology__biomcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,274 files, 370 directories, depth score 129, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/main.rs, bin/lint, architecture/experiments/244-obsidian-vault-knowledge-base-with-pdf-to-markdown/scripts/rust_probe/src/main.rs이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | genomoncology/biomcp |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | global |
| Language | Rust |
| Stars | 527 |
| Forks | 107 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/genomoncology__biomcp](../../../../sources/genomoncology__biomcp) |
| Existing report | [reports/global-trending/repositories/genomoncology__biomcp.md](../../../global-trending/repositories/genomoncology__biomcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1274 / 370 |
| Max observed depth | 7 |
| Top directories | .github, .march, architecture, benchmarks, bin, docs, examples, paper, protos, scripts, skills, spec, src, templates, testdata, tests, tools |
| Top extensions | .rs: 626, .md: 229, .py: 151, .json: 106, .sh: 48, .j2: 30, .png: 18, .toml: 9, .txt: 9, (none): 9, .xml: 8, .csv: 7 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 47 |
| tests | validation surface | 47 |
| src | source boundary | 23 |
| .github | ci surface | 1 |
| architecture | top-level component | 1 |
| benchmarks | validation surface | 1 |
| bin | top-level component | 1 |
| examples | top-level component | 1 |
| examples/geneagent | examples workspace | 1 |
| examples/genegpt | examples workspace | 1 |
| examples/pubmed-beyond | examples workspace | 1 |
| examples/README.md | examples workspace | 1 |
| examples/streamable-http | examples workspace | 1 |
| examples/trialgpt | examples workspace | 1 |
| paper | top-level component | 1 |
| protos | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| serve-dev | Makefile | sync-python-dev | make sync-python-dev |
| build | Makefile | build | make build |
| test | Makefile | test | make test |
| test | Makefile | test-contracts | make test-contracts |
| quality | Makefile | lint | make lint |
| build | Makefile | release-gate | make release-gate |
| quality | Makefile | check-quality-ratchet | make check-quality-ratchet |
| utility | Makefile | run | make run |
| utility | Makefile | clean | make clean |
| utility | Makefile | install | make install |
| test | Makefile | spec | make spec |
| test | Makefile | spec-pr | make spec-pr |
| test | Makefile | spec-contracts | make spec-contracts |
| utility | Makefile | verify | make verify |
| build | Makefile | release-live-smoke | make release-live-smoke |
| utility | Makefile | validate-skills | make validate-skills |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [src/main.rs](../../../../sources/genomoncology__biomcp/src/main.rs) | entrypoints signal |
| entrypoints | [bin/lint](../../../../sources/genomoncology__biomcp/bin/lint) | entrypoints signal |
| entrypoints | [architecture/experiments/244-obsidian-vault-knowledge-base-with-pdf-to-markdown/scripts/rust_probe/src/main.rs](../../../../sources/genomoncology__biomcp/architecture/experiments/244-obsidian-vault-knowledge-base-with-pdf-to-markdown/scripts/rust_probe/src/main.rs) | entrypoints signal |
| config | [Cargo.lock](../../../../sources/genomoncology__biomcp/Cargo.lock) | config signal |
| config | [Cargo.toml](../../../../sources/genomoncology__biomcp/Cargo.toml) | config signal |
| config | [Makefile](../../../../sources/genomoncology__biomcp/Makefile) | config signal |
| config | [pyproject.toml](../../../../sources/genomoncology__biomcp/pyproject.toml) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/genomoncology__biomcp/.github/workflows/ci.yml) | ci signal |
| ci | [.github/workflows/contracts.yml](../../../../sources/genomoncology__biomcp/.github/workflows/contracts.yml) | ci signal |
| ci | [.github/workflows/release.yml](../../../../sources/genomoncology__biomcp/.github/workflows/release.yml) | ci signal |
| docs | [mkdocs.yml](../../../../sources/genomoncology__biomcp/mkdocs.yml) | docs signal |
| docs | [README.md](../../../../sources/genomoncology__biomcp/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [src/main.rs](../../../../sources/genomoncology__biomcp/src/main.rs)<br>[bin/lint](../../../../sources/genomoncology__biomcp/bin/lint)<br>[architecture/experiments/244-obsidian-vault-knowledge-base-with-pdf-to-markdown/scripts/rust_probe/src/main.rs](../../../../sources/genomoncology__biomcp/architecture/experiments/244-obsidian-vault-knowledge-base-with-pdf-to-markdown/scripts/rust_probe/src/main.rs) |
| agentRuntime | 70 | [AGENTS.md](../../../../sources/genomoncology__biomcp/AGENTS.md)<br>[tools/biomcp-ci](../../../../sources/genomoncology__biomcp/tools/biomcp-ci)<br>[tools/check-mcp-allowlist.py](../../../../sources/genomoncology__biomcp/tools/check-mcp-allowlist.py)<br>[tools/check-quality-ratchet.py](../../../../sources/genomoncology__biomcp/tools/check-quality-ratchet.py)<br>[tools/check-quality-ratchet.sh](../../../../sources/genomoncology__biomcp/tools/check-quality-ratchet.sh)<br>[tools/check-source-registry.py](../../../../sources/genomoncology__biomcp/tools/check-source-registry.py)<br>[tools/cli-line-cap-allowlist.json](../../../../sources/genomoncology__biomcp/tools/cli-line-cap-allowlist.json)<br>[tests/skill_cli_structure.rs](../../../../sources/genomoncology__biomcp/tests/skill_cli_structure.rs) |
| mcp | 9 | [tools/check-mcp-allowlist.py](../../../../sources/genomoncology__biomcp/tools/check-mcp-allowlist.py)<br>[tests/test_mcp_contract.py](../../../../sources/genomoncology__biomcp/tests/test_mcp_contract.py)<br>[tests/test_mcp_http_surface.py](../../../../sources/genomoncology__biomcp/tests/test_mcp_http_surface.py)<br>[tests/test_mcp_http_transport.py](../../../../sources/genomoncology__biomcp/tests/test_mcp_http_transport.py)<br>[tests/test_mcp_stdio_guidance.py](../../../../sources/genomoncology__biomcp/tests/test_mcp_stdio_guidance.py)<br>[src/mcp/mod.rs](../../../../sources/genomoncology__biomcp/src/mcp/mod.rs)<br>[src/mcp/shell.rs](../../../../sources/genomoncology__biomcp/src/mcp/shell.rs)<br>[spec/surface/mcp.md](../../../../sources/genomoncology__biomcp/spec/surface/mcp.md) |
| retrieval | 19 | [tests/test_bioasq_ingest.py](../../../../sources/genomoncology__biomcp/tests/test_bioasq_ingest.py)<br>[src/entities/article/graph.rs](../../../../sources/genomoncology__biomcp/src/entities/article/graph.rs)<br>[src/entities/article/graph/tests.rs](../../../../sources/genomoncology__biomcp/src/entities/article/graph/tests.rs)<br>[docs/index.md](../../../../sources/genomoncology__biomcp/docs/index.md)<br>[docs/sources/index.md](../../../../sources/genomoncology__biomcp/docs/sources/index.md)<br>[docs/charts/index.md](../../../../sources/genomoncology__biomcp/docs/charts/index.md)<br>[benchmarks/bioasq/ingest_public.py](../../../../sources/genomoncology__biomcp/benchmarks/bioasq/ingest_public.py)<br>[architecture/experiments/244-obsidian-vault-knowledge-base-with-pdf-to-markdown/exploit.md](../../../../sources/genomoncology__biomcp/architecture/experiments/244-obsidian-vault-knowledge-base-with-pdf-to-markdown/exploit.md) |
| spec | 234 | [tests/test_mychem_empty_spec_fixture_contract.py](../../../../sources/genomoncology__biomcp/tests/test_mychem_empty_spec_fixture_contract.py)<br>[tests/surface/test_architecture_docs_parity_contract.py](../../../../sources/genomoncology__biomcp/tests/surface/test_architecture_docs_parity_contract.py)<br>[tests/surface/test_ticket_405_architecture_operator_contracts.py](../../../../sources/genomoncology__biomcp/tests/surface/test_ticket_405_architecture_operator_contracts.py)<br>[spec/README-timings.md](../../../../sources/genomoncology__biomcp/spec/README-timings.md)<br>[spec/surface/cli.md](../../../../sources/genomoncology__biomcp/spec/surface/cli.md)<br>[spec/surface/discover.md](../../../../sources/genomoncology__biomcp/spec/surface/discover.md)<br>[spec/surface/mcp.md](../../../../sources/genomoncology__biomcp/spec/surface/mcp.md)<br>[spec/surface/request-plan-ratchets.md](../../../../sources/genomoncology__biomcp/spec/surface/request-plan-ratchets.md) |
| eval | 514 | [DEAD-CODE-EVALUATION.md](../../../../sources/genomoncology__biomcp/DEAD-CODE-EVALUATION.md)<br>[TEST-REBUILD.md](../../../../sources/genomoncology__biomcp/TEST-REBUILD.md)<br>[tools/check-quality-ratchet.py](../../../../sources/genomoncology__biomcp/tools/check-quality-ratchet.py)<br>[tools/check-quality-ratchet.sh](../../../../sources/genomoncology__biomcp/tools/check-quality-ratchet.sh)<br>[tests/article_cli_tests_structure.rs](../../../../sources/genomoncology__biomcp/tests/article_cli_tests_structure.rs)<br>[tests/article_transform_structure.rs](../../../../sources/genomoncology__biomcp/tests/article_transform_structure.rs)<br>[tests/article_usage_stderr.rs](../../../../sources/genomoncology__biomcp/tests/article_usage_stderr.rs)<br>[tests/benchmark_cli_structure.rs](../../../../sources/genomoncology__biomcp/tests/benchmark_cli_structure.rs) |
| security | 4 | [tests/test_documentation_consistency_audit_contract.py](../../../../sources/genomoncology__biomcp/tests/test_documentation_consistency_audit_contract.py)<br>[src/entities/article/ranking/tests/policy.rs](../../../../sources/genomoncology__biomcp/src/entities/article/ranking/tests/policy.rs)<br>[paper/scripts/run-traceability-audit.sh](../../../../sources/genomoncology__biomcp/paper/scripts/run-traceability-audit.sh)<br>[paper/data/traceability-audit.json](../../../../sources/genomoncology__biomcp/paper/data/traceability-audit.json) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/genomoncology__biomcp/.github/workflows/ci.yml)<br>[.github/workflows/contracts.yml](../../../../sources/genomoncology__biomcp/.github/workflows/contracts.yml)<br>[.github/workflows/release.yml](../../../../sources/genomoncology__biomcp/.github/workflows/release.yml) |
| container | 13 | [docs/charts/bar.md](../../../../sources/genomoncology__biomcp/docs/charts/bar.md)<br>[docs/charts/box.md](../../../../sources/genomoncology__biomcp/docs/charts/box.md)<br>[docs/charts/density.md](../../../../sources/genomoncology__biomcp/docs/charts/density.md)<br>[docs/charts/heatmap.md](../../../../sources/genomoncology__biomcp/docs/charts/heatmap.md)<br>[docs/charts/histogram.md](../../../../sources/genomoncology__biomcp/docs/charts/histogram.md)<br>[docs/charts/index.md](../../../../sources/genomoncology__biomcp/docs/charts/index.md)<br>[docs/charts/pie.md](../../../../sources/genomoncology__biomcp/docs/charts/pie.md)<br>[docs/charts/ridgeline.md](../../../../sources/genomoncology__biomcp/docs/charts/ridgeline.md) |
| instruction | 1 | [AGENTS.md](../../../../sources/genomoncology__biomcp/AGENTS.md) |
| docs | 140 | [mkdocs.yml](../../../../sources/genomoncology__biomcp/mkdocs.yml)<br>[README.md](../../../../sources/genomoncology__biomcp/README.md)<br>[spec/README-timings.md](../../../../sources/genomoncology__biomcp/spec/README-timings.md)<br>[scripts/README.md](../../../../sources/genomoncology__biomcp/scripts/README.md)<br>[paper/README.md](../../../../sources/genomoncology__biomcp/paper/README.md)<br>[examples/README.md](../../../../sources/genomoncology__biomcp/examples/README.md)<br>[examples/trialgpt/README.md](../../../../sources/genomoncology__biomcp/examples/trialgpt/README.md)<br>[examples/streamable-http/README.md](../../../../sources/genomoncology__biomcp/examples/streamable-http/README.md) |
| config | 10 | [Cargo.lock](../../../../sources/genomoncology__biomcp/Cargo.lock)<br>[Cargo.toml](../../../../sources/genomoncology__biomcp/Cargo.toml)<br>[Makefile](../../../../sources/genomoncology__biomcp/Makefile)<br>[pyproject.toml](../../../../sources/genomoncology__biomcp/pyproject.toml)<br>[uv.lock](../../../../sources/genomoncology__biomcp/uv.lock)<br>[architecture/experiments/25-who-vaccines-and-apis/scripts/pyproject.toml](../../../../sources/genomoncology__biomcp/architecture/experiments/25-who-vaccines-and-apis/scripts/pyproject.toml)<br>[architecture/experiments/245-biomedical-news-discovery-and-personalized-briefing/scripts/pyproject.toml](../../../../sources/genomoncology__biomcp/architecture/experiments/245-biomedical-news-discovery-and-personalized-briefing/scripts/pyproject.toml)<br>[architecture/experiments/244-obsidian-vault-knowledge-base-with-pdf-to-markdown/scripts/rust_probe/Cargo.lock](../../../../sources/genomoncology__biomcp/architecture/experiments/244-obsidian-vault-knowledge-base-with-pdf-to-markdown/scripts/rust_probe/Cargo.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 514 | [DEAD-CODE-EVALUATION.md](../../../../sources/genomoncology__biomcp/DEAD-CODE-EVALUATION.md)<br>[TEST-REBUILD.md](../../../../sources/genomoncology__biomcp/TEST-REBUILD.md)<br>[tools/check-quality-ratchet.py](../../../../sources/genomoncology__biomcp/tools/check-quality-ratchet.py)<br>[tools/check-quality-ratchet.sh](../../../../sources/genomoncology__biomcp/tools/check-quality-ratchet.sh)<br>[tests/article_cli_tests_structure.rs](../../../../sources/genomoncology__biomcp/tests/article_cli_tests_structure.rs)<br>[tests/article_transform_structure.rs](../../../../sources/genomoncology__biomcp/tests/article_transform_structure.rs) |
| CI workflows | 3 | [.github/workflows/ci.yml](../../../../sources/genomoncology__biomcp/.github/workflows/ci.yml)<br>[.github/workflows/contracts.yml](../../../../sources/genomoncology__biomcp/.github/workflows/contracts.yml)<br>[.github/workflows/release.yml](../../../../sources/genomoncology__biomcp/.github/workflows/release.yml) |
| Containers / deploy | 13 | [docs/charts/bar.md](../../../../sources/genomoncology__biomcp/docs/charts/bar.md)<br>[docs/charts/box.md](../../../../sources/genomoncology__biomcp/docs/charts/box.md)<br>[docs/charts/density.md](../../../../sources/genomoncology__biomcp/docs/charts/density.md)<br>[docs/charts/heatmap.md](../../../../sources/genomoncology__biomcp/docs/charts/heatmap.md)<br>[docs/charts/histogram.md](../../../../sources/genomoncology__biomcp/docs/charts/histogram.md)<br>[docs/charts/index.md](../../../../sources/genomoncology__biomcp/docs/charts/index.md) |
| Security / policy | 4 | [tests/test_documentation_consistency_audit_contract.py](../../../../sources/genomoncology__biomcp/tests/test_documentation_consistency_audit_contract.py)<br>[src/entities/article/ranking/tests/policy.rs](../../../../sources/genomoncology__biomcp/src/entities/article/ranking/tests/policy.rs)<br>[paper/scripts/run-traceability-audit.sh](../../../../sources/genomoncology__biomcp/paper/scripts/run-traceability-audit.sh)<br>[paper/data/traceability-audit.json](../../../../sources/genomoncology__biomcp/paper/data/traceability-audit.json) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/genomoncology__biomcp/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/main.rs`, `bin/lint`, `architecture/experiments/244-obsidian-vault-knowledge-base-with-pdf-to-markdown/scripts/rust_probe/src/main.rs`.
2. Trace execution through entrypoints: `src/main.rs`, `bin/lint`, `architecture/experiments/244-obsidian-vault-knowledge-base-with-pdf-to-markdown/scripts/rust_probe/src/main.rs`.
3. Map agent/tool runtime through: `AGENTS.md`, `tools/biomcp-ci`, `tools/check-mcp-allowlist.py`.
4. Inspect retrieval/memory/indexing through: `tests/test_bioasq_ingest.py`, `src/entities/article/graph.rs`, `src/entities/article/graph/tests.rs`.
5. Verify behavior through test/eval files: `DEAD-CODE-EVALUATION.md`, `TEST-REBUILD.md`, `tools/check-quality-ratchet.py`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 BioMCP Biomedical Model Context Protocol. 핵심 구조 신호는 Rust, pyproject.toml, Cargo.toml, Makefile, README.md, AGENTS.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
