# SearchSavior/OpenArc Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Inference engine for Intel devices. Serve LLMs, VLMs, Whisper, Kokoro-TTS, Embedding and Rerank models over OpenAI endpoints.

## 요약

- 조사 단위: `sources/SearchSavior__OpenArc` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 140 files, 33 directories, depth score 105, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/server/main.py, src/cli/main.py이고, 의존성 단서는 openai, fastapi, pydantic, click, torch, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | SearchSavior/OpenArc |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | Python |
| Stars | 461 |
| Forks | 38 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/SearchSavior__OpenArc](../../../../sources/SearchSavior__OpenArc) |
| Existing report | [reports/global-trending/repositories/SearchSavior__OpenArc.md](../../../global-trending/repositories/SearchSavior__OpenArc.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 140 / 33 |
| Max observed depth | 5 |
| Top directories | .github, assets, benchmark, demos, docs, examples, gpu-metrics, models, src, tests |
| Top extensions | .py: 105, .md: 7, .png: 7, (none): 7, .toml: 3, .wav: 2, .yaml: 2, .bat: 1, .cpp: 1, .ipynb: 1, .lock: 1, .sh: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 27 |
| docs | documentation surface | 6 |
| src | source boundary | 6 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| benchmark | validation surface | 1 |
| demos | top-level component | 1 |
| examples | top-level component | 1 |
| gpu-metrics | top-level component | 1 |
| models | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | openarc | openarc |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | torch |
| webRuntime | fastapi |
| developerSurface | click |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [src/server/main.py](../../../../sources/SearchSavior__OpenArc/src/server/main.py) | entrypoints signal |
| entrypoints | [src/cli/main.py](../../../../sources/SearchSavior__OpenArc/src/cli/main.py) | entrypoints signal |
| container | [docker-compose.yaml](../../../../sources/SearchSavior__OpenArc/docker-compose.yaml) | container signal |
| container | [Dockerfile](../../../../sources/SearchSavior__OpenArc/Dockerfile) | container signal |
| config | [pyproject.toml](../../../../sources/SearchSavior__OpenArc/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/SearchSavior__OpenArc/uv.lock) | config signal |
| config | [gpu-metrics/pyproject.toml](../../../../sources/SearchSavior__OpenArc/gpu-metrics/pyproject.toml) | config signal |
| ci | [.github/workflows/build-container-image.yaml](../../../../sources/SearchSavior__OpenArc/.github/workflows/build-container-image.yaml) | ci signal |
| ci | [.github/workflows/docs.yml](../../../../sources/SearchSavior__OpenArc/.github/workflows/docs.yml) | ci signal |
| eval | [test_gpu_metrics.py](../../../../sources/SearchSavior__OpenArc/test_gpu_metrics.py) | eval support |
| eval | [tests/dedication.png](../../../../sources/SearchSavior__OpenArc/tests/dedication.png) | eval support |
| instruction | [AGENTS.md](../../../../sources/SearchSavior__OpenArc/AGENTS.md) | instruction support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [src/server/main.py](../../../../sources/SearchSavior__OpenArc/src/server/main.py)<br>[src/cli/main.py](../../../../sources/SearchSavior__OpenArc/src/cli/main.py) |
| agentRuntime | 3 | [AGENTS.md](../../../../sources/SearchSavior__OpenArc/AGENTS.md)<br>[src/cli/groups/tool.py](../../../../sources/SearchSavior__OpenArc/src/cli/groups/tool.py)<br>[benchmark/context_overflow.py](../../../../sources/SearchSavior__OpenArc/benchmark/context_overflow.py) |
| mcp | 0 | not obvious |
| retrieval | 1 | [docs/index.md](../../../../sources/SearchSavior__OpenArc/docs/index.md) |
| spec | 0 | not obvious |
| eval | 31 | [test_gpu_metrics.py](../../../../sources/SearchSavior__OpenArc/test_gpu_metrics.py)<br>[tests/dedication.png](../../../../sources/SearchSavior__OpenArc/tests/dedication.png)<br>[tests/john_steakly_armor_the_drop.wav](../../../../sources/SearchSavior__OpenArc/tests/john_steakly_armor_the_drop.wav)<br>[tests/litany_against_fear_dune.wav](../../../../sources/SearchSavior__OpenArc/tests/litany_against_fear_dune.wav)<br>[tests/unit/test_cli_add_unit.py](../../../../sources/SearchSavior__OpenArc/tests/unit/test_cli_add_unit.py)<br>[tests/unit/test_model_registry_integration.py](../../../../sources/SearchSavior__OpenArc/tests/unit/test_model_registry_integration.py)<br>[tests/unit/test_model_registry_unit.py](../../../../sources/SearchSavior__OpenArc/tests/unit/test_model_registry_unit.py)<br>[tests/unit/test_openai_audio_transcriptions_unit.py](../../../../sources/SearchSavior__OpenArc/tests/unit/test_openai_audio_transcriptions_unit.py) |
| security | 0 | not obvious |
| ci | 2 | [.github/workflows/build-container-image.yaml](../../../../sources/SearchSavior__OpenArc/.github/workflows/build-container-image.yaml)<br>[.github/workflows/docs.yml](../../../../sources/SearchSavior__OpenArc/.github/workflows/docs.yml) |
| container | 2 | [docker-compose.yaml](../../../../sources/SearchSavior__OpenArc/docker-compose.yaml)<br>[Dockerfile](../../../../sources/SearchSavior__OpenArc/Dockerfile) |
| instruction | 1 | [AGENTS.md](../../../../sources/SearchSavior__OpenArc/AGENTS.md) |
| docs | 5 | [README.md](../../../../sources/SearchSavior__OpenArc/README.md)<br>[docs/commands.md](../../../../sources/SearchSavior__OpenArc/docs/commands.md)<br>[docs/index.md](../../../../sources/SearchSavior__OpenArc/docs/index.md)<br>[docs/install.md](../../../../sources/SearchSavior__OpenArc/docs/install.md)<br>[docs/models.md](../../../../sources/SearchSavior__OpenArc/docs/models.md) |
| config | 3 | [pyproject.toml](../../../../sources/SearchSavior__OpenArc/pyproject.toml)<br>[uv.lock](../../../../sources/SearchSavior__OpenArc/uv.lock)<br>[gpu-metrics/pyproject.toml](../../../../sources/SearchSavior__OpenArc/gpu-metrics/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 31 | [test_gpu_metrics.py](../../../../sources/SearchSavior__OpenArc/test_gpu_metrics.py)<br>[tests/dedication.png](../../../../sources/SearchSavior__OpenArc/tests/dedication.png)<br>[tests/john_steakly_armor_the_drop.wav](../../../../sources/SearchSavior__OpenArc/tests/john_steakly_armor_the_drop.wav)<br>[tests/litany_against_fear_dune.wav](../../../../sources/SearchSavior__OpenArc/tests/litany_against_fear_dune.wav)<br>[tests/unit/test_cli_add_unit.py](../../../../sources/SearchSavior__OpenArc/tests/unit/test_cli_add_unit.py)<br>[tests/unit/test_model_registry_integration.py](../../../../sources/SearchSavior__OpenArc/tests/unit/test_model_registry_integration.py) |
| CI workflows | 2 | [.github/workflows/build-container-image.yaml](../../../../sources/SearchSavior__OpenArc/.github/workflows/build-container-image.yaml)<br>[.github/workflows/docs.yml](../../../../sources/SearchSavior__OpenArc/.github/workflows/docs.yml) |
| Containers / deploy | 2 | [docker-compose.yaml](../../../../sources/SearchSavior__OpenArc/docker-compose.yaml)<br>[Dockerfile](../../../../sources/SearchSavior__OpenArc/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/SearchSavior__OpenArc/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/server/main.py`, `src/cli/main.py`, `docker-compose.yaml`.
2. Trace execution through entrypoints: `src/server/main.py`, `src/cli/main.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `src/cli/groups/tool.py`, `benchmark/context_overflow.py`.
4. Inspect retrieval/memory/indexing through: `docs/index.md`.
5. Verify behavior through test/eval files: `test_gpu_metrics.py`, `tests/dedication.png`, `tests/john_steakly_armor_the_drop.wav`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 Inference engine for Intel devices. Serve LLMs, VLMs, Whisper, Kokoro TTS, Embedding and Rerank models over OpenAI endpo. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, README.md, AGENTS.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
