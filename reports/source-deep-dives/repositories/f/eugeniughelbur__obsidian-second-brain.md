# eugeniughelbur/obsidian-second-brain 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Cross-CLI skill for Obsidian: turn your vault into a living AI-first second brain across Claude Code, Codex, Gemini, and OpenCode. 43 commands - now with /obsidian-architect to document your codebase, key-less web research, Google Calendar, and self-rewriting notes.

## 요약

- 조사 단위: `sources/eugeniughelbur__obsidian-second-brain` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 161 files, 29 directories, depth score 95, key references 11개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=SKILL.md, hooks/load_vault_context.py, hooks/obsidian-bg-agent.hook.yaml이고, 의존성 단서는 openai, gemini, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | eugeniughelbur/obsidian-second-brain |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | Python |
| Stars | 2519 |
| Forks | 295 |
| License | MIT |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/eugeniughelbur__obsidian-second-brain](../../../../sources/eugeniughelbur__obsidian-second-brain) |
| 기존 보고서 | [reports/llm-wiki/repositories/eugeniughelbur__obsidian-second-brain.md](../../../llm-wiki/repositories/eugeniughelbur__obsidian-second-brain.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 161 / 29 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | _includes, .github, adapters, commands, examples, hooks, integrations, media, references, scripts, tests |
| 상위 확장자 | .md: 71, .py: 46, .sh: 16, .yml: 8, .template: 4, (none): 4, .example: 3, .yaml: 2, .cff: 1, .html: 1, .json: 1, .lock: 1 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 3 |
| _includes | top-level component | 1 |
| .github | ci surface | 1 |
| adapters | top-level component | 1 |
| commands | top-level component | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| examples/sample-vault | examples workspace | 1 |
| hooks | top-level component | 1 |
| integrations | top-level component | 1 |
| media | top-level component | 1 |
| references | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, gemini |
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
| agentRuntime | [SKILL.md](../../../../sources/eugeniughelbur__obsidian-second-brain/SKILL.md) | agentRuntime signal |
| agentRuntime | [hooks/load_vault_context.py](../../../../sources/eugeniughelbur__obsidian-second-brain/hooks/load_vault_context.py) | agentRuntime signal |
| agentRuntime | [hooks/obsidian-bg-agent.hook.yaml](../../../../sources/eugeniughelbur__obsidian-second-brain/hooks/obsidian-bg-agent.hook.yaml) | agentRuntime signal |
| agentRuntime | [hooks/obsidian-bg-agent.sh](../../../../sources/eugeniughelbur__obsidian-second-brain/hooks/obsidian-bg-agent.sh) | agentRuntime signal |
| instruction | [CLAUDE.md](../../../../sources/eugeniughelbur__obsidian-second-brain/CLAUDE.md) | instruction signal |
| config | [pyproject.toml](../../../../sources/eugeniughelbur__obsidian-second-brain/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/eugeniughelbur__obsidian-second-brain/uv.lock) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/eugeniughelbur__obsidian-second-brain/.github/workflows/ci.yml) | ci support |
| ci | [.github/workflows/scorecard.yml](../../../../sources/eugeniughelbur__obsidian-second-brain/.github/workflows/scorecard.yml) | ci support |
| eval | [tests/test_research_sources.py](../../../../sources/eugeniughelbur__obsidian-second-brain/tests/test_research_sources.py) | eval support |
| eval | [tests/test_smoke.py](../../../../sources/eugeniughelbur__obsidian-second-brain/tests/test_smoke.py) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 7 | [SKILL.md](../../../../sources/eugeniughelbur__obsidian-second-brain/SKILL.md)<br>[hooks/load_vault_context.py](../../../../sources/eugeniughelbur__obsidian-second-brain/hooks/load_vault_context.py)<br>[hooks/obsidian-bg-agent.hook.yaml](../../../../sources/eugeniughelbur__obsidian-second-brain/hooks/obsidian-bg-agent.hook.yaml)<br>[hooks/obsidian-bg-agent.sh](../../../../sources/eugeniughelbur__obsidian-second-brain/hooks/obsidian-bg-agent.sh)<br>[hooks/postcompact.hook.example.json](../../../../sources/eugeniughelbur__obsidian-second-brain/hooks/postcompact.hook.example.json)<br>[hooks/validate-ai-first.hook.yaml](../../../../sources/eugeniughelbur__obsidian-second-brain/hooks/validate-ai-first.hook.yaml)<br>[hooks/validate-ai-first.sh](../../../../sources/eugeniughelbur__obsidian-second-brain/hooks/validate-ai-first.sh) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 2 | [examples/sample-vault/wiki/logs/2026-04-27 — Tide retention rebuild.md](../../../../sources/eugeniughelbur__obsidian-second-brain/examples/sample-vault/wiki/logs/2026-04-27 — Tide retention rebuild.md)<br>[commands/obsidian-ingest.md](../../../../sources/eugeniughelbur__obsidian-second-brain/commands/obsidian-ingest.md) |
| spec | 2 | [architecture.md](../../../../sources/eugeniughelbur__obsidian-second-brain/architecture.md)<br>[commands/obsidian-adr.md](../../../../sources/eugeniughelbur__obsidian-second-brain/commands/obsidian-adr.md) |
| eval | 2 | [tests/test_research_sources.py](../../../../sources/eugeniughelbur__obsidian-second-brain/tests/test_research_sources.py)<br>[tests/test_smoke.py](../../../../sources/eugeniughelbur__obsidian-second-brain/tests/test_smoke.py) |
| security | 1 | [SECURITY.md](../../../../sources/eugeniughelbur__obsidian-second-brain/SECURITY.md) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/eugeniughelbur__obsidian-second-brain/.github/workflows/ci.yml)<br>[.github/workflows/scorecard.yml](../../../../sources/eugeniughelbur__obsidian-second-brain/.github/workflows/scorecard.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [CLAUDE.md](../../../../sources/eugeniughelbur__obsidian-second-brain/CLAUDE.md) |
| docs | 3 | [README.md](../../../../sources/eugeniughelbur__obsidian-second-brain/README.md)<br>[integrations/telegram-journal/README.md](../../../../sources/eugeniughelbur__obsidian-second-brain/integrations/telegram-journal/README.md)<br>[examples/README.md](../../../../sources/eugeniughelbur__obsidian-second-brain/examples/README.md) |
| config | 2 | [pyproject.toml](../../../../sources/eugeniughelbur__obsidian-second-brain/pyproject.toml)<br>[uv.lock](../../../../sources/eugeniughelbur__obsidian-second-brain/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 2 | [tests/test_research_sources.py](../../../../sources/eugeniughelbur__obsidian-second-brain/tests/test_research_sources.py)<br>[tests/test_smoke.py](../../../../sources/eugeniughelbur__obsidian-second-brain/tests/test_smoke.py) |
| CI workflow | 2 | [.github/workflows/ci.yml](../../../../sources/eugeniughelbur__obsidian-second-brain/.github/workflows/ci.yml)<br>[.github/workflows/scorecard.yml](../../../../sources/eugeniughelbur__obsidian-second-brain/.github/workflows/scorecard.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [SECURITY.md](../../../../sources/eugeniughelbur__obsidian-second-brain/SECURITY.md) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/eugeniughelbur__obsidian-second-brain/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `SKILL.md`, `hooks/load_vault_context.py`, `hooks/obsidian-bg-agent.hook.yaml`.
2. agent/tool runtime 매핑: `SKILL.md`, `hooks/load_vault_context.py`, `hooks/obsidian-bg-agent.hook.yaml`.
3. retrieval/memory/indexing 확인: `examples/sample-vault/wiki/logs/2026-04-27 — Tide retention rebuild.md`, `commands/obsidian-ingest.md`.
4. test/eval 파일로 동작 검증: `tests/test_research_sources.py`, `tests/test_smoke.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Cross CLI skill for Obsidian turn your vault into a living AI first second brain across Claude Code, Codex, Gemini, and . 핵심 구조 신호는 Python, pyproject.toml, README.md, CLAUDE.md, LICENSE, openai이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
