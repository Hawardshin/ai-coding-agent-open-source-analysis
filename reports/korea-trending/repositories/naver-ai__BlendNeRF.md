# naver-ai/BlendNeRF

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver-ai/BlendNeRF |
| local path | sources/naver-ai__BlendNeRF |
| HEAD | 404622d |
| stars/forks | 148 / 9 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2023-08-03T07:56:22Z |
| trendScore / priorityScore | 73 / 196 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Spec / doc-driven workflow | 18 | torch_utils/ops/bias_act.py |
| Frontend / developer experience | 15 | torch_utils/ops/bias_act.py, torch_utils/ops/filtered_lrelu.py, torch_utils/ops/upfirdn2d.py |
| LLM wiki / memory / graph | 9 | modules/mesh_renderer.py, training/networks_stylegan2.py, training/superresolution.py |
| Korean language / Korea domain | 8 | README.md, modules/mesh_renderer.py, modules/poisson_blending.py |
| Infra / observability | 1 | training/volumetric_rendering/ray_marcher.py |
| RAG / retrieval | 1 | training/networks_stylegan2.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | data-ml, evalObservability, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, localRuntime, rag, spec-driven |
| stacks | Python, C/C++ |
| capabilities | Graph/memory store, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 63 |
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
| title | For a single image, the first stage (W optimization) takes 23.6s, and the second stage (G optimization) takes 20.4s on a single A100 GPU. |
| headings | [ICCV 23] BlendNeRF - Official PyTorch Implementation / Installation / Blend images / For a single image, the first stage (W optimization) takes 23.6s, and the second stage (G optimization) takes 20.4s on a single A100 GPU. / It takes 27 seconds / It takes 12 seconds / Generate various results / Diverse blending settings / Results are in / Diverse input images |
| excerpt | ICCV 23 BlendNeRF Official PyTorch Implementation <p align="middle" <img width="100%" src="assets/teaser.png" / </p 3D aware Blending with Generative NeRFs <br Hyunsu Kim https //blandocs.github.io <sup 1</sup , Gayoung Lee https //sites.google.com/site/gylee1103 <sup 1</sup , Yunjey Choi https //yunjey.github.io <sup 1</sup , Jin Hwa Kim http //wityworks.com <sup 1,2</sup , Jun Yan Zhu https //www.cs.cmu.edu/~junyanz <sup 3</sup <br <sup 1</sup NAVER AI Lab, <sup 2</sup SNU AIIS, <sup 3</sup CMU Project https //blandocs.github.io/blendnerf arXiv https //arxiv.org/abs/2302.06608 Paper https //blandocs.github.io/assets/publications/2023 BlendNeRF/paper.pdf Abstract Image blending aims to comb |


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
| torch_utils | 25 |
| training | 16 |
| modules | 9 |
| dnnlib | 2 |
| .gitignore | 1 |
| blend.py | 1 |
| download.sh | 1 |
| environment.yml | 1 |
| install.sh | 1 |
| inversion.py | 1 |
| LICENSE | 1 |
| NOTICE | 1 |
| README.md | 1 |
| run_more_images.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 44 |
| .cu | 6 |
| .cpp | 3 |
| .h | 3 |
| [no-ext] | 3 |
| .sh | 2 |
| .md | 1 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
