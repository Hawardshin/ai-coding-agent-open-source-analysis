# tobocop2/lilbee 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Run and manage local AI models, search your files and code, and crawl the web, all in one program. Cited answers, local-first, with an MCP server for your coding agent. TUI, CLI, REST API, and Python library. Works with Ollama and LM Studio.

## 요약

- 조사 단위: `sources/tobocop2__lilbee` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 667 files, 87 directories, depth score 121, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=tools/qa/test_mcp_tools.py, tools/qa/drivers/mcp.py, tests/test_mcp_compat.py이고, 의존성 단서는 mcp, pydantic, typer, ollama, llama, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | tobocop2/lilbee |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 25 |
| Forks | 3 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/tobocop2__lilbee](../../../../sources/tobocop2__lilbee) |
| 기존 보고서 | [reports/global-trending/repositories/tobocop2__lilbee.md](../../../global-trending/repositories/tobocop2__lilbee.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 667 / 87 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, bucket, docs, examples, packaging, scripts, site, src, tests, tools |
| 상위 확장자 | .py: 506, .yml: 36, .tcss: 33, .md: 31, .sh: 16, (none): 9, .json: 5, .toml: 4, .html: 3, .txt: 3, .css: 2, .lock: 2 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 64 |
| src | source boundary | 16 |
| docs | documentation surface | 14 |
| .github | ci surface | 1 |
| bucket | top-level component | 1 |
| examples | top-level component | 1 |
| examples/agent-integration | examples workspace | 1 |
| packaging | top-level component | 1 |
| scripts | top-level component | 1 |
| site | documentation surface | 1 |
| tools | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | lint | make lint |
| quality | Makefile | format | make format |
| quality | Makefile | format-check | make format-check |
| quality | Makefile | typecheck | make typecheck |
| test | Makefile | test | make test |
| test | Makefile | test-ci | make test-ci |
| test | Makefile | test-ci-serial | make test-ci-serial |
| test | Makefile | test-ci-forked | make test-ci-forked |
| quality | Makefile | imports-check | make imports-check |
| test | Makefile | test-integration | make test-integration |
| quality | Makefile | check | make check |
| utility | Makefile | install | make install |
| utility | Makefile | crawl-setup | make crawl-setup |
| utility | Makefile | dns-setup | make dns-setup |
| utility | Makefile | demo-prep | make demo-prep |
| utility | Makefile | demo | make demo |
| utility | Makefile | demo-publish | make demo-publish |
| build | Makefile | build | make build |
| utility | Makefile | publish | make publish |
| utility | pyproject.toml | lilbee | lilbee |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | ollama, llama |
| webRuntime | 없음 |
| developerSurface | typer |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [tools/qa/test_mcp_tools.py](../../../../sources/tobocop2__lilbee/tools/qa/test_mcp_tools.py) | mcp signal |
| mcp | [tools/qa/drivers/mcp.py](../../../../sources/tobocop2__lilbee/tools/qa/drivers/mcp.py) | mcp signal |
| mcp | [tests/test_mcp_compat.py](../../../../sources/tobocop2__lilbee/tests/test_mcp_compat.py) | mcp signal |
| mcp | [tests/test_mcp_memory.py](../../../../sources/tobocop2__lilbee/tests/test_mcp_memory.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/tobocop2__lilbee/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tools/__init__.py](../../../../sources/tobocop2__lilbee/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [tools/build_pep503_indexes.py](../../../../sources/tobocop2__lilbee/tools/build_pep503_indexes.py) | agentRuntime signal |
| agentRuntime | [tools/stage_release_assets.py](../../../../sources/tobocop2__lilbee/tools/stage_release_assets.py) | agentRuntime signal |
| entrypoints | [src/lilbee/__main__.py](../../../../sources/tobocop2__lilbee/src/lilbee/__main__.py) | entrypoints signal |
| entrypoints | [site/main.js](../../../../sources/tobocop2__lilbee/site/main.js) | entrypoints signal |
| instruction | [examples/agent-integration/AGENTS.md](../../../../sources/tobocop2__lilbee/examples/agent-integration/AGENTS.md) | instruction signal |
| config | [Makefile](../../../../sources/tobocop2__lilbee/Makefile) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [src/lilbee/__main__.py](../../../../sources/tobocop2__lilbee/src/lilbee/__main__.py)<br>[site/main.js](../../../../sources/tobocop2__lilbee/site/main.js) |
| agentRuntime | 66 | [AGENTS.md](../../../../sources/tobocop2__lilbee/AGENTS.md)<br>[tools/__init__.py](../../../../sources/tobocop2__lilbee/tools/__init__.py)<br>[tools/build_pep503_indexes.py](../../../../sources/tobocop2__lilbee/tools/build_pep503_indexes.py)<br>[tools/stage_release_assets.py](../../../../sources/tobocop2__lilbee/tools/stage_release_assets.py)<br>[tools/wheel-build/build_lilbee_binary.sh](../../../../sources/tobocop2__lilbee/tools/wheel-build/build_lilbee_binary.sh)<br>[tools/wheel-build/build_llama_cpp.sh](../../../../sources/tobocop2__lilbee/tools/wheel-build/build_llama_cpp.sh)<br>[tools/wheel-build/cmake_args.sh](../../../../sources/tobocop2__lilbee/tools/wheel-build/cmake_args.sh)<br>[tools/wheel-build/fetch_llama_cpp.sh](../../../../sources/tobocop2__lilbee/tools/wheel-build/fetch_llama_cpp.sh) |
| mcp | 9 | [tools/qa/test_mcp_tools.py](../../../../sources/tobocop2__lilbee/tools/qa/test_mcp_tools.py)<br>[tools/qa/drivers/mcp.py](../../../../sources/tobocop2__lilbee/tools/qa/drivers/mcp.py)<br>[tests/test_mcp_compat.py](../../../../sources/tobocop2__lilbee/tests/test_mcp_compat.py)<br>[tests/test_mcp_memory.py](../../../../sources/tobocop2__lilbee/tests/test_mcp_memory.py)<br>[tests/test_mcp_model_tools.py](../../../../sources/tobocop2__lilbee/tests/test_mcp_model_tools.py)<br>[tests/test_mcp.py](../../../../sources/tobocop2__lilbee/tests/test_mcp.py)<br>[src/lilbee/mcp_server.py](../../../../sources/tobocop2__lilbee/src/lilbee/mcp_server.py)<br>[docs/agent-skills/lilbee-mcp-wiki/SKILL.md](../../../../sources/tobocop2__lilbee/docs/agent-skills/lilbee-mcp-wiki/SKILL.md) |
| retrieval | 106 | [tools/qa/test_e2e_index.py](../../../../sources/tobocop2__lilbee/tools/qa/test_e2e_index.py)<br>[tools/qa/test_e2e_wiki_synth.py](../../../../sources/tobocop2__lilbee/tools/qa/test_e2e_wiki_synth.py)<br>[tools/qa/test_http_wiki.py](../../../../sources/tobocop2__lilbee/tools/qa/test_http_wiki.py)<br>[tests/test_app_memory.py](../../../../sources/tobocop2__lilbee/tests/test_app_memory.py)<br>[tests/test_chat_memory_commands.py](../../../../sources/tobocop2__lilbee/tests/test_chat_memory_commands.py)<br>[tests/test_chat_wiki_controller_integration.py](../../../../sources/tobocop2__lilbee/tests/test_chat_wiki_controller_integration.py)<br>[tests/test_cli_memory.py](../../../../sources/tobocop2__lilbee/tests/test_cli_memory.py)<br>[tests/test_embed_truncation_surfacing.py](../../../../sources/tobocop2__lilbee/tests/test_embed_truncation_surfacing.py) |
| spec | 3 | [tools/qa/requirements.txt](../../../../sources/tobocop2__lilbee/tools/qa/requirements.txt)<br>[src/lilbee/providers/local_servers/spec.py](../../../../sources/tobocop2__lilbee/src/lilbee/providers/local_servers/spec.py)<br>[docs/architecture.md](../../../../sources/tobocop2__lilbee/docs/architecture.md) |
| eval | 231 | [tools/qa/test_cli_help.py](../../../../sources/tobocop2__lilbee/tools/qa/test_cli_help.py)<br>[tools/qa/test_cli_model.py](../../../../sources/tobocop2__lilbee/tools/qa/test_cli_model.py)<br>[tools/qa/test_cli_negative.py](../../../../sources/tobocop2__lilbee/tools/qa/test_cli_negative.py)<br>[tools/qa/test_cli_self_check_extras.py](../../../../sources/tobocop2__lilbee/tools/qa/test_cli_self_check_extras.py)<br>[tools/qa/test_cli_status.py](../../../../sources/tobocop2__lilbee/tools/qa/test_cli_status.py)<br>[tools/qa/test_e2e_chat.py](../../../../sources/tobocop2__lilbee/tools/qa/test_e2e_chat.py)<br>[tools/qa/test_e2e_crawl.py](../../../../sources/tobocop2__lilbee/tools/qa/test_e2e_crawl.py)<br>[tools/qa/test_e2e_index.py](../../../../sources/tobocop2__lilbee/tools/qa/test_e2e_index.py) |
| security | 7 | [SECURITY.md](../../../../sources/tobocop2__lilbee/SECURITY.md)<br>[tests/integration/fixtures/docs/auth-part1.md](../../../../sources/tobocop2__lilbee/tests/integration/fixtures/docs/auth-part1.md)<br>[tests/integration/fixtures/docs/auth-part2.md](../../../../sources/tobocop2__lilbee/tests/integration/fixtures/docs/auth-part2.md)<br>[tests/integration/fixtures/docs/auth-part3.md](../../../../sources/tobocop2__lilbee/tests/integration/fixtures/docs/auth-part3.md)<br>[src/lilbee/server/auth.py](../../../../sources/tobocop2__lilbee/src/lilbee/server/auth.py)<br>[src/lilbee/core/security.py](../../../../sources/tobocop2__lilbee/src/lilbee/core/security.py)<br>[.github/workflows/security-scan.yml](../../../../sources/tobocop2__lilbee/.github/workflows/security-scan.yml) |
| ci | 20 | [.github/workflows/attach-release-artifacts.yml](../../../../sources/tobocop2__lilbee/.github/workflows/attach-release-artifacts.yml)<br>[.github/workflows/aur-check.yml](../../../../sources/tobocop2__lilbee/.github/workflows/aur-check.yml)<br>[.github/workflows/build-cuda-executables.yml](../../../../sources/tobocop2__lilbee/.github/workflows/build-cuda-executables.yml)<br>[.github/workflows/build-default-wheels.yml](../../../../sources/tobocop2__lilbee/.github/workflows/build-default-wheels.yml)<br>[.github/workflows/build-extra-wheels.yml](../../../../sources/tobocop2__lilbee/.github/workflows/build-extra-wheels.yml)<br>[.github/workflows/ci.yml](../../../../sources/tobocop2__lilbee/.github/workflows/ci.yml)<br>[.github/workflows/emergency-publish.yml](../../../../sources/tobocop2__lilbee/.github/workflows/emergency-publish.yml)<br>[.github/workflows/flake-check.yml](../../../../sources/tobocop2__lilbee/.github/workflows/flake-check.yml) |
| container | 1 | [packaging/docker/Dockerfile](../../../../sources/tobocop2__lilbee/packaging/docker/Dockerfile) |
| instruction | 2 | [AGENTS.md](../../../../sources/tobocop2__lilbee/AGENTS.md)<br>[examples/agent-integration/AGENTS.md](../../../../sources/tobocop2__lilbee/examples/agent-integration/AGENTS.md) |
| docs | 35 | [README.md](../../../../sources/tobocop2__lilbee/README.md)<br>[tools/wheel-build/README.md](../../../../sources/tobocop2__lilbee/tools/wheel-build/README.md)<br>[tools/qa/README.md](../../../../sources/tobocop2__lilbee/tools/qa/README.md)<br>[tests/integration/fixtures/docs/api-perf.md](../../../../sources/tobocop2__lilbee/tests/integration/fixtures/docs/api-perf.md)<br>[tests/integration/fixtures/docs/auth-part1.md](../../../../sources/tobocop2__lilbee/tests/integration/fixtures/docs/auth-part1.md)<br>[tests/integration/fixtures/docs/auth-part2.md](../../../../sources/tobocop2__lilbee/tests/integration/fixtures/docs/auth-part2.md)<br>[tests/integration/fixtures/docs/auth-part3.md](../../../../sources/tobocop2__lilbee/tests/integration/fixtures/docs/auth-part3.md)<br>[tests/integration/fixtures/docs/db-perf.md](../../../../sources/tobocop2__lilbee/tests/integration/fixtures/docs/db-perf.md) |
| config | 4 | [Makefile](../../../../sources/tobocop2__lilbee/Makefile)<br>[pyproject.toml](../../../../sources/tobocop2__lilbee/pyproject.toml)<br>[uv.lock](../../../../sources/tobocop2__lilbee/uv.lock)<br>[tools/qa/requirements.txt](../../../../sources/tobocop2__lilbee/tools/qa/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 231 | [tools/qa/test_cli_help.py](../../../../sources/tobocop2__lilbee/tools/qa/test_cli_help.py)<br>[tools/qa/test_cli_model.py](../../../../sources/tobocop2__lilbee/tools/qa/test_cli_model.py)<br>[tools/qa/test_cli_negative.py](../../../../sources/tobocop2__lilbee/tools/qa/test_cli_negative.py)<br>[tools/qa/test_cli_self_check_extras.py](../../../../sources/tobocop2__lilbee/tools/qa/test_cli_self_check_extras.py)<br>[tools/qa/test_cli_status.py](../../../../sources/tobocop2__lilbee/tools/qa/test_cli_status.py)<br>[tools/qa/test_e2e_chat.py](../../../../sources/tobocop2__lilbee/tools/qa/test_e2e_chat.py) |
| CI workflow | 20 | [.github/workflows/attach-release-artifacts.yml](../../../../sources/tobocop2__lilbee/.github/workflows/attach-release-artifacts.yml)<br>[.github/workflows/aur-check.yml](../../../../sources/tobocop2__lilbee/.github/workflows/aur-check.yml)<br>[.github/workflows/build-cuda-executables.yml](../../../../sources/tobocop2__lilbee/.github/workflows/build-cuda-executables.yml)<br>[.github/workflows/build-default-wheels.yml](../../../../sources/tobocop2__lilbee/.github/workflows/build-default-wheels.yml)<br>[.github/workflows/build-extra-wheels.yml](../../../../sources/tobocop2__lilbee/.github/workflows/build-extra-wheels.yml)<br>[.github/workflows/ci.yml](../../../../sources/tobocop2__lilbee/.github/workflows/ci.yml) |
| 컨테이너/배포 | 1 | [packaging/docker/Dockerfile](../../../../sources/tobocop2__lilbee/packaging/docker/Dockerfile) |
| 보안/정책 | 7 | [SECURITY.md](../../../../sources/tobocop2__lilbee/SECURITY.md)<br>[tests/integration/fixtures/docs/auth-part1.md](../../../../sources/tobocop2__lilbee/tests/integration/fixtures/docs/auth-part1.md)<br>[tests/integration/fixtures/docs/auth-part2.md](../../../../sources/tobocop2__lilbee/tests/integration/fixtures/docs/auth-part2.md)<br>[tests/integration/fixtures/docs/auth-part3.md](../../../../sources/tobocop2__lilbee/tests/integration/fixtures/docs/auth-part3.md)<br>[src/lilbee/server/auth.py](../../../../sources/tobocop2__lilbee/src/lilbee/server/auth.py)<br>[src/lilbee/core/security.py](../../../../sources/tobocop2__lilbee/src/lilbee/core/security.py) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/tobocop2__lilbee/AGENTS.md)<br>[examples/agent-integration/AGENTS.md](../../../../sources/tobocop2__lilbee/examples/agent-integration/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tools/qa/test_mcp_tools.py`, `tools/qa/drivers/mcp.py`, `tests/test_mcp_compat.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/lilbee/__main__.py`, `site/main.js`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tools/__init__.py`, `tools/build_pep503_indexes.py`.
4. retrieval/memory/indexing 확인: `tools/qa/test_e2e_index.py`, `tools/qa/test_e2e_wiki_synth.py`, `tools/qa/test_http_wiki.py`.
5. test/eval 파일로 동작 검증: `tools/qa/test_cli_help.py`, `tools/qa/test_cli_model.py`, `tools/qa/test_cli_negative.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Run and manage local AI models, search your files and code, and crawl the web, all in one program. Cited answers, local . 핵심 구조 신호는 Python, pyproject.toml, Makefile, README.md, AGENTS.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
