# lyonzin/knowledge-rag 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

[knowledge-rag] - Drop docs, search instantly from Claude Code — 12 MCP tools, 20 format parsers, hybrid search + reranking. Zero servers, zero API keys, 100% local.

## 요약

- 조사 단위: `sources/lyonzin__knowledge-rag` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 108 files, 17 directories, depth score 108, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp_server/__init__.py, mcp_server/config.py, mcp_server/guarded.py이고, 의존성 단서는 claude, mcp, ollama, llama, chroma, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | lyonzin/knowledge-rag |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 96 |
| Forks | 17 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/lyonzin__knowledge-rag](../../../../sources/lyonzin__knowledge-rag) |
| 기존 보고서 | [reports/global-trending/repositories/lyonzin__knowledge-rag.md](../../../global-trending/repositories/lyonzin__knowledge-rag.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 108 / 17 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, bench, docs, examples, mcp_server, npm, presets, scripts, tests |
| 상위 확장자 | .py: 46, .yaml: 13, .yml: 12, .md: 8, .json: 5, (none): 5, .txt: 4, .js: 2, .toml: 2, .c: 1, .cpp: 1, .csv: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 42 |
| docs | documentation surface | 2 |
| .github | ci surface | 1 |
| bench | validation surface | 1 |
| examples | top-level component | 1 |
| examples/mcp-config-single-instance.json | examples workspace | 1 |
| mcp_server | source boundary | 1 |
| npm | top-level component | 1 |
| presets | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | knowledge-rag | knowledge-rag |
| utility | pyproject.toml | knowledge-rag-guarded | knowledge-rag-guarded |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | claude |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | chroma |
| modelRuntime | ollama, llama |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [mcp_server/__init__.py](../../../../sources/lyonzin__knowledge-rag/mcp_server/__init__.py) | mcp signal |
| mcp | [mcp_server/config.py](../../../../sources/lyonzin__knowledge-rag/mcp_server/config.py) | mcp signal |
| mcp | [mcp_server/guarded.py](../../../../sources/lyonzin__knowledge-rag/mcp_server/guarded.py) | mcp signal |
| mcp | [mcp_server/ingestion.py](../../../../sources/lyonzin__knowledge-rag/mcp_server/ingestion.py) | mcp signal |
| entrypoints | [npm/bin/cli.js](../../../../sources/lyonzin__knowledge-rag/npm/bin/cli.js) | entrypoints signal |
| entrypoints | [mcp_server/server.py](../../../../sources/lyonzin__knowledge-rag/mcp_server/server.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/lyonzin__knowledge-rag/pyproject.toml) | config signal |
| config | [requirements-dev.txt](../../../../sources/lyonzin__knowledge-rag/requirements-dev.txt) | config signal |
| config | [requirements.txt](../../../../sources/lyonzin__knowledge-rag/requirements.txt) | config signal |
| config | [npm/package.json](../../../../sources/lyonzin__knowledge-rag/npm/package.json) | config signal |
| ci | [.github/workflows/bench-pages.yml](../../../../sources/lyonzin__knowledge-rag/.github/workflows/bench-pages.yml) | ci support |
| ci | [.github/workflows/ci.yml](../../../../sources/lyonzin__knowledge-rag/.github/workflows/ci.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [npm/bin/cli.js](../../../../sources/lyonzin__knowledge-rag/npm/bin/cli.js)<br>[mcp_server/server.py](../../../../sources/lyonzin__knowledge-rag/mcp_server/server.py) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 15 | [mcp_server/__init__.py](../../../../sources/lyonzin__knowledge-rag/mcp_server/__init__.py)<br>[mcp_server/config.py](../../../../sources/lyonzin__knowledge-rag/mcp_server/config.py)<br>[mcp_server/guarded.py](../../../../sources/lyonzin__knowledge-rag/mcp_server/guarded.py)<br>[mcp_server/ingestion.py](../../../../sources/lyonzin__knowledge-rag/mcp_server/ingestion.py)<br>[mcp_server/instance_lock.py](../../../../sources/lyonzin__knowledge-rag/mcp_server/instance_lock.py)<br>[mcp_server/metrics.py](../../../../sources/lyonzin__knowledge-rag/mcp_server/metrics.py)<br>[mcp_server/preflight.py](../../../../sources/lyonzin__knowledge-rag/mcp_server/preflight.py)<br>[mcp_server/ratelimit.py](../../../../sources/lyonzin__knowledge-rag/mcp_server/ratelimit.py) |
| retrieval | 2 | [tests/test_memory_baseline.py](../../../../sources/lyonzin__knowledge-rag/tests/test_memory_baseline.py)<br>[bench/test_bench_memory.py](../../../../sources/lyonzin__knowledge-rag/bench/test_bench_memory.py) |
| spec | 2 | [requirements-dev.txt](../../../../sources/lyonzin__knowledge-rag/requirements-dev.txt)<br>[requirements.txt](../../../../sources/lyonzin__knowledge-rag/requirements.txt) |
| eval | 51 | [tests/_vulture_whitelist.py](../../../../sources/lyonzin__knowledge-rag/tests/_vulture_whitelist.py)<br>[tests/conftest.py](../../../../sources/lyonzin__knowledge-rag/tests/conftest.py)<br>[tests/test_backwards_compat.py](../../../../sources/lyonzin__knowledge-rag/tests/test_backwards_compat.py)<br>[tests/test_config.py](../../../../sources/lyonzin__knowledge-rag/tests/test_config.py)<br>[tests/test_dedup.py](../../../../sources/lyonzin__knowledge-rag/tests/test_dedup.py)<br>[tests/test_exclude_patterns.py](../../../../sources/lyonzin__knowledge-rag/tests/test_exclude_patterns.py)<br>[tests/test_format_smoke.py](../../../../sources/lyonzin__knowledge-rag/tests/test_format_smoke.py)<br>[tests/test_ingestion_property.py](../../../../sources/lyonzin__knowledge-rag/tests/test_ingestion_property.py) |
| security | 2 | [SECURITY.md](../../../../sources/lyonzin__knowledge-rag/SECURITY.md)<br>[.github/workflows/security.yml](../../../../sources/lyonzin__knowledge-rag/.github/workflows/security.yml) |
| ci | 6 | [.github/workflows/bench-pages.yml](../../../../sources/lyonzin__knowledge-rag/.github/workflows/bench-pages.yml)<br>[.github/workflows/ci.yml](../../../../sources/lyonzin__knowledge-rag/.github/workflows/ci.yml)<br>[.github/workflows/nightly.yml](../../../../sources/lyonzin__knowledge-rag/.github/workflows/nightly.yml)<br>[.github/workflows/quality-gate.yml](../../../../sources/lyonzin__knowledge-rag/.github/workflows/quality-gate.yml)<br>[.github/workflows/release.yml](../../../../sources/lyonzin__knowledge-rag/.github/workflows/release.yml)<br>[.github/workflows/security.yml](../../../../sources/lyonzin__knowledge-rag/.github/workflows/security.yml) |
| container | 1 | [Dockerfile](../../../../sources/lyonzin__knowledge-rag/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 3 | [README.md](../../../../sources/lyonzin__knowledge-rag/README.md)<br>[npm/README.md](../../../../sources/lyonzin__knowledge-rag/npm/README.md)<br>[docs/single-instance.md](../../../../sources/lyonzin__knowledge-rag/docs/single-instance.md) |
| config | 4 | [pyproject.toml](../../../../sources/lyonzin__knowledge-rag/pyproject.toml)<br>[requirements-dev.txt](../../../../sources/lyonzin__knowledge-rag/requirements-dev.txt)<br>[requirements.txt](../../../../sources/lyonzin__knowledge-rag/requirements.txt)<br>[npm/package.json](../../../../sources/lyonzin__knowledge-rag/npm/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 51 | [tests/_vulture_whitelist.py](../../../../sources/lyonzin__knowledge-rag/tests/_vulture_whitelist.py)<br>[tests/conftest.py](../../../../sources/lyonzin__knowledge-rag/tests/conftest.py)<br>[tests/test_backwards_compat.py](../../../../sources/lyonzin__knowledge-rag/tests/test_backwards_compat.py)<br>[tests/test_config.py](../../../../sources/lyonzin__knowledge-rag/tests/test_config.py)<br>[tests/test_dedup.py](../../../../sources/lyonzin__knowledge-rag/tests/test_dedup.py)<br>[tests/test_exclude_patterns.py](../../../../sources/lyonzin__knowledge-rag/tests/test_exclude_patterns.py) |
| CI workflow | 6 | [.github/workflows/bench-pages.yml](../../../../sources/lyonzin__knowledge-rag/.github/workflows/bench-pages.yml)<br>[.github/workflows/ci.yml](../../../../sources/lyonzin__knowledge-rag/.github/workflows/ci.yml)<br>[.github/workflows/nightly.yml](../../../../sources/lyonzin__knowledge-rag/.github/workflows/nightly.yml)<br>[.github/workflows/quality-gate.yml](../../../../sources/lyonzin__knowledge-rag/.github/workflows/quality-gate.yml)<br>[.github/workflows/release.yml](../../../../sources/lyonzin__knowledge-rag/.github/workflows/release.yml)<br>[.github/workflows/security.yml](../../../../sources/lyonzin__knowledge-rag/.github/workflows/security.yml) |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/lyonzin__knowledge-rag/Dockerfile) |
| 보안/정책 | 2 | [SECURITY.md](../../../../sources/lyonzin__knowledge-rag/SECURITY.md)<br>[.github/workflows/security.yml](../../../../sources/lyonzin__knowledge-rag/.github/workflows/security.yml) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `mcp_server/__init__.py`, `mcp_server/config.py`, `mcp_server/guarded.py`.
2. entrypoint를 따라 실행 흐름 확인: `npm/bin/cli.js`, `mcp_server/server.py`.
3. retrieval/memory/indexing 확인: `tests/test_memory_baseline.py`, `bench/test_bench_memory.py`.
4. test/eval 파일로 동작 검증: `tests/_vulture_whitelist.py`, `tests/conftest.py`, `tests/test_backwards_compat.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 knowledge rag Drop docs, search instantly from Claude Code — 12 MCP tools, 20 format parsers, hybrid search + reranking.. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, Dockerfile, README.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
