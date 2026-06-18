# jayjodev/vivory-mcp 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Vivory MCP servers for Korean public data (KOSIS, BoK ECOS, NEIS, LOCALDATA, etc.) — Anthropic Model Context Protocol packages for AI agents. Powered by api.vivory.app.

## 요약

- 조사 단위: `sources/jayjodev__vivory-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 42 files, 17 directories, depth score 80, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/mcp-server-verification/LICENSE, packages/mcp-server-verification/MCP_DIRECTORY_SUBMISSION.md, packages/mcp-server-verification/PYPI_PUBLISH_WORKFLOW.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | jayjodev/vivory-mcp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/jayjodev__vivory-mcp](../../../../sources/jayjodev__vivory-mcp) |
| 기존 보고서 | [reports/korea-trending/repositories/jayjodev__vivory-mcp.md](../../../korea-trending/repositories/jayjodev__vivory-mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 42 / 17 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, packages |
| 상위 확장자 | .py: 19, .md: 11, (none): 4, .toml: 3, .yml: 3, .json: 1, .mdc: 1 |
| 소스 패턴 | monorepo/workspace, api/server, agent/tool runtime, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/mcp-server-verification | packages workspace | 33 |
| packages/mcp-server-korea | packages workspace | 13 |
| packages/mcp-server-kosis | packages workspace | 13 |
| .github | ci surface | 1 |
| packages | source boundary | 1 |


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
| mcp | [packages/mcp-server-verification/LICENSE](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/LICENSE) | mcp signal |
| mcp | [packages/mcp-server-verification/MCP_DIRECTORY_SUBMISSION.md](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/MCP_DIRECTORY_SUBMISSION.md) | mcp signal |
| mcp | [packages/mcp-server-verification/PYPI_PUBLISH_WORKFLOW.md](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/PYPI_PUBLISH_WORKFLOW.md) | mcp signal |
| mcp | [packages/mcp-server-verification/pyproject.toml](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/pyproject.toml) | mcp signal |
| agentRuntime | [packages/mcp-server-verification/src/vivory_mcp_verification/tools/__init__.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/src/vivory_mcp_verification/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [packages/mcp-server-verification/src/vivory_mcp_verification/tools/doi.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/src/vivory_mcp_verification/tools/doi.py) | agentRuntime signal |
| agentRuntime | [packages/mcp-server-verification/src/vivory_mcp_verification/tools/law.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/src/vivory_mcp_verification/tools/law.py) | agentRuntime signal |
| agentRuntime | [packages/mcp-server-verification/src/vivory_mcp_verification/tools/provenance.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/src/vivory_mcp_verification/tools/provenance.py) | agentRuntime signal |
| entrypoints | [packages/mcp-server-verification/server.json](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/server.json) | entrypoints signal |
| entrypoints | [packages/mcp-server-verification/src/vivory_mcp_verification/__main__.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/src/vivory_mcp_verification/__main__.py) | entrypoints signal |
| entrypoints | [packages/mcp-server-verification/src/vivory_mcp_verification/server.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/src/vivory_mcp_verification/server.py) | entrypoints signal |
| entrypoints | [packages/mcp-server-kosis/src/vivory_mcp_kosis/__main__.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-kosis/src/vivory_mcp_kosis/__main__.py) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 7 | [packages/mcp-server-verification/server.json](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/server.json)<br>[packages/mcp-server-verification/src/vivory_mcp_verification/__main__.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/src/vivory_mcp_verification/__main__.py)<br>[packages/mcp-server-verification/src/vivory_mcp_verification/server.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/src/vivory_mcp_verification/server.py)<br>[packages/mcp-server-kosis/src/vivory_mcp_kosis/__main__.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-kosis/src/vivory_mcp_kosis/__main__.py)<br>[packages/mcp-server-kosis/src/vivory_mcp_kosis/server.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-kosis/src/vivory_mcp_kosis/server.py)<br>[packages/mcp-server-korea/src/vivory_mcp_korea/__main__.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-korea/src/vivory_mcp_korea/__main__.py)<br>[packages/mcp-server-korea/src/vivory_mcp_korea/server.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-korea/src/vivory_mcp_korea/server.py) |
| agentRuntime | 5 | [packages/mcp-server-verification/src/vivory_mcp_verification/tools/__init__.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/src/vivory_mcp_verification/tools/__init__.py)<br>[packages/mcp-server-verification/src/vivory_mcp_verification/tools/doi.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/src/vivory_mcp_verification/tools/doi.py)<br>[packages/mcp-server-verification/src/vivory_mcp_verification/tools/law.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/src/vivory_mcp_verification/tools/law.py)<br>[packages/mcp-server-verification/src/vivory_mcp_verification/tools/provenance.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/src/vivory_mcp_verification/tools/provenance.py)<br>[packages/mcp-server-verification/src/vivory_mcp_verification/tools/reconcile.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/src/vivory_mcp_verification/tools/reconcile.py) |
| mcp | 40 | [packages/mcp-server-verification/LICENSE](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/LICENSE)<br>[packages/mcp-server-verification/MCP_DIRECTORY_SUBMISSION.md](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/MCP_DIRECTORY_SUBMISSION.md)<br>[packages/mcp-server-verification/PYPI_PUBLISH_WORKFLOW.md](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/PYPI_PUBLISH_WORKFLOW.md)<br>[packages/mcp-server-verification/pyproject.toml](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/pyproject.toml)<br>[packages/mcp-server-verification/README.md](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/README.md)<br>[packages/mcp-server-verification/server.json](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/server.json)<br>[packages/mcp-server-verification/tests/test_tools.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/tests/test_tools.py)<br>[packages/mcp-server-verification/src/vivory_mcp_verification/__init__.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/src/vivory_mcp_verification/__init__.py) |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 3 | [packages/mcp-server-verification/tests/test_tools.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/tests/test_tools.py)<br>[packages/mcp-server-kosis/tests/test_tools.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-kosis/tests/test_tools.py)<br>[packages/mcp-server-korea/tests/test_tools.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-korea/tests/test_tools.py) |
| security | 0 | 명확하지 않음 |
| ci | 3 | [.github/workflows/publish-mcp-korea.yml](../../../../sources/jayjodev__vivory-mcp/.github/workflows/publish-mcp-korea.yml)<br>[.github/workflows/publish-mcp-kosis.yml](../../../../sources/jayjodev__vivory-mcp/.github/workflows/publish-mcp-kosis.yml)<br>[.github/workflows/publish-mcp-verification.yml](../../../../sources/jayjodev__vivory-mcp/.github/workflows/publish-mcp-verification.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 5 | [README.md](../../../../sources/jayjodev__vivory-mcp/README.md)<br>[packages/mcp-server-verification/README.md](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/README.md)<br>[packages/mcp-server-verification/examples/README.md](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/examples/README.md)<br>[packages/mcp-server-kosis/README.md](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-kosis/README.md)<br>[packages/mcp-server-korea/README.md](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-korea/README.md) |
| config | 3 | [packages/mcp-server-verification/pyproject.toml](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/pyproject.toml)<br>[packages/mcp-server-kosis/pyproject.toml](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-kosis/pyproject.toml)<br>[packages/mcp-server-korea/pyproject.toml](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-korea/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 3 | [packages/mcp-server-verification/tests/test_tools.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/tests/test_tools.py)<br>[packages/mcp-server-kosis/tests/test_tools.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-kosis/tests/test_tools.py)<br>[packages/mcp-server-korea/tests/test_tools.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-korea/tests/test_tools.py) |
| CI workflow | 3 | [.github/workflows/publish-mcp-korea.yml](../../../../sources/jayjodev__vivory-mcp/.github/workflows/publish-mcp-korea.yml)<br>[.github/workflows/publish-mcp-kosis.yml](../../../../sources/jayjodev__vivory-mcp/.github/workflows/publish-mcp-kosis.yml)<br>[.github/workflows/publish-mcp-verification.yml](../../../../sources/jayjodev__vivory-mcp/.github/workflows/publish-mcp-verification.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/mcp-server-verification/LICENSE`, `packages/mcp-server-verification/MCP_DIRECTORY_SUBMISSION.md`, `packages/mcp-server-verification/PYPI_PUBLISH_WORKFLOW.md`.
2. entrypoint를 따라 실행 흐름 확인: `packages/mcp-server-verification/server.json`, `packages/mcp-server-verification/src/vivory_mcp_verification/__main__.py`, `packages/mcp-server-verification/src/vivory_mcp_verification/server.py`.
3. agent/tool runtime 매핑: `packages/mcp-server-verification/src/vivory_mcp_verification/tools/__init__.py`, `packages/mcp-server-verification/src/vivory_mcp_verification/tools/doi.py`, `packages/mcp-server-verification/src/vivory_mcp_verification/tools/law.py`.
4. test/eval 파일로 동작 검증: `packages/mcp-server-verification/tests/test_tools.py`, `packages/mcp-server-kosis/tests/test_tools.py`, `packages/mcp-server-korea/tests/test_tools.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Vivory MCP servers for Korean public data KOSIS, BoK ECOS, NEIS, LOCALDATA, etc. — Anthropic Model Context Protocol pack. 핵심 구조 신호는 Python, README.md, ci, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
