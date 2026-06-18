# kakao/khaiii

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kakao/khaiii |
| local path | sources/kakao__khaiii |
| HEAD | 3d0c894 |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-06-10T18:06:55Z |
| trendScore / priorityScore | 106 / 180 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 62 | README.md, docker/Dockerfile, train/eval.py |
| RAG / retrieval | 25 | train/pickle_model.py, train/train.py, rsc/bin/compile_model.py |
| LLM wiki / memory / graph | 19 | README.md, .github/pull_request_template.md, NOTICE.md |
| Security / compliance | 5 | README.md, NOTICE.md |
| Spec / doc-driven workflow | 5 | docker/Dockerfile, NOTICE.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, security-compliance, spec-driven |
| stacks | Python, C/C++ |
| capabilities | LLM/app framework, Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 125 |
| manifests | 5 |
| docs | 6 |
| tests | 8 |
| ci/ops | 1 |
| spec artifacts | 2 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings | 정확도 / 속도 / 기분석 사전 / 오분석 패치 |
| excerpt | khaiii ==== khaiii는 "Kakao Hangul Analyzer III"의 첫 글자들만 모아 만든 이름으로 카카오에서 개발한 세 번째 형태소분석기입니다. 두 번째 버전의 형태소분석기 이름인 dha2 Daumkakao Hangul Analyzer 2 를 계승한 이름이기도 합니다. 형태소는 언어학에서 일정한 의미가 있는 가장 작은 말의 단위로 발화체 내에서 따로 떼어낼 수 있는 것을 말합니다. 즉, 더 분석하면 뜻이 없어지는 말의 단위입니다. 형태소분석기는 단어를 보고 형태소 단위로 분리해내는 소프트웨어를 말합니다. 이러한 형태소분석은 자연어 처리의 가장 기초적인 절차로 이후 구문 분석이나 의미 분석으로 나아가기 위해 가장 먼저 이루어져야 하는 과정으로 볼 수 있습니다. 한국어 위키피디아에서 인용 데이터 기반 기존 버전이 사전과 규칙에 기반해 분석을 하는 데 반해 khaiii는 데이터 혹은 기계학습 기반의 알고리즘을 이용하여 분석을 합니다. 학습에 사용한 코퍼스는 국립국어원에서 배포한 21세기 세종계획 최종 성과물 https //ithub.korean.go.kr/user/noticeView.do?boardSeq=1&articleSeq=16 을 저희 카카오에서 오류를 수정하고 내용을 일부 추가하기도 한 것입니다. 전처리 과정에서 오류가 발생하는 문장을 제외하고 약 85만 문장, 천만 어절의 코퍼스를 사용하여 학습을 했습니다. |


## 주요 파일

### Manifests

- README.md
- docker/Dockerfile
- requirements.txt
- rsc/Makefile
- train/requirements.txt


### Spec / Docs / Prompt Artifacts

- requirements.txt
- train/requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 65 |
| rsc | 19 |
| train | 13 |
| munjong | 9 |
| cmake | 5 |
| .github | 3 |
| include | 3 |
| .gitignore | 1 |
| CMakeLists.txt | 1 |
| CONTRIBUTING.md | 1 |
| docker | 1 |
| LICENSE | 1 |
| NOTICE.md | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 45 |
| .cpp | 23 |
| .hpp | 19 |
| .cmake | 5 |
| .in | 4 |
| .md | 4 |
| [no-ext] | 4 |
| .auto | 3 |
| .manual | 3 |
| .txt | 3 |
| .h | 2 |
| .json | 2 |
| .pickle | 2 |
| .pptx | 2 |
| .bash | 1 |
| .dic | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
