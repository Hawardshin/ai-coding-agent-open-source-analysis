# koi2026/opentax 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

2026 KOI Hackathon | Team Raw Agent | Korean Capital Gains Tax Agent

## 요약

- 조사 단위: `sources/koi2026__opentax` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 206 files, 44 directories, depth score 119, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/test_mcp_refactor_boundaries.py, src/retrieval/mcp_retriever.py, src/mcp/__init__.py이고, 의존성 단서는 openai, anthropic, mcp, langgraph, fastapi, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | koi2026/opentax |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/koi2026__opentax](../../../../sources/koi2026__opentax) |
| 기존 보고서 | [reports/korea-trending/repositories/koi2026__opentax.md](../../../korea-trending/repositories/koi2026__opentax.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 206 / 44 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, .omc, .streamlit, data, notebooks, scripts, src, tests |
| 상위 확장자 | .py: 116, .md: 48, .json: 14, .js: 7, (none): 7, .yml: 3, .jsonl: 2, .ps1: 2, .example: 1, .ini: 1, .ipynb: 1, .pdf: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 34 |
| tests | validation surface | 18 |
| .github | ci surface | 1 |
| data | top-level component | 1 |
| notebooks | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | langgraph |
| vectorStores | 없음 |
| modelRuntime | transformers |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [tests/test_mcp_refactor_boundaries.py](../../../../sources/koi2026__opentax/tests/test_mcp_refactor_boundaries.py) | mcp signal |
| mcp | [src/retrieval/mcp_retriever.py](../../../../sources/koi2026__opentax/src/retrieval/mcp_retriever.py) | mcp signal |
| mcp | [src/mcp/__init__.py](../../../../sources/koi2026__opentax/src/mcp/__init__.py) | mcp signal |
| mcp | [src/mcp/server.py](../../../../sources/koi2026__opentax/src/mcp/server.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/koi2026__opentax/AGENTS.md) | agentRuntime signal |
| agentRuntime | [src/mcp/tools/__init__.py](../../../../sources/koi2026__opentax/src/mcp/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [src/mcp/tools/retrieval.py](../../../../sources/koi2026__opentax/src/mcp/tools/retrieval.py) | agentRuntime signal |
| agentRuntime | [src/agents/__init__.py](../../../../sources/koi2026__opentax/src/agents/__init__.py) | agentRuntime signal |
| entrypoints | [src/api/main.py](../../../../sources/koi2026__opentax/src/api/main.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/koi2026__opentax/CLAUDE.md) | instruction signal |
| config | [package.json](../../../../sources/koi2026__opentax/package.json) | config signal |
| config | [requirements.txt](../../../../sources/koi2026__opentax/requirements.txt) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [src/mcp/server.py](../../../../sources/koi2026__opentax/src/mcp/server.py)<br>[src/api/main.py](../../../../sources/koi2026__opentax/src/api/main.py) |
| agentRuntime | 5 | [AGENTS.md](../../../../sources/koi2026__opentax/AGENTS.md)<br>[src/mcp/tools/__init__.py](../../../../sources/koi2026__opentax/src/mcp/tools/__init__.py)<br>[src/mcp/tools/retrieval.py](../../../../sources/koi2026__opentax/src/mcp/tools/retrieval.py)<br>[src/agents/__init__.py](../../../../sources/koi2026__opentax/src/agents/__init__.py)<br>[src/agents/prompts.py](../../../../sources/koi2026__opentax/src/agents/prompts.py) |
| mcp | 6 | [tests/test_mcp_refactor_boundaries.py](../../../../sources/koi2026__opentax/tests/test_mcp_refactor_boundaries.py)<br>[src/retrieval/mcp_retriever.py](../../../../sources/koi2026__opentax/src/retrieval/mcp_retriever.py)<br>[src/mcp/__init__.py](../../../../sources/koi2026__opentax/src/mcp/__init__.py)<br>[src/mcp/server.py](../../../../sources/koi2026__opentax/src/mcp/server.py)<br>[src/mcp/tools/__init__.py](../../../../sources/koi2026__opentax/src/mcp/tools/__init__.py)<br>[src/mcp/tools/retrieval.py](../../../../sources/koi2026__opentax/src/mcp/tools/retrieval.py) |
| retrieval | 43 | [tests/rag_golden_cases.py](../../../../sources/koi2026__opentax/tests/rag_golden_cases.py)<br>[tests/test_rag.py](../../../../sources/koi2026__opentax/tests/test_rag.py)<br>[src/retrieval/__init__.py](../../../../sources/koi2026__opentax/src/retrieval/__init__.py)<br>[src/retrieval/llm_fn.py](../../../../sources/koi2026__opentax/src/retrieval/llm_fn.py)<br>[src/retrieval/mcp_retriever.py](../../../../sources/koi2026__opentax/src/retrieval/mcp_retriever.py)<br>[src/retrieval/multi_agent_reasoner.py](../../../../sources/koi2026__opentax/src/retrieval/multi_agent_reasoner.py)<br>[src/retrieval/retriever_impl.py](../../../../sources/koi2026__opentax/src/retrieval/retriever_impl.py)<br>[src/retrieval/tax_law_search.py](../../../../sources/koi2026__opentax/src/retrieval/tax_law_search.py) |
| spec | 21 | [requirements.txt](../../../../sources/koi2026__opentax/requirements.txt)<br>[.omc/artifacts/ask/codex-analyze-this-korean-tax-rag-system-prd-for-a-4-week-hackatho-2026-05-11T07-16-53-867Z.md](../../../../sources/koi2026__opentax/.omc/artifacts/ask/codex-analyze-this-korean-tax-rag-system-prd-for-a-4-week-hackatho-2026-05-11T07-16-53-867Z.md)<br>[.omc/artifacts/ask/codex-analyze-this-korean-tax-rag-system-prd-for-a-4-week-hackatho-2026-05-11T07-27-31-551Z.md](../../../../sources/koi2026__opentax/.omc/artifacts/ask/codex-analyze-this-korean-tax-rag-system-prd-for-a-4-week-hackatho-2026-05-11T07-27-31-551Z.md)<br>[.omc/artifacts/ask/codex-analyze-this-korean-tax-rag-system-prd-for-a-4-week-hackatho-2026-05-11T07-30-22-834Z.md](../../../../sources/koi2026__opentax/.omc/artifacts/ask/codex-analyze-this-korean-tax-rag-system-prd-for-a-4-week-hackatho-2026-05-11T07-30-22-834Z.md)<br>[.omc/artifacts/ask/codex-analyze-this-korean-tax-rag-system-prd-for-a-4-week-hackatho-2026-05-11T07-32-33-163Z.md](../../../../sources/koi2026__opentax/.omc/artifacts/ask/codex-analyze-this-korean-tax-rag-system-prd-for-a-4-week-hackatho-2026-05-11T07-32-33-163Z.md)<br>[.omc/artifacts/ask/codex-analyze-this-korean-tax-rag-system-prd-for-a-4-week-hackatho-2026-05-11T07-33-38-557Z.md](../../../../sources/koi2026__opentax/.omc/artifacts/ask/codex-analyze-this-korean-tax-rag-system-prd-for-a-4-week-hackatho-2026-05-11T07-33-38-557Z.md)<br>[.omc/artifacts/ask/codex-analyze-this-korean-tax-rag-system-prd-for-a-4-week-hackatho-2026-05-11T07-58-33-985Z.md](../../../../sources/koi2026__opentax/.omc/artifacts/ask/codex-analyze-this-korean-tax-rag-system-prd-for-a-4-week-hackatho-2026-05-11T07-58-33-985Z.md)<br>[.omc/artifacts/ask/codex-analyze-this-korean-tax-rag-system-prd-for-a-4-week-hackatho-2026-05-11T08-00-21-965Z.md](../../../../sources/koi2026__opentax/.omc/artifacts/ask/codex-analyze-this-korean-tax-rag-system-prd-for-a-4-week-hackatho-2026-05-11T08-00-21-965Z.md) |
| eval | 31 | [tests/__init__.py](../../../../sources/koi2026__opentax/tests/__init__.py)<br>[tests/golden_case_legal_deps.py](../../../../sources/koi2026__opentax/tests/golden_case_legal_deps.py)<br>[tests/rag_golden_cases.py](../../../../sources/koi2026__opentax/tests/rag_golden_cases.py)<br>[tests/test_admin_jobs.py](../../../../sources/koi2026__opentax/tests/test_admin_jobs.py)<br>[tests/test_auto_update_registry.py](../../../../sources/koi2026__opentax/tests/test_auto_update_registry.py)<br>[tests/test_chunking.py](../../../../sources/koi2026__opentax/tests/test_chunking.py)<br>[tests/test_e2e_golden.py](../../../../sources/koi2026__opentax/tests/test_e2e_golden.py)<br>[tests/test_mcp_refactor_boundaries.py](../../../../sources/koi2026__opentax/tests/test_mcp_refactor_boundaries.py) |
| security | 1 | [SECURITY.md](../../../../sources/koi2026__opentax/SECURITY.md) |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/koi2026__opentax/.github/workflows/ci.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/koi2026__opentax/docker-compose.yml)<br>[Dockerfile](../../../../sources/koi2026__opentax/Dockerfile) |
| instruction | 2 | [AGENTS.md](../../../../sources/koi2026__opentax/AGENTS.md)<br>[CLAUDE.md](../../../../sources/koi2026__opentax/CLAUDE.md) |
| docs | 2 | [README.en.md](../../../../sources/koi2026__opentax/README.en.md)<br>[README.md](../../../../sources/koi2026__opentax/README.md) |
| config | 2 | [package.json](../../../../sources/koi2026__opentax/package.json)<br>[requirements.txt](../../../../sources/koi2026__opentax/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 31 | [tests/__init__.py](../../../../sources/koi2026__opentax/tests/__init__.py)<br>[tests/golden_case_legal_deps.py](../../../../sources/koi2026__opentax/tests/golden_case_legal_deps.py)<br>[tests/rag_golden_cases.py](../../../../sources/koi2026__opentax/tests/rag_golden_cases.py)<br>[tests/test_admin_jobs.py](../../../../sources/koi2026__opentax/tests/test_admin_jobs.py)<br>[tests/test_auto_update_registry.py](../../../../sources/koi2026__opentax/tests/test_auto_update_registry.py)<br>[tests/test_chunking.py](../../../../sources/koi2026__opentax/tests/test_chunking.py) |
| CI workflow | 1 | [.github/workflows/ci.yml](../../../../sources/koi2026__opentax/.github/workflows/ci.yml) |
| 컨테이너/배포 | 2 | [docker-compose.yml](../../../../sources/koi2026__opentax/docker-compose.yml)<br>[Dockerfile](../../../../sources/koi2026__opentax/Dockerfile) |
| 보안/정책 | 1 | [SECURITY.md](../../../../sources/koi2026__opentax/SECURITY.md) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/koi2026__opentax/AGENTS.md)<br>[CLAUDE.md](../../../../sources/koi2026__opentax/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/test_mcp_refactor_boundaries.py`, `src/retrieval/mcp_retriever.py`, `src/mcp/__init__.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/mcp/server.py`, `src/api/main.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `src/mcp/tools/__init__.py`, `src/mcp/tools/retrieval.py`.
4. retrieval/memory/indexing 확인: `tests/rag_golden_cases.py`, `tests/test_rag.py`, `src/retrieval/__init__.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/golden_case_legal_deps.py`, `tests/rag_golden_cases.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 2026 KOI Hackathon Team Raw Agent Korean Capital Gains Tax Agent. 핵심 구조 신호는 Python, package.json, requirements.txt, Dockerfile, docker-compose.yml, README.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
