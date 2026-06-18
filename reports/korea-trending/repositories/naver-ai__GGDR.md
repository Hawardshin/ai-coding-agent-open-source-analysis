# naver-ai/GGDR

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver-ai/GGDR |
| local path | sources/naver-ai__GGDR |
| HEAD | 7071792 |
| stars/forks | 102 / 8 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2022-08-10T05:57:07Z |
| trendScore / priorityScore | 70 / 184 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Spec / doc-driven workflow | 44 | LICENSE.txt, NOTICE.txt, train.py |
| Frontend / developer experience | 12 | train.py, torch_utils/ops/bias_act.py, torch_utils/ops/upfirdn2d.py |
| LLM wiki / memory / graph | 10 | LICENSE.txt, NOTICE.txt, train.py |
| RAG / retrieval | 6 | metrics/perceptual_path_length.py, metrics/precision_recall.py, training/networks.py |
| Korean language / Korea domain | 5 | README.md, NOTICE.txt, training/loss_ggdr.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | data-ml, evalObservability, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, spec-driven |
| stacks | Python, C/C++ |
| capabilities | LLM/app framework, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 44 |
| manifests | 1 |
| docs | 1 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | GGDR - Generator-Guided Regularization for Discriminator (Official PyTorch Implementation) |
| headings | GGDR - Generator-Guided Regularization for Discriminator (Official PyTorch Implementation) / Credit / Usage / Results / Selective samples in the paper / Discriminator feature map visualization / License / Citation |
| excerpt | GGDR Generator Guided Regularization for Discriminator Official PyTorch Implementation Generator Knows What Discriminator Should Learn in Unconditional GANs ECCV 2022 http //arxiv.org/abs/2207.13320 \ Gayoung Lee<sup 1</sup , Hyunsu Kim<sup 1</sup , Junho Kim<sup 1</sup , Seonghyeon Kim<sup 2</sup , Jung Woo Ha<sup 1</sup , Yunjey Choi<sup 1</sup <sup 1</sup NAVER AI Lab, <sup 2</sup NAVER CLOVA <div align="center" <img src="figures/model.png" width="70%" height="70%" </div Abstract Recent conditional image generation methods benefit from dense supervision such as segmentation label maps to achieve high fidelity. However, it is rarely explored to employ dense supervision for unconditional im |


## 주요 파일

### Manifests

- README.md


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| torch_utils | 18 |
| metrics | 8 |
| training | 8 |
| dnnlib | 2 |
| calc_metrics.py | 1 |
| generate.py | 1 |
| legacy.py | 1 |
| LICENSE.txt | 1 |
| NOTICE.txt | 1 |
| README.md | 1 |
| tools | 1 |
| train.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 35 |
| .cpp | 2 |
| .cu | 2 |
| .h | 2 |
| .txt | 2 |
| .md | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
