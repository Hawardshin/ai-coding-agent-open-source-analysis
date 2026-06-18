# kakao/recoteam

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kakao/recoteam |
| local path | sources/kakao__recoteam |
| HEAD | 65fc78e |
| stars/forks | 365 / 17 |
| language | Jupyter Notebook |
| license |  |
| pushedAt | 2026-02-06T06:10:41Z |
| trendScore / priorityScore | 92 / 240 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 98 | README.md, publications/sigir2023-update-period/README.md, docs/arena/brunch.html |
| LLM wiki / memory / graph | 44 | onboarding/README.md, programming_assignments/beale_ciphers/README.md, programming_assignments/mini_reco/README.md |
| RAG / retrieval | 35 | publications/sigir2023-update-period/README.md, paper_review/recsys/recsys2021/Together is Better- Hybrid Recommendations Combining Graph Embeddings and Contextualized Word Representations.md, paper_review/recsys/recsys2021/Follow the guides- disentangling human and algorithmic curation in online music consumption.md |
| Security / compliance | 27 | paper_review/README.md, docs/arena/melon-en.html, paper_review/recsys/recsys2021/Evaluating Off-Policy Evaluation- Sensitivity and Robustness.md |
| Infra / observability | 4 | onboarding/README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | evalObservability, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, rag, security-compliance |
| stacks | Python, Java/Kotlin, C/C++ |
| capabilities | LLM/app framework, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 120 |
| manifests | 10 |
| docs | 57 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | 카카오 추천팀 |
| headings | 카카오 추천팀 / 소개 / 영입 지원 링크 / 영입 기출 문제 / 오픈소스 / 지식 저장소 (논문 리뷰) / 발행 문서, 발표 영상 자료 모음 / 테크 블로그 / AI 리포트 / 논문 / if(kakao) |
| excerpt | 카카오 추천팀 소개 카카오 추천팀은 카카오의 다양한 서비스에 추천 기술을 제공하고 있습니다. 추천팀에서는 아래와 같은 업무를 하고 있습니다. 추천 기술 고도화 방향 사용자의 장기적인 서비스 만족도 증가 추천/ML SaaS 플랫폼 개발 방향 높은 품질의 추천 기술을 쉽게 가져다 사용할 수 있는 플랫폼 대규모 추천 서비스를 지탱할 수 있는 안정적이고 효율적인 플랫폼 구축 저희에게 궁금한 점이나 하고 싶은 이야기가 있다면 Discussions https //github.com/kakao/recoteam/discussions 를 이용해주세요. 영입 지원 링크 현재는 진행 중인 영입 공고가 없습니다. 영입 기출 문제 추천팀 영입 과정에서 실제로 사용했던 기출 문제입니다. Mini Reco programming assignments/mini reco Jukebox programming assignments/jukebox Beale Ciphers programming assignments/beale ciphers 오픈소스 추천팀에서 공개한 오픈소스 소프트웨어입니다. TOROS Buffalo https //github.com/kakao/buffalo A fast and scalable production ready open source project for recommender systems TOROS N2 https //github.com/kak |


## 주요 파일

### Manifests

- onboarding/README.md
- paper_review/README.md
- presentations/README.md
- programming_assignments/beale_ciphers/testcase/README.md
- README.md
- programming_assignments/beale_ciphers/README.md
- programming_assignments/jukebox/README.md
- programming_assignments/jukebox/solution/README.md
- programming_assignments/mini_reco/README.md
- publications/sigir2023-update-period/README.md


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| programming_assignments | 70 |
| paper_review | 40 |
| docs | 6 |
| onboarding | 1 |
| presentations | 1 |
| publications | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 51 |
| .txt | 17 |
| .in | 16 |
| .out | 16 |
| .py | 7 |
| .html | 4 |
| .ipynb | 4 |
| .cpp | 1 |
| .css | 1 |
| .java | 1 |
| .svg | 1 |
| [no-ext] | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
