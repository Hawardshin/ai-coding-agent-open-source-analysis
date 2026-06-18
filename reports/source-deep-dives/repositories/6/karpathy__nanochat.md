# karpathy/nanochat 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

The best ChatGPT that $100 can buy.

## 요약

- 조사 단위: `sources/karpathy__nanochat` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 56 files, 9 directories, depth score 56, key references 7개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 api/server, agent/tool runtime, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 config=pyproject.toml, uv.lock이고, 의존성 단서는 fastapi, torch, transformers, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | karpathy/nanochat |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | global |
| Language | Python |
| Stars | 55166 |
| Forks | 7579 |
| License | MIT |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/karpathy__nanochat](../../../../sources/karpathy__nanochat) |
| 기존 보고서 | [reports/global-trending/repositories/karpathy__nanochat.md](../../../global-trending/repositories/karpathy__nanochat.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 56 / 9 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .claude, dev, nanochat, runs, scripts, tasks, tests |
| 상위 확장자 | .py: 36, .md: 4, .sh: 4, (none): 3, .html: 2, .ipynb: 2, .png: 2, .lock: 1, .svg: 1, .toml: 1 |
| 소스 패턴 | api/server, agent/tool runtime, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 3 |
| dev | top-level component | 1 |
| nanochat | top-level component | 1 |
| runs | top-level component | 1 |
| scripts | top-level component | 1 |
| tasks | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | torch, transformers |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| config | [pyproject.toml](../../../../sources/karpathy__nanochat/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/karpathy__nanochat/uv.lock) | config signal |
| docs | [README.md](../../../../sources/karpathy__nanochat/README.md) | docs signal |
| eval | [tests/test_attention_fallback.py](../../../../sources/karpathy__nanochat/tests/test_attention_fallback.py) | eval signal |
| eval | [tests/test_engine.py](../../../../sources/karpathy__nanochat/tests/test_engine.py) | eval signal |
| eval | [scripts/base_eval.py](../../../../sources/karpathy__nanochat/scripts/base_eval.py) | eval signal |
| eval | [scripts/chat_eval.py](../../../../sources/karpathy__nanochat/scripts/chat_eval.py) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 1 | [.claude/skills/read-arxiv-paper/SKILL.md](../../../../sources/karpathy__nanochat/.claude/skills/read-arxiv-paper/SKILL.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 7 | [tests/test_attention_fallback.py](../../../../sources/karpathy__nanochat/tests/test_attention_fallback.py)<br>[tests/test_engine.py](../../../../sources/karpathy__nanochat/tests/test_engine.py)<br>[scripts/base_eval.py](../../../../sources/karpathy__nanochat/scripts/base_eval.py)<br>[scripts/chat_eval.py](../../../../sources/karpathy__nanochat/scripts/chat_eval.py)<br>[scripts/tok_eval.py](../../../../sources/karpathy__nanochat/scripts/tok_eval.py)<br>[nanochat/core_eval.py](../../../../sources/karpathy__nanochat/nanochat/core_eval.py)<br>[nanochat/loss_eval.py](../../../../sources/karpathy__nanochat/nanochat/loss_eval.py) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/karpathy__nanochat/README.md) |
| config | 2 | [pyproject.toml](../../../../sources/karpathy__nanochat/pyproject.toml)<br>[uv.lock](../../../../sources/karpathy__nanochat/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 7 | [tests/test_attention_fallback.py](../../../../sources/karpathy__nanochat/tests/test_attention_fallback.py)<br>[tests/test_engine.py](../../../../sources/karpathy__nanochat/tests/test_engine.py)<br>[scripts/base_eval.py](../../../../sources/karpathy__nanochat/scripts/base_eval.py)<br>[scripts/chat_eval.py](../../../../sources/karpathy__nanochat/scripts/chat_eval.py)<br>[scripts/tok_eval.py](../../../../sources/karpathy__nanochat/scripts/tok_eval.py)<br>[nanochat/core_eval.py](../../../../sources/karpathy__nanochat/nanochat/core_eval.py) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `pyproject.toml`, `uv.lock`, `README.md`.
2. agent/tool runtime 매핑: `.claude/skills/read-arxiv-paper/SKILL.md`.
3. test/eval 파일로 동작 검증: `tests/test_attention_fallback.py`, `tests/test_engine.py`, `scripts/base_eval.py`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 The best ChatGPT that $100 can buy.. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, fastapi, torch이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
