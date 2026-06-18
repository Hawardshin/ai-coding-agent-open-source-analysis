# utensils/mcp-nixos 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

MCP-NixOS - Model Context Protocol Server for NixOS resources

## 요약

- 조사 단위: `sources/utensils__mcp-nixos` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 95 files, 18 directories, depth score 95, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=website/index.md, website/.vitepress/theme/index.ts, mcp_nixos/sources/wiki.py이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | utensils/mcp-nixos |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Python |
| Stars | 697 |
| Forks | 37 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/utensils__mcp-nixos](../../../../sources/utensils__mcp-nixos) |
| 기존 보고서 | [reports/global-trending/repositories/utensils__mcp-nixos.md](../../../global-trending/repositories/utensils__mcp-nixos.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 95 / 18 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .claude, .github, .pi, mcp_nixos, nix, tests, website |
| 상위 확장자 | .py: 28, .md: 15, .png: 11, .json: 7, .yml: 7, (none): 5, .nix: 3, .ts: 3, .vue: 3, .toml: 2, .css: 1, .ico: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 10 |
| .github | ci surface | 1 |
| mcp_nixos | top-level component | 1 |
| nix | top-level component | 1 |
| website | documentation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | mcp-nixos | mcp-nixos |


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
| retrieval | [website/index.md](../../../../sources/utensils__mcp-nixos/website/index.md) | retrieval signal |
| retrieval | [website/.vitepress/theme/index.ts](../../../../sources/utensils__mcp-nixos/website/.vitepress/theme/index.ts) | retrieval signal |
| retrieval | [mcp_nixos/sources/wiki.py](../../../../sources/utensils__mcp-nixos/mcp_nixos/sources/wiki.py) | retrieval signal |
| entrypoints | [mcp_nixos/server.py](../../../../sources/utensils__mcp-nixos/mcp_nixos/server.py) | entrypoints signal |
| docs | [README.md](../../../../sources/utensils__mcp-nixos/README.md) | docs signal |
| docs | [website/.gitignore](../../../../sources/utensils__mcp-nixos/website/.gitignore) | docs signal |
| docs | [website/about.md](../../../../sources/utensils__mcp-nixos/website/about.md) | docs signal |
| eval | [tests/__init__.py](../../../../sources/utensils__mcp-nixos/tests/__init__.py) | eval signal |
| eval | [tests/conftest.py](../../../../sources/utensils__mcp-nixos/tests/conftest.py) | eval signal |
| eval | [tests/test_env_file_safety.py](../../../../sources/utensils__mcp-nixos/tests/test_env_file_safety.py) | eval signal |
| eval | [tests/test_flake_inputs.py](../../../../sources/utensils__mcp-nixos/tests/test_flake_inputs.py) | eval signal |
| config | [pyproject.toml](../../../../sources/utensils__mcp-nixos/pyproject.toml) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [mcp_nixos/server.py](../../../../sources/utensils__mcp-nixos/mcp_nixos/server.py) |
| agentRuntime | 3 | [.claude/agents/mcp-server-architect.md](../../../../sources/utensils__mcp-nixos/.claude/agents/mcp-server-architect.md)<br>[.claude/agents/nix-expert.md](../../../../sources/utensils__mcp-nixos/.claude/agents/nix-expert.md)<br>[.claude/agents/python-expert.md](../../../../sources/utensils__mcp-nixos/.claude/agents/python-expert.md) |
| mcp | 23 | [.mcp.json](../../../../sources/utensils__mcp-nixos/.mcp.json)<br>[website/public/images/mcp-nixos.png](../../../../sources/utensils__mcp-nixos/website/public/images/mcp-nixos.png)<br>[mcp_nixos/__init__.py](../../../../sources/utensils__mcp-nixos/mcp_nixos/__init__.py)<br>[mcp_nixos/caches.py](../../../../sources/utensils__mcp-nixos/mcp_nixos/caches.py)<br>[mcp_nixos/config.py](../../../../sources/utensils__mcp-nixos/mcp_nixos/config.py)<br>[mcp_nixos/server.py](../../../../sources/utensils__mcp-nixos/mcp_nixos/server.py)<br>[mcp_nixos/utils.py](../../../../sources/utensils__mcp-nixos/mcp_nixos/utils.py)<br>[mcp_nixos/sources/__init__.py](../../../../sources/utensils__mcp-nixos/mcp_nixos/sources/__init__.py) |
| retrieval | 3 | [website/index.md](../../../../sources/utensils__mcp-nixos/website/index.md)<br>[website/.vitepress/theme/index.ts](../../../../sources/utensils__mcp-nixos/website/.vitepress/theme/index.ts)<br>[mcp_nixos/sources/wiki.py](../../../../sources/utensils__mcp-nixos/mcp_nixos/sources/wiki.py) |
| spec | 0 | 명확하지 않음 |
| eval | 10 | [tests/__init__.py](../../../../sources/utensils__mcp-nixos/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/utensils__mcp-nixos/tests/conftest.py)<br>[tests/test_env_file_safety.py](../../../../sources/utensils__mcp-nixos/tests/test_env_file_safety.py)<br>[tests/test_flake_inputs.py](../../../../sources/utensils__mcp-nixos/tests/test_flake_inputs.py)<br>[tests/test_integration.py](../../../../sources/utensils__mcp-nixos/tests/test_integration.py)<br>[tests/test_main.py](../../../../sources/utensils__mcp-nixos/tests/test_main.py)<br>[tests/test_server.py](../../../../sources/utensils__mcp-nixos/tests/test_server.py)<br>[tests/test_store.py](../../../../sources/utensils__mcp-nixos/tests/test_store.py) |
| security | 0 | 명확하지 않음 |
| ci | 6 | [.github/workflows/ci.yml](../../../../sources/utensils__mcp-nixos/.github/workflows/ci.yml)<br>[.github/workflows/claude-code-review.yml](../../../../sources/utensils__mcp-nixos/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/utensils__mcp-nixos/.github/workflows/claude.yml)<br>[.github/workflows/deploy-flakehub.yml](../../../../sources/utensils__mcp-nixos/.github/workflows/deploy-flakehub.yml)<br>[.github/workflows/deploy-website.yml](../../../../sources/utensils__mcp-nixos/.github/workflows/deploy-website.yml)<br>[.github/workflows/publish.yml](../../../../sources/utensils__mcp-nixos/.github/workflows/publish.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 2 | [CLAUDE.md](../../../../sources/utensils__mcp-nixos/CLAUDE.md)<br>[.github/copilot-instructions.md](../../../../sources/utensils__mcp-nixos/.github/copilot-instructions.md) |
| docs | 37 | [README.md](../../../../sources/utensils__mcp-nixos/README.md)<br>[website/.gitignore](../../../../sources/utensils__mcp-nixos/website/.gitignore)<br>[website/about.md](../../../../sources/utensils__mcp-nixos/website/about.md)<br>[website/index.md](../../../../sources/utensils__mcp-nixos/website/index.md)<br>[website/netlify.toml](../../../../sources/utensils__mcp-nixos/website/netlify.toml)<br>[website/package-lock.json](../../../../sources/utensils__mcp-nixos/website/package-lock.json)<br>[website/package.json](../../../../sources/utensils__mcp-nixos/website/package.json)<br>[website/README.md](../../../../sources/utensils__mcp-nixos/website/README.md) |
| config | 5 | [pyproject.toml](../../../../sources/utensils__mcp-nixos/pyproject.toml)<br>[website/package.json](../../../../sources/utensils__mcp-nixos/website/package.json)<br>[website/tsconfig.json](../../../../sources/utensils__mcp-nixos/website/tsconfig.json)<br>[.pi/package.json](../../../../sources/utensils__mcp-nixos/.pi/package.json)<br>[.pi/tsconfig.json](../../../../sources/utensils__mcp-nixos/.pi/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 10 | [tests/__init__.py](../../../../sources/utensils__mcp-nixos/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/utensils__mcp-nixos/tests/conftest.py)<br>[tests/test_env_file_safety.py](../../../../sources/utensils__mcp-nixos/tests/test_env_file_safety.py)<br>[tests/test_flake_inputs.py](../../../../sources/utensils__mcp-nixos/tests/test_flake_inputs.py)<br>[tests/test_integration.py](../../../../sources/utensils__mcp-nixos/tests/test_integration.py)<br>[tests/test_main.py](../../../../sources/utensils__mcp-nixos/tests/test_main.py) |
| CI workflow | 6 | [.github/workflows/ci.yml](../../../../sources/utensils__mcp-nixos/.github/workflows/ci.yml)<br>[.github/workflows/claude-code-review.yml](../../../../sources/utensils__mcp-nixos/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/utensils__mcp-nixos/.github/workflows/claude.yml)<br>[.github/workflows/deploy-flakehub.yml](../../../../sources/utensils__mcp-nixos/.github/workflows/deploy-flakehub.yml)<br>[.github/workflows/deploy-website.yml](../../../../sources/utensils__mcp-nixos/.github/workflows/deploy-website.yml)<br>[.github/workflows/publish.yml](../../../../sources/utensils__mcp-nixos/.github/workflows/publish.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 2 | [CLAUDE.md](../../../../sources/utensils__mcp-nixos/CLAUDE.md)<br>[.github/copilot-instructions.md](../../../../sources/utensils__mcp-nixos/.github/copilot-instructions.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `website/index.md`, `website/.vitepress/theme/index.ts`, `mcp_nixos/sources/wiki.py`.
2. entrypoint를 따라 실행 흐름 확인: `mcp_nixos/server.py`.
3. agent/tool runtime 매핑: `.claude/agents/mcp-server-architect.md`, `.claude/agents/nix-expert.md`, `.claude/agents/python-expert.md`.
4. retrieval/memory/indexing 확인: `website/index.md`, `website/.vitepress/theme/index.ts`, `mcp_nixos/sources/wiki.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/conftest.py`, `tests/test_env_file_safety.py`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 MCP NixOS Model Context Protocol Server for NixOS resources. 핵심 구조 신호는 Python, pyproject.toml, README.md, CLAUDE.md, LICENSE, mcp이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
