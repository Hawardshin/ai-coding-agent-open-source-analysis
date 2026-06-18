# naver/disco

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/disco |
| local path | sources/naver__disco |
| HEAD | 5ea6fde |
| stars/forks | 75 / 4 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2025-11-27T13:12:15Z |
| trendScore / priorityScore | 72 / 200 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 67 | disco/utils/moving_average.py, tests/__init__.py, tests/accumulation_sampler_test.py |
| Security / compliance | 28 | disco/tuners/losses/chi_square.py, disco/tuners/losses/f_divergence.py, disco/tuners/losses/js.py |
| LLM wiki / memory / graph | 6 | README.MD, disco/distributions/distribution.py, disco/utils/helpers.py |
| AI agent / tool use | 5 | tests/lm_distribution_test.py |
| RAG / retrieval | 2 | disco/utils/helpers.py |
| Spec / doc-driven workflow | 1 |  |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, security-compliance, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 77 |
| manifests | 2 |
| docs | 1 |
| tests | 10 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.MD |
| title | 🕺🏽 disco: A Toolkit for Distributional Control of Generative Models |
| headings | 🕺🏽 disco: A Toolkit for Distributional Control of Generative Models / Installation / Standard installation / Quick introduction / Distributions / Features / Controlling Generation / Controlled Conditional Generation / Improving the approximation through minimizing other f-divergences / Reinforcement Learning from Human Feedback (RLHF) |
| excerpt | 🕺🏽 disco A Toolkit for Distributional Control of Generative Models The 🕺🏽 disco toolkit allows to control language models and other generative systems to match human preferences while avoiding catastrophic forgetting. To achieve this, disco decouples the problem of expressing what properties the model should have from how to actually get the desired model as separate steps. Step 1 ⚓ We express how the target distribution should be First, we define some feature over the generated samples that matters to us. It can be anything we can compute. For example, on a language model it can be as simple as whether the generated text contains a certain word or as complex as the compilability of some |


## 주요 파일

### Manifests

- Makefile
- requirements.txt


### Spec / Docs / Prompt Artifacts

- requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| disco | 52 |
| tests | 10 |
| tutorials | 6 |
| scripts | 2 |
| .gitignore | 1 |
| LICENSE | 1 |
| make.bat | 1 |
| Makefile | 1 |
| README.MD | 1 |
| requirements.txt | 1 |
| setup.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 65 |
| .ipynb | 5 |
| [no-ext] | 3 |
| .txt | 2 |
| .bat | 1 |
| .md | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
