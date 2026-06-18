# arthurpanhku/DocSentinel 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

MCP server for AI agent for cybersecurity: automate assessment of documents, questionnaires & reports. Multi-format parsing, RAG knowledge base,Risks, compliance gaps, remediations.

## 요약

- 조사 단위: `sources/arthurpanhku__DocSentinel` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 136 files, 28 directories, depth score 113, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/test_mcp_server.py, app/mcp_server.py이고, 의존성 단서는 openai, anthropic, mcp, langchain, fastapi, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | arthurpanhku/DocSentinel |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 88 |
| Forks | 11 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/arthurpanhku__DocSentinel](../../../../sources/arthurpanhku__DocSentinel) |
| 기존 보고서 | [reports/llm-wiki/repositories/arthurpanhku__DocSentinel.md](../../../llm-wiki/repositories/arthurpanhku__DocSentinel.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 136 / 28 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, app, docs, examples, frontend, scripts, tests |
| 상위 확장자 | .py: 47, .md: 32, .tsx: 10, .json: 9, .png: 6, .ts: 5, (none): 5, .txt: 4, .html: 3, .sh: 3, .yml: 3, .pdf: 2 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 25 |
| tests | validation surface | 15 |
| examples/templates | examples workspace | 4 |
| .github | ci surface | 1 |
| app | top-level component | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| examples/sample-policy.txt | examples workspace | 1 |
| examples/test_iso_27001_extract.pdf | examples workspace | 1 |
| examples/test_mobile_app_project.pdf | examples workspace | 1 |
| frontend | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | install | make install |
| serve-dev | Makefile | dev | make dev |
| test | Makefile | test | make test |
| quality | Makefile | lint | make lint |
| quality | Makefile | format | make format |
| utility | Makefile | clean | make clean |
| utility | Makefile | run-api | make run-api |
| utility | Makefile | frontend-install | make frontend-install |
| serve-dev | Makefile | frontend-dev | make frontend-dev |
| build | Makefile | frontend-build | make frontend-build |
| utility | Makefile | run-console | make run-console |
| utility | Makefile | all | make all |
| utility | pyproject.toml | docsentinel-mcp | docsentinel-mcp |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | langchain |
| vectorStores | chroma |
| modelRuntime | torch, transformers |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [tests/test_mcp_server.py](../../../../sources/arthurpanhku__DocSentinel/tests/test_mcp_server.py) | mcp signal |
| mcp | [app/mcp_server.py](../../../../sources/arthurpanhku__DocSentinel/app/mcp_server.py) | mcp signal |
| agentRuntime | [frontend/src/pages/Skills.tsx](../../../../sources/arthurpanhku__DocSentinel/frontend/src/pages/Skills.tsx) | agentRuntime signal |
| agentRuntime | [examples/templates/supplier_review/skill.json](../../../../sources/arthurpanhku__DocSentinel/examples/templates/supplier_review/skill.json) | agentRuntime signal |
| agentRuntime | [examples/templates/soc2_type2/skill.json](../../../../sources/arthurpanhku__DocSentinel/examples/templates/soc2_type2/skill.json) | agentRuntime signal |
| agentRuntime | [examples/templates/architecture_review/skill.json](../../../../sources/arthurpanhku__DocSentinel/examples/templates/architecture_review/skill.json) | agentRuntime signal |
| entrypoints | [frontend/src/App.tsx](../../../../sources/arthurpanhku__DocSentinel/frontend/src/App.tsx) | entrypoints signal |
| entrypoints | [frontend/src/index.css](../../../../sources/arthurpanhku__DocSentinel/frontend/src/index.css) | entrypoints signal |
| entrypoints | [frontend/src/main.tsx](../../../../sources/arthurpanhku__DocSentinel/frontend/src/main.tsx) | entrypoints signal |
| entrypoints | [app/main.py](../../../../sources/arthurpanhku__DocSentinel/app/main.py) | entrypoints signal |
| config | [Makefile](../../../../sources/arthurpanhku__DocSentinel/Makefile) | config signal |
| config | [pyproject.toml](../../../../sources/arthurpanhku__DocSentinel/pyproject.toml) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [frontend/src/App.tsx](../../../../sources/arthurpanhku__DocSentinel/frontend/src/App.tsx)<br>[frontend/src/index.css](../../../../sources/arthurpanhku__DocSentinel/frontend/src/index.css)<br>[frontend/src/main.tsx](../../../../sources/arthurpanhku__DocSentinel/frontend/src/main.tsx)<br>[app/main.py](../../../../sources/arthurpanhku__DocSentinel/app/main.py) |
| agentRuntime | 10 | [frontend/src/pages/Skills.tsx](../../../../sources/arthurpanhku__DocSentinel/frontend/src/pages/Skills.tsx)<br>[examples/templates/supplier_review/skill.json](../../../../sources/arthurpanhku__DocSentinel/examples/templates/supplier_review/skill.json)<br>[examples/templates/soc2_type2/skill.json](../../../../sources/arthurpanhku__DocSentinel/examples/templates/soc2_type2/skill.json)<br>[examples/templates/architecture_review/skill.json](../../../../sources/arthurpanhku__DocSentinel/examples/templates/architecture_review/skill.json)<br>[app/models/skill.py](../../../../sources/arthurpanhku__DocSentinel/app/models/skill.py)<br>[app/api/skills.py](../../../../sources/arthurpanhku__DocSentinel/app/api/skills.py)<br>[app/agent/__init__.py](../../../../sources/arthurpanhku__DocSentinel/app/agent/__init__.py)<br>[app/agent/orchestrator.py](../../../../sources/arthurpanhku__DocSentinel/app/agent/orchestrator.py) |
| mcp | 2 | [tests/test_mcp_server.py](../../../../sources/arthurpanhku__DocSentinel/tests/test_mcp_server.py)<br>[app/mcp_server.py](../../../../sources/arthurpanhku__DocSentinel/app/mcp_server.py) |
| retrieval | 4 | [tests/test_graph_rag.py](../../../../sources/arthurpanhku__DocSentinel/tests/test_graph_rag.py)<br>[frontend/index.html](../../../../sources/arthurpanhku__DocSentinel/frontend/index.html)<br>[frontend/src/index.css](../../../../sources/arthurpanhku__DocSentinel/frontend/src/index.css)<br>[app/kb/graph_rag.py](../../../../sources/arthurpanhku__DocSentinel/app/kb/graph_rag.py) |
| spec | 8 | [ARCHITECTURE.md](../../../../sources/arthurpanhku__DocSentinel/ARCHITECTURE.md)<br>[docsentinel_architecture.png](../../../../sources/arthurpanhku__DocSentinel/docsentinel_architecture.png)<br>[requirements-dev.txt](../../../../sources/arthurpanhku__DocSentinel/requirements-dev.txt)<br>[requirements.txt](../../../../sources/arthurpanhku__DocSentinel/requirements.txt)<br>[SPEC.md](../../../../sources/arthurpanhku__DocSentinel/SPEC.md)<br>[examples/templates/architecture_review/skill.json](../../../../sources/arthurpanhku__DocSentinel/examples/templates/architecture_review/skill.json)<br>[docs/01-architecture-and-tech-stack.md](../../../../sources/arthurpanhku__DocSentinel/docs/01-architecture-and-tech-stack.md)<br>[docs/images/architecture-overview.png](../../../../sources/arthurpanhku__DocSentinel/docs/images/architecture-overview.png) |
| eval | 17 | [SPEC.md](../../../../sources/arthurpanhku__DocSentinel/SPEC.md)<br>[test_integration.sh](../../../../sources/arthurpanhku__DocSentinel/test_integration.sh)<br>[tests/__init__.py](../../../../sources/arthurpanhku__DocSentinel/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/arthurpanhku__DocSentinel/tests/conftest.py)<br>[tests/test_assessments_api.py](../../../../sources/arthurpanhku__DocSentinel/tests/test_assessments_api.py)<br>[tests/test_document_access.py](../../../../sources/arthurpanhku__DocSentinel/tests/test_document_access.py)<br>[tests/test_graph_rag.py](../../../../sources/arthurpanhku__DocSentinel/tests/test_graph_rag.py)<br>[tests/test_health.py](../../../../sources/arthurpanhku__DocSentinel/tests/test_health.py) |
| security | 4 | [SECURITY.md](../../../../sources/arthurpanhku__DocSentinel/SECURITY.md)<br>[examples/sample-policy.txt](../../../../sources/arthurpanhku__DocSentinel/examples/sample-policy.txt)<br>[app/models/audit.py](../../../../sources/arthurpanhku__DocSentinel/app/models/audit.py)<br>[app/core/security.py](../../../../sources/arthurpanhku__DocSentinel/app/core/security.py) |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/arthurpanhku__DocSentinel/.github/workflows/ci.yml) |
| container | 3 | [docker-compose.ollama.yml](../../../../sources/arthurpanhku__DocSentinel/docker-compose.ollama.yml)<br>[docker-compose.yml](../../../../sources/arthurpanhku__DocSentinel/docker-compose.yml)<br>[Dockerfile](../../../../sources/arthurpanhku__DocSentinel/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 30 | [README_de.md](../../../../sources/arthurpanhku__DocSentinel/README_de.md)<br>[README_fr.md](../../../../sources/arthurpanhku__DocSentinel/README_fr.md)<br>[README_ja.md](../../../../sources/arthurpanhku__DocSentinel/README_ja.md)<br>[README_ko.md](../../../../sources/arthurpanhku__DocSentinel/README_ko.md)<br>[README_ru.md](../../../../sources/arthurpanhku__DocSentinel/README_ru.md)<br>[README_zh.md](../../../../sources/arthurpanhku__DocSentinel/README_zh.md)<br>[README.md](../../../../sources/arthurpanhku__DocSentinel/README.md)<br>[examples/README.md](../../../../sources/arthurpanhku__DocSentinel/examples/README.md) |
| config | 6 | [Makefile](../../../../sources/arthurpanhku__DocSentinel/Makefile)<br>[pyproject.toml](../../../../sources/arthurpanhku__DocSentinel/pyproject.toml)<br>[requirements-dev.txt](../../../../sources/arthurpanhku__DocSentinel/requirements-dev.txt)<br>[requirements.txt](../../../../sources/arthurpanhku__DocSentinel/requirements.txt)<br>[frontend/package.json](../../../../sources/arthurpanhku__DocSentinel/frontend/package.json)<br>[frontend/tsconfig.json](../../../../sources/arthurpanhku__DocSentinel/frontend/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 17 | [SPEC.md](../../../../sources/arthurpanhku__DocSentinel/SPEC.md)<br>[test_integration.sh](../../../../sources/arthurpanhku__DocSentinel/test_integration.sh)<br>[tests/__init__.py](../../../../sources/arthurpanhku__DocSentinel/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/arthurpanhku__DocSentinel/tests/conftest.py)<br>[tests/test_assessments_api.py](../../../../sources/arthurpanhku__DocSentinel/tests/test_assessments_api.py)<br>[tests/test_document_access.py](../../../../sources/arthurpanhku__DocSentinel/tests/test_document_access.py) |
| CI workflow | 1 | [.github/workflows/ci.yml](../../../../sources/arthurpanhku__DocSentinel/.github/workflows/ci.yml) |
| 컨테이너/배포 | 3 | [docker-compose.ollama.yml](../../../../sources/arthurpanhku__DocSentinel/docker-compose.ollama.yml)<br>[docker-compose.yml](../../../../sources/arthurpanhku__DocSentinel/docker-compose.yml)<br>[Dockerfile](../../../../sources/arthurpanhku__DocSentinel/Dockerfile) |
| 보안/정책 | 4 | [SECURITY.md](../../../../sources/arthurpanhku__DocSentinel/SECURITY.md)<br>[examples/sample-policy.txt](../../../../sources/arthurpanhku__DocSentinel/examples/sample-policy.txt)<br>[app/models/audit.py](../../../../sources/arthurpanhku__DocSentinel/app/models/audit.py)<br>[app/core/security.py](../../../../sources/arthurpanhku__DocSentinel/app/core/security.py) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/test_mcp_server.py`, `app/mcp_server.py`, `frontend/src/pages/Skills.tsx`.
2. entrypoint를 따라 실행 흐름 확인: `frontend/src/App.tsx`, `frontend/src/index.css`, `frontend/src/main.tsx`.
3. agent/tool runtime 매핑: `frontend/src/pages/Skills.tsx`, `examples/templates/supplier_review/skill.json`, `examples/templates/soc2_type2/skill.json`.
4. retrieval/memory/indexing 확인: `tests/test_graph_rag.py`, `frontend/index.html`, `frontend/src/index.css`.
5. test/eval 파일로 동작 검증: `SPEC.md`, `test_integration.sh`, `tests/__init__.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 MCP server for AI agent for cybersecurity automate assessment of documents, questionnaires & reports. Multi format parsi. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, Dockerfile, docker-compose.yml, Makefile이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
