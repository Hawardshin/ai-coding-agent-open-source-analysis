# openai/evals 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Local clone structure analysis: 1728 files, 662 directories.

## 요약

- 조사 단위: `sources/openai__evals` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,700 files, 647 directories, depth score 115, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=evals/solvers/memory.py, evals/registry/solvers/skill_acquisition.yaml, evals/registry/evals/context-free-grammar.yaml이고, 의존성 단서는 openai, anthropic, langchain, pydantic, torch, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | openai/evals |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/openai__evals](../../../../sources/openai__evals) |
| 기존 보고서 | [reports/clone-structures/openai__evals.md](../../../clone-structures/openai__evals.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1700 / 647 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .github, docs, evals, examples, scripts, tests |
| 상위 확장자 | .jsonl: 661, .yaml: 524, .py: 338, .md: 42, .sh: 30, .txt: 26, (none): 26, .png: 13, .json: 10, .csv: 9, .ipynb: 5, .html: 4 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 7 |
| tests | validation surface | 2 |
| .github | ci surface | 1 |
| evals | top-level component | 1 |
| examples | top-level component | 1 |
| examples/retrieval-completionfn.ipynb | examples workspace | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | mypy | make mypy |
| utility | pyproject.toml | oaieval | oaieval |
| utility | pyproject.toml | oaievalset | oaievalset |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | 없음 |
| agentFrameworks | langchain |
| vectorStores | 없음 |
| modelRuntime | torch |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [evals/registry/data/solve-for-variable/tools/main.py](../../../../sources/openai__evals/evals/registry/data/solve-for-variable/tools/main.py)<br>[evals/registry/data/error_recovery/main.jsonl](../../../../sources/openai__evals/evals/registry/data/error_recovery/main.jsonl)<br>[evals/registry/data/bugged_tools/main.jsonl](../../../../sources/openai__evals/evals/registry/data/bugged_tools/main.jsonl) |
| agentRuntime | 41 | [evals/solvers/memory.py](../../../../sources/openai__evals/evals/solvers/memory.py)<br>[evals/registry/solvers/skill_acquisition.yaml](../../../../sources/openai__evals/evals/registry/solvers/skill_acquisition.yaml)<br>[evals/registry/evals/context-free-grammar.yaml](../../../../sources/openai__evals/evals/registry/evals/context-free-grammar.yaml)<br>[evals/registry/evals/skill_acquisition.yaml](../../../../sources/openai__evals/evals/registry/evals/skill_acquisition.yaml)<br>[evals/registry/data/solve-for-variable/tools/main.py](../../../../sources/openai__evals/evals/registry/data/solve-for-variable/tools/main.py)<br>[evals/registry/data/solve-for-variable/tools/problem.py](../../../../sources/openai__evals/evals/registry/data/solve-for-variable/tools/problem.py)<br>[evals/registry/data/solve-for-variable/tools/README.md](../../../../sources/openai__evals/evals/registry/data/solve-for-variable/tools/README.md)<br>[evals/registry/data/solve-for-variable/tools/solve.py](../../../../sources/openai__evals/evals/registry/data/solve-for-variable/tools/solve.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 27 | [examples/retrieval-completionfn.ipynb](../../../../sources/openai__evals/examples/retrieval-completionfn.ipynb)<br>[evals/solvers/memory.py](../../../../sources/openai__evals/evals/solvers/memory.py)<br>[evals/registry/evals/comprehensive-graph-reasoning.yaml](../../../../sources/openai__evals/evals/registry/evals/comprehensive-graph-reasoning.yaml)<br>[evals/registry/evals/pointer-value-retrieval.yaml](../../../../sources/openai__evals/evals/registry/evals/pointer-value-retrieval.yaml)<br>[evals/registry/evals/simple-knowledge-mongolian.yaml](../../../../sources/openai__evals/evals/registry/evals/simple-knowledge-mongolian.yaml)<br>[evals/registry/evals/word_vector_over_reliance.yaml](../../../../sources/openai__evals/evals/registry/evals/word_vector_over_reliance.yaml)<br>[evals/registry/eval_sets/pointer-value-retrieval.yaml](../../../../sources/openai__evals/evals/registry/eval_sets/pointer-value-retrieval.yaml)<br>[evals/registry/data/word_vector_over_reliance/word_vector_over_reliance_samples.jsonl](../../../../sources/openai__evals/evals/registry/data/word_vector_over_reliance/word_vector_over_reliance_samples.jsonl) |
| spec | 13 | [evals/solvers/providers/google/requirements.txt](../../../../sources/openai__evals/evals/solvers/providers/google/requirements.txt)<br>[evals/elsuite/text_compression/scripts/dataset/requirements.txt](../../../../sources/openai__evals/evals/elsuite/text_compression/scripts/dataset/requirements.txt)<br>[evals/elsuite/steganography/scripts/dataset/requirements.txt](../../../../sources/openai__evals/evals/elsuite/steganography/scripts/dataset/requirements.txt)<br>[evals/elsuite/multistep_web_tasks/docker/homepage/requirements.txt](../../../../sources/openai__evals/evals/elsuite/multistep_web_tasks/docker/homepage/requirements.txt)<br>[evals/elsuite/hr_ml_agent_bench/requirements.txt](../../../../sources/openai__evals/evals/elsuite/hr_ml_agent_bench/requirements.txt)<br>[evals/elsuite/hr_ml_agent_bench/scripts/install_all_requirements.sh](../../../../sources/openai__evals/evals/elsuite/hr_ml_agent_bench/scripts/install_all_requirements.sh)<br>[evals/elsuite/hr_ml_agent_bench/benchmarks/spaceship_titanic/scripts/requirements.txt](../../../../sources/openai__evals/evals/elsuite/hr_ml_agent_bench/benchmarks/spaceship_titanic/scripts/requirements.txt)<br>[evals/elsuite/hr_ml_agent_bench/benchmarks/ogbn_arxiv/scripts/requirements.txt](../../../../sources/openai__evals/evals/elsuite/hr_ml_agent_bench/benchmarks/ogbn_arxiv/scripts/requirements.txt) |
| eval | 234 | [tests/unit/evals/test_metrics.py](../../../../sources/openai__evals/tests/unit/evals/test_metrics.py)<br>[evals/data_test.py](../../../../sources/openai__evals/evals/data_test.py)<br>[evals/eval.py](../../../../sources/openai__evals/evals/eval.py)<br>[evals/record_test.py](../../../../sources/openai__evals/evals/record_test.py)<br>[evals/registry_test.py](../../../../sources/openai__evals/evals/registry_test.py)<br>[evals/utils/test.py](../../../../sources/openai__evals/evals/utils/test.py)<br>[evals/solvers/solver_test.py](../../../../sources/openai__evals/evals/solvers/solver_test.py)<br>[evals/solvers/providers/together/together_solver_test.py](../../../../sources/openai__evals/evals/solvers/providers/together/together_solver_test.py) |
| security | 15 | [SECURITY.md](../../../../sources/openai__evals/SECURITY.md)<br>[evals/registry/modelgraded/security.yaml](../../../../sources/openai__evals/evals/registry/modelgraded/security.yaml)<br>[evals/registry/evals/accounting_audit.yaml](../../../../sources/openai__evals/evals/registry/evals/accounting_audit.yaml)<br>[evals/registry/evals/security_guide.yaml](../../../../sources/openai__evals/evals/registry/evals/security_guide.yaml)<br>[evals/registry/data/security_guide/samples.jsonl](../../../../sources/openai__evals/evals/registry/data/security_guide/samples.jsonl)<br>[evals/registry/data/naughty_strings/security.jsonl](../../../../sources/openai__evals/evals/registry/data/naughty_strings/security.jsonl)<br>[evals/registry/data/accounting_audit/samples.jsonl](../../../../sources/openai__evals/evals/registry/data/accounting_audit/samples.jsonl)<br>[evals/elsuite/multistep_web_tasks/webarena/.auth/gitlab_state.json](../../../../sources/openai__evals/evals/elsuite/multistep_web_tasks/webarena/.auth/gitlab_state.json) |
| ci | 3 | [.github/workflows/parse_yaml.py](../../../../sources/openai__evals/.github/workflows/parse_yaml.py)<br>[.github/workflows/run_tests.yaml](../../../../sources/openai__evals/.github/workflows/run_tests.yaml)<br>[.github/workflows/test_eval.yaml](../../../../sources/openai__evals/.github/workflows/test_eval.yaml) |
| container | 3 | [evals/elsuite/multistep_web_tasks/docker/homepage/Dockerfile](../../../../sources/openai__evals/evals/elsuite/multistep_web_tasks/docker/homepage/Dockerfile)<br>[evals/elsuite/multistep_web_tasks/docker/flask-playwright/Dockerfile](../../../../sources/openai__evals/evals/elsuite/multistep_web_tasks/docker/flask-playwright/Dockerfile)<br>[evals/elsuite/multistep_web_tasks/docker/dc-evals-bash/Dockerfile](../../../../sources/openai__evals/evals/elsuite/multistep_web_tasks/docker/dc-evals-bash/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 35 | [README.md](../../../../sources/openai__evals/README.md)<br>[evals/solvers/README.md](../../../../sources/openai__evals/evals/solvers/README.md)<br>[evals/solvers/postprocessors/README.md](../../../../sources/openai__evals/evals/solvers/postprocessors/README.md)<br>[evals/registry/data/README.md](../../../../sources/openai__evals/evals/registry/data/README.md)<br>[evals/registry/data/ukraine_gec/README.md](../../../../sources/openai__evals/evals/registry/data/ukraine_gec/README.md)<br>[evals/registry/data/solve-for-variable/tools/README.md](../../../../sources/openai__evals/evals/registry/data/solve-for-variable/tools/README.md)<br>[evals/elsuite/twenty_questions/readme.md](../../../../sources/openai__evals/evals/elsuite/twenty_questions/readme.md)<br>[evals/elsuite/track_the_stat/README.md](../../../../sources/openai__evals/evals/elsuite/track_the_stat/README.md) |
| config | 14 | [Makefile](../../../../sources/openai__evals/Makefile)<br>[pyproject.toml](../../../../sources/openai__evals/pyproject.toml)<br>[evals/solvers/providers/google/requirements.txt](../../../../sources/openai__evals/evals/solvers/providers/google/requirements.txt)<br>[evals/elsuite/text_compression/scripts/dataset/requirements.txt](../../../../sources/openai__evals/evals/elsuite/text_compression/scripts/dataset/requirements.txt)<br>[evals/elsuite/steganography/scripts/dataset/requirements.txt](../../../../sources/openai__evals/evals/elsuite/steganography/scripts/dataset/requirements.txt)<br>[evals/elsuite/multistep_web_tasks/docker/homepage/requirements.txt](../../../../sources/openai__evals/evals/elsuite/multistep_web_tasks/docker/homepage/requirements.txt)<br>[evals/elsuite/hr_ml_agent_bench/requirements.txt](../../../../sources/openai__evals/evals/elsuite/hr_ml_agent_bench/requirements.txt)<br>[evals/elsuite/hr_ml_agent_bench/benchmarks/spaceship_titanic/scripts/requirements.txt](../../../../sources/openai__evals/evals/elsuite/hr_ml_agent_bench/benchmarks/spaceship_titanic/scripts/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 234 | [tests/unit/evals/test_metrics.py](../../../../sources/openai__evals/tests/unit/evals/test_metrics.py)<br>[evals/data_test.py](../../../../sources/openai__evals/evals/data_test.py)<br>[evals/eval.py](../../../../sources/openai__evals/evals/eval.py)<br>[evals/record_test.py](../../../../sources/openai__evals/evals/record_test.py)<br>[evals/registry_test.py](../../../../sources/openai__evals/evals/registry_test.py)<br>[evals/utils/test.py](../../../../sources/openai__evals/evals/utils/test.py) |
| CI workflow | 3 | [.github/workflows/parse_yaml.py](../../../../sources/openai__evals/.github/workflows/parse_yaml.py)<br>[.github/workflows/run_tests.yaml](../../../../sources/openai__evals/.github/workflows/run_tests.yaml)<br>[.github/workflows/test_eval.yaml](../../../../sources/openai__evals/.github/workflows/test_eval.yaml) |
| 컨테이너/배포 | 3 | [evals/elsuite/multistep_web_tasks/docker/homepage/Dockerfile](../../../../sources/openai__evals/evals/elsuite/multistep_web_tasks/docker/homepage/Dockerfile)<br>[evals/elsuite/multistep_web_tasks/docker/flask-playwright/Dockerfile](../../../../sources/openai__evals/evals/elsuite/multistep_web_tasks/docker/flask-playwright/Dockerfile)<br>[evals/elsuite/multistep_web_tasks/docker/dc-evals-bash/Dockerfile](../../../../sources/openai__evals/evals/elsuite/multistep_web_tasks/docker/dc-evals-bash/Dockerfile) |
| 보안/정책 | 15 | [SECURITY.md](../../../../sources/openai__evals/SECURITY.md)<br>[evals/registry/modelgraded/security.yaml](../../../../sources/openai__evals/evals/registry/modelgraded/security.yaml)<br>[evals/registry/evals/accounting_audit.yaml](../../../../sources/openai__evals/evals/registry/evals/accounting_audit.yaml)<br>[evals/registry/evals/security_guide.yaml](../../../../sources/openai__evals/evals/registry/evals/security_guide.yaml)<br>[evals/registry/data/security_guide/samples.jsonl](../../../../sources/openai__evals/evals/registry/data/security_guide/samples.jsonl)<br>[evals/registry/data/naughty_strings/security.jsonl](../../../../sources/openai__evals/evals/registry/data/naughty_strings/security.jsonl) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `evals/solvers/memory.py`, `evals/registry/solvers/skill_acquisition.yaml`, `evals/registry/evals/context-free-grammar.yaml`.
2. entrypoint를 따라 실행 흐름 확인: `evals/registry/data/solve-for-variable/tools/main.py`, `evals/registry/data/error_recovery/main.jsonl`, `evals/registry/data/bugged_tools/main.jsonl`.
3. agent/tool runtime 매핑: `evals/solvers/memory.py`, `evals/registry/solvers/skill_acquisition.yaml`, `evals/registry/evals/context-free-grammar.yaml`.
4. retrieval/memory/indexing 확인: `examples/retrieval-completionfn.ipynb`, `evals/solvers/memory.py`, `evals/registry/evals/comprehensive-graph-reasoning.yaml`.
5. test/eval 파일로 동작 검증: `tests/unit/evals/test_metrics.py`, `evals/data_test.py`, `evals/eval.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 1728 files, 662 directories.. 핵심 구조 신호는 pyproject.toml, Makefile, README.md, openai, anthropic, langchain이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
