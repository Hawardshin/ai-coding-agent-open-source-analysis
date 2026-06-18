# naver-ai/MM-JudgeBias

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver-ai/MM-JudgeBias |
| local path | sources/naver-ai__MM-JudgeBias |
| HEAD | f0df841 |
| stars/forks | 9 / 1 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2026-06-13T08:52:39Z |
| trendScore / priorityScore | 72 / 156 |


## 한줄 해석

- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 26 | README.md, mm_judgebias/evaluate.py, mm_judgebias/prompts.py |
| Spec / doc-driven workflow | 19 | README.md, mm_judgebias/evaluate.py, prepare/vcr_overlay.py |
| Frontend / developer experience | 9 | indices/art-bench.json, mm_judgebias/models/anthropic_api.py, mm_judgebias/models/google_api.py |
| Local LLM / on-device inference | 5 | README.md, mm_judgebias/models/vllm_server.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | data-ml, evalObservability, frontend-dx, korea-signal, llmFramework, local-llm, localRuntime, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 34 |
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
| title |  |
| headings | Introduction / Installation / Quick Start / 1. Prepare dataset / 2. Run a judge / 3. Evaluation / 4. Programmatic use / Supported Judge Models / Citation / License |
| excerpt | <h1 align="center" <img src="assets/bias logo.png" alt="MM JudgeBias Logo" height="30" style="vertical align 4px;" / MM JudgeBias A Benchmark for Evaluating Compositional Biases <br in MLLM as a Judge ACL 2026 Main </h1 <p align="center" Official evaluation code for MM JudgeBias &nbsp; &nbsp; <a href="https //mm judgebias.github.io/" 🌐 Project Page</a &nbsp; &nbsp; <a href="https //huggingface.co/datasets/naver ai/MM JudgeBias" 🤗 Dataset</a &nbsp; &nbsp; <a href="https //arxiv.org/pdf/2604.18164" 📝 Paper</a </p <h1 align="center" <img src="assets/overview.png" alt="overview" width="100%" style="vertical align 4px;" / </h1 Introduction Compositional Bias is the failure mode we target in th |


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
| mm_judgebias | 15 |
| indices | 9 |
| prepare | 4 |
| scripts | 3 |
| LICENSE | 1 |
| README.md | 1 |
| requirements.txt | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 20 |
| .json | 10 |
| .md | 2 |
| .txt | 1 |
| [no-ext] | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
