# yifanfeng97/Hyper-Extract Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Transform unstructured text into structured knowledge with LLMs. Graphs, hypergraphs, and spatio-temporal extractions — with one command.

## 요약

- 조사 단위: `sources/yifanfeng97__Hyper-Extract` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 449 files, 110 directories, depth score 109, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=hyperextract-skills/SKILL.md, hyperextract-skills/yaml-validator/SKILL.md, hyperextract-skills/template-optimizer/SKILL.md이고, 의존성 단서는 openai, anthropic, langchain, pydantic, typer, faiss, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | yifanfeng97/Hyper-Extract |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | Python |
| Stars | 1571 |
| Forks | 177 |
| License | NOASSERTION |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/yifanfeng97__Hyper-Extract](../../../../sources/yifanfeng97__Hyper-Extract) |
| Existing report | [reports/llm-wiki/repositories/yifanfeng97__Hyper-Extract.md](../../../llm-wiki/repositories/yifanfeng97__Hyper-Extract.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 449 / 110 |
| Max observed depth | 6 |
| Top directories | .github, docs, examples, hyperextract, hyperextract-skills, tests |
| Top extensions | .md: 241, .py: 134, .yaml: 43, .svg: 8, .yml: 7, .jpg: 5, (none): 5, .txt: 2, .example: 1, .lock: 1, .png: 1, .toml: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 48 |
| docs | documentation surface | 34 |
| examples/zh | examples workspace | 8 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| examples/README_ZH.md | examples workspace | 1 |
| examples/README.md | examples workspace | 1 |
| hyperextract | top-level component | 1 |
| hyperextract-skills | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | he | he |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | none |
| agentFrameworks | langchain |
| vectorStores | faiss |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | typer |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [hyperextract-skills/SKILL.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/SKILL.md) | agentRuntime signal |
| agentRuntime | [hyperextract-skills/yaml-validator/SKILL.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/yaml-validator/SKILL.md) | agentRuntime signal |
| agentRuntime | [hyperextract-skills/template-optimizer/SKILL.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/template-optimizer/SKILL.md) | agentRuntime signal |
| agentRuntime | [hyperextract-skills/record-designer/SKILL.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/record-designer/SKILL.md) | agentRuntime signal |
| entrypoints | [hyperextract/cli/__main__.py](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract/cli/__main__.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/yifanfeng97__Hyper-Extract/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/yifanfeng97__Hyper-Extract/uv.lock) | config signal |
| ci | [.github/workflows/docs.yml](../../../../sources/yifanfeng97__Hyper-Extract/.github/workflows/docs.yml) | ci support |
| ci | [.github/workflows/integration.yml](../../../../sources/yifanfeng97__Hyper-Extract/.github/workflows/integration.yml) | ci support |
| eval | [tests/__init__.py](../../../../sources/yifanfeng97__Hyper-Extract/tests/__init__.py) | eval support |
| eval | [tests/conftest.py](../../../../sources/yifanfeng97__Hyper-Extract/tests/conftest.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [hyperextract/cli/__main__.py](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract/cli/__main__.py) |
| agentRuntime | 10 | [hyperextract-skills/SKILL.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/SKILL.md)<br>[hyperextract-skills/yaml-validator/SKILL.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/yaml-validator/SKILL.md)<br>[hyperextract-skills/template-optimizer/SKILL.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/template-optimizer/SKILL.md)<br>[hyperextract-skills/record-designer/SKILL.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/record-designer/SKILL.md)<br>[hyperextract-skills/multilingual/SKILL.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/multilingual/SKILL.md)<br>[hyperextract-skills/graph-designer/SKILL.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/graph-designer/SKILL.md)<br>[hyperextract-skills/brainstorm/SKILL.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/brainstorm/SKILL.md)<br>[hyperextract/templates/presets/general/workflow_graph.yaml](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract/templates/presets/general/workflow_graph.yaml) |
| mcp | 0 | not obvious |
| retrieval | 82 | [tests/types/test_graph_dangling.py](../../../../sources/yifanfeng97__Hyper-Extract/tests/types/test_graph_dangling.py)<br>[tests/types/test_graph_extraction.py](../../../../sources/yifanfeng97__Hyper-Extract/tests/types/test_graph_extraction.py)<br>[tests/types/test_graph_search.py](../../../../sources/yifanfeng97__Hyper-Extract/tests/types/test_graph_search.py)<br>[hyperextract-skills/graph-designer/SKILL.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/graph-designer/SKILL.md)<br>[hyperextract-skills/graph-designer/references/dimensions.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/graph-designer/references/dimensions.md)<br>[hyperextract-skills/graph-designer/references/entity.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/graph-designer/references/entity.md)<br>[hyperextract-skills/graph-designer/references/hypergraph.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/graph-designer/references/hypergraph.md)<br>[hyperextract-skills/graph-designer/references/relation.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/graph-designer/references/relation.md) |
| spec | 4 | [hyperextract/templates/DESIGN_GUIDE_zh.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract/templates/DESIGN_GUIDE_zh.md)<br>[hyperextract/templates/DESIGN_GUIDE.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract/templates/DESIGN_GUIDE.md)<br>[docs/zh/concepts/architecture.md](../../../../sources/yifanfeng97__Hyper-Extract/docs/zh/concepts/architecture.md)<br>[docs/en/concepts/architecture.md](../../../../sources/yifanfeng97__Hyper-Extract/docs/en/concepts/architecture.md) |
| eval | 98 | [tests/__init__.py](../../../../sources/yifanfeng97__Hyper-Extract/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/yifanfeng97__Hyper-Extract/tests/conftest.py)<br>[tests/kg.md](../../../../sources/yifanfeng97__Hyper-Extract/tests/kg.md)<br>[tests/mocks.py](../../../../sources/yifanfeng97__Hyper-Extract/tests/mocks.py)<br>[tests/utils/__init__.py](../../../../sources/yifanfeng97__Hyper-Extract/tests/utils/__init__.py)<br>[tests/utils/test_client.py](../../../../sources/yifanfeng97__Hyper-Extract/tests/utils/test_client.py)<br>[tests/types/__init__.py](../../../../sources/yifanfeng97__Hyper-Extract/tests/types/__init__.py)<br>[tests/types/test_extraction_logging.py](../../../../sources/yifanfeng97__Hyper-Extract/tests/types/test_extraction_logging.py) |
| security | 5 | [tests/test_data/zh/legal/compliance_filing_sample.md](../../../../sources/yifanfeng97__Hyper-Extract/tests/test_data/zh/legal/compliance_filing_sample.md)<br>[tests/test_data/zh/general/regulation_company_policy.md](../../../../sources/yifanfeng97__Hyper-Extract/tests/test_data/zh/general/regulation_company_policy.md)<br>[tests/test_data/en/legal/compliance_filing_sample.md](../../../../sources/yifanfeng97__Hyper-Extract/tests/test_data/en/legal/compliance_filing_sample.md)<br>[tests/test_data/en/general/regulation_company_policy.md](../../../../sources/yifanfeng97__Hyper-Extract/tests/test_data/en/general/regulation_company_policy.md)<br>[hyperextract/templates/presets/legal/compliance_list.yaml](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract/templates/presets/legal/compliance_list.yaml) |
| ci | 5 | [.github/workflows/docs.yml](../../../../sources/yifanfeng97__Hyper-Extract/.github/workflows/docs.yml)<br>[.github/workflows/integration.yml](../../../../sources/yifanfeng97__Hyper-Extract/.github/workflows/integration.yml)<br>[.github/workflows/lint.yml](../../../../sources/yifanfeng97__Hyper-Extract/.github/workflows/lint.yml)<br>[.github/workflows/publish.yml](../../../../sources/yifanfeng97__Hyper-Extract/.github/workflows/publish.yml)<br>[.github/workflows/test.yml](../../../../sources/yifanfeng97__Hyper-Extract/.github/workflows/test.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 166 | [mkdocs.yml](../../../../sources/yifanfeng97__Hyper-Extract/mkdocs.yml)<br>[README_ZH.md](../../../../sources/yifanfeng97__Hyper-Extract/README_ZH.md)<br>[README.md](../../../../sources/yifanfeng97__Hyper-Extract/README.md)<br>[hyperextract-skills/README_ZH.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/README_ZH.md)<br>[hyperextract-skills/README.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract-skills/README.md)<br>[hyperextract/templates/README_ZH.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract/templates/README_ZH.md)<br>[hyperextract/templates/README.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract/templates/README.md)<br>[hyperextract/cli/README_ZH.md](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract/cli/README_ZH.md) |
| config | 2 | [pyproject.toml](../../../../sources/yifanfeng97__Hyper-Extract/pyproject.toml)<br>[uv.lock](../../../../sources/yifanfeng97__Hyper-Extract/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 98 | [tests/__init__.py](../../../../sources/yifanfeng97__Hyper-Extract/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/yifanfeng97__Hyper-Extract/tests/conftest.py)<br>[tests/kg.md](../../../../sources/yifanfeng97__Hyper-Extract/tests/kg.md)<br>[tests/mocks.py](../../../../sources/yifanfeng97__Hyper-Extract/tests/mocks.py)<br>[tests/utils/__init__.py](../../../../sources/yifanfeng97__Hyper-Extract/tests/utils/__init__.py)<br>[tests/utils/test_client.py](../../../../sources/yifanfeng97__Hyper-Extract/tests/utils/test_client.py) |
| CI workflows | 5 | [.github/workflows/docs.yml](../../../../sources/yifanfeng97__Hyper-Extract/.github/workflows/docs.yml)<br>[.github/workflows/integration.yml](../../../../sources/yifanfeng97__Hyper-Extract/.github/workflows/integration.yml)<br>[.github/workflows/lint.yml](../../../../sources/yifanfeng97__Hyper-Extract/.github/workflows/lint.yml)<br>[.github/workflows/publish.yml](../../../../sources/yifanfeng97__Hyper-Extract/.github/workflows/publish.yml)<br>[.github/workflows/test.yml](../../../../sources/yifanfeng97__Hyper-Extract/.github/workflows/test.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 5 | [tests/test_data/zh/legal/compliance_filing_sample.md](../../../../sources/yifanfeng97__Hyper-Extract/tests/test_data/zh/legal/compliance_filing_sample.md)<br>[tests/test_data/zh/general/regulation_company_policy.md](../../../../sources/yifanfeng97__Hyper-Extract/tests/test_data/zh/general/regulation_company_policy.md)<br>[tests/test_data/en/legal/compliance_filing_sample.md](../../../../sources/yifanfeng97__Hyper-Extract/tests/test_data/en/legal/compliance_filing_sample.md)<br>[tests/test_data/en/general/regulation_company_policy.md](../../../../sources/yifanfeng97__Hyper-Extract/tests/test_data/en/general/regulation_company_policy.md)<br>[hyperextract/templates/presets/legal/compliance_list.yaml](../../../../sources/yifanfeng97__Hyper-Extract/hyperextract/templates/presets/legal/compliance_list.yaml) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `hyperextract-skills/SKILL.md`, `hyperextract-skills/yaml-validator/SKILL.md`, `hyperextract-skills/template-optimizer/SKILL.md`.
2. Trace execution through entrypoints: `hyperextract/cli/__main__.py`.
3. Map agent/tool runtime through: `hyperextract-skills/SKILL.md`, `hyperextract-skills/yaml-validator/SKILL.md`, `hyperextract-skills/template-optimizer/SKILL.md`.
4. Inspect retrieval/memory/indexing through: `tests/types/test_graph_dangling.py`, `tests/types/test_graph_extraction.py`, `tests/types/test_graph_search.py`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/conftest.py`, `tests/kg.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Transform unstructured text into structured knowledge with LLMs. Graphs, hypergraphs, and spatio temporal extractions — . 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, openai, anthropic이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
