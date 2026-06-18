# line/lighthouse

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/lighthouse |
| local path | sources/line__lighthouse |
| HEAD | d095eaa |
| stars/forks | 254 / 18 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2026-03-26T02:58:01Z |
| trendScore / priorityScore | 110 / 249 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| LLM wiki / memory / graph | 154 | lighthouse/common/vocab/vectors.py, lighthouse/common/cg_detr_transformer.py, lighthouse/common/cg_detr.py |
| RAG / retrieval | 131 | training/standalone_eval/README.md, README.md, training/evaluate.py |
| Security / compliance | 69 | training/evaluate.py, training/standalone_eval/eval.py, training/standalone_eval/utils.py |
| Spec / doc-driven workflow | 8 | lighthouse/common/cg_detr.py, lighthouse/common/eatr.py, lighthouse/common/moment_detr.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | evalObservability, graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, security-compliance, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 146 |
| manifests | 2 |
| docs | 2 |
| tests | 4 |
| ci/ops | 2 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Lighthouse |
| headings | Lighthouse / News / Installation / Inference API (Available for both CPU/GPU mode) / use GPU if available / slowfast_path is necesary if you use clip_slowfast features / encode video features / moment retrieval & highlight detection / Gradio demo / Supported models, datasets, and features |
| excerpt | Lighthouse ! Contributions welcome https //img.shields.io/badge/contributions welcome brightgreen.svg ! License https //img.shields.io/badge/License Apache%202.0 brightgreen.svg https //opensource.org/licenses/Apache 2.0 ! Video moment retrieval demo https //img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face Spaces blue https //huggingface.co/spaces/awkrail/lighthouse demo ! Audio moment retrieval demo https //img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face Spaces blue https //huggingface.co/spaces/lighthouse emnlp2024/AudioMomentRetrieval ! Run pytest https //github.com/line/lighthouse/actions/workflows/pytest.yml/badge.svg https //github.com/line/lighthouse/actions/workflows/pytest.yml |


## 주요 파일

### Manifests

- training/standalone_eval/README.md
- README.md


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| lighthouse | 66 |
| configs | 26 |
| data | 23 |
| training | 12 |
| api_example | 4 |
| gradio_demo | 4 |
| tests | 4 |
| .github | 2 |
| .gitignore | 1 |
| LICENSE | 1 |
| mypy.ini | 1 |
| README.md | 1 |
| setup.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 81 |
| .yml | 28 |
| .jsonl | 24 |
| [no-ext] | 7 |
| .md | 2 |
| .ini | 1 |
| .json | 1 |
| .mp4 | 1 |
| .wav | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
