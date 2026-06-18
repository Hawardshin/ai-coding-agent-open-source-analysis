# psychofict/hwpkit Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Read, fill, and edit Korean HWP (Hancom Office) documents in Python. Extract text for LLM / RAG pipelines, fill government & university forms programmatically, and rewrite the binary without corrupting it.

## 요약

- 조사 단위: `sources/psychofict__hwpkit` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 52 files, 10 directories, depth score 87, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=docs/index.md, docs/blog/index.md, docs/blog/posts/rag-pipeline-korean-hwp-documents.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | psychofict/hwpkit |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/psychofict__hwpkit](../../../../sources/psychofict__hwpkit) |
| Existing report | [reports/korea-trending/repositories/psychofict__hwpkit.md](../../../korea-trending/repositories/psychofict__hwpkit.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 52 / 10 |
| Max observed depth | 4 |
| Top directories | .github, assets, docs, examples, hwpkit, tests |
| Top extensions | .py: 20, .md: 16, .yml: 5, (none): 3, .jpeg: 2, .png: 2, .txt: 2, .json: 1, .toml: 1 |
| Source patterns | cli-first, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 22 |
| tests | validation surface | 11 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| examples | top-level component | 1 |
| hwpkit | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| test | pyproject.toml | hwpkit-inspect | hwpkit-inspect |
| utility | pyproject.toml | hwpkit-text | hwpkit-text |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
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
| retrieval | [docs/index.md](../../../../sources/psychofict__hwpkit/docs/index.md) | retrieval signal |
| retrieval | [docs/blog/index.md](../../../../sources/psychofict__hwpkit/docs/blog/index.md) | retrieval signal |
| retrieval | [docs/blog/posts/rag-pipeline-korean-hwp-documents.md](../../../../sources/psychofict__hwpkit/docs/blog/posts/rag-pipeline-korean-hwp-documents.md) | retrieval signal |
| docs | [mkdocs.yml](../../../../sources/psychofict__hwpkit/mkdocs.yml) | docs signal |
| docs | [README.md](../../../../sources/psychofict__hwpkit/README.md) | docs signal |
| docs | [tests/fixtures/README.md](../../../../sources/psychofict__hwpkit/tests/fixtures/README.md) | docs signal |
| docs | [docs/api.md](../../../../sources/psychofict__hwpkit/docs/api.md) | docs signal |
| eval | [tests/test_cfb_add.py](../../../../sources/psychofict__hwpkit/tests/test_cfb_add.py) | eval signal |
| eval | [tests/test_charshape.py](../../../../sources/psychofict__hwpkit/tests/test_charshape.py) | eval signal |
| eval | [tests/test_extract.py](../../../../sources/psychofict__hwpkit/tests/test_extract.py) | eval signal |
| eval | [tests/test_hwp.py](../../../../sources/psychofict__hwpkit/tests/test_hwp.py) | eval signal |
| config | [pyproject.toml](../../../../sources/psychofict__hwpkit/pyproject.toml) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 3 | [docs/index.md](../../../../sources/psychofict__hwpkit/docs/index.md)<br>[docs/blog/index.md](../../../../sources/psychofict__hwpkit/docs/blog/index.md)<br>[docs/blog/posts/rag-pipeline-korean-hwp-documents.md](../../../../sources/psychofict__hwpkit/docs/blog/posts/rag-pipeline-korean-hwp-documents.md) |
| spec | 1 | [docs/requirements.txt](../../../../sources/psychofict__hwpkit/docs/requirements.txt) |
| eval | 9 | [tests/test_cfb_add.py](../../../../sources/psychofict__hwpkit/tests/test_cfb_add.py)<br>[tests/test_charshape.py](../../../../sources/psychofict__hwpkit/tests/test_charshape.py)<br>[tests/test_extract.py](../../../../sources/psychofict__hwpkit/tests/test_extract.py)<br>[tests/test_hwp.py](../../../../sources/psychofict__hwpkit/tests/test_hwp.py)<br>[tests/test_hwpx.py](../../../../sources/psychofict__hwpkit/tests/test_hwpx.py)<br>[tests/test_picture.py](../../../../sources/psychofict__hwpkit/tests/test_picture.py)<br>[tests/test_records.py](../../../../sources/psychofict__hwpkit/tests/test_records.py)<br>[tests/test_roundtrip.py](../../../../sources/psychofict__hwpkit/tests/test_roundtrip.py) |
| security | 0 | not obvious |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/psychofict__hwpkit/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/psychofict__hwpkit/.github/workflows/docs.yml)<br>[.github/workflows/publish.yml](../../../../sources/psychofict__hwpkit/.github/workflows/publish.yml) |
| container | 0 | not obvious |
| instruction | 1 | [CLAUDE.md](../../../../sources/psychofict__hwpkit/CLAUDE.md) |
| docs | 19 | [mkdocs.yml](../../../../sources/psychofict__hwpkit/mkdocs.yml)<br>[README.md](../../../../sources/psychofict__hwpkit/README.md)<br>[tests/fixtures/README.md](../../../../sources/psychofict__hwpkit/tests/fixtures/README.md)<br>[docs/api.md](../../../../sources/psychofict__hwpkit/docs/api.md)<br>[docs/changelog.md](../../../../sources/psychofict__hwpkit/docs/changelog.md)<br>[docs/CNAME](../../../../sources/psychofict__hwpkit/docs/CNAME)<br>[docs/comparison.md](../../../../sources/psychofict__hwpkit/docs/comparison.md)<br>[docs/GOTCHAS.md](../../../../sources/psychofict__hwpkit/docs/GOTCHAS.md) |
| config | 2 | [pyproject.toml](../../../../sources/psychofict__hwpkit/pyproject.toml)<br>[docs/requirements.txt](../../../../sources/psychofict__hwpkit/docs/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 9 | [tests/test_cfb_add.py](../../../../sources/psychofict__hwpkit/tests/test_cfb_add.py)<br>[tests/test_charshape.py](../../../../sources/psychofict__hwpkit/tests/test_charshape.py)<br>[tests/test_extract.py](../../../../sources/psychofict__hwpkit/tests/test_extract.py)<br>[tests/test_hwp.py](../../../../sources/psychofict__hwpkit/tests/test_hwp.py)<br>[tests/test_hwpx.py](../../../../sources/psychofict__hwpkit/tests/test_hwpx.py)<br>[tests/test_picture.py](../../../../sources/psychofict__hwpkit/tests/test_picture.py) |
| CI workflows | 3 | [.github/workflows/ci.yml](../../../../sources/psychofict__hwpkit/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/psychofict__hwpkit/.github/workflows/docs.yml)<br>[.github/workflows/publish.yml](../../../../sources/psychofict__hwpkit/.github/workflows/publish.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/psychofict__hwpkit/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `docs/index.md`, `docs/blog/index.md`, `docs/blog/posts/rag-pipeline-korean-hwp-documents.md`.
2. Inspect retrieval/memory/indexing through: `docs/index.md`, `docs/blog/index.md`, `docs/blog/posts/rag-pipeline-korean-hwp-documents.md`.
3. Verify behavior through test/eval files: `tests/test_cfb_add.py`, `tests/test_charshape.py`, `tests/test_extract.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Read, fill, and edit Korean HWP Hancom Office documents in Python. Extract text for LLM / RAG pipelines, fill government. 핵심 구조 신호는 Python, pyproject.toml, README.md, CLAUDE.md, LICENSE, tests이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
