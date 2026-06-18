# benmaster82/Kwipu 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Ask questions across your Markdown notes using a fully local Graph RAG engine. Built for Obsidian vaults, works with any folder of Markdown files. Extracts entity-relation triples from wikilinks & YAML frontmatter, retrieves answers via hybrid search (vector + BM25 + temporal). Multilingual. No cloud. Runs on Ollama.

## 요약

- 조사 단위: `sources/benmaster82__Kwipu` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 19 files, 3 directories, depth score 46, key references 2개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=kwipu_mcp_server.py이고, 의존성 단서는 mcp, llama-index, ollama, llama, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 2개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | benmaster82/Kwipu |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 248 |
| Forks | 33 |
| License | MIT |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/benmaster82__Kwipu](../../../../sources/benmaster82__Kwipu) |
| 기존 보고서 | [reports/llm-wiki/repositories/benmaster82__Kwipu.md](../../../llm-wiki/repositories/benmaster82__Kwipu.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 19 / 3 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | img, knowledge_base |
| 상위 확장자 | .md: 11, .py: 3, .png: 2, (none): 2, .txt: 1 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| img | top-level component | 1 |
| knowledge_base | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
| agentFrameworks | llama-index |
| vectorStores | 없음 |
| modelRuntime | ollama, llama |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [kwipu_mcp_server.py](../../../../sources/benmaster82__Kwipu/kwipu_mcp_server.py) | mcp signal |
| config | [requirements.txt](../../../../sources/benmaster82__Kwipu/requirements.txt) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 1 | [kwipu_mcp_server.py](../../../../sources/benmaster82__Kwipu/kwipu_mcp_server.py) |
| retrieval | 9 | [geode_graph.py](../../../../sources/benmaster82__Kwipu/geode_graph.py)<br>[knowledge_base/examples/Alice.md](../../../../sources/benmaster82__Kwipu/knowledge_base/examples/Alice.md)<br>[knowledge_base/examples/API Documentation.md](../../../../sources/benmaster82__Kwipu/knowledge_base/examples/API Documentation.md)<br>[knowledge_base/examples/Bob.md](../../../../sources/benmaster82__Kwipu/knowledge_base/examples/Bob.md)<br>[knowledge_base/examples/Charlie.md](../../../../sources/benmaster82__Kwipu/knowledge_base/examples/Charlie.md)<br>[knowledge_base/examples/Director Evans.md](../../../../sources/benmaster82__Kwipu/knowledge_base/examples/Director Evans.md)<br>[knowledge_base/examples/Meeting Notes - Jan 15.md](../../../../sources/benmaster82__Kwipu/knowledge_base/examples/Meeting Notes - Jan 15.md)<br>[knowledge_base/examples/Project Alpha.md](../../../../sources/benmaster82__Kwipu/knowledge_base/examples/Project Alpha.md) |
| spec | 1 | [requirements.txt](../../../../sources/benmaster82__Kwipu/requirements.txt) |
| eval | 0 | 명확하지 않음 |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 2 | [README.md](../../../../sources/benmaster82__Kwipu/README.md)<br>[README.zh-CN.md](../../../../sources/benmaster82__Kwipu/README.zh-CN.md) |
| config | 1 | [requirements.txt](../../../../sources/benmaster82__Kwipu/requirements.txt) |


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
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음; test/eval 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `kwipu_mcp_server.py`, `requirements.txt`.
2. retrieval/memory/indexing 확인: `geode_graph.py`, `knowledge_base/examples/Alice.md`, `knowledge_base/examples/API Documentation.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Ask questions across your Markdown notes using a fully local Graph RAG engine. Built for Obsidian vaults, works with any. 핵심 구조 신호는 Python, requirements.txt, README.md, LICENSE, llama-index, mcp이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
