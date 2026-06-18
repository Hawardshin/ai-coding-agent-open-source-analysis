# tirth8205/code-review-graph 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Local-first code intelligence graph for MCP and CLI. Builds a persistent map of your codebase so AI coding tools read only what matters, with benchmarked context reductions on reviews and large-repo workflows.

## 요약

- 조사 단위: `sources/tirth8205__code-review-graph` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 287 files, 41 directories, depth score 114, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, diagrams/diagram7_mcp_integration_flow.png이고, 의존성 단서는 mcp, next, transformers, ollama, llama, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | tirth8205/code-review-graph |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 18632 |
| Forks | 1997 |
| License | MIT |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/tirth8205__code-review-graph](../../../../sources/tirth8205__code-review-graph) |
| 기존 보고서 | [reports/llm-wiki/repositories/tirth8205__code-review-graph.md](../../../llm-wiki/repositories/tirth8205__code-review-graph.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 287 / 41 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .beads, .github, .serena, code_review_graph, code-review-graph-vscode, diagrams, docs, evaluate, hooks, scripts, skills, tests |
| 상위 확장자 | .py: 107, .md: 42, .ts: 26, .csv: 18, (none): 12, .yml: 11, .png: 10, .json: 8, .yaml: 7, .java: 4, .sh: 3, .ipynb: 2 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 44 |
| docs | documentation surface | 18 |
| .github | ci surface | 1 |
| code_review_graph | top-level component | 1 |
| code-review-graph-vscode | top-level component | 1 |
| diagrams | top-level component | 1 |
| evaluate | top-level component | 1 |
| hooks | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | code-review-graph | code-review-graph |
| utility | pyproject.toml | crg-daemon | crg-daemon |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | transformers, ollama, llama |
| webRuntime | next |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [.mcp.json](../../../../sources/tirth8205__code-review-graph/.mcp.json) | mcp signal |
| mcp | [diagrams/diagram7_mcp_integration_flow.png](../../../../sources/tirth8205__code-review-graph/diagrams/diagram7_mcp_integration_flow.png) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/tirth8205__code-review-graph/AGENTS.md) | agentRuntime signal |
| agentRuntime | [skills/review-pr/SKILL.md](../../../../sources/tirth8205__code-review-graph/skills/review-pr/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/review-delta/SKILL.md](../../../../sources/tirth8205__code-review-graph/skills/review-delta/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/review-changes/SKILL.md](../../../../sources/tirth8205__code-review-graph/skills/review-changes/SKILL.md) | agentRuntime signal |
| entrypoints | [code_review_graph/__main__.py](../../../../sources/tirth8205__code-review-graph/code_review_graph/__main__.py) | entrypoints signal |
| entrypoints | [code_review_graph/main.py](../../../../sources/tirth8205__code-review-graph/code_review_graph/main.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/tirth8205__code-review-graph/CLAUDE.md) | instruction signal |
| instruction | [GEMINI.md](../../../../sources/tirth8205__code-review-graph/GEMINI.md) | instruction signal |
| instruction | [.github/copilot-instructions.md](../../../../sources/tirth8205__code-review-graph/.github/copilot-instructions.md) | instruction signal |
| config | [pyproject.toml](../../../../sources/tirth8205__code-review-graph/pyproject.toml) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [code_review_graph/__main__.py](../../../../sources/tirth8205__code-review-graph/code_review_graph/__main__.py)<br>[code_review_graph/main.py](../../../../sources/tirth8205__code-review-graph/code_review_graph/main.py) |
| agentRuntime | 34 | [AGENTS.md](../../../../sources/tirth8205__code-review-graph/AGENTS.md)<br>[skills/review-pr/SKILL.md](../../../../sources/tirth8205__code-review-graph/skills/review-pr/SKILL.md)<br>[skills/review-delta/SKILL.md](../../../../sources/tirth8205__code-review-graph/skills/review-delta/SKILL.md)<br>[skills/review-changes/SKILL.md](../../../../sources/tirth8205__code-review-graph/skills/review-changes/SKILL.md)<br>[skills/refactor-safely/SKILL.md](../../../../sources/tirth8205__code-review-graph/skills/refactor-safely/SKILL.md)<br>[skills/explore-codebase/SKILL.md](../../../../sources/tirth8205__code-review-graph/skills/explore-codebase/SKILL.md)<br>[skills/debug-issue/SKILL.md](../../../../sources/tirth8205__code-review-graph/skills/debug-issue/SKILL.md)<br>[skills/build-graph/SKILL.md](../../../../sources/tirth8205__code-review-graph/skills/build-graph/SKILL.md) |
| mcp | 2 | [.mcp.json](../../../../sources/tirth8205__code-review-graph/.mcp.json)<br>[diagrams/diagram7_mcp_integration_flow.png](../../../../sources/tirth8205__code-review-graph/diagrams/diagram7_mcp_integration_flow.png) |
| retrieval | 113 | [tests/test_graph.py](../../../../sources/tirth8205__code-review-graph/tests/test_graph.py)<br>[tests/test_wiki.py](../../../../sources/tirth8205__code-review-graph/tests/test_wiki.py)<br>[skills/build-graph/SKILL.md](../../../../sources/tirth8205__code-review-graph/skills/build-graph/SKILL.md)<br>[evaluate/results/code-review-graph_impact_accuracy_2026-05-25.csv](../../../../sources/tirth8205__code-review-graph/evaluate/results/code-review-graph_impact_accuracy_2026-05-25.csv)<br>[evaluate/results/code-review-graph_multi_hop_retrieval_2026-05-25.csv](../../../../sources/tirth8205__code-review-graph/evaluate/results/code-review-graph_multi_hop_retrieval_2026-05-25.csv)<br>[evaluate/results/code-review-graph_token_efficiency_2026-05-25.csv](../../../../sources/tirth8205__code-review-graph/evaluate/results/code-review-graph_token_efficiency_2026-05-25.csv)<br>[evaluate/results/express_multi_hop_retrieval_2026-05-25.csv](../../../../sources/tirth8205__code-review-graph/evaluate/results/express_multi_hop_retrieval_2026-05-25.csv)<br>[evaluate/results/fastapi_multi_hop_retrieval_2026-05-25.csv](../../../../sources/tirth8205__code-review-graph/evaluate/results/fastapi_multi_hop_retrieval_2026-05-25.csv) |
| spec | 3 | [docs/architecture.md](../../../../sources/tirth8205__code-review-graph/docs/architecture.md)<br>[docs/ROADMAP.md](../../../../sources/tirth8205__code-review-graph/docs/ROADMAP.md)<br>[diagrams/diagram2_architecture_pipeline.png](../../../../sources/tirth8205__code-review-graph/diagrams/diagram2_architecture_pipeline.png) |
| eval | 114 | [tests/__init__.py](../../../../sources/tirth8205__code-review-graph/tests/__init__.py)<br>[tests/test_action_render.py](../../../../sources/tirth8205__code-review-graph/tests/test_action_render.py)<br>[tests/test_changes.py](../../../../sources/tirth8205__code-review-graph/tests/test_changes.py)<br>[tests/test_cli_install.py](../../../../sources/tirth8205__code-review-graph/tests/test_cli_install.py)<br>[tests/test_cli.py](../../../../sources/tirth8205__code-review-graph/tests/test_cli.py)<br>[tests/test_communities.py](../../../../sources/tirth8205__code-review-graph/tests/test_communities.py)<br>[tests/test_context_savings.py](../../../../sources/tirth8205__code-review-graph/tests/test_context_savings.py)<br>[tests/test_custom_languages.py](../../../../sources/tirth8205__code-review-graph/tests/test_custom_languages.py) |
| security | 1 | [SECURITY.md](../../../../sources/tirth8205__code-review-graph/SECURITY.md) |
| ci | 4 | [.github/workflows/ci.yml](../../../../sources/tirth8205__code-review-graph/.github/workflows/ci.yml)<br>[.github/workflows/eval.yml](../../../../sources/tirth8205__code-review-graph/.github/workflows/eval.yml)<br>[.github/workflows/pr-review.yml](../../../../sources/tirth8205__code-review-graph/.github/workflows/pr-review.yml)<br>[.github/workflows/publish.yml](../../../../sources/tirth8205__code-review-graph/.github/workflows/publish.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 4 | [AGENTS.md](../../../../sources/tirth8205__code-review-graph/AGENTS.md)<br>[CLAUDE.md](../../../../sources/tirth8205__code-review-graph/CLAUDE.md)<br>[GEMINI.md](../../../../sources/tirth8205__code-review-graph/GEMINI.md)<br>[.github/copilot-instructions.md](../../../../sources/tirth8205__code-review-graph/.github/copilot-instructions.md) |
| docs | 21 | [README.hi-IN.md](../../../../sources/tirth8205__code-review-graph/README.hi-IN.md)<br>[README.ja-JP.md](../../../../sources/tirth8205__code-review-graph/README.ja-JP.md)<br>[README.ko-KR.md](../../../../sources/tirth8205__code-review-graph/README.ko-KR.md)<br>[README.md](../../../../sources/tirth8205__code-review-graph/README.md)<br>[README.zh-CN.md](../../../../sources/tirth8205__code-review-graph/README.zh-CN.md)<br>[docs/architecture.md](../../../../sources/tirth8205__code-review-graph/docs/architecture.md)<br>[docs/COMMANDS.md](../../../../sources/tirth8205__code-review-graph/docs/COMMANDS.md)<br>[docs/CUSTOM_LANGUAGES.md](../../../../sources/tirth8205__code-review-graph/docs/CUSTOM_LANGUAGES.md) |
| config | 5 | [pyproject.toml](../../../../sources/tirth8205__code-review-graph/pyproject.toml)<br>[uv.lock](../../../../sources/tirth8205__code-review-graph/uv.lock)<br>[tests/fixtures/tsconfig.json](../../../../sources/tirth8205__code-review-graph/tests/fixtures/tsconfig.json)<br>[code-review-graph-vscode/package.json](../../../../sources/tirth8205__code-review-graph/code-review-graph-vscode/package.json)<br>[code-review-graph-vscode/tsconfig.json](../../../../sources/tirth8205__code-review-graph/code-review-graph-vscode/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 114 | [tests/__init__.py](../../../../sources/tirth8205__code-review-graph/tests/__init__.py)<br>[tests/test_action_render.py](../../../../sources/tirth8205__code-review-graph/tests/test_action_render.py)<br>[tests/test_changes.py](../../../../sources/tirth8205__code-review-graph/tests/test_changes.py)<br>[tests/test_cli_install.py](../../../../sources/tirth8205__code-review-graph/tests/test_cli_install.py)<br>[tests/test_cli.py](../../../../sources/tirth8205__code-review-graph/tests/test_cli.py)<br>[tests/test_communities.py](../../../../sources/tirth8205__code-review-graph/tests/test_communities.py) |
| CI workflow | 4 | [.github/workflows/ci.yml](../../../../sources/tirth8205__code-review-graph/.github/workflows/ci.yml)<br>[.github/workflows/eval.yml](../../../../sources/tirth8205__code-review-graph/.github/workflows/eval.yml)<br>[.github/workflows/pr-review.yml](../../../../sources/tirth8205__code-review-graph/.github/workflows/pr-review.yml)<br>[.github/workflows/publish.yml](../../../../sources/tirth8205__code-review-graph/.github/workflows/publish.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [SECURITY.md](../../../../sources/tirth8205__code-review-graph/SECURITY.md) |
| 에이전트 지시문 | 4 | [AGENTS.md](../../../../sources/tirth8205__code-review-graph/AGENTS.md)<br>[CLAUDE.md](../../../../sources/tirth8205__code-review-graph/CLAUDE.md)<br>[GEMINI.md](../../../../sources/tirth8205__code-review-graph/GEMINI.md)<br>[.github/copilot-instructions.md](../../../../sources/tirth8205__code-review-graph/.github/copilot-instructions.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `.mcp.json`, `diagrams/diagram7_mcp_integration_flow.png`, `AGENTS.md`.
2. entrypoint를 따라 실행 흐름 확인: `code_review_graph/__main__.py`, `code_review_graph/main.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `skills/review-pr/SKILL.md`, `skills/review-delta/SKILL.md`.
4. retrieval/memory/indexing 확인: `tests/test_graph.py`, `tests/test_wiki.py`, `skills/build-graph/SKILL.md`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/test_action_render.py`, `tests/test_changes.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local first code intelligence graph for MCP and CLI. Builds a persistent map of your codebase so AI coding tools read on. 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
