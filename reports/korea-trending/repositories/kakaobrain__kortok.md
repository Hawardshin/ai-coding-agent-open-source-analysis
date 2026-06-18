# kakaobrain/kortok

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kakaobrain/kortok |
| local path | sources/kakaobrain__kortok |
| HEAD | 8fb223b |
| stars/forks | 119 / 10 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2020-10-08T03:13:18Z |
| trendScore / priorityScore | 96 / 224 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| LLM wiki / memory / graph | 23 | README.md, scripts/README.md, scripts/build_char_vocab.py |
| Korean language / Korea domain | 14 | README.md, scripts/train_sentencepiece.py |
| Spec / doc-driven workflow | 3 | README.md |
| RAG / retrieval | 2 | tasks/korquad/model.py |
| Security / compliance | 2 | tasks/korquad/run_train.py, tasks/korquad/tokenization.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | evalObservability, korea-signal, llm-wiki-memory, llmFramework, rag, security-compliance, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 152 |
| manifests | 4 |
| docs | 2 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | An Empirical Study of Tokenization Strategies for Various Korean NLP Tasks |
| headings | An Empirical Study of Tokenization Strategies for Various Korean NLP Tasks / Installation / Tokenization Strategies / Korean from/to English Translation / Dataset / Training & Evaluation / Korean Natural Language Understanding / Pre-training / Fine-tuning / Citation |
| excerpt | An Empirical Study of Tokenization Strategies for Various Korean NLP Tasks An Empirical Study of Tokenization Strategies for Various Korean NLP Tasks pdf https //arxiv.org/abs/2010.02534 <br Kyubyong Park https //github.com/Kyubyong \ , Joohong Lee https //github.com/roomylee \ , Seongbo Jang https //github.com/sb jang \ , Dawoon Jung https //github.com/noowad93 \ <br Accepted to AACL IJCNLP 2020. indicates equal contribution Abstract Typically, tokenization is the very first step in most text processing works. As a token serves as an atomic unit that embeds the contextual information of text, how to define a token plays a decisive role in the performance of a model.<br Even though Byte Pair |


## 주요 파일

### Manifests

- README.md
- scripts/README.md
- pyproject.toml
- requirements.txt


### Spec / Docs / Prompt Artifacts

- requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| resources | 91 |
| tasks | 37 |
| tokenizer | 9 |
| scripts | 7 |
| .gitignore | 1 |
| LICENSE | 1 |
| pyproject.toml | 1 |
| pyrightconfig.json | 1 |
| README.md | 1 |
| requirements-dev.txt | 1 |
| requirements.txt | 1 |
| setup.cfg | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 51 |
| .json | 46 |
| .vocab | 36 |
| .model | 11 |
| .md | 2 |
| .txt | 2 |
| [no-ext] | 2 |
| .cfg | 1 |
| .toml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
