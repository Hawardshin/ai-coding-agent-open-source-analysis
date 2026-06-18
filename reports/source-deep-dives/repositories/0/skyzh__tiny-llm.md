# skyzh/tiny-llm 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

A course of learning LLM inference serving on Apple Silicon for systems engineers: build a tiny vLLM + Qwen.

## 요약

- 조사 단위: `sources/skyzh__tiny-llm` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 125 files, 18 directories, depth score 81, key references 8개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=main.py이고, 의존성 단서는 torch, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | skyzh/tiny-llm |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | Python |
| Stars | 4288 |
| Forks | 333 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/skyzh__tiny-llm](../../../../sources/skyzh__tiny-llm) |
| 기존 보고서 | [reports/global-trending/repositories/skyzh__tiny-llm.md](../../../global-trending/repositories/skyzh__tiny-llm.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 125 / 18 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, benches, book, scripts, src, tests, tests_refsol |
| 상위 확장자 | .py: 65, .md: 24, .cpp: 8, (none): 7, .metal: 4, .h: 3, .txt: 3, .yml: 3, .toml: 2, ._: 1, .json: 1, .lock: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 5 |
| tests | validation surface | 4 |
| .github | ci surface | 1 |
| benches | validation surface | 1 |
| book | top-level component | 1 |
| scripts | top-level component | 1 |
| tests_refsol | validation surface | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | torch |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [main.py](../../../../sources/skyzh__tiny-llm/main.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/skyzh__tiny-llm/pyproject.toml) | config signal |
| ci | [.github/workflows/macos.yml](../../../../sources/skyzh__tiny-llm/.github/workflows/macos.yml) | ci signal |
| ci | [.github/workflows/main.yml](../../../../sources/skyzh__tiny-llm/.github/workflows/main.yml) | ci signal |
| ci | [.github/workflows/spell-check.yml](../../../../sources/skyzh__tiny-llm/.github/workflows/spell-check.yml) | ci signal |
| eval | [bench.py](../../../../sources/skyzh__tiny-llm/bench.py) | eval support |
| eval | [tests_refsol/test_rope.py](../../../../sources/skyzh__tiny-llm/tests_refsol/test_rope.py) | eval support |
| instruction | [AGENTS.md](../../../../sources/skyzh__tiny-llm/AGENTS.md) | instruction support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [main.py](../../../../sources/skyzh__tiny-llm/main.py) |
| agentRuntime | 1 | [AGENTS.md](../../../../sources/skyzh__tiny-llm/AGENTS.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 2 | [src/tiny_llm_ref/embedding.py](../../../../sources/skyzh__tiny-llm/src/tiny_llm_ref/embedding.py)<br>[src/tiny_llm/embedding.py](../../../../sources/skyzh__tiny-llm/src/tiny_llm/embedding.py) |
| spec | 0 | 명확하지 않음 |
| eval | 24 | [bench.py](../../../../sources/skyzh__tiny-llm/bench.py)<br>[tests_refsol/test_rope.py](../../../../sources/skyzh__tiny-llm/tests_refsol/test_rope.py)<br>[tests_refsol/test_week_1_day_1.py](../../../../sources/skyzh__tiny-llm/tests_refsol/test_week_1_day_1.py)<br>[tests_refsol/test_week_1_day_2.py](../../../../sources/skyzh__tiny-llm/tests_refsol/test_week_1_day_2.py)<br>[tests_refsol/test_week_1_day_3.py](../../../../sources/skyzh__tiny-llm/tests_refsol/test_week_1_day_3.py)<br>[tests_refsol/test_week_1_day_4.py](../../../../sources/skyzh__tiny-llm/tests_refsol/test_week_1_day_4.py)<br>[tests_refsol/test_week_1_day_5.py](../../../../sources/skyzh__tiny-llm/tests_refsol/test_week_1_day_5.py)<br>[tests_refsol/test_week_1_day_6.py](../../../../sources/skyzh__tiny-llm/tests_refsol/test_week_1_day_6.py) |
| security | 0 | 명확하지 않음 |
| ci | 3 | [.github/workflows/macos.yml](../../../../sources/skyzh__tiny-llm/.github/workflows/macos.yml)<br>[.github/workflows/main.yml](../../../../sources/skyzh__tiny-llm/.github/workflows/main.yml)<br>[.github/workflows/spell-check.yml](../../../../sources/skyzh__tiny-llm/.github/workflows/spell-check.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [AGENTS.md](../../../../sources/skyzh__tiny-llm/AGENTS.md) |
| docs | 30 | [README.md](../../../../sources/skyzh__tiny-llm/README.md)<br>[book/.gitignore](../../../../sources/skyzh__tiny-llm/book/.gitignore)<br>[book/book.toml](../../../../sources/skyzh__tiny-llm/book/book.toml)<br>[book/sitemap.sh](../../../../sources/skyzh__tiny-llm/book/sitemap.sh)<br>[book/theme/head.hbs._](../../../../sources/skyzh__tiny-llm/book/theme/head.hbs._)<br>[book/src/copyright.md](../../../../sources/skyzh__tiny-llm/book/src/copyright.md)<br>[book/src/discord-badge.svg](../../../../sources/skyzh__tiny-llm/book/src/discord-badge.svg)<br>[book/src/glossary.md](../../../../sources/skyzh__tiny-llm/book/src/glossary.md) |
| config | 1 | [pyproject.toml](../../../../sources/skyzh__tiny-llm/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 24 | [bench.py](../../../../sources/skyzh__tiny-llm/bench.py)<br>[tests_refsol/test_rope.py](../../../../sources/skyzh__tiny-llm/tests_refsol/test_rope.py)<br>[tests_refsol/test_week_1_day_1.py](../../../../sources/skyzh__tiny-llm/tests_refsol/test_week_1_day_1.py)<br>[tests_refsol/test_week_1_day_2.py](../../../../sources/skyzh__tiny-llm/tests_refsol/test_week_1_day_2.py)<br>[tests_refsol/test_week_1_day_3.py](../../../../sources/skyzh__tiny-llm/tests_refsol/test_week_1_day_3.py)<br>[tests_refsol/test_week_1_day_4.py](../../../../sources/skyzh__tiny-llm/tests_refsol/test_week_1_day_4.py) |
| CI workflow | 3 | [.github/workflows/macos.yml](../../../../sources/skyzh__tiny-llm/.github/workflows/macos.yml)<br>[.github/workflows/main.yml](../../../../sources/skyzh__tiny-llm/.github/workflows/main.yml)<br>[.github/workflows/spell-check.yml](../../../../sources/skyzh__tiny-llm/.github/workflows/spell-check.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/skyzh__tiny-llm/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `main.py`, `pyproject.toml`, `.github/workflows/macos.yml`.
2. entrypoint를 따라 실행 흐름 확인: `main.py`.
3. agent/tool runtime 매핑: `AGENTS.md`.
4. retrieval/memory/indexing 확인: `src/tiny_llm_ref/embedding.py`, `src/tiny_llm/embedding.py`.
5. test/eval 파일로 동작 검증: `bench.py`, `tests_refsol/test_rope.py`, `tests_refsol/test_week_1_day_1.py`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 A course of learning LLM inference serving on Apple Silicon for systems engineers build a tiny vLLM + Qwen.. 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, LICENSE, torch이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
