# Marker-Inc-Korea/AutoRAG

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Marker-Inc-Korea/AutoRAG |
| local path | sources/Marker-Inc-Korea__AutoRAG |
| HEAD | e0a717b |
| stars/forks | 4832 / 403 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2026-06-17T14:05:37Z |
| trendScore / priorityScore | 180 / 418 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 500 | README.md, .github/copilot-instructions.md, docs/source/api_spec/autorag.data.chunk.rst |
| Local LLM / on-device inference | 116 | docs/source/api_spec/autorag.nodes.generator.rst, pyproject.toml, docs/source/integration/llm/llm.md |
| Korean language / Korea domain | 105 | README.md, .github/copilot-instructions.md, docs/source/test_your_rag.md |
| LLM wiki / memory / graph | 24 | docs/source/evaluate_metrics/retrieval.md, docs/source/integration/vectordb/chroma.md, docs/source/integration/vectordb/couchbase.md |
| Security / compliance | 15 | docs/source/roadmap/modular_rag.md |
| Spec / doc-driven workflow | 12 | .github/copilot-instructions.md, docs/source/evaluate_metrics/generation.md, docs/source/integration/vectordb/vectordb.md |
| AI agent / tool use | 3 | docs/source/roadmap/modular_rag.md, docs/source/nodes/generator/generator.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, data-ml, documentParsing, evalObservability, graphMemory, korea-signal, llm-wiki-memory, llmFramework, local-llm, localRuntime, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 641 |
| manifests | 6 |
| docs | 150 |
| tests | 263 |
| ci/ops | 3 |
| spec artifacts | 2 |
| agent instruction files | 1 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | AutoRAG |
| headings | AutoRAG / YouTube Tutorial / Use AutoRAG in HuggingFace Space 🚀 / Colab Tutorial / Index / Quick Install / Data Creation / 📌 Supporting Data Creation Modules / Quick Start / 1. Parsing |
| excerpt | AutoRAG RAG AutoML tool for automatically finding an optimal RAG pipeline for your data. ! Thumbnail https //github.com/user attachments/assets/6bab243d a4b3 431a 8ac0 fe17336ab4de ! PyPI Downloads https //img.shields.io/pypi/dm/AutoRAG ! LinkedIn https //img.shields.io/badge/LinkedIn Connect blue?style=flat square&logo=linkedin https //www.linkedin.com/company/104375108/admin/dashboard/ ! X formerly Twitter Follow https //img.shields.io/twitter/follow/AutoRAG HQ ! Hugging Face https //img.shields.io/badge/Hugging%20Face Follow orange?style=flat square&logo=huggingface https //huggingface.co/AutoRAG <a href="https //trendshift.io/repositories/7832" target=" blank" <img src="https //trendshif |


## 주요 파일

### Manifests

- sample_dataset/README.md
- README.md
- tests/resources/README.md
- docs/Makefile
- docs/requirements.txt
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- docs/requirements.txt
- .github/copilot-instructions.md


### Agent Instruction Files

- .github/copilot-instructions.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| tests | 263 |
| autorag | 180 |
| docs | 140 |
| sample_config | 37 |
| .github | 8 |
| sample_dataset | 5 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |
| CNAME | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |
| pyproject.toml | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 310 |
| .md | 111 |
| .yaml | 58 |
| .parquet | 54 |
| .rst | 33 |
| .csv | 30 |
| .txt | 14 |
| .yml | 6 |
| [no-ext] | 6 |
| .bin | 4 |
| .json | 4 |
| .pkl | 4 |
| .html | 2 |
| .xml | 2 |
| .bat | 1 |
| .sqlite3 | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
