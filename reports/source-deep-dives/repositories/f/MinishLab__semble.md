# MinishLab/semble 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Fast and Accurate Code Search for Agents. Uses ~98% fewer tokens than grep+read

## 요약

- 조사 단위: `sources/MinishLab__semble` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 164 files, 18 directories, depth score 90, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/test_mcp.py, src/semble/mcp.py이고, 의존성 단서는 openai, mcp, transformers, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | MinishLab/semble |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 5231 |
| Forks | 226 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/MinishLab__semble](../../../../sources/MinishLab__semble) |
| 기존 보고서 | [reports/global-trending/repositories/MinishLab__semble.md](../../../global-trending/repositories/MinishLab__semble.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 164 / 18 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, assets, benchmarks, docs, src, tests |
| 상위 확장자 | .json: 73, .py: 60, .md: 15, .png: 4, (none): 4, .yaml: 3, .cff: 1, .in: 1, .lock: 1, .toml: 1, .typed: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 23 |
| tests | validation surface | 19 |
| docs | documentation surface | 2 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| benchmarks | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | install | make install |
| test | Makefile | test | make test |
| test | Makefile | test-no-git | make test-no-git |
| quality | Makefile | lint | make lint |
| quality | Makefile | typecheck | make typecheck |
| utility | Makefile | fix | make fix |
| utility | Makefile | pre-commit | make pre-commit |
| utility | pyproject.toml | semble | semble |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | transformers |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [tests/test_mcp.py](../../../../sources/MinishLab__semble/tests/test_mcp.py) | mcp signal |
| mcp | [src/semble/mcp.py](../../../../sources/MinishLab__semble/src/semble/mcp.py) | mcp signal |
| agentRuntime | [src/semble/installer/agents.py](../../../../sources/MinishLab__semble/src/semble/installer/agents.py) | agentRuntime signal |
| agentRuntime | [src/semble/agents/antigravity.md](../../../../sources/MinishLab__semble/src/semble/agents/antigravity.md) | agentRuntime signal |
| agentRuntime | [src/semble/agents/claude.md](../../../../sources/MinishLab__semble/src/semble/agents/claude.md) | agentRuntime signal |
| agentRuntime | [src/semble/agents/commandcode.md](../../../../sources/MinishLab__semble/src/semble/agents/commandcode.md) | agentRuntime signal |
| instruction | [src/semble/agents/gemini.md](../../../../sources/MinishLab__semble/src/semble/agents/gemini.md) | instruction signal |
| config | [Makefile](../../../../sources/MinishLab__semble/Makefile) | config signal |
| config | [pyproject.toml](../../../../sources/MinishLab__semble/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/MinishLab__semble/uv.lock) | config signal |
| ci | [.github/workflows/ci.yaml](../../../../sources/MinishLab__semble/.github/workflows/ci.yaml) | ci support |
| ci | [.github/workflows/release.yaml](../../../../sources/MinishLab__semble/.github/workflows/release.yaml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 12 | [src/semble/installer/agents.py](../../../../sources/MinishLab__semble/src/semble/installer/agents.py)<br>[src/semble/agents/antigravity.md](../../../../sources/MinishLab__semble/src/semble/agents/antigravity.md)<br>[src/semble/agents/claude.md](../../../../sources/MinishLab__semble/src/semble/agents/claude.md)<br>[src/semble/agents/commandcode.md](../../../../sources/MinishLab__semble/src/semble/agents/commandcode.md)<br>[src/semble/agents/copilot.md](../../../../sources/MinishLab__semble/src/semble/agents/copilot.md)<br>[src/semble/agents/cursor.md](../../../../sources/MinishLab__semble/src/semble/agents/cursor.md)<br>[src/semble/agents/gemini.md](../../../../sources/MinishLab__semble/src/semble/agents/gemini.md)<br>[src/semble/agents/kiro.md](../../../../sources/MinishLab__semble/src/semble/agents/kiro.md) |
| mcp | 2 | [tests/test_mcp.py](../../../../sources/MinishLab__semble/tests/test_mcp.py)<br>[src/semble/mcp.py](../../../../sources/MinishLab__semble/src/semble/mcp.py) |
| retrieval | 10 | [tests/index/test_dense.py](../../../../sources/MinishLab__semble/tests/index/test_dense.py)<br>[tests/index/test_index.py](../../../../sources/MinishLab__semble/tests/index/test_index.py)<br>[src/semble/index/__init__.py](../../../../sources/MinishLab__semble/src/semble/index/__init__.py)<br>[src/semble/index/create.py](../../../../sources/MinishLab__semble/src/semble/index/create.py)<br>[src/semble/index/dense.py](../../../../sources/MinishLab__semble/src/semble/index/dense.py)<br>[src/semble/index/file_walker.py](../../../../sources/MinishLab__semble/src/semble/index/file_walker.py)<br>[src/semble/index/files.py](../../../../sources/MinishLab__semble/src/semble/index/files.py)<br>[src/semble/index/index.py](../../../../sources/MinishLab__semble/src/semble/index/index.py) |
| spec | 0 | 명확하지 않음 |
| eval | 17 | [tests/__init__.py](../../../../sources/MinishLab__semble/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/MinishLab__semble/tests/conftest.py)<br>[tests/test_cache.py](../../../../sources/MinishLab__semble/tests/test_cache.py)<br>[tests/test_chunker.py](../../../../sources/MinishLab__semble/tests/test_chunker.py)<br>[tests/test_cli.py](../../../../sources/MinishLab__semble/tests/test_cli.py)<br>[tests/test_file_walker.py](../../../../sources/MinishLab__semble/tests/test_file_walker.py)<br>[tests/test_files.py](../../../../sources/MinishLab__semble/tests/test_files.py)<br>[tests/test_git.py](../../../../sources/MinishLab__semble/tests/test_git.py) |
| security | 0 | 명확하지 않음 |
| ci | 2 | [.github/workflows/ci.yaml](../../../../sources/MinishLab__semble/.github/workflows/ci.yaml)<br>[.github/workflows/release.yaml](../../../../sources/MinishLab__semble/.github/workflows/release.yaml) |
| container | 0 | 명확하지 않음 |
| instruction | 2 | [src/semble/agents/claude.md](../../../../sources/MinishLab__semble/src/semble/agents/claude.md)<br>[src/semble/agents/gemini.md](../../../../sources/MinishLab__semble/src/semble/agents/gemini.md) |
| docs | 3 | [README.md](../../../../sources/MinishLab__semble/README.md)<br>[docs/installation.md](../../../../sources/MinishLab__semble/docs/installation.md)<br>[benchmarks/README.md](../../../../sources/MinishLab__semble/benchmarks/README.md) |
| config | 3 | [Makefile](../../../../sources/MinishLab__semble/Makefile)<br>[pyproject.toml](../../../../sources/MinishLab__semble/pyproject.toml)<br>[uv.lock](../../../../sources/MinishLab__semble/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 17 | [tests/__init__.py](../../../../sources/MinishLab__semble/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/MinishLab__semble/tests/conftest.py)<br>[tests/test_cache.py](../../../../sources/MinishLab__semble/tests/test_cache.py)<br>[tests/test_chunker.py](../../../../sources/MinishLab__semble/tests/test_chunker.py)<br>[tests/test_cli.py](../../../../sources/MinishLab__semble/tests/test_cli.py)<br>[tests/test_file_walker.py](../../../../sources/MinishLab__semble/tests/test_file_walker.py) |
| CI workflow | 2 | [.github/workflows/ci.yaml](../../../../sources/MinishLab__semble/.github/workflows/ci.yaml)<br>[.github/workflows/release.yaml](../../../../sources/MinishLab__semble/.github/workflows/release.yaml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 2 | [src/semble/agents/claude.md](../../../../sources/MinishLab__semble/src/semble/agents/claude.md)<br>[src/semble/agents/gemini.md](../../../../sources/MinishLab__semble/src/semble/agents/gemini.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/test_mcp.py`, `src/semble/mcp.py`, `src/semble/installer/agents.py`.
2. agent/tool runtime 매핑: `src/semble/installer/agents.py`, `src/semble/agents/antigravity.md`, `src/semble/agents/claude.md`.
3. retrieval/memory/indexing 확인: `tests/index/test_dense.py`, `tests/index/test_index.py`, `src/semble/index/__init__.py`.
4. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/conftest.py`, `tests/test_cache.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Fast and Accurate Code Search for Agents. Uses ~98% fewer tokens than grep+read. 핵심 구조 신호는 Python, pyproject.toml, Makefile, README.md, LICENSE, openai이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
