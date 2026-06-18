# simonsez9510/oh-my-wiki

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/simonsez9510/oh-my-wiki |
| local path | sources/simonsez9510__oh-my-wiki |
| HEAD | 27b1197 |
| stars/forks | 0 / 0 |
| language | PowerShell |
| license |  |
| pushedAt | 2026-06-02T14:32:02Z |
| trendScore / priorityScore | 69 / 113 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| LLM wiki / memory / graph | 154 | demo/README.md, demo/_after_example/README.md, README.md |
| RAG / retrieval | 25 | README.md, skills/bootstrap/prompts/first_build.md, skills/bootstrap/prompts/second_build.md |
| Frontend / developer experience | 2 | README.md, skills/bootstrap/SKILL.md |
| Korean language / Korea domain | 1 | .claude-plugin/plugin.json |
| Spec / doc-driven workflow | 1 | skills/bootstrap/prompts/second_build.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | coding-agent, context-engineering, documentParsing, example-rich, frontend-dx, korea-signal, llm-wiki, llm-wiki-memory, rag, spec-driven, vectorSearch |
| stacks | docs/awesome-list |
| capabilities | Vector/search store, Document parsing/OCR |


## 구조 요약

| key | value |
| --- | --- |
| files | 29 |
| manifests | 3 |
| docs | 20 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 2 |
| agent instruction files | 2 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Oh My Wiki |
| headings | Oh My Wiki / 한 줄 소개 / v2.0 — 무엇이 바뀌었나 / 사전 준비 / 설치 / 사용 / 4 트랙 / 아키텍처 / 일관성 카드 5규칙 (스킬이 vault에 자동 박음) / 데모 |
| excerpt | Oh My Wiki 옵시디언 vault를 메타 페르소나 LLM Wiki로 부트스트랩하는 Claude Code 플러그인. 직무 하드코딩 없이 질문 몇 개로 임의 직무 페르소나를 vault에 박고, 폴더·일관성카드·1차/2차 빌드까지 자동 실행. ! License MIT https //img.shields.io/badge/License MIT yellow.svg https //opensource.org/licenses/MIT ! Claude Code https //img.shields.io/badge/Claude%20Code Plugin blue https //claude.com/code ! Obsidian https //img.shields.io/badge/Obsidian 1.12.7%2B 7c3aed https //obsidian.md 한 줄 소개 빈 vault든, 수천 파일이 쌓인 기존 vault든 — 자연어 한 줄로 페르소나 vault 어휘 사전 + 일관성 규칙 + 4축 properties + 대시보드 를 만든다. v2.0부터 페르소나는 회계사·변호사 같은 하드코딩이 아니라 vault에 박히는 메타 페르소나 라, 어떤 직무·도메인에도 맞는다. v2.0 — 무엇이 바뀌었나 영역 v1.x v2.0 페르소나 회계사·변호사·매체·연구자 하드코딩 4종 메타 페르소나 질문 5종으로 즉석 생성, 임의 직무 모드 CREATE만 CREATE / |


## 주요 파일

### Manifests

- demo/README.md
- demo/_after_example/README.md
- README.md


### Spec / Docs / Prompt Artifacts

- skills/bootstrap/prompts/first_build.md
- skills/bootstrap/prompts/second_build.md


### Agent Instruction Files

- skills/bootstrap/prompts/first_build.md
- skills/bootstrap/prompts/second_build.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| skills | 13 |
| demo | 10 |
| .claude-plugin | 2 |
| .gitignore | 1 |
| LICENSE | 1 |
| NOTICE | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 20 |
| [no-ext] | 3 |
| .base | 2 |
| .json | 2 |
| .ps1 | 2 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
