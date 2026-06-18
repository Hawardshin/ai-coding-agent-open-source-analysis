# line/headver

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/headver |
| local path | sources/line__headver |
| HEAD | 6ed9316 |
| stars/forks | 298 / 9 |
| language |  |
| license | Apache-2.0 |
| pushedAt | 2024-03-08T00:47:17Z |
| trendScore / priorityScore | 79 / 192 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 10 | README.md, examples/githubWorkflows-npm.md, examples/typescript.md |
| Spec / doc-driven workflow | 4 | README.md, examples/typescript.md |
| Korean language / Korea domain | 3 | CODE_OF_CONDUCT.md, CONTRIBUTING.md |
| LLM wiki / memory / graph | 2 | README.md, CODE_OF_CONDUCT.md |
| Security / compliance | 2 | CODE_OF_CONDUCT.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | example-rich, frontend-dx, korea-signal, llm-wiki-memory, security-compliance, spec-driven |
| stacks | docs/awesome-list |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 12 |
| manifests | 1 |
| docs | 10 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | HeadVer Specification |
| headings | HeadVer Specification / Introduction / Code Examples / Motivation / Benefits / Rules / 1. {head} / 2. {yearweek} / 3. {build} / Tips |
| excerpt | HeadVer Specification ! example images/example.png It says; the 3rd public release, at around the 24th week of 2019 , from build 59 . Introduction a version specification that has {head}.{yearweek}.{build} system. The name HeadVer stands for "only head number is enough to maintain!" because it only allows to set the first number manually, and rest numbers are automatic. It simplifies x.y.z versioning and gurantees incremental version stamping on top of various versioning scripts introduced in this repository. HeadVer versioning system is battle tested on the 40+ app/web services. {head} manual. Zero based number. {yearweek} automatic. 2 digit for year and 2 digit for week number. {build} aut |


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
| examples | 8 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 10 |
| .ps1 | 1 |
| [no-ext] | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
