# SamurAIGPT/llm-wiki-agent 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

A personal knowledge base that builds and maintains itself. Drop in sources — Claude (or Codex/Gemini) reads them, extracts knowledge, and maintains a persistent interlinked wiki. Works with Claude Code, Codex, OpenCode, Gemini CLI. No API key needed.

## 요약

- 조사 단위: `sources/SamurAIGPT__llm-wiki-agent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 28 files, 10 directories, depth score 69, key references 11개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=wiki/index.md, wiki/log.md, wiki/overview.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | SamurAIGPT/llm-wiki-agent |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | mixed |
| Language | Python |
| Stars | 2959 |
| Forks | 350 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/SamurAIGPT__llm-wiki-agent](../../../../sources/SamurAIGPT__llm-wiki-agent) |
| 기존 보고서 | [reports/llm-wiki/repositories/SamurAIGPT__llm-wiki-agent.md](../../../llm-wiki/repositories/SamurAIGPT__llm-wiki-agent.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 28 / 10 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .claude, docs, examples, graph, raw, tools, wiki |
| 상위 확장자 | .md: 14, .py: 9, (none): 3, .toml: 1, .txt: 1 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 2 |
| examples | top-level component | 1 |
| examples/cjk-showcase | examples workspace | 1 |
| graph | top-level component | 1 |
| raw | top-level component | 1 |
| tools | top-level component | 1 |
| wiki | top-level component | 1 |


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
| retrieval | [wiki/index.md](../../../../sources/SamurAIGPT__llm-wiki-agent/wiki/index.md) | retrieval signal |
| retrieval | [wiki/log.md](../../../../sources/SamurAIGPT__llm-wiki-agent/wiki/log.md) | retrieval signal |
| retrieval | [wiki/overview.md](../../../../sources/SamurAIGPT__llm-wiki-agent/wiki/overview.md) | retrieval signal |
| retrieval | [tools/build_graph.py](../../../../sources/SamurAIGPT__llm-wiki-agent/tools/build_graph.py) | retrieval signal |
| docs | [README.md](../../../../sources/SamurAIGPT__llm-wiki-agent/README.md) | docs signal |
| docs | [examples/cjk-showcase/README.md](../../../../sources/SamurAIGPT__llm-wiki-agent/examples/cjk-showcase/README.md) | docs signal |
| docs | [docs/automated-sync.md](../../../../sources/SamurAIGPT__llm-wiki-agent/docs/automated-sync.md) | docs signal |
| config | [pyproject.toml](../../../../sources/SamurAIGPT__llm-wiki-agent/pyproject.toml) | config signal |
| config | [requirements.txt](../../../../sources/SamurAIGPT__llm-wiki-agent/requirements.txt) | config signal |
| instruction | [AGENTS.md](../../../../sources/SamurAIGPT__llm-wiki-agent/AGENTS.md) | instruction support |
| instruction | [CLAUDE.md](../../../../sources/SamurAIGPT__llm-wiki-agent/CLAUDE.md) | instruction support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 10 | [AGENTS.md](../../../../sources/SamurAIGPT__llm-wiki-agent/AGENTS.md)<br>[tools/build_graph.py](../../../../sources/SamurAIGPT__llm-wiki-agent/tools/build_graph.py)<br>[tools/file_to_md.py](../../../../sources/SamurAIGPT__llm-wiki-agent/tools/file_to_md.py)<br>[tools/heal.py](../../../../sources/SamurAIGPT__llm-wiki-agent/tools/heal.py)<br>[tools/health.py](../../../../sources/SamurAIGPT__llm-wiki-agent/tools/health.py)<br>[tools/ingest.py](../../../../sources/SamurAIGPT__llm-wiki-agent/tools/ingest.py)<br>[tools/lint.py](../../../../sources/SamurAIGPT__llm-wiki-agent/tools/lint.py)<br>[tools/pdf2md.py](../../../../sources/SamurAIGPT__llm-wiki-agent/tools/pdf2md.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 10 | [wiki/index.md](../../../../sources/SamurAIGPT__llm-wiki-agent/wiki/index.md)<br>[wiki/log.md](../../../../sources/SamurAIGPT__llm-wiki-agent/wiki/log.md)<br>[wiki/overview.md](../../../../sources/SamurAIGPT__llm-wiki-agent/wiki/overview.md)<br>[tools/build_graph.py](../../../../sources/SamurAIGPT__llm-wiki-agent/tools/build_graph.py)<br>[tools/ingest.py](../../../../sources/SamurAIGPT__llm-wiki-agent/tools/ingest.py)<br>[graph/.gitkeep](../../../../sources/SamurAIGPT__llm-wiki-agent/graph/.gitkeep)<br>[.claude/commands/wiki-graph.md](../../../../sources/SamurAIGPT__llm-wiki-agent/.claude/commands/wiki-graph.md)<br>[.claude/commands/wiki-ingest.md](../../../../sources/SamurAIGPT__llm-wiki-agent/.claude/commands/wiki-ingest.md) |
| spec | 1 | [requirements.txt](../../../../sources/SamurAIGPT__llm-wiki-agent/requirements.txt) |
| eval | 0 | 명확하지 않음 |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 3 | [AGENTS.md](../../../../sources/SamurAIGPT__llm-wiki-agent/AGENTS.md)<br>[CLAUDE.md](../../../../sources/SamurAIGPT__llm-wiki-agent/CLAUDE.md)<br>[GEMINI.md](../../../../sources/SamurAIGPT__llm-wiki-agent/GEMINI.md) |
| docs | 3 | [README.md](../../../../sources/SamurAIGPT__llm-wiki-agent/README.md)<br>[examples/cjk-showcase/README.md](../../../../sources/SamurAIGPT__llm-wiki-agent/examples/cjk-showcase/README.md)<br>[docs/automated-sync.md](../../../../sources/SamurAIGPT__llm-wiki-agent/docs/automated-sync.md) |
| config | 2 | [pyproject.toml](../../../../sources/SamurAIGPT__llm-wiki-agent/pyproject.toml)<br>[requirements.txt](../../../../sources/SamurAIGPT__llm-wiki-agent/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 0 | 명확하지 않음 |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 3 | [AGENTS.md](../../../../sources/SamurAIGPT__llm-wiki-agent/AGENTS.md)<br>[CLAUDE.md](../../../../sources/SamurAIGPT__llm-wiki-agent/CLAUDE.md)<br>[GEMINI.md](../../../../sources/SamurAIGPT__llm-wiki-agent/GEMINI.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음; test/eval 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `wiki/index.md`, `wiki/log.md`, `wiki/overview.md`.
2. agent/tool runtime 매핑: `AGENTS.md`, `tools/build_graph.py`, `tools/file_to_md.py`.
3. retrieval/memory/indexing 확인: `wiki/index.md`, `wiki/log.md`, `wiki/overview.md`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 A personal knowledge base that builds and maintains itself. Drop in sources — Claude or Codex/Gemini reads them, extract. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, README.md, AGENTS.md, CLAUDE.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
