# lm-sys/FastChat Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 219 files, 35 directories.

## 요약

- 조사 단위: `sources/lm-sys__FastChat` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 219 files, 35 directories, depth score 87, key references 8개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

평가/관측/품질 관점에서 api/server, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 eval=tests/killall_python.sh, tests/launch_openai_api_test_server.py, tests/load_test.py이고, 의존성 단서는 openai, anthropic, fastapi, pydantic, torch, transformers, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 quality and evaluation comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | lm-sys/FastChat |
| Topic | Evals, Observability, and Quality / 평가/관측/품질 |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/lm-sys__FastChat](../../../../sources/lm-sys__FastChat) |
| Existing report | [reports/clone-structures/lm-sys__FastChat.md](../../../clone-structures/lm-sys__FastChat.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 219 / 35 |
| Max observed depth | 6 |
| Top directories | .github, assets, data, docker, docs, fastchat, playground, scripts, tests |
| Top extensions | .py: 148, .md: 32, .sh: 9, .jsonl: 5, .png: 5, .json: 4, (none): 4, .jpg: 2, .yaml: 2, .yml: 2, .conf: 1, .gif: 1 |
| Source patterns | api/server, retrieval/vector path, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 24 |
| tests | validation surface | 12 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| data | top-level component | 1 |
| docker | documentation surface | 1 |
| fastchat | top-level component | 1 |
| playground | top-level component | 1 |
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
| modelRuntime | torch, transformers |
| webRuntime | fastapi |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| eval | [tests/killall_python.sh](../../../../sources/lm-sys__FastChat/tests/killall_python.sh) | eval signal |
| eval | [tests/launch_openai_api_test_server.py](../../../../sources/lm-sys__FastChat/tests/launch_openai_api_test_server.py) | eval signal |
| eval | [tests/load_test.py](../../../../sources/lm-sys__FastChat/tests/load_test.py) | eval signal |
| eval | [tests/README.md](../../../../sources/lm-sys__FastChat/tests/README.md) | eval signal |
| config | [pyproject.toml](../../../../sources/lm-sys__FastChat/pyproject.toml) | config signal |
| ci | [.github/workflows/python-package.yml](../../../../sources/lm-sys__FastChat/.github/workflows/python-package.yml) | ci signal |
| container | [docker/docker-compose.yml](../../../../sources/lm-sys__FastChat/docker/docker-compose.yml) | container support |
| container | [docker/Dockerfile](../../../../sources/lm-sys__FastChat/docker/Dockerfile) | container support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 4 | [playground/test_embedding/README.md](../../../../sources/lm-sys__FastChat/playground/test_embedding/README.md)<br>[playground/test_embedding/test_classification.py](../../../../sources/lm-sys__FastChat/playground/test_embedding/test_classification.py)<br>[playground/test_embedding/test_semantic_search.py](../../../../sources/lm-sys__FastChat/playground/test_embedding/test_semantic_search.py)<br>[playground/test_embedding/test_sentence_similarity.py](../../../../sources/lm-sys__FastChat/playground/test_embedding/test_sentence_similarity.py) |
| spec | 0 | not obvious |
| eval | 66 | [tests/killall_python.sh](../../../../sources/lm-sys__FastChat/tests/killall_python.sh)<br>[tests/launch_openai_api_test_server.py](../../../../sources/lm-sys__FastChat/tests/launch_openai_api_test_server.py)<br>[tests/load_test.py](../../../../sources/lm-sys__FastChat/tests/load_test.py)<br>[tests/README.md](../../../../sources/lm-sys__FastChat/tests/README.md)<br>[tests/test_cli_inputs.txt](../../../../sources/lm-sys__FastChat/tests/test_cli_inputs.txt)<br>[tests/test_cli.py](../../../../sources/lm-sys__FastChat/tests/test_cli.py)<br>[tests/test_image_utils.py](../../../../sources/lm-sys__FastChat/tests/test_image_utils.py)<br>[tests/test_openai_api.py](../../../../sources/lm-sys__FastChat/tests/test_openai_api.py) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/python-package.yml](../../../../sources/lm-sys__FastChat/.github/workflows/python-package.yml) |
| container | 2 | [docker/docker-compose.yml](../../../../sources/lm-sys__FastChat/docker/docker-compose.yml)<br>[docker/Dockerfile](../../../../sources/lm-sys__FastChat/docker/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 30 | [README.md](../../../../sources/lm-sys__FastChat/README.md)<br>[tests/README.md](../../../../sources/lm-sys__FastChat/tests/README.md)<br>[playground/test_embedding/README.md](../../../../sources/lm-sys__FastChat/playground/test_embedding/README.md)<br>[fastchat/serve/monitor/vote_time_stats/README.md](../../../../sources/lm-sys__FastChat/fastchat/serve/monitor/vote_time_stats/README.md)<br>[fastchat/serve/monitor/classify/README.md](../../../../sources/lm-sys__FastChat/fastchat/serve/monitor/classify/README.md)<br>[fastchat/serve/gateway/README.md](../../../../sources/lm-sys__FastChat/fastchat/serve/gateway/README.md)<br>[fastchat/llm_judge/README.md](../../../../sources/lm-sys__FastChat/fastchat/llm_judge/README.md)<br>[docs/arena.md](../../../../sources/lm-sys__FastChat/docs/arena.md) |
| config | 1 | [pyproject.toml](../../../../sources/lm-sys__FastChat/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 66 | [tests/killall_python.sh](../../../../sources/lm-sys__FastChat/tests/killall_python.sh)<br>[tests/launch_openai_api_test_server.py](../../../../sources/lm-sys__FastChat/tests/launch_openai_api_test_server.py)<br>[tests/load_test.py](../../../../sources/lm-sys__FastChat/tests/load_test.py)<br>[tests/README.md](../../../../sources/lm-sys__FastChat/tests/README.md)<br>[tests/test_cli_inputs.txt](../../../../sources/lm-sys__FastChat/tests/test_cli_inputs.txt)<br>[tests/test_cli.py](../../../../sources/lm-sys__FastChat/tests/test_cli.py) |
| CI workflows | 1 | [.github/workflows/python-package.yml](../../../../sources/lm-sys__FastChat/.github/workflows/python-package.yml) |
| Containers / deploy | 2 | [docker/docker-compose.yml](../../../../sources/lm-sys__FastChat/docker/docker-compose.yml)<br>[docker/Dockerfile](../../../../sources/lm-sys__FastChat/docker/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/killall_python.sh`, `tests/launch_openai_api_test_server.py`, `tests/load_test.py`.
2. Inspect retrieval/memory/indexing through: `playground/test_embedding/README.md`, `playground/test_embedding/test_classification.py`, `playground/test_embedding/test_semantic_search.py`.
3. Verify behavior through test/eval files: `tests/killall_python.sh`, `tests/launch_openai_api_test_server.py`, `tests/load_test.py`.

## Existing Repository Insight

평가/관측/품질 관점에서 Local clone structure analysis 219 files, 35 directories.. 핵심 구조 신호는 pyproject.toml, README.md, LICENSE, openai, anthropic, fastapi이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 평가/관측/품질 레포입니다. 활용 관점은 quality and evaluation comparison point이고, 후속 확인 포인트는 license metadata missing입니다.
