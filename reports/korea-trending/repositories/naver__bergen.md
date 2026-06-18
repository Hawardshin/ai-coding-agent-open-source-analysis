# naver/bergen

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/bergen |
| local path | sources/naver__bergen |
| HEAD | eb8ec04 |
| stars/forks | 274 / 33 |
| language | Jupyter Notebook |
| license | NOASSERTION |
| pushedAt | 2026-03-11T09:37:23Z |
| trendScore / priorityScore | 107 / 285 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 149 | README.md, scripts/provence/readme.md, scripts/xprovence/readme.md |
| Korean language / Korea domain | 24 | scripts/provence/readme.md, scripts/xprovence/readme.md, config/prompt/basic_langspec/basic_reply_in_ko.yaml |
| LLM wiki / memory / graph | 12 | config/prompt/basic_translated_langspec_namedentities/en.yaml, documentation/evaluations.md, modules/rag.py |
| Local LLM / on-device inference | 7 | README.md, documentation/evaluations.md, evaluate.py |
| AI agent / tool use | 3 | tests/utdata/utexp_neg/eval_dev_out.json |
| Spec / doc-driven workflow | 1 |  |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, graphMemory, korea-signal, llm-wiki-memory, llmFramework, local-llm, localRuntime, rag, spec-driven, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 690 |
| manifests | 2 |
| docs | 13 |
| tests | 8 |
| ci/ops | 0 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | BERGEN: A Benchmarking Library for Retrieval-Augmented Generation |
| headings | BERGEN: A Benchmarking Library for Retrieval-Augmented Generation / Key Features / Quick Start / Installation / Usage / simple setup for benchmarking / run the retriever and cache results / do the generation with VLLM / Evaluation / RAG Baselines |
| excerpt | <img src="documentation/images/BERGEN.png" width="500" BERGEN A Benchmarking Library for Retrieval Augmented Generation ! arXiv https //img.shields.io/badge/arXiv 2407.01102 b31b1b.svg https //arxiv.org/abs/2407.01102 ! arXiv https //img.shields.io/badge/arXiv 2407.01463 b31b1b.svg https //arxiv.org/abs/2407.01463 ! License CC BY NC SA 4.0 https //img.shields.io/badge/License CC%20BY NC SA%204.0 lightgrey.svg https //creativecommons.org/licenses/by nc sa/4.0/ BERGEN BEnchmarking Retrieval augmented GENeration is a library designed to benchmark RAG systems with a focus on question answering QA . It addresses the challenge of inconsistent benchmarking in comparing approaches and understanding |


## 주요 파일

### Manifests

- README.md
- requirements.txt


### Spec / Docs / Prompt Artifacts

- config/prompt/basic_langspec/basic_reply_in_ar.yaml
- config/prompt/basic_langspec/basic_reply_in_de.yaml
- config/prompt/basic_langspec/basic_reply_in_en.yaml
- config/prompt/basic_langspec/basic_reply_in_es.yaml
- config/prompt/basic_langspec/basic_reply_in_fi.yaml
- config/prompt/basic_langspec/basic_reply_in_fr.yaml
- config/prompt/basic_langspec/basic_reply_in_it.yaml
- config/prompt/basic_langspec/basic_reply_in_ja.yaml
- config/prompt/basic_langspec/basic_reply_in_ko.yaml
- config/prompt/basic_langspec/basic_reply_in_pt.yaml
- config/prompt/basic_langspec/basic_reply_in_ru.yaml
- config/prompt/basic_langspec/basic_reply_in_th.yaml
- config/prompt/basic_langspec/basic_reply_in_zh.yaml
- config/prompt/basic_translated_langspec_namedentities/ar.yaml
- config/prompt/basic_translated_langspec_namedentities/de.yaml
- config/prompt/basic_translated_langspec_namedentities/en.yaml
- config/prompt/basic_translated_langspec_namedentities/es.yaml
- config/prompt/basic_translated_langspec_namedentities/fi.yaml
- config/prompt/basic_translated_langspec_namedentities/fr.yaml
- config/prompt/basic_translated_langspec_namedentities/it.yaml


### Agent Instruction Files

- config/prompt/basic_langspec/basic_reply_in_ar.yaml
- config/prompt/basic_langspec/basic_reply_in_de.yaml
- config/prompt/basic_langspec/basic_reply_in_en.yaml
- config/prompt/basic_langspec/basic_reply_in_es.yaml
- config/prompt/basic_langspec/basic_reply_in_fi.yaml
- config/prompt/basic_langspec/basic_reply_in_fr.yaml
- config/prompt/basic_langspec/basic_reply_in_it.yaml
- config/prompt/basic_langspec/basic_reply_in_ja.yaml
- config/prompt/basic_langspec/basic_reply_in_ko.yaml
- config/prompt/basic_langspec/basic_reply_in_pt.yaml
- config/prompt/basic_langspec/basic_reply_in_ru.yaml
- config/prompt/basic_langspec/basic_reply_in_th.yaml
- config/prompt/basic_langspec/basic_reply_in_zh.yaml
- config/prompt/basic_translated_langspec_namedentities/ar.yaml
- config/prompt/basic_translated_langspec_namedentities/de.yaml


## 상위 디렉터리

| dir | count |
| --- | --- |
| config | 419 |
| runs | 100 |
| qrels | 48 |
| scripts | 41 |
| models | 40 |
| modules | 16 |
| documentation | 8 |
| tests | 8 |
| .gitignore | 1 |
| bergen.py | 1 |
| evaluate.py | 1 |
| LICENCE.md | 1 |
| notebooks | 1 |
| NOTICE.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .yaml | 421 |
| .trec | 100 |
| .py | 88 |
| .txt | 27 |
| .json | 26 |
| .md | 13 |
| .sh | 8 |
| .ipynb | 3 |
| .tsv | 2 |
| [no-ext] | 2 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
