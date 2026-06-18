# Andyyyy64/whichllm Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Find the local LLM that actually runs and performs best on your hardware. Ranked by real, recency-aware benchmarks, not parameter count. One command, run it instantly.

## 요약

- 조사 단위: `sources/Andyyyy64__whichllm` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 105 files, 15 directories, depth score 76, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 config=pyproject.toml, uv.lock이고, 의존성 단서는 typer, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Andyyyy64/whichllm |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | korea |
| Language | Python |
| Stars | 4923 |
| Forks | 268 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/Andyyyy64__whichllm](../../../../sources/Andyyyy64__whichllm) |
| Existing report | [reports/global-trending/repositories/Andyyyy64__whichllm.md](../../../global-trending/repositories/Andyyyy64__whichllm.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 105 / 15 |
| Max observed depth | 5 |
| Top directories | .github, assets, docs, scripts, src, tests |
| Top extensions | .py: 78, .md: 12, .yml: 6, .gif: 2, .tape: 2, (none): 2, .lock: 1, .png: 1, .toml: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 27 |
| src | source boundary | 15 |
| docs | documentation surface | 8 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | whichllm | whichllm |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | typer |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| config | [pyproject.toml](../../../../sources/Andyyyy64__whichllm/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/Andyyyy64__whichllm/uv.lock) | config signal |
| ci | [.github/workflows/lint.yml](../../../../sources/Andyyyy64__whichllm/.github/workflows/lint.yml) | ci signal |
| ci | [.github/workflows/publish.yml](../../../../sources/Andyyyy64__whichllm/.github/workflows/publish.yml) | ci signal |
| ci | [.github/workflows/test.yml](../../../../sources/Andyyyy64__whichllm/.github/workflows/test.yml) | ci signal |
| eval | [tests/__init__.py](../../../../sources/Andyyyy64__whichllm/tests/__init__.py) | eval support |
| eval | [tests/test_aa_index.py](../../../../sources/Andyyyy64__whichllm/tests/test_aa_index.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 1 | [src/whichllm/hardware/memory.py](../../../../sources/Andyyyy64__whichllm/src/whichllm/hardware/memory.py) |
| mcp | 0 | not obvious |
| retrieval | 4 | [tests/test_aa_index.py](../../../../sources/Andyyyy64__whichllm/tests/test_aa_index.py)<br>[tests/test_memory.py](../../../../sources/Andyyyy64__whichllm/tests/test_memory.py)<br>[src/whichllm/models/benchmark_sources/aa_index.py](../../../../sources/Andyyyy64__whichllm/src/whichllm/models/benchmark_sources/aa_index.py)<br>[src/whichllm/hardware/memory.py](../../../../sources/Andyyyy64__whichllm/src/whichllm/hardware/memory.py) |
| spec | 0 | not obvious |
| eval | 36 | [tests/__init__.py](../../../../sources/Andyyyy64__whichllm/tests/__init__.py)<br>[tests/test_aa_index.py](../../../../sources/Andyyyy64__whichllm/tests/test_aa_index.py)<br>[tests/test_amd_detection.py](../../../../sources/Andyyyy64__whichllm/tests/test_amd_detection.py)<br>[tests/test_asahi_detection.py](../../../../sources/Andyyyy64__whichllm/tests/test_asahi_detection.py)<br>[tests/test_benchmark_lookup.py](../../../../sources/Andyyyy64__whichllm/tests/test_benchmark_lookup.py)<br>[tests/test_cli.py](../../../../sources/Andyyyy64__whichllm/tests/test_cli.py)<br>[tests/test_compatibility.py](../../../../sources/Andyyyy64__whichllm/tests/test_compatibility.py)<br>[tests/test_fetcher.py](../../../../sources/Andyyyy64__whichllm/tests/test_fetcher.py) |
| security | 0 | not obvious |
| ci | 3 | [.github/workflows/lint.yml](../../../../sources/Andyyyy64__whichllm/.github/workflows/lint.yml)<br>[.github/workflows/publish.yml](../../../../sources/Andyyyy64__whichllm/.github/workflows/publish.yml)<br>[.github/workflows/test.yml](../../../../sources/Andyyyy64__whichllm/.github/workflows/test.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 8 | [README.md](../../../../sources/Andyyyy64__whichllm/README.md)<br>[docs/cli.md](../../../../sources/Andyyyy64__whichllm/docs/cli.md)<br>[docs/hardware.md](../../../../sources/Andyyyy64__whichllm/docs/hardware.md)<br>[docs/how-it-works.md](../../../../sources/Andyyyy64__whichllm/docs/how-it-works.md)<br>[docs/README.ja.md](../../../../sources/Andyyyy64__whichllm/docs/README.ja.md)<br>[docs/run-snippet.md](../../../../sources/Andyyyy64__whichllm/docs/run-snippet.md)<br>[docs/scoring.md](../../../../sources/Andyyyy64__whichllm/docs/scoring.md)<br>[docs/troubleshooting.md](../../../../sources/Andyyyy64__whichllm/docs/troubleshooting.md) |
| config | 2 | [pyproject.toml](../../../../sources/Andyyyy64__whichllm/pyproject.toml)<br>[uv.lock](../../../../sources/Andyyyy64__whichllm/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 36 | [tests/__init__.py](../../../../sources/Andyyyy64__whichllm/tests/__init__.py)<br>[tests/test_aa_index.py](../../../../sources/Andyyyy64__whichllm/tests/test_aa_index.py)<br>[tests/test_amd_detection.py](../../../../sources/Andyyyy64__whichllm/tests/test_amd_detection.py)<br>[tests/test_asahi_detection.py](../../../../sources/Andyyyy64__whichllm/tests/test_asahi_detection.py)<br>[tests/test_benchmark_lookup.py](../../../../sources/Andyyyy64__whichllm/tests/test_benchmark_lookup.py)<br>[tests/test_cli.py](../../../../sources/Andyyyy64__whichllm/tests/test_cli.py) |
| CI workflows | 3 | [.github/workflows/lint.yml](../../../../sources/Andyyyy64__whichllm/.github/workflows/lint.yml)<br>[.github/workflows/publish.yml](../../../../sources/Andyyyy64__whichllm/.github/workflows/publish.yml)<br>[.github/workflows/test.yml](../../../../sources/Andyyyy64__whichllm/.github/workflows/test.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `pyproject.toml`, `uv.lock`, `.github/workflows/lint.yml`.
2. Map agent/tool runtime through: `src/whichllm/hardware/memory.py`.
3. Inspect retrieval/memory/indexing through: `tests/test_aa_index.py`, `tests/test_memory.py`, `src/whichllm/models/benchmark_sources/aa_index.py`.
4. Verify behavior through test/eval files: `tests/__init__.py`, `tests/test_aa_index.py`, `tests/test_amd_detection.py`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 Find the local LLM that actually runs and performs best on your hardware. Ranked by real, recency aware benchmarks, not . 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, tests, ci이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
