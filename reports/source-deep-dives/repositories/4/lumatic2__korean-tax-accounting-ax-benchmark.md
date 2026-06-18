# lumatic2/korean-tax-accounting-ax-benchmark 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Korean accounting and tax benchmark for evaluating evidence-grounded AI systems

## 요약

- 조사 단위: `sources/lumatic2__korean-tax-accounting-ax-benchmark` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 121 files, 21 directories, depth score 78, key references 7개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

평가/관측/품질 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 eval=tests/__init__.py, tests/test_agent.py, tests/test_aggregate.py이고, 의존성 단서는 openai, anthropic, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 품질/평가 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | lumatic2/korean-tax-accounting-ax-benchmark |
| 주제 | 평가/관측/품질 / 평가/관측/품질 |
| Region | korea |
| Language | Python |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/lumatic2__korean-tax-accounting-ax-benchmark](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark) |
| 기존 보고서 | [reports/korea-trending/repositories/lumatic2__korean-tax-accounting-ax-benchmark.md](../../../korea-trending/repositories/lumatic2__korean-tax-accounting-ax-benchmark.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 121 / 21 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | config, data, docs, leaderboard, scripts, src, tests |
| 상위 확장자 | .py: 58, .md: 40, .json: 5, (none): 5, .jsonl: 3, .jsx: 2, .css: 1, .lock: 1, .mjs: 1, .png: 1, .sh: 1, .svg: 1 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 56 |
| tests | validation surface | 19 |
| src | source boundary | 6 |
| config | top-level component | 1 |
| data | top-level component | 1 |
| leaderboard | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
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
| eval | [tests/__init__.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/__init__.py) | eval signal |
| eval | [tests/test_agent.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/test_agent.py) | eval signal |
| eval | [tests/test_aggregate.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/test_aggregate.py) | eval signal |
| eval | [tests/test_claude_cli.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/test_claude_cli.py) | eval signal |
| config | [pyproject.toml](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/uv.lock) | config signal |
| config | [leaderboard/package.json](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/leaderboard/package.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 4 | [src/ktaxbench/runner.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/src/ktaxbench/runner.py)<br>[src/ktaxbench/agent/__init__.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/src/ktaxbench/agent/__init__.py)<br>[src/ktaxbench/agent/tools.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/src/ktaxbench/agent/tools.py)<br>[docs/findings/agent-tool-forcing.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/docs/findings/agent-tool-forcing.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 4 | [src/ktaxbench/rag/__init__.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/src/ktaxbench/rag/__init__.py)<br>[src/ktaxbench/rag/retriever.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/src/ktaxbench/rag/retriever.py)<br>[scripts/smoke_rag.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/scripts/smoke_rag.py)<br>[docs/findings/m3-rag-vs-closed-book.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/docs/findings/m3-rag-vs-closed-book.md) |
| spec | 14 | [docs/ARCHITECTURE.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/docs/ARCHITECTURE.md)<br>[docs/benchmark-design-principles.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/docs/benchmark-design-principles.md)<br>[docs/PRD.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/docs/PRD.md)<br>[docs/adr/0001-vendor-not-import-taxagent.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/docs/adr/0001-vendor-not-import-taxagent.md)<br>[docs/adr/0002-claude-cli-first.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/docs/adr/0002-claude-cli-first.md)<br>[docs/adr/0003-calculation-as-rule-proxy.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/docs/adr/0003-calculation-as-rule-proxy.md)<br>[docs/adr/0005-agent-react-loop.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/docs/adr/0005-agent-react-loop.md)<br>[docs/adr/0006-agent-forced-mode.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/docs/adr/0006-agent-forced-mode.md) |
| eval | 23 | [tests/__init__.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/__init__.py)<br>[tests/test_agent.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/test_agent.py)<br>[tests/test_aggregate.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/test_aggregate.py)<br>[tests/test_claude_cli.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/test_claude_cli.py)<br>[tests/test_code_grader.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/test_code_grader.py)<br>[tests/test_codex_cli.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/test_codex_cli.py)<br>[tests/test_gemini_cli.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/test_gemini_cli.py)<br>[tests/test_insert_canary.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/test_insert_canary.py) |
| security | 1 | [docs/adr/0009-leaderboard-submission-policy.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/docs/adr/0009-leaderboard-submission-policy.md) |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 39 | [README.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/README.md)<br>[leaderboard/README.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/leaderboard/README.md)<br>[leaderboard/public/README.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/leaderboard/public/README.md)<br>[leaderboard/public/data/public/README.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/leaderboard/public/data/public/README.md)<br>[docs/ARCHITECTURE.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/docs/ARCHITECTURE.md)<br>[docs/benchmark-design-principles.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/docs/benchmark-design-principles.md)<br>[docs/benchmark-schema.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/docs/benchmark-schema.md)<br>[docs/data-strategy.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/docs/data-strategy.md) |
| config | 3 | [pyproject.toml](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/pyproject.toml)<br>[uv.lock](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/uv.lock)<br>[leaderboard/package.json](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/leaderboard/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 23 | [tests/__init__.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/__init__.py)<br>[tests/test_agent.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/test_agent.py)<br>[tests/test_aggregate.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/test_aggregate.py)<br>[tests/test_claude_cli.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/test_claude_cli.py)<br>[tests/test_code_grader.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/test_code_grader.py)<br>[tests/test_codex_cli.py](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/tests/test_codex_cli.py) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [docs/adr/0009-leaderboard-submission-policy.md](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark/docs/adr/0009-leaderboard-submission-policy.md) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/__init__.py`, `tests/test_agent.py`, `tests/test_aggregate.py`.
2. agent/tool runtime 매핑: `src/ktaxbench/runner.py`, `src/ktaxbench/agent/__init__.py`, `src/ktaxbench/agent/tools.py`.
3. retrieval/memory/indexing 확인: `src/ktaxbench/rag/__init__.py`, `src/ktaxbench/rag/retriever.py`, `scripts/smoke_rag.py`.
4. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/test_agent.py`, `tests/test_aggregate.py`.

## 기존 레포 인사이트

평가/관측/품질 관점에서 Korean accounting and tax benchmark for evaluating evidence grounded AI systems. 핵심 구조 신호는 Python, pyproject.toml, README.md, openai, anthropic, tests이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 평가/관측/품질 레포입니다. 활용 관점은 품질/평가 비교 지점이고, 후속 확인 포인트는 CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
