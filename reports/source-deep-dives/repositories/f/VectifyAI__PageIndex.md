# VectifyAI/PageIndex 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

📑 PageIndex: Document Index for Vectorless, Reasoning-based RAG

## 요약

- 조사 단위: `sources/VectifyAI__PageIndex` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 53 files, 14 directories, depth score 65, key references 11개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=pageindex/page_index_md.py, pageindex/page_index.py, examples/agentic_vectorless_rag_demo.py이고, 의존성 단서는 openai, 검증/운영 단서는 CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | VectifyAI/PageIndex |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 33160 |
| Forks | 2886 |
| License | MIT |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/VectifyAI__PageIndex](../../../../sources/VectifyAI__PageIndex) |
| 기존 보고서 | [reports/llm-wiki/repositories/VectifyAI__PageIndex.md](../../../llm-wiki/repositories/VectifyAI__PageIndex.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 53 / 14 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .claude, .github, cookbook, examples, pageindex |
| 상위 확장자 | .json: 10, .pdf: 9, .md: 8, .py: 8, .yml: 7, .ipynb: 4, (none): 3, .js: 1, .sh: 1, .txt: 1, .yaml: 1 |
| 소스 패턴 | retrieval/vector path, spec/docs-driven |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| examples/tutorials | examples workspace | 2 |
| .github | ci surface | 1 |
| cookbook | top-level component | 1 |
| examples | top-level component | 1 |
| examples/agentic_vectorless_rag_demo.py | examples workspace | 1 |
| pageindex | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
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
| retrieval | [pageindex/page_index_md.py](../../../../sources/VectifyAI__PageIndex/pageindex/page_index_md.py) | retrieval signal |
| retrieval | [pageindex/page_index.py](../../../../sources/VectifyAI__PageIndex/pageindex/page_index.py) | retrieval signal |
| retrieval | [examples/agentic_vectorless_rag_demo.py](../../../../sources/VectifyAI__PageIndex/examples/agentic_vectorless_rag_demo.py) | retrieval signal |
| retrieval | [cookbook/agentic_retrieval.ipynb](../../../../sources/VectifyAI__PageIndex/cookbook/agentic_retrieval.ipynb) | retrieval signal |
| docs | [README.md](../../../../sources/VectifyAI__PageIndex/README.md) | docs signal |
| docs | [examples/tutorials/tree-search/README.md](../../../../sources/VectifyAI__PageIndex/examples/tutorials/tree-search/README.md) | docs signal |
| docs | [examples/tutorials/doc-search/README.md](../../../../sources/VectifyAI__PageIndex/examples/tutorials/doc-search/README.md) | docs signal |
| docs | [cookbook/README.md](../../../../sources/VectifyAI__PageIndex/cookbook/README.md) | docs signal |
| config | [requirements.txt](../../../../sources/VectifyAI__PageIndex/requirements.txt) | config signal |
| ci | [.github/workflows/autoclose-labeled-issues.yml](../../../../sources/VectifyAI__PageIndex/.github/workflows/autoclose-labeled-issues.yml) | ci support |
| ci | [.github/workflows/backfill-dedupe.yml](../../../../sources/VectifyAI__PageIndex/.github/workflows/backfill-dedupe.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 6 | [pageindex/page_index_md.py](../../../../sources/VectifyAI__PageIndex/pageindex/page_index_md.py)<br>[pageindex/page_index.py](../../../../sources/VectifyAI__PageIndex/pageindex/page_index.py)<br>[examples/agentic_vectorless_rag_demo.py](../../../../sources/VectifyAI__PageIndex/examples/agentic_vectorless_rag_demo.py)<br>[cookbook/agentic_retrieval.ipynb](../../../../sources/VectifyAI__PageIndex/cookbook/agentic_retrieval.ipynb)<br>[cookbook/pageindex_RAG_simple.ipynb](../../../../sources/VectifyAI__PageIndex/cookbook/pageindex_RAG_simple.ipynb)<br>[cookbook/vision_RAG_pageindex.ipynb](../../../../sources/VectifyAI__PageIndex/cookbook/vision_RAG_pageindex.ipynb) |
| spec | 1 | [requirements.txt](../../../../sources/VectifyAI__PageIndex/requirements.txt) |
| eval | 0 | 명확하지 않음 |
| security | 0 | 명확하지 않음 |
| ci | 6 | [.github/workflows/autoclose-labeled-issues.yml](../../../../sources/VectifyAI__PageIndex/.github/workflows/autoclose-labeled-issues.yml)<br>[.github/workflows/backfill-dedupe.yml](../../../../sources/VectifyAI__PageIndex/.github/workflows/backfill-dedupe.yml)<br>[.github/workflows/codeql.yml](../../../../sources/VectifyAI__PageIndex/.github/workflows/codeql.yml)<br>[.github/workflows/dependency-review.yml](../../../../sources/VectifyAI__PageIndex/.github/workflows/dependency-review.yml)<br>[.github/workflows/issue-dedupe.yml](../../../../sources/VectifyAI__PageIndex/.github/workflows/issue-dedupe.yml)<br>[.github/workflows/remove-autoclose-label.yml](../../../../sources/VectifyAI__PageIndex/.github/workflows/remove-autoclose-label.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 4 | [README.md](../../../../sources/VectifyAI__PageIndex/README.md)<br>[examples/tutorials/tree-search/README.md](../../../../sources/VectifyAI__PageIndex/examples/tutorials/tree-search/README.md)<br>[examples/tutorials/doc-search/README.md](../../../../sources/VectifyAI__PageIndex/examples/tutorials/doc-search/README.md)<br>[cookbook/README.md](../../../../sources/VectifyAI__PageIndex/cookbook/README.md) |
| config | 1 | [requirements.txt](../../../../sources/VectifyAI__PageIndex/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 0 | 명확하지 않음 |
| CI workflow | 6 | [.github/workflows/autoclose-labeled-issues.yml](../../../../sources/VectifyAI__PageIndex/.github/workflows/autoclose-labeled-issues.yml)<br>[.github/workflows/backfill-dedupe.yml](../../../../sources/VectifyAI__PageIndex/.github/workflows/backfill-dedupe.yml)<br>[.github/workflows/codeql.yml](../../../../sources/VectifyAI__PageIndex/.github/workflows/codeql.yml)<br>[.github/workflows/dependency-review.yml](../../../../sources/VectifyAI__PageIndex/.github/workflows/dependency-review.yml)<br>[.github/workflows/issue-dedupe.yml](../../../../sources/VectifyAI__PageIndex/.github/workflows/issue-dedupe.yml)<br>[.github/workflows/remove-autoclose-label.yml](../../../../sources/VectifyAI__PageIndex/.github/workflows/remove-autoclose-label.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음; test/eval 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `pageindex/page_index_md.py`, `pageindex/page_index.py`, `examples/agentic_vectorless_rag_demo.py`.
2. retrieval/memory/indexing 확인: `pageindex/page_index_md.py`, `pageindex/page_index.py`, `examples/agentic_vectorless_rag_demo.py`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 📑 PageIndex Document Index for Vectorless, Reasoning based RAG. 핵심 구조 신호는 Python, requirements.txt, README.md, LICENSE, openai, ci이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
