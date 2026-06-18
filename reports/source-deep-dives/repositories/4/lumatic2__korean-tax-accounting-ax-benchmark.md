# lumatic2/korean-tax-accounting-ax-benchmark Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Korean accounting and tax benchmark for evaluating evidence-grounded AI systems

## 요약

- 조사 단위: `sources/lumatic2__korean-tax-accounting-ax-benchmark` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 121 files, 21 directories, depth score 84, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

평가/관측/품질 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 eval=tests/__init__.py, tests/test_agent.py, tests/test_aggregate.py이고, 의존성 단서는 openai, anthropic, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 quality and evaluation comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | lumatic2/korean-tax-accounting-ax-benchmark |
| Topic | Evals, Observability, and Quality / 평가/관측/품질 |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/lumatic2__korean-tax-accounting-ax-benchmark](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark) |
| Existing report | [reports/korea-trending/repositories/lumatic2__korean-tax-accounting-ax-benchmark.md](../../../korea-trending/repositories/lumatic2__korean-tax-accounting-ax-benchmark.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 121 / 21 |
| Max observed depth | 5 |
| Top directories | config, data, docs, leaderboard, scripts, src, tests |
| Top extensions | .py: 58, .md: 40, .json: 5, (none): 5, .jsonl: 3, .jsx: 2, .css: 1, .lock: 1, .mjs: 1, .png: 1, .sh: 1, .svg: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 56 |
| tests | validation surface | 19 |
| src | source boundary | 6 |
| config | top-level component | 1 |
| data | top-level component | 1 |
| leaderboard | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
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
| eval | [tests/__init__.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/__init__.py) | eval signal |
| eval | [tests/test_agent.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/test_agent.py) | eval signal |
| eval | [tests/test_aggregate.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/test_aggregate.py) | eval signal |
| eval | [tests/test_claude_cli.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/test_claude_cli.py) | eval signal |
| config | [pyproject.toml](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/uv.lock) | config signal |
| config | [leaderboard/package.json](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/leaderboard/package.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 4 | [src/ktaxbench/runner.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/src/ktaxbench/runner.py)<br>[src/ktaxbench/agent/__init__.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/src/ktaxbench/agent/__init__.py)<br>[src/ktaxbench/agent/tools.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/src/ktaxbench/agent/tools.py)<br>[docs/findings/agent-tool-forcing.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/docs/findings/agent-tool-forcing.md) |
| mcp | 0 | not obvious |
| retrieval | 4 | [src/ktaxbench/rag/__init__.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/src/ktaxbench/rag/__init__.py)<br>[src/ktaxbench/rag/retriever.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/src/ktaxbench/rag/retriever.py)<br>[scripts/smoke_rag.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/scripts/smoke_rag.py)<br>[docs/findings/m3-rag-vs-closed-book.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/docs/findings/m3-rag-vs-closed-book.md) |
| spec | 14 | [docs/ARCHITECTURE.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/docs/ARCHITECTURE.md)<br>[docs/benchmark-design-principles.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/docs/benchmark-design-principles.md)<br>[docs/PRD.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/docs/PRD.md)<br>[docs/adr/0001-vendor-not-import-taxagent.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/docs/adr/0001-vendor-not-import-taxagent.md)<br>[docs/adr/0002-claude-cli-first.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/docs/adr/0002-claude-cli-first.md)<br>[docs/adr/0003-calculation-as-rule-proxy.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/docs/adr/0003-calculation-as-rule-proxy.md)<br>[docs/adr/0005-agent-react-loop.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/docs/adr/0005-agent-react-loop.md)<br>[docs/adr/0006-agent-forced-mode.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/docs/adr/0006-agent-forced-mode.md) |
| eval | 23 | [tests/__init__.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/__init__.py)<br>[tests/test_agent.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/test_agent.py)<br>[tests/test_aggregate.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/test_aggregate.py)<br>[tests/test_claude_cli.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/test_claude_cli.py)<br>[tests/test_code_grader.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/test_code_grader.py)<br>[tests/test_codex_cli.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/test_codex_cli.py)<br>[tests/test_gemini_cli.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/test_gemini_cli.py)<br>[tests/test_insert_canary.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/test_insert_canary.py) |
| security | 1 | [docs/adr/0009-leaderboard-submission-policy.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/docs/adr/0009-leaderboard-submission-policy.md) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 39 | [README.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/README.md)<br>[leaderboard/README.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/leaderboard/README.md)<br>[leaderboard/public/README.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/leaderboard/public/README.md)<br>[leaderboard/public/data/public/README.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/leaderboard/public/data/public/README.md)<br>[docs/ARCHITECTURE.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/docs/ARCHITECTURE.md)<br>[docs/benchmark-design-principles.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/docs/benchmark-design-principles.md)<br>[docs/benchmark-schema.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/docs/benchmark-schema.md)<br>[docs/data-strategy.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/docs/data-strategy.md) |
| config | 3 | [pyproject.toml](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/pyproject.toml)<br>[uv.lock](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/uv.lock)<br>[leaderboard/package.json](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/leaderboard/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 23 | [tests/__init__.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/__init__.py)<br>[tests/test_agent.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/test_agent.py)<br>[tests/test_aggregate.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/test_aggregate.py)<br>[tests/test_claude_cli.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/test_claude_cli.py)<br>[tests/test_code_grader.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/test_code_grader.py)<br>[tests/test_codex_cli.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/test_codex_cli.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [docs/adr/0009-leaderboard-submission-policy.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/docs/adr/0009-leaderboard-submission-policy.md) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/__init__.py`, `tests/test_agent.py`, `tests/test_aggregate.py`.
2. Map agent/tool runtime through: `src/ktaxbench/runner.py`, `src/ktaxbench/agent/__init__.py`, `src/ktaxbench/agent/tools.py`.
3. Inspect retrieval/memory/indexing through: `src/ktaxbench/rag/__init__.py`, `src/ktaxbench/rag/retriever.py`, `scripts/smoke_rag.py`.
4. Verify behavior through test/eval files: `tests/__init__.py`, `tests/test_agent.py`, `tests/test_aggregate.py`.

## Existing Repository Insight

평가/관측/품질 관점에서 Korean accounting and tax benchmark for evaluating evidence grounded AI systems. 핵심 구조 신호는 Python, pyproject.toml, README.md, openai, anthropic, tests이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 평가/관측/품질 레포입니다. 활용 관점은 quality and evaluation comparison point이고, 후속 확인 포인트는 ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
