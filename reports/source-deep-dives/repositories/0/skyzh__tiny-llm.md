# skyzh/tiny-llm Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

A course of learning LLM inference serving on Apple Silicon for systems engineers: build a tiny vLLM + Qwen.

## 요약

- 조사 단위: `sources/skyzh__tiny-llm` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 125 files, 18 directories, depth score 87, key references 8개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=main.py이고, 의존성 단서는 torch, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | skyzh/tiny-llm |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | Python |
| Stars | 4288 |
| Forks | 333 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/skyzh__tiny-llm](../../../../sources/skyzh__tiny-llm) |
| Existing report | [reports/global-trending/repositories/skyzh__tiny-llm.md](../../../global-trending/repositories/skyzh__tiny-llm.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 125 / 18 |
| Max observed depth | 4 |
| Top directories | .github, benches, book, scripts, src, tests, tests_refsol |
| Top extensions | .py: 65, .md: 24, .cpp: 8, (none): 7, .metal: 4, .h: 3, .txt: 3, .yml: 3, .toml: 2, ._: 1, .json: 1, .lock: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 5 |
| tests | validation surface | 4 |
| .github | ci surface | 1 |
| benches | validation surface | 1 |
| book | top-level component | 1 |
| scripts | top-level component | 1 |
| tests_refsol | validation surface | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | torch |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [main.py](../../../../sources/skyzh__tiny-llm/main.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/skyzh__tiny-llm/pyproject.toml) | config signal |
| ci | [.github/workflows/macos.yml](../../../../sources/skyzh__tiny-llm/.github/workflows/macos.yml) | ci signal |
| ci | [.github/workflows/main.yml](../../../../sources/skyzh__tiny-llm/.github/workflows/main.yml) | ci signal |
| ci | [.github/workflows/spell-check.yml](../../../../sources/skyzh__tiny-llm/.github/workflows/spell-check.yml) | ci signal |
| eval | [bench.py](../../../../sources/skyzh__tiny-llm/bench.py) | eval support |
| eval | [tests_refsol/test_rope.py](../../../../sources/skyzh__tiny-llm/tests_refsol/test_rope.py) | eval support |
| instruction | [AGENTS.md](../../../../sources/skyzh__tiny-llm/AGENTS.md) | instruction support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [main.py](../../../../sources/skyzh__tiny-llm/main.py) |
| agentRuntime | 1 | [AGENTS.md](../../../../sources/skyzh__tiny-llm/AGENTS.md) |
| mcp | 0 | not obvious |
| retrieval | 2 | [src/tiny_llm_ref/embedding.py](../../../../sources/skyzh__tiny-llm/src/tiny_llm_ref/embedding.py)<br>[src/tiny_llm/embedding.py](../../../../sources/skyzh__tiny-llm/src/tiny_llm/embedding.py) |
| spec | 0 | not obvious |
| eval | 24 | [bench.py](../../../../sources/skyzh__tiny-llm/bench.py)<br>[tests_refsol/test_rope.py](../../../../sources/skyzh__tiny-llm/tests_refsol/test_rope.py)<br>[tests_refsol/test_week_1_day_1.py](../../../../sources/skyzh__tiny-llm/tests_refsol/test_week_1_day_1.py)<br>[tests_refsol/test_week_1_day_2.py](../../../../sources/skyzh__tiny-llm/tests_refsol/test_week_1_day_2.py)<br>[tests_refsol/test_week_1_day_3.py](../../../../sources/skyzh__tiny-llm/tests_refsol/test_week_1_day_3.py)<br>[tests_refsol/test_week_1_day_4.py](../../../../sources/skyzh__tiny-llm/tests_refsol/test_week_1_day_4.py)<br>[tests_refsol/test_week_1_day_5.py](../../../../sources/skyzh__tiny-llm/tests_refsol/test_week_1_day_5.py)<br>[tests_refsol/test_week_1_day_6.py](../../../../sources/skyzh__tiny-llm/tests_refsol/test_week_1_day_6.py) |
| security | 0 | not obvious |
| ci | 3 | [.github/workflows/macos.yml](../../../../sources/skyzh__tiny-llm/.github/workflows/macos.yml)<br>[.github/workflows/main.yml](../../../../sources/skyzh__tiny-llm/.github/workflows/main.yml)<br>[.github/workflows/spell-check.yml](../../../../sources/skyzh__tiny-llm/.github/workflows/spell-check.yml) |
| container | 0 | not obvious |
| instruction | 1 | [AGENTS.md](../../../../sources/skyzh__tiny-llm/AGENTS.md) |
| docs | 30 | [README.md](../../../../sources/skyzh__tiny-llm/README.md)<br>[book/.gitignore](../../../../sources/skyzh__tiny-llm/book/.gitignore)<br>[book/book.toml](../../../../sources/skyzh__tiny-llm/book/book.toml)<br>[book/sitemap.sh](../../../../sources/skyzh__tiny-llm/book/sitemap.sh)<br>[book/theme/head.hbs._](../../../../sources/skyzh__tiny-llm/book/theme/head.hbs._)<br>[book/src/copyright.md](../../../../sources/skyzh__tiny-llm/book/src/copyright.md)<br>[book/src/discord-badge.svg](../../../../sources/skyzh__tiny-llm/book/src/discord-badge.svg)<br>[book/src/glossary.md](../../../../sources/skyzh__tiny-llm/book/src/glossary.md) |
| config | 1 | [pyproject.toml](../../../../sources/skyzh__tiny-llm/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 24 | [bench.py](../../../../sources/skyzh__tiny-llm/bench.py)<br>[tests_refsol/test_rope.py](../../../../sources/skyzh__tiny-llm/tests_refsol/test_rope.py)<br>[tests_refsol/test_week_1_day_1.py](../../../../sources/skyzh__tiny-llm/tests_refsol/test_week_1_day_1.py)<br>[tests_refsol/test_week_1_day_2.py](../../../../sources/skyzh__tiny-llm/tests_refsol/test_week_1_day_2.py)<br>[tests_refsol/test_week_1_day_3.py](../../../../sources/skyzh__tiny-llm/tests_refsol/test_week_1_day_3.py)<br>[tests_refsol/test_week_1_day_4.py](../../../../sources/skyzh__tiny-llm/tests_refsol/test_week_1_day_4.py) |
| CI workflows | 3 | [.github/workflows/macos.yml](../../../../sources/skyzh__tiny-llm/.github/workflows/macos.yml)<br>[.github/workflows/main.yml](../../../../sources/skyzh__tiny-llm/.github/workflows/main.yml)<br>[.github/workflows/spell-check.yml](../../../../sources/skyzh__tiny-llm/.github/workflows/spell-check.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/skyzh__tiny-llm/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `main.py`, `pyproject.toml`, `.github/workflows/macos.yml`.
2. Trace execution through entrypoints: `main.py`.
3. Map agent/tool runtime through: `AGENTS.md`.
4. Inspect retrieval/memory/indexing through: `src/tiny_llm_ref/embedding.py`, `src/tiny_llm/embedding.py`.
5. Verify behavior through test/eval files: `bench.py`, `tests_refsol/test_rope.py`, `tests_refsol/test_week_1_day_1.py`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 A course of learning LLM inference serving on Apple Silicon for systems engineers build a tiny vLLM + Qwen.. 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, LICENSE, torch이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
