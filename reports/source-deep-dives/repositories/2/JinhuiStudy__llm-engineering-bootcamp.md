# JinhuiStudy/llm-engineering-bootcamp 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

14-day hardcore LLM engineering bootcamp curriculum — Prompt / Structured Output / Tool Use / RAG / Eval / Agent / MCP / Observability / Production. Free resources, self-hostable, Korean+English.

## 요약

- 조사 단위: `sources/JinhuiStudy__llm-engineering-bootcamp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 141 files, 37 directories, depth score 102, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=projects/day10-mcp-server/pyproject.toml, projects/day10-mcp-server/README.md, projects/day10-mcp-server/server.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | JinhuiStudy/llm-engineering-bootcamp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/JinhuiStudy__llm-engineering-bootcamp](../../../../sources/JinhuiStudy__llm-engineering-bootcamp) |
| 기존 보고서 | [reports/korea-trending/repositories/JinhuiStudy__llm-engineering-bootcamp.md](../../../korea-trending/repositories/JinhuiStudy__llm-engineering-bootcamp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 141 / 37 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, cheatsheets, curriculum, data, infra, notes, projects, resources, setup, shared |
| 상위 확장자 | .md: 63, .py: 45, .toml: 14, .yml: 6, (none): 6, .txt: 4, .example: 1, .json: 1, .sh: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| cheatsheets | top-level component | 1 |
| curriculum | top-level component | 1 |
| data | top-level component | 1 |
| infra | top-level component | 1 |
| notes | top-level component | 1 |
| projects | top-level component | 1 |
| resources | top-level component | 1 |
| setup | top-level component | 1 |
| shared | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | setup | make setup |
| utility | Makefile | verify | make verify |
| utility | Makefile | status | make status |
| utility | Makefile | qdrant-up | make qdrant-up |
| utility | Makefile | qdrant-down | make qdrant-down |
| utility | Makefile | langfuse-up | make langfuse-up |
| utility | Makefile | langfuse-down | make langfuse-down |
| utility | Makefile | phoenix-up | make phoenix-up |
| utility | Makefile | infra-up | make infra-up |
| utility | Makefile | infra-down | make infra-down |
| utility | Makefile | ollama-pull | make ollama-pull |
| test | Makefile | mcp-inspector | make mcp-inspector |
| quality | Makefile | fmt | make fmt |
| quality | Makefile | lint | make lint |
| quality | Makefile | typecheck | make typecheck |
| test | Makefile | test | make test |
| utility | Makefile | smoke-llm | make smoke-llm |
| utility | Makefile | smoke-embed | make smoke-embed |


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
| mcp | [projects/day10-mcp-server/pyproject.toml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day10-mcp-server/pyproject.toml) | mcp signal |
| mcp | [projects/day10-mcp-server/README.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day10-mcp-server/README.md) | mcp signal |
| mcp | [projects/day10-mcp-server/server.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day10-mcp-server/server.py) | mcp signal |
| mcp | [curriculum/week2-day11-mcp.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/curriculum/week2-day11-mcp.md) | mcp signal |
| agentRuntime | [projects/day04-tool-agent/agent.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day04-tool-agent/agent.py) | agentRuntime signal |
| agentRuntime | [projects/day04-tool-agent/tools_schema.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day04-tool-agent/tools_schema.py) | agentRuntime signal |
| agentRuntime | [projects/day04-tool-agent/tools/__init__.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day04-tool-agent/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [projects/day04-tool-agent/tools/calculator.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day04-tool-agent/tools/calculator.py) | agentRuntime signal |
| entrypoints | [projects/final-portfolio/app/main.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/final-portfolio/app/main.py) | entrypoints signal |
| config | [Makefile](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/Makefile) | config signal |
| config | [shared/pyproject.toml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/shared/pyproject.toml) | config signal |
| config | [projects/final-portfolio/pyproject.toml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/final-portfolio/pyproject.toml) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [projects/final-portfolio/app/main.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/final-portfolio/app/main.py)<br>[projects/day10-mcp-server/server.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day10-mcp-server/server.py) |
| agentRuntime | 9 | [projects/day04-tool-agent/agent.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day04-tool-agent/agent.py)<br>[projects/day04-tool-agent/tools_schema.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day04-tool-agent/tools_schema.py)<br>[projects/day04-tool-agent/tools/__init__.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day04-tool-agent/tools/__init__.py)<br>[projects/day04-tool-agent/tools/calculator.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day04-tool-agent/tools/calculator.py)<br>[projects/day04-tool-agent/tools/file_io.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day04-tool-agent/tools/file_io.py)<br>[projects/day04-tool-agent/tools/weather.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day04-tool-agent/tools/weather.py)<br>[projects/day04-tool-agent/tools/web_search.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day04-tool-agent/tools/web_search.py)<br>[projects/day02-prompt-lab/runner.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day02-prompt-lab/runner.py) |
| mcp | 5 | [projects/day10-mcp-server/pyproject.toml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day10-mcp-server/pyproject.toml)<br>[projects/day10-mcp-server/README.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day10-mcp-server/README.md)<br>[projects/day10-mcp-server/server.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day10-mcp-server/server.py)<br>[curriculum/week2-day11-mcp.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/curriculum/week2-day11-mcp.md)<br>[cheatsheets/mcp-cheatsheet.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/cheatsheets/mcp-cheatsheet.md) |
| retrieval | 27 | [INDEX.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/INDEX.md)<br>[projects/day12-local-llm/ollama_rag.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day12-local-llm/ollama_rag.py)<br>[projects/day09-langgraph-agent/graph.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day09-langgraph-agent/graph.py)<br>[projects/day08-rag-eval/golden_example.json](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day08-rag-eval/golden_example.json)<br>[projects/day08-rag-eval/pyproject.toml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day08-rag-eval/pyproject.toml)<br>[projects/day08-rag-eval/README.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day08-rag-eval/README.md)<br>[projects/day08-rag-eval/run_ragas.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day08-rag-eval/run_ragas.py)<br>[projects/day07-advanced-rag/pyproject.toml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day07-advanced-rag/pyproject.toml) |
| spec | 2 | [projects/final-portfolio/ARCHITECTURE.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/final-portfolio/ARCHITECTURE.md)<br>[curriculum/00-roadmap.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/curriculum/00-roadmap.md) |
| eval | 13 | [projects/day12-local-llm/benchmark.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day12-local-llm/benchmark.py)<br>[projects/day11-observability/instrument_example.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day11-observability/instrument_example.py)<br>[projects/day11-observability/prompt_cache_demo.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day11-observability/prompt_cache_demo.py)<br>[projects/day11-observability/pyproject.toml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day11-observability/pyproject.toml)<br>[projects/day11-observability/rate_limit_demo.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day11-observability/rate_limit_demo.py)<br>[projects/day11-observability/README.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day11-observability/README.md)<br>[projects/day08-rag-eval/golden_example.json](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day08-rag-eval/golden_example.json)<br>[projects/day08-rag-eval/pyproject.toml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day08-rag-eval/pyproject.toml) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 2 | [infra/qdrant/docker-compose.yml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/infra/qdrant/docker-compose.yml)<br>[infra/langfuse/docker-compose.yml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/infra/langfuse/docker-compose.yml) |
| instruction | 0 | 명확하지 않음 |
| docs | 19 | [README.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/README.md)<br>[shared/README.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/shared/README.md)<br>[projects/final-portfolio/README.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/final-portfolio/README.md)<br>[projects/day12-local-llm/README.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day12-local-llm/README.md)<br>[projects/day11-observability/README.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day11-observability/README.md)<br>[projects/day10-mcp-server/README.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day10-mcp-server/README.md)<br>[projects/day09-langgraph-agent/README.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day09-langgraph-agent/README.md)<br>[projects/day08-rag-eval/README.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day08-rag-eval/README.md) |
| config | 15 | [Makefile](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/Makefile)<br>[shared/pyproject.toml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/shared/pyproject.toml)<br>[projects/final-portfolio/pyproject.toml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/final-portfolio/pyproject.toml)<br>[projects/day12-local-llm/pyproject.toml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day12-local-llm/pyproject.toml)<br>[projects/day11-observability/pyproject.toml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day11-observability/pyproject.toml)<br>[projects/day10-mcp-server/pyproject.toml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day10-mcp-server/pyproject.toml)<br>[projects/day09-langgraph-agent/pyproject.toml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day09-langgraph-agent/pyproject.toml)<br>[projects/day08-rag-eval/pyproject.toml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day08-rag-eval/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 13 | [projects/day12-local-llm/benchmark.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day12-local-llm/benchmark.py)<br>[projects/day11-observability/instrument_example.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day11-observability/instrument_example.py)<br>[projects/day11-observability/prompt_cache_demo.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day11-observability/prompt_cache_demo.py)<br>[projects/day11-observability/pyproject.toml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day11-observability/pyproject.toml)<br>[projects/day11-observability/rate_limit_demo.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day11-observability/rate_limit_demo.py)<br>[projects/day11-observability/README.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day11-observability/README.md) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 2 | [infra/qdrant/docker-compose.yml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/infra/qdrant/docker-compose.yml)<br>[infra/langfuse/docker-compose.yml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/infra/langfuse/docker-compose.yml) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `projects/day10-mcp-server/pyproject.toml`, `projects/day10-mcp-server/README.md`, `projects/day10-mcp-server/server.py`.
2. entrypoint를 따라 실행 흐름 확인: `projects/final-portfolio/app/main.py`, `projects/day10-mcp-server/server.py`.
3. agent/tool runtime 매핑: `projects/day04-tool-agent/agent.py`, `projects/day04-tool-agent/tools_schema.py`, `projects/day04-tool-agent/tools/__init__.py`.
4. retrieval/memory/indexing 확인: `INDEX.md`, `projects/day12-local-llm/ollama_rag.py`, `projects/day09-langgraph-agent/graph.py`.
5. test/eval 파일로 동작 검증: `projects/day12-local-llm/benchmark.py`, `projects/day11-observability/instrument_example.py`, `projects/day11-observability/prompt_cache_demo.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 14 day hardcore LLM engineering bootcamp curriculum — Prompt / Structured Output / Tool Use / RAG / Eval / Agent / MCP /. 핵심 구조 신호는 Python, Makefile, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
