# naver/must3r

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/must3r |
| local path | sources/naver__must3r |
| HEAD | 0c0d76b |
| stars/forks | 328 / 22 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2026-02-10T08:51:47Z |
| trendScore / priorityScore | 91 / 242 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| LLM wiki / memory / graph | 98 | README.md, eval.py, must3r/demo/gradio.py |
| RAG / retrieval | 69 | README.md, must3r/retrieval/graph.py, must3r/retrieval/processor.py |
| Korean language / Korea domain | 58 | README.md, eval.py, must3r/retrieval/__init__.py |
| AI agent / tool use | 16 | must3r/slam/data.py, must3r/slam/model.py, must3r/slam/slam.py |
| Spec / doc-driven workflow | 3 | README.md |
| Infra / observability | 2 | must3r/engine/losses.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, example-rich, graphMemory, infra-observability, korea-signal, llm-wiki-memory, rag, spec-driven, vectorSearch |
| stacks | Python |
| capabilities | Vector/search store, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 57 |
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
| title | (recommended) if you can, install xFormers for memory-efficient attention |
| headings | Table of Contents / License / Get Started / Installation / (recommended) if you can, install xFormers for memory-efficient attention / pip3 install must3r[optional]@git+https://github.com/naver/must3r.git # adds pillow-heif / pip3 install --no-build-isolation must3r[curope]@git+https://github.com/naver/must3r.git # adds curope / pip3 install --no-build-isolation must3r[all]@git+https://github.com/naver/must3r.git # adds all optional dependencies / (recommended) if you can, install xFormers for memory-efficient attention / if you have already cloned must3r: |
| excerpt | ! logo assets/must3r.jpg Official implementation of MUSt3R Multi view Network for Stereo 3D Reconstruction Project page https //europe.naverlabs.com/research/publications/must3r multi view network for stereo 3d reconstruction/ , MUSt3R arxiv https //arxiv.org/abs/2503.01661 ! examples assets/examples.jpg ! overview assets/overview.jpg Table of Contents Table of Contents table of contents License license Get Started get started Installation installation Checkpoints checkpoints Demo demo Offline Gradio +viser Demo offline gradio viser demo Online Visual Odometry Demo open3d online visual odometry demo open3d Training training Notes notes Hyperparameters hyperparameters License MUSt3R is releas |


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
| must3r | 44 |
| .gitignore | 1 |
| .gitmodules | 1 |
| assets | 1 |
| demo.py | 1 |
| eval.py | 1 |
| get_reconstruction.py | 1 |
| LICENSE | 1 |
| NOTICE | 1 |
| README.md | 1 |
| requirements.txt | 1 |
| setup.py | 1 |
| slam.py | 1 |
| train.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 50 |
| [no-ext] | 4 |
| .md | 2 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
