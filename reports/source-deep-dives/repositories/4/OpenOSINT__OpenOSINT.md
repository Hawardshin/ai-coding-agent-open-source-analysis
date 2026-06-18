# OpenOSINT/OpenOSINT 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

AI-powered OSINT agent with interactive REPL, MCP server, and CLI. 16 tools. Works with Claude, GPT-4, or local models. For authorized security research only.

## 요약

- 조사 단위: `sources/OpenOSINT__OpenOSINT` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 182 files, 29 directories, depth score 108, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/test_cloud_mcp.py, openosint/mcp_server.py, media/tapes/mcp-showcase.tape이고, 의존성 단서는 openai, anthropic, claude, mcp, fastapi, ollama, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | OpenOSINT/OpenOSINT |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 688 |
| Forks | 111 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/OpenOSINT__OpenOSINT](../../../../sources/OpenOSINT__OpenOSINT) |
| 기존 보고서 | [reports/global-trending/repositories/OpenOSINT__OpenOSINT.md](../../../global-trending/repositories/OpenOSINT__OpenOSINT.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 182 / 29 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | .do, .github, .mcp, assets, cloud, db, docs, legal, media, openosint, scripts, tests |
| 상위 확장자 | .py: 70, .html: 35, .md: 16, .png: 9, .yml: 8, .tape: 7, .txt: 6, (none): 6, .gif: 5, .sh: 5, .json: 3, .mp4: 2 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 51 |
| tests | validation surface | 17 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| cloud | top-level component | 1 |
| db | top-level component | 1 |
| legal | top-level component | 1 |
| media | top-level component | 1 |
| openosint | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | openosint | openosint |
| utility | pyproject.toml | openosint-mcp | openosint-mcp |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic, claude |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | ollama, llama |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [tests/test_cloud_mcp.py](../../../../sources/OpenOSINT__OpenOSINT/tests/test_cloud_mcp.py) | mcp signal |
| mcp | [openosint/mcp_server.py](../../../../sources/OpenOSINT__OpenOSINT/openosint/mcp_server.py) | mcp signal |
| mcp | [media/tapes/mcp-showcase.tape](../../../../sources/OpenOSINT__OpenOSINT/media/tapes/mcp-showcase.tape) | mcp signal |
| mcp | [docs/blog/mcp-protocol-explained.html](../../../../sources/OpenOSINT__OpenOSINT/docs/blog/mcp-protocol-explained.html) | mcp signal |
| agentRuntime | [openosint/agent.py](../../../../sources/OpenOSINT__OpenOSINT/openosint/agent.py) | agentRuntime signal |
| agentRuntime | [openosint/tools/__init__.py](../../../../sources/OpenOSINT__OpenOSINT/openosint/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [openosint/tools/exceptions.py](../../../../sources/OpenOSINT__OpenOSINT/openosint/tools/exceptions.py) | agentRuntime signal |
| agentRuntime | [openosint/tools/generate_dorks.py](../../../../sources/OpenOSINT__OpenOSINT/openosint/tools/generate_dorks.py) | agentRuntime signal |
| entrypoints | [cloud/main.py](../../../../sources/OpenOSINT__OpenOSINT/cloud/main.py) | entrypoints signal |
| entrypoints | [.mcp/server.json](../../../../sources/OpenOSINT__OpenOSINT/.mcp/server.json) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/OpenOSINT__OpenOSINT/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/OpenOSINT__OpenOSINT/uv.lock) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [cloud/main.py](../../../../sources/OpenOSINT__OpenOSINT/cloud/main.py)<br>[.mcp/server.json](../../../../sources/OpenOSINT__OpenOSINT/.mcp/server.json) |
| agentRuntime | 23 | [openosint/agent.py](../../../../sources/OpenOSINT__OpenOSINT/openosint/agent.py)<br>[openosint/tools/__init__.py](../../../../sources/OpenOSINT__OpenOSINT/openosint/tools/__init__.py)<br>[openosint/tools/exceptions.py](../../../../sources/OpenOSINT__OpenOSINT/openosint/tools/exceptions.py)<br>[openosint/tools/generate_dorks.py](../../../../sources/OpenOSINT__OpenOSINT/openosint/tools/generate_dorks.py)<br>[openosint/tools/scrape_url.py](../../../../sources/OpenOSINT__OpenOSINT/openosint/tools/scrape_url.py)<br>[openosint/tools/search_abuseipdb.py](../../../../sources/OpenOSINT__OpenOSINT/openosint/tools/search_abuseipdb.py)<br>[openosint/tools/search_breach.py](../../../../sources/OpenOSINT__OpenOSINT/openosint/tools/search_breach.py)<br>[openosint/tools/search_censys.py](../../../../sources/OpenOSINT__OpenOSINT/openosint/tools/search_censys.py) |
| mcp | 8 | [tests/test_cloud_mcp.py](../../../../sources/OpenOSINT__OpenOSINT/tests/test_cloud_mcp.py)<br>[openosint/mcp_server.py](../../../../sources/OpenOSINT__OpenOSINT/openosint/mcp_server.py)<br>[media/tapes/mcp-showcase.tape](../../../../sources/OpenOSINT__OpenOSINT/media/tapes/mcp-showcase.tape)<br>[docs/blog/mcp-protocol-explained.html](../../../../sources/OpenOSINT__OpenOSINT/docs/blog/mcp-protocol-explained.html)<br>[docs/blog/osint-with-mcp.html](../../../../sources/OpenOSINT__OpenOSINT/docs/blog/osint-with-mcp.html)<br>[cloud/routes/mcp_gateway.py](../../../../sources/OpenOSINT__OpenOSINT/cloud/routes/mcp_gateway.py)<br>[.mcp/server.json](../../../../sources/OpenOSINT__OpenOSINT/.mcp/server.json)<br>[.github/workflows/publish-mcp-registry.yml](../../../../sources/OpenOSINT__OpenOSINT/.github/workflows/publish-mcp-registry.yml) |
| retrieval | 12 | [openosint/index.html.txt](../../../../sources/OpenOSINT__OpenOSINT/openosint/index.html.txt)<br>[openosint/web/index.html](../../../../sources/OpenOSINT__OpenOSINT/openosint/web/index.html)<br>[docs/index.html](../../../../sources/OpenOSINT__OpenOSINT/docs/index.html)<br>[docs/tools/index.html](../../../../sources/OpenOSINT__OpenOSINT/docs/tools/index.html)<br>[docs/terms/index.html](../../../../sources/OpenOSINT__OpenOSINT/docs/terms/index.html)<br>[docs/subprocessors/index.html](../../../../sources/OpenOSINT__OpenOSINT/docs/subprocessors/index.html)<br>[docs/privacy/index.html](../../../../sources/OpenOSINT__OpenOSINT/docs/privacy/index.html)<br>[docs/learn/index.html](../../../../sources/OpenOSINT__OpenOSINT/docs/learn/index.html) |
| spec | 0 | 명확하지 않음 |
| eval | 16 | [tests/__init__.py](../../../../sources/OpenOSINT__OpenOSINT/tests/__init__.py)<br>[tests/test_brightdata.py](../../../../sources/OpenOSINT__OpenOSINT/tests/test_brightdata.py)<br>[tests/test_cli_openai.py](../../../../sources/OpenOSINT__OpenOSINT/tests/test_cli_openai.py)<br>[tests/test_cloud_mcp.py](../../../../sources/OpenOSINT__OpenOSINT/tests/test_cloud_mcp.py)<br>[tests/test_cloud.py](../../../../sources/OpenOSINT__OpenOSINT/tests/test_cloud.py)<br>[tests/test_dns.py](../../../../sources/OpenOSINT__OpenOSINT/tests/test_dns.py)<br>[tests/test_json_export.py](../../../../sources/OpenOSINT__OpenOSINT/tests/test_json_export.py)<br>[tests/test_openai_agent.py](../../../../sources/OpenOSINT__OpenOSINT/tests/test_openai_agent.py) |
| security | 3 | [legal/ACCEPTABLE_USE_POLICY.md](../../../../sources/OpenOSINT__OpenOSINT/legal/ACCEPTABLE_USE_POLICY.md)<br>[legal/PRIVACY_POLICY.md](../../../../sources/OpenOSINT__OpenOSINT/legal/PRIVACY_POLICY.md)<br>[cloud/auth.py](../../../../sources/OpenOSINT__OpenOSINT/cloud/auth.py) |
| ci | 2 | [.github/workflows/publish-mcp-registry.yml](../../../../sources/OpenOSINT__OpenOSINT/.github/workflows/publish-mcp-registry.yml)<br>[.github/workflows/release.yml](../../../../sources/OpenOSINT__OpenOSINT/.github/workflows/release.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/OpenOSINT__OpenOSINT/docker-compose.yml)<br>[Dockerfile](../../../../sources/OpenOSINT__OpenOSINT/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 45 | [README.md](../../../../sources/OpenOSINT__OpenOSINT/README.md)<br>[media/README.md](../../../../sources/OpenOSINT__OpenOSINT/media/README.md)<br>[media/screenshots/README.md](../../../../sources/OpenOSINT__OpenOSINT/media/screenshots/README.md)<br>[docs/CNAME](../../../../sources/OpenOSINT__OpenOSINT/docs/CNAME)<br>[docs/commercial-license.md](../../../../sources/OpenOSINT__OpenOSINT/docs/commercial-license.md)<br>[docs/index.html](../../../../sources/OpenOSINT__OpenOSINT/docs/index.html)<br>[docs/logo.svg](../../../../sources/OpenOSINT__OpenOSINT/docs/logo.svg)<br>[docs/robots.txt](../../../../sources/OpenOSINT__OpenOSINT/docs/robots.txt) |
| config | 2 | [pyproject.toml](../../../../sources/OpenOSINT__OpenOSINT/pyproject.toml)<br>[uv.lock](../../../../sources/OpenOSINT__OpenOSINT/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 16 | [tests/__init__.py](../../../../sources/OpenOSINT__OpenOSINT/tests/__init__.py)<br>[tests/test_brightdata.py](../../../../sources/OpenOSINT__OpenOSINT/tests/test_brightdata.py)<br>[tests/test_cli_openai.py](../../../../sources/OpenOSINT__OpenOSINT/tests/test_cli_openai.py)<br>[tests/test_cloud_mcp.py](../../../../sources/OpenOSINT__OpenOSINT/tests/test_cloud_mcp.py)<br>[tests/test_cloud.py](../../../../sources/OpenOSINT__OpenOSINT/tests/test_cloud.py)<br>[tests/test_dns.py](../../../../sources/OpenOSINT__OpenOSINT/tests/test_dns.py) |
| CI workflow | 2 | [.github/workflows/publish-mcp-registry.yml](../../../../sources/OpenOSINT__OpenOSINT/.github/workflows/publish-mcp-registry.yml)<br>[.github/workflows/release.yml](../../../../sources/OpenOSINT__OpenOSINT/.github/workflows/release.yml) |
| 컨테이너/배포 | 2 | [docker-compose.yml](../../../../sources/OpenOSINT__OpenOSINT/docker-compose.yml)<br>[Dockerfile](../../../../sources/OpenOSINT__OpenOSINT/Dockerfile) |
| 보안/정책 | 3 | [legal/ACCEPTABLE_USE_POLICY.md](../../../../sources/OpenOSINT__OpenOSINT/legal/ACCEPTABLE_USE_POLICY.md)<br>[legal/PRIVACY_POLICY.md](../../../../sources/OpenOSINT__OpenOSINT/legal/PRIVACY_POLICY.md)<br>[cloud/auth.py](../../../../sources/OpenOSINT__OpenOSINT/cloud/auth.py) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/test_cloud_mcp.py`, `openosint/mcp_server.py`, `media/tapes/mcp-showcase.tape`.
2. entrypoint를 따라 실행 흐름 확인: `cloud/main.py`, `.mcp/server.json`.
3. agent/tool runtime 매핑: `openosint/agent.py`, `openosint/tools/__init__.py`, `openosint/tools/exceptions.py`.
4. retrieval/memory/indexing 확인: `openosint/index.html.txt`, `openosint/web/index.html`, `docs/index.html`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/test_brightdata.py`, `tests/test_cli_openai.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 AI powered OSINT agent with interactive REPL, MCP server, and CLI. 16 tools. Works with Claude, GPT 4, or local models. . 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, README.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
