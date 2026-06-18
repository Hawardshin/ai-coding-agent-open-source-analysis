# axoviq-ai/synthadoc 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Synthadoc: An open-source LLM knowledge compilation engine that turns raw documents into structured, local-first wikis. A transparent, human-readable alternative to traditional RAG, which can be self-managed and self-improved without the use of any tools.

## 요약

- 조사 단위: `sources/axoviq-ai__synthadoc` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 378 files, 66 directories, depth score 115, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=wiki/log.md, web-ui/index.html, web-ui/src/index.css이고, 의존성 단서는 openai, anthropic, mcp, fastapi, pydantic, typer, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | axoviq-ai/synthadoc |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 465 |
| Forks | 42 |
| License | AGPL-3.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/axoviq-ai__synthadoc](../../../../sources/axoviq-ai__synthadoc) |
| 기존 보고서 | [reports/global-trending/repositories/axoviq-ai__synthadoc.md](../../../global-trending/repositories/axoviq-ai__synthadoc.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 378 / 66 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, docs, hooks, obsidian-plugin, scripts, synthadoc, tests, web-ui, wiki |
| 상위 확장자 | .py: 196, .md: 59, .png: 43, .txt: 21, .json: 13, .ts: 13, .tsx: 8, (none): 5, .svg: 4, .pdf: 3, .css: 2, .js: 2 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 76 |
| docs | documentation surface | 44 |
| .github | ci surface | 1 |
| hooks | top-level component | 1 |
| obsidian-plugin | top-level component | 1 |
| scripts | top-level component | 1 |
| synthadoc | documentation surface | 1 |
| web-ui | source boundary | 1 |
| wiki | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | synthadoc | synthadoc |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | fastapi |
| developerSurface | typer |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [wiki/log.md](../../../../sources/axoviq-ai__synthadoc/wiki/log.md) | retrieval signal |
| retrieval | [web-ui/index.html](../../../../sources/axoviq-ai__synthadoc/web-ui/index.html) | retrieval signal |
| retrieval | [web-ui/src/index.css](../../../../sources/axoviq-ai__synthadoc/web-ui/src/index.css) | retrieval signal |
| retrieval | [tests/test_ingest_lifecycle.py](../../../../sources/axoviq-ai__synthadoc/tests/test_ingest_lifecycle.py) | retrieval signal |
| entrypoints | [web-ui/src/App.css](../../../../sources/axoviq-ai__synthadoc/web-ui/src/App.css) | entrypoints signal |
| entrypoints | [web-ui/src/App.tsx](../../../../sources/axoviq-ai__synthadoc/web-ui/src/App.tsx) | entrypoints signal |
| entrypoints | [web-ui/src/main.tsx](../../../../sources/axoviq-ai__synthadoc/web-ui/src/main.tsx) | entrypoints signal |
| docs | [README.md](../../../../sources/axoviq-ai__synthadoc/README.md) | docs signal |
| docs | [web-ui/README.md](../../../../sources/axoviq-ai__synthadoc/web-ui/README.md) | docs signal |
| docs | [synthadoc/demos/history-of-computing/README.md](../../../../sources/axoviq-ai__synthadoc/synthadoc/demos/history-of-computing/README.md) | docs signal |
| docs | [synthadoc/demos/ai-research/README.md](../../../../sources/axoviq-ai__synthadoc/synthadoc/demos/ai-research/README.md) | docs signal |
| eval | [tests/__init__.py](../../../../sources/axoviq-ai__synthadoc/tests/__init__.py) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 18 | [web-ui/src/App.css](../../../../sources/axoviq-ai__synthadoc/web-ui/src/App.css)<br>[web-ui/src/App.tsx](../../../../sources/axoviq-ai__synthadoc/web-ui/src/App.tsx)<br>[web-ui/src/index.css](../../../../sources/axoviq-ai__synthadoc/web-ui/src/index.css)<br>[web-ui/src/main.tsx](../../../../sources/axoviq-ai__synthadoc/web-ui/src/main.tsx)<br>[synthadoc/__main__.py](../../../../sources/axoviq-ai__synthadoc/synthadoc/__main__.py)<br>[synthadoc/skills/youtube/scripts/main.py](../../../../sources/axoviq-ai__synthadoc/synthadoc/skills/youtube/scripts/main.py)<br>[synthadoc/skills/xlsx/scripts/main.py](../../../../sources/axoviq-ai__synthadoc/synthadoc/skills/xlsx/scripts/main.py)<br>[synthadoc/skills/web_search/scripts/main.py](../../../../sources/axoviq-ai__synthadoc/synthadoc/skills/web_search/scripts/main.py) |
| agentRuntime | 78 | [tests/skills/__init__.py](../../../../sources/axoviq-ai__synthadoc/tests/skills/__init__.py)<br>[tests/skills/test_image_skill.py](../../../../sources/axoviq-ai__synthadoc/tests/skills/test_image_skill.py)<br>[tests/skills/test_pdf_skill.py](../../../../sources/axoviq-ai__synthadoc/tests/skills/test_pdf_skill.py)<br>[tests/skills/test_registry.py](../../../../sources/axoviq-ai__synthadoc/tests/skills/test_registry.py)<br>[tests/skills/test_skill_agent.py](../../../../sources/axoviq-ai__synthadoc/tests/skills/test_skill_agent.py)<br>[tests/skills/test_skills.py](../../../../sources/axoviq-ai__synthadoc/tests/skills/test_skills.py)<br>[tests/skills/test_web_search.py](../../../../sources/axoviq-ai__synthadoc/tests/skills/test_web_search.py)<br>[tests/skills/test_youtube_skill.py](../../../../sources/axoviq-ai__synthadoc/tests/skills/test_youtube_skill.py) |
| mcp | 2 | [tests/integration/test_mcp_server.py](../../../../sources/axoviq-ai__synthadoc/tests/integration/test_mcp_server.py)<br>[synthadoc/integration/mcp_server.py](../../../../sources/axoviq-ai__synthadoc/synthadoc/integration/mcp_server.py) |
| retrieval | 52 | [wiki/log.md](../../../../sources/axoviq-ai__synthadoc/wiki/log.md)<br>[web-ui/index.html](../../../../sources/axoviq-ai__synthadoc/web-ui/index.html)<br>[web-ui/src/index.css](../../../../sources/axoviq-ai__synthadoc/web-ui/src/index.css)<br>[tests/test_ingest_lifecycle.py](../../../../sources/axoviq-ai__synthadoc/tests/test_ingest_lifecycle.py)<br>[tests/storage/test_wiki.py](../../../../sources/axoviq-ai__synthadoc/tests/storage/test_wiki.py)<br>[tests/cli/test_wiki_resolution.py](../../../../sources/axoviq-ai__synthadoc/tests/cli/test_wiki_resolution.py)<br>[tests/agents/test_ingest_agent.py](../../../../sources/axoviq-ai__synthadoc/tests/agents/test_ingest_agent.py)<br>[tests/agents/test_ingest_web_search_decomposition.py](../../../../sources/axoviq-ai__synthadoc/tests/agents/test_ingest_web_search_decomposition.py) |
| spec | 6 | [synthadoc/demos/history-of-computing/wiki/von-neumann-architecture.md](../../../../sources/axoviq-ai__synthadoc/synthadoc/demos/history-of-computing/wiki/von-neumann-architecture.md)<br>[synthadoc/demos/ai-research/wiki/transformer-architecture.md](../../../../sources/axoviq-ai__synthadoc/synthadoc/demos/ai-research/wiki/transformer-architecture.md)<br>[synthadoc/demos/ai-research/raw_sources/neural-network-architecture.png](../../../../sources/axoviq-ai__synthadoc/synthadoc/demos/ai-research/raw_sources/neural-network-architecture.png)<br>[synthadoc/demos/ai-research/raw_sources/public-domain/transformer-architecture.txt](../../../../sources/axoviq-ai__synthadoc/synthadoc/demos/ai-research/raw_sources/public-domain/transformer-architecture.txt)<br>[docs/design.md](../../../../sources/axoviq-ai__synthadoc/docs/design.md)<br>[docs/png/architecture.png](../../../../sources/axoviq-ai__synthadoc/docs/png/architecture.png) |
| eval | 102 | [tests/__init__.py](../../../../sources/axoviq-ai__synthadoc/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/axoviq-ai__synthadoc/tests/conftest.py)<br>[tests/test_audit_lifecycle.py](../../../../sources/axoviq-ai__synthadoc/tests/test_audit_lifecycle.py)<br>[tests/test_config.py](../../../../sources/axoviq-ai__synthadoc/tests/test_config.py)<br>[tests/test_coverage_boost.py](../../../../sources/axoviq-ai__synthadoc/tests/test_coverage_boost.py)<br>[tests/test_demo_sync.py](../../../../sources/axoviq-ai__synthadoc/tests/test_demo_sync.py)<br>[tests/test_errors.py](../../../../sources/axoviq-ai__synthadoc/tests/test_errors.py)<br>[tests/test_export_agent.py](../../../../sources/axoviq-ai__synthadoc/tests/test_export_agent.py) |
| security | 14 | [tests/test_audit_lifecycle.py](../../../../sources/axoviq-ai__synthadoc/tests/test_audit_lifecycle.py)<br>[tests/storage/test_audit.py](../../../../sources/axoviq-ai__synthadoc/tests/storage/test_audit.py)<br>[tests/security/__init__.py](../../../../sources/axoviq-ai__synthadoc/tests/security/__init__.py)<br>[tests/security/test_security.py](../../../../sources/axoviq-ai__synthadoc/tests/security/test_security.py)<br>[tests/core/test_cost_guard.py](../../../../sources/axoviq-ai__synthadoc/tests/core/test_cost_guard.py)<br>[tests/cli/test_audit_cli.py](../../../../sources/axoviq-ai__synthadoc/tests/cli/test_audit_cli.py)<br>[synthadoc/core/cost_guard.py](../../../../sources/axoviq-ai__synthadoc/synthadoc/core/cost_guard.py)<br>[synthadoc/cli/audit.py](../../../../sources/axoviq-ai__synthadoc/synthadoc/cli/audit.py) |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/axoviq-ai__synthadoc/.github/workflows/ci.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 2 | [synthadoc/demos/history-of-computing/AGENTS.md](../../../../sources/axoviq-ai__synthadoc/synthadoc/demos/history-of-computing/AGENTS.md)<br>[synthadoc/demos/ai-research/AGENTS.md](../../../../sources/axoviq-ai__synthadoc/synthadoc/demos/ai-research/AGENTS.md) |
| docs | 46 | [README.md](../../../../sources/axoviq-ai__synthadoc/README.md)<br>[web-ui/README.md](../../../../sources/axoviq-ai__synthadoc/web-ui/README.md)<br>[synthadoc/demos/history-of-computing/README.md](../../../../sources/axoviq-ai__synthadoc/synthadoc/demos/history-of-computing/README.md)<br>[synthadoc/demos/ai-research/README.md](../../../../sources/axoviq-ai__synthadoc/synthadoc/demos/ai-research/README.md)<br>[hooks/README.md](../../../../sources/axoviq-ai__synthadoc/hooks/README.md)<br>[docs/badges.json](../../../../sources/axoviq-ai__synthadoc/docs/badges.json)<br>[docs/design.md](../../../../sources/axoviq-ai__synthadoc/docs/design.md)<br>[docs/user-quick-start-guide.md](../../../../sources/axoviq-ai__synthadoc/docs/user-quick-start-guide.md) |
| config | 5 | [pyproject.toml](../../../../sources/axoviq-ai__synthadoc/pyproject.toml)<br>[web-ui/package.json](../../../../sources/axoviq-ai__synthadoc/web-ui/package.json)<br>[web-ui/tsconfig.json](../../../../sources/axoviq-ai__synthadoc/web-ui/tsconfig.json)<br>[obsidian-plugin/package.json](../../../../sources/axoviq-ai__synthadoc/obsidian-plugin/package.json)<br>[obsidian-plugin/tsconfig.json](../../../../sources/axoviq-ai__synthadoc/obsidian-plugin/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 102 | [tests/__init__.py](../../../../sources/axoviq-ai__synthadoc/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/axoviq-ai__synthadoc/tests/conftest.py)<br>[tests/test_audit_lifecycle.py](../../../../sources/axoviq-ai__synthadoc/tests/test_audit_lifecycle.py)<br>[tests/test_config.py](../../../../sources/axoviq-ai__synthadoc/tests/test_config.py)<br>[tests/test_coverage_boost.py](../../../../sources/axoviq-ai__synthadoc/tests/test_coverage_boost.py)<br>[tests/test_demo_sync.py](../../../../sources/axoviq-ai__synthadoc/tests/test_demo_sync.py) |
| CI workflow | 1 | [.github/workflows/ci.yml](../../../../sources/axoviq-ai__synthadoc/.github/workflows/ci.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 14 | [tests/test_audit_lifecycle.py](../../../../sources/axoviq-ai__synthadoc/tests/test_audit_lifecycle.py)<br>[tests/storage/test_audit.py](../../../../sources/axoviq-ai__synthadoc/tests/storage/test_audit.py)<br>[tests/security/__init__.py](../../../../sources/axoviq-ai__synthadoc/tests/security/__init__.py)<br>[tests/security/test_security.py](../../../../sources/axoviq-ai__synthadoc/tests/security/test_security.py)<br>[tests/core/test_cost_guard.py](../../../../sources/axoviq-ai__synthadoc/tests/core/test_cost_guard.py)<br>[tests/cli/test_audit_cli.py](../../../../sources/axoviq-ai__synthadoc/tests/cli/test_audit_cli.py) |
| 에이전트 지시문 | 2 | [synthadoc/demos/history-of-computing/AGENTS.md](../../../../sources/axoviq-ai__synthadoc/synthadoc/demos/history-of-computing/AGENTS.md)<br>[synthadoc/demos/ai-research/AGENTS.md](../../../../sources/axoviq-ai__synthadoc/synthadoc/demos/ai-research/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `wiki/log.md`, `web-ui/index.html`, `web-ui/src/index.css`.
2. entrypoint를 따라 실행 흐름 확인: `web-ui/src/App.css`, `web-ui/src/App.tsx`, `web-ui/src/index.css`.
3. agent/tool runtime 매핑: `tests/skills/__init__.py`, `tests/skills/test_image_skill.py`, `tests/skills/test_pdf_skill.py`.
4. retrieval/memory/indexing 확인: `wiki/log.md`, `web-ui/index.html`, `web-ui/src/index.css`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/conftest.py`, `tests/test_audit_lifecycle.py`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Synthadoc An open source LLM knowledge compilation engine that turns raw documents into structured, local first wikis. A. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, openai, anthropic이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
