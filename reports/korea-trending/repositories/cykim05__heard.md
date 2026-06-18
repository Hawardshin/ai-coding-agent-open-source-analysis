# cykim05/heard

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/cykim05/heard |
| local path | sources/cykim05__heard |
| HEAD | 0a01d77 |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-06-12T11:26:52Z |
| trendScore / priorityScore | 74 / 171 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 441 | README.md, requirements.txt, docs/v0.3_body_draft.md |
| Korean language / Korea domain | 166 | README.md, docs/decisions/0002-cost-constrained-model-tier.md, docs/decisions/0003-track-b-translation-shortcut.md |
| Security / compliance | 108 | docs/v0.3_body_draft.md, docs/lab_notebook/2026-04-25_day3_sweep.md, docs/plans/GIT_WORKFLOW.md |
| LLM wiki / memory / graph | 100 | README.md, docs/plans/DATASET.md, docs/plans/GIT_WORKFLOW.md |
| Spec / doc-driven workflow | 59 | README.md, docs/decisions/0001-openrouter-unified-gateway.md, docs/decisions/0002-cost-constrained-model-tier.md |
| Local LLM / on-device inference | 37 | README.md, docs/v0.3_body_draft.md, docs/lab_notebook/2026-04-25_day3_sweep.md |
| Frontend / developer experience | 7 | README.md, docs/decisions/0001-openrouter-unified-gateway.md, docs/plans/DATASET.md |
| AI agent / tool use | 1 | report/report.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, data-ml, evalObservability, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, local-llm, localRuntime, rag, security-compliance, spec-driven, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 156 |
| manifests | 2 |
| docs | 18 |
| tests | 4 |
| ci/ops | 0 |
| spec artifacts | 2 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Heard v0.1 → v0.2 |
| headings | Heard v0.1 → v0.2 / The idea / What v0.1 → v0.2 ships / Headline results (v0.2 expanded sweep) / NODE lift on `ko_native` — every SUT improves under retrieval / Reflective vs advisory — pairwise judge replicates v0.1 dominance under 5.5× sample / Per-SUT reflective share — `kanana_8b` leads the lineup / int4 vs fp16 — the marginal gains do not survive paired analysis / Language-axis decay holds across the lineup / Quickstart |
| excerpt | Heard v0.1 → v0.2 A Korean on device LLM that reflects your past self back at you at decision moments. Natural Language Processing 2150534701 · Term Project 1 · 2026 · Chanyoung Kim 20243053 ! Part 1 Proposal https //img.shields.io/badge/Part 1 Proposal PDF 6b7280?style=for the badge&logo=adobeacrobatreader&logoColor=white report/260419 NLP termproject 1.pdf ! Part 2 Technical Report https //img.shields.io/badge/Part 2 Technical Report EF4444?style=for the badge&logo=adobeacrobatreader&logoColor=white report/report.pdf ! Final Report https //img.shields.io/badge/Submission Final Report PDF 1F6FEB?style=for the badge&logo=adobeacrobatreader&logoColor=white 20243053.pdf ! HuggingFace Dataset h |


## 주요 파일

### Manifests

- README.md
- requirements.txt


### Spec / Docs / Prompt Artifacts

- requirements.txt
- docs/plans/PLAN.md


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| experiments | 50 |
| src | 29 |
| data | 18 |
| scripts | 17 |
| docs | 15 |
| figures | 5 |
| report | 5 |
| configs | 4 |
| tests | 4 |
| .githooks | 2 |
| .env.example | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| LICENSE | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 50 |
| .md | 18 |
| .log | 17 |
| .json | 16 |
| .jsonl | 16 |
| [no-ext] | 12 |
| .csv | 9 |
| .txt | 8 |
| .yaml | 7 |
| .example | 1 |
| .sh | 1 |
| .tex | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
