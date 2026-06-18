# naver/ludvig

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/ludvig |
| local path | sources/naver__ludvig |
| HEAD | 4461fc5 |
| stars/forks | 78 / 4 |
| language | C++ |
| license | NOASSERTION |
| pushedAt | 2025-08-27T15:35:50Z |
| trendScore / priorityScore | 72 / 214 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Spec / doc-driven workflow | 40 | gaussiansplatting/README.md, gaussiansplatting/SIBR_viewers/README.md, gaussiansplatting/submodules/diff-gaussian-rasterization/third_party/glm/readme.md |
| Frontend / developer experience | 11 | gaussiansplatting/README.md, gaussiansplatting/submodules/diff-gaussian-rasterization/third_party/glm/readme.md, gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/readme.md |
| LLM wiki / memory / graph | 9 | gaussiansplatting/README.md, README.md, gaussiansplatting/submodules/diff-gaussian-rasterization/third_party/glm/readme.md |
| Security / compliance | 4 | gaussiansplatting/submodules/diff-gaussian-rasterization/third_party/glm/readme.md, gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/readme.md |
| AI agent / tool use | 1 | gaussiansplatting/SIBR_viewers/README.md |
| Korean language / Korea domain | 1 | README.md |
| RAG / retrieval | 1 | dinov2/eval.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, C/C++ |
| capabilities | Vector/search store, Graph/memory store, Document parsing/OCR |


## 구조 요약

| key | value |
| --- | --- |
| files | 3542 |
| manifests | 5 |
| docs | 1628 |
| tests | 434 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | LUDVIG: Learning-free Uplifting of 2D Visual features to Gaussian Splatting scenes (ICCV 2025) |
| headings | LUDVIG: Learning-free Uplifting of 2D Visual features to Gaussian Splatting scenes (ICCV 2025) / Table of Contents / Setup / Project Structure / Demo / Data / Demo for feature uplifting / Demo for open-vocabulary object removal / Reproducing results / Foreground/background segmentation |
| excerpt | LUDVIG Learning free Uplifting of 2D Visual features to Gaussian Splatting scenes ICCV 2025 This repository contains code for LUDVIG Learning free Uplifting of 2D Visual features to Gaussian Splatting scenes https //juliettemarrie.github.io/ludvig/ , published at ICCV 2025 . LUDVIG uses a learning free approach to uplift visual features from models such as DINOv2, SAM, and CLIP into 3D Gaussian Splatting scenes. It refines 3D features, such as coarse segmentation masks, based on a graph diffusion process that incorporates the 3D geometry of the scene and DINOv2 feature similarities. We evaluate on foreground/background and open vocabulary object segmentation tasks. ! LUDVIG Main Figure figur |


## 주요 파일

### Manifests

- gaussiansplatting/README.md
- README.md
- gaussiansplatting/SIBR_viewers/README.md
- gaussiansplatting/submodules/diff-gaussian-rasterization/README.md
- gaussiansplatting/submodules/origin-diff-gaussian-rasterization/README.md


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| gaussiansplatting | 3452 |
| dinov2 | 22 |
| configs | 18 |
| utils | 15 |
| script | 7 |
| evaluation | 6 |
| clip_utils | 5 |
| predictors | 5 |
| diffusion | 3 |
| demo_removal.py | 1 |
| demo.py | 1 |
| environment.yml | 1 |
| LICENSE.txt | 1 |
| ludvig_base.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .html | 1392 |
| .hpp | 664 |
| .cpp | 526 |
| .inl | 279 |
| .js | 192 |
| .py | 116 |
| .txt | 62 |
| .h | 48 |
| .cmake | 30 |
| .frag | 29 |
| .dox | 26 |
| .yaml | 23 |
| .fp | 19 |
| .vert | 19 |
| .vp | 19 |
| .md | 14 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
