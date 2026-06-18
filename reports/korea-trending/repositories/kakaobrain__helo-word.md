# kakaobrain/helo-word

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kakaobrain/helo-word |
| local path | sources/kakaobrain__helo-word |
| HEAD | 4836d26 |
| stars/forks | 93 / 23 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2019-09-19T03:47:14Z |
| trendScore / priorityScore | 72 / 227 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 500 | fairseq/examples/pay_less_attention_paper/README.md, fairseq/examples/scaling_nmt/README.md, fairseq/examples/translation_moe/README.md |
| LLM wiki / memory / graph | 112 | fairseq/examples/language_model/README.md, fairseq/examples/translation/README.md, fairseq/README.md |
| Spec / doc-driven workflow | 18 | fairseq/README.md, README.md, fairseq/docs/tutorial_simple_lstm.rst |
| Local LLM / on-device inference | 2 | fairseq/train.py, fairseq/fairseq_cli/train.py |
| Frontend / developer experience | 1 | fairseq/docs/getting_started.rst |
| Korean language / Korea domain | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | documentParsing, evalObservability, example-rich, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, local-llm, rag, spec-driven |
| stacks | Python, C/C++ |
| capabilities | LLM/app framework, Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 211 |
| manifests | 14 |
| docs | 32 |
| tests | 17 |
| ci/ops | 0 |
| spec artifacts | 2 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | helo_word |
| headings | helo_word / Authors / Installation / apt-get packages (required for hunspell & pattern) / pip packages / custom fairseq (fork of 0.6.1 with gec modifications) / errant / pattern3 (see https://www.clips.uantwerpen.be/pages/pattern for any installation issues) / ['PATH_TO_SITE_PACKAGES'] / Download & Preprocess Data |
| excerpt | helo word A Neural Grammatical Error Correction System Built on Better Pre training and Sequential Transfer Learning Code accompanying Team Kakao&Brain's submission to the ACL 2019 BEA Workshop Shared Task https //www.cl.cam.ac.uk/research/nl/bea2019st/ . helo word is our informal team name. Paper https //arxiv.org/abs/1907.01256 ACL Anthology https //www.aclweb.org/anthology/papers/W/W19/W19 4423/ Authors YJ Choe https //yjchoe.github.io/ ^, Jiyeon Ham https //github.com/hammouse ^, Kyubyong Park https //github.com/Kyubyong ^, Yeoil Yoon^ ^Equal contribution. Installation Requires Python 3. Download & Preprocess Data Restricted Track Prepare data for the restricted track Pre train If you tr |


## 주요 파일

### Manifests

- fairseq/examples/backtranslation/README.md
- fairseq/examples/conv_lm/README.md
- fairseq/examples/conv_seq2seq/README.md
- fairseq/examples/language_model/README.md
- fairseq/examples/pay_less_attention_paper/README.md
- fairseq/examples/scaling_nmt/README.md
- fairseq/examples/stories/README.md
- fairseq/examples/translation_moe/README.md
- fairseq/examples/translation/README.md
- fairseq/README.md
- README.md
- fairseq/docs/Makefile
- fairseq/docs/requirements.txt
- requirements.txt


### Spec / Docs / Prompt Artifacts

- fairseq/docs/requirements.txt
- requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| fairseq | 183 |
| gec | 12 |
| bea2019submissions | 3 |
| data | 3 |
| .gitignore | 1 |
| error_type_control.py | 1 |
| evaluate.py | 1 |
| LICENSE | 1 |
| prepare.py | 1 |
| preprocess.py | 1 |
| README.md | 1 |
| requirements.txt | 1 |
| train.py | 1 |
| tree.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 156 |
| .md | 13 |
| .rst | 13 |
| [no-ext] | 8 |
| .sh | 7 |
| .txt | 5 |
| .cpp | 2 |
| .lua | 2 |
| .aff | 1 |
| .bat | 1 |
| .conf | 1 |
| .css | 1 |
| .dic | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
