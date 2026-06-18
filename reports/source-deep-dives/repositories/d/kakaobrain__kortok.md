# kakaobrain/kortok Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

The code and models for "An Empirical Study of Tokenization Strategies for Various Korean NLP Tasks" (AACL-IJCNLP 2020)

## 요약

- 조사 단위: `sources/kakaobrain__kortok` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 170 files, 37 directories, depth score 75, key references 9개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 config=pyproject.toml, requirements-dev.txt, requirements.txt이고, 의존성 단서는 torch, transformers, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | kakaobrain/kortok |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 119 |
| Forks | 10 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/kakaobrain__kortok](../../../../sources/kakaobrain__kortok) |
| Existing report | [reports/korea-trending/repositories/kakaobrain__kortok.md](../../../korea-trending/repositories/kakaobrain__kortok.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 170 / 37 |
| Max observed depth | 4 |
| Top directories | dataset, resources, scripts, tasks, tokenizer |
| Top extensions | .py: 51, .json: 48, .vocab: 36, .tsv: 13, .model: 11, .txt: 5, .md: 2, (none): 2, .cfg: 1, .toml: 1 |
| Source patterns | retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| dataset | top-level component | 1 |
| resources | top-level component | 1 |
| scripts | top-level component | 1 |
| tasks | top-level component | 1 |
| tokenizer | top-level component | 1 |


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
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| config | [pyproject.toml](../../../../sources/kakaobrain__kortok/pyproject.toml) | config signal |
| config | [requirements-dev.txt](../../../../sources/kakaobrain__kortok/requirements-dev.txt) | config signal |
| config | [requirements.txt](../../../../sources/kakaobrain__kortok/requirements.txt) | config signal |
| docs | [README.md](../../../../sources/kakaobrain__kortok/README.md) | docs signal |
| docs | [scripts/README.md](../../../../sources/kakaobrain__kortok/scripts/README.md) | docs signal |
| eval | [dataset/nlu_tasks/paws/sample_test_2k.tsv](../../../../sources/kakaobrain__kortok/dataset/nlu_tasks/paws/sample_test_2k.tsv) | eval signal |
| eval | [dataset/nlu_tasks/nsmc/sample_test.tsv](../../../../sources/kakaobrain__kortok/dataset/nlu_tasks/nsmc/sample_test.tsv) | eval signal |
| eval | [dataset/nlu_tasks/korsts/sample_sts-test.tsv](../../../../sources/kakaobrain__kortok/dataset/nlu_tasks/korsts/sample_sts-test.tsv) | eval signal |
| eval | [dataset/nlu_tasks/kornli/sample_xnli.test.ko.tsv](../../../../sources/kakaobrain__kortok/dataset/nlu_tasks/kornli/sample_xnli.test.ko.tsv) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 3 | [dataset/wiki/sample_en-wiki-200420.txt](../../../../sources/kakaobrain__kortok/dataset/wiki/sample_en-wiki-200420.txt)<br>[dataset/wiki/sample_ko-wiki-200420.txt](../../../../sources/kakaobrain__kortok/dataset/wiki/sample_ko-wiki-200420.txt)<br>[dataset/wiki/mecab_tokenized/sample_ko-wiki-200420.txt](../../../../sources/kakaobrain__kortok/dataset/wiki/mecab_tokenized/sample_ko-wiki-200420.txt) |
| spec | 2 | [requirements-dev.txt](../../../../sources/kakaobrain__kortok/requirements-dev.txt)<br>[requirements.txt](../../../../sources/kakaobrain__kortok/requirements.txt) |
| eval | 4 | [dataset/nlu_tasks/paws/sample_test_2k.tsv](../../../../sources/kakaobrain__kortok/dataset/nlu_tasks/paws/sample_test_2k.tsv)<br>[dataset/nlu_tasks/nsmc/sample_test.tsv](../../../../sources/kakaobrain__kortok/dataset/nlu_tasks/nsmc/sample_test.tsv)<br>[dataset/nlu_tasks/korsts/sample_sts-test.tsv](../../../../sources/kakaobrain__kortok/dataset/nlu_tasks/korsts/sample_sts-test.tsv)<br>[dataset/nlu_tasks/kornli/sample_xnli.test.ko.tsv](../../../../sources/kakaobrain__kortok/dataset/nlu_tasks/kornli/sample_xnli.test.ko.tsv) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 2 | [README.md](../../../../sources/kakaobrain__kortok/README.md)<br>[scripts/README.md](../../../../sources/kakaobrain__kortok/scripts/README.md) |
| config | 3 | [pyproject.toml](../../../../sources/kakaobrain__kortok/pyproject.toml)<br>[requirements-dev.txt](../../../../sources/kakaobrain__kortok/requirements-dev.txt)<br>[requirements.txt](../../../../sources/kakaobrain__kortok/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 4 | [dataset/nlu_tasks/paws/sample_test_2k.tsv](../../../../sources/kakaobrain__kortok/dataset/nlu_tasks/paws/sample_test_2k.tsv)<br>[dataset/nlu_tasks/nsmc/sample_test.tsv](../../../../sources/kakaobrain__kortok/dataset/nlu_tasks/nsmc/sample_test.tsv)<br>[dataset/nlu_tasks/korsts/sample_sts-test.tsv](../../../../sources/kakaobrain__kortok/dataset/nlu_tasks/korsts/sample_sts-test.tsv)<br>[dataset/nlu_tasks/kornli/sample_xnli.test.ko.tsv](../../../../sources/kakaobrain__kortok/dataset/nlu_tasks/kornli/sample_xnli.test.ko.tsv) |
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

1. Start from key references: `pyproject.toml`, `requirements-dev.txt`, `requirements.txt`.
2. Inspect retrieval/memory/indexing through: `dataset/wiki/sample_en-wiki-200420.txt`, `dataset/wiki/sample_ko-wiki-200420.txt`, `dataset/wiki/mecab_tokenized/sample_ko-wiki-200420.txt`.
3. Verify behavior through test/eval files: `dataset/nlu_tasks/paws/sample_test_2k.tsv`, `dataset/nlu_tasks/nsmc/sample_test.tsv`, `dataset/nlu_tasks/korsts/sample_sts-test.tsv`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 The code and models for "An Empirical Study of Tokenization Strategies for Various Korean NLP Tasks" AACL IJCNLP 2020. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, README.md, LICENSE, torch이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
