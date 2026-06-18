# jonfairbanks/local-rag 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Ingest files for retrieval augmented generation (RAG) with open-source Large Language Models (LLMs), all without 3rd parties or sensitive data leaving your network.

## 요약

- 조사 단위: `sources/jonfairbanks__local-rag` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 58 files, 10 directories, depth score 94, key references 11개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=main.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | jonfairbanks/local-rag |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | Python |
| Stars | 747 |
| Forks | 91 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/jonfairbanks__local-rag](../../../../sources/jonfairbanks__local-rag) |
| 기존 보고서 | [reports/global-trending/repositories/jonfairbanks__local-rag.md](../../../global-trending/repositories/jonfairbanks__local-rag.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 58 / 10 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | .github, .streamlit, components, docs, tests, utils |
| 상위 확장자 | .py: 27, .md: 13, (none): 6, .yml: 4, .yaml: 2, .gif: 1, .html: 1, .lock: 1, .png: 1, .toml: 1, .yml-rocm: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 10 |
| docs | documentation surface | 8 |
| .github | ci surface | 1 |
| components | top-level component | 1 |
| utils | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [main.py](../../../../sources/jonfairbanks__local-rag/main.py) | entrypoints signal |
| container | [docker-compose.yml](../../../../sources/jonfairbanks__local-rag/docker-compose.yml) | container signal |
| container | [docker-compose.yml-rocm](../../../../sources/jonfairbanks__local-rag/docker-compose.yml-rocm) | container signal |
| container | [Dockerfile](../../../../sources/jonfairbanks__local-rag/Dockerfile) | container signal |
| ci | [.github/workflows/dependabot-auto-merge.yml](../../../../sources/jonfairbanks__local-rag/.github/workflows/dependabot-auto-merge.yml) | ci signal |
| ci | [.github/workflows/issue-attachments.yaml](../../../../sources/jonfairbanks__local-rag/.github/workflows/issue-attachments.yaml) | ci signal |
| ci | [.github/workflows/main.yaml](../../../../sources/jonfairbanks__local-rag/.github/workflows/main.yaml) | ci signal |
| ci | [.github/workflows/quality.yml](../../../../sources/jonfairbanks__local-rag/.github/workflows/quality.yml) | ci signal |
| eval | [tests/test_browser_settings.py](../../../../sources/jonfairbanks__local-rag/tests/test_browser_settings.py) | eval support |
| eval | [tests/test_github_repo.py](../../../../sources/jonfairbanks__local-rag/tests/test_github_repo.py) | eval support |
| instruction | [AGENTS.md](../../../../sources/jonfairbanks__local-rag/AGENTS.md) | instruction support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [main.py](../../../../sources/jonfairbanks__local-rag/main.py) |
| agentRuntime | 1 | [AGENTS.md](../../../../sources/jonfairbanks__local-rag/AGENTS.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 3 | [utils/llama_index.py](../../../../sources/jonfairbanks__local-rag/utils/llama_index.py)<br>[utils/rag_pipeline.py](../../../../sources/jonfairbanks__local-rag/utils/rag_pipeline.py)<br>[utils/browser_storage_component/index.html](../../../../sources/jonfairbanks__local-rag/utils/browser_storage_component/index.html) |
| spec | 0 | 명확하지 않음 |
| eval | 9 | [tests/test_browser_settings.py](../../../../sources/jonfairbanks__local-rag/tests/test_browser_settings.py)<br>[tests/test_github_repo.py](../../../../sources/jonfairbanks__local-rag/tests/test_github_repo.py)<br>[tests/test_import_boundaries.py](../../../../sources/jonfairbanks__local-rag/tests/test_import_boundaries.py)<br>[tests/test_local_files.py](../../../../sources/jonfairbanks__local-rag/tests/test_local_files.py)<br>[tests/test_ollama.py](../../../../sources/jonfairbanks__local-rag/tests/test_ollama.py)<br>[tests/test_page_state.py](../../../../sources/jonfairbanks__local-rag/tests/test_page_state.py)<br>[tests/test_security_controls.py](../../../../sources/jonfairbanks__local-rag/tests/test_security_controls.py)<br>[tests/test_settings_tab.py](../../../../sources/jonfairbanks__local-rag/tests/test_settings_tab.py) |
| security | 2 | [SECURITY.md](../../../../sources/jonfairbanks__local-rag/SECURITY.md)<br>[tests/test_security_controls.py](../../../../sources/jonfairbanks__local-rag/tests/test_security_controls.py) |
| ci | 4 | [.github/workflows/dependabot-auto-merge.yml](../../../../sources/jonfairbanks__local-rag/.github/workflows/dependabot-auto-merge.yml)<br>[.github/workflows/issue-attachments.yaml](../../../../sources/jonfairbanks__local-rag/.github/workflows/issue-attachments.yaml)<br>[.github/workflows/main.yaml](../../../../sources/jonfairbanks__local-rag/.github/workflows/main.yaml)<br>[.github/workflows/quality.yml](../../../../sources/jonfairbanks__local-rag/.github/workflows/quality.yml) |
| container | 3 | [docker-compose.yml](../../../../sources/jonfairbanks__local-rag/docker-compose.yml)<br>[docker-compose.yml-rocm](../../../../sources/jonfairbanks__local-rag/docker-compose.yml-rocm)<br>[Dockerfile](../../../../sources/jonfairbanks__local-rag/Dockerfile) |
| instruction | 1 | [AGENTS.md](../../../../sources/jonfairbanks__local-rag/AGENTS.md) |
| docs | 8 | [README.md](../../../../sources/jonfairbanks__local-rag/README.md)<br>[docs/contributing.md](../../../../sources/jonfairbanks__local-rag/docs/contributing.md)<br>[docs/pipeline.md](../../../../sources/jonfairbanks__local-rag/docs/pipeline.md)<br>[docs/resources.md](../../../../sources/jonfairbanks__local-rag/docs/resources.md)<br>[docs/setup.md](../../../../sources/jonfairbanks__local-rag/docs/setup.md)<br>[docs/todo.md](../../../../sources/jonfairbanks__local-rag/docs/todo.md)<br>[docs/troubleshooting.md](../../../../sources/jonfairbanks__local-rag/docs/troubleshooting.md)<br>[docs/usage.md](../../../../sources/jonfairbanks__local-rag/docs/usage.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 9 | [tests/test_browser_settings.py](../../../../sources/jonfairbanks__local-rag/tests/test_browser_settings.py)<br>[tests/test_github_repo.py](../../../../sources/jonfairbanks__local-rag/tests/test_github_repo.py)<br>[tests/test_import_boundaries.py](../../../../sources/jonfairbanks__local-rag/tests/test_import_boundaries.py)<br>[tests/test_local_files.py](../../../../sources/jonfairbanks__local-rag/tests/test_local_files.py)<br>[tests/test_ollama.py](../../../../sources/jonfairbanks__local-rag/tests/test_ollama.py)<br>[tests/test_page_state.py](../../../../sources/jonfairbanks__local-rag/tests/test_page_state.py) |
| CI workflow | 4 | [.github/workflows/dependabot-auto-merge.yml](../../../../sources/jonfairbanks__local-rag/.github/workflows/dependabot-auto-merge.yml)<br>[.github/workflows/issue-attachments.yaml](../../../../sources/jonfairbanks__local-rag/.github/workflows/issue-attachments.yaml)<br>[.github/workflows/main.yaml](../../../../sources/jonfairbanks__local-rag/.github/workflows/main.yaml)<br>[.github/workflows/quality.yml](../../../../sources/jonfairbanks__local-rag/.github/workflows/quality.yml) |
| 컨테이너/배포 | 3 | [docker-compose.yml](../../../../sources/jonfairbanks__local-rag/docker-compose.yml)<br>[docker-compose.yml-rocm](../../../../sources/jonfairbanks__local-rag/docker-compose.yml-rocm)<br>[Dockerfile](../../../../sources/jonfairbanks__local-rag/Dockerfile) |
| 보안/정책 | 2 | [SECURITY.md](../../../../sources/jonfairbanks__local-rag/SECURITY.md)<br>[tests/test_security_controls.py](../../../../sources/jonfairbanks__local-rag/tests/test_security_controls.py) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/jonfairbanks__local-rag/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `main.py`, `docker-compose.yml`, `docker-compose.yml-rocm`.
2. entrypoint를 따라 실행 흐름 확인: `main.py`.
3. agent/tool runtime 매핑: `AGENTS.md`.
4. retrieval/memory/indexing 확인: `utils/llama_index.py`, `utils/rag_pipeline.py`, `utils/browser_storage_component/index.html`.
5. test/eval 파일로 동작 검증: `tests/test_browser_settings.py`, `tests/test_github_repo.py`, `tests/test_import_boundaries.py`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 Ingest files for retrieval augmented generation RAG with open source Large Language Models LLMs , all without 3rd partie. 핵심 구조 신호는 Python, Dockerfile, docker-compose.yml, README.md, AGENTS.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
