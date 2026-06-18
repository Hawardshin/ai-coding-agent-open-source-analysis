# kakaobrain/rq-vae-transformer

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kakaobrain/rq-vae-transformer |
| local path | sources/kakaobrain__rq-vae-transformer |
| HEAD | 341395e |
| stars/forks | 1023 / 113 |
| language | Jupyter Notebook |
| license | NOASSERTION |
| pushedAt | 2024-01-03T07:12:24Z |
| trendScore / priorityScore | 95 / 242 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Security / compliance | 41 | compute_metrics.py, compute_rfid.py, main_sampling_fid.py |
| Korean language / Korea domain | 40 | compute_metrics.py, compute_rfid.py, main_sampling_fid.py |
| RAG / retrieval | 33 | measure_throughput/__main__.py, rqvae/models/interfaces.py, rqvae/models/rqtransformer/primitives.py |
| Spec / doc-driven workflow | 3 | README.md |
| LLM wiki / memory / graph | 2 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | evalObservability, graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, security-compliance, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 95 |
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
| title | Autoregressive Image Generation using Residual Quantization (CVPR 2022) |
| headings | Autoregressive Image Generation using Residual Quantization (CVPR 2022) / Requirements / Coverage of Released Codes / Pretrained Checkpoints / Checkpoints Used in the Original Paper / **(NOTE)** Large-Scale RQ-Transformer for Text-to-Image Generation / Training and Evaluation of RQ-VAE / Training of RQ-VAEs / Finetuning of Pretrained RQ-VAE / Evaluation of RQ-VAEs |
| excerpt | Autoregressive Image Generation using Residual Quantization CVPR 2022 The official implementation of "Autoregressive Image Generation using Residual Quantization" https //arxiv.org/abs/2203.01941 Doyup Lee , Chiheon Kim , Saehoon Kim, Minsu Cho, Wook Shin Han \ Equal contribution CVPR 2022 <center <img src="assets/figures/teaser.png" height="256" </center The examples of generated images by RQ Transformer using class conditions and text conditions. Note that the text conditions of the examples are not used in training time. TL;DR For autoregressive AR modeling of high resolution images, we propose the two stage framework, which consists of RQ VAE and RQ Transformer. Our framework can precise |


## 주요 파일

### Manifests

- data/README.md
- README.md
- data/cc3m/README.md
- requirements.txt


### Spec / Docs / Prompt Artifacts

- requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| rqvae | 62 |
| configs | 14 |
| data | 3 |
| measure_throughput | 2 |
| notebooks | 2 |
| .gitignore | 1 |
| compute_metrics.py | 1 |
| compute_rfid.py | 1 |
| LICENSE | 1 |
| LICENSE.apache-2.0 | 1 |
| LICENSE.cc-by-nc-sa-4.0 | 1 |
| main_sampling_fid.py | 1 |
| main_sampling_txt2img.py | 1 |
| main_stage1.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 59 |
| .yaml | 16 |
| .txt | 8 |
| .json | 3 |
| .md | 3 |
| .0 | 2 |
| [no-ext] | 2 |
| .cfg | 1 |
| .ipynb | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
