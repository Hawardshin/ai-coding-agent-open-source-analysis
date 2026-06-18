# ssuksak/cheongyak-rag-mcp 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Korean housing subscription (청약) RAG MCP server - Real-time data from 청약홈 + PDF/HWP document Q&A

## 요약

- 조사 단위: `sources/ssuksak__cheongyak-rag-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 19 files, 4 directories, depth score 65, key references 10개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=src/rag_mcp/__init__.py, src/rag_mcp/chunker.py, src/rag_mcp/config.py이고, 의존성 단서는 openai, mcp, transformers, chroma, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | ssuksak/cheongyak-rag-mcp |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/ssuksak__cheongyak-rag-mcp](../../../../sources/ssuksak__cheongyak-rag-mcp) |
| 기존 보고서 | [reports/korea-trending/repositories/ssuksak__cheongyak-rag-mcp.md](../../../korea-trending/repositories/ssuksak__cheongyak-rag-mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 19 / 4 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | npm, src |
| 상위 확장자 | .py: 11, .js: 2, (none): 2, .example: 1, .json: 1, .md: 1, .toml: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 24 |
| npm | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | cheongyak-mcp | cheongyak-mcp |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | chroma |
| modelRuntime | transformers |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [src/rag_mcp/__init__.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/__init__.py) | retrieval signal |
| retrieval | [src/rag_mcp/chunker.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/chunker.py) | retrieval signal |
| retrieval | [src/rag_mcp/config.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/config.py) | retrieval signal |
| retrieval | [src/rag_mcp/data_api.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/data_api.py) | retrieval signal |
| entrypoints | [src/rag_mcp/server.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/server.py) | entrypoints signal |
| entrypoints | [npm/bin/cheongyak-mcp.js](../../../../sources/ssuksak__cheongyak-rag-mcp/npm/bin/cheongyak-mcp.js) | entrypoints signal |
| entrypoints | [npm/bin/postinstall.js](../../../../sources/ssuksak__cheongyak-rag-mcp/npm/bin/postinstall.js) | entrypoints signal |
| docs | [README.md](../../../../sources/ssuksak__cheongyak-rag-mcp/README.md) | docs signal |
| config | [pyproject.toml](../../../../sources/ssuksak__cheongyak-rag-mcp/pyproject.toml) | config signal |
| config | [npm/package.json](../../../../sources/ssuksak__cheongyak-rag-mcp/npm/package.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [src/rag_mcp/server.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/server.py)<br>[npm/bin/cheongyak-mcp.js](../../../../sources/ssuksak__cheongyak-rag-mcp/npm/bin/cheongyak-mcp.js)<br>[npm/bin/postinstall.js](../../../../sources/ssuksak__cheongyak-rag-mcp/npm/bin/postinstall.js) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 12 | [src/rag_mcp/__init__.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/__init__.py)<br>[src/rag_mcp/chunker.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/chunker.py)<br>[src/rag_mcp/config.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/config.py)<br>[src/rag_mcp/data_api.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/data_api.py)<br>[src/rag_mcp/indexer.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/indexer.py)<br>[src/rag_mcp/parser.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/parser.py)<br>[src/rag_mcp/rag.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/rag.py)<br>[src/rag_mcp/scraper.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/scraper.py) |
| retrieval | 11 | [src/rag_mcp/__init__.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/__init__.py)<br>[src/rag_mcp/chunker.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/chunker.py)<br>[src/rag_mcp/config.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/config.py)<br>[src/rag_mcp/data_api.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/data_api.py)<br>[src/rag_mcp/indexer.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/indexer.py)<br>[src/rag_mcp/parser.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/parser.py)<br>[src/rag_mcp/rag.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/rag.py)<br>[src/rag_mcp/scraper.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/scraper.py) |
| spec | 0 | 명확하지 않음 |
| eval | 0 | 명확하지 않음 |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/ssuksak__cheongyak-rag-mcp/README.md) |
| config | 2 | [pyproject.toml](../../../../sources/ssuksak__cheongyak-rag-mcp/pyproject.toml)<br>[npm/package.json](../../../../sources/ssuksak__cheongyak-rag-mcp/npm/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 0 | 명확하지 않음 |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음; test/eval 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/rag_mcp/__init__.py`, `src/rag_mcp/chunker.py`, `src/rag_mcp/config.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/rag_mcp/server.py`, `npm/bin/cheongyak-mcp.js`, `npm/bin/postinstall.js`.
3. retrieval/memory/indexing 확인: `src/rag_mcp/__init__.py`, `src/rag_mcp/chunker.py`, `src/rag_mcp/config.py`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Korean housing subscription 청약 RAG MCP server Real time data from 청약홈 + PDF/HWP document Q&A. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, openai, mcp이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
