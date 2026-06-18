# hwan96-ai/genai-case-study-showcase

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/hwan96-ai/genai-case-study-showcase |
| local path | sources/hwan96-ai__genai-case-study-showcase |
| HEAD | 7c8ed7d |
| stars/forks | 0 / 0 |
| language | HTML |
| license |  |
| pushedAt | 2026-06-12T00:23:16Z |
| trendScore / priorityScore | 75 / 120 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 39 | README.md, assets/styles.css, cases/a02-tts.html |
| Korean language / Korea domain | 8 | README.md, cases/a02-tts.html, index.html |
| Security / compliance | 3 | README.md, index.html |
| AI agent / tool use | 2 | README.md |
| Spec / doc-driven workflow | 2 | cases/a02-tts.html |
| Frontend / developer experience | 1 | cases/a04-cardfollow.html |
| LLM wiki / memory / graph | 1 | cases/a04-cardfollow.html |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, evalObservability, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 10 |
| manifests | 1 |
| docs | 1 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | 케이스 스터디 쇼케이스 (case-study-showcase) |
| headings | 케이스 스터디 쇼케이스 (case-study-showcase) / 구조 (조립식) / 열람 방법 / 새 케이스 페이지 추가 방법 / 데이터 출처 / 기술 노트 (외부 호출 없음) / 경계 |
| excerpt | 케이스 스터디 쇼케이스 case study showcase 브라우저로 열어 보는 케이스 스터디 쇼케이스입니다. 단일 index.html 759라인 모놀리식 에서 조립식 모듈러 구조 로 재구성했습니다 — 케이스를 추가/교체하기 쉽고, 공유 스타일 한 곳만 고치면 전 페이지에 반영됩니다. 면접 화면공유와 A4 인쇄 @media print 를 함께 고려했습니다. 포트폴리오 승격 2026 06 12 사이트 타이틀을 "GenAI 케이스 스터디 포트폴리오"로 승격하고, index.html 에 소개 About 섹션 허브 §1 포지셔닝 압축 — 표기는 "GenAI Solutions Consultant Saltware "까지만, 실명·연락처 없음 + 전문 영역 칩 + 증거 원칙 스트립 + GitHub 프로필/벤치마크 레포 링크 버튼을 추가했습니다. 외부 링크는 기존 승인 4건 + github.com/hwan96 ai 프로필만 허용합니다. 공개 배포 2026 06 12 이 폴더는 공개 레포 hwan96 ai/genai case study showcase 로 게시되어 GitHub Pages에서 서빙됩니다 — <https //hwan96 ai.github.io/genai case study showcase/ . 여기 원본 를 수정하면 공개 레포에도 복사·푸시해야 반영됩니다. 공개 게시 전 체크 경계 스캐너 clean + 외부 링크는 승인 4건 newswi |


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
| cases | 6 |
| assets | 2 |
| index.html | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .html | 7 |
| .css | 1 |
| .js | 1 |
| .md | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
