# naver-ai/StyleMapGAN

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver-ai/StyleMapGAN |
| local path | sources/naver-ai__StyleMapGAN |
| HEAD | 3a70e07 |
| stars/forks | 463 / 77 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2021-10-15T04:44:36Z |
| trendScore / priorityScore | 87 / 214 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 16 | README.md, demo.py, demo/static/components/js/main.js |
| LLM wiki / memory / graph | 2 | demo/static/components/js/agh.sprintf.js, train.py |
| RAG / retrieval | 2 | README.md |
| Spec / doc-driven workflow | 1 | demo/static/components/js/agh.sprintf.js |


## 분류와 스택

| key | value |
| --- | --- |
| categories | data-ml, evalObservability, example-rich, graphMemory, korea-signal, llm-wiki-memory, rag, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python, C/C++ |
| capabilities | Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 131 |
| manifests | 3 |
| docs | 3 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Download raw images and create LMDB datasets using them |
| headings | StyleMapGAN - Official PyTorch Implementation / Demo / Installation / Datasets and pre-trained networks / Download raw images and create LMDB datasets using them / Additional files are also downloaded for local editing / Download the pretrained network (256x256) / Download the pretrained network (1024x1024 image / 16x16 stylemap / Light version of Generator) / Train network / CelebA-HQ |
| excerpt | StyleMapGAN Official PyTorch Implementation <p align="left" <img width="100%" src="assets/teaser.jpg" / </p StyleMapGAN Exploiting Spatial Dimensions of Latent in GAN for Real time Image Editing <br Hyunsu Kim https //github.com/blandocs , Yunjey Choi https //github.com/yunjey , Junho Kim https //github.com/taki0112 , Sungjoo Yoo http //cmalab.snu.ac.kr , Youngjung Uh https //github.com/youngjung <br In CVPR 2021.<br Paper https //arxiv.org/abs/2104.14754 <br 5 minute video CVPR https //www.youtube.com/watch?v=7sJqjm1qazk <br Demo video https //youtu.be/qCapNyRA Ng <br Abstract Generative adversarial networks GANs synthesize realistic images from random latent vectors. Although manipulating |


## 주요 파일

### Manifests

- metrics/README.md
- preprocessor/README.md
- README.md


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| semantic_manipulation | 81 |
| training | 22 |
| demo | 8 |
| metrics | 7 |
| preprocessor | 3 |
| .gitignore | 1 |
| demo.py | 1 |
| download.sh | 1 |
| generate.py | 1 |
| install.sh | 1 |
| LICENSE | 1 |
| NOTICE | 1 |
| README.md | 1 |
| semantic_manipulation.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .npy | 80 |
| .py | 24 |
| .pth | 6 |
| [no-ext] | 4 |
| .md | 3 |
| .cpp | 2 |
| .css | 2 |
| .cu | 2 |
| .html | 2 |
| .js | 2 |
| .sh | 2 |
| .scss | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
