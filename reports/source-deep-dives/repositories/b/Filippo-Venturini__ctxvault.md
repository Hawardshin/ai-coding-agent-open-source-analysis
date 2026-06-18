# Filippo-Venturini/ctxvault 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Local memory infrastructure for AI agents. Store knowledge and skills in isolated vaults you compose, control and query.

## 요약

- 조사 단위: `sources/Filippo-Venturini__ctxvault` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 164 files, 48 directories, depth score 107, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/ctxvault/mcp/__init__.py, src/ctxvault/mcp/server.py이고, 의존성 단서는 claude, mcp, fastapi, pydantic, typer, transformers, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Filippo-Venturini/ctxvault |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 58 |
| Forks | 9 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Filippo-Venturini__ctxvault](../../../../sources/Filippo-Venturini__ctxvault) |
| 기존 보고서 | [reports/global-trending/repositories/Filippo-Venturini__ctxvault.md](../../../global-trending/repositories/Filippo-Venturini__ctxvault.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 164 / 48 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, assets, benchmarks, docs, examples, src, tests |
| 상위 확장자 | .txt: 51, .py: 50, .md: 21, .svg: 12, .json: 7, .png: 6, (none): 3, .gif: 2, .jpg: 2, .yml: 2, .css: 1, .docx: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 16 |
| examples/05-procedural-memory-agent | examples workspace | 15 |
| examples/01-simple-rag | examples workspace | 11 |
| examples/03-persistent-memory | examples workspace | 7 |
| src | source boundary | 6 |
| tests | validation surface | 5 |
| examples/02-multi-agent-isolation | examples workspace | 3 |
| examples/04-composed-topology | examples workspace | 3 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| benchmarks | validation surface | 1 |
| examples | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | ctxvault | ctxvault |
| utility | pyproject.toml | ctxvault-mcp | ctxvault-mcp |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | claude |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | chroma |
| modelRuntime | transformers |
| webRuntime | fastapi |
| developerSurface | typer |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [src/ctxvault/mcp/__init__.py](../../../../sources/Filippo-Venturini__ctxvault/src/ctxvault/mcp/__init__.py) | mcp signal |
| mcp | [src/ctxvault/mcp/server.py](../../../../sources/Filippo-Venturini__ctxvault/src/ctxvault/mcp/server.py) | mcp signal |
| agentRuntime | [src/ctxvault/core/vaults/skill.py](../../../../sources/Filippo-Venturini__ctxvault/src/ctxvault/core/vaults/skill.py) | agentRuntime signal |
| agentRuntime | [examples/05-procedural-memory-agent/.ctxvault/vaults/comms-skills/skills-index.json](../../../../sources/Filippo-Venturini__ctxvault/examples/05-procedural-memory-agent/.ctxvault/vaults/comms-skills/skills-index.json) | agentRuntime signal |
| config | [pyproject.toml](../../../../sources/Filippo-Venturini__ctxvault/pyproject.toml) | config signal |
| config | [requirements.txt](../../../../sources/Filippo-Venturini__ctxvault/requirements.txt) | config signal |
| config | [uv.lock](../../../../sources/Filippo-Venturini__ctxvault/uv.lock) | config signal |
| config | [examples/05-procedural-memory-agent/requirements.txt](../../../../sources/Filippo-Venturini__ctxvault/examples/05-procedural-memory-agent/requirements.txt) | config signal |
| ci | [.github/workflows/release.yml](../../../../sources/Filippo-Venturini__ctxvault/.github/workflows/release.yml) | ci support |
| ci | [.github/workflows/test.yml](../../../../sources/Filippo-Venturini__ctxvault/.github/workflows/test.yml) | ci support |
| eval | [tests/conftest.py](../../../../sources/Filippo-Venturini__ctxvault/tests/conftest.py) | eval support |
| eval | [tests/test_api.py](../../../../sources/Filippo-Venturini__ctxvault/tests/test_api.py) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [src/ctxvault/mcp/server.py](../../../../sources/Filippo-Venturini__ctxvault/src/ctxvault/mcp/server.py) |
| agentRuntime | 2 | [src/ctxvault/core/vaults/skill.py](../../../../sources/Filippo-Venturini__ctxvault/src/ctxvault/core/vaults/skill.py)<br>[examples/05-procedural-memory-agent/.ctxvault/vaults/comms-skills/skills-index.json](../../../../sources/Filippo-Venturini__ctxvault/examples/05-procedural-memory-agent/.ctxvault/vaults/comms-skills/skills-index.json) |
| mcp | 2 | [src/ctxvault/mcp/__init__.py](../../../../sources/Filippo-Venturini__ctxvault/src/ctxvault/mcp/__init__.py)<br>[src/ctxvault/mcp/server.py](../../../../sources/Filippo-Venturini__ctxvault/src/ctxvault/mcp/server.py) |
| retrieval | 38 | [src/ctxvault/core/embedding.py](../../../../sources/Filippo-Venturini__ctxvault/src/ctxvault/core/embedding.py)<br>[examples/05-procedural-memory-agent/app.py](../../../../sources/Filippo-Venturini__ctxvault/examples/05-procedural-memory-agent/app.py)<br>[examples/05-procedural-memory-agent/README.md](../../../../sources/Filippo-Venturini__ctxvault/examples/05-procedural-memory-agent/README.md)<br>[examples/05-procedural-memory-agent/requirements.txt](../../../../sources/Filippo-Venturini__ctxvault/examples/05-procedural-memory-agent/requirements.txt)<br>[examples/05-procedural-memory-agent/.ctxvault/config.json](../../../../sources/Filippo-Venturini__ctxvault/examples/05-procedural-memory-agent/.ctxvault/config.json)<br>[examples/05-procedural-memory-agent/.ctxvault/vaults/company-knowledge/team-metrics.md](../../../../sources/Filippo-Venturini__ctxvault/examples/05-procedural-memory-agent/.ctxvault/vaults/company-knowledge/team-metrics.md)<br>[examples/05-procedural-memory-agent/.ctxvault/vaults/company-knowledge/team-structure.md](../../../../sources/Filippo-Venturini__ctxvault/examples/05-procedural-memory-agent/.ctxvault/vaults/company-knowledge/team-structure.md)<br>[examples/05-procedural-memory-agent/.ctxvault/vaults/company-knowledge/weekly-highlights.md](../../../../sources/Filippo-Venturini__ctxvault/examples/05-procedural-memory-agent/.ctxvault/vaults/company-knowledge/weekly-highlights.md) |
| spec | 9 | [requirements.txt](../../../../sources/Filippo-Venturini__ctxvault/requirements.txt)<br>[examples/05-procedural-memory-agent/requirements.txt](../../../../sources/Filippo-Venturini__ctxvault/examples/05-procedural-memory-agent/requirements.txt)<br>[examples/04-composed-topology/requirements.txt](../../../../sources/Filippo-Venturini__ctxvault/examples/04-composed-topology/requirements.txt)<br>[examples/03-persistent-memory/requirements.txt](../../../../sources/Filippo-Venturini__ctxvault/examples/03-persistent-memory/requirements.txt)<br>[examples/02-multi-agent-isolation/requirements.txt](../../../../sources/Filippo-Venturini__ctxvault/examples/02-multi-agent-isolation/requirements.txt)<br>[examples/01-simple-rag/requirements.txt](../../../../sources/Filippo-Venturini__ctxvault/examples/01-simple-rag/requirements.txt)<br>[benchmarks/retrieval/requirements.txt](../../../../sources/Filippo-Venturini__ctxvault/benchmarks/retrieval/requirements.txt)<br>[benchmarks/dataset/technology/tech_05_agent_memory_architecture.txt](../../../../sources/Filippo-Venturini__ctxvault/benchmarks/dataset/technology/tech_05_agent_memory_architecture.txt) |
| eval | 7 | [tests/conftest.py](../../../../sources/Filippo-Venturini__ctxvault/tests/conftest.py)<br>[tests/test_api.py](../../../../sources/Filippo-Venturini__ctxvault/tests/test_api.py)<br>[tests/test_cli.py](../../../../sources/Filippo-Venturini__ctxvault/tests/test_cli.py)<br>[tests/test_core.py](../../../../sources/Filippo-Venturini__ctxvault/tests/test_core.py)<br>[benchmarks/internal/beir_benchmark.py](../../../../sources/Filippo-Venturini__ctxvault/benchmarks/internal/beir_benchmark.py)<br>[benchmarks/internal/coir_benchmark.py](../../../../sources/Filippo-Venturini__ctxvault/benchmarks/internal/coir_benchmark.py)<br>[.github/workflows/test.yml](../../../../sources/Filippo-Venturini__ctxvault/.github/workflows/test.yml) |
| security | 5 | [benchmarks/dataset/legal/legal_02_access_control_policy.txt](../../../../sources/Filippo-Venturini__ctxvault/benchmarks/dataset/legal/legal_02_access_control_policy.txt)<br>[benchmarks/dataset/legal/legal_05_compliance_documentation.txt](../../../../sources/Filippo-Venturini__ctxvault/benchmarks/dataset/legal/legal_05_compliance_documentation.txt)<br>[benchmarks/dataset/legal/legal_08_internal_audit_trails.txt](../../../../sources/Filippo-Venturini__ctxvault/benchmarks/dataset/legal/legal_08_internal_audit_trails.txt)<br>[benchmarks/dataset/legal/legal_09_policy_exception_management.txt](../../../../sources/Filippo-Venturini__ctxvault/benchmarks/dataset/legal/legal_09_policy_exception_management.txt)<br>[benchmarks/dataset/legal/legal_13_regulatory_compliance_frameworks.txt](../../../../sources/Filippo-Venturini__ctxvault/benchmarks/dataset/legal/legal_13_regulatory_compliance_frameworks.txt) |
| ci | 2 | [.github/workflows/release.yml](../../../../sources/Filippo-Venturini__ctxvault/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/Filippo-Venturini__ctxvault/.github/workflows/test.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 20 | [README.md](../../../../sources/Filippo-Venturini__ctxvault/README.md)<br>[examples/05-procedural-memory-agent/README.md](../../../../sources/Filippo-Venturini__ctxvault/examples/05-procedural-memory-agent/README.md)<br>[examples/04-composed-topology/README.md](../../../../sources/Filippo-Venturini__ctxvault/examples/04-composed-topology/README.md)<br>[examples/03-persistent-memory/README.md](../../../../sources/Filippo-Venturini__ctxvault/examples/03-persistent-memory/README.md)<br>[examples/02-multi-agent-isolation/README.md](../../../../sources/Filippo-Venturini__ctxvault/examples/02-multi-agent-isolation/README.md)<br>[examples/01-simple-rag/README.md](../../../../sources/Filippo-Venturini__ctxvault/examples/01-simple-rag/README.md)<br>[docs/index.html](../../../../sources/Filippo-Venturini__ctxvault/docs/index.html)<br>[docs/script.js](../../../../sources/Filippo-Venturini__ctxvault/docs/script.js) |
| config | 9 | [pyproject.toml](../../../../sources/Filippo-Venturini__ctxvault/pyproject.toml)<br>[requirements.txt](../../../../sources/Filippo-Venturini__ctxvault/requirements.txt)<br>[uv.lock](../../../../sources/Filippo-Venturini__ctxvault/uv.lock)<br>[examples/05-procedural-memory-agent/requirements.txt](../../../../sources/Filippo-Venturini__ctxvault/examples/05-procedural-memory-agent/requirements.txt)<br>[examples/04-composed-topology/requirements.txt](../../../../sources/Filippo-Venturini__ctxvault/examples/04-composed-topology/requirements.txt)<br>[examples/03-persistent-memory/requirements.txt](../../../../sources/Filippo-Venturini__ctxvault/examples/03-persistent-memory/requirements.txt)<br>[examples/02-multi-agent-isolation/requirements.txt](../../../../sources/Filippo-Venturini__ctxvault/examples/02-multi-agent-isolation/requirements.txt)<br>[examples/01-simple-rag/requirements.txt](../../../../sources/Filippo-Venturini__ctxvault/examples/01-simple-rag/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 7 | [tests/conftest.py](../../../../sources/Filippo-Venturini__ctxvault/tests/conftest.py)<br>[tests/test_api.py](../../../../sources/Filippo-Venturini__ctxvault/tests/test_api.py)<br>[tests/test_cli.py](../../../../sources/Filippo-Venturini__ctxvault/tests/test_cli.py)<br>[tests/test_core.py](../../../../sources/Filippo-Venturini__ctxvault/tests/test_core.py)<br>[benchmarks/internal/beir_benchmark.py](../../../../sources/Filippo-Venturini__ctxvault/benchmarks/internal/beir_benchmark.py)<br>[benchmarks/internal/coir_benchmark.py](../../../../sources/Filippo-Venturini__ctxvault/benchmarks/internal/coir_benchmark.py) |
| CI workflow | 2 | [.github/workflows/release.yml](../../../../sources/Filippo-Venturini__ctxvault/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/Filippo-Venturini__ctxvault/.github/workflows/test.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 5 | [benchmarks/dataset/legal/legal_02_access_control_policy.txt](../../../../sources/Filippo-Venturini__ctxvault/benchmarks/dataset/legal/legal_02_access_control_policy.txt)<br>[benchmarks/dataset/legal/legal_05_compliance_documentation.txt](../../../../sources/Filippo-Venturini__ctxvault/benchmarks/dataset/legal/legal_05_compliance_documentation.txt)<br>[benchmarks/dataset/legal/legal_08_internal_audit_trails.txt](../../../../sources/Filippo-Venturini__ctxvault/benchmarks/dataset/legal/legal_08_internal_audit_trails.txt)<br>[benchmarks/dataset/legal/legal_09_policy_exception_management.txt](../../../../sources/Filippo-Venturini__ctxvault/benchmarks/dataset/legal/legal_09_policy_exception_management.txt)<br>[benchmarks/dataset/legal/legal_13_regulatory_compliance_frameworks.txt](../../../../sources/Filippo-Venturini__ctxvault/benchmarks/dataset/legal/legal_13_regulatory_compliance_frameworks.txt) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/ctxvault/mcp/__init__.py`, `src/ctxvault/mcp/server.py`, `src/ctxvault/core/vaults/skill.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/ctxvault/mcp/server.py`.
3. agent/tool runtime 매핑: `src/ctxvault/core/vaults/skill.py`, `examples/05-procedural-memory-agent/.ctxvault/vaults/comms-skills/skills-index.json`.
4. retrieval/memory/indexing 확인: `src/ctxvault/core/embedding.py`, `examples/05-procedural-memory-agent/app.py`, `examples/05-procedural-memory-agent/README.md`.
5. test/eval 파일로 동작 검증: `tests/conftest.py`, `tests/test_api.py`, `tests/test_cli.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local memory infrastructure for AI agents. Store knowledge and skills in isolated vaults you compose, control and query.. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, README.md, LICENSE, mcp이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
