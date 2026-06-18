# naver/anny-fit

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/anny-fit |
| local path | sources/naver__anny-fit |
| HEAD | b03ec19 |
| stars/forks | 50 / 2 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2026-06-08T07:20:48Z |
| trendScore / priorityScore | 82 / 201 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 14 | README.md, LICENSE.txt, NOTICE.txt |
| Security / compliance | 8 | preprocess/preprocess_configs/hrnet_w48_coco_wholebody_384x288_dark_plus.py, preprocess/preprocess_configs/hrnetv2_w18_coco_wholebody_hand_256x256_dark.py, preprocess/preprocess_configs/ViTPose_huge_interhand2d_all_256x192.py |
| Spec / doc-driven workflow | 4 | scripts/install.sh |
| LLM wiki / memory / graph | 3 | LICENSE.txt |
| AI agent / tool use | 1 | LICENSE.txt |
| Local LLM / on-device inference | 1 | preprocess/build_test_dataset.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, graphMemory, korea-signal, llm-wiki-memory, llmFramework, local-llm, security-compliance, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 48 |
| manifests | 2 |
| docs | 2 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Anny-Fit |
| headings | Anny-Fit / News / Installation / Demo / Optional: visualize preprocessing for a random sample from a folder / Fitting with Anny-Fit: / License / Citation / Our other works |
| excerpt | Anny Fit Official code for Anny Fit All age Human Mesh Recovery accepted at CVPR 2026 Findings \ Laura Bravo Sánchez https //laubravo.github.io , Matthieu Armando https //europe.naverlabs.com/people user naverlabs/matthieu armando/ , Romain Brégier https //rbregier.github.io , Grégory Rogez https //europe.naverlabs.com/people user naverlabs/gregory rogez/ , Serena Yeung Levy https //marvl.stanford.edu/people.html , Fabien Baradel https //fabienbaradel.github.io ! ArXiv https //img.shields.io/badge/arXiv 2605.04728 33cb56 https //arxiv.org/abs/2605.04728 ! PDF https //img.shields.io/badge/PDF Download red https //arxiv.org/pdf/2605.04728.pdf ! CVPR 2026 Findings https //img.shields.io/badge/C |


## 주요 파일

### Manifests

- README.md
- requirements.txt


### Spec / Docs / Prompt Artifacts

- requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| preprocess | 14 |
| estimate | 11 |
| annyfit | 9 |
| scripts | 4 |
| .gitignore | 1 |
| .gitmodules | 1 |
| INSTALL.md | 1 |
| LICENSE.txt | 1 |
| NOTICE.txt | 1 |
| README.md | 1 |
| requirements.txt | 1 |
| setup.sh | 1 |
| submodules | 1 |
| visualize | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 36 |
| .sh | 5 |
| .txt | 3 |
| .md | 2 |
| [no-ext] | 2 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
