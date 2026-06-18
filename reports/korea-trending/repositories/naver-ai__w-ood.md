# naver-ai/w-ood

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver-ai/w-ood |
| local path | sources/naver-ai__w-ood |
| HEAD | 0cb2f77 |
| stars/forks | 80 / 8 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2022-11-28T16:40:59Z |
| trendScore / priorityScore | 68 / 168 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 12 | misc/indexing.py, net/resnet50_irn.py, step/make_ins_seg_labels.py |
| Korean language / Korea domain | 3 | README.md |
| LLM wiki / memory / graph | 2 | run_sample_pseudo_gt.py, run_sample.py |
| Spec / doc-driven workflow | 1 |  |


## 분류와 스택

| key | value |
| --- | --- |
| categories | evalObservability, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, spec-driven |
| stacks | Python |
| capabilities | Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 34 |
| manifests | 2 |
| docs | 1 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | [Weakly Supervised Semantic Segmentation using Out-of-Distribution Data (CVPR'22)](https://openaccess.thecvf.com/content/CVPR2022/papers/Lee_Weakly_Supervised_Semantic_Segmentation_Using_Out-of-Distribution_Data_CVPR_2022_paper.pdf) |
| headings | [Weakly Supervised Semantic Segmentation using Out-of-Distribution Data (CVPR'22)](https://openaccess.thecvf.com/content/CVPR2022/papers/Lee_Weakly_Supervised_Semantic_Segmentation_Using_Out-of-Distribution_Data_CVPR_2022_paper.pdf) / Abstract / Installation / Usage / Citation / Acknowledgment / License |
| excerpt | Weakly Supervised Semantic Segmentation using Out of Distribution Data CVPR'22 https //openaccess.thecvf.com/content/CVPR2022/papers/Lee Weakly Supervised Semantic Segmentation Using Out of Distribution Data CVPR 2022 paper.pdf by Jungbeom Lee<sup 1</sup , Seong Joon Oh<sup 2,3</sup , Sangdoo Yun<sup 2</sup , Junsuk Choe<sup 4</sup , Eunji Kim<sup 1</sup , Sungroh Yoon<sup 1</sup <sup 1</sup Seoul National University, <sup 2</sup NAVER AI Lab, <sup 3</sup University of Tübingen, <sup 4</sup Sogang University <p align="center" <img src="cam samples wood.png" alt="outline" width="90%" </p Abstract Weakly supervised semantic segmentation WSSS methods are often built on pixel level localization |


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
| step | 11 |
| voc12 | 7 |
| misc | 4 |
| net | 3 |
| bash_run_sample.sh | 1 |
| get_advcam.py | 1 |
| gradcam.py | 1 |
| LICENSE | 1 |
| NOTICE | 1 |
| README.md | 1 |
| requirements.txt | 1 |
| run_sample_pseudo_gt.py | 1 |
| run_sample.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 24 |
| .txt | 5 |
| [no-ext] | 2 |
| .md | 1 |
| .npy | 1 |
| .sh | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
