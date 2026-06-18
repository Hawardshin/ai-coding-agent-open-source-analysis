# naver-ai/tobo

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver-ai/tobo |
| local path | sources/naver-ai__tobo |
| HEAD | fa41194 |
| stars/forks | 32 / 1 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2026-02-02T09:08:57Z |
| trendScore / priorityScore | 67 / 185 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| LLM wiki / memory / graph | 24 | README.md, util/misc.py, util/model_ema_sched.py |
| Security / compliance | 22 | docs/Evaluation.md, timm/data/auto_augment.py, timm/data/tf_preprocessing.py |
| RAG / retrieval | 13 | docs/Evaluation.md, engine_tobo.py, models_tobo.py |
| Korean language / Korea domain | 7 | README.md, timm/models/rexnet.py, timm/optim/adamp.py |
| Spec / doc-driven workflow | 3 | timm/data/transforms_factory.py, timm/models/efficientnet.py |
| Frontend / developer experience | 2 | util/pos_embed.py |
| Infra / observability | 1 | timm/utils/jit.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | data-ml, documentParsing, evalObservability, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, rag, security-compliance, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 143 |
| manifests | 1 |
| docs | 3 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Token Bottleneck: One Token to Remember Dynamics |
| headings | Token Bottleneck: One Token to Remember Dynamics / Abstract / ✨ Highlights / Token bottleneck enables conservative scene summarization that effectively captures temporal dynamics / 🚀 Contents / 📍Install / 📍Dataset / 📍Train / 📍Evaluation / Video Label Propagation |
| excerpt | Token Bottleneck One Token to Remember Dynamics Taekyung Kim https //scholar.google.co.kr/citations?user=u 9bdkwAAAAJ&hl=en <sup 1</sup , Dongyoon Han https //sites.google.com/site/dyhan0920/ <sup 1</sup , Byeongho Heo https //sites.google.com/view/byeongho heo/home <sup 1</sup , Jeongeun Park https //jeongeun park page.github.io/ <sup 2</sup , Sangdoo Yun https //sangdooyun.github.io/ <sup 1</sup <br <sup 1</sup NAVER AI LAB https //naver career.gitbook.io/en/teams/clova cic/ai lab <sup 2</sup Korea University ! paper https //img.shields.io/badge/arXiv Paper red.svg https //arxiv.org/abs/2507.06543 ! Project Page https //img.shields.io/badge/Project Page blue?logo=github https //token bottl |


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
| timm | 125 |
| util | 10 |
| docs | 2 |
| engine_tobo.py | 1 |
| LICENSE | 1 |
| main_pretrain_tobo.py | 1 |
| models_tobo.py | 1 |
| NOTICE | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 132 |
| .txt | 6 |
| .md | 3 |
| [no-ext] | 2 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
