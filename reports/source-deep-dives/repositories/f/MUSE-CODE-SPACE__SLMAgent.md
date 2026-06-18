# MUSE-CODE-SPACE/SLMAgent 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

🎓 로컬 SLM(소형 언어 모델) AI 에이전트를 프레임워크 없이 밑바닥부터 만드는 교육용 강좌 · Ollama + qwen2.5 · 100% 오프라인 · 학습 앱 LLM Master 실습 코스

## 요약

- 조사 단위: `sources/MUSE-CODE-SPACE__SLMAgent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 58 files, 17 directories, depth score 77, key references 8개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=chapters/06_multi_tool_agent/main.py, chapters/05_rag/main.py, chapters/04_memory/main.py이고, 의존성 단서는 ollama, llama, chroma, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | MUSE-CODE-SPACE/SLMAgent |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | korea |
| Language | Python |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/MUSE-CODE-SPACE__SLMAgent](../../../../sources/MUSE-CODE-SPACE__SLMAgent) |
| 기존 보고서 | [reports/korea-trending/repositories/MUSE-CODE-SPACE__SLMAgent.md](../../../korea-trending/repositories/MUSE-CODE-SPACE__SLMAgent.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 58 / 17 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, agent, chapters, docs, tests |
| 상위 확장자 | .md: 32, .py: 20, (none): 4, .toml: 1, .yml: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 7 |
| tests | validation surface | 7 |
| .github | ci surface | 1 |
| agent | top-level component | 1 |
| chapters | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | setup | make setup |
| utility | Makefile | pull | make pull |
| quality | Makefile | check | make check |
| utility | Makefile | ch01 | make ch01 |
| utility | Makefile | ch02 | make ch02 |
| utility | Makefile | ch03 | make ch03 |
| utility | Makefile | ch04 | make ch04 |
| utility | Makefile | ch05 | make ch05 |
| utility | Makefile | ch06 | make ch06 |
| utility | Makefile | ch07 | make ch07 |
| test | Makefile | test | make test |
| quality | Makefile | lint | make lint |
| quality | Makefile | fmt | make fmt |
| utility | Makefile | clean | make clean |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | chroma |
| modelRuntime | ollama, llama |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [chapters/06_multi_tool_agent/main.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/06_multi_tool_agent/main.py) | entrypoints signal |
| entrypoints | [chapters/05_rag/main.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/05_rag/main.py) | entrypoints signal |
| entrypoints | [chapters/04_memory/main.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/04_memory/main.py) | entrypoints signal |
| entrypoints | [chapters/03_react_loop/main.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/03_react_loop/main.py) | entrypoints signal |
| config | [Makefile](../../../../sources/MUSE-CODE-SPACE__SLMAgent/Makefile) | config signal |
| config | [pyproject.toml](../../../../sources/MUSE-CODE-SPACE__SLMAgent/pyproject.toml) | config signal |
| eval | [tests/__init__.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/tests/__init__.py) | eval support |
| eval | [tests/conftest.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/tests/conftest.py) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 6 | [chapters/06_multi_tool_agent/main.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/06_multi_tool_agent/main.py)<br>[chapters/05_rag/main.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/05_rag/main.py)<br>[chapters/04_memory/main.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/04_memory/main.py)<br>[chapters/03_react_loop/main.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/03_react_loop/main.py)<br>[chapters/02_tool_calling/main.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/02_tool_calling/main.py)<br>[chapters/01_hello_llm/main.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/01_hello_llm/main.py) |
| agentRuntime | 9 | [chapters/07_capstone/data/sample/agent_design_notes.md](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/07_capstone/data/sample/agent_design_notes.md)<br>[chapters/05_rag/data/agent_basics.md](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/05_rag/data/agent_basics.md)<br>[agent/__init__.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/agent/__init__.py)<br>[agent/client.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/agent/client.py)<br>[agent/loop.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/agent/loop.py)<br>[agent/memory.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/agent/memory.py)<br>[agent/prompts.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/agent/prompts.py)<br>[agent/rag.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/agent/rag.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 12 | [tests/test_rag.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/tests/test_rag.py)<br>[chapters/05_rag/main.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/05_rag/main.py)<br>[chapters/05_rag/README.md](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/05_rag/README.md)<br>[chapters/05_rag/transcript.md](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/05_rag/transcript.md)<br>[chapters/05_rag/data/agent_basics.md](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/05_rag/data/agent_basics.md)<br>[chapters/05_rag/data/ollama_가이드.md](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/05_rag/data/ollama_가이드.md)<br>[chapters/05_rag/data/python_소개.md](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/05_rag/data/python_소개.md)<br>[chapters/04_memory/main.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/04_memory/main.py) |
| spec | 2 | [docs/architecture.md](../../../../sources/MUSE-CODE-SPACE__SLMAgent/docs/architecture.md)<br>[chapters/07_capstone/data/sample/agent_design_notes.md](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/07_capstone/data/sample/agent_design_notes.md) |
| eval | 5 | [tests/__init__.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/tests/conftest.py)<br>[tests/test_loop.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/tests/test_loop.py)<br>[tests/test_rag.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/tests/test_rag.py)<br>[tests/test_tools.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/tests/test_tools.py) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 14 | [README.md](../../../../sources/MUSE-CODE-SPACE__SLMAgent/README.md)<br>[docs/architecture.md](../../../../sources/MUSE-CODE-SPACE__SLMAgent/docs/architecture.md)<br>[docs/glossary.md](../../../../sources/MUSE-CODE-SPACE__SLMAgent/docs/glossary.md)<br>[docs/models.md](../../../../sources/MUSE-CODE-SPACE__SLMAgent/docs/models.md)<br>[docs/setup.md](../../../../sources/MUSE-CODE-SPACE__SLMAgent/docs/setup.md)<br>[docs/troubleshooting.md](../../../../sources/MUSE-CODE-SPACE__SLMAgent/docs/troubleshooting.md)<br>[chapters/07_capstone/README.md](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/07_capstone/README.md)<br>[chapters/06_multi_tool_agent/README.md](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/06_multi_tool_agent/README.md) |
| config | 2 | [Makefile](../../../../sources/MUSE-CODE-SPACE__SLMAgent/Makefile)<br>[pyproject.toml](../../../../sources/MUSE-CODE-SPACE__SLMAgent/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 5 | [tests/__init__.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/tests/conftest.py)<br>[tests/test_loop.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/tests/test_loop.py)<br>[tests/test_rag.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/tests/test_rag.py)<br>[tests/test_tools.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/tests/test_tools.py) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `chapters/06_multi_tool_agent/main.py`, `chapters/05_rag/main.py`, `chapters/04_memory/main.py`.
2. entrypoint를 따라 실행 흐름 확인: `chapters/06_multi_tool_agent/main.py`, `chapters/05_rag/main.py`, `chapters/04_memory/main.py`.
3. agent/tool runtime 매핑: `chapters/07_capstone/data/sample/agent_design_notes.md`, `chapters/05_rag/data/agent_basics.md`, `agent/__init__.py`.
4. retrieval/memory/indexing 확인: `tests/test_rag.py`, `chapters/05_rag/main.py`, `chapters/05_rag/README.md`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/conftest.py`, `tests/test_loop.py`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 🎓 로컬 SLM 소형 언어 모델 AI 에이전트를 프레임워크 없이 밑바닥부터 만드는 교육용 강좌 · Ollama + qwen2.5 · 100% 오프라인 · 학습 앱 LLM Master 실습 코스. 핵심 구조 신호는 Python, pyproject.toml, Makefile, README.md, LICENSE, ollama이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
