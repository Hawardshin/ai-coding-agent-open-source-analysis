# Ar9av/obsidian-wiki 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Framework for AI agents to build and maintain a digital brain through Obsidian wiki using Karpathy's LLM Wiki pattern

## 요약

- 조사 단위: `sources/Ar9av__obsidian-wiki` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 89 files, 73 directories, depth score 87, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, .skills/wiki-update/SKILL.md, .skills/wiki-synthesize/SKILL.md이고, 의존성 단서는 claude, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Ar9av/obsidian-wiki |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | Python |
| Stars | 2232 |
| Forks | 224 |
| License | MIT |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Ar9av__obsidian-wiki](../../../../sources/Ar9av__obsidian-wiki) |
| 기존 보고서 | [reports/llm-wiki/repositories/Ar9av__obsidian-wiki.md](../../../llm-wiki/repositories/Ar9av__obsidian-wiki.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 89 / 73 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .agent, .agents, .claude, .cursor, .github, .kiro, .pi, .skills, .windsurf, obsidian_wiki, scripts, tests |
| 상위 확장자 | .md: 57, .py: 16, .sh: 4, .html: 2, .yml: 2, (none): 2, .example: 1, .json: 1, .mdc: 1, .plist: 1, .toml: 1, .txt: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 2 |
| .github | ci surface | 1 |
| obsidian_wiki | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | obsidian-wiki | obsidian-wiki |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | claude |
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
| agentRuntime | [AGENTS.md](../../../../sources/Ar9av__obsidian-wiki/AGENTS.md) | agentRuntime signal |
| agentRuntime | [.skills/wiki-update/SKILL.md](../../../../sources/Ar9av__obsidian-wiki/.skills/wiki-update/SKILL.md) | agentRuntime signal |
| agentRuntime | [.skills/wiki-synthesize/SKILL.md](../../../../sources/Ar9av__obsidian-wiki/.skills/wiki-synthesize/SKILL.md) | agentRuntime signal |
| agentRuntime | [.skills/wiki-switch/SKILL.md](../../../../sources/Ar9av__obsidian-wiki/.skills/wiki-switch/SKILL.md) | agentRuntime signal |
| entrypoints | [obsidian_wiki/__main__.py](../../../../sources/Ar9av__obsidian-wiki/obsidian_wiki/__main__.py) | entrypoints signal |
| instruction | [.github/copilot-instructions.md](../../../../sources/Ar9av__obsidian-wiki/.github/copilot-instructions.md) | instruction signal |
| instruction | [.cursor/rules/obsidian-wiki.mdc](../../../../sources/Ar9av__obsidian-wiki/.cursor/rules/obsidian-wiki.mdc) | instruction signal |
| config | [pyproject.toml](../../../../sources/Ar9av__obsidian-wiki/pyproject.toml) | config signal |
| ci | [.github/workflows/publish.yml](../../../../sources/Ar9av__obsidian-wiki/.github/workflows/publish.yml) | ci support |
| ci | [.github/workflows/setup.yml](../../../../sources/Ar9av__obsidian-wiki/.github/workflows/setup.yml) | ci support |
| eval | [tests/test_okf_same_name_link_roundtrip.py](../../../../sources/Ar9av__obsidian-wiki/tests/test_okf_same_name_link_roundtrip.py) | eval support |
| eval | [.skills/skill-creator/scripts/aggregate_benchmark.py](../../../../sources/Ar9av__obsidian-wiki/.skills/skill-creator/scripts/aggregate_benchmark.py) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [obsidian_wiki/__main__.py](../../../../sources/Ar9av__obsidian-wiki/obsidian_wiki/__main__.py) |
| agentRuntime | 54 | [AGENTS.md](../../../../sources/Ar9av__obsidian-wiki/AGENTS.md)<br>[.skills/wiki-update/SKILL.md](../../../../sources/Ar9av__obsidian-wiki/.skills/wiki-update/SKILL.md)<br>[.skills/wiki-synthesize/SKILL.md](../../../../sources/Ar9av__obsidian-wiki/.skills/wiki-synthesize/SKILL.md)<br>[.skills/wiki-switch/SKILL.md](../../../../sources/Ar9av__obsidian-wiki/.skills/wiki-switch/SKILL.md)<br>[.skills/wiki-status/SKILL.md](../../../../sources/Ar9av__obsidian-wiki/.skills/wiki-status/SKILL.md)<br>[.skills/wiki-stage-commit/SKILL.md](../../../../sources/Ar9av__obsidian-wiki/.skills/wiki-stage-commit/SKILL.md)<br>[.skills/wiki-setup/SKILL.md](../../../../sources/Ar9av__obsidian-wiki/.skills/wiki-setup/SKILL.md)<br>[.skills/wiki-research/SKILL.md](../../../../sources/Ar9av__obsidian-wiki/.skills/wiki-research/SKILL.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 50 | [scripts/com.obsidian-wiki.daily-update.plist](../../../../sources/Ar9av__obsidian-wiki/scripts/com.obsidian-wiki.daily-update.plist)<br>[scripts/wiki-notify.sh](../../../../sources/Ar9av__obsidian-wiki/scripts/wiki-notify.sh)<br>[obsidian_wiki/__init__.py](../../../../sources/Ar9av__obsidian-wiki/obsidian_wiki/__init__.py)<br>[obsidian_wiki/__main__.py](../../../../sources/Ar9av__obsidian-wiki/obsidian_wiki/__main__.py)<br>[obsidian_wiki/cli.py](../../../../sources/Ar9av__obsidian-wiki/obsidian_wiki/cli.py)<br>[.windsurf/rules/obsidian-wiki.md](../../../../sources/Ar9av__obsidian-wiki/.windsurf/rules/obsidian-wiki.md)<br>[.skills/wiki-update/SKILL.md](../../../../sources/Ar9av__obsidian-wiki/.skills/wiki-update/SKILL.md)<br>[.skills/wiki-synthesize/SKILL.md](../../../../sources/Ar9av__obsidian-wiki/.skills/wiki-synthesize/SKILL.md) |
| spec | 0 | 명확하지 않음 |
| eval | 6 | [tests/test_okf_same_name_link_roundtrip.py](../../../../sources/Ar9av__obsidian-wiki/tests/test_okf_same_name_link_roundtrip.py)<br>[.skills/skill-creator/scripts/aggregate_benchmark.py](../../../../sources/Ar9av__obsidian-wiki/.skills/skill-creator/scripts/aggregate_benchmark.py)<br>[.skills/skill-creator/scripts/run_eval.py](../../../../sources/Ar9av__obsidian-wiki/.skills/skill-creator/scripts/run_eval.py)<br>[.skills/skill-creator/eval-viewer/generate_review.py](../../../../sources/Ar9av__obsidian-wiki/.skills/skill-creator/eval-viewer/generate_review.py)<br>[.skills/skill-creator/eval-viewer/viewer.html](../../../../sources/Ar9av__obsidian-wiki/.skills/skill-creator/eval-viewer/viewer.html)<br>[.skills/skill-creator/assets/eval_review.html](../../../../sources/Ar9av__obsidian-wiki/.skills/skill-creator/assets/eval_review.html) |
| security | 0 | 명확하지 않음 |
| ci | 2 | [.github/workflows/publish.yml](../../../../sources/Ar9av__obsidian-wiki/.github/workflows/publish.yml)<br>[.github/workflows/setup.yml](../../../../sources/Ar9av__obsidian-wiki/.github/workflows/setup.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 3 | [AGENTS.md](../../../../sources/Ar9av__obsidian-wiki/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/Ar9av__obsidian-wiki/.github/copilot-instructions.md)<br>[.cursor/rules/obsidian-wiki.mdc](../../../../sources/Ar9av__obsidian-wiki/.cursor/rules/obsidian-wiki.mdc) |
| docs | 1 | [README.md](../../../../sources/Ar9av__obsidian-wiki/README.md) |
| config | 1 | [pyproject.toml](../../../../sources/Ar9av__obsidian-wiki/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 6 | [tests/test_okf_same_name_link_roundtrip.py](../../../../sources/Ar9av__obsidian-wiki/tests/test_okf_same_name_link_roundtrip.py)<br>[.skills/skill-creator/scripts/aggregate_benchmark.py](../../../../sources/Ar9av__obsidian-wiki/.skills/skill-creator/scripts/aggregate_benchmark.py)<br>[.skills/skill-creator/scripts/run_eval.py](../../../../sources/Ar9av__obsidian-wiki/.skills/skill-creator/scripts/run_eval.py)<br>[.skills/skill-creator/eval-viewer/generate_review.py](../../../../sources/Ar9av__obsidian-wiki/.skills/skill-creator/eval-viewer/generate_review.py)<br>[.skills/skill-creator/eval-viewer/viewer.html](../../../../sources/Ar9av__obsidian-wiki/.skills/skill-creator/eval-viewer/viewer.html)<br>[.skills/skill-creator/assets/eval_review.html](../../../../sources/Ar9av__obsidian-wiki/.skills/skill-creator/assets/eval_review.html) |
| CI workflow | 2 | [.github/workflows/publish.yml](../../../../sources/Ar9av__obsidian-wiki/.github/workflows/publish.yml)<br>[.github/workflows/setup.yml](../../../../sources/Ar9av__obsidian-wiki/.github/workflows/setup.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 3 | [AGENTS.md](../../../../sources/Ar9av__obsidian-wiki/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/Ar9av__obsidian-wiki/.github/copilot-instructions.md)<br>[.cursor/rules/obsidian-wiki.mdc](../../../../sources/Ar9av__obsidian-wiki/.cursor/rules/obsidian-wiki.mdc) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `AGENTS.md`, `.skills/wiki-update/SKILL.md`, `.skills/wiki-synthesize/SKILL.md`.
2. entrypoint를 따라 실행 흐름 확인: `obsidian_wiki/__main__.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `.skills/wiki-update/SKILL.md`, `.skills/wiki-synthesize/SKILL.md`.
4. retrieval/memory/indexing 확인: `scripts/com.obsidian-wiki.daily-update.plist`, `scripts/wiki-notify.sh`, `obsidian_wiki/__init__.py`.
5. test/eval 파일로 동작 검증: `tests/test_okf_same_name_link_roundtrip.py`, `.skills/skill-creator/scripts/aggregate_benchmark.py`, `.skills/skill-creator/scripts/run_eval.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Framework for AI agents to build and maintain a digital brain through Obsidian wiki using Karpathy's LLM Wiki pattern. 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, LICENSE, tests이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
