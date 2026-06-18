# civilian7/korean-people-persona 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Korean persona dataset (NVIDIA Nemotron-Personas-Korea) → SQLite + FTS5 + MCP server for AI agents

## 요약

- 조사 단위: `sources/civilian7__korean-people-persona` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 28 files, 8 directories, depth score 76, key references 11개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, src/mcp_server/__init__.py, src/mcp_server/__main__.py이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | civilian7/korean-people-persona |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/civilian7__korean-people-persona](../../../../sources/civilian7__korean-people-persona) |
| 기존 보고서 | [reports/korea-trending/repositories/civilian7__korean-people-persona.md](../../../korea-trending/repositories/civilian7__korean-people-persona.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 28 / 8 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | docs, examples, src |
| 상위 확장자 | .py: 15, .md: 6, .txt: 2, .bat: 1, .json: 1, .ps1: 1, .sh: 1, (none): 1 |
| 소스 패턴 | api/server, agent/tool runtime, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 12 |
| docs | documentation surface | 7 |
| examples/requirements.txt | examples workspace | 2 |
| examples | top-level component | 1 |
| examples/copy_ab_test.py | examples workspace | 1 |
| examples/test_demos.py | examples workspace | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
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
| mcp | [.mcp.json](../../../../sources/civilian7__korean-people-persona/.mcp.json) | mcp signal |
| mcp | [src/mcp_server/__init__.py](../../../../sources/civilian7__korean-people-persona/src/mcp_server/__init__.py) | mcp signal |
| mcp | [src/mcp_server/__main__.py](../../../../sources/civilian7__korean-people-persona/src/mcp_server/__main__.py) | mcp signal |
| mcp | [src/mcp_server/db.py](../../../../sources/civilian7__korean-people-persona/src/mcp_server/db.py) | mcp signal |
| agentRuntime | [src/mcp_server/tools.py](../../../../sources/civilian7__korean-people-persona/src/mcp_server/tools.py) | agentRuntime signal |
| entrypoints | [src/mcp_server/server.py](../../../../sources/civilian7__korean-people-persona/src/mcp_server/server.py) | entrypoints signal |
| entrypoints | [src/convert/__main__.py](../../../../sources/civilian7__korean-people-persona/src/convert/__main__.py) | entrypoints signal |
| config | [requirements.txt](../../../../sources/civilian7__korean-people-persona/requirements.txt) | config signal |
| config | [examples/requirements.txt](../../../../sources/civilian7__korean-people-persona/examples/requirements.txt) | config signal |
| eval | [src/mcp_server/test_smoke.py](../../../../sources/civilian7__korean-people-persona/src/mcp_server/test_smoke.py) | eval support |
| eval | [examples/copy_ab_test.py](../../../../sources/civilian7__korean-people-persona/examples/copy_ab_test.py) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [src/mcp_server/__main__.py](../../../../sources/civilian7__korean-people-persona/src/mcp_server/__main__.py)<br>[src/mcp_server/server.py](../../../../sources/civilian7__korean-people-persona/src/mcp_server/server.py)<br>[src/convert/__main__.py](../../../../sources/civilian7__korean-people-persona/src/convert/__main__.py) |
| agentRuntime | 1 | [src/mcp_server/tools.py](../../../../sources/civilian7__korean-people-persona/src/mcp_server/tools.py) |
| mcp | 7 | [.mcp.json](../../../../sources/civilian7__korean-people-persona/.mcp.json)<br>[src/mcp_server/__init__.py](../../../../sources/civilian7__korean-people-persona/src/mcp_server/__init__.py)<br>[src/mcp_server/__main__.py](../../../../sources/civilian7__korean-people-persona/src/mcp_server/__main__.py)<br>[src/mcp_server/db.py](../../../../sources/civilian7__korean-people-persona/src/mcp_server/db.py)<br>[src/mcp_server/server.py](../../../../sources/civilian7__korean-people-persona/src/mcp_server/server.py)<br>[src/mcp_server/test_smoke.py](../../../../sources/civilian7__korean-people-persona/src/mcp_server/test_smoke.py)<br>[src/mcp_server/tools.py](../../../../sources/civilian7__korean-people-persona/src/mcp_server/tools.py) |
| retrieval | 0 | 명확하지 않음 |
| spec | 4 | [requirements.txt](../../../../sources/civilian7__korean-people-persona/requirements.txt)<br>[examples/requirements.txt](../../../../sources/civilian7__korean-people-persona/examples/requirements.txt)<br>[docs/superpowers/specs/2026-06-11-llm-agent-use-cases-design.md](../../../../sources/civilian7__korean-people-persona/docs/superpowers/specs/2026-06-11-llm-agent-use-cases-design.md)<br>[docs/superpowers/specs/2026-06-11-persona-demo-samples-design.md](../../../../sources/civilian7__korean-people-persona/docs/superpowers/specs/2026-06-11-persona-demo-samples-design.md) |
| eval | 3 | [src/mcp_server/test_smoke.py](../../../../sources/civilian7__korean-people-persona/src/mcp_server/test_smoke.py)<br>[examples/copy_ab_test.py](../../../../sources/civilian7__korean-people-persona/examples/copy_ab_test.py)<br>[examples/test_demos.py](../../../../sources/civilian7__korean-people-persona/examples/test_demos.py) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 5 | [README.md](../../../../sources/civilian7__korean-people-persona/README.md)<br>[docs/use-cases.md](../../../../sources/civilian7__korean-people-persona/docs/use-cases.md)<br>[docs/superpowers/specs/2026-06-11-llm-agent-use-cases-design.md](../../../../sources/civilian7__korean-people-persona/docs/superpowers/specs/2026-06-11-llm-agent-use-cases-design.md)<br>[docs/superpowers/specs/2026-06-11-persona-demo-samples-design.md](../../../../sources/civilian7__korean-people-persona/docs/superpowers/specs/2026-06-11-persona-demo-samples-design.md)<br>[docs/superpowers/plans/2026-06-11-persona-demo-samples.md](../../../../sources/civilian7__korean-people-persona/docs/superpowers/plans/2026-06-11-persona-demo-samples.md) |
| config | 2 | [requirements.txt](../../../../sources/civilian7__korean-people-persona/requirements.txt)<br>[examples/requirements.txt](../../../../sources/civilian7__korean-people-persona/examples/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 3 | [src/mcp_server/test_smoke.py](../../../../sources/civilian7__korean-people-persona/src/mcp_server/test_smoke.py)<br>[examples/copy_ab_test.py](../../../../sources/civilian7__korean-people-persona/examples/copy_ab_test.py)<br>[examples/test_demos.py](../../../../sources/civilian7__korean-people-persona/examples/test_demos.py) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `.mcp.json`, `src/mcp_server/__init__.py`, `src/mcp_server/__main__.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/mcp_server/__main__.py`, `src/mcp_server/server.py`, `src/convert/__main__.py`.
3. agent/tool runtime 매핑: `src/mcp_server/tools.py`.
4. test/eval 파일로 동작 검증: `src/mcp_server/test_smoke.py`, `examples/copy_ab_test.py`, `examples/test_demos.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Korean persona dataset NVIDIA Nemotron Personas Korea → SQLite + FTS5 + MCP server for AI agents. 핵심 구조 신호는 Python, requirements.txt, README.md, mcp, docs, spec-artifacts이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
