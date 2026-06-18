# hskim-solv/BidMate-DocAgent 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Agentic RAG for Korean RFP intelligence — extractive grounded-answer pipeline with metadata-first retrieval, comparison-aware balanced top-k, and bootstrap-CI eval rigor (ADR-driven).

## 요약

- 조사 단위: `sources/hskim-solv__BidMate-DocAgent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,155 files, 107 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/test_agent_loop_mcp.py, scripts/agent_loop_mcp.py이고, 의존성 단서는 claude, fastapi, torch, transformers, chroma, qdrant, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | hskim-solv/BidMate-DocAgent |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/hskim-solv__BidMate-DocAgent](../../../../sources/hskim-solv__BidMate-DocAgent) |
| 기존 보고서 | [reports/korea-trending/repositories/hskim-solv__BidMate-DocAgent.md](../../../korea-trending/repositories/hskim-solv__BidMate-DocAgent.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1155 / 107 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .claude, .githooks, .github, agent-evals, api, benchmarks, configs, data, demo, docs, eval, harness, notebooks, outputs, reports, schemas, scripts, tasks, tests |
| 상위 확장자 | .py: 599, .md: 340, .json: 88, .sh: 23, .yaml: 22, .png: 14, .svg: 14, .yml: 13, (none): 12, .jsonl: 9, .txt: 8, .npy: 3 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 77 |
| docs | documentation surface | 73 |
| api | source boundary | 2 |
| .github | ci surface | 1 |
| agent-evals | top-level component | 1 |
| benchmarks | validation surface | 1 |
| configs | top-level component | 1 |
| data | top-level component | 1 |
| demo | top-level component | 1 |
| eval | top-level component | 1 |
| harness | top-level component | 1 |
| notebooks | top-level component | 1 |
| outputs | top-level component | 1 |
| reports | top-level component | 1 |
| schemas | top-level component | 1 |
| scripts | top-level component | 1 |
| tasks | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | ui-smoke | node scripts/ui_smoke.mjs |
| test | package.json | test | echo "Error: no test specified" && exit 1 |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | setup | make setup |
| utility | Makefile | install-hooks | make install-hooks |
| quality | Makefile | check-branch | make check-branch |
| quality | Makefile | governance-check | make governance-check |
| quality | Makefile | check-baseline-provenance | make check-baseline-provenance |
| quality | Makefile | check-doc-links | make check-doc-links |
| utility | Makefile | index | make index |
| build | Makefile | build-kordoc-manifest | make build-kordoc-manifest |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | claude |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | chroma, qdrant |
| modelRuntime | torch, transformers |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [tests/test_agent_loop_mcp.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test_agent_loop_mcp.py) | mcp signal |
| mcp | [scripts/agent_loop_mcp.py](../../../../sources/hskim-solv__BidMate-DocAgent/scripts/agent_loop_mcp.py) | mcp signal |
| agentRuntime | [scripts/agent_evals_report.py](../../../../sources/hskim-solv__BidMate-DocAgent/scripts/agent_evals_report.py) | agentRuntime signal |
| agentRuntime | [scripts/agent_evals_run.py](../../../../sources/hskim-solv__BidMate-DocAgent/scripts/agent_evals_run.py) | agentRuntime signal |
| agentRuntime | [scripts/agent_loop_claude_turn.py](../../../../sources/hskim-solv__BidMate-DocAgent/scripts/agent_loop_claude_turn.py) | agentRuntime signal |
| agentRuntime | [scripts/agent_loop_codex_turn.py](../../../../sources/hskim-solv__BidMate-DocAgent/scripts/agent_loop_codex_turn.py) | agentRuntime signal |
| entrypoints | [api/main.py](../../../../sources/hskim-solv__BidMate-DocAgent/api/main.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/hskim-solv__BidMate-DocAgent/CLAUDE.md) | instruction signal |
| config | [Makefile](../../../../sources/hskim-solv__BidMate-DocAgent/Makefile) | config signal |
| config | [package.json](../../../../sources/hskim-solv__BidMate-DocAgent/package.json) | config signal |
| config | [pyproject.toml](../../../../sources/hskim-solv__BidMate-DocAgent/pyproject.toml) | config signal |
| config | [requirements-bm25s.txt](../../../../sources/hskim-solv__BidMate-DocAgent/requirements-bm25s.txt) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [api/main.py](../../../../sources/hskim-solv__BidMate-DocAgent/api/main.py) |
| agentRuntime | 52 | [scripts/agent_evals_report.py](../../../../sources/hskim-solv__BidMate-DocAgent/scripts/agent_evals_report.py)<br>[scripts/agent_evals_run.py](../../../../sources/hskim-solv__BidMate-DocAgent/scripts/agent_evals_run.py)<br>[scripts/agent_loop_claude_turn.py](../../../../sources/hskim-solv__BidMate-DocAgent/scripts/agent_loop_claude_turn.py)<br>[scripts/agent_loop_codex_turn.py](../../../../sources/hskim-solv__BidMate-DocAgent/scripts/agent_loop_codex_turn.py)<br>[scripts/agent_loop_mcp.py](../../../../sources/hskim-solv__BidMate-DocAgent/scripts/agent_loop_mcp.py)<br>[scripts/agent_loop_quota.example.json](../../../../sources/hskim-solv__BidMate-DocAgent/scripts/agent_loop_quota.example.json)<br>[scripts/agent_loop_quota.py](../../../../sources/hskim-solv__BidMate-DocAgent/scripts/agent_loop_quota.py)<br>[scripts/agent_loop.py](../../../../sources/hskim-solv__BidMate-DocAgent/scripts/agent_loop.py) |
| mcp | 2 | [tests/test_agent_loop_mcp.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test_agent_loop_mcp.py)<br>[scripts/agent_loop_mcp.py](../../../../sources/hskim-solv__BidMate-DocAgent/scripts/agent_loop_mcp.py) |
| retrieval | 204 | [rag_agent_tools.py](../../../../sources/hskim-solv__BidMate-DocAgent/rag_agent_tools.py)<br>[rag_answer_schema.py](../../../../sources/hskim-solv__BidMate-DocAgent/rag_answer_schema.py)<br>[rag_answer.py](../../../../sources/hskim-solv__BidMate-DocAgent/rag_answer.py)<br>[rag_clarification.py](../../../../sources/hskim-solv__BidMate-DocAgent/rag_clarification.py)<br>[rag_conversation_state.py](../../../../sources/hskim-solv__BidMate-DocAgent/rag_conversation_state.py)<br>[rag_core.py](../../../../sources/hskim-solv__BidMate-DocAgent/rag_core.py)<br>[rag_embedding.py](../../../../sources/hskim-solv__BidMate-DocAgent/rag_embedding.py)<br>[rag_graph_agentic_full.py](../../../../sources/hskim-solv__BidMate-DocAgent/rag_graph_agentic_full.py) |
| spec | 140 | [requirements-bm25s.txt](../../../../sources/hskim-solv__BidMate-DocAgent/requirements-bm25s.txt)<br>[requirements-dev.txt](../../../../sources/hskim-solv__BidMate-DocAgent/requirements-dev.txt)<br>[requirements-graph.txt](../../../../sources/hskim-solv__BidMate-DocAgent/requirements-graph.txt)<br>[requirements-lora.txt](../../../../sources/hskim-solv__BidMate-DocAgent/requirements-lora.txt)<br>[requirements-m3.txt](../../../../sources/hskim-solv__BidMate-DocAgent/requirements-m3.txt)<br>[requirements-observability.txt](../../../../sources/hskim-solv__BidMate-DocAgent/requirements-observability.txt)<br>[requirements-pymupdf4llm.txt](../../../../sources/hskim-solv__BidMate-DocAgent/requirements-pymupdf4llm.txt)<br>[requirements.txt](../../../../sources/hskim-solv__BidMate-DocAgent/requirements.txt) |
| eval | 589 | [rag_observability.py](../../../../sources/hskim-solv__BidMate-DocAgent/rag_observability.py)<br>[rag_tracing.py](../../../../sources/hskim-solv__BidMate-DocAgent/rag_tracing.py)<br>[requirements-observability.txt](../../../../sources/hskim-solv__BidMate-DocAgent/requirements-observability.txt)<br>[tests/_chroma_safe_clone.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/_chroma_safe_clone.py)<br>[tests/conftest.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/conftest.py)<br>[tests/test__ship_env.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test__ship_env.py)<br>[tests/test__ship_private_preserve.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test__ship_private_preserve.py)<br>[tests/test__ship_run.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test__ship_run.py) |
| security | 45 | [bidmate_security.py](../../../../sources/hskim-solv__BidMate-DocAgent/bidmate_security.py)<br>[tests/test_api_security_screen.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test_api_security_screen.py)<br>[tests/test_audit_private_data_readiness.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test_audit_private_data_readiness.py)<br>[tests/test_audit_real100_v2_gold_labels.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test_audit_real100_v2_gold_labels.py)<br>[tests/test_bash_guard_adversarial.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test_bash_guard_adversarial.py)<br>[tests/test_hook_pretooluse_bash_guard.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test_hook_pretooluse_bash_guard.py)<br>[tests/test_memory_backend_default_guard_regression.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test_memory_backend_default_guard_regression.py)<br>[tests/test_page_metadata_recovery_audit.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test_page_metadata_recovery_audit.py) |
| ci | 9 | [.github/workflows/agent-loop-artifacts.yml](../../../../sources/hskim-solv__BidMate-DocAgent/.github/workflows/agent-loop-artifacts.yml)<br>[.github/workflows/branch-and-issue-check.yml](../../../../sources/hskim-solv__BidMate-DocAgent/.github/workflows/branch-and-issue-check.yml)<br>[.github/workflows/deploy-fly.yml](../../../../sources/hskim-solv__BidMate-DocAgent/.github/workflows/deploy-fly.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/hskim-solv__BidMate-DocAgent/.github/workflows/docker-publish.yml)<br>[.github/workflows/pages.yml](../../../../sources/hskim-solv__BidMate-DocAgent/.github/workflows/pages.yml)<br>[.github/workflows/pr-eval.yml](../../../../sources/hskim-solv__BidMate-DocAgent/.github/workflows/pr-eval.yml)<br>[.github/workflows/slow-tests.yml](../../../../sources/hskim-solv__BidMate-DocAgent/.github/workflows/slow-tests.yml)<br>[.github/workflows/staging-self-ship-guard.yml](../../../../sources/hskim-solv__BidMate-DocAgent/.github/workflows/staging-self-ship-guard.yml) |
| container | 2 | [docker-compose.qdrant.yml](../../../../sources/hskim-solv__BidMate-DocAgent/docker-compose.qdrant.yml)<br>[Dockerfile](../../../../sources/hskim-solv__BidMate-DocAgent/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/hskim-solv__BidMate-DocAgent/CLAUDE.md) |
| docs | 299 | [README.md](../../../../sources/hskim-solv__BidMate-DocAgent/README.md)<br>[tasks/README.md](../../../../sources/hskim-solv__BidMate-DocAgent/tasks/README.md)<br>[scripts/claude-hooks/README.md](../../../../sources/hskim-solv__BidMate-DocAgent/scripts/claude-hooks/README.md)<br>[reports/real100_v2/README.md](../../../../sources/hskim-solv__BidMate-DocAgent/reports/real100_v2/README.md)<br>[eval/korean_public/README.md](../../../../sources/hskim-solv__BidMate-DocAgent/eval/korean_public/README.md)<br>[docs/_config.yml](../../../../sources/hskim-solv__BidMate-DocAgent/docs/_config.yml)<br>[docs/agent-utilization.md](../../../../sources/hskim-solv__BidMate-DocAgent/docs/agent-utilization.md)<br>[docs/architecture-deep-dive.md](../../../../sources/hskim-solv__BidMate-DocAgent/docs/architecture-deep-dive.md) |
| config | 11 | [Makefile](../../../../sources/hskim-solv__BidMate-DocAgent/Makefile)<br>[package.json](../../../../sources/hskim-solv__BidMate-DocAgent/package.json)<br>[pyproject.toml](../../../../sources/hskim-solv__BidMate-DocAgent/pyproject.toml)<br>[requirements-bm25s.txt](../../../../sources/hskim-solv__BidMate-DocAgent/requirements-bm25s.txt)<br>[requirements-dev.txt](../../../../sources/hskim-solv__BidMate-DocAgent/requirements-dev.txt)<br>[requirements-graph.txt](../../../../sources/hskim-solv__BidMate-DocAgent/requirements-graph.txt)<br>[requirements-lora.txt](../../../../sources/hskim-solv__BidMate-DocAgent/requirements-lora.txt)<br>[requirements-m3.txt](../../../../sources/hskim-solv__BidMate-DocAgent/requirements-m3.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 589 | [rag_observability.py](../../../../sources/hskim-solv__BidMate-DocAgent/rag_observability.py)<br>[rag_tracing.py](../../../../sources/hskim-solv__BidMate-DocAgent/rag_tracing.py)<br>[requirements-observability.txt](../../../../sources/hskim-solv__BidMate-DocAgent/requirements-observability.txt)<br>[tests/_chroma_safe_clone.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/_chroma_safe_clone.py)<br>[tests/conftest.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/conftest.py)<br>[tests/test__ship_env.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test__ship_env.py) |
| CI workflow | 9 | [.github/workflows/agent-loop-artifacts.yml](../../../../sources/hskim-solv__BidMate-DocAgent/.github/workflows/agent-loop-artifacts.yml)<br>[.github/workflows/branch-and-issue-check.yml](../../../../sources/hskim-solv__BidMate-DocAgent/.github/workflows/branch-and-issue-check.yml)<br>[.github/workflows/deploy-fly.yml](../../../../sources/hskim-solv__BidMate-DocAgent/.github/workflows/deploy-fly.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/hskim-solv__BidMate-DocAgent/.github/workflows/docker-publish.yml)<br>[.github/workflows/pages.yml](../../../../sources/hskim-solv__BidMate-DocAgent/.github/workflows/pages.yml)<br>[.github/workflows/pr-eval.yml](../../../../sources/hskim-solv__BidMate-DocAgent/.github/workflows/pr-eval.yml) |
| 컨테이너/배포 | 2 | [docker-compose.qdrant.yml](../../../../sources/hskim-solv__BidMate-DocAgent/docker-compose.qdrant.yml)<br>[Dockerfile](../../../../sources/hskim-solv__BidMate-DocAgent/Dockerfile) |
| 보안/정책 | 45 | [bidmate_security.py](../../../../sources/hskim-solv__BidMate-DocAgent/bidmate_security.py)<br>[tests/test_api_security_screen.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test_api_security_screen.py)<br>[tests/test_audit_private_data_readiness.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test_audit_private_data_readiness.py)<br>[tests/test_audit_real100_v2_gold_labels.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test_audit_real100_v2_gold_labels.py)<br>[tests/test_bash_guard_adversarial.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test_bash_guard_adversarial.py)<br>[tests/test_hook_pretooluse_bash_guard.py](../../../../sources/hskim-solv__BidMate-DocAgent/tests/test_hook_pretooluse_bash_guard.py) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/hskim-solv__BidMate-DocAgent/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/test_agent_loop_mcp.py`, `scripts/agent_loop_mcp.py`, `scripts/agent_evals_report.py`.
2. entrypoint를 따라 실행 흐름 확인: `api/main.py`.
3. agent/tool runtime 매핑: `scripts/agent_evals_report.py`, `scripts/agent_evals_run.py`, `scripts/agent_loop_claude_turn.py`.
4. retrieval/memory/indexing 확인: `rag_agent_tools.py`, `rag_answer_schema.py`, `rag_answer.py`.
5. test/eval 파일로 동작 검증: `rag_observability.py`, `rag_tracing.py`, `requirements-observability.txt`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Agentic RAG for Korean RFP intelligence — extractive grounded answer pipeline with metadata first retrieval, comparison . 핵심 구조 신호는 Python, package.json, pyproject.toml, requirements.txt, Dockerfile, Makefile이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
