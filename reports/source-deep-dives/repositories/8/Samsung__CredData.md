# Samsung/CredData Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

CredData is a set of files including credentials in open source projects. CredData includes suspicious lines with manual review results and more information such as credential types for each suspicious line. CredData can be used to develop new tools or improve existing tools. Furthermore, using the benchmark result of the CredData, users can choose a proper tool among open source credential scanning tools according to their use case.

## 요약

- 조사 단위: `sources/Samsung__CredData` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 389 files, 14 directories, depth score 87, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 entrypoints=benchmark/__main__.py, benchmark/scanner/bin/wraith/default.yaml, benchmark/scanner/bin/wraith/wraith이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Samsung/CredData |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 92 |
| Forks | 33 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/Samsung__CredData](../../../../sources/Samsung__CredData) |
| Existing report | [reports/korea-trending/repositories/Samsung__CredData.md](../../../korea-trending/repositories/Samsung__CredData.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 389 / 14 |
| Max observed depth | 5 |
| Top directories | .ci, .github, benchmark, images, meta |
| Top extensions | .csv: 333, .py: 31, (none): 7, .json: 4, .sh: 3, .yaml: 3, .md: 2, .png: 2, .txt: 2, .yml: 2 |
| Source patterns | cli-first, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| benchmark | validation surface | 1 |
| images | top-level component | 1 |
| meta | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


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
| entrypoints | [benchmark/__main__.py](../../../../sources/Samsung__CredData/benchmark/__main__.py) | entrypoints signal |
| entrypoints | [benchmark/scanner/bin/wraith/default.yaml](../../../../sources/Samsung__CredData/benchmark/scanner/bin/wraith/default.yaml) | entrypoints signal |
| entrypoints | [benchmark/scanner/bin/wraith/wraith](../../../../sources/Samsung__CredData/benchmark/scanner/bin/wraith/wraith) | entrypoints signal |
| entrypoints | [benchmark/scanner/bin/trufflehog/trufflehog](../../../../sources/Samsung__CredData/benchmark/scanner/bin/trufflehog/trufflehog) | entrypoints signal |
| config | [requirements.txt](../../../../sources/Samsung__CredData/requirements.txt) | config signal |
| docs | [README.md](../../../../sources/Samsung__CredData/README.md) | docs signal |
| docs | [.ci/README.md](../../../../sources/Samsung__CredData/.ci/README.md) | docs signal |
| eval | [test_download_data.py](../../../../sources/Samsung__CredData/test_download_data.py) | eval signal |
| eval | [test_obfuscate_creds.py](../../../../sources/Samsung__CredData/test_obfuscate_creds.py) | eval signal |
| eval | [benchmark/__init__.py](../../../../sources/Samsung__CredData/benchmark/__init__.py) | eval signal |
| ci | [.github/workflows/review.yml](../../../../sources/Samsung__CredData/.github/workflows/review.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 8 | [benchmark/__main__.py](../../../../sources/Samsung__CredData/benchmark/__main__.py)<br>[benchmark/scanner/bin/wraith/default.yaml](../../../../sources/Samsung__CredData/benchmark/scanner/bin/wraith/default.yaml)<br>[benchmark/scanner/bin/wraith/wraith](../../../../sources/Samsung__CredData/benchmark/scanner/bin/wraith/wraith)<br>[benchmark/scanner/bin/trufflehog/trufflehog](../../../../sources/Samsung__CredData/benchmark/scanner/bin/trufflehog/trufflehog)<br>[benchmark/scanner/bin/shhgit/config.yaml](../../../../sources/Samsung__CredData/benchmark/scanner/bin/shhgit/config.yaml)<br>[benchmark/scanner/bin/shhgit/shhgit](../../../../sources/Samsung__CredData/benchmark/scanner/bin/shhgit/shhgit)<br>[benchmark/scanner/bin/gitleaks/gitleaks](../../../../sources/Samsung__CredData/benchmark/scanner/bin/gitleaks/gitleaks)<br>[benchmark/scanner/bin/credential_digger/rules.yml](../../../../sources/Samsung__CredData/benchmark/scanner/bin/credential_digger/rules.yml) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 1 | [requirements.txt](../../../../sources/Samsung__CredData/requirements.txt) |
| eval | 30 | [test_download_data.py](../../../../sources/Samsung__CredData/test_download_data.py)<br>[test_obfuscate_creds.py](../../../../sources/Samsung__CredData/test_obfuscate_creds.py)<br>[benchmark/__init__.py](../../../../sources/Samsung__CredData/benchmark/__init__.py)<br>[benchmark/__main__.py](../../../../sources/Samsung__CredData/benchmark/__main__.py)<br>[benchmark/app.py](../../../../sources/Samsung__CredData/benchmark/app.py)<br>[benchmark/scanner/__init__.py](../../../../sources/Samsung__CredData/benchmark/scanner/__init__.py)<br>[benchmark/scanner/credential_digger.py](../../../../sources/Samsung__CredData/benchmark/scanner/credential_digger.py)<br>[benchmark/scanner/credsweeper.py](../../../../sources/Samsung__CredData/benchmark/scanner/credsweeper.py) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/review.yml](../../../../sources/Samsung__CredData/.github/workflows/review.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 2 | [README.md](../../../../sources/Samsung__CredData/README.md)<br>[.ci/README.md](../../../../sources/Samsung__CredData/.ci/README.md) |
| config | 1 | [requirements.txt](../../../../sources/Samsung__CredData/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 30 | [test_download_data.py](../../../../sources/Samsung__CredData/test_download_data.py)<br>[test_obfuscate_creds.py](../../../../sources/Samsung__CredData/test_obfuscate_creds.py)<br>[benchmark/__init__.py](../../../../sources/Samsung__CredData/benchmark/__init__.py)<br>[benchmark/__main__.py](../../../../sources/Samsung__CredData/benchmark/__main__.py)<br>[benchmark/app.py](../../../../sources/Samsung__CredData/benchmark/app.py)<br>[benchmark/scanner/__init__.py](../../../../sources/Samsung__CredData/benchmark/scanner/__init__.py) |
| CI workflows | 1 | [.github/workflows/review.yml](../../../../sources/Samsung__CredData/.github/workflows/review.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `benchmark/__main__.py`, `benchmark/scanner/bin/wraith/default.yaml`, `benchmark/scanner/bin/wraith/wraith`.
2. Trace execution through entrypoints: `benchmark/__main__.py`, `benchmark/scanner/bin/wraith/default.yaml`, `benchmark/scanner/bin/wraith/wraith`.
3. Verify behavior through test/eval files: `test_download_data.py`, `test_obfuscate_creds.py`, `benchmark/__init__.py`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 CredData is a set of files including credentials in open source projects. CredData includes suspicious lines with manual. 핵심 구조 신호는 Python, requirements.txt, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
