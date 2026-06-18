# stanfordnlp/dspy 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Local clone structure analysis: 540 files, 149 directories.

## 요약

- 조사 단위: `sources/stanfordnlp__dspy` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 540 files, 149 directories, depth score 113, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

평가/관측/품질 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 eval=tests/__init__.py, tests/conftest.py, tests/mock_interpreter.py이고, 의존성 단서는 openai, anthropic, mcp, langchain, pydantic, weaviate, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 품질/평가 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | stanfordnlp/dspy |
| 주제 | 평가/관측/품질 / 평가/관측/품질 |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/stanfordnlp__dspy](../../../../sources/stanfordnlp__dspy) |
| 기존 보고서 | [reports/clone-structures/stanfordnlp__dspy.md](../../../clone-structures/stanfordnlp__dspy.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 540 / 149 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .github, docs, dspy, tests |
| 상위 확장자 | .py: 260, .md: 167, .png: 31, .ipynb: 20, .json: 15, .svg: 13, .yml: 10, (none): 5, .js: 4, .html: 3, .yaml: 3, .css: 2 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 95 |
| tests | validation surface | 49 |
| .github | ci surface | 1 |
| dspy | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | langchain |
| vectorStores | weaviate |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| eval | [tests/__init__.py](../../../../sources/stanfordnlp__dspy/tests/__init__.py) | eval signal |
| eval | [tests/conftest.py](../../../../sources/stanfordnlp__dspy/tests/conftest.py) | eval signal |
| eval | [tests/mock_interpreter.py](../../../../sources/stanfordnlp__dspy/tests/mock_interpreter.py) | eval signal |
| eval | [tests/README.md](../../../../sources/stanfordnlp__dspy/tests/README.md) | eval signal |
| entrypoints | [tests/reliability/generate/__main__.py](../../../../sources/stanfordnlp__dspy/tests/reliability/generate/__main__.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/stanfordnlp__dspy/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/stanfordnlp__dspy/uv.lock) | config signal |
| config | [docs/requirements.txt](../../../../sources/stanfordnlp__dspy/docs/requirements.txt) | config signal |
| config | [.github/.internal_dspyai/pyproject.toml](../../../../sources/stanfordnlp__dspy/.github/.internal_dspyai/pyproject.toml) | config signal |
| ci | [.github/workflows/build_and_release.yml](../../../../sources/stanfordnlp__dspy/.github/workflows/build_and_release.yml) | ci signal |
| ci | [.github/workflows/docs-push.yml](../../../../sources/stanfordnlp__dspy/.github/workflows/docs-push.yml) | ci signal |
| ci | [.github/workflows/precommits_check.yml](../../../../sources/stanfordnlp__dspy/.github/workflows/precommits_check.yml) | ci signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [tests/reliability/generate/__main__.py](../../../../sources/stanfordnlp__dspy/tests/reliability/generate/__main__.py) |
| agentRuntime | 16 | [dspy/primitives/runner.js](../../../../sources/stanfordnlp__dspy/dspy/primitives/runner.js)<br>[dspy/primitives/sandbox_serializable.py](../../../../sources/stanfordnlp__dspy/dspy/primitives/sandbox_serializable.py)<br>[dspy/adapters/types/tool.py](../../../../sources/stanfordnlp__dspy/dspy/adapters/types/tool.py)<br>[docs/hooks/fetch_stats.py](../../../../sources/stanfordnlp__dspy/docs/hooks/fetch_stats.py)<br>[docs/docs/tutorials/tool_use/index.ipynb](../../../../sources/stanfordnlp__dspy/docs/docs/tutorials/tool_use/index.ipynb)<br>[docs/docs/tutorials/agents/index.ipynb](../../../../sources/stanfordnlp__dspy/docs/docs/tutorials/agents/index.ipynb)<br>[docs/docs/tutorials/agents/mlflow-tracing-agent.png](../../../../sources/stanfordnlp__dspy/docs/docs/tutorials/agents/mlflow-tracing-agent.png)<br>[docs/docs/learn/programming/tools.md](../../../../sources/stanfordnlp__dspy/docs/docs/learn/programming/tools.md) |
| mcp | 6 | [tests/utils/test_mcp.py](../../../../sources/stanfordnlp__dspy/tests/utils/test_mcp.py)<br>[tests/utils/resources/mcp_server.py](../../../../sources/stanfordnlp__dspy/tests/utils/resources/mcp_server.py)<br>[dspy/utils/mcp.py](../../../../sources/stanfordnlp__dspy/dspy/utils/mcp.py)<br>[docs/docs/tutorials/mcp/index.md](../../../../sources/stanfordnlp__dspy/docs/docs/tutorials/mcp/index.md)<br>[docs/docs/learn/programming/mcp.md](../../../../sources/stanfordnlp__dspy/docs/docs/learn/programming/mcp.md)<br>[docs/docs/diving-deeper/tools-react-and-mcp.md](../../../../sources/stanfordnlp__dspy/docs/docs/diving-deeper/tools-react-and-mcp.md) |
| retrieval | 61 | [tests/clients/test_embedding.py](../../../../sources/stanfordnlp__dspy/tests/clients/test_embedding.py)<br>[dspy/clients/embedding.py](../../../../sources/stanfordnlp__dspy/dspy/clients/embedding.py)<br>[docs/docs/index.md](../../../../sources/stanfordnlp__dspy/docs/docs/index.md)<br>[docs/docs/tutorials/index.md](../../../../sources/stanfordnlp__dspy/docs/docs/tutorials/index.md)<br>[docs/docs/tutorials/yahoo_finance_react/index.md](../../../../sources/stanfordnlp__dspy/docs/docs/tutorials/yahoo_finance_react/index.md)<br>[docs/docs/tutorials/tool_use/index.ipynb](../../../../sources/stanfordnlp__dspy/docs/docs/tutorials/tool_use/index.ipynb)<br>[docs/docs/tutorials/streaming/index.md](../../../../sources/stanfordnlp__dspy/docs/docs/tutorials/streaming/index.md)<br>[docs/docs/tutorials/saving/index.md](../../../../sources/stanfordnlp__dspy/docs/docs/tutorials/saving/index.md) |
| spec | 2 | [docs/requirements.txt](../../../../sources/stanfordnlp__dspy/docs/requirements.txt)<br>[docs/docs/roadmap.md](../../../../sources/stanfordnlp__dspy/docs/docs/roadmap.md) |
| eval | 158 | [tests/__init__.py](../../../../sources/stanfordnlp__dspy/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/stanfordnlp__dspy/tests/conftest.py)<br>[tests/mock_interpreter.py](../../../../sources/stanfordnlp__dspy/tests/mock_interpreter.py)<br>[tests/README.md](../../../../sources/stanfordnlp__dspy/tests/README.md)<br>[tests/utils/__init__.py](../../../../sources/stanfordnlp__dspy/tests/utils/__init__.py)<br>[tests/utils/test_annotation.py](../../../../sources/stanfordnlp__dspy/tests/utils/test_annotation.py)<br>[tests/utils/test_asyncify.py](../../../../sources/stanfordnlp__dspy/tests/utils/test_asyncify.py)<br>[tests/utils/test_exceptions.py](../../../../sources/stanfordnlp__dspy/tests/utils/test_exceptions.py) |
| security | 3 | [SECURITY.md](../../../../sources/stanfordnlp__dspy/SECURITY.md)<br>[tests/primitives/test_sandbox_serializable.py](../../../../sources/stanfordnlp__dspy/tests/primitives/test_sandbox_serializable.py)<br>[dspy/primitives/sandbox_serializable.py](../../../../sources/stanfordnlp__dspy/dspy/primitives/sandbox_serializable.py) |
| ci | 5 | [.github/workflows/build_and_release.yml](../../../../sources/stanfordnlp__dspy/.github/workflows/build_and_release.yml)<br>[.github/workflows/docs-push.yml](../../../../sources/stanfordnlp__dspy/.github/workflows/docs-push.yml)<br>[.github/workflows/precommits_check.yml](../../../../sources/stanfordnlp__dspy/.github/workflows/precommits_check.yml)<br>[.github/workflows/run_tests.yml](../../../../sources/stanfordnlp__dspy/.github/workflows/run_tests.yml)<br>[.github/workflows/build_utils/test_version.py](../../../../sources/stanfordnlp__dspy/.github/workflows/build_utils/test_version.py) |
| container | 2 | [docs/docs/tutorials/deployment/dspy_mlflow_ui.png](../../../../sources/stanfordnlp__dspy/docs/docs/tutorials/deployment/dspy_mlflow_ui.png)<br>[docs/docs/tutorials/deployment/index.md](../../../../sources/stanfordnlp__dspy/docs/docs/tutorials/deployment/index.md) |
| instruction | 0 | 명확하지 않음 |
| docs | 248 | [README.md](../../../../sources/stanfordnlp__dspy/README.md)<br>[tests/README.md](../../../../sources/stanfordnlp__dspy/tests/README.md)<br>[tests/reliability/README.md](../../../../sources/stanfordnlp__dspy/tests/reliability/README.md)<br>[tests/docs/test_mkdocs_links.py](../../../../sources/stanfordnlp__dspy/tests/docs/test_mkdocs_links.py)<br>[docs/.gitignore](../../../../sources/stanfordnlp__dspy/docs/.gitignore)<br>[docs/mkdocs.yml](../../../../sources/stanfordnlp__dspy/docs/mkdocs.yml)<br>[docs/Pipfile](../../../../sources/stanfordnlp__dspy/docs/Pipfile)<br>[docs/Pipfile.lock](../../../../sources/stanfordnlp__dspy/docs/Pipfile.lock) |
| config | 4 | [pyproject.toml](../../../../sources/stanfordnlp__dspy/pyproject.toml)<br>[uv.lock](../../../../sources/stanfordnlp__dspy/uv.lock)<br>[docs/requirements.txt](../../../../sources/stanfordnlp__dspy/docs/requirements.txt)<br>[.github/.internal_dspyai/pyproject.toml](../../../../sources/stanfordnlp__dspy/.github/.internal_dspyai/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 158 | [tests/__init__.py](../../../../sources/stanfordnlp__dspy/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/stanfordnlp__dspy/tests/conftest.py)<br>[tests/mock_interpreter.py](../../../../sources/stanfordnlp__dspy/tests/mock_interpreter.py)<br>[tests/README.md](../../../../sources/stanfordnlp__dspy/tests/README.md)<br>[tests/utils/__init__.py](../../../../sources/stanfordnlp__dspy/tests/utils/__init__.py)<br>[tests/utils/test_annotation.py](../../../../sources/stanfordnlp__dspy/tests/utils/test_annotation.py) |
| CI workflow | 5 | [.github/workflows/build_and_release.yml](../../../../sources/stanfordnlp__dspy/.github/workflows/build_and_release.yml)<br>[.github/workflows/docs-push.yml](../../../../sources/stanfordnlp__dspy/.github/workflows/docs-push.yml)<br>[.github/workflows/precommits_check.yml](../../../../sources/stanfordnlp__dspy/.github/workflows/precommits_check.yml)<br>[.github/workflows/run_tests.yml](../../../../sources/stanfordnlp__dspy/.github/workflows/run_tests.yml)<br>[.github/workflows/build_utils/test_version.py](../../../../sources/stanfordnlp__dspy/.github/workflows/build_utils/test_version.py) |
| 컨테이너/배포 | 2 | [docs/docs/tutorials/deployment/dspy_mlflow_ui.png](../../../../sources/stanfordnlp__dspy/docs/docs/tutorials/deployment/dspy_mlflow_ui.png)<br>[docs/docs/tutorials/deployment/index.md](../../../../sources/stanfordnlp__dspy/docs/docs/tutorials/deployment/index.md) |
| 보안/정책 | 3 | [SECURITY.md](../../../../sources/stanfordnlp__dspy/SECURITY.md)<br>[tests/primitives/test_sandbox_serializable.py](../../../../sources/stanfordnlp__dspy/tests/primitives/test_sandbox_serializable.py)<br>[dspy/primitives/sandbox_serializable.py](../../../../sources/stanfordnlp__dspy/dspy/primitives/sandbox_serializable.py) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/__init__.py`, `tests/conftest.py`, `tests/mock_interpreter.py`.
2. entrypoint를 따라 실행 흐름 확인: `tests/reliability/generate/__main__.py`.
3. agent/tool runtime 매핑: `dspy/primitives/runner.js`, `dspy/primitives/sandbox_serializable.py`, `dspy/adapters/types/tool.py`.
4. retrieval/memory/indexing 확인: `tests/clients/test_embedding.py`, `dspy/clients/embedding.py`, `docs/docs/index.md`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/conftest.py`, `tests/mock_interpreter.py`.

## 기존 레포 인사이트

평가/관측/품질 관점에서 Local clone structure analysis 540 files, 149 directories.. 핵심 구조 신호는 pyproject.toml, README.md, LICENSE, openai, anthropic, langchain이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 평가/관측/품질 레포입니다. 활용 관점은 품질/평가 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
