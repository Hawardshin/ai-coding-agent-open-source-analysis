# naver-ai/KoBBQ

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver-ai/KoBBQ |
| local path | sources/naver-ai__KoBBQ |
| HEAD | 0dd165a |
| stars/forks | 19 / 3 |
| language | Python |
| license | MIT |
| pushedAt | 2024-05-13T09:45:05Z |
| trendScore / priorityScore | 79 / 156 |


## 한줄 해석

- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 12 | README.md, evaluation/1_preprocess.py, evaluation/2_model_inference.py |
| Spec / doc-driven workflow | 2 | evaluation/README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | data-ml, evalObservability, korea-signal, llmFramework, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 20 |
| manifests | 4 |
| docs | 3 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | KoBBQ |
| headings | KoBBQ / Webpage / Datasets / Examples / Statistics / How to Evaluate / With Evaluation Set / With Entire Set / Ethical Considerations / BibTex |
| excerpt | KoBBQ This is the official repository of KoBBQ Korean Bias Benchmark for Question Answering https //arxiv.org/abs/2307.16778 TACL 2024 . Webpage https //jinjh0123.github.io/KoBBQ Datasets Our KoBBQ datasets and survey results can be found in KoBBQ/data ./data & Huggingface Datasets https //huggingface.co/datasets/naver ai/kobbq . Examples ! KoBBQ examples examples.png Statistics Category of Templates of Samples Age 21 3,608 Disability Status 20 2,160 Gender Identity 25 768 Physical Appearance 20 4,040 Race/Ethnicity/Nationality 43 51,856 Religion 20 688 Socio Economic Status 27 6,928 Sexual Orientation 12 552 Domestic Area of Origin 22 800 Family Structure 23 1,096 Political Orientation 11 3 |


## 주요 파일

### Manifests

- evaluation/README.md
- data/README.md
- README.md
- evaluation/requirements.txt


### Spec / Docs / Prompt Artifacts

- evaluation/requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| evaluation | 12 |
| data | 5 |
| .gitignore | 1 |
| LICENSE | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 9 |
| .tsv | 4 |
| .md | 3 |
| [no-ext] | 2 |
| .json | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
