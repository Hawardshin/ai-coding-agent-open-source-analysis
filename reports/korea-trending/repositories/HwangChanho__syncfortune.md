# HwangChanho/syncfortune

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/HwangChanho/syncfortune |
| local path | sources/HwangChanho__syncfortune |
| HEAD | aec0383 |
| stars/forks | 0 / 0 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T11:57:26Z |
| trendScore / priorityScore | 74 / 164 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 181 | README.md, app/assets/icons/README.md, app/package.json |
| Spec / doc-driven workflow | 103 | README.md, app/tsconfig.json, tsconfig.json |
| Security / compliance | 60 | README.md, tsconfig.json, spec/chart.ts |
| LLM wiki / memory / graph | 25 | spec/chart.ts, app/src/components/ChartPicker.tsx, app/src/lib/dailyFortune.ts |
| Korean language / Korea domain | 12 | README.md, docs/legal/privacy-en.md, docs/legal/terms-en.md |
| RAG / retrieval | 5 | README.md, spec/chart.ts |
| AI agent / tool use | 4 | app/src/components/BirthPlacePicker.tsx, app/src/lib/dailyFortune.ts |
| Infra / observability | 1 | app/package.json |
| Local LLM / on-device inference | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, frontend, frontend-dx, infra-observability, korea-signal, llm-wiki-memory, llmFramework, local-llm, localRuntime, rag, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 107 |
| manifests | 6 |
| docs | 10 |
| tests | 1 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | SyncFortune |
| headings | SyncFortune / 아키텍처 (Architecture) / L1 결정론 엔진 (`engine/`) / 빠른 시작 — 엔진 데모 (API 키 불필요) / L4 앱 (`app/`) / 앱 실행 / 설계 원칙 (Design Principles) / 프라이버시 · 보안 (Privacy & Security) / 기술 스택 (Tech Stack) / 공개 범위 (Repo Scope) |
| excerpt | SyncFortune AI powered Korean fortune telling app built on a deterministic Saju 四柱, Four Pillars engine with a RAG grounded LLM interpretation layer. 사주 명리 를 핵심으로 자미두수를 보조로 통합하는 AI 운세 앱. The thesis the calendar math is deterministic; only interpretation is generative. The Four Pillars chart palja , hidden stems, clashes/combinations, twelve life stages, and sinsal are computed by a rule engine — never hallucinated. An LLM interprets on top of that structured chart, grounded by a curated knowledge layer. This "encoded expert layer" is what separates the product from a generic LLM wrapper. 아키텍처 Architecture 이 레포는 L1 엔진 ·L4 앱 코드 + 아키텍처 문서 를 공개합니다 포트폴리오 범위 . L2 해석 레이어의 프롬프트·명리 지식 콘텐츠 , 골든 데이터셋 , |


## 주요 파일

### Manifests

- README.md
- app/assets/icons/README.md
- app/package.json
- app/tsconfig.json
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

- spec/chart.ts


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| app | 80 |
| engine | 12 |
| docs | 8 |
| .env.example | 1 |
| .gitignore | 1 |
| package-lock.json | 1 |
| package.json | 1 |
| README.md | 1 |
| spec | 1 |
| tsconfig.json | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 45 |
| .tsx | 39 |
| .md | 9 |
| .json | 8 |
| .example | 2 |
| .js | 2 |
| .yml | 1 |
| [no-ext] | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
