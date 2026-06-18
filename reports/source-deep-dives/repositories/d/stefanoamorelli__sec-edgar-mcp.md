# stefanoamorelli/sec-edgar-mcp 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

A SEC EDGAR MCP (Model Context Protocol) Server

## 요약

- 조사 단위: `sources/stefanoamorelli__sec-edgar-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 75 files, 17 directories, depth score 104, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=sec-edgar-mcp-logo.png, sec_edgar_mcp/__init__.py, sec_edgar_mcp/config.py이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | stefanoamorelli/sec-edgar-mcp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 319 |
| Forks | 88 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/stefanoamorelli__sec-edgar-mcp](../../../../sources/stefanoamorelli__sec-edgar-mcp) |
| 기존 보고서 | [reports/global-trending/repositories/stefanoamorelli__sec-edgar-mcp.md](../../../global-trending/repositories/stefanoamorelli__sec-edgar-mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 75 / 17 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, conda, docs, evals, sec_edgar_mcp, tests |
| 상위 확장자 | .py: 21, .mdx: 17, .yml: 8, (none): 6, .md: 5, .json: 4, .png: 3, .yaml: 3, .bat: 2, .cff: 1, .example: 1, .ini: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 26 |
| tests | validation surface | 3 |
| .github | ci surface | 1 |
| conda | top-level component | 1 |
| evals | top-level component | 1 |
| sec_edgar_mcp | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | sec-edgar-mcp | sec-edgar-mcp |


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
| mcp | [sec-edgar-mcp-logo.png](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec-edgar-mcp-logo.png) | mcp signal |
| mcp | [sec_edgar_mcp/__init__.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/__init__.py) | mcp signal |
| mcp | [sec_edgar_mcp/config.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/config.py) | mcp signal |
| mcp | [sec_edgar_mcp/document_parser.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/document_parser.py) | mcp signal |
| agentRuntime | [sec_edgar_mcp/tools/__init__.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [sec_edgar_mcp/tools/base.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/tools/base.py) | agentRuntime signal |
| agentRuntime | [sec_edgar_mcp/tools/company.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/tools/company.py) | agentRuntime signal |
| agentRuntime | [sec_edgar_mcp/tools/filings.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/tools/filings.py) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/stefanoamorelli__sec-edgar-mcp/server.json) | entrypoints signal |
| entrypoints | [sec_edgar_mcp/server.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/server.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/stefanoamorelli__sec-edgar-mcp/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/stefanoamorelli__sec-edgar-mcp/uv.lock) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [server.json](../../../../sources/stefanoamorelli__sec-edgar-mcp/server.json)<br>[sec_edgar_mcp/server.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/server.py) |
| agentRuntime | 10 | [sec_edgar_mcp/tools/__init__.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/tools/__init__.py)<br>[sec_edgar_mcp/tools/base.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/tools/base.py)<br>[sec_edgar_mcp/tools/company.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/tools/company.py)<br>[sec_edgar_mcp/tools/filings.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/tools/filings.py)<br>[sec_edgar_mcp/tools/financial.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/tools/financial.py)<br>[sec_edgar_mcp/tools/insider_complex.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/tools/insider_complex.py)<br>[sec_edgar_mcp/tools/insider.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/tools/insider.py)<br>[sec_edgar_mcp/tools/xbrl.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/tools/xbrl.py) |
| mcp | 22 | [sec-edgar-mcp-logo.png](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec-edgar-mcp-logo.png)<br>[sec_edgar_mcp/__init__.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/__init__.py)<br>[sec_edgar_mcp/config.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/config.py)<br>[sec_edgar_mcp/document_parser.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/document_parser.py)<br>[sec_edgar_mcp/server.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/server.py)<br>[sec_edgar_mcp/utils/__init__.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/utils/__init__.py)<br>[sec_edgar_mcp/utils/cache.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/utils/cache.py)<br>[sec_edgar_mcp/utils/constants.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/sec_edgar_mcp/utils/constants.py) |
| retrieval | 0 | 명확하지 않음 |
| spec | 1 | [docs/concepts/architecture.mdx](../../../../sources/stefanoamorelli__sec-edgar-mcp/docs/concepts/architecture.mdx) |
| eval | 2 | [tests/__init__.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/tests/__init__.py)<br>[tests/test_base_parse_date.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/tests/test_base_parse_date.py) |
| security | 1 | [SECURITY.md](../../../../sources/stefanoamorelli__sec-edgar-mcp/SECURITY.md) |
| ci | 7 | [.github/workflows/ci.yml](../../../../sources/stefanoamorelli__sec-edgar-mcp/.github/workflows/ci.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/stefanoamorelli__sec-edgar-mcp/.github/workflows/docker-publish.yml)<br>[.github/workflows/docs.yml](../../../../sources/stefanoamorelli__sec-edgar-mcp/.github/workflows/docs.yml)<br>[.github/workflows/evals.yml](../../../../sources/stefanoamorelli__sec-edgar-mcp/.github/workflows/evals.yml)<br>[.github/workflows/lint.yml](../../../../sources/stefanoamorelli__sec-edgar-mcp/.github/workflows/lint.yml)<br>[.github/workflows/publish_conda.yml](../../../../sources/stefanoamorelli__sec-edgar-mcp/.github/workflows/publish_conda.yml)<br>[.github/workflows/publish_pypi.yml](../../../../sources/stefanoamorelli__sec-edgar-mcp/.github/workflows/publish_pypi.yml) |
| container | 1 | [Dockerfile](../../../../sources/stefanoamorelli__sec-edgar-mcp/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 23 | [README.md](../../../../sources/stefanoamorelli__sec-edgar-mcp/README.md)<br>[evals/README.md](../../../../sources/stefanoamorelli__sec-edgar-mcp/evals/README.md)<br>[docs/authors.mdx](../../../../sources/stefanoamorelli__sec-edgar-mcp/docs/authors.mdx)<br>[docs/docs.json](../../../../sources/stefanoamorelli__sec-edgar-mcp/docs/docs.json)<br>[docs/favicon.png](../../../../sources/stefanoamorelli__sec-edgar-mcp/docs/favicon.png)<br>[docs/installation.mdx](../../../../sources/stefanoamorelli__sec-edgar-mcp/docs/installation.mdx)<br>[docs/introduction.mdx](../../../../sources/stefanoamorelli__sec-edgar-mcp/docs/introduction.mdx)<br>[docs/license.mdx](../../../../sources/stefanoamorelli__sec-edgar-mcp/docs/license.mdx) |
| config | 3 | [pyproject.toml](../../../../sources/stefanoamorelli__sec-edgar-mcp/pyproject.toml)<br>[uv.lock](../../../../sources/stefanoamorelli__sec-edgar-mcp/uv.lock)<br>[evals/package.json](../../../../sources/stefanoamorelli__sec-edgar-mcp/evals/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 2 | [tests/__init__.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/tests/__init__.py)<br>[tests/test_base_parse_date.py](../../../../sources/stefanoamorelli__sec-edgar-mcp/tests/test_base_parse_date.py) |
| CI workflow | 7 | [.github/workflows/ci.yml](../../../../sources/stefanoamorelli__sec-edgar-mcp/.github/workflows/ci.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/stefanoamorelli__sec-edgar-mcp/.github/workflows/docker-publish.yml)<br>[.github/workflows/docs.yml](../../../../sources/stefanoamorelli__sec-edgar-mcp/.github/workflows/docs.yml)<br>[.github/workflows/evals.yml](../../../../sources/stefanoamorelli__sec-edgar-mcp/.github/workflows/evals.yml)<br>[.github/workflows/lint.yml](../../../../sources/stefanoamorelli__sec-edgar-mcp/.github/workflows/lint.yml)<br>[.github/workflows/publish_conda.yml](../../../../sources/stefanoamorelli__sec-edgar-mcp/.github/workflows/publish_conda.yml) |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/stefanoamorelli__sec-edgar-mcp/Dockerfile) |
| 보안/정책 | 1 | [SECURITY.md](../../../../sources/stefanoamorelli__sec-edgar-mcp/SECURITY.md) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `sec-edgar-mcp-logo.png`, `sec_edgar_mcp/__init__.py`, `sec_edgar_mcp/config.py`.
2. entrypoint를 따라 실행 흐름 확인: `server.json`, `sec_edgar_mcp/server.py`.
3. agent/tool runtime 매핑: `sec_edgar_mcp/tools/__init__.py`, `sec_edgar_mcp/tools/base.py`, `sec_edgar_mcp/tools/company.py`.
4. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/test_base_parse_date.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 A SEC EDGAR MCP Model Context Protocol Server. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, README.md, LICENSE, mcp이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
