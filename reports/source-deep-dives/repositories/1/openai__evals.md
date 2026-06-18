# openai/evals Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 1728 files, 662 directories.

## 요약

- 조사 단위: `sources/openai__evals` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,700 files, 647 directories, depth score 127, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=evals/solvers/memory.py, evals/registry/solvers/skill_acquisition.yaml, evals/registry/evals/context-free-grammar.yaml이고, 의존성 단서는 openai, anthropic, langchain, pydantic, torch, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | openai/evals |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/openai__evals](../../../../sources/openai__evals) |
| Existing report | [reports/clone-structures/openai__evals.md](../../../clone-structures/openai__evals.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1700 / 647 |
| Max observed depth | 8 |
| Top directories | .github, docs, evals, examples, scripts, tests |
| Top extensions | .jsonl: 661, .yaml: 524, .py: 338, .md: 42, .sh: 30, .txt: 26, (none): 26, .png: 13, .json: 10, .csv: 9, .ipynb: 5, .html: 4 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 7 |
| tests | validation surface | 2 |
| .github | ci surface | 1 |
| evals | top-level component | 1 |
| examples | top-level component | 1 |
| examples/retrieval-completionfn.ipynb | examples workspace | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | mypy | make mypy |
| utility | pyproject.toml | oaieval | oaieval |
| utility | pyproject.toml | oaievalset | oaievalset |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | none |
| agentFrameworks | langchain |
| vectorStores | none |
| modelRuntime | torch |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [evals/solvers/memory.py](../../../../sources/openai__evals/evals/solvers/memory.py) | agentRuntime signal |
| agentRuntime | [evals/registry/solvers/skill_acquisition.yaml](../../../../sources/openai__evals/evals/registry/solvers/skill_acquisition.yaml) | agentRuntime signal |
| agentRuntime | [evals/registry/evals/context-free-grammar.yaml](../../../../sources/openai__evals/evals/registry/evals/context-free-grammar.yaml) | agentRuntime signal |
| agentRuntime | [evals/registry/evals/skill_acquisition.yaml](../../../../sources/openai__evals/evals/registry/evals/skill_acquisition.yaml) | agentRuntime signal |
| entrypoints | [evals/registry/data/solve-for-variable/tools/main.py](../../../../sources/openai__evals/evals/registry/data/solve-for-variable/tools/main.py) | entrypoints signal |
| entrypoints | [evals/registry/data/error_recovery/main.jsonl](../../../../sources/openai__evals/evals/registry/data/error_recovery/main.jsonl) | entrypoints signal |
| entrypoints | [evals/registry/data/bugged_tools/main.jsonl](../../../../sources/openai__evals/evals/registry/data/bugged_tools/main.jsonl) | entrypoints signal |
| config | [Makefile](../../../../sources/openai__evals/Makefile) | config signal |
| config | [pyproject.toml](../../../../sources/openai__evals/pyproject.toml) | config signal |
| config | [evals/solvers/providers/google/requirements.txt](../../../../sources/openai__evals/evals/solvers/providers/google/requirements.txt) | config signal |
| config | [evals/elsuite/text_compression/scripts/dataset/requirements.txt](../../../../sources/openai__evals/evals/elsuite/text_compression/scripts/dataset/requirements.txt) | config signal |
| ci | [.github/workflows/parse_yaml.py](../../../../sources/openai__evals/.github/workflows/parse_yaml.py) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [evals/registry/data/solve-for-variable/tools/main.py](../../../../sources/openai__evals/evals/registry/data/solve-for-variable/tools/main.py)<br>[evals/registry/data/error_recovery/main.jsonl](../../../../sources/openai__evals/evals/registry/data/error_recovery/main.jsonl)<br>[evals/registry/data/bugged_tools/main.jsonl](../../../../sources/openai__evals/evals/registry/data/bugged_tools/main.jsonl) |
| agentRuntime | 41 | [evals/solvers/memory.py](../../../../sources/openai__evals/evals/solvers/memory.py)<br>[evals/registry/solvers/skill_acquisition.yaml](../../../../sources/openai__evals/evals/registry/solvers/skill_acquisition.yaml)<br>[evals/registry/evals/context-free-grammar.yaml](../../../../sources/openai__evals/evals/registry/evals/context-free-grammar.yaml)<br>[evals/registry/evals/skill_acquisition.yaml](../../../../sources/openai__evals/evals/registry/evals/skill_acquisition.yaml)<br>[evals/registry/data/solve-for-variable/tools/main.py](../../../../sources/openai__evals/evals/registry/data/solve-for-variable/tools/main.py)<br>[evals/registry/data/solve-for-variable/tools/problem.py](../../../../sources/openai__evals/evals/registry/data/solve-for-variable/tools/problem.py)<br>[evals/registry/data/solve-for-variable/tools/README.md](../../../../sources/openai__evals/evals/registry/data/solve-for-variable/tools/README.md)<br>[evals/registry/data/solve-for-variable/tools/solve.py](../../../../sources/openai__evals/evals/registry/data/solve-for-variable/tools/solve.py) |
| mcp | 0 | not obvious |
| retrieval | 27 | [examples/retrieval-completionfn.ipynb](../../../../sources/openai__evals/examples/retrieval-completionfn.ipynb)<br>[evals/solvers/memory.py](../../../../sources/openai__evals/evals/solvers/memory.py)<br>[evals/registry/evals/comprehensive-graph-reasoning.yaml](../../../../sources/openai__evals/evals/registry/evals/comprehensive-graph-reasoning.yaml)<br>[evals/registry/evals/pointer-value-retrieval.yaml](../../../../sources/openai__evals/evals/registry/evals/pointer-value-retrieval.yaml)<br>[evals/registry/evals/simple-knowledge-mongolian.yaml](../../../../sources/openai__evals/evals/registry/evals/simple-knowledge-mongolian.yaml)<br>[evals/registry/evals/word_vector_over_reliance.yaml](../../../../sources/openai__evals/evals/registry/evals/word_vector_over_reliance.yaml)<br>[evals/registry/eval_sets/pointer-value-retrieval.yaml](../../../../sources/openai__evals/evals/registry/eval_sets/pointer-value-retrieval.yaml)<br>[evals/registry/data/word_vector_over_reliance/word_vector_over_reliance_samples.jsonl](../../../../sources/openai__evals/evals/registry/data/word_vector_over_reliance/word_vector_over_reliance_samples.jsonl) |
| spec | 13 | [evals/solvers/providers/google/requirements.txt](../../../../sources/openai__evals/evals/solvers/providers/google/requirements.txt)<br>[evals/elsuite/text_compression/scripts/dataset/requirements.txt](../../../../sources/openai__evals/evals/elsuite/text_compression/scripts/dataset/requirements.txt)<br>[evals/elsuite/steganography/scripts/dataset/requirements.txt](../../../../sources/openai__evals/evals/elsuite/steganography/scripts/dataset/requirements.txt)<br>[evals/elsuite/multistep_web_tasks/docker/homepage/requirements.txt](../../../../sources/openai__evals/evals/elsuite/multistep_web_tasks/docker/homepage/requirements.txt)<br>[evals/elsuite/hr_ml_agent_bench/requirements.txt](../../../../sources/openai__evals/evals/elsuite/hr_ml_agent_bench/requirements.txt)<br>[evals/elsuite/hr_ml_agent_bench/scripts/install_all_requirements.sh](../../../../sources/openai__evals/evals/elsuite/hr_ml_agent_bench/scripts/install_all_requirements.sh)<br>[evals/elsuite/hr_ml_agent_bench/benchmarks/spaceship_titanic/scripts/requirements.txt](../../../../sources/openai__evals/evals/elsuite/hr_ml_agent_bench/benchmarks/spaceship_titanic/scripts/requirements.txt)<br>[evals/elsuite/hr_ml_agent_bench/benchmarks/ogbn_arxiv/scripts/requirements.txt](../../../../sources/openai__evals/evals/elsuite/hr_ml_agent_bench/benchmarks/ogbn_arxiv/scripts/requirements.txt) |
| eval | 234 | [tests/unit/evals/test_metrics.py](../../../../sources/openai__evals/tests/unit/evals/test_metrics.py)<br>[evals/data_test.py](../../../../sources/openai__evals/evals/data_test.py)<br>[evals/eval.py](../../../../sources/openai__evals/evals/eval.py)<br>[evals/record_test.py](../../../../sources/openai__evals/evals/record_test.py)<br>[evals/registry_test.py](../../../../sources/openai__evals/evals/registry_test.py)<br>[evals/utils/test.py](../../../../sources/openai__evals/evals/utils/test.py)<br>[evals/solvers/solver_test.py](../../../../sources/openai__evals/evals/solvers/solver_test.py)<br>[evals/solvers/providers/together/together_solver_test.py](../../../../sources/openai__evals/evals/solvers/providers/together/together_solver_test.py) |
| security | 15 | [SECURITY.md](../../../../sources/openai__evals/SECURITY.md)<br>[evals/registry/modelgraded/security.yaml](../../../../sources/openai__evals/evals/registry/modelgraded/security.yaml)<br>[evals/registry/evals/accounting_audit.yaml](../../../../sources/openai__evals/evals/registry/evals/accounting_audit.yaml)<br>[evals/registry/evals/security_guide.yaml](../../../../sources/openai__evals/evals/registry/evals/security_guide.yaml)<br>[evals/registry/data/security_guide/samples.jsonl](../../../../sources/openai__evals/evals/registry/data/security_guide/samples.jsonl)<br>[evals/registry/data/naughty_strings/security.jsonl](../../../../sources/openai__evals/evals/registry/data/naughty_strings/security.jsonl)<br>[evals/registry/data/accounting_audit/samples.jsonl](../../../../sources/openai__evals/evals/registry/data/accounting_audit/samples.jsonl)<br>[evals/elsuite/multistep_web_tasks/webarena/.auth/gitlab_state.json](../../../../sources/openai__evals/evals/elsuite/multistep_web_tasks/webarena/.auth/gitlab_state.json) |
| ci | 3 | [.github/workflows/parse_yaml.py](../../../../sources/openai__evals/.github/workflows/parse_yaml.py)<br>[.github/workflows/run_tests.yaml](../../../../sources/openai__evals/.github/workflows/run_tests.yaml)<br>[.github/workflows/test_eval.yaml](../../../../sources/openai__evals/.github/workflows/test_eval.yaml) |
| container | 3 | [evals/elsuite/multistep_web_tasks/docker/homepage/Dockerfile](../../../../sources/openai__evals/evals/elsuite/multistep_web_tasks/docker/homepage/Dockerfile)<br>[evals/elsuite/multistep_web_tasks/docker/flask-playwright/Dockerfile](../../../../sources/openai__evals/evals/elsuite/multistep_web_tasks/docker/flask-playwright/Dockerfile)<br>[evals/elsuite/multistep_web_tasks/docker/dc-evals-bash/Dockerfile](../../../../sources/openai__evals/evals/elsuite/multistep_web_tasks/docker/dc-evals-bash/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 35 | [README.md](../../../../sources/openai__evals/README.md)<br>[evals/solvers/README.md](../../../../sources/openai__evals/evals/solvers/README.md)<br>[evals/solvers/postprocessors/README.md](../../../../sources/openai__evals/evals/solvers/postprocessors/README.md)<br>[evals/registry/data/README.md](../../../../sources/openai__evals/evals/registry/data/README.md)<br>[evals/registry/data/ukraine_gec/README.md](../../../../sources/openai__evals/evals/registry/data/ukraine_gec/README.md)<br>[evals/registry/data/solve-for-variable/tools/README.md](../../../../sources/openai__evals/evals/registry/data/solve-for-variable/tools/README.md)<br>[evals/elsuite/twenty_questions/readme.md](../../../../sources/openai__evals/evals/elsuite/twenty_questions/readme.md)<br>[evals/elsuite/track_the_stat/README.md](../../../../sources/openai__evals/evals/elsuite/track_the_stat/README.md) |
| config | 14 | [Makefile](../../../../sources/openai__evals/Makefile)<br>[pyproject.toml](../../../../sources/openai__evals/pyproject.toml)<br>[evals/solvers/providers/google/requirements.txt](../../../../sources/openai__evals/evals/solvers/providers/google/requirements.txt)<br>[evals/elsuite/text_compression/scripts/dataset/requirements.txt](../../../../sources/openai__evals/evals/elsuite/text_compression/scripts/dataset/requirements.txt)<br>[evals/elsuite/steganography/scripts/dataset/requirements.txt](../../../../sources/openai__evals/evals/elsuite/steganography/scripts/dataset/requirements.txt)<br>[evals/elsuite/multistep_web_tasks/docker/homepage/requirements.txt](../../../../sources/openai__evals/evals/elsuite/multistep_web_tasks/docker/homepage/requirements.txt)<br>[evals/elsuite/hr_ml_agent_bench/requirements.txt](../../../../sources/openai__evals/evals/elsuite/hr_ml_agent_bench/requirements.txt)<br>[evals/elsuite/hr_ml_agent_bench/benchmarks/spaceship_titanic/scripts/requirements.txt](../../../../sources/openai__evals/evals/elsuite/hr_ml_agent_bench/benchmarks/spaceship_titanic/scripts/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 234 | [tests/unit/evals/test_metrics.py](../../../../sources/openai__evals/tests/unit/evals/test_metrics.py)<br>[evals/data_test.py](../../../../sources/openai__evals/evals/data_test.py)<br>[evals/eval.py](../../../../sources/openai__evals/evals/eval.py)<br>[evals/record_test.py](../../../../sources/openai__evals/evals/record_test.py)<br>[evals/registry_test.py](../../../../sources/openai__evals/evals/registry_test.py)<br>[evals/utils/test.py](../../../../sources/openai__evals/evals/utils/test.py) |
| CI workflows | 3 | [.github/workflows/parse_yaml.py](../../../../sources/openai__evals/.github/workflows/parse_yaml.py)<br>[.github/workflows/run_tests.yaml](../../../../sources/openai__evals/.github/workflows/run_tests.yaml)<br>[.github/workflows/test_eval.yaml](../../../../sources/openai__evals/.github/workflows/test_eval.yaml) |
| Containers / deploy | 3 | [evals/elsuite/multistep_web_tasks/docker/homepage/Dockerfile](../../../../sources/openai__evals/evals/elsuite/multistep_web_tasks/docker/homepage/Dockerfile)<br>[evals/elsuite/multistep_web_tasks/docker/flask-playwright/Dockerfile](../../../../sources/openai__evals/evals/elsuite/multistep_web_tasks/docker/flask-playwright/Dockerfile)<br>[evals/elsuite/multistep_web_tasks/docker/dc-evals-bash/Dockerfile](../../../../sources/openai__evals/evals/elsuite/multistep_web_tasks/docker/dc-evals-bash/Dockerfile) |
| Security / policy | 15 | [SECURITY.md](../../../../sources/openai__evals/SECURITY.md)<br>[evals/registry/modelgraded/security.yaml](../../../../sources/openai__evals/evals/registry/modelgraded/security.yaml)<br>[evals/registry/evals/accounting_audit.yaml](../../../../sources/openai__evals/evals/registry/evals/accounting_audit.yaml)<br>[evals/registry/evals/security_guide.yaml](../../../../sources/openai__evals/evals/registry/evals/security_guide.yaml)<br>[evals/registry/data/security_guide/samples.jsonl](../../../../sources/openai__evals/evals/registry/data/security_guide/samples.jsonl)<br>[evals/registry/data/naughty_strings/security.jsonl](../../../../sources/openai__evals/evals/registry/data/naughty_strings/security.jsonl) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `evals/solvers/memory.py`, `evals/registry/solvers/skill_acquisition.yaml`, `evals/registry/evals/context-free-grammar.yaml`.
2. Trace execution through entrypoints: `evals/registry/data/solve-for-variable/tools/main.py`, `evals/registry/data/error_recovery/main.jsonl`, `evals/registry/data/bugged_tools/main.jsonl`.
3. Map agent/tool runtime through: `evals/solvers/memory.py`, `evals/registry/solvers/skill_acquisition.yaml`, `evals/registry/evals/context-free-grammar.yaml`.
4. Inspect retrieval/memory/indexing through: `examples/retrieval-completionfn.ipynb`, `evals/solvers/memory.py`, `evals/registry/evals/comprehensive-graph-reasoning.yaml`.
5. Verify behavior through test/eval files: `tests/unit/evals/test_metrics.py`, `evals/data_test.py`, `evals/eval.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 1728 files, 662 directories.. 핵심 구조 신호는 pyproject.toml, Makefile, README.md, openai, anthropic, langchain이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
