# naver/multi-hmr2

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/multi-hmr2 |
| local path | sources/naver__multi-hmr2 |
| HEAD | 1a1b92f |
| stars/forks | 30 / 0 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2026-06-16T08:57:42Z |
| trendScore / priorityScore | 79 / 191 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 39 | README.md, LICENSE.txt, NOTICE.txt |
| RAG / retrieval | 11 | src/multihmr2/models/detr_root_relative/decoder.py, src/multihmr2/models/detr_root_relative/hph.py, src/multihmr2/models/detr_root_relative/pos_embed.py |
| LLM wiki / memory / graph | 3 | LICENSE.txt |
| Local LLM / on-device inference | 2 | src/multihmr2/models/detr_root_relative/decoder.py |
| AI agent / tool use | 1 | LICENSE.txt |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, evalObservability, graphMemory, korea-signal, llm-wiki-memory, local-llm, rag, sdk-api |
| stacks | Python |
| capabilities | Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 32 |
| manifests | 2 |
| docs | 1 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Pass compile_model=True when processing many frames at a fixed resolution. |
| headings | Installation / Usage / Command line / Python API / Pass compile_model=True when processing many frames at a fixed resolution. / Related projects / Citation |
| excerpt | <p align="center" <h1 align="center" Multi HMR 2 Multi Person Camera Centric Human Detection, Mesh Recovery and Tracking</h1 <p align="center" <a href="https //g fiche.github.io/" Guénolé Fiche</a , <a href="https //philippeweinzaepfel.github.io/" Philippe Weinzaepfel</a , <a href="https //rbregier.github.io/" Romain Brégier</a , <a href="https //fabienbaradel.github.io/" Fabien Baradel</a </p <p align="center" <a href="https //arxiv.org/abs/2606.14841" <img alt="arXiv" src="https //img.shields.io/badge/arXiv 2606.14841 green" </a <a href="https //arxiv.org/pdf/2606.14841.pdf" <img alt="Pdf" src="https //img.shields.io/badge/PDF Download red" </a <a href="https //europe.naverlabs.com/blog/mu |


## 주요 파일

### Manifests

- README.md
- pyproject.toml


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 26 |
| .gitignore | 1 |
| demo_data | 1 |
| LICENSE.txt | 1 |
| NOTICE.txt | 1 |
| pyproject.toml | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 26 |
| .txt | 2 |
| .md | 1 |
| .mp4 | 1 |
| .toml | 1 |
| [no-ext] | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
