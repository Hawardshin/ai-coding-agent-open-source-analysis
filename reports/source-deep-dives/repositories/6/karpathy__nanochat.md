# karpathy/nanochat Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

The best ChatGPT that $100 can buy.

## 요약

- 조사 단위: `sources/karpathy__nanochat` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 56 files, 9 directories, depth score 62, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 api/server, agent/tool runtime, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 config=pyproject.toml, uv.lock이고, 의존성 단서는 fastapi, torch, transformers, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | karpathy/nanochat |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | global |
| Language | Python |
| Stars | 55166 |
| Forks | 7579 |
| License | MIT |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/karpathy__nanochat](../../../../sources/karpathy__nanochat) |
| Existing report | [reports/global-trending/repositories/karpathy__nanochat.md](../../../global-trending/repositories/karpathy__nanochat.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 56 / 9 |
| Max observed depth | 4 |
| Top directories | .claude, dev, nanochat, runs, scripts, tasks, tests |
| Top extensions | .py: 36, .md: 4, .sh: 4, (none): 3, .html: 2, .ipynb: 2, .png: 2, .lock: 1, .svg: 1, .toml: 1 |
| Source patterns | api/server, agent/tool runtime, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 3 |
| dev | top-level component | 1 |
| nanochat | top-level component | 1 |
| runs | top-level component | 1 |
| scripts | top-level component | 1 |
| tasks | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | torch, transformers |
| webRuntime | fastapi |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| config | [pyproject.toml](../../../../sources/karpathy__nanochat/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/karpathy__nanochat/uv.lock) | config signal |
| docs | [README.md](../../../../sources/karpathy__nanochat/README.md) | docs signal |
| eval | [tests/test_attention_fallback.py](../../../../sources/karpathy__nanochat/tests/test_attention_fallback.py) | eval signal |
| eval | [tests/test_engine.py](../../../../sources/karpathy__nanochat/tests/test_engine.py) | eval signal |
| eval | [scripts/base_eval.py](../../../../sources/karpathy__nanochat/scripts/base_eval.py) | eval signal |
| eval | [scripts/chat_eval.py](../../../../sources/karpathy__nanochat/scripts/chat_eval.py) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 1 | [.claude/skills/read-arxiv-paper/SKILL.md](../../../../sources/karpathy__nanochat/.claude/skills/read-arxiv-paper/SKILL.md) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 7 | [tests/test_attention_fallback.py](../../../../sources/karpathy__nanochat/tests/test_attention_fallback.py)<br>[tests/test_engine.py](../../../../sources/karpathy__nanochat/tests/test_engine.py)<br>[scripts/base_eval.py](../../../../sources/karpathy__nanochat/scripts/base_eval.py)<br>[scripts/chat_eval.py](../../../../sources/karpathy__nanochat/scripts/chat_eval.py)<br>[scripts/tok_eval.py](../../../../sources/karpathy__nanochat/scripts/tok_eval.py)<br>[nanochat/core_eval.py](../../../../sources/karpathy__nanochat/nanochat/core_eval.py)<br>[nanochat/loss_eval.py](../../../../sources/karpathy__nanochat/nanochat/loss_eval.py) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/karpathy__nanochat/README.md) |
| config | 2 | [pyproject.toml](../../../../sources/karpathy__nanochat/pyproject.toml)<br>[uv.lock](../../../../sources/karpathy__nanochat/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 7 | [tests/test_attention_fallback.py](../../../../sources/karpathy__nanochat/tests/test_attention_fallback.py)<br>[tests/test_engine.py](../../../../sources/karpathy__nanochat/tests/test_engine.py)<br>[scripts/base_eval.py](../../../../sources/karpathy__nanochat/scripts/base_eval.py)<br>[scripts/chat_eval.py](../../../../sources/karpathy__nanochat/scripts/chat_eval.py)<br>[scripts/tok_eval.py](../../../../sources/karpathy__nanochat/scripts/tok_eval.py)<br>[nanochat/core_eval.py](../../../../sources/karpathy__nanochat/nanochat/core_eval.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `pyproject.toml`, `uv.lock`, `README.md`.
2. Map agent/tool runtime through: `.claude/skills/read-arxiv-paper/SKILL.md`.
3. Verify behavior through test/eval files: `tests/test_attention_fallback.py`, `tests/test_engine.py`, `scripts/base_eval.py`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 The best ChatGPT that $100 can buy.. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, fastapi, torch이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 ci signal not obvious, needs deeper structural scan입니다.
