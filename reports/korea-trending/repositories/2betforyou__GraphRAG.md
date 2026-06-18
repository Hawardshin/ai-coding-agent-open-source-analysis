# 2betforyou/GraphRAG

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/2betforyou/GraphRAG |
| local path | sources/2betforyou__GraphRAG |
| HEAD | 4cbe4fb |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-06-08T05:26:30Z |
| trendScore / priorityScore | 70 / 134 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 293 | pjy/graphrag/README.md, pjy/README.md, README.md |
| LLM wiki / memory / graph | 62 | pjy/graphrag/README.md, README.md, pjy/inference_graphrag.py |
| Korean language / Korea domain | 4 | pjy/README.md, README.md, dataset/korquad.github.io/README.md |
| Spec / doc-driven workflow | 3 | fin/README.md, README.md |
| Infra / observability | 1 | README.md |
| Security / compliance | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | documentParsing, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, rag, security, security-compliance, spec-driven, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR |


## 구조 요약

| key | value |
| --- | --- |
| files | 419 |
| manifests | 6 |
| docs | 12 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | GraphRAG 기반 금융보안 규제 해석 프레임워크 |
| headings | GraphRAG 기반 금융보안 규제 해석 프레임워크 / 한국전자거래학회 2025 추계학술대회 / 핵심 아이디어 / Research Framing / 1. Goal: what problem are we tackling? / 2. Existing works: how do recent prior works tackle this problem? / 3. Main challenge: what do recent works fail to solve? / 4. Our method: how does it solve the challenge? / 5. Experimental results: how do we show that the method solves the challenge? / 주요 기능 |
| excerpt | GraphRAG 기반 금융보안 규제 해석 프레임워크 한국전자거래학회 2025 추계학술대회 주성용 · 박준영 · 오병훈 · 이재우 금융보안 법령 해석을 위한 Graph augmented Hybrid RAG 프레임워크입니다. 이 프로젝트는 법령, 시행령, 지침, MITRE ATT&CK 자료를 EXAONE 3.5 7.8B Instruct 기반 질의응답 파이프라인에 연결하고, 법령 조항 간 참조 그래프와 dense/sparse retrieval을 결합해 규제 질의의 근거 문맥 검색 품질을 높이는 것을 목표로 합니다. 단순히 문서를 벡터 DB에 넣고 검색하는 방식이 아니라, 한국 법령 문서의 특징인 조항 간 참조 , 교차 법령 참조 , 시행령/지침 연결 , 법령명 기반 라우팅 을 retrieval 단계에 반영합니다. 핵심 아이디어 금융보안 규제 질의는 특정 조항 하나만으로 답하기 어려운 경우가 많습니다. 예를 들어 "개인정보 처리 제한", "전자금융거래 사고 책임", "정보통신망 보호조치" 같은 질문은 원 조항, 예외 조항, 시행령, 관련 지침이 함께 검색되어야 합니다. 이 프로젝트는 다음 방식으로 RAG의 검색 병목을 줄입니다. 문제 접근 방식 벡터 검색만으로 정확한 조항을 놓침 E5 dense retrieval과 BM25 sparse retrieval 결합 법령 문맥이 조항 단위로 분산됨 법령 조항을 노드로 만들고 참조 관계를 엣지로 구성 |


## 주요 파일

### Manifests

- pjy/graphrag/README.md
- fin/README.md
- pjy/README.md
- README.md
- dataset/korquad.github.io/README.md
- fin/requirements.txt


### Spec / Docs / Prompt Artifacts

- fin/requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| dataset | 172 |
| fin | 129 |
| pjy | 116 |
| .gitignore | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .txt | 164 |
| .csv | 88 |
| .jsonl | 77 |
| .py | 71 |
| .md | 12 |
| .json | 4 |
| [no-ext] | 2 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
