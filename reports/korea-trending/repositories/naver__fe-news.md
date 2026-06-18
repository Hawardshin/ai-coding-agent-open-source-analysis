# naver/fe-news

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/fe-news |
| local path | sources/naver__fe-news |
| HEAD | fcff20b |
| stars/forks | 6268 / 320 |
| language |  |
| license |  |
| pushedAt | 2026-06-04T09:36:19Z |
| trendScore / priorityScore | 118 / 345 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 500 | issues/2020-02.md, issues/2020-03.md, issues/2020-04.md |
| Korean language / Korea domain | 241 | README.md, issues/2020-02.md, issues/2020-03.md |
| LLM wiki / memory / graph | 90 | issues/2020-02.md, issues/2020-07.md, issues/2020-10.md |
| MCP / tool protocol | 75 | issues/2025-05.md, issues/2025-07.md, issues/2025-08.md |
| AI agent / tool use | 71 | issues/2021-11.md, issues/2023-11.md, issues/2025-04.md |
| Security / compliance | 42 | issues/2020-12.md, issues/2022-07.md, issues/2024-01.md |
| Spec / doc-driven workflow | 34 | issues/2021-05.md, issues/2021-08.md, issues/2022-02.md |
| Infra / observability | 28 | issues/2020-07.md, issues/2021-05.md, issues/2021-10.md |
| Local LLM / on-device inference | 26 | issues/2024-02.md, issues/2024-08.md, issues/2025-12.md |
| RAG / retrieval | 9 | issues/2023-12.md, issues/2025-08.md, issues/2026-01.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, data-ml, documentParsing, evalObservability, frontend, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, security-compliance, spec-driven, vectorSearch |
| stacks | docs/awesome-list |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 79 |
| manifests | 1 |
| docs | 78 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | FE News |
| headings | FE News / 🚩 발행소식 / 📆 발행주기 / 🔔 구독방법 / 📬 최신소식 / 2026 / 🧑🏻‍💻 Team / 😎 Contributors |
| excerpt | FE News <img src="./assets/logo.svg" width="150" align="right" style="margin 0 0 0 20px" FE News는 네이버 FE 엔지니어들이 엄선한 양질의 FE 및 주요한 기술 소식 들을 큐레이션 해 공유하는 것을 목표로 합니다. 이를 통해 국내 개발자들에게 지식 공유에 대한 가치 인식과 성장에 도움을 주고자 합니다. grin !TIP 네이버 Front end 조직이 어떤 일을 하고, 개발자들이 어떻게 성장하고 있는지 궁금하신가요?<br 네이버 Front end 소개 ../../tree/fe org 국내 FE/JS 생태계 현황을 확인해 보세요!<br State of FE·JS Korea https //naver.github.io/fe news/stateof fejs/ 🚩 발행소식 발행소식은 /issues /issues 폴더 내의 yyyy mm.md 파일을 통해 확인할 수 있습니다. 📆 발행주기 매월 첫째 주 수요일, 월 1회 발행 🔔 구독방법 다음의 방법들을 통해 발행 소식을 구독하실 수 있습니다. !NOTE 대부분의 커밋은 소식의 발행 또는 오타, 정보 수정에 대한 PR의 머지 수준에서 발생합니다. GitHub 프로젝트 watch 를 통해 구독하기 저장소 상단의 watch 버튼을 클릭해 프로젝트를 지켜보는 것으로 구독 RSS 리더를 통해 구독하기 RSS 리더를 통해 G |


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
| issues | 77 |
| assets | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 78 |
| .svg | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
